"use strict";var BlockBundle=(()=>{var Pu=Object.create;var en=Object.defineProperty;var Fu=Object.getOwnPropertyDescriptor;var Bu=Object.getOwnPropertyNames;var Du=Object.getPrototypeOf,Mu=Object.prototype.hasOwnProperty;var zu=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ht=(e=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(e,{get:(t,n)=>(typeof require!="undefined"?require:t)[n]}):e)(function(e){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var F=(e,t)=>()=>(e&&(t=e(e=0)),t);var ce=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),Se=(e,t)=>{for(var n in t)en(e,n,{get:t[n],enumerable:!0})},Ko=(e,t,n,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Bu(t))!Mu.call(e,r)&&r!==n&&en(e,r,{get:()=>t[r],enumerable:!(i=Fu(t,r))||i.enumerable});return e};var Ke=(e,t,n)=>(n=e!=null?Pu(Du(e)):{},Ko(t||!e||!e.__esModule?en(n,"default",{value:e,enumerable:!0}):n,e)),Zo=e=>Ko(en({},"__esModule",{value:!0}),e);var ea=(e,t,n)=>(zu(e,typeof t!="symbol"?t+"":t,n),n);var Ct=ce(In=>{"use strict";Object.defineProperty(In,"__esModule",{value:!0});In.Strings=void 0;var Ou=function(){function e(){}return e.errors={unknownElementType:function(t){return'Unknown element type "'.concat(t,'". Fallback will be used if present.')},unknownActionType:function(t){return'Unknown action type "'.concat(t,'". Fallback will be used if present.')},elementTypeNotAllowed:function(t){return'Element type "'.concat(t,'" is not allowed in this context.')},actionTypeNotAllowed:function(t){return'Action type "'.concat(t,'" is not allowed in this context.')},invalidPropertyValue:function(t,n){return'Invalid value "'.concat(t,'" for property "').concat(n,'".')},showCardMustHaveCard:function(){return'"An Action.ShowCard must have its "card" property set to a valid AdaptiveCard object.'},invalidColumnWidth:function(t){return'Invalid column width "'.concat(t,'" - defaulting to "auto".')},invalidCardVersion:function(t){return'Invalid card version. Defaulting to "'.concat(t,'".')},invalidVersionString:function(t){return'Invalid version string "'.concat(t,'".')},propertyValueNotSupported:function(t,n,i,r){return'Value "'.concat(t,'" for property "').concat(n,'" is supported in version ').concat(i,", but you are using version ").concat(r,".")},propertyNotSupported:function(t,n,i){return'Property "'.concat(t,'" is supported in version ').concat(n,", but you are using version ").concat(i,".")},indexOutOfRange:function(t){return"Index out of range (".concat(t,").")},elementCannotBeUsedAsInline:function(){return"RichTextBlock.addInline: the specified card element cannot be used as a RichTextBlock inline."},inlineAlreadyParented:function(){return"RichTextBlock.addInline: the specified inline already belongs to another RichTextBlock."},interactivityNotAllowed:function(){return"Interactivity is not allowed."},inputsMustHaveUniqueId:function(){return"All inputs must have a unique Id."},choiceSetMustHaveAtLeastOneChoice:function(){return"An Input.ChoiceSet must have at least one choice defined."},choiceSetChoicesMustHaveTitleAndValue:function(){return"All choices in an Input.ChoiceSet must have their title and value properties set."},propertyMustBeSet:function(t){return'Property "'.concat(t,'" must be set.')},actionHttpHeadersMustHaveNameAndValue:function(){return"All headers of an Action.Http must have their name and value properties set."},tooManyActions:function(t){return"Maximum number of actions exceeded (".concat(t,").")},tooLittleTimeDelay:function(t){return"Autoplay Delay is too short (".concat(t,").")},tooManyCarouselPages:function(t){return"Maximum number of Carousel pages exceeded (".concat(t,").")},invalidInitialPageIndex:function(t){return"InitialPage for carousel is invalid (".concat(t,").")},columnAlreadyBelongsToAnotherSet:function(){return"This column already belongs to another ColumnSet."},invalidCardType:function(){return`Invalid or missing card type. Make sure the card's type property is set to "AdaptiveCard".`},unsupportedCardVersion:function(t,n){return"The specified card version (".concat(t,") is not supported or still in preview. The latest released card version is ").concat(n,".")},duplicateId:function(t){return'Duplicate Id "'.concat(t,'".')},markdownProcessingNotEnabled:function(){return"Markdown processing isn't enabled. Please see https://www.npmjs.com/package/adaptivecards#supporting-markdown"},processMarkdownEventRemoved:function(){return"The processMarkdown event has been removed. Please update your code and set onProcessMarkdown instead."},elementAlreadyParented:function(){return"The element already belongs to another container."},actionAlreadyParented:function(){return"The action already belongs to another element."},elementTypeNotStandalone:function(t){return"Elements of type ".concat(t," cannot be used as standalone elements.")}},e.magicCodeInputCard={tryAgain:function(){return"That didn't work... let's try again."},pleaseLogin:function(){return'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"'},enterMagicCode:function(){return"Enter magic code"},pleaseEnterMagicCodeYouReceived:function(){return"Please enter the magic code you received."},submit:function(){return"Submit"},cancel:function(){return"Cancel"},somethingWentWrong:function(){return"Something went wrong. This action can't be handled."},authenticationFailed:function(){return"Authentication failed."}},e.runtime={automaticRefreshPaused:function(){return"Automatic refresh paused."},clckToRestartAutomaticRefresh:function(){return"Click to restart."},refreshThisCard:function(){return"Refresh this card"}},e.hints={dontUseWeightedAndStrecthedColumnsInSameSet:function(){return"It is not recommended to use weighted and stretched columns in the same ColumnSet, because in such a situation stretched columns will always get the minimum amount of space."}},e.defaults={inlineActionTitle:function(){return"Inline Action"},overflowButtonText:function(){return"..."},overflowButtonTooltip:function(){return"More options"},mediaPlayerAriaLabel:function(){return"Media content"},mediaPlayerPlayMedia:function(){return"Play media"},youTubeVideoPlayer:function(){return"YouTube video player"},vimeoVideoPlayer:function(){return"Vimeo video player"},dailymotionVideoPlayer:function(){return"Dailymotion video player"}},e}();In.Strings=Ou});var Ge=ce(V=>{"use strict";Object.defineProperty(V,"__esModule",{value:!0});V.CarouselInteractionEvent=V.LogLevel=V.RefreshMode=V.TypeErrorType=V.ContainerFitStatus=V.ValidationEvent=V.ValidationPhase=V.InputTextStyle=V.ActionIconPlacement=V.FillMode=V.Orientation=V.ShowCardActionMode=V.ImageStyle=V.ActionAlignment=V.VerticalAlignment=V.HorizontalAlignment=V.TextColor=V.Spacing=V.FontType=V.TextWeight=V.TextSize=V.SizeUnit=V.ImageSize=V.Size=V.ActionMode=V.ActionStyle=V.ContainerStyle=void 0;var _u=function(){function e(){}return e.Default="default",e.Emphasis="emphasis",e.Accent="accent",e.Good="good",e.Attention="attention",e.Warning="warning",e}();V.ContainerStyle=_u;var Ru=function(){function e(){}return e.Default="default",e.Positive="positive",e.Destructive="destructive",e}();V.ActionStyle=Ru;var Vu=function(){function e(){}return e.Primary="primary",e.Secondary="secondary",e}();V.ActionMode=Vu;var Lu;(function(e){e[e.Auto=0]="Auto",e[e.Stretch=1]="Stretch",e[e.Small=2]="Small",e[e.Medium=3]="Medium",e[e.Large=4]="Large"})(Lu=V.Size||(V.Size={}));var Nu;(function(e){e[e.Small=0]="Small",e[e.Medium=1]="Medium",e[e.Large=2]="Large"})(Nu=V.ImageSize||(V.ImageSize={}));var Hu;(function(e){e[e.Weight=0]="Weight",e[e.Pixel=1]="Pixel"})(Hu=V.SizeUnit||(V.SizeUnit={}));var Gu;(function(e){e[e.Small=0]="Small",e[e.Default=1]="Default",e[e.Medium=2]="Medium",e[e.Large=3]="Large",e[e.ExtraLarge=4]="ExtraLarge"})(Gu=V.TextSize||(V.TextSize={}));var Yu;(function(e){e[e.Lighter=0]="Lighter",e[e.Default=1]="Default",e[e.Bolder=2]="Bolder"})(Yu=V.TextWeight||(V.TextWeight={}));var Wu;(function(e){e[e.Default=0]="Default",e[e.Monospace=1]="Monospace"})(Wu=V.FontType||(V.FontType={}));var $u;(function(e){e[e.None=0]="None",e[e.Small=1]="Small",e[e.Default=2]="Default",e[e.Medium=3]="Medium",e[e.Large=4]="Large",e[e.ExtraLarge=5]="ExtraLarge",e[e.Padding=6]="Padding"})($u=V.Spacing||(V.Spacing={}));var qu;(function(e){e[e.Default=0]="Default",e[e.Dark=1]="Dark",e[e.Light=2]="Light",e[e.Accent=3]="Accent",e[e.Good=4]="Good",e[e.Warning=5]="Warning",e[e.Attention=6]="Attention"})(qu=V.TextColor||(V.TextColor={}));var ju;(function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right"})(ju=V.HorizontalAlignment||(V.HorizontalAlignment={}));var Uu;(function(e){e[e.Top=0]="Top",e[e.Center=1]="Center",e[e.Bottom=2]="Bottom"})(Uu=V.VerticalAlignment||(V.VerticalAlignment={}));var Qu;(function(e){e[e.Left=0]="Left",e[e.Center=1]="Center",e[e.Right=2]="Right",e[e.Stretch=3]="Stretch"})(Qu=V.ActionAlignment||(V.ActionAlignment={}));var Ju;(function(e){e[e.Default=0]="Default",e[e.Person=1]="Person"})(Ju=V.ImageStyle||(V.ImageStyle={}));var Xu;(function(e){e[e.Inline=0]="Inline",e[e.Popup=1]="Popup"})(Xu=V.ShowCardActionMode||(V.ShowCardActionMode={}));var Ku;(function(e){e[e.Horizontal=0]="Horizontal",e[e.Vertical=1]="Vertical"})(Ku=V.Orientation||(V.Orientation={}));var Zu;(function(e){e[e.Cover=0]="Cover",e[e.RepeatHorizontally=1]="RepeatHorizontally",e[e.RepeatVertically=2]="RepeatVertically",e[e.Repeat=3]="Repeat"})(Zu=V.FillMode||(V.FillMode={}));var ed;(function(e){e[e.LeftOfTitle=0]="LeftOfTitle",e[e.AboveTitle=1]="AboveTitle"})(ed=V.ActionIconPlacement||(V.ActionIconPlacement={}));var td;(function(e){e[e.Text=0]="Text",e[e.Tel=1]="Tel",e[e.Url=2]="Url",e[e.Email=3]="Email",e[e.Password=4]="Password"})(td=V.InputTextStyle||(V.InputTextStyle={}));var nd;(function(e){e[e.Parse=0]="Parse",e[e.ToJSON=1]="ToJSON",e[e.Validation=2]="Validation"})(nd=V.ValidationPhase||(V.ValidationPhase={}));var id;(function(e){e[e.Hint=0]="Hint",e[e.ActionTypeNotAllowed=1]="ActionTypeNotAllowed",e[e.CollectionCantBeEmpty=2]="CollectionCantBeEmpty",e[e.Deprecated=3]="Deprecated",e[e.ElementTypeNotAllowed=4]="ElementTypeNotAllowed",e[e.InteractivityNotAllowed=5]="InteractivityNotAllowed",e[e.InvalidPropertyValue=6]="InvalidPropertyValue",e[e.MissingCardType=7]="MissingCardType",e[e.PropertyCantBeNull=8]="PropertyCantBeNull",e[e.TooManyActions=9]="TooManyActions",e[e.UnknownActionType=10]="UnknownActionType",e[e.UnknownElementType=11]="UnknownElementType",e[e.UnsupportedCardVersion=12]="UnsupportedCardVersion",e[e.DuplicateId=13]="DuplicateId",e[e.UnsupportedProperty=14]="UnsupportedProperty",e[e.RequiredInputsShouldHaveLabel=15]="RequiredInputsShouldHaveLabel",e[e.RequiredInputsShouldHaveErrorMessage=16]="RequiredInputsShouldHaveErrorMessage",e[e.Other=17]="Other"})(id=V.ValidationEvent||(V.ValidationEvent={}));var rd;(function(e){e[e.FullyInContainer=0]="FullyInContainer",e[e.Overflowing=1]="Overflowing",e[e.FullyOutOfContainer=2]="FullyOutOfContainer"})(rd=V.ContainerFitStatus||(V.ContainerFitStatus={}));var od;(function(e){e[e.UnknownType=0]="UnknownType",e[e.ForbiddenType=1]="ForbiddenType"})(od=V.TypeErrorType||(V.TypeErrorType={}));var ad;(function(e){e[e.Disabled=0]="Disabled",e[e.Manual=1]="Manual",e[e.Automatic=2]="Automatic"})(ad=V.RefreshMode||(V.RefreshMode={}));var sd;(function(e){e[e.Info=0]="Info",e[e.Warning=1]="Warning",e[e.Error=2]="Error"})(sd=V.LogLevel||(V.LogLevel={}));var ld;(function(e){e[e.NavigationNext=0]="NavigationNext",e[e.NavigationPrevious=1]="NavigationPrevious",e[e.Pagination=2]="Pagination",e[e.Autoplay=3]="Autoplay"})(ld=V.CarouselInteractionEvent||(V.CarouselInteractionEvent={}))});var at=ce(ye=>{"use strict";Object.defineProperty(ye,"__esModule",{value:!0});ye.UUID=ye.SizeAndUnit=ye.PaddingDefinition=ye.SpacingDefinition=ye.StringWithSubstitutions=ye.ContentTypes=ye.GlobalSettings=void 0;var Ye=Ge(),cd=function(){function e(){}return e.useAdvancedTextBlockTruncation=!0,e.useAdvancedCardBottomTruncation=!1,e.useMarkdownInRadioButtonAndCheckbox=!0,e.allowMarkForTextHighlighting=!1,e.alwaysBleedSeparators=!1,e.enableFullJsonRoundTrip=!1,e.displayInputValidationErrors=!0,e.allowPreProcessingPropertyValues=!1,e.setTabIndexAtCardRoot=!0,e.enableFallback=!0,e.useWebkitLineClamp=!0,e.allowMoreThanMaxActionsInOverflowMenu=!1,e.removePaddingFromContainersWithBackgroundImage=!1,e.resetInputsDirtyStateAfterActionExecution=!0,e.applets={logEnabled:!0,logLevel:Ye.LogLevel.Error,maximumRetryAttempts:3,defaultTimeBetweenRetryAttempts:3e3,authPromptWidth:400,authPromptHeight:600,refresh:{mode:Ye.RefreshMode.Manual,timeBetweenAutomaticRefreshes:3e3,maximumConsecutiveAutomaticRefreshes:3,allowManualRefreshesAfterAutomaticRefreshes:!0}},e}();ye.GlobalSettings=cd;ye.ContentTypes={applicationJson:"application/json",applicationXWwwFormUrlencoded:"application/x-www-form-urlencoded"};var ud=function(){function e(){this._isProcessed=!1}return e.prototype.getReferencedInputs=function(t,n){if(!n)throw new Error("The referencedInputs parameter cannot be null.");if(this._original)for(var i=0,r=t;i<r.length;i++){var o=r[i],a=new RegExp("\\{{2}("+o.id+").value\\}{2}","gi").exec(this._original);a!=null&&o.id&&(n[o.id]=o)}},e.prototype.substituteInputValues=function(t,n){if(this._processed=this._original,this._original)for(var i=/\{{2}([a-z0-9_$@]+).value\}{2}/gi,r=void 0;(r=i.exec(this._original))!==null&&this._processed;)for(var o=0,a=Object.keys(t);o<a.length;o++){var l=a[o];if(l.toLowerCase()===r[1].toLowerCase()){var s=t[l],c="";s.value&&(c=s.value),n===ye.ContentTypes.applicationJson?(c=JSON.stringify(c),c=c.slice(1,-1)):n===ye.ContentTypes.applicationXWwwFormUrlencoded&&(c=encodeURIComponent(c)),this._processed=this._processed.replace(r[0],c);break}}this._isProcessed=!0},e.prototype.getOriginal=function(){return this._original},e.prototype.get=function(){return this._isProcessed?this._processed:this._original},e.prototype.set=function(t){this._original=t,this._isProcessed=!1},e}();ye.StringWithSubstitutions=ud;var dd=function(){function e(t,n,i,r){t===void 0&&(t=0),n===void 0&&(n=0),i===void 0&&(i=0),r===void 0&&(r=0),this.left=0,this.top=0,this.right=0,this.bottom=0,this.top=t,this.right=n,this.bottom=i,this.left=r}return e}();ye.SpacingDefinition=dd;var fd=function(){function e(t,n,i,r){t===void 0&&(t=Ye.Spacing.None),n===void 0&&(n=Ye.Spacing.None),i===void 0&&(i=Ye.Spacing.None),r===void 0&&(r=Ye.Spacing.None),this.top=Ye.Spacing.None,this.right=Ye.Spacing.None,this.bottom=Ye.Spacing.None,this.left=Ye.Spacing.None,this.top=t,this.right=n,this.bottom=i,this.left=r}return e}();ye.PaddingDefinition=fd;var pd=function(){function e(t,n){this.physicalSize=t,this.unit=n}return e.parse=function(t,n){n===void 0&&(n=!1);var i=new e(0,Ye.SizeUnit.Weight);if(typeof t=="number")return i.physicalSize=t,i;if(typeof t=="string"){var r=/^([0-9]+)(px|\*)?$/g,o=r.exec(t),a=n?3:2;if(o&&o.length>=a)return i.physicalSize=parseInt(o[1]),o.length===3&&o[2]==="px"&&(i.unit=Ye.SizeUnit.Pixel),i}throw new Error("Invalid size: "+t)},e}();ye.SizeAndUnit=pd;var ta=function(){function e(){}return e.generate=function(){var t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return e.lut[t&255]+e.lut[t>>8&255]+e.lut[t>>16&255]+e.lut[t>>24&255]+"-"+e.lut[n&255]+e.lut[n>>8&255]+"-"+e.lut[n>>16&15|64]+e.lut[n>>24&255]+"-"+e.lut[i&63|128]+e.lut[i>>8&255]+"-"+e.lut[i>>16&255]+e.lut[i>>24&255]+e.lut[r&255]+e.lut[r>>8&255]+e.lut[r>>16&255]+e.lut[r>>24&255]},e.initialize=function(){for(var t=0;t<256;t++)e.lut[t]=(t<16?"0":"")+t.toString(16)},e.lut=[],e}();ye.UUID=ta;ta.initialize()});var ht=ce(Z=>{"use strict";var fi;Object.defineProperty(Z,"__esModule",{value:!0});Z.addCancelSelectActionEventHandler=Z.clearElementChildren=Z.getScrollY=Z.getScrollX=Z.getFitStatus=Z.truncate=Z.truncateText=Z.stringToCssColor=Z.parseEnum=Z.getEnumValueByName=Z.parseBool=Z.parseNumber=Z.parseString=Z.appendChild=Z.generateUniqueId=Z.isMobileOS=Z.isInternetExplorer=void 0;var pi=Ge(),hd=at();function gd(){return window.document.documentMode!==void 0}Z.isInternetExplorer=gd;function md(){var e=window.navigator.userAgent;return!!e.match(/Android/i)||!!e.match(/iPad/i)||!!e.match(/iPhone/i)}Z.isMobileOS=md;function yd(){return"__ac-"+hd.UUID.generate()}Z.generateUniqueId=yd;function bd(e,t){t&&e.appendChild(t)}Z.appendChild=bd;function vd(e,t){return typeof e=="string"?e:t}Z.parseString=vd;function Cd(e,t){return typeof e=="number"?e:t}Z.parseNumber=Cd;function Ad(e,t){if(typeof e=="boolean")return e;if(typeof e=="string")switch(e.toLowerCase()){case"true":return!0;case"false":return!1;default:return t}return t}Z.parseBool=Ad;function na(e,t){for(var n in e){var i=parseInt(n,10);if(i>=0){var r=e[n];if(r&&typeof r=="string"&&r.toLowerCase()===t.toLowerCase())return i}}}Z.getEnumValueByName=na;function xd(e,t,n){if(!t)return n;var i=na(e,t);return i!==void 0?i:n}Z.parseEnum=xd;function Sd(e){if(e){var t=/#([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?/gi,n=t.exec(e);if(n&&n[4]){var i=parseInt(n[1],16)/255,r=parseInt(n[2],16),o=parseInt(n[3],16),a=parseInt(n[4],16);return"rgba("+r+","+o+","+a+","+i+")"}}return e}Z.stringToCssColor=Sd;function ia(e,t,n,i,r){var o=function(){return t-e.scrollHeight>=-1};if(!o()){for(var a=wd(n),l=0,s=a.length,c=0;l<s;){var u=Math.floor((l+s)/2);i(n,a[u]),o()?(c=a[u],l=u+1):s=u}if(i(n,c),r&&t-e.scrollHeight>=r-1){for(var d=wn(n,c);d<n.length&&(i(n,d),o());)c=d,d=wn(n,d);i(n,c)}}}function Ed(e,t,n){ia(e,t,e.innerText,function(i,r){e.innerText=i.substring(0,r)+"..."},n)}Z.truncateText=Ed;var hi=typeof window>"u"||(fi=window.trustedTypes)===null||fi===void 0?void 0:fi.createPolicy("adaptivecards#deprecatedExportedFunctionPolicy",{createHTML:function(e){return e}});function Id(e,t,n){ia(e,t,e.innerHTML,function(i,r){var o,a=i.substring(0,r)+"...",l=(o=hi?.createHTML(a))!==null&&o!==void 0?o:a;e.innerHTML=l},n)}Z.truncate=Id;function wd(e){for(var t=[],n=wn(e,-1);n<e.length;)e[n]===" "&&t.push(n),n=wn(e,n);return t}function wn(e,t){for(t+=1;t<e.length&&e[t]==="<";)for(;t<e.length&&e[t++]!==">";);return t}function Td(e,t){var n=e.offsetTop,i=n+e.clientHeight;return i<=t?pi.ContainerFitStatus.FullyInContainer:n<t?pi.ContainerFitStatus.Overflowing:pi.ContainerFitStatus.FullyOutOfContainer}Z.getFitStatus=Td;function kd(){return window.pageXOffset}Z.getScrollX=kd;function Pd(){return window.pageYOffset}Z.getScrollY=Pd;function Fd(e){for(;e.firstChild;)e.removeChild(e.firstChild)}Z.clearElementChildren=Fd;function Bd(e){e.onclick=function(t){t.preventDefault(),t.cancelBubble=!0}}Z.addCancelSelectActionEventHandler=Bd});var gt=ce(Q=>{"use strict";var et=Q&&Q.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Q,"__esModule",{value:!0});Q.SerializableObject=Q.property=Q.SerializableObjectSchema=Q.CustomProperty=Q.SerializableObjectCollectionProperty=Q.SerializableObjectProperty=Q.EnumProperty=Q.ValueSetProperty=Q.StringArrayProperty=Q.PixelSizeProperty=Q.NumProperty=Q.BoolProperty=Q.StringProperty=Q.PropertyDefinition=Q.BaseSerializationContext=Q.isVersionLessOrEqual=Q.Versions=Q.Version=void 0;var At=at(),Tn=ht(),Ee=Ge(),st=Ct(),Ze=function(){function e(t,n,i){t===void 0&&(t=1),n===void 0&&(n=1),this._isValid=!0,this._major=t,this._minor=n,this._label=i}return e.parse=function(t,n){if(!!t){var i=new e;i._versionString=t;var r=/(\d+).(\d+)/gi,o=r.exec(t);return o!=null&&o.length===3?(i._major=parseInt(o[1]),i._minor=parseInt(o[2])):i._isValid=!1,i._isValid||n.logParseEvent(void 0,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidVersionString(i._versionString)),i}},e.prototype.toString=function(){return this._isValid?this._major+"."+this._minor:this._versionString},e.prototype.toJSON=function(){return this.toString()},e.prototype.compareTo=function(t){if(!this.isValid||!t.isValid)throw new Error("Cannot compare invalid version.");return this.major>t.major?1:this.major<t.major?-1:this.minor>t.minor?1:this.minor<t.minor?-1:0},Object.defineProperty(e.prototype,"label",{get:function(){return this._label?this._label:this.toString()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"major",{get:function(){return this._major},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"minor",{get:function(){return this._minor},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isValid",{get:function(){return this._isValid},enumerable:!1,configurable:!0}),e}();Q.Version=Ze;var gi=function(){function e(){}return e.getAllDeclaredVersions=function(){var t=e,n=[];for(var i in t)if(i.match(/^v[0-9_]*$/))try{var r=t[i];r instanceof Ze&&n.push(r)}catch{}return n.sort(function(o,a){return o.compareTo(a)})},e.v1_0=new Ze(1,0),e.v1_1=new Ze(1,1),e.v1_2=new Ze(1,2),e.v1_3=new Ze(1,3),e.v1_4=new Ze(1,4),e.v1_5=new Ze(1,5),e.v1_6=new Ze(1,6),e.latest=e.v1_6,e}();Q.Versions=gi;function Dd(e,t){return e instanceof Ze&&t instanceof Ze?t.compareTo(e)>=0:!0}Q.isVersionLessOrEqual=Dd;var mi=function(){function e(t){t===void 0&&(t=gi.latest),this._validationEvents=[],this.targetVersion=t}return e.prototype.serializeValue=function(t,n,i,r,o){r===void 0&&(r=void 0),o===void 0&&(o=!1),i==null||i===r?(!At.GlobalSettings.enableFullJsonRoundTrip||o)&&delete t[n]:i===r?delete t[n]:t[n]=i},e.prototype.serializeString=function(t,n,i,r){i==null||i===r?At.GlobalSettings.enableFullJsonRoundTrip||delete t[n]:t[n]=i},e.prototype.serializeBool=function(t,n,i,r){i==null||i===r?At.GlobalSettings.enableFullJsonRoundTrip||delete t[n]:t[n]=i},e.prototype.serializeNumber=function(t,n,i,r){i==null||i===r||isNaN(i)?At.GlobalSettings.enableFullJsonRoundTrip||delete t[n]:t[n]=i},e.prototype.serializeEnum=function(t,n,i,r,o){o===void 0&&(o=void 0),r==null||r===o?At.GlobalSettings.enableFullJsonRoundTrip||delete n[i]:n[i]=t[r]},e.prototype.serializeArray=function(t,n,i){var r=[];if(i)for(var o=0,a=i;o<a.length;o++){var l=a[o],s=void 0;l instanceof aa?s=l.toJSON(this):l.toJSON?s=l.toJSON():s=l,s!==void 0&&r.push(s)}r.length===0?t.hasOwnProperty(n)&&Array.isArray(t[n])&&delete t[n]:this.serializeValue(t,n,r)},e.prototype.clearEvents=function(){this._validationEvents=[]},e.prototype.logEvent=function(t,n,i,r){this._validationEvents.push({source:t,phase:n,event:i,message:r})},e.prototype.logParseEvent=function(t,n,i){this.logEvent(t,Ee.ValidationPhase.Parse,n,i)},e.prototype.getEventAt=function(t){return this._validationEvents[t]},Object.defineProperty(e.prototype,"eventCount",{get:function(){return this._validationEvents.length},enumerable:!1,configurable:!0}),e}();Q.BaseSerializationContext=mi;var ra=function(e){et(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t}(mi),We=function(){function e(t,n,i,r){this.targetVersion=t,this.name=n,this.defaultValue=i,this.onGetInitialValue=r,this.isSerializationEnabled=!0,this.sequentialNumber=e._sequentialNumber,e._sequentialNumber++}return e.prototype.getInternalName=function(){return this.name},e.prototype.parse=function(t,n,i){return n[this.name]},e.prototype.toJSON=function(t,n,i,r){r.serializeValue(n,this.name,i,this.defaultValue)},e._sequentialNumber=0,e}();Q.PropertyDefinition=We;var Md=function(e){et(t,e);function t(n,i,r,o,a,l){r===void 0&&(r=!0);var s=e.call(this,n,i,a,l)||this;return s.targetVersion=n,s.name=i,s.treatEmptyAsUndefined=r,s.regEx=o,s.defaultValue=a,s.onGetInitialValue=l,s}return t.prototype.parse=function(n,i,r){var o=Tn.parseString(i[this.name],this.defaultValue),a=o===void 0||o===""&&this.treatEmptyAsUndefined;if(!a&&this.regEx!==void 0){var l=this.regEx.exec(o);if(!l){r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidPropertyValue(o,this.name));return}}return o},t.prototype.toJSON=function(n,i,r,o){o.serializeString(i,this.name,r===""&&this.treatEmptyAsUndefined?void 0:r,this.defaultValue)},t}(We);Q.StringProperty=Md;var zd=function(e){et(t,e);function t(n,i,r,o){var a=e.call(this,n,i,r,o)||this;return a.targetVersion=n,a.name=i,a.defaultValue=r,a.onGetInitialValue=o,a}return t.prototype.parse=function(n,i,r){return Tn.parseBool(i[this.name],this.defaultValue)},t.prototype.toJSON=function(n,i,r,o){o.serializeBool(i,this.name,r,this.defaultValue)},t}(We);Q.BoolProperty=zd;var Od=function(e){et(t,e);function t(n,i,r,o){var a=e.call(this,n,i,r,o)||this;return a.targetVersion=n,a.name=i,a.defaultValue=r,a.onGetInitialValue=o,a}return t.prototype.parse=function(n,i,r){return Tn.parseNumber(i[this.name],this.defaultValue)},t.prototype.toJSON=function(n,i,r,o){o.serializeNumber(i,this.name,r,this.defaultValue)},t}(We);Q.NumProperty=Od;var _d=function(e){et(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.parse=function(n,i,r){var o=void 0,a=i[this.name];if(typeof a=="string"){var l=!1;try{var s=At.SizeAndUnit.parse(a,!0);s.unit===Ee.SizeUnit.Pixel&&(o=s.physicalSize,l=!0)}catch{}l||r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidPropertyValue(i[this.name],"minHeight"))}return o},t.prototype.toJSON=function(n,i,r,o){o.serializeValue(i,this.name,typeof r=="number"&&!isNaN(r)?r+"px":void 0)},t}(We);Q.PixelSizeProperty=_d;var Rd=function(e){et(t,e);function t(n,i,r,o){var a=e.call(this,n,i,r,o)||this;return a.targetVersion=n,a.name=i,a.defaultValue=r,a.onGetInitialValue=o,a}return t.prototype.parse=function(n,i,r){var o=i[this.name];if(o===void 0||!Array.isArray(o))return this.defaultValue;for(var a=[],l=0,s=o;l<s.length;l++){var c=s[l];typeof c=="string"?a.push(c):r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,'Invalid array value "'.concat(JSON.stringify(c),'" of type "').concat(typeof c,'" ignored for "').concat(this.name,'".'))}return a},t.prototype.toJSON=function(n,i,r,o){o.serializeArray(i,this.name,r)},t}(We);Q.StringArrayProperty=Rd;var Vd=function(e){et(t,e);function t(n,i,r,o,a){var l=e.call(this,n,i,o,a)||this;return l.targetVersion=n,l.name=i,l.values=r,l.defaultValue=o,l.onGetInitialValue=a,l}return t.prototype.isValidValue=function(n,i){for(var r=0,o=this.values;r<o.length;r++){var a=o[r];if(n.toLowerCase()===a.value.toLowerCase()){var l=a.targetVersion?a.targetVersion:this.targetVersion;return l.compareTo(i.targetVersion)<=0}}return!1},t.prototype.parse=function(n,i,r){var o=i[this.name];if(o===void 0)return this.defaultValue;if(typeof o=="string")for(var a=0,l=this.values;a<l.length;a++){var s=l[a];if(o.toLowerCase()===s.value.toLowerCase()){var c=s.targetVersion?s.targetVersion:this.targetVersion;return c.compareTo(r.targetVersion)<=0?s.value:(r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.propertyValueNotSupported(o,this.name,c.toString(),r.targetVersion.toString())),this.defaultValue)}}return r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidPropertyValue(o,this.name)),this.defaultValue},t.prototype.toJSON=function(n,i,r,o){var a=!1;if(r!==void 0){a=!0;for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===r){var u=c.targetVersion?c.targetVersion:this.targetVersion;if(u.compareTo(o.targetVersion)<=0){a=!1;break}else o.logEvent(n,Ee.ValidationPhase.ToJSON,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.propertyValueNotSupported(r,this.name,u.toString(),o.targetVersion.toString()))}}}a||o.serializeValue(i,this.name,r,this.defaultValue,!0)},t}(We);Q.ValueSetProperty=Vd;var Ld=function(e){et(t,e);function t(n,i,r,o,a,l){var s=e.call(this,n,i,o,l)||this;if(s.targetVersion=n,s.name=i,s.enumType=r,s.defaultValue=o,s.onGetInitialValue=l,s._values=[],a)s._values=a;else for(var c in r){var u=parseInt(c,10);u>=0&&s._values.push({value:u})}return s}return t.prototype.parse=function(n,i,r){var o=i[this.name];if(typeof o!="string")return this.defaultValue;var a=Tn.getEnumValueByName(this.enumType,o);if(a!==void 0)for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===a){var u=c.targetVersion?c.targetVersion:this.targetVersion;return u.compareTo(r.targetVersion)<=0?a:(r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.propertyValueNotSupported(o,this.name,u.toString(),r.targetVersion.toString())),this.defaultValue)}}return r.logParseEvent(n,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidPropertyValue(o,this.name)),this.defaultValue},t.prototype.toJSON=function(n,i,r,o){var a=!1;if(r!==void 0){a=!0;for(var l=0,s=this.values;l<s.length;l++){var c=s[l];if(c.value===r){var u=c.targetVersion?c.targetVersion:this.targetVersion;if(u.compareTo(o.targetVersion)<=0){a=!1;break}else o.logEvent(n,Ee.ValidationPhase.ToJSON,Ee.ValidationEvent.InvalidPropertyValue,st.Strings.errors.invalidPropertyValue(r,this.name))}}}a||o.serializeEnum(this.enumType,i,this.name,r,this.defaultValue)},Object.defineProperty(t.prototype,"values",{get:function(){return this._values},enumerable:!1,configurable:!0}),t}(We);Q.EnumProperty=Ld;var Nd=function(e){et(t,e);function t(n,i,r,o,a){o===void 0&&(o=!1);var l=e.call(this,n,i,a,function(s){return l.nullable?void 0:new l.objectType})||this;return l.targetVersion=n,l.name=i,l.objectType=r,l.nullable=o,l}return t.prototype.parse=function(n,i,r){var o=i[this.name];if(o===void 0)return this.onGetInitialValue?this.onGetInitialValue(n):this.defaultValue;var a=new this.objectType;return a.parse(o,r),a},t.prototype.toJSON=function(n,i,r,o){var a=void 0;r!==void 0&&!r.hasAllDefaultValues()&&(a=r.toJSON(o)),typeof a=="object"&&Object.keys(a).length===0&&(a=void 0),o.serializeValue(i,this.name,a,this.defaultValue,!0)},t}(We);Q.SerializableObjectProperty=Nd;var Hd=function(e){et(t,e);function t(n,i,r,o){var a=e.call(this,n,i,void 0,function(l){return[]})||this;return a.targetVersion=n,a.name=i,a.objectType=r,a.onItemAdded=o,a}return t.prototype.parse=function(n,i,r){var o=[],a=i[this.name];if(Array.isArray(a))for(var l=0,s=a;l<s.length;l++){var c=s[l],u=new this.objectType;u.parse(c,r),o.push(u),this.onItemAdded&&this.onItemAdded(n,u)}return o.length>0?o:this.onGetInitialValue?this.onGetInitialValue(n):void 0},t.prototype.toJSON=function(n,i,r,o){o.serializeArray(i,this.name,r)},t}(We);Q.SerializableObjectCollectionProperty=Hd;var Gd=function(e){et(t,e);function t(n,i,r,o,a,l){var s=e.call(this,n,i,a,l)||this;if(s.targetVersion=n,s.name=i,s.onParse=r,s.onToJSON=o,s.defaultValue=a,s.onGetInitialValue=l,!s.onParse)throw new Error("CustomPropertyDefinition instances must have an onParse handler.");if(!s.onToJSON)throw new Error("CustomPropertyDefinition instances must have an onToJSON handler.");return s}return t.prototype.parse=function(n,i,r){return this.onParse(n,this,i,r)},t.prototype.toJSON=function(n,i,r,o){this.onToJSON(n,this,i,r,o)},t}(We);Q.CustomProperty=Gd;var oa=function(){function e(){this._properties=[]}return e.prototype.indexOf=function(t){for(var n=0;n<this._properties.length;n++)if(this._properties[n]===t)return n;return-1},e.prototype.add=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++){var o=r[i];this.indexOf(o)===-1&&this._properties.push(o)}},e.prototype.remove=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=0,r=t;i<r.length;i++)for(var o=r[i];;){var a=this.indexOf(o);if(a>=0)this._properties.splice(a,1);else break}},e.prototype.getItemAt=function(t){return this._properties[t]},e.prototype.getCount=function(){return this._properties.length},e}();Q.SerializableObjectSchema=oa;function Yd(e){return function(t,n){var i=Object.getOwnPropertyDescriptor(t,n)||{};!i.get&&!i.set&&(i.get=function(){return this.getValue(e)},i.set=function(r){this.setValue(e,r)},Object.defineProperty(t,n,i))}}Q.property=Yd;var aa=function(){function e(){this._propertyBag={},this._rawProperties={},this.maxVersion=e.defaultMaxVersion;for(var t=this.getSchema(),n=0;n<t.getCount();n++){var i=t.getItemAt(n);i.onGetInitialValue&&this.setValue(i,i.onGetInitialValue(this))}}return e.prototype.getDefaultSerializationContext=function(){return new ra},e.prototype.populateSchema=function(t){var n=this.constructor,i=[];for(var r in n)try{var o=n[r];o instanceof We&&i.push(o)}catch{}if(i.length>0){var a=i.sort(function(l,s){return l.sequentialNumber>s.sequentialNumber?1:l.sequentialNumber<s.sequentialNumber?-1:0});t.add.apply(t,a)}e.onRegisterCustomProperties&&e.onRegisterCustomProperties(this,t)},e.prototype.getValue=function(t){return this._propertyBag.hasOwnProperty(t.getInternalName())?this._propertyBag[t.getInternalName()]:t.defaultValue},e.prototype.setValue=function(t,n){n==null?delete this._propertyBag[t.getInternalName()]:this._propertyBag[t.getInternalName()]=n},e.prototype.internalParse=function(t,n){if(this._propertyBag={},this._rawProperties=At.GlobalSettings.enableFullJsonRoundTrip?t||{}:{},t)for(var i=this.getSchema(),r=0;r<i.getCount();r++){var o=i.getItemAt(r);if(o.isSerializationEnabled){var a=o.onGetInitialValue?o.onGetInitialValue(this):void 0;t.hasOwnProperty(o.name)&&(o.targetVersion.compareTo(n.targetVersion)<=0?a=o.parse(this,t,n):n.logParseEvent(this,Ee.ValidationEvent.UnsupportedProperty,st.Strings.errors.propertyNotSupported(o.name,o.targetVersion.toString(),n.targetVersion.toString()))),this.setValue(o,a)}}else this.resetDefaultValues()},e.prototype.internalToJSON=function(t,n){for(var i=this.getSchema(),r=[],o=0;o<i.getCount();o++){var a=i.getItemAt(o);a.isSerializationEnabled&&a.targetVersion.compareTo(n.targetVersion)<=0&&r.indexOf(a.name)===-1&&(a.toJSON(this,t,this.getValue(a),n),r.push(a.name))}},e.prototype.shouldSerialize=function(t){return!0},e.prototype.parse=function(t,n){this.internalParse(t,n||new ra)},e.prototype.toJSON=function(t){var n;if(t&&t instanceof mi?n=t:(n=this.getDefaultSerializationContext(),n.toJSONOriginalParam=t),this.shouldSerialize(n)){var i=void 0;return At.GlobalSettings.enableFullJsonRoundTrip&&this._rawProperties&&typeof this._rawProperties=="object"?i=this._rawProperties:i={},this.internalToJSON(i,n),i}else return},e.prototype.hasDefaultValue=function(t){return this.getValue(t)===t.defaultValue},e.prototype.hasAllDefaultValues=function(){for(var t=this.getSchema(),n=0;n<t.getCount();n++){var i=t.getItemAt(n);if(!this.hasDefaultValue(i))return!1}return!0},e.prototype.resetDefaultValues=function(){for(var t=this.getSchema(),n=0;n<t.getCount();n++){var i=t.getItemAt(n);this.setValue(i,i.defaultValue)}},e.prototype.setCustomProperty=function(t,n){var i=typeof n=="string"&&!n||n===void 0||n===null;i?delete this._rawProperties[t]:this._rawProperties[t]=n},e.prototype.getCustomProperty=function(t){return this._rawProperties[t]},e.prototype.getSchema=function(){var t=e._schemaCache[this.getSchemaKey()];return t||(t=new oa,this.populateSchema(t),e._schemaCache[this.getSchemaKey()]=t),t},e.defaultMaxVersion=gi.latest,e._schemaCache={},e}();Q.SerializableObject=aa});var kn=ce(Gt=>{"use strict";var Wd=Gt&&Gt.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Gt,"__esModule",{value:!0});Gt.HostCapabilities=void 0;var sa=gt(),$d=function(e){Wd(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._capabilities={},n}return t.prototype.getSchemaKey=function(){return"HostCapabilities"},t.prototype.internalParse=function(n,i){if(e.prototype.internalParse.call(this,n,i),n)for(var r in n){var o=n[r];if(typeof o=="string")if(o==="*")this.addCapability(r,"*");else{var a=sa.Version.parse(o,i);a?.isValid&&this.addCapability(r,a)}}},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i);for(var r in this._capabilities)n[r]=this._capabilities[r]},t.prototype.addCapability=function(n,i){this._capabilities[n]=i},t.prototype.removeCapability=function(n){delete this._capabilities[n]},t.prototype.clear=function(){this._capabilities={}},t.prototype.hasCapability=function(n,i){return this._capabilities.hasOwnProperty(n)?i==="*"||this._capabilities[n]==="*"?!0:i.compareTo(this._capabilities[n])<=0:!1},t.prototype.areAllMet=function(n){for(var i in this._capabilities)if(!n.hasCapability(i,this._capabilities[i]))return!1;return!0},t}(sa.SerializableObject);Gt.HostCapabilities=$d});var nn=ce(Y=>{"use strict";var Wt=Y&&Y.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(Y,"__esModule",{value:!0});Y.defaultHostConfig=Y.HostConfig=Y.CarouselConfig=Y.FontTypeSet=Y.FontTypeDefinition=Y.ContainerStyleSet=Y.ContainerStyleDefinition=Y.ColorSetDefinition=Y.ActionsConfig=Y.ShowCardActionConfig=Y.FactSetConfig=Y.FactTitleDefinition=Y.FactTextDefinition=Y.InputConfig=Y.InputLabelConfig=Y.RequiredInputLabelTextDefinition=Y.TextBlockConfig=Y.TextStyleSet=Y.TextStyleDefinition=Y.BaseTextDefinition=Y.TableConfig=Y.MediaConfig=Y.ImageSetConfig=Y.AdaptiveCardConfig=Y.TextColorDefinition=Y.ColorDefinition=void 0;var z=Ge(),Bn=ht(),la=at(),qd=kn();function $e(e,t,n){if(typeof t=="string"){var i=Bn.parseEnum(e,t,n);return i!==void 0?i:n}else return typeof t=="number"?t:n}var yi=function(){function e(t,n){this.default="#000000",this.subtle="#666666",t&&(this.default=t),n&&(this.subtle=n)}return e.prototype.parse=function(t){t&&(this.default=t.default||this.default,this.subtle=t.subtle||this.subtle)},e}();Y.ColorDefinition=yi;var xt=function(e){Wt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.highlightColors=new yi("#22000000","#11000000"),n}return t.prototype.parse=function(n){e.prototype.parse.call(this,n),n&&this.highlightColors.parse(n.highlightColors)},t}(yi);Y.TextColorDefinition=xt;var bi=function(){function e(t){this.allowCustomStyle=!1,t&&(this.allowCustomStyle=t.allowCustomStyle||this.allowCustomStyle)}return e}();Y.AdaptiveCardConfig=bi;var vi=function(){function e(t){this.imageSize=z.Size.Medium,this.maxImageHeight=100,t&&(this.imageSize=t.imageSize!=null?t.imageSize:this.imageSize,this.maxImageHeight=Bn.parseNumber(t.maxImageHeight,100))}return e.prototype.toJSON=function(){return{imageSize:z.Size[this.imageSize],maxImageHeight:this.maxImageHeight}},e}();Y.ImageSetConfig=vi;var ca=function(){function e(t){this.allowInlinePlayback=!0,t&&(this.defaultPoster=t.defaultPoster,this.allowInlinePlayback=t.allowInlinePlayback||this.allowInlinePlayback)}return e.prototype.toJSON=function(){return{defaultPoster:this.defaultPoster,allowInlinePlayback:this.allowInlinePlayback}},e}();Y.MediaConfig=ca;var ua=function(){function e(t){this.cellSpacing=8,t&&(this.cellSpacing=t.cellSpacing&&typeof t.cellSpacing=="number"?t.cellSpacing:this.cellSpacing)}return e.prototype.toJSON=function(){return{cellSpacing:this.cellSpacing}},e}();Y.TableConfig=ua;var St=function(){function e(t){this.size=z.TextSize.Default,this.color=z.TextColor.Default,this.isSubtle=!1,this.weight=z.TextWeight.Default,this.parse(t)}return e.prototype.parse=function(t){t&&(this.size=$e(z.TextSize,t.size,this.size),this.color=$e(z.TextColor,t.color,this.color),this.isSubtle=t.isSubtle!==void 0&&typeof t.isSubtle=="boolean"?t.isSubtle:this.isSubtle,this.weight=$e(z.TextWeight,t.weight,this.getDefaultWeight()))},e.prototype.getDefaultWeight=function(){return z.TextWeight.Default},e.prototype.toJSON=function(){return{size:z.TextSize[this.size],color:z.TextColor[this.color],isSubtle:this.isSubtle,weight:z.TextWeight[this.weight]}},e}();Y.BaseTextDefinition=St;var Pn=function(e){Wt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.fontType=z.FontType.Default,n}return t.prototype.parse=function(n){e.prototype.parse.call(this,n),n&&(this.fontType=$e(z.FontType,n.fontType,this.fontType))},t}(St);Y.TextStyleDefinition=Pn;var Ci=function(){function e(t){this.default=new Pn,this.heading=new Pn({size:"Large",weight:"Bolder"}),this.columnHeader=new Pn({weight:"Bolder"}),t&&(this.heading.parse(t.heading),this.columnHeader.parse(t.columnHeader))}return e.prototype.getStyleByName=function(t){switch(t.toLowerCase()){case"heading":return this.heading;case"columnHeader":return this.columnHeader;default:return this.default}},e}();Y.TextStyleSet=Ci;var Ai=function(){function e(t){t&&(this.headingLevel=Bn.parseNumber(t.headingLevel))}return e}();Y.TextBlockConfig=Ai;var xi=function(e){Wt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.suffix=" *",n.suffixColor=z.TextColor.Attention,n}return t.prototype.parse=function(n){e.prototype.parse.call(this,n),n&&(this.suffix=n.suffix||this.suffix,this.suffixColor=$e(z.TextColor,n.suffixColor,this.suffixColor))},t.prototype.toJSON=function(){var n=e.prototype.toJSON.call(this);return n.suffix=this.suffix,n.suffixColor=z.TextColor[this.suffixColor],n},t}(St);Y.RequiredInputLabelTextDefinition=xi;var Si=function(){function e(t){this.inputSpacing=z.Spacing.Small,this.requiredInputs=new xi,this.optionalInputs=new St,t&&(this.inputSpacing=$e(z.Spacing,t.inputSpacing,this.inputSpacing),this.requiredInputs=new xi(t.requiredInputs),this.optionalInputs=new St(t.optionalInputs))}return e}();Y.InputLabelConfig=Si;var Ei=function(){function e(t){this.label=new Si,this.errorMessage=new St({color:z.TextColor.Attention}),t&&(this.label=new Si(t.label),this.errorMessage=new St(t.errorMessage))}return e}();Y.InputConfig=Ei;var Fn=function(e){Wt(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.wrap=!0,n}return t.prototype.parse=function(n){e.prototype.parse.call(this,n),n&&(this.wrap=n.wrap!=null?n.wrap:this.wrap)},t.prototype.toJSON=function(){var n=e.prototype.toJSON.call(this);return n.wrap=this.wrap,n},t}(St);Y.FactTextDefinition=Fn;var Ii=function(e){Wt(t,e);function t(n){var i=e.call(this,n)||this;return i.maxWidth=150,i.weight=z.TextWeight.Bolder,n&&(i.maxWidth=n.maxWidth!=null?n.maxWidth:i.maxWidth,i.weight=$e(z.TextWeight,n.weight,z.TextWeight.Bolder)),i}return t.prototype.getDefaultWeight=function(){return z.TextWeight.Bolder},t}(Fn);Y.FactTitleDefinition=Ii;var wi=function(){function e(t){this.title=new Ii,this.value=new Fn,this.spacing=10,t&&(this.title=new Ii(t.title),this.value=new Fn(t.value),this.spacing=t.spacing&&t.spacing!=null?t.spacing&&t.spacing:this.spacing)}return e}();Y.FactSetConfig=wi;var Ti=function(){function e(t){this.actionMode=z.ShowCardActionMode.Inline,this.inlineTopMargin=16,this.style=z.ContainerStyle.Emphasis,t&&(this.actionMode=$e(z.ShowCardActionMode,t.actionMode,z.ShowCardActionMode.Inline),this.inlineTopMargin=t.inlineTopMargin!=null?t.inlineTopMargin:this.inlineTopMargin,this.style=t.style&&typeof t.style=="string"?t.style:z.ContainerStyle.Emphasis)}return e.prototype.toJSON=function(){return{actionMode:z.ShowCardActionMode[this.actionMode],inlineTopMargin:this.inlineTopMargin,style:this.style}},e}();Y.ShowCardActionConfig=Ti;var ki=function(){function e(t){if(this.maxActions=5,this.spacing=z.Spacing.Default,this.buttonSpacing=20,this.showCard=new Ti,this.preExpandSingleShowCardAction=!1,this.actionsOrientation=z.Orientation.Horizontal,this.actionAlignment=z.ActionAlignment.Left,this.iconPlacement=z.ActionIconPlacement.LeftOfTitle,this.allowTitleToWrap=!1,this.iconSize=16,t){this.maxActions=t.maxActions!=null?t.maxActions:this.maxActions,this.spacing=$e(z.Spacing,t.spacing&&t.spacing,z.Spacing.Default),this.buttonSpacing=t.buttonSpacing!=null?t.buttonSpacing:this.buttonSpacing,this.showCard=new Ti(t.showCard),this.preExpandSingleShowCardAction=Bn.parseBool(t.preExpandSingleShowCardAction,!1),this.actionsOrientation=$e(z.Orientation,t.actionsOrientation,z.Orientation.Horizontal),this.actionAlignment=$e(z.ActionAlignment,t.actionAlignment,z.ActionAlignment.Left),this.iconPlacement=$e(z.ActionIconPlacement,t.iconPlacement,z.ActionIconPlacement.LeftOfTitle),this.allowTitleToWrap=t.allowTitleToWrap!=null?t.allowTitleToWrap:this.allowTitleToWrap;try{var n=la.SizeAndUnit.parse(t.iconSize);n.unit===z.SizeUnit.Pixel&&(this.iconSize=n.physicalSize)}catch{}}}return e.prototype.toJSON=function(){return{maxActions:this.maxActions,spacing:z.Spacing[this.spacing],buttonSpacing:this.buttonSpacing,showCard:this.showCard,preExpandSingleShowCardAction:this.preExpandSingleShowCardAction,actionsOrientation:z.Orientation[this.actionsOrientation],actionAlignment:z.ActionAlignment[this.actionAlignment]}},e}();Y.ActionsConfig=ki;var da=function(){function e(t){this.default=new xt,this.dark=new xt,this.light=new xt,this.accent=new xt,this.good=new xt,this.warning=new xt,this.attention=new xt,this.parse(t)}return e.prototype.parseSingleColor=function(t,n){t&&this[n].parse(t[n])},e.prototype.parse=function(t){t&&(this.parseSingleColor(t,"default"),this.parseSingleColor(t,"dark"),this.parseSingleColor(t,"light"),this.parseSingleColor(t,"accent"),this.parseSingleColor(t,"good"),this.parseSingleColor(t,"warning"),this.parseSingleColor(t,"attention"))},e}();Y.ColorSetDefinition=da;var Bi=function(){function e(t){this.foregroundColors=new da({default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#E69500",subtle:"#DDE69500"},attention:{default:"#CC3300",subtle:"#DDCC3300"}}),this.parse(t)}return e.prototype.parse=function(t){t&&(this.backgroundColor=t.backgroundColor,this.foregroundColors.parse(t.foregroundColors),this.highlightBackgroundColor=t.highlightBackgroundColor,this.highlightForegroundColor=t.highlightForegroundColor,this.borderColor=t.borderColor)},Object.defineProperty(e.prototype,"isBuiltIn",{get:function(){return!1},enumerable:!1,configurable:!0}),e}();Y.ContainerStyleDefinition=Bi;var Yt=function(e){Wt(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"isBuiltIn",{get:function(){return!0},enumerable:!1,configurable:!0}),t}(Bi),Pi=function(){function e(t){if(this._allStyles={},this._allStyles[z.ContainerStyle.Default]=new Yt,this._allStyles[z.ContainerStyle.Emphasis]=new Yt,this._allStyles[z.ContainerStyle.Accent]=new Yt,this._allStyles[z.ContainerStyle.Good]=new Yt,this._allStyles[z.ContainerStyle.Attention]=new Yt,this._allStyles[z.ContainerStyle.Warning]=new Yt,t){this._allStyles[z.ContainerStyle.Default].parse(t[z.ContainerStyle.Default]),this._allStyles[z.ContainerStyle.Emphasis].parse(t[z.ContainerStyle.Emphasis]),this._allStyles[z.ContainerStyle.Accent].parse(t[z.ContainerStyle.Accent]),this._allStyles[z.ContainerStyle.Good].parse(t[z.ContainerStyle.Good]),this._allStyles[z.ContainerStyle.Attention].parse(t[z.ContainerStyle.Attention]),this._allStyles[z.ContainerStyle.Warning].parse(t[z.ContainerStyle.Warning]);var n=t.customStyles;if(n&&Array.isArray(n))for(var i=0,r=n;i<r.length;i++){var o=r[i];if(o){var a=o.name;a&&typeof a=="string"&&(this._allStyles.hasOwnProperty(a)?this._allStyles[a].parse(o.style):this._allStyles[a]=new Bi(o.style))}}}}return e.prototype.toJSON=function(){var t=this,n=[];Object.keys(this._allStyles).forEach(function(r){t._allStyles[r].isBuiltIn||n.push({name:r,style:t._allStyles[r]})});var i={default:this.default,emphasis:this.emphasis};return n.length>0&&(i.customStyles=n),i},e.prototype.getStyleByName=function(t,n){return t&&this._allStyles.hasOwnProperty(t)?this._allStyles[t]:n||this._allStyles[z.ContainerStyle.Default]},Object.defineProperty(e.prototype,"default",{get:function(){return this._allStyles[z.ContainerStyle.Default]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"emphasis",{get:function(){return this._allStyles[z.ContainerStyle.Emphasis]},enumerable:!1,configurable:!0}),e}();Y.ContainerStyleSet=Pi;var tn=function(){function e(t){this.fontFamily="Segoe UI,Segoe,Segoe WP,Helvetica Neue,Helvetica,sans-serif",this.fontSizes={small:12,default:14,medium:17,large:21,extraLarge:26},this.fontWeights={lighter:200,default:400,bolder:600},t&&(this.fontFamily=t)}return e.prototype.parse=function(t){this.fontFamily=t.fontFamily||this.fontFamily,this.fontSizes={small:t.fontSizes&&t.fontSizes.small||this.fontSizes.small,default:t.fontSizes&&t.fontSizes.default||this.fontSizes.default,medium:t.fontSizes&&t.fontSizes.medium||this.fontSizes.medium,large:t.fontSizes&&t.fontSizes.large||this.fontSizes.large,extraLarge:t.fontSizes&&t.fontSizes.extraLarge||this.fontSizes.extraLarge},this.fontWeights={lighter:t.fontWeights&&t.fontWeights.lighter||this.fontWeights.lighter,default:t.fontWeights&&t.fontWeights.default||this.fontWeights.default,bolder:t.fontWeights&&t.fontWeights.bolder||this.fontWeights.bolder}},e.monospace=new e("'Courier New', Courier, monospace"),e}();Y.FontTypeDefinition=tn;var fa=function(){function e(t){this.default=new tn,this.monospace=new tn("'Courier New', Courier, monospace"),t&&(this.default.parse(t.default),this.monospace.parse(t.monospace))}return e.prototype.getStyleDefinition=function(t){switch(t){case z.FontType.Monospace:return this.monospace;case z.FontType.Default:default:return this.default}},e}();Y.FontTypeSet=fa;var Fi=function(){function e(t){this.maxCarouselPages=10,this.minAutoplayDelay=5e3,t&&(this.maxCarouselPages=t.maxCarouselPages!=null?t.maxCarouselPages:this.maxCarouselPages,this.minAutoplayDelay=t.minAutoplayDelay!=null?t.minAutoplayDelay:this.minAutoplayDelay)}return e.prototype.toJSON=function(){return{maxCarouselPages:this.maxCarouselPages,minAutoplayDelay:this.minAutoplayDelay}},e}();Y.CarouselConfig=Fi;var pa=function(){function e(t){this.hostCapabilities=new qd.HostCapabilities,this.choiceSetInputValueSeparator=",",this.supportsInteractivity=!0,this.spacing={small:3,default:8,medium:20,large:30,extraLarge:40,padding:15},this.separator={lineThickness:1,lineColor:"#EEEEEE"},this.imageSizes={small:40,medium:80,large:160},this.containerStyles=new Pi,this.inputs=new Ei,this.actions=new ki,this.adaptiveCard=new bi,this.imageSet=new vi,this.media=new ca,this.factSet=new wi,this.table=new ua,this.textStyles=new Ci,this.textBlock=new Ai,this.carousel=new Fi,this.alwaysAllowBleed=!1,t&&((typeof t=="string"||t instanceof String)&&(t=JSON.parse(t)),this.choiceSetInputValueSeparator=t&&typeof t.choiceSetInputValueSeparator=="string"?t.choiceSetInputValueSeparator:this.choiceSetInputValueSeparator,this.supportsInteractivity=t&&typeof t.supportsInteractivity=="boolean"?t.supportsInteractivity:this.supportsInteractivity,this._legacyFontType=new tn,this._legacyFontType.parse(t),t.fontTypes&&(this.fontTypes=new fa(t.fontTypes)),t.lineHeights&&(this.lineHeights={small:t.lineHeights.small,default:t.lineHeights.default,medium:t.lineHeights.medium,large:t.lineHeights.large,extraLarge:t.lineHeights.extraLarge}),this.imageSizes={small:t.imageSizes&&t.imageSizes.small||this.imageSizes.small,medium:t.imageSizes&&t.imageSizes.medium||this.imageSizes.medium,large:t.imageSizes&&t.imageSizes.large||this.imageSizes.large},this.containerStyles=new Pi(t.containerStyles),this.spacing={small:t.spacing&&t.spacing.small||this.spacing.small,default:t.spacing&&t.spacing.default||this.spacing.default,medium:t.spacing&&t.spacing.medium||this.spacing.medium,large:t.spacing&&t.spacing.large||this.spacing.large,extraLarge:t.spacing&&t.spacing.extraLarge||this.spacing.extraLarge,padding:t.spacing&&t.spacing.padding||this.spacing.padding},this.separator={lineThickness:t.separator&&t.separator.lineThickness||this.separator.lineThickness,lineColor:t.separator&&t.separator.lineColor||this.separator.lineColor},this.inputs=new Ei(t.inputs||this.inputs),this.actions=new ki(t.actions||this.actions),this.adaptiveCard=new bi(t.adaptiveCard||this.adaptiveCard),this.imageSet=new vi(t.imageSet),this.factSet=new wi(t.factSet),this.textStyles=new Ci(t.textStyles),this.textBlock=new Ai(t.textBlock),this.carousel=new Fi(t.carousel))}return e.prototype.getFontTypeDefinition=function(t){return this.fontTypes?this.fontTypes.getStyleDefinition(t):t===z.FontType.Monospace?tn.monospace:this._legacyFontType},e.prototype.getEffectiveSpacing=function(t){switch(t){case z.Spacing.Small:return this.spacing.small;case z.Spacing.Default:return this.spacing.default;case z.Spacing.Medium:return this.spacing.medium;case z.Spacing.Large:return this.spacing.large;case z.Spacing.ExtraLarge:return this.spacing.extraLarge;case z.Spacing.Padding:return this.spacing.padding;default:return 0}},e.prototype.paddingDefinitionToSpacingDefinition=function(t){return new la.SpacingDefinition(this.getEffectiveSpacing(t.top),this.getEffectiveSpacing(t.right),this.getEffectiveSpacing(t.bottom),this.getEffectiveSpacing(t.left))},e.prototype.makeCssClassNames=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];for(var i=[],r=0,o=t;r<o.length;r++){var a=o[r];i.push((this.cssClassNamePrefix?this.cssClassNamePrefix+"-":"")+a)}return i},e.prototype.makeCssClassName=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=this.makeCssClassNames.apply(this,t).join(" ");return i||""},Object.defineProperty(e.prototype,"fontFamily",{get:function(){return this._legacyFontType.fontFamily},set:function(t){this._legacyFontType.fontFamily=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSizes",{get:function(){return this._legacyFontType.fontSizes},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontWeights",{get:function(){return this._legacyFontType.fontWeights},enumerable:!1,configurable:!0}),e}();Y.HostConfig=pa;Y.defaultHostConfig=new pa({supportsInteractivity:!0,spacing:{small:10,default:20,medium:30,large:40,extraLarge:50,padding:20},separator:{lineThickness:1,lineColor:"#EEEEEE"},fontTypes:{default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},imageSizes:{small:40,medium:80,large:160},containerStyles:{default:{backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},emphasis:{backgroundColor:"#08000000",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},accent:{backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},good:{backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},attention:{backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},warning:{backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}}},inputs:{label:{requiredInputs:{weight:z.TextWeight.Bolder,suffix:" *",suffixColor:z.TextColor.Attention},optionalInputs:{weight:z.TextWeight.Bolder}},errorMessage:{color:z.TextColor.Attention,weight:z.TextWeight.Bolder}},actions:{maxActions:5,spacing:z.Spacing.Default,buttonSpacing:10,showCard:{actionMode:z.ShowCardActionMode.Inline,inlineTopMargin:16},actionsOrientation:z.Orientation.Horizontal,actionAlignment:z.ActionAlignment.Left},adaptiveCard:{allowCustomStyle:!1},imageSet:{imageSize:z.Size.Medium,maxImageHeight:100},factSet:{title:{color:z.TextColor.Default,size:z.TextSize.Default,isSubtle:!1,weight:z.TextWeight.Bolder,wrap:!0,maxWidth:150},value:{color:z.TextColor.Default,size:z.TextSize.Default,isSubtle:!1,weight:z.TextWeight.Default,wrap:!0},spacing:10},carousel:{maxCarouselPages:10,minAutoplayDuration:5e3}})});var on=ce($t=>{"use strict";Object.defineProperty($t,"__esModule",{value:!0});$t.GlobalRegistry=$t.CardObjectRegistry=void 0;var jd=gt(),rn=function(){function e(){this._items={}}return e.prototype.findByName=function(t){return this._items.hasOwnProperty(t)?this._items[t]:void 0},e.prototype.clear=function(){this._items={}},e.prototype.copyTo=function(t){for(var n=Object.keys(this._items),i=0,r=n;i<r.length;i++){var o=r[i],a=this._items[o];t.register(a.typeName,a.objectType,a.schemaVersion)}},e.prototype.register=function(t,n,i){i===void 0&&(i=jd.Versions.v1_0);var r=this.findByName(t);r!==void 0?r.objectType=n:r={typeName:t,objectType:n,schemaVersion:i},this._items[t]=r},e.prototype.unregister=function(t){delete this._items[t]},e.prototype.createInstance=function(t,n){var i=this.findByName(t);return i&&i.schemaVersion.compareTo(n)<=0?new i.objectType:void 0},e.prototype.getItemCount=function(){return Object.keys(this._items).length},e.prototype.getItemAt=function(t){var n=this;return Object.keys(this._items).map(function(i){return n._items[i]})[t]},e}();$t.CardObjectRegistry=rn;var Ud=function(){function e(){}return e.populateWithDefaultElements=function(t){t.clear(),e.defaultElements.copyTo(t)},e.populateWithDefaultActions=function(t){t.clear(),e.defaultActions.copyTo(t)},Object.defineProperty(e,"elements",{get:function(){return e._elements||(e._elements=new rn,e.populateWithDefaultElements(e._elements)),e._elements},enumerable:!1,configurable:!0}),Object.defineProperty(e,"actions",{get:function(){return e._actions||(e._actions=new rn,e.populateWithDefaultActions(e._actions)),e._actions},enumerable:!1,configurable:!0}),e.reset=function(){e._elements=void 0,e._actions=void 0},e.defaultElements=new rn,e.defaultActions=new rn,e}();$t.GlobalRegistry=Ud});var Di=ce(lt=>{"use strict";var Qd=lt&&lt.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),ha=lt&&lt.__decorate||function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(lt,"__esModule",{value:!0});lt.CardObject=lt.ValidationResults=void 0;var ma=Ge(),Jd=Ct(),Xd=at(),ga=kn(),mt=gt(),ya=function(){function e(){this.allIds={},this.validationEvents=[]}return e.prototype.addFailure=function(t,n,i){this.validationEvents.push({phase:ma.ValidationPhase.Validation,source:t,event:n,message:i})},e}();lt.ValidationResults=ya;var Kd=function(e){Qd(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._shouldFallback=!1,n}return t.prototype.getSchemaKey=function(){return this.getJsonTypeName()},Object.defineProperty(t.prototype,"requires",{get:function(){return this.getValue(t.requiresProperty)},enumerable:!1,configurable:!0}),t.prototype.contains=function(n){return this._renderedElement?this._renderedElement.contains(n):!1},t.prototype.preProcessPropertyValue=function(n,i){var r=i===void 0?this.getValue(n):i;if(Xd.GlobalSettings.allowPreProcessingPropertyValues){for(var o=this;o&&!o.onPreProcessPropertyValue;)o=o.parent;if(o&&o.onPreProcessPropertyValue)return o.onPreProcessPropertyValue(this,n,r)}return r},t.prototype.setParent=function(n){this._parent=n},t.prototype.setShouldFallback=function(n){this._shouldFallback=n},t.prototype.shouldFallback=function(){return this._shouldFallback||!this.requires.areAllMet(this.hostConfig.hostCapabilities)},t.prototype.getRootObject=function(){for(var n=this;n.parent;)n=n.parent;return n},t.prototype.internalValidateProperties=function(n){this.id&&(n.allIds.hasOwnProperty(this.id)?(n.allIds[this.id]===1&&n.addFailure(this,ma.ValidationEvent.DuplicateId,Jd.Strings.errors.duplicateId(this.id)),n.allIds[this.id]+=1):n.allIds[this.id]=1)},t.prototype.validateProperties=function(){var n=new ya;return this.internalValidateProperties(n),n},t.prototype.findDOMNodeOwner=function(n){return this.contains(n)?this:void 0},t.prototype.releaseDOMResources=function(){},Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderedElement",{get:function(){return this._renderedElement},enumerable:!1,configurable:!0}),t.typeNameProperty=new mt.StringProperty(mt.Versions.v1_0,"type",void 0,void 0,void 0,function(n){return n.getJsonTypeName()}),t.idProperty=new mt.StringProperty(mt.Versions.v1_0,"id"),t.requiresProperty=new mt.SerializableObjectProperty(mt.Versions.v1_2,"requires",ga.HostCapabilities,!1,new ga.HostCapabilities),ha([(0,mt.property)(t.idProperty)],t.prototype,"id",void 0),ha([(0,mt.property)(t.requiresProperty)],t.prototype,"requires",null),t}(mt.SerializableObject);lt.CardObject=Kd});var Ca=ce(qt=>{"use strict";var ba=qt&&qt.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(qt,"__esModule",{value:!0});qt.formatText=void 0;var va=function(){function e(t){this._regularExpression=t}return e.prototype.format=function(t,n){var i;if(n){for(var r=n;(i=this._regularExpression.exec(n))!=null;)r=r.replace(i[0],this.internalFormat(t,i));return r}else return n},e}(),Zd=function(e){ba(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.internalFormat=function(n,i){var r=new Date(Date.parse(i[1])),o=i[2]!==void 0?i[2].toLowerCase():"compact";return o!=="compact"?r.toLocaleDateString(n,{day:"numeric",weekday:o,month:o,year:"numeric"}):r.toLocaleDateString()},t}(va),ef=function(e){ba(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.internalFormat=function(n,i){var r=new Date(Date.parse(i[1]));return r.toLocaleTimeString(n,{hour:"numeric",minute:"2-digit"})},t}(va);function tf(e,t){for(var n=[new Zd(/\{{2}DATE\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))(?:, ?(COMPACT|LONG|SHORT))?\)\}{2}/g),new ef(/\{{2}TIME\((\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|(?:(?:-|\+)\d{2}:\d{2})))\)\}{2}/g)],i=t,r=0,o=n;r<o.length;r++){var a=o[r];i=a.format(e,i)}return i}qt.formatText=tf});var Mn=ce(Dn=>{"use strict";Object.defineProperty(Dn,"__esModule",{value:!0});Dn.Constants=void 0;var nf=function(){function e(){}return e.keys={tab:"Tab",enter:"Enter",escape:"Escape",space:" ",up:"ArrowUp",down:"ArrowDown",delete:"Delete"},e}();Dn.Constants=nf});var Aa=ce(zn=>{"use strict";Object.defineProperty(zn,"__esModule",{value:!0});zn.MenuItem=void 0;var rf=nn(),of=Mn(),af=function(){function e(t,n){this._isEnabled=!0,this.key=t,this._value=n}return e.prototype.click=function(){this.isEnabled&&this.onClick&&this.onClick(this)},e.prototype.updateCssClasses=function(){if(this._element){var t=this._hostConfig?this._hostConfig:rf.defaultHostConfig;this._element.className=t.makeCssClassName("ac-ctrl"),this._element.classList.add(t.makeCssClassName(this.isEnabled?"ac-ctrl-dropdown-item":"ac-ctrl-dropdown-item-disabled")),this.isEnabled||this._element.classList.add(t.makeCssClassName("ac-disabled"))}},e.prototype.toString=function(){return this.value},e.prototype.render=function(t){var n=this;return this._hostConfig=t,this._element||(this._element=document.createElement("span"),this._element.innerText=this.value,this._element.setAttribute("role","menuitem"),this.isEnabled||this._element.setAttribute("aria-disabled","true"),this._element.setAttribute("aria-current","false"),this._element.onmouseup=function(i){n.click()},this._element.onkeydown=function(i){i.key===of.Constants.keys.enter&&(i.cancelBubble=!0,n.click())},this.updateCssClasses()),this._element},Object.defineProperty(e.prototype,"value",{get:function(){return this._value},set:function(t){this._value=t,this._element&&(this._element.innerText=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isEnabled",{get:function(){return this._isEnabled},set:function(t){this._isEnabled!==t&&(this._isEnabled=t,this.updateCssClasses())},enumerable:!1,configurable:!0}),e}();zn.MenuItem=af});var xa=ce(On=>{"use strict";Object.defineProperty(On,"__esModule",{value:!0});On.Collection=void 0;var sf=function(){function e(){this._items=[]}return e.prototype.get=function(t){return this._items[t]},e.prototype.add=function(t){this._items.push(t),this.onItemAdded&&this.onItemAdded(t)},e.prototype.remove=function(t){var n=this._items.indexOf(t);n>=0&&(this._items=this._items.splice(n,1),this.onItemRemoved&&this.onItemRemoved(t))},e.prototype.indexOf=function(t){return this._items.indexOf(t)},Object.defineProperty(e.prototype,"length",{get:function(){return this._items.length},enumerable:!1,configurable:!0}),e}();On.Collection=sf});var Sa=ce(_n=>{"use strict";Object.defineProperty(_n,"__esModule",{value:!0});_n.PopupControl=void 0;var lf=Mn(),ct=ht(),cf=nn(),uf=function(){function e(){this._isOpen=!1}return e.prototype.keyDown=function(t){switch(t.key){case lf.Constants.keys.escape:this.closePopup(!0);break}},e.prototype.render=function(t){var n=this,i=document.createElement("div");return i.tabIndex=0,i.className=this.hostConfig.makeCssClassName("ac-ctrl","ac-ctrl-popup-container"),i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),i.onkeydown=function(r){return n.keyDown(r),!r.cancelBubble},i.appendChild(this.renderContent()),i},e.prototype.focus=function(){this._popupElement&&this._popupElement.firstElementChild.focus()},e.prototype.popup=function(t){var n,i,r,o,a,l=this;if(!this._isOpen){this._overlayElement=document.createElement("div"),this._overlayElement.className=this.hostConfig.makeCssClassName("ac-ctrl-overlay"),this._overlayElement.tabIndex=0,this._overlayElement.style.width=document.documentElement.scrollWidth+"px",this._overlayElement.style.height=document.documentElement.scrollHeight+"px",this._overlayElement.onfocus=function(A){l.closePopup(!0)},document.body.appendChild(this._overlayElement);var s=t.getBoundingClientRect();this._popupElement=this.render(s),(n=this._popupElement.classList).remove.apply(n,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideLeftToRight","ac-ctrl-slideRightToLeft","ac-ctrl-slideTopToBottom","ac-ctrl-slideRightToLeft")),window.addEventListener("resize",function(A){l.closePopup(!0)});var c=t.getAttribute("aria-label");c&&this._popupElement.setAttribute("aria-label",c),this._overlayElement.appendChild(this._popupElement);var u=this._popupElement.getBoundingClientRect(),d=window.innerHeight-s.bottom,p=s.top,m=window.innerWidth-s.right,y=s.left,h=s.left+ct.getScrollX(),g;if(p<u.height&&d<u.height){var b=Math.min(u.height,window.innerHeight);if(this._popupElement.style.maxHeight=b+"px",b<u.height?g=ct.getScrollY():g=ct.getScrollY()+s.top+(s.height-b)/2,y<u.width&&m<u.width){var v=Math.min(u.width,window.innerWidth);this._popupElement.style.maxWidth=v+"px",v<u.width?h=ct.getScrollX():h=ct.getScrollX()+s.left+(s.width-v)/2}else m>=u.width?(h=ct.getScrollX()+s.right,(i=this._popupElement.classList).add.apply(i,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideLeftToRight"))):(h=ct.getScrollX()+s.left-u.width,(r=this._popupElement.classList).add.apply(r,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideRightToLeft")))}else d>=u.height?(g=ct.getScrollY()+s.bottom,(o=this._popupElement.classList).add.apply(o,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideTopToBottom"))):(g=ct.getScrollY()+s.top-u.height,(a=this._popupElement.classList).add.apply(a,this.hostConfig.makeCssClassNames("ac-ctrl-slide","ac-ctrl-slideBottomToTop"))),m<u.width&&(h=ct.getScrollX()+s.right-u.width);this._popupElement.style.left=h+"px",this._popupElement.style.top=g+"px",this._popupElement.focus(),this._isOpen=!0}},e.prototype.closePopup=function(t){this._isOpen&&(document.body.removeChild(this._overlayElement),this._isOpen=!1,this.onClose&&this.onClose(this,t))},Object.defineProperty(e.prototype,"hostConfig",{get:function(){return this._hostConfig?this._hostConfig:cf.defaultHostConfig},set:function(t){this._hostConfig=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isOpen",{get:function(){return this._isOpen},enumerable:!1,configurable:!0}),e}();_n.PopupControl=uf});var Ea=ce(jt=>{"use strict";var df=jt&&jt.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(jt,"__esModule",{value:!0});jt.PopupMenu=void 0;var Mi=Mn(),ff=xa(),pf=Sa(),hf=function(e){df(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._items=new ff.Collection,n._renderedItems=[],n._selectedIndex=-1,n}return t.prototype.renderContent=function(){var n=document.createElement("div");n.className=this.hostConfig.makeCssClassName("ac-ctrl ac-popup"),n.setAttribute("role","listbox");for(var i=0;i<this._items.length;i++){var r=this._items.get(i).render(this.hostConfig);r.tabIndex=0,n.appendChild(r),i===this.selectedIndex&&r.focus(),this._renderedItems.push(r)}return n},t.prototype.keyDown=function(n){e.prototype.keyDown.call(this,n);var i=this._selectedIndex;switch(n.key){case Mi.Constants.keys.tab:this.closePopup(!0);break;case Mi.Constants.keys.up:i<=0?i=this._renderedItems.length-1:(i--,i<0&&(i=this._renderedItems.length-1)),this.selectedIndex=i,n.cancelBubble=!0;break;case Mi.Constants.keys.down:i<0?i=0:(i++,i>=this._renderedItems.length&&(i=0)),this.selectedIndex=i,n.cancelBubble=!0;break}},Object.defineProperty(t.prototype,"items",{get:function(){return this._items},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(n){n>=0&&n<this._renderedItems.length&&(this._renderedItems[n].focus(),this._selectedIndex=n)},enumerable:!1,configurable:!0}),t}(pf.PopupControl);jt.PopupMenu=hf});var wa=ce(Et=>{"use strict";var gf=Et&&Et.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),Ia=Et&&Et.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&gf(t,e,n)};Object.defineProperty(Et,"__esModule",{value:!0});Ia(Aa(),Et);Ia(Ea(),Et)});var un=ce(T=>{"use strict";var G=T&&T.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),w=T&&T.__decorate||function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},sn=T&&T.__awaiter||function(e,t,n,i){function r(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(u){try{c(i.next(u))}catch(d){a(d)}}function s(u){try{c(i.throw(u))}catch(d){a(d)}}function c(u){u.done?o(u.value):r(u.value).then(l,s)}c((i=i.apply(e,t||[])).next())})},ln=T&&T.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(u){return s([c,u])}}function s(c){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],r=0}finally{i=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(T,"__esModule",{value:!0});T.ContainerWithActions=T.ColumnSet=T.Column=T.Container=T.BackgroundImage=T.ContainerBase=T.StylableCardElementContainer=T.ContainerStyleProperty=T.ActionSet=T.ShowCardAction=T.HttpAction=T.HttpHeader=T.ToggleVisibilityAction=T.OpenUrlAction=T.ExecuteAction=T.SubmitAction=T.SubmitActionBase=T.Action=T.TimeInput=T.TimeProperty=T.DateInput=T.NumberInput=T.ChoiceSetInput=T.Choice=T.ToggleInput=T.TextInput=T.Input=T.Media=T.YouTubePlayer=T.DailymotionPlayer=T.VimeoPlayer=T.IFrameMediaMediaPlayer=T.CustomMediaPlayer=T.HTML5MediaPlayer=T.MediaPlayer=T.MediaSource=T.CaptionSource=T.ContentSource=T.ImageSet=T.CardElementContainer=T.Image=T.FactSet=T.Fact=T.RichTextBlock=T.TextRun=T.TextBlock=T.BaseTextBlock=T.ActionProperty=T.CardElement=T.renderSeparation=void 0;T.SerializationContext=T.AdaptiveCard=T.Authentication=T.TokenExchangeResource=T.AuthCardButton=T.RefreshDefinition=T.RefreshActionProperty=void 0;var C=Ge(),j=at(),q=ht(),Li=nn(),Da=Ca(),Ma=Di(),f=gt(),ue=on(),$=Ct(),Ta=wa();function Ln(e){var t,n,i=typeof window>"u"?"":(n=(t=window.trustedTypes)===null||t===void 0?void 0:t.emptyHTML)!==null&&n!==void 0?n:"";e.innerHTML=i}function Ni(e,t,n){if(t.spacing>0||t.lineThickness&&t.lineThickness>0){var i=document.createElement("div");i.className=e.makeCssClassName("ac-"+(n===C.Orientation.Horizontal?"horizontal":"vertical")+"-separator"),i.setAttribute("aria-hidden","true");var r=t.lineColor?q.stringToCssColor(t.lineColor):"";return n===C.Orientation.Horizontal?t.lineThickness?(i.style.paddingTop=t.spacing/2+"px",i.style.marginBottom=t.spacing/2+"px",i.style.borderBottom=t.lineThickness+"px solid "+r):i.style.height=t.spacing+"px":t.lineThickness?(i.style.paddingLeft=t.spacing/2+"px",i.style.marginRight=t.spacing/2+"px",i.style.borderRight=t.lineThickness+"px solid "+r):i.style.width=t.spacing+"px",i.style.overflow="hidden",i.style.flex="0 0 auto",i}else return}T.renderSeparation=Ni;var ve=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._truncatedDueToOverflow=!1,n}return Object.defineProperty(t.prototype,"lang",{get:function(){var n=this.getValue(t.langProperty);return n||(this.parent?this.parent.lang:void 0)},set:function(n){this.setValue(t.langProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isVisible",{get:function(){return this.getValue(t.isVisibleProperty)},set:function(n){j.GlobalSettings.useAdvancedCardBottomTruncation&&!n&&this.undoOverflowTruncation(),this.isVisible!==n&&(this.setValue(t.isVisibleProperty,n),this.updateRenderedElementVisibility(),this._renderedElement&&zi(this)),this._renderedElement&&this._renderedElement.setAttribute("aria-expanded",n.toString())},enumerable:!1,configurable:!0}),t.prototype.internalRenderSeparator=function(){var n=Ni(this.hostConfig,{spacing:this.hostConfig.getEffectiveSpacing(this.spacing),lineThickness:this.separator?this.hostConfig.separator.lineThickness:void 0,lineColor:this.separator?this.hostConfig.separator.lineColor:void 0},this.separatorOrientation);if(j.GlobalSettings.alwaysBleedSeparators&&n&&this.separatorOrientation===C.Orientation.Horizontal){var i=this.getParentContainer();if(i&&i.getEffectivePadding()){var r=this.hostConfig.paddingDefinitionToSpacingDefinition(i.getEffectivePadding());n.style.marginLeft="-"+r.left+"px",n.style.marginRight="-"+r.right+"px"}}return n},t.prototype.updateRenderedElementVisibility=function(){var n=this.isDesignMode()||this.isVisible?this._defaultRenderedElementDisplayMode:"none";this._renderedElement&&(n?this._renderedElement.style.display=n:this._renderedElement.style.removeProperty("display")),this._separatorElement&&(this.parent&&this.parent.isFirstElement(this)?this._separatorElement.style.display="none":n?this._separatorElement.style.display=n:this._separatorElement.style.removeProperty("display"))},t.prototype.hideElementDueToOverflow=function(){this._renderedElement&&this.isVisible&&(this._renderedElement.style.visibility="hidden",this.isVisible=!1,zi(this,!1))},t.prototype.showElementHiddenDueToOverflow=function(){this._renderedElement&&!this.isVisible&&(this._renderedElement.style.removeProperty("visibility"),this.isVisible=!0,zi(this,!1))},t.prototype.handleOverflow=function(n){if(this.isVisible||this.isHiddenDueToOverflow()){var i=this.truncateOverflow(n);this._truncatedDueToOverflow=i||this._truncatedDueToOverflow,i?i&&!this.isVisible&&this.showElementHiddenDueToOverflow():this.hideElementDueToOverflow()}},t.prototype.resetOverflow=function(){var n=!1;return this._truncatedDueToOverflow&&(this.undoOverflowTruncation(),this._truncatedDueToOverflow=!1,n=!0),this.isHiddenDueToOverflow()&&this.showElementHiddenDueToOverflow(),n},t.prototype.getDefaultSerializationContext=function(){return new Xt},t.prototype.createPlaceholderElement=function(){var n=this.getEffectiveStyleDefinition(),i=q.stringToCssColor(n.foregroundColors.default.subtle),r=document.createElement("div");return r.style.border="1px dashed "+i,r.style.padding="4px",r.style.minHeight="32px",r.style.fontSize="10px",i&&(r.style.color=i),r.innerText="Empty "+this.getJsonTypeName(),r},t.prototype.adjustRenderedElementSize=function(n){this.height==="auto"?n.style.flex="0 0 auto":n.style.flex="1 1 auto"},t.prototype.isDisplayed=function(){return this._renderedElement!==void 0&&this.isVisible&&this._renderedElement.offsetHeight>0},t.prototype.overrideInternalRender=function(){return this.internalRender()},t.prototype.applyPadding=function(){if(this.separatorElement&&this.separatorOrientation===C.Orientation.Horizontal)if(j.GlobalSettings.alwaysBleedSeparators&&!this.isBleeding()){var n=new j.PaddingDefinition;this.getImmediateSurroundingPadding(n);var i=this.hostConfig.paddingDefinitionToSpacingDefinition(n);this.separatorElement.style.marginLeft="-"+i.left+"px",this.separatorElement.style.marginRight="-"+i.right+"px"}else this.separatorElement.style.marginRight="0",this.separatorElement.style.marginLeft="0"},t.prototype.truncateOverflow=function(n){return!1},t.prototype.undoOverflowTruncation=function(){},t.prototype.getDefaultPadding=function(){return new j.PaddingDefinition},t.prototype.getHasBackground=function(n){return n===void 0&&(n=!1),!1},t.prototype.getHasBorder=function(){return!1},t.prototype.getPadding=function(){return this._padding},t.prototype.setPadding=function(n){this._padding=n},t.prototype.shouldSerialize=function(n){return n.elementRegistry.findByName(this.getJsonTypeName())!==void 0},Object.defineProperty(t.prototype,"useDefaultSizing",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"separatorOrientation",{get:function(){return C.Orientation.Horizontal},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"defaultStyle",{get:function(){return C.ContainerStyle.Default},enumerable:!1,configurable:!0}),t.prototype.parse=function(n,i){e.prototype.parse.call(this,n,i||new Xt)},t.prototype.asString=function(){return""},t.prototype.isBleeding=function(){return!1},t.prototype.getEffectiveStyle=function(){return this.parent?this.parent.getEffectiveStyle():this.defaultStyle},t.prototype.getEffectiveStyleDefinition=function(){return this.hostConfig.containerStyles.getStyleByName(this.getEffectiveStyle())},t.prototype.getEffectiveTextStyleDefinition=function(){return this.parent?this.parent.getEffectiveTextStyleDefinition():this.hostConfig.textStyles.default},t.prototype.getForbiddenActionTypes=function(){return[]},t.prototype.getImmediateSurroundingPadding=function(n,i,r,o,a){if(i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=!0),this.parent){var l=i&&this.parent.isTopElement(this),s=r&&this.parent.isRightMostElement(this),c=o&&this.parent.isBottomElement(this),u=a&&this.parent.isLeftMostElement(this),d=this.parent.getEffectivePadding();d&&(l&&d.top!==C.Spacing.None&&(n.top=d.top,l=!1),s&&d.right!==C.Spacing.None&&(n.right=d.right,s=!1),c&&d.bottom!==C.Spacing.None&&(n.bottom=d.bottom,c=!1),u&&d.left!==C.Spacing.None&&(n.left=d.left,u=!1)),(l||s||c||u)&&this.parent.getImmediateSurroundingPadding(n,l,s,c,u)}},t.prototype.getActionCount=function(){return 0},t.prototype.getActionAt=function(n){throw new Error($.Strings.errors.indexOutOfRange(n))},t.prototype.indexOfAction=function(n){for(var i=0;i<this.getActionCount();i++)if(this.getActionAt(i)===n)return i;return-1},t.prototype.remove=function(){return this.parent&&this.parent instanceof Hn?this.parent.removeItem(this):!1},t.prototype.render=function(){return this._renderedElement=this.overrideInternalRender(),this._separatorElement=this.internalRenderSeparator(),this._renderedElement?(this.id&&(this._renderedElement.id=this.id),this.customCssSelector&&this._renderedElement.classList.add(this.customCssSelector),this._renderedElement.style.boxSizing="border-box",this._defaultRenderedElementDisplayMode=this._renderedElement.style.display?this._renderedElement.style.display:void 0,this.adjustRenderedElementSize(this._renderedElement),this.updateLayout(!1)):this.isDesignMode()&&(this._renderedElement=this.createPlaceholderElement()),this.getRootElement().updateActionsEnabledState(),this._renderedElement},t.prototype.updateLayout=function(n){n===void 0&&(n=!0),this.updateRenderedElementVisibility(),this.applyPadding()},t.prototype.updateActionsEnabledState=function(){for(var n=this.getRootElement().getAllActions(),i=0,r=n;i<r.length;i++){var o=r[i];o.updateEnabledState()}},t.prototype.indexOf=function(n){return-1},t.prototype.isDesignMode=function(){var n=this.getRootElement();return n instanceof Ie&&n.designMode},t.prototype.isFirstElement=function(n){return!0},t.prototype.isLastElement=function(n){return!0},t.prototype.isAtTheVeryLeft=function(){return this.parent?this.parent.isLeftMostElement(this)&&this.parent.isAtTheVeryLeft():!0},t.prototype.isAtTheVeryRight=function(){return this.parent?this.parent.isRightMostElement(this)&&this.parent.isAtTheVeryRight():!0},t.prototype.isAtTheVeryTop=function(){return this.parent?this.parent.isFirstElement(this)&&this.parent.isAtTheVeryTop():!0},t.prototype.isAtTheVeryBottom=function(){return this.parent?this.parent.isLastElement(this)&&this.parent.isAtTheVeryBottom():!0},t.prototype.isBleedingAtTop=function(){return!1},t.prototype.isBleedingAtBottom=function(){return!1},t.prototype.isLeftMostElement=function(n){return!0},t.prototype.isRightMostElement=function(n){return!0},t.prototype.isTopElement=function(n){return this.isFirstElement(n)},t.prototype.isBottomElement=function(n){return this.isLastElement(n)},t.prototype.isHiddenDueToOverflow=function(){return this._renderedElement!==void 0&&this._renderedElement.style.visibility==="hidden"},t.prototype.getRootElement=function(){return this.getRootObject()},t.prototype.getParentContainer=function(){for(var n=this.parent;n;){if(n instanceof Mt)return n;n=n.parent}},t.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[]},t.prototype.getAllActions=function(){for(var n=[],i=0;i<this.getActionCount();i++){var r=this.getActionAt(i);r&&n.push(r)}return n},t.prototype.getResourceInformation=function(){return[]},t.prototype.getElementById=function(n){return this.id===n?this:void 0},t.prototype.getActionById=function(n){},t.prototype.getEffectivePadding=function(){var n=this.getPadding();return n||this.getDefaultPadding()},t.prototype.getEffectiveHorizontalAlignment=function(){return this.horizontalAlignment!==void 0?this.horizontalAlignment:this.parent?this.parent.getEffectiveHorizontalAlignment():C.HorizontalAlignment.Left},Object.defineProperty(t.prototype,"hostConfig",{get:function(){return this._hostConfig?this._hostConfig:this.parent?this.parent.hostConfig:Li.defaultHostConfig},set:function(n){this._hostConfig=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"index",{get:function(){return this.parent?this.parent.indexOf(this):0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isInteractive",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isInline",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasVisibleSeparator",{get:function(){return this.parent&&this.separatorElement?!this.parent.isFirstElement(this)&&(this.isVisible||this.isDesignMode()):!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"separatorElement",{get:function(){return this._separatorElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),t.langProperty=new f.StringProperty(f.Versions.v1_1,"lang",!0,/^[a-z]{2,3}$/gi),t.isVisibleProperty=new f.BoolProperty(f.Versions.v1_2,"isVisible",!0),t.separatorProperty=new f.BoolProperty(f.Versions.v1_0,"separator",!1),t.heightProperty=new f.ValueSetProperty(f.Versions.v1_1,"height",[{value:"auto"},{value:"stretch"}],"auto"),t.horizontalAlignmentProperty=new f.EnumProperty(f.Versions.v1_0,"horizontalAlignment",C.HorizontalAlignment),t.spacingProperty=new f.EnumProperty(f.Versions.v1_0,"spacing",C.Spacing,C.Spacing.Default),w([(0,f.property)(t.horizontalAlignmentProperty)],t.prototype,"horizontalAlignment",void 0),w([(0,f.property)(t.spacingProperty)],t.prototype,"spacing",void 0),w([(0,f.property)(t.separatorProperty)],t.prototype,"separator",void 0),w([(0,f.property)(t.heightProperty)],t.prototype,"height",void 0),w([(0,f.property)(t.langProperty)],t.prototype,"lang",null),w([(0,f.property)(t.isVisibleProperty)],t.prototype,"isVisible",null),t}(Ma.CardObject);T.CardElement=ve;var cn=function(e){G(t,e);function t(n,i,r){r===void 0&&(r=[]);var o=e.call(this,n,i,void 0)||this;return o.targetVersion=n,o.name=i,o.forbiddenActionTypes=r,o}return t.prototype.parse=function(n,i,r){var o=n;return r.parseAction(o,i[this.name],this.forbiddenActionTypes,o.isDesignMode())},t.prototype.toJSON=function(n,i,r,o){o.serializeValue(i,this.name,r?r.toJSON(o):void 0,void 0,!0)},t}(f.PropertyDefinition);T.ActionProperty=cn;var Ut=function(e){G(t,e);function t(n){var i=e.call(this)||this;return i.ariaHidden=!1,n&&(i.text=n),i}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.remove(t.selectActionProperty)},Object.defineProperty(t.prototype,"text",{get:function(){return this.getValue(t.textProperty)},set:function(n){this.setText(n)},enumerable:!1,configurable:!0}),t.prototype.getFontSize=function(n){switch(this.effectiveSize){case C.TextSize.Small:return n.fontSizes.small;case C.TextSize.Medium:return n.fontSizes.medium;case C.TextSize.Large:return n.fontSizes.large;case C.TextSize.ExtraLarge:return n.fontSizes.extraLarge;default:return n.fontSizes.default}},t.prototype.getColorDefinition=function(n,i){switch(i){case C.TextColor.Accent:return n.accent;case C.TextColor.Dark:return n.dark;case C.TextColor.Light:return n.light;case C.TextColor.Good:return n.good;case C.TextColor.Warning:return n.warning;case C.TextColor.Attention:return n.attention;default:return n.default}},t.prototype.setText=function(n){this.setValue(t.textProperty,n)},t.prototype.init=function(n){this.size=n.size,this.weight=n.weight,this.color=n.color,this.isSubtle=n.isSubtle},t.prototype.asString=function(){return this.text},t.prototype.applyStylesTo=function(n){var i=this.hostConfig.getFontTypeDefinition(this.effectiveFontType);i.fontFamily&&(n.style.fontFamily=i.fontFamily);var r;switch(this.effectiveSize){case C.TextSize.Small:r=i.fontSizes.small;break;case C.TextSize.Medium:r=i.fontSizes.medium;break;case C.TextSize.Large:r=i.fontSizes.large;break;case C.TextSize.ExtraLarge:r=i.fontSizes.extraLarge;break;default:r=i.fontSizes.default;break}n.style.fontSize=r+"px";var o=this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors,this.effectiveColor),a=q.stringToCssColor(this.effectiveIsSubtle?o.subtle:o.default);a&&(n.style.color=a);var l;switch(this.effectiveWeight){case C.TextWeight.Lighter:l=i.fontWeights.lighter;break;case C.TextWeight.Bolder:l=i.fontWeights.bolder;break;default:l=i.fontWeights.default;break}n.style.fontWeight=l.toString(),this.ariaHidden&&n.setAttribute("aria-hidden","true")},t.prototype.getAllActions=function(){var n=e.prototype.getAllActions.call(this);return this.selectAction&&n.push(this.selectAction),n},Object.defineProperty(t.prototype,"effectiveColor",{get:function(){return this.color!==void 0?this.color:this.getEffectiveTextStyleDefinition().color},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"effectiveFontType",{get:function(){return this.fontType!==void 0?this.fontType:this.getEffectiveTextStyleDefinition().fontType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"effectiveIsSubtle",{get:function(){return this.isSubtle!==void 0?this.isSubtle:this.getEffectiveTextStyleDefinition().isSubtle},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"effectiveSize",{get:function(){return this.size!==void 0?this.size:this.getEffectiveTextStyleDefinition().size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"effectiveWeight",{get:function(){return this.weight!==void 0?this.weight:this.getEffectiveTextStyleDefinition().weight},enumerable:!1,configurable:!0}),t.textProperty=new f.StringProperty(f.Versions.v1_0,"text",!0),t.sizeProperty=new f.EnumProperty(f.Versions.v1_0,"size",C.TextSize),t.weightProperty=new f.EnumProperty(f.Versions.v1_0,"weight",C.TextWeight),t.colorProperty=new f.EnumProperty(f.Versions.v1_0,"color",C.TextColor),t.isSubtleProperty=new f.BoolProperty(f.Versions.v1_0,"isSubtle"),t.fontTypeProperty=new f.EnumProperty(f.Versions.v1_2,"fontType",C.FontType),t.selectActionProperty=new cn(f.Versions.v1_1,"selectAction",["Action.ShowCard"]),w([(0,f.property)(t.sizeProperty)],t.prototype,"size",void 0),w([(0,f.property)(t.weightProperty)],t.prototype,"weight",void 0),w([(0,f.property)(t.colorProperty)],t.prototype,"color",void 0),w([(0,f.property)(t.fontTypeProperty)],t.prototype,"fontType",void 0),w([(0,f.property)(t.isSubtleProperty)],t.prototype,"isSubtle",void 0),w([(0,f.property)(t.textProperty)],t.prototype,"text",null),w([(0,f.property)(t.selectActionProperty)],t.prototype,"selectAction",void 0),t}(ve);T.BaseTextBlock=Ut;var Bt=function(e){G(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.wrap=!1,r._treatAsPlainText=!0,r.useMarkdown=!0,r}t.prototype.restoreOriginalContent=function(){var r,o;if(this.renderedElement!==void 0){this.maxLines&&this.maxLines>0&&(this.renderedElement.style.maxHeight=this._computedLineHeight*this.maxLines+"px");var a=(o=(r=t._ttRoundtripPolicy)===null||r===void 0?void 0:r.createHTML(this._originalInnerHtml))!==null&&o!==void 0?o:this._originalInnerHtml;this.renderedElement.innerHTML=a}},t.prototype.truncateIfSupported=function(r){if(this.renderedElement!==void 0){var o=this.renderedElement.children,a=!o.length,l=a||o.length===1&&o[0].tagName.toLowerCase()==="p"&&!o[0].children.length;if(l){var s=a?this.renderedElement:o[0];return q.truncateText(s,r,this._computedLineHeight),!0}}return!1},t.prototype.setText=function(r){e.prototype.setText.call(this,r),this._processedText=void 0},t.prototype.internalRender=function(){var r=this,o,a;if(this._processedText=void 0,this.text){var l=this.preProcessPropertyValue(Ut.textProperty),s=this.hostConfig,c=void 0;if(this.forElementId){var u=document.createElement("label");u.htmlFor=this.forElementId,c=u}else c=document.createElement("div");if(c.classList.add(s.makeCssClassName("ac-textBlock")),c.style.overflow="hidden",this.applyStylesTo(c),this.style==="heading"){c.setAttribute("role","heading");var d=this.hostConfig.textBlock.headingLevel;d!==void 0&&d>0&&c.setAttribute("aria-level",d.toString())}if(this.selectAction&&s.supportsInteractivity&&(c.onclick=function(k){r.selectAction&&r.selectAction.isEffectivelyEnabled()&&(k.preventDefault(),k.cancelBubble=!0,r.selectAction.execute())},this.selectAction.setupElementForAccessibility(c),this.selectAction.isEffectivelyEnabled()&&c.classList.add(s.makeCssClassName("ac-selectable"))),!this._processedText){this._treatAsPlainText=!0;var p=Da.formatText(this.lang,l);if(this.useMarkdown&&p){j.GlobalSettings.allowMarkForTextHighlighting&&(p=p.replace(/<mark>/g,"===").replace(/<\/mark>/g,"/==/"));var m=Ie.applyMarkdown(p);if(m.didProcess&&m.outputHtml){if(this._processedText=m.outputHtml,this._treatAsPlainText=!1,j.GlobalSettings.allowMarkForTextHighlighting&&this._processedText){var y="",h=this.getEffectiveStyleDefinition();h.highlightBackgroundColor&&(y+="background-color: "+h.highlightBackgroundColor+";"),h.highlightForegroundColor&&(y+="color: "+h.highlightForegroundColor+";"),y&&(y='style="'+y+'"'),this._processedText=this._processedText.replace(/===/g,"<mark "+y+">").replace(/\/==\//g,"</mark>")}}else this._processedText=p,this._treatAsPlainText=!0}else this._processedText=p,this._treatAsPlainText=!0}if(this._processedText||(this._processedText=""),this._treatAsPlainText)c.innerText=this._processedText;else{var g=(a=(o=t._ttMarkdownPolicy)===null||o===void 0?void 0:o.createHTML(this._processedText))!==null&&a!==void 0?a:this._processedText;c.innerHTML=g}if(c.firstElementChild instanceof HTMLElement){var b=c.firstElementChild;b.style.marginTop="0px",b.style.width="100%",this.wrap||(b.style.overflow="hidden",b.style.textOverflow="ellipsis")}c.lastElementChild instanceof HTMLElement&&(c.lastElementChild.style.marginBottom="0px");for(var v=c.getElementsByTagName("a"),A=function(k){k.classList.add(s.makeCssClassName("ac-anchor")),k.target="_blank",k.onclick=function(R){Fa(r,k,R)&&(R.preventDefault(),R.cancelBubble=!0)},k.oncontextmenu=function(R){return Fa(r,k,R)?(R.preventDefault(),R.cancelBubble=!0,!1):!0}},B=0,P=Array.from(v);B<P.length;B++){var O=P[B];A(O)}return this.wrap?(c.style.wordWrap="break-word",this.maxLines&&this.maxLines>0&&(c.style.overflow="hidden",q.isInternetExplorer()||!j.GlobalSettings.useWebkitLineClamp?c.style.maxHeight=this._computedLineHeight*this.maxLines+"px":(c.style.removeProperty("line-height"),c.style.display="-webkit-box",c.style.webkitBoxOrient="vertical",c.style.webkitLineClamp=this.maxLines.toString()))):(c.style.whiteSpace="nowrap",c.style.textOverflow="ellipsis"),(j.GlobalSettings.useAdvancedTextBlockTruncation||j.GlobalSettings.useAdvancedCardBottomTruncation)&&(this._originalInnerHtml=c.innerHTML),c}else return},t.prototype.truncateOverflow=function(r){return r>=this._computedLineHeight?this.truncateIfSupported(r):!1},t.prototype.undoOverflowTruncation=function(){if(this.restoreOriginalContent(),j.GlobalSettings.useAdvancedTextBlockTruncation&&this.maxLines){var r=this._computedLineHeight*this.maxLines;this.truncateIfSupported(r)}},t.prototype.applyStylesTo=function(r){switch(e.prototype.applyStylesTo.call(this,r),this.getEffectiveHorizontalAlignment()){case C.HorizontalAlignment.Center:r.style.textAlign="center";break;case C.HorizontalAlignment.Right:r.style.textAlign="end";break;default:r.style.textAlign="start";break}var o=this.hostConfig.lineHeights;if(o)switch(this.effectiveSize){case C.TextSize.Small:this._computedLineHeight=o.small;break;case C.TextSize.Medium:this._computedLineHeight=o.medium;break;case C.TextSize.Large:this._computedLineHeight=o.large;break;case C.TextSize.ExtraLarge:this._computedLineHeight=o.extraLarge;break;default:this._computedLineHeight=o.default;break}else this._computedLineHeight=this.getFontSize(this.hostConfig.getFontTypeDefinition(this.effectiveFontType))*1.33;r.style.lineHeight=this._computedLineHeight+"px"},t.prototype.getJsonTypeName=function(){return"TextBlock"},t.prototype.getEffectiveTextStyleDefinition=function(){return this.style?this.hostConfig.textStyles.getStyleByName(this.style):e.prototype.getEffectiveTextStyleDefinition.call(this)},t.prototype.updateLayout=function(r){r===void 0&&(r=!1),e.prototype.updateLayout.call(this,r),j.GlobalSettings.useAdvancedTextBlockTruncation&&this.maxLines&&this.isDisplayed()&&(this.restoreOriginalContent(),this.truncateIfSupported(this._computedLineHeight*this.maxLines))};var n,i;return t.wrapProperty=new f.BoolProperty(f.Versions.v1_0,"wrap",!1),t.maxLinesProperty=new f.NumProperty(f.Versions.v1_0,"maxLines"),t.styleProperty=new f.ValueSetProperty(f.Versions.v1_5,"style",[{value:"default"},{value:"columnHeader"},{value:"heading"}]),t._ttMarkdownPolicy=typeof window>"u"||(n=window.trustedTypes)===null||n===void 0?void 0:n.createPolicy("adaptivecards#markdownPassthroughPolicy",{createHTML:function(r){return r}}),t._ttRoundtripPolicy=typeof window>"u"||(i=window.trustedTypes)===null||i===void 0?void 0:i.createPolicy("adaptivecards#restoreContentsPolicy",{createHTML:function(r){return r}}),w([(0,f.property)(t.wrapProperty)],t.prototype,"wrap",void 0),w([(0,f.property)(t.maxLinesProperty)],t.prototype,"maxLines",void 0),w([(0,f.property)(t.styleProperty)],t.prototype,"style",void 0),t}(Ut);T.TextBlock=Bt;var Qt=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.italic=!1,n.strikethrough=!1,n.highlight=!1,n.underline=!1,n}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.add(Ut.selectActionProperty)},t.prototype.internalRender=function(){var n=this;if(this.text){var i=this.preProcessPropertyValue(Ut.textProperty),r=this.hostConfig,o=Da.formatText(this.lang,i);o||(o="");var a=document.createElement("span");if(a.classList.add(r.makeCssClassName("ac-textRun")),this.applyStylesTo(a),this.selectAction&&r.supportsInteractivity){var l=document.createElement("a");l.classList.add(r.makeCssClassName("ac-anchor"));var s=this.selectAction.getHref();l.href=s||"",l.target="_blank",l.onclick=function(c){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(c.preventDefault(),c.cancelBubble=!0,n.selectAction.execute())},this.selectAction.setupElementForAccessibility(l),l.innerText=o,a.appendChild(l)}else a.innerText=o;return a}else return},t.prototype.applyStylesTo=function(n){if(e.prototype.applyStylesTo.call(this,n),this.italic&&(n.style.fontStyle="italic"),this.strikethrough&&(n.style.textDecoration="line-through"),this.highlight){var i=this.getColorDefinition(this.getEffectiveStyleDefinition().foregroundColors,this.effectiveColor),r=q.stringToCssColor(this.effectiveIsSubtle?i.highlightColors.subtle:i.highlightColors.default);r&&(n.style.backgroundColor=r)}this.underline&&(n.style.textDecoration="underline")},t.prototype.getJsonTypeName=function(){return"TextRun"},Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isInline",{get:function(){return!0},enumerable:!1,configurable:!0}),t.italicProperty=new f.BoolProperty(f.Versions.v1_2,"italic",!1),t.strikethroughProperty=new f.BoolProperty(f.Versions.v1_2,"strikethrough",!1),t.highlightProperty=new f.BoolProperty(f.Versions.v1_2,"highlight",!1),t.underlineProperty=new f.BoolProperty(f.Versions.v1_3,"underline",!1),w([(0,f.property)(t.italicProperty)],t.prototype,"italic",void 0),w([(0,f.property)(t.strikethroughProperty)],t.prototype,"strikethrough",void 0),w([(0,f.property)(t.highlightProperty)],t.prototype,"highlight",void 0),w([(0,f.property)(t.underlineProperty)],t.prototype,"underline",void 0),t}(Ut);T.TextRun=Qt;var Hi=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._inlines=[],n}return t.prototype.internalAddInline=function(n,i){if(i===void 0&&(i=!1),!n.isInline)throw new Error($.Strings.errors.elementCannotBeUsedAsInline());var r=n.parent===void 0||i;if(!r&&n.parent!==this)throw new Error($.Strings.errors.inlineAlreadyParented());n.setParent(this),this._inlines.push(n)},t.prototype.internalParse=function(n,i){if(e.prototype.internalParse.call(this,n,i),this._inlines=[],Array.isArray(n.inlines))for(var r=0,o=n.inlines;r<o.length;r++){var a=o[r],l=void 0;if(typeof a=="string"){var s=new Qt;s.text=a,l=s}else l=i.parseElement(this,a,[],!1);l&&this.internalAddInline(l,!0)}},t.prototype.internalToJSON=function(n,i){if(e.prototype.internalToJSON.call(this,n,i),this._inlines.length>0){for(var r=[],o=0,a=this._inlines;o<a.length;o++){var l=a[o];r.push(l.toJSON(i))}i.serializeValue(n,"inlines",r)}},t.prototype.internalRender=function(){if(this._inlines.length>0){var n=void 0;if(this.forElementId){var i=document.createElement("label");i.htmlFor=this.forElementId,n=i}else n=document.createElement("div");switch(n.className=this.hostConfig.makeCssClassName("ac-richTextBlock"),this.getEffectiveHorizontalAlignment()){case C.HorizontalAlignment.Center:n.style.textAlign="center";break;case C.HorizontalAlignment.Right:n.style.textAlign="end";break;default:n.style.textAlign="start";break}for(var r=0,o=0,a=this._inlines;o<a.length;o++){var l=a[o],s=l.render();s&&(n.appendChild(s),r++)}if(r>0)return n}},t.prototype.asString=function(){for(var n="",i=0,r=this._inlines;i<r.length;i++){var o=r[i];n+=o.asString()}return n},t.prototype.getJsonTypeName=function(){return"RichTextBlock"},t.prototype.getInlineCount=function(){return this._inlines.length},t.prototype.getInlineAt=function(n){if(n>=0&&n<this._inlines.length)return this._inlines[n];throw new Error($.Strings.errors.indexOutOfRange(n))},t.prototype.addInline=function(n){typeof n=="string"?this.internalAddInline(new Qt(n)):this.internalAddInline(n)},t.prototype.removeInline=function(n){var i=this._inlines.indexOf(n);return i>=0?(this._inlines[i].setParent(void 0),this._inlines.splice(i,1),!0):!1},t}(ve);T.RichTextBlock=Hi;var za=function(e){G(t,e);function t(n,i){var r=e.call(this)||this;return r.name=n,r.value=i,r}return t.prototype.getSchemaKey=function(){return"Fact"},t.titleProperty=new f.StringProperty(f.Versions.v1_0,"title"),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),w([(0,f.property)(t.titleProperty)],t.prototype,"name",void 0),w([(0,f.property)(t.valueProperty)],t.prototype,"value",void 0),t}(f.SerializableObject);T.Fact=za;var Oa=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"useDefaultSizing",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.internalRender=function(){var n=void 0,i=this.hostConfig;if(this.facts.length>0){n=document.createElement("table"),n.style.borderWidth="0px",n.style.borderSpacing="0px",n.style.borderStyle="none",n.style.borderCollapse="collapse",n.style.display="block",n.style.overflow="hidden",n.classList.add(i.makeCssClassName("ac-factset")),n.setAttribute("role","presentation");for(var r=0;r<this.facts.length;r++){var o=document.createElement("tr");r>0&&(o.style.marginTop=i.factSet.spacing+"px");var a=document.createElement("td");a.style.padding="0",a.classList.add(i.makeCssClassName("ac-fact-title")),i.factSet.title.maxWidth&&(a.style.maxWidth=i.factSet.title.maxWidth+"px"),a.style.verticalAlign="top";var l=new Bt;l.setParent(this),l.text=!this.facts[r].name&&this.isDesignMode()?"Title":this.facts[r].name,l.size=i.factSet.title.size,l.color=i.factSet.title.color,l.isSubtle=i.factSet.title.isSubtle,l.weight=i.factSet.title.weight,l.wrap=i.factSet.title.wrap,l.spacing=C.Spacing.None,q.appendChild(a,l.render()),q.appendChild(o,a),a=document.createElement("td"),a.style.width="10px",q.appendChild(o,a),a=document.createElement("td"),a.style.padding="0",a.style.verticalAlign="top",a.classList.add(i.makeCssClassName("ac-fact-value")),l=new Bt,l.setParent(this),l.text=this.facts[r].value,l.size=i.factSet.value.size,l.color=i.factSet.value.color,l.isSubtle=i.factSet.value.isSubtle,l.weight=i.factSet.value.weight,l.wrap=i.factSet.value.wrap,l.spacing=C.Spacing.None,q.appendChild(a,l.render()),q.appendChild(o,a),q.appendChild(n,o)}}return n},t.prototype.getJsonTypeName=function(){return"FactSet"},t.factsProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_0,"facts",za),w([(0,f.property)(t.factsProperty)],t.prototype,"facts",void 0),t}(ve);T.FactSet=Oa;var ka=function(e){G(t,e);function t(n,i,r,o){var a=e.call(this,n,i)||this;return a.targetVersion=n,a.name=i,a.internalName=r,a.fallbackProperty=o,a}return t.prototype.getInternalName=function(){return this.internalName},t.prototype.parse=function(n,i,r){var o=void 0,a=i[this.name];if(a===void 0)return this.defaultValue;var l=!1;if(typeof a=="string"){try{var s=j.SizeAndUnit.parse(a,!0);s.unit===C.SizeUnit.Pixel&&(o=s.physicalSize,l=!0)}catch{}!l&&this.fallbackProperty&&(l=this.fallbackProperty.isValidValue(a,r))}return l||r.logParseEvent(n,C.ValidationEvent.InvalidPropertyValue,$.Strings.errors.invalidPropertyValue(a,this.name)),o},t.prototype.toJSON=function(n,i,r,o){o.serializeValue(i,this.name,typeof r=="number"&&!isNaN(r)?r+"px":void 0)},t}(f.PropertyDefinition),an=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.size=C.Size.Auto,n.style=C.ImageStyle.Default,n}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.remove(ve.heightProperty)},t.prototype.applySize=function(n){if(this.pixelWidth||this.pixelHeight)this.pixelWidth&&(n.style.width=this.pixelWidth+"px"),this.pixelHeight&&(n.style.height=this.pixelHeight+"px");else if(this.maxHeight){switch(this.size){case C.Size.Small:n.style.height=this.hostConfig.imageSizes.small+"px";break;case C.Size.Large:n.style.height=this.hostConfig.imageSizes.large+"px";break;default:n.style.height=this.hostConfig.imageSizes.medium+"px";break}n.style.maxHeight=this.maxHeight+"px"}else{switch(this.size){case C.Size.Stretch:n.style.width="100%";break;case C.Size.Auto:n.style.maxWidth="100%";break;case C.Size.Small:n.style.width=this.hostConfig.imageSizes.small+"px";break;case C.Size.Large:n.style.width=this.hostConfig.imageSizes.large+"px";break;case C.Size.Medium:n.style.width=this.hostConfig.imageSizes.medium+"px";break}n.style.maxHeight="100%"}},Object.defineProperty(t.prototype,"useDefaultSizing",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.internalRender=function(){var n=this,i=void 0;if(this.url){i=document.createElement("div"),i.style.display="flex",i.style.alignItems="flex-start";var r=this.hostConfig;switch(this.getEffectiveHorizontalAlignment()){case C.HorizontalAlignment.Center:i.style.justifyContent="center";break;case C.HorizontalAlignment.Right:i.style.justifyContent="flex-end";break;default:i.style.justifyContent="flex-start";break}var o=document.createElement("img");o.onload=function(s){Pa(n)},o.onerror=function(s){if(n.renderedElement){var c=n.getRootElement();if(Ln(n.renderedElement),c&&c.designMode){var u=document.createElement("div");u.style.display="flex",u.style.alignItems="center",u.style.justifyContent="center",u.style.backgroundColor="#EEEEEE",u.style.color="black",u.innerText=":-(",u.style.padding="10px",n.applySize(u),n.renderedElement.appendChild(u)}}Pa(n)},o.style.minWidth="0",o.classList.add(r.makeCssClassName("ac-image")),this.selectAction&&r.supportsInteractivity&&(o.onkeypress=function(s){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(s.code==="Enter"||s.code==="Space")&&(s.preventDefault(),s.cancelBubble=!0,n.selectAction.execute())},o.onclick=function(s){n.selectAction&&n.selectAction.isEffectivelyEnabled()&&(s.preventDefault(),s.cancelBubble=!0,n.selectAction.execute())},this.selectAction.setupElementForAccessibility(o),this.selectAction.isEffectivelyEnabled()&&o.classList.add(r.makeCssClassName("ac-selectable"))),this.applySize(o),this.style===C.ImageStyle.Person&&(o.style.borderRadius="50%",o.style.backgroundPosition="50% 50%",o.style.backgroundRepeat="no-repeat");var a=q.stringToCssColor(this.backgroundColor);a&&(o.style.backgroundColor=a),o.src=this.preProcessPropertyValue(t.urlProperty);var l=this.preProcessPropertyValue(t.altTextProperty);l&&(o.alt=l),i.appendChild(o)}return i},t.prototype.getJsonTypeName=function(){return"Image"},t.prototype.getAllActions=function(){var n=e.prototype.getAllActions.call(this);return this.selectAction&&n.push(this.selectAction),n},t.prototype.getActionById=function(n){var i=e.prototype.getActionById.call(this,n);return!i&&this.selectAction&&(i=this.selectAction.getActionById(n)),i},t.prototype.getResourceInformation=function(){return this.url?[{url:this.url,mimeType:"image"}]:[]},t.urlProperty=new f.StringProperty(f.Versions.v1_0,"url"),t.altTextProperty=new f.StringProperty(f.Versions.v1_0,"altText"),t.backgroundColorProperty=new f.StringProperty(f.Versions.v1_1,"backgroundColor"),t.styleProperty=new f.EnumProperty(f.Versions.v1_0,"style",C.ImageStyle,C.ImageStyle.Default),t.sizeProperty=new f.EnumProperty(f.Versions.v1_0,"size",C.Size,C.Size.Auto),t.pixelWidthProperty=new ka(f.Versions.v1_1,"width","pixelWidth"),t.pixelHeightProperty=new ka(f.Versions.v1_1,"height","pixelHeight",ve.heightProperty),t.selectActionProperty=new cn(f.Versions.v1_1,"selectAction",["Action.ShowCard"]),w([(0,f.property)(t.urlProperty)],t.prototype,"url",void 0),w([(0,f.property)(t.altTextProperty)],t.prototype,"altText",void 0),w([(0,f.property)(t.backgroundColorProperty)],t.prototype,"backgroundColor",void 0),w([(0,f.property)(t.sizeProperty)],t.prototype,"size",void 0),w([(0,f.property)(t.styleProperty)],t.prototype,"style",void 0),w([(0,f.property)(t.pixelWidthProperty)],t.prototype,"pixelWidth",void 0),w([(0,f.property)(t.pixelHeightProperty)],t.prototype,"pixelHeight",void 0),w([(0,f.property)(t.selectActionProperty)],t.prototype,"selectAction",void 0),t}(ve);T.Image=an;var Hn=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.allowVerticalOverflow=!1,n}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),this.isSelectable||n.remove(t.selectActionProperty)},t.prototype.isElementAllowed=function(n){return this.hostConfig.supportsInteractivity||!n.isInteractive},t.prototype.applyPadding=function(){if(e.prototype.applyPadding.call(this),!!this.renderedElement){var n=new j.SpacingDefinition;this.getEffectivePadding()&&(n=this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding())),this.renderedElement.style.paddingTop=n.top+"px",this.renderedElement.style.paddingRight=n.right+"px",this.renderedElement.style.paddingBottom=n.bottom+"px",this.renderedElement.style.paddingLeft=n.left+"px",this.renderedElement.style.marginRight="0",this.renderedElement.style.marginLeft="0"}},Object.defineProperty(t.prototype,"isSelectable",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.forbiddenChildElements=function(){return[]},t.prototype.releaseDOMResources=function(){e.prototype.releaseDOMResources.call(this);for(var n=0;n<this.getItemCount();n++)this.getItemAt(n).releaseDOMResources()},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n);for(var i=0;i<this.getItemCount();i++){var r=this.getItemAt(i);!this.hostConfig.supportsInteractivity&&r.isInteractive&&n.addFailure(this,C.ValidationEvent.InteractivityNotAllowed,$.Strings.errors.interactivityNotAllowed()),this.isElementAllowed(r)||n.addFailure(this,C.ValidationEvent.InteractivityNotAllowed,$.Strings.errors.elementTypeNotAllowed(r.getJsonTypeName())),r.internalValidateProperties(n)}this._selectAction&&this._selectAction.internalValidateProperties(n)},t.prototype.render=function(){var n=this,i=e.prototype.render.call(this);if(i){var r=this.hostConfig;this.allowVerticalOverflow&&(i.style.overflowX="hidden",i.style.overflowY="auto"),i&&this.isSelectable&&this._selectAction&&r.supportsInteractivity&&(i.onclick=function(o){n._selectAction&&n._selectAction.isEffectivelyEnabled()&&(o.preventDefault(),o.cancelBubble=!0,n._selectAction.execute())},i.onkeypress=function(o){n._selectAction&&n._selectAction.isEffectivelyEnabled()&&(o.code==="Enter"||o.code==="Space")&&(o.preventDefault(),o.cancelBubble=!0,n._selectAction.execute())},this._selectAction.setupElementForAccessibility(i),this._selectAction.isEffectivelyEnabled()&&i.classList.add(r.makeCssClassName("ac-selectable")))}return i},t.prototype.updateLayout=function(n){if(n===void 0&&(n=!0),e.prototype.updateLayout.call(this,n),n)for(var i=0;i<this.getItemCount();i++)this.getItemAt(i).updateLayout()},t.prototype.getAllInputs=function(n){n===void 0&&(n=!0);for(var i=[],r=0;r<this.getItemCount();r++)i.push.apply(i,this.getItemAt(r).getAllInputs(n));return i},t.prototype.getAllActions=function(){for(var n=e.prototype.getAllActions.call(this),i=0;i<this.getItemCount();i++)n.push.apply(n,this.getItemAt(i).getAllActions());return this._selectAction&&n.push(this._selectAction),n},t.prototype.getResourceInformation=function(){for(var n=[],i=0;i<this.getItemCount();i++)n.push.apply(n,this.getItemAt(i).getResourceInformation());return n},t.prototype.getElementById=function(n){var i=e.prototype.getElementById.call(this,n);if(!i)for(var r=0;r<this.getItemCount()&&(i=this.getItemAt(r).getElementById(n),!i);r++);return i},t.prototype.findDOMNodeOwner=function(n){for(var i,r=void 0,o=0;o<this.getItemCount();o++)if(r=this.getItemAt(o).findDOMNodeOwner(n),r)return r;for(var o=0;o<this.getActionCount();o++)if(r=(i=this.getActionAt(o))===null||i===void 0?void 0:i.findDOMNodeOwner(n),r)return r;return e.prototype.findDOMNodeOwner.call(this,n)},t.selectActionProperty=new cn(f.Versions.v1_1,"selectAction",["Action.ShowCard"]),w([(0,f.property)(t.selectActionProperty)],t.prototype,"_selectAction",void 0),t}(ve);T.CardElementContainer=Hn;var _a=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._images=[],n.imageSize=C.ImageSize.Medium,n}return t.prototype.internalRender=function(){var n=void 0;if(this._images.length>0){n=document.createElement("div"),n.style.display="flex",n.style.flexWrap="wrap";for(var i=0,r=this._images;i<r.length;i++){var o=r[i];switch(this.imageSize){case C.ImageSize.Small:o.size=C.Size.Small;break;case C.ImageSize.Large:o.size=C.Size.Large;break;default:o.size=C.Size.Medium;break}o.maxHeight=this.hostConfig.imageSet.maxImageHeight;var a=o.render();a&&(a.style.display="inline-flex",a.style.margin="0px",a.style.marginRight="10px",q.appendChild(n,a))}}return n},t.prototype.getItemCount=function(){return this._images.length},t.prototype.getItemAt=function(n){return this._images[n]},t.prototype.getFirstVisibleRenderedItem=function(){return this._images&&this._images.length>0?this._images[0]:void 0},t.prototype.getLastVisibleRenderedItem=function(){return this._images&&this._images.length>0?this._images[this._images.length-1]:void 0},t.prototype.removeItem=function(n){if(n instanceof an){var i=this._images.indexOf(n);if(i>=0)return this._images.splice(i,1),n.setParent(void 0),this.updateLayout(),!0}return!1},t.prototype.getJsonTypeName=function(){return"ImageSet"},t.prototype.addImage=function(n){if(!n.parent)this._images.push(n),n.setParent(this);else throw new Error("This image already belongs to another ImageSet")},t.prototype.indexOf=function(n){return n instanceof an?this._images.indexOf(n):-1},t.imagesProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_0,"images",an,function(n,i){i.setParent(n)}),t.imageSizeProperty=new f.EnumProperty(f.Versions.v1_0,"imageSize",C.ImageSize,C.ImageSize.Medium),w([(0,f.property)(t.imagesProperty)],t.prototype,"_images",void 0),w([(0,f.property)(t.imageSizeProperty)],t.prototype,"imageSize",void 0),t}(Hn);T.ImageSet=_a;var Gi=function(e){G(t,e);function t(n,i){var r=e.call(this)||this;return r.url=n,r.mimeType=i,r}return t.prototype.isValid=function(){return!!(this.mimeType&&this.url)},t.mimeTypeProperty=new f.StringProperty(f.Versions.v1_1,"mimeType"),t.urlProperty=new f.StringProperty(f.Versions.v1_1,"url"),w([(0,f.property)(t.mimeTypeProperty)],t.prototype,"mimeType",void 0),w([(0,f.property)(t.urlProperty)],t.prototype,"url",void 0),t}(f.SerializableObject);T.ContentSource=Gi;var Ra=function(e){G(t,e);function t(n,i,r){var o=e.call(this,n,i)||this;return o.label=r,o}return t.prototype.getSchemaKey=function(){return"CaptionSource"},t.prototype.render=function(){var n=void 0;return this.isValid()&&(n=document.createElement("track"),n.src=this.url,n.kind="captions",n.label=this.label),n},t.labelProperty=new f.StringProperty(f.Versions.v1_6,"label"),w([(0,f.property)(t.labelProperty)],t.prototype,"label",void 0),t}(Gi);T.CaptionSource=Ra;var Va=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSchemaKey=function(){return"MediaSource"},t.prototype.render=function(){var n=void 0;return this.isValid()&&(n=document.createElement("source"),n.src=this.url,n.type=this.mimeType),n},t}(Gi);T.MediaSource=Va;var Yi=function(){function e(){}return e.prototype.play=function(){},Object.defineProperty(e.prototype,"posterUrl",{get:function(){return this._posterUrl},set:function(t){this._posterUrl=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"selectedMediaType",{get:function(){},enumerable:!1,configurable:!0}),e}();T.MediaPlayer=Yi;var La=function(e){G(t,e);function t(n){var i=e.call(this)||this;return i.owner=n,i._selectedSources=[],i._captionSources=[],i.processSources(),i}return t.prototype.processSources=function(){var n;this._selectedSources=[],this._captionSources=[],this._selectedMediaType=void 0;for(var i=0,r=this.owner.sources;i<r.length;i++){var o=r[i],a=o.mimeType?o.mimeType.split("/"):[];if(a.length===2){if(!this._selectedMediaType){var l=t.supportedMediaTypes.indexOf(a[0]);l>=0&&(this._selectedMediaType=t.supportedMediaTypes[l])}a[0]===this._selectedMediaType&&this._selectedSources.push(o)}}(n=this._captionSources).push.apply(n,this.owner.captionSources)},t.prototype.canPlay=function(){return this._selectedSources.length>0},t.prototype.fetchVideoDetails=function(){return sn(this,void 0,void 0,function(){return ln(this,function(n){return[2]})})},t.prototype.render=function(){this._selectedMediaType==="video"?this._mediaElement=document.createElement("video"):this._mediaElement=document.createElement("audio"),this._mediaElement.setAttribute("aria-label",this.owner.altText?this.owner.altText:$.Strings.defaults.mediaPlayerAriaLabel()),this._mediaElement.setAttribute("webkit-playsinline",""),this._mediaElement.setAttribute("playsinline",""),this._mediaElement.setAttribute("crossorigin",""),this._mediaElement.autoplay=!0,this._mediaElement.controls=!0,q.isMobileOS()&&(this._mediaElement.muted=!0),this._mediaElement.preload="none",this._mediaElement.style.width="100%";for(var n=0,i=this.owner.sources;n<i.length;n++){var r=i[n],o=r.render();q.appendChild(this._mediaElement,o)}for(var a=0,l=this.owner.captionSources;a<l.length;a++){var s=l[a];if(s.mimeType=="vtt"){var c=s.render();q.appendChild(this._mediaElement,c)}}return this._mediaElement},t.prototype.play=function(){this._mediaElement&&this._mediaElement.play()},Object.defineProperty(t.prototype,"selectedMediaType",{get:function(){return this._selectedMediaType},enumerable:!1,configurable:!0}),t.supportedMediaTypes=["audio","video"],t}(Yi);T.HTML5MediaPlayer=La;var Na=function(e){G(t,e);function t(n){return e.call(this)||this}return t}(Yi);T.CustomMediaPlayer=Na;var Gn=function(e){G(t,e);function t(n,i){var r=e.call(this,n)||this;return r.iFrameTitle=i,n.length>=2&&(r._videoId=n[1]),r}return t.prototype.canPlay=function(){return this._videoId!==void 0},t.prototype.render=function(){var n=document.createElement("div");n.style.position="relative",n.style.width="100%",n.style.height="0",n.style.paddingBottom="56.25%";var i=document.createElement("iframe");return i.style.position="absolute",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.src=this.getEmbedVideoUrl(),i.frameBorder="0",this.iFrameTitle&&(i.title=this.iFrameTitle),i.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",i.allowFullscreen=!0,n.appendChild(i),n},Object.defineProperty(t.prototype,"videoId",{get:function(){return this._videoId},enumerable:!1,configurable:!0}),t}(Na);T.IFrameMediaMediaPlayer=Gn;var Ha=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.fetchVideoDetails=function(){return sn(this,void 0,void 0,function(){var n,i,r;return ln(this,function(o){switch(o.label){case 0:return n="https://vimeo.com/api/oembed.json?url=".concat(this.getEmbedVideoUrl()),[4,fetch(n)];case 1:return i=o.sent(),i.ok?[4,i.json()]:[3,3];case 2:r=o.sent(),this.posterUrl=r.thumbnail_url,o.label=3;case 3:return[2]}})})},t.prototype.getEmbedVideoUrl=function(){return"https://player.vimeo.com/video/".concat(this.videoId,"?autoplay=1")},t}(Gn);T.VimeoPlayer=Ha;var Ga=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.fetchVideoDetails=function(){return sn(this,void 0,void 0,function(){var n,i,r;return ln(this,function(o){switch(o.label){case 0:return n="https://api.dailymotion.com/video/".concat(this.videoId,"?fields=thumbnail_720_url"),[4,fetch(n)];case 1:return i=o.sent(),i.ok?[4,i.json()]:[3,3];case 2:r=o.sent(),this.posterUrl=r.thumbnail_720_url,o.label=3;case 3:return[2]}})})},t.prototype.getEmbedVideoUrl=function(){return"https://www.dailymotion.com/embed/video/".concat(this.videoId,"?autoplay=1")},t}(Gn);T.DailymotionPlayer=Ga;var Ya=function(e){G(t,e);function t(n,i){var r=e.call(this,n,i)||this;return r.iFrameTitle=i,n.length>=3&&n[2]!==void 0&&(r._startTimeIndex=parseInt(n[2])),r}return t.prototype.fetchVideoDetails=function(){return sn(this,void 0,void 0,function(){return ln(this,function(n){return this.posterUrl=this.videoId?"https://img.youtube.com/vi/".concat(this.videoId,"/maxresdefault.jpg"):void 0,[2]})})},t.prototype.getEmbedVideoUrl=function(){var n="https://www.youtube.com/embed/".concat(this.videoId,"?autoplay=1");return this._startTimeIndex!==void 0&&(n+="&start=".concat(this._startTimeIndex)),n},t}(Gn);T.YouTubePlayer=Ya;var Wa=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.sources=[],n.captionSources=[],n}return t.prototype.createMediaPlayer=function(){for(var n=0,i=t.customMediaPlayers;n<i.length;n++)for(var r=i[n],o=0,a=this.sources;o<a.length;o++){var l=a[o];if(l.url)for(var s=0,c=r.urlPatterns;s<c.length;s++){var u=c[s],d=u.exec(l.url);if(d!==null)return r.createMediaPlayer(d)}}return new La(this)},t.prototype.handlePlayButtonInvoke=function(n){if(this.hostConfig.media.allowInlinePlayback){if(n.preventDefault(),n.cancelBubble=!0,this.renderedElement){var i=this._mediaPlayer.render();Ln(this.renderedElement),this.renderedElement.appendChild(i),this._mediaPlayer.play(),i.focus()}}else t.onPlay&&(n.preventDefault(),n.cancelBubble=!0,t.onPlay(this))},t.prototype.displayPoster=function(){return sn(this,void 0,void 0,function(){var n,i,r,o,a,l,s,c,u=this;return ln(this,function(d){return this.renderedElement&&(n=12,i=15,r=document.createElement("div"),r.className=this.hostConfig.makeCssClassName("ac-media-poster"),r.setAttribute("role","contentinfo"),r.setAttribute("aria-label",this.altText?this.altText:$.Strings.defaults.mediaPlayerAriaLabel()),r.style.position="relative",r.style.display="flex",o=this.poster?this.poster:this._mediaPlayer.posterUrl,o||(o=this.hostConfig.media.defaultPoster),o?(a=document.createElement("img"),a.style.width="100%",a.style.height="100%",a.setAttribute("role","presentation"),a.onerror=function(p){a.parentNode&&a.parentNode.removeChild(a),r.classList.add("empty"),r.style.minHeight="150px"},a.src=o,r.appendChild(a)):(r.classList.add("empty"),r.style.minHeight="150px"),this.hostConfig.supportsInteractivity&&this._mediaPlayer.canPlay()&&(l=document.createElement("div"),l.tabIndex=0,l.setAttribute("role","button"),l.setAttribute("aria-label",$.Strings.defaults.mediaPlayerPlayMedia()),l.className=this.hostConfig.makeCssClassName("ac-media-playButton"),l.style.display="flex",l.style.alignItems="center",l.style.justifyContent="center",l.onclick=function(p){u.handlePlayButtonInvoke(p)},l.onkeypress=function(p){(p.code==="Enter"||p.code==="Space")&&u.handlePlayButtonInvoke(p)},s=document.createElement("div"),s.className=this.hostConfig.makeCssClassName("ac-media-playButton-arrow"),s.style.width=n+"px",s.style.height=i+"px",s.style.borderTopWidth=i/2+"px",s.style.borderBottomWidth=i/2+"px",s.style.borderLeftWidth=n+"px",s.style.borderRightWidth="0",s.style.borderStyle="solid",s.style.borderTopColor="transparent",s.style.borderRightColor="transparent",s.style.borderBottomColor="transparent",s.style.transform="translate("+n/10+"px,0px)",l.appendChild(s),c=document.createElement("div"),c.style.position="absolute",c.style.left="0",c.style.top="0",c.style.width="100%",c.style.height="100%",c.style.display="flex",c.style.justifyContent="center",c.style.alignItems="center",c.appendChild(l),r.appendChild(c)),Ln(this.renderedElement),this.renderedElement.appendChild(r)),[2]})})},t.prototype.internalRender=function(){var n=document.createElement("div");return n.className=this.hostConfig.makeCssClassName("ac-media"),n},t.prototype.render=function(){var n=this,i=e.prototype.render.call(this);return i&&(this._mediaPlayer=this.createMediaPlayer(),this._mediaPlayer.fetchVideoDetails().then(function(){return n.displayPoster()})),i},t.prototype.releaseDOMResources=function(){e.prototype.releaseDOMResources.call(this),this.displayPoster()},t.prototype.getJsonTypeName=function(){return"Media"},t.prototype.getResourceInformation=function(){var n=[];if(this._mediaPlayer){var i=this.poster?this.poster:this.hostConfig.media.defaultPoster;i&&n.push({url:i,mimeType:"image"})}for(var r=0,o=this.sources;r<o.length;r++){var a=o[r];a.isValid()&&n.push({url:a.url,mimeType:a.mimeType})}for(var l=0,s=this.captionSources;l<s.length;l++){var c=s[l];c.isValid()&&n.push({url:c.url,mimeType:c.mimeType})}return n},Object.defineProperty(t.prototype,"selectedMediaType",{get:function(){return this._mediaPlayer.selectedMediaType},enumerable:!1,configurable:!0}),t.customMediaPlayers=[{urlPatterns:[/^(?:https?:\/\/)?(?:www.)?youtube.com\/watch\?(?=.*v=([\w\d-_]+))(?=(?:.*t=(\d+))?).*/gi,/^(?:https?:\/\/)?youtu.be\/([\w\d-_]+)(?:\?t=(\d+))?/gi],createMediaPlayer:function(n){return new Ya(n,$.Strings.defaults.youTubeVideoPlayer())}},{urlPatterns:[/^(?:https?:\/\/)?vimeo.com\/([\w\d-_]+).*/gi],createMediaPlayer:function(n){return new Ha(n,$.Strings.defaults.vimeoVideoPlayer())}},{urlPatterns:[/^(?:https?:\/\/)?(?:www.)?dailymotion.com\/video\/([\w\d-_]+).*/gi],createMediaPlayer:function(n){return new Ga(n,$.Strings.defaults.dailymotionVideoPlayer())}}],t.sourcesProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_1,"sources",Va),t.captionSourcesProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_6,"captionSources",Ra),t.posterProperty=new f.StringProperty(f.Versions.v1_1,"poster"),t.altTextProperty=new f.StringProperty(f.Versions.v1_1,"altText"),w([(0,f.property)(t.sourcesProperty)],t.prototype,"sources",void 0),w([(0,f.property)(t.captionSourcesProperty)],t.prototype,"captionSources",void 0),w([(0,f.property)(t.posterProperty)],t.prototype,"poster",void 0),w([(0,f.property)(t.altTextProperty)],t.prototype,"altText",void 0),t}(ve);T.Media=Wa;var Dt=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getAllLabelIds=function(){var n=[];return this.labelledBy&&n.push(this.labelledBy),this._renderedLabelElement&&n.push(this._renderedLabelElement.id),this._renderedErrorMessageElement&&n.push(this._renderedErrorMessageElement.id),n},t.prototype.updateInputControlAriaLabelledBy=function(){if(this._renderedInputControlElement){var n=this.getAllLabelIds();n.length>0?this._renderedInputControlElement.setAttribute("aria-labelledby",n.join(" ")):this._renderedInputControlElement.removeAttribute("aria-labelledby")}},Object.defineProperty(t.prototype,"isNullable",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderedInputControlElement",{get:function(){return this._renderedInputControlElement},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"inputControlContainerElement",{get:function(){return this._inputControlContainerElement},enumerable:!1,configurable:!0}),t.prototype.overrideInternalRender=function(){var n=this.hostConfig;this._outerContainerElement=document.createElement("div"),this._outerContainerElement.style.display="flex",this._outerContainerElement.style.flexDirection="column";var i=q.generateUniqueId();if(this.label){var r=new Hi;r.setParent(this),r.forElementId=i;var o=new Qt(this.label);if(r.addInline(o),this.isRequired){o.init(n.inputs.label.requiredInputs);var a=new Qt(n.inputs.label.requiredInputs.suffix);a.color=n.inputs.label.requiredInputs.suffixColor,a.ariaHidden=!0,r.addInline(a)}else o.init(n.inputs.label.optionalInputs);this._renderedLabelElement=r.render(),this._renderedLabelElement&&(this._renderedLabelElement.id=q.generateUniqueId(),this._renderedLabelElement.style.marginBottom=n.getEffectiveSpacing(n.inputs.label.inputSpacing)+"px",this._outerContainerElement.appendChild(this._renderedLabelElement))}if(this._inputControlContainerElement=document.createElement("div"),this._inputControlContainerElement.className=n.makeCssClassName("ac-input-container"),this._inputControlContainerElement.style.display="flex",this.height==="stretch"&&(this._inputControlContainerElement.style.alignItems="stretch",this._inputControlContainerElement.style.flex="1 1 auto"),this._renderedInputControlElement=this.internalRender(),this._renderedInputControlElement)return this._renderedInputControlElement.id=i,this._renderedInputControlElement.style.minWidth="0px",this.isNullable&&this.isRequired&&(this._renderedInputControlElement.setAttribute("aria-required","true"),this._renderedInputControlElement.classList.add(n.makeCssClassName("ac-input-required"))),this._inputControlContainerElement.appendChild(this._renderedInputControlElement),this._outerContainerElement.appendChild(this._inputControlContainerElement),this.updateInputControlAriaLabelledBy(),this._outerContainerElement;this.resetDirtyState()},t.prototype.valueChanged=function(){this.getRootElement().updateActionsEnabledState(),this.isValid()&&this.resetValidationFailureCue(),this.onValueChanged&&this.onValueChanged(this),vf(this)},t.prototype.resetValidationFailureCue=function(){this.renderedInputControlElement&&(this.renderedInputControlElement.classList.remove(this.hostConfig.makeCssClassName("ac-input-validation-failed")),this.updateInputControlAriaLabelledBy(),this._renderedErrorMessageElement&&(this._outerContainerElement.removeChild(this._renderedErrorMessageElement),this._renderedErrorMessageElement=void 0))},t.prototype.showValidationErrorMessage=function(){if(this.renderedElement&&this.errorMessage&&j.GlobalSettings.displayInputValidationErrors){var n=new Bt;n.setParent(this),n.text=this.errorMessage,n.wrap=!0,n.init(this.hostConfig.inputs.errorMessage),this._renderedErrorMessageElement=n.render(),this._renderedErrorMessageElement&&(this._renderedErrorMessageElement.id=q.generateUniqueId(),this._outerContainerElement.appendChild(this._renderedErrorMessageElement),this.updateInputControlAriaLabelledBy())}},t.prototype.focus=function(){this._renderedInputControlElement&&this._renderedInputControlElement.focus()},t.prototype.isValid=function(){return!0},t.prototype.isDirty=function(){return this.value!==this._oldValue},t.prototype.resetDirtyState=function(){this._oldValue=this.value},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.id||n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.inputsMustHaveUniqueId()),this.isRequired&&(this.label||n.addFailure(this,C.ValidationEvent.RequiredInputsShouldHaveLabel,"Required inputs should have a label"),this.errorMessage||n.addFailure(this,C.ValidationEvent.RequiredInputsShouldHaveErrorMessage,"Required inputs should have an error message"))},t.prototype.validateValue=function(){this.resetValidationFailureCue();var n=this.isRequired?this.isSet()&&this.isValid():this.isValid();return!n&&this.renderedInputControlElement&&(this.renderedInputControlElement.classList.add(this.hostConfig.makeCssClassName("ac-input-validation-failed")),this.showValidationErrorMessage()),n},t.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[this]},t.prototype.render=function(){var n=e.prototype.render.call(this);return this.resetDirtyState(),n},Object.defineProperty(t.prototype,"isInteractive",{get:function(){return!0},enumerable:!1,configurable:!0}),t.labelProperty=new f.StringProperty(f.Versions.v1_3,"label",!0),t.isRequiredProperty=new f.BoolProperty(f.Versions.v1_3,"isRequired",!1),t.errorMessageProperty=new f.StringProperty(f.Versions.v1_3,"errorMessage",!0),w([(0,f.property)(t.labelProperty)],t.prototype,"label",void 0),w([(0,f.property)(t.isRequiredProperty)],t.prototype,"isRequired",void 0),w([(0,f.property)(t.errorMessageProperty)],t.prototype,"errorMessage",void 0),t}(ve);T.Input=Dt;var $a=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.isMultiline=!1,n.style=C.InputTextStyle.Text,n}return t.prototype.setupInput=function(n){var i=this;n.style.flex="1 1 auto",n.tabIndex=this.isDesignMode()?-1:0,this.placeholder&&(n.placeholder=this.placeholder,n.setAttribute("aria-label",this.placeholder)),this.defaultValue&&(n.value=this.defaultValue),this.maxLength&&this.maxLength>0&&(n.maxLength=this.maxLength),n.oninput=function(){i.valueChanged()},n.onkeypress=function(r){r.ctrlKey&&r.code==="Enter"&&i.inlineAction&&i.inlineAction.isEffectivelyEnabled()&&i.inlineAction.execute()}},t.prototype.internalRender=function(){var n;return this.isMultiline&&this.style!==C.InputTextStyle.Password?(n=document.createElement("textarea"),n.className=this.hostConfig.makeCssClassName("ac-input","ac-textInput","ac-multiline"),this.height==="stretch"&&(n.style.height="initial")):(n=document.createElement("input"),n.className=this.hostConfig.makeCssClassName("ac-input","ac-textInput"),n.type=C.InputTextStyle[this.style].toLowerCase()),this.setupInput(n),n},t.prototype.overrideInternalRender=function(){var n=this,i=e.prototype.overrideInternalRender.call(this);if(this.inlineAction){var r=document.createElement("button");if(r.className=this.hostConfig.makeCssClassName(this.inlineAction.isEffectivelyEnabled()?"ac-inlineActionButton":"ac-inlineActionButton-disabled"),r.onclick=function(a){n.inlineAction&&n.inlineAction.isEffectivelyEnabled()&&(a.preventDefault(),a.cancelBubble=!0,n.inlineAction.execute())},this.inlineAction.iconUrl){r.classList.add("iconOnly");var o=document.createElement("img");o.style.height="100%",o.setAttribute("role","presentation"),o.style.display="none",o.onload=function(){o.style.removeProperty("display")},o.onerror=function(){r.removeChild(o),r.classList.remove("iconOnly"),r.classList.add("textOnly"),r.textContent=n.inlineAction&&n.inlineAction.title?n.inlineAction.title:$.Strings.defaults.inlineActionTitle()},o.src=this.inlineAction.iconUrl,r.appendChild(o),r.title=this.inlineAction.title?this.inlineAction.title:$.Strings.defaults.inlineActionTitle()}else r.classList.add("textOnly"),r.textContent=this.inlineAction.title?this.inlineAction.title:$.Strings.defaults.inlineActionTitle();this.inlineAction.setupElementForAccessibility(r,!0),r.style.marginLeft="8px",this.inputControlContainerElement.appendChild(r)}return i},t.prototype.getJsonTypeName=function(){return"Input.Text"},t.prototype.getAllActions=function(){var n=e.prototype.getAllActions.call(this);return this.inlineAction&&n.push(this.inlineAction),n},t.prototype.getActionById=function(n){var i=e.prototype.getActionById.call(this,n);return!i&&this.inlineAction&&(i=this.inlineAction.getActionById(n)),i},t.prototype.isSet=function(){return!!this.value},t.prototype.isValid=function(){return this.value&&this.regex?new RegExp(this.regex,"g").test(this.value):!0},Object.defineProperty(t.prototype,"value",{get:function(){if(this.renderedInputControlElement)return this.isMultiline?this.renderedInputControlElement.value:this.renderedInputControlElement.value},enumerable:!1,configurable:!0}),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),t.maxLengthProperty=new f.NumProperty(f.Versions.v1_0,"maxLength"),t.isMultilineProperty=new f.BoolProperty(f.Versions.v1_0,"isMultiline",!1),t.placeholderProperty=new f.StringProperty(f.Versions.v1_0,"placeholder"),t.styleProperty=new f.EnumProperty(f.Versions.v1_0,"style",C.InputTextStyle,C.InputTextStyle.Text,[{value:C.InputTextStyle.Text},{value:C.InputTextStyle.Tel},{value:C.InputTextStyle.Url},{value:C.InputTextStyle.Email},{value:C.InputTextStyle.Password,targetVersion:f.Versions.v1_5}]),t.inlineActionProperty=new cn(f.Versions.v1_0,"inlineAction",["Action.ShowCard"]),t.regexProperty=new f.StringProperty(f.Versions.v1_3,"regex",!0),w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.maxLengthProperty)],t.prototype,"maxLength",void 0),w([(0,f.property)(t.isMultilineProperty)],t.prototype,"isMultiline",void 0),w([(0,f.property)(t.placeholderProperty)],t.prototype,"placeholder",void 0),w([(0,f.property)(t.styleProperty)],t.prototype,"style",void 0),w([(0,f.property)(t.inlineActionProperty)],t.prototype,"inlineAction",void 0),w([(0,f.property)(t.regexProperty)],t.prototype,"regex",void 0),t}(Dt);T.TextInput=$a;var qa=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.valueOn="true",n.valueOff="false",n.wrap=!1,n}return t.prototype.updateInputControlAriaLabelledBy=function(){if(this._checkboxInputElement){var n=this.getAllLabelIds().join(" ");this._checkboxInputLabelElement&&this._checkboxInputLabelElement.id&&(n+=" "+this._checkboxInputLabelElement.id),n?this._checkboxInputElement.setAttribute("aria-labelledby",n):this._checkboxInputElement.removeAttribute("aria-labelledby")}},t.prototype.internalRender=function(){var n=this,i=document.createElement("div");if(i.className=this.hostConfig.makeCssClassName("ac-input","ac-toggleInput"),i.style.width="100%",i.style.display="flex",i.style.alignItems="center",this._checkboxInputElement=document.createElement("input"),this._checkboxInputElement.id=q.generateUniqueId(),this._checkboxInputElement.type="checkbox",this._checkboxInputElement.style.display="inline-block",this._checkboxInputElement.style.verticalAlign="middle",this._checkboxInputElement.style.margin="0",this._checkboxInputElement.style.flex="0 0 auto",this.title&&this._checkboxInputElement.setAttribute("aria-label",this.title),this.isRequired&&this._checkboxInputElement.setAttribute("aria-required","true"),this._checkboxInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue===this.valueOn&&(this._checkboxInputElement.checked=!0),this._oldCheckboxValue=this._checkboxInputElement.checked,this._checkboxInputElement.onchange=function(){n.valueChanged()},q.appendChild(i,this._checkboxInputElement),this.title||this.isDesignMode()){var r=new Bt;if(r.setParent(this),r.forElementId=this._checkboxInputElement.id,r.hostConfig=this.hostConfig,r.text=this.title?this.title:this.getJsonTypeName(),r.useMarkdown=j.GlobalSettings.useMarkdownInRadioButtonAndCheckbox,r.wrap=this.wrap,this._checkboxInputLabelElement=r.render(),this._checkboxInputLabelElement){this._checkboxInputLabelElement.id=q.generateUniqueId(),this._checkboxInputLabelElement.style.display="inline-block",this._checkboxInputLabelElement.style.flex="1 1 auto",this._checkboxInputLabelElement.style.marginLeft="6px",this._checkboxInputLabelElement.style.verticalAlign="middle";var o=document.createElement("div");o.style.width="6px",q.appendChild(i,o),q.appendChild(i,this._checkboxInputLabelElement)}}return i},Object.defineProperty(t.prototype,"isNullable",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.getJsonTypeName=function(){return"Input.Toggle"},t.prototype.focus=function(){this._checkboxInputElement&&this._checkboxInputElement.focus()},t.prototype.isSet=function(){return this.isRequired?this.value===this.valueOn:!!this.value},t.prototype.isDirty=function(){return this._checkboxInputElement?this._checkboxInputElement.checked!==this._oldCheckboxValue:!1},Object.defineProperty(t.prototype,"value",{get:function(){if(this._checkboxInputElement)return this._checkboxInputElement.checked?this.valueOn:this.valueOff},enumerable:!1,configurable:!0}),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),t.titleProperty=new f.StringProperty(f.Versions.v1_0,"title"),t.valueOnProperty=new f.StringProperty(f.Versions.v1_0,"valueOn",!0,void 0,"true",function(n){return"true"}),t.valueOffProperty=new f.StringProperty(f.Versions.v1_0,"valueOff",!0,void 0,"false",function(n){return"false"}),t.wrapProperty=new f.BoolProperty(f.Versions.v1_2,"wrap",!1),w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.titleProperty)],t.prototype,"title",void 0),w([(0,f.property)(t.valueOnProperty)],t.prototype,"valueOn",void 0),w([(0,f.property)(t.valueOffProperty)],t.prototype,"valueOff",void 0),w([(0,f.property)(t.wrapProperty)],t.prototype,"wrap",void 0),t}(Dt);T.ToggleInput=qa;var ja=function(e){G(t,e);function t(n,i){var r=e.call(this)||this;return r.title=n,r.value=i,r}return t.prototype.getSchemaKey=function(){return"Choice"},t.titleProperty=new f.StringProperty(f.Versions.v1_0,"title"),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),w([(0,f.property)(t.titleProperty)],t.prototype,"title",void 0),w([(0,f.property)(t.valueProperty)],t.prototype,"value",void 0),t}(f.SerializableObject);T.Choice=ja;var Ua=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.isMultiSelect=!1,n.wrap=!1,n.choices=[],n}return Object.defineProperty(t.prototype,"isCompact",{get:function(){return!this.style||this.style==="compact"},set:function(n){this.style=n?void 0:"expanded"},enumerable:!1,configurable:!0}),t.getUniqueCategoryName=function(){var n="__ac-category"+t._uniqueCategoryCounter;return t._uniqueCategoryCounter++,n},t.prototype.internalApplyAriaCurrent=function(){if(this._selectElement){var n=this._selectElement.options;if(n)for(var i=0,r=Array.from(n);i<r.length;i++){var o=r[i];o.selected?o.setAttribute("aria-current","true"):o.removeAttribute("aria-current")}}},t.prototype.renderCompoundInput=function(n,i,r){var o=this,a=document.createElement("div");a.className=this.hostConfig.makeCssClassName("ac-input",n),a.style.width="100%",a.tabIndex=this.isDesignMode()?-1:0,this._toggleInputs=[],this._labels=[];for(var l=0,s=this.choices;l<s.length;l++){var c=s[l],u=document.createElement("input");u.id=q.generateUniqueId(),u.type=i,u.style.margin="0",u.style.display="inline-block",u.style.verticalAlign="middle",u.style.flex="0 0 auto",u.name=this.id?this.id:this._uniqueCategoryName,this.isRequired&&u.setAttribute("aria-required","true"),u.tabIndex=this.isDesignMode()?-1:0,c.value&&(u.value=c.value),c.title&&u.setAttribute("aria-label",c.title),r&&c.value&&r.indexOf(c.value)>=0&&(u.checked=!0),u.onchange=function(){o.valueChanged()},this._toggleInputs.push(u);var d=document.createElement("div");d.style.display="flex",d.style.alignItems="center",q.appendChild(d,u);var p=new Bt;p.setParent(this),p.forElementId=u.id,p.hostConfig=this.hostConfig,p.text=c.title?c.title:"Choice "+this._toggleInputs.length,p.useMarkdown=j.GlobalSettings.useMarkdownInRadioButtonAndCheckbox,p.wrap=this.wrap;var m=p.render();if(this._labels.push(m),m){m.id=q.generateUniqueId(),m.style.display="inline-block",m.style.flex="1 1 auto",m.style.marginLeft="6px",m.style.verticalAlign="middle";var y=document.createElement("div");y.style.width="6px",q.appendChild(d,y),q.appendChild(d,m)}q.appendChild(a,d)}return a},t.prototype.updateInputControlAriaLabelledBy=function(){if((this.isMultiSelect||this.style==="expanded")&&this._toggleInputs&&this._labels)for(var n=this.getAllLabelIds(),i=0;i<this._toggleInputs.length;i++){var r=n.join(" "),o=this._labels[i];o&&o.id&&(r+=" "+o.id),r?this._toggleInputs[i].setAttribute("aria-labelledby",r):this._toggleInputs[i].removeAttribute("aria-labelledby")}else e.prototype.updateInputControlAriaLabelledBy.call(this)},t.prototype.internalRender=function(){var n=this;if(this._uniqueCategoryName=t.getUniqueCategoryName(),this.isMultiSelect)return this.renderCompoundInput("ac-choiceSetInput-multiSelect","checkbox",this.defaultValue?this.defaultValue.split(this.hostConfig.choiceSetInputValueSeparator):void 0);if(this.style==="expanded")return this.renderCompoundInput("ac-choiceSetInput-expanded","radio",this.defaultValue?[this.defaultValue]:void 0);if(this.style==="filtered"){var i=document.createElement("div");i.style.width="100%",this._textInput=document.createElement("input"),this._textInput.className=this.hostConfig.makeCssClassName("ac-input","ac-multichoiceInput","ac-choiceSetInput-filtered"),this._textInput.type="text",this._textInput.style.width="100%",this._textInput.oninput=function(){n.valueChanged(),n._textInput&&(n.value?(n._textInput.removeAttribute("placeholder"),n._textInput.removeAttribute("aria-label")):n.placeholder&&(n._textInput.placeholder=n.placeholder,n._textInput.setAttribute("aria-label",n.placeholder)))},this.defaultValue&&(this._textInput.value=this.defaultValue),this.placeholder&&!this._textInput.value&&(this._textInput.placeholder=this.placeholder,this._textInput.setAttribute("aria-label",this.placeholder)),this._textInput.tabIndex=this.isDesignMode()?-1:0;var r=document.createElement("datalist");r.id=q.generateUniqueId();for(var o=0,a=this.choices;o<a.length;o++){var l=a[o],s=document.createElement("option");l.title&&(s.value=l.title,s.setAttribute("aria-label",l.title)),s.tabIndex=this.isDesignMode()?-1:0,r.appendChild(s)}return this._textInput.setAttribute("list",r.id),i.append(this._textInput,r),i}else{this._selectElement=document.createElement("select"),this._selectElement.className=this.hostConfig.makeCssClassName("ac-input","ac-multichoiceInput","ac-choiceSetInput-compact"),this._selectElement.style.width="100%",this._selectElement.tabIndex=this.isDesignMode()?-1:0;var c=document.createElement("option");c.selected=!0,c.disabled=!0,c.hidden=!0,c.value="",this.placeholder&&(c.text=this.placeholder),q.appendChild(this._selectElement,c);for(var u=0,d=this.choices;u<d.length;u++){var l=d[u],s=document.createElement("option");s.value=l.value,l.title&&(s.text=l.title,s.setAttribute("aria-label",l.title)),s.tabIndex=this.isDesignMode()?-1:0,l.value===this.defaultValue&&(s.selected=!0),q.appendChild(this._selectElement,s)}return this._selectElement.onchange=function(){n.internalApplyAriaCurrent(),n.valueChanged()},this.internalApplyAriaCurrent(),this._selectElement}},t.prototype.getJsonTypeName=function(){return"Input.ChoiceSet"},t.prototype.focus=function(){this._toggleInputs&&(this.isMultiSelect||this.style==="expanded")?this._toggleInputs.length>0&&this._toggleInputs[0].focus():this._textInput?this._textInput.focus():e.prototype.focus.call(this)},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.choices.length===0&&n.addFailure(this,C.ValidationEvent.CollectionCantBeEmpty,$.Strings.errors.choiceSetMustHaveAtLeastOneChoice());for(var i=0,r=this.choices;i<r.length;i++){var o=r[i];(!o.title||!o.value)&&n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.choiceSetChoicesMustHaveTitleAndValue())}},t.prototype.isSet=function(){return!!this.value},t.prototype.isValid=function(){if(this._textInput){if(this.value===""||this.value===this.placeholder)return!0;for(var n=0,i=this.choices;n<i.length;n++){var r=i[n];if(this.value===r.value)return!0}return!1}return e.prototype.isValid.call(this)},Object.defineProperty(t.prototype,"value",{get:function(){if(this.isMultiSelect){if(!this._toggleInputs||this._toggleInputs.length===0)return;for(var s="",c=0,u=this._toggleInputs;c<u.length;c++){var l=u[c];l.checked&&(s!==""&&(s+=this.hostConfig.choiceSetInputValueSeparator),s+=l.value)}return s||void 0}else{if(this._selectElement)return this._selectElement.selectedIndex>0?this._selectElement.value:void 0;if(this._textInput){for(var n=0,i=this.choices;n<i.length;n++){var r=i[n];if(r.title&&this._textInput.value===r.title)return r.value}return this._textInput.value}else if(this._toggleInputs&&this._toggleInputs.length>0)for(var o=0,a=this._toggleInputs;o<a.length;o++){var l=a[o];if(l.checked)return l.value}return}},enumerable:!1,configurable:!0}),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),t.choicesProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_0,"choices",ja),t.styleProperty=new f.ValueSetProperty(f.Versions.v1_0,"style",[{value:"compact"},{value:"expanded"},{value:"filtered",targetVersion:f.Versions.v1_5}],"compact"),t.isMultiSelectProperty=new f.BoolProperty(f.Versions.v1_0,"isMultiSelect",!1),t.placeholderProperty=new f.StringProperty(f.Versions.v1_0,"placeholder"),t.wrapProperty=new f.BoolProperty(f.Versions.v1_2,"wrap",!1),t._uniqueCategoryCounter=0,w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.styleProperty)],t.prototype,"style",void 0),w([(0,f.property)(t.isMultiSelectProperty)],t.prototype,"isMultiSelect",void 0),w([(0,f.property)(t.placeholderProperty)],t.prototype,"placeholder",void 0),w([(0,f.property)(t.wrapProperty)],t.prototype,"wrap",void 0),w([(0,f.property)(t.choicesProperty)],t.prototype,"choices",void 0),t}(Dt);T.ChoiceSetInput=Ua;var Qa=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.internalRender=function(){var n=this;return this._numberInputElement=document.createElement("input"),this._numberInputElement.setAttribute("type","number"),this.min!==void 0&&this._numberInputElement.setAttribute("min",this.min.toString()),this.max!==void 0&&this._numberInputElement.setAttribute("max",this.max.toString()),this._numberInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-numberInput"),this._numberInputElement.style.width="100%",this._numberInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue!==void 0&&(this._numberInputElement.valueAsNumber=this.defaultValue),this.placeholder&&(this._numberInputElement.placeholder=this.placeholder,this._numberInputElement.setAttribute("aria-label",this.placeholder)),this._numberInputElement.oninput=function(){n.valueChanged()},this._numberInputElement},t.prototype.getJsonTypeName=function(){return"Input.Number"},t.prototype.isSet=function(){return this.value!==void 0&&!isNaN(this.value)},t.prototype.isValid=function(){if(this.value===void 0)return!this.isRequired;var n=!0;return this.min!==void 0&&(n=n&&this.value>=this.min),this.max!==void 0&&(n=n&&this.value<=this.max),n},Object.defineProperty(t.prototype,"value",{get:function(){return this._numberInputElement?this._numberInputElement.valueAsNumber:void 0},set:function(n){n&&this._numberInputElement&&(this._numberInputElement.value=n.toString())},enumerable:!1,configurable:!0}),t.valueProperty=new f.NumProperty(f.Versions.v1_0,"value"),t.placeholderProperty=new f.StringProperty(f.Versions.v1_0,"placeholder"),t.minProperty=new f.NumProperty(f.Versions.v1_0,"min"),t.maxProperty=new f.NumProperty(f.Versions.v1_0,"max"),w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.minProperty)],t.prototype,"min",void 0),w([(0,f.property)(t.maxProperty)],t.prototype,"max",void 0),w([(0,f.property)(t.placeholderProperty)],t.prototype,"placeholder",void 0),t}(Dt);T.NumberInput=Qa;var Ja=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.internalRender=function(){var n=this;return this._dateInputElement=document.createElement("input"),this._dateInputElement.setAttribute("type","date"),this.min&&this._dateInputElement.setAttribute("min",this.min),this.max&&this._dateInputElement.setAttribute("max",this.max),this.placeholder&&(this._dateInputElement.placeholder=this.placeholder,this._dateInputElement.setAttribute("aria-label",this.placeholder)),this._dateInputElement.tabIndex=this.isDesignMode()?-1:0,this._dateInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-dateInput"),this._dateInputElement.style.width="100%",this._dateInputElement.oninput=function(){n.valueChanged()},this.defaultValue&&(this._dateInputElement.value=this.defaultValue),this._dateInputElement},t.prototype.getJsonTypeName=function(){return"Input.Date"},t.prototype.isSet=function(){return!!this.value},t.prototype.isValid=function(){if(!this.value)return!this.isRequired;var n=new Date(this.value),i=!0;if(this.min){var r=new Date(this.min);i=i&&n>=r}if(this.max){var o=new Date(this.max);i=i&&n<=o}return i},Object.defineProperty(t.prototype,"value",{get:function(){return this._dateInputElement?this._dateInputElement.value:void 0},enumerable:!1,configurable:!0}),t.valueProperty=new f.StringProperty(f.Versions.v1_0,"value"),t.placeholderProperty=new f.StringProperty(f.Versions.v1_0,"placeholder"),t.minProperty=new f.StringProperty(f.Versions.v1_0,"min"),t.maxProperty=new f.StringProperty(f.Versions.v1_0,"max"),w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.minProperty)],t.prototype,"min",void 0),w([(0,f.property)(t.maxProperty)],t.prototype,"max",void 0),w([(0,f.property)(t.placeholderProperty)],t.prototype,"placeholder",void 0),t}(Dt);T.DateInput=Ja;var Rn=function(e){G(t,e);function t(n,i){var r=e.call(this,n,i,function(o,a,l,s){var c=l[a.name];if(typeof c=="string"&&c&&/^[0-9]{2}:[0-9]{2}$/.test(c))return c},function(o,a,l,s,c){c.serializeValue(l,a.name,s)})||this;return r.targetVersion=n,r.name=i,r}return t}(f.CustomProperty);T.TimeProperty=Rn;var Xa=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.convertTimeStringToDate=function(n){return new Date("1973-09-04T"+n+":00Z")},t.prototype.internalRender=function(){var n=this;return this._timeInputElement=document.createElement("input"),this._timeInputElement.setAttribute("type","time"),this.min&&this._timeInputElement.setAttribute("min",this.min),this.max&&this._timeInputElement.setAttribute("max",this.max),this._timeInputElement.className=this.hostConfig.makeCssClassName("ac-input","ac-timeInput"),this._timeInputElement.style.width="100%",this._timeInputElement.oninput=function(){n.valueChanged()},this.placeholder&&(this._timeInputElement.placeholder=this.placeholder,this._timeInputElement.setAttribute("aria-label",this.placeholder)),this._timeInputElement.tabIndex=this.isDesignMode()?-1:0,this.defaultValue&&(this._timeInputElement.value=this.defaultValue),this._timeInputElement},t.prototype.getJsonTypeName=function(){return"Input.Time"},t.prototype.isSet=function(){return!!this.value},t.prototype.isValid=function(){if(!this.value)return!this.isRequired;var n=t.convertTimeStringToDate(this.value),i=!0;if(this.min){var r=t.convertTimeStringToDate(this.min);i=i&&n>=r}if(this.max){var o=t.convertTimeStringToDate(this.max);i=i&&n<=o}return i},Object.defineProperty(t.prototype,"value",{get:function(){return this._timeInputElement?this._timeInputElement.value:void 0},enumerable:!1,configurable:!0}),t.valueProperty=new Rn(f.Versions.v1_0,"value"),t.placeholderProperty=new f.StringProperty(f.Versions.v1_0,"placeholder"),t.minProperty=new Rn(f.Versions.v1_0,"min"),t.maxProperty=new Rn(f.Versions.v1_0,"max"),w([(0,f.property)(t.valueProperty)],t.prototype,"defaultValue",void 0),w([(0,f.property)(t.minProperty)],t.prototype,"min",void 0),w([(0,f.property)(t.maxProperty)],t.prototype,"max",void 0),w([(0,f.property)(t.placeholderProperty)],t.prototype,"placeholder",void 0),t}(Dt);T.TimeInput=Xa;var yt=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.style=C.ActionStyle.Default,n.mode=C.ActionMode.Primary,n._state=0,n._isFocusable=!0,n}return t.prototype.renderButtonContent=function(){if(this.renderedElement){var n=this.hostConfig,i=document.createElement("div");if(i.style.overflow="hidden",i.style.textOverflow="ellipsis",n.actions.iconPlacement===C.ActionIconPlacement.AboveTitle||n.actions.allowTitleToWrap||(i.style.whiteSpace="nowrap"),this.title&&(i.innerText=this.title),!this.iconUrl)this.renderedElement.classList.add("noIcon"),this.renderedElement.appendChild(i);else{var r=document.createElement("img");r.src=this.iconUrl,r.style.width=n.actions.iconSize+"px",r.style.height=n.actions.iconSize+"px",r.style.flex="0 0 auto",n.actions.iconPlacement===C.ActionIconPlacement.AboveTitle?(this.renderedElement.classList.add("iconAbove"),this.renderedElement.style.flexDirection="column",this.title&&(r.style.marginBottom="6px")):(this.renderedElement.classList.add("iconLeft"),r.style.maxHeight="100%",this.title&&(r.style.marginRight="6px")),this.renderedElement.appendChild(r),this.renderedElement.appendChild(i)}}},t.prototype.getParentContainer=function(){return this.parent instanceof Mt?this.parent:this.parent?this.parent.getParentContainer():void 0},t.prototype.isDesignMode=function(){var n=this.getRootObject();return n instanceof ve&&n.isDesignMode()},t.prototype.updateCssClasses=function(){var n,i;if(this.parent&&this.renderedElement){var r=this.parent.hostConfig;this.renderedElement.className=r.makeCssClassName(this.isEffectivelyEnabled()?"ac-pushButton":"ac-pushButton-disabled");var o=this.getParentContainer();if(o){var a=o.getEffectiveStyle();a&&this.renderedElement.classList.add("style-"+a)}switch(this.renderedElement.tabIndex=!this.isDesignMode()&&this.isFocusable?0:-1,this._state){case 0:break;case 1:this.renderedElement.classList.add(r.makeCssClassName("expanded"));break;case 2:this.renderedElement.classList.add(r.makeCssClassName("subdued"));break}this.style&&this.isEffectivelyEnabled()&&(this.style===C.ActionStyle.Positive?(n=this.renderedElement.classList).add.apply(n,r.makeCssClassNames("primary","style-positive")):(i=this.renderedElement.classList).add.apply(i,r.makeCssClassNames("style-"+this.style.toLowerCase())))}},t.prototype.getDefaultSerializationContext=function(){return new Xt},t.prototype.internalGetReferencedInputs=function(){return{}},t.prototype.internalPrepareForExecution=function(n){},t.prototype.internalValidateInputs=function(n){var i=[];if(n)for(var r=0,o=Object.keys(n);r<o.length;r++){var a=o[r],l=n[a];l.validateValue()||i.push(l)}return i},t.prototype.shouldSerialize=function(n){return n.actionRegistry.findByName(this.getJsonTypeName())!==void 0},t.prototype.raiseExecuteActionEvent=function(){this.onExecute&&this.onExecute(this),bf(this)},t.prototype.internalAfterExecute=function(){var n=this.getRootObject();n instanceof ve&&n.updateActionsEnabledState()},t.prototype.getHref=function(){return""},t.prototype.getAriaRole=function(){return"button"},t.prototype.setupElementForAccessibility=function(n,i){if(i===void 0&&(i=!1),n.tabIndex=this.isEffectivelyEnabled()&&!this.isDesignMode()?0:-1,n.setAttribute("role",this.getAriaRole()),n instanceof HTMLButtonElement&&(n.disabled=!this.isEffectivelyEnabled()),this.isEffectivelyEnabled()?(n.removeAttribute("aria-disabled"),n.classList.add(this.hostConfig.makeCssClassName("ac-selectable"))):n.setAttribute("aria-disabled","true"),this.title?(n.setAttribute("aria-label",this.title),n.title=this.title):(n.removeAttribute("aria-label"),n.removeAttribute("title")),this.tooltip){var r=i?this.title?"aria-description":"aria-label":"aria-description";n.setAttribute(r,this.tooltip),n.title=this.tooltip}},t.prototype.parse=function(n,i){return e.prototype.parse.call(this,n,i||new Xt)},t.prototype.render=function(){var n=this,i=document.createElement("button");i.type="button",i.style.display="flex",i.style.alignItems="center",i.style.justifyContent="center",i.onclick=function(r){n.isEffectivelyEnabled()&&(r.preventDefault(),r.cancelBubble=!0,n.execute())},this._renderedElement=i,this.renderButtonContent(),this.updateCssClasses(),this.setupElementForAccessibility(i)},t.prototype.execute=function(){this._actionCollection&&this._actionCollection.actionExecuted(this),this.raiseExecuteActionEvent(),this.internalAfterExecute()},t.prototype.prepareForExecution=function(){var n=this.getReferencedInputs(),i=this.internalValidateInputs(n);return i.length>0?(i[0].focus(),!1):(this.internalPrepareForExecution(n),!0)},t.prototype.remove=function(){return this._actionCollection?this._actionCollection.removeAction(this):!1},t.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),[]},t.prototype.getAllActions=function(){return[this]},t.prototype.getResourceInformation=function(){return this.iconUrl?[{url:this.iconUrl,mimeType:"image"}]:[]},t.prototype.getActionById=function(n){return this.id===n?this:void 0},t.prototype.getReferencedInputs=function(){return this.internalGetReferencedInputs()},t.prototype.validateInputs=function(){return this.internalValidateInputs(this.getReferencedInputs())},t.prototype.updateEnabledState=function(){},t.prototype.isEffectivelyEnabled=function(){return this.isEnabled},Object.defineProperty(t.prototype,"isPrimary",{get:function(){return this.style===C.ActionStyle.Positive},set:function(n){n?this.style=C.ActionStyle.Positive:this.style===C.ActionStyle.Positive&&(this.style=C.ActionStyle.Default)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hostConfig",{get:function(){return this.parent?this.parent.hostConfig:Li.defaultHostConfig},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"state",{get:function(){return this._state},set:function(n){this._state!==n&&(this._state=n,this.updateCssClasses())},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isFocusable",{get:function(){return this._isFocusable},set:function(n){this._isFocusable!==n&&(this._isFocusable=n,this.updateCssClasses())},enumerable:!1,configurable:!0}),t.titleProperty=new f.StringProperty(f.Versions.v1_0,"title"),t.iconUrlProperty=new f.StringProperty(f.Versions.v1_1,"iconUrl"),t.styleProperty=new f.ValueSetProperty(f.Versions.v1_2,"style",[{value:C.ActionStyle.Default},{value:C.ActionStyle.Positive},{value:C.ActionStyle.Destructive}],C.ActionStyle.Default),t.modeProperty=new f.ValueSetProperty(f.Versions.v1_5,"mode",[{value:C.ActionMode.Primary},{value:C.ActionMode.Secondary}],C.ActionMode.Primary),t.tooltipProperty=new f.StringProperty(f.Versions.v1_5,"tooltip"),t.isEnabledProperty=new f.BoolProperty(f.Versions.v1_5,"isEnabled",!0),w([(0,f.property)(t.titleProperty)],t.prototype,"title",void 0),w([(0,f.property)(t.iconUrlProperty)],t.prototype,"iconUrl",void 0),w([(0,f.property)(t.styleProperty)],t.prototype,"style",void 0),w([(0,f.property)(t.modeProperty)],t.prototype,"mode",void 0),w([(0,f.property)(t.tooltipProperty)],t.prototype,"tooltip",void 0),w([(0,f.property)(t.isEnabledProperty)],t.prototype,"isEnabled",void 0),t}(Ma.CardObject);T.Action=yt;var Wi=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.disabledUnlessAssociatedInputsChange=!1,n._isPrepared=!1,n._areReferencedInputsDirty=!1,n}return t.prototype.internalGetReferencedInputs=function(){var n={};if(this.associatedInputs!=="none"){for(var i=this.parent,r=[];i;)r.push.apply(r,i.getAllInputs(!1)),i=i.parent;for(var o=0,a=r;o<a.length;o++){var l=a[o];l.id&&(n[l.id]=l)}}return n},t.prototype.internalPrepareForExecution=function(n){if(this._originalData?this._processedData=JSON.parse(JSON.stringify(this._originalData)):this._processedData={},this._processedData&&n)for(var i=0,r=Object.keys(n);i<r.length;i++){var o=r[i],a=n[o];a.id&&a.isSet()&&(this._processedData[a.id]=typeof a.value=="string"?a.value:a.value.toString())}this._isPrepared=!0},t.prototype.internalAfterExecute=function(){j.GlobalSettings.resetInputsDirtyStateAfterActionExecution&&this.resetReferencedInputsDirtyState()},t.prototype.resetReferencedInputsDirtyState=function(){var n=this.getReferencedInputs();if(this._areReferencedInputsDirty=!1,n)for(var i=0,r=Object.keys(n);i<r.length;i++){var o=r[i],a=n[o];a.resetDirtyState()}},t.prototype.updateEnabledState=function(){this._areReferencedInputsDirty=!1;var n=this.getReferencedInputs();if(n)for(var i=0,r=Object.keys(n);i<r.length;i++){var o=r[i],a=n[o];if(a.isDirty()){this._areReferencedInputsDirty=!0;break}}this.updateCssClasses(),this._renderedElement&&this.setupElementForAccessibility(this._renderedElement)},t.prototype.isEffectivelyEnabled=function(){var n=e.prototype.isEffectivelyEnabled.call(this);return this.disabledUnlessAssociatedInputsChange?n&&this._areReferencedInputsDirty:n},Object.defineProperty(t.prototype,"data",{get:function(){return this._isPrepared?this._processedData:this._originalData},set:function(n){this._originalData=n,this._isPrepared=!1},enumerable:!1,configurable:!0}),t.dataProperty=new f.PropertyDefinition(f.Versions.v1_0,"data"),t.associatedInputsProperty=new f.CustomProperty(f.Versions.v1_3,"associatedInputs",function(n,i,r,o){var a=r[i.name];if(a!==void 0&&typeof a=="string")return a.toLowerCase()==="none"?"none":"auto"},function(n,i,r,o,a){a.serializeValue(r,i.name,o)}),t.disabledUnlessAssociatedInputsChangeProperty=new f.BoolProperty(f.Versions.v1_6,"disabledUnlessAssociatedInputsChange",!1),w([(0,f.property)(t.dataProperty)],t.prototype,"_originalData",void 0),w([(0,f.property)(t.associatedInputsProperty)],t.prototype,"associatedInputs",void 0),w([(0,f.property)(t.disabledUnlessAssociatedInputsChangeProperty)],t.prototype,"disabledUnlessAssociatedInputsChange",void 0),t}(yt);T.SubmitActionBase=Wi;var Oi=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.JsonTypeName="Action.Submit",t}(Wi);T.SubmitAction=Oi;var Nn=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.JsonTypeName="Action.Execute",t.verbProperty=new f.StringProperty(f.Versions.v1_4,"verb"),w([(0,f.property)(t.verbProperty)],t.prototype,"verb",void 0),t}(Wi);T.ExecuteAction=Nn;var _i=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.prototype.getAriaRole=function(){return"link"},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.url||n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.propertyMustBeSet("url"))},t.prototype.getHref=function(){return this.url},t.urlProperty=new f.StringProperty(f.Versions.v1_0,"url"),t.JsonTypeName="Action.OpenUrl",w([(0,f.property)(t.urlProperty)],t.prototype,"url",void 0),t}(yt);T.OpenUrlAction=_i;var Ri=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.targetElements={},n}return t.prototype.updateAriaControlsAttribute=function(){if(this.targetElements){var n=Object.keys(this.targetElements);this._renderedElement&&(n.length>0?this._renderedElement.setAttribute("aria-controls",n.join(" ")):this._renderedElement.removeAttribute("aria-controls"))}},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.targetElements||n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.propertyMustBeSet("targetElements"))},t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.prototype.render=function(){e.prototype.render.call(this),this.updateAriaControlsAttribute()},t.prototype.execute=function(){if(e.prototype.execute.call(this),this.parent)for(var n=0,i=Object.keys(this.targetElements);n<i.length;n++){var r=i[n],o=this.parent.getRootElement().getElementById(r);o&&(typeof this.targetElements[r]=="boolean"?o.isVisible=this.targetElements[r]:o.isVisible=!o.isVisible)}},t.prototype.addTargetElement=function(n,i){i===void 0&&(i=void 0),this.targetElements[n]=i,this.updateAriaControlsAttribute()},t.prototype.removeTargetElement=function(n){delete this.targetElements[n],this.updateAriaControlsAttribute()},t.targetElementsProperty=new f.CustomProperty(f.Versions.v1_2,"targetElements",function(n,i,r,o){var a={};if(Array.isArray(r[i.name]))for(var l=0,s=r[i.name];l<s.length;l++){var c=s[l];if(typeof c=="string")a[c]=void 0;else if(typeof c=="object"){var u=c.elementId;typeof u=="string"&&(a[u]=q.parseBool(c.isVisible))}}return a},function(n,i,r,o,a){for(var l=[],s=0,c=Object.keys(o);s<c.length;s++){var u=c[s];typeof o[u]=="boolean"?l.push({elementId:u,isVisible:o[u]}):l.push(u)}a.serializeArray(r,i.name,l)},{},function(n){return{}}),t.JsonTypeName="Action.ToggleVisibility",w([(0,f.property)(t.targetElementsProperty)],t.prototype,"targetElements",void 0),t}(yt);T.ToggleVisibilityAction=Ri;var Vi=function(e){G(t,e);function t(n,i){var r=e.call(this,n,i,void 0,function(){return new j.StringWithSubstitutions})||this;return r.targetVersion=n,r.name=i,r}return t.prototype.parse=function(n,i,r){var o=new j.StringWithSubstitutions;return o.set(q.parseString(i[this.name])),o},t.prototype.toJSON=function(n,i,r,o){o.serializeValue(i,this.name,r.getOriginal())},t}(f.PropertyDefinition),Ka=function(e){G(t,e);function t(n,i){n===void 0&&(n=""),i===void 0&&(i="");var r=e.call(this)||this;return r.name=n,r.value=i,r}return t.prototype.getSchemaKey=function(){return"HttpHeader"},t.prototype.getReferencedInputs=function(n,i){this._value.getReferencedInputs(n,i)},t.prototype.prepareForExecution=function(n){this._value.substituteInputValues(n,j.ContentTypes.applicationXWwwFormUrlencoded)},Object.defineProperty(t.prototype,"value",{get:function(){return this._value.get()},set:function(n){this._value.set(n)},enumerable:!1,configurable:!0}),t.nameProperty=new f.StringProperty(f.Versions.v1_0,"name"),t.valueProperty=new Vi(f.Versions.v1_0,"value"),w([(0,f.property)(t.nameProperty)],t.prototype,"name",void 0),w([(0,f.property)(t.valueProperty)],t.prototype,"_value",void 0),t}(f.SerializableObject);T.HttpHeader=Ka;var mf=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._ignoreInputValidation=!1,n}return t.prototype.internalGetReferencedInputs=function(){var n=this.parent?this.parent.getRootElement().getAllInputs():[],i={};this._url.getReferencedInputs(n,i);for(var r=0,o=this.headers;r<o.length;r++){var a=o[r];a.getReferencedInputs(n,i)}return this._body.getReferencedInputs(n,i),i},t.prototype.internalPrepareForExecution=function(n){if(n){this._url.substituteInputValues(n,j.ContentTypes.applicationXWwwFormUrlencoded);for(var i=j.ContentTypes.applicationJson,r=0,o=this.headers;r<o.length;r++){var a=o[r];a.prepareForExecution(n),a.name&&a.name.toLowerCase()==="content-type"&&(i=a.value)}this._body.substituteInputValues(n,i)}},t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.prototype.internalValidateProperties=function(n){if(e.prototype.internalValidateProperties.call(this,n),this.url||n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.propertyMustBeSet("url")),this.headers.length>0)for(var i=0,r=this.headers;i<r.length;i++){var o=r[i];o.name||n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.actionHttpHeadersMustHaveNameAndValue())}},Object.defineProperty(t.prototype,"ignoreInputValidation",{get:function(){return this._ignoreInputValidation},set:function(n){this._ignoreInputValidation=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._url.get()},set:function(n){this._url.set(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"body",{get:function(){return this._body.get()},set:function(n){this._body.set(n)},enumerable:!1,configurable:!0}),t.urlProperty=new Vi(f.Versions.v1_0,"url"),t.bodyProperty=new Vi(f.Versions.v1_0,"body"),t.methodProperty=new f.StringProperty(f.Versions.v1_0,"method"),t.headersProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_0,"headers",Ka),t.ignoreInputValidationProperty=new f.BoolProperty(f.Versions.v1_3,"ignoreInputValidation",!1),t.JsonTypeName="Action.Http",w([(0,f.property)(t.urlProperty)],t.prototype,"_url",void 0),w([(0,f.property)(t.bodyProperty)],t.prototype,"_body",void 0),w([(0,f.property)(t.methodProperty)],t.prototype,"method",void 0),w([(0,f.property)(t.headersProperty)],t.prototype,"headers",void 0),w([(0,f.property)(t.ignoreInputValidationProperty)],t.prototype,"_ignoreInputValidation",void 0),t}(yt);T.HttpAction=mf;var Jt=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.card=new xf,n}return t.prototype.updateCssClasses=function(){if(e.prototype.updateCssClasses.call(this),this.renderedElement){var n=this.parent?this.parent.hostConfig:Li.defaultHostConfig;this.renderedElement.classList.add(n.makeCssClassName("expandable")),this.renderedElement.setAttribute("aria-expanded",(this.state===1).toString())}},t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i);var r=n.card;r?this.card.parse(r,i):i.logParseEvent(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.showCardMustHaveCard())},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),this.card&&i.serializeValue(n,"card",this.card.toJSON(i))},t.prototype.raiseExecuteActionEvent=function(){this.hostConfig.actions.showCard.actionMode===C.ShowCardActionMode.Popup&&e.prototype.raiseExecuteActionEvent.call(this)},t.prototype.releaseDOMResources=function(){e.prototype.releaseDOMResources.call(this),this.card.releaseDOMResources()},t.prototype.getJsonTypeName=function(){return t.JsonTypeName},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.card.internalValidateProperties(n)},t.prototype.setParent=function(n){e.prototype.setParent.call(this,n),this.card.setParent(n)},t.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),this.card.getAllInputs(n)},t.prototype.getAllActions=function(){var n=e.prototype.getAllActions.call(this);return n.push.apply(n,this.card.getAllActions()),n},t.prototype.getResourceInformation=function(){var n=e.prototype.getResourceInformation.call(this);return n.push.apply(n,this.card.getResourceInformation()),n},t.prototype.getActionById=function(n){var i=e.prototype.getActionById.call(this,n);return i||(i=this.card.getActionById(n)),i},t.JsonTypeName="Action.ShowCard",t}(yt);T.ShowCardAction=Jt;var yf=function(e){G(t,e);function t(n){var i=e.call(this)||this;return i._actions=n,i.title=$.Strings.defaults.overflowButtonText(),i.tooltip=$.Strings.defaults.overflowButtonTooltip(),i}return t.prototype.getActions=function(){return this._actions},t.prototype.getAllActions=function(){var n=e.prototype.getAllActions.call(this);return n.push.apply(n,this._actions),n},t.prototype.getJsonTypeName=function(){return Jt.JsonTypeName},t.prototype.execute=function(){var n=this,i,r=!Cf(this,this.renderedElement);if(r&&this.renderedElement){var o=new Ta.PopupMenu;o.hostConfig=this.hostConfig;for(var a=function(c){var u=new Ta.MenuItem(c.toString(),(i=l._actions[c].title)!==null&&i!==void 0?i:"");u.isEnabled=l._actions[c].isEnabled,u.onClick=function(){var d=n._actions[c];o.closePopup(!1),d.isEnabled&&d.execute()},o.items.add(u)},l=this,s=0;s<this._actions.length;s++)a(s);o.onClose=function(){var c;(c=n.renderedElement)===null||c===void 0||c.setAttribute("aria-expanded","false")},this.renderedElement.setAttribute("aria-expanded","true"),o.popup(this.renderedElement)}},t.prototype.setupElementForAccessibility=function(n,i){i===void 0&&(i=!1),e.prototype.setupElementForAccessibility.call(this,n,i),n.setAttribute("aria-label",$.Strings.defaults.overflowButtonTooltip()),n.setAttribute("aria-expanded","false")},t.JsonTypeName="Action.Overflow",t}(yt),Za=function(){function e(t){this._items=[],this._renderedActions=[],this._owner=t}return e.prototype.isActionAllowed=function(t){var n=this._owner.getForbiddenActionTypes();if(n)for(var i=0,r=n;i<r.length;i++){var o=r[i];if(t.constructor===o)return!1}return!0},e.prototype.refreshContainer=function(){if(Ln(this._actionCardContainer),!this._actionCard){this._actionCardContainer.style.marginTop="0px";return}this._actionCardContainer.style.marginTop=this.renderedActionCount>0?this._owner.hostConfig.actions.showCard.inlineTopMargin+"px":"0px";var t=this._owner.getEffectivePadding();this._owner.getImmediateSurroundingPadding(t);var n=this._owner.hostConfig.paddingDefinitionToSpacingDefinition(t);this._actionCard&&(this._actionCard.style.paddingLeft=n.left+"px",this._actionCard.style.paddingRight=n.right+"px",this._actionCard.style.marginLeft="-"+n.left+"px",this._actionCard.style.marginRight="-"+n.right+"px",n.bottom!==0&&!this._owner.isDesignMode()&&(this._actionCard.style.paddingBottom=n.bottom+"px",this._actionCard.style.marginBottom="-"+n.bottom+"px"),q.appendChild(this._actionCardContainer,this._actionCard))},e.prototype.layoutChanged=function(){this._owner.getRootElement().updateLayout()},e.prototype.showActionCard=function(t,n,i){n===void 0&&(n=!1),i===void 0&&(i=!0),t.card.suppressStyle=n;var r=t.card.renderedElement&&!this._owner.isDesignMode()?t.card.renderedElement:t.card.render();this._actionCard=r,this._expandedAction=t,this.refreshContainer(),i&&(this.layoutChanged(),Ba(t,!0))},e.prototype.collapseExpandedAction=function(){for(var t=0,n=this._renderedActions;t<n.length;t++){var i=n[t];i.state=0}var r=this._expandedAction;this._expandedAction=void 0,this._actionCard=void 0,this.refreshContainer(),r&&(this.layoutChanged(),Ba(r,!1))},e.prototype.expandShowCardAction=function(t,n){for(var i=this,r=!1,o=0,a=this._renderedActions;o<a.length;o++){var l=a[o];this._owner.hostConfig.actions.actionsOrientation==C.Orientation.Horizontal&&r&&(l.isFocusable=!1),l!==t?l.state=2:(l.state=1,r=!0,l.renderedElement&&(l.renderedElement.onblur=function(s){for(var c=0,u=i._renderedActions;c<u.length;c++){var d=u[c];d.isFocusable=!0}}))}this.showActionCard(t,!(this._owner.isAtTheVeryLeft()&&this._owner.isAtTheVeryRight()),n)},e.prototype.releaseDOMResources=function(){for(var t=0,n=this._renderedActions;t<n.length;t++){var i=n[t];i.releaseDOMResources()}},e.prototype.actionExecuted=function(t){t instanceof Jt?t===this._expandedAction?this.collapseExpandedAction():this._owner.hostConfig.actions.showCard.actionMode===C.ShowCardActionMode.Inline&&this.expandShowCardAction(t,!0):this.collapseExpandedAction()},e.prototype.parse=function(t,n){if(this.clear(),Array.isArray(t))for(var i=0,r=t;i<r.length;i++){var o=r[i],a=[];this._owner instanceof ji&&(a=this._owner.getForbiddenActionNames());var l=n.parseAction(this._owner,o,a,!this._owner.isDesignMode());l&&this.addAction(l)}},e.prototype.toJSON=function(t,n,i){i.serializeArray(t,n,this._items)},e.prototype.getActionAt=function(t){return this._items[t]},e.prototype.getActionCount=function(){return this._items.length},e.prototype.getActionById=function(t){for(var n=void 0,i=0,r=this._items;i<r.length;i++){var o=r[i];if(n=o.getActionById(t),n)break}return n},e.prototype.validateProperties=function(t){this._owner.hostConfig.actions.maxActions&&this._items.length>this._owner.hostConfig.actions.maxActions&&t.addFailure(this._owner,C.ValidationEvent.TooManyActions,$.Strings.errors.tooManyActions(this._owner.hostConfig.actions.maxActions)),this._items.length>0&&!this._owner.hostConfig.supportsInteractivity&&t.addFailure(this._owner,C.ValidationEvent.InteractivityNotAllowed,$.Strings.errors.interactivityNotAllowed());for(var n=0,i=this._items;n<i.length;n++){var r=i[n];this.isActionAllowed(r)||t.addFailure(this._owner,C.ValidationEvent.ActionTypeNotAllowed,$.Strings.errors.actionTypeNotAllowed(r.getJsonTypeName())),r.internalValidateProperties(t)}},e.prototype.render=function(t){var n=this._owner.hostConfig;if(!!n.supportsInteractivity){var i=document.createElement("div"),r=n.actions.maxActions?Math.min(n.actions.maxActions,this._items.length):this._items.length;if(this._actionCardContainer=document.createElement("div"),this._renderedActions=[],n.actions.preExpandSingleShowCardAction&&r===1&&this._items[0]instanceof Jt&&this.isActionAllowed(this._items[0]))this.showActionCard(this._items[0],!0),this._renderedActions.push(this._items[0]);else{var o=document.createElement("div");if(o.className=n.makeCssClassName("ac-actionSet"),o.style.display="flex",t===C.Orientation.Horizontal)if(o.style.flexDirection="row",this._owner.horizontalAlignment&&n.actions.actionAlignment!==C.ActionAlignment.Stretch)switch(this._owner.horizontalAlignment){case C.HorizontalAlignment.Center:o.style.justifyContent="center";break;case C.HorizontalAlignment.Right:o.style.justifyContent="flex-end";break;default:o.style.justifyContent="flex-start";break}else switch(n.actions.actionAlignment){case C.ActionAlignment.Center:o.style.justifyContent="center";break;case C.ActionAlignment.Right:o.style.justifyContent="flex-end";break;default:o.style.justifyContent="flex-start";break}else if(o.style.flexDirection="column",this._owner.horizontalAlignment&&n.actions.actionAlignment!==C.ActionAlignment.Stretch)switch(this._owner.horizontalAlignment){case C.HorizontalAlignment.Center:o.style.alignItems="center";break;case C.HorizontalAlignment.Right:o.style.alignItems="flex-end";break;default:o.style.alignItems="flex-start";break}else switch(n.actions.actionAlignment){case C.ActionAlignment.Center:o.style.alignItems="center";break;case C.ActionAlignment.Right:o.style.alignItems="flex-end";break;case C.ActionAlignment.Stretch:o.style.alignItems="stretch";break;default:o.style.alignItems="flex-start";break}var a=this._items.filter(this.isActionAllowed.bind(this)),l=[],s=[];if(this._owner.isDesignMode())l=a;else{a.forEach(function(A){return A.mode===C.ActionMode.Secondary?s.push(A):l.push(A)});var c=l.splice(n.actions.maxActions);j.GlobalSettings.allowMoreThanMaxActionsInOverflowMenu&&s.push.apply(s,c);var u=!0;if(s.length>0){this._overflowAction||(this._overflowAction=new yf(s),this._overflowAction.setParent(this._owner),this._overflowAction._actionCollection=this);var d=this._owner instanceof Ie&&!this._owner.parent;u=!Af(this._overflowAction,d)}this._overflowAction&&u&&l.push(this._overflowAction)}for(var p=0;p<l.length;p++){var m=l[p];if(m.render(),m.renderedElement&&(n.actions.actionsOrientation===C.Orientation.Horizontal&&n.actions.actionAlignment===C.ActionAlignment.Stretch?m.renderedElement.style.flex="0 1 100%":m.renderedElement.style.flex="0 1 auto",o.appendChild(m.renderedElement),this._renderedActions.push(m),p<l.length-1&&n.actions.buttonSpacing>0)){var y=document.createElement("div");t===C.Orientation.Horizontal?(y.style.flex="0 0 auto",y.style.width=n.actions.buttonSpacing+"px"):y.style.height=n.actions.buttonSpacing+"px",q.appendChild(o,y)}}var h=document.createElement("div");h.style.overflow="hidden",h.appendChild(o),q.appendChild(i,h)}q.appendChild(i,this._actionCardContainer);for(var g=0,b=this._renderedActions;g<b.length;g++){var v=b[g];if(v.state===1){this.expandShowCardAction(v,!1);break}}return this._renderedActions.length>0?i:void 0}},e.prototype.addAction=function(t){if(!t)throw new Error("The action parameter cannot be null.");if((!t.parent||t.parent===this._owner)&&this._items.indexOf(t)<0)this._items.push(t),t.parent||t.setParent(this._owner),t._actionCollection=this;else throw new Error($.Strings.errors.actionAlreadyParented())},e.prototype.removeAction=function(t){this.expandedAction&&this._expandedAction===t&&this.collapseExpandedAction();var n=this._items.indexOf(t);if(n>=0){this._items.splice(n,1),t.setParent(void 0),t._actionCollection=void 0;for(var i=0;i<this._renderedActions.length;i++)if(this._renderedActions[i]===t){this._renderedActions.splice(i,1);break}return!0}return!1},e.prototype.clear=function(){this._items=[],this._renderedActions=[],this._expandedAction=void 0},e.prototype.getAllInputs=function(t){t===void 0&&(t=!0);var n=[];if(t)for(var i=0,r=this._items;i<r.length;i++){var o=r[i];n.push.apply(n,o.getAllInputs())}return n},e.prototype.getResourceInformation=function(){for(var t=[],n=0,i=this._items;n<i.length;n++){var r=i[n];t.push.apply(t,r.getResourceInformation())}return t},Object.defineProperty(e.prototype,"renderedActionCount",{get:function(){return this._renderedActions.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"expandedAction",{get:function(){return this._expandedAction},enumerable:!1,configurable:!0}),e}(),es=function(e){G(t,e);function t(){var n=e.call(this)||this;return n._actionCollection=new Za(n),n}return t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this._actionCollection.parse(n.actions,i)},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),this._actionCollection.toJSON(n,"actions",i)},t.prototype.internalRender=function(){return this._actionCollection.render(this.orientation!==void 0?this.orientation:this.hostConfig.actions.actionsOrientation)},t.prototype.releaseDOMResources=function(){e.prototype.releaseDOMResources.call(this),this._actionCollection.releaseDOMResources()},t.prototype.isBleedingAtBottom=function(){return this._actionCollection.renderedActionCount===0?e.prototype.isBleedingAtBottom.call(this):this._actionCollection.getActionCount()===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},t.prototype.getJsonTypeName=function(){return"ActionSet"},t.prototype.getActionCount=function(){return this._actionCollection.getActionCount()},t.prototype.getActionAt=function(n){return n>=0&&n<this.getActionCount()?this._actionCollection.getActionAt(n):e.prototype.getActionAt.call(this,n)},t.prototype.getActionById=function(n){var i=this._actionCollection.getActionById(n);return i||e.prototype.getActionById.call(this,n)},t.prototype.getAllActions=function(){for(var n=e.prototype.getAllActions.call(this),i=0;i<this.getActionCount();i++){var r=this.getActionAt(i);r&&n.push(r)}return n},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this._actionCollection.validateProperties(n)},t.prototype.addAction=function(n){this._actionCollection.addAction(n)},t.prototype.getAllInputs=function(n){return n===void 0&&(n=!0),n?this._actionCollection.getAllInputs():[]},t.prototype.getResourceInformation=function(){return this._actionCollection.getResourceInformation()},t.prototype.findDOMNodeOwner=function(n){for(var i=void 0,r=0;r<this.getActionCount();r++){var o=this.getActionAt(r);if(o&&(i=o.findDOMNodeOwner(n),i))return i}return e.prototype.findDOMNodeOwner.call(this,n)},Object.defineProperty(t.prototype,"isInteractive",{get:function(){return!0},enumerable:!1,configurable:!0}),t.orientationProperty=new f.EnumProperty(f.Versions.v1_1,"orientation",C.Orientation),w([(0,f.property)(t.orientationProperty)],t.prototype,"orientation",void 0),t}(ve);T.ActionSet=es;var ts=function(e){G(t,e);function t(n,i,r,o){var a=e.call(this,n,i,[{value:C.ContainerStyle.Default},{value:C.ContainerStyle.Emphasis},{targetVersion:f.Versions.v1_2,value:C.ContainerStyle.Accent},{targetVersion:f.Versions.v1_2,value:C.ContainerStyle.Good},{targetVersion:f.Versions.v1_2,value:C.ContainerStyle.Attention},{targetVersion:f.Versions.v1_2,value:C.ContainerStyle.Warning}],r,o)||this;return a.targetVersion=n,a.name=i,a.defaultValue=r,a.onGetInitialValue=o,a}return t}(f.ValueSetProperty);T.ContainerStyleProperty=ts;var ns=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"style",{get:function(){if(this.allowCustomStyle){var n=this.getValue(t.styleProperty);if(n&&this.hostConfig.containerStyles.getStyleByName(n))return n}},set:function(n){this.setValue(t.styleProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"allowCustomStyle",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasExplicitStyle",{get:function(){return this.getValue(t.styleProperty)!==void 0},enumerable:!1,configurable:!0}),t.prototype.applyBorder=function(){},t.prototype.applyBackground=function(){if(this.renderedElement){var n=this.hostConfig.containerStyles.getStyleByName(this.style,this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));if(n.backgroundColor){var i=q.stringToCssColor(n.backgroundColor);i&&(this.renderedElement.style.backgroundColor=i)}}},t.prototype.applyPadding=function(){if(e.prototype.applyPadding.call(this),!!this.renderedElement){var n=new j.SpacingDefinition;if(this.getEffectivePadding()&&(n=this.hostConfig.paddingDefinitionToSpacingDefinition(this.getEffectivePadding())),this.renderedElement.style.paddingTop=n.top+"px",this.renderedElement.style.paddingRight=n.right+"px",this.renderedElement.style.paddingBottom=n.bottom+"px",this.renderedElement.style.paddingLeft=n.left+"px",this.isBleeding()){var i=new j.PaddingDefinition;this.getImmediateSurroundingPadding(i);var r=this.hostConfig.paddingDefinitionToSpacingDefinition(i);this.renderedElement.style.marginRight="-"+r.right+"px",this.renderedElement.style.marginLeft="-"+r.left+"px",this.isDesignMode()||(this.renderedElement.style.marginTop="-"+r.top+"px",this.renderedElement.style.marginBottom="-"+r.bottom+"px"),this.separatorElement&&this.separatorOrientation===C.Orientation.Horizontal&&(this.separatorElement.style.marginLeft="-"+r.left+"px",this.separatorElement.style.marginRight="-"+r.right+"px")}else this.renderedElement.style.marginRight="0",this.renderedElement.style.marginLeft="0",this.renderedElement.style.marginTop="0",this.renderedElement.style.marginBottom="0",this.separatorElement&&this.separatorOrientation===C.Orientation.Horizontal&&(this.separatorElement.style.marginRight="0",this.separatorElement.style.marginLeft="0")}},t.prototype.getHasBackground=function(n){n===void 0&&(n=!1);for(var i=this.parent;i;){var r=!1;if(n?r=!1:r=i instanceof Mt?i.backgroundImage.isValid():!1,i instanceof t&&this.hasExplicitStyle&&(i.getEffectiveStyle()!==this.getEffectiveStyle()||r))return!0;i=i.parent}return!1},t.prototype.getDefaultPadding=function(){return this.getHasBackground()||this.getHasBorder()?new j.PaddingDefinition(C.Spacing.Padding,C.Spacing.Padding,C.Spacing.Padding,C.Spacing.Padding):e.prototype.getDefaultPadding.call(this)},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n);var i=this.getValue(t.styleProperty);if(i!==void 0){var r=this.hostConfig.containerStyles.getStyleByName(i);r||n.addFailure(this,C.ValidationEvent.InvalidPropertyValue,$.Strings.errors.invalidPropertyValue(i,"style"))}},t.prototype.render=function(){var n=e.prototype.render.call(this);return n&&this.getHasBackground()&&this.applyBackground(),this.applyBorder(),n},t.prototype.getEffectiveStyle=function(){var n=this.style;return n||e.prototype.getEffectiveStyle.call(this)},t.styleProperty=new ts(f.Versions.v1_0,"style"),w([(0,f.property)(t.styleProperty)],t.prototype,"style",null),t}(Hn);T.StylableCardElementContainer=ns;var $i=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._bleed=!1,n}return t.prototype.adjustRenderedElementSize=function(n){e.prototype.adjustRenderedElementSize.call(this,n),this.minPixelHeight&&(n.style.minHeight=this.minPixelHeight+"px")},t.prototype.getHasExpandedAction=function(){return!1},t.prototype.getBleed=function(){return this._bleed},t.prototype.setBleed=function(n){this._bleed=n},Object.defineProperty(t.prototype,"renderedActionCount",{get:function(){return 0},enumerable:!1,configurable:!0}),t.prototype.isBleeding=function(){return(this.getHasBackground()||this.hostConfig.alwaysAllowBleed)&&this.getBleed()},t.bleedProperty=new f.BoolProperty(f.Versions.v1_2,"bleed",!1),t.minHeightProperty=new f.PixelSizeProperty(f.Versions.v1_2,"minHeight"),w([(0,f.property)(t.bleedProperty)],t.prototype,"_bleed",void 0),w([(0,f.property)(t.minHeightProperty)],t.prototype,"minPixelHeight",void 0),t}(ns);T.ContainerBase=$i;var is=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSchemaKey=function(){return"BackgroundImage"},t.prototype.internalParse=function(n,i){if(typeof n=="string")this.resetDefaultValues(),this.url=n;else return e.prototype.internalParse.call(this,n,i)},t.prototype.apply=function(n){if(this.url&&n.renderedElement){switch(n.renderedElement.style.backgroundImage="url('"+n.preProcessPropertyValue(t.urlProperty,this.url)+"')",this.fillMode){case C.FillMode.Repeat:n.renderedElement.style.backgroundRepeat="repeat";break;case C.FillMode.RepeatHorizontally:n.renderedElement.style.backgroundRepeat="repeat-x";break;case C.FillMode.RepeatVertically:n.renderedElement.style.backgroundRepeat="repeat-y";break;case C.FillMode.Cover:default:n.renderedElement.style.backgroundRepeat="no-repeat",n.renderedElement.style.backgroundSize="cover";break}switch(this.horizontalAlignment){case C.HorizontalAlignment.Left:break;case C.HorizontalAlignment.Center:n.renderedElement.style.backgroundPositionX="center";break;case C.HorizontalAlignment.Right:n.renderedElement.style.backgroundPositionX="right";break}switch(this.verticalAlignment){case C.VerticalAlignment.Top:break;case C.VerticalAlignment.Center:n.renderedElement.style.backgroundPositionY="center";break;case C.VerticalAlignment.Bottom:n.renderedElement.style.backgroundPositionY="bottom";break}}},t.prototype.isValid=function(){return!!this.url},t.urlProperty=new f.StringProperty(f.Versions.v1_0,"url"),t.fillModeProperty=new f.EnumProperty(f.Versions.v1_2,"fillMode",C.FillMode,C.FillMode.Cover),t.horizontalAlignmentProperty=new f.EnumProperty(f.Versions.v1_2,"horizontalAlignment",C.HorizontalAlignment,C.HorizontalAlignment.Left),t.verticalAlignmentProperty=new f.EnumProperty(f.Versions.v1_2,"verticalAlignment",C.VerticalAlignment,C.VerticalAlignment.Top),w([(0,f.property)(t.urlProperty)],t.prototype,"url",void 0),w([(0,f.property)(t.fillModeProperty)],t.prototype,"fillMode",void 0),w([(0,f.property)(t.horizontalAlignmentProperty)],t.prototype,"horizontalAlignment",void 0),w([(0,f.property)(t.verticalAlignmentProperty)],t.prototype,"verticalAlignment",void 0),t}(f.SerializableObject);T.BackgroundImage=is;var Mt=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._items=[],n._renderedItems=[],n}return Object.defineProperty(t.prototype,"backgroundImage",{get:function(){return this.getValue(t.backgroundImageProperty)},enumerable:!1,configurable:!0}),t.prototype.insertItemAt=function(n,i,r){if(!n.parent||r)if(n.isStandalone)i<0||i>=this._items.length?this._items.push(n):this._items.splice(i,0,n),n.setParent(this);else throw new Error($.Strings.errors.elementTypeNotStandalone(n.getJsonTypeName()));else throw new Error($.Strings.errors.elementAlreadyParented())},t.prototype.getItemsCollectionPropertyName=function(){return"items"},t.prototype.applyBackground=function(){this.backgroundImage.isValid()&&this.renderedElement&&this.backgroundImage.apply(this),e.prototype.applyBackground.call(this)},t.prototype.applyRTL=function(n){this.rtl!==void 0&&(n.dir=this.rtl?"rtl":"ltr")},t.prototype.internalRender=function(){this._renderedItems=[];var n=this.hostConfig,i=document.createElement("div");switch(this.applyRTL(i),i.classList.add(n.makeCssClassName("ac-container")),i.style.display="flex",i.style.flexDirection="column",j.GlobalSettings.useAdvancedCardBottomTruncation&&(i.style.minHeight="-webkit-min-content"),this.getEffectiveVerticalContentAlignment()){case C.VerticalAlignment.Center:i.style.justifyContent="center";break;case C.VerticalAlignment.Bottom:i.style.justifyContent="flex-end";break;default:i.style.justifyContent="flex-start";break}if(this._items.length>0)for(var r=0,o=this._items;r<o.length;r++){var a=o[r],l=this.isElementAllowed(a)?a.render():void 0;l&&(this._renderedItems.length>0&&a.separatorElement&&(a.separatorElement.style.flex="0 0 auto",q.appendChild(i,a.separatorElement)),q.appendChild(i,l),this._renderedItems.push(a))}else if(this.isDesignMode()){var s=this.createPlaceholderElement();s.style.width="100%",s.style.height="100%",i.appendChild(s)}return i},t.prototype.truncateOverflow=function(n){if(this.renderedElement){for(var i=this.renderedElement.offsetTop+n+1,r=function(s){var c=s.renderedElement;if(c)switch(q.getFitStatus(c,i)){case C.ContainerFitStatus.FullyInContainer:var u=s.resetOverflow();u&&r(s);break;case C.ContainerFitStatus.Overflowing:var d=i-c.offsetTop;s.handleOverflow(d);break;case C.ContainerFitStatus.FullyOutOfContainer:s.handleOverflow(0);break}},o=0,a=this._items;o<a.length;o++){var l=a[o];r(l)}return!0}return!1},t.prototype.undoOverflowTruncation=function(){for(var n=0,i=this._items;n<i.length;n++){var r=i[n];r.resetOverflow()}},t.prototype.getHasBackground=function(n){n===void 0&&(n=!1);var i=n?!1:this.backgroundImage.isValid();return i||e.prototype.getHasBackground.call(this,n)},t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this.clear(),this.setShouldFallback(!1);var r=n[this.getItemsCollectionPropertyName()];if(Array.isArray(r))for(var o=0,a=r;o<a.length;o++){var l=a[o],s=i.parseElement(this,l,this.forbiddenChildElements(),!this.isDesignMode());s&&this.insertItemAt(s,-1,!0)}},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i);var r=this.getItemsCollectionPropertyName();i.serializeArray(n,r,this._items)},Object.defineProperty(t.prototype,"isSelectable",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getEffectivePadding=function(){return j.GlobalSettings.removePaddingFromContainersWithBackgroundImage&&!this.getHasBackground(!0)?new j.PaddingDefinition:e.prototype.getEffectivePadding.call(this)},t.prototype.getEffectiveVerticalContentAlignment=function(){if(this.verticalContentAlignment!==void 0)return this.verticalContentAlignment;var n=this.getParentContainer();return n?n.getEffectiveVerticalContentAlignment():C.VerticalAlignment.Top},t.prototype.getItemCount=function(){return this._items.length},t.prototype.getItemAt=function(n){return this._items[n]},t.prototype.getFirstVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedItems&&this._renderedItems.length>0)for(var n=0,i=this._renderedItems;n<i.length;n++){var r=i[n];if(r.isVisible)return r}},t.prototype.getLastVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedItems&&this._renderedItems.length>0){for(var n=this._renderedItems.length-1;n>=0;n--)if(this._renderedItems[n].isVisible)return this._renderedItems[n]}},t.prototype.getJsonTypeName=function(){return"Container"},t.prototype.isFirstElement=function(n){for(var i=this.isDesignMode(),r=0,o=this._items;r<o.length;r++){var a=o[r];if(a.isVisible||i)return a===n}return!1},t.prototype.isLastElement=function(n){for(var i=this.isDesignMode(),r=this._items.length-1;r>=0;r--)if(this._items[r].isVisible||i)return this._items[r]===n;return!1},t.prototype.isRtl=function(){if(this.rtl!==void 0)return this.rtl;var n=this.getParentContainer();return n?n.isRtl():!1},t.prototype.isBleedingAtTop=function(){var n=this.getFirstVisibleRenderedItem();return this.isBleeding()||(n?n.isBleedingAtTop():!1)},t.prototype.isBleedingAtBottom=function(){var n=this.getLastVisibleRenderedItem();return this.isBleeding()||(n?n.isBleedingAtBottom()&&n.getEffectiveStyle()===this.getEffectiveStyle():!1)},t.prototype.indexOf=function(n){return this._items.indexOf(n)},t.prototype.addItem=function(n){this.insertItemAt(n,-1,!1)},t.prototype.insertItemBefore=function(n,i){this.insertItemAt(n,this._items.indexOf(i),!1)},t.prototype.insertItemAfter=function(n,i){this.insertItemAt(n,this._items.indexOf(i)+1,!1)},t.prototype.removeItem=function(n){var i=this._items.indexOf(n);return i>=0?(this._items.splice(i,1),n.setParent(void 0),this.updateLayout(),!0):!1},t.prototype.clear=function(){this._items=[],this._renderedItems=[]},t.prototype.getResourceInformation=function(){var n=e.prototype.getResourceInformation.call(this);return this.backgroundImage.isValid()&&n.push({url:this.backgroundImage.url,mimeType:"image"}),n},t.prototype.getActionById=function(n){var i=e.prototype.getActionById.call(this,n);if(!i&&(this.selectAction&&(i=this.selectAction.getActionById(n)),!i))for(var r=0,o=this._items;r<o.length;r++){var a=o[r];if(i=a.getActionById(n),i)break}return i},Object.defineProperty(t.prototype,"padding",{get:function(){return this.getPadding()},set:function(n){this.setPadding(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectAction",{get:function(){return this._selectAction},set:function(n){this._selectAction=n},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bleed",{get:function(){return this.getBleed()},set:function(n){this.setBleed(n)},enumerable:!1,configurable:!0}),t.backgroundImageProperty=new f.SerializableObjectProperty(f.Versions.v1_0,"backgroundImage",is),t.verticalContentAlignmentProperty=new f.EnumProperty(f.Versions.v1_1,"verticalContentAlignment",C.VerticalAlignment),t.rtlProperty=new f.BoolProperty(f.Versions.v1_0,"rtl"),w([(0,f.property)(t.backgroundImageProperty)],t.prototype,"backgroundImage",null),w([(0,f.property)(t.verticalContentAlignmentProperty)],t.prototype,"verticalContentAlignment",void 0),w([(0,f.property)(t.rtlProperty)],t.prototype,"rtl",void 0),t}($i);T.Container=Mt;var Vn=function(e){G(t,e);function t(n){n===void 0&&(n="stretch");var i=e.call(this)||this;return i.width="stretch",i._computedWeight=0,i.width=n,i}return t.prototype.adjustRenderedElementSize=function(n){var i=20;this.isDesignMode()?(n.style.minWidth="20px",n.style.minHeight=(this.minPixelHeight?Math.max(this.minPixelHeight,i):i)+"px"):(n.style.minWidth="0",this.minPixelHeight&&(n.style.minHeight=this.minPixelHeight+"px")),this.width==="auto"?n.style.flex="0 1 auto":this.width==="stretch"?n.style.flex="1 1 50px":this.width instanceof j.SizeAndUnit&&(this.width.unit===C.SizeUnit.Pixel?(n.style.flex="0 0 auto",n.style.width=this.width.physicalSize+"px"):n.style.flex="1 1 "+(this._computedWeight>0?this._computedWeight:this.width.physicalSize)+"%")},t.prototype.shouldSerialize=function(n){return!0},Object.defineProperty(t.prototype,"separatorOrientation",{get:function(){return C.Orientation.Vertical},enumerable:!1,configurable:!0}),t.prototype.getJsonTypeName=function(){return"Column"},Object.defineProperty(t.prototype,"hasVisibleSeparator",{get:function(){return this.parent&&this.parent instanceof qi?this.separatorElement!==void 0&&!this.parent.isLeftMostElement(this):!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),t.widthProperty=new f.CustomProperty(f.Versions.v1_0,"width",function(n,i,r,o){var a=i.defaultValue,l=r[i.name],s=!1;if(typeof l=="number"&&!isNaN(l))a=new j.SizeAndUnit(l,C.SizeUnit.Weight);else if(l==="auto"||l==="stretch")a=l;else if(typeof l=="string")try{a=j.SizeAndUnit.parse(l),a.unit===C.SizeUnit.Pixel&&i.targetVersion.compareTo(o.targetVersion)>0&&(s=!0)}catch{s=!0}else s=!0;return s&&(o.logParseEvent(n,C.ValidationEvent.InvalidPropertyValue,$.Strings.errors.invalidColumnWidth(l)),a="auto"),a},function(n,i,r,o,a){o instanceof j.SizeAndUnit?o.unit===C.SizeUnit.Pixel?a.serializeValue(r,"width",o.physicalSize+"px"):a.serializeNumber(r,"width",o.physicalSize):a.serializeValue(r,"width",o)},"stretch"),w([(0,f.property)(t.widthProperty)],t.prototype,"width",void 0),t}(Mt);T.Column=Vn;var qi=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._columns=[],n}return t.prototype.createColumnInstance=function(n,i){return i.parseCardObject(this,n,[],!this.isDesignMode(),function(r){return!r||r==="Column"?new Vn:void 0},function(r,o){i.logParseEvent(void 0,C.ValidationEvent.ElementTypeNotAllowed,$.Strings.errors.elementTypeNotAllowed(r))})},t.prototype.internalRender=function(){if(this._renderedColumns=[],this._columns.length>0){var n=this.hostConfig,i=document.createElement("div");switch(i.className=n.makeCssClassName("ac-columnSet"),i.style.display="flex",j.GlobalSettings.useAdvancedCardBottomTruncation&&(i.style.minHeight="-webkit-min-content"),this.getEffectiveHorizontalAlignment()){case C.HorizontalAlignment.Center:i.style.justifyContent="center";break;case C.HorizontalAlignment.Right:i.style.justifyContent="flex-end";break;default:i.style.justifyContent="flex-start";break}for(var r=0,o=0,a=this._columns;o<a.length;o++){var l=a[o];l.width instanceof j.SizeAndUnit&&l.width.unit===C.SizeUnit.Weight&&(r+=l.width.physicalSize)}for(var s=0,c=this._columns;s<c.length;s++){var l=c[s];if(l.width instanceof j.SizeAndUnit&&l.width.unit===C.SizeUnit.Weight&&r>0){var u=100/r*l.width.physicalSize;l._computedWeight=u}var d=l.render();d&&(this._renderedColumns.length>0&&l.separatorElement&&(l.separatorElement.style.flex="0 0 auto",q.appendChild(i,l.separatorElement)),q.appendChild(i,d),this._renderedColumns.push(l))}return this._renderedColumns.length>0?i:void 0}else return},t.prototype.truncateOverflow=function(n){for(var i=0,r=this._columns;i<r.length;i++){var o=r[i];o.handleOverflow(n)}return!0},t.prototype.undoOverflowTruncation=function(){for(var n=0,i=this._columns;n<i.length;n++){var r=i[n];r.resetOverflow()}},Object.defineProperty(t.prototype,"isSelectable",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this._columns=[],this._renderedColumns=[];var r=n.columns;if(Array.isArray(r))for(var o=0,a=r;o<a.length;o++){var l=a[o],s=this.createColumnInstance(l,i);s&&this._columns.push(s)}},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),i.serializeArray(n,"columns",this._columns)},t.prototype.isFirstElement=function(n){for(var i=0,r=this._columns;i<r.length;i++){var o=r[i];if(o.isVisible)return o===n}return!1},t.prototype.isBleedingAtTop=function(){if(this.isBleeding())return!0;if(this._renderedColumns&&this._renderedColumns.length>0)for(var n=0,i=this._columns;n<i.length;n++){var r=i[n];if(r.isBleedingAtTop())return!0}return!1},t.prototype.isBleedingAtBottom=function(){if(this.isBleeding())return!0;if(this._renderedColumns&&this._renderedColumns.length>0)for(var n=0,i=this._columns;n<i.length;n++){var r=i[n];if(r.isBleedingAtBottom())return!0}return!1},t.prototype.getItemCount=function(){return this._columns.length},t.prototype.getFirstVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedColumns&&this._renderedColumns.length>0)return this._renderedColumns[0]},t.prototype.getLastVisibleRenderedItem=function(){if(this.renderedElement&&this._renderedColumns&&this._renderedColumns.length>0)return this._renderedColumns[this._renderedColumns.length-1]},t.prototype.getColumnAt=function(n){return this._columns[n]},t.prototype.getItemAt=function(n){return this.getColumnAt(n)},t.prototype.getJsonTypeName=function(){return"ColumnSet"},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n);for(var i=0,r=0,o=0,a=this._columns;o<a.length;o++){var l=a[o];typeof l.width=="number"?i++:l.width==="stretch"&&r++}i>0&&r>0&&n.addFailure(this,C.ValidationEvent.Hint,$.Strings.hints.dontUseWeightedAndStrecthedColumnsInSameSet())},t.prototype.addColumn=function(n){if(!n.parent)this._columns.push(n),n.setParent(this);else throw new Error($.Strings.errors.columnAlreadyBelongsToAnotherSet())},t.prototype.removeItem=function(n){if(n instanceof Vn){var i=this._columns.indexOf(n);if(i>=0)return this._columns.splice(i,1),n.setParent(void 0),this.updateLayout(),!0}return!1},t.prototype.indexOf=function(n){return n instanceof Vn?this._columns.indexOf(n):-1},t.prototype.isLeftMostElement=function(n){return this._columns.indexOf(n)===0},t.prototype.isRightMostElement=function(n){return this._columns.indexOf(n)===this._columns.length-1},t.prototype.isTopElement=function(n){return this._columns.indexOf(n)>=0},t.prototype.isBottomElement=function(n){return this._columns.indexOf(n)>=0},t.prototype.getActionById=function(n){for(var i=void 0,r=0,o=this._columns;r<o.length;r++){var a=o[r];if(i=a.getActionById(n),i)break}return i},Object.defineProperty(t.prototype,"bleed",{get:function(){return this.getBleed()},set:function(n){this.setBleed(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"padding",{get:function(){return this.getPadding()},set:function(n){this.setPadding(n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"selectAction",{get:function(){return this._selectAction},set:function(n){this._selectAction=n},enumerable:!1,configurable:!0}),t}($i);T.ColumnSet=qi;function Pa(e){var t=e.getRootElement(),n=t&&t.onImageLoaded?t.onImageLoaded:Ie.onImageLoaded;n&&n(e)}function Fa(e,t,n){var i=e.getRootElement(),r=i&&i.onAnchorClicked?i.onAnchorClicked:Ie.onAnchorClicked;return r!==void 0?r(e,t,n):!1}function bf(e){var t=e.parent?e.parent.getRootElement():void 0,n=t&&t.onExecuteAction?t.onExecuteAction:Ie.onExecuteAction;e.prepareForExecution()&&n&&n(e)}function Ba(e,t){var n=e.parent?e.parent.getRootElement():void 0,i=n&&n.onInlineCardExpanded?n.onInlineCardExpanded:Ie.onInlineCardExpanded;i&&i(e,t)}function vf(e){var t=e.getRootElement(),n=t&&t.onInputValueChanged?t.onInputValueChanged:Ie.onInputValueChanged;n&&n(e)}function zi(e,t){t===void 0&&(t=!0);var n=e.getRootElement();t&&n.updateLayout();var i=n,r=i&&i.onElementVisibilityChanged?i.onElementVisibilityChanged:Ie.onElementVisibilityChanged;r!==void 0&&r(e)}function Cf(e,t){var n=e.parent?e.parent.getRootElement():void 0,i=n&&n.onDisplayOverflowActionMenu?n.onDisplayOverflowActionMenu:Ie.onDisplayOverflowActionMenu;return i!==void 0?i(e.getActions(),t):!1}function Af(e,t){var n=e.parent?e.parent.getRootElement():void 0,i=n&&n.onRenderOverflowActions?n.onRenderOverflowActions:Ie.onRenderOverflowActions;return i!==void 0?i(e.getActions(),t):!1}var ji=function(e){G(t,e);function t(){var n=e.call(this)||this;return n._actionCollection=new Za(n),n}return t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this.parseActions(n,i)},t.prototype.parseActions=function(n,i){this._actionCollection.parse(n.actions,i)},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),this._actionCollection.toJSON(n,"actions",i)},t.prototype.internalRender=function(){var n=e.prototype.internalRender.call(this);if(n){var i=this._actionCollection.render(this.hostConfig.actions.actionsOrientation);return i&&(q.appendChild(n,Ni(this.hostConfig,{spacing:this.hostConfig.getEffectiveSpacing(this.hostConfig.actions.spacing)},C.Orientation.Horizontal)),q.appendChild(n,i)),this.renderIfEmpty||n.children.length>0?n:void 0}else return},t.prototype.getHasExpandedAction=function(){return this.renderedActionCount===0?!1:this.renderedActionCount===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},Object.defineProperty(t.prototype,"renderedActionCount",{get:function(){return this._actionCollection.renderedActionCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"renderIfEmpty",{get:function(){return!1},enumerable:!1,configurable:!0}),t.prototype.releaseDOMResources=function(){e.prototype.releaseDOMResources.call(this),this._actionCollection.releaseDOMResources()},t.prototype.getActionCount=function(){return this._actionCollection.getActionCount()},t.prototype.getActionAt=function(n){return n>=0&&n<this.getActionCount()?this._actionCollection.getActionAt(n):e.prototype.getActionAt.call(this,n)},t.prototype.getActionById=function(n){var i=this._actionCollection.getActionById(n);return i||e.prototype.getActionById.call(this,n)},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this._actionCollection&&this._actionCollection.validateProperties(n)},t.prototype.isLastElement=function(n){return e.prototype.isLastElement.call(this,n)&&this._actionCollection.getActionCount()===0},t.prototype.addAction=function(n){this._actionCollection.addAction(n)},t.prototype.clear=function(){e.prototype.clear.call(this),this._actionCollection.clear()},t.prototype.getAllInputs=function(n){n===void 0&&(n=!0);var i=e.prototype.getAllInputs.call(this,n);return n&&i.push.apply(i,this._actionCollection.getAllInputs(n)),i},t.prototype.getResourceInformation=function(){var n=e.prototype.getResourceInformation.call(this);return n.push.apply(n,this._actionCollection.getResourceInformation()),n},t.prototype.isBleedingAtBottom=function(){return this._actionCollection.renderedActionCount===0?e.prototype.isBleedingAtBottom.call(this):this._actionCollection.getActionCount()===1?this._actionCollection.expandedAction!==void 0&&!this.hostConfig.actions.preExpandSingleShowCardAction:this._actionCollection.expandedAction!==void 0},t.prototype.getForbiddenActionNames=function(){return[]},Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),t}(Mt);T.ContainerWithActions=ji;var rs=function(e){G(t,e);function t(n,i){var r=e.call(this,n,i,void 0)||this;return r.targetVersion=n,r.name=i,r}return t.prototype.parse=function(n,i,r){var o=r.parseAction(n.parent,i[this.name],[],!1);if(o!==void 0){if(o instanceof Nn)return o;r.logParseEvent(n,C.ValidationEvent.ActionTypeNotAllowed,$.Strings.errors.actionTypeNotAllowed(o.getJsonTypeName()))}r.logParseEvent(n,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.propertyMustBeSet("action"))},t.prototype.toJSON=function(n,i,r,o){o.serializeValue(i,this.name,r?r.toJSON(o):void 0,void 0,!0)},t}(f.PropertyDefinition);T.RefreshActionProperty=rs;var os=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return Object.defineProperty(t.prototype,"action",{get:function(){return this.getValue(t.actionProperty)},set:function(n){this.setValue(t.actionProperty,n),n&&n.setParent(this.parent)},enumerable:!1,configurable:!0}),t.prototype.getSchemaKey=function(){return"RefreshDefinition"},t.actionProperty=new rs(f.Versions.v1_4,"action"),t.userIdsProperty=new f.StringArrayProperty(f.Versions.v1_4,"userIds"),w([(0,f.property)(t.actionProperty)],t.prototype,"action",null),w([(0,f.property)(t.userIdsProperty)],t.prototype,"userIds",void 0),t}(f.SerializableObject);T.RefreshDefinition=os;var as=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSchemaKey=function(){return"AuthCardButton"},t.typeProperty=new f.StringProperty(f.Versions.v1_4,"type"),t.titleProperty=new f.StringProperty(f.Versions.v1_4,"title"),t.imageProperty=new f.StringProperty(f.Versions.v1_4,"image"),t.valueProperty=new f.StringProperty(f.Versions.v1_4,"value"),w([(0,f.property)(t.typeProperty)],t.prototype,"type",void 0),w([(0,f.property)(t.titleProperty)],t.prototype,"title",void 0),w([(0,f.property)(t.imageProperty)],t.prototype,"image",void 0),w([(0,f.property)(t.valueProperty)],t.prototype,"value",void 0),t}(f.SerializableObject);T.AuthCardButton=as;var ss=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSchemaKey=function(){return"TokenExchangeResource"},t.idProperty=new f.StringProperty(f.Versions.v1_4,"id"),t.uriProperty=new f.StringProperty(f.Versions.v1_4,"uri"),t.providerIdProperty=new f.StringProperty(f.Versions.v1_4,"providerId"),w([(0,f.property)(t.idProperty)],t.prototype,"id",void 0),w([(0,f.property)(t.uriProperty)],t.prototype,"uri",void 0),w([(0,f.property)(t.providerIdProperty)],t.prototype,"providerId",void 0),t}(f.SerializableObject);T.TokenExchangeResource=ss;var ls=function(e){G(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getSchemaKey=function(){return"Authentication"},t.textProperty=new f.StringProperty(f.Versions.v1_4,"text"),t.connectionNameProperty=new f.StringProperty(f.Versions.v1_4,"connectionName"),t.buttonsProperty=new f.SerializableObjectCollectionProperty(f.Versions.v1_4,"buttons",as),t.tokenExchangeResourceProperty=new f.SerializableObjectProperty(f.Versions.v1_4,"tokenExchangeResource",ss,!0),w([(0,f.property)(t.textProperty)],t.prototype,"text",void 0),w([(0,f.property)(t.connectionNameProperty)],t.prototype,"connectionName",void 0),w([(0,f.property)(t.buttonsProperty)],t.prototype,"buttons",void 0),w([(0,f.property)(t.tokenExchangeResourceProperty)],t.prototype,"tokenExchangeResource",void 0),t}(f.SerializableObject);T.Authentication=ls;var Ie=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.designMode=!1,n}return Object.defineProperty(t.prototype,"refresh",{get:function(){return this.getValue(t.refreshProperty)},set:function(n){this.setValue(t.refreshProperty,n),n&&(n.parent=this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"processMarkdown",{get:function(){throw new Error($.Strings.errors.processMarkdownEventRemoved())},set:function(n){throw new Error($.Strings.errors.processMarkdownEventRemoved())},enumerable:!1,configurable:!0}),t.applyMarkdown=function(n){var i={didProcess:!1};if(t.onProcessMarkdown)t.onProcessMarkdown(n,i);else if(window.markdownit){var r=window.markdownit;i.outputHtml=r().render(n),i.didProcess=!0}else t._haveWarnedAboutNoMarkdownProcessing||(console.warn($.Strings.errors.markdownProcessingNotEnabled),t._haveWarnedAboutNoMarkdownProcessing=!0);return i},t.prototype.isVersionSupported=function(){if(this.bypassVersionCheck)return!0;var n=!this.version||!this.version.isValid||this.maxVersion.major<this.version.major||this.maxVersion.major===this.version.major&&this.maxVersion.minor<this.version.minor;return!n},t.prototype.getDefaultSerializationContext=function(){return new Xt(this.version)},t.prototype.getItemsCollectionPropertyName=function(){return"body"},t.prototype.internalParse=function(n,i){this._fallbackCard=void 0;var r=i.parseElement(void 0,n.fallback,this.forbiddenChildElements(),!this.isDesignMode());r&&(this._fallbackCard=new t,this._fallbackCard.addItem(r)),e.prototype.internalParse.call(this,n,i)},t.prototype.internalToJSON=function(n,i){this.setValue(t.versionProperty,i.targetVersion),e.prototype.internalToJSON.call(this,n,i)},t.prototype.internalRender=function(){var n=e.prototype.internalRender.call(this);return j.GlobalSettings.useAdvancedCardBottomTruncation&&n&&n.style.removeProperty("minHeight"),n},t.prototype.getHasBackground=function(n){return n===void 0&&(n=!1),!0},t.prototype.getDefaultPadding=function(){return new j.PaddingDefinition(C.Spacing.Padding,C.Spacing.Padding,C.Spacing.Padding,C.Spacing.Padding)},t.prototype.shouldSerialize=function(n){return!0},Object.defineProperty(t.prototype,"renderIfEmpty",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"bypassVersionCheck",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"allowCustomStyle",{get:function(){return this.hostConfig.adaptiveCard&&this.hostConfig.adaptiveCard.allowCustomStyle},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasBackground",{get:function(){return!0},enumerable:!1,configurable:!0}),t.prototype.getJsonTypeName=function(){return"AdaptiveCard"},t.prototype.internalValidateProperties=function(n){e.prototype.internalValidateProperties.call(this,n),this.getValue(ve.typeNameProperty)!=="AdaptiveCard"&&n.addFailure(this,C.ValidationEvent.MissingCardType,$.Strings.errors.invalidCardType()),!this.bypassVersionCheck&&!this.version?n.addFailure(this,C.ValidationEvent.PropertyCantBeNull,$.Strings.errors.propertyMustBeSet("version")):this.isVersionSupported()||n.addFailure(this,C.ValidationEvent.UnsupportedCardVersion,$.Strings.errors.unsupportedCardVersion(this.version.toString(),this.maxVersion.toString()))},t.prototype.render=function(n){var i;return this.shouldFallback()&&this._fallbackCard?(this._fallbackCard.hostConfig=this.hostConfig,i=this._fallbackCard.render()):(i=e.prototype.render.call(this),i&&(i.classList.add(this.hostConfig.makeCssClassName("ac-adaptiveCard")),j.GlobalSettings.setTabIndexAtCardRoot&&(i.tabIndex=0),this.speak&&i.setAttribute("aria-label",this.speak))),n&&(q.appendChild(n,i),this.updateLayout()),i},t.prototype.updateLayout=function(n){if(n===void 0&&(n=!0),e.prototype.updateLayout.call(this,n),j.GlobalSettings.useAdvancedCardBottomTruncation&&this.isDisplayed()){var i=this.hostConfig.getEffectiveSpacing(C.Spacing.Default);this.handleOverflow(this.renderedElement.offsetHeight-i)}},t.prototype.shouldFallback=function(){return e.prototype.shouldFallback.call(this)||!this.isVersionSupported()},Object.defineProperty(t.prototype,"hasVisibleSeparator",{get:function(){return!1},enumerable:!1,configurable:!0}),t.schemaUrl="http://adaptivecards.io/schemas/adaptive-card.json",t.$schemaProperty=new f.CustomProperty(f.Versions.v1_0,"$schema",function(n,i,r,o){return t.schemaUrl},function(n,i,r,o,a){a.serializeValue(r,i.name,t.schemaUrl)}),t.versionProperty=new f.CustomProperty(f.Versions.v1_0,"version",function(n,i,r,o){var a=f.Version.parse(r[i.name],o);return a===void 0&&(a=f.Versions.latest,o.logParseEvent(n,C.ValidationEvent.InvalidPropertyValue,$.Strings.errors.invalidCardVersion(a.toString()))),a},function(n,i,r,o,a){o!==void 0&&a.serializeValue(r,i.name,o.toString())},f.Versions.v1_0),t.fallbackTextProperty=new f.StringProperty(f.Versions.v1_0,"fallbackText"),t.speakProperty=new f.StringProperty(f.Versions.v1_0,"speak"),t.refreshProperty=new f.SerializableObjectProperty(f.Versions.v1_4,"refresh",os,!0),t.authenticationProperty=new f.SerializableObjectProperty(f.Versions.v1_4,"authentication",ls,!0),t._haveWarnedAboutNoMarkdownProcessing=!1,w([(0,f.property)(t.versionProperty)],t.prototype,"version",void 0),w([(0,f.property)(t.fallbackTextProperty)],t.prototype,"fallbackText",void 0),w([(0,f.property)(t.speakProperty)],t.prototype,"speak",void 0),w([(0,f.property)(t.refreshProperty)],t.prototype,"refresh",null),w([(0,f.property)(t.authenticationProperty)],t.prototype,"authentication",void 0),t}(ji);T.AdaptiveCard=Ie;var xf=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.suppressStyle=!1,n}return t.prototype.getSchemaKey=function(){return"InlineAdaptiveCard"},t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.remove(Ie.$schemaProperty,Ie.versionProperty)},t.prototype.getDefaultPadding=function(){return new j.PaddingDefinition(this.suppressStyle?C.Spacing.None:C.Spacing.Padding,C.Spacing.Padding,this.suppressStyle?C.Spacing.None:C.Spacing.Padding,C.Spacing.Padding)},Object.defineProperty(t.prototype,"bypassVersionCheck",{get:function(){return!0},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"defaultStyle",{get:function(){return this.suppressStyle?C.ContainerStyle.Default:this.hostConfig.actions.showCard.style?this.hostConfig.actions.showCard.style:C.ContainerStyle.Emphasis},enumerable:!1,configurable:!0}),t.prototype.render=function(n){var i=e.prototype.render.call(this,n);return i&&(i.setAttribute("aria-live","polite"),i.removeAttribute("tabindex")),i},t}(Ie),Xt=function(e){G(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._forbiddenTypes=new Set,n}return t.prototype.internalParseCardObject=function(n,i,r,o,a,l){var s=this,c=void 0;if(i&&typeof i=="object"){var u=new Set;this._forbiddenTypes.forEach(function(y){u.add(y)}),r.forEach(function(y){s._forbiddenTypes.add(y)});var d=q.parseString(i.type);if(d&&this._forbiddenTypes.has(d))l(d,C.TypeErrorType.ForbiddenType);else{var p=!1;if(c=a(d),c?(c.setParent(n),c.parse(i,this),p=j.GlobalSettings.enableFallback&&o&&c.shouldFallback()):(p=j.GlobalSettings.enableFallback&&o,l(d,C.TypeErrorType.UnknownType)),p){var m=i.fallback;!m&&n&&n.setShouldFallback(!0),typeof m=="string"&&m.toLowerCase()==="drop"?c=void 0:typeof m=="object"&&(c=this.internalParseCardObject(n,m,r,!0,a,l))}}this._forbiddenTypes=u}return c},t.prototype.cardObjectParsed=function(n,i){n instanceof yt&&this.onParseAction?this.onParseAction(n,i,this):n instanceof ve&&this.onParseElement&&this.onParseElement(n,i,this)},t.prototype.shouldSerialize=function(n){return n instanceof yt?this.actionRegistry.findByName(n.getJsonTypeName())!==void 0:n instanceof ve?this.elementRegistry.findByName(n.getJsonTypeName())!==void 0:!0},t.prototype.parseCardObject=function(n,i,r,o,a,l){var s=new Set(r),c=this.internalParseCardObject(n,i,s,o,a,l);return c!==void 0&&this.cardObjectParsed(c,i),c},t.prototype.parseElement=function(n,i,r,o){var a=this;return this.parseCardObject(n,i,r,o,function(l){return a.elementRegistry.createInstance(l,a.targetVersion)},function(l,s){s===C.TypeErrorType.UnknownType?a.logParseEvent(void 0,C.ValidationEvent.UnknownElementType,$.Strings.errors.unknownElementType(l)):a.logParseEvent(void 0,C.ValidationEvent.ElementTypeNotAllowed,$.Strings.errors.elementTypeNotAllowed(l))})},t.prototype.parseAction=function(n,i,r,o){var a=this;return this.parseCardObject(n,i,r,o,function(l){return a.actionRegistry.createInstance(l,a.targetVersion)},function(l,s){s===C.TypeErrorType.UnknownType?a.logParseEvent(void 0,C.ValidationEvent.UnknownActionType,$.Strings.errors.unknownActionType(l)):a.logParseEvent(void 0,C.ValidationEvent.ActionTypeNotAllowed,$.Strings.errors.actionTypeNotAllowed(l))})},Object.defineProperty(t.prototype,"elementRegistry",{get:function(){var n;return(n=this._elementRegistry)!==null&&n!==void 0?n:ue.GlobalRegistry.elements},enumerable:!1,configurable:!0}),t.prototype.setElementRegistry=function(n){this._elementRegistry=n},Object.defineProperty(t.prototype,"actionRegistry",{get:function(){var n;return(n=this._actionRegistry)!==null&&n!==void 0?n:ue.GlobalRegistry.actions},enumerable:!1,configurable:!0}),t.prototype.setActionRegistry=function(n){this._actionRegistry=n},t}(f.BaseSerializationContext);T.SerializationContext=Xt;ue.GlobalRegistry.defaultElements.register("Container",Mt);ue.GlobalRegistry.defaultElements.register("TextBlock",Bt);ue.GlobalRegistry.defaultElements.register("RichTextBlock",Hi,f.Versions.v1_2);ue.GlobalRegistry.defaultElements.register("TextRun",Qt,f.Versions.v1_2);ue.GlobalRegistry.defaultElements.register("Image",an);ue.GlobalRegistry.defaultElements.register("ImageSet",_a);ue.GlobalRegistry.defaultElements.register("Media",Wa,f.Versions.v1_1);ue.GlobalRegistry.defaultElements.register("FactSet",Oa);ue.GlobalRegistry.defaultElements.register("ColumnSet",qi);ue.GlobalRegistry.defaultElements.register("ActionSet",es,f.Versions.v1_2);ue.GlobalRegistry.defaultElements.register("Input.Text",$a);ue.GlobalRegistry.defaultElements.register("Input.Date",Ja);ue.GlobalRegistry.defaultElements.register("Input.Time",Xa);ue.GlobalRegistry.defaultElements.register("Input.Number",Qa);ue.GlobalRegistry.defaultElements.register("Input.ChoiceSet",Ua);ue.GlobalRegistry.defaultElements.register("Input.Toggle",qa);ue.GlobalRegistry.defaultActions.register(_i.JsonTypeName,_i);ue.GlobalRegistry.defaultActions.register(Oi.JsonTypeName,Oi);ue.GlobalRegistry.defaultActions.register(Jt.JsonTypeName,Jt);ue.GlobalRegistry.defaultActions.register(Ri.JsonTypeName,Ri,f.Versions.v1_2);ue.GlobalRegistry.defaultActions.register(Nn.JsonTypeName,Nn,f.Versions.v1_4)});function cs(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ui(e={},t={}){Object.keys(t).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:cs(t[n])&&cs(e[n])&&Object.keys(t[n]).length>0&&Ui(e[n],t[n])})}function te(){let e=typeof document<"u"?document:{};return Ui(e,us),e}function U(){let e=typeof window<"u"?window:{};return Ui(e,Sf),e}var us,Sf,le=F(()=>{us={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};Sf={document:us,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}}});function Ef(e){let t=e.__proto__;Object.defineProperty(e,"__proto__",{get(){return t},set(n){t.__proto__=n}})}function dn(e=[]){let t=[];return e.forEach(n=>{Array.isArray(n)?t.push(...dn(n)):t.push(n)}),t}function ds(e,t){return Array.prototype.filter.call(e,t)}function If(e){let t=[];for(let n=0;n<e.length;n+=1)t.indexOf(e[n])===-1&&t.push(e[n]);return t}function wf(e,t){if(typeof e!="string")return[e];let n=[],i=t.querySelectorAll(e);for(let r=0;r<i.length;r+=1)n.push(i[r]);return n}function J(e,t){let n=U(),i=te(),r=[];if(!t&&e instanceof ut)return e;if(!e)return new ut(r);if(typeof e=="string"){let o=e.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){let a="div";o.indexOf("<li")===0&&(a="ul"),o.indexOf("<tr")===0&&(a="tbody"),(o.indexOf("<td")===0||o.indexOf("<th")===0)&&(a="tr"),o.indexOf("<tbody")===0&&(a="table"),o.indexOf("<option")===0&&(a="select");let l=i.createElement(a);l.innerHTML=o;for(let s=0;s<l.childNodes.length;s+=1)r.push(l.childNodes[s])}else r=wf(e.trim(),t||i)}else if(e.nodeType||e===n||e===i)r.push(e);else if(Array.isArray(e)){if(e instanceof ut)return e;r=e}return new ut(If(r))}function fs(...e){let t=dn(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...t)}),this}function ps(...e){let t=dn(e.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...t)}),this}function hs(...e){let t=dn(e.map(n=>n.split(" ")));this.forEach(n=>{t.forEach(i=>{n.classList.toggle(i)})})}function gs(...e){let t=dn(e.map(n=>n.split(" ")));return ds(this,n=>t.filter(i=>n.classList.contains(i)).length>0).length>0}function ms(e,t){if(arguments.length===1&&typeof e=="string")return this[0]?this[0].getAttribute(e):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(e,t);else for(let i in e)this[n][i]=e[i],this[n].setAttribute(i,e[i]);return this}function ys(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e);return this}function bs(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e;return this}function vs(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration=typeof e!="string"?`${e}ms`:e;return this}function Cs(...e){let[t,n,i,r]=e;typeof e[1]=="function"&&([t,i,r]=e,n=void 0),r||(r=!1);function o(c){let u=c.target;if(!u)return;let d=c.target.dom7EventData||[];if(d.indexOf(c)<0&&d.unshift(c),J(u).is(n))i.apply(u,d);else{let p=J(u).parents();for(let m=0;m<p.length;m+=1)J(p[m]).is(n)&&i.apply(p[m],d)}}function a(c){let u=c&&c.target?c.target.dom7EventData||[]:[];u.indexOf(c)<0&&u.unshift(c),i.apply(this,u)}let l=t.split(" "),s;for(let c=0;c<this.length;c+=1){let u=this[c];if(n)for(s=0;s<l.length;s+=1){let d=l[s];u.dom7LiveListeners||(u.dom7LiveListeners={}),u.dom7LiveListeners[d]||(u.dom7LiveListeners[d]=[]),u.dom7LiveListeners[d].push({listener:i,proxyListener:o}),u.addEventListener(d,o,r)}else for(s=0;s<l.length;s+=1){let d=l[s];u.dom7Listeners||(u.dom7Listeners={}),u.dom7Listeners[d]||(u.dom7Listeners[d]=[]),u.dom7Listeners[d].push({listener:i,proxyListener:a}),u.addEventListener(d,a,r)}}return this}function As(...e){let[t,n,i,r]=e;typeof e[1]=="function"&&([t,i,r]=e,n=void 0),r||(r=!1);let o=t.split(" ");for(let a=0;a<o.length;a+=1){let l=o[a];for(let s=0;s<this.length;s+=1){let c=this[s],u;if(!n&&c.dom7Listeners?u=c.dom7Listeners[l]:n&&c.dom7LiveListeners&&(u=c.dom7LiveListeners[l]),u&&u.length)for(let d=u.length-1;d>=0;d-=1){let p=u[d];i&&p.listener===i||i&&p.listener&&p.listener.dom7proxy&&p.listener.dom7proxy===i?(c.removeEventListener(l,p.proxyListener,r),u.splice(d,1)):i||(c.removeEventListener(l,p.proxyListener,r),u.splice(d,1))}}}return this}function xs(...e){let t=U(),n=e[0].split(" "),i=e[1];for(let r=0;r<n.length;r+=1){let o=n[r];for(let a=0;a<this.length;a+=1){let l=this[a];if(t.CustomEvent){let s=new t.CustomEvent(o,{detail:i,bubbles:!0,cancelable:!0});l.dom7EventData=e.filter((c,u)=>u>0),l.dispatchEvent(s),l.dom7EventData=[],delete l.dom7EventData}}}return this}function Ss(e){let t=this;function n(i){i.target===this&&(e.call(this,i),t.off("transitionend",n))}return e&&t.on("transitionend",n),this}function Es(e){if(this.length>0){if(e){let t=this.styles();return this[0].offsetWidth+parseFloat(t.getPropertyValue("margin-right"))+parseFloat(t.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function Is(e){if(this.length>0){if(e){let t=this.styles();return this[0].offsetHeight+parseFloat(t.getPropertyValue("margin-top"))+parseFloat(t.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function ws(){if(this.length>0){let e=U(),t=te(),n=this[0],i=n.getBoundingClientRect(),r=t.body,o=n.clientTop||r.clientTop||0,a=n.clientLeft||r.clientLeft||0,l=n===e?e.scrollY:n.scrollTop,s=n===e?e.scrollX:n.scrollLeft;return{top:i.top+l-o,left:i.left+s-a}}return null}function Ts(){let e=U();return this[0]?e.getComputedStyle(this[0],null):{}}function ks(e,t){let n=U(),i;if(arguments.length===1)if(typeof e=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(e)}else{for(i=0;i<this.length;i+=1)for(let r in e)this[i].style[r]=e[r];return this}if(arguments.length===2&&typeof e=="string"){for(i=0;i<this.length;i+=1)this[i].style[e]=t;return this}return this}function Ps(e){return e?(this.forEach((t,n)=>{e.apply(t,[t,n])}),this):this}function Fs(e){let t=ds(this,e);return J(t)}function Bs(e){if(typeof e>"u")return this[0]?this[0].innerHTML:null;for(let t=0;t<this.length;t+=1)this[t].innerHTML=e;return this}function Ds(e){if(typeof e>"u")return this[0]?this[0].textContent.trim():null;for(let t=0;t<this.length;t+=1)this[t].textContent=e;return this}function Ms(e){let t=U(),n=te(),i=this[0],r,o;if(!i||typeof e>"u")return!1;if(typeof e=="string"){if(i.matches)return i.matches(e);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e);if(i.msMatchesSelector)return i.msMatchesSelector(e);for(r=J(e),o=0;o<r.length;o+=1)if(r[o]===i)return!0;return!1}if(e===n)return i===n;if(e===t)return i===t;if(e.nodeType||e instanceof ut){for(r=e.nodeType?[e]:e,o=0;o<r.length;o+=1)if(r[o]===i)return!0;return!1}return!1}function zs(){let e=this[0],t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Os(e){if(typeof e>"u")return this;let t=this.length;if(e>t-1)return J([]);if(e<0){let n=t+e;return n<0?J([]):J([this[n]])}return J([this[e]])}function _s(...e){let t,n=te();for(let i=0;i<e.length;i+=1){t=e[i];for(let r=0;r<this.length;r+=1)if(typeof t=="string"){let o=n.createElement("div");for(o.innerHTML=t;o.firstChild;)this[r].appendChild(o.firstChild)}else if(t instanceof ut)for(let o=0;o<t.length;o+=1)this[r].appendChild(t[o]);else this[r].appendChild(t)}return this}function Rs(e){let t=te(),n,i;for(n=0;n<this.length;n+=1)if(typeof e=="string"){let r=t.createElement("div");for(r.innerHTML=e,i=r.childNodes.length-1;i>=0;i-=1)this[n].insertBefore(r.childNodes[i],this[n].childNodes[0])}else if(e instanceof ut)for(i=0;i<e.length;i+=1)this[n].insertBefore(e[i],this[n].childNodes[0]);else this[n].insertBefore(e,this[n].childNodes[0]);return this}function Vs(e){return this.length>0?e?this[0].nextElementSibling&&J(this[0].nextElementSibling).is(e)?J([this[0].nextElementSibling]):J([]):this[0].nextElementSibling?J([this[0].nextElementSibling]):J([]):J([])}function Ls(e){let t=[],n=this[0];if(!n)return J([]);for(;n.nextElementSibling;){let i=n.nextElementSibling;e?J(i).is(e)&&t.push(i):t.push(i),n=i}return J(t)}function Ns(e){if(this.length>0){let t=this[0];return e?t.previousElementSibling&&J(t.previousElementSibling).is(e)?J([t.previousElementSibling]):J([]):t.previousElementSibling?J([t.previousElementSibling]):J([])}return J([])}function Hs(e){let t=[],n=this[0];if(!n)return J([]);for(;n.previousElementSibling;){let i=n.previousElementSibling;e?J(i).is(e)&&t.push(i):t.push(i),n=i}return J(t)}function Gs(e){let t=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(e?J(this[n].parentNode).is(e)&&t.push(this[n].parentNode):t.push(this[n].parentNode));return J(t)}function Ys(e){let t=[];for(let n=0;n<this.length;n+=1){let i=this[n].parentNode;for(;i;)e?J(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return J(t)}function Ws(e){let t=this;return typeof e>"u"?J([]):(t.is(e)||(t=t.parents(e).eq(0)),t)}function $s(e){let t=[];for(let n=0;n<this.length;n+=1){let i=this[n].querySelectorAll(e);for(let r=0;r<i.length;r+=1)t.push(i[r])}return J(t)}function qs(e){let t=[];for(let n=0;n<this.length;n+=1){let i=this[n].children;for(let r=0;r<i.length;r+=1)(!e||J(i[r]).is(e))&&t.push(i[r])}return J(t)}function js(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this}function de(e){function t(...n){if(typeof n[0]>"u"){for(let i=0;i<this.length;i+=1)Tf.indexOf(e)<0&&(e in this[i]?this[i][e]():J(this[i]).trigger(e));return this}return this.on(e,...n)}return t}var ut,Tf,Pm,Fm,Bm,Dm,Mm,zm,Om,_m,Rm,Vm,Lm,Nm,Hm,Gm,Ym,Wm,$m,qm,jm,Um,Qm,Jm,Us=F(()=>{le();ut=class extends Array{constructor(t){typeof t=="number"?super(t):(super(...t||[]),Ef(this))}};J.fn=ut.prototype;Tf="resize scroll".split(" ");Pm=de("click"),Fm=de("blur"),Bm=de("focus"),Dm=de("focusin"),Mm=de("focusout"),zm=de("keyup"),Om=de("keydown"),_m=de("keypress"),Rm=de("submit"),Vm=de("change"),Lm=de("mousedown"),Nm=de("mousemove"),Hm=de("mouseup"),Gm=de("mouseenter"),Ym=de("mouseleave"),Wm=de("mouseout"),$m=de("mouseover"),qm=de("touchstart"),jm=de("touchend"),Um=de("touchmove"),Qm=de("resize"),Jm=de("scroll")});var Qs,M,oe=F(()=>{Us();Qs={addClass:fs,removeClass:ps,hasClass:gs,toggleClass:hs,attr:ms,removeAttr:ys,transform:bs,transition:vs,on:Cs,off:As,trigger:xs,transitionEnd:Ss,outerWidth:Es,outerHeight:Is,styles:Ts,offset:ws,css:ks,each:Ps,html:Bs,text:Ds,is:Ms,index:zs,eq:Os,append:_s,prepend:Rs,next:Vs,nextAll:Ls,prev:Ns,prevAll:Hs,parent:Gs,parents:Ys,closest:Ws,find:$s,children:qs,filter:Fs,remove:js};Object.keys(Qs).forEach(e=>{Object.defineProperty(J.fn,e,{value:Qs[e],writable:!0})});M=J});function Js(e){let t=e;Object.keys(t).forEach(n=>{try{t[n]=null}catch{}try{delete t[n]}catch{}})}function Pe(e,t=0){return setTimeout(e,t)}function he(){return Date.now()}function kf(e){let t=U(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||(n=e.style),n}function fn(e,t="x"){let n=U(),i,r,o,a=kf(e,null);return n.WebKitCSSMatrix?(r=a.transform||a.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new n.WebKitCSSMatrix(r==="none"?"":r)):(o=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),i=o.toString().split(",")),t==="x"&&(n.WebKitCSSMatrix?r=o.m41:i.length===16?r=parseFloat(i[12]):r=parseFloat(i[4])),t==="y"&&(n.WebKitCSSMatrix?r=o.m42:i.length===16?r=parseFloat(i[13]):r=parseFloat(i[5])),r||0}function Kt(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Pf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ce(...e){let t=Object(e[0]),n=["__proto__","constructor","prototype"];for(let i=1;i<e.length;i+=1){let r=e[i];if(r!=null&&!Pf(r)){let o=Object.keys(Object(r)).filter(a=>n.indexOf(a)<0);for(let a=0,l=o.length;a<l;a+=1){let s=o[a],c=Object.getOwnPropertyDescriptor(r,s);c!==void 0&&c.enumerable&&(Kt(t[s])&&Kt(r[s])?r[s].__swiper__?t[s]=r[s]:Ce(t[s],r[s]):!Kt(t[s])&&Kt(r[s])?(t[s]={},r[s].__swiper__?t[s]=r[s]:Ce(t[s],r[s])):t[s]=r[s])}}}return t}function zt(e,t,n){e.style.setProperty(t,n)}function Yn({swiper:e,targetPosition:t,side:n}){let i=U(),r=-e.translate,o=null,a,l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);let s=t>r?"next":"prev",c=(d,p)=>s==="next"&&d>=p||s==="prev"&&d<=p,u=()=>{a=new Date().getTime(),o===null&&(o=a);let d=Math.max(Math.min((a-o)/l,1),0),p=.5-Math.cos(d*Math.PI)/2,m=r+p*(t-r);if(c(m,t)&&(m=t),e.wrapperEl.scrollTo({[n]:m}),c(m,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[n]:m})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(u)};u()}var pe=F(()=>{le()});function Ff(){let e=U(),t=te();return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function(){let i=!1;try{let r=Object.defineProperty({},"passive",{get(){i=!0}});e.addEventListener("testPassiveListener",null,r)}catch{}return i}(),gestures:function(){return"ongesturestart"in e}()}}function Wn(){return Qi||(Qi=Ff()),Qi}var Qi,Ji=F(()=>{le()});function Bf({userAgent:e}={}){let t=Wn(),n=U(),i=n.navigator.platform,r=e||n.navigator.userAgent,o={ios:!1,android:!1},a=n.screen.width,l=n.screen.height,s=r.match(/(Android);?[\s\/]+([\d.]+)?/),c=r.match(/(iPad).*OS\s([\d_]+)/),u=r.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=i==="Win32",m=i==="MacIntel",y=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&m&&t.touch&&y.indexOf(`${a}x${l}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),m=!1),s&&!p&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function Xs(e={}){return Xi||(Xi=Bf(e)),Xi}var Xi,Ks=F(()=>{le();Ji()});function Df(){let e=U();function t(){let n=e.navigator.userAgent.toLowerCase();return n.indexOf("safari")>=0&&n.indexOf("chrome")<0&&n.indexOf("android")<0}return{isSafari:t(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}function Zs(){return Ki||(Ki=Df()),Ki}var Ki,el=F(()=>{le()});function Zi({swiper:e,on:t,emit:n}){let i=U(),r=null,o=null,a=()=>{!e||e.destroyed||!e.initialized||(n("beforeResize"),n("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(u=>{o=i.requestAnimationFrame(()=>{let{width:d,height:p}=e,m=d,y=p;u.forEach(({contentBoxSize:h,contentRect:g,target:b})=>{b&&b!==e.el||(m=g?g.width:(h[0]||h).inlineSize,y=g?g.height:(h[0]||h).blockSize)}),(m!==d||y!==p)&&a()})}),r.observe(e.el))},s=()=>{o&&i.cancelAnimationFrame(o),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||n("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){l();return}i.addEventListener("resize",a),i.addEventListener("orientationchange",c)}),t("destroy",()=>{s(),i.removeEventListener("resize",a),i.removeEventListener("orientationchange",c)})}var tl=F(()=>{le()});function er({swiper:e,extendParams:t,on:n,emit:i}){let r=[],o=U(),a=(c,u={})=>{let d=o.MutationObserver||o.WebkitMutationObserver,p=new d(m=>{if(m.length===1){i("observerUpdate",m[0]);return}let y=function(){i("observerUpdate",m[0])};o.requestAnimationFrame?o.requestAnimationFrame(y):o.setTimeout(y,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:typeof u.childList>"u"?!0:u.childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(p)},l=()=>{if(!!e.params.observer){if(e.params.observeParents){let c=e.$el.parents();for(let u=0;u<c.length;u+=1)a(c[u])}a(e.$el[0],{childList:e.params.observeSlideChildren}),a(e.$wrapperEl[0],{attributes:!1})}},s=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",s)}var nl=F(()=>{le()});var il,rl=F(()=>{il={on(e,t,n){let i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;let r=n?"unshift":"push";return e.split(" ").forEach(o=>{i.eventsListeners[o]||(i.eventsListeners[o]=[]),i.eventsListeners[o][r](t)}),i},once(e,t,n){let i=this;if(!i.eventsListeners||i.destroyed||typeof t!="function")return i;function r(...o){i.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(i,o)}return r.__emitterProxy=t,i.on(e,r,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!="function")return n;let i=t?"unshift":"push";return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[i](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(" ").forEach(i=>{typeof t>"u"?n.eventsListeners[i]=[]:n.eventsListeners[i]&&n.eventsListeners[i].forEach((r,o)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[i].splice(o,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,i,r;return typeof e[0]=="string"||Array.isArray(e[0])?(n=e[0],i=e.slice(1,e.length),r=t):(n=e[0].events,i=e[0].data,r=e[0].context||t),i.unshift(r),(Array.isArray(n)?n:n.split(" ")).forEach(a=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(r,[a,...i])}),t.eventsListeners&&t.eventsListeners[a]&&t.eventsListeners[a].forEach(l=>{l.apply(r,i)})}),t}}});function tr(){let e=this,t,n,i=e.$el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=i[0].clientWidth,typeof e.params.height<"u"&&e.params.height!==null?n=e.params.height:n=i[0].clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),n=n-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}var ol=F(()=>{});function nr(){let e=this;function t(D){return e.isHorizontal()?D:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[D]}function n(D,S){return parseFloat(D.getPropertyValue(t(S))||0)}let i=e.params,{$wrapperEl:r,size:o,rtlTranslate:a,wrongRTL:l}=e,s=e.virtual&&i.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,u=r.children(`.${e.params.slideClass}`),d=s?e.virtual.slides.length:u.length,p=[],m=[],y=[],h=i.slidesOffsetBefore;typeof h=="function"&&(h=i.slidesOffsetBefore.call(e));let g=i.slidesOffsetAfter;typeof g=="function"&&(g=i.slidesOffsetAfter.call(e));let b=e.snapGrid.length,v=e.slidesGrid.length,A=i.spaceBetween,B=-h,P=0,O=0;if(typeof o>"u")return;typeof A=="string"&&A.indexOf("%")>=0&&(A=parseFloat(A.replace("%",""))/100*o),e.virtualSize=-A,a?u.css({marginLeft:"",marginBottom:"",marginTop:""}):u.css({marginRight:"",marginBottom:"",marginTop:""}),i.centeredSlides&&i.cssMode&&(zt(e.wrapperEl,"--swiper-centered-offset-before",""),zt(e.wrapperEl,"--swiper-centered-offset-after",""));let k=i.grid&&i.grid.rows>1&&e.grid;k&&e.grid.initSlides(d);let R,N=i.slidesPerView==="auto"&&i.breakpoints&&Object.keys(i.breakpoints).filter(D=>typeof i.breakpoints[D].slidesPerView<"u").length>0;for(let D=0;D<d;D+=1){R=0;let S=u.eq(D);if(k&&e.grid.updateSlide(D,S,d,t),S.css("display")!=="none"){if(i.slidesPerView==="auto"){N&&(u[D].style[t("width")]="");let x=getComputedStyle(S[0]),I=S[0].style.transform,H=S[0].style.webkitTransform;if(I&&(S[0].style.transform="none"),H&&(S[0].style.webkitTransform="none"),i.roundLengths)R=e.isHorizontal()?S.outerWidth(!0):S.outerHeight(!0);else{let W=n(x,"width"),E=n(x,"padding-left"),L=n(x,"padding-right"),_=n(x,"margin-left"),K=n(x,"margin-right"),ie=x.getPropertyValue("box-sizing");if(ie&&ie==="border-box")R=W+_+K;else{let{clientWidth:ke,offsetWidth:Pt}=S[0];R=W+E+L+_+K+(Pt-ke)}}I&&(S[0].style.transform=I),H&&(S[0].style.webkitTransform=H),i.roundLengths&&(R=Math.floor(R))}else R=(o-(i.slidesPerView-1)*A)/i.slidesPerView,i.roundLengths&&(R=Math.floor(R)),u[D]&&(u[D].style[t("width")]=`${R}px`);u[D]&&(u[D].swiperSlideSize=R),y.push(R),i.centeredSlides?(B=B+R/2+P/2+A,P===0&&D!==0&&(B=B-o/2-A),D===0&&(B=B-o/2-A),Math.abs(B)<1/1e3&&(B=0),i.roundLengths&&(B=Math.floor(B)),O%i.slidesPerGroup===0&&p.push(B),m.push(B)):(i.roundLengths&&(B=Math.floor(B)),(O-Math.min(e.params.slidesPerGroupSkip,O))%e.params.slidesPerGroup===0&&p.push(B),m.push(B),B=B+R+A),e.virtualSize+=R+A,P=R,O+=1}}if(e.virtualSize=Math.max(e.virtualSize,o)+g,a&&l&&(i.effect==="slide"||i.effect==="coverflow")&&r.css({width:`${e.virtualSize+i.spaceBetween}px`}),i.setWrapperSize&&r.css({[t("width")]:`${e.virtualSize+i.spaceBetween}px`}),k&&e.grid.updateWrapperSize(R,p,t),!i.centeredSlides){let D=[];for(let S=0;S<p.length;S+=1){let x=p[S];i.roundLengths&&(x=Math.floor(x)),p[S]<=e.virtualSize-o&&D.push(x)}p=D,Math.floor(e.virtualSize-o)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-o)}if(p.length===0&&(p=[0]),i.spaceBetween!==0){let D=e.isHorizontal()&&a?"marginLeft":t("marginRight");u.filter((S,x)=>i.cssMode?x!==u.length-1:!0).css({[D]:`${A}px`})}if(i.centeredSlides&&i.centeredSlidesBounds){let D=0;y.forEach(x=>{D+=x+(i.spaceBetween?i.spaceBetween:0)}),D-=i.spaceBetween;let S=D-o;p=p.map(x=>x<0?-h:x>S?S+g:x)}if(i.centerInsufficientSlides){let D=0;if(y.forEach(S=>{D+=S+(i.spaceBetween?i.spaceBetween:0)}),D-=i.spaceBetween,D<o){let S=(o-D)/2;p.forEach((x,I)=>{p[I]=x-S}),m.forEach((x,I)=>{m[I]=x+S})}}if(Object.assign(e,{slides:u,snapGrid:p,slidesGrid:m,slidesSizesGrid:y}),i.centeredSlides&&i.cssMode&&!i.centeredSlidesBounds){zt(e.wrapperEl,"--swiper-centered-offset-before",`${-p[0]}px`),zt(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-y[y.length-1]/2}px`);let D=-e.snapGrid[0],S=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(x=>x+D),e.slidesGrid=e.slidesGrid.map(x=>x+S)}if(d!==c&&e.emit("slidesLengthChange"),p.length!==b&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==v&&e.emit("slidesGridLengthChange"),i.watchSlidesProgress&&e.updateSlidesOffset(),!s&&!i.cssMode&&(i.effect==="slide"||i.effect==="fade")){let D=`${i.containerModifierClass}backface-hidden`,S=e.$el.hasClass(D);d<=i.maxBackfaceHiddenSlides?S||e.$el.addClass(D):S&&e.$el.removeClass(D)}}var al=F(()=>{pe()});function ir(e){let t=this,n=[],i=t.virtual&&t.params.virtual.enabled,r=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let a=l=>i?t.slides.filter(s=>parseInt(s.getAttribute("data-swiper-slide-index"),10)===l)[0]:t.slides.eq(l)[0];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||M([])).each(l=>{n.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){let l=t.activeIndex+o;if(l>t.slides.length&&!i)break;n.push(a(l))}else n.push(a(t.activeIndex));for(o=0;o<n.length;o+=1)if(typeof n[o]<"u"){let l=n[o].offsetHeight;r=l>r?l:r}(r||r===0)&&t.$wrapperEl.css("height",`${r}px`)}var sl=F(()=>{oe()});function rr(){let e=this,t=e.slides;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop}var ll=F(()=>{});function or(e=this&&this.translate||0){let t=this,n=t.params,{slides:i,rtlTranslate:r,snapGrid:o}=t;if(i.length===0)return;typeof i[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let a=-e;r&&(a=e),i.removeClass(n.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[];for(let l=0;l<i.length;l+=1){let s=i[l],c=s.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(c-=i[0].swiperSlideOffset);let u=(a+(n.centeredSlides?t.minTranslate():0)-c)/(s.swiperSlideSize+n.spaceBetween),d=(a-o[0]+(n.centeredSlides?t.minTranslate():0)-c)/(s.swiperSlideSize+n.spaceBetween),p=-(a-c),m=p+t.slidesSizesGrid[l];(p>=0&&p<t.size-1||m>1&&m<=t.size||p<=0&&m>=t.size)&&(t.visibleSlides.push(s),t.visibleSlidesIndexes.push(l),i.eq(l).addClass(n.slideVisibleClass)),s.progress=r?-u:u,s.originalProgress=r?-d:d}t.visibleSlides=M(t.visibleSlides)}var cl=F(()=>{oe()});function ar(e){let t=this;if(typeof e>"u"){let c=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*c||0}let n=t.params,i=t.maxTranslate()-t.minTranslate(),{progress:r,isBeginning:o,isEnd:a}=t,l=o,s=a;i===0?(r=0,o=!0,a=!0):(r=(e-t.minTranslate())/i,o=r<=0,a=r>=1),Object.assign(t,{progress:r,isBeginning:o,isEnd:a}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),a&&!s&&t.emit("reachEnd toEdge"),(l&&!o||s&&!a)&&t.emit("fromEdge"),t.emit("progress",r)}var ul=F(()=>{});function sr(){let e=this,{slides:t,params:n,$wrapperEl:i,activeIndex:r,realIndex:o}=e,a=e.virtual&&n.virtual.enabled;t.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`);let l;a?l=e.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${r}"]`):l=t.eq(r),l.addClass(n.slideActiveClass),n.loop&&(l.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${o}"]`).addClass(n.slideDuplicateActiveClass));let s=l.nextAll(`.${n.slideClass}`).eq(0).addClass(n.slideNextClass);n.loop&&s.length===0&&(s=t.eq(0),s.addClass(n.slideNextClass));let c=l.prevAll(`.${n.slideClass}`).eq(0).addClass(n.slidePrevClass);n.loop&&c.length===0&&(c=t.eq(-1),c.addClass(n.slidePrevClass)),n.loop&&(s.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${s.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass),c.hasClass(n.slideDuplicateClass)?i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass):i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)),e.emitSlidesClasses()}var dl=F(()=>{});function lr(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:r,params:o,activeIndex:a,realIndex:l,snapIndex:s}=t,c=e,u;if(typeof c>"u"){for(let p=0;p<i.length;p+=1)typeof i[p+1]<"u"?n>=i[p]&&n<i[p+1]-(i[p+1]-i[p])/2?c=p:n>=i[p]&&n<i[p+1]&&(c=p+1):n>=i[p]&&(c=p);o.normalizeSlideIndex&&(c<0||typeof c>"u")&&(c=0)}if(r.indexOf(n)>=0)u=r.indexOf(n);else{let p=Math.min(o.slidesPerGroupSkip,c);u=p+Math.floor((c-p)/o.slidesPerGroup)}if(u>=r.length&&(u=r.length-1),c===a){u!==s&&(t.snapIndex=u,t.emit("snapIndexChange"));return}let d=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10);Object.assign(t,{snapIndex:u,realIndex:d,previousIndex:a,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==d&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")}var fl=F(()=>{});function cr(e){let t=this,n=t.params,i=M(e).closest(`.${n.slideClass}`)[0],r=!1,o;if(i){for(let a=0;a<t.slides.length;a+=1)if(t.slides[a]===i){r=!0,o=a;break}}if(i&&r)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(M(i).attr("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}n.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var pl=F(()=>{oe()});var hl,gl=F(()=>{ol();al();sl();ll();cl();ul();dl();fl();pl();hl={updateSize:tr,updateSlides:nr,updateAutoHeight:ir,updateSlidesOffset:rr,updateSlidesProgress:or,updateProgress:ar,updateSlidesClasses:sr,updateActiveIndex:lr,updateClickedSlide:cr}});function ur(e=this.isHorizontal()?"x":"y"){let t=this,{params:n,rtlTranslate:i,translate:r,$wrapperEl:o}=t;if(n.virtualTranslate)return i?-r:r;if(n.cssMode)return r;let a=fn(o[0],e);return i&&(a=-a),a||0}var ml=F(()=>{pe()});function dr(e,t){let n=this,{rtlTranslate:i,params:r,$wrapperEl:o,wrapperEl:a,progress:l}=n,s=0,c=0,u=0;n.isHorizontal()?s=i?-e:e:c=e,r.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),r.cssMode?a[n.isHorizontal()?"scrollLeft":"scrollTop"]=n.isHorizontal()?-s:-c:r.virtualTranslate||o.transform(`translate3d(${s}px, ${c}px, ${u}px)`),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c;let d,p=n.maxTranslate()-n.minTranslate();p===0?d=0:d=(e-n.minTranslate())/p,d!==l&&n.updateProgress(e),n.emit("setTranslate",n.translate,t)}var yl=F(()=>{});function fr(){return-this.snapGrid[0]}var bl=F(()=>{});function pr(){return-this.snapGrid[this.snapGrid.length-1]}var vl=F(()=>{});function hr(e=0,t=this.params.speed,n=!0,i=!0,r){let o=this,{params:a,wrapperEl:l}=o;if(o.animating&&a.preventInteractionOnTransition)return!1;let s=o.minTranslate(),c=o.maxTranslate(),u;if(i&&e>s?u=s:i&&e<c?u=c:u=e,o.updateProgress(u),a.cssMode){let d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return Yn({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,r),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),n&&(o.emit("beforeTransitionStart",t,r),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,n&&o.emit("transitionEnd"))}),o.$wrapperEl[0].addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onTranslateToWrapperTransitionEnd))),!0}var Cl=F(()=>{pe()});var Al,xl=F(()=>{ml();yl();bl();vl();Cl();Al={getTranslate:ur,setTranslate:dr,minTranslate:fr,maxTranslate:pr,translateTo:hr}});function gr(e,t){let n=this;n.params.cssMode||n.$wrapperEl.transition(e),n.emit("setTransition",e,t)}var Sl=F(()=>{});function pn({swiper:e,runCallbacks:t,direction:n,step:i}){let{activeIndex:r,previousIndex:o}=e,a=n;if(a||(r>o?a="next":r<o?a="prev":a="reset"),e.emit(`transition${i}`),t&&r!==o){if(a==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),a==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}var mr=F(()=>{});function yr(e=!0,t){let n=this,{params:i}=n;i.cssMode||(i.autoHeight&&n.updateAutoHeight(),pn({swiper:n,runCallbacks:e,direction:t,step:"Start"}))}var El=F(()=>{mr()});function br(e=!0,t){let n=this,{params:i}=n;n.animating=!1,!i.cssMode&&(n.setTransition(0),pn({swiper:n,runCallbacks:e,direction:t,step:"End"}))}var Il=F(()=>{mr()});var wl,Tl=F(()=>{Sl();El();Il();wl={setTransition:gr,transitionStart:yr,transitionEnd:br}});function vr(e=0,t=this.params.speed,n=!0,i,r){if(typeof e!="number"&&typeof e!="string")throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);if(typeof e=="string"){let A=parseInt(e,10);if(!isFinite(A))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=A}let o=this,a=e;a<0&&(a=0);let{params:l,snapGrid:s,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:m,enabled:y}=o;if(o.animating&&l.preventInteractionOnTransition||!y&&!i&&!r)return!1;let h=Math.min(o.params.slidesPerGroupSkip,a),g=h+Math.floor((a-h)/o.params.slidesPerGroup);g>=s.length&&(g=s.length-1);let b=-s[g];if(l.normalizeSlideIndex)for(let A=0;A<c.length;A+=1){let B=-Math.floor(b*100),P=Math.floor(c[A]*100),O=Math.floor(c[A+1]*100);typeof c[A+1]<"u"?B>=P&&B<O-(O-P)/2?a=A:B>=P&&B<O&&(a=A+1):B>=P&&(a=A)}if(o.initialized&&a!==d&&(!o.allowSlideNext&&b<o.translate&&b<o.minTranslate()||!o.allowSlidePrev&&b>o.translate&&b>o.maxTranslate()&&(d||0)!==a))return!1;a!==(u||0)&&n&&o.emit("beforeSlideChangeStart"),o.updateProgress(b);let v;if(a>d?v="next":a<d?v="prev":v="reset",p&&-b===o.translate||!p&&b===o.translate)return o.updateActiveIndex(a),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(b),v!=="reset"&&(o.transitionStart(n,v),o.transitionEnd(n,v)),!1;if(l.cssMode){let A=o.isHorizontal(),B=p?b:-b;if(t===0){let P=o.virtual&&o.params.virtual.enabled;P&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),m[A?"scrollLeft":"scrollTop"]=B,P&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._swiperImmediateVirtual=!1})}else{if(!o.support.smoothScroll)return Yn({swiper:o,targetPosition:B,side:A?"left":"top"}),!0;m.scrollTo({[A?"left":"top"]:B,behavior:"smooth"})}return!0}return o.setTransition(t),o.setTranslate(b),o.updateActiveIndex(a),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,i),o.transitionStart(n,v),t===0?o.transitionEnd(n,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(B){!o||o.destroyed||B.target===this&&(o.$wrapperEl[0].removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].removeEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(n,v))}),o.$wrapperEl[0].addEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.$wrapperEl[0].addEventListener("webkitTransitionEnd",o.onSlideToWrapperTransitionEnd)),!0}var kl=F(()=>{pe()});function Cr(e=0,t=this.params.speed,n=!0,i){if(typeof e=="string"){let a=parseInt(e,10);if(!isFinite(a))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);e=a}let r=this,o=e;return r.params.loop&&(o+=r.loopedSlides),r.slideTo(o,t,n,i)}var Pl=F(()=>{});function Ar(e=this.params.speed,t=!0,n){let i=this,{animating:r,enabled:o,params:a}=i;if(!o)return i;let l=a.slidesPerGroup;a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1));let s=i.activeIndex<a.slidesPerGroupSkip?1:l;if(a.loop){if(r&&a.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return a.rewind&&i.isEnd?i.slideTo(0,e,t,n):i.slideTo(i.activeIndex+s,e,t,n)}var Fl=F(()=>{});function xr(e=this.params.speed,t=!0,n){let i=this,{params:r,animating:o,snapGrid:a,slidesGrid:l,rtlTranslate:s,enabled:c}=i;if(!c)return i;if(r.loop){if(o&&r.loopPreventsSlide)return!1;i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}let u=s?i.translate:-i.translate;function d(g){return g<0?-Math.floor(Math.abs(g)):Math.floor(g)}let p=d(u),m=a.map(g=>d(g)),y=a[m.indexOf(p)-1];if(typeof y>"u"&&r.cssMode){let g;a.forEach((b,v)=>{p>=b&&(g=v)}),typeof g<"u"&&(y=a[g>0?g-1:g])}let h=0;if(typeof y<"u"&&(h=l.indexOf(y),h<0&&(h=i.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(h=h-i.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),r.rewind&&i.isBeginning){let g=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1;return i.slideTo(g,e,t,n)}return i.slideTo(h,e,t,n)}var Bl=F(()=>{});function Sr(e=this.params.speed,t=!0,n){let i=this;return i.slideTo(i.activeIndex,e,t,n)}var Dl=F(()=>{});function Er(e=this.params.speed,t=!0,n,i=.5){let r=this,o=r.activeIndex,a=Math.min(r.params.slidesPerGroupSkip,o),l=a+Math.floor((o-a)/r.params.slidesPerGroup),s=r.rtlTranslate?r.translate:-r.translate;if(s>=r.snapGrid[l]){let c=r.snapGrid[l],u=r.snapGrid[l+1];s-c>(u-c)*i&&(o+=r.params.slidesPerGroup)}else{let c=r.snapGrid[l-1],u=r.snapGrid[l];s-c<=(u-c)*i&&(o-=r.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,r.slidesGrid.length-1),r.slideTo(o,e,t,n)}var Ml=F(()=>{});function Ir(){let e=this,{params:t,$wrapperEl:n}=e,i=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView,r=e.clickedIndex,o;if(t.loop){if(e.animating)return;o=parseInt(M(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Pe(()=>{e.slideTo(r)})):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=n.children(`.${t.slideClass}[data-swiper-slide-index="${o}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),Pe(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}var zl=F(()=>{oe();pe()});var Ol,_l=F(()=>{kl();Pl();Fl();Bl();Dl();Ml();zl();Ol={slideTo:vr,slideToLoop:Cr,slideNext:Ar,slidePrev:xr,slideReset:Sr,slideToClosest:Er,slideToClickedSlide:Ir}});function wr(){let e=this,t=te(),{params:n,$wrapperEl:i}=e,r=i.children().length>0?M(i.children()[0].parentNode):i;r.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();let o=r.children(`.${n.slideClass}`);if(n.loopFillGroupWithBlank){let s=n.slidesPerGroup-o.length%n.slidesPerGroup;if(s!==n.slidesPerGroup){for(let c=0;c<s;c+=1){let u=M(t.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);r.append(u)}o=r.children(`.${n.slideClass}`)}}n.slidesPerView==="auto"&&!n.loopedSlides&&(n.loopedSlides=o.length),e.loopedSlides=Math.ceil(parseFloat(n.loopedSlides||n.slidesPerView,10)),e.loopedSlides+=n.loopAdditionalSlides,e.loopedSlides>o.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=o.length);let a=[],l=[];o.each((s,c)=>{M(s).attr("data-swiper-slide-index",c)});for(let s=0;s<e.loopedSlides;s+=1){let c=s-Math.floor(s/o.length)*o.length;l.push(o.eq(c)[0]),a.unshift(o.eq(o.length-c-1)[0])}for(let s=0;s<l.length;s+=1)r.append(M(l[s].cloneNode(!0)).addClass(n.slideDuplicateClass));for(let s=a.length-1;s>=0;s-=1)r.prepend(M(a[s].cloneNode(!0)).addClass(n.slideDuplicateClass))}var Rl=F(()=>{le();oe()});function Tr(){let e=this;e.emit("beforeLoopFix");let{activeIndex:t,slides:n,loopedSlides:i,allowSlidePrev:r,allowSlideNext:o,snapGrid:a,rtlTranslate:l}=e,s;e.allowSlidePrev=!0,e.allowSlideNext=!0;let u=-a[t]-e.getTranslate();t<i?(s=n.length-i*3+t,s+=i,e.slideTo(s,0,!1,!0)&&u!==0&&e.setTranslate((l?-e.translate:e.translate)-u)):t>=n.length-i&&(s=-n.length+t+i,s+=i,e.slideTo(s,0,!1,!0)&&u!==0&&e.setTranslate((l?-e.translate:e.translate)-u)),e.allowSlidePrev=r,e.allowSlideNext=o,e.emit("loopFix")}var Vl=F(()=>{});function kr(){let e=this,{$wrapperEl:t,params:n,slides:i}=e;t.children(`.${n.slideClass}.${n.slideDuplicateClass},.${n.slideClass}.${n.slideBlankClass}`).remove(),i.removeAttr("data-swiper-slide-index")}var Ll=F(()=>{});var Nl,Hl=F(()=>{Rl();Vl();Ll();Nl={loopCreate:wr,loopFix:Tr,loopDestroy:kr}});function Pr(e){let t=this;if(t.support.touch||!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;n.style.cursor="move",n.style.cursor=e?"grabbing":"grab"}var Gl=F(()=>{});function Fr(){let e=this;e.support.touch||e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="")}var Yl=F(()=>{});var Wl,$l=F(()=>{Gl();Yl();Wl={setGrabCursor:Pr,unsetGrabCursor:Fr}});function Mf(e,t=this){function n(i){if(!i||i===te()||i===U())return null;i.assignedSlot&&(i=i.assignedSlot);let r=i.closest(e);return!r&&!i.getRootNode?null:r||n(i.getRootNode().host)}return n(t)}function Br(e){let t=this,n=te(),i=U(),r=t.touchEventsData,{params:o,touches:a,enabled:l}=t;if(!l||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let s=e;s.originalEvent&&(s=s.originalEvent);let c=M(s.target);if(o.touchEventsTarget==="wrapper"&&!c.closest(t.wrapperEl).length||(r.isTouchEvent=s.type==="touchstart",!r.isTouchEvent&&"which"in s&&s.which===3)||!r.isTouchEvent&&"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;let u=!!o.noSwipingClass&&o.noSwipingClass!=="",d=e.composedPath?e.composedPath():e.path;u&&s.target&&s.target.shadowRoot&&d&&(c=M(d[0]));let p=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,m=!!(s.target&&s.target.shadowRoot);if(o.noSwiping&&(m?Mf(p,c[0]):c.closest(p)[0])){t.allowClick=!0;return}if(o.swipeHandler&&!c.closest(o.swipeHandler)[0])return;a.currentX=s.type==="touchstart"?s.targetTouches[0].pageX:s.pageX,a.currentY=s.type==="touchstart"?s.targetTouches[0].pageY:s.pageY;let y=a.currentX,h=a.currentY,g=o.edgeSwipeDetection||o.iOSEdgeSwipeDetection,b=o.edgeSwipeThreshold||o.iOSEdgeSwipeThreshold;if(g&&(y<=b||y>=i.innerWidth-b))if(g==="prevent")e.preventDefault();else return;if(Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=y,a.startY=h,r.touchStartTime=he(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(r.allowThresholdMove=!1),s.type!=="touchstart"){let v=!0;c.is(r.focusableElements)&&(v=!1,c[0].nodeName==="SELECT"&&(r.isTouched=!1)),n.activeElement&&M(n.activeElement).is(r.focusableElements)&&n.activeElement!==c[0]&&n.activeElement.blur();let A=v&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||A)&&!c[0].isContentEditable&&s.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}var ql=F(()=>{le();oe();pe()});function Dr(e){let t=te(),n=this,i=n.touchEventsData,{params:r,touches:o,rtlTranslate:a,enabled:l}=n;if(!l)return;let s=e;if(s.originalEvent&&(s=s.originalEvent),!i.isTouched){i.startMoving&&i.isScrolling&&n.emit("touchMoveOpposite",s);return}if(i.isTouchEvent&&s.type!=="touchmove")return;let c=s.type==="touchmove"&&s.targetTouches&&(s.targetTouches[0]||s.changedTouches[0]),u=s.type==="touchmove"?c.pageX:s.pageX,d=s.type==="touchmove"?c.pageY:s.pageY;if(s.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!n.allowTouchMove){M(s.target).is(i.focusableElements)||(n.allowClick=!1),i.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),i.touchStartTime=he());return}if(i.isTouchEvent&&r.touchReleaseOnEdges&&!r.loop){if(n.isVertical()){if(d<o.startY&&n.translate<=n.maxTranslate()||d>o.startY&&n.translate>=n.minTranslate()){i.isTouched=!1,i.isMoved=!1;return}}else if(u<o.startX&&n.translate<=n.maxTranslate()||u>o.startX&&n.translate>=n.minTranslate())return}if(i.isTouchEvent&&t.activeElement&&s.target===t.activeElement&&M(s.target).is(i.focusableElements)){i.isMoved=!0,n.allowClick=!1;return}if(i.allowTouchCallbacks&&n.emit("touchMove",s),s.targetTouches&&s.targetTouches.length>1)return;o.currentX=u,o.currentY=d;let p=o.currentX-o.startX,m=o.currentY-o.startY;if(n.params.threshold&&Math.sqrt(p**2+m**2)<n.params.threshold)return;if(typeof i.isScrolling>"u"){let b;n.isHorizontal()&&o.currentY===o.startY||n.isVertical()&&o.currentX===o.startX?i.isScrolling=!1:p*p+m*m>=25&&(b=Math.atan2(Math.abs(m),Math.abs(p))*180/Math.PI,i.isScrolling=n.isHorizontal()?b>r.touchAngle:90-b>r.touchAngle)}if(i.isScrolling&&n.emit("touchMoveOpposite",s),typeof i.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(i.startMoving=!0),i.isScrolling){i.isTouched=!1;return}if(!i.startMoving)return;n.allowClick=!1,!r.cssMode&&s.cancelable&&s.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&s.stopPropagation(),i.isMoved||(r.loop&&!r.cssMode&&n.loopFix(),i.startTranslate=n.getTranslate(),n.setTransition(0),n.animating&&n.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,r.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit("sliderFirstMove",s)),n.emit("sliderMove",s),i.isMoved=!0;let y=n.isHorizontal()?p:m;o.diff=y,y*=r.touchRatio,a&&(y=-y),n.swipeDirection=y>0?"prev":"next",i.currentTranslate=y+i.startTranslate;let h=!0,g=r.resistanceRatio;if(r.touchReleaseOnEdges&&(g=0),y>0&&i.currentTranslate>n.minTranslate()?(h=!1,r.resistance&&(i.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+i.startTranslate+y)**g)):y<0&&i.currentTranslate<n.maxTranslate()&&(h=!1,r.resistance&&(i.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-i.startTranslate-y)**g)),h&&(s.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection==="next"&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&n.swipeDirection==="prev"&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(i.currentTranslate=i.startTranslate),r.threshold>0)if(Math.abs(y)>r.threshold||i.allowThresholdMove){if(!i.allowThresholdMove){i.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,i.currentTranslate=i.startTranslate,o.diff=n.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{i.currentTranslate=i.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&n.freeMode||r.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),n.params.freeMode&&r.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(i.currentTranslate),n.setTranslate(i.currentTranslate))}var jl=F(()=>{le();oe();pe()});function Mr(e){let t=this,n=t.touchEventsData,{params:i,touches:r,rtlTranslate:o,slidesGrid:a,enabled:l}=t;if(!l)return;let s=e;if(s.originalEvent&&(s=s.originalEvent),n.allowTouchCallbacks&&t.emit("touchEnd",s),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&i.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}i.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let c=he(),u=c-n.touchStartTime;if(t.allowClick){let v=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(v&&v[0]||s.target),t.emit("tap click",s),u<300&&c-n.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(n.lastClickTime=he(),Pe(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||r.diff===0||n.currentTranslate===n.startTranslate){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let d;if(i.followFinger?d=o?t.translate:-t.translate:d=-n.currentTranslate,i.cssMode)return;if(t.params.freeMode&&i.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:d});return}let p=0,m=t.slidesSizesGrid[0];for(let v=0;v<a.length;v+=v<i.slidesPerGroupSkip?1:i.slidesPerGroup){let A=v<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;typeof a[v+A]<"u"?d>=a[v]&&d<a[v+A]&&(p=v,m=a[v+A]-a[v]):d>=a[v]&&(p=v,m=a[a.length-1]-a[a.length-2])}let y=null,h=null;i.rewind&&(t.isBeginning?h=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(y=0));let g=(d-a[p])/m,b=p<i.slidesPerGroupSkip-1?1:i.slidesPerGroup;if(u>i.longSwipesMs){if(!i.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?y:p+b):t.slideTo(p)),t.swipeDirection==="prev"&&(g>1-i.longSwipesRatio?t.slideTo(p+b):h!==null&&g<0&&Math.abs(g)>i.longSwipesRatio?t.slideTo(h):t.slideTo(p))}else{if(!i.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(p+b):t.slideTo(p):(t.swipeDirection==="next"&&t.slideTo(y!==null?y:p+b),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:p))}}var Ul=F(()=>{pe()});function $n(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:i,allowSlidePrev:r,snapGrid:o}=e;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=r,e.allowSlideNext=i,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}var Ql=F(()=>{});function zr(e){let t=this;!t.enabled||t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))}var Jl=F(()=>{});function Or(){let e=this,{wrapperEl:t,rtlTranslate:n,enabled:i}=e;if(!i)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r,o=e.maxTranslate()-e.minTranslate();o===0?r=0:r=(e.translate-e.minTranslate())/o,r!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}var Xl=F(()=>{});function zf(){}function Of(){let e=this,t=te(),{params:n,support:i}=e;e.onTouchStart=Br.bind(e),e.onTouchMove=Dr.bind(e),e.onTouchEnd=Mr.bind(e),n.cssMode&&(e.onScroll=Or.bind(e)),e.onClick=zr.bind(e),i.touch&&!Kl&&(t.addEventListener("touchstart",zf),Kl=!0),Zl(e,"on")}function _f(){Zl(this,"off")}var Kl,Zl,ec,tc=F(()=>{le();ql();jl();Ul();Ql();Jl();Xl();Kl=!1;Zl=(e,t)=>{let n=te(),{params:i,touchEvents:r,el:o,wrapperEl:a,device:l,support:s}=e,c=!!i.nested,u=t==="on"?"addEventListener":"removeEventListener",d=t;if(!s.touch)o[u](r.start,e.onTouchStart,!1),n[u](r.move,e.onTouchMove,c),n[u](r.end,e.onTouchEnd,!1);else{let p=r.start==="touchstart"&&s.passiveListener&&i.passiveListeners?{passive:!0,capture:!1}:!1;o[u](r.start,e.onTouchStart,p),o[u](r.move,e.onTouchMove,s.passiveListener?{passive:!1,capture:c}:c),o[u](r.end,e.onTouchEnd,p),r.cancel&&o[u](r.cancel,e.onTouchEnd,p)}(i.preventClicks||i.preventClicksPropagation)&&o[u]("click",e.onClick,!0),i.cssMode&&a[u]("scroll",e.onScroll),i.updateOnWindowResize?e[d](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",$n,!0):e[d]("observerUpdate",$n,!0)};ec={attachEvents:Of,detachEvents:_f}});function _r(){let e=this,{activeIndex:t,initialized:n,loopedSlides:i=0,params:r,$el:o}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let l=e.getBreakpoint(a,e.params.breakpointsBase,e.el);if(!l||e.currentBreakpoint===l)return;let c=(l in a?a[l]:void 0)||e.originalParams,u=nc(e,r),d=nc(e,c),p=r.enabled;u&&!d?(o.removeClass(`${r.containerModifierClass}grid ${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!u&&d&&(o.addClass(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&o.addClass(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(g=>{let b=r[g]&&r[g].enabled,v=c[g]&&c[g].enabled;b&&!v&&e[g].disable(),!b&&v&&e[g].enable()});let m=c.direction&&c.direction!==r.direction,y=r.loop&&(c.slidesPerView!==r.slidesPerView||m);m&&n&&e.changeDirection(),Ce(e.params,c);let h=e.params.enabled;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!h?e.disable():!p&&h&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",c),y&&n&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",c)}var nc,ic=F(()=>{pe();nc=(e,t)=>e.grid&&t.grid&&t.grid.rows>1});function Rr(e,t="window",n){if(!e||t==="container"&&!n)return;let i=!1,r=U(),o=t==="window"?r.innerHeight:n.clientHeight,a=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){let s=parseFloat(l.substr(1));return{value:o*s,point:l}}return{value:l,point:l}});a.sort((l,s)=>parseInt(l.value,10)-parseInt(s.value,10));for(let l=0;l<a.length;l+=1){let{point:s,value:c}=a[l];t==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(i=s):c<=n.clientWidth&&(i=s)}return i||"max"}var rc=F(()=>{le()});var oc,ac=F(()=>{ic();rc();oc={setBreakpoint:_r,getBreakpoint:Rr}});function Rf(e,t){let n=[];return e.forEach(i=>{typeof i=="object"?Object.keys(i).forEach(r=>{i[r]&&n.push(t+r)}):typeof i=="string"&&n.push(t+i)}),n}function Vr(){let e=this,{classNames:t,params:n,rtl:i,$el:r,device:o,support:a}=e,l=Rf(["initialized",n.direction,{"pointer-events":!a.touch},{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:i},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...l),r.addClass([...t].join(" ")),e.emitContainerClasses()}var sc=F(()=>{});function Lr(){let e=this,{$el:t,classNames:n}=e;t.removeClass(n.join(" ")),e.emitContainerClasses()}var lc=F(()=>{});var cc,uc=F(()=>{sc();lc();cc={addClasses:Vr,removeClasses:Lr}});function Nr(e,t,n,i,r,o){let a=U(),l;function s(){o&&o()}!M(e).parent("picture")[0]&&(!e.complete||!r)&&t?(l=new a.Image,l.onload=s,l.onerror=s,i&&(l.sizes=i),n&&(l.srcset=n),t&&(l.src=t)):s()}var dc=F(()=>{le();oe()});function Hr(){let e=this;e.imagesToLoad=e.$el.find("img");function t(){typeof e>"u"||e===null||!e||e.destroyed||(e.imagesLoaded!==void 0&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}for(let n=0;n<e.imagesToLoad.length;n+=1){let i=e.imagesToLoad[n];e.loadImage(i,i.currentSrc||i.getAttribute("src"),i.srcset||i.getAttribute("srcset"),i.sizes||i.getAttribute("sizes"),!0,t)}}var fc=F(()=>{});var pc,hc=F(()=>{dc();fc();pc={loadImage:Nr,preloadImages:Hr}});function Vf(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:i}=n;if(i){let r=e.slides.length-1,o=e.slidesGrid[r]+e.slidesSizesGrid[r]+i*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var gc,mc=F(()=>{gc={checkOverflow:Vf}});var Gr,yc=F(()=>{Gr={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1}});function Yr(e,t){return function(i={}){let r=Object.keys(i)[0],o=i[r];if(typeof o!="object"||o===null){Ce(t,i);return}if(["navigation","pagination","scrollbar"].indexOf(r)>=0&&e[r]===!0&&(e[r]={auto:!0}),!(r in e&&"enabled"in o)){Ce(t,i);return}e[r]===!0&&(e[r]={enabled:!0}),typeof e[r]=="object"&&!("enabled"in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),Ce(t,i)}}var bc=F(()=>{pe()});var Wr,$r,Fe,qr,vc=F(()=>{le();oe();pe();Ji();Ks();el();tl();nl();rl();gl();xl();Tl();_l();Hl();$l();tc();ac();uc();hc();mc();yc();bc();Wr={eventsEmitter:il,update:hl,translate:Al,transition:wl,slide:Ol,loop:Nl,grabCursor:Wl,events:ec,breakpoints:oc,checkOverflow:gc,classes:cc,images:pc},$r={},Fe=class{constructor(...t){let n,i;if(t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?i=t[0]:[n,i]=t,i||(i={}),i=Ce({},i),n&&!i.el&&(i.el=n),i.el&&M(i.el).length>1){let l=[];return M(i.el).each(s=>{let c=Ce({},i,{el:s});l.push(new Fe(c))}),l}let r=this;r.__swiper__=!0,r.support=Wn(),r.device=Xs({userAgent:i.userAgent}),r.browser=Zs(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],i.modules&&Array.isArray(i.modules)&&r.modules.push(...i.modules);let o={};r.modules.forEach(l=>{l({swiper:r,extendParams:Yr(i,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});let a=Ce({},Gr,o);return r.params=Ce({},a,$r,i),r.originalParams=Ce({},r.params),r.passedParams=Ce({},i),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=M,Object.assign(r,{enabled:r.params.enabled,el:n,classNames:[],slides:M(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function(){let s=["touchstart","touchmove","touchend","touchcancel"],c=["pointerdown","pointermove","pointerup"];return r.touchEventsTouch={start:s[0],move:s[1],end:s[2],cancel:s[3]},r.touchEventsDesktop={start:c[0],move:c[1],end:c[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:he(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){let t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){let t=this;!t.enabled||(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,n){let i=this;t=Math.min(Math.max(t,0),1);let r=i.minTranslate(),a=(i.maxTranslate()-r)*t+r;i.translateTo(a,typeof n>"u"?0:n),i.updateActiveIndex(),i.updateSlidesClasses()}emitContainerClasses(){let t=this;if(!t.params._emitClasses||!t.el)return;let n=t.el.className.split(" ").filter(i=>i.indexOf("swiper")===0||i.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",n.join(" "))}getSlideClasses(t){let n=this;return n.destroyed?"":t.className.split(" ").filter(i=>i.indexOf("swiper-slide")===0||i.indexOf(n.params.slideClass)===0).join(" ")}emitSlidesClasses(){let t=this;if(!t.params._emitClasses||!t.el)return;let n=[];t.slides.each(i=>{let r=t.getSlideClasses(i);n.push({slideEl:i,classNames:r}),t.emit("_slideClass",i,r)}),t.emit("_slideClasses",n)}slidesPerViewDynamic(t="current",n=!1){let i=this,{params:r,slides:o,slidesGrid:a,slidesSizesGrid:l,size:s,activeIndex:c}=i,u=1;if(r.centeredSlides){let d=o[c].swiperSlideSize,p;for(let m=c+1;m<o.length;m+=1)o[m]&&!p&&(d+=o[m].swiperSlideSize,u+=1,d>s&&(p=!0));for(let m=c-1;m>=0;m-=1)o[m]&&!p&&(d+=o[m].swiperSlideSize,u+=1,d>s&&(p=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(n?a[d]+l[d]-a[c]<s:a[d]-a[c]<s)&&(u+=1);else for(let d=c-1;d>=0;d-=1)a[c]-a[d]<s&&(u+=1);return u}update(){let t=this;if(!t||t.destroyed)return;let{snapGrid:n,params:i}=t;i.breakpoints&&t.setBreakpoint(),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){let a=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(a,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;t.params.freeMode&&t.params.freeMode.enabled?(r(),t.params.autoHeight&&t.updateAutoHeight()):((t.params.slidesPerView==="auto"||t.params.slidesPerView>1)&&t.isEnd&&!t.params.centeredSlides?o=t.slideTo(t.slides.length-1,0,!1,!0):o=t.slideTo(t.activeIndex,0,!1,!0),o||r()),i.watchOverflow&&n!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,n=!0){let i=this,r=i.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(i.$el.removeClass(`${i.params.containerModifierClass}${r}`).addClass(`${i.params.containerModifierClass}${t}`),i.emitContainerClasses(),i.params.direction=t,i.slides.each(o=>{t==="vertical"?o.style.width="":o.style.height=""}),i.emit("changeDirection"),n&&i.update()),i}changeLanguageDirection(t){let n=this;n.rtl&&t==="rtl"||!n.rtl&&t==="ltr"||(n.rtl=t==="rtl",n.rtlTranslate=n.params.direction==="horizontal"&&n.rtl,n.rtl?(n.$el.addClass(`${n.params.containerModifierClass}rtl`),n.el.dir="rtl"):(n.$el.removeClass(`${n.params.containerModifierClass}rtl`),n.el.dir="ltr"),n.update())}mount(t){let n=this;if(n.mounted)return!0;let i=M(t||n.params.el);if(t=i[0],!t)return!1;t.swiper=n;let r=()=>`.${(n.params.wrapperClass||"").trim().split(" ").join(".")}`,a=(()=>{if(t&&t.shadowRoot&&t.shadowRoot.querySelector){let l=M(t.shadowRoot.querySelector(r()));return l.children=s=>i.children(s),l}return i.children?i.children(r()):M(i).children(r())})();if(a.length===0&&n.params.createElements){let s=te().createElement("div");a=M(s),s.className=n.params.wrapperClass,i.append(s),i.children(`.${n.params.slideClass}`).each(c=>{a.append(c)})}return Object.assign(n,{$el:i,el:t,$wrapperEl:a,wrapperEl:a[0],mounted:!0,rtl:t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl",rtlTranslate:n.params.direction==="horizontal"&&(t.dir.toLowerCase()==="rtl"||i.css("direction")==="rtl"),wrongRTL:a.css("display")==="-webkit-box"}),!0}init(t){let n=this;return n.initialized||n.mount(t)===!1||(n.emit("beforeInit"),n.params.breakpoints&&n.setBreakpoint(),n.addClasses(),n.params.loop&&n.loopCreate(),n.updateSize(),n.updateSlides(),n.params.watchOverflow&&n.checkOverflow(),n.params.grabCursor&&n.enabled&&n.setGrabCursor(),n.params.preloadImages&&n.preloadImages(),n.params.loop?n.slideTo(n.params.initialSlide+n.loopedSlides,0,n.params.runCallbacksOnInit,!1,!0):n.slideTo(n.params.initialSlide,0,n.params.runCallbacksOnInit,!1,!0),n.attachEvents(),n.initialized=!0,n.emit("init"),n.emit("afterInit")),n}destroy(t=!0,n=!0){let i=this,{params:r,$el:o,$wrapperEl:a,slides:l}=i;return typeof i.params>"u"||i.destroyed||(i.emit("beforeDestroy"),i.initialized=!1,i.detachEvents(),r.loop&&i.loopDestroy(),n&&(i.removeClasses(),o.removeAttr("style"),a.removeAttr("style"),l&&l.length&&l.removeClass([r.slideVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),i.emit("destroy"),Object.keys(i.eventsListeners).forEach(s=>{i.off(s)}),t!==!1&&(i.$el[0].swiper=null,Js(i)),i.destroyed=!0),null}static extendDefaults(t){Ce($r,t)}static get extendedDefaults(){return $r}static get defaults(){return Gr}static installModule(t){Fe.prototype.__modules__||(Fe.prototype.__modules__=[]);let n=Fe.prototype.__modules__;typeof t=="function"&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(n=>Fe.installModule(n)),Fe):(Fe.installModule(t),Fe)}};Object.keys(Wr).forEach(e=>{Object.keys(Wr[e]).forEach(t=>{Fe.prototype[t]=Wr[e][t]})});Fe.use([Zi,er]);qr=Fe});function jr({swiper:e,extendParams:t,on:n,emit:i}){t({virtual:{enabled:!1,slides:[],cache:!0,renderSlide:null,renderExternal:null,renderExternalUpdate:!0,addSlidesBefore:0,addSlidesAfter:0}});let r;e.virtual={cache:{},from:void 0,to:void 0,slides:[],offset:0,slidesGrid:[]};function o(d,p){let m=e.params.virtual;if(m.cache&&e.virtual.cache[p])return e.virtual.cache[p];let y=m.renderSlide?M(m.renderSlide.call(e,d,p)):M(`<div class="${e.params.slideClass}" data-swiper-slide-index="${p}">${d}</div>`);return y.attr("data-swiper-slide-index")||y.attr("data-swiper-slide-index",p),m.cache&&(e.virtual.cache[p]=y),y}function a(d){let{slidesPerView:p,slidesPerGroup:m,centeredSlides:y}=e.params,{addSlidesBefore:h,addSlidesAfter:g}=e.params.virtual,{from:b,to:v,slides:A,slidesGrid:B,offset:P}=e.virtual;e.params.cssMode||e.updateActiveIndex();let O=e.activeIndex||0,k;e.rtlTranslate?k="right":k=e.isHorizontal()?"left":"top";let R,N;y?(R=Math.floor(p/2)+m+g,N=Math.floor(p/2)+m+h):(R=p+(m-1)+g,N=m+h);let D=Math.max((O||0)-N,0),S=Math.min((O||0)+R,A.length-1),x=(e.slidesGrid[D]||0)-(e.slidesGrid[0]||0);Object.assign(e.virtual,{from:D,to:S,offset:x,slidesGrid:e.slidesGrid});function I(){e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),i("virtualUpdate")}if(b===D&&v===S&&!d){e.slidesGrid!==B&&x!==P&&e.slides.css(k,`${x}px`),e.updateProgress(),i("virtualUpdate");return}if(e.params.virtual.renderExternal){e.params.virtual.renderExternal.call(e,{offset:x,from:D,to:S,slides:function(){let L=[];for(let _=D;_<=S;_+=1)L.push(A[_]);return L}()}),e.params.virtual.renderExternalUpdate?I():i("virtualUpdate");return}let H=[],W=[];if(d)e.$wrapperEl.find(`.${e.params.slideClass}`).remove();else for(let E=b;E<=v;E+=1)(E<D||E>S)&&e.$wrapperEl.find(`.${e.params.slideClass}[data-swiper-slide-index="${E}"]`).remove();for(let E=0;E<A.length;E+=1)E>=D&&E<=S&&(typeof v>"u"||d?W.push(E):(E>v&&W.push(E),E<b&&H.push(E)));W.forEach(E=>{e.$wrapperEl.append(o(A[E],E))}),H.sort((E,L)=>L-E).forEach(E=>{e.$wrapperEl.prepend(o(A[E],E))}),e.$wrapperEl.children(".swiper-slide").css(k,`${x}px`),I()}function l(d){if(typeof d=="object"&&"length"in d)for(let p=0;p<d.length;p+=1)d[p]&&e.virtual.slides.push(d[p]);else e.virtual.slides.push(d);a(!0)}function s(d){let p=e.activeIndex,m=p+1,y=1;if(Array.isArray(d)){for(let h=0;h<d.length;h+=1)d[h]&&e.virtual.slides.unshift(d[h]);m=p+d.length,y=d.length}else e.virtual.slides.unshift(d);if(e.params.virtual.cache){let h=e.virtual.cache,g={};Object.keys(h).forEach(b=>{let v=h[b],A=v.attr("data-swiper-slide-index");A&&v.attr("data-swiper-slide-index",parseInt(A,10)+y),g[parseInt(b,10)+y]=v}),e.virtual.cache=g}a(!0),e.slideTo(m,0)}function c(d){if(typeof d>"u"||d===null)return;let p=e.activeIndex;if(Array.isArray(d))for(let m=d.length-1;m>=0;m-=1)e.virtual.slides.splice(d[m],1),e.params.virtual.cache&&delete e.virtual.cache[d[m]],d[m]<p&&(p-=1),p=Math.max(p,0);else e.virtual.slides.splice(d,1),e.params.virtual.cache&&delete e.virtual.cache[d],d<p&&(p-=1),p=Math.max(p,0);a(!0),e.slideTo(p,0)}function u(){e.virtual.slides=[],e.params.virtual.cache&&(e.virtual.cache={}),a(!0),e.slideTo(0,0)}n("beforeInit",()=>{!e.params.virtual.enabled||(e.virtual.slides=e.params.virtual.slides,e.classNames.push(`${e.params.containerModifierClass}virtual`),e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0,e.params.initialSlide||a())}),n("setTranslate",()=>{!e.params.virtual.enabled||(e.params.cssMode&&!e._immediateVirtual?(clearTimeout(r),r=setTimeout(()=>{a()},100)):a())}),n("init update resize",()=>{!e.params.virtual.enabled||e.params.cssMode&&zt(e.wrapperEl,"--swiper-virtual-size",`${e.virtualSize}px`)}),Object.assign(e.virtual,{appendSlide:l,prependSlide:s,removeSlide:c,removeAllSlides:u,update:a})}var Cc=F(()=>{oe();pe()});function Ur({swiper:e,extendParams:t,on:n,emit:i}){let r=te(),o=U();e.keyboard={enabled:!1},t({keyboard:{enabled:!1,onlyInViewport:!0,pageUpDown:!0}});function a(c){if(!e.enabled)return;let{rtlTranslate:u}=e,d=c;d.originalEvent&&(d=d.originalEvent);let p=d.keyCode||d.charCode,m=e.params.keyboard.pageUpDown,y=m&&p===33,h=m&&p===34,g=p===37,b=p===39,v=p===38,A=p===40;if(!e.allowSlideNext&&(e.isHorizontal()&&b||e.isVertical()&&A||h)||!e.allowSlidePrev&&(e.isHorizontal()&&g||e.isVertical()&&v||y))return!1;if(!(d.shiftKey||d.altKey||d.ctrlKey||d.metaKey)&&!(r.activeElement&&r.activeElement.nodeName&&(r.activeElement.nodeName.toLowerCase()==="input"||r.activeElement.nodeName.toLowerCase()==="textarea"))){if(e.params.keyboard.onlyInViewport&&(y||h||g||b||v||A)){let B=!1;if(e.$el.parents(`.${e.params.slideClass}`).length>0&&e.$el.parents(`.${e.params.slideActiveClass}`).length===0)return;let P=e.$el,O=P[0].clientWidth,k=P[0].clientHeight,R=o.innerWidth,N=o.innerHeight,D=e.$el.offset();u&&(D.left-=e.$el[0].scrollLeft);let S=[[D.left,D.top],[D.left+O,D.top],[D.left,D.top+k],[D.left+O,D.top+k]];for(let x=0;x<S.length;x+=1){let I=S[x];if(I[0]>=0&&I[0]<=R&&I[1]>=0&&I[1]<=N){if(I[0]===0&&I[1]===0)continue;B=!0}}if(!B)return}e.isHorizontal()?((y||h||g||b)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),((h||b)&&!u||(y||g)&&u)&&e.slideNext(),((y||g)&&!u||(h||b)&&u)&&e.slidePrev()):((y||h||v||A)&&(d.preventDefault?d.preventDefault():d.returnValue=!1),(h||A)&&e.slideNext(),(y||v)&&e.slidePrev()),i("keyPress",p)}}function l(){e.keyboard.enabled||(M(r).on("keydown",a),e.keyboard.enabled=!0)}function s(){!e.keyboard.enabled||(M(r).off("keydown",a),e.keyboard.enabled=!1)}n("init",()=>{e.params.keyboard.enabled&&l()}),n("destroy",()=>{e.keyboard.enabled&&s()}),Object.assign(e.keyboard,{enable:l,disable:s})}var Ac=F(()=>{le();oe()});function Qr({swiper:e,extendParams:t,on:n,emit:i}){let r=U();t({mousewheel:{enabled:!1,releaseOnEdges:!1,invert:!1,forceToAxis:!1,sensitivity:1,eventsTarget:"container",thresholdDelta:null,thresholdTime:null}}),e.mousewheel={enabled:!1};let o,a=he(),l,s=[];function c(v){let O=0,k=0,R=0,N=0;return"detail"in v&&(k=v.detail),"wheelDelta"in v&&(k=-v.wheelDelta/120),"wheelDeltaY"in v&&(k=-v.wheelDeltaY/120),"wheelDeltaX"in v&&(O=-v.wheelDeltaX/120),"axis"in v&&v.axis===v.HORIZONTAL_AXIS&&(O=k,k=0),R=O*10,N=k*10,"deltaY"in v&&(N=v.deltaY),"deltaX"in v&&(R=v.deltaX),v.shiftKey&&!R&&(R=N,N=0),(R||N)&&v.deltaMode&&(v.deltaMode===1?(R*=40,N*=40):(R*=800,N*=800)),R&&!O&&(O=R<1?-1:1),N&&!k&&(k=N<1?-1:1),{spinX:O,spinY:k,pixelX:R,pixelY:N}}function u(){!e.enabled||(e.mouseEntered=!0)}function d(){!e.enabled||(e.mouseEntered=!1)}function p(v){return e.params.mousewheel.thresholdDelta&&v.delta<e.params.mousewheel.thresholdDelta||e.params.mousewheel.thresholdTime&&he()-a<e.params.mousewheel.thresholdTime?!1:v.delta>=6&&he()-a<60?!0:(v.direction<0?(!e.isEnd||e.params.loop)&&!e.animating&&(e.slideNext(),i("scroll",v.raw)):(!e.isBeginning||e.params.loop)&&!e.animating&&(e.slidePrev(),i("scroll",v.raw)),a=new r.Date().getTime(),!1)}function m(v){let A=e.params.mousewheel;if(v.direction<0){if(e.isEnd&&!e.params.loop&&A.releaseOnEdges)return!0}else if(e.isBeginning&&!e.params.loop&&A.releaseOnEdges)return!0;return!1}function y(v){let A=v,B=!0;if(!e.enabled)return;let P=e.params.mousewheel;e.params.cssMode&&A.preventDefault();let O=e.$el;if(e.params.mousewheel.eventsTarget!=="container"&&(O=M(e.params.mousewheel.eventsTarget)),!e.mouseEntered&&!O[0].contains(A.target)&&!P.releaseOnEdges)return!0;A.originalEvent&&(A=A.originalEvent);let k=0,R=e.rtlTranslate?-1:1,N=c(A);if(P.forceToAxis)if(e.isHorizontal())if(Math.abs(N.pixelX)>Math.abs(N.pixelY))k=-N.pixelX*R;else return!0;else if(Math.abs(N.pixelY)>Math.abs(N.pixelX))k=-N.pixelY;else return!0;else k=Math.abs(N.pixelX)>Math.abs(N.pixelY)?-N.pixelX*R:-N.pixelY;if(k===0)return!0;P.invert&&(k=-k);let D=e.getTranslate()+k*P.sensitivity;if(D>=e.minTranslate()&&(D=e.minTranslate()),D<=e.maxTranslate()&&(D=e.maxTranslate()),B=e.params.loop?!0:!(D===e.minTranslate()||D===e.maxTranslate()),B&&e.params.nested&&A.stopPropagation(),!e.params.freeMode||!e.params.freeMode.enabled){let S={time:he(),delta:Math.abs(k),direction:Math.sign(k),raw:v};s.length>=2&&s.shift();let x=s.length?s[s.length-1]:void 0;if(s.push(S),x?(S.direction!==x.direction||S.delta>x.delta||S.time>x.time+150)&&p(S):p(S),m(S))return!0}else{let S={time:he(),delta:Math.abs(k),direction:Math.sign(k)},x=l&&S.time<l.time+500&&S.delta<=l.delta&&S.direction===l.direction;if(!x){l=void 0,e.params.loop&&e.loopFix();let I=e.getTranslate()+k*P.sensitivity,H=e.isBeginning,W=e.isEnd;if(I>=e.minTranslate()&&(I=e.minTranslate()),I<=e.maxTranslate()&&(I=e.maxTranslate()),e.setTransition(0),e.setTranslate(I),e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses(),(!H&&e.isBeginning||!W&&e.isEnd)&&e.updateSlidesClasses(),e.params.freeMode.sticky){clearTimeout(o),o=void 0,s.length>=15&&s.shift();let E=s.length?s[s.length-1]:void 0,L=s[0];if(s.push(S),E&&(S.delta>E.delta||S.direction!==E.direction))s.splice(0);else if(s.length>=15&&S.time-L.time<500&&L.delta-S.delta>=1&&S.delta<=6){let _=k>0?.8:.2;l=S,s.splice(0),o=Pe(()=>{e.slideToClosest(e.params.speed,!0,void 0,_)},0)}o||(o=Pe(()=>{l=S,s.splice(0),e.slideToClosest(e.params.speed,!0,void 0,.5)},500))}if(x||i("scroll",A),e.params.autoplay&&e.params.autoplayDisableOnInteraction&&e.autoplay.stop(),I===e.minTranslate()||I===e.maxTranslate())return!0}}return A.preventDefault?A.preventDefault():A.returnValue=!1,!1}function h(v){let A=e.$el;e.params.mousewheel.eventsTarget!=="container"&&(A=M(e.params.mousewheel.eventsTarget)),A[v]("mouseenter",u),A[v]("mouseleave",d),A[v]("wheel",y)}function g(){return e.params.cssMode?(e.wrapperEl.removeEventListener("wheel",y),!0):e.mousewheel.enabled?!1:(h("on"),e.mousewheel.enabled=!0,!0)}function b(){return e.params.cssMode?(e.wrapperEl.addEventListener(event,y),!0):e.mousewheel.enabled?(h("off"),e.mousewheel.enabled=!1,!0):!1}n("init",()=>{!e.params.mousewheel.enabled&&e.params.cssMode&&b(),e.params.mousewheel.enabled&&g()}),n("destroy",()=>{e.params.cssMode&&g(),e.mousewheel.enabled&&b()}),Object.assign(e.mousewheel,{enable:g,disable:b})}var xc=F(()=>{le();oe();pe()});function Ot(e,t,n,i){let r=te();return e.params.createElements&&Object.keys(i).forEach(o=>{if(!n[o]&&n.auto===!0){let a=e.$el.children(`.${i[o]}`)[0];a||(a=r.createElement("div"),a.className=i[o],e.$el.append(a)),n[o]=a,t[o]=a}}),n}var qn=F(()=>{le()});function Jr({swiper:e,extendParams:t,on:n,emit:i}){t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function r(m){let y;return m&&(y=M(m),e.params.uniqueNavElements&&typeof m=="string"&&y.length>1&&e.$el.find(m).length===1&&(y=e.$el.find(m))),y}function o(m,y){let h=e.params.navigation;m&&m.length>0&&(m[y?"addClass":"removeClass"](h.disabledClass),m[0]&&m[0].tagName==="BUTTON"&&(m[0].disabled=y),e.params.watchOverflow&&e.enabled&&m[e.isLocked?"addClass":"removeClass"](h.lockClass))}function a(){if(e.params.loop)return;let{$nextEl:m,$prevEl:y}=e.navigation;o(y,e.isBeginning&&!e.params.rewind),o(m,e.isEnd&&!e.params.rewind)}function l(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function s(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function c(){let m=e.params.navigation;if(e.params.navigation=Ot(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let y=r(m.nextEl),h=r(m.prevEl);y&&y.length>0&&y.on("click",s),h&&h.length>0&&h.on("click",l),Object.assign(e.navigation,{$nextEl:y,nextEl:y&&y[0],$prevEl:h,prevEl:h&&h[0]}),e.enabled||(y&&y.addClass(m.lockClass),h&&h.addClass(m.lockClass))}function u(){let{$nextEl:m,$prevEl:y}=e.navigation;m&&m.length&&(m.off("click",s),m.removeClass(e.params.navigation.disabledClass)),y&&y.length&&(y.off("click",l),y.removeClass(e.params.navigation.disabledClass))}n("init",()=>{e.params.navigation.enabled===!1?p():(c(),a())}),n("toEdge fromEdge lock unlock",()=>{a()}),n("destroy",()=>{u()}),n("enable disable",()=>{let{$nextEl:m,$prevEl:y}=e.navigation;m&&m[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),y&&y[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),n("click",(m,y)=>{let{$nextEl:h,$prevEl:g}=e.navigation,b=y.target;if(e.params.navigation.hideOnClick&&!M(b).is(g)&&!M(b).is(h)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===b||e.pagination.el.contains(b)))return;let v;h?v=h.hasClass(e.params.navigation.hiddenClass):g&&(v=g.hasClass(e.params.navigation.hiddenClass)),i(v===!0?"navigationShow":"navigationHide"),h&&h.toggleClass(e.params.navigation.hiddenClass),g&&g.toggleClass(e.params.navigation.hiddenClass)}});let d=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),c(),a()},p=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),u()};Object.assign(e.navigation,{enable:d,disable:p,update:a,init:c,destroy:u})}var Sc=F(()=>{qn();oe()});function qe(e=""){return`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}var Xr=F(()=>{});function Kr({swiper:e,extendParams:t,on:n,emit:i}){let r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,$el:null,bullets:[]};let o,a=0;function l(){return!e.params.pagination.el||!e.pagination.el||!e.pagination.$el||e.pagination.$el.length===0}function s(h,g){let{bulletActiveClass:b}=e.params.pagination;h[g]().addClass(`${b}-${g}`)[g]().addClass(`${b}-${g}-${g}`)}function c(){let h=e.rtl,g=e.params.pagination;if(l())return;let b=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,v=e.pagination.$el,A,B=e.params.loop?Math.ceil((b-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(A=Math.ceil((e.activeIndex-e.loopedSlides)/e.params.slidesPerGroup),A>b-1-e.loopedSlides*2&&(A-=b-e.loopedSlides*2),A>B-1&&(A-=B),A<0&&e.params.paginationType!=="bullets"&&(A=B+A)):typeof e.snapIndex<"u"?A=e.snapIndex:A=e.activeIndex||0,g.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){let P=e.pagination.bullets,O,k,R;if(g.dynamicBullets&&(o=P.eq(0)[e.isHorizontal()?"outerWidth":"outerHeight"](!0),v.css(e.isHorizontal()?"width":"height",`${o*(g.dynamicMainBullets+4)}px`),g.dynamicMainBullets>1&&e.previousIndex!==void 0&&(a+=A-(e.previousIndex-e.loopedSlides||0),a>g.dynamicMainBullets-1?a=g.dynamicMainBullets-1:a<0&&(a=0)),O=Math.max(A-a,0),k=O+(Math.min(P.length,g.dynamicMainBullets)-1),R=(k+O)/2),P.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(N=>`${g.bulletActiveClass}${N}`).join(" ")),v.length>1)P.each(N=>{let D=M(N),S=D.index();S===A&&D.addClass(g.bulletActiveClass),g.dynamicBullets&&(S>=O&&S<=k&&D.addClass(`${g.bulletActiveClass}-main`),S===O&&s(D,"prev"),S===k&&s(D,"next"))});else{let N=P.eq(A),D=N.index();if(N.addClass(g.bulletActiveClass),g.dynamicBullets){let S=P.eq(O),x=P.eq(k);for(let I=O;I<=k;I+=1)P.eq(I).addClass(`${g.bulletActiveClass}-main`);if(e.params.loop)if(D>=P.length){for(let I=g.dynamicMainBullets;I>=0;I-=1)P.eq(P.length-I).addClass(`${g.bulletActiveClass}-main`);P.eq(P.length-g.dynamicMainBullets-1).addClass(`${g.bulletActiveClass}-prev`)}else s(S,"prev"),s(x,"next");else s(S,"prev"),s(x,"next")}}if(g.dynamicBullets){let N=Math.min(P.length,g.dynamicMainBullets+4),D=(o*N-o)/2-R*o,S=h?"right":"left";P.css(e.isHorizontal()?S:"top",`${D}px`)}}if(g.type==="fraction"&&(v.find(qe(g.currentClass)).text(g.formatFractionCurrent(A+1)),v.find(qe(g.totalClass)).text(g.formatFractionTotal(B))),g.type==="progressbar"){let P;g.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";let O=(A+1)/B,k=1,R=1;P==="horizontal"?k=O:R=O,v.find(qe(g.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${k}) scaleY(${R})`).transition(e.params.speed)}g.type==="custom"&&g.renderCustom?(v.html(g.renderCustom(e,A+1,B)),i("paginationRender",v[0])):i("paginationUpdate",v[0]),e.params.watchOverflow&&e.enabled&&v[e.isLocked?"addClass":"removeClass"](g.lockClass)}function u(){let h=e.params.pagination;if(l())return;let g=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,b=e.pagination.$el,v="";if(h.type==="bullets"){let A=e.params.loop?Math.ceil((g-e.loopedSlides*2)/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&!e.params.loop&&A>g&&(A=g);for(let B=0;B<A;B+=1)h.renderBullet?v+=h.renderBullet.call(e,B,h.bulletClass):v+=`<${h.bulletElement} class="${h.bulletClass}"></${h.bulletElement}>`;b.html(v),e.pagination.bullets=b.find(qe(h.bulletClass))}h.type==="fraction"&&(h.renderFraction?v=h.renderFraction.call(e,h.currentClass,h.totalClass):v=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`,b.html(v)),h.type==="progressbar"&&(h.renderProgressbar?v=h.renderProgressbar.call(e,h.progressbarFillClass):v=`<span class="${h.progressbarFillClass}"></span>`,b.html(v)),h.type!=="custom"&&i("paginationRender",e.pagination.$el[0])}function d(){e.params.pagination=Ot(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});let h=e.params.pagination;if(!h.el)return;let g=M(h.el);g.length!==0&&(e.params.uniqueNavElements&&typeof h.el=="string"&&g.length>1&&(g=e.$el.find(h.el),g.length>1&&(g=g.filter(b=>M(b).parents(".swiper")[0]===e.el))),h.type==="bullets"&&h.clickable&&g.addClass(h.clickableClass),g.addClass(h.modifierClass+h.type),g.addClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(g.addClass(`${h.modifierClass}${h.type}-dynamic`),a=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&g.addClass(h.progressbarOppositeClass),h.clickable&&g.on("click",qe(h.bulletClass),function(v){v.preventDefault();let A=M(this).index()*e.params.slidesPerGroup;e.params.loop&&(A+=e.loopedSlides),e.slideTo(A)}),Object.assign(e.pagination,{$el:g,el:g[0]}),e.enabled||g.addClass(h.lockClass))}function p(){let h=e.params.pagination;if(l())return;let g=e.pagination.$el;g.removeClass(h.hiddenClass),g.removeClass(h.modifierClass+h.type),g.removeClass(e.isHorizontal()?h.horizontalClass:h.verticalClass),e.pagination.bullets&&e.pagination.bullets.removeClass&&e.pagination.bullets.removeClass(h.bulletActiveClass),h.clickable&&g.off("click",qe(h.bulletClass))}n("init",()=>{e.params.pagination.enabled===!1?y():(d(),u(),c())}),n("activeIndexChange",()=>{(e.params.loop||typeof e.snapIndex>"u")&&c()}),n("snapIndexChange",()=>{e.params.loop||c()}),n("slidesLengthChange",()=>{e.params.loop&&(u(),c())}),n("snapGridLengthChange",()=>{e.params.loop||(u(),c())}),n("destroy",()=>{p()}),n("enable disable",()=>{let{$el:h}=e.pagination;h&&h[e.enabled?"removeClass":"addClass"](e.params.pagination.lockClass)}),n("lock unlock",()=>{c()}),n("click",(h,g)=>{let b=g.target,{$el:v}=e.pagination;if(e.params.pagination.el&&e.params.pagination.hideOnClick&&v&&v.length>0&&!M(b).hasClass(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;let A=v.hasClass(e.params.pagination.hiddenClass);i(A===!0?"paginationShow":"paginationHide"),v.toggleClass(e.params.pagination.hiddenClass)}});let m=()=>{e.$el.removeClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.removeClass(e.params.pagination.paginationDisabledClass),d(),u(),c()},y=()=>{e.$el.addClass(e.params.pagination.paginationDisabledClass),e.pagination.$el&&e.pagination.$el.addClass(e.params.pagination.paginationDisabledClass),p()};Object.assign(e.pagination,{enable:m,disable:y,render:u,update:c,init:d,destroy:p})}var Ec=F(()=>{oe();Xr();qn()});function Zr({swiper:e,extendParams:t,on:n,emit:i}){let r=te(),o=!1,a=null,l=null,s,c,u,d;t({scrollbar:{el:null,dragSize:"auto",hide:!1,draggable:!1,snapOnRelease:!0,lockClass:"swiper-scrollbar-lock",dragClass:"swiper-scrollbar-drag",scrollbarDisabledClass:"swiper-scrollbar-disabled",horizontalClass:"swiper-scrollbar-horizontal",verticalClass:"swiper-scrollbar-vertical"}}),e.scrollbar={el:null,dragEl:null,$el:null,$dragEl:null};function p(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:S,rtlTranslate:x,progress:I}=e,{$dragEl:H,$el:W}=S,E=e.params.scrollbar,L=c,_=(u-c)*I;x?(_=-_,_>0?(L=c-_,_=0):-_+c>u&&(L=u+_)):_<0?(L=c+_,_=0):_+c>u&&(L=u-_),e.isHorizontal()?(H.transform(`translate3d(${_}px, 0, 0)`),H[0].style.width=`${L}px`):(H.transform(`translate3d(0px, ${_}px, 0)`),H[0].style.height=`${L}px`),E.hide&&(clearTimeout(a),W[0].style.opacity=1,a=setTimeout(()=>{W[0].style.opacity=0,W.transition(400)},1e3))}function m(S){!e.params.scrollbar.el||!e.scrollbar.el||e.scrollbar.$dragEl.transition(S)}function y(){if(!e.params.scrollbar.el||!e.scrollbar.el)return;let{scrollbar:S}=e,{$dragEl:x,$el:I}=S;x[0].style.width="",x[0].style.height="",u=e.isHorizontal()?I[0].offsetWidth:I[0].offsetHeight,d=e.size/(e.virtualSize+e.params.slidesOffsetBefore-(e.params.centeredSlides?e.snapGrid[0]:0)),e.params.scrollbar.dragSize==="auto"?c=u*d:c=parseInt(e.params.scrollbar.dragSize,10),e.isHorizontal()?x[0].style.width=`${c}px`:x[0].style.height=`${c}px`,d>=1?I[0].style.display="none":I[0].style.display="",e.params.scrollbar.hide&&(I[0].style.opacity=0),e.params.watchOverflow&&e.enabled&&S.$el[e.isLocked?"addClass":"removeClass"](e.params.scrollbar.lockClass)}function h(S){return e.isHorizontal()?S.type==="touchstart"||S.type==="touchmove"?S.targetTouches[0].clientX:S.clientX:S.type==="touchstart"||S.type==="touchmove"?S.targetTouches[0].clientY:S.clientY}function g(S){let{scrollbar:x,rtlTranslate:I}=e,{$el:H}=x,W;W=(h(S)-H.offset()[e.isHorizontal()?"left":"top"]-(s!==null?s:c/2))/(u-c),W=Math.max(Math.min(W,1),0),I&&(W=1-W);let E=e.minTranslate()+(e.maxTranslate()-e.minTranslate())*W;e.updateProgress(E),e.setTranslate(E),e.updateActiveIndex(),e.updateSlidesClasses()}function b(S){let x=e.params.scrollbar,{scrollbar:I,$wrapperEl:H}=e,{$el:W,$dragEl:E}=I;o=!0,s=S.target===E[0]||S.target===E?h(S)-S.target.getBoundingClientRect()[e.isHorizontal()?"left":"top"]:null,S.preventDefault(),S.stopPropagation(),H.transition(100),E.transition(100),g(S),clearTimeout(l),W.transition(0),x.hide&&W.css("opacity",1),e.params.cssMode&&e.$wrapperEl.css("scroll-snap-type","none"),i("scrollbarDragStart",S)}function v(S){let{scrollbar:x,$wrapperEl:I}=e,{$el:H,$dragEl:W}=x;!o||(S.preventDefault?S.preventDefault():S.returnValue=!1,g(S),I.transition(0),H.transition(0),W.transition(0),i("scrollbarDragMove",S))}function A(S){let x=e.params.scrollbar,{scrollbar:I,$wrapperEl:H}=e,{$el:W}=I;!o||(o=!1,e.params.cssMode&&(e.$wrapperEl.css("scroll-snap-type",""),H.transition("")),x.hide&&(clearTimeout(l),l=Pe(()=>{W.css("opacity",0),W.transition(400)},1e3)),i("scrollbarDragEnd",S),x.snapOnRelease&&e.slideToClosest())}function B(S){let{scrollbar:x,touchEventsTouch:I,touchEventsDesktop:H,params:W,support:E}=e,L=x.$el;if(!L)return;let _=L[0],K=E.passiveListener&&W.passiveListeners?{passive:!1,capture:!1}:!1,ie=E.passiveListener&&W.passiveListeners?{passive:!0,capture:!1}:!1;if(!_)return;let ke=S==="on"?"addEventListener":"removeEventListener";E.touch?(_[ke](I.start,b,K),_[ke](I.move,v,K),_[ke](I.end,A,ie)):(_[ke](H.start,b,K),r[ke](H.move,v,K),r[ke](H.end,A,ie))}function P(){!e.params.scrollbar.el||!e.scrollbar.el||B("on")}function O(){!e.params.scrollbar.el||!e.scrollbar.el||B("off")}function k(){let{scrollbar:S,$el:x}=e;e.params.scrollbar=Ot(e,e.originalParams.scrollbar,e.params.scrollbar,{el:"swiper-scrollbar"});let I=e.params.scrollbar;if(!I.el)return;let H=M(I.el);e.params.uniqueNavElements&&typeof I.el=="string"&&H.length>1&&x.find(I.el).length===1&&(H=x.find(I.el)),H.addClass(e.isHorizontal()?I.horizontalClass:I.verticalClass);let W=H.find(`.${e.params.scrollbar.dragClass}`);W.length===0&&(W=M(`<div class="${e.params.scrollbar.dragClass}"></div>`),H.append(W)),Object.assign(S,{$el:H,el:H[0],$dragEl:W,dragEl:W[0]}),I.draggable&&P(),H&&H[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}function R(){let S=e.params.scrollbar,x=e.scrollbar.$el;x&&x.removeClass(e.isHorizontal()?S.horizontalClass:S.verticalClass),O()}n("init",()=>{e.params.scrollbar.enabled===!1?D():(k(),y(),p())}),n("update resize observerUpdate lock unlock",()=>{y()}),n("setTranslate",()=>{p()}),n("setTransition",(S,x)=>{m(x)}),n("enable disable",()=>{let{$el:S}=e.scrollbar;S&&S[e.enabled?"removeClass":"addClass"](e.params.scrollbar.lockClass)}),n("destroy",()=>{R()});let N=()=>{e.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.removeClass(e.params.scrollbar.scrollbarDisabledClass),k(),y(),p()},D=()=>{e.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),e.scrollbar.$el&&e.scrollbar.$el.addClass(e.params.scrollbar.scrollbarDisabledClass),R()};Object.assign(e.scrollbar,{enable:N,disable:D,updateSize:y,setTranslate:p,init:k,destroy:R})}var Ic=F(()=>{le();oe();pe();qn()});function eo({swiper:e,extendParams:t,on:n}){t({parallax:{enabled:!1}});let i=(a,l)=>{let{rtl:s}=e,c=M(a),u=s?-1:1,d=c.attr("data-swiper-parallax")||"0",p=c.attr("data-swiper-parallax-x"),m=c.attr("data-swiper-parallax-y"),y=c.attr("data-swiper-parallax-scale"),h=c.attr("data-swiper-parallax-opacity");if(p||m?(p=p||"0",m=m||"0"):e.isHorizontal()?(p=d,m="0"):(m=d,p="0"),p.indexOf("%")>=0?p=`${parseInt(p,10)*l*u}%`:p=`${p*l*u}px`,m.indexOf("%")>=0?m=`${parseInt(m,10)*l}%`:m=`${m*l}px`,typeof h<"u"&&h!==null){let g=h-(h-1)*(1-Math.abs(l));c[0].style.opacity=g}if(typeof y>"u"||y===null)c.transform(`translate3d(${p}, ${m}, 0px)`);else{let g=y-(y-1)*(1-Math.abs(l));c.transform(`translate3d(${p}, ${m}, 0px) scale(${g})`)}},r=()=>{let{$el:a,slides:l,progress:s,snapGrid:c}=e;a.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(u=>{i(u,s)}),l.each((u,d)=>{let p=u.progress;e.params.slidesPerGroup>1&&e.params.slidesPerView!=="auto"&&(p+=Math.ceil(d/2)-s*(c.length-1)),p=Math.min(Math.max(p,-1),1),M(u).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(m=>{i(m,p)})})},o=(a=e.params.speed)=>{let{$el:l}=e;l.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(s=>{let c=M(s),u=parseInt(c.attr("data-swiper-parallax-duration"),10)||a;a===0&&(u=0),c.transition(u)})};n("beforeInit",()=>{!e.params.parallax.enabled||(e.params.watchSlidesProgress=!0,e.originalParams.watchSlidesProgress=!0)}),n("init",()=>{!e.params.parallax.enabled||r()}),n("setTranslate",()=>{!e.params.parallax.enabled||r()}),n("setTransition",(a,l)=>{!e.params.parallax.enabled||o(l)})}var wc=F(()=>{oe()});function to({swiper:e,extendParams:t,on:n,emit:i}){let r=U();t({zoom:{enabled:!1,maxRatio:3,minRatio:1,toggle:!0,containerClass:"swiper-zoom-container",zoomedSlideClass:"swiper-slide-zoomed"}}),e.zoom={enabled:!1};let o=1,a=!1,l,s,c,u={$slideEl:void 0,slideWidth:void 0,slideHeight:void 0,$imageEl:void 0,$imageWrapEl:void 0,maxRatio:3},d={isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},p={x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},m=1;Object.defineProperty(e.zoom,"scale",{get(){return m},set(E){if(m!==E){let L=u.$imageEl?u.$imageEl[0]:void 0,_=u.$slideEl?u.$slideEl[0]:void 0;i("zoomChange",E,L,_)}m=E}});function y(E){if(E.targetTouches.length<2)return 1;let L=E.targetTouches[0].pageX,_=E.targetTouches[0].pageY,K=E.targetTouches[1].pageX,ie=E.targetTouches[1].pageY;return Math.sqrt((K-L)**2+(ie-_)**2)}function h(E){let L=e.support,_=e.params.zoom;if(s=!1,c=!1,!L.gestures){if(E.type!=="touchstart"||E.type==="touchstart"&&E.targetTouches.length<2)return;s=!0,u.scaleStart=y(E)}if((!u.$slideEl||!u.$slideEl.length)&&(u.$slideEl=M(E.target).closest(`.${e.params.slideClass}`),u.$slideEl.length===0&&(u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${_.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${_.containerClass}`),u.maxRatio=u.$imageWrapEl.attr("data-swiper-zoom")||_.maxRatio,u.$imageWrapEl.length===0)){u.$imageEl=void 0;return}u.$imageEl&&u.$imageEl.transition(0),a=!0}function g(E){let L=e.support,_=e.params.zoom,K=e.zoom;if(!L.gestures){if(E.type!=="touchmove"||E.type==="touchmove"&&E.targetTouches.length<2)return;c=!0,u.scaleMove=y(E)}if(!u.$imageEl||u.$imageEl.length===0){E.type==="gesturechange"&&h(E);return}L.gestures?K.scale=E.scale*o:K.scale=u.scaleMove/u.scaleStart*o,K.scale>u.maxRatio&&(K.scale=u.maxRatio-1+(K.scale-u.maxRatio+1)**.5),K.scale<_.minRatio&&(K.scale=_.minRatio+1-(_.minRatio-K.scale+1)**.5),u.$imageEl.transform(`translate3d(0,0,0) scale(${K.scale})`)}function b(E){let L=e.device,_=e.support,K=e.params.zoom,ie=e.zoom;if(!_.gestures){if(!s||!c||E.type!=="touchend"||E.type==="touchend"&&E.changedTouches.length<2&&!L.android)return;s=!1,c=!1}!u.$imageEl||u.$imageEl.length===0||(ie.scale=Math.max(Math.min(ie.scale,u.maxRatio),K.minRatio),u.$imageEl.transition(e.params.speed).transform(`translate3d(0,0,0) scale(${ie.scale})`),o=ie.scale,a=!1,ie.scale===1&&(u.$slideEl=void 0))}function v(E){let L=e.device;!u.$imageEl||u.$imageEl.length===0||d.isTouched||(L.android&&E.cancelable&&E.preventDefault(),d.isTouched=!0,d.touchesStart.x=E.type==="touchstart"?E.targetTouches[0].pageX:E.pageX,d.touchesStart.y=E.type==="touchstart"?E.targetTouches[0].pageY:E.pageY)}function A(E){let L=e.zoom;if(!u.$imageEl||u.$imageEl.length===0||(e.allowClick=!1,!d.isTouched||!u.$slideEl))return;d.isMoved||(d.width=u.$imageEl[0].offsetWidth,d.height=u.$imageEl[0].offsetHeight,d.startX=fn(u.$imageWrapEl[0],"x")||0,d.startY=fn(u.$imageWrapEl[0],"y")||0,u.slideWidth=u.$slideEl[0].offsetWidth,u.slideHeight=u.$slideEl[0].offsetHeight,u.$imageWrapEl.transition(0));let _=d.width*L.scale,K=d.height*L.scale;if(!(_<u.slideWidth&&K<u.slideHeight)){if(d.minX=Math.min(u.slideWidth/2-_/2,0),d.maxX=-d.minX,d.minY=Math.min(u.slideHeight/2-K/2,0),d.maxY=-d.minY,d.touchesCurrent.x=E.type==="touchmove"?E.targetTouches[0].pageX:E.pageX,d.touchesCurrent.y=E.type==="touchmove"?E.targetTouches[0].pageY:E.pageY,!d.isMoved&&!a){if(e.isHorizontal()&&(Math.floor(d.minX)===Math.floor(d.startX)&&d.touchesCurrent.x<d.touchesStart.x||Math.floor(d.maxX)===Math.floor(d.startX)&&d.touchesCurrent.x>d.touchesStart.x)){d.isTouched=!1;return}if(!e.isHorizontal()&&(Math.floor(d.minY)===Math.floor(d.startY)&&d.touchesCurrent.y<d.touchesStart.y||Math.floor(d.maxY)===Math.floor(d.startY)&&d.touchesCurrent.y>d.touchesStart.y)){d.isTouched=!1;return}}E.cancelable&&E.preventDefault(),E.stopPropagation(),d.isMoved=!0,d.currentX=d.touchesCurrent.x-d.touchesStart.x+d.startX,d.currentY=d.touchesCurrent.y-d.touchesStart.y+d.startY,d.currentX<d.minX&&(d.currentX=d.minX+1-(d.minX-d.currentX+1)**.8),d.currentX>d.maxX&&(d.currentX=d.maxX-1+(d.currentX-d.maxX+1)**.8),d.currentY<d.minY&&(d.currentY=d.minY+1-(d.minY-d.currentY+1)**.8),d.currentY>d.maxY&&(d.currentY=d.maxY-1+(d.currentY-d.maxY+1)**.8),p.prevPositionX||(p.prevPositionX=d.touchesCurrent.x),p.prevPositionY||(p.prevPositionY=d.touchesCurrent.y),p.prevTime||(p.prevTime=Date.now()),p.x=(d.touchesCurrent.x-p.prevPositionX)/(Date.now()-p.prevTime)/2,p.y=(d.touchesCurrent.y-p.prevPositionY)/(Date.now()-p.prevTime)/2,Math.abs(d.touchesCurrent.x-p.prevPositionX)<2&&(p.x=0),Math.abs(d.touchesCurrent.y-p.prevPositionY)<2&&(p.y=0),p.prevPositionX=d.touchesCurrent.x,p.prevPositionY=d.touchesCurrent.y,p.prevTime=Date.now(),u.$imageWrapEl.transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`)}}function B(){let E=e.zoom;if(!u.$imageEl||u.$imageEl.length===0)return;if(!d.isTouched||!d.isMoved){d.isTouched=!1,d.isMoved=!1;return}d.isTouched=!1,d.isMoved=!1;let L=300,_=300,K=p.x*L,ie=d.currentX+K,ke=p.y*_,Pt=d.currentY+ke;p.x!==0&&(L=Math.abs((ie-d.currentX)/p.x)),p.y!==0&&(_=Math.abs((Pt-d.currentY)/p.y));let An=Math.max(L,_);d.currentX=ie,d.currentY=Pt;let xn=d.width*E.scale,pt=d.height*E.scale;d.minX=Math.min(u.slideWidth/2-xn/2,0),d.maxX=-d.minX,d.minY=Math.min(u.slideHeight/2-pt/2,0),d.maxY=-d.minY,d.currentX=Math.max(Math.min(d.currentX,d.maxX),d.minX),d.currentY=Math.max(Math.min(d.currentY,d.maxY),d.minY),u.$imageWrapEl.transition(An).transform(`translate3d(${d.currentX}px, ${d.currentY}px,0)`)}function P(){let E=e.zoom;u.$slideEl&&e.previousIndex!==e.activeIndex&&(u.$imageEl&&u.$imageEl.transform("translate3d(0,0,0) scale(1)"),u.$imageWrapEl&&u.$imageWrapEl.transform("translate3d(0,0,0)"),E.scale=1,o=1,u.$slideEl=void 0,u.$imageEl=void 0,u.$imageWrapEl=void 0)}function O(E){let L=e.zoom,_=e.params.zoom;if(u.$slideEl||(E&&E.target&&(u.$slideEl=M(E.target).closest(`.${e.params.slideClass}`)),u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex)),u.$imageEl=u.$slideEl.find(`.${_.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${_.containerClass}`)),!u.$imageEl||u.$imageEl.length===0||!u.$imageWrapEl||u.$imageWrapEl.length===0)return;e.params.cssMode&&(e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.touchAction="none"),u.$slideEl.addClass(`${_.zoomedSlideClass}`);let K,ie,ke,Pt,An,xn,pt,Ft,Uo,Qo,Jo,Xo,Sn,En,li,ci,ui,di;typeof d.touchesStart.x>"u"&&E?(K=E.type==="touchend"?E.changedTouches[0].pageX:E.pageX,ie=E.type==="touchend"?E.changedTouches[0].pageY:E.pageY):(K=d.touchesStart.x,ie=d.touchesStart.y),L.scale=u.$imageWrapEl.attr("data-swiper-zoom")||_.maxRatio,o=u.$imageWrapEl.attr("data-swiper-zoom")||_.maxRatio,E?(ui=u.$slideEl[0].offsetWidth,di=u.$slideEl[0].offsetHeight,ke=u.$slideEl.offset().left+r.scrollX,Pt=u.$slideEl.offset().top+r.scrollY,An=ke+ui/2-K,xn=Pt+di/2-ie,Uo=u.$imageEl[0].offsetWidth,Qo=u.$imageEl[0].offsetHeight,Jo=Uo*L.scale,Xo=Qo*L.scale,Sn=Math.min(ui/2-Jo/2,0),En=Math.min(di/2-Xo/2,0),li=-Sn,ci=-En,pt=An*L.scale,Ft=xn*L.scale,pt<Sn&&(pt=Sn),pt>li&&(pt=li),Ft<En&&(Ft=En),Ft>ci&&(Ft=ci)):(pt=0,Ft=0),u.$imageWrapEl.transition(300).transform(`translate3d(${pt}px, ${Ft}px,0)`),u.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${L.scale})`)}function k(){let E=e.zoom,L=e.params.zoom;u.$slideEl||(e.params.virtual&&e.params.virtual.enabled&&e.virtual?u.$slideEl=e.$wrapperEl.children(`.${e.params.slideActiveClass}`):u.$slideEl=e.slides.eq(e.activeIndex),u.$imageEl=u.$slideEl.find(`.${L.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0),u.$imageWrapEl=u.$imageEl.parent(`.${L.containerClass}`)),!(!u.$imageEl||u.$imageEl.length===0||!u.$imageWrapEl||u.$imageWrapEl.length===0)&&(e.params.cssMode&&(e.wrapperEl.style.overflow="",e.wrapperEl.style.touchAction=""),E.scale=1,o=1,u.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),u.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),u.$slideEl.removeClass(`${L.zoomedSlideClass}`),u.$slideEl=void 0)}function R(E){let L=e.zoom;L.scale&&L.scale!==1?k():O(E)}function N(){let E=e.support,L=e.touchEvents.start==="touchstart"&&E.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1,_=E.passiveListener?{passive:!1,capture:!0}:!0;return{passiveListener:L,activeListenerWithCapture:_}}function D(){return`.${e.params.slideClass}`}function S(E){let{passiveListener:L}=N(),_=D();e.$wrapperEl[E]("gesturestart",_,h,L),e.$wrapperEl[E]("gesturechange",_,g,L),e.$wrapperEl[E]("gestureend",_,b,L)}function x(){l||(l=!0,S("on"))}function I(){!l||(l=!1,S("off"))}function H(){let E=e.zoom;if(E.enabled)return;E.enabled=!0;let L=e.support,{passiveListener:_,activeListenerWithCapture:K}=N(),ie=D();L.gestures?(e.$wrapperEl.on(e.touchEvents.start,x,_),e.$wrapperEl.on(e.touchEvents.end,I,_)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.on(e.touchEvents.start,ie,h,_),e.$wrapperEl.on(e.touchEvents.move,ie,g,K),e.$wrapperEl.on(e.touchEvents.end,ie,b,_),e.touchEvents.cancel&&e.$wrapperEl.on(e.touchEvents.cancel,ie,b,_)),e.$wrapperEl.on(e.touchEvents.move,`.${e.params.zoom.containerClass}`,A,K)}function W(){let E=e.zoom;if(!E.enabled)return;let L=e.support;E.enabled=!1;let{passiveListener:_,activeListenerWithCapture:K}=N(),ie=D();L.gestures?(e.$wrapperEl.off(e.touchEvents.start,x,_),e.$wrapperEl.off(e.touchEvents.end,I,_)):e.touchEvents.start==="touchstart"&&(e.$wrapperEl.off(e.touchEvents.start,ie,h,_),e.$wrapperEl.off(e.touchEvents.move,ie,g,K),e.$wrapperEl.off(e.touchEvents.end,ie,b,_),e.touchEvents.cancel&&e.$wrapperEl.off(e.touchEvents.cancel,ie,b,_)),e.$wrapperEl.off(e.touchEvents.move,`.${e.params.zoom.containerClass}`,A,K)}n("init",()=>{e.params.zoom.enabled&&H()}),n("destroy",()=>{W()}),n("touchStart",(E,L)=>{!e.zoom.enabled||v(L)}),n("touchEnd",(E,L)=>{!e.zoom.enabled||B(L)}),n("doubleTap",(E,L)=>{!e.animating&&e.params.zoom.enabled&&e.zoom.enabled&&e.params.zoom.toggle&&R(L)}),n("transitionEnd",()=>{e.zoom.enabled&&e.params.zoom.enabled&&P()}),n("slideChange",()=>{e.zoom.enabled&&e.params.zoom.enabled&&e.params.cssMode&&P()}),Object.assign(e.zoom,{enable:H,disable:W,in:O,out:k,toggle:R})}var Tc=F(()=>{le();oe();pe()});function no({swiper:e,extendParams:t,on:n,emit:i}){t({lazy:{checkInView:!1,enabled:!1,loadPrevNext:!1,loadPrevNextAmount:1,loadOnTransitionStart:!1,scrollingElement:"",elementClass:"swiper-lazy",loadingClass:"swiper-lazy-loading",loadedClass:"swiper-lazy-loaded",preloaderClass:"swiper-lazy-preloader"}}),e.lazy={};let r=!1,o=!1;function a(c,u=!0){let d=e.params.lazy;if(typeof c>"u"||e.slides.length===0)return;let m=e.virtual&&e.params.virtual.enabled?e.$wrapperEl.children(`.${e.params.slideClass}[data-swiper-slide-index="${c}"]`):e.slides.eq(c),y=m.find(`.${d.elementClass}:not(.${d.loadedClass}):not(.${d.loadingClass})`);m.hasClass(d.elementClass)&&!m.hasClass(d.loadedClass)&&!m.hasClass(d.loadingClass)&&y.push(m[0]),y.length!==0&&y.each(h=>{let g=M(h);g.addClass(d.loadingClass);let b=g.attr("data-background"),v=g.attr("data-src"),A=g.attr("data-srcset"),B=g.attr("data-sizes"),P=g.parent("picture");e.loadImage(g[0],v||b,A,B,!1,()=>{if(!(typeof e>"u"||e===null||!e||e&&!e.params||e.destroyed)){if(b?(g.css("background-image",`url("${b}")`),g.removeAttr("data-background")):(A&&(g.attr("srcset",A),g.removeAttr("data-srcset")),B&&(g.attr("sizes",B),g.removeAttr("data-sizes")),P.length&&P.children("source").each(O=>{let k=M(O);k.attr("data-srcset")&&(k.attr("srcset",k.attr("data-srcset")),k.removeAttr("data-srcset"))}),v&&(g.attr("src",v),g.removeAttr("data-src"))),g.addClass(d.loadedClass).removeClass(d.loadingClass),m.find(`.${d.preloaderClass}`).remove(),e.params.loop&&u){let O=m.attr("data-swiper-slide-index");if(m.hasClass(e.params.slideDuplicateClass)){let k=e.$wrapperEl.children(`[data-swiper-slide-index="${O}"]:not(.${e.params.slideDuplicateClass})`);a(k.index(),!1)}else{let k=e.$wrapperEl.children(`.${e.params.slideDuplicateClass}[data-swiper-slide-index="${O}"]`);a(k.index(),!1)}}i("lazyImageReady",m[0],g[0]),e.params.autoHeight&&e.updateAutoHeight()}}),i("lazyImageLoad",m[0],g[0])})}function l(){let{$wrapperEl:c,params:u,slides:d,activeIndex:p}=e,m=e.virtual&&u.virtual.enabled,y=u.lazy,h=u.slidesPerView;h==="auto"&&(h=0);function g(v){if(m){if(c.children(`.${u.slideClass}[data-swiper-slide-index="${v}"]`).length)return!0}else if(d[v])return!0;return!1}function b(v){return m?M(v).attr("data-swiper-slide-index"):M(v).index()}if(o||(o=!0),e.params.watchSlidesProgress)c.children(`.${u.slideVisibleClass}`).each(v=>{let A=m?M(v).attr("data-swiper-slide-index"):M(v).index();a(A)});else if(h>1)for(let v=p;v<p+h;v+=1)g(v)&&a(v);else a(p);if(y.loadPrevNext)if(h>1||y.loadPrevNextAmount&&y.loadPrevNextAmount>1){let v=y.loadPrevNextAmount,A=Math.ceil(h),B=Math.min(p+A+Math.max(v,A),d.length),P=Math.max(p-Math.max(A,v),0);for(let O=p+A;O<B;O+=1)g(O)&&a(O);for(let O=P;O<p;O+=1)g(O)&&a(O)}else{let v=c.children(`.${u.slideNextClass}`);v.length>0&&a(b(v));let A=c.children(`.${u.slidePrevClass}`);A.length>0&&a(b(A))}}function s(){let c=U();if(!e||e.destroyed)return;let u=e.params.lazy.scrollingElement?M(e.params.lazy.scrollingElement):M(c),d=u[0]===c,p=d?c.innerWidth:u[0].offsetWidth,m=d?c.innerHeight:u[0].offsetHeight,y=e.$el.offset(),{rtlTranslate:h}=e,g=!1;h&&(y.left-=e.$el[0].scrollLeft);let b=[[y.left,y.top],[y.left+e.width,y.top],[y.left,y.top+e.height],[y.left+e.width,y.top+e.height]];for(let A=0;A<b.length;A+=1){let B=b[A];if(B[0]>=0&&B[0]<=p&&B[1]>=0&&B[1]<=m){if(B[0]===0&&B[1]===0)continue;g=!0}}let v=e.touchEvents.start==="touchstart"&&e.support.passiveListener&&e.params.passiveListeners?{passive:!0,capture:!1}:!1;g?(l(),u.off("scroll",s,v)):r||(r=!0,u.on("scroll",s,v))}n("beforeInit",()=>{e.params.lazy.enabled&&e.params.preloadImages&&(e.params.preloadImages=!1)}),n("init",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?s():l())}),n("scroll",()=>{e.params.freeMode&&e.params.freeMode.enabled&&!e.params.freeMode.sticky&&l()}),n("scrollbarDragMove resize _freeModeNoMomentumRelease",()=>{e.params.lazy.enabled&&(e.params.lazy.checkInView?s():l())}),n("transitionStart",()=>{e.params.lazy.enabled&&(e.params.lazy.loadOnTransitionStart||!e.params.lazy.loadOnTransitionStart&&!o)&&(e.params.lazy.checkInView?s():l())}),n("transitionEnd",()=>{e.params.lazy.enabled&&!e.params.lazy.loadOnTransitionStart&&(e.params.lazy.checkInView?s():l())}),n("slideChange",()=>{let{lazy:c,cssMode:u,watchSlidesProgress:d,touchReleaseOnEdges:p,resistanceRatio:m}=e.params;c.enabled&&(u||d&&(p||m===0))&&l()}),n("destroy",()=>{!e.$el||e.$el.find(`.${e.params.lazy.loadingClass}`).removeClass(e.params.lazy.loadingClass)}),Object.assign(e.lazy,{load:l,loadInSlide:a})}var kc=F(()=>{le();oe()});function io({swiper:e,extendParams:t,on:n}){t({controller:{control:void 0,inverse:!1,by:"slide"}}),e.controller={control:void 0};function i(s,c){let u=function(){let y,h,g;return(b,v)=>{for(h=-1,y=b.length;y-h>1;)g=y+h>>1,b[g]<=v?h=g:y=g;return y}}();this.x=s,this.y=c,this.lastIndex=s.length-1;let d,p;return this.interpolate=function(y){return y?(p=u(this.x,y),d=p-1,(y-this.x[d])*(this.y[p]-this.y[d])/(this.x[p]-this.x[d])+this.y[d]):0},this}function r(s){e.controller.spline||(e.controller.spline=e.params.loop?new i(e.slidesGrid,s.slidesGrid):new i(e.snapGrid,s.snapGrid))}function o(s,c){let u=e.controller.control,d,p,m=e.constructor;function y(h){let g=e.rtlTranslate?-e.translate:e.translate;e.params.controller.by==="slide"&&(r(h),p=-e.controller.spline.interpolate(-g)),(!p||e.params.controller.by==="container")&&(d=(h.maxTranslate()-h.minTranslate())/(e.maxTranslate()-e.minTranslate()),p=(g-e.minTranslate())*d+h.minTranslate()),e.params.controller.inverse&&(p=h.maxTranslate()-p),h.updateProgress(p),h.setTranslate(p,e),h.updateActiveIndex(),h.updateSlidesClasses()}if(Array.isArray(u))for(let h=0;h<u.length;h+=1)u[h]!==c&&u[h]instanceof m&&y(u[h]);else u instanceof m&&c!==u&&y(u)}function a(s,c){let u=e.constructor,d=e.controller.control,p;function m(y){y.setTransition(s,e),s!==0&&(y.transitionStart(),y.params.autoHeight&&Pe(()=>{y.updateAutoHeight()}),y.$wrapperEl.transitionEnd(()=>{!d||(y.params.loop&&e.params.controller.by==="slide"&&y.loopFix(),y.transitionEnd())}))}if(Array.isArray(d))for(p=0;p<d.length;p+=1)d[p]!==c&&d[p]instanceof u&&m(d[p]);else d instanceof u&&c!==d&&m(d)}function l(){!e.controller.control||e.controller.spline&&(e.controller.spline=void 0,delete e.controller.spline)}n("beforeInit",()=>{e.controller.control=e.params.controller.control}),n("update",()=>{l()}),n("resize",()=>{l()}),n("observerUpdate",()=>{l()}),n("setTranslate",(s,c,u)=>{!e.controller.control||e.controller.setTranslate(c,u)}),n("setTransition",(s,c,u)=>{!e.controller.control||e.controller.setTransition(c,u)}),Object.assign(e.controller,{setTranslate:o,setTransition:a})}var Pc=F(()=>{pe()});function ro({swiper:e,extendParams:t,on:n}){t({a11y:{enabled:!0,notificationClass:"swiper-notification",prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",slideLabelMessage:"{{index}} / {{slidesLength}}",containerMessage:null,containerRoleDescriptionMessage:null,itemRoleDescriptionMessage:null,slideRole:"group",id:null}}),e.a11y={clicked:!1};let i=null;function r(x){let I=i;I.length!==0&&(I.html(""),I.html(x))}function o(x=16){let I=()=>Math.round(16*Math.random()).toString(16);return"x".repeat(x).replace(/x/g,I)}function a(x){x.attr("tabIndex","0")}function l(x){x.attr("tabIndex","-1")}function s(x,I){x.attr("role",I)}function c(x,I){x.attr("aria-roledescription",I)}function u(x,I){x.attr("aria-controls",I)}function d(x,I){x.attr("aria-label",I)}function p(x,I){x.attr("id",I)}function m(x,I){x.attr("aria-live",I)}function y(x){x.attr("aria-disabled",!0)}function h(x){x.attr("aria-disabled",!1)}function g(x){if(x.keyCode!==13&&x.keyCode!==32)return;let I=e.params.a11y,H=M(x.target);e.navigation&&e.navigation.$nextEl&&H.is(e.navigation.$nextEl)&&(e.isEnd&&!e.params.loop||e.slideNext(),e.isEnd?r(I.lastSlideMessage):r(I.nextSlideMessage)),e.navigation&&e.navigation.$prevEl&&H.is(e.navigation.$prevEl)&&(e.isBeginning&&!e.params.loop||e.slidePrev(),e.isBeginning?r(I.firstSlideMessage):r(I.prevSlideMessage)),e.pagination&&H.is(qe(e.params.pagination.bulletClass))&&H[0].click()}function b(){if(e.params.loop||e.params.rewind||!e.navigation)return;let{$nextEl:x,$prevEl:I}=e.navigation;I&&I.length>0&&(e.isBeginning?(y(I),l(I)):(h(I),a(I))),x&&x.length>0&&(e.isEnd?(y(x),l(x)):(h(x),a(x)))}function v(){return e.pagination&&e.pagination.bullets&&e.pagination.bullets.length}function A(){return v()&&e.params.pagination.clickable}function B(){let x=e.params.a11y;!v()||e.pagination.bullets.each(I=>{let H=M(I);e.params.pagination.clickable&&(a(H),e.params.pagination.renderBullet||(s(H,"button"),d(H,x.paginationBulletMessage.replace(/\{\{index\}\}/,H.index()+1)))),H.is(`.${e.params.pagination.bulletActiveClass}`)?H.attr("aria-current","true"):H.removeAttr("aria-current")})}let P=(x,I,H)=>{a(x),x[0].tagName!=="BUTTON"&&(s(x,"button"),x.on("keydown",g)),d(x,H),u(x,I)},O=()=>{e.a11y.clicked=!0},k=()=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.destroyed||(e.a11y.clicked=!1)})})},R=x=>{if(e.a11y.clicked)return;let I=x.target.closest(`.${e.params.slideClass}`);if(!I||!e.slides.includes(I))return;let H=e.slides.indexOf(I)===e.activeIndex,W=e.params.watchSlidesProgress&&e.visibleSlides&&e.visibleSlides.includes(I);H||W||x.sourceCapabilities&&x.sourceCapabilities.firesTouchEvents||(e.isHorizontal()?e.el.scrollLeft=0:e.el.scrollTop=0,e.slideTo(e.slides.indexOf(I),0))},N=()=>{let x=e.params.a11y;x.itemRoleDescriptionMessage&&c(M(e.slides),x.itemRoleDescriptionMessage),x.slideRole&&s(M(e.slides),x.slideRole);let I=e.params.loop?e.slides.filter(H=>!H.classList.contains(e.params.slideDuplicateClass)).length:e.slides.length;x.slideLabelMessage&&e.slides.each((H,W)=>{let E=M(H),L=e.params.loop?parseInt(E.attr("data-swiper-slide-index"),10):W,_=x.slideLabelMessage.replace(/\{\{index\}\}/,L+1).replace(/\{\{slidesLength\}\}/,I);d(E,_)})},D=()=>{let x=e.params.a11y;e.$el.append(i);let I=e.$el;x.containerRoleDescriptionMessage&&c(I,x.containerRoleDescriptionMessage),x.containerMessage&&d(I,x.containerMessage);let H=e.$wrapperEl,W=x.id||H.attr("id")||`swiper-wrapper-${o(16)}`,E=e.params.autoplay&&e.params.autoplay.enabled?"off":"polite";p(H,W),m(H,E),N();let L,_;e.navigation&&e.navigation.$nextEl&&(L=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(_=e.navigation.$prevEl),L&&L.length&&P(L,W,x.nextSlideMessage),_&&_.length&&P(_,W,x.prevSlideMessage),A()&&e.pagination.$el.on("keydown",qe(e.params.pagination.bulletClass),g),e.$el.on("focus",R,!0),e.$el.on("pointerdown",O,!0),e.$el.on("pointerup",k,!0)};function S(){i&&i.length>0&&i.remove();let x,I;e.navigation&&e.navigation.$nextEl&&(x=e.navigation.$nextEl),e.navigation&&e.navigation.$prevEl&&(I=e.navigation.$prevEl),x&&x.off("keydown",g),I&&I.off("keydown",g),A()&&e.pagination.$el.off("keydown",qe(e.params.pagination.bulletClass),g),e.$el.off("focus",R,!0),e.$el.off("pointerdown",O,!0),e.$el.off("pointerup",k,!0)}n("beforeInit",()=>{i=M(`<span class="${e.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)}),n("afterInit",()=>{!e.params.a11y.enabled||D()}),n("slidesLengthChange snapGridLengthChange slidesGridLengthChange",()=>{!e.params.a11y.enabled||N()}),n("fromEdge toEdge afterInit lock unlock",()=>{!e.params.a11y.enabled||b()}),n("paginationUpdate",()=>{!e.params.a11y.enabled||B()}),n("destroy",()=>{!e.params.a11y.enabled||S()})}var Fc=F(()=>{Xr();oe()});function oo({swiper:e,extendParams:t,on:n}){t({history:{enabled:!1,root:"",replaceState:!1,key:"slides",keepQuery:!1}});let i=!1,r={},o=p=>p.toString().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,""),a=p=>{let m=U(),y;p?y=new URL(p):y=m.location;let h=y.pathname.slice(1).split("/").filter(A=>A!==""),g=h.length,b=h[g-2],v=h[g-1];return{key:b,value:v}},l=(p,m)=>{let y=U();if(!i||!e.params.history.enabled)return;let h;e.params.url?h=new URL(e.params.url):h=y.location;let g=e.slides.eq(m),b=o(g.attr("data-history"));if(e.params.history.root.length>0){let A=e.params.history.root;A[A.length-1]==="/"&&(A=A.slice(0,A.length-1)),b=`${A}/${p}/${b}`}else h.pathname.includes(p)||(b=`${p}/${b}`);e.params.history.keepQuery&&(b+=h.search);let v=y.history.state;v&&v.value===b||(e.params.history.replaceState?y.history.replaceState({value:b},null,b):y.history.pushState({value:b},null,b))},s=(p,m,y)=>{if(m)for(let h=0,g=e.slides.length;h<g;h+=1){let b=e.slides.eq(h);if(o(b.attr("data-history"))===m&&!b.hasClass(e.params.slideDuplicateClass)){let A=b.index();e.slideTo(A,p,y)}}else e.slideTo(0,p,y)},c=()=>{r=a(e.params.url),s(e.params.speed,r.value,!1)},u=()=>{let p=U();if(!!e.params.history){if(!p.history||!p.history.pushState){e.params.history.enabled=!1,e.params.hashNavigation.enabled=!0;return}i=!0,r=a(e.params.url),!(!r.key&&!r.value)&&(s(0,r.value,e.params.runCallbacksOnInit),e.params.history.replaceState||p.addEventListener("popstate",c))}},d=()=>{let p=U();e.params.history.replaceState||p.removeEventListener("popstate",c)};n("init",()=>{e.params.history.enabled&&u()}),n("destroy",()=>{e.params.history.enabled&&d()}),n("transitionEnd _freeModeNoMomentumRelease",()=>{i&&l(e.params.history.key,e.activeIndex)}),n("slideChange",()=>{i&&e.params.cssMode&&l(e.params.history.key,e.activeIndex)})}var Bc=F(()=>{le()});function ao({swiper:e,extendParams:t,emit:n,on:i}){let r=!1,o=te(),a=U();t({hashNavigation:{enabled:!1,replaceState:!1,watchState:!1}});let l=()=>{n("hashChange");let d=o.location.hash.replace("#",""),p=e.slides.eq(e.activeIndex).attr("data-hash");if(d!==p){let m=e.$wrapperEl.children(`.${e.params.slideClass}[data-hash="${d}"]`).index();if(typeof m>"u")return;e.slideTo(m)}},s=()=>{if(!(!r||!e.params.hashNavigation.enabled))if(e.params.hashNavigation.replaceState&&a.history&&a.history.replaceState)a.history.replaceState(null,null,`#${e.slides.eq(e.activeIndex).attr("data-hash")}`||""),n("hashSet");else{let d=e.slides.eq(e.activeIndex),p=d.attr("data-hash")||d.attr("data-history");o.location.hash=p||"",n("hashSet")}},c=()=>{if(!e.params.hashNavigation.enabled||e.params.history&&e.params.history.enabled)return;r=!0;let d=o.location.hash.replace("#","");if(d)for(let m=0,y=e.slides.length;m<y;m+=1){let h=e.slides.eq(m);if((h.attr("data-hash")||h.attr("data-history"))===d&&!h.hasClass(e.params.slideDuplicateClass)){let b=h.index();e.slideTo(b,0,e.params.runCallbacksOnInit,!0)}}e.params.hashNavigation.watchState&&M(a).on("hashchange",l)},u=()=>{e.params.hashNavigation.watchState&&M(a).off("hashchange",l)};i("init",()=>{e.params.hashNavigation.enabled&&c()}),i("destroy",()=>{e.params.hashNavigation.enabled&&u()}),i("transitionEnd _freeModeNoMomentumRelease",()=>{r&&s()}),i("slideChange",()=>{r&&e.params.cssMode&&s()})}var Dc=F(()=>{le();oe()});function so({swiper:e,extendParams:t,on:n,emit:i}){let r;e.autoplay={running:!1,paused:!1},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function o(){if(!e.size){e.autoplay.running=!1,e.autoplay.paused=!1;return}let h=e.slides.eq(e.activeIndex),g=e.params.autoplay.delay;h.attr("data-swiper-autoplay")&&(g=h.attr("data-swiper-autoplay")||e.params.autoplay.delay),clearTimeout(r),r=Pe(()=>{let b;e.params.autoplay.reverseDirection?e.params.loop?(e.loopFix(),b=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.isBeginning?e.params.autoplay.stopOnLastSlide?l():(b=e.slideTo(e.slides.length-1,e.params.speed,!0,!0),i("autoplay")):(b=e.slidePrev(e.params.speed,!0,!0),i("autoplay")):e.params.loop?(e.loopFix(),b=e.slideNext(e.params.speed,!0,!0),i("autoplay")):e.isEnd?e.params.autoplay.stopOnLastSlide?l():(b=e.slideTo(0,e.params.speed,!0,!0),i("autoplay")):(b=e.slideNext(e.params.speed,!0,!0),i("autoplay")),(e.params.cssMode&&e.autoplay.running||b===!1)&&o()},g)}function a(){return typeof r<"u"||e.autoplay.running?!1:(e.autoplay.running=!0,i("autoplayStart"),o(),!0)}function l(){return!e.autoplay.running||typeof r>"u"?!1:(r&&(clearTimeout(r),r=void 0),e.autoplay.running=!1,i("autoplayStop"),!0)}function s(h){!e.autoplay.running||e.autoplay.paused||(r&&clearTimeout(r),e.autoplay.paused=!0,h===0||!e.params.autoplay.waitForTransition?(e.autoplay.paused=!1,o()):["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].addEventListener(g,u)}))}function c(){let h=te();h.visibilityState==="hidden"&&e.autoplay.running&&s(),h.visibilityState==="visible"&&e.autoplay.paused&&(o(),e.autoplay.paused=!1)}function u(h){!e||e.destroyed||!e.$wrapperEl||h.target===e.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(g=>{e.$wrapperEl[0].removeEventListener(g,u)}),e.autoplay.paused=!1,e.autoplay.running?o():l())}function d(){e.params.autoplay.disableOnInteraction?l():(i("autoplayPause"),s()),["transitionend","webkitTransitionEnd"].forEach(h=>{e.$wrapperEl[0].removeEventListener(h,u)})}function p(){e.params.autoplay.disableOnInteraction||(e.autoplay.paused=!1,i("autoplayResume"),o())}function m(){e.params.autoplay.pauseOnMouseEnter&&(e.$el.on("mouseenter",d),e.$el.on("mouseleave",p))}function y(){e.$el.off("mouseenter",d),e.$el.off("mouseleave",p)}n("init",()=>{e.params.autoplay.enabled&&(a(),te().addEventListener("visibilitychange",c),m())}),n("beforeTransitionStart",(h,g,b)=>{e.autoplay.running&&(b||!e.params.autoplay.disableOnInteraction?e.autoplay.pause(g):l())}),n("sliderFirstMove",()=>{e.autoplay.running&&(e.params.autoplay.disableOnInteraction?l():s())}),n("touchEnd",()=>{e.params.cssMode&&e.autoplay.paused&&!e.params.autoplay.disableOnInteraction&&o()}),n("destroy",()=>{y(),e.autoplay.running&&l(),te().removeEventListener("visibilitychange",c)}),Object.assign(e.autoplay,{pause:s,run:o,start:a,stop:l})}var Mc=F(()=>{le();pe()});function lo({swiper:e,extendParams:t,on:n}){t({thumbs:{swiper:null,multipleActiveThumbs:!0,autoScrollOffset:0,slideThumbActiveClass:"swiper-slide-thumb-active",thumbsContainerClass:"swiper-thumbs"}});let i=!1,r=!1;e.thumbs={swiper:null};function o(){let s=e.thumbs.swiper;if(!s||s.destroyed)return;let c=s.clickedIndex,u=s.clickedSlide;if(u&&M(u).hasClass(e.params.thumbs.slideThumbActiveClass)||typeof c>"u"||c===null)return;let d;if(s.params.loop?d=parseInt(M(s.clickedSlide).attr("data-swiper-slide-index"),10):d=c,e.params.loop){let p=e.activeIndex;e.slides.eq(p).hasClass(e.params.slideDuplicateClass)&&(e.loopFix(),e._clientLeft=e.$wrapperEl[0].clientLeft,p=e.activeIndex);let m=e.slides.eq(p).prevAll(`[data-swiper-slide-index="${d}"]`).eq(0).index(),y=e.slides.eq(p).nextAll(`[data-swiper-slide-index="${d}"]`).eq(0).index();typeof m>"u"?d=y:typeof y>"u"?d=m:y-p<p-m?d=y:d=m}e.slideTo(d)}function a(){let{thumbs:s}=e.params;if(i)return!1;i=!0;let c=e.constructor;if(s.swiper instanceof c)e.thumbs.swiper=s.swiper,Object.assign(e.thumbs.swiper.originalParams,{watchSlidesProgress:!0,slideToClickedSlide:!1}),Object.assign(e.thumbs.swiper.params,{watchSlidesProgress:!0,slideToClickedSlide:!1});else if(Kt(s.swiper)){let u=Object.assign({},s.swiper);Object.assign(u,{watchSlidesProgress:!0,slideToClickedSlide:!1}),e.thumbs.swiper=new c(u),r=!0}return e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),e.thumbs.swiper.on("tap",o),!0}function l(s){let c=e.thumbs.swiper;if(!c||c.destroyed)return;let u=c.params.slidesPerView==="auto"?c.slidesPerViewDynamic():c.params.slidesPerView,d=1,p=e.params.thumbs.slideThumbActiveClass;if(e.params.slidesPerView>1&&!e.params.centeredSlides&&(d=e.params.slidesPerView),e.params.thumbs.multipleActiveThumbs||(d=1),d=Math.floor(d),c.slides.removeClass(p),c.params.loop||c.params.virtual&&c.params.virtual.enabled)for(let h=0;h<d;h+=1)c.$wrapperEl.children(`[data-swiper-slide-index="${e.realIndex+h}"]`).addClass(p);else for(let h=0;h<d;h+=1)c.slides.eq(e.realIndex+h).addClass(p);let m=e.params.thumbs.autoScrollOffset,y=m&&!c.params.loop;if(e.realIndex!==c.realIndex||y){let h=c.activeIndex,g,b;if(c.params.loop){c.slides.eq(h).hasClass(c.params.slideDuplicateClass)&&(c.loopFix(),c._clientLeft=c.$wrapperEl[0].clientLeft,h=c.activeIndex);let v=c.slides.eq(h).prevAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index(),A=c.slides.eq(h).nextAll(`[data-swiper-slide-index="${e.realIndex}"]`).eq(0).index();typeof v>"u"?g=A:typeof A>"u"?g=v:A-h===h-v?g=c.params.slidesPerGroup>1?A:h:A-h<h-v?g=A:g=v,b=e.activeIndex>e.previousIndex?"next":"prev"}else g=e.realIndex,b=g>e.previousIndex?"next":"prev";y&&(g+=b==="next"?m:-1*m),c.visibleSlidesIndexes&&c.visibleSlidesIndexes.indexOf(g)<0&&(c.params.centeredSlides?g>h?g=g-Math.floor(u/2)+1:g=g+Math.floor(u/2)-1:g>h&&c.params.slidesPerGroup,c.slideTo(g,s?0:void 0))}}n("beforeInit",()=>{let{thumbs:s}=e.params;!s||!s.swiper||(a(),l(!0))}),n("slideChange update resize observerUpdate",()=>{l()}),n("setTransition",(s,c)=>{let u=e.thumbs.swiper;!u||u.destroyed||u.setTransition(c)}),n("beforeDestroy",()=>{let s=e.thumbs.swiper;!s||s.destroyed||r&&s.destroy()}),Object.assign(e.thumbs,{init:a,update:l})}var zc=F(()=>{pe();oe()});function co({swiper:e,extendParams:t,emit:n,once:i}){t({freeMode:{enabled:!1,momentum:!0,momentumRatio:1,momentumBounce:!0,momentumBounceRatio:1,momentumVelocityRatio:1,sticky:!1,minimumVelocity:.02}});function r(){let l=e.getTranslate();e.setTranslate(l),e.setTransition(0),e.touchEventsData.velocities.length=0,e.freeMode.onTouchEnd({currentPos:e.rtl?e.translate:-e.translate})}function o(){let{touchEventsData:l,touches:s}=e;l.velocities.length===0&&l.velocities.push({position:s[e.isHorizontal()?"startX":"startY"],time:l.touchStartTime}),l.velocities.push({position:s[e.isHorizontal()?"currentX":"currentY"],time:he()})}function a({currentPos:l}){let{params:s,$wrapperEl:c,rtlTranslate:u,snapGrid:d,touchEventsData:p}=e,y=he()-p.touchStartTime;if(l<-e.minTranslate()){e.slideTo(e.activeIndex);return}if(l>-e.maxTranslate()){e.slides.length<d.length?e.slideTo(d.length-1):e.slideTo(e.slides.length-1);return}if(s.freeMode.momentum){if(p.velocities.length>1){let O=p.velocities.pop(),k=p.velocities.pop(),R=O.position-k.position,N=O.time-k.time;e.velocity=R/N,e.velocity/=2,Math.abs(e.velocity)<s.freeMode.minimumVelocity&&(e.velocity=0),(N>150||he()-O.time>300)&&(e.velocity=0)}else e.velocity=0;e.velocity*=s.freeMode.momentumVelocityRatio,p.velocities.length=0;let h=1e3*s.freeMode.momentumRatio,g=e.velocity*h,b=e.translate+g;u&&(b=-b);let v=!1,A,B=Math.abs(e.velocity)*20*s.freeMode.momentumBounceRatio,P;if(b<e.maxTranslate())s.freeMode.momentumBounce?(b+e.maxTranslate()<-B&&(b=e.maxTranslate()-B),A=e.maxTranslate(),v=!0,p.allowMomentumBounce=!0):b=e.maxTranslate(),s.loop&&s.centeredSlides&&(P=!0);else if(b>e.minTranslate())s.freeMode.momentumBounce?(b-e.minTranslate()>B&&(b=e.minTranslate()+B),A=e.minTranslate(),v=!0,p.allowMomentumBounce=!0):b=e.minTranslate(),s.loop&&s.centeredSlides&&(P=!0);else if(s.freeMode.sticky){let O;for(let k=0;k<d.length;k+=1)if(d[k]>-b){O=k;break}Math.abs(d[O]-b)<Math.abs(d[O-1]-b)||e.swipeDirection==="next"?b=d[O]:b=d[O-1],b=-b}if(P&&i("transitionEnd",()=>{e.loopFix()}),e.velocity!==0){if(u?h=Math.abs((-b-e.translate)/e.velocity):h=Math.abs((b-e.translate)/e.velocity),s.freeMode.sticky){let O=Math.abs((u?-b:b)-e.translate),k=e.slidesSizesGrid[e.activeIndex];O<k?h=s.speed:O<2*k?h=s.speed*1.5:h=s.speed*2.5}}else if(s.freeMode.sticky){e.slideToClosest();return}s.freeMode.momentumBounce&&v?(e.updateProgress(A),e.setTransition(h),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating=!0,c.transitionEnd(()=>{!e||e.destroyed||!p.allowMomentumBounce||(n("momentumBounce"),e.setTransition(s.speed),setTimeout(()=>{e.setTranslate(A),c.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()})},0))})):e.velocity?(n("_freeModeNoMomentumRelease"),e.updateProgress(b),e.setTransition(h),e.setTranslate(b),e.transitionStart(!0,e.swipeDirection),e.animating||(e.animating=!0,c.transitionEnd(()=>{!e||e.destroyed||e.transitionEnd()}))):e.updateProgress(b),e.updateActiveIndex(),e.updateSlidesClasses()}else if(s.freeMode.sticky){e.slideToClosest();return}else s.freeMode&&n("_freeModeNoMomentumRelease");(!s.freeMode.momentum||y>=s.longSwipesMs)&&(e.updateProgress(),e.updateActiveIndex(),e.updateSlidesClasses())}Object.assign(e,{freeMode:{onTouchStart:r,onTouchMove:o,onTouchEnd:a}})}var Oc=F(()=>{pe()});function uo({swiper:e,extendParams:t}){t({grid:{rows:1,fill:"column"}});let n,i,r,o=s=>{let{slidesPerView:c}=e.params,{rows:u,fill:d}=e.params.grid;i=n/u,r=Math.floor(s/u),Math.floor(s/u)===s/u?n=s:n=Math.ceil(s/u)*u,c!=="auto"&&d==="row"&&(n=Math.max(n,c*u))},a=(s,c,u,d)=>{let{slidesPerGroup:p,spaceBetween:m}=e.params,{rows:y,fill:h}=e.params.grid,g,b,v;if(h==="row"&&p>1){let A=Math.floor(s/(p*y)),B=s-y*p*A,P=A===0?p:Math.min(Math.ceil((u-A*y*p)/y),p);v=Math.floor(B/P),b=B-v*P+A*p,g=b+v*n/y,c.css({"-webkit-order":g,order:g})}else h==="column"?(b=Math.floor(s/y),v=s-b*y,(b>r||b===r&&v===y-1)&&(v+=1,v>=y&&(v=0,b+=1))):(v=Math.floor(s/i),b=s-v*i);c.css(d("margin-top"),v!==0?m&&`${m}px`:"")},l=(s,c,u)=>{let{spaceBetween:d,centeredSlides:p,roundLengths:m}=e.params,{rows:y}=e.params.grid;if(e.virtualSize=(s+d)*n,e.virtualSize=Math.ceil(e.virtualSize/y)-d,e.$wrapperEl.css({[u("width")]:`${e.virtualSize+d}px`}),p){c.splice(0,c.length);let h=[];for(let g=0;g<c.length;g+=1){let b=c[g];m&&(b=Math.floor(b)),c[g]<e.virtualSize+c[0]&&h.push(b)}c.push(...h)}};e.grid={initSlides:o,updateSlide:a,updateWrapperSize:l}}var _c=F(()=>{});function fo(e){let t=this,{$wrapperEl:n,params:i}=t;if(i.loop&&t.loopDestroy(),typeof e=="object"&&"length"in e)for(let r=0;r<e.length;r+=1)e[r]&&n.append(e[r]);else n.append(e);i.loop&&t.loopCreate(),i.observer||t.update()}var Rc=F(()=>{});function po(e){let t=this,{params:n,$wrapperEl:i,activeIndex:r}=t;n.loop&&t.loopDestroy();let o=r+1;if(typeof e=="object"&&"length"in e){for(let a=0;a<e.length;a+=1)e[a]&&i.prepend(e[a]);o=r+e.length}else i.prepend(e);n.loop&&t.loopCreate(),n.observer||t.update(),t.slideTo(o,0,!1)}var Vc=F(()=>{});function ho(e,t){let n=this,{$wrapperEl:i,params:r,activeIndex:o}=n,a=o;r.loop&&(a-=n.loopedSlides,n.loopDestroy(),n.slides=i.children(`.${r.slideClass}`));let l=n.slides.length;if(e<=0){n.prependSlide(t);return}if(e>=l){n.appendSlide(t);return}let s=a>e?a+1:a,c=[];for(let u=l-1;u>=e;u-=1){let d=n.slides.eq(u);d.remove(),c.unshift(d)}if(typeof t=="object"&&"length"in t){for(let u=0;u<t.length;u+=1)t[u]&&i.append(t[u]);s=a>e?a+t.length:a}else i.append(t);for(let u=0;u<c.length;u+=1)i.append(c[u]);r.loop&&n.loopCreate(),r.observer||n.update(),r.loop?n.slideTo(s+n.loopedSlides,0,!1):n.slideTo(s,0,!1)}var Lc=F(()=>{});function go(e){let t=this,{params:n,$wrapperEl:i,activeIndex:r}=t,o=r;n.loop&&(o-=t.loopedSlides,t.loopDestroy(),t.slides=i.children(`.${n.slideClass}`));let a=o,l;if(typeof e=="object"&&"length"in e){for(let s=0;s<e.length;s+=1)l=e[s],t.slides[l]&&t.slides.eq(l).remove(),l<a&&(a-=1);a=Math.max(a,0)}else l=e,t.slides[l]&&t.slides.eq(l).remove(),l<a&&(a-=1),a=Math.max(a,0);n.loop&&t.loopCreate(),n.observer||t.update(),n.loop?t.slideTo(a+t.loopedSlides,0,!1):t.slideTo(a,0,!1)}var Nc=F(()=>{});function mo(){let e=this,t=[];for(let n=0;n<e.slides.length;n+=1)t.push(n);e.removeSlide(t)}var Hc=F(()=>{});function yo({swiper:e}){Object.assign(e,{appendSlide:fo.bind(e),prependSlide:po.bind(e),addSlide:ho.bind(e),removeSlide:go.bind(e),removeAllSlides:mo.bind(e)})}var Gc=F(()=>{Rc();Vc();Lc();Nc();Hc()});function Re(e){let{effect:t,swiper:n,on:i,setTranslate:r,setTransition:o,overwriteParams:a,perspective:l,recreateShadows:s,getEffectParams:c}=e;i("beforeInit",()=>{if(n.params.effect!==t)return;n.classNames.push(`${n.params.containerModifierClass}${t}`),l&&l()&&n.classNames.push(`${n.params.containerModifierClass}3d`);let d=a?a():{};Object.assign(n.params,d),Object.assign(n.originalParams,d)}),i("setTranslate",()=>{n.params.effect===t&&r()}),i("setTransition",(d,p)=>{n.params.effect===t&&o(p)}),i("transitionEnd",()=>{if(n.params.effect===t&&s){if(!c||!c().slideShadows)return;n.slides.each(d=>{n.$(d).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()}),s()}});let u;i("virtualUpdate",()=>{n.params.effect===t&&(n.slides.length||(u=!0),requestAnimationFrame(()=>{u&&n.slides&&n.slides.length&&(r(),u=!1)}))})}var _t=F(()=>{});function tt(e,t){return e.transformEl?t.find(e.transformEl).css({"backface-visibility":"hidden","-webkit-backface-visibility":"hidden"}):t}var Zt=F(()=>{});function bt({swiper:e,duration:t,transformEl:n,allSlides:i}){let{slides:r,activeIndex:o,$wrapperEl:a}=e;if(e.params.virtualTranslate&&t!==0){let l=!1,s;i?s=n?r.find(n):r:s=n?r.eq(o).find(n):r.eq(o),s.transitionEnd(()=>{if(l||!e||e.destroyed)return;l=!0,e.animating=!1;let c=["webkitTransitionEnd","transitionend"];for(let u=0;u<c.length;u+=1)a.trigger(c[u])})}}var hn=F(()=>{});function bo({swiper:e,extendParams:t,on:n}){t({fadeEffect:{crossFade:!1,transformEl:null}}),Re({effect:"fade",swiper:e,on:n,setTranslate:()=>{let{slides:o}=e,a=e.params.fadeEffect;for(let l=0;l<o.length;l+=1){let s=e.slides.eq(l),u=-s[0].swiperSlideOffset;e.params.virtualTranslate||(u-=e.translate);let d=0;e.isHorizontal()||(d=u,u=0);let p=e.params.fadeEffect.crossFade?Math.max(1-Math.abs(s[0].progress),0):1+Math.min(Math.max(s[0].progress,-1),0);tt(a,s).css({opacity:p}).transform(`translate3d(${u}px, ${d}px, 0px)`)}},setTransition:o=>{let{transformEl:a}=e.params.fadeEffect;(a?e.slides.find(a):e.slides).transition(o),bt({swiper:e,duration:o,transformEl:a,allSlides:!0})},overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}var Yc=F(()=>{_t();Zt();hn()});function vo({swiper:e,extendParams:t,on:n}){t({cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94}});let i=(l,s,c)=>{let u=c?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),d=c?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");u.length===0&&(u=M(`<div class="swiper-slide-shadow-${c?"left":"top"}"></div>`),l.append(u)),d.length===0&&(d=M(`<div class="swiper-slide-shadow-${c?"right":"bottom"}"></div>`),l.append(d)),u.length&&(u[0].style.opacity=Math.max(-s,0)),d.length&&(d[0].style.opacity=Math.max(s,0))};Re({effect:"cube",swiper:e,on:n,setTranslate:()=>{let{$el:l,$wrapperEl:s,slides:c,width:u,height:d,rtlTranslate:p,size:m,browser:y}=e,h=e.params.cubeEffect,g=e.isHorizontal(),b=e.virtual&&e.params.virtual.enabled,v=0,A;h.shadow&&(g?(A=s.find(".swiper-cube-shadow"),A.length===0&&(A=M('<div class="swiper-cube-shadow"></div>'),s.append(A)),A.css({height:`${u}px`})):(A=l.find(".swiper-cube-shadow"),A.length===0&&(A=M('<div class="swiper-cube-shadow"></div>'),l.append(A))));for(let P=0;P<c.length;P+=1){let O=c.eq(P),k=P;b&&(k=parseInt(O.attr("data-swiper-slide-index"),10));let R=k*90,N=Math.floor(R/360);p&&(R=-R,N=Math.floor(-R/360));let D=Math.max(Math.min(O[0].progress,1),-1),S=0,x=0,I=0;k%4===0?(S=-N*4*m,I=0):(k-1)%4===0?(S=0,I=-N*4*m):(k-2)%4===0?(S=m+N*4*m,I=m):(k-3)%4===0&&(S=-m,I=3*m+m*4*N),p&&(S=-S),g||(x=S,S=0);let H=`rotateX(${g?0:-R}deg) rotateY(${g?R:0}deg) translate3d(${S}px, ${x}px, ${I}px)`;D<=1&&D>-1&&(v=k*90+D*90,p&&(v=-k*90-D*90)),O.transform(H),h.slideShadows&&i(O,D,g)}if(s.css({"-webkit-transform-origin":`50% 50% -${m/2}px`,"transform-origin":`50% 50% -${m/2}px`}),h.shadow)if(g)A.transform(`translate3d(0px, ${u/2+h.shadowOffset}px, ${-u/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);else{let P=Math.abs(v)-Math.floor(Math.abs(v)/90)*90,O=1.5-(Math.sin(P*2*Math.PI/360)/2+Math.cos(P*2*Math.PI/360)/2),k=h.shadowScale,R=h.shadowScale/O,N=h.shadowOffset;A.transform(`scale3d(${k}, 1, ${R}) translate3d(0px, ${d/2+N}px, ${-d/2/R}px) rotateX(-90deg)`)}let B=y.isSafari||y.isWebView?-m/2:0;s.transform(`translate3d(0px,0,${B}px) rotateX(${e.isHorizontal()?0:v}deg) rotateY(${e.isHorizontal()?-v:0}deg)`),s[0].style.setProperty("--swiper-cube-translate-z",`${B}px`)},setTransition:l=>{let{$el:s,slides:c}=e;c.transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l),e.params.cubeEffect.shadow&&!e.isHorizontal()&&s.find(".swiper-cube-shadow").transition(l)},recreateShadows:()=>{let l=e.isHorizontal();e.slides.each(s=>{let c=Math.max(Math.min(s.progress,1),-1);i(M(s),c,l)})},getEffectParams:()=>e.params.cubeEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,resistanceRatio:0,spaceBetween:0,centeredSlides:!1,virtualTranslate:!0})})}var Wc=F(()=>{oe();_t()});function nt(e,t,n){let i=`swiper-slide-shadow${n?`-${n}`:""}`,r=e.transformEl?t.find(e.transformEl):t,o=r.children(`.${i}`);return o.length||(o=M(`<div class="swiper-slide-shadow${n?`-${n}`:""}"></div>`),r.append(o)),o}var gn=F(()=>{oe()});function Co({swiper:e,extendParams:t,on:n}){t({flipEffect:{slideShadows:!0,limitRotation:!0,transformEl:null}});let i=(l,s,c)=>{let u=e.isHorizontal()?l.find(".swiper-slide-shadow-left"):l.find(".swiper-slide-shadow-top"),d=e.isHorizontal()?l.find(".swiper-slide-shadow-right"):l.find(".swiper-slide-shadow-bottom");u.length===0&&(u=nt(c,l,e.isHorizontal()?"left":"top")),d.length===0&&(d=nt(c,l,e.isHorizontal()?"right":"bottom")),u.length&&(u[0].style.opacity=Math.max(-s,0)),d.length&&(d[0].style.opacity=Math.max(s,0))};Re({effect:"flip",swiper:e,on:n,setTranslate:()=>{let{slides:l,rtlTranslate:s}=e,c=e.params.flipEffect;for(let u=0;u<l.length;u+=1){let d=l.eq(u),p=d[0].progress;e.params.flipEffect.limitRotation&&(p=Math.max(Math.min(d[0].progress,1),-1));let m=d[0].swiperSlideOffset,h=-180*p,g=0,b=e.params.cssMode?-m-e.translate:-m,v=0;e.isHorizontal()?s&&(h=-h):(v=b,b=0,g=-h,h=0),d[0].style.zIndex=-Math.abs(Math.round(p))+l.length,c.slideShadows&&i(d,p,c);let A=`translate3d(${b}px, ${v}px, 0px) rotateX(${g}deg) rotateY(${h}deg)`;tt(c,d).transform(A)}},setTransition:l=>{let{transformEl:s}=e.params.flipEffect;(s?e.slides.find(s):e.slides).transition(l).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(l),bt({swiper:e,duration:l,transformEl:s})},recreateShadows:()=>{let l=e.params.flipEffect;e.slides.each(s=>{let c=M(s),u=c[0].progress;e.params.flipEffect.limitRotation&&(u=Math.max(Math.min(s.progress,1),-1)),i(c,u,l)})},getEffectParams:()=>e.params.flipEffect,perspective:()=>!0,overwriteParams:()=>({slidesPerView:1,slidesPerGroup:1,watchSlidesProgress:!0,spaceBetween:0,virtualTranslate:!e.params.cssMode})})}var $c=F(()=>{oe();gn();_t();Zt();hn()});function Ao({swiper:e,extendParams:t,on:n}){t({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0,transformEl:null}}),Re({effect:"coverflow",swiper:e,on:n,setTranslate:()=>{let{width:o,height:a,slides:l,slidesSizesGrid:s}=e,c=e.params.coverflowEffect,u=e.isHorizontal(),d=e.translate,p=u?-d+o/2:-d+a/2,m=u?c.rotate:-c.rotate,y=c.depth;for(let h=0,g=l.length;h<g;h+=1){let b=l.eq(h),v=s[h],A=b[0].swiperSlideOffset,B=(p-A-v/2)/v,P=typeof c.modifier=="function"?c.modifier(B):B*c.modifier,O=u?m*P:0,k=u?0:m*P,R=-y*Math.abs(P),N=c.stretch;typeof N=="string"&&N.indexOf("%")!==-1&&(N=parseFloat(c.stretch)/100*v);let D=u?0:N*P,S=u?N*P:0,x=1-(1-c.scale)*Math.abs(P);Math.abs(S)<.001&&(S=0),Math.abs(D)<.001&&(D=0),Math.abs(R)<.001&&(R=0),Math.abs(O)<.001&&(O=0),Math.abs(k)<.001&&(k=0),Math.abs(x)<.001&&(x=0);let I=`translate3d(${S}px,${D}px,${R}px)  rotateX(${k}deg) rotateY(${O}deg) scale(${x})`;if(tt(c,b).transform(I),b[0].style.zIndex=-Math.abs(Math.round(P))+1,c.slideShadows){let W=u?b.find(".swiper-slide-shadow-left"):b.find(".swiper-slide-shadow-top"),E=u?b.find(".swiper-slide-shadow-right"):b.find(".swiper-slide-shadow-bottom");W.length===0&&(W=nt(c,b,u?"left":"top")),E.length===0&&(E=nt(c,b,u?"right":"bottom")),W.length&&(W[0].style.opacity=P>0?P:0),E.length&&(E[0].style.opacity=-P>0?-P:0)}}},setTransition:o=>{let{transformEl:a}=e.params.coverflowEffect;(a?e.slides.find(a):e.slides).transition(o).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(o)},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}var qc=F(()=>{gn();_t();Zt()});function xo({swiper:e,extendParams:t,on:n}){t({creativeEffect:{transformEl:null,limitProgress:1,shadowPerProgress:!1,progressMultiplier:1,perspective:!0,prev:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1},next:{translate:[0,0,0],rotate:[0,0,0],opacity:1,scale:1}}});let i=a=>typeof a=="string"?a:`${a}px`;Re({effect:"creative",swiper:e,on:n,setTranslate:()=>{let{slides:a,$wrapperEl:l,slidesSizesGrid:s}=e,c=e.params.creativeEffect,{progressMultiplier:u}=c,d=e.params.centeredSlides;if(d){let p=s[0]/2-e.params.slidesOffsetBefore||0;l.transform(`translateX(calc(50% - ${p}px))`)}for(let p=0;p<a.length;p+=1){let m=a.eq(p),y=m[0].progress,h=Math.min(Math.max(m[0].progress,-c.limitProgress),c.limitProgress),g=h;d||(g=Math.min(Math.max(m[0].originalProgress,-c.limitProgress),c.limitProgress));let b=m[0].swiperSlideOffset,v=[e.params.cssMode?-b-e.translate:-b,0,0],A=[0,0,0],B=!1;e.isHorizontal()||(v[1]=v[0],v[0]=0);let P={translate:[0,0,0],rotate:[0,0,0],scale:1,opacity:1};h<0?(P=c.next,B=!0):h>0&&(P=c.prev,B=!0),v.forEach((x,I)=>{v[I]=`calc(${x}px + (${i(P.translate[I])} * ${Math.abs(h*u)}))`}),A.forEach((x,I)=>{A[I]=P.rotate[I]*Math.abs(h*u)}),m[0].style.zIndex=-Math.abs(Math.round(y))+a.length;let O=v.join(", "),k=`rotateX(${A[0]}deg) rotateY(${A[1]}deg) rotateZ(${A[2]}deg)`,R=g<0?`scale(${1+(1-P.scale)*g*u})`:`scale(${1-(1-P.scale)*g*u})`,N=g<0?1+(1-P.opacity)*g*u:1-(1-P.opacity)*g*u,D=`translate3d(${O}) ${k} ${R}`;if(B&&P.shadow||!B){let x=m.children(".swiper-slide-shadow");if(x.length===0&&P.shadow&&(x=nt(c,m)),x.length){let I=c.shadowPerProgress?h*(1/c.limitProgress):h;x[0].style.opacity=Math.min(Math.max(Math.abs(I),0),1)}}let S=tt(c,m);S.transform(D).css({opacity:N}),P.origin&&S.css("transform-origin",P.origin)}},setTransition:a=>{let{transformEl:l}=e.params.creativeEffect;(l?e.slides.find(l):e.slides).transition(a).find(".swiper-slide-shadow").transition(a),bt({swiper:e,duration:a,transformEl:l,allSlides:!0})},perspective:()=>e.params.creativeEffect.perspective,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}var jc=F(()=>{gn();_t();Zt();hn()});function So({swiper:e,extendParams:t,on:n}){t({cardsEffect:{slideShadows:!0,transformEl:null,rotate:!0,perSlideRotate:2,perSlideOffset:8}}),Re({effect:"cards",swiper:e,on:n,setTranslate:()=>{let{slides:o,activeIndex:a}=e,l=e.params.cardsEffect,{startTranslate:s,isTouched:c}=e.touchEventsData,u=e.translate;for(let d=0;d<o.length;d+=1){let p=o.eq(d),m=p[0].progress,y=Math.min(Math.max(m,-4),4),h=p[0].swiperSlideOffset;e.params.centeredSlides&&!e.params.cssMode&&e.$wrapperEl.transform(`translateX(${e.minTranslate()}px)`),e.params.centeredSlides&&e.params.cssMode&&(h-=o[0].swiperSlideOffset);let g=e.params.cssMode?-h-e.translate:-h,b=0,v=-100*Math.abs(y),A=1,B=-l.perSlideRotate*y,P=l.perSlideOffset-Math.abs(y)*.75,O=e.virtual&&e.params.virtual.enabled?e.virtual.from+d:d,k=(O===a||O===a-1)&&y>0&&y<1&&(c||e.params.cssMode)&&u<s,R=(O===a||O===a+1)&&y<0&&y>-1&&(c||e.params.cssMode)&&u>s;if(k||R){let x=(1-Math.abs((Math.abs(y)-.5)/.5))**.5;B+=-28*y*x,A+=-.5*x,P+=96*x,b=`${-25*x*Math.abs(y)}%`}if(y<0?g=`calc(${g}px + (${P*Math.abs(y)}%))`:y>0?g=`calc(${g}px + (-${P*Math.abs(y)}%))`:g=`${g}px`,!e.isHorizontal()){let x=b;b=g,g=x}let N=y<0?`${1+(1-A)*y}`:`${1-(1-A)*y}`,D=`
        translate3d(${g}, ${b}, ${v}px)
        rotateZ(${l.rotate?B:0}deg)
        scale(${N})
      `;if(l.slideShadows){let x=p.find(".swiper-slide-shadow");x.length===0&&(x=nt(l,p)),x.length&&(x[0].style.opacity=Math.min(Math.max((Math.abs(y)-.5)/.5,0),1))}p[0].style.zIndex=-Math.abs(Math.round(m))+o.length,tt(l,p).transform(D)}},setTransition:o=>{let{transformEl:a}=e.params.cardsEffect;(a?e.slides.find(a):e.slides).transition(o).find(".swiper-slide-shadow").transition(o),bt({swiper:e,duration:o,transformEl:a})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0,virtualTranslate:!e.params.cssMode})})}var Uc=F(()=>{gn();_t();Zt();hn()});var Qc={};Se(Qc,{A11y:()=>ro,Autoplay:()=>so,Controller:()=>io,EffectCards:()=>So,EffectCoverflow:()=>Ao,EffectCreative:()=>xo,EffectCube:()=>vo,EffectFade:()=>bo,EffectFlip:()=>Co,FreeMode:()=>co,Grid:()=>uo,HashNavigation:()=>ao,History:()=>oo,Keyboard:()=>Ur,Lazy:()=>no,Manipulation:()=>yo,Mousewheel:()=>Qr,Navigation:()=>Jr,Pagination:()=>Kr,Parallax:()=>eo,Scrollbar:()=>Zr,Swiper:()=>qr,Thumbs:()=>lo,Virtual:()=>jr,Zoom:()=>to,default:()=>qr});var Jc=F(()=>{vc();Cc();Ac();xc();Sc();Ec();Ic();wc();Tc();kc();Pc();Fc();Bc();Dc();Mc();zc();Oc();_c();Gc();Yc();Wc();$c();qc();jc();Uc()});var nu=ce(Be=>{"use strict";var Kc=Be&&Be.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),Xc=Be&&Be.__decorate||function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o},Zc=Be&&Be.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var i=0,r=t.length,o;i<r;i++)(o||!(i in t))&&(o||(o=Array.prototype.slice.call(t,0,i)),o[i]=t[i]);return e.concat(o||Array.prototype.slice.call(t))};Object.defineProperty(Be,"__esModule",{value:!0});Be.CarouselEvent=Be.Carousel=Be.CarouselPage=void 0;var we=un(),vt=Ge(),Vt=gt(),Lf=on(),Nf=Ge(),Rt=Ct(),It=(Jc(),Zo(Qc)),mn=ht(),Hf=at(),Eo=function(e){Kc(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.remove(we.Container.styleProperty),n.remove(we.Container.bleedProperty),n.remove(we.Container.isVisibleProperty)},t.prototype.internalRender=function(){var n=document.createElement("div");n.className=this.hostConfig.makeCssClassName("swiper-slide"),this.rtl=this.isRtl();var i=e.prototype.internalRender.call(this);return mn.appendChild(n,i),n},t.prototype.getForbiddenActionTypes=function(){return[we.ShowCardAction,we.ToggleVisibilityAction]},t.prototype.getForbiddenChildElements=function(){return this.forbiddenChildElements()},t.prototype.forbiddenChildElements=function(){return Zc([we.ToggleVisibilityAction.JsonTypeName,we.ShowCardAction.JsonTypeName,"Media","ActionSet","Input.Text","Input.Date","Input.Time","Input.Number","Input.ChoiceSet","Input.Toggle","Carousel"],e.prototype.forbiddenChildElements.call(this),!0)},t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this.setShouldFallback(!1)},t.prototype.shouldSerialize=function(n){return!0},t.prototype.getJsonTypeName=function(){return"CarouselPage"},Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"hasVisibleSeparator",{get:function(){return!1},enumerable:!1,configurable:!0}),t}(we.Container);Be.CarouselPage=Eo;var eu=function(e){Kc(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._pages=[],n._currentIndex=0,n._previousEventType=vt.CarouselInteractionEvent.Pagination,n}return t.prototype.populateSchema=function(n){e.prototype.populateSchema.call(this,n),n.remove(we.Container.styleProperty),n.remove(we.Container.bleedProperty),n.remove(we.Container.isVisibleProperty)},Object.defineProperty(t.prototype,"timer",{get:function(){var n=this.getValue(t.timerProperty);return n&&n<this.hostConfig.carousel.minAutoplayDelay&&(console.warn(Rt.Strings.errors.tooLittleTimeDelay),n=this.hostConfig.carousel.minAutoplayDelay),n},set:function(n){n&&n<this.hostConfig.carousel.minAutoplayDelay?(console.warn(Rt.Strings.errors.tooLittleTimeDelay),this.setValue(t.timerProperty,this.hostConfig.carousel.minAutoplayDelay)):this.setValue(t.timerProperty,n)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"initialPageIndex",{get:function(){return this.getValue(t.initialPageProperty)},set:function(n){this.isValidParsedPageIndex(n)?this.setValue(t.initialPageProperty,n):(console.warn(Rt.Strings.errors.invalidInitialPageIndex(n)),this.setValue(t.initialPageProperty,0))},enumerable:!1,configurable:!0}),t.prototype.isValidParsedPageIndex=function(n){return this._pages?this.isValidPageIndex(n,this._pages.length):!1},t.prototype.isValidRenderedPageIndex=function(n){return this._renderedPages?this.isValidPageIndex(n,this._renderedPages.length):!1},t.prototype.isValidPageIndex=function(n,i){return i>0&&0<=n&&n<i},Object.defineProperty(t.prototype,"previousEventType",{get:function(){return this._previousEventType},set:function(n){this._previousEventType=n},enumerable:!1,configurable:!0}),t.prototype.forbiddenChildElements=function(){return Zc([we.ToggleVisibilityAction.JsonTypeName,we.ShowCardAction.JsonTypeName,"Media","ActionSet","Input.Text","Input.Date","Input.Time","Input.Number","Input.ChoiceSet","Input.Toggle"],e.prototype.forbiddenChildElements.call(this),!0)},t.prototype.adjustRenderedElementSize=function(n){e.prototype.adjustRenderedElementSize.call(this,n),this.height=="stretch"&&this._containerForAdorners!==void 0&&(this._containerForAdorners.style.height="100%")},t.prototype.getJsonTypeName=function(){return"Carousel"},t.prototype.getItemCount=function(){return this._pages.length},t.prototype.getItemAt=function(n){return this._pages[n]},t.prototype.addPage=function(n){this._pages.push(n),n.setParent(this)},t.prototype.removeItem=function(n){if(n instanceof Eo){var i=this._pages.indexOf(n);if(i>=0)return this._pages.splice(i,1),n.setParent(void 0),this.updateLayout(),!0}return!1},t.prototype.getFirstVisibleRenderedItem=function(){var n;if(this.renderedElement&&((n=this._renderedPages)===null||n===void 0?void 0:n.length)>0)return this._renderedPages[0]},t.prototype.getLastVisibleRenderedItem=function(){var n;if(this.renderedElement&&((n=this._renderedPages)===null||n===void 0?void 0:n.length)>0)return this._renderedPages[this._renderedPages.length-1]},Object.defineProperty(t.prototype,"currentPageId",{get:function(){var n,i;if(!((i=(n=this._carousel)===null||n===void 0?void 0:n.slides)===null||i===void 0)&&i.length){var r=this._carousel.slides[this._carousel.activeIndex];return r.id}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentPageIndex",{get:function(){var n;return(n=this._carousel)===null||n===void 0?void 0:n.realIndex},enumerable:!1,configurable:!0}),t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this._pages=[];var r=n.pages;if(Array.isArray(r))for(var o=0,a=r;o<a.length;o++){var l=a[o],s=this.createCarouselPageInstance(l,i);s&&this._pages.push(s)}this.validateParsing(i)},t.prototype.validateParsing=function(n){this.isValidParsedPageIndex(this.initialPageIndex)||n.logParseEvent(this,vt.ValidationEvent.InvalidPropertyValue,Rt.Strings.errors.invalidInitialPageIndex(this.initialPageIndex))},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),i.serializeArray(n,"pages",this._pages)},t.prototype.internalRender=function(){var n=this,i;if(this._renderedPages=[],!(this._pages.length<=0)){var r=document.createElement("div");r.className=this.hostConfig.makeCssClassName("ac-carousel-card-level-container");var o=document.createElement("div");o.className=this.hostConfig.makeCssClassName("swiper","ac-carousel");var a=document.createElement("div");a.className=this.hostConfig.makeCssClassName("ac-carousel-container"),this._containerForAdorners=a,r.appendChild(a);var l=document.createElement("div");switch(l.className=this.hostConfig.makeCssClassName("swiper-wrapper","ac-carousel-card-container"),l.style.display="flex",this.getEffectiveVerticalContentAlignment()){case vt.VerticalAlignment.Top:l.style.alignItems="flex-start";break;case vt.VerticalAlignment.Bottom:l.style.alignItems="flex-end";break;default:l.style.alignItems="center";break}Hf.GlobalSettings.useAdvancedCardBottomTruncation&&(l.style.minHeight="-webkit-min-content");var s=document.createElement("div");s.className=this.hostConfig.makeCssClassName("swiper-button-prev","ac-carousel-left"),a.appendChild(s),mn.addCancelSelectActionEventHandler(s);var c=document.createElement("div");c.className=this.hostConfig.makeCssClassName("swiper-button-next","ac-carousel-right"),a.appendChild(c),mn.addCancelSelectActionEventHandler(c);var u=document.createElement("div");u.className=this.hostConfig.makeCssClassName("swiper-pagination","ac-carousel-pagination"),mn.addCancelSelectActionEventHandler(u),a.appendChild(u),this.isDesignMode()&&(s.style.zIndex="20",c.style.zIndex="20",u.style.zIndex="20");var d=Math.min(this._pages.length,this.hostConfig.carousel.maxCarouselPages);if(this._pages.length>this.hostConfig.carousel.maxCarouselPages&&console.warn(Rt.Strings.errors.tooManyCarouselPages),this._pages.length>0)for(var p=0;p<d;p++){var m=this._pages[p],y=this.isElementAllowed(m)?m.render():void 0;y?.classList.add("ac-carousel-page"),(i=y?.children[0])===null||i===void 0||i.classList.add("ac-carousel-page-container"),y&&(mn.appendChild(l,y),this._renderedPages.push(m))}return o.appendChild(l),o.tabIndex=this.isDesignMode()?-1:0,a.appendChild(o),this._carouselPageContainer=o,this.rtl=this.isRtl(),this.applyRTL(o),this.isDesignMode()||(this.isValidRenderedPageIndex(this.initialPageIndex)?this._currentIndex=this.initialPageIndex:(console.warn(Rt.Strings.errors.invalidInitialPageIndex(this.initialPageIndex)),this._currentIndex=0)),this.initializeCarouselControl(o,c,s,u,this.rtl),r.addEventListener("keydown",function(h){var g,b,v=(g=n._carousel)===null||g===void 0?void 0:g.activeIndex;n.initializeCarouselControl(o,c,s,u,n.rtl),v&&((b=n._carousel)===null||b===void 0||b.slideTo(v))},{once:!0}),this._renderedPages.length>0?r:void 0}},t.prototype.initializeCarouselControl=function(n,i,r,o,a){var l=this,s,c={loop:!this.isDesignMode(),modules:[It.Navigation,It.Pagination,It.Scrollbar,It.A11y,It.History,It.Keyboard],pagination:{el:o,clickable:!0},navigation:{prevEl:a===void 0||!a?r:i,nextEl:a===void 0||!a?i:r},a11y:{enabled:!0},keyboard:{enabled:!0,onlyInViewport:!0},initialSlide:this._currentIndex};this.timer&&!this.isDesignMode()&&((s=c.modules)===null||s===void 0||s.push(It.Autoplay),c.autoplay={delay:this.timer,pauseOnMouseEnter:!0});var u=new It.Swiper(n,c);n.addEventListener("mouseenter",function(d){var p;(p=u.autoplay)===null||p===void 0||p.stop()}),n.addEventListener("mouseleave",function(d){var p;(p=u.autoplay)===null||p===void 0||p.start()}),u.on("navigationNext",function(d){l.raiseCarouselEvent(vt.CarouselInteractionEvent.NavigationNext)}),u.on("navigationPrev",function(d){l.raiseCarouselEvent(vt.CarouselInteractionEvent.NavigationPrevious)}),u.on("slideChangeTransitionEnd",function(d){l.currentIndex=d.realIndex,l.raiseCarouselEvent(vt.CarouselInteractionEvent.Pagination)}),u.on("autoplay",function(){l.raiseCarouselEvent(vt.CarouselInteractionEvent.Autoplay)}),this._carousel=u},t.prototype.createCarouselPageInstance=function(n,i){return i.parseCardObject(this,n,this.forbiddenChildElements(),!this.isDesignMode(),function(r){return!r||r==="CarouselPage"?new Eo:void 0},function(r,o){i.logParseEvent(void 0,Nf.ValidationEvent.ElementTypeNotAllowed,Rt.Strings.errors.elementTypeNotAllowed(r))})},t.prototype.slideTo=function(n){var i;(i=this._carousel)===null||i===void 0||i.slideTo(n)},Object.defineProperty(t.prototype,"carouselPageContainer",{get:function(){return this._carouselPageContainer},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"currentIndex",{get:function(){return this._currentIndex},set:function(n){this._currentIndex=n},enumerable:!1,configurable:!0}),t.prototype.createCarouselEvent=function(n){var i;return this.currentPageIndex!=null&&(i=this.getItemAt(this.currentPageIndex).id),new tu(n,this.id,i,this.currentPageIndex)},t.prototype.raiseCarouselEvent=function(n){var i=this.parent?this.parent.getRootElement():void 0,r=i&&i.onCarouselEvent?i.onCarouselEvent:we.AdaptiveCard.onCarouselEvent;r&&n==vt.CarouselInteractionEvent.Pagination&&r(this.createCarouselEvent(this.previousEventType)),this.previousEventType=n},t.timerProperty=new Vt.NumProperty(Vt.Versions.v1_6,"timer",void 0),t.initialPageProperty=new Vt.NumProperty(Vt.Versions.v1_6,"initialPage",0),Xc([(0,Vt.property)(t.timerProperty)],t.prototype,"timer",null),Xc([(0,Vt.property)(t.initialPageProperty)],t.prototype,"initialPageIndex",null),t}(we.Container);Be.Carousel=eu;var tu=function(){function e(t,n,i,r){this.type=t,this.carouselId=n,this.activeCarouselPageId=i,this.activeCarouselPageIndex=r}return e}();Be.CarouselEvent=tu;Lf.GlobalRegistry.defaultElements.register("Carousel",eu,Vt.Versions.v1_6)});var ou=ce(Ae=>{"use strict";var yn=Ae&&Ae.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}(),it=Ae&&Ae.__decorate||function(e,t,n,i){var r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(o=(r<3?a(o):r>3?a(t,n,o):a(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(Ae,"__esModule",{value:!0});Ae.Table=Ae.TableRow=Ae.TableCell=Ae.StylableContainer=Ae.TableColumnDefinition=void 0;var Un=un(),ae=Ge(),Gf=on(),ee=gt(),wt=at(),Io=Ct(),To=ht(),iu=function(e){yn(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n.width=new wt.SizeAndUnit(1,ae.SizeUnit.Weight),n}return t.prototype.getSchemaKey=function(){return"ColumnDefinition"},t.horizontalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"horizontalCellContentAlignment",ae.HorizontalAlignment),t.verticalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"verticalCellContentAlignment",ae.VerticalAlignment),t.widthProperty=new ee.CustomProperty(ee.Versions.v1_5,"width",function(n,i,r,o){var a=i.defaultValue,l=r[i.name],s=!1;if(typeof l=="number"&&!isNaN(l))a=new wt.SizeAndUnit(l,ae.SizeUnit.Weight);else if(typeof l=="string")try{a=wt.SizeAndUnit.parse(l)}catch{s=!0}else s=!0;return s&&o.logParseEvent(n,ae.ValidationEvent.InvalidPropertyValue,Io.Strings.errors.invalidColumnWidth(l)),a},function(n,i,r,o,a){o.unit===ae.SizeUnit.Pixel?a.serializeValue(r,"width",o.physicalSize+"px"):a.serializeNumber(r,"width",o.physicalSize)},new wt.SizeAndUnit(1,ae.SizeUnit.Weight)),it([(0,ee.property)(t.horizontalCellContentAlignmentProperty)],t.prototype,"horizontalCellContentAlignment",void 0),it([(0,ee.property)(t.verticalCellContentAlignmentProperty)],t.prototype,"verticalCellContentAlignment",void 0),it([(0,ee.property)(t.widthProperty)],t.prototype,"width",void 0),t}(ee.SerializableObject);Ae.TableColumnDefinition=iu;var ko=function(e){yn(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._items=[],n}return t.prototype.parseItem=function(n,i){var r=this;return i.parseCardObject(this,n,[],!this.isDesignMode(),function(o){return r.createItemInstance(o)},function(o,a){i.logParseEvent(void 0,ae.ValidationEvent.ElementTypeNotAllowed,Io.Strings.errors.elementTypeNotAllowed(o))})},t.prototype.internalAddItem=function(n){if(!n.parent)this._items.push(n),n.setParent(this);else throw new Error(Io.Strings.errors.elementAlreadyParented())},t.prototype.internalRemoveItem=function(n){var i=this._items.indexOf(n);return i>=0?(this._items.splice(i,1),n.setParent(void 0),this.updateLayout(),!0):!1},t.prototype.internalIndexOf=function(n){return this._items.indexOf(n)},t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this._items=[];var r=n[this.getCollectionPropertyName()];if(Array.isArray(r))for(var o=0,a=r;o<a.length;o++){var l=a[o],s=this.parseItem(l,i);s&&this._items.push(s)}},t.prototype.internalToJSON=function(n,i){e.prototype.internalToJSON.call(this,n,i),i.serializeArray(n,this.getCollectionPropertyName(),this._items)},t.prototype.removeItem=function(n){return this.internalRemoveItem(n)},t.prototype.getItemCount=function(){return this._items.length},t.prototype.getItemAt=function(n){return this._items[n]},t.prototype.getFirstVisibleRenderedItem=function(){return this.getItemCount()>0?this.getItemAt(0):void 0},t.prototype.getLastVisibleRenderedItem=function(){return this.getItemCount()>0?this.getItemAt(this.getItemCount()-1):void 0},t}(Un.StylableCardElementContainer);Ae.StylableContainer=ko;var jn=function(e){yn(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._columnIndex=-1,n._cellType="data",n}return t.prototype.getHasBorder=function(){return this.parentRow.parentTable.showGridLines},t.prototype.applyBorder=function(){if(this.renderedElement&&this.getHasBorder()){var n=this.hostConfig.containerStyles.getStyleByName(this.parentRow.parentTable.gridStyle);if(n.borderColor){var i=(0,To.stringToCssColor)(n.borderColor);i&&(this.renderedElement.style.borderRight="1px solid "+i,this.renderedElement.style.borderBottom="1px solid "+i)}}},t.prototype.getDefaultPadding=function(){return this.getHasBackground()||this.getHasBorder()?new wt.PaddingDefinition(ae.Spacing.Small,ae.Spacing.Small,ae.Spacing.Small,ae.Spacing.Small):e.prototype.getDefaultPadding.call(this)},t.prototype.internalRender=function(){var n=e.prototype.internalRender.call(this);return n&&(n.setAttribute("role",this.cellType==="data"?"cell":"columnheader"),n.style.minWidth="0",this.cellType==="header"&&n.setAttribute("scope","col")),n},t.prototype.shouldSerialize=function(n){return!0},t.prototype.getJsonTypeName=function(){return"TableCell"},t.prototype.getEffectiveTextStyleDefinition=function(){return this.cellType==="header"?this.hostConfig.textStyles.columnHeader:e.prototype.getEffectiveTextStyleDefinition.call(this)},t.prototype.getEffectiveHorizontalAlignment=function(){if(this.horizontalAlignment!==void 0)return this.horizontalAlignment;if(this.parentRow.horizontalCellContentAlignment!==void 0)return this.parentRow.horizontalCellContentAlignment;if(this.columnIndex>=0){var n=this.parentRow.parentTable.getColumnAt(this.columnIndex).horizontalCellContentAlignment;if(n!==void 0)return n}return this.parentRow.parentTable.horizontalCellContentAlignment!==void 0?this.parentRow.parentTable.horizontalCellContentAlignment:e.prototype.getEffectiveHorizontalAlignment.call(this)},t.prototype.getEffectiveVerticalContentAlignment=function(){if(this.verticalContentAlignment!==void 0)return this.verticalContentAlignment;if(this.parentRow.verticalCellContentAlignment!==void 0)return this.parentRow.verticalCellContentAlignment;if(this.columnIndex>=0){var n=this.parentRow.parentTable.getColumnAt(this.columnIndex).verticalCellContentAlignment;if(n!==void 0)return n}return this.parentRow.parentTable.verticalCellContentAlignment!==void 0?this.parentRow.parentTable.verticalCellContentAlignment:e.prototype.getEffectiveVerticalContentAlignment.call(this)},Object.defineProperty(t.prototype,"columnIndex",{get:function(){return this._columnIndex},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cellType",{get:function(){return this._cellType},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parentRow",{get:function(){return this.parent},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),t}(Un.Container);Ae.TableCell=jn;var wo=function(e){yn(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}return t.prototype.getDefaultPadding=function(){return new wt.PaddingDefinition(ae.Spacing.None,ae.Spacing.None,ae.Spacing.None,ae.Spacing.None)},t.prototype.applyBackground=function(){if(this.renderedElement){var n=this.hostConfig.containerStyles.getStyleByName(this.style,this.hostConfig.containerStyles.getStyleByName(this.defaultStyle));if(n.backgroundColor){var i=(0,To.stringToCssColor)(n.backgroundColor);i&&(this.renderedElement.style.backgroundColor=i)}}},t.prototype.getCollectionPropertyName=function(){return"cells"},t.prototype.createItemInstance=function(n){return!n||n==="TableCell"?new jn:void 0},t.prototype.internalRender=function(){var n=this.getIsFirstRow(),i=this.hostConfig.table.cellSpacing,r=document.createElement("div");r.setAttribute("role","row"),r.style.display="flex",r.style.flexDirection="row";for(var o=0;o<Math.min(this.getItemCount(),this.parentTable.getColumnCount());o++){var a=this.getItemAt(o);a._columnIndex=o,a._cellType=this.parentTable.firstRowAsHeaders&&n?"header":"data";var l=a.render();if(l){var s=this.parentTable.getColumnAt(o);s.computedWidth.unit===ae.SizeUnit.Pixel?l.style.flex="0 0 "+s.computedWidth.physicalSize+"px":l.style.flex="1 1 "+s.computedWidth.physicalSize+"%",o>0&&!this.parentTable.showGridLines&&i>0&&(l.style.marginLeft=i+"px"),r.appendChild(l)}}return r.children.length>0?r:void 0},t.prototype.shouldSerialize=function(n){return!0},t.prototype.addCell=function(n){this.internalAddItem(n)},t.prototype.removeCellAt=function(n){return n>=0&&n<this.getItemCount()?this.removeItem(this.getItemAt(n)):!1},t.prototype.indexOf=function(n){return n instanceof jn?this.internalIndexOf(n):-1},t.prototype.ensureHasEnoughCells=function(n){for(;this.getItemCount()<n;)this.addCell(new jn)},t.prototype.getJsonTypeName=function(){return"TableRow"},t.prototype.getIsFirstRow=function(){return this.parentTable.getItemAt(0)===this},Object.defineProperty(t.prototype,"parentTable",{get:function(){return this.parent},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isStandalone",{get:function(){return!1},enumerable:!1,configurable:!0}),t.styleProperty=new Un.ContainerStyleProperty(ee.Versions.v1_5,"style"),t.horizontalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"horizontalCellContentAlignment",ae.HorizontalAlignment),t.verticalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"verticalCellContentAlignment",ae.VerticalAlignment),it([(0,ee.property)(t.horizontalCellContentAlignmentProperty)],t.prototype,"horizontalCellContentAlignment",void 0),it([(0,ee.property)(t.verticalCellContentAlignmentProperty)],t.prototype,"verticalCellContentAlignment",void 0),t}(ko);Ae.TableRow=wo;var ru=function(e){yn(t,e);function t(){var n=e!==null&&e.apply(this,arguments)||this;return n._columns=[],n.firstRowAsHeaders=!0,n.showGridLines=!0,n}return Object.defineProperty(t.prototype,"gridStyle",{get:function(){var n=this.getValue(t.gridStyleProperty);if(n&&this.hostConfig.containerStyles.getStyleByName(n))return n},set:function(n){this.setValue(t.gridStyleProperty,n)},enumerable:!1,configurable:!0}),t.prototype.ensureRowsHaveEnoughCells=function(){for(var n=0;n<this.getItemCount();n++)this.getItemAt(n).ensureHasEnoughCells(this.getColumnCount())},t.prototype.removeCellsFromColumn=function(n){for(var i=0;i<this.getItemCount();i++)this.getItemAt(i).removeCellAt(n)},t.prototype.getCollectionPropertyName=function(){return"rows"},t.prototype.createItemInstance=function(n){return!n||n==="TableRow"?new wo:void 0},t.prototype.internalParse=function(n,i){e.prototype.internalParse.call(this,n,i),this.ensureRowsHaveEnoughCells()},t.prototype.internalRender=function(){if(this.getItemCount()>0){for(var n=0,i=0,r=this._columns;i<r.length;i++){var o=r[i];o.width.unit===ae.SizeUnit.Weight&&(n+=o.width.physicalSize)}for(var a=0,l=this._columns;a<l.length;a++){var o=l[a];o.width.unit===ae.SizeUnit.Pixel?o.computedWidth=new wt.SizeAndUnit(o.width.physicalSize,ae.SizeUnit.Pixel):o.computedWidth=new wt.SizeAndUnit(100/n*o.width.physicalSize,ae.SizeUnit.Weight)}var s=document.createElement("div");if(s.setAttribute("role","table"),s.style.display="flex",s.style.flexDirection="column",this.showGridLines){var c=this.hostConfig.containerStyles.getStyleByName(this.gridStyle);if(c.borderColor){var u=(0,To.stringToCssColor)(c.borderColor);u&&(s.style.borderTop="1px solid "+u,s.style.borderLeft="1px solid "+u)}}for(var d=this.hostConfig.table.cellSpacing,p=0;p<this.getItemCount();p++){var m=this.getItemAt(p).render();if(m){if(p>0&&!this.showGridLines&&d>0){var y=document.createElement("div");y.setAttribute("aria-hidden","true"),y.style.height=d+"px",s.appendChild(y)}s.appendChild(m)}}return s}},t.prototype.addColumn=function(n){this._columns.push(n),this.ensureRowsHaveEnoughCells()},t.prototype.removeColumn=function(n){var i=this._columns.indexOf(n);i>=0&&(this.removeCellsFromColumn(i),this._columns.splice(i,1))},t.prototype.getColumnCount=function(){return this._columns.length},t.prototype.getColumnAt=function(n){return this._columns[n]},t.prototype.addRow=function(n){this.internalAddItem(n),n.ensureHasEnoughCells(this.getColumnCount())},t.prototype.indexOf=function(n){return n instanceof wo?this.internalIndexOf(n):-1},t.prototype.getJsonTypeName=function(){return"Table"},t._columnsProperty=new ee.SerializableObjectCollectionProperty(ee.Versions.v1_5,"columns",iu),t.firstRowAsHeadersProperty=new ee.BoolProperty(ee.Versions.v1_5,"firstRowAsHeaders",!0),t.showGridLinesProperty=new ee.BoolProperty(ee.Versions.v1_5,"showGridLines",!0),t.gridStyleProperty=new Un.ContainerStyleProperty(ee.Versions.v1_5,"gridStyle"),t.horizontalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"horizontalCellContentAlignment",ae.HorizontalAlignment),t.verticalCellContentAlignmentProperty=new ee.EnumProperty(ee.Versions.v1_5,"verticalCellContentAlignment",ae.VerticalAlignment),it([(0,ee.property)(t._columnsProperty)],t.prototype,"_columns",void 0),it([(0,ee.property)(t.firstRowAsHeadersProperty)],t.prototype,"firstRowAsHeaders",void 0),it([(0,ee.property)(t.showGridLinesProperty)],t.prototype,"showGridLines",void 0),it([(0,ee.property)(t.gridStyleProperty)],t.prototype,"gridStyle",null),it([(0,ee.property)(t.horizontalCellContentAlignmentProperty)],t.prototype,"horizontalCellContentAlignment",void 0),it([(0,ee.property)(t.verticalCellContentAlignmentProperty)],t.prototype,"verticalCellContentAlignment",void 0),t}(ko);Ae.Table=ru;Gf.GlobalRegistry.defaultElements.register("Table",ru,ee.Versions.v1_5)});var au=ce(Qn=>{"use strict";Object.defineProperty(Qn,"__esModule",{value:!0});Qn.ChannelAdapter=void 0;var Yf=function(){function e(){}return e}();Qn.ChannelAdapter=Yf});var Fo=ce(be=>{"use strict";var Po=be&&be.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(i[o]=r[o])},e(t,n)};return function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");e(t,n);function i(){this.constructor=t}t.prototype=n===null?Object.create(n):(i.prototype=n.prototype,new i)}}();Object.defineProperty(be,"__esModule",{value:!0});be.LoginRequestResponse=be.ErrorResponse=be.SuccessResponse=be.ActivityResponse=be.ActivityRequestError=be.ActivityRequestTrigger=void 0;var Wf;(function(e){e.Automatic="automatic",e.Manual="manual"})(Wf=be.ActivityRequestTrigger||(be.ActivityRequestTrigger={}));var $f=function(){function e(t,n){this.code=t,this.message=n}return e}();be.ActivityRequestError=$f;var Jn=function(){function e(t){this.request=t}return e}();be.ActivityResponse=Jn;var qf=function(e){Po(t,e);function t(n,i){var r=e.call(this,n)||this;return r.request=n,r.rawContent=i,r}return t}(Jn);be.SuccessResponse=qf;var jf=function(e){Po(t,e);function t(n,i){var r=e.call(this,n)||this;return r.request=n,r.error=i,r}return t}(Jn);be.ErrorResponse=jf;var Uf=function(e){Po(t,e);function t(n,i){var r=e.call(this,n)||this;r.request=n,r._auth=i;for(var o=0,a=r._auth.buttons;o<a.length;o++){var l=a[o];if(l.type==="signin"&&l.value!==void 0)try{new URL(l.value),r.signinButton=l;break}catch{}}return r}return Object.defineProperty(t.prototype,"tokenExchangeResource",{get:function(){return this._auth.tokenExchangeResource},enumerable:!1,configurable:!0}),t}(Jn);be.LoginRequestResponse=Uf});var lu=ce(kt=>{"use strict";var su=kt&&kt.__awaiter||function(e,t,n,i){function r(o){return o instanceof n?o:new n(function(a){a(o)})}return new(n||(n=Promise))(function(o,a){function l(u){try{c(i.next(u))}catch(d){a(d)}}function s(u){try{c(i.throw(u))}catch(d){a(d)}}function c(u){u.done?o(u.value):r(u.value).then(l,s)}c((i=i.apply(e,t||[])).next())})},Do=kt&&kt.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,r,o,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(u){return s([c,u])}}function s(c){if(i)throw new TypeError("Generator is already executing.");for(;n;)try{if(i=1,r&&(o=c[0]&2?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,r=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],r=0}finally{i=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(kt,"__esModule",{value:!0});kt.AdaptiveApplet=void 0;var se=Ge(),Bo=ht(),me=at(),Tt=Fo(),bn=Ct(),Lt=un(),Qf=gt();function ge(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(me.GlobalSettings.applets.logEnabled)if(me.GlobalSettings.applets.onLogEvent)me.GlobalSettings.applets.onLogEvent(e,t,n);else switch(e){case se.LogLevel.Warning:console.warn(t,n);break;case se.LogLevel.Error:console.error(t,n);break;default:console.log(t,n);break}}var Jf=function(){function e(t,n,i){this.action=t,this.trigger=n,this.consecutiveRefreshes=i,this.attemptNumber=0}return e.prototype.retryAsync=function(){return su(this,void 0,void 0,function(){return Do(this,function(t){return this.onSend&&this.onSend(this),[2]})})},e}(),Xf=function(){function e(){this._allowAutomaticCardUpdate=!1,this.renderedElement=document.createElement("div"),this.renderedElement.className="aaf-cardHost",this.renderedElement.style.position="relative",this.renderedElement.style.display="flex",this.renderedElement.style.flexDirection="column",this._cardHostElement=document.createElement("div"),this._refreshButtonHostElement=document.createElement("div"),this._refreshButtonHostElement.className="aaf-refreshButtonHost",this._refreshButtonHostElement.style.display="none",this.renderedElement.appendChild(this._cardHostElement),this.renderedElement.appendChild(this._refreshButtonHostElement)}return e.prototype.displayCard=function(t){if(t.renderedElement)Bo.clearElementChildren(this._cardHostElement),this._refreshButtonHostElement.style.display="none",this._cardHostElement.appendChild(t.renderedElement);else throw new Error("displayCard: undefined card.")},e.prototype.showManualRefreshButton=function(t){var n=this,i=this.onShowManualRefreshButton?this.onShowManualRefreshButton(this):!0;if(i){this._refreshButtonHostElement.style.display="none";var r=void 0;if(this.onRenderManualRefreshButton)r=this.onRenderManualRefreshButton(this);else{var o=bn.Strings.runtime.refreshThisCard();if(me.GlobalSettings.applets.refresh.mode===se.RefreshMode.Automatic){var a=bn.Strings.runtime.automaticRefreshPaused();a[a.length-1]!==" "&&(a+=" "),o=bn.Strings.runtime.clckToRestartAutomaticRefresh()}var l={type:"AdaptiveCard",version:"1.2",body:[{type:"RichTextBlock",horizontalAlignment:"right",inlines:[{type:"TextRun",text:o,selectAction:{type:"Action.Submit",id:"refreshCard"}}]}]},s=new Lt.AdaptiveCard;s.parse(l,new Lt.SerializationContext(Qf.Versions.v1_2)),s.onExecuteAction=function(c){c.id==="refreshCard"&&(Bo.clearElementChildren(n._refreshButtonHostElement),n.internalExecuteAction(t,Tt.ActivityRequestTrigger.Automatic,0))},r=s.render()}r&&(Bo.clearElementChildren(this._refreshButtonHostElement),this._refreshButtonHostElement.appendChild(r),this._refreshButtonHostElement.style.removeProperty("display"))}},e.prototype.createActivityRequest=function(t,n,i){var r=this;if(this.card){var o=new Jf(t,n,i);o.onSend=function(l){l.attemptNumber++,r.internalSendActivityRequestAsync(o)};var a=this.onPrepareActivityRequest?!this.onPrepareActivityRequest(this,o,t):!1;return a?void 0:o}else throw new Error("createActivityRequest: no card has been set.")},e.prototype.createMagicCodeInputCard=function(t){var n={type:"AdaptiveCard",version:"1.0",body:[{type:"TextBlock",color:"attention",text:t===1?void 0:"That didn't work... let's try again.",wrap:!0,horizontalAlignment:"center"},{type:"TextBlock",text:'Please login in the popup. You will obtain a magic code. Paste that code below and select "Submit"',wrap:!0,horizontalAlignment:"center"},{type:"Input.Text",id:"magicCode",placeholder:"Enter magic code"},{type:"ActionSet",horizontalAlignment:"center",actions:[{type:"Action.Submit",id:e._submitMagicCodeActionId,title:"Submit"},{type:"Action.Submit",id:e._cancelMagicCodeAuthActionId,title:"Cancel"}]}]},i=new Lt.AdaptiveCard;return i.parse(n),i},e.prototype.cancelAutomaticRefresh=function(){this._allowAutomaticCardUpdate&&ge(se.LogLevel.Warning,"Automatic card refresh has been cancelled as a result of the user interacting with the card."),this._allowAutomaticCardUpdate=!1},e.prototype.createSerializationContext=function(){return this.onCreateSerializationContext?this.onCreateSerializationContext(this):new Lt.SerializationContext},e.prototype.internalSetCard=function(t,n){var i=this;if(typeof t=="object"&&t.type==="AdaptiveCard"&&(this._cardPayload=t),this._cardPayload)try{var r=new Lt.AdaptiveCard;this.hostConfig&&(r.hostConfig=this.hostConfig);var o=this.createSerializationContext();r.parse(this._cardPayload,o);var a=this.onCardChanging?this.onCardChanging(this,this._cardPayload):!0;if(a&&(this._card=r,this._card.authentication&&this._card.authentication.tokenExchangeResource&&this.onPrefetchSSOToken&&this.onPrefetchSSOToken(this,this._card.authentication.tokenExchangeResource),this._card.onExecuteAction=function(s){i.cancelAutomaticRefresh(),i.internalExecuteAction(s,Tt.ActivityRequestTrigger.Manual,0)},this._card.onInputValueChanged=function(s){i.cancelAutomaticRefresh()},this._card.render(),this._card.renderedElement&&(this.displayCard(this._card),this.onCardChanged&&this.onCardChanged(this),this._card.refresh)))if(me.GlobalSettings.applets.refresh.mode===se.RefreshMode.Automatic&&n<me.GlobalSettings.applets.refresh.maximumConsecutiveAutomaticRefreshes)if(me.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes<=0)ge(se.LogLevel.Info,"Triggering automatic card refresh number "+(n+1)),this.internalExecuteAction(this._card.refresh.action,Tt.ActivityRequestTrigger.Automatic,n+1);else{ge(se.LogLevel.Info,"Scheduling automatic card refresh number "+(n+1)+" in "+me.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes+"ms");var l=this._card.refresh.action;this._allowAutomaticCardUpdate=!0,window.setTimeout(function(){i._allowAutomaticCardUpdate&&i.internalExecuteAction(l,Tt.ActivityRequestTrigger.Automatic,n+1)},me.GlobalSettings.applets.refresh.timeBetweenAutomaticRefreshes)}else me.GlobalSettings.applets.refresh.mode!==se.RefreshMode.Disabled&&(n>0?ge(se.LogLevel.Warning,"Stopping automatic refreshes after "+n+" consecutive refreshes."):ge(se.LogLevel.Warning,"The card has a refresh section, but automatic refreshes are disabled."),(me.GlobalSettings.applets.refresh.allowManualRefreshesAfterAutomaticRefreshes||me.GlobalSettings.applets.refresh.mode===se.RefreshMode.Manual)&&(ge(se.LogLevel.Info,"Showing manual refresh button."),this.showManualRefreshButton(this._card.refresh.action)))}catch(s){ge(se.LogLevel.Error,"setCard: "+s)}},e.prototype.internalExecuteAction=function(t,n,i){if(t instanceof Lt.ExecuteAction)if(this.channelAdapter){var r=this.createActivityRequest(t,n,i);r&&r.retryAsync()}else throw new Error("internalExecuteAction: No channel adapter set.");this.onAction&&this.onAction(this,t)},e.prototype.createProgressOverlay=function(t){if(!this._progressOverlay)if(this.onCreateProgressOverlay)this._progressOverlay=this.onCreateProgressOverlay(this,t);else{this._progressOverlay=document.createElement("div"),this._progressOverlay.className="aaf-progress-overlay";var n=document.createElement("div");n.className="aaf-spinner",n.style.width="28px",n.style.height="28px",this._progressOverlay.appendChild(n)}return this._progressOverlay},e.prototype.removeProgressOverlay=function(t){this.onRemoveProgressOverlay&&this.onRemoveProgressOverlay(this,t),this._progressOverlay!==void 0&&(this.renderedElement.removeChild(this._progressOverlay),this._progressOverlay=void 0)},e.prototype.activityRequestSucceeded=function(t,n){this.onActivityRequestSucceeded&&this.onActivityRequestSucceeded(this,t,n)},e.prototype.activityRequestFailed=function(t){return this.onActivityRequestFailed?this.onActivityRequestFailed(this,t):me.GlobalSettings.applets.defaultTimeBetweenRetryAttempts},e.prototype.showAuthCodeInputDialog=function(t){var n=this,i=this.onShowAuthCodeInputDialog?this.onShowAuthCodeInputDialog(this,t):!0;if(i){var r=this.createMagicCodeInputCard(t.attemptNumber);r.render(),r.onExecuteAction=function(o){if(n.card&&o instanceof Lt.SubmitAction)switch(o.id){case e._submitMagicCodeActionId:var a=void 0;o.data&&typeof o.data.magicCode=="string"&&(a=o.data.magicCode),a?(n.displayCard(n.card),t.authCode=a,t.retryAsync()):alert("Please enter the magic code you received.");break;case e._cancelMagicCodeAuthActionId:ge(se.LogLevel.Warning,"Authentication cancelled by user."),n.displayCard(n.card);break;default:ge(se.LogLevel.Error,"Unexpected action taken from magic code input card (id = "+o.id+")"),alert(bn.Strings.magicCodeInputCard.somethingWentWrong());break}},this.displayCard(r)}},e.prototype.internalSendActivityRequestAsync=function(t){return su(this,void 0,void 0,function(){var n,i,r,o,a;return Do(this,function(l){switch(l.label){case 0:if(!this.channelAdapter)throw new Error("internalSendActivityRequestAsync: channelAdapter is not set.");n=this.createProgressOverlay(t),n!==void 0&&this.renderedElement.appendChild(n),i=!1,r=function(){var s,c,u,d,p,m,y;return Do(this,function(h){switch(h.label){case 0:s=void 0,t.attemptNumber===1?ge(se.LogLevel.Info,"Sending activity request to channel (attempt "+t.attemptNumber+")"):ge(se.LogLevel.Info,"Re-sending activity request to channel (attempt "+t.attemptNumber+")"),h.label=1;case 1:return h.trys.push([1,3,,4]),[4,o.channelAdapter.sendRequestAsync(t)];case 2:return s=h.sent(),[3,4];case 3:return c=h.sent(),ge(se.LogLevel.Error,"Activity request failed: "+c),o.removeProgressOverlay(t),i=!0,[3,4];case 4:if(!s)return[3,10];if(!(s instanceof Tt.SuccessResponse))return[3,5];if(o.removeProgressOverlay(t),s.rawContent===void 0)throw new Error("internalSendActivityRequestAsync: Action.Execute result is undefined");u=s.rawContent;try{u=JSON.parse(s.rawContent)}catch{}if(typeof u=="string")ge(se.LogLevel.Info,"The activity request returned a string after "+t.attemptNumber+" attempt(s)."),o.activityRequestSucceeded(s,u);else if(typeof u=="object"&&u.type==="AdaptiveCard")ge(se.LogLevel.Info,"The activity request returned an Adaptive Card after "+t.attemptNumber+" attempt(s)."),o.internalSetCard(u,t.consecutiveRefreshes),o.activityRequestSucceeded(s,o.card);else throw new Error("internalSendActivityRequestAsync: Action.Execute result is of unsupported type ("+typeof s.rawContent+")");return i=!0,[3,10];case 5:return s instanceof Tt.ErrorResponse?(d=o.activityRequestFailed(s),d>=0&&t.attemptNumber<me.GlobalSettings.applets.maximumRetryAttempts?(ge(se.LogLevel.Warning,"Activity request failed: ".concat(s.error.message,". Retrying in ").concat(d,"ms")),t.attemptNumber++,[4,new Promise(function(g,b){window.setTimeout(function(){g()},d)})]):[3,7]):[3,9];case 6:return h.sent(),[3,8];case 7:ge(se.LogLevel.Error,"Activity request failed: ".concat(s.error.message,". Giving up after ").concat(t.attemptNumber," attempt(s)")),o.removeProgressOverlay(t),i=!0,h.label=8;case 8:return[3,10];case 9:if(s instanceof Tt.LoginRequestResponse){if(ge(se.LogLevel.Info,"The activity request returned a LoginRequestResponse after "+t.attemptNumber+" attempt(s)."),t.attemptNumber<=me.GlobalSettings.applets.maximumRetryAttempts){if(p=!0,s.tokenExchangeResource&&o.onSSOTokenNeeded&&(p=!o.onSSOTokenNeeded(o,t,s.tokenExchangeResource)),p){if(o.removeProgressOverlay(t),s.signinButton===void 0)throw new Error("internalSendActivityRequestAsync: the login request doesn't contain a valid signin URL.");ge(se.LogLevel.Info,"Login required at "+s.signinButton.value),o.onShowSigninPrompt?o.onShowSigninPrompt(o,t,s.signinButton):(o.showAuthCodeInputDialog(t),m=window.screenX+(window.outerWidth-me.GlobalSettings.applets.authPromptWidth)/2,y=window.screenY+(window.outerHeight-me.GlobalSettings.applets.authPromptHeight)/2,window.open(s.signinButton.value,s.signinButton.title?s.signinButton.title:"Sign in","width=".concat(me.GlobalSettings.applets.authPromptWidth,",height=").concat(me.GlobalSettings.applets.authPromptHeight,",left=").concat(m,",top=").concat(y)))}}else ge(se.LogLevel.Error,"Authentication failed. Giving up after "+t.attemptNumber+" attempt(s)"),alert(bn.Strings.magicCodeInputCard.authenticationFailed());return[2,"break"]}else throw new Error("Unhandled response type: "+JSON.stringify(s));h.label=10;case 10:return[2]}})},o=this,l.label=1;case 1:return i?[3,3]:[5,r()];case 2:return a=l.sent(),a==="break"?[3,3]:[3,1];case 3:return[2]}})})},e.prototype.refreshCard=function(){this._card&&this._card.refresh&&this.internalExecuteAction(this._card.refresh.action,Tt.ActivityRequestTrigger.Manual,0)},e.prototype.setCard=function(t){this.internalSetCard(t,0)},Object.defineProperty(e.prototype,"card",{get:function(){return this._card},enumerable:!1,configurable:!0}),e._submitMagicCodeActionId="submitMagicCode",e._cancelMagicCodeAuthActionId="cancelMagicCodeAuth",e}();kt.AdaptiveApplet=Xf});var je=ce(fe=>{"use strict";var Kf=fe&&fe.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);(!r||("get"in r?!t.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),Te=fe&&fe.__exportStar||function(e,t){for(var n in e)n!=="default"&&!Object.prototype.hasOwnProperty.call(t,n)&&Kf(t,e,n)};Object.defineProperty(fe,"__esModule",{value:!0});Te(Ct(),fe);Te(Ge(),fe);Te(at(),fe);Te(ht(),fe);Te(gt(),fe);Te(kn(),fe);Te(nn(),fe);Te(on(),fe);Te(Di(),fe);Te(un(),fe);Te(nu(),fe);Te(ou(),fe);Te(au(),fe);Te(Fo(),fe);Te(lu(),fe)});var lm={};Se(lm,{default:()=>sm});var si=Ke(je()),re=Ht("@primer/react");var xe=Ke(je());var Mo={};Se(Mo,{actions:()=>sp,adaptiveCard:()=>lp,containerStyles:()=>op,default:()=>fp,factSet:()=>up,fontTypes:()=>np,imageSet:()=>cp,imageSizes:()=>ap,inputs:()=>dp,separator:()=>ep,spacing:()=>Zf,supportsInteractivity:()=>tp,textBlock:()=>rp,textStyles:()=>ip});var Zf={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},ep={lineThickness:1,lineColor:"#EEEEEE"},tp=!0,np={default:{fontFamily:"'Segoe UI', 'sans-serif', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},ip={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},rp={headingLevel:2},op={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#0063B1",subtle:"#0063B1"},attention:{default:"#B00000",subtle:"#DDB00000"},good:{default:"#028A02",subtle:"#DD028A02"},light:{default:"#646464",subtle:"#767676"},warning:{default:"#B75C00",subtle:"#DDB75C00"}}},emphasis:{borderColor:"#666666",backgroundColor:"#F9F9F9",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#1F6BF1",subtle:"#881F6BF1"},attention:{default:"#E31B13",subtle:"#DDE31B13"},good:{default:"#0D860A",subtle:"#DD0D860A"},warning:{default:"#BD5400",subtle:"#DDBD5400"},light:{default:"#737373",subtle:"#DD737373"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#D7E7FA",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#145FDD",subtle:"#88145FDD"},attention:{default:"#C42C07",subtle:"#DDC42C07"},good:{default:"#0B7814",subtle:"#DD0B7814"},warning:{default:"#935A10",subtle:"#DD935A10"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#6E6E6E",subtle:"#336E6E6E"},accent:{default:"#2168E4",subtle:"#882168E4"},attention:{default:"#CC3300",subtle:"#DDCC3300"},good:{default:"#0F8109",subtle:"#DD0F8109"},warning:{default:"#9A630D",subtle:"#DD9A630D"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#5A5A5A",subtle:"#335A5A5A"},accent:{default:"#0854C5",subtle:"#880854C5"},attention:{default:"#A92E0E",subtle:"#DDA92E0E"},good:{default:"#256824",subtle:"#DD256824"},warning:{default:"#775502",subtle:"#DD775502"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#0F60DC",subtle:"#880F60DC"},attention:{default:"#BF3505",subtle:"#DDBF3505"},good:{default:"#207725",subtle:"#DD207725"},warning:{default:"#866107",subtle:"#DD866107"}}}},ap={small:40,medium:80,large:160},sp={maxActions:5,spacing:"default",buttonSpacing:8,showCard:{actionMode:"inline",inlineTopMargin:8},actionsOrientation:"horizontal",actionAlignment:"stretch"},lp={allowCustomStyle:!1},cp={imageSize:"medium",maxImageHeight:100},up={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8},dp={label:{inputSpacing:"small",requiredInputs:{suffix:" (required)",weight:"bolder",size:"medium"},optionalInputs:{color:"dark",isSubtle:!0}},errorMessage:{spacing:"small",size:"small",weight:"bolder"}},fp={spacing:Zf,separator:ep,supportsInteractivity:tp,fontTypes:np,textStyles:ip,textBlock:rp,containerStyles:op,imageSizes:ap,actions:sp,adaptiveCard:lp,imageSet:cp,factSet:up,inputs:dp};var zo=(n=>(n.Light="Light",n.Dark="Dark",n))(zo||{}),cu=(o=>(o.Desktop="Desktop (unconstrained)",o.SmallMobile="Small mobile (320px)",o.LargeMobile="Large mobile (414px)",o.SmallTablet="Small tablet (768px)",o.LargeTablet="Large tablet (1024px)",o))(cu||{}),rt=class{_cardHost;_elementsRegistry=new xe.CardObjectRegistry;_actionsRegistry=new xe.CardObjectRegistry;name;constructor(t){this.name=t,this._cardHost=document.createElement("div"),this._cardHost.className="cardHost",xe.GlobalRegistry.populateWithDefaultElements(this._elementsRegistry),xe.GlobalRegistry.populateWithDefaultActions(this._actionsRegistry)}initialize(){xe.GlobalSettings.useMarkdownInRadioButtonAndCheckbox=!0,xe.GlobalSettings.useAdvancedCardBottomTruncation=!1,xe.GlobalSettings.useAdvancedTextBlockTruncation=!0}createSerializationContext(t){let n=new xe.SerializationContext(t);return n.setElementRegistry(this.elementsRegistry),n.setActionRegistry(this.actionsRegistry),n}getBackgroundColor(){return"#F6F6F6"}parseElement(t,n,i){}anchorClicked(t,n){return!1}getHostConfig(){return new xe.HostConfig(Mo)}requiresOverflowStyling(){return!1}adjustStyleForBackground(){}supportsActionBar=!1;get cardHost(){return this._cardHost}get isFixedHeight(){return!1}get elementsRegistry(){return this._elementsRegistry}get actionsRegistry(){return this._actionsRegistry}get targetVersion(){return xe.Versions.v1_0}get enableDeviceEmulation(){return!1}get supportsMultipleSizes(){return!1}static get supportedContainerThemes(){return Object.values(zo)}static get supportedDeviceEmulations(){return Object.values(cu)}get supportsMultipleThemes(){return!1}set colorTheme(t){}};var Xn=Ke(je());var uu=Ke(je());var dt=class extends rt{_colorTheme="Light";_cssFileName;_hostConfigLight;_hostConfigDark;_lightBackground;_darkBackground;constructor(t,n,i,r,o,a){super(t),this._cssFileName=n,this._hostConfigLight=i,this._hostConfigDark=r,this._lightBackground=o,this._darkBackground=a}getCurrentStyleSheet(){return`./containers/${this._cssFileName}-${this._colorTheme.toLowerCase()}.css`}getHostConfig(){return new uu.HostConfig(this._colorTheme==="Light"?this._hostConfigLight:this._hostConfigDark)}getBackgroundColor(){return this._colorTheme==="Light"?this._lightBackground:this._darkBackground}set colorTheme(t){this._colorTheme=t}get colorTheme(){return this._colorTheme}get supportsMultipleThemes(){return!0}};var Oo={};Se(Oo,{containerStyles:()=>vp,default:()=>Ep,fontFamily:()=>gp,fontSizes:()=>mp,fontTypes:()=>bp,fontWeights:()=>yp,imageSizes:()=>Cp,separator:()=>Sp,spacing:()=>hp,supportsInteractivity:()=>pp,textBlock:()=>xp,textStyles:()=>Ap});var pp=!0,hp={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},gp="'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",mp={small:12,default:14,medium:18,large:20,extraLarge:28},yp={lighter:400,default:400,bolder:600},bp={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}}},vp={default:{foregroundColors:{default:{default:"#E4000000",subtle:"#9E000000"},light:{default:"#FFFFFFFF",subtle:"#C5FFFFFF"},dark:{default:"#000000",subtle:"#000000"},accent:{default:"#003E92",subtle:"#003E92"},good:{default:"#0F7B0F",subtle:"#0F7B0F"},warning:{default:"#9D5D00",subtle:"#9D5D00"},attention:{default:"#C42B1C",subtle:"#C42B1C"}}}},Cp={small:32,medium:52,large:100},Ap={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},xp={maxWidth:"252px"},Sp={lineThickness:1,lineColor:"#333333"},Ep={supportsInteractivity:pp,spacing:hp,fontFamily:gp,fontSizes:mp,fontWeights:yp,fontTypes:bp,containerStyles:vp,imageSizes:Cp,textStyles:Ap,textBlock:xp,separator:Sp};var _o={};Se(_o,{containerStyles:()=>Bp,default:()=>_p,fontFamily:()=>Tp,fontSizes:()=>kp,fontTypes:()=>Fp,fontWeights:()=>Pp,imageSizes:()=>zp,separator:()=>Op,spacing:()=>wp,supportsInteractivity:()=>Ip,textBlock:()=>Mp,textStyles:()=>Dp});var Ip=!0,wp={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Tp="'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",kp={small:12,default:14,medium:18,large:20,extraLarge:28},Pp={lighter:400,default:400,bolder:600},Fp={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Roboto', 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:20,extraLarge:28},fontWeights:{lighter:400,default:400,bolder:600}}},Bp={default:{foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#C5FFFFFF"},accent:{default:"#FF60CDFF",subtle:"#60CDFF"},dark:{default:"#E4000000",subtle:"#9E000000"},good:{default:"#6CCB5E",subtle:"#6CCB5E"},warning:{default:"#FCE100",subtle:"#FCE100"},attention:{default:"#FF99A4",subtle:"#FF99A4"}}}},Dp={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Mp={headingLevel:2},zp={small:32,medium:52,large:100},Op={lineThickness:1,lineColor:"#FFFFFF"},_p={supportsInteractivity:Ip,spacing:wp,fontFamily:Tp,fontSizes:kp,fontWeights:Pp,fontTypes:Fp,containerStyles:Bp,textStyles:Dp,textBlock:Mp,imageSizes:zp,separator:Op};var du=`
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
    height: 462px
}

.widget-medium-card {
    height: 304px;
}

.widget-small-card {
    height: 146px;
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
}`;var fu=`
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
`;var Cn=(i=>(i.Small="Small",i.Medium="Medium",i.Large="Large",i))(Cn||{}),vn=class extends dt{_containerSize;_outerFrame;constructor(t){super("Widgets Board","widget-container",Oo,_o,"#D2D2D2","#616161"),this._containerSize=t}initialize(){super.initialize(),Xn.GlobalSettings.removePaddingFromContainersWithBackgroundImage=!0}renderTo(t){this.cardHost.classList.remove("widget-small-card","widget-medium-card","widget-large-card"),this.cardHost.classList.add(`widget-${this._containerSize.toLowerCase()}-card`),this._outerFrame=document.createElement("div"),this._outerFrame.classList.add("widget-outer-container"),this._outerFrame.classList.add(`widget-${this._containerSize.toLowerCase()}-container`);let n=document.createElement("div");n.className="widget-header",this._outerFrame.appendChild(n);let i=document.createElement("p");i.className="widget-header-text",i.textContent="Widget Header",n.appendChild(i);let r=document.createElement("div");r.className="widget-header-more-button",r.setAttribute("role","button"),r.tabIndex=0,n.appendChild(r);let o=document.createElement("div");o.className="widget-inner-container",o.appendChild(this.cardHost),this._outerFrame.appendChild(o),t.appendChild(this._outerFrame);let a=document.createElement("style");this.colorTheme=="Dark"?a.innerHTML=du:a.innerHTML=fu,t.appendChild(a)}requiresOverflowStyling(){let t=document.getElementsByClassName("ac-adaptiveCard")[0],n=t.getBoundingClientRect().height,i=this.cardHost.getBoundingClientRect().height;return n>i?(this.applyWidgetOverflowStyling(t),!0):!1}applyWidgetOverflowStyling(t){t.style.height="100%";let n=this.addCardElementsWrapper(t);n.classList.add("no-overflow");let i=t.getElementsByClassName("ac-carousel-container");for(let r=0;r<i.length;r++){let o=i[r],a=o.getBoundingClientRect(),l=n.getBoundingClientRect(),s=a.bottom-16,c=a.bottom;if(c>=l.bottom&&c<l.bottom+vn.widgetPadding||s>=l.bottom&&s<l.bottom+vn.widgetPadding){t.classList.add("no-overflow"),n.classList.remove("no-overflow"),o.style.marginBottom=vn.widgetPadding+"px";break}}}addCardElementsWrapper(t){let n=document.createElement("div");return n.classList.add("ac-card-elements-wrapper"),Array.from(t.children).forEach(i=>{n.appendChild(i)}),t.appendChild(n),n}adjustStyleForBackground(){this._outerFrame.classList.remove("widget-small-container-no-border","widget-medium-container-no-border","widget-large-container-no-border"),document.getElementsByClassName("ac-adaptiveCard")[0].style.backgroundImage&&this._outerFrame.classList.add(`widget-${this._containerSize.toLowerCase()}-container-no-border`)}get targetVersion(){return Xn.Versions.v1_6}get isFixedHeight(){return!0}set containerSize(t){this._containerSize=t}get supportsMultipleSizes(){return!0}static get supportedContainerSizes(){return Object.values(Cn)}},Nt=vn;ea(Nt,"widgetPadding",16);var hu=Ke(je());var ft=class extends rt{_styleSheet;constructor(t,n){super(t),this._styleSheet=n}getCurrentStyleSheet(){return this._styleSheet}};var pu=`.cortana-outer-frame {
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
}`;var Vo={};Se(Vo,{actions:()=>$p,adaptiveCard:()=>qp,containerStyles:()=>Yp,default:()=>Qp,factSet:()=>Up,fontTypes:()=>Np,imageSet:()=>jp,imageSizes:()=>Wp,separator:()=>Vp,spacing:()=>Rp,supportsInteractivity:()=>Lp,textBlock:()=>Gp,textStyles:()=>Hp});var Rp={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},Vp={lineThickness:1,lineColor:"#FF999999"},Lp=!0,Np={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:13,default:15,medium:18,large:20,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:13,default:15,medium:18,large:20,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},Hp={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Gp={headingLevel:2},Yp={default:{borderColor:"#666666",backgroundColor:"#000000",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF000000",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},emphasis:{borderColor:"#33CCCCCC",backgroundColor:"#33FFFFFF",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},accent:{default:"#FF2E89FC",subtle:"#CC2E89FC"},dark:{default:"#FF999999",subtle:"#99999999"},light:{default:"#FFFFFFFF",subtle:"#99FFFFFF"},attention:{default:"#CCFF0000",subtle:"#99FF0000"},good:{default:"#CC00FF00",subtle:"#9900FF00"},warning:{default:"#CCFF9800",subtle:"#99FF9800"}}}},Wp={small:40,medium:68,large:320},$p={maxActions:5,spacing:"default",buttonSpacing:5,showCard:{actionMode:"inline",inlineTopMargin:20},actionsOrientation:"horizontal",actionAlignment:"stretch"},qp={allowCustomStyle:!1},jp={imageSize:"small",maxImageHeight:100},Up={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:12},Qp={spacing:Rp,separator:Vp,supportsInteractivity:Lp,fontTypes:Np,textStyles:Hp,textBlock:Gp,containerStyles:Yp,imageSizes:Wp,actions:$p,adaptiveCard:qp,imageSet:jp,factSet:Up};var Kn=class extends ft{renderTo(t){this.cardHost.classList.add("cortana-card");let n=document.createElement("div");n.classList.add("cortana-leftside");let i=document.createElement("div");i.classList.add("cortana-topleft");let r=document.createElement("div");r.classList.add("cortana-middleleft");let o=document.createElement("div");o.classList.add("cortana-bottomleft"),n.appendChild(i),n.appendChild(r),n.appendChild(o);let a=document.createElement("div");a.classList.add("cortana-rightside");let l=document.createElement("div");l.classList.add("cortana-header");let s=document.createElement("div");s.classList.add("cortana-searchbox");let c=document.createElement("div");c.classList.add("cortana-searchbox-magnifyingglass");let u=document.createElement("div");u.classList.add("cortana-searchbox-middle");let d=document.createElement("div");d.classList.add("cortana-searchbox-microphone"),s.appendChild(c),s.appendChild(u),s.appendChild(d),a.appendChild(l),a.appendChild(this.cardHost),a.appendChild(s);let p=document.createElement("div");p.classList.add("cortana-frame"),p.appendChild(n),p.appendChild(a),t.classList.add("cortana-outer-frame"),t.appendChild(p);let m=document.createElement("style");m.innerHTML=pu,t.appendChild(m)}getHostConfig(){return new hu.HostConfig(Vo)}};var yu=Ke(je());var Lo={};Se(Lo,{actions:()=>oh,containerStyles:()=>rh,default:()=>lh,factSet:()=>sh,fontSizes:()=>nh,fontTypes:()=>Zp,fontWeights:()=>ih,imageSet:()=>ah,imageSizes:()=>Kp,separator:()=>Xp,spacing:()=>Jp,textBlock:()=>th,textStyles:()=>eh});var Jp={small:4,default:8,medium:12,padding:16,large:20,extraLarge:32},Xp={lineThickness:1,lineColor:"#E6E6E6"},Kp={small:32,medium:48,large:96},Zp={default:{fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"Courier New, Courier, monospace",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},eh={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},th={headingLevel:2},nh={small:12,default:14,medium:16,large:18,extraLarge:24},ih={lighter:200,default:400,bolder:600},rh={default:{borderColor:"#CCCCCC",backgroundColor:"#ffffff",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},emphasis:{borderColor:"#717171",backgroundColor:"#F2F2F2",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#E5F1FA",foregroundColors:{default:{default:"#000000",subtle:"#737373"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},good:{borderColor:"#69E569",backgroundColor:"#107C10",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D4E7D4"},dark:{default:"#000000",subtle:"#073707"},light:{default:"#FFFFFF",subtle:"#D4E7D4"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},attention:{borderColor:"#FF764C",backgroundColor:"#C50F1F",foregroundColors:{default:{default:"#FFFFFF",subtle:"#F4D4D7"},dark:{default:"#000000",subtle:"#58060D"},light:{default:"#FFFFFF",subtle:"#F4D4D7"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FCE100",foregroundColors:{default:{default:"#000000",subtle:"#716500"},dark:{default:"#000000",subtle:"#716500"},light:{default:"#FFFFFF",subtle:"#FEF9D2"},accent:{default:"#0078D4",subtle:"#004D8C"},good:{default:"#107C10",subtle:"#0B6A0B"},warning:{default:"#CA5010",subtle:"#8E562E"},attention:{default:"#C50F1F",subtle:"#A80000"}}}},oh={maxActions:5,spacing:"Default",buttonSpacing:12,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"Emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Stretch",iconSize:20,iconPlacement:"leftOfTitle"},ah={imageSize:"Medium",maxImageHeight:100},sh={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:12},lh={spacing:Jp,separator:Xp,imageSizes:Kp,fontTypes:Zp,textStyles:eh,textBlock:th,fontSizes:nh,fontWeights:ih,containerStyles:rh,actions:oh,imageSet:ah,factSet:sh};var No={};Se(No,{actions:()=>bh,containerStyles:()=>yh,default:()=>Ah,factSet:()=>Ch,fontSizes:()=>gh,fontTypes:()=>fh,fontWeights:()=>mh,imageSet:()=>vh,imageSizes:()=>dh,separator:()=>uh,spacing:()=>ch,textBlock:()=>hh,textStyles:()=>ph});var ch={small:4,default:8,medium:12,padding:16,large:20,extraLarge:32},uh={lineThickness:1,lineColor:"#505050"},dh={small:32,medium:48,large:96},fh={default:{fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"Courier New, Courier, monospace",fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},ph={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},hh={headingLevel:2},gh={small:12,default:14,medium:16,large:18,extraLarge:24},mh={lighter:200,default:400,bolder:600},yh={default:{borderColor:"#666666",backgroundColor:"#222222",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},emphasis:{borderColor:"#717171",backgroundColor:"#2F2F2F",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#1B3345",foregroundColors:{default:{default:"#FFFFFF",subtle:"#D2D2D2"},dark:{default:"#000000",subtle:"#737373"},light:{default:"#FFFFFF",subtle:"#D2D2D2"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},good:{borderColor:"#69E569",backgroundColor:"#92C353",foregroundColors:{default:{default:"#000000",subtle:"#415725"},dark:{default:"#000000",subtle:"#415725"},light:{default:"#FFFFFF",subtle:"#EBF4E0"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},attention:{borderColor:"#FF764C",backgroundColor:"#D74553",foregroundColors:{default:{default:"#000000",subtle:"#601F25"},dark:{default:"#000000",subtle:"#601F25"},light:{default:"#FFFFFF",subtle:"#F7DEE0"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#F8D22A",foregroundColors:{default:{default:"#000000",subtle:"#6F5E12"},dark:{default:"#000000",subtle:"#6F5E12"},light:{default:"#FFFFFF",subtle:"#FDF7D9"},accent:{default:"#82C7FF",subtle:"#3AA0F3"},good:{default:"#92C353",subtle:"#498205"},warning:{default:"#F8D22A",subtle:"#C19C00"},attention:{default:"#D74553",subtle:"#D13438"}}}},bh={maxActions:5,spacing:"Default",buttonSpacing:12,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"Emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Stretch",iconSize:20,iconPlacement:"leftOfTitle"},vh={imageSize:"Medium",maxImageHeight:100},Ch={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0,maxWidth:150},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:12},Ah={spacing:ch,separator:uh,imageSizes:dh,fontTypes:fh,textStyles:ph,textBlock:hh,fontSizes:gh,fontWeights:mh,containerStyles:yh,actions:bh,imageSet:vh,factSet:Ch};var gu=`.ac-media-poster {}

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
}`;var mu=`.ac-media-poster {}

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
}`;var Zn=class extends dt{constructor(){super("Cortana Skills","cortana-container",Lo,No,"#F6F6F6","#201E1F")}renderTo(t){var n=document.createElement("div");n.appendChild(this.cardHost),t.appendChild(n);let i=document.createElement("style");this.colorTheme=="Dark"?i.innerHTML=gu:i.innerHTML=mu,t.appendChild(i)}get targetVersion(){return yu.Versions.v1_2}get enableDeviceEmulation(){return!0}};var X=Ke(je());var bu=`
@font-face {
  font-family: 'FabricMDL2Icons';
  src: url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff2?2.21") format("woff2"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.woff?2.21") format("woff"), url("https://static2.sharepointonline.com/files/fabric/assets/icons/fabricmdl2icons.ttf?2.21") format("truetype");
  font-weight: normal;
  font-style: normal;
}

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
}`;var Ho={};Se(Ho,{actions:()=>Bh,adaptiveCard:()=>Dh,containerStyles:()=>Fh,default:()=>Oh,factSet:()=>zh,fontTypes:()=>Th,imageSet:()=>Mh,imageSizes:()=>wh,preExpandSingleShowCardAction:()=>xh,separator:()=>Ih,spacing:()=>Eh,supportsInteractivity:()=>Sh,textBlock:()=>Ph,textStyles:()=>kh});var xh=!0,Sh=!0,Eh={small:10,default:20,medium:30,large:40,extraLarge:50,padding:20},Ih={lineThickness:1,lineColor:"#EEEEEE"},wh={small:40,medium:80,large:160},Th={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},kh={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Ph={headingLevel:2},Fh={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},emphasis:{borderColor:"#666666",backgroundColor:"#08000000",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#FFFFFF",subtle:"#33000000"},accent:{default:"#2E89FC",subtle:"#882E89FC"},attention:{default:"#cc3300",subtle:"#DDcc3300"},good:{default:"#028A02",subtle:"#DD027502"},warning:{default:"#e69500",subtle:"#DDe69500"}}}},Bh={maxActions:5,spacing:"default",buttonSpacing:10,showCard:{actionMode:"inline",inlineTopMargin:16},actionsOrientation:"horizontal",actionAlignment:"left"},Dh={allowCustomStyle:!0},Mh={imageSize:"medium",maxImageHeight:100},zh={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:10},Oh={preExpandSingleShowCardAction:xh,supportsInteractivity:Sh,spacing:Eh,separator:Ih,imageSizes:wh,fontTypes:Th,textStyles:kh,textBlock:Ph,containerStyles:Fh,actions:Bh,adaptiveCard:Dh,imageSet:Mh,factSet:zh};var ei=class extends ft{constructor(t,n){super(t,n),this.actionsRegistry.unregister("Action.Submit"),this.actionsRegistry.register("Action.Http",X.HttpAction)}renderTo(t){this.cardHost.classList.add("outlook-frame"),t.appendChild(this.cardHost);let n=document.createElement("style");n.innerHTML=bu,t.appendChild(n)}initialize(){super.initialize(),X.GlobalSettings.useMarkdownInRadioButtonAndCheckbox=!1}parsePadding(t){if(t){if(typeof t=="string"){var n=X.parseEnum(X.Spacing,t,X.Spacing.None);return new X.PaddingDefinition(n,n,n,n)}else if(typeof t=="object")return new X.PaddingDefinition(X.parseEnum(X.Spacing,t.top,X.Spacing.None),X.parseEnum(X.Spacing,t.right,X.Spacing.None),X.parseEnum(X.Spacing,t.bottom,X.Spacing.None),X.parseEnum(X.Spacing,t.left,X.Spacing.None))}return null}parseElement(t,n,i){if(t instanceof X.Container&&typeof n.rtl=="boolean"&&(t.rtl=n.rtl),t instanceof X.AdaptiveCard){var r=t,o=[];if(r.resources={actions:o},typeof n.resources=="object"){var a=n.resources.actions;for(let s=0;s<a.length;s++){let c=this.actionsRegistry.createInstance(a[s].type,i.targetVersion);c&&(c.parse(a[s],i),c.setParent(r),o.push(c))}}}if(t instanceof X.Image&&(t.backgroundColor=n.backgroundColor),t instanceof X.Container){var l=this.parsePadding(n.padding);l&&(t.padding=l)}if(t instanceof X.ColumnSet){var l=this.parsePadding(n.padding);l&&(t.padding=l)}}anchorClicked(t,n){var i=/^action:([a-z0-9]+)$/ig,r=t.getRootElement(),o=i.exec(n.href);if(o){var a=o[1];if(r){var l=r.resources.actions;for(let s=0;s<l.length;s++)if(l[s].id==a)return l[s].execute(),!0}}return!1}getHostConfig(){return new X.HostConfig(Ho)}get targetVersion(){return X.Versions.v1_4}get enableDeviceEmulation(){return!0}};var Au=Ke(je());var Go={};Se(Go,{actions:()=>$h,adaptiveCard:()=>qh,choiceSetInputValueSeparator:()=>_h,containerStyles:()=>Wh,default:()=>Qh,factSet:()=>Uh,fontTypes:()=>Hh,imageSet:()=>jh,imageSizes:()=>Nh,separator:()=>Lh,spacing:()=>Vh,supportsInteractivity:()=>Rh,textBlock:()=>Yh,textStyles:()=>Gh});var _h=",",Rh=!0,Vh={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Lh={lineThickness:1,lineColor:"#EEEEEE"},Nh={small:32,medium:52,large:100},Hh={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},Gh={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},Yh={headingLevel:2},Wh={default:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#CCCCCC",backgroundColor:"#ffffff"},emphasis:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#666666",backgroundColor:"#fff9f8f7"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}}},$h={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},qh={allowCustomStyle:!1},jh={imageSize:"Medium",maxImageHeight:100},Uh={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},Qh={choiceSetInputValueSeparator:_h,supportsInteractivity:Rh,spacing:Vh,separator:Lh,imageSizes:Nh,fontTypes:Hh,textStyles:Gh,textBlock:Yh,containerStyles:Wh,actions:$h,adaptiveCard:qh,imageSet:jh,factSet:Uh};var Yo={};Se(Yo,{actions:()=>og,adaptiveCard:()=>ag,choiceSetInputValueSeparator:()=>Jh,containerStyles:()=>rg,default:()=>cg,factSet:()=>lg,fontTypes:()=>eg,imageSet:()=>sg,imageSizes:()=>ig,separator:()=>Zh,spacing:()=>Kh,supportsInteractivity:()=>Xh,textBlock:()=>ng,textStyles:()=>tg});var Jh=",",Xh=!0,Kh={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Zh={lineThickness:1,lineColor:"#EEEEEE"},eg={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},tg={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},ng={headingLevel:2},ig={small:32,medium:52,large:100},rg={default:{foregroundColors:{default:{default:"#ffffffff",subtle:"#bfffffff"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}},borderColor:"#CCCCCC",backgroundColor:"#ff2d2c2c"},emphasis:{foregroundColors:{default:{default:"#ffffffff",subtle:"#bfffffff"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}},borderColor:"#666666",backgroundColor:"#ff292828"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff201f1f",subtle:"#ff2d2c2c"},dark:{default:"#ff201f1f",subtle:"#ff2d2c2c"},light:{default:"#ffffffff",subtle:"#bfffffff"},accent:{default:"#ffa6a7dc",subtle:"#ff8b8cc7"},good:{default:"#ff92c353",subtle:"#e592c353"},warning:{default:"#fff8d22a",subtle:"#e5f8d22a"},attention:{default:"#ffd74654",subtle:"#e5d74654"}}}},og={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},ag={allowCustomStyle:!1},sg={imageSize:"Medium",maxImageHeight:100},lg={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},cg={choiceSetInputValueSeparator:Jh,supportsInteractivity:Xh,spacing:Kh,separator:Zh,fontTypes:eg,textStyles:tg,textBlock:ng,imageSizes:ig,containerStyles:rg,actions:og,adaptiveCard:ag,imageSet:sg,factSet:lg};var vu=`.teams-frame {
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
}`;var Cu=`.teams-frame {
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
}`;var ti=class extends dt{constructor(){super("Microsoft Teams","teams-container",Go,Yo,"#F6F6F6","#201E1F")}renderTo(t){var n=document.createElement("div");n.className="teams-frame";var i=document.createElement("div");i.className="teams-hexagon-outer";var r=document.createElement("div");r.className="teams-hexagon-inner";var o=document.createElement("div");o.className="teams-bot-logo",i.appendChild(r),r.appendChild(o),n.appendChild(i);let a=document.createElement("div");a.className="teams-inner-frame",this.cardHost.classList.add("teams-card");let l=document.createElement("div");l.className="teams-botNameAndTime",l.innerText="Test Bot    2:36 PM",a.appendChild(l),a.appendChild(this.cardHost),n.appendChild(a),t.appendChild(n);let s=document.createElement("style");this.colorTheme=="Dark"?s.innerHTML=vu:s.innerHTML=Cu,t.appendChild(s)}get targetVersion(){return Au.Versions.v1_4}get enableDeviceEmulation(){return!0}};var ii=Ke(je());var xu=`.ac-media-poster {}

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
}`;var Wo={};Se(Wo,{actions:()=>bg,adaptiveCard:()=>vg,containerStyles:()=>mg,default:()=>xg,factSet:()=>Ag,fontTypes:()=>pg,imageSet:()=>Cg,imageSizes:()=>yg,separator:()=>dg,spacing:()=>ug,supportsInteractivity:()=>fg,textBlock:()=>gg,textStyles:()=>hg});var ug={small:3,default:8,medium:20,large:30,extraLarge:40,padding:10},dg={lineThickness:1,lineColor:"#EEEEEE"},fg=!0,pg={default:{fontFamily:"Calibri, sans-serif",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:17,large:21,extraLarge:26},fontWeights:{lighter:200,default:400,bolder:600}}},hg={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},gg={headingLevel:2},mg={default:{borderColor:"#CCCCCC",backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#0063B1",subtle:"#0063B1"},attention:{default:"#EC130E",subtle:"#DDEC130E"},good:{default:"#028A02",subtle:"#DD028A02"},light:{default:"#646464",subtle:"#767676"},warning:{default:"#B75C00",subtle:"#DDB75C00"}}},emphasis:{borderColor:"#666666",backgroundColor:"#F9F9F9",foregroundColors:{default:{default:"#000000",subtle:"#6f6f6f"},accent:{default:"#1F6BF1",subtle:"#881F6BF1"},attention:{default:"#E31B13",subtle:"#DDE31B13"},good:{default:"#0D860A",subtle:"#DD0D860A"},warning:{default:"#BD5400",subtle:"#DDBD5400"},light:{default:"#737373",subtle:"#DD737373"}}},accent:{borderColor:"#62A8F7",backgroundColor:"#D7E7FA",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#145FDD",subtle:"#88145FDD"},attention:{default:"#C42C07",subtle:"#DDC42C07"},good:{default:"#0B7814",subtle:"#DD0B7814"},warning:{default:"#935A10",subtle:"#DD935A10"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#6E6E6E",subtle:"#336E6E6E"},accent:{default:"#2168E4",subtle:"#882168E4"},attention:{default:"#CC3300",subtle:"#DDCC3300"},good:{default:"#0F8109",subtle:"#DD0F8109"},warning:{default:"#9A630D",subtle:"#DD9A630D"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#5A5A5A",subtle:"#335A5A5A"},accent:{default:"#0854C5",subtle:"#880854C5"},attention:{default:"#A92E0E",subtle:"#DDA92E0E"},good:{default:"#256824",subtle:"#DD256824"},warning:{default:"#775502",subtle:"#DD775502"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#333333",subtle:"#EE333333"},dark:{default:"#000000",subtle:"#66000000"},light:{default:"#646464",subtle:"#33646464"},accent:{default:"#0F60DC",subtle:"#880F60DC"},attention:{default:"#BF3505",subtle:"#DDBF3505"},good:{default:"#207725",subtle:"#DD207725"},warning:{default:"#866107",subtle:"#DD866107"}}}},yg={small:40,medium:80,large:160},bg={maxActions:100,spacing:"default",buttonSpacing:8,showCard:{actionMode:"inline",inlineTopMargin:8},actionsOrientation:"vertical",actionAlignment:"stretch"},vg={allowCustomStyle:!1},Cg={imageSize:"medium",maxImageHeight:100},Ag={title:{color:"default",size:"default",isSubtle:!1,weight:"bolder",wrap:!0,maxWidth:150},value:{color:"default",size:"default",isSubtle:!1,weight:"default",wrap:!0},spacing:8},xg={spacing:ug,separator:dg,supportsInteractivity:fg,fontTypes:pg,textStyles:hg,textBlock:gg,containerStyles:mg,imageSizes:yg,actions:bg,adaptiveCard:vg,imageSet:Cg,factSet:Ag};var ni=class extends ft{renderTo(t){this.cardHost.classList.add("webChatOuterContainer");let n=document.createElement("div");n.className="webChatInnerContainer",n.appendChild(this.cardHost),t.appendChild(n);let i=document.createElement("style");i.innerHTML=xu,t.appendChild(i)}getHostConfig(){return new ii.HostConfig(Wo)}get targetVersion(){return ii.Versions.v1_3}};var Su=`@font-face {
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
}`;var Iu=Ke(je());var $o={};Se($o,{actions:()=>Fg,adaptiveCard:()=>Bg,containerStyles:()=>Pg,default:()=>zg,factSet:()=>Mg,fontTypes:()=>kg,imageSet:()=>Dg,imageSizes:()=>Tg,preExpandSingleShowCardAction:()=>Sg,separator:()=>wg,spacing:()=>Ig,supportsInteractivity:()=>Eg});var Sg=!0,Eg=!0,Ig={small:4,default:8,medium:16,large:24,extraLarge:32,padding:16},wg={lineThickness:1,lineColor:"#EDEBE9"},Tg={small:72,medium:164,large:256},kg={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}}},Pg={default:{backgroundColor:"#FFFFFF",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},emphasis:{backgroundColor:"#FAF9F8",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},accent:{backgroundColor:"#E2E2F6",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},good:{backgroundColor:"#DFF6DD",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},attention:{backgroundColor:"#FED9CC",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}},warning:{backgroundColor:"#FFF4CE",foregroundColors:{default:{default:"#323130",subtle:"#8A8886"},dark:{default:"#000000",subtle:"#605E5C"},light:{default:"#F3F2F1",subtle:"#E1DFDD"},accent:{default:"#5B5FC7",subtle:"#C5CBFA"},attention:{default:"#A80000",subtle:"#A3A80000"},good:{default:"#107C10",subtle:"#A3107C10"},warning:{default:"#797673",subtle:"#A19F9D"}}}},Fg={maxActions:5,spacing:"Default",buttonSpacing:10,showCard:{actionMode:"Inline",inlineTopMargin:16},actionsOrientation:"Horizontal",actionAlignment:"Left"},Bg={allowCustomStyle:!0},Dg={imageSize:"Medium",maxImageHeight:100},Mg={title:{color:"Default",size:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{color:"Default",size:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:8},zg={preExpandSingleShowCardAction:Sg,supportsInteractivity:Eg,spacing:Ig,separator:wg,imageSizes:Tg,fontTypes:kg,containerStyles:Pg,actions:Fg,adaptiveCard:Bg,imageSet:Dg,factSet:Mg};var qo={};Se(qo,{actions:()=>Gg,adaptiveCard:()=>Yg,containerStyles:()=>Hg,default:()=>qg,factSet:()=>$g,fontTypes:()=>Ng,imageSet:()=>Wg,imageSizes:()=>Lg,preExpandSingleShowCardAction:()=>Og,separator:()=>Vg,spacing:()=>Rg,supportsInteractivity:()=>_g});var Og=!0,_g=!0,Rg={small:4,default:8,medium:16,large:24,extraLarge:32,padding:16},Vg={lineThickness:1,lineColor:"#292827"},Lg={small:72,medium:164,large:256},Ng={default:{fontFamily:"'Segoe UI', 'Segoe UI Web (West European)', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', sans-serif",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:18,large:24,extraLarge:32},fontWeights:{lighter:300,default:400,bolder:600}}},Hg={default:{backgroundColor:"#1b1a19",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#252423",subtle:"#323130"},light:{default:"#ffffff",subtle:"#a19f9d"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},emphasis:{backgroundColor:"#201f1e",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},accent:{backgroundColor:"#0a0802",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},good:{backgroundColor:"#393d1b",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},attention:{backgroundColor:"#4f2a0f",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}},warning:{backgroundColor:"#433519",foregroundColors:{default:{default:"#f3f2f1",subtle:"#a19f9d"},dark:{default:"#ffffff",subtle:"#a19f9d"},light:{default:"#252423",subtle:"#323130"},accent:{default:"#7F85F5",subtle:"#5B5FC7"},attention:{default:"#f1707b",subtle:"#A3A80000"},good:{default:"#92c353",subtle:"#A392c353"},warning:{default:"#c8c6c4",subtle:"#A19F9D"}}}},Gg={maxActions:5,spacing:"Default",buttonSpacing:10,showCard:{actionMode:"Inline",inlineTopMargin:16},actionsOrientation:"Horizontal",actionAlignment:"Left"},Yg={allowCustomStyle:!0},Wg={imageSize:"Medium",maxImageHeight:100},$g={title:{color:"Default",size:"Default",isSubtle:!1,weight:"Bolder",wrap:!0,maxWidth:150},value:{color:"Default",size:"Default",isSubtle:!1,weight:"Default",wrap:!0},spacing:8},qg={preExpandSingleShowCardAction:Og,supportsInteractivity:_g,spacing:Rg,separator:Vg,imageSizes:Lg,fontTypes:Ng,containerStyles:Hg,actions:Gg,adaptiveCard:Yg,imageSet:Wg,factSet:$g};var Eu=`@font-face {
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
}`;var ri=class extends dt{constructor(){super("Viva Connections","viva-connections-container",$o,qo,"#F6F6F6","#1b1a19")}renderTo(t){this.cardHost.classList.add("vivaConnectionsContainer");let n=document.createElement("div");n.className="vivaConnectionsContainer",n.appendChild(this.cardHost),t.appendChild(n);let i=document.createElement("style");this.colorTheme=="Dark"?i.innerHTML=Eu:i.innerHTML=Su,t.appendChild(i)}get targetVersion(){return Iu.Versions.v1_3}};var ai=Ke(je());var wu=`a.ac-anchor:hover {
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
}`;var jo={};Se(jo,{actions:()=>nm,adaptiveCard:()=>im,choiceSetInputValueSeparator:()=>jg,containerStyles:()=>tm,default:()=>am,factSet:()=>om,fontTypes:()=>Kg,imageSet:()=>rm,imageSizes:()=>Xg,separator:()=>Jg,spacing:()=>Qg,supportsInteractivity:()=>Ug,textBlock:()=>em,textStyles:()=>Zg});var jg=",",Ug=!0,Qg={small:8,default:12,medium:16,large:20,extraLarge:24,padding:16},Jg={lineThickness:1,lineColor:"#EEEEEE"},Xg={small:32,medium:52,large:100},Kg={default:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}},monospace:{fontFamily:"'Courier New', Courier, monospace",fontSizes:{small:12,default:14,medium:14,large:18,extraLarge:24},fontWeights:{lighter:200,default:400,bolder:600}}},Zg={heading:{fontType:"default",size:"large",weight:"bolder",color:"default",isSubtle:!1}},em={headingLevel:2},tm={default:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#CCCCCC",backgroundColor:"#ffffff"},emphasis:{foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}},borderColor:"#666666",backgroundColor:"#fff9f8f7"},accent:{borderColor:"#62A8F7",backgroundColor:"#C7DEF9",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},good:{borderColor:"#69E569",backgroundColor:"#CCFFCC",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},attention:{borderColor:"#FF764C",backgroundColor:"#FFC5B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}},warning:{borderColor:"#FFBC51",backgroundColor:"#FFE2B2",foregroundColors:{default:{default:"#ff252424",subtle:"#bf252424"},dark:{default:"#252424",subtle:"#bf252424"},light:{default:"#ffffff",subtle:"#fff3f2f1"},accent:{default:"#6264a7",subtle:"#8b8cc7"},good:{default:"#92c353",subtle:"#e592c353"},warning:{default:"#f8d22a",subtle:"#e5f8d22a"},attention:{default:"#c4314b",subtle:"#e5c4314b"}}}},nm={maxActions:6,spacing:"Default",buttonSpacing:8,showCard:{actionMode:"Inline",inlineTopMargin:16,style:"emphasis"},preExpandSingleShowCardAction:!1,actionsOrientation:"Horizontal",actionAlignment:"Left"},im={allowCustomStyle:!1},rm={imageSize:"Medium",maxImageHeight:100},om={title:{size:"Default",color:"Default",isSubtle:!1,weight:"Bolder",warp:!0},value:{size:"Default",color:"Default",isSubtle:!1,weight:"Default",warp:!0},spacing:16},am={choiceSetInputValueSeparator:jg,supportsInteractivity:Ug,spacing:Qg,separator:Jg,imageSizes:Xg,fontTypes:Kg,textStyles:Zg,textBlock:em,containerStyles:tm,actions:nm,adaptiveCard:im,imageSet:rm,factSet:om};var oi=class extends ft{constructor(t,n){super(t,n),this.actionsRegistry.unregister("Action.Submit"),this.elementsRegistry.unregister("Input.Text"),this.elementsRegistry.unregister("Input.Date"),this.elementsRegistry.unregister("Input.Time"),this.elementsRegistry.unregister("Input.Toggle"),this.elementsRegistry.unregister("Input.ChoiceSet"),this.elementsRegistry.unregister("Input.Number")}renderTo(t){this.cardHost.classList.add("fedsearch-card"),t.appendChild(this.cardHost);let n=document.createElement("style");n.innerHTML=wu,t.appendChild(n)}initialize(){super.initialize()}getHostConfig(){return new ai.HostConfig(jo)}get targetVersion(){return ai.Versions.v1_4}get enableDeviceEmulation(){return!0}};var ot=Ht("react"),ne=Ht("react/jsx-runtime");function Tu(e){let[t,n]=(0,ot.useState)(0),[i,r]=(0,ot.useState)(0),[o,a]=(0,ot.useState)(0),[l,s]=(0,ot.useState)(0),c=(0,ot.useRef)(null),u=(0,ot.useRef)(null),d=(0,ot.useRef)(),p=[new ni("Bot Framework WebChat","containers/webchat/webchat-container.css"),new ei("Outlook Actionable Messages","containers/outlook/outlook-container.css"),new ti,new ri,new Zn,new Kn("Cortana Skills (Classic)","containers/cortana-classic/cortana-container.css"),new oi("Federated Search","containers/federated-search/federated-search-container.css"),new Nt(Object.values(Cn)[o])],m=p[t],y=async()=>{var h=new si.AdaptiveCard;if(m.colorTheme=i==0?"Light":"Dark",m.constructor.name.endsWith("WidgetContainer")&&(m.containerSize=Object.values(Cn)[o]),h.hostConfig=new si.HostConfig(m.getHostConfig()),h.parse(JSON.parse(e.content)),c.current){for(;c.current.firstChild;)c.current.removeChild(c.current.firstChild);m.renderTo(c.current),h.render(m.cardHost),u.current&&(u.current.style.backgroundColor=m.getBackgroundColor())}if(d.current){let g=l,b=0;switch(m.enableDeviceEmulation||(g=0),g){case 1:b=320;break;case 2:b=414;break;case 3:b=768;break;case 4:b=1024;break;default:b=0;break}b>0?d.current.style.maxWidth=`${b}px`:d.current.style.maxWidth=""}};return(0,ot.useEffect)(()=>{y()},[t,i,o,l]),(0,ne.jsxs)(re.Box,{padding:"8px",children:[(0,ne.jsxs)(re.Box,{p:1,display:"flex",bg:"canvas.subtle",borderColor:"border.default",borderWidth:1,borderStyle:"solid",children:[(0,ne.jsx)(re.Box,{p:1,children:(0,ne.jsxs)(re.ActionMenu,{children:[(0,ne.jsxs)(re.ActionMenu.Button,{"aria-label":"Select host app",children:["Host app: ",m.name]}),(0,ne.jsx)(re.ActionMenu.Overlay,{children:(0,ne.jsx)(re.ActionList,{selectionVariant:"single",children:p.map((h,g)=>(0,ne.jsx)(re.ActionList.Item,{selected:g===t,onSelect:()=>n(g),children:h.name},g))})})]})}),(0,ne.jsx)(re.Box,{p:1,children:(0,ne.jsxs)(re.ActionMenu,{children:[(0,ne.jsxs)(re.ActionMenu.Button,{"aria-label":"Select theme",disabled:!m.supportsMultipleThemes,title:m.supportsMultipleThemes?"Select a theme":"This host does not support themes",children:["Theme: ",rt.supportedContainerThemes[i]]}),(0,ne.jsx)(re.ActionMenu.Overlay,{children:(0,ne.jsx)(re.ActionList,{selectionVariant:"single",children:rt.supportedContainerThemes.map((h,g)=>(0,ne.jsx)(re.ActionList.Item,{selected:g===i,onSelect:()=>r(g),children:h},g))})})]})}),m.constructor.name.endsWith("WidgetContainer")&&(0,ne.jsx)(re.Box,{p:1,children:(0,ne.jsxs)(re.ActionMenu,{children:[(0,ne.jsxs)(re.ActionMenu.Button,{"aria-label":"Select container size",disabled:!m.supportsMultipleSizes,children:["Container size: ",Nt.supportedContainerSizes[o]]}),(0,ne.jsx)(re.ActionMenu.Overlay,{children:(0,ne.jsx)(re.ActionList,{selectionVariant:"single",children:Nt.supportedContainerSizes.map((h,g)=>(0,ne.jsx)(re.ActionList.Item,{selected:g===o,onSelect:()=>a(g),children:h},g))})})]})}),(0,ne.jsx)(re.Box,{p:1,children:(0,ne.jsxs)(re.ActionMenu,{children:[(0,ne.jsxs)(re.ActionMenu.Button,{"aria-label":"Select device emulation",disabled:!m.enableDeviceEmulation,title:m.enableDeviceEmulation?"Select a device to emulate":"This host does not support device emulation",children:["Emulate device: ",rt.supportedDeviceEmulations[l]]}),(0,ne.jsx)(re.ActionMenu.Overlay,{children:(0,ne.jsx)(re.ActionList,{selectionVariant:"single",children:rt.supportedDeviceEmulations.map((h,g)=>(0,ne.jsx)(re.ActionList.Item,{selected:g===l,onSelect:()=>s(g),children:h},g))})})]})})]}),(0,ne.jsx)(re.Box,{borderColor:"border.default",borderWidth:1,borderStyle:"solid",borderTopStyle:"none",children:(0,ne.jsx)("div",{className:"acd-designer-cardArea",ref:u,children:(0,ne.jsx)("div",{style:{flex:"1 1 100%",overflow:"auto"},children:(0,ne.jsx)("div",{id:"designerHost",className:"acd-designer-host",ref:d,children:(0,ne.jsx)("div",{ref:c})})})})})]})}var ku=Ht("react/jsx-runtime");function sm(e){let{context:t,content:n,metadata:i,onUpdateMetadata:r}=e;return(0,ku.jsx)("div",{className:"overflow-y-auto w-full flex-1",children:(0,ku.jsx)(Tu,{content:n})})}return Zo(lm);})();
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
