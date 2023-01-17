export const theme = `
.outlook-frame {
    border: 1px solid #F1F1F1;
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
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

a.ac-anchor {
    text-decoration: none;
}

a.ac-anchor:link {
    color: #005A9E;
}

a.ac-anchor:visited {
    color: #005A9E;
}

a.ac-anchor:link:active {
    color: #004D84;
}

a.ac-anchor:visited:active {
    color: #004D84;
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
    font-weight: 600;
    padding: 4px 10px 5px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 31px;
    background-color: white;
    color: #0079db;
    border: 1px solid #6290FF;
}

.ac-pushButton-disabled {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 4px 10px 5px 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 31px;
    border: 1px solid #EEEEEE;
	background-color: #EEEEEE;
	color: #666666;
}

.ac-pushButton:hover {
    background-color: #0078D7;
    color: white;
    border: 1px solid #73C1FD;
}

.ac-pushButton:active {
    background-color: #464B93;
    color: white;
    border: 1px solid #464B93;
}

.ac-pushButton.style-positive {
    background-color: #0078D7;
    color: white;
    border: 1px solid #0078D7;
}

.ac-pushButton.style-positive:hover, .ac-pushButton.style-positive:active {
    background-color: #006ABC;
    border: 1px solid #006ABC;
}

.ac-pushButton.style-destructive {
    background-color: #E50000;
    color: white;
    border: 1px solid #E50000;
}

.ac-pushButton.style-destructive:hover, .ac-pushButton.style-destructive:active {
    background-color: #BF0000;
    border: 1px solid #BF0000;
}

.ac-pushButton.subdued {
    color: #666666;
    border: 1px solid #EEEEEE;
}

.ac-pushButton.subdued:hover {
    background-color: #0078D7;
    color: white;
    border: 1px solid #0078D7;
}

@media (forced-colors: none) {
    .ac-pushButton.expanded {
        background-color: #0078D7;
        color: white;
        border: 1px solid #0078D7;
    }
}

@media (forced-colors: active) {
    .ac-pushButton.expanded {
        background-color: highlight;
        color: highlightText;
        forced-color-adjust: none;
    }
}

.ac-pushButton.expandable:after {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    display: inline-block;
    font-family: 'FabricMDL2Icons';
    font-size: 10px;
    font-style: normal;
    font-weight: 900;
    margin: auto 0px auto 6px;
    content: '\E70D';
}

.ac-pushButton.expandable.expanded:after {
    content: '\E70E';
}

.ac-input {
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    color: black;
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
    border: 1px solid #DDDDDD;
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
