"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[4130],{"./stories/design-system/ThreeDotsDropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ThreeDotsDropdown_stories});var _Default$parameters,_Default$parameters2,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_CHB4ZXZG=__webpack_require__("./node_modules/@chakra-ui/hooks/dist/chunk-CHB4ZXZG.mjs"),design_system=__webpack_require__("./components/design-system/index.ts"),chunk_4OGHDZEB=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-4OGHDZEB.mjs"),chunk_3O5UWOX6=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3O5UWOX6.mjs"),chunk_DKFDJSXF=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),chunk_YLCZP3C4=__webpack_require__("./node_modules/@chakra-ui/portal/dist/chunk-YLCZP3C4.mjs"),chunk_KVBLLJMP=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-KVBLLJMP.mjs"),chunk_3JH7ZFSI=__webpack_require__("./node_modules/@chakra-ui/popover/dist/chunk-3JH7ZFSI.mjs"),chunk_MUMUYFOI=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MUMUYFOI.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_6CSUKJP7=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-6CSUKJP7.mjs"),index_esm=__webpack_require__("./node_modules/react-icons/md/index.esm.js"),__jsx=react.createElement,ThreeDotsDropdown=function ThreeDotsDropdown(_ref){var disclosure=_ref.disclosure,_ref$openStrategy=_ref.openStrategy,openStrategy=void 0===_ref$openStrategy?"click":_ref$openStrategy,buttons=_ref.buttons,_ref$size=_ref.size,size=void 0===_ref$size?"icon-lg":_ref$size,popDisclosure=(0,chunk_CHB4ZXZG.j)();void 0!==disclosure&&(popDisclosure=disclosure);var hoverStrategy="hover"===openStrategy,timeoutRef=(0,react.useRef)();return __jsx(chunk_4OGHDZEB.A,{isOpen:popDisclosure.isOpen,onOpen:hoverStrategy?void 0:popDisclosure.onOpen,onClose:hoverStrategy?void 0:popDisclosure.onClose,placement:"bottom-start",isLazy:!0},__jsx(chunk_3O5UWOX6.W,null,__jsx(design_system.K0,{size,"aria-label":"more",onMouseEnter:hoverStrategy?popDisclosure.onOpen:void 0,onMouseLeave:hoverStrategy?function startToClose(){timeoutRef.current=setTimeout((function(){popDisclosure.onClose()}),3e3)}:void 0,icon:__jsx(chunk_DKFDJSXF.I,{as:index_esm.MdMoreVert}),bg:"transparent",_hover:{bg:"transparent"}})),__jsx(chunk_YLCZP3C4.Z,null,__jsx(chunk_KVBLLJMP.h,{w:"auto",minW:"170px",onWheel:function onWheel(e){return e.stopPropagation()},onMouseEnter:hoverStrategy?function stopClosing(){void 0!==timeoutRef.current&&(clearTimeout(timeoutRef.current),timeoutRef.current=void 0)}:void 0,onMouseLeave:hoverStrategy?popDisclosure.onClose:void 0},__jsx(chunk_3JH7ZFSI.e,null,__jsx(chunk_MUMUYFOI.T,null,buttons.map((function(b){var _b$color;return __jsx(chunk_NAA7TEES.$,{key:b.id,variant:"ghost",color:null!==(_b$color=b.color)&&void 0!==_b$color?_b$color:"black",w:"full",justifyContent:"start",borderRadius:".5rem",padding:".5rem",onClick:b.onClick},"string"==typeof b.label?__jsx(react.Fragment,null,__jsx(chunk_P74GIWPW.E,{fontSize:"0.85rem"},b.label),void 0!==b.info?__jsx(design_system.m_,{label:b.info},__jsx(chunk_6CSUKJP7.az,{as:"span",ml:2,display:"flex"},__jsx(chunk_DKFDJSXF.I,{as:index_esm.MdInfo,w:"1rem",h:"1rem"}))):null):b.label)})))))))};ThreeDotsDropdown.displayName="ThreeDotsDropdown";try{ThreeDotsDropdown.displayName="ThreeDotsDropdown",ThreeDotsDropdown.__docgenInfo={description:"",displayName:"ThreeDotsDropdown",props:{disclosure:{defaultValue:null,description:"",name:"disclosure",required:!1,type:{name:"{ isOpen: boolean; onOpen: () => void; onClose: () => void; onToggle: () => void; isControlled: boolean; getButtonProps: (props?: any) => any; getDisclosureProps: (props?: any) => any; }"}},openStrategy:{defaultValue:{value:"click"},description:"",name:"openStrategy",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},buttons:{defaultValue:null,description:"",name:"buttons",required:!0,type:{name:"{ id: string; label: ReactNode; info?: string | undefined; onClick?: MouseEventHandler<HTMLButtonElement> | undefined; color?: string | undefined; }[]"}},size:{defaultValue:{value:"icon-lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"icon-sm"'},{value:'"icon-lg"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/design-system/ThreeDotsDropdown.tsx#ThreeDotsDropdown"]={docgenInfo:ThreeDotsDropdown.__docgenInfo,name:"ThreeDotsDropdown",path:"components/design-system/ThreeDotsDropdown.tsx#ThreeDotsDropdown"})}catch(__react_docgen_typescript_loader_error){}var ThreeDotsDropdown_stories_jsx=react.createElement;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const ThreeDotsDropdown_stories={title:"design-system/Popover/ThreeDotsDropdown",component:ThreeDotsDropdown,parameters:{layout:"centered"},args:{buttons:[{id:"0",label:"Button 0"},{id:"1",label:"Button 1",info:"Info 1"},{id:"2",label:"Button 2",color:"red.500"},{id:"3",label:"Button 3",info:"Info 3",color:"red.500"}]},render:function render(args){var disclosure=(0,chunk_CHB4ZXZG.j)();return ThreeDotsDropdown_stories_jsx(ThreeDotsDropdown,(0,esm_extends.A)({},args,{disclosure}))}};var Default={name:"ThreeDotsDropdown",args:{}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  name: 'ThreeDotsDropdown',\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})});const __namedExportsOrder=["Default"]}}]);