(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{1271:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(0)),r=u(n(3)),a=u(n(886)),o=u(n(914));function u(e){return e&&e.__esModule?e:{default:e}}var d=r.default.bind(o.default),i=l.default.createElement("div",{id:"headerTest--startContent",className:d("start-content")}),f=l.default.createElement("div",{id:"headerTest--endContent",className:d("end-content")});t.default=function(){return l.default.createElement(a.default,{startContent:i,title:"Subheader with content on the left and right",endContent:f,isSubheader:!0})}},886:function(e,t,n){"use strict";function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=r?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,t&&t.set(e,n);return n}(n(0)),a=f(n(1)),o=f(n(184)),u=f(n(3)),d=f(n(107)),i=f(n(890));function f(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=u.default.bind(i.default),p={children:a.default.element,startContent:a.default.element,title:a.default.string,endContent:a.default.element,isSubheader:a.default.bool},b=function(e){var t,n=e.children,l=e.title,a=e.startContent,u=e.endContent,i=e.isSubheader,f=_(e,["children","title","startContent","endContent","isSubheader"]),c=(0,r.useContext)(d.default);l&&(t=r.default.createElement("div",{className:m("title-container")},r.default.createElement("h1",{className:m("title")},l)));var p=r.default.Children.map(n,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([m("flex-collapse"),n.props.className])})})),b=(0,o.default)([m(["flex-header",{subheader:i},c.className]),f.className]);return r.default.createElement("header",s({},f,{className:b}),a&&r.default.createElement("div",{className:m("flex-end")},a),r.default.createElement("div",{className:m("flex-fill")},t),p,u&&r.default.createElement("div",{className:m("flex-end")},u))};b.propTypes=p,b.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1};var h=b;t.default=h},890:function(e,t,n){e.exports={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___2YlJ5","orion-fusion-theme":"Header-module__orion-fusion-theme___1TCqa","flex-header":"Header-module__flex-header___2wv08","flex-collapse":"Header-module__flex-collapse___1nKL2",subheader:"Header-module__subheader___1Uvh0","flex-fill":"Header-module__flex-fill___N5EV1","flex-end":"Header-module__flex-end___2yMyE","title-container":"Header-module__title-container___2bn_o",title:"Header-module__title___3MCz6"}},914:function(e,t,n){e.exports={"start-content":"ClinicalHeaderCommon-test-module__start-content___2Zj5r","end-content":"ClinicalHeaderCommon-test-module__end-content___1ST2Q",content:"ClinicalHeaderCommon-test-module__content___6wnTY"}}}]);
//# sourceMappingURL=140-5b559be5866fca62ad24.js.map