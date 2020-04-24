(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{1122:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(0)),r=u(n(53)),l=u(n(891)),i=u(n(3)),a=u(n(906)),c=u(n(908));function u(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?b(e):t}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var h=i.default.bind(c.default),g=[{id:"Column-0",width:200,text:"Column 0"},{id:"Column-1",width:200,text:"Column 1"},{id:"Column-2",width:200,text:"Column 2"}],x=[{id:"Column-3",width:200,text:"Column 3"},{id:"Column-4",width:200,text:"Column 4"},{id:"Column-5",width:200,text:"Column 5"},{id:"Column-6",width:200,text:"Column 6"},{id:"Column-7",width:200,text:"Column 7"},{id:"Column-8",width:200,text:"Column 8"},{id:"Column-9",width:200,text:"Column 9"}],v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(i,e);var t,n=(t=i,function(){var e,n=y(t);if(_()){var o=y(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return m(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=n.call(this,e)).buildSection=t.buildSection.bind(b(t)),t.state={collapsedSectionId:void 0},t}return f(i,null,[{key:"buildRows",value:function(e,t){return new Array(t).fill().map((function(t,n){return{id:"".concat(e,"-Row").concat(n),cells:new Array(10).fill(0).map((function(e,t){return"Column-".concat(t)})).map((function(e){return{columnId:e,component:o.default.createElement(a.default,{text:"Row-".concat(n,", Column ").concat(e)})}}))}}))}}]),f(i,[{key:"buildSection",value:function(e,t,n){return{id:e,text:t,endAccessory:"section_1"===e?o.default.createElement("span",null,o.default.createElement(r.default,{text:"Button 1",isCompact:!0,"data-accessible-data-grid-content":!0}),o.default.createElement(r.default,{text:"Button 2",isCompact:!0,"data-accessible-data-grid-content":!0})):null,isCollapsible:"section_0"===e,isCollapsed:this.state.collapsedSectionId===e,rows:i.buildRows(e,n)}}},{key:"render",value:function(){var e=this;return o.default.createElement("div",{className:h("data-grid-basic")},o.default.createElement(l.default,{id:"subsections-example",pinnedColumns:g,overflowColumns:x,sections:[this.buildSection("section_0","Section 0",15),this.buildSection("section_1","Section 1",15),this.buildSection("section_2","Section 2",15)],onRequestSectionCollapse:function(t){e.state.collapsedSectionId===t?e.setState({collapsedSectionId:void 0}):e.setState({collapsedSectionId:t})},fill:!0}))}}]),i}(o.default.Component);t.default=v},1358:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(0),r=n.n(o),l=n(279),i=n(1122),a=n.n(i);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function d(e){var t=e.components,n=u(e,["components"]);return Object(l.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("pre",null,Object(l.mdx)("code",c({parentName:"pre"},{className:"language-jsx"}),"import React from 'react';\nimport Button from 'terra-button';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst pinnedColumns = [\n  {\n    id: 'Column-0',\n    width: 200,\n    text: 'Column 0',\n  },\n  {\n    id: 'Column-1',\n    width: 200,\n    text: 'Column 1',\n  },\n  {\n    id: 'Column-2',\n    width: 200,\n    text: 'Column 2',\n  },\n];\n\nconst overflowColumns = [\n  {\n    id: 'Column-3',\n    width: 200,\n    text: 'Column 3',\n  },\n  {\n    id: 'Column-4',\n    width: 200,\n    text: 'Column 4',\n  },\n  {\n    id: 'Column-5',\n    width: 200,\n    text: 'Column 5',\n  },\n  {\n    id: 'Column-6',\n    width: 200,\n    text: 'Column 6',\n  },\n  {\n    id: 'Column-7',\n    width: 200,\n    text: 'Column 7',\n  },\n  {\n    id: 'Column-8',\n    width: 200,\n    text: 'Column 8',\n  },\n  {\n    id: 'Column-9',\n    width: 200,\n    text: 'Column 9',\n  },\n];\n\nclass DatagridWithSubsections extends React.Component {\n  static buildRows(sectionId, num) {\n    const rows = (new Array(num)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionId}-Row${rowIndex}`,\n      cells: ((new Array(10).fill(0)).map((cellVal, cellIndex) => (`Column-${cellIndex}`))).map(columnKey => ({\n        columnId: columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, Column ${columnKey}`} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n\n    this.state = {\n      collapsedSectionId: undefined,\n    };\n  }\n\n  buildSection(sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      endAccessory: (sectionId === 'section_1') ? (\n        <span>\n          <Button text=\"Button 1\" isCompact data-accessible-data-grid-content />\n          <Button text=\"Button 2\" isCompact data-accessible-data-grid-content />\n        </span>\n      ) : null,\n      isCollapsible: sectionId === 'section_0',\n      isCollapsed: this.state.collapsedSectionId === sectionId,\n      rows: DatagridWithSubsections.buildRows(sectionId, numberOfRows),\n    };\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"subsections-example\"\n          pinnedColumns={pinnedColumns}\n          overflowColumns={overflowColumns}\n          sections={[\n            this.buildSection('section_0', 'Section 0', 15),\n            this.buildSection('section_1', 'Section 1', 15),\n            this.buildSection('section_2', 'Section 2', 15),\n          ]}\n          onRequestSectionCollapse={(sectionId) => {\n            if (this.state.collapsedSectionId === sectionId) {\n              this.setState({ collapsedSectionId: undefined });\n            } else {\n              this.setState({ collapsedSectionId: sectionId });\n            }\n          }}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithSubsections;\n\n")))}d.isMDXComponent=!0;var f=n(861),p=n.n(f),m=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(p.a,{title:t||"Datagrid With Subsections",description:n,example:r.a.createElement(a.a,null),exampleSrc:r.a.createElement(d,null),isExpanded:o})};function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function h(e){var t=e.components,n=_(e,["components"]);return Object(l.mdx)("wrapper",b({},y,n,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)(m,{description:"This example features multiple subsections. Section 0 is collapsible. \nThe header for Section 1 contains keyboard-accessible content in its endAccessory region.",mdxType:"DatagridWithSubsections"}))}h.isMDXComponent=!0},861:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1)),l=a(n(3)),i=a(n(879));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?p(e):t}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var _=l.default.bind(i.default),y={example:r.default.element,exampleSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e);var t,n=(t=r,function(){var e,n=b(t);if(m()){var o=b(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return f(this,e)});function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),(t=n.call(this,e)).state={isExpanded:e.isExpanded,isBackgroundTransparent:!1},t.handleBgToggle=t.handleBgToggle.bind(p(t)),t.handleCodeToggle=t.handleCodeToggle.bind(p(t)),t}return s(r,null,[{key:"renderHeader",value:function(e){return e?o.default.createElement("div",{className:_("header")},o.default.createElement("h2",{className:_("title")},e)):null}},{key:"renderDescription",value:function(e){return e?o.default.createElement("div",{className:_("description")},e):null}}]),s(r,[{key:"handleBgToggle",value:function(){this.setState((function(e){return{isBackgroundTransparent:!e.isBackgroundTransparent}}))}},{key:"handleCodeToggle",value:function(){this.setState((function(e){return{isExpanded:!e.isExpanded}}))}},{key:"render",value:function(){var e=this.props,t=e.example,n=e.exampleSrc,l=e.title,i=e.description,a=this.state,c=a.isExpanded,u=a.isBackgroundTransparent;return o.default.createElement("div",{className:_("template")},r.renderHeader(l),o.default.createElement("div",{className:_("content",{"dynamic-content":u})},r.renderDescription(i),t),n&&o.default.createElement("div",{className:_("footer")},o.default.createElement("div",{className:_("button-container")},o.default.createElement("button",{type:"button",className:_("bg-toggle"),onClick:this.handleBgToggle},"Toggle Background"),o.default.createElement("button",{type:"button",className:_("code-toggle"),onClick:this.handleCodeToggle},o.default.createElement("span",{className:_("chevron-left")}),o.default.createElement("span",null,"Code"),o.default.createElement("span",{className:_("chevron-right")}))),c&&o.default.createElement("div",{className:_("code")},n)))}}]),r}(o.default.Component);h.propTypes=y,h.defaultProps={isExpanded:!1};var g=h;t.default=g},879:function(e,t,n){e.exports={template:"ExampleTemplate-module__template___2Cn_e",header:"ExampleTemplate-module__header___1Uk65",content:"ExampleTemplate-module__content___2BfpO",description:"ExampleTemplate-module__description___17dwL",footer:"ExampleTemplate-module__footer___2qb8M","button-container":"ExampleTemplate-module__button-container___305lx",code:"ExampleTemplate-module__code____AmLF","bg-toggle":"ExampleTemplate-module__bg-toggle___3RP_x","code-toggle":"ExampleTemplate-module__code-toggle___25ONK","chevron-left":"ExampleTemplate-module__chevron-left___3vfkd","chevron-right":"ExampleTemplate-module__chevron-right___YOdVB",title:"ExampleTemplate-module__title___5hduh","dynamic-content":"ExampleTemplate-module__dynamic-content___1b8Fh"}},906:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(0)),r=a(n(1)),l=a(n(3)),i=a(n(907));function a(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(i.default),u={text:r.default.string},s=function(e){var t=e.text;return o.default.createElement("div",{className:c("content-cell")},t)};s.propTypes=u;var d=s;t.default=d},907:function(e,t,n){e.exports={"content-cell":"ContentCellLayout__content-cell___2cQUx"}},908:function(e,t,n){e.exports={"data-grid-basic":"Datagrid-module__data-grid-basic___JemKm","data-grid-row-style":"Datagrid-module__data-grid-row-style___rlH80","data-grid-paging":"Datagrid-module__data-grid-paging___1TByK","loading-overlay":"Datagrid-module__loading-overlay___2pZWs"}}}]);
//# sourceMappingURL=116-d9cca1a7b04efa07b22d.js.map