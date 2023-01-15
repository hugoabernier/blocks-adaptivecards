import { DefaultHost } from './../default/DefaultHost';
import * as hostConfig from "./cortana-skills-classic.json";
import './cortana-container.css';

export class CortanaClassicHost extends DefaultHost {
    hostConfig?: any;

    constructor() {
        super();
        this.hostConfig = hostConfig;
        this.containerClass = "cortana-card";
    }
}