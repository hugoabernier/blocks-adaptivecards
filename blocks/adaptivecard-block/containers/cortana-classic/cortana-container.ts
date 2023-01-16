export const theme = `.cortana-outer-frame {
    display: flex;
}

.cortana-frame {
    display: flex;
    background-color: black;
    box-shadow: 0 0 15px -5px rgba(0, 0, 0, 0.4);
}

.cortana-leftside {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    background-color: #002D4F;
}

.cortana-rightside {
    display: flex;
    flex-direction: column;
    flex: 1 1 100%;
}

.cortana-topleft {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAGCBAMAAADtTds2AAAAG1BMVEUALU8ATYr////a4eXa5e5umrxuiJuxv8mxyduivg80AAABiklEQVR42uzUwQkDMQwF0bRgiBsQvxGXEEFKSt+JQbAmF0uHkGWZufiiZzAC34iIiIioln1VB8QerhN7ICIiOk+tGAAAAAAAPwW9CnzUQDfVgMtGBXQbrgpwTZMGc3iiPHCFSoIYdWWB63BbEIMBc8B1yASIsaAZ4FrtHnRbgfbgrgXIHlvQXppXm2mCZ+bRK2hZoNYBfwb2SXGUwZl+bwAAAAC827WD1IZhIArDQwzWNcwIqq2YE4mcQKjQXr+RM+Au35Rqk7zf4JU/PJKW9psDxhhjDMuCX/1vGgRW5QoBKn8BybSHgKnmCNhy360GwKgPVALAusiuMPDn1oImkvLKRW+5JasrD06S5o4Dj+DVwe/WgCZXS8CIjpT4kxdjjDHGGGNsYfunaf5qONCzgr9Av+dbMg6y32GgZwuBj7QUzCsOuIb/Bek5kuKgTCARIDMcbA4aDD7OkQwHxwkGDG6HzEaHQZXZHQZ3fVZRMBwcMOjXUqCs+e7CwA8cBuqgwMAr8W1ljDH26AeXGYGLssCubwAAAABJRU5ErkJggg==");
    background-size: cover;
    width: 48px;
    flex: 0 0 193px;
}

.cortana-middleleft {
    flex: 1 1 100%;
}

.cortana-bottomleft {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAD8BAMAAAB6ErwzAAAAMFBMVEUALU/////a4eZuiJuxv8m/ytOAlqdAYntQb4bv8vTP196vvcifsL1gfJEwVXAgR2WZ6IWYAAABz0lEQVRo3u3Uva3bMBSG4U+igHSBPkoDiLIHoO71AOT1BunSpckEaTJB+oyQITJCVsgqaQPRFAKk4TnFBWzc88CFC72S+CPCmFc1nICnqLg+eCAwQainD3HwWVx0M7qxG7Et0jea4BgSOmngZmAfRU7yoAgQCddn1n/x5SwISE4oNpKCEc+XHOurrWlL7UUYS7aeS9WNzSCXuQykrzPcEvag93DHn5Ynxttj+gkYeELTtm+8Y/lmCLAumS8/WcAaEAJ530XxFoQJgkEnlI3dz4DjSTqtEdJp3dK/hSuPaaibweW1hN0i+NyG9dh88zUn9fZuezk7X9Pni4dIvSxHyAzlEFAE/YiBjNiSNJhuB1kepa/EOSTnAxeIC7+PIkHM7cd9gjHGGGOMMca8hsBiEges7ijI2sCpgp5z7BSBIzk5RVBuHoM8KJemTR5wN5bAKwKUq1XBogy8bpUXLOJgU+2JY+GgcaHHfRlW8qoZc6Bu1BuLqJlU1SP6Gnjt58+oDZLukKR4d/MwPm5gjDHGGGPMg/nz+ych9f7L5x8khcHXTx9YSIJ3335950hxUG6tCWjBGwn+dwevZMGDBh8bQeMg0x+V+sNYf9wbY8yd+wvJ6lbw8MLKbwAAAABJRU5ErkJggg==");
    background-size: cover;
    width: 48px;
    flex: 0 0 126px;
}

.cortana-header {
    background: url("data:image/png;base64,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");
    background-size: contain;
    background-position: center;
    background-color: black;
    background-repeat: no-repeat;
    margin: 20px 0px;
    height: 52px;
    width: 100%;
}

.cortana-card {
    width: 344px;
}

.cortana-searchbox {
    flex: 0 0 40px;
    background-color: white;
    display: flex;
}

.cortana-searchbox-magnifyingglass {
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAD1BMVEXy9PYrKytcXF2LjI24ubt3fX0UAAAAkklEQVRIx+2TwQ2AIAxFKziArQ5AnQA20MT9ZzIae/DiJ+qNvhOHl99SCjmO0wZRecw1Hh9UmCqZNpUFed2p9DrBwEQHQVCHJmgGla3kOjyLJV2HMIIWrWIPRCYTGYnGb+JSKRYTo3wbDx44fkK8FEi81mwAXhCVjaLiwIS/grUWC0vGgYS439UDXwfSTI7jtMQOXQQL89X4IasAAAAASUVORK5CYII=");
    background-size: cover;
    height: 40px;
    flex: 0 0 40px;
}

.cortana-searchbox-middle {
    flex: 1 1 100%;
    background-color: #F2F4F6;
}

.cortana-searchbox-microphone {
    background:  url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQBAMAAAB8P++eAAAAD1BMVEXy9PZhYmLQ0tOKi4yvsLIMzQJRAAAAbElEQVRIx+3TsRGAIBBEUQdpYMUCsAPsQPpvSrm5IXQJjHB/AAQv4IJblFLzt6J1cXga3DlEfo6AAWinoGAPHWIK6KtAYUUrMVhzNFhieofH1h9s/bPdEYXvv3+SFHyYvPB84O8gWuNQKfWDbgg7CegyXmkdAAAAAElFTkSuQmCC");
    background-size: cover;
    height: 40px;
    flex: 0 0 40px;
}

.cortanaFrame {
    background: url("data:image/png;base64,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AkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAmKfjgUAAAAABvlb7x1EOTRCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAhB7NOxAAAAAMAgf+u9gyiHGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIidO1hxIwaiKMqDB0XV/39wZkbYKSWLlrMJlO6BGRt5fWmruyygIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQig+Z9BVKS+5PcLQWCmD3KwQ1/CdhEEZtKJVUGEUypHfSdBEJhIZ1YB9vpTOggCE+lMOX86cKxrA0FgJp3J1cFrH1F8ZcJMHwTRhNlUYyQ9Cldm2vtaqiKKIDCMHnlJNemFIDCMnpQrq5zaZEQpXQSBWfQk3OKIiMp+8SAIzKIH5Wht/Ij2YRIERtGDcOxvc18hCIyiBxl27teKeC84uEJgFj3K91DfXw/puO2KaXTA3nfXjvWfB3MY5zwI/xmECQLj6FG955dyCyLsJAgMc7KpLqmPfMdrgU01xvnstmtK4rYrBjsdc+0P5tpCEQRGOdxRL1neRlwd7CEwi57UmvRObdJVWQz3YRrGv4FGj2pNesceSWaWgyAwjA451JSTn5BiIp2p34cMEAQG05nwTwevzURy6gZmOg4i+0FlZRMEJtKZsl3hktIRNgeVYSadqlcFYQeHHWMoncvI9fKdA0FgJP0LgsBU2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBuv9i1l9zIYSAIoghAAEHd/8AzG3/SXrTY8Koy3h0CUlWRZBDqRjIIdSMZhLqRDELdSAahbiSDUDeSQagbySDUjWQQ6kYyCHUjGYS6kQxC3UgGoW4kg1A3kkGoG8kg1I1kEOpGMgh1IxmEupEMQt1IBqFuJINQN5JBqBvJINSNZBDqRjIIdSMZhLqRDELdSAahbiSDUDeSQagbySDUjWQQ6kYyCHUjGYS6kQxC3UgGoW4kg1A3kkGoG8kg1I1kEOpGMgh1IxmEupEMQt1IBqFuJINQN5JBqBtH1hW2QWgYjlw/GISGMQjJIKS/COI2CM3GmW0QGu1owXRvMAhNdvhl2GyD0GCn0/RmGYTmOj3I3WyD0FzH69bvQSyD0DDnQcBHCr5l0jjvBbEwCI30VhALg9BMPHLH2LAwCA3F4YEaAIPQVMDZYQ4MQnPx0L6/dksGobE4YhAajmQQ6sYz91rXf7czhGbjib2uT9sgNBgP7Ou7bRCa61EPaRuExuK1daVlEBqLl+7rp20QmuqdIG6D0FTP/piSj/s0Fi9dvxmEpjIIySD0j3272WkQCMMwqoSQ6IaYcBcssP7r/V+YbW3MqyUpmmnaZs5ZwZ4n3wAzCAJs7gNBgCBAECAI2BEEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEASEiwuigQsiCBAECAIEAYIAQYAgQBCwIwgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAjnE8Tr88vT7aptiwUxDv3aODZQ0EP37bE57OofJdw8rd7bnVJBjP03SVBA9LC8iD8FsR4J16u7NpQLYuj7YRPCNG2upgbK6Lr7Zue+65qDrpaV8LF62z79bSgYREawSUIRFJIRlAgiZsLxghj64fctzDl9EG04UhDj7wAG7xHMqyKIvSXS1PcNzKkgiO2AMCJYooYgZp7+SRDMqyCI7frImolF6gyiEQSzBAGhjiAmQbBMDUGM+0GMfs0xq44gfHZlodMHcYgfc5yzC5wQtm5QVgaQEeT9vPMIwuY+DqktiB/bvy2Y2FNTEEM/bJOYvg6Smg/sqyiIdQ+OkH62d8c4DcRQFEWlKf4KsgsaM27Y/8pgEEIvKeIIYjmQcwoXU8+V5cLfXPdEQRw9HF4+mzjJgXupOr9C+ieCcILm3jKIXmF//CD0wDS92rFkD/1juWJ5EHpgnlbVBl8uzQ9CDyyzX/z/vUYbxPwg9MA6e50Z9zAO4vXtd0HogYVar7C3bWD+oDI9sF7Vdpv5oyz1wHo3BzF/2LEeWKu+bUMLx+Gf9MDPPGYQHkzhPxIECAIEAYIAQYAgQBAgCPgiCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAImOkdiM69gNVYKqIAAAAASUVORK5CYII=");
    width: 393px;
    height: 595px;
    border: solid 1px black;
}

.cardWrapper {
    padding-left: 50px;
    padding-top: 80px;
    overflow-y: auto;
    max-height: 555px;
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

.ac-input, .ac-input.ac-textInput.ac-multiline {
    box-sizing: border-box;
    margin-bottom: 0;
    padding: 4px 8px;
    font-size: 15px;
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
    font-size: 15px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 31px;
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    border: 2px solid transparent;
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
    height: 32px;
    border: 4px solid #EDEBE9;
	background-color: #EDEBE9;
	color: #C8C6C4;
    border-radius: 4px;
}

.ac-pushButton:hover {
    border: 2px solid rgba(255, 255, 255, 0.6);
}

.ac-pushButton:active {
    background-color: rgba(255, 255, 255, 0.4);
}

.ac-input {
    font-family: "Segoe UI", sans-serif;
    font-size: 14px;
    color: white;
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
    border: 2px solid #797979;
    padding: 4px 8px 4px 8px;
    background-color: #0C0C0C;
    height: 31px;
}

.ac-input.ac-textInput:hover, .ac-input.ac-numberInput:hover, .ac-input.ac-dateInput:hover, .ac-input.ac-timeInput:hover, .ac-input.ac-multichoiceInput:hover {
    border: 2px solid #A5A5A5;
    background-color: #0C0C0C;
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
