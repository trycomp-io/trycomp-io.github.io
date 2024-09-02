"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[129],{"./components/design-system/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Scenarios:()=>Scenarios,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Scenarios$parameters,_Scenarios$parameters2,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/index.ts"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var defaultMessage="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/Tooltip",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.u,args:{label:defaultMessage},parameters:{layout:"centered"}};var Default={args:{isOpen:!0,title:"Title",children:__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,null,"I do nothing"),linkMessage:"Entendi",manualCloseable:!0}},Scenarios=function Scenarios(){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.g,null,__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.u,{label:defaultMessage},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,null,"Message only")),__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.u,{label:defaultMessage,title:"Title",onLinkClick:function onLinkClick(){},linkMessage:"Entendi",manualCloseable:!0,onClose:function onClose(){}},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,null,"With title and ack button")),__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.u,{label:defaultMessage,title:"Title",externalLink:"http://example.com",linkMessage:"Entendi",manualCloseable:!0,onClose:function onClose(){}},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,null,"With external link")),__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.u,{label:"hello",width:"auto"},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.z,null,"Width adjusted to its content")))};Scenarios.displayName="Scenarios",Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    isOpen: true,\n    title: 'Title',\n    children: <Button>I do nothing</Button>,\n    linkMessage: 'Entendi',\n    manualCloseable: true\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Scenarios.parameters=_objectSpread(_objectSpread({},Scenarios.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Scenarios$parameters=Scenarios.parameters)||void 0===_Scenarios$parameters?void 0:_Scenarios$parameters.docs),{},{source:_objectSpread({originalSource:'() => {\n  return <VStack>\n      <Tooltip label={defaultMessage}>\n        <Button>Message only</Button>\n      </Tooltip>\n      <Tooltip label={defaultMessage} title="Title" onLinkClick={() => {}} linkMessage="Entendi" manualCloseable onClose={() => {}}>\n        <Button>With title and ack button</Button>\n      </Tooltip>\n      <Tooltip label={defaultMessage} title="Title" externalLink="http://example.com" linkMessage="Entendi" manualCloseable onClose={() => {}}>\n        <Button>With external link</Button>\n      </Tooltip>\n      <Tooltip label={\'hello\'} width="auto">\n        <Button>Width adjusted to its content</Button>\n      </Tooltip>\n    </VStack>;\n}'},null===(_Scenarios$parameters2=Scenarios.parameters)||void 0===_Scenarios$parameters2||null===(_Scenarios$parameters2=_Scenarios$parameters2.docs)||void 0===_Scenarios$parameters2?void 0:_Scenarios$parameters2.source)})});const __namedExportsOrder=["Default","Scenarios"]}}]);