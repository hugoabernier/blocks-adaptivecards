export const darkTheme = `.teams-frame {
    display: flex;
}

.teams-botNameAndTime {
    color: #EEEEEE;
    margin-bottom: 12px;
}

.teams-hexagon-outer {
    overflow: hidden;
    transform: rotate(120deg);
    flex: 0 0 50px;
    height: 40px;
    margin-right: 6px;
}

.teams-hexagon-inner {
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: rotate(-60deg);
}

.teams-bot-logo {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50%;
    background-image: url("data:image/png;base64,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");
    background-size: 50px 50px;
    visibility: visible;
    transform: rotate(-60deg);
}

.teams-inner-frame {
    background-color: #2D2B2C;
    border-radius: 4px;
    padding: 24px;
    min-width: 400px;
    max-width: 726px;
}

.teams-card {
    border: 2px solid #393738;
    border-top-color: #ACCEEF;
    border-radius: 4px;
}

.ac-media-poster {}

.ac-media-poster.empty {
    height: 200px;
    background-color: #F2F2F2;
}

.ac-media-playButton {
    width: 56px;
    height: 56px;
    border: 1px solid #EEEEEE;
    border-radius: 28px;
    box-shadow: 0px 0px 10px #EEEEEE;
    background-color: rgba(255, 255, 255, 0.9);
    color: black;
    cursor: pointer;
}

.ac-media-playButton-arrow {
    color: black;
}

.ac-media-playButton:hover {
    background-color: white;
}

.ac-image.ac-selectable {
    cursor: pointer;
}

.ac-image.ac-selectable:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

.ac-image.ac-selectable:active {
    background-color: rgba(0, 0, 0, 0.15);
}

a.ac-anchor {
    text-decoration: none;
}

a.ac-anchor:link {
    color: #6264A7;
}

a.ac-anchor:visited {
    color: #6264A7;
}

a.ac-anchor:link:active {
    color: #6264A7;
}

a.ac-anchor:visited:active {
    color: #6264A7;
}

.ac-container.ac-selectable, .ac-columnSet.ac-selectable {
    padding: 0px;
}

.ac-container.ac-selectable:hover, .ac-columnSet.ac-selectable:hover {
    background-color: rgba(0, 0, 0, 0.1) !important;
}

.ac-container.ac-selectable:active, .ac-columnSet.ac-selectable:active {
    background-color: rgba(0, 0, 0, 0.15) !important;
}

.ac-pushButton {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    padding: 4px 10px 5px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 34px;
    background-color: transparent;
    color: white;
    border: 2px solid #6165A4;
    border-radius: 4px;
}

.ac-pushButton:hover {
    background-color: #6165A4;
    border: 2px solid #A7A8DA;
    color: black;
}

.ac-pushButton:active {
    background-color: #6165A4;
    border: 2px solid #A7A8DA;
    color: black;
}

.ac-pushButton-disabled {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    padding: 4px 10px 5px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 34px;
    border: 4px solid #3D3D3D;
	background-color: #3D3D3D;
	color: #666666;
    border-radius: 4px;
}

@media (forced-colors: none) {
    .ac-pushButton.expanded {
        background-color: #6165A4;
        border: 2px solid #A7A8DA;
        color: black;
    }
}

@media (forced-colors: active) {
    .ac-pushButton.expanded {
        background-color: highlight;
        color: highlightText;
        forced-color-adjust: none;
    }
}

.ac-pushButton.style-emphasis {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

.ac-input {
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    color: #EEEEEE;
}

.ac-input.ac-input-required {
}

.ac-input.ac-textInput.ac-input-validation-failed,
.ac-input.ac-numberInput.ac-input-validation-failed,
.ac-input.ac-dateInput.ac-input-validation-failed,
.ac-input.ac-timeInput.ac-input-validation-failed,
.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact.ac-input-validation-failed {
    border: 1px solid red !important;
}

.ac-input.ac-toggleInput.ac-input-validation-failed,
.ac-input.ac-choiceSetInput-expanded.ac-input-validation-failed,
.ac-input.ac-choiceSetInput-multiSelect.ac-input-validation-failed {
    outline: 1px solid red;
}

.ac-input.ac-textInput {
    resize: none;
}

.ac-input.ac-textInput.ac-multiline {
    height: 72px;
}

.ac-input.ac-textInput, .ac-input.ac-numberInput, .ac-input.ac-dateInput, .ac-input.ac-timeInput, .ac-input.ac-multichoiceInput {
    background-color: #201E1F;
    border: 1px solid #201E1F;
    border-radius: 4px;
    padding: 4px 8px 4px 8px;
    height: 31px;
}

/* ac-inlineActionButton should set height to the same as ac-input.ac-textInput */

.ac-inlineActionButton {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: none;
    background-color: transparent;
    height: 31px;
}

.ac-inlineActionButton.textOnly {
    padding: 0 8px;
}

.ac-inlineActionButton.iconOnly {
    padding: 0;
}

.ac-inlineActionButton:hover {
    background-color: #EEEEEE;
}

.ac-inlineActionButton:active {
    background-color: #CCCCCC;
}

.ac-inlineActionButton-disabled {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: none;
    background-color: transparent;
    height: 31px;
    color: #777777;
}

.ac-inlineActionButton-disabled.textOnly {
    padding: 0 8px;
}

.ac-inlineActionButton-disabled.iconOnly {
    padding: 0;
}

/* Popup menu */

.ac-ctrl-overlay {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
}
  
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
}
  
@keyframes slideTopToBottom {
    0% {
        transform: translate(0, -20px);
    }
}
  
@keyframes slideBottomToTop {
    0% {
        transform: translate(0, 20px);
    }
}
  
@keyframes slideLeftToRight {
    0% {
        transform: translate(-20px, 0);
    }
}
  
@keyframes slideRightToLeft {
    0% {
        transform: translate(20px, 0);
    }
}
  
.ac-ctrl-slide {
    animation-duration: 0.5s;
    animation-timing-function: cubic-bezier(0.1, 0.9, 0.2, 1);
}
  
.ac-ctrl-slide.ac-ctrl-slideTopToBottom {
    animation-name: fadeIn, slideTopToBottom;
}
  
.ac-ctrl-slide.ac-ctrl-slideBottomToTop {
    animation-name: fadeIn, slideBottomToTop;
}
  
.ac-ctrl-slide.ac-ctrl-slideLeftToRight {
    animation-name: fadeIn, slideLeftToRight;
}
  
.ac-ctrl-slide.ac-ctrl-slideRightToLeft {
    animation-name: fadeIn, slideRightToLeft;
}
  
.ac-ctrl {
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-weight: normal;
}
  
.ac-ctrl-dropdown-item {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    padding: 0px 12px 0px 12px;
    line-height: 30px;
    cursor: pointer;
}
  
.ac-ctrl-dropdown-item-disabled {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    display: block;
    padding: 0px 12px 0px 12px;
    line-height: 30px;
    cursor: pointer;
    color: #666666;
}
  
.ac-ctrl-dropdown-item:hover {
    background-color: #EEEEEE;
}
  
.ac-ctrl-dropdown-item:focus {
    outline: 0;
    background-color: #CCCCCC;
}
  
.ac-ctrl-popup-container {
    border: 1px solid #EEEEEE;
    background-color: white;
    position: absolute;
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
    overflow-y: auto;
}
  
.ac-ctrl-popup-container:focus {
    outline: 0;
}`;
