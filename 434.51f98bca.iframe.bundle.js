/*! For license information please see 434.51f98bca.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcomp_app=self.webpackChunkcomp_app||[]).push([[434],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function asyncGeneratorStep(n,t,e,r,o,a,c){try{var i=n[a](c),u=i.value}catch(n){return void e(n)}i.done?t(u):Promise.resolve(u).then(r,o)}function _asyncToGenerator(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var a=n.apply(t,e);function _next(n){asyncGeneratorStep(a,r,o,_next,_throw,"next",n)}function _throw(n){asyncGeneratorStep(a,r,o,_next,_throw,"throw",n)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>_asyncToGenerator})},"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":(module,__unused_webpack_exports,__webpack_require__)=>{var _typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/typeof.js").default;function _regeneratorRuntime(){"use strict";module.exports=_regeneratorRuntime=function _regeneratorRuntime(){return e},module.exports.__esModule=!0,module.exports.default=module.exports;var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function define(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{define({},"")}catch(t){define=function define(t,e,r){return t[e]=r}}function wrap(t,e,r,n){var i=e&&e.prototype instanceof Generator?e:Generator,a=Object.create(i.prototype),c=new Context(n||[]);return o(a,"_invoke",{value:makeInvokeMethod(t,r,c)}),a}function tryCatch(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=wrap;var h="suspendedStart",l="suspendedYield",f="executing",s="completed",y={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var p={};define(p,a,(function(){return this}));var d=Object.getPrototypeOf,v=d&&d(d(values([])));v&&v!==r&&n.call(v,a)&&(p=v);var g=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(p);function defineIteratorMethods(t){["next","throw","return"].forEach((function(e){define(t,e,(function(t){return this._invoke(e,t)}))}))}function AsyncIterator(t,e){function invoke(r,o,i,a){var c=tryCatch(t[r],t,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"==_typeof(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){invoke("next",t,i,a)}),(function(t){invoke("throw",t,i,a)})):e.resolve(h).then((function(t){u.value=t,i(u)}),(function(t){return invoke("throw",t,i,a)}))}a(c.arg)}var r;o(this,"_invoke",{value:function value(t,n){function callInvokeWithMethodAndArg(){return new e((function(e,r){invoke(t,n,e,r)}))}return r=r?r.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(e,r,n){var o=h;return function(i,a){if(o===f)throw Error("Generator is already running");if(o===s){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=maybeInvokeDelegate(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===h)throw o=s,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=f;var p=tryCatch(e,r,n);if("normal"===p.type){if(o=n.done?s:l,p.arg===y)continue;return{value:p.arg,done:n.done}}"throw"===p.type&&(o=s,n.method="throw",n.arg=p.arg)}}}function maybeInvokeDelegate(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,maybeInvokeDelegate(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=tryCatch(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,y;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function pushTryEntry(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function resetTryEntry(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function Context(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(pushTryEntry,this),this.reset(!0)}function values(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function next(){for(;++o<e.length;)if(n.call(e,o))return next.value=e[o],next.done=!1,next;return next.value=t,next.done=!0,next};return i.next=i}}throw new TypeError(_typeof(e)+" is not iterable")}return GeneratorFunction.prototype=GeneratorFunctionPrototype,o(g,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),o(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===GeneratorFunction||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,GeneratorFunctionPrototype):(t.__proto__=GeneratorFunctionPrototype,define(t,u,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,c,(function(){return this})),e.AsyncIterator=AsyncIterator,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new AsyncIterator(wrap(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},defineIteratorMethods(g),define(g,u,"Generator"),define(g,a,(function(){return this})),define(g,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function next(){for(;r.length;){var t=r.pop();if(t in e)return next.value=t,next.done=!1,next}return next.done=!0,next}},e.values=values,Context.prototype={constructor:Context,reset:function reset(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(resetTryEntry),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function stop(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function dispatchException(e){if(this.done)throw e;var r=this;function handle(n,o){return a.type="throw",a.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return handle("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0);if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return handle(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return handle(i.finallyLoc)}}}},abrupt:function abrupt(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function complete(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function finish(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),resetTryEntry(r),y}},catch:function _catch(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;resetTryEntry(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function delegateYield(e,r,n){return this.delegate={iterator:values(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}module.exports=_regeneratorRuntime,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/helpers/typeof.js":module=>{function _typeof(o){return module.exports=_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},module.exports.__esModule=!0,module.exports.default=module.exports,_typeof(o)}module.exports=_typeof,module.exports.__esModule=!0,module.exports.default=module.exports},"./node_modules/@babel/runtime/regenerator/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{var runtime=__webpack_require__("./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();module.exports=runtime;try{regeneratorRuntime=runtime}catch(accidentalStrictMode){"object"==typeof globalThis?globalThis.regeneratorRuntime=runtime:Function("r","regeneratorRuntime = r")(runtime)}},"./node_modules/@chakra-ui/button/dist/chunk-3HSDMH4Y.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>IconButton});var _chunk_NAA7TEES_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/button/dist/chunk-NAA7TEES.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),IconButton=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>{const{icon,children,isRound,"aria-label":ariaLabel,...rest}=props,element=icon||children,_children=(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(element)?(0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(element,{"aria-hidden":!0,focusable:!1}):null;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chunk_NAA7TEES_mjs__WEBPACK_IMPORTED_MODULE_3__.z,{padding:"0",borderRadius:isRound?"full":void 0,ref,"aria-label":ariaLabel,...rest,children:_children})}));IconButton.displayName="IconButton"},"./node_modules/@chakra-ui/layout/dist/chunk-6FWJQRCB.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>Spacer});var Spacer=(0,__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-3LE6AY5Q.mjs").m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});Spacer.displayName="Spacer"},"./node_modules/@chakra-ui/modal/dist/chunk-BPJV7R7V.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>AlertDialogContent,a:()=>AlertDialog});var _chunk_66WFFNY3_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-66WFFNY3.mjs"),_chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@chakra-ui/modal/dist/chunk-UUGUEMMH.mjs"),_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@chakra-ui/system/dist/chunk-QEVFQ4EU.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js");function AlertDialog(props){const{leastDestructiveRef,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_UUGUEMMH_mjs__WEBPACK_IMPORTED_MODULE_1__.u_,{...rest,initialFocusRef:leastDestructiveRef})}var AlertDialogContent=(0,_chakra_ui_system__WEBPACK_IMPORTED_MODULE_2__.G)(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chunk_66WFFNY3_mjs__WEBPACK_IMPORTED_MODULE_3__.h,{ref,role:"alertdialog",...props})))},"./node_modules/@storybook/addon-actions/dist/esm/index.js":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{action:()=>action});"".concat("storybook/actions","/panel");var EVENT_ID="".concat("storybook/actions","/action-event"),v4=(__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/models/index.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/uuid-browser/v4.js")),v4_default=__webpack_require__.n(v4),external_STORYBOOK_MODULE_ADDONS_=__webpack_require__("@storybook/addons"),config={depth:10,clearOnStoryChange:!0,limit:50};function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var findProto=function findProto(obj,callback){var proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},isReactSyntheticEvent=function isReactSyntheticEvent(e){return Boolean("object"===_typeof(e)&&e&&findProto(e,(function(proto){return/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)}))&&"function"==typeof e.persist)},serializeArg=function serializeArg(a){if(isReactSyntheticEvent(a)){var e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();var viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=null==viewDescriptor?void 0:viewDescriptor.value;return"object"===_typeof(view)&&"Window"===(null==view?void 0:view.constructor.name)&&Object.defineProperty(e,"view",Object.assign({},viewDescriptor,{value:Object.create(view.constructor.prototype)})),e}return a};function action(name){var options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},actionOptions=Object.assign({},config,options);return function actionHandler(){for(var channel=external_STORYBOOK_MODULE_ADDONS_.addons.getChannel(),id=v4_default()(),_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:Object.assign({},actionOptions,{maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1})};channel.emit(EVENT_ID,actionDisplayToEmit)}}__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var actions=function actions(){for(var options=config,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var names=args;1===names.length&&Array.isArray(names[0])&&(names=_slicedToArray(names,1)[0]);1!==names.length&&"string"!=typeof names[names.length-1]&&(options=Object.assign({},config,names.pop()));var namesObject=names[0];1===names.length&&"string"!=typeof namesObject||(namesObject={},names.forEach((function(name){namesObject[name]=name})));var actionsObject={};return Object.keys(namesObject).forEach((function(name){actionsObject[name]=action(namesObject[name],options)})),actionsObject},browser=(__webpack_require__("./node_modules/core-js/modules/es.object.freeze.js"),__webpack_require__("./node_modules/util-deprecate/browser.js")),browser_default=__webpack_require__.n(browser);browser_default()((function(){}),"decorate.* is no longer supported as of Storybook 6.0."),__webpack_require__("./node_modules/core-js/modules/es.object.entries.js"),__webpack_require__("./node_modules/core-js/modules/es.string.match.js"),__webpack_require__("./node_modules/core-js/modules/es.array.concat.js");var withActions_templateObject,global_window=__webpack_require__("./node_modules/global/window.js"),window_default=__webpack_require__.n(global_window),esm=__webpack_require__("./node_modules/ts-dedent/esm/index.js");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return withActions_arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||withActions_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function withActions_slicedToArray(arr,i){return function withActions_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function withActions_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||withActions_unsupportedIterableToArray(arr,i)||function withActions_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function withActions_unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return withActions_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?withActions_arrayLikeToArray(o,minLen):void 0}}function withActions_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var withActions_document=window_default().document,Element=window_default().Element,delegateEventSplitter=/^(\S+)\s*(.*)$/,matchesMethod=null!=Element&&!Element.prototype.matches?"msMatchesSelector":"matches",root=withActions_document&&withActions_document.getElementById("root"),hasMatchInAncestry=function hasMatchInAncestry(element,selector){if(element[matchesMethod](selector))return!0;var parent=element.parentElement;return!!parent&&hasMatchInAncestry(parent,selector)},createHandlers=function createHandlers(actionsFn){for(var _len=arguments.length,handles=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)handles[_key-1]=arguments[_key];var actionsObject=actionsFn.apply(void 0,handles);return Object.entries(actionsObject).map((function(_ref){var _ref2=withActions_slicedToArray(_ref,2),key=_ref2[0],action=_ref2[1],_key$match2=withActions_slicedToArray(key.match(delegateEventSplitter),3),eventName=(_key$match2[0],_key$match2[1]),selector=_key$match2[2];return{eventName,handler:function handler(e){selector&&!hasMatchInAncestry(e.target,selector)||action(e)}}}))},applyEventHandlers=browser_default()((function(actionsFn){for(var _len2=arguments.length,handles=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)handles[_key2-1]=arguments[_key2];(0,external_STORYBOOK_MODULE_ADDONS_.useEffect)((function(){if(null!=root){var handlers=createHandlers.apply(void 0,[actionsFn].concat(handles));return handlers.forEach((function(_ref3){var eventName=_ref3.eventName,handler=_ref3.handler;return root.addEventListener(eventName,handler)})),function(){return handlers.forEach((function(_ref4){var eventName=_ref4.eventName,handler=_ref4.handler;return root.removeEventListener(eventName,handler)}))}}}),[root,actionsFn,handles])}),(0,esm.C)(withActions_templateObject||(withActions_templateObject=function withActions_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    withActions(options) is deprecated, please configure addon-actions using the addParameter api:\n\n    addParameters({\n      actions: {\n        handles: options\n      },\n    });\n  "]))));(0,external_STORYBOOK_MODULE_ADDONS_.makeDecorator)({name:"withActions",parameterName:"actions",skipIfNoParametersOrOptions:!0,wrapper:function wrapper(getStory,context,_ref5){var parameters=_ref5.parameters,options=_ref5.options;return function applyDeprecatedOptions(actionsFn,options){options&&applyEventHandlers(actionsFn,options)}(actions,options),parameters&&parameters.handles&&applyEventHandlers.apply(void 0,[actions].concat(_toConsumableArray(parameters.handles))),getStory(context)}});(module=__webpack_require__.hmd(module))&&module.hot},"./node_modules/@storybook/addon-actions/dist/esm/models/DecoratorFunction.js":()=>{},"./node_modules/@storybook/addon-actions/dist/esm/models/HandlerFunction.js":()=>{},"./node_modules/@storybook/addon-actions/dist/esm/models/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var _DecoratorFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/models/DecoratorFunction.js");__webpack_require__.o(_DecoratorFunction__WEBPACK_IMPORTED_MODULE_0__,"action")&&__webpack_require__.d(__webpack_exports__,{action:function(){return _DecoratorFunction__WEBPACK_IMPORTED_MODULE_0__.action}});var _HandlerFunction__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/models/HandlerFunction.js");__webpack_require__.o(_HandlerFunction__WEBPACK_IMPORTED_MODULE_1__,"action")&&__webpack_require__.d(__webpack_exports__,{action:function(){return _HandlerFunction__WEBPACK_IMPORTED_MODULE_1__.action}})},"./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),toIndexedObject=__webpack_require__("./node_modules/core-js/internals/to-indexed-object.js"),nativeGetOwnPropertyDescriptor=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js");$({target:"Object",stat:!0,forced:!DESCRIPTORS||fails((function(){nativeGetOwnPropertyDescriptor(1)})),sham:!DESCRIPTORS},{getOwnPropertyDescriptor:function getOwnPropertyDescriptor(it,key){return nativeGetOwnPropertyDescriptor(toIndexedObject(it),key)}})},"./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),DESCRIPTORS=__webpack_require__("./node_modules/core-js/internals/descriptors.js"),ownKeys=__webpack_require__("./node_modules/core-js/internals/own-keys.js"),toIndexedObject=__webpack_require__("./node_modules/core-js/internals/to-indexed-object.js"),getOwnPropertyDescriptorModule=__webpack_require__("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),createProperty=__webpack_require__("./node_modules/core-js/internals/create-property.js");$({target:"Object",stat:!0,sham:!DESCRIPTORS},{getOwnPropertyDescriptors:function getOwnPropertyDescriptors(object){for(var key,descriptor,O=toIndexedObject(object),getOwnPropertyDescriptor=getOwnPropertyDescriptorModule.f,keys=ownKeys(O),result={},index=0;keys.length>index;)void 0!==(descriptor=getOwnPropertyDescriptor(O,key=keys[index++]))&&createProperty(result,key,descriptor);return result}})},"./node_modules/core-js/modules/es.object.get-prototype-of.js":(__unused_webpack_module,__unused_webpack_exports,__webpack_require__)=>{var $=__webpack_require__("./node_modules/core-js/internals/export.js"),fails=__webpack_require__("./node_modules/core-js/internals/fails.js"),toObject=__webpack_require__("./node_modules/core-js/internals/to-object.js"),nativeGetPrototypeOf=__webpack_require__("./node_modules/core-js/internals/object-get-prototype-of.js"),CORRECT_PROTOTYPE_GETTER=__webpack_require__("./node_modules/core-js/internals/correct-prototype-getter.js");$({target:"Object",stat:!0,forced:fails((function(){nativeGetPrototypeOf(1)})),sham:!CORRECT_PROTOTYPE_GETTER},{getPrototypeOf:function getPrototypeOf(it){return nativeGetPrototypeOf(toObject(it))}})},"./node_modules/util-deprecate/browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{var console=__webpack_require__("./node_modules/console-browserify/index.js");function config(name){try{if(!__webpack_require__.g.localStorage)return!1}catch(_){return!1}var val=__webpack_require__.g.localStorage[name];return null!=val&&"true"===String(val).toLowerCase()}module.exports=function deprecate(fn,msg){if(config("noDeprecation"))return fn;var warned=!1;return function deprecated(){if(!warned){if(config("throwDeprecation"))throw new Error(msg);config("traceDeprecation")?console.trace(msg):console.warn(msg),warned=!0}return fn.apply(this,arguments)}}},"./node_modules/uuid-browser/lib/bytesToUuid.js":module=>{for(var byteToHex=[],i=0;i<256;++i)byteToHex[i]=(i+256).toString(16).substr(1);module.exports=function bytesToUuid(buf,offset){var i=offset||0,bth=byteToHex;return bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+"-"+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]+bth[buf[i++]]}},"./node_modules/uuid-browser/lib/rng-browser.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng,crypto=void 0!==__webpack_require__.g&&(__webpack_require__.g.crypto||__webpack_require__.g.msCrypto);if(crypto&&crypto.getRandomValues){var rnds8=new Uint8Array(16);rng=function whatwgRNG(){return crypto.getRandomValues(rnds8),rnds8}}if(!rng){var rnds=new Array(16);rng=function(){for(var r,i=0;i<16;i++)0==(3&i)&&(r=4294967296*Math.random()),rnds[i]=r>>>((3&i)<<3)&255;return rnds}}module.exports=rng},"./node_modules/uuid-browser/v4.js":(module,__unused_webpack_exports,__webpack_require__)=>{var rng=__webpack_require__("./node_modules/uuid-browser/lib/rng-browser.js"),bytesToUuid=__webpack_require__("./node_modules/uuid-browser/lib/bytesToUuid.js");module.exports=function v4(options,buf,offset){var i=buf&&offset||0;"string"==typeof options&&(buf="binary"==options?new Array(16):null,options=null);var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf)for(var ii=0;ii<16;++ii)buf[i+ii]=rnds[ii];return buf||bytesToUuid(rnds)}}}]);