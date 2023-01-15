import { DefaultHost } from './../default/DefaultHost';
import hostConfig from "./webchat.json";

export class WebChatHost extends DefaultHost {
    constructor() {
        super();
        this.hostConfig = hostConfig;
        this.containerClass = "webChatInnerContainer";
    }
}