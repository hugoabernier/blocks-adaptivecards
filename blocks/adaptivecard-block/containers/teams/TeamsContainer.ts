// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Adaptive from "adaptivecards";
import { ColorTheme, MultiThemeHostContainer } from "../MultiThemeHostContainer";
import * as hostConfigLight from "./microsoft-teams-light.json";
import * as hostConfigDark from "./microsoft-teams-dark.json";
import { darkTheme } from "./teams-container-dark";
import { lightTheme } from "./teams-container-light";

export class TeamsContainer extends MultiThemeHostContainer {
    constructor() {
        super(
            "Microsoft Teams",
            "teams-container",
            hostConfigLight,
            hostConfigDark,
            "#F6F6F6",
            "#201E1F"
        );
    }

    public renderTo(hostElement: HTMLElement): void {
        var outerFrame = document.createElement("div");
        outerFrame.className = "teams-frame";

        // Draw the hexagon bot logo
        var hexagonOuter = document.createElement("div");
        hexagonOuter.className = "teams-hexagon-outer";

        var hexagonInner = document.createElement("div");
        hexagonInner.className = "teams-hexagon-inner";

        var botLogo = document.createElement("div");
        botLogo.className = "teams-bot-logo";

        hexagonOuter.appendChild(hexagonInner);
        hexagonInner.appendChild(botLogo);

        outerFrame.appendChild(hexagonOuter);

        let innerFrame = document.createElement("div");
        innerFrame.className = "teams-inner-frame";

        this.cardHost.classList.add("teams-card");

        let botNameAndTime = document.createElement("div");
        botNameAndTime.className = "teams-botNameAndTime";
        botNameAndTime.innerText = "Test Bot    2:36 PM";

        innerFrame.appendChild(botNameAndTime);
        innerFrame.appendChild(this.cardHost);

        outerFrame.appendChild(innerFrame);

        hostElement.appendChild(outerFrame);

        let styleTag = document.createElement('style');
        if (this.colorTheme == ColorTheme.Dark) {
            styleTag.innerHTML = darkTheme;
        } else {
            styleTag.innerHTML = lightTheme;
        }

        hostElement.appendChild(styleTag);
    }

    get targetVersion(): Adaptive.Version {
        return Adaptive.Versions.v1_4;
    }

    get enableDeviceEmulation(): boolean {
        return true;
    }
}
