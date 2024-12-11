"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[3107],{"./stories/onboarding/StartExcelTableModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StartExcelTableModal_stories});var _Normal$parameters,_Normal$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),Modal=__webpack_require__("./components/design-system/Modal.tsx"),design_system=__webpack_require__("./components/design-system/index.ts"),__jsx=react.createElement;function StartExcelTableModal(_ref){var isOpen=_ref.isOpen,onSave=_ref.onSave,startRow=_ref.startRow,error=_ref.error,onClose=_ref.onClose,_useState=(0,react.useState)(startRow),internalStartRow=_useState[0],setInternalStartRow=_useState[1];return __jsx(Modal.a,{isOpen,actionLabel:"Salvar",actionOnClick:function handleSave(){onSave(internalStartRow)},title:"Nos ajude a encontrar seus dados",onClose},__jsx(chunk_MPFPK3CX.s,{gap:"1rem",direction:"column","data-testid":"StartExcelTableModal"},__jsx(chunk_P74GIWPW.E,null,"Precisamos que nos informe em qual linha está o cabeçalho da sua tabela."),__jsx(design_system.A_,{type:"number",label:"Número da linha",text:"number"==typeof startRow?String(startRow):"",onChange:function onChange(v){setInternalStartRow(""===v?void 0:Number(v))},errorMessage:error})))}StartExcelTableModal.displayName="StartExcelTableModal";try{StartExcelTableModal.displayName="StartExcelTableModal",StartExcelTableModal.__docgenInfo={description:"",displayName:"StartExcelTableModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(startRow?: number | undefined) => void"}},startRow:{defaultValue:null,description:"",name:"startRow",required:!0,type:{name:"number | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"]={docgenInfo:StartExcelTableModal.__docgenInfo,name:"StartExcelTableModal",path:"components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"})}catch(__react_docgen_typescript_loader_error){}var StartExcelTableModal_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const StartExcelTableModal_stories={title:"onboarding/StartExcelTableModal",component:StartExcelTableModal,parameters:{layout:"centered"}};var Template=function Template(args){return StartExcelTableModal_stories_jsx(StartExcelTableModal,args)};Template.displayName="Template";var Normal=Template.bind({});Normal.args={isOpen:!0,onSave:function onSave(){return null},startRow:0,error:void 0},Normal.parameters=_objectSpread(_objectSpread({},Normal.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Normal$parameters=Normal.parameters)||void 0===_Normal$parameters?void 0:_Normal$parameters.docs),{},{source:_objectSpread({originalSource:"args => <StartExcelTableModal {...args} />"},null===(_Normal$parameters2=Normal.parameters)||void 0===_Normal$parameters2||null===(_Normal$parameters2=_Normal$parameters2.docs)||void 0===_Normal$parameters2?void 0:_Normal$parameters2.source)})});const __namedExportsOrder=["Normal"]}}]);