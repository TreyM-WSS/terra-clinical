(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{861:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(1)),n=u(a(3)),o=u(a(879));function u(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function _(e,t,a){return t&&c(e.prototype,t),a&&c(e,a),e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var b=n.default.bind(o.default),h={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(r,e);var t,a=(t=r,function(){var e,a=m(t);if(f()){var l=m(this).constructor;e=Reflect.construct(a,arguments,l)}else e=a.apply(this,arguments);return i(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=a.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(p(t)),t.handleCodeToggle=t.handleCodeToggle.bind(p(t)),t}return _(r,null,[{key:"renderHeader",value:function(e){return e?l.default.createElement("div",{className:b("header")},l.default.createElement("h2",{className:b("title")},e)):null}},{key:"renderDescription",value:function(e){return e?l.default.createElement("div",{className:b("description")},e):null}}]),_(r,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,a=e.exampleSrc,n=e.title,o=e.description,u=this.state,d=u.isExpanded,c=u.isBackgroundTransparent;return l.default.createElement("div",{className:b("template")},r.renderHeader(n),l.default.createElement("div",{className:b("content",{"dynamic-content":c})},r.renderDescription(o),t),a&&l.default.createElement("div",{className:b("footer")},l.default.createElement("div",{className:b("button-container")},l.default.createElement("button",{type:"button",className:b("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),l.default.createElement("button",{type:"button",className:b("code-toggle"),onClick:this.handleCodeToggle},l.default.createElement("span",{className:b("chevron-left")}),l.default.createElement("span",null,"Code"),l.default.createElement("span",{className:b("chevron-right")}))),d&&l.default.createElement("div",{className:b("code")},a)))}}]),r}(l.default.Component);g.propTypes=h,g.defaultProps={isExpanded:!1};var v=g;t.default=v},869:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(1)),n=u(a(3)),o=u(a(870));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},_=function(e){var t=e.src,a=e.name,r=e.url,n=e.version,o=l.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},l.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(n))),u=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,u)};_.propTypes=c;var s=_;t.default=s},870:function(e,t,a){e.exports={badge:"Badges-module__badge___3m7y2","badge-container":"Badges-module__badge-container___1YxI5","badge-name":"Badges-module__badge-name___BQ3u4","badge-version":"Badges-module__badge-version___3OgwS"}},879:function(e,t,a){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},884:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(1)),n=u(a(3)),o=u(a(888));function u(e){return e&&e.__esModule?e:{default:e}}var d=n.default.bind(o.default),c={rows:r.default.arrayOf(r.default.shape({name:r.default.string,type:r.default.func,required:r.default.bool,defaultValue:r.default.string,description:r.default.func}))},_=function(e){var t=e.rows;return l.default.createElement("table",{className:d("table")},l.default.createElement("thead",null,l.default.createElement("tr",{className:d("tr")},l.default.createElement("th",{className:d("th")},"Prop Name"),l.default.createElement("th",{className:d("th")},"Type"),l.default.createElement("th",{className:d("th")},"Is Required"),l.default.createElement("th",{className:d("th")},"Default Value"),l.default.createElement("th",{className:d("th")},"Description"))),l.default.createElement("tbody",null,t.map((function(e){return l.default.createElement("tr",{className:d(["tr","props-tr"]),key:e.name},l.default.createElement("td",{className:d(["td","strong","props-td"])},e.name),l.default.createElement("td",{className:d(["td","props-td"])},e.type()),l.default.createElement("td",{className:d(["td","props-td",e.required?["required"]:[]])},e.required?"required":"optional"),l.default.createElement("td",{className:d(["td","props-td"])},e.defaultValue),l.default.createElement("td",{className:d(["td","props-td"])},e.description()))}))))};_.propTypes=c;var s=_;t.default=s},888:function(e,t,a){e.exports={a:"PropsTable-module__a___6WaJD",blockquote:"PropsTable-module__blockquote___2loIo",code:"PropsTable-module__code___1vedU",dd:"PropsTable-module__dd___3pYcW",dl:"PropsTable-module__dl___397p5",dt:"PropsTable-module__dt___1-GVs",h1:"PropsTable-module__h1___1OAAp",h2:"PropsTable-module__h2___2iZ6i",h3:"PropsTable-module__h3___3N0fw",h4:"PropsTable-module__h4___214vu",h5:"PropsTable-module__h5___1ajw8",h6:"PropsTable-module__h6___19W7i","icon-link":"PropsTable-module__icon-link___HUOC7",anchor:"PropsTable-module__anchor___1UTVD",hr:"PropsTable-module__hr___15B3j",img:"PropsTable-module__img___1rEq-",input:"PropsTable-module__input___1WHRX",kbd:"PropsTable-module__kbd___2DvPC",li:"PropsTable-module__li___1T8DQ",p:"PropsTable-module__p___3ssgC",ol:"PropsTable-module__ol___2tCva",ul:"PropsTable-module__ul___DlvOz",td:"PropsTable-module__td___3svU1",pre:"PropsTable-module__pre___3qXsS",strong:"PropsTable-module__strong___2DSlR",table:"PropsTable-module__table___1sV8g",th:"PropsTable-module__th___RQkAz",tr:"PropsTable-module__tr___1dras",icon:"PropsTable-module__icon___1fv-c",required:"PropsTable-module__required___1b3oJ","props-tr":"PropsTable-module__props-tr___1c88t","props-td":"PropsTable-module__props-td___dEhbY"}},917:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),n=u(a(19)),o=u(a(920));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var c=r.default.bind(o.default),_=function(e){var t=d({},e),a=c(["IconAlert",e.className]);return l.default.createElement(n.default,d({className:a},t),l.default.createElement("path",{fill:"#E50000",d:"M1.2 45c-1.1 0-1.6-.8-1-1.7L23 3.7c.5-1 1.4-1 2 0l22.8 39.6c.5 1 .1 1.7-1 1.7H1.2z"}),l.default.createElement("path",{fill:"#FFF",d:"M21.5 36.7h5V42h-5v-5.3zm0-22.7h5v17.3h-5V14z"}))};_.displayName="IconAlert",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var s=_;t.default=s},919:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(0)),r=n(a(19));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M24 0a11.3 11.3 0 11-11.3 11.3A11.35 11.35 0 0124 0zm19.5 48v-5.7a16.77 16.77 0 00-16.8-16.8h-5.5A16.75 16.75 0 004.5 42.3V48z"}))};u.displayName="IconPerson",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=u;t.default=d},920:function(e,t,a){e.exports={IconAlert:"IconAlert-module__IconAlert___A0JST"}},921:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(0)),r=u(a(3)),n=u(a(19)),o=u(a(931));function u(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}var c=r.default.bind(o.default),_=function(e){var t=d({},e),a=c(["IconInformation",e.className]);return l.default.createElement(n.default,d({className:a},t),l.default.createElement("path",{fill:"#007CC3",d:"M24 0c13.3 0 24 10.7 24 24S37.3 48 24 48 0 37.3 0 24C0 10.8 10.7 0 23.9 0h.1z"}),l.default.createElement("path",{fill:"#FFF",d:"M24.1 32.7c.7-1.8 6.3-11 2.4-13.5-2.2-1.4-5.2-.5-7.6 1.2l-.2 1.6c1.4-.5 2.8-.5 3.2.7 1 2.9-2.5 8-3.5 10.7-2.6 7.2 3.7 8.1 8.1 5.1l.2-1.7c-2.3.6-4-.3-2.6-4.1zM26.5 8c1.9 0 3.5 1.6 3.5 3.5S28.4 15 26.5 15 23 13.4 23 11.5 24.6 8 26.5 8z"}))};_.displayName="IconInformation",_.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var s=_;t.default=s},931:function(e,t,a){e.exports={IconInformation:"IconInformation-module__IconInformation___mwQQR"}}}]);
//# sourceMappingURL=8-a42b9ff42f7385dc3fda.js.map