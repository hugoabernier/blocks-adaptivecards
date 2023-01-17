// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Adaptive from "adaptivecards";
import { ColorTheme, MultiThemeHostContainer } from "../MultiThemeHostContainer";
import * as hostConfigLight from "./cortana-skills-light.json";
import * as hostConfigDark from "./cortana-skills-dark.json";
import { darkTheme } from "./cortana-container-dark";
import { lightTheme } from "./cortana-container-light";

export class CortanaContainer extends MultiThemeHostContainer {
    constructor() {
        super(
            "Cortana Skills",
            "cortana-container",
            hostConfigLight,
            hostConfigDark,
            "#F6F6F6",
            "#201E1F"
        );
    }

    public renderTo(hostElement: HTMLElement): void {
        var frame = document.createElement("div");

        frame.appendChild(this.cardHost);

        hostElement.appendChild(frame);

        let styleTag = document.createElement('style');
        if (this.colorTheme == ColorTheme.Dark) {
            styleTag.innerHTML = darkTheme;
        } else {
            styleTag.innerHTML = lightTheme;
        }

        hostElement.appendChild(styleTag);
    }

    get targetVersion(): Adaptive.Version {
        return Adaptive.Versions.v1_2;
    }

    get enableDeviceEmulation(): boolean {
        return true;
    }
}
