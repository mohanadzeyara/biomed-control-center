import{g as Ud,r as W_}from"./charts-CKiOGpj1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();var uc={exports:{}},Do={},cc={exports:{}},dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yp;function X_(){if(yp)return dt;yp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.iterator;function x(N){return N===null||typeof N!="object"?null:(N=v&&N[v]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,R={};function y(N,re,Ue){this.props=N,this.context=re,this.refs=R,this.updater=Ue||S}y.prototype.isReactComponent={},y.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function g(){}g.prototype=y.prototype;function F(N,re,Ue){this.props=N,this.context=re,this.refs=R,this.updater=Ue||S}var L=F.prototype=new g;L.constructor=F,T(L,y.prototype),L.isPureReactComponent=!0;var b=Array.isArray,O=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function V(N,re,Ue){var Q,ce={},Ee=null,xe=null;if(re!=null)for(Q in re.ref!==void 0&&(xe=re.ref),re.key!==void 0&&(Ee=""+re.key),re)O.call(re,Q)&&!I.hasOwnProperty(Q)&&(ce[Q]=re[Q]);var we=arguments.length-2;if(we===1)ce.children=Ue;else if(1<we){for(var Ne=Array(we),Qe=0;Qe<we;Qe++)Ne[Qe]=arguments[Qe+2];ce.children=Ne}if(N&&N.defaultProps)for(Q in we=N.defaultProps,we)ce[Q]===void 0&&(ce[Q]=we[Q]);return{$$typeof:s,type:N,key:Ee,ref:xe,props:ce,_owner:U.current}}function C(N,re){return{$$typeof:s,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function z(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ue){return re[Ue]})}var ie=/\/+/g;function $(N,re){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):re.toString(36)}function oe(N,re,Ue,Q,ce){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var xe=!1;if(N===null)xe=!0;else switch(Ee){case"string":case"number":xe=!0;break;case"object":switch(N.$$typeof){case s:case e:xe=!0}}if(xe)return xe=N,ce=ce(xe),N=Q===""?"."+$(xe,0):Q,b(ce)?(Ue="",N!=null&&(Ue=N.replace(ie,"$&/")+"/"),oe(ce,re,Ue,"",function(Qe){return Qe})):ce!=null&&(w(ce)&&(ce=C(ce,Ue+(!ce.key||xe&&xe.key===ce.key?"":(""+ce.key).replace(ie,"$&/")+"/")+N)),re.push(ce)),1;if(xe=0,Q=Q===""?".":Q+":",b(N))for(var we=0;we<N.length;we++){Ee=N[we];var Ne=Q+$(Ee,we);xe+=oe(Ee,re,Ue,Ne,ce)}else if(Ne=x(N),typeof Ne=="function")for(N=Ne.call(N),we=0;!(Ee=N.next()).done;)Ee=Ee.value,Ne=Q+$(Ee,we++),xe+=oe(Ee,re,Ue,Ne,ce);else if(Ee==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return xe}function he(N,re,Ue){if(N==null)return N;var Q=[],ce=0;return oe(N,Q,"","",function(Ee){return re.call(Ue,Ee,ce++)}),Q}function se(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ue)},function(Ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ue)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var me={current:null},H={transition:null},ue={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:H,ReactCurrentOwner:U};function le(){throw Error("act(...) is not supported in production builds of React.")}return dt.Children={map:he,forEach:function(N,re,Ue){he(N,function(){re.apply(this,arguments)},Ue)},count:function(N){var re=0;return he(N,function(){re++}),re},toArray:function(N){return he(N,function(re){return re})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},dt.Component=y,dt.Fragment=n,dt.Profiler=a,dt.PureComponent=F,dt.StrictMode=r,dt.Suspense=h,dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,dt.act=le,dt.cloneElement=function(N,re,Ue){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=T({},N.props),ce=N.key,Ee=N.ref,xe=N._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,xe=U.current),re.key!==void 0&&(ce=""+re.key),N.type&&N.type.defaultProps)var we=N.type.defaultProps;for(Ne in re)O.call(re,Ne)&&!I.hasOwnProperty(Ne)&&(Q[Ne]=re[Ne]===void 0&&we!==void 0?we[Ne]:re[Ne])}var Ne=arguments.length-2;if(Ne===1)Q.children=Ue;else if(1<Ne){we=Array(Ne);for(var Qe=0;Qe<Ne;Qe++)we[Qe]=arguments[Qe+2];Q.children=we}return{$$typeof:s,type:N.type,key:ce,ref:Ee,props:Q,_owner:xe}},dt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},dt.createElement=V,dt.createFactory=function(N){var re=V.bind(null,N);return re.type=N,re},dt.createRef=function(){return{current:null}},dt.forwardRef=function(N){return{$$typeof:f,render:N}},dt.isValidElement=w,dt.lazy=function(N){return{$$typeof:_,_payload:{_status:-1,_result:N},_init:se}},dt.memo=function(N,re){return{$$typeof:m,type:N,compare:re===void 0?null:re}},dt.startTransition=function(N){var re=H.transition;H.transition={};try{N()}finally{H.transition=re}},dt.unstable_act=le,dt.useCallback=function(N,re){return me.current.useCallback(N,re)},dt.useContext=function(N){return me.current.useContext(N)},dt.useDebugValue=function(){},dt.useDeferredValue=function(N){return me.current.useDeferredValue(N)},dt.useEffect=function(N,re){return me.current.useEffect(N,re)},dt.useId=function(){return me.current.useId()},dt.useImperativeHandle=function(N,re,Ue){return me.current.useImperativeHandle(N,re,Ue)},dt.useInsertionEffect=function(N,re){return me.current.useInsertionEffect(N,re)},dt.useLayoutEffect=function(N,re){return me.current.useLayoutEffect(N,re)},dt.useMemo=function(N,re){return me.current.useMemo(N,re)},dt.useReducer=function(N,re,Ue){return me.current.useReducer(N,re,Ue)},dt.useRef=function(N){return me.current.useRef(N)},dt.useState=function(N){return me.current.useState(N)},dt.useSyncExternalStore=function(N,re,Ue){return me.current.useSyncExternalStore(N,re,Ue)},dt.useTransition=function(){return me.current.useTransition()},dt.version="18.3.1",dt}var Sp;function Nd(){return Sp||(Sp=1,cc.exports=X_()),cc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function j_(){if(Mp)return Do;Mp=1;var s=Nd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(f,h,m){var _,v={},x=null,S=null;m!==void 0&&(x=""+m),h.key!==void 0&&(x=""+h.key),h.ref!==void 0&&(S=h.ref);for(_ in h)r.call(h,_)&&!u.hasOwnProperty(_)&&(v[_]=h[_]);if(f&&f.defaultProps)for(_ in h=f.defaultProps,h)v[_]===void 0&&(v[_]=h[_]);return{$$typeof:e,type:f,key:x,ref:S,props:v,_owner:a.current}}return Do.Fragment=n,Do.jsx=d,Do.jsxs=d,Do}var Ep;function q_(){return Ep||(Ep=1,uc.exports=j_()),uc.exports}var K=q_(),Lt=Nd();const Y_=Ud(Lt);var Za={},dc={exports:{}},Un={},fc={exports:{}},hc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function K_(){return Tp||(Tp=1,(function(s){function e(H,ue){var le=H.length;H.push(ue);e:for(;0<le;){var N=le-1>>>1,re=H[N];if(0<a(re,ue))H[N]=ue,H[le]=re,le=N;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ue=H[0],le=H.pop();if(le!==ue){H[0]=le;e:for(var N=0,re=H.length,Ue=re>>>1;N<Ue;){var Q=2*(N+1)-1,ce=H[Q],Ee=Q+1,xe=H[Ee];if(0>a(ce,le))Ee<re&&0>a(xe,ce)?(H[N]=xe,H[Ee]=le,N=Ee):(H[N]=ce,H[Q]=le,N=Q);else if(Ee<re&&0>a(xe,le))H[N]=xe,H[Ee]=le,N=Ee;else break e}}return ue}function a(H,ue){var le=H.sortIndex-ue.sortIndex;return le!==0?le:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var h=[],m=[],_=1,v=null,x=3,S=!1,T=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(H){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=H)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=n(m)}}function b(H){if(R=!1,L(H),!T)if(n(h)!==null)T=!0,se(O);else{var ue=n(m);ue!==null&&me(b,ue.startTime-H)}}function O(H,ue){T=!1,R&&(R=!1,g(V),V=-1),S=!0;var le=x;try{for(L(ue),v=n(h);v!==null&&(!(v.expirationTime>ue)||H&&!z());){var N=v.callback;if(typeof N=="function"){v.callback=null,x=v.priorityLevel;var re=N(v.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?v.callback=re:v===n(h)&&r(h),L(ue)}else r(h);v=n(h)}if(v!==null)var Ue=!0;else{var Q=n(m);Q!==null&&me(b,Q.startTime-ue),Ue=!1}return Ue}finally{v=null,x=le,S=!1}}var U=!1,I=null,V=-1,C=5,w=-1;function z(){return!(s.unstable_now()-w<C)}function ie(){if(I!==null){var H=s.unstable_now();w=H;var ue=!0;try{ue=I(!0,H)}finally{ue?$():(U=!1,I=null)}}else U=!1}var $;if(typeof F=="function")$=function(){F(ie)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=ie,$=function(){he.postMessage(null)}}else $=function(){y(ie,0)};function se(H){I=H,U||(U=!0,$())}function me(H,ue){V=y(function(){H(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){T||S||(T=!0,se(O))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return n(h)},s.unstable_next=function(H){switch(x){case 1:case 2:case 3:var ue=3;break;default:ue=x}var le=x;x=ue;try{return H()}finally{x=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=x;x=H;try{return ue()}finally{x=le}},s.unstable_scheduleCallback=function(H,ue,le){var N=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?N+le:N):le=N,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,H={id:_++,callback:ue,priorityLevel:H,startTime:le,expirationTime:re,sortIndex:-1},le>N?(H.sortIndex=le,e(m,H),n(h)===null&&H===n(m)&&(R?(g(V),V=-1):R=!0,me(b,le-N))):(H.sortIndex=re,e(h,H),T||S||(T=!0,se(O))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ue=x;return function(){var le=x;x=ue;try{return H.apply(this,arguments)}finally{x=le}}}})(hc)),hc}var wp;function $_(){return wp||(wp=1,fc.exports=K_()),fc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ap;function Z_(){if(Ap)return Un;Ap=1;var s=Nd(),e=$_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function u(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(a[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},v={};function x(t){return h.call(v,t)?!0:h.call(_,t)?!1:m.test(t)?v[t]=!0:(_[t]=!0,!1)}function S(t,i,o,l){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function T(t,i,o,l){if(i===null||typeof i>"u"||S(t,i,o,l))return!0;if(l)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(t,i,o,l,c,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=c,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new R(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new R(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new R(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new R(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new R(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new R(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new R(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new R(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new R(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function F(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,F);y[i]=new R(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,F);y[i]=new R(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,F);y[i]=new R(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new R(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,o,l){var c=y.hasOwnProperty(i)?y[i]:null;(c!==null?c.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,o,c,l)&&(o=null),l||c===null?x(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):c.mustUseProperty?t[c.propertyName]=o===null?c.type===3?!1:"":o:(i=c.attributeName,l=c.attributeNamespace,o===null?t.removeAttribute(i):(c=c.type,o=c===3||c===4&&o===!0?"":""+o,l?t.setAttributeNS(l,i,o):t.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,N;function re(t){if(N===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ue=!1;function Q(t,i){if(!t||Ue)return"";Ue=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(J){var l=J}Reflect.construct(t,[],i)}else{try{i.call()}catch(J){l=J}t.call(i.prototype)}else{try{throw Error()}catch(J){l=J}t()}}catch(J){if(J&&l&&typeof J.stack=="string"){for(var c=J.stack.split(`
`),p=l.stack.split(`
`),M=c.length-1,D=p.length-1;1<=M&&0<=D&&c[M]!==p[D];)D--;for(;1<=M&&0<=D;M--,D--)if(c[M]!==p[D]){if(M!==1||D!==1)do if(M--,D--,0>D||c[M]!==p[D]){var k=`
`+c[M].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=M&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?re(t):""}function ce(t){switch(t.tag){case 5:return re(t.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case I:return"Fragment";case U:return"Portal";case C:return"Profiler";case V:return"StrictMode";case $:return"Suspense";case oe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case w:return(t._context.displayName||"Context")+".Provider";case ie:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case se:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===V?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function we(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return c.call(this)},set:function(M){l=""+M,p.call(this,M)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(M){l=""+M},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function bt(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),l="";return t&&(l=Ne(t)?t.checked?"true":"false":t.value),t=l,t!==o?(i.setValue(t),!0):!1}function It(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function B(t,i){var o=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function yn(t,i){var o=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;o=we(i.value!=null?i.value:o),t._wrapperState={initialChecked:l,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ft(t,i);var o=we(i.value),l=i.type;if(o!=null)l==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ct(t,i.type,o):i.hasOwnProperty("defaultValue")&&Ct(t,i.type,we(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function qe(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function Ct(t,i,o){(i!=="number"||It(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var Xe=Array.isArray;function P(t,i,o,l){if(t=t.options,i){i={};for(var c=0;c<o.length;c++)i["$"+o[c]]=!0;for(o=0;o<t.length;o++)c=i.hasOwnProperty("$"+t[o].value),t[o].selected!==c&&(t[o].selected=c),c&&l&&(t[o].defaultSelected=!0)}else{for(o=""+we(o),i=null,c=0;c<t.length;c++){if(t[c].value===o){t[c].selected=!0,l&&(t[c].defaultSelected=!0);return}i!==null||t[c].disabled||(i=t[c])}i!==null&&(i.selected=!0)}}function E(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Z(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(Xe(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:we(o)}}function pe(t,i){var o=we(i.value),l=we(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),l!=null&&(t.defaultValue=""+l)}function _e(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ae,Fe=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,l,c){MSApp.execUnsafeLocalFunction(function(){return t(i,o,l,c)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function lt(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){ze.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function Ke(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function Je(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var l=o.indexOf("--")===0,c=Ke(o,i[o],l);o==="float"&&(o="cssFloat"),l?t.setProperty(o,c):t[o]=c}}var Be=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ct(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function it(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rt=null;function X(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,ae=null,fe=null;function De(t){if(t=go(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=fa(i),Re(t.stateNode,t.type,i))}}function Pe(t){ae?fe?fe.push(t):fe=[t]:ae=t}function rt(){if(ae){var t=ae,i=fe;if(fe=ae=null,De(t),i)for(t=0;t<i.length;t++)De(i[t])}}function Nt(t,i){return t(i)}function Qt(){}var vt=!1;function Cn(t,i,o){if(vt)return t(i,o);vt=!0;try{return Nt(t,i,o)}finally{vt=!1,(ae!==null||fe!==null)&&(Qt(),rt())}}function Sn(t,i){var o=t.stateNode;if(o===null)return null;var l=fa(o);if(l===null)return null;o=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var es=!1;if(f)try{var Xi={};Object.defineProperty(Xi,"passive",{get:function(){es=!0}}),window.addEventListener("test",Xi,Xi),window.removeEventListener("test",Xi,Xi)}catch{es=!1}function Ei(t,i,o,l,c,p,M,D,k){var J=Array.prototype.slice.call(arguments,3);try{i.apply(o,J)}catch(ve){this.onError(ve)}}var Ti=!1,Er=null,Tr=!1,ji=null,Xo={onError:function(t){Ti=!0,Er=t}};function ts(t,i,o,l,c,p,M,D,k){Ti=!1,Er=null,Ei.apply(Xo,arguments)}function jo(t,i,o,l,c,p,M,D,k){if(ts.apply(this,arguments),Ti){if(Ti){var J=Er;Ti=!1,Er=null}else throw Error(n(198));Tr||(Tr=!0,ji=J)}}function pi(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function qo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Yo(t){if(pi(t)!==t)throw Error(n(188))}function Ll(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,l=i;;){var c=o.return;if(c===null)break;var p=c.alternate;if(p===null){if(l=c.return,l!==null){o=l;continue}break}if(c.child===p.child){for(p=c.child;p;){if(p===o)return Yo(c),t;if(p===l)return Yo(c),i;p=p.sibling}throw Error(n(188))}if(o.return!==l.return)o=c,l=p;else{for(var M=!1,D=c.child;D;){if(D===o){M=!0,o=c,l=p;break}if(D===l){M=!0,l=c,o=p;break}D=D.sibling}if(!M){for(D=p.child;D;){if(D===o){M=!0,o=p,l=c;break}if(D===l){M=!0,l=p,o=c;break}D=D.sibling}if(!M)throw Error(n(189))}}if(o.alternate!==l)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Ko(t){return t=Ll(t),t!==null?$o(t):null}function $o(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=$o(t);if(i!==null)return i;t=t.sibling}return null}var A=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,G=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,ke=e.unstable_NormalPriority,et=e.unstable_LowPriority,tt=e.unstable_IdlePriority,je=null,st=null;function St(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(je,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Ye,Ot=Math.log,_t=Math.LN2;function Ye(t){return t>>>=0,t===0?32:31-(Ot(t)/_t|0)|0}var Wt=64,mt=4194304;function ln(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ti(t,i){var o=t.pendingLanes;if(o===0)return 0;var l=0,c=t.suspendedLanes,p=t.pingedLanes,M=o&268435455;if(M!==0){var D=M&~c;D!==0?l=ln(D):(p&=M,p!==0&&(l=ln(p)))}else M=o&~c,M!==0?l=ln(M):p!==0&&(l=ln(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&c)===0&&(c=l&-l,p=i&-i,c>=p||c===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)o=31-Mt(i),c=1<<o,l|=t[o],i&=~c;return l}function Mn(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(t,i){for(var o=t.suspendedLanes,l=t.pingedLanes,c=t.expirationTimes,p=t.pendingLanes;0<p;){var M=31-Mt(p),D=1<<M,k=c[M];k===-1?((D&o)===0||(D&l)!==0)&&(c[M]=Mn(D,i)):k<=i&&(t.expiredLanes|=D),p&=~D}}function Pt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function En(){var t=Wt;return Wt<<=1,(Wt&4194240)===0&&(Wt=64),t}function fn(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function qt(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Mt(i),t[i]=o}function hn(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<o;){var c=31-Mt(o),p=1<<c;i[c]=0,l[c]=-1,t[c]=-1,o&=~p}}function Ar(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var l=31-Mt(o),c=1<<l;c&i|t[l]&i&&(t[l]|=i),o&=~c}}var ht=0;function Zd(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Qd,Il,Jd,ef,tf,Ul=!1,Zo=[],qi=null,Yi=null,Ki=null,Js=new Map,eo=new Map,$i=[],fg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function nf(t,i){switch(t){case"focusin":case"focusout":qi=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":Js.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":eo.delete(i.pointerId)}}function to(t,i,o,l,c,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:l,nativeEvent:p,targetContainers:[c]},i!==null&&(i=go(i),i!==null&&Il(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),t)}function hg(t,i,o,l,c){switch(i){case"focusin":return qi=to(qi,t,i,o,l,c),!0;case"dragenter":return Yi=to(Yi,t,i,o,l,c),!0;case"mouseover":return Ki=to(Ki,t,i,o,l,c),!0;case"pointerover":var p=c.pointerId;return Js.set(p,to(Js.get(p)||null,t,i,o,l,c)),!0;case"gotpointercapture":return p=c.pointerId,eo.set(p,to(eo.get(p)||null,t,i,o,l,c)),!0}return!1}function rf(t){var i=Rr(t.target);if(i!==null){var o=pi(i);if(o!==null){if(i=o.tag,i===13){if(i=qo(o),i!==null){t.blockedOn=i,tf(t.priority,function(){Jd(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qo(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Fl(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var l=new o.constructor(o.type,o);Rt=l,o.target.dispatchEvent(l),Rt=null}else return i=go(o),i!==null&&Il(i),t.blockedOn=o,!1;i.shift()}return!0}function sf(t,i,o){Qo(t)&&o.delete(i)}function pg(){Ul=!1,qi!==null&&Qo(qi)&&(qi=null),Yi!==null&&Qo(Yi)&&(Yi=null),Ki!==null&&Qo(Ki)&&(Ki=null),Js.forEach(sf),eo.forEach(sf)}function no(t,i){t.blockedOn===i&&(t.blockedOn=null,Ul||(Ul=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,pg)))}function io(t){function i(c){return no(c,t)}if(0<Zo.length){no(Zo[0],t);for(var o=1;o<Zo.length;o++){var l=Zo[o];l.blockedOn===t&&(l.blockedOn=null)}}for(qi!==null&&no(qi,t),Yi!==null&&no(Yi,t),Ki!==null&&no(Ki,t),Js.forEach(i),eo.forEach(i),o=0;o<$i.length;o++)l=$i[o],l.blockedOn===t&&(l.blockedOn=null);for(;0<$i.length&&(o=$i[0],o.blockedOn===null);)rf(o),o.blockedOn===null&&$i.shift()}var ns=b.ReactCurrentBatchConfig,Jo=!0;function mg(t,i,o,l){var c=ht,p=ns.transition;ns.transition=null;try{ht=1,Nl(t,i,o,l)}finally{ht=c,ns.transition=p}}function gg(t,i,o,l){var c=ht,p=ns.transition;ns.transition=null;try{ht=4,Nl(t,i,o,l)}finally{ht=c,ns.transition=p}}function Nl(t,i,o,l){if(Jo){var c=Fl(t,i,o,l);if(c===null)Jl(t,i,l,ea,o),nf(t,l);else if(hg(c,t,i,o,l))l.stopPropagation();else if(nf(t,l),i&4&&-1<fg.indexOf(t)){for(;c!==null;){var p=go(c);if(p!==null&&Qd(p),p=Fl(t,i,o,l),p===null&&Jl(t,i,l,ea,o),p===c)break;c=p}c!==null&&l.stopPropagation()}else Jl(t,i,l,null,o)}}var ea=null;function Fl(t,i,o,l){if(ea=null,t=X(l),t=Rr(t),t!==null)if(i=pi(t),i===null)t=null;else if(o=i.tag,o===13){if(t=qo(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return ea=t,null}function of(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Ce:return 1;case Ie:return 4;case ke:case et:return 16;case tt:return 536870912;default:return 16}default:return 16}}var Zi=null,kl=null,ta=null;function af(){if(ta)return ta;var t,i=kl,o=i.length,l,c="value"in Zi?Zi.value:Zi.textContent,p=c.length;for(t=0;t<o&&i[t]===c[t];t++);var M=o-t;for(l=1;l<=M&&i[o-l]===c[p-l];l++);return ta=c.slice(t,1<l?1-l:void 0)}function na(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ia(){return!0}function lf(){return!1}function On(t){function i(o,l,c,p,M){this._reactName=o,this._targetInst=c,this.type=l,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(o=t[D],this[D]=o?o(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?ia:lf,this.isPropagationStopped=lf,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ia)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ia)},persist:function(){},isPersistent:ia}),i}var is={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ol=On(is),ro=le({},is,{view:0,detail:0}),_g=On(ro),zl,Bl,so,ra=le({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==so&&(so&&t.type==="mousemove"?(zl=t.screenX-so.screenX,Bl=t.screenY-so.screenY):Bl=zl=0,so=t),zl)},movementY:function(t){return"movementY"in t?t.movementY:Bl}}),uf=On(ra),vg=le({},ra,{dataTransfer:0}),xg=On(vg),yg=le({},ro,{relatedTarget:0}),Hl=On(yg),Sg=le({},is,{animationName:0,elapsedTime:0,pseudoElement:0}),Mg=On(Sg),Eg=le({},is,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Tg=On(Eg),wg=le({},is,{data:0}),cf=On(wg),Ag={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Cg[t])?!!i[t]:!1}function Vl(){return bg}var Pg=le({},ro,{key:function(t){if(t.key){var i=Ag[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=na(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Rg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vl,charCode:function(t){return t.type==="keypress"?na(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?na(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Dg=On(Pg),Lg=le({},ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),df=On(Lg),Ig=le({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vl}),Ug=On(Ig),Ng=le({},is,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fg=On(Ng),kg=le({},ra,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Og=On(kg),zg=[9,13,27,32],Gl=f&&"CompositionEvent"in window,oo=null;f&&"documentMode"in document&&(oo=document.documentMode);var Bg=f&&"TextEvent"in window&&!oo,ff=f&&(!Gl||oo&&8<oo&&11>=oo),hf=" ",pf=!1;function mf(t,i){switch(t){case"keyup":return zg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function Hg(t,i){switch(t){case"compositionend":return gf(i);case"keypress":return i.which!==32?null:(pf=!0,hf);case"textInput":return t=i.data,t===hf&&pf?null:t;default:return null}}function Vg(t,i){if(rs)return t==="compositionend"||!Gl&&mf(t,i)?(t=af(),ta=kl=Zi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return ff&&i.locale!=="ko"?null:i.data;default:return null}}var Gg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Gg[t.type]:i==="textarea"}function vf(t,i,o,l){Pe(l),i=ua(i,"onChange"),0<i.length&&(o=new Ol("onChange","change",null,o,l),t.push({event:o,listeners:i}))}var ao=null,lo=null;function Wg(t){Ff(t,0)}function sa(t){var i=us(t);if(pt(i))return t}function Xg(t,i){if(t==="change")return i}var xf=!1;if(f){var Wl;if(f){var Xl="oninput"in document;if(!Xl){var yf=document.createElement("div");yf.setAttribute("oninput","return;"),Xl=typeof yf.oninput=="function"}Wl=Xl}else Wl=!1;xf=Wl&&(!document.documentMode||9<document.documentMode)}function Sf(){ao&&(ao.detachEvent("onpropertychange",Mf),lo=ao=null)}function Mf(t){if(t.propertyName==="value"&&sa(lo)){var i=[];vf(i,lo,t,X(t)),Cn(Wg,i)}}function jg(t,i,o){t==="focusin"?(Sf(),ao=i,lo=o,ao.attachEvent("onpropertychange",Mf)):t==="focusout"&&Sf()}function qg(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sa(lo)}function Yg(t,i){if(t==="click")return sa(i)}function Kg(t,i){if(t==="input"||t==="change")return sa(i)}function $g(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ni=typeof Object.is=="function"?Object.is:$g;function uo(t,i){if(ni(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),l=Object.keys(i);if(o.length!==l.length)return!1;for(l=0;l<o.length;l++){var c=o[l];if(!h.call(i,c)||!ni(t[c],i[c]))return!1}return!0}function Ef(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Tf(t,i){var o=Ef(t);t=0;for(var l;o;){if(o.nodeType===3){if(l=t+o.textContent.length,t<=i&&l>=i)return{node:o,offset:i-t};t=l}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ef(o)}}function wf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?wf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Af(){for(var t=window,i=It();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=It(t.document)}return i}function jl(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Zg(t){var i=Af(),o=t.focusedElem,l=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&wf(o.ownerDocument.documentElement,o)){if(l!==null&&jl(o)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var c=o.textContent.length,p=Math.min(l.start,c);l=l.end===void 0?p:Math.min(l.end,c),!t.extend&&p>l&&(c=l,l=p,p=c),c=Tf(o,p);var M=Tf(o,l);c&&M&&(t.rangeCount!==1||t.anchorNode!==c.node||t.anchorOffset!==c.offset||t.focusNode!==M.node||t.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(c.node,c.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qg=f&&"documentMode"in document&&11>=document.documentMode,ss=null,ql=null,co=null,Yl=!1;function Rf(t,i,o){var l=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yl||ss==null||ss!==It(l)||(l=ss,"selectionStart"in l&&jl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),co&&uo(co,l)||(co=l,l=ua(ql,"onSelect"),0<l.length&&(i=new Ol("onSelect","select",null,i,o),t.push({event:i,listeners:l}),i.target=ss)))}function oa(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var os={animationend:oa("Animation","AnimationEnd"),animationiteration:oa("Animation","AnimationIteration"),animationstart:oa("Animation","AnimationStart"),transitionend:oa("Transition","TransitionEnd")},Kl={},Cf={};f&&(Cf=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function aa(t){if(Kl[t])return Kl[t];if(!os[t])return t;var i=os[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in Cf)return Kl[t]=i[o];return t}var bf=aa("animationend"),Pf=aa("animationiteration"),Df=aa("animationstart"),Lf=aa("transitionend"),If=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Qi(t,i){If.set(t,i),u(i,[t])}for(var $l=0;$l<Uf.length;$l++){var Zl=Uf[$l],Jg=Zl.toLowerCase(),e_=Zl[0].toUpperCase()+Zl.slice(1);Qi(Jg,"on"+e_)}Qi(bf,"onAnimationEnd"),Qi(Pf,"onAnimationIteration"),Qi(Df,"onAnimationStart"),Qi("dblclick","onDoubleClick"),Qi("focusin","onFocus"),Qi("focusout","onBlur"),Qi(Lf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t_=new Set("cancel close invalid load scroll toggle".split(" ").concat(fo));function Nf(t,i,o){var l=t.type||"unknown-event";t.currentTarget=o,jo(l,i,void 0,t),t.currentTarget=null}function Ff(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var l=t[o],c=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var M=l.length-1;0<=M;M--){var D=l[M],k=D.instance,J=D.currentTarget;if(D=D.listener,k!==p&&c.isPropagationStopped())break e;Nf(c,D,J),p=k}else for(M=0;M<l.length;M++){if(D=l[M],k=D.instance,J=D.currentTarget,D=D.listener,k!==p&&c.isPropagationStopped())break e;Nf(c,D,J),p=k}}}if(Tr)throw t=ji,Tr=!1,ji=null,t}function Ft(t,i){var o=i[su];o===void 0&&(o=i[su]=new Set);var l=t+"__bubble";o.has(l)||(kf(i,t,2,!1),o.add(l))}function Ql(t,i,o){var l=0;i&&(l|=4),kf(o,t,l,i)}var la="_reactListening"+Math.random().toString(36).slice(2);function ho(t){if(!t[la]){t[la]=!0,r.forEach(function(o){o!=="selectionchange"&&(t_.has(o)||Ql(o,!1,t),Ql(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[la]||(i[la]=!0,Ql("selectionchange",!1,i))}}function kf(t,i,o,l){switch(of(i)){case 1:var c=mg;break;case 4:c=gg;break;default:c=Nl}o=c.bind(null,i,o,t),c=void 0,!es||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),l?c!==void 0?t.addEventListener(i,o,{capture:!0,passive:c}):t.addEventListener(i,o,!0):c!==void 0?t.addEventListener(i,o,{passive:c}):t.addEventListener(i,o,!1)}function Jl(t,i,o,l,c){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var M=l.tag;if(M===3||M===4){var D=l.stateNode.containerInfo;if(D===c||D.nodeType===8&&D.parentNode===c)break;if(M===4)for(M=l.return;M!==null;){var k=M.tag;if((k===3||k===4)&&(k=M.stateNode.containerInfo,k===c||k.nodeType===8&&k.parentNode===c))return;M=M.return}for(;D!==null;){if(M=Rr(D),M===null)return;if(k=M.tag,k===5||k===6){l=p=M;continue e}D=D.parentNode}}l=l.return}Cn(function(){var J=p,ve=X(o),ye=[];e:{var ge=If.get(t);if(ge!==void 0){var Le=Ol,He=t;switch(t){case"keypress":if(na(o)===0)break e;case"keydown":case"keyup":Le=Dg;break;case"focusin":He="focus",Le=Hl;break;case"focusout":He="blur",Le=Hl;break;case"beforeblur":case"afterblur":Le=Hl;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Ug;break;case bf:case Pf:case Df:Le=Mg;break;case Lf:Le=Fg;break;case"scroll":Le=_g;break;case"wheel":Le=Og;break;case"copy":case"cut":case"paste":Le=Tg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=df}var Ve=(i&4)!==0,Yt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var W=J,Y;W!==null;){Y=W;var Te=Y.stateNode;if(Y.tag===5&&Te!==null&&(Y=Te,q!==null&&(Te=Sn(W,q),Te!=null&&Ve.push(po(W,Te,Y)))),Yt)break;W=W.return}0<Ve.length&&(ge=new Le(ge,He,null,o,ve),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",Le=t==="mouseout"||t==="pointerout",ge&&o!==Rt&&(He=o.relatedTarget||o.fromElement)&&(Rr(He)||He[wi]))break e;if((Le||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(He=o.relatedTarget||o.toElement,Le=J,He=He?Rr(He):null,He!==null&&(Yt=pi(He),He!==Yt||He.tag!==5&&He.tag!==6)&&(He=null)):(Le=null,He=J),Le!==He)){if(Ve=uf,Te="onMouseLeave",q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=df,Te="onPointerLeave",q="onPointerEnter",W="pointer"),Yt=Le==null?ge:us(Le),Y=He==null?ge:us(He),ge=new Ve(Te,W+"leave",Le,o,ve),ge.target=Yt,ge.relatedTarget=Y,Te=null,Rr(ve)===J&&(Ve=new Ve(q,W+"enter",He,o,ve),Ve.target=Y,Ve.relatedTarget=Yt,Te=Ve),Yt=Te,Le&&He)t:{for(Ve=Le,q=He,W=0,Y=Ve;Y;Y=as(Y))W++;for(Y=0,Te=q;Te;Te=as(Te))Y++;for(;0<W-Y;)Ve=as(Ve),W--;for(;0<Y-W;)q=as(q),Y--;for(;W--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=as(Ve),q=as(q)}Ve=null}else Ve=null;Le!==null&&Of(ye,ge,Le,Ve,!1),He!==null&&Yt!==null&&Of(ye,Yt,He,Ve,!0)}}e:{if(ge=J?us(J):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var We=Xg;else if(_f(ge))if(xf)We=Kg;else{We=qg;var $e=jg}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(We=Yg);if(We&&(We=We(t,J))){vf(ye,We,o,ve);break e}$e&&$e(t,ge,J),t==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&Ct(ge,"number",ge.value)}switch($e=J?us(J):window,t){case"focusin":(_f($e)||$e.contentEditable==="true")&&(ss=$e,ql=J,co=null);break;case"focusout":co=ql=ss=null;break;case"mousedown":Yl=!0;break;case"contextmenu":case"mouseup":case"dragend":Yl=!1,Rf(ye,o,ve);break;case"selectionchange":if(Qg)break;case"keydown":case"keyup":Rf(ye,o,ve)}var Ze;if(Gl)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else rs?mf(t,o)&&(nt="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(nt="onCompositionStart");nt&&(ff&&o.locale!=="ko"&&(rs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&rs&&(Ze=af()):(Zi=ve,kl="value"in Zi?Zi.value:Zi.textContent,rs=!0)),$e=ua(J,nt),0<$e.length&&(nt=new cf(nt,t,null,o,ve),ye.push({event:nt,listeners:$e}),Ze?nt.data=Ze:(Ze=gf(o),Ze!==null&&(nt.data=Ze)))),(Ze=Bg?Hg(t,o):Vg(t,o))&&(J=ua(J,"onBeforeInput"),0<J.length&&(ve=new cf("onBeforeInput","beforeinput",null,o,ve),ye.push({event:ve,listeners:J}),ve.data=Ze))}Ff(ye,i)})}function po(t,i,o){return{instance:t,listener:i,currentTarget:o}}function ua(t,i){for(var o=i+"Capture",l=[];t!==null;){var c=t,p=c.stateNode;c.tag===5&&p!==null&&(c=p,p=Sn(t,o),p!=null&&l.unshift(po(t,p,c)),p=Sn(t,i),p!=null&&l.push(po(t,p,c))),t=t.return}return l}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Of(t,i,o,l,c){for(var p=i._reactName,M=[];o!==null&&o!==l;){var D=o,k=D.alternate,J=D.stateNode;if(k!==null&&k===l)break;D.tag===5&&J!==null&&(D=J,c?(k=Sn(o,p),k!=null&&M.unshift(po(o,k,D))):c||(k=Sn(o,p),k!=null&&M.push(po(o,k,D)))),o=o.return}M.length!==0&&t.push({event:i,listeners:M})}var n_=/\r\n?/g,i_=/\u0000|\uFFFD/g;function zf(t){return(typeof t=="string"?t:""+t).replace(n_,`
`).replace(i_,"")}function ca(t,i,o){if(i=zf(i),zf(t)!==i&&o)throw Error(n(425))}function da(){}var eu=null,tu=null;function nu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,r_=typeof clearTimeout=="function"?clearTimeout:void 0,Bf=typeof Promise=="function"?Promise:void 0,s_=typeof queueMicrotask=="function"?queueMicrotask:typeof Bf<"u"?function(t){return Bf.resolve(null).then(t).catch(o_)}:iu;function o_(t){setTimeout(function(){throw t})}function ru(t,i){var o=i,l=0;do{var c=o.nextSibling;if(t.removeChild(o),c&&c.nodeType===8)if(o=c.data,o==="/$"){if(l===0){t.removeChild(c),io(i);return}l--}else o!=="$"&&o!=="$?"&&o!=="$!"||l++;o=c}while(o);io(i)}function Ji(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function Hf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var ls=Math.random().toString(36).slice(2),mi="__reactFiber$"+ls,mo="__reactProps$"+ls,wi="__reactContainer$"+ls,su="__reactEvents$"+ls,a_="__reactListeners$"+ls,l_="__reactHandles$"+ls;function Rr(t){var i=t[mi];if(i)return i;for(var o=t.parentNode;o;){if(i=o[wi]||o[mi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=Hf(t);t!==null;){if(o=t[mi])return o;t=Hf(t)}return i}t=o,o=t.parentNode}return null}function go(t){return t=t[mi]||t[wi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function us(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function fa(t){return t[mo]||null}var ou=[],cs=-1;function er(t){return{current:t}}function kt(t){0>cs||(t.current=ou[cs],ou[cs]=null,cs--)}function Ut(t,i){cs++,ou[cs]=t.current,t.current=i}var tr={},pn=er(tr),bn=er(!1),Cr=tr;function ds(t,i){var o=t.type.contextTypes;if(!o)return tr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var c={},p;for(p in o)c[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=c),c}function Pn(t){return t=t.childContextTypes,t!=null}function ha(){kt(bn),kt(pn)}function Vf(t,i,o){if(pn.current!==tr)throw Error(n(168));Ut(pn,i),Ut(bn,o)}function Gf(t,i,o){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return o;l=l.getChildContext();for(var c in l)if(!(c in i))throw Error(n(108,xe(t)||"Unknown",c));return le({},o,l)}function pa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||tr,Cr=pn.current,Ut(pn,t),Ut(bn,bn.current),!0}function Wf(t,i,o){var l=t.stateNode;if(!l)throw Error(n(169));o?(t=Gf(t,i,Cr),l.__reactInternalMemoizedMergedChildContext=t,kt(bn),kt(pn),Ut(pn,t)):kt(bn),Ut(bn,o)}var Ai=null,ma=!1,au=!1;function Xf(t){Ai===null?Ai=[t]:Ai.push(t)}function u_(t){ma=!0,Xf(t)}function nr(){if(!au&&Ai!==null){au=!0;var t=0,i=ht;try{var o=Ai;for(ht=1;t<o.length;t++){var l=o[t];do l=l(!0);while(l!==null)}Ai=null,ma=!1}catch(c){throw Ai!==null&&(Ai=Ai.slice(t+1)),A(Ce,nr),c}finally{ht=i,au=!1}}return null}var fs=[],hs=0,ga=null,_a=0,Xn=[],jn=0,br=null,Ri=1,Ci="";function Pr(t,i){fs[hs++]=_a,fs[hs++]=ga,ga=t,_a=i}function jf(t,i,o){Xn[jn++]=Ri,Xn[jn++]=Ci,Xn[jn++]=br,br=t;var l=Ri;t=Ci;var c=32-Mt(l)-1;l&=~(1<<c),o+=1;var p=32-Mt(i)+c;if(30<p){var M=c-c%5;p=(l&(1<<M)-1).toString(32),l>>=M,c-=M,Ri=1<<32-Mt(i)+c|o<<c|l,Ci=p+t}else Ri=1<<p|o<<c|l,Ci=t}function lu(t){t.return!==null&&(Pr(t,1),jf(t,1,0))}function uu(t){for(;t===ga;)ga=fs[--hs],fs[hs]=null,_a=fs[--hs],fs[hs]=null;for(;t===br;)br=Xn[--jn],Xn[jn]=null,Ci=Xn[--jn],Xn[jn]=null,Ri=Xn[--jn],Xn[jn]=null}var zn=null,Bn=null,zt=!1,ii=null;function qf(t,i){var o=$n(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Yf(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,zn=t,Bn=Ji(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,zn=t,Bn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=br!==null?{id:Ri,overflow:Ci}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=$n(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,zn=t,Bn=null,!0):!1;default:return!1}}function cu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function du(t){if(zt){var i=Bn;if(i){var o=i;if(!Yf(t,i)){if(cu(t))throw Error(n(418));i=Ji(o.nextSibling);var l=zn;i&&Yf(t,i)?qf(l,o):(t.flags=t.flags&-4097|2,zt=!1,zn=t)}}else{if(cu(t))throw Error(n(418));t.flags=t.flags&-4097|2,zt=!1,zn=t}}}function Kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zn=t}function va(t){if(t!==zn)return!1;if(!zt)return Kf(t),zt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!nu(t.type,t.memoizedProps)),i&&(i=Bn)){if(cu(t))throw $f(),Error(n(418));for(;i;)qf(t,i),i=Ji(i.nextSibling)}if(Kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){Bn=Ji(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}Bn=null}}else Bn=zn?Ji(t.stateNode.nextSibling):null;return!0}function $f(){for(var t=Bn;t;)t=Ji(t.nextSibling)}function ps(){Bn=zn=null,zt=!1}function fu(t){ii===null?ii=[t]:ii.push(t)}var c_=b.ReactCurrentBatchConfig;function _o(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var l=o.stateNode}if(!l)throw Error(n(147,t));var c=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var D=c.refs;M===null?delete D[p]:D[p]=M},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function xa(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Zf(t){var i=t._init;return i(t._payload)}function Qf(t){function i(q,W){if(t){var Y=q.deletions;Y===null?(q.deletions=[W],q.flags|=16):Y.push(W)}}function o(q,W){if(!t)return null;for(;W!==null;)i(q,W),W=W.sibling;return null}function l(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function c(q,W){return q=cr(q,W),q.index=0,q.sibling=null,q}function p(q,W,Y){return q.index=Y,t?(Y=q.alternate,Y!==null?(Y=Y.index,Y<W?(q.flags|=2,W):Y):(q.flags|=2,W)):(q.flags|=1048576,W)}function M(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,W,Y,Te){return W===null||W.tag!==6?(W=ic(Y,q.mode,Te),W.return=q,W):(W=c(W,Y),W.return=q,W)}function k(q,W,Y,Te){var We=Y.type;return We===I?ve(q,W,Y.props.children,Te,Y.key):W!==null&&(W.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Zf(We)===W.type)?(Te=c(W,Y.props),Te.ref=_o(q,W,Y),Te.return=q,Te):(Te=Ga(Y.type,Y.key,Y.props,null,q.mode,Te),Te.ref=_o(q,W,Y),Te.return=q,Te)}function J(q,W,Y,Te){return W===null||W.tag!==4||W.stateNode.containerInfo!==Y.containerInfo||W.stateNode.implementation!==Y.implementation?(W=rc(Y,q.mode,Te),W.return=q,W):(W=c(W,Y.children||[]),W.return=q,W)}function ve(q,W,Y,Te,We){return W===null||W.tag!==7?(W=Or(Y,q.mode,Te,We),W.return=q,W):(W=c(W,Y),W.return=q,W)}function ye(q,W,Y){if(typeof W=="string"&&W!==""||typeof W=="number")return W=ic(""+W,q.mode,Y),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case O:return Y=Ga(W.type,W.key,W.props,null,q.mode,Y),Y.ref=_o(q,null,W),Y.return=q,Y;case U:return W=rc(W,q.mode,Y),W.return=q,W;case se:var Te=W._init;return ye(q,Te(W._payload),Y)}if(Xe(W)||ue(W))return W=Or(W,q.mode,Y,null),W.return=q,W;xa(q,W)}return null}function ge(q,W,Y,Te){var We=W!==null?W.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return We!==null?null:D(q,W,""+Y,Te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:return Y.key===We?k(q,W,Y,Te):null;case U:return Y.key===We?J(q,W,Y,Te):null;case se:return We=Y._init,ge(q,W,We(Y._payload),Te)}if(Xe(Y)||ue(Y))return We!==null?null:ve(q,W,Y,Te,null);xa(q,Y)}return null}function Le(q,W,Y,Te,We){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(Y)||null,D(W,q,""+Te,We);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case O:return q=q.get(Te.key===null?Y:Te.key)||null,k(W,q,Te,We);case U:return q=q.get(Te.key===null?Y:Te.key)||null,J(W,q,Te,We);case se:var $e=Te._init;return Le(q,W,Y,$e(Te._payload),We)}if(Xe(Te)||ue(Te))return q=q.get(Y)||null,ve(W,q,Te,We,null);xa(W,Te)}return null}function He(q,W,Y,Te){for(var We=null,$e=null,Ze=W,nt=W=0,on=null;Ze!==null&&nt<Y.length;nt++){Ze.index>nt?(on=Ze,Ze=null):on=Ze.sibling;var Et=ge(q,Ze,Y[nt],Te);if(Et===null){Ze===null&&(Ze=on);break}t&&Ze&&Et.alternate===null&&i(q,Ze),W=p(Et,W,nt),$e===null?We=Et:$e.sibling=Et,$e=Et,Ze=on}if(nt===Y.length)return o(q,Ze),zt&&Pr(q,nt),We;if(Ze===null){for(;nt<Y.length;nt++)Ze=ye(q,Y[nt],Te),Ze!==null&&(W=p(Ze,W,nt),$e===null?We=Ze:$e.sibling=Ze,$e=Ze);return zt&&Pr(q,nt),We}for(Ze=l(q,Ze);nt<Y.length;nt++)on=Le(Ze,q,nt,Y[nt],Te),on!==null&&(t&&on.alternate!==null&&Ze.delete(on.key===null?nt:on.key),W=p(on,W,nt),$e===null?We=on:$e.sibling=on,$e=on);return t&&Ze.forEach(function(dr){return i(q,dr)}),zt&&Pr(q,nt),We}function Ve(q,W,Y,Te){var We=ue(Y);if(typeof We!="function")throw Error(n(150));if(Y=We.call(Y),Y==null)throw Error(n(151));for(var $e=We=null,Ze=W,nt=W=0,on=null,Et=Y.next();Ze!==null&&!Et.done;nt++,Et=Y.next()){Ze.index>nt?(on=Ze,Ze=null):on=Ze.sibling;var dr=ge(q,Ze,Et.value,Te);if(dr===null){Ze===null&&(Ze=on);break}t&&Ze&&dr.alternate===null&&i(q,Ze),W=p(dr,W,nt),$e===null?We=dr:$e.sibling=dr,$e=dr,Ze=on}if(Et.done)return o(q,Ze),zt&&Pr(q,nt),We;if(Ze===null){for(;!Et.done;nt++,Et=Y.next())Et=ye(q,Et.value,Te),Et!==null&&(W=p(Et,W,nt),$e===null?We=Et:$e.sibling=Et,$e=Et);return zt&&Pr(q,nt),We}for(Ze=l(q,Ze);!Et.done;nt++,Et=Y.next())Et=Le(Ze,q,nt,Et.value,Te),Et!==null&&(t&&Et.alternate!==null&&Ze.delete(Et.key===null?nt:Et.key),W=p(Et,W,nt),$e===null?We=Et:$e.sibling=Et,$e=Et);return t&&Ze.forEach(function(G_){return i(q,G_)}),zt&&Pr(q,nt),We}function Yt(q,W,Y,Te){if(typeof Y=="object"&&Y!==null&&Y.type===I&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case O:e:{for(var We=Y.key,$e=W;$e!==null;){if($e.key===We){if(We=Y.type,We===I){if($e.tag===7){o(q,$e.sibling),W=c($e,Y.props.children),W.return=q,q=W;break e}}else if($e.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===se&&Zf(We)===$e.type){o(q,$e.sibling),W=c($e,Y.props),W.ref=_o(q,$e,Y),W.return=q,q=W;break e}o(q,$e);break}else i(q,$e);$e=$e.sibling}Y.type===I?(W=Or(Y.props.children,q.mode,Te,Y.key),W.return=q,q=W):(Te=Ga(Y.type,Y.key,Y.props,null,q.mode,Te),Te.ref=_o(q,W,Y),Te.return=q,q=Te)}return M(q);case U:e:{for($e=Y.key;W!==null;){if(W.key===$e)if(W.tag===4&&W.stateNode.containerInfo===Y.containerInfo&&W.stateNode.implementation===Y.implementation){o(q,W.sibling),W=c(W,Y.children||[]),W.return=q,q=W;break e}else{o(q,W);break}else i(q,W);W=W.sibling}W=rc(Y,q.mode,Te),W.return=q,q=W}return M(q);case se:return $e=Y._init,Yt(q,W,$e(Y._payload),Te)}if(Xe(Y))return He(q,W,Y,Te);if(ue(Y))return Ve(q,W,Y,Te);xa(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,W!==null&&W.tag===6?(o(q,W.sibling),W=c(W,Y),W.return=q,q=W):(o(q,W),W=ic(Y,q.mode,Te),W.return=q,q=W),M(q)):o(q,W)}return Yt}var ms=Qf(!0),Jf=Qf(!1),ya=er(null),Sa=null,gs=null,hu=null;function pu(){hu=gs=Sa=null}function mu(t){var i=ya.current;kt(ya),t._currentValue=i}function gu(t,i,o){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===o)break;t=t.return}}function _s(t,i){Sa=t,hu=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(Dn=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(hu!==t)if(t={context:t,memoizedValue:i,next:null},gs===null){if(Sa===null)throw Error(n(308));gs=t,Sa.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return i}var Dr=null;function _u(t){Dr===null?Dr=[t]:Dr.push(t)}function eh(t,i,o,l){var c=i.interleaved;return c===null?(o.next=o,_u(i)):(o.next=c.next,c.next=o),i.interleaved=o,bi(t,l)}function bi(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var ir=!1;function vu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function th(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function rr(t,i,o){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var c=l.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),l.pending=i,bi(t,o)}return c=l.interleaved,c===null?(i.next=i,_u(l)):(i.next=c.next,c.next=i),l.interleaved=i,bi(t,o)}function Ma(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ar(t,o)}}function nh(t,i){var o=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,o===l)){var c=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var M={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?c=p=M:p=p.next=M,o=o.next}while(o!==null);p===null?c=p=i:p=p.next=i}else c=p=i;o={baseState:l.baseState,firstBaseUpdate:c,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function Ea(t,i,o,l){var c=t.updateQueue;ir=!1;var p=c.firstBaseUpdate,M=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var k=D,J=k.next;k.next=null,M===null?p=J:M.next=J,M=k;var ve=t.alternate;ve!==null&&(ve=ve.updateQueue,D=ve.lastBaseUpdate,D!==M&&(D===null?ve.firstBaseUpdate=J:D.next=J,ve.lastBaseUpdate=k))}if(p!==null){var ye=c.baseState;M=0,ve=J=k=null,D=p;do{var ge=D.lane,Le=D.eventTime;if((l&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Le,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var He=t,Ve=D;switch(ge=i,Le=o,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){ye=He.call(Le,ye,ge);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Le,ye,ge):He,ge==null)break e;ye=le({},ye,ge);break e;case 2:ir=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=c.effects,ge===null?c.effects=[D]:ge.push(D))}else Le={eventTime:Le,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ve===null?(J=ve=Le,k=ye):ve=ve.next=Le,M|=ge;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,c.lastBaseUpdate=ge,c.shared.pending=null}}while(!0);if(ve===null&&(k=ye),c.baseState=k,c.firstBaseUpdate=J,c.lastBaseUpdate=ve,i=c.shared.interleaved,i!==null){c=i;do M|=c.lane,c=c.next;while(c!==i)}else p===null&&(c.shared.lanes=0);Ur|=M,t.lanes=M,t.memoizedState=ye}}function ih(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],c=l.callback;if(c!==null){if(l.callback=null,l=o,typeof c!="function")throw Error(n(191,c));c.call(l)}}}var vo={},gi=er(vo),xo=er(vo),yo=er(vo);function Lr(t){if(t===vo)throw Error(n(174));return t}function xu(t,i){switch(Ut(yo,i),Ut(xo,t),Ut(gi,vo),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}kt(gi),Ut(gi,i)}function vs(){kt(gi),kt(xo),kt(yo)}function rh(t){Lr(yo.current);var i=Lr(gi.current),o=Ge(i,t.type);i!==o&&(Ut(xo,t),Ut(gi,o))}function yu(t){xo.current===t&&(kt(gi),kt(xo))}var Bt=er(0);function Ta(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Su=[];function Mu(){for(var t=0;t<Su.length;t++)Su[t]._workInProgressVersionPrimary=null;Su.length=0}var wa=b.ReactCurrentDispatcher,Eu=b.ReactCurrentBatchConfig,Ir=0,Ht=null,Jt=null,rn=null,Aa=!1,So=!1,Mo=0,d_=0;function mn(){throw Error(n(321))}function Tu(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!ni(t[o],i[o]))return!1;return!0}function wu(t,i,o,l,c,p){if(Ir=p,Ht=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,wa.current=t===null||t.memoizedState===null?m_:g_,t=o(l,c),So){p=0;do{if(So=!1,Mo=0,25<=p)throw Error(n(301));p+=1,rn=Jt=null,i.updateQueue=null,wa.current=__,t=o(l,c)}while(So)}if(wa.current=ba,i=Jt!==null&&Jt.next!==null,Ir=0,rn=Jt=Ht=null,Aa=!1,i)throw Error(n(300));return t}function Au(){var t=Mo!==0;return Mo=0,t}function _i(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Ht.memoizedState=rn=t:rn=rn.next=t,rn}function Yn(){if(Jt===null){var t=Ht.alternate;t=t!==null?t.memoizedState:null}else t=Jt.next;var i=rn===null?Ht.memoizedState:rn.next;if(i!==null)rn=i,Jt=t;else{if(t===null)throw Error(n(310));Jt=t,t={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},rn===null?Ht.memoizedState=rn=t:rn=rn.next=t}return rn}function Eo(t,i){return typeof i=="function"?i(t):i}function Ru(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=Jt,c=l.baseQueue,p=o.pending;if(p!==null){if(c!==null){var M=c.next;c.next=p.next,p.next=M}l.baseQueue=c=p,o.pending=null}if(c!==null){p=c.next,l=l.baseState;var D=M=null,k=null,J=p;do{var ve=J.lane;if((Ir&ve)===ve)k!==null&&(k=k.next={lane:0,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),l=J.hasEagerState?J.eagerState:t(l,J.action);else{var ye={lane:ve,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null};k===null?(D=k=ye,M=l):k=k.next=ye,Ht.lanes|=ve,Ur|=ve}J=J.next}while(J!==null&&J!==p);k===null?M=l:k.next=D,ni(l,i.memoizedState)||(Dn=!0),i.memoizedState=l,i.baseState=M,i.baseQueue=k,o.lastRenderedState=l}if(t=o.interleaved,t!==null){c=t;do p=c.lane,Ht.lanes|=p,Ur|=p,c=c.next;while(c!==t)}else c===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cu(t){var i=Yn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var l=o.dispatch,c=o.pending,p=i.memoizedState;if(c!==null){o.pending=null;var M=c=c.next;do p=t(p,M.action),M=M.next;while(M!==c);ni(p,i.memoizedState)||(Dn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,l]}function sh(){}function oh(t,i){var o=Ht,l=Yn(),c=i(),p=!ni(l.memoizedState,c);if(p&&(l.memoizedState=c,Dn=!0),l=l.queue,bu(uh.bind(null,o,l,t),[t]),l.getSnapshot!==i||p||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,To(9,lh.bind(null,o,l,c,i),void 0,null),sn===null)throw Error(n(349));(Ir&30)!==0||ah(o,i,c)}return c}function ah(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function lh(t,i,o,l){i.value=o,i.getSnapshot=l,ch(i)&&dh(t)}function uh(t,i,o){return o(function(){ch(i)&&dh(t)})}function ch(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!ni(t,o)}catch{return!0}}function dh(t){var i=bi(t,1);i!==null&&ai(i,t,1,-1)}function fh(t){var i=_i();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Eo,lastRenderedState:t},i.queue=t,t=t.dispatch=p_.bind(null,Ht,t),[i.memoizedState,t]}function To(t,i,o,l){return t={tag:t,create:i,destroy:o,deps:l,next:null},i=Ht.updateQueue,i===null?(i={lastEffect:null,stores:null},Ht.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(l=o.next,o.next=t,t.next=l,i.lastEffect=t)),t}function hh(){return Yn().memoizedState}function Ra(t,i,o,l){var c=_i();Ht.flags|=t,c.memoizedState=To(1|i,o,void 0,l===void 0?null:l)}function Ca(t,i,o,l){var c=Yn();l=l===void 0?null:l;var p=void 0;if(Jt!==null){var M=Jt.memoizedState;if(p=M.destroy,l!==null&&Tu(l,M.deps)){c.memoizedState=To(i,o,p,l);return}}Ht.flags|=t,c.memoizedState=To(1|i,o,p,l)}function ph(t,i){return Ra(8390656,8,t,i)}function bu(t,i){return Ca(2048,8,t,i)}function mh(t,i){return Ca(4,2,t,i)}function gh(t,i){return Ca(4,4,t,i)}function _h(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function vh(t,i,o){return o=o!=null?o.concat([t]):null,Ca(4,4,_h.bind(null,i,t),o)}function Pu(){}function xh(t,i){var o=Yn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(o.memoizedState=[t,i],t)}function yh(t,i){var o=Yn();i=i===void 0?null:i;var l=o.memoizedState;return l!==null&&i!==null&&Tu(i,l[1])?l[0]:(t=t(),o.memoizedState=[t,i],t)}function Sh(t,i,o){return(Ir&21)===0?(t.baseState&&(t.baseState=!1,Dn=!0),t.memoizedState=o):(ni(o,i)||(o=En(),Ht.lanes|=o,Ur|=o,t.baseState=!0),i)}function f_(t,i){var o=ht;ht=o!==0&&4>o?o:4,t(!0);var l=Eu.transition;Eu.transition={};try{t(!1),i()}finally{ht=o,Eu.transition=l}}function Mh(){return Yn().memoizedState}function h_(t,i,o){var l=lr(t);if(o={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null},Eh(t))Th(i,o);else if(o=eh(t,i,o,l),o!==null){var c=wn();ai(o,t,l,c),wh(o,i,l)}}function p_(t,i,o){var l=lr(t),c={lane:l,action:o,hasEagerState:!1,eagerState:null,next:null};if(Eh(t))Th(i,c);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,D=p(M,o);if(c.hasEagerState=!0,c.eagerState=D,ni(D,M)){var k=i.interleaved;k===null?(c.next=c,_u(i)):(c.next=k.next,k.next=c),i.interleaved=c;return}}catch{}finally{}o=eh(t,i,c,l),o!==null&&(c=wn(),ai(o,t,l,c),wh(o,i,l))}}function Eh(t){var i=t.alternate;return t===Ht||i!==null&&i===Ht}function Th(t,i){So=Aa=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function wh(t,i,o){if((o&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,o|=l,i.lanes=o,Ar(t,o)}}var ba={readContext:qn,useCallback:mn,useContext:mn,useEffect:mn,useImperativeHandle:mn,useInsertionEffect:mn,useLayoutEffect:mn,useMemo:mn,useReducer:mn,useRef:mn,useState:mn,useDebugValue:mn,useDeferredValue:mn,useTransition:mn,useMutableSource:mn,useSyncExternalStore:mn,useId:mn,unstable_isNewReconciler:!1},m_={readContext:qn,useCallback:function(t,i){return _i().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:ph,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Ra(4194308,4,_h.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Ra(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ra(4,2,t,i)},useMemo:function(t,i){var o=_i();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var l=_i();return i=o!==void 0?o(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=h_.bind(null,Ht,t),[l.memoizedState,t]},useRef:function(t){var i=_i();return t={current:t},i.memoizedState=t},useState:fh,useDebugValue:Pu,useDeferredValue:function(t){return _i().memoizedState=t},useTransition:function(){var t=fh(!1),i=t[0];return t=f_.bind(null,t[1]),_i().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var l=Ht,c=_i();if(zt){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),sn===null)throw Error(n(349));(Ir&30)!==0||ah(l,i,o)}c.memoizedState=o;var p={value:o,getSnapshot:i};return c.queue=p,ph(uh.bind(null,l,p,t),[t]),l.flags|=2048,To(9,lh.bind(null,l,p,o,i),void 0,null),o},useId:function(){var t=_i(),i=sn.identifierPrefix;if(zt){var o=Ci,l=Ri;o=(l&~(1<<32-Mt(l)-1)).toString(32)+o,i=":"+i+"R"+o,o=Mo++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=d_++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},g_={readContext:qn,useCallback:xh,useContext:qn,useEffect:bu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Ru,useRef:hh,useState:function(){return Ru(Eo)},useDebugValue:Pu,useDeferredValue:function(t){var i=Yn();return Sh(i,Jt.memoizedState,t)},useTransition:function(){var t=Ru(Eo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1},__={readContext:qn,useCallback:xh,useContext:qn,useEffect:bu,useImperativeHandle:vh,useInsertionEffect:mh,useLayoutEffect:gh,useMemo:yh,useReducer:Cu,useRef:hh,useState:function(){return Cu(Eo)},useDebugValue:Pu,useDeferredValue:function(t){var i=Yn();return Jt===null?i.memoizedState=t:Sh(i,Jt.memoizedState,t)},useTransition:function(){var t=Cu(Eo)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:sh,useSyncExternalStore:oh,useId:Mh,unstable_isNewReconciler:!1};function ri(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function Du(t,i,o,l){i=t.memoizedState,o=o(l,i),o=o==null?i:le({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Pa={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var l=wn(),c=lr(t),p=Pi(l,c);p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,c),i!==null&&(ai(i,t,c,l),Ma(i,t,c))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var l=wn(),c=lr(t),p=Pi(l,c);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=rr(t,p,c),i!==null&&(ai(i,t,c,l),Ma(i,t,c))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=wn(),l=lr(t),c=Pi(o,l);c.tag=2,i!=null&&(c.callback=i),i=rr(t,c,l),i!==null&&(ai(i,t,l,o),Ma(i,t,l))}};function Ah(t,i,o,l,c,p,M){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,M):i.prototype&&i.prototype.isPureReactComponent?!uo(o,l)||!uo(c,p):!0}function Rh(t,i,o){var l=!1,c=tr,p=i.contextType;return typeof p=="object"&&p!==null?p=qn(p):(c=Pn(i)?Cr:pn.current,l=i.contextTypes,p=(l=l!=null)?ds(t,c):tr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Pa,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=c,t.__reactInternalMemoizedMaskedChildContext=p),i}function Ch(t,i,o,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,l),i.state!==t&&Pa.enqueueReplaceState(i,i.state,null)}function Lu(t,i,o,l){var c=t.stateNode;c.props=o,c.state=t.memoizedState,c.refs={},vu(t);var p=i.contextType;typeof p=="object"&&p!==null?c.context=qn(p):(p=Pn(i)?Cr:pn.current,c.context=ds(t,p)),c.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Du(t,i,p,o),c.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(i=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),i!==c.state&&Pa.enqueueReplaceState(c,c.state,null),Ea(t,o,c,l),c.state=t.memoizedState),typeof c.componentDidMount=="function"&&(t.flags|=4194308)}function xs(t,i){try{var o="",l=i;do o+=ce(l),l=l.return;while(l);var c=o}catch(p){c=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:c,digest:null}}function Iu(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function Uu(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var v_=typeof WeakMap=="function"?WeakMap:Map;function bh(t,i,o){o=Pi(-1,o),o.tag=3,o.payload={element:null};var l=i.value;return o.callback=function(){ka||(ka=!0,Ku=l),Uu(t,i)},o}function Ph(t,i,o){o=Pi(-1,o),o.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var c=i.value;o.payload=function(){return l(c)},o.callback=function(){Uu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Uu(t,i),typeof l!="function"&&(or===null?or=new Set([this]):or.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),o}function Dh(t,i,o){var l=t.pingCache;if(l===null){l=t.pingCache=new v_;var c=new Set;l.set(i,c)}else c=l.get(i),c===void 0&&(c=new Set,l.set(i,c));c.has(o)||(c.add(o),t=L_.bind(null,t,i,o),i.then(t,t))}function Lh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Ih(t,i,o,l,c){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Pi(-1,1),i.tag=2,rr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=c,t)}var x_=b.ReactCurrentOwner,Dn=!1;function Tn(t,i,o,l){i.child=t===null?Jf(i,null,o,l):ms(i,t.child,o,l)}function Uh(t,i,o,l,c){o=o.render;var p=i.ref;return _s(i,c),l=wu(t,i,o,l,p,c),o=Au(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Di(t,i,c)):(zt&&o&&lu(i),i.flags|=1,Tn(t,i,l,c),i.child)}function Nh(t,i,o,l,c){if(t===null){var p=o.type;return typeof p=="function"&&!nc(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Fh(t,i,p,l,c)):(t=Ga(o.type,null,l,i,i.mode,c),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&c)===0){var M=p.memoizedProps;if(o=o.compare,o=o!==null?o:uo,o(M,l)&&t.ref===i.ref)return Di(t,i,c)}return i.flags|=1,t=cr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Fh(t,i,o,l,c){if(t!==null){var p=t.memoizedProps;if(uo(p,l)&&t.ref===i.ref)if(Dn=!1,i.pendingProps=l=p,(t.lanes&c)!==0)(t.flags&131072)!==0&&(Dn=!0);else return i.lanes=t.lanes,Di(t,i,c)}return Nu(t,i,o,l,c)}function kh(t,i,o){var l=i.pendingProps,c=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ss,Hn),Hn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Ss,Hn),Hn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:o,Ut(Ss,Hn),Hn|=l}else p!==null?(l=p.baseLanes|o,i.memoizedState=null):l=o,Ut(Ss,Hn),Hn|=l;return Tn(t,i,c,o),i.child}function Oh(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Nu(t,i,o,l,c){var p=Pn(o)?Cr:pn.current;return p=ds(i,p),_s(i,c),o=wu(t,i,o,l,p,c),l=Au(),t!==null&&!Dn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~c,Di(t,i,c)):(zt&&l&&lu(i),i.flags|=1,Tn(t,i,o,c),i.child)}function zh(t,i,o,l,c){if(Pn(o)){var p=!0;pa(i)}else p=!1;if(_s(i,c),i.stateNode===null)La(t,i),Rh(i,o,l),Lu(i,o,l,c),l=!0;else if(t===null){var M=i.stateNode,D=i.memoizedProps;M.props=D;var k=M.context,J=o.contextType;typeof J=="object"&&J!==null?J=qn(J):(J=Pn(o)?Cr:pn.current,J=ds(i,J));var ve=o.getDerivedStateFromProps,ye=typeof ve=="function"||typeof M.getSnapshotBeforeUpdate=="function";ye||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==l||k!==J)&&Ch(i,M,l,J),ir=!1;var ge=i.memoizedState;M.state=ge,Ea(i,l,M,c),k=i.memoizedState,D!==l||ge!==k||bn.current||ir?(typeof ve=="function"&&(Du(i,o,ve,l),k=i.memoizedState),(D=ir||Ah(i,o,D,l,ge,k,J))?(ye||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=k),M.props=l,M.state=k,M.context=J,l=D):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{M=i.stateNode,th(t,i),D=i.memoizedProps,J=i.type===i.elementType?D:ri(i.type,D),M.props=J,ye=i.pendingProps,ge=M.context,k=o.contextType,typeof k=="object"&&k!==null?k=qn(k):(k=Pn(o)?Cr:pn.current,k=ds(i,k));var Le=o.getDerivedStateFromProps;(ve=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(D!==ye||ge!==k)&&Ch(i,M,l,k),ir=!1,ge=i.memoizedState,M.state=ge,Ea(i,l,M,c);var He=i.memoizedState;D!==ye||ge!==He||bn.current||ir?(typeof Le=="function"&&(Du(i,o,Le,l),He=i.memoizedState),(J=ir||Ah(i,o,J,l,ge,He,k)||!1)?(ve||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(l,He,k),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(l,He,k)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),M.props=l,M.state=He,M.context=k,l=J):(typeof M.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return Fu(t,i,o,l,p,c)}function Fu(t,i,o,l,c,p){Oh(t,i);var M=(i.flags&128)!==0;if(!l&&!M)return c&&Wf(i,o,!1),Di(t,i,p);l=i.stateNode,x_.current=i;var D=M&&typeof o.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&M?(i.child=ms(i,t.child,null,p),i.child=ms(i,null,D,p)):Tn(t,i,D,p),i.memoizedState=l.state,c&&Wf(i,o,!0),i.child}function Bh(t){var i=t.stateNode;i.pendingContext?Vf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Vf(t,i.context,!1),xu(t,i.containerInfo)}function Hh(t,i,o,l,c){return ps(),fu(c),i.flags|=256,Tn(t,i,o,l),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Ou(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vh(t,i,o){var l=i.pendingProps,c=Bt.current,p=!1,M=(i.flags&128)!==0,D;if((D=M)||(D=t!==null&&t.memoizedState===null?!1:(c&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(c|=1),Ut(Bt,c&1),t===null)return du(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=l.children,t=l.fallback,p?(l=i.mode,p=i.child,M={mode:"hidden",children:M},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=Wa(M,l,0,null),t=Or(t,l,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Ou(o),i.memoizedState=ku,t):zu(i,M));if(c=t.memoizedState,c!==null&&(D=c.dehydrated,D!==null))return y_(t,i,M,l,D,c,o);if(p){p=l.fallback,M=i.mode,c=t.child,D=c.sibling;var k={mode:"hidden",children:l.children};return(M&1)===0&&i.child!==c?(l=i.child,l.childLanes=0,l.pendingProps=k,i.deletions=null):(l=cr(c,k),l.subtreeFlags=c.subtreeFlags&14680064),D!==null?p=cr(D,p):(p=Or(p,M,o,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,M=t.child.memoizedState,M=M===null?Ou(o):{baseLanes:M.baseLanes|o,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=t.childLanes&~o,i.memoizedState=ku,l}return p=t.child,t=p.sibling,l=cr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=o),l.return=i,l.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=l,i.memoizedState=null,l}function zu(t,i){return i=Wa({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Da(t,i,o,l){return l!==null&&fu(l),ms(i,t.child,null,o),t=zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function y_(t,i,o,l,c,p,M){if(o)return i.flags&256?(i.flags&=-257,l=Iu(Error(n(422))),Da(t,i,M,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,c=i.mode,l=Wa({mode:"visible",children:l.children},c,0,null),p=Or(p,c,M,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&ms(i,t.child,null,M),i.child.memoizedState=Ou(M),i.memoizedState=ku,p);if((i.mode&1)===0)return Da(t,i,M,null);if(c.data==="$!"){if(l=c.nextSibling&&c.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Iu(p,l,void 0),Da(t,i,M,l)}if(D=(M&t.childLanes)!==0,Dn||D){if(l=sn,l!==null){switch(M&-M){case 4:c=2;break;case 16:c=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:c=32;break;case 536870912:c=268435456;break;default:c=0}c=(c&(l.suspendedLanes|M))!==0?0:c,c!==0&&c!==p.retryLane&&(p.retryLane=c,bi(t,c),ai(l,t,c,-1))}return tc(),l=Iu(Error(n(421))),Da(t,i,M,l)}return c.data==="$?"?(i.flags|=128,i.child=t.child,i=I_.bind(null,t),c._reactRetry=i,null):(t=p.treeContext,Bn=Ji(c.nextSibling),zn=i,zt=!0,ii=null,t!==null&&(Xn[jn++]=Ri,Xn[jn++]=Ci,Xn[jn++]=br,Ri=t.id,Ci=t.overflow,br=i),i=zu(i,l.children),i.flags|=4096,i)}function Gh(t,i,o){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),gu(t.return,i,o)}function Bu(t,i,o,l,c){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:o,tailMode:c}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=o,p.tailMode=c)}function Wh(t,i,o){var l=i.pendingProps,c=l.revealOrder,p=l.tail;if(Tn(t,i,l.children,o),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Gh(t,o,i);else if(t.tag===19)Gh(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(c){case"forwards":for(o=i.child,c=null;o!==null;)t=o.alternate,t!==null&&Ta(t)===null&&(c=o),o=o.sibling;o=c,o===null?(c=i.child,i.child=null):(c=o.sibling,o.sibling=null),Bu(i,!1,c,o,p);break;case"backwards":for(o=null,c=i.child,i.child=null;c!==null;){if(t=c.alternate,t!==null&&Ta(t)===null){i.child=c;break}t=c.sibling,c.sibling=o,o=c,c=t}Bu(i,!0,o,null,p);break;case"together":Bu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function La(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Di(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Ur|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=cr(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=cr(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function S_(t,i,o){switch(i.tag){case 3:Bh(i),ps();break;case 5:rh(i);break;case 1:Pn(i.type)&&pa(i);break;case 4:xu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,c=i.memoizedProps.value;Ut(ya,l._currentValue),l._currentValue=c;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Bt,Bt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Vh(t,i,o):(Ut(Bt,Bt.current&1),t=Di(t,i,o),t!==null?t.sibling:null);Ut(Bt,Bt.current&1);break;case 19:if(l=(o&i.childLanes)!==0,(t.flags&128)!==0){if(l)return Wh(t,i,o);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Ut(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,kh(t,i,o)}return Di(t,i,o)}var Xh,Hu,jh,qh;Xh=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Hu=function(){},jh=function(t,i,o,l){var c=t.memoizedProps;if(c!==l){t=i.stateNode,Lr(gi.current);var p=null;switch(o){case"input":c=B(t,c),l=B(t,l),p=[];break;case"select":c=le({},c,{value:void 0}),l=le({},l,{value:void 0}),p=[];break;case"textarea":c=E(t,c),l=E(t,l),p=[];break;default:typeof c.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=da)}ct(o,l);var M;o=null;for(J in c)if(!l.hasOwnProperty(J)&&c.hasOwnProperty(J)&&c[J]!=null)if(J==="style"){var D=c[J];for(M in D)D.hasOwnProperty(M)&&(o||(o={}),o[M]="")}else J!=="dangerouslySetInnerHTML"&&J!=="children"&&J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&J!=="autoFocus"&&(a.hasOwnProperty(J)?p||(p=[]):(p=p||[]).push(J,null));for(J in l){var k=l[J];if(D=c!=null?c[J]:void 0,l.hasOwnProperty(J)&&k!==D&&(k!=null||D!=null))if(J==="style")if(D){for(M in D)!D.hasOwnProperty(M)||k&&k.hasOwnProperty(M)||(o||(o={}),o[M]="");for(M in k)k.hasOwnProperty(M)&&D[M]!==k[M]&&(o||(o={}),o[M]=k[M])}else o||(p||(p=[]),p.push(J,o)),o=k;else J==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,D=D?D.__html:void 0,k!=null&&D!==k&&(p=p||[]).push(J,k)):J==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push(J,""+k):J!=="suppressContentEditableWarning"&&J!=="suppressHydrationWarning"&&(a.hasOwnProperty(J)?(k!=null&&J==="onScroll"&&Ft("scroll",t),p||D===k||(p=[])):(p=p||[]).push(J,k))}o&&(p=p||[]).push("style",o);var J=p;(i.updateQueue=J)&&(i.flags|=4)}},qh=function(t,i,o,l){o!==l&&(i.flags|=4)};function wo(t,i){if(!zt)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function gn(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,l=0;if(i)for(var c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags&14680064,l|=c.flags&14680064,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)o|=c.lanes|c.childLanes,l|=c.subtreeFlags,l|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=l,t.childLanes=o,i}function M_(t,i,o){var l=i.pendingProps;switch(uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gn(i),null;case 1:return Pn(i.type)&&ha(),gn(i),null;case 3:return l=i.stateNode,vs(),kt(bn),kt(pn),Mu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(va(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(Qu(ii),ii=null))),Hu(t,i),gn(i),null;case 5:yu(i);var c=Lr(yo.current);if(o=i.type,t!==null&&i.stateNode!=null)jh(t,i,o,l,c),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return gn(i),null}if(t=Lr(gi.current),va(i)){l=i.stateNode,o=i.type;var p=i.memoizedProps;switch(l[mi]=i,l[mo]=p,t=(i.mode&1)!==0,o){case"dialog":Ft("cancel",l),Ft("close",l);break;case"iframe":case"object":case"embed":Ft("load",l);break;case"video":case"audio":for(c=0;c<fo.length;c++)Ft(fo[c],l);break;case"source":Ft("error",l);break;case"img":case"image":case"link":Ft("error",l),Ft("load",l);break;case"details":Ft("toggle",l);break;case"input":yn(l,p),Ft("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},Ft("invalid",l);break;case"textarea":Z(l,p),Ft("invalid",l)}ct(o,p),c=null;for(var M in p)if(p.hasOwnProperty(M)){var D=p[M];M==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&ca(l.textContent,D,t),c=["children",""+D]):a.hasOwnProperty(M)&&D!=null&&M==="onScroll"&&Ft("scroll",l)}switch(o){case"input":bt(l),qe(l,p,!0);break;case"textarea":bt(l),_e(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=da)}l=c,i.updateQueue=l,l!==null&&(i.flags|=4)}else{M=c.nodeType===9?c:c.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=M.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=M.createElement(o,{is:l.is}):(t=M.createElement(o),o==="select"&&(M=t,l.multiple?M.multiple=!0:l.size&&(M.size=l.size))):t=M.createElementNS(t,o),t[mi]=i,t[mo]=l,Xh(t,i,!1,!1),i.stateNode=t;e:{switch(M=it(o,l),o){case"dialog":Ft("cancel",t),Ft("close",t),c=l;break;case"iframe":case"object":case"embed":Ft("load",t),c=l;break;case"video":case"audio":for(c=0;c<fo.length;c++)Ft(fo[c],t);c=l;break;case"source":Ft("error",t),c=l;break;case"img":case"image":case"link":Ft("error",t),Ft("load",t),c=l;break;case"details":Ft("toggle",t),c=l;break;case"input":yn(t,l),c=B(t,l),Ft("invalid",t);break;case"option":c=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},c=le({},l,{value:void 0}),Ft("invalid",t);break;case"textarea":Z(t,l),c=E(t,l),Ft("invalid",t);break;default:c=l}ct(o,c),D=c;for(p in D)if(D.hasOwnProperty(p)){var k=D[p];p==="style"?Je(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Fe(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&lt(t,k):typeof k=="number"&&lt(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ft("scroll",t):k!=null&&L(t,p,k,M))}switch(o){case"input":bt(t),qe(t,l,!1);break;case"textarea":bt(t),_e(t);break;case"option":l.value!=null&&t.setAttribute("value",""+we(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?P(t,!!l.multiple,p,!1):l.defaultValue!=null&&P(t,!!l.multiple,l.defaultValue,!0);break;default:typeof c.onClick=="function"&&(t.onclick=da)}switch(o){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return gn(i),null;case 6:if(t&&i.stateNode!=null)qh(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(o=Lr(yo.current),Lr(gi.current),va(i)){if(l=i.stateNode,o=i.memoizedProps,l[mi]=i,(p=l.nodeValue!==o)&&(t=zn,t!==null))switch(t.tag){case 3:ca(l.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ca(l.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(o.nodeType===9?o:o.ownerDocument).createTextNode(l),l[mi]=i,i.stateNode=l}return gn(i),null;case 13:if(kt(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(zt&&Bn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)$f(),ps(),i.flags|=98560,p=!1;else if(p=va(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[mi]=i}else ps(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;gn(i),p=!1}else ii!==null&&(Qu(ii),ii=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?en===0&&(en=3):tc())),i.updateQueue!==null&&(i.flags|=4),gn(i),null);case 4:return vs(),Hu(t,i),t===null&&ho(i.stateNode.containerInfo),gn(i),null;case 10:return mu(i.type._context),gn(i),null;case 17:return Pn(i.type)&&ha(),gn(i),null;case 19:if(kt(Bt),p=i.memoizedState,p===null)return gn(i),null;if(l=(i.flags&128)!==0,M=p.rendering,M===null)if(l)wo(p,!1);else{if(en!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(M=Ta(t),M!==null){for(i.flags|=128,wo(p,!1),l=M.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=o,o=i.child;o!==null;)p=o,t=l,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,t=M.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return Ut(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&G()>Ms&&(i.flags|=128,l=!0,wo(p,!1),i.lanes=4194304)}else{if(!l)if(t=Ta(M),t!==null){if(i.flags|=128,l=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),wo(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!zt)return gn(i),null}else 2*G()-p.renderingStartTime>Ms&&o!==1073741824&&(i.flags|=128,l=!0,wo(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(o=p.last,o!==null?o.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=G(),i.sibling=null,o=Bt.current,Ut(Bt,l?o&1|2:o&1),i):(gn(i),null);case 22:case 23:return ec(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(gn(i),i.subtreeFlags&6&&(i.flags|=8192)):gn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function E_(t,i){switch(uu(i),i.tag){case 1:return Pn(i.type)&&ha(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return vs(),kt(bn),kt(pn),Mu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return yu(i),null;case 13:if(kt(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));ps()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return kt(Bt),null;case 4:return vs(),null;case 10:return mu(i.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var Ia=!1,_n=!1,T_=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function ys(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(l){Xt(t,i,l)}else o.current=null}function Vu(t,i,o){try{o()}catch(l){Xt(t,i,l)}}var Yh=!1;function w_(t,i){if(eu=Jo,t=Af(),jl(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var l=o.getSelection&&o.getSelection();if(l&&l.rangeCount!==0){o=l.anchorNode;var c=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var M=0,D=-1,k=-1,J=0,ve=0,ye=t,ge=null;t:for(;;){for(var Le;ye!==o||c!==0&&ye.nodeType!==3||(D=M+c),ye!==p||l!==0&&ye.nodeType!==3||(k=M+l),ye.nodeType===3&&(M+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)ge=ye,ye=Le;for(;;){if(ye===t)break t;if(ge===o&&++J===c&&(D=M),ge===p&&++ve===l&&(k=M),(Le=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=Le}o=D===-1||k===-1?null:{start:D,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(tu={focusedElem:t,selectionRange:o},Jo=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Yt=He.memoizedState,q=i.stateNode,W=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ri(i.type,Ve),Yt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Xt(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return He=Yh,Yh=!1,He}function Ao(t,i,o){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var c=l=l.next;do{if((c.tag&t)===t){var p=c.destroy;c.destroy=void 0,p!==void 0&&Vu(i,o,p)}c=c.next}while(c!==l)}}function Ua(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var l=o.create;o.destroy=l()}o=o.next}while(o!==i)}}function Gu(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Kh(t){var i=t.alternate;i!==null&&(t.alternate=null,Kh(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[mi],delete i[mo],delete i[su],delete i[a_],delete i[l_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $h(t){return t.tag===5||t.tag===3||t.tag===4}function Zh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$h(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Wu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=da));else if(l!==4&&(t=t.child,t!==null))for(Wu(t,i,o),t=t.sibling;t!==null;)Wu(t,i,o),t=t.sibling}function Xu(t,i,o){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Xu(t,i,o),t=t.sibling;t!==null;)Xu(t,i,o),t=t.sibling}var un=null,si=!1;function sr(t,i,o){for(o=o.child;o!==null;)Qh(t,i,o),o=o.sibling}function Qh(t,i,o){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(je,o)}catch{}switch(o.tag){case 5:_n||ys(o,i);case 6:var l=un,c=si;un=null,sr(t,i,o),un=l,si=c,un!==null&&(si?(t=un,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(si?(t=un,o=o.stateNode,t.nodeType===8?ru(t.parentNode,o):t.nodeType===1&&ru(t,o),io(t)):ru(un,o.stateNode));break;case 4:l=un,c=si,un=o.stateNode.containerInfo,si=!0,sr(t,i,o),un=l,si=c;break;case 0:case 11:case 14:case 15:if(!_n&&(l=o.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){c=l=l.next;do{var p=c,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&Vu(o,i,M),c=c.next}while(c!==l)}sr(t,i,o);break;case 1:if(!_n&&(ys(o,i),l=o.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=o.memoizedProps,l.state=o.memoizedState,l.componentWillUnmount()}catch(D){Xt(o,i,D)}sr(t,i,o);break;case 21:sr(t,i,o);break;case 22:o.mode&1?(_n=(l=_n)||o.memoizedState!==null,sr(t,i,o),_n=l):sr(t,i,o);break;default:sr(t,i,o)}}function Jh(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new T_),i.forEach(function(l){var c=U_.bind(null,t,l);o.has(l)||(o.add(l),l.then(c,c))})}}function oi(t,i){var o=i.deletions;if(o!==null)for(var l=0;l<o.length;l++){var c=o[l];try{var p=t,M=i,D=M;e:for(;D!==null;){switch(D.tag){case 5:un=D.stateNode,si=!1;break e;case 3:un=D.stateNode.containerInfo,si=!0;break e;case 4:un=D.stateNode.containerInfo,si=!0;break e}D=D.return}if(un===null)throw Error(n(160));Qh(p,M,c),un=null,si=!1;var k=c.alternate;k!==null&&(k.return=null),c.return=null}catch(J){Xt(c,i,J)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ep(i,t),i=i.sibling}function ep(t,i){var o=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(oi(i,t),vi(t),l&4){try{Ao(3,t,t.return),Ua(3,t)}catch(Ve){Xt(t,t.return,Ve)}try{Ao(5,t,t.return)}catch(Ve){Xt(t,t.return,Ve)}}break;case 1:oi(i,t),vi(t),l&512&&o!==null&&ys(o,o.return);break;case 5:if(oi(i,t),vi(t),l&512&&o!==null&&ys(o,o.return),t.flags&32){var c=t.stateNode;try{lt(c,"")}catch(Ve){Xt(t,t.return,Ve)}}if(l&4&&(c=t.stateNode,c!=null)){var p=t.memoizedProps,M=o!==null?o.memoizedProps:p,D=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ft(c,p),it(D,M);var J=it(D,p);for(M=0;M<k.length;M+=2){var ve=k[M],ye=k[M+1];ve==="style"?Je(c,ye):ve==="dangerouslySetInnerHTML"?Fe(c,ye):ve==="children"?lt(c,ye):L(c,ve,ye,J)}switch(D){case"input":ut(c,p);break;case"textarea":pe(c,p);break;case"select":var ge=c._wrapperState.wasMultiple;c._wrapperState.wasMultiple=!!p.multiple;var Le=p.value;Le!=null?P(c,!!p.multiple,Le,!1):ge!==!!p.multiple&&(p.defaultValue!=null?P(c,!!p.multiple,p.defaultValue,!0):P(c,!!p.multiple,p.multiple?[]:"",!1))}c[mo]=p}catch(Ve){Xt(t,t.return,Ve)}}break;case 6:if(oi(i,t),vi(t),l&4){if(t.stateNode===null)throw Error(n(162));c=t.stateNode,p=t.memoizedProps;try{c.nodeValue=p}catch(Ve){Xt(t,t.return,Ve)}}break;case 3:if(oi(i,t),vi(t),l&4&&o!==null&&o.memoizedState.isDehydrated)try{io(i.containerInfo)}catch(Ve){Xt(t,t.return,Ve)}break;case 4:oi(i,t),vi(t);break;case 13:oi(i,t),vi(t),c=t.child,c.flags&8192&&(p=c.memoizedState!==null,c.stateNode.isHidden=p,!p||c.alternate!==null&&c.alternate.memoizedState!==null||(Yu=G())),l&4&&Jh(t);break;case 22:if(ve=o!==null&&o.memoizedState!==null,t.mode&1?(_n=(J=_n)||ve,oi(i,t),_n=J):oi(i,t),vi(t),l&8192){if(J=t.memoizedState!==null,(t.stateNode.isHidden=J)&&!ve&&(t.mode&1)!==0)for(Oe=t,ve=t.child;ve!==null;){for(ye=Oe=ve;Oe!==null;){switch(ge=Oe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ao(4,ge,ge.return);break;case 1:ys(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){l=ge,o=ge.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Xt(l,o,Ve)}}break;case 5:ys(ge,ge.return);break;case 22:if(ge.memoizedState!==null){ip(ye);continue}}Le!==null?(Le.return=ge,Oe=Le):ip(ye)}ve=ve.sibling}e:for(ve=null,ye=t;;){if(ye.tag===5){if(ve===null){ve=ye;try{c=ye.stateNode,J?(p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=ye.stateNode,k=ye.memoizedProps.style,M=k!=null&&k.hasOwnProperty("display")?k.display:null,D.style.display=Ke("display",M))}catch(Ve){Xt(t,t.return,Ve)}}}else if(ye.tag===6){if(ve===null)try{ye.stateNode.nodeValue=J?"":ye.memoizedProps}catch(Ve){Xt(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;ve===ye&&(ve=null),ye=ye.return}ve===ye&&(ve=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:oi(i,t),vi(t),l&4&&Jh(t);break;case 21:break;default:oi(i,t),vi(t)}}function vi(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if($h(o)){var l=o;break e}o=o.return}throw Error(n(160))}switch(l.tag){case 5:var c=l.stateNode;l.flags&32&&(lt(c,""),l.flags&=-33);var p=Zh(t);Xu(t,p,c);break;case 3:case 4:var M=l.stateNode.containerInfo,D=Zh(t);Wu(t,D,M);break;default:throw Error(n(161))}}catch(k){Xt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function A_(t,i,o){Oe=t,tp(t)}function tp(t,i,o){for(var l=(t.mode&1)!==0;Oe!==null;){var c=Oe,p=c.child;if(c.tag===22&&l){var M=c.memoizedState!==null||Ia;if(!M){var D=c.alternate,k=D!==null&&D.memoizedState!==null||_n;D=Ia;var J=_n;if(Ia=M,(_n=k)&&!J)for(Oe=c;Oe!==null;)M=Oe,k=M.child,M.tag===22&&M.memoizedState!==null?rp(c):k!==null?(k.return=M,Oe=k):rp(c);for(;p!==null;)Oe=p,tp(p),p=p.sibling;Oe=c,Ia=D,_n=J}np(t)}else(c.subtreeFlags&8772)!==0&&p!==null?(p.return=c,Oe=p):np(t)}}function np(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Ua(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!_n)if(o===null)l.componentDidMount();else{var c=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);l.componentDidUpdate(c,o.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&ih(i,p,l);break;case 3:var M=i.updateQueue;if(M!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}ih(i,M,o)}break;case 5:var D=i.stateNode;if(o===null&&i.flags&4){o=D;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var J=i.alternate;if(J!==null){var ve=J.memoizedState;if(ve!==null){var ye=ve.dehydrated;ye!==null&&io(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}_n||i.flags&512&&Gu(i)}catch(ge){Xt(i,i.return,ge)}}if(i===t){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function ip(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function rp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ua(4,i)}catch(k){Xt(i,o,k)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var c=i.return;try{l.componentDidMount()}catch(k){Xt(i,c,k)}}var p=i.return;try{Gu(i)}catch(k){Xt(i,p,k)}break;case 5:var M=i.return;try{Gu(i)}catch(k){Xt(i,M,k)}}}catch(k){Xt(i,i.return,k)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var R_=Math.ceil,Na=b.ReactCurrentDispatcher,ju=b.ReactCurrentOwner,Kn=b.ReactCurrentBatchConfig,xt=0,sn=null,$t=null,cn=0,Hn=0,Ss=er(0),en=0,Ro=null,Ur=0,Fa=0,qu=0,Co=null,Ln=null,Yu=0,Ms=1/0,Li=null,ka=!1,Ku=null,or=null,Oa=!1,ar=null,za=0,bo=0,$u=null,Ba=-1,Ha=0;function wn(){return(xt&6)!==0?G():Ba!==-1?Ba:Ba=G()}function lr(t){return(t.mode&1)===0?1:(xt&2)!==0&&cn!==0?cn&-cn:c_.transition!==null?(Ha===0&&(Ha=En()),Ha):(t=ht,t!==0||(t=window.event,t=t===void 0?16:of(t.type)),t)}function ai(t,i,o,l){if(50<bo)throw bo=0,$u=null,Error(n(185));qt(t,o,l),((xt&2)===0||t!==sn)&&(t===sn&&((xt&2)===0&&(Fa|=o),en===4&&ur(t,cn)),In(t,l),o===1&&xt===0&&(i.mode&1)===0&&(Ms=G()+500,ma&&nr()))}function In(t,i){var o=t.callbackNode;wr(t,i);var l=ti(t,t===sn?cn:0);if(l===0)o!==null&&j(o),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(o!=null&&j(o),i===1)t.tag===0?u_(op.bind(null,t)):Xf(op.bind(null,t)),s_(function(){(xt&6)===0&&nr()}),o=null;else{switch(Zd(l)){case 1:o=Ce;break;case 4:o=Ie;break;case 16:o=ke;break;case 536870912:o=tt;break;default:o=ke}o=pp(o,sp.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function sp(t,i){if(Ba=-1,Ha=0,(xt&6)!==0)throw Error(n(327));var o=t.callbackNode;if(Es()&&t.callbackNode!==o)return null;var l=ti(t,t===sn?cn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Va(t,l);else{i=l;var c=xt;xt|=2;var p=lp();(sn!==t||cn!==i)&&(Li=null,Ms=G()+500,Fr(t,i));do try{P_();break}catch(D){ap(t,D)}while(!0);pu(),Na.current=p,xt=c,$t!==null?i=0:(sn=null,cn=0,i=en)}if(i!==0){if(i===2&&(c=Pt(t),c!==0&&(l=c,i=Zu(t,c))),i===1)throw o=Ro,Fr(t,0),ur(t,l),In(t,G()),o;if(i===6)ur(t,l);else{if(c=t.current.alternate,(l&30)===0&&!C_(c)&&(i=Va(t,l),i===2&&(p=Pt(t),p!==0&&(l=p,i=Zu(t,p))),i===1))throw o=Ro,Fr(t,0),ur(t,l),In(t,G()),o;switch(t.finishedWork=c,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:kr(t,Ln,Li);break;case 3:if(ur(t,l),(l&130023424)===l&&(i=Yu+500-G(),10<i)){if(ti(t,0)!==0)break;if(c=t.suspendedLanes,(c&l)!==l){wn(),t.pingedLanes|=t.suspendedLanes&c;break}t.timeoutHandle=iu(kr.bind(null,t,Ln,Li),i);break}kr(t,Ln,Li);break;case 4:if(ur(t,l),(l&4194240)===l)break;for(i=t.eventTimes,c=-1;0<l;){var M=31-Mt(l);p=1<<M,M=i[M],M>c&&(c=M),l&=~p}if(l=c,l=G()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*R_(l/1960))-l,10<l){t.timeoutHandle=iu(kr.bind(null,t,Ln,Li),l);break}kr(t,Ln,Li);break;case 5:kr(t,Ln,Li);break;default:throw Error(n(329))}}}return In(t,G()),t.callbackNode===o?sp.bind(null,t):null}function Zu(t,i){var o=Co;return t.current.memoizedState.isDehydrated&&(Fr(t,i).flags|=256),t=Va(t,i),t!==2&&(i=Ln,Ln=o,i!==null&&Qu(i)),t}function Qu(t){Ln===null?Ln=t:Ln.push.apply(Ln,t)}function C_(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var l=0;l<o.length;l++){var c=o[l],p=c.getSnapshot;c=c.value;try{if(!ni(p(),c))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ur(t,i){for(i&=~qu,i&=~Fa,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Mt(i),l=1<<o;t[o]=-1,i&=~l}}function op(t){if((xt&6)!==0)throw Error(n(327));Es();var i=ti(t,0);if((i&1)===0)return In(t,G()),null;var o=Va(t,i);if(t.tag!==0&&o===2){var l=Pt(t);l!==0&&(i=l,o=Zu(t,l))}if(o===1)throw o=Ro,Fr(t,0),ur(t,i),In(t,G()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,kr(t,Ln,Li),In(t,G()),null}function Ju(t,i){var o=xt;xt|=1;try{return t(i)}finally{xt=o,xt===0&&(Ms=G()+500,ma&&nr())}}function Nr(t){ar!==null&&ar.tag===0&&(xt&6)===0&&Es();var i=xt;xt|=1;var o=Kn.transition,l=ht;try{if(Kn.transition=null,ht=1,t)return t()}finally{ht=l,Kn.transition=o,xt=i,(xt&6)===0&&nr()}}function ec(){Hn=Ss.current,kt(Ss)}function Fr(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,r_(o)),$t!==null)for(o=$t.return;o!==null;){var l=o;switch(uu(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&ha();break;case 3:vs(),kt(bn),kt(pn),Mu();break;case 5:yu(l);break;case 4:vs();break;case 13:kt(Bt);break;case 19:kt(Bt);break;case 10:mu(l.type._context);break;case 22:case 23:ec()}o=o.return}if(sn=t,$t=t=cr(t.current,null),cn=Hn=i,en=0,Ro=null,qu=Fa=Ur=0,Ln=Co=null,Dr!==null){for(i=0;i<Dr.length;i++)if(o=Dr[i],l=o.interleaved,l!==null){o.interleaved=null;var c=l.next,p=o.pending;if(p!==null){var M=p.next;p.next=c,l.next=M}o.pending=l}Dr=null}return t}function ap(t,i){do{var o=$t;try{if(pu(),wa.current=ba,Aa){for(var l=Ht.memoizedState;l!==null;){var c=l.queue;c!==null&&(c.pending=null),l=l.next}Aa=!1}if(Ir=0,rn=Jt=Ht=null,So=!1,Mo=0,ju.current=null,o===null||o.return===null){en=1,Ro=i,$t=null;break}e:{var p=t,M=o.return,D=o,k=i;if(i=cn,D.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var J=k,ve=D,ye=ve.tag;if((ve.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Le=Lh(M);if(Le!==null){Le.flags&=-257,Ih(Le,M,D,p,i),Le.mode&1&&Dh(p,J,i),i=Le,k=J;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(k),i.updateQueue=Ve}else He.add(k);break e}else{if((i&1)===0){Dh(p,J,i),tc();break e}k=Error(n(426))}}else if(zt&&D.mode&1){var Yt=Lh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Ih(Yt,M,D,p,i),fu(xs(k,D));break e}}p=k=xs(k,D),en!==4&&(en=2),Co===null?Co=[p]:Co.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=bh(p,k,i);nh(p,q);break e;case 1:D=k;var W=p.type,Y=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(or===null||!or.has(Y)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=Ph(p,D,i);nh(p,Te);break e}}p=p.return}while(p!==null)}cp(o)}catch(We){i=We,$t===o&&o!==null&&($t=o=o.return);continue}break}while(!0)}function lp(){var t=Na.current;return Na.current=ba,t===null?ba:t}function tc(){(en===0||en===3||en===2)&&(en=4),sn===null||(Ur&268435455)===0&&(Fa&268435455)===0||ur(sn,cn)}function Va(t,i){var o=xt;xt|=2;var l=lp();(sn!==t||cn!==i)&&(Li=null,Fr(t,i));do try{b_();break}catch(c){ap(t,c)}while(!0);if(pu(),xt=o,Na.current=l,$t!==null)throw Error(n(261));return sn=null,cn=0,en}function b_(){for(;$t!==null;)up($t)}function P_(){for(;$t!==null&&!te();)up($t)}function up(t){var i=hp(t.alternate,t,Hn);t.memoizedProps=t.pendingProps,i===null?cp(t):$t=i,ju.current=null}function cp(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=M_(o,i,Hn),o!==null){$t=o;return}}else{if(o=E_(o,i),o!==null){o.flags&=32767,$t=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=t}while(i!==null);en===0&&(en=5)}function kr(t,i,o){var l=ht,c=Kn.transition;try{Kn.transition=null,ht=1,D_(t,i,o,l)}finally{Kn.transition=c,ht=l}return null}function D_(t,i,o,l){do Es();while(ar!==null);if((xt&6)!==0)throw Error(n(327));o=t.finishedWork;var c=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(hn(t,p),t===sn&&($t=sn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Oa||(Oa=!0,pp(ke,function(){return Es(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=Kn.transition,Kn.transition=null;var M=ht;ht=1;var D=xt;xt|=4,ju.current=null,w_(t,o),ep(o,t),Zg(tu),Jo=!!eu,tu=eu=null,t.current=o,A_(o),ne(),xt=D,ht=M,Kn.transition=p}else t.current=o;if(Oa&&(Oa=!1,ar=t,za=c),p=t.pendingLanes,p===0&&(or=null),St(o.stateNode),In(t,G()),i!==null)for(l=t.onRecoverableError,o=0;o<i.length;o++)c=i[o],l(c.value,{componentStack:c.stack,digest:c.digest});if(ka)throw ka=!1,t=Ku,Ku=null,t;return(za&1)!==0&&t.tag!==0&&Es(),p=t.pendingLanes,(p&1)!==0?t===$u?bo++:(bo=0,$u=t):bo=0,nr(),null}function Es(){if(ar!==null){var t=Zd(za),i=Kn.transition,o=ht;try{if(Kn.transition=null,ht=16>t?16:t,ar===null)var l=!1;else{if(t=ar,ar=null,za=0,(xt&6)!==0)throw Error(n(331));var c=xt;for(xt|=4,Oe=t.current;Oe!==null;){var p=Oe,M=p.child;if((Oe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var k=0;k<D.length;k++){var J=D[k];for(Oe=J;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Ao(8,ve,p)}var ye=ve.child;if(ye!==null)ye.return=ve,Oe=ye;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Le=ve.return;if(Kh(ve),ve===J){Oe=null;break}if(ge!==null){ge.return=Le,Oe=ge;break}Oe=Le}}}var He=p.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Yt=Ve.sibling;Ve.sibling=null,Ve=Yt}while(Ve!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Ao(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Oe=q;break e}Oe=p.return}}var W=t.current;for(Oe=W;Oe!==null;){M=Oe;var Y=M.child;if((M.subtreeFlags&2064)!==0&&Y!==null)Y.return=M,Oe=Y;else e:for(M=W;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Ua(9,D)}}catch(We){Xt(D,D.return,We)}if(D===M){Oe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Oe=Te;break e}Oe=D.return}}if(xt=c,nr(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(je,t)}catch{}l=!0}return l}finally{ht=o,Kn.transition=i}}return!1}function dp(t,i,o){i=xs(o,i),i=bh(t,i,1),t=rr(t,i,1),i=wn(),t!==null&&(qt(t,1,i),In(t,i))}function Xt(t,i,o){if(t.tag===3)dp(t,t,o);else for(;i!==null;){if(i.tag===3){dp(i,t,o);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(or===null||!or.has(l))){t=xs(o,t),t=Ph(i,t,1),i=rr(i,t,1),t=wn(),i!==null&&(qt(i,1,t),In(i,t));break}}i=i.return}}function L_(t,i,o){var l=t.pingCache;l!==null&&l.delete(i),i=wn(),t.pingedLanes|=t.suspendedLanes&o,sn===t&&(cn&o)===o&&(en===4||en===3&&(cn&130023424)===cn&&500>G()-Yu?Fr(t,0):qu|=o),In(t,i)}function fp(t,i){i===0&&((t.mode&1)===0?i=1:(i=mt,mt<<=1,(mt&130023424)===0&&(mt=4194304)));var o=wn();t=bi(t,i),t!==null&&(qt(t,i,o),In(t,o))}function I_(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),fp(t,o)}function U_(t,i){var o=0;switch(t.tag){case 13:var l=t.stateNode,c=t.memoizedState;c!==null&&(o=c.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),fp(t,o)}var hp;hp=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||bn.current)Dn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return Dn=!1,S_(t,i,o);Dn=(t.flags&131072)!==0}else Dn=!1,zt&&(i.flags&1048576)!==0&&jf(i,_a,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;La(t,i),t=i.pendingProps;var c=ds(i,pn.current);_s(i,o),c=wu(null,i,l,t,c,o);var p=Au();return i.flags|=1,typeof c=="object"&&c!==null&&typeof c.render=="function"&&c.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(l)?(p=!0,pa(i)):p=!1,i.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,vu(i),c.updater=Pa,i.stateNode=c,c._reactInternals=i,Lu(i,l,t,o),i=Fu(null,i,l,!0,p,o)):(i.tag=0,zt&&p&&lu(i),Tn(null,i,c,o),i=i.child),i;case 16:l=i.elementType;e:{switch(La(t,i),t=i.pendingProps,c=l._init,l=c(l._payload),i.type=l,c=i.tag=F_(l),t=ri(l,t),c){case 0:i=Nu(null,i,l,t,o);break e;case 1:i=zh(null,i,l,t,o);break e;case 11:i=Uh(null,i,l,t,o);break e;case 14:i=Nh(null,i,l,ri(l.type,t),o);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Nu(t,i,l,c,o);case 1:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),zh(t,i,l,c,o);case 3:e:{if(Bh(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,c=p.element,th(t,i),Ea(i,l,null,o);var M=i.memoizedState;if(l=M.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){c=xs(Error(n(423)),i),i=Hh(t,i,l,o,c);break e}else if(l!==c){c=xs(Error(n(424)),i),i=Hh(t,i,l,o,c);break e}else for(Bn=Ji(i.stateNode.containerInfo.firstChild),zn=i,zt=!0,ii=null,o=Jf(i,null,l,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ps(),l===c){i=Di(t,i,o);break e}Tn(t,i,l,o)}i=i.child}return i;case 5:return rh(i),t===null&&du(i),l=i.type,c=i.pendingProps,p=t!==null?t.memoizedProps:null,M=c.children,nu(l,c)?M=null:p!==null&&nu(l,p)&&(i.flags|=32),Oh(t,i),Tn(t,i,M,o),i.child;case 6:return t===null&&du(i),null;case 13:return Vh(t,i,o);case 4:return xu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ms(i,null,l,o):Tn(t,i,l,o),i.child;case 11:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),Uh(t,i,l,c,o);case 7:return Tn(t,i,i.pendingProps,o),i.child;case 8:return Tn(t,i,i.pendingProps.children,o),i.child;case 12:return Tn(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(l=i.type._context,c=i.pendingProps,p=i.memoizedProps,M=c.value,Ut(ya,l._currentValue),l._currentValue=M,p!==null)if(ni(p.value,M)){if(p.children===c.children&&!bn.current){i=Di(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){M=p.child;for(var k=D.firstContext;k!==null;){if(k.context===l){if(p.tag===1){k=Pi(-1,o&-o),k.tag=2;var J=p.updateQueue;if(J!==null){J=J.shared;var ve=J.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),J.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),gu(p.return,o,i),D.lanes|=o;break}k=k.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(n(341));M.lanes|=o,D=M.alternate,D!==null&&(D.lanes|=o),gu(M,o,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Tn(t,i,c.children,o),i=i.child}return i;case 9:return c=i.type,l=i.pendingProps.children,_s(i,o),c=qn(c),l=l(c),i.flags|=1,Tn(t,i,l,o),i.child;case 14:return l=i.type,c=ri(l,i.pendingProps),c=ri(l.type,c),Nh(t,i,l,c,o);case 15:return Fh(t,i,i.type,i.pendingProps,o);case 17:return l=i.type,c=i.pendingProps,c=i.elementType===l?c:ri(l,c),La(t,i),i.tag=1,Pn(l)?(t=!0,pa(i)):t=!1,_s(i,o),Rh(i,l,c),Lu(i,l,c,o),Fu(null,i,l,!0,t,o);case 19:return Wh(t,i,o);case 22:return kh(t,i,o)}throw Error(n(156,i.tag))};function pp(t,i){return A(t,i)}function N_(t,i,o,l){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,i,o,l){return new N_(t,i,o,l)}function nc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function F_(t){if(typeof t=="function")return nc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ie)return 11;if(t===he)return 14}return 2}function cr(t,i){var o=t.alternate;return o===null?(o=$n(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function Ga(t,i,o,l,c,p){var M=2;if(l=t,typeof t=="function")nc(t)&&(M=1);else if(typeof t=="string")M=5;else e:switch(t){case I:return Or(o.children,c,p,i);case V:M=8,c|=8;break;case C:return t=$n(12,o,i,c|2),t.elementType=C,t.lanes=p,t;case $:return t=$n(13,o,i,c),t.elementType=$,t.lanes=p,t;case oe:return t=$n(19,o,i,c),t.elementType=oe,t.lanes=p,t;case me:return Wa(o,c,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case w:M=10;break e;case z:M=9;break e;case ie:M=11;break e;case he:M=14;break e;case se:M=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=$n(M,o,i,c),i.elementType=t,i.type=l,i.lanes=p,i}function Or(t,i,o,l){return t=$n(7,t,l,i),t.lanes=o,t}function Wa(t,i,o,l){return t=$n(22,t,l,i),t.elementType=me,t.lanes=o,t.stateNode={isHidden:!1},t}function ic(t,i,o){return t=$n(6,t,null,i),t.lanes=o,t}function rc(t,i,o){return i=$n(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function k_(t,i,o,l,c){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fn(0),this.expirationTimes=fn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fn(0),this.identifierPrefix=l,this.onRecoverableError=c,this.mutableSourceEagerHydrationData=null}function sc(t,i,o,l,c,p,M,D,k){return t=new k_(t,i,o,D,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=$n(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(p),t}function O_(t,i,o){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:l==null?null:""+l,children:t,containerInfo:i,implementation:o}}function mp(t){if(!t)return tr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(Pn(o))return Gf(t,o,i)}return i}function gp(t,i,o,l,c,p,M,D,k){return t=sc(o,l,!0,t,c,p,M,D,k),t.context=mp(null),o=t.current,l=wn(),c=lr(o),p=Pi(l,c),p.callback=i??null,rr(o,p,c),t.current.lanes=c,qt(t,c,l),In(t,l),t}function Xa(t,i,o,l){var c=i.current,p=wn(),M=lr(c);return o=mp(o),i.context===null?i.context=o:i.pendingContext=o,i=Pi(p,M),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=rr(c,i,M),t!==null&&(ai(t,c,M,p),Ma(t,c,M)),M}function ja(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function _p(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function oc(t,i){_p(t,i),(t=t.alternate)&&_p(t,i)}function z_(){return null}var vp=typeof reportError=="function"?reportError:function(t){console.error(t)};function ac(t){this._internalRoot=t}qa.prototype.render=ac.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Xa(t,i,null,null)},qa.prototype.unmount=ac.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Nr(function(){Xa(null,t,null,null)}),i[wi]=null}};function qa(t){this._internalRoot=t}qa.prototype.unstable_scheduleHydration=function(t){if(t){var i=ef();t={blockedOn:null,target:t,priority:i};for(var o=0;o<$i.length&&i!==0&&i<$i[o].priority;o++);$i.splice(o,0,t),o===0&&rf(t)}};function lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ya(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function xp(){}function B_(t,i,o,l,c){if(c){if(typeof l=="function"){var p=l;l=function(){var J=ja(M);p.call(J)}}var M=gp(i,l,t,0,null,!1,!1,"",xp);return t._reactRootContainer=M,t[wi]=M.current,ho(t.nodeType===8?t.parentNode:t),Nr(),M}for(;c=t.lastChild;)t.removeChild(c);if(typeof l=="function"){var D=l;l=function(){var J=ja(k);D.call(J)}}var k=sc(t,0,!1,null,null,!1,!1,"",xp);return t._reactRootContainer=k,t[wi]=k.current,ho(t.nodeType===8?t.parentNode:t),Nr(function(){Xa(i,k,o,l)}),k}function Ka(t,i,o,l,c){var p=o._reactRootContainer;if(p){var M=p;if(typeof c=="function"){var D=c;c=function(){var k=ja(M);D.call(k)}}Xa(i,M,t,c)}else M=B_(o,i,t,c,l);return ja(M)}Qd=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=ln(i.pendingLanes);o!==0&&(Ar(i,o|1),In(i,G()),(xt&6)===0&&(Ms=G()+500,nr()))}break;case 13:Nr(function(){var l=bi(t,1);if(l!==null){var c=wn();ai(l,t,1,c)}}),oc(t,1)}},Il=function(t){if(t.tag===13){var i=bi(t,134217728);if(i!==null){var o=wn();ai(i,t,134217728,o)}oc(t,134217728)}},Jd=function(t){if(t.tag===13){var i=lr(t),o=bi(t,i);if(o!==null){var l=wn();ai(o,t,i,l)}oc(t,i)}},ef=function(){return ht},tf=function(t,i){var o=ht;try{return ht=t,i()}finally{ht=o}},Re=function(t,i,o){switch(i){case"input":if(ut(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var l=o[i];if(l!==t&&l.form===t.form){var c=fa(l);if(!c)throw Error(n(90));pt(l),ut(l,c)}}}break;case"textarea":pe(t,o);break;case"select":i=o.value,i!=null&&P(t,!!o.multiple,i,!1)}},Nt=Ju,Qt=Nr;var H_={usingClientEntryPoint:!1,Events:[go,us,fa,Pe,rt,Ju]},Po={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V_={bundleType:Po.bundleType,version:Po.version,rendererPackageName:Po.rendererPackageName,rendererConfig:Po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ko(t),t===null?null:t.stateNode},findFiberByHostInstance:Po.findFiberByHostInstance||z_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $a=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$a.isDisabled&&$a.supportsFiber)try{je=$a.inject(V_),st=$a}catch{}}return Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H_,Un.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lc(i))throw Error(n(200));return O_(t,i,null,o)},Un.createRoot=function(t,i){if(!lc(t))throw Error(n(299));var o=!1,l="",c=vp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(c=i.onRecoverableError)),i=sc(t,1,!1,null,null,o,!1,l,c),t[wi]=i.current,ho(t.nodeType===8?t.parentNode:t),new ac(i)},Un.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Ko(i),t=t===null?null:t.stateNode,t},Un.flushSync=function(t){return Nr(t)},Un.hydrate=function(t,i,o){if(!Ya(i))throw Error(n(200));return Ka(null,t,i,!0,o)},Un.hydrateRoot=function(t,i,o){if(!lc(t))throw Error(n(405));var l=o!=null&&o.hydratedSources||null,c=!1,p="",M=vp;if(o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(M=o.onRecoverableError)),i=gp(i,null,t,1,o??null,c,!1,p,M),t[wi]=i.current,ho(t),l)for(t=0;t<l.length;t++)o=l[t],c=o._getVersion,c=c(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,c]:i.mutableSourceEagerHydrationData.push(o,c);return new qa(i)},Un.render=function(t,i,o){if(!Ya(i))throw Error(n(200));return Ka(null,t,i,!1,o)},Un.unmountComponentAtNode=function(t){if(!Ya(t))throw Error(n(40));return t._reactRootContainer?(Nr(function(){Ka(null,null,t,!1,function(){t._reactRootContainer=null,t[wi]=null})}),!0):!1},Un.unstable_batchedUpdates=Ju,Un.unstable_renderSubtreeIntoContainer=function(t,i,o,l){if(!Ya(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Ka(t,i,o,!1,l)},Un.version="18.3.1-next-f1338f8080-20240426",Un}var Rp;function Q_(){if(Rp)return dc.exports;Rp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),dc.exports=Z_(),dc.exports}var Cp;function J_(){if(Cp)return Za;Cp=1;var s=Q_();return Za.createRoot=s.createRoot,Za.hydrateRoot=s.hydrateRoot,Za}var ev=J_();const tv=Ud(ev);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bm=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var iv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=Lt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:a="",children:u,iconNode:d,...f},h)=>Lt.createElement("svg",{ref:h,...iv,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:bm("lucide",a),...f},[...d.map(([m,_])=>Lt.createElement(m,_)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(s,e)=>{const n=Lt.forwardRef(({className:r,...a},u)=>Lt.createElement(rv,{ref:u,iconNode:e,className:bm(`lucide-${nv(s)}`,r),...a}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=Rn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=Rn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=Rn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=Rn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=Rn("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=Rn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=Rn("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=Rn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=Rn("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=Rn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=Rn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=Rn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=Rn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=Rn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=Rn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fd="171",xv=0,Pp=1,yv=2,Pm=1,Sv=2,Oi=3,Sr=0,Fn=1,zi=2,xr=0,Bs=1,Dp=2,Lp=3,Ip=4,Mv=5,Yr=100,Ev=101,Tv=102,wv=103,Av=104,Rv=200,Cv=201,bv=202,Pv=203,jc=204,qc=205,Dv=206,Lv=207,Iv=208,Uv=209,Nv=210,Fv=211,kv=212,Ov=213,zv=214,Yc=0,Kc=1,$c=2,Gs=3,Zc=4,Qc=5,Jc=6,ed=7,Dm=0,Bv=1,Hv=2,yr=0,Vv=1,Gv=2,Wv=3,Xv=4,jv=5,qv=6,Yv=7,Lm=300,Ws=301,Xs=302,td=303,nd=304,bl=306,id=1e3,$r=1001,rd=1002,hi=1003,Kv=1004,Qa=1005,yi=1006,pc=1007,Zr=1008,Gi=1009,Im=1010,Um=1011,zo=1012,kd=1013,Qr=1014,Bi=1015,Bo=1016,Od=1017,zd=1018,js=1020,Nm=35902,Fm=1021,km=1022,fi=1023,Om=1024,zm=1025,Hs=1026,qs=1027,Bm=1028,Bd=1029,Hm=1030,Hd=1031,Vd=1033,yl=33776,Sl=33777,Ml=33778,El=33779,sd=35840,od=35841,ad=35842,ld=35843,ud=36196,cd=37492,dd=37496,fd=37808,hd=37809,pd=37810,md=37811,gd=37812,_d=37813,vd=37814,xd=37815,yd=37816,Sd=37817,Md=37818,Ed=37819,Td=37820,wd=37821,Tl=36492,Ad=36494,Rd=36495,Vm=36283,Cd=36284,bd=36285,Pd=36286,$v=3200,Zv=3201,Gm=0,Qv=1,vr="",Qn="srgb",Ys="srgb-linear",Al="linear",Dt="srgb",Ts=7680,Up=519,Jv=512,e0=513,t0=514,Wm=515,n0=516,i0=517,r0=518,s0=519,Np=35044,Fp="300 es",Hi=2e3,Rl=2001;class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const a=this._listeners[e];if(a!==void 0){const u=a.indexOf(n);u!==-1&&a.splice(u,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let u=0,d=a.length;u<d;u++)a[u].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=Math.PI/180,Dd=180/Math.PI;function Ho(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[n&63|128]+vn[n>>8&255]+"-"+vn[n>>16&255]+vn[n>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function gt(s,e,n){return Math.max(e,Math.min(n,s))}function o0(s,e){return(s%e+e)%e}function gc(s,e,n){return(1-n)*s+n*e}function Lo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Nn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class wt{constructor(e=0,n=0){wt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,a=e.elements;return this.x=a[0]*n+a[3]*r+a[6],this.y=a[1]*n+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),a=Math.sin(n),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*a+e.x,this.y=u*a+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,r,a,u,d,f,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,h,m)}set(e,n,r,a,u,d,f,h,m){const _=this.elements;return _[0]=e,_[1]=a,_[2]=f,_[3]=n,_[4]=u,_[5]=h,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[3],h=r[6],m=r[1],_=r[4],v=r[7],x=r[2],S=r[5],T=r[8],R=a[0],y=a[3],g=a[6],F=a[1],L=a[4],b=a[7],O=a[2],U=a[5],I=a[8];return u[0]=d*R+f*F+h*O,u[3]=d*y+f*L+h*U,u[6]=d*g+f*b+h*I,u[1]=m*R+_*F+v*O,u[4]=m*y+_*L+v*U,u[7]=m*g+_*b+v*I,u[2]=x*R+S*F+T*O,u[5]=x*y+S*L+T*U,u[8]=x*g+S*b+T*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8];return n*d*_-n*f*m-r*u*_+r*f*h+a*u*m-a*d*h}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=_*d-f*m,x=f*h-_*u,S=m*u-d*h,T=n*v+r*x+a*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/T;return e[0]=v*R,e[1]=(a*m-_*r)*R,e[2]=(f*r-a*d)*R,e[3]=x*R,e[4]=(_*n-a*h)*R,e[5]=(a*u-f*n)*R,e[6]=S*R,e[7]=(r*h-m*n)*R,e[8]=(d*n-r*u)*R,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,a,u,d,f){const h=Math.cos(u),m=Math.sin(u);return this.set(r*h,r*m,-r*(h*d+m*f)+d+e,-a*m,a*h,-a*(-m*d+h*f)+f+n,0,0,1),this}scale(e,n){return this.premultiply(_c.makeScale(e,n)),this}rotate(e){return this.premultiply(_c.makeRotation(-e)),this}translate(e,n){return this.premultiply(_c.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<9;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _c=new ot;function Xm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Cl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function a0(){const s=Cl("canvas");return s.style.display="block",s}const kp={};function Os(s){s in kp||(kp[s]=!0,console.warn(s))}function l0(s,e,n){return new Promise(function(r,a){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}function u0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function c0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Op=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zp=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){const s={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(a,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Dt&&(a.r=Vi(a.r),a.g=Vi(a.g),a.b=Vi(a.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(a.applyMatrix3(this.spaces[u].toXYZ),a.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Dt&&(a.r=Vs(a.r),a.g=Vs(a.g),a.b=Vs(a.b))),a},fromWorkingColorSpace:function(a,u){return this.convert(a,this.workingColorSpace,u)},toWorkingColorSpace:function(a,u){return this.convert(a,u,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===vr?Al:this.spaces[a].transfer},getLuminanceCoefficients:function(a,u=this.workingColorSpace){return a.fromArray(this.spaces[u].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,u,d){return a.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ys]:{primaries:e,whitePoint:r,transfer:Al,toXYZ:Op,fromXYZ:zp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Op,fromXYZ:zp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}}),s}const Tt=d0();function Vi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Vs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ws;class f0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ws===void 0&&(ws=Cl("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ws}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),u=a.data;for(let d=0;d<u.length;d++)u[d]=Vi(u[d]/255)*255;return r.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Vi(n[r]/255)*255):n[r]=Vi(n[r]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let h0=0;class jm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ho(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let u;if(Array.isArray(a)){u=[];for(let d=0,f=a.length;d<f;d++)a[d].isDataTexture?u.push(vc(a[d].image)):u.push(vc(a[d]))}else u=vc(a);r.url=u}return n||(e.images[this.uuid]=r),r}}function vc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?f0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let p0=0;class kn extends $s{constructor(e=kn.DEFAULT_IMAGE,n=kn.DEFAULT_MAPPING,r=$r,a=$r,u=yi,d=Zr,f=fi,h=Gi,m=kn.DEFAULT_ANISOTROPY,_=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Ho(),this.name="",this.source=new jm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=u,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case id:e.x=e.x-Math.floor(e.x);break;case $r:e.x=e.x<0?0:1;break;case rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case id:e.y=e.y-Math.floor(e.y);break;case $r:e.y=e.y<0?0:1;break;case rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Lm;kn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,n=0,r=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,a){return this.x=e,this.y=n,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*a+d[12]*u,this.y=d[1]*n+d[5]*r+d[9]*a+d[13]*u,this.z=d[2]*n+d[6]*r+d[10]*a+d[14]*u,this.w=d[3]*n+d[7]*r+d[11]*a+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,a,u;const h=e.elements,m=h[0],_=h[4],v=h[8],x=h[1],S=h[5],T=h[9],R=h[2],y=h[6],g=h[10];if(Math.abs(_-x)<.01&&Math.abs(v-R)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(v+R)<.1&&Math.abs(T+y)<.1&&Math.abs(m+S+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,b=(S+1)/2,O=(g+1)/2,U=(_+x)/4,I=(v+R)/4,V=(T+y)/4;return L>b&&L>O?L<.01?(r=0,a=.707106781,u=.707106781):(r=Math.sqrt(L),a=U/r,u=I/r):b>O?b<.01?(r=.707106781,a=0,u=.707106781):(a=Math.sqrt(b),r=U/a,u=V/a):O<.01?(r=.707106781,a=.707106781,u=0):(u=Math.sqrt(O),r=I/u,a=V/u),this.set(r,a,u,n),this}let F=Math.sqrt((y-T)*(y-T)+(v-R)*(v-R)+(x-_)*(x-_));return Math.abs(F)<.001&&(F=1),this.x=(y-T)/F,this.y=(v-R)/F,this.z=(x-_)/F,this.w=Math.acos((m+S+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this.w=gt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this.w=gt(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class m0 extends $s{constructor(e=1,n=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n);const a={width:e,height:n,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new kn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let f=0;f<d;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let a=0,u=this.textures.length;a<u;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new jm(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jr extends m0{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class qm extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class g0 extends kn{constructor(e=null,n=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=$r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=a}static slerpFlat(e,n,r,a,u,d,f){let h=r[a+0],m=r[a+1],_=r[a+2],v=r[a+3];const x=u[d+0],S=u[d+1],T=u[d+2],R=u[d+3];if(f===0){e[n+0]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v;return}if(f===1){e[n+0]=x,e[n+1]=S,e[n+2]=T,e[n+3]=R;return}if(v!==R||h!==x||m!==S||_!==T){let y=1-f;const g=h*x+m*S+_*T+v*R,F=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const O=Math.sqrt(L),U=Math.atan2(O,g*F);y=Math.sin(y*U)/O,f=Math.sin(f*U)/O}const b=f*F;if(h=h*y+x*b,m=m*y+S*b,_=_*y+T*b,v=v*y+R*b,y===1-f){const O=1/Math.sqrt(h*h+m*m+_*_+v*v);h*=O,m*=O,_*=O,v*=O}}e[n]=h,e[n+1]=m,e[n+2]=_,e[n+3]=v}static multiplyQuaternionsFlat(e,n,r,a,u,d){const f=r[a],h=r[a+1],m=r[a+2],_=r[a+3],v=u[d],x=u[d+1],S=u[d+2],T=u[d+3];return e[n]=f*T+_*v+h*S-m*x,e[n+1]=h*T+_*x+m*v-f*S,e[n+2]=m*T+_*S+f*x-h*v,e[n+3]=_*T-f*v-h*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,a){return this._x=e,this._y=n,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,a=e._y,u=e._z,d=e._order,f=Math.cos,h=Math.sin,m=f(r/2),_=f(a/2),v=f(u/2),x=h(r/2),S=h(a/2),T=h(u/2);switch(d){case"XYZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"YXZ":this._x=x*_*v+m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"ZXY":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v-x*S*T;break;case"ZYX":this._x=x*_*v-m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v+x*S*T;break;case"YZX":this._x=x*_*v+m*S*T,this._y=m*S*v+x*_*T,this._z=m*_*T-x*S*v,this._w=m*_*v-x*S*T;break;case"XZY":this._x=x*_*v-m*S*T,this._y=m*S*v-x*_*T,this._z=m*_*T+x*S*v,this._w=m*_*v+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],a=n[4],u=n[8],d=n[1],f=n[5],h=n[9],m=n[2],_=n[6],v=n[10],x=r+f+v;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-h)*S,this._y=(u-m)*S,this._z=(d-a)*S}else if(r>f&&r>v){const S=2*Math.sqrt(1+r-f-v);this._w=(_-h)/S,this._x=.25*S,this._y=(a+d)/S,this._z=(u+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-r-v);this._w=(u-m)/S,this._x=(a+d)/S,this._y=.25*S,this._z=(h+_)/S}else{const S=2*Math.sqrt(1+v-r-f);this._w=(d-a)/S,this._x=(u+m)/S,this._y=(h+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,n/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,a=e._y,u=e._z,d=e._w,f=n._x,h=n._y,m=n._z,_=n._w;return this._x=r*_+d*f+a*m-u*h,this._y=a*_+d*h+u*f-r*m,this._z=u*_+d*m+r*h-a*f,this._w=d*_-r*f-a*h-u*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const r=this._x,a=this._y,u=this._z,d=this._w;let f=d*e._w+r*e._x+a*e._y+u*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=d,this._x=r,this._y=a,this._z=u,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-n;return this._w=S*d+n*this._w,this._x=S*r+n*this._x,this._y=S*a+n*this._y,this._z=S*u+n*this._z,this.normalize(),this}const m=Math.sqrt(h),_=Math.atan2(m,f),v=Math.sin((1-n)*_)/m,x=Math.sin(n*_)/m;return this._w=d*v+this._w*x,this._x=r*v+this._x*x,this._y=a*v+this._y*x,this._z=u*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,r=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Bp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Bp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*a,this.y=u[1]*n+u[4]*r+u[7]*a,this.z=u[2]*n+u[5]*r+u[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,a=this.z,u=e.elements,d=1/(u[3]*n+u[7]*r+u[11]*a+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*a+u[12])*d,this.y=(u[1]*n+u[5]*r+u[9]*a+u[13])*d,this.z=(u[2]*n+u[6]*r+u[10]*a+u[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,a=this.z,u=e.x,d=e.y,f=e.z,h=e.w,m=2*(d*a-f*r),_=2*(f*n-u*a),v=2*(u*r-d*n);return this.x=n+h*m+d*v-f*_,this.y=r+h*_+f*m-u*v,this.z=a+h*v+u*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,a=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*a,this.y=u[1]*n+u[5]*r+u[9]*a,this.z=u[2]*n+u[6]*r+u[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=gt(this.x,e.x,n.x),this.y=gt(this.y,e.y,n.y),this.z=gt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=gt(this.x,e,n),this.y=gt(this.y,e,n),this.z=gt(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,a=e.y,u=e.z,d=n.x,f=n.y,h=n.z;return this.x=a*h-u*f,this.y=u*d-r*h,this.z=r*f-a*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return xc.copy(this).projectOnVector(e),this.sub(xc)}reflect(e){return this.sub(xc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return n*n+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const a=Math.sin(n)*e;return this.x=a*Math.sin(r),this.y=Math.cos(n)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xc=new ee,Bp=new Vo;class Go{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=u.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,li):li.fromBufferAttribute(u,d),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ja.copy(r.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const a=e.children;for(let u=0,d=a.length;u<d;u++)this.expandByObject(a[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Io),el.subVectors(this.max,Io),As.subVectors(e.a,Io),Rs.subVectors(e.b,Io),Cs.subVectors(e.c,Io),fr.subVectors(Rs,As),hr.subVectors(Cs,Rs),zr.subVectors(As,Cs);let n=[0,-fr.z,fr.y,0,-hr.z,hr.y,0,-zr.z,zr.y,fr.z,0,-fr.x,hr.z,0,-hr.x,zr.z,0,-zr.x,-fr.y,fr.x,0,-hr.y,hr.x,0,-zr.y,zr.x,0];return!yc(n,As,Rs,Cs,el)||(n=[1,0,0,0,1,0,0,0,1],!yc(n,As,Rs,Cs,el))?!1:(tl.crossVectors(fr,hr),n=[tl.x,tl.y,tl.z],yc(n,As,Rs,Cs,el))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],li=new ee,Ja=new Go,As=new ee,Rs=new ee,Cs=new ee,fr=new ee,hr=new ee,zr=new ee,Io=new ee,el=new ee,tl=new ee,Br=new ee;function yc(s,e,n,r,a){for(let u=0,d=s.length-3;u<=d;u+=3){Br.fromArray(s,u);const f=a.x*Math.abs(Br.x)+a.y*Math.abs(Br.y)+a.z*Math.abs(Br.z),h=e.dot(Br),m=n.dot(Br),_=r.dot(Br);if(Math.max(-Math.max(h,m,_),Math.min(h,m,_))>f)return!1}return!0}const _0=new Go,Uo=new ee,Sc=new ee;class Gd{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):_0.setFromPoints(e).getCenter(r);let a=0;for(let u=0,d=e.length;u<d;u++)a=Math.max(a,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Uo.subVectors(e,this.center);const n=Uo.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),a=(r-this.radius)*.5;this.center.addScaledVector(Uo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Uo.copy(e.center).add(Sc)),this.expandByPoint(Uo.copy(e.center).sub(Sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new ee,Mc=new ee,nl=new ee,pr=new ee,Ec=new ee,il=new ee,Tc=new ee;class Ym{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,n),Ui.distanceToSquared(e))}distanceSqToSegment(e,n,r,a){Mc.copy(e).add(n).multiplyScalar(.5),nl.copy(n).sub(e).normalize(),pr.copy(this.origin).sub(Mc);const u=e.distanceTo(n)*.5,d=-this.direction.dot(nl),f=pr.dot(this.direction),h=-pr.dot(nl),m=pr.lengthSq(),_=Math.abs(1-d*d);let v,x,S,T;if(_>0)if(v=d*h-f,x=d*f-h,T=u*_,v>=0)if(x>=-T)if(x<=T){const R=1/_;v*=R,x*=R,S=v*(v+d*x+2*f)+x*(d*v+x+2*h)+m}else x=u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x=-u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;else x<=-T?(v=Math.max(0,-(-d*u+f)),x=v>0?-u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m):x<=T?(v=0,x=Math.min(Math.max(-u,-h),u),S=x*(x+2*h)+m):(v=Math.max(0,-(d*u+f)),x=v>0?u:Math.min(Math.max(-u,-h),u),S=-v*v+x*(x+2*h)+m);else x=d>0?-u:u,v=Math.max(0,-(d*x+f)),S=-v*v+x*(x+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(Mc).addScaledVector(nl,x),S}intersectSphere(e,n){Ui.subVectors(e.center,this.origin);const r=Ui.dot(this.direction),a=Ui.dot(Ui)-r*r,u=e.radius*e.radius;if(a>u)return null;const d=Math.sqrt(u-a),f=r-d,h=r+d;return h<0?null:f<0?this.at(h,n):this.at(f,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,a,u,d,f,h;const m=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,a=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,a=(e.min.x-x.x)*m),_>=0?(u=(e.min.y-x.y)*_,d=(e.max.y-x.y)*_):(u=(e.max.y-x.y)*_,d=(e.min.y-x.y)*_),r>d||u>a||((u>r||isNaN(r))&&(r=u),(d<a||isNaN(a))&&(a=d),v>=0?(f=(e.min.z-x.z)*v,h=(e.max.z-x.z)*v):(f=(e.max.z-x.z)*v,h=(e.min.z-x.z)*v),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,n)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,n,r,a,u){Ec.subVectors(n,e),il.subVectors(r,e),Tc.crossVectors(Ec,il);let d=this.direction.dot(Tc),f;if(d>0){if(a)return null;f=1}else if(d<0)f=-1,d=-d;else return null;pr.subVectors(this.origin,e);const h=f*this.direction.dot(il.crossVectors(pr,il));if(h<0)return null;const m=f*this.direction.dot(Ec.cross(pr));if(m<0||h+m>d)return null;const _=-f*pr.dot(Tc);return _<0?null:this.at(_/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,n,r,a,u,d,f,h,m,_,v,x,S,T,R,y){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,a,u,d,f,h,m,_,v,x,S,T,R,y)}set(e,n,r,a,u,d,f,h,m,_,v,x,S,T,R,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=r,g[12]=a,g[1]=u,g[5]=d,g[9]=f,g[13]=h,g[2]=m,g[6]=_,g[10]=v,g[14]=x,g[3]=S,g[7]=T,g[11]=R,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,r=e.elements,a=1/bs.setFromMatrixColumn(e,0).length(),u=1/bs.setFromMatrixColumn(e,1).length(),d=1/bs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*a,n[1]=r[1]*a,n[2]=r[2]*a,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,a=e.y,u=e.z,d=Math.cos(r),f=Math.sin(r),h=Math.cos(a),m=Math.sin(a),_=Math.cos(u),v=Math.sin(u);if(e.order==="XYZ"){const x=d*_,S=d*v,T=f*_,R=f*v;n[0]=h*_,n[4]=-h*v,n[8]=m,n[1]=S+T*m,n[5]=x-R*m,n[9]=-f*h,n[2]=R-x*m,n[6]=T+S*m,n[10]=d*h}else if(e.order==="YXZ"){const x=h*_,S=h*v,T=m*_,R=m*v;n[0]=x+R*f,n[4]=T*f-S,n[8]=d*m,n[1]=d*v,n[5]=d*_,n[9]=-f,n[2]=S*f-T,n[6]=R+x*f,n[10]=d*h}else if(e.order==="ZXY"){const x=h*_,S=h*v,T=m*_,R=m*v;n[0]=x-R*f,n[4]=-d*v,n[8]=T+S*f,n[1]=S+T*f,n[5]=d*_,n[9]=R-x*f,n[2]=-d*m,n[6]=f,n[10]=d*h}else if(e.order==="ZYX"){const x=d*_,S=d*v,T=f*_,R=f*v;n[0]=h*_,n[4]=T*m-S,n[8]=x*m+R,n[1]=h*v,n[5]=R*m+x,n[9]=S*m-T,n[2]=-m,n[6]=f*h,n[10]=d*h}else if(e.order==="YZX"){const x=d*h,S=d*m,T=f*h,R=f*m;n[0]=h*_,n[4]=R-x*v,n[8]=T*v+S,n[1]=v,n[5]=d*_,n[9]=-f*_,n[2]=-m*_,n[6]=S*v+T,n[10]=x-R*v}else if(e.order==="XZY"){const x=d*h,S=d*m,T=f*h,R=f*m;n[0]=h*_,n[4]=-v,n[8]=m*_,n[1]=x*v+R,n[5]=d*_,n[9]=S*v-T,n[2]=T*v-S,n[6]=f*_,n[10]=R*v+x}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(v0,e,x0)}lookAt(e,n,r){const a=this.elements;return Vn.subVectors(e,n),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),mr.crossVectors(r,Vn),mr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),mr.crossVectors(r,Vn)),mr.normalize(),rl.crossVectors(Vn,mr),a[0]=mr.x,a[4]=rl.x,a[8]=Vn.x,a[1]=mr.y,a[5]=rl.y,a[9]=Vn.y,a[2]=mr.z,a[6]=rl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,a=n.elements,u=this.elements,d=r[0],f=r[4],h=r[8],m=r[12],_=r[1],v=r[5],x=r[9],S=r[13],T=r[2],R=r[6],y=r[10],g=r[14],F=r[3],L=r[7],b=r[11],O=r[15],U=a[0],I=a[4],V=a[8],C=a[12],w=a[1],z=a[5],ie=a[9],$=a[13],oe=a[2],he=a[6],se=a[10],me=a[14],H=a[3],ue=a[7],le=a[11],N=a[15];return u[0]=d*U+f*w+h*oe+m*H,u[4]=d*I+f*z+h*he+m*ue,u[8]=d*V+f*ie+h*se+m*le,u[12]=d*C+f*$+h*me+m*N,u[1]=_*U+v*w+x*oe+S*H,u[5]=_*I+v*z+x*he+S*ue,u[9]=_*V+v*ie+x*se+S*le,u[13]=_*C+v*$+x*me+S*N,u[2]=T*U+R*w+y*oe+g*H,u[6]=T*I+R*z+y*he+g*ue,u[10]=T*V+R*ie+y*se+g*le,u[14]=T*C+R*$+y*me+g*N,u[3]=F*U+L*w+b*oe+O*H,u[7]=F*I+L*z+b*he+O*ue,u[11]=F*V+L*ie+b*se+O*le,u[15]=F*C+L*$+b*me+O*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],a=e[8],u=e[12],d=e[1],f=e[5],h=e[9],m=e[13],_=e[2],v=e[6],x=e[10],S=e[14],T=e[3],R=e[7],y=e[11],g=e[15];return T*(+u*h*v-a*m*v-u*f*x+r*m*x+a*f*S-r*h*S)+R*(+n*h*S-n*m*x+u*d*x-a*d*S+a*m*_-u*h*_)+y*(+n*m*v-n*f*S-u*d*v+r*d*S+u*f*_-r*m*_)+g*(-a*f*_-n*h*v+n*f*x+a*d*v-r*d*x+r*h*_)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],a=e[2],u=e[3],d=e[4],f=e[5],h=e[6],m=e[7],_=e[8],v=e[9],x=e[10],S=e[11],T=e[12],R=e[13],y=e[14],g=e[15],F=v*y*m-R*x*m+R*h*S-f*y*S-v*h*g+f*x*g,L=T*x*m-_*y*m-T*h*S+d*y*S+_*h*g-d*x*g,b=_*R*m-T*v*m+T*f*S-d*R*S-_*f*g+d*v*g,O=T*v*h-_*R*h-T*f*x+d*R*x+_*f*y-d*v*y,U=n*F+r*L+a*b+u*O;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=F*I,e[1]=(R*x*u-v*y*u-R*a*S+r*y*S+v*a*g-r*x*g)*I,e[2]=(f*y*u-R*h*u+R*a*m-r*y*m-f*a*g+r*h*g)*I,e[3]=(v*h*u-f*x*u-v*a*m+r*x*m+f*a*S-r*h*S)*I,e[4]=L*I,e[5]=(_*y*u-T*x*u+T*a*S-n*y*S-_*a*g+n*x*g)*I,e[6]=(T*h*u-d*y*u-T*a*m+n*y*m+d*a*g-n*h*g)*I,e[7]=(d*x*u-_*h*u+_*a*m-n*x*m-d*a*S+n*h*S)*I,e[8]=b*I,e[9]=(T*v*u-_*R*u-T*r*S+n*R*S+_*r*g-n*v*g)*I,e[10]=(d*R*u-T*f*u+T*r*m-n*R*m-d*r*g+n*f*g)*I,e[11]=(_*f*u-d*v*u-_*r*m+n*v*m+d*r*S-n*f*S)*I,e[12]=O*I,e[13]=(_*R*a-T*v*a+T*r*x-n*R*x-_*r*y+n*v*y)*I,e[14]=(T*f*a-d*R*a-T*r*h+n*R*h+d*r*y-n*f*y)*I,e[15]=(d*v*a-_*f*a+_*r*h-n*v*h-d*r*x+n*f*x)*I,this}scale(e){const n=this.elements,r=e.x,a=e.y,u=e.z;return n[0]*=r,n[4]*=a,n[8]*=u,n[1]*=r,n[5]*=a,n[9]*=u,n[2]*=r,n[6]*=a,n[10]*=u,n[3]*=r,n[7]*=a,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,a))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),a=Math.sin(n),u=1-r,d=e.x,f=e.y,h=e.z,m=u*d,_=u*f;return this.set(m*d+r,m*f-a*h,m*h+a*f,0,m*f+a*h,_*f+r,_*h-a*d,0,m*h-a*f,_*h+a*d,u*h*h+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,a,u,d){return this.set(1,r,u,0,e,1,d,0,n,a,1,0,0,0,0,1),this}compose(e,n,r){const a=this.elements,u=n._x,d=n._y,f=n._z,h=n._w,m=u+u,_=d+d,v=f+f,x=u*m,S=u*_,T=u*v,R=d*_,y=d*v,g=f*v,F=h*m,L=h*_,b=h*v,O=r.x,U=r.y,I=r.z;return a[0]=(1-(R+g))*O,a[1]=(S+b)*O,a[2]=(T-L)*O,a[3]=0,a[4]=(S-b)*U,a[5]=(1-(x+g))*U,a[6]=(y+F)*U,a[7]=0,a[8]=(T+L)*I,a[9]=(y-F)*I,a[10]=(1-(x+R))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,r){const a=this.elements;let u=bs.set(a[0],a[1],a[2]).length();const d=bs.set(a[4],a[5],a[6]).length(),f=bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(u=-u),e.x=a[12],e.y=a[13],e.z=a[14],ui.copy(this);const m=1/u,_=1/d,v=1/f;return ui.elements[0]*=m,ui.elements[1]*=m,ui.elements[2]*=m,ui.elements[4]*=_,ui.elements[5]*=_,ui.elements[6]*=_,ui.elements[8]*=v,ui.elements[9]*=v,ui.elements[10]*=v,n.setFromRotationMatrix(ui),r.x=u,r.y=d,r.z=f,this}makePerspective(e,n,r,a,u,d,f=Hi){const h=this.elements,m=2*u/(n-e),_=2*u/(r-a),v=(n+e)/(n-e),x=(r+a)/(r-a);let S,T;if(f===Hi)S=-(d+u)/(d-u),T=-2*d*u/(d-u);else if(f===Rl)S=-d/(d-u),T=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=_,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,r,a,u,d,f=Hi){const h=this.elements,m=1/(n-e),_=1/(r-a),v=1/(d-u),x=(n+e)*m,S=(r+a)*_;let T,R;if(f===Hi)T=(d+u)*v,R=-2*v;else if(f===Rl)T=u*v,R=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-x,h[1]=0,h[5]=2*_,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=R,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let a=0;a<16;a++)if(n[a]!==r[a])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}}const bs=new ee,ui=new Gt,v0=new ee(0,0,0),x0=new ee(1,1,1),mr=new ee,rl=new ee,Vn=new ee,Hp=new Gt,Vp=new Vo;class Mi{constructor(e=0,n=0,r=0,a=Mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,a=this._order){return this._x=e,this._y=n,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const a=e.elements,u=a[0],d=a[4],f=a[8],h=a[1],m=a[5],_=a[9],v=a[2],x=a[6],S=a[10];switch(n){case"XYZ":this._y=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(gt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(h,u));break;case"ZYX":this._y=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(h,u)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Hp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vp.setFromEuler(this),this.setFromQuaternion(Vp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mi.DEFAULT_ORDER="XYZ";class Wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let y0=0;const Gp=new ee,Ps=new Vo,Ni=new Gt,sl=new ee,No=new ee,S0=new ee,M0=new Vo,Wp=new ee(1,0,0),Xp=new ee(0,1,0),jp=new ee(0,0,1),qp={type:"added"},E0={type:"removed"},Ds={type:"childadded",child:null},wc={type:"childremoved",child:null};class dn extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new ee,n=new Mi,r=new Vo,a=new ee(1,1,1);function u(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ot}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,n){return Ps.setFromAxisAngle(e,n),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Wp,e)}rotateY(e){return this.rotateOnAxis(Xp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Gp.copy(e).applyQuaternion(this.quaternion),this.position.add(Gp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Wp,e)}translateY(e){return this.translateOnAxis(Xp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?sl.copy(e):sl.set(e,n,r);const a=this.parent;this.updateWorldMatrix(!0,!1),No.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(No,sl,this.up):Ni.lookAt(sl,No,this.up),this.quaternion.setFromRotationMatrix(Ni),a&&(Ni.extractRotation(a.matrixWorld),Ps.setFromRotationMatrix(Ni),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(E0),wc.child=e,this.dispatchEvent(wc),wc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qp),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,a=this.children.length;r<a;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,e,S0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(No,M0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let u=0,d=a.length;u<d;u++)a[u].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(f=>({boxInitialized:f.boxInitialized,boxMin:f.box.min.toArray(),boxMax:f.box.max.toArray(),sphereInitialized:f.sphereInitialized,sphereRadius:f.sphere.radius,sphereCenter:f.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function u(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=u(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,_=h.length;m<_;m++){const v=h[m];u(e.shapes,v)}else u(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(u(e.materials,this.material[h]));a.material=f}else a.material=u(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(u(e.animations,h))}}if(n){const f=d(e.geometries),h=d(e.materials),m=d(e.textures),_=d(e.images),v=d(e.shapes),x=d(e.skeletons),S=d(e.animations),T=d(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),v.length>0&&(r.shapes=v),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),T.length>0&&(r.nodes=T)}return r.object=a,r;function d(f){const h=[];for(const m in f){const _=f[m];delete _.metadata,h.push(_)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}dn.DEFAULT_UP=new ee(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ee,Fi=new ee,Ac=new ee,ki=new ee,Ls=new ee,Is=new ee,Yp=new ee,Rc=new ee,Cc=new ee,bc=new ee,Pc=new jt,Dc=new jt,Lc=new jt;class di{constructor(e=new ee,n=new ee,r=new ee){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,a){a.subVectors(r,n),ci.subVectors(e,n),a.cross(ci);const u=a.lengthSq();return u>0?a.multiplyScalar(1/Math.sqrt(u)):a.set(0,0,0)}static getBarycoord(e,n,r,a,u){ci.subVectors(a,n),Fi.subVectors(r,n),Ac.subVectors(e,n);const d=ci.dot(ci),f=ci.dot(Fi),h=ci.dot(Ac),m=Fi.dot(Fi),_=Fi.dot(Ac),v=d*m-f*f;if(v===0)return u.set(0,0,0),null;const x=1/v,S=(m*h-f*_)*x,T=(d*_-f*h)*x;return u.set(1-S-T,T,S)}static containsPoint(e,n,r,a){return this.getBarycoord(e,n,r,a,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,n,r,a,u,d,f,h){return this.getBarycoord(e,n,r,a,ki)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(u,ki.x),h.addScaledVector(d,ki.y),h.addScaledVector(f,ki.z),h)}static getInterpolatedAttribute(e,n,r,a,u,d){return Pc.setScalar(0),Dc.setScalar(0),Lc.setScalar(0),Pc.fromBufferAttribute(e,n),Dc.fromBufferAttribute(e,r),Lc.fromBufferAttribute(e,a),d.setScalar(0),d.addScaledVector(Pc,u.x),d.addScaledVector(Dc,u.y),d.addScaledVector(Lc,u.z),d}static isFrontFacing(e,n,r,a){return ci.subVectors(r,n),Fi.subVectors(e,n),ci.cross(Fi).dot(a)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,a){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,r,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,a,u){return di.getInterpolation(e,this.a,this.b,this.c,n,r,a,u)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,a=this.b,u=this.c;let d,f;Ls.subVectors(a,r),Is.subVectors(u,r),Rc.subVectors(e,r);const h=Ls.dot(Rc),m=Is.dot(Rc);if(h<=0&&m<=0)return n.copy(r);Cc.subVectors(e,a);const _=Ls.dot(Cc),v=Is.dot(Cc);if(_>=0&&v<=_)return n.copy(a);const x=h*v-_*m;if(x<=0&&h>=0&&_<=0)return d=h/(h-_),n.copy(r).addScaledVector(Ls,d);bc.subVectors(e,u);const S=Ls.dot(bc),T=Is.dot(bc);if(T>=0&&S<=T)return n.copy(u);const R=S*m-h*T;if(R<=0&&m>=0&&T<=0)return f=m/(m-T),n.copy(r).addScaledVector(Is,f);const y=_*T-S*v;if(y<=0&&v-_>=0&&S-T>=0)return Yp.subVectors(u,a),f=(v-_)/(v-_+(S-T)),n.copy(a).addScaledVector(Yp,f);const g=1/(y+R+x);return d=R*g,f=x*g,n.copy(r).addScaledVector(Ls,d).addScaledVector(Is,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Km={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gr={h:0,s:0,l:0},ol={h:0,s:0,l:0};function Ic(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class yt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,n),this}setRGB(e,n,r,a=Tt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Tt.toWorkingColorSpace(this,a),this}setHSL(e,n,r,a=Tt.workingColorSpace){if(e=o0(e,1),n=gt(n,0,1),r=gt(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,d=2*r-u;this.r=Ic(d,u,e+1/3),this.g=Ic(d,u,e),this.b=Ic(d,u,e-1/3)}return Tt.toWorkingColorSpace(this,a),this}setStyle(e,n=Qn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=a[1],f=a[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=a[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(u,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const r=Km[e.toLowerCase()];return r!==void 0?this.setHex(r,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vi(e.r),this.g=Vi(e.g),this.b=Vi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return Tt.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Tt.workingColorSpace){Tt.fromWorkingColorSpace(xn.copy(this),n);const r=xn.r,a=xn.g,u=xn.b,d=Math.max(r,a,u),f=Math.min(r,a,u);let h,m;const _=(f+d)/2;if(f===d)h=0,m=0;else{const v=d-f;switch(m=_<=.5?v/(d+f):v/(2-d-f),d){case r:h=(a-u)/v+(a<u?6:0);break;case a:h=(u-r)/v+2;break;case u:h=(r-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=_,e}getRGB(e,n=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(xn.copy(this),n),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Qn){Tt.fromWorkingColorSpace(xn.copy(this),e);const n=xn.r,r=xn.g,a=xn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,n,r){return this.getHSL(gr),this.setHSL(gr.h+e,gr.s+n,gr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(gr),e.getHSL(ol);const r=gc(gr.h,ol.h,n),a=gc(gr.s,ol.s,n),u=gc(gr.l,ol.l,n);return this.setHSL(r,a,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,a=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*a,this.g=u[1]*n+u[4]*r+u[7]*a,this.b=u[2]*n+u[5]*r+u[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new yt;yt.NAMES=Km;let T0=0;class Wo extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Bs,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jc,this.blendDst=qc,this.blendEquation=Yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==jc&&(r.blendSrc=this.blendSrc),this.blendDst!==qc&&(r.blendDst=this.blendDst),this.blendEquation!==Yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(u){const d=[];for(const f in u){const h=u[f];delete h.metadata,d.push(h)}return d}if(n){const u=a(e.textures),d=a(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const a=n.length;r=new Array(a);for(let u=0;u!==a;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class $m extends Wo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=Dm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new ee,al=new wt;class Si{constructor(e,n,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Np,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let a=0,u=this.itemSize;a<u;a++)this.array[e+a]=n.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)al.fromBufferAttribute(this,n),al.applyMatrix3(e),this.setXY(n,al.x,al.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Lo(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Nn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Lo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Lo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Lo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Lo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,a){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,n,r,a,u){return e*=this.itemSize,this.normalized&&(n=Nn(n,this.array),r=Nn(r,this.array),a=Nn(a,this.array),u=Nn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Np&&(e.usage=this.usage),e}}class Zm extends Si{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class Qm extends Si{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class Wn extends Si{constructor(e,n,r){super(new Float32Array(e),n,r)}}let w0=0;const Zn=new Gt,Uc=new dn,Us=new ee,Gn=new Go,Fo=new Go,an=new ee;class Wi extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xm(e)?Qm:Zm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ot().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,r){return Zn.makeTranslation(e,n,r),this.applyMatrix4(Zn),this}scale(e,n,r){return Zn.makeScale(e,n,r),this.applyMatrix4(Zn),this}lookAt(e){return Uc.lookAt(e),Uc.updateMatrix(),this.applyMatrix4(Uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let a=0,u=e.length;a<u;a++){const d=e[a];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Wn(r,3))}else{const r=Math.min(e.length,n.count);for(let a=0;a<r;a++){const u=e[a];n.setXYZ(a,u.x,u.y,u.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){const u=n[r];Gn.setFromBufferAttribute(u),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const r=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),n)for(let u=0,d=n.length;u<d;u++){const f=n[u];Fo.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Gn.min,Fo.min),Gn.expandByPoint(an),an.addVectors(Gn.max,Fo.max),Gn.expandByPoint(an)):(Gn.expandByPoint(Fo.min),Gn.expandByPoint(Fo.max))}Gn.getCenter(r);let a=0;for(let u=0,d=e.count;u<d;u++)an.fromBufferAttribute(e,u),a=Math.max(a,r.distanceToSquared(an));if(n)for(let u=0,d=n.length;u<d;u++){const f=n[u],h=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)an.fromBufferAttribute(f,m),h&&(Us.fromBufferAttribute(e,m),an.add(Us)),a=Math.max(a,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,a=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),f=[],h=[];for(let V=0;V<r.count;V++)f[V]=new ee,h[V]=new ee;const m=new ee,_=new ee,v=new ee,x=new wt,S=new wt,T=new wt,R=new ee,y=new ee;function g(V,C,w){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),x.fromBufferAttribute(u,V),S.fromBufferAttribute(u,C),T.fromBufferAttribute(u,w),_.sub(m),v.sub(m),S.sub(x),T.sub(x);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(R.copy(_).multiplyScalar(T.y).addScaledVector(v,-S.y).multiplyScalar(z),y.copy(v).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(z),f[V].add(R),f[C].add(R),f[w].add(R),h[V].add(y),h[C].add(y),h[w].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:e.count}]);for(let V=0,C=F.length;V<C;++V){const w=F[V],z=w.start,ie=w.count;for(let $=z,oe=z+ie;$<oe;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const L=new ee,b=new ee,O=new ee,U=new ee;function I(V){O.fromBufferAttribute(a,V),U.copy(O);const C=f[V];L.copy(C),L.sub(O.multiplyScalar(O.dot(C))).normalize(),b.crossVectors(U,C);const z=b.dot(h[V])<0?-1:1;d.setXYZW(V,L.x,L.y,L.z,z)}for(let V=0,C=F.length;V<C;++V){const w=F[V],z=w.start,ie=w.count;for(let $=z,oe=z+ie;$<oe;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const a=new ee,u=new ee,d=new ee,f=new ee,h=new ee,m=new ee,_=new ee,v=new ee;if(e)for(let x=0,S=e.count;x<S;x+=3){const T=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);a.fromBufferAttribute(n,T),u.fromBufferAttribute(n,R),d.fromBufferAttribute(n,y),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,y),f.add(_),h.add(_),m.add(_),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,S=n.count;x<S;x+=3)a.fromBufferAttribute(n,x+0),u.fromBufferAttribute(n,x+1),d.fromBufferAttribute(n,x+2),_.subVectors(d,u),v.subVectors(a,u),_.cross(v),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)an.fromBufferAttribute(e,n),an.normalize(),e.setXYZ(n,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const m=f.array,_=f.itemSize,v=f.normalized,x=new m.constructor(h.length*_);let S=0,T=0;for(let R=0,y=h.length;R<y;R++){f.isInterleavedBufferAttribute?S=h[R]*f.data.stride+f.offset:S=h[R]*_;for(let g=0;g<_;g++)x[T++]=m[S++]}return new Si(x,_,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Wi,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,r);n.setAttribute(f,m)}const u=this.morphAttributes;for(const f in u){const h=[],m=u[f];for(let _=0,v=m.length;_<v;_++){const x=m[_],S=e(x,r);h.push(S)}n.morphAttributes[f]=h}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,h=d.length;f<h;f++){const m=d[f];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let u=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],_=[];for(let v=0,x=m.length;v<x;v++){const S=m[v];_.push(S.toJSON(e.data))}_.length>0&&(a[h]=_,u=!0)}u&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere={center:f.center.toArray(),radius:f.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(n));const a=e.attributes;for(const m in a){const _=a[m];this.setAttribute(m,_.clone(n))}const u=e.morphAttributes;for(const m in u){const _=[],v=u[m];for(let x=0,S=v.length;x<S;x++)_.push(v[x].clone(n));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const v=d[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kp=new Gt,Hr=new Ym,ll=new Gd,$p=new ee,ul=new ee,cl=new ee,dl=new ee,Nc=new ee,fl=new ee,Zp=new ee,hl=new ee;class ei extends dn{constructor(e=new Wi,n=new $m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const a=n[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=a.length;u<d;u++){const f=a[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(e,n){const r=this.geometry,a=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(u&&f){fl.set(0,0,0);for(let h=0,m=u.length;h<m;h++){const _=f[h],v=u[h];_!==0&&(Nc.fromBufferAttribute(v,e),d?fl.addScaledVector(Nc,_):fl.addScaledVector(Nc.sub(n),_))}n.add(fl)}return n}raycast(e,n){const r=this.geometry,a=this.material,u=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ll.copy(r.boundingSphere),ll.applyMatrix4(u),Hr.copy(e.ray).recast(e.near),!(ll.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(ll,$p)===null||Hr.origin.distanceToSquared($p)>(e.far-e.near)**2))&&(Kp.copy(u).invert(),Hr.copy(e.ray).applyMatrix4(Kp),!(r.boundingBox!==null&&Hr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,r){let a;const u=this.geometry,d=this.material,f=u.index,h=u.attributes.position,m=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,x=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(d))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=d[y.materialIndex],F=Math.max(y.start,S.start),L=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let b=F,O=L;b<O;b+=3){const U=f.getX(b),I=f.getX(b+1),V=f.getX(b+2);a=pl(this,g,e,r,m,_,v,U,I,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(f.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const F=f.getX(y),L=f.getX(y+1),b=f.getX(y+2);a=pl(this,d,e,r,m,_,v,F,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}else if(h!==void 0)if(Array.isArray(d))for(let T=0,R=x.length;T<R;T++){const y=x[T],g=d[y.materialIndex],F=Math.max(y.start,S.start),L=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let b=F,O=L;b<O;b+=3){const U=b,I=b+1,V=b+2;a=pl(this,g,e,r,m,_,v,U,I,V),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=y.materialIndex,n.push(a))}}else{const T=Math.max(0,S.start),R=Math.min(h.count,S.start+S.count);for(let y=T,g=R;y<g;y+=3){const F=y,L=y+1,b=y+2;a=pl(this,d,e,r,m,_,v,F,L,b),a&&(a.faceIndex=Math.floor(y/3),n.push(a))}}}}function A0(s,e,n,r,a,u,d,f){let h;if(e.side===Fn?h=r.intersectTriangle(d,u,a,!0,f):h=r.intersectTriangle(a,u,d,e.side===Sr,f),h===null)return null;hl.copy(f),hl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(hl);return m<n.near||m>n.far?null:{distance:m,point:hl.clone(),object:s}}function pl(s,e,n,r,a,u,d,f,h,m){s.getVertexPosition(f,ul),s.getVertexPosition(h,cl),s.getVertexPosition(m,dl);const _=A0(s,e,n,r,ul,cl,dl,Zp);if(_){const v=new ee;di.getBarycoord(Zp,ul,cl,dl,v),a&&(_.uv=di.getInterpolatedAttribute(a,f,h,m,v,new wt)),u&&(_.uv1=di.getInterpolatedAttribute(u,f,h,m,v,new wt)),d&&(_.normal=di.getInterpolatedAttribute(d,f,h,m,v,new ee),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:f,b:h,c:m,normal:new ee,materialIndex:0};di.getNormal(ul,cl,dl,x.normal),_.face=x,_.barycoord=v}return _}class Zs extends Wi{constructor(e=1,n=1,r=1,a=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:a,heightSegments:u,depthSegments:d};const f=this;a=Math.floor(a),u=Math.floor(u),d=Math.floor(d);const h=[],m=[],_=[],v=[];let x=0,S=0;T("z","y","x",-1,-1,r,n,e,d,u,0),T("z","y","x",1,-1,r,n,-e,d,u,1),T("x","z","y",1,1,e,r,n,a,d,2),T("x","z","y",1,-1,e,r,-n,a,d,3),T("x","y","z",1,-1,e,n,r,a,u,4),T("x","y","z",-1,-1,e,n,-r,a,u,5),this.setIndex(h),this.setAttribute("position",new Wn(m,3)),this.setAttribute("normal",new Wn(_,3)),this.setAttribute("uv",new Wn(v,2));function T(R,y,g,F,L,b,O,U,I,V,C){const w=b/I,z=O/V,ie=b/2,$=O/2,oe=U/2,he=I+1,se=V+1;let me=0,H=0;const ue=new ee;for(let le=0;le<se;le++){const N=le*z-$;for(let re=0;re<he;re++){const Ue=re*w-ie;ue[R]=Ue*F,ue[y]=N*L,ue[g]=oe,m.push(ue.x,ue.y,ue.z),ue[R]=0,ue[y]=0,ue[g]=U>0?1:-1,_.push(ue.x,ue.y,ue.z),v.push(re/I),v.push(1-le/V),me+=1}}for(let le=0;le<V;le++)for(let N=0;N<I;N++){const re=x+N+he*le,Ue=x+N+he*(le+1),Q=x+(N+1)+he*(le+1),ce=x+(N+1)+he*le;h.push(re,Ue,ce),h.push(Ue,Q,ce),H+=6}f.addGroup(S,H,C),S+=H,x+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const a=s[n][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=a.clone():Array.isArray(a)?e[n][r]=a.slice():e[n][r]=a}}return e}function An(s){const e={};for(let n=0;n<s.length;n++){const r=Ks(s[n]);for(const a in r)e[a]=r[a]}return e}function R0(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function Jm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const C0={clone:Ks,merge:An};var b0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mr extends Wo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=b0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const d=this.uniforms[a].value;d&&d.isTexture?n.uniforms[a]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[a]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[a]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[a]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[a]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[a]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[a]={type:"m4",value:d.toArray()}:n.uniforms[a]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}}class eg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Hi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _r=new ee,Qp=new wt,Jp=new wt;class Jn extends eg{constructor(e=50,n=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Dd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dd*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){_r.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_r.x,_r.y).multiplyScalar(-e/_r.z),_r.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(_r.x,_r.y).multiplyScalar(-e/_r.z)}getViewSize(e,n){return this.getViewBounds(e,Qp,Jp),n.subVectors(Jp,Qp)}setViewOffset(e,n,r,a,u,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(mc*.5*this.fov)/this.zoom,r=2*n,a=this.aspect*r,u=-.5*a;const d=this.view;if(this.view!==null&&this.view.enabled){const h=d.fullWidth,m=d.fullHeight;u+=d.offsetX*a/h,n-=d.offsetY*r/m,a*=d.width/h,r*=d.height/m}const f=this.filmOffset;f!==0&&(u+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+a,n,n-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Fs=1;class D0 extends dn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Jn(Ns,Fs,e,n);a.layers=this.layers,this.add(a);const u=new Jn(Ns,Fs,e,n);u.layers=this.layers,this.add(u);const d=new Jn(Ns,Fs,e,n);d.layers=this.layers,this.add(d);const f=new Jn(Ns,Fs,e,n);f.layers=this.layers,this.add(f);const h=new Jn(Ns,Fs,e,n);h.layers=this.layers,this.add(h);const m=new Jn(Ns,Fs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,a,u,d,f,h]=n;for(const m of n)this.remove(m);if(e===Hi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Rl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,f,h,m,_]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(n,u),e.setRenderTarget(r,1,a),e.render(n,d),e.setRenderTarget(r,2,a),e.render(n,f),e.setRenderTarget(r,3,a),e.render(n,h),e.setRenderTarget(r,4,a),e.render(n,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),e.render(n,_),e.setRenderTarget(v,x,S),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class tg extends kn{constructor(e,n,r,a,u,d,f,h,m,_){e=e!==void 0?e:[],n=n!==void 0?n:Ws,super(e,n,r,a,u,d,f,h,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class L0 extends Jr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new tg(a,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:yi}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new Zs(5,5,5),u=new Mr({name:"CubemapFromEquirect",uniforms:Ks(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Fn,blending:xr});u.uniforms.tEquirect.value=n;const d=new ei(a,u),f=n.minFilter;return n.minFilter===Zr&&(n.minFilter=yi),new D0(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n,r,a){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,a);e.setRenderTarget(u)}}class I0 extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fc=new ee,U0=new ee,N0=new ot;class jr{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,a){return this.normal.set(e,n,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const a=Fc.subVectors(r,n).cross(U0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const r=e.delta(Fc),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/a;return u<0||u>1?null:n.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||N0.getNormalMatrix(e),a=this.coplanarPoint(Fc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Gd,ml=new ee;class Xd{constructor(e=new jr,n=new jr,r=new jr,a=new jr,u=new jr,d=new jr){this.planes=[e,n,r,a,u,d]}set(e,n,r,a,u,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(a),f[4].copy(u),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Hi){const r=this.planes,a=e.elements,u=a[0],d=a[1],f=a[2],h=a[3],m=a[4],_=a[5],v=a[6],x=a[7],S=a[8],T=a[9],R=a[10],y=a[11],g=a[12],F=a[13],L=a[14],b=a[15];if(r[0].setComponents(h-u,x-m,y-S,b-g).normalize(),r[1].setComponents(h+u,x+m,y+S,b+g).normalize(),r[2].setComponents(h+d,x+_,y+T,b+F).normalize(),r[3].setComponents(h-d,x-_,y-T,b-F).normalize(),r[4].setComponents(h-f,x-v,y-R,b-L).normalize(),n===Hi)r[5].setComponents(h+f,x+v,y+R,b+L).normalize();else if(n===Rl)r[5].setComponents(f,v,R,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){return Vr.center.set(0,0,0),Vr.radius=.7071067811865476,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const n=this.planes,r=e.center,a=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const a=n[r];if(ml.x=a.normal.x>0?e.max.x:e.min.x,ml.y=a.normal.y>0?e.max.y:e.min.y,ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(ml)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ng extends kn{constructor(e,n,r,a,u,d,f,h,m,_=Hs){if(_!==Hs&&_!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===Hs&&(r=Qr),r===void 0&&_===qs&&(r=js),super(null,a,u,d,f,h,_,r,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=f!==void 0?f:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class jd extends Wi{constructor(e=1,n=1,r=1,a=32,u=1,d=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:r,radialSegments:a,heightSegments:u,openEnded:d,thetaStart:f,thetaLength:h};const m=this;a=Math.floor(a),u=Math.floor(u);const _=[],v=[],x=[],S=[];let T=0;const R=[],y=r/2;let g=0;F(),d===!1&&(e>0&&L(!0),n>0&&L(!1)),this.setIndex(_),this.setAttribute("position",new Wn(v,3)),this.setAttribute("normal",new Wn(x,3)),this.setAttribute("uv",new Wn(S,2));function F(){const b=new ee,O=new ee;let U=0;const I=(n-e)/r;for(let V=0;V<=u;V++){const C=[],w=V/u,z=w*(n-e)+e;for(let ie=0;ie<=a;ie++){const $=ie/a,oe=$*h+f,he=Math.sin(oe),se=Math.cos(oe);O.x=z*he,O.y=-w*r+y,O.z=z*se,v.push(O.x,O.y,O.z),b.set(he,I,se).normalize(),x.push(b.x,b.y,b.z),S.push($,1-w),C.push(T++)}R.push(C)}for(let V=0;V<a;V++)for(let C=0;C<u;C++){const w=R[C][V],z=R[C+1][V],ie=R[C+1][V+1],$=R[C][V+1];(e>0||C!==0)&&(_.push(w,z,$),U+=3),(n>0||C!==u-1)&&(_.push(z,ie,$),U+=3)}m.addGroup(g,U,0),g+=U}function L(b){const O=T,U=new wt,I=new ee;let V=0;const C=b===!0?e:n,w=b===!0?1:-1;for(let ie=1;ie<=a;ie++)v.push(0,y*w,0),x.push(0,w,0),S.push(.5,.5),T++;const z=T;for(let ie=0;ie<=a;ie++){const oe=ie/a*h+f,he=Math.cos(oe),se=Math.sin(oe);I.x=C*se,I.y=y*w,I.z=C*he,v.push(I.x,I.y,I.z),x.push(0,w,0),U.x=he*.5+.5,U.y=se*.5*w+.5,S.push(U.x,U.y),T++}for(let ie=0;ie<a;ie++){const $=O+ie,oe=z+ie;b===!0?_.push(oe,oe+1,$):_.push(oe+1,oe,$),V+=3}m.addGroup(g,V,b===!0?1:2),g+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jd(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pl extends Wi{constructor(e=1,n=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:a};const u=e/2,d=n/2,f=Math.floor(r),h=Math.floor(a),m=f+1,_=h+1,v=e/f,x=n/h,S=[],T=[],R=[],y=[];for(let g=0;g<_;g++){const F=g*x-d;for(let L=0;L<m;L++){const b=L*v-u;T.push(b,-F,0),R.push(0,0,1),y.push(L/f),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let F=0;F<f;F++){const L=F+m*g,b=F+m*(g+1),O=F+1+m*(g+1),U=F+1+m*g;S.push(L,b,U),S.push(b,O,U)}this.setIndex(S),this.setAttribute("position",new Wn(T,3)),this.setAttribute("normal",new Wn(R,3)),this.setAttribute("uv",new Wn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pl(e.width,e.height,e.widthSegments,e.heightSegments)}}class qd extends Wi{constructor(e=1,n=.4,r=12,a=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:a,arc:u},r=Math.floor(r),a=Math.floor(a);const d=[],f=[],h=[],m=[],_=new ee,v=new ee,x=new ee;for(let S=0;S<=r;S++)for(let T=0;T<=a;T++){const R=T/a*u,y=S/r*Math.PI*2;v.x=(e+n*Math.cos(y))*Math.cos(R),v.y=(e+n*Math.cos(y))*Math.sin(R),v.z=n*Math.sin(y),f.push(v.x,v.y,v.z),_.x=e*Math.cos(R),_.y=e*Math.sin(R),x.subVectors(v,_).normalize(),h.push(x.x,x.y,x.z),m.push(T/a),m.push(S/r)}for(let S=1;S<=r;S++)for(let T=1;T<=a;T++){const R=(a+1)*S+T-1,y=(a+1)*(S-1)+T-1,g=(a+1)*(S-1)+T,F=(a+1)*S+T;d.push(R,y,F),d.push(y,g,F)}this.setIndex(d),this.setAttribute("position",new Wn(f,3)),this.setAttribute("normal",new Wn(h,3)),this.setAttribute("uv",new Wn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class F0 extends Wo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gm,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class k0 extends Wo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$v,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class O0 extends Wo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ig extends dn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class z0 extends ig{constructor(e,n,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const kc=new Gt,em=new ee,tm=new ee;class B0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xd,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;em.setFromMatrixPosition(e.matrixWorld),n.position.copy(em),tm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(tm),n.updateMatrixWorld(),kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class rg extends eg{constructor(e=-1,n=1,r=1,a=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=a,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,a,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=a,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let u=r-e,d=r+e,f=a+n,h=a-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,d=u+m*this.view.width,f-=_*this.view.offsetY,h=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class H0 extends B0{constructor(){super(new rg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V0 extends ig{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new H0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class G0 extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const nm=new Gt;class W0{constructor(e,n,r=0,a=1/0){this.ray=new Ym(e,n),this.near=r,this.far=a,this.camera=null,this.layers=new Wd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return nm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nm),this}intersectObject(e,n=!0,r=[]){return Ld(e,this,r,n),r.sort(im),r}intersectObjects(e,n=!0,r=[]){for(let a=0,u=e.length;a<u;a++)Ld(e[a],this,r,n);return r.sort(im),r}}function im(s,e){return s.distance-e.distance}function Ld(s,e,n,r){let a=!0;if(s.layers.test(e.layers)&&s.raycast(e,n)===!1&&(a=!1),a===!0&&r===!0){const u=s.children;for(let d=0,f=u.length;d<f;d++)Ld(u[d],e,n,!0)}}function rm(s,e,n,r){const a=X0(r);switch(n){case Fm:return s*e;case Om:return s*e;case zm:return s*e*2;case Bm:return s*e/a.components*a.byteLength;case Bd:return s*e/a.components*a.byteLength;case Hm:return s*e*2/a.components*a.byteLength;case Hd:return s*e*2/a.components*a.byteLength;case km:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case Vd:return s*e*4/a.components*a.byteLength;case yl:case Sl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ml:case El:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case od:case ld:return Math.max(s,16)*Math.max(e,8)/4;case sd:case ad:return Math.max(s,8)*Math.max(e,8)/2;case ud:case cd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case dd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case md:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case gd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _d:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case vd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case yd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Sd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Md:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Ed:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Td:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case wd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Tl:case Ad:case Rd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Vm:case Cd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case bd:case Pd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function X0(s){switch(s){case Gi:case Im:return{byteLength:1,components:1};case zo:case Um:case Bo:return{byteLength:2,components:1};case Od:case zd:return{byteLength:2,components:4};case Qr:case kd:case Bi:return{byteLength:4,components:1};case Nm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function sg(){let s=null,e=!1,n=null,r=null;function a(u,d){n(u,d),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function j0(s){const e=new WeakMap;function n(f,h){const m=f.array,_=f.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(h,x),s.bufferData(h,m,_),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function r(f,h,m){const _=h.array,v=h.updateRanges;if(s.bindBuffer(m,f),v.length===0)s.bufferSubData(m,0,_);else{v.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<v.length;S++){const T=v[x],R=v[S];R.start<=T.start+T.count+1?T.count=Math.max(T.count,R.start+R.count-T.start):(++x,v[x]=R)}v.length=x+1;for(let S=0,T=v.length;S<T;S++){const R=v[S];s.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function d(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,n(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,h),m.version=f.version}}return{get:a,remove:u,update:d}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,K0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ex=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ix=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ox=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ax=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_x=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ex="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ax=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ix=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ux=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Nx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ox=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,zx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$x=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ny=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ry=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ay=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,uy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,dy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,py=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,my=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,My=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ey=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ty=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ay=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ry=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,by=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Py=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ny=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ky=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Oy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,By=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ky=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Jy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,eS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,tS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,aS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,hS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,pS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,_S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,TS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:q0,alphahash_pars_fragment:Y0,alphamap_fragment:K0,alphamap_pars_fragment:$0,alphatest_fragment:Z0,alphatest_pars_fragment:Q0,aomap_fragment:J0,aomap_pars_fragment:ex,batching_pars_vertex:tx,batching_vertex:nx,begin_vertex:ix,beginnormal_vertex:rx,bsdfs:sx,iridescence_fragment:ox,bumpmap_pars_fragment:ax,clipping_planes_fragment:lx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:cx,clipping_planes_vertex:dx,color_fragment:fx,color_pars_fragment:hx,color_pars_vertex:px,color_vertex:mx,common:gx,cube_uv_reflection_fragment:_x,defaultnormal_vertex:vx,displacementmap_pars_vertex:xx,displacementmap_vertex:yx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Mx,colorspace_fragment:Ex,colorspace_pars_fragment:Tx,envmap_fragment:wx,envmap_common_pars_fragment:Ax,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:zx,envmap_vertex:bx,fog_vertex:Px,fog_pars_vertex:Dx,fog_fragment:Lx,fog_pars_fragment:Ix,gradientmap_pars_fragment:Ux,lightmap_pars_fragment:Nx,lights_lambert_fragment:Fx,lights_lambert_pars_fragment:kx,lights_pars_begin:Ox,lights_toon_fragment:Bx,lights_toon_pars_fragment:Hx,lights_phong_fragment:Vx,lights_phong_pars_fragment:Gx,lights_physical_fragment:Wx,lights_physical_pars_fragment:Xx,lights_fragment_begin:jx,lights_fragment_maps:qx,lights_fragment_end:Yx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:$x,logdepthbuf_pars_vertex:Zx,logdepthbuf_vertex:Qx,map_fragment:Jx,map_pars_fragment:ey,map_particle_fragment:ty,map_particle_pars_fragment:ny,metalnessmap_fragment:iy,metalnessmap_pars_fragment:ry,morphinstance_vertex:sy,morphcolor_vertex:oy,morphnormal_vertex:ay,morphtarget_pars_vertex:ly,morphtarget_vertex:uy,normal_fragment_begin:cy,normal_fragment_maps:dy,normal_pars_fragment:fy,normal_pars_vertex:hy,normal_vertex:py,normalmap_pars_fragment:my,clearcoat_normal_fragment_begin:gy,clearcoat_normal_fragment_maps:_y,clearcoat_pars_fragment:vy,iridescence_pars_fragment:xy,opaque_fragment:yy,packing:Sy,premultiplied_alpha_fragment:My,project_vertex:Ey,dithering_fragment:Ty,dithering_pars_fragment:wy,roughnessmap_fragment:Ay,roughnessmap_pars_fragment:Ry,shadowmap_pars_fragment:Cy,shadowmap_pars_vertex:by,shadowmap_vertex:Py,shadowmask_pars_fragment:Dy,skinbase_vertex:Ly,skinning_pars_vertex:Iy,skinning_vertex:Uy,skinnormal_vertex:Ny,specularmap_fragment:Fy,specularmap_pars_fragment:ky,tonemapping_fragment:Oy,tonemapping_pars_fragment:zy,transmission_fragment:By,transmission_pars_fragment:Hy,uv_pars_fragment:Vy,uv_pars_vertex:Gy,uv_vertex:Wy,worldpos_vertex:Xy,background_vert:jy,background_frag:qy,backgroundCube_vert:Yy,backgroundCube_frag:Ky,cube_vert:$y,cube_frag:Zy,depth_vert:Qy,depth_frag:Jy,distanceRGBA_vert:eS,distanceRGBA_frag:tS,equirect_vert:nS,equirect_frag:iS,linedashed_vert:rS,linedashed_frag:sS,meshbasic_vert:oS,meshbasic_frag:aS,meshlambert_vert:lS,meshlambert_frag:uS,meshmatcap_vert:cS,meshmatcap_frag:dS,meshnormal_vert:fS,meshnormal_frag:hS,meshphong_vert:pS,meshphong_frag:mS,meshphysical_vert:gS,meshphysical_frag:_S,meshtoon_vert:vS,meshtoon_frag:xS,points_vert:yS,points_frag:SS,shadow_vert:MS,shadow_frag:ES,sprite_vert:TS,sprite_frag:wS},be={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},xi={basic:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:An([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:An([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:An([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new yt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:An([be.points,be.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:An([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:An([be.common,be.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:An([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:An([be.sprite,be.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:An([be.common,be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:An([be.lights,be.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const gl={r:0,b:0,g:0},Gr=new Mi,AS=new Gt;function RS(s,e,n,r,a,u,d){const f=new yt(0);let h=u===!0?0:1,m,_,v=null,x=0,S=null;function T(L){let b=L.isScene===!0?L.background:null;return b&&b.isTexture&&(b=(L.backgroundBlurriness>0?n:e).get(b)),b}function R(L){let b=!1;const O=T(L);O===null?g(f,h):O&&O.isColor&&(g(O,1),b=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?r.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(s.autoClear||b)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(L,b){const O=T(b);O&&(O.isCubeTexture||O.mapping===bl)?(_===void 0&&(_=new ei(new Zs(1,1,1),new Mr({name:"BackgroundCubeMaterial",uniforms:Ks(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(U,I,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(_)),Gr.copy(b.backgroundRotation),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),_.material.uniforms.envMap.value=O,_.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(AS.makeRotationFromEuler(Gr)),_.material.toneMapped=Tt.getTransfer(O.colorSpace)!==Dt,(v!==O||x!==O.version||S!==s.toneMapping)&&(_.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),_.layers.enableAll(),L.unshift(_,_.geometry,_.material,0,0,null)):O&&O.isTexture&&(m===void 0&&(m=new ei(new Pl(2,2),new Mr({name:"BackgroundMaterial",uniforms:Ks(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=O,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(O.colorSpace)!==Dt,O.matrixAutoUpdate===!0&&O.updateMatrix(),m.material.uniforms.uvTransform.value.copy(O.matrix),(v!==O||x!==O.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,v=O,x=O.version,S=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function g(L,b){L.getRGB(gl,Jm(s)),r.buffers.color.setClear(gl.r,gl.g,gl.b,b,d)}function F(){_!==void 0&&(_.geometry.dispose(),_.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return f},setClearColor:function(L,b=1){f.set(L),h=b,g(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(L){h=L,g(f,h)},render:R,addToRenderList:y,dispose:F}}function CS(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=x(null);let u=a,d=!1;function f(w,z,ie,$,oe){let he=!1;const se=v($,ie,z);u!==se&&(u=se,m(u.object)),he=S(w,$,ie,oe),he&&T(w,$,ie,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(he||d)&&(d=!1,b(w,z,ie,$),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function h(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function _(w){return s.deleteVertexArray(w)}function v(w,z,ie){const $=ie.wireframe===!0;let oe=r[w.id];oe===void 0&&(oe={},r[w.id]=oe);let he=oe[z.id];he===void 0&&(he={},oe[z.id]=he);let se=he[$];return se===void 0&&(se=x(h()),he[$]=se),se}function x(w){const z=[],ie=[],$=[];for(let oe=0;oe<n;oe++)z[oe]=0,ie[oe]=0,$[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:ie,attributeDivisors:$,object:w,attributes:{},index:null}}function S(w,z,ie,$){const oe=u.attributes,he=z.attributes;let se=0;const me=ie.getAttributes();for(const H in me)if(me[H].location>=0){const le=oe[H];let N=he[H];if(N===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(N=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(N=w.instanceColor)),le===void 0||le.attribute!==N||N&&le.data!==N.data)return!0;se++}return u.attributesNum!==se||u.index!==$}function T(w,z,ie,$){const oe={},he=z.attributes;let se=0;const me=ie.getAttributes();for(const H in me)if(me[H].location>=0){let le=he[H];le===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(le=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(le=w.instanceColor));const N={};N.attribute=le,le&&le.data&&(N.data=le.data),oe[H]=N,se++}u.attributes=oe,u.attributesNum=se,u.index=$}function R(){const w=u.newAttributes;for(let z=0,ie=w.length;z<ie;z++)w[z]=0}function y(w){g(w,0)}function g(w,z){const ie=u.newAttributes,$=u.enabledAttributes,oe=u.attributeDivisors;ie[w]=1,$[w]===0&&(s.enableVertexAttribArray(w),$[w]=1),oe[w]!==z&&(s.vertexAttribDivisor(w,z),oe[w]=z)}function F(){const w=u.newAttributes,z=u.enabledAttributes;for(let ie=0,$=z.length;ie<$;ie++)z[ie]!==w[ie]&&(s.disableVertexAttribArray(ie),z[ie]=0)}function L(w,z,ie,$,oe,he,se){se===!0?s.vertexAttribIPointer(w,z,ie,oe,he):s.vertexAttribPointer(w,z,ie,$,oe,he)}function b(w,z,ie,$){R();const oe=$.attributes,he=ie.getAttributes(),se=z.defaultAttributeValues;for(const me in he){const H=he[me];if(H.location>=0){let ue=oe[me];if(ue===void 0&&(me==="instanceMatrix"&&w.instanceMatrix&&(ue=w.instanceMatrix),me==="instanceColor"&&w.instanceColor&&(ue=w.instanceColor)),ue!==void 0){const le=ue.normalized,N=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ue=re.buffer,Q=re.type,ce=re.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ue.gpuType===kd;if(ue.isInterleavedBufferAttribute){const xe=ue.data,we=xe.stride,Ne=ue.offset;if(xe.isInstancedInterleavedBuffer){for(let Qe=0;Qe<H.locationSize;Qe++)g(H.location+Qe,xe.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Qe=0;Qe<H.locationSize;Qe++)y(H.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let Qe=0;Qe<H.locationSize;Qe++)L(H.location+Qe,N/H.locationSize,Q,le,we*ce,(Ne+N/H.locationSize*Qe)*ce,Ee)}else{if(ue.isInstancedBufferAttribute){for(let xe=0;xe<H.locationSize;xe++)g(H.location+xe,ue.meshPerAttribute);w.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<H.locationSize;xe++)y(H.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Ue);for(let xe=0;xe<H.locationSize;xe++)L(H.location+xe,N/H.locationSize,Q,le,N*ce,N/H.locationSize*xe*ce,Ee)}}else if(se!==void 0){const le=se[me];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(H.location,le);break;case 3:s.vertexAttrib3fv(H.location,le);break;case 4:s.vertexAttrib4fv(H.location,le);break;default:s.vertexAttrib1fv(H.location,le)}}}}F()}function O(){V();for(const w in r){const z=r[w];for(const ie in z){const $=z[ie];for(const oe in $)_($[oe].object),delete $[oe];delete z[ie]}delete r[w]}}function U(w){if(r[w.id]===void 0)return;const z=r[w.id];for(const ie in z){const $=z[ie];for(const oe in $)_($[oe].object),delete $[oe];delete z[ie]}delete r[w.id]}function I(w){for(const z in r){const ie=r[z];if(ie[w.id]===void 0)continue;const $=ie[w.id];for(const oe in $)_($[oe].object),delete $[oe];delete ie[w.id]}}function V(){C(),d=!0,u!==a&&(u=a,m(u.object))}function C(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:V,resetDefaultState:C,dispose:O,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:R,enableAttribute:y,disableUnusedAttributes:F}}function bS(s,e,n){let r;function a(m){r=m}function u(m,_){s.drawArrays(r,m,_),n.update(_,r,1)}function d(m,_,v){v!==0&&(s.drawArraysInstanced(r,m,_,v),n.update(_,r,v))}function f(m,_,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,v);let S=0;for(let T=0;T<v;T++)S+=_[T];n.update(S,r,1)}function h(m,_,v,x){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<m.length;T++)d(m[T],_[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,v);let T=0;for(let R=0;R<v;R++)T+=_[R]*x[R];n.update(T,r,1)}}this.setMode=a,this.render=u,this.renderInstances=d,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function PS(s,e,n,r){let a;function u(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function d(I){return!(I!==fi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(I){const V=I===Bo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Gi&&r.convert(I)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Bi&&!V)}function h(I){if(I==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const _=h(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const v=n.logarithmicDepthBuffer===!0,x=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),F=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),O=T>0,U=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:h,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:R,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:F,maxVaryings:L,maxFragmentUniforms:b,vertexTextures:O,maxSamples:U}}function DS(s){const e=this;let n=null,r=0,a=!1,u=!1;const d=new jr,f=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const S=v.length!==0||x||r!==0||a;return a=x,r=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,x){n=_(v,x,0)},this.setState=function(v,x,S){const T=v.clippingPlanes,R=v.clipIntersection,y=v.clipShadows,g=s.get(v);if(!a||T===null||T.length===0||u&&!y)u?_(null):m();else{const F=u?0:r,L=F*4;let b=g.clippingState||null;h.value=b,b=_(T,x,L,S);for(let O=0;O!==L;++O)b[O]=n[O];g.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=F}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(v,x,S,T){const R=v!==null?v.length:0;let y=null;if(R!==0){if(y=h.value,T!==!0||y===null){const g=S+R*4,F=x.matrixWorldInverse;f.getNormalMatrix(F),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,b=S;L!==R;++L,b+=4)d.copy(v[L]).applyMatrix4(F,f),d.normal.toArray(y,b),y[b+3]=d.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function LS(s){let e=new WeakMap;function n(d,f){return f===td?d.mapping=Ws:f===nd&&(d.mapping=Xs),d}function r(d){if(d&&d.isTexture){const f=d.mapping;if(f===td||f===nd)if(e.has(d)){const h=e.get(d).texture;return n(h,d.mapping)}else{const h=d.image;if(h&&h.height>0){const m=new L0(h.height);return m.fromEquirectangularTexture(s,d),e.set(d,m),d.addEventListener("dispose",a),n(m.texture,d.mapping)}else return null}}return d}function a(d){const f=d.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const zs=4,sm=[.125,.215,.35,.446,.526,.582],Kr=20,Oc=new rg,om=new yt;let zc=null,Bc=0,Hc=0,Vc=!1;const qr=(1+Math.sqrt(5))/2,ks=1/qr,am=[new ee(-qr,ks,0),new ee(qr,ks,0),new ee(-ks,0,qr),new ee(ks,0,qr),new ee(0,qr,-ks),new ee(0,qr,ks),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class lm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,r=.1,a=100){zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(e,r,a,u),n>0&&this._blur(u,0,0,n),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zc,Bc,Hc),this._renderer.xr.enabled=Vc,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ws||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zc=this._renderer.getRenderTarget(),Bc=this._renderer.getActiveCubeFace(),Hc=this._renderer.getActiveMipmapLevel(),Vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Bo,format:fi,colorSpace:Ys,depthBuffer:!1},a=um(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IS(u)),this._blurMaterial=US(u,e,n)}return a}_compileMaterial(e){const n=new ei(this._lodPlanes[0],e);this._renderer.compile(n,Oc)}_sceneToCubeUV(e,n,r,a){const f=new Jn(90,1,n,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,x=_.toneMapping;_.getClearColor(om),_.toneMapping=yr,_.autoClear=!1;const S=new $m({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),T=new ei(new Zs,S);let R=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,R=!0):(S.color.copy(om),R=!0);for(let g=0;g<6;g++){const F=g%3;F===0?(f.up.set(0,h[g],0),f.lookAt(m[g],0,0)):F===1?(f.up.set(0,0,h[g]),f.lookAt(0,m[g],0)):(f.up.set(0,h[g],0),f.lookAt(0,0,m[g]));const L=this._cubeSize;_l(a,F*L,g>2?L:0,L,L),_.setRenderTarget(a),R&&_.render(T,f),_.render(e,f)}T.geometry.dispose(),T.material.dispose(),_.toneMapping=x,_.autoClear=v,e.background=y}_textureToCubeUV(e,n){const r=this._renderer,a=e.mapping===Ws||e.mapping===Xs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const u=a?this._cubemapMaterial:this._equirectMaterial,d=new ei(this._lodPlanes[0],u),f=u.uniforms;f.envMap.value=e;const h=this._cubeSize;_l(n,0,0,3*h,2*h),r.setRenderTarget(n),r.render(d,Oc)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const a=this._lodPlanes.length;for(let u=1;u<a;u++){const d=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),f=am[(a-u-1)%am.length];this._blur(e,u-1,u,d,f)}n.autoClear=r}_blur(e,n,r,a,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,a,"latitudinal",u),this._halfBlur(d,e,r,r,a,"longitudinal",u)}_halfBlur(e,n,r,a,u,d,f){const h=this._renderer,m=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,v=new ei(this._lodPlanes[a],m),x=m.uniforms,S=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Kr-1),R=u/T,y=isFinite(u)?1+Math.floor(_*R):Kr;y>Kr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Kr}`);const g=[];let F=0;for(let I=0;I<Kr;++I){const V=I/R,C=Math.exp(-V*V/2);g.push(C),I===0?F+=C:I<y&&(F+=2*C)}for(let I=0;I<g.length;I++)g[I]=g[I]/F;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=g,x.latitudinal.value=d==="latitudinal",f&&(x.poleAxis.value=f);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-r;const b=this._sizeLods[a],O=3*b*(a>L-zs?a-L+zs:0),U=4*(this._cubeSize-b);_l(n,O,U,3*b,2*b),h.setRenderTarget(n),h.render(v,Oc)}}function IS(s){const e=[],n=[],r=[];let a=s;const u=s-zs+1+sm.length;for(let d=0;d<u;d++){const f=Math.pow(2,a);n.push(f);let h=1/f;d>s-zs?h=sm[d-s+zs-1]:d===0&&(h=0),r.push(h);const m=1/(f-2),_=-m,v=1+m,x=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,T=6,R=3,y=2,g=1,F=new Float32Array(R*T*S),L=new Float32Array(y*T*S),b=new Float32Array(g*T*S);for(let U=0;U<S;U++){const I=U%3*2/3-1,V=U>2?0:-1,C=[I,V,0,I+2/3,V,0,I+2/3,V+1,0,I,V,0,I+2/3,V+1,0,I,V+1,0];F.set(C,R*T*U),L.set(x,y*T*U);const w=[U,U,U,U,U,U];b.set(w,g*T*U)}const O=new Wi;O.setAttribute("position",new Si(F,R)),O.setAttribute("uv",new Si(L,y)),O.setAttribute("faceIndex",new Si(b,g)),e.push(O),a>zs&&a--}return{lodPlanes:e,sizeLods:n,sigmas:r}}function um(s,e,n){const r=new Jr(s,e,n);return r.texture.mapping=bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _l(s,e,n,r,a){s.viewport.set(e,n,r,a),s.scissor.set(e,n,r,a)}function US(s,e,n){const r=new Float32Array(Kr),a=new ee(0,1,0);return new Mr({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function cm(){return new Mr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function dm(){return new Mr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xr,depthTest:!1,depthWrite:!1})}function Yd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function NS(s){let e=new WeakMap,n=null;function r(f){if(f&&f.isTexture){const h=f.mapping,m=h===td||h===nd,_=h===Ws||h===Xs;if(m||_){let v=e.get(f);const x=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==x)return n===null&&(n=new lm(s)),v=m?n.fromEquirectangular(f,v):n.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||_&&S&&a(S)?(n===null&&(n=new lm(s)),v=m?n.fromEquirectangular(f):n.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",u),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let _=0;_<m;_++)f[_]!==void 0&&h++;return h===m}function u(f){const h=f.target;h.removeEventListener("dispose",u);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function d(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:d}}function FS(s){const e={};function n(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const a=n(r);return a===null&&Os("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function kS(s,e,n,r){const a={},u=new WeakMap;function d(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",d),delete a[x.id];const S=u.get(x);S&&(e.remove(S),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,n.memory.geometries--}function f(v,x){return a[x.id]===!0||(x.addEventListener("dispose",d),a[x.id]=!0,n.memory.geometries++),x}function h(v){const x=v.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function m(v){const x=[],S=v.index,T=v.attributes.position;let R=0;if(S!==null){const F=S.array;R=S.version;for(let L=0,b=F.length;L<b;L+=3){const O=F[L+0],U=F[L+1],I=F[L+2];x.push(O,U,U,I,I,O)}}else if(T!==void 0){const F=T.array;R=T.version;for(let L=0,b=F.length/3-1;L<b;L+=3){const O=L+0,U=L+1,I=L+2;x.push(O,U,U,I,I,O)}}else return;const y=new(Xm(x)?Qm:Zm)(x,1);y.version=R;const g=u.get(v);g&&e.remove(g),u.set(v,y)}function _(v){const x=u.get(v);if(x){const S=v.index;S!==null&&x.version<S.version&&m(v)}else m(v);return u.get(v)}return{get:f,update:h,getWireframeAttribute:_}}function OS(s,e,n){let r;function a(x){r=x}let u,d;function f(x){u=x.type,d=x.bytesPerElement}function h(x,S){s.drawElements(r,S,u,x*d),n.update(S,r,1)}function m(x,S,T){T!==0&&(s.drawElementsInstanced(r,S,u,x*d,T),n.update(S,r,T))}function _(x,S,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,u,x,0,T);let y=0;for(let g=0;g<T;g++)y+=S[g];n.update(y,r,1)}function v(x,S,T,R){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<x.length;g++)m(x[g]/d,S[g],R[g]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,u,x,0,R,0,T);let g=0;for(let F=0;F<T;F++)g+=S[F]*R[F];n.update(g,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function zS(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(u/3);break;case s.LINES:n.lines+=f*(u/2);break;case s.LINE_STRIP:n.lines+=f*(u-1);break;case s.LINE_LOOP:n.lines+=f*u;break;case s.POINTS:n.points+=f*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:r}}function BS(s,e,n){const r=new WeakMap,a=new jt;function u(d,f,h){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let x=r.get(f);if(x===void 0||x.count!==v){let C=function(){I.dispose(),r.delete(f),f.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,R=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],g=f.morphAttributes.normal||[],F=f.morphAttributes.color||[];let L=0;S===!0&&(L=1),T===!0&&(L=2),R===!0&&(L=3);let b=f.attributes.position.count*L,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const U=new Float32Array(b*O*4*v),I=new qm(U,b,O,v);I.type=Bi,I.needsUpdate=!0;const V=L*4;for(let w=0;w<v;w++){const z=y[w],ie=g[w],$=F[w],oe=b*O*4*w;for(let he=0;he<z.count;he++){const se=he*V;S===!0&&(a.fromBufferAttribute(z,he),U[oe+se+0]=a.x,U[oe+se+1]=a.y,U[oe+se+2]=a.z,U[oe+se+3]=0),T===!0&&(a.fromBufferAttribute(ie,he),U[oe+se+4]=a.x,U[oe+se+5]=a.y,U[oe+se+6]=a.z,U[oe+se+7]=0),R===!0&&(a.fromBufferAttribute($,he),U[oe+se+8]=a.x,U[oe+se+9]=a.y,U[oe+se+10]=a.z,U[oe+se+11]=$.itemSize===4?a.w:1)}}x={count:v,texture:I,size:new wt(b,O)},r.set(f,x),f.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let S=0;for(let R=0;R<m.length;R++)S+=m[R];const T=f.morphTargetsRelative?1:1-S;h.getUniforms().setValue(s,"morphTargetBaseInfluence",T),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,n),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:u}}function HS(s,e,n,r){let a=new WeakMap;function u(h){const m=r.render.frame,_=h.geometry,v=e.get(h,_);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(n.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;a.get(x)!==m&&(x.update(),a.set(x,m))}return v}function d(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:u,dispose:d}}const og=new kn,fm=new ng(1,1),ag=new qm,lg=new g0,ug=new tg,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),_m=new Float32Array(4);function Qs(s,e,n){const r=s[0];if(r<=0||r>0)return s;const a=e*n;let u=hm[a];if(u===void 0&&(u=new Float32Array(a),hm[a]=u),e!==0){r.toArray(u,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(u,f)}return u}function tn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function nn(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Dl(s,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function VS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function GS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2fv(this.addr,e),nn(n,e)}}function WS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(tn(n,e))return;s.uniform3fv(this.addr,e),nn(n,e)}}function XS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4fv(this.addr,e),nn(n,e)}}function jS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;_m.set(r),s.uniformMatrix2fv(this.addr,!1,_m),nn(n,r)}}function qS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;gm.set(r),s.uniformMatrix3fv(this.addr,!1,gm),nn(n,r)}}function YS(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(tn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(n,e)}else{if(tn(n,r))return;mm.set(r),s.uniformMatrix4fv(this.addr,!1,mm),nn(n,r)}}function KS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function $S(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2iv(this.addr,e),nn(n,e)}}function ZS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3iv(this.addr,e),nn(n,e)}}function QS(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4iv(this.addr,e),nn(n,e)}}function JS(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function eM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(tn(n,e))return;s.uniform2uiv(this.addr,e),nn(n,e)}}function tM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(tn(n,e))return;s.uniform3uiv(this.addr,e),nn(n,e)}}function nM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(tn(n,e))return;s.uniform4uiv(this.addr,e),nn(n,e)}}function iM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let u;this.type===s.SAMPLER_2D_SHADOW?(fm.compareFunction=Wm,u=fm):u=og,n.setTexture2D(e||u,a)}function rM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture3D(e||lg,a)}function sM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTextureCube(e||ug,a)}function oM(s,e,n){const r=this.cache,a=n.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),n.setTexture2DArray(e||ag,a)}function aM(s){switch(s){case 5126:return VS;case 35664:return GS;case 35665:return WS;case 35666:return XS;case 35674:return jS;case 35675:return qS;case 35676:return YS;case 5124:case 35670:return KS;case 35667:case 35671:return $S;case 35668:case 35672:return ZS;case 35669:case 35673:return QS;case 5125:return JS;case 36294:return eM;case 36295:return tM;case 36296:return nM;case 35678:case 36198:case 36298:case 36306:case 35682:return iM;case 35679:case 36299:case 36307:return rM;case 35680:case 36300:case 36308:case 36293:return sM;case 36289:case 36303:case 36311:case 36292:return oM}}function lM(s,e){s.uniform1fv(this.addr,e)}function uM(s,e){const n=Qs(e,this.size,2);s.uniform2fv(this.addr,n)}function cM(s,e){const n=Qs(e,this.size,3);s.uniform3fv(this.addr,n)}function dM(s,e){const n=Qs(e,this.size,4);s.uniform4fv(this.addr,n)}function fM(s,e){const n=Qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function hM(s,e){const n=Qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function pM(s,e){const n=Qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function mM(s,e){s.uniform1iv(this.addr,e)}function gM(s,e){s.uniform2iv(this.addr,e)}function _M(s,e){s.uniform3iv(this.addr,e)}function vM(s,e){s.uniform4iv(this.addr,e)}function xM(s,e){s.uniform1uiv(this.addr,e)}function yM(s,e){s.uniform2uiv(this.addr,e)}function SM(s,e){s.uniform3uiv(this.addr,e)}function MM(s,e){s.uniform4uiv(this.addr,e)}function EM(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let d=0;d!==a;++d)n.setTexture2D(e[d]||og,u[d])}function TM(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let d=0;d!==a;++d)n.setTexture3D(e[d]||lg,u[d])}function wM(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let d=0;d!==a;++d)n.setTextureCube(e[d]||ug,u[d])}function AM(s,e,n){const r=this.cache,a=e.length,u=Dl(n,a);tn(r,u)||(s.uniform1iv(this.addr,u),nn(r,u));for(let d=0;d!==a;++d)n.setTexture2DArray(e[d]||ag,u[d])}function RM(s){switch(s){case 5126:return lM;case 35664:return uM;case 35665:return cM;case 35666:return dM;case 35674:return fM;case 35675:return hM;case 35676:return pM;case 5124:case 35670:return mM;case 35667:case 35671:return gM;case 35668:case 35672:return _M;case 35669:case 35673:return vM;case 5125:return xM;case 36294:return yM;case 36295:return SM;case 36296:return MM;case 35678:case 36198:case 36298:case 36306:case 35682:return EM;case 35679:case 36299:case 36307:return TM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return AM}}class CM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=aM(n.type)}}class bM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RM(n.type)}}class PM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const a=this.seq;for(let u=0,d=a.length;u!==d;++u){const f=a[u];f.setValue(e,n[f.id],r)}}}const Gc=/(\w+)(\])?(\[|\.)?/g;function vm(s,e){s.seq.push(e),s.map[e.id]=e}function DM(s,e,n){const r=s.name,a=r.length;for(Gc.lastIndex=0;;){const u=Gc.exec(r),d=Gc.lastIndex;let f=u[1];const h=u[2]==="]",m=u[3];if(h&&(f=f|0),m===void 0||m==="["&&d+2===a){vm(n,m===void 0?new CM(f,s,e):new bM(f,s,e));break}else{let v=n.map[f];v===void 0&&(v=new PM(f),vm(n,v)),n=v}}}class wl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const u=e.getActiveUniform(n,a),d=e.getUniformLocation(n,u.name);DM(u,d,this)}}setValue(e,n,r,a){const u=this.map[n];u!==void 0&&u.setValue(e,r,a)}setOptional(e,n,r){const a=n[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,n,r,a){for(let u=0,d=n.length;u!==d;++u){const f=n[u],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,n){const r=[];for(let a=0,u=e.length;a!==u;++a){const d=e[a];d.id in n&&r.push(d)}return r}}function xm(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const LM=37297;let IM=0;function UM(s,e){const n=s.split(`
`),r=[],a=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let d=a;d<u;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const ym=new ot;function NM(s){Tt._getMatrix(ym,Tt.workingColorSpace,s);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(Tt.getTransfer(s)){case Al:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Sm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const u=/ERROR: 0:(\d+)/.exec(a);if(u){const d=parseInt(u[1]);return n.toUpperCase()+`

`+a+`

`+UM(s.getShaderSource(e),d)}else return a}function FM(s,e){const n=NM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kM(s,e){let n;switch(e){case Vv:n="Linear";break;case Gv:n="Reinhard";break;case Wv:n="Cineon";break;case Xv:n="ACESFilmic";break;case qv:n="AgX";break;case Yv:n="Neutral";break;case jv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vl=new ee;function OM(){Tt.getLuminanceCoefficients(vl);const s=vl.x.toFixed(4),e=vl.y.toFixed(4),n=vl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function BM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function HM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const u=s.getActiveAttrib(e,a),d=u.name;let f=1;u.type===s.FLOAT_MAT2&&(f=2),u.type===s.FLOAT_MAT3&&(f=3),u.type===s.FLOAT_MAT4&&(f=4),n[d]={type:u.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function Oo(s){return s!==""}function Mm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const VM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Id(s){return s.replace(VM,WM)}const GM=new Map;function WM(s,e){let n=at[e];if(n===void 0){const r=GM.get(e);if(r!==void 0)n=at[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Id(n)}const XM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tm(s){return s.replace(XM,jM)}function jM(s,e,n,r){let a="";for(let u=parseInt(e);u<parseInt(n);u++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return a}function wm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Pm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function YM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ws:case Xs:e="ENVMAP_TYPE_CUBE";break;case bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function KM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function $M(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Dm:e="ENVMAP_BLENDING_MULTIPLY";break;case Bv:e="ENVMAP_BLENDING_MIX";break;case Hv:e="ENVMAP_BLENDING_ADD";break}return e}function ZM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function QM(s,e,n,r){const a=s.getContext(),u=n.defines;let d=n.vertexShader,f=n.fragmentShader;const h=qM(n),m=YM(n),_=KM(n),v=$M(n),x=ZM(n),S=zM(n),T=BM(u),R=a.createProgram();let y,g,F=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(Oo).join(`
`),g.length>0&&(g+=`
`)):(y=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),g=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==yr?"#define TONE_MAPPING":"",n.toneMapping!==yr?at.tonemapping_pars_fragment:"",n.toneMapping!==yr?kM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,FM("linearToOutputTexel",n.outputColorSpace),OM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Oo).join(`
`)),d=Id(d),d=Mm(d,n),d=Em(d,n),f=Id(f),f=Mm(f,n),f=Em(f,n),d=Tm(d),f=Tm(f),n.isRawShaderMaterial!==!0&&(F=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=F+y+d,b=F+g+f,O=xm(a,a.VERTEX_SHADER,L),U=xm(a,a.FRAGMENT_SHADER,b);a.attachShader(R,O),a.attachShader(R,U),n.index0AttributeName!==void 0?a.bindAttribLocation(R,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function I(z){if(s.debug.checkShaderErrors){const ie=a.getProgramInfoLog(R).trim(),$=a.getShaderInfoLog(O).trim(),oe=a.getShaderInfoLog(U).trim();let he=!0,se=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,O,U);else{const me=Sm(a,O,"vertex"),H=Sm(a,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ie+`
`+me+`
`+H)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):($===""||oe==="")&&(se=!1);se&&(z.diagnostics={runnable:he,programLog:ie,vertexShader:{log:$,prefix:y},fragmentShader:{log:oe,prefix:g}})}a.deleteShader(O),a.deleteShader(U),V=new wl(a,R),C=HM(a,R)}let V;this.getUniforms=function(){return V===void 0&&I(this),V};let C;this.getAttributes=function(){return C===void 0&&I(this),C};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=a.getProgramParameter(R,LM)),w},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IM++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=O,this.fragmentShader=U,this}let JM=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(n),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(a)===!1&&(d.add(a),a.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new tE(e),n.set(e,r)),r}}class tE{constructor(e){this.id=JM++,this.code=e,this.usedTimes=0}}function nE(s,e,n,r,a,u,d){const f=new Wd,h=new eE,m=new Set,_=[],v=a.logarithmicDepthBuffer,x=a.vertexTextures;let S=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function y(C,w,z,ie,$){const oe=ie.fog,he=$.geometry,se=C.isMeshStandardMaterial?ie.environment:null,me=(C.isMeshStandardMaterial?n:e).get(C.envMap||se),H=me&&me.mapping===bl?me.image.height:null,ue=T[C.type];C.precision!==null&&(S=a.getMaxPrecision(C.precision),S!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",S,"instead."));const le=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=le!==void 0?le.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Ue,Q,ce,Ee;if(ue){const vt=xi[ue];Ue=vt.vertexShader,Q=vt.fragmentShader}else Ue=C.vertexShader,Q=C.fragmentShader,h.update(C),ce=h.getVertexShaderID(C),Ee=h.getFragmentShaderID(C);const xe=s.getRenderTarget(),we=s.state.buffers.depth.getReversed(),Ne=$.isInstancedMesh===!0,Qe=$.isBatchedMesh===!0,bt=!!C.map,pt=!!C.matcap,It=!!me,B=!!C.aoMap,yn=!!C.lightMap,ft=!!C.bumpMap,ut=!!C.normalMap,qe=!!C.displacementMap,Ct=!!C.emissiveMap,Xe=!!C.metalnessMap,P=!!C.roughnessMap,E=C.anisotropy>0,Z=C.clearcoat>0,pe=C.dispersion>0,_e=C.iridescence>0,de=C.sheen>0,Ge=C.transmission>0,Ae=E&&!!C.anisotropyMap,Fe=Z&&!!C.clearcoatMap,lt=Z&&!!C.clearcoatNormalMap,Me=Z&&!!C.clearcoatRoughnessMap,ze=_e&&!!C.iridescenceMap,Ke=_e&&!!C.iridescenceThicknessMap,Je=de&&!!C.sheenColorMap,Be=de&&!!C.sheenRoughnessMap,ct=!!C.specularMap,it=!!C.specularColorMap,Rt=!!C.specularIntensityMap,X=Ge&&!!C.transmissionMap,Re=Ge&&!!C.thicknessMap,ae=!!C.gradientMap,fe=!!C.alphaMap,De=C.alphaTest>0,Pe=!!C.alphaHash,rt=!!C.extensions;let Nt=yr;C.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Nt=s.toneMapping);const Qt={shaderID:ue,shaderType:C.type,shaderName:C.name,vertexShader:Ue,fragmentShader:Q,defines:C.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:S,batching:Qe,batchingColor:Qe&&$._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&$.instanceColor!==null,instancingMorph:Ne&&$.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Ys,alphaToCoverage:!!C.alphaToCoverage,map:bt,matcap:pt,envMap:It,envMapMode:It&&me.mapping,envMapCubeUVHeight:H,aoMap:B,lightMap:yn,bumpMap:ft,normalMap:ut,displacementMap:x&&qe,emissiveMap:Ct,normalMapObjectSpace:ut&&C.normalMapType===Qv,normalMapTangentSpace:ut&&C.normalMapType===Gm,metalnessMap:Xe,roughnessMap:P,anisotropy:E,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Fe,clearcoatNormalMap:lt,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:_e,iridescenceMap:ze,iridescenceThicknessMap:Ke,sheen:de,sheenColorMap:Je,sheenRoughnessMap:Be,specularMap:ct,specularColorMap:it,specularIntensityMap:Rt,transmission:Ge,transmissionMap:X,thicknessMap:Re,gradientMap:ae,opaque:C.transparent===!1&&C.blending===Bs&&C.alphaToCoverage===!1,alphaMap:fe,alphaTest:De,alphaHash:Pe,combine:C.combine,mapUv:bt&&R(C.map.channel),aoMapUv:B&&R(C.aoMap.channel),lightMapUv:yn&&R(C.lightMap.channel),bumpMapUv:ft&&R(C.bumpMap.channel),normalMapUv:ut&&R(C.normalMap.channel),displacementMapUv:qe&&R(C.displacementMap.channel),emissiveMapUv:Ct&&R(C.emissiveMap.channel),metalnessMapUv:Xe&&R(C.metalnessMap.channel),roughnessMapUv:P&&R(C.roughnessMap.channel),anisotropyMapUv:Ae&&R(C.anisotropyMap.channel),clearcoatMapUv:Fe&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:lt&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(C.sheenRoughnessMap.channel),specularMapUv:ct&&R(C.specularMap.channel),specularColorMapUv:it&&R(C.specularColorMap.channel),specularIntensityMapUv:Rt&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Re&&R(C.thicknessMap.channel),alphaMapUv:fe&&R(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ut||E),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(bt||fe),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:we,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Nt,decodeVideoTexture:bt&&C.map.isVideoTexture===!0&&Tt.getTransfer(C.map.colorSpace)===Dt,decodeVideoTextureEmissive:Ct&&C.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(C.emissiveMap.colorSpace)===Dt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===zi,flipSided:C.side===Fn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:rt&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&C.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Qt.vertexUv1s=m.has(1),Qt.vertexUv2s=m.has(2),Qt.vertexUv3s=m.has(3),m.clear(),Qt}function g(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)w.push(z),w.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(F(w,C),L(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function F(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function L(C,w){f.disableAll(),w.supportsVertexTextures&&f.enable(0),w.instancing&&f.enable(1),w.instancingColor&&f.enable(2),w.instancingMorph&&f.enable(3),w.matcap&&f.enable(4),w.envMap&&f.enable(5),w.normalMapObjectSpace&&f.enable(6),w.normalMapTangentSpace&&f.enable(7),w.clearcoat&&f.enable(8),w.iridescence&&f.enable(9),w.alphaTest&&f.enable(10),w.vertexColors&&f.enable(11),w.vertexAlphas&&f.enable(12),w.vertexUv1s&&f.enable(13),w.vertexUv2s&&f.enable(14),w.vertexUv3s&&f.enable(15),w.vertexTangents&&f.enable(16),w.anisotropy&&f.enable(17),w.alphaHash&&f.enable(18),w.batching&&f.enable(19),w.dispersion&&f.enable(20),w.batchingColor&&f.enable(21),C.push(f.mask),f.disableAll(),w.fog&&f.enable(0),w.useFog&&f.enable(1),w.flatShading&&f.enable(2),w.logarithmicDepthBuffer&&f.enable(3),w.reverseDepthBuffer&&f.enable(4),w.skinning&&f.enable(5),w.morphTargets&&f.enable(6),w.morphNormals&&f.enable(7),w.morphColors&&f.enable(8),w.premultipliedAlpha&&f.enable(9),w.shadowMapEnabled&&f.enable(10),w.doubleSided&&f.enable(11),w.flipSided&&f.enable(12),w.useDepthPacking&&f.enable(13),w.dithering&&f.enable(14),w.transmission&&f.enable(15),w.sheen&&f.enable(16),w.opaque&&f.enable(17),w.pointsUvs&&f.enable(18),w.decodeVideoTexture&&f.enable(19),w.decodeVideoTextureEmissive&&f.enable(20),w.alphaToCoverage&&f.enable(21),C.push(f.mask)}function b(C){const w=T[C.type];let z;if(w){const ie=xi[w];z=C0.clone(ie.uniforms)}else z=C.uniforms;return z}function O(C,w){let z;for(let ie=0,$=_.length;ie<$;ie++){const oe=_[ie];if(oe.cacheKey===w){z=oe,++z.usedTimes;break}}return z===void 0&&(z=new QM(s,w,C,u),_.push(z)),z}function U(C){if(--C.usedTimes===0){const w=_.indexOf(C);_[w]=_[_.length-1],_.pop(),C.destroy()}}function I(C){h.remove(C)}function V(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:b,acquireProgram:O,releaseProgram:U,releaseShaderCache:I,programs:_,dispose:V}}function iE(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function a(d,f,h){s.get(d)[f]=h}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:a,dispose:u}}function rE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Am(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rm(){const s=[];let e=0;const n=[],r=[],a=[];function u(){e=0,n.length=0,r.length=0,a.length=0}function d(v,x,S,T,R,y){let g=s[e];return g===void 0?(g={id:v.id,object:v,geometry:x,material:S,groupOrder:T,renderOrder:v.renderOrder,z:R,group:y},s[e]=g):(g.id=v.id,g.object=v,g.geometry=x,g.material=S,g.groupOrder=T,g.renderOrder=v.renderOrder,g.z=R,g.group=y),e++,g}function f(v,x,S,T,R,y){const g=d(v,x,S,T,R,y);S.transmission>0?r.push(g):S.transparent===!0?a.push(g):n.push(g)}function h(v,x,S,T,R,y){const g=d(v,x,S,T,R,y);S.transmission>0?r.unshift(g):S.transparent===!0?a.unshift(g):n.unshift(g)}function m(v,x){n.length>1&&n.sort(v||rE),r.length>1&&r.sort(x||Am),a.length>1&&a.sort(x||Am)}function _(){for(let v=e,x=s.length;v<x;v++){const S=s[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:r,transparent:a,init:u,push:f,unshift:h,finish:_,sort:m}}function sE(){let s=new WeakMap;function e(r,a){const u=s.get(r);let d;return u===void 0?(d=new Rm,s.set(r,[d])):a>=u.length?(d=new Rm,u.push(d)):d=u[a],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function oE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new yt};break;case"SpotLight":n={position:new ee,direction:new ee,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new yt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":n={color:new yt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=n,n}}}function aE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let lE=0;function uE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cE(s){const e=new oE,n=aE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ee);const a=new ee,u=new Gt,d=new Gt;function f(m){let _=0,v=0,x=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let S=0,T=0,R=0,y=0,g=0,F=0,L=0,b=0,O=0,U=0,I=0;m.sort(uE);for(let C=0,w=m.length;C<w;C++){const z=m[C],ie=z.color,$=z.intensity,oe=z.distance,he=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ie.r*$,v+=ie.g*$,x+=ie.b*$;else if(z.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(z.sh.coefficients[se],$);I++}else if(z.isDirectionalLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const me=z.shadow,H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=he,r.directionalShadowMatrix[S]=z.shadow.matrix,F++}r.directional[S]=se,S++}else if(z.isSpotLight){const se=e.get(z);se.position.setFromMatrixPosition(z.matrixWorld),se.color.copy(ie).multiplyScalar($),se.distance=oe,se.coneCos=Math.cos(z.angle),se.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),se.decay=z.decay,r.spot[R]=se;const me=z.shadow;if(z.map&&(r.spotLightMap[O]=z.map,O++,me.updateMatrices(z),z.castShadow&&U++),r.spotLightMatrix[R]=me.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,r.spotShadow[R]=H,r.spotShadowMap[R]=he,b++}R++}else if(z.isRectAreaLight){const se=e.get(z);se.color.copy(ie).multiplyScalar($),se.halfWidth.set(z.width*.5,0,0),se.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=se,y++}else if(z.isPointLight){const se=e.get(z);if(se.color.copy(z.color).multiplyScalar(z.intensity),se.distance=z.distance,se.decay=z.decay,z.castShadow){const me=z.shadow,H=n.get(z);H.shadowIntensity=me.intensity,H.shadowBias=me.bias,H.shadowNormalBias=me.normalBias,H.shadowRadius=me.radius,H.shadowMapSize=me.mapSize,H.shadowCameraNear=me.camera.near,H.shadowCameraFar=me.camera.far,r.pointShadow[T]=H,r.pointShadowMap[T]=he,r.pointShadowMatrix[T]=z.shadow.matrix,L++}r.point[T]=se,T++}else if(z.isHemisphereLight){const se=e.get(z);se.skyColor.copy(z.color).multiplyScalar($),se.groundColor.copy(z.groundColor).multiplyScalar($),r.hemi[g]=se,g++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=v,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==R||V.rectAreaLength!==y||V.hemiLength!==g||V.numDirectionalShadows!==F||V.numPointShadows!==L||V.numSpotShadows!==b||V.numSpotMaps!==O||V.numLightProbes!==I)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=y,r.point.length=T,r.hemi.length=g,r.directionalShadow.length=F,r.directionalShadowMap.length=F,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=F,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+O-U,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=I,V.directionalLength=S,V.pointLength=T,V.spotLength=R,V.rectAreaLength=y,V.hemiLength=g,V.numDirectionalShadows=F,V.numPointShadows=L,V.numSpotShadows=b,V.numSpotMaps=O,V.numLightProbes=I,r.version=lE++)}function h(m,_){let v=0,x=0,S=0,T=0,R=0;const y=_.matrixWorldInverse;for(let g=0,F=m.length;g<F;g++){const L=m[g];if(L.isDirectionalLight){const b=r.directional[v];b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),v++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),b.direction.setFromMatrixPosition(L.matrixWorld),a.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(y),S++}else if(L.isRectAreaLight){const b=r.rectArea[T];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),d.identity(),u.copy(L.matrixWorld),u.premultiply(y),d.extractRotation(u),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(d),b.halfHeight.applyMatrix4(d),T++}else if(L.isPointLight){const b=r.point[x];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(y),x++}else if(L.isHemisphereLight){const b=r.hemi[R];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(y),R++}}}return{setup:f,setupView:h,state:r}}function Cm(s){const e=new cE(s),n=[],r=[];function a(_){m.camera=_,n.length=0,r.length=0}function u(_){n.push(_)}function d(_){r.push(_)}function f(){e.setup(n)}function h(_){e.setupView(n,_)}const m={lightsArray:n,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:u,pushShadow:d}}function dE(s){let e=new WeakMap;function n(a,u=0){const d=e.get(a);let f;return d===void 0?(f=new Cm(s),e.set(a,[f])):u>=d.length?(f=new Cm(s),d.push(f)):f=d[u],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const fE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function pE(s,e,n){let r=new Xd;const a=new wt,u=new wt,d=new jt,f=new k0({depthPacking:Zv}),h=new O0,m={},_=n.maxTextureSize,v={[Sr]:Fn,[Fn]:Sr,[zi]:zi},x=new Mr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:fE,fragmentShader:hE}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Wi;T.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ei(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pm;let g=this.type;this.render=function(U,I,V){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||U.length===0)return;const C=s.getRenderTarget(),w=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(xr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const $=g!==Oi&&this.type===Oi,oe=g===Oi&&this.type!==Oi;for(let he=0,se=U.length;he<se;he++){const me=U[he],H=me.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;a.copy(H.mapSize);const ue=H.getFrameExtents();if(a.multiply(ue),u.copy(H.mapSize),(a.x>_||a.y>_)&&(a.x>_&&(u.x=Math.floor(_/ue.x),a.x=u.x*ue.x,H.mapSize.x=u.x),a.y>_&&(u.y=Math.floor(_/ue.y),a.y=u.y*ue.y,H.mapSize.y=u.y)),H.map===null||$===!0||oe===!0){const N=this.type!==Oi?{minFilter:hi,magFilter:hi}:{};H.map!==null&&H.map.dispose(),H.map=new Jr(a.x,a.y,N),H.map.texture.name=me.name+".shadowMap",H.camera.updateProjectionMatrix()}s.setRenderTarget(H.map),s.clear();const le=H.getViewportCount();for(let N=0;N<le;N++){const re=H.getViewport(N);d.set(u.x*re.x,u.y*re.y,u.x*re.z,u.y*re.w),ie.viewport(d),H.updateMatrices(me,N),r=H.getFrustum(),b(I,V,H.camera,me,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&F(H,V),H.needsUpdate=!1}g=this.type,y.needsUpdate=!1,s.setRenderTarget(C,w,z)};function F(U,I){const V=e.update(R);x.defines.VSM_SAMPLES!==U.blurSamples&&(x.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Jr(a.x,a.y)),x.uniforms.shadow_pass.value=U.map.texture,x.uniforms.resolution.value=U.mapSize,x.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(I,null,V,x,R,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value=U.mapSize,S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(I,null,V,S,R,null)}function L(U,I,V,C){let w=null;const z=V.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(z!==void 0)w=z;else if(w=V.isPointLight===!0?h:f,s.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const ie=w.uuid,$=I.uuid;let oe=m[ie];oe===void 0&&(oe={},m[ie]=oe);let he=oe[$];he===void 0&&(he=w.clone(),oe[$]=he,I.addEventListener("dispose",O)),w=he}if(w.visible=I.visible,w.wireframe=I.wireframe,C===Oi?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:v[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const ie=s.properties.get(w);ie.light=V}return w}function b(U,I,V,C,w){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&w===Oi)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,U.matrixWorld);const $=e.update(U),oe=U.material;if(Array.isArray(oe)){const he=$.groups;for(let se=0,me=he.length;se<me;se++){const H=he[se],ue=oe[H.materialIndex];if(ue&&ue.visible){const le=L(U,ue,C,w);U.onBeforeShadow(s,U,I,V,$,le,H),s.renderBufferDirect(V,null,$,le,U,H),U.onAfterShadow(s,U,I,V,$,le,H)}}}else if(oe.visible){const he=L(U,oe,C,w);U.onBeforeShadow(s,U,I,V,$,he,null),s.renderBufferDirect(V,null,$,he,U,null),U.onAfterShadow(s,U,I,V,$,he,null)}}const ie=U.children;for(let $=0,oe=ie.length;$<oe;$++)b(ie[$],I,V,C,w)}function O(U){U.target.removeEventListener("dispose",O);for(const V in m){const C=m[V],w=U.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const mE={[Yc]:Kc,[$c]:Jc,[Zc]:ed,[Gs]:Qc,[Kc]:Yc,[Jc]:$c,[ed]:Zc,[Qc]:Gs};function gE(s,e){function n(){let X=!1;const Re=new jt;let ae=null;const fe=new jt(0,0,0,0);return{setMask:function(De){ae!==De&&!X&&(s.colorMask(De,De,De,De),ae=De)},setLocked:function(De){X=De},setClear:function(De,Pe,rt,Nt,Qt){Qt===!0&&(De*=Nt,Pe*=Nt,rt*=Nt),Re.set(De,Pe,rt,Nt),fe.equals(Re)===!1&&(s.clearColor(De,Pe,rt,Nt),fe.copy(Re))},reset:function(){X=!1,ae=null,fe.set(-1,0,0,0)}}}function r(){let X=!1,Re=!1,ae=null,fe=null,De=null;return{setReversed:function(Pe){if(Re!==Pe){const rt=e.get("EXT_clip_control");Re?rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.ZERO_TO_ONE_EXT):rt.clipControlEXT(rt.LOWER_LEFT_EXT,rt.NEGATIVE_ONE_TO_ONE_EXT);const Nt=De;De=null,this.setClear(Nt)}Re=Pe},getReversed:function(){return Re},setTest:function(Pe){Pe?xe(s.DEPTH_TEST):we(s.DEPTH_TEST)},setMask:function(Pe){ae!==Pe&&!X&&(s.depthMask(Pe),ae=Pe)},setFunc:function(Pe){if(Re&&(Pe=mE[Pe]),fe!==Pe){switch(Pe){case Yc:s.depthFunc(s.NEVER);break;case Kc:s.depthFunc(s.ALWAYS);break;case $c:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case Zc:s.depthFunc(s.EQUAL);break;case Qc:s.depthFunc(s.GEQUAL);break;case Jc:s.depthFunc(s.GREATER);break;case ed:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){De!==Pe&&(Re&&(Pe=1-Pe),s.clearDepth(Pe),De=Pe)},reset:function(){X=!1,ae=null,fe=null,De=null,Re=!1}}}function a(){let X=!1,Re=null,ae=null,fe=null,De=null,Pe=null,rt=null,Nt=null,Qt=null;return{setTest:function(vt){X||(vt?xe(s.STENCIL_TEST):we(s.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!X&&(s.stencilMask(vt),Re=vt)},setFunc:function(vt,Cn,Sn){(ae!==vt||fe!==Cn||De!==Sn)&&(s.stencilFunc(vt,Cn,Sn),ae=vt,fe=Cn,De=Sn)},setOp:function(vt,Cn,Sn){(Pe!==vt||rt!==Cn||Nt!==Sn)&&(s.stencilOp(vt,Cn,Sn),Pe=vt,rt=Cn,Nt=Sn)},setLocked:function(vt){X=vt},setClear:function(vt){Qt!==vt&&(s.clearStencil(vt),Qt=vt)},reset:function(){X=!1,Re=null,ae=null,fe=null,De=null,Pe=null,rt=null,Nt=null,Qt=null}}}const u=new n,d=new r,f=new a,h=new WeakMap,m=new WeakMap;let _={},v={},x=new WeakMap,S=[],T=null,R=!1,y=null,g=null,F=null,L=null,b=null,O=null,U=null,I=new yt(0,0,0),V=0,C=!1,w=null,z=null,ie=null,$=null,oe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,me=0;const H=s.getParameter(s.VERSION);H.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(H)[1]),se=me>=1):H.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),se=me>=2);let ue=null,le={};const N=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ue=new jt().fromArray(N),Q=new jt().fromArray(re);function ce(X,Re,ae,fe){const De=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(X,Pe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let rt=0;rt<ae;rt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Re+rt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Pe}const Ee={};Ee[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),f.setClear(0),xe(s.DEPTH_TEST),d.setFunc(Gs),ft(!1),ut(Pp),xe(s.CULL_FACE),B(xr);function xe(X){_[X]!==!0&&(s.enable(X),_[X]=!0)}function we(X){_[X]!==!1&&(s.disable(X),_[X]=!1)}function Ne(X,Re){return v[X]!==Re?(s.bindFramebuffer(X,Re),v[X]=Re,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Re),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(X,Re){let ae=S,fe=!1;if(X){ae=x.get(Re),ae===void 0&&(ae=[],x.set(Re,ae));const De=X.textures;if(ae.length!==De.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,rt=De.length;Pe<rt;Pe++)ae[Pe]=s.COLOR_ATTACHMENT0+Pe;ae.length=De.length,fe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ae)}function bt(X){return T!==X?(s.useProgram(X),T=X,!0):!1}const pt={[Yr]:s.FUNC_ADD,[Ev]:s.FUNC_SUBTRACT,[Tv]:s.FUNC_REVERSE_SUBTRACT};pt[wv]=s.MIN,pt[Av]=s.MAX;const It={[Rv]:s.ZERO,[Cv]:s.ONE,[bv]:s.SRC_COLOR,[jc]:s.SRC_ALPHA,[Nv]:s.SRC_ALPHA_SATURATE,[Iv]:s.DST_COLOR,[Dv]:s.DST_ALPHA,[Pv]:s.ONE_MINUS_SRC_COLOR,[qc]:s.ONE_MINUS_SRC_ALPHA,[Uv]:s.ONE_MINUS_DST_COLOR,[Lv]:s.ONE_MINUS_DST_ALPHA,[Fv]:s.CONSTANT_COLOR,[kv]:s.ONE_MINUS_CONSTANT_COLOR,[Ov]:s.CONSTANT_ALPHA,[zv]:s.ONE_MINUS_CONSTANT_ALPHA};function B(X,Re,ae,fe,De,Pe,rt,Nt,Qt,vt){if(X===xr){R===!0&&(we(s.BLEND),R=!1);return}if(R===!1&&(xe(s.BLEND),R=!0),X!==Mv){if(X!==y||vt!==C){if((g!==Yr||b!==Yr)&&(s.blendEquation(s.FUNC_ADD),g=Yr,b=Yr),vt)switch(X){case Bs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.ONE,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Bs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Dp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Lp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ip:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}F=null,L=null,O=null,U=null,I.set(0,0,0),V=0,y=X,C=vt}return}De=De||Re,Pe=Pe||ae,rt=rt||fe,(Re!==g||De!==b)&&(s.blendEquationSeparate(pt[Re],pt[De]),g=Re,b=De),(ae!==F||fe!==L||Pe!==O||rt!==U)&&(s.blendFuncSeparate(It[ae],It[fe],It[Pe],It[rt]),F=ae,L=fe,O=Pe,U=rt),(Nt.equals(I)===!1||Qt!==V)&&(s.blendColor(Nt.r,Nt.g,Nt.b,Qt),I.copy(Nt),V=Qt),y=X,C=!1}function yn(X,Re){X.side===zi?we(s.CULL_FACE):xe(s.CULL_FACE);let ae=X.side===Fn;Re&&(ae=!ae),ft(ae),X.blending===Bs&&X.transparent===!1?B(xr):B(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),u.setMask(X.colorWrite);const fe=X.stencilWrite;f.setTest(fe),fe&&(f.setMask(X.stencilWriteMask),f.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),f.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ct(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):we(s.SAMPLE_ALPHA_TO_COVERAGE)}function ft(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function ut(X){X!==xv?(xe(s.CULL_FACE),X!==z&&(X===Pp?s.cullFace(s.BACK):X===yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):we(s.CULL_FACE),z=X}function qe(X){X!==ie&&(se&&s.lineWidth(X),ie=X)}function Ct(X,Re,ae){X?(xe(s.POLYGON_OFFSET_FILL),($!==Re||oe!==ae)&&(s.polygonOffset(Re,ae),$=Re,oe=ae)):we(s.POLYGON_OFFSET_FILL)}function Xe(X){X?xe(s.SCISSOR_TEST):we(s.SCISSOR_TEST)}function P(X){X===void 0&&(X=s.TEXTURE0+he-1),ue!==X&&(s.activeTexture(X),ue=X)}function E(X,Re,ae){ae===void 0&&(ue===null?ae=s.TEXTURE0+he-1:ae=ue);let fe=le[ae];fe===void 0&&(fe={type:void 0,texture:void 0},le[ae]=fe),(fe.type!==X||fe.texture!==Re)&&(ue!==ae&&(s.activeTexture(ae),ue=ae),s.bindTexture(X,Re||Ee[X]),fe.type=X,fe.texture=Re)}function Z(){const X=le[ue];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function _e(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ge(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Je(X){Ue.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ue.copy(X))}function Be(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function ct(X,Re){let ae=m.get(Re);ae===void 0&&(ae=new WeakMap,m.set(Re,ae));let fe=ae.get(X);fe===void 0&&(fe=s.getUniformBlockIndex(Re,X.name),ae.set(X,fe))}function it(X,Re){const fe=m.get(Re).get(X);h.get(Re)!==fe&&(s.uniformBlockBinding(Re,fe,X.__bindingPointIndex),h.set(Re,fe))}function Rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),_={},ue=null,le={},v={},x=new WeakMap,S=[],T=null,R=!1,y=null,g=null,F=null,L=null,b=null,O=null,U=null,I=new yt(0,0,0),V=0,C=!1,w=null,z=null,ie=null,$=null,oe=null,Ue.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),u.reset(),d.reset(),f.reset()}return{buffers:{color:u,depth:d,stencil:f},enable:xe,disable:we,bindFramebuffer:Ne,drawBuffers:Qe,useProgram:bt,setBlending:B,setMaterial:yn,setFlipSided:ft,setCullFace:ut,setLineWidth:qe,setPolygonOffset:Ct,setScissorTest:Xe,activeTexture:P,bindTexture:E,unbindTexture:Z,compressedTexImage2D:pe,compressedTexImage3D:_e,texImage2D:ze,texImage3D:Ke,updateUBOMapping:ct,uniformBlockBinding:it,texStorage2D:lt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:Je,viewport:Be,reset:Rt}}function _E(s,e,n,r,a,u,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,_=new WeakMap;let v;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(P,E){return S?new OffscreenCanvas(P,E):Cl("canvas")}function R(P,E,Z){let pe=1;const _e=Xe(P);if((_e.width>Z||_e.height>Z)&&(pe=Z/Math.max(_e.width,_e.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*_e.width),Ge=Math.floor(pe*_e.height);v===void 0&&(v=T(de,Ge));const Ae=E?T(de,Ge):v;return Ae.width=de,Ae.height=Ge,Ae.getContext("2d").drawImage(P,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+de+"x"+Ge+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),P;return P}function y(P){return P.generateMipmaps}function g(P){s.generateMipmap(P)}function F(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(P,E,Z,pe,_e=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=E;if(E===s.RED&&(Z===s.FLOAT&&(de=s.R32F),Z===s.HALF_FLOAT&&(de=s.R16F),Z===s.UNSIGNED_BYTE&&(de=s.R8)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.R8UI),Z===s.UNSIGNED_SHORT&&(de=s.R16UI),Z===s.UNSIGNED_INT&&(de=s.R32UI),Z===s.BYTE&&(de=s.R8I),Z===s.SHORT&&(de=s.R16I),Z===s.INT&&(de=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(de=s.RG32F),Z===s.HALF_FLOAT&&(de=s.RG16F),Z===s.UNSIGNED_BYTE&&(de=s.RG8)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RG8UI),Z===s.UNSIGNED_SHORT&&(de=s.RG16UI),Z===s.UNSIGNED_INT&&(de=s.RG32UI),Z===s.BYTE&&(de=s.RG8I),Z===s.SHORT&&(de=s.RG16I),Z===s.INT&&(de=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Z===s.UNSIGNED_INT&&(de=s.RGB32UI),Z===s.BYTE&&(de=s.RGB8I),Z===s.SHORT&&(de=s.RGB16I),Z===s.INT&&(de=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Z===s.UNSIGNED_INT&&(de=s.RGBA32UI),Z===s.BYTE&&(de=s.RGBA8I),Z===s.SHORT&&(de=s.RGBA16I),Z===s.INT&&(de=s.RGBA32I)),E===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),E===s.RGBA){const Ge=_e?Al:Tt.getTransfer(pe);Z===s.FLOAT&&(de=s.RGBA32F),Z===s.HALF_FLOAT&&(de=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(de=Ge===Dt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function b(P,E){let Z;return P?E===null||E===Qr||E===js?Z=s.DEPTH24_STENCIL8:E===Bi?Z=s.DEPTH32F_STENCIL8:E===zo&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Qr||E===js?Z=s.DEPTH_COMPONENT24:E===Bi?Z=s.DEPTH_COMPONENT32F:E===zo&&(Z=s.DEPTH_COMPONENT16),Z}function O(P,E){return y(P)===!0||P.isFramebufferTexture&&P.minFilter!==hi&&P.minFilter!==yi?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function U(P){const E=P.target;E.removeEventListener("dispose",U),V(E),E.isVideoTexture&&_.delete(E)}function I(P){const E=P.target;E.removeEventListener("dispose",I),w(E)}function V(P){const E=r.get(P);if(E.__webglInit===void 0)return;const Z=P.source,pe=x.get(Z);if(pe){const _e=pe[E.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&C(P),Object.keys(pe).length===0&&x.delete(Z)}r.remove(P)}function C(P){const E=r.get(P);s.deleteTexture(E.__webglTexture);const Z=P.source,pe=x.get(Z);delete pe[E.__cacheKey],d.memory.textures--}function w(P){const E=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(E.__webglFramebuffer[pe]))for(let _e=0;_e<E.__webglFramebuffer[pe].length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[pe][_e]);else s.deleteFramebuffer(E.__webglFramebuffer[pe]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[pe])}else{if(Array.isArray(E.__webglFramebuffer))for(let pe=0;pe<E.__webglFramebuffer.length;pe++)s.deleteFramebuffer(E.__webglFramebuffer[pe]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pe=0;pe<E.__webglColorRenderbuffer.length;pe++)E.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[pe]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=P.textures;for(let pe=0,_e=Z.length;pe<_e;pe++){const de=r.get(Z[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),d.memory.textures--),r.remove(Z[pe])}r.remove(P)}let z=0;function ie(){z=0}function $(){const P=z;return P>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),z+=1,P}function oe(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function he(P,E){const Z=r.get(P);if(P.isVideoTexture&&qe(P),P.isRenderTargetTexture===!1&&P.version>0&&Z.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Z,P,E);return}}n.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function se(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,E);return}n.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function me(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){Q(Z,P,E);return}n.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function H(P,E){const Z=r.get(P);if(P.version>0&&Z.__version!==P.version){ce(Z,P,E);return}n.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const ue={[id]:s.REPEAT,[$r]:s.CLAMP_TO_EDGE,[rd]:s.MIRRORED_REPEAT},le={[hi]:s.NEAREST,[Kv]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[yi]:s.LINEAR,[pc]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},N={[Jv]:s.NEVER,[s0]:s.ALWAYS,[e0]:s.LESS,[Wm]:s.LEQUAL,[t0]:s.EQUAL,[r0]:s.GEQUAL,[n0]:s.GREATER,[i0]:s.NOTEQUAL};function re(P,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yi||E.magFilter===pc||E.magFilter===Qa||E.magFilter===Zr||E.minFilter===yi||E.minFilter===pc||E.minFilter===Qa||E.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[E.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[E.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[E.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,le[E.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,le[E.minFilter]),E.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,N[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===hi||E.minFilter!==Qa&&E.minFilter!==Zr||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ue(P,E){let Z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",U));const pe=E.source;let _e=x.get(pe);_e===void 0&&(_e={},x.set(pe,_e));const de=oe(E);if(de!==P.__cacheKey){_e[de]===void 0&&(_e[de]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,Z=!0),_e[de].usedTimes++;const Ge=_e[P.__cacheKey];Ge!==void 0&&(_e[P.__cacheKey].usedTimes--,Ge.usedTimes===0&&C(E)),P.__cacheKey=de,P.__webglTexture=_e[de].texture}return Z}function Q(P,E,Z){let pe=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pe=s.TEXTURE_3D);const _e=Ue(P,E),de=E.source;n.bindTexture(pe,P.__webglTexture,s.TEXTURE0+Z);const Ge=r.get(de);if(de.version!==Ge.__version||_e===!0){n.activeTexture(s.TEXTURE0+Z);const Ae=Tt.getPrimaries(Tt.workingColorSpace),Fe=E.colorSpace===vr?null:Tt.getPrimaries(E.colorSpace),lt=E.colorSpace===vr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let Me=R(E.image,!1,a.maxTextureSize);Me=Ct(E,Me);const ze=u.convert(E.format,E.colorSpace),Ke=u.convert(E.type);let Je=L(E.internalFormat,ze,Ke,E.colorSpace,E.isVideoTexture);re(pe,E);let Be;const ct=E.mipmaps,it=E.isVideoTexture!==!0,Rt=Ge.__version===void 0||_e===!0,X=de.dataReady,Re=O(E,Me);if(E.isDepthTexture)Je=b(E.format===qs,E.type),Rt&&(it?n.texStorage2D(s.TEXTURE_2D,1,Je,Me.width,Me.height):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ze,Ke,null));else if(E.isDataTexture)if(ct.length>0){it&&Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let ae=0,fe=ct.length;ae<fe;ae++)Be=ct[ae],it?X&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Ke,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,ze,Ke,Be.data);E.generateMipmaps=!1}else it?(Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,Me.width,Me.height),X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,Ke,Me.data)):n.texImage2D(s.TEXTURE_2D,0,Je,Me.width,Me.height,0,ze,Ke,Me.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,ct[0].width,ct[0].height,Me.depth);for(let ae=0,fe=ct.length;ae<fe;ae++)if(Be=ct[ae],E.format!==fi)if(ze!==null)if(it){if(X)if(E.layerUpdates.size>0){const De=rm(Be.width,Be.height,E.format,E.type);for(const Pe of E.layerUpdates){const rt=Be.data.subarray(Pe*De/Be.data.BYTES_PER_ELEMENT,(Pe+1)*De/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Pe,Be.width,Be.height,1,ze,rt)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,ze,Be.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Me.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Me.depth,ze,Ke,Be.data):n.texImage3D(s.TEXTURE_2D_ARRAY,ae,Je,Be.width,Be.height,Me.depth,0,ze,Ke,Be.data)}else{it&&Rt&&n.texStorage2D(s.TEXTURE_2D,Re,Je,ct[0].width,ct[0].height);for(let ae=0,fe=ct.length;ae<fe;ae++)Be=ct[ae],E.format!==fi?ze!==null?it?X&&n.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Be.data):n.compressedTexImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Ke,Be.data):n.texImage2D(s.TEXTURE_2D,ae,Je,Be.width,Be.height,0,ze,Ke,Be.data)}else if(E.isDataArrayTexture)if(it){if(Rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Je,Me.width,Me.height,Me.depth),X)if(E.layerUpdates.size>0){const ae=rm(Me.width,Me.height,E.format,E.type);for(const fe of E.layerUpdates){const De=Me.data.subarray(fe*ae/Me.data.BYTES_PER_ELEMENT,(fe+1)*ae/Me.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,ze,Ke,De)}E.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ke,Me.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,Me.width,Me.height,Me.depth,0,ze,Ke,Me.data);else if(E.isData3DTexture)it?(Rt&&n.texStorage3D(s.TEXTURE_3D,Re,Je,Me.width,Me.height,Me.depth),X&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ke,Me.data)):n.texImage3D(s.TEXTURE_3D,0,Je,Me.width,Me.height,Me.depth,0,ze,Ke,Me.data);else if(E.isFramebufferTexture){if(Rt)if(it)n.texStorage2D(s.TEXTURE_2D,Re,Je,Me.width,Me.height);else{let ae=Me.width,fe=Me.height;for(let De=0;De<Re;De++)n.texImage2D(s.TEXTURE_2D,De,Je,ae,fe,0,ze,Ke,null),ae>>=1,fe>>=1}}else if(ct.length>0){if(it&&Rt){const ae=Xe(ct[0]);n.texStorage2D(s.TEXTURE_2D,Re,Je,ae.width,ae.height)}for(let ae=0,fe=ct.length;ae<fe;ae++)Be=ct[ae],it?X&&n.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze,Ke,Be):n.texImage2D(s.TEXTURE_2D,ae,Je,ze,Ke,Be);E.generateMipmaps=!1}else if(it){if(Rt){const ae=Xe(Me);n.texStorage2D(s.TEXTURE_2D,Re,Je,ae.width,ae.height)}X&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Ke,Me)}else n.texImage2D(s.TEXTURE_2D,0,Je,ze,Ke,Me);y(E)&&g(pe),Ge.__version=de.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ce(P,E,Z){if(E.image.length!==6)return;const pe=Ue(P,E),_e=E.source;n.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+Z);const de=r.get(_e);if(_e.version!==de.__version||pe===!0){n.activeTexture(s.TEXTURE0+Z);const Ge=Tt.getPrimaries(Tt.workingColorSpace),Ae=E.colorSpace===vr?null:Tt.getPrimaries(E.colorSpace),Fe=E.colorSpace===vr||Ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const lt=E.isCompressedTexture||E.image[0].isCompressedTexture,Me=E.image[0]&&E.image[0].isDataTexture,ze=[];for(let fe=0;fe<6;fe++)!lt&&!Me?ze[fe]=R(E.image[fe],!0,a.maxCubemapSize):ze[fe]=Me?E.image[fe].image:E.image[fe],ze[fe]=Ct(E,ze[fe]);const Ke=ze[0],Je=u.convert(E.format,E.colorSpace),Be=u.convert(E.type),ct=L(E.internalFormat,Je,Be,E.colorSpace),it=E.isVideoTexture!==!0,Rt=de.__version===void 0||pe===!0,X=_e.dataReady;let Re=O(E,Ke);re(s.TEXTURE_CUBE_MAP,E);let ae;if(lt){it&&Rt&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,Ke.width,Ke.height);for(let fe=0;fe<6;fe++){ae=ze[fe].mipmaps;for(let De=0;De<ae.length;De++){const Pe=ae[De];E.format!==fi?Je!==null?it?X&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Pe.width,Pe.height,Je,Pe.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ct,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Pe.width,Pe.height,Je,Be,Pe.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ct,Pe.width,Pe.height,0,Je,Be,Pe.data)}}}else{if(ae=E.mipmaps,it&&Rt){ae.length>0&&Re++;const fe=Xe(ze[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ct,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ze[fe].width,ze[fe].height,Je,Be,ze[fe].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,ze[fe].width,ze[fe].height,0,Je,Be,ze[fe].data);for(let De=0;De<ae.length;De++){const rt=ae[De].image[fe].image;it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,rt.width,rt.height,Je,Be,rt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ct,rt.width,rt.height,0,Je,Be,rt.data)}}else{it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Je,Be,ze[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ct,Je,Be,ze[fe]);for(let De=0;De<ae.length;De++){const Pe=ae[De];it?X&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,Je,Be,Pe.image[fe]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ct,Je,Be,Pe.image[fe])}}}y(E)&&g(s.TEXTURE_CUBE_MAP),de.__version=_e.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ee(P,E,Z,pe,_e,de){const Ge=u.convert(Z.format,Z.colorSpace),Ae=u.convert(Z.type),Fe=L(Z.internalFormat,Ge,Ae,Z.colorSpace),lt=r.get(E),Me=r.get(Z);if(Me.__renderTarget=E,!lt.__hasExternalTextures){const ze=Math.max(1,E.width>>de),Ke=Math.max(1,E.height>>de);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?n.texImage3D(_e,de,Fe,ze,Ke,E.depth,0,Ge,Ae,null):n.texImage2D(_e,de,Fe,ze,Ke,0,Ge,Ae,null)}n.bindFramebuffer(s.FRAMEBUFFER,P),ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,_e,Me.__webglTexture,0,ft(E)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,_e,Me.__webglTexture,de),n.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(P,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,P),E.depthBuffer){const pe=E.depthTexture,_e=pe&&pe.isDepthTexture?pe.type:null,de=b(E.stencilBuffer,_e),Ge=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=ft(E);ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,de,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ge,s.RENDERBUFFER,P)}else{const pe=E.textures;for(let _e=0;_e<pe.length;_e++){const de=pe[_e],Ge=u.convert(de.format,de.colorSpace),Ae=u.convert(de.type),Fe=L(de.internalFormat,Ge,Ae,de.colorSpace),lt=ft(E);Z&&ut(E)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,Fe,E.width,E.height):ut(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,Fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function we(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(s.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(E.depthTexture);pe.__renderTarget=E,(!pe.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const _e=pe.__webglTexture,de=ft(E);if(E.depthTexture.format===Hs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,_e,0);else if(E.depthTexture.format===qs)ut(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function Ne(P){const E=r.get(P),Z=P.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pe){const _e=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pe.removeEventListener("dispose",_e)};pe.addEventListener("dispose",_e),E.__depthDisposeCallback=_e}E.__boundDepthTexture=pe}if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");we(E.__webglFramebuffer,P)}else if(Z){E.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[pe]),E.__webglDepthbuffer[pe]===void 0)E.__webglDepthbuffer[pe]=s.createRenderbuffer(),xe(E.__webglDepthbuffer[pe],P,!1);else{const _e=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=E.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,_e,s.RENDERBUFFER,de)}}else if(n.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),xe(E.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,_e),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,_e)}n.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(P,E,Z){const pe=r.get(P);E!==void 0&&Ee(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ne(P)}function bt(P){const E=P.texture,Z=r.get(P),pe=r.get(E);P.addEventListener("dispose",I);const _e=P.textures,de=P.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=E.version,d.memory.textures++),de){Z.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<E.mipmaps.length;Fe++)Z.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ae=0;Ae<E.mipmaps.length;Ae++)Z.__webglFramebuffer[Ae]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const lt=r.get(_e[Ae]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&ut(P)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];Z.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae]);const lt=u.convert(Fe.format,Fe.colorSpace),Me=u.convert(Fe.type),ze=L(Fe.internalFormat,lt,Me,Fe.colorSpace,P.isXRRenderTarget===!0),Ke=ft(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,ze,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(Z.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){n.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,E);for(let Ae=0;Ae<6;Ae++)if(E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Ae][Fe],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(Z.__webglFramebuffer[Ae],P,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(E)&&g(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const lt=_e[Ae],Me=r.get(lt);n.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,lt),Ee(Z.__webglFramebuffer,P,lt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(lt)&&g(s.TEXTURE_2D)}n.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Ae,pe.__webglTexture),re(Ae,E),E.mipmaps&&E.mipmaps.length>0)for(let Fe=0;Fe<E.mipmaps.length;Fe++)Ee(Z.__webglFramebuffer[Fe],P,E,s.COLOR_ATTACHMENT0,Ae,Fe);else Ee(Z.__webglFramebuffer,P,E,s.COLOR_ATTACHMENT0,Ae,0);y(E)&&g(Ae),n.unbindTexture()}P.depthBuffer&&Ne(P)}function pt(P){const E=P.textures;for(let Z=0,pe=E.length;Z<pe;Z++){const _e=E[Z];if(y(_e)){const de=F(P),Ge=r.get(_e).__webglTexture;n.bindTexture(de,Ge),g(de),n.unbindTexture()}}}const It=[],B=[];function yn(P){if(P.samples>0){if(ut(P)===!1){const E=P.textures,Z=P.width,pe=P.height;let _e=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=r.get(P),Ae=E.length>1;if(Ae)for(let Fe=0;Fe<E.length;Fe++)n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<E.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=r.get(E[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,Z,pe,0,0,Z,pe,_e,s.NEAREST),h===!0&&(It.length=0,B.length=0,It.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(de),B.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<E.length;Fe++){n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const lt=r.get(E[Fe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,lt,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const E=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function ft(P){return Math.min(a.maxSamples,P.samples)}function ut(P){const E=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function qe(P){const E=d.render.frame;_.get(P)!==E&&(_.set(P,E),P.update())}function Ct(P,E){const Z=P.colorSpace,pe=P.format,_e=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Z!==Ys&&Z!==vr&&(Tt.getTransfer(Z)===Dt?(pe!==fi||_e!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Xe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=$,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=me,this.setTextureCube=H,this.rebindTextures=Qe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function vE(s,e){function n(r,a=vr){let u;const d=Tt.getTransfer(a);if(r===Gi)return s.UNSIGNED_BYTE;if(r===Od)return s.UNSIGNED_SHORT_4_4_4_4;if(r===zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Nm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Im)return s.BYTE;if(r===Um)return s.SHORT;if(r===zo)return s.UNSIGNED_SHORT;if(r===kd)return s.INT;if(r===Qr)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Bo)return s.HALF_FLOAT;if(r===Fm)return s.ALPHA;if(r===km)return s.RGB;if(r===fi)return s.RGBA;if(r===Om)return s.LUMINANCE;if(r===zm)return s.LUMINANCE_ALPHA;if(r===Hs)return s.DEPTH_COMPONENT;if(r===qs)return s.DEPTH_STENCIL;if(r===Bm)return s.RED;if(r===Bd)return s.RED_INTEGER;if(r===Hm)return s.RG;if(r===Hd)return s.RG_INTEGER;if(r===Vd)return s.RGBA_INTEGER;if(r===yl||r===Sl||r===Ml||r===El)if(d===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ml)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===El)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===sd||r===od||r===ad||r===ld)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===sd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ad)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ld)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ud||r===cd||r===dd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===ud||r===cd)return d===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===dd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===fd||r===hd||r===pd||r===md||r===gd||r===_d||r===vd||r===xd||r===yd||r===Sd||r===Md||r===Ed||r===Td||r===wd)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===fd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===md)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_d)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===vd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===xd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Md)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ed)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Td)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wd)return d===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tl||r===Ad||r===Rd)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===Tl)return d===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ad)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rd)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vm||r===Cd||r===bd||r===Pd)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Tl)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Cd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pd)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===js?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const xE={type:"move"};class Wc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let a=null,u=null,d=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const R of e.hand.values()){const y=n.getJointPose(R,r),g=this._getHandJoint(m,R);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const _=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=_.position.distanceTo(v.position),S=.02,T=.005;m.inputState.pinching&&x>S+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,u.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(u.linearVelocity)):h.hasLinearVelocity=!1,u.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(u.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=n.getPose(e.targetRaySpace,r),a===null&&u!==null&&(a=u),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(xE)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=u!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new ko;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const yE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ME{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,r){if(this.texture===null){const a=new kn,u=e.properties.get(a);u.__webglTexture=n.texture,(n.depthNear!=r.depthNear||n.depthFar!=r.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Mr({vertexShader:yE,fragmentShader:SE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ei(new Pl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class EE extends $s{constructor(e,n){super();const r=this;let a=null,u=1,d=null,f="local-floor",h=1,m=null,_=null,v=null,x=null,S=null,T=null;const R=new ME,y=n.getContextAttributes();let g=null,F=null;const L=[],b=[],O=new wt;let U=null;const I=new Jn;I.viewport=new jt;const V=new Jn;V.viewport=new jt;const C=[I,V],w=new G0;let z=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=L[Q];return ce===void 0&&(ce=new Wc,L[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=L[Q];return ce===void 0&&(ce=new Wc,L[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=L[Q];return ce===void 0&&(ce=new Wc,L[Q]=ce),ce.getHandSpace()};function $(Q){const ce=b.indexOf(Q.inputSource);if(ce===-1)return;const Ee=L[ce];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||d),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function oe(){a.removeEventListener("select",$),a.removeEventListener("selectstart",$),a.removeEventListener("selectend",$),a.removeEventListener("squeeze",$),a.removeEventListener("squeezestart",$),a.removeEventListener("squeezeend",$),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",he);for(let Q=0;Q<L.length;Q++){const ce=b[Q];ce!==null&&(b[Q]=null,L[Q].disconnect(ce))}z=null,ie=null,R.reset(),e.setRenderTarget(g),S=null,x=null,v=null,a=null,F=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(U),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){u=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return v},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(Q){if(a=Q,a!==null){if(g=e.getRenderTarget(),a.addEventListener("select",$),a.addEventListener("selectstart",$),a.addEventListener("selectend",$),a.addEventListener("squeeze",$),a.addEventListener("squeezestart",$),a.addEventListener("squeezeend",$),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(O),a.renderState.layers===void 0){const ce={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(a,n,ce),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),F=new Jr(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ce=null,Ee=null,xe=null;y.depth&&(xe=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ce=y.stencil?qs:Hs,Ee=y.stencil?js:Qr);const we={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:u};v=new XRWebGLBinding(a,n),x=v.createProjectionLayer(we),a.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),F=new Jr(x.textureWidth,x.textureHeight,{format:fi,type:Gi,depthTexture:new ng(x.textureWidth,x.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(h),m=null,d=await a.requestReferenceSpace(f),Ue.setContext(a),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return R.getDepthTexture()};function he(Q){for(let ce=0;ce<Q.removed.length;ce++){const Ee=Q.removed[ce],xe=b.indexOf(Ee);xe>=0&&(b[xe]=null,L[xe].disconnect(Ee))}for(let ce=0;ce<Q.added.length;ce++){const Ee=Q.added[ce];let xe=b.indexOf(Ee);if(xe===-1){for(let Ne=0;Ne<L.length;Ne++)if(Ne>=b.length){b.push(Ee),xe=Ne;break}else if(b[Ne]===null){b[Ne]=Ee,xe=Ne;break}if(xe===-1)break}const we=L[xe];we&&we.connect(Ee)}}const se=new ee,me=new ee;function H(Q,ce,Ee){se.setFromMatrixPosition(ce.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const xe=se.distanceTo(me),we=ce.projectionMatrix.elements,Ne=Ee.projectionMatrix.elements,Qe=we[14]/(we[10]-1),bt=we[14]/(we[10]+1),pt=(we[9]+1)/we[5],It=(we[9]-1)/we[5],B=(we[8]-1)/we[0],yn=(Ne[8]+1)/Ne[0],ft=Qe*B,ut=Qe*yn,qe=xe/(-B+yn),Ct=qe*-B;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ct),Q.translateZ(qe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),we[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const Xe=Qe+qe,P=bt+qe,E=ft-Ct,Z=ut+(xe-Ct),pe=pt*bt/P*Xe,_e=It*bt/P*Xe;Q.projectionMatrix.makePerspective(E,Z,pe,_e,Xe,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(a===null)return;let ce=Q.near,Ee=Q.far;R.texture!==null&&(R.depthNear>0&&(ce=R.depthNear),R.depthFar>0&&(Ee=R.depthFar)),w.near=V.near=I.near=ce,w.far=V.far=I.far=Ee,(z!==w.near||ie!==w.far)&&(a.updateRenderState({depthNear:w.near,depthFar:w.far}),z=w.near,ie=w.far),I.layers.mask=Q.layers.mask|2,V.layers.mask=Q.layers.mask|4,w.layers.mask=I.layers.mask|V.layers.mask;const xe=Q.parent,we=w.cameras;ue(w,xe);for(let Ne=0;Ne<we.length;Ne++)ue(we[Ne],xe);we.length===2?H(w,I,V):w.projectionMatrix.copy(I.projectionMatrix),le(Q,w,xe)};function le(Q,ce,Ee){Ee===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Dd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(x===null&&S===null))return h},this.setFoveation=function(Q){h=Q,x!==null&&(x.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return R.texture!==null},this.getDepthSensingMesh=function(){return R.getMesh(w)};let N=null;function re(Q,ce){if(_=ce.getViewerPose(m||d),T=ce,_!==null){const Ee=_.views;S!==null&&(e.setRenderTargetFramebuffer(F,S.framebuffer),e.setRenderTarget(F));let xe=!1;Ee.length!==w.cameras.length&&(w.cameras.length=0,xe=!0);for(let Ne=0;Ne<Ee.length;Ne++){const Qe=Ee[Ne];let bt=null;if(S!==null)bt=S.getViewport(Qe);else{const It=v.getViewSubImage(x,Qe);bt=It.viewport,Ne===0&&(e.setRenderTargetTextures(F,It.colorTexture,x.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(F))}let pt=C[Ne];pt===void 0&&(pt=new Jn,pt.layers.enable(Ne),pt.viewport=new jt,C[Ne]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(bt.x,bt.y,bt.width,bt.height),Ne===0&&(w.matrix.copy(pt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),xe===!0&&w.cameras.push(pt)}const we=a.enabledFeatures;if(we&&we.includes("depth-sensing")){const Ne=v.getDepthInformation(Ee[0]);Ne&&Ne.isValid&&Ne.texture&&R.init(e,Ne,a.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const xe=b[Ee],we=L[Ee];xe!==null&&we!==void 0&&we.update(xe,ce,m||d)}N&&N(Q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),T=null}const Ue=new sg;Ue.setAnimationLoop(re),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const Wr=new Mi,TE=new Gt;function wE(s,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function r(y,g){g.color.getRGB(y.fogColor.value,Jm(s)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function a(y,g,F,L,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?u(y,g):g.isMeshToonMaterial?(u(y,g),v(y,g)):g.isMeshPhongMaterial?(u(y,g),_(y,g)):g.isMeshStandardMaterial?(u(y,g),x(y,g),g.isMeshPhysicalMaterial&&S(y,g,b)):g.isMeshMatcapMaterial?(u(y,g),T(y,g)):g.isMeshDepthMaterial?u(y,g):g.isMeshDistanceMaterial?(u(y,g),R(y,g)):g.isMeshNormalMaterial?u(y,g):g.isLineBasicMaterial?(d(y,g),g.isLineDashedMaterial&&f(y,g)):g.isPointsMaterial?h(y,g,F,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function u(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Fn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Fn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const F=e.get(g),L=F.envMap,b=F.envMapRotation;L&&(y.envMap.value=L,Wr.copy(b),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),y.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(Wr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function d(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function f(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,F,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*F,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function _(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function v(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function x(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function S(y,g,F){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=F.texture,y.transmissionSamplerSize.value.set(F.width,F.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,g){g.matcap&&(y.matcap.value=g.matcap)}function R(y,g){const F=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(F.matrixWorld),y.nearDistance.value=F.shadow.camera.near,y.farDistance.value=F.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function AE(s,e,n,r){let a={},u={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(F,L){const b=L.program;r.uniformBlockBinding(F,b)}function m(F,L){let b=a[F.id];b===void 0&&(T(F),b=_(F),a[F.id]=b,F.addEventListener("dispose",y));const O=L.program;r.updateUBOMapping(F,O);const U=e.render.frame;u[F.id]!==U&&(x(F),u[F.id]=U)}function _(F){const L=v();F.__bindingPointIndex=L;const b=s.createBuffer(),O=F.__size,U=F.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,O,U),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function v(){for(let F=0;F<f;F++)if(d.indexOf(F)===-1)return d.push(F),F;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(F){const L=a[F.id],b=F.uniforms,O=F.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let U=0,I=b.length;U<I;U++){const V=Array.isArray(b[U])?b[U]:[b[U]];for(let C=0,w=V.length;C<w;C++){const z=V[C];if(S(z,U,C,O)===!0){const ie=z.__offset,$=Array.isArray(z.value)?z.value:[z.value];let oe=0;for(let he=0;he<$.length;he++){const se=$[he],me=R(se);typeof se=="number"||typeof se=="boolean"?(z.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ie+oe,z.__data)):se.isMatrix3?(z.__data[0]=se.elements[0],z.__data[1]=se.elements[1],z.__data[2]=se.elements[2],z.__data[3]=0,z.__data[4]=se.elements[3],z.__data[5]=se.elements[4],z.__data[6]=se.elements[5],z.__data[7]=0,z.__data[8]=se.elements[6],z.__data[9]=se.elements[7],z.__data[10]=se.elements[8],z.__data[11]=0):(se.toArray(z.__data,oe),oe+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(F,L,b,O){const U=F.value,I=L+"_"+b;if(O[I]===void 0)return typeof U=="number"||typeof U=="boolean"?O[I]=U:O[I]=U.clone(),!0;{const V=O[I];if(typeof U=="number"||typeof U=="boolean"){if(V!==U)return O[I]=U,!0}else if(V.equals(U)===!1)return V.copy(U),!0}return!1}function T(F){const L=F.uniforms;let b=0;const O=16;for(let I=0,V=L.length;I<V;I++){const C=Array.isArray(L[I])?L[I]:[L[I]];for(let w=0,z=C.length;w<z;w++){const ie=C[w],$=Array.isArray(ie.value)?ie.value:[ie.value];for(let oe=0,he=$.length;oe<he;oe++){const se=$[oe],me=R(se),H=b%O,ue=H%me.boundary,le=H+ue;b+=ue,le!==0&&O-le<me.storage&&(b+=O-le),ie.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=b,b+=me.storage}}}const U=b%O;return U>0&&(b+=O-U),F.__size=b,F.__cache={},this}function R(F){const L={boundary:0,storage:0};return typeof F=="number"||typeof F=="boolean"?(L.boundary=4,L.storage=4):F.isVector2?(L.boundary=8,L.storage=8):F.isVector3||F.isColor?(L.boundary=16,L.storage=12):F.isVector4?(L.boundary=16,L.storage=16):F.isMatrix3?(L.boundary=48,L.storage=48):F.isMatrix4?(L.boundary=64,L.storage=64):F.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",F),L}function y(F){const L=F.target;L.removeEventListener("dispose",y);const b=d.indexOf(L.__bindingPointIndex);d.splice(b,1),s.deleteBuffer(a[L.id]),delete a[L.id],delete u[L.id]}function g(){for(const F in a)s.deleteBuffer(a[F]);d=[],a={},u={}}return{bind:h,update:m,dispose:g}}class RE{constructor(e={}){const{canvas:n=a0(),context:r=null,depth:a=!0,stencil:u=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=d;const T=new Uint32Array(4),R=new Int32Array(4);let y=null,g=null;const F=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=yr,this.toneMappingExposure=1;const b=this;let O=!1,U=0,I=0,V=null,C=-1,w=null;const z=new jt,ie=new jt;let $=null;const oe=new yt(0);let he=0,se=n.width,me=n.height,H=1,ue=null,le=null;const N=new jt(0,0,se,me),re=new jt(0,0,se,me);let Ue=!1;const Q=new Xd;let ce=!1,Ee=!1;const xe=new Gt,we=new Gt,Ne=new ee,Qe=new jt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function It(){return V===null?H:1}let B=r;function yn(A,j){return n.getContext(A,j)}try{const A={alpha:!0,depth:a,stencil:u,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Fd}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),B===null){const j="webgl2";if(B=yn(j,A),B===null)throw yn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ft,ut,qe,Ct,Xe,P,E,Z,pe,_e,de,Ge,Ae,Fe,lt,Me,ze,Ke,Je,Be,ct,it,Rt,X;function Re(){ft=new FS(B),ft.init(),it=new vE(B,ft),ut=new PS(B,ft,e,it),qe=new gE(B,ft),ut.reverseDepthBuffer&&x&&qe.buffers.depth.setReversed(!0),Ct=new zS(B),Xe=new iE,P=new _E(B,ft,qe,Xe,ut,it,Ct),E=new LS(b),Z=new NS(b),pe=new j0(B),Rt=new CS(B,pe),_e=new kS(B,pe,Ct,Rt),de=new HS(B,_e,pe,Ct),Je=new BS(B,ut,P),Me=new DS(Xe),Ge=new nE(b,E,Z,ft,ut,Rt,Me),Ae=new wE(b,Xe),Fe=new sE,lt=new dE(ft),Ke=new RS(b,E,Z,qe,de,S,h),ze=new pE(b,de,ut),X=new AE(B,Ct,ut,qe),Be=new bS(B,ft,Ct),ct=new OS(B,ft,Ct),Ct.programs=Ge.programs,b.capabilities=ut,b.extensions=ft,b.properties=Xe,b.renderLists=Fe,b.shadowMap=ze,b.state=qe,b.info=Ct}Re();const ae=new EE(b,B);this.xr=ae,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=ft.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ft.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(A){A!==void 0&&(H=A,this.setSize(se,me,!1))},this.getSize=function(A){return A.set(se,me)},this.setSize=function(A,j,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=A,me=j,n.width=Math.floor(A*H),n.height=Math.floor(j*H),te===!0&&(n.style.width=A+"px",n.style.height=j+"px"),this.setViewport(0,0,A,j)},this.getDrawingBufferSize=function(A){return A.set(se*H,me*H).floor()},this.setDrawingBufferSize=function(A,j,te){se=A,me=j,H=te,n.width=Math.floor(A*te),n.height=Math.floor(j*te),this.setViewport(0,0,A,j)},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,j,te,ne){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,j,te,ne),qe.viewport(z.copy(N).multiplyScalar(H).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,j,te,ne){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,j,te,ne),qe.scissor(ie.copy(re).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){qe.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){le=A},this.getClearColor=function(A){return A.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(A=!0,j=!0,te=!0){let ne=0;if(A){let G=!1;if(V!==null){const Se=V.texture.format;G=Se===Vd||Se===Hd||Se===Bd}if(G){const Se=V.texture.type,Ce=Se===Gi||Se===Qr||Se===zo||Se===js||Se===Od||Se===zd,Ie=Ke.getClearColor(),ke=Ke.getClearAlpha(),et=Ie.r,tt=Ie.g,je=Ie.b;Ce?(T[0]=et,T[1]=tt,T[2]=je,T[3]=ke,B.clearBufferuiv(B.COLOR,0,T)):(R[0]=et,R[1]=tt,R[2]=je,R[3]=ke,B.clearBufferiv(B.COLOR,0,R))}else ne|=B.COLOR_BUFFER_BIT}j&&(ne|=B.DEPTH_BUFFER_BIT),te&&(ne|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ke.dispose(),Fe.dispose(),lt.dispose(),Xe.dispose(),E.dispose(),Z.dispose(),de.dispose(),Rt.dispose(),X.dispose(),Ge.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",es),ae.removeEventListener("sessionend",Xi),Ei.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const A=Ct.autoReset,j=ze.enabled,te=ze.autoUpdate,ne=ze.needsUpdate,G=ze.type;Re(),Ct.autoReset=A,ze.enabled=j,ze.autoUpdate=te,ze.needsUpdate=ne,ze.type=G}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function rt(A){const j=A.target;j.removeEventListener("dispose",rt),Nt(j)}function Nt(A){Qt(A),Xe.remove(A)}function Qt(A){const j=Xe.get(A).programs;j!==void 0&&(j.forEach(function(te){Ge.releaseProgram(te)}),A.isShaderMaterial&&Ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,j,te,ne,G,Se){j===null&&(j=bt);const Ce=G.isMesh&&G.matrixWorld.determinant()<0,Ie=qo(A,j,te,ne,G);qe.setMaterial(ne,Ce);let ke=te.index,et=1;if(ne.wireframe===!0){if(ke=_e.getWireframeAttribute(te),ke===void 0)return;et=2}const tt=te.drawRange,je=te.attributes.position;let st=tt.start*et,St=(tt.start+tt.count)*et;Se!==null&&(st=Math.max(st,Se.start*et),St=Math.min(St,(Se.start+Se.count)*et)),ke!==null?(st=Math.max(st,0),St=Math.min(St,ke.count)):je!=null&&(st=Math.max(st,0),St=Math.min(St,je.count));const Mt=St-st;if(Mt<0||Mt===1/0)return;Rt.setup(G,ne,Ie,te,ke);let Ot,_t=Be;if(ke!==null&&(Ot=pe.get(ke),_t=ct,_t.setIndex(Ot)),G.isMesh)ne.wireframe===!0?(qe.setLineWidth(ne.wireframeLinewidth*It()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(G.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),qe.setLineWidth(Ye*It()),G.isLineSegments?_t.setMode(B.LINES):G.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else G.isPoints?_t.setMode(B.POINTS):G.isSprite&&_t.setMode(B.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ft.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Wt=G._multiDrawCounts,mt=G._multiDrawCount,ln=ke?pe.get(ke).bytesPerElement:1,ti=Xe.get(ne).currentProgram.getUniforms();for(let Mn=0;Mn<mt;Mn++)ti.setValue(B,"_gl_DrawID",Mn),_t.render(Ye[Mn]/ln,Wt[Mn])}else if(G.isInstancedMesh)_t.renderInstances(st,Mt,G.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Wt=Math.min(te.instanceCount,Ye);_t.renderInstances(st,Mt,Wt)}else _t.render(st,Mt)};function vt(A,j,te){A.transparent===!0&&A.side===zi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,ts(A,j,te),A.side=Sr,A.needsUpdate=!0,ts(A,j,te),A.side=zi):ts(A,j,te)}this.compile=function(A,j,te=null){te===null&&(te=A),g=lt.get(te),g.init(j),L.push(g),te.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),A!==te&&A.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();const ne=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ie=Se[Ce];vt(Ie,te,G),ne.add(Ie)}else vt(Se,te,G),ne.add(Se)}),L.pop(),g=null,ne},this.compileAsync=function(A,j,te=null){const ne=this.compile(A,j,te);return new Promise(G=>{function Se(){if(ne.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&ne.delete(Ce)}),ne.size===0){G(A);return}setTimeout(Se,10)}ft.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Cn=null;function Sn(A){Cn&&Cn(A)}function es(){Ei.stop()}function Xi(){Ei.start()}const Ei=new sg;Ei.setAnimationLoop(Sn),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(A){Cn=A,ae.setAnimationLoop(A),A===null?Ei.stop():Ei.start()},ae.addEventListener("sessionstart",es),ae.addEventListener("sessionend",Xi),this.render=function(A,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(j),j=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(b,A,j,V),g=lt.get(A,L.length),g.init(j),L.push(g),we.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(we),Ee=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,Ee),y=Fe.get(A,F.length),y.init(),F.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Ti(Se,j,-1/0,b.sortObjects)}Ti(A,j,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(ue,le),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&Ke.addToRenderList(y,A),this.info.render.frame++,ce===!0&&Me.beginShadows();const te=g.state.shadowsArray;ze.render(te,A,j),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=y.opaque,G=y.transmissive;if(g.setupLights(),j.isArrayCamera){const Se=j.cameras;if(G.length>0)for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ke=Se[Ce];Tr(ne,G,A,ke)}pt&&Ke.render(A);for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ke=Se[Ce];Er(y,A,ke,ke.viewport)}}else G.length>0&&Tr(ne,G,A,j),pt&&Ke.render(A),Er(y,A,j);V!==null&&(P.updateMultisampleRenderTarget(V),P.updateRenderTargetMipmap(V)),A.isScene===!0&&A.onAfterRender(b,A,j),Rt.resetDefaultState(),C=-1,w=null,L.pop(),L.length>0?(g=L[L.length-1],ce===!0&&Me.setGlobalState(b.clippingPlanes,g.state.camera)):g=null,F.pop(),F.length>0?y=F[F.length-1]:y=null};function Ti(A,j,te,ne){if(A.visible===!1)return;if(A.layers.test(j.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(j);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Q.intersectsSprite(A)){ne&&Qe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(we);const Ce=de.update(A),Ie=A.material;Ie.visible&&y.push(A,Ce,Ie,te,Qe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Q.intersectsObject(A))){const Ce=de.update(A),Ie=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Qe.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Qe.copy(Ce.boundingSphere.center)),Qe.applyMatrix4(A.matrixWorld).applyMatrix4(we)),Array.isArray(Ie)){const ke=Ce.groups;for(let et=0,tt=ke.length;et<tt;et++){const je=ke[et],st=Ie[je.materialIndex];st&&st.visible&&y.push(A,Ce,st,te,Qe.z,je)}}else Ie.visible&&y.push(A,Ce,Ie,te,Qe.z,null)}}const Se=A.children;for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++)Ti(Se[Ce],j,te,ne)}function Er(A,j,te,ne){const G=A.opaque,Se=A.transmissive,Ce=A.transparent;g.setupLightsView(te),ce===!0&&Me.setGlobalState(b.clippingPlanes,te),ne&&qe.viewport(z.copy(ne)),G.length>0&&ji(G,j,te),Se.length>0&&ji(Se,j,te),Ce.length>0&&ji(Ce,j,te),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function Tr(A,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ne.id]===void 0&&(g.state.transmissionRenderTarget[ne.id]=new Jr(1,1,{generateMipmaps:!0,type:ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float")?Bo:Gi,minFilter:Zr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[ne.id],Ce=ne.viewport||z;Se.setSize(Ce.z,Ce.w);const Ie=b.getRenderTarget();b.setRenderTarget(Se),b.getClearColor(oe),he=b.getClearAlpha(),he<1&&b.setClearColor(16777215,.5),b.clear(),pt&&Ke.render(te);const ke=b.toneMapping;b.toneMapping=yr;const et=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),g.setupLightsView(ne),ce===!0&&Me.setGlobalState(b.clippingPlanes,ne),ji(A,te,ne),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),ft.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let je=0,st=j.length;je<st;je++){const St=j[je],Mt=St.object,Ot=St.geometry,_t=St.material,Ye=St.group;if(_t.side===zi&&Mt.layers.test(ne.layers)){const Wt=_t.side;_t.side=Fn,_t.needsUpdate=!0,Xo(Mt,te,ne,Ot,_t,Ye),_t.side=Wt,_t.needsUpdate=!0,tt=!0}}tt===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}b.setRenderTarget(Ie),b.setClearColor(oe,he),et!==void 0&&(ne.viewport=et),b.toneMapping=ke}function ji(A,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Se=A.length;G<Se;G++){const Ce=A[G],Ie=Ce.object,ke=Ce.geometry,et=ne===null?Ce.material:ne,tt=Ce.group;Ie.layers.test(te.layers)&&Xo(Ie,j,te,ke,et,tt)}}function Xo(A,j,te,ne,G,Se){A.onBeforeRender(b,j,te,ne,G,Se),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(b,j,te,ne,A,Se),G.transparent===!0&&G.side===zi&&G.forceSinglePass===!1?(G.side=Fn,G.needsUpdate=!0,b.renderBufferDirect(te,j,ne,G,A,Se),G.side=Sr,G.needsUpdate=!0,b.renderBufferDirect(te,j,ne,G,A,Se),G.side=zi):b.renderBufferDirect(te,j,ne,G,A,Se),A.onAfterRender(b,j,te,ne,G,Se)}function ts(A,j,te){j.isScene!==!0&&(j=bt);const ne=Xe.get(A),G=g.state.lights,Se=g.state.shadowsArray,Ce=G.state.version,Ie=Ge.getParameters(A,G.state,Se,j,te),ke=Ge.getProgramCacheKey(Ie);let et=ne.programs;ne.environment=A.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(A.isMeshStandardMaterial?Z:E).get(A.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&A.envMap===null?j.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",rt),et=new Map,ne.programs=et);let tt=et.get(ke);if(tt!==void 0){if(ne.currentProgram===tt&&ne.lightsStateVersion===Ce)return pi(A,Ie),tt}else Ie.uniforms=Ge.getUniforms(A),A.onBeforeCompile(Ie,b),tt=Ge.acquireProgram(Ie,ke),et.set(ke,tt),ne.uniforms=Ie.uniforms;const je=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Me.uniform),pi(A,Ie),ne.needsLights=Ll(A),ne.lightsStateVersion=Ce,ne.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=tt,ne.uniformsList=null,tt}function jo(A){if(A.uniformsList===null){const j=A.currentProgram.getUniforms();A.uniformsList=wl.seqWithValue(j.seq,A.uniforms)}return A.uniformsList}function pi(A,j){const te=Xe.get(A);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function qo(A,j,te,ne,G){j.isScene!==!0&&(j=bt),P.resetTextureUnits();const Se=j.fog,Ce=ne.isMeshStandardMaterial?j.environment:null,Ie=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ys,ke=(ne.isMeshStandardMaterial?Z:E).get(ne.envMap||Ce),et=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),je=!!te.morphAttributes.position,st=!!te.morphAttributes.normal,St=!!te.morphAttributes.color;let Mt=yr;ne.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const Ot=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,_t=Ot!==void 0?Ot.length:0,Ye=Xe.get(ne),Wt=g.state.lights;if(ce===!0&&(Ee===!0||A!==w)){const qt=A===w&&ne.id===C;Me.setState(ne,A,qt)}let mt=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Wt.state.version||Ye.outputColorSpace!==Ie||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==ke||ne.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==et||Ye.vertexTangents!==tt||Ye.morphTargets!==je||Ye.morphNormals!==st||Ye.morphColors!==St||Ye.toneMapping!==Mt||Ye.morphTargetsCount!==_t)&&(mt=!0):(mt=!0,Ye.__version=ne.version);let ln=Ye.currentProgram;mt===!0&&(ln=ts(ne,j,G));let ti=!1,Mn=!1,wr=!1;const Pt=ln.getUniforms(),En=Ye.uniforms;if(qe.useProgram(ln.program)&&(ti=!0,Mn=!0,wr=!0),ne.id!==C&&(C=ne.id,Mn=!0),ti||w!==A){qe.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),u0(xe),c0(xe),Pt.setValue(B,"projectionMatrix",xe)):Pt.setValue(B,"projectionMatrix",A.projectionMatrix),Pt.setValue(B,"viewMatrix",A.matrixWorldInverse);const hn=Pt.map.cameraPosition;hn!==void 0&&hn.setValue(B,Ne.setFromMatrixPosition(A.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),w!==A&&(w=A,Mn=!0,wr=!0)}if(G.isSkinnedMesh){Pt.setOptional(B,G,"bindMatrix"),Pt.setOptional(B,G,"bindMatrixInverse");const qt=G.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Pt.setValue(B,"boneTexture",qt.boneTexture,P))}G.isBatchedMesh&&(Pt.setOptional(B,G,"batchingTexture"),Pt.setValue(B,"batchingTexture",G._matricesTexture,P),Pt.setOptional(B,G,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",G._indirectTexture,P),Pt.setOptional(B,G,"batchingColorTexture"),G._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",G._colorsTexture,P));const fn=te.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Je.update(G,te,ln),(Mn||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Pt.setValue(B,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(En.envMap.value=ke,En.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(En.envMapIntensity.value=j.environmentIntensity),Mn&&(Pt.setValue(B,"toneMappingExposure",b.toneMappingExposure),Ye.needsLights&&Yo(En,wr),Se&&ne.fog===!0&&Ae.refreshFogUniforms(En,Se),Ae.refreshMaterialUniforms(En,ne,H,me,g.state.transmissionRenderTarget[A.id]),wl.upload(B,jo(Ye),En,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(wl.upload(B,jo(Ye),En,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(B,"center",G.center),Pt.setValue(B,"modelViewMatrix",G.modelViewMatrix),Pt.setValue(B,"normalMatrix",G.normalMatrix),Pt.setValue(B,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const qt=ne.uniformsGroups;for(let hn=0,Ar=qt.length;hn<Ar;hn++){const ht=qt[hn];X.update(ht,ln),X.bind(ht,ln)}}return ln}function Yo(A,j){A.ambientLightColor.needsUpdate=j,A.lightProbe.needsUpdate=j,A.directionalLights.needsUpdate=j,A.directionalLightShadows.needsUpdate=j,A.pointLights.needsUpdate=j,A.pointLightShadows.needsUpdate=j,A.spotLights.needsUpdate=j,A.spotLightShadows.needsUpdate=j,A.rectAreaLights.needsUpdate=j,A.hemisphereLights.needsUpdate=j}function Ll(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,j,te){Xe.get(A.texture).__webglTexture=j,Xe.get(A.depthTexture).__webglTexture=te;const ne=Xe.get(A);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,j){const te=Xe.get(A);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(A,j=0,te=0){V=A,U=j,I=te;let ne=!0,G=null,Se=!1,Ce=!1;if(A){const ke=Xe.get(A);if(ke.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(B.FRAMEBUFFER,null),ne=!1;else if(ke.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(ke.__hasExternalTextures)P.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const je=A.depthTexture;if(ke.__boundDepthTexture!==je){if(je!==null&&Xe.has(je)&&(A.width!==je.image.width||A.height!==je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}const et=A.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ce=!0);const tt=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[j])?G=tt[j][te]:G=tt[j],Se=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?G=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?G=tt[te]:G=tt,z.copy(A.viewport),ie.copy(A.scissor),$=A.scissorTest}else z.copy(N).multiplyScalar(H).floor(),ie.copy(re).multiplyScalar(H).floor(),$=Ue;if(qe.bindFramebuffer(B.FRAMEBUFFER,G)&&ne&&qe.drawBuffers(A,G),qe.viewport(z),qe.scissor(ie),qe.setScissorTest($),Se){const ke=Xe.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+j,ke.__webglTexture,te)}else if(Ce){const ke=Xe.get(A.texture),et=j||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,ke.__webglTexture,te||0,et)}C=-1},this.readRenderTargetPixels=function(A,j,te,ne,G,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){qe.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const ke=A.texture,et=ke.format,tt=ke.type;if(!ut.textureFormatReadable(et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=A.width-ne&&te>=0&&te<=A.height-G&&B.readPixels(j,te,ne,G,it.convert(et),it.convert(tt),Se)}finally{const ke=V!==null?Xe.get(V).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(A,j,te,ne,G,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const ke=A.texture,et=ke.format,tt=ke.type;if(!ut.textureFormatReadable(et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=A.width-ne&&te>=0&&te<=A.height-G){qe.bindFramebuffer(B.FRAMEBUFFER,Ie);const je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(j,te,ne,G,it.convert(et),it.convert(tt),0);const st=V!==null?Xe.get(V).__webglFramebuffer:null;qe.bindFramebuffer(B.FRAMEBUFFER,st);const St=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await l0(B,St,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(je),B.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,j=null,te=0){A.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1]);const ne=Math.pow(2,-te),G=Math.floor(A.image.width*ne),Se=Math.floor(A.image.height*ne),Ce=j!==null?j.x:0,Ie=j!==null?j.y:0;P.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,te,0,0,Ce,Ie,G,Se),qe.unbindTexture()};const Ko=B.createFramebuffer(),$o=B.createFramebuffer();this.copyTextureToTexture=function(A,j,te=null,ne=null,G=0,Se=null){A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,A=arguments[1],j=arguments[2],Se=arguments[3]||0,te=null),Se===null&&(G!==0?(Os("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=G,G=0):Se=0);let Ce,Ie,ke,et,tt,je,st,St,Mt;const Ot=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(te!==null)Ce=te.max.x-te.min.x,Ie=te.max.y-te.min.y,ke=te.isBox3?te.max.z-te.min.z:1,et=te.min.x,tt=te.min.y,je=te.isBox3?te.min.z:0;else{const fn=Math.pow(2,-G);Ce=Math.floor(Ot.width*fn),Ie=Math.floor(Ot.height*fn),A.isDataArrayTexture?ke=Ot.depth:A.isData3DTexture?ke=Math.floor(Ot.depth*fn):ke=1,et=0,tt=0,je=0}ne!==null?(st=ne.x,St=ne.y,Mt=ne.z):(st=0,St=0,Mt=0);const _t=it.convert(j.format),Ye=it.convert(j.type);let Wt;j.isData3DTexture?(P.setTexture3D(j,0),Wt=B.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Wt=B.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Wt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,j.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,j.unpackAlignment);const mt=B.getParameter(B.UNPACK_ROW_LENGTH),ln=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ti=B.getParameter(B.UNPACK_SKIP_PIXELS),Mn=B.getParameter(B.UNPACK_SKIP_ROWS),wr=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je);const Pt=A.isDataArrayTexture||A.isData3DTexture,En=j.isDataArrayTexture||j.isData3DTexture;if(A.isDepthTexture){const fn=Xe.get(A),qt=Xe.get(j),hn=Xe.get(fn.__renderTarget),Ar=Xe.get(qt.__renderTarget);qe.bindFramebuffer(B.READ_FRAMEBUFFER,hn.__webglFramebuffer),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ar.__webglFramebuffer);for(let ht=0;ht<ke;ht++)Pt&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,G,je+ht),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Xe.get(j).__webglTexture,Se,Mt+ht)),B.blitFramebuffer(et,tt,Ce,Ie,st,St,Ce,Ie,B.DEPTH_BUFFER_BIT,B.NEAREST);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Xe.has(A)){const fn=Xe.get(A),qt=Xe.get(j);qe.bindFramebuffer(B.READ_FRAMEBUFFER,Ko),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,$o);for(let hn=0;hn<ke;hn++)Pt?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,fn.__webglTexture,G,je+hn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fn.__webglTexture,G),En?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,qt.__webglTexture,Se,Mt+hn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,qt.__webglTexture,Se),G!==0?B.blitFramebuffer(et,tt,Ce,Ie,st,St,Ce,Ie,B.COLOR_BUFFER_BIT,B.NEAREST):En?B.copyTexSubImage3D(Wt,Se,st,St,Mt+hn,et,tt,Ce,Ie):B.copyTexSubImage2D(Wt,Se,st,St,et,tt,Ce,Ie);qe.bindFramebuffer(B.READ_FRAMEBUFFER,null),qe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Wt,Se,st,St,Mt,Ce,Ie,ke,_t,Ye,Ot.data):j.isCompressedArrayTexture?B.compressedTexSubImage3D(Wt,Se,st,St,Mt,Ce,Ie,ke,_t,Ot.data):B.texSubImage3D(Wt,Se,st,St,Mt,Ce,Ie,ke,_t,Ye,Ot):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Se,st,St,Ce,Ie,_t,Ye,Ot.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Se,st,St,Ot.width,Ot.height,_t,Ot.data):B.texSubImage2D(B.TEXTURE_2D,Se,st,St,Ce,Ie,_t,Ye,Ot);B.pixelStorei(B.UNPACK_ROW_LENGTH,mt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ln),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ti),B.pixelStorei(B.UNPACK_SKIP_ROWS,Mn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,wr),Se===0&&j.generateMipmaps&&B.generateMipmap(Wt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,j,te=null,ne=null,G=0){return A.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,A=arguments[2],j=arguments[3],G=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,j,te,ne,G)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){U=0,I=0,V=null,qe.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Tt._getUnpackColorSpace()}}function CE({device:s,selectedPartId:e,onSelectPart:n}){const r=Lt.useRef(null);return Lt.useEffect(()=>{const a=r.current;if(!a)return;const u=a,d=new I0;d.background=new yt(getComputedStyle(document.documentElement).getPropertyValue("--canvas-bg").trim()||"#f8fafc");const f=new Jn(42,1,.1,100);f.position.set(5.1,3.8,7.4);const h=new RE({canvas:u,antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2));const m=new ko;d.add(m),d.add(new z0(16777215,6583435,2.2));const _=new V0(16777215,2.8);_.position.set(5,6,4),d.add(_);const v=bE(s,m),x=new W0,S=new wt;let T=!1,R=0,y=0;function g(){const I=u.clientWidth,V=u.clientHeight;h.setSize(I,V,!1),f.aspect=I/V,f.updateProjectionMatrix()}function F(I){var w;const V=u.getBoundingClientRect();S.x=(I.clientX-V.left)/V.width*2-1,S.y=-((I.clientY-V.top)/V.height)*2+1,x.setFromCamera(S,f);const C=(w=x.intersectObjects(v,!1)[0])==null?void 0:w.object;C!=null&&C.userData.partId&&n(C.userData.partId)}function L(I){T=!0,R=I.clientX,F(I)}function b(I){T&&(m.rotation.y+=(I.clientX-R)*.01,R=I.clientX)}function O(){T=!1}u.addEventListener("pointerdown",L),u.addEventListener("pointermove",b),window.addEventListener("pointerup",O),window.addEventListener("resize",g);function U(){y+=1;for(const I of v){const V=I.userData.partId===e,C=I.material;C.emissive.set(V?1357990:0),C.emissiveIntensity=V?.35+Math.sin(y*.08)*.08:0}m.rotation.y+=T?0:.0018,h.render(d,f),requestAnimationFrame(U)}return g(),U(),()=>{u.removeEventListener("pointerdown",L),u.removeEventListener("pointermove",b),window.removeEventListener("pointerup",O),window.removeEventListener("resize",g),h.dispose()}},[s,n,e]),K.jsx("canvas",{ref:r,className:"device-canvas","aria-label":"interactive 3D teaching model"})}function Kd(s){return new F0({color:s,roughness:.48,metalness:.12})}function Kt(s,e,n,r){const a=new ei(new Zs(r[0],r[1],r[2]),Kd(e));return a.position.set(...n),a.userData.partId=s,a}function Xr(s,e,n,r,a,u="y"){const d=new ei(new jd(r,r,a,48),Kd(e));return d.position.set(...n),u==="x"&&(d.rotation.z=Math.PI/2),u==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function xl(s,e,n,r,a){const u=new ei(new qd(r,a,20,80),Kd(e));return u.position.set(...n),u.rotation.y=Math.PI/2,u.userData.partId=s,u}function At(s,e,n){e.push(n),s.add(n)}function bE(s,e){const n=[];s.model==="ecg"?(At(e,n,Kt("screen",1120295,[0,.95,-.52],[2.2,1.05,.12])),At(e,n,Kt("amplifier",3718648,[-.62,-.15,-.55],[.72,.36,.16])),At(e,n,Kt("filter",1357990,[.18,-.15,-.55],[.72,.36,.16])),At(e,n,Kt("adc",16347926,[.98,-.15,-.55],[.5,.36,.16])),At(e,n,Kt("leads",6583435,[1.75,-.6,-.1],[.14,1.55,.14])),At(e,n,Xr("electrodes",15680580,[2.05,-1.45,-.1],.24,.08,"z")),At(e,n,Kt("screen",14870768,[0,0,0],[2.7,2.2,.78]))):s.model==="ct"?(At(e,n,xl("gantry",12573694,[0,.35,0],1.45,.28)),At(e,n,Xr("detectors",3718648,[0,.35,0],1.18,.28,"z")),At(e,n,Xr("tube",16347926,[0,1.9,0],.22,.65,"z")),At(e,n,Kt("table",9741240,[0,-.72,0],[4.1,.22,.78])),At(e,n,Kt("console",1120295,[-2.75,.35,-.5],[.75,.8,.18]))):s.model==="ultrasound"?(At(e,n,Kt("console",14412542,[0,-.15,0],[2,1.55,.9])),At(e,n,Kt("screen",1120295,[0,1.35,-.06],[2.05,1.08,.14])),At(e,n,Xr("probe",1013358,[2.1,-.15,0],.28,1.32,"y")),At(e,n,Kt("crystals",16436245,[2.1,-.9,0],[.75,.12,.35])),At(e,n,Xr("beam",3718648,[2.1,-1.55,0],.55,1.2,"y"))):s.model==="xray"?(At(e,n,Kt("detector",14870768,[1.7,0,0],[.22,2.6,2.05])),At(e,n,Kt("grid",9741240,[1.48,0,0],[.08,2.3,1.75])),At(e,n,Kt("cathode",3718648,[-2.05,.9,0],[.42,.45,.5])),At(e,n,Kt("anode",16347926,[-1.35,.9,0],[.52,.52,.58])),At(e,n,Xr("collimator",3359061,[-.78,.35,0],.34,.82,"x"))):s.model==="mri"?(At(e,n,xl("bore",13095678,[0,.35,0],1.62,.32)),At(e,n,xl("rfcoil",8141549,[0,.35,.02],.96,.1)),At(e,n,xl("gradients",3718648,[0,.35,-.02],1.22,.08)),At(e,n,Kt("table",9741240,[0,-.78,0],[4.1,.22,.8]))):(At(e,n,Kt("screen",1120295,[0,.9,-.5],[1.35,.58,.12])),At(e,n,Kt("cassette",14412542,[-.2,-.05,-.52],[1.25,.85,.16])),At(e,n,Xr("motor",1013358,[.72,-.82,0],.32,.5,"z")),At(e,n,Kt("pressure",16347926,[-.9,-.76,-.35],[.45,.28,.18])),At(e,n,Kt("screen",14870768,[0,0,0],[2,2.45,.75])));const r=Kt("__base",13358561,[0,-1.95,0],[4.8,.08,2.4]);return r.userData.partId=void 0,e.add(r),n}function Vt(s,e){return s[e]}const Xc=[{id:"ecg",name:{en:"ECG Monitor",de:"EKG-Monitor"},category:{en:"Bioelectric Signals",de:"Bioelektrische Signale"},short:{en:"Records heart electrical activity through electrodes, amplification, filtering, and display.",de:"Misst elektrische Herzaktivitaet mit Elektroden, Verstaerkung, Filterung und Anzeige."},model:"ecg",overview:{en:"An ECG monitor measures very small voltage differences on the skin. The interesting engineering part is the signal chain: electrode contact, protection, differential amplification, filtering, analog-to-digital conversion, and display.",de:"Ein EKG-Monitor misst sehr kleine Spannungsunterschiede auf der Haut. Technisch spannend ist die Signalkette: Elektrodenkontakt, Schutzschaltung, Differenzverstaerkung, Filterung, Analog-Digital-Wandlung und Anzeige."},workflow:[{en:"Electrodes convert ionic body currents into measurable electronic potentials.",de:"Elektroden wandeln ionische Koerperstroeme in messbare elektrische Potentiale um."},{en:"A protection stage limits dangerous currents and protects the amplifier input.",de:"Eine Schutzstufe begrenzt gefaehrliche Stroeme und schuetzt den Verstaerkereingang."},{en:"An instrumentation amplifier boosts the differential signal while rejecting common-mode noise.",de:"Ein Instrumentenverstaerker verstaerkt das Differenzsignal und unterdrueckt Gleichtaktstoerungen."},{en:"Filters reduce baseline drift, muscle noise, and mains interference before peak detection.",de:"Filter reduzieren Basisliniendrift, Muskelrauschen und Netzstoerungen vor der Peak-Erkennung."}],parts:[{id:"electrodes",name:{en:"Electrodes",de:"Elektroden"},function:{en:"Pick up tiny bioelectric potentials from the skin.",de:"Nehmen sehr kleine bioelektrische Potentiale von der Haut auf."},details:{en:"Bad electrode contact increases impedance and creates noise or baseline drift.",de:"Schlechter Elektrodenkontakt erhoeht die Impedanz und erzeugt Rauschen oder Basisliniendrift."},electrotechnics:{en:"Think of the electrode-skin interface as a noisy high-impedance source with contact capacitance.",de:"Die Elektroden-Haut-Stelle kann man als rauschende hochohmige Quelle mit Kontaktkapazitaet betrachten."}},{id:"leads",name:{en:"Lead Cable",de:"Ableitungskabel"},function:{en:"Transfers the low-level signal to the monitor.",de:"Uebertraegt das schwache Signal zum Monitor."},details:{en:"Cable motion can introduce artifacts, so shielding and strain relief matter.",de:"Kabelbewegung kann Artefakte erzeugen, deshalb sind Schirmung und Zugentlastung wichtig."},electrotechnics:{en:"Twisted/shielded leads reduce electromagnetic pickup from mains and nearby devices.",de:"Verdrillte oder geschirmte Leitungen reduzieren elektromagnetische Einkopplung von Netz und Geraeten."}},{id:"amplifier",name:{en:"Instrumentation Amplifier",de:"Instrumentenverstaerker"},function:{en:"Amplifies the voltage difference between electrodes.",de:"Verstaerkt die Spannungsdifferenz zwischen Elektroden."},details:{en:"High CMRR is needed because common-mode noise is often larger than the ECG itself.",de:"Hohe Gleichtaktunterdrueckung ist wichtig, weil Stoerungen oft groesser sind als das EKG-Signal."},electrotechnics:{en:"Key concepts: differential gain, input impedance, CMRR, saturation, and patient isolation.",de:"Wichtige Begriffe: Differenzverstaerkung, Eingangsimpedanz, CMRR, Saettigung und Patientenisolation."}},{id:"filter",name:{en:"Filter Stage",de:"Filterstufe"},function:{en:"Reduces drift and noise without destroying useful waveform shape.",de:"Reduziert Drift und Rauschen, ohne die Nutzform der Kurve zu zerstoeren."},details:{en:"Filters must be chosen carefully because over-filtering can change medically relevant shapes.",de:"Filter muessen vorsichtig gewaehlt werden, weil zu starke Filter wichtige Kurvenformen veraendern koennen."},electrotechnics:{en:"This connects directly to RC filters, cutoff frequency, phase shift, and notch filtering.",de:"Das passt direkt zu RC-Filtern, Grenzfrequenz, Phasenverschiebung und Kerbfiltern."}},{id:"adc",name:{en:"ADC",de:"ADC"},function:{en:"Converts the analog ECG into digital samples.",de:"Wandelt das analoge EKG in digitale Abtastwerte um."},details:{en:"Sampling rate and resolution decide how much signal detail is preserved.",de:"Abtastrate und Aufloesung bestimmen, wie viele Signaldetails erhalten bleiben."},electrotechnics:{en:"Links to sampling theorem, quantization, aliasing, reference voltage, and ADC resolution.",de:"Verbindung zu Abtasttheorem, Quantisierung, Aliasing, Referenzspannung und ADC-Aufloesung."}},{id:"screen",name:{en:"Display",de:"Anzeige"},function:{en:"Shows waveform, heart-rate estimate, and educational warnings.",de:"Zeigt Kurve, Herzfrequenzschaetzung und Lernhinweise an."},details:{en:"The display is the interface, not the measurement source.",de:"Die Anzeige ist die Schnittstelle, nicht die Messquelle."},electrotechnics:{en:"Connects measurement electronics to software, UI design, and alarm logic.",de:"Verbindet Messelektronik mit Software, Bedienoberflaeche und Alarmlogik."}}],demo:{title:{en:"Noisy ECG filtering",de:"EKG-Rauschfilterung"},beforeLabel:{en:"Raw noisy ECG",de:"Rohes verrauschtes EKG"},afterLabel:{en:"Filtered ECG",de:"Gefiltertes EKG"},explanation:{en:"Filtering can make R peaks easier to find. The teaching point is the tradeoff: less noise, but possible waveform distortion if the filter is too aggressive.",de:"Filterung kann R-Zacken leichter erkennbar machen. Der Lernpunkt ist der Kompromiss: weniger Rauschen, aber moegliche Signalverzerrung bei zu starker Filterung."},filters:[{en:"Baseline correction",de:"Basislinienkorrektur"},{en:"Notch filter",de:"Kerbfilter"},{en:"R-peak detection",de:"R-Zacken-Erkennung"}],clipSteps:[{en:"Electrode senses voltage",de:"Elektrode misst Spannung"},{en:"Amplifier boosts signal",de:"Verstaerker hebt Signal an"},{en:"Filter removes noise",de:"Filter entfernt Stoerungen"},{en:"Screen shows ECG",de:"Anzeige zeigt EKG"}]}},{id:"ct",name:{en:"CT Scanner",de:"CT-Scanner"},category:{en:"Tomographic Imaging",de:"Tomographische Bildgebung"},short:{en:"Rotating X-ray source and detector ring reconstruct slice images.",de:"Rotierende Roentgenquelle und Detektorring rekonstruieren Schnittbilder."},model:"ct",overview:{en:"A CT scanner collects many X-ray projections from different angles. Reconstruction software calculates slice images from those projections.",de:"Ein CT sammelt viele Roentgenprojektionen aus verschiedenen Winkeln. Rekonstruktionssoftware berechnet daraus Schnittbilder."},workflow:[{en:"The table positions the scanned object inside the gantry.",de:"Der Tisch positioniert das Objekt in der Gantry."},{en:"The tube and detector array rotate around the object.",de:"Roentgenroehre und Detektorarray rotieren um das Objekt."},{en:"Detector electronics convert radiation intensity into digital projection data.",de:"Detektorelektronik wandelt Strahlungsintensitaet in digitale Projektionsdaten um."},{en:"Reconstruction and windowing turn the data into readable slices.",de:"Rekonstruktion und Fensterung machen daraus lesbare Schnittbilder."}],parts:[{id:"gantry",name:{en:"Gantry",de:"Gantry"},function:{en:"Holds the rotating imaging system.",de:"Traegt das rotierende Bildgebungssystem."},details:{en:"The large ring includes mechanics, tube, detector, cooling, and power paths.",de:"Der Ring enthaelt Mechanik, Roehre, Detektor, Kuehlung und Leistungswege."},electrotechnics:{en:"Slip rings transfer power and data to rotating electronics.",de:"Schleifringe uebertragen Leistung und Daten auf rotierende Elektronik."}},{id:"tube",name:{en:"X-ray Tube",de:"Roentgenroehre"},function:{en:"Produces X-rays using high voltage.",de:"Erzeugt Roentgenstrahlung mit Hochspannung."},details:{en:"Tube voltage affects penetration; current affects photon quantity and noise.",de:"Roehrenspannung beeinflusst Durchdringung; Strom beeinflusst Photonenmenge und Rauschen."},electrotechnics:{en:"Links to high-voltage generation, power electronics, heat, and insulation.",de:"Bezug zu Hochspannungserzeugung, Leistungselektronik, Waerme und Isolation."}},{id:"detectors",name:{en:"Detector Array",de:"Detektorarray"},function:{en:"Measures transmitted radiation.",de:"Misst die durchgelassene Strahlung."},details:{en:"Scintillators and photodiodes convert radiation into electrical signals.",de:"Szintillatoren und Photodioden wandeln Strahlung in elektrische Signale um."},electrotechnics:{en:"Photodiode current, amplification, ADCs, and noise are central concepts.",de:"Photodiodenstrom, Verstaerkung, ADCs und Rauschen sind zentrale Konzepte."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Moves precisely through the scan plane.",de:"Bewegt sich praezise durch die Scanebene."},details:{en:"Motion accuracy affects slice position and scan coverage.",de:"Bewegungsgenauigkeit beeinflusst Schichtposition und Scanbereich."},electrotechnics:{en:"Uses motor control, encoders, limit switches, and safety interlocks.",de:"Nutzt Motorregelung, Encoder, Endschalter und Sicherheitsverriegelungen."}},{id:"console",name:{en:"Operator Console",de:"Bedienkonsole"},function:{en:"Controls protocol and image review.",de:"Steuert Protokoll und Bildanzeige."},details:{en:"Operators choose acquisition settings and view reconstructed slices.",de:"Bedienende waehlen Aufnahmeparameter und betrachten rekonstruierte Schichten."},electrotechnics:{en:"Software coordinates timing, exposure control, and data transfer.",de:"Software koordiniert Timing, Belichtungssteuerung und Datenuebertragung."}}],demo:{title:{en:"CT reconstruction and windowing",de:"CT-Rekonstruktion und Fensterung"},beforeLabel:{en:"Low contrast slice",de:"Kontrastarmes Schnittbild"},afterLabel:{en:"Windowed slice",de:"Gefenstertes Schnittbild"},explanation:{en:"Windowing maps a useful intensity range into visible grayscale, making selected structures easier to see.",de:"Fensterung bildet einen nuetzlichen Intensitaetsbereich auf sichtbare Graustufen ab."},filters:[{en:"Reconstruction",de:"Rekonstruktion"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Window/level",de:"Fenster/Lage"}],clipSteps:[{en:"Tube rotates",de:"Roehre rotiert"},{en:"Detector measures",de:"Detektor misst"},{en:"Computer reconstructs",de:"Computer rekonstruiert"},{en:"Image is windowed",de:"Bild wird gefenstert"}]}},{id:"ultrasound",name:{en:"Ultrasound System",de:"Ultraschallsystem"},category:{en:"Acoustic Imaging",de:"Akustische Bildgebung"},short:{en:"Sends sound pulses and listens for echoes to build live images.",de:"Sendet Schallimpulse und erzeugt aus Echos Live-Bilder."},model:"ultrasound",overview:{en:"Ultrasound uses piezoelectric elements to send and receive high-frequency sound. Echo timing gives depth, and echo strength gives brightness.",de:"Ultraschall nutzt piezoelektrische Elemente zum Senden und Empfangen von Hochfrequenzschall. Echozeit ergibt Tiefe, Echostaerke ergibt Helligkeit."},workflow:[{en:"A voltage pulse excites piezoelectric crystals.",de:"Ein Spannungspuls regt piezoelektrische Kristalle an."},{en:"Sound travels into tissue and reflects at boundaries.",de:"Schall laeuft ins Gewebe und reflektiert an Grenzflaechen."},{en:"Returned echoes are amplified and time-measured.",de:"Rueckkehrende Echos werden verstaerkt und zeitlich gemessen."},{en:"Beamforming and filtering create the image.",de:"Beamforming und Filterung erzeugen das Bild."}],parts:[{id:"probe",name:{en:"Probe Housing",de:"Sondengehaeuse"},function:{en:"Holds the transducer array and is handled by the user.",de:"Enthaelt das Wandlerarray und wird von der Person gefuehrt."},details:{en:"Probe shape controls imaging access and field of view.",de:"Sondenform beeinflusst Zugang und Sichtfeld."},electrotechnics:{en:"Cable shielding and impedance matching matter at high frequencies.",de:"Kabelschirmung und Impedanzanpassung sind bei hohen Frequenzen wichtig."}},{id:"crystals",name:{en:"Piezo Elements",de:"Piezoelemente"},function:{en:"Convert voltage into sound and returning sound into voltage.",de:"Wandeln Spannung in Schall und Echo-Schall in Spannung um."},details:{en:"The same element can transmit and receive.",de:"Dasselbe Element kann senden und empfangen."},electrotechnics:{en:"A piezo element behaves like an electromechanical resonator with capacitance.",de:"Ein Piezoelement verhaelt sich wie ein elektromechanischer Resonator mit Kapazitaet."}},{id:"beam",name:{en:"Ultrasound Beam",de:"Ultraschallstrahl"},function:{en:"Carries acoustic energy into the tissue.",de:"Transportiert akustische Energie ins Gewebe."},details:{en:"Focusing changes resolution and penetration.",de:"Fokussierung veraendert Aufloesung und Eindringtiefe."},electrotechnics:{en:"Beam steering uses phase delays between array elements.",de:"Strahllenkung nutzt Phasenverzoegerungen zwischen Array-Elementen."}},{id:"console",name:{en:"Console Electronics",de:"Konsolenelektronik"},function:{en:"Controls transmit pulses, receive gain, and processing.",de:"Steuert Sendepulse, Empfangsverstaerkung und Verarbeitung."},details:{en:"Gain, depth, focus, and dynamic range change the displayed image.",de:"Gain, Tiefe, Fokus und Dynamikbereich veraendern das Bild."},electrotechnics:{en:"Needs pulser circuits, low-noise amplifiers, ADCs, and digital beamforming.",de:"Braucht Pulser-Schaltungen, rauscharme Verstaerker, ADCs und digitales Beamforming."}},{id:"screen",name:{en:"Image Display",de:"Bildanzeige"},function:{en:"Shows B-mode, M-mode, or Doppler information.",de:"Zeigt B-Mode, M-Mode oder Dopplerinformationen."},details:{en:"The image is a processed map of echoes, not a photo.",de:"Das Bild ist eine verarbeitete Echokarte, kein Foto."},electrotechnics:{en:"Display pipeline includes frame memory, image mapping, and UI controls.",de:"Die Anzeige nutzt Bildspeicher, Bildabbildung und UI-Steuerung."}}],demo:{title:{en:"Speckle reduction",de:"Speckle-Reduktion"},beforeLabel:{en:"Speckled image",de:"Speckle-Bild"},afterLabel:{en:"Smoothed image",de:"Geglaettetes Bild"},explanation:{en:"Filtering can reduce speckle and improve readability, but too much smoothing hides small structures.",de:"Filterung kann Speckle reduzieren, aber zu starke Glaettung verdeckt kleine Strukturen."},filters:[{en:"Gain correction",de:"Gain-Korrektur"},{en:"Speckle smoothing",de:"Speckle-Glaettung"},{en:"Edge preserving",de:"Kantenerhalt"}],clipSteps:[{en:"Pulse sent",de:"Puls gesendet"},{en:"Echo returns",de:"Echo kommt zurueck"},{en:"Signal amplified",de:"Signal verstaerkt"},{en:"Image formed",de:"Bild entsteht"}]}},{id:"xray",name:{en:"X-ray System",de:"Roentgensystem"},category:{en:"Projection Imaging",de:"Projektionsbildgebung"},short:{en:"Projects X-rays through an object onto a digital detector.",de:"Projiziert Roentgenstrahlung durch ein Objekt auf einen digitalen Detektor."},model:"xray",overview:{en:"X-ray imaging creates a 2D projection. Dense material absorbs more radiation and changes detector intensity.",de:"Roentgenbildgebung erzeugt eine 2D-Projektion. Dichtes Material absorbiert mehr Strahlung und veraendert die Detektorintensitaet."},workflow:[{en:"High voltage accelerates electrons in the tube.",de:"Hochspannung beschleunigt Elektronen in der Roehre."},{en:"The anode converts electron energy into X-rays and heat.",de:"Die Anode wandelt Elektronenenergie in Roentgenstrahlung und Waerme um."},{en:"The collimator shapes the beam.",de:"Der Kollimator formt den Strahl."},{en:"The detector converts radiation into pixel data.",de:"Der Detektor wandelt Strahlung in Pixeldaten um."}],parts:[{id:"cathode",name:{en:"Cathode",de:"Kathode"},function:{en:"Emits electrons by heating a filament.",de:"Emittiert Elektronen durch Erhitzen eines Filaments."},details:{en:"Tube current depends strongly on electron emission.",de:"Der Roehrenstrom haengt stark von der Elektronenemission ab."},electrotechnics:{en:"Links to thermionic emission, filament current, and high-voltage safety.",de:"Bezug zu Gluemission, Heizstrom und Hochspannungssicherheit."}},{id:"anode",name:{en:"Anode",de:"Anode"},function:{en:"Target hit by electrons to generate X-rays.",de:"Ziel, auf das Elektronen treffen und Roentgenstrahlung erzeugen."},details:{en:"Most energy becomes heat, so cooling is important.",de:"Der groesste Teil wird Waerme, daher ist Kuehlung wichtig."},electrotechnics:{en:"Power, heat load, and insulation are major engineering issues.",de:"Leistung, Waermelast und Isolation sind wichtige technische Themen."}},{id:"collimator",name:{en:"Collimator",de:"Kollimator"},function:{en:"Limits the beam area.",de:"Begrenzt die Strahlflaeche."},details:{en:"Good collimation reduces scatter and unnecessary exposure.",de:"Gute Kollimation reduziert Streustrahlung und unnoetige Exposition."},electrotechnics:{en:"Motorized shutters use position sensing and interlocks.",de:"Motorisierte Blenden nutzen Positionssensoren und Verriegelungen."}},{id:"detector",name:{en:"Detector Panel",de:"Detektorplatte"},function:{en:"Captures the X-ray projection.",de:"Erfasst die Roentgenprojektion."},details:{en:"Digital detectors use scintillators or direct conversion layers.",de:"Digitale Detektoren nutzen Szintillatoren oder direkte Wandlerschichten."},electrotechnics:{en:"Pixel electronics, charge readout, ADCs, and calibration are key topics.",de:"Pixelelektronik, Ladungsauslese, ADCs und Kalibrierung sind zentrale Themen."}},{id:"grid",name:{en:"Anti-scatter Grid",de:"Streustrahlenraster"},function:{en:"Reduces scattered radiation before the detector.",de:"Reduziert Streustrahlung vor dem Detektor."},details:{en:"Improves contrast but can require higher exposure.",de:"Verbessert Kontrast, kann aber hoehere Exposition benoetigen."},electrotechnics:{en:"Shows the tradeoff between signal strength, noise, and contrast.",de:"Zeigt den Kompromiss zwischen Signalstaerke, Rauschen und Kontrast."}}],demo:{title:{en:"Contrast enhancement",de:"Kontrastverstaerkung"},beforeLabel:{en:"Flat contrast",de:"Flacher Kontrast"},afterLabel:{en:"Enhanced contrast",de:"Verbesserter Kontrast"},explanation:{en:"Contrast stretching spreads useful gray values across the display range.",de:"Kontraststreckung verteilt nuetzliche Grauwerte ueber den Anzeigebereich."},filters:[{en:"Contrast stretch",de:"Kontraststreckung"},{en:"Sharpening",de:"Schaerfung"},{en:"Noise-aware smoothing",de:"Rauschbewusste Glaettung"}],clipSteps:[{en:"Tube emits X-rays",de:"Roehre sendet Strahlung"},{en:"Body attenuates beam",de:"Objekt schwaecht Strahl ab"},{en:"Detector captures pixels",de:"Detektor erfasst Pixel"},{en:"Contrast is enhanced",de:"Kontrast wird verbessert"}]}},{id:"mri",name:{en:"MRI Scanner",de:"MRT-Scanner"},category:{en:"Magnetic Resonance",de:"Magnetresonanz"},short:{en:"Uses magnets, gradients, and RF coils to form tissue-contrast images.",de:"Nutzt Magnet, Gradienten und HF-Spulen fuer kontrastreiche Bilder."},model:"mri",overview:{en:"MRI uses a strong magnetic field, RF pulses, and gradient fields to encode signals from hydrogen nuclei.",de:"MRT nutzt ein starkes Magnetfeld, HF-Pulse und Gradientenfelder, um Signale von Wasserstoffkernen zu codieren."},workflow:[{en:"Main magnet aligns spins.",de:"Hauptmagnet richtet Spins aus."},{en:"RF coil excites and receives signals.",de:"HF-Spule regt an und empfaengt Signale."},{en:"Gradient coils encode position.",de:"Gradientenspulen codieren Position."},{en:"Computer reconstructs contrast images.",de:"Computer rekonstruiert Kontrastbilder."}],parts:[{id:"bore",name:{en:"Magnet Bore",de:"Magnetoeffnung"},function:{en:"Contains the strong main magnetic field.",de:"Enthaelt das starke Hauptmagnetfeld."},details:{en:"Homogeneity affects image quality.",de:"Homogenitaet beeinflusst die Bildqualitaet."},electrotechnics:{en:"Superconducting magnets, cryogenics, and shielding are core ideas.",de:"Supraleitende Magnete, Kryotechnik und Abschirmung sind Kernideen."}},{id:"rfcoil",name:{en:"RF Coil",de:"HF-Spule"},function:{en:"Transmits and receives radio-frequency signals.",de:"Sendet und empfaengt Hochfrequenzsignale."},details:{en:"Coil position affects sensitivity.",de:"Spulenposition beeinflusst Empfindlichkeit."},electrotechnics:{en:"Resonance, impedance matching, and low-noise reception are important.",de:"Resonanz, Impedanzanpassung und rauscharmer Empfang sind wichtig."}},{id:"gradients",name:{en:"Gradient Coils",de:"Gradientenspulen"},function:{en:"Encode spatial position.",de:"Codieren raeumliche Position."},details:{en:"Rapid switching causes acoustic noise and heating.",de:"Schnelles Schalten erzeugt Geraeusche und Waerme."},electrotechnics:{en:"High-current drivers, inductance, and switching transients matter.",de:"Hochstromtreiber, Induktivitaet und Schalttransienten sind wichtig."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Positions the scanned object.",de:"Positioniert das Untersuchungsobjekt."},details:{en:"Accurate positioning improves coverage.",de:"Genaue Positionierung verbessert die Abdeckung."},electrotechnics:{en:"Motor control and safety interlocks protect motion.",de:"Motorsteuerung und Sicherheitsverriegelungen schuetzen die Bewegung."}}],demo:{title:{en:"Tissue contrast selection",de:"Gewebekontrast-Auswahl"},beforeLabel:{en:"Low contrast",de:"Niedriger Kontrast"},afterLabel:{en:"T2-like contrast",de:"T2-aehnlicher Kontrast"},explanation:{en:"Different sequences emphasize different tissue properties.",de:"Verschiedene Sequenzen betonen verschiedene Gewebeeigenschaften."},filters:[{en:"Intensity mapping",de:"Intensitaetsabbildung"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Contrast preset",de:"Kontrastpreset"}],clipSteps:[{en:"Magnet aligns spins",de:"Magnet richtet Spins aus"},{en:"RF pulse excites",de:"HF-Puls regt an"},{en:"Signal decays",de:"Signal klingt ab"},{en:"Image reconstructed",de:"Bild rekonstruiert"}]}},{id:"pump",name:{en:"Infusion Pump",de:"Infusionspumpe"},category:{en:"Therapy Device",de:"Therapiegeraet"},short:{en:"Controls fluid delivery with motor drive, sensors, alarms, and software.",de:"Steuert Fluessigkeitsabgabe mit Motor, Sensoren, Alarmen und Software."},model:"pump",overview:{en:"An infusion pump is a control system. It compares target delivery with sensor feedback and reacts to pressure, battery, door, and line problems.",de:"Eine Infusionspumpe ist ein Regelsystem. Sie vergleicht Zielabgabe mit Sensorfeedback und reagiert auf Druck, Akku, Tuer und Leitungsprobleme."},workflow:[{en:"User sets rate and volume.",de:"Nutzer stellt Rate und Volumen ein."},{en:"Motor moves the pump mechanism.",de:"Motor bewegt den Pumpmechanismus."},{en:"Pressure and door sensors check safety.",de:"Druck- und Tuersensoren pruefen Sicherheit."},{en:"Controller triggers alarms when limits are exceeded.",de:"Controller loest Alarme bei Grenzwertueberschreitung aus."}],parts:[{id:"screen",name:{en:"Display/UI",de:"Anzeige/UI"},function:{en:"Shows rate, volume, battery, and alarms.",de:"Zeigt Rate, Volumen, Akku und Alarme."},details:{en:"Good UI reduces setup mistakes.",de:"Gute UI reduziert Einstellfehler."},electrotechnics:{en:"Links embedded systems to human-machine interface design.",de:"Verbindet Embedded Systems mit Mensch-Maschine-Schnittstellen."}},{id:"cassette",name:{en:"Cassette Path",de:"Kassettenpfad"},function:{en:"Guides the fluid tube through the pump.",de:"Fuehrt den Schlauch durch die Pumpe."},details:{en:"Mechanical fit affects flow accuracy.",de:"Mechanischer Sitz beeinflusst Dosiergenauigkeit."},electrotechnics:{en:"Door switches and optical sensors can confirm correct loading.",de:"Tuerschalter und optische Sensoren koennen korrektes Einlegen bestaetigen."}},{id:"motor",name:{en:"Drive Motor",de:"Antriebsmotor"},function:{en:"Creates controlled pumping motion.",de:"Erzeugt kontrollierte Pumpbewegung."},details:{en:"Stepper or DC motor control decides flow stability.",de:"Schritt- oder DC-Motorsteuerung bestimmt die Flussstabilitaet."},electrotechnics:{en:"PWM, motor drivers, feedback, and current sensing are useful here.",de:"PWM, Motortreiber, Feedback und Strommessung sind hier nuetzlich."}},{id:"pressure",name:{en:"Pressure Sensor",de:"Drucksensor"},function:{en:"Detects occlusion or blocked flow.",de:"Erkennt Okklusion oder blockierten Fluss."},details:{en:"Rising pressure can indicate a blocked line.",de:"Steigender Druck kann eine blockierte Leitung anzeigen."},electrotechnics:{en:"Often uses bridge sensors, ADCs, calibration, and thresholds.",de:"Oft mit Brueckensensoren, ADCs, Kalibrierung und Schwellwerten."}}],demo:{title:{en:"Flow-rate monitoring",de:"Flussraten-Ueberwachung"},beforeLabel:{en:"Unstable flow",de:"Instabiler Fluss"},afterLabel:{en:"Controlled flow",de:"Kontrollierter Fluss"},explanation:{en:"Control systems compare target and measured values, then correct motor action or trigger alarms.",de:"Regelsysteme vergleichen Soll- und Messwerte, korrigieren den Motor oder loesen Alarme aus."},filters:[{en:"Moving average",de:"Gleitender Mittelwert"},{en:"Threshold alarm",de:"Schwellwertalarm"},{en:"Trend check",de:"Trendpruefung"}],clipSteps:[{en:"Rate selected",de:"Rate gewaehlt"},{en:"Motor turns",de:"Motor dreht"},{en:"Pressure checked",de:"Druck geprueft"},{en:"Alarm if blocked",de:"Alarm bei Blockade"}]}}];function PE({device:s,demo:e,lang:n}){return K.jsxs("section",{className:"process-demo",children:[K.jsx("div",{className:"section-title",children:K.jsxs("div",{children:[K.jsx("p",{className:"label",children:n==="en"?"Animated teaching clip":"Animierter Lernclip"}),K.jsx("h2",{children:Vt(e.title,n)})]})}),K.jsxs("div",{className:`clip-strip ${s.model}`,children:[e.clipSteps.map((r,a)=>K.jsxs("div",{className:"clip-step",children:[K.jsx("span",{children:a+1}),K.jsx("strong",{children:Vt(r,n)})]},Vt(r,"en"))),K.jsx("div",{className:"moving-pulse"})]}),K.jsxs("div",{className:`before-after ${s.model}`,children:[K.jsxs("div",{children:[K.jsx("span",{children:Vt(e.beforeLabel,n)}),K.jsx("div",{className:"image-sim before"})]}),K.jsxs("div",{children:[K.jsx("span",{children:Vt(e.afterLabel,n)}),K.jsx("div",{className:"image-sim after"})]})]}),K.jsx("p",{children:Vt(e.explanation,n)}),K.jsx("div",{className:"filter-row",children:e.filters.map(r=>K.jsx("span",{children:Vt(r,n)},Vt(r,"en")))})]})}var DE=W_();const LE=Ud(DE),cg="http://localhost:8000",$d=[];async function dg(s){const e=await fetch(`${cg}${s}`);if(!e.ok)throw new Error(`Request failed: ${e.status}`);return e.json()}async function IE(s,e=8){try{return await dg(`/api/ecg/generate?bpm=${s}&seconds=${e}`)}catch{const n=FE(s,e);return $d.unshift({id:`local-${Date.now()}`,name:"Generated ECG",heart_rate:n.heart_rate,duration:n.duration,filter_used:!1}),n}}async function UE(s){try{const e=await fetch(`${cg}/api/ecg/analyze`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`Analysis failed: ${e.status}`);return e.json()}catch{const e=kE(s);return $d.unshift({id:`upload-${Date.now()}`,name:e.name||s.name,heart_rate:e.heart_rate,duration:e.duration,filter_used:!!e.filter_used}),e}}function NE(){return dg("/api/ecg/history").catch(()=>$d)}function FE(s,e){const r=e*250,a=60/s,u=[],d=[],f=[];for(let h=0;h<r;h+=1){const m=h/250;let _=.04*Math.sin(2*Math.PI*.35*m)+.02*Math.sin(2*Math.PI*8*m);for(let v=.7;v<e;v+=a)_+=1.15*Math.exp(-((m-v)**2)/9e-4),_-=.18*Math.exp(-((m-(v-.045))**2)/35e-5),_-=.22*Math.exp(-((m-(v+.05))**2)/45e-5),_+=.12*Math.exp(-((m-(v-.18))**2)/.004),_+=.28*Math.exp(-((m-(v+.26))**2)/.01);d.push(Number(m.toFixed(3))),f.push(Number(_.toFixed(4)))}for(let h=.7;h<e;h+=a)u.push(Math.round(h*250));return{sample_rate:250,duration:e,heart_rate:s,time:d,voltage:f,r_peaks:u,notes:"Browser fallback ECG. Educational demo only."}}function kE(s){const e=s.apply_filter?OE(s.voltage):s.voltage,n=zE(e,s.sample_rate),r=Number((s.time[s.time.length-1]-s.time[0]).toFixed(3));let a=0;if(n.length>1){const u=n.slice(1).map((f,h)=>s.time[f]-s.time[n[h]]),d=u.reduce((f,h)=>f+h,0)/u.length;a=d>0?Math.round(60/d):0}return{name:s.name,sample_rate:s.sample_rate,duration:r,heart_rate:a,time:s.time,voltage:e,raw_voltage:s.voltage,r_peaks:n,filter_used:s.apply_filter,notes:"Browser fallback ECG analysis. Educational demo only."}}function OE(s){return s.map((e,n)=>{const r=s.slice(Math.max(0,n-3),Math.min(s.length,n+4));return Number((r.reduce((a,u)=>a+u,0)/r.length).toFixed(4))})}function zE(s,e){const n=s.reduce((h,m)=>h+m,0)/s.length,r=s.reduce((h,m)=>h+(m-n)**2,0)/s.length,a=n+.65*Math.sqrt(r),u=Math.max(1,Math.round(e*.28)),d=[];let f=-u;for(let h=1;h<s.length-1;h+=1)s[h]>s[h-1]&&s[h]>s[h+1]&&s[h]>a&&h-f>=u&&(d.push(h),f=h);return d}function BE(){const[s,e]=Lt.useState(74),[n,r]=Lt.useState(250),[a,u]=Lt.useState(!0),[d,f]=Lt.useState(null),[h,m]=Lt.useState([]),[_,v]=Lt.useState(!1),[x,S]=Lt.useState(""),T=Lt.useRef(null);async function R(O=s){v(!0),S("");try{const U=await IE(O);f(U),y()}catch{S("Could not load ECG data. Check that the backend is running.")}finally{v(!1)}}Lt.useEffect(()=>{R(74),y()},[]);async function y(){try{m(await NE())}catch{m([])}}function g(O){const U=O.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),I=[],V=[];for(const C of U){const w=C.split(/[;,]/).map(z=>Number(z.trim()));w.length>=2&&Number.isFinite(w[0])&&Number.isFinite(w[1])&&(I.push(w[0]),V.push(w[1]))}return{time:I,voltage:V}}async function F(O){if(O){v(!0),S("");try{const U=await O.text(),I=g(U);if(I.voltage.length<20)throw new Error("Need at least 20 numeric rows with time and voltage columns.");const V=await UE({name:O.name.replace(/\.[^.]+$/,""),sample_rate:n,apply_filter:a,time:I.time,voltage:I.voltage});f(V),y()}catch(U){S(U instanceof Error?U.message:"Could not analyze CSV file.")}finally{v(!1)}}}function L(){window.print()}const b=Lt.useMemo(()=>d?{x:d.r_peaks.map(O=>d.time[O]),y:d.r_peaks.map(O=>d.voltage[O])}:{x:[],y:[]},[d]);return Lt.useEffect(()=>{!d||!T.current||LE.react(T.current,[{x:d.time,y:d.voltage,type:"scatter",mode:"lines",line:{color:"#0f766e",width:2},name:"ECG"},{x:b.x,y:b.y,type:"scatter",mode:"markers",marker:{color:"#e11d48",size:8},name:"R peaks"}],{autosize:!0,height:360,margin:{l:42,r:20,t:16,b:40},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"#f8fafc",xaxis:{title:"Time (s)",gridcolor:"#e2e8f0"},yaxis:{title:"Voltage (mV)",gridcolor:"#e2e8f0"},legend:{orientation:"h"}},{responsive:!0,displaylogo:!1})},[d,b.x,b.y]),K.jsxs("section",{className:"wide-panel",children:[K.jsxs("div",{className:"section-title",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"ECG Analysis Lab"}),K.jsx("h2",{children:"Generated ECG monitor"})]}),K.jsx(sv,{size:26,"aria-hidden":"true"})]}),K.jsxs("div",{className:"ecg-controls",children:[K.jsxs("label",{children:["Target BPM",K.jsx("input",{type:"range",min:"45",max:"150",value:s,onChange:O=>e(Number(O.target.value))})]}),K.jsxs("label",{children:["CSV sample rate",K.jsx("input",{type:"number",min:"50",max:"1000",value:n,onChange:O=>r(Number(O.target.value))})]}),K.jsxs("label",{className:"check-row",children:[K.jsx("input",{type:"checkbox",checked:a,onChange:O=>u(O.target.checked)}),"Smooth uploaded CSV"]}),K.jsxs("strong",{children:[s," bpm"]}),K.jsxs("button",{onClick:()=>R(),disabled:_,children:[K.jsx(mv,{size:17}),"Generate"]}),K.jsxs("label",{className:"upload-button",children:[K.jsx(_v,{size:17}),"Upload CSV",K.jsx("input",{type:"file",accept:".csv,.txt",onChange:O=>{var U;return F(((U=O.target.files)==null?void 0:U[0])||null)}})]}),K.jsxs("button",{onClick:L,disabled:!d,children:[K.jsx(cv,{size:17}),"Report"]})]}),x&&K.jsx("p",{className:"error",children:x}),d&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"ecg-stat-row",children:[K.jsxs("div",{children:[K.jsx("span",{children:"Calculated heart rate"}),K.jsxs("strong",{children:[d.heart_rate," bpm"]})]}),K.jsxs("div",{children:[K.jsx("span",{children:"Sample rate"}),K.jsxs("strong",{children:[d.sample_rate," Hz"]})]}),K.jsxs("div",{children:[K.jsx("span",{children:"R peaks found"}),K.jsx("strong",{children:d.r_peaks.length})]}),K.jsxs("div",{children:[K.jsx("span",{children:"Filter"}),K.jsx("strong",{children:d.filter_used?"On":"Off"})]})]}),K.jsx("div",{ref:T,className:"plot"}),K.jsxs("div",{className:"report-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"ECG Report Generator"}),K.jsx("h3",{children:d.name||"Generated ECG Demo"})]}),K.jsxs("p",{children:["Heart rate: ",K.jsxs("strong",{children:[d.heart_rate," bpm"]}),". Duration: ",K.jsxs("strong",{children:[d.duration,"s"]}),". R peaks: ",K.jsx("strong",{children:d.r_peaks.length}),". This report is for biomedical education only."]})]})]}),K.jsxs("div",{className:"history-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"Analysis history"}),K.jsx("h3",{children:"Latest ECG runs"})]}),h.length===0?K.jsx("span",{children:"No saved runs yet."}):h.slice(0,5).map(O=>K.jsxs("article",{children:[K.jsx("strong",{children:O.name}),K.jsxs("span",{children:[O.heart_rate||"n/a"," bpm - ",O.duration,"s - filter ",O.filter_used?"on":"off"]})]},O.id))]})]})}function HE({lang:s}){const[e,n]=Lt.useState(window.location.hash||"#/"),r=e.startsWith("#/device/")?e.replace("#/device/",""):"",a=Lt.useMemo(()=>Xc.find(h=>h.id===r),[r]),[u,d]=Lt.useState(""),f=(a==null?void 0:a.parts.find(h=>h.id===u))||(a==null?void 0:a.parts[0]);return Lt.useEffect(()=>{function h(){n(window.location.hash||"#/")}return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]),Lt.useEffect(()=>{a&&!a.parts.some(h=>h.id===u)&&d(a.parts[0].id)},[a,u]),a?K.jsxs(K.Fragment,{children:[K.jsxs("a",{className:"back-link",href:"#/",children:[K.jsx(ov,{size:18}),s==="en"?"Device library":"Geraetebibliothek"]}),K.jsx("section",{className:"device-page-hero",children:K.jsxs("div",{children:[K.jsx("p",{className:"label",children:Vt(a.category,s)}),K.jsx("h1",{children:Vt(a.name,s)}),K.jsx("p",{children:Vt(a.overview,s)})]})}),K.jsxs("section",{className:"device-workspace device-page",children:[K.jsxs("div",{className:"model-panel",children:[K.jsxs("div",{className:"section-title",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:s==="en"?"Interactive 3D model":"Interaktives 3D-Modell"}),K.jsx("h2",{children:Vt(a.name,s)})]}),K.jsx(bp,{size:24})]}),K.jsx(CE,{device:a,selectedPartId:(f==null?void 0:f.id)||"",onSelectPart:d}),K.jsx("p",{className:"canvas-hint",children:s==="en"?"Drag to rotate. Click a part or choose it from the list.":"Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen."})]}),f&&K.jsxs("aside",{className:"lesson-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:s==="en"?"Selected part":"Ausgewaehltes Teil"}),K.jsx("h2",{children:Vt(f.name,s)}),K.jsx("p",{children:Vt(f.function,s)}),K.jsx("small",{children:Vt(f.details,s)})]}),K.jsxs("div",{className:"electro-box",children:[K.jsx(uv,{size:22}),K.jsxs("div",{children:[K.jsx("strong",{children:s==="en"?"Electrotechnics link":"Bezug zur Elektrotechnik"}),K.jsx("span",{children:Vt(f.electrotechnics,s)})]})]}),K.jsx("div",{className:"part-buttons",children:a.parts.map(h=>K.jsx("button",{className:h.id===f.id?"active":"",onClick:()=>d(h.id),children:Vt(h.name,s)},h.id))})]})]}),K.jsxs("section",{className:"learning-grid",children:[K.jsxs("article",{className:"lesson-card",children:[K.jsx(av,{size:24}),K.jsx("h2",{children:s==="en"?"How it works":"Wie es funktioniert"}),K.jsx("p",{children:Vt(a.overview,s)})]}),K.jsxs("article",{className:"lesson-card",children:[K.jsx(fv,{size:24}),K.jsx("h2",{children:s==="en"?"Process path":"Ablauf"}),K.jsx("ol",{children:a.workflow.map(h=>K.jsx("li",{children:Vt(h,s)},Vt(h,"en")))})]}),K.jsxs("article",{className:"lesson-card",children:[K.jsx(hv,{size:24}),K.jsx("h2",{children:s==="en"?"What to understand":"Was man verstehen soll"}),K.jsx("p",{children:s==="en"?"Connect the medical function with the underlying electrical system: sensors, power, amplifiers, ADCs, filters, motors, control loops, and safety logic.":"Verbinde die medizinische Funktion mit dem elektrischen System dahinter: Sensoren, Leistung, Verstaerker, ADCs, Filter, Motoren, Regelkreise und Sicherheitslogik."})]})]}),K.jsx(PE,{device:a,demo:a.demo,lang:s}),a.id==="ecg"&&K.jsx(BE,{})]}):K.jsxs(K.Fragment,{children:[K.jsxs("section",{className:"explorer-hero",children:[K.jsxs("div",{className:"hero-copy",children:[K.jsx("p",{className:"label",children:s==="en"?"Interactive biomedical engineering education":"Interaktive Medizintechnik-Lernplattform"}),K.jsx("h1",{children:"MedTech Device Explorer"}),K.jsx("p",{children:s==="en"?"Choose a medical device and learn it as an engineering system: 3D parts, electrotechnics, signal processing, image processing, safety, and operation.":"Waehle ein medizinisches Geraet und lerne es als technisches System: 3D-Bauteile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung."})]}),K.jsxs("div",{className:"hero-stats",children:[K.jsxs("span",{children:[K.jsx(lv,{size:18})," ",Xc.length," ",s==="en"?"devices":"Geraete"]}),K.jsxs("span",{children:[K.jsx(bp,{size:18})," ",s==="en"?"clickable 3D parts":"anklickbare 3D-Teile"]}),K.jsxs("span",{children:[K.jsx(vv,{size:18})," ",s==="en"?"engineering-first explanations":"Erklaerungen mit Elektrotechnik"]})]})]}),K.jsx("section",{className:"device-library page-library",children:Xc.map(h=>K.jsxs("a",{className:"library-card",href:`#/device/${h.id}`,children:[K.jsx("span",{children:Vt(h.category,s)}),K.jsx("strong",{children:Vt(h.name,s)}),K.jsx("small",{children:Vt(h.short,s)})]},h.id))})]})}function VE(){const[s,e]=Lt.useState(()=>localStorage.getItem("lang")||"en"),[n,r]=Lt.useState(()=>localStorage.getItem("theme")==="dark");return Lt.useEffect(()=>{document.documentElement.dataset.theme=n?"dark":"light",localStorage.setItem("theme",n?"dark":"light")},[n]),Lt.useEffect(()=>{localStorage.setItem("lang",s)},[s]),K.jsxs("main",{className:"app-shell",children:[K.jsxs("header",{className:"site-header",children:[K.jsxs("a",{href:"#/",className:"brand",children:[K.jsx("span",{children:"MedTech"}),K.jsx("strong",{children:"Device Explorer"})]}),K.jsxs("div",{className:"top-actions",children:[K.jsxs("button",{onClick:()=>e(s==="en"?"de":"en"),title:"Change language",children:[K.jsx(dv,{size:18}),s==="en"?"DE":"EN"]}),K.jsxs("button",{onClick:()=>r(!n),title:"Toggle dark mode",children:[n?K.jsx(gv,{size:18}):K.jsx(pv,{size:18}),n?"Light":"Dark"]})]})]}),K.jsx(HE,{lang:s})]})}tv.createRoot(document.getElementById("root")).render(K.jsx(Y_.StrictMode,{children:K.jsx(VE,{})}));
