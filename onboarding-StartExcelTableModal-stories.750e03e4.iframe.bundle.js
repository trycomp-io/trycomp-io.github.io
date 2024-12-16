"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[3107],{"./stories/onboarding/StartExcelTableModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:()=>Normal,__namedExportsOrder:()=>__namedExportsOrder,default:()=>StartExcelTableModal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),chunk_MPFPK3CX=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-MPFPK3CX.mjs"),chunk_P74GIWPW=__webpack_require__("./node_modules/@chakra-ui/layout/dist/chunk-P74GIWPW.mjs"),Modal=__webpack_require__("./components/design-system/Modal.tsx"),design_system=__webpack_require__("./components/design-system/index.ts");function StartExcelTableModal({isOpen,onSave,startRow,error,onClose}){const[internalStartRow,setInternalStartRow]=(0,react.useState)(startRow);return(0,jsx_runtime.jsx)(Modal.a,{isOpen,actionLabel:"Salvar",actionOnClick:()=>{onSave(internalStartRow)},title:"Nos ajude a encontrar seus dados",onClose,children:(0,jsx_runtime.jsxs)(chunk_MPFPK3CX.s,{gap:"1rem",direction:"column","data-testid":"StartExcelTableModal",children:[(0,jsx_runtime.jsx)(chunk_P74GIWPW.E,{children:"Precisamos que nos informe em qual linha está o cabeçalho da sua tabela."}),(0,jsx_runtime.jsx)(design_system.A_,{type:"number",label:"Número da linha",text:"number"==typeof startRow?String(startRow):"",onChange:v=>{setInternalStartRow(""===v?void 0:Number(v))},errorMessage:error})]})})}StartExcelTableModal.__docgenInfo={description:"",methods:[],displayName:"StartExcelTableModal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:""},onSave:{required:!0,tsType:{name:"signature",type:"function",raw:"(startRow?: number) => void",signature:{arguments:[{type:{name:"number"},name:"startRow"}],return:{name:"void"}}},description:""},startRow:{required:!0,tsType:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}]},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const StartExcelTableModal_stories={title:"onboarding/StartExcelTableModal",component:StartExcelTableModal,parameters:{layout:"centered"}},Normal=(args=>(0,jsx_runtime.jsx)(StartExcelTableModal,{...args})).bind({});Normal.args={isOpen:!0,onSave:()=>null,startRow:0,error:void 0};const __namedExportsOrder=["Normal"];Normal.parameters={...Normal.parameters,docs:{...Normal.parameters?.docs,source:{originalSource:"args => <StartExcelTableModal {...args} />",...Normal.parameters?.docs?.source}}}}}]);