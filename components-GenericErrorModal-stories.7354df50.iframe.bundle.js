"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[863],{"./stories/components/GenericErrorModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>GenericErrorModal_stories});var _Default$parameters,_Default$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),next_router=__webpack_require__("./node_modules/next/router.js"),AlertDialog=__webpack_require__("./components/design-system/AlertDialog.tsx"),__jsx=react.createElement,GenericErrorModal=function GenericErrorModal(){var router=(0,next_router.useRouter)(),handleReloadPage=function handleReloadPage(){router.reload()};return __jsx(AlertDialog.a,{isOpen:!0,onClose:handleReloadPage,header:"Ops",body:"Todo mundo erra. E dessa vez foram nossos servidores. Tente novamente daqui alguns minutos.",actionLabel:"Atualizar página",onAction:(0,asyncToGenerator.Z)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.abrupt("return",handleReloadPage());case 1:case"end":return _context.stop()}}),_callee)}))),isCentered:!0})};GenericErrorModal.displayName="GenericErrorModal";try{GenericErrorModal.displayName="GenericErrorModal",GenericErrorModal.__docgenInfo={description:"",displayName:"GenericErrorModal",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/GenericErrorModal.tsx#GenericErrorModal"]={docgenInfo:GenericErrorModal.__docgenInfo,name:"GenericErrorModal",path:"components/GenericErrorModal.tsx#GenericErrorModal"})}catch(__react_docgen_typescript_loader_error){}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const GenericErrorModal_stories={title:"design-system/AlertDialog/Use Cases/GenericErrorModal",component:GenericErrorModal,args:{},parameters:{layout:"centered"}};var Default={name:"GenericErrorModal",args:{}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'GenericErrorModal',\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]},"./components/design-system/AlertDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>AlertDialog});var _Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1__),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-BPJV7R7V.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-OWW5MU75.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YBA5A33G.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6FWJQRCB.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-PVJ72NKC.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-YI7XFFAC.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@chakra-ui/checkbox/dist/chunk-VFYM6BU6.mjs"),_root_components_design_system_IconButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/IconButton.tsx"),react_icons_md__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),_excluded=["isOpen","header","headerIcon","body","onClose","isCentered","hideCloseButton"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,AlertDialog=function AlertDialog(_ref){var isOpen=_ref.isOpen,header=_ref.header,headerIcon=_ref.headerIcon,body=_ref.body,onClose=_ref.onClose,_ref$isCentered=_ref.isCentered,isCentered=void 0===_ref$isCentered||_ref$isCentered,hideCloseButton=_ref.hideCloseButton,footerProps=(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.Z)(_ref,_excluded),cancelRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.a,{variant:"alertDialog",isOpen,leastDestructiveRef:cancelRef,onClose,isCentered},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Z,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__._,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.x,null,__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.k,{alignItems:"center"},void 0!==headerIcon&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.J,{as:headerIcon,boxSize:"1.5rem",mr:"s8",color:"black.800"}),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.x,{noOfLines:1},header),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.L,null),!hideCloseButton&&__jsx(_root_components_design_system_IconButton__WEBPACK_IMPORTED_MODULE_2__.h,{variant:"icon-close","aria-label":"fechar",icon:__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.J,{as:react_icons_md__WEBPACK_IMPORTED_MODULE_11__.FU5}),onClick:onClose}))),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_12__.f,null,body),__jsx(Footer,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_13__.Z)({},footerProps,{cancelRef})))))};AlertDialog.displayName="AlertDialog";var Footer=function Footer(_ref2){var actionLabel=_ref2.actionLabel,onAction=_ref2.onAction,cancelRef=_ref2.cancelRef,secondaryActionLabel=_ref2.secondaryActionLabel,onSecondaryAction=_ref2.onSecondaryAction,tertiaryActionLabel=_ref2.tertiaryActionLabel,onTertiaryAction=_ref2.onTertiaryAction,_ref2$isDeletion=_ref2.isDeletion,isDeletion=void 0!==_ref2$isDeletion&&_ref2$isDeletion,_ref2$countdownInSeco=_ref2.countdownInSeconds,countdownInSeconds=void 0===_ref2$countdownInSeco?0:_ref2$countdownInSeco,skipCountdown=_ref2.skipCountdown,onSkipCountdownChange=_ref2.onSkipCountdownChange,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(skipCountdown?0:countdownInSeconds),timeLeft=_useState[0],setTimeLeft=_useState[1],_useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),confirmIsLoading=_useState2[0],setConfirmIsLoading=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),cancelIsLoading=_useState3[0],setCancelIsLoading=_useState3[1],_useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),deleteIsLoading=_useState4[0],setDeleteIsLoading=_useState4[1],actionWrapper=function actionWrapper(action,setLoading){return(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_14__.Z)(_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().mark((function _callee(){return _Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_regenerator_index_js__WEBPACK_IMPORTED_MODULE_1___default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,setLoading(!0),_context.next=4,null==action?void 0:action();case 4:return _context.prev=4,setLoading(!1),_context.finish(4);case 7:case"end":return _context.stop()}}),_callee,null,[[0,,4,7]])})))};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){if(!(timeLeft<=0)){var IntervalId=setInterval((function(){setTimeLeft((function(prev){return prev-1}))}),1e3);return function(){return clearInterval(IntervalId)}}}),[timeLeft]);var actions=timeLeft>0?__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.z,{size:"md",color:"red.500",bg:"transparent",_hover:{borderColor:"transparent"},cursor:"auto"},"00:".concat(String(timeLeft).padStart(2,"0"))):__jsx(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,void 0!==secondaryActionLabel&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.z,{ref:cancelRef,variant:"gray",size:"md",isLoading:cancelIsLoading,onClick:actionWrapper(onSecondaryAction,setCancelIsLoading)},secondaryActionLabel),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.z,{variant:isDeletion?"violet":"red",size:"md",isLoading:confirmIsLoading,onClick:actionWrapper(onAction,setConfirmIsLoading),ml:"s16"},actionLabel));return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_16__.m,null,void 0!==onSkipCountdownChange&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_17__.X,{size:"sm",onChange:function onChange(event){return onSkipCountdownChange(event.target.checked)}},__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.x,{textStyle:"subtitle2"},"Não mostrar esse alerta novamente.")),void 0!==tertiaryActionLabel&&__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_15__.z,{variant:"link",size:"lg",isLoading:deleteIsLoading,onClick:actionWrapper(onTertiaryAction,setDeleteIsLoading),minW:0},tertiaryActionLabel),__jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.L,null),actions)};Footer.displayName="Footer";try{AlertDialog.displayName="AlertDialog",AlertDialog.__docgenInfo={description:"",displayName:"AlertDialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!0,type:{name:"() => void"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"ReactNode"}},actionLabel:{defaultValue:null,description:"",name:"actionLabel",required:!0,type:{name:"string"}},onAction:{defaultValue:null,description:"",name:"onAction",required:!0,type:{name:"() => Promise<void>"}},secondaryActionLabel:{defaultValue:null,description:"",name:"secondaryActionLabel",required:!1,type:{name:"string"}},onSecondaryAction:{defaultValue:null,description:"",name:"onSecondaryAction",required:!1,type:{name:"(() => Promise<void>)"}},tertiaryActionLabel:{defaultValue:null,description:"",name:"tertiaryActionLabel",required:!1,type:{name:"string"}},onTertiaryAction:{defaultValue:null,description:"",name:"onTertiaryAction",required:!1,type:{name:"(() => Promise<void>)"}},headerIcon:{defaultValue:null,description:"Show an Icon at the left of the `header`.",name:"headerIcon",required:!1,type:{name:"IconType"}},isDeletion:{defaultValue:{value:"false"},description:"Change the alert to emphasize the criticality of the operation.",name:"isDeletion",required:!1,type:{name:"boolean"}},countdownInSeconds:{defaultValue:{value:"0"},description:"Block the user for `x` seconds (0 < x < 60s).",name:"countdownInSeconds",required:!1,type:{name:"number"}},skipCountdown:{defaultValue:null,description:"Do not show the countdown even if `countdownInSeconds` is set.",name:"skipCountdown",required:!1,type:{name:"boolean"}},onSkipCountdownChange:{defaultValue:null,description:"If set, shows a checkbox while the countdown is active.",name:"onSkipCountdownChange",required:!1,type:{name:"((value: boolean) => void)"}},isCentered:{defaultValue:{value:"true"},description:"Show the dialog at the center of the screen",name:"isCentered",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:null,description:"If `true`, hides the close icon at the top right corner",name:"hideCloseButton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/AlertDialog.tsx#AlertDialog"]={docgenInfo:AlertDialog.__docgenInfo,name:"AlertDialog",path:"components/design-system/AlertDialog.tsx#AlertDialog"})}catch(__react_docgen_typescript_loader_error){}},"./components/design-system/IconButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var _Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-3HSDMH4Y.mjs"),_excluded=["size"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,IconButton=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function IconButton(props,ref){var size=props.size,rest=(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(props,_excluded);return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.h,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({ref,variant:"icon",size:null!=size?size:"icon-lg"},rest))}));try{IconButton.displayName="IconButton",IconButton.__docgenInfo={description:"",displayName:"IconButton",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"icon-sm"'},{value:'"icon-lg"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As"}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject"}},_firstLetter:{defaultValue:null,description:"Styles for CSS selector `&::first-letter`\n\nNOTE: This selector is only applied for block-level elements and not preceded by an image or table.\n@example ```jsx\n<Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>\n```",name:"_firstLetter",required:!1,type:{name:"SystemStyleObject"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject"}},_horizontal:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=horizontal]`",name:"_horizontal",required:!1,type:{name:"SystemStyleObject"}},_vertical:{defaultValue:null,description:"Styles for the CSS Selector `&[data-orientation=vertical]`",name:"_vertical",required:!1,type:{name:"SystemStyleObject"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/IconButton.tsx#IconButton"]={docgenInfo:IconButton.__docgenInfo,name:"IconButton",path:"components/design-system/IconButton.tsx#IconButton"})}catch(__react_docgen_typescript_loader_error){}}}]);