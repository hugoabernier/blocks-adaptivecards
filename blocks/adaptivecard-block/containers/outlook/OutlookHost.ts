import { DefaultHost } from './../default/DefaultHost';
import hostConfig from "./outlook-desktop.json";

export class OutlookHost extends DefaultHost {
    constructor() {
        super();
        this.hostConfig = hostConfig;
    }
}