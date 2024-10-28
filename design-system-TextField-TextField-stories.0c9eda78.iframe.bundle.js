"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[3537],{"./components/design-system/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Filled:()=>Filled,LongText:()=>LongText,PostfixMenuNoOptions:()=>PostfixMenuNoOptions,PrefixMenu:()=>PrefixMenu,PrefixMenuError:()=>PrefixMenuError,PrefixMenuNoOptions:()=>PrefixMenuNoOptions,PrefixMenuShortOption:()=>PrefixMenuShortOption,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Filled$parameters,_Filled$parameters2,_Error$parameters,_Error$parameters2,_Disabled$parameters,_Disabled$parameters2,_LongText$parameters,_LongText$parameters2,_PrefixMenu$parameter,_PrefixMenu$parameter2,_PrefixMenuNoOptions$,_PrefixMenuNoOptions$2,_PrefixMenuShortOptio,_PrefixMenuShortOptio2,_PrefixMenuError$para,_PrefixMenuError$para2,_PostfixMenuNoOptions,_PostfixMenuNoOptions2,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/index.ts"),_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./lib/apiClients/core/types.ts"),_root_helpers_formatters_helper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./helpers/formatters.helper.ts"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_Users_takamura_repos_comp_comp_app_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean consequat ex et nulla viverra semper. Etiam tellus ipsum, porttitor sed porta quis, sodales sed turpis. Nullam lacinia, enim non vulputate laoreet, lorem justo tempus ligula, vitae imperdiet felis enim vel nunc. Nullam arcu mi, pulvinar vel ipsum a, sollicitudin lacinia quam. Duis quis tempus lorem. Pellentesque placerat eget magna in ultrices. Sed nec rutrum ipsum, non rutrum erat. Aenean ipsum neque, volutpat et neque non, eleifend aliquam tortor. Curabitur suscipit dolor in nibh dignissim, eget ullamcorper sem ullamcorper. Maecenas at arcu at ipsum eleifend dignissim ut quis velit. Sed ut enim dignissim, consequat turpis vitae, sodales dui.";const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/TextField",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_2__.A_,parameters:{layout:"centered"},decorators:[function(Story){return __jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.az,{width:"328px"},__jsx(Story,null))}]};var Default={args:{label:"Label"}},Filled={args:{label:"Label",text:"Some value"}},Error={args:{label:"Label",text:"Some value",errorMessage:"Error message."}},Disabled={args:{label:"Label",text:"Some value",isReadOnly:!0}},LongText={args:{label:longText,text:longText,errorMessage:longText,prefixMenu:{value:{id:0,display_name:"R$ Real Brasileiro"},options:[{id:0,display_name:"R$ Real Brasileiro"},{id:1,display_name:longText}]}}},PrefixMenu={args:{label:"Label",text:"1234",isPopoverMenuLazy:!0,prefixMenu:{value:{id:"BRL",short_name:"R$",display_name:"Real brasileiro"},options:Object.values(_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_3__.Sj).map((function(currency){return{id:currency,short_name:(0,_root_helpers_formatters_helper__WEBPACK_IMPORTED_MODULE_4__.vv)(currency,{short:!0}),display_name:(0,_root_helpers_formatters_helper__WEBPACK_IMPORTED_MODULE_4__.vv)(currency)}}))}}},PrefixMenuNoOptions={args:{label:"Label",text:"1234",isPopoverMenuLazy:!0,prefixMenu:{value:{id:"BRL",short_name:"R$",display_name:"Real brasileiro"},options:[]}}},PrefixMenuShortOption={args:{label:"Label",text:"1234",isPopoverMenuLazy:!0,prefixMenu:{value:{id:"BRL",short_name:"R$",display_name:"R$"},options:[{id:"0",short_name:"R$",display_name:"R$"},{id:"1",short_name:"%",display_name:"%"}]}}},PrefixMenuError={args:{label:"Label",text:"1234",errorMessage:"Error message.",prefixMenu:{value:{id:"BRL",short_name:"R$",display_name:"Real brasileiro"},options:Object.values(_root_lib_apiClients_core_types__WEBPACK_IMPORTED_MODULE_3__.Sj).map((function(currency){return{id:currency,short_name:(0,_root_helpers_formatters_helper__WEBPACK_IMPORTED_MODULE_4__.vv)(currency,{short:!0}),display_name:(0,_root_helpers_formatters_helper__WEBPACK_IMPORTED_MODULE_4__.vv)(currency)}}))}}},PostfixMenuNoOptions={args:{label:"Bônus",text:"1234",postfixMenu:{value:{id:0,display_name:"salários base"},maxWidth:"6rem"},inputWidth:"20%"}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),Filled.parameters=_objectSpread(_objectSpread({},Filled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Filled$parameters=Filled.parameters)||void 0===_Filled$parameters?void 0:_Filled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: 'Some value'\n  }\n}"},null===(_Filled$parameters2=Filled.parameters)||void 0===_Filled$parameters2||null===(_Filled$parameters2=_Filled$parameters2.docs)||void 0===_Filled$parameters2?void 0:_Filled$parameters2.source)})}),Error.parameters=_objectSpread(_objectSpread({},Error.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Error$parameters=Error.parameters)||void 0===_Error$parameters?void 0:_Error$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: 'Some value',\n    errorMessage: 'Error message.'\n  }\n}"},null===(_Error$parameters2=Error.parameters)||void 0===_Error$parameters2||null===(_Error$parameters2=_Error$parameters2.docs)||void 0===_Error$parameters2?void 0:_Error$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: 'Some value',\n    isReadOnly: true\n  }\n}"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),LongText.parameters=_objectSpread(_objectSpread({},LongText.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LongText$parameters=LongText.parameters)||void 0===_LongText$parameters?void 0:_LongText$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: longText,\n    text: longText,\n    errorMessage: longText,\n    prefixMenu: {\n      value: {\n        id: 0,\n        display_name: 'R$ Real Brasileiro'\n      },\n      options: [{\n        id: 0,\n        display_name: 'R$ Real Brasileiro'\n      }, {\n        id: 1,\n        display_name: longText\n      }]\n    }\n  }\n}"},null===(_LongText$parameters2=LongText.parameters)||void 0===_LongText$parameters2||null===(_LongText$parameters2=_LongText$parameters2.docs)||void 0===_LongText$parameters2?void 0:_LongText$parameters2.source)})}),PrefixMenu.parameters=_objectSpread(_objectSpread({},PrefixMenu.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrefixMenu$parameter=PrefixMenu.parameters)||void 0===_PrefixMenu$parameter?void 0:_PrefixMenu$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: '1234',\n    isPopoverMenuLazy: true,\n    prefixMenu: {\n      value: {\n        id: 'BRL',\n        short_name: 'R$',\n        display_name: 'Real brasileiro'\n      },\n      options: Object.values(Currency).map(currency => ({\n        id: currency,\n        short_name: formatCurrency(currency, {\n          short: true\n        }),\n        display_name: formatCurrency(currency)\n      }))\n    }\n  }\n}"},null===(_PrefixMenu$parameter2=PrefixMenu.parameters)||void 0===_PrefixMenu$parameter2||null===(_PrefixMenu$parameter2=_PrefixMenu$parameter2.docs)||void 0===_PrefixMenu$parameter2?void 0:_PrefixMenu$parameter2.source)})}),PrefixMenuNoOptions.parameters=_objectSpread(_objectSpread({},PrefixMenuNoOptions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrefixMenuNoOptions$=PrefixMenuNoOptions.parameters)||void 0===_PrefixMenuNoOptions$?void 0:_PrefixMenuNoOptions$.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: '1234',\n    isPopoverMenuLazy: true,\n    prefixMenu: {\n      value: {\n        id: 'BRL',\n        short_name: 'R$',\n        display_name: 'Real brasileiro'\n      },\n      options: []\n    }\n  }\n}"},null===(_PrefixMenuNoOptions$2=PrefixMenuNoOptions.parameters)||void 0===_PrefixMenuNoOptions$2||null===(_PrefixMenuNoOptions$2=_PrefixMenuNoOptions$2.docs)||void 0===_PrefixMenuNoOptions$2?void 0:_PrefixMenuNoOptions$2.source)})}),PrefixMenuShortOption.parameters=_objectSpread(_objectSpread({},PrefixMenuShortOption.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrefixMenuShortOptio=PrefixMenuShortOption.parameters)||void 0===_PrefixMenuShortOptio?void 0:_PrefixMenuShortOptio.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: '1234',\n    isPopoverMenuLazy: true,\n    prefixMenu: {\n      value: {\n        id: 'BRL',\n        short_name: 'R$',\n        display_name: 'R$'\n      },\n      options: [{\n        id: '0',\n        short_name: 'R$',\n        display_name: 'R$'\n      }, {\n        id: '1',\n        short_name: '%',\n        display_name: '%'\n      }]\n    }\n  }\n}"},null===(_PrefixMenuShortOptio2=PrefixMenuShortOption.parameters)||void 0===_PrefixMenuShortOptio2||null===(_PrefixMenuShortOptio2=_PrefixMenuShortOptio2.docs)||void 0===_PrefixMenuShortOptio2?void 0:_PrefixMenuShortOptio2.source)})}),PrefixMenuError.parameters=_objectSpread(_objectSpread({},PrefixMenuError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PrefixMenuError$para=PrefixMenuError.parameters)||void 0===_PrefixMenuError$para?void 0:_PrefixMenuError$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Label',\n    text: '1234',\n    errorMessage: 'Error message.',\n    prefixMenu: {\n      value: {\n        id: 'BRL',\n        short_name: 'R$',\n        display_name: 'Real brasileiro'\n      },\n      options: Object.values(Currency).map(currency => ({\n        id: currency,\n        short_name: formatCurrency(currency, {\n          short: true\n        }),\n        display_name: formatCurrency(currency)\n      }))\n    }\n  }\n}"},null===(_PrefixMenuError$para2=PrefixMenuError.parameters)||void 0===_PrefixMenuError$para2||null===(_PrefixMenuError$para2=_PrefixMenuError$para2.docs)||void 0===_PrefixMenuError$para2?void 0:_PrefixMenuError$para2.source)})}),PostfixMenuNoOptions.parameters=_objectSpread(_objectSpread({},PostfixMenuNoOptions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_PostfixMenuNoOptions=PostfixMenuNoOptions.parameters)||void 0===_PostfixMenuNoOptions?void 0:_PostfixMenuNoOptions.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Bônus',\n    text: '1234',\n    postfixMenu: {\n      value: {\n        id: 0,\n        display_name: 'salários base'\n      },\n      maxWidth: '6rem'\n    },\n    inputWidth: '20%'\n  }\n}"},null===(_PostfixMenuNoOptions2=PostfixMenuNoOptions.parameters)||void 0===_PostfixMenuNoOptions2||null===(_PostfixMenuNoOptions2=_PostfixMenuNoOptions2.docs)||void 0===_PostfixMenuNoOptions2?void 0:_PostfixMenuNoOptions2.source)})});const __namedExportsOrder=["Default","Filled","Error","Disabled","LongText","PrefixMenu","PrefixMenuNoOptions","PrefixMenuShortOption","PrefixMenuError","PostfixMenuNoOptions"]}}]);