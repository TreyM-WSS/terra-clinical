(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{1306:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(n(0)),a=u(n(860)),o=u(n(909));function u(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function d(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(b,t);var e,n,u,i,y=(e=b,function(){var t,n=p(e);if(d()){var r=p(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return f(this,t)});function b(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),e=y.call(this,t),a.default.now=function(){return new Date(2016,8,20)},e.state={precision:"before",granularity:"year"},e.handleOnset=e.handleOnset.bind(s(e)),e.handleSubmit=e.handleSubmit.bind(s(e)),e}return n=b,(u=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){var t=(0,a.default)().subtract(6,"days");return r.default.createElement("div",null,r.default.createElement("p",null,"Onset picker with age to be less than a week."),r.default.createElement("p",null,"Current date locked to ".concat((0,a.default)().format("MM-DD-YYYY"))),r.default.createElement("p",null,"Birthdate locked to ".concat(t.format("MM-DD-YYYY"))),r.default.createElement("p",null,"Testing age granularity to not be populated for age less than a week."),r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement(o.default,{birthdate:t.format("YYYY-MM-DD"),id:"test",legend:"Date of Onset",onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit"),this.state.submittedData&&r.default.createElement("div",null,r.default.createElement("hr",null),r.default.createElement("p",null,"Form was submitted with"),r.default.createElement("p",null,JSON.stringify(this.state.submittedData)))))}}])&&l(n.prototype,u),i&&l(n,i),b}(r.default.Component);e.default=y}}]);
//# sourceMappingURL=184-2544ea0a1c309a2c54cf.js.map