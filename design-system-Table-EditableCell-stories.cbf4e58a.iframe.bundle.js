"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[6439],{"./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MJ:()=>FormControl,TP:()=>useFormControlStyles,Uc:()=>useFormControlContext});var _chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),[FormControlStylesProvider,useFormControlStyles]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.q)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[FormControlProvider,useFormControlContext]=(0,_chakra_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.q)({strict:!1,name:"FormControlContext"});var FormControl=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.R)((function FormControl2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.o5)("Form",props),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_7__.MN)(props),{getRootProps,htmlProps:_,...context}=function useFormControlProvider(props){const{id:idProp,isRequired,isInvalid,isDisabled,isReadOnly,...htmlProps}=props,uuid=(0,react__WEBPACK_IMPORTED_MODULE_0__.useId)(),id=idProp||`field-${uuid}`,labelId=`${id}-label`,feedbackId=`${id}-feedback`,helpTextId=`${id}-helptext`,[hasFeedbackText,setHasFeedbackText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[hasHelpText,setHasHelpText]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[isFocused,setFocus]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),getHelpTextProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:helpTextId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.Px)(forwardedRef,(node=>{node&&setHasHelpText(!0)}))})),[helpTextId]),getLabelProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,"data-focus":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.sE)(isFocused),"data-disabled":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.sE)(isDisabled),"data-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.sE)(isInvalid),"data-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.sE)(isReadOnly),id:void 0!==props2.id?props2.id:labelId,htmlFor:void 0!==props2.htmlFor?props2.htmlFor:id})),[id,isDisabled,isFocused,isInvalid,isReadOnly,labelId]),getErrorMessageProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({id:feedbackId,...props2,ref:(0,_chakra_ui_react_use_merge_refs__WEBPACK_IMPORTED_MODULE_3__.Px)(forwardedRef,(node=>{node&&setHasFeedbackText(!0)})),"aria-live":"polite"})),[feedbackId]),getRootProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,...htmlProps,ref:forwardedRef,role:"group"})),[htmlProps]),getRequiredIndicatorProps=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((props2={},forwardedRef=null)=>({...props2,ref:forwardedRef,role:"presentation","aria-hidden":!0,children:props2.children||"*"})),[]);return{isRequired:!!isRequired,isInvalid:!!isInvalid,isReadOnly:!!isReadOnly,isDisabled:!!isDisabled,isFocused:!!isFocused,onFocus:()=>setFocus(!0),onBlur:()=>setFocus(!1),hasFeedbackText,setHasFeedbackText,hasHelpText,setHasHelpText,id,labelId,feedbackId,helpTextId,htmlProps,getHelpTextProps,getErrorMessageProps,getRootProps,getLabelProps,getRequiredIndicatorProps}}(ownProps),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form-control",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlProvider,{value:context,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(FormControlStylesProvider,{value:styles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.B.div,{...getRootProps({},ref),className,__css:styles.container})})})}));FormControl.displayName="FormControl",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.R)((function FormHelperText2(props,ref){const field=useFormControlContext(),styles=useFormControlStyles(),className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_4__.cx)("chakra-form__helper-text",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_8__.B.div,{...null==field?void 0:field.getHelpTextProps(props,ref),__css:styles.helperText,className})})).displayName="FormHelperText"},"./node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>useFormControl,v:()=>useFormControlProps});var _chunk_6ZNYZUDD_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-6ZNYZUDD.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");function useFormControl(props){const{isDisabled,isInvalid,isReadOnly,isRequired,...rest}=useFormControlProps(props);return{...rest,disabled:isDisabled,readOnly:isReadOnly,required:isRequired,"aria-invalid":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.rq)(isInvalid),"aria-required":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.rq)(isRequired),"aria-readonly":(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.rq)(isReadOnly)}}function useFormControlProps(props){var _a,_b,_c;const field=(0,_chunk_6ZNYZUDD_mjs__WEBPACK_IMPORTED_MODULE_1__.Uc)(),{id,disabled,readOnly,required,isRequired,isInvalid,isReadOnly,isDisabled,onFocus,onBlur,...rest}=props,labelIds=props["aria-describedby"]?[props["aria-describedby"]]:[];return(null==field?void 0:field.hasFeedbackText)&&(null==field?void 0:field.isInvalid)&&labelIds.push(field.feedbackId),(null==field?void 0:field.hasHelpText)&&labelIds.push(field.helpTextId),{...rest,"aria-describedby":labelIds.join(" ")||void 0,id:null!=id?id:null==field?void 0:field.id,isDisabled:null!=(_a=null!=disabled?disabled:isDisabled)?_a:null==field?void 0:field.isDisabled,isReadOnly:null!=(_b=null!=readOnly?readOnly:isReadOnly)?_b:null==field?void 0:field.isReadOnly,isRequired:null!=(_c=null!=required?required:isRequired)?_c:null==field?void 0:field.isRequired,isInvalid:null!=isInvalid?isInvalid:null==field?void 0:field.isInvalid,onFocus:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Hj)(null==field?void 0:field.onFocus,onFocus),onBlur:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_0__.Hj)(null==field?void 0:field.onBlur,onBlur)}}},"./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var _chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/form-control/dist/chunk-IJBC3YLI.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Input=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Input2(props,ref){const{htmlSize,...rest}=props,styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.o5)("Input",rest),ownProps=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.MN)(rest),input=(0,_chakra_ui_form_control__WEBPACK_IMPORTED_MODULE_4__.t)(ownProps),_className=(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_5__.cx)("chakra-input",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_6__.B.input,{size:htmlSize,...input,__css:styles.field,ref,className:_className})}));Input.displayName="Input",Input.id="Input"},"./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{az:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.B)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.R)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Text});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Text=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.R)((function Text2(props,ref){const styles=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.Vl)("Text",props),{className,align,decoration,casing,...rest}=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_3__.MN)(props),aliasedProps=(0,_chakra_ui_object_utils__WEBPACK_IMPORTED_MODULE_4__.o)({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_5__.B.p,{ref,className:(0,_chakra_ui_shared_utils__WEBPACK_IMPORTED_MODULE_6__.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"./node_modules/@chakra-ui/object-utils/dist/chunk-R3DH46PF.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}__webpack_require__.d(__webpack_exports__,{o:()=>compact})},"./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Px:()=>mergeRefs,SV:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>Skeleton});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),chunk_7V3ZYTH7=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-7V3ZYTH7.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),StyledSkeleton=(0,chunk_3LE6AY5Q.B)("div",{baseStyle:{boxShadow:"none",backgroundClip:"padding-box",cursor:"default",color:"transparent",pointerEvents:"none",userSelect:"none","&::before, &::after, *":{visibility:"hidden"}}}),$startColor=(0,styled_system_dist.Vg)("skeleton-start-color"),$endColor=(0,styled_system_dist.Vg)("skeleton-end-color"),fade=(0,emotion_react_browser_esm.i7)({from:{opacity:0},to:{opacity:1}}),bgFade=(0,emotion_react_browser_esm.i7)({from:{borderColor:$startColor.reference,background:$startColor.reference},to:{borderColor:$endColor.reference,background:$endColor.reference}}),Skeleton=(0,chunk_QEVFQ4EU.R)(((props,ref)=>{const skeletonProps={...props,fadeDuration:"number"==typeof props.fadeDuration?props.fadeDuration:.4,speed:"number"==typeof props.speed?props.speed:.8},styles=(0,chunk_T2VHL7RE.Vl)("Skeleton",skeletonProps),isFirstRender=function useIsFirstRender(){const isFirstRender=(0,react.useRef)(!0);return(0,react.useEffect)((()=>{isFirstRender.current=!1}),[]),isFirstRender.current}(),{startColor="",endColor="",isLoaded,fadeDuration,speed,className,fitContent,...rest}=(0,styled_system_dist.MN)(skeletonProps),[startColorVar,endColorVar]=(0,chunk_7V3ZYTH7.rd)("colors",[startColor,endColor]),wasPreviouslyLoaded=function usePrevious(value){const ref=(0,react.useRef)();return(0,react.useEffect)((()=>{ref.current=value}),[value]),ref.current}(isLoaded),_className=(0,dist.cx)("chakra-skeleton",className),cssVarStyles={...startColorVar&&{[$startColor.variable]:startColorVar},...endColorVar&&{[$endColor.variable]:endColorVar}};if(isLoaded){const animation=isFirstRender||wasPreviouslyLoaded?"none":`${fade} ${fadeDuration}s`;return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.B.div,{ref,className:_className,__css:{animation},...rest})}return(0,jsx_runtime.jsx)(StyledSkeleton,{ref,className:_className,...rest,__css:{width:fitContent?"fit-content":void 0,...styles,...cssVarStyles,_dark:{...styles._dark,...cssVarStyles},animation:`${speed}s linear infinite alternate ${bgFade}`}})}));Skeleton.displayName="Skeleton"},"./stories/design-system/Table/EditableCell.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_root_components_design_system_Table_EditableCell__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/Table/EditableCell.tsx"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/Table/EditableCell",component:_root_components_design_system_Table_EditableCell__WEBPACK_IMPORTED_MODULE_2__.p,parameters:{layout:"centered"}};var Template=function Template(args){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.az,{w:"200px"},__jsx(_root_components_design_system_Table_EditableCell__WEBPACK_IMPORTED_MODULE_2__.p,args))};Template.displayName="Template";var Default=Template.bind({});Default.args={value:"Lorem Ipsum"},Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => <Box w="200px">\n    <EditableCell {...args} />\n  </Box>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/design-system/Table/EditableCell.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>EditableCell});var _Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/skeleton/dist/chunk-3GRGLNAR.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/input/dist/chunk-GYFRIY2Z.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,EditableCell=function EditableCell(_ref){var onChange=_ref.onChange,value=_ref.value,_ref$variant=_ref.variant,variant=void 0===_ref$variant?"cell":_ref$variant,_ref$isLoading=_ref.isLoading,isLoading=void 0!==_ref$isLoading&&_ref$isLoading,parseToEditing=_ref.parseToEditing,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),isEditing=_useState[0],setIsEditing=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),editingValue=_useState2[0],setEditingValue=_useState2[1],ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){isEditing&&ref.current&&(ref.current.setSelectionRange(value.length,value.length),ref.current.focus())}),[isEditing,ref,value]);var finishEditing=function finishEditing(onChangeCell){return function(){setIsEditing(!1),editingValue!==value&&(null==onChangeCell||onChangeCell(editingValue))}};return isLoading?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.E,{w:"full",minW:"5rem",maxW:"100%",h:"2.0625rem",borderRadius:".5rem"}):isEditing?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.p,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({},"cell"===variant?{padding:".5rem"}:{maxW:"17rem"},{"data-hj-allow":!0,variant:"unstyled",ref,onKeyUp:function handleInputKeyUp(e){"Enter"===e.key?finishEditing(onChange)():"Escape"===e.code&&finishEditing(void 0)()},onBlur:finishEditing(onChange),onChange:function handleChangeEditingValue(e){void 0!==onChange&&setEditingValue(e.target.value)},cursor:"pointer",fontSize:"comp-xs",lineHeight:"2xs",fontWeight:"regular",color:"black.1000",outline:"0",focusBorderColor:"transparent",_hover:{background:"#0F19230D 0% 0% no-repeat padding-box",borderRadius:".5rem"},value:editingValue})):__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.E,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({},"cell"===variant?{fontSize:"comp-xs",fontWeight:"regular",cursor:void 0!==onChange?"pointer":void 0,padding:".5rem",margin:"0",marginBlockStart:"0",marginBlockEnd:"0",w:"full",_hover:void 0!==onChange?{background:"#0F19230D 0% 0% no-repeat padding-box",borderRadius:".5rem"}:void 0}:{fontSize:"sm",fontWeight:"bold",cursor:void 0!==onChange?"text":void 0,whiteSpace:"nowrap"},{textOverflow:"ellipsis",overflow:"hidden",lineHeight:"2xs",color:"black.1000",title:value,onClick:void 0!==onChange?function handleChangeToInput(e){var _parseToEditing;e.preventDefault(),void 0!==value&&(setIsEditing(!0),setEditingValue(null!==(_parseToEditing=null==parseToEditing?void 0:parseToEditing(value))&&void 0!==_parseToEditing?_parseToEditing:value))}:void 0}),value)};try{EditableCell.displayName="EditableCell",EditableCell.__docgenInfo={description:"",displayName:"EditableCell",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"((value: string) => void) | undefined"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},variant:{defaultValue:{value:"cell"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"plainText"'},{value:'"cell"'}]}},isLoading:{defaultValue:{value:"false"},description:"",name:"isLoading",required:!1,type:{name:"boolean"}},parseToEditing:{defaultValue:null,description:"",name:"parseToEditing",required:!1,type:{name:"((value: string | null) => string)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/Table/EditableCell.tsx#EditableCell"]={docgenInfo:EditableCell.__docgenInfo,name:"EditableCell",path:"components/design-system/Table/EditableCell.tsx#EditableCell"})}catch(__react_docgen_typescript_loader_error){}}}]);