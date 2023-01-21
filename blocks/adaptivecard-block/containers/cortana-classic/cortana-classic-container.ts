// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
import * as Adaptive from "adaptivecards";
import { SingleThemeHostContainer } from "../SingleThemeHostContainer";
import { theme } from "./cortana-container";
import * as hostConfig from "./cortana-skills-classic.json";

export class CortanaClassicContainer extends SingleThemeHostContainer {
    constructor() {
        super("Cortana Skills (Classic)", "containers/cortana-classic/cortana-container.css");  
    }
    
    public renderTo(hostElement: HTMLElement): void {
        this.cardHost.classList.add("cortana-card");

        let leftSide = document.createElement("div");
        leftSide.classList.add("cortana-leftside");

        let topLeft = document.createElement("div");
        topLeft.classList.add("cortana-topleft");

        let middleLeft = document.createElement("div");
        middleLeft.classList.add("cortana-middleleft");

        let bottomLeft = document.createElement("div");
        bottomLeft.classList.add("cortana-bottomleft");

        leftSide.appendChild(topLeft);
        leftSide.appendChild(middleLeft);
        leftSide.appendChild(bottomLeft);

        let rightSide = document.createElement("div");
        rightSide.classList.add("cortana-rightside");

        let header = document.createElement("div");
        header.classList.add("cortana-header");

        let searchBox = document.createElement("div");
        searchBox.classList.add("cortana-searchbox");

        let magnifyingGlass = document.createElement("div");
        magnifyingGlass.classList.add("cortana-searchbox-magnifyingglass");

        let searchBoxMiddle = document.createElement("div");
        searchBoxMiddle.classList.add("cortana-searchbox-middle");

        let microphone = document.createElement("div");
        microphone.classList.add("cortana-searchbox-microphone");

        searchBox.appendChild(magnifyingGlass);
        searchBox.appendChild(searchBoxMiddle);
        searchBox.appendChild(microphone);

        rightSide.appendChild(header);
        rightSide.appendChild(this.cardHost);
        rightSide.appendChild(searchBox);

        let frame = document.createElement("div");
        frame.classList.add("cortana-frame");

        frame.appendChild(leftSide);
        frame.appendChild(rightSide);

        hostElement.classList.add("cortana-outer-frame");
        hostElement.appendChild(frame);

        let styleTag = document.createElement('style');
        styleTag.innerHTML = theme;
        hostElement.appendChild(styleTag);
    }

    public getHostConfig(): Adaptive.HostConfig {
        return new Adaptive.HostConfig(hostConfig);
    }
}
