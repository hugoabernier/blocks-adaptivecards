// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Adaptive from "adaptivecards";
import { SingleThemeHostContainer } from "../SingleThemeHostContainer";
import { theme } from "./federated-search-container";
import * as hostConfig from "./federated-search.json";

export class FederatedSearchContainer extends SingleThemeHostContainer {
    constructor() {
        super("Federated Search", "containers/federated-search/federated-search-container.css");

        this.actionsRegistry.unregister("Action.Submit");
        this.elementsRegistry.unregister("Input.Text");
        this.elementsRegistry.unregister("Input.Date");
        this.elementsRegistry.unregister("Input.Time");
        this.elementsRegistry.unregister("Input.Toggle");
        this.elementsRegistry.unregister("Input.ChoiceSet");
        this.elementsRegistry.unregister("Input.Number");
    }

    public renderTo(hostElement: HTMLElement): void {
        this.cardHost.classList.add("fedsearch-card");
        hostElement.appendChild(this.cardHost);

        let styleTag = document.createElement('style');
        styleTag.innerHTML = theme;
        hostElement.appendChild(styleTag);
    }

    public initialize() {
        super.initialize();
    }

    public getHostConfig(): Adaptive.HostConfig {
        return new Adaptive.HostConfig(hostConfig);
    }

    get targetVersion(): Adaptive.Version {
        return Adaptive.Versions.v1_4;
    }

    get enableDeviceEmulation(): boolean {
        return true;
    }
}
