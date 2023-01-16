// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import { lightTheme } from './viva-connections-container-light';
import { ColorTheme } from './../MultiThemeHostContainer';
import * as Adaptive from "adaptivecards";
import { MultiThemeHostContainer } from "../MultiThemeHostContainer";
import * as hostConfigLight from "./viva-connections-light.json";
import * as hostConfigDark from "./viva-connections-dark.json";
import { darkTheme } from './viva-connections-container-dark';

export class VivaConnectionsContainer extends MultiThemeHostContainer {

    constructor() {
        super(
            "Viva Connections",
            "viva-connections-container",
            hostConfigLight,
            hostConfigDark,
            "#F6F6F6",
            "#1b1a19"
        );
    }

    public renderTo(hostElement: HTMLElement) {
        this.cardHost.classList.add("vivaConnectionsContainer");

        let vcContainer = document.createElement("div");
        vcContainer.className = "vivaConnectionsContainer";
        vcContainer.appendChild(this.cardHost);

        hostElement.appendChild(vcContainer);

        let styleTag = document.createElement('style');
        if (this.colorTheme == ColorTheme.Dark) {
            styleTag.innerHTML = darkTheme;
        } else {
            styleTag.innerHTML = lightTheme;
        }

        hostElement.appendChild(styleTag);
    }

    get targetVersion(): Adaptive.Version {
        return Adaptive.Versions.v1_3;
    }
}
