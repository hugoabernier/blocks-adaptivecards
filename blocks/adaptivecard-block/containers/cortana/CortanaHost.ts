import { DefaultHost } from '../default/DefaultHost';

import hostConfigLight from './cortana-skills-light.json';
import hostConfigDark from './cortana-skills-dark.json'

export class CortanaHost extends DefaultHost {
    public getHostConfig(isDark: boolean) {
        if (isDark) {
            return hostConfigDark;
        } else {
            return hostConfigLight;
        }
    }
}