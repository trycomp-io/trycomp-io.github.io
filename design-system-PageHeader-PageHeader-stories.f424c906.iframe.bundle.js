"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[2271],{"./components/design-system/PageHeader/PageHeader.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExtraActions:()=>ExtraActions,LeftSide:()=>LeftSide,LongText:()=>LongText,RightSide:()=>RightSide,TitleAndSubtitle:()=>TitleAndSubtitle,TitleOnly:()=>TitleOnly,WithIconAction:()=>WithIconAction,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./components/design-system/index.ts"),_root_components_design_system_PageContainer__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./components/design-system/PageContainer.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),_barrel_optimize_names_MdDownload_react_icons_md__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("__barrel_optimize__?names=MdAttachMoney!=!./node_modules/react-icons/md/index.esm.js"),_root_contexts_User__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./contexts/User.tsx"),_root_lib_apiClients_user_types__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./lib/apiClients/user/types.ts"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@tanstack/query-core/build/lib/queryClient.mjs"),_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs");const actionBuilder=n=>Array.from({length:n},((_,i)=>({label:`Action ${i}`,onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)(`action${i}`),variant:i===n-1?"red":"white"}))),longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla magna. Proin finibus finibus ultricies. Vestibulum ut efficitur ipsum. Suspendisse justo ante, accumsan sit amet lectus id, egestas congue sem. Nulla orci augue, interdum eget cursus sed, ullamcorper quis mi.",__WEBPACK_DEFAULT_EXPORT__={title:"design-system/Page/PageHeader",component:_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.zY,args:{onClose:void 0,onBack:void 0},argTypes:{onBack:{control:"radio",options:["none","set"],mapping:{none:void 0,set:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onBack")}},onClose:{control:"radio",options:["none","set"],mapping:{none:void 0,set:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose")}},actions:{options:["No actions","1 action","3 actions"],mapping:{"No actions":actionBuilder(0),"1 action":actionBuilder(1),"3 actions":actionBuilder(3)}}},decorators:[Story=>{const userContext={user:{status:"success",profile:{id:0,email:"john.doe@example.com",name:"John Doe",platform_access:_root_lib_apiClients_user_types__WEBPACK_IMPORTED_MODULE_5__.Od.OK,platform_access_message:"",last_feedback_date:null,last_login:"",date_joined:"",first_login:"",second_last_login:""},roles:[],currentLocalCompany:null},resetUser:()=>{},setUserContext:()=>{}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_contexts_User__WEBPACK_IMPORTED_MODULE_4__.Rs.Provider,{value:userContext,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})},Story=>{const client=new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.E({defaultOptions:{queries:{retry:2}}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_7__.Ht,{client,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{})})},Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_root_components_design_system_PageContainer__WEBPACK_IMPORTED_MODULE_2__.L,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Story,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.E,{children:["- Choose the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"number of buttons on the right"})," in the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"Controls panel"})," (",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("em",{children:"actions"}),")."]})]})]},TitleOnly={args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose"),title:"Title area",actions:actionBuilder(1),withProfile:!0}},TitleAndSubtitle={args:{onBack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onBack"),title:"Title area",subtitle:"Subtitle",actions:actionBuilder(1),withProfile:!0}},WithIconAction={args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose"),title:"Title area",actions:[{key:"download",label:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_MdDownload_react_icons_md__WEBPACK_IMPORTED_MODULE_9__.MdDownload,{}),variant:"white",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("download")},...actionBuilder(2)]}},ExtraActions={args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose"),title:"Title area",actions:actionBuilder(2),extraActions:[{id:"1",name:"Option 1",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("option1")},{id:"2",name:"Option 2",onClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("option2")}]}},LeftSide={name:"avoid: LeftSide",args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose"),actions:actionBuilder(2),leftSide:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.VQ,{selected:0,tabs:[{id:0,title:"Any"},{id:1,title:"Component"}]},"tabbar")]}},RightSide={name:"avoid: RightSide",args:{onClose:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onClose"),actions:actionBuilder(2),rightSide:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_root_components_design_system__WEBPACK_IMPORTED_MODULE_1__.VQ,{selected:0,tabs:[{id:0,title:"Any"},{id:1,title:"Component"}]},"tabbar")]}},LongText={args:{onBack:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_3__.XI)("onBack"),title:longText,subtitle:longText,actions:actionBuilder(1)}},__namedExportsOrder=["TitleOnly","TitleAndSubtitle","WithIconAction","ExtraActions","LeftSide","RightSide","LongText"];TitleOnly.parameters={...TitleOnly.parameters,docs:{...TitleOnly.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: action('onClose'),\n    title: 'Title area',\n    actions: actionBuilder(1),\n    withProfile: true\n  }\n}",...TitleOnly.parameters?.docs?.source}}},TitleAndSubtitle.parameters={...TitleAndSubtitle.parameters,docs:{...TitleAndSubtitle.parameters?.docs,source:{originalSource:"{\n  args: {\n    onBack: action('onBack'),\n    title: 'Title area',\n    subtitle: 'Subtitle',\n    actions: actionBuilder(1),\n    withProfile: true\n  }\n}",...TitleAndSubtitle.parameters?.docs?.source}}},WithIconAction.parameters={...WithIconAction.parameters,docs:{...WithIconAction.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: action('onClose'),\n    title: 'Title area',\n    actions: [{\n      key: 'download',\n      label: <MdDownload />,\n      variant: 'white',\n      onClick: action('download')\n    }, ...actionBuilder(2)]\n  }\n}",...WithIconAction.parameters?.docs?.source}}},ExtraActions.parameters={...ExtraActions.parameters,docs:{...ExtraActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    onClose: action('onClose'),\n    title: 'Title area',\n    actions: actionBuilder(2),\n    extraActions: [{\n      id: '1',\n      name: 'Option 1',\n      onClick: action('option1')\n    }, {\n      id: '2',\n      name: 'Option 2',\n      onClick: action('option2')\n    }]\n  }\n}",...ExtraActions.parameters?.docs?.source}}},LeftSide.parameters={...LeftSide.parameters,docs:{...LeftSide.parameters?.docs,source:{originalSource:"{\n  name: 'avoid: LeftSide',\n  args: {\n    onClose: action('onClose'),\n    actions: actionBuilder(2),\n    leftSide: [<TabBar key=\"tabbar\" selected={0} tabs={[{\n      id: 0,\n      title: 'Any'\n    }, {\n      id: 1,\n      title: 'Component'\n    }]} />]\n  }\n}",...LeftSide.parameters?.docs?.source}}},RightSide.parameters={...RightSide.parameters,docs:{...RightSide.parameters?.docs,source:{originalSource:"{\n  name: 'avoid: RightSide',\n  args: {\n    onClose: action('onClose'),\n    actions: actionBuilder(2),\n    rightSide: [<TabBar key=\"tabbar\" selected={0} tabs={[{\n      id: 0,\n      title: 'Any'\n    }, {\n      id: 1,\n      title: 'Component'\n    }]} />]\n  }\n}",...RightSide.parameters?.docs?.source}}},LongText.parameters={...LongText.parameters,docs:{...LongText.parameters?.docs,source:{originalSource:"{\n  args: {\n    onBack: action('onBack'),\n    title: longText,\n    subtitle: longText,\n    actions: actionBuilder(1)\n  }\n}",...LongText.parameters?.docs?.source}}}}}]);