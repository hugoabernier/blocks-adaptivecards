import { DefaultHost } from '../default/DefaultHost';

import hostConfigDark from './viva-connections-dark.json'
import './viva-connections-container-dark.css';

export class VivaConnectionsDarkHost extends DefaultHost {
    constructor() {
        super();
        this.containerClass = "vivaConnectionsContainer";
        this.cardAreaBackgroundColor = "#1b1a19";
    }
    public getHostConfig(_isDark: boolean) {
        return hostConfigDark;
    }
}