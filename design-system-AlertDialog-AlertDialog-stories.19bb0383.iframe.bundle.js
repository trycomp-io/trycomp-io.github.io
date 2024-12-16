"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[1749],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./components/design-system/AlertDialog/AlertDialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Delete:()=>Delete,Return:()=>Return,SingleButton:()=>SingleButton,ThreeButtons:()=>ThreeButtons,TimerWithSkipOption:()=>TimerWithSkipOption,TimerWithoutSkipOption:()=>TimerWithoutSkipOption,TwoButtons:()=>TwoButtons,WithLoading:()=>WithLoading,WithLongTexts:()=>WithLongTexts,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_root_components_design_system_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/design-system/AlertDialog/AlertDialog.tsx"),_barrel_optimize_names_MdArrowBack_react_icons_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("__barrel_optimize__?names=MdAttachMoney!=!./node_modules/react-icons/md/index.esm.js"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"design-system/AlertDialog",component:_root_components_design_system_AlertDialog_AlertDialog__WEBPACK_IMPORTED_MODULE_1__.L,args:{onSkipCountdownChange:void 0},parameters:{layout:"centered"}},SingleButton={args:{isOpen:!0,header:"Title",body:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"It supports rich text"}),". Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."]}),actionLabel:"Confirmar"}},TwoButtons={args:{isOpen:!0,header:"Title",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Confirmar",secondaryActionLabel:"Cancelar"}},ThreeButtons={args:{isOpen:!0,header:"Title",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Confirmar",secondaryActionLabel:"Cancelar",tertiaryActionLabel:"Deletar tudo"}},Return={args:{isOpen:!0,header:"Title",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Confirmar",headerIcon:_barrel_optimize_names_MdArrowBack_react_icons_md__WEBPACK_IMPORTED_MODULE_3__.MdArrowBack}},Delete={args:{isOpen:!0,header:"Title",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Excluir",isDeletion:!0}},TimerWithSkipOption={args:{isOpen:!0,header:"Title",body:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The easiest way to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"reset the timer"})," is by navigating to another story. To"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"make the counter last longer"}),", you can set the `countdownInSeconds` in the controls section."]})}),actionLabel:"Confirmar",secondaryActionLabel:"Cancelar",countdownInSeconds:5,skipCountdown:!1,onSkipCountdownChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.XI)("onSkipCountdownChange")}},TimerWithoutSkipOption={args:{isOpen:!0,header:"Title",body:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["The easiest way to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"reset the timer"})," is by navigating to another story. To"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"make the counter last longer"}),", you can set the `countdownInSeconds` in the controls section."]})}),actionLabel:"Confirmar",secondaryActionLabel:"Cancelar",countdownInSeconds:5,onSkipCountdownChange:void 0}},WithLoading={args:{isOpen:!0,header:"Title",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Confirmar",onAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3))),secondaryActionLabel:"Cancelar",onSecondaryAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3))),tertiaryActionLabel:"Deletar tudo",onTertiaryAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3)))}},WithLongTexts={args:{isOpen:!0,header:"This is a very long title that does not fit in the alert",body:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.",actionLabel:"Confirmar",onAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3))),secondaryActionLabel:"Cancelar",onSecondaryAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3))),tertiaryActionLabel:"Deletar tudo",onTertiaryAction:async()=>new Promise((resolve=>setTimeout(resolve,2e3)))}},__namedExportsOrder=["SingleButton","TwoButtons","ThreeButtons","Return","Delete","TimerWithSkipOption","TimerWithoutSkipOption","WithLoading","WithLongTexts"];SingleButton.parameters={...SingleButton.parameters,docs:{...SingleButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: <p>\n        <b>It supports rich text</b>. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed\n        diam nonumy eirmod tempor invidunt ut labore et dolore.\n      </p>,\n    actionLabel: 'Confirmar'\n  }\n}",...SingleButton.parameters?.docs?.source}}},TwoButtons.parameters={...TwoButtons.parameters,docs:{...TwoButtons.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Confirmar',\n    secondaryActionLabel: 'Cancelar'\n  }\n}",...TwoButtons.parameters?.docs?.source}}},ThreeButtons.parameters={...ThreeButtons.parameters,docs:{...ThreeButtons.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Confirmar',\n    secondaryActionLabel: 'Cancelar',\n    tertiaryActionLabel: 'Deletar tudo'\n  }\n}",...ThreeButtons.parameters?.docs?.source}}},Return.parameters={...Return.parameters,docs:{...Return.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Confirmar',\n    headerIcon: MdArrowBack\n  }\n}",...Return.parameters?.docs?.source}}},Delete.parameters={...Delete.parameters,docs:{...Delete.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Excluir',\n    isDeletion: true\n  }\n}",...Delete.parameters?.docs?.source}}},TimerWithSkipOption.parameters={...TimerWithSkipOption.parameters,docs:{...TimerWithSkipOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: <>\n        <p>\n          The easiest way to <b>reset the timer</b> is by navigating to another story. To{' '}\n          <b>make the counter last longer</b>, you can set the `countdownInSeconds` in the controls\n          section.\n        </p>\n      </>,\n    actionLabel: 'Confirmar',\n    secondaryActionLabel: 'Cancelar',\n    countdownInSeconds: 5,\n    skipCountdown: false,\n    onSkipCountdownChange: action('onSkipCountdownChange')\n  }\n}",...TimerWithSkipOption.parameters?.docs?.source}}},TimerWithoutSkipOption.parameters={...TimerWithoutSkipOption.parameters,docs:{...TimerWithoutSkipOption.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: <>\n        <p>\n          The easiest way to <b>reset the timer</b> is by navigating to another story. To{' '}\n          <b>make the counter last longer</b>, you can set the `countdownInSeconds` in the controls\n          section.\n        </p>\n      </>,\n    actionLabel: 'Confirmar',\n    secondaryActionLabel: 'Cancelar',\n    countdownInSeconds: 5,\n    onSkipCountdownChange: undefined\n  }\n}",...TimerWithoutSkipOption.parameters?.docs?.source}}},WithLoading.parameters={...WithLoading.parameters,docs:{...WithLoading.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'Title',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Confirmar',\n    onAction: async () => new Promise(resolve => setTimeout(resolve, 2000)),\n    secondaryActionLabel: 'Cancelar',\n    onSecondaryAction: async () => new Promise(resolve => setTimeout(resolve, 2000)),\n    tertiaryActionLabel: 'Deletar tudo',\n    onTertiaryAction: async () => new Promise(resolve => setTimeout(resolve, 2000))\n  }\n}",...WithLoading.parameters?.docs?.source}}},WithLongTexts.parameters={...WithLongTexts.parameters,docs:{...WithLongTexts.parameters?.docs,source:{originalSource:"{\n  args: {\n    isOpen: true,\n    header: 'This is a very long title that does not fit in the alert',\n    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',\n    actionLabel: 'Confirmar',\n    onAction: async () => new Promise(resolve => setTimeout(resolve, 2000)),\n    secondaryActionLabel: 'Cancelar',\n    onSecondaryAction: async () => new Promise(resolve => setTimeout(resolve, 2000)),\n    tertiaryActionLabel: 'Deletar tudo',\n    onTertiaryAction: async () => new Promise(resolve => setTimeout(resolve, 2000))\n  }\n}",...WithLongTexts.parameters?.docs?.source}}}}}]);