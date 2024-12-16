"use strict";(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[832],{"./components/design-system/SignInButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SignInButton});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),chunk_DKFDJSXF=__webpack_require__("./node_modules/@chakra-ui/icon/dist/chunk-DKFDJSXF.mjs"),chunk_NAA7TEES=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),esm=__webpack_require__("./node_modules/react-icons/lib/esm/index.js");function FcGoogle(props){return(0,esm.k5)({tag:"svg",attr:{version:"1.1",x:"0px",y:"0px",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12\r\n\tc0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24\r\n\tc0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"}},{tag:"path",attr:{fill:"#FF3D00",d:"M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657\r\n\tC34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"}},{tag:"path",attr:{fill:"#4CAF50",d:"M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36\r\n\tc-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"}},{tag:"path",attr:{fill:"#1976D2",d:"M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571\r\n\tc0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"}}]})(props)}const MicrosoftLogo=props=>(0,jsx_runtime.jsxs)(chunk_DKFDJSXF.I,{viewBox:"0 0 23 23",...props,children:[(0,jsx_runtime.jsx)("path",{fill:"#f3f3f3",d:"M0 0h23v23H0z"}),(0,jsx_runtime.jsx)("path",{fill:"#f35325",d:"M1 1h10v10H1z"}),(0,jsx_runtime.jsx)("path",{fill:"#81bc06",d:"M12 1h10v10H12z"}),(0,jsx_runtime.jsx)("path",{fill:"#05a6f0",d:"M1 12h10v10H1z"}),(0,jsx_runtime.jsx)("path",{fill:"#ffba08",d:"M12 12h10v10H12z"})]});MicrosoftLogo.__docgenInfo={description:"",methods:[],displayName:"MicrosoftLogo"};const SignInButton=({authProvider,children,...rest})=>(0,jsx_runtime.jsx)(chunk_NAA7TEES.$,{variant:"white",size:"lg",leftIcon:(()=>{switch(authProvider){case"google":return(0,jsx_runtime.jsx)(chunk_DKFDJSXF.I,{boxSize:"24px",as:FcGoogle});case"microsoft":return(0,jsx_runtime.jsx)(MicrosoftLogo,{boxSize:"24px"});case"email":return}})(),width:"full",...rest,children});SignInButton.__docgenInfo={description:"",methods:[],displayName:"SignInButton",props:{authProvider:{required:!0,tsType:{name:"union",raw:"'google' | 'microsoft' | 'email'",elements:[{name:"literal",value:"'google'"},{name:"literal",value:"'microsoft'"},{name:"literal",value:"'email'"}]},description:""}},composes:["ButtonProps"]}}}]);