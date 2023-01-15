import { IContainer } from "../IContainer";
import hostConfig from "./default.json";
import './defaulthost.css';

export class DefaultHost implements IContainer {
    hostConfig?: any;
    containerClass: string;
    cardAreaBackgroundColor: string;

    constructor() {
        this.hostConfig = hostConfig;
        this.containerClass = "card-frame";
        this.cardAreaBackgroundColor = "#f6f6f6";
    }

    public getHostConfig(_isDark: boolean): any {
        return this.hostConfig;
    }
}