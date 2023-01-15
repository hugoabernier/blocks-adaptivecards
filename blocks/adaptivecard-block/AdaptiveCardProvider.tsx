import * as AdaptiveCards from "adaptivecards";
import * as React from 'react';

import { ActionMenu, ActionList, Box } from '@primer/react'

import "./index.css";
import { IContainerHost, Theme } from "./containers/IContainerHost";
import { VivaConnectionHost, VivaConnectionsLightHost } from "./containers/viva-connections/VivaConnectionsLight";
import { DefaultHost } from "./containers/default/DefaultHost";
import { WebChatHost } from "./containers/webchat/WebChat";
import { OutlookHost } from "./containers/outlook/OutlookHost";
import { WidgetHost } from "./containers/widget/WidgetHost";
import { TeamsHost } from "./containers/teams/TeamsHost";
import { CortanaHost } from "./containers/cortana/CortanaHost";
import { CortanaClassicHost } from "./containers/cortana-classic/CortanaClassicHost";
import { VivaConnectionsDarkHost } from "./containers/viva-connections/VivaConnectionsDark";

export interface IAdaptiveCardProviderProps {
    content: string;
}

export interface IAdaptiveCardProviderState {
    selectedHostAppIndex: number;
    selectedThemeIndex: number;
}

export class AdaptiveCardProvider extends React.Component<IAdaptiveCardProviderProps, IAdaptiveCardProviderState> {

    private hostTypes = [
        { name: 'Bot Framework WebChat', id: 'webchat', hasDark: false },
        { name: 'Outlook Actionable Messages', id: 'outlook', hasDark: false },
        { name: 'Microsoft Teams', id: 'teams', hasDark: true },
        { name: 'Viva Connections', id: 'viva-connections', hasDark: true },
        { name: 'Cortana Skills', id: 'cortana-skills', hasDark: true },
        { name: 'Bot Framework Other Channels (Image render)', id: 'bf-image', hasDark: false },
        { name: 'Cortana Skills (Classic)', id: 'cortana-classic', hasDark: false },
        { name: 'Federated Search', id: 'federated-search', hasDark: false },
        { name: 'Widgets Board', id: 'widget', hasDark: true },
    ];

    private themes = [ 
        { name: 'Light', isDark: false },
        { name: 'Dark', isDark: true }
    ];

    /**
     *
     */
    constructor(props: IAdaptiveCardProviderProps) {
        super(props);
        this.state = { selectedHostAppIndex: 0, selectedThemeIndex: 0 };
    }

    public render(): React.ReactElement<IAdaptiveCardProviderProps> {
        const { selectedHostAppIndex, selectedThemeIndex } = this.state;
        const selectedHost = this.hostTypes[selectedHostAppIndex];
        const selectedTheme = this.themes[selectedThemeIndex];
        var container: IContainerHost = new DefaultHost();
        
        switch (selectedHost.id) {
            case 'webchat':
                container = new WebChatHost();
                break;
            case 'outlook':
                container = new OutlookHost();
                break;
            case 'teams':
                container = new TeamsHost();
                break;
            case 'viva-connections':
                if (selectedTheme.isDark) {
                    container = new VivaConnectionsDarkHost();
                } else {
                    container = new VivaConnectionsLightHost();
                }

                break;
            case 'cortana-skills':
                container = new CortanaHost();
                break;
            // case 'bf-image':
            //     hostConfig = null;
            //     break;
            case 'cortana-classic':
                container = new CortanaClassicHost();
                break;
            // case 'federated-search':
            //     hostConfig = null;
            //     break;
            case 'widget':
                container = new WidgetHost();
                break;
            // default:
            //     hostConfig = null;
            //     break;
        }



        // Create an AdaptiveCard instance
        var adaptiveCard = new AdaptiveCards.AdaptiveCard();

        // Set its hostConfig property unless you want to use the default Host Config
        // Host Config defines the style and behavior of a card
        adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(container.getHostConfig(selectedTheme.isDark));

        // Set the adaptive card's event handlers. onExecuteAction is invoked
        // whenever an action is clicked in the card
        adaptiveCard.onExecuteAction = function (_action) { alert("Ow!"); }

        // Parse the card payload
        adaptiveCard.parse(JSON.parse(this.props.content));

        // Render the card to an HTML element:
        const cardData = adaptiveCard.render()

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
                                {this.hostTypes.map((type, index) => (
                                    <ActionList.Item key={index} selected={index === selectedHostAppIndex} onSelect={() => this.setState({ 
                                        selectedThemeIndex: this.hostTypes[index].hasDark ? this.state.selectedThemeIndex : 0,
                                        selectedHostAppIndex: index
                                    }
                                        )}>
                                        {type.name}
                                    </ActionList.Item>
                                ))}
                            </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>
                <Box p={1} >
                    <ActionMenu>
                        <ActionMenu.Button aria-label="Select theme" disabled={!selectedHost.hasDark}>
                            Theme: {selectedTheme.name}
                        </ActionMenu.Button>



                        <ActionMenu.Overlay>
                            <ActionList selectionVariant="single">
                                {this.themes.map((type, index) => (
                                    <ActionList.Item key={index} selected={index === selectedThemeIndex} onSelect={() => this.setState({ selectedThemeIndex: index })}>
                                        {type.name}
                                    </ActionList.Item>
                                ))}
                            </ActionList>
                        </ActionMenu.Overlay>
                    </ActionMenu>
                </Box>
                </Box>

                <Box >

                    <div id="cardArea" className="acd-designer-cardArea" role="region" aria-label="card preview" style={{backgroundColor: container.cardAreaBackgroundColor}}>



                        <div style={{ flex: '1 1 100%', overflow: 'auto' }}>
                            <div className="ac-designer-host">
                                <div className="host-container">
                                    <div className={container.containerClass} dangerouslySetInnerHTML={{ __html: cardData ? cardData?.innerHTML : "No card" }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Box>
        );
    }
}

