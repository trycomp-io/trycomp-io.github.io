"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[1713],{"./components/design-system/Divider/Divider.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DataTable:()=>DataTable,Horizontal:()=>Horizontal,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Divider_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),chunk_YGVX4ESO=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-YGVX4ESO.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),chunk_3LE6AY5Q=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs"),chunk_QEVFQ4EU=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),Center=(0,chunk_3LE6AY5Q.B)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Center.displayName="Center";var centerStyles={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}},design_system=((0,chunk_QEVFQ4EU.R)((function AbsoluteCenter2(props,ref){const{axis="both",...rest}=props;return(0,jsx_runtime.jsx)(chunk_3LE6AY5Q.B.div,{ref,__css:centerStyles[axis],...rest,position:"absolute"})})),__webpack_require__("./components/design-system/index.ts"));const Divider_stories={title:"design-system/Divider",component:chunk_YGVX4ESO.c,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","lg"]},orientation:{control:"radio",options:["horizontal","vertical"]}},decorators:[(Story,context)=>(0,jsx_runtime.jsxs)(design_system.Zp,{children:[(0,jsx_runtime.jsx)(chunk_P74GIWPW.E,{textStyle:"subtitle2",children:context.name}),(0,jsx_runtime.jsx)(Center,{width:"400px",height:"100px",children:(0,jsx_runtime.jsx)(Story,{})}),(0,jsx_runtime.jsxs)(chunk_P74GIWPW.E,{textStyle:"body2",children:["You can change the ",(0,jsx_runtime.jsx)("b",{children:"size"})," in the ",(0,jsx_runtime.jsx)("b",{children:"controls"})," panel below (or press ",(0,jsx_runtime.jsx)("b",{children:"d"}),")."]})]})]},Horizontal={args:{}},Vertical={args:{orientation:"vertical"}},DataTable={args:{variant:"data-table",size:"sm",orientation:"vertical"}},__namedExportsOrder=["Horizontal","Vertical","DataTable"];Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"{\n  args: {\n    orientation: 'vertical'\n  }\n}",...Vertical.parameters?.docs?.source}}},DataTable.parameters={...DataTable.parameters,docs:{...DataTable.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'data-table',\n    size: 'sm',\n    orientation: 'vertical'\n  }\n}",...DataTable.parameters?.docs?.source}}}}}]);