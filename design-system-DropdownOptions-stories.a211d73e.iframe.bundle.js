"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[249],{"./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js");var dist=__webpack_require__("./node_modules/@chakra-ui/react-context/dist/index.mjs"),[ButtonGroupProvider,useButtonGroup]=(0,dist.k)({strict:!1,name:"ButtonGroupContext"}),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),shared_utils_dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function ButtonIcon(props){const{children,className,...rest}=props,_children=(0,react.isValidElement)(children)?(0,react.cloneElement)(children,{"aria-hidden":!0,focusable:!1}):children,_className=(0,shared_utils_dist.cx)("chakra-button__icon",className);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...rest,className:_className,children:_children})}ButtonIcon.displayName="ButtonIcon";var chunk_NO6MRLPK=__webpack_require__("./node_modules/@chakra-ui/spinner/dist/chunk-NO6MRLPK.mjs");function ButtonSpinner(props){const{label,placement,spacing="0.5rem",children=(0,jsx_runtime.jsx)(chunk_NO6MRLPK.$,{color:"currentColor",width:"1em",height:"1em"}),className,__css,...rest}=props,_className=(0,shared_utils_dist.cx)("chakra-button__spinner",className),marginProp="start"===placement?"marginEnd":"marginStart",spinnerStyles=(0,react.useMemo)((()=>({display:"flex",alignItems:"center",position:label?"relative":"absolute",[marginProp]:label?spacing:0,fontSize:"1em",lineHeight:"normal",...__css})),[__css,label,marginProp,spacing]);return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.div,{className:_className,...rest,__css:spinnerStyles,children})}ButtonSpinner.displayName="ButtonSpinner";var react_use_merge_refs_dist=__webpack_require__("./node_modules/@chakra-ui/react-use-merge-refs/dist/index.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),chunk_T2VHL7RE=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-T2VHL7RE.mjs"),styled_system_dist=__webpack_require__("./node_modules/@chakra-ui/styled-system/dist/index.mjs"),Button=(0,chunk_QEVFQ4EU.G)(((props,ref)=>{const group=useButtonGroup(),styles=(0,chunk_T2VHL7RE.mq)("Button",{...group,...props}),{isDisabled=null==group?void 0:group.isDisabled,isLoading,isActive,children,leftIcon,rightIcon,loadingText,iconSpacing="0.5rem",type,spinner,spinnerPlacement="start",className,as,...rest}=(0,styled_system_dist.Lr)(props),buttonStyles=(0,react.useMemo)((()=>{const _focus={...null==styles?void 0:styles._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...styles,...!!group&&{_focus}}}),[styles,group]),{ref:_ref,type:defaultType}=function useButtonType(value){const[isButton,setIsButton]=(0,react.useState)(!value);return{ref:(0,react.useCallback)((node=>{node&&setIsButton("BUTTON"===node.tagName)}),[]),type:isButton?"button":void 0}}(as),contentProps={rightIcon,leftIcon,iconSpacing,children};return(0,jsx_runtime.jsxs)(chunk_3LE6AY5Q.m.button,{ref:(0,react_use_merge_refs_dist.qq)(ref,_ref),as,type:null!=type?type:defaultType,"data-active":(0,shared_utils_dist.PB)(isActive),"data-loading":(0,shared_utils_dist.PB)(isLoading),__css:buttonStyles,className:(0,shared_utils_dist.cx)("chakra-button",className),...rest,disabled:isDisabled||isLoading,children:[isLoading&&"start"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:loadingText,placement:"start",spacing:iconSpacing,children:spinner}),isLoading?loadingText||(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.m.span,{opacity:0,children:(0,jsx_runtime.jsx)(ButtonContent,{...contentProps})}):(0,jsx_runtime.jsx)(ButtonContent,{...contentProps}),isLoading&&"end"===spinnerPlacement&&(0,jsx_runtime.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:loadingText,placement:"end",spacing:iconSpacing,children:spinner})]})}));function ButtonContent(props){const{leftIcon,rightIcon,children,iconSpacing}=props;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[leftIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginEnd:iconSpacing,children:leftIcon}),children,rightIcon&&(0,jsx_runtime.jsx)(ButtonIcon,{marginStart:iconSpacing,children:rightIcon})]})}Button.displayName="Button"},"./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Flex});var _chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),Flex=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_1__.G)((function Flex2(props,ref){const{direction,align,justify,wrap,basis,grow,shrink,...rest}=props,styles={display:"flex",flexDirection:direction,alignItems:align,justifyContent:justify,flexWrap:wrap,flexBasis:basis,flexGrow:grow,flexShrink:shrink};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.m.div,{ref,__css:styles,...rest})}));Flex.displayName="Flex"},"./stories/design-system/DropdownOptions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DropdownOptions_stories});var _Default$parameters,_Default$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),Tooltip=__webpack_require__("./components/design-system/Tooltip.tsx"),chunk_4OGHDZEB=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-4OGHDZEB.mjs"),chunk_3O5UWOX6=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3O5UWOX6.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_YLCZP3C4=__webpack_require__("./node_modules/@chakra-ui/portal/dist/chunk-YLCZP3C4.mjs"),chunk_KVBLLJMP=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-KVBLLJMP.mjs"),chunk_3JH7ZFSI=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3JH7ZFSI.mjs"),chunk_MUMUYFOI=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),chunk_DKFDJSXF=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),__jsx=react.createElement,DropdownOptions=function DropdownOptions(_ref){var options=_ref.options,_ref$h=_ref.h,h=void 0===_ref$h?"2.3125rem":_ref$h,onSelect=_ref.onSelect,displayName=_ref.displayName,title=_ref.title,titleRightSide=_ref.titleRightSide;return __jsx(chunk_4OGHDZEB.J,{placement:"bottom-start",trigger:"hover"},__jsx(chunk_3O5UWOX6.x,null,__jsx(chunk_NAA7TEES.z,{h,variant:"white",size:"md",m:"0 !important",position:"relative",zIndex:"1"},displayName)),__jsx(chunk_YLCZP3C4.h,null,__jsx(chunk_KVBLLJMP.y,{w:"auto",minW:"170px",maxW:"257px",maxH:"16rem",onWheel:function onWheel(e){return e.stopPropagation()}},__jsx(chunk_3JH7ZFSI.b,null,__jsx(chunk_MUMUYFOI.g,{alignItems:"flex-start"},void 0!==title?__jsx(chunk_MPFPK3CX.k,{w:"full",alignItems:"center",justifyContent:"space-between",pl:"1rem",pr:"1rem",pt:"1rem"},__jsx(chunk_P74GIWPW.x,{fontSize:".8125rem",color:"black.500",fontWeight:"bold",textAlign:"left"},title),titleRightSide):null,options.map((function(item,index){return __jsx(chunk_NAA7TEES.z,{variant:"ghost",w:"full",h:"auto",justifyContent:"center",alignItems:"flex-start",flexDirection:"column",onClick:function onClick(){return!0!==item.locked&&onSelect(item)},key:index,isDisabled:item.locked},__jsx(chunk_P74GIWPW.x,{textStyle:"subtitle2",display:"flex",alignItems:"center",justifyContent:"space-between",w:"full"},item.display_name,item.locked&&__jsx(Tooltip.u,{label:"Fique de olho que em breve vamos lançar!"},__jsx(chunk_6CSUKJP7.xu,{as:"span",ml:2,display:"flex"},__jsx(chunk_DKFDJSXF.J,{as:index_esm.Tmq,w:"1rem",h:"1rem"}))),void 0!==item.info?__jsx(Tooltip.u,{label:item.info},__jsx(chunk_6CSUKJP7.xu,{as:"span",ml:2,display:"flex"},__jsx(chunk_DKFDJSXF.J,{as:index_esm.I5p,w:"1rem",h:"1rem"}))):null),void 0!==item.description?__jsx(chunk_P74GIWPW.x,{textStyle:"subtitle2",color:"black.800",wordBreak:"break-word",whiteSpace:"pre-wrap",textAlign:"left"},item.description):null)})))))))};DropdownOptions.displayName="DropdownOptions";try{DropdownOptions.displayName="DropdownOptions",DropdownOptions.__docgenInfo={description:"",displayName:"DropdownOptions",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"ApiIdName[]"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!0,type:{name:"(item: ApiIdName) => void"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},h:{defaultValue:{value:"2.3125rem"},description:"",name:"h",required:!1,type:{name:"string"}},titleRightSide:{defaultValue:null,description:"",name:"titleRightSide",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/DropdownOptions.tsx#DropdownOptions"]={docgenInfo:DropdownOptions.__docgenInfo,name:"DropdownOptions",path:"components/design-system/DropdownOptions.tsx#DropdownOptions"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const DropdownOptions_stories={title:"design-system/Popover/DropdownOptions",component:DropdownOptions,args:{displayName:"Mais ações"},argTypes:{options:{options:["short & simple","long & simple","w/ description","w/ info","w/ locked"],mapping:{"short & simple":[{id:"0",display_name:"First option"},{id:"1",display_name:"A title with more characters in it"},{id:"2",display_name:"Another option"}],"long & simple":(0,__webpack_require__("./node_modules/ramda/es/index.js").w6H)(0,10).map((function(i){return{id:"".concat(i),display_name:"Option ".concat(i)}})),"w/ description":[{id:"0",display_name:"Option 0",description:"Short description"},{id:"1",display_name:"Option 1",description:"We want to see how this component behaves with long text"}],"w/ info":[{id:"0",display_name:"Option 0"},{id:"1",display_name:"Option 1",info:"This is an info"},{id:"2",display_name:"Option 2"}],"w/ locked":[{id:"0",display_name:"Option 0",locked:!1},{id:"1",display_name:"Option 1",locked:!0},{id:"2",display_name:"Option 2",locked:!1}]}}},parameters:{layout:"centered"}};var Default={name:"DropdownOptions",args:{options:[{id:"0",display_name:"Configurar ciclo"},{id:"1",display_name:"Personalizar colunas"}]}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'DropdownOptions',\n  args: {\n    options: [{\n      id: '0',\n      display_name: 'Configurar ciclo'\n    }, {\n      id: '1',\n      display_name: 'Personalizar colunas'\n    }]\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/design-system/Tooltip.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>Tooltip});var react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_4OGHDZEB=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-4OGHDZEB.mjs"),chunk_3O5UWOX6=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3O5UWOX6.mjs"),chunk_YLCZP3C4=__webpack_require__("./node_modules/@chakra-ui/portal/dist/chunk-YLCZP3C4.mjs"),chunk_KVBLLJMP=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-KVBLLJMP.mjs"),chunk_3JH7ZFSI=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3JH7ZFSI.mjs"),chunk_MUMUYFOI=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),chunk_HUQHYERK=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-HUQHYERK.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_FOAN3JQV=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-FOAN3JQV.mjs"),chunk_DUEJD2BE=__webpack_require__("./node_modules/@chakra-ui/close-button/dist/chunk-DUEJD2BE.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),dist=__webpack_require__("./node_modules/@chakra-ui/shared-utils/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),PopoverCloseButton=(0,chunk_QEVFQ4EU.G)((function PopoverCloseButton2(props,ref){const{onClose}=(0,chunk_FOAN3JQV.lp)(),styles=(0,chunk_FOAN3JQV.SV)();return(0,jsx_runtime.jsx)(chunk_DUEJD2BE.P,{size:"sm",onClick:onClose,className:(0,dist.cx)("chakra-popover__close-btn",props.className),__css:styles.closeButton,ref,...props})}));PopoverCloseButton.displayName="PopoverCloseButton";var chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_DKFDJSXF=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),__jsx=react.createElement,Tooltip=function Tooltip(_ref){var isOpen=_ref.isOpen,onClose=_ref.onClose,title=_ref.title,label=_ref.label,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"right":_ref$placement,_ref$manualCloseable=_ref.manualCloseable,manualCloseable=void 0!==_ref$manualCloseable&&_ref$manualCloseable,onLinkClick=_ref.onLinkClick,_ref$gutter=_ref.gutter,gutter=void 0===_ref$gutter?8:_ref$gutter,externalLink=_ref.externalLink,linkMessage=_ref.linkMessage,width=_ref.width,_ref$autofocus=_ref.autofocus,autofocus=void 0===_ref$autofocus||_ref$autofocus,children=_ref.children,shouldShowAcknowledgeButton=void 0!==onLinkClick||void 0!==externalLink;return __jsx(chunk_4OGHDZEB.J,{isOpen,trigger:"hover",placement,gutter,onClose,autoFocus:autofocus,arrowShadowColor:"none"},__jsx(chunk_3O5UWOX6.x,null,children),__jsx(chunk_YLCZP3C4.h,null,__jsx(chunk_KVBLLJMP.y,{border:"none",bg:"black.1000",boxShadow:"none",width},__jsx(chunk_3JH7ZFSI.b,{p:"s16",whiteSpace:"break-spaces"},__jsx(chunk_MUMUYFOI.g,{spacing:"s8",alignItems:"flex-start"},(void 0!==title||manualCloseable)&&__jsx(chunk_HUQHYERK.U,null,void 0!==title&&__jsx(chunk_P74GIWPW.x,{textStyle:"subtitle2",color:"white"},title),manualCloseable&&__jsx(PopoverCloseButton,{color:"white",onClick:onClose,right:"s16",top:"s16",boxSize:"1.125rem"})),__jsx(chunk_P74GIWPW.x,{textStyle:"body2",color:"#FFFFFFCC"},label),shouldShowAcknowledgeButton?__jsx(MoreDetailsButton,{onClick:onLinkClick,externalLink,linkMessage}):null)))))};Tooltip.displayName="Tooltip";var generateTooltipWrapper=function generateTooltipWrapper(message){return function TooltipWrapper(_ref2){var children=_ref2.children;return __jsx(Tooltip,{label:message},children)}},MoreDetailsButton=function MoreDetailsButton(_ref3){var _ref3$onClick=_ref3.onClick,onClick=void 0===_ref3$onClick?function(){return null}:_ref3$onClick,_ref3$externalLink=_ref3.externalLink,externalLink=void 0===_ref3$externalLink?"":_ref3$externalLink,_ref3$linkMessage=_ref3.linkMessage,linkMessage=void 0===_ref3$linkMessage?"Mais detalhes":_ref3$linkMessage,onClose=(0,chunk_FOAN3JQV.lp)().onClose;return externalLink?__jsx(chunk_NAA7TEES.z,{as:"a",href:externalLink,target:"_blank",variant:"link",onClick:onClose,rightIcon:__jsx(chunk_DKFDJSXF.J,{as:index_esm.Bj5,color:"white"}),sx:{".chakra-button__icon":{marginLeft:"s4"}},minWidth:"auto",border:"none"},__jsx(chunk_P74GIWPW.x,{textStyle:"hyperlink2",color:"white",textDecoration:"underline"},linkMessage)):__jsx(chunk_NAA7TEES.z,{variant:"link",onClick:function handleLinkClick(){onClose(),onClick()},minWidth:"auto",border:"none"},__jsx(chunk_P74GIWPW.x,{textStyle:"hyperlink2",color:"white"},linkMessage))};try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"",displayName:"Tooltip",props:{manualCloseable:{defaultValue:{value:"false"},description:"",name:"manualCloseable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | (() => void)"}},isOpen:{defaultValue:null,description:"",name:"isOpen",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},placement:{defaultValue:{value:"right"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"top"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'},{value:'"start-start"'},{value:'"start-end"'},{value:'"end-start"'},{value:'"end-end"'},{value:'"start"'},{value:'"end"'}]}},onLinkClick:{defaultValue:null,description:"",name:"onLinkClick",required:!1,type:{name:"(() => void)"}},gutter:{defaultValue:{value:"8"},description:"",name:"gutter",required:!1,type:{name:"number"}},externalLink:{defaultValue:{value:""},description:"",name:"externalLink",required:!1,type:{name:"string"}},linkMessage:{defaultValue:{value:"Mais detalhes"},description:"",name:"linkMessage",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},zIndex:{defaultValue:null,description:"",name:"zIndex",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},autofocus:{defaultValue:{value:"true"},description:"",name:"autofocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"It must be focusable and has a forwarded ref.",name:"children",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"components/design-system/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}try{generateTooltipWrapper.displayName="generateTooltipWrapper",generateTooltipWrapper.__docgenInfo={description:"",displayName:"generateTooltipWrapper",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/Tooltip.tsx#generateTooltipWrapper"]={docgenInfo:generateTooltipWrapper.__docgenInfo,name:"generateTooltipWrapper",path:"components/design-system/Tooltip.tsx#generateTooltipWrapper"})}catch(__react_docgen_typescript_loader_error){}}}]);