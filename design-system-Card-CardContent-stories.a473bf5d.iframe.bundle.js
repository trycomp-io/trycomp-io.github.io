"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[1086],{"./components/design-system/Card/CardContent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IntegerEditable:()=>IntegerEditable,IntegerReadOnly:()=>IntegerReadOnly,MenuEditable:()=>MenuEditable,MenuReadOnly:()=>MenuReadOnly,MoneyAllEditable:()=>MoneyAllEditable,MoneyOnlyAmountEditable:()=>MoneyOnlyAmountEditable,MoneyReadOnly:()=>MoneyReadOnly,TextEditable:()=>TextEditable,TextReadOnly:()=>TextReadOnly,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _TextReadOnly$paramet,_TextReadOnly$paramet2,_TextEditable$paramet,_TextEditable$paramet2,_MoneyReadOnly$parame,_MoneyReadOnly$parame2,_MoneyAllEditable$par,_MoneyAllEditable$par2,_MoneyOnlyAmountEdita,_MoneyOnlyAmountEdita2,_MenuReadOnly$paramet,_MenuReadOnly$paramet2,_MenuEditable$paramet,_MenuEditable$paramet2,_IntegerReadOnly$para,_IntegerReadOnly$para2,_IntegerEditable$para,_IntegerEditable$para2,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/index.ts"),react_icons_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/index.js"),_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./lib/apiClients/core/types.ts"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@chakra-ui/toast/dist/chunk-ENIANY67.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/Cards/Parts/CardContent",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,args:{},parameters:{layout:"centered"},decorators:[function(Story){return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.Zb,{w:"303px",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.action)("Card.onClick"),gap:"s4"},__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.Ol,{icon:react_icons_md__WEBPACK_IMPORTED_MODULE_5__.sF1,tooltipLabel:"This is a random header."}),__jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.ll,{title:"Read only title"}),__jsx(Story,null))}]};var TextReadOnly={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Text,isEditable:!1,value:"Read only value"}},TextEditable={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Text,isEditable:!0,value:"Editable"},render:function Render(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Editable"),value=_useState[0],setValue=_useState[1],toast=(0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.p)();return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Text,value,onSubmit:function onSubmit(newValue){""===newValue?toast({description:"It's up to the dev setting the error behavior.",status:"error"}):setValue(newValue)},onChange:function onChange(_){}}))}},MoneyReadOnly={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Money,isEditable:!1,amount:1234567.89,currency:_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__.F.BRL}},MoneyAllEditable={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Money,isEditable:!0,currencies:Object.values(_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__.F),isCurrencyEditable:!0},render:function Render(args){var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__.F.USD),currency=_useState2[0],setCurrency=_useState2[1],_useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1e3),amount=_useState3[0],setAmount=_useState3[1];return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Money,currency,amount,onCurrencySelected:setCurrency,onSubmit:function onSubmit(amount,currency){setCurrency(currency),setAmount(amount)}}))}},MoneyOnlyAmountEditable={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Money,isEditable:!0,currency:_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__.F.BRL,isCurrencyEditable:!1},render:function Render(args){var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1e3),amount=_useState4[0],setAmount=_useState4[1];return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Money,currency:_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_4__.F.BRL,amount,onSubmit:function onSubmit(amount,_){setAmount(amount)}}))}},MenuReadOnly={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Menu,isEditable:!1,selectedId:0,options:[{id:0,displayName:"Option 1"}]}},MenuEditable={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Menu,isEditable:!0,selectedId:0,options:[{id:0,displayName:"Diário"},{id:1,displayName:"Mensal"},{id:2,displayName:"Trimestral"},{id:3,displayName:"The dev can decide what to put here"}]},render:function Render(args){var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),selectedId=_useState5[0],setSelectedId=_useState5[1];return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Menu,selectedId,onSelect:function onSelect(id){return setSelectedId(id)}}))}},IntegerReadOnly={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Integer,isEditable:!1,value:12,suffix:"salários"}},IntegerEditable={args:{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Integer,isEditable:!0,value:12,suffix:"salários"},render:function Render(args){var _useState6=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(12),value=_useState6[0],setValue=_useState6[1];return __jsx(_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.aY,(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},args,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.G4.Integer,value,onSubmit:setValue,onChange:function onChange(_){}}))}};TextReadOnly.parameters=_objectSpread(_objectSpread({},TextReadOnly.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextReadOnly$paramet=TextReadOnly.parameters)||void 0===_TextReadOnly$paramet?void 0:_TextReadOnly$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Text,\n    isEditable: false,\n    value: 'Read only value'\n  }\n}"},null===(_TextReadOnly$paramet2=TextReadOnly.parameters)||void 0===_TextReadOnly$paramet2||null===(_TextReadOnly$paramet2=_TextReadOnly$paramet2.docs)||void 0===_TextReadOnly$paramet2?void 0:_TextReadOnly$paramet2.source)})}),TextEditable.parameters=_objectSpread(_objectSpread({},TextEditable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TextEditable$paramet=TextEditable.parameters)||void 0===_TextEditable$paramet?void 0:_TextEditable$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Text,\n    isEditable: true,\n    value: 'Editable'\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState<string>('Editable');\n    const toast = useToast();\n    function onSubmit(newValue: string) {\n      if (newValue !== '') {\n        setValue(newValue);\n        return;\n      }\n      toast({\n        description: \"It's up to the dev setting the error behavior.\",\n        status: 'error'\n      });\n    }\n    return <CardContent {...args} type={CardContentType.Text} value={value} onSubmit={onSubmit} onChange={_ => {}} />;\n  }\n}"},null===(_TextEditable$paramet2=TextEditable.parameters)||void 0===_TextEditable$paramet2||null===(_TextEditable$paramet2=_TextEditable$paramet2.docs)||void 0===_TextEditable$paramet2?void 0:_TextEditable$paramet2.source)})}),MoneyReadOnly.parameters=_objectSpread(_objectSpread({},MoneyReadOnly.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MoneyReadOnly$parame=MoneyReadOnly.parameters)||void 0===_MoneyReadOnly$parame?void 0:_MoneyReadOnly$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Money,\n    isEditable: false,\n    amount: 1234567.89,\n    currency: Currency.BRL\n  }\n}"},null===(_MoneyReadOnly$parame2=MoneyReadOnly.parameters)||void 0===_MoneyReadOnly$parame2||null===(_MoneyReadOnly$parame2=_MoneyReadOnly$parame2.docs)||void 0===_MoneyReadOnly$parame2?void 0:_MoneyReadOnly$parame2.source)})}),MoneyAllEditable.parameters=_objectSpread(_objectSpread({},MoneyAllEditable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MoneyAllEditable$par=MoneyAllEditable.parameters)||void 0===_MoneyAllEditable$par?void 0:_MoneyAllEditable$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Money,\n    isEditable: true,\n    currencies: Object.values(Currency),\n    isCurrencyEditable: true\n  },\n  render: function Render(args) {\n    const [currency, setCurrency] = useState<Currency>(Currency.USD);\n    const [amount, setAmount] = useState<number>(1000);\n    return <CardContent {...args} type={CardContentType.Money} currency={currency} amount={amount} onCurrencySelected={setCurrency} onSubmit={(amount, currency) => {\n      setCurrency(currency);\n      setAmount(amount);\n    }} />;\n  }\n}"},null===(_MoneyAllEditable$par2=MoneyAllEditable.parameters)||void 0===_MoneyAllEditable$par2||null===(_MoneyAllEditable$par2=_MoneyAllEditable$par2.docs)||void 0===_MoneyAllEditable$par2?void 0:_MoneyAllEditable$par2.source)})}),MoneyOnlyAmountEditable.parameters=_objectSpread(_objectSpread({},MoneyOnlyAmountEditable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MoneyOnlyAmountEdita=MoneyOnlyAmountEditable.parameters)||void 0===_MoneyOnlyAmountEdita?void 0:_MoneyOnlyAmountEdita.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Money,\n    isEditable: true,\n    currency: Currency.BRL,\n    isCurrencyEditable: false\n  },\n  render: function Render(args) {\n    const [amount, setAmount] = useState<number>(1000);\n    return <CardContent {...args} type={CardContentType.Money} currency={Currency.BRL} amount={amount} onSubmit={(amount, _) => {\n      setAmount(amount);\n    }} />;\n  }\n}"},null===(_MoneyOnlyAmountEdita2=MoneyOnlyAmountEditable.parameters)||void 0===_MoneyOnlyAmountEdita2||null===(_MoneyOnlyAmountEdita2=_MoneyOnlyAmountEdita2.docs)||void 0===_MoneyOnlyAmountEdita2?void 0:_MoneyOnlyAmountEdita2.source)})}),MenuReadOnly.parameters=_objectSpread(_objectSpread({},MenuReadOnly.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MenuReadOnly$paramet=MenuReadOnly.parameters)||void 0===_MenuReadOnly$paramet?void 0:_MenuReadOnly$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Menu,\n    isEditable: false,\n    selectedId: 0,\n    options: [{\n      id: 0,\n      displayName: 'Option 1'\n    }]\n  }\n}"},null===(_MenuReadOnly$paramet2=MenuReadOnly.parameters)||void 0===_MenuReadOnly$paramet2||null===(_MenuReadOnly$paramet2=_MenuReadOnly$paramet2.docs)||void 0===_MenuReadOnly$paramet2?void 0:_MenuReadOnly$paramet2.source)})}),MenuEditable.parameters=_objectSpread(_objectSpread({},MenuEditable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MenuEditable$paramet=MenuEditable.parameters)||void 0===_MenuEditable$paramet?void 0:_MenuEditable$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Menu,\n    isEditable: true,\n    selectedId: 0,\n    options: [{\n      id: 0,\n      displayName: 'Diário'\n    }, {\n      id: 1,\n      displayName: 'Mensal'\n    }, {\n      id: 2,\n      displayName: 'Trimestral'\n    }, {\n      id: 3,\n      displayName: 'The dev can decide what to put here'\n    }]\n  },\n  render: function Render(args) {\n    const [selectedId, setSelectedId] = useState<Key>(0);\n    return <CardContent {...args} type={CardContentType.Menu} selectedId={selectedId} onSelect={id => setSelectedId(id)} />;\n  }\n}"},null===(_MenuEditable$paramet2=MenuEditable.parameters)||void 0===_MenuEditable$paramet2||null===(_MenuEditable$paramet2=_MenuEditable$paramet2.docs)||void 0===_MenuEditable$paramet2?void 0:_MenuEditable$paramet2.source)})}),IntegerReadOnly.parameters=_objectSpread(_objectSpread({},IntegerReadOnly.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IntegerReadOnly$para=IntegerReadOnly.parameters)||void 0===_IntegerReadOnly$para?void 0:_IntegerReadOnly$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Integer,\n    isEditable: false,\n    value: 12,\n    suffix: 'salários'\n  }\n}"},null===(_IntegerReadOnly$para2=IntegerReadOnly.parameters)||void 0===_IntegerReadOnly$para2||null===(_IntegerReadOnly$para2=_IntegerReadOnly$para2.docs)||void 0===_IntegerReadOnly$para2?void 0:_IntegerReadOnly$para2.source)})}),IntegerEditable.parameters=_objectSpread(_objectSpread({},IntegerEditable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IntegerEditable$para=IntegerEditable.parameters)||void 0===_IntegerEditable$para?void 0:_IntegerEditable$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    type: CardContentType.Integer,\n    isEditable: true,\n    value: 12,\n    suffix: 'salários'\n  },\n  render: function Render(args) {\n    const [value, setValue] = useState<number>(12);\n    return <CardContent {...args} type={CardContentType.Integer} value={value} onSubmit={setValue} onChange={_ => {}} />;\n  }\n}"},null===(_IntegerEditable$para2=IntegerEditable.parameters)||void 0===_IntegerEditable$para2||null===(_IntegerEditable$para2=_IntegerEditable$para2.docs)||void 0===_IntegerEditable$para2?void 0:_IntegerEditable$para2.source)})});const __namedExportsOrder=["TextReadOnly","TextEditable","MoneyReadOnly","MoneyAllEditable","MoneyOnlyAmountEditable","MenuReadOnly","MenuEditable","IntegerReadOnly","IntegerEditable"]}}]);