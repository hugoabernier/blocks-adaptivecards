import { DefaultHost } from '../default/DefaultHost';

import hostConfigLight from './viva-connection-light.json';
import './viva-connections-container-light.css';

export class VivaConnectionsLightHost extends DefaultHost {
    constructor() {
        super();
        this.containerClass = "vivaConnectionsContainer";
        this.cardAreaBackgroundColor = "#F6F6F6";
    }

    public getHostConfig(_isDark: boolean) {
            return hostConfigLight;
    }

}