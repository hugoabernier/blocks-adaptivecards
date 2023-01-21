"use strict";var BlockBundle=(()=>{var i0=Object.create;var fr=Object.defineProperty;var o0=Object.getOwnPropertyDescriptor;var a0=Object.getOwnPropertyNames;var s0=Object.getPrototypeOf,l0=Object.prototype.hasOwnProperty;var c0=(t,e,n)=>e in t?fr(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wr=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(e,n)=>(typeof require!="undefined"?require:e)[n]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var O=(t,e)=>()=>(t&&(e=t(t=0)),e);var L=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),Ge=(t,e)=>{for(var n in e)fr(t,n,{get:e[n],enumerable:!0})},ql=(t,e,n,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of a0(e))!l0.call(t,i)&&i!==n&&fr(t,i,{get:()=>e[i],enumerable:!(r=o0(e,i))||r.enumerable});return t};var Je=(t,e,n)=>(n=t!=null?i0(s0(t)):{},ql(e||!t||!t.__esModule?fr(n,"default",{value:t,enumerable:!0}):n,t)),Gl=t=>ql(fr({},"__esModule",{value:!0}),t);var $l=(t,e,n)=>(c0(t,typeof e!="symbol"?e+"":e,n),n);var on=L(Yr=>{"use strict";Object.defineProperty(Yr,"__esModule",{value:!0});Yr.Strings=void 0;var u0=function(){function t(){}return t.errors={unknownElementType:function(e){return'Unknown element type "'.concat(e,'". Fallback will be used if present.')},unknownActionType:function(e){return'Unknown action type "'.concat(e,'". Fallback will be used if present.')},elementTypeNotAllowed:function(e){return'Element type "'.concat(e,'" is not allowed in this context.')},actionTypeNotAllowed:function(e){return'Action type "'.concat(e,'" is not allowed in this context.')},invalidPropertyValue:function(e,n){return'Invalid value "'.concat(e,'" for property "').concat(n,'".')},showCardMustHaveCard:function(){return'"An Action.ShowCard must have its "card" property set to a valid AdaptiveCard object.'},invalidColumnWidth:function(e){return'Invalid column width "'.concat(e,'" - defaulting to "auto".')},invalidCardVersion:function(e){return'Invalid card version. Defaulting to "'.concat(e,'".')},invalidVersionString:function(e){return'Invalid version string "'.concat(e,'".')},propertyValueNotSupported:function(e,n,r,i){return'Value "'.concat(e,'" for property "').concat(n,'" is supported in version ').concat(r,", but you are using version ").concat(i,".")},propertyNotSupported:function(e,n,r){return'Property "'.concat(e,'" is supported in version ').concat(n,", but you are using version ").concat(r,".")},indexOutOfRange:function(e){return"Index out of range (".concat(e,").")},elementCannotBeUsedAsInline:function(){return"RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline."},inlineAlreadyParented:function(){return"RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock."},interactivityNotAllowed:function(){return"Interactivity is not allowed."},inputsMustHaveUniqueId:function(){return"All inputs must have a unique Id."},choiceSetMustHaveAtLeastOneChoice:function(){return"An Input.ChoiceSet must have at least one choice defined."},choiceSetChoicesMustHaveTitleAndValue:function(){return"All choices in an Input.ChoiceSet must have their title and value properties set."},propertyMustBeSet:function(e){return'Property "'.concat(e,'" must be set.')},actionHttpHeadersMustHaveNameAndValue:function(){return"All headers of an Action.Http must have their name and value properties set."},tooManyActions:function(e){return"Maximum number of actions exceeded (".concat(e,").")},tooLittleTimeDelay:function(e){return"Autoplay Delay is too short (".concat(e,").")},tooManyCarouselPages:function(e){return"Maximum number of Carousel pages exceeded (".concat(e,").")},invalidInitialPageIndex:function(e){return"InitialPage for carousel is invalid (".concat(e,").")},columnAlreadyBelongsToAnotherSet:function(){return"This column already belongs to another ColumnSet."},invalidCardType:function(){return`Invalid or missing card type. Make sure the card's type property is set to "AdaptiveCard".`},unsupportedCardVersion:function(e,n){return"The specified card version (".concat(e,") is not supported or still in preview. The latest released card version is ").concat(n,".")},duplicateId:function(e){return'Duplicate Id "'.concat(e,'".')},markdownProcessingNotEnabled:function(){return"Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown"},processMarkdownEventRemoved:function(){return"The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead."},elementAlreadyParented:function(){return"The element already belongs to another container."},actionAlreadyParented:function(){return"The action already belongs to another element."},elementTypeNotStandalone:function(e){return"Elements of type ".concat(e," cannot be used as standalone elements.")}},t.magicCodeInputCard={tryAgain:function(){return"That didn't work... let's try again."},pleaseLogin:function(){return'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"'},enterMagicCode:function(){return"Enter magic code"},pleaseEnterMagicCodeYouReceived:function(){return"Please enter the magic code you received."},submit:function(){return"Submit"},cancel:function(){return"Cancel"},somethingWentWrong:function(){return"Something went wrong. This action can't be handled."},authenticationFailed:function(){return"Authentication failed."}},t.runtime={automaticRefreshPaused:function(){return"Automatic refresh paused."},clckToRestartAutomaticRefresh:function(){return"Click to restart."},refreshThisCard:function(){return"Refresh this card"}},t.hints={dontUseWeightedAndStrecthedColumnsInSameSet:function(){return"It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."}},t.defaults={inlineActionTitle:function(){return"Inline Action"},overflowButtonText:function(){return"..."},overflowButtonTooltip:function(){return"More options"},mediaPlayerAriaLabel:function(){return"Media content"},mediaPlayerPlayMedia:function(){return"Play media"},youTubeVideoPlayer:function(){return"YouTube video player"},vimeoVideoPlayer:function(){return"Vimeo video player"},dailymotionVideoPlayer:function(){return"Dailymotion video player"}},t}();Yr.Strings=u0});var ht=L($=>{"use strict";Object.defineProperty($,"__esModule",{value:!0});$.CarouselInteractionEvent=$.LogLevel=$.RefreshMode=$.TypeErrorType=$.ContainerFitStatus=$.ValidationEvent=$.ValidationPhase=$.InputTextStyle=$.ActionIconPlacement=$.FillMode=$.Orientation=$.ShowCardActionMode=$.ImageStyle=$.ActionAlignment=$.VerticalAlignment=$.HorizontalAlignment=$.TextColor=$.Spacing=$.FontType=$.TextWeight=$.TextSize=$.SizeUnit=$.ImageSize=$.Size=$.ActionMode=$.ActionStyle=$.ContainerStyle=void 0;var d0=function(){function t(){}return t.Default="default",t.Emphasis="emphasis",t.Accent="accent",t.Good="good",t.Attention="attention",t.Warning="warning",t}();$.ContainerStyle=d0;var f0=function(){function t(){}return t.Default="default",t.Positive="positive",t.Destructive="destructive",t}();$.ActionStyle=f0;var p0=function(){function t(){}return t.Primary="primary",t.Secondary="secondary",t}();$.ActionMode=p0;var h0;(function(t){t[t.Auto=0]="Auto",t[t.Stretch=1]="Stretch",t[t.Small=2]="Small",t[t.Medium=3]="Medium",t[t.Large=4]="Large"})(h0=$.Size||($.Size={}));var g0;(function(t){t[t.Small=0]="Small",t[t.Medium=1]="Medium",t[t.Large=2]="Large"})(g0=$.ImageSize||($.ImageSize={}));var m0;(function(t){t[t.Weight=0]="Weight",t[t.Pixel=1]="Pixel"})(m0=$.SizeUnit||($.SizeUnit={}));var y0;(function(t){t[t.Small=0]="Small",t[t.Default=1]="Default",t[t.Medium=2]="Medium",t[t.Large=3]="Large",t[t.ExtraLarge=4]="ExtraLarge"})(y0=$.TextSize||($.TextSize={}));var b0;(function(t){t[t.Lighter=0]="Lighter",t[t.Default=1]="Default",t[t.Bolder=2]="Bolder"})(b0=$.TextWeight||($.TextWeight={}));var v0;(function(t){t[t.Default=0]="Default",t[t.Monospace=1]="Monospace"})(v0=$.FontType||($.FontType={}));var C0;(function(t){t[t.None=0]="None",t[t.Small=1]="Small",t[t.Default=2]="Default",t[t.Medium=3]="Medium",t[t.Large=4]="Large",t[t.ExtraLarge=5]="ExtraLarge",t[t.Padding=6]="Padding"})(C0=$.Spacing||($.Spacing={}));var x0;(function(t){t[t.Default=0]="Default",t[t.Dark=1]="Dark",t[t.Light=2]="Light",t[t.Accent=3]="Accent",t[t.Good=4]="Good",t[t.Warning=5]="Warning",t[t.Attention=6]="Attention"})(x0=$.TextColor||($.TextColor={}));var A0;(function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right"})(A0=$.HorizontalAlignment||($.HorizontalAlignment={}));var E0;(function(t){t[t.Top=0]="Top",t[t.Center=1]="Center",t[t.Bottom=2]="Bottom"})(E0=$.VerticalAlignment||($.VerticalAlignment={}));var S0;(function(t){t[t.Left=0]="Left",t[t.Center=1]="Center",t[t.Right=2]="Right",t[t.Stretch=3]="Stretch"})(S0=$.ActionAlignment||($.ActionAlignment={}));var w0;(function(t){t[t.Default=0]="Default",t[t.Person=1]="Person"})(w0=$.ImageStyle||($.ImageStyle={}));var I0;(function(t){t[t.Inline=0]="Inline",t[t.Popup=1]="Popup"})(I0=$.ShowCardActionMode||($.ShowCardActionMode={}));var k0;(function(t){t[t.Horizontal=0]="Horizontal",t[t.Vertical=1]="Vertical"})(k0=$.Orientation||($.Orientation={}));var T0;(function(t){t[t.Cover=0]="Cover",t[t.RepeatHorizontally=1]="RepeatHorizontally",t[t.RepeatVertically=2]="RepeatVertically",t[t.Repeat=3]="Repeat"})(T0=$.FillMode||($.FillMode={}));var _0;(function(t){t[t.LeftOfTitle=0]="LeftOfTitle",t[t.AboveTitle=1]="AboveTitle"})(_0=$.ActionIconPlacement||($.ActionIconPlacement={}));var P0;(function(t){t[t.Text=0]="Text",t[t.Tel=1]="Tel",t[t.Url=2]="Url",t[t.Email=3]="Email",t[t.Password=4]="Password"})(P0=$.InputTextStyle||($.InputTextStyle={}));var F0;(function(t){t[t.Parse=0]="Parse",t[t.ToJSON=1]="ToJSON",t[t.Validation=2]="Validation"})(F0=$.ValidationPhase||($.ValidationPhase={}));var D0;(function(t){t[t.Hint=0]="Hint",t[t.ActionTypeNotAllowed=1]="ActionTypeNotAllowed",t[t.CollectionCantBeEmpty=2]="CollectionCantBeEmpty",t[t.Deprecated=3]="Deprecated",t[t.ElementTypeNotAllowed=4]="ElementTypeNotAllowed",t[t.InteractivityNotAllowed=5]="InteractivityNotAllowed",t[t.InvalidPropertyValue=6]="InvalidPropertyValue",t[t.MissingCardType=7]="MissingCardType",t[t.PropertyCantBeNull=8]="PropertyCantBeNull",t[t.TooManyActions=9]="TooManyActions",t[t.UnknownActionType=10]="UnknownActionType",t[t.UnknownElementType=11]="UnknownElementType",t[t.UnsupportedCardVersion=12]="UnsupportedCardVersion",t[t.DuplicateId=13]="DuplicateId",t[t.UnsupportedProperty=14]="UnsupportedProperty",t[t.RequiredInputsShouldHaveLabel=15]="RequiredInputsShouldHaveLabel",t[t.RequiredInputsShouldHaveErrorMessage=16]="RequiredInputsShouldHaveErrorMessage",t[t.Other=17]="Other"})(D0=$.ValidationEvent||($.ValidationEvent={}));var B0;(function(t){t[t.FullyInContainer=0]="FullyInContainer",t[t.Overflowing=1]="Overflowing",t[t.FullyOutOfContainer=2]="FullyOutOfContainer"})(B0=$.ContainerFitStatus||($.ContainerFitStatus={}));var M0;(function(t){t[t.UnknownType=0]="UnknownType",t[t.ForbiddenType=1]="ForbiddenType"})(M0=$.TypeErrorType||($.TypeErrorType={}));var z0;(function(t){t[t.Disabled=0]="Disabled",t[t.Manual=1]="Manual",t[t.Automatic=2]="Automatic"})(z0=$.RefreshMode||($.RefreshMode={}));var O0;(function(t){t[t.Info=0]="Info",t[t.Warning=1]="Warning",t[t.Error=2]="Error"})(O0=$.LogLevel||($.LogLevel={}));var R0;(function(t){t[t.NavigationNext=0]="NavigationNext",t[t.NavigationPrevious=1]="NavigationPrevious",t[t.Pagination=2]="Pagination",t[t.Autoplay=3]="Autoplay"})(R0=$.CarouselInteractionEvent||($.CarouselInteractionEvent={}))});var zt=L(Be=>{"use strict";Object.defineProperty(Be,"__esModule",{value:!0});Be.UUID=Be.SizeAndUnit=Be.PaddingDefinition=Be.SpacingDefinition=Be.StringWithSubstitutions=Be.ContentTypes=Be.GlobalSettings=void 0;var gt=ht(),L0=function(){function t(){}return t.useAdvancedTextBlockTruncation=!0,t.useAdvancedCardBottomTruncation=!1,t.useMarkdownInRadioButtonAndCheckbox=!0,t.allowMarkForTextHighlighting=!1,t.alwaysBleedSeparators=!1,t.enableFullJsonRoundTrip=!1,t.displayInputValidationErrors=!0,t.allowPreProcessingPropertyValues=!1,t.setTabIndexAtCardRoot=!0,t.enableFallback=!0,t.useWebkitLineClamp=!0,t.allowMoreThanMaxActionsInOverflowMenu=!1,t.removePaddingFromContainersWithBackgroundImage=!1,t.resetInputsDirtyStateAfterActionExecution=!0,t.applets={logEnabled:!0,logLevel:gt.LogLevel.Error,maximumRetryAttempts:3,defaultTimeBetweenRetryAttempts:3e3,authPromptWidth:400,authPromptHeight:600,refresh:{mode:gt.RefreshMode.Manual,timeBetweenAutomaticRefreshes:3e3,maximumConsecutiveAutomaticRefreshes:3,allowManualRefreshesAfterAutomaticRefreshes:!0}},t}();Be.GlobalSettings=L0;Be.ContentTypes={applicationJson:"application/json",applicationXWwwFormUrlencoded:"application/x-www-form-urlencoded"};var V0=function(){function t(){this._isProcessed=!1}return t.prototype.getReferencedInputs=function(e,n){if(!n)throw new Error("The referencedInputs parameter cannot be null.");if(this._original)for(var r=0,i=e;r<i.length;r++){var o=i[r],a=new RegExp("\\{{2}("+o.id+").value\\}{2}","gi").exec(this._original);a!=null&&o.id&&(n[o.id]=o)}},t.prototype.substituteInputValues=function(e,n){if(this._processed=this._original,this._original)for(var r=/\{{2}([a-z0-9_$@]+).value\}{2}/gi,i=void 0;(i=r.exec(this._original))!==null&&this._processed;)for(var o=0,a=Object.keys(e);o<a.length;o++){var l=a[o];if(l.toLowerCase()===i[1].toLowerCase()){var s=e[l],c="";s.value&&(c=s.value),n===Be.ContentTypes.applicationJson?(c=JSON.stringify(c),c=c.slice(1,-1)):n===Be.ContentTypes.applicationXWwwFormUrlencoded&&(c=encodeURIComponent(c)),this._processed=this._processed.replace(i[0],c);break}}this._isProcessed=!0},t.prototype.getOriginal=function(){return this._original},t.prototype.get=function(){return this._isProcessed?this._processed:this._original},t.prototype.set=function(e){this._original=e,this._isProcessed=!1},t}();Be.StringWithSubstitutions=V0;var N0=function(){function t(e,n,r,i){e===void 0&&(e=0),n===void 0&&(n=0),r===void 0&&(r=0),i===void 0&&(i=0),this.left=0,this.top=0,this.right=0,this.bottom=0,this.top=e,this.right=n,this.bottom=r,this.left=i}return t}();Be.SpacingDefinition=N0;var H0=function(){function t(e,n,r,i){e===void 0&&(e=gt.Spacing.None),n===void 0&&(n=gt.Spacing.None),r===void 0&&(r=gt.Spacing.None),i===void 0&&(i=gt.Spacing.None),this.top=gt.Spacing.None,this.right=gt.Spacing.None,this.bottom=gt.Spacing.None,this.left=gt.Spacing.None,this.top=e,this.right=n,this.bottom=r,this.left=i}return t}();Be.PaddingDefinition=H0;var q0=function(){function t(e,n){this.physicalSize=e,this.unit=n}return t.parse=function(e,n){n===void 0&&(n=!1);var r=new t(0,gt.SizeUnit.Weight);if(typeof e=="number")return r.physicalSize=e,r;if(typeof e=="string"){var i=/^([0-9]+)(px|\*)?$/g,o=i.exec(e),a=n?3:2;if(o&&o.length>=a)return r.physicalSize=parseInt(o[1]),o.length===3&&o[2]==="px"&&(r.unit=gt.SizeUnit.Pixel),r}throw new Error("Invalid size: "+e)},t}();Be.SizeAndUnit=q0;var Wl=function(){function t(){}return t.generate=function(){var e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return t.lut[e&255]+t.lut[e>>8&255]+t.lut[e>>16&255]+t.lut[e>>24&255]+"-"+t.lut[n&255]+t.lut[n>>8&255]+"-"+t.lut[n>>16&15|64]+t.lut[n>>24&255]+"-"+t.lut[r&63|128]+t.lut[r>>8&255]+"-"+t.lut[r>>16&255]+t.lut[r>>24&255]+t.lut[i&255]+t.lut[i>>8&255]+t.lut[i>>16&255]+t.lut[i>>24&255]},t.initialize=function(){for(var e=0;e<256;e++)t.lut[e]=(e<16?"0":"")+e.toString(16)},t.lut=[],t}();Be.UUID=Wl;Wl.initialize()});var Xt=L(se=>{"use strict";var co;Object.defineProperty(se,"__esModule",{value:!0});se.addCancelSelectActionEventHandler=se.clearElementChildren=se.getScrollY=se.getScrollX=se.getFitStatus=se.truncate=se.truncateText=se.stringToCssColor=se.parseEnum=se.getEnumValueByName=se.parseBool=se.parseNumber=se.parseString=se.appendChild=se.generateUniqueId=se.isMobileOS=se.isInternetExplorer=void 0;var uo=ht(),G0=zt();function $0(){return window.document.documentMode!==void 0}se.isInternetExplorer=$0;function W0(){var t=window.navigator.userAgent;return!!t.match(/Android/i)||!!t.match(/iPad/i)||!!t.match(/iPhone/i)}se.isMobileOS=W0;function Y0(){return"__ac-"+G0.UUID.generate()}se.generateUniqueId=Y0;function U0(t,e){e&&t.appendChild(e)}se.appendChild=U0;function j0(t,e){return typeof t=="string"?t:e}se.parseString=j0;function Q0(t,e){return typeof t=="number"?t:e}se.parseNumber=Q0;function J0(t,e){if(typeof t=="boolean")return t;if(typeof t=="string")switch(t.toLowerCase()){case"true":return!0;case"false":return!1;default:return e}return e}se.parseBool=J0;function Yl(t,e){for(var n in t){var r=parseInt(n,10);if(r>=0){var i=t[n];if(i&&typeof i=="string"&&i.toLowerCase()===e.toLowerCase())return r}}}se.getEnumValueByName=Yl;function X0(t,e,n){if(!e)return n;var r=Yl(t,e);return r!==void 0?r:n}se.parseEnum=X0;function K0(t){if(t){var e=/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi,n=e.exec(t);if(n&&n[4]){var r=parseInt(n[1],16)/255,i=parseInt(n[2],16),o=parseInt(n[3],16),a=parseInt(n[4],16);return"rgba("+i+","+o+","+a+","+r+")"}}return t}se.stringToCssColor=K0;function Ul(t,e,n,r,i){var o=function(){return e-t.scrollHeight>=-1};if(!o()){for(var a=ty(n),l=0,s=a.length,c=0;l<s;){var u=Math.floor((l+s)/2);r(n,a[u]),o()?(c=a[u],l=u+1):s=u}if(r(n,c),i&&e-t.scrollHeight>=i-1){for(var d=Ur(n,c);d<n.length&&(r(n,d),o());)c=d,d=Ur(n,d);r(n,c)}}}function Z0(t,e,n){Ul(t,e,t.innerText,function(r,i){t.innerText=r.substring(0,i)+"..."},n)}se.truncateText=Z0;var fo=typeof window>"u"||(co=window.trustedTypes)===null||co===void 0?void 0:co.createPolicy("adaptivecards#deprecatedExportedFunctionPolicy",{createHTML:function(t){return t}});function ey(t,e,n){Ul(t,e,t.innerHTML,function(r,i){var o,a=r.substring(0,i)+"...",l=(o=fo?.createHTML(a))!==null&&o!==void 0?o:a;t.innerHTML=l},n)}se.truncate=ey;function ty(t){for(var e=[],n=Ur(t,-1);n<t.length;)t[n]===" "&&e.push(n),n=Ur(t,n);return e}function Ur(t,e){for(e+=1;e<t.length&&t[e]==="<";)for(;e<t.length&&t[e++]!==">";);return e}function ny(t,e){var n=t.offsetTop,r=n+t.clientHeight;return r<=e?uo.ContainerFitStatus.FullyInContainer:n<e?uo.ContainerFitStatus.Overflowing:uo.ContainerFitStatus.FullyOutOfContainer}se.getFitStatus=ny;function ry(){return window.pageXOffset}se.getScrollX=ry;function iy(){return window.pageYOffset}se.getScrollY=iy;function oy(t){for(;t.firstChild;)t.removeChild(t.firstChild)}se.clearElementChildren=oy;function ay(t){t.onclick=function(e){e.preventDefault(),e.cancelBubble=!0}}se.addCancelSelectActionEventHandler=ay});var Kt=L(ie=>{"use strict";var kt=ie&&ie.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(ie,"__esModule",{value:!0});ie.SerializableObject=ie.property=ie.SerializableObjectSchema=ie.CustomProperty=ie.SerializableObjectCollectionProperty=ie.SerializableObjectProperty=ie.EnumProperty=ie.ValueSetProperty=ie.StringArrayProperty=ie.PixelSizeProperty=ie.NumProperty=ie.BoolProperty=ie.StringProperty=ie.PropertyDefinition=ie.BaseSerializationContext=ie.isVersionLessOrEqual=ie.Versions=ie.Version=void 0;var an=zt(),jr=Xt(),$e=ht(),Ot=on(),It=function(){function t(e,n,r){e===void 0&&(e=1),n===void 0&&(n=1),this._isValid=!0,this._major=e,this._minor=n,this._label=r}return t.parse=function(e,n){if(!!e){var r=new t;r._versionString=e;var i=/(\d+).(\d+)/gi,o=i.exec(e);return o!=null&&o.length===3?(r._major=parseInt(o[1]),r._minor=parseInt(o[2])):r._isValid=!1,r._isValid||n.logParseEvent(void 0,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidVersionString(r._versionString)),r}},t.prototype.toString=function(){return this._isValid?this._major+"."+this._minor:this._versionString},t.prototype.toJSON=function(){return this.toString()},t.prototype.compareTo=function(e){if(!this.isValid||!e.isValid)throw new Error("Cannot compare invalid version.");return this.major>e.major?1:this.major<e.major?-1:this.minor>e.minor?1:this.minor<e.minor?-1:0},Object.defineProperty(t.prototype,"label",{get:function(){return this._label?this._label:this.toString()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"major",{get:function(){return this._major},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"minor",{get:function(){return this._minor},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isValid",{get:function(){return this._isValid},enumerable:!1,configurable:!0}),t}();ie.Version=It;var po=function(){function t(){}return t.getAllDeclaredVersions=function(){var e=t,n=[];for(var r in e)if(r.match(/^v[0-9_]*$/))try{var i=e[r];i instanceof It&&n.push(i)}catch{}return n.sort(function(o,a){return o.compareTo(a)})},t.v1_0=new It(1,0),t.v1_1=new It(1,1),t.v1_2=new It(1,2),t.v1_3=new It(1,3),t.v1_4=new It(1,4),t.v1_5=new It(1,5),t.v1_6=new It(1,6),t.latest=t.v1_6,t}();ie.Versions=po;function sy(t,e){return t instanceof It&&e instanceof It?e.compareTo(t)>=0:!0}ie.isVersionLessOrEqual=sy;var ho=function(){function t(e){e===void 0&&(e=po.latest),this._validationEvents=[],this.targetVersion=e}return t.prototype.serializeValue=function(e,n,r,i,o){i===void 0&&(i=void 0),o===void 0&&(o=!1),r==null||r===i?(!an.GlobalSettings.enableFullJsonRoundTrip||o)&&delete e[n]:r===i?delete e[n]:e[n]=r},t.prototype.serializeString=function(e,n,r,i){r==null||r===i?an.GlobalSettings.enableFullJsonRoundTrip||delete e[n]:e[n]=r},t.prototype.serializeBool=function(e,n,r,i){r==null||r===i?an.GlobalSettings.enableFullJsonRoundTrip||delete e[n]:e[n]=r},t.prototype.serializeNumber=function(e,n,r,i){r==null||r===i||isNaN(r)?an.GlobalSettings.enableFullJsonRoundTrip||delete e[n]:e[n]=r},t.prototype.serializeEnum=function(e,n,r,i,o){o===void 0&&(o=void 0),i==null||i===o?an.GlobalSettings.enableFullJsonRoundTrip||delete n[r]:n[r]=e[i]},t.prototype.serializeArray=function(e,n,r){var i=[];if(r)for(var o=0,a=r;o<a.length;o++){var l=a[o],s=void 0;l instanceof Jl?s=l.toJSON(this):l.toJSON?s=l.toJSON():s=l,s!==void 0&&i.push(s)}i.length===0?e.hasOwnProperty(n)&&Array.isArray(e[n])&&delete e[n]:this.serializeValue(e,n,i)},t.prototype.clearEvents=function(){this._validationEvents=[]},t.prototype.logEvent=function(e,n,r,i){this._validationEvents.push({source:e,phase:n,event:r,message:i})},t.prototype.logParseEvent=function(e,n,r){this.logEvent(e,$e.ValidationPhase.Parse,n,r)},t.prototype.getEventAt=function(e){return this._validationEvents[e]},Object.defineProperty(t.prototype,"eventCount",{get:function(){return this._validationEvents.length},enumerable:!1,configurable:!0}),t}();ie.BaseSerializationContext=ho;var jl=function(t){kt(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e}(ho),mt=function(){function t(e,n,r,i){this.targetVersion=e,this.name=n,this.defaultValue=r,this.onGetInitialValue=i,this.isSerializationEnabled=!0,this.sequentialNumber=t._sequentialNumber,t._sequentialNumber++}return t.prototype.getInternalName=function(){return this.name},t.prototype.parse=function(e,n,r){return n[this.name]},t.prototype.toJSON=function(e,n,r,i){i.serializeValue(n,this.name,r,this.defaultValue)},t._sequentialNumber=0,t}();ie.PropertyDefinition=mt;var ly=function(t){kt(e,t);function e(n,r,i,o,a,l){i===void 0&&(i=!0);var s=t.call(this,n,r,a,l)||this;return s.targetVersion=n,s.name=r,s.treatEmptyAsUndefined=i,s.regEx=o,s.defaultValue=a,s.onGetInitialValue=l,s}return e.prototype.parse=function(n,r,i){var o=jr.parseString(r[this.name],this.defaultValue),a=o===void 0||o===""&&this.treatEmptyAsUndefined;if(!a&&this.regEx!==void 0){var l=this.regEx.exec(o);if(!l){i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidPropertyValue(o,this.name));return}}return o},e.prototype.toJSON=function(n,r,i,o){o.serializeString(r,this.name,i===""&&this.treatEmptyAsUndefined?void 0:i,this.defaultValue)},e}(mt);ie.StringProperty=ly;var cy=function(t){kt(e,t);function e(n,r,i,o){var a=t.call(this,n,r,i,o)||this;return a.targetVersion=n,a.name=r,a.defaultValue=i,a.onGetInitialValue=o,a}return e.prototype.parse=function(n,r,i){return jr.parseBool(r[this.name],this.defaultValue)},e.prototype.toJSON=function(n,r,i,o){o.serializeBool(r,this.name,i,this.defaultValue)},e}(mt);ie.BoolProperty=cy;var uy=function(t){kt(e,t);function e(n,r,i,o){var a=t.call(this,n,r,i,o)||this;return a.targetVersion=n,a.name=r,a.defaultValue=i,a.onGetInitialValue=o,a}return e.prototype.parse=function(n,r,i){return jr.parseNumber(r[this.name],this.defaultValue)},e.prototype.toJSON=function(n,r,i,o){o.serializeNumber(r,this.name,i,this.defaultValue)},e}(mt);ie.NumProperty=uy;var dy=function(t){kt(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.parse=function(n,r,i){var o=void 0,a=r[this.name];if(typeof a=="string"){var l=!1;try{var s=an.SizeAndUnit.parse(a,!0);s.unit===$e.SizeUnit.Pixel&&(o=s.physicalSize,l=!0)}catch{}l||i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidPropertyValue(r[this.name],"minHeight"))}return o},e.prototype.toJSON=function(n,r,i,o){o.serializeValue(r,this.name,typeof i=="number"&&!isNaN(i)?i+"px":void 0)},e}(mt);ie.PixelSizeProperty=dy;var fy=function(t){kt(e,t);function e(n,r,i,o){var a=t.call(this,n,r,i,o)||this;return a.targetVersion=n,a.name=r,a.defaultValue=i,a.onGetInitialValue=o,a}return e.prototype.parse=function(n,r,i){var o=r[this.name];if(o===void 0||!Array.isArray(o))return this.defaultValue;for(var a=[],l=0,s=o;l<s.length;l++){var c=s[l];typeof c=="string"?a.push(c):i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,'Invalid array value "'.concat(JSON.stringify(c),'" of type "').concat(typeof c,'" ignored for "').concat(this.name,'".'))}return a},e.prototype.toJSON=function(n,r,i,o){o.serializeArray(r,this.name,i)},e}(mt);ie.StringArrayProperty=fy;var py=function(t){kt(e,t);function e(n,r,i,o,a){var l=t.call(this,n,r,o,a)||this;return l.targetVersion=n,l.name=r,l.values=i,l.defaultValue=o,l.onGetInitialValue=a,l}return e.prototype.isValidValue=function(n,r){for(var i=0,o=this.values;i<o.length;i++){var a=o[i];if(n.toLowerCase()===a.value.toLowerCase()){var l=a.targetVersion?a.targetVersion:this.targetVersion;return l.compareTo(r.targetVersion)<=0}}return!1},e.prototype.parse=function(n,r,i){var o=r[this.name];if(o===void 0)return this.defaultValue;if(typeof o=="string")for(var a=0,l=this.values;a<l.length;a++){var s=l[a];if(o.toLowerCase()===s.value.toLowerCase()){var c=s.targetVersion?s.targetVersion:this.targetVersion;return c.compareTo(i.targetVersion)<=0?s.value:(i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.propertyValueNotSupported(o,this.name,c.toString(),i.targetVersion.toString())),this.defaultValue)}}return i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidPropertyValue(o,this.name)),this.defaultValue},e.prototype.toJSON=function(n,r,i,o){var a=!1;if(i!==void 0){a=!0;for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===i){var u=c.targetVersion?c.targetVersion:this.targetVersion;if(u.compareTo(o.targetVersion)<=0){a=!1;break}else o.logEvent(n,$e.ValidationPhase.ToJSON,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.propertyValueNotSupported(i,this.name,u.toString(),o.targetVersion.toString()))}}}a||o.serializeValue(r,this.name,i,this.defaultValue,!0)},e}(mt);ie.ValueSetProperty=py;var hy=function(t){kt(e,t);function e(n,r,i,o,a,l){var s=t.call(this,n,r,o,l)||this;if(s.targetVersion=n,s.name=r,s.enumType=i,s.defaultValue=o,s.onGetInitialValue=l,s._values=[],a)s._values=a;else for(var c in i){var u=parseInt(c,10);u>=0&&s._values.push({value:u})}return s}return e.prototype.parse=function(n,r,i){var o=r[this.name];if(typeof o!="string")return this.defaultValue;var a=jr.getEnumValueByName(this.enumType,o);if(a!==void 0)for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===a){var u=c.targetVersion?c.targetVersion:this.targetVersion;return u.compareTo(i.targetVersion)<=0?a:(i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.propertyValueNotSupported(o,this.name,u.toString(),i.targetVersion.toString())),this.defaultValue)}}return i.logParseEvent(n,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidPropertyValue(o,this.name)),this.defaultValue},e.prototype.toJSON=function(n,r,i,o){var a=!1;if(i!==void 0){a=!0;for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===i){var u=c.targetVersion?c.targetVersion:this.targetVersion;if(u.compareTo(o.targetVersion)<=0){a=!1;break}else o.logEvent(n,$e.ValidationPhase.ToJSON,$e.ValidationEvent.InvalidPropertyValue,Ot.Strings.errors.invalidPropertyValue(i,this.name))}}}a||o.serializeEnum(this.enumType,r,this.name,i,this.defaultValue)},Object.defineProperty(e.prototype,"values",{get:function(){return this._values},enumerable:!1,configurable:!0}),e}(mt);ie.EnumProperty=hy;var gy=function(t){kt(e,t);function e(n,r,i,o,a){o===void 0&&(o=!1);var l=t.call(this,n,r,a,function(s){return l.nullable?void 0:new l.objectType})||this;return l.targetVersion=n,l.name=r,l.objectType=i,l.nullable=o,l}return e.prototype.parse=function(n,r,i){var o=r[this.name];if(o===void 0)return this.onGetInitialValue?this.onGetInitialValue(n):this.defaultValue;var a=new this.objectType;return a.parse(o,i),a},e.prototype.toJSON=function(n,r,i,o){var a=void 0;i!==void 0&&!i.hasAllDefaultValues()&&(a=i.toJSON(o)),typeof a=="object"&&Object.keys(a).length===0&&(a=void 0),o.serializeValue(r,this.name,a,this.defaultValue,!0)},e}(mt);ie.SerializableObjectProperty=gy;var my=function(t){kt(e,t);function e(n,r,i,o){var a=t.call(this,n,r,void 0,function(l){return[]})||this;return a.targetVersion=n,a.name=r,a.objectType=i,a.onItemAdded=o,a}return e.prototype.parse=function(n,r,i){var o=[],a=r[this.name];if(Array.isArray(a))for(var l=0,s=a;l<s.length;l++){var c=s[l],u=new this.objectType;u.parse(c,i),o.push(u),this.onItemAdded&&this.onItemAdded(n,u)}return o.length>0?o:this.onGetInitialValue?this.onGetInitialValue(n):void 0},e.prototype.toJSON=function(n,r,i,o){o.serializeArray(r,this.name,i)},e}(mt);ie.SerializableObjectCollectionProperty=my;var yy=function(t){kt(e,t);function e(n,r,i,o,a,l){var s=t.call(this,n,r,a,l)||this;if(s.targetVersion=n,s.name=r,s.onParse=i,s.onToJSON=o,s.defaultValue=a,s.onGetInitialValue=l,!s.onParse)throw new Error("CustomPropertyDefinition instances must have an onParse handler.");if(!s.onToJSON)throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");return s}return e.prototype.parse=function(n,r,i){return this.onParse(n,this,r,i)},e.prototype.toJSON=function(n,r,i,o){this.onToJSON(n,this,r,i,o)},e}(mt);ie.CustomProperty=yy;var Ql=function(){function t(){this._properties=[]}return t.prototype.indexOf=function(e){for(var n=0;n<this._properties.length;n++)if(this._properties[n]===e)return n;return-1},t.prototype.add=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++){var o=i[r];this.indexOf(o)===-1&&this._properties.push(o)}},t.prototype.remove=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=0,i=e;r<i.length;r++)for(var o=i[r];;){var a=this.indexOf(o);if(a>=0)this._properties.splice(a,1);else break}},t.prototype.getItemAt=function(e){return this._properties[e]},t.prototype.getCount=function(){return this._properties.length},t}();ie.SerializableObjectSchema=Ql;function by(t){return function(e,n){var r=Object.getOwnPropertyDescriptor(e,n)||{};!r.get&&!r.set&&(r.get=function(){return this.getValue(t)},r.set=function(i){this.setValue(t,i)},Object.defineProperty(e,n,r))}}ie.property=by;var Jl=function(){function t(){this._propertyBag={},this._rawProperties={},this.maxVersion=t.defaultMaxVersion;for(var e=this.getSchema(),n=0;n<e.getCount();n++){var r=e.getItemAt(n);r.onGetInitialValue&&this.setValue(r,r.onGetInitialValue(this))}}return t.prototype.getDefaultSerializationContext=function(){return new jl},t.prototype.populateSchema=function(e){var n=this.constructor,r=[];for(var i in n)try{var o=n[i];o instanceof mt&&r.push(o)}catch{}if(r.length>0){var a=r.sort(function(l,s){return l.sequentialNumber>s.sequentialNumber?1:l.sequentialNumber<s.sequentialNumber?-1:0});e.add.apply(e,a)}t.onRegisterCustomProperties&&t.onRegisterCustomProperties(this,e)},t.prototype.getValue=function(e){return this._propertyBag.hasOwnProperty(e.getInternalName())?this._propertyBag[e.getInternalName()]:e.defaultValue},t.prototype.setValue=function(e,n){n==null?delete this._propertyBag[e.getInternalName()]:this._propertyBag[e.getInternalName()]=n},t.prototype.internalParse=function(e,n){if(this._propertyBag={},this._rawProperties=an.GlobalSettings.enableFullJsonRoundTrip?e||{}:{},e)for(var r=this.getSchema(),i=0;i<r.getCount();i++){var o=r.getItemAt(i);if(o.isSerializationEnabled){var a=o.onGetInitialValue?o.onGetInitialValue(this):void 0;e.hasOwnProperty(o.name)&&(o.targetVersion.compareTo(n.targetVersion)<=0?a=o.parse(this,e,n):n.logParseEvent(this,$e.ValidationEvent.UnsupportedProperty,Ot.Strings.errors.propertyNotSupported(o.name,o.targetVersion.toString(),n.targetVersion.toString()))),this.setValue(o,a)}}else this.resetDefaultValues()},t.prototype.internalToJSON=function(e,n){for(var r=this.getSchema(),i=[],o=0;o<r.getCount();o++){var a=r.getItemAt(o);a.isSerializationEnabled&&a.targetVersion.compareTo(n.targetVersion)<=0&&i.indexOf(a.name)===-1&&(a.toJSON(this,e,this.getValue(a),n),i.push(a.name))}},t.prototype.shouldSerialize=function(e){return!0},t.prototype.parse=function(e,n){this.internalParse(e,n||new jl)},t.prototype.toJSON=function(e){var n;if(e&&e instanceof ho?n=e:(n=this.getDefaultSerializationContext(),n.toJSONOriginalParam=e),this.shouldSerialize(n)){var r=void 0;return an.GlobalSettings.enableFullJsonRoundTrip&&this._rawProperties&&typeof this._rawProperties=="object"?r=this._rawProperties:r={},this.internalToJSON(r,n),r}else return},t.prototype.hasDefaultValue=function(e){return this.getValue(e)===e.defaultValue},t.prototype.hasAllDefaultValues=function(){for(var e=this.getSchema(),n=0;n<e.getCount();n++){var r=e.getItemAt(n);if(!this.hasDefaultValue(r))return!1}return!0},t.prototype.resetDefaultValues=function(){for(var e=this.getSchema(),n=0;n<e.getCount();n++){var r=e.getItemAt(n);this.setValue(r,r.defaultValue)}},t.prototype.setCustomProperty=function(e,n){var r=typeof n=="string"&&!n||n===void 0||n===null;r?delete this._rawProperties[e]:this._rawProperties[e]=n},t.prototype.getCustomProperty=function(e){return this._rawProperties[e]},t.prototype.getSchema=function(){var e=t._schemaCache[this.getSchemaKey()];return e||(e=new Ql,this.populateSchema(e),t._schemaCache[this.getSchemaKey()]=e),e},t.defaultMaxVersion=po.latest,t._schemaCache={},t}();ie.SerializableObject=Jl});var Qr=L(Ln=>{"use strict";var vy=Ln&&Ln.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Ln,"__esModule",{value:!0});Ln.HostCapabilities=void 0;var Xl=Kt(),Cy=function(t){vy(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._capabilities={},n}return e.prototype.getSchemaKey=function(){return"HostCapabilities"},e.prototype.internalParse=function(n,r){if(t.prototype.internalParse.call(this,n,r),n)for(var i in n){var o=n[i];if(typeof o=="string")if(o==="*")this.addCapability(i,"*");else{var a=Xl.Version.parse(o,r);a?.isValid&&this.addCapability(i,a)}}},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r);for(var i in this._capabilities)n[i]=this._capabilities[i]},e.prototype.addCapability=function(n,r){this._capabilities[n]=r},e.prototype.removeCapability=function(n){delete this._capabilities[n]},e.prototype.clear=function(){this._capabilities={}},e.prototype.hasCapability=function(n,r){return this._capabilities.hasOwnProperty(n)?r==="*"||this._capabilities[n]==="*"?!0:r.compareTo(this._capabilities[n])<=0:!1},e.prototype.areAllMet=function(n){for(var r in this._capabilities)if(!n.hasCapability(r,this._capabilities[r]))return!1;return!0},e}(Xl.SerializableObject);Ln.HostCapabilities=Cy});var hr=L(X=>{"use strict";var Nn=X&&X.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(X,"__esModule",{value:!0});X.defaultHostConfig=X.HostConfig=X.CarouselConfig=X.FontTypeSet=X.FontTypeDefinition=X.ContainerStyleSet=X.ContainerStyleDefinition=X.ColorSetDefinition=X.ActionsConfig=X.ShowCardActionConfig=X.FactSetConfig=X.FactTitleDefinition=X.FactTextDefinition=X.InputConfig=X.InputLabelConfig=X.RequiredInputLabelTextDefinition=X.TextBlockConfig=X.TextStyleSet=X.TextStyleDefinition=X.BaseTextDefinition=X.TableConfig=X.MediaConfig=X.ImageSetConfig=X.AdaptiveCardConfig=X.TextColorDefinition=X.ColorDefinition=void 0;var V=ht(),Kr=Xt(),Kl=zt(),xy=Qr();function yt(t,e,n){if(typeof e=="string"){var r=Kr.parseEnum(t,e,n);return r!==void 0?r:n}else return typeof e=="number"?e:n}var go=function(){function t(e,n){this.default="#000000",this.subtle="#666666",e&&(this.default=e),n&&(this.subtle=n)}return t.prototype.parse=function(e){e&&(this.default=e.default||this.default,this.subtle=e.subtle||this.subtle)},t}();X.ColorDefinition=go;var sn=function(t){Nn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.highlightColors=new go("#22000000","#11000000"),n}return e.prototype.parse=function(n){t.prototype.parse.call(this,n),n&&this.highlightColors.parse(n.highlightColors)},e}(go);X.TextColorDefinition=sn;var mo=function(){function t(e){this.allowCustomStyle=!1,e&&(this.allowCustomStyle=e.allowCustomStyle||this.allowCustomStyle)}return t}();X.AdaptiveCardConfig=mo;var yo=function(){function t(e){this.imageSize=V.Size.Medium,this.maxImageHeight=100,e&&(this.imageSize=e.imageSize!=null?e.imageSize:this.imageSize,this.maxImageHeight=Kr.parseNumber(e.maxImageHeight,100))}return t.prototype.toJSON=function(){return{imageSize:V.Size[this.imageSize],maxImageHeight:this.maxImageHeight}},t}();X.ImageSetConfig=yo;var Zl=function(){function t(e){this.allowInlinePlayback=!0,e&&(this.defaultPoster=e.defaultPoster,this.allowInlinePlayback=e.allowInlinePlayback||this.allowInlinePlayback)}return t.prototype.toJSON=function(){return{defaultPoster:this.defaultPoster,allowInlinePlayback:this.allowInlinePlayback}},t}();X.MediaConfig=Zl;var ec=function(){function t(e){this.cellSpacing=8,e&&(this.cellSpacing=e.cellSpacing&&typeof e.cellSpacing=="number"?e.cellSpacing:this.cellSpacing)}return t.prototype.toJSON=function(){return{cellSpacing:this.cellSpacing}},t}();X.TableConfig=ec;var ln=function(){function t(e){this.size=V.TextSize.Default,this.color=V.TextColor.Default,this.isSubtle=!1,this.weight=V.TextWeight.Default,this.parse(e)}return t.prototype.parse=function(e){e&&(this.size=yt(V.TextSize,e.size,this.size),this.color=yt(V.TextColor,e.color,this.color),this.isSubtle=e.isSubtle!==void 0&&typeof e.isSubtle=="boolean"?e.isSubtle:this.isSubtle,this.weight=yt(V.TextWeight,e.weight,this.getDefaultWeight()))},t.prototype.getDefaultWeight=function(){return V.TextWeight.Default},t.prototype.toJSON=function(){return{size:V.TextSize[this.size],color:V.TextColor[this.color],isSubtle:this.isSubtle,weight:V.TextWeight[this.weight]}},t}();X.BaseTextDefinition=ln;var Jr=function(t){Nn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.fontType=V.FontType.Default,n}return e.prototype.parse=function(n){t.prototype.parse.call(this,n),n&&(this.fontType=yt(V.FontType,n.fontType,this.fontType))},e}(ln);X.TextStyleDefinition=Jr;var bo=function(){function t(e){this.default=new Jr,this.heading=new Jr({size:"Large",weight:"Bolder"}),this.columnHeader=new Jr({weight:"Bolder"}),e&&(this.heading.parse(e.heading),this.columnHeader.parse(e.columnHeader))}return t.prototype.getStyleByName=function(e){switch(e.toLowerCase()){case"heading":return this.heading;case"columnHeader":return this.columnHeader;default:return this.default}},t}();X.TextStyleSet=bo;var vo=function(){function t(e){e&&(this.headingLevel=Kr.parseNumber(e.headingLevel))}return t}();X.TextBlockConfig=vo;var Co=function(t){Nn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.suffix=" *",n.suffixColor=V.TextColor.Attention,n}return e.prototype.parse=function(n){t.prototype.parse.call(this,n),n&&(this.suffix=n.suffix||this.suffix,this.suffixColor=yt(V.TextColor,n.suffixColor,this.suffixColor))},e.prototype.toJSON=function(){var n=t.prototype.toJSON.call(this);return n.suffix=this.suffix,n.suffixColor=V.TextColor[this.suffixColor],n},e}(ln);X.RequiredInputLabelTextDefinition=Co;var xo=function(){function t(e){this.inputSpacing=V.Spacing.Small,this.requiredInputs=new Co,this.optionalInputs=new ln,e&&(this.inputSpacing=yt(V.Spacing,e.inputSpacing,this.inputSpacing),this.requiredInputs=new Co(e.requiredInputs),this.optionalInputs=new ln(e.optionalInputs))}return t}();X.InputLabelConfig=xo;var Ao=function(){function t(e){this.label=new xo,this.errorMessage=new ln({color:V.TextColor.Attention}),e&&(this.label=new xo(e.label),this.errorMessage=new ln(e.errorMessage))}return t}();X.InputConfig=Ao;var Xr=function(t){Nn(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.wrap=!0,n}return e.prototype.parse=function(n){t.prototype.parse.call(this,n),n&&(this.wrap=n.wrap!=null?n.wrap:this.wrap)},e.prototype.toJSON=function(){var n=t.prototype.toJSON.call(this);return n.wrap=this.wrap,n},e}(ln);X.FactTextDefinition=Xr;var Eo=function(t){Nn(e,t);function e(n){var r=t.call(this,n)||this;return r.maxWidth=150,r.weight=V.TextWeight.Bolder,n&&(r.maxWidth=n.maxWidth!=null?n.maxWidth:r.maxWidth,r.weight=yt(V.TextWeight,n.weight,V.TextWeight.Bolder)),r}return e.prototype.getDefaultWeight=function(){return V.TextWeight.Bolder},e}(Xr);X.FactTitleDefinition=Eo;var So=function(){function t(e){this.title=new Eo,this.value=new Xr,this.spacing=10,e&&(this.title=new Eo(e.title),this.value=new Xr(e.value),this.spacing=e.spacing&&e.spacing!=null?e.spacing&&e.spacing:this.spacing)}return t}();X.FactSetConfig=So;var wo=function(){function t(e){this.actionMode=V.ShowCardActionMode.Inline,this.inlineTopMargin=16,this.style=V.ContainerStyle.Emphasis,e&&(this.actionMode=yt(V.ShowCardActionMode,e.actionMode,V.ShowCardActionMode.Inline),this.inlineTopMargin=e.inlineTopMargin!=null?e.inlineTopMargin:this.inlineTopMargin,this.style=e.style&&typeof e.style=="string"?e.style:V.ContainerStyle.Emphasis)}return t.prototype.toJSON=function(){return{actionMode:V.ShowCardActionMode[this.actionMode],inlineTopMargin:this.inlineTopMargin,style:this.style}},t}();X.ShowCardActionConfig=wo;var Io=function(){function t(e){if(this.maxActions=5,this.spacing=V.Spacing.Default,this.buttonSpacing=20,this.showCard=new wo,this.preExpandSingleShowCardAction=!1,this.actionsOrientation=V.Orientation.Horizontal,this.actionAlignment=V.ActionAlignment.Left,this.iconPlacement=V.ActionIconPlacement.LeftOfTitle,this.allowTitleToWrap=!1,this.iconSize=16,e){this.maxActions=e.maxActions!=null?e.maxActions:this.maxActions,this.spacing=yt(V.Spacing,e.spacing&&e.spacing,V.Spacing.Default),this.buttonSpacing=e.buttonSpacing!=null?e.buttonSpacing:this.buttonSpacing,this.showCard=new wo(e.showCard),this.preExpandSingleShowCardAction=Kr.parseBool(e.preExpandSingleShowCardAction,!1),this.actionsOrientation=yt(V.Orientation,e.actionsOrientation,V.Orientation.Horizontal),this.actionAlignment=yt(V.ActionAlignment,e.actionAlignment,V.ActionAlignment.Left),this.iconPlacement=yt(V.ActionIconPlacement,e.iconPlacement,V.ActionIconPlacement.LeftOfTitle),this.allowTitleToWrap=e.allowTitleToWrap!=null?e.allowTitleToWrap:this.allowTitleToWrap;try{var n=Kl.SizeAndUnit.parse(e.iconSize);n.unit===V.SizeUnit.Pixel&&(this.iconSize=n.physicalSize)}catch{}}}return t.prototype.toJSON=function(){return{maxActions:this.maxActions,spacing:V.Spacing[this.spacing],buttonSpacing:this.buttonSpacing,showCard:this.showCard,preExpandSingleShowCardAction:this.preExpandSingleShowCardAction,actionsOrientation:V.Orientation[this.actionsOrientation],actionAlignment:V.ActionAlignment[this.actionAlignment]}},t}();X.ActionsConfig=Io;var tc=function(){function t(e){this.default=new sn,this.dark=new sn,this.light=new sn,this.accent=new sn,this.good=new sn,this.warning=new sn,this.attention=new sn,this.parse(e)}return t.prototype.parseSingleColor=function(e,n){e&&this[n].parse(e[n])},t.prototype.parse=function(e){e&&(this.parseSingleColor(e,"default"),this.parseSingleColor(e,"dark"),this.parseSingleColor(e,"light"),this.parseSingleColor(e,"accent"),this.parseSingleColor(e,"good"),this.parseSingleColor(e,"warning"),this.parseSingleColor(e,"attention"))},t}();X.ColorSetDefinition=tc;var _o=function(){function t(e){this.foregroundColors=new tc({default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#E69500",subtle:"#DDE69500"},attention:{default:"#CC3300",subtle:"#DDCC3300"}}),this.parse(e)}return t.prototype.parse=function(e){e&&(this.backgroundColor=e.backgroundColor,this.foregroundColors.parse(e.foregroundColors),this.highlightBackgroundColor=e.highlightBackgroundColor,this.highlightForegroundColor=e.highlightForegroundColor,this.borderColor=e.borderColor)},Object.defineProperty(t.prototype,"isBuiltIn",{get:function(){return!1},enumerable:!1,configurable:!0}),t}();X.ContainerStyleDefinition=_o;var Vn=function(t){Nn(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"isBuiltIn",{get:function(){return!0},enumerable:!1,configurable:!0}),e}(_o),ko=function(){function t(e){if(this._allStyles={},this._allStyles[V.ContainerStyle.Default]=new Vn,this._allStyles[V.ContainerStyle.Emphasis]=new Vn,this._allStyles[V.ContainerStyle.Accent]=new Vn,this._allStyles[V.ContainerStyle.Good]=new Vn,this._allStyles[V.ContainerStyle.Attention]=new Vn,this._allStyles[V.ContainerStyle.Warning]=new Vn,e){this._allStyles[V.ContainerStyle.Default].parse(e[V.ContainerStyle.Default]),this._allStyles[V.ContainerStyle.Emphasis].parse(e[V.ContainerStyle.Emphasis]),this._allStyles[V.ContainerStyle.Accent].parse(e[V.ContainerStyle.Accent]),this._allStyles[V.ContainerStyle.Good].parse(e[V.ContainerStyle.Good]),this._allStyles[V.ContainerStyle.Attention].parse(e[V.ContainerStyle.Attention]),this._allStyles[V.ContainerStyle.Warning].parse(e[V.ContainerStyle.Warning]);var n=e.customStyles;if(n&&Array.isArray(n))for(var r=0,i=n;r<i.length;r++){var o=i[r];if(o){var a=o.name;a&&typeof a=="string"&&(this._allStyles.hasOwnProperty(a)?this._allStyles[a].parse(o.style):this._allStyles[a]=new _o(o.style))}}}}return t.prototype.toJSON=function(){var e=this,n=[];Object.keys(this._allStyles).forEach(function(i){e._allStyles[i].isBuiltIn||n.push({name:i,style:e._allStyles[i]})});var r={default:this.default,emphasis:this.emphasis};return n.length>0&&(r.customStyles=n),r},t.prototype.getStyleByName=function(e,n){return e&&this._allStyles.hasOwnProperty(e)?this._allStyles[e]:n||this._allStyles[V.ContainerStyle.Default]},Object.defineProperty(t.prototype,"default",{get:function(){return this._allStyles[V.ContainerStyle.Default]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"emphasis",{get:function(){return this._allStyles[V.ContainerStyle.Emphasis]},enumerable:!1,configurable:!0}),t}();X.ContainerStyleSet=ko;var pr=function(){function t(e){this.fontFamily="Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif",this.fontSizes={small:12,default:14,medium:17,large:21,extraLarge:26},this.fontWeights={lighter:200,default:400,bolder:600},e&&(this.fontFamily=e)}return t.prototype.parse=function(e){this.fontFamily=e.fontFamily||this.fontFamily,this.fontSizes={small:e.fontSizes&&e.fontSizes.small||this.fontSizes.small,default:e.fontSizes&&e.fontSizes.default||this.fontSizes.default,medium:e.fontSizes&&e.fontSizes.medium||this.fontSizes.medium,large:e.fontSizes&&e.fontSizes.large||this.fontSizes.large,extraLarge:e.fontSizes&&e.fontSizes.extraLarge||this.fontSizes.extraLarge},this.fontWeights={lighter:e.fontWeights&&e.fontWeights.lighter||this.fontWeights.lighter,default:e.fontWeights&&e.fontWeights.default||this.fontWeights.default,bolder:e.fontWeights&&e.fontWeights.bolder||this.fontWeights.bolder}},t.monospace=new t("'Courier New', Courier, monospace"),t}();X.FontTypeDefinition=pr;var nc=function(){function t(e){this.default=new pr,this.monospace=new pr("'Courier New', Courier, monospace"),e&&(this.default.parse(e.default),this.monospace.parse(e.monospace))}return t.prototype.getStyleDefinition=function(e){switch(e){case V.FontType.Monospace:return this.monospace;case V.FontType.Default:default:return this.default}},t}();X.FontTypeSet=nc;var To=function(){function t(e){this.maxCarouselPages=10,this.minAutoplayDelay=5e3,e&&(this.maxCarouselPages=e.maxCarouselPages!=null?e.maxCarouselPages:this.maxCarouselPages,this.minAutoplayDelay=e.minAutoplayDelay!=null?e.minAutoplayDelay:this.minAutoplayDelay)}return t.prototype.toJSON=function(){return{maxCarouselPages:this.maxCarouselPages,minAutoplayDelay:this.minAutoplayDelay}},t}();X.CarouselConfig=To;var rc=function(){function t(e){this.hostCapabilities=new xy.HostCapabilities,this.choiceSetInputValueSeparator=",",this.supportsInteractivity=!0,this.spacing={small:3,default:8,medium:20,large:30,extraLarge:40,padding:15},this.separator={lineThickness:1,lineColor:"#EEEEEE"},this.imageSizes={small:40,medium:80,large:160},this.containerStyles=new ko,this.inputs=new Ao,this.actions=new Io,this.adaptiveCard=new mo,this.imageSet=new yo,this.media=new Zl,this.factSet=new So,this.table=new ec,this.textStyles=new bo,this.textBlock=new vo,this.carousel=new To,this.alwaysAllowBleed=!1,e&&((typeof e=="string"||e instanceof String)&&(e=JSON.parse(e)),this.choiceSetInputValueSeparator=e&&typeof e.choiceSetInputValueSeparator=="string"?e.choiceSetInputValueSeparator:this.choiceSetInputValueSeparator,this.supportsInteractivity=e&&typeof e.supportsInteractivity=="boolean"?e.supportsInteractivity:this.supportsInteractivity,this._legacyFontType=new pr,this._legacyFontType.parse(e),e.fontTypes&&(this.fontTypes=new nc(e.fontTypes)),e.lineHeights&&(this.lineHeights={small:e.lineHeights.small,default:e.lineHeights.default,medium:e.lineHeights.medium,large:e.lineHeights.large,extraLarge:e.lineHeights.extraLarge}),this.imageSizes={small:e.imageSizes&&e.imageSizes.small||this.imageSizes.small,medium:e.imageSizes&&e.imageSizes.medium||this.imageSizes.medium,large:e.imageSizes&&e.imageSizes.large||this.imageSizes.large},this.containerStyles=new ko(e.containerStyles),this.spacing={small:e.spacing&&e.spacing.small||this.spacing.small,default:e.spacing&&e.spacing.default||this.spacing.default,medium:e.spacing&&e.spacing.medium||this.spacing.medium,large:e.spacing&&e.spacing.large||this.spacing.large,extraLarge:e.spacing&&e.spacing.extraLarge||this.spacing.extraLarge,padding:e.spacing&&e.spacing.padding||this.spacing.padding},this.separator={lineThickness:e.separator&&e.separator.lineThickness||this.separator.lineThickness,lineColor:e.separator&&e.separator.lineColor||this.separator.lineColor},this.inputs=new Ao(e.inputs||this.inputs),this.actions=new Io(e.actions||this.actions),this.adaptiveCard=new mo(e.adaptiveCard||this.adaptiveCard),this.imageSet=new yo(e.imageSet),this.factSet=new So(e.factSet),this.textStyles=new bo(e.textStyles),this.textBlock=new vo(e.textBlock),this.carousel=new To(e.carousel))}return t.prototype.getFontTypeDefinition=function(e){return this.fontTypes?this.fontTypes.getStyleDefinition(e):e===V.FontType.Monospace?pr.monospace:this._legacyFontType},t.prototype.getEffectiveSpacing=function(e){switch(e){case V.Spacing.Small:return this.spacing.small;case V.Spacing.Default:return this.spacing.default;case V.Spacing.Medium:return this.spacing.medium;case V.Spacing.Large:return this.spacing.large;case V.Spacing.ExtraLarge:return this.spacing.extraLarge;case V.Spacing.Padding:return this.spacing.padding;default:return 0}},t.prototype.paddingDefinitionToSpacingDefinition=function(e){return new Kl.SpacingDefinition(this.getEffectiveSpacing(e.top),this.getEffectiveSpacing(e.right),this.getEffectiveSpacing(e.bottom),this.getEffectiveSpacing(e.left))},t.prototype.makeCssClassNames=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];for(var r=[],i=0,o=e;i<o.length;i++){var a=o[i];r.push((this.cssClassNamePrefix?this.cssClassNamePrefix+"-":"")+a)}return r},t.prototype.makeCssClassName=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];var r=this.makeCssClassNames.apply(this,e).join(" ");return r||""},Object.defineProperty(t.prototype,"fontFamily",{get:function(){return this._legacyFontType.fontFamily},set:function(e){this._legacyFontType.fontFamily=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontSizes",{get:function(){return this._legacyFontType.fontSizes},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fontWeights",{get:function(){return this._legacyFontType.fontWeights},enumerable:!1,configurable:!0}),t}();X.HostConfig=rc;X.defaultHostConfig=new rc({supportsInteractivity:!0,spacing:{small:10,default:20,medium:30,large:40,extraLarge:50,padding:20},separator:{lineThickness:1,lineColor:"#EEEEEE"},fontTypes:{default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},imageSizes:{small:40,medium:80,large:160},containerStyles:{default:{backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},emphasis:{backgroundColor:"#08000000",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},accent:{backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},good:{backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},attention:{backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},warning:{backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}}},inputs:{label:{requiredInputs:{weight:V.TextWeight.Bolder,suffix:" *",suffixColor:V.TextColor.Attention},optionalInputs:{weight:V.TextWeight.Bolder}},errorMessage:{color:V.TextColor.Attention,weight:V.TextWeight.Bolder}},actions:{maxActions:5,spacing:V.Spacing.Default,buttonSpacing:10,showCard:{actionMode:V.ShowCardActionMode.Inline,inlineTopMargin:16},actionsOrientation:V.Orientation.Horizontal,actionAlignment:V.ActionAlignment.Left},adaptiveCard:{allowCustomStyle:!1},imageSet:{imageSize:V.Size.Medium,maxImageHeight:100},factSet:{title:{color:V.TextColor.Default,size:V.TextSize.Default,isSubtle:!1,weight:V.TextWeight.Bolder,wrap:!0,maxWidth:150},value:{color:V.TextColor.Default,size:V.TextSize.Default,isSubtle:!1,weight:V.TextWeight.Default,wrap:!0},spacing:10},carousel:{maxCarouselPages:10,minAutoplayDuration:5e3}})});var mr=L(Hn=>{"use strict";Object.defineProperty(Hn,"__esModule",{value:!0});Hn.GlobalRegistry=Hn.CardObjectRegistry=void 0;var Ay=Kt(),gr=function(){function t(){this._items={}}return t.prototype.findByName=function(e){return this._items.hasOwnProperty(e)?this._items[e]:void 0},t.prototype.clear=function(){this._items={}},t.prototype.copyTo=function(e){for(var n=Object.keys(this._items),r=0,i=n;r<i.length;r++){var o=i[r],a=this._items[o];e.register(a.typeName,a.objectType,a.schemaVersion)}},t.prototype.register=function(e,n,r){r===void 0&&(r=Ay.Versions.v1_0);var i=this.findByName(e);i!==void 0?i.objectType=n:i={typeName:e,objectType:n,schemaVersion:r},this._items[e]=i},t.prototype.unregister=function(e){delete this._items[e]},t.prototype.createInstance=function(e,n){var r=this.findByName(e);return r&&r.schemaVersion.compareTo(n)<=0?new r.objectType:void 0},t.prototype.getItemCount=function(){return Object.keys(this._items).length},t.prototype.getItemAt=function(e){var n=this;return Object.keys(this._items).map(function(r){return n._items[r]})[e]},t}();Hn.CardObjectRegistry=gr;var Ey=function(){function t(){}return t.populateWithDefaultElements=function(e){e.clear(),t.defaultElements.copyTo(e)},t.populateWithDefaultActions=function(e){e.clear(),t.defaultActions.copyTo(e)},Object.defineProperty(t,"elements",{get:function(){return t._elements||(t._elements=new gr,t.populateWithDefaultElements(t._elements)),t._elements},enumerable:!1,configurable:!0}),Object.defineProperty(t,"actions",{get:function(){return t._actions||(t._actions=new gr,t.populateWithDefaultActions(t._actions)),t._actions},enumerable:!1,configurable:!0}),t.reset=function(){t._elements=void 0,t._actions=void 0},t.defaultElements=new gr,t.defaultActions=new gr,t}();Hn.GlobalRegistry=Ey});var Po=L(Rt=>{"use strict";var Sy=Rt&&Rt.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),ic=Rt&&Rt.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};Object.defineProperty(Rt,"__esModule",{value:!0});Rt.CardObject=Rt.ValidationResults=void 0;var ac=ht(),wy=on(),Iy=zt(),oc=Qr(),Zt=Kt(),sc=function(){function t(){this.allIds={},this.validationEvents=[]}return t.prototype.addFailure=function(e,n,r){this.validationEvents.push({phase:ac.ValidationPhase.Validation,source:e,event:n,message:r})},t}();Rt.ValidationResults=sc;var ky=function(t){Sy(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._shouldFallback=!1,n}return e.prototype.getSchemaKey=function(){return this.getJsonTypeName()},Object.defineProperty(e.prototype,"requires",{get:function(){return this.getValue(e.requiresProperty)},enumerable:!1,configurable:!0}),e.prototype.contains=function(n){return this._renderedElement?this._renderedElement.contains(n):!1},e.prototype.preProcessPropertyValue=function(n,r){var i=r===void 0?this.getValue(n):r;if(Iy.GlobalSettings.allowPreProcessingPropertyValues){for(var o=this;o&&!o.onPreProcessPropertyValue;)o=o.parent;if(o&&o.onPreProcessPropertyValue)return o.onPreProcessPropertyValue(this,n,i)}return i},e.prototype.setParent=function(n){this._parent=n},e.prototype.setShouldFallback=function(n){this._shouldFallback=n},e.prototype.shouldFallback=function(){return this._shouldFallback||!this.requires.areAllMet(this.hostConfig.hostCapabilities)},e.prototype.getRootObject=function(){for(var n=this;n.parent;)n=n.parent;return n},e.prototype.internalValidateProperties=function(n){this.id&&(n.allIds.hasOwnProperty(this.id)?(n.allIds[this.id]===1&&n.addFailure(this,ac.ValidationEvent.DuplicateId,wy.Strings.errors.duplicateId(this.id)),n.allIds[this.id]+=1):n.allIds[this.id]=1)},e.prototype.validateProperties=function(){var n=new sc;return this.internalValidateProperties(n),n},e.prototype.findDOMNodeOwner=function(n){return this.contains(n)?this:void 0},e.prototype.releaseDOMResources=function(){},Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"renderedElement",{get:function(){return this._renderedElement},enumerable:!1,configurable:!0}),e.typeNameProperty=new Zt.StringProperty(Zt.Versions.v1_0,"type",void 0,void 0,void 0,function(n){return n.getJsonTypeName()}),e.idProperty=new Zt.StringProperty(Zt.Versions.v1_0,"id"),e.requiresProperty=new Zt.SerializableObjectProperty(Zt.Versions.v1_2,"requires",oc.HostCapabilities,!1,new oc.HostCapabilities),ic([(0,Zt.property)(e.idProperty)],e.prototype,"id",void 0),ic([(0,Zt.property)(e.requiresProperty)],e.prototype,"requires",null),e}(Zt.SerializableObject);Rt.CardObject=ky});var uc=L(qn=>{"use strict";var lc=qn&&qn.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(qn,"__esModule",{value:!0});qn.formatText=void 0;var cc=function(){function t(e){this._regularExpression=e}return t.prototype.format=function(e,n){var r;if(n){for(var i=n;(r=this._regularExpression.exec(n))!=null;)i=i.replace(r[0],this.internalFormat(e,r));return i}else return n},t}(),Ty=function(t){lc(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.internalFormat=function(n,r){var i=new Date(Date.parse(r[1])),o=r[2]!==void 0?r[2].toLowerCase():"compact";return o!=="compact"?i.toLocaleDateString(n,{day:"numeric",weekday:o,month:o,year:"numeric"}):i.toLocaleDateString()},e}(cc),_y=function(t){lc(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.internalFormat=function(n,r){var i=new Date(Date.parse(r[1]));return i.toLocaleTimeString(n,{hour:"numeric",minute:"2-digit"})},e}(cc);function Py(t,e){for(var n=[new Ty(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),new _y(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)],r=e,i=0,o=n;i<o.length;i++){var a=o[i];r=a.format(t,r)}return r}qn.formatText=Py});var ei=L(Zr=>{"use strict";Object.defineProperty(Zr,"__esModule",{value:!0});Zr.Constants=void 0;var Fy=function(){function t(){}return t.keys={tab:"Tab",enter:"Enter",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",delete:"Delete"},t}();Zr.Constants=Fy});var dc=L(ti=>{"use strict";Object.defineProperty(ti,"__esModule",{value:!0});ti.MenuItem=void 0;var Dy=hr(),By=ei(),My=function(){function t(e,n){this._isEnabled=!0,this.key=e,this._value=n}return t.prototype.click=function(){this.isEnabled&&this.onClick&&this.onClick(this)},t.prototype.updateCssClasses=function(){if(this._element){var e=this._hostConfig?this._hostConfig:Dy.defaultHostConfig;this._element.className=e.makeCssClassName("ac-ctrl"),this._element.classList.add(e.makeCssClassName(this.isEnabled?"ac-ctrl-dropdown-item":"ac-ctrl-dropdown-item-disabled")),this.isEnabled||this._element.classList.add(e.makeCssClassName("ac-disabled"))}},t.prototype.toString=function(){return this.value},t.prototype.render=function(e){var n=this;return this._hostConfig=e,this._element||(this._element=document.createElement("span"),this._element.innerText=this.value,this._element.setAttribute("role","menuitem"),this.isEnabled||this._element.setAttribute("aria-disabled","true"),this._element.setAttribute("aria-current","false"),this._element.onmouseup=function(r){n.click()},this._element.onkeydown=function(r){r.key===By.Constants.keys.enter&&(r.cancelBubble=!0,n.click())},this.updateCssClasses()),this._element},Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(e){this._value=e,this._element&&(this._element.innerText=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(e){this._isEnabled!==e&&(this._isEnabled=e,this.updateCssClasses())},enumerable:!1,configurable:!0}),t}();ti.MenuItem=My});var fc=L(ni=>{"use strict";Object.defineProperty(ni,"__esModule",{value:!0});ni.Collection=void 0;var zy=function(){function t(){this._items=[]}return t.prototype.get=function(e){return this._items[e]},t.prototype.add=function(e){this._items.push(e),this.onItemAdded&&this.onItemAdded(e)},t.prototype.remove=function(e){var n=this._items.indexOf(e);n>=0&&(this._items=this._items.splice(n,1),this.onItemRemoved&&this.onItemRemoved(e))},t.prototype.indexOf=function(e){return this._items.indexOf(e)},Object.defineProperty(t.prototype,"length",{get:function(){return this._items.length},enumerable:!1,configurable:!0}),t}();ni.Collection=zy});var pc=L(ri=>{"use strict";Object.defineProperty(ri,"__esModule",{value:!0});ri.PopupControl=void 0;var Oy=ei(),Lt=Xt(),Ry=hr(),Ly=function(){function t(){this._isOpen=!1}return t.prototype.keyDown=function(e){switch(e.key){case Oy.Constants.keys.escape:this.closePopup(!0);break}},t.prototype.render=function(e){var n=this,r=document.createElement("div");return r.tabIndex=0,r.className=this.hostConfig.makeCssClassName("ac-ctrl","ac-ctrl-popup-container"),r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.onkeydown=function(i){return n.keyDown(i),!i.cancelBubble},r.appendChild(this.renderContent()),r},t.prototype.focus=function(){this._popupElement&&this._popupElement.firstElementChild.focus()},t.prototype.popup=function(e){var n,r,i,o,a,l=this;if(!this._isOpen){this._overlayElement=document.createElement("div"),this._overlayElement.className=this.hostConfig.makeCssClassName("ac-ctrl-overlay"),this._overlayElement.tabIndex=0,this._overlayElement.style.width=document.documentElement.scrollWidth+"px",this._overlayElement.style.height=document.documentElement.scrollHeight+"px",this._overlayElement.onfocus=function(C){l.closePopup(!0)},document.body.appendChild(this._overlayElement);var s=e.getBoundingClientRect();this._popupElement=this.render(s),(n=this._popupElement.classList).remove.apply(n,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideLeftToRight","ac-ctrl-slideRightToLeft","ac-ctrl-slideTopToBottom","ac-ctrl-slideRightToLeft")),window.addEventListener("resize",function(C){l.closePopup(!0)});var c=e.getAttribute("aria-label");c&&this._popupElement.setAttribute("aria-label",c),this._overlayElement.appendChild(this._popupElement);var u=this._popupElement.getBoundingClientRect(),d=window.innerHeight-s.bottom,f=s.top,p=window.innerWidth-s.right,y=s.left,h=s.left+Lt.getScrollX(),m;if(f<u.height&&d<u.height){var v=Math.min(u.height,window.innerHeight);if(this._popupElement.style.maxHeight=v+"px",v<u.height?m=Lt.getScrollY():m=Lt.getScrollY()+s.top+(s.height-v)/2,y<u.width&&p<u.width){var b=Math.min(u.width,window.innerWidth);this._popupElement.style.maxWidth=b+"px",b<u.width?h=Lt.getScrollX():h=Lt.getScrollX()+s.left+(s.width-b)/2}else p>=u.width?(h=Lt.getScrollX()+s.right,(r=this._popupElement.classList).add.apply(r,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideLeftToRight"))):(h=Lt.getScrollX()+s.left-u.width,(i=this._popupElement.classList).add.apply(i,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideRightToLeft")))}else d>=u.height?(m=Lt.getScrollY()+s.bottom,(o=this._popupElement.classList).add.apply(o,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideTopToBottom"))):(m=Lt.getScrollY()+s.top-u.height,(a=this._popupElement.classList).add.apply(a,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideBottomToTop"))),p<u.width&&(h=Lt.getScrollX()+s.right-u.width);this._popupElement.style.left=h+"px",this._popupElement.style.top=m+"px",this._popupElement.focus(),this._isOpen=!0}},t.prototype.closePopup=function(e){this._isOpen&&(document.body.removeChild(this._overlayElement),this._isOpen=!1,this.onClose&&this.onClose(this,e))},Object.defineProperty(t.prototype,"hostConfig",{get:function(){return this._hostConfig?this._hostConfig:Ry.defaultHostConfig},set:function(e){this._hostConfig=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isOpen",{get:function(){return this._isOpen},enumerable:!1,configurable:!0}),t}();ri.PopupControl=Ly});var hc=L(Gn=>{"use strict";var Vy=Gn&&Gn.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Gn,"__esModule",{value:!0});Gn.PopupMenu=void 0;var Fo=ei(),Ny=fc(),Hy=pc(),qy=function(t){Vy(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._items=new Ny.Collection,n._renderedItems=[],n._selectedIndex=-1,n}return e.prototype.renderContent=function(){var n=document.createElement("div");n.className=this.hostConfig.makeCssClassName("ac-ctrl ac-popup"),n.setAttribute("role","listbox");for(var r=0;r<this._items.length;r++){var i=this._items.get(r).render(this.hostConfig);i.tabIndex=0,n.appendChild(i),r===this.selectedIndex&&i.focus(),this._renderedItems.push(i)}return n},e.prototype.keyDown=function(n){t.prototype.keyDown.call(this,n);var r=this._selectedIndex;switch(n.key){case Fo.Constants.keys.tab:this.closePopup(!0);break;case Fo.Constants.keys.up:r<=0?r=this._renderedItems.length-1:(r--,r<0&&(r=this._renderedItems.length-1)),this.selectedIndex=r,n.cancelBubble=!0;break;case Fo.Constants.keys.down:r<0?r=0:(r++,r>=this._renderedItems.length&&(r=0)),this.selectedIndex=r,n.cancelBubble=!0;break}},Object.defineProperty(e.prototype,"items",{get:function(){return this._items},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(n){n>=0&&n<this._renderedItems.length&&(this._renderedItems[n].focus(),this._selectedIndex=n)},enumerable:!1,configurable:!0}),e}(Hy.PopupControl);Gn.PopupMenu=qy});var mc=L(cn=>{"use strict";var Gy=cn&&cn.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),gc=cn&&cn.__exportStar||function(t,e){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&Gy(e,t,n)};Object.defineProperty(cn,"__esModule",{value:!0});gc(dc(),cn);gc(hc(),cn)});var xr=L(M=>{"use strict";var Q=M&&M.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),B=M&&M.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},br=M&&M.__awaiter||function(t,e,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(u){try{c(r.next(u))}catch(d){a(d)}}function s(u){try{c(r.throw(u))}catch(d){a(d)}}function c(u){u.done?o(u.value):i(u.value).then(l,s)}c((r=r.apply(t,e||[])).next())})},vr=M&&M.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(u){return s([c,u])}}function s(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(M,"__esModule",{value:!0});M.ContainerWithActions=M.ColumnSet=M.Column=M.Container=M.BackgroundImage=M.ContainerBase=M.StylableCardElementContainer=M.ContainerStyleProperty=M.ActionSet=M.ShowCardAction=M.HttpAction=M.HttpHeader=M.ToggleVisibilityAction=M.OpenUrlAction=M.ExecuteAction=M.SubmitAction=M.SubmitActionBase=M.Action=M.TimeInput=M.TimeProperty=M.DateInput=M.NumberInput=M.ChoiceSetInput=M.Choice=M.ToggleInput=M.TextInput=M.Input=M.Media=M.YouTubePlayer=M.DailymotionPlayer=M.VimeoPlayer=M.IFrameMediaMediaPlayer=M.CustomMediaPlayer=M.HTML5MediaPlayer=M.MediaPlayer=M.MediaSource=M.CaptionSource=M.ContentSource=M.ImageSet=M.CardElementContainer=M.Image=M.FactSet=M.Fact=M.RichTextBlock=M.TextRun=M.TextBlock=M.BaseTextBlock=M.ActionProperty=M.CardElement=M.renderSeparation=void 0;M.SerializationContext=M.AdaptiveCard=M.Authentication=M.TokenExchangeResource=M.AuthCardButton=M.RefreshDefinition=M.RefreshActionProperty=void 0;var x=ht(),ne=zt(),Z=Xt(),Ro=hr(),Ac=uc(),Ec=Po(),g=Kt(),Ce=mr(),K=on(),yc=mc();function ai(t){var e,n,r=typeof window>"u"?"":(n=(e=window.trustedTypes)===null||e===void 0?void 0:e.emptyHTML)!==null&&n!==void 0?n:"";t.innerHTML=r}function Lo(t,e,n){if(e.spacing>0||e.lineThickness&&e.lineThickness>0){var r=document.createElement("div");r.className=t.makeCssClassName("ac-"+(n===x.Orientation.Horizontal?"horizontal":"vertical")+"-separator"),r.setAttribute("aria-hidden","true");var i=e.lineColor?Z.stringToCssColor(e.lineColor):"";return n===x.Orientation.Horizontal?e.lineThickness?(r.style.paddingTop=e.spacing/2+"px",r.style.marginBottom=e.spacing/2+"px",r.style.borderBottom=e.lineThickness+"px solid "+i):r.style.height=e.spacing+"px":e.lineThickness?(r.style.paddingLeft=e.spacing/2+"px",r.style.marginRight=e.spacing/2+"px",r.style.borderRight=e.lineThickness+"px solid "+i):r.style.width=e.spacing+"px",r.style.overflow="hidden",r.style.flex="0 0 auto",r}else return}M.renderSeparation=Lo;var Ve=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._truncatedDueToOverflow=!1,n}return Object.defineProperty(e.prototype,"lang",{get:function(){var n=this.getValue(e.langProperty);return n||(this.parent?this.parent.lang:void 0)},set:function(n){this.setValue(e.langProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isVisible",{get:function(){return this.getValue(e.isVisibleProperty)},set:function(n){ne.GlobalSettings.useAdvancedCardBottomTruncation&&!n&&this.undoOverflowTruncation(),this.isVisible!==n&&(this.setValue(e.isVisibleProperty,n),this.updateRenderedElementVisibility(),this._renderedElement&&Do(this)),this._renderedElement&&this._renderedElement.setAttribute("aria-expanded",n.toString())},enumerable:!1,configurable:!0}),e.prototype.internalRenderSeparator=function(){var n=Lo(this.hostConfig,{spacing:this.hostConfig.getEffectiveSpacing(this.spacing),lineThickness:this.separator?this.hostConfig.separator.lineThickness:void 0,lineColor:this.separator?this.hostConfig.separator.lineColor:void 0},this.separatorOrientation);if(ne.GlobalSettings.alwaysBleedSeparators&&n&&this.separatorOrientation===x.Orientation.Horizontal){var r=this.getParentContainer();if(r&&r.getEffectivePadding()){var i=this.hostConfig.paddingDefinitionToSpacingDefinition(r.getEffectivePadding());n.style.marginLeft="-"+i.left+"px",n.style.marginRight="-"+i.right+"px"}}return n},e.prototype.updateRenderedElementVisibility=function(){var n=this.isDesignMode()||this.isVisible?this._defaultRenderedElementDisplayMode:"none";this._renderedElement&&(n?this._renderedElement.style.display=n:this._renderedElement.style.removeProperty("display")),this._separatorElement&&(this.parent&&this.parent.isFirstElement(this)?this._separatorElement.style.display="none":n?this._separatorElement.style.display=n:this._separatorElement.style.removeProperty("display"))},e.prototype.hideElementDueToOverflow=function(){this._renderedElement&&this.isVisible&&(this._renderedElement.style.visibility="hidden",this.isVisible=!1,Do(this,!1))},e.prototype.showElementHiddenDueToOverflow=function(){this._renderedElement&&!this.isVisible&&(this._renderedElement.style.removeProperty("visibility"),this.isVisible=!0,Do(this,!1))},e.prototype.handleOverflow=function(n){if(this.isVisible||this.isHiddenDueToOverflow()){var r=this.truncateOverflow(n);this._truncatedDueToOverflow=r||this._truncatedDueToOverflow,r?r&&!this.isVisible&&this.showElementHiddenDueToOverflow():this.hideElementDueToOverflow()}},e.prototype.resetOverflow=function(){var n=!1;return this._truncatedDueToOverflow&&(this.undoOverflowTruncation(),this._truncatedDueToOverflow=!1,n=!0),this.isHiddenDueToOverflow()&&this.showElementHiddenDueToOverflow(),n},e.prototype.getDefaultSerializationContext=function(){return new Un},e.prototype.createPlaceholderElement=function(){var n=this.getEffectiveStyleDefinition(),r=Z.stringToCssColor(n.foregroundColors.default.subtle),i=document.createElement("div");return i.style.border="1px dashed "+r,i.style.padding="4px",i.style.minHeight="32px",i.style.fontSize="10px",r&&(i.style.color=r),i.innerText="Empty "+this.getJsonTypeName(),i},e.prototype.adjustRenderedElementSize=function(n){this.height==="auto"?n.style.flex="0 0 auto":n.style.flex="1 1 auto"},e.prototype.isDisplayed=function(){return this._renderedElement!==void 0&&this.isVisible&&this._renderedElement.offsetHeight>0},e.prototype.overrideInternalRender=function(){return this.internalRender()},e.prototype.applyPadding=function(){if(this.separatorElement&&this.separatorOrientation===x.Orientation.Horizontal)if(ne.GlobalSettings.alwaysBleedSeparators&&!this.isBleeding()){var n=new ne.PaddingDefinition;this.getImmediateSurroundingPadding(n);var r=this.hostConfig.paddingDefinitionToSpacingDefinition(n);this.separatorElement.style.marginLeft="-"+r.left+"px",this.separatorElement.style.marginRight="-"+r.right+"px"}else this.separatorElement.style.marginRight="0",this.separatorElement.style.marginLeft="0"},e.prototype.truncateOverflow=function(n){return!1},e.prototype.undoOverflowTruncation=function(){},e.prototype.getDefaultPadding=function(){return new ne.PaddingDefinition},e.prototype.getHasBackground=function(n){return n===void 0&&(n=!1),!1},e.prototype.getHasBorder=function(){return!1},e.prototype.getPadding=function(){return this._padding},e.prototype.setPadding=function(n){this._padding=n},e.prototype.shouldSerialize=function(n){return n.elementRegistry.findByName(this.getJsonTypeName())!==void 0},Object.defineProperty(e.prototype,"useDefaultSizing",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"separatorOrientation",{get:function(){return x.Orientation.Horizontal},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"defaultStyle",{get:function(){return x.ContainerStyle.Default},enumerable:!1,configurable:!0}),e.prototype.parse=function(n,r){t.prototype.parse.call(this,n,r||new Un)},e.prototype.asString=function(){return""},e.prototype.isBleeding=function(){return!1},e.prototype.getEffectiveStyle=function(){return this.parent?this.parent.getEffectiveStyle():this.defaultStyle},e.prototype.getEffectiveStyleDefinition=function(){return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle())},e.prototype.getEffectiveTextStyleDefinition=function(){return this.parent?this.parent.getEffectiveTextStyleDefinition():this.hostConfig.textStyles.default},e.prototype.getForbiddenActionTypes=function(){return[]},e.prototype.getImmediateSurroundingPadding=function(n,r,i,o,a){if(r===void 0&&(r=!0),i===void 0&&(i=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),this.parent){var l=r&&this.parent.isTopElement(this),s=i&&this.parent.isRightMostElement(this),c=o&&this.parent.isBottomElement(this),u=a&&this.parent.isLeftMostElement(this),d=this.parent.getEffectivePadding();d&&(l&&d.top!==x.Spacing.None&&(n.top=d.top,l=!1),s&&d.right!==x.Spacing.None&&(n.right=d.right,s=!1),c&&d.bottom!==x.Spacing.None&&(n.bottom=d.bottom,c=!1),u&&d.left!==x.Spacing.None&&(n.left=d.left,u=!1)),(l||s||c||u)&&this.parent.getImmediateSurroundingPadding(n,l,s,c,u)}},e.prototype.getActionCount=function(){return 0},e.prototype.getActionAt=function(n){throw new Error(K.Strings.errors.indexOutOfRange(n))},e.prototype.indexOfAction=function(n){for(var r=0;r<this.getActionCount();r++)if(this.getActionAt(r)===n)return r;return-1},e.prototype.remove=function(){return this.parent&&this.parent instanceof li?this.parent.removeItem(this):!1},e.prototype.render=function(){return this._renderedElement=this.overrideInternalRender(),this._separatorElement=this.internalRenderSeparator(),this._renderedElement?(this.id&&(this._renderedElement.id=this.id),this.customCssSelector&&this._renderedElement.classList.add(this.customCssSelector),this._renderedElement.style.boxSizing="border-box",this._defaultRenderedElementDisplayMode=this._renderedElement.style.display?this._renderedElement.style.display:void 0,this.adjustRenderedElementSize(this._renderedElement),this.updateLayout(!1)):this.isDesignMode()&&(this._renderedElement=this.createPlaceholderElement()),this.getRootElement().updateActionsEnabledState(),this._renderedElement},e.prototype.updateLayout=function(n){n===void 0&&(n=!0),this.updateRenderedElementVisibility(),this.applyPadding()},e.prototype.updateActionsEnabledState=function(){for(var n=this.getRootElement().getAllActions(),r=0,i=n;r<i.length;r++){var o=i[r];o.updateEnabledState()}},e.prototype.indexOf=function(n){return-1},e.prototype.isDesignMode=function(){var n=this.getRootElement();return n instanceof We&&n.designMode},e.prototype.isFirstElement=function(n){return!0},e.prototype.isLastElement=function(n){return!0},e.prototype.isAtTheVeryLeft=function(){return this.parent?this.parent.isLeftMostElement(this)&&this.parent.isAtTheVeryLeft():!0},e.prototype.isAtTheVeryRight=function(){return this.parent?this.parent.isRightMostElement(this)&&this.parent.isAtTheVeryRight():!0},e.prototype.isAtTheVeryTop=function(){return this.parent?this.parent.isFirstElement(this)&&this.parent.isAtTheVeryTop():!0},e.prototype.isAtTheVeryBottom=function(){return this.parent?this.parent.isLastElement(this)&&this.parent.isAtTheVeryBottom():!0},e.prototype.isBleedingAtTop=function(){return!1},e.prototype.isBleedingAtBottom=function(){return!1},e.prototype.isLeftMostElement=function(n){return!0},e.prototype.isRightMostElement=function(n){return!0},e.prototype.isTopElement=function(n){return this.isFirstElement(n)},e.prototype.isBottomElement=function(n){return this.isLastElement(n)},e.prototype.isHiddenDueToOverflow=function(){return this._renderedElement!==void 0&&this._renderedElement.style.visibility==="hidden"},e.prototype.getRootElement=function(){return this.getRootObject()},e.prototype.getParentContainer=function(){for(var n=this.parent;n;){if(n instanceof bn)return n;n=n.parent}},e.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[]},e.prototype.getAllActions=function(){for(var n=[],r=0;r<this.getActionCount();r++){var i=this.getActionAt(r);i&&n.push(i)}return n},e.prototype.getResourceInformation=function(){return[]},e.prototype.getElementById=function(n){return this.id===n?this:void 0},e.prototype.getActionById=function(n){},e.prototype.getEffectivePadding=function(){var n=this.getPadding();return n||this.getDefaultPadding()},e.prototype.getEffectiveHorizontalAlignment=function(){return this.horizontalAlignment!==void 0?this.horizontalAlignment:this.parent?this.parent.getEffectiveHorizontalAlignment():x.HorizontalAlignment.Left},Object.defineProperty(e.prototype,"hostConfig",{get:function(){return this._hostConfig?this._hostConfig:this.parent?this.parent.hostConfig:Ro.defaultHostConfig},set:function(n){this._hostConfig=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"index",{get:function(){return this.parent?this.parent.indexOf(this):0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isInteractive",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isInline",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasVisibleSeparator",{get:function(){return this.parent&&this.separatorElement?!this.parent.isFirstElement(this)&&(this.isVisible||this.isDesignMode()):!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"separatorElement",{get:function(){return this._separatorElement},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),e.langProperty=new g.StringProperty(g.Versions.v1_1,"lang",!0,/^[a-z]{2,3}$/gi),e.isVisibleProperty=new g.BoolProperty(g.Versions.v1_2,"isVisible",!0),e.separatorProperty=new g.BoolProperty(g.Versions.v1_0,"separator",!1),e.heightProperty=new g.ValueSetProperty(g.Versions.v1_1,"height",[{value:"auto"},{value:"stretch"}],"auto"),e.horizontalAlignmentProperty=new g.EnumProperty(g.Versions.v1_0,"horizontalAlignment",x.HorizontalAlignment),e.spacingProperty=new g.EnumProperty(g.Versions.v1_0,"spacing",x.Spacing,x.Spacing.Default),B([(0,g.property)(e.horizontalAlignmentProperty)],e.prototype,"horizontalAlignment",void 0),B([(0,g.property)(e.spacingProperty)],e.prototype,"spacing",void 0),B([(0,g.property)(e.separatorProperty)],e.prototype,"separator",void 0),B([(0,g.property)(e.heightProperty)],e.prototype,"height",void 0),B([(0,g.property)(e.langProperty)],e.prototype,"lang",null),B([(0,g.property)(e.isVisibleProperty)],e.prototype,"isVisible",null),e}(Ec.CardObject);M.CardElement=Ve;var Cr=function(t){Q(e,t);function e(n,r,i){i===void 0&&(i=[]);var o=t.call(this,n,r,void 0)||this;return o.targetVersion=n,o.name=r,o.forbiddenActionTypes=i,o}return e.prototype.parse=function(n,r,i){var o=n;return i.parseAction(o,r[this.name],this.forbiddenActionTypes,o.isDesignMode())},e.prototype.toJSON=function(n,r,i,o){o.serializeValue(r,this.name,i?i.toJSON(o):void 0,void 0,!0)},e}(g.PropertyDefinition);M.ActionProperty=Cr;var $n=function(t){Q(e,t);function e(n){var r=t.call(this)||this;return r.ariaHidden=!1,n&&(r.text=n),r}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.remove(e.selectActionProperty)},Object.defineProperty(e.prototype,"text",{get:function(){return this.getValue(e.textProperty)},set:function(n){this.setText(n)},enumerable:!1,configurable:!0}),e.prototype.getFontSize=function(n){switch(this.effectiveSize){case x.TextSize.Small:return n.fontSizes.small;case x.TextSize.Medium:return n.fontSizes.medium;case x.TextSize.Large:return n.fontSizes.large;case x.TextSize.ExtraLarge:return n.fontSizes.extraLarge;default:return n.fontSizes.default}},e.prototype.getColorDefinition=function(n,r){switch(r){case x.TextColor.Accent:return n.accent;case x.TextColor.Dark:return n.dark;case x.TextColor.Light:return n.light;case x.TextColor.Good:return n.good;case x.TextColor.Warning:return n.warning;case x.TextColor.Attention:return n.attention;default:return n.default}},e.prototype.setText=function(n){this.setValue(e.textProperty,n)},e.prototype.init=function(n){this.size=n.size,this.weight=n.weight,this.color=n.color,this.isSubtle=n.isSubtle},e.prototype.asString=function(){return this.text},e.prototype.applyStylesTo=function(n){var r=this.hostConfig.getFontTypeDefinition(this.effectiveFontType);r.fontFamily&&(n.style.fontFamily=r.fontFamily);var i;switch(this.effectiveSize){case x.TextSize.Small:i=r.fontSizes.small;break;case x.TextSize.Medium:i=r.fontSizes.medium;break;case x.TextSize.Large:i=r.fontSizes.large;break;case x.TextSize.ExtraLarge:i=r.fontSizes.extraLarge;break;default:i=r.fontSizes.default;break}n.style.fontSize=i+"px";var o=this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors,this.effectiveColor),a=Z.stringToCssColor(this.effectiveIsSubtle?o.subtle:o.default);a&&(n.style.color=a);var l;switch(this.effectiveWeight){case x.TextWeight.Lighter:l=r.fontWeights.lighter;break;case x.TextWeight.Bolder:l=r.fontWeights.bolder;break;default:l=r.fontWeights.default;break}n.style.fontWeight=l.toString(),this.ariaHidden&&n.setAttribute("aria-hidden","true")},e.prototype.getAllActions=function(){var n=t.prototype.getAllActions.call(this);return this.selectAction&&n.push(this.selectAction),n},Object.defineProperty(e.prototype,"effectiveColor",{get:function(){return this.color!==void 0?this.color:this.getEffectiveTextStyleDefinition().color},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"effectiveFontType",{get:function(){return this.fontType!==void 0?this.fontType:this.getEffectiveTextStyleDefinition().fontType},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"effectiveIsSubtle",{get:function(){return this.isSubtle!==void 0?this.isSubtle:this.getEffectiveTextStyleDefinition().isSubtle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"effectiveSize",{get:function(){return this.size!==void 0?this.size:this.getEffectiveTextStyleDefinition().size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"effectiveWeight",{get:function(){return this.weight!==void 0?this.weight:this.getEffectiveTextStyleDefinition().weight},enumerable:!1,configurable:!0}),e.textProperty=new g.StringProperty(g.Versions.v1_0,"text",!0),e.sizeProperty=new g.EnumProperty(g.Versions.v1_0,"size",x.TextSize),e.weightProperty=new g.EnumProperty(g.Versions.v1_0,"weight",x.TextWeight),e.colorProperty=new g.EnumProperty(g.Versions.v1_0,"color",x.TextColor),e.isSubtleProperty=new g.BoolProperty(g.Versions.v1_0,"isSubtle"),e.fontTypeProperty=new g.EnumProperty(g.Versions.v1_2,"fontType",x.FontType),e.selectActionProperty=new Cr(g.Versions.v1_1,"selectAction",["Action.ShowCard"]),B([(0,g.property)(e.sizeProperty)],e.prototype,"size",void 0),B([(0,g.property)(e.weightProperty)],e.prototype,"weight",void 0),B([(0,g.property)(e.colorProperty)],e.prototype,"color",void 0),B([(0,g.property)(e.fontTypeProperty)],e.prototype,"fontType",void 0),B([(0,g.property)(e.isSubtleProperty)],e.prototype,"isSubtle",void 0),B([(0,g.property)(e.textProperty)],e.prototype,"text",null),B([(0,g.property)(e.selectActionProperty)],e.prototype,"selectAction",void 0),e}(Ve);M.BaseTextBlock=$n;var mn=function(t){Q(e,t);function e(){var i=t!==null&&t.apply(this,arguments)||this;return i.wrap=!1,i._treatAsPlainText=!0,i.useMarkdown=!0,i}e.prototype.restoreOriginalContent=function(){var i,o;if(this.renderedElement!==void 0){this.maxLines&&this.maxLines>0&&(this.renderedElement.style.maxHeight=this._computedLineHeight*this.maxLines+"px");var a=(o=(i=e._ttRoundtripPolicy)===null||i===void 0?void 0:i.createHTML(this._originalInnerHtml))!==null&&o!==void 0?o:this._originalInnerHtml;this.renderedElement.innerHTML=a}},e.prototype.truncateIfSupported=function(i){if(this.renderedElement!==void 0){var o=this.renderedElement.children,a=!o.length,l=a||o.length===1&&o[0].tagName.toLowerCase()==="p"&&!o[0].children.length;if(l){var s=a?this.renderedElement:o[0];return Z.truncateText(s,i,this._computedLineHeight),!0}}return!1},e.prototype.setText=function(i){t.prototype.setText.call(this,i),this._processedText=void 0},e.prototype.internalRender=function(){var i=this,o,a;if(this._processedText=void 0,this.text){var l=this.preProcessPropertyValue($n.textProperty),s=this.hostConfig,c=void 0;if(this.forElementId){var u=document.createElement("label");u.htmlFor=this.forElementId,c=u}else c=document.createElement("div");if(c.classList.add(s.makeCssClassName("ac-textBlock")),c.style.overflow="hidden",this.applyStylesTo(c),this.style==="heading"){c.setAttribute("role","heading");var d=this.hostConfig.textBlock.headingLevel;d!==void 0&&d>0&&c.setAttribute("aria-level",d.toString())}if(this.selectAction&&s.supportsInteractivity&&(c.onclick=function(_){i.selectAction&&i.selectAction.isEffectivelyEnabled()&&(_.preventDefault(),_.cancelBubble=!0,i.selectAction.execute())},this.selectAction.setupElementForAccessibility(c),this.selectAction.isEffectivelyEnabled()&&c.classList.add(s.makeCssClassName("ac-selectable"))),!this._processedText){this._treatAsPlainText=!0;var f=Ac.formatText(this.lang,l);if(this.useMarkdown&&f){ne.GlobalSettings.allowMarkForTextHighlighting&&(f=f.replace(/<mark>/g,"===").replace(/<\/mark>/g,"/==/"));var p=We.applyMarkdown(f);if(p.didProcess&&p.outputHtml){if(this._processedText=p.outputHtml,this._treatAsPlainText=!1,ne.GlobalSettings.allowMarkForTextHighlighting&&this._processedText){var y="",h=this.getEffectiveStyleDefinition();h.highlightBackgroundColor&&(y+="background-color: "+h.highlightBackgroundColor+";"),h.highlightForegroundColor&&(y+="color: "+h.highlightForegroundColor+";"),y&&(y='style="'+y+'"'),this._processedText=this._processedText.replace(/===/g,"<mark "+y+">").replace(/\/==\//g,"</mark>")}}else this._processedText=f,this._treatAsPlainText=!0}else this._processedText=f,this._treatAsPlainText=!0}if(this._processedText||(this._processedText=""),this._treatAsPlainText)c.innerText=this._processedText;else{var m=(a=(o=e._ttMarkdownPolicy)===null||o===void 0?void 0:o.createHTML(this._processedText))!==null&&a!==void 0?a:this._processedText;c.innerHTML=m}if(c.firstElementChild instanceof HTMLElement){var v=c.firstElementChild;v.style.marginTop="0px",v.style.width="100%",this.wrap||(v.style.overflow="hidden",v.style.textOverflow="ellipsis")}c.lastElementChild instanceof HTMLElement&&(c.lastElementChild.style.marginBottom="0px");for(var b=c.getElementsByTagName("a"),C=function(_){_.classList.add(s.makeCssClassName("ac-anchor")),_.target="_blank",_.onclick=function(z){Cc(i,_,z)&&(z.preventDefault(),z.cancelBubble=!0)},_.oncontextmenu=function(z){return Cc(i,_,z)?(z.preventDefault(),z.cancelBubble=!0,!1):!0}},T=0,k=Array.from(b);T<k.length;T++){var A=k[T];C(A)}return this.wrap?(c.style.wordWrap="break-word",this.maxLines&&this.maxLines>0&&(c.style.overflow="hidden",Z.isInternetExplorer()||!ne.GlobalSettings.useWebkitLineClamp?c.style.maxHeight=this._computedLineHeight*this.maxLines+"px":(c.style.removeProperty("line-height"),c.style.display="-webkit-box",c.style.webkitBoxOrient="vertical",c.style.webkitLineClamp=this.maxLines.toString()))):(c.style.whiteSpace="nowrap",c.style.textOverflow="ellipsis"),(ne.GlobalSettings.useAdvancedTextBlockTruncation||ne.GlobalSettings.useAdvancedCardBottomTruncation)&&(this._originalInnerHtml=c.innerHTML),c}else return},e.prototype.truncateOverflow=function(i){return i>=this._computedLineHeight?this.truncateIfSupported(i):!1},e.prototype.undoOverflowTruncation=function(){if(this.restoreOriginalContent(),ne.GlobalSettings.useAdvancedTextBlockTruncation&&this.maxLines){var i=this._computedLineHeight*this.maxLines;this.truncateIfSupported(i)}},e.prototype.applyStylesTo=function(i){switch(t.prototype.applyStylesTo.call(this,i),this.getEffectiveHorizontalAlignment()){case x.HorizontalAlignment.Center:i.style.textAlign="center";break;case x.HorizontalAlignment.Right:i.style.textAlign="end";break;default:i.style.textAlign="start";break}var o=this.hostConfig.lineHeights;if(o)switch(this.effectiveSize){case x.TextSize.Small:this._computedLineHeight=o.small;break;case x.TextSize.Medium:this._computedLineHeight=o.medium;break;case x.TextSize.Large:this._computedLineHeight=o.large;break;case x.TextSize.ExtraLarge:this._computedLineHeight=o.extraLarge;break;default:this._computedLineHeight=o.default;break}else this._computedLineHeight=this.getFontSize(this.hostConfig.getFontTypeDefinition(this.effectiveFontType))*1.33;i.style.lineHeight=this._computedLineHeight+"px"},e.prototype.getJsonTypeName=function(){return"TextBlock"},e.prototype.getEffectiveTextStyleDefinition=function(){return this.style?this.hostConfig.textStyles.getStyleByName(this.style):t.prototype.getEffectiveTextStyleDefinition.call(this)},e.prototype.updateLayout=function(i){i===void 0&&(i=!1),t.prototype.updateLayout.call(this,i),ne.GlobalSettings.useAdvancedTextBlockTruncation&&this.maxLines&&this.isDisplayed()&&(this.restoreOriginalContent(),this.truncateIfSupported(this._computedLineHeight*this.maxLines))};var n,r;return e.wrapProperty=new g.BoolProperty(g.Versions.v1_0,"wrap",!1),e.maxLinesProperty=new g.NumProperty(g.Versions.v1_0,"maxLines"),e.styleProperty=new g.ValueSetProperty(g.Versions.v1_5,"style",[{value:"default"},{value:"columnHeader"},{value:"heading"}]),e._ttMarkdownPolicy=typeof window>"u"||(n=window.trustedTypes)===null||n===void 0?void 0:n.createPolicy("adaptivecards#markdownPassthroughPolicy",{createHTML:function(i){return i}}),e._ttRoundtripPolicy=typeof window>"u"||(r=window.trustedTypes)===null||r===void 0?void 0:r.createPolicy("adaptivecards#restoreContentsPolicy",{createHTML:function(i){return i}}),B([(0,g.property)(e.wrapProperty)],e.prototype,"wrap",void 0),B([(0,g.property)(e.maxLinesProperty)],e.prototype,"maxLines",void 0),B([(0,g.property)(e.styleProperty)],e.prototype,"style",void 0),e}($n);M.TextBlock=mn;var Wn=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.italic=!1,n.strikethrough=!1,n.highlight=!1,n.underline=!1,n}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.add($n.selectActionProperty)},e.prototype.internalRender=function(){var n=this;if(this.text){var r=this.preProcessPropertyValue($n.textProperty),i=this.hostConfig,o=Ac.formatText(this.lang,r);o||(o="");var a=document.createElement("span");if(a.classList.add(i.makeCssClassName("ac-textRun")),this.applyStylesTo(a),this.selectAction&&i.supportsInteractivity){var l=document.createElement("a");l.classList.add(i.makeCssClassName("ac-anchor"));var s=this.selectAction.getHref();l.href=s||"",l.target="_blank",l.onclick=function(c){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(c.preventDefault(),c.cancelBubble=!0,n.selectAction.execute())},this.selectAction.setupElementForAccessibility(l),l.innerText=o,a.appendChild(l)}else a.innerText=o;return a}else return},e.prototype.applyStylesTo=function(n){if(t.prototype.applyStylesTo.call(this,n),this.italic&&(n.style.fontStyle="italic"),this.strikethrough&&(n.style.textDecoration="line-through"),this.highlight){var r=this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors,this.effectiveColor),i=Z.stringToCssColor(this.effectiveIsSubtle?r.highlightColors.subtle:r.highlightColors.default);i&&(n.style.backgroundColor=i)}this.underline&&(n.style.textDecoration="underline")},e.prototype.getJsonTypeName=function(){return"TextRun"},Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isInline",{get:function(){return!0},enumerable:!1,configurable:!0}),e.italicProperty=new g.BoolProperty(g.Versions.v1_2,"italic",!1),e.strikethroughProperty=new g.BoolProperty(g.Versions.v1_2,"strikethrough",!1),e.highlightProperty=new g.BoolProperty(g.Versions.v1_2,"highlight",!1),e.underlineProperty=new g.BoolProperty(g.Versions.v1_3,"underline",!1),B([(0,g.property)(e.italicProperty)],e.prototype,"italic",void 0),B([(0,g.property)(e.strikethroughProperty)],e.prototype,"strikethrough",void 0),B([(0,g.property)(e.highlightProperty)],e.prototype,"highlight",void 0),B([(0,g.property)(e.underlineProperty)],e.prototype,"underline",void 0),e}($n);M.TextRun=Wn;var Vo=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._inlines=[],n}return e.prototype.internalAddInline=function(n,r){if(r===void 0&&(r=!1),!n.isInline)throw new Error(K.Strings.errors.elementCannotBeUsedAsInline());var i=n.parent===void 0||r;if(!i&&n.parent!==this)throw new Error(K.Strings.errors.inlineAlreadyParented());n.setParent(this),this._inlines.push(n)},e.prototype.internalParse=function(n,r){if(t.prototype.internalParse.call(this,n,r),this._inlines=[],Array.isArray(n.inlines))for(var i=0,o=n.inlines;i<o.length;i++){var a=o[i],l=void 0;if(typeof a=="string"){var s=new Wn;s.text=a,l=s}else l=r.parseElement(this,a,[],!1);l&&this.internalAddInline(l,!0)}},e.prototype.internalToJSON=function(n,r){if(t.prototype.internalToJSON.call(this,n,r),this._inlines.length>0){for(var i=[],o=0,a=this._inlines;o<a.length;o++){var l=a[o];i.push(l.toJSON(r))}r.serializeValue(n,"inlines",i)}},e.prototype.internalRender=function(){if(this._inlines.length>0){var n=void 0;if(this.forElementId){var r=document.createElement("label");r.htmlFor=this.forElementId,n=r}else n=document.createElement("div");switch(n.className=this.hostConfig.makeCssClassName("ac-richTextBlock"),this.getEffectiveHorizontalAlignment()){case x.HorizontalAlignment.Center:n.style.textAlign="center";break;case x.HorizontalAlignment.Right:n.style.textAlign="end";break;default:n.style.textAlign="start";break}for(var i=0,o=0,a=this._inlines;o<a.length;o++){var l=a[o],s=l.render();s&&(n.appendChild(s),i++)}if(i>0)return n}},e.prototype.asString=function(){for(var n="",r=0,i=this._inlines;r<i.length;r++){var o=i[r];n+=o.asString()}return n},e.prototype.getJsonTypeName=function(){return"RichTextBlock"},e.prototype.getInlineCount=function(){return this._inlines.length},e.prototype.getInlineAt=function(n){if(n>=0&&n<this._inlines.length)return this._inlines[n];throw new Error(K.Strings.errors.indexOutOfRange(n))},e.prototype.addInline=function(n){typeof n=="string"?this.internalAddInline(new Wn(n)):this.internalAddInline(n)},e.prototype.removeInline=function(n){var r=this._inlines.indexOf(n);return r>=0?(this._inlines[r].setParent(void 0),this._inlines.splice(r,1),!0):!1},e}(Ve);M.RichTextBlock=Vo;var Sc=function(t){Q(e,t);function e(n,r){var i=t.call(this)||this;return i.name=n,i.value=r,i}return e.prototype.getSchemaKey=function(){return"Fact"},e.titleProperty=new g.StringProperty(g.Versions.v1_0,"title"),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),B([(0,g.property)(e.titleProperty)],e.prototype,"name",void 0),B([(0,g.property)(e.valueProperty)],e.prototype,"value",void 0),e}(g.SerializableObject);M.Fact=Sc;var wc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"useDefaultSizing",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype.internalRender=function(){var n=void 0,r=this.hostConfig;if(this.facts.length>0){n=document.createElement("table"),n.style.borderWidth="0px",n.style.borderSpacing="0px",n.style.borderStyle="none",n.style.borderCollapse="collapse",n.style.display="block",n.style.overflow="hidden",n.classList.add(r.makeCssClassName("ac-factset")),n.setAttribute("role","presentation");for(var i=0;i<this.facts.length;i++){var o=document.createElement("tr");i>0&&(o.style.marginTop=r.factSet.spacing+"px");var a=document.createElement("td");a.style.padding="0",a.classList.add(r.makeCssClassName("ac-fact-title")),r.factSet.title.maxWidth&&(a.style.maxWidth=r.factSet.title.maxWidth+"px"),a.style.verticalAlign="top";var l=new mn;l.setParent(this),l.text=!this.facts[i].name&&this.isDesignMode()?"Title":this.facts[i].name,l.size=r.factSet.title.size,l.color=r.factSet.title.color,l.isSubtle=r.factSet.title.isSubtle,l.weight=r.factSet.title.weight,l.wrap=r.factSet.title.wrap,l.spacing=x.Spacing.None,Z.appendChild(a,l.render()),Z.appendChild(o,a),a=document.createElement("td"),a.style.width="10px",Z.appendChild(o,a),a=document.createElement("td"),a.style.padding="0",a.style.verticalAlign="top",a.classList.add(r.makeCssClassName("ac-fact-value")),l=new mn,l.setParent(this),l.text=this.facts[i].value,l.size=r.factSet.value.size,l.color=r.factSet.value.color,l.isSubtle=r.factSet.value.isSubtle,l.weight=r.factSet.value.weight,l.wrap=r.factSet.value.wrap,l.spacing=x.Spacing.None,Z.appendChild(a,l.render()),Z.appendChild(o,a),Z.appendChild(n,o)}}return n},e.prototype.getJsonTypeName=function(){return"FactSet"},e.factsProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_0,"facts",Sc),B([(0,g.property)(e.factsProperty)],e.prototype,"facts",void 0),e}(Ve);M.FactSet=wc;var bc=function(t){Q(e,t);function e(n,r,i,o){var a=t.call(this,n,r)||this;return a.targetVersion=n,a.name=r,a.internalName=i,a.fallbackProperty=o,a}return e.prototype.getInternalName=function(){return this.internalName},e.prototype.parse=function(n,r,i){var o=void 0,a=r[this.name];if(a===void 0)return this.defaultValue;var l=!1;if(typeof a=="string"){try{var s=ne.SizeAndUnit.parse(a,!0);s.unit===x.SizeUnit.Pixel&&(o=s.physicalSize,l=!0)}catch{}!l&&this.fallbackProperty&&(l=this.fallbackProperty.isValidValue(a,i))}return l||i.logParseEvent(n,x.ValidationEvent.InvalidPropertyValue,K.Strings.errors.invalidPropertyValue(a,this.name)),o},e.prototype.toJSON=function(n,r,i,o){o.serializeValue(r,this.name,typeof i=="number"&&!isNaN(i)?i+"px":void 0)},e}(g.PropertyDefinition),yr=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.size=x.Size.Auto,n.style=x.ImageStyle.Default,n}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.remove(Ve.heightProperty)},e.prototype.applySize=function(n){if(this.pixelWidth||this.pixelHeight)this.pixelWidth&&(n.style.width=this.pixelWidth+"px"),this.pixelHeight&&(n.style.height=this.pixelHeight+"px");else if(this.maxHeight){switch(this.size){case x.Size.Small:n.style.height=this.hostConfig.imageSizes.small+"px";break;case x.Size.Large:n.style.height=this.hostConfig.imageSizes.large+"px";break;default:n.style.height=this.hostConfig.imageSizes.medium+"px";break}n.style.maxHeight=this.maxHeight+"px"}else{switch(this.size){case x.Size.Stretch:n.style.width="100%";break;case x.Size.Auto:n.style.maxWidth="100%";break;case x.Size.Small:n.style.width=this.hostConfig.imageSizes.small+"px";break;case x.Size.Large:n.style.width=this.hostConfig.imageSizes.large+"px";break;case x.Size.Medium:n.style.width=this.hostConfig.imageSizes.medium+"px";break}n.style.maxHeight="100%"}},Object.defineProperty(e.prototype,"useDefaultSizing",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype.internalRender=function(){var n=this,r=void 0;if(this.url){r=document.createElement("div"),r.style.display="flex",r.style.alignItems="flex-start";var i=this.hostConfig;switch(this.getEffectiveHorizontalAlignment()){case x.HorizontalAlignment.Center:r.style.justifyContent="center";break;case x.HorizontalAlignment.Right:r.style.justifyContent="flex-end";break;default:r.style.justifyContent="flex-start";break}var o=document.createElement("img");o.onload=function(s){vc(n)},o.onerror=function(s){if(n.renderedElement){var c=n.getRootElement();if(ai(n.renderedElement),c&&c.designMode){var u=document.createElement("div");u.style.display="flex",u.style.alignItems="center",u.style.justifyContent="center",u.style.backgroundColor="#EEEEEE",u.style.color="black",u.innerText=":-(",u.style.padding="10px",n.applySize(u),n.renderedElement.appendChild(u)}}vc(n)},o.style.minWidth="0",o.classList.add(i.makeCssClassName("ac-image")),this.selectAction&&i.supportsInteractivity&&(o.onkeypress=function(s){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(s.code==="Enter"||s.code==="Space")&&(s.preventDefault(),s.cancelBubble=!0,n.selectAction.execute())},o.onclick=function(s){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(s.preventDefault(),s.cancelBubble=!0,n.selectAction.execute())},this.selectAction.setupElementForAccessibility(o),this.selectAction.isEffectivelyEnabled()&&o.classList.add(i.makeCssClassName("ac-selectable"))),this.applySize(o),this.style===x.ImageStyle.Person&&(o.style.borderRadius="50%",o.style.backgroundPosition="50% 50%",o.style.backgroundRepeat="no-repeat");var a=Z.stringToCssColor(this.backgroundColor);a&&(o.style.backgroundColor=a),o.src=this.preProcessPropertyValue(e.urlProperty);var l=this.preProcessPropertyValue(e.altTextProperty);l&&(o.alt=l),r.appendChild(o)}return r},e.prototype.getJsonTypeName=function(){return"Image"},e.prototype.getAllActions=function(){var n=t.prototype.getAllActions.call(this);return this.selectAction&&n.push(this.selectAction),n},e.prototype.getActionById=function(n){var r=t.prototype.getActionById.call(this,n);return!r&&this.selectAction&&(r=this.selectAction.getActionById(n)),r},e.prototype.getResourceInformation=function(){return this.url?[{url:this.url,mimeType:"image"}]:[]},e.urlProperty=new g.StringProperty(g.Versions.v1_0,"url"),e.altTextProperty=new g.StringProperty(g.Versions.v1_0,"altText"),e.backgroundColorProperty=new g.StringProperty(g.Versions.v1_1,"backgroundColor"),e.styleProperty=new g.EnumProperty(g.Versions.v1_0,"style",x.ImageStyle,x.ImageStyle.Default),e.sizeProperty=new g.EnumProperty(g.Versions.v1_0,"size",x.Size,x.Size.Auto),e.pixelWidthProperty=new bc(g.Versions.v1_1,"width","pixelWidth"),e.pixelHeightProperty=new bc(g.Versions.v1_1,"height","pixelHeight",Ve.heightProperty),e.selectActionProperty=new Cr(g.Versions.v1_1,"selectAction",["Action.ShowCard"]),B([(0,g.property)(e.urlProperty)],e.prototype,"url",void 0),B([(0,g.property)(e.altTextProperty)],e.prototype,"altText",void 0),B([(0,g.property)(e.backgroundColorProperty)],e.prototype,"backgroundColor",void 0),B([(0,g.property)(e.sizeProperty)],e.prototype,"size",void 0),B([(0,g.property)(e.styleProperty)],e.prototype,"style",void 0),B([(0,g.property)(e.pixelWidthProperty)],e.prototype,"pixelWidth",void 0),B([(0,g.property)(e.pixelHeightProperty)],e.prototype,"pixelHeight",void 0),B([(0,g.property)(e.selectActionProperty)],e.prototype,"selectAction",void 0),e}(Ve);M.Image=yr;var li=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.allowVerticalOverflow=!1,n}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),this.isSelectable||n.remove(e.selectActionProperty)},e.prototype.isElementAllowed=function(n){return this.hostConfig.supportsInteractivity||!n.isInteractive},e.prototype.applyPadding=function(){if(t.prototype.applyPadding.call(this),!!this.renderedElement){var n=new ne.SpacingDefinition;this.getEffectivePadding()&&(n=this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding())),this.renderedElement.style.paddingTop=n.top+"px",this.renderedElement.style.paddingRight=n.right+"px",this.renderedElement.style.paddingBottom=n.bottom+"px",this.renderedElement.style.paddingLeft=n.left+"px",this.renderedElement.style.marginRight="0",this.renderedElement.style.marginLeft="0"}},Object.defineProperty(e.prototype,"isSelectable",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype.forbiddenChildElements=function(){return[]},e.prototype.releaseDOMResources=function(){t.prototype.releaseDOMResources.call(this);for(var n=0;n<this.getItemCount();n++)this.getItemAt(n).releaseDOMResources()},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n);for(var r=0;r<this.getItemCount();r++){var i=this.getItemAt(r);!this.hostConfig.supportsInteractivity&&i.isInteractive&&n.addFailure(this,x.ValidationEvent.InteractivityNotAllowed,K.Strings.errors.interactivityNotAllowed()),this.isElementAllowed(i)||n.addFailure(this,x.ValidationEvent.InteractivityNotAllowed,K.Strings.errors.elementTypeNotAllowed(i.getJsonTypeName())),i.internalValidateProperties(n)}this._selectAction&&this._selectAction.internalValidateProperties(n)},e.prototype.render=function(){var n=this,r=t.prototype.render.call(this);if(r){var i=this.hostConfig;this.allowVerticalOverflow&&(r.style.overflowX="hidden",r.style.overflowY="auto"),r&&this.isSelectable&&this._selectAction&&i.supportsInteractivity&&(r.onclick=function(o){n._selectAction&&n._selectAction.isEffectivelyEnabled()&&(o.preventDefault(),o.cancelBubble=!0,n._selectAction.execute())},r.onkeypress=function(o){n._selectAction&&n._selectAction.isEffectivelyEnabled()&&(o.code==="Enter"||o.code==="Space")&&(o.preventDefault(),o.cancelBubble=!0,n._selectAction.execute())},this._selectAction.setupElementForAccessibility(r),this._selectAction.isEffectivelyEnabled()&&r.classList.add(i.makeCssClassName("ac-selectable")))}return r},e.prototype.updateLayout=function(n){if(n===void 0&&(n=!0),t.prototype.updateLayout.call(this,n),n)for(var r=0;r<this.getItemCount();r++)this.getItemAt(r).updateLayout()},e.prototype.getAllInputs=function(n){n===void 0&&(n=!0);for(var r=[],i=0;i<this.getItemCount();i++)r.push.apply(r,this.getItemAt(i).getAllInputs(n));return r},e.prototype.getAllActions=function(){for(var n=t.prototype.getAllActions.call(this),r=0;r<this.getItemCount();r++)n.push.apply(n,this.getItemAt(r).getAllActions());return this._selectAction&&n.push(this._selectAction),n},e.prototype.getResourceInformation=function(){for(var n=[],r=0;r<this.getItemCount();r++)n.push.apply(n,this.getItemAt(r).getResourceInformation());return n},e.prototype.getElementById=function(n){var r=t.prototype.getElementById.call(this,n);if(!r)for(var i=0;i<this.getItemCount()&&(r=this.getItemAt(i).getElementById(n),!r);i++);return r},e.prototype.findDOMNodeOwner=function(n){for(var r,i=void 0,o=0;o<this.getItemCount();o++)if(i=this.getItemAt(o).findDOMNodeOwner(n),i)return i;for(var o=0;o<this.getActionCount();o++)if(i=(r=this.getActionAt(o))===null||r===void 0?void 0:r.findDOMNodeOwner(n),i)return i;return t.prototype.findDOMNodeOwner.call(this,n)},e.selectActionProperty=new Cr(g.Versions.v1_1,"selectAction",["Action.ShowCard"]),B([(0,g.property)(e.selectActionProperty)],e.prototype,"_selectAction",void 0),e}(Ve);M.CardElementContainer=li;var Ic=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._images=[],n.imageSize=x.ImageSize.Medium,n}return e.prototype.internalRender=function(){var n=void 0;if(this._images.length>0){n=document.createElement("div"),n.style.display="flex",n.style.flexWrap="wrap";for(var r=0,i=this._images;r<i.length;r++){var o=i[r];switch(this.imageSize){case x.ImageSize.Small:o.size=x.Size.Small;break;case x.ImageSize.Large:o.size=x.Size.Large;break;default:o.size=x.Size.Medium;break}o.maxHeight=this.hostConfig.imageSet.maxImageHeight;var a=o.render();a&&(a.style.display="inline-flex",a.style.margin="0px",a.style.marginRight="10px",Z.appendChild(n,a))}}return n},e.prototype.getItemCount=function(){return this._images.length},e.prototype.getItemAt=function(n){return this._images[n]},e.prototype.getFirstVisibleRenderedItem=function(){return this._images&&this._images.length>0?this._images[0]:void 0},e.prototype.getLastVisibleRenderedItem=function(){return this._images&&this._images.length>0?this._images[this._images.length-1]:void 0},e.prototype.removeItem=function(n){if(n instanceof yr){var r=this._images.indexOf(n);if(r>=0)return this._images.splice(r,1),n.setParent(void 0),this.updateLayout(),!0}return!1},e.prototype.getJsonTypeName=function(){return"ImageSet"},e.prototype.addImage=function(n){if(!n.parent)this._images.push(n),n.setParent(this);else throw new Error("This image already belongs to another ImageSet")},e.prototype.indexOf=function(n){return n instanceof yr?this._images.indexOf(n):-1},e.imagesProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_0,"images",yr,function(n,r){r.setParent(n)}),e.imageSizeProperty=new g.EnumProperty(g.Versions.v1_0,"imageSize",x.ImageSize,x.ImageSize.Medium),B([(0,g.property)(e.imagesProperty)],e.prototype,"_images",void 0),B([(0,g.property)(e.imageSizeProperty)],e.prototype,"imageSize",void 0),e}(li);M.ImageSet=Ic;var No=function(t){Q(e,t);function e(n,r){var i=t.call(this)||this;return i.url=n,i.mimeType=r,i}return e.prototype.isValid=function(){return!!(this.mimeType&&this.url)},e.mimeTypeProperty=new g.StringProperty(g.Versions.v1_1,"mimeType"),e.urlProperty=new g.StringProperty(g.Versions.v1_1,"url"),B([(0,g.property)(e.mimeTypeProperty)],e.prototype,"mimeType",void 0),B([(0,g.property)(e.urlProperty)],e.prototype,"url",void 0),e}(g.SerializableObject);M.ContentSource=No;var kc=function(t){Q(e,t);function e(n,r,i){var o=t.call(this,n,r)||this;return o.label=i,o}return e.prototype.getSchemaKey=function(){return"CaptionSource"},e.prototype.render=function(){var n=void 0;return this.isValid()&&(n=document.createElement("track"),n.src=this.url,n.kind="captions",n.label=this.label),n},e.labelProperty=new g.StringProperty(g.Versions.v1_6,"label"),B([(0,g.property)(e.labelProperty)],e.prototype,"label",void 0),e}(No);M.CaptionSource=kc;var Tc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getSchemaKey=function(){return"MediaSource"},e.prototype.render=function(){var n=void 0;return this.isValid()&&(n=document.createElement("source"),n.src=this.url,n.type=this.mimeType),n},e}(No);M.MediaSource=Tc;var Ho=function(){function t(){}return t.prototype.play=function(){},Object.defineProperty(t.prototype,"posterUrl",{get:function(){return this._posterUrl},set:function(e){this._posterUrl=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedMediaType",{get:function(){},enumerable:!1,configurable:!0}),t}();M.MediaPlayer=Ho;var _c=function(t){Q(e,t);function e(n){var r=t.call(this)||this;return r.owner=n,r._selectedSources=[],r._captionSources=[],r.processSources(),r}return e.prototype.processSources=function(){var n;this._selectedSources=[],this._captionSources=[],this._selectedMediaType=void 0;for(var r=0,i=this.owner.sources;r<i.length;r++){var o=i[r],a=o.mimeType?o.mimeType.split("/"):[];if(a.length===2){if(!this._selectedMediaType){var l=e.supportedMediaTypes.indexOf(a[0]);l>=0&&(this._selectedMediaType=e.supportedMediaTypes[l])}a[0]===this._selectedMediaType&&this._selectedSources.push(o)}}(n=this._captionSources).push.apply(n,this.owner.captionSources)},e.prototype.canPlay=function(){return this._selectedSources.length>0},e.prototype.fetchVideoDetails=function(){return br(this,void 0,void 0,function(){return vr(this,function(n){return[2]})})},e.prototype.render=function(){this._selectedMediaType==="video"?this._mediaElement=document.createElement("video"):this._mediaElement=document.createElement("audio"),this._mediaElement.setAttribute("aria-label",this.owner.altText?this.owner.altText:K.Strings.defaults.mediaPlayerAriaLabel()),this._mediaElement.setAttribute("webkit-playsinline",""),this._mediaElement.setAttribute("playsinline",""),this._mediaElement.setAttribute("crossorigin",""),this._mediaElement.autoplay=!0,this._mediaElement.controls=!0,Z.isMobileOS()&&(this._mediaElement.muted=!0),this._mediaElement.preload="none",this._mediaElement.style.width="100%";for(var n=0,r=this.owner.sources;n<r.length;n++){var i=r[n],o=i.render();Z.appendChild(this._mediaElement,o)}for(var a=0,l=this.owner.captionSources;a<l.length;a++){var s=l[a];if(s.mimeType=="vtt"){var c=s.render();Z.appendChild(this._mediaElement,c)}}return this._mediaElement},e.prototype.play=function(){this._mediaElement&&this._mediaElement.play()},Object.defineProperty(e.prototype,"selectedMediaType",{get:function(){return this._selectedMediaType},enumerable:!1,configurable:!0}),e.supportedMediaTypes=["audio","video"],e}(Ho);M.HTML5MediaPlayer=_c;var Pc=function(t){Q(e,t);function e(n){return t.call(this)||this}return e}(Ho);M.CustomMediaPlayer=Pc;var ci=function(t){Q(e,t);function e(n,r){var i=t.call(this,n)||this;return i.iFrameTitle=r,n.length>=2&&(i._videoId=n[1]),i}return e.prototype.canPlay=function(){return this._videoId!==void 0},e.prototype.render=function(){var n=document.createElement("div");n.style.position="relative",n.style.width="100%",n.style.height="0",n.style.paddingBottom="56.25%";var r=document.createElement("iframe");return r.style.position="absolute",r.style.top="0",r.style.left="0",r.style.width="100%",r.style.height="100%",r.src=this.getEmbedVideoUrl(),r.frameBorder="0",this.iFrameTitle&&(r.title=this.iFrameTitle),r.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",r.allowFullscreen=!0,n.appendChild(r),n},Object.defineProperty(e.prototype,"videoId",{get:function(){return this._videoId},enumerable:!1,configurable:!0}),e}(Pc);M.IFrameMediaMediaPlayer=ci;var Fc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.fetchVideoDetails=function(){return br(this,void 0,void 0,function(){var n,r,i;return vr(this,function(o){switch(o.label){case 0:return n="https://vimeo.com/api/oembed.json?url=".concat(this.getEmbedVideoUrl()),[4,fetch(n)];case 1:return r=o.sent(),r.ok?[4,r.json()]:[3,3];case 2:i=o.sent(),this.posterUrl=i.thumbnail_url,o.label=3;case 3:return[2]}})})},e.prototype.getEmbedVideoUrl=function(){return"https://player.vimeo.com/video/".concat(this.videoId,"?autoplay=1")},e}(ci);M.VimeoPlayer=Fc;var Dc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.fetchVideoDetails=function(){return br(this,void 0,void 0,function(){var n,r,i;return vr(this,function(o){switch(o.label){case 0:return n="https://api.dailymotion.com/video/".concat(this.videoId,"?fields=thumbnail_720_url"),[4,fetch(n)];case 1:return r=o.sent(),r.ok?[4,r.json()]:[3,3];case 2:i=o.sent(),this.posterUrl=i.thumbnail_720_url,o.label=3;case 3:return[2]}})})},e.prototype.getEmbedVideoUrl=function(){return"https://www.dailymotion.com/embed/video/".concat(this.videoId,"?autoplay=1")},e}(ci);M.DailymotionPlayer=Dc;var Bc=function(t){Q(e,t);function e(n,r){var i=t.call(this,n,r)||this;return i.iFrameTitle=r,n.length>=3&&n[2]!==void 0&&(i._startTimeIndex=parseInt(n[2])),i}return e.prototype.fetchVideoDetails=function(){return br(this,void 0,void 0,function(){return vr(this,function(n){return this.posterUrl=this.videoId?"https://img.youtube.com/vi/".concat(this.videoId,"/maxresdefault.jpg"):void 0,[2]})})},e.prototype.getEmbedVideoUrl=function(){var n="https://www.youtube.com/embed/".concat(this.videoId,"?autoplay=1");return this._startTimeIndex!==void 0&&(n+="&start=".concat(this._startTimeIndex)),n},e}(ci);M.YouTubePlayer=Bc;var Mc=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.sources=[],n.captionSources=[],n}return e.prototype.createMediaPlayer=function(){for(var n=0,r=e.customMediaPlayers;n<r.length;n++)for(var i=r[n],o=0,a=this.sources;o<a.length;o++){var l=a[o];if(l.url)for(var s=0,c=i.urlPatterns;s<c.length;s++){var u=c[s],d=u.exec(l.url);if(d!==null)return i.createMediaPlayer(d)}}return new _c(this)},e.prototype.handlePlayButtonInvoke=function(n){if(this.hostConfig.media.allowInlinePlayback){if(n.preventDefault(),n.cancelBubble=!0,this.renderedElement){var r=this._mediaPlayer.render();ai(this.renderedElement),this.renderedElement.appendChild(r),this._mediaPlayer.play(),r.focus()}}else e.onPlay&&(n.preventDefault(),n.cancelBubble=!0,e.onPlay(this))},e.prototype.displayPoster=function(){return br(this,void 0,void 0,function(){var n,r,i,o,a,l,s,c,u=this;return vr(this,function(d){return this.renderedElement&&(n=12,r=15,i=document.createElement("div"),i.className=this.hostConfig.makeCssClassName("ac-media-poster"),i.setAttribute("role","contentinfo"),i.setAttribute("aria-label",this.altText?this.altText:K.Strings.defaults.mediaPlayerAriaLabel()),i.style.position="relative",i.style.display="flex",o=this.poster?this.poster:this._mediaPlayer.posterUrl,o||(o=this.hostConfig.media.defaultPoster),o?(a=document.createElement("img"),a.style.width="100%",a.style.height="100%",a.setAttribute("role","presentation"),a.onerror=function(f){a.parentNode&&a.parentNode.removeChild(a),i.classList.add("empty"),i.style.minHeight="150px"},a.src=o,i.appendChild(a)):(i.classList.add("empty"),i.style.minHeight="150px"),this.hostConfig.supportsInteractivity&&this._mediaPlayer.canPlay()&&(l=document.createElement("div"),l.tabIndex=0,l.setAttribute("role","button"),l.setAttribute("aria-label",K.Strings.defaults.mediaPlayerPlayMedia()),l.className=this.hostConfig.makeCssClassName("ac-media-playButton"),l.style.display="flex",l.style.alignItems="center",l.style.justifyContent="center",l.onclick=function(f){u.handlePlayButtonInvoke(f)},l.onkeypress=function(f){(f.code==="Enter"||f.code==="Space")&&u.handlePlayButtonInvoke(f)},s=document.createElement("div"),s.className=this.hostConfig.makeCssClassName("ac-media-playButton-arrow"),s.style.width=n+"px",s.style.height=r+"px",s.style.borderTopWidth=r/2+"px",s.style.borderBottomWidth=r/2+"px",s.style.borderLeftWidth=n+"px",s.style.borderRightWidth="0",s.style.borderStyle="solid",s.style.borderTopColor="transparent",s.style.borderRightColor="transparent",s.style.borderBottomColor="transparent",s.style.transform="translate("+n/10+"px,0px)",l.appendChild(s),c=document.createElement("div"),c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width="100%",c.style.height="100%",c.style.display="flex",c.style.justifyContent="center",c.style.alignItems="center",c.appendChild(l),i.appendChild(c)),ai(this.renderedElement),this.renderedElement.appendChild(i)),[2]})})},e.prototype.internalRender=function(){var n=document.createElement("div");return n.className=this.hostConfig.makeCssClassName("ac-media"),n},e.prototype.render=function(){var n=this,r=t.prototype.render.call(this);return r&&(this._mediaPlayer=this.createMediaPlayer(),this._mediaPlayer.fetchVideoDetails().then(function(){return n.displayPoster()})),r},e.prototype.releaseDOMResources=function(){t.prototype.releaseDOMResources.call(this),this.displayPoster()},e.prototype.getJsonTypeName=function(){return"Media"},e.prototype.getResourceInformation=function(){var n=[];if(this._mediaPlayer){var r=this.poster?this.poster:this.hostConfig.media.defaultPoster;r&&n.push({url:r,mimeType:"image"})}for(var i=0,o=this.sources;i<o.length;i++){var a=o[i];a.isValid()&&n.push({url:a.url,mimeType:a.mimeType})}for(var l=0,s=this.captionSources;l<s.length;l++){var c=s[l];c.isValid()&&n.push({url:c.url,mimeType:c.mimeType})}return n},Object.defineProperty(e.prototype,"selectedMediaType",{get:function(){return this._mediaPlayer.selectedMediaType},enumerable:!1,configurable:!0}),e.customMediaPlayers=[{urlPatterns:[/^(?:https?:\/\/)?(?:www.)?youtube.com\/watch\?(?=.*v=([\w\d-_]+))(?=(?:.*t=(\d+))?).*/gi,/^(?:https?:\/\/)?youtu.be\/([\w\d-_]+)(?:\?t=(\d+))?/gi],createMediaPlayer:function(n){return new Bc(n,K.Strings.defaults.youTubeVideoPlayer())}},{urlPatterns:[/^(?:https?:\/\/)?vimeo.com\/([\w\d-_]+).*/gi],createMediaPlayer:function(n){return new Fc(n,K.Strings.defaults.vimeoVideoPlayer())}},{urlPatterns:[/^(?:https?:\/\/)?(?:www.)?dailymotion.com\/video\/([\w\d-_]+).*/gi],createMediaPlayer:function(n){return new Dc(n,K.Strings.defaults.dailymotionVideoPlayer())}}],e.sourcesProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_1,"sources",Tc),e.captionSourcesProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_6,"captionSources",kc),e.posterProperty=new g.StringProperty(g.Versions.v1_1,"poster"),e.altTextProperty=new g.StringProperty(g.Versions.v1_1,"altText"),B([(0,g.property)(e.sourcesProperty)],e.prototype,"sources",void 0),B([(0,g.property)(e.captionSourcesProperty)],e.prototype,"captionSources",void 0),B([(0,g.property)(e.posterProperty)],e.prototype,"poster",void 0),B([(0,g.property)(e.altTextProperty)],e.prototype,"altText",void 0),e}(Ve);M.Media=Mc;var yn=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getAllLabelIds=function(){var n=[];return this.labelledBy&&n.push(this.labelledBy),this._renderedLabelElement&&n.push(this._renderedLabelElement.id),this._renderedErrorMessageElement&&n.push(this._renderedErrorMessageElement.id),n},e.prototype.updateInputControlAriaLabelledBy=function(){if(this._renderedInputControlElement){var n=this.getAllLabelIds();n.length>0?this._renderedInputControlElement.setAttribute("aria-labelledby",n.join(" ")):this._renderedInputControlElement.removeAttribute("aria-labelledby")}},Object.defineProperty(e.prototype,"isNullable",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"renderedInputControlElement",{get:function(){return this._renderedInputControlElement},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"inputControlContainerElement",{get:function(){return this._inputControlContainerElement},enumerable:!1,configurable:!0}),e.prototype.overrideInternalRender=function(){var n=this.hostConfig;this._outerContainerElement=document.createElement("div"),this._outerContainerElement.style.display="flex",this._outerContainerElement.style.flexDirection="column";var r=Z.generateUniqueId();if(this.label){var i=new Vo;i.setParent(this),i.forElementId=r;var o=new Wn(this.label);if(i.addInline(o),this.isRequired){o.init(n.inputs.label.requiredInputs);var a=new Wn(n.inputs.label.requiredInputs.suffix);a.color=n.inputs.label.requiredInputs.suffixColor,a.ariaHidden=!0,i.addInline(a)}else o.init(n.inputs.label.optionalInputs);this._renderedLabelElement=i.render(),this._renderedLabelElement&&(this._renderedLabelElement.id=Z.generateUniqueId(),this._renderedLabelElement.style.marginBottom=n.getEffectiveSpacing(n.inputs.label.inputSpacing)+"px",this._outerContainerElement.appendChild(this._renderedLabelElement))}if(this._inputControlContainerElement=document.createElement("div"),this._inputControlContainerElement.className=n.makeCssClassName("ac-input-container"),this._inputControlContainerElement.style.display="flex",this.height==="stretch"&&(this._inputControlContainerElement.style.alignItems="stretch",this._inputControlContainerElement.style.flex="1 1 auto"),this._renderedInputControlElement=this.internalRender(),this._renderedInputControlElement)return this._renderedInputControlElement.id=r,this._renderedInputControlElement.style.minWidth="0px",this.isNullable&&this.isRequired&&(this._renderedInputControlElement.setAttribute("aria-required","true"),this._renderedInputControlElement.classList.add(n.makeCssClassName("ac-input-required"))),this._inputControlContainerElement.appendChild(this._renderedInputControlElement),this._outerContainerElement.appendChild(this._inputControlContainerElement),this.updateInputControlAriaLabelledBy(),this._outerContainerElement;this.resetDirtyState()},e.prototype.valueChanged=function(){this.getRootElement().updateActionsEnabledState(),this.isValid()&&this.resetValidationFailureCue(),this.onValueChanged&&this.onValueChanged(this),Uy(this)},e.prototype.resetValidationFailureCue=function(){this.renderedInputControlElement&&(this.renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed")),this.updateInputControlAriaLabelledBy(),this._renderedErrorMessageElement&&(this._outerContainerElement.removeChild(this._renderedErrorMessageElement),this._renderedErrorMessageElement=void 0))},e.prototype.showValidationErrorMessage=function(){if(this.renderedElement&&this.errorMessage&&ne.GlobalSettings.displayInputValidationErrors){var n=new mn;n.setParent(this),n.text=this.errorMessage,n.wrap=!0,n.init(this.hostConfig.inputs.errorMessage),this._renderedErrorMessageElement=n.render(),this._renderedErrorMessageElement&&(this._renderedErrorMessageElement.id=Z.generateUniqueId(),this._outerContainerElement.appendChild(this._renderedErrorMessageElement),this.updateInputControlAriaLabelledBy())}},e.prototype.focus=function(){this._renderedInputControlElement&&this._renderedInputControlElement.focus()},e.prototype.isValid=function(){return!0},e.prototype.isDirty=function(){return this.value!==this._oldValue},e.prototype.resetDirtyState=function(){this._oldValue=this.value},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.id||n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.inputsMustHaveUniqueId()),this.isRequired&&(this.label||n.addFailure(this,x.ValidationEvent.RequiredInputsShouldHaveLabel,"Required inputs should have a label"),this.errorMessage||n.addFailure(this,x.ValidationEvent.RequiredInputsShouldHaveErrorMessage,"Required inputs should have an error message"))},e.prototype.validateValue=function(){this.resetValidationFailureCue();var n=this.isRequired?this.isSet()&&this.isValid():this.isValid();return!n&&this.renderedInputControlElement&&(this.renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed")),this.showValidationErrorMessage()),n},e.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[this]},e.prototype.render=function(){var n=t.prototype.render.call(this);return this.resetDirtyState(),n},Object.defineProperty(e.prototype,"isInteractive",{get:function(){return!0},enumerable:!1,configurable:!0}),e.labelProperty=new g.StringProperty(g.Versions.v1_3,"label",!0),e.isRequiredProperty=new g.BoolProperty(g.Versions.v1_3,"isRequired",!1),e.errorMessageProperty=new g.StringProperty(g.Versions.v1_3,"errorMessage",!0),B([(0,g.property)(e.labelProperty)],e.prototype,"label",void 0),B([(0,g.property)(e.isRequiredProperty)],e.prototype,"isRequired",void 0),B([(0,g.property)(e.errorMessageProperty)],e.prototype,"errorMessage",void 0),e}(Ve);M.Input=yn;var zc=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.isMultiline=!1,n.style=x.InputTextStyle.Text,n}return e.prototype.setupInput=function(n){var r=this;n.style.flex="1 1 auto",n.tabIndex=this.isDesignMode()?-1:0,this.placeholder&&(n.placeholder=this.placeholder,n.setAttribute("aria-label",this.placeholder)),this.defaultValue&&(n.value=this.defaultValue),this.maxLength&&this.maxLength>0&&(n.maxLength=this.maxLength),n.oninput=function(){r.valueChanged()},n.onkeypress=function(i){i.ctrlKey&&i.code==="Enter"&&r.inlineAction&&r.inlineAction.isEffectivelyEnabled()&&r.inlineAction.execute()}},e.prototype.internalRender=function(){var n;return this.isMultiline&&this.style!==x.InputTextStyle.Password?(n=document.createElement("textarea"),n.className=this.hostConfig.makeCssClassName("ac-input","ac-textInput","ac-multiline"),this.height==="stretch"&&(n.style.height="initial")):(n=document.createElement("input"),n.className=this.hostConfig.makeCssClassName("ac-input","ac-textInput"),n.type=x.InputTextStyle[this.style].toLowerCase()),this.setupInput(n),n},e.prototype.overrideInternalRender=function(){var n=this,r=t.prototype.overrideInternalRender.call(this);if(this.inlineAction){var i=document.createElement("button");if(i.className=this.hostConfig.makeCssClassName(this.inlineAction.isEffectivelyEnabled()?"ac-inlineActionButton":"ac-inlineActionButton-disabled"),i.onclick=function(a){n.inlineAction&&n.inlineAction.isEffectivelyEnabled()&&(a.preventDefault(),a.cancelBubble=!0,n.inlineAction.execute())},this.inlineAction.iconUrl){i.classList.add("iconOnly");var o=document.createElement("img");o.style.height="100%",o.setAttribute("role","presentation"),o.style.display="none",o.onload=function(){o.style.removeProperty("display")},o.onerror=function(){i.removeChild(o),i.classList.remove("iconOnly"),i.classList.add("textOnly"),i.textContent=n.inlineAction&&n.inlineAction.title?n.inlineAction.title:K.Strings.defaults.inlineActionTitle()},o.src=this.inlineAction.iconUrl,i.appendChild(o),i.title=this.inlineAction.title?this.inlineAction.title:K.Strings.defaults.inlineActionTitle()}else i.classList.add("textOnly"),i.textContent=this.inlineAction.title?this.inlineAction.title:K.Strings.defaults.inlineActionTitle();this.inlineAction.setupElementForAccessibility(i,!0),i.style.marginLeft="8px",this.inputControlContainerElement.appendChild(i)}return r},e.prototype.getJsonTypeName=function(){return"Input.Text"},e.prototype.getAllActions=function(){var n=t.prototype.getAllActions.call(this);return this.inlineAction&&n.push(this.inlineAction),n},e.prototype.getActionById=function(n){var r=t.prototype.getActionById.call(this,n);return!r&&this.inlineAction&&(r=this.inlineAction.getActionById(n)),r},e.prototype.isSet=function(){return!!this.value},e.prototype.isValid=function(){return this.value&&this.regex?new RegExp(this.regex,"g").test(this.value):!0},Object.defineProperty(e.prototype,"value",{get:function(){if(this.renderedInputControlElement)return this.isMultiline?this.renderedInputControlElement.value:this.renderedInputControlElement.value},enumerable:!1,configurable:!0}),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),e.maxLengthProperty=new g.NumProperty(g.Versions.v1_0,"maxLength"),e.isMultilineProperty=new g.BoolProperty(g.Versions.v1_0,"isMultiline",!1),e.placeholderProperty=new g.StringProperty(g.Versions.v1_0,"placeholder"),e.styleProperty=new g.EnumProperty(g.Versions.v1_0,"style",x.InputTextStyle,x.InputTextStyle.Text,[{value:x.InputTextStyle.Text},{value:x.InputTextStyle.Tel},{value:x.InputTextStyle.Url},{value:x.InputTextStyle.Email},{value:x.InputTextStyle.Password,targetVersion:g.Versions.v1_5}]),e.inlineActionProperty=new Cr(g.Versions.v1_0,"inlineAction",["Action.ShowCard"]),e.regexProperty=new g.StringProperty(g.Versions.v1_3,"regex",!0),B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.maxLengthProperty)],e.prototype,"maxLength",void 0),B([(0,g.property)(e.isMultilineProperty)],e.prototype,"isMultiline",void 0),B([(0,g.property)(e.placeholderProperty)],e.prototype,"placeholder",void 0),B([(0,g.property)(e.styleProperty)],e.prototype,"style",void 0),B([(0,g.property)(e.inlineActionProperty)],e.prototype,"inlineAction",void 0),B([(0,g.property)(e.regexProperty)],e.prototype,"regex",void 0),e}(yn);M.TextInput=zc;var Oc=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.valueOn="true",n.valueOff="false",n.wrap=!1,n}return e.prototype.updateInputControlAriaLabelledBy=function(){if(this._checkboxInputElement){var n=this.getAllLabelIds().join(" ");this._checkboxInputLabelElement&&this._checkboxInputLabelElement.id&&(n+=" "+this._checkboxInputLabelElement.id),n?this._checkboxInputElement.setAttribute("aria-labelledby",n):this._checkboxInputElement.removeAttribute("aria-labelledby")}},e.prototype.internalRender=function(){var n=this,r=document.createElement("div");if(r.className=this.hostConfig.makeCssClassName("ac-input","ac-toggleInput"),r.style.width="100%",r.style.display="flex",r.style.alignItems="center",this._checkboxInputElement=document.createElement("input"),this._checkboxInputElement.id=Z.generateUniqueId(),this._checkboxInputElement.type="checkbox",this._checkboxInputElement.style.display="inline-block",this._checkboxInputElement.style.verticalAlign="middle",this._checkboxInputElement.style.margin="0",this._checkboxInputElement.style.flex="0 0 auto",this.title&&this._checkboxInputElement.setAttribute("aria-label",this.title),this.isRequired&&this._checkboxInputElement.setAttribute("aria-required","true"),this._checkboxInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue===this.valueOn&&(this._checkboxInputElement.checked=!0),this._oldCheckboxValue=this._checkboxInputElement.checked,this._checkboxInputElement.onchange=function(){n.valueChanged()},Z.appendChild(r,this._checkboxInputElement),this.title||this.isDesignMode()){var i=new mn;if(i.setParent(this),i.forElementId=this._checkboxInputElement.id,i.hostConfig=this.hostConfig,i.text=this.title?this.title:this.getJsonTypeName(),i.useMarkdown=ne.GlobalSettings.useMarkdownInRadioButtonAndCheckbox,i.wrap=this.wrap,this._checkboxInputLabelElement=i.render(),this._checkboxInputLabelElement){this._checkboxInputLabelElement.id=Z.generateUniqueId(),this._checkboxInputLabelElement.style.display="inline-block",this._checkboxInputLabelElement.style.flex="1 1 auto",this._checkboxInputLabelElement.style.marginLeft="6px",this._checkboxInputLabelElement.style.verticalAlign="middle";var o=document.createElement("div");o.style.width="6px",Z.appendChild(r,o),Z.appendChild(r,this._checkboxInputLabelElement)}}return r},Object.defineProperty(e.prototype,"isNullable",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype.getJsonTypeName=function(){return"Input.Toggle"},e.prototype.focus=function(){this._checkboxInputElement&&this._checkboxInputElement.focus()},e.prototype.isSet=function(){return this.isRequired?this.value===this.valueOn:!!this.value},e.prototype.isDirty=function(){return this._checkboxInputElement?this._checkboxInputElement.checked!==this._oldCheckboxValue:!1},Object.defineProperty(e.prototype,"value",{get:function(){if(this._checkboxInputElement)return this._checkboxInputElement.checked?this.valueOn:this.valueOff},enumerable:!1,configurable:!0}),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),e.titleProperty=new g.StringProperty(g.Versions.v1_0,"title"),e.valueOnProperty=new g.StringProperty(g.Versions.v1_0,"valueOn",!0,void 0,"true",function(n){return"true"}),e.valueOffProperty=new g.StringProperty(g.Versions.v1_0,"valueOff",!0,void 0,"false",function(n){return"false"}),e.wrapProperty=new g.BoolProperty(g.Versions.v1_2,"wrap",!1),B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.titleProperty)],e.prototype,"title",void 0),B([(0,g.property)(e.valueOnProperty)],e.prototype,"valueOn",void 0),B([(0,g.property)(e.valueOffProperty)],e.prototype,"valueOff",void 0),B([(0,g.property)(e.wrapProperty)],e.prototype,"wrap",void 0),e}(yn);M.ToggleInput=Oc;var Rc=function(t){Q(e,t);function e(n,r){var i=t.call(this)||this;return i.title=n,i.value=r,i}return e.prototype.getSchemaKey=function(){return"Choice"},e.titleProperty=new g.StringProperty(g.Versions.v1_0,"title"),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),B([(0,g.property)(e.titleProperty)],e.prototype,"title",void 0),B([(0,g.property)(e.valueProperty)],e.prototype,"value",void 0),e}(g.SerializableObject);M.Choice=Rc;var Lc=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.isMultiSelect=!1,n.wrap=!1,n.choices=[],n}return Object.defineProperty(e.prototype,"isCompact",{get:function(){return!this.style||this.style==="compact"},set:function(n){this.style=n?void 0:"expanded"},enumerable:!1,configurable:!0}),e.getUniqueCategoryName=function(){var n="__ac-category"+e._uniqueCategoryCounter;return e._uniqueCategoryCounter++,n},e.prototype.internalApplyAriaCurrent=function(){if(this._selectElement){var n=this._selectElement.options;if(n)for(var r=0,i=Array.from(n);r<i.length;r++){var o=i[r];o.selected?o.setAttribute("aria-current","true"):o.removeAttribute("aria-current")}}},e.prototype.renderCompoundInput=function(n,r,i){var o=this,a=document.createElement("div");a.className=this.hostConfig.makeCssClassName("ac-input",n),a.style.width="100%",a.tabIndex=this.isDesignMode()?-1:0,this._toggleInputs=[],this._labels=[];for(var l=0,s=this.choices;l<s.length;l++){var c=s[l],u=document.createElement("input");u.id=Z.generateUniqueId(),u.type=r,u.style.margin="0",u.style.display="inline-block",u.style.verticalAlign="middle",u.style.flex="0 0 auto",u.name=this.id?this.id:this._uniqueCategoryName,this.isRequired&&u.setAttribute("aria-required","true"),u.tabIndex=this.isDesignMode()?-1:0,c.value&&(u.value=c.value),c.title&&u.setAttribute("aria-label",c.title),i&&c.value&&i.indexOf(c.value)>=0&&(u.checked=!0),u.onchange=function(){o.valueChanged()},this._toggleInputs.push(u);var d=document.createElement("div");d.style.display="flex",d.style.alignItems="center",Z.appendChild(d,u);var f=new mn;f.setParent(this),f.forElementId=u.id,f.hostConfig=this.hostConfig,f.text=c.title?c.title:"Choice "+this._toggleInputs.length,f.useMarkdown=ne.GlobalSettings.useMarkdownInRadioButtonAndCheckbox,f.wrap=this.wrap;var p=f.render();if(this._labels.push(p),p){p.id=Z.generateUniqueId(),p.style.display="inline-block",p.style.flex="1 1 auto",p.style.marginLeft="6px",p.style.verticalAlign="middle";var y=document.createElement("div");y.style.width="6px",Z.appendChild(d,y),Z.appendChild(d,p)}Z.appendChild(a,d)}return a},e.prototype.updateInputControlAriaLabelledBy=function(){if((this.isMultiSelect||this.style==="expanded")&&this._toggleInputs&&this._labels)for(var n=this.getAllLabelIds(),r=0;r<this._toggleInputs.length;r++){var i=n.join(" "),o=this._labels[r];o&&o.id&&(i+=" "+o.id),i?this._toggleInputs[r].setAttribute("aria-labelledby",i):this._toggleInputs[r].removeAttribute("aria-labelledby")}else t.prototype.updateInputControlAriaLabelledBy.call(this)},e.prototype.internalRender=function(){var n=this;if(this._uniqueCategoryName=e.getUniqueCategoryName(),this.isMultiSelect)return this.renderCompoundInput("ac-choiceSetInput-multiSelect","checkbox",this.defaultValue?this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator):void 0);if(this.style==="expanded")return this.renderCompoundInput("ac-choiceSetInput-expanded","radio",this.defaultValue?[this.defaultValue]:void 0);if(this.style==="filtered"){var r=document.createElement("div");r.style.width="100%",this._textInput=document.createElement("input"),this._textInput.className=this.hostConfig.makeCssClassName("ac-input","ac-multichoiceInput","ac-choiceSetInput-filtered"),this._textInput.type="text",this._textInput.style.width="100%",this._textInput.oninput=function(){n.valueChanged(),n._textInput&&(n.value?(n._textInput.removeAttribute("placeholder"),n._textInput.removeAttribute("aria-label")):n.placeholder&&(n._textInput.placeholder=n.placeholder,n._textInput.setAttribute("aria-label",n.placeholder)))},this.defaultValue&&(this._textInput.value=this.defaultValue),this.placeholder&&!this._textInput.value&&(this._textInput.placeholder=this.placeholder,this._textInput.setAttribute("aria-label",this.placeholder)),this._textInput.tabIndex=this.isDesignMode()?-1:0;var i=document.createElement("datalist");i.id=Z.generateUniqueId();for(var o=0,a=this.choices;o<a.length;o++){var l=a[o],s=document.createElement("option");l.title&&(s.value=l.title,s.setAttribute("aria-label",l.title)),s.tabIndex=this.isDesignMode()?-1:0,i.appendChild(s)}return this._textInput.setAttribute("list",i.id),r.append(this._textInput,i),r}else{this._selectElement=document.createElement("select"),this._selectElement.className=this.hostConfig.makeCssClassName("ac-input","ac-multichoiceInput","ac-choiceSetInput-compact"),this._selectElement.style.width="100%",this._selectElement.tabIndex=this.isDesignMode()?-1:0;var c=document.createElement("option");c.selected=!0,c.disabled=!0,c.hidden=!0,c.value="",this.placeholder&&(c.text=this.placeholder),Z.appendChild(this._selectElement,c);for(var u=0,d=this.choices;u<d.length;u++){var l=d[u],s=document.createElement("option");s.value=l.value,l.title&&(s.text=l.title,s.setAttribute("aria-label",l.title)),s.tabIndex=this.isDesignMode()?-1:0,l.value===this.defaultValue&&(s.selected=!0),Z.appendChild(this._selectElement,s)}return this._selectElement.onchange=function(){n.internalApplyAriaCurrent(),n.valueChanged()},this.internalApplyAriaCurrent(),this._selectElement}},e.prototype.getJsonTypeName=function(){return"Input.ChoiceSet"},e.prototype.focus=function(){this._toggleInputs&&(this.isMultiSelect||this.style==="expanded")?this._toggleInputs.length>0&&this._toggleInputs[0].focus():this._textInput?this._textInput.focus():t.prototype.focus.call(this)},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.choices.length===0&&n.addFailure(this,x.ValidationEvent.CollectionCantBeEmpty,K.Strings.errors.choiceSetMustHaveAtLeastOneChoice());for(var r=0,i=this.choices;r<i.length;r++){var o=i[r];(!o.title||!o.value)&&n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.choiceSetChoicesMustHaveTitleAndValue())}},e.prototype.isSet=function(){return!!this.value},e.prototype.isValid=function(){if(this._textInput){if(this.value===""||this.value===this.placeholder)return!0;for(var n=0,r=this.choices;n<r.length;n++){var i=r[n];if(this.value===i.value)return!0}return!1}return t.prototype.isValid.call(this)},Object.defineProperty(e.prototype,"value",{get:function(){if(this.isMultiSelect){if(!this._toggleInputs||this._toggleInputs.length===0)return;for(var s="",c=0,u=this._toggleInputs;c<u.length;c++){var l=u[c];l.checked&&(s!==""&&(s+=this.hostConfig.choiceSetInputValueSeparator),s+=l.value)}return s||void 0}else{if(this._selectElement)return this._selectElement.selectedIndex>0?this._selectElement.value:void 0;if(this._textInput){for(var n=0,r=this.choices;n<r.length;n++){var i=r[n];if(i.title&&this._textInput.value===i.title)return i.value}return this._textInput.value}else if(this._toggleInputs&&this._toggleInputs.length>0)for(var o=0,a=this._toggleInputs;o<a.length;o++){var l=a[o];if(l.checked)return l.value}return}},enumerable:!1,configurable:!0}),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),e.choicesProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_0,"choices",Rc),e.styleProperty=new g.ValueSetProperty(g.Versions.v1_0,"style",[{value:"compact"},{value:"expanded"},{value:"filtered",targetVersion:g.Versions.v1_5}],"compact"),e.isMultiSelectProperty=new g.BoolProperty(g.Versions.v1_0,"isMultiSelect",!1),e.placeholderProperty=new g.StringProperty(g.Versions.v1_0,"placeholder"),e.wrapProperty=new g.BoolProperty(g.Versions.v1_2,"wrap",!1),e._uniqueCategoryCounter=0,B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.styleProperty)],e.prototype,"style",void 0),B([(0,g.property)(e.isMultiSelectProperty)],e.prototype,"isMultiSelect",void 0),B([(0,g.property)(e.placeholderProperty)],e.prototype,"placeholder",void 0),B([(0,g.property)(e.wrapProperty)],e.prototype,"wrap",void 0),B([(0,g.property)(e.choicesProperty)],e.prototype,"choices",void 0),e}(yn);M.ChoiceSetInput=Lc;var Vc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.internalRender=function(){var n=this;return this._numberInputElement=document.createElement("input"),this._numberInputElement.setAttribute("type","number"),this.min!==void 0&&this._numberInputElement.setAttribute("min",this.min.toString()),this.max!==void 0&&this._numberInputElement.setAttribute("max",this.max.toString()),this._numberInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-numberInput"),this._numberInputElement.style.width="100%",this._numberInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue!==void 0&&(this._numberInputElement.valueAsNumber=this.defaultValue),this.placeholder&&(this._numberInputElement.placeholder=this.placeholder,this._numberInputElement.setAttribute("aria-label",this.placeholder)),this._numberInputElement.oninput=function(){n.valueChanged()},this._numberInputElement},e.prototype.getJsonTypeName=function(){return"Input.Number"},e.prototype.isSet=function(){return this.value!==void 0&&!isNaN(this.value)},e.prototype.isValid=function(){if(this.value===void 0)return!this.isRequired;var n=!0;return this.min!==void 0&&(n=n&&this.value>=this.min),this.max!==void 0&&(n=n&&this.value<=this.max),n},Object.defineProperty(e.prototype,"value",{get:function(){return this._numberInputElement?this._numberInputElement.valueAsNumber:void 0},set:function(n){n&&this._numberInputElement&&(this._numberInputElement.value=n.toString())},enumerable:!1,configurable:!0}),e.valueProperty=new g.NumProperty(g.Versions.v1_0,"value"),e.placeholderProperty=new g.StringProperty(g.Versions.v1_0,"placeholder"),e.minProperty=new g.NumProperty(g.Versions.v1_0,"min"),e.maxProperty=new g.NumProperty(g.Versions.v1_0,"max"),B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.minProperty)],e.prototype,"min",void 0),B([(0,g.property)(e.maxProperty)],e.prototype,"max",void 0),B([(0,g.property)(e.placeholderProperty)],e.prototype,"placeholder",void 0),e}(yn);M.NumberInput=Vc;var Nc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.internalRender=function(){var n=this;return this._dateInputElement=document.createElement("input"),this._dateInputElement.setAttribute("type","date"),this.min&&this._dateInputElement.setAttribute("min",this.min),this.max&&this._dateInputElement.setAttribute("max",this.max),this.placeholder&&(this._dateInputElement.placeholder=this.placeholder,this._dateInputElement.setAttribute("aria-label",this.placeholder)),this._dateInputElement.tabIndex=this.isDesignMode()?-1:0,this._dateInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-dateInput"),this._dateInputElement.style.width="100%",this._dateInputElement.oninput=function(){n.valueChanged()},this.defaultValue&&(this._dateInputElement.value=this.defaultValue),this._dateInputElement},e.prototype.getJsonTypeName=function(){return"Input.Date"},e.prototype.isSet=function(){return!!this.value},e.prototype.isValid=function(){if(!this.value)return!this.isRequired;var n=new Date(this.value),r=!0;if(this.min){var i=new Date(this.min);r=r&&n>=i}if(this.max){var o=new Date(this.max);r=r&&n<=o}return r},Object.defineProperty(e.prototype,"value",{get:function(){return this._dateInputElement?this._dateInputElement.value:void 0},enumerable:!1,configurable:!0}),e.valueProperty=new g.StringProperty(g.Versions.v1_0,"value"),e.placeholderProperty=new g.StringProperty(g.Versions.v1_0,"placeholder"),e.minProperty=new g.StringProperty(g.Versions.v1_0,"min"),e.maxProperty=new g.StringProperty(g.Versions.v1_0,"max"),B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.minProperty)],e.prototype,"min",void 0),B([(0,g.property)(e.maxProperty)],e.prototype,"max",void 0),B([(0,g.property)(e.placeholderProperty)],e.prototype,"placeholder",void 0),e}(yn);M.DateInput=Nc;var ii=function(t){Q(e,t);function e(n,r){var i=t.call(this,n,r,function(o,a,l,s){var c=l[a.name];if(typeof c=="string"&&c&&/^[0-9]{2}:[0-9]{2}$/.test(c))return c},function(o,a,l,s,c){c.serializeValue(l,a.name,s)})||this;return i.targetVersion=n,i.name=r,i}return e}(g.CustomProperty);M.TimeProperty=ii;var Hc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.convertTimeStringToDate=function(n){return new Date("1973-09-04T"+n+":00Z")},e.prototype.internalRender=function(){var n=this;return this._timeInputElement=document.createElement("input"),this._timeInputElement.setAttribute("type","time"),this.min&&this._timeInputElement.setAttribute("min",this.min),this.max&&this._timeInputElement.setAttribute("max",this.max),this._timeInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-timeInput"),this._timeInputElement.style.width="100%",this._timeInputElement.oninput=function(){n.valueChanged()},this.placeholder&&(this._timeInputElement.placeholder=this.placeholder,this._timeInputElement.setAttribute("aria-label",this.placeholder)),this._timeInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue&&(this._timeInputElement.value=this.defaultValue),this._timeInputElement},e.prototype.getJsonTypeName=function(){return"Input.Time"},e.prototype.isSet=function(){return!!this.value},e.prototype.isValid=function(){if(!this.value)return!this.isRequired;var n=e.convertTimeStringToDate(this.value),r=!0;if(this.min){var i=e.convertTimeStringToDate(this.min);r=r&&n>=i}if(this.max){var o=e.convertTimeStringToDate(this.max);r=r&&n<=o}return r},Object.defineProperty(e.prototype,"value",{get:function(){return this._timeInputElement?this._timeInputElement.value:void 0},enumerable:!1,configurable:!0}),e.valueProperty=new ii(g.Versions.v1_0,"value"),e.placeholderProperty=new g.StringProperty(g.Versions.v1_0,"placeholder"),e.minProperty=new ii(g.Versions.v1_0,"min"),e.maxProperty=new ii(g.Versions.v1_0,"max"),B([(0,g.property)(e.valueProperty)],e.prototype,"defaultValue",void 0),B([(0,g.property)(e.minProperty)],e.prototype,"min",void 0),B([(0,g.property)(e.maxProperty)],e.prototype,"max",void 0),B([(0,g.property)(e.placeholderProperty)],e.prototype,"placeholder",void 0),e}(yn);M.TimeInput=Hc;var en=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.style=x.ActionStyle.Default,n.mode=x.ActionMode.Primary,n._state=0,n._isFocusable=!0,n}return e.prototype.renderButtonContent=function(){if(this.renderedElement){var n=this.hostConfig,r=document.createElement("div");if(r.style.overflow="hidden",r.style.textOverflow="ellipsis",n.actions.iconPlacement===x.ActionIconPlacement.AboveTitle||n.actions.allowTitleToWrap||(r.style.whiteSpace="nowrap"),this.title&&(r.innerText=this.title),!this.iconUrl)this.renderedElement.classList.add("noIcon"),this.renderedElement.appendChild(r);else{var i=document.createElement("img");i.src=this.iconUrl,i.style.width=n.actions.iconSize+"px",i.style.height=n.actions.iconSize+"px",i.style.flex="0 0 auto",n.actions.iconPlacement===x.ActionIconPlacement.AboveTitle?(this.renderedElement.classList.add("iconAbove"),this.renderedElement.style.flexDirection="column",this.title&&(i.style.marginBottom="6px")):(this.renderedElement.classList.add("iconLeft"),i.style.maxHeight="100%",this.title&&(i.style.marginRight="6px")),this.renderedElement.appendChild(i),this.renderedElement.appendChild(r)}}},e.prototype.getParentContainer=function(){return this.parent instanceof bn?this.parent:this.parent?this.parent.getParentContainer():void 0},e.prototype.isDesignMode=function(){var n=this.getRootObject();return n instanceof Ve&&n.isDesignMode()},e.prototype.updateCssClasses=function(){var n,r;if(this.parent&&this.renderedElement){var i=this.parent.hostConfig;this.renderedElement.className=i.makeCssClassName(this.isEffectivelyEnabled()?"ac-pushButton":"ac-pushButton-disabled");var o=this.getParentContainer();if(o){var a=o.getEffectiveStyle();a&&this.renderedElement.classList.add("style-"+a)}switch(this.renderedElement.tabIndex=!this.isDesignMode()&&this.isFocusable?0:-1,this._state){case 0:break;case 1:this.renderedElement.classList.add(i.makeCssClassName("expanded"));break;case 2:this.renderedElement.classList.add(i.makeCssClassName("subdued"));break}this.style&&this.isEffectivelyEnabled()&&(this.style===x.ActionStyle.Positive?(n=this.renderedElement.classList).add.apply(n,i.makeCssClassNames("primary","style-positive")):(r=this.renderedElement.classList).add.apply(r,i.makeCssClassNames("style-"+this.style.toLowerCase())))}},e.prototype.getDefaultSerializationContext=function(){return new Un},e.prototype.internalGetReferencedInputs=function(){return{}},e.prototype.internalPrepareForExecution=function(n){},e.prototype.internalValidateInputs=function(n){var r=[];if(n)for(var i=0,o=Object.keys(n);i<o.length;i++){var a=o[i],l=n[a];l.validateValue()||r.push(l)}return r},e.prototype.shouldSerialize=function(n){return n.actionRegistry.findByName(this.getJsonTypeName())!==void 0},e.prototype.raiseExecuteActionEvent=function(){this.onExecute&&this.onExecute(this),Yy(this)},e.prototype.internalAfterExecute=function(){var n=this.getRootObject();n instanceof Ve&&n.updateActionsEnabledState()},e.prototype.getHref=function(){return""},e.prototype.getAriaRole=function(){return"button"},e.prototype.setupElementForAccessibility=function(n,r){if(r===void 0&&(r=!1),n.tabIndex=this.isEffectivelyEnabled()&&!this.isDesignMode()?0:-1,n.setAttribute("role",this.getAriaRole()),n instanceof HTMLButtonElement&&(n.disabled=!this.isEffectivelyEnabled()),this.isEffectivelyEnabled()?(n.removeAttribute("aria-disabled"),n.classList.add(this.hostConfig.makeCssClassName("ac-selectable"))):n.setAttribute("aria-disabled","true"),this.title?(n.setAttribute("aria-label",this.title),n.title=this.title):(n.removeAttribute("aria-label"),n.removeAttribute("title")),this.tooltip){var i=r?this.title?"aria-description":"aria-label":"aria-description";n.setAttribute(i,this.tooltip),n.title=this.tooltip}},e.prototype.parse=function(n,r){return t.prototype.parse.call(this,n,r||new Un)},e.prototype.render=function(){var n=this,r=document.createElement("button");r.type="button",r.style.display="flex",r.style.alignItems="center",r.style.justifyContent="center",r.onclick=function(i){n.isEffectivelyEnabled()&&(i.preventDefault(),i.cancelBubble=!0,n.execute())},this._renderedElement=r,this.renderButtonContent(),this.updateCssClasses(),this.setupElementForAccessibility(r)},e.prototype.execute=function(){this._actionCollection&&this._actionCollection.actionExecuted(this),this.raiseExecuteActionEvent(),this.internalAfterExecute()},e.prototype.prepareForExecution=function(){var n=this.getReferencedInputs(),r=this.internalValidateInputs(n);return r.length>0?(r[0].focus(),!1):(this.internalPrepareForExecution(n),!0)},e.prototype.remove=function(){return this._actionCollection?this._actionCollection.removeAction(this):!1},e.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[]},e.prototype.getAllActions=function(){return[this]},e.prototype.getResourceInformation=function(){return this.iconUrl?[{url:this.iconUrl,mimeType:"image"}]:[]},e.prototype.getActionById=function(n){return this.id===n?this:void 0},e.prototype.getReferencedInputs=function(){return this.internalGetReferencedInputs()},e.prototype.validateInputs=function(){return this.internalValidateInputs(this.getReferencedInputs())},e.prototype.updateEnabledState=function(){},e.prototype.isEffectivelyEnabled=function(){return this.isEnabled},Object.defineProperty(e.prototype,"isPrimary",{get:function(){return this.style===x.ActionStyle.Positive},set:function(n){n?this.style=x.ActionStyle.Positive:this.style===x.ActionStyle.Positive&&(this.style=x.ActionStyle.Default)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hostConfig",{get:function(){return this.parent?this.parent.hostConfig:Ro.defaultHostConfig},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"state",{get:function(){return this._state},set:function(n){this._state!==n&&(this._state=n,this.updateCssClasses())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isFocusable",{get:function(){return this._isFocusable},set:function(n){this._isFocusable!==n&&(this._isFocusable=n,this.updateCssClasses())},enumerable:!1,configurable:!0}),e.titleProperty=new g.StringProperty(g.Versions.v1_0,"title"),e.iconUrlProperty=new g.StringProperty(g.Versions.v1_1,"iconUrl"),e.styleProperty=new g.ValueSetProperty(g.Versions.v1_2,"style",[{value:x.ActionStyle.Default},{value:x.ActionStyle.Positive},{value:x.ActionStyle.Destructive}],x.ActionStyle.Default),e.modeProperty=new g.ValueSetProperty(g.Versions.v1_5,"mode",[{value:x.ActionMode.Primary},{value:x.ActionMode.Secondary}],x.ActionMode.Primary),e.tooltipProperty=new g.StringProperty(g.Versions.v1_5,"tooltip"),e.isEnabledProperty=new g.BoolProperty(g.Versions.v1_5,"isEnabled",!0),B([(0,g.property)(e.titleProperty)],e.prototype,"title",void 0),B([(0,g.property)(e.iconUrlProperty)],e.prototype,"iconUrl",void 0),B([(0,g.property)(e.styleProperty)],e.prototype,"style",void 0),B([(0,g.property)(e.modeProperty)],e.prototype,"mode",void 0),B([(0,g.property)(e.tooltipProperty)],e.prototype,"tooltip",void 0),B([(0,g.property)(e.isEnabledProperty)],e.prototype,"isEnabled",void 0),e}(Ec.CardObject);M.Action=en;var qo=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.disabledUnlessAssociatedInputsChange=!1,n._isPrepared=!1,n._areReferencedInputsDirty=!1,n}return e.prototype.internalGetReferencedInputs=function(){var n={};if(this.associatedInputs!=="none"){for(var r=this.parent,i=[];r;)i.push.apply(i,r.getAllInputs(!1)),r=r.parent;for(var o=0,a=i;o<a.length;o++){var l=a[o];l.id&&(n[l.id]=l)}}return n},e.prototype.internalPrepareForExecution=function(n){if(this._originalData?this._processedData=JSON.parse(JSON.stringify(this._originalData)):this._processedData={},this._processedData&&n)for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r],a=n[o];a.id&&a.isSet()&&(this._processedData[a.id]=typeof a.value=="string"?a.value:a.value.toString())}this._isPrepared=!0},e.prototype.internalAfterExecute=function(){ne.GlobalSettings.resetInputsDirtyStateAfterActionExecution&&this.resetReferencedInputsDirtyState()},e.prototype.resetReferencedInputsDirtyState=function(){var n=this.getReferencedInputs();if(this._areReferencedInputsDirty=!1,n)for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r],a=n[o];a.resetDirtyState()}},e.prototype.updateEnabledState=function(){this._areReferencedInputsDirty=!1;var n=this.getReferencedInputs();if(n)for(var r=0,i=Object.keys(n);r<i.length;r++){var o=i[r],a=n[o];if(a.isDirty()){this._areReferencedInputsDirty=!0;break}}this.updateCssClasses(),this._renderedElement&&this.setupElementForAccessibility(this._renderedElement)},e.prototype.isEffectivelyEnabled=function(){var n=t.prototype.isEffectivelyEnabled.call(this);return this.disabledUnlessAssociatedInputsChange?n&&this._areReferencedInputsDirty:n},Object.defineProperty(e.prototype,"data",{get:function(){return this._isPrepared?this._processedData:this._originalData},set:function(n){this._originalData=n,this._isPrepared=!1},enumerable:!1,configurable:!0}),e.dataProperty=new g.PropertyDefinition(g.Versions.v1_0,"data"),e.associatedInputsProperty=new g.CustomProperty(g.Versions.v1_3,"associatedInputs",function(n,r,i,o){var a=i[r.name];if(a!==void 0&&typeof a=="string")return a.toLowerCase()==="none"?"none":"auto"},function(n,r,i,o,a){a.serializeValue(i,r.name,o)}),e.disabledUnlessAssociatedInputsChangeProperty=new g.BoolProperty(g.Versions.v1_6,"disabledUnlessAssociatedInputsChange",!1),B([(0,g.property)(e.dataProperty)],e.prototype,"_originalData",void 0),B([(0,g.property)(e.associatedInputsProperty)],e.prototype,"associatedInputs",void 0),B([(0,g.property)(e.disabledUnlessAssociatedInputsChangeProperty)],e.prototype,"disabledUnlessAssociatedInputsChange",void 0),e}(en);M.SubmitActionBase=qo;var Bo=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.JsonTypeName="Action.Submit",e}(qo);M.SubmitAction=Bo;var si=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.JsonTypeName="Action.Execute",e.verbProperty=new g.StringProperty(g.Versions.v1_4,"verb"),B([(0,g.property)(e.verbProperty)],e.prototype,"verb",void 0),e}(qo);M.ExecuteAction=si;var Mo=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.prototype.getAriaRole=function(){return"link"},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.url||n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.propertyMustBeSet("url"))},e.prototype.getHref=function(){return this.url},e.urlProperty=new g.StringProperty(g.Versions.v1_0,"url"),e.JsonTypeName="Action.OpenUrl",B([(0,g.property)(e.urlProperty)],e.prototype,"url",void 0),e}(en);M.OpenUrlAction=Mo;var zo=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.targetElements={},n}return e.prototype.updateAriaControlsAttribute=function(){if(this.targetElements){var n=Object.keys(this.targetElements);this._renderedElement&&(n.length>0?this._renderedElement.setAttribute("aria-controls",n.join(" ")):this._renderedElement.removeAttribute("aria-controls"))}},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.targetElements||n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.propertyMustBeSet("targetElements"))},e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.prototype.render=function(){t.prototype.render.call(this),this.updateAriaControlsAttribute()},e.prototype.execute=function(){if(t.prototype.execute.call(this),this.parent)for(var n=0,r=Object.keys(this.targetElements);n<r.length;n++){var i=r[n],o=this.parent.getRootElement().getElementById(i);o&&(typeof this.targetElements[i]=="boolean"?o.isVisible=this.targetElements[i]:o.isVisible=!o.isVisible)}},e.prototype.addTargetElement=function(n,r){r===void 0&&(r=void 0),this.targetElements[n]=r,this.updateAriaControlsAttribute()},e.prototype.removeTargetElement=function(n){delete this.targetElements[n],this.updateAriaControlsAttribute()},e.targetElementsProperty=new g.CustomProperty(g.Versions.v1_2,"targetElements",function(n,r,i,o){var a={};if(Array.isArray(i[r.name]))for(var l=0,s=i[r.name];l<s.length;l++){var c=s[l];if(typeof c=="string")a[c]=void 0;else if(typeof c=="object"){var u=c.elementId;typeof u=="string"&&(a[u]=Z.parseBool(c.isVisible))}}return a},function(n,r,i,o,a){for(var l=[],s=0,c=Object.keys(o);s<c.length;s++){var u=c[s];typeof o[u]=="boolean"?l.push({elementId:u,isVisible:o[u]}):l.push(u)}a.serializeArray(i,r.name,l)},{},function(n){return{}}),e.JsonTypeName="Action.ToggleVisibility",B([(0,g.property)(e.targetElementsProperty)],e.prototype,"targetElements",void 0),e}(en);M.ToggleVisibilityAction=zo;var Oo=function(t){Q(e,t);function e(n,r){var i=t.call(this,n,r,void 0,function(){return new ne.StringWithSubstitutions})||this;return i.targetVersion=n,i.name=r,i}return e.prototype.parse=function(n,r,i){var o=new ne.StringWithSubstitutions;return o.set(Z.parseString(r[this.name])),o},e.prototype.toJSON=function(n,r,i,o){o.serializeValue(r,this.name,i.getOriginal())},e}(g.PropertyDefinition),qc=function(t){Q(e,t);function e(n,r){n===void 0&&(n=""),r===void 0&&(r="");var i=t.call(this)||this;return i.name=n,i.value=r,i}return e.prototype.getSchemaKey=function(){return"HttpHeader"},e.prototype.getReferencedInputs=function(n,r){this._value.getReferencedInputs(n,r)},e.prototype.prepareForExecution=function(n){this._value.substituteInputValues(n,ne.ContentTypes.applicationXWwwFormUrlencoded)},Object.defineProperty(e.prototype,"value",{get:function(){return this._value.get()},set:function(n){this._value.set(n)},enumerable:!1,configurable:!0}),e.nameProperty=new g.StringProperty(g.Versions.v1_0,"name"),e.valueProperty=new Oo(g.Versions.v1_0,"value"),B([(0,g.property)(e.nameProperty)],e.prototype,"name",void 0),B([(0,g.property)(e.valueProperty)],e.prototype,"_value",void 0),e}(g.SerializableObject);M.HttpHeader=qc;var $y=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._ignoreInputValidation=!1,n}return e.prototype.internalGetReferencedInputs=function(){var n=this.parent?this.parent.getRootElement().getAllInputs():[],r={};this._url.getReferencedInputs(n,r);for(var i=0,o=this.headers;i<o.length;i++){var a=o[i];a.getReferencedInputs(n,r)}return this._body.getReferencedInputs(n,r),r},e.prototype.internalPrepareForExecution=function(n){if(n){this._url.substituteInputValues(n,ne.ContentTypes.applicationXWwwFormUrlencoded);for(var r=ne.ContentTypes.applicationJson,i=0,o=this.headers;i<o.length;i++){var a=o[i];a.prepareForExecution(n),a.name&&a.name.toLowerCase()==="content-type"&&(r=a.value)}this._body.substituteInputValues(n,r)}},e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.prototype.internalValidateProperties=function(n){if(t.prototype.internalValidateProperties.call(this,n),this.url||n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.propertyMustBeSet("url")),this.headers.length>0)for(var r=0,i=this.headers;r<i.length;r++){var o=i[r];o.name||n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.actionHttpHeadersMustHaveNameAndValue())}},Object.defineProperty(e.prototype,"ignoreInputValidation",{get:function(){return this._ignoreInputValidation},set:function(n){this._ignoreInputValidation=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"url",{get:function(){return this._url.get()},set:function(n){this._url.set(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"body",{get:function(){return this._body.get()},set:function(n){this._body.set(n)},enumerable:!1,configurable:!0}),e.urlProperty=new Oo(g.Versions.v1_0,"url"),e.bodyProperty=new Oo(g.Versions.v1_0,"body"),e.methodProperty=new g.StringProperty(g.Versions.v1_0,"method"),e.headersProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_0,"headers",qc),e.ignoreInputValidationProperty=new g.BoolProperty(g.Versions.v1_3,"ignoreInputValidation",!1),e.JsonTypeName="Action.Http",B([(0,g.property)(e.urlProperty)],e.prototype,"_url",void 0),B([(0,g.property)(e.bodyProperty)],e.prototype,"_body",void 0),B([(0,g.property)(e.methodProperty)],e.prototype,"method",void 0),B([(0,g.property)(e.headersProperty)],e.prototype,"headers",void 0),B([(0,g.property)(e.ignoreInputValidationProperty)],e.prototype,"_ignoreInputValidation",void 0),e}(en);M.HttpAction=$y;var Yn=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.card=new Jy,n}return e.prototype.updateCssClasses=function(){if(t.prototype.updateCssClasses.call(this),this.renderedElement){var n=this.parent?this.parent.hostConfig:Ro.defaultHostConfig;this.renderedElement.classList.add(n.makeCssClassName("expandable")),this.renderedElement.setAttribute("aria-expanded",(this.state===1).toString())}},e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r);var i=n.card;i?this.card.parse(i,r):r.logParseEvent(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.showCardMustHaveCard())},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),this.card&&r.serializeValue(n,"card",this.card.toJSON(r))},e.prototype.raiseExecuteActionEvent=function(){this.hostConfig.actions.showCard.actionMode===x.ShowCardActionMode.Popup&&t.prototype.raiseExecuteActionEvent.call(this)},e.prototype.releaseDOMResources=function(){t.prototype.releaseDOMResources.call(this),this.card.releaseDOMResources()},e.prototype.getJsonTypeName=function(){return e.JsonTypeName},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.card.internalValidateProperties(n)},e.prototype.setParent=function(n){t.prototype.setParent.call(this,n),this.card.setParent(n)},e.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),this.card.getAllInputs(n)},e.prototype.getAllActions=function(){var n=t.prototype.getAllActions.call(this);return n.push.apply(n,this.card.getAllActions()),n},e.prototype.getResourceInformation=function(){var n=t.prototype.getResourceInformation.call(this);return n.push.apply(n,this.card.getResourceInformation()),n},e.prototype.getActionById=function(n){var r=t.prototype.getActionById.call(this,n);return r||(r=this.card.getActionById(n)),r},e.JsonTypeName="Action.ShowCard",e}(en);M.ShowCardAction=Yn;var Wy=function(t){Q(e,t);function e(n){var r=t.call(this)||this;return r._actions=n,r.title=K.Strings.defaults.overflowButtonText(),r.tooltip=K.Strings.defaults.overflowButtonTooltip(),r}return e.prototype.getActions=function(){return this._actions},e.prototype.getAllActions=function(){var n=t.prototype.getAllActions.call(this);return n.push.apply(n,this._actions),n},e.prototype.getJsonTypeName=function(){return Yn.JsonTypeName},e.prototype.execute=function(){var n=this,r,i=!jy(this,this.renderedElement);if(i&&this.renderedElement){var o=new yc.PopupMenu;o.hostConfig=this.hostConfig;for(var a=function(c){var u=new yc.MenuItem(c.toString(),(r=l._actions[c].title)!==null&&r!==void 0?r:"");u.isEnabled=l._actions[c].isEnabled,u.onClick=function(){var d=n._actions[c];o.closePopup(!1),d.isEnabled&&d.execute()},o.items.add(u)},l=this,s=0;s<this._actions.length;s++)a(s);o.onClose=function(){var c;(c=n.renderedElement)===null||c===void 0||c.setAttribute("aria-expanded","false")},this.renderedElement.setAttribute("aria-expanded","true"),o.popup(this.renderedElement)}},e.prototype.setupElementForAccessibility=function(n,r){r===void 0&&(r=!1),t.prototype.setupElementForAccessibility.call(this,n,r),n.setAttribute("aria-label",K.Strings.defaults.overflowButtonTooltip()),n.setAttribute("aria-expanded","false")},e.JsonTypeName="Action.Overflow",e}(en),Gc=function(){function t(e){this._items=[],this._renderedActions=[],this._owner=e}return t.prototype.isActionAllowed=function(e){var n=this._owner.getForbiddenActionTypes();if(n)for(var r=0,i=n;r<i.length;r++){var o=i[r];if(e.constructor===o)return!1}return!0},t.prototype.refreshContainer=function(){if(ai(this._actionCardContainer),!this._actionCard){this._actionCardContainer.style.marginTop="0px";return}this._actionCardContainer.style.marginTop=this.renderedActionCount>0?this._owner.hostConfig.actions.showCard.inlineTopMargin+"px":"0px";var e=this._owner.getEffectivePadding();this._owner.getImmediateSurroundingPadding(e);var n=this._owner.hostConfig.paddingDefinitionToSpacingDefinition(e);this._actionCard&&(this._actionCard.style.paddingLeft=n.left+"px",this._actionCard.style.paddingRight=n.right+"px",this._actionCard.style.marginLeft="-"+n.left+"px",this._actionCard.style.marginRight="-"+n.right+"px",n.bottom!==0&&!this._owner.isDesignMode()&&(this._actionCard.style.paddingBottom=n.bottom+"px",this._actionCard.style.marginBottom="-"+n.bottom+"px"),Z.appendChild(this._actionCardContainer,this._actionCard))},t.prototype.layoutChanged=function(){this._owner.getRootElement().updateLayout()},t.prototype.showActionCard=function(e,n,r){n===void 0&&(n=!1),r===void 0&&(r=!0),e.card.suppressStyle=n;var i=e.card.renderedElement&&!this._owner.isDesignMode()?e.card.renderedElement:e.card.render();this._actionCard=i,this._expandedAction=e,this.refreshContainer(),r&&(this.layoutChanged(),xc(e,!0))},t.prototype.collapseExpandedAction=function(){for(var e=0,n=this._renderedActions;e<n.length;e++){var r=n[e];r.state=0}var i=this._expandedAction;this._expandedAction=void 0,this._actionCard=void 0,this.refreshContainer(),i&&(this.layoutChanged(),xc(i,!1))},t.prototype.expandShowCardAction=function(e,n){for(var r=this,i=!1,o=0,a=this._renderedActions;o<a.length;o++){var l=a[o];this._owner.hostConfig.actions.actionsOrientation==x.Orientation.Horizontal&&i&&(l.isFocusable=!1),l!==e?l.state=2:(l.state=1,i=!0,l.renderedElement&&(l.renderedElement.onblur=function(s){for(var c=0,u=r._renderedActions;c<u.length;c++){var d=u[c];d.isFocusable=!0}}))}this.showActionCard(e,!(this._owner.isAtTheVeryLeft()&&this._owner.isAtTheVeryRight()),n)},t.prototype.releaseDOMResources=function(){for(var e=0,n=this._renderedActions;e<n.length;e++){var r=n[e];r.releaseDOMResources()}},t.prototype.actionExecuted=function(e){e instanceof Yn?e===this._expandedAction?this.collapseExpandedAction():this._owner.hostConfig.actions.showCard.actionMode===x.ShowCardActionMode.Inline&&this.expandShowCardAction(e,!0):this.collapseExpandedAction()},t.prototype.parse=function(e,n){if(this.clear(),Array.isArray(e))for(var r=0,i=e;r<i.length;r++){var o=i[r],a=[];this._owner instanceof Wo&&(a=this._owner.getForbiddenActionNames());var l=n.parseAction(this._owner,o,a,!this._owner.isDesignMode());l&&this.addAction(l)}},t.prototype.toJSON=function(e,n,r){r.serializeArray(e,n,this._items)},t.prototype.getActionAt=function(e){return this._items[e]},t.prototype.getActionCount=function(){return this._items.length},t.prototype.getActionById=function(e){for(var n=void 0,r=0,i=this._items;r<i.length;r++){var o=i[r];if(n=o.getActionById(e),n)break}return n},t.prototype.validateProperties=function(e){this._owner.hostConfig.actions.maxActions&&this._items.length>this._owner.hostConfig.actions.maxActions&&e.addFailure(this._owner,x.ValidationEvent.TooManyActions,K.Strings.errors.tooManyActions(this._owner.hostConfig.actions.maxActions)),this._items.length>0&&!this._owner.hostConfig.supportsInteractivity&&e.addFailure(this._owner,x.ValidationEvent.InteractivityNotAllowed,K.Strings.errors.interactivityNotAllowed());for(var n=0,r=this._items;n<r.length;n++){var i=r[n];this.isActionAllowed(i)||e.addFailure(this._owner,x.ValidationEvent.ActionTypeNotAllowed,K.Strings.errors.actionTypeNotAllowed(i.getJsonTypeName())),i.internalValidateProperties(e)}},t.prototype.render=function(e){var n=this._owner.hostConfig;if(!!n.supportsInteractivity){var r=document.createElement("div"),i=n.actions.maxActions?Math.min(n.actions.maxActions,this._items.length):this._items.length;if(this._actionCardContainer=document.createElement("div"),this._renderedActions=[],n.actions.preExpandSingleShowCardAction&&i===1&&this._items[0]instanceof Yn&&this.isActionAllowed(this._items[0]))this.showActionCard(this._items[0],!0),this._renderedActions.push(this._items[0]);else{var o=document.createElement("div");if(o.className=n.makeCssClassName("ac-actionSet"),o.style.display="flex",e===x.Orientation.Horizontal)if(o.style.flexDirection="row",this._owner.horizontalAlignment&&n.actions.actionAlignment!==x.ActionAlignment.Stretch)switch(this._owner.horizontalAlignment){case x.HorizontalAlignment.Center:o.style.justifyContent="center";break;case x.HorizontalAlignment.Right:o.style.justifyContent="flex-end";break;default:o.style.justifyContent="flex-start";break}else switch(n.actions.actionAlignment){case x.ActionAlignment.Center:o.style.justifyContent="center";break;case x.ActionAlignment.Right:o.style.justifyContent="flex-end";break;default:o.style.justifyContent="flex-start";break}else if(o.style.flexDirection="column",this._owner.horizontalAlignment&&n.actions.actionAlignment!==x.ActionAlignment.Stretch)switch(this._owner.horizontalAlignment){case x.HorizontalAlignment.Center:o.style.alignItems="center";break;case x.HorizontalAlignment.Right:o.style.alignItems="flex-end";break;default:o.style.alignItems="flex-start";break}else switch(n.actions.actionAlignment){case x.ActionAlignment.Center:o.style.alignItems="center";break;case x.ActionAlignment.Right:o.style.alignItems="flex-end";break;case x.ActionAlignment.Stretch:o.style.alignItems="stretch";break;default:o.style.alignItems="flex-start";break}var a=this._items.filter(this.isActionAllowed.bind(this)),l=[],s=[];if(this._owner.isDesignMode())l=a;else{a.forEach(function(C){return C.mode===x.ActionMode.Secondary?s.push(C):l.push(C)});var c=l.splice(n.actions.maxActions);ne.GlobalSettings.allowMoreThanMaxActionsInOverflowMenu&&s.push.apply(s,c);var u=!0;if(s.length>0){this._overflowAction||(this._overflowAction=new Wy(s),this._overflowAction.setParent(this._owner),this._overflowAction._actionCollection=this);var d=this._owner instanceof We&&!this._owner.parent;u=!Qy(this._overflowAction,d)}this._overflowAction&&u&&l.push(this._overflowAction)}for(var f=0;f<l.length;f++){var p=l[f];if(p.render(),p.renderedElement&&(n.actions.actionsOrientation===x.Orientation.Horizontal&&n.actions.actionAlignment===x.ActionAlignment.Stretch?p.renderedElement.style.flex="0 1 100%":p.renderedElement.style.flex="0 1 auto",o.appendChild(p.renderedElement),this._renderedActions.push(p),f<l.length-1&&n.actions.buttonSpacing>0)){var y=document.createElement("div");e===x.Orientation.Horizontal?(y.style.flex="0 0 auto",y.style.width=n.actions.buttonSpacing+"px"):y.style.height=n.actions.buttonSpacing+"px",Z.appendChild(o,y)}}var h=document.createElement("div");h.style.overflow="hidden",h.appendChild(o),Z.appendChild(r,h)}Z.appendChild(r,this._actionCardContainer);for(var m=0,v=this._renderedActions;m<v.length;m++){var b=v[m];if(b.state===1){this.expandShowCardAction(b,!1);break}}return this._renderedActions.length>0?r:void 0}},t.prototype.addAction=function(e){if(!e)throw new Error("The action parameter cannot be null.");if((!e.parent||e.parent===this._owner)&&this._items.indexOf(e)<0)this._items.push(e),e.parent||e.setParent(this._owner),e._actionCollection=this;else throw new Error(K.Strings.errors.actionAlreadyParented())},t.prototype.removeAction=function(e){this.expandedAction&&this._expandedAction===e&&this.collapseExpandedAction();var n=this._items.indexOf(e);if(n>=0){this._items.splice(n,1),e.setParent(void 0),e._actionCollection=void 0;for(var r=0;r<this._renderedActions.length;r++)if(this._renderedActions[r]===e){this._renderedActions.splice(r,1);break}return!0}return!1},t.prototype.clear=function(){this._items=[],this._renderedActions=[],this._expandedAction=void 0},t.prototype.getAllInputs=function(e){e===void 0&&(e=!0);var n=[];if(e)for(var r=0,i=this._items;r<i.length;r++){var o=i[r];n.push.apply(n,o.getAllInputs())}return n},t.prototype.getResourceInformation=function(){for(var e=[],n=0,r=this._items;n<r.length;n++){var i=r[n];e.push.apply(e,i.getResourceInformation())}return e},Object.defineProperty(t.prototype,"renderedActionCount",{get:function(){return this._renderedActions.length},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"expandedAction",{get:function(){return this._expandedAction},enumerable:!1,configurable:!0}),t}(),$c=function(t){Q(e,t);function e(){var n=t.call(this)||this;return n._actionCollection=new Gc(n),n}return e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this._actionCollection.parse(n.actions,r)},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),this._actionCollection.toJSON(n,"actions",r)},e.prototype.internalRender=function(){return this._actionCollection.render(this.orientation!==void 0?this.orientation:this.hostConfig.actions.actionsOrientation)},e.prototype.releaseDOMResources=function(){t.prototype.releaseDOMResources.call(this),this._actionCollection.releaseDOMResources()},e.prototype.isBleedingAtBottom=function(){return this._actionCollection.renderedActionCount===0?t.prototype.isBleedingAtBottom.call(this):this._actionCollection.getActionCount()===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},e.prototype.getJsonTypeName=function(){return"ActionSet"},e.prototype.getActionCount=function(){return this._actionCollection.getActionCount()},e.prototype.getActionAt=function(n){return n>=0&&n<this.getActionCount()?this._actionCollection.getActionAt(n):t.prototype.getActionAt.call(this,n)},e.prototype.getActionById=function(n){var r=this._actionCollection.getActionById(n);return r||t.prototype.getActionById.call(this,n)},e.prototype.getAllActions=function(){for(var n=t.prototype.getAllActions.call(this),r=0;r<this.getActionCount();r++){var i=this.getActionAt(r);i&&n.push(i)}return n},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this._actionCollection.validateProperties(n)},e.prototype.addAction=function(n){this._actionCollection.addAction(n)},e.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),n?this._actionCollection.getAllInputs():[]},e.prototype.getResourceInformation=function(){return this._actionCollection.getResourceInformation()},e.prototype.findDOMNodeOwner=function(n){for(var r=void 0,i=0;i<this.getActionCount();i++){var o=this.getActionAt(i);if(o&&(r=o.findDOMNodeOwner(n),r))return r}return t.prototype.findDOMNodeOwner.call(this,n)},Object.defineProperty(e.prototype,"isInteractive",{get:function(){return!0},enumerable:!1,configurable:!0}),e.orientationProperty=new g.EnumProperty(g.Versions.v1_1,"orientation",x.Orientation),B([(0,g.property)(e.orientationProperty)],e.prototype,"orientation",void 0),e}(Ve);M.ActionSet=$c;var Wc=function(t){Q(e,t);function e(n,r,i,o){var a=t.call(this,n,r,[{value:x.ContainerStyle.Default},{value:x.ContainerStyle.Emphasis},{targetVersion:g.Versions.v1_2,value:x.ContainerStyle.Accent},{targetVersion:g.Versions.v1_2,value:x.ContainerStyle.Good},{targetVersion:g.Versions.v1_2,value:x.ContainerStyle.Attention},{targetVersion:g.Versions.v1_2,value:x.ContainerStyle.Warning}],i,o)||this;return a.targetVersion=n,a.name=r,a.defaultValue=i,a.onGetInitialValue=o,a}return e}(g.ValueSetProperty);M.ContainerStyleProperty=Wc;var Yc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"style",{get:function(){if(this.allowCustomStyle){var n=this.getValue(e.styleProperty);if(n&&this.hostConfig.containerStyles.getStyleByName(n))return n}},set:function(n){this.setValue(e.styleProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allowCustomStyle",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasExplicitStyle",{get:function(){return this.getValue(e.styleProperty)!==void 0},enumerable:!1,configurable:!0}),e.prototype.applyBorder=function(){},e.prototype.applyBackground=function(){if(this.renderedElement){var n=this.hostConfig.containerStyles.getStyleByName(this.style,this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));if(n.backgroundColor){var r=Z.stringToCssColor(n.backgroundColor);r&&(this.renderedElement.style.backgroundColor=r)}}},e.prototype.applyPadding=function(){if(t.prototype.applyPadding.call(this),!!this.renderedElement){var n=new ne.SpacingDefinition;if(this.getEffectivePadding()&&(n=this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding())),this.renderedElement.style.paddingTop=n.top+"px",this.renderedElement.style.paddingRight=n.right+"px",this.renderedElement.style.paddingBottom=n.bottom+"px",this.renderedElement.style.paddingLeft=n.left+"px",this.isBleeding()){var r=new ne.PaddingDefinition;this.getImmediateSurroundingPadding(r);var i=this.hostConfig.paddingDefinitionToSpacingDefinition(r);this.renderedElement.style.marginRight="-"+i.right+"px",this.renderedElement.style.marginLeft="-"+i.left+"px",this.isDesignMode()||(this.renderedElement.style.marginTop="-"+i.top+"px",this.renderedElement.style.marginBottom="-"+i.bottom+"px"),this.separatorElement&&this.separatorOrientation===x.Orientation.Horizontal&&(this.separatorElement.style.marginLeft="-"+i.left+"px",this.separatorElement.style.marginRight="-"+i.right+"px")}else this.renderedElement.style.marginRight="0",this.renderedElement.style.marginLeft="0",this.renderedElement.style.marginTop="0",this.renderedElement.style.marginBottom="0",this.separatorElement&&this.separatorOrientation===x.Orientation.Horizontal&&(this.separatorElement.style.marginRight="0",this.separatorElement.style.marginLeft="0")}},e.prototype.getHasBackground=function(n){n===void 0&&(n=!1);for(var r=this.parent;r;){var i=!1;if(n?i=!1:i=r instanceof bn?r.backgroundImage.isValid():!1,r instanceof e&&this.hasExplicitStyle&&(r.getEffectiveStyle()!==this.getEffectiveStyle()||i))return!0;r=r.parent}return!1},e.prototype.getDefaultPadding=function(){return this.getHasBackground()||this.getHasBorder()?new ne.PaddingDefinition(x.Spacing.Padding,x.Spacing.Padding,x.Spacing.Padding,x.Spacing.Padding):t.prototype.getDefaultPadding.call(this)},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n);var r=this.getValue(e.styleProperty);if(r!==void 0){var i=this.hostConfig.containerStyles.getStyleByName(r);i||n.addFailure(this,x.ValidationEvent.InvalidPropertyValue,K.Strings.errors.invalidPropertyValue(r,"style"))}},e.prototype.render=function(){var n=t.prototype.render.call(this);return n&&this.getHasBackground()&&this.applyBackground(),this.applyBorder(),n},e.prototype.getEffectiveStyle=function(){var n=this.style;return n||t.prototype.getEffectiveStyle.call(this)},e.styleProperty=new Wc(g.Versions.v1_0,"style"),B([(0,g.property)(e.styleProperty)],e.prototype,"style",null),e}(li);M.StylableCardElementContainer=Yc;var Go=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._bleed=!1,n}return e.prototype.adjustRenderedElementSize=function(n){t.prototype.adjustRenderedElementSize.call(this,n),this.minPixelHeight&&(n.style.minHeight=this.minPixelHeight+"px")},e.prototype.getHasExpandedAction=function(){return!1},e.prototype.getBleed=function(){return this._bleed},e.prototype.setBleed=function(n){this._bleed=n},Object.defineProperty(e.prototype,"renderedActionCount",{get:function(){return 0},enumerable:!1,configurable:!0}),e.prototype.isBleeding=function(){return(this.getHasBackground()||this.hostConfig.alwaysAllowBleed)&&this.getBleed()},e.bleedProperty=new g.BoolProperty(g.Versions.v1_2,"bleed",!1),e.minHeightProperty=new g.PixelSizeProperty(g.Versions.v1_2,"minHeight"),B([(0,g.property)(e.bleedProperty)],e.prototype,"_bleed",void 0),B([(0,g.property)(e.minHeightProperty)],e.prototype,"minPixelHeight",void 0),e}(Yc);M.ContainerBase=Go;var Uc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getSchemaKey=function(){return"BackgroundImage"},e.prototype.internalParse=function(n,r){if(typeof n=="string")this.resetDefaultValues(),this.url=n;else return t.prototype.internalParse.call(this,n,r)},e.prototype.apply=function(n){if(this.url&&n.renderedElement){switch(n.renderedElement.style.backgroundImage="url('"+n.preProcessPropertyValue(e.urlProperty,this.url)+"')",this.fillMode){case x.FillMode.Repeat:n.renderedElement.style.backgroundRepeat="repeat";break;case x.FillMode.RepeatHorizontally:n.renderedElement.style.backgroundRepeat="repeat-x";break;case x.FillMode.RepeatVertically:n.renderedElement.style.backgroundRepeat="repeat-y";break;case x.FillMode.Cover:default:n.renderedElement.style.backgroundRepeat="no-repeat",n.renderedElement.style.backgroundSize="cover";break}switch(this.horizontalAlignment){case x.HorizontalAlignment.Left:break;case x.HorizontalAlignment.Center:n.renderedElement.style.backgroundPositionX="center";break;case x.HorizontalAlignment.Right:n.renderedElement.style.backgroundPositionX="right";break}switch(this.verticalAlignment){case x.VerticalAlignment.Top:break;case x.VerticalAlignment.Center:n.renderedElement.style.backgroundPositionY="center";break;case x.VerticalAlignment.Bottom:n.renderedElement.style.backgroundPositionY="bottom";break}}},e.prototype.isValid=function(){return!!this.url},e.urlProperty=new g.StringProperty(g.Versions.v1_0,"url"),e.fillModeProperty=new g.EnumProperty(g.Versions.v1_2,"fillMode",x.FillMode,x.FillMode.Cover),e.horizontalAlignmentProperty=new g.EnumProperty(g.Versions.v1_2,"horizontalAlignment",x.HorizontalAlignment,x.HorizontalAlignment.Left),e.verticalAlignmentProperty=new g.EnumProperty(g.Versions.v1_2,"verticalAlignment",x.VerticalAlignment,x.VerticalAlignment.Top),B([(0,g.property)(e.urlProperty)],e.prototype,"url",void 0),B([(0,g.property)(e.fillModeProperty)],e.prototype,"fillMode",void 0),B([(0,g.property)(e.horizontalAlignmentProperty)],e.prototype,"horizontalAlignment",void 0),B([(0,g.property)(e.verticalAlignmentProperty)],e.prototype,"verticalAlignment",void 0),e}(g.SerializableObject);M.BackgroundImage=Uc;var bn=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._items=[],n._renderedItems=[],n}return Object.defineProperty(e.prototype,"backgroundImage",{get:function(){return this.getValue(e.backgroundImageProperty)},enumerable:!1,configurable:!0}),e.prototype.insertItemAt=function(n,r,i){if(!n.parent||i)if(n.isStandalone)r<0||r>=this._items.length?this._items.push(n):this._items.splice(r,0,n),n.setParent(this);else throw new Error(K.Strings.errors.elementTypeNotStandalone(n.getJsonTypeName()));else throw new Error(K.Strings.errors.elementAlreadyParented())},e.prototype.getItemsCollectionPropertyName=function(){return"items"},e.prototype.applyBackground=function(){this.backgroundImage.isValid()&&this.renderedElement&&this.backgroundImage.apply(this),t.prototype.applyBackground.call(this)},e.prototype.applyRTL=function(n){this.rtl!==void 0&&(n.dir=this.rtl?"rtl":"ltr")},e.prototype.internalRender=function(){this._renderedItems=[];var n=this.hostConfig,r=document.createElement("div");switch(this.applyRTL(r),r.classList.add(n.makeCssClassName("ac-container")),r.style.display="flex",r.style.flexDirection="column",ne.GlobalSettings.useAdvancedCardBottomTruncation&&(r.style.minHeight="-webkit-min-content"),this.getEffectiveVerticalContentAlignment()){case x.VerticalAlignment.Center:r.style.justifyContent="center";break;case x.VerticalAlignment.Bottom:r.style.justifyContent="flex-end";break;default:r.style.justifyContent="flex-start";break}if(this._items.length>0)for(var i=0,o=this._items;i<o.length;i++){var a=o[i],l=this.isElementAllowed(a)?a.render():void 0;l&&(this._renderedItems.length>0&&a.separatorElement&&(a.separatorElement.style.flex="0 0 auto",Z.appendChild(r,a.separatorElement)),Z.appendChild(r,l),this._renderedItems.push(a))}else if(this.isDesignMode()){var s=this.createPlaceholderElement();s.style.width="100%",s.style.height="100%",r.appendChild(s)}return r},e.prototype.truncateOverflow=function(n){if(this.renderedElement){for(var r=this.renderedElement.offsetTop+n+1,i=function(s){var c=s.renderedElement;if(c)switch(Z.getFitStatus(c,r)){case x.ContainerFitStatus.FullyInContainer:var u=s.resetOverflow();u&&i(s);break;case x.ContainerFitStatus.Overflowing:var d=r-c.offsetTop;s.handleOverflow(d);break;case x.ContainerFitStatus.FullyOutOfContainer:s.handleOverflow(0);break}},o=0,a=this._items;o<a.length;o++){var l=a[o];i(l)}return!0}return!1},e.prototype.undoOverflowTruncation=function(){for(var n=0,r=this._items;n<r.length;n++){var i=r[n];i.resetOverflow()}},e.prototype.getHasBackground=function(n){n===void 0&&(n=!1);var r=n?!1:this.backgroundImage.isValid();return r||t.prototype.getHasBackground.call(this,n)},e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this.clear(),this.setShouldFallback(!1);var i=n[this.getItemsCollectionPropertyName()];if(Array.isArray(i))for(var o=0,a=i;o<a.length;o++){var l=a[o],s=r.parseElement(this,l,this.forbiddenChildElements(),!this.isDesignMode());s&&this.insertItemAt(s,-1,!0)}},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r);var i=this.getItemsCollectionPropertyName();r.serializeArray(n,i,this._items)},Object.defineProperty(e.prototype,"isSelectable",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.getEffectivePadding=function(){return ne.GlobalSettings.removePaddingFromContainersWithBackgroundImage&&!this.getHasBackground(!0)?new ne.PaddingDefinition:t.prototype.getEffectivePadding.call(this)},e.prototype.getEffectiveVerticalContentAlignment=function(){if(this.verticalContentAlignment!==void 0)return this.verticalContentAlignment;var n=this.getParentContainer();return n?n.getEffectiveVerticalContentAlignment():x.VerticalAlignment.Top},e.prototype.getItemCount=function(){return this._items.length},e.prototype.getItemAt=function(n){return this._items[n]},e.prototype.getFirstVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedItems&&this._renderedItems.length>0)for(var n=0,r=this._renderedItems;n<r.length;n++){var i=r[n];if(i.isVisible)return i}},e.prototype.getLastVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedItems&&this._renderedItems.length>0){for(var n=this._renderedItems.length-1;n>=0;n--)if(this._renderedItems[n].isVisible)return this._renderedItems[n]}},e.prototype.getJsonTypeName=function(){return"Container"},e.prototype.isFirstElement=function(n){for(var r=this.isDesignMode(),i=0,o=this._items;i<o.length;i++){var a=o[i];if(a.isVisible||r)return a===n}return!1},e.prototype.isLastElement=function(n){for(var r=this.isDesignMode(),i=this._items.length-1;i>=0;i--)if(this._items[i].isVisible||r)return this._items[i]===n;return!1},e.prototype.isRtl=function(){if(this.rtl!==void 0)return this.rtl;var n=this.getParentContainer();return n?n.isRtl():!1},e.prototype.isBleedingAtTop=function(){var n=this.getFirstVisibleRenderedItem();return this.isBleeding()||(n?n.isBleedingAtTop():!1)},e.prototype.isBleedingAtBottom=function(){var n=this.getLastVisibleRenderedItem();return this.isBleeding()||(n?n.isBleedingAtBottom()&&n.getEffectiveStyle()===this.getEffectiveStyle():!1)},e.prototype.indexOf=function(n){return this._items.indexOf(n)},e.prototype.addItem=function(n){this.insertItemAt(n,-1,!1)},e.prototype.insertItemBefore=function(n,r){this.insertItemAt(n,this._items.indexOf(r),!1)},e.prototype.insertItemAfter=function(n,r){this.insertItemAt(n,this._items.indexOf(r)+1,!1)},e.prototype.removeItem=function(n){var r=this._items.indexOf(n);return r>=0?(this._items.splice(r,1),n.setParent(void 0),this.updateLayout(),!0):!1},e.prototype.clear=function(){this._items=[],this._renderedItems=[]},e.prototype.getResourceInformation=function(){var n=t.prototype.getResourceInformation.call(this);return this.backgroundImage.isValid()&&n.push({url:this.backgroundImage.url,mimeType:"image"}),n},e.prototype.getActionById=function(n){var r=t.prototype.getActionById.call(this,n);if(!r&&(this.selectAction&&(r=this.selectAction.getActionById(n)),!r))for(var i=0,o=this._items;i<o.length;i++){var a=o[i];if(r=a.getActionById(n),r)break}return r},Object.defineProperty(e.prototype,"padding",{get:function(){return this.getPadding()},set:function(n){this.setPadding(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectAction",{get:function(){return this._selectAction},set:function(n){this._selectAction=n},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bleed",{get:function(){return this.getBleed()},set:function(n){this.setBleed(n)},enumerable:!1,configurable:!0}),e.backgroundImageProperty=new g.SerializableObjectProperty(g.Versions.v1_0,"backgroundImage",Uc),e.verticalContentAlignmentProperty=new g.EnumProperty(g.Versions.v1_1,"verticalContentAlignment",x.VerticalAlignment),e.rtlProperty=new g.BoolProperty(g.Versions.v1_0,"rtl"),B([(0,g.property)(e.backgroundImageProperty)],e.prototype,"backgroundImage",null),B([(0,g.property)(e.verticalContentAlignmentProperty)],e.prototype,"verticalContentAlignment",void 0),B([(0,g.property)(e.rtlProperty)],e.prototype,"rtl",void 0),e}(Go);M.Container=bn;var oi=function(t){Q(e,t);function e(n){n===void 0&&(n="stretch");var r=t.call(this)||this;return r.width="stretch",r._computedWeight=0,r.width=n,r}return e.prototype.adjustRenderedElementSize=function(n){var r=20;this.isDesignMode()?(n.style.minWidth="20px",n.style.minHeight=(this.minPixelHeight?Math.max(this.minPixelHeight,r):r)+"px"):(n.style.minWidth="0",this.minPixelHeight&&(n.style.minHeight=this.minPixelHeight+"px")),this.width==="auto"?n.style.flex="0 1 auto":this.width==="stretch"?n.style.flex="1 1 50px":this.width instanceof ne.SizeAndUnit&&(this.width.unit===x.SizeUnit.Pixel?(n.style.flex="0 0 auto",n.style.width=this.width.physicalSize+"px"):n.style.flex="1 1 "+(this._computedWeight>0?this._computedWeight:this.width.physicalSize)+"%")},e.prototype.shouldSerialize=function(n){return!0},Object.defineProperty(e.prototype,"separatorOrientation",{get:function(){return x.Orientation.Vertical},enumerable:!1,configurable:!0}),e.prototype.getJsonTypeName=function(){return"Column"},Object.defineProperty(e.prototype,"hasVisibleSeparator",{get:function(){return this.parent&&this.parent instanceof $o?this.separatorElement!==void 0&&!this.parent.isLeftMostElement(this):!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),e.widthProperty=new g.CustomProperty(g.Versions.v1_0,"width",function(n,r,i,o){var a=r.defaultValue,l=i[r.name],s=!1;if(typeof l=="number"&&!isNaN(l))a=new ne.SizeAndUnit(l,x.SizeUnit.Weight);else if(l==="auto"||l==="stretch")a=l;else if(typeof l=="string")try{a=ne.SizeAndUnit.parse(l),a.unit===x.SizeUnit.Pixel&&r.targetVersion.compareTo(o.targetVersion)>0&&(s=!0)}catch{s=!0}else s=!0;return s&&(o.logParseEvent(n,x.ValidationEvent.InvalidPropertyValue,K.Strings.errors.invalidColumnWidth(l)),a="auto"),a},function(n,r,i,o,a){o instanceof ne.SizeAndUnit?o.unit===x.SizeUnit.Pixel?a.serializeValue(i,"width",o.physicalSize+"px"):a.serializeNumber(i,"width",o.physicalSize):a.serializeValue(i,"width",o)},"stretch"),B([(0,g.property)(e.widthProperty)],e.prototype,"width",void 0),e}(bn);M.Column=oi;var $o=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._columns=[],n}return e.prototype.createColumnInstance=function(n,r){return r.parseCardObject(this,n,[],!this.isDesignMode(),function(i){return!i||i==="Column"?new oi:void 0},function(i,o){r.logParseEvent(void 0,x.ValidationEvent.ElementTypeNotAllowed,K.Strings.errors.elementTypeNotAllowed(i))})},e.prototype.internalRender=function(){if(this._renderedColumns=[],this._columns.length>0){var n=this.hostConfig,r=document.createElement("div");switch(r.className=n.makeCssClassName("ac-columnSet"),r.style.display="flex",ne.GlobalSettings.useAdvancedCardBottomTruncation&&(r.style.minHeight="-webkit-min-content"),this.getEffectiveHorizontalAlignment()){case x.HorizontalAlignment.Center:r.style.justifyContent="center";break;case x.HorizontalAlignment.Right:r.style.justifyContent="flex-end";break;default:r.style.justifyContent="flex-start";break}for(var i=0,o=0,a=this._columns;o<a.length;o++){var l=a[o];l.width instanceof ne.SizeAndUnit&&l.width.unit===x.SizeUnit.Weight&&(i+=l.width.physicalSize)}for(var s=0,c=this._columns;s<c.length;s++){var l=c[s];if(l.width instanceof ne.SizeAndUnit&&l.width.unit===x.SizeUnit.Weight&&i>0){var u=100/i*l.width.physicalSize;l._computedWeight=u}var d=l.render();d&&(this._renderedColumns.length>0&&l.separatorElement&&(l.separatorElement.style.flex="0 0 auto",Z.appendChild(r,l.separatorElement)),Z.appendChild(r,d),this._renderedColumns.push(l))}return this._renderedColumns.length>0?r:void 0}else return},e.prototype.truncateOverflow=function(n){for(var r=0,i=this._columns;r<i.length;r++){var o=i[r];o.handleOverflow(n)}return!0},e.prototype.undoOverflowTruncation=function(){for(var n=0,r=this._columns;n<r.length;n++){var i=r[n];i.resetOverflow()}},Object.defineProperty(e.prototype,"isSelectable",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this._columns=[],this._renderedColumns=[];var i=n.columns;if(Array.isArray(i))for(var o=0,a=i;o<a.length;o++){var l=a[o],s=this.createColumnInstance(l,r);s&&this._columns.push(s)}},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),r.serializeArray(n,"columns",this._columns)},e.prototype.isFirstElement=function(n){for(var r=0,i=this._columns;r<i.length;r++){var o=i[r];if(o.isVisible)return o===n}return!1},e.prototype.isBleedingAtTop=function(){if(this.isBleeding())return!0;if(this._renderedColumns&&this._renderedColumns.length>0)for(var n=0,r=this._columns;n<r.length;n++){var i=r[n];if(i.isBleedingAtTop())return!0}return!1},e.prototype.isBleedingAtBottom=function(){if(this.isBleeding())return!0;if(this._renderedColumns&&this._renderedColumns.length>0)for(var n=0,r=this._columns;n<r.length;n++){var i=r[n];if(i.isBleedingAtBottom())return!0}return!1},e.prototype.getItemCount=function(){return this._columns.length},e.prototype.getFirstVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedColumns&&this._renderedColumns.length>0)return this._renderedColumns[0]},e.prototype.getLastVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedColumns&&this._renderedColumns.length>0)return this._renderedColumns[this._renderedColumns.length-1]},e.prototype.getColumnAt=function(n){return this._columns[n]},e.prototype.getItemAt=function(n){return this.getColumnAt(n)},e.prototype.getJsonTypeName=function(){return"ColumnSet"},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n);for(var r=0,i=0,o=0,a=this._columns;o<a.length;o++){var l=a[o];typeof l.width=="number"?r++:l.width==="stretch"&&i++}r>0&&i>0&&n.addFailure(this,x.ValidationEvent.Hint,K.Strings.hints.dontUseWeightedAndStrecthedColumnsInSameSet())},e.prototype.addColumn=function(n){if(!n.parent)this._columns.push(n),n.setParent(this);else throw new Error(K.Strings.errors.columnAlreadyBelongsToAnotherSet())},e.prototype.removeItem=function(n){if(n instanceof oi){var r=this._columns.indexOf(n);if(r>=0)return this._columns.splice(r,1),n.setParent(void 0),this.updateLayout(),!0}return!1},e.prototype.indexOf=function(n){return n instanceof oi?this._columns.indexOf(n):-1},e.prototype.isLeftMostElement=function(n){return this._columns.indexOf(n)===0},e.prototype.isRightMostElement=function(n){return this._columns.indexOf(n)===this._columns.length-1},e.prototype.isTopElement=function(n){return this._columns.indexOf(n)>=0},e.prototype.isBottomElement=function(n){return this._columns.indexOf(n)>=0},e.prototype.getActionById=function(n){for(var r=void 0,i=0,o=this._columns;i<o.length;i++){var a=o[i];if(r=a.getActionById(n),r)break}return r},Object.defineProperty(e.prototype,"bleed",{get:function(){return this.getBleed()},set:function(n){this.setBleed(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"padding",{get:function(){return this.getPadding()},set:function(n){this.setPadding(n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectAction",{get:function(){return this._selectAction},set:function(n){this._selectAction=n},enumerable:!1,configurable:!0}),e}(Go);M.ColumnSet=$o;function vc(t){var e=t.getRootElement(),n=e&&e.onImageLoaded?e.onImageLoaded:We.onImageLoaded;n&&n(t)}function Cc(t,e,n){var r=t.getRootElement(),i=r&&r.onAnchorClicked?r.onAnchorClicked:We.onAnchorClicked;return i!==void 0?i(t,e,n):!1}function Yy(t){var e=t.parent?t.parent.getRootElement():void 0,n=e&&e.onExecuteAction?e.onExecuteAction:We.onExecuteAction;t.prepareForExecution()&&n&&n(t)}function xc(t,e){var n=t.parent?t.parent.getRootElement():void 0,r=n&&n.onInlineCardExpanded?n.onInlineCardExpanded:We.onInlineCardExpanded;r&&r(t,e)}function Uy(t){var e=t.getRootElement(),n=e&&e.onInputValueChanged?e.onInputValueChanged:We.onInputValueChanged;n&&n(t)}function Do(t,e){e===void 0&&(e=!0);var n=t.getRootElement();e&&n.updateLayout();var r=n,i=r&&r.onElementVisibilityChanged?r.onElementVisibilityChanged:We.onElementVisibilityChanged;i!==void 0&&i(t)}function jy(t,e){var n=t.parent?t.parent.getRootElement():void 0,r=n&&n.onDisplayOverflowActionMenu?n.onDisplayOverflowActionMenu:We.onDisplayOverflowActionMenu;return r!==void 0?r(t.getActions(),e):!1}function Qy(t,e){var n=t.parent?t.parent.getRootElement():void 0,r=n&&n.onRenderOverflowActions?n.onRenderOverflowActions:We.onRenderOverflowActions;return r!==void 0?r(t.getActions(),e):!1}var Wo=function(t){Q(e,t);function e(){var n=t.call(this)||this;return n._actionCollection=new Gc(n),n}return e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this.parseActions(n,r)},e.prototype.parseActions=function(n,r){this._actionCollection.parse(n.actions,r)},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),this._actionCollection.toJSON(n,"actions",r)},e.prototype.internalRender=function(){var n=t.prototype.internalRender.call(this);if(n){var r=this._actionCollection.render(this.hostConfig.actions.actionsOrientation);return r&&(Z.appendChild(n,Lo(this.hostConfig,{spacing:this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)},x.Orientation.Horizontal)),Z.appendChild(n,r)),this.renderIfEmpty||n.children.length>0?n:void 0}else return},e.prototype.getHasExpandedAction=function(){return this.renderedActionCount===0?!1:this.renderedActionCount===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},Object.defineProperty(e.prototype,"renderedActionCount",{get:function(){return this._actionCollection.renderedActionCount},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"renderIfEmpty",{get:function(){return!1},enumerable:!1,configurable:!0}),e.prototype.releaseDOMResources=function(){t.prototype.releaseDOMResources.call(this),this._actionCollection.releaseDOMResources()},e.prototype.getActionCount=function(){return this._actionCollection.getActionCount()},e.prototype.getActionAt=function(n){return n>=0&&n<this.getActionCount()?this._actionCollection.getActionAt(n):t.prototype.getActionAt.call(this,n)},e.prototype.getActionById=function(n){var r=this._actionCollection.getActionById(n);return r||t.prototype.getActionById.call(this,n)},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this._actionCollection&&this._actionCollection.validateProperties(n)},e.prototype.isLastElement=function(n){return t.prototype.isLastElement.call(this,n)&&this._actionCollection.getActionCount()===0},e.prototype.addAction=function(n){this._actionCollection.addAction(n)},e.prototype.clear=function(){t.prototype.clear.call(this),this._actionCollection.clear()},e.prototype.getAllInputs=function(n){n===void 0&&(n=!0);var r=t.prototype.getAllInputs.call(this,n);return n&&r.push.apply(r,this._actionCollection.getAllInputs(n)),r},e.prototype.getResourceInformation=function(){var n=t.prototype.getResourceInformation.call(this);return n.push.apply(n,this._actionCollection.getResourceInformation()),n},e.prototype.isBleedingAtBottom=function(){return this._actionCollection.renderedActionCount===0?t.prototype.isBleedingAtBottom.call(this):this._actionCollection.getActionCount()===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},e.prototype.getForbiddenActionNames=function(){return[]},Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),e}(bn);M.ContainerWithActions=Wo;var jc=function(t){Q(e,t);function e(n,r){var i=t.call(this,n,r,void 0)||this;return i.targetVersion=n,i.name=r,i}return e.prototype.parse=function(n,r,i){var o=i.parseAction(n.parent,r[this.name],[],!1);if(o!==void 0){if(o instanceof si)return o;i.logParseEvent(n,x.ValidationEvent.ActionTypeNotAllowed,K.Strings.errors.actionTypeNotAllowed(o.getJsonTypeName()))}i.logParseEvent(n,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.propertyMustBeSet("action"))},e.prototype.toJSON=function(n,r,i,o){o.serializeValue(r,this.name,i?i.toJSON(o):void 0,void 0,!0)},e}(g.PropertyDefinition);M.RefreshActionProperty=jc;var Qc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return Object.defineProperty(e.prototype,"action",{get:function(){return this.getValue(e.actionProperty)},set:function(n){this.setValue(e.actionProperty,n),n&&n.setParent(this.parent)},enumerable:!1,configurable:!0}),e.prototype.getSchemaKey=function(){return"RefreshDefinition"},e.actionProperty=new jc(g.Versions.v1_4,"action"),e.userIdsProperty=new g.StringArrayProperty(g.Versions.v1_4,"userIds"),B([(0,g.property)(e.actionProperty)],e.prototype,"action",null),B([(0,g.property)(e.userIdsProperty)],e.prototype,"userIds",void 0),e}(g.SerializableObject);M.RefreshDefinition=Qc;var Jc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getSchemaKey=function(){return"AuthCardButton"},e.typeProperty=new g.StringProperty(g.Versions.v1_4,"type"),e.titleProperty=new g.StringProperty(g.Versions.v1_4,"title"),e.imageProperty=new g.StringProperty(g.Versions.v1_4,"image"),e.valueProperty=new g.StringProperty(g.Versions.v1_4,"value"),B([(0,g.property)(e.typeProperty)],e.prototype,"type",void 0),B([(0,g.property)(e.titleProperty)],e.prototype,"title",void 0),B([(0,g.property)(e.imageProperty)],e.prototype,"image",void 0),B([(0,g.property)(e.valueProperty)],e.prototype,"value",void 0),e}(g.SerializableObject);M.AuthCardButton=Jc;var Xc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getSchemaKey=function(){return"TokenExchangeResource"},e.idProperty=new g.StringProperty(g.Versions.v1_4,"id"),e.uriProperty=new g.StringProperty(g.Versions.v1_4,"uri"),e.providerIdProperty=new g.StringProperty(g.Versions.v1_4,"providerId"),B([(0,g.property)(e.idProperty)],e.prototype,"id",void 0),B([(0,g.property)(e.uriProperty)],e.prototype,"uri",void 0),B([(0,g.property)(e.providerIdProperty)],e.prototype,"providerId",void 0),e}(g.SerializableObject);M.TokenExchangeResource=Xc;var Kc=function(t){Q(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getSchemaKey=function(){return"Authentication"},e.textProperty=new g.StringProperty(g.Versions.v1_4,"text"),e.connectionNameProperty=new g.StringProperty(g.Versions.v1_4,"connectionName"),e.buttonsProperty=new g.SerializableObjectCollectionProperty(g.Versions.v1_4,"buttons",Jc),e.tokenExchangeResourceProperty=new g.SerializableObjectProperty(g.Versions.v1_4,"tokenExchangeResource",Xc,!0),B([(0,g.property)(e.textProperty)],e.prototype,"text",void 0),B([(0,g.property)(e.connectionNameProperty)],e.prototype,"connectionName",void 0),B([(0,g.property)(e.buttonsProperty)],e.prototype,"buttons",void 0),B([(0,g.property)(e.tokenExchangeResourceProperty)],e.prototype,"tokenExchangeResource",void 0),e}(g.SerializableObject);M.Authentication=Kc;var We=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.designMode=!1,n}return Object.defineProperty(e.prototype,"refresh",{get:function(){return this.getValue(e.refreshProperty)},set:function(n){this.setValue(e.refreshProperty,n),n&&(n.parent=this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"processMarkdown",{get:function(){throw new Error(K.Strings.errors.processMarkdownEventRemoved())},set:function(n){throw new Error(K.Strings.errors.processMarkdownEventRemoved())},enumerable:!1,configurable:!0}),e.applyMarkdown=function(n){var r={didProcess:!1};if(e.onProcessMarkdown)e.onProcessMarkdown(n,r);else if(window.markdownit){var i=window.markdownit;r.outputHtml=i().render(n),r.didProcess=!0}else e._haveWarnedAboutNoMarkdownProcessing||(console.warn(K.Strings.errors.markdownProcessingNotEnabled),e._haveWarnedAboutNoMarkdownProcessing=!0);return r},e.prototype.isVersionSupported=function(){if(this.bypassVersionCheck)return!0;var n=!this.version||!this.version.isValid||this.maxVersion.major<this.version.major||this.maxVersion.major===this.version.major&&this.maxVersion.minor<this.version.minor;return!n},e.prototype.getDefaultSerializationContext=function(){return new Un(this.version)},e.prototype.getItemsCollectionPropertyName=function(){return"body"},e.prototype.internalParse=function(n,r){this._fallbackCard=void 0;var i=r.parseElement(void 0,n.fallback,this.forbiddenChildElements(),!this.isDesignMode());i&&(this._fallbackCard=new e,this._fallbackCard.addItem(i)),t.prototype.internalParse.call(this,n,r)},e.prototype.internalToJSON=function(n,r){this.setValue(e.versionProperty,r.targetVersion),t.prototype.internalToJSON.call(this,n,r)},e.prototype.internalRender=function(){var n=t.prototype.internalRender.call(this);return ne.GlobalSettings.useAdvancedCardBottomTruncation&&n&&n.style.removeProperty("minHeight"),n},e.prototype.getHasBackground=function(n){return n===void 0&&(n=!1),!0},e.prototype.getDefaultPadding=function(){return new ne.PaddingDefinition(x.Spacing.Padding,x.Spacing.Padding,x.Spacing.Padding,x.Spacing.Padding)},e.prototype.shouldSerialize=function(n){return!0},Object.defineProperty(e.prototype,"renderIfEmpty",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bypassVersionCheck",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"allowCustomStyle",{get:function(){return this.hostConfig.adaptiveCard&&this.hostConfig.adaptiveCard.allowCustomStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasBackground",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.getJsonTypeName=function(){return"AdaptiveCard"},e.prototype.internalValidateProperties=function(n){t.prototype.internalValidateProperties.call(this,n),this.getValue(Ve.typeNameProperty)!=="AdaptiveCard"&&n.addFailure(this,x.ValidationEvent.MissingCardType,K.Strings.errors.invalidCardType()),!this.bypassVersionCheck&&!this.version?n.addFailure(this,x.ValidationEvent.PropertyCantBeNull,K.Strings.errors.propertyMustBeSet("version")):this.isVersionSupported()||n.addFailure(this,x.ValidationEvent.UnsupportedCardVersion,K.Strings.errors.unsupportedCardVersion(this.version.toString(),this.maxVersion.toString()))},e.prototype.render=function(n){var r;return this.shouldFallback()&&this._fallbackCard?(this._fallbackCard.hostConfig=this.hostConfig,r=this._fallbackCard.render()):(r=t.prototype.render.call(this),r&&(r.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard")),ne.GlobalSettings.setTabIndexAtCardRoot&&(r.tabIndex=0),this.speak&&r.setAttribute("aria-label",this.speak))),n&&(Z.appendChild(n,r),this.updateLayout()),r},e.prototype.updateLayout=function(n){if(n===void 0&&(n=!0),t.prototype.updateLayout.call(this,n),ne.GlobalSettings.useAdvancedCardBottomTruncation&&this.isDisplayed()){var r=this.hostConfig.getEffectiveSpacing(x.Spacing.Default);this.handleOverflow(this.renderedElement.offsetHeight-r)}},e.prototype.shouldFallback=function(){return t.prototype.shouldFallback.call(this)||!this.isVersionSupported()},Object.defineProperty(e.prototype,"hasVisibleSeparator",{get:function(){return!1},enumerable:!1,configurable:!0}),e.schemaUrl="http://adaptivecards.io/schemas/adaptive-card.json",e.$schemaProperty=new g.CustomProperty(g.Versions.v1_0,"$schema",function(n,r,i,o){return e.schemaUrl},function(n,r,i,o,a){a.serializeValue(i,r.name,e.schemaUrl)}),e.versionProperty=new g.CustomProperty(g.Versions.v1_0,"version",function(n,r,i,o){var a=g.Version.parse(i[r.name],o);return a===void 0&&(a=g.Versions.latest,o.logParseEvent(n,x.ValidationEvent.InvalidPropertyValue,K.Strings.errors.invalidCardVersion(a.toString()))),a},function(n,r,i,o,a){o!==void 0&&a.serializeValue(i,r.name,o.toString())},g.Versions.v1_0),e.fallbackTextProperty=new g.StringProperty(g.Versions.v1_0,"fallbackText"),e.speakProperty=new g.StringProperty(g.Versions.v1_0,"speak"),e.refreshProperty=new g.SerializableObjectProperty(g.Versions.v1_4,"refresh",Qc,!0),e.authenticationProperty=new g.SerializableObjectProperty(g.Versions.v1_4,"authentication",Kc,!0),e._haveWarnedAboutNoMarkdownProcessing=!1,B([(0,g.property)(e.versionProperty)],e.prototype,"version",void 0),B([(0,g.property)(e.fallbackTextProperty)],e.prototype,"fallbackText",void 0),B([(0,g.property)(e.speakProperty)],e.prototype,"speak",void 0),B([(0,g.property)(e.refreshProperty)],e.prototype,"refresh",null),B([(0,g.property)(e.authenticationProperty)],e.prototype,"authentication",void 0),e}(Wo);M.AdaptiveCard=We;var Jy=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.suppressStyle=!1,n}return e.prototype.getSchemaKey=function(){return"InlineAdaptiveCard"},e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.remove(We.$schemaProperty,We.versionProperty)},e.prototype.getDefaultPadding=function(){return new ne.PaddingDefinition(this.suppressStyle?x.Spacing.None:x.Spacing.Padding,x.Spacing.Padding,this.suppressStyle?x.Spacing.None:x.Spacing.Padding,x.Spacing.Padding)},Object.defineProperty(e.prototype,"bypassVersionCheck",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"defaultStyle",{get:function(){return this.suppressStyle?x.ContainerStyle.Default:this.hostConfig.actions.showCard.style?this.hostConfig.actions.showCard.style:x.ContainerStyle.Emphasis},enumerable:!1,configurable:!0}),e.prototype.render=function(n){var r=t.prototype.render.call(this,n);return r&&(r.setAttribute("aria-live","polite"),r.removeAttribute("tabindex")),r},e}(We),Un=function(t){Q(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._forbiddenTypes=new Set,n}return e.prototype.internalParseCardObject=function(n,r,i,o,a,l){var s=this,c=void 0;if(r&&typeof r=="object"){var u=new Set;this._forbiddenTypes.forEach(function(y){u.add(y)}),i.forEach(function(y){s._forbiddenTypes.add(y)});var d=Z.parseString(r.type);if(d&&this._forbiddenTypes.has(d))l(d,x.TypeErrorType.ForbiddenType);else{var f=!1;if(c=a(d),c?(c.setParent(n),c.parse(r,this),f=ne.GlobalSettings.enableFallback&&o&&c.shouldFallback()):(f=ne.GlobalSettings.enableFallback&&o,l(d,x.TypeErrorType.UnknownType)),f){var p=r.fallback;!p&&n&&n.setShouldFallback(!0),typeof p=="string"&&p.toLowerCase()==="drop"?c=void 0:typeof p=="object"&&(c=this.internalParseCardObject(n,p,i,!0,a,l))}}this._forbiddenTypes=u}return c},e.prototype.cardObjectParsed=function(n,r){n instanceof en&&this.onParseAction?this.onParseAction(n,r,this):n instanceof Ve&&this.onParseElement&&this.onParseElement(n,r,this)},e.prototype.shouldSerialize=function(n){return n instanceof en?this.actionRegistry.findByName(n.getJsonTypeName())!==void 0:n instanceof Ve?this.elementRegistry.findByName(n.getJsonTypeName())!==void 0:!0},e.prototype.parseCardObject=function(n,r,i,o,a,l){var s=new Set(i),c=this.internalParseCardObject(n,r,s,o,a,l);return c!==void 0&&this.cardObjectParsed(c,r),c},e.prototype.parseElement=function(n,r,i,o){var a=this;return this.parseCardObject(n,r,i,o,function(l){return a.elementRegistry.createInstance(l,a.targetVersion)},function(l,s){s===x.TypeErrorType.UnknownType?a.logParseEvent(void 0,x.ValidationEvent.UnknownElementType,K.Strings.errors.unknownElementType(l)):a.logParseEvent(void 0,x.ValidationEvent.ElementTypeNotAllowed,K.Strings.errors.elementTypeNotAllowed(l))})},e.prototype.parseAction=function(n,r,i,o){var a=this;return this.parseCardObject(n,r,i,o,function(l){return a.actionRegistry.createInstance(l,a.targetVersion)},function(l,s){s===x.TypeErrorType.UnknownType?a.logParseEvent(void 0,x.ValidationEvent.UnknownActionType,K.Strings.errors.unknownActionType(l)):a.logParseEvent(void 0,x.ValidationEvent.ActionTypeNotAllowed,K.Strings.errors.actionTypeNotAllowed(l))})},Object.defineProperty(e.prototype,"elementRegistry",{get:function(){var n;return(n=this._elementRegistry)!==null&&n!==void 0?n:Ce.GlobalRegistry.elements},enumerable:!1,configurable:!0}),e.prototype.setElementRegistry=function(n){this._elementRegistry=n},Object.defineProperty(e.prototype,"actionRegistry",{get:function(){var n;return(n=this._actionRegistry)!==null&&n!==void 0?n:Ce.GlobalRegistry.actions},enumerable:!1,configurable:!0}),e.prototype.setActionRegistry=function(n){this._actionRegistry=n},e}(g.BaseSerializationContext);M.SerializationContext=Un;Ce.GlobalRegistry.defaultElements.register("Container",bn);Ce.GlobalRegistry.defaultElements.register("TextBlock",mn);Ce.GlobalRegistry.defaultElements.register("RichTextBlock",Vo,g.Versions.v1_2);Ce.GlobalRegistry.defaultElements.register("TextRun",Wn,g.Versions.v1_2);Ce.GlobalRegistry.defaultElements.register("Image",yr);Ce.GlobalRegistry.defaultElements.register("ImageSet",Ic);Ce.GlobalRegistry.defaultElements.register("Media",Mc,g.Versions.v1_1);Ce.GlobalRegistry.defaultElements.register("FactSet",wc);Ce.GlobalRegistry.defaultElements.register("ColumnSet",$o);Ce.GlobalRegistry.defaultElements.register("ActionSet",$c,g.Versions.v1_2);Ce.GlobalRegistry.defaultElements.register("Input.Text",zc);Ce.GlobalRegistry.defaultElements.register("Input.Date",Nc);Ce.GlobalRegistry.defaultElements.register("Input.Time",Hc);Ce.GlobalRegistry.defaultElements.register("Input.Number",Vc);Ce.GlobalRegistry.defaultElements.register("Input.ChoiceSet",Lc);Ce.GlobalRegistry.defaultElements.register("Input.Toggle",Oc);Ce.GlobalRegistry.defaultActions.register(Mo.JsonTypeName,Mo);Ce.GlobalRegistry.defaultActions.register(Bo.JsonTypeName,Bo);Ce.GlobalRegistry.defaultActions.register(Yn.JsonTypeName,Yn);Ce.GlobalRegistry.defaultActions.register(zo.JsonTypeName,zo,g.Versions.v1_2);Ce.GlobalRegistry.defaultActions.register(si.JsonTypeName,si,g.Versions.v1_4)});function Zc(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Yo(t={},e={}){Object.keys(e).forEach(n=>{typeof t[n]>"u"?t[n]=e[n]:Zc(e[n])&&Zc(t[n])&&Object.keys(e[n]).length>0&&Yo(t[n],e[n])})}function fe(){let t=typeof document<"u"?document:{};return Yo(t,eu),t}function re(){let t=typeof window<"u"?window:{};return Yo(t,Xy),t}var eu,Xy,ve=O(()=>{eu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};Xy={document:eu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}}});function Ky(t){let e=t.__proto__;Object.defineProperty(t,"__proto__",{get(){return e},set(n){e.__proto__=n}})}function Ar(t=[]){let e=[];return t.forEach(n=>{Array.isArray(n)?e.push(...Ar(n)):e.push(n)}),e}function tu(t,e){return Array.prototype.filter.call(t,e)}function Zy(t){let e=[];for(let n=0;n<t.length;n+=1)e.indexOf(t[n])===-1&&e.push(t[n]);return e}function eb(t,e){if(typeof t!="string")return[t];let n=[],r=e.querySelectorAll(t);for(let i=0;i<r.length;i+=1)n.push(r[i]);return n}function oe(t,e){let n=re(),r=fe(),i=[];if(!e&&t instanceof Vt)return t;if(!t)return new Vt(i);if(typeof t=="string"){let o=t.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){let a="div";o.indexOf("<li")===0&&(a="ul"),o.indexOf("<tr")===0&&(a="tbody"),(o.indexOf("<td")===0||o.indexOf("<th")===0)&&(a="tr"),o.indexOf("<tbody")===0&&(a="table"),o.indexOf("<option")===0&&(a="select");let l=r.createElement(a);l.innerHTML=o;for(let s=0;s<l.childNodes.length;s+=1)i.push(l.childNodes[s])}else i=eb(t.trim(),e||r)}else if(t.nodeType||t===n||t===r)i.push(t);else if(Array.isArray(t)){if(t instanceof Vt)return t;i=t}return new Vt(Zy(i))}function nu(...t){let e=Ar(t.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...e)}),this}function ru(...t){let e=Ar(t.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...e)}),this}function iu(...t){let e=Ar(t.map(n=>n.split(" ")));this.forEach(n=>{e.forEach(r=>{n.classList.toggle(r)})})}function ou(...t){let e=Ar(t.map(n=>n.split(" ")));return tu(this,n=>e.filter(r=>n.classList.contains(r)).length>0).length>0}function au(t,e){if(arguments.length===1&&typeof t=="string")return this[0]?this[0].getAttribute(t):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(t,e);else for(let r in t)this[n][r]=t[r],this[n].setAttribute(r,t[r]);return this}function su(t){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this}function lu(t){for(let e=0;e<this.length;e+=1)this[e].style.transform=t;return this}function cu(t){for(let e=0;e<this.length;e+=1)this[e].style.transitionDuration=typeof t!="string"?`${t}ms`:t;return this}function uu(...t){let[e,n,r,i]=t;typeof t[1]=="function"&&([e,r,i]=t,n=void 0),i||(i=!1);function o(c){let u=c.target;if(!u)return;let d=c.target.dom7EventData||[];if(d.indexOf(c)<0&&d.unshift(c),oe(u).is(n))r.apply(u,d);else{let f=oe(u).parents();for(let p=0;p<f.length;p+=1)oe(f[p]).is(n)&&r.apply(f[p],d)}}function a(c){let u=c&&c.target?c.target.dom7EventData||[]:[];u.indexOf(c)<0&&u.unshift(c),r.apply(this,u)}let l=e.split(" "),s;for(let c=0;c<this.length;c+=1){let u=this[c];if(n)for(s=0;s<l.length;s+=1){let d=l[s];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[d]||(u.dom7LiveListeners[d]=[]),u.dom7LiveListeners[d].push({listener:r,proxyListener:o}),u.addEventListener(d,o,i)}else for(s=0;s<l.length;s+=1){let d=l[s];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[d]||(u.dom7Listeners[d]=[]),u.dom7Listeners[d].push({listener:r,proxyListener:a}),u.addEventListener(d,a,i)}}return this}function du(...t){let[e,n,r,i]=t;typeof t[1]=="function"&&([e,r,i]=t,n=void 0),i||(i=!1);let o=e.split(" ");for(let a=0;a<o.length;a+=1){let l=o[a];for(let s=0;s<this.length;s+=1){let c=this[s],u;if(!n&&c.dom7Listeners?u=c.dom7Listeners[l]:n&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[l]),u&&u.length)for(let d=u.length-1;d>=0;d-=1){let f=u[d];r&&f.listener===r||r&&f.listener&&f.listener.dom7proxy&&f.listener.dom7proxy===r?(c.removeEventListener(l,f.proxyListener,i),u.splice(d,1)):r||(c.removeEventListener(l,f.proxyListener,i),u.splice(d,1))}}}return this}function fu(...t){let e=re(),n=t[0].split(" "),r=t[1];for(let i=0;i<n.length;i+=1){let o=n[i];for(let a=0;a<this.length;a+=1){let l=this[a];if(e.CustomEvent){let s=new e.CustomEvent(o,{detail:r,bubbles:!0,cancelable:!0});l.dom7EventData=t.filter((c,u)=>u>0),l.dispatchEvent(s),l.dom7EventData=[],delete l.dom7EventData}}}return this}function pu(t){let e=this;function n(r){r.target===this&&(t.call(this,r),e.off("transitionend",n))}return t&&e.on("transitionend",n),this}function hu(t){if(this.length>0){if(t){let e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function gu(t){if(this.length>0){if(t){let e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function mu(){if(this.length>0){let t=re(),e=fe(),n=this[0],r=n.getBoundingClientRect(),i=e.body,o=n.clientTop||i.clientTop||0,a=n.clientLeft||i.clientLeft||0,l=n===t?t.scrollY:n.scrollTop,s=n===t?t.scrollX:n.scrollLeft;return{top:r.top+l-o,left:r.left+s-a}}return null}function yu(){let t=re();return this[0]?t.getComputedStyle(this[0],null):{}}function bu(t,e){let n=re(),r;if(arguments.length===1)if(typeof t=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(t)}else{for(r=0;r<this.length;r+=1)for(let i in t)this[r].style[i]=t[i];return this}if(arguments.length===2&&typeof t=="string"){for(r=0;r<this.length;r+=1)this[r].style[t]=e;return this}return this}function vu(t){return t?(this.forEach((e,n)=>{t.apply(e,[e,n])}),this):this}function Cu(t){let e=tu(this,t);return oe(e)}function xu(t){if(typeof t>"u")return this[0]?this[0].innerHTML:null;for(let e=0;e<this.length;e+=1)this[e].innerHTML=t;return this}function Au(t){if(typeof t>"u")return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=t;return this}function Eu(t){let e=re(),n=fe(),r=this[0],i,o;if(!r||typeof t>"u")return!1;if(typeof t=="string"){if(r.matches)return r.matches(t);if(r.webkitMatchesSelector)return r.webkitMatchesSelector(t);if(r.msMatchesSelector)return r.msMatchesSelector(t);for(i=oe(t),o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}if(t===n)return r===n;if(t===e)return r===e;if(t.nodeType||t instanceof Vt){for(i=t.nodeType?[t]:t,o=0;o<i.length;o+=1)if(i[o]===r)return!0;return!1}return!1}function Su(){let t=this[0],e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function wu(t){if(typeof t>"u")return this;let e=this.length;if(t>e-1)return oe([]);if(t<0){let n=e+t;return n<0?oe([]):oe([this[n]])}return oe([this[t]])}function Iu(...t){let e,n=fe();for(let r=0;r<t.length;r+=1){e=t[r];for(let i=0;i<this.length;i+=1)if(typeof e=="string"){let o=n.createElement("div");for(o.innerHTML=e;o.firstChild;)this[i].appendChild(o.firstChild)}else if(e instanceof Vt)for(let o=0;o<e.length;o+=1)this[i].appendChild(e[o]);else this[i].appendChild(e)}return this}function ku(t){let e=fe(),n,r;for(n=0;n<this.length;n+=1)if(typeof t=="string"){let i=e.createElement("div");for(i.innerHTML=t,r=i.childNodes.length-1;r>=0;r-=1)this[n].insertBefore(i.childNodes[r],this[n].childNodes[0])}else if(t instanceof Vt)for(r=0;r<t.length;r+=1)this[n].insertBefore(t[r],this[n].childNodes[0]);else this[n].insertBefore(t,this[n].childNodes[0]);return this}function Tu(t){return this.length>0?t?this[0].nextElementSibling&&oe(this[0].nextElementSibling).is(t)?oe([this[0].nextElementSibling]):oe([]):this[0].nextElementSibling?oe([this[0].nextElementSibling]):oe([]):oe([])}function _u(t){let e=[],n=this[0];if(!n)return oe([]);for(;n.nextElementSibling;){let r=n.nextElementSibling;t?oe(r).is(t)&&e.push(r):e.push(r),n=r}return oe(e)}function Pu(t){if(this.length>0){let e=this[0];return t?e.previousElementSibling&&oe(e.previousElementSibling).is(t)?oe([e.previousElementSibling]):oe([]):e.previousElementSibling?oe([e.previousElementSibling]):oe([])}return oe([])}function Fu(t){let e=[],n=this[0];if(!n)return oe([]);for(;n.previousElementSibling;){let r=n.previousElementSibling;t?oe(r).is(t)&&e.push(r):e.push(r),n=r}return oe(e)}function Du(t){let e=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(t?oe(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return oe(e)}function Bu(t){let e=[];for(let n=0;n<this.length;n+=1){let r=this[n].parentNode;for(;r;)t?oe(r).is(t)&&e.push(r):e.push(r),r=r.parentNode}return oe(e)}function Mu(t){let e=this;return typeof t>"u"?oe([]):(e.is(t)||(e=e.parents(t).eq(0)),e)}function zu(t){let e=[];for(let n=0;n<this.length;n+=1){let r=this[n].querySelectorAll(t);for(let i=0;i<r.length;i+=1)e.push(r[i])}return oe(e)}function Ou(t){let e=[];for(let n=0;n<this.length;n+=1){let r=this[n].children;for(let i=0;i<r.length;i+=1)(!t||oe(r[i]).is(t))&&e.push(r[i])}return oe(e)}function Ru(){for(let t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this}function Ae(t){function e(...n){if(typeof n[0]>"u"){for(let r=0;r<this.length;r+=1)tb.indexOf(t)<0&&(t in this[r]?this[r][t]():oe(this[r]).trigger(t));return this}return this.on(t,...n)}return e}var Vt,tb,yS,bS,vS,CS,xS,AS,ES,SS,wS,IS,kS,TS,_S,PS,FS,DS,BS,MS,zS,OS,RS,LS,Lu=O(()=>{ve();Vt=class extends Array{constructor(e){typeof e=="number"?super(e):(super(...e||[]),Ky(this))}};oe.fn=Vt.prototype;tb="resize scroll".split(" ");yS=Ae("click"),bS=Ae("blur"),vS=Ae("focus"),CS=Ae("focusin"),xS=Ae("focusout"),AS=Ae("keyup"),ES=Ae("keydown"),SS=Ae("keypress"),wS=Ae("submit"),IS=Ae("change"),kS=Ae("mousedown"),TS=Ae("mousemove"),_S=Ae("mouseup"),PS=Ae("mouseenter"),FS=Ae("mouseleave"),DS=Ae("mouseout"),BS=Ae("mouseover"),MS=Ae("touchstart"),zS=Ae("touchend"),OS=Ae("touchmove"),RS=Ae("resize"),LS=Ae("scroll")});var Vu,R,me=O(()=>{Lu();Vu={addClass:nu,removeClass:ru,hasClass:ou,toggleClass:iu,attr:au,removeAttr:su,transform:lu,transition:cu,on:uu,off:du,trigger:fu,transitionEnd:pu,outerWidth:hu,outerHeight:gu,styles:yu,offset:mu,css:bu,each:vu,html:xu,text:Au,is:Eu,index:Su,eq:wu,append:Iu,prepend:ku,next:Tu,nextAll:_u,prev:Pu,prevAll:Fu,parent:Du,parents:Bu,closest:Mu,find:zu,children:Ou,filter:Cu,remove:Ru};Object.keys(Vu).forEach(t=>{Object.defineProperty(oe.fn,t,{value:Vu[t],writable:!0})});R=oe});function Nu(t){let e=t;Object.keys(e).forEach(n=>{try{e[n]=null}catch{}try{delete e[n]}catch{}})}function Xe(t,e=0){return setTimeout(t,e)}function Ie(){return Date.now()}function nb(t){let e=re(),n;return e.getComputedStyle&&(n=e.getComputedStyle(t,null)),!n&&t.currentStyle&&(n=t.currentStyle),n||(n=t.style),n}function Er(t,e="x"){let n=re(),r,i,o,a=nb(t,null);return n.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(i==="none"?"":i)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=o.toString().split(",")),e==="x"&&(n.WebKitCSSMatrix?i=o.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(n.WebKitCSSMatrix?i=o.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function jn(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function rb(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function Ne(...t){let e=Object(t[0]),n=["__proto__","constructor","prototype"];for(let r=1;r<t.length;r+=1){let i=t[r];if(i!=null&&!rb(i)){let o=Object.keys(Object(i)).filter(a=>n.indexOf(a)<0);for(let a=0,l=o.length;a<l;a+=1){let s=o[a],c=Object.getOwnPropertyDescriptor(i,s);c!==void 0&&c.enumerable&&(jn(e[s])&&jn(i[s])?i[s].__swiper__?e[s]=i[s]:Ne(e[s],i[s]):!jn(e[s])&&jn(i[s])?(e[s]={},i[s].__swiper__?e[s]=i[s]:Ne(e[s],i[s])):e[s]=i[s])}}}return e}function vn(t,e,n){t.style.setProperty(e,n)}function ui({swiper:t,targetPosition:e,side:n}){let r=re(),i=-t.translate,o=null,a,l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",r.cancelAnimationFrame(t.cssModeFrameID);let s=e>i?"next":"prev",c=(d,f)=>s==="next"&&d>=f||s==="prev"&&d<=f,u=()=>{a=new Date().getTime(),o===null&&(o=a);let d=Math.max(Math.min((a-o)/l,1),0),f=.5-Math.cos(d*Math.PI)/2,p=i+f*(e-i);if(c(p,e)&&(p=e),t.wrapperEl.scrollTo({[n]:p}),c(p,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:p})}),r.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=r.requestAnimationFrame(u)};u()}var we=O(()=>{ve()});function ib(){let t=re(),e=fe();return{smoothScroll:e.documentElement&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch),passiveListener:function(){let r=!1;try{let i=Object.defineProperty({},"passive",{get(){r=!0}});t.addEventListener("testPassiveListener",null,i)}catch{}return r}(),gestures:function(){return"ongesturestart"in t}()}}function di(){return Uo||(Uo=ib()),Uo}var Uo,jo=O(()=>{ve()});function ob({userAgent:t}={}){let e=di(),n=re(),r=n.navigator.platform,i=t||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=i.match(/(Android);?[\s\/]+([\d.]+)?/),c=i.match(/(iPad).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r==="Win32",p=r==="MacIntel",y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&p&&e.touch&&y.indexOf(`${a}x${l}`)>=0&&(c=i.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),p=!1),s&&!f&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function Hu(t={}){return Qo||(Qo=ob(t)),Qo}var Qo,qu=O(()=>{ve();jo()});function ab(){let t=re();function e(){let n=t.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:e(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)}}function Gu(){return Jo||(Jo=ab()),Jo}var Jo,$u=O(()=>{ve()});function Xo({swiper:t,on:e,emit:n}){let r=re(),i=null,o=null,a=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(i=new ResizeObserver(u=>{o=r.requestAnimationFrame(()=>{let{width:d,height:f}=t,p=d,y=f;u.forEach(({contentBoxSize:h,contentRect:m,target:v})=>{v&&v!==t.el||(p=m?m.width:(h[0]||h).inlineSize,y=m?m.height:(h[0]||h).blockSize)}),(p!==d||y!==f)&&a()})}),i.observe(t.el))},s=()=>{o&&r.cancelAnimationFrame(o),i&&i.unobserve&&t.el&&(i.unobserve(t.el),i=null)},c=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof r.ResizeObserver<"u"){l();return}r.addEventListener("resize",a),r.addEventListener("orientationchange",c)}),e("destroy",()=>{s(),r.removeEventListener("resize",a),r.removeEventListener("orientationchange",c)})}var Wu=O(()=>{ve()});function Ko({swiper:t,extendParams:e,on:n,emit:r}){let i=[],o=re(),a=(c,u={})=>{let d=o.MutationObserver||o.WebkitMutationObserver,f=new d(p=>{if(p.length===1){r("observerUpdate",p[0]);return}let y=function(){r("observerUpdate",p[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});f.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),i.push(f)},l=()=>{if(!!t.params.observer){if(t.params.observeParents){let c=t.$el.parents();for(let u=0;u<c.length;u+=1)a(c[u])}a(t.$el[0],{childList:t.params.observeSlideChildren}),a(t.$wrapperEl[0],{attributes:!1})}},s=()=>{i.forEach(c=>{c.disconnect()}),i.splice(0,i.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var Yu=O(()=>{ve()});var Uu,ju=O(()=>{Uu={on(t,e,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;let i=n?"unshift":"push";return t.split(" ").forEach(o=>{r.eventsListeners[o]||(r.eventsListeners[o]=[]),r.eventsListeners[o][i](e)}),r},once(t,e,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(...o){r.off(t,i),i.__emitterProxy&&delete i.__emitterProxy,e.apply(r,o)}return i.__emitterProxy=e,r.on(t,i,n)},onAny(t,e){let n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;let r=e?"unshift":"push";return n.eventsAnyListeners.indexOf(t)<0&&n.eventsAnyListeners[r](t),n},offAny(t){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;let n=e.eventsAnyListeners.indexOf(t);return n>=0&&e.eventsAnyListeners.splice(n,1),e},off(t,e){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||t.split(" ").forEach(r=>{typeof e>"u"?n.eventsListeners[r]=[]:n.eventsListeners[r]&&n.eventsListeners[r].forEach((i,o)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&n.eventsListeners[r].splice(o,1)})}),n},emit(...t){let e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let n,r,i;return typeof t[0]=="string"||Array.isArray(t[0])?(n=t[0],r=t.slice(1,t.length),i=e):(n=t[0].events,r=t[0].data,i=t[0].context||e),r.unshift(i),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(l=>{l.apply(i,[a,...r])}),e.eventsListeners&&e.eventsListeners[a]&&e.eventsListeners[a].forEach(l=>{l.apply(i,r)})}),e}}});function Zo(){let t=this,e,n,r=t.$el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=r[0].clientWidth,typeof t.params.height<"u"&&t.params.height!==null?n=t.params.height:n=r[0].clientHeight,!(e===0&&t.isHorizontal()||n===0&&t.isVertical())&&(e=e-parseInt(r.css("padding-left")||0,10)-parseInt(r.css("padding-right")||0,10),n=n-parseInt(r.css("padding-top")||0,10)-parseInt(r.css("padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(n)&&(n=0),Object.assign(t,{width:e,height:n,size:t.isHorizontal()?e:n}))}var Qu=O(()=>{});function ea(){let t=this;function e(F){return t.isHorizontal()?F:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[F]}function n(F,w){return parseFloat(F.getPropertyValue(e(w))||0)}let r=t.params,{$wrapperEl:i,size:o,rtlTranslate:a,wrongRTL:l}=t,s=t.virtual&&r.virtual.enabled,c=s?t.virtual.slides.length:t.slides.length,u=i.children(`.${t.params.slideClass}`),d=s?t.virtual.slides.length:u.length,f=[],p=[],y=[],h=r.slidesOffsetBefore;typeof h=="function"&&(h=r.slidesOffsetBefore.call(t));let m=r.slidesOffsetAfter;typeof m=="function"&&(m=r.slidesOffsetAfter.call(t));let v=t.snapGrid.length,b=t.slidesGrid.length,C=r.spaceBetween,T=-h,k=0,A=0;if(typeof o>"u")return;typeof C=="string"&&C.indexOf("%")>=0&&(C=parseFloat(C.replace("%",""))/100*o),t.virtualSize=-C,a?u.css({marginLeft:"",marginBottom:"",marginTop:""}):u.css({marginRight:"",marginBottom:"",marginTop:""}),r.centeredSlides&&r.cssMode&&(vn(t.wrapperEl,"--swiper-centered-offset-before",""),vn(t.wrapperEl,"--swiper-centered-offset-after",""));let _=r.grid&&r.grid.rows>1&&t.grid;_&&t.grid.initSlides(d);let z,G=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(F=>typeof r.breakpoints[F].slidesPerView<"u").length>0;for(let F=0;F<d;F+=1){z=0;let w=u.eq(F);if(_&&t.grid.updateSlide(F,w,d,e),w.css("display")!=="none"){if(r.slidesPerView==="auto"){G&&(u[F].style[e("width")]="");let E=getComputedStyle(w[0]),P=w[0].style.transform,H=w[0].style.webkitTransform;if(P&&(w[0].style.transform="none"),H&&(w[0].style.webkitTransform="none"),r.roundLengths)z=t.isHorizontal()?w.outerWidth(!0):w.outerHeight(!0);else{let j=n(E,"width"),I=n(E,"padding-left"),q=n(E,"padding-right"),D=n(E,"margin-left"),te=n(E,"margin-right"),le=E.getPropertyValue("box-sizing");if(le&&le==="border-box")z=j+D+te;else{let{clientWidth:Me,offsetWidth:St}=w[0];z=j+I+q+D+te+(St-Me)}}P&&(w[0].style.transform=P),H&&(w[0].style.webkitTransform=H),r.roundLengths&&(z=Math.floor(z))}else z=(o-(r.slidesPerView-1)*C)/r.slidesPerView,r.roundLengths&&(z=Math.floor(z)),u[F]&&(u[F].style[e("width")]=`${z}px`);u[F]&&(u[F].swiperSlideSize=z),y.push(z),r.centeredSlides?(T=T+z/2+k/2+C,k===0&&F!==0&&(T=T-o/2-C),F===0&&(T=T-o/2-C),Math.abs(T)<1/1e3&&(T=0),r.roundLengths&&(T=Math.floor(T)),A%r.slidesPerGroup===0&&f.push(T),p.push(T)):(r.roundLengths&&(T=Math.floor(T)),(A-Math.min(t.params.slidesPerGroupSkip,A))%t.params.slidesPerGroup===0&&f.push(T),p.push(T),T=T+z+C),t.virtualSize+=z+C,k=z,A+=1}}if(t.virtualSize=Math.max(t.virtualSize,o)+m,a&&l&&(r.effect==="slide"||r.effect==="coverflow")&&i.css({width:`${t.virtualSize+r.spaceBetween}px`}),r.setWrapperSize&&i.css({[e("width")]:`${t.virtualSize+r.spaceBetween}px`}),_&&t.grid.updateWrapperSize(z,f,e),!r.centeredSlides){let F=[];for(let w=0;w<f.length;w+=1){let E=f[w];r.roundLengths&&(E=Math.floor(E)),f[w]<=t.virtualSize-o&&F.push(E)}f=F,Math.floor(t.virtualSize-o)-Math.floor(f[f.length-1])>1&&f.push(t.virtualSize-o)}if(f.length===0&&(f=[0]),r.spaceBetween!==0){let F=t.isHorizontal()&&a?"marginLeft":e("marginRight");u.filter((w,E)=>r.cssMode?E!==u.length-1:!0).css({[F]:`${C}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let F=0;y.forEach(E=>{F+=E+(r.spaceBetween?r.spaceBetween:0)}),F-=r.spaceBetween;let w=F-o;f=f.map(E=>E<0?-h:E>w?w+m:E)}if(r.centerInsufficientSlides){let F=0;if(y.forEach(w=>{F+=w+(r.spaceBetween?r.spaceBetween:0)}),F-=r.spaceBetween,F<o){let w=(o-F)/2;f.forEach((E,P)=>{f[P]=E-w}),p.forEach((E,P)=>{p[P]=E+w})}}if(Object.assign(t,{slides:u,snapGrid:f,slidesGrid:p,slidesSizesGrid:y}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){vn(t.wrapperEl,"--swiper-centered-offset-before",`${-f[0]}px`),vn(t.wrapperEl,"--swiper-centered-offset-after",`${t.size/2-y[y.length-1]/2}px`);let F=-t.snapGrid[0],w=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(E=>E+F),t.slidesGrid=t.slidesGrid.map(E=>E+w)}if(d!==c&&t.emit("slidesLengthChange"),f.length!==v&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),p.length!==b&&t.emit("slidesGridLengthChange"),r.watchSlidesProgress&&t.updateSlidesOffset(),!s&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){let F=`${r.containerModifierClass}backface-hidden`,w=t.$el.hasClass(F);d<=r.maxBackfaceHiddenSlides?w||t.$el.addClass(F):w&&t.$el.removeClass(F)}}var Ju=O(()=>{we()});function ta(t){let e=this,n=[],r=e.virtual&&e.params.virtual.enabled,i=0,o;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);let a=l=>r?e.slides.filter(s=>parseInt(s.getAttribute("data-swiper-slide-index"),10)===l)[0]:e.slides.eq(l)[0];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||R([])).each(l=>{n.push(l)});else for(o=0;o<Math.ceil(e.params.slidesPerView);o+=1){let l=e.activeIndex+o;if(l>e.slides.length&&!r)break;n.push(a(l))}else n.push(a(e.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){let l=n[o].offsetHeight;i=l>i?l:i}(i||i===0)&&e.$wrapperEl.css("height",`${i}px`)}var Xu=O(()=>{me()});function na(){let t=this,e=t.slides;for(let n=0;n<e.length;n+=1)e[n].swiperSlideOffset=t.isHorizontal()?e[n].offsetLeft:e[n].offsetTop}var Ku=O(()=>{});function ra(t=this&&this.translate||0){let e=this,n=e.params,{slides:r,rtlTranslate:i,snapGrid:o}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-t;i&&(a=t),r.removeClass(n.slideVisibleClass),e.visibleSlidesIndexes=[],e.visibleSlides=[];for(let l=0;l<r.length;l+=1){let s=r[l],c=s.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=r[0].swiperSlideOffset);let u=(a+(n.centeredSlides?e.minTranslate():0)-c)/(s.swiperSlideSize+n.spaceBetween),d=(a-o[0]+(n.centeredSlides?e.minTranslate():0)-c)/(s.swiperSlideSize+n.spaceBetween),f=-(a-c),p=f+e.slidesSizesGrid[l];(f>=0&&f<e.size-1||p>1&&p<=e.size||f<=0&&p>=e.size)&&(e.visibleSlides.push(s),e.visibleSlidesIndexes.push(l),r.eq(l).addClass(n.slideVisibleClass)),s.progress=i?-u:u,s.originalProgress=i?-d:d}e.visibleSlides=R(e.visibleSlides)}var Zu=O(()=>{me()});function ia(t){let e=this;if(typeof t>"u"){let c=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*c||0}let n=e.params,r=e.maxTranslate()-e.minTranslate(),{progress:i,isBeginning:o,isEnd:a}=e,l=o,s=a;r===0?(i=0,o=!0,a=!0):(i=(t-e.minTranslate())/r,o=i<=0,a=i>=1),Object.assign(e,{progress:i,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&e.updateSlidesProgress(t),o&&!l&&e.emit("reachBeginning toEdge"),a&&!s&&e.emit("reachEnd toEdge"),(l&&!o||s&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}var ed=O(()=>{});function oa(){let t=this,{slides:e,params:n,$wrapperEl:r,activeIndex:i,realIndex:o}=t,a=t.virtual&&n.virtual.enabled;e.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let l;a?l=t.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${i}"]`):l=e.eq(i),l.addClass(n.slideActiveClass),n.loop&&(l.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));let s=l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&s.length===0&&(s=e.eq(0),s.addClass(n.slideNextClass));let c=l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&c.length===0&&(c=e.eq(-1),c.addClass(n.slidePrevClass)),n.loop&&(s.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),c.hasClass(n.slideDuplicateClass)?r.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):r.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),t.emitSlidesClasses()}var td=O(()=>{});function aa(t){let e=this,n=e.rtlTranslate?e.translate:-e.translate,{slidesGrid:r,snapGrid:i,params:o,activeIndex:a,realIndex:l,snapIndex:s}=e,c=t,u;if(typeof c>"u"){for(let f=0;f<r.length;f+=1)typeof r[f+1]<"u"?n>=r[f]&&n<r[f+1]-(r[f+1]-r[f])/2?c=f:n>=r[f]&&n<r[f+1]&&(c=f+1):n>=r[f]&&(c=f);o.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0)}if(i.indexOf(n)>=0)u=i.indexOf(n);else{let f=Math.min(o.slidesPerGroupSkip,c);u=f+Math.floor((c-f)/o.slidesPerGroup)}if(u>=i.length&&(u=i.length-1),c===a){u!==s&&(e.snapIndex=u,e.emit("snapIndexChange"));return}let d=parseInt(e.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(e,{snapIndex:u,realIndex:d,previousIndex:a,activeIndex:c}),e.emit("activeIndexChange"),e.emit("snapIndexChange"),l!==d&&e.emit("realIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&e.emit("slideChange")}var nd=O(()=>{});function sa(t){let e=this,n=e.params,r=R(t).closest(`.${n.slideClass}`)[0],i=!1,o;if(r){for(let a=0;a<e.slides.length;a+=1)if(e.slides[a]===r){i=!0,o=a;break}}if(r&&i)e.clickedSlide=r,e.virtual&&e.params.virtual.enabled?e.clickedIndex=parseInt(R(r).attr("data-swiper-slide-index"),10):e.clickedIndex=o;else{e.clickedSlide=void 0,e.clickedIndex=void 0;return}n.slideToClickedSlide&&e.clickedIndex!==void 0&&e.clickedIndex!==e.activeIndex&&e.slideToClickedSlide()}var rd=O(()=>{me()});var id,od=O(()=>{Qu();Ju();Xu();Ku();Zu();ed();td();nd();rd();id={updateSize:Zo,updateSlides:ea,updateAutoHeight:ta,updateSlidesOffset:na,updateSlidesProgress:ra,updateProgress:ia,updateSlidesClasses:oa,updateActiveIndex:aa,updateClickedSlide:sa}});function la(t=this.isHorizontal()?"x":"y"){let e=this,{params:n,rtlTranslate:r,translate:i,$wrapperEl:o}=e;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let a=Er(o[0],t);return r&&(a=-a),a||0}var ad=O(()=>{we()});function ca(t,e){let n=this,{rtlTranslate:r,params:i,$wrapperEl:o,wrapperEl:a,progress:l}=n,s=0,c=0,u=0;n.isHorizontal()?s=r?-t:t:c=t,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),i.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-c:i.virtualTranslate||o.transform(`translate3d(${s}px, ${c}px, ${u}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c;let d,f=n.maxTranslate()-n.minTranslate();f===0?d=0:d=(t-n.minTranslate())/f,d!==l&&n.updateProgress(t),n.emit("setTranslate",n.translate,e)}var sd=O(()=>{});function ua(){return-this.snapGrid[0]}var ld=O(()=>{});function da(){return-this.snapGrid[this.snapGrid.length-1]}var cd=O(()=>{});function fa(t=0,e=this.params.speed,n=!0,r=!0,i){let o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;let s=o.minTranslate(),c=o.maxTranslate(),u;if(r&&t>s?u=s:r&&t<c?u=c:u=t,o.updateProgress(u),a.cssMode){let d=o.isHorizontal();if(e===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return ui({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",e,i),o.emit("transitionEnd"))):(o.setTransition(e),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",e,i),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(f){!o||o.destroyed||f.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}var ud=O(()=>{we()});var dd,fd=O(()=>{ad();sd();ld();cd();ud();dd={getTranslate:la,setTranslate:ca,minTranslate:ua,maxTranslate:da,translateTo:fa}});function pa(t,e){let n=this;n.params.cssMode||n.$wrapperEl.transition(t),n.emit("setTransition",t,e)}var pd=O(()=>{});function Sr({swiper:t,runCallbacks:e,direction:n,step:r}){let{activeIndex:i,previousIndex:o}=t,a=n;if(a||(i>o?a="next":i<o?a="prev":a="reset"),t.emit(`transition${r}`),e&&i!==o){if(a==="reset"){t.emit(`slideResetTransition${r}`);return}t.emit(`slideChangeTransition${r}`),a==="next"?t.emit(`slideNextTransition${r}`):t.emit(`slidePrevTransition${r}`)}}var ha=O(()=>{});function ga(t=!0,e){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),Sr({swiper:n,runCallbacks:t,direction:e,step:"Start"}))}var hd=O(()=>{ha()});function ma(t=!0,e){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),Sr({swiper:n,runCallbacks:t,direction:e,step:"End"}))}var gd=O(()=>{ha()});var md,yd=O(()=>{pd();hd();gd();md={setTransition:pa,transitionStart:ga,transitionEnd:ma}});function ya(t=0,e=this.params.speed,n=!0,r,i){if(typeof t!="number"&&typeof t!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);if(typeof t=="string"){let C=parseInt(t,10);if(!isFinite(C))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);t=C}let o=this,a=t;a<0&&(a=0);let{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:y}=o;if(o.animating&&l.preventInteractionOnTransition||!y&&!r&&!i)return!1;let h=Math.min(o.params.slidesPerGroupSkip,a),m=h+Math.floor((a-h)/o.params.slidesPerGroup);m>=s.length&&(m=s.length-1);let v=-s[m];if(l.normalizeSlideIndex)for(let C=0;C<c.length;C+=1){let T=-Math.floor(v*100),k=Math.floor(c[C]*100),A=Math.floor(c[C+1]*100);typeof c[C+1]<"u"?T>=k&&T<A-(A-k)/2?a=C:T>=k&&T<A&&(a=C+1):T>=k&&(a=C)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&v<o.translate&&v<o.minTranslate()||!o.allowSlidePrev&&v>o.translate&&v>o.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(v);let b;if(a>d?b="next":a<d?b="prev":b="reset",f&&-v===o.translate||!f&&v===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(v),b!=="reset"&&(o.transitionStart(n,b),o.transitionEnd(n,b)),!1;if(l.cssMode){let C=o.isHorizontal(),T=f?v:-v;if(e===0){let k=o.virtual&&o.params.virtual.enabled;k&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),p[C?"scrollLeft":"scrollTop"]=T,k&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._swiperImmediateVirtual=!1})}else{if(!o.support.smoothScroll)return ui({swiper:o,targetPosition:T,side:C?"left":"top"}),!0;p.scrollTo({[C?"left":"top"]:T,behavior:"smooth"})}return!0}return o.setTransition(e),o.setTranslate(v),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",e,r),o.transitionStart(n,b),e===0?o.transitionEnd(n,b):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(T){!o||o.destroyed||T.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,b))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)),!0}var bd=O(()=>{we()});function ba(t=0,e=this.params.speed,n=!0,r){if(typeof t=="string"){let a=parseInt(t,10);if(!isFinite(a))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);t=a}let i=this,o=t;return i.params.loop&&(o+=i.loopedSlides),i.slideTo(o,e,n,r)}var vd=O(()=>{});function va(t=this.params.speed,e=!0,n){let r=this,{animating:i,enabled:o,params:a}=r;if(!o)return r;let l=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));let s=r.activeIndex<a.slidesPerGroupSkip?1:l;if(a.loop){if(i&&a.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}return a.rewind&&r.isEnd?r.slideTo(0,t,e,n):r.slideTo(r.activeIndex+s,t,e,n)}var Cd=O(()=>{});function Ca(t=this.params.speed,e=!0,n){let r=this,{params:i,animating:o,snapGrid:a,slidesGrid:l,rtlTranslate:s,enabled:c}=r;if(!c)return r;if(i.loop){if(o&&i.loopPreventsSlide)return!1;r.loopFix(),r._clientLeft=r.$wrapperEl[0].clientLeft}let u=s?r.translate:-r.translate;function d(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}let f=d(u),p=a.map(m=>d(m)),y=a[p.indexOf(f)-1];if(typeof y>"u"&&i.cssMode){let m;a.forEach((v,b)=>{f>=v&&(m=b)}),typeof m<"u"&&(y=a[m>0?m-1:m])}let h=0;if(typeof y<"u"&&(h=l.indexOf(y),h<0&&(h=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(h=h-r.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),i.rewind&&r.isBeginning){let m=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(m,t,e,n)}return r.slideTo(h,t,e,n)}var xd=O(()=>{});function xa(t=this.params.speed,e=!0,n){let r=this;return r.slideTo(r.activeIndex,t,e,n)}var Ad=O(()=>{});function Aa(t=this.params.speed,e=!0,n,r=.5){let i=this,o=i.activeIndex,a=Math.min(i.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/i.params.slidesPerGroup),s=i.rtlTranslate?i.translate:-i.translate;if(s>=i.snapGrid[l]){let c=i.snapGrid[l],u=i.snapGrid[l+1];s-c>(u-c)*r&&(o+=i.params.slidesPerGroup)}else{let c=i.snapGrid[l-1],u=i.snapGrid[l];s-c<=(u-c)*r&&(o-=i.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,i.slidesGrid.length-1),i.slideTo(o,t,e,n)}var Ed=O(()=>{});function Ea(){let t=this,{params:e,$wrapperEl:n}=t,r=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView,i=t.clickedIndex,o;if(e.loop){if(t.animating)return;o=parseInt(R(t.clickedSlide).attr("data-swiper-slide-index"),10),e.centeredSlides?i<t.loopedSlides-r/2||i>t.slides.length-t.loopedSlides+r/2?(t.loopFix(),i=n.children(`.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),Xe(()=>{t.slideTo(i)})):t.slideTo(i):i>t.slides.length-r?(t.loopFix(),i=n.children(`.${e.slideClass}[data-swiper-slide-index="${o}"]:not(.${e.slideDuplicateClass})`).eq(0).index(),Xe(()=>{t.slideTo(i)})):t.slideTo(i)}else t.slideTo(i)}var Sd=O(()=>{me();we()});var wd,Id=O(()=>{bd();vd();Cd();xd();Ad();Ed();Sd();wd={slideTo:ya,slideToLoop:ba,slideNext:va,slidePrev:Ca,slideReset:xa,slideToClosest:Aa,slideToClickedSlide:Ea}});function Sa(){let t=this,e=fe(),{params:n,$wrapperEl:r}=t,i=r.children().length>0?R(r.children()[0].parentNode):r;i.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=i.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){let s=n.slidesPerGroup-o.length%n.slidesPerGroup;if(s!==n.slidesPerGroup){for(let c=0;c<s;c+=1){let u=R(e.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);i.append(u)}o=i.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=o.length),t.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),t.loopedSlides+=n.loopAdditionalSlides,t.loopedSlides>o.length&&t.params.loopedSlidesLimit&&(t.loopedSlides=o.length);let a=[],l=[];o.each((s,c)=>{R(s).attr("data-swiper-slide-index",c)});for(let s=0;s<t.loopedSlides;s+=1){let c=s-Math.floor(s/o.length)*o.length;l.push(o.eq(c)[0]),a.unshift(o.eq(o.length-c-1)[0])}for(let s=0;s<l.length;s+=1)i.append(R(l[s].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let s=a.length-1;s>=0;s-=1)i.prepend(R(a[s].cloneNode(!0)).addClass(n.slideDuplicateClass))}var kd=O(()=>{ve();me()});function wa(){let t=this;t.emit("beforeLoopFix");let{activeIndex:e,slides:n,loopedSlides:r,allowSlidePrev:i,allowSlideNext:o,snapGrid:a,rtlTranslate:l}=t,s;t.allowSlidePrev=!0,t.allowSlideNext=!0;let u=-a[e]-t.getTranslate();e<r?(s=n.length-r*3+e,s+=r,t.slideTo(s,0,!1,!0)&&u!==0&&t.setTranslate((l?-t.translate:t.translate)-u)):e>=n.length-r&&(s=-n.length+e+r,s+=r,t.slideTo(s,0,!1,!0)&&u!==0&&t.setTranslate((l?-t.translate:t.translate)-u)),t.allowSlidePrev=i,t.allowSlideNext=o,t.emit("loopFix")}var Td=O(()=>{});function Ia(){let t=this,{$wrapperEl:e,params:n,slides:r}=t;e.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),r.removeAttr("data-swiper-slide-index")}var _d=O(()=>{});var Pd,Fd=O(()=>{kd();Td();_d();Pd={loopCreate:Sa,loopFix:wa,loopDestroy:Ia}});function ka(t){let e=this;if(e.support.touch||!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;let n=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;n.style.cursor="move",n.style.cursor=t?"grabbing":"grab"}var Dd=O(()=>{});function Ta(){let t=this;t.support.touch||t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var Bd=O(()=>{});var Md,zd=O(()=>{Dd();Bd();Md={setGrabCursor:ka,unsetGrabCursor:Ta}});function sb(t,e=this){function n(r){if(!r||r===fe()||r===re())return null;r.assignedSlot&&(r=r.assignedSlot);let i=r.closest(t);return!i&&!r.getRootNode?null:i||n(r.getRootNode().host)}return n(e)}function _a(t){let e=this,n=fe(),r=re(),i=e.touchEventsData,{params:o,touches:a,enabled:l}=e;if(!l||e.animating&&o.preventInteractionOnTransition)return;!e.animating&&o.cssMode&&o.loop&&e.loopFix();let s=t;s.originalEvent&&(s=s.originalEvent);let c=R(s.target);if(o.touchEventsTarget==="wrapper"&&!c.closest(e.wrapperEl).length||(i.isTouchEvent=s.type==="touchstart",!i.isTouchEvent&&"which"in s&&s.which===3)||!i.isTouchEvent&&"button"in s&&s.button>0||i.isTouched&&i.isMoved)return;let u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=t.composedPath?t.composedPath():t.path;u&&s.target&&s.target.shadowRoot&&d&&(c=R(d[0]));let f=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(o.noSwiping&&(p?sb(f,c[0]):c.closest(f)[0])){e.allowClick=!0;return}if(o.swipeHandler&&!c.closest(o.swipeHandler)[0])return;a.currentX=s.type==="touchstart"?s.targetTouches[0].pageX:s.pageX,a.currentY=s.type==="touchstart"?s.targetTouches[0].pageY:s.pageY;let y=a.currentX,h=a.currentY,m=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,v=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(m&&(y<=v||y>=r.innerWidth-v))if(m==="prevent")t.preventDefault();else return;if(Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=y,a.startY=h,i.touchStartTime=Ie(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,o.threshold>0&&(i.allowThresholdMove=!1),s.type!=="touchstart"){let b=!0;c.is(i.focusableElements)&&(b=!1,c[0].nodeName==="SELECT"&&(i.isTouched=!1)),n.activeElement&&R(n.activeElement).is(i.focusableElements)&&n.activeElement!==c[0]&&n.activeElement.blur();let C=b&&e.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||C)&&!c[0].isContentEditable&&s.preventDefault()}e.params.freeMode&&e.params.freeMode.enabled&&e.freeMode&&e.animating&&!o.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}var Od=O(()=>{ve();me();we()});function Pa(t){let e=fe(),n=this,r=n.touchEventsData,{params:i,touches:o,rtlTranslate:a,enabled:l}=n;if(!l)return;let s=t;if(s.originalEvent&&(s=s.originalEvent),!r.isTouched){r.startMoving&&r.isScrolling&&n.emit("touchMoveOpposite",s);return}if(r.isTouchEvent&&s.type!=="touchmove")return;let c=s.type==="touchmove"&&s.targetTouches&&(s.targetTouches[0]||s.changedTouches[0]),u=s.type==="touchmove"?c.pageX:s.pageX,d=s.type==="touchmove"?c.pageY:s.pageY;if(s.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!n.allowTouchMove){R(s.target).is(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=Ie());return}if(r.isTouchEvent&&i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate())return}if(r.isTouchEvent&&e.activeElement&&s.target===e.activeElement&&R(s.target).is(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}if(r.allowTouchCallbacks&&n.emit("touchMove",s),s.targetTouches&&s.targetTouches.length>1)return;o.currentX=u,o.currentY=d;let f=o.currentX-o.startX,p=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(typeof r.isScrolling>"u"){let v;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?r.isScrolling=!1:f*f+p*p>=25&&(v=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?v>i.touchAngle:90-v>i.touchAngle)}if(r.isScrolling&&n.emit("touchMoveOpposite",s),typeof r.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(r.startMoving=!0),r.isScrolling){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&s.cancelable&&s.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&s.stopPropagation(),r.isMoved||(i.loop&&!i.cssMode&&n.loopFix(),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)),n.emit("sliderMove",s),r.isMoved=!0;let y=n.isHorizontal()?f:p;o.diff=y,y*=i.touchRatio,a&&(y=-y),n.swipeDirection=y>0?"prev":"next",r.currentTranslate=y+r.startTranslate;let h=!0,m=i.resistanceRatio;if(i.touchReleaseOnEdges&&(m=0),y>0&&r.currentTranslate>n.minTranslate()?(h=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+y)**m)):y<0&&r.currentTranslate<n.maxTranslate()&&(h=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-y)**m)),h&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(y)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,r.currentTranslate=r.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}var Rd=O(()=>{ve();me();we()});function Fa(t){let e=this,n=e.touchEventsData,{params:r,touches:i,rtlTranslate:o,slidesGrid:a,enabled:l}=e;if(!l)return;let s=t;if(s.originalEvent&&(s=s.originalEvent),n.allowTouchCallbacks&&e.emit("touchEnd",s),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&r.grabCursor&&e.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}r.grabCursor&&n.isMoved&&n.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);let c=Ie(),u=c-n.touchStartTime;if(e.allowClick){let b=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(b&&b[0]||s.target),e.emit("tap click",s),u<300&&c-n.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(n.lastClickTime=Ie(),Xe(()=>{e.destroyed||(e.allowClick=!0)}),!n.isTouched||!n.isMoved||!e.swipeDirection||i.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(r.followFinger?d=o?e.translate:-e.translate:d=-n.currentTranslate,r.cssMode)return;if(e.params.freeMode&&r.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:d});return}let f=0,p=e.slidesSizesGrid[0];for(let b=0;b<a.length;b+=b<r.slidesPerGroupSkip?1:r.slidesPerGroup){let C=b<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof a[b+C]<"u"?d>=a[b]&&d<a[b+C]&&(f=b,p=a[b+C]-a[b]):d>=a[b]&&(f=b,p=a[a.length-1]-a[a.length-2])}let y=null,h=null;r.rewind&&(e.isBeginning?h=e.params.virtual&&e.params.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(y=0));let m=(d-a[f])/p,v=f<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(u>r.longSwipesMs){if(!r.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(m>=r.longSwipesRatio?e.slideTo(r.rewind&&e.isEnd?y:f+v):e.slideTo(f)),e.swipeDirection==="prev"&&(m>1-r.longSwipesRatio?e.slideTo(f+v):h!==null&&m<0&&Math.abs(m)>r.longSwipesRatio?e.slideTo(h):e.slideTo(f))}else{if(!r.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(f+v):e.slideTo(f):(e.swipeDirection==="next"&&e.slideTo(y!==null?y:f+v),e.swipeDirection==="prev"&&e.slideTo(h!==null?h:f))}}var Ld=O(()=>{we()});function fi(){let t=this,{params:e,el:n}=t;if(n&&n.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:o}=t;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses(),(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides?t.slideTo(t.slides.length-1,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.run(),t.allowSlidePrev=i,t.allowSlideNext=r,t.params.watchOverflow&&o!==t.snapGrid&&t.checkOverflow()}var Vd=O(()=>{});function Da(t){let e=this;!e.enabled||e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation()))}var Nd=O(()=>{});function Ba(){let t=this,{wrapperEl:e,rtlTranslate:n,enabled:r}=t;if(!r)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let i,o=t.maxTranslate()-t.minTranslate();o===0?i=0:i=(t.translate-t.minTranslate())/o,i!==t.progress&&t.updateProgress(n?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}var Hd=O(()=>{});function lb(){}function cb(){let t=this,e=fe(),{params:n,support:r}=t;t.onTouchStart=_a.bind(t),t.onTouchMove=Pa.bind(t),t.onTouchEnd=Fa.bind(t),n.cssMode&&(t.onScroll=Ba.bind(t)),t.onClick=Da.bind(t),r.touch&&!qd&&(e.addEventListener("touchstart",lb),qd=!0),Gd(t,"on")}function ub(){Gd(this,"off")}var qd,Gd,$d,Wd=O(()=>{ve();Od();Rd();Ld();Vd();Nd();Hd();qd=!1;Gd=(t,e)=>{let n=fe(),{params:r,touchEvents:i,el:o,wrapperEl:a,device:l,support:s}=t,c=!!r.nested,u=e==="on"?"addEventListener":"removeEventListener",d=e;if(!s.touch)o[u](i.start,t.onTouchStart,!1),n[u](i.move,t.onTouchMove,c),n[u](i.end,t.onTouchEnd,!1);else{let f=i.start==="touchstart"&&s.passiveListener&&r.passiveListeners?{passive:!0,capture:!1}:!1;o[u](i.start,t.onTouchStart,f),o[u](i.move,t.onTouchMove,s.passiveListener?{passive:!1,capture:c}:c),o[u](i.end,t.onTouchEnd,f),i.cancel&&o[u](i.cancel,t.onTouchEnd,f)}(r.preventClicks||r.preventClicksPropagation)&&o[u]("click",t.onClick,!0),r.cssMode&&a[u]("scroll",t.onScroll),r.updateOnWindowResize?t[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",fi,!0):t[d]("observerUpdate",fi,!0)};$d={attachEvents:cb,detachEvents:ub}});function Ma(){let t=this,{activeIndex:e,initialized:n,loopedSlides:r=0,params:i,$el:o}=t,a=i.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let l=t.getBreakpoint(a,t.params.breakpointsBase,t.el);if(!l||t.currentBreakpoint===l)return;let c=(l in a?a[l]:void 0)||t.originalParams,u=Yd(t,i),d=Yd(t,c),f=i.enabled;u&&!d?(o.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`),t.emitContainerClasses()):!u&&d&&(o.addClass(`${i.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&i.grid.fill==="column")&&o.addClass(`${i.containerModifierClass}grid-column`),t.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(m=>{let v=i[m]&&i[m].enabled,b=c[m]&&c[m].enabled;v&&!b&&t[m].disable(),!v&&b&&t[m].enable()});let p=c.direction&&c.direction!==i.direction,y=i.loop&&(c.slidesPerView!==i.slidesPerView||p);p&&n&&t.changeDirection(),Ne(t.params,c);let h=t.params.enabled;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),f&&!h?t.disable():!f&&h&&t.enable(),t.currentBreakpoint=l,t.emit("_beforeBreakpoint",c),y&&n&&(t.loopDestroy(),t.loopCreate(),t.updateSlides(),t.slideTo(e-r+t.loopedSlides,0,!1)),t.emit("breakpoint",c)}var Yd,Ud=O(()=>{we();Yd=(t,e)=>t.grid&&e.grid&&e.grid.rows>1});function za(t,e="window",n){if(!t||e==="container"&&!n)return;let r=!1,i=re(),o=e==="window"?i.innerHeight:n.clientHeight,a=Object.keys(t).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){let s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){let{point:s,value:c}=a[l];e==="window"?i.matchMedia(`(min-width: ${c}px)`).matches&&(r=s):c<=n.clientWidth&&(r=s)}return r||"max"}var jd=O(()=>{ve()});var Qd,Jd=O(()=>{Ud();jd();Qd={setBreakpoint:Ma,getBreakpoint:za}});function db(t,e){let n=[];return t.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&n.push(e+i)}):typeof r=="string"&&n.push(e+r)}),n}function Oa(){let t=this,{classNames:e,params:n,rtl:r,$el:i,device:o,support:a}=t,l=db(["initialized",n.direction,{"pointer-events":!a.touch},{"free-mode":t.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);e.push(...l),i.addClass([...e].join(" ")),t.emitContainerClasses()}var Xd=O(()=>{});function Ra(){let t=this,{$el:e,classNames:n}=t;e.removeClass(n.join(" ")),t.emitContainerClasses()}var Kd=O(()=>{});var Zd,ef=O(()=>{Xd();Kd();Zd={addClasses:Oa,removeClasses:Ra}});function La(t,e,n,r,i,o){let a=re(),l;function s(){o&&o()}!R(t).parent("picture")[0]&&(!t.complete||!i)&&e?(l=new a.Image,l.onload=s,l.onerror=s,r&&(l.sizes=r),n&&(l.srcset=n),e&&(l.src=e)):s()}var tf=O(()=>{ve();me()});function Va(){let t=this;t.imagesToLoad=t.$el.find("img");function e(){typeof t>"u"||t===null||!t||t.destroyed||(t.imagesLoaded!==void 0&&(t.imagesLoaded+=1),t.imagesLoaded===t.imagesToLoad.length&&(t.params.updateOnImagesReady&&t.update(),t.emit("imagesReady")))}for(let n=0;n<t.imagesToLoad.length;n+=1){let r=t.imagesToLoad[n];t.loadImage(r,r.currentSrc||r.getAttribute("src"),r.srcset||r.getAttribute("srcset"),r.sizes||r.getAttribute("sizes"),!0,e)}}var nf=O(()=>{});var rf,of=O(()=>{tf();nf();rf={loadImage:La,preloadImages:Va}});function fb(){let t=this,{isLocked:e,params:n}=t,{slidesOffsetBefore:r}=n;if(r){let i=t.slides.length-1,o=t.slidesGrid[i]+t.slidesSizesGrid[i]+r*2;t.isLocked=t.size>o}else t.isLocked=t.snapGrid.length===1;n.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),n.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var af,sf=O(()=>{af={checkOverflow:fb}});var Na,lf=O(()=>{Na={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1}});function Ha(t,e){return function(r={}){let i=Object.keys(r)[0],o=r[i];if(typeof o!="object"||o===null){Ne(e,r);return}if(["navigation","pagination","scrollbar"].indexOf(i)>=0&&t[i]===!0&&(t[i]={auto:!0}),!(i in t&&"enabled"in o)){Ne(e,r);return}t[i]===!0&&(t[i]={enabled:!0}),typeof t[i]=="object"&&!("enabled"in t[i])&&(t[i].enabled=!0),t[i]||(t[i]={enabled:!1}),Ne(e,r)}}var cf=O(()=>{we()});var qa,Ga,Ke,$a,uf=O(()=>{ve();me();we();jo();qu();$u();Wu();Yu();ju();od();fd();yd();Id();Fd();zd();Wd();Jd();ef();of();sf();lf();cf();qa={eventsEmitter:Uu,update:id,translate:dd,transition:md,slide:wd,loop:Pd,grabCursor:Md,events:$d,breakpoints:Qd,checkOverflow:af,classes:Zd,images:rf},Ga={},Ke=class{constructor(...e){let n,r;if(e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?r=e[0]:[n,r]=e,r||(r={}),r=Ne({},r),n&&!r.el&&(r.el=n),r.el&&R(r.el).length>1){let l=[];return R(r.el).each(s=>{let c=Ne({},r,{el:s});l.push(new Ke(c))}),l}let i=this;i.__swiper__=!0,i.support=di(),i.device=Hu({userAgent:r.userAgent}),i.browser=Gu(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],r.modules&&Array.isArray(r.modules)&&i.modules.push(...r.modules);let o={};i.modules.forEach(l=>{l({swiper:i,extendParams:Ha(r,o),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});let a=Ne({},Na,o);return i.params=Ne({},a,Ga,r),i.originalParams=Ne({},i.params),i.passedParams=Ne({},r),i.params&&i.params.on&&Object.keys(i.params.on).forEach(l=>{i.on(l,i.params.on[l])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),i.$=R,Object.assign(i,{enabled:i.params.enabled,el:n,classNames:[],slides:R(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEvents:function(){let s=["touchstart","touchmove","touchend","touchcancel"],c=["pointerdown","pointermove","pointerup"];return i.touchEventsTouch={start:s[0],move:s[1],end:s[2],cancel:s[3]},i.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},i.support.touch||!i.params.simulateTouch?i.touchEventsTouch:i.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:Ie(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){let e=this;!e.enabled||(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,n){let r=this;e=Math.min(Math.max(e,0),1);let i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof n>"u"?0:n),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let n=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",n.join(" "))}getSlideClasses(e){let n=this;return n.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let n=[];e.slides.each(r=>{let i=e.getSlideClasses(r);n.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",n)}slidesPerViewDynamic(e="current",n=!1){let r=this,{params:i,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=r,u=1;if(i.centeredSlides){let d=o[c].swiperSlideSize,f;for(let p=c+1;p<o.length;p+=1)o[p]&&!f&&(d+=o[p].swiperSlideSize,u+=1,d>s&&(f=!0));for(let p=c-1;p>=0;p-=1)o[p]&&!f&&(d+=o[p].swiperSlideSize,u+=1,d>s&&(f=!0))}else if(e==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(u+=1);return u}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:n,params:r}=e;r.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){let a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let o;e.params.freeMode&&e.params.freeMode.enabled?(i(),e.params.autoHeight&&e.updateAutoHeight()):((e.params.slidesPerView==="auto"||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?o=e.slideTo(e.slides.length-1,0,!1,!0):o=e.slideTo(e.activeIndex,0,!1,!0),o||i()),r.watchOverflow&&n!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,n=!0){let r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.$el.removeClass(`${r.params.containerModifierClass}${i}`).addClass(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.each(o=>{e==="vertical"?o.style.width="":o.style.height=""}),r.emit("changeDirection"),n&&r.update()),r}changeLanguageDirection(e){let n=this;n.rtl&&e==="rtl"||!n.rtl&&e==="ltr"||(n.rtl=e==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(e){let n=this;if(n.mounted)return!0;let r=R(e||n.params.el);if(e=r[0],!e)return!1;e.swiper=n;let i=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`,a=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){let l=R(e.shadowRoot.querySelector(i()));return l.children=s=>r.children(s),l}return r.children?r.children(i()):R(r).children(i())})();if(a.length===0&&n.params.createElements){let s=fe().createElement("div");a=R(s),s.className=n.params.wrapperClass,r.append(s),r.children(`.${n.params.slideClass}`).each(c=>{a.append(c)})}return Object.assign(n,{$el:r,el:e,$wrapperEl:a,wrapperEl:a[0],mounted:!0,rtl:e.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(e.dir.toLowerCase()==="rtl"||r.css("direction")==="rtl"),wrongRTL:a.css("display")==="-webkit-box"}),!0}init(e){let n=this;return n.initialized||n.mount(e)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(e=!0,n=!0){let r=this,{params:i,$el:o,$wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),n&&(r.removeClasses(),o.removeAttr("style"),a.removeAttr("style"),l&&l.length&&l.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(s=>{r.off(s)}),e!==!1&&(r.$el[0].swiper=null,Nu(r)),r.destroyed=!0),null}static extendDefaults(e){Ne(Ga,e)}static get extendedDefaults(){return Ga}static get defaults(){return Na}static installModule(e){Ke.prototype.__modules__||(Ke.prototype.__modules__=[]);let n=Ke.prototype.__modules__;typeof e=="function"&&n.indexOf(e)<0&&n.push(e)}static use(e){return Array.isArray(e)?(e.forEach(n=>Ke.installModule(n)),Ke):(Ke.installModule(e),Ke)}};Object.keys(qa).forEach(t=>{Object.keys(qa[t]).forEach(e=>{Ke.prototype[e]=qa[t][e]})});Ke.use([Xo,Ko]);$a=Ke});function Wa({swiper:t,extendParams:e,on:n,emit:r}){e({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let i;t.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function o(d,f){let p=t.params.virtual;if(p.cache&&t.virtual.cache[f])return t.virtual.cache[f];let y=p.renderSlide?R(p.renderSlide.call(t,d,f)):R(`<div class="${t.params.slideClass}" data-swiper-slide-index="${f}">${d}</div>`);return y.attr("data-swiper-slide-index")||y.attr("data-swiper-slide-index",f),p.cache&&(t.virtual.cache[f]=y),y}function a(d){let{slidesPerView:f,slidesPerGroup:p,centeredSlides:y}=t.params,{addSlidesBefore:h,addSlidesAfter:m}=t.params.virtual,{from:v,to:b,slides:C,slidesGrid:T,offset:k}=t.virtual;t.params.cssMode||t.updateActiveIndex();let A=t.activeIndex||0,_;t.rtlTranslate?_="right":_=t.isHorizontal()?"left":"top";let z,G;y?(z=Math.floor(f/2)+p+m,G=Math.floor(f/2)+p+h):(z=f+(p-1)+m,G=p+h);let F=Math.max((A||0)-G,0),w=Math.min((A||0)+z,C.length-1),E=(t.slidesGrid[F]||0)-(t.slidesGrid[0]||0);Object.assign(t.virtual,{from:F,to:w,offset:E,slidesGrid:t.slidesGrid});function P(){t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.lazy&&t.params.lazy.enabled&&t.lazy.load(),r("virtualUpdate")}if(v===F&&b===w&&!d){t.slidesGrid!==T&&E!==k&&t.slides.css(_,`${E}px`),t.updateProgress(),r("virtualUpdate");return}if(t.params.virtual.renderExternal){t.params.virtual.renderExternal.call(t,{offset:E,from:F,to:w,slides:function(){let q=[];for(let D=F;D<=w;D+=1)q.push(C[D]);return q}()}),t.params.virtual.renderExternalUpdate?P():r("virtualUpdate");return}let H=[],j=[];if(d)t.$wrapperEl.find(`.${t.params.slideClass}`).remove();else for(let I=v;I<=b;I+=1)(I<F||I>w)&&t.$wrapperEl.find(`.${t.params.slideClass}[data-swiper-slide-index="${I}"]`).remove();for(let I=0;I<C.length;I+=1)I>=F&&I<=w&&(typeof b>"u"||d?j.push(I):(I>b&&j.push(I),I<v&&H.push(I)));j.forEach(I=>{t.$wrapperEl.append(o(C[I],I))}),H.sort((I,q)=>q-I).forEach(I=>{t.$wrapperEl.prepend(o(C[I],I))}),t.$wrapperEl.children(".swiper-slide").css(_,`${E}px`),P()}function l(d){if(typeof d=="object"&&"length"in d)for(let f=0;f<d.length;f+=1)d[f]&&t.virtual.slides.push(d[f]);else t.virtual.slides.push(d);a(!0)}function s(d){let f=t.activeIndex,p=f+1,y=1;if(Array.isArray(d)){for(let h=0;h<d.length;h+=1)d[h]&&t.virtual.slides.unshift(d[h]);p=f+d.length,y=d.length}else t.virtual.slides.unshift(d);if(t.params.virtual.cache){let h=t.virtual.cache,m={};Object.keys(h).forEach(v=>{let b=h[v],C=b.attr("data-swiper-slide-index");C&&b.attr("data-swiper-slide-index",parseInt(C,10)+y),m[parseInt(v,10)+y]=b}),t.virtual.cache=m}a(!0),t.slideTo(p,0)}function c(d){if(typeof d>"u"||d===null)return;let f=t.activeIndex;if(Array.isArray(d))for(let p=d.length-1;p>=0;p-=1)t.virtual.slides.splice(d[p],1),t.params.virtual.cache&&delete t.virtual.cache[d[p]],d[p]<f&&(f-=1),f=Math.max(f,0);else t.virtual.slides.splice(d,1),t.params.virtual.cache&&delete t.virtual.cache[d],d<f&&(f-=1),f=Math.max(f,0);a(!0),t.slideTo(f,0)}function u(){t.virtual.slides=[],t.params.virtual.cache&&(t.virtual.cache={}),a(!0),t.slideTo(0,0)}n("beforeInit",()=>{!t.params.virtual.enabled||(t.virtual.slides=t.params.virtual.slides,t.classNames.push(`${t.params.containerModifierClass}virtual`),t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0,t.params.initialSlide||a())}),n("setTranslate",()=>{!t.params.virtual.enabled||(t.params.cssMode&&!t._immediateVirtual?(clearTimeout(i),i=setTimeout(()=>{a()},100)):a())}),n("init update resize",()=>{!t.params.virtual.enabled||t.params.cssMode&&vn(t.wrapperEl,"--swiper-virtual-size",`${t.virtualSize}px`)}),Object.assign(t.virtual,{appendSlide:l,prependSlide:s,removeSlide:c,removeAllSlides:u,update:a})}var df=O(()=>{me();we()});function Ya({swiper:t,extendParams:e,on:n,emit:r}){let i=fe(),o=re();t.keyboard={enabled:!1},e({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!t.enabled)return;let{rtlTranslate:u}=t,d=c;d.originalEvent&&(d=d.originalEvent);let f=d.keyCode||d.charCode,p=t.params.keyboard.pageUpDown,y=p&&f===33,h=p&&f===34,m=f===37,v=f===39,b=f===38,C=f===40;if(!t.allowSlideNext&&(t.isHorizontal()&&v||t.isVertical()&&C||h)||!t.allowSlidePrev&&(t.isHorizontal()&&m||t.isVertical()&&b||y))return!1;if(!(d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)&&!(i.activeElement&&i.activeElement.nodeName&&(i.activeElement.nodeName.toLowerCase()==="input"||i.activeElement.nodeName.toLowerCase()==="textarea"))){if(t.params.keyboard.onlyInViewport&&(y||h||m||v||b||C)){let T=!1;if(t.$el.parents(`.${t.params.slideClass}`).length>0&&t.$el.parents(`.${t.params.slideActiveClass}`).length===0)return;let k=t.$el,A=k[0].clientWidth,_=k[0].clientHeight,z=o.innerWidth,G=o.innerHeight,F=t.$el.offset();u&&(F.left-=t.$el[0].scrollLeft);let w=[[F.left,F.top],[F.left+A,F.top],[F.left,F.top+_],[F.left+A,F.top+_]];for(let E=0;E<w.length;E+=1){let P=w[E];if(P[0]>=0&&P[0]<=z&&P[1]>=0&&P[1]<=G){if(P[0]===0&&P[1]===0)continue;T=!0}}if(!T)return}t.isHorizontal()?((y||h||m||v)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),((h||v)&&!u||(y||m)&&u)&&t.slideNext(),((y||m)&&!u||(h||v)&&u)&&t.slidePrev()):((y||h||b||C)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),(h||C)&&t.slideNext(),(y||b)&&t.slidePrev()),r("keyPress",f)}}function l(){t.keyboard.enabled||(R(i).on("keydown",a),t.keyboard.enabled=!0)}function s(){!t.keyboard.enabled||(R(i).off("keydown",a),t.keyboard.enabled=!1)}n("init",()=>{t.params.keyboard.enabled&&l()}),n("destroy",()=>{t.keyboard.enabled&&s()}),Object.assign(t.keyboard,{enable:l,disable:s})}var ff=O(()=>{ve();me()});function Ua({swiper:t,extendParams:e,on:n,emit:r}){let i=re();e({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),t.mousewheel={enabled:!1};let o,a=Ie(),l,s=[];function c(b){let A=0,_=0,z=0,G=0;return"detail"in b&&(_=b.detail),"wheelDelta"in b&&(_=-b.wheelDelta/120),"wheelDeltaY"in b&&(_=-b.wheelDeltaY/120),"wheelDeltaX"in b&&(A=-b.wheelDeltaX/120),"axis"in b&&b.axis===b.HORIZONTAL_AXIS&&(A=_,_=0),z=A*10,G=_*10,"deltaY"in b&&(G=b.deltaY),"deltaX"in b&&(z=b.deltaX),b.shiftKey&&!z&&(z=G,G=0),(z||G)&&b.deltaMode&&(b.deltaMode===1?(z*=40,G*=40):(z*=800,G*=800)),z&&!A&&(A=z<1?-1:1),G&&!_&&(_=G<1?-1:1),{spinX:A,spinY:_,pixelX:z,pixelY:G}}function u(){!t.enabled||(t.mouseEntered=!0)}function d(){!t.enabled||(t.mouseEntered=!1)}function f(b){return t.params.mousewheel.thresholdDelta&&b.delta<t.params.mousewheel.thresholdDelta||t.params.mousewheel.thresholdTime&&Ie()-a<t.params.mousewheel.thresholdTime?!1:b.delta>=6&&Ie()-a<60?!0:(b.direction<0?(!t.isEnd||t.params.loop)&&!t.animating&&(t.slideNext(),r("scroll",b.raw)):(!t.isBeginning||t.params.loop)&&!t.animating&&(t.slidePrev(),r("scroll",b.raw)),a=new i.Date().getTime(),!1)}function p(b){let C=t.params.mousewheel;if(b.direction<0){if(t.isEnd&&!t.params.loop&&C.releaseOnEdges)return!0}else if(t.isBeginning&&!t.params.loop&&C.releaseOnEdges)return!0;return!1}function y(b){let C=b,T=!0;if(!t.enabled)return;let k=t.params.mousewheel;t.params.cssMode&&C.preventDefault();let A=t.$el;if(t.params.mousewheel.eventsTarget!=="container"&&(A=R(t.params.mousewheel.eventsTarget)),!t.mouseEntered&&!A[0].contains(C.target)&&!k.releaseOnEdges)return!0;C.originalEvent&&(C=C.originalEvent);let _=0,z=t.rtlTranslate?-1:1,G=c(C);if(k.forceToAxis)if(t.isHorizontal())if(Math.abs(G.pixelX)>Math.abs(G.pixelY))_=-G.pixelX*z;else return!0;else if(Math.abs(G.pixelY)>Math.abs(G.pixelX))_=-G.pixelY;else return!0;else _=Math.abs(G.pixelX)>Math.abs(G.pixelY)?-G.pixelX*z:-G.pixelY;if(_===0)return!0;k.invert&&(_=-_);let F=t.getTranslate()+_*k.sensitivity;if(F>=t.minTranslate()&&(F=t.minTranslate()),F<=t.maxTranslate()&&(F=t.maxTranslate()),T=t.params.loop?!0:!(F===t.minTranslate()||F===t.maxTranslate()),T&&t.params.nested&&C.stopPropagation(),!t.params.freeMode||!t.params.freeMode.enabled){let w={time:Ie(),delta:Math.abs(_),direction:Math.sign(_),raw:b};s.length>=2&&s.shift();let E=s.length?s[s.length-1]:void 0;if(s.push(w),E?(w.direction!==E.direction||w.delta>E.delta||w.time>E.time+150)&&f(w):f(w),p(w))return!0}else{let w={time:Ie(),delta:Math.abs(_),direction:Math.sign(_)},E=l&&w.time<l.time+500&&w.delta<=l.delta&&w.direction===l.direction;if(!E){l=void 0,t.params.loop&&t.loopFix();let P=t.getTranslate()+_*k.sensitivity,H=t.isBeginning,j=t.isEnd;if(P>=t.minTranslate()&&(P=t.minTranslate()),P<=t.maxTranslate()&&(P=t.maxTranslate()),t.setTransition(0),t.setTranslate(P),t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses(),(!H&&t.isBeginning||!j&&t.isEnd)&&t.updateSlidesClasses(),t.params.freeMode.sticky){clearTimeout(o),o=void 0,s.length>=15&&s.shift();let I=s.length?s[s.length-1]:void 0,q=s[0];if(s.push(w),I&&(w.delta>I.delta||w.direction!==I.direction))s.splice(0);else if(s.length>=15&&w.time-q.time<500&&q.delta-w.delta>=1&&w.delta<=6){let D=_>0?.8:.2;l=w,s.splice(0),o=Xe(()=>{t.slideToClosest(t.params.speed,!0,void 0,D)},0)}o||(o=Xe(()=>{l=w,s.splice(0),t.slideToClosest(t.params.speed,!0,void 0,.5)},500))}if(E||r("scroll",C),t.params.autoplay&&t.params.autoplayDisableOnInteraction&&t.autoplay.stop(),P===t.minTranslate()||P===t.maxTranslate())return!0}}return C.preventDefault?C.preventDefault():C.returnValue=!1,!1}function h(b){let C=t.$el;t.params.mousewheel.eventsTarget!=="container"&&(C=R(t.params.mousewheel.eventsTarget)),C[b]("mouseenter",u),C[b]("mouseleave",d),C[b]("wheel",y)}function m(){return t.params.cssMode?(t.wrapperEl.removeEventListener("wheel",y),!0):t.mousewheel.enabled?!1:(h("on"),t.mousewheel.enabled=!0,!0)}function v(){return t.params.cssMode?(t.wrapperEl.addEventListener(event,y),!0):t.mousewheel.enabled?(h("off"),t.mousewheel.enabled=!1,!0):!1}n("init",()=>{!t.params.mousewheel.enabled&&t.params.cssMode&&v(),t.params.mousewheel.enabled&&m()}),n("destroy",()=>{t.params.cssMode&&m(),t.mousewheel.enabled&&v()}),Object.assign(t.mousewheel,{enable:m,disable:v})}var pf=O(()=>{ve();me();we()});function Cn(t,e,n,r){let i=fe();return t.params.createElements&&Object.keys(r).forEach(o=>{if(!n[o]&&n.auto===!0){let a=t.$el.children(`.${r[o]}`)[0];a||(a=i.createElement("div"),a.className=r[o],t.$el.append(a)),n[o]=a,e[o]=a}}),n}var pi=O(()=>{ve()});function ja({swiper:t,extendParams:e,on:n,emit:r}){e({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function i(p){let y;return p&&(y=R(p),t.params.uniqueNavElements&&typeof p=="string"&&y.length>1&&t.$el.find(p).length===1&&(y=t.$el.find(p))),y}function o(p,y){let h=t.params.navigation;p&&p.length>0&&(p[y?"addClass":"removeClass"](h.disabledClass),p[0]&&p[0].tagName==="BUTTON"&&(p[0].disabled=y),t.params.watchOverflow&&t.enabled&&p[t.isLocked?"addClass":"removeClass"](h.lockClass))}function a(){if(t.params.loop)return;let{$nextEl:p,$prevEl:y}=t.navigation;o(y,t.isBeginning&&!t.params.rewind),o(p,t.isEnd&&!t.params.rewind)}function l(p){p.preventDefault(),!(t.isBeginning&&!t.params.loop&&!t.params.rewind)&&(t.slidePrev(),r("navigationPrev"))}function s(p){p.preventDefault(),!(t.isEnd&&!t.params.loop&&!t.params.rewind)&&(t.slideNext(),r("navigationNext"))}function c(){let p=t.params.navigation;if(t.params.navigation=Cn(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(p.nextEl||p.prevEl))return;let y=i(p.nextEl),h=i(p.prevEl);y&&y.length>0&&y.on("click",s),h&&h.length>0&&h.on("click",l),Object.assign(t.navigation,{$nextEl:y,nextEl:y&&y[0],$prevEl:h,prevEl:h&&h[0]}),t.enabled||(y&&y.addClass(p.lockClass),h&&h.addClass(p.lockClass))}function u(){let{$nextEl:p,$prevEl:y}=t.navigation;p&&p.length&&(p.off("click",s),p.removeClass(t.params.navigation.disabledClass)),y&&y.length&&(y.off("click",l),y.removeClass(t.params.navigation.disabledClass))}n("init",()=>{t.params.navigation.enabled===!1?f():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{$nextEl:p,$prevEl:y}=t.navigation;p&&p[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),y&&y[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),n("click",(p,y)=>{let{$nextEl:h,$prevEl:m}=t.navigation,v=y.target;if(t.params.navigation.hideOnClick&&!R(v).is(m)&&!R(v).is(h)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===v||t.pagination.el.contains(v)))return;let b;h?b=h.hasClass(t.params.navigation.hiddenClass):m&&(b=m.hasClass(t.params.navigation.hiddenClass)),r(b===!0?"navigationShow":"navigationHide"),h&&h.toggleClass(t.params.navigation.hiddenClass),m&&m.toggleClass(t.params.navigation.hiddenClass)}});let d=()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),c(),a()},f=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),u()};Object.assign(t.navigation,{enable:d,disable:f,update:a,init:c,destroy:u})}var hf=O(()=>{pi();me()});function bt(t=""){return`.${t.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}var Qa=O(()=>{});function Ja({swiper:t,extendParams:e,on:n,emit:r}){let i="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${i}-bullet`,bulletActiveClass:`${i}-bullet-active`,modifierClass:`${i}-`,currentClass:`${i}-current`,totalClass:`${i}-total`,hiddenClass:`${i}-hidden`,progressbarFillClass:`${i}-progressbar-fill`,progressbarOppositeClass:`${i}-progressbar-opposite`,clickableClass:`${i}-clickable`,lockClass:`${i}-lock`,horizontalClass:`${i}-horizontal`,verticalClass:`${i}-vertical`,paginationDisabledClass:`${i}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]};let o,a=0;function l(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||t.pagination.$el.length===0}function s(h,m){let{bulletActiveClass:v}=t.params.pagination;h[m]().addClass(`${v}-${m}`)[m]().addClass(`${v}-${m}-${m}`)}function c(){let h=t.rtl,m=t.params.pagination;if(l())return;let v=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,b=t.pagination.$el,C,T=t.params.loop?Math.ceil((v-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(C=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup),C>v-1-t.loopedSlides*2&&(C-=v-t.loopedSlides*2),C>T-1&&(C-=T),C<0&&t.params.paginationType!=="bullets"&&(C=T+C)):typeof t.snapIndex<"u"?C=t.snapIndex:C=t.activeIndex||0,m.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){let k=t.pagination.bullets,A,_,z;if(m.dynamicBullets&&(o=k.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),b.css(t.isHorizontal()?"width":"height",`${o*(m.dynamicMainBullets+4)}px`),m.dynamicMainBullets>1&&t.previousIndex!==void 0&&(a+=C-(t.previousIndex-t.loopedSlides||0),a>m.dynamicMainBullets-1?a=m.dynamicMainBullets-1:a<0&&(a=0)),A=Math.max(C-a,0),_=A+(Math.min(k.length,m.dynamicMainBullets)-1),z=(_+A)/2),k.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(G=>`${m.bulletActiveClass}${G}`).join(" ")),b.length>1)k.each(G=>{let F=R(G),w=F.index();w===C&&F.addClass(m.bulletActiveClass),m.dynamicBullets&&(w>=A&&w<=_&&F.addClass(`${m.bulletActiveClass}-main`),w===A&&s(F,"prev"),w===_&&s(F,"next"))});else{let G=k.eq(C),F=G.index();if(G.addClass(m.bulletActiveClass),m.dynamicBullets){let w=k.eq(A),E=k.eq(_);for(let P=A;P<=_;P+=1)k.eq(P).addClass(`${m.bulletActiveClass}-main`);if(t.params.loop)if(F>=k.length){for(let P=m.dynamicMainBullets;P>=0;P-=1)k.eq(k.length-P).addClass(`${m.bulletActiveClass}-main`);k.eq(k.length-m.dynamicMainBullets-1).addClass(`${m.bulletActiveClass}-prev`)}else s(w,"prev"),s(E,"next");else s(w,"prev"),s(E,"next")}}if(m.dynamicBullets){let G=Math.min(k.length,m.dynamicMainBullets+4),F=(o*G-o)/2-z*o,w=h?"right":"left";k.css(t.isHorizontal()?w:"top",`${F}px`)}}if(m.type==="fraction"&&(b.find(bt(m.currentClass)).text(m.formatFractionCurrent(C+1)),b.find(bt(m.totalClass)).text(m.formatFractionTotal(T))),m.type==="progressbar"){let k;m.progressbarOpposite?k=t.isHorizontal()?"vertical":"horizontal":k=t.isHorizontal()?"horizontal":"vertical";let A=(C+1)/T,_=1,z=1;k==="horizontal"?_=A:z=A,b.find(bt(m.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${_}) scaleY(${z})`).transition(t.params.speed)}m.type==="custom"&&m.renderCustom?(b.html(m.renderCustom(t,C+1,T)),r("paginationRender",b[0])):r("paginationUpdate",b[0]),t.params.watchOverflow&&t.enabled&&b[t.isLocked?"addClass":"removeClass"](m.lockClass)}function u(){let h=t.params.pagination;if(l())return;let m=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,v=t.pagination.$el,b="";if(h.type==="bullets"){let C=t.params.loop?Math.ceil((m-t.loopedSlides*2)/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&C>m&&(C=m);for(let T=0;T<C;T+=1)h.renderBullet?b+=h.renderBullet.call(t,T,h.bulletClass):b+=`<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;v.html(b),t.pagination.bullets=v.find(bt(h.bulletClass))}h.type==="fraction"&&(h.renderFraction?b=h.renderFraction.call(t,h.currentClass,h.totalClass):b=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,v.html(b)),h.type==="progressbar"&&(h.renderProgressbar?b=h.renderProgressbar.call(t,h.progressbarFillClass):b=`<span class="${h.progressbarFillClass}"></span>`,v.html(b)),h.type!=="custom"&&r("paginationRender",t.pagination.$el[0])}function d(){t.params.pagination=Cn(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});let h=t.params.pagination;if(!h.el)return;let m=R(h.el);m.length!==0&&(t.params.uniqueNavElements&&typeof h.el=="string"&&m.length>1&&(m=t.$el.find(h.el),m.length>1&&(m=m.filter(v=>R(v).parents(".swiper")[0]===t.el))),h.type==="bullets"&&h.clickable&&m.addClass(h.clickableClass),m.addClass(h.modifierClass+h.type),m.addClass(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(m.addClass(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&m.addClass(h.progressbarOppositeClass),h.clickable&&m.on("click",bt(h.bulletClass),function(b){b.preventDefault();let C=R(this).index()*t.params.slidesPerGroup;t.params.loop&&(C+=t.loopedSlides),t.slideTo(C)}),Object.assign(t.pagination,{$el:m,el:m[0]}),t.enabled||m.addClass(h.lockClass))}function f(){let h=t.params.pagination;if(l())return;let m=t.pagination.$el;m.removeClass(h.hiddenClass),m.removeClass(h.modifierClass+h.type),m.removeClass(t.isHorizontal()?h.horizontalClass:h.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(h.bulletActiveClass),h.clickable&&m.off("click",bt(h.bulletClass))}n("init",()=>{t.params.pagination.enabled===!1?y():(d(),u(),c())}),n("activeIndexChange",()=>{(t.params.loop||typeof t.snapIndex>"u")&&c()}),n("snapIndexChange",()=>{t.params.loop||c()}),n("slidesLengthChange",()=>{t.params.loop&&(u(),c())}),n("snapGridLengthChange",()=>{t.params.loop||(u(),c())}),n("destroy",()=>{f()}),n("enable disable",()=>{let{$el:h}=t.pagination;h&&h[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),n("lock unlock",()=>{c()}),n("click",(h,m)=>{let v=m.target,{$el:b}=t.pagination;if(t.params.pagination.el&&t.params.pagination.hideOnClick&&b&&b.length>0&&!R(v).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&v===t.navigation.nextEl||t.navigation.prevEl&&v===t.navigation.prevEl))return;let C=b.hasClass(t.params.pagination.hiddenClass);r(C===!0?"paginationShow":"paginationHide"),b.toggleClass(t.params.pagination.hiddenClass)}});let p=()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),d(),u(),c()},y=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),f()};Object.assign(t.pagination,{enable:p,disable:y,render:u,update:c,init:d,destroy:f})}var gf=O(()=>{me();Qa();pi()});function Xa({swiper:t,extendParams:e,on:n,emit:r}){let i=fe(),o=!1,a=null,l=null,s,c,u,d;e({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),t.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function f(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;let{scrollbar:w,rtlTranslate:E,progress:P}=t,{$dragEl:H,$el:j}=w,I=t.params.scrollbar,q=c,D=(u-c)*P;E?(D=-D,D>0?(q=c-D,D=0):-D+c>u&&(q=u+D)):D<0?(q=c+D,D=0):D+c>u&&(q=u-D),t.isHorizontal()?(H.transform(`translate3d(${D}px, 0, 0)`),H[0].style.width=`${q}px`):(H.transform(`translate3d(0px, ${D}px, 0)`),H[0].style.height=`${q}px`),I.hide&&(clearTimeout(a),j[0].style.opacity=1,a=setTimeout(()=>{j[0].style.opacity=0,j.transition(400)},1e3))}function p(w){!t.params.scrollbar.el||!t.scrollbar.el||t.scrollbar.$dragEl.transition(w)}function y(){if(!t.params.scrollbar.el||!t.scrollbar.el)return;let{scrollbar:w}=t,{$dragEl:E,$el:P}=w;E[0].style.width="",E[0].style.height="",u=t.isHorizontal()?P[0].offsetWidth:P[0].offsetHeight,d=t.size/(t.virtualSize+t.params.slidesOffsetBefore-(t.params.centeredSlides?t.snapGrid[0]:0)),t.params.scrollbar.dragSize==="auto"?c=u*d:c=parseInt(t.params.scrollbar.dragSize,10),t.isHorizontal()?E[0].style.width=`${c}px`:E[0].style.height=`${c}px`,d>=1?P[0].style.display="none":P[0].style.display="",t.params.scrollbar.hide&&(P[0].style.opacity=0),t.params.watchOverflow&&t.enabled&&w.$el[t.isLocked?"addClass":"removeClass"](t.params.scrollbar.lockClass)}function h(w){return t.isHorizontal()?w.type==="touchstart"||w.type==="touchmove"?w.targetTouches[0].clientX:w.clientX:w.type==="touchstart"||w.type==="touchmove"?w.targetTouches[0].clientY:w.clientY}function m(w){let{scrollbar:E,rtlTranslate:P}=t,{$el:H}=E,j;j=(h(w)-H.offset()[t.isHorizontal()?"left":"top"]-(s!==null?s:c/2))/(u-c),j=Math.max(Math.min(j,1),0),P&&(j=1-j);let I=t.minTranslate()+(t.maxTranslate()-t.minTranslate())*j;t.updateProgress(I),t.setTranslate(I),t.updateActiveIndex(),t.updateSlidesClasses()}function v(w){let E=t.params.scrollbar,{scrollbar:P,$wrapperEl:H}=t,{$el:j,$dragEl:I}=P;o=!0,s=w.target===I[0]||w.target===I?h(w)-w.target.getBoundingClientRect()[t.isHorizontal()?"left":"top"]:null,w.preventDefault(),w.stopPropagation(),H.transition(100),I.transition(100),m(w),clearTimeout(l),j.transition(0),E.hide&&j.css("opacity",1),t.params.cssMode&&t.$wrapperEl.css("scroll-snap-type","none"),r("scrollbarDragStart",w)}function b(w){let{scrollbar:E,$wrapperEl:P}=t,{$el:H,$dragEl:j}=E;!o||(w.preventDefault?w.preventDefault():w.returnValue=!1,m(w),P.transition(0),H.transition(0),j.transition(0),r("scrollbarDragMove",w))}function C(w){let E=t.params.scrollbar,{scrollbar:P,$wrapperEl:H}=t,{$el:j}=P;!o||(o=!1,t.params.cssMode&&(t.$wrapperEl.css("scroll-snap-type",""),H.transition("")),E.hide&&(clearTimeout(l),l=Xe(()=>{j.css("opacity",0),j.transition(400)},1e3)),r("scrollbarDragEnd",w),E.snapOnRelease&&t.slideToClosest())}function T(w){let{scrollbar:E,touchEventsTouch:P,touchEventsDesktop:H,params:j,support:I}=t,q=E.$el;if(!q)return;let D=q[0],te=I.passiveListener&&j.passiveListeners?{passive:!1,capture:!1}:!1,le=I.passiveListener&&j.passiveListeners?{passive:!0,capture:!1}:!1;if(!D)return;let Me=w==="on"?"addEventListener":"removeEventListener";I.touch?(D[Me](P.start,v,te),D[Me](P.move,b,te),D[Me](P.end,C,le)):(D[Me](H.start,v,te),i[Me](H.move,b,te),i[Me](H.end,C,le))}function k(){!t.params.scrollbar.el||!t.scrollbar.el||T("on")}function A(){!t.params.scrollbar.el||!t.scrollbar.el||T("off")}function _(){let{scrollbar:w,$el:E}=t;t.params.scrollbar=Cn(t,t.originalParams.scrollbar,t.params.scrollbar,{el:"swiper-scrollbar"});let P=t.params.scrollbar;if(!P.el)return;let H=R(P.el);t.params.uniqueNavElements&&typeof P.el=="string"&&H.length>1&&E.find(P.el).length===1&&(H=E.find(P.el)),H.addClass(t.isHorizontal()?P.horizontalClass:P.verticalClass);let j=H.find(`.${t.params.scrollbar.dragClass}`);j.length===0&&(j=R(`<div class="${t.params.scrollbar.dragClass}"></div>`),H.append(j)),Object.assign(w,{$el:H,el:H[0],$dragEl:j,dragEl:j[0]}),P.draggable&&k(),H&&H[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}function z(){let w=t.params.scrollbar,E=t.scrollbar.$el;E&&E.removeClass(t.isHorizontal()?w.horizontalClass:w.verticalClass),A()}n("init",()=>{t.params.scrollbar.enabled===!1?F():(_(),y(),f())}),n("update resize observerUpdate lock unlock",()=>{y()}),n("setTranslate",()=>{f()}),n("setTransition",(w,E)=>{p(E)}),n("enable disable",()=>{let{$el:w}=t.scrollbar;w&&w[t.enabled?"removeClass":"addClass"](t.params.scrollbar.lockClass)}),n("destroy",()=>{z()});let G=()=>{t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass),_(),y(),f()},F=()=>{t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),t.scrollbar.$el&&t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass),z()};Object.assign(t.scrollbar,{enable:G,disable:F,updateSize:y,setTranslate:f,init:_,destroy:z})}var mf=O(()=>{ve();me();we();pi()});function Ka({swiper:t,extendParams:e,on:n}){e({parallax:{enabled:!1}});let r=(a,l)=>{let{rtl:s}=t,c=R(a),u=s?-1:1,d=c.attr("data-swiper-parallax")||"0",f=c.attr("data-swiper-parallax-x"),p=c.attr("data-swiper-parallax-y"),y=c.attr("data-swiper-parallax-scale"),h=c.attr("data-swiper-parallax-opacity");if(f||p?(f=f||"0",p=p||"0"):t.isHorizontal()?(f=d,p="0"):(p=d,f="0"),f.indexOf("%")>=0?f=`${parseInt(f,10)*l*u}%`:f=`${f*l*u}px`,p.indexOf("%")>=0?p=`${parseInt(p,10)*l}%`:p=`${p*l}px`,typeof h<"u"&&h!==null){let m=h-(h-1)*(1-Math.abs(l));c[0].style.opacity=m}if(typeof y>"u"||y===null)c.transform(`translate3d(${f}, ${p}, 0px)`);else{let m=y-(y-1)*(1-Math.abs(l));c.transform(`translate3d(${f}, ${p}, 0px) scale(${m})`)}},i=()=>{let{$el:a,slides:l,progress:s,snapGrid:c}=t;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{r(u,s)}),l.each((u,d)=>{let f=u.progress;t.params.slidesPerGroup>1&&t.params.slidesPerView!=="auto"&&(f+=Math.ceil(d/2)-s*(c.length-1)),f=Math.min(Math.max(f,-1),1),R(u).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(p=>{r(p,f)})})},o=(a=t.params.speed)=>{let{$el:l}=t;l.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(s=>{let c=R(s),u=parseInt(c.attr("data-swiper-parallax-duration"),10)||a;a===0&&(u=0),c.transition(u)})};n("beforeInit",()=>{!t.params.parallax.enabled||(t.params.watchSlidesProgress=!0,t.originalParams.watchSlidesProgress=!0)}),n("init",()=>{!t.params.parallax.enabled||i()}),n("setTranslate",()=>{!t.params.parallax.enabled||i()}),n("setTransition",(a,l)=>{!t.params.parallax.enabled||o(l)})}var yf=O(()=>{me()});function Za({swiper:t,extendParams:e,on:n,emit:r}){let i=re();e({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),t.zoom={enabled:!1};let o=1,a=!1,l,s,c,u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},d={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},f={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},p=1;Object.defineProperty(t.zoom,"scale",{get(){return p},set(I){if(p!==I){let q=u.$imageEl?u.$imageEl[0]:void 0,D=u.$slideEl?u.$slideEl[0]:void 0;r("zoomChange",I,q,D)}p=I}});function y(I){if(I.targetTouches.length<2)return 1;let q=I.targetTouches[0].pageX,D=I.targetTouches[0].pageY,te=I.targetTouches[1].pageX,le=I.targetTouches[1].pageY;return Math.sqrt((te-q)**2+(le-D)**2)}function h(I){let q=t.support,D=t.params.zoom;if(s=!1,c=!1,!q.gestures){if(I.type!=="touchstart"||I.type==="touchstart"&&I.targetTouches.length<2)return;s=!0,u.scaleStart=y(I)}if((!u.$slideEl||!u.$slideEl.length)&&(u.$slideEl=R(I.target).closest(`.${t.params.slideClass}`),u.$slideEl.length===0&&(u.$slideEl=t.slides.eq(t.activeIndex)),u.$imageEl=u.$slideEl.find(`.${D.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${D.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||D.maxRatio,u.$imageWrapEl.length===0)){u.$imageEl=void 0;return}u.$imageEl&&u.$imageEl.transition(0),a=!0}function m(I){let q=t.support,D=t.params.zoom,te=t.zoom;if(!q.gestures){if(I.type!=="touchmove"||I.type==="touchmove"&&I.targetTouches.length<2)return;c=!0,u.scaleMove=y(I)}if(!u.$imageEl||u.$imageEl.length===0){I.type==="gesturechange"&&h(I);return}q.gestures?te.scale=I.scale*o:te.scale=u.scaleMove/u.scaleStart*o,te.scale>u.maxRatio&&(te.scale=u.maxRatio-1+(te.scale-u.maxRatio+1)**.5),te.scale<D.minRatio&&(te.scale=D.minRatio+1-(D.minRatio-te.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${te.scale})`)}function v(I){let q=t.device,D=t.support,te=t.params.zoom,le=t.zoom;if(!D.gestures){if(!s||!c||I.type!=="touchend"||I.type==="touchend"&&I.changedTouches.length<2&&!q.android)return;s=!1,c=!1}!u.$imageEl||u.$imageEl.length===0||(le.scale=Math.max(Math.min(le.scale,u.maxRatio),te.minRatio),u.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${le.scale})`),o=le.scale,a=!1,le.scale===1&&(u.$slideEl=void 0))}function b(I){let q=t.device;!u.$imageEl||u.$imageEl.length===0||d.isTouched||(q.android&&I.cancelable&&I.preventDefault(),d.isTouched=!0,d.touchesStart.x=I.type==="touchstart"?I.targetTouches[0].pageX:I.pageX,d.touchesStart.y=I.type==="touchstart"?I.targetTouches[0].pageY:I.pageY)}function C(I){let q=t.zoom;if(!u.$imageEl||u.$imageEl.length===0||(t.allowClick=!1,!d.isTouched||!u.$slideEl))return;d.isMoved||(d.width=u.$imageEl[0].offsetWidth,d.height=u.$imageEl[0].offsetHeight,d.startX=Er(u.$imageWrapEl[0],"x")||0,d.startY=Er(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));let D=d.width*q.scale,te=d.height*q.scale;if(!(D<u.slideWidth&&te<u.slideHeight)){if(d.minX=Math.min(u.slideWidth/2-D/2,0),d.maxX=-d.minX,d.minY=Math.min(u.slideHeight/2-te/2,0),d.maxY=-d.minY,d.touchesCurrent.x=I.type==="touchmove"?I.targetTouches[0].pageX:I.pageX,d.touchesCurrent.y=I.type==="touchmove"?I.targetTouches[0].pageY:I.pageY,!d.isMoved&&!a){if(t.isHorizontal()&&(Math.floor(d.minX)===Math.floor(d.startX)&&d.touchesCurrent.x<d.touchesStart.x||Math.floor(d.maxX)===Math.floor(d.startX)&&d.touchesCurrent.x>d.touchesStart.x)){d.isTouched=!1;return}if(!t.isHorizontal()&&(Math.floor(d.minY)===Math.floor(d.startY)&&d.touchesCurrent.y<d.touchesStart.y||Math.floor(d.maxY)===Math.floor(d.startY)&&d.touchesCurrent.y>d.touchesStart.y)){d.isTouched=!1;return}}I.cancelable&&I.preventDefault(),I.stopPropagation(),d.isMoved=!0,d.currentX=d.touchesCurrent.x-d.touchesStart.x+d.startX,d.currentY=d.touchesCurrent.y-d.touchesStart.y+d.startY,d.currentX<d.minX&&(d.currentX=d.minX+1-(d.minX-d.currentX+1)**.8),d.currentX>d.maxX&&(d.currentX=d.maxX-1+(d.currentX-d.maxX+1)**.8),d.currentY<d.minY&&(d.currentY=d.minY+1-(d.minY-d.currentY+1)**.8),d.currentY>d.maxY&&(d.currentY=d.maxY-1+(d.currentY-d.maxY+1)**.8),f.prevPositionX||(f.prevPositionX=d.touchesCurrent.x),f.prevPositionY||(f.prevPositionY=d.touchesCurrent.y),f.prevTime||(f.prevTime=Date.now()),f.x=(d.touchesCurrent.x-f.prevPositionX)/(Date.now()-f.prevTime)/2,f.y=(d.touchesCurrent.y-f.prevPositionY)/(Date.now()-f.prevTime)/2,Math.abs(d.touchesCurrent.x-f.prevPositionX)<2&&(f.x=0),Math.abs(d.touchesCurrent.y-f.prevPositionY)<2&&(f.y=0),f.prevPositionX=d.touchesCurrent.x,f.prevPositionY=d.touchesCurrent.y,f.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`)}}function T(){let I=t.zoom;if(!u.$imageEl||u.$imageEl.length===0)return;if(!d.isTouched||!d.isMoved){d.isTouched=!1,d.isMoved=!1;return}d.isTouched=!1,d.isMoved=!1;let q=300,D=300,te=f.x*q,le=d.currentX+te,Me=f.y*D,St=d.currentY+Me;f.x!==0&&(q=Math.abs((le-d.currentX)/f.x)),f.y!==0&&(D=Math.abs((St-d.currentY)/f.y));let rn=Math.max(q,D);d.currentX=le,d.currentY=St;let _n=d.width*I.scale,at=d.height*I.scale;d.minX=Math.min(u.slideWidth/2-_n/2,0),d.maxX=-d.minX,d.minY=Math.min(u.slideHeight/2-at/2,0),d.maxY=-d.minY,d.currentX=Math.max(Math.min(d.currentX,d.maxX),d.minX),d.currentY=Math.max(Math.min(d.currentY,d.maxY),d.minY),u.$imageWrapEl.transition(rn).transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`)}function k(){let I=t.zoom;u.$slideEl&&t.previousIndex!==t.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),I.scale=1,o=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function A(I){let q=t.zoom,D=t.params.zoom;if(u.$slideEl||(I&&I.target&&(u.$slideEl=R(I.target).closest(`.${t.params.slideClass}`)),u.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?u.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):u.$slideEl=t.slides.eq(t.activeIndex)),u.$imageEl=u.$slideEl.find(`.${D.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${D.containerClass}`)),!u.$imageEl||u.$imageEl.length===0||!u.$imageWrapEl||u.$imageWrapEl.length===0)return;t.params.cssMode&&(t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${D.zoomedSlideClass}`);let te,le,Me,St,rn,_n,at,Wt,er,tr,Pn,nr,Yt,Fn,rr,ir,or,ar;typeof d.touchesStart.x>"u"&&I?(te=I.type==="touchend"?I.changedTouches[0].pageX:I.pageX,le=I.type==="touchend"?I.changedTouches[0].pageY:I.pageY):(te=d.touchesStart.x,le=d.touchesStart.y),q.scale=u.$imageWrapEl.attr("data-swiper-zoom")||D.maxRatio,o=u.$imageWrapEl.attr("data-swiper-zoom")||D.maxRatio,I?(or=u.$slideEl[0].offsetWidth,ar=u.$slideEl[0].offsetHeight,Me=u.$slideEl.offset().left+i.scrollX,St=u.$slideEl.offset().top+i.scrollY,rn=Me+or/2-te,_n=St+ar/2-le,er=u.$imageEl[0].offsetWidth,tr=u.$imageEl[0].offsetHeight,Pn=er*q.scale,nr=tr*q.scale,Yt=Math.min(or/2-Pn/2,0),Fn=Math.min(ar/2-nr/2,0),rr=-Yt,ir=-Fn,at=rn*q.scale,Wt=_n*q.scale,at<Yt&&(at=Yt),at>rr&&(at=rr),Wt<Fn&&(Wt=Fn),Wt>ir&&(Wt=ir)):(at=0,Wt=0),u.$imageWrapEl.transition(300).transform(`translate3d(${at}px, ${Wt}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${q.scale})`)}function _(){let I=t.zoom,q=t.params.zoom;u.$slideEl||(t.params.virtual&&t.params.virtual.enabled&&t.virtual?u.$slideEl=t.$wrapperEl.children(`.${t.params.slideActiveClass}`):u.$slideEl=t.slides.eq(t.activeIndex),u.$imageEl=u.$slideEl.find(`.${q.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${q.containerClass}`)),!(!u.$imageEl||u.$imageEl.length===0||!u.$imageWrapEl||u.$imageWrapEl.length===0)&&(t.params.cssMode&&(t.wrapperEl.style.overflow="",t.wrapperEl.style.touchAction=""),I.scale=1,o=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${q.zoomedSlideClass}`),u.$slideEl=void 0)}function z(I){let q=t.zoom;q.scale&&q.scale!==1?_():A(I)}function G(){let I=t.support,q=t.touchEvents.start==="touchstart"&&I.passiveListener&&t.params.passiveListeners?{passive:!0,capture:!1}:!1,D=I.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:q,activeListenerWithCapture:D}}function F(){return`.${t.params.slideClass}`}function w(I){let{passiveListener:q}=G(),D=F();t.$wrapperEl[I]("gesturestart",D,h,q),t.$wrapperEl[I]("gesturechange",D,m,q),t.$wrapperEl[I]("gestureend",D,v,q)}function E(){l||(l=!0,w("on"))}function P(){!l||(l=!1,w("off"))}function H(){let I=t.zoom;if(I.enabled)return;I.enabled=!0;let q=t.support,{passiveListener:D,activeListenerWithCapture:te}=G(),le=F();q.gestures?(t.$wrapperEl.on(t.touchEvents.start,E,D),t.$wrapperEl.on(t.touchEvents.end,P,D)):t.touchEvents.start==="touchstart"&&(t.$wrapperEl.on(t.touchEvents.start,le,h,D),t.$wrapperEl.on(t.touchEvents.move,le,m,te),t.$wrapperEl.on(t.touchEvents.end,le,v,D),t.touchEvents.cancel&&t.$wrapperEl.on(t.touchEvents.cancel,le,v,D)),t.$wrapperEl.on(t.touchEvents.move,`.${t.params.zoom.containerClass}`,C,te)}function j(){let I=t.zoom;if(!I.enabled)return;let q=t.support;I.enabled=!1;let{passiveListener:D,activeListenerWithCapture:te}=G(),le=F();q.gestures?(t.$wrapperEl.off(t.touchEvents.start,E,D),t.$wrapperEl.off(t.touchEvents.end,P,D)):t.touchEvents.start==="touchstart"&&(t.$wrapperEl.off(t.touchEvents.start,le,h,D),t.$wrapperEl.off(t.touchEvents.move,le,m,te),t.$wrapperEl.off(t.touchEvents.end,le,v,D),t.touchEvents.cancel&&t.$wrapperEl.off(t.touchEvents.cancel,le,v,D)),t.$wrapperEl.off(t.touchEvents.move,`.${t.params.zoom.containerClass}`,C,te)}n("init",()=>{t.params.zoom.enabled&&H()}),n("destroy",()=>{j()}),n("touchStart",(I,q)=>{!t.zoom.enabled||b(q)}),n("touchEnd",(I,q)=>{!t.zoom.enabled||T(q)}),n("doubleTap",(I,q)=>{!t.animating&&t.params.zoom.enabled&&t.zoom.enabled&&t.params.zoom.toggle&&z(q)}),n("transitionEnd",()=>{t.zoom.enabled&&t.params.zoom.enabled&&k()}),n("slideChange",()=>{t.zoom.enabled&&t.params.zoom.enabled&&t.params.cssMode&&k()}),Object.assign(t.zoom,{enable:H,disable:j,in:A,out:_,toggle:z})}var bf=O(()=>{ve();me();we()});function es({swiper:t,extendParams:e,on:n,emit:r}){e({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),t.lazy={};let i=!1,o=!1;function a(c,u=!0){let d=t.params.lazy;if(typeof c>"u"||t.slides.length===0)return;let p=t.virtual&&t.params.virtual.enabled?t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${c}"]`):t.slides.eq(c),y=p.find(`.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`);p.hasClass(d.elementClass)&&!p.hasClass(d.loadedClass)&&!p.hasClass(d.loadingClass)&&y.push(p[0]),y.length!==0&&y.each(h=>{let m=R(h);m.addClass(d.loadingClass);let v=m.attr("data-background"),b=m.attr("data-src"),C=m.attr("data-srcset"),T=m.attr("data-sizes"),k=m.parent("picture");t.loadImage(m[0],b||v,C,T,!1,()=>{if(!(typeof t>"u"||t===null||!t||t&&!t.params||t.destroyed)){if(v?(m.css("background-image",`url("${v}")`),m.removeAttr("data-background")):(C&&(m.attr("srcset",C),m.removeAttr("data-srcset")),T&&(m.attr("sizes",T),m.removeAttr("data-sizes")),k.length&&k.children("source").each(A=>{let _=R(A);_.attr("data-srcset")&&(_.attr("srcset",_.attr("data-srcset")),_.removeAttr("data-srcset"))}),b&&(m.attr("src",b),m.removeAttr("data-src"))),m.addClass(d.loadedClass).removeClass(d.loadingClass),p.find(`.${d.preloaderClass}`).remove(),t.params.loop&&u){let A=p.attr("data-swiper-slide-index");if(p.hasClass(t.params.slideDuplicateClass)){let _=t.$wrapperEl.children(`[data-swiper-slide-index="${A}"]:not(.${t.params.slideDuplicateClass})`);a(_.index(),!1)}else{let _=t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${A}"]`);a(_.index(),!1)}}r("lazyImageReady",p[0],m[0]),t.params.autoHeight&&t.updateAutoHeight()}}),r("lazyImageLoad",p[0],m[0])})}function l(){let{$wrapperEl:c,params:u,slides:d,activeIndex:f}=t,p=t.virtual&&u.virtual.enabled,y=u.lazy,h=u.slidesPerView;h==="auto"&&(h=0);function m(b){if(p){if(c.children(`.${u.slideClass}[data-swiper-slide-index="${b}"]`).length)return!0}else if(d[b])return!0;return!1}function v(b){return p?R(b).attr("data-swiper-slide-index"):R(b).index()}if(o||(o=!0),t.params.watchSlidesProgress)c.children(`.${u.slideVisibleClass}`).each(b=>{let C=p?R(b).attr("data-swiper-slide-index"):R(b).index();a(C)});else if(h>1)for(let b=f;b<f+h;b+=1)m(b)&&a(b);else a(f);if(y.loadPrevNext)if(h>1||y.loadPrevNextAmount&&y.loadPrevNextAmount>1){let b=y.loadPrevNextAmount,C=Math.ceil(h),T=Math.min(f+C+Math.max(b,C),d.length),k=Math.max(f-Math.max(C,b),0);for(let A=f+C;A<T;A+=1)m(A)&&a(A);for(let A=k;A<f;A+=1)m(A)&&a(A)}else{let b=c.children(`.${u.slideNextClass}`);b.length>0&&a(v(b));let C=c.children(`.${u.slidePrevClass}`);C.length>0&&a(v(C))}}function s(){let c=re();if(!t||t.destroyed)return;let u=t.params.lazy.scrollingElement?R(t.params.lazy.scrollingElement):R(c),d=u[0]===c,f=d?c.innerWidth:u[0].offsetWidth,p=d?c.innerHeight:u[0].offsetHeight,y=t.$el.offset(),{rtlTranslate:h}=t,m=!1;h&&(y.left-=t.$el[0].scrollLeft);let v=[[y.left,y.top],[y.left+t.width,y.top],[y.left,y.top+t.height],[y.left+t.width,y.top+t.height]];for(let C=0;C<v.length;C+=1){let T=v[C];if(T[0]>=0&&T[0]<=f&&T[1]>=0&&T[1]<=p){if(T[0]===0&&T[1]===0)continue;m=!0}}let b=t.touchEvents.start==="touchstart"&&t.support.passiveListener&&t.params.passiveListeners?{passive:!0,capture:!1}:!1;m?(l(),u.off("scroll",s,b)):i||(i=!0,u.on("scroll",s,b))}n("beforeInit",()=>{t.params.lazy.enabled&&t.params.preloadImages&&(t.params.preloadImages=!1)}),n("init",()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?s():l())}),n("scroll",()=>{t.params.freeMode&&t.params.freeMode.enabled&&!t.params.freeMode.sticky&&l()}),n("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{t.params.lazy.enabled&&(t.params.lazy.checkInView?s():l())}),n("transitionStart",()=>{t.params.lazy.enabled&&(t.params.lazy.loadOnTransitionStart||!t.params.lazy.loadOnTransitionStart&&!o)&&(t.params.lazy.checkInView?s():l())}),n("transitionEnd",()=>{t.params.lazy.enabled&&!t.params.lazy.loadOnTransitionStart&&(t.params.lazy.checkInView?s():l())}),n("slideChange",()=>{let{lazy:c,cssMode:u,watchSlidesProgress:d,touchReleaseOnEdges:f,resistanceRatio:p}=t.params;c.enabled&&(u||d&&(f||p===0))&&l()}),n("destroy",()=>{!t.$el||t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)}),Object.assign(t.lazy,{load:l,loadInSlide:a})}var vf=O(()=>{ve();me()});function ts({swiper:t,extendParams:e,on:n}){e({controller:{control:void 0,inverse:!1,by:"slide"}}),t.controller={control:void 0};function r(s,c){let u=function(){let y,h,m;return(v,b)=>{for(h=-1,y=v.length;y-h>1;)m=y+h>>1,v[m]<=b?h=m:y=m;return y}}();this.x=s,this.y=c,this.lastIndex=s.length-1;let d,f;return this.interpolate=function(y){return y?(f=u(this.x,y),d=f-1,(y-this.x[d])*(this.y[f]-this.y[d])/(this.x[f]-this.x[d])+this.y[d]):0},this}function i(s){t.controller.spline||(t.controller.spline=t.params.loop?new r(t.slidesGrid,s.slidesGrid):new r(t.snapGrid,s.snapGrid))}function o(s,c){let u=t.controller.control,d,f,p=t.constructor;function y(h){let m=t.rtlTranslate?-t.translate:t.translate;t.params.controller.by==="slide"&&(i(h),f=-t.controller.spline.interpolate(-m)),(!f||t.params.controller.by==="container")&&(d=(h.maxTranslate()-h.minTranslate())/(t.maxTranslate()-t.minTranslate()),f=(m-t.minTranslate())*d+h.minTranslate()),t.params.controller.inverse&&(f=h.maxTranslate()-f),h.updateProgress(f),h.setTranslate(f,t),h.updateActiveIndex(),h.updateSlidesClasses()}if(Array.isArray(u))for(let h=0;h<u.length;h+=1)u[h]!==c&&u[h]instanceof p&&y(u[h]);else u instanceof p&&c!==u&&y(u)}function a(s,c){let u=t.constructor,d=t.controller.control,f;function p(y){y.setTransition(s,t),s!==0&&(y.transitionStart(),y.params.autoHeight&&Xe(()=>{y.updateAutoHeight()}),y.$wrapperEl.transitionEnd(()=>{!d||(y.params.loop&&t.params.controller.by==="slide"&&y.loopFix(),y.transitionEnd())}))}if(Array.isArray(d))for(f=0;f<d.length;f+=1)d[f]!==c&&d[f]instanceof u&&p(d[f]);else d instanceof u&&c!==d&&p(d)}function l(){!t.controller.control||t.controller.spline&&(t.controller.spline=void 0,delete t.controller.spline)}n("beforeInit",()=>{t.controller.control=t.params.controller.control}),n("update",()=>{l()}),n("resize",()=>{l()}),n("observerUpdate",()=>{l()}),n("setTranslate",(s,c,u)=>{!t.controller.control||t.controller.setTranslate(c,u)}),n("setTransition",(s,c,u)=>{!t.controller.control||t.controller.setTransition(c,u)}),Object.assign(t.controller,{setTranslate:o,setTransition:a})}var Cf=O(()=>{we()});function ns({swiper:t,extendParams:e,on:n}){e({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),t.a11y={clicked:!1};let r=null;function i(E){let P=r;P.length!==0&&(P.html(""),P.html(E))}function o(E=16){let P=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(E).replace(/x/g,P)}function a(E){E.attr("tabIndex","0")}function l(E){E.attr("tabIndex","-1")}function s(E,P){E.attr("role",P)}function c(E,P){E.attr("aria-roledescription",P)}function u(E,P){E.attr("aria-controls",P)}function d(E,P){E.attr("aria-label",P)}function f(E,P){E.attr("id",P)}function p(E,P){E.attr("aria-live",P)}function y(E){E.attr("aria-disabled",!0)}function h(E){E.attr("aria-disabled",!1)}function m(E){if(E.keyCode!==13&&E.keyCode!==32)return;let P=t.params.a11y,H=R(E.target);t.navigation&&t.navigation.$nextEl&&H.is(t.navigation.$nextEl)&&(t.isEnd&&!t.params.loop||t.slideNext(),t.isEnd?i(P.lastSlideMessage):i(P.nextSlideMessage)),t.navigation&&t.navigation.$prevEl&&H.is(t.navigation.$prevEl)&&(t.isBeginning&&!t.params.loop||t.slidePrev(),t.isBeginning?i(P.firstSlideMessage):i(P.prevSlideMessage)),t.pagination&&H.is(bt(t.params.pagination.bulletClass))&&H[0].click()}function v(){if(t.params.loop||t.params.rewind||!t.navigation)return;let{$nextEl:E,$prevEl:P}=t.navigation;P&&P.length>0&&(t.isBeginning?(y(P),l(P)):(h(P),a(P))),E&&E.length>0&&(t.isEnd?(y(E),l(E)):(h(E),a(E)))}function b(){return t.pagination&&t.pagination.bullets&&t.pagination.bullets.length}function C(){return b()&&t.params.pagination.clickable}function T(){let E=t.params.a11y;!b()||t.pagination.bullets.each(P=>{let H=R(P);t.params.pagination.clickable&&(a(H),t.params.pagination.renderBullet||(s(H,"button"),d(H,E.paginationBulletMessage.replace(/\{\{index\}\}/,H.index()+1)))),H.is(`.${t.params.pagination.bulletActiveClass}`)?H.attr("aria-current","true"):H.removeAttr("aria-current")})}let k=(E,P,H)=>{a(E),E[0].tagName!=="BUTTON"&&(s(E,"button"),E.on("keydown",m)),d(E,H),u(E,P)},A=()=>{t.a11y.clicked=!0},_=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{t.destroyed||(t.a11y.clicked=!1)})})},z=E=>{if(t.a11y.clicked)return;let P=E.target.closest(`.${t.params.slideClass}`);if(!P||!t.slides.includes(P))return;let H=t.slides.indexOf(P)===t.activeIndex,j=t.params.watchSlidesProgress&&t.visibleSlides&&t.visibleSlides.includes(P);H||j||E.sourceCapabilities&&E.sourceCapabilities.firesTouchEvents||(t.isHorizontal()?t.el.scrollLeft=0:t.el.scrollTop=0,t.slideTo(t.slides.indexOf(P),0))},G=()=>{let E=t.params.a11y;E.itemRoleDescriptionMessage&&c(R(t.slides),E.itemRoleDescriptionMessage),E.slideRole&&s(R(t.slides),E.slideRole);let P=t.params.loop?t.slides.filter(H=>!H.classList.contains(t.params.slideDuplicateClass)).length:t.slides.length;E.slideLabelMessage&&t.slides.each((H,j)=>{let I=R(H),q=t.params.loop?parseInt(I.attr("data-swiper-slide-index"),10):j,D=E.slideLabelMessage.replace(/\{\{index\}\}/,q+1).replace(/\{\{slidesLength\}\}/,P);d(I,D)})},F=()=>{let E=t.params.a11y;t.$el.append(r);let P=t.$el;E.containerRoleDescriptionMessage&&c(P,E.containerRoleDescriptionMessage),E.containerMessage&&d(P,E.containerMessage);let H=t.$wrapperEl,j=E.id||H.attr("id")||`swiper-wrapper-${o(16)}`,I=t.params.autoplay&&t.params.autoplay.enabled?"off":"polite";f(H,j),p(H,I),G();let q,D;t.navigation&&t.navigation.$nextEl&&(q=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(D=t.navigation.$prevEl),q&&q.length&&k(q,j,E.nextSlideMessage),D&&D.length&&k(D,j,E.prevSlideMessage),C()&&t.pagination.$el.on("keydown",bt(t.params.pagination.bulletClass),m),t.$el.on("focus",z,!0),t.$el.on("pointerdown",A,!0),t.$el.on("pointerup",_,!0)};function w(){r&&r.length>0&&r.remove();let E,P;t.navigation&&t.navigation.$nextEl&&(E=t.navigation.$nextEl),t.navigation&&t.navigation.$prevEl&&(P=t.navigation.$prevEl),E&&E.off("keydown",m),P&&P.off("keydown",m),C()&&t.pagination.$el.off("keydown",bt(t.params.pagination.bulletClass),m),t.$el.off("focus",z,!0),t.$el.off("pointerdown",A,!0),t.$el.off("pointerup",_,!0)}n("beforeInit",()=>{r=R(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}),n("afterInit",()=>{!t.params.a11y.enabled||F()}),n("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{!t.params.a11y.enabled||G()}),n("fromEdge toEdge afterInit lock unlock",()=>{!t.params.a11y.enabled||v()}),n("paginationUpdate",()=>{!t.params.a11y.enabled||T()}),n("destroy",()=>{!t.params.a11y.enabled||w()})}var xf=O(()=>{Qa();me()});function rs({swiper:t,extendParams:e,on:n}){e({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let r=!1,i={},o=f=>f.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),a=f=>{let p=re(),y;f?y=new URL(f):y=p.location;let h=y.pathname.slice(1).split("/").filter(C=>C!==""),m=h.length,v=h[m-2],b=h[m-1];return{key:v,value:b}},l=(f,p)=>{let y=re();if(!r||!t.params.history.enabled)return;let h;t.params.url?h=new URL(t.params.url):h=y.location;let m=t.slides.eq(p),v=o(m.attr("data-history"));if(t.params.history.root.length>0){let C=t.params.history.root;C[C.length-1]==="/"&&(C=C.slice(0,C.length-1)),v=`${C}/${f}/${v}`}else h.pathname.includes(f)||(v=`${f}/${v}`);t.params.history.keepQuery&&(v+=h.search);let b=y.history.state;b&&b.value===v||(t.params.history.replaceState?y.history.replaceState({value:v},null,v):y.history.pushState({value:v},null,v))},s=(f,p,y)=>{if(p)for(let h=0,m=t.slides.length;h<m;h+=1){let v=t.slides.eq(h);if(o(v.attr("data-history"))===p&&!v.hasClass(t.params.slideDuplicateClass)){let C=v.index();t.slideTo(C,f,y)}}else t.slideTo(0,f,y)},c=()=>{i=a(t.params.url),s(t.params.speed,i.value,!1)},u=()=>{let f=re();if(!!t.params.history){if(!f.history||!f.history.pushState){t.params.history.enabled=!1,t.params.hashNavigation.enabled=!0;return}r=!0,i=a(t.params.url),!(!i.key&&!i.value)&&(s(0,i.value,t.params.runCallbacksOnInit),t.params.history.replaceState||f.addEventListener("popstate",c))}},d=()=>{let f=re();t.params.history.replaceState||f.removeEventListener("popstate",c)};n("init",()=>{t.params.history.enabled&&u()}),n("destroy",()=>{t.params.history.enabled&&d()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{r&&l(t.params.history.key,t.activeIndex)}),n("slideChange",()=>{r&&t.params.cssMode&&l(t.params.history.key,t.activeIndex)})}var Af=O(()=>{ve()});function is({swiper:t,extendParams:e,emit:n,on:r}){let i=!1,o=fe(),a=re();e({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});let l=()=>{n("hashChange");let d=o.location.hash.replace("#",""),f=t.slides.eq(t.activeIndex).attr("data-hash");if(d!==f){let p=t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${d}"]`).index();if(typeof p>"u")return;t.slideTo(p)}},s=()=>{if(!(!i||!t.params.hashNavigation.enabled))if(t.params.hashNavigation.replaceState&&a.history&&a.history.replaceState)a.history.replaceState(null,null,`#${t.slides.eq(t.activeIndex).attr("data-hash")}`||""),n("hashSet");else{let d=t.slides.eq(t.activeIndex),f=d.attr("data-hash")||d.attr("data-history");o.location.hash=f||"",n("hashSet")}},c=()=>{if(!t.params.hashNavigation.enabled||t.params.history&&t.params.history.enabled)return;i=!0;let d=o.location.hash.replace("#","");if(d)for(let p=0,y=t.slides.length;p<y;p+=1){let h=t.slides.eq(p);if((h.attr("data-hash")||h.attr("data-history"))===d&&!h.hasClass(t.params.slideDuplicateClass)){let v=h.index();t.slideTo(v,0,t.params.runCallbacksOnInit,!0)}}t.params.hashNavigation.watchState&&R(a).on("hashchange",l)},u=()=>{t.params.hashNavigation.watchState&&R(a).off("hashchange",l)};r("init",()=>{t.params.hashNavigation.enabled&&c()}),r("destroy",()=>{t.params.hashNavigation.enabled&&u()}),r("transitionEnd _freeModeNoMomentumRelease",()=>{i&&s()}),r("slideChange",()=>{i&&t.params.cssMode&&s()})}var Ef=O(()=>{ve();me()});function os({swiper:t,extendParams:e,on:n,emit:r}){let i;t.autoplay={running:!1,paused:!1},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function o(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}let h=t.slides.eq(t.activeIndex),m=t.params.autoplay.delay;h.attr("data-swiper-autoplay")&&(m=h.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(i),i=Xe(()=>{let v;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),v=t.slidePrev(t.params.speed,!0,!0),r("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?l():(v=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),r("autoplay")):(v=t.slidePrev(t.params.speed,!0,!0),r("autoplay")):t.params.loop?(t.loopFix(),v=t.slideNext(t.params.speed,!0,!0),r("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?l():(v=t.slideTo(0,t.params.speed,!0,!0),r("autoplay")):(v=t.slideNext(t.params.speed,!0,!0),r("autoplay")),(t.params.cssMode&&t.autoplay.running||v===!1)&&o()},m)}function a(){return typeof i<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,r("autoplayStart"),o(),!0)}function l(){return!t.autoplay.running||typeof i>"u"?!1:(i&&(clearTimeout(i),i=void 0),t.autoplay.running=!1,r("autoplayStop"),!0)}function s(h){!t.autoplay.running||t.autoplay.paused||(i&&clearTimeout(i),t.autoplay.paused=!0,h===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,o()):["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].addEventListener(m,u)}))}function c(){let h=fe();h.visibilityState==="hidden"&&t.autoplay.running&&s(),h.visibilityState==="visible"&&t.autoplay.paused&&(o(),t.autoplay.paused=!1)}function u(h){!t||t.destroyed||!t.$wrapperEl||h.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(m=>{t.$wrapperEl[0].removeEventListener(m,u)}),t.autoplay.paused=!1,t.autoplay.running?o():l())}function d(){t.params.autoplay.disableOnInteraction?l():(r("autoplayPause"),s()),["transitionend","webkitTransitionEnd"].forEach(h=>{t.$wrapperEl[0].removeEventListener(h,u)})}function f(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,r("autoplayResume"),o())}function p(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",d),t.$el.on("mouseleave",f))}function y(){t.$el.off("mouseenter",d),t.$el.off("mouseleave",f)}n("init",()=>{t.params.autoplay.enabled&&(a(),fe().addEventListener("visibilitychange",c),p())}),n("beforeTransitionStart",(h,m,v)=>{t.autoplay.running&&(v||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(m):l())}),n("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?l():s())}),n("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&o()}),n("destroy",()=>{y(),t.autoplay.running&&l(),fe().removeEventListener("visibilitychange",c)}),Object.assign(t.autoplay,{pause:s,run:o,start:a,stop:l})}var Sf=O(()=>{ve();we()});function as({swiper:t,extendParams:e,on:n}){e({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let r=!1,i=!1;t.thumbs={swiper:null};function o(){let s=t.thumbs.swiper;if(!s||s.destroyed)return;let c=s.clickedIndex,u=s.clickedSlide;if(u&&R(u).hasClass(t.params.thumbs.slideThumbActiveClass)||typeof c>"u"||c===null)return;let d;if(s.params.loop?d=parseInt(R(s.clickedSlide).attr("data-swiper-slide-index"),10):d=c,t.params.loop){let f=t.activeIndex;t.slides.eq(f).hasClass(t.params.slideDuplicateClass)&&(t.loopFix(),t._clientLeft=t.$wrapperEl[0].clientLeft,f=t.activeIndex);let p=t.slides.eq(f).prevAll(`[data-swiper-slide-index="${d}"]`).eq(0).index(),y=t.slides.eq(f).nextAll(`[data-swiper-slide-index="${d}"]`).eq(0).index();typeof p>"u"?d=y:typeof y>"u"?d=p:y-f<f-p?d=y:d=p}t.slideTo(d)}function a(){let{thumbs:s}=t.params;if(r)return!1;r=!0;let c=t.constructor;if(s.swiper instanceof c)t.thumbs.swiper=s.swiper,Object.assign(t.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(t.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(jn(s.swiper)){let u=Object.assign({},s.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),t.thumbs.swiper=new c(u),i=!0}return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),t.thumbs.swiper.on("tap",o),!0}function l(s){let c=t.thumbs.swiper;if(!c||c.destroyed)return;let u=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,d=1,f=t.params.thumbs.slideThumbActiveClass;if(t.params.slidesPerView>1&&!t.params.centeredSlides&&(d=t.params.slidesPerView),t.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),c.slides.removeClass(f),c.params.loop||c.params.virtual&&c.params.virtual.enabled)for(let h=0;h<d;h+=1)c.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+h}"]`).addClass(f);else for(let h=0;h<d;h+=1)c.slides.eq(t.realIndex+h).addClass(f);let p=t.params.thumbs.autoScrollOffset,y=p&&!c.params.loop;if(t.realIndex!==c.realIndex||y){let h=c.activeIndex,m,v;if(c.params.loop){c.slides.eq(h).hasClass(c.params.slideDuplicateClass)&&(c.loopFix(),c._clientLeft=c.$wrapperEl[0].clientLeft,h=c.activeIndex);let b=c.slides.eq(h).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),C=c.slides.eq(h).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();typeof b>"u"?m=C:typeof C>"u"?m=b:C-h===h-b?m=c.params.slidesPerGroup>1?C:h:C-h<h-b?m=C:m=b,v=t.activeIndex>t.previousIndex?"next":"prev"}else m=t.realIndex,v=m>t.previousIndex?"next":"prev";y&&(m+=v==="next"?p:-1*p),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(m)<0&&(c.params.centeredSlides?m>h?m=m-Math.floor(u/2)+1:m=m+Math.floor(u/2)-1:m>h&&c.params.slidesPerGroup,c.slideTo(m,s?0:void 0))}}n("beforeInit",()=>{let{thumbs:s}=t.params;!s||!s.swiper||(a(),l(!0))}),n("slideChange update resize observerUpdate",()=>{l()}),n("setTransition",(s,c)=>{let u=t.thumbs.swiper;!u||u.destroyed||u.setTransition(c)}),n("beforeDestroy",()=>{let s=t.thumbs.swiper;!s||s.destroyed||i&&s.destroy()}),Object.assign(t.thumbs,{init:a,update:l})}var wf=O(()=>{we();me()});function ss({swiper:t,extendParams:e,emit:n,once:r}){e({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function i(){let l=t.getTranslate();t.setTranslate(l),t.setTransition(0),t.touchEventsData.velocities.length=0,t.freeMode.onTouchEnd({currentPos:t.rtl?t.translate:-t.translate})}function o(){let{touchEventsData:l,touches:s}=t;l.velocities.length===0&&l.velocities.push({position:s[t.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:s[t.isHorizontal()?"currentX":"currentY"],time:Ie()})}function a({currentPos:l}){let{params:s,$wrapperEl:c,rtlTranslate:u,snapGrid:d,touchEventsData:f}=t,y=Ie()-f.touchStartTime;if(l<-t.minTranslate()){t.slideTo(t.activeIndex);return}if(l>-t.maxTranslate()){t.slides.length<d.length?t.slideTo(d.length-1):t.slideTo(t.slides.length-1);return}if(s.freeMode.momentum){if(f.velocities.length>1){let A=f.velocities.pop(),_=f.velocities.pop(),z=A.position-_.position,G=A.time-_.time;t.velocity=z/G,t.velocity/=2,Math.abs(t.velocity)<s.freeMode.minimumVelocity&&(t.velocity=0),(G>150||Ie()-A.time>300)&&(t.velocity=0)}else t.velocity=0;t.velocity*=s.freeMode.momentumVelocityRatio,f.velocities.length=0;let h=1e3*s.freeMode.momentumRatio,m=t.velocity*h,v=t.translate+m;u&&(v=-v);let b=!1,C,T=Math.abs(t.velocity)*20*s.freeMode.momentumBounceRatio,k;if(v<t.maxTranslate())s.freeMode.momentumBounce?(v+t.maxTranslate()<-T&&(v=t.maxTranslate()-T),C=t.maxTranslate(),b=!0,f.allowMomentumBounce=!0):v=t.maxTranslate(),s.loop&&s.centeredSlides&&(k=!0);else if(v>t.minTranslate())s.freeMode.momentumBounce?(v-t.minTranslate()>T&&(v=t.minTranslate()+T),C=t.minTranslate(),b=!0,f.allowMomentumBounce=!0):v=t.minTranslate(),s.loop&&s.centeredSlides&&(k=!0);else if(s.freeMode.sticky){let A;for(let _=0;_<d.length;_+=1)if(d[_]>-v){A=_;break}Math.abs(d[A]-v)<Math.abs(d[A-1]-v)||t.swipeDirection==="next"?v=d[A]:v=d[A-1],v=-v}if(k&&r("transitionEnd",()=>{t.loopFix()}),t.velocity!==0){if(u?h=Math.abs((-v-t.translate)/t.velocity):h=Math.abs((v-t.translate)/t.velocity),s.freeMode.sticky){let A=Math.abs((u?-v:v)-t.translate),_=t.slidesSizesGrid[t.activeIndex];A<_?h=s.speed:A<2*_?h=s.speed*1.5:h=s.speed*2.5}}else if(s.freeMode.sticky){t.slideToClosest();return}s.freeMode.momentumBounce&&b?(t.updateProgress(C),t.setTransition(h),t.setTranslate(v),t.transitionStart(!0,t.swipeDirection),t.animating=!0,c.transitionEnd(()=>{!t||t.destroyed||!f.allowMomentumBounce||(n("momentumBounce"),t.setTransition(s.speed),setTimeout(()=>{t.setTranslate(C),c.transitionEnd(()=>{!t||t.destroyed||t.transitionEnd()})},0))})):t.velocity?(n("_freeModeNoMomentumRelease"),t.updateProgress(v),t.setTransition(h),t.setTranslate(v),t.transitionStart(!0,t.swipeDirection),t.animating||(t.animating=!0,c.transitionEnd(()=>{!t||t.destroyed||t.transitionEnd()}))):t.updateProgress(v),t.updateActiveIndex(),t.updateSlidesClasses()}else if(s.freeMode.sticky){t.slideToClosest();return}else s.freeMode&&n("_freeModeNoMomentumRelease");(!s.freeMode.momentum||y>=s.longSwipesMs)&&(t.updateProgress(),t.updateActiveIndex(),t.updateSlidesClasses())}Object.assign(t,{freeMode:{onTouchStart:i,onTouchMove:o,onTouchEnd:a}})}var If=O(()=>{we()});function ls({swiper:t,extendParams:e}){e({grid:{rows:1,fill:"column"}});let n,r,i,o=s=>{let{slidesPerView:c}=t.params,{rows:u,fill:d}=t.params.grid;r=n/u,i=Math.floor(s/u),Math.floor(s/u)===s/u?n=s:n=Math.ceil(s/u)*u,c!=="auto"&&d==="row"&&(n=Math.max(n,c*u))},a=(s,c,u,d)=>{let{slidesPerGroup:f,spaceBetween:p}=t.params,{rows:y,fill:h}=t.params.grid,m,v,b;if(h==="row"&&f>1){let C=Math.floor(s/(f*y)),T=s-y*f*C,k=C===0?f:Math.min(Math.ceil((u-C*y*f)/y),f);b=Math.floor(T/k),v=T-b*k+C*f,m=v+b*n/y,c.css({"-webkit-order":m,order:m})}else h==="column"?(v=Math.floor(s/y),b=s-v*y,(v>i||v===i&&b===y-1)&&(b+=1,b>=y&&(b=0,v+=1))):(b=Math.floor(s/r),v=s-b*r);c.css(d("margin-top"),b!==0?p&&`${p}px`:"")},l=(s,c,u)=>{let{spaceBetween:d,centeredSlides:f,roundLengths:p}=t.params,{rows:y}=t.params.grid;if(t.virtualSize=(s+d)*n,t.virtualSize=Math.ceil(t.virtualSize/y)-d,t.$wrapperEl.css({[u("width")]:`${t.virtualSize+d}px`}),f){c.splice(0,c.length);let h=[];for(let m=0;m<c.length;m+=1){let v=c[m];p&&(v=Math.floor(v)),c[m]<t.virtualSize+c[0]&&h.push(v)}c.push(...h)}};t.grid={initSlides:o,updateSlide:a,updateWrapperSize:l}}var kf=O(()=>{});function cs(t){let e=this,{$wrapperEl:n,params:r}=e;if(r.loop&&e.loopDestroy(),typeof t=="object"&&"length"in t)for(let i=0;i<t.length;i+=1)t[i]&&n.append(t[i]);else n.append(t);r.loop&&e.loopCreate(),r.observer||e.update()}var Tf=O(()=>{});function us(t){let e=this,{params:n,$wrapperEl:r,activeIndex:i}=e;n.loop&&e.loopDestroy();let o=i+1;if(typeof t=="object"&&"length"in t){for(let a=0;a<t.length;a+=1)t[a]&&r.prepend(t[a]);o=i+t.length}else r.prepend(t);n.loop&&e.loopCreate(),n.observer||e.update(),e.slideTo(o,0,!1)}var _f=O(()=>{});function ds(t,e){let n=this,{$wrapperEl:r,params:i,activeIndex:o}=n,a=o;i.loop&&(a-=n.loopedSlides,n.loopDestroy(),n.slides=r.children(`.${i.slideClass}`));let l=n.slides.length;if(t<=0){n.prependSlide(e);return}if(t>=l){n.appendSlide(e);return}let s=a>t?a+1:a,c=[];for(let u=l-1;u>=t;u-=1){let d=n.slides.eq(u);d.remove(),c.unshift(d)}if(typeof e=="object"&&"length"in e){for(let u=0;u<e.length;u+=1)e[u]&&r.append(e[u]);s=a>t?a+e.length:a}else r.append(e);for(let u=0;u<c.length;u+=1)r.append(c[u]);i.loop&&n.loopCreate(),i.observer||n.update(),i.loop?n.slideTo(s+n.loopedSlides,0,!1):n.slideTo(s,0,!1)}var Pf=O(()=>{});function fs(t){let e=this,{params:n,$wrapperEl:r,activeIndex:i}=e,o=i;n.loop&&(o-=e.loopedSlides,e.loopDestroy(),e.slides=r.children(`.${n.slideClass}`));let a=o,l;if(typeof t=="object"&&"length"in t){for(let s=0;s<t.length;s+=1)l=t[s],e.slides[l]&&e.slides.eq(l).remove(),l<a&&(a-=1);a=Math.max(a,0)}else l=t,e.slides[l]&&e.slides.eq(l).remove(),l<a&&(a-=1),a=Math.max(a,0);n.loop&&e.loopCreate(),n.observer||e.update(),n.loop?e.slideTo(a+e.loopedSlides,0,!1):e.slideTo(a,0,!1)}var Ff=O(()=>{});function ps(){let t=this,e=[];for(let n=0;n<t.slides.length;n+=1)e.push(n);t.removeSlide(e)}var Df=O(()=>{});function hs({swiper:t}){Object.assign(t,{appendSlide:cs.bind(t),prependSlide:us.bind(t),addSlide:ds.bind(t),removeSlide:fs.bind(t),removeAllSlides:ps.bind(t)})}var Bf=O(()=>{Tf();_f();Pf();Ff();Df()});function st(t){let{effect:e,swiper:n,on:r,setTranslate:i,setTransition:o,overwriteParams:a,perspective:l,recreateShadows:s,getEffectParams:c}=t;r("beforeInit",()=>{if(n.params.effect!==e)return;n.classNames.push(`${n.params.containerModifierClass}${e}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);let d=a?a():{};Object.assign(n.params,d),Object.assign(n.originalParams,d)}),r("setTranslate",()=>{n.params.effect===e&&i()}),r("setTransition",(d,f)=>{n.params.effect===e&&o(f)}),r("transitionEnd",()=>{if(n.params.effect===e&&s){if(!c||!c().slideShadows)return;n.slides.each(d=>{n.$(d).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),s()}});let u;r("virtualUpdate",()=>{n.params.effect===e&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(i(),u=!1)}))})}var xn=O(()=>{});function Tt(t,e){return t.transformEl?e.find(t.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):e}var Qn=O(()=>{});function tn({swiper:t,duration:e,transformEl:n,allSlides:r}){let{slides:i,activeIndex:o,$wrapperEl:a}=t;if(t.params.virtualTranslate&&e!==0){let l=!1,s;r?s=n?i.find(n):i:s=n?i.eq(o).find(n):i.eq(o),s.transitionEnd(()=>{if(l||!t||t.destroyed)return;l=!0,t.animating=!1;let c=["webkitTransitionEnd","transitionend"];for(let u=0;u<c.length;u+=1)a.trigger(c[u])})}}var wr=O(()=>{});function gs({swiper:t,extendParams:e,on:n}){e({fadeEffect:{crossFade:!1,transformEl:null}}),st({effect:"fade",swiper:t,on:n,setTranslate:()=>{let{slides:o}=t,a=t.params.fadeEffect;for(let l=0;l<o.length;l+=1){let s=t.slides.eq(l),u=-s[0].swiperSlideOffset;t.params.virtualTranslate||(u-=t.translate);let d=0;t.isHorizontal()||(d=u,u=0);let f=t.params.fadeEffect.crossFade?Math.max(1-Math.abs(s[0].progress),0):1+Math.min(Math.max(s[0].progress,-1),0);Tt(a,s).css({opacity:f}).transform(`translate3d(${u}px, ${d}px, 0px)`)}},setTransition:o=>{let{transformEl:a}=t.params.fadeEffect;(a?t.slides.find(a):t.slides).transition(o),tn({swiper:t,duration:o,transformEl:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}var Mf=O(()=>{xn();Qn();wr()});function ms({swiper:t,extendParams:e,on:n}){e({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let r=(l,s,c)=>{let u=c?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),d=c?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");u.length===0&&(u=R(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`),l.append(u)),d.length===0&&(d=R(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`),l.append(d)),u.length&&(u[0].style.opacity=Math.max(-s,0)),d.length&&(d[0].style.opacity=Math.max(s,0))};st({effect:"cube",swiper:t,on:n,setTranslate:()=>{let{$el:l,$wrapperEl:s,slides:c,width:u,height:d,rtlTranslate:f,size:p,browser:y}=t,h=t.params.cubeEffect,m=t.isHorizontal(),v=t.virtual&&t.params.virtual.enabled,b=0,C;h.shadow&&(m?(C=s.find(".swiper-cube-shadow"),C.length===0&&(C=R('<div class="swiper-cube-shadow"></div>'),s.append(C)),C.css({height:`${u}px`})):(C=l.find(".swiper-cube-shadow"),C.length===0&&(C=R('<div class="swiper-cube-shadow"></div>'),l.append(C))));for(let k=0;k<c.length;k+=1){let A=c.eq(k),_=k;v&&(_=parseInt(A.attr("data-swiper-slide-index"),10));let z=_*90,G=Math.floor(z/360);f&&(z=-z,G=Math.floor(-z/360));let F=Math.max(Math.min(A[0].progress,1),-1),w=0,E=0,P=0;_%4===0?(w=-G*4*p,P=0):(_-1)%4===0?(w=0,P=-G*4*p):(_-2)%4===0?(w=p+G*4*p,P=p):(_-3)%4===0&&(w=-p,P=3*p+p*4*G),f&&(w=-w),m||(E=w,w=0);let H=`rotateX(${m?0:-z}deg) rotateY(${m?z:0}deg) translate3d(${w}px, ${E}px, ${P}px)`;F<=1&&F>-1&&(b=_*90+F*90,f&&(b=-_*90-F*90)),A.transform(H),h.slideShadows&&r(A,F,m)}if(s.css({"-webkit-transform-origin":`50% 50% -${p/2}px`,"transform-origin":`50% 50% -${p/2}px`}),h.shadow)if(m)C.transform(`translate3d(0px, ${u/2+h.shadowOffset}px, ${-u/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);else{let k=Math.abs(b)-Math.floor(Math.abs(b)/90)*90,A=1.5-(Math.sin(k*2*Math.PI/360)/2+Math.cos(k*2*Math.PI/360)/2),_=h.shadowScale,z=h.shadowScale/A,G=h.shadowOffset;C.transform(`scale3d(${_}, 1, ${z}) translate3d(0px, ${d/2+G}px, ${-d/2/z}px) rotateX(-90deg)`)}let T=y.isSafari||y.isWebView?-p/2:0;s.transform(`translate3d(0px,0,${T}px) rotateX(${t.isHorizontal()?0:b}deg) rotateY(${t.isHorizontal()?-b:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${T}px`)},setTransition:l=>{let{$el:s,slides:c}=t;c.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l),t.params.cubeEffect.shadow&&!t.isHorizontal()&&s.find(".swiper-cube-shadow").transition(l)},recreateShadows:()=>{let l=t.isHorizontal();t.slides.each(s=>{let c=Math.max(Math.min(s.progress,1),-1);r(R(s),c,l)})},getEffectParams:()=>t.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}var zf=O(()=>{me();xn()});function _t(t,e,n){let r=`swiper-slide-shadow${n?`-${n}`:""}`,i=t.transformEl?e.find(t.transformEl):e,o=i.children(`.${r}`);return o.length||(o=R(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),i.append(o)),o}var Ir=O(()=>{me()});function ys({swiper:t,extendParams:e,on:n}){e({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});let r=(l,s,c)=>{let u=t.isHorizontal()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),d=t.isHorizontal()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");u.length===0&&(u=_t(c,l,t.isHorizontal()?"left":"top")),d.length===0&&(d=_t(c,l,t.isHorizontal()?"right":"bottom")),u.length&&(u[0].style.opacity=Math.max(-s,0)),d.length&&(d[0].style.opacity=Math.max(s,0))};st({effect:"flip",swiper:t,on:n,setTranslate:()=>{let{slides:l,rtlTranslate:s}=t,c=t.params.flipEffect;for(let u=0;u<l.length;u+=1){let d=l.eq(u),f=d[0].progress;t.params.flipEffect.limitRotation&&(f=Math.max(Math.min(d[0].progress,1),-1));let p=d[0].swiperSlideOffset,h=-180*f,m=0,v=t.params.cssMode?-p-t.translate:-p,b=0;t.isHorizontal()?s&&(h=-h):(b=v,v=0,m=-h,h=0),d[0].style.zIndex=-Math.abs(Math.round(f))+l.length,c.slideShadows&&r(d,f,c);let C=`translate3d(${v}px, ${b}px, 0px) rotateX(${m}deg) rotateY(${h}deg)`;Tt(c,d).transform(C)}},setTransition:l=>{let{transformEl:s}=t.params.flipEffect;(s?t.slides.find(s):t.slides).transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l),tn({swiper:t,duration:l,transformEl:s})},recreateShadows:()=>{let l=t.params.flipEffect;t.slides.each(s=>{let c=R(s),u=c[0].progress;t.params.flipEffect.limitRotation&&(u=Math.max(Math.min(s.progress,1),-1)),r(c,u,l)})},getEffectParams:()=>t.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!t.params.cssMode})})}var Of=O(()=>{me();Ir();xn();Qn();wr()});function bs({swiper:t,extendParams:e,on:n}){e({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),st({effect:"coverflow",swiper:t,on:n,setTranslate:()=>{let{width:o,height:a,slides:l,slidesSizesGrid:s}=t,c=t.params.coverflowEffect,u=t.isHorizontal(),d=t.translate,f=u?-d+o/2:-d+a/2,p=u?c.rotate:-c.rotate,y=c.depth;for(let h=0,m=l.length;h<m;h+=1){let v=l.eq(h),b=s[h],C=v[0].swiperSlideOffset,T=(f-C-b/2)/b,k=typeof c.modifier=="function"?c.modifier(T):T*c.modifier,A=u?p*k:0,_=u?0:p*k,z=-y*Math.abs(k),G=c.stretch;typeof G=="string"&&G.indexOf("%")!==-1&&(G=parseFloat(c.stretch)/100*b);let F=u?0:G*k,w=u?G*k:0,E=1-(1-c.scale)*Math.abs(k);Math.abs(w)<.001&&(w=0),Math.abs(F)<.001&&(F=0),Math.abs(z)<.001&&(z=0),Math.abs(A)<.001&&(A=0),Math.abs(_)<.001&&(_=0),Math.abs(E)<.001&&(E=0);let P=`translate3d(${w}px,${F}px,${z}px)  rotateX(${_}deg) rotateY(${A}deg) scale(${E})`;if(Tt(c,v).transform(P),v[0].style.zIndex=-Math.abs(Math.round(k))+1,c.slideShadows){let j=u?v.find(".swiper-slide-shadow-left"):v.find(".swiper-slide-shadow-top"),I=u?v.find(".swiper-slide-shadow-right"):v.find(".swiper-slide-shadow-bottom");j.length===0&&(j=_t(c,v,u?"left":"top")),I.length===0&&(I=_t(c,v,u?"right":"bottom")),j.length&&(j[0].style.opacity=k>0?k:0),I.length&&(I[0].style.opacity=-k>0?-k:0)}}},setTransition:o=>{let{transformEl:a}=t.params.coverflowEffect;(a?t.slides.find(a):t.slides).transition(o).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(o)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}var Rf=O(()=>{Ir();xn();Qn()});function vs({swiper:t,extendParams:e,on:n}){e({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let r=a=>typeof a=="string"?a:`${a}px`;st({effect:"creative",swiper:t,on:n,setTranslate:()=>{let{slides:a,$wrapperEl:l,slidesSizesGrid:s}=t,c=t.params.creativeEffect,{progressMultiplier:u}=c,d=t.params.centeredSlides;if(d){let f=s[0]/2-t.params.slidesOffsetBefore||0;l.transform(`translateX(calc(50% - ${f}px))`)}for(let f=0;f<a.length;f+=1){let p=a.eq(f),y=p[0].progress,h=Math.min(Math.max(p[0].progress,-c.limitProgress),c.limitProgress),m=h;d||(m=Math.min(Math.max(p[0].originalProgress,-c.limitProgress),c.limitProgress));let v=p[0].swiperSlideOffset,b=[t.params.cssMode?-v-t.translate:-v,0,0],C=[0,0,0],T=!1;t.isHorizontal()||(b[1]=b[0],b[0]=0);let k={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};h<0?(k=c.next,T=!0):h>0&&(k=c.prev,T=!0),b.forEach((E,P)=>{b[P]=`calc(${E}px + (${r(k.translate[P])} * ${Math.abs(h*u)}))`}),C.forEach((E,P)=>{C[P]=k.rotate[P]*Math.abs(h*u)}),p[0].style.zIndex=-Math.abs(Math.round(y))+a.length;let A=b.join(", "),_=`rotateX(${C[0]}deg) rotateY(${C[1]}deg) rotateZ(${C[2]}deg)`,z=m<0?`scale(${1+(1-k.scale)*m*u})`:`scale(${1-(1-k.scale)*m*u})`,G=m<0?1+(1-k.opacity)*m*u:1-(1-k.opacity)*m*u,F=`translate3d(${A}) ${_} ${z}`;if(T&&k.shadow||!T){let E=p.children(".swiper-slide-shadow");if(E.length===0&&k.shadow&&(E=_t(c,p)),E.length){let P=c.shadowPerProgress?h*(1/c.limitProgress):h;E[0].style.opacity=Math.min(Math.max(Math.abs(P),0),1)}}let w=Tt(c,p);w.transform(F).css({opacity:G}),k.origin&&w.css("transform-origin",k.origin)}},setTransition:a=>{let{transformEl:l}=t.params.creativeEffect;(l?t.slides.find(l):t.slides).transition(a).find(".swiper-slide-shadow").transition(a),tn({swiper:t,duration:a,transformEl:l,allSlides:!0})},perspective:()=>t.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}var Lf=O(()=>{Ir();xn();Qn();wr()});function Cs({swiper:t,extendParams:e,on:n}){e({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),st({effect:"cards",swiper:t,on:n,setTranslate:()=>{let{slides:o,activeIndex:a}=t,l=t.params.cardsEffect,{startTranslate:s,isTouched:c}=t.touchEventsData,u=t.translate;for(let d=0;d<o.length;d+=1){let f=o.eq(d),p=f[0].progress,y=Math.min(Math.max(p,-4),4),h=f[0].swiperSlideOffset;t.params.centeredSlides&&!t.params.cssMode&&t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),t.params.centeredSlides&&t.params.cssMode&&(h-=o[0].swiperSlideOffset);let m=t.params.cssMode?-h-t.translate:-h,v=0,b=-100*Math.abs(y),C=1,T=-l.perSlideRotate*y,k=l.perSlideOffset-Math.abs(y)*.75,A=t.virtual&&t.params.virtual.enabled?t.virtual.from+d:d,_=(A===a||A===a-1)&&y>0&&y<1&&(c||t.params.cssMode)&&u<s,z=(A===a||A===a+1)&&y<0&&y>-1&&(c||t.params.cssMode)&&u>s;if(_||z){let E=(1-Math.abs((Math.abs(y)-.5)/.5))**.5;T+=-28*y*E,C+=-.5*E,k+=96*E,v=`${-25*E*Math.abs(y)}%`}if(y<0?m=`calc(${m}px + (${k*Math.abs(y)}%))`:y>0?m=`calc(${m}px + (-${k*Math.abs(y)}%))`:m=`${m}px`,!t.isHorizontal()){let E=v;v=m,m=E}let G=y<0?`${1+(1-C)*y}`:`${1-(1-C)*y}`,F=`
        translate3d(${m}, ${v}, ${b}px)
        rotateZ(${l.rotate?T:0}deg)
        scale(${G})
      `;if(l.slideShadows){let E=f.find(".swiper-slide-shadow");E.length===0&&(E=_t(l,f)),E.length&&(E[0].style.opacity=Math.min(Math.max((Math.abs(y)-.5)/.5,0),1))}f[0].style.zIndex=-Math.abs(Math.round(p))+o.length,Tt(l,f).transform(F)}},setTransition:o=>{let{transformEl:a}=t.params.cardsEffect;(a?t.slides.find(a):t.slides).transition(o).find(".swiper-slide-shadow").transition(o),tn({swiper:t,duration:o,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!t.params.cssMode})})}var Vf=O(()=>{Ir();xn();Qn();wr()});var Nf={};Ge(Nf,{A11y:()=>ns,Autoplay:()=>os,Controller:()=>ts,EffectCards:()=>Cs,EffectCoverflow:()=>bs,EffectCreative:()=>vs,EffectCube:()=>ms,EffectFade:()=>gs,EffectFlip:()=>ys,FreeMode:()=>ss,Grid:()=>ls,HashNavigation:()=>is,History:()=>rs,Keyboard:()=>Ya,Lazy:()=>es,Manipulation:()=>hs,Mousewheel:()=>Ua,Navigation:()=>ja,Pagination:()=>Ja,Parallax:()=>Ka,Scrollbar:()=>Xa,Swiper:()=>$a,Thumbs:()=>as,Virtual:()=>Wa,Zoom:()=>Za,default:()=>$a});var Hf=O(()=>{uf();df();ff();pf();hf();gf();mf();yf();bf();vf();Cf();xf();Af();Ef();Sf();wf();If();kf();Bf();Mf();zf();Of();Rf();Lf();Vf()});var Uf=L(Ze=>{"use strict";var Gf=Ze&&Ze.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),qf=Ze&&Ze.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o},$f=Ze&&Ze.__spreadArray||function(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,o;r<i;r++)(o||!(r in e))&&(o||(o=Array.prototype.slice.call(e,0,r)),o[r]=e[r]);return t.concat(o||Array.prototype.slice.call(e))};Object.defineProperty(Ze,"__esModule",{value:!0});Ze.CarouselEvent=Ze.Carousel=Ze.CarouselPage=void 0;var Ye=xr(),nn=ht(),En=Kt(),pb=mr(),hb=ht(),An=on(),un=(Hf(),Gl(Nf)),kr=Xt(),gb=zt(),xs=function(t){Gf(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.remove(Ye.Container.styleProperty),n.remove(Ye.Container.bleedProperty),n.remove(Ye.Container.isVisibleProperty)},e.prototype.internalRender=function(){var n=document.createElement("div");n.className=this.hostConfig.makeCssClassName("swiper-slide"),this.rtl=this.isRtl();var r=t.prototype.internalRender.call(this);return kr.appendChild(n,r),n},e.prototype.getForbiddenActionTypes=function(){return[Ye.ShowCardAction,Ye.ToggleVisibilityAction]},e.prototype.getForbiddenChildElements=function(){return this.forbiddenChildElements()},e.prototype.forbiddenChildElements=function(){return $f([Ye.ToggleVisibilityAction.JsonTypeName,Ye.ShowCardAction.JsonTypeName,"Media","ActionSet","Input.Text","Input.Date","Input.Time","Input.Number","Input.ChoiceSet","Input.Toggle","Carousel"],t.prototype.forbiddenChildElements.call(this),!0)},e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this.setShouldFallback(!1)},e.prototype.shouldSerialize=function(n){return!0},e.prototype.getJsonTypeName=function(){return"CarouselPage"},Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasVisibleSeparator",{get:function(){return!1},enumerable:!1,configurable:!0}),e}(Ye.Container);Ze.CarouselPage=xs;var Wf=function(t){Gf(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._pages=[],n._currentIndex=0,n._previousEventType=nn.CarouselInteractionEvent.Pagination,n}return e.prototype.populateSchema=function(n){t.prototype.populateSchema.call(this,n),n.remove(Ye.Container.styleProperty),n.remove(Ye.Container.bleedProperty),n.remove(Ye.Container.isVisibleProperty)},Object.defineProperty(e.prototype,"timer",{get:function(){var n=this.getValue(e.timerProperty);return n&&n<this.hostConfig.carousel.minAutoplayDelay&&(console.warn(An.Strings.errors.tooLittleTimeDelay),n=this.hostConfig.carousel.minAutoplayDelay),n},set:function(n){n&&n<this.hostConfig.carousel.minAutoplayDelay?(console.warn(An.Strings.errors.tooLittleTimeDelay),this.setValue(e.timerProperty,this.hostConfig.carousel.minAutoplayDelay)):this.setValue(e.timerProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"initialPageIndex",{get:function(){return this.getValue(e.initialPageProperty)},set:function(n){this.isValidParsedPageIndex(n)?this.setValue(e.initialPageProperty,n):(console.warn(An.Strings.errors.invalidInitialPageIndex(n)),this.setValue(e.initialPageProperty,0))},enumerable:!1,configurable:!0}),e.prototype.isValidParsedPageIndex=function(n){return this._pages?this.isValidPageIndex(n,this._pages.length):!1},e.prototype.isValidRenderedPageIndex=function(n){return this._renderedPages?this.isValidPageIndex(n,this._renderedPages.length):!1},e.prototype.isValidPageIndex=function(n,r){return r>0&&0<=n&&n<r},Object.defineProperty(e.prototype,"previousEventType",{get:function(){return this._previousEventType},set:function(n){this._previousEventType=n},enumerable:!1,configurable:!0}),e.prototype.forbiddenChildElements=function(){return $f([Ye.ToggleVisibilityAction.JsonTypeName,Ye.ShowCardAction.JsonTypeName,"Media","ActionSet","Input.Text","Input.Date","Input.Time","Input.Number","Input.ChoiceSet","Input.Toggle"],t.prototype.forbiddenChildElements.call(this),!0)},e.prototype.adjustRenderedElementSize=function(n){t.prototype.adjustRenderedElementSize.call(this,n),this.height=="stretch"&&this._containerForAdorners!==void 0&&(this._containerForAdorners.style.height="100%")},e.prototype.getJsonTypeName=function(){return"Carousel"},e.prototype.getItemCount=function(){return this._pages.length},e.prototype.getItemAt=function(n){return this._pages[n]},e.prototype.addPage=function(n){this._pages.push(n),n.setParent(this)},e.prototype.removeItem=function(n){if(n instanceof xs){var r=this._pages.indexOf(n);if(r>=0)return this._pages.splice(r,1),n.setParent(void 0),this.updateLayout(),!0}return!1},e.prototype.getFirstVisibleRenderedItem=function(){var n;if(this.renderedElement&&((n=this._renderedPages)===null||n===void 0?void 0:n.length)>0)return this._renderedPages[0]},e.prototype.getLastVisibleRenderedItem=function(){var n;if(this.renderedElement&&((n=this._renderedPages)===null||n===void 0?void 0:n.length)>0)return this._renderedPages[this._renderedPages.length-1]},Object.defineProperty(e.prototype,"currentPageId",{get:function(){var n,r;if(!((r=(n=this._carousel)===null||n===void 0?void 0:n.slides)===null||r===void 0)&&r.length){var i=this._carousel.slides[this._carousel.activeIndex];return i.id}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentPageIndex",{get:function(){var n;return(n=this._carousel)===null||n===void 0?void 0:n.realIndex},enumerable:!1,configurable:!0}),e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this._pages=[];var i=n.pages;if(Array.isArray(i))for(var o=0,a=i;o<a.length;o++){var l=a[o],s=this.createCarouselPageInstance(l,r);s&&this._pages.push(s)}this.validateParsing(r)},e.prototype.validateParsing=function(n){this.isValidParsedPageIndex(this.initialPageIndex)||n.logParseEvent(this,nn.ValidationEvent.InvalidPropertyValue,An.Strings.errors.invalidInitialPageIndex(this.initialPageIndex))},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),r.serializeArray(n,"pages",this._pages)},e.prototype.internalRender=function(){var n=this,r;if(this._renderedPages=[],!(this._pages.length<=0)){var i=document.createElement("div");i.className=this.hostConfig.makeCssClassName("ac-carousel-card-level-container");var o=document.createElement("div");o.className=this.hostConfig.makeCssClassName("swiper","ac-carousel");var a=document.createElement("div");a.className=this.hostConfig.makeCssClassName("ac-carousel-container"),this._containerForAdorners=a,i.appendChild(a);var l=document.createElement("div");switch(l.className=this.hostConfig.makeCssClassName("swiper-wrapper","ac-carousel-card-container"),l.style.display="flex",this.getEffectiveVerticalContentAlignment()){case nn.VerticalAlignment.Top:l.style.alignItems="flex-start";break;case nn.VerticalAlignment.Bottom:l.style.alignItems="flex-end";break;default:l.style.alignItems="center";break}gb.GlobalSettings.useAdvancedCardBottomTruncation&&(l.style.minHeight="-webkit-min-content");var s=document.createElement("div");s.className=this.hostConfig.makeCssClassName("swiper-button-prev","ac-carousel-left"),a.appendChild(s),kr.addCancelSelectActionEventHandler(s);var c=document.createElement("div");c.className=this.hostConfig.makeCssClassName("swiper-button-next","ac-carousel-right"),a.appendChild(c),kr.addCancelSelectActionEventHandler(c);var u=document.createElement("div");u.className=this.hostConfig.makeCssClassName("swiper-pagination","ac-carousel-pagination"),kr.addCancelSelectActionEventHandler(u),a.appendChild(u),this.isDesignMode()&&(s.style.zIndex="20",c.style.zIndex="20",u.style.zIndex="20");var d=Math.min(this._pages.length,this.hostConfig.carousel.maxCarouselPages);if(this._pages.length>this.hostConfig.carousel.maxCarouselPages&&console.warn(An.Strings.errors.tooManyCarouselPages),this._pages.length>0)for(var f=0;f<d;f++){var p=this._pages[f],y=this.isElementAllowed(p)?p.render():void 0;y?.classList.add("ac-carousel-page"),(r=y?.children[0])===null||r===void 0||r.classList.add("ac-carousel-page-container"),y&&(kr.appendChild(l,y),this._renderedPages.push(p))}return o.appendChild(l),o.tabIndex=this.isDesignMode()?-1:0,a.appendChild(o),this._carouselPageContainer=o,this.rtl=this.isRtl(),this.applyRTL(o),this.isDesignMode()||(this.isValidRenderedPageIndex(this.initialPageIndex)?this._currentIndex=this.initialPageIndex:(console.warn(An.Strings.errors.invalidInitialPageIndex(this.initialPageIndex)),this._currentIndex=0)),this.initializeCarouselControl(o,c,s,u,this.rtl),i.addEventListener("keydown",function(h){var m,v,b=(m=n._carousel)===null||m===void 0?void 0:m.activeIndex;n.initializeCarouselControl(o,c,s,u,n.rtl),b&&((v=n._carousel)===null||v===void 0||v.slideTo(b))},{once:!0}),this._renderedPages.length>0?i:void 0}},e.prototype.initializeCarouselControl=function(n,r,i,o,a){var l=this,s,c={loop:!this.isDesignMode(),modules:[un.Navigation,un.Pagination,un.Scrollbar,un.A11y,un.History,un.Keyboard],pagination:{el:o,clickable:!0},navigation:{prevEl:a===void 0||!a?i:r,nextEl:a===void 0||!a?r:i},a11y:{enabled:!0},keyboard:{enabled:!0,onlyInViewport:!0},initialSlide:this._currentIndex};this.timer&&!this.isDesignMode()&&((s=c.modules)===null||s===void 0||s.push(un.Autoplay),c.autoplay={delay:this.timer,pauseOnMouseEnter:!0});var u=new un.Swiper(n,c);n.addEventListener("mouseenter",function(d){var f;(f=u.autoplay)===null||f===void 0||f.stop()}),n.addEventListener("mouseleave",function(d){var f;(f=u.autoplay)===null||f===void 0||f.start()}),u.on("navigationNext",function(d){l.raiseCarouselEvent(nn.CarouselInteractionEvent.NavigationNext)}),u.on("navigationPrev",function(d){l.raiseCarouselEvent(nn.CarouselInteractionEvent.NavigationPrevious)}),u.on("slideChangeTransitionEnd",function(d){l.currentIndex=d.realIndex,l.raiseCarouselEvent(nn.CarouselInteractionEvent.Pagination)}),u.on("autoplay",function(){l.raiseCarouselEvent(nn.CarouselInteractionEvent.Autoplay)}),this._carousel=u},e.prototype.createCarouselPageInstance=function(n,r){return r.parseCardObject(this,n,this.forbiddenChildElements(),!this.isDesignMode(),function(i){return!i||i==="CarouselPage"?new xs:void 0},function(i,o){r.logParseEvent(void 0,hb.ValidationEvent.ElementTypeNotAllowed,An.Strings.errors.elementTypeNotAllowed(i))})},e.prototype.slideTo=function(n){var r;(r=this._carousel)===null||r===void 0||r.slideTo(n)},Object.defineProperty(e.prototype,"carouselPageContainer",{get:function(){return this._carouselPageContainer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentIndex",{get:function(){return this._currentIndex},set:function(n){this._currentIndex=n},enumerable:!1,configurable:!0}),e.prototype.createCarouselEvent=function(n){var r;return this.currentPageIndex!=null&&(r=this.getItemAt(this.currentPageIndex).id),new Yf(n,this.id,r,this.currentPageIndex)},e.prototype.raiseCarouselEvent=function(n){var r=this.parent?this.parent.getRootElement():void 0,i=r&&r.onCarouselEvent?r.onCarouselEvent:Ye.AdaptiveCard.onCarouselEvent;i&&n==nn.CarouselInteractionEvent.Pagination&&i(this.createCarouselEvent(this.previousEventType)),this.previousEventType=n},e.timerProperty=new En.NumProperty(En.Versions.v1_6,"timer",void 0),e.initialPageProperty=new En.NumProperty(En.Versions.v1_6,"initialPage",0),qf([(0,En.property)(e.timerProperty)],e.prototype,"timer",null),qf([(0,En.property)(e.initialPageProperty)],e.prototype,"initialPageIndex",null),e}(Ye.Container);Ze.Carousel=Wf;var Yf=function(){function t(e,n,r,i){this.type=e,this.carouselId=n,this.activeCarouselPageId=r,this.activeCarouselPageIndex=i}return t}();Ze.CarouselEvent=Yf;pb.GlobalRegistry.defaultElements.register("Carousel",Wf,En.Versions.v1_6)});var Jf=L(He=>{"use strict";var Tr=He&&He.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}(),Pt=He&&He.__decorate||function(t,e,n,r){var i=arguments.length,o=i<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,n):r,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(t,e,n,r);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(o=(i<3?a(o):i>3?a(e,n,o):a(e,n))||o);return i>3&&o&&Object.defineProperty(e,n,o),o};Object.defineProperty(He,"__esModule",{value:!0});He.Table=He.TableRow=He.TableCell=He.StylableContainer=He.TableColumnDefinition=void 0;var gi=xr(),ye=ht(),mb=mr(),ue=Kt(),dn=zt(),As=on(),Ss=Xt(),jf=function(t){Tr(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.width=new dn.SizeAndUnit(1,ye.SizeUnit.Weight),n}return e.prototype.getSchemaKey=function(){return"ColumnDefinition"},e.horizontalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"horizontalCellContentAlignment",ye.HorizontalAlignment),e.verticalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"verticalCellContentAlignment",ye.VerticalAlignment),e.widthProperty=new ue.CustomProperty(ue.Versions.v1_5,"width",function(n,r,i,o){var a=r.defaultValue,l=i[r.name],s=!1;if(typeof l=="number"&&!isNaN(l))a=new dn.SizeAndUnit(l,ye.SizeUnit.Weight);else if(typeof l=="string")try{a=dn.SizeAndUnit.parse(l)}catch{s=!0}else s=!0;return s&&o.logParseEvent(n,ye.ValidationEvent.InvalidPropertyValue,As.Strings.errors.invalidColumnWidth(l)),a},function(n,r,i,o,a){o.unit===ye.SizeUnit.Pixel?a.serializeValue(i,"width",o.physicalSize+"px"):a.serializeNumber(i,"width",o.physicalSize)},new dn.SizeAndUnit(1,ye.SizeUnit.Weight)),Pt([(0,ue.property)(e.horizontalCellContentAlignmentProperty)],e.prototype,"horizontalCellContentAlignment",void 0),Pt([(0,ue.property)(e.verticalCellContentAlignmentProperty)],e.prototype,"verticalCellContentAlignment",void 0),Pt([(0,ue.property)(e.widthProperty)],e.prototype,"width",void 0),e}(ue.SerializableObject);He.TableColumnDefinition=jf;var ws=function(t){Tr(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._items=[],n}return e.prototype.parseItem=function(n,r){var i=this;return r.parseCardObject(this,n,[],!this.isDesignMode(),function(o){return i.createItemInstance(o)},function(o,a){r.logParseEvent(void 0,ye.ValidationEvent.ElementTypeNotAllowed,As.Strings.errors.elementTypeNotAllowed(o))})},e.prototype.internalAddItem=function(n){if(!n.parent)this._items.push(n),n.setParent(this);else throw new Error(As.Strings.errors.elementAlreadyParented())},e.prototype.internalRemoveItem=function(n){var r=this._items.indexOf(n);return r>=0?(this._items.splice(r,1),n.setParent(void 0),this.updateLayout(),!0):!1},e.prototype.internalIndexOf=function(n){return this._items.indexOf(n)},e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this._items=[];var i=n[this.getCollectionPropertyName()];if(Array.isArray(i))for(var o=0,a=i;o<a.length;o++){var l=a[o],s=this.parseItem(l,r);s&&this._items.push(s)}},e.prototype.internalToJSON=function(n,r){t.prototype.internalToJSON.call(this,n,r),r.serializeArray(n,this.getCollectionPropertyName(),this._items)},e.prototype.removeItem=function(n){return this.internalRemoveItem(n)},e.prototype.getItemCount=function(){return this._items.length},e.prototype.getItemAt=function(n){return this._items[n]},e.prototype.getFirstVisibleRenderedItem=function(){return this.getItemCount()>0?this.getItemAt(0):void 0},e.prototype.getLastVisibleRenderedItem=function(){return this.getItemCount()>0?this.getItemAt(this.getItemCount()-1):void 0},e}(gi.StylableCardElementContainer);He.StylableContainer=ws;var hi=function(t){Tr(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._columnIndex=-1,n._cellType="data",n}return e.prototype.getHasBorder=function(){return this.parentRow.parentTable.showGridLines},e.prototype.applyBorder=function(){if(this.renderedElement&&this.getHasBorder()){var n=this.hostConfig.containerStyles.getStyleByName(this.parentRow.parentTable.gridStyle);if(n.borderColor){var r=(0,Ss.stringToCssColor)(n.borderColor);r&&(this.renderedElement.style.borderRight="1px solid "+r,this.renderedElement.style.borderBottom="1px solid "+r)}}},e.prototype.getDefaultPadding=function(){return this.getHasBackground()||this.getHasBorder()?new dn.PaddingDefinition(ye.Spacing.Small,ye.Spacing.Small,ye.Spacing.Small,ye.Spacing.Small):t.prototype.getDefaultPadding.call(this)},e.prototype.internalRender=function(){var n=t.prototype.internalRender.call(this);return n&&(n.setAttribute("role",this.cellType==="data"?"cell":"columnheader"),n.style.minWidth="0",this.cellType==="header"&&n.setAttribute("scope","col")),n},e.prototype.shouldSerialize=function(n){return!0},e.prototype.getJsonTypeName=function(){return"TableCell"},e.prototype.getEffectiveTextStyleDefinition=function(){return this.cellType==="header"?this.hostConfig.textStyles.columnHeader:t.prototype.getEffectiveTextStyleDefinition.call(this)},e.prototype.getEffectiveHorizontalAlignment=function(){if(this.horizontalAlignment!==void 0)return this.horizontalAlignment;if(this.parentRow.horizontalCellContentAlignment!==void 0)return this.parentRow.horizontalCellContentAlignment;if(this.columnIndex>=0){var n=this.parentRow.parentTable.getColumnAt(this.columnIndex).horizontalCellContentAlignment;if(n!==void 0)return n}return this.parentRow.parentTable.horizontalCellContentAlignment!==void 0?this.parentRow.parentTable.horizontalCellContentAlignment:t.prototype.getEffectiveHorizontalAlignment.call(this)},e.prototype.getEffectiveVerticalContentAlignment=function(){if(this.verticalContentAlignment!==void 0)return this.verticalContentAlignment;if(this.parentRow.verticalCellContentAlignment!==void 0)return this.parentRow.verticalCellContentAlignment;if(this.columnIndex>=0){var n=this.parentRow.parentTable.getColumnAt(this.columnIndex).verticalCellContentAlignment;if(n!==void 0)return n}return this.parentRow.parentTable.verticalCellContentAlignment!==void 0?this.parentRow.parentTable.verticalCellContentAlignment:t.prototype.getEffectiveVerticalContentAlignment.call(this)},Object.defineProperty(e.prototype,"columnIndex",{get:function(){return this._columnIndex},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"cellType",{get:function(){return this._cellType},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentRow",{get:function(){return this.parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),e}(gi.Container);He.TableCell=hi;var Es=function(t){Tr(e,t);function e(){return t!==null&&t.apply(this,arguments)||this}return e.prototype.getDefaultPadding=function(){return new dn.PaddingDefinition(ye.Spacing.None,ye.Spacing.None,ye.Spacing.None,ye.Spacing.None)},e.prototype.applyBackground=function(){if(this.renderedElement){var n=this.hostConfig.containerStyles.getStyleByName(this.style,this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));if(n.backgroundColor){var r=(0,Ss.stringToCssColor)(n.backgroundColor);r&&(this.renderedElement.style.backgroundColor=r)}}},e.prototype.getCollectionPropertyName=function(){return"cells"},e.prototype.createItemInstance=function(n){return!n||n==="TableCell"?new hi:void 0},e.prototype.internalRender=function(){var n=this.getIsFirstRow(),r=this.hostConfig.table.cellSpacing,i=document.createElement("div");i.setAttribute("role","row"),i.style.display="flex",i.style.flexDirection="row";for(var o=0;o<Math.min(this.getItemCount(),this.parentTable.getColumnCount());o++){var a=this.getItemAt(o);a._columnIndex=o,a._cellType=this.parentTable.firstRowAsHeaders&&n?"header":"data";var l=a.render();if(l){var s=this.parentTable.getColumnAt(o);s.computedWidth.unit===ye.SizeUnit.Pixel?l.style.flex="0 0 "+s.computedWidth.physicalSize+"px":l.style.flex="1 1 "+s.computedWidth.physicalSize+"%",o>0&&!this.parentTable.showGridLines&&r>0&&(l.style.marginLeft=r+"px"),i.appendChild(l)}}return i.children.length>0?i:void 0},e.prototype.shouldSerialize=function(n){return!0},e.prototype.addCell=function(n){this.internalAddItem(n)},e.prototype.removeCellAt=function(n){return n>=0&&n<this.getItemCount()?this.removeItem(this.getItemAt(n)):!1},e.prototype.indexOf=function(n){return n instanceof hi?this.internalIndexOf(n):-1},e.prototype.ensureHasEnoughCells=function(n){for(;this.getItemCount()<n;)this.addCell(new hi)},e.prototype.getJsonTypeName=function(){return"TableRow"},e.prototype.getIsFirstRow=function(){return this.parentTable.getItemAt(0)===this},Object.defineProperty(e.prototype,"parentTable",{get:function(){return this.parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),e.styleProperty=new gi.ContainerStyleProperty(ue.Versions.v1_5,"style"),e.horizontalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"horizontalCellContentAlignment",ye.HorizontalAlignment),e.verticalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"verticalCellContentAlignment",ye.VerticalAlignment),Pt([(0,ue.property)(e.horizontalCellContentAlignmentProperty)],e.prototype,"horizontalCellContentAlignment",void 0),Pt([(0,ue.property)(e.verticalCellContentAlignmentProperty)],e.prototype,"verticalCellContentAlignment",void 0),e}(ws);He.TableRow=Es;var Qf=function(t){Tr(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n._columns=[],n.firstRowAsHeaders=!0,n.showGridLines=!0,n}return Object.defineProperty(e.prototype,"gridStyle",{get:function(){var n=this.getValue(e.gridStyleProperty);if(n&&this.hostConfig.containerStyles.getStyleByName(n))return n},set:function(n){this.setValue(e.gridStyleProperty,n)},enumerable:!1,configurable:!0}),e.prototype.ensureRowsHaveEnoughCells=function(){for(var n=0;n<this.getItemCount();n++)this.getItemAt(n).ensureHasEnoughCells(this.getColumnCount())},e.prototype.removeCellsFromColumn=function(n){for(var r=0;r<this.getItemCount();r++)this.getItemAt(r).removeCellAt(n)},e.prototype.getCollectionPropertyName=function(){return"rows"},e.prototype.createItemInstance=function(n){return!n||n==="TableRow"?new Es:void 0},e.prototype.internalParse=function(n,r){t.prototype.internalParse.call(this,n,r),this.ensureRowsHaveEnoughCells()},e.prototype.internalRender=function(){if(this.getItemCount()>0){for(var n=0,r=0,i=this._columns;r<i.length;r++){var o=i[r];o.width.unit===ye.SizeUnit.Weight&&(n+=o.width.physicalSize)}for(var a=0,l=this._columns;a<l.length;a++){var o=l[a];o.width.unit===ye.SizeUnit.Pixel?o.computedWidth=new dn.SizeAndUnit(o.width.physicalSize,ye.SizeUnit.Pixel):o.computedWidth=new dn.SizeAndUnit(100/n*o.width.physicalSize,ye.SizeUnit.Weight)}var s=document.createElement("div");if(s.setAttribute("role","table"),s.style.display="flex",s.style.flexDirection="column",this.showGridLines){var c=this.hostConfig.containerStyles.getStyleByName(this.gridStyle);if(c.borderColor){var u=(0,Ss.stringToCssColor)(c.borderColor);u&&(s.style.borderTop="1px solid "+u,s.style.borderLeft="1px solid "+u)}}for(var d=this.hostConfig.table.cellSpacing,f=0;f<this.getItemCount();f++){var p=this.getItemAt(f).render();if(p){if(f>0&&!this.showGridLines&&d>0){var y=document.createElement("div");y.setAttribute("aria-hidden","true"),y.style.height=d+"px",s.appendChild(y)}s.appendChild(p)}}return s}},e.prototype.addColumn=function(n){this._columns.push(n),this.ensureRowsHaveEnoughCells()},e.prototype.removeColumn=function(n){var r=this._columns.indexOf(n);r>=0&&(this.removeCellsFromColumn(r),this._columns.splice(r,1))},e.prototype.getColumnCount=function(){return this._columns.length},e.prototype.getColumnAt=function(n){return this._columns[n]},e.prototype.addRow=function(n){this.internalAddItem(n),n.ensureHasEnoughCells(this.getColumnCount())},e.prototype.indexOf=function(n){return n instanceof Es?this.internalIndexOf(n):-1},e.prototype.getJsonTypeName=function(){return"Table"},e._columnsProperty=new ue.SerializableObjectCollectionProperty(ue.Versions.v1_5,"columns",jf),e.firstRowAsHeadersProperty=new ue.BoolProperty(ue.Versions.v1_5,"firstRowAsHeaders",!0),e.showGridLinesProperty=new ue.BoolProperty(ue.Versions.v1_5,"showGridLines",!0),e.gridStyleProperty=new gi.ContainerStyleProperty(ue.Versions.v1_5,"gridStyle"),e.horizontalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"horizontalCellContentAlignment",ye.HorizontalAlignment),e.verticalCellContentAlignmentProperty=new ue.EnumProperty(ue.Versions.v1_5,"verticalCellContentAlignment",ye.VerticalAlignment),Pt([(0,ue.property)(e._columnsProperty)],e.prototype,"_columns",void 0),Pt([(0,ue.property)(e.firstRowAsHeadersProperty)],e.prototype,"firstRowAsHeaders",void 0),Pt([(0,ue.property)(e.showGridLinesProperty)],e.prototype,"showGridLines",void 0),Pt([(0,ue.property)(e.gridStyleProperty)],e.prototype,"gridStyle",null),Pt([(0,ue.property)(e.horizontalCellContentAlignmentProperty)],e.prototype,"horizontalCellContentAlignment",void 0),Pt([(0,ue.property)(e.verticalCellContentAlignmentProperty)],e.prototype,"verticalCellContentAlignment",void 0),e}(ws);He.Table=Qf;mb.GlobalRegistry.defaultElements.register("Table",Qf,ue.Versions.v1_5)});var Xf=L(mi=>{"use strict";Object.defineProperty(mi,"__esModule",{value:!0});mi.ChannelAdapter=void 0;var yb=function(){function t(){}return t}();mi.ChannelAdapter=yb});var ks=L(Re=>{"use strict";var Is=Re&&Re.__extends||function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,i){r.__proto__=i}||function(r,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])},t(e,n)};return function(e,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(Re,"__esModule",{value:!0});Re.LoginRequestResponse=Re.ErrorResponse=Re.SuccessResponse=Re.ActivityResponse=Re.ActivityRequestError=Re.ActivityRequestTrigger=void 0;var bb;(function(t){t.Automatic="automatic",t.Manual="manual"})(bb=Re.ActivityRequestTrigger||(Re.ActivityRequestTrigger={}));var vb=function(){function t(e,n){this.code=e,this.message=n}return t}();Re.ActivityRequestError=vb;var yi=function(){function t(e){this.request=e}return t}();Re.ActivityResponse=yi;var Cb=function(t){Is(e,t);function e(n,r){var i=t.call(this,n)||this;return i.request=n,i.rawContent=r,i}return e}(yi);Re.SuccessResponse=Cb;var xb=function(t){Is(e,t);function e(n,r){var i=t.call(this,n)||this;return i.request=n,i.error=r,i}return e}(yi);Re.ErrorResponse=xb;var Ab=function(t){Is(e,t);function e(n,r){var i=t.call(this,n)||this;i.request=n,i._auth=r;for(var o=0,a=i._auth.buttons;o<a.length;o++){var l=a[o];if(l.type==="signin"&&l.value!==void 0)try{new URL(l.value),i.signinButton=l;break}catch{}}return i}return Object.defineProperty(e.prototype,"tokenExchangeResource",{get:function(){return this._auth.tokenExchangeResource},enumerable:!1,configurable:!0}),e}(yi);Re.LoginRequestResponse=Ab});var Zf=L(pn=>{"use strict";var Kf=pn&&pn.__awaiter||function(t,e,n,r){function i(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(u){try{c(r.next(u))}catch(d){a(d)}}function s(u){try{c(r.throw(u))}catch(d){a(d)}}function c(u){u.done?o(u.value):i(u.value).then(l,s)}c((r=r.apply(t,e||[])).next())})},_s=pn&&pn.__generator||function(t,e){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(u){return s([c,u])}}function s(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(pn,"__esModule",{value:!0});pn.AdaptiveApplet=void 0;var be=ht(),Ts=Xt(),Te=zt(),fn=ks(),_r=on(),Sn=xr(),Eb=Kt();function ke(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];if(Te.GlobalSettings.applets.logEnabled)if(Te.GlobalSettings.applets.onLogEvent)Te.GlobalSettings.applets.onLogEvent(t,e,n);else switch(t){case be.LogLevel.Warning:console.warn(e,n);break;case be.LogLevel.Error:console.error(e,n);break;default:console.log(e,n);break}}var Sb=function(){function t(e,n,r){this.action=e,this.trigger=n,this.consecutiveRefreshes=r,this.attemptNumber=0}return t.prototype.retryAsync=function(){return Kf(this,void 0,void 0,function(){return _s(this,function(e){return this.onSend&&this.onSend(this),[2]})})},t}(),wb=function(){function t(){this._allowAutomaticCardUpdate=!1,this.renderedElement=document.createElement("div"),this.renderedElement.className="aaf-cardHost",this.renderedElement.style.position="relative",this.renderedElement.style.display="flex",this.renderedElement.style.flexDirection="column",this._cardHostElement=document.createElement("div"),this._refreshButtonHostElement=document.createElement("div"),this._refreshButtonHostElement.className="aaf-refreshButtonHost",this._refreshButtonHostElement.style.display="none",this.renderedElement.appendChild(this._cardHostElement),this.renderedElement.appendChild(this._refreshButtonHostElement)}return t.prototype.displayCard=function(e){if(e.renderedElement)Ts.clearElementChildren(this._cardHostElement),this._refreshButtonHostElement.style.display="none",this._cardHostElement.appendChild(e.renderedElement);else throw new Error("displayCard: undefined card.")},t.prototype.showManualRefreshButton=function(e){var n=this,r=this.onShowManualRefreshButton?this.onShowManualRefreshButton(this):!0;if(r){this._refreshButtonHostElement.style.display="none";var i=void 0;if(this.onRenderManualRefreshButton)i=this.onRenderManualRefreshButton(this);else{var o=_r.Strings.runtime.refreshThisCard();if(Te.GlobalSettings.applets.refresh.mode===be.RefreshMode.Automatic){var a=_r.Strings.runtime.automaticRefreshPaused();a[a.length-1]!==" "&&(a+=" "),o=_r.Strings.runtime.clckToRestartAutomaticRefresh()}var l={type:"AdaptiveCard",version:"1.2",body:[{type:"RichTextBlock",horizontalAlignment:"right",inlines:[{type:"TextRun",text:o,selectAction:{type:"Action.Submit",id:"refreshCard"}}]}]},s=new Sn.AdaptiveCard;s.parse(l,new Sn.SerializationContext(Eb.Versions.v1_2)),s.onExecuteAction=function(c){c.id==="refreshCard"&&(Ts.clearElementChildren(n._refreshButtonHostElement),n.internalExecuteAction(e,fn.ActivityRequestTrigger.Automatic,0))},i=s.render()}i&&(Ts.clearElementChildren(this._refreshButtonHostElement),this._refreshButtonHostElement.appendChild(i),this._refreshButtonHostElement.style.removeProperty("display"))}},t.prototype.createActivityRequest=function(e,n,r){var i=this;if(this.card){var o=new Sb(e,n,r);o.onSend=function(l){l.attemptNumber++,i.internalSendActivityRequestAsync(o)};var a=this.onPrepareActivityRequest?!this.onPrepareActivityRequest(this,o,e):!1;return a?void 0:o}else throw new Error("createActivityRequest: no card has been set.")},t.prototype.createMagicCodeInputCard=function(e){var n={type:"AdaptiveCard",version:"1.0",body:[{type:"TextBlock",color:"attention",text:e===1?void 0:"That didn't work... let's try again.",wrap:!0,horizontalAlignment:"center"},{type:"TextBlock",text:'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"',wrap:!0,horizontalAlignment:"center"},{type:"Input.Text",id:"magicCode",placeholder:"Enter magic code"},{type:"ActionSet",horizontalAlignment:"center",actions:[{type:"Action.Submit",id:t._submitMagicCodeActionId,title:"Submit"},{type:"Action.Submit",id:t._cancelMagicCodeAuthActionId,title:"Cancel"}]}]},r=new Sn.AdaptiveCard;return r.parse(n),r},t.prototype.cancelAutomaticRefresh=function(){this._allowAutomaticCardUpdate&&ke(be.LogLevel.Warning,"Automatic card refresh has been cancelled as a result of the user interacting with the card."),this._allowAutomaticCardUpdate=!1},t.prototype.createSerializationContext=function(){return this.onCreateSerializationContext?this.onCreateSerializationContext(this):new Sn.SerializationContext},t.prototype.internalSetCard=function(e,n){var r=this;if(typeof e=="object"&&e.type==="AdaptiveCard"&&(this._cardPayload=e),this._cardPayload)try{var i=new Sn.AdaptiveCard;this.hostConfig&&(i.hostConfig=this.hostConfig);var o=this.createSerializationContext();i.parse(this._cardPayload,o);var a=this.onCardChanging?this.onCardChanging(this,this._cardPayload):!0;if(a&&(this._card=i,this._card.authentication&&this._card.authentication.tokenExchangeResource&&this.onPrefetchSSOToken&&this.onPrefetchSSOToken(this,this._card.authentication.tokenExchangeResource),this._card.onExecuteAction=function(s){r.cancelAutomaticRefresh(),r.internalExecuteAction(s,fn.ActivityRequestTrigger.Manual,0)},this._card.onInputValueChanged=function(s){r.cancelAutomaticRefresh()},this._card.render(),this._card.renderedElement&&(this.displayCard(this._card),this.onCardChanged&&this.onCardChanged(this),this._card.refresh)))if(Te.GlobalSettings.applets.refresh.mode===be.RefreshMode.Automatic&&n<Te.GlobalSettings.applets.refresh.maximumConsecutiveAutomaticRefreshes)if(Te.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes<=0)ke(be.LogLevel.Info,"Triggering automatic card refresh number "+(n+1)),this.internalExecuteAction(this._card.refresh.action,fn.ActivityRequestTrigger.Automatic,n+1);else{ke(be.LogLevel.Info,"Scheduling automatic card refresh number "+(n+1)+" in "+Te.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes+"ms");var l=this._card.refresh.action;this._allowAutomaticCardUpdate=!0,window.setTimeout(function(){r._allowAutomaticCardUpdate&&r.internalExecuteAction(l,fn.ActivityRequestTrigger.Automatic,n+1)},Te.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes)}else Te.GlobalSettings.applets.refresh.mode!==be.RefreshMode.Disabled&&(n>0?ke(be.LogLevel.Warning,"Stopping automatic refreshes after "+n+" consecutive refreshes."):ke(be.LogLevel.Warning,"The card has a refresh section, but automatic refreshes are disabled."),(Te.GlobalSettings.applets.refresh.allowManualRefreshesAfterAutomaticRefreshes||Te.GlobalSettings.applets.refresh.mode===be.RefreshMode.Manual)&&(ke(be.LogLevel.Info,"Showing manual refresh button."),this.showManualRefreshButton(this._card.refresh.action)))}catch(s){ke(be.LogLevel.Error,"setCard: "+s)}},t.prototype.internalExecuteAction=function(e,n,r){if(e instanceof Sn.ExecuteAction)if(this.channelAdapter){var i=this.createActivityRequest(e,n,r);i&&i.retryAsync()}else throw new Error("internalExecuteAction: No channel adapter set.");this.onAction&&this.onAction(this,e)},t.prototype.createProgressOverlay=function(e){if(!this._progressOverlay)if(this.onCreateProgressOverlay)this._progressOverlay=this.onCreateProgressOverlay(this,e);else{this._progressOverlay=document.createElement("div"),this._progressOverlay.className="aaf-progress-overlay";var n=document.createElement("div");n.className="aaf-spinner",n.style.width="28px",n.style.height="28px",this._progressOverlay.appendChild(n)}return this._progressOverlay},t.prototype.removeProgressOverlay=function(e){this.onRemoveProgressOverlay&&this.onRemoveProgressOverlay(this,e),this._progressOverlay!==void 0&&(this.renderedElement.removeChild(this._progressOverlay),this._progressOverlay=void 0)},t.prototype.activityRequestSucceeded=function(e,n){this.onActivityRequestSucceeded&&this.onActivityRequestSucceeded(this,e,n)},t.prototype.activityRequestFailed=function(e){return this.onActivityRequestFailed?this.onActivityRequestFailed(this,e):Te.GlobalSettings.applets.defaultTimeBetweenRetryAttempts},t.prototype.showAuthCodeInputDialog=function(e){var n=this,r=this.onShowAuthCodeInputDialog?this.onShowAuthCodeInputDialog(this,e):!0;if(r){var i=this.createMagicCodeInputCard(e.attemptNumber);i.render(),i.onExecuteAction=function(o){if(n.card&&o instanceof Sn.SubmitAction)switch(o.id){case t._submitMagicCodeActionId:var a=void 0;o.data&&typeof o.data.magicCode=="string"&&(a=o.data.magicCode),a?(n.displayCard(n.card),e.authCode=a,e.retryAsync()):alert("Please enter the magic code you received.");break;case t._cancelMagicCodeAuthActionId:ke(be.LogLevel.Warning,"Authentication cancelled by user."),n.displayCard(n.card);break;default:ke(be.LogLevel.Error,"Unexpected action taken from magic code input card (id = "+o.id+")"),alert(_r.Strings.magicCodeInputCard.somethingWentWrong());break}},this.displayCard(i)}},t.prototype.internalSendActivityRequestAsync=function(e){return Kf(this,void 0,void 0,function(){var n,r,i,o,a;return _s(this,function(l){switch(l.label){case 0:if(!this.channelAdapter)throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");n=this.createProgressOverlay(e),n!==void 0&&this.renderedElement.appendChild(n),r=!1,i=function(){var s,c,u,d,f,p,y;return _s(this,function(h){switch(h.label){case 0:s=void 0,e.attemptNumber===1?ke(be.LogLevel.Info,"Sending activity request to channel (attempt "+e.attemptNumber+")"):ke(be.LogLevel.Info,"Re-sending activity request to channel (attempt "+e.attemptNumber+")"),h.label=1;case 1:return h.trys.push([1,3,,4]),[4,o.channelAdapter.sendRequestAsync(e)];case 2:return s=h.sent(),[3,4];case 3:return c=h.sent(),ke(be.LogLevel.Error,"Activity request failed: "+c),o.removeProgressOverlay(e),r=!0,[3,4];case 4:if(!s)return[3,10];if(!(s instanceof fn.SuccessResponse))return[3,5];if(o.removeProgressOverlay(e),s.rawContent===void 0)throw new Error("internalSendActivityRequestAsync: Action.Execute result is undefined");u=s.rawContent;try{u=JSON.parse(s.rawContent)}catch{}if(typeof u=="string")ke(be.LogLevel.Info,"The activity request returned a string after "+e.attemptNumber+" attempt(s)."),o.activityRequestSucceeded(s,u);else if(typeof u=="object"&&u.type==="AdaptiveCard")ke(be.LogLevel.Info,"The activity request returned an Adaptive Card after "+e.attemptNumber+" attempt(s)."),o.internalSetCard(u,e.consecutiveRefreshes),o.activityRequestSucceeded(s,o.card);else throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type ("+typeof s.rawContent+")");return r=!0,[3,10];case 5:return s instanceof fn.ErrorResponse?(d=o.activityRequestFailed(s),d>=0&&e.attemptNumber<Te.GlobalSettings.applets.maximumRetryAttempts?(ke(be.LogLevel.Warning,"Activity request failed: ".concat(s.error.message,". Retrying in ").concat(d,"ms")),e.attemptNumber++,[4,new Promise(function(m,v){window.setTimeout(function(){m()},d)})]):[3,7]):[3,9];case 6:return h.sent(),[3,8];case 7:ke(be.LogLevel.Error,"Activity request failed: ".concat(s.error.message,". Giving up after ").concat(e.attemptNumber," attempt(s)")),o.removeProgressOverlay(e),r=!0,h.label=8;case 8:return[3,10];case 9:if(s instanceof fn.LoginRequestResponse){if(ke(be.LogLevel.Info,"The activity request returned a LoginRequestResponse after "+e.attemptNumber+" attempt(s)."),e.attemptNumber<=Te.GlobalSettings.applets.maximumRetryAttempts){if(f=!0,s.tokenExchangeResource&&o.onSSOTokenNeeded&&(f=!o.onSSOTokenNeeded(o,e,s.tokenExchangeResource)),f){if(o.removeProgressOverlay(e),s.signinButton===void 0)throw new Error("internalSendActivityRequestAsync: the login request doesn't contain a valid signin URL.");ke(be.LogLevel.Info,"Login required at "+s.signinButton.value),o.onShowSigninPrompt?o.onShowSigninPrompt(o,e,s.signinButton):(o.showAuthCodeInputDialog(e),p=window.screenX+(window.outerWidth-Te.GlobalSettings.applets.authPromptWidth)/2,y=window.screenY+(window.outerHeight-Te.GlobalSettings.applets.authPromptHeight)/2,window.open(s.signinButton.value,s.signinButton.title?s.signinButton.title:"Sign in","width=".concat(Te.GlobalSettings.applets.authPromptWidth,",height=").concat(Te.GlobalSettings.applets.authPromptHeight,",left=").concat(p,",top=").concat(y)))}}else ke(be.LogLevel.Error,"Authentication failed. Giving up after "+e.attemptNumber+" attempt(s)"),alert(_r.Strings.magicCodeInputCard.authenticationFailed());return[2,"break"]}else throw new Error("Unhandled response type: "+JSON.stringify(s));h.label=10;case 10:return[2]}})},o=this,l.label=1;case 1:return r?[3,3]:[5,i()];case 2:return a=l.sent(),a==="break"?[3,3]:[3,1];case 3:return[2]}})})},t.prototype.refreshCard=function(){this._card&&this._card.refresh&&this.internalExecuteAction(this._card.refresh.action,fn.ActivityRequestTrigger.Manual,0)},t.prototype.setCard=function(e){this.internalSetCard(e,0)},Object.defineProperty(t.prototype,"card",{get:function(){return this._card},enumerable:!1,configurable:!0}),t._submitMagicCodeActionId="submitMagicCode",t._cancelMagicCodeAuthActionId="cancelMagicCodeAuth",t}();pn.AdaptiveApplet=wb});var lt=L(Ee=>{"use strict";var Ib=Ee&&Ee.__createBinding||(Object.create?function(t,e,n,r){r===void 0&&(r=n);var i=Object.getOwnPropertyDescriptor(e,n);(!i||("get"in i?!e.__esModule:i.writable||i.configurable))&&(i={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,i)}:function(t,e,n,r){r===void 0&&(r=n),t[r]=e[n]}),Ue=Ee&&Ee.__exportStar||function(t,e){for(var n in t)n!=="default"&&!Object.prototype.hasOwnProperty.call(e,n)&&Ib(e,t,n)};Object.defineProperty(Ee,"__esModule",{value:!0});Ue(on(),Ee);Ue(ht(),Ee);Ue(zt(),Ee);Ue(Xt(),Ee);Ue(Kt(),Ee);Ue(Qr(),Ee);Ue(hr(),Ee);Ue(mr(),Ee);Ue(Po(),Ee);Ue(xr(),Ee);Ue(Uf(),Ee);Ue(Jf(),Ee);Ue(Xf(),Ee);Ue(ks(),Ee);Ue(Zf(),Ee)});var vp=L((d2,zx)=>{zx.exports={Aacute:"\xC1",aacute:"\xE1",Abreve:"\u0102",abreve:"\u0103",ac:"\u223E",acd:"\u223F",acE:"\u223E\u0333",Acirc:"\xC2",acirc:"\xE2",acute:"\xB4",Acy:"\u0410",acy:"\u0430",AElig:"\xC6",aelig:"\xE6",af:"\u2061",Afr:"\u{1D504}",afr:"\u{1D51E}",Agrave:"\xC0",agrave:"\xE0",alefsym:"\u2135",aleph:"\u2135",Alpha:"\u0391",alpha:"\u03B1",Amacr:"\u0100",amacr:"\u0101",amalg:"\u2A3F",amp:"&",AMP:"&",andand:"\u2A55",And:"\u2A53",and:"\u2227",andd:"\u2A5C",andslope:"\u2A58",andv:"\u2A5A",ang:"\u2220",ange:"\u29A4",angle:"\u2220",angmsdaa:"\u29A8",angmsdab:"\u29A9",angmsdac:"\u29AA",angmsdad:"\u29AB",angmsdae:"\u29AC",angmsdaf:"\u29AD",angmsdag:"\u29AE",angmsdah:"\u29AF",angmsd:"\u2221",angrt:"\u221F",angrtvb:"\u22BE",angrtvbd:"\u299D",angsph:"\u2222",angst:"\xC5",angzarr:"\u237C",Aogon:"\u0104",aogon:"\u0105",Aopf:"\u{1D538}",aopf:"\u{1D552}",apacir:"\u2A6F",ap:"\u2248",apE:"\u2A70",ape:"\u224A",apid:"\u224B",apos:"'",ApplyFunction:"\u2061",approx:"\u2248",approxeq:"\u224A",Aring:"\xC5",aring:"\xE5",Ascr:"\u{1D49C}",ascr:"\u{1D4B6}",Assign:"\u2254",ast:"*",asymp:"\u2248",asympeq:"\u224D",Atilde:"\xC3",atilde:"\xE3",Auml:"\xC4",auml:"\xE4",awconint:"\u2233",awint:"\u2A11",backcong:"\u224C",backepsilon:"\u03F6",backprime:"\u2035",backsim:"\u223D",backsimeq:"\u22CD",Backslash:"\u2216",Barv:"\u2AE7",barvee:"\u22BD",barwed:"\u2305",Barwed:"\u2306",barwedge:"\u2305",bbrk:"\u23B5",bbrktbrk:"\u23B6",bcong:"\u224C",Bcy:"\u0411",bcy:"\u0431",bdquo:"\u201E",becaus:"\u2235",because:"\u2235",Because:"\u2235",bemptyv:"\u29B0",bepsi:"\u03F6",bernou:"\u212C",Bernoullis:"\u212C",Beta:"\u0392",beta:"\u03B2",beth:"\u2136",between:"\u226C",Bfr:"\u{1D505}",bfr:"\u{1D51F}",bigcap:"\u22C2",bigcirc:"\u25EF",bigcup:"\u22C3",bigodot:"\u2A00",bigoplus:"\u2A01",bigotimes:"\u2A02",bigsqcup:"\u2A06",bigstar:"\u2605",bigtriangledown:"\u25BD",bigtriangleup:"\u25B3",biguplus:"\u2A04",bigvee:"\u22C1",bigwedge:"\u22C0",bkarow:"\u290D",blacklozenge:"\u29EB",blacksquare:"\u25AA",blacktriangle:"\u25B4",blacktriangledown:"\u25BE",blacktriangleleft:"\u25C2",blacktriangleright:"\u25B8",blank:"\u2423",blk12:"\u2592",blk14:"\u2591",blk34:"\u2593",block:"\u2588",bne:"=\u20E5",bnequiv:"\u2261\u20E5",bNot:"\u2AED",bnot:"\u2310",Bopf:"\u{1D539}",bopf:"\u{1D553}",bot:"\u22A5",bottom:"\u22A5",bowtie:"\u22C8",boxbox:"\u29C9",boxdl:"\u2510",boxdL:"\u2555",boxDl:"\u2556",boxDL:"\u2557",boxdr:"\u250C",boxdR:"\u2552",boxDr:"\u2553",boxDR:"\u2554",boxh:"\u2500",boxH:"\u2550",boxhd:"\u252C",boxHd:"\u2564",boxhD:"\u2565",boxHD:"\u2566",boxhu:"\u2534",boxHu:"\u2567",boxhU:"\u2568",boxHU:"\u2569",boxminus:"\u229F",boxplus:"\u229E",boxtimes:"\u22A0",boxul:"\u2518",boxuL:"\u255B",boxUl:"\u255C",boxUL:"\u255D",boxur:"\u2514",boxuR:"\u2558",boxUr:"\u2559",boxUR:"\u255A",boxv:"\u2502",boxV:"\u2551",boxvh:"\u253C",boxvH:"\u256A",boxVh:"\u256B",boxVH:"\u256C",boxvl:"\u2524",boxvL:"\u2561",boxVl:"\u2562",boxVL:"\u2563",boxvr:"\u251C",boxvR:"\u255E",boxVr:"\u255F",boxVR:"\u2560",bprime:"\u2035",breve:"\u02D8",Breve:"\u02D8",brvbar:"\xA6",bscr:"\u{1D4B7}",Bscr:"\u212C",bsemi:"\u204F",bsim:"\u223D",bsime:"\u22CD",bsolb:"\u29C5",bsol:"\\",bsolhsub:"\u27C8",bull:"\u2022",bullet:"\u2022",bump:"\u224E",bumpE:"\u2AAE",bumpe:"\u224F",Bumpeq:"\u224E",bumpeq:"\u224F",Cacute:"\u0106",cacute:"\u0107",capand:"\u2A44",capbrcup:"\u2A49",capcap:"\u2A4B",cap:"\u2229",Cap:"\u22D2",capcup:"\u2A47",capdot:"\u2A40",CapitalDifferentialD:"\u2145",caps:"\u2229\uFE00",caret:"\u2041",caron:"\u02C7",Cayleys:"\u212D",ccaps:"\u2A4D",Ccaron:"\u010C",ccaron:"\u010D",Ccedil:"\xC7",ccedil:"\xE7",Ccirc:"\u0108",ccirc:"\u0109",Cconint:"\u2230",ccups:"\u2A4C",ccupssm:"\u2A50",Cdot:"\u010A",cdot:"\u010B",cedil:"\xB8",Cedilla:"\xB8",cemptyv:"\u29B2",cent:"\xA2",centerdot:"\xB7",CenterDot:"\xB7",cfr:"\u{1D520}",Cfr:"\u212D",CHcy:"\u0427",chcy:"\u0447",check:"\u2713",checkmark:"\u2713",Chi:"\u03A7",chi:"\u03C7",circ:"\u02C6",circeq:"\u2257",circlearrowleft:"\u21BA",circlearrowright:"\u21BB",circledast:"\u229B",circledcirc:"\u229A",circleddash:"\u229D",CircleDot:"\u2299",circledR:"\xAE",circledS:"\u24C8",CircleMinus:"\u2296",CirclePlus:"\u2295",CircleTimes:"\u2297",cir:"\u25CB",cirE:"\u29C3",cire:"\u2257",cirfnint:"\u2A10",cirmid:"\u2AEF",cirscir:"\u29C2",ClockwiseContourIntegral:"\u2232",CloseCurlyDoubleQuote:"\u201D",CloseCurlyQuote:"\u2019",clubs:"\u2663",clubsuit:"\u2663",colon:":",Colon:"\u2237",Colone:"\u2A74",colone:"\u2254",coloneq:"\u2254",comma:",",commat:"@",comp:"\u2201",compfn:"\u2218",complement:"\u2201",complexes:"\u2102",cong:"\u2245",congdot:"\u2A6D",Congruent:"\u2261",conint:"\u222E",Conint:"\u222F",ContourIntegral:"\u222E",copf:"\u{1D554}",Copf:"\u2102",coprod:"\u2210",Coproduct:"\u2210",copy:"\xA9",COPY:"\xA9",copysr:"\u2117",CounterClockwiseContourIntegral:"\u2233",crarr:"\u21B5",cross:"\u2717",Cross:"\u2A2F",Cscr:"\u{1D49E}",cscr:"\u{1D4B8}",csub:"\u2ACF",csube:"\u2AD1",csup:"\u2AD0",csupe:"\u2AD2",ctdot:"\u22EF",cudarrl:"\u2938",cudarrr:"\u2935",cuepr:"\u22DE",cuesc:"\u22DF",cularr:"\u21B6",cularrp:"\u293D",cupbrcap:"\u2A48",cupcap:"\u2A46",CupCap:"\u224D",cup:"\u222A",Cup:"\u22D3",cupcup:"\u2A4A",cupdot:"\u228D",cupor:"\u2A45",cups:"\u222A\uFE00",curarr:"\u21B7",curarrm:"\u293C",curlyeqprec:"\u22DE",curlyeqsucc:"\u22DF",curlyvee:"\u22CE",curlywedge:"\u22CF",curren:"\xA4",curvearrowleft:"\u21B6",curvearrowright:"\u21B7",cuvee:"\u22CE",cuwed:"\u22CF",cwconint:"\u2232",cwint:"\u2231",cylcty:"\u232D",dagger:"\u2020",Dagger:"\u2021",daleth:"\u2138",darr:"\u2193",Darr:"\u21A1",dArr:"\u21D3",dash:"\u2010",Dashv:"\u2AE4",dashv:"\u22A3",dbkarow:"\u290F",dblac:"\u02DD",Dcaron:"\u010E",dcaron:"\u010F",Dcy:"\u0414",dcy:"\u0434",ddagger:"\u2021",ddarr:"\u21CA",DD:"\u2145",dd:"\u2146",DDotrahd:"\u2911",ddotseq:"\u2A77",deg:"\xB0",Del:"\u2207",Delta:"\u0394",delta:"\u03B4",demptyv:"\u29B1",dfisht:"\u297F",Dfr:"\u{1D507}",dfr:"\u{1D521}",dHar:"\u2965",dharl:"\u21C3",dharr:"\u21C2",DiacriticalAcute:"\xB4",DiacriticalDot:"\u02D9",DiacriticalDoubleAcute:"\u02DD",DiacriticalGrave:"`",DiacriticalTilde:"\u02DC",diam:"\u22C4",diamond:"\u22C4",Diamond:"\u22C4",diamondsuit:"\u2666",diams:"\u2666",die:"\xA8",DifferentialD:"\u2146",digamma:"\u03DD",disin:"\u22F2",div:"\xF7",divide:"\xF7",divideontimes:"\u22C7",divonx:"\u22C7",DJcy:"\u0402",djcy:"\u0452",dlcorn:"\u231E",dlcrop:"\u230D",dollar:"$",Dopf:"\u{1D53B}",dopf:"\u{1D555}",Dot:"\xA8",dot:"\u02D9",DotDot:"\u20DC",doteq:"\u2250",doteqdot:"\u2251",DotEqual:"\u2250",dotminus:"\u2238",dotplus:"\u2214",dotsquare:"\u22A1",doublebarwedge:"\u2306",DoubleContourIntegral:"\u222F",DoubleDot:"\xA8",DoubleDownArrow:"\u21D3",DoubleLeftArrow:"\u21D0",DoubleLeftRightArrow:"\u21D4",DoubleLeftTee:"\u2AE4",DoubleLongLeftArrow:"\u27F8",DoubleLongLeftRightArrow:"\u27FA",DoubleLongRightArrow:"\u27F9",DoubleRightArrow:"\u21D2",DoubleRightTee:"\u22A8",DoubleUpArrow:"\u21D1",DoubleUpDownArrow:"\u21D5",DoubleVerticalBar:"\u2225",DownArrowBar:"\u2913",downarrow:"\u2193",DownArrow:"\u2193",Downarrow:"\u21D3",DownArrowUpArrow:"\u21F5",DownBreve:"\u0311",downdownarrows:"\u21CA",downharpoonleft:"\u21C3",downharpoonright:"\u21C2",DownLeftRightVector:"\u2950",DownLeftTeeVector:"\u295E",DownLeftVectorBar:"\u2956",DownLeftVector:"\u21BD",DownRightTeeVector:"\u295F",DownRightVectorBar:"\u2957",DownRightVector:"\u21C1",DownTeeArrow:"\u21A7",DownTee:"\u22A4",drbkarow:"\u2910",drcorn:"\u231F",drcrop:"\u230C",Dscr:"\u{1D49F}",dscr:"\u{1D4B9}",DScy:"\u0405",dscy:"\u0455",dsol:"\u29F6",Dstrok:"\u0110",dstrok:"\u0111",dtdot:"\u22F1",dtri:"\u25BF",dtrif:"\u25BE",duarr:"\u21F5",duhar:"\u296F",dwangle:"\u29A6",DZcy:"\u040F",dzcy:"\u045F",dzigrarr:"\u27FF",Eacute:"\xC9",eacute:"\xE9",easter:"\u2A6E",Ecaron:"\u011A",ecaron:"\u011B",Ecirc:"\xCA",ecirc:"\xEA",ecir:"\u2256",ecolon:"\u2255",Ecy:"\u042D",ecy:"\u044D",eDDot:"\u2A77",Edot:"\u0116",edot:"\u0117",eDot:"\u2251",ee:"\u2147",efDot:"\u2252",Efr:"\u{1D508}",efr:"\u{1D522}",eg:"\u2A9A",Egrave:"\xC8",egrave:"\xE8",egs:"\u2A96",egsdot:"\u2A98",el:"\u2A99",Element:"\u2208",elinters:"\u23E7",ell:"\u2113",els:"\u2A95",elsdot:"\u2A97",Emacr:"\u0112",emacr:"\u0113",empty:"\u2205",emptyset:"\u2205",EmptySmallSquare:"\u25FB",emptyv:"\u2205",EmptyVerySmallSquare:"\u25AB",emsp13:"\u2004",emsp14:"\u2005",emsp:"\u2003",ENG:"\u014A",eng:"\u014B",ensp:"\u2002",Eogon:"\u0118",eogon:"\u0119",Eopf:"\u{1D53C}",eopf:"\u{1D556}",epar:"\u22D5",eparsl:"\u29E3",eplus:"\u2A71",epsi:"\u03B5",Epsilon:"\u0395",epsilon:"\u03B5",epsiv:"\u03F5",eqcirc:"\u2256",eqcolon:"\u2255",eqsim:"\u2242",eqslantgtr:"\u2A96",eqslantless:"\u2A95",Equal:"\u2A75",equals:"=",EqualTilde:"\u2242",equest:"\u225F",Equilibrium:"\u21CC",equiv:"\u2261",equivDD:"\u2A78",eqvparsl:"\u29E5",erarr:"\u2971",erDot:"\u2253",escr:"\u212F",Escr:"\u2130",esdot:"\u2250",Esim:"\u2A73",esim:"\u2242",Eta:"\u0397",eta:"\u03B7",ETH:"\xD0",eth:"\xF0",Euml:"\xCB",euml:"\xEB",euro:"\u20AC",excl:"!",exist:"\u2203",Exists:"\u2203",expectation:"\u2130",exponentiale:"\u2147",ExponentialE:"\u2147",fallingdotseq:"\u2252",Fcy:"\u0424",fcy:"\u0444",female:"\u2640",ffilig:"\uFB03",fflig:"\uFB00",ffllig:"\uFB04",Ffr:"\u{1D509}",ffr:"\u{1D523}",filig:"\uFB01",FilledSmallSquare:"\u25FC",FilledVerySmallSquare:"\u25AA",fjlig:"fj",flat:"\u266D",fllig:"\uFB02",fltns:"\u25B1",fnof:"\u0192",Fopf:"\u{1D53D}",fopf:"\u{1D557}",forall:"\u2200",ForAll:"\u2200",fork:"\u22D4",forkv:"\u2AD9",Fouriertrf:"\u2131",fpartint:"\u2A0D",frac12:"\xBD",frac13:"\u2153",frac14:"\xBC",frac15:"\u2155",frac16:"\u2159",frac18:"\u215B",frac23:"\u2154",frac25:"\u2156",frac34:"\xBE",frac35:"\u2157",frac38:"\u215C",frac45:"\u2158",frac56:"\u215A",frac58:"\u215D",frac78:"\u215E",frasl:"\u2044",frown:"\u2322",fscr:"\u{1D4BB}",Fscr:"\u2131",gacute:"\u01F5",Gamma:"\u0393",gamma:"\u03B3",Gammad:"\u03DC",gammad:"\u03DD",gap:"\u2A86",Gbreve:"\u011E",gbreve:"\u011F",Gcedil:"\u0122",Gcirc:"\u011C",gcirc:"\u011D",Gcy:"\u0413",gcy:"\u0433",Gdot:"\u0120",gdot:"\u0121",ge:"\u2265",gE:"\u2267",gEl:"\u2A8C",gel:"\u22DB",geq:"\u2265",geqq:"\u2267",geqslant:"\u2A7E",gescc:"\u2AA9",ges:"\u2A7E",gesdot:"\u2A80",gesdoto:"\u2A82",gesdotol:"\u2A84",gesl:"\u22DB\uFE00",gesles:"\u2A94",Gfr:"\u{1D50A}",gfr:"\u{1D524}",gg:"\u226B",Gg:"\u22D9",ggg:"\u22D9",gimel:"\u2137",GJcy:"\u0403",gjcy:"\u0453",gla:"\u2AA5",gl:"\u2277",glE:"\u2A92",glj:"\u2AA4",gnap:"\u2A8A",gnapprox:"\u2A8A",gne:"\u2A88",gnE:"\u2269",gneq:"\u2A88",gneqq:"\u2269",gnsim:"\u22E7",Gopf:"\u{1D53E}",gopf:"\u{1D558}",grave:"`",GreaterEqual:"\u2265",GreaterEqualLess:"\u22DB",GreaterFullEqual:"\u2267",GreaterGreater:"\u2AA2",GreaterLess:"\u2277",GreaterSlantEqual:"\u2A7E",GreaterTilde:"\u2273",Gscr:"\u{1D4A2}",gscr:"\u210A",gsim:"\u2273",gsime:"\u2A8E",gsiml:"\u2A90",gtcc:"\u2AA7",gtcir:"\u2A7A",gt:">",GT:">",Gt:"\u226B",gtdot:"\u22D7",gtlPar:"\u2995",gtquest:"\u2A7C",gtrapprox:"\u2A86",gtrarr:"\u2978",gtrdot:"\u22D7",gtreqless:"\u22DB",gtreqqless:"\u2A8C",gtrless:"\u2277",gtrsim:"\u2273",gvertneqq:"\u2269\uFE00",gvnE:"\u2269\uFE00",Hacek:"\u02C7",hairsp:"\u200A",half:"\xBD",hamilt:"\u210B",HARDcy:"\u042A",hardcy:"\u044A",harrcir:"\u2948",harr:"\u2194",hArr:"\u21D4",harrw:"\u21AD",Hat:"^",hbar:"\u210F",Hcirc:"\u0124",hcirc:"\u0125",hearts:"\u2665",heartsuit:"\u2665",hellip:"\u2026",hercon:"\u22B9",hfr:"\u{1D525}",Hfr:"\u210C",HilbertSpace:"\u210B",hksearow:"\u2925",hkswarow:"\u2926",hoarr:"\u21FF",homtht:"\u223B",hookleftarrow:"\u21A9",hookrightarrow:"\u21AA",hopf:"\u{1D559}",Hopf:"\u210D",horbar:"\u2015",HorizontalLine:"\u2500",hscr:"\u{1D4BD}",Hscr:"\u210B",hslash:"\u210F",Hstrok:"\u0126",hstrok:"\u0127",HumpDownHump:"\u224E",HumpEqual:"\u224F",hybull:"\u2043",hyphen:"\u2010",Iacute:"\xCD",iacute:"\xED",ic:"\u2063",Icirc:"\xCE",icirc:"\xEE",Icy:"\u0418",icy:"\u0438",Idot:"\u0130",IEcy:"\u0415",iecy:"\u0435",iexcl:"\xA1",iff:"\u21D4",ifr:"\u{1D526}",Ifr:"\u2111",Igrave:"\xCC",igrave:"\xEC",ii:"\u2148",iiiint:"\u2A0C",iiint:"\u222D",iinfin:"\u29DC",iiota:"\u2129",IJlig:"\u0132",ijlig:"\u0133",Imacr:"\u012A",imacr:"\u012B",image:"\u2111",ImaginaryI:"\u2148",imagline:"\u2110",imagpart:"\u2111",imath:"\u0131",Im:"\u2111",imof:"\u22B7",imped:"\u01B5",Implies:"\u21D2",incare:"\u2105",in:"\u2208",infin:"\u221E",infintie:"\u29DD",inodot:"\u0131",intcal:"\u22BA",int:"\u222B",Int:"\u222C",integers:"\u2124",Integral:"\u222B",intercal:"\u22BA",Intersection:"\u22C2",intlarhk:"\u2A17",intprod:"\u2A3C",InvisibleComma:"\u2063",InvisibleTimes:"\u2062",IOcy:"\u0401",iocy:"\u0451",Iogon:"\u012E",iogon:"\u012F",Iopf:"\u{1D540}",iopf:"\u{1D55A}",Iota:"\u0399",iota:"\u03B9",iprod:"\u2A3C",iquest:"\xBF",iscr:"\u{1D4BE}",Iscr:"\u2110",isin:"\u2208",isindot:"\u22F5",isinE:"\u22F9",isins:"\u22F4",isinsv:"\u22F3",isinv:"\u2208",it:"\u2062",Itilde:"\u0128",itilde:"\u0129",Iukcy:"\u0406",iukcy:"\u0456",Iuml:"\xCF",iuml:"\xEF",Jcirc:"\u0134",jcirc:"\u0135",Jcy:"\u0419",jcy:"\u0439",Jfr:"\u{1D50D}",jfr:"\u{1D527}",jmath:"\u0237",Jopf:"\u{1D541}",jopf:"\u{1D55B}",Jscr:"\u{1D4A5}",jscr:"\u{1D4BF}",Jsercy:"\u0408",jsercy:"\u0458",Jukcy:"\u0404",jukcy:"\u0454",Kappa:"\u039A",kappa:"\u03BA",kappav:"\u03F0",Kcedil:"\u0136",kcedil:"\u0137",Kcy:"\u041A",kcy:"\u043A",Kfr:"\u{1D50E}",kfr:"\u{1D528}",kgreen:"\u0138",KHcy:"\u0425",khcy:"\u0445",KJcy:"\u040C",kjcy:"\u045C",Kopf:"\u{1D542}",kopf:"\u{1D55C}",Kscr:"\u{1D4A6}",kscr:"\u{1D4C0}",lAarr:"\u21DA",Lacute:"\u0139",lacute:"\u013A",laemptyv:"\u29B4",lagran:"\u2112",Lambda:"\u039B",lambda:"\u03BB",lang:"\u27E8",Lang:"\u27EA",langd:"\u2991",langle:"\u27E8",lap:"\u2A85",Laplacetrf:"\u2112",laquo:"\xAB",larrb:"\u21E4",larrbfs:"\u291F",larr:"\u2190",Larr:"\u219E",lArr:"\u21D0",larrfs:"\u291D",larrhk:"\u21A9",larrlp:"\u21AB",larrpl:"\u2939",larrsim:"\u2973",larrtl:"\u21A2",latail:"\u2919",lAtail:"\u291B",lat:"\u2AAB",late:"\u2AAD",lates:"\u2AAD\uFE00",lbarr:"\u290C",lBarr:"\u290E",lbbrk:"\u2772",lbrace:"{",lbrack:"[",lbrke:"\u298B",lbrksld:"\u298F",lbrkslu:"\u298D",Lcaron:"\u013D",lcaron:"\u013E",Lcedil:"\u013B",lcedil:"\u013C",lceil:"\u2308",lcub:"{",Lcy:"\u041B",lcy:"\u043B",ldca:"\u2936",ldquo:"\u201C",ldquor:"\u201E",ldrdhar:"\u2967",ldrushar:"\u294B",ldsh:"\u21B2",le:"\u2264",lE:"\u2266",LeftAngleBracket:"\u27E8",LeftArrowBar:"\u21E4",leftarrow:"\u2190",LeftArrow:"\u2190",Leftarrow:"\u21D0",LeftArrowRightArrow:"\u21C6",leftarrowtail:"\u21A2",LeftCeiling:"\u2308",LeftDoubleBracket:"\u27E6",LeftDownTeeVector:"\u2961",LeftDownVectorBar:"\u2959",LeftDownVector:"\u21C3",LeftFloor:"\u230A",leftharpoondown:"\u21BD",leftharpoonup:"\u21BC",leftleftarrows:"\u21C7",leftrightarrow:"\u2194",LeftRightArrow:"\u2194",Leftrightarrow:"\u21D4",leftrightarrows:"\u21C6",leftrightharpoons:"\u21CB",leftrightsquigarrow:"\u21AD",LeftRightVector:"\u294E",LeftTeeArrow:"\u21A4",LeftTee:"\u22A3",LeftTeeVector:"\u295A",leftthreetimes:"\u22CB",LeftTriangleBar:"\u29CF",LeftTriangle:"\u22B2",LeftTriangleEqual:"\u22B4",LeftUpDownVector:"\u2951",LeftUpTeeVector:"\u2960",LeftUpVectorBar:"\u2958",LeftUpVector:"\u21BF",LeftVectorBar:"\u2952",LeftVector:"\u21BC",lEg:"\u2A8B",leg:"\u22DA",leq:"\u2264",leqq:"\u2266",leqslant:"\u2A7D",lescc:"\u2AA8",les:"\u2A7D",lesdot:"\u2A7F",lesdoto:"\u2A81",lesdotor:"\u2A83",lesg:"\u22DA\uFE00",lesges:"\u2A93",lessapprox:"\u2A85",lessdot:"\u22D6",lesseqgtr:"\u22DA",lesseqqgtr:"\u2A8B",LessEqualGreater:"\u22DA",LessFullEqual:"\u2266",LessGreater:"\u2276",lessgtr:"\u2276",LessLess:"\u2AA1",lesssim:"\u2272",LessSlantEqual:"\u2A7D",LessTilde:"\u2272",lfisht:"\u297C",lfloor:"\u230A",Lfr:"\u{1D50F}",lfr:"\u{1D529}",lg:"\u2276",lgE:"\u2A91",lHar:"\u2962",lhard:"\u21BD",lharu:"\u21BC",lharul:"\u296A",lhblk:"\u2584",LJcy:"\u0409",ljcy:"\u0459",llarr:"\u21C7",ll:"\u226A",Ll:"\u22D8",llcorner:"\u231E",Lleftarrow:"\u21DA",llhard:"\u296B",lltri:"\u25FA",Lmidot:"\u013F",lmidot:"\u0140",lmoustache:"\u23B0",lmoust:"\u23B0",lnap:"\u2A89",lnapprox:"\u2A89",lne:"\u2A87",lnE:"\u2268",lneq:"\u2A87",lneqq:"\u2268",lnsim:"\u22E6",loang:"\u27EC",loarr:"\u21FD",lobrk:"\u27E6",longleftarrow:"\u27F5",LongLeftArrow:"\u27F5",Longleftarrow:"\u27F8",longleftrightarrow:"\u27F7",LongLeftRightArrow:"\u27F7",Longleftrightarrow:"\u27FA",longmapsto:"\u27FC",longrightarrow:"\u27F6",LongRightArrow:"\u27F6",Longrightarrow:"\u27F9",looparrowleft:"\u21AB",looparrowright:"\u21AC",lopar:"\u2985",Lopf:"\u{1D543}",lopf:"\u{1D55D}",loplus:"\u2A2D",lotimes:"\u2A34",lowast:"\u2217",lowbar:"_",LowerLeftArrow:"\u2199",LowerRightArrow:"\u2198",loz:"\u25CA",lozenge:"\u25CA",lozf:"\u29EB",lpar:"(",lparlt:"\u2993",lrarr:"\u21C6",lrcorner:"\u231F",lrhar:"\u21CB",lrhard:"\u296D",lrm:"\u200E",lrtri:"\u22BF",lsaquo:"\u2039",lscr:"\u{1D4C1}",Lscr:"\u2112",lsh:"\u21B0",Lsh:"\u21B0",lsim:"\u2272",lsime:"\u2A8D",lsimg:"\u2A8F",lsqb:"[",lsquo:"\u2018",lsquor:"\u201A",Lstrok:"\u0141",lstrok:"\u0142",ltcc:"\u2AA6",ltcir:"\u2A79",lt:"<",LT:"<",Lt:"\u226A",ltdot:"\u22D6",lthree:"\u22CB",ltimes:"\u22C9",ltlarr:"\u2976",ltquest:"\u2A7B",ltri:"\u25C3",ltrie:"\u22B4",ltrif:"\u25C2",ltrPar:"\u2996",lurdshar:"\u294A",luruhar:"\u2966",lvertneqq:"\u2268\uFE00",lvnE:"\u2268\uFE00",macr:"\xAF",male:"\u2642",malt:"\u2720",maltese:"\u2720",Map:"\u2905",map:"\u21A6",mapsto:"\u21A6",mapstodown:"\u21A7",mapstoleft:"\u21A4",mapstoup:"\u21A5",marker:"\u25AE",mcomma:"\u2A29",Mcy:"\u041C",mcy:"\u043C",mdash:"\u2014",mDDot:"\u223A",measuredangle:"\u2221",MediumSpace:"\u205F",Mellintrf:"\u2133",Mfr:"\u{1D510}",mfr:"\u{1D52A}",mho:"\u2127",micro:"\xB5",midast:"*",midcir:"\u2AF0",mid:"\u2223",middot:"\xB7",minusb:"\u229F",minus:"\u2212",minusd:"\u2238",minusdu:"\u2A2A",MinusPlus:"\u2213",mlcp:"\u2ADB",mldr:"\u2026",mnplus:"\u2213",models:"\u22A7",Mopf:"\u{1D544}",mopf:"\u{1D55E}",mp:"\u2213",mscr:"\u{1D4C2}",Mscr:"\u2133",mstpos:"\u223E",Mu:"\u039C",mu:"\u03BC",multimap:"\u22B8",mumap:"\u22B8",nabla:"\u2207",Nacute:"\u0143",nacute:"\u0144",nang:"\u2220\u20D2",nap:"\u2249",napE:"\u2A70\u0338",napid:"\u224B\u0338",napos:"\u0149",napprox:"\u2249",natural:"\u266E",naturals:"\u2115",natur:"\u266E",nbsp:"\xA0",nbump:"\u224E\u0338",nbumpe:"\u224F\u0338",ncap:"\u2A43",Ncaron:"\u0147",ncaron:"\u0148",Ncedil:"\u0145",ncedil:"\u0146",ncong:"\u2247",ncongdot:"\u2A6D\u0338",ncup:"\u2A42",Ncy:"\u041D",ncy:"\u043D",ndash:"\u2013",nearhk:"\u2924",nearr:"\u2197",neArr:"\u21D7",nearrow:"\u2197",ne:"\u2260",nedot:"\u2250\u0338",NegativeMediumSpace:"\u200B",NegativeThickSpace:"\u200B",NegativeThinSpace:"\u200B",NegativeVeryThinSpace:"\u200B",nequiv:"\u2262",nesear:"\u2928",nesim:"\u2242\u0338",NestedGreaterGreater:"\u226B",NestedLessLess:"\u226A",NewLine:`
`,nexist:"\u2204",nexists:"\u2204",Nfr:"\u{1D511}",nfr:"\u{1D52B}",ngE:"\u2267\u0338",nge:"\u2271",ngeq:"\u2271",ngeqq:"\u2267\u0338",ngeqslant:"\u2A7E\u0338",nges:"\u2A7E\u0338",nGg:"\u22D9\u0338",ngsim:"\u2275",nGt:"\u226B\u20D2",ngt:"\u226F",ngtr:"\u226F",nGtv:"\u226B\u0338",nharr:"\u21AE",nhArr:"\u21CE",nhpar:"\u2AF2",ni:"\u220B",nis:"\u22FC",nisd:"\u22FA",niv:"\u220B",NJcy:"\u040A",njcy:"\u045A",nlarr:"\u219A",nlArr:"\u21CD",nldr:"\u2025",nlE:"\u2266\u0338",nle:"\u2270",nleftarrow:"\u219A",nLeftarrow:"\u21CD",nleftrightarrow:"\u21AE",nLeftrightarrow:"\u21CE",nleq:"\u2270",nleqq:"\u2266\u0338",nleqslant:"\u2A7D\u0338",nles:"\u2A7D\u0338",nless:"\u226E",nLl:"\u22D8\u0338",nlsim:"\u2274",nLt:"\u226A\u20D2",nlt:"\u226E",nltri:"\u22EA",nltrie:"\u22EC",nLtv:"\u226A\u0338",nmid:"\u2224",NoBreak:"\u2060",NonBreakingSpace:"\xA0",nopf:"\u{1D55F}",Nopf:"\u2115",Not:"\u2AEC",not:"\xAC",NotCongruent:"\u2262",NotCupCap:"\u226D",NotDoubleVerticalBar:"\u2226",NotElement:"\u2209",NotEqual:"\u2260",NotEqualTilde:"\u2242\u0338",NotExists:"\u2204",NotGreater:"\u226F",NotGreaterEqual:"\u2271",NotGreaterFullEqual:"\u2267\u0338",NotGreaterGreater:"\u226B\u0338",NotGreaterLess:"\u2279",NotGreaterSlantEqual:"\u2A7E\u0338",NotGreaterTilde:"\u2275",NotHumpDownHump:"\u224E\u0338",NotHumpEqual:"\u224F\u0338",notin:"\u2209",notindot:"\u22F5\u0338",notinE:"\u22F9\u0338",notinva:"\u2209",notinvb:"\u22F7",notinvc:"\u22F6",NotLeftTriangleBar:"\u29CF\u0338",NotLeftTriangle:"\u22EA",NotLeftTriangleEqual:"\u22EC",NotLess:"\u226E",NotLessEqual:"\u2270",NotLessGreater:"\u2278",NotLessLess:"\u226A\u0338",NotLessSlantEqual:"\u2A7D\u0338",NotLessTilde:"\u2274",NotNestedGreaterGreater:"\u2AA2\u0338",NotNestedLessLess:"\u2AA1\u0338",notni:"\u220C",notniva:"\u220C",notnivb:"\u22FE",notnivc:"\u22FD",NotPrecedes:"\u2280",NotPrecedesEqual:"\u2AAF\u0338",NotPrecedesSlantEqual:"\u22E0",NotReverseElement:"\u220C",NotRightTriangleBar:"\u29D0\u0338",NotRightTriangle:"\u22EB",NotRightTriangleEqual:"\u22ED",NotSquareSubset:"\u228F\u0338",NotSquareSubsetEqual:"\u22E2",NotSquareSuperset:"\u2290\u0338",NotSquareSupersetEqual:"\u22E3",NotSubset:"\u2282\u20D2",NotSubsetEqual:"\u2288",NotSucceeds:"\u2281",NotSucceedsEqual:"\u2AB0\u0338",NotSucceedsSlantEqual:"\u22E1",NotSucceedsTilde:"\u227F\u0338",NotSuperset:"\u2283\u20D2",NotSupersetEqual:"\u2289",NotTilde:"\u2241",NotTildeEqual:"\u2244",NotTildeFullEqual:"\u2247",NotTildeTilde:"\u2249",NotVerticalBar:"\u2224",nparallel:"\u2226",npar:"\u2226",nparsl:"\u2AFD\u20E5",npart:"\u2202\u0338",npolint:"\u2A14",npr:"\u2280",nprcue:"\u22E0",nprec:"\u2280",npreceq:"\u2AAF\u0338",npre:"\u2AAF\u0338",nrarrc:"\u2933\u0338",nrarr:"\u219B",nrArr:"\u21CF",nrarrw:"\u219D\u0338",nrightarrow:"\u219B",nRightarrow:"\u21CF",nrtri:"\u22EB",nrtrie:"\u22ED",nsc:"\u2281",nsccue:"\u22E1",nsce:"\u2AB0\u0338",Nscr:"\u{1D4A9}",nscr:"\u{1D4C3}",nshortmid:"\u2224",nshortparallel:"\u2226",nsim:"\u2241",nsime:"\u2244",nsimeq:"\u2244",nsmid:"\u2224",nspar:"\u2226",nsqsube:"\u22E2",nsqsupe:"\u22E3",nsub:"\u2284",nsubE:"\u2AC5\u0338",nsube:"\u2288",nsubset:"\u2282\u20D2",nsubseteq:"\u2288",nsubseteqq:"\u2AC5\u0338",nsucc:"\u2281",nsucceq:"\u2AB0\u0338",nsup:"\u2285",nsupE:"\u2AC6\u0338",nsupe:"\u2289",nsupset:"\u2283\u20D2",nsupseteq:"\u2289",nsupseteqq:"\u2AC6\u0338",ntgl:"\u2279",Ntilde:"\xD1",ntilde:"\xF1",ntlg:"\u2278",ntriangleleft:"\u22EA",ntrianglelefteq:"\u22EC",ntriangleright:"\u22EB",ntrianglerighteq:"\u22ED",Nu:"\u039D",nu:"\u03BD",num:"#",numero:"\u2116",numsp:"\u2007",nvap:"\u224D\u20D2",nvdash:"\u22AC",nvDash:"\u22AD",nVdash:"\u22AE",nVDash:"\u22AF",nvge:"\u2265\u20D2",nvgt:">\u20D2",nvHarr:"\u2904",nvinfin:"\u29DE",nvlArr:"\u2902",nvle:"\u2264\u20D2",nvlt:"<\u20D2",nvltrie:"\u22B4\u20D2",nvrArr:"\u2903",nvrtrie:"\u22B5\u20D2",nvsim:"\u223C\u20D2",nwarhk:"\u2923",nwarr:"\u2196",nwArr:"\u21D6",nwarrow:"\u2196",nwnear:"\u2927",Oacute:"\xD3",oacute:"\xF3",oast:"\u229B",Ocirc:"\xD4",ocirc:"\xF4",ocir:"\u229A",Ocy:"\u041E",ocy:"\u043E",odash:"\u229D",Odblac:"\u0150",odblac:"\u0151",odiv:"\u2A38",odot:"\u2299",odsold:"\u29BC",OElig:"\u0152",oelig:"\u0153",ofcir:"\u29BF",Ofr:"\u{1D512}",ofr:"\u{1D52C}",ogon:"\u02DB",Ograve:"\xD2",ograve:"\xF2",ogt:"\u29C1",ohbar:"\u29B5",ohm:"\u03A9",oint:"\u222E",olarr:"\u21BA",olcir:"\u29BE",olcross:"\u29BB",oline:"\u203E",olt:"\u29C0",Omacr:"\u014C",omacr:"\u014D",Omega:"\u03A9",omega:"\u03C9",Omicron:"\u039F",omicron:"\u03BF",omid:"\u29B6",ominus:"\u2296",Oopf:"\u{1D546}",oopf:"\u{1D560}",opar:"\u29B7",OpenCurlyDoubleQuote:"\u201C",OpenCurlyQuote:"\u2018",operp:"\u29B9",oplus:"\u2295",orarr:"\u21BB",Or:"\u2A54",or:"\u2228",ord:"\u2A5D",order:"\u2134",orderof:"\u2134",ordf:"\xAA",ordm:"\xBA",origof:"\u22B6",oror:"\u2A56",orslope:"\u2A57",orv:"\u2A5B",oS:"\u24C8",Oscr:"\u{1D4AA}",oscr:"\u2134",Oslash:"\xD8",oslash:"\xF8",osol:"\u2298",Otilde:"\xD5",otilde:"\xF5",otimesas:"\u2A36",Otimes:"\u2A37",otimes:"\u2297",Ouml:"\xD6",ouml:"\xF6",ovbar:"\u233D",OverBar:"\u203E",OverBrace:"\u23DE",OverBracket:"\u23B4",OverParenthesis:"\u23DC",para:"\xB6",parallel:"\u2225",par:"\u2225",parsim:"\u2AF3",parsl:"\u2AFD",part:"\u2202",PartialD:"\u2202",Pcy:"\u041F",pcy:"\u043F",percnt:"%",period:".",permil:"\u2030",perp:"\u22A5",pertenk:"\u2031",Pfr:"\u{1D513}",pfr:"\u{1D52D}",Phi:"\u03A6",phi:"\u03C6",phiv:"\u03D5",phmmat:"\u2133",phone:"\u260E",Pi:"\u03A0",pi:"\u03C0",pitchfork:"\u22D4",piv:"\u03D6",planck:"\u210F",planckh:"\u210E",plankv:"\u210F",plusacir:"\u2A23",plusb:"\u229E",pluscir:"\u2A22",plus:"+",plusdo:"\u2214",plusdu:"\u2A25",pluse:"\u2A72",PlusMinus:"\xB1",plusmn:"\xB1",plussim:"\u2A26",plustwo:"\u2A27",pm:"\xB1",Poincareplane:"\u210C",pointint:"\u2A15",popf:"\u{1D561}",Popf:"\u2119",pound:"\xA3",prap:"\u2AB7",Pr:"\u2ABB",pr:"\u227A",prcue:"\u227C",precapprox:"\u2AB7",prec:"\u227A",preccurlyeq:"\u227C",Precedes:"\u227A",PrecedesEqual:"\u2AAF",PrecedesSlantEqual:"\u227C",PrecedesTilde:"\u227E",preceq:"\u2AAF",precnapprox:"\u2AB9",precneqq:"\u2AB5",precnsim:"\u22E8",pre:"\u2AAF",prE:"\u2AB3",precsim:"\u227E",prime:"\u2032",Prime:"\u2033",primes:"\u2119",prnap:"\u2AB9",prnE:"\u2AB5",prnsim:"\u22E8",prod:"\u220F",Product:"\u220F",profalar:"\u232E",profline:"\u2312",profsurf:"\u2313",prop:"\u221D",Proportional:"\u221D",Proportion:"\u2237",propto:"\u221D",prsim:"\u227E",prurel:"\u22B0",Pscr:"\u{1D4AB}",pscr:"\u{1D4C5}",Psi:"\u03A8",psi:"\u03C8",puncsp:"\u2008",Qfr:"\u{1D514}",qfr:"\u{1D52E}",qint:"\u2A0C",qopf:"\u{1D562}",Qopf:"\u211A",qprime:"\u2057",Qscr:"\u{1D4AC}",qscr:"\u{1D4C6}",quaternions:"\u210D",quatint:"\u2A16",quest:"?",questeq:"\u225F",quot:'"',QUOT:'"',rAarr:"\u21DB",race:"\u223D\u0331",Racute:"\u0154",racute:"\u0155",radic:"\u221A",raemptyv:"\u29B3",rang:"\u27E9",Rang:"\u27EB",rangd:"\u2992",range:"\u29A5",rangle:"\u27E9",raquo:"\xBB",rarrap:"\u2975",rarrb:"\u21E5",rarrbfs:"\u2920",rarrc:"\u2933",rarr:"\u2192",Rarr:"\u21A0",rArr:"\u21D2",rarrfs:"\u291E",rarrhk:"\u21AA",rarrlp:"\u21AC",rarrpl:"\u2945",rarrsim:"\u2974",Rarrtl:"\u2916",rarrtl:"\u21A3",rarrw:"\u219D",ratail:"\u291A",rAtail:"\u291C",ratio:"\u2236",rationals:"\u211A",rbarr:"\u290D",rBarr:"\u290F",RBarr:"\u2910",rbbrk:"\u2773",rbrace:"}",rbrack:"]",rbrke:"\u298C",rbrksld:"\u298E",rbrkslu:"\u2990",Rcaron:"\u0158",rcaron:"\u0159",Rcedil:"\u0156",rcedil:"\u0157",rceil:"\u2309",rcub:"}",Rcy:"\u0420",rcy:"\u0440",rdca:"\u2937",rdldhar:"\u2969",rdquo:"\u201D",rdquor:"\u201D",rdsh:"\u21B3",real:"\u211C",realine:"\u211B",realpart:"\u211C",reals:"\u211D",Re:"\u211C",rect:"\u25AD",reg:"\xAE",REG:"\xAE",ReverseElement:"\u220B",ReverseEquilibrium:"\u21CB",ReverseUpEquilibrium:"\u296F",rfisht:"\u297D",rfloor:"\u230B",rfr:"\u{1D52F}",Rfr:"\u211C",rHar:"\u2964",rhard:"\u21C1",rharu:"\u21C0",rharul:"\u296C",Rho:"\u03A1",rho:"\u03C1",rhov:"\u03F1",RightAngleBracket:"\u27E9",RightArrowBar:"\u21E5",rightarrow:"\u2192",RightArrow:"\u2192",Rightarrow:"\u21D2",RightArrowLeftArrow:"\u21C4",rightarrowtail:"\u21A3",RightCeiling:"\u2309",RightDoubleBracket:"\u27E7",RightDownTeeVector:"\u295D",RightDownVectorBar:"\u2955",RightDownVector:"\u21C2",RightFloor:"\u230B",rightharpoondown:"\u21C1",rightharpoonup:"\u21C0",rightleftarrows:"\u21C4",rightleftharpoons:"\u21CC",rightrightarrows:"\u21C9",rightsquigarrow:"\u219D",RightTeeArrow:"\u21A6",RightTee:"\u22A2",RightTeeVector:"\u295B",rightthreetimes:"\u22CC",RightTriangleBar:"\u29D0",RightTriangle:"\u22B3",RightTriangleEqual:"\u22B5",RightUpDownVector:"\u294F",RightUpTeeVector:"\u295C",RightUpVectorBar:"\u2954",RightUpVector:"\u21BE",RightVectorBar:"\u2953",RightVector:"\u21C0",ring:"\u02DA",risingdotseq:"\u2253",rlarr:"\u21C4",rlhar:"\u21CC",rlm:"\u200F",rmoustache:"\u23B1",rmoust:"\u23B1",rnmid:"\u2AEE",roang:"\u27ED",roarr:"\u21FE",robrk:"\u27E7",ropar:"\u2986",ropf:"\u{1D563}",Ropf:"\u211D",roplus:"\u2A2E",rotimes:"\u2A35",RoundImplies:"\u2970",rpar:")",rpargt:"\u2994",rppolint:"\u2A12",rrarr:"\u21C9",Rrightarrow:"\u21DB",rsaquo:"\u203A",rscr:"\u{1D4C7}",Rscr:"\u211B",rsh:"\u21B1",Rsh:"\u21B1",rsqb:"]",rsquo:"\u2019",rsquor:"\u2019",rthree:"\u22CC",rtimes:"\u22CA",rtri:"\u25B9",rtrie:"\u22B5",rtrif:"\u25B8",rtriltri:"\u29CE",RuleDelayed:"\u29F4",ruluhar:"\u2968",rx:"\u211E",Sacute:"\u015A",sacute:"\u015B",sbquo:"\u201A",scap:"\u2AB8",Scaron:"\u0160",scaron:"\u0161",Sc:"\u2ABC",sc:"\u227B",sccue:"\u227D",sce:"\u2AB0",scE:"\u2AB4",Scedil:"\u015E",scedil:"\u015F",Scirc:"\u015C",scirc:"\u015D",scnap:"\u2ABA",scnE:"\u2AB6",scnsim:"\u22E9",scpolint:"\u2A13",scsim:"\u227F",Scy:"\u0421",scy:"\u0441",sdotb:"\u22A1",sdot:"\u22C5",sdote:"\u2A66",searhk:"\u2925",searr:"\u2198",seArr:"\u21D8",searrow:"\u2198",sect:"\xA7",semi:";",seswar:"\u2929",setminus:"\u2216",setmn:"\u2216",sext:"\u2736",Sfr:"\u{1D516}",sfr:"\u{1D530}",sfrown:"\u2322",sharp:"\u266F",SHCHcy:"\u0429",shchcy:"\u0449",SHcy:"\u0428",shcy:"\u0448",ShortDownArrow:"\u2193",ShortLeftArrow:"\u2190",shortmid:"\u2223",shortparallel:"\u2225",ShortRightArrow:"\u2192",ShortUpArrow:"\u2191",shy:"\xAD",Sigma:"\u03A3",sigma:"\u03C3",sigmaf:"\u03C2",sigmav:"\u03C2",sim:"\u223C",simdot:"\u2A6A",sime:"\u2243",simeq:"\u2243",simg:"\u2A9E",simgE:"\u2AA0",siml:"\u2A9D",simlE:"\u2A9F",simne:"\u2246",simplus:"\u2A24",simrarr:"\u2972",slarr:"\u2190",SmallCircle:"\u2218",smallsetminus:"\u2216",smashp:"\u2A33",smeparsl:"\u29E4",smid:"\u2223",smile:"\u2323",smt:"\u2AAA",smte:"\u2AAC",smtes:"\u2AAC\uFE00",SOFTcy:"\u042C",softcy:"\u044C",solbar:"\u233F",solb:"\u29C4",sol:"/",Sopf:"\u{1D54A}",sopf:"\u{1D564}",spades:"\u2660",spadesuit:"\u2660",spar:"\u2225",sqcap:"\u2293",sqcaps:"\u2293\uFE00",sqcup:"\u2294",sqcups:"\u2294\uFE00",Sqrt:"\u221A",sqsub:"\u228F",sqsube:"\u2291",sqsubset:"\u228F",sqsubseteq:"\u2291",sqsup:"\u2290",sqsupe:"\u2292",sqsupset:"\u2290",sqsupseteq:"\u2292",square:"\u25A1",Square:"\u25A1",SquareIntersection:"\u2293",SquareSubset:"\u228F",SquareSubsetEqual:"\u2291",SquareSuperset:"\u2290",SquareSupersetEqual:"\u2292",SquareUnion:"\u2294",squarf:"\u25AA",squ:"\u25A1",squf:"\u25AA",srarr:"\u2192",Sscr:"\u{1D4AE}",sscr:"\u{1D4C8}",ssetmn:"\u2216",ssmile:"\u2323",sstarf:"\u22C6",Star:"\u22C6",star:"\u2606",starf:"\u2605",straightepsilon:"\u03F5",straightphi:"\u03D5",strns:"\xAF",sub:"\u2282",Sub:"\u22D0",subdot:"\u2ABD",subE:"\u2AC5",sube:"\u2286",subedot:"\u2AC3",submult:"\u2AC1",subnE:"\u2ACB",subne:"\u228A",subplus:"\u2ABF",subrarr:"\u2979",subset:"\u2282",Subset:"\u22D0",subseteq:"\u2286",subseteqq:"\u2AC5",SubsetEqual:"\u2286",subsetneq:"\u228A",subsetneqq:"\u2ACB",subsim:"\u2AC7",subsub:"\u2AD5",subsup:"\u2AD3",succapprox:"\u2AB8",succ:"\u227B",succcurlyeq:"\u227D",Succeeds:"\u227B",SucceedsEqual:"\u2AB0",SucceedsSlantEqual:"\u227D",SucceedsTilde:"\u227F",succeq:"\u2AB0",succnapprox:"\u2ABA",succneqq:"\u2AB6",succnsim:"\u22E9",succsim:"\u227F",SuchThat:"\u220B",sum:"\u2211",Sum:"\u2211",sung:"\u266A",sup1:"\xB9",sup2:"\xB2",sup3:"\xB3",sup:"\u2283",Sup:"\u22D1",supdot:"\u2ABE",supdsub:"\u2AD8",supE:"\u2AC6",supe:"\u2287",supedot:"\u2AC4",Superset:"\u2283",SupersetEqual:"\u2287",suphsol:"\u27C9",suphsub:"\u2AD7",suplarr:"\u297B",supmult:"\u2AC2",supnE:"\u2ACC",supne:"\u228B",supplus:"\u2AC0",supset:"\u2283",Supset:"\u22D1",supseteq:"\u2287",supseteqq:"\u2AC6",supsetneq:"\u228B",supsetneqq:"\u2ACC",supsim:"\u2AC8",supsub:"\u2AD4",supsup:"\u2AD6",swarhk:"\u2926",swarr:"\u2199",swArr:"\u21D9",swarrow:"\u2199",swnwar:"\u292A",szlig:"\xDF",Tab:"	",target:"\u2316",Tau:"\u03A4",tau:"\u03C4",tbrk:"\u23B4",Tcaron:"\u0164",tcaron:"\u0165",Tcedil:"\u0162",tcedil:"\u0163",Tcy:"\u0422",tcy:"\u0442",tdot:"\u20DB",telrec:"\u2315",Tfr:"\u{1D517}",tfr:"\u{1D531}",there4:"\u2234",therefore:"\u2234",Therefore:"\u2234",Theta:"\u0398",theta:"\u03B8",thetasym:"\u03D1",thetav:"\u03D1",thickapprox:"\u2248",thicksim:"\u223C",ThickSpace:"\u205F\u200A",ThinSpace:"\u2009",thinsp:"\u2009",thkap:"\u2248",thksim:"\u223C",THORN:"\xDE",thorn:"\xFE",tilde:"\u02DC",Tilde:"\u223C",TildeEqual:"\u2243",TildeFullEqual:"\u2245",TildeTilde:"\u2248",timesbar:"\u2A31",timesb:"\u22A0",times:"\xD7",timesd:"\u2A30",tint:"\u222D",toea:"\u2928",topbot:"\u2336",topcir:"\u2AF1",top:"\u22A4",Topf:"\u{1D54B}",topf:"\u{1D565}",topfork:"\u2ADA",tosa:"\u2929",tprime:"\u2034",trade:"\u2122",TRADE:"\u2122",triangle:"\u25B5",triangledown:"\u25BF",triangleleft:"\u25C3",trianglelefteq:"\u22B4",triangleq:"\u225C",triangleright:"\u25B9",trianglerighteq:"\u22B5",tridot:"\u25EC",trie:"\u225C",triminus:"\u2A3A",TripleDot:"\u20DB",triplus:"\u2A39",trisb:"\u29CD",tritime:"\u2A3B",trpezium:"\u23E2",Tscr:"\u{1D4AF}",tscr:"\u{1D4C9}",TScy:"\u0426",tscy:"\u0446",TSHcy:"\u040B",tshcy:"\u045B",Tstrok:"\u0166",tstrok:"\u0167",twixt:"\u226C",twoheadleftarrow:"\u219E",twoheadrightarrow:"\u21A0",Uacute:"\xDA",uacute:"\xFA",uarr:"\u2191",Uarr:"\u219F",uArr:"\u21D1",Uarrocir:"\u2949",Ubrcy:"\u040E",ubrcy:"\u045E",Ubreve:"\u016C",ubreve:"\u016D",Ucirc:"\xDB",ucirc:"\xFB",Ucy:"\u0423",ucy:"\u0443",udarr:"\u21C5",Udblac:"\u0170",udblac:"\u0171",udhar:"\u296E",ufisht:"\u297E",Ufr:"\u{1D518}",ufr:"\u{1D532}",Ugrave:"\xD9",ugrave:"\xF9",uHar:"\u2963",uharl:"\u21BF",uharr:"\u21BE",uhblk:"\u2580",ulcorn:"\u231C",ulcorner:"\u231C",ulcrop:"\u230F",ultri:"\u25F8",Umacr:"\u016A",umacr:"\u016B",uml:"\xA8",UnderBar:"_",UnderBrace:"\u23DF",UnderBracket:"\u23B5",UnderParenthesis:"\u23DD",Union:"\u22C3",UnionPlus:"\u228E",Uogon:"\u0172",uogon:"\u0173",Uopf:"\u{1D54C}",uopf:"\u{1D566}",UpArrowBar:"\u2912",uparrow:"\u2191",UpArrow:"\u2191",Uparrow:"\u21D1",UpArrowDownArrow:"\u21C5",updownarrow:"\u2195",UpDownArrow:"\u2195",Updownarrow:"\u21D5",UpEquilibrium:"\u296E",upharpoonleft:"\u21BF",upharpoonright:"\u21BE",uplus:"\u228E",UpperLeftArrow:"\u2196",UpperRightArrow:"\u2197",upsi:"\u03C5",Upsi:"\u03D2",upsih:"\u03D2",Upsilon:"\u03A5",upsilon:"\u03C5",UpTeeArrow:"\u21A5",UpTee:"\u22A5",upuparrows:"\u21C8",urcorn:"\u231D",urcorner:"\u231D",urcrop:"\u230E",Uring:"\u016E",uring:"\u016F",urtri:"\u25F9",Uscr:"\u{1D4B0}",uscr:"\u{1D4CA}",utdot:"\u22F0",Utilde:"\u0168",utilde:"\u0169",utri:"\u25B5",utrif:"\u25B4",uuarr:"\u21C8",Uuml:"\xDC",uuml:"\xFC",uwangle:"\u29A7",vangrt:"\u299C",varepsilon:"\u03F5",varkappa:"\u03F0",varnothing:"\u2205",varphi:"\u03D5",varpi:"\u03D6",varpropto:"\u221D",varr:"\u2195",vArr:"\u21D5",varrho:"\u03F1",varsigma:"\u03C2",varsubsetneq:"\u228A\uFE00",varsubsetneqq:"\u2ACB\uFE00",varsupsetneq:"\u228B\uFE00",varsupsetneqq:"\u2ACC\uFE00",vartheta:"\u03D1",vartriangleleft:"\u22B2",vartriangleright:"\u22B3",vBar:"\u2AE8",Vbar:"\u2AEB",vBarv:"\u2AE9",Vcy:"\u0412",vcy:"\u0432",vdash:"\u22A2",vDash:"\u22A8",Vdash:"\u22A9",VDash:"\u22AB",Vdashl:"\u2AE6",veebar:"\u22BB",vee:"\u2228",Vee:"\u22C1",veeeq:"\u225A",vellip:"\u22EE",verbar:"|",Verbar:"\u2016",vert:"|",Vert:"\u2016",VerticalBar:"\u2223",VerticalLine:"|",VerticalSeparator:"\u2758",VerticalTilde:"\u2240",VeryThinSpace:"\u200A",Vfr:"\u{1D519}",vfr:"\u{1D533}",vltri:"\u22B2",vnsub:"\u2282\u20D2",vnsup:"\u2283\u20D2",Vopf:"\u{1D54D}",vopf:"\u{1D567}",vprop:"\u221D",vrtri:"\u22B3",Vscr:"\u{1D4B1}",vscr:"\u{1D4CB}",vsubnE:"\u2ACB\uFE00",vsubne:"\u228A\uFE00",vsupnE:"\u2ACC\uFE00",vsupne:"\u228B\uFE00",Vvdash:"\u22AA",vzigzag:"\u299A",Wcirc:"\u0174",wcirc:"\u0175",wedbar:"\u2A5F",wedge:"\u2227",Wedge:"\u22C0",wedgeq:"\u2259",weierp:"\u2118",Wfr:"\u{1D51A}",wfr:"\u{1D534}",Wopf:"\u{1D54E}",wopf:"\u{1D568}",wp:"\u2118",wr:"\u2240",wreath:"\u2240",Wscr:"\u{1D4B2}",wscr:"\u{1D4CC}",xcap:"\u22C2",xcirc:"\u25EF",xcup:"\u22C3",xdtri:"\u25BD",Xfr:"\u{1D51B}",xfr:"\u{1D535}",xharr:"\u27F7",xhArr:"\u27FA",Xi:"\u039E",xi:"\u03BE",xlarr:"\u27F5",xlArr:"\u27F8",xmap:"\u27FC",xnis:"\u22FB",xodot:"\u2A00",Xopf:"\u{1D54F}",xopf:"\u{1D569}",xoplus:"\u2A01",xotime:"\u2A02",xrarr:"\u27F6",xrArr:"\u27F9",Xscr:"\u{1D4B3}",xscr:"\u{1D4CD}",xsqcup:"\u2A06",xuplus:"\u2A04",xutri:"\u25B3",xvee:"\u22C1",xwedge:"\u22C0",Yacute:"\xDD",yacute:"\xFD",YAcy:"\u042F",yacy:"\u044F",Ycirc:"\u0176",ycirc:"\u0177",Ycy:"\u042B",ycy:"\u044B",yen:"\xA5",Yfr:"\u{1D51C}",yfr:"\u{1D536}",YIcy:"\u0407",yicy:"\u0457",Yopf:"\u{1D550}",yopf:"\u{1D56A}",Yscr:"\u{1D4B4}",yscr:"\u{1D4CE}",YUcy:"\u042E",yucy:"\u044E",yuml:"\xFF",Yuml:"\u0178",Zacute:"\u0179",zacute:"\u017A",Zcaron:"\u017D",zcaron:"\u017E",Zcy:"\u0417",zcy:"\u0437",Zdot:"\u017B",zdot:"\u017C",zeetrf:"\u2128",ZeroWidthSpace:"\u200B",Zeta:"\u0396",zeta:"\u03B6",zfr:"\u{1D537}",Zfr:"\u2128",ZHcy:"\u0416",zhcy:"\u0436",zigrarr:"\u21DD",zopf:"\u{1D56B}",Zopf:"\u2124",Zscr:"\u{1D4B5}",zscr:"\u{1D4CF}",zwj:"\u200D",zwnj:"\u200C"}});var Ws=L((f2,Cp)=>{"use strict";Cp.exports=vp()});var Ti=L((p2,xp)=>{xp.exports=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/});var Sp=L((h2,Ep)=>{"use strict";var Ap={};function Ox(t){var e,n,r=Ap[t];if(r)return r;for(r=Ap[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),/^[0-9a-z]$/i.test(n)?r.push(n):r.push("%"+("0"+e.toString(16).toUpperCase()).slice(-2));for(e=0;e<t.length;e++)r[t.charCodeAt(e)]=t[e];return r}function _i(t,e,n){var r,i,o,a,l,s="";for(typeof e!="string"&&(n=e,e=_i.defaultChars),typeof n>"u"&&(n=!0),l=Ox(e),r=0,i=t.length;r<i;r++){if(o=t.charCodeAt(r),n&&o===37&&r+2<i&&/^[0-9a-f]{2}$/i.test(t.slice(r+1,r+3))){s+=t.slice(r,r+3),r+=2;continue}if(o<128){s+=l[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&r+1<i&&(a=t.charCodeAt(r+1),a>=56320&&a<=57343)){s+=encodeURIComponent(t[r]+t[r+1]),r++;continue}s+="%EF%BF%BD";continue}s+=encodeURIComponent(t[r])}return s}_i.defaultChars=";/?:@&=+$,-_.!~*'()#";_i.componentChars="-_.!~*'()";Ep.exports=_i});var kp=L((g2,Ip)=>{"use strict";var wp={};function Rx(t){var e,n,r=wp[t];if(r)return r;for(r=wp[t]=[],e=0;e<128;e++)n=String.fromCharCode(e),r.push(n);for(e=0;e<t.length;e++)n=t.charCodeAt(e),r[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2);return r}function Pi(t,e){var n;return typeof e!="string"&&(e=Pi.defaultChars),n=Rx(e),t.replace(/(%[a-f0-9]{2})+/gi,function(r){var i,o,a,l,s,c,u,d="";for(i=0,o=r.length;i<o;i+=3){if(a=parseInt(r.slice(i+1,i+3),16),a<128){d+=n[a];continue}if((a&224)===192&&i+3<o&&(l=parseInt(r.slice(i+4,i+6),16),(l&192)===128)){u=a<<6&1984|l&63,u<128?d+="\uFFFD\uFFFD":d+=String.fromCharCode(u),i+=3;continue}if((a&240)===224&&i+6<o&&(l=parseInt(r.slice(i+4,i+6),16),s=parseInt(r.slice(i+7,i+9),16),(l&192)===128&&(s&192)===128)){u=a<<12&61440|l<<6&4032|s&63,u<2048||u>=55296&&u<=57343?d+="\uFFFD\uFFFD\uFFFD":d+=String.fromCharCode(u),i+=6;continue}if((a&248)===240&&i+9<o&&(l=parseInt(r.slice(i+4,i+6),16),s=parseInt(r.slice(i+7,i+9),16),c=parseInt(r.slice(i+10,i+12),16),(l&192)===128&&(s&192)===128&&(c&192)===128)){u=a<<18&1835008|l<<12&258048|s<<6&4032|c&63,u<65536||u>1114111?d+="\uFFFD\uFFFD\uFFFD\uFFFD":(u-=65536,d+=String.fromCharCode(55296+(u>>10),56320+(u&1023))),i+=9;continue}d+="\uFFFD"}return d})}Pi.defaultChars=";/?:@&=+$,#";Pi.componentChars="";Ip.exports=Pi});var _p=L((m2,Tp)=>{"use strict";Tp.exports=function(e){var n="";return n+=e.protocol||"",n+=e.slashes?"//":"",n+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?n+="["+e.hostname+"]":n+=e.hostname||"",n+=e.port?":"+e.port:"",n+=e.pathname||"",n+=e.search||"",n+=e.hash||"",n}});var Op=L((y2,zp)=>{"use strict";function Fi(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}var Lx=/^([a-z0-9.+-]+:)/i,Vx=/:[0-9]*$/,Nx=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Hx=["<",">",'"',"`"," ","\r",`
`,"	"],qx=["{","}","|","\\","^","`"].concat(Hx),Gx=["'"].concat(qx),Pp=["%","/","?",";","#"].concat(Gx),Fp=["/","?","#"],$x=255,Dp=/^[+a-z0-9A-Z_-]{0,63}$/,Wx=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Bp={javascript:!0,"javascript:":!0},Mp={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Yx(t,e){if(t&&t instanceof Fi)return t;var n=new Fi;return n.parse(t,e),n}Fi.prototype.parse=function(t,e){var n,r,i,o,a,l=t;if(l=l.trim(),!e&&t.split("#").length===1){var s=Nx.exec(l);if(s)return this.pathname=s[1],s[2]&&(this.search=s[2]),this}var c=Lx.exec(l);if(c&&(c=c[0],i=c.toLowerCase(),this.protocol=c,l=l.substr(c.length)),(e||c||l.match(/^\/\/[^@\/]+@[^@\/]+/))&&(a=l.substr(0,2)==="//",a&&!(c&&Bp[c])&&(l=l.substr(2),this.slashes=!0)),!Bp[c]&&(a||c&&!Mp[c])){var u=-1;for(n=0;n<Fp.length;n++)o=l.indexOf(Fp[n]),o!==-1&&(u===-1||o<u)&&(u=o);var d,f;for(u===-1?f=l.lastIndexOf("@"):f=l.lastIndexOf("@",u),f!==-1&&(d=l.slice(0,f),l=l.slice(f+1),this.auth=d),u=-1,n=0;n<Pp.length;n++)o=l.indexOf(Pp[n]),o!==-1&&(u===-1||o<u)&&(u=o);u===-1&&(u=l.length),l[u-1]===":"&&u--;var p=l.slice(0,u);l=l.slice(u),this.parseHost(p),this.hostname=this.hostname||"";var y=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!y){var h=this.hostname.split(/\./);for(n=0,r=h.length;n<r;n++){var m=h[n];if(!!m&&!m.match(Dp)){for(var v="",b=0,C=m.length;b<C;b++)m.charCodeAt(b)>127?v+="x":v+=m[b];if(!v.match(Dp)){var T=h.slice(0,n),k=h.slice(n+1),A=m.match(Wx);A&&(T.push(A[1]),k.unshift(A[2])),k.length&&(l=k.join(".")+l),this.hostname=T.join(".");break}}}}this.hostname.length>$x&&(this.hostname=""),y&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}var _=l.indexOf("#");_!==-1&&(this.hash=l.substr(_),l=l.slice(0,_));var z=l.indexOf("?");return z!==-1&&(this.search=l.substr(z),l=l.slice(0,z)),l&&(this.pathname=l),Mp[i]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Fi.prototype.parseHost=function(t){var e=Vx.exec(t);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)};zp.exports=Yx});var Ys=L((b2,Dr)=>{"use strict";Dr.exports.encode=Sp();Dr.exports.decode=kp();Dr.exports.format=_p();Dr.exports.parse=Op()});var Us=L((v2,Rp)=>{Rp.exports=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/});var js=L((C2,Lp)=>{Lp.exports=/[\0-\x1F\x7F-\x9F]/});var Np=L((x2,Vp)=>{Vp.exports=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/});var Qs=L((A2,Hp)=>{Hp.exports=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/});var qp=L(Jn=>{"use strict";Jn.Any=Us();Jn.Cc=js();Jn.Cf=Np();Jn.P=Ti();Jn.Z=Qs()});var he=L(_e=>{"use strict";function Ux(t){return Object.prototype.toString.call(t)}function jx(t){return Ux(t)==="[object String]"}var Qx=Object.prototype.hasOwnProperty;function $p(t,e){return Qx.call(t,e)}function Jx(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){if(!!n){if(typeof n!="object")throw new TypeError(n+"must be object");Object.keys(n).forEach(function(r){t[r]=n[r]})}}),t}function Xx(t,e,n){return[].concat(t.slice(0,e),n,t.slice(e+1))}function Wp(t){return!(t>=55296&&t<=57343||t>=64976&&t<=65007||(t&65535)===65535||(t&65535)===65534||t>=0&&t<=8||t===11||t>=14&&t<=31||t>=127&&t<=159||t>1114111)}function Yp(t){if(t>65535){t-=65536;var e=55296+(t>>10),n=56320+(t&1023);return String.fromCharCode(e,n)}return String.fromCharCode(t)}var Up=/\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g,Kx=/&([a-z#][a-z0-9]{1,31});/gi,Zx=new RegExp(Up.source+"|"+Kx.source,"gi"),eA=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i,Gp=Ws();function tA(t,e){var n=0;return $p(Gp,e)?Gp[e]:e.charCodeAt(0)===35&&eA.test(e)&&(n=e[1].toLowerCase()==="x"?parseInt(e.slice(2),16):parseInt(e.slice(1),10),Wp(n))?Yp(n):t}function nA(t){return t.indexOf("\\")<0?t:t.replace(Up,"$1")}function rA(t){return t.indexOf("\\")<0&&t.indexOf("&")<0?t:t.replace(Zx,function(e,n,r){return n||tA(e,r)})}var iA=/[&<>"]/,oA=/[&<>"]/g,aA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function sA(t){return aA[t]}function lA(t){return iA.test(t)?t.replace(oA,sA):t}var cA=/[.?*+^$[\]\\(){}|-]/g;function uA(t){return t.replace(cA,"\\$&")}function dA(t){switch(t){case 9:case 32:return!0}return!1}function fA(t){if(t>=8192&&t<=8202)return!0;switch(t){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}var pA=Ti();function hA(t){return pA.test(t)}function gA(t){switch(t){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function mA(t){return t=t.trim().replace(/\s+/g," "),"\u1E9E".toLowerCase()==="\u1E7E"&&(t=t.replace(/ẞ/g,"\xDF")),t.toLowerCase().toUpperCase()}_e.lib={};_e.lib.mdurl=Ys();_e.lib.ucmicro=qp();_e.assign=Jx;_e.isString=jx;_e.has=$p;_e.unescapeMd=nA;_e.unescapeAll=rA;_e.isValidEntityCode=Wp;_e.fromCodePoint=Yp;_e.escapeHtml=lA;_e.arrayReplaceAt=Xx;_e.isSpace=dA;_e.isWhiteSpace=fA;_e.isMdAsciiPunct=gA;_e.isPunctChar=hA;_e.escapeRE=uA;_e.normalizeReference=mA});var Qp=L((w2,jp)=>{"use strict";jp.exports=function(e,n,r){var i,o,a,l,s=-1,c=e.posMax,u=e.pos;for(e.pos=n+1,i=1;e.pos<c;){if(a=e.src.charCodeAt(e.pos),a===93&&(i--,i===0)){o=!0;break}if(l=e.pos,e.md.inline.skipToken(e),a===91){if(l===e.pos-1)i++;else if(r)return e.pos=u,-1}}return o&&(s=e.pos),e.pos=u,s}});var Kp=L((I2,Xp)=>{"use strict";var Jp=he().unescapeAll;Xp.exports=function(e,n,r){var i,o,a=0,l=n,s={ok:!1,pos:0,lines:0,str:""};if(e.charCodeAt(n)===60){for(n++;n<r;){if(i=e.charCodeAt(n),i===10||i===60)return s;if(i===62)return s.pos=n+1,s.str=Jp(e.slice(l+1,n)),s.ok=!0,s;if(i===92&&n+1<r){n+=2;continue}n++}return s}for(o=0;n<r&&(i=e.charCodeAt(n),!(i===32||i<32||i===127));){if(i===92&&n+1<r){if(e.charCodeAt(n+1)===32)break;n+=2;continue}if(i===40&&(o++,o>32))return s;if(i===41){if(o===0)break;o--}n++}return l===n||o!==0||(s.str=Jp(e.slice(l,n)),s.lines=a,s.pos=n,s.ok=!0),s}});var eh=L((k2,Zp)=>{"use strict";var yA=he().unescapeAll;Zp.exports=function(e,n,r){var i,o,a=0,l=n,s={ok:!1,pos:0,lines:0,str:""};if(n>=r||(o=e.charCodeAt(n),o!==34&&o!==39&&o!==40))return s;for(n++,o===40&&(o=41);n<r;){if(i=e.charCodeAt(n),i===o)return s.pos=n+1,s.lines=a,s.str=yA(e.slice(l+1,n)),s.ok=!0,s;if(i===40&&o===41)return s;i===10?a++:i===92&&n+1<r&&(n++,e.charCodeAt(n)===10&&a++),n++}return s}});var th=L(Di=>{"use strict";Di.parseLinkLabel=Qp();Di.parseLinkDestination=Kp();Di.parseLinkTitle=eh()});var rh=L((_2,nh)=>{"use strict";var bA=he().assign,vA=he().unescapeAll,In=he().escapeHtml,qt={};qt.code_inline=function(t,e,n,r,i){var o=t[e];return"<code"+i.renderAttrs(o)+">"+In(t[e].content)+"</code>"};qt.code_block=function(t,e,n,r,i){var o=t[e];return"<pre"+i.renderAttrs(o)+"><code>"+In(t[e].content)+`</code></pre>
`};qt.fence=function(t,e,n,r,i){var o=t[e],a=o.info?vA(o.info).trim():"",l="",s="",c,u,d,f,p;return a&&(d=a.split(/(\s+)/g),l=d[0],s=d.slice(2).join("")),n.highlight?c=n.highlight(o.content,l,s)||In(o.content):c=In(o.content),c.indexOf("<pre")===0?c+`
`:a?(u=o.attrIndex("class"),f=o.attrs?o.attrs.slice():[],u<0?f.push(["class",n.langPrefix+l]):(f[u]=f[u].slice(),f[u][1]+=" "+n.langPrefix+l),p={attrs:f},"<pre><code"+i.renderAttrs(p)+">"+c+`</code></pre>
`):"<pre><code"+i.renderAttrs(o)+">"+c+`</code></pre>
`};qt.image=function(t,e,n,r,i){var o=t[e];return o.attrs[o.attrIndex("alt")][1]=i.renderInlineAsText(o.children,n,r),i.renderToken(t,e,n)};qt.hardbreak=function(t,e,n){return n.xhtmlOut?`<br />
`:`<br>
`};qt.softbreak=function(t,e,n){return n.breaks?n.xhtmlOut?`<br />
`:`<br>
`:`
`};qt.text=function(t,e){return In(t[e].content)};qt.html_block=function(t,e){return t[e].content};qt.html_inline=function(t,e){return t[e].content};function Xn(){this.rules=bA({},qt)}Xn.prototype.renderAttrs=function(e){var n,r,i;if(!e.attrs)return"";for(i="",n=0,r=e.attrs.length;n<r;n++)i+=" "+In(e.attrs[n][0])+'="'+In(e.attrs[n][1])+'"';return i};Xn.prototype.renderToken=function(e,n,r){var i,o="",a=!1,l=e[n];return l.hidden?"":(l.block&&l.nesting!==-1&&n&&e[n-1].hidden&&(o+=`
`),o+=(l.nesting===-1?"</":"<")+l.tag,o+=this.renderAttrs(l),l.nesting===0&&r.xhtmlOut&&(o+=" /"),l.block&&(a=!0,l.nesting===1&&n+1<e.length&&(i=e[n+1],(i.type==="inline"||i.hidden||i.nesting===-1&&i.tag===l.tag)&&(a=!1))),o+=a?`>
`:">",o)};Xn.prototype.renderInline=function(t,e,n){for(var r,i="",o=this.rules,a=0,l=t.length;a<l;a++)r=t[a].type,typeof o[r]<"u"?i+=o[r](t,a,e,n,this):i+=this.renderToken(t,a,e);return i};Xn.prototype.renderInlineAsText=function(t,e,n){for(var r="",i=0,o=t.length;i<o;i++)t[i].type==="text"?r+=t[i].content:t[i].type==="image"?r+=this.renderInlineAsText(t[i].children,e,n):t[i].type==="softbreak"&&(r+=`
`);return r};Xn.prototype.render=function(t,e,n){var r,i,o,a="",l=this.rules;for(r=0,i=t.length;r<i;r++)o=t[r].type,o==="inline"?a+=this.renderInline(t[r].children,e,n):typeof l[o]<"u"?a+=l[t[r].type](t,r,e,n,this):a+=this.renderToken(t,r,e,n);return a};nh.exports=Xn});var Bi=L((P2,ih)=>{"use strict";function Ft(){this.__rules__=[],this.__cache__=null}Ft.prototype.__find__=function(t){for(var e=0;e<this.__rules__.length;e++)if(this.__rules__[e].name===t)return e;return-1};Ft.prototype.__compile__=function(){var t=this,e=[""];t.__rules__.forEach(function(n){!n.enabled||n.alt.forEach(function(r){e.indexOf(r)<0&&e.push(r)})}),t.__cache__={},e.forEach(function(n){t.__cache__[n]=[],t.__rules__.forEach(function(r){!r.enabled||n&&r.alt.indexOf(n)<0||t.__cache__[n].push(r.fn)})})};Ft.prototype.at=function(t,e,n){var r=this.__find__(t),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+t);this.__rules__[r].fn=e,this.__rules__[r].alt=i.alt||[],this.__cache__=null};Ft.prototype.before=function(t,e,n,r){var i=this.__find__(t),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i,0,{name:e,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Ft.prototype.after=function(t,e,n,r){var i=this.__find__(t),o=r||{};if(i===-1)throw new Error("Parser rule not found: "+t);this.__rules__.splice(i+1,0,{name:e,enabled:!0,fn:n,alt:o.alt||[]}),this.__cache__=null};Ft.prototype.push=function(t,e,n){var r=n||{};this.__rules__.push({name:t,enabled:!0,fn:e,alt:r.alt||[]}),this.__cache__=null};Ft.prototype.enable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var i=this.__find__(r);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!0,n.push(r)},this),this.__cache__=null,n};Ft.prototype.enableOnly=function(t,e){Array.isArray(t)||(t=[t]),this.__rules__.forEach(function(n){n.enabled=!1}),this.enable(t,e)};Ft.prototype.disable=function(t,e){Array.isArray(t)||(t=[t]);var n=[];return t.forEach(function(r){var i=this.__find__(r);if(i<0){if(e)return;throw new Error("Rules manager: invalid rule name "+r)}this.__rules__[i].enabled=!1,n.push(r)},this),this.__cache__=null,n};Ft.prototype.getRules=function(t){return this.__cache__===null&&this.__compile__(),this.__cache__[t]||[]};ih.exports=Ft});var ah=L((F2,oh)=>{"use strict";var CA=/\r\n?|\n/g,xA=/\0/g;oh.exports=function(e){var n;n=e.src.replace(CA,`
`),n=n.replace(xA,"\uFFFD"),e.src=n}});var lh=L((D2,sh)=>{"use strict";sh.exports=function(e){var n;e.inlineMode?(n=new e.Token("inline","",0),n.content=e.src,n.map=[0,1],n.children=[],e.tokens.push(n)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}});var uh=L((B2,ch)=>{"use strict";ch.exports=function(e){var n=e.tokens,r,i,o;for(i=0,o=n.length;i<o;i++)r=n[i],r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}});var fh=L((M2,dh)=>{"use strict";var AA=he().arrayReplaceAt;function EA(t){return/^<a[>\s]/i.test(t)}function SA(t){return/^<\/a\s*>/i.test(t)}dh.exports=function(e){var n,r,i,o,a,l,s,c,u,d,f,p,y,h,m,v,b=e.tokens,C;if(!!e.md.options.linkify){for(r=0,i=b.length;r<i;r++)if(!(b[r].type!=="inline"||!e.md.linkify.pretest(b[r].content)))for(o=b[r].children,y=0,n=o.length-1;n>=0;n--){if(l=o[n],l.type==="link_close"){for(n--;o[n].level!==l.level&&o[n].type!=="link_open";)n--;continue}if(l.type==="html_inline"&&(EA(l.content)&&y>0&&y--,SA(l.content)&&y++),!(y>0)&&l.type==="text"&&e.md.linkify.test(l.content)){for(u=l.content,C=e.md.linkify.match(u),s=[],p=l.level,f=0,C.length>0&&C[0].index===0&&n>0&&o[n-1].type==="text_special"&&(C=C.slice(1)),c=0;c<C.length;c++)h=C[c].url,m=e.md.normalizeLink(h),e.md.validateLink(m)&&(v=C[c].text,C[c].schema?C[c].schema==="mailto:"&&!/^mailto:/i.test(v)?v=e.md.normalizeLinkText("mailto:"+v).replace(/^mailto:/,""):v=e.md.normalizeLinkText(v):v=e.md.normalizeLinkText("http://"+v).replace(/^http:\/\//,""),d=C[c].index,d>f&&(a=new e.Token("text","",0),a.content=u.slice(f,d),a.level=p,s.push(a)),a=new e.Token("link_open","a",1),a.attrs=[["href",m]],a.level=p++,a.markup="linkify",a.info="auto",s.push(a),a=new e.Token("text","",0),a.content=v,a.level=p,s.push(a),a=new e.Token("link_close","a",-1),a.level=--p,a.markup="linkify",a.info="auto",s.push(a),f=C[c].lastIndex);f<u.length&&(a=new e.Token("text","",0),a.content=u.slice(f),a.level=p,s.push(a)),b[r].children=o=AA(o,n,s)}}}}});var gh=L((z2,hh)=>{"use strict";var ph=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,wA=/\((c|tm|r)\)/i,IA=/\((c|tm|r)\)/ig,kA={c:"\xA9",r:"\xAE",tm:"\u2122"};function TA(t,e){return kA[e.toLowerCase()]}function _A(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&(n.content=n.content.replace(IA,TA)),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}function PA(t){var e,n,r=0;for(e=t.length-1;e>=0;e--)n=t[e],n.type==="text"&&!r&&ph.test(n.content)&&(n.content=n.content.replace(/\+-/g,"\xB1").replace(/\.{2,}/g,"\u2026").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1\u2014").replace(/(^|\s)--(?=\s|$)/mg,"$1\u2013").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1\u2013")),n.type==="link_open"&&n.info==="auto"&&r--,n.type==="link_close"&&n.info==="auto"&&r++}hh.exports=function(e){var n;if(!!e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type==="inline"&&(wA.test(e.tokens[n].content)&&_A(e.tokens[n].children),ph.test(e.tokens[n].content)&&PA(e.tokens[n].children))}});var Ah=L((O2,xh)=>{"use strict";var mh=he().isWhiteSpace,yh=he().isPunctChar,bh=he().isMdAsciiPunct,FA=/['"]/,vh=/['"]/g,Ch="\u2019";function Mi(t,e,n){return t.slice(0,e)+n+t.slice(e+1)}function DA(t,e){var n,r,i,o,a,l,s,c,u,d,f,p,y,h,m,v,b,C,T,k,A;for(T=[],n=0;n<t.length;n++){for(r=t[n],s=t[n].level,b=T.length-1;b>=0&&!(T[b].level<=s);b--);if(T.length=b+1,r.type!=="text")continue;i=r.content,a=0,l=i.length;e:for(;a<l&&(vh.lastIndex=a,o=vh.exec(i),!!o);){if(m=v=!0,a=o.index+1,C=o[0]==="'",u=32,o.index-1>=0)u=i.charCodeAt(o.index-1);else for(b=n-1;b>=0&&!(t[b].type==="softbreak"||t[b].type==="hardbreak");b--)if(!!t[b].content){u=t[b].content.charCodeAt(t[b].content.length-1);break}if(d=32,a<l)d=i.charCodeAt(a);else for(b=n+1;b<t.length&&!(t[b].type==="softbreak"||t[b].type==="hardbreak");b++)if(!!t[b].content){d=t[b].content.charCodeAt(0);break}if(f=bh(u)||yh(String.fromCharCode(u)),p=bh(d)||yh(String.fromCharCode(d)),y=mh(u),h=mh(d),h?m=!1:p&&(y||f||(m=!1)),y?v=!1:f&&(h||p||(v=!1)),d===34&&o[0]==='"'&&u>=48&&u<=57&&(v=m=!1),m&&v&&(m=f,v=p),!m&&!v){C&&(r.content=Mi(r.content,o.index,Ch));continue}if(v){for(b=T.length-1;b>=0&&(c=T[b],!(T[b].level<s));b--)if(c.single===C&&T[b].level===s){c=T[b],C?(k=e.md.options.quotes[2],A=e.md.options.quotes[3]):(k=e.md.options.quotes[0],A=e.md.options.quotes[1]),r.content=Mi(r.content,o.index,A),t[c.token].content=Mi(t[c.token].content,c.pos,k),a+=A.length-1,c.token===n&&(a+=k.length-1),i=r.content,l=i.length,T.length=b;continue e}}m?T.push({token:n,pos:o.index,single:C,level:s}):v&&C&&(r.content=Mi(r.content,o.index,Ch))}}}xh.exports=function(e){var n;if(!!e.md.options.typographer)for(n=e.tokens.length-1;n>=0;n--)e.tokens[n].type!=="inline"||!FA.test(e.tokens[n].content)||DA(e.tokens[n].children,e)}});var Sh=L((R2,Eh)=>{"use strict";Eh.exports=function(e){var n,r,i,o,a,l,s=e.tokens;for(n=0,r=s.length;n<r;n++)if(s[n].type==="inline"){for(i=s[n].children,a=i.length,o=0;o<a;o++)i[o].type==="text_special"&&(i[o].type="text");for(o=l=0;o<a;o++)i[o].type==="text"&&o+1<a&&i[o+1].type==="text"?i[o+1].content=i[o].content+i[o+1].content:(o!==l&&(i[l]=i[o]),l++);o!==l&&(i.length=l)}}});var zi=L((L2,wh)=>{"use strict";function Kn(t,e,n){this.type=t,this.tag=e,this.attrs=null,this.map=null,this.nesting=n,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Kn.prototype.attrIndex=function(e){var n,r,i;if(!this.attrs)return-1;for(n=this.attrs,r=0,i=n.length;r<i;r++)if(n[r][0]===e)return r;return-1};Kn.prototype.attrPush=function(e){this.attrs?this.attrs.push(e):this.attrs=[e]};Kn.prototype.attrSet=function(e,n){var r=this.attrIndex(e),i=[e,n];r<0?this.attrPush(i):this.attrs[r]=i};Kn.prototype.attrGet=function(e){var n=this.attrIndex(e),r=null;return n>=0&&(r=this.attrs[n][1]),r};Kn.prototype.attrJoin=function(e,n){var r=this.attrIndex(e);r<0?this.attrPush([e,n]):this.attrs[r][1]=this.attrs[r][1]+" "+n};wh.exports=Kn});var Th=L((V2,kh)=>{"use strict";var BA=zi();function Ih(t,e,n){this.src=t,this.env=n,this.tokens=[],this.inlineMode=!1,this.md=e}Ih.prototype.Token=BA;kh.exports=Ih});var Ph=L((N2,_h)=>{"use strict";var MA=Bi(),Js=[["normalize",ah()],["block",lh()],["inline",uh()],["linkify",fh()],["replacements",gh()],["smartquotes",Ah()],["text_join",Sh()]];function Xs(){this.ruler=new MA;for(var t=0;t<Js.length;t++)this.ruler.push(Js[t][0],Js[t][1])}Xs.prototype.process=function(t){var e,n,r;for(r=this.ruler.getRules(""),e=0,n=r.length;e<n;e++)r[e](t)};Xs.prototype.State=Th();_h.exports=Xs});var Bh=L((H2,Dh)=>{"use strict";var Ks=he().isSpace;function Zs(t,e){var n=t.bMarks[e]+t.tShift[e],r=t.eMarks[e];return t.src.slice(n,r)}function Fh(t){var e=[],n=0,r=t.length,i,o=!1,a=0,l="";for(i=t.charCodeAt(n);n<r;)i===124&&(o?(l+=t.substring(a,n-1),a=n):(e.push(l+t.substring(a,n)),l="",a=n+1)),o=i===92,n++,i=t.charCodeAt(n);return e.push(l+t.substring(a)),e}Dh.exports=function(e,n,r,i){var o,a,l,s,c,u,d,f,p,y,h,m,v,b,C,T,k,A;if(n+2>r||(u=n+1,e.sCount[u]<e.blkIndent)||e.sCount[u]-e.blkIndent>=4||(l=e.bMarks[u]+e.tShift[u],l>=e.eMarks[u])||(k=e.src.charCodeAt(l++),k!==124&&k!==45&&k!==58)||l>=e.eMarks[u]||(A=e.src.charCodeAt(l++),A!==124&&A!==45&&A!==58&&!Ks(A))||k===45&&Ks(A))return!1;for(;l<e.eMarks[u];){if(o=e.src.charCodeAt(l),o!==124&&o!==45&&o!==58&&!Ks(o))return!1;l++}for(a=Zs(e,n+1),d=a.split("|"),y=[],s=0;s<d.length;s++){if(h=d[s].trim(),!h){if(s===0||s===d.length-1)continue;return!1}if(!/^:?-+:?$/.test(h))return!1;h.charCodeAt(h.length-1)===58?y.push(h.charCodeAt(0)===58?"center":"right"):h.charCodeAt(0)===58?y.push("left"):y.push("")}if(a=Zs(e,n).trim(),a.indexOf("|")===-1||e.sCount[n]-e.blkIndent>=4||(d=Fh(a),d.length&&d[0]===""&&d.shift(),d.length&&d[d.length-1]===""&&d.pop(),f=d.length,f===0||f!==y.length))return!1;if(i)return!0;for(b=e.parentType,e.parentType="table",T=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),p.map=m=[n,0],p=e.push("thead_open","thead",1),p.map=[n,n+1],p=e.push("tr_open","tr",1),p.map=[n,n+1],s=0;s<d.length;s++)p=e.push("th_open","th",1),y[s]&&(p.attrs=[["style","text-align:"+y[s]]]),p=e.push("inline","",0),p.content=d[s].trim(),p.children=[],p=e.push("th_close","th",-1);for(p=e.push("tr_close","tr",-1),p=e.push("thead_close","thead",-1),u=n+2;u<r&&!(e.sCount[u]<e.blkIndent);u++){for(C=!1,s=0,c=T.length;s<c;s++)if(T[s](e,u,r,!0)){C=!0;break}if(C||(a=Zs(e,u).trim(),!a)||e.sCount[u]-e.blkIndent>=4)break;for(d=Fh(a),d.length&&d[0]===""&&d.shift(),d.length&&d[d.length-1]===""&&d.pop(),u===n+2&&(p=e.push("tbody_open","tbody",1),p.map=v=[n+2,0]),p=e.push("tr_open","tr",1),p.map=[u,u+1],s=0;s<f;s++)p=e.push("td_open","td",1),y[s]&&(p.attrs=[["style","text-align:"+y[s]]]),p=e.push("inline","",0),p.content=d[s]?d[s].trim():"",p.children=[],p=e.push("td_close","td",-1);p=e.push("tr_close","tr",-1)}return v&&(p=e.push("tbody_close","tbody",-1),v[1]=u),p=e.push("table_close","table",-1),m[1]=u,e.parentType=b,e.line=u,!0}});var zh=L((q2,Mh)=>{"use strict";Mh.exports=function(e,n,r){var i,o,a;if(e.sCount[n]-e.blkIndent<4)return!1;for(o=i=n+1;i<r;){if(e.isEmpty(i)){i++;continue}if(e.sCount[i]-e.blkIndent>=4){i++,o=i;continue}break}return e.line=o,a=e.push("code_block","code",0),a.content=e.getLines(n,o,4+e.blkIndent,!1)+`
`,a.map=[n,e.line],!0}});var Rh=L((G2,Oh)=>{"use strict";Oh.exports=function(e,n,r,i){var o,a,l,s,c,u,d,f=!1,p=e.bMarks[n]+e.tShift[n],y=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||p+3>y||(o=e.src.charCodeAt(p),o!==126&&o!==96)||(c=p,p=e.skipChars(p,o),a=p-c,a<3)||(d=e.src.slice(c,p),l=e.src.slice(p,y),o===96&&l.indexOf(String.fromCharCode(o))>=0))return!1;if(i)return!0;for(s=n;s++,!(s>=r||(p=c=e.bMarks[s]+e.tShift[s],y=e.eMarks[s],p<y&&e.sCount[s]<e.blkIndent));)if(e.src.charCodeAt(p)===o&&!(e.sCount[s]-e.blkIndent>=4)&&(p=e.skipChars(p,o),!(p-c<a)&&(p=e.skipSpaces(p),!(p<y)))){f=!0;break}return a=e.sCount[n],e.line=s+(f?1:0),u=e.push("fence","code",0),u.info=l,u.content=e.getLines(n+1,s,a,!0),u.markup=d,u.map=[n,e.line],!0}});var Nh=L(($2,Vh)=>{"use strict";var Lh=he().isSpace;Vh.exports=function(e,n,r,i){var o,a,l,s,c,u,d,f,p,y,h,m,v,b,C,T,k,A,_,z,G=e.lineMax,F=e.bMarks[n]+e.tShift[n],w=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(F++)!==62)return!1;if(i)return!0;for(s=p=e.sCount[n]+1,e.src.charCodeAt(F)===32?(F++,s++,p++,o=!1,T=!0):e.src.charCodeAt(F)===9?(T=!0,(e.bsCount[n]+p)%4===3?(F++,s++,p++,o=!1):o=!0):T=!1,y=[e.bMarks[n]],e.bMarks[n]=F;F<w&&(a=e.src.charCodeAt(F),Lh(a));){a===9?p+=4-(p+e.bsCount[n]+(o?1:0))%4:p++;F++}for(h=[e.bsCount[n]],e.bsCount[n]=e.sCount[n]+1+(T?1:0),u=F>=w,b=[e.sCount[n]],e.sCount[n]=p-s,C=[e.tShift[n]],e.tShift[n]=F-e.bMarks[n],A=e.md.block.ruler.getRules("blockquote"),v=e.parentType,e.parentType="blockquote",f=n+1;f<r&&(z=e.sCount[f]<e.blkIndent,F=e.bMarks[f]+e.tShift[f],w=e.eMarks[f],!(F>=w));f++){if(e.src.charCodeAt(F++)===62&&!z){for(s=p=e.sCount[f]+1,e.src.charCodeAt(F)===32?(F++,s++,p++,o=!1,T=!0):e.src.charCodeAt(F)===9?(T=!0,(e.bsCount[f]+p)%4===3?(F++,s++,p++,o=!1):o=!0):T=!1,y.push(e.bMarks[f]),e.bMarks[f]=F;F<w&&(a=e.src.charCodeAt(F),Lh(a));){a===9?p+=4-(p+e.bsCount[f]+(o?1:0))%4:p++;F++}u=F>=w,h.push(e.bsCount[f]),e.bsCount[f]=e.sCount[f]+1+(T?1:0),b.push(e.sCount[f]),e.sCount[f]=p-s,C.push(e.tShift[f]),e.tShift[f]=F-e.bMarks[f];continue}if(u)break;for(k=!1,l=0,c=A.length;l<c;l++)if(A[l](e,f,r,!0)){k=!0;break}if(k){e.lineMax=f,e.blkIndent!==0&&(y.push(e.bMarks[f]),h.push(e.bsCount[f]),C.push(e.tShift[f]),b.push(e.sCount[f]),e.sCount[f]-=e.blkIndent);break}y.push(e.bMarks[f]),h.push(e.bsCount[f]),C.push(e.tShift[f]),b.push(e.sCount[f]),e.sCount[f]=-1}for(m=e.blkIndent,e.blkIndent=0,_=e.push("blockquote_open","blockquote",1),_.markup=">",_.map=d=[n,0],e.md.block.tokenize(e,n,f),_=e.push("blockquote_close","blockquote",-1),_.markup=">",e.lineMax=G,e.parentType=v,d[1]=e.line,l=0;l<C.length;l++)e.bMarks[l+n]=y[l],e.tShift[l+n]=C[l],e.sCount[l+n]=b[l],e.bsCount[l+n]=h[l];return e.blkIndent=m,!0}});var qh=L((W2,Hh)=>{"use strict";var zA=he().isSpace;Hh.exports=function(e,n,r,i){var o,a,l,s,c=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(o=e.src.charCodeAt(c++),o!==42&&o!==45&&o!==95))return!1;for(a=1;c<u;){if(l=e.src.charCodeAt(c++),l!==o&&!zA(l))return!1;l===o&&a++}return a<3?!1:(i||(e.line=n+1,s=e.push("hr","hr",0),s.map=[n,e.line],s.markup=Array(a+1).join(String.fromCharCode(o))),!0)}});var Uh=L((Y2,Yh)=>{"use strict";var Wh=he().isSpace;function Gh(t,e){var n,r,i,o;return r=t.bMarks[e]+t.tShift[e],i=t.eMarks[e],n=t.src.charCodeAt(r++),n!==42&&n!==45&&n!==43||r<i&&(o=t.src.charCodeAt(r),!Wh(o))?-1:r}function $h(t,e){var n,r=t.bMarks[e]+t.tShift[e],i=r,o=t.eMarks[e];if(i+1>=o||(n=t.src.charCodeAt(i++),n<48||n>57))return-1;for(;;){if(i>=o)return-1;if(n=t.src.charCodeAt(i++),n>=48&&n<=57){if(i-r>=10)return-1;continue}if(n===41||n===46)break;return-1}return i<o&&(n=t.src.charCodeAt(i),!Wh(n))?-1:i}function OA(t,e){var n,r,i=t.level+2;for(n=e+2,r=t.tokens.length-2;n<r;n++)t.tokens[n].level===i&&t.tokens[n].type==="paragraph_open"&&(t.tokens[n+2].hidden=!0,t.tokens[n].hidden=!0,n+=2)}Yh.exports=function(e,n,r,i){var o,a,l,s,c,u,d,f,p,y,h,m,v,b,C,T,k,A,_,z,G,F,w,E,P,H,j,I,q=!1,D=!0;if(e.sCount[n]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[n]-e.listIndent>=4&&e.sCount[n]<e.blkIndent)return!1;if(i&&e.parentType==="paragraph"&&e.sCount[n]>=e.blkIndent&&(q=!0),(w=$h(e,n))>=0){if(d=!0,P=e.bMarks[n]+e.tShift[n],v=Number(e.src.slice(P,w-1)),q&&v!==1)return!1}else if((w=Gh(e,n))>=0)d=!1;else return!1;if(q&&e.skipSpaces(w)>=e.eMarks[n])return!1;if(m=e.src.charCodeAt(w-1),i)return!0;for(h=e.tokens.length,d?(I=e.push("ordered_list_open","ol",1),v!==1&&(I.attrs=[["start",v]])):I=e.push("bullet_list_open","ul",1),I.map=y=[n,0],I.markup=String.fromCharCode(m),C=n,E=!1,j=e.md.block.ruler.getRules("list"),A=e.parentType,e.parentType="list";C<r;){for(F=w,b=e.eMarks[C],u=T=e.sCount[C]+w-(e.bMarks[n]+e.tShift[n]);F<b;){if(o=e.src.charCodeAt(F),o===9)T+=4-(T+e.bsCount[C])%4;else if(o===32)T++;else break;F++}if(a=F,a>=b?c=1:c=T-u,c>4&&(c=1),s=u+c,I=e.push("list_item_open","li",1),I.markup=String.fromCharCode(m),I.map=f=[n,0],d&&(I.info=e.src.slice(P,w-1)),G=e.tight,z=e.tShift[n],_=e.sCount[n],k=e.listIndent,e.listIndent=e.blkIndent,e.blkIndent=s,e.tight=!0,e.tShift[n]=a-e.bMarks[n],e.sCount[n]=T,a>=b&&e.isEmpty(n+1)?e.line=Math.min(e.line+2,r):e.md.block.tokenize(e,n,r,!0),(!e.tight||E)&&(D=!1),E=e.line-n>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=k,e.tShift[n]=z,e.sCount[n]=_,e.tight=G,I=e.push("list_item_close","li",-1),I.markup=String.fromCharCode(m),C=n=e.line,f[1]=C,a=e.bMarks[n],C>=r||e.sCount[C]<e.blkIndent||e.sCount[n]-e.blkIndent>=4)break;for(H=!1,l=0,p=j.length;l<p;l++)if(j[l](e,C,r,!0)){H=!0;break}if(H)break;if(d){if(w=$h(e,C),w<0)break;P=e.bMarks[C]+e.tShift[C]}else if(w=Gh(e,C),w<0)break;if(m!==e.src.charCodeAt(w-1))break}return d?I=e.push("ordered_list_close","ol",-1):I=e.push("bullet_list_close","ul",-1),I.markup=String.fromCharCode(m),y[1]=C,e.line=C,e.parentType=A,D&&OA(e,h),!0}});var Qh=L((U2,jh)=>{"use strict";var RA=he().normalizeReference,Oi=he().isSpace;jh.exports=function(e,n,r,i){var o,a,l,s,c,u,d,f,p,y,h,m,v,b,C,T,k=0,A=e.bMarks[n]+e.tShift[n],_=e.eMarks[n],z=n+1;if(e.sCount[n]-e.blkIndent>=4||e.src.charCodeAt(A)!==91)return!1;for(;++A<_;)if(e.src.charCodeAt(A)===93&&e.src.charCodeAt(A-1)!==92){if(A+1===_||e.src.charCodeAt(A+1)!==58)return!1;break}for(s=e.lineMax,C=e.md.block.ruler.getRules("reference"),y=e.parentType,e.parentType="reference";z<s&&!e.isEmpty(z);z++)if(!(e.sCount[z]-e.blkIndent>3)&&!(e.sCount[z]<0)){for(b=!1,u=0,d=C.length;u<d;u++)if(C[u](e,z,s,!0)){b=!0;break}if(b)break}for(v=e.getLines(n,z,e.blkIndent,!1).trim(),_=v.length,A=1;A<_;A++){if(o=v.charCodeAt(A),o===91)return!1;if(o===93){p=A;break}else o===10?k++:o===92&&(A++,A<_&&v.charCodeAt(A)===10&&k++)}if(p<0||v.charCodeAt(p+1)!==58)return!1;for(A=p+2;A<_;A++)if(o=v.charCodeAt(A),o===10)k++;else if(!Oi(o))break;if(h=e.md.helpers.parseLinkDestination(v,A,_),!h.ok||(c=e.md.normalizeLink(h.str),!e.md.validateLink(c)))return!1;for(A=h.pos,k+=h.lines,a=A,l=k,m=A;A<_;A++)if(o=v.charCodeAt(A),o===10)k++;else if(!Oi(o))break;for(h=e.md.helpers.parseLinkTitle(v,A,_),A<_&&m!==A&&h.ok?(T=h.str,A=h.pos,k+=h.lines):(T="",A=a,k=l);A<_&&(o=v.charCodeAt(A),!!Oi(o));)A++;if(A<_&&v.charCodeAt(A)!==10&&T)for(T="",A=a,k=l;A<_&&(o=v.charCodeAt(A),!!Oi(o));)A++;return A<_&&v.charCodeAt(A)!==10||(f=RA(v.slice(1,p)),!f)?!1:(i||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[f]>"u"&&(e.env.references[f]={title:T,href:c}),e.parentType=y,e.line=n+k+1),!0)}});var Xh=L((j2,Jh)=>{"use strict";Jh.exports=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","section","source","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"]});var tl=L((Q2,el)=>{"use strict";var LA="[a-zA-Z_:][a-zA-Z0-9:._-]*",VA="[^\"'=<>`\\x00-\\x20]+",NA="'[^']*'",HA='"[^"]*"',qA="(?:"+VA+"|"+NA+"|"+HA+")",GA="(?:\\s+"+LA+"(?:\\s*=\\s*"+qA+")?)",Kh="<[A-Za-z][A-Za-z0-9\\-]*"+GA+"*\\s*\\/?>",Zh="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",$A="<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->",WA="<[?][\\s\\S]*?[?]>",YA="<![A-Z]+\\s+[^>]*>",UA="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",jA=new RegExp("^(?:"+Kh+"|"+Zh+"|"+$A+"|"+WA+"|"+YA+"|"+UA+")"),QA=new RegExp("^(?:"+Kh+"|"+Zh+")");el.exports.HTML_TAG_RE=jA;el.exports.HTML_OPEN_CLOSE_TAG_RE=QA});var tg=L((J2,eg)=>{"use strict";var JA=Xh(),XA=tl().HTML_OPEN_CLOSE_TAG_RE,Zn=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+JA.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(XA.source+"\\s*$"),/^$/,!1]];eg.exports=function(e,n,r,i){var o,a,l,s,c=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(c)!==60)return!1;for(s=e.src.slice(c,u),o=0;o<Zn.length&&!Zn[o][0].test(s);o++);if(o===Zn.length)return!1;if(i)return Zn[o][2];if(a=n+1,!Zn[o][1].test(s)){for(;a<r&&!(e.sCount[a]<e.blkIndent);a++)if(c=e.bMarks[a]+e.tShift[a],u=e.eMarks[a],s=e.src.slice(c,u),Zn[o][1].test(s)){s.length!==0&&a++;break}}return e.line=a,l=e.push("html_block","",0),l.map=[n,a],l.content=e.getLines(n,a,e.blkIndent,!0),!0}});var ig=L((X2,rg)=>{"use strict";var ng=he().isSpace;rg.exports=function(e,n,r,i){var o,a,l,s,c=e.bMarks[n]+e.tShift[n],u=e.eMarks[n];if(e.sCount[n]-e.blkIndent>=4||(o=e.src.charCodeAt(c),o!==35||c>=u))return!1;for(a=1,o=e.src.charCodeAt(++c);o===35&&c<u&&a<=6;)a++,o=e.src.charCodeAt(++c);return a>6||c<u&&!ng(o)?!1:(i||(u=e.skipSpacesBack(u,c),l=e.skipCharsBack(u,35,c),l>c&&ng(e.src.charCodeAt(l-1))&&(u=l),e.line=n+1,s=e.push("heading_open","h"+String(a),1),s.markup="########".slice(0,a),s.map=[n,e.line],s=e.push("inline","",0),s.content=e.src.slice(c,u).trim(),s.map=[n,e.line],s.children=[],s=e.push("heading_close","h"+String(a),-1),s.markup="########".slice(0,a)),!0)}});var ag=L((K2,og)=>{"use strict";og.exports=function(e,n,r){var i,o,a,l,s,c,u,d,f,p=n+1,y,h=e.md.block.ruler.getRules("paragraph");if(e.sCount[n]-e.blkIndent>=4)return!1;for(y=e.parentType,e.parentType="paragraph";p<r&&!e.isEmpty(p);p++)if(!(e.sCount[p]-e.blkIndent>3)){if(e.sCount[p]>=e.blkIndent&&(c=e.bMarks[p]+e.tShift[p],u=e.eMarks[p],c<u&&(f=e.src.charCodeAt(c),(f===45||f===61)&&(c=e.skipChars(c,f),c=e.skipSpaces(c),c>=u)))){d=f===61?1:2;break}if(!(e.sCount[p]<0)){for(o=!1,a=0,l=h.length;a<l;a++)if(h[a](e,p,r,!0)){o=!0;break}if(o)break}}return d?(i=e.getLines(n,p,e.blkIndent,!1).trim(),e.line=p+1,s=e.push("heading_open","h"+String(d),1),s.markup=String.fromCharCode(f),s.map=[n,e.line],s=e.push("inline","",0),s.content=i,s.map=[n,e.line-1],s.children=[],s=e.push("heading_close","h"+String(d),-1),s.markup=String.fromCharCode(f),e.parentType=y,!0):!1}});var lg=L((Z2,sg)=>{"use strict";sg.exports=function(e,n){var r,i,o,a,l,s,c=n+1,u=e.md.block.ruler.getRules("paragraph"),d=e.lineMax;for(s=e.parentType,e.parentType="paragraph";c<d&&!e.isEmpty(c);c++)if(!(e.sCount[c]-e.blkIndent>3)&&!(e.sCount[c]<0)){for(i=!1,o=0,a=u.length;o<a;o++)if(u[o](e,c,d,!0)){i=!0;break}if(i)break}return r=e.getLines(n,c,e.blkIndent,!1).trim(),e.line=c,l=e.push("paragraph_open","p",1),l.map=[n,e.line],l=e.push("inline","",0),l.content=r,l.map=[n,e.line],l.children=[],l=e.push("paragraph_close","p",-1),e.parentType=s,!0}});var dg=L((eP,ug)=>{"use strict";var cg=zi(),Ri=he().isSpace;function Gt(t,e,n,r){var i,o,a,l,s,c,u,d;for(this.src=t,this.md=e,this.env=n,this.tokens=r,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0,this.result="",o=this.src,d=!1,a=l=c=u=0,s=o.length;l<s;l++){if(i=o.charCodeAt(l),!d)if(Ri(i)){c++,i===9?u+=4-u%4:u++;continue}else d=!0;(i===10||l===s-1)&&(i!==10&&l++,this.bMarks.push(a),this.eMarks.push(l),this.tShift.push(c),this.sCount.push(u),this.bsCount.push(0),d=!1,c=0,u=0,a=l+1)}this.bMarks.push(o.length),this.eMarks.push(o.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}Gt.prototype.push=function(t,e,n){var r=new cg(t,e,n);return r.block=!0,n<0&&this.level--,r.level=this.level,n>0&&this.level++,this.tokens.push(r),r};Gt.prototype.isEmpty=function(e){return this.bMarks[e]+this.tShift[e]>=this.eMarks[e]};Gt.prototype.skipEmptyLines=function(e){for(var n=this.lineMax;e<n&&!(this.bMarks[e]+this.tShift[e]<this.eMarks[e]);e++);return e};Gt.prototype.skipSpaces=function(e){for(var n,r=this.src.length;e<r&&(n=this.src.charCodeAt(e),!!Ri(n));e++);return e};Gt.prototype.skipSpacesBack=function(e,n){if(e<=n)return e;for(;e>n;)if(!Ri(this.src.charCodeAt(--e)))return e+1;return e};Gt.prototype.skipChars=function(e,n){for(var r=this.src.length;e<r&&this.src.charCodeAt(e)===n;e++);return e};Gt.prototype.skipCharsBack=function(e,n,r){if(e<=r)return e;for(;e>r;)if(n!==this.src.charCodeAt(--e))return e+1;return e};Gt.prototype.getLines=function(e,n,r,i){var o,a,l,s,c,u,d,f=e;if(e>=n)return"";for(u=new Array(n-e),o=0;f<n;f++,o++){for(a=0,d=s=this.bMarks[f],f+1<n||i?c=this.eMarks[f]+1:c=this.eMarks[f];s<c&&a<r;){if(l=this.src.charCodeAt(s),Ri(l))l===9?a+=4-(a+this.bsCount[f])%4:a++;else if(s-d<this.tShift[f])a++;else break;s++}a>r?u[o]=new Array(a-r+1).join(" ")+this.src.slice(s,c):u[o]=this.src.slice(s,c)}return u.join("")};Gt.prototype.Token=cg;ug.exports=Gt});var pg=L((tP,fg)=>{"use strict";var KA=Bi(),Li=[["table",Bh(),["paragraph","reference"]],["code",zh()],["fence",Rh(),["paragraph","reference","blockquote","list"]],["blockquote",Nh(),["paragraph","reference","blockquote","list"]],["hr",qh(),["paragraph","reference","blockquote","list"]],["list",Uh(),["paragraph","reference","blockquote"]],["reference",Qh()],["html_block",tg(),["paragraph","reference","blockquote"]],["heading",ig(),["paragraph","reference","blockquote"]],["lheading",ag()],["paragraph",lg()]];function Vi(){this.ruler=new KA;for(var t=0;t<Li.length;t++)this.ruler.push(Li[t][0],Li[t][1],{alt:(Li[t][2]||[]).slice()})}Vi.prototype.tokenize=function(t,e,n){for(var r,i,o=this.ruler.getRules(""),a=o.length,l=e,s=!1,c=t.md.options.maxNesting;l<n&&(t.line=l=t.skipEmptyLines(l),!(l>=n||t.sCount[l]<t.blkIndent));){if(t.level>=c){t.line=n;break}for(i=0;i<a&&(r=o[i](t,l,n,!1),!r);i++);t.tight=!s,t.isEmpty(t.line-1)&&(s=!0),l=t.line,l<n&&t.isEmpty(l)&&(s=!0,l++,t.line=l)}};Vi.prototype.parse=function(t,e,n,r){var i;!t||(i=new this.State(t,e,n,r),this.tokenize(i,i.line,i.lineMax))};Vi.prototype.State=dg();fg.exports=Vi});var gg=L((nP,hg)=>{"use strict";function ZA(t){switch(t){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}hg.exports=function(e,n){for(var r=e.pos;r<e.posMax&&!ZA(e.src.charCodeAt(r));)r++;return r===e.pos?!1:(n||(e.pending+=e.src.slice(e.pos,r)),e.pos=r,!0)}});var yg=L((rP,mg)=>{"use strict";var eE=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;mg.exports=function(e,n){var r,i,o,a,l,s,c,u;return!e.md.options.linkify||e.linkLevel>0||(r=e.pos,i=e.posMax,r+3>i)||e.src.charCodeAt(r)!==58||e.src.charCodeAt(r+1)!==47||e.src.charCodeAt(r+2)!==47||(o=e.pending.match(eE),!o)||(a=o[1],l=e.md.linkify.matchAtStart(e.src.slice(r-a.length)),!l)||(s=l.url,s=s.replace(/\*+$/,""),c=e.md.normalizeLink(s),!e.md.validateLink(c))?!1:(n||(e.pending=e.pending.slice(0,-a.length),u=e.push("link_open","a",1),u.attrs=[["href",c]],u.markup="linkify",u.info="auto",u=e.push("text","",0),u.content=e.md.normalizeLinkText(s),u=e.push("link_close","a",-1),u.markup="linkify",u.info="auto"),e.pos+=s.length-a.length,!0)}});var vg=L((iP,bg)=>{"use strict";var tE=he().isSpace;bg.exports=function(e,n){var r,i,o,a=e.pos;if(e.src.charCodeAt(a)!==10)return!1;if(r=e.pending.length-1,i=e.posMax,!n)if(r>=0&&e.pending.charCodeAt(r)===32)if(r>=1&&e.pending.charCodeAt(r-1)===32){for(o=r-1;o>=1&&e.pending.charCodeAt(o-1)===32;)o--;e.pending=e.pending.slice(0,o),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(a++;a<i&&tE(e.src.charCodeAt(a));)a++;return e.pos=a,!0}});var xg=L((oP,Cg)=>{"use strict";var nE=he().isSpace,rl=[];for(nl=0;nl<256;nl++)rl.push(0);var nl;"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t){rl[t.charCodeAt(0)]=1});Cg.exports=function(e,n){var r,i,o,a,l,s=e.pos,c=e.posMax;if(e.src.charCodeAt(s)!==92||(s++,s>=c))return!1;if(r=e.src.charCodeAt(s),r===10){for(n||e.push("hardbreak","br",0),s++;s<c&&(r=e.src.charCodeAt(s),!!nE(r));)s++;return e.pos=s,!0}return a=e.src[s],r>=55296&&r<=56319&&s+1<c&&(i=e.src.charCodeAt(s+1),i>=56320&&i<=57343&&(a+=e.src[s+1],s++)),o="\\"+a,n||(l=e.push("text_special","",0),r<256&&rl[r]!==0?l.content=a:l.content=o,l.markup=o,l.info="escape"),e.pos=s+1,!0}});var Eg=L((aP,Ag)=>{"use strict";Ag.exports=function(e,n){var r,i,o,a,l,s,c,u,d=e.pos,f=e.src.charCodeAt(d);if(f!==96)return!1;for(r=d,d++,i=e.posMax;d<i&&e.src.charCodeAt(d)===96;)d++;if(o=e.src.slice(r,d),c=o.length,e.backticksScanned&&(e.backticks[c]||0)<=r)return n||(e.pending+=o),e.pos+=c,!0;for(l=s=d;(l=e.src.indexOf("`",s))!==-1;){for(s=l+1;s<i&&e.src.charCodeAt(s)===96;)s++;if(u=s-l,u===c)return n||(a=e.push("code_inline","code",0),a.markup=o,a.content=e.src.slice(d,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")),e.pos=s,!0;e.backticks[u]=l}return e.backticksScanned=!0,n||(e.pending+=o),e.pos+=c,!0}});var ol=L((sP,il)=>{"use strict";il.exports.tokenize=function(e,n){var r,i,o,a,l,s=e.pos,c=e.src.charCodeAt(s);if(n||c!==126||(i=e.scanDelims(e.pos,!0),a=i.length,l=String.fromCharCode(c),a<2))return!1;for(a%2&&(o=e.push("text","",0),o.content=l,a--),r=0;r<a;r+=2)o=e.push("text","",0),o.content=l+l,e.delimiters.push({marker:c,length:0,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0};function Sg(t,e){var n,r,i,o,a,l=[],s=e.length;for(n=0;n<s;n++)i=e[n],i.marker===126&&i.end!==-1&&(o=e[i.end],a=t.tokens[i.token],a.type="s_open",a.tag="s",a.nesting=1,a.markup="~~",a.content="",a=t.tokens[o.token],a.type="s_close",a.tag="s",a.nesting=-1,a.markup="~~",a.content="",t.tokens[o.token-1].type==="text"&&t.tokens[o.token-1].content==="~"&&l.push(o.token-1));for(;l.length;){for(n=l.pop(),r=n+1;r<t.tokens.length&&t.tokens[r].type==="s_close";)r++;r--,n!==r&&(a=t.tokens[r],t.tokens[r]=t.tokens[n],t.tokens[n]=a)}}il.exports.postProcess=function(e){var n,r=e.tokens_meta,i=e.tokens_meta.length;for(Sg(e,e.delimiters),n=0;n<i;n++)r[n]&&r[n].delimiters&&Sg(e,r[n].delimiters)}});var sl=L((lP,al)=>{"use strict";al.exports.tokenize=function(e,n){var r,i,o,a=e.pos,l=e.src.charCodeAt(a);if(n||l!==95&&l!==42)return!1;for(i=e.scanDelims(e.pos,l===42),r=0;r<i.length;r++)o=e.push("text","",0),o.content=String.fromCharCode(l),e.delimiters.push({marker:l,length:i.length,token:e.tokens.length-1,end:-1,open:i.can_open,close:i.can_close});return e.pos+=i.length,!0};function wg(t,e){var n,r,i,o,a,l,s=e.length;for(n=s-1;n>=0;n--)r=e[n],!(r.marker!==95&&r.marker!==42)&&r.end!==-1&&(i=e[r.end],l=n>0&&e[n-1].end===r.end+1&&e[n-1].marker===r.marker&&e[n-1].token===r.token-1&&e[r.end+1].token===i.token+1,a=String.fromCharCode(r.marker),o=t.tokens[r.token],o.type=l?"strong_open":"em_open",o.tag=l?"strong":"em",o.nesting=1,o.markup=l?a+a:a,o.content="",o=t.tokens[i.token],o.type=l?"strong_close":"em_close",o.tag=l?"strong":"em",o.nesting=-1,o.markup=l?a+a:a,o.content="",l&&(t.tokens[e[n-1].token].content="",t.tokens[e[r.end+1].token].content="",n--))}al.exports.postProcess=function(e){var n,r=e.tokens_meta,i=e.tokens_meta.length;for(wg(e,e.delimiters),n=0;n<i;n++)r[n]&&r[n].delimiters&&wg(e,r[n].delimiters)}});var kg=L((cP,Ig)=>{"use strict";var rE=he().normalizeReference,ll=he().isSpace;Ig.exports=function(e,n){var r,i,o,a,l,s,c,u,d,f="",p="",y=e.pos,h=e.posMax,m=e.pos,v=!0;if(e.src.charCodeAt(e.pos)!==91||(l=e.pos+1,a=e.md.helpers.parseLinkLabel(e,e.pos,!0),a<0))return!1;if(s=a+1,s<h&&e.src.charCodeAt(s)===40){for(v=!1,s++;s<h&&(i=e.src.charCodeAt(s),!(!ll(i)&&i!==10));s++);if(s>=h)return!1;if(m=s,c=e.md.helpers.parseLinkDestination(e.src,s,e.posMax),c.ok){for(f=e.md.normalizeLink(c.str),e.md.validateLink(f)?s=c.pos:f="",m=s;s<h&&(i=e.src.charCodeAt(s),!(!ll(i)&&i!==10));s++);if(c=e.md.helpers.parseLinkTitle(e.src,s,e.posMax),s<h&&m!==s&&c.ok)for(p=c.str,s=c.pos;s<h&&(i=e.src.charCodeAt(s),!(!ll(i)&&i!==10));s++);}(s>=h||e.src.charCodeAt(s)!==41)&&(v=!0),s++}if(v){if(typeof e.env.references>"u")return!1;if(s<h&&e.src.charCodeAt(s)===91?(m=s+1,s=e.md.helpers.parseLinkLabel(e,s),s>=0?o=e.src.slice(m,s++):s=a+1):s=a+1,o||(o=e.src.slice(l,a)),u=e.env.references[rE(o)],!u)return e.pos=y,!1;f=u.href,p=u.title}return n||(e.pos=l,e.posMax=a,d=e.push("link_open","a",1),d.attrs=r=[["href",f]],p&&r.push(["title",p]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,d=e.push("link_close","a",-1)),e.pos=s,e.posMax=h,!0}});var _g=L((uP,Tg)=>{"use strict";var iE=he().normalizeReference,cl=he().isSpace;Tg.exports=function(e,n){var r,i,o,a,l,s,c,u,d,f,p,y,h,m="",v=e.pos,b=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91||(s=e.pos+2,l=e.md.helpers.parseLinkLabel(e,e.pos+1,!1),l<0))return!1;if(c=l+1,c<b&&e.src.charCodeAt(c)===40){for(c++;c<b&&(i=e.src.charCodeAt(c),!(!cl(i)&&i!==10));c++);if(c>=b)return!1;for(h=c,d=e.md.helpers.parseLinkDestination(e.src,c,e.posMax),d.ok&&(m=e.md.normalizeLink(d.str),e.md.validateLink(m)?c=d.pos:m=""),h=c;c<b&&(i=e.src.charCodeAt(c),!(!cl(i)&&i!==10));c++);if(d=e.md.helpers.parseLinkTitle(e.src,c,e.posMax),c<b&&h!==c&&d.ok)for(f=d.str,c=d.pos;c<b&&(i=e.src.charCodeAt(c),!(!cl(i)&&i!==10));c++);else f="";if(c>=b||e.src.charCodeAt(c)!==41)return e.pos=v,!1;c++}else{if(typeof e.env.references>"u")return!1;if(c<b&&e.src.charCodeAt(c)===91?(h=c+1,c=e.md.helpers.parseLinkLabel(e,c),c>=0?a=e.src.slice(h,c++):c=l+1):c=l+1,a||(a=e.src.slice(s,l)),u=e.env.references[iE(a)],!u)return e.pos=v,!1;m=u.href,f=u.title}return n||(o=e.src.slice(s,l),e.md.inline.parse(o,e.md,e.env,y=[]),p=e.push("image","img",0),p.attrs=r=[["src",m],["alt",""]],p.children=y,p.content=o,f&&r.push(["title",f])),e.pos=c,e.posMax=b,!0}});var Fg=L((dP,Pg)=>{"use strict";var oE=/^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,aE=/^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/;Pg.exports=function(e,n){var r,i,o,a,l,s,c=e.pos;if(e.src.charCodeAt(c)!==60)return!1;for(l=e.pos,s=e.posMax;;){if(++c>=s||(a=e.src.charCodeAt(c),a===60))return!1;if(a===62)break}return r=e.src.slice(l+1,c),aE.test(r)?(i=e.md.normalizeLink(r),e.md.validateLink(i)?(n||(o=e.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(r),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=r.length+2,!0):!1):oE.test(r)?(i=e.md.normalizeLink("mailto:"+r),e.md.validateLink(i)?(n||(o=e.push("link_open","a",1),o.attrs=[["href",i]],o.markup="autolink",o.info="auto",o=e.push("text","",0),o.content=e.md.normalizeLinkText(r),o=e.push("link_close","a",-1),o.markup="autolink",o.info="auto"),e.pos+=r.length+2,!0):!1):!1}});var Bg=L((fP,Dg)=>{"use strict";var sE=tl().HTML_TAG_RE;function lE(t){return/^<a[>\s]/i.test(t)}function cE(t){return/^<\/a\s*>/i.test(t)}function uE(t){var e=t|32;return e>=97&&e<=122}Dg.exports=function(e,n){var r,i,o,a,l=e.pos;return!e.md.options.html||(o=e.posMax,e.src.charCodeAt(l)!==60||l+2>=o)||(r=e.src.charCodeAt(l+1),r!==33&&r!==63&&r!==47&&!uE(r))||(i=e.src.slice(l).match(sE),!i)?!1:(n||(a=e.push("html_inline","",0),a.content=e.src.slice(l,l+i[0].length),lE(a.content)&&e.linkLevel++,cE(a.content)&&e.linkLevel--),e.pos+=i[0].length,!0)}});var Rg=L((pP,Og)=>{"use strict";var Mg=Ws(),dE=he().has,fE=he().isValidEntityCode,zg=he().fromCodePoint,pE=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,hE=/^&([a-z][a-z0-9]{1,31});/i;Og.exports=function(e,n){var r,i,o,a,l=e.pos,s=e.posMax;if(e.src.charCodeAt(l)!==38||l+1>=s)return!1;if(r=e.src.charCodeAt(l+1),r===35){if(o=e.src.slice(l).match(pE),o)return n||(i=o[1][0].toLowerCase()==="x"?parseInt(o[1].slice(1),16):parseInt(o[1],10),a=e.push("text_special","",0),a.content=fE(i)?zg(i):zg(65533),a.markup=o[0],a.info="entity"),e.pos+=o[0].length,!0}else if(o=e.src.slice(l).match(hE),o&&dE(Mg,o[1]))return n||(a=e.push("text_special","",0),a.content=Mg[o[1]],a.markup=o[0],a.info="entity"),e.pos+=o[0].length,!0;return!1}});var Ng=L((hP,Vg)=>{"use strict";function Lg(t,e){var n,r,i,o,a,l,s,c,u={},d=e.length;if(!!d){var f=0,p=-2,y=[];for(n=0;n<d;n++)if(i=e[n],y.push(0),(e[f].marker!==i.marker||p!==i.token-1)&&(f=n),p=i.token,i.length=i.length||0,!!i.close){for(u.hasOwnProperty(i.marker)||(u[i.marker]=[-1,-1,-1,-1,-1,-1]),a=u[i.marker][(i.open?3:0)+i.length%3],r=f-y[f]-1,l=r;r>a;r-=y[r]+1)if(o=e[r],o.marker===i.marker&&o.open&&o.end<0&&(s=!1,(o.close||i.open)&&(o.length+i.length)%3===0&&(o.length%3!==0||i.length%3!==0)&&(s=!0),!s)){c=r>0&&!e[r-1].open?y[r-1]+1:0,y[n]=n-r+c,y[r]=c,i.open=!1,o.end=n,o.close=!1,l=-1,p=-2;break}l!==-1&&(u[i.marker][(i.open?3:0)+(i.length||0)%3]=l)}}}Vg.exports=function(e){var n,r=e.tokens_meta,i=e.tokens_meta.length;for(Lg(e,e.delimiters),n=0;n<i;n++)r[n]&&r[n].delimiters&&Lg(e,r[n].delimiters)}});var qg=L((gP,Hg)=>{"use strict";Hg.exports=function(e){var n,r,i=0,o=e.tokens,a=e.tokens.length;for(n=r=0;n<a;n++)o[n].nesting<0&&i--,o[n].level=i,o[n].nesting>0&&i++,o[n].type==="text"&&n+1<a&&o[n+1].type==="text"?o[n+1].content=o[n].content+o[n+1].content:(n!==r&&(o[r]=o[n]),r++);n!==r&&(o.length=r)}});var Ug=L((mP,Yg)=>{"use strict";var ul=zi(),Gg=he().isWhiteSpace,$g=he().isPunctChar,Wg=he().isMdAsciiPunct;function Br(t,e,n,r){this.src=t,this.env=n,this.md=e,this.tokens=r,this.tokens_meta=Array(r.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}Br.prototype.pushPending=function(){var t=new ul("text","",0);return t.content=this.pending,t.level=this.pendingLevel,this.tokens.push(t),this.pending="",t};Br.prototype.push=function(t,e,n){this.pending&&this.pushPending();var r=new ul(t,e,n),i=null;return n<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),r.level=this.level,n>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],i={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(r),this.tokens_meta.push(i),r};Br.prototype.scanDelims=function(t,e){var n=t,r,i,o,a,l,s,c,u,d,f=!0,p=!0,y=this.posMax,h=this.src.charCodeAt(t);for(r=t>0?this.src.charCodeAt(t-1):32;n<y&&this.src.charCodeAt(n)===h;)n++;return o=n-t,i=n<y?this.src.charCodeAt(n):32,c=Wg(r)||$g(String.fromCharCode(r)),d=Wg(i)||$g(String.fromCharCode(i)),s=Gg(r),u=Gg(i),u?f=!1:d&&(s||c||(f=!1)),s?p=!1:c&&(u||d||(p=!1)),e?(a=f,l=p):(a=f&&(!p||c),l=p&&(!f||d)),{can_open:a,can_close:l,length:o}};Br.prototype.Token=ul;Yg.exports=Br});var Jg=L((yP,Qg)=>{"use strict";var jg=Bi(),dl=[["text",gg()],["linkify",yg()],["newline",vg()],["escape",xg()],["backticks",Eg()],["strikethrough",ol().tokenize],["emphasis",sl().tokenize],["link",kg()],["image",_g()],["autolink",Fg()],["html_inline",Bg()],["entity",Rg()]],fl=[["balance_pairs",Ng()],["strikethrough",ol().postProcess],["emphasis",sl().postProcess],["fragments_join",qg()]];function Mr(){var t;for(this.ruler=new jg,t=0;t<dl.length;t++)this.ruler.push(dl[t][0],dl[t][1]);for(this.ruler2=new jg,t=0;t<fl.length;t++)this.ruler2.push(fl[t][0],fl[t][1])}Mr.prototype.skipToken=function(t){var e,n,r=t.pos,i=this.ruler.getRules(""),o=i.length,a=t.md.options.maxNesting,l=t.cache;if(typeof l[r]<"u"){t.pos=l[r];return}if(t.level<a)for(n=0;n<o&&(t.level++,e=i[n](t,!0),t.level--,!e);n++);else t.pos=t.posMax;e||t.pos++,l[r]=t.pos};Mr.prototype.tokenize=function(t){for(var e,n,r=this.ruler.getRules(""),i=r.length,o=t.posMax,a=t.md.options.maxNesting;t.pos<o;){if(t.level<a)for(n=0;n<i&&(e=r[n](t,!1),!e);n++);if(e){if(t.pos>=o)break;continue}t.pending+=t.src[t.pos++]}t.pending&&t.pushPending()};Mr.prototype.parse=function(t,e,n,r){var i,o,a,l=new this.State(t,e,n,r);for(this.tokenize(l),o=this.ruler2.getRules(""),a=o.length,i=0;i<a;i++)o[i](l)};Mr.prototype.State=Ug();Qg.exports=Mr});var Kg=L((bP,Xg)=>{"use strict";Xg.exports=function(t){var e={};t=t||{},e.src_Any=Us().source,e.src_Cc=js().source,e.src_Z=Qs().source,e.src_P=Ti().source,e.src_ZPCc=[e.src_Z,e.src_P,e.src_Cc].join("|"),e.src_ZCc=[e.src_Z,e.src_Cc].join("|");var n="[><\uFF5C]";return e.src_pseudo_letter="(?:(?!"+n+"|"+e.src_ZPCc+")"+e.src_Any+")",e.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",e.src_auth="(?:(?:(?!"+e.src_ZCc+"|[@/\\[\\]()]).)+@)?",e.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",e.src_host_terminator="(?=$|"+n+"|"+e.src_ZPCc+")(?!"+(t["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+e.src_ZPCc+"))",e.src_path="(?:[/?#](?:(?!"+e.src_ZCc+"|"+n+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+e.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+e.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+e.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+e.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+e.src_ZCc+"|[']).)+\\'|\\'(?="+e.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+e.src_ZCc+"|[.]|$)|"+(t["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+e.src_ZCc+"|$)|;(?!"+e.src_ZCc+"|$)|\\!+(?!"+e.src_ZCc+"|[!]|$)|\\?(?!"+e.src_ZCc+"|[?]|$))+|\\/)?",e.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',e.src_xn="xn--[a-z0-9\\-]{1,59}",e.src_domain_root="(?:"+e.src_xn+"|"+e.src_pseudo_letter+"{1,63})",e.src_domain="(?:"+e.src_xn+"|(?:"+e.src_pseudo_letter+")|(?:"+e.src_pseudo_letter+"(?:-|"+e.src_pseudo_letter+"){0,61}"+e.src_pseudo_letter+"))",e.src_host="(?:(?:(?:(?:"+e.src_domain+")\\.)*"+e.src_domain+"))",e.tpl_host_fuzzy="(?:"+e.src_ip4+"|(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%)))",e.tpl_host_no_ip_fuzzy="(?:(?:(?:"+e.src_domain+")\\.)+(?:%TLDS%))",e.src_host_strict=e.src_host+e.src_host_terminator,e.tpl_host_fuzzy_strict=e.tpl_host_fuzzy+e.src_host_terminator,e.src_host_port_strict=e.src_host+e.src_port+e.src_host_terminator,e.tpl_host_port_fuzzy_strict=e.tpl_host_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_port_no_ip_fuzzy_strict=e.tpl_host_no_ip_fuzzy+e.src_port+e.src_host_terminator,e.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+e.src_ZPCc+"|>|$))",e.tpl_email_fuzzy="(^|"+n+'|"|\\(|'+e.src_ZCc+")("+e.src_email_name+"@"+e.tpl_host_fuzzy_strict+")",e.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_fuzzy_strict+e.src_path+")",e.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|\uFF5C]|"+e.src_ZPCc+"))((?![$+<=>^`|\uFF5C])"+e.tpl_host_port_no_ip_fuzzy_strict+e.src_path+")",e}});var rm=L((vP,nm)=>{"use strict";function pl(t){var e=Array.prototype.slice.call(arguments,1);return e.forEach(function(n){!n||Object.keys(n).forEach(function(r){t[r]=n[r]})}),t}function Hi(t){return Object.prototype.toString.call(t)}function gE(t){return Hi(t)==="[object String]"}function mE(t){return Hi(t)==="[object Object]"}function yE(t){return Hi(t)==="[object RegExp]"}function Zg(t){return Hi(t)==="[object Function]"}function bE(t){return t.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}var tm={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function vE(t){return Object.keys(t||{}).reduce(function(e,n){return e||tm.hasOwnProperty(n)},!1)}var CE={"http:":{validate:function(t,e,n){var r=t.slice(e);return n.re.http||(n.re.http=new RegExp("^\\/\\/"+n.re.src_auth+n.re.src_host_port_strict+n.re.src_path,"i")),n.re.http.test(r)?r.match(n.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(t,e,n){var r=t.slice(e);return n.re.no_http||(n.re.no_http=new RegExp("^"+n.re.src_auth+"(?:localhost|(?:(?:"+n.re.src_domain+")\\.)+"+n.re.src_domain_root+")"+n.re.src_port+n.re.src_host_terminator+n.re.src_path,"i")),n.re.no_http.test(r)?e>=3&&t[e-3]===":"||e>=3&&t[e-3]==="/"?0:r.match(n.re.no_http)[0].length:0}},"mailto:":{validate:function(t,e,n){var r=t.slice(e);return n.re.mailto||(n.re.mailto=new RegExp("^"+n.re.src_email_name+"@"+n.re.src_host_strict,"i")),n.re.mailto.test(r)?r.match(n.re.mailto)[0].length:0}}},xE="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",AE="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|\u0440\u0444".split("|");function EE(t){t.__index__=-1,t.__text_cache__=""}function SE(t){return function(e,n){var r=e.slice(n);return t.test(r)?r.match(t)[0].length:0}}function em(){return function(t,e){e.normalize(t)}}function Ni(t){var e=t.re=Kg()(t.__opts__),n=t.__tlds__.slice();t.onCompile(),t.__tlds_replaced__||n.push(xE),n.push(e.src_xn),e.src_tlds=n.join("|");function r(l){return l.replace("%TLDS%",e.src_tlds)}e.email_fuzzy=RegExp(r(e.tpl_email_fuzzy),"i"),e.link_fuzzy=RegExp(r(e.tpl_link_fuzzy),"i"),e.link_no_ip_fuzzy=RegExp(r(e.tpl_link_no_ip_fuzzy),"i"),e.host_fuzzy_test=RegExp(r(e.tpl_host_fuzzy_test),"i");var i=[];t.__compiled__={};function o(l,s){throw new Error('(LinkifyIt) Invalid schema "'+l+'": '+s)}Object.keys(t.__schemas__).forEach(function(l){var s=t.__schemas__[l];if(s!==null){var c={validate:null,link:null};if(t.__compiled__[l]=c,mE(s)){yE(s.validate)?c.validate=SE(s.validate):Zg(s.validate)?c.validate=s.validate:o(l,s),Zg(s.normalize)?c.normalize=s.normalize:s.normalize?o(l,s):c.normalize=em();return}if(gE(s)){i.push(l);return}o(l,s)}}),i.forEach(function(l){!t.__compiled__[t.__schemas__[l]]||(t.__compiled__[l].validate=t.__compiled__[t.__schemas__[l]].validate,t.__compiled__[l].normalize=t.__compiled__[t.__schemas__[l]].normalize)}),t.__compiled__[""]={validate:null,normalize:em()};var a=Object.keys(t.__compiled__).filter(function(l){return l.length>0&&t.__compiled__[l]}).map(bE).join("|");t.re.schema_test=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+a+")","i"),t.re.schema_search=RegExp("(^|(?!_)(?:[><\uFF5C]|"+e.src_ZPCc+"))("+a+")","ig"),t.re.schema_at_start=RegExp("^"+t.re.schema_search.source,"i"),t.re.pretest=RegExp("("+t.re.schema_test.source+")|("+t.re.host_fuzzy_test.source+")|@","i"),EE(t)}function wE(t,e){var n=t.__index__,r=t.__last_index__,i=t.__text_cache__.slice(n,r);this.schema=t.__schema__.toLowerCase(),this.index=n+e,this.lastIndex=r+e,this.raw=i,this.text=i,this.url=i}function hl(t,e){var n=new wE(t,e);return t.__compiled__[n.schema].normalize(n,t),n}function pt(t,e){if(!(this instanceof pt))return new pt(t,e);e||vE(t)&&(e=t,t={}),this.__opts__=pl({},tm,e),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=pl({},CE,t),this.__compiled__={},this.__tlds__=AE,this.__tlds_replaced__=!1,this.re={},Ni(this)}pt.prototype.add=function(e,n){return this.__schemas__[e]=n,Ni(this),this};pt.prototype.set=function(e){return this.__opts__=pl(this.__opts__,e),this};pt.prototype.test=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return!1;var n,r,i,o,a,l,s,c,u;if(this.re.schema_test.test(e)){for(s=this.re.schema_search,s.lastIndex=0;(n=s.exec(e))!==null;)if(o=this.testSchemaAt(e,n[2],s.lastIndex),o){this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+o;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(c=e.search(this.re.host_fuzzy_test),c>=0&&(this.__index__<0||c<this.__index__)&&(r=e.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(a=r.index+r[1].length,(this.__index__<0||a<this.__index__)&&(this.__schema__="",this.__index__=a,this.__last_index__=r.index+r[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(u=e.indexOf("@"),u>=0&&(i=e.match(this.re.email_fuzzy))!==null&&(a=i.index+i[1].length,l=i.index+i[0].length,(this.__index__<0||a<this.__index__||a===this.__index__&&l>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=a,this.__last_index__=l))),this.__index__>=0};pt.prototype.pretest=function(e){return this.re.pretest.test(e)};pt.prototype.testSchemaAt=function(e,n,r){return this.__compiled__[n.toLowerCase()]?this.__compiled__[n.toLowerCase()].validate(e,r,this):0};pt.prototype.match=function(e){var n=0,r=[];this.__index__>=0&&this.__text_cache__===e&&(r.push(hl(this,n)),n=this.__last_index__);for(var i=n?e.slice(n):e;this.test(i);)r.push(hl(this,n)),i=i.slice(this.__last_index__),n+=this.__last_index__;return r.length?r:null};pt.prototype.matchAtStart=function(e){if(this.__text_cache__=e,this.__index__=-1,!e.length)return null;var n=this.re.schema_at_start.exec(e);if(!n)return null;var r=this.testSchemaAt(e,n[2],n[0].length);return r?(this.__schema__=n[2],this.__index__=n.index+n[1].length,this.__last_index__=n.index+n[0].length+r,hl(this,0)):null};pt.prototype.tlds=function(e,n){return e=Array.isArray(e)?e:[e],n?(this.__tlds__=this.__tlds__.concat(e).sort().filter(function(r,i,o){return r!==o[i-1]}).reverse(),Ni(this),this):(this.__tlds__=e.slice(),this.__tlds_replaced__=!0,Ni(this),this)};pt.prototype.normalize=function(e){e.schema||(e.url="http://"+e.url),e.schema==="mailto:"&&!/^mailto:/i.test(e.url)&&(e.url="mailto:"+e.url)};pt.prototype.onCompile=function(){};nm.exports=pt});var fm=L((CP,dm)=>{"use strict";var om="-",IE=/^xn--/,kE=/[^\0-\x7E]/,TE=/[\x2E\u3002\uFF0E\uFF61]/g,_E={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},gl=36-1,$t=Math.floor,ml=String.fromCharCode;function kn(t){throw new RangeError(_E[t])}function PE(t,e){let n=[],r=t.length;for(;r--;)n[r]=e(t[r]);return n}function am(t,e){let n=t.split("@"),r="";n.length>1&&(r=n[0]+"@",t=n[1]),t=t.replace(TE,".");let i=t.split("."),o=PE(i,e).join(".");return r+o}function sm(t){let e=[],n=0,r=t.length;for(;n<r;){let i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}var FE=t=>String.fromCodePoint(...t),DE=function(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:36},im=function(t,e){return t+22+75*(t<26)-((e!=0)<<5)},lm=function(t,e,n){let r=0;for(t=n?$t(t/700):t>>1,t+=$t(t/e);t>gl*26>>1;r+=36)t=$t(t/gl);return $t(r+(gl+1)*t/(t+38))},cm=function(t){let e=[],n=t.length,r=0,i=128,o=72,a=t.lastIndexOf(om);a<0&&(a=0);for(let l=0;l<a;++l)t.charCodeAt(l)>=128&&kn("not-basic"),e.push(t.charCodeAt(l));for(let l=a>0?a+1:0;l<n;){let s=r;for(let u=1,d=36;;d+=36){l>=n&&kn("invalid-input");let f=DE(t.charCodeAt(l++));(f>=36||f>$t((2147483647-r)/u))&&kn("overflow"),r+=f*u;let p=d<=o?1:d>=o+26?26:d-o;if(f<p)break;let y=36-p;u>$t(2147483647/y)&&kn("overflow"),u*=y}let c=e.length+1;o=lm(r-s,c,s==0),$t(r/c)>2147483647-i&&kn("overflow"),i+=$t(r/c),r%=c,e.splice(r++,0,i)}return String.fromCodePoint(...e)},um=function(t){let e=[];t=sm(t);let n=t.length,r=128,i=0,o=72;for(let s of t)s<128&&e.push(ml(s));let a=e.length,l=a;for(a&&e.push(om);l<n;){let s=2147483647;for(let u of t)u>=r&&u<s&&(s=u);let c=l+1;s-r>$t((2147483647-i)/c)&&kn("overflow"),i+=(s-r)*c,r=s;for(let u of t)if(u<r&&++i>2147483647&&kn("overflow"),u===r){let d=i;for(let f=36;;f+=36){let p=f<=o?1:f>=o+26?26:f-o;if(d<p)break;let y=d-p,h=36-p;e.push(ml(im(p+y%h,0))),d=$t(y/h)}e.push(ml(im(d,0))),o=lm(i,c,l===a),i=0,++l}++i,++r}return e.join("")},BE=function(t){return am(t,function(e){return IE.test(e)?cm(e.slice(4).toLowerCase()):e})},ME=function(t){return am(t,function(e){return kE.test(e)?"xn--"+um(e):e})},zE={version:"2.1.0",ucs2:{decode:sm,encode:FE},decode:cm,encode:um,toASCII:ME,toUnicode:BE};dm.exports=zE});var hm=L((xP,pm)=>{"use strict";pm.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}}});var mm=L((AP,gm)=>{"use strict";gm.exports={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}}});var bm=L((EP,ym)=>{"use strict";ym.exports={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"\u201C\u201D\u2018\u2019",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}}});var Am=L((SP,xm)=>{"use strict";var zr=he(),OE=th(),RE=rh(),LE=Ph(),VE=pg(),NE=Jg(),HE=rm(),Tn=Ys(),vm=fm(),qE={default:hm(),zero:mm(),commonmark:bm()},GE=/^(vbscript|javascript|file|data):/,$E=/^data:image\/(gif|png|jpeg|webp);/;function WE(t){var e=t.trim().toLowerCase();return GE.test(e)?!!$E.test(e):!0}var Cm=["http:","https:","mailto:"];function YE(t){var e=Tn.parse(t,!0);if(e.hostname&&(!e.protocol||Cm.indexOf(e.protocol)>=0))try{e.hostname=vm.toASCII(e.hostname)}catch{}return Tn.encode(Tn.format(e))}function UE(t){var e=Tn.parse(t,!0);if(e.hostname&&(!e.protocol||Cm.indexOf(e.protocol)>=0))try{e.hostname=vm.toUnicode(e.hostname)}catch{}return Tn.decode(Tn.format(e),Tn.decode.defaultChars+"%")}function Et(t,e){if(!(this instanceof Et))return new Et(t,e);e||zr.isString(t)||(e=t||{},t="default"),this.inline=new NE,this.block=new VE,this.core=new LE,this.renderer=new RE,this.linkify=new HE,this.validateLink=WE,this.normalizeLink=YE,this.normalizeLinkText=UE,this.utils=zr,this.helpers=zr.assign({},OE),this.options={},this.configure(t),e&&this.set(e)}Et.prototype.set=function(t){return zr.assign(this.options,t),this};Et.prototype.configure=function(t){var e=this,n;if(zr.isString(t)&&(n=t,t=qE[n],!t))throw new Error('Wrong `markdown-it` preset "'+n+'", check name');if(!t)throw new Error("Wrong `markdown-it` preset, can't be empty");return t.options&&e.set(t.options),t.components&&Object.keys(t.components).forEach(function(r){t.components[r].rules&&e[r].ruler.enableOnly(t.components[r].rules),t.components[r].rules2&&e[r].ruler2.enableOnly(t.components[r].rules2)}),this};Et.prototype.enable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.enable(t,!0))},this),n=n.concat(this.inline.ruler2.enable(t,!0));var r=t.filter(function(i){return n.indexOf(i)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+r);return this};Et.prototype.disable=function(t,e){var n=[];Array.isArray(t)||(t=[t]),["core","block","inline"].forEach(function(i){n=n.concat(this[i].ruler.disable(t,!0))},this),n=n.concat(this.inline.ruler2.disable(t,!0));var r=t.filter(function(i){return n.indexOf(i)<0});if(r.length&&!e)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+r);return this};Et.prototype.use=function(t){var e=[this].concat(Array.prototype.slice.call(arguments,1));return t.apply(t,e),this};Et.prototype.parse=function(t,e){if(typeof t!="string")throw new Error("Input data should be a String");var n=new this.core.State(t,this,e);return this.core.process(n),n.tokens};Et.prototype.render=function(t,e){return e=e||{},this.renderer.render(this.parse(t,e),this.options,e)};Et.prototype.parseInline=function(t,e){var n=new this.core.State(t,this,e);return n.inlineMode=!0,this.core.process(n),n.tokens};Et.prototype.renderInline=function(t,e){return e=e||{},this.renderer.render(this.parseInline(t,e),this.options,e)};xm.exports=Et});var Sm=L((wP,Em)=>{"use strict";Em.exports=Am()});var wm=L((yl,bl)=>{(function(t,e){typeof yl=="object"&&typeof bl<"u"?bl.exports=e():typeof define=="function"&&define.amd?define(e):(t=typeof globalThis<"u"?globalThis:t||self,t.DOMPurify=e())})(yl,function(){"use strict";function t(W){return t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},t(W)}function e(W,U){return e=Object.setPrototypeOf||function(ce,xe){return ce.__proto__=xe,ce},e(W,U)}function n(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function r(W,U,ee){return n()?r=Reflect.construct:r=function(xe,Dt,Ut){var Bt=[null];Bt.push.apply(Bt,Dt);var sr=Function.bind.apply(xe,Bt),lr=new sr;return Ut&&e(lr,Ut.prototype),lr},r.apply(null,arguments)}function i(W){return o(W)||a(W)||l(W)||c()}function o(W){if(Array.isArray(W))return s(W)}function a(W){if(typeof Symbol<"u"&&W[Symbol.iterator]!=null||W["@@iterator"]!=null)return Array.from(W)}function l(W,U){if(!!W){if(typeof W=="string")return s(W,U);var ee=Object.prototype.toString.call(W).slice(8,-1);if(ee==="Object"&&W.constructor&&(ee=W.constructor.name),ee==="Map"||ee==="Set")return Array.from(W);if(ee==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ee))return s(W,U)}}function s(W,U){(U==null||U>W.length)&&(U=W.length);for(var ee=0,ce=new Array(U);ee<U;ee++)ce[ee]=W[ee];return ce}function c(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var u=Object.hasOwnProperty,d=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,y=Object.getOwnPropertyDescriptor,h=Object.freeze,m=Object.seal,v=Object.create,b=typeof Reflect<"u"&&Reflect,C=b.apply,T=b.construct;C||(C=function(U,ee,ce){return U.apply(ee,ce)}),h||(h=function(U){return U}),m||(m=function(U){return U}),T||(T=function(U,ee){return r(U,i(ee))});var k=I(Array.prototype.forEach),A=I(Array.prototype.pop),_=I(Array.prototype.push),z=I(String.prototype.toLowerCase),G=I(String.prototype.toString),F=I(String.prototype.match),w=I(String.prototype.replace),E=I(String.prototype.indexOf),P=I(String.prototype.trim),H=I(RegExp.prototype.test),j=q(TypeError);function I(W){return function(U){for(var ee=arguments.length,ce=new Array(ee>1?ee-1:0),xe=1;xe<ee;xe++)ce[xe-1]=arguments[xe];return C(W,U,ce)}}function q(W){return function(){for(var U=arguments.length,ee=new Array(U),ce=0;ce<U;ce++)ee[ce]=arguments[ce];return T(W,ee)}}function D(W,U,ee){ee=ee||z,d&&d(W,null);for(var ce=U.length;ce--;){var xe=U[ce];if(typeof xe=="string"){var Dt=ee(xe);Dt!==xe&&(f(U)||(U[ce]=Dt),xe=Dt)}W[xe]=!0}return W}function te(W){var U=v(null),ee;for(ee in W)C(u,W,[ee])===!0&&(U[ee]=W[ee]);return U}function le(W,U){for(;W!==null;){var ee=y(W,U);if(ee){if(ee.get)return I(ee.get);if(typeof ee.value=="function")return I(ee.value)}W=p(W)}function ce(xe){return console.warn("fallback value for",xe),null}return ce}var Me=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),St=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),rn=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_n=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),at=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),Wt=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),er=h(["#text"]),tr=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),Pn=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),nr=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Yt=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Fn=m(/\{\{[\w\W]*|[\w\W]*\}\}/gm),rr=m(/<%[\w\W]*|[\w\W]*%>/gm),ir=m(/\${[\w\W]*}/gm),or=m(/^data-[\-\w.\u00B7-\uFFFF]/),ar=m(/^aria-[\-\w]+$/),_m=m(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Pm=m(/^(?:\w+script|data):/i),Fm=m(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Dm=m(/^html$/i),Bm=function(){return typeof window>"u"?null:window},Mm=function(U,ee){if(t(U)!=="object"||typeof U.createPolicy!="function")return null;var ce=null,xe="data-tt-policy-suffix";ee.currentScript&&ee.currentScript.hasAttribute(xe)&&(ce=ee.currentScript.getAttribute(xe));var Dt="dompurify"+(ce?"#"+ce:"");try{return U.createPolicy(Dt,{createHTML:function(Bt){return Bt},createScriptURL:function(Bt){return Bt}})}catch{return console.warn("TrustedTypes policy "+Dt+" could not be created."),null}};function vl(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Bm(),U=function(S){return vl(S)};if(U.version="2.4.3",U.removed=[],!W||!W.document||W.document.nodeType!==9)return U.isSupported=!1,U;var ee=W.document,ce=W.document,xe=W.DocumentFragment,Dt=W.HTMLTemplateElement,Ut=W.Node,Bt=W.Element,sr=W.NodeFilter,lr=W.NamedNodeMap,Om=lr===void 0?W.NamedNodeMap||W.MozNamedAttrMap:lr,Rm=W.HTMLFormElement,Lm=W.DOMParser,Or=W.trustedTypes,Rr=Bt.prototype,Vm=le(Rr,"cloneNode"),Nm=le(Rr,"nextSibling"),Hm=le(Rr,"childNodes"),Gi=le(Rr,"parentNode");if(typeof Dt=="function"){var $i=ce.createElement("template");$i.content&&$i.content.ownerDocument&&(ce=$i.content.ownerDocument)}var wt=Mm(Or,ee),Wi=wt?wt.createHTML(""):"",Lr=ce,Yi=Lr.implementation,qm=Lr.createNodeIterator,Gm=Lr.createDocumentFragment,$m=Lr.getElementsByTagName,Wm=ee.importNode,Cl={};try{Cl=te(ce).documentMode?ce.documentMode:{}}catch{}var Mt={};U.isSupported=typeof Gi=="function"&&Yi&&typeof Yi.createHTMLDocument<"u"&&Cl!==9;var Ui=Fn,ji=rr,Qi=ir,Ym=or,Um=ar,jm=Pm,xl=Fm,Ji=_m,Pe=null,Al=D({},[].concat(i(Me),i(St),i(rn),i(at),i(er))),ze=null,El=D({},[].concat(i(tr),i(Pn),i(nr),i(Yt))),Se=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),cr=null,Xi=null,Sl=!0,Ki=!0,wl=!1,Dn=!1,hn=!1,Zi=!1,eo=!1,Bn=!1,Vr=!1,Nr=!1,Il=!0,kl=!1,Qm="user-content-",to=!0,ur=!1,Mn={},zn=null,Tl=D({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),_l=null,Pl=D({},["audio","video","img","source","image","track"]),no=null,Fl=D({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Hr="http://www.w3.org/1998/Math/MathML",qr="http://www.w3.org/2000/svg",jt="http://www.w3.org/1999/xhtml",On=jt,ro=!1,io=null,Jm=D({},[Hr,qr,jt],G),gn,Xm=["application/xhtml+xml","text/html"],Km="text/html",Fe,Rn=null,Zm=ce.createElement("form"),Dl=function(S){return S instanceof RegExp||S instanceof Function},oo=function(S){Rn&&Rn===S||((!S||t(S)!=="object")&&(S={}),S=te(S),gn=Xm.indexOf(S.PARSER_MEDIA_TYPE)===-1?gn=Km:gn=S.PARSER_MEDIA_TYPE,Fe=gn==="application/xhtml+xml"?G:z,Pe="ALLOWED_TAGS"in S?D({},S.ALLOWED_TAGS,Fe):Al,ze="ALLOWED_ATTR"in S?D({},S.ALLOWED_ATTR,Fe):El,io="ALLOWED_NAMESPACES"in S?D({},S.ALLOWED_NAMESPACES,G):Jm,no="ADD_URI_SAFE_ATTR"in S?D(te(Fl),S.ADD_URI_SAFE_ATTR,Fe):Fl,_l="ADD_DATA_URI_TAGS"in S?D(te(Pl),S.ADD_DATA_URI_TAGS,Fe):Pl,zn="FORBID_CONTENTS"in S?D({},S.FORBID_CONTENTS,Fe):Tl,cr="FORBID_TAGS"in S?D({},S.FORBID_TAGS,Fe):{},Xi="FORBID_ATTR"in S?D({},S.FORBID_ATTR,Fe):{},Mn="USE_PROFILES"in S?S.USE_PROFILES:!1,Sl=S.ALLOW_ARIA_ATTR!==!1,Ki=S.ALLOW_DATA_ATTR!==!1,wl=S.ALLOW_UNKNOWN_PROTOCOLS||!1,Dn=S.SAFE_FOR_TEMPLATES||!1,hn=S.WHOLE_DOCUMENT||!1,Bn=S.RETURN_DOM||!1,Vr=S.RETURN_DOM_FRAGMENT||!1,Nr=S.RETURN_TRUSTED_TYPE||!1,eo=S.FORCE_BODY||!1,Il=S.SANITIZE_DOM!==!1,kl=S.SANITIZE_NAMED_PROPS||!1,to=S.KEEP_CONTENT!==!1,ur=S.IN_PLACE||!1,Ji=S.ALLOWED_URI_REGEXP||Ji,On=S.NAMESPACE||jt,S.CUSTOM_ELEMENT_HANDLING&&Dl(S.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Se.tagNameCheck=S.CUSTOM_ELEMENT_HANDLING.tagNameCheck),S.CUSTOM_ELEMENT_HANDLING&&Dl(S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Se.attributeNameCheck=S.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),S.CUSTOM_ELEMENT_HANDLING&&typeof S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(Se.allowCustomizedBuiltInElements=S.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),Dn&&(Ki=!1),Vr&&(Bn=!0),Mn&&(Pe=D({},i(er)),ze=[],Mn.html===!0&&(D(Pe,Me),D(ze,tr)),Mn.svg===!0&&(D(Pe,St),D(ze,Pn),D(ze,Yt)),Mn.svgFilters===!0&&(D(Pe,rn),D(ze,Pn),D(ze,Yt)),Mn.mathMl===!0&&(D(Pe,at),D(ze,nr),D(ze,Yt))),S.ADD_TAGS&&(Pe===Al&&(Pe=te(Pe)),D(Pe,S.ADD_TAGS,Fe)),S.ADD_ATTR&&(ze===El&&(ze=te(ze)),D(ze,S.ADD_ATTR,Fe)),S.ADD_URI_SAFE_ATTR&&D(no,S.ADD_URI_SAFE_ATTR,Fe),S.FORBID_CONTENTS&&(zn===Tl&&(zn=te(zn)),D(zn,S.FORBID_CONTENTS,Fe)),to&&(Pe["#text"]=!0),hn&&D(Pe,["html","head","body"]),Pe.table&&(D(Pe,["tbody"]),delete cr.tbody),h&&h(S),Rn=S)},Bl=D({},["mi","mo","mn","ms","mtext"]),Ml=D({},["foreignobject","desc","title","annotation-xml"]),e0=D({},["title","style","font","a","script"]),Gr=D({},St);D(Gr,rn),D(Gr,_n);var ao=D({},at);D(ao,Wt);var t0=function(S){var N=Gi(S);(!N||!N.tagName)&&(N={namespaceURI:On,tagName:"template"});var Y=z(S.tagName),pe=z(N.tagName);return io[S.namespaceURI]?S.namespaceURI===qr?N.namespaceURI===jt?Y==="svg":N.namespaceURI===Hr?Y==="svg"&&(pe==="annotation-xml"||Bl[pe]):Boolean(Gr[Y]):S.namespaceURI===Hr?N.namespaceURI===jt?Y==="math":N.namespaceURI===qr?Y==="math"&&Ml[pe]:Boolean(ao[Y]):S.namespaceURI===jt?N.namespaceURI===qr&&!Ml[pe]||N.namespaceURI===Hr&&!Bl[pe]?!1:!ao[Y]&&(e0[Y]||!Gr[Y]):!!(gn==="application/xhtml+xml"&&io[S.namespaceURI]):!1},Qt=function(S){_(U.removed,{element:S});try{S.parentNode.removeChild(S)}catch{try{S.outerHTML=Wi}catch{S.remove()}}},so=function(S,N){try{_(U.removed,{attribute:N.getAttributeNode(S),from:N})}catch{_(U.removed,{attribute:null,from:N})}if(N.removeAttribute(S),S==="is"&&!ze[S])if(Bn||Vr)try{Qt(N)}catch{}else try{N.setAttribute(S,"")}catch{}},zl=function(S){var N,Y;if(eo)S="<remove></remove>"+S;else{var pe=F(S,/^[\r\n\t ]+/);Y=pe&&pe[0]}gn==="application/xhtml+xml"&&On===jt&&(S='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+S+"</body></html>");var Qe=wt?wt.createHTML(S):S;if(On===jt)try{N=new Lm().parseFromString(Qe,gn)}catch{}if(!N||!N.documentElement){N=Yi.createDocument(On,"template",null);try{N.documentElement.innerHTML=ro?Wi:Qe}catch{}}var Le=N.body||N.documentElement;return S&&Y&&Le.insertBefore(ce.createTextNode(Y),Le.childNodes[0]||null),On===jt?$m.call(N,hn?"html":"body")[0]:hn?N.documentElement:Le},Ol=function(S){return qm.call(S.ownerDocument||S,S,sr.SHOW_ELEMENT|sr.SHOW_COMMENT|sr.SHOW_TEXT,null,!1)},n0=function(S){return S instanceof Rm&&(typeof S.nodeName!="string"||typeof S.textContent!="string"||typeof S.removeChild!="function"||!(S.attributes instanceof Om)||typeof S.removeAttribute!="function"||typeof S.setAttribute!="function"||typeof S.namespaceURI!="string"||typeof S.insertBefore!="function"||typeof S.hasChildNodes!="function")},dr=function(S){return t(Ut)==="object"?S instanceof Ut:S&&t(S)==="object"&&typeof S.nodeType=="number"&&typeof S.nodeName=="string"},Jt=function(S,N,Y){!Mt[S]||k(Mt[S],function(pe){pe.call(U,N,Y,Rn)})},Rl=function(S){var N;if(Jt("beforeSanitizeElements",S,null),n0(S)||H(/[\u0080-\uFFFF]/,S.nodeName))return Qt(S),!0;var Y=Fe(S.nodeName);if(Jt("uponSanitizeElement",S,{tagName:Y,allowedTags:Pe}),S.hasChildNodes()&&!dr(S.firstElementChild)&&(!dr(S.content)||!dr(S.content.firstElementChild))&&H(/<[/\w]/g,S.innerHTML)&&H(/<[/\w]/g,S.textContent)||Y==="select"&&H(/<template/i,S.innerHTML))return Qt(S),!0;if(!Pe[Y]||cr[Y]){if(!cr[Y]&&Vl(Y)&&(Se.tagNameCheck instanceof RegExp&&H(Se.tagNameCheck,Y)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(Y)))return!1;if(to&&!zn[Y]){var pe=Gi(S)||S.parentNode,Qe=Hm(S)||S.childNodes;if(Qe&&pe)for(var Le=Qe.length,Oe=Le-1;Oe>=0;--Oe)pe.insertBefore(Vm(Qe[Oe],!0),Nm(S))}return Qt(S),!0}return S instanceof Bt&&!t0(S)||(Y==="noscript"||Y==="noembed")&&H(/<\/no(script|embed)/i,S.innerHTML)?(Qt(S),!0):(Dn&&S.nodeType===3&&(N=S.textContent,N=w(N,Ui," "),N=w(N,ji," "),N=w(N,Qi," "),S.textContent!==N&&(_(U.removed,{element:S.cloneNode()}),S.textContent=N)),Jt("afterSanitizeElements",S,null),!1)},Ll=function(S,N,Y){if(Il&&(N==="id"||N==="name")&&(Y in ce||Y in Zm))return!1;if(!(Ki&&!Xi[N]&&H(Ym,N))){if(!(Sl&&H(Um,N))){if(!ze[N]||Xi[N]){if(!(Vl(S)&&(Se.tagNameCheck instanceof RegExp&&H(Se.tagNameCheck,S)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(S))&&(Se.attributeNameCheck instanceof RegExp&&H(Se.attributeNameCheck,N)||Se.attributeNameCheck instanceof Function&&Se.attributeNameCheck(N))||N==="is"&&Se.allowCustomizedBuiltInElements&&(Se.tagNameCheck instanceof RegExp&&H(Se.tagNameCheck,Y)||Se.tagNameCheck instanceof Function&&Se.tagNameCheck(Y))))return!1}else if(!no[N]){if(!H(Ji,w(Y,xl,""))){if(!((N==="src"||N==="xlink:href"||N==="href")&&S!=="script"&&E(Y,"data:")===0&&_l[S])){if(!(wl&&!H(jm,w(Y,xl,"")))){if(Y)return!1}}}}}}return!0},Vl=function(S){return S.indexOf("-")>0},Nl=function(S){var N,Y,pe,Qe;Jt("beforeSanitizeAttributes",S,null);var Le=S.attributes;if(!!Le){var Oe={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ze};for(Qe=Le.length;Qe--;){N=Le[Qe];var $r=N,De=$r.name,lo=$r.namespaceURI;if(Y=De==="value"?N.value:P(N.value),pe=Fe(De),Oe.attrName=pe,Oe.attrValue=Y,Oe.keepAttr=!0,Oe.forceKeepAttr=void 0,Jt("uponSanitizeAttribute",S,Oe),Y=Oe.attrValue,!Oe.forceKeepAttr&&(so(De,S),!!Oe.keepAttr)){if(H(/\/>/i,Y)){so(De,S);continue}Dn&&(Y=w(Y,Ui," "),Y=w(Y,ji," "),Y=w(Y,Qi," "));var Hl=Fe(S.nodeName);if(!!Ll(Hl,pe,Y)){if(kl&&(pe==="id"||pe==="name")&&(so(De,S),Y=Qm+Y),wt&&t(Or)==="object"&&typeof Or.getAttributeType=="function"&&!lo)switch(Or.getAttributeType(Hl,pe)){case"TrustedHTML":Y=wt.createHTML(Y);break;case"TrustedScriptURL":Y=wt.createScriptURL(Y);break}try{lo?S.setAttributeNS(lo,De,Y):S.setAttribute(De,Y),A(U.removed)}catch{}}}}Jt("afterSanitizeAttributes",S,null)}},r0=function J(S){var N,Y=Ol(S);for(Jt("beforeSanitizeShadowDOM",S,null);N=Y.nextNode();)Jt("uponSanitizeShadowNode",N,null),!Rl(N)&&(N.content instanceof xe&&J(N.content),Nl(N));Jt("afterSanitizeShadowDOM",S,null)};return U.sanitize=function(J){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},N,Y,pe,Qe,Le;if(ro=!J,ro&&(J="<!-->"),typeof J!="string"&&!dr(J)){if(typeof J.toString!="function")throw j("toString is not a function");if(J=J.toString(),typeof J!="string")throw j("dirty is not a string, aborting")}if(!U.isSupported){if(t(W.toStaticHTML)==="object"||typeof W.toStaticHTML=="function"){if(typeof J=="string")return W.toStaticHTML(J);if(dr(J))return W.toStaticHTML(J.outerHTML)}return J}if(Zi||oo(S),U.removed=[],typeof J=="string"&&(ur=!1),ur){if(J.nodeName){var Oe=Fe(J.nodeName);if(!Pe[Oe]||cr[Oe])throw j("root node is forbidden and cannot be sanitized in-place")}}else if(J instanceof Ut)N=zl("<!---->"),Y=N.ownerDocument.importNode(J,!0),Y.nodeType===1&&Y.nodeName==="BODY"||Y.nodeName==="HTML"?N=Y:N.appendChild(Y);else{if(!Bn&&!Dn&&!hn&&J.indexOf("<")===-1)return wt&&Nr?wt.createHTML(J):J;if(N=zl(J),!N)return Bn?null:Nr?Wi:""}N&&eo&&Qt(N.firstChild);for(var $r=Ol(ur?J:N);pe=$r.nextNode();)pe.nodeType===3&&pe===Qe||Rl(pe)||(pe.content instanceof xe&&r0(pe.content),Nl(pe),Qe=pe);if(Qe=null,ur)return J;if(Bn){if(Vr)for(Le=Gm.call(N.ownerDocument);N.firstChild;)Le.appendChild(N.firstChild);else Le=N;return ze.shadowroot&&(Le=Wm.call(ee,Le,!0)),Le}var De=hn?N.outerHTML:N.innerHTML;return hn&&Pe["!doctype"]&&N.ownerDocument&&N.ownerDocument.doctype&&N.ownerDocument.doctype.name&&H(Dm,N.ownerDocument.doctype.name)&&(De="<!DOCTYPE "+N.ownerDocument.doctype.name+`>
`+De),Dn&&(De=w(De,Ui," "),De=w(De,ji," "),De=w(De,Qi," ")),wt&&Nr?wt.createHTML(De):De},U.setConfig=function(J){oo(J),Zi=!0},U.clearConfig=function(){Rn=null,Zi=!1},U.isValidAttribute=function(J,S,N){Rn||oo({});var Y=Fe(J),pe=Fe(S);return Ll(Y,pe,N)},U.addHook=function(J,S){typeof S=="function"&&(Mt[J]=Mt[J]||[],_(Mt[J],S))},U.removeHook=function(J){if(Mt[J])return A(Mt[J])},U.removeHooks=function(J){Mt[J]&&(Mt[J]=[])},U.removeAllHooks=function(){Mt={}},U}var zm=vl();return zm})});var QE={};Ge(QE,{default:()=>jE});var qi=Je(lt()),ge=Wr("@primer/react");var qe=Je(lt());var Ps={};Ge(Ps,{actions:()=>zb,adaptiveCard:()=>Ob,containerStyles:()=>Bb,default:()=>Nb,factSet:()=>Lb,fontTypes:()=>Pb,imageSet:()=>Rb,imageSizes:()=>Mb,inputs:()=>Vb,separator:()=>Tb,spacing:()=>kb,supportsInteractivity:()=>_b,textBlock:()=>Db,textStyles:()=>Fb});var kb={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},Tb={lineThickness:1,lineColor:"#EEEEEE"},_b=!0,Pb={default:{fontFamily:"'Segoe UI', 'sans-serif', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},Fb={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Db={headingLevel:2},Bb={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#0063B1",subtle:"#0063B1"},attention:{default:"#B00000",subtle:"#DDB00000"},good:{default:"#028A02",subtle:"#DD028A02"},light:{default:"#646464",subtle:"#767676"},warning:{default:"#B75C00",subtle:"#DDB75C00"}}},emphasis:{borderColor:"#666666",backgroundColor:"#F9F9F9",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#1F6BF1",subtle:"#881F6BF1"},attention:{default:"#E31B13",subtle:"#DDE31B13"},good:{default:"#0D860A",subtle:"#DD0D860A"},warning:{default:"#BD5400",subtle:"#DDBD5400"},light:{default:"#737373",subtle:"#DD737373"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#D7E7FA",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#145FDD",subtle:"#88145FDD"},attention:{default:"#C42C07",subtle:"#DDC42C07"},good:{default:"#0B7814",subtle:"#DD0B7814"},warning:{default:"#935A10",subtle:"#DD935A10"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#6E6E6E",subtle:"#336E6E6E"},accent:{default:"#2168E4",subtle:"#882168E4"},attention:{default:"#CC3300",subtle:"#DDCC3300"},good:{default:"#0F8109",subtle:"#DD0F8109"},warning:{default:"#9A630D",subtle:"#DD9A630D"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#5A5A5A",subtle:"#335A5A5A"},accent:{default:"#0854C5",subtle:"#880854C5"},attention:{default:"#A92E0E",subtle:"#DDA92E0E"},good:{default:"#256824",subtle:"#DD256824"},warning:{default:"#775502",subtle:"#DD775502"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#0F60DC",subtle:"#880F60DC"},attention:{default:"#BF3505",subtle:"#DDBF3505"},good:{default:"#207725",subtle:"#DD207725"},warning:{default:"#866107",subtle:"#DD866107"}}}},Mb={small:40,medium:80,large:160},zb={maxActions:5,spacing:"default",buttonSpacing:8,showCard:{actionMode:"inline",inlineTopMargin:8},actionsOrientation:"horizontal",actionAlignment:"stretch"},Ob={allowCustomStyle:!1},Rb={imageSize:"medium",maxImageHeight:100},Lb={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8},Vb={label:{inputSpacing:"small",requiredInputs:{suffix:" (required)",weight:"bolder",size:"medium"},optionalInputs:{color:"dark",isSubtle:!0}},errorMessage:{spacing:"small",size:"small",weight:"bolder"}},Nb={spacing:kb,separator:Tb,supportsInteractivity:_b,fontTypes:Pb,textStyles:Fb,textBlock:Db,containerStyles:Bb,imageSizes:Mb,actions:zb,adaptiveCard:Ob,imageSet:Rb,factSet:Lb,inputs:Vb};var Fs=(n=>(n.Light="Light",n.Dark="Dark",n))(Fs||{}),ep=(o=>(o.Desktop="Desktop (unconstrained)",o.SmallMobile="Small mobile (320px)",o.LargeMobile="Large mobile (414px)",o.SmallTablet="Small tablet (768px)",o.LargeTablet="Large tablet (1024px)",o))(ep||{}),tp=(o=>(o.Desktop="",o.SmallMobile="320px",o.LargeMobile="414px",o.SmallTablet="768px",o.LargeTablet="1024px",o))(tp||{}),tt=class{_cardHost;_elementsRegistry=new qe.CardObjectRegistry;_actionsRegistry=new qe.CardObjectRegistry;name;constructor(e){this.name=e,this._cardHost=document.createElement("div"),this._cardHost.className="cardHost",qe.GlobalRegistry.populateWithDefaultElements(this._elementsRegistry),qe.GlobalRegistry.populateWithDefaultActions(this._actionsRegistry)}initialize(){qe.GlobalSettings.useMarkdownInRadioButtonAndCheckbox=!0,qe.GlobalSettings.useAdvancedCardBottomTruncation=!1,qe.GlobalSettings.useAdvancedTextBlockTruncation=!0}createSerializationContext(e){let n=new qe.SerializationContext(e);return n.setElementRegistry(this.elementsRegistry),n.setActionRegistry(this.actionsRegistry),n}getBackgroundColor(){return"#F6F6F6"}parseElement(e,n,r){}anchorClicked(e,n){return!1}getHostConfig(){return new qe.HostConfig(Ps)}requiresOverflowStyling(){return!1}adjustStyleForBackground(){}supportsActionBar=!1;get cardHost(){return this._cardHost}get isFixedHeight(){return!1}get elementsRegistry(){return this._elementsRegistry}get actionsRegistry(){return this._actionsRegistry}get targetVersion(){return qe.Versions.v1_0}get enableDeviceEmulation(){return!1}get supportsMultipleSizes(){return!1}static get supportedContainerThemes(){return Object.values(Fs)}static get supportedDeviceEmulations(){return Object.values(ep)}static get supportDeviceSizes(){return Object.values(tp)}get supportsMultipleThemes(){return!1}set colorTheme(e){}};var bi=Je(lt());var np=Je(lt());var Nt=class extends tt{_colorTheme="Light";_cssFileName;_hostConfigLight;_hostConfigDark;_lightBackground;_darkBackground;constructor(e,n,r,i,o,a){super(e),this._cssFileName=n,this._hostConfigLight=r,this._hostConfigDark=i,this._lightBackground=o,this._darkBackground=a}getCurrentStyleSheet(){return`./containers/${this._cssFileName}-${this._colorTheme.toLowerCase()}.css`}getHostConfig(){return new np.HostConfig(this._colorTheme==="Light"?this._hostConfigLight:this._hostConfigDark)}getBackgroundColor(){return this._colorTheme==="Light"?this._lightBackground:this._darkBackground}set colorTheme(e){this._colorTheme=e}get colorTheme(){return this._colorTheme}get supportsMultipleThemes(){return!0}};var Ds={};Ge(Ds,{containerStyles:()=>Ub,default:()=>Kb,fontFamily:()=>Gb,fontSizes:()=>$b,fontTypes:()=>Yb,fontWeights:()=>Wb,imageSizes:()=>jb,separator:()=>Xb,spacing:()=>qb,supportsInteractivity:()=>Hb,textBlock:()=>Jb,textStyles:()=>Qb});var Hb=!0,qb={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Gb="'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",$b={small:12,default:14,medium:18,large:20,extraLarge:28},Wb={lighter:400,default:400,bolder:600},Yb={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}}},Ub={default:{foregroundColors:{default:{default:"#E4000000",subtle:"#9E000000"},light:{default:"#FFFFFFFF",subtle:"#C5FFFFFF"},dark:{default:"#000000",subtle:"#000000"},accent:{default:"#003E92",subtle:"#003E92"},good:{default:"#0F7B0F",subtle:"#0F7B0F"},warning:{default:"#9D5D00",subtle:"#9D5D00"},attention:{default:"#C42B1C",subtle:"#C42B1C"}}}},jb={small:32,medium:52,large:100},Qb={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Jb={maxWidth:"252px"},Xb={lineThickness:1,lineColor:"#333333"},Kb={supportsInteractivity:Hb,spacing:qb,fontFamily:Gb,fontSizes:$b,fontWeights:Wb,fontTypes:Yb,containerStyles:Ub,imageSizes:jb,textStyles:Qb,textBlock:Jb,separator:Xb};var Bs={};Ge(Bs,{containerStyles:()=>ov,default:()=>uv,fontFamily:()=>tv,fontSizes:()=>nv,fontTypes:()=>iv,fontWeights:()=>rv,imageSizes:()=>lv,separator:()=>cv,spacing:()=>ev,supportsInteractivity:()=>Zb,textBlock:()=>sv,textStyles:()=>av});var Zb=!0,ev={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},tv="'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",nv={small:12,default:14,medium:18,large:20,extraLarge:28},rv={lighter:400,default:400,bolder:600},iv={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}}},ov={default:{foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#C5FFFFFF"},accent:{default:"#FF60CDFF",subtle:"#60CDFF"},dark:{default:"#E4000000",subtle:"#9E000000"},good:{default:"#6CCB5E",subtle:"#6CCB5E"},warning:{default:"#FCE100",subtle:"#FCE100"},attention:{default:"#FF99A4",subtle:"#FF99A4"}}}},av={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},sv={headingLevel:2},lv={small:32,medium:52,large:100},cv={lineThickness:1,lineColor:"#FFFFFF"},uv={supportsInteractivity:Zb,spacing:ev,fontFamily:tv,fontSizes:nv,fontWeights:rv,fontTypes:iv,containerStyles:ov,textStyles:av,textBlock:sv,imageSizes:lv,separator:cv};var rp=`
@font-face {
  font-family: 'FabricMDL2Icons';
  src: url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff2?2.21") format("woff2"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff?2.21") format("woff"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.ttf?2.21") format("truetype");
  font-weight: normal;
  font-style: normal;
}

.widget-outer-container {
    border: 1px solid rgba(0, 0, 0, 0.1);
    background: #2c2c2c;
    width: 302px;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
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
    overflow: hidden;
}

.widget-medium-card {
    height: 304px;
    overflow: hidden;
}

.widget-small-card {
    height: 146px;
    overflow: hidden;
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

.ac-input {
    color: rgba(255, 255, 255, 1);
    font-size: 14px;
}

.ac-input.ac-choiceSetInput-expanded.ac-input-validation-failed,
.ac-input.ac-choiceSetInput-multiSelect.ac-input-validation-failed,
.ac-input.ac-toggleInput.ac-input-validation-failed {
    outline: rgba(255, 153, 164, 1);
}

.ac-input.ac-choiceSetInput-expanded,
.ac-input.ac-choiceSetInput-multiSelect {
    line-height: 22px;
}

.ac-input.ac-input-required {}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact {
    background: linear-gradient(rgba(255, 255, 255, 0.0605), rgba(255, 255, 255, 0.0605)) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%) border-box;
    border: 1px solid transparent;
    border-radius: 3px;
    display: inline-block;
    height: 30px;
    outline: none;
    padding: 4px 11px;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:disabled {
    background: rgba(255, 255, 255, 0.0419);
    border-color: rgba(255, 255, 255, 0.5442);
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:focus {
    outline: 2px solid rgba(255, 255, 255, 1);
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.0837), rgba(255, 255, 255, 0.0837)) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.093) 0%, rgba(255, 255, 255, 0.0698) 9.57%) border-box;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact.ac-input-validation-failed {
    border: rgba(255, 153, 164, 1);
}

.ac-input.ac-dateInput,
.ac-input.ac-timeInput,
.ac-input.ac-textInput,
.ac-input.ac-numberInput {
    background: linear-gradient(rgba(255, 255, 255, 0.0605), rgba(255, 255, 255, 0.0605)) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 99.98%, rgba(255, 255, 255, 0.5442) 96.89%, #989898 96.9%) border-box;
    border: 1px solid transparent;
    border-radius: 3px;
    display: inline-block;
    height: 30px;
    padding: 4px 11px;
}

.ac-input.ac-dateInput:hover,
.ac-input.ac-timeInput:hover,
.ac-input.ac-textInput:hover,
.ac-input.ac-numberInput:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.0837), rgba(255, 255, 255, 0.0837)) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 99.98%, rgba(255, 255, 255, 0.5442) 96.89%, #989898 96.9%) border-box;
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
    border-bottom: 2px solid rgba(76, 194, 255, 1);
    border-radius: 4px;
    background: linear-gradient(rgba(30, 30, 30, 0.7), rgba(30, 30, 30, 0.7)) padding-box, linear-gradient(180deg, rgba(255, 255, 255, 0.08) 96.89%, #4CC2FF 96.9%) border-box;
    outline: none;
    --focus-outline-color: none;
}

.ac-input.ac-dateInput.ac-input-validation-failed,
.ac-input.ac-timeInput.ac-input-validation-failed,
.ac-input.ac-textInput.ac-input-validation-failed,
.ac-input.ac-numberInput.ac-input-validation-failed {
    border: rgba(255, 153, 164, 1);
}

.ac-input.ac-dateInput:disabled,
.ac-input.ac-timeInput:disabled,
.ac-input.ac-textInput:disabled,
.ac-input.ac-numberInput:disabled {
    background: rgba(255, 255, 255, 0.0419);
    border-color: rgba(255, 255, 255, 0.5442);
}

input[type='checkbox'] {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.5442);
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
    background-color: rgba(76, 194, 255, 1);
    border-color: rgba(76, 194, 255, 1);
}

input[type='checkbox']:checked:after {
    content: '\u2714';
    color: rgba(0, 0, 0, 1);
}

input[type='checkbox']:checked:hover {
    background-color: rgba(76, 194, 255, 0.9);
    border-color: rgba(76, 194, 255, 0.9);
}

input[type='checkbox']:hover {
    background-color: rgba(255, 255, 255, 0.0419);
    border-color: rgba(255, 255, 255, 0.5442);
}

input[type='radio'] {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid;
    border-color: rgba(255, 255, 255, 0.5442);
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
    background-color: rgba(76, 194, 255, 1);
    border-color: rgba(76, 194, 255, 1);
}

input[type='radio']:checked:after {
    content: '\u2022';
    font-size: 14px;
    color: rgba(0, 0, 0, 1);
}

input[type='radio']:checked:hover {
    background-color: rgba(76, 194, 255, 0.9);
    border-color: rgba(76, 194, 255, 0.9);
}

input[type='radio']:hover {
    background-color: rgba(255, 255, 255, 0.0419);
    border-color: rgba(255, 255, 255, 0.5442);
}

.ac-pushButton {
    background: rgba(76, 194, 255, 1);
    border-radius: 4px;
    border-width: 0px;
    box-shadow: none;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    height: 32px;
    padding: 5px 12px 7px;
    width: 120px;
}

.ac-pushButton:active {
    background: rgba(76, 194, 255, 0.8);
}

.ac-pushButton:focus {
    border-color: rgba(255, 255, 255, 1);
}

.ac-pushButton:hover {
    background: rgba(76, 194, 255, 0.9);
}

.ac-pushButton-disabled {
    background: rgba(255, 255, 255, 0.1581);
    border-radius: 4px;
    border-width: 0px;
    box-shadow: none;
    color: rgba(0, 0, 0, 1);
    cursor: pointer;
    height: 32px;
    padding: 5px 12px 7px;
    width: 120px;
}

a.ac-anchor {
    color: rgba(153, 235, 255, 1);
    text-decoration: underline;
}

a.ac-anchor:active {
    color: rgba(76, 194, 255, 0.8);
    text-decoration: none;
}

a.ac-anchor:focus,
a.ac-anchor:focus-visible {
    border-radius: 4px;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 1);
    outline: 1px solid transparent;
}

a.ac-anchor:hover {
    color: rgba(153, 235, 255, 1);
    text-decoration: none;
}

.ac-container.ac-selectable,
.ac-columnSet.ac-selectable {
    background-blend-mode: lighten;
    background-color: rgba(255, 255, 255, 0);
    border-radius: 4px;
}

.ac-container.ac-selectable:active,
.ac-columnSet.ac-selectable:active {
    background-color: rgba(255, 255, 255, 0.0419);
}

.ac-container.ac-selectable:hover,
.ac-columnSet.ac-selectable:hover {
    background-color: rgba(255, 255, 255, 0.0605);
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
    color:rgba(255, 255, 255, 0.5442);
    font-size:8px !important;
}

.swiper-button-prev.ac-carousel-left:active::after,
.swiper-button-prev.ac-carousel-left:hover::after,
.swiper-button-next.ac-carousel-right:active::after,
.swiper-button-next.ac-carousel-right:hover::after {
    color:rgba(255, 255, 255, 0.786) !important;
}

.swiper-pagination-bullet {
    background:rgba(255, 255, 255, 0.5442) !important;
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

.swiper-pagination-bullet:hover {
    background:rgba(255, 255, 255, 0.786);
}

.swiper-pagination-bullet.swiper-pagination-bullet-active {
    height:6px !important;
    width:6px !important;
}

.widget-header-text {
    margin: auto;
    margin-left: 0px;
    font-size: 12px;
    line-height: 16px;
    color: #FFFFFF;
}

.widget-header-more-button {
    height: 16px;
    width: 16px;
    background: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 16px;
    color: #FFFFFF;
    border-radius: 2px;
    margin: auto;
    margin-right: 0px;
    margin-left: 0px;
}

.widget-header-more-button::before {
    /*font-family: 'FabricMDL2Icons';
    content: "E712";*/
    content: "\u2026";
}

@media(forced-colors: active) {
    .swiper-pagination-bullet {
        background-color: ButtonBorder !important;
    }
}`;var ip=`
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
    overflow: hidden;
}

.widget-medium-card {
    height: 304px;
    overflow: hidden;
}

.widget-small-card {
    height: 146px;
    overflow: hidden;
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
    content: '\u2714';
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
    content: '\u2022';
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
    content: "E712";*/
    content: "\u2026";
}

@media(forced-colors: active) {
    .swiper-pagination-bullet {
        background-color: ButtonBorder !important;
    }
}
`;var Fr=(r=>(r.Small="Small",r.Medium="Medium",r.Large="Large",r))(Fr||{}),Pr=class extends Nt{_containerSize;_outerFrame;constructor(e){super("Widgets Board","widget-container",Ds,Bs,"#D2D2D2","#616161"),this._containerSize=e}initialize(){super.initialize(),bi.GlobalSettings.removePaddingFromContainersWithBackgroundImage=!0}renderTo(e){this.cardHost.classList.remove("widget-small-card","widget-medium-card","widget-large-card"),this.cardHost.classList.add(`widget-${this._containerSize.toLowerCase()}-card`),this._outerFrame=document.createElement("div"),this._outerFrame.classList.add("widget-outer-container"),this._outerFrame.classList.add(`widget-${this._containerSize.toLowerCase()}-container`);let n=document.createElement("div");n.className="widget-header",this._outerFrame.appendChild(n);let r=document.createElement("p");r.className="widget-header-text",r.textContent="Widget Header",n.appendChild(r);let i=document.createElement("div");i.className="widget-header-more-button",i.setAttribute("role","button"),i.tabIndex=0,n.appendChild(i);let o=document.createElement("div");o.className="widget-inner-container",o.appendChild(this.cardHost),this._outerFrame.appendChild(o),e.appendChild(this._outerFrame);let a=document.createElement("style");this.colorTheme=="Dark"?a.innerHTML=rp:a.innerHTML=ip,e.appendChild(a)}requiresOverflowStyling(){let e=document.getElementsByClassName("ac-adaptiveCard")[0],n=e.getBoundingClientRect().height,r=this.cardHost.getBoundingClientRect().height;return n>r?(this.applyWidgetOverflowStyling(e),!0):!1}applyWidgetOverflowStyling(e){e.style.height="100%";let n=this.addCardElementsWrapper(e);n.classList.add("no-overflow");let r=e.getElementsByClassName("ac-carousel-container");for(let i=0;i<r.length;i++){let o=r[i],a=o.getBoundingClientRect(),l=n.getBoundingClientRect(),s=a.bottom-16,c=a.bottom;if(c>=l.bottom&&c<l.bottom+Pr.widgetPadding||s>=l.bottom&&s<l.bottom+Pr.widgetPadding){e.classList.add("no-overflow"),n.classList.remove("no-overflow"),o.style.marginBottom=Pr.widgetPadding+"px";break}}}addCardElementsWrapper(e){let n=document.createElement("div");return n.classList.add("ac-card-elements-wrapper"),Array.from(e.children).forEach(r=>{n.appendChild(r)}),e.appendChild(n),n}adjustStyleForBackground(){this._outerFrame.classList.remove("widget-small-container-no-border","widget-medium-container-no-border","widget-large-container-no-border"),document.getElementsByClassName("ac-adaptiveCard")[0].style.backgroundImage&&this._outerFrame.classList.add(`widget-${this._containerSize.toLowerCase()}-container-no-border`)}get targetVersion(){return bi.Versions.v1_6}get isFixedHeight(){return!0}set containerSize(e){this._containerSize=e}get supportsMultipleSizes(){return!0}static get supportedContainerSizes(){return Object.values(Fr)}},wn=Pr;$l(wn,"widgetPadding",16);var ap=Je(lt());var Ht=class extends tt{_styleSheet;constructor(e,n){super(e),this._styleSheet=n}getCurrentStyleSheet(){return this._styleSheet}};var op=`.cortana-outer-frame {
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
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAMAAAAqwkWTAAAAb1BMVEUAAAAALVAAY7EALlIAZLMAKUoAAwYAZrYACREABgsAX6sAJ0UADRgAIz8AV50AM1wAIDoAWqIANmEAXaYAGzAAFCMAER4ATosAPGwAFigAL1UAVJYAHTUAGSwASIAARHoAS4YAUZEAOmcAQXUAP3JQqAZtAAAFuElEQVRo3sWa55baMBCFESqW5d57A97/GUOCrLAqxpbJyf2zBw7sx50ZSaOBywER6pfNkOd93+dDU/iUXL4uQss89jAGb8LYi/PimzTi5wEGBuEgL90vUTwMtuX15VlfbiN5Mfpqztiigwd2y8uprRuO2S2c27gihQcOy2sO58oPgJUC/5idAQNL4eGAKRqDEwp2F0XpgVPCxT6OCJu99oSP9OAL6slHTgy+otj9xIHb4X9K/N0SDFxrDgZtWt/HuXpqHqc6bQHeIMVkKz/QSIHpvQozxq5cjGVhNaXQzNogDUYv0dRl7KqIZd2UmnzB3sQpgEG3KrsalVU3E2rQc3yst5NW7LopttyAXqWO43pQh2ln1Y2KmiOsCx6mGpC+EOrw+kMIIeep55+fzycPQ+ntSxCc2TvkCWDhUs1ztYTs96MfplqNKdgogcOqIRx1PyjZnAaNT//Ib4JoTNA7q9OFD9PPgcNp+IZhMyio+xYJ4tICj+wvCiU3rAmeVHG6aksEx2H3nBJdXzk8mPO30gXJWHkx3OAgNOYuMbYw03U1hTQkGLy/s1Q5keA4CeZuDKggdET0UpX0fgwGCqjt0MoZC/Jhyy+nNVMobBWQR7YyVKE1bDXd0WSkaH39AhVSac4Qfoj0RO6uZrMViZqwkiXxeYCsKEMS5yMJrp6YmiZ/PR2gKXDObXeTSyKHB6EznRfEk0C4FnXgHmjV72vtPWRL2NWXAux44MLyUBfdOaLytOWQq4a4gssh9Yx/wDuWY6eNHOCGnDs5BiL1agnqYkflJ2/rflIcvoIkvIhq2dLvumvkyFUOr7jLYUXc0iInadCs1va1hhDjhmwssUhZszxFaik408VCtaMtB4iJmqKZvza2AeU8v5W8lOjFh5LL8BW5kNqAyGstoaSVV5JSCxHjtX2x0o1vD6lSDbmcIr6IsB0o4IF/YHnJxhJo4h+psQOVDL12SSyXXSCBZh5kagdyeYoXCeRdPKjbf5zOdoo0O7qzAmIFFL5A88VSE4+IvN9csB402YLqFyhrFZCyjHh1W+pmBMH/AzofOv3W8M+KIYQfqg4vJ8u74iC5XTUt2OzbC9a4BQ1f3oKMmyr49qZaKMfEqbKrjceEL4HAqYPP7RDfgZSDz8X6o9wJThzljnqUm5uT0Qb0MKQIE027tbZMjUXN8VYt07RbohqU2D2Og1KHR07XQFIgKeUtE2vsDD11U1rizSZ/JJYZCiGQU7R9bcEHFyu7ilLQXfl8APSWUFIcu4ghYUi9iGljd+OOUEUPrNXRdLWEHjFelh1O2n8XI7WYNABJMDdf/5N1alDvJaVrFFgEZPnmkVN9XVW7u/ykYoJ4V8dOWyOaUYzhJv8zh/JJi1irSimYh06LIC35J85QiYlb1+rnaGZLUbiSUBLR7TlQIjhJZDIksqQncVUeMWYnqBgSnBSYDJktgfSNxGZP64oGIx+Lc44qKcU51ESvQz/G9T2VKHm6sKsQCjUc2O+Z40fVjzl6ttzbuPFf0+i4vS/Zj8n7Eu2a5ZdAo3bi8Re+WBJ2y9KFCeNexDqdRL0pA1U1eKpuHTe1KYTCG9z7zY4bQL2pTKCMmGyKgI7judoKwloSiEaOMmLmFGo5ouKUNOkF0zG86lnPZ5ORY1QZj7MGmlBRXSXP//pGez3KqkdkfJO5fSe8IAyscUnYFXFdWdKNtaDoCoFcjpGEYBul9X0ax3mc7nUatRDYfD0qSB8Ef+vzq/hXy1YkVTZxE6QBwNMYuOvr/wLDkxzQkH0NmgdPcTyf7G3RegjtOTH9TDgfPoiLYx077QG0wDztkMM/DgsgPIrxrH4s5hYehIcwtj8UI27BXe3EkIu13DLGEH6m4LjkGGsR2gRPFjRDIAgGXgInUU9W7AF1L/3zhBc3PhGY8yzXL/LAwwAKAewFfeG7CuU8jLjUL4uieaooSp+65ADkF2tlYZQo3lwhAAAAAElFTkSuQmCC");
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
    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAxAAAAdsCAMAAAAIiJpmAAAAsVBMVEUAAAAALU/y9PYATYr///8AY7FhYmLa4eUALlFuiJuxv8kAAwYAKkwAZbQAL1MrKysAZLPb5e5umrwALE5cXF0ACREABgsAZrcAJ0YADhkAFygAIz8AEyEAYa8AO2oAUpIAGi8AWZ8ANmEAM1sAHTQAQHIAIDkAW6MAXqgAQ3kAVpqLjI0ASIAAS4YAYKu4ubvQ0tO+ytSKi4yvsLKAlqdAYntVc4ooTmrv8vTP196fsL0I/vMlAAAf9ElEQVR42uzTMRHAMADEsJQ/6e6/Z8hZwmCf77IDL5l+DUHb9GsI2qZfQ9A2/RqCtunXELRNv4agbfo1BG3TryFom34NQdv0awjapl9D0Db9GoK26dcQtE2/hqBt+jUEbdOvIWibfg1B2/RrCNqmX0PQNv0agrbp1xC0Tb+GoG36NQRt068haJt+DUHb9GsI2qZfQ9A2/RqCtunXELRNv4agbfo1BG3TryFom34NQdv0awjapl9D0Db9GoK26dcQtE2/hqDtZ+duexSFoTAMc8KSNGk1JA1QXi2ICEb8/z9vyWbJWukyMzuTyRae64PGxI/eOaeIkglBwL6RCUHAvpEJQcC+kQlBwL6RCUHAvpEJQcC+kQlBwL6RCUH833iUFpnW7UTrrEgj7gGC2CUeFbpTSkhJv0kplOp0gSq+MYgfb0AQ34KnOheSiNGSFLkuYg8QxE7wtFWCVknVppgTWJn2IM5yQe8g8gxjAkFsXaSVpPdSOvIAQWxXrBV9ACOhMSUQxFbxTNGHqQxnCQSxSWku6eOYzFMPEMTWcC3oHwmNIYHLrhsT5fQJOQ7XCGJTCkWfogoPsDJtRiYYfQqTWJsQxFbwlr5AiyIQxCbwjr5Eh68kEMQG8I7RCikmciImklawHEUgCOet9SCFPDbVcB/9yXgfquYoV6JgHbYmBOE43jKyk4I1g3/rH2VZBpPp6dHX/tCwvzSBInDZ1X2a7IQ8D7d+SuFV2d+GRgqyYq0HCMJhGVlJqvzrHIOlCb8iQVaZB1iZnJUKspCi8ftg1eNUSUkWEjc2IQhnxYrRkjiPffCm3j/bamIKd3EgCFdZD9SyqsvgWXg4HJJkeggDQ31ZDgkcrBGEuwpaksfx8RxDkoR9ffLH0T/V/fTqOYpyPApaYDhGIAgn2RYmcT6Vz6OhH5s8S6Nf0iw/36+HpybKm2VtYgJLE4JwUXukV6Kpn4ZDOVIRxU8bEI+jQtwff5II68pSROcBgnBOSi/MHpLHpY24t8AjfemTYNZbiiBcaUIQ7skZvRDNNfjtEN51zD27OBuCwzwjLEWwHOdqBOGa9KUHYz4ktVj9v8o4vyVzEddmWQR+LoQgXLMYEPJ4C+ce7gX3VvFiSML5HHGWZGIKIwJBuCVl9MqfP+GHKvLeFDXh/P4TIwNGBIJwTsfIJC7zDhSeY+8d4mMwT5RBkInlP9m71x01gQAMwzOhJJPATOgSUA6CgogaNOn931zJwrB2gCq40o75nh9t12T3176dEwcCCEIjnjrLcfPSaccH2cP9IuQYcVSXEdhoQhB62QqqMHi7fkh88iArX8lJE1UIXAeOIDRiqYfUdrKR62mfPMw/rcxGoQwRzMbtpAhCH70lNTs3AwQ/x5N+TsrbnSZ1xBFYViMIfagzJrswWxGZZL9pVx5/rqtx/QaC0ElvxkTbAWJ1sib+pGQ1NERgzoQgdOLRP8kVhHOMyUTBjpufEnWIwD4TgtBFqM6YjHaASMhk7U4TT5WNXLElgCD0oJ7KidKRA8RkQdnEdMxvi8DZHILQh7qEsBOzXUGQGZJ2iFB2XpmN65kQhB7UY2r70u65HsgMW/MTN9RFBG6cQxB6UE8h2M4xa3znkRms5izCKQW9gZMIBKENZU3t5tdmxlQQ8sScaZO59AtW1QhCG8qxnJ04TRA2mSVqT6uVRYTA0RyC0MNBWVOfePNffEhmia/NjKu6DQLbTAhCG5ESxKVdBHhkFr855uapEsSaAILQgLrr6qbtL7RF5rmsmusC6Q3cR4ogdKEEIS9kWl3ITM1F4M7u9sfiaiYEoQvLVn5zd448lpsnWfX3XREEgtCFPxJEgSAegiDejIUg/iN0DIJYirX+5ilTgSAQhMawqP6f0FEIYilKEPaz265Gu+3q0i/YdkUQ2sDB3H+EjkEQizkIekteumHi0o1/wHgxArMv7qNklmg1cHEfnlWGILTRv/xbbjN96+XfeNccgtBD/wYh3mwTefOWELhBCEFoTT2q7m4hjcgMe/UWUgm3kCIIPYw+ZKCafyxnOnjIAILQlbLNJB9DY15DMlkgH2GTU2wyIQg9hYKqc6bZd1Vnq3bG5FKsqRGEnjz6JzdrH2U5fYiISwePskQQmus/7Dhtl9WVNW8Fwc+M3sCFGwhCK1tB1WV1yyaTRBuzW1LjWA5B6Kr/wpTuzSfxpJ/TvWdF0Ft4DymC0EpvzuQmG3mc4JGH+RXvXqmFGROC0Nj4Sxd5YT2cVeK034OXLiIIvXmuOmnKS242kkeLyOQC4pi7FMfUCEJnB3WIcIuN2Sp88gAr+/oGl+JUDkFoLaA9FTdbp4Dc5XUBcYNRikMIBKG3SFCFSLsi0j25IzTMmtxhUrAIS2oEoZmA9uRnWYRTZh75C1/suh52uUux54ogtHcQVOHmO262Nsb4xqkVGRtH9lBmvR4EBggEoZ/AZVSV1UVI18vaIwO8qDqaNdkD7cMKAkFoaCtoT55ys3NNk72n1LDN0qvZ4ee6B5xBIIi34K/ZQBGG45idzTEtxCEMvFoQHkSRlhuz4zhpTnvYGmcQCEJLAR0gTlduNmQU5TmtncvjxrzFrydBKcWKGkG8i/3gL3SWcse8y+HnhFFMmBDEG/EjMTxIlNy5l8OxyukAtsYTXRGEtjyb0SF5deTcHMX58ZKxwR5c7DAhCI3FdLgIllU7kzvDg4O5qz5zwAICQbydkNFhLC+McsO549xuK3FulkaRMzoEL2tHENqztoKOEXlSpbvrxuGfnM21TKsk/8s37HFEjSA0Z+0FHcdEniXFqaou1alIslwwOk4c0AOC0J4sYhxrUZXaAzaYEMQbsLaM0YdhvoQg3p0V0qeLYGyLHhDEm7Bimz3ZgxuihyWC+DC+IIjXCdaCPkGsA/SwRBAfP34aEoJ4JX/P2Pzp0gEXuL44CNnDj64IBPFaVmwLOouwMV1aJoiPOgdZBIJ4OW9P2bzhAT28PAjZQ/OHYSCIBVhBJNjEHMQ6Rg6vD0L2IP9CEMvw47Vgk3IIcRj3nGk9yH8giIVYfhwxwR6rgdU5YHh40sQe5D8RxGL84GALdj8H+xAjh+dN7UF+gSCWY3lhZAvBxmMQbhRiKf0tJvcgv0QQC7LqJg5rKgRjTLnMTwi6PtQ1IIfvMb0H+QGCWJRl+UG8j9Z2U0HThr2O9mHgo4bvM6MH+RGCWJpVV+EFQRyHtTgOAs+3EMP3mtOD/BBBLE+GgRBeZFYP8mMEAe9m3vVL8nMEAW/GuOfnj58jQdTXNX0gCHgvxl2/Proj6sZPGcTHB0YIeDPGfSNBYFH9m507RqkEAIIouA0Lxt7/sgYqTAeiBgr+rsrmAC9rhgf0nSBex32C4IEJAgQBggBBgCBAECAI+P0g3j2fy9qVRyQI8OwYBAGCAEGAIEAQIAh4Iwg4BAGHIOAQBByCgEMQcAgCDkHAIQg4BAGHIOAQBByCgEMQcAgCDkHAIQg4BAGHIOAQBByCgEMQcAgCDkHAIQg4BAGHIOAn5Yf9g78kTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbZ8wdP/jwiCB5PPvbB3B6luA1EQRSkwGGv/C04+5IcUBCJ7kEHXOROt4NL9Wo30eAiCFXfWh2f+ThAc584CEUGw4q0grq9p4hIE57oVRA/XT0FwrHtBfA8TV/L6+RAEp7ofxPV4fodxCYJD3QqiO3g9HoLgUHeC6GciCI4lCPgwiNfvYUIQHMpQDR8fu76Sy7ErB/NiDj6+uvGVg6sbHMzlPhAECAIEAYIAQYAgQBDwiyDgD4KA8v+D8KEydggC3gziZcvECkHAW0FctkzsyL9dgmBG3uWHKZwsTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxME29IEwbY0QbAtTRBsSxMEP9i7g9TKgRiAgggajPv+B55ZJHxpp0AgIFWBwT7Aw2p54d2iEgS7RSUIdotKEOwWlSDYLSpBsFtUgmC3qATBblEJgt2iEgS7RSUIdotKEOwWlSDYLSpBsFtUgmC3qATBblEJgt2iEgS7Rdd7n+f899z3FQRTRdPJriAYKnrec+79flOcRxAM1Q7i+dwLgrHaQSSCYCxBgJEJBAG/GMT3JQgGEwQYmUAQYGQCQYCRCQQBfxHELSPTEQRDtYO4n/ODIBjrB0F8EQSDRc9Tg3gFwUztIN7PyPQIgqnaQcQniCsIpoqec+qBQhDMFD3l08MrCKaKlvdUjyCYKVruOZUgmKkbxI1EEEzV37rWR0EwUjeIyK4gGKq/da0TlCAYqRtEJQiGsnYFP0wBQYAgQBAgCBAECAK+CAISQUAiCEgEAYkgIBEEJIKARBCQCAISQUAiCEgEAYkgIBEEJIKARBCQCAISQUAiCEgEAYkgIBEE/9inYwEAAACAQf7WewdRDjFCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgR+3QsAAAAADDI33rvIMohGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCEg9ulYAAAAAGCQv/XeQZRDIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEMQ+HQsAAAAADPK33juIcogRAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkaI2KdjAQAAAIBB/tZ7B1EOwQgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBsU/HAgAAAACD/K33DqIcGiFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghCD26VgAAAAAYJC/9d5BlEOMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCxD4dCwAAAAAM8rfeO4hyCEYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIiH06FgAAAAAY5G+9dxDl0AgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSxT8cCAAAAAIP8rfcOohxihIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARIvbpWAAAAABgkL/13kGUQzBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCQOzTsQAAAADAIH/rvYMoh0YIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCGIfToWAAAAABjkb713EOUQIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMELFPxwIAAAAAg/yt9w6iHIIRAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAmKfjgUAAAAABvlb7x1EOTRCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAgBIwSMEDBCwAhB7NOxAAAAAMAgf+u9gyiHGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIARAkYIGCFghIidO1hxIwaiKMqDB0XV/39wZkbYKSWLlrMJlO6BGRt5fWmruyygIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQigIQig+Z9BVKS+5PcLQWCmD3KwQ1/CdhEEZtKJVUGEUypHfSdBEJhIZ1YB9vpTOggCE+lMOX86cKxrA0FgJp3J1cFrH1F8ZcJMHwTRhNlUYyQ9Cldm2vtaqiKKIDCMHnlJNemFIDCMnpQrq5zaZEQpXQSBWfQk3OKIiMp+8SAIzKIH5Wht/Ij2YRIERtGDcOxvc18hCIyiBxl27teKeC84uEJgFj3K91DfXw/puO2KaXTA3nfXjvWfB3MY5zwI/xmECQLj6FG955dyCyLsJAgMc7KpLqmPfMdrgU01xvnstmtK4rYrBjsdc+0P5tpCEQRGOdxRL1neRlwd7CEwi57UmvRObdJVWQz3YRrGv4FGj2pNesceSWaWgyAwjA451JSTn5BiIp2p34cMEAQG05nwTwevzURy6gZmOg4i+0FlZRMEJtKZsl3hktIRNgeVYSadqlcFYQeHHWMoncvI9fKdA0FgJP0LgsBU2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBu2hEE7qYdQeBuv9i1l9zIYSAIoghAAEHd/8AzG3/SXrTY8Koy3h0CUlWRZBDqRjIIdSMZhLqRDELdSAahbiSDUDeSQagbySDUjWQQ6kYyCHUjGYS6kQxC3UgGoW4kg1A3kkGoG8kg1I1kEOpGMgh1IxmEupEMQt1IBqFuJINQN5JBqBvJINSNZBDqRjIIdSMZhLqRDELdSAahbiSDUDeSQagbySDUjWQQ6kYyCHUjGYS6kQxC3UgGoW4kg1A3kkGoG8kg1I1kEOpGMgh1IxmEupEMQt1IBqFuJINQN5JBqBtH1hW2QWgYjlw/GISGMQjJIKS/COI2CM3GmW0QGu1owXRvMAhNdvhl2GyD0GCn0/RmGYTmOj3I3WyD0FzH69bvQSyD0DDnQcBHCr5l0jjvBbEwCI30VhALg9BMPHLH2LAwCA3F4YEaAIPQVMDZYQ4MQnPx0L6/dksGobE4YhAajmQQ6sYz91rXf7czhGbjib2uT9sgNBgP7Ou7bRCa61EPaRuExuK1daVlEBqLl+7rp20QmuqdIG6D0FTP/piSj/s0Fi9dvxmEpjIIySD0j3272WkQCMMwqoSQ6IaYcBcssP7r/V+YbW3MqyUpmmnaZs5ZwZ4n3wAzCAJs7gNBgCBAECAI2BEEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEAQEQUAQBARBQBAEBEFAEASEiwuigQsiCBAECAIEAYIAQYAgQBCwIwgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAjnE8Tr88vT7aptiwUxDv3aODZQ0EP37bE57OofJdw8rd7bnVJBjP03SVBA9LC8iD8FsR4J16u7NpQLYuj7YRPCNG2upgbK6Lr7Zue+65qDrpaV8LF62z79bSgYREawSUIRFJIRlAgiZsLxghj64fctzDl9EG04UhDj7wAG7xHMqyKIvSXS1PcNzKkgiO2AMCJYooYgZp7+SRDMqyCI7frImolF6gyiEQSzBAGhjiAmQbBMDUGM+0GMfs0xq44gfHZlodMHcYgfc5yzC5wQtm5QVgaQEeT9vPMIwuY+DqktiB/bvy2Y2FNTEEM/bJOYvg6Smg/sqyiIdQ+OkH62d8c4DcRQFEWlKf4KsgsaM27Y/8pgEEIvKeIIYjmQcwoXU8+V5cLfXPdEQRw9HF4+mzjJgXupOr9C+ieCcILm3jKIXmF//CD0wDS92rFkD/1juWJ5EHpgnlbVBl8uzQ9CDyyzX/z/vUYbxPwg9MA6e50Z9zAO4vXtd0HogYVar7C3bWD+oDI9sF7Vdpv5oyz1wHo3BzF/2LEeWKu+bUMLx+Gf9MDPPGYQHkzhPxIECAIEAYIAQYAgQBAgCPgiCAiCgCAICIKAIAgIgoAgCAiCgCAICIKAIAgIgoAgCAiCgCAImOkdiM69gNVYKqIAAAAASUVORK5CYII=");
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
}`;var zs={};Ge(zs,{actions:()=>vv,adaptiveCard:()=>Cv,containerStyles:()=>yv,default:()=>Ev,factSet:()=>Av,fontTypes:()=>hv,imageSet:()=>xv,imageSizes:()=>bv,separator:()=>fv,spacing:()=>dv,supportsInteractivity:()=>pv,textBlock:()=>mv,textStyles:()=>gv});var dv={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},fv={lineThickness:1,lineColor:"#FF999999"},pv=!0,hv={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:13,default:15,medium:18,large:20,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:13,default:15,medium:18,large:20,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},gv={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},mv={headingLevel:2},yv={default:{borderColor:"#666666",backgroundColor:"#000000",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF000000",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},emphasis:{borderColor:"#33CCCCCC",backgroundColor:"#33FFFFFF",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}}},bv={small:40,medium:68,large:320},vv={maxActions:5,spacing:"default",buttonSpacing:5,showCard:{actionMode:"inline",inlineTopMargin:20},actionsOrientation:"horizontal",actionAlignment:"stretch"},Cv={allowCustomStyle:!1},xv={imageSize:"small",maxImageHeight:100},Av={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:12},Ev={spacing:dv,separator:fv,supportsInteractivity:pv,fontTypes:hv,textStyles:gv,textBlock:mv,containerStyles:yv,imageSizes:bv,actions:vv,adaptiveCard:Cv,imageSet:xv,factSet:Av};var vi=class extends Ht{constructor(){super("Cortana Skills (Classic)","containers/cortana-classic/cortana-container.css")}renderTo(e){this.cardHost.classList.add("cortana-card");let n=document.createElement("div");n.classList.add("cortana-leftside");let r=document.createElement("div");r.classList.add("cortana-topleft");let i=document.createElement("div");i.classList.add("cortana-middleleft");let o=document.createElement("div");o.classList.add("cortana-bottomleft"),n.appendChild(r),n.appendChild(i),n.appendChild(o);let a=document.createElement("div");a.classList.add("cortana-rightside");let l=document.createElement("div");l.classList.add("cortana-header");let s=document.createElement("div");s.classList.add("cortana-searchbox");let c=document.createElement("div");c.classList.add("cortana-searchbox-magnifyingglass");let u=document.createElement("div");u.classList.add("cortana-searchbox-middle");let d=document.createElement("div");d.classList.add("cortana-searchbox-microphone"),s.appendChild(c),s.appendChild(u),s.appendChild(d),a.appendChild(l),a.appendChild(this.cardHost),a.appendChild(s);let f=document.createElement("div");f.classList.add("cortana-frame"),f.appendChild(n),f.appendChild(a),e.classList.add("cortana-outer-frame"),e.appendChild(f);let p=document.createElement("style");p.innerHTML=op,e.appendChild(p)}getHostConfig(){return new ap.HostConfig(zs)}};var cp=Je(lt());var Os={};Ge(Os,{actions:()=>Bv,containerStyles:()=>Dv,default:()=>Ov,factSet:()=>zv,fontSizes:()=>Pv,fontTypes:()=>kv,fontWeights:()=>Fv,imageSet:()=>Mv,imageSizes:()=>Iv,separator:()=>wv,spacing:()=>Sv,textBlock:()=>_v,textStyles:()=>Tv});var Sv={small:4,default:8,medium:12,padding:16,large:20,extraLarge:32},wv={lineThickness:1,lineColor:"#E6E6E6"},Iv={small:32,medium:48,large:96},kv={default:{fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"Courier New, Courier, monospace",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},Tv={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},_v={headingLevel:2},Pv={small:12,default:14,medium:16,large:18,extraLarge:24},Fv={lighter:200,default:400,bolder:600},Dv={default:{borderColor:"#CCCCCC",backgroundColor:"#ffffff",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},emphasis:{borderColor:"#717171",backgroundColor:"#F2F2F2",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#E5F1FA",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},good:{borderColor:"#69E569",backgroundColor:"#107C10",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D4E7D4"},dark:{default:"#000000",subtle:"#073707"},light:{default:"#FFFFFF",subtle:"#D4E7D4"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},attention:{borderColor:"#FF764C",backgroundColor:"#C50F1F",foregroundColors:{default:{default:"#FFFFFF",subtle:"#F4D4D7"},dark:{default:"#000000",subtle:"#58060D"},light:{default:"#FFFFFF",subtle:"#F4D4D7"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FCE100",foregroundColors:{default:{default:"#000000",subtle:"#716500"},dark:{default:"#000000",subtle:"#716500"},light:{default:"#FFFFFF",subtle:"#FEF9D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}}},Bv={maxActions:5,spacing:"Default",buttonSpacing:12,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"Emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Stretch",iconSize:20,iconPlacement:"leftOfTitle"},Mv={imageSize:"Medium",maxImageHeight:100},zv={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:12},Ov={spacing:Sv,separator:wv,imageSizes:Iv,fontTypes:kv,textStyles:Tv,textBlock:_v,fontSizes:Pv,fontWeights:Fv,containerStyles:Dv,actions:Bv,imageSet:Mv,factSet:zv};var Rs={};Ge(Rs,{actions:()=>Yv,containerStyles:()=>Wv,default:()=>Qv,factSet:()=>jv,fontSizes:()=>Gv,fontTypes:()=>Nv,fontWeights:()=>$v,imageSet:()=>Uv,imageSizes:()=>Vv,separator:()=>Lv,spacing:()=>Rv,textBlock:()=>qv,textStyles:()=>Hv});var Rv={small:4,default:8,medium:12,padding:16,large:20,extraLarge:32},Lv={lineThickness:1,lineColor:"#505050"},Vv={small:32,medium:48,large:96},Nv={default:{fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"Courier New, Courier, monospace",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},Hv={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},qv={headingLevel:2},Gv={small:12,default:14,medium:16,large:18,extraLarge:24},$v={lighter:200,default:400,bolder:600},Wv={default:{borderColor:"#666666",backgroundColor:"#222222",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},emphasis:{borderColor:"#717171",backgroundColor:"#2F2F2F",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#1B3345",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},good:{borderColor:"#69E569",backgroundColor:"#92C353",foregroundColors:{default:{default:"#000000",subtle:"#415725"},dark:{default:"#000000",subtle:"#415725"},light:{default:"#FFFFFF",subtle:"#EBF4E0"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},attention:{borderColor:"#FF764C",backgroundColor:"#D74553",foregroundColors:{default:{default:"#000000",subtle:"#601F25"},dark:{default:"#000000",subtle:"#601F25"},light:{default:"#FFFFFF",subtle:"#F7DEE0"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#F8D22A",foregroundColors:{default:{default:"#000000",subtle:"#6F5E12"},dark:{default:"#000000",subtle:"#6F5E12"},light:{default:"#FFFFFF",subtle:"#FDF7D9"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}}},Yv={maxActions:5,spacing:"Default",buttonSpacing:12,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"Emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Stretch",iconSize:20,iconPlacement:"leftOfTitle"},Uv={imageSize:"Medium",maxImageHeight:100},jv={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0,maxWidth:150},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:12},Qv={spacing:Rv,separator:Lv,imageSizes:Vv,fontTypes:Nv,textStyles:Hv,textBlock:qv,fontSizes:Gv,fontWeights:$v,containerStyles:Wv,actions:Yv,imageSet:Uv,factSet:jv};var sp=`.ac-media-poster {}

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
}`;var lp=`.ac-media-poster {}

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
    height: 32px;
    background-color: white;
    color: #6264A7;
    border: 2px solid #BFC0DA;
    border-radius: 4px;
}

.ac-pushButton:hover {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

.ac-pushButton:active {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
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

@media (forced-colors: none) {
    .ac-pushButton.expanded {
        background-color: #6264A7;
        border: 2px solid #6264A7;
        color: white;
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
    background-color: #F3F2F1;
    border: 1px solid #F3F2F1;
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
}`;var Ci=class extends Nt{constructor(){super("Cortana Skills","cortana-container",Os,Rs,"#F6F6F6","#201E1F")}renderTo(e){var n=document.createElement("div");n.appendChild(this.cardHost),e.appendChild(n);let r=document.createElement("style");this.colorTheme=="Dark"?r.innerHTML=sp:r.innerHTML=lp,e.appendChild(r)}get targetVersion(){return cp.Versions.v1_2}get enableDeviceEmulation(){return!0}};var ae=Je(lt());var up=`
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
    content: 'E70D';
}

.ac-pushButton.expandable.expanded:after {
    content: 'E70E';
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
}`;var Ls={};Ge(Ls,{actions:()=>oC,adaptiveCard:()=>aC,containerStyles:()=>iC,default:()=>cC,factSet:()=>lC,fontTypes:()=>tC,imageSet:()=>sC,imageSizes:()=>eC,preExpandSingleShowCardAction:()=>Jv,separator:()=>Zv,spacing:()=>Kv,supportsInteractivity:()=>Xv,textBlock:()=>rC,textStyles:()=>nC});var Jv=!0,Xv=!0,Kv={small:10,default:20,medium:30,large:40,extraLarge:50,padding:20},Zv={lineThickness:1,lineColor:"#EEEEEE"},eC={small:40,medium:80,large:160},tC={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},nC={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},rC={headingLevel:2},iC={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},emphasis:{borderColor:"#666666",backgroundColor:"#08000000",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}}},oC={maxActions:5,spacing:"default",buttonSpacing:10,showCard:{actionMode:"inline",inlineTopMargin:16},actionsOrientation:"horizontal",actionAlignment:"left"},aC={allowCustomStyle:!0},sC={imageSize:"medium",maxImageHeight:100},lC={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:10},cC={preExpandSingleShowCardAction:Jv,supportsInteractivity:Xv,spacing:Kv,separator:Zv,imageSizes:eC,fontTypes:tC,textStyles:nC,textBlock:rC,containerStyles:iC,actions:oC,adaptiveCard:aC,imageSet:sC,factSet:lC};var xi=class extends Ht{constructor(){super("Outlook Actionable Messages","containers/outlook/outlook-container.css"),this.actionsRegistry.unregister("Action.Submit"),this.actionsRegistry.register("Action.Http",ae.HttpAction)}renderTo(e){this.cardHost.classList.add("outlook-frame"),e.appendChild(this.cardHost);let n=document.createElement("style");n.innerHTML=up,e.appendChild(n)}initialize(){super.initialize(),ae.GlobalSettings.useMarkdownInRadioButtonAndCheckbox=!1}parsePadding(e){if(e){if(typeof e=="string"){var n=ae.parseEnum(ae.Spacing,e,ae.Spacing.None);return new ae.PaddingDefinition(n,n,n,n)}else if(typeof e=="object")return new ae.PaddingDefinition(ae.parseEnum(ae.Spacing,e.top,ae.Spacing.None),ae.parseEnum(ae.Spacing,e.right,ae.Spacing.None),ae.parseEnum(ae.Spacing,e.bottom,ae.Spacing.None),ae.parseEnum(ae.Spacing,e.left,ae.Spacing.None))}return null}parseElement(e,n,r){if(e instanceof ae.Container&&typeof n.rtl=="boolean"&&(e.rtl=n.rtl),e instanceof ae.AdaptiveCard){var i=e,o=[];if(i.resources={actions:o},typeof n.resources=="object"){var a=n.resources.actions;for(let s=0;s<a.length;s++){let c=this.actionsRegistry.createInstance(a[s].type,r.targetVersion);c&&(c.parse(a[s],r),c.setParent(i),o.push(c))}}}if(e instanceof ae.Image&&(e.backgroundColor=n.backgroundColor),e instanceof ae.Container){var l=this.parsePadding(n.padding);l&&(e.padding=l)}if(e instanceof ae.ColumnSet){var l=this.parsePadding(n.padding);l&&(e.padding=l)}}anchorClicked(e,n){var r=/^action:([a-z0-9]+)$/ig,i=e.getRootElement(),o=r.exec(n.href);if(o){var a=o[1];if(i){var l=i.resources.actions;for(let s=0;s<l.length;s++)if(l[s].id==a)return l[s].execute(),!0}}return!1}getHostConfig(){return new ae.HostConfig(Ls)}get targetVersion(){return ae.Versions.v1_4}get enableDeviceEmulation(){return!0}};var pp=Je(lt());var Vs={};Ge(Vs,{actions:()=>vC,adaptiveCard:()=>CC,choiceSetInputValueSeparator:()=>uC,containerStyles:()=>bC,default:()=>EC,factSet:()=>AC,fontTypes:()=>gC,imageSet:()=>xC,imageSizes:()=>hC,separator:()=>pC,spacing:()=>fC,supportsInteractivity:()=>dC,textBlock:()=>yC,textStyles:()=>mC});var uC=",",dC=!0,fC={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},pC={lineThickness:1,lineColor:"#EEEEEE"},hC={small:32,medium:52,large:100},gC={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},mC={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},yC={headingLevel:2},bC={default:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#CCCCCC",backgroundColor:"#ffffff"},emphasis:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#666666",backgroundColor:"#fff9f8f7"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}}},vC={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},CC={allowCustomStyle:!1},xC={imageSize:"Medium",maxImageHeight:100},AC={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},EC={choiceSetInputValueSeparator:uC,supportsInteractivity:dC,spacing:fC,separator:pC,imageSizes:hC,fontTypes:gC,textStyles:mC,textBlock:yC,containerStyles:bC,actions:vC,adaptiveCard:CC,imageSet:xC,factSet:AC};var Ns={};Ge(Ns,{actions:()=>BC,adaptiveCard:()=>MC,choiceSetInputValueSeparator:()=>SC,containerStyles:()=>DC,default:()=>RC,factSet:()=>OC,fontTypes:()=>TC,imageSet:()=>zC,imageSizes:()=>FC,separator:()=>kC,spacing:()=>IC,supportsInteractivity:()=>wC,textBlock:()=>PC,textStyles:()=>_C});var SC=",",wC=!0,IC={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},kC={lineThickness:1,lineColor:"#EEEEEE"},TC={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},_C={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},PC={headingLevel:2},FC={small:32,medium:52,large:100},DC={default:{foregroundColors:{default:{default:"#ffffffff",subtle:"#bfffffff"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}},borderColor:"#CCCCCC",backgroundColor:"#ff2d2c2c"},emphasis:{foregroundColors:{default:{default:"#ffffffff",subtle:"#bfffffff"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}},borderColor:"#666666",backgroundColor:"#ff292828"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}}},BC={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},MC={allowCustomStyle:!1},zC={imageSize:"Medium",maxImageHeight:100},OC={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},RC={choiceSetInputValueSeparator:SC,supportsInteractivity:wC,spacing:IC,separator:kC,fontTypes:TC,textStyles:_C,textBlock:PC,imageSizes:FC,containerStyles:DC,actions:BC,adaptiveCard:MC,imageSet:zC,factSet:OC};var dp=`.teams-frame {
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
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAolBMVEUAeNf///8Dedfs9Pz9/f75/P4vkN6Lwezx+PwWg9pLn+P1+f0rjt41lN8Nftnj8Prf7vrW6fiaye8RgdkHe9jJ4vbO5fcmjN0iitwahtvn8vuVxu58uup1tuk/meEeh9zS5/hDm+Hu9vzb6/mv1PKgzfA6l+Cq0vFhq+ZcqOVSo+TD3/W11/OQxO1rsOdlredXpuSlz/GCvOtvs+i52fSGv+wsjfdCAAAFzklEQVR42uzQMY7CMBAAQC9IVIgCAs21oBTQIPH/t12orBSO7OMa4pknTAIAAAAAAAAAAAAAAAAAAAAAAAAAAAB6NIy79JndOKQ+DK/Y7j672sarj63pKgpb9VfRx9bwiChsNVxNHuvfel8Vthqu+th6XxW2Gq762MpXeav9qo+tfJW32q/62NpcI8tb7VfZdZPWKV+1b+WrPrbyVftWvupjazNGFLfar7JxfVuFq2lrn+rsp6s+topXcT+kOod79LG1fGVrdvVsumrfeq5na/nKVv2VrdnVLQrOh9TqcI6C2xq2lq9s1V/Zmmm4+nwrfbdjFFxO6a9Olyg4pm+2eGWr/spW/ZWtmZ+Kq//f+mXvXpdSh6EwDH+hirRysI4ICCJFZBA5jeL939oe/zCDO6s0NKFfbN8LAHycaTmsJEP4mGg1EazMtCZ/SUu2CmGj8A9prXNY5dVaw69SrSqtbFZxCHuF8V/QuslplV/rBr6UalVpFWQFDDzX+lZCrwPYb/CqhL7B30mrSuvQp4GVa61PcJfJqtJKt7p7gbte7nzUGhlaudcagbXsVpWWiVXZtcysyq31LFr1cYn6otYz2BKtOn1cpn7HF63irfzRYrDyReuLwgroiVpfYEm26uFEpdMSrZ56uHS9J26tDZFVmtYGxcdlxa21uZKsmiimpqR1VbTWls4qTWuLApOtgiaKqxkwanFacWotSK3StBYoJtmqjqKrk2kxW7FpvVNbpWm9wyC3VlMOK6A+ZdGSrVpgqUWi5YMVi9ZOsmqYWdV6SdQKka2wFSW9mplWQ9LaQYrUav42VT89Prdxqvbzo/pp+jb3S2t3bcMqnKlDwQLpLQJ1aBba0Lq+jNZStJoje/XO8Th2DXK14zHxTh3Zm4taS/wfp1U/UMfdGyxrCfqeaEVWrB5i9bstpLbqd/GDFa0Ibms2RKucP50FbehrB8JPW7m1Gk04rav03Y5h0ENgMJMwUhrZBxg0vlX6unBZJFrlf5gJ9E2UpghWtCI47F62yr8I6gW6XuTFTPm17uGwVytW2Ctd+kcZK117WNF6hcNutVYJDJsoXTvo2ildjzAs0b90OKwh34Lz3yaW0LWUL8353/I04LBYWdGaKV0t6GopXTMrViqGw+6VFa2R9kHa0NXW/pmj3FbuL/CJErQSmNRUmlbQt1KamlasVAKXfSh9t0nui9YSyHzR6ppe3PV9wGm9qRWtseaFm/yDxlaspj24Lbm2ojUUPqdl+zw6tGJ1ncB1kRWt2l64RWR5yn3NilUEOfdaYxOtoxtrMEda8+DoFmZiNTa04tRCFB9e9zBEeuHw8JxxBI+srGnVknW3M41XmwFON9is4mmnu05qflmlazHFYJX+RTxP5379XkYtFisftHis0rQ4xh1aRFbAjlrLzk/RdCMPWfNuJMQXLT4r3jEtjsEsP7Q4rThHS3mGSfmHlpnGlNnH4bkG4Lm1uK24lvDwLdrhXRzGuByMVcsHK5YFraxLWH+3UcVr8S6O5luEz7zsnk3LJ6tcG4eUYKsQpi1p+Deh4dnsqO+d1VnbaJVo4ywOLT+tMmpVVudtKlmybSTzbVdatg1KzbQqq8xalZWJVmVlsC38ADYbeLkR/BkHDpT4iAEDrcrK9JCUkh+LYqBVWRkd7FQdfGWgVVmZaFVWJsccVgcb/mvvjm0UCIIoiH6t0x7OLRmAwCX/5E5Y6zDStHDQznshVALVGWhaZnZqadWZ/tr8dnbSBtKdUbk1eWeBb3rfqaVVp5ZW87Wuf51W1xVaJfdhrUtmXYat7jmVbVxrz5x93GrLuQxrVWbVKq2GtSrzapVWyfaaaNWv9Tpjq4+1Kj21SqsPtSpdtUqrZHtMtOrUepy31VHraNVWq7Q6ah2t2mqVVsl2G7Tq17qdvdW71qDVvFql1bvWoNW8WqVV3rUq36lVWiX7M9967gEAAAAAAAAAAAAAAAAAAAAAAAAAAOC3/QPdan8SQq7+dgAAAABJRU5ErkJggg==");
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
}`;var fp=`.teams-frame {
    display: flex;
}

.teams-botNameAndTime {
    color: black;
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
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAolBMVEUAeNf///8Dedfs9Pz9/f75/P4vkN6Lwezx+PwWg9pLn+P1+f0rjt41lN8Nftnj8Prf7vrW6fiaye8RgdkHe9jJ4vbO5fcmjN0iitwahtvn8vuVxu58uup1tuk/meEeh9zS5/hDm+Hu9vzb6/mv1PKgzfA6l+Cq0vFhq+ZcqOVSo+TD3/W11/OQxO1rsOdlredXpuSlz/GCvOtvs+i52fSGv+wsjfdCAAAFzklEQVR42uzQMY7CMBAAQC9IVIgCAs21oBTQIPH/t12orBSO7OMa4pknTAIAAAAAAAAAAAAAAAAAAAAAAAAAAAB6NIy79JndOKQ+DK/Y7j672sarj63pKgpb9VfRx9bwiChsNVxNHuvfel8Vthqu+th6XxW2Gq762MpXeav9qo+tfJW32q/62NpcI8tb7VfZdZPWKV+1b+WrPrbyVftWvupjazNGFLfar7JxfVuFq2lrn+rsp6s+topXcT+kOod79LG1fGVrdvVsumrfeq5na/nKVv2VrdnVLQrOh9TqcI6C2xq2lq9s1V/Zmmm4+nwrfbdjFFxO6a9Olyg4pm+2eGWr/spW/ZWtmZ+Kq//f+mXvXpdSh6EwDH+hirRysI4ICCJFZBA5jeL939oe/zCDO6s0NKFfbN8LAHycaTmsJEP4mGg1EazMtCZ/SUu2CmGj8A9prXNY5dVaw69SrSqtbFZxCHuF8V/QuslplV/rBr6UalVpFWQFDDzX+lZCrwPYb/CqhL7B30mrSuvQp4GVa61PcJfJqtJKt7p7gbte7nzUGhlaudcagbXsVpWWiVXZtcysyq31LFr1cYn6otYz2BKtOn1cpn7HF63irfzRYrDyReuLwgroiVpfYEm26uFEpdMSrZ56uHS9J26tDZFVmtYGxcdlxa21uZKsmiimpqR1VbTWls4qTWuLApOtgiaKqxkwanFacWotSK3StBYoJtmqjqKrk2kxW7FpvVNbpWm9wyC3VlMOK6A+ZdGSrVpgqUWi5YMVi9ZOsmqYWdV6SdQKka2wFSW9mplWQ9LaQYrUav42VT89Prdxqvbzo/pp+jb3S2t3bcMqnKlDwQLpLQJ1aBba0Lq+jNZStJoje/XO8Th2DXK14zHxTh3Zm4taS/wfp1U/UMfdGyxrCfqeaEVWrB5i9bstpLbqd/GDFa0Ibms2RKucP50FbehrB8JPW7m1Gk04rav03Y5h0ENgMJMwUhrZBxg0vlX6unBZJFrlf5gJ9E2UpghWtCI47F62yr8I6gW6XuTFTPm17uGwVytW2Ctd+kcZK117WNF6hcNutVYJDJsoXTvo2ildjzAs0b90OKwh34Lz3yaW0LWUL8353/I04LBYWdGaKV0t6GopXTMrViqGw+6VFa2R9kHa0NXW/pmj3FbuL/CJErQSmNRUmlbQt1KamlasVAKXfSh9t0nui9YSyHzR6ppe3PV9wGm9qRWtseaFm/yDxlaspj24Lbm2ojUUPqdl+zw6tGJ1ncB1kRWt2l64RWR5yn3NilUEOfdaYxOtoxtrMEda8+DoFmZiNTa04tRCFB9e9zBEeuHw8JxxBI+srGnVknW3M41XmwFON9is4mmnu05qflmlazHFYJX+RTxP5379XkYtFisftHis0rQ4xh1aRFbAjlrLzk/RdCMPWfNuJMQXLT4r3jEtjsEsP7Q4rThHS3mGSfmHlpnGlNnH4bkG4Lm1uK24lvDwLdrhXRzGuByMVcsHK5YFraxLWH+3UcVr8S6O5luEz7zsnk3LJ6tcG4eUYKsQpi1p+Deh4dnsqO+d1VnbaJVo4ywOLT+tMmpVVudtKlmybSTzbVdatg1KzbQqq8xalZWJVmVlsC38ADYbeLkR/BkHDpT4iAEDrcrK9JCUkh+LYqBVWRkd7FQdfGWgVVmZaFVWJsccVgcb/mvvjm0UCIIoiH6t0x7OLRmAwCX/5E5Y6zDStHDQznshVALVGWhaZnZqadWZ/tr8dnbSBtKdUbk1eWeBb3rfqaVVp5ZW87Wuf51W1xVaJfdhrUtmXYat7jmVbVxrz5x93GrLuQxrVWbVKq2GtSrzapVWyfaaaNWv9Tpjq4+1Kj21SqsPtSpdtUqrZHtMtOrUepy31VHraNVWq7Q6ah2t2mqVVsl2G7Tq17qdvdW71qDVvFql1bvWoNW8WqVV3rUq36lVWiX7M9967gEAAAAAAAAAAAAAAAAAAAAAAAAAAOC3/QPdan8SQq7+dgAAAABJRU5ErkJggg==");
    background-size: 50px 50px;
    visibility: visible;
    transform: rotate(-60deg);
}

.teams-inner-frame {
    background-color: white;
    border-radius: 4px;
    padding: 24px;
    min-width: 400px;
    max-width: 726px;
}

.teams-card {
    border: 2px solid #F1F0EF;
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
    height: 32px;
    background-color: white;
    color: #6264A7;
    border: 2px solid #BFC0DA;
    border-radius: 4px;
}

.ac-pushButton:hover {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
}

.ac-pushButton:active {
    background-color: #6264A7;
    border: 2px solid #6264A7;
    color: white;
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

@media (forced-colors: none) {
    .ac-pushButton.expanded {
        background-color: #6264A7;
        border: 2px solid #6264A7;
        color: white;
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
    background-color: #F3F2F1;
    border: 1px solid #F3F2F1;
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
    color: #999999;
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
}`;var Ai=class extends Nt{constructor(){super("Microsoft Teams","teams-container",Vs,Ns,"#F6F6F6","#201E1F")}renderTo(e){var n=document.createElement("div");n.className="teams-frame";var r=document.createElement("div");r.className="teams-hexagon-outer";var i=document.createElement("div");i.className="teams-hexagon-inner";var o=document.createElement("div");o.className="teams-bot-logo",r.appendChild(i),i.appendChild(o),n.appendChild(r);let a=document.createElement("div");a.className="teams-inner-frame",this.cardHost.classList.add("teams-card");let l=document.createElement("div");l.className="teams-botNameAndTime",l.innerText="Test Bot    2:36 PM",a.appendChild(l),a.appendChild(this.cardHost),n.appendChild(a),e.appendChild(n);let s=document.createElement("style");this.colorTheme=="Dark"?s.innerHTML=dp:s.innerHTML=fp,e.appendChild(s)}get targetVersion(){return pp.Versions.v1_4}get enableDeviceEmulation(){return!0}};var Si=Je(lt());var hp=`.ac-media-poster {}

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
    color: #005a9e;
}

a.ac-anchor:visited {
    color: #005a9e;
}

a.ac-anchor:link:active {
    color: #004d84;
}

a.ac-anchor:visited:active {
    color: #004d84;
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
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Calibri", sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #DDDDDD;
    background-color: #FFFFFF;
    color: #0063B1;
}

.ac-pushButton:hover,
.ac-pushButton:focus {
    border-color: #0063B1;
}

.ac-pushButton.style-positive {
    background-color: #0078D7;
    color: white;
}

.ac-pushButton.style-positive:hover, .ac-pushButton.style-positive:active {
    background-color: #006ABC;
}

.ac-pushButton.style-destructive {
    background-color: #E50000;
    color: white;
}

.ac-pushButton.style-destructive:hover, .ac-pushButton.style-destructive:active {
    background-color: #BF0000;
}

.ac-pushButton-disabled {
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Calibri", sans-serif;
    font-size: 14px;
    font-weight: 600;
    padding: 10px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid #EEEEEE;
    background-color: #EEEEEE;
    color: #666666;
}

.ac-quickActionButton {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    font-family: "Calibri", sans-serif;
    font-size: 14px;
    font-weight: 600;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: none;
    background-color: #DDDDDD;
}

.ac-input {
    font-family: "Calibri", sans-serif;
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

.ac-input-container {
    display: flex;
    align-items: flex-end;
}

.ac-input.ac-textInput {
    resize: none;
}

.ac-input.ac-textInput.ac-multiline {
    height: 72px;
}

.ac-input.ac-textInput, .ac-input.ac-numberInput, .ac-input.ac-dateInput, .ac-input.ac-timeInput, .ac-input.ac-multichoiceInput {
    border: 1px solid #dddddd;
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
    font-family: "Calibri", sans-serif;
    font-size: 13.3px;
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
    font-family: "Calibri", sans-serif;
    font-size: 13.3px;
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

.webChatOuterContainer {
    background-color: #eceff1;
    border: 1px solid #e6e6e6;
    padding: 8px;
    width: 416px;
    border-radius: 4px;
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
}`;var Hs={};Ge(Hs,{actions:()=>YC,adaptiveCard:()=>UC,containerStyles:()=>$C,default:()=>JC,factSet:()=>QC,fontTypes:()=>HC,imageSet:()=>jC,imageSizes:()=>WC,separator:()=>VC,spacing:()=>LC,supportsInteractivity:()=>NC,textBlock:()=>GC,textStyles:()=>qC});var LC={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},VC={lineThickness:1,lineColor:"#EEEEEE"},NC=!0,HC={default:{fontFamily:"Calibri, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},qC={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},GC={headingLevel:2},$C={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#0063B1",subtle:"#0063B1"},attention:{default:"#EC130E",subtle:"#DDEC130E"},good:{default:"#028A02",subtle:"#DD028A02"},light:{default:"#646464",subtle:"#767676"},warning:{default:"#B75C00",subtle:"#DDB75C00"}}},emphasis:{borderColor:"#666666",backgroundColor:"#F9F9F9",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#1F6BF1",subtle:"#881F6BF1"},attention:{default:"#E31B13",subtle:"#DDE31B13"},good:{default:"#0D860A",subtle:"#DD0D860A"},warning:{default:"#BD5400",subtle:"#DDBD5400"},light:{default:"#737373",subtle:"#DD737373"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#D7E7FA",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#145FDD",subtle:"#88145FDD"},attention:{default:"#C42C07",subtle:"#DDC42C07"},good:{default:"#0B7814",subtle:"#DD0B7814"},warning:{default:"#935A10",subtle:"#DD935A10"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#6E6E6E",subtle:"#336E6E6E"},accent:{default:"#2168E4",subtle:"#882168E4"},attention:{default:"#CC3300",subtle:"#DDCC3300"},good:{default:"#0F8109",subtle:"#DD0F8109"},warning:{default:"#9A630D",subtle:"#DD9A630D"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#5A5A5A",subtle:"#335A5A5A"},accent:{default:"#0854C5",subtle:"#880854C5"},attention:{default:"#A92E0E",subtle:"#DDA92E0E"},good:{default:"#256824",subtle:"#DD256824"},warning:{default:"#775502",subtle:"#DD775502"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#0F60DC",subtle:"#880F60DC"},attention:{default:"#BF3505",subtle:"#DDBF3505"},good:{default:"#207725",subtle:"#DD207725"},warning:{default:"#866107",subtle:"#DD866107"}}}},WC={small:40,medium:80,large:160},YC={maxActions:100,spacing:"default",buttonSpacing:8,showCard:{actionMode:"inline",inlineTopMargin:8},actionsOrientation:"vertical",actionAlignment:"stretch"},UC={allowCustomStyle:!1},jC={imageSize:"medium",maxImageHeight:100},QC={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8},JC={spacing:LC,separator:VC,supportsInteractivity:NC,fontTypes:HC,textStyles:qC,textBlock:GC,containerStyles:$C,imageSizes:WC,actions:YC,adaptiveCard:UC,imageSet:jC,factSet:QC};var Ei=class extends Ht{constructor(){super("Bot Framework WebChat","containers/webchat/webchat-container.css")}renderTo(e){this.cardHost.classList.add("webChatOuterContainer");let n=document.createElement("div");n.className="webChatInnerContainer",n.appendChild(this.cardHost),e.appendChild(n);let r=document.createElement("style");r.innerHTML=hp,e.appendChild(r)}getHostConfig(){return new Si.HostConfig(Hs)}get targetVersion(){return Si.Versions.v1_3}};var gp=`@font-face {
  font-family: 'Fluent MDL2 Hybrid Icons';
  src: url('data:application/octet-stream;base64,d09GRgABAAAAAAZAAAsAAAAADOgAAQKPAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAEcAAABgLy9kOmNtYXAAAAFQAAAAMgAAAUIADejkZ2FzcAAAAYQAAAAMAAAADAAIABtnbHlmAAABkAAAAH4AAACAvsbQ2mhlYWQAAAIQAAAANAAAADYg6JJSaGhlYQAAAkQAAAAcAAAAJA+nCKlobXR4AAACYAAAAAgAAAAIDSoBpmxvY2EAAAJoAAAABgAAAAYAQAAWbWF4cAAAAnAAAAAWAAAAIAAFABduYW1lAAACiAAAA6MAAAlP+y5SgHBvc3QAAAYsAAAAFAAAACD/uAA0eJxjYGGbyjiBgZWBgdWY5QwDA8NMCM10hiGNSQgoysXIxAgGQDkGAQYE8A1WUGBweG733I4DzIeQDGB1LBCeAgMDABbmCPYAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP5zu///IaTEYahKBkY2hhEPAHj+B9YAAAABAAIACAAK//8AD3icFYkxDoJAEEX/MCwby82IJtstJmuPxpqaw1juCagsxTNwAArrPZcicWj+z3sPBSagHEwCwwLkgjPBhXJYGu5/ffE26fMw6fWdNRIoW1RArXC9XdrjjnQP9d5SdWrOFAnRe6GRR/E+ytLpydoJZ6X1zk/ZumqhLAD+F08ZHAAAeJxjYGRgYGBk6v8Q/Loint/mKwM3BwMI3OUz1ALTYsJzGZYxMLAzsIG47AxMIAoAKBYIkXicY2BkYOBgAAEguYxhGTsDAyMDKmACAB8+AWgFKgCmCAABAAAAABYAQAAAeJxjYGRgYGBiEANiEGBkQAMAAtoAHQAAeJy1VMtuGzcUvbKUR5HGQIu26JKLFnAMYWQ5u2QVBHCzcRdGECDoamZIaQiMhgSH48Fs200/oEC/IehX9PEH/Yiu+g89l+RIcqwGRoF6IPLwvu/hpYnoi8kxTSj+PcUv4gl9hlPER/SAvkl4Cvm3Cc+Ai4Tv0cd0nfB9+pS+T/ghfU4/JfyITuldwo8nf9CfCR/T6dHPiDyZfYSTPPo14QmdTL9O+IiOp5cJTyH/LuEZ8A8J36Mvp78kfJ++mv6e8EM6nf6V8CN6Pfsk4cfTH2cq4WN6/eDv396J87PzpbjUpTOtWXnx0jhrXO61aTLxoq7FlV5XvhVXqlXuWsnsou5U48VFXjhdilcDNnml1l2du0OqQ7I3yrWIL5bZ2TLqozpqD9ZSeW+fLRZ932ebUZ+VZrPwgzVrl9tqWKxM49vFzr3trK21koIVmXhrOrHJB9G1SvhKt0EsvBGlU7lXcyF1a+t8mIu8kcI6DW0JEy4/b4VVbqO9R7higL8StS5Vw7GgaIVxI1hxhjnvbLUrxzoju9LPBRMJ3zn7jAl0I/pKl9VeZT2S6qasOwnWt9Wbph7EiX4i1KZALTtzRPhQtcFc6mYtnGo9yGZWdwnYfRvreWDgRCOLVxu+AqeRVZq+qU0ub7KXR6qU43YMUmHtvO28kIrbZJtK1fYmo5itZkjmfCEICH4qXWjUnN39tvG8BJ3TGX5LoEvSVJIjQy1+K/KQvQRyZMOaQ6KBGsqgeUE1PkFXkK2pgq4NJ4Vdwfoaq4TlBaw64CbEu0CUAlrOJOgVDekkg+caljUs3J297mr3JtTUpvoF+s3Q9/KG/773vu/deWEWPKTPaIGvD19Gm1v+Gc4G8gXwEKKsQxyLCAOkqxCNGV0czN6iZouvho5ZFlsPvpm3wB32DSIO2LtwIwLaCvbtnjXLDFaOr0IfiuY4y2Bnw10MQZLDnvPYwEn0LVOUkf08xLaBae7ZBx17FaEOzs911KEj9hrrih7szXy+L1lte5hvz2OsQ+zYcJbwKXGeB77iRMa8822e9zvQYTb6wFOJ9TBnfeqUrcswPzLN+m3u2acO6AT2T7Ar6IrEy6HosYb/yu0uugyR1pC58CZ9muxxVg91MGa/XdfzvRngTmIvPuQbXwHHj71KSPrQuYH83zqNs5ffmCoV7sWkNXYVcRdeVhc8udrxNsc4bFnD4kMzGv9vNelmdtHHF6ITyzw/XG8RmI53+z+87X8AE9YWxQB4nGNgZgCD/1sZjBgwARMALMQB7A==') format('truetype');
}

/* base */
.ac-actionSet {
  flex-direction: column !important;
}

.ac-actionSet .ac-pushButton {
  height: 32px;
}
.ac-actionSet .ac-pushButton:not(:last-of-type) {
  margin-bottom: 8px;
}

.ac-actionSet .style-default {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #7579EB;
  background-color: #ffffff;
  color: #5B5FC7;
}
.ac-actionSet .style-default:active:hover {
  background-color: #edebe9;
}
.ac-actionSet .style-default:hover {
  background-color: #f3f2f1;
}

.ac-actionSet .style-positive {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: transparent;
  background-color: #5B5FC7;
  color: #ffffff;
}
.ac-actionSet .style-positive:active:hover {
  background-color: #444791;
  color: #ffffff;
}
.ac-actionSet .style-positive:hover {
  background-color: #4F52B2;
  color: #ffffff;
}

.ac-actionSet .style-destructive {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #A80000;
  background-color: #ffffff;
  color: #A80000;
}
.ac-actionSet .style-destructive:active:hover {
  background-color: #edebe9;
}
.ac-actionSet .style-destructive:hover {
  background-color: #f3f2f1;
}

.ac-adaptiveCard {
  background-color: unset !important;
}

/* quickLookCard */
.ac-container {
  border: none !important;
}
.ac-image.ac-selectable, .ac-container.ac-selectable, .ac-columnSet.ac-selectable {
  cursor: pointer;
}
.ac-container iframe {
  border: none;
}

:global(.ac-media-playButton-arrow) {
  width: unset !important;
  height: unset !important;
  border-width: 15px 0 15px 21px !important;
  color: #5B5FC7;
}
.ac-textBlock *:first-child {
  box-sizing: border-box;
}

/* inserted by getStyledControlsForQuickView */
.ac-input.ac-choiceSetInput-multiSelect > div:not(:last-child) {
  margin-bottom: 8px;
}
.ac-input.ac-choiceSetInput-multiSelect > div {
  min-height: 20px;
  align-items: flex-start !important;
}
.ac-input.ac-toggleInput {
  min-height: 20px;
  align-items: flex-start !important;
}

.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox], .ac-input.ac-toggleInput input[type=checkbox] {
  cursor: pointer;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:before, .ac-input.ac-toggleInput input[type=checkbox]:before {
  content: "E73E";
  font-family: 'Fluent MDL2 Hybrid Icons';
  font-size: 16px;
  border-radius: 2px;
  color: transparent;
  background: #ffffff;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border: 1px solid #605e5c;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:checked:before {
  background-color: #5B5FC7;
  color: #ffffff;
  border-color: #5B5FC7;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:disabled:before, .ac-input.ac-toggleInput input[type=checkbox]:disabled:before {
  border-color: #c8c6c4;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:disabled:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:disabled:checked:before {
  background-color: #c8c6c4;
  border-color: #c8c6c4;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:hover:before, .ac-input.ac-toggleInput input[type=checkbox]:hover:before {
  color: #201f1e;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:hover:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:hover:checked:before {
  background-color: #444791;
  color: #ffffff;
  border-color: #444791;
}

.ac-input.ac-choiceSetInput-expanded > div:not(:last-child) {
  margin-bottom: 8px;
}
.ac-input.ac-choiceSetInput-expanded > div {
  min-height: 20px;
  align-items: flex-start !important;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio] {
  cursor: pointer;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:before {
  content: " ";
  font-size: 16px;
  border-radius: 50%;
  background-color: #ffffff;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border: 1px solid #605e5c;
  display: block;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:before {
  border-color: #c8c6c4;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:checked:before {
  border-color: #c8c6c4;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:before {
  border-color: #201f1e;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:checked:before {
  color: #ffffff;
  border-color: #444791
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:after, .ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:after {
  content: " ";
  mask: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E");
  -webkit-mask: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E");
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  top: -20px;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:after {
  background-color: #5B5FC7;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:after {
  background-color: #201f1e;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:hover:after {
  background-color: #444791;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:checked:after {
  background-color: #c8c6c4;
}

.ac-input.ac-choiceSetInput-multiSelect div > div:first-of-type, .ac-input.ac-toggleInput div > div:first-of-type, .ac-input.ac-choiceSetInput-expanded div > div:first-of-type {
  max-width: 2px;
}

.ac-input.ac-textInput, .ac-input.ac-dateInput, .ac-input.ac-numberInput, .ac-input.ac-multichoiceInput, .ac-input.ac-timeInput {
  min-height: 32px;
  box-sizing: border-box;
  border: 1px solid #605e5c;
  border-radius: 2px;
  padding: 0 8px 1px 8px;
  color: #323130;
  background-color: #ffffff;
}
.ac-input.ac-textInput:focus, .ac-input.ac-dateInput:focus, .ac-input.ac-numberInput:focus, .ac-input.ac-multichoiceInput:focus, .ac-input.ac-timeInput:focus {
  outline-color: #5B5FC7;
}
.ac-input.ac-textInput::placeholder, .ac-input.ac-dateInput::placeholder, .ac-input.ac-numberInput::placeholder, .ac-input.ac-multichoiceInput::placeholder, .ac-input.ac-timeInput::placeholder {
  color: #605e5c;
}
.ac-input.ac-textInput:disabled::placeholder, .ac-input.ac-dateInput:disabled::placeholder, .ac-input.ac-numberInput:disabled::placeholder, .ac-input.ac-multichoiceInput:disabled::placeholder, .ac-input.ac-timeInput:disabled::placeholder {
  color: #a19f9d;
}
.ac-input.ac-textInput:disabled, .ac-input.ac-dateInput:disabled, .ac-input.ac-numberInput:disabled, .ac-input.ac-multichoiceInput:disabled, .ac-input.ac-timeInput:disabled {
  border-color: #f3f2f1;
  background-color: #f3f2f1;
  color: #a19f9d;
}

.ac-input.ac-textInput.ac-input-validation-failed, .ac-input.ac-dateInput.ac-input-validation-failed, .ac-input.ac-numberInput.ac-input-validation-failed, .ac-input.ac-multichoiceInput.ac-input-validation-failed, .ac-input.ac-timeInput.ac-input-validation-failed {
  border-color: #A80000;
}
.ac-input.ac-textInput.ac-input-validation-failed:focus, .ac-input.ac-dateInput.ac-input-validation-failed:focus, .ac-input.ac-numberInput.ac-input-validation-failed:focus, .ac-input.ac-multichoiceInput.ac-input-validation-failed:focus, .ac-input.ac-timeInput.ac-input-validation-failed:focus {
  outline-color: #A80000;
}

.ac-input.ac-textInput.ac-multiline {
  padding-top: 6px;
  padding-bottom: 6px;
  height: 54px !important;
  line-height: 20px;
  resize: none;
}
.ac-inlineActionButton {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #7579EB;
  background-color: #ffffff;
  color: #5B5FC7;
}
.ac-inlineActionButton:active:hover {
  background-color: #edebe9;
}
.ac-inlineActionButton:hover {
  background-color: #f3f2f1;
}

.ac-input-container {
  align-items: flex-end;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact {
  cursor: pointer;
}
.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact option:checked {
  background-color: #f3f2f1;
}

.ac-anchor {
  color: #7F85F5;
  text-decoration: none;
}
.ac-anchor:hover {
  color: #3D3E78;
  text-decoration: underline;
}

.vivaConnectionsContainer {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 25px 57px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18);
  min-height: 0;
  min-width: 320px;
  max-width: 375px;
}`;var yp=Je(lt());var qs={};Ge(qs,{actions:()=>ix,adaptiveCard:()=>ox,containerStyles:()=>rx,default:()=>lx,factSet:()=>sx,fontTypes:()=>nx,imageSet:()=>ax,imageSizes:()=>tx,preExpandSingleShowCardAction:()=>XC,separator:()=>ex,spacing:()=>ZC,supportsInteractivity:()=>KC});var XC=!0,KC=!0,ZC={small:4,default:8,medium:16,large:24,extraLarge:32,padding:16},ex={lineThickness:1,lineColor:"#EDEBE9"},tx={small:72,medium:164,large:256},nx={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}}},rx={default:{backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},emphasis:{backgroundColor:"#FAF9F8",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},accent:{backgroundColor:"#E2E2F6",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},good:{backgroundColor:"#DFF6DD",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},attention:{backgroundColor:"#FED9CC",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},warning:{backgroundColor:"#FFF4CE",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}}},ix={maxActions:5,spacing:"Default",buttonSpacing:10,showCard:{actionMode:"Inline",inlineTopMargin:16},actionsOrientation:"Horizontal",actionAlignment:"Left"},ox={allowCustomStyle:!0},ax={imageSize:"Medium",maxImageHeight:100},sx={title:{color:"Default",size:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{color:"Default",size:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:8},lx={preExpandSingleShowCardAction:XC,supportsInteractivity:KC,spacing:ZC,separator:ex,imageSizes:tx,fontTypes:nx,containerStyles:rx,actions:ix,adaptiveCard:ox,imageSet:ax,factSet:sx};var Gs={};Ge(Gs,{actions:()=>mx,adaptiveCard:()=>yx,containerStyles:()=>gx,default:()=>Cx,factSet:()=>vx,fontTypes:()=>hx,imageSet:()=>bx,imageSizes:()=>px,preExpandSingleShowCardAction:()=>cx,separator:()=>fx,spacing:()=>dx,supportsInteractivity:()=>ux});var cx=!0,ux=!0,dx={small:4,default:8,medium:16,large:24,extraLarge:32,padding:16},fx={lineThickness:1,lineColor:"#292827"},px={small:72,medium:164,large:256},hx={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}}},gx={default:{backgroundColor:"#1b1a19",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#252423",subtle:"#323130"},light:{default:"#ffffff",subtle:"#a19f9d"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},emphasis:{backgroundColor:"#201f1e",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},accent:{backgroundColor:"#0a0802",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},good:{backgroundColor:"#393d1b",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},attention:{backgroundColor:"#4f2a0f",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},warning:{backgroundColor:"#433519",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}}},mx={maxActions:5,spacing:"Default",buttonSpacing:10,showCard:{actionMode:"Inline",inlineTopMargin:16},actionsOrientation:"Horizontal",actionAlignment:"Left"},yx={allowCustomStyle:!0},bx={imageSize:"Medium",maxImageHeight:100},vx={title:{color:"Default",size:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{color:"Default",size:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:8},Cx={preExpandSingleShowCardAction:cx,supportsInteractivity:ux,spacing:dx,separator:fx,imageSizes:px,fontTypes:hx,containerStyles:gx,actions:mx,adaptiveCard:yx,imageSet:bx,factSet:vx};var mp=`@font-face {
  font-family: 'Fluent MDL2 Hybrid Icons';
  src: url('data:application/octet-stream;base64,d09GRgABAAAAAAZAAAsAAAAADOgAAQKPAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAEcAAABgLy9kOmNtYXAAAAFQAAAAMgAAAUIADejkZ2FzcAAAAYQAAAAMAAAADAAIABtnbHlmAAABkAAAAH4AAACAvsbQ2mhlYWQAAAIQAAAANAAAADYg6JJSaGhlYQAAAkQAAAAcAAAAJA+nCKlobXR4AAACYAAAAAgAAAAIDSoBpmxvY2EAAAJoAAAABgAAAAYAQAAWbWF4cAAAAnAAAAAWAAAAIAAFABduYW1lAAACiAAAA6MAAAlP+y5SgHBvc3QAAAYsAAAAFAAAACD/uAA0eJxjYGGbyjiBgZWBgdWY5QwDA8NMCM10hiGNSQgoysXIxAgGQDkGAQYE8A1WUGBweG733I4DzIeQDGB1LBCeAgMDABbmCPYAeJxjYGBgZoBgGQZGBhCwAfIYwXwWBgUgzQKEQP5zu///IaTEYahKBkY2hhEPAHj+B9YAAAABAAIACAAK//8AD3icFYkxDoJAEEX/MCwby82IJtstJmuPxpqaw1juCagsxTNwAArrPZcicWj+z3sPBSagHEwCwwLkgjPBhXJYGu5/ffE26fMw6fWdNRIoW1RArXC9XdrjjnQP9d5SdWrOFAnRe6GRR/E+ytLpydoJZ6X1zk/ZumqhLAD+F08ZHAAAeJxjYGRgYGBk6v8Q/Loint/mKwM3BwMI3OUz1ALTYsJzGZYxMLAzsIG47AxMIAoAKBYIkXicY2BkYOBgAAEguYxhGTsDAyMDKmACAB8+AWgFKgCmCAABAAAAABYAQAAAeJxjYGRgYGBiEANiEGBkQAMAAtoAHQAAeJy1VMtuGzcUvbKUR5HGQIu26JKLFnAMYWQ5u2QVBHCzcRdGECDoamZIaQiMhgSH48Fs200/oEC/IehX9PEH/Yiu+g89l+RIcqwGRoF6IPLwvu/hpYnoi8kxTSj+PcUv4gl9hlPER/SAvkl4Cvm3Cc+Ai4Tv0cd0nfB9+pS+T/ghfU4/JfyITuldwo8nf9CfCR/T6dHPiDyZfYSTPPo14QmdTL9O+IiOp5cJTyH/LuEZ8A8J36Mvp78kfJ++mv6e8EM6nf6V8CN6Pfsk4cfTH2cq4WN6/eDv396J87PzpbjUpTOtWXnx0jhrXO61aTLxoq7FlV5XvhVXqlXuWsnsou5U48VFXjhdilcDNnml1l2du0OqQ7I3yrWIL5bZ2TLqozpqD9ZSeW+fLRZ932ebUZ+VZrPwgzVrl9tqWKxM49vFzr3trK21koIVmXhrOrHJB9G1SvhKt0EsvBGlU7lXcyF1a+t8mIu8kcI6DW0JEy4/b4VVbqO9R7higL8StS5Vw7GgaIVxI1hxhjnvbLUrxzoju9LPBRMJ3zn7jAl0I/pKl9VeZT2S6qasOwnWt9Wbph7EiX4i1KZALTtzRPhQtcFc6mYtnGo9yGZWdwnYfRvreWDgRCOLVxu+AqeRVZq+qU0ub7KXR6qU43YMUmHtvO28kIrbZJtK1fYmo5itZkjmfCEICH4qXWjUnN39tvG8BJ3TGX5LoEvSVJIjQy1+K/KQvQRyZMOaQ6KBGsqgeUE1PkFXkK2pgq4NJ4Vdwfoaq4TlBaw64CbEu0CUAlrOJOgVDekkg+caljUs3J297mr3JtTUpvoF+s3Q9/KG/773vu/deWEWPKTPaIGvD19Gm1v+Gc4G8gXwEKKsQxyLCAOkqxCNGV0czN6iZouvho5ZFlsPvpm3wB32DSIO2LtwIwLaCvbtnjXLDFaOr0IfiuY4y2Bnw10MQZLDnvPYwEn0LVOUkf08xLaBae7ZBx17FaEOzs911KEj9hrrih7szXy+L1lte5hvz2OsQ+zYcJbwKXGeB77iRMa8822e9zvQYTb6wFOJ9TBnfeqUrcswPzLN+m3u2acO6AT2T7Ar6IrEy6HosYb/yu0uugyR1pC58CZ9muxxVg91MGa/XdfzvRngTmIvPuQbXwHHj71KSPrQuYH83zqNs5ffmCoV7sWkNXYVcRdeVhc8udrxNsc4bFnD4kMzGv9vNelmdtHHF6ITyzw/XG8RmI53+z+87X8AE9YWxQB4nGNgZgCD/1sZjBgwARMALMQB7A==') format('truetype');
}

/* base */
.ac-actionSet {
  flex-direction: column !important;
}

.ac-actionSet .ac-pushButton {
  height: 32px;
}
.ac-actionSet .ac-pushButton:not(:last-of-type) {
  margin-bottom: 8px;
}

.ac-actionSet .style-default {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #7579EB;
  background-color: #1b1a19;
  color: #7F85F5;
}
.ac-actionSet .style-default:active:hover {
  background-color: #292827;
}
.ac-actionSet .style-default:hover {
  background-color: #252423;
}

.ac-actionSet .style-positive {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: transparent;
  background-color: #7F85F5;
  color: #1b1a19;
}
.ac-actionSet .style-positive:active:hover {
  background-color: #3D3E78;
  color: #1b1a19;
}
.ac-actionSet .style-positive:hover {
  background-color: #2F2F4A;
  color: #1b1a19;
}

.ac-actionSet .style-destructive {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #f1707b;
  background-color: #1b1a19;
  color: #f1707b;
}
.ac-actionSet .style-destructive:active:hover {
  background-color: #292827;
}
.ac-actionSet .style-destructive:hover {
  background-color: #252423;
}

.ac-adaptiveCard {
  background-color: unset !important;
}

/* quickLookCard */
.ac-container {
  border: none !important;
}
.ac-image.ac-selectable, .ac-container.ac-selectable, .ac-columnSet.ac-selectable {
  cursor: pointer;
}
.ac-container iframe {
  border: none;
}

:global(.ac-media-playButton-arrow) {
  width: unset !important;
  height: unset !important;
  border-width: 15px 0 15px 21px !important;
  color: #7F85F5;
}
.ac-textBlock *:first-child {
  box-sizing: border-box;
}

/* inserted by getStyledControlsForQuickView */
.ac-input.ac-choiceSetInput-multiSelect > div:not(:last-child) {
  margin-bottom: 8px;
}
.ac-input.ac-choiceSetInput-multiSelect > div {
  min-height: 20px;
  align-items: flex-start !important;
}
.ac-input.ac-toggleInput {
  min-height: 20px;
  align-items: flex-start !important;
}

.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox], .ac-input.ac-toggleInput input[type=checkbox] {
  cursor: pointer;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:before, .ac-input.ac-toggleInput input[type=checkbox]:before {
  content: "E73E";
  font-family: 'Fluent MDL2 Hybrid Icons';
  font-size: 16px;
  border-radius: 2px;
  color: transparent;
  background: #1b1a19;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border: 1px solid #a19f9d;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:checked:before {
  background-color: #7F85F5;
  color: #1b1a19;
  border-color: #7F85F5;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:disabled:before, .ac-input.ac-toggleInput input[type=checkbox]:disabled:before {
  border-color: #484644;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:disabled:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:disabled:checked:before {
  background-color: #484644;
  border-color: #484644;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:hover:before, .ac-input.ac-toggleInput input[type=checkbox]:hover:before {
  color: #faf9f8;
}
.ac-input.ac-choiceSetInput-multiSelect input[type=checkbox]:hover:checked:before, .ac-input.ac-toggleInput input[type=checkbox]:hover:checked:before {
  background-color: #C5CBFA;
  color: #1b1a19;
  border-color: #C5CBFA;
}

.ac-input.ac-choiceSetInput-expanded > div:not(:last-child) {
  margin-bottom: 8px;
}
.ac-input.ac-choiceSetInput-expanded > div {
  min-height: 20px;
  align-items: flex-start !important;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio] {
  cursor: pointer;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:before {
  content: " ";
  font-size: 16px;
  border-radius: 50%;
  background-color: #1b1a19;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border: 1px solid #a19f9d;
  display: block;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:before {
  border-color: #484644;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:checked:before {
  border-color: #484644;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:before {
  border-color: #faf9f8;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:checked:before {
  color: #1b1a19;
  border-color: #C5CBFA
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:after, .ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:after, .ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:hover:after {
  content: " ";
  mask: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E");
  -webkit-mask: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='6' fill='%23212121'/%3E%3Crect x='0.5' y='0.5' width='19' height='19' rx='9.5' stroke='%23212121'/%3E%3C/svg%3E");
  display: block;
  position: relative;
  width: 20px;
  height: 20px;
  top: -20px;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:after {
  background-color: #7F85F5;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:hover:after {
  background-color: #faf9f8;
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:checked:hover:after {
  background-color: inputBackgroundCheckedHovered
}
.ac-input.ac-choiceSetInput-expanded input[type=radio]:disabled:checked:after {
  background-color: #484644;
}

.ac-input.ac-choiceSetInput-multiSelect div > div:first-of-type, .ac-input.ac-toggleInput div > div:first-of-type, .ac-input.ac-choiceSetInput-expanded div > div:first-of-type {
  max-width: 2px;
}

.ac-input.ac-textInput, .ac-input.ac-dateInput, .ac-input.ac-numberInput, .ac-input.ac-multichoiceInput, .ac-input.ac-timeInput {
  min-height: 32px;
  box-sizing: border-box;
  border: 1px solid #a19f9d;
  border-radius: 2px;
  padding: 0 8px 1px 8px;
  color: #f3f2f1;
  background-color: #1b1a19;
}
.ac-input.ac-textInput:focus, .ac-input.ac-dateInput:focus, .ac-input.ac-numberInput:focus, .ac-input.ac-multichoiceInput:focus, .ac-input.ac-timeInput:focus {
  outline-color: #7F85F5;
}
.ac-input.ac-textInput::placeholder, .ac-input.ac-dateInput::placeholder, .ac-input.ac-numberInput::placeholder, .ac-input.ac-multichoiceInput::placeholder, .ac-input.ac-timeInput::placeholder {
  color: #a19f9d;
}
.ac-input.ac-textInput:disabled::placeholder, .ac-input.ac-dateInput:disabled::placeholder, .ac-input.ac-numberInput:disabled::placeholder, .ac-input.ac-multichoiceInput:disabled::placeholder, .ac-input.ac-timeInput:disabled::placeholder {
  color: #797775;
}
.ac-input.ac-textInput:disabled, .ac-input.ac-dateInput:disabled, .ac-input.ac-numberInput:disabled, .ac-input.ac-multichoiceInput:disabled, .ac-input.ac-timeInput:disabled {
  border-color: #252423;
  background-color: #252423;
  color: #797775;
}
.ac-input.ac-dateInput::-webkit-calendar-picker-indicator, .ac-input.ac-timeInput::-webkit-calendar-picker-indicator {
  filter: invert(95%);
}

.ac-input.ac-textInput.ac-input-validation-failed, .ac-input.ac-dateInput.ac-input-validation-failed, .ac-input.ac-numberInput.ac-input-validation-failed, .ac-input.ac-multichoiceInput.ac-input-validation-failed, .ac-input.ac-timeInput.ac-input-validation-failed {
  border-color: #f1707b;
}
.ac-input.ac-textInput.ac-input-validation-failed:focus, .ac-input.ac-dateInput.ac-input-validation-failed:focus, .ac-input.ac-numberInput.ac-input-validation-failed:focus, .ac-input.ac-multichoiceInput.ac-input-validation-failed:focus, .ac-input.ac-timeInput.ac-input-validation-failed:focus {
  outline-color: #f1707b;
}

.ac-input.ac-textInput.ac-multiline {
  padding-top: 6px;
  padding-bottom: 6px;
  height: 54px !important;
  line-height: 20px;
  resize: none;
}
.ac-inlineActionButton {
  border: 1px solid;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 400;
  height: 32px;
  line-height: 1.2rem;
  cursor: pointer;
  padding: 5px 8px;
  bottom: 12px;
  overflow: hidden;
  border-color: #7579EB;
  background-color: #1b1a19;
  color: #7F85F5;
}
.ac-inlineActionButton:active:hover {
  background-color: #292827;
}
.ac-inlineActionButton:hover {
  background-color: #252423;
}

.ac-input-container {
  align-items: flex-end;
}

.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact {
  cursor: pointer;
}
.ac-input.ac-multichoiceInput.ac-choiceSetInput-compact option:checked {
  background-color: #252423;
}

.ac-anchor {
  color: #7F85F5;
  text-decoration: none;
}
.ac-anchor:hover {
  color: #C5CBFA;
  text-decoration: underline;
}

.vivaConnectionsContainer {
  background-color: #1b1a19;
  border-radius: 8px;
  box-shadow: 0 25px 57px 0 rgba(0, 0, 0, .22), 0 5px 14px 0 rgba(0, 0, 0, .18);
  min-height: 0;
  min-width: 320px;
  max-width: 375px;
}`;var wi=class extends Nt{constructor(){super("Viva Connections","viva-connections-container",qs,Gs,"#F6F6F6","#1b1a19")}renderTo(e){this.cardHost.classList.add("vivaConnectionsContainer");let n=document.createElement("div");n.className="vivaConnectionsContainer",n.appendChild(this.cardHost),e.appendChild(n);let r=document.createElement("style");this.colorTheme=="Dark"?r.innerHTML=mp:r.innerHTML=gp,e.appendChild(r)}get targetVersion(){return yp.Versions.v1_3}};var ki=Je(lt());var bp=`a.ac-anchor:hover {
  text-decoration: underline;
}
a.ac-anchor {
  text-decoration: none;
}
a.ac-anchor:link {
  color: inherit;
}
a.ac-anchor:visited {
  color: inherit;
  text-decoration: none;
}
.ac-textBlock p {
  margin-top: 1px !important;
}
.ac-adaptiveCard {
  background-color: inherit !important;
}
.ac-textBlock > p {
  font-size: inherit;
  font-family: inherit;
  line-height: inherit;
  font-weight: inherit;
}

.fedsearch-card {
  border: 2px solid #f1f0ef;
  border-top-color: #bfc6ceaf;
  border-bottom-color: #bfc6ceaf;
  border-radius: 4px;
}

.ac-container.ac-adaptiveCard {
  border: none !important;
}
.aaf-spinner {
  border-color: #6264a7;
}
.ac-pushButton {
  background-color: inherit !important;
  color: #6264a7;
  border: 0px;
  padding: 0px;
  cursor: pointer;
}
.ac-choiceSetInput-expanded div {
  margin-top: 6px;
}
.ac-pushButton.ac-pushButton.expanded:hover {
  background-color: inherit !important;
  border: 0px;
  color: #6264a7;
}

.ac-pushButton.ac-actionSet .ac-pushButton.style-default.expandable:after {
  content: "";
}
.aaf-progress-overlay {
  background-color: inherit;
}
.ac-input input:checked {
  appearance: none;
}
.ac-input input:checked::after {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 2px;
  position: relative;
  content: " ";
  display: inline-block;
  visibility: visible;
  border: 2px solid #6264a7;
  background: radial-gradient(+ #6264a7 #6264a7 + 40% transparent 50% transparent);
}
.ac-input:focus {
  border: 1px solid #6264a7;
  outline: none;
}`;var $s={};Ge($s,{actions:()=>Px,adaptiveCard:()=>Fx,choiceSetInputValueSeparator:()=>xx,containerStyles:()=>_x,default:()=>Mx,factSet:()=>Bx,fontTypes:()=>Ix,imageSet:()=>Dx,imageSizes:()=>wx,separator:()=>Sx,spacing:()=>Ex,supportsInteractivity:()=>Ax,textBlock:()=>Tx,textStyles:()=>kx});var xx=",",Ax=!0,Ex={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Sx={lineThickness:1,lineColor:"#EEEEEE"},wx={small:32,medium:52,large:100},Ix={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},kx={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Tx={headingLevel:2},_x={default:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#CCCCCC",backgroundColor:"#ffffff"},emphasis:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#666666",backgroundColor:"#fff9f8f7"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}}},Px={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},Fx={allowCustomStyle:!1},Dx={imageSize:"Medium",maxImageHeight:100},Bx={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},Mx={choiceSetInputValueSeparator:xx,supportsInteractivity:Ax,spacing:Ex,separator:Sx,imageSizes:wx,fontTypes:Ix,textStyles:kx,textBlock:Tx,containerStyles:_x,actions:Px,adaptiveCard:Fx,imageSet:Dx,factSet:Bx};var Ii=class extends Ht{constructor(){super("Federated Search","containers/federated-search/federated-search-container.css"),this.actionsRegistry.unregister("Action.Submit"),this.elementsRegistry.unregister("Input.Text"),this.elementsRegistry.unregister("Input.Date"),this.elementsRegistry.unregister("Input.Time"),this.elementsRegistry.unregister("Input.Toggle"),this.elementsRegistry.unregister("Input.ChoiceSet"),this.elementsRegistry.unregister("Input.Number")}renderTo(e){this.cardHost.classList.add("fedsearch-card"),e.appendChild(this.cardHost);let n=document.createElement("style");n.innerHTML=bp,e.appendChild(n)}initialize(){super.initialize()}getHostConfig(){return new ki.HostConfig($s)}get targetVersion(){return ki.Versions.v1_4}get enableDeviceEmulation(){return!0}};var je=Wr("react"),Im=Je(lt()),km=Je(Sm()),Tm=Je(wm());var de=Wr("react/jsx-runtime");function jE(t){let{content:e,metadata:n}=t,[r,i]=(0,je.useState)(0),[o,a]=(0,je.useState)(0),[l,s]=(0,je.useState)(0),[c,u]=(0,je.useState)(0),[d,f]=(0,je.useState)(!0),p=(0,je.useRef)(null),y=(0,je.useRef)(null),h=(0,je.useRef)(),m=[new Ei,new xi,new Ai,new wi,new Ci,new vi,new Ii,new wn(Object.values(Fr)[l])],v=new km.default({breaks:!0,html:!1,linkify:!0,typographer:!0,xhtmlOut:!0}),b=m[r],C=async()=>{var k=new qi.AdaptiveCard;if(b.colorTheme=o==0?"Light":"Dark",b.constructor.name.endsWith("WidgetContainer")&&(b.containerSize=Object.values(Fr)[l]),k.hostConfig=new qi.HostConfig(b.getHostConfig()),Im.AdaptiveCard.onProcessMarkdown=(A,_)=>{_.outputHtml=Tm.default.sanitize(v.render(A)),_.didProcess=!0},k.parse(T),p.current){for(;p.current.firstChild;)p.current.removeChild(p.current.firstChild);b.renderTo(p.current),k.render(b.cardHost),y.current&&(y.current.style.backgroundColor=b.getBackgroundColor())}if(h.current){let A="";b.enableDeviceEmulation&&(A=tt.supportDeviceSizes[c]),h.current.style.maxWidth=A}};(0,je.useEffect)(()=>{if(n){let{hostApp:k,theme:A,deviceEmulation:_,hideToolbar:z}=n,G=m.findIndex(E=>E.name==k);G>-1&&i(G);let F=Object.values(tt.supportedContainerThemes).findIndex(E=>E==A);F>-1&&a(F);let w=Object.values(tt.supportedDeviceEmulations).findIndex(E=>E==_);w&&u(w),f(!z)}},[n]),(0,je.useEffect)(()=>{C()},[t,r,o,l,c]);let T=(0,je.useMemo)(()=>{try{return JSON.parse(e)}catch{return null}},[e]);return(0,de.jsx)("div",{className:"overflow-y-auto w-full flex-1","data-version":"0.1.5",children:(0,de.jsxs)(ge.Box,{padding:"8px",children:[d&&(0,de.jsxs)(ge.Box,{p:1,display:"flex",bg:"canvas.subtle",borderColor:"border.default",borderWidth:1,borderStyle:"solid",children:[(0,de.jsx)(ge.Box,{p:1,children:(0,de.jsxs)(ge.ActionMenu,{children:[(0,de.jsxs)(ge.ActionMenu.Button,{"aria-label":"Select host app",children:["Host app: ",b.name]}),(0,de.jsx)(ge.ActionMenu.Overlay,{children:(0,de.jsx)(ge.ActionList,{selectionVariant:"single",children:m.map((k,A)=>(0,de.jsx)(ge.ActionList.Item,{selected:A===r,onSelect:()=>i(A),children:k.name},A))})})]})}),(0,de.jsx)(ge.Box,{p:1,children:(0,de.jsxs)(ge.ActionMenu,{children:[(0,de.jsxs)(ge.ActionMenu.Button,{"aria-label":"Select theme",disabled:!b.supportsMultipleThemes,title:b.supportsMultipleThemes?"Select a theme":"This host does not support themes",children:["Theme: ",tt.supportedContainerThemes[o]]}),(0,de.jsx)(ge.ActionMenu.Overlay,{children:(0,de.jsx)(ge.ActionList,{selectionVariant:"single",children:tt.supportedContainerThemes.map((k,A)=>(0,de.jsx)(ge.ActionList.Item,{selected:A===o,onSelect:()=>{a(A)},children:k},A))})})]})}),b.constructor.name.endsWith("WidgetContainer")&&(0,de.jsx)(ge.Box,{p:1,children:(0,de.jsxs)(ge.ActionMenu,{children:[(0,de.jsxs)(ge.ActionMenu.Button,{"aria-label":"Select container size",disabled:!b.supportsMultipleSizes,children:["Container size: ",wn.supportedContainerSizes[l]]}),(0,de.jsx)(ge.ActionMenu.Overlay,{children:(0,de.jsx)(ge.ActionList,{selectionVariant:"single",children:wn.supportedContainerSizes.map((k,A)=>(0,de.jsx)(ge.ActionList.Item,{selected:A===l,onSelect:()=>s(A),children:k},A))})})]})}),(0,de.jsx)(ge.Box,{p:1,children:(0,de.jsxs)(ge.ActionMenu,{children:[(0,de.jsxs)(ge.ActionMenu.Button,{"aria-label":"Select device emulation",disabled:!b.enableDeviceEmulation,title:b.enableDeviceEmulation?"Select a device to emulate":"This host does not support device emulation",children:["Emulate device: ",tt.supportedDeviceEmulations[c]]}),(0,de.jsx)(ge.ActionMenu.Overlay,{children:(0,de.jsx)(ge.ActionList,{selectionVariant:"single",children:tt.supportedDeviceEmulations.map((k,A)=>(0,de.jsx)(ge.ActionList.Item,{selected:A===c,onSelect:()=>u(A),children:k},A))})})]})})]}),(0,de.jsx)(ge.Box,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderTopStyle:"none",children:(0,de.jsx)("div",{className:"acd-designer-cardArea",ref:y,children:(0,de.jsx)("div",{className:"card-inner",children:(0,de.jsx)("div",{id:"designerHost",className:"acd-designer-host",ref:h,children:(0,de.jsx)("div",{ref:p})})})})})]})})}return Gl(QE);})();
/*! @license DOMPurify 2.4.3 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.3/LICENSE */
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
