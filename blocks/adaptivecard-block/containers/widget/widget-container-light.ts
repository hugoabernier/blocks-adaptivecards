export const lightTheme = `
@font-face {
  font-family: 'FabricMDL2Icons';
  src: url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff2?2.21") format("woff2"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff?2.21") format("woff"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.ttf?2.21") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.ac-adaptiveCard {
    border: 0px;
    padding: 48px 16px 16px 16px !important;
    margin: 0px !important;
    border-radius: 8px;
}

.ac-card-elements-wrapper {
    height: 100%;
    margin: 0px -16px 0px -16px !important;
    padding: 0px 16px 0px 16px !important;
}

.no-overflow {
    overflow: hidden;
}

.widget-outer-container {
    border: 1px solid rgba(0, 0, 0, 0.0578);
    background: #f6f6f6;
    width: 302px;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.065);
    box-sizing: border-box;
    position: relative;
}

.widget-header {
    height: 16px;
    width: 268px;
    position: absolute;
    z-index: 1;
    display: flex;
    justify-content: space-around;
    margin: 16px;
    border-radius: 8px 8px 0px 0px;
}

.widget-large-container {
    height: 464px;
}

.widget-medium-container {
    height: 306px;
}

.widget-small-container {
    height: 148px;
}

.widget-large-container-no-border {
    height: 462px !important;
    border: 0px !important;
}

.widget-medium-container-no-border {
    height: 304px !important;
    border: 0px !important;
}

.widget-small-container-no-border {
    height: 146px !important;
    border: 0px !important;
}

/* widget-large/medium/small-container  4px(top+bottom padding+margin) widget-outer-container border*/

.widget-large-card {
    height: 462px;
}

.widget-medium-card {
    height: 304px;
}

.widget-small-card {
    height: 146px;
}

.ac-input {
    color: rgba(0, 0, 0, 0.8956);
    font-size: 14px;
}

.ac-input.ac-choiceSetInput-expanded.ac-input-validation-failed,
.ac-input.ac-choiceSetInput-multiSelect.ac-input-validation-failed,
.ac-input.ac-toggleInput.ac-input-validation-failed {
    outline: rgba(196, 43, 28, 1);
}

.ac-input.ac-choiceSetInput-expanded,
.ac-input.ac-choiceSetInput-multiSelect {
    line-height: 22px;
}

.ac-input.ac-input-required {}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact {
    background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%) border-box;
    border: 1px solid transparent;
    border-radius: 3px;
    display: inline-block;
    height: 30px;
    outline: none;
    padding: 4px 11px;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:disabled {
    background: rgba(249, 249, 249, 0.3);
    border-color: rgba(0, 0, 0, 0.4458);
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:focus {
    outline: 1px solid rgba(0, 0, 0, 0.8956);
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:hover {
    background: linear-gradient(rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5)) padding-box, linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%) border-box;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact.ac-input-validation-failed {
    border: rgba(196, 43, 28, 1);
}

.ac-input.ac-dateInput,
.ac-input.ac-timeInput,
.ac-input.ac-textInput,
.ac-input.ac-numberInput {
    background: linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)) padding-box, linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%) border-box;
    border: 1px solid transparent;
    border-radius: 3px;
    display: inline-block;
    height: 30px;
    outline: none;
    padding: 4px 11px;
}

.ac-input.ac-dateInput:disabled,
.ac-input.ac-timeInput:disabled,
.ac-input.ac-textInput:disabled,
.ac-input.ac-numberInput:disabled {
    background: rgba(249, 249, 249, 0.3);
    border-color: rgba(0, 0, 0, 0.4458);
}

.ac-input.ac-dateInput:focus,
.ac-input.ac-timeInput:focus,
.ac-input.ac-textInput:focus,
.ac-input.ac-numberInput:focus,
.ac-input.ac-dateInput:focus-visible,
.ac-input.ac-timeInput:focus-visible,
.ac-input.ac-textInput:focus-visible,
.ac-input.ac-numberInput:focus-visible,
.ac-input.ac-dateInput:active,
.ac-input.ac-timeInput:active,
.ac-input.ac-textInput:active,
.ac-input.ac-numberInput:active {
    border-bottom: 2px solid rgba(0, 103, 192, 1);
    border-radius: 4px;
    background: linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 1)) padding-box, linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 96.87%, #0067C0 96.89%) border-box;
    outline: none;
    --focus-outline-color: none;
}

.ac-input.ac-dateInput:hover,
.ac-input.ac-timeInput:hover,
.ac-input.ac-textInput:hover,
.ac-input.ac-numberInput:hover {
    background: linear-gradient(rgba(249, 249, 249, 0.5), rgba(249, 249, 249, 0.5)) padding-box, linear-gradient(180deg, rgba(0, 0, 0, 0.0578) 90.58%, rgba(0, 0, 0, 0.1622) 100%) border-box;
}

.ac-input.ac-dateInput.ac-input-validation-failed,
.ac-input.ac-timeInput.ac-input-validation-failed,
.ac-input.ac-textInput.ac-input-validation-failed,
.ac-input.ac-numberInput.ac-input-validation-failed {
    border: rgba(196, 43, 28, 1);
}

.ac-pushButton {
    background: rgba(0, 103, 192, 1);
    border-radius: 4px;
    border-width: 0px;
    box-shadow: none;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    height: 32px;
    padding: 5px 12px 7px;
    width: 120px;
}

.ac-pushButton:active {
    background: rgba(0, 103, 192, 0.8);
}

.ac-pushButton:focus {
    border-color: rgba(0, 0, 0, 0.8956);
}

.ac-pushButton:hover {
    background: rgba(0, 103, 192, 0.9);
}

.ac-pushButton-disabled {
    background: rgba(0, 0, 0, 0.2169);
    border-radius: 4px;
    border-width: 0px;
    box-shadow: none;
    color: rgba(255, 255, 255, 1);
    cursor: pointer;
    height: 32px;
    padding: 5px 12px 7px;
    width: 120px;
}

input[type='checkbox'] {
    background-color: rgba(0, 0, 0, 0.0241);
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.4458);
    border-radius: 3px;
    box-shadow: none;
    font-size: 12px;
    height: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    text-align: center;
    width: 18px;
}

input[type='checkbox']:checked {
    background-color: rgba(0, 103, 192, 1);
    border-color: rgba(0, 103, 192, 1);
}

input[type='checkbox']:checked:after {
    content: '✔';
    color: rgba(255, 255, 255, 1);
}

input[type='checkbox']:checked:hover {
    background-color: rgba(0, 103, 192, 0.9);
    border-color: rgba(0, 103, 192, 0.9);
}

input[type='checkbox']:hover {
    background-color: rgba(0, 0, 0, 0.0578);
    border-color: rgba(0, 0, 0, 0.4458);
}

input[type='radio'] {
    background-color: rgba(0, 0, 0, 0.0241);
    border: 1px solid;
    border-color: rgba(0, 0, 0, 0.4458);
    border-radius: 999px;
    box-shadow: none;
    font-size: 12px;
    height: 18px;
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    text-align: center;
    width: 18px;
}

input[type='radio']:checked {
    background-color: rgba(0, 103, 192, 1);
    border-color: rgba(0, 103, 192, 1);
}

input[type='radio']:checked:after {
    content: '•';
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
}

input[type='radio']:checked:hover {
    background-color: rgba(0, 103, 192, 0.9);
    border-color: rgba(0, 103, 192, 0.9);
}

input[type='radio']:hover {
    background-color: rgba(0, 0, 0, 0.0578);
    border-color: rgba(0, 0, 0, 0.4458);
}

a.ac-anchor {
    color: rgba(0, 62, 146, 1);
    text-decoration: underline;
}

a.ac-anchor:active {
    color: rgba(0, 103, 192, 0.8);
    text-decoration: none;
}

a.ac-anchor:focus,
a.ac-anchor:focus-visible {
    border-radius: 4px;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.8956);
    outline: 1px solid transparent;
}

a.ac-anchor:hover {
    color: rgba(0, 26, 104, 1);
    text-decoration: none;
}

.ac-container.ac-selectable,
.ac-columnSet.ac-selectable {
    background-blend-mode: lighten;
    background-color: rgba(0, 0, 0, 0);
    border-radius: 4px;
}

.ac-container.ac-selectable:active,
.ac-columnSet.ac-selectable:active {
    background-color: rgba(0, 0, 0, 0.0241);
}

.ac-container.ac-selectable:hover,
.ac-columnSet.ac-selectable:hover {
    background-color: rgba(0, 0, 0, 0.0373);
}

.ac-image, .ac-media {
    border-radius: 4px;
    overflow: hidden;
}

.ac-media video {
    border-radius: 4px;
}

.ac-carousel-container {
    padding: 0px 16px 16px 16px !important;
}

.ac-carousel-card-level-container {
    margin: 0px -16px -16px -16px !important;
}

.ac-container.ac-adaptiveCard .swiper-button-prev.ac-carousel-left,
.ac-carousel-container .swiper-button-next.ac-carousel-right {
    display:none;
}

.swiper-slide.ac-carousel-page {
    background: transparent !important;
}

.ac-container.ac-adaptiveCard:hover .swiper-button-prev.ac-carousel-left,
.ac-container.ac-adaptiveCard:hover .swiper-button-next.ac-carousel-right,
.ac-container.ac-adaptiveCard:focus .swiper-button-prev.ac-carousel-left,
.ac-container.ac-adaptiveCard:focus .swiper-button-next.ac-carousel-right {
    display: flex;
}

.swiper-button-prev.ac-carousel-left,
.swiper-button-next.ac-carousel-right {
    border-radius:3px;
    height:38px;
    width:16px;
}

.swiper-button-prev.ac-carousel-left:hover,
.swiper-button-next.ac-carousel-right:hover {
    background: transparent !important;
}

.swiper-button-prev.ac-carousel-left::after,
.swiper-button-next.ac-carousel-right::after {
    color:rgba(0, 0, 0, 0.4458);
    font-size:8px !important;
}

.swiper-button-prev.ac-carousel-left:active::after,
.swiper-button-prev.ac-carousel-left:hover::after,
.swiper-button-next.ac-carousel-right:active::after,
.swiper-button-next.ac-carousel-right:hover::after {
    color:rgba(0, 0, 0, 0.6063) !important;
}

.swiper-pagination-bullet{
    background:rgba(0, 0, 0, 0.4458) !important;
    height:4px !important;
    width:4px !important;
    vertical-align:middle;
    position: relative;
}

.swiper-pagination-bullet::after {
    content:'';
    position: absolute;
    top:-4px; bottom: -4px;
    left:-4px; right:-4px;
}

.swiper-pagination-bullet:hover{
    background:rgba(0, 0, 0, 0.6063);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active{
    height:6px !important;
    width:6px !important;
}

.widget-header-text {
    margin: auto;
    margin-left: 0px;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.8956);
}

.widget-header-more-button {
    height: 16px;
    width: 16px;
    background: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.8956);
    border-radius: 2px;
    margin: auto;
    margin-right: 0px;
    margin-left: 0px;
}

.widget-header-more-button::before {
    /*font-family: 'FabricMDL2Icons';
    content: "\E712";*/
    content: "…";
}

@media(forced-colors: active) {
    .swiper-pagination-bullet {
        background-color: ButtonBorder !important;
    }
}
`;