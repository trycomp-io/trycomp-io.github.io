"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[4755],{"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties});var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=(0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.indexOf(n)>=0)continue;t[n]=r[n]}return t}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})},"./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.k)({strict:!1,name:"ButtonGroupContext"}),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_NO6MRLPK=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_NO6MRLPK.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_T2VHL7RE.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.PB)(isActive),"data-loading":(0,shared_utils_dist.PB)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xu:()=>Box});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Box=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.m)("div");Box.displayName="Box";var Square=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Square2(props,ref){const{size,centerContent=!0,...rest}=props,styles=centerContent?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Box,{ref,boxSize:size,__css:{...styles,flexShrink:0,flexGrow:0},...rest})}));Square.displayName="Square",(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)((function Circle2(props,ref){const{size,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Square,{size,ref,borderRadius:"9999px",...rest})})).displayName="Circle"},"./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>Text});var chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs");var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Text=(0,chunk_QEVFQ4EU.G)((function Text2(props,ref){const styles=(0,chunk_T2VHL7RE.mq)("Text",props),{className,align,decoration,casing,...rest}=(0,dist.Lr)(props),aliasedProps=function compact(object){const clone=Object.assign({},object);for(let key in clone)void 0===clone[key]&&delete clone[key];return clone}({textAlign:props.align,textDecoration:props.decoration,textTransform:props.casing});return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.p,{ref,className:(0,shared_utils_dist.cx)("chakra-text",props.className),...aliasedProps,...rest,__css:styles})}));Text.displayName="Text"},"./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lq:()=>mergeRefs,qq:()=>useMergeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");function mergeRefs(...refs){return node=>{refs.forEach((ref=>{!function assignRef(ref,value){if(null!=ref)if("function"!=typeof ref)try{ref.current=value}catch(error){throw new Error(`Cannot assign value '${value}' to ref '${ref}'`)}else ref(value)}(ref,node)}))}}function useMergeRefs(...refs){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>mergeRefs(...refs)),refs)}},"./node_modules/react-icons/fc/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JM8:()=>FcGoogle});var _lib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react-icons/lib/esm/index.js");function FcGoogle(props){return(0,_lib__WEBPACK_IMPORTED_MODULE_0__.w_)({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}},{tag:"path",attr:{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}},{tag:"path",attr:{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}},{tag:"path",attr:{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"}}]})(props)}},"./node_modules/react-icons/lib/esm/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w_:()=>GenIcon});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),DefaultContext={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},IconContext=react.createContext&&react.createContext(DefaultContext),__assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)},__rest=function(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t};function Tree2Element(tree){return tree&&tree.map((function(node,i){return react.createElement(node.tag,__assign({key:i},node.attr),Tree2Element(node.child))}))}function GenIcon(data){return function(props){return react.createElement(IconBase,__assign({attr:__assign({},data.attr)},props),Tree2Element(data.child))}}function IconBase(props){var elem=function(conf){var className,attr=props.attr,size=props.size,title=props.title,svgProps=__rest(props,["attr","size","title"]),computedSize=size||conf.size||"1em";return conf.className&&(className=conf.className),props.className&&(className=(className?className+" ":"")+props.className),react.createElement("svg",__assign({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},conf.attr,attr,svgProps,{className,style:__assign(__assign({color:props.color||conf.color},conf.style),props.style),height:computedSize,width:computedSize,xmlns:"http://www.w3.org/2000/svg"}),title&&react.createElement("title",null,title),props.children)};return void 0!==IconContext?react.createElement(IconContext.Consumer,null,(function(conf){return elem(conf)})):elem(DefaultContext)}}}]);