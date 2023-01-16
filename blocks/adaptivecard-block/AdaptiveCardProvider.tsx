import * as AdaptiveCards from "adaptivecards";
import * as React from 'react';

import { ActionMenu, ActionList, Box } from '@primer/react'

import "./index.css";
import { ColorTheme, ContainerSize, CortanaClassicContainer, CortanaContainer, FederatedSearchContainer, HostContainer, OutlookContainer, TeamsContainer, VivaConnectionsContainer, WebChatContainer, WidgetContainer } from "./containers";
import { useEffect, useRef, useState } from "react";
// import { IContainerHost, Theme } from "./containers/IContainerHost";
// import { VivaConnectionHost, VivaConnectionsLightHost } from "./containers/viva-connections/VivaConnectionsLight";
// import { DefaultHost } from "./containers/default/DefaultHost";
// import { WebChatHost } from "./containers/webchat/WebChat";
// import { OutlookHost } from "./containers/outlook/OutlookHost";
// import { WidgetHost } from "./containers/widget/WidgetHost";
// import { TeamsHost } from "./containers/teams/TeamsHost";
// import { CortanaHost } from "./containers/cortana/CortanaHost";
// import { CortanaClassicHost } from "./containers/cortana-classic/CortanaClassicHost";
// import { VivaConnectionsDarkHost } from "./containers/viva-connections/VivaConnectionsDark";

export interface IAdaptiveCardProviderProps {
    content: string;
}


export function AdaptiveCardProvider(props: IAdaptiveCardProviderProps) {

    const [selectedHostAppIndex, setSelectedHostAppIndex] = useState(0);
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
    const [selectedWidgetSizeIndex, setSelectedSizeIndex] = useState(0);
    const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);

    const divElement = useRef<HTMLDivElement>(null);
    const cardArea = useRef<HTMLDivElement>(null);
    const designerHost = useRef<HTMLDivElement>();

    const hostContainers: HostContainer[] = [
        new WebChatContainer("Bot Framework WebChat", "containers/webchat/webchat-container.css"),
        new OutlookContainer("Outlook Actionable Messages", "containers/outlook/outlook-container.css"),
        new TeamsContainer(),
        new VivaConnectionsContainer(),
        new CortanaContainer(),
        new CortanaClassicContainer("Cortana Skills (Classic)", "containers/cortana-classic/cortana-container.css"),
        new FederatedSearchContainer("Federated Search", "containers/federated-search/federated-search-container.css"),
        new WidgetContainer(Object.values(ContainerSize)[selectedWidgetSizeIndex])
    ];

    const selectedHost = hostContainers[selectedHostAppIndex];
    const renderAdaptiveCard = async () => {
        // Create an AdaptiveCard instance
        var adaptiveCard = new AdaptiveCards.AdaptiveCard();
        selectedHost.colorTheme = selectedThemeIndex == 0 ? ColorTheme.Light : ColorTheme.Dark;

        if (selectedHost.constructor.name.endsWith("WidgetContainer")) {
            (selectedHost as WidgetContainer).containerSize = Object.values(ContainerSize)[selectedWidgetSizeIndex];
        }

        // Set its hostConfig property unless you want to use the default Host Config
        // Host Config defines the style and behavior of a card
        adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(selectedHost.getHostConfig());

        // Set the adaptive card's event handlers. onExecuteAction is invoked
        // whenever an action is clicked in the card
        //adaptiveCard.onExecuteAction = function (_action) { alert("Ow!"); }

        // Parse the card payload
        adaptiveCard.parse(JSON.parse(props.content));

        if (divElement.current) {
            while (divElement.current.firstChild) {
                divElement.current.removeChild(divElement.current.firstChild);
            }
            selectedHost.renderTo(divElement.current);
            adaptiveCard.render(selectedHost.cardHost);


            if (cardArea.current) {
                cardArea.current.style.backgroundColor = selectedHost.getBackgroundColor();
            }
        }



        if (designerHost.current) {
            let deviceIndex: number = selectedDeviceIndex;
            let maxWidth: number = 0;
            if (!selectedHost.enableDeviceEmulation) {
                deviceIndex = 0;
            }

            switch (deviceIndex) {
                case 1:
                    maxWidth = 320;
                    break;
                case 2:
                    maxWidth = 414;
                    break;
                case 3:
                    maxWidth = 768;
                    break;
                case 4:
                    maxWidth = 1024;
                    break;
                default:
                    maxWidth = 0;
                    break;
            }

            if (maxWidth > 0) {
                designerHost.current.style.maxWidth = `${maxWidth}px`;
            } else {
                designerHost.current.style.maxWidth = "";
            }
        }
    }
    useEffect(() => {
        renderAdaptiveCard();
    }, [selectedHostAppIndex, selectedThemeIndex, selectedWidgetSizeIndex, selectedDeviceIndex]);

    return (
        <Box >
            <Box p={1} display="flex" bg="canvas.subtle" borderColor="border.default" borderBottomWidth={1} borderBottomStyle="solid">
                <Box p={1} >
                    <ActionMenu>

                        <ActionMenu.Button aria-label="Select host app">
                            Host app: {selectedHost.name}
                        </ActionMenu.Button>

                        <ActionMenu.Overlay>
                            <ActionList selectionVariant="single">
                                {hostContainers.map((type, index) => (
                                    <ActionList.Item key={index} selected={index === selectedHostAppIndex} onSelect={() => setSelectedHostAppIndex(index)}>
                                        {type.name}
                                    </ActionList.Item>
                                ))}
                            </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>
                <Box p={1} >
                    <ActionMenu>
                        <ActionMenu.Button aria-label="Select theme" disabled={!selectedHost.supportsMultipleThemes}>
                            Theme: {HostContainer.supportedContainerThemes[selectedThemeIndex]}
                        </ActionMenu.Button>

                        <ActionMenu.Overlay>
                            <ActionList selectionVariant="single">
                                {HostContainer.supportedContainerThemes.map((themeName, index) => (
                                    <ActionList.Item key={index} selected={index === selectedThemeIndex} onSelect={() => setSelectedThemeIndex(index)}>
                                        {themeName}
                                    </ActionList.Item>
                                ))}
                            </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>

                {selectedHost.constructor.name.endsWith("WidgetContainer") &&

                    <Box p={1} >
                        <ActionMenu>
                            <ActionMenu.Button aria-label="Select container size" disabled={!selectedHost.supportsMultipleSizes}>
                                Container size: {WidgetContainer.supportedContainerSizes[selectedWidgetSizeIndex]}
                            </ActionMenu.Button>



                            <ActionMenu.Overlay>
                            <ActionList selectionVariant="single">
                                {WidgetContainer.supportedContainerSizes.map((sizeName, index) => (
                                    <ActionList.Item key={index} selected={index === selectedWidgetSizeIndex} onSelect={() => setSelectedSizeIndex(index)}>
                                        {sizeName}
                                    </ActionList.Item>
                                ))}
                            </ActionList>
                        </ActionMenu.Overlay>
                        </ActionMenu>
                    </Box>
                }

                {selectedHost.enableDeviceEmulation &&

                    <Box p={1} >
                        <ActionMenu>
                            <ActionMenu.Button aria-label="Select device emulation">
                                Emulate device: {HostContainer.supportedDeviceEmulations[selectedDeviceIndex]}
                            </ActionMenu.Button>

                            <ActionMenu.Overlay>
                                <ActionList selectionVariant="single">
                                    {HostContainer.supportedDeviceEmulations.map((deviceName, index) => (
                                        <ActionList.Item key={index} selected={index === selectedDeviceIndex} onSelect={() => setSelectedDeviceIndex(index)}>
                                            {deviceName}
                                        </ActionList.Item>
                                    ))}
                                </ActionList>
                            </ActionMenu.Overlay>
                        </ActionMenu>
                    </Box>
                }
            </Box>


            <Box>
                <div className="acd-designer-cardArea" ref={cardArea}>
                    <div style={{ flex: "1 1 100%", overflow: "auto" }}>
                        <div id="designerHost" className="acd-designer-host" ref={designerHost}>
                            <div ref={divElement} />
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

