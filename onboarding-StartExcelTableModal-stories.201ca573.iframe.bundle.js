"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[732],{"./stories/onboarding/StartExcelTableModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StartExcelTableModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YBA5A33G=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_YLPWWAYV=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YLPWWAYV.mjs"),chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_YI7XFFAC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs"),chunk_HUQHYERK=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs"),chunk_VFYM6BU6=__webpack_require__("./node_modules/@chakra-ui/checkbox/dist/chunk-VFYM6BU6.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),__jsx=react.createElement,Modal=function Modal(_ref){var _ref$isOpen=_ref.isOpen,isOpen=void 0===_ref$isOpen||_ref$isOpen,actionLabel=_ref.actionLabel,actionOnClick=_ref.actionOnClick,actionIsLoading=_ref.actionIsLoading,actionDisabled=_ref.actionDisabled,secondaryActionLabel=_ref.secondaryActionLabel,secondaryActionOnClick=_ref.secondaryActionOnClick,secondaryActionIsLoading=_ref.secondaryActionIsLoading,title=_ref.title,onClose=_ref.onClose,children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$dataTestId=_ref.dataTestId,dataTestId=void 0===_ref$dataTestId?"Modal":_ref$dataTestId,_ref$showDividers=_ref.showDividers,showDividers=void 0===_ref$showDividers||_ref$showDividers,customHeader=_ref.customHeader,showOptionCheckbox=_ref.showOptionCheckbox,onOptionCheckboxChange=_ref.onOptionCheckboxChange,optionCheckboxText=_ref.optionCheckboxText,showFooter=void 0!==secondaryActionLabel&&void 0!==secondaryActionOnClick||void 0!==actionLabel&&void 0!==actionOnClick;return __jsx(chunk_UUGUEMMH.u_,{isOpen,onClose:function handleClose(){null==onClose||onClose()},isCentered:!0,size,scrollBehavior:"inside"},__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,{borderRadius:"1rem",maxH:"90vh","data-testid":dataTestId},__jsx(chunk_YBA5A33G.x,null,null!=customHeader?customHeader:title),showDividers&&__jsx(chunk_6CSUKJP7.xu,{as:"hr"}),void 0!==onClose&&__jsx(chunk_YLPWWAYV.o,null),__jsx(chunk_PVJ72NKC.f,null,children),showDividers&&__jsx(chunk_6CSUKJP7.xu,{pb:"1rem",as:"hr"}),showFooter&&__jsx(chunk_YI7XFFAC.m,null,__jsx(chunk_HUQHYERK.U,{w:"100%",gap:"1rem",justifyContent:"space-between"},showOptionCheckbox&&void 0!==optionCheckboxText&&__jsx(chunk_HUQHYERK.U,{width:"100%"},__jsx(chunk_VFYM6BU6.X,{size:"md",onChange:onOptionCheckboxChange},__jsx(chunk_P74GIWPW.x,{fontSize:"sm"},optionCheckboxText))),__jsx(chunk_HUQHYERK.U,{width:"100%",justifyContent:"flex-end"},void 0!==secondaryActionLabel&&secondaryActionOnClick?__jsx(chunk_NAA7TEES.z,{variant:"link",size:"lg",color:"black.1000",onClick:secondaryActionOnClick,isLoading:secondaryActionIsLoading},secondaryActionLabel):null,void 0!==actionLabel&&actionOnClick?__jsx(chunk_NAA7TEES.z,{variant:"red",size:"lg",onClick:actionOnClick,isDisabled:actionDisabled,isLoading:actionIsLoading},actionLabel):null)))))};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},actionOnClick:{defaultValue:null,description:"",name:"actionOnClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},actionDisabled:{defaultValue:null,description:"",name:"actionDisabled",required:!1,type:{name:"boolean"}},actionIsLoading:{defaultValue:null,description:"",name:"actionIsLoading",required:!1,type:{name:"boolean"}},secondaryActionLabel:{defaultValue:null,description:"",name:"secondaryActionLabel",required:!1,type:{name:"string"}},secondaryActionIsLoading:{defaultValue:null,description:"",name:"secondaryActionIsLoading",required:!1,type:{name:"boolean"}},secondaryActionOnClick:{defaultValue:null,description:"",name:"secondaryActionOnClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"full"'}]}},dataTestId:{defaultValue:{value:"Modal"},description:"",name:"dataTestId",required:!1,type:{name:"string"}},showDividers:{defaultValue:{value:"true"},description:"",name:"showDividers",required:!1,type:{name:"boolean"}},customHeader:{defaultValue:null,description:"",name:"customHeader",required:!1,type:{name:"ReactNode"}},showOptionCheckbox:{defaultValue:null,description:"",name:"showOptionCheckbox",required:!1,type:{name:"boolean"}},onOptionCheckboxChange:{defaultValue:null,description:"",name:"onOptionCheckboxChange",required:!1,type:{name:"(() => void)"}},optionCheckboxText:{defaultValue:null,description:"",name:"optionCheckboxText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/design-system/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var _Normal$parameters,_Normal$parameters2,TextField=__webpack_require__("./components/design-system/TextField.tsx"),StartExcelTableModal_jsx=react.createElement;function StartExcelTableModal(_ref){var isOpen=_ref.isOpen,onSave=_ref.onSave,startRow=_ref.startRow,error=_ref.error,onClose=_ref.onClose,_useState=(0,react.useState)(startRow),internalStartRow=_useState[0],setInternalStartRow=_useState[1];return StartExcelTableModal_jsx(Modal,{isOpen,actionLabel:"Salvar",actionOnClick:function handleSave(){onSave(internalStartRow)},title:"Nos ajude a encontrar seus dados",onClose},StartExcelTableModal_jsx(chunk_MPFPK3CX.k,{gap:"1rem",direction:"column","data-testid":"StartExcelTableModal"},StartExcelTableModal_jsx(chunk_P74GIWPW.x,null,"Precisamos que nos informe em qual linha está o cabeçalho da sua tabela."),StartExcelTableModal_jsx(TextField.nv,{type:"number",label:"Número da linha",text:"number"==typeof startRow?String(startRow):"",onChange:function onChange(v){setInternalStartRow(""===v?void 0:Number(v))},error:void 0!==error,errorMessage:error})))}StartExcelTableModal.displayName="StartExcelTableModal";try{StartExcelTableModal.displayName="StartExcelTableModal",StartExcelTableModal.__docgenInfo={description:"",displayName:"StartExcelTableModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(startRow?: number | undefined) => void"}},startRow:{defaultValue:null,description:"",name:"startRow",required:!0,type:{name:"number | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"]={docgenInfo:StartExcelTableModal.__docgenInfo,name:"StartExcelTableModal",path:"components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"})}catch(__react_docgen_typescript_loader_error){}var StartExcelTableModal_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const StartExcelTableModal_stories={title:"onboarding/StartExcelTableModal",component:StartExcelTableModal,parameters:{layout:"centered"}};var Template=function Template(args){return StartExcelTableModal_stories_jsx(StartExcelTableModal,args)};Template.displayName="Template";var Normal=Template.bind({});Normal.args={isOpen:!0,onSave:function onSave(){return null},startRow:0,error:void 0},Normal.parameters=_objectSpread(_objectSpread({},Normal.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Normal$parameters=Normal.parameters)||void 0===_Normal$parameters?void 0:_Normal$parameters.docs),{},{source:_objectSpread({originalSource:"args => <StartExcelTableModal {...args} />"},null===(_Normal$parameters2=Normal.parameters)||void 0===_Normal$parameters2||null===(_Normal$parameters2=_Normal$parameters2.docs)||void 0===_Normal$parameters2?void 0:_Normal$parameters2.source)})});const __namedExportsOrder=["Normal"]}}]);