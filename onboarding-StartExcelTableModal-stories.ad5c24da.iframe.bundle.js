"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[732],{"./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>Input});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Input=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Input2(props,ref){const{htmlSize,...rest}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.jC)("Input",rest),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(rest),input=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(ownProps),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.m.input,{size:htmlSize,...input,__css:styles.field,ref,className:_className})}));Input.displayName="Input",Input.id="Input"},"./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>HStack});var _chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),HStack=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_O5CRURSQ_mjs__WEBPACK_IMPORTED_MODULE_2__.K,{align:"center",...props,direction:"row",ref})));HStack.displayName="HStack"},"./node_modules/@chakra-ui/layout/dist/chunk-O5CRURSQ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>Stack});var chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),StackItem=props=>(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:"chakra-stack__item",...props,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...props.__css}});StackItem.displayName="StackItem";var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");Object.freeze(["base","sm","md","lg","xl","2xl"]);function mapResponsive(prop,mapper){return Array.isArray(prop)?prop.map((item=>null===item?null:mapper(item))):(0,dist.Kn)(prop)?Object.keys(prop).reduce(((result,key)=>(result[key]=mapper(prop[key]),result)),{}):null!=prop?mapper(prop):null}var selector="& > *:not(style) ~ *:not(style)";var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var Stack=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{isInline,direction:directionProp,align,justify,spacing="0.5rem",wrap,children,divider,className,shouldWrapChildren,...rest}=props,direction=isInline?"row":null!=directionProp?directionProp:"column",styles=(0,react.useMemo)((()=>function getStackStyles(options){const{spacing,direction}=options,directionStyles={column:{marginTop:spacing,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:spacing},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:spacing,marginStart:0},"row-reverse":{marginTop:0,marginEnd:spacing,marginBottom:0,marginStart:0}};return{flexDirection:direction,[selector]:mapResponsive(direction,(value=>directionStyles[value]))}}({direction,spacing})),[direction,spacing]),dividerStyle=(0,react.useMemo)((()=>function getDividerStyles(options){const{spacing,direction}=options,dividerStyles={column:{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:spacing,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:spacing,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":mapResponsive(direction,(value=>dividerStyles[value]))}}({spacing,direction})),[spacing,direction]),hasDivider=!!divider,shouldUseChildren=!shouldWrapChildren&&!hasDivider,clones=(0,react.useMemo)((()=>{const validChildren=function getValidChildren(children){return react.Children.toArray(children).filter((child=>(0,react.isValidElement)(child)))}(children);return shouldUseChildren?validChildren:validChildren.map(((child,index)=>{const key=void 0!==child.key?child.key:index,isLast=index+1===validChildren.length,_child=shouldWrapChildren?(0,jsx_runtime.jsx)(StackItem,{children:child},key):child;if(!hasDivider)return _child;const clonedDivider=(0,react.cloneElement)(divider,{__css:dividerStyle}),_divider=isLast?null:clonedDivider;return(0,jsx_runtime.jsxs)(react.Fragment,{children:[_child,_divider]},key)}))}),[divider,dividerStyle,hasDivider,shouldUseChildren,shouldWrapChildren,children]),_className=(0,dist.cx)("chakra-stack",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{ref,display:"flex",alignItems:align,justifyContent:justify,flexDirection:styles.flexDirection,flexWrap:wrap,className:_className,__css:hasDivider?{}:{[selector]:styles[selector]},...rest,children:clones})}));Stack.displayName="Stack"},"./node_modules/@chakra-ui/textarea/dist/chunk-OEQDSMWZ.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");var omitted=["h","minH","height","minHeight"],Textarea=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)(((props,ref)=>{const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.mq)("Textarea",props),{className,rows,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.Lr)(props),textareaProps=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.Y)(rest),textareaStyles=rows?function omit(object,keysToOmit=[]){const clone=Object.assign({},object);for(const key of keysToOmit)key in clone&&delete clone[key];return clone}(styles,omitted):styles;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.m.textarea,{ref,rows,...textareaProps,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-textarea",className),__css:textareaStyles})}));Textarea.displayName="Textarea"},"./stories/onboarding/StartExcelTableModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StartExcelTableModal_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_UUGUEMMH=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),chunk_OWW5MU75=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),chunk_66WFFNY3=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),chunk_YBA5A33G=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_DUEJD2BE=__webpack_require__("./node_modules/@chakra-ui/close-button/dist/chunk-DUEJD2BE.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),ModalCloseButton=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const{onClick,className,...rest}=props,{onClose}=(0,chunk_UUGUEMMH.vR)(),_className=(0,dist.cx)("chakra-modal__close-btn",className),styles=(0,chunk_UUGUEMMH.I_)();return(0,jsx_runtime.jsx)(chunk_DUEJD2BE.P,{ref,__css:styles.closeButton,className:_className,onClick:(0,dist.v0)(onClick,(event=>{event.stopPropagation(),onClose()})),...rest})}));ModalCloseButton.displayName="ModalCloseButton";var chunk_PVJ72NKC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),chunk_YI7XFFAC=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs"),chunk_HUQHYERK=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs"),chunk_VFYM6BU6=__webpack_require__("./node_modules/@chakra-ui/checkbox/dist/chunk-VFYM6BU6.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),__jsx=react.createElement,Modal=function Modal(_ref){var _ref$isOpen=_ref.isOpen,isOpen=void 0===_ref$isOpen||_ref$isOpen,actionLabel=_ref.actionLabel,actionOnClick=_ref.actionOnClick,actionIsLoading=_ref.actionIsLoading,actionDisabled=_ref.actionDisabled,secondaryActionLabel=_ref.secondaryActionLabel,secondaryActionOnClick=_ref.secondaryActionOnClick,secondaryActionIsLoading=_ref.secondaryActionIsLoading,title=_ref.title,onClose=_ref.onClose,children=_ref.children,_ref$size=_ref.size,size=void 0===_ref$size?"lg":_ref$size,_ref$dataTestId=_ref.dataTestId,dataTestId=void 0===_ref$dataTestId?"Modal":_ref$dataTestId,_ref$showDividers=_ref.showDividers,showDividers=void 0===_ref$showDividers||_ref$showDividers,customHeader=_ref.customHeader,showOptionCheckbox=_ref.showOptionCheckbox,onOptionCheckboxChange=_ref.onOptionCheckboxChange,optionCheckboxText=_ref.optionCheckboxText,showFooter=void 0!==secondaryActionLabel&&void 0!==secondaryActionOnClick||void 0!==actionLabel&&void 0!==actionOnClick;return __jsx(chunk_UUGUEMMH.u_,{isOpen,onClose:function handleClose(){null==onClose||onClose()},isCentered:!0,size,scrollBehavior:"inside"},__jsx(chunk_OWW5MU75.Z,null),__jsx(chunk_66WFFNY3.h,{borderRadius:"1rem",maxH:"90vh","data-testid":dataTestId},__jsx(chunk_YBA5A33G.x,null,null!=customHeader?customHeader:title),showDividers&&__jsx(chunk_6CSUKJP7.xu,{as:"hr"}),void 0!==onClose&&__jsx(ModalCloseButton,null),__jsx(chunk_PVJ72NKC.f,null,children),showDividers&&__jsx(chunk_6CSUKJP7.xu,{pb:"1rem",as:"hr"}),showFooter&&__jsx(chunk_YI7XFFAC.m,null,__jsx(chunk_HUQHYERK.U,{w:"100%",gap:"1rem",justifyContent:"space-between"},showOptionCheckbox&&void 0!==optionCheckboxText&&__jsx(chunk_HUQHYERK.U,{width:"100%"},__jsx(chunk_VFYM6BU6.X,{size:"md",onChange:onOptionCheckboxChange},__jsx(chunk_P74GIWPW.x,{fontSize:"sm"},optionCheckboxText))),__jsx(chunk_HUQHYERK.U,{width:"100%",justifyContent:"flex-end"},void 0!==secondaryActionLabel&&secondaryActionOnClick?__jsx(chunk_NAA7TEES.z,{variant:"link",size:"lg",color:"black.1000",onClick:secondaryActionOnClick,isLoading:secondaryActionIsLoading},secondaryActionLabel):null,void 0!==actionLabel&&actionOnClick?__jsx(chunk_NAA7TEES.z,{variant:"red",size:"lg",onClick:actionOnClick,isDisabled:actionDisabled,isLoading:actionIsLoading},actionLabel):null)))))};Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"",displayName:"Modal",props:{isOpen:{defaultValue:{value:"true"},description:"",name:"isOpen",required:!1,type:{name:"boolean"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!1,type:{name:"string"}},actionOnClick:{defaultValue:null,description:"",name:"actionOnClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},actionDisabled:{defaultValue:null,description:"",name:"actionDisabled",required:!1,type:{name:"boolean"}},actionIsLoading:{defaultValue:null,description:"",name:"actionIsLoading",required:!1,type:{name:"boolean"}},secondaryActionLabel:{defaultValue:null,description:"",name:"secondaryActionLabel",required:!1,type:{name:"string"}},secondaryActionIsLoading:{defaultValue:null,description:"",name:"secondaryActionIsLoading",required:!1,type:{name:"boolean"}},secondaryActionOnClick:{defaultValue:null,description:"",name:"secondaryActionOnClick",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"xl"'},{value:'"2xl"'},{value:'"3xl"'},{value:'"4xl"'},{value:'"5xl"'},{value:'"6xl"'},{value:'"full"'}]}},dataTestId:{defaultValue:{value:"Modal"},description:"",name:"dataTestId",required:!1,type:{name:"string"}},showDividers:{defaultValue:{value:"true"},description:"",name:"showDividers",required:!1,type:{name:"boolean"}},customHeader:{defaultValue:null,description:"",name:"customHeader",required:!1,type:{name:"ReactNode"}},showOptionCheckbox:{defaultValue:null,description:"",name:"showOptionCheckbox",required:!1,type:{name:"boolean"}},onOptionCheckboxChange:{defaultValue:null,description:"",name:"onOptionCheckboxChange",required:!1,type:{name:"(() => void)"}},optionCheckboxText:{defaultValue:null,description:"",name:"optionCheckboxText",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/Modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"components/design-system/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var _Normal$parameters,_Normal$parameters2,TextField=__webpack_require__("./components/design-system/TextField.tsx"),StartExcelTableModal_jsx=react.createElement;function StartExcelTableModal(_ref){var isOpen=_ref.isOpen,onSave=_ref.onSave,startRow=_ref.startRow,error=_ref.error,onClose=_ref.onClose,_useState=(0,react.useState)(startRow),internalStartRow=_useState[0],setInternalStartRow=_useState[1];return StartExcelTableModal_jsx(Modal,{isOpen,actionLabel:"Salvar",actionOnClick:function handleSave(){onSave(internalStartRow)},title:"Nos ajude a encontrar seus dados",onClose},StartExcelTableModal_jsx(chunk_MPFPK3CX.k,{gap:"1rem",direction:"column","data-testid":"StartExcelTableModal"},StartExcelTableModal_jsx(chunk_P74GIWPW.x,null,"Precisamos que nos informe em qual linha está o cabeçalho da sua tabela."),StartExcelTableModal_jsx(TextField.nv,{type:"number",label:"Número da linha",text:"number"==typeof startRow?String(startRow):"",onChange:function onChange(v){setInternalStartRow(""===v?void 0:Number(v))},error:void 0!==error,errorMessage:error})))}StartExcelTableModal.displayName="StartExcelTableModal";try{StartExcelTableModal.displayName="StartExcelTableModal",StartExcelTableModal.__docgenInfo={description:"",displayName:"StartExcelTableModal",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onSave:{defaultValue:null,description:"",name:"onSave",required:!0,type:{name:"(startRow?: number | undefined) => void"}},startRow:{defaultValue:null,description:"",name:"startRow",required:!0,type:{name:"number | undefined"}},error:{defaultValue:null,description:"",name:"error",required:!0,type:{name:"string | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"]={docgenInfo:StartExcelTableModal.__docgenInfo,name:"StartExcelTableModal",path:"components/onboarding/StartExcelTableModal.tsx#StartExcelTableModal"})}catch(__react_docgen_typescript_loader_error){}var StartExcelTableModal_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const StartExcelTableModal_stories={title:"onboarding/StartExcelTableModal",component:StartExcelTableModal,parameters:{layout:"centered"}};var Template=function Template(args){return StartExcelTableModal_stories_jsx(StartExcelTableModal,args)};Template.displayName="Template";var Normal=Template.bind({});Normal.args={isOpen:!0,onSave:function onSave(){return null},startRow:0,error:void 0},Normal.parameters=_objectSpread(_objectSpread({},Normal.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Normal$parameters=Normal.parameters)||void 0===_Normal$parameters?void 0:_Normal$parameters.docs),{},{source:_objectSpread({originalSource:"args => <StartExcelTableModal {...args} />"},null===(_Normal$parameters2=Normal.parameters)||void 0===_Normal$parameters2||null===(_Normal$parameters2=_Normal$parameters2.docs)||void 0===_Normal$parameters2?void 0:_Normal$parameters2.source)})});const __namedExportsOrder=["Normal"]}}]);