"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[1093],{"./components/design-system/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Scenarios:()=>Scenarios,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/design-system/index.ts");const defaultMessage="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.",__WEBPACK_DEFAULT_EXPORT__={title:"design-system/Tooltip",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.m_,args:{label:defaultMessage},parameters:{layout:"centered"}},Default={args:{isOpen:!0,title:"Title",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.$,{children:"I do nothing"}),linkMessage:"Entendi",manualCloseable:!0}},Scenarios=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.T,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.m_,{label:defaultMessage,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.$,{children:"Message only"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.m_,{label:defaultMessage,title:"Title",onLinkClick:()=>{},linkMessage:"Entendi",manualCloseable:!0,onClose:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.$,{children:"With title and ack button"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.m_,{label:defaultMessage,title:"Title",externalLink:"http://example.com",linkMessage:"Entendi",manualCloseable:!0,onClose:()=>{},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.$,{children:"With external link"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.m_,{label:"hello",width:"auto",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.$,{children:"Width adjusted to its content"})})]}),__namedExportsOrder=["Default","Scenarios"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    title: 'Title',\n    children: <Button>I do nothing</Button>,\n    linkMessage: 'Entendi',\n    manualCloseable: true\n  }\n}",...Default.parameters?.docs?.source}}},Scenarios.parameters={...Scenarios.parameters,docs:{...Scenarios.parameters?.docs,source:{originalSource:'() => {\n  return <VStack>\n      <Tooltip label={defaultMessage}>\n        <Button>Message only</Button>\n      </Tooltip>\n      <Tooltip label={defaultMessage} title="Title" onLinkClick={() => {}} linkMessage="Entendi" manualCloseable onClose={() => {}}>\n        <Button>With title and ack button</Button>\n      </Tooltip>\n      <Tooltip label={defaultMessage} title="Title" externalLink="http://example.com" linkMessage="Entendi" manualCloseable onClose={() => {}}>\n        <Button>With external link</Button>\n      </Tooltip>\n      <Tooltip label={\'hello\'} width="auto">\n        <Button>Width adjusted to its content</Button>\n      </Tooltip>\n    </VStack>;\n}',...Scenarios.parameters?.docs?.source}}}}}]);