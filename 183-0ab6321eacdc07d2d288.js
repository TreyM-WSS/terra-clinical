(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{1305:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n(0)),o=i(n(860)),u=i(n(909));function i(t){return t&&t.__esModule?t:{default:t}}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function c(t,e){return(c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){return!e||"object"!==a(e)&&"function"!=typeof e?s(t):e}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&c(t,e)}(b,t);var e,n,i,a,y=(e=b,function(){var t,n=d(e);if(p()){var r=d(this).constructor;t=Reflect.construct(n,arguments,r)}else t=n.apply(this,arguments);return f(this,t)});function b(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,b),e=y.call(this,t),o.default.now=function(){return new Date(2016,8,20)},e.state={precision:"on/at",granularity:"month"},e.handleOnset=e.handleOnset.bind(s(e)),e.handleSubmit=e.handleSubmit.bind(s(e)),e}return n=b,(i=[{key:"handleOnset",value:function(t){this.setState({precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit})}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.setState((function(t){return{submittedData:{precision:t.precision,granularity:t.granularity,onsetDate:t.onsetDate,ageUnit:t.ageUnit}}}))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("p",null,"Onset picker with minimum required fields and onChange handlers, supplied with a birthdate of 3 weeks old."),r.default.createElement("p",null,"Current date locked to September 20, 2016"),r.default.createElement("p",null,"Testing age granularity selection restrictions."),r.default.createElement("form",{onSubmit:this.handleSubmit},r.default.createElement(u.default,{birthdate:(0,o.default)().subtract(3,"weeks").format("YYYY-MM-DD"),id:"test",legend:"Date of Onset",onsetOnChange:this.handleOnset}),r.default.createElement("button",{type:"submit"},"Submit")),r.default.createElement("p",{"data-test-json":!0},JSON.stringify(this.state.submittedData,null,2)))}}])&&l(n.prototype,i),a&&l(n,a),b}(r.default.Component);e.default=y}}]);
//# sourceMappingURL=183-0ab6321eacdc07d2d288.js.map