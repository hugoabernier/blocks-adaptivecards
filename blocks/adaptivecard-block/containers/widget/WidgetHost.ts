import { DefaultHost } from '../default/DefaultHost';

import hostConfigLight from './widget-light.json';
import hostConfigDark from './widget-dark.json'

export class WidgetHost extends DefaultHost {


    constructor() {
        super();
    }

    public getHostConfig(isDark: boolean) {
        if (isDark) {
            return hostConfigDark;
        } else {
            return hostConfigLight;
        }
    }
}