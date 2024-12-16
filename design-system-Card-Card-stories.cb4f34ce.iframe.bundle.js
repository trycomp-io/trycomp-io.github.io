"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[8739],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./components/design-system/Card/Card.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Clickable:()=>Clickable,FullyEditable:()=>FullyEditable,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/design-system/index.ts"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_barrel_optimize_names_MdAttachMoney_MdDelete_MdSettings_react_icons_md__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("__barrel_optimize__?names=MdAttachMoney!=!./node_modules/react-icons/md/index.esm.js");const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/Cards",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.Zp,args:{onClick:void 0},parameters:{layout:"centered"}},Basic={args:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.E,{children:["A ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"Card"})," is just a container, you can put other components in it."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.E,{children:"Notice that it includes a 0.5rem gap between its content:"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.az,{width:"100px",height:"16px",bg:"red.500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.az,{width:"100px",height:"16px",bg:"red.500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.az,{width:"100px",height:"16px",bg:"red.500"})]})}},Clickable={args:{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("onClick"),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.E,{children:["When ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"onClick"})," is defined, it has a hover effect."]})}},FullyEditable={args:{onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("onClick"),gap:"0",width:"303px",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.aR,{icon:_barrel_optimize_names_MdAttachMoney_MdDelete_MdSettings_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdAttachMoney,tooltipLabel:"Tooltip Label",actions:[{ariaLabel:"Configurar",icon:_barrel_optimize_names_MdAttachMoney_MdDelete_MdSettings_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdSettings,tooltipLabel:"Configurar",onClick:async()=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Settings.onClick")()},{ariaLabel:"Deletar",icon:_barrel_optimize_names_MdAttachMoney_MdDelete_MdSettings_react_icons_md__WEBPACK_IMPORTED_MODULE_5__.MdDelete,tooltipLabel:"Deletar",onClick:async()=>(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("Delete.onClick")()}],isTooltipEditable:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.ZB,{title:"Title",isEditable:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.Wu,{type:_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.sn.TEXT,isEditable:!0,value:"A text card"})]})}},__namedExportsOrder=["Basic","Clickable","FullyEditable"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <Text>\n          A <b>Card</b> is just a container, you can put other components in it.\n        </Text>\n        <Text>Notice that it includes a 0.5rem gap between its content:</Text>\n        <Box width="100px" height="16px" bg="red.500" />\n        <Box width="100px" height="16px" bg="red.500" />\n        <Box width="100px" height="16px" bg="red.500" />\n      </>\n  }\n}',...Basic.parameters?.docs?.source}}},Clickable.parameters={...Clickable.parameters,docs:{...Clickable.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: action('onClick'),\n    children: <Text>\n        When <b>onClick</b> is defined, it has a hover effect.\n      </Text>\n  }\n}",...Clickable.parameters?.docs?.source}}},FullyEditable.parameters={...FullyEditable.parameters,docs:{...FullyEditable.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClick: action('onClick'),\n    gap: '0',\n    width: '303px',\n    children: <>\n        <CardHeader icon={MdAttachMoney} tooltipLabel={'Tooltip Label'} actions={[{\n        ariaLabel: 'Configurar',\n        icon: MdSettings,\n        tooltipLabel: 'Configurar',\n        onClick: async () => action('Settings.onClick')()\n      }, {\n        ariaLabel: 'Deletar',\n        icon: MdDelete,\n        tooltipLabel: 'Deletar',\n        onClick: async () => action('Delete.onClick')()\n      }]} isTooltipEditable={true} />\n        <CardTitle title=\"Title\" isEditable={true} />\n        <CardContent type={CardContentType.TEXT} isEditable={true} value={'A text card'} />\n      </>\n  }\n}",...FullyEditable.parameters?.docs?.source}}}}}]);