(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{1336:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(r(0)),a=n(r(910)),l=n(r(873));function n(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("div",null,i.default.createElement(a.default,{eventId:l.default.eventId,result:l.default.result,isUnverified:!0})),i.default.createElement("div",null,i.default.createElement(a.default,{eventId:l.default.eventId,result:l.default.result,interpretation:"abnormal",isUnverified:!0}))))}},862:function(e,t,r){e.exports={IconCritical:"IconCritical-module__IconCritical___1b2V4"}},863:function(e,t,r){e.exports={IconHigh:"IconHigh-module__IconHigh___1uiOM"}},864:function(e,t,r){e.exports={IconLow:"IconLow-module__IconLow___2AfY8"}},865:function(e,t,r){e.exports={IconAbnormal:"IconAbnormal-module__IconAbnormal___yOSdN"}},872:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),a=o(r(3)),l=o(r(19)),n=o(r(862));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var u=a.default.bind(n.default),d=function(e){var t=s({},e),r=u(["IconCritical",e.className]);return i.default.createElement(l.default,s({className:r},t),i.default.createElement("path",{fill:"#E50000",d:"M47.7 23.2L24.8.3c-.4-.4-1.1-.4-1.6 0L.3 23.2c-.4.4-.4 1.1 0 1.6l22.9 22.9c.4.4 1.1.4 1.6 0l22.9-22.9c.4-.4.4-1.2 0-1.6z"}),i.default.createElement("path",{fill:"#FFF",d:"M27 39h-6v-6h6v6zm0-11h-6V8h6v20z"}))};d.displayName="IconCritical",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},873:function(e,t,r){"use strict";function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.EnteredInErrorDiaBPResult=t.EnteredInErrorSysBPResult=t.NoDataResult=t.DefaultBloodPressureDiastolicResultWithNoId=t.DefaultBloodPressureSystolicResultWithNoId=t.DefaultResultWithNoEventId=t.InterpretationBPResultsArray=t.ExtraDisplaysBloodPressureResult=t.UnverifiedBloodPressureResult2=t.UnverifiedBloodPressureResult1=t.DecoratedBloodPressureResult2=t.DecoratedBloodPressureResult1=t.DefaultBloodPressureResult=t.DefaultDiastolicResult=t.DefaultSystolicResult=t.EnteredInErrorResult=t.BadData=t.UnverifiedResult=t.DecoratedResult=t.SingleResultValue=t.default=void 0;t.DefaultResultWithNoEventId={id:"111",result:{value:"12345.678",unit:"mL"}};var n={eventId:"111",result:{value:"12345.678",unit:"mL"}},o=a({},n,{conceptDisplay:"Temperature Oral",datetimeDisplay:"Nov 23, 2019 13:31:31"});t.SingleResultValue=o;var s=a({},n,{isModified:!0,hasComment:!0,isUnverified:!1});t.DecoratedResult=s;var u=a({},n,{isModified:!1,hasComment:!1,isUnverified:!0});t.UnverifiedResult=u;t.BadData={eventId:"111",clinicalresult:{value:"354.23377777758678567867856785687678567856767868678567856785678567856785678567857856785678567856785678567856785678578567856",unit:"mmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHgmmHg"},interpretation:"critical"};var d=a({},n,{interpretation:"critical",status:"entered-in-error"});t.EnteredInErrorResult=d;var c={eventId:"111.1",result:{value:"180",unit:"mmHg"}};t.DefaultSystolicResult=c;var f={eventId:"111.2",result:{value:"80",unit:"mmHg"}};t.DefaultDiastolicResult=f;var m={systolic:a({},c)};t.DefaultBloodPressureSystolicResultWithNoId=m;var v={diastolic:a({},f)};t.DefaultBloodPressureDiastolicResultWithNoId=v;var p={id:"111",systolic:a({},c),diastolic:a({},f)};t.DefaultBloodPressureResult=p;var _={id:"111",systolic:a({},c,{isModified:!0,hasComment:!0,isUnverified:!1}),diastolic:a({},f,{isModified:!1,hasComment:!1,isUnverified:!1})};t.DecoratedBloodPressureResult1=_;var h={id:"111",systolic:a({},c,{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:a({},f,{isModified:!0,hasComment:!0,isUnverified:!1})};t.DecoratedBloodPressureResult2=h;var y={id:"111",systolic:a({},c,{isModified:!1,hasComment:!1,isUnverified:!0}),diastolic:a({},f,{isModified:!1,hasComment:!1,isUnverified:!1})};t.UnverifiedBloodPressureResult1=y;var b={id:"111",systolic:a({},c,{isModified:!1,hasComment:!1,isUnverified:!1}),diastolic:a({},f,{isModified:!1,hasComment:!1,isUnverified:!0})};t.UnverifiedBloodPressureResult2=b;var g={id:"111",systolic:a({},c,{conceptDisplay:"Blood Pressure Systolic",datetimeDisplay:"Nov 23, 2019 13:31:31"}),diastolic:a({},f,{conceptDisplay:"Blood Pressure Diastolic",datetimeDisplay:"Nov 23, 2019 13:31:44"})};t.ExtraDisplaysBloodPressureResult=g;var O={id:"111",systolic:a({},c,{interpretation:"critical"}),diastolic:a({},f,{interpretation:"low"})};t.NoDataResult={eventId:"",result:{value:null,unit:""},interpretation:"normal",isModified:!1,hasComment:!1,isUnverified:!1,resultNoData:!0};var w={id:"111",systolic:a({},c,{interpretation:"critical"}),diastolic:a({},f,{interpretation:"critical"})},P={id:"111",systolic:a({},c,{interpretation:"high"}),diastolic:a({},f,{interpretation:"high"})},E={id:"111",systolic:a({},c,{interpretation:"low"}),diastolic:a({},f,{interpretation:"low"})},I={id:"111",systolic:a({},c,{interpretation:"abnormal"}),diastolic:a({},f,{interpretation:"abnormal"})},M={id:"111",systolic:a({},c,{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1}),diastolic:a({},f,{isModified:!1,hasComment:!1})};t.EnteredInErrorSysBPResult=M;var j={id:"111",systolic:a({},c,{isModified:!1,hasComment:!1}),diastolic:a({},f,{status:"entered-in-error",interpretation:"critical",isModified:!1,hasComment:!1})};t.EnteredInErrorDiaBPResult=j;var D=[O,w,P,E,I];t.InterpretationBPResultsArray=D;var N=n;t.default=N},874:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),a=o(r(3)),l=o(r(19)),n=o(r(863));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var u=a.default.bind(n.default),d=function(e){var t=s({},e),r=u(["IconHigh",e.className]);return i.default.createElement(l.default,s({className:r},t),i.default.createElement("path",{fill:"#da3b03",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0a1.135 1.135 0 00-.8.3L.3 23.2a1.215 1.215 0 000 1.6l22.9 22.9a1.217 1.217 0 001.6 0l22.9-22.9a1.217 1.217 0 000-1.6L24.8.3A1.135 1.135 0 0024 0zm0 9L13 20h8v19h6V20h8z"}))};d.displayName="IconHigh",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},875:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),a=o(r(3)),l=o(r(19)),n=o(r(864));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var u=a.default.bind(n.default),d=function(e){var t=s({},e),r=u(["IconLow",e.className]);return i.default.createElement(l.default,s({className:r},t),i.default.createElement("path",{fill:"#0053E6",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.6.1-.8.3L.3 23.2c-.4.4-.4 1.2 0 1.6l22.9 22.9c.2.2.5.3.8.3s.6-.1.8-.3l22.9-22.9c.4-.4.4-1.1 0-1.6L24.8.3c-.2-.2-.5-.3-.8-.3zm0 39l11-11h-8V9h-6v19h-8l11 11z"}))};d.displayName="IconLow",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},876:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(r(0)),a=o(r(3)),l=o(r(19)),n=o(r(865));function o(e){return e&&e.__esModule?e:{default:e}}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}var u=a.default.bind(n.default),d=function(e){var t=s({},e),r=u(["IconAbnormal",e.className]);return i.default.createElement(l.default,s({className:r},t),i.default.createElement("path",{fill:"#654A08",d:"M24 2.3L45.7 24 24 45.7 2.3 24 24 2.3M24 0c-.3 0-.5.1-.8.3L.3 23.2c-.4.5-.4 1.1 0 1.6l22.9 22.9c.2.2.5.3.8.3s.5-.1.8-.3l22.9-22.9c.4-.5.4-1.1 0-1.6L24.8.3c-.3-.2-.5-.3-.8-.3zm0 8c3.9 3.9 4 13 4 13H15v6c0 10 9 13 9 13-3.9-3.9-4-13-4-13h13v-6c0-10-9-13-9-13z"}))};d.displayName="IconAbnormal",d.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=d;t.default=c},902:function(e,t,r){"use strict";var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((i=r(1))&&i.__esModule?i:{default:i}).default.oneOf(["critical","critical-high","critical-low","positive","abnormal","high","low","normal"]);t.default=a},903:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=r(1))&&i.__esModule?i:{default:i};var l=a.default.shape({value:a.default.oneOfType([a.default.string,a.default.arrayOf(a.default.string)]),unit:a.default.string});t.default=l},904:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(r(0)),a=r(7),l=s(r(280)),n=s(r(3)),o=s(r(905));function s(e){return e&&e.__esModule?e:{default:e}}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function d(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.default.bind(o.default),f={intl:a.intlShape.isRequired},m=function(e){var t=e.intl,r=d(e,["intl"]),a=c(["system-error"]);return i.default.createElement("span",u({},r,{className:r.className?"".concat(a," ").concat(r.className):a}),i.default.createElement(l.default,{className:c("icon-error"),"aria-hidden":"true"}),t.formatMessage({id:"Terra.clinicalResult.resultError"}))};m.propTypes=f;var v=(0,a.injectIntl)(m);t.default=v},905:function(e,t,r){e.exports={"entered-in-error":"OtherTemplates-module__entered-in-error___3Ge38","no-data":"OtherTemplates-module__no-data___27Cys","numeric-overflow":"OtherTemplates-module__numeric-overflow___3B9g4","system-error":"OtherTemplates-module__system-error___2V3F7","icon-error":"OtherTemplates-module__icon-error___3HCQc",truncated:"OtherTemplates-module__truncated___Eqkg6"}},910:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=v(r(0)),a=v(r(1)),l=v(r(3)),n=v(r(872)),o=v(r(874)),s=v(r(875)),u=v(r(876)),d=v(r(902)),c=v(r(903)),f=v(r(904)),m=v(r(913));function v(e){return e&&e.__esModule?e:{default:e}}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var h=l.default.bind(m.default),y={eventId:a.default.string,result:c.default,interpretation:d.default,isUnverified:a.default.bool,hideUnit:a.default.bool},b={critical:i.default.createElement(n.default,{className:h("icon-interpretation")}),"critical-high":i.default.createElement(n.default,{className:h("icon-interpretation")}),"critical-low":i.default.createElement(n.default,{className:h("icon-interpretation")}),positive:i.default.createElement(n.default,{className:h("icon-interpretation")}),abnormal:i.default.createElement(u.default,{className:h("icon-interpretation")}),high:i.default.createElement(o.default,{className:h("icon-interpretation")}),low:i.default.createElement(s.default,{className:h("icon-interpretation")})},g={critical:"critical","critical-high":"critical","critical-low":"critical",positive:"positive",abnormal:"abnormal",high:"high",low:"low"},O=function(e){e.eventId;var t=e.result,r=e.interpretation,a=e.isUnverified,l=e.hideUnit,n=_(e,["eventId","result","interpretation","isUnverified","hideUnit"]),o=!!t.value,s=h(["value",!a&&g[r],{unverified:a}]),u=h(["unit",{"unit-hidden":l}]);return o?i.default.createElement(i.default.Fragment,null,i.default.createElement("span",p({},n,{className:n.className?"".concat(s," ").concat(n.className):s}),r&&!a&&b[r],t.value),t.unit?i.default.createElement("span",{className:u},t.unit):null):i.default.createElement(f.default,null)};O.propTypes=y,O.defaultProps={result:{}};var w=O;t.default=w},913:function(e,t,r){e.exports={value:"Observation-module__value___1svy8","icon-interpretation":"Observation-module__icon-interpretation___GEwGN",abnormal:"Observation-module__abnormal___1_I6a",critical:"Observation-module__critical___1YAHR",high:"Observation-module__high___nOYKC",low:"Observation-module__low___NacId",positive:"Observation-module__positive___1Bwho",unverified:"Observation-module__unverified___WXBpI",unit:"Observation-module__unit___1aZl3","unit-hidden":"Observation-module__unit-hidden___1USSd"}}}]);
//# sourceMappingURL=60-bc431be93101efa5975c.js.map