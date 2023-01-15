import { DefaultHost } from '../default/DefaultHost';

import hostConfigLight from './microsoft-teams-light.json';
import hostConfigDark from './microsoft-teams-dark.json'

export class TeamsHost extends DefaultHost {
    public getHostConfig(isDark: boolean) {
        if (isDark) {
            return hostConfigDark;
        } else {
            return hostConfigLight;
        }
    }
}