(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{1281:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(0)),a=o(l(922));function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(y,e);var t,l,o,r,d=(t=y,function(){var e,l=m(t);if(f()){var n=m(this).constructor;e=Reflect.construct(l,arguments,n)}else e=l.apply(this,arguments);return u(this,e)});function y(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,y),(t=d.call(this,e)).state={selectedItemKey:"1"},t.handleSelection=t.handleSelection.bind(s(t)),t}return l=y,(o=[{key:"handleSelection",value:function(e,t){this.setState({selectedItemKey:t})}},{key:"render",value:function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"This a POC Selectable ItemCollection Example."),n.default.createElement("p",null,"This example it set up to be a single-selection example, however the Item Collection gives implementors the flexibility to create their own selection implementation."),n.default.createElement("p",{id:"selected-key"},"Selected Item:",this.state.selectedItemKey),n.default.createElement(a.default,{id:"ItemCollection",onSelect:this.handleSelection,hasStartAccessory:!0,numberOfDisplays:3,hasComment:!0,hasEndAccessory:!0,breakpoint:"medium",ariaLabel:"Item Collection"},n.default.createElement(a.default.Item,{id:"item1",key:"1",isSelectable:!0,isSelected:"1"===this.state.selectedItemKey,startAccessory:n.default.createElement(a.default.Comment,null),comment:n.default.createElement(a.default.Comment,{text:"test comment"}),endAccessory:n.default.createElement("button",{type:"button",size:"medium"},"Disclose"),showListItemChevron:!0},n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 2"})),n.default.createElement(a.default.Item,{id:"item2",key:"2",isSelected:"2"===this.state.selectedItemKey,isSelectable:!0,comment:n.default.createElement(a.default.Comment,{text:"test comment"}),endAccessory:n.default.createElement("button",{type:"button",size:"medium"},"Disclose"),showListItemChevron:!0},n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 2"})),n.default.createElement(a.default.Item,{id:"item3",key:"3",isSelected:"3"===this.state.selectedItemKey,isSelectable:!0,startAccessory:n.default.createElement(a.default.Comment,null),comment:n.default.createElement(a.default.Comment,{text:"test comment"})},n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 1"}),n.default.createElement(a.default.Display,{text:"Display 2"}))))}}])&&c(l.prototype,o),r&&c(l,r),y}(n.default.Component);t.default=d}}]);
//# sourceMappingURL=175-a9bcc8df5460d96c4c45.js.map