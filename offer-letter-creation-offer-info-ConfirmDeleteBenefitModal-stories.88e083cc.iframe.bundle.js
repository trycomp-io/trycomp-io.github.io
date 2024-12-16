"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[7882],{"./stories/offer-letter/creation/offer-info/ConfirmDeleteBenefitModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ConfirmDeleteBenefitModal_stories});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),design_system=__webpack_require__("./components/design-system/index.ts");const ConfirmDeleteBenefitModal=({isOpen,onClose,onConfirm,benefitName})=>(0,jsx_runtime.jsx)(design_system.Lt,{isOpen,onClose,header:"Excluir benefício",body:(0,jsx_runtime.jsxs)("span",{children:["Você tem certeza que deseja excluir o benefício ",(0,jsx_runtime.jsx)("strong",{children:benefitName}),"? Isto não pode ser desfeito."]}),actionLabel:"Excluir",onAction:async()=>onConfirm(),secondaryActionLabel:"Cancelar",onSecondaryAction:async()=>onClose(),isDeletion:!0});ConfirmDeleteBenefitModal.__docgenInfo={description:"",methods:[],displayName:"ConfirmDeleteBenefitModal"};const ConfirmDeleteBenefitModal_stories={title:"design-system/AlertDialog/Use Cases/ConfirmDeleteBenefitModal",component:ConfirmDeleteBenefitModal,args:{},parameters:{layout:"centered"}},Default={name:"ConfirmDeleteBenefitModal",args:{benefitName:"Plano de saúde",isOpen:!0}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'ConfirmDeleteBenefitModal',\n  args: {\n    benefitName: 'Plano de saúde',\n    isOpen: true\n  }\n}",...Default.parameters?.docs?.source}}}}}]);