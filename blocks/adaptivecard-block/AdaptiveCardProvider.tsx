import * as AdaptiveCards from "adaptivecards";
import * as React from 'react';

import { ActionMenu, ActionList, Box } from '@primer/react'

import "./index.css";
import { ColorTheme, ContainerSize, CortanaClassicContainer, CortanaContainer, FederatedSearchContainer, HostContainer, OutlookContainer, TeamsContainer, VivaConnectionsContainer, WebChatContainer, WidgetContainer } from "./containers";
import { useEffect, useMemo, useRef, useState } from "react";
import { AdaptiveCard, IMarkdownProcessingResult } from "adaptivecards";
import markdownit from "markdown-it";
import DOMPurify from "dompurify";
import { IAdaptiveCardProviderProps } from "./IAdaptiveCardProviderProps";

export function AdaptiveCardProvider(props: IAdaptiveCardProviderProps) {

    const [selectedHostAppIndex, setSelectedHostAppIndex] = useState(0);
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);
    const [selectedWidgetSizeIndex, setSelectedSizeIndex] = useState(0);
    const [selectedDeviceIndex, setSelectedDeviceIndex] = useState(0);
    const [showToolbar, setShowToolbar] = useState<boolean>(true);

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

    const md = new markdownit({
        breaks: true,
        html: false,
        linkify: true,
        typographer: true,
        xhtmlOut: true
    });

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

        // Process markdown and purify HTML
        AdaptiveCard.onProcessMarkdown = (text: string, result: IMarkdownProcessingResult) => {
            result.outputHtml = DOMPurify.sanitize(md.render(text));
            result.didProcess = true;
        };

        // Parse the card payload
        adaptiveCard.parse(props.payload);

        // Empty the existing content before reloading
        if (divElement.current) {
            while (divElement.current.firstChild) {
                divElement.current.removeChild(divElement.current.firstChild);
            }
            selectedHost.renderTo(divElement.current);
            adaptiveCard.render(selectedHost.cardHost);

            // Override the background color based on selected host and theme
            if (cardArea.current) {
                cardArea.current.style.backgroundColor = selectedHost.getBackgroundColor();
            }
        }

        // Set designer host constraint based on device emulation
        if (designerHost.current) {
            let maxWidth: string = "";
            if (selectedHost.enableDeviceEmulation) {
                maxWidth = HostContainer.supportDeviceSizes[selectedDeviceIndex];
            }
            designerHost.current.style.maxWidth = maxWidth;
        }
    }

    useMemo(()=> {
        console.log("Use memo", props.metadata);

        if (props.metadata) {
            const { hostApp, theme, deviceEmulation, hideToolbar } = props.metadata;
            const newContainerIndex: number = hostContainers.findIndex(c => c.name == hostApp);
            console.log("New container index", newContainerIndex);
            if (newContainerIndex > -1) {
                setSelectedHostAppIndex(newContainerIndex);
            }

            const newThemeIndex: number = Object.values(HostContainer.supportedContainerThemes).findIndex((t: string) => t == theme);
            console.log("New theme index", newThemeIndex)
            if (newThemeIndex > -1) {
                setSelectedThemeIndex(newThemeIndex);
            }

            const newDeviceIndex: number = Object.values(HostContainer.supportedDeviceEmulations).findIndex((d:string)=> d == deviceEmulation);
            if (newDeviceIndex) {
                setSelectedDeviceIndex(newDeviceIndex);
            }

            setShowToolbar(!hideToolbar);
        }
        
    }, [props.metadata]);

    useEffect(() => {
        renderAdaptiveCard();
    }, [props, selectedHostAppIndex, selectedThemeIndex, selectedWidgetSizeIndex, selectedDeviceIndex]);

    return (
        <Box padding={"8px"} >
            { showToolbar &&  
            <Box p={1} display="flex" bg="canvas.subtle" borderColor="border.default" borderWidth={1} borderStyle="solid">
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
                        <ActionMenu.Button aria-label="Select theme" disabled={!selectedHost.supportsMultipleThemes} title={selectedHost.supportsMultipleThemes ? "Select a theme" : "This host does not support themes"}>
                            Theme: {HostContainer.supportedContainerThemes[selectedThemeIndex]}
                        </ActionMenu.Button>
                        <ActionMenu.Overlay>
                            <ActionList selectionVariant="single">
                                {HostContainer.supportedContainerThemes.map((themeName, index) => (
                                    <ActionList.Item key={index} selected={index === selectedThemeIndex} onSelect={() => {
                                        setSelectedThemeIndex(index);
                                        }}>
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

                <Box p={1} >
                    <ActionMenu>
                        <ActionMenu.Button aria-label="Select device emulation" disabled={!selectedHost.enableDeviceEmulation} title={selectedHost.enableDeviceEmulation ? "Select a device to emulate" : "This host does not support device emulation"}>
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

            </Box>}

            <Box borderColor="border.default" borderWidth={1} borderStyle="solid" borderTopStyle="none">
                <div className="acd-designer-cardArea" ref={cardArea}>
                    <div className="card-inner">
                        <div id="designerHost" className="acd-designer-host" ref={designerHost}>
                            <div ref={divElement} />
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    );
}

