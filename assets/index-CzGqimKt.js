import{g as jd,r as u0}from"./charts-CKiOGpj1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var vc={exports:{}},ka={},_c={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function c0(){if(Ip)return ht;Ip=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function S(N,re,Ne){this.props=N,this.context=re,this.refs=A,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,re){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,re,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function v(){}v.prototype=S.prototype;function I(N,re,Ne){this.props=N,this.context=re,this.refs=A,this.updater=Ne||x}var D=I.prototype=new v;D.constructor=I,E(D,S.prototype),D.isPureReactComponent=!0;var R=Array.isArray,F=Object.prototype.hasOwnProperty,k={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(N,re,Ne){var Q,ce={},Ee=null,ye=null;if(re!=null)for(Q in re.ref!==void 0&&(ye=re.ref),re.key!==void 0&&(Ee=""+re.key),re)F.call(re,Q)&&!U.hasOwnProperty(Q)&&(ce[Q]=re[Q]);var Te=arguments.length-2;if(Te===1)ce.children=Ne;else if(1<Te){for(var Ue=Array(Te),Qe=0;Qe<Te;Qe++)Ue[Qe]=arguments[Qe+2];ce.children=Ue}if(N&&N.defaultProps)for(Q in Te=N.defaultProps,Te)ce[Q]===void 0&&(ce[Q]=Te[Q]);return{$$typeof:s,type:N,key:Ee,ref:ye,props:ce,_owner:k.current}}function b(N,re){return{$$typeof:s,type:N.type,key:re,ref:N.ref,props:N.props,_owner:N._owner}}function T(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function B(N){var re={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ne){return re[Ne]})}var ie=/\/+/g;function Z(N,re){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):re.toString(36)}function ae(N,re,Ne,Q,ce){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var ye=!1;if(N===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(N.$$typeof){case s:case e:ye=!0}}if(ye)return ye=N,ce=ce(ye),N=Q===""?"."+Z(ye,0):Q,R(ce)?(Ne="",N!=null&&(Ne=N.replace(ie,"$&/")+"/"),ae(ce,re,Ne,"",function(Qe){return Qe})):ce!=null&&(T(ce)&&(ce=b(ce,Ne+(!ce.key||ye&&ye.key===ce.key?"":(""+ce.key).replace(ie,"$&/")+"/")+N)),re.push(ce)),1;if(ye=0,Q=Q===""?".":Q+":",R(N))for(var Te=0;Te<N.length;Te++){Ee=N[Te];var Ue=Q+Z(Ee,Te);ye+=ae(Ee,re,Ne,Ue,ce)}else if(Ue=y(N),typeof Ue=="function")for(N=Ue.call(N),Te=0;!(Ee=N.next()).done;)Ee=Ee.value,Ue=Q+Z(Ee,Te++),ye+=ae(Ee,re,Ne,Ue,ce);else if(Ee==="object")throw re=String(N),Error("Objects are not valid as a React child (found: "+(re==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":re)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(N,re,Ne){if(N==null)return N;var Q=[],ce=0;return ae(N,Q,"","",function(Ee){return re.call(Ne,Ee,ce++)}),Q}function se(N){if(N._status===-1){var re=N._result;re=re(),re.then(function(Ne){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ne)},function(Ne){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ne)}),N._status===-1&&(N._status=0,N._result=re)}if(N._status===1)return N._result.default;throw N._result}var me={current:null},V={transition:null},ue={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function le(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(N,re,Ne){he(N,function(){re.apply(this,arguments)},Ne)},count:function(N){var re=0;return he(N,function(){re++}),re},toArray:function(N){return he(N,function(re){return re})||[]},only:function(N){if(!T(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=I,ht.StrictMode=r,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=le,ht.cloneElement=function(N,re,Ne){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Q=E({},N.props),ce=N.key,Ee=N.ref,ye=N._owner;if(re!=null){if(re.ref!==void 0&&(Ee=re.ref,ye=k.current),re.key!==void 0&&(ce=""+re.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ue in re)F.call(re,Ue)&&!U.hasOwnProperty(Ue)&&(Q[Ue]=re[Ue]===void 0&&Te!==void 0?Te[Ue]:re[Ue])}var Ue=arguments.length-2;if(Ue===1)Q.children=Ne;else if(1<Ue){Te=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)Te[Qe]=arguments[Qe+2];Q.children=Te}return{$$typeof:s,type:N.type,key:ce,ref:Ee,props:Q,_owner:ye}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ht.createElement=z,ht.createFactory=function(N){var re=z.bind(null,N);return re.type=N,re},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:d,render:N}},ht.isValidElement=T,ht.lazy=function(N){return{$$typeof:g,_payload:{_status:-1,_result:N},_init:se}},ht.memo=function(N,re){return{$$typeof:m,type:N,compare:re===void 0?null:re}},ht.startTransition=function(N){var re=V.transition;V.transition={};try{N()}finally{V.transition=re}},ht.unstable_act=le,ht.useCallback=function(N,re){return me.current.useCallback(N,re)},ht.useContext=function(N){return me.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return me.current.useDeferredValue(N)},ht.useEffect=function(N,re){return me.current.useEffect(N,re)},ht.useId=function(){return me.current.useId()},ht.useImperativeHandle=function(N,re,Ne){return me.current.useImperativeHandle(N,re,Ne)},ht.useInsertionEffect=function(N,re){return me.current.useInsertionEffect(N,re)},ht.useLayoutEffect=function(N,re){return me.current.useLayoutEffect(N,re)},ht.useMemo=function(N,re){return me.current.useMemo(N,re)},ht.useReducer=function(N,re,Ne){return me.current.useReducer(N,re,Ne)},ht.useRef=function(N){return me.current.useRef(N)},ht.useState=function(N){return me.current.useState(N)},ht.useSyncExternalStore=function(N,re,Ne){return me.current.useSyncExternalStore(N,re,Ne)},ht.useTransition=function(){return me.current.useTransition()},ht.version="18.3.1",ht}var Np;function qd(){return Np||(Np=1,_c.exports=c0()),_c.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function d0(){if(Up)return ka;Up=1;var s=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(d,h,m){var g,_={},y=null,x=null;m!==void 0&&(y=""+m),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(x=h.ref);for(g in h)r.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:y,ref:x,props:_,_owner:o.current}}return ka.Fragment=t,ka.jsx=c,ka.jsxs=c,ka}var Fp;function f0(){return Fp||(Fp=1,vc.exports=d0()),vc.exports}var K=f0(),kt=qd();const h0=jd(kt);var il={},yc={exports:{}},Fn={},xc={exports:{}},Sc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zp;function p0(){return zp||(zp=1,(function(s){function e(V,ue){var le=V.length;V.push(ue);e:for(;0<le;){var N=le-1>>>1,re=V[N];if(0<o(re,ue))V[N]=ue,V[le]=re,le=N;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ue=V[0],le=V.pop();if(le!==ue){V[0]=le;e:for(var N=0,re=V.length,Ne=re>>>1;N<Ne;){var Q=2*(N+1)-1,ce=V[Q],Ee=Q+1,ye=V[Ee];if(0>o(ce,le))Ee<re&&0>o(ye,ce)?(V[N]=ye,V[Ee]=le,N=Ee):(V[N]=ce,V[Q]=le,N=Q);else if(Ee<re&&0>o(ye,le))V[N]=ye,V[Ee]=le,N=Ee;else break e}}return ue}function o(V,ue){var le=V.sortIndex-ue.sortIndex;return le!==0?le:V.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var h=[],m=[],g=1,_=null,y=3,x=!1,E=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(V){for(var ue=t(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=V)r(m),ue.sortIndex=ue.expirationTime,e(h,ue);else break;ue=t(m)}}function R(V){if(A=!1,D(V),!E)if(t(h)!==null)E=!0,se(F);else{var ue=t(m);ue!==null&&me(R,ue.startTime-V)}}function F(V,ue){E=!1,A&&(A=!1,v(z),z=-1),x=!0;var le=y;try{for(D(ue),_=t(h);_!==null&&(!(_.expirationTime>ue)||V&&!B());){var N=_.callback;if(typeof N=="function"){_.callback=null,y=_.priorityLevel;var re=N(_.expirationTime<=ue);ue=s.unstable_now(),typeof re=="function"?_.callback=re:_===t(h)&&r(h),D(ue)}else r(h);_=t(h)}if(_!==null)var Ne=!0;else{var Q=t(m);Q!==null&&me(R,Q.startTime-ue),Ne=!1}return Ne}finally{_=null,y=le,x=!1}}var k=!1,U=null,z=-1,b=5,T=-1;function B(){return!(s.unstable_now()-T<b)}function ie(){if(U!==null){var V=s.unstable_now();T=V;var ue=!0;try{ue=U(!0,V)}finally{ue?Z():(k=!1,U=null)}}else k=!1}var Z;if(typeof I=="function")Z=function(){I(ie)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,he=ae.port2;ae.port1.onmessage=ie,Z=function(){he.postMessage(null)}}else Z=function(){S(ie,0)};function se(V){U=V,k||(k=!0,Z())}function me(V,ue){z=S(function(){V(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||x||(E=!0,se(F))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(y){case 1:case 2:case 3:var ue=3;break;default:ue=y}var le=y;y=ue;try{return V()}finally{y=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ue){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=y;y=V;try{return ue()}finally{y=le}},s.unstable_scheduleCallback=function(V,ue,le){var N=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?N+le:N):le=N,V){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=le+re,V={id:g++,callback:ue,priorityLevel:V,startTime:le,expirationTime:re,sortIndex:-1},le>N?(V.sortIndex=le,e(m,V),t(h)===null&&V===t(m)&&(A?(v(z),z=-1):A=!0,me(R,le-N))):(V.sortIndex=re,e(h,V),E||x||(E=!0,se(F))),V},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(V){var ue=y;return function(){var le=y;y=ue;try{return V.apply(this,arguments)}finally{y=le}}}})(Sc)),Sc}var Op;function m0(){return Op||(Op=1,xc.exports=p0()),xc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function g0(){if(Bp)return Fn;Bp=1;var s=qd(),e=m0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function y(n){return h.call(_,n)?!0:h.call(g,n)?!1:m.test(n)?_[n]=!0:(g[n]=!0,!1)}function x(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,u){if(i===null||typeof i>"u"||x(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,u,f,p,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,I);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,I);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,I);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,a,u){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,u)&&(a=null),u||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,u=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),k=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),B=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),V=Symbol.iterator;function ue(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,N;function re(n){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+n}var Ne=!1;function Q(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var u=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){u=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){u=ee}n()}}catch(ee){if(ee&&u&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),p=u.stack.split(`
`),M=f.length-1,L=p.length-1;1<=M&&0<=L&&f[M]!==p[L];)L--;for(;1<=M&&0<=L;M--,L--)if(f[M]!==p[L]){if(M!==1||L!==1)do if(M--,L--,0>L||f[M]!==p[L]){var O=`
`+f[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?re(n):""}function ce(n){switch(n.tag){case 5:return re(n.type);case 16:return re("Lazy");case 13:return re("Suspense");case 19:return re("SuspenseList");case 0:case 2:case 15:return n=Q(n.type,!1),n;case 11:return n=Q(n.type.render,!1),n;case 1:return n=Q(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case k:return"Portal";case b:return"Profiler";case z:return"StrictMode";case Z:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case T:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(M){u=""+M,p.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(M){u=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Qe(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function It(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Sn(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function dt(n,i){pt(n,i);var a=Te(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Rt(n,i,a){(i!=="number"||It(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var je=Array.isArray;function P(n,i,a,u){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&u&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function pe(n,i){var a=Te(i.value),u=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function $e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,f=$e(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,f):n[a]=f}}var He=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(He[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function X(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,oe=null,fe=null;function De(n){if(n=_a(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=_o(i),Ce(n.stateNode,n.type,i))}}function Pe(n){oe?fe?fe.push(n):fe=[n]:oe=n}function at(){if(oe){var n=oe,i=fe;if(fe=oe=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ft(n,i){return n(i)}function Jt(){}var xt=!1;function Dn(n,i,a){if(xt)return n(i,a);xt=!0;try{return Ft(n,i,a)}finally{xt=!1,(oe!==null||fe!==null)&&(Jt(),at())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var u=_o(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ns=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){ns=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{ns=!1}function Ai(n,i,a,u,f,p,M,L,O){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var Ci=!1,Ar=null,Cr=!1,Yi=null,$a={onError:function(n){Ci=!0,Ar=n}};function is(n,i,a,u,f,p,M,L,O){Ci=!1,Ar=null,Ai.apply($a,arguments)}function Za(n,i,a,u,f,p,M,L,O){if(is.apply(this,arguments),Ci){if(Ci){var ee=Ar;Ci=!1,Ar=null}else throw Error(t(198));Cr||(Cr=!0,Yi=ee)}}function gi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ja(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Qa(n){if(gi(n)!==n)throw Error(t(188))}function Bl(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(u=f.return,u!==null){a=u;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return Qa(f),n;if(p===u)return Qa(f),i;p=p.sibling}throw Error(t(188))}if(a.return!==u.return)a=f,u=p;else{for(var M=!1,L=f.child;L;){if(L===a){M=!0,a=f,u=p;break}if(L===u){M=!0,u=f,a=p;break}L=L.sibling}if(!M){for(L=p.child;L;){if(L===a){M=!0,a=p,u=f;break}if(L===u){M=!0,u=p,a=f;break}L=L.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function eo(n){return n=Bl(n),n!==null?to(n):null}function to(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=to(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,j=e.unstable_cancelCallback,te=e.unstable_shouldYield,ne=e.unstable_requestPaint,G=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,qe=null,ot=null;function wt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Ye,Bt=Math.log,yt=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Bt(n)/yt|0)|0}var Xt=64,_t=4194304;function un(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ni(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,f=n.suspendedLanes,p=n.pingedLanes,M=a&268435455;if(M!==0){var L=M&~f;L!==0?u=un(L):(p&=M,p!==0&&(u=un(p)))}else M=a&~f,M!==0?u=un(M):p!==0&&(u=un(p));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Tt(i),f=1<<a,u|=n[a],i&=~f;return u}function En(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function br(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,p=n.pendingLanes;0<p;){var M=31-Tt(p),L=1<<M,O=f[M];O===-1?((L&a)===0||(L&u)!==0)&&(f[M]=En(L,i)):O<=i&&(n.expiredLanes|=L),p&=~L}}function Dt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=Xt;return Xt<<=1,(Xt&4194240)===0&&(Xt=64),n}function hn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Kt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=a}function pn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-Tt(a),p=1<<f;i[f]=0,u[f]=-1,n[f]=-1,a&=~p}}function Rr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Tt(a),f=1<<u;f&i|n[u]&i&&(n[u]|=i),a&=~f}}var mt=0;function ff(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hf,Hl,pf,mf,gf,Vl=!1,no=[],$i=null,Zi=null,Ji=null,na=new Map,ia=new Map,Qi=[],Dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vf(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":na.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(i.pointerId)}}function ra(n,i,a,u,f,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:p,targetContainers:[f]},i!==null&&(i=_a(i),i!==null&&Hl(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Lg(n,i,a,u,f){switch(i){case"focusin":return $i=ra($i,n,i,a,u,f),!0;case"dragenter":return Zi=ra(Zi,n,i,a,u,f),!0;case"mouseover":return Ji=ra(Ji,n,i,a,u,f),!0;case"pointerover":var p=f.pointerId;return na.set(p,ra(na.get(p)||null,n,i,a,u,f)),!0;case"gotpointercapture":return p=f.pointerId,ia.set(p,ra(ia.get(p)||null,n,i,a,u,f)),!0}return!1}function _f(n){var i=Pr(n.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ja(a),i!==null){n.blockedOn=i,gf(n.priority,function(){pf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function io(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Wl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);bt=u,a.target.dispatchEvent(u),bt=null}else return i=_a(a),i!==null&&Hl(i),n.blockedOn=a,!1;i.shift()}return!0}function yf(n,i,a){io(n)&&a.delete(i)}function kg(){Vl=!1,$i!==null&&io($i)&&($i=null),Zi!==null&&io(Zi)&&(Zi=null),Ji!==null&&io(Ji)&&(Ji=null),na.forEach(yf),ia.forEach(yf)}function sa(n,i){n.blockedOn===i&&(n.blockedOn=null,Vl||(Vl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kg)))}function aa(n){function i(f){return sa(f,n)}if(0<no.length){sa(no[0],n);for(var a=1;a<no.length;a++){var u=no[a];u.blockedOn===n&&(u.blockedOn=null)}}for($i!==null&&sa($i,n),Zi!==null&&sa(Zi,n),Ji!==null&&sa(Ji,n),na.forEach(i),ia.forEach(i),a=0;a<Qi.length;a++)u=Qi[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)_f(a),a.blockedOn===null&&Qi.shift()}var rs=R.ReactCurrentBatchConfig,ro=!0;function Ig(n,i,a,u){var f=mt,p=rs.transition;rs.transition=null;try{mt=1,Gl(n,i,a,u)}finally{mt=f,rs.transition=p}}function Ng(n,i,a,u){var f=mt,p=rs.transition;rs.transition=null;try{mt=4,Gl(n,i,a,u)}finally{mt=f,rs.transition=p}}function Gl(n,i,a,u){if(ro){var f=Wl(n,i,a,u);if(f===null)ou(n,i,u,so,a),vf(n,u);else if(Lg(f,n,i,a,u))u.stopPropagation();else if(vf(n,u),i&4&&-1<Dg.indexOf(n)){for(;f!==null;){var p=_a(f);if(p!==null&&hf(p),p=Wl(n,i,a,u),p===null&&ou(n,i,u,so,a),p===f)break;f=p}f!==null&&u.stopPropagation()}else ou(n,i,u,null,a)}}var so=null;function Wl(n,i,a,u){if(so=null,n=X(u),n=Pr(n),n!==null)if(i=gi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ja(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return so=n,null}function xf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case be:return 1;case Ie:return 4;case ze:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var er=null,Xl=null,ao=null;function Sf(){if(ao)return ao;var n,i=Xl,a=i.length,u,f="value"in er?er.value:er.textContent,p=f.length;for(n=0;n<a&&i[n]===f[n];n++);var M=a-n;for(u=1;u<=M&&i[a-u]===f[p-u];u++);return ao=f.slice(n,1<u?1-u:void 0)}function oo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function lo(){return!0}function Mf(){return!1}function Hn(n){function i(a,u,f,p,M){this._reactName=a,this._targetInst=f,this.type=u,this.nativeEvent=p,this.target=M,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(p):p[L]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?lo:Mf,this.isPropagationStopped=Mf,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jl=Hn(ss),oa=le({},ss,{view:0,detail:0}),Ug=Hn(oa),ql,Kl,la,uo=le({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$l,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==la&&(la&&n.type==="mousemove"?(ql=n.screenX-la.screenX,Kl=n.screenY-la.screenY):Kl=ql=0,la=n),ql)},movementY:function(n){return"movementY"in n?n.movementY:Kl}}),Ef=Hn(uo),Fg=le({},uo,{dataTransfer:0}),zg=Hn(Fg),Og=le({},oa,{relatedTarget:0}),Yl=Hn(Og),Bg=le({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),Hg=Hn(Bg),Vg=le({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Gg=Hn(Vg),Wg=le({},ss,{data:0}),wf=Hn(Wg),Xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=qg[n])?!!i[n]:!1}function $l(){return Kg}var Yg=le({},oa,{key:function(n){if(n.key){var i=Xg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=oo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?jg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$l,charCode:function(n){return n.type==="keypress"?oo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?oo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),$g=Hn(Yg),Zg=le({},uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Tf=Hn(Zg),Jg=le({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$l}),Qg=Hn(Jg),ev=le({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),tv=Hn(ev),nv=le({},uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),iv=Hn(nv),rv=[9,13,27,32],Zl=d&&"CompositionEvent"in window,ua=null;d&&"documentMode"in document&&(ua=document.documentMode);var sv=d&&"TextEvent"in window&&!ua,Af=d&&(!Zl||ua&&8<ua&&11>=ua),Cf=" ",bf=!1;function Rf(n,i){switch(n){case"keyup":return rv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var as=!1;function av(n,i){switch(n){case"compositionend":return Pf(i);case"keypress":return i.which!==32?null:(bf=!0,Cf);case"textInput":return n=i.data,n===Cf&&bf?null:n;default:return null}}function ov(n,i){if(as)return n==="compositionend"||!Zl&&Rf(n,i)?(n=Sf(),ao=Xl=er=null,as=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Af&&i.locale!=="ko"?null:i.data;default:return null}}var lv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Df(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!lv[n.type]:i==="textarea"}function Lf(n,i,a,u){Pe(u),i=mo(i,"onChange"),0<i.length&&(a=new jl("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var ca=null,da=null;function uv(n){$f(n,0)}function co(n){var i=ds(n);if(vt(i))return n}function cv(n,i){if(n==="change")return i}var kf=!1;if(d){var Jl;if(d){var Ql="oninput"in document;if(!Ql){var If=document.createElement("div");If.setAttribute("oninput","return;"),Ql=typeof If.oninput=="function"}Jl=Ql}else Jl=!1;kf=Jl&&(!document.documentMode||9<document.documentMode)}function Nf(){ca&&(ca.detachEvent("onpropertychange",Uf),da=ca=null)}function Uf(n){if(n.propertyName==="value"&&co(da)){var i=[];Lf(i,da,n,X(n)),Dn(uv,i)}}function dv(n,i,a){n==="focusin"?(Nf(),ca=i,da=a,ca.attachEvent("onpropertychange",Uf)):n==="focusout"&&Nf()}function fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return co(da)}function hv(n,i){if(n==="click")return co(i)}function pv(n,i){if(n==="input"||n==="change")return co(i)}function mv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ii=typeof Object.is=="function"?Object.is:mv;function fa(n,i){if(ii(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var f=a[u];if(!h.call(i,f)||!ii(n[f],i[f]))return!1}return!0}function Ff(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function zf(n,i){var a=Ff(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ff(a)}}function Of(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Of(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Bf(){for(var n=window,i=It();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=It(n.document)}return i}function eu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function gv(n){var i=Bf(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Of(a.ownerDocument.documentElement,a)){if(u!==null&&eu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,p=Math.min(u.start,f);u=u.end===void 0?p:Math.min(u.end,f),!n.extend&&p>u&&(f=u,u=p,p=f),f=zf(a,p);var M=zf(a,u);f&&M&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),p>u?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var vv=d&&"documentMode"in document&&11>=document.documentMode,os=null,tu=null,ha=null,nu=!1;function Hf(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;nu||os==null||os!==It(u)||(u=os,"selectionStart"in u&&eu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ha&&fa(ha,u)||(ha=u,u=mo(tu,"onSelect"),0<u.length&&(i=new jl("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=os)))}function fo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ls={animationend:fo("Animation","AnimationEnd"),animationiteration:fo("Animation","AnimationIteration"),animationstart:fo("Animation","AnimationStart"),transitionend:fo("Transition","TransitionEnd")},iu={},Vf={};d&&(Vf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function ho(n){if(iu[n])return iu[n];if(!ls[n])return n;var i=ls[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Vf)return iu[n]=i[a];return n}var Gf=ho("animationend"),Wf=ho("animationiteration"),Xf=ho("animationstart"),jf=ho("transitionend"),qf=new Map,Kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){qf.set(n,i),l(i,[n])}for(var ru=0;ru<Kf.length;ru++){var su=Kf[ru],_v=su.toLowerCase(),yv=su[0].toUpperCase()+su.slice(1);tr(_v,"on"+yv)}tr(Gf,"onAnimationEnd"),tr(Wf,"onAnimationIteration"),tr(Xf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(jf,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function Yf(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,Za(u,i,void 0,n),n.currentTarget=null}function $f(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],f=u.event;u=u.listeners;e:{var p=void 0;if(i)for(var M=u.length-1;0<=M;M--){var L=u[M],O=L.instance,ee=L.currentTarget;if(L=L.listener,O!==p&&f.isPropagationStopped())break e;Yf(f,L,ee),p=O}else for(M=0;M<u.length;M++){if(L=u[M],O=L.instance,ee=L.currentTarget,L=L.listener,O!==p&&f.isPropagationStopped())break e;Yf(f,L,ee),p=O}}}if(Cr)throw n=Yi,Cr=!1,Yi=null,n}function zt(n,i){var a=i[hu];a===void 0&&(a=i[hu]=new Set);var u=n+"__bubble";a.has(u)||(Zf(i,n,2,!1),a.add(u))}function au(n,i,a){var u=0;i&&(u|=4),Zf(a,n,u,i)}var po="_reactListening"+Math.random().toString(36).slice(2);function ma(n){if(!n[po]){n[po]=!0,r.forEach(function(a){a!=="selectionchange"&&(xv.has(a)||au(a,!1,n),au(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[po]||(i[po]=!0,au("selectionchange",!1,i))}}function Zf(n,i,a,u){switch(xf(i)){case 1:var f=Ig;break;case 4:f=Ng;break;default:f=Gl}a=f.bind(null,i,a,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function ou(n,i,a,u,f){var p=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var M=u.tag;if(M===3||M===4){var L=u.stateNode.containerInfo;if(L===f||L.nodeType===8&&L.parentNode===f)break;if(M===4)for(M=u.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===f||O.nodeType===8&&O.parentNode===f))return;M=M.return}for(;L!==null;){if(M=Pr(L),M===null)return;if(O=M.tag,O===5||O===6){u=p=M;continue e}L=L.parentNode}}u=u.return}Dn(function(){var ee=p,_e=X(a),xe=[];e:{var ge=qf.get(n);if(ge!==void 0){var Le=jl,Ve=n;switch(n){case"keypress":if(oo(a)===0)break e;case"keydown":case"keyup":Le=$g;break;case"focusin":Ve="focus",Le=Yl;break;case"focusout":Ve="blur",Le=Yl;break;case"beforeblur":case"afterblur":Le=Yl;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Ef;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=zg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Qg;break;case Gf:case Wf:case Xf:Le=Hg;break;case jf:Le=tv;break;case"scroll":Le=Ug;break;case"wheel":Le=iv;break;case"copy":case"cut":case"paste":Le=Gg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Tf}var Ge=(i&4)!==0,Yt=!Ge&&n==="scroll",Y=Ge?ge!==null?ge+"Capture":null:ge;Ge=[];for(var W=ee,$;W!==null;){$=W;var we=$.stateNode;if($.tag===5&&we!==null&&($=we,Y!==null&&(we=Mn(W,Y),we!=null&&Ge.push(ga(W,we,$)))),Yt)break;W=W.return}0<Ge.length&&(ge=new Le(ge,Ve,null,a,_e),xe.push({event:ge,listeners:Ge}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&a!==bt&&(Ve=a.relatedTarget||a.fromElement)&&(Pr(Ve)||Ve[bi]))break e;if((Le||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Ve=a.relatedTarget||a.toElement,Le=ee,Ve=Ve?Pr(Ve):null,Ve!==null&&(Yt=gi(Ve),Ve!==Yt||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Le=null,Ve=ee),Le!==Ve)){if(Ge=Ef,we="onMouseLeave",Y="onMouseEnter",W="mouse",(n==="pointerout"||n==="pointerover")&&(Ge=Tf,we="onPointerLeave",Y="onPointerEnter",W="pointer"),Yt=Le==null?ge:ds(Le),$=Ve==null?ge:ds(Ve),ge=new Ge(we,W+"leave",Le,a,_e),ge.target=Yt,ge.relatedTarget=$,we=null,Pr(_e)===ee&&(Ge=new Ge(Y,W+"enter",Ve,a,_e),Ge.target=$,Ge.relatedTarget=Yt,we=Ge),Yt=we,Le&&Ve)t:{for(Ge=Le,Y=Ve,W=0,$=Ge;$;$=us($))W++;for($=0,we=Y;we;we=us(we))$++;for(;0<W-$;)Ge=us(Ge),W--;for(;0<$-W;)Y=us(Y),$--;for(;W--;){if(Ge===Y||Y!==null&&Ge===Y.alternate)break t;Ge=us(Ge),Y=us(Y)}Ge=null}else Ge=null;Le!==null&&Jf(xe,ge,Le,Ge,!1),Ve!==null&&Yt!==null&&Jf(xe,Yt,Ve,Ge,!0)}}e:{if(ge=ee?ds(ee):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var Xe=cv;else if(Df(ge))if(kf)Xe=pv;else{Xe=fv;var Ze=dv}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=hv);if(Xe&&(Xe=Xe(n,ee))){Lf(xe,Xe,a,_e);break e}Ze&&Ze(n,ge,ee),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Rt(ge,"number",ge.value)}switch(Ze=ee?ds(ee):window,n){case"focusin":(Df(Ze)||Ze.contentEditable==="true")&&(os=Ze,tu=ee,ha=null);break;case"focusout":ha=tu=os=null;break;case"mousedown":nu=!0;break;case"contextmenu":case"mouseup":case"dragend":nu=!1,Hf(xe,a,_e);break;case"selectionchange":if(vv)break;case"keydown":case"keyup":Hf(xe,a,_e)}var Je;if(Zl)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else as?Rf(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Af&&a.locale!=="ko"&&(as||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&as&&(Je=Sf()):(er=_e,Xl="value"in er?er.value:er.textContent,as=!0)),Ze=mo(ee,rt),0<Ze.length&&(rt=new wf(rt,n,null,a,_e),xe.push({event:rt,listeners:Ze}),Je?rt.data=Je:(Je=Pf(a),Je!==null&&(rt.data=Je)))),(Je=sv?av(n,a):ov(n,a))&&(ee=mo(ee,"onBeforeInput"),0<ee.length&&(_e=new wf("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ee}),_e.data=Je))}$f(xe,i)})}function ga(n,i,a){return{instance:n,listener:i,currentTarget:a}}function mo(n,i){for(var a=i+"Capture",u=[];n!==null;){var f=n,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=Mn(n,a),p!=null&&u.unshift(ga(n,p,f)),p=Mn(n,i),p!=null&&u.push(ga(n,p,f))),n=n.return}return u}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Jf(n,i,a,u,f){for(var p=i._reactName,M=[];a!==null&&a!==u;){var L=a,O=L.alternate,ee=L.stateNode;if(O!==null&&O===u)break;L.tag===5&&ee!==null&&(L=ee,f?(O=Mn(a,p),O!=null&&M.unshift(ga(a,O,L))):f||(O=Mn(a,p),O!=null&&M.push(ga(a,O,L)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var Sv=/\r\n?/g,Mv=/\u0000|\uFFFD/g;function Qf(n){return(typeof n=="string"?n:""+n).replace(Sv,`
`).replace(Mv,"")}function go(n,i,a){if(i=Qf(i),Qf(n)!==i&&a)throw Error(t(425))}function vo(){}var lu=null,uu=null;function cu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var du=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,eh=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof eh<"u"?function(n){return eh.resolve(null).then(n).catch(Tv)}:du;function Tv(n){setTimeout(function(){throw n})}function fu(n,i){var a=i,u=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(u===0){n.removeChild(f),aa(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=f}while(a);aa(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var cs=Math.random().toString(36).slice(2),vi="__reactFiber$"+cs,va="__reactProps$"+cs,bi="__reactContainer$"+cs,hu="__reactEvents$"+cs,Av="__reactListeners$"+cs,Cv="__reactHandles$"+cs;function Pr(n){var i=n[vi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[bi]||a[vi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=th(n);n!==null;){if(a=n[vi])return a;n=th(n)}return i}n=a,a=n.parentNode}return null}function _a(n){return n=n[vi]||n[bi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _o(n){return n[va]||null}var pu=[],fs=-1;function ir(n){return{current:n}}function Ot(n){0>fs||(n.current=pu[fs],pu[fs]=null,fs--)}function Nt(n,i){fs++,pu[fs]=n.current,n.current=i}var rr={},mn=ir(rr),Ln=ir(!1),Dr=rr;function hs(n,i){var a=n.type.contextTypes;if(!a)return rr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function kn(n){return n=n.childContextTypes,n!=null}function yo(){Ot(Ln),Ot(mn)}function nh(n,i,a){if(mn.current!==rr)throw Error(t(168));Nt(mn,i),Nt(Ln,a)}function ih(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,ye(n)||"Unknown",f));return le({},a,u)}function xo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Dr=mn.current,Nt(mn,n),Nt(Ln,Ln.current),!0}function rh(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=ih(n,i,Dr),u.__reactInternalMemoizedMergedChildContext=n,Ot(Ln),Ot(mn),Nt(mn,n)):Ot(Ln),Nt(Ln,a)}var Ri=null,So=!1,mu=!1;function sh(n){Ri===null?Ri=[n]:Ri.push(n)}function bv(n){So=!0,sh(n)}function sr(){if(!mu&&Ri!==null){mu=!0;var n=0,i=mt;try{var a=Ri;for(mt=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Ri=null,So=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(n+1)),C(be,sr),f}finally{mt=i,mu=!1}}return null}var ps=[],ms=0,Mo=null,Eo=0,qn=[],Kn=0,Lr=null,Pi=1,Di="";function kr(n,i){ps[ms++]=Eo,ps[ms++]=Mo,Mo=n,Eo=i}function ah(n,i,a){qn[Kn++]=Pi,qn[Kn++]=Di,qn[Kn++]=Lr,Lr=n;var u=Pi;n=Di;var f=32-Tt(u)-1;u&=~(1<<f),a+=1;var p=32-Tt(i)+f;if(30<p){var M=f-f%5;p=(u&(1<<M)-1).toString(32),u>>=M,f-=M,Pi=1<<32-Tt(i)+f|a<<f|u,Di=p+n}else Pi=1<<p|a<<f|u,Di=n}function gu(n){n.return!==null&&(kr(n,1),ah(n,1,0))}function vu(n){for(;n===Mo;)Mo=ps[--ms],ps[ms]=null,Eo=ps[--ms],ps[ms]=null;for(;n===Lr;)Lr=qn[--Kn],qn[Kn]=null,Di=qn[--Kn],qn[Kn]=null,Pi=qn[--Kn],qn[Kn]=null}var Vn=null,Gn=null,Ht=!1,ri=null;function oh(n,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function lh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Lr!==null?{id:Pi,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Gn=null,!0):!1;default:return!1}}function _u(n){return(n.mode&1)!==0&&(n.flags&128)===0}function yu(n){if(Ht){var i=Gn;if(i){var a=i;if(!lh(n,i)){if(_u(n))throw Error(t(418));i=nr(a.nextSibling);var u=Vn;i&&lh(n,i)?oh(u,a):(n.flags=n.flags&-4097|2,Ht=!1,Vn=n)}}else{if(_u(n))throw Error(t(418));n.flags=n.flags&-4097|2,Ht=!1,Vn=n}}}function uh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function wo(n){if(n!==Vn)return!1;if(!Ht)return uh(n),Ht=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!cu(n.type,n.memoizedProps)),i&&(i=Gn)){if(_u(n))throw ch(),Error(t(418));for(;i;)oh(n,i),i=nr(i.nextSibling)}if(uh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Gn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Vn?nr(n.stateNode.nextSibling):null;return!0}function ch(){for(var n=Gn;n;)n=nr(n.nextSibling)}function gs(){Gn=Vn=null,Ht=!1}function xu(n){ri===null?ri=[n]:ri.push(n)}var Rv=R.ReactCurrentBatchConfig;function ya(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var f=u,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(M){var L=f.refs;M===null?delete L[p]:L[p]=M},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function To(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function dh(n){var i=n._init;return i(n._payload)}function fh(n){function i(Y,W){if(n){var $=Y.deletions;$===null?(Y.deletions=[W],Y.flags|=16):$.push(W)}}function a(Y,W){if(!n)return null;for(;W!==null;)i(Y,W),W=W.sibling;return null}function u(Y,W){for(Y=new Map;W!==null;)W.key!==null?Y.set(W.key,W):Y.set(W.index,W),W=W.sibling;return Y}function f(Y,W){return Y=hr(Y,W),Y.index=0,Y.sibling=null,Y}function p(Y,W,$){return Y.index=$,n?($=Y.alternate,$!==null?($=$.index,$<W?(Y.flags|=2,W):$):(Y.flags|=2,W)):(Y.flags|=1048576,W)}function M(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,W,$,we){return W===null||W.tag!==6?(W=dc($,Y.mode,we),W.return=Y,W):(W=f(W,$),W.return=Y,W)}function O(Y,W,$,we){var Xe=$.type;return Xe===U?_e(Y,W,$.props.children,we,$.key):W!==null&&(W.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&dh(Xe)===W.type)?(we=f(W,$.props),we.ref=ya(Y,W,$),we.return=Y,we):(we=Yo($.type,$.key,$.props,null,Y.mode,we),we.ref=ya(Y,W,$),we.return=Y,we)}function ee(Y,W,$,we){return W===null||W.tag!==4||W.stateNode.containerInfo!==$.containerInfo||W.stateNode.implementation!==$.implementation?(W=fc($,Y.mode,we),W.return=Y,W):(W=f(W,$.children||[]),W.return=Y,W)}function _e(Y,W,$,we,Xe){return W===null||W.tag!==7?(W=Hr($,Y.mode,we,Xe),W.return=Y,W):(W=f(W,$),W.return=Y,W)}function xe(Y,W,$){if(typeof W=="string"&&W!==""||typeof W=="number")return W=dc(""+W,Y.mode,$),W.return=Y,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case F:return $=Yo(W.type,W.key,W.props,null,Y.mode,$),$.ref=ya(Y,null,W),$.return=Y,$;case k:return W=fc(W,Y.mode,$),W.return=Y,W;case se:var we=W._init;return xe(Y,we(W._payload),$)}if(je(W)||ue(W))return W=Hr(W,Y.mode,$,null),W.return=Y,W;To(Y,W)}return null}function ge(Y,W,$,we){var Xe=W!==null?W.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:L(Y,W,""+$,we);if(typeof $=="object"&&$!==null){switch($.$$typeof){case F:return $.key===Xe?O(Y,W,$,we):null;case k:return $.key===Xe?ee(Y,W,$,we):null;case se:return Xe=$._init,ge(Y,W,Xe($._payload),we)}if(je($)||ue($))return Xe!==null?null:_e(Y,W,$,we,null);To(Y,$)}return null}function Le(Y,W,$,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get($)||null,L(W,Y,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case F:return Y=Y.get(we.key===null?$:we.key)||null,O(W,Y,we,Xe);case k:return Y=Y.get(we.key===null?$:we.key)||null,ee(W,Y,we,Xe);case se:var Ze=we._init;return Le(Y,W,$,Ze(we._payload),Xe)}if(je(we)||ue(we))return Y=Y.get($)||null,_e(W,Y,we,Xe,null);To(W,we)}return null}function Ve(Y,W,$,we){for(var Xe=null,Ze=null,Je=W,rt=W=0,on=null;Je!==null&&rt<$.length;rt++){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var At=ge(Y,Je,$[rt],we);if(At===null){Je===null&&(Je=on);break}n&&Je&&At.alternate===null&&i(Y,Je),W=p(At,W,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At,Je=on}if(rt===$.length)return a(Y,Je),Ht&&kr(Y,rt),Xe;if(Je===null){for(;rt<$.length;rt++)Je=xe(Y,$[rt],we),Je!==null&&(W=p(Je,W,rt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Ht&&kr(Y,rt),Xe}for(Je=u(Y,Je);rt<$.length;rt++)on=Le(Je,Y,rt,$[rt],we),on!==null&&(n&&on.alternate!==null&&Je.delete(on.key===null?rt:on.key),W=p(on,W,rt),Ze===null?Xe=on:Ze.sibling=on,Ze=on);return n&&Je.forEach(function(pr){return i(Y,pr)}),Ht&&kr(Y,rt),Xe}function Ge(Y,W,$,we){var Xe=ue($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ze=Xe=null,Je=W,rt=W=0,on=null,At=$.next();Je!==null&&!At.done;rt++,At=$.next()){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var pr=ge(Y,Je,At.value,we);if(pr===null){Je===null&&(Je=on);break}n&&Je&&pr.alternate===null&&i(Y,Je),W=p(pr,W,rt),Ze===null?Xe=pr:Ze.sibling=pr,Ze=pr,Je=on}if(At.done)return a(Y,Je),Ht&&kr(Y,rt),Xe;if(Je===null){for(;!At.done;rt++,At=$.next())At=xe(Y,At.value,we),At!==null&&(W=p(At,W,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return Ht&&kr(Y,rt),Xe}for(Je=u(Y,Je);!At.done;rt++,At=$.next())At=Le(Je,Y,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&Je.delete(At.key===null?rt:At.key),W=p(At,W,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return n&&Je.forEach(function(l0){return i(Y,l0)}),Ht&&kr(Y,rt),Xe}function Yt(Y,W,$,we){if(typeof $=="object"&&$!==null&&$.type===U&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case F:e:{for(var Xe=$.key,Ze=W;Ze!==null;){if(Ze.key===Xe){if(Xe=$.type,Xe===U){if(Ze.tag===7){a(Y,Ze.sibling),W=f(Ze,$.props.children),W.return=Y,Y=W;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===se&&dh(Xe)===Ze.type){a(Y,Ze.sibling),W=f(Ze,$.props),W.ref=ya(Y,Ze,$),W.return=Y,Y=W;break e}a(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}$.type===U?(W=Hr($.props.children,Y.mode,we,$.key),W.return=Y,Y=W):(we=Yo($.type,$.key,$.props,null,Y.mode,we),we.ref=ya(Y,W,$),we.return=Y,Y=we)}return M(Y);case k:e:{for(Ze=$.key;W!==null;){if(W.key===Ze)if(W.tag===4&&W.stateNode.containerInfo===$.containerInfo&&W.stateNode.implementation===$.implementation){a(Y,W.sibling),W=f(W,$.children||[]),W.return=Y,Y=W;break e}else{a(Y,W);break}else i(Y,W);W=W.sibling}W=fc($,Y.mode,we),W.return=Y,Y=W}return M(Y);case se:return Ze=$._init,Yt(Y,W,Ze($._payload),we)}if(je($))return Ve(Y,W,$,we);if(ue($))return Ge(Y,W,$,we);To(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,W!==null&&W.tag===6?(a(Y,W.sibling),W=f(W,$),W.return=Y,Y=W):(a(Y,W),W=dc($,Y.mode,we),W.return=Y,Y=W),M(Y)):a(Y,W)}return Yt}var vs=fh(!0),hh=fh(!1),Ao=ir(null),Co=null,_s=null,Su=null;function Mu(){Su=_s=Co=null}function Eu(n){var i=Ao.current;Ot(Ao),n._currentValue=i}function wu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ys(n,i){Co=n,Su=_s=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Yn(n){var i=n._currentValue;if(Su!==n)if(n={context:n,memoizedValue:i,next:null},_s===null){if(Co===null)throw Error(t(308));_s=n,Co.dependencies={lanes:0,firstContext:n}}else _s=_s.next=n;return i}var Ir=null;function Tu(n){Ir===null?Ir=[n]:Ir.push(n)}function ph(n,i,a,u){var f=i.interleaved;return f===null?(a.next=a,Tu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Li(n,u)}function Li(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ar=!1;function Au(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(St&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,Li(n,a)}return f=u.interleaved,f===null?(i.next=i,Tu(u)):(i.next=f.next,f.next=i),u.interleaved=i,Li(n,a)}function bo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rr(n,a)}}function gh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=M:p=p.next=M,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Ro(n,i,a,u){var f=n.updateQueue;ar=!1;var p=f.firstBaseUpdate,M=f.lastBaseUpdate,L=f.shared.pending;if(L!==null){f.shared.pending=null;var O=L,ee=O.next;O.next=null,M===null?p=ee:M.next=ee,M=O;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=ee:L.next=ee,_e.lastBaseUpdate=O))}if(p!==null){var xe=f.baseState;M=0,_e=ee=O=null,L=p;do{var ge=L.lane,Le=L.eventTime;if((u&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var Ve=n,Ge=L;switch(ge=i,Le=a,Ge.tag){case 1:if(Ve=Ge.payload,typeof Ve=="function"){xe=Ve.call(Le,xe,ge);break e}xe=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ge.payload,ge=typeof Ve=="function"?Ve.call(Le,xe,ge):Ve,ge==null)break e;xe=le({},xe,ge);break e;case 2:ar=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ge=f.effects,ge===null?f.effects=[L]:ge.push(L))}else Le={eventTime:Le,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(ee=_e=Le,O=xe):_e=_e.next=Le,M|=ge;if(L=L.next,L===null){if(L=f.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(_e===null&&(O=xe),f.baseState=O,f.firstBaseUpdate=ee,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do M|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Fr|=M,n.lanes=M,n.memoizedState=xe}}function vh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=a,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var xa={},_i=ir(xa),Sa=ir(xa),Ma=ir(xa);function Nr(n){if(n===xa)throw Error(t(174));return n}function Cu(n,i){switch(Nt(Ma,i),Nt(Sa,n),Nt(_i,xa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Ot(_i),Nt(_i,i)}function xs(){Ot(_i),Ot(Sa),Ot(Ma)}function _h(n){Nr(Ma.current);var i=Nr(_i.current),a=We(i,n.type);i!==a&&(Nt(Sa,n),Nt(_i,a))}function bu(n){Sa.current===n&&(Ot(_i),Ot(Sa))}var Gt=ir(0);function Po(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ru=[];function Pu(){for(var n=0;n<Ru.length;n++)Ru[n]._workInProgressVersionPrimary=null;Ru.length=0}var Do=R.ReactCurrentDispatcher,Du=R.ReactCurrentBatchConfig,Ur=0,Wt=null,Qt=null,sn=null,Lo=!1,Ea=!1,wa=0,Pv=0;function gn(){throw Error(t(321))}function Lu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ii(n[a],i[a]))return!1;return!0}function ku(n,i,a,u,f,p){if(Ur=p,Wt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Do.current=n===null||n.memoizedState===null?Iv:Nv,n=a(u,f),Ea){p=0;do{if(Ea=!1,wa=0,25<=p)throw Error(t(301));p+=1,sn=Qt=null,i.updateQueue=null,Do.current=Uv,n=a(u,f)}while(Ea)}if(Do.current=No,i=Qt!==null&&Qt.next!==null,Ur=0,sn=Qt=Wt=null,Lo=!1,i)throw Error(t(300));return n}function Iu(){var n=wa!==0;return wa=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Wt.memoizedState=sn=n:sn=sn.next=n,sn}function $n(){if(Qt===null){var n=Wt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=sn===null?Wt.memoizedState:sn.next;if(i!==null)sn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Wt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ta(n,i){return typeof i=="function"?i(n):i}function Nu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Qt,f=u.baseQueue,p=a.pending;if(p!==null){if(f!==null){var M=f.next;f.next=p.next,p.next=M}u.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,u=u.baseState;var L=M=null,O=null,ee=p;do{var _e=ee.lane;if((Ur&_e)===_e)O!==null&&(O=O.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),u=ee.hasEagerState?ee.eagerState:n(u,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};O===null?(L=O=xe,M=u):O=O.next=xe,Wt.lanes|=_e,Fr|=_e}ee=ee.next}while(ee!==null&&ee!==p);O===null?M=u:O.next=L,ii(u,i.memoizedState)||(In=!0),i.memoizedState=u,i.baseState=M,i.baseQueue=O,a.lastRenderedState=u}if(n=a.interleaved,n!==null){f=n;do p=f.lane,Wt.lanes|=p,Fr|=p,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Uu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var M=f=f.next;do p=n(p,M.action),M=M.next;while(M!==f);ii(p,i.memoizedState)||(In=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,u]}function yh(){}function xh(n,i){var a=Wt,u=$n(),f=i(),p=!ii(u.memoizedState,f);if(p&&(u.memoizedState=f,In=!0),u=u.queue,Fu(Eh.bind(null,a,u,n),[n]),u.getSnapshot!==i||p||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Aa(9,Mh.bind(null,a,u,f,i),void 0,null),an===null)throw Error(t(349));(Ur&30)!==0||Sh(a,i,f)}return f}function Sh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Mh(n,i,a,u){i.value=a,i.getSnapshot=u,wh(i)&&Th(n)}function Eh(n,i,a){return a(function(){wh(i)&&Th(n)})}function wh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ii(n,a)}catch{return!0}}function Th(n){var i=Li(n,1);i!==null&&li(i,n,1,-1)}function Ah(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ta,lastRenderedState:n},i.queue=n,n=n.dispatch=kv.bind(null,Wt,n),[i.memoizedState,n]}function Aa(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Wt.updateQueue,i===null?(i={lastEffect:null,stores:null},Wt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Ch(){return $n().memoizedState}function ko(n,i,a,u){var f=yi();Wt.flags|=n,f.memoizedState=Aa(1|i,a,void 0,u===void 0?null:u)}function Io(n,i,a,u){var f=$n();u=u===void 0?null:u;var p=void 0;if(Qt!==null){var M=Qt.memoizedState;if(p=M.destroy,u!==null&&Lu(u,M.deps)){f.memoizedState=Aa(i,a,p,u);return}}Wt.flags|=n,f.memoizedState=Aa(1|i,a,p,u)}function bh(n,i){return ko(8390656,8,n,i)}function Fu(n,i){return Io(2048,8,n,i)}function Rh(n,i){return Io(4,2,n,i)}function Ph(n,i){return Io(4,4,n,i)}function Dh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Lh(n,i,a){return a=a!=null?a.concat([n]):null,Io(4,4,Dh.bind(null,i,n),a)}function zu(){}function kh(n,i){var a=$n();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Lu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Ih(n,i){var a=$n();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Lu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Nh(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(ii(a,i)||(a=wn(),Wt.lanes|=a,Fr|=a,n.baseState=!0),i)}function Dv(n,i){var a=mt;mt=a!==0&&4>a?a:4,n(!0);var u=Du.transition;Du.transition={};try{n(!1),i()}finally{mt=a,Du.transition=u}}function Uh(){return $n().memoizedState}function Lv(n,i,a){var u=dr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Fh(n))zh(i,a);else if(a=ph(n,i,a,u),a!==null){var f=An();li(a,n,u,f),Oh(a,i,u)}}function kv(n,i,a){var u=dr(n),f={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Fh(n))zh(i,f);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var M=i.lastRenderedState,L=p(M,a);if(f.hasEagerState=!0,f.eagerState=L,ii(L,M)){var O=i.interleaved;O===null?(f.next=f,Tu(i)):(f.next=O.next,O.next=f),i.interleaved=f;return}}catch{}finally{}a=ph(n,i,f,u),a!==null&&(f=An(),li(a,n,u,f),Oh(a,i,u))}}function Fh(n){var i=n.alternate;return n===Wt||i!==null&&i===Wt}function zh(n,i){Ea=Lo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Oh(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Rr(n,a)}}var No={readContext:Yn,useCallback:gn,useContext:gn,useEffect:gn,useImperativeHandle:gn,useInsertionEffect:gn,useLayoutEffect:gn,useMemo:gn,useReducer:gn,useRef:gn,useState:gn,useDebugValue:gn,useDeferredValue:gn,useTransition:gn,useMutableSource:gn,useSyncExternalStore:gn,useId:gn,unstable_isNewReconciler:!1},Iv={readContext:Yn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Yn,useEffect:bh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ko(4194308,4,Dh.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ko(4194308,4,n,i)},useInsertionEffect:function(n,i){return ko(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=yi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Lv.bind(null,Wt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Ah,useDebugValue:zu,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Ah(!1),i=n[0];return n=Dv.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Wt,f=yi();if(Ht){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(Ur&30)!==0||Sh(u,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,bh(Eh.bind(null,u,p,n),[n]),u.flags|=2048,Aa(9,Mh.bind(null,u,p,a,i),void 0,null),a},useId:function(){var n=yi(),i=an.identifierPrefix;if(Ht){var a=Di,u=Pi;a=(u&~(1<<32-Tt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=wa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Pv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nv={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:Fu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Ph,useMemo:Ih,useReducer:Nu,useRef:Ch,useState:function(){return Nu(Ta)},useDebugValue:zu,useDeferredValue:function(n){var i=$n();return Nh(i,Qt.memoizedState,n)},useTransition:function(){var n=Nu(Ta)[0],i=$n().memoizedState;return[n,i]},useMutableSource:yh,useSyncExternalStore:xh,useId:Uh,unstable_isNewReconciler:!1},Uv={readContext:Yn,useCallback:kh,useContext:Yn,useEffect:Fu,useImperativeHandle:Lh,useInsertionEffect:Rh,useLayoutEffect:Ph,useMemo:Ih,useReducer:Uu,useRef:Ch,useState:function(){return Uu(Ta)},useDebugValue:zu,useDeferredValue:function(n){var i=$n();return Qt===null?i.memoizedState=n:Nh(i,Qt.memoizedState,n)},useTransition:function(){var n=Uu(Ta)[0],i=$n().memoizedState;return[n,i]},useMutableSource:yh,useSyncExternalStore:xh,useId:Uh,unstable_isNewReconciler:!1};function si(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function Ou(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Uo={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=An(),f=dr(n),p=ki(u,f);p.payload=i,a!=null&&(p.callback=a),i=or(n,p,f),i!==null&&(li(i,n,f,u),bo(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=An(),f=dr(n),p=ki(u,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=or(n,p,f),i!==null&&(li(i,n,f,u),bo(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),u=dr(n),f=ki(a,u);f.tag=2,i!=null&&(f.callback=i),i=or(n,f,u),i!==null&&(li(i,n,u,a),bo(i,n,u))}};function Bh(n,i,a,u,f,p,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,p,M):i.prototype&&i.prototype.isPureReactComponent?!fa(a,u)||!fa(f,p):!0}function Hh(n,i,a){var u=!1,f=rr,p=i.contextType;return typeof p=="object"&&p!==null?p=Yn(p):(f=kn(i)?Dr:mn.current,u=i.contextTypes,p=(u=u!=null)?hs(n,f):rr),i=new i(a,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Uo,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=p),i}function Vh(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Uo.enqueueReplaceState(i,i.state,null)}function Bu(n,i,a,u){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Au(n);var p=i.contextType;typeof p=="object"&&p!==null?f.context=Yn(p):(p=kn(i)?Dr:mn.current,f.context=hs(n,p)),f.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Ou(n,i,p,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Uo.enqueueReplaceState(f,f.state,null),Ro(n,a,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var a="",u=i;do a+=ce(u),u=u.return;while(u);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:f,digest:null}}function Hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Vu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Fv=typeof WeakMap=="function"?WeakMap:Map;function Gh(n,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Go||(Go=!0,ic=u),Vu(n,i)},a}function Wh(n,i,a){a=ki(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;a.payload=function(){return u(f)},a.callback=function(){Vu(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){Vu(n,i),typeof u!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function Xh(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new Fv;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(a)||(f.add(a),n=Zv.bind(null,n,i,a),i.then(n,n))}function jh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function qh(n,i,a,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var zv=R.ReactCurrentOwner,In=!1;function Tn(n,i,a,u){i.child=n===null?hh(i,null,a,u):vs(i,n.child,a,u)}function Kh(n,i,a,u,f){a=a.render;var p=i.ref;return ys(i,f),u=ku(n,i,a,u,p,f),a=Iu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Ht&&a&&gu(i),i.flags|=1,Tn(n,i,u,f),i.child)}function Yh(n,i,a,u,f){if(n===null){var p=a.type;return typeof p=="function"&&!cc(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,$h(n,i,p,u,f)):(n=Yo(a.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&f)===0){var M=p.memoizedProps;if(a=a.compare,a=a!==null?a:fa,a(M,u)&&n.ref===i.ref)return Ii(n,i,f)}return i.flags|=1,n=hr(p,u),n.ref=i.ref,n.return=i,i.child=n}function $h(n,i,a,u,f){if(n!==null){var p=n.memoizedProps;if(fa(p,u)&&n.ref===i.ref)if(In=!1,i.pendingProps=u=p,(n.lanes&f)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Ii(n,i,f)}return Gu(n,i,a,u,f)}function Zh(n,i,a){var u=i.pendingProps,f=u.children,p=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Es,Wn),Wn|=a;else{if((a&1073741824)===0)return n=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Es,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=p!==null?p.baseLanes:a,Nt(Es,Wn),Wn|=u}else p!==null?(u=p.baseLanes|a,i.memoizedState=null):u=a,Nt(Es,Wn),Wn|=u;return Tn(n,i,f,a),i.child}function Jh(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Gu(n,i,a,u,f){var p=kn(a)?Dr:mn.current;return p=hs(i,p),ys(i,f),a=ku(n,i,a,u,p,f),u=Iu(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Ht&&u&&gu(i),i.flags|=1,Tn(n,i,a,f),i.child)}function Qh(n,i,a,u,f){if(kn(a)){var p=!0;xo(i)}else p=!1;if(ys(i,f),i.stateNode===null)zo(n,i),Hh(i,a,u),Bu(i,a,u,f),u=!0;else if(n===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Yn(ee):(ee=kn(a)?Dr:mn.current,ee=hs(i,ee));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==u||O!==ee)&&Vh(i,M,u,ee),ar=!1;var ge=i.memoizedState;M.state=ge,Ro(i,u,M,f),O=i.memoizedState,L!==u||ge!==O||Ln.current||ar?(typeof _e=="function"&&(Ou(i,a,_e,u),O=i.memoizedState),(L=ar||Bh(i,a,L,u,ge,O,ee))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=O),M.props=u,M.state=O,M.context=ee,u=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{M=i.stateNode,mh(n,i),L=i.memoizedProps,ee=i.type===i.elementType?L:si(i.type,L),M.props=ee,xe=i.pendingProps,ge=M.context,O=a.contextType,typeof O=="object"&&O!==null?O=Yn(O):(O=kn(a)?Dr:mn.current,O=hs(i,O));var Le=a.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||ge!==O)&&Vh(i,M,u,O),ar=!1,ge=i.memoizedState,M.state=ge,Ro(i,u,M,f);var Ve=i.memoizedState;L!==xe||ge!==Ve||Ln.current||ar?(typeof Le=="function"&&(Ou(i,a,Le,u),Ve=i.memoizedState),(ee=ar||Bh(i,a,ee,u,ge,Ve,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(u,Ve,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(u,Ve,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),M.props=u,M.state=Ve,M.context=O,u=ee):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return Wu(n,i,a,u,p,f)}function Wu(n,i,a,u,f,p){Jh(n,i);var M=(i.flags&128)!==0;if(!u&&!M)return f&&rh(i,a,!1),Ii(n,i,p);u=i.stateNode,zv.current=i;var L=M&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&M?(i.child=vs(i,n.child,null,p),i.child=vs(i,null,L,p)):Tn(n,i,L,p),i.memoizedState=u.state,f&&rh(i,a,!0),i.child}function ep(n){var i=n.stateNode;i.pendingContext?nh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&nh(n,i.context,!1),Cu(n,i.containerInfo)}function tp(n,i,a,u,f){return gs(),xu(f),i.flags|=256,Tn(n,i,a,u),i.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function np(n,i,a){var u=i.pendingProps,f=Gt.current,p=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=n!==null&&n.memoizedState===null?!1:(f&2)!==0),L?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Nt(Gt,f&1),n===null)return yu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=u.children,n=u.fallback,p?(u=i.mode,p=i.child,M={mode:"hidden",children:M},(u&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=M):p=$o(M,u,0,null),n=Hr(n,u,a,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=ju(a),i.memoizedState=Xu,n):qu(i,M));if(f=n.memoizedState,f!==null&&(L=f.dehydrated,L!==null))return Ov(n,i,M,u,L,f,a);if(p){p=u.fallback,M=i.mode,f=n.child,L=f.sibling;var O={mode:"hidden",children:u.children};return(M&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=O,i.deletions=null):(u=hr(f,O),u.subtreeFlags=f.subtreeFlags&14680064),L!==null?p=hr(L,p):(p=Hr(p,M,a,null),p.flags|=2),p.return=i,u.return=i,u.sibling=p,i.child=u,u=p,p=i.child,M=n.child.memoizedState,M=M===null?ju(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},p.memoizedState=M,p.childLanes=n.childLanes&~a,i.memoizedState=Xu,u}return p=n.child,n=p.sibling,u=hr(p,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function qu(n,i){return i=$o({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Fo(n,i,a,u){return u!==null&&xu(u),vs(i,n.child,null,a),n=qu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ov(n,i,a,u,f,p,M){if(a)return i.flags&256?(i.flags&=-257,u=Hu(Error(t(422))),Fo(n,i,M,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=u.fallback,f=i.mode,u=$o({mode:"visible",children:u.children},f,0,null),p=Hr(p,f,M,null),p.flags|=2,u.return=i,p.return=i,u.sibling=p,i.child=u,(i.mode&1)!==0&&vs(i,n.child,null,M),i.child.memoizedState=ju(M),i.memoizedState=Xu,p);if((i.mode&1)===0)return Fo(n,i,M,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var L=u.dgst;return u=L,p=Error(t(419)),u=Hu(p,u,void 0),Fo(n,i,M,u)}if(L=(M&n.childLanes)!==0,In||L){if(u=an,u!==null){switch(M&-M){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|M))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Li(n,f),li(u,n,f,-1))}return uc(),u=Hu(Error(t(421))),Fo(n,i,M,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Jv.bind(null,n),f._reactRetry=i,null):(n=p.treeContext,Gn=nr(f.nextSibling),Vn=i,Ht=!0,ri=null,n!==null&&(qn[Kn++]=Pi,qn[Kn++]=Di,qn[Kn++]=Lr,Pi=n.id,Di=n.overflow,Lr=i),i=qu(i,u.children),i.flags|=4096,i)}function ip(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),wu(n.return,i,a)}function Ku(n,i,a,u,f){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=a,p.tailMode=f)}function rp(n,i,a){var u=i.pendingProps,f=u.revealOrder,p=u.tail;if(Tn(n,i,u.children,a),u=Gt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ip(n,a,i);else if(n.tag===19)ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Nt(Gt,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Po(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Ku(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Po(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Ku(i,!0,a,null,p);break;case"together":Ku(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function zo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=hr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=hr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Bv(n,i,a){switch(i.tag){case 3:ep(i),gs();break;case 5:_h(i);break;case 1:kn(i.type)&&xo(i);break;case 4:Cu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;Nt(Ao,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Nt(Gt,Gt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?np(n,i,a):(Nt(Gt,Gt.current&1),n=Ii(n,i,a),n!==null?n.sibling:null);Nt(Gt,Gt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return rp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Nt(Gt,Gt.current),u)break;return null;case 22:case 23:return i.lanes=0,Zh(n,i,a)}return Ii(n,i,a)}var sp,Yu,ap,op;sp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Yu=function(){},ap=function(n,i,a,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,Nr(_i.current);var p=null;switch(a){case"input":f=H(n,f),u=H(n,u),p=[];break;case"select":f=le({},f,{value:void 0}),u=le({},u,{value:void 0}),p=[];break;case"textarea":f=w(n,f),u=w(n,u),p=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=vo)}ft(a,u);var M;a=null;for(ee in f)if(!u.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var L=f[ee];for(M in L)L.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?p||(p=[]):(p=p||[]).push(ee,null));for(ee in u){var O=u[ee];if(L=f!=null?f[ee]:void 0,u.hasOwnProperty(ee)&&O!==L&&(O!=null||L!=null))if(ee==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(a||(a={}),a[M]=O[M])}else a||(p||(p=[]),p.push(ee,a)),a=O;else ee==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(p=p||[]).push(ee,O)):ee==="children"?typeof O!="string"&&typeof O!="number"||(p=p||[]).push(ee,""+O):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(O!=null&&ee==="onScroll"&&zt("scroll",n),p||L===O||(p=[])):(p=p||[]).push(ee,O))}a&&(p=p||[]).push("style",a);var ee=p;(i.updateQueue=ee)&&(i.flags|=4)}},op=function(n,i,a,u){a!==u&&(i.flags|=4)};function Ca(n,i){if(!Ht)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Hv(n,i,a){var u=i.pendingProps;switch(vu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return kn(i.type)&&yo(),vn(i),null;case 3:return u=i.stateNode,xs(),Ot(Ln),Ot(mn),Pu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(wo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ri!==null&&(ac(ri),ri=null))),Yu(n,i),vn(i),null;case 5:bu(i);var f=Nr(Ma.current);if(a=i.type,n!==null&&i.stateNode!=null)ap(n,i,a,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=Nr(_i.current),wo(i)){u=i.stateNode,a=i.type;var p=i.memoizedProps;switch(u[vi]=i,u[va]=p,n=(i.mode&1)!==0,a){case"dialog":zt("cancel",u),zt("close",u);break;case"iframe":case"object":case"embed":zt("load",u);break;case"video":case"audio":for(f=0;f<pa.length;f++)zt(pa[f],u);break;case"source":zt("error",u);break;case"img":case"image":case"link":zt("error",u),zt("load",u);break;case"details":zt("toggle",u);break;case"input":Sn(u,p),zt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!p.multiple},zt("invalid",u);break;case"textarea":J(u,p),zt("invalid",u)}ft(a,p),f=null;for(var M in p)if(p.hasOwnProperty(M)){var L=p[M];M==="children"?typeof L=="string"?u.textContent!==L&&(p.suppressHydrationWarning!==!0&&go(u.textContent,L,n),f=["children",L]):typeof L=="number"&&u.textContent!==""+L&&(p.suppressHydrationWarning!==!0&&go(u.textContent,L,n),f=["children",""+L]):o.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&zt("scroll",u)}switch(a){case"input":Pt(u),Ke(u,p,!0);break;case"textarea":Pt(u),ve(u);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(u.onclick=vo)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{M=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=M.createElement(a,{is:u.is}):(n=M.createElement(a),a==="select"&&(M=n,u.multiple?M.multiple=!0:u.size&&(M.size=u.size))):n=M.createElementNS(n,a),n[vi]=i,n[va]=u,sp(n,i,!1,!1),i.stateNode=n;e:{switch(M=st(a,u),a){case"dialog":zt("cancel",n),zt("close",n),f=u;break;case"iframe":case"object":case"embed":zt("load",n),f=u;break;case"video":case"audio":for(f=0;f<pa.length;f++)zt(pa[f],n);f=u;break;case"source":zt("error",n),f=u;break;case"img":case"image":case"link":zt("error",n),zt("load",n),f=u;break;case"details":zt("toggle",n),f=u;break;case"input":Sn(n,u),f=H(n,u),zt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=le({},u,{value:void 0}),zt("invalid",n);break;case"textarea":J(n,u),f=w(n,u),zt("invalid",n);break;default:f=u}ft(a,f),L=f;for(p in L)if(L.hasOwnProperty(p)){var O=L[p];p==="style"?tt(n,O):p==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):p==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&ct(n,O):typeof O=="number"&&ct(n,""+O):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?O!=null&&p==="onScroll"&&zt("scroll",n):O!=null&&D(n,p,O,M))}switch(a){case"input":Pt(n),Ke(n,u,!1);break;case"textarea":Pt(n),ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Te(u.value));break;case"select":n.multiple=!!u.multiple,p=u.value,p!=null?P(n,!!u.multiple,p,!1):u.defaultValue!=null&&P(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=vo)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)op(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(Ma.current),Nr(_i.current),wo(i)){if(u=i.stateNode,a=i.memoizedProps,u[vi]=i,(p=u.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:go(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&go(u.nodeValue,a,(n.mode&1)!==0)}p&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[vi]=i,i.stateNode=u}return vn(i),null;case 13:if(Ot(Gt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Ht&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ch(),gs(),i.flags|=98560,p=!1;else if(p=wo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[vi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;vn(i),p=!1}else ri!==null&&(ac(ri),ri=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Gt.current&1)!==0?en===0&&(en=3):uc())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return xs(),Yu(n,i),n===null&&ma(i.stateNode.containerInfo),vn(i),null;case 10:return Eu(i.type._context),vn(i),null;case 17:return kn(i.type)&&yo(),vn(i),null;case 19:if(Ot(Gt),p=i.memoizedState,p===null)return vn(i),null;if(u=(i.flags&128)!==0,M=p.rendering,M===null)if(u)Ca(p,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Po(n),M!==null){for(i.flags|=128,Ca(p,!1),u=M.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)p=a,n=u,p.flags&=14680066,M=p.alternate,M===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=M.childLanes,p.lanes=M.lanes,p.child=M.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=M.memoizedProps,p.memoizedState=M.memoizedState,p.updateQueue=M.updateQueue,p.type=M.type,n=M.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Nt(Gt,Gt.current&1|2),i.child}n=n.sibling}p.tail!==null&&G()>ws&&(i.flags|=128,u=!0,Ca(p,!1),i.lanes=4194304)}else{if(!u)if(n=Po(M),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(p,!0),p.tail===null&&p.tailMode==="hidden"&&!M.alternate&&!Ht)return vn(i),null}else 2*G()-p.renderingStartTime>ws&&a!==1073741824&&(i.flags|=128,u=!0,Ca(p,!1),i.lanes=4194304);p.isBackwards?(M.sibling=i.child,i.child=M):(a=p.last,a!==null?a.sibling=M:i.child=M,p.last=M)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=G(),i.sibling=null,a=Gt.current,Nt(Gt,u?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return lc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Vv(n,i){switch(vu(i),i.tag){case 1:return kn(i.type)&&yo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return xs(),Ot(Ln),Ot(mn),Pu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return bu(i),null;case 13:if(Ot(Gt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Gt),null;case 4:return xs(),null;case 10:return Eu(i.type._context),null;case 22:case 23:return lc(),null;case 24:return null;default:return null}}var Oo=!1,_n=!1,Gv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ms(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){jt(n,i,u)}else a.current=null}function $u(n,i,a){try{a()}catch(u){jt(n,i,u)}}var lp=!1;function Wv(n,i){if(lu=ro,n=Bf(),eu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var f=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var M=0,L=-1,O=-1,ee=0,_e=0,xe=n,ge=null;t:for(;;){for(var Le;xe!==a||f!==0&&xe.nodeType!==3||(L=M+f),xe!==p||u!==0&&xe.nodeType!==3||(O=M+u),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)ge=xe,xe=Le;for(;;){if(xe===n)break t;if(ge===a&&++ee===f&&(L=M),ge===p&&++_e===u&&(O=M),(Le=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Le}a=L===-1||O===-1?null:{start:L,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(uu={focusedElem:n,selectionRange:a},ro=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ge=Ve.memoizedProps,Yt=Ve.memoizedState,Y=i.stateNode,W=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ge:si(i.type,Ge),Yt);Y.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){jt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ve=lp,lp=!1,Ve}function ba(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var p=f.destroy;f.destroy=void 0,p!==void 0&&$u(i,a,p)}f=f.next}while(f!==u)}}function Bo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Zu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function up(n){var i=n.alternate;i!==null&&(n.alternate=null,up(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[vi],delete i[va],delete i[hu],delete i[Av],delete i[Cv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function cp(n){return n.tag===5||n.tag===3||n.tag===4}function dp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||cp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Ju(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vo));else if(u!==4&&(n=n.child,n!==null))for(Ju(n,i,a),n=n.sibling;n!==null;)Ju(n,i,a),n=n.sibling}function Qu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Qu(n,i,a),n=n.sibling;n!==null;)Qu(n,i,a),n=n.sibling}var cn=null,ai=!1;function lr(n,i,a){for(a=a.child;a!==null;)fp(n,i,a),a=a.sibling}function fp(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:_n||Ms(a,i);case 6:var u=cn,f=ai;cn=null,lr(n,i,a),cn=u,ai=f,cn!==null&&(ai?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ai?(n=cn,a=a.stateNode,n.nodeType===8?fu(n.parentNode,a):n.nodeType===1&&fu(n,a),aa(n)):fu(cn,a.stateNode));break;case 4:u=cn,f=ai,cn=a.stateNode.containerInfo,ai=!0,lr(n,i,a),cn=u,ai=f;break;case 0:case 11:case 14:case 15:if(!_n&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var p=f,M=p.destroy;p=p.tag,M!==void 0&&((p&2)!==0||(p&4)!==0)&&$u(a,i,M),f=f.next}while(f!==u)}lr(n,i,a);break;case 1:if(!_n&&(Ms(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(L){jt(a,i,L)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(_n=(u=_n)||a.memoizedState!==null,lr(n,i,a),_n=u):lr(n,i,a);break;default:lr(n,i,a)}}function hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Gv),i.forEach(function(u){var f=Qv.bind(null,n,u);a.has(u)||(a.add(u),u.then(f,f))})}}function oi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var f=a[u];try{var p=n,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:cn=L.stateNode,ai=!1;break e;case 3:cn=L.stateNode.containerInfo,ai=!0;break e;case 4:cn=L.stateNode.containerInfo,ai=!0;break e}L=L.return}if(cn===null)throw Error(t(160));fp(p,M,f),cn=null,ai=!1;var O=f.alternate;O!==null&&(O.return=null),f.return=null}catch(ee){jt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)pp(i,n),i=i.sibling}function pp(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),xi(n),u&4){try{ba(3,n,n.return),Bo(3,n)}catch(Ge){jt(n,n.return,Ge)}try{ba(5,n,n.return)}catch(Ge){jt(n,n.return,Ge)}}break;case 1:oi(i,n),xi(n),u&512&&a!==null&&Ms(a,a.return);break;case 5:if(oi(i,n),xi(n),u&512&&a!==null&&Ms(a,a.return),n.flags&32){var f=n.stateNode;try{ct(f,"")}catch(Ge){jt(n,n.return,Ge)}}if(u&4&&(f=n.stateNode,f!=null)){var p=n.memoizedProps,M=a!==null?a.memoizedProps:p,L=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{L==="input"&&p.type==="radio"&&p.name!=null&&pt(f,p),st(L,M);var ee=st(L,p);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?tt(f,xe):_e==="dangerouslySetInnerHTML"?Fe(f,xe):_e==="children"?ct(f,xe):D(f,_e,xe,ee)}switch(L){case"input":dt(f,p);break;case"textarea":pe(f,p);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var Le=p.value;Le!=null?P(f,!!p.multiple,Le,!1):ge!==!!p.multiple&&(p.defaultValue!=null?P(f,!!p.multiple,p.defaultValue,!0):P(f,!!p.multiple,p.multiple?[]:"",!1))}f[va]=p}catch(Ge){jt(n,n.return,Ge)}}break;case 6:if(oi(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,p=n.memoizedProps;try{f.nodeValue=p}catch(Ge){jt(n,n.return,Ge)}}break;case 3:if(oi(i,n),xi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{aa(i.containerInfo)}catch(Ge){jt(n,n.return,Ge)}break;case 4:oi(i,n),xi(n);break;case 13:oi(i,n),xi(n),f=n.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(nc=G())),u&4&&hp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(_n=(ee=_n)||_e,oi(i,n),_n=ee):oi(i,n),xi(n),u&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(Oe=n,_e=n.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(ge=Oe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:ba(4,ge,ge.return);break;case 1:Ms(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ge){jt(u,a,Ge)}}break;case 5:Ms(ge,ge.return);break;case 22:if(ge.memoizedState!==null){vp(xe);continue}}Le!==null?(Le.return=ge,Oe=Le):vp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{f=xe.stateNode,ee?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=$e("display",M))}catch(Ge){jt(n,n.return,Ge)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ge){jt(n,n.return,Ge)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:oi(i,n),xi(n),u&4&&hp(n);break;case 21:break;default:oi(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(cp(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(ct(f,""),u.flags&=-33);var p=dp(n);Qu(n,p,f);break;case 3:case 4:var M=u.stateNode.containerInfo,L=dp(n);Ju(n,L,M);break;default:throw Error(t(161))}}catch(O){jt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Xv(n,i,a){Oe=n,mp(n)}function mp(n,i,a){for(var u=(n.mode&1)!==0;Oe!==null;){var f=Oe,p=f.child;if(f.tag===22&&u){var M=f.memoizedState!==null||Oo;if(!M){var L=f.alternate,O=L!==null&&L.memoizedState!==null||_n;L=Oo;var ee=_n;if(Oo=M,(_n=O)&&!ee)for(Oe=f;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?_p(f):O!==null?(O.return=M,Oe=O):_p(f);for(;p!==null;)Oe=p,mp(p),p=p.sibling;Oe=f,Oo=L,_n=ee}gp(n)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Oe=p):gp(n)}}function gp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:_n||Bo(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!_n)if(a===null)u.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:si(i.type,a.memoizedProps);u.componentDidUpdate(f,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&vh(i,p,u);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}vh(i,M,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&aa(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}_n||i.flags&512&&Zu(i)}catch(ge){jt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function vp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function _p(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Bo(4,i)}catch(O){jt(i,a,O)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(O){jt(i,f,O)}}var p=i.return;try{Zu(i)}catch(O){jt(i,p,O)}break;case 5:var M=i.return;try{Zu(i)}catch(O){jt(i,M,O)}}}catch(O){jt(i,i.return,O)}if(i===n){Oe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Oe=L;break}Oe=i.return}}var jv=Math.ceil,Ho=R.ReactCurrentDispatcher,ec=R.ReactCurrentOwner,Zn=R.ReactCurrentBatchConfig,St=0,an=null,$t=null,dn=0,Wn=0,Es=ir(0),en=0,Ra=null,Fr=0,Vo=0,tc=0,Pa=null,Nn=null,nc=0,ws=1/0,Ni=null,Go=!1,ic=null,ur=null,Wo=!1,cr=null,Xo=0,Da=0,rc=null,jo=-1,qo=0;function An(){return(St&6)!==0?G():jo!==-1?jo:jo=G()}function dr(n){return(n.mode&1)===0?1:(St&2)!==0&&dn!==0?dn&-dn:Rv.transition!==null?(qo===0&&(qo=wn()),qo):(n=mt,n!==0||(n=window.event,n=n===void 0?16:xf(n.type)),n)}function li(n,i,a,u){if(50<Da)throw Da=0,rc=null,Error(t(185));Kt(n,a,u),((St&2)===0||n!==an)&&(n===an&&((St&2)===0&&(Vo|=a),en===4&&fr(n,dn)),Un(n,u),a===1&&St===0&&(i.mode&1)===0&&(ws=G()+500,So&&sr()))}function Un(n,i){var a=n.callbackNode;br(n,i);var u=ni(n,n===an?dn:0);if(u===0)a!==null&&j(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&j(a),i===1)n.tag===0?bv(xp.bind(null,n)):sh(xp.bind(null,n)),wv(function(){(St&6)===0&&sr()}),a=null;else{switch(ff(u)){case 1:a=be;break;case 4:a=Ie;break;case 16:a=ze;break;case 536870912:a=it;break;default:a=ze}a=bp(a,yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function yp(n,i){if(jo=-1,qo=0,(St&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ts()&&n.callbackNode!==a)return null;var u=ni(n,n===an?dn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Ko(n,u);else{i=u;var f=St;St|=2;var p=Mp();(an!==n||dn!==i)&&(Ni=null,ws=G()+500,Or(n,i));do try{Yv();break}catch(L){Sp(n,L)}while(!0);Mu(),Ho.current=p,St=f,$t!==null?i=0:(an=null,dn=0,i=en)}if(i!==0){if(i===2&&(f=Dt(n),f!==0&&(u=f,i=sc(n,f))),i===1)throw a=Ra,Or(n,0),fr(n,u),Un(n,G()),a;if(i===6)fr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!qv(f)&&(i=Ko(n,u),i===2&&(p=Dt(n),p!==0&&(u=p,i=sc(n,p))),i===1))throw a=Ra,Or(n,0),fr(n,u),Un(n,G()),a;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Nn,Ni);break;case 3:if(fr(n,u),(u&130023424)===u&&(i=nc+500-G(),10<i)){if(ni(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){An(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=du(Br.bind(null,n,Nn,Ni),i);break}Br(n,Nn,Ni);break;case 4:if(fr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var M=31-Tt(u);p=1<<M,M=i[M],M>f&&(f=M),u&=~p}if(u=f,u=G()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*jv(u/1960))-u,10<u){n.timeoutHandle=du(Br.bind(null,n,Nn,Ni),u);break}Br(n,Nn,Ni);break;case 5:Br(n,Nn,Ni);break;default:throw Error(t(329))}}}return Un(n,G()),n.callbackNode===a?yp.bind(null,n):null}function sc(n,i){var a=Pa;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=Ko(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&ac(i)),n}function ac(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function qv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var f=a[u],p=f.getSnapshot;f=f.value;try{if(!ii(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function fr(n,i){for(i&=~tc,i&=~Vo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tt(i),u=1<<a;n[a]=-1,i&=~u}}function xp(n){if((St&6)!==0)throw Error(t(327));Ts();var i=ni(n,0);if((i&1)===0)return Un(n,G()),null;var a=Ko(n,i);if(n.tag!==0&&a===2){var u=Dt(n);u!==0&&(i=u,a=sc(n,u))}if(a===1)throw a=Ra,Or(n,0),fr(n,i),Un(n,G()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Nn,Ni),Un(n,G()),null}function oc(n,i){var a=St;St|=1;try{return n(i)}finally{St=a,St===0&&(ws=G()+500,So&&sr())}}function zr(n){cr!==null&&cr.tag===0&&(St&6)===0&&Ts();var i=St;St|=1;var a=Zn.transition,u=mt;try{if(Zn.transition=null,mt=1,n)return n()}finally{mt=u,Zn.transition=a,St=i,(St&6)===0&&sr()}}function lc(){Wn=Es.current,Ot(Es)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Ev(a)),$t!==null)for(a=$t.return;a!==null;){var u=a;switch(vu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&yo();break;case 3:xs(),Ot(Ln),Ot(mn),Pu();break;case 5:bu(u);break;case 4:xs();break;case 13:Ot(Gt);break;case 19:Ot(Gt);break;case 10:Eu(u.type._context);break;case 22:case 23:lc()}a=a.return}if(an=n,$t=n=hr(n.current,null),dn=Wn=i,en=0,Ra=null,tc=Vo=Fr=0,Nn=Pa=null,Ir!==null){for(i=0;i<Ir.length;i++)if(a=Ir[i],u=a.interleaved,u!==null){a.interleaved=null;var f=u.next,p=a.pending;if(p!==null){var M=p.next;p.next=f,u.next=M}a.pending=u}Ir=null}return n}function Sp(n,i){do{var a=$t;try{if(Mu(),Do.current=No,Lo){for(var u=Wt.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}Lo=!1}if(Ur=0,sn=Qt=Wt=null,Ea=!1,wa=0,ec.current=null,a===null||a.return===null){en=1,Ra=i,$t=null;break}e:{var p=n,M=a.return,L=a,O=i;if(i=dn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var ee=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=jh(M);if(Le!==null){Le.flags&=-257,qh(Le,M,L,p,i),Le.mode&1&&Xh(p,ee,i),i=Le,O=ee;var Ve=i.updateQueue;if(Ve===null){var Ge=new Set;Ge.add(O),i.updateQueue=Ge}else Ve.add(O);break e}else{if((i&1)===0){Xh(p,ee,i),uc();break e}O=Error(t(426))}}else if(Ht&&L.mode&1){var Yt=jh(M);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),qh(Yt,M,L,p,i),xu(Ss(O,L));break e}}p=O=Ss(O,L),en!==4&&(en=2),Pa===null?Pa=[p]:Pa.push(p),p=M;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Y=Gh(p,O,i);gh(p,Y);break e;case 1:L=O;var W=p.type,$=p.stateNode;if((p.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(ur===null||!ur.has($)))){p.flags|=65536,i&=-i,p.lanes|=i;var we=Wh(p,L,i);gh(p,we);break e}}p=p.return}while(p!==null)}wp(a)}catch(Xe){i=Xe,$t===a&&a!==null&&($t=a=a.return);continue}break}while(!0)}function Mp(){var n=Ho.current;return Ho.current=No,n===null?No:n}function uc(){(en===0||en===3||en===2)&&(en=4),an===null||(Fr&268435455)===0&&(Vo&268435455)===0||fr(an,dn)}function Ko(n,i){var a=St;St|=2;var u=Mp();(an!==n||dn!==i)&&(Ni=null,Or(n,i));do try{Kv();break}catch(f){Sp(n,f)}while(!0);if(Mu(),St=a,Ho.current=u,$t!==null)throw Error(t(261));return an=null,dn=0,en}function Kv(){for(;$t!==null;)Ep($t)}function Yv(){for(;$t!==null&&!te();)Ep($t)}function Ep(n){var i=Cp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?wp(n):$t=i,ec.current=null}function wp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Hv(a,i,Wn),a!==null){$t=a;return}}else{if(a=Vv(a,i),a!==null){a.flags&=32767,$t=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,$t=null;return}}if(i=i.sibling,i!==null){$t=i;return}$t=i=n}while(i!==null);en===0&&(en=5)}function Br(n,i,a){var u=mt,f=Zn.transition;try{Zn.transition=null,mt=1,$v(n,i,a,u)}finally{Zn.transition=f,mt=u}return null}function $v(n,i,a,u){do Ts();while(cr!==null);if((St&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=a.lanes|a.childLanes;if(pn(n,p),n===an&&($t=an=null,dn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Wo||(Wo=!0,bp(ze,function(){return Ts(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=Zn.transition,Zn.transition=null;var M=mt;mt=1;var L=St;St|=4,ec.current=null,Wv(n,a),pp(a,n),gv(uu),ro=!!lu,uu=lu=null,n.current=a,Xv(a),ne(),St=L,mt=M,Zn.transition=p}else n.current=a;if(Wo&&(Wo=!1,cr=n,Xo=f),p=n.pendingLanes,p===0&&(ur=null),wt(a.stateNode),Un(n,G()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],u(f.value,{componentStack:f.stack,digest:f.digest});if(Go)throw Go=!1,n=ic,ic=null,n;return(Xo&1)!==0&&n.tag!==0&&Ts(),p=n.pendingLanes,(p&1)!==0?n===rc?Da++:(Da=0,rc=n):Da=0,sr(),null}function Ts(){if(cr!==null){var n=ff(Xo),i=Zn.transition,a=mt;try{if(Zn.transition=null,mt=16>n?16:n,cr===null)var u=!1;else{if(n=cr,cr=null,Xo=0,(St&6)!==0)throw Error(t(331));var f=St;for(St|=4,Oe=n.current;Oe!==null;){var p=Oe,M=p.child;if((Oe.flags&16)!==0){var L=p.deletions;if(L!==null){for(var O=0;O<L.length;O++){var ee=L[O];for(Oe=ee;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:ba(8,_e,p)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var ge=_e.sibling,Le=_e.return;if(up(_e),_e===ee){Oe=null;break}if(ge!==null){ge.return=Le,Oe=ge;break}Oe=Le}}}var Ve=p.alternate;if(Ve!==null){var Ge=Ve.child;if(Ge!==null){Ve.child=null;do{var Yt=Ge.sibling;Ge.sibling=null,Ge=Yt}while(Ge!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&M!==null)M.return=p,Oe=M;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:ba(9,p,p.return)}var Y=p.sibling;if(Y!==null){Y.return=p.return,Oe=Y;break e}Oe=p.return}}var W=n.current;for(Oe=W;Oe!==null;){M=Oe;var $=M.child;if((M.subtreeFlags&2064)!==0&&$!==null)$.return=M,Oe=$;else e:for(M=W;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Bo(9,L)}}catch(Xe){jt(L,L.return,Xe)}if(L===M){Oe=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,Oe=we;break e}Oe=L.return}}if(St=f,sr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}u=!0}return u}finally{mt=a,Zn.transition=i}}return!1}function Tp(n,i,a){i=Ss(a,i),i=Gh(n,i,1),n=or(n,i,1),i=An(),n!==null&&(Kt(n,1,i),Un(n,i))}function jt(n,i,a){if(n.tag===3)Tp(n,n,a);else for(;i!==null;){if(i.tag===3){Tp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(ur===null||!ur.has(u))){n=Ss(a,n),n=Wh(i,n,1),i=or(i,n,1),n=An(),i!==null&&(Kt(i,1,n),Un(i,n));break}}i=i.return}}function Zv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(dn&a)===a&&(en===4||en===3&&(dn&130023424)===dn&&500>G()-nc?Or(n,0):tc|=a),Un(n,i)}function Ap(n,i){i===0&&((n.mode&1)===0?i=1:(i=_t,_t<<=1,(_t&130023424)===0&&(_t=4194304)));var a=An();n=Li(n,i),n!==null&&(Kt(n,i,a),Un(n,a))}function Jv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Ap(n,a)}function Qv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Ap(n,a)}var Cp;Cp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,Bv(n,i,a);In=(n.flags&131072)!==0}else In=!1,Ht&&(i.flags&1048576)!==0&&ah(i,Eo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;zo(n,i),n=i.pendingProps;var f=hs(i,mn.current);ys(i,a),f=ku(null,i,u,n,f,a);var p=Iu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(u)?(p=!0,xo(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Au(i),f.updater=Uo,i.stateNode=f,f._reactInternals=i,Bu(i,u,n,a),i=Wu(null,i,u,!0,p,a)):(i.tag=0,Ht&&p&&gu(i),Tn(null,i,f,a),i=i.child),i;case 16:u=i.elementType;e:{switch(zo(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=t0(u),n=si(u,n),f){case 0:i=Gu(null,i,u,n,a);break e;case 1:i=Qh(null,i,u,n,a);break e;case 11:i=Kh(null,i,u,n,a);break e;case 14:i=Yh(null,i,u,si(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:si(u,f),Gu(n,i,u,f,a);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:si(u,f),Qh(n,i,u,f,a);case 3:e:{if(ep(i),n===null)throw Error(t(387));u=i.pendingProps,p=i.memoizedState,f=p.element,mh(n,i),Ro(i,u,null,a);var M=i.memoizedState;if(u=M.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Ss(Error(t(423)),i),i=tp(n,i,u,a,f);break e}else if(u!==f){f=Ss(Error(t(424)),i),i=tp(n,i,u,a,f);break e}else for(Gn=nr(i.stateNode.containerInfo.firstChild),Vn=i,Ht=!0,ri=null,a=hh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),u===f){i=Ii(n,i,a);break e}Tn(n,i,u,a)}i=i.child}return i;case 5:return _h(i),n===null&&yu(i),u=i.type,f=i.pendingProps,p=n!==null?n.memoizedProps:null,M=f.children,cu(u,f)?M=null:p!==null&&cu(u,p)&&(i.flags|=32),Jh(n,i),Tn(n,i,M,a),i.child;case 6:return n===null&&yu(i),null;case 13:return np(n,i,a);case 4:return Cu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=vs(i,null,u,a):Tn(n,i,u,a),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:si(u,f),Kh(n,i,u,f,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,p=i.memoizedProps,M=f.value,Nt(Ao,u._currentValue),u._currentValue=M,p!==null)if(ii(p.value,M)){if(p.children===f.children&&!Ln.current){i=Ii(n,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var L=p.dependencies;if(L!==null){M=p.child;for(var O=L.firstContext;O!==null;){if(O.context===u){if(p.tag===1){O=ki(-1,a&-a),O.tag=2;var ee=p.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),ee.pending=O}}p.lanes|=a,O=p.alternate,O!==null&&(O.lanes|=a),wu(p.return,a,i),L.lanes|=a;break}O=O.next}}else if(p.tag===10)M=p.type===i.type?null:p.child;else if(p.tag===18){if(M=p.return,M===null)throw Error(t(341));M.lanes|=a,L=M.alternate,L!==null&&(L.lanes|=a),wu(M,a,i),M=p.sibling}else M=p.child;if(M!==null)M.return=p;else for(M=p;M!==null;){if(M===i){M=null;break}if(p=M.sibling,p!==null){p.return=M.return,M=p;break}M=M.return}p=M}Tn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,ys(i,a),f=Yn(f),u=u(f),i.flags|=1,Tn(n,i,u,a),i.child;case 14:return u=i.type,f=si(u,i.pendingProps),f=si(u.type,f),Yh(n,i,u,f,a);case 15:return $h(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:si(u,f),zo(n,i),i.tag=1,kn(u)?(n=!0,xo(i)):n=!1,ys(i,a),Hh(i,u,f),Bu(i,u,f,a),Wu(null,i,u,!0,n,a);case 19:return rp(n,i,a);case 22:return Zh(n,i,a)}throw Error(t(156,i.tag))};function bp(n,i){return C(n,i)}function e0(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,a,u){return new e0(n,i,a,u)}function cc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function t0(n){if(typeof n=="function")return cc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===he)return 14}return 2}function hr(n,i){var a=n.alternate;return a===null?(a=Jn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Yo(n,i,a,u,f,p){var M=2;if(u=n,typeof n=="function")cc(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case U:return Hr(a.children,f,p,i);case z:M=8,f|=8;break;case b:return n=Jn(12,a,i,f|2),n.elementType=b,n.lanes=p,n;case Z:return n=Jn(13,a,i,f),n.elementType=Z,n.lanes=p,n;case ae:return n=Jn(19,a,i,f),n.elementType=ae,n.lanes=p,n;case me:return $o(a,f,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case T:M=10;break e;case B:M=9;break e;case ie:M=11;break e;case he:M=14;break e;case se:M=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(M,a,i,f),i.elementType=n,i.type=u,i.lanes=p,i}function Hr(n,i,a,u){return n=Jn(7,n,u,i),n.lanes=a,n}function $o(n,i,a,u){return n=Jn(22,n,u,i),n.elementType=me,n.lanes=a,n.stateNode={isHidden:!1},n}function dc(n,i,a){return n=Jn(6,n,null,i),n.lanes=a,n}function fc(n,i,a){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function n0(n,i,a,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function hc(n,i,a,u,f,p,M,L,O){return n=new n0(n,i,a,L,O),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Jn(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Au(p),n}function i0(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Rp(n){if(!n)return rr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return ih(n,a,i)}return i}function Pp(n,i,a,u,f,p,M,L,O){return n=hc(a,u,!0,n,f,p,M,L,O),n.context=Rp(null),a=n.current,u=An(),f=dr(a),p=ki(u,f),p.callback=i??null,or(a,p,f),n.current.lanes=f,Kt(n,f,u),Un(n,u),n}function Zo(n,i,a,u){var f=i.current,p=An(),M=dr(f);return a=Rp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(p,M),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=or(f,i,M),n!==null&&(li(n,f,M,p),bo(n,f,M)),M}function Jo(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function pc(n,i){Dp(n,i),(n=n.alternate)&&Dp(n,i)}function r0(){return null}var Lp=typeof reportError=="function"?reportError:function(n){console.error(n)};function mc(n){this._internalRoot=n}Qo.prototype.render=mc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Zo(n,i,null,null)},Qo.prototype.unmount=mc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){Zo(null,n,null,null)}),i[bi]=null}};function Qo(n){this._internalRoot=n}Qo.prototype.unstable_scheduleHydration=function(n){if(n){var i=mf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&_f(n)}};function gc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function el(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function kp(){}function s0(n,i,a,u,f){if(f){if(typeof u=="function"){var p=u;u=function(){var ee=Jo(M);p.call(ee)}}var M=Pp(i,u,n,0,null,!1,!1,"",kp);return n._reactRootContainer=M,n[bi]=M.current,ma(n.nodeType===8?n.parentNode:n),zr(),M}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var L=u;u=function(){var ee=Jo(O);L.call(ee)}}var O=hc(n,0,!1,null,null,!1,!1,"",kp);return n._reactRootContainer=O,n[bi]=O.current,ma(n.nodeType===8?n.parentNode:n),zr(function(){Zo(i,O,a,u)}),O}function tl(n,i,a,u,f){var p=a._reactRootContainer;if(p){var M=p;if(typeof f=="function"){var L=f;f=function(){var O=Jo(M);L.call(O)}}Zo(i,M,n,f)}else M=s0(a,i,n,f,u);return Jo(M)}hf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=un(i.pendingLanes);a!==0&&(Rr(i,a|1),Un(i,G()),(St&6)===0&&(ws=G()+500,sr()))}break;case 13:zr(function(){var u=Li(n,1);if(u!==null){var f=An();li(u,n,1,f)}}),pc(n,1)}},Hl=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var a=An();li(i,n,134217728,a)}pc(n,134217728)}},pf=function(n){if(n.tag===13){var i=dr(n),a=Li(n,i);if(a!==null){var u=An();li(a,n,i,u)}pc(n,i)}},mf=function(){return mt},gf=function(n,i){var a=mt;try{return mt=n,i()}finally{mt=a}},Ce=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var f=_o(u);if(!f)throw Error(t(90));vt(u),dt(u,f)}}}break;case"textarea":pe(n,a);break;case"select":i=a.value,i!=null&&P(n,!!a.multiple,i,!1)}},Ft=oc,Jt=zr;var a0={usingClientEntryPoint:!1,Events:[_a,ds,_o,Pe,at,oc]},La={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},o0={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=eo(n),n===null?null:n.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||r0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{qe=nl.inject(o0),ot=nl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a0,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gc(i))throw Error(t(200));return i0(n,i,null,a)},Fn.createRoot=function(n,i){if(!gc(n))throw Error(t(299));var a=!1,u="",f=Lp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=hc(n,1,!1,null,null,a,!1,u,f),n[bi]=i.current,ma(n.nodeType===8?n.parentNode:n),new mc(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=eo(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return zr(n)},Fn.hydrate=function(n,i,a){if(!el(i))throw Error(t(200));return tl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!gc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,f=!1,p="",M=Lp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=Pp(i,null,n,1,a??null,f,!1,p,M),n[bi]=i.current,ma(n),u)for(n=0;n<u.length;n++)a=u[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new Qo(i)},Fn.render=function(n,i,a){if(!el(i))throw Error(t(200));return tl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!el(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){tl(null,null,n,!1,function(){n._reactRootContainer=null,n[bi]=null})}),!0):!1},Fn.unstable_batchedUpdates=oc,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!el(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return tl(n,i,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var Hp;function v0(){if(Hp)return yc.exports;Hp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),yc.exports=g0(),yc.exports}var Vp;function _0(){if(Vp)return il;Vp=1;var s=v0();return il.createRoot=s.createRoot,il.hydrateRoot=s.hydrateRoot,il}var y0=_0();const x0=jd(y0);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xm=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var M0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=kt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:c,...d},h)=>kt.createElement("svg",{ref:h,...M0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Xm("lucide",o),...d},[...c.map(([m,g])=>kt.createElement(m,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=(s,e)=>{const t=kt.forwardRef(({className:r,...o},l)=>kt.createElement(E0,{ref:l,iconNode:e,className:Xm(`lucide-${S0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=Pn("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Pn("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Pn("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=Pn("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=Pn("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=Pn("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=Pn("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=Pn("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=Pn("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=Pn("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=Pn("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=Pn("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=Pn("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=Pn("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=Pn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="171",F0=0,Xp=1,z0=2,jm=1,O0=2,Hi=3,wr=0,On=1,Vi=2,Mr=0,Vs=1,jp=2,qp=3,Kp=4,B0=5,$r=100,H0=101,V0=102,G0=103,W0=104,X0=200,j0=201,q0=202,K0=203,rd=204,sd=205,Y0=206,$0=207,Z0=208,J0=209,Q0=210,e_=211,t_=212,n_=213,i_=214,ad=0,od=1,ld=2,Xs=3,ud=4,cd=5,dd=6,fd=7,qm=0,r_=1,s_=2,Er=0,a_=1,o_=2,l_=3,u_=4,c_=5,d_=6,f_=7,Km=300,js=301,qs=302,hd=303,pd=304,Ul=306,md=1e3,Jr=1001,gd=1002,pi=1003,h_=1004,rl=1005,Ei=1006,Mc=1007,Qr=1008,ji=1009,Ym=1010,$m=1011,Wa=1012,Yd=1013,es=1014,Gi=1015,Xa=1016,$d=1017,Zd=1018,Ks=1020,Zm=35902,Jm=1021,Qm=1022,hi=1023,eg=1024,tg=1025,Gs=1026,Ys=1027,ng=1028,Jd=1029,ig=1030,Qd=1031,ef=1033,Cl=33776,bl=33777,Rl=33778,Pl=33779,vd=35840,_d=35841,yd=35842,xd=35843,Sd=36196,Md=37492,Ed=37496,wd=37808,Td=37809,Ad=37810,Cd=37811,bd=37812,Rd=37813,Pd=37814,Dd=37815,Ld=37816,kd=37817,Id=37818,Nd=37819,Ud=37820,Fd=37821,Dl=36492,zd=36494,Od=36495,rg=36283,Bd=36284,Hd=36285,Vd=36286,p_=3200,m_=3201,sg=0,g_=1,Sr="",ei="srgb",$s="srgb-linear",kl="linear",Lt="srgb",As=7680,Yp=519,v_=512,__=513,y_=514,ag=515,x_=516,S_=517,M_=518,E_=519,$p=35044,Zp="300 es",Wi=2e3,Il=2001;class Js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,Gd=180/Math.PI;function ja(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function w_(s,e){return(s%e+e)%e}function wc(s,e,t){return(1-t)*s+t*e}function Ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,c,d,h,m){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,h,m)}set(e,t,r,o,l,c,d,h,m){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=r,g[7]=c,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[3],h=r[6],m=r[1],g=r[4],_=r[7],y=r[2],x=r[5],E=r[8],A=o[0],S=o[3],v=o[6],I=o[1],D=o[4],R=o[7],F=o[2],k=o[5],U=o[8];return l[0]=c*A+d*I+h*F,l[3]=c*S+d*D+h*k,l[6]=c*v+d*R+h*U,l[1]=m*A+g*I+_*F,l[4]=m*S+g*D+_*k,l[7]=m*v+g*R+_*U,l[2]=y*A+x*I+E*F,l[5]=y*S+x*D+E*k,l[8]=y*v+x*R+E*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8];return t*c*g-t*d*m-r*l*g+r*d*h+o*l*m-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=g*c-d*m,y=d*h-g*l,x=m*l-c*h,E=t*_+r*y+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(o*m-g*r)*A,e[2]=(d*r-o*c)*A,e[3]=y*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-d*t)*A,e[6]=x*A,e[7]=(r*h-m*t)*A,e[8]=(c*t-r*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,d){const h=Math.cos(l),m=Math.sin(l);return this.set(r*h,r*m,-r*(h*c+m*d)+c+e,-o*m,o*h,-o*(-m*c+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Tc.makeScale(e,t)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new lt;function og(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Nl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function T_(){const s=Nl("canvas");return s.style.display="block",s}const Jp={};function Bs(s){s in Jp||(Jp[s]=!0,console.warn(s))}function A_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function C_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function b_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Qp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),em=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function R_(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=Ws(o.r),o.g=Ws(o.g),o.b=Ws(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?kl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:kl,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Qp,fromXYZ:em,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Ct=R_();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ws(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class P_{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Nl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Xi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let D_=0;class lg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?l.push(Ac(o[c].image)):l.push(Ac(o[c]))}else l=Ac(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ac(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?P_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let L_=0;class Bn extends Js{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Jr,o=Jr,l=Ei,c=Qr,d=hi,h=ji,m=Bn.DEFAULT_ANISOTROPY,g=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L_++}),this.uuid=ja(),this.name="",this.source=new lg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Km)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case md:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case gd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case md:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case gd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Km;Bn.DEFAULT_ANISOTROPY=1;class qt{constructor(e=0,t=0,r=0,o=1){qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,m=h[0],g=h[4],_=h[8],y=h[1],x=h[5],E=h[9],A=h[2],S=h[6],v=h[10];if(Math.abs(g-y)<.01&&Math.abs(_-A)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+A)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,R=(x+1)/2,F=(v+1)/2,k=(g+y)/4,U=(_+A)/4,z=(E+S)/4;return D>R&&D>F?D<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(D),o=k/r,l=U/r):R>F?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=k/o,l=z/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=U/l,o=z/l),this.set(r,o,l,t),this}let I=Math.sqrt((S-E)*(S-E)+(_-A)*(_-A)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(_-A)/I,this.z=(y-g)/I,this.w=Math.acos((m+x+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class k_ extends Js{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new qt(0,0,e,t),this.scissorTest=!1,this.viewport=new qt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const c=r.count;for(let d=0;d<c;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new lg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends k_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class ug extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I_ extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pi,this.minFilter=pi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,d){let h=r[o+0],m=r[o+1],g=r[o+2],_=r[o+3];const y=l[c+0],x=l[c+1],E=l[c+2],A=l[c+3];if(d===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=x,e[t+2]=E,e[t+3]=A;return}if(_!==A||h!==y||m!==x||g!==E){let S=1-d;const v=h*y+m*x+g*E+_*A,I=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const F=Math.sqrt(D),k=Math.atan2(F,v*I);S=Math.sin(S*k)/F,d=Math.sin(d*k)/F}const R=d*I;if(h=h*S+y*R,m=m*S+x*R,g=g*S+E*R,_=_*S+A*R,S===1-d){const F=1/Math.sqrt(h*h+m*m+g*g+_*_);h*=F,m*=F,g*=F,_*=F}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,c){const d=r[o],h=r[o+1],m=r[o+2],g=r[o+3],_=l[c],y=l[c+1],x=l[c+2],E=l[c+3];return e[t]=d*E+g*_+h*x-m*y,e[t+1]=h*E+g*y+m*_-d*x,e[t+2]=m*E+g*x+d*y-h*_,e[t+3]=g*E-d*_-h*y-m*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,d=Math.cos,h=Math.sin,m=d(r/2),g=d(o/2),_=d(l/2),y=h(r/2),x=h(o/2),E=h(l/2);switch(c){case"XYZ":this._x=y*g*_+m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_-y*x*E;break;case"YXZ":this._x=y*g*_+m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_+y*x*E;break;case"ZXY":this._x=y*g*_-m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_-y*x*E;break;case"ZYX":this._x=y*g*_-m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_+y*x*E;break;case"YZX":this._x=y*g*_+m*x*E,this._y=m*x*_+y*g*E,this._z=m*g*E-y*x*_,this._w=m*g*_-y*x*E;break;case"XZY":this._x=y*g*_-m*x*E,this._y=m*x*_-y*g*E,this._z=m*g*E+y*x*_,this._w=m*g*_+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],d=t[5],h=t[9],m=t[2],g=t[6],_=t[10],y=r+d+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(g-h)*x,this._y=(l-m)*x,this._z=(c-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(g-h)/x,this._x=.25*x,this._y=(o+c)/x,this._z=(l+m)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(l-m)/x,this._x=(o+c)/x,this._y=.25*x,this._z=(h+g)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(c-o)/x,this._x=(l+m)/x,this._y=(h+g)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,d=t._x,h=t._y,m=t._z,g=t._w;return this._x=r*g+c*d+o*m-l*h,this._y=o*g+c*h+l*d-r*m,this._z=l*g+c*m+r*h-o*d,this._w=c*g-r*d-o*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,c=this._w;let d=c*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=c,this._x=r,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const x=1-t;return this._w=x*c+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,d),_=Math.sin((1-t)*g)/m,y=Math.sin(t*g)/m;return this._w=c*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,d=e.z,h=e.w,m=2*(c*o-d*r),g=2*(d*t-l*o),_=2*(l*r-c*t);return this.x=t+h*m+c*_-d*g,this.y=r+h*g+d*m-l*_,this.z=o+h*_+l*g-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*c-r*h,this.z=r*d-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new q,tm=new qa;class Ka{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=l.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,ui):ui.fromBufferAttribute(l,c),ui.applyMatrix4(e.matrixWorld),this.expandByPoint(ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),sl.copy(r.boundingBox)),sl.applyMatrix4(e.matrixWorld),this.union(sl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ui),ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),al.subVectors(this.max,Na),bs.subVectors(e.a,Na),Rs.subVectors(e.b,Na),Ps.subVectors(e.c,Na),mr.subVectors(Rs,bs),gr.subVectors(Ps,Rs),Vr.subVectors(bs,Ps);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Vr.z,Vr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Vr.z,0,-Vr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Vr.y,Vr.x,0];return!bc(t,bs,Rs,Ps,al)||(t=[1,0,0,0,1,0,0,0,1],!bc(t,bs,Rs,Ps,al))?!1:(ol.crossVectors(mr,gr),t=[ol.x,ol.y,ol.z],bc(t,bs,Rs,Ps,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new q,new q,new q,new q,new q,new q,new q,new q],ui=new q,sl=new Ka,bs=new q,Rs=new q,Ps=new q,mr=new q,gr=new q,Vr=new q,Na=new q,al=new q,ol=new q,Gr=new q;function bc(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){Gr.fromArray(s,l);const d=o.x*Math.abs(Gr.x)+o.y*Math.abs(Gr.y)+o.z*Math.abs(Gr.z),h=e.dot(Gr),m=t.dot(Gr),g=r.dot(Gr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>d)return!1}return!0}const N_=new Ka,Ua=new q,Rc=new q;class tf{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):N_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ua,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(Rc)),this.expandByPoint(Ua.copy(e.center).sub(Rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new q,Pc=new q,ll=new q,vr=new q,Dc=new q,ul=new q,Lc=new q;class cg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Pc.copy(e).add(t).multiplyScalar(.5),ll.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Pc);const l=e.distanceTo(t)*.5,c=-this.direction.dot(ll),d=vr.dot(this.direction),h=-vr.dot(ll),m=vr.lengthSq(),g=Math.abs(1-c*c);let _,y,x,E;if(g>0)if(_=c*h-d,y=c*d-h,E=l*g,_>=0)if(y>=-E)if(y<=E){const A=1/g;_*=A,y*=A,x=_*(_+c*y+2*d)+y*(c*_+y+2*h)+m}else y=l,_=Math.max(0,-(c*y+d)),x=-_*_+y*(y+2*h)+m;else y=-l,_=Math.max(0,-(c*y+d)),x=-_*_+y*(y+2*h)+m;else y<=-E?(_=Math.max(0,-(-c*l+d)),y=_>0?-l:Math.min(Math.max(-l,-h),l),x=-_*_+y*(y+2*h)+m):y<=E?(_=0,y=Math.min(Math.max(-l,-h),l),x=y*(y+2*h)+m):(_=Math.max(0,-(c*l+d)),y=_>0?l:Math.min(Math.max(-l,-h),l),x=-_*_+y*(y+2*h)+m);else y=c>0?-l:l,_=Math.max(0,-(c*y+d)),x=-_*_+y*(y+2*h)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Pc).addScaledVector(ll,y),x}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),d=r-c,h=r+c;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,d,h;const m=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return m>=0?(r=(e.min.x-y.x)*m,o=(e.max.x-y.x)*m):(r=(e.max.x-y.x)*m,o=(e.min.x-y.x)*m),g>=0?(l=(e.min.y-y.y)*g,c=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,c=(e.min.y-y.y)*g),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),r>h||d>o)||((d>r||r!==r)&&(r=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,l){Dc.subVectors(t,e),ul.subVectors(r,e),Lc.crossVectors(Dc,ul);let c=this.direction.dot(Lc),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;vr.subVectors(this.origin,e);const h=d*this.direction.dot(ul.crossVectors(vr,ul));if(h<0)return null;const m=d*this.direction.dot(Dc.cross(vr));if(m<0||h+m>c)return null;const g=-d*vr.dot(Lc);return g<0?null:this.at(g/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vt{constructor(e,t,r,o,l,c,d,h,m,g,_,y,x,E,A,S){Vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,d,h,m,g,_,y,x,E,A,S)}set(e,t,r,o,l,c,d,h,m,g,_,y,x,E,A,S){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=c,v[9]=d,v[13]=h,v[2]=m,v[6]=g,v[10]=_,v[14]=y,v[3]=x,v[7]=E,v[11]=A,v[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),d=Math.sin(r),h=Math.cos(o),m=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=c*g,x=c*_,E=d*g,A=d*_;t[0]=h*g,t[4]=-h*_,t[8]=m,t[1]=x+E*m,t[5]=y-A*m,t[9]=-d*h,t[2]=A-y*m,t[6]=E+x*m,t[10]=c*h}else if(e.order==="YXZ"){const y=h*g,x=h*_,E=m*g,A=m*_;t[0]=y+A*d,t[4]=E*d-x,t[8]=c*m,t[1]=c*_,t[5]=c*g,t[9]=-d,t[2]=x*d-E,t[6]=A+y*d,t[10]=c*h}else if(e.order==="ZXY"){const y=h*g,x=h*_,E=m*g,A=m*_;t[0]=y-A*d,t[4]=-c*_,t[8]=E+x*d,t[1]=x+E*d,t[5]=c*g,t[9]=A-y*d,t[2]=-c*m,t[6]=d,t[10]=c*h}else if(e.order==="ZYX"){const y=c*g,x=c*_,E=d*g,A=d*_;t[0]=h*g,t[4]=E*m-x,t[8]=y*m+A,t[1]=h*_,t[5]=A*m+y,t[9]=x*m-E,t[2]=-m,t[6]=d*h,t[10]=c*h}else if(e.order==="YZX"){const y=c*h,x=c*m,E=d*h,A=d*m;t[0]=h*g,t[4]=A-y*_,t[8]=E*_+x,t[1]=_,t[5]=c*g,t[9]=-d*g,t[2]=-m*g,t[6]=x*_+E,t[10]=y-A*_}else if(e.order==="XZY"){const y=c*h,x=c*m,E=d*h,A=d*m;t[0]=h*g,t[4]=-_,t[8]=m*g,t[1]=y*_+A,t[5]=c*g,t[9]=x*_-E,t[2]=E*_-x,t[6]=d*g,t[10]=A*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U_,e,F_)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),_r.crossVectors(r,Xn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),_r.crossVectors(r,Xn)),_r.normalize(),cl.crossVectors(Xn,_r),o[0]=_r.x,o[4]=cl.x,o[8]=Xn.x,o[1]=_r.y,o[5]=cl.y,o[9]=Xn.y,o[2]=_r.z,o[6]=cl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],d=r[4],h=r[8],m=r[12],g=r[1],_=r[5],y=r[9],x=r[13],E=r[2],A=r[6],S=r[10],v=r[14],I=r[3],D=r[7],R=r[11],F=r[15],k=o[0],U=o[4],z=o[8],b=o[12],T=o[1],B=o[5],ie=o[9],Z=o[13],ae=o[2],he=o[6],se=o[10],me=o[14],V=o[3],ue=o[7],le=o[11],N=o[15];return l[0]=c*k+d*T+h*ae+m*V,l[4]=c*U+d*B+h*he+m*ue,l[8]=c*z+d*ie+h*se+m*le,l[12]=c*b+d*Z+h*me+m*N,l[1]=g*k+_*T+y*ae+x*V,l[5]=g*U+_*B+y*he+x*ue,l[9]=g*z+_*ie+y*se+x*le,l[13]=g*b+_*Z+y*me+x*N,l[2]=E*k+A*T+S*ae+v*V,l[6]=E*U+A*B+S*he+v*ue,l[10]=E*z+A*ie+S*se+v*le,l[14]=E*b+A*Z+S*me+v*N,l[3]=I*k+D*T+R*ae+F*V,l[7]=I*U+D*B+R*he+F*ue,l[11]=I*z+D*ie+R*se+F*le,l[15]=I*b+D*Z+R*me+F*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],d=e[5],h=e[9],m=e[13],g=e[2],_=e[6],y=e[10],x=e[14],E=e[3],A=e[7],S=e[11],v=e[15];return E*(+l*h*_-o*m*_-l*d*y+r*m*y+o*d*x-r*h*x)+A*(+t*h*x-t*m*y+l*c*y-o*c*x+o*m*g-l*h*g)+S*(+t*m*_-t*d*x-l*c*_+r*c*x+l*d*g-r*m*g)+v*(-o*d*g-t*h*_+t*d*y+o*c*_-r*c*y+r*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],d=e[5],h=e[6],m=e[7],g=e[8],_=e[9],y=e[10],x=e[11],E=e[12],A=e[13],S=e[14],v=e[15],I=_*S*m-A*y*m+A*h*x-d*S*x-_*h*v+d*y*v,D=E*y*m-g*S*m-E*h*x+c*S*x+g*h*v-c*y*v,R=g*A*m-E*_*m+E*d*x-c*A*x-g*d*v+c*_*v,F=E*_*h-g*A*h-E*d*y+c*A*y+g*d*S-c*_*S,k=t*I+r*D+o*R+l*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/k;return e[0]=I*U,e[1]=(A*y*l-_*S*l-A*o*x+r*S*x+_*o*v-r*y*v)*U,e[2]=(d*S*l-A*h*l+A*o*m-r*S*m-d*o*v+r*h*v)*U,e[3]=(_*h*l-d*y*l-_*o*m+r*y*m+d*o*x-r*h*x)*U,e[4]=D*U,e[5]=(g*S*l-E*y*l+E*o*x-t*S*x-g*o*v+t*y*v)*U,e[6]=(E*h*l-c*S*l-E*o*m+t*S*m+c*o*v-t*h*v)*U,e[7]=(c*y*l-g*h*l+g*o*m-t*y*m-c*o*x+t*h*x)*U,e[8]=R*U,e[9]=(E*_*l-g*A*l-E*r*x+t*A*x+g*r*v-t*_*v)*U,e[10]=(c*A*l-E*d*l+E*r*m-t*A*m-c*r*v+t*d*v)*U,e[11]=(g*d*l-c*_*l-g*r*m+t*_*m+c*r*x-t*d*x)*U,e[12]=F*U,e[13]=(g*A*o-E*_*o+E*r*y-t*A*y-g*r*S+t*_*S)*U,e[14]=(E*d*o-c*A*o-E*r*h+t*A*h+c*r*S-t*d*S)*U,e[15]=(c*_*o-g*d*o+g*r*h-t*_*h-c*r*y+t*d*y)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,d=e.y,h=e.z,m=l*c,g=l*d;return this.set(m*c+r,m*d-o*h,m*h+o*d,0,m*d+o*h,g*d+r,g*h-o*c,0,m*h-o*d,g*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,d=t._z,h=t._w,m=l+l,g=c+c,_=d+d,y=l*m,x=l*g,E=l*_,A=c*g,S=c*_,v=d*_,I=h*m,D=h*g,R=h*_,F=r.x,k=r.y,U=r.z;return o[0]=(1-(A+v))*F,o[1]=(x+R)*F,o[2]=(E-D)*F,o[3]=0,o[4]=(x-R)*k,o[5]=(1-(y+v))*k,o[6]=(S+I)*k,o[7]=0,o[8]=(E+D)*U,o[9]=(S-I)*U,o[10]=(1-(y+A))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ds.set(o[0],o[1],o[2]).length();const c=Ds.set(o[4],o[5],o[6]).length(),d=Ds.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const m=1/l,g=1/c,_=1/d;return ci.elements[0]*=m,ci.elements[1]*=m,ci.elements[2]*=m,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=_,ci.elements[9]*=_,ci.elements[10]*=_,t.setFromRotationMatrix(ci),r.x=l,r.y=c,r.z=d,this}makePerspective(e,t,r,o,l,c,d=Wi){const h=this.elements,m=2*l/(t-e),g=2*l/(r-o),_=(t+e)/(t-e),y=(r+o)/(r-o);let x,E;if(d===Wi)x=-(c+l)/(c-l),E=-2*c*l/(c-l);else if(d===Il)x=-c/(c-l),E=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,d=Wi){const h=this.elements,m=1/(t-e),g=1/(r-o),_=1/(c-l),y=(t+e)*m,x=(r+o)*g;let E,A;if(d===Wi)E=(c+l)*_,A=-2*_;else if(d===Il)E=l*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=A,h[14]=-E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ds=new q,ci=new Vt,U_=new q(0,0,0),F_=new q(1,1,1),_r=new q,cl=new q,Xn=new q,nm=new Vt,im=new qa;class Ti{constructor(e=0,t=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],d=o[8],h=o[1],m=o[5],g=o[9],_=o[2],y=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,x),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return nm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return im.setFromEuler(this),this.setFromQuaternion(im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z_=0;const rm=new q,Ls=new qa,zi=new Vt,dl=new q,Fa=new q,O_=new q,B_=new qa,sm=new q(1,0,0),am=new q(0,1,0),om=new q(0,0,1),lm={type:"added"},H_={type:"removed"},ks={type:"childadded",child:null},kc={type:"childremoved",child:null};class fn extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z_++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new q,t=new Ti,r=new qa,o=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Vt},normalMatrix:{value:new lt}}),this.matrix=new Vt,this.matrixWorld=new Vt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(sm,e)}rotateY(e){return this.rotateOnAxis(am,e)}rotateZ(e){return this.rotateOnAxis(om,e)}translateOnAxis(e,t){return rm.copy(e).applyQuaternion(this.quaternion),this.position.add(rm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sm,e)}translateY(e){return this.translateOnAxis(am,e)}translateZ(e){return this.translateOnAxis(om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?dl.copy(e):dl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(Fa,dl,this.up):zi.lookAt(dl,Fa,this.up),this.quaternion.setFromRotationMatrix(zi),o&&(zi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(zi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lm),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(H_),kc.child=e,this.dispatchEvent(kc),kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,O_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,B_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const _=h[m];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=c(e.geometries),h=c(e.materials),m=c(e.textures),g=c(e.images),_=c(e.shapes),y=c(e.skeletons),x=c(e.animations),E=c(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function c(d){const h=[];for(const m in d){const g=d[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new q(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new q,Oi=new q,Ic=new q,Bi=new q,Is=new q,Ns=new q,um=new q,Nc=new q,Uc=new q,Fc=new q,zc=new qt,Oc=new qt,Bc=new qt;class fi{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){di.subVectors(o,t),Oi.subVectors(r,t),Ic.subVectors(e,t);const c=di.dot(di),d=di.dot(Oi),h=di.dot(Ic),m=Oi.dot(Oi),g=Oi.dot(Ic),_=c*m-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,x=(m*h-d*g)*y,E=(c*g-d*h)*y;return l.set(1-x-E,E,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,c,d,h){return this.getBarycoord(e,t,r,o,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(c,Bi.y),h.addScaledVector(d,Bi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return zc.setScalar(0),Oc.setScalar(0),Bc.setScalar(0),zc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,r),Bc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(zc,l.x),c.addScaledVector(Oc,l.y),c.addScaledVector(Bc,l.z),c}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),Oi.subVectors(e,t),di.cross(Oi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),di.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return fi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,d;Is.subVectors(o,r),Ns.subVectors(l,r),Nc.subVectors(e,r);const h=Is.dot(Nc),m=Ns.dot(Nc);if(h<=0&&m<=0)return t.copy(r);Uc.subVectors(e,o);const g=Is.dot(Uc),_=Ns.dot(Uc);if(g>=0&&_<=g)return t.copy(o);const y=h*_-g*m;if(y<=0&&h>=0&&g<=0)return c=h/(h-g),t.copy(r).addScaledVector(Is,c);Fc.subVectors(e,l);const x=Is.dot(Fc),E=Ns.dot(Fc);if(E>=0&&x<=E)return t.copy(l);const A=x*m-h*E;if(A<=0&&m>=0&&E<=0)return d=m/(m-E),t.copy(r).addScaledVector(Ns,d);const S=g*E-x*_;if(S<=0&&_-g>=0&&x-E>=0)return um.subVectors(l,o),d=(_-g)/(_-g+(x-E)),t.copy(o).addScaledVector(um,d);const v=1/(S+A+y);return c=A*v,d=y*v,t.copy(r).addScaledVector(Is,c).addScaledVector(Ns,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},fl={h:0,s:0,l:0};function Hc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=w_(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Hc(c,l,e+1/3),this.g=Hc(c,l,e),this.b=Hc(c,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=dg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ct.fromWorkingColorSpace(xn.copy(this),e),Math.round(gt(xn.r*255,0,255))*65536+Math.round(gt(xn.g*255,0,255))*256+Math.round(gt(xn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(xn.copy(this),t);const r=xn.r,o=xn.g,l=xn.b,c=Math.max(r,o,l),d=Math.min(r,o,l);let h,m;const g=(d+c)/2;if(d===c)h=0,m=0;else{const _=c-d;switch(m=g<=.5?_/(c+d):_/(2-c-d),c){case r:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-r)/_+2;break;case l:h=(r-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=ei){Ct.fromWorkingColorSpace(xn.copy(this),e);const t=xn.r,r=xn.g,o=xn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(fl);const r=wc(yr.h,fl.h,t),o=wc(yr.s,fl.s,t),l=wc(yr.l,fl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xn=new Et;Et.NAMES=dg;let V_=0;class Ya extends Js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=Vs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rd,this.blendDst=sd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rd&&(r.blendSrc=this.blendSrc),this.blendDst!==sd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const d in l){const h=l[d];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fg extends Ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=qm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Zt=new q,hl=new et;class wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=$p,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)hl.fromBufferAttribute(this,t),hl.applyMatrix3(e),this.setXY(t,hl.x,hl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix3(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ia(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$p&&(e.usage=this.usage),e}}class hg extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class pg extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class tn extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let G_=0;const Qn=new Vt,Vc=new fn,Us=new q,jn=new Ka,za=new Ka,ln=new q;class mi extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G_++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(og(e)?pg:hg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return Vc.lookAt(e),Vc.updateMatrix(),this.applyMatrix4(Vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Us).negate(),this.translate(Us.x,Us.y,Us.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ka);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const d=t[l];za.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(jn.min,za.min),jn.expandByPoint(ln),ln.addVectors(jn.max,za.max),jn.expandByPoint(ln)):(jn.expandByPoint(za.min),jn.expandByPoint(za.max))}jn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,c=t.length;l<c;l++){const d=t[l],h=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)ln.fromBufferAttribute(d,m),h&&(Us.fromBufferAttribute(e,m),ln.add(Us)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),d=[],h=[];for(let z=0;z<r.count;z++)d[z]=new q,h[z]=new q;const m=new q,g=new q,_=new q,y=new et,x=new et,E=new et,A=new q,S=new q;function v(z,b,T){m.fromBufferAttribute(r,z),g.fromBufferAttribute(r,b),_.fromBufferAttribute(r,T),y.fromBufferAttribute(l,z),x.fromBufferAttribute(l,b),E.fromBufferAttribute(l,T),g.sub(m),_.sub(m),x.sub(y),E.sub(y);const B=1/(x.x*E.y-E.x*x.y);isFinite(B)&&(A.copy(g).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(B),S.copy(_).multiplyScalar(x.x).addScaledVector(g,-E.x).multiplyScalar(B),d[z].add(A),d[b].add(A),d[T].add(A),h[z].add(S),h[b].add(S),h[T].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let z=0,b=I.length;z<b;++z){const T=I[z],B=T.start,ie=T.count;for(let Z=B,ae=B+ie;Z<ae;Z+=3)v(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const D=new q,R=new q,F=new q,k=new q;function U(z){F.fromBufferAttribute(o,z),k.copy(F);const b=d[z];D.copy(b),D.sub(F.multiplyScalar(F.dot(b))).normalize(),R.crossVectors(k,b);const B=R.dot(h[z])<0?-1:1;c.setXYZW(z,D.x,D.y,D.z,B)}for(let z=0,b=I.length;z<b;++z){const T=I[z],B=T.start,ie=T.count;for(let Z=B,ae=B+ie;Z<ae;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const o=new q,l=new q,c=new q,d=new q,h=new q,m=new q,g=new q,_=new q;if(e)for(let y=0,x=e.count;y<x;y+=3){const E=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,A),c.fromBufferAttribute(t,S),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,S),d.add(g),h.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,x=t.count;y<x;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),c.fromBufferAttribute(t,y+2),g.subVectors(c,l),_.subVectors(o,l),g.cross(_),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const m=d.array,g=d.itemSize,_=d.normalized,y=new m.constructor(h.length*g);let x=0,E=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?x=h[A]*d.data.stride+d.offset:x=h[A]*g;for(let v=0;v<g;v++)y[E++]=m[x++]}return new wi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,r=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,r);t.setAttribute(d,m)}const l=this.morphAttributes;for(const d in l){const h=[],m=l[d];for(let g=0,_=m.length;g<_;g++){const y=m[g],x=e(y,r);h.push(x)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,h=c.length;d<h;d++){const m=c[d];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const m=r[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let _=0,y=m.length;_<y;_++){const x=m[_];g.push(x.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const m in o){const g=o[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],_=l[m];for(let y=0,x=_.length;y<x;y++)g.push(_[y].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,g=c.length;m<g;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cm=new Vt,Wr=new cg,pl=new tf,dm=new q,ml=new q,gl=new q,vl=new q,Gc=new q,_l=new q,fm=new q,yl=new q;class Rn extends fn{constructor(e=new mi,t=new fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){_l.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=d[h],_=l[h];g!==0&&(Gc.fromBufferAttribute(_,e),c?_l.addScaledVector(Gc,g):_l.addScaledVector(Gc.sub(t),g))}t.add(_l)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),pl.copy(r.boundingSphere),pl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(pl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(pl,dm)===null||Wr.origin.distanceToSquared(dm)>(e.far-e.near)**2))&&(cm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(cm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,d=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,y=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(c))for(let E=0,A=y.length;E<A;E++){const S=y[E],v=c[S.materialIndex],I=Math.max(S.start,x.start),D=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=I,F=D;R<F;R+=3){const k=d.getX(R),U=d.getX(R+1),z=d.getX(R+2);o=xl(this,v,e,r,m,g,_,k,U,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(d.count,x.start+x.count);for(let S=E,v=A;S<v;S+=3){const I=d.getX(S),D=d.getX(S+1),R=d.getX(S+2);o=xl(this,c,e,r,m,g,_,I,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let E=0,A=y.length;E<A;E++){const S=y[E],v=c[S.materialIndex],I=Math.max(S.start,x.start),D=Math.min(h.count,Math.min(S.start+S.count,x.start+x.count));for(let R=I,F=D;R<F;R+=3){const k=R,U=R+1,z=R+2;o=xl(this,v,e,r,m,g,_,k,U,z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),A=Math.min(h.count,x.start+x.count);for(let S=E,v=A;S<v;S+=3){const I=S,D=S+1,R=S+2;o=xl(this,c,e,r,m,g,_,I,D,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function W_(s,e,t,r,o,l,c,d){let h;if(e.side===On?h=r.intersectTriangle(c,l,o,!0,d):h=r.intersectTriangle(o,l,c,e.side===wr,d),h===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(yl);return m<t.near||m>t.far?null:{distance:m,point:yl.clone(),object:s}}function xl(s,e,t,r,o,l,c,d,h,m){s.getVertexPosition(d,ml),s.getVertexPosition(h,gl),s.getVertexPosition(m,vl);const g=W_(s,e,t,r,ml,gl,vl,fm);if(g){const _=new q;fi.getBarycoord(fm,ml,gl,vl,_),o&&(g.uv=fi.getInterpolatedAttribute(o,d,h,m,_,new et)),l&&(g.uv1=fi.getInterpolatedAttribute(l,d,h,m,_,new et)),c&&(g.normal=fi.getInterpolatedAttribute(c,d,h,m,_,new q),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:h,c:m,normal:new q,materialIndex:0};fi.getNormal(ml,gl,vl,y.normal),g.face=y,g.barycoord=_}return g}class Qs extends mi{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const d=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],m=[],g=[],_=[];let y=0,x=0;E("z","y","x",-1,-1,r,t,e,c,l,0),E("z","y","x",1,-1,r,t,-e,c,l,1),E("x","z","y",1,1,e,r,t,o,c,2),E("x","z","y",1,-1,e,r,-t,o,c,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new tn(m,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(_,2));function E(A,S,v,I,D,R,F,k,U,z,b){const T=R/U,B=F/z,ie=R/2,Z=F/2,ae=k/2,he=U+1,se=z+1;let me=0,V=0;const ue=new q;for(let le=0;le<se;le++){const N=le*B-Z;for(let re=0;re<he;re++){const Ne=re*T-ie;ue[A]=Ne*I,ue[S]=N*D,ue[v]=ae,m.push(ue.x,ue.y,ue.z),ue[A]=0,ue[S]=0,ue[v]=k>0?1:-1,g.push(ue.x,ue.y,ue.z),_.push(re/U),_.push(1-le/z),me+=1}}for(let le=0;le<z;le++)for(let N=0;N<U;N++){const re=y+N+he*le,Ne=y+N+he*(le+1),Q=y+(N+1)+he*(le+1),ce=y+(N+1)+he*le;h.push(re,Ne,ce),h.push(Ne,Q,ce),V+=6}d.addGroup(x,V,b),x+=V,y+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function bn(s){const e={};for(let t=0;t<s.length;t++){const r=Zs(s[t]);for(const o in r)e[o]=r[o]}return e}function X_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const j_={clone:Zs,merge:bn};var q_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends Ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=q_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=X_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class gg extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Vt,this.projectionMatrix=new Vt,this.projectionMatrixInverse=new Vt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new q,hm=new et,pm=new et;class ti extends gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,hm,pm),t.subVectors(pm,hm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ec*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,m=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/m,o*=c.width/h,r*=c.height/m}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,zs=1;class Y_ extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ti(Fs,zs,e,t);o.layers=this.layers,this.add(o);const l=new ti(Fs,zs,e,t);l.layers=this.layers,this.add(l);const c=new ti(Fs,zs,e,t);c.layers=this.layers,this.add(c);const d=new ti(Fs,zs,e,t);d.layers=this.layers,this.add(d);const h=new ti(Fs,zs,e,t);h.layers=this.layers,this.add(h);const m=new ti(Fs,zs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,d,h]=t;for(const m of t)this.remove(m);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Il)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,d,h,m,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,c),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,h),e.setRenderTarget(r,4,o),e.render(t,m),r.texture.generateMipmaps=A,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(_,y,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class vg extends Bn{constructor(e,t,r,o,l,c,d,h,m,g){e=e!==void 0?e:[],t=t!==void 0?t:js,super(e,t,r,o,l,c,d,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $_ extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new vg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Qs(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Mr});l.uniforms.tEquirect.value=t;const c=new Rn(o,l),d=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Ei),new Y_(1,10,this).update(e,c),t.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}class Z_ extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Wc=new q,J_=new q,Q_=new lt;class Kr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Wc.subVectors(r,t).cross(J_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Wc),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Q_.getNormalMatrix(e),o=this.coplanarPoint(Wc).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new tf,Sl=new q;class rf{constructor(e=new Kr,t=new Kr,r=new Kr,o=new Kr,l=new Kr,c=new Kr){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,o=e.elements,l=o[0],c=o[1],d=o[2],h=o[3],m=o[4],g=o[5],_=o[6],y=o[7],x=o[8],E=o[9],A=o[10],S=o[11],v=o[12],I=o[13],D=o[14],R=o[15];if(r[0].setComponents(h-l,y-m,S-x,R-v).normalize(),r[1].setComponents(h+l,y+m,S+x,R+v).normalize(),r[2].setComponents(h+c,y+g,S+E,R+I).normalize(),r[3].setComponents(h-c,y-g,S-E,R-I).normalize(),r[4].setComponents(h-d,y-_,S-A,R-D).normalize(),t===Wi)r[5].setComponents(h+d,y+_,S+A,R+D).normalize();else if(t===Il)r[5].setComponents(d,_,A,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Sl.x=o.normal.x>0?e.max.x:e.min.x,Sl.y=o.normal.y>0?e.max.y:e.min.y,Sl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ba extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class _g extends Bn{constructor(e,t,r,o,l,c,d,h,m,g=Gs){if(g!==Gs&&g!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===Gs&&(r=es),r===void 0&&g===Ys&&(r=Ks),super(null,o,l,c,d,h,g,r,m),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:pi,this.minFilter=h!==void 0?h:pi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let d=0,h=l-1,m;for(;d<=h;)if(o=Math.floor(d+(h-d)/2),m=r[o]-c,m<0)d=o+1;else if(m>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const g=r[o],y=r[o+1]-g,x=(c-g)/y;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),d=this.getPoint(l),h=t||(c.isVector2?new et:new q);return h.copy(d).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new q,o=[],l=[],c=[],d=new q,h=new Vt;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new q)}l[0]=new q,c[0]=new q;let m=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);g<=m&&(m=g,r.set(1,0,0)),_<=m&&(m=_,r.set(0,1,0)),y<=m&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),c[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),c[x]=c[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(h.makeRotationAxis(d,E))}c[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(gt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(x=-x);for(let E=1;E<=e;E++)l[E].applyMatrix4(h.makeRotationAxis(o[E],x*E)),c[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class yg extends qi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,d=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=d,this.aRotation=h}getPoint(e,t=new et){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=h-this.aX,x=m-this.aY;h=y*g-x*_+this.aX,m=y*_+x*g+this.aY}return r.set(h,m)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class ey extends yg{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function sf(){let s=0,e=0,t=0,r=0;function o(l,c,d,h){s=l,e=d,t=-3*l+3*c-2*d-h,r=2*l-2*c+d+h}return{initCatmullRom:function(l,c,d,h,m){o(c,d,m*(d-l),m*(h-c))},initNonuniformCatmullRom:function(l,c,d,h,m,g,_){let y=(c-l)/m-(d-l)/(m+g)+(d-c)/g,x=(d-c)/g-(h-c)/(g+_)+(h-d)/_;y*=g,x*=g,o(c,d,y,x)},calc:function(l){const c=l*l,d=c*l;return s+e*l+t*c+r*d}}}const Ml=new q,Xc=new sf,jc=new sf,qc=new sf;class xg extends qi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new q){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let d=Math.floor(c),h=c-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:h===0&&d===l-1&&(d=l-2,h=1);let m,g;this.closed||d>0?m=o[(d-1)%l]:(Ml.subVectors(o[0],o[1]).add(o[0]),m=Ml);const _=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?g=o[(d+2)%l]:(Ml.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Ml),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(_),x),A=Math.pow(_.distanceToSquared(y),x),S=Math.pow(y.distanceToSquared(g),x);A<1e-4&&(A=1),E<1e-4&&(E=A),S<1e-4&&(S=A),Xc.initNonuniformCatmullRom(m.x,_.x,y.x,g.x,E,A,S),jc.initNonuniformCatmullRom(m.y,_.y,y.y,g.y,E,A,S),qc.initNonuniformCatmullRom(m.z,_.z,y.z,g.z,E,A,S)}else this.curveType==="catmullrom"&&(Xc.initCatmullRom(m.x,_.x,y.x,g.x,this.tension),jc.initCatmullRom(m.y,_.y,y.y,g.y,this.tension),qc.initCatmullRom(m.z,_.z,y.z,g.z,this.tension));return r.set(Xc.calc(h),jc.calc(h),qc.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new q().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function mm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,d=s*s,h=s*d;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*d+l*s+t}function ty(s,e){const t=1-s;return t*t*e}function ny(s,e){return 2*(1-s)*s*e}function iy(s,e){return s*s*e}function Va(s,e,t,r){return ty(s,e)+ny(s,t)+iy(s,r)}function ry(s,e){const t=1-s;return t*t*t*e}function sy(s,e){const t=1-s;return 3*t*t*s*e}function ay(s,e){return 3*(1-s)*s*s*e}function oy(s,e){return s*s*s*e}function Ga(s,e,t,r,o){return ry(s,e)+sy(s,t)+ay(s,r)+oy(s,o)}class ly extends qi{constructor(e=new et,t=new et,r=new et,o=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new et){const r=t,o=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(Ga(e,o.x,l.x,c.x,d.x),Ga(e,o.y,l.y,c.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class uy extends qi{constructor(e=new q,t=new q,r=new q,o=new q){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new q){const r=t,o=this.v0,l=this.v1,c=this.v2,d=this.v3;return r.set(Ga(e,o.x,l.x,c.x,d.x),Ga(e,o.y,l.y,c.y,d.y),Ga(e,o.z,l.z,c.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class cy extends qi{constructor(e=new et,t=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new et){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new et){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dy extends qi{constructor(e=new q,t=new q){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new q){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new q){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fy extends qi{constructor(e=new et,t=new et,r=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new et){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Va(e,o.x,l.x,c.x),Va(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Sg extends qi{constructor(e=new q,t=new q,r=new q){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new q){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Va(e,o.x,l.x,c.x),Va(e,o.y,l.y,c.y),Va(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hy extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new et){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),d=l-c,h=o[c===0?c:c-1],m=o[c],g=o[c>o.length-2?o.length-1:c+1],_=o[c>o.length-3?o.length-1:c+2];return r.set(mm(d,h.x,m.x,g.x,_.x),mm(d,h.y,m.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new et().fromArray(o))}return this}}var py=Object.freeze({__proto__:null,ArcCurve:ey,CatmullRomCurve3:xg,CubicBezierCurve:ly,CubicBezierCurve3:uy,EllipseCurve:yg,LineCurve:cy,LineCurve3:dy,QuadraticBezierCurve:fy,QuadraticBezierCurve3:Sg,SplineCurve:hy});class Fl extends mi{constructor(e=1,t=1,r=1,o=32,l=1,c=!1,d=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h};const m=this;o=Math.floor(o),l=Math.floor(l);const g=[],_=[],y=[],x=[];let E=0;const A=[],S=r/2;let v=0;I(),c===!1&&(e>0&&D(!0),t>0&&D(!1)),this.setIndex(g),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(x,2));function I(){const R=new q,F=new q;let k=0;const U=(t-e)/r;for(let z=0;z<=l;z++){const b=[],T=z/l,B=T*(t-e)+e;for(let ie=0;ie<=o;ie++){const Z=ie/o,ae=Z*h+d,he=Math.sin(ae),se=Math.cos(ae);F.x=B*he,F.y=-T*r+S,F.z=B*se,_.push(F.x,F.y,F.z),R.set(he,U,se).normalize(),y.push(R.x,R.y,R.z),x.push(Z,1-T),b.push(E++)}A.push(b)}for(let z=0;z<o;z++)for(let b=0;b<l;b++){const T=A[b][z],B=A[b+1][z],ie=A[b+1][z+1],Z=A[b][z+1];(e>0||b!==0)&&(g.push(T,B,Z),k+=3),(t>0||b!==l-1)&&(g.push(B,ie,Z),k+=3)}m.addGroup(v,k,0),v+=k}function D(R){const F=E,k=new et,U=new q;let z=0;const b=R===!0?e:t,T=R===!0?1:-1;for(let ie=1;ie<=o;ie++)_.push(0,S*T,0),y.push(0,T,0),x.push(.5,.5),E++;const B=E;for(let ie=0;ie<=o;ie++){const ae=ie/o*h+d,he=Math.cos(ae),se=Math.sin(ae);U.x=b*se,U.y=S*T,U.z=b*he,_.push(U.x,U.y,U.z),y.push(0,T,0),k.x=he*.5+.5,k.y=se*.5*T+.5,x.push(k.x,k.y),E++}for(let ie=0;ie<o;ie++){const Z=F+ie,ae=B+ie;R===!0?g.push(ae,ae+1,Z):g.push(ae+1,ae,Z),z+=3}m.addGroup(v,z,R===!0?1:2),v+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class af extends Fl{constructor(e=1,t=1,r=32,o=1,l=!1,c=0,d=Math.PI*2){super(0,e,t,r,o,l,c,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:c,thetaLength:d}}static fromJSON(e){return new af(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zl extends mi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,d=Math.floor(r),h=Math.floor(o),m=d+1,g=h+1,_=e/d,y=t/h,x=[],E=[],A=[],S=[];for(let v=0;v<g;v++){const I=v*y-c;for(let D=0;D<m;D++){const R=D*_-l;E.push(R,-I,0),A.push(0,0,1),S.push(D/d),S.push(1-v/h)}}for(let v=0;v<h;v++)for(let I=0;I<d;I++){const D=I+m*v,R=I+m*(v+1),F=I+1+m*(v+1),k=I+1+m*v;x.push(D,R,k),x.push(R,F,k)}this.setIndex(x),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}class of extends mi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+d,Math.PI);let m=0;const g=[],_=new q,y=new q,x=[],E=[],A=[],S=[];for(let v=0;v<=r;v++){const I=[],D=v/r;let R=0;v===0&&c===0?R=.5/t:v===r&&h===Math.PI&&(R=-.5/t);for(let F=0;F<=t;F++){const k=F/t;_.x=-e*Math.cos(o+k*l)*Math.sin(c+D*d),_.y=e*Math.cos(c+D*d),_.z=e*Math.sin(o+k*l)*Math.sin(c+D*d),E.push(_.x,_.y,_.z),y.copy(_).normalize(),A.push(y.x,y.y,y.z),S.push(k+R,1-D),I.push(m++)}g.push(I)}for(let v=0;v<r;v++)for(let I=0;I<t;I++){const D=g[v][I+1],R=g[v][I],F=g[v+1][I],k=g[v+1][I+1];(v!==0||c>0)&&x.push(D,R,k),(v!==r-1||h<Math.PI)&&x.push(R,F,k)}this.setIndex(x),this.setAttribute("position",new tn(E,3)),this.setAttribute("normal",new tn(A,3)),this.setAttribute("uv",new tn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lf extends mi{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],m=[],g=new q,_=new q,y=new q;for(let x=0;x<=r;x++)for(let E=0;E<=o;E++){const A=E/o*l,S=x/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(A),_.y=(e+t*Math.cos(S))*Math.sin(A),_.z=t*Math.sin(S),d.push(_.x,_.y,_.z),g.x=e*Math.cos(A),g.y=e*Math.sin(A),y.subVectors(_,g).normalize(),h.push(y.x,y.y,y.z),m.push(E/o),m.push(x/r)}for(let x=1;x<=r;x++)for(let E=1;E<=o;E++){const A=(o+1)*x+E-1,S=(o+1)*(x-1)+E-1,v=(o+1)*(x-1)+E,I=(o+1)*x+E;c.push(A,S,I),c.push(S,v,I)}this.setIndex(c),this.setAttribute("position",new tn(d,3)),this.setAttribute("normal",new tn(h,3)),this.setAttribute("uv",new tn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class uf extends mi{constructor(e=new Sg(new q(-1,-1,0),new q(-1,1,0),new q(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const c=e.computeFrenetFrames(t,l);this.tangents=c.tangents,this.normals=c.normals,this.binormals=c.binormals;const d=new q,h=new q,m=new et;let g=new q;const _=[],y=[],x=[],E=[];A(),this.setIndex(E),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(x,2));function A(){for(let D=0;D<t;D++)S(D);S(l===!1?t:0),I(),v()}function S(D){g=e.getPointAt(D/t,g);const R=c.normals[D],F=c.binormals[D];for(let k=0;k<=o;k++){const U=k/o*Math.PI*2,z=Math.sin(U),b=-Math.cos(U);h.x=b*R.x+z*F.x,h.y=b*R.y+z*F.y,h.z=b*R.z+z*F.z,h.normalize(),y.push(h.x,h.y,h.z),d.x=g.x+r*h.x,d.y=g.y+r*h.y,d.z=g.z+r*h.z,_.push(d.x,d.y,d.z)}}function v(){for(let D=1;D<=t;D++)for(let R=1;R<=o;R++){const F=(o+1)*(D-1)+(R-1),k=(o+1)*D+(R-1),U=(o+1)*D+R,z=(o+1)*(D-1)+R;E.push(F,k,z),E.push(k,U,z)}}function I(){for(let D=0;D<=t;D++)for(let R=0;R<=o;R++)m.x=D/t,m.y=R/o,x.push(m.x,m.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new uf(new py[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class my extends Ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sg,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gy extends Ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=p_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vy extends Ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Mg extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _y extends Mg{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Kc=new Vt,gm=new q,vm=new q;class yy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new Vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;gm.setFromMatrixPosition(e.matrixWorld),t.position.copy(gm),vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vm),t.updateMatrixWorld(),Kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Eg extends gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,c=l+m*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xy extends yy{constructor(){super(new Eg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sy extends Mg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new xy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class My extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const _m=new Vt;class Ey{constructor(e,t,r=0,o=1/0){this.ray=new cg(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return _m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(_m),this}intersectObject(e,t=!0,r=[]){return Wd(e,this,r,t),r.sort(ym),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Wd(e[o],this,r,t);return r.sort(ym),r}}function ym(s,e){return s.distance-e.distance}function Wd(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let c=0,d=l.length;c<d;c++)Wd(l[c],e,t,!0)}}function xm(s,e,t,r){const o=wy(r);switch(t){case Jm:return s*e;case eg:return s*e;case tg:return s*e*2;case ng:return s*e/o.components*o.byteLength;case Jd:return s*e/o.components*o.byteLength;case ig:return s*e*2/o.components*o.byteLength;case Qd:return s*e*2/o.components*o.byteLength;case Qm:return s*e*3/o.components*o.byteLength;case hi:return s*e*4/o.components*o.byteLength;case ef:return s*e*4/o.components*o.byteLength;case Cl:case bl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Rl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _d:case xd:return Math.max(s,16)*Math.max(e,8)/4;case vd:case yd:return Math.max(s,8)*Math.max(e,8)/2;case Sd:case Md:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Td:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Cd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ld:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Fd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Dl:case zd:case Od:return Math.ceil(s/4)*Math.ceil(e/4)*16;case rg:case Bd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Hd:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wy(s){switch(s){case ji:case Ym:return{byteLength:1,components:1};case Wa:case $m:case Xa:return{byteLength:2,components:1};case $d:case Zd:return{byteLength:2,components:4};case es:case Yd:case Gi:return{byteLength:4,components:1};case Zm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function wg(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ty(s){const e=new WeakMap;function t(d,h){const m=d.array,g=d.usage,_=m.byteLength,y=s.createBuffer();s.bindBuffer(h,y),s.bufferData(h,m,g),d.onUploadCallback();let x;if(m instanceof Float32Array)x=s.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=s.SHORT;else if(m instanceof Uint32Array)x=s.UNSIGNED_INT;else if(m instanceof Int32Array)x=s.INT;else if(m instanceof Int8Array)x=s.BYTE;else if(m instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,h,m){const g=h.array,_=h.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,g);else{_.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<_.length;x++){const E=_[y],A=_[x];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++y,_[y]=A)}_.length=y+1;for(let x=0,E=_.length;x<E;x++){const A=_[x];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function c(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,t(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,h),m.version=d.version}}return{get:o,remove:l,update:c}}var Ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cy=`#ifdef USE_ALPHAHASH
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
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
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
#endif`,ky=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Iy=`#ifdef USE_BATCHING
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
#endif`,Ny=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Oy=`#ifdef USE_IRIDESCENCE
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
#endif`,By=`#ifdef USE_BUMPMAP
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
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Yy=`#define PI 3.141592653589793
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
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Zy=`vec3 transformedNormal = objectNormal;
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
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ex=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ix=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rx=`#ifdef USE_ENVMAP
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
#endif`,sx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ax=`#ifdef USE_ENVMAP
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
#endif`,ox=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
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
#endif`,ux=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hx=`#ifdef USE_GRADIENTMAP
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
}`,px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vx=`uniform bool receiveShadow;
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
#endif`,_x=`#ifdef USE_ENVMAP
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
#endif`,yx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,wx=`struct PhysicalMaterial {
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
}`,Tx=`
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
#endif`,Ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Px=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ix=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Nx=`#if defined( USE_POINTS_UV )
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
#endif`,Ux=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ox=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hx=`#ifdef USE_MORPHTARGETS
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
#endif`,Vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kx=`#ifdef USE_NORMALMAP
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
#endif`,Yx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$x=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cS=`float getShadowMask() {
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
}`,dS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fS=`#ifdef USE_SKINNING
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
#endif`,hS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pS=`#ifdef USE_SKINNING
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
#endif`,mS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_S=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yS=`#ifdef USE_TRANSMISSION
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
#endif`,xS=`#ifdef USE_TRANSMISSION
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
#endif`,SS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AS=`uniform sampler2D t2D;
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
}`,CS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`#include <common>
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
}`,LS=`#if DEPTH_PACKING == 3200
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
}`,kS=`#define DISTANCE
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
}`,IS=`#define DISTANCE
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
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,US=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FS=`uniform float scale;
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
}`,zS=`uniform vec3 diffuse;
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
}`,OS=`#include <common>
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
}`,BS=`uniform vec3 diffuse;
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
}`,HS=`#define LAMBERT
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
}`,VS=`#define LAMBERT
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
}`,GS=`#define MATCAP
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
}`,WS=`#define MATCAP
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
}`,XS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,qS=`#define PHONG
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
}`,KS=`#define PHONG
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
}`,YS=`#define STANDARD
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
}`,$S=`#define STANDARD
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
}`,ZS=`#define TOON
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
}`,JS=`#define TOON
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
}`,QS=`uniform float size;
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
}`,eM=`uniform vec3 diffuse;
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
}`,tM=`#include <common>
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
}`,nM=`uniform vec3 color;
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
}`,iM=`uniform float rotation;
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
}`,rM=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Ay,alphahash_pars_fragment:Cy,alphamap_fragment:by,alphamap_pars_fragment:Ry,alphatest_fragment:Py,alphatest_pars_fragment:Dy,aomap_fragment:Ly,aomap_pars_fragment:ky,batching_pars_vertex:Iy,batching_vertex:Ny,begin_vertex:Uy,beginnormal_vertex:Fy,bsdfs:zy,iridescence_fragment:Oy,bumpmap_pars_fragment:By,clipping_planes_fragment:Hy,clipping_planes_pars_fragment:Vy,clipping_planes_pars_vertex:Gy,clipping_planes_vertex:Wy,color_fragment:Xy,color_pars_fragment:jy,color_pars_vertex:qy,color_vertex:Ky,common:Yy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:Zy,displacementmap_pars_vertex:Jy,displacementmap_vertex:Qy,emissivemap_fragment:ex,emissivemap_pars_fragment:tx,colorspace_fragment:nx,colorspace_pars_fragment:ix,envmap_fragment:rx,envmap_common_pars_fragment:sx,envmap_pars_fragment:ax,envmap_pars_vertex:ox,envmap_physical_pars_fragment:_x,envmap_vertex:lx,fog_vertex:ux,fog_pars_vertex:cx,fog_fragment:dx,fog_pars_fragment:fx,gradientmap_pars_fragment:hx,lightmap_pars_fragment:px,lights_lambert_fragment:mx,lights_lambert_pars_fragment:gx,lights_pars_begin:vx,lights_toon_fragment:yx,lights_toon_pars_fragment:xx,lights_phong_fragment:Sx,lights_phong_pars_fragment:Mx,lights_physical_fragment:Ex,lights_physical_pars_fragment:wx,lights_fragment_begin:Tx,lights_fragment_maps:Ax,lights_fragment_end:Cx,logdepthbuf_fragment:bx,logdepthbuf_pars_fragment:Rx,logdepthbuf_pars_vertex:Px,logdepthbuf_vertex:Dx,map_fragment:Lx,map_pars_fragment:kx,map_particle_fragment:Ix,map_particle_pars_fragment:Nx,metalnessmap_fragment:Ux,metalnessmap_pars_fragment:Fx,morphinstance_vertex:zx,morphcolor_vertex:Ox,morphnormal_vertex:Bx,morphtarget_pars_vertex:Hx,morphtarget_vertex:Vx,normal_fragment_begin:Gx,normal_fragment_maps:Wx,normal_pars_fragment:Xx,normal_pars_vertex:jx,normal_vertex:qx,normalmap_pars_fragment:Kx,clearcoat_normal_fragment_begin:Yx,clearcoat_normal_fragment_maps:$x,clearcoat_pars_fragment:Zx,iridescence_pars_fragment:Jx,opaque_fragment:Qx,packing:eS,premultiplied_alpha_fragment:tS,project_vertex:nS,dithering_fragment:iS,dithering_pars_fragment:rS,roughnessmap_fragment:sS,roughnessmap_pars_fragment:aS,shadowmap_pars_fragment:oS,shadowmap_pars_vertex:lS,shadowmap_vertex:uS,shadowmask_pars_fragment:cS,skinbase_vertex:dS,skinning_pars_vertex:fS,skinning_vertex:hS,skinnormal_vertex:pS,specularmap_fragment:mS,specularmap_pars_fragment:gS,tonemapping_fragment:vS,tonemapping_pars_fragment:_S,transmission_fragment:yS,transmission_pars_fragment:xS,uv_pars_fragment:SS,uv_pars_vertex:MS,uv_vertex:ES,worldpos_vertex:wS,background_vert:TS,background_frag:AS,backgroundCube_vert:CS,backgroundCube_frag:bS,cube_vert:RS,cube_frag:PS,depth_vert:DS,depth_frag:LS,distanceRGBA_vert:kS,distanceRGBA_frag:IS,equirect_vert:NS,equirect_frag:US,linedashed_vert:FS,linedashed_frag:zS,meshbasic_vert:OS,meshbasic_frag:BS,meshlambert_vert:HS,meshlambert_frag:VS,meshmatcap_vert:GS,meshmatcap_frag:WS,meshnormal_vert:XS,meshnormal_frag:jS,meshphong_vert:qS,meshphong_frag:KS,meshphysical_vert:YS,meshphysical_frag:$S,meshtoon_vert:ZS,meshtoon_frag:JS,points_vert:QS,points_frag:eM,shadow_vert:tM,shadow_frag:nM,sprite_vert:iM,sprite_frag:rM},Re={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Et(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:bn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:bn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:bn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Et(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:bn([Re.points,Re.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:bn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:bn([Re.common,Re.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:bn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:bn([Re.sprite,Re.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:bn([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:bn([Re.lights,Re.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Mi.physical={uniforms:bn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const El={r:0,b:0,g:0},jr=new Ti,sM=new Vt;function aM(s,e,t,r,o,l,c){const d=new Et(0);let h=l===!0?0:1,m,g,_=null,y=0,x=null;function E(D){let R=D.isScene===!0?D.background:null;return R&&R.isTexture&&(R=(D.backgroundBlurriness>0?t:e).get(R)),R}function A(D){let R=!1;const F=E(D);F===null?v(d,h):F&&F.isColor&&(v(F,1),R=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,c):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,c),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(D,R){const F=E(R);F&&(F.isCubeTexture||F.mapping===Ul)?(g===void 0&&(g=new Rn(new Qs(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Zs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),jr.copy(R.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),g.material.uniforms.envMap.value=F,g.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(sM.makeRotationFromEuler(jr)),g.material.toneMapped=Ct.getTransfer(F.colorSpace)!==Lt,(_!==F||y!==F.version||x!==s.toneMapping)&&(g.material.needsUpdate=!0,_=F,y=F.version,x=s.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null)):F&&F.isTexture&&(m===void 0&&(m=new Rn(new zl(2,2),new Tr({name:"BackgroundMaterial",uniforms:Zs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=F,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(F.colorSpace)!==Lt,F.matrixAutoUpdate===!0&&F.updateMatrix(),m.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||y!==F.version||x!==s.toneMapping)&&(m.material.needsUpdate=!0,_=F,y=F.version,x=s.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function v(D,R){D.getRGB(El,mg(s)),r.buffers.color.setClear(El.r,El.g,El.b,R,c)}function I(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),m!==void 0&&(m.geometry.dispose(),m.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(D,R=1){d.set(D),h=R,v(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(D){h=D,v(d,h)},render:A,addToRenderList:S,dispose:I}}function oM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,c=!1;function d(T,B,ie,Z,ae){let he=!1;const se=_(Z,ie,B);l!==se&&(l=se,m(l.object)),he=x(T,Z,ie,ae),he&&E(T,Z,ie,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(he||c)&&(c=!1,R(T,B,ie,Z),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return s.createVertexArray()}function m(T){return s.bindVertexArray(T)}function g(T){return s.deleteVertexArray(T)}function _(T,B,ie){const Z=ie.wireframe===!0;let ae=r[T.id];ae===void 0&&(ae={},r[T.id]=ae);let he=ae[B.id];he===void 0&&(he={},ae[B.id]=he);let se=he[Z];return se===void 0&&(se=y(h()),he[Z]=se),se}function y(T){const B=[],ie=[],Z=[];for(let ae=0;ae<t;ae++)B[ae]=0,ie[ae]=0,Z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:ie,attributeDivisors:Z,object:T,attributes:{},index:null}}function x(T,B,ie,Z){const ae=l.attributes,he=B.attributes;let se=0;const me=ie.getAttributes();for(const V in me)if(me[V].location>=0){const le=ae[V];let N=he[V];if(N===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(N=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(N=T.instanceColor)),le===void 0||le.attribute!==N||N&&le.data!==N.data)return!0;se++}return l.attributesNum!==se||l.index!==Z}function E(T,B,ie,Z){const ae={},he=B.attributes;let se=0;const me=ie.getAttributes();for(const V in me)if(me[V].location>=0){let le=he[V];le===void 0&&(V==="instanceMatrix"&&T.instanceMatrix&&(le=T.instanceMatrix),V==="instanceColor"&&T.instanceColor&&(le=T.instanceColor));const N={};N.attribute=le,le&&le.data&&(N.data=le.data),ae[V]=N,se++}l.attributes=ae,l.attributesNum=se,l.index=Z}function A(){const T=l.newAttributes;for(let B=0,ie=T.length;B<ie;B++)T[B]=0}function S(T){v(T,0)}function v(T,B){const ie=l.newAttributes,Z=l.enabledAttributes,ae=l.attributeDivisors;ie[T]=1,Z[T]===0&&(s.enableVertexAttribArray(T),Z[T]=1),ae[T]!==B&&(s.vertexAttribDivisor(T,B),ae[T]=B)}function I(){const T=l.newAttributes,B=l.enabledAttributes;for(let ie=0,Z=B.length;ie<Z;ie++)B[ie]!==T[ie]&&(s.disableVertexAttribArray(ie),B[ie]=0)}function D(T,B,ie,Z,ae,he,se){se===!0?s.vertexAttribIPointer(T,B,ie,ae,he):s.vertexAttribPointer(T,B,ie,Z,ae,he)}function R(T,B,ie,Z){A();const ae=Z.attributes,he=ie.getAttributes(),se=B.defaultAttributeValues;for(const me in he){const V=he[me];if(V.location>=0){let ue=ae[me];if(ue===void 0&&(me==="instanceMatrix"&&T.instanceMatrix&&(ue=T.instanceMatrix),me==="instanceColor"&&T.instanceColor&&(ue=T.instanceColor)),ue!==void 0){const le=ue.normalized,N=ue.itemSize,re=e.get(ue);if(re===void 0)continue;const Ne=re.buffer,Q=re.type,ce=re.bytesPerElement,Ee=Q===s.INT||Q===s.UNSIGNED_INT||ue.gpuType===Yd;if(ue.isInterleavedBufferAttribute){const ye=ue.data,Te=ye.stride,Ue=ue.offset;if(ye.isInstancedInterleavedBuffer){for(let Qe=0;Qe<V.locationSize;Qe++)v(V.location+Qe,ye.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<V.locationSize;Qe++)S(V.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Qe=0;Qe<V.locationSize;Qe++)D(V.location+Qe,N/V.locationSize,Q,le,Te*ce,(Ue+N/V.locationSize*Qe)*ce,Ee)}else{if(ue.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)v(V.location+ye,ue.meshPerAttribute);T.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ye=0;ye<V.locationSize;ye++)S(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ye=0;ye<V.locationSize;ye++)D(V.location+ye,N/V.locationSize,Q,le,N*ce,N/V.locationSize*ye*ce,Ee)}}else if(se!==void 0){const le=se[me];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(V.location,le);break;case 3:s.vertexAttrib3fv(V.location,le);break;case 4:s.vertexAttrib4fv(V.location,le);break;default:s.vertexAttrib1fv(V.location,le)}}}}I()}function F(){z();for(const T in r){const B=r[T];for(const ie in B){const Z=B[ie];for(const ae in Z)g(Z[ae].object),delete Z[ae];delete B[ie]}delete r[T]}}function k(T){if(r[T.id]===void 0)return;const B=r[T.id];for(const ie in B){const Z=B[ie];for(const ae in Z)g(Z[ae].object),delete Z[ae];delete B[ie]}delete r[T.id]}function U(T){for(const B in r){const ie=r[B];if(ie[T.id]===void 0)continue;const Z=ie[T.id];for(const ae in Z)g(Z[ae].object),delete Z[ae];delete ie[T.id]}}function z(){b(),c=!0,l!==o&&(l=o,m(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:z,resetDefaultState:b,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfProgram:U,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function lM(s,e,t){let r;function o(m){r=m}function l(m,g){s.drawArrays(r,m,g),t.update(g,r,1)}function c(m,g,_){_!==0&&(s.drawArraysInstanced(r,m,g,_),t.update(g,r,_))}function d(m,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,_);let x=0;for(let E=0;E<_;E++)x+=g[E];t.update(x,r,1)}function h(m,g,_,y){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)c(m[E],g[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(r,m,0,g,0,y,0,_);let E=0;for(let A=0;A<_;A++)E+=g[A]*y[A];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function uM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==hi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const z=U===Xa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==ji&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Gi&&!z)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:S,maxAttributes:v,maxVertexUniforms:I,maxVaryings:D,maxFragmentUniforms:R,vertexTextures:F,maxSamples:k}}function cM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new Kr,d=new lt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||r!==0||o;return o=y,r=_.length,x},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=g(_,y,0)},this.setState=function(_,y,x){const E=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,v=s.get(_);if(!o||E===null||E.length===0||l&&!S)l?g(null):m();else{const I=l?0:r,D=I*4;let R=v.clippingState||null;h.value=R,R=g(E,y,D,x);for(let F=0;F!==D;++F)R[F]=t[F];v.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,y,x,E){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,E!==!0||S===null){const v=x+A*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<v)&&(S=new Float32Array(v));for(let D=0,R=x;D!==A;++D,R+=4)c.copy(_[D]).applyMatrix4(I,d),c.normal.toArray(S,R),S[R+3]=c.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function dM(s){let e=new WeakMap;function t(c,d){return d===hd?c.mapping=js:d===pd&&(c.mapping=qs),c}function r(c){if(c&&c.isTexture){const d=c.mapping;if(d===hd||d===pd)if(e.has(c)){const h=e.get(c).texture;return t(h,c.mapping)}else{const h=c.image;if(h&&h.height>0){const m=new $_(h.height);return m.fromEquirectangularTexture(s,c),e.set(c,m),c.addEventListener("dispose",o),t(m.texture,c.mapping)}else return null}}return c}function o(c){const d=c.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,Sm=[.125,.215,.35,.446,.526,.582],Zr=20,Yc=new Eg,Mm=new Et;let $c=null,Zc=0,Jc=0,Qc=!1;const Yr=(1+Math.sqrt(5))/2,Os=1/Yr,Em=[new q(-Yr,Os,0),new q(Yr,Os,0),new q(-Os,0,Yr),new q(Os,0,Yr),new q(0,Yr,-Os),new q(0,Yr,Os),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class wm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Am(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Zc,Jc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Xa,format:hi,colorSpace:$s,depthBuffer:!1},o=Tm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fM(l)),this._blurMaterial=hM(l,e,t)}return o}_compileMaterial(e){const t=new Rn(this._lodPlanes[0],e);this._renderer.compile(t,Yc)}_sceneToCubeUV(e,t,r,o){const d=new ti(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(Mm),g.toneMapping=Er,g.autoClear=!1;const x=new fg({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),E=new Rn(new Qs,x);let A=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,A=!0):(x.color.copy(Mm),A=!0);for(let v=0;v<6;v++){const I=v%3;I===0?(d.up.set(0,h[v],0),d.lookAt(m[v],0,0)):I===1?(d.up.set(0,0,h[v]),d.lookAt(0,m[v],0)):(d.up.set(0,h[v],0),d.lookAt(0,0,m[v]));const D=this._cubeSize;wl(o,I*D,v>2?D:0,D,D),g.setRenderTarget(o),A&&g.render(E,d),g.render(e,d)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===js||e.mapping===qs;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Am());const l=o?this._cubemapMaterial:this._equirectMaterial,c=new Rn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;wl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Yc)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const c=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Em[(o-l-1)%Em.length];this._blur(e,l-1,l,c,d)}t.autoClear=r}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,d){const h=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Rn(this._lodPlanes[o],m),y=m.uniforms,x=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Zr-1),A=l/E,S=isFinite(l)?1+Math.floor(g*A):Zr;S>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const v=[];let I=0;for(let U=0;U<Zr;++U){const z=U/A,b=Math.exp(-z*z/2);v.push(b),U===0?I+=b:U<S&&(I+=2*b)}for(let U=0;U<v.length;U++)v[U]=v[U]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=v,y.latitudinal.value=c==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=E,y.mipInt.value=D-r;const R=this._sizeLods[o],F=3*R*(o>D-Hs?o-D+Hs:0),k=4*(this._cubeSize-R);wl(t,F,k,3*R,2*R),h.setRenderTarget(t),h.render(_,Yc)}}function fM(s){const e=[],t=[],r=[];let o=s;const l=s-Hs+1+Sm.length;for(let c=0;c<l;c++){const d=Math.pow(2,o);t.push(d);let h=1/d;c>s-Hs?h=Sm[c-s+Hs-1]:c===0&&(h=0),r.push(h);const m=1/(d-2),g=-m,_=1+m,y=[g,g,_,g,_,_,g,g,_,_,g,_],x=6,E=6,A=3,S=2,v=1,I=new Float32Array(A*E*x),D=new Float32Array(S*E*x),R=new Float32Array(v*E*x);for(let k=0;k<x;k++){const U=k%3*2/3-1,z=k>2?0:-1,b=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];I.set(b,A*E*k),D.set(y,S*E*k);const T=[k,k,k,k,k,k];R.set(T,v*E*k)}const F=new mi;F.setAttribute("position",new wi(I,A)),F.setAttribute("uv",new wi(D,S)),F.setAttribute("faceIndex",new wi(R,v)),e.push(F),o>Hs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Tm(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Ul,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function wl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function hM(s,e,t){const r=new Float32Array(Zr),o=new q(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Am(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cf(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Cm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function cf(){return`

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
	`}function pM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,m=h===hd||h===pd,g=h===js||h===qs;if(m||g){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new wm(s)),_=m?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return m&&x&&x.height>0||g&&x&&o(x)?(t===null&&(t=new wm(s)),_=m?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let h=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&h++;return h===m}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:c}}function mM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function gM(s,e,t,r){const o={},l=new WeakMap;function c(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const E in y.attributes)e.remove(y.attributes[E]);y.removeEventListener("dispose",c),delete o[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",c),o[y.id]=!0,t.memory.geometries++),y}function h(_){const y=_.attributes;for(const x in y)e.update(y[x],s.ARRAY_BUFFER)}function m(_){const y=[],x=_.index,E=_.attributes.position;let A=0;if(x!==null){const I=x.array;A=x.version;for(let D=0,R=I.length;D<R;D+=3){const F=I[D+0],k=I[D+1],U=I[D+2];y.push(F,k,k,U,U,F)}}else if(E!==void 0){const I=E.array;A=E.version;for(let D=0,R=I.length/3-1;D<R;D+=3){const F=D+0,k=D+1,U=D+2;y.push(F,k,k,U,U,F)}}else return;const S=new(og(y)?pg:hg)(y,1);S.version=A;const v=l.get(_);v&&e.remove(v),l.set(_,S)}function g(_){const y=l.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&m(_)}else m(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function vM(s,e,t){let r;function o(y){r=y}let l,c;function d(y){l=y.type,c=y.bytesPerElement}function h(y,x){s.drawElements(r,x,l,y*c),t.update(x,r,1)}function m(y,x,E){E!==0&&(s.drawElementsInstanced(r,x,l,y*c,E),t.update(x,r,E))}function g(y,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,E);let S=0;for(let v=0;v<E;v++)S+=x[v];t.update(S,r,1)}function _(y,x,E,A){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let v=0;v<y.length;v++)m(y[v]/c,x[v],A[v]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,y,0,A,0,E);let v=0;for(let I=0;I<E;I++)v+=x[I]*A[I];t.update(v,r,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function _M(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,d){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function yM(s,e,t){const r=new WeakMap,o=new qt;function l(c,d,h){const m=c.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let b=function(){U.dispose(),r.delete(d),d.removeEventListener("dispose",b)};y!==void 0&&y.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],v=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let D=0;x===!0&&(D=1),E===!0&&(D=2),A===!0&&(D=3);let R=d.attributes.position.count*D,F=1;R>e.maxTextureSize&&(F=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const k=new Float32Array(R*F*4*_),U=new ug(k,R,F,_);U.type=Gi,U.needsUpdate=!0;const z=D*4;for(let T=0;T<_;T++){const B=S[T],ie=v[T],Z=I[T],ae=R*F*4*T;for(let he=0;he<B.count;he++){const se=he*z;x===!0&&(o.fromBufferAttribute(B,he),k[ae+se+0]=o.x,k[ae+se+1]=o.y,k[ae+se+2]=o.z,k[ae+se+3]=0),E===!0&&(o.fromBufferAttribute(ie,he),k[ae+se+4]=o.x,k[ae+se+5]=o.y,k[ae+se+6]=o.z,k[ae+se+7]=0),A===!0&&(o.fromBufferAttribute(Z,he),k[ae+se+8]=o.x,k[ae+se+9]=o.y,k[ae+se+10]=o.z,k[ae+se+11]=Z.itemSize===4?o.w:1)}}y={count:_,texture:U,size:new et(R,F)},r.set(d,y),d.addEventListener("dispose",b)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let x=0;for(let A=0;A<m.length;A++)x+=m[A];const E=d.morphTargetsRelative?1:1-x;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",m)}h.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function xM(s,e,t,r){let o=new WeakMap;function l(h){const m=r.render.frame,g=h.geometry,_=e.get(h,g);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==m&&(y.update(),o.set(y,m))}return _}function c(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:c}}const Tg=new Bn,bm=new _g(1,1),Ag=new ug,Cg=new I_,bg=new vg,Rm=[],Pm=[],Dm=new Float32Array(16),Lm=new Float32Array(9),km=new Float32Array(4);function ea(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Rm[o];if(l===void 0&&(l=new Float32Array(o),Rm[o]=l),e!==0){r.toArray(l,0);for(let c=1,d=0;c!==e;++c)d+=t,s[c].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Ol(s,e){let t=Pm[e];t===void 0&&(t=new Int32Array(e),Pm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function SM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function wM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function TM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;km.set(r),s.uniformMatrix2fv(this.addr,!1,km),rn(t,r)}}function AM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Lm.set(r),s.uniformMatrix3fv(this.addr,!1,Lm),rn(t,r)}}function CM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;Dm.set(r),s.uniformMatrix4fv(this.addr,!1,Dm),rn(t,r)}}function bM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function PM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function LM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function IM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function NM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function UM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=ag,l=bm):l=Tg,t.setTexture2D(e||l,o)}function FM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Cg,o)}function zM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||bg,o)}function OM(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Ag,o)}function BM(s){switch(s){case 5126:return SM;case 35664:return MM;case 35665:return EM;case 35666:return wM;case 35674:return TM;case 35675:return AM;case 35676:return CM;case 5124:case 35670:return bM;case 35667:case 35671:return RM;case 35668:case 35672:return PM;case 35669:case 35673:return DM;case 5125:return LM;case 36294:return kM;case 36295:return IM;case 36296:return NM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return FM;case 35680:case 36300:case 36308:case 36293:return zM;case 36289:case 36303:case 36311:case 36292:return OM}}function HM(s,e){s.uniform1fv(this.addr,e)}function VM(s,e){const t=ea(e,this.size,2);s.uniform2fv(this.addr,t)}function GM(s,e){const t=ea(e,this.size,3);s.uniform3fv(this.addr,t)}function WM(s,e){const t=ea(e,this.size,4);s.uniform4fv(this.addr,t)}function XM(s,e){const t=ea(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jM(s,e){const t=ea(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function qM(s,e){const t=ea(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function KM(s,e){s.uniform1iv(this.addr,e)}function YM(s,e){s.uniform2iv(this.addr,e)}function $M(s,e){s.uniform3iv(this.addr,e)}function ZM(s,e){s.uniform4iv(this.addr,e)}function JM(s,e){s.uniform1uiv(this.addr,e)}function QM(s,e){s.uniform2uiv(this.addr,e)}function eE(s,e){s.uniform3uiv(this.addr,e)}function tE(s,e){s.uniform4uiv(this.addr,e)}function nE(s,e,t){const r=this.cache,o=e.length,l=Ol(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTexture2D(e[c]||Tg,l[c])}function iE(s,e,t){const r=this.cache,o=e.length,l=Ol(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||Cg,l[c])}function rE(s,e,t){const r=this.cache,o=e.length,l=Ol(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||bg,l[c])}function sE(s,e,t){const r=this.cache,o=e.length,l=Ol(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||Ag,l[c])}function aE(s){switch(s){case 5126:return HM;case 35664:return VM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return jM;case 35676:return qM;case 5124:case 35670:return KM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return ZM;case 5125:return JM;case 36294:return QM;case 36295:return eE;case 36296:return tE;case 35678:case 36198:case 36298:case 36306:case 35682:return nE;case 35679:case 36299:case 36307:return iE;case 35680:case 36300:case 36308:case 36293:return rE;case 36289:case 36303:case 36311:case 36292:return sE}}class oE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=BM(t.type)}}class lE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=aE(t.type)}}class uE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const ed=/(\w+)(\])?(\[|\.)?/g;function Im(s,e){s.seq.push(e),s.map[e.id]=e}function cE(s,e,t){const r=s.name,o=r.length;for(ed.lastIndex=0;;){const l=ed.exec(r),c=ed.lastIndex;let d=l[1];const h=l[2]==="]",m=l[3];if(h&&(d=d|0),m===void 0||m==="["&&c+2===o){Im(t,m===void 0?new oE(d,s,e):new lE(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new uE(d),Im(t,_)),t=_}}}class Ll{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),c=e.getUniformLocation(t,l.name);cE(l,c,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Nm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const dE=37297;let fE=0;function hE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${t[c]}`)}return r.join(`
`)}const Um=new lt;function pE(s){Ct._getMatrix(Um,Ct.workingColorSpace,s);const e=`mat3( ${Um.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fm(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const c=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+hE(s.getShaderSource(e),c)}else return o}function mE(s,e){const t=pE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function gE(s,e){let t;switch(e){case a_:t="Linear";break;case o_:t="Reinhard";break;case l_:t="Cineon";break;case u_:t="ACESFilmic";break;case d_:t="AgX";break;case f_:t="Neutral";break;case c_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tl=new q;function vE(){Ct.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),t=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _E(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ha).join(`
`)}function yE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function xE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:d}}return t}function Ha(s){return s!==""}function zm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Om(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(s){return s.replace(SE,EE)}const ME=new Map;function EE(s,e){let t=ut[e];if(t===void 0){const r=ME.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Xd(t)}const wE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bm(s){return s.replace(wE,TE)}function TE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Hm(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function AE(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===jm?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function CE(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case js:case qs:e="ENVMAP_TYPE_CUBE";break;case Ul:e="ENVMAP_TYPE_CUBE_UV";break}return e}function bE(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function RE(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case qm:e="ENVMAP_BLENDING_MULTIPLY";break;case r_:e="ENVMAP_BLENDING_MIX";break;case s_:e="ENVMAP_BLENDING_ADD";break}return e}function PE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function DE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,d=t.fragmentShader;const h=AE(t),m=CE(t),g=bE(t),_=RE(t),y=PE(t),x=_E(t),E=yE(l),A=o.createProgram();let S,v,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ha).join(`
`),S.length>0&&(S+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ha).join(`
`),v.length>0&&(v+=`
`)):(S=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ha).join(`
`),v=[Hm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ut.tonemapping_pars_fragment:"",t.toneMapping!==Er?gE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,mE("linearToOutputTexel",t.outputColorSpace),vE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ha).join(`
`)),c=Xd(c),c=zm(c,t),c=Om(c,t),d=Xd(d),d=zm(d,t),d=Om(d,t),c=Bm(c),d=Bm(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,v=["#define varying in",t.glslVersion===Zp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=I+S+c,R=I+v+d,F=Nm(o,o.VERTEX_SHADER,D),k=Nm(o,o.FRAGMENT_SHADER,R);o.attachShader(A,F),o.attachShader(A,k),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function U(B){if(s.debug.checkShaderErrors){const ie=o.getProgramInfoLog(A).trim(),Z=o.getShaderInfoLog(F).trim(),ae=o.getShaderInfoLog(k).trim();let he=!0,se=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,A,F,k);else{const me=Fm(o,F,"vertex"),V=Fm(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+ie+`
`+me+`
`+V)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(Z===""||ae==="")&&(se=!1);se&&(B.diagnostics={runnable:he,programLog:ie,vertexShader:{log:Z,prefix:S},fragmentShader:{log:ae,prefix:v}})}o.deleteShader(F),o.deleteShader(k),z=new Ll(o,A),b=xE(o,A)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let T=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=o.getProgramParameter(A,dE)),T},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fE++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=F,this.fragmentShader=k,this}let LE=0;class kE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new IE(e),t.set(e,r)),r}}class IE{constructor(e){this.id=LE++,this.code=e,this.usedTimes=0}}function NE(s,e,t,r,o,l,c){const d=new nf,h=new kE,m=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(b){return m.add(b),b===0?"uv":`uv${b}`}function S(b,T,B,ie,Z){const ae=ie.fog,he=Z.geometry,se=b.isMeshStandardMaterial?ie.environment:null,me=(b.isMeshStandardMaterial?t:e).get(b.envMap||se),V=me&&me.mapping===Ul?me.image.height:null,ue=E[b.type];b.precision!==null&&(x=o.getMaxPrecision(b.precision),x!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",x,"instead."));const le=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=le!==void 0?le.length:0;let re=0;he.morphAttributes.position!==void 0&&(re=1),he.morphAttributes.normal!==void 0&&(re=2),he.morphAttributes.color!==void 0&&(re=3);let Ne,Q,ce,Ee;if(ue){const xt=Mi[ue];Ne=xt.vertexShader,Q=xt.fragmentShader}else Ne=b.vertexShader,Q=b.fragmentShader,h.update(b),ce=h.getVertexShaderID(b),Ee=h.getFragmentShaderID(b);const ye=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ue=Z.isInstancedMesh===!0,Qe=Z.isBatchedMesh===!0,Pt=!!b.map,vt=!!b.matcap,It=!!me,H=!!b.aoMap,Sn=!!b.lightMap,pt=!!b.bumpMap,dt=!!b.normalMap,Ke=!!b.displacementMap,Rt=!!b.emissiveMap,je=!!b.metalnessMap,P=!!b.roughnessMap,w=b.anisotropy>0,J=b.clearcoat>0,pe=b.dispersion>0,ve=b.iridescence>0,de=b.sheen>0,We=b.transmission>0,Ae=w&&!!b.anisotropyMap,Fe=J&&!!b.clearcoatMap,ct=J&&!!b.clearcoatNormalMap,Me=J&&!!b.clearcoatRoughnessMap,Be=ve&&!!b.iridescenceMap,$e=ve&&!!b.iridescenceThicknessMap,tt=de&&!!b.sheenColorMap,He=de&&!!b.sheenRoughnessMap,ft=!!b.specularMap,st=!!b.specularColorMap,bt=!!b.specularIntensityMap,X=We&&!!b.transmissionMap,Ce=We&&!!b.thicknessMap,oe=!!b.gradientMap,fe=!!b.alphaMap,De=b.alphaTest>0,Pe=!!b.alphaHash,at=!!b.extensions;let Ft=Er;b.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Jt={shaderID:ue,shaderType:b.type,shaderName:b.name,vertexShader:Ne,fragmentShader:Q,defines:b.defines,customVertexShaderID:ce,customFragmentShaderID:Ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:x,batching:Qe,batchingColor:Qe&&Z._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Z.instanceColor!==null,instancingMorph:Ue&&Z.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:$s,alphaToCoverage:!!b.alphaToCoverage,map:Pt,matcap:vt,envMap:It,envMapMode:It&&me.mapping,envMapCubeUVHeight:V,aoMap:H,lightMap:Sn,bumpMap:pt,normalMap:dt,displacementMap:y&&Ke,emissiveMap:Rt,normalMapObjectSpace:dt&&b.normalMapType===g_,normalMapTangentSpace:dt&&b.normalMapType===sg,metalnessMap:je,roughnessMap:P,anisotropy:w,anisotropyMap:Ae,clearcoat:J,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:tt,sheenRoughnessMap:He,specularMap:ft,specularColorMap:st,specularIntensityMap:bt,transmission:We,transmissionMap:X,thicknessMap:Ce,gradientMap:oe,opaque:b.transparent===!1&&b.blending===Vs&&b.alphaToCoverage===!1,alphaMap:fe,alphaTest:De,alphaHash:Pe,combine:b.combine,mapUv:Pt&&A(b.map.channel),aoMapUv:H&&A(b.aoMap.channel),lightMapUv:Sn&&A(b.lightMap.channel),bumpMapUv:pt&&A(b.bumpMap.channel),normalMapUv:dt&&A(b.normalMap.channel),displacementMapUv:Ke&&A(b.displacementMap.channel),emissiveMapUv:Rt&&A(b.emissiveMap.channel),metalnessMapUv:je&&A(b.metalnessMap.channel),roughnessMapUv:P&&A(b.roughnessMap.channel),anisotropyMapUv:Ae&&A(b.anisotropyMap.channel),clearcoatMapUv:Fe&&A(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&A(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&A(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&A(b.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&A(b.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&A(b.sheenColorMap.channel),sheenRoughnessMapUv:He&&A(b.sheenRoughnessMap.channel),specularMapUv:ft&&A(b.specularMap.channel),specularColorMapUv:st&&A(b.specularColorMap.channel),specularIntensityMapUv:bt&&A(b.specularIntensityMap.channel),transmissionMapUv:X&&A(b.transmissionMap.channel),thicknessMapUv:Ce&&A(b.thicknessMap.channel),alphaMapUv:fe&&A(b.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(dt||w),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!he.attributes.uv&&(Pt||fe),fog:!!ae,useFog:b.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:Z.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Pt&&b.map.isVideoTexture===!0&&Ct.getTransfer(b.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&b.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(b.emissiveMap.colorSpace)===Lt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vi,flipSided:b.side===On,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||Qe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Jt.vertexUv1s=m.has(1),Jt.vertexUv2s=m.has(2),Jt.vertexUv3s=m.has(3),m.clear(),Jt}function v(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)T.push(B),T.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(I(T,b),D(T,b),T.push(s.outputColorSpace)),T.push(b.customProgramCacheKey),T.join()}function I(b,T){b.push(T.precision),b.push(T.outputColorSpace),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.mapUv),b.push(T.alphaMapUv),b.push(T.lightMapUv),b.push(T.aoMapUv),b.push(T.bumpMapUv),b.push(T.normalMapUv),b.push(T.displacementMapUv),b.push(T.emissiveMapUv),b.push(T.metalnessMapUv),b.push(T.roughnessMapUv),b.push(T.anisotropyMapUv),b.push(T.clearcoatMapUv),b.push(T.clearcoatNormalMapUv),b.push(T.clearcoatRoughnessMapUv),b.push(T.iridescenceMapUv),b.push(T.iridescenceThicknessMapUv),b.push(T.sheenColorMapUv),b.push(T.sheenRoughnessMapUv),b.push(T.specularMapUv),b.push(T.specularColorMapUv),b.push(T.specularIntensityMapUv),b.push(T.transmissionMapUv),b.push(T.thicknessMapUv),b.push(T.combine),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.numLightProbes),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function D(b,T){d.disableAll(),T.supportsVertexTextures&&d.enable(0),T.instancing&&d.enable(1),T.instancingColor&&d.enable(2),T.instancingMorph&&d.enable(3),T.matcap&&d.enable(4),T.envMap&&d.enable(5),T.normalMapObjectSpace&&d.enable(6),T.normalMapTangentSpace&&d.enable(7),T.clearcoat&&d.enable(8),T.iridescence&&d.enable(9),T.alphaTest&&d.enable(10),T.vertexColors&&d.enable(11),T.vertexAlphas&&d.enable(12),T.vertexUv1s&&d.enable(13),T.vertexUv2s&&d.enable(14),T.vertexUv3s&&d.enable(15),T.vertexTangents&&d.enable(16),T.anisotropy&&d.enable(17),T.alphaHash&&d.enable(18),T.batching&&d.enable(19),T.dispersion&&d.enable(20),T.batchingColor&&d.enable(21),b.push(d.mask),d.disableAll(),T.fog&&d.enable(0),T.useFog&&d.enable(1),T.flatShading&&d.enable(2),T.logarithmicDepthBuffer&&d.enable(3),T.reverseDepthBuffer&&d.enable(4),T.skinning&&d.enable(5),T.morphTargets&&d.enable(6),T.morphNormals&&d.enable(7),T.morphColors&&d.enable(8),T.premultipliedAlpha&&d.enable(9),T.shadowMapEnabled&&d.enable(10),T.doubleSided&&d.enable(11),T.flipSided&&d.enable(12),T.useDepthPacking&&d.enable(13),T.dithering&&d.enable(14),T.transmission&&d.enable(15),T.sheen&&d.enable(16),T.opaque&&d.enable(17),T.pointsUvs&&d.enable(18),T.decodeVideoTexture&&d.enable(19),T.decodeVideoTextureEmissive&&d.enable(20),T.alphaToCoverage&&d.enable(21),b.push(d.mask)}function R(b){const T=E[b.type];let B;if(T){const ie=Mi[T];B=j_.clone(ie.uniforms)}else B=b.uniforms;return B}function F(b,T){let B;for(let ie=0,Z=g.length;ie<Z;ie++){const ae=g[ie];if(ae.cacheKey===T){B=ae,++B.usedTimes;break}}return B===void 0&&(B=new DE(s,T,b,l),g.push(B)),B}function k(b){if(--b.usedTimes===0){const T=g.indexOf(b);g[T]=g[g.length-1],g.pop(),b.destroy()}}function U(b){h.remove(b)}function z(){h.dispose()}return{getParameters:S,getProgramCacheKey:v,getUniforms:R,acquireProgram:F,releaseProgram:k,releaseShaderCache:U,programs:g,dispose:z}}function UE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,h){s.get(c)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function FE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gm(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(_,y,x,E,A,S){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:y,material:x,groupOrder:E,renderOrder:_.renderOrder,z:A,group:S},s[e]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=x,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=A,v.group=S),e++,v}function d(_,y,x,E,A,S){const v=c(_,y,x,E,A,S);x.transmission>0?r.push(v):x.transparent===!0?o.push(v):t.push(v)}function h(_,y,x,E,A,S){const v=c(_,y,x,E,A,S);x.transmission>0?r.unshift(v):x.transparent===!0?o.unshift(v):t.unshift(v)}function m(_,y){t.length>1&&t.sort(_||FE),r.length>1&&r.sort(y||Vm),o.length>1&&o.sort(y||Vm)}function g(){for(let _=e,y=s.length;_<y;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:g,sort:m}}function zE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new Gm,s.set(r,[c])):o>=l.length?(c=new Gm,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function OE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Et};break;case"SpotLight":t={position:new q,direction:new q,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function BE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let HE=0;function VE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function GE(s){const e=new OE,t=BE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new q);const o=new q,l=new Vt,c=new Vt;function d(m){let g=0,_=0,y=0;for(let b=0;b<9;b++)r.probe[b].set(0,0,0);let x=0,E=0,A=0,S=0,v=0,I=0,D=0,R=0,F=0,k=0,U=0;m.sort(VE);for(let b=0,T=m.length;b<T;b++){const B=m[b],ie=B.color,Z=B.intensity,ae=B.distance,he=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)g+=ie.r*Z,_+=ie.g*Z,y+=ie.b*Z;else if(B.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(B.sh.coefficients[se],Z);U++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const me=B.shadow,V=t.get(B);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=B.shadow.matrix,I++}r.directional[x]=se,x++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(ie).multiplyScalar(Z),se.distance=ae,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,r.spot[A]=se;const me=B.shadow;if(B.map&&(r.spotLightMap[F]=B.map,F++,me.updateMatrices(B),B.castShadow&&k++),r.spotLightMatrix[A]=me.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,r.spotShadow[A]=V,r.spotShadowMap[A]=he,R++}A++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(ie).multiplyScalar(Z),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=se,S++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const me=B.shadow,V=t.get(B);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,V.shadowCameraNear=me.camera.near,V.shadowCameraFar=me.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=he,r.pointShadowMatrix[E]=B.shadow.matrix,D++}r.point[E]=se,E++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(Z),se.groundColor.copy(B.groundColor).multiplyScalar(Z),r.hemi[v]=se,v++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=y;const z=r.hash;(z.directionalLength!==x||z.pointLength!==E||z.spotLength!==A||z.rectAreaLength!==S||z.hemiLength!==v||z.numDirectionalShadows!==I||z.numPointShadows!==D||z.numSpotShadows!==R||z.numSpotMaps!==F||z.numLightProbes!==U)&&(r.directional.length=x,r.spot.length=A,r.rectArea.length=S,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=D,r.pointShadowMap.length=D,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=D,r.spotLightMatrix.length=R+F-k,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=U,z.directionalLength=x,z.pointLength=E,z.spotLength=A,z.rectAreaLength=S,z.hemiLength=v,z.numDirectionalShadows=I,z.numPointShadows=D,z.numSpotShadows=R,z.numSpotMaps=F,z.numLightProbes=U,r.version=HE++)}function h(m,g){let _=0,y=0,x=0,E=0,A=0;const S=g.matrixWorldInverse;for(let v=0,I=m.length;v<I;v++){const D=m[v];if(D.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(D.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(D.matrixWorld),o.setFromMatrixPosition(D.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const R=r.rectArea[E];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),c.identity(),l.copy(D.matrixWorld),l.premultiply(S),c.extractRotation(l),R.halfWidth.set(D.width*.5,0,0),R.halfHeight.set(0,D.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),E++}else if(D.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(D.matrixWorld),R.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const R=r.hemi[A];R.direction.setFromMatrixPosition(D.matrixWorld),R.direction.transformDirection(S),A++}}}return{setup:d,setupView:h,state:r}}function Wm(s){const e=new GE(s),t=[],r=[];function o(g){m.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function c(g){r.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:c}}function WE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let d;return c===void 0?(d=new Wm(s),e.set(o,[d])):l>=c.length?(d=new Wm(s),c.push(d)):d=c[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const XE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jE=`uniform sampler2D shadow_pass;
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
}`;function qE(s,e,t){let r=new rf;const o=new et,l=new et,c=new qt,d=new gy({depthPacking:m_}),h=new vy,m={},g=t.maxTextureSize,_={[wr]:On,[On]:wr,[Vi]:Vi},y=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:XE,fragmentShader:jE}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new mi;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Rn(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jm;let v=this.type;this.render=function(k,U,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const b=s.getRenderTarget(),T=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(Mr),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const Z=v!==Hi&&this.type===Hi,ae=v===Hi&&this.type!==Hi;for(let he=0,se=k.length;he<se;he++){const me=k[he],V=me.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ue=V.getFrameExtents();if(o.multiply(ue),l.copy(V.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/ue.x),o.x=l.x*ue.x,V.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/ue.y),o.y=l.y*ue.y,V.mapSize.y=l.y)),V.map===null||Z===!0||ae===!0){const N=this.type!==Hi?{minFilter:pi,magFilter:pi}:{};V.map!==null&&V.map.dispose(),V.map=new ts(o.x,o.y,N),V.map.texture.name=me.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const le=V.getViewportCount();for(let N=0;N<le;N++){const re=V.getViewport(N);c.set(l.x*re.x,l.y*re.y,l.x*re.z,l.y*re.w),ie.viewport(c),V.updateMatrices(me,N),r=V.getFrustum(),R(U,z,V.camera,me,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&I(V,z),V.needsUpdate=!1}v=this.type,S.needsUpdate=!1,s.setRenderTarget(b,T,B)};function I(k,U){const z=e.update(A);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ts(o.x,o.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(U,null,z,y,A,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(U,null,z,x,A,null)}function D(k,U,z,b){let T=null;const B=z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(B!==void 0)T=B;else if(T=z.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const ie=T.uuid,Z=U.uuid;let ae=m[ie];ae===void 0&&(ae={},m[ie]=ae);let he=ae[Z];he===void 0&&(he=T.clone(),ae[Z]=he,U.addEventListener("dispose",F)),T=he}if(T.visible=U.visible,T.wireframe=U.wireframe,b===Hi?T.side=U.shadowSide!==null?U.shadowSide:U.side:T.side=U.shadowSide!==null?U.shadowSide:_[U.side],T.alphaMap=U.alphaMap,T.alphaTest=U.alphaTest,T.map=U.map,T.clipShadows=U.clipShadows,T.clippingPlanes=U.clippingPlanes,T.clipIntersection=U.clipIntersection,T.displacementMap=U.displacementMap,T.displacementScale=U.displacementScale,T.displacementBias=U.displacementBias,T.wireframeLinewidth=U.wireframeLinewidth,T.linewidth=U.linewidth,z.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const ie=s.properties.get(T);ie.light=z}return T}function R(k,U,z,b,T){if(k.visible===!1)return;if(k.layers.test(U.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&T===Hi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,k.matrixWorld);const Z=e.update(k),ae=k.material;if(Array.isArray(ae)){const he=Z.groups;for(let se=0,me=he.length;se<me;se++){const V=he[se],ue=ae[V.materialIndex];if(ue&&ue.visible){const le=D(k,ue,b,T);k.onBeforeShadow(s,k,U,z,Z,le,V),s.renderBufferDirect(z,null,Z,le,k,V),k.onAfterShadow(s,k,U,z,Z,le,V)}}}else if(ae.visible){const he=D(k,ae,b,T);k.onBeforeShadow(s,k,U,z,Z,he,null),s.renderBufferDirect(z,null,Z,he,k,null),k.onAfterShadow(s,k,U,z,Z,he,null)}}const ie=k.children;for(let Z=0,ae=ie.length;Z<ae;Z++)R(ie[Z],U,z,b,T)}function F(k){k.target.removeEventListener("dispose",F);for(const z in m){const b=m[z],T=k.target.uuid;T in b&&(b[T].dispose(),delete b[T])}}}const KE={[ad]:od,[ld]:dd,[ud]:fd,[Xs]:cd,[od]:ad,[dd]:ld,[fd]:ud,[cd]:Xs};function YE(s,e){function t(){let X=!1;const Ce=new qt;let oe=null;const fe=new qt(0,0,0,0);return{setMask:function(De){oe!==De&&!X&&(s.colorMask(De,De,De,De),oe=De)},setLocked:function(De){X=De},setClear:function(De,Pe,at,Ft,Jt){Jt===!0&&(De*=Ft,Pe*=Ft,at*=Ft),Ce.set(De,Pe,at,Ft),fe.equals(Ce)===!1&&(s.clearColor(De,Pe,at,Ft),fe.copy(Ce))},reset:function(){X=!1,oe=null,fe.set(-1,0,0,0)}}}function r(){let X=!1,Ce=!1,oe=null,fe=null,De=null;return{setReversed:function(Pe){if(Ce!==Pe){const at=e.get("EXT_clip_control");Ce?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ft=De;De=null,this.setClear(Ft)}Ce=Pe},getReversed:function(){return Ce},setTest:function(Pe){Pe?ye(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!X&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(Ce&&(Pe=KE[Pe]),fe!==Pe){switch(Pe){case ad:s.depthFunc(s.NEVER);break;case od:s.depthFunc(s.ALWAYS);break;case ld:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case ud:s.depthFunc(s.EQUAL);break;case cd:s.depthFunc(s.GEQUAL);break;case dd:s.depthFunc(s.GREATER);break;case fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Pe}},setLocked:function(Pe){X=Pe},setClear:function(Pe){De!==Pe&&(Ce&&(Pe=1-Pe),s.clearDepth(Pe),De=Pe)},reset:function(){X=!1,oe=null,fe=null,De=null,Ce=!1}}}function o(){let X=!1,Ce=null,oe=null,fe=null,De=null,Pe=null,at=null,Ft=null,Jt=null;return{setTest:function(xt){X||(xt?ye(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(xt){Ce!==xt&&!X&&(s.stencilMask(xt),Ce=xt)},setFunc:function(xt,Dn,Mn){(oe!==xt||fe!==Dn||De!==Mn)&&(s.stencilFunc(xt,Dn,Mn),oe=xt,fe=Dn,De=Mn)},setOp:function(xt,Dn,Mn){(Pe!==xt||at!==Dn||Ft!==Mn)&&(s.stencilOp(xt,Dn,Mn),Pe=xt,at=Dn,Ft=Mn)},setLocked:function(xt){X=xt},setClear:function(xt){Jt!==xt&&(s.clearStencil(xt),Jt=xt)},reset:function(){X=!1,Ce=null,oe=null,fe=null,De=null,Pe=null,at=null,Ft=null,Jt=null}}}const l=new t,c=new r,d=new o,h=new WeakMap,m=new WeakMap;let g={},_={},y=new WeakMap,x=[],E=null,A=!1,S=null,v=null,I=null,D=null,R=null,F=null,k=null,U=new Et(0,0,0),z=0,b=!1,T=null,B=null,ie=null,Z=null,ae=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,me=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(V)[1]),se=me>=1):V.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),se=me>=2);let ue=null,le={};const N=s.getParameter(s.SCISSOR_BOX),re=s.getParameter(s.VIEWPORT),Ne=new qt().fromArray(N),Q=new qt().fromArray(re);function ce(X,Ce,oe,fe){const De=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(X,Pe),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<oe;at++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ce+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Pe}const Ee={};Ee[s.TEXTURE_2D]=ce(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ce(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ce(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ce(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),ye(s.DEPTH_TEST),c.setFunc(Xs),pt(!1),dt(Xp),ye(s.CULL_FACE),H(Mr);function ye(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Te(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Ue(X,Ce){return _[X]!==Ce?(s.bindFramebuffer(X,Ce),_[X]=Ce,X===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Ce),X===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Qe(X,Ce){let oe=x,fe=!1;if(X){oe=y.get(Ce),oe===void 0&&(oe=[],y.set(Ce,oe));const De=X.textures;if(oe.length!==De.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,at=De.length;Pe<at;Pe++)oe[Pe]=s.COLOR_ATTACHMENT0+Pe;oe.length=De.length,fe=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,fe=!0);fe&&s.drawBuffers(oe)}function Pt(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const vt={[$r]:s.FUNC_ADD,[H0]:s.FUNC_SUBTRACT,[V0]:s.FUNC_REVERSE_SUBTRACT};vt[G0]=s.MIN,vt[W0]=s.MAX;const It={[X0]:s.ZERO,[j0]:s.ONE,[q0]:s.SRC_COLOR,[rd]:s.SRC_ALPHA,[Q0]:s.SRC_ALPHA_SATURATE,[Z0]:s.DST_COLOR,[Y0]:s.DST_ALPHA,[K0]:s.ONE_MINUS_SRC_COLOR,[sd]:s.ONE_MINUS_SRC_ALPHA,[J0]:s.ONE_MINUS_DST_COLOR,[$0]:s.ONE_MINUS_DST_ALPHA,[e_]:s.CONSTANT_COLOR,[t_]:s.ONE_MINUS_CONSTANT_COLOR,[n_]:s.CONSTANT_ALPHA,[i_]:s.ONE_MINUS_CONSTANT_ALPHA};function H(X,Ce,oe,fe,De,Pe,at,Ft,Jt,xt){if(X===Mr){A===!0&&(Te(s.BLEND),A=!1);return}if(A===!1&&(ye(s.BLEND),A=!0),X!==B0){if(X!==S||xt!==b){if((v!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),v=$r,R=$r),xt)switch(X){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.ONE,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jp:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case qp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,D=null,F=null,k=null,U.set(0,0,0),z=0,S=X,b=xt}return}De=De||Ce,Pe=Pe||oe,at=at||fe,(Ce!==v||De!==R)&&(s.blendEquationSeparate(vt[Ce],vt[De]),v=Ce,R=De),(oe!==I||fe!==D||Pe!==F||at!==k)&&(s.blendFuncSeparate(It[oe],It[fe],It[Pe],It[at]),I=oe,D=fe,F=Pe,k=at),(Ft.equals(U)===!1||Jt!==z)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Jt),U.copy(Ft),z=Jt),S=X,b=!1}function Sn(X,Ce){X.side===Vi?Te(s.CULL_FACE):ye(s.CULL_FACE);let oe=X.side===On;Ce&&(oe=!oe),pt(oe),X.blending===Vs&&X.transparent===!1?H(Mr):H(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const fe=X.stencilWrite;d.setTest(fe),fe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Rt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){T!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),T=X)}function dt(X){X!==F0?(ye(s.CULL_FACE),X!==B&&(X===Xp?s.cullFace(s.BACK):X===z0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),B=X}function Ke(X){X!==ie&&(se&&s.lineWidth(X),ie=X)}function Rt(X,Ce,oe){X?(ye(s.POLYGON_OFFSET_FILL),(Z!==Ce||ae!==oe)&&(s.polygonOffset(Ce,oe),Z=Ce,ae=oe)):Te(s.POLYGON_OFFSET_FILL)}function je(X){X?ye(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function P(X){X===void 0&&(X=s.TEXTURE0+he-1),ue!==X&&(s.activeTexture(X),ue=X)}function w(X,Ce,oe){oe===void 0&&(ue===null?oe=s.TEXTURE0+he-1:oe=ue);let fe=le[oe];fe===void 0&&(fe={type:void 0,texture:void 0},le[oe]=fe),(fe.type!==X||fe.texture!==Ce)&&(ue!==oe&&(s.activeTexture(oe),ue=oe),s.bindTexture(X,Ce||Ee[X]),fe.type=X,fe.texture=Ce)}function J(){const X=le[ue];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(X){Ne.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Ne.copy(X))}function He(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function ft(X,Ce){let oe=m.get(Ce);oe===void 0&&(oe=new WeakMap,m.set(Ce,oe));let fe=oe.get(X);fe===void 0&&(fe=s.getUniformBlockIndex(Ce,X.name),oe.set(X,fe))}function st(X,Ce){const fe=m.get(Ce).get(X);h.get(Ce)!==fe&&(s.uniformBlockBinding(Ce,fe,X.__bindingPointIndex),h.set(Ce,fe))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},ue=null,le={},_={},y=new WeakMap,x=[],E=null,A=!1,S=null,v=null,I=null,D=null,R=null,F=null,k=null,U=new Et(0,0,0),z=0,b=!1,T=null,B=null,ie=null,Z=null,ae=null,Ne.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:ye,disable:Te,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:Pt,setBlending:H,setMaterial:Sn,setFlipSided:pt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:Rt,setScissorTest:je,activeTexture:P,bindTexture:w,unbindTexture:J,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Be,texImage3D:$e,updateUBOMapping:ft,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Me,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:tt,viewport:He,reset:bt}}function $E(s,e,t,r,o,l,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new et,g=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(P,w){return x?new OffscreenCanvas(P,w):Nl("canvas")}function A(P,w,J){let pe=1;const ve=je(P);if((ve.width>J||ve.height>J)&&(pe=J/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const de=Math.floor(pe*ve.width),We=Math.floor(pe*ve.height);_===void 0&&(_=E(de,We));const Ae=w?E(de,We):_;return Ae.width=de,Ae.height=We,Ae.getContext("2d").drawImage(P,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+We+")."),Ae}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),P;return P}function S(P){return P.generateMipmaps}function v(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function D(P,w,J,pe,ve=!1){if(P!==null){if(s[P]!==void 0)return s[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let de=w;if(w===s.RED&&(J===s.FLOAT&&(de=s.R32F),J===s.HALF_FLOAT&&(de=s.R16F),J===s.UNSIGNED_BYTE&&(de=s.R8)),w===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.R8UI),J===s.UNSIGNED_SHORT&&(de=s.R16UI),J===s.UNSIGNED_INT&&(de=s.R32UI),J===s.BYTE&&(de=s.R8I),J===s.SHORT&&(de=s.R16I),J===s.INT&&(de=s.R32I)),w===s.RG&&(J===s.FLOAT&&(de=s.RG32F),J===s.HALF_FLOAT&&(de=s.RG16F),J===s.UNSIGNED_BYTE&&(de=s.RG8)),w===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RG8UI),J===s.UNSIGNED_SHORT&&(de=s.RG16UI),J===s.UNSIGNED_INT&&(de=s.RG32UI),J===s.BYTE&&(de=s.RG8I),J===s.SHORT&&(de=s.RG16I),J===s.INT&&(de=s.RG32I)),w===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGB8UI),J===s.UNSIGNED_SHORT&&(de=s.RGB16UI),J===s.UNSIGNED_INT&&(de=s.RGB32UI),J===s.BYTE&&(de=s.RGB8I),J===s.SHORT&&(de=s.RGB16I),J===s.INT&&(de=s.RGB32I)),w===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),J===s.UNSIGNED_INT&&(de=s.RGBA32UI),J===s.BYTE&&(de=s.RGBA8I),J===s.SHORT&&(de=s.RGBA16I),J===s.INT&&(de=s.RGBA32I)),w===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),w===s.RGBA){const We=ve?kl:Ct.getTransfer(pe);J===s.FLOAT&&(de=s.RGBA32F),J===s.HALF_FLOAT&&(de=s.RGBA16F),J===s.UNSIGNED_BYTE&&(de=We===Lt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(P,w){let J;return P?w===null||w===es||w===Ks?J=s.DEPTH24_STENCIL8:w===Gi?J=s.DEPTH32F_STENCIL8:w===Wa&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===es||w===Ks?J=s.DEPTH_COMPONENT24:w===Gi?J=s.DEPTH_COMPONENT32F:w===Wa&&(J=s.DEPTH_COMPONENT16),J}function F(P,w){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==pi&&P.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function k(P){const w=P.target;w.removeEventListener("dispose",k),z(w),w.isVideoTexture&&g.delete(w)}function U(P){const w=P.target;w.removeEventListener("dispose",U),T(w)}function z(P){const w=r.get(P);if(w.__webglInit===void 0)return;const J=P.source,pe=y.get(J);if(pe){const ve=pe[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&b(P),Object.keys(pe).length===0&&y.delete(J)}r.remove(P)}function b(P){const w=r.get(P);s.deleteTexture(w.__webglTexture);const J=P.source,pe=y.get(J);delete pe[w.__cacheKey],c.memory.textures--}function T(P){const w=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ve=0;ve<w.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(w.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)s.deleteFramebuffer(w.__webglFramebuffer[pe]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const J=P.textures;for(let pe=0,ve=J.length;pe<ve;pe++){const de=r.get(J[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(J[pe])}r.remove(P)}let B=0;function ie(){B=0}function Z(){const P=B;return P>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+o.maxTextures),B+=1,P}function ae(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function he(P,w){const J=r.get(P);if(P.isVideoTexture&&Ke(P),P.isRenderTargetTexture===!1&&P.version>0&&J.__version!==P.version){const pe=P.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(J,P,w);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+w)}function se(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,w);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+w)}function me(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){Q(J,P,w);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+w)}function V(P,w){const J=r.get(P);if(P.version>0&&J.__version!==P.version){ce(J,P,w);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+w)}const ue={[md]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[gd]:s.MIRRORED_REPEAT},le={[pi]:s.NEAREST,[h_]:s.NEAREST_MIPMAP_NEAREST,[rl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},N={[v_]:s.NEVER,[E_]:s.ALWAYS,[__]:s.LESS,[ag]:s.LEQUAL,[y_]:s.EQUAL,[M_]:s.GEQUAL,[x_]:s.GREATER,[S_]:s.NOTEQUAL};function re(P,w){if(w.type===Gi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Mc||w.magFilter===rl||w.magFilter===Qr||w.minFilter===Ei||w.minFilter===Mc||w.minFilter===rl||w.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,ue[w.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,ue[w.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,ue[w.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,le[w.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===pi||w.minFilter!==rl&&w.minFilter!==Qr||w.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ne(P,w){let J=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",k));const pe=w.source;let ve=y.get(pe);ve===void 0&&(ve={},y.set(pe,ve));const de=ae(w);if(de!==P.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,J=!0),ve[de].usedTimes++;const We=ve[P.__cacheKey];We!==void 0&&(ve[P.__cacheKey].usedTimes--,We.usedTimes===0&&b(w)),P.__cacheKey=de,P.__webglTexture=ve[de].texture}return J}function Q(P,w,J){let pe=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=Ne(P,w),de=w.source;t.bindTexture(pe,P.__webglTexture,s.TEXTURE0+J);const We=r.get(de);if(de.version!==We.__version||ve===!0){t.activeTexture(s.TEXTURE0+J);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Fe=w.colorSpace===Sr?null:Ct.getPrimaries(w.colorSpace),ct=w.colorSpace===Sr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=A(w.image,!1,o.maxTextureSize);Me=Rt(w,Me);const Be=l.convert(w.format,w.colorSpace),$e=l.convert(w.type);let tt=D(w.internalFormat,Be,$e,w.colorSpace,w.isVideoTexture);re(pe,w);let He;const ft=w.mipmaps,st=w.isVideoTexture!==!0,bt=We.__version===void 0||ve===!0,X=de.dataReady,Ce=F(w,Me);if(w.isDepthTexture)tt=R(w.format===Ys,w.type),bt&&(st?t.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,null));else if(w.isDataTexture)if(ft.length>0){st&&bt&&t.texStorage2D(s.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let oe=0,fe=ft.length;oe<fe;oe++)He=ft[oe],st?X&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,He.width,He.height,Be,$e,He.data):t.texImage2D(s.TEXTURE_2D,oe,tt,He.width,He.height,0,Be,$e,He.data);w.generateMipmaps=!1}else st?(bt&&t.texStorage2D(s.TEXTURE_2D,Ce,tt,Me.width,Me.height),X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,$e,Me.data)):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,ft[0].width,ft[0].height,Me.depth);for(let oe=0,fe=ft.length;oe<fe;oe++)if(He=ft[oe],w.format!==hi)if(Be!==null)if(st){if(X)if(w.layerUpdates.size>0){const De=xm(He.width,He.height,w.format,w.type);for(const Pe of w.layerUpdates){const at=He.data.subarray(Pe*De/He.data.BYTES_PER_ELEMENT,(Pe+1)*De/He.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Pe,He.width,He.height,1,Be,at)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,He.width,He.height,Me.depth,Be,He.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,tt,He.width,He.height,Me.depth,0,He.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,He.width,He.height,Me.depth,Be,$e,He.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,tt,He.width,He.height,Me.depth,0,Be,$e,He.data)}else{st&&bt&&t.texStorage2D(s.TEXTURE_2D,Ce,tt,ft[0].width,ft[0].height);for(let oe=0,fe=ft.length;oe<fe;oe++)He=ft[oe],w.format!==hi?Be!==null?st?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,He.width,He.height,Be,He.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,tt,He.width,He.height,0,He.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,He.width,He.height,Be,$e,He.data):t.texImage2D(s.TEXTURE_2D,oe,tt,He.width,He.height,0,Be,$e,He.data)}else if(w.isDataArrayTexture)if(st){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ce,tt,Me.width,Me.height,Me.depth),X)if(w.layerUpdates.size>0){const oe=xm(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const De=Me.data.subarray(fe*oe/Me.data.BYTES_PER_ELEMENT,(fe+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Be,$e,De)}w.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(w.isData3DTexture)st?(bt&&t.texStorage3D(s.TEXTURE_3D,Ce,tt,Me.width,Me.height,Me.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(w.isFramebufferTexture){if(bt)if(st)t.texStorage2D(s.TEXTURE_2D,Ce,tt,Me.width,Me.height);else{let oe=Me.width,fe=Me.height;for(let De=0;De<Ce;De++)t.texImage2D(s.TEXTURE_2D,De,tt,oe,fe,0,Be,$e,null),oe>>=1,fe>>=1}}else if(ft.length>0){if(st&&bt){const oe=je(ft[0]);t.texStorage2D(s.TEXTURE_2D,Ce,tt,oe.width,oe.height)}for(let oe=0,fe=ft.length;oe<fe;oe++)He=ft[oe],st?X&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be,$e,He):t.texImage2D(s.TEXTURE_2D,oe,tt,Be,$e,He);w.generateMipmaps=!1}else if(st){if(bt){const oe=je(Me);t.texStorage2D(s.TEXTURE_2D,Ce,tt,oe.width,oe.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,$e,Me)}else t.texImage2D(s.TEXTURE_2D,0,tt,Be,$e,Me);S(w)&&v(pe),We.__version=de.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ce(P,w,J){if(w.image.length!==6)return;const pe=Ne(P,w),ve=w.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+J);const de=r.get(ve);if(ve.version!==de.__version||pe===!0){t.activeTexture(s.TEXTURE0+J);const We=Ct.getPrimaries(Ct.workingColorSpace),Ae=w.colorSpace===Sr?null:Ct.getPrimaries(w.colorSpace),Fe=w.colorSpace===Sr||We===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Be=[];for(let fe=0;fe<6;fe++)!ct&&!Me?Be[fe]=A(w.image[fe],!0,o.maxCubemapSize):Be[fe]=Me?w.image[fe].image:w.image[fe],Be[fe]=Rt(w,Be[fe]);const $e=Be[0],tt=l.convert(w.format,w.colorSpace),He=l.convert(w.type),ft=D(w.internalFormat,tt,He,w.colorSpace),st=w.isVideoTexture!==!0,bt=de.__version===void 0||pe===!0,X=ve.dataReady;let Ce=F(w,$e);re(s.TEXTURE_CUBE_MAP,w);let oe;if(ct){st&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,$e.width,$e.height);for(let fe=0;fe<6;fe++){oe=Be[fe].mipmaps;for(let De=0;De<oe.length;De++){const Pe=oe[De];w.format!==hi?tt!==null?st?X&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Pe.width,Pe.height,tt,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ft,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,0,0,Pe.width,Pe.height,tt,He,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De,ft,Pe.width,Pe.height,0,tt,He,Pe.data)}}}else{if(oe=w.mipmaps,st&&bt){oe.length>0&&Ce++;const fe=je(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ce,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){st?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be[fe].width,Be[fe].height,tt,He,Be[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Be[fe].width,Be[fe].height,0,tt,He,Be[fe].data);for(let De=0;De<oe.length;De++){const at=oe[De].image[fe].image;st?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,at.width,at.height,tt,He,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ft,at.width,at.height,0,tt,He,at.data)}}else{st?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,tt,He,Be[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,tt,He,Be[fe]);for(let De=0;De<oe.length;De++){const Pe=oe[De];st?X&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,0,0,tt,He,Pe.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,De+1,ft,tt,He,Pe.image[fe])}}}S(w)&&v(s.TEXTURE_CUBE_MAP),de.__version=ve.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function Ee(P,w,J,pe,ve,de){const We=l.convert(J.format,J.colorSpace),Ae=l.convert(J.type),Fe=D(J.internalFormat,We,Ae,J.colorSpace),ct=r.get(w),Me=r.get(J);if(Me.__renderTarget=w,!ct.__hasExternalTextures){const Be=Math.max(1,w.width>>de),$e=Math.max(1,w.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Fe,Be,$e,w.depth,0,We,Ae,null):t.texImage2D(ve,de,Fe,Be,$e,0,We,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,0,pt(w)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(P,w,J){if(s.bindRenderbuffer(s.RENDERBUFFER,P),w.depthBuffer){const pe=w.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,de=R(w.stencilBuffer,ve),We=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=pt(w);dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,w.width,w.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,de,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,P)}else{const pe=w.textures;for(let ve=0;ve<pe.length;ve++){const de=pe[ve],We=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),Fe=D(de.internalFormat,We,Ae,de.colorSpace),ct=pt(w);J&&dt(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Fe,w.width,w.height):dt(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Fe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ve=pe.__webglTexture,de=pt(w);if(w.depthTexture.format===Gs)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(w.depthTexture.format===Ys)dt(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(P){const w=r.get(P),J=P.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==P.depthTexture){const pe=P.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=pe}if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,P)}else if(J){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(w.__webglDepthbuffer[pe],P,!1);else{const ve=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),ye(w.__webglDepthbuffer,P,!1);else{const pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Qe(P,w,J){const pe=r.get(P);w!==void 0&&Ee(pe.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Ue(P)}function Pt(P){const w=P.texture,J=r.get(P),pe=r.get(w);P.addEventListener("dispose",U);const ve=P.textures,de=P.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=w.version,c.memory.textures++),de){J.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)J.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else J.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)J.__webglFramebuffer[Ae]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ct=r.get(ve[Ae]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),c.memory.textures++)}if(P.samples>0&&dt(P)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];J.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae]);const ct=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),Be=D(Fe.internalFormat,ct,Me,Fe.colorSpace,P.isXRRenderTarget===!0),$e=pt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,J.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(J.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),re(s.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(J.__webglFramebuffer[Ae][Fe],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(J.__webglFramebuffer[Ae],P,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(w)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ct=ve[Ae],Me=r.get(ct);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),re(s.TEXTURE_2D,ct),Ee(J.__webglFramebuffer,P,ct,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(ct)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ae=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),re(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(J.__webglFramebuffer[Fe],P,w,s.COLOR_ATTACHMENT0,Ae,Fe);else Ee(J.__webglFramebuffer,P,w,s.COLOR_ATTACHMENT0,Ae,0);S(w)&&v(Ae),t.unbindTexture()}P.depthBuffer&&Ue(P)}function vt(P){const w=P.textures;for(let J=0,pe=w.length;J<pe;J++){const ve=w[J];if(S(ve)){const de=I(P),We=r.get(ve).__webglTexture;t.bindTexture(de,We),v(de),t.unbindTexture()}}}const It=[],H=[];function Sn(P){if(P.samples>0){if(dt(P)===!1){const w=P.textures,J=P.width,pe=P.height;let ve=s.COLOR_BUFFER_BIT;const de=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(P),Ae=w.length>1;if(Ae)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,J,pe,0,0,J,pe,ve,s.NEAREST),h===!0&&(It.length=0,H.length=0,It.push(s.COLOR_ATTACHMENT0+Fe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(It.push(de),H.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ct=r.get(w[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&h){const w=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function pt(P){return Math.min(o.maxSamples,P.samples)}function dt(P){const w=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ke(P){const w=c.render.frame;g.get(P)!==w&&(g.set(P,w),P.update())}function Rt(P,w){const J=P.colorSpace,pe=P.format,ve=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||J!==$s&&J!==Sr&&(Ct.getTransfer(J)===Lt?(pe!==hi||ve!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),w}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=se,this.setTexture3D=me,this.setTextureCube=V,this.rebindTextures=Qe,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=Sn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function ZE(s,e){function t(r,o=Sr){let l;const c=Ct.getTransfer(o);if(r===ji)return s.UNSIGNED_BYTE;if(r===$d)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Zd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Zm)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ym)return s.BYTE;if(r===$m)return s.SHORT;if(r===Wa)return s.UNSIGNED_SHORT;if(r===Yd)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Xa)return s.HALF_FLOAT;if(r===Jm)return s.ALPHA;if(r===Qm)return s.RGB;if(r===hi)return s.RGBA;if(r===eg)return s.LUMINANCE;if(r===tg)return s.LUMINANCE_ALPHA;if(r===Gs)return s.DEPTH_COMPONENT;if(r===Ys)return s.DEPTH_STENCIL;if(r===ng)return s.RED;if(r===Jd)return s.RED_INTEGER;if(r===ig)return s.RG;if(r===Qd)return s.RG_INTEGER;if(r===ef)return s.RGBA_INTEGER;if(r===Cl||r===bl||r===Rl||r===Pl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Cl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Cl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===bl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Rl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===vd||r===_d||r===yd||r===xd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_d)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sd||r===Md||r===Ed)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Sd||r===Md)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Ed)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===wd||r===Td||r===Ad||r===Cd||r===bd||r===Rd||r===Pd||r===Dd||r===Ld||r===kd||r===Id||r===Nd||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===wd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Td)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ad)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===bd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Rd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Pd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ld)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Id)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ud)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Fd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dl||r===zd||r===Od)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Dl)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===zd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Od)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===rg||r===Bd||r===Hd||r===Vd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Dl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Bd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Hd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Vd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const JE={type:"move"};class td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ba,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ba,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ba,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,r),v=this._getHandJoint(m,A);S!==null&&(v.matrix.fromArray(S.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=S.radius),v.visible=S!==null}const g=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],y=g.position.distanceTo(_.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(JE)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ba;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const QE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,e1=`
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

}`;class t1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:QE,fragmentShader:e1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Rn(new zl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class n1 extends Js{constructor(e,t){super();const r=this;let o=null,l=1,c=null,d="local-floor",h=1,m=null,g=null,_=null,y=null,x=null,E=null;const A=new t1,S=t.getContextAttributes();let v=null,I=null;const D=[],R=[],F=new et;let k=null;const U=new ti;U.viewport=new qt;const z=new ti;z.viewport=new qt;const b=[U,z],T=new My;let B=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=D[Q];return ce===void 0&&(ce=new td,D[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=D[Q];return ce===void 0&&(ce=new td,D[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=D[Q];return ce===void 0&&(ce=new td,D[Q]=ce),ce.getHandSpace()};function Z(Q){const ce=R.indexOf(Q.inputSource);if(ce===-1)return;const Ee=D[ce];Ee!==void 0&&(Ee.update(Q.inputSource,Q.frame,m||c),Ee.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ae(){o.removeEventListener("select",Z),o.removeEventListener("selectstart",Z),o.removeEventListener("selectend",Z),o.removeEventListener("squeeze",Z),o.removeEventListener("squeezestart",Z),o.removeEventListener("squeezeend",Z),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",he);for(let Q=0;Q<D.length;Q++){const ce=R[Q];ce!==null&&(R[Q]=null,D[Q].disconnect(ce))}B=null,ie=null,A.reset(),e.setRenderTarget(v),x=null,y=null,_=null,o=null,I=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(Q){m=Q},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",Z),o.addEventListener("selectstart",Z),o.addEventListener("selectend",Z),o.addEventListener("squeeze",Z),o.addEventListener("squeezestart",Z),o.addEventListener("squeezeend",Z),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0){const ce={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new ts(x.framebufferWidth,x.framebufferHeight,{format:hi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ce=null,Ee=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=S.stencil?Ys:Gs,Ee=S.stencil?Ks:es);const Te={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(Te),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new ts(y.textureWidth,y.textureHeight,{format:hi,type:ji,depthTexture:new _g(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),m=null,c=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function he(Q){for(let ce=0;ce<Q.removed.length;ce++){const Ee=Q.removed[ce],ye=R.indexOf(Ee);ye>=0&&(R[ye]=null,D[ye].disconnect(Ee))}for(let ce=0;ce<Q.added.length;ce++){const Ee=Q.added[ce];let ye=R.indexOf(Ee);if(ye===-1){for(let Ue=0;Ue<D.length;Ue++)if(Ue>=R.length){R.push(Ee),ye=Ue;break}else if(R[Ue]===null){R[Ue]=Ee,ye=Ue;break}if(ye===-1)break}const Te=D[ye];Te&&Te.connect(Ee)}}const se=new q,me=new q;function V(Q,ce,Ee){se.setFromMatrixPosition(ce.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const ye=se.distanceTo(me),Te=ce.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Qe=Te[14]/(Te[10]-1),Pt=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],It=(Te[9]-1)/Te[5],H=(Te[8]-1)/Te[0],Sn=(Ue[8]+1)/Ue[0],pt=Qe*H,dt=Qe*Sn,Ke=ye/(-H+Sn),Rt=Ke*-H;if(ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Rt),Q.translateZ(Ke),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Te[10]===-1)Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const je=Qe+Ke,P=Pt+Ke,w=pt-Rt,J=dt+(ye-Rt),pe=vt*Pt/P*je,ve=It*Pt/P*je;Q.projectionMatrix.makePerspective(w,J,pe,ve,je,P),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let ce=Q.near,Ee=Q.far;A.texture!==null&&(A.depthNear>0&&(ce=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),T.near=z.near=U.near=ce,T.far=z.far=U.far=Ee,(B!==T.near||ie!==T.far)&&(o.updateRenderState({depthNear:T.near,depthFar:T.far}),B=T.near,ie=T.far),U.layers.mask=Q.layers.mask|2,z.layers.mask=Q.layers.mask|4,T.layers.mask=U.layers.mask|z.layers.mask;const ye=Q.parent,Te=T.cameras;ue(T,ye);for(let Ue=0;Ue<Te.length;Ue++)ue(Te[Ue],ye);Te.length===2?V(T,U,z):T.projectionMatrix.copy(U.projectionMatrix),le(Q,T,ye)};function le(Q,ce,Ee){Ee===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(Ee.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Gd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(y===null&&x===null))return h},this.setFoveation=function(Q){h=Q,y!==null&&(y.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(T)};let N=null;function re(Q,ce){if(g=ce.getViewerPose(m||c),E=ce,g!==null){const Ee=g.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ye=!1;Ee.length!==T.cameras.length&&(T.cameras.length=0,ye=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Qe=Ee[Ue];let Pt=null;if(x!==null)Pt=x.getViewport(Qe);else{const It=_.getViewSubImage(y,Qe);Pt=It.viewport,Ue===0&&(e.setRenderTargetTextures(I,It.colorTexture,y.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(I))}let vt=b[Ue];vt===void 0&&(vt=new ti,vt.layers.enable(Ue),vt.viewport=new qt,b[Ue]=vt),vt.matrix.fromArray(Qe.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Qe.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ue===0&&(T.matrix.copy(vt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),ye===!0&&T.cameras.push(vt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=_.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<D.length;Ee++){const ye=R[Ee],Te=D[Ee];ye!==null&&Te!==void 0&&Te.update(ye,ce,m||c)}N&&N(Q,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const Ne=new wg;Ne.setAnimationLoop(re),this.setAnimationLoop=function(Q){N=Q},this.dispose=function(){}}}const qr=new Ti,i1=new Vt;function r1(s,e){function t(S,v){S.matrixAutoUpdate===!0&&S.updateMatrix(),v.value.copy(S.matrix)}function r(S,v){v.color.getRGB(S.fogColor.value,mg(s)),v.isFog?(S.fogNear.value=v.near,S.fogFar.value=v.far):v.isFogExp2&&(S.fogDensity.value=v.density)}function o(S,v,I,D,R){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(S,v):v.isMeshToonMaterial?(l(S,v),_(S,v)):v.isMeshPhongMaterial?(l(S,v),g(S,v)):v.isMeshStandardMaterial?(l(S,v),y(S,v),v.isMeshPhysicalMaterial&&x(S,v,R)):v.isMeshMatcapMaterial?(l(S,v),E(S,v)):v.isMeshDepthMaterial?l(S,v):v.isMeshDistanceMaterial?(l(S,v),A(S,v)):v.isMeshNormalMaterial?l(S,v):v.isLineBasicMaterial?(c(S,v),v.isLineDashedMaterial&&d(S,v)):v.isPointsMaterial?h(S,v,I,D):v.isSpriteMaterial?m(S,v):v.isShadowMaterial?(S.color.value.copy(v.color),S.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(S,v){S.opacity.value=v.opacity,v.color&&S.diffuse.value.copy(v.color),v.emissive&&S.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.bumpMap&&(S.bumpMap.value=v.bumpMap,t(v.bumpMap,S.bumpMapTransform),S.bumpScale.value=v.bumpScale,v.side===On&&(S.bumpScale.value*=-1)),v.normalMap&&(S.normalMap.value=v.normalMap,t(v.normalMap,S.normalMapTransform),S.normalScale.value.copy(v.normalScale),v.side===On&&S.normalScale.value.negate()),v.displacementMap&&(S.displacementMap.value=v.displacementMap,t(v.displacementMap,S.displacementMapTransform),S.displacementScale.value=v.displacementScale,S.displacementBias.value=v.displacementBias),v.emissiveMap&&(S.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,S.emissiveMapTransform)),v.specularMap&&(S.specularMap.value=v.specularMap,t(v.specularMap,S.specularMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest);const I=e.get(v),D=I.envMap,R=I.envMapRotation;D&&(S.envMap.value=D,qr.copy(R),qr.x*=-1,qr.y*=-1,qr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(i1.makeRotationFromEuler(qr)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=v.reflectivity,S.ior.value=v.ior,S.refractionRatio.value=v.refractionRatio),v.lightMap&&(S.lightMap.value=v.lightMap,S.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,S.lightMapTransform)),v.aoMap&&(S.aoMap.value=v.aoMap,S.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,S.aoMapTransform))}function c(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform))}function d(S,v){S.dashSize.value=v.dashSize,S.totalSize.value=v.dashSize+v.gapSize,S.scale.value=v.scale}function h(S,v,I,D){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.size.value=v.size*I,S.scale.value=D*.5,v.map&&(S.map.value=v.map,t(v.map,S.uvTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function m(S,v){S.diffuse.value.copy(v.color),S.opacity.value=v.opacity,S.rotation.value=v.rotation,v.map&&(S.map.value=v.map,t(v.map,S.mapTransform)),v.alphaMap&&(S.alphaMap.value=v.alphaMap,t(v.alphaMap,S.alphaMapTransform)),v.alphaTest>0&&(S.alphaTest.value=v.alphaTest)}function g(S,v){S.specular.value.copy(v.specular),S.shininess.value=Math.max(v.shininess,1e-4)}function _(S,v){v.gradientMap&&(S.gradientMap.value=v.gradientMap)}function y(S,v){S.metalness.value=v.metalness,v.metalnessMap&&(S.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,S.metalnessMapTransform)),S.roughness.value=v.roughness,v.roughnessMap&&(S.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,S.roughnessMapTransform)),v.envMap&&(S.envMapIntensity.value=v.envMapIntensity)}function x(S,v,I){S.ior.value=v.ior,v.sheen>0&&(S.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),S.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(S.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,S.sheenColorMapTransform)),v.sheenRoughnessMap&&(S.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,S.sheenRoughnessMapTransform))),v.clearcoat>0&&(S.clearcoat.value=v.clearcoat,S.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(S.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,S.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(S.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===On&&S.clearcoatNormalScale.value.negate())),v.dispersion>0&&(S.dispersion.value=v.dispersion),v.iridescence>0&&(S.iridescence.value=v.iridescence,S.iridescenceIOR.value=v.iridescenceIOR,S.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(S.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,S.iridescenceMapTransform)),v.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),v.transmission>0&&(S.transmission.value=v.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),v.transmissionMap&&(S.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,S.transmissionMapTransform)),S.thickness.value=v.thickness,v.thicknessMap&&(S.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=v.attenuationDistance,S.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(S.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(S.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=v.specularIntensity,S.specularColor.value.copy(v.specularColor),v.specularColorMap&&(S.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,S.specularColorMapTransform)),v.specularIntensityMap&&(S.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,v){v.matcap&&(S.matcap.value=v.matcap)}function A(S,v){const I=e.get(v).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function s1(s,e,t,r){let o={},l={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,D){const R=D.program;r.uniformBlockBinding(I,R)}function m(I,D){let R=o[I.id];R===void 0&&(E(I),R=g(I),o[I.id]=R,I.addEventListener("dispose",S));const F=D.program;r.updateUBOMapping(I,F);const k=e.render.frame;l[I.id]!==k&&(y(I),l[I.id]=k)}function g(I){const D=_();I.__bindingPointIndex=D;const R=s.createBuffer(),F=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,F,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,R),R}function _(){for(let I=0;I<d;I++)if(c.indexOf(I)===-1)return c.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const D=o[I.id],R=I.uniforms,F=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let k=0,U=R.length;k<U;k++){const z=Array.isArray(R[k])?R[k]:[R[k]];for(let b=0,T=z.length;b<T;b++){const B=z[b];if(x(B,k,b,F)===!0){const ie=B.__offset,Z=Array.isArray(B.value)?B.value:[B.value];let ae=0;for(let he=0;he<Z.length;he++){const se=Z[he],me=A(se);typeof se=="number"||typeof se=="boolean"?(B.__data[0]=se,s.bufferSubData(s.UNIFORM_BUFFER,ie+ae,B.__data)):se.isMatrix3?(B.__data[0]=se.elements[0],B.__data[1]=se.elements[1],B.__data[2]=se.elements[2],B.__data[3]=0,B.__data[4]=se.elements[3],B.__data[5]=se.elements[4],B.__data[6]=se.elements[5],B.__data[7]=0,B.__data[8]=se.elements[6],B.__data[9]=se.elements[7],B.__data[10]=se.elements[8],B.__data[11]=0):(se.toArray(B.__data,ae),ae+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ie,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(I,D,R,F){const k=I.value,U=D+"_"+R;if(F[U]===void 0)return typeof k=="number"||typeof k=="boolean"?F[U]=k:F[U]=k.clone(),!0;{const z=F[U];if(typeof k=="number"||typeof k=="boolean"){if(z!==k)return F[U]=k,!0}else if(z.equals(k)===!1)return z.copy(k),!0}return!1}function E(I){const D=I.uniforms;let R=0;const F=16;for(let U=0,z=D.length;U<z;U++){const b=Array.isArray(D[U])?D[U]:[D[U]];for(let T=0,B=b.length;T<B;T++){const ie=b[T],Z=Array.isArray(ie.value)?ie.value:[ie.value];for(let ae=0,he=Z.length;ae<he;ae++){const se=Z[ae],me=A(se),V=R%F,ue=V%me.boundary,le=V+ue;R+=ue,le!==0&&F-le<me.storage&&(R+=F-le),ie.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=R,R+=me.storage}}}const k=R%F;return k>0&&(R+=F-k),I.__size=R,I.__cache={},this}function A(I){const D={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(D.boundary=4,D.storage=4):I.isVector2?(D.boundary=8,D.storage=8):I.isVector3||I.isColor?(D.boundary=16,D.storage=12):I.isVector4?(D.boundary=16,D.storage=16):I.isMatrix3?(D.boundary=48,D.storage=48):I.isMatrix4?(D.boundary=64,D.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),D}function S(I){const D=I.target;D.removeEventListener("dispose",S);const R=c.indexOf(D.__bindingPointIndex);c.splice(R,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete l[D.id]}function v(){for(const I in o)s.deleteBuffer(o[I]);c=[],o={},l={}}return{bind:h,update:m,dispose:v}}class a1{constructor(e={}){const{canvas:t=T_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=c;const E=new Uint32Array(4),A=new Int32Array(4);let S=null,v=null;const I=[],D=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Er,this.toneMappingExposure=1;const R=this;let F=!1,k=0,U=0,z=null,b=-1,T=null;const B=new qt,ie=new qt;let Z=null;const ae=new Et(0);let he=0,se=t.width,me=t.height,V=1,ue=null,le=null;const N=new qt(0,0,se,me),re=new qt(0,0,se,me);let Ne=!1;const Q=new rf;let ce=!1,Ee=!1;const ye=new Vt,Te=new Vt,Ue=new q,Qe=new qt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function It(){return z===null?V:1}let H=r;function Sn(C,j){return t.getContext(C,j)}try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),H===null){const j="webgl2";if(H=Sn(j,C),H===null)throw Sn(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,dt,Ke,Rt,je,P,w,J,pe,ve,de,We,Ae,Fe,ct,Me,Be,$e,tt,He,ft,st,bt,X;function Ce(){pt=new mM(H),pt.init(),st=new ZE(H,pt),dt=new uM(H,pt,e,st),Ke=new YE(H,pt),dt.reverseDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),Rt=new _M(H),je=new UE,P=new $E(H,pt,Ke,je,dt,st,Rt),w=new dM(R),J=new pM(R),pe=new Ty(H),bt=new oM(H,pe),ve=new gM(H,pe,Rt,bt),de=new xM(H,ve,pe,Rt),tt=new yM(H,dt,P),Me=new cM(je),We=new NE(R,w,J,pt,dt,bt,Me),Ae=new r1(R,je),Fe=new zE,ct=new WE(pt),$e=new aM(R,w,J,Ke,de,x,h),Be=new qE(R,de,dt),X=new s1(H,Rt,dt,Ke),He=new lM(H,pt,Rt),ft=new vM(H,pt,Rt),Rt.programs=We.programs,R.capabilities=dt,R.extensions=pt,R.properties=je,R.renderLists=Fe,R.shadowMap=Be,R.state=Ke,R.info=Rt}Ce();const oe=new n1(R,H);this.xr=oe,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(C){C!==void 0&&(V=C,this.setSize(se,me,!1))},this.getSize=function(C){return C.set(se,me)},this.setSize=function(C,j,te=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}se=C,me=j,t.width=Math.floor(C*V),t.height=Math.floor(j*V),te===!0&&(t.style.width=C+"px",t.style.height=j+"px"),this.setViewport(0,0,C,j)},this.getDrawingBufferSize=function(C){return C.set(se*V,me*V).floor()},this.setDrawingBufferSize=function(C,j,te){se=C,me=j,V=te,t.width=Math.floor(C*te),t.height=Math.floor(j*te),this.setViewport(0,0,C,j)},this.getCurrentViewport=function(C){return C.copy(B)},this.getViewport=function(C){return C.copy(N)},this.setViewport=function(C,j,te,ne){C.isVector4?N.set(C.x,C.y,C.z,C.w):N.set(C,j,te,ne),Ke.viewport(B.copy(N).multiplyScalar(V).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,j,te,ne){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,j,te,ne),Ke.scissor(ie.copy(re).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(C){Ke.setScissorTest(Ne=C)},this.setOpaqueSort=function(C){ue=C},this.setTransparentSort=function(C){le=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(C=!0,j=!0,te=!0){let ne=0;if(C){let G=!1;if(z!==null){const Se=z.texture.format;G=Se===ef||Se===Qd||Se===Jd}if(G){const Se=z.texture.type,be=Se===ji||Se===es||Se===Wa||Se===Ks||Se===$d||Se===Zd,Ie=$e.getClearColor(),ze=$e.getClearAlpha(),nt=Ie.r,it=Ie.g,qe=Ie.b;be?(E[0]=nt,E[1]=it,E[2]=qe,E[3]=ze,H.clearBufferuiv(H.COLOR,0,E)):(A[0]=nt,A[1]=it,A[2]=qe,A[3]=ze,H.clearBufferiv(H.COLOR,0,A))}else ne|=H.COLOR_BUFFER_BIT}j&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),$e.dispose(),Fe.dispose(),ct.dispose(),je.dispose(),w.dispose(),J.dispose(),de.dispose(),bt.dispose(),X.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ns),oe.removeEventListener("sessionend",Ki),Ai.stop()};function fe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const C=Rt.autoReset,j=Be.enabled,te=Be.autoUpdate,ne=Be.needsUpdate,G=Be.type;Ce(),Rt.autoReset=C,Be.enabled=j,Be.autoUpdate=te,Be.needsUpdate=ne,Be.type=G}function Pe(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const j=C.target;j.removeEventListener("dispose",at),Ft(j)}function Ft(C){Jt(C),je.remove(C)}function Jt(C){const j=je.get(C).programs;j!==void 0&&(j.forEach(function(te){We.releaseProgram(te)}),C.isShaderMaterial&&We.releaseShaderCache(C))}this.renderBufferDirect=function(C,j,te,ne,G,Se){j===null&&(j=Pt);const be=G.isMesh&&G.matrixWorld.determinant()<0,Ie=Ja(C,j,te,ne,G);Ke.setMaterial(ne,be);let ze=te.index,nt=1;if(ne.wireframe===!0){if(ze=ve.getWireframeAttribute(te),ze===void 0)return;nt=2}const it=te.drawRange,qe=te.attributes.position;let ot=it.start*nt,wt=(it.start+it.count)*nt;Se!==null&&(ot=Math.max(ot,Se.start*nt),wt=Math.min(wt,(Se.start+Se.count)*nt)),ze!==null?(ot=Math.max(ot,0),wt=Math.min(wt,ze.count)):qe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,qe.count));const Tt=wt-ot;if(Tt<0||Tt===1/0)return;bt.setup(G,ne,Ie,te,ze);let Bt,yt=He;if(ze!==null&&(Bt=pe.get(ze),yt=ft,yt.setIndex(Bt)),G.isMesh)ne.wireframe===!0?(Ke.setLineWidth(ne.wireframeLinewidth*It()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(G.isLine){let Ye=ne.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*It()),G.isLineSegments?yt.setMode(H.LINES):G.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else G.isPoints?yt.setMode(H.POINTS):G.isSprite&&yt.setMode(H.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)yt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ye=G._multiDrawStarts,Xt=G._multiDrawCounts,_t=G._multiDrawCount,un=ze?pe.get(ze).bytesPerElement:1,ni=je.get(ne).currentProgram.getUniforms();for(let En=0;En<_t;En++)ni.setValue(H,"_gl_DrawID",En),yt.render(Ye[En]/un,Xt[En])}else if(G.isInstancedMesh)yt.renderInstances(ot,Tt,G.count);else if(te.isInstancedBufferGeometry){const Ye=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Xt=Math.min(te.instanceCount,Ye);yt.renderInstances(ot,Tt,Xt)}else yt.render(ot,Tt)};function xt(C,j,te){C.transparent===!0&&C.side===Vi&&C.forceSinglePass===!1?(C.side=On,C.needsUpdate=!0,is(C,j,te),C.side=wr,C.needsUpdate=!0,is(C,j,te),C.side=Vi):is(C,j,te)}this.compile=function(C,j,te=null){te===null&&(te=C),v=ct.get(te),v.init(j),D.push(v),te.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),C!==te&&C.traverseVisible(function(G){G.isLight&&G.layers.test(j.layers)&&(v.pushLight(G),G.castShadow&&v.pushShadow(G))}),v.setupLights();const ne=new Set;return C.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let be=0;be<Se.length;be++){const Ie=Se[be];xt(Ie,te,G),ne.add(Ie)}else xt(Se,te,G),ne.add(Se)}),D.pop(),v=null,ne},this.compileAsync=function(C,j,te=null){const ne=this.compile(C,j,te);return new Promise(G=>{function Se(){if(ne.forEach(function(be){je.get(be).currentProgram.isReady()&&ne.delete(be)}),ne.size===0){G(C);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Dn=null;function Mn(C){Dn&&Dn(C)}function ns(){Ai.stop()}function Ki(){Ai.start()}const Ai=new wg;Ai.setAnimationLoop(Mn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(C){Dn=C,oe.setAnimationLoop(C),C===null?Ai.stop():Ai.start()},oe.addEventListener("sessionstart",ns),oe.addEventListener("sessionend",Ki),this.render=function(C,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(j),j=oe.getCamera()),C.isScene===!0&&C.onBeforeRender(R,C,j,z),v=ct.get(C,D.length),v.init(j),D.push(v),Te.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Q.setFromProjectionMatrix(Te),Ee=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,Ee),S=Fe.get(C,I.length),S.init(),I.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Ci(Se,j,-1/0,R.sortObjects)}Ci(C,j,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(ue,le),vt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,vt&&$e.addToRenderList(S,C),this.info.render.frame++,ce===!0&&Me.beginShadows();const te=v.state.shadowsArray;Be.render(te,C,j),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=S.opaque,G=S.transmissive;if(v.setupLights(),j.isArrayCamera){const Se=j.cameras;if(G.length>0)for(let be=0,Ie=Se.length;be<Ie;be++){const ze=Se[be];Cr(ne,G,C,ze)}vt&&$e.render(C);for(let be=0,Ie=Se.length;be<Ie;be++){const ze=Se[be];Ar(S,C,ze,ze.viewport)}}else G.length>0&&Cr(ne,G,C,j),vt&&$e.render(C),Ar(S,C,j);z!==null&&(P.updateMultisampleRenderTarget(z),P.updateRenderTargetMipmap(z)),C.isScene===!0&&C.onAfterRender(R,C,j),bt.resetDefaultState(),b=-1,T=null,D.pop(),D.length>0?(v=D[D.length-1],ce===!0&&Me.setGlobalState(R.clippingPlanes,v.state.camera)):v=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ci(C,j,te,ne){if(C.visible===!1)return;if(C.layers.test(j.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(j);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Q.intersectsSprite(C)){ne&&Qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Te);const be=de.update(C),Ie=C.material;Ie.visible&&S.push(C,be,Ie,te,Qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Q.intersectsObject(C))){const be=de.update(C),Ie=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Qe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Qe.copy(be.boundingSphere.center)),Qe.applyMatrix4(C.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const ze=be.groups;for(let nt=0,it=ze.length;nt<it;nt++){const qe=ze[nt],ot=Ie[qe.materialIndex];ot&&ot.visible&&S.push(C,be,ot,te,Qe.z,qe)}}else Ie.visible&&S.push(C,be,Ie,te,Qe.z,null)}}const Se=C.children;for(let be=0,Ie=Se.length;be<Ie;be++)Ci(Se[be],j,te,ne)}function Ar(C,j,te,ne){const G=C.opaque,Se=C.transmissive,be=C.transparent;v.setupLightsView(te),ce===!0&&Me.setGlobalState(R.clippingPlanes,te),ne&&Ke.viewport(B.copy(ne)),G.length>0&&Yi(G,j,te),Se.length>0&&Yi(Se,j,te),be.length>0&&Yi(be,j,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Cr(C,j,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ne.id]===void 0&&(v.state.transmissionRenderTarget[ne.id]=new ts(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Xa:ji,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Se=v.state.transmissionRenderTarget[ne.id],be=ne.viewport||B;Se.setSize(be.z,be.w);const Ie=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(ae),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),vt&&$e.render(te);const ze=R.toneMapping;R.toneMapping=Er;const nt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),v.setupLightsView(ne),ce===!0&&Me.setGlobalState(R.clippingPlanes,ne),Yi(C,te,ne),P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let qe=0,ot=j.length;qe<ot;qe++){const wt=j[qe],Tt=wt.object,Bt=wt.geometry,yt=wt.material,Ye=wt.group;if(yt.side===Vi&&Tt.layers.test(ne.layers)){const Xt=yt.side;yt.side=On,yt.needsUpdate=!0,$a(Tt,te,ne,Bt,yt,Ye),yt.side=Xt,yt.needsUpdate=!0,it=!0}}it===!0&&(P.updateMultisampleRenderTarget(Se),P.updateRenderTargetMipmap(Se))}R.setRenderTarget(Ie),R.setClearColor(ae,he),nt!==void 0&&(ne.viewport=nt),R.toneMapping=ze}function Yi(C,j,te){const ne=j.isScene===!0?j.overrideMaterial:null;for(let G=0,Se=C.length;G<Se;G++){const be=C[G],Ie=be.object,ze=be.geometry,nt=ne===null?be.material:ne,it=be.group;Ie.layers.test(te.layers)&&$a(Ie,j,te,ze,nt,it)}}function $a(C,j,te,ne,G,Se){C.onBeforeRender(R,j,te,ne,G,Se),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),G.onBeforeRender(R,j,te,ne,C,Se),G.transparent===!0&&G.side===Vi&&G.forceSinglePass===!1?(G.side=On,G.needsUpdate=!0,R.renderBufferDirect(te,j,ne,G,C,Se),G.side=wr,G.needsUpdate=!0,R.renderBufferDirect(te,j,ne,G,C,Se),G.side=Vi):R.renderBufferDirect(te,j,ne,G,C,Se),C.onAfterRender(R,j,te,ne,G,Se)}function is(C,j,te){j.isScene!==!0&&(j=Pt);const ne=je.get(C),G=v.state.lights,Se=v.state.shadowsArray,be=G.state.version,Ie=We.getParameters(C,G.state,Se,j,te),ze=We.getProgramCacheKey(Ie);let nt=ne.programs;ne.environment=C.isMeshStandardMaterial?j.environment:null,ne.fog=j.fog,ne.envMap=(C.isMeshStandardMaterial?J:w).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?j.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",at),nt=new Map,ne.programs=nt);let it=nt.get(ze);if(it!==void 0){if(ne.currentProgram===it&&ne.lightsStateVersion===be)return gi(C,Ie),it}else Ie.uniforms=We.getUniforms(C),C.onBeforeCompile(Ie,R),it=We.acquireProgram(Ie,ze),nt.set(ze,it),ne.uniforms=Ie.uniforms;const qe=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Me.uniform),gi(C,Ie),ne.needsLights=Bl(C),ne.lightsStateVersion=be,ne.needsLights&&(qe.ambientLightColor.value=G.state.ambient,qe.lightProbe.value=G.state.probe,qe.directionalLights.value=G.state.directional,qe.directionalLightShadows.value=G.state.directionalShadow,qe.spotLights.value=G.state.spot,qe.spotLightShadows.value=G.state.spotShadow,qe.rectAreaLights.value=G.state.rectArea,qe.ltc_1.value=G.state.rectAreaLTC1,qe.ltc_2.value=G.state.rectAreaLTC2,qe.pointLights.value=G.state.point,qe.pointLightShadows.value=G.state.pointShadow,qe.hemisphereLights.value=G.state.hemi,qe.directionalShadowMap.value=G.state.directionalShadowMap,qe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,qe.spotShadowMap.value=G.state.spotShadowMap,qe.spotLightMatrix.value=G.state.spotLightMatrix,qe.spotLightMap.value=G.state.spotLightMap,qe.pointShadowMap.value=G.state.pointShadowMap,qe.pointShadowMatrix.value=G.state.pointShadowMatrix),ne.currentProgram=it,ne.uniformsList=null,it}function Za(C){if(C.uniformsList===null){const j=C.currentProgram.getUniforms();C.uniformsList=Ll.seqWithValue(j.seq,C.uniforms)}return C.uniformsList}function gi(C,j){const te=je.get(C);te.outputColorSpace=j.outputColorSpace,te.batching=j.batching,te.batchingColor=j.batchingColor,te.instancing=j.instancing,te.instancingColor=j.instancingColor,te.instancingMorph=j.instancingMorph,te.skinning=j.skinning,te.morphTargets=j.morphTargets,te.morphNormals=j.morphNormals,te.morphColors=j.morphColors,te.morphTargetsCount=j.morphTargetsCount,te.numClippingPlanes=j.numClippingPlanes,te.numIntersection=j.numClipIntersection,te.vertexAlphas=j.vertexAlphas,te.vertexTangents=j.vertexTangents,te.toneMapping=j.toneMapping}function Ja(C,j,te,ne,G){j.isScene!==!0&&(j=Pt),P.resetTextureUnits();const Se=j.fog,be=ne.isMeshStandardMaterial?j.environment:null,Ie=z===null?R.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:$s,ze=(ne.isMeshStandardMaterial?J:w).get(ne.envMap||be),nt=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,it=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),qe=!!te.morphAttributes.position,ot=!!te.morphAttributes.normal,wt=!!te.morphAttributes.color;let Tt=Er;ne.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Tt=R.toneMapping);const Bt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,yt=Bt!==void 0?Bt.length:0,Ye=je.get(ne),Xt=v.state.lights;if(ce===!0&&(Ee===!0||C!==T)){const Kt=C===T&&ne.id===b;Me.setState(ne,C,Kt)}let _t=!1;ne.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Xt.state.version||Ye.outputColorSpace!==Ie||G.isBatchedMesh&&Ye.batching===!1||!G.isBatchedMesh&&Ye.batching===!0||G.isBatchedMesh&&Ye.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ye.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ye.instancing===!1||!G.isInstancedMesh&&Ye.instancing===!0||G.isSkinnedMesh&&Ye.skinning===!1||!G.isSkinnedMesh&&Ye.skinning===!0||G.isInstancedMesh&&Ye.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ye.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ye.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ye.instancingMorph===!1&&G.morphTexture!==null||Ye.envMap!==ze||ne.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==it||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==wt||Ye.toneMapping!==Tt||Ye.morphTargetsCount!==yt)&&(_t=!0):(_t=!0,Ye.__version=ne.version);let un=Ye.currentProgram;_t===!0&&(un=is(ne,j,G));let ni=!1,En=!1,br=!1;const Dt=un.getUniforms(),wn=Ye.uniforms;if(Ke.useProgram(un.program)&&(ni=!0,En=!0,br=!0),ne.id!==b&&(b=ne.id,En=!0),ni||T!==C){Ke.buffers.depth.getReversed()?(ye.copy(C.projectionMatrix),C_(ye),b_(ye),Dt.setValue(H,"projectionMatrix",ye)):Dt.setValue(H,"projectionMatrix",C.projectionMatrix),Dt.setValue(H,"viewMatrix",C.matrixWorldInverse);const pn=Dt.map.cameraPosition;pn!==void 0&&pn.setValue(H,Ue.setFromMatrixPosition(C.matrixWorld)),dt.logarithmicDepthBuffer&&Dt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Dt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),T!==C&&(T=C,En=!0,br=!0)}if(G.isSkinnedMesh){Dt.setOptional(H,G,"bindMatrix"),Dt.setOptional(H,G,"bindMatrixInverse");const Kt=G.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),Dt.setValue(H,"boneTexture",Kt.boneTexture,P))}G.isBatchedMesh&&(Dt.setOptional(H,G,"batchingTexture"),Dt.setValue(H,"batchingTexture",G._matricesTexture,P),Dt.setOptional(H,G,"batchingIdTexture"),Dt.setValue(H,"batchingIdTexture",G._indirectTexture,P),Dt.setOptional(H,G,"batchingColorTexture"),G._colorsTexture!==null&&Dt.setValue(H,"batchingColorTexture",G._colorsTexture,P));const hn=te.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&tt.update(G,te,un),(En||Ye.receiveShadow!==G.receiveShadow)&&(Ye.receiveShadow=G.receiveShadow,Dt.setValue(H,"receiveShadow",G.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(wn.envMap.value=ze,wn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&j.environment!==null&&(wn.envMapIntensity.value=j.environmentIntensity),En&&(Dt.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&Qa(wn,br),Se&&ne.fog===!0&&Ae.refreshFogUniforms(wn,Se),Ae.refreshMaterialUniforms(wn,ne,V,me,v.state.transmissionRenderTarget[C.id]),Ll.upload(H,Za(Ye),wn,P)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ll.upload(H,Za(Ye),wn,P),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Dt.setValue(H,"center",G.center),Dt.setValue(H,"modelViewMatrix",G.modelViewMatrix),Dt.setValue(H,"normalMatrix",G.normalMatrix),Dt.setValue(H,"modelMatrix",G.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Kt=ne.uniformsGroups;for(let pn=0,Rr=Kt.length;pn<Rr;pn++){const mt=Kt[pn];X.update(mt,un),X.bind(mt,un)}}return un}function Qa(C,j){C.ambientLightColor.needsUpdate=j,C.lightProbe.needsUpdate=j,C.directionalLights.needsUpdate=j,C.directionalLightShadows.needsUpdate=j,C.pointLights.needsUpdate=j,C.pointLightShadows.needsUpdate=j,C.spotLights.needsUpdate=j,C.spotLightShadows.needsUpdate=j,C.rectAreaLights.needsUpdate=j,C.hemisphereLights.needsUpdate=j}function Bl(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(C,j,te){je.get(C.texture).__webglTexture=j,je.get(C.depthTexture).__webglTexture=te;const ne=je.get(C);ne.__hasExternalTextures=!0,ne.__autoAllocateDepthBuffer=te===void 0,ne.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,j){const te=je.get(C);te.__webglFramebuffer=j,te.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(C,j=0,te=0){z=C,k=j,U=te;let ne=!0,G=null,Se=!1,be=!1;if(C){const ze=je.get(C);if(ze.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(H.FRAMEBUFFER,null),ne=!1;else if(ze.__webglFramebuffer===void 0)P.setupRenderTarget(C);else if(ze.__hasExternalTextures)P.rebindTextures(C,je.get(C.texture).__webglTexture,je.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const qe=C.depthTexture;if(ze.__boundDepthTexture!==qe){if(qe!==null&&je.has(qe)&&(C.width!==qe.image.width||C.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const it=je.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[j])?G=it[j][te]:G=it[j],Se=!0):C.samples>0&&P.useMultisampledRTT(C)===!1?G=je.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[te]:G=it,B.copy(C.viewport),ie.copy(C.scissor),Z=C.scissorTest}else B.copy(N).multiplyScalar(V).floor(),ie.copy(re).multiplyScalar(V).floor(),Z=Ne;if(Ke.bindFramebuffer(H.FRAMEBUFFER,G)&&ne&&Ke.drawBuffers(C,G),Ke.viewport(B),Ke.scissor(ie),Ke.setScissorTest(Z),Se){const ze=je.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,te)}else if(be){const ze=je.get(C.texture),nt=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,te||0,nt)}b=-1},this.readRenderTargetPixels=function(C,j,te,ne,G,Se,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){Ke.bindFramebuffer(H.FRAMEBUFFER,Ie);try{const ze=C.texture,nt=ze.format,it=ze.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=C.width-ne&&te>=0&&te<=C.height-G&&H.readPixels(j,te,ne,G,st.convert(nt),st.convert(it),Se)}finally{const ze=z!==null?je.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,j,te,ne,G,Se,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Ie=Ie[be]),Ie){const ze=C.texture,nt=ze.format,it=ze.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(j>=0&&j<=C.width-ne&&te>=0&&te<=C.height-G){Ke.bindFramebuffer(H.FRAMEBUFFER,Ie);const qe=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.bufferData(H.PIXEL_PACK_BUFFER,Se.byteLength,H.STREAM_READ),H.readPixels(j,te,ne,G,st.convert(nt),st.convert(it),0);const ot=z!==null?je.get(z).__webglFramebuffer:null;Ke.bindFramebuffer(H.FRAMEBUFFER,ot);const wt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await A_(H,wt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,qe),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Se),H.deleteBuffer(qe),H.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,j=null,te=0){C.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1]);const ne=Math.pow(2,-te),G=Math.floor(C.image.width*ne),Se=Math.floor(C.image.height*ne),be=j!==null?j.x:0,Ie=j!==null?j.y:0;P.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,be,Ie,G,Se),Ke.unbindTexture()};const eo=H.createFramebuffer(),to=H.createFramebuffer();this.copyTextureToTexture=function(C,j,te=null,ne=null,G=0,Se=null){C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),ne=arguments[0]||null,C=arguments[1],j=arguments[2],Se=arguments[3]||0,te=null),Se===null&&(G!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=G,G=0):Se=0);let be,Ie,ze,nt,it,qe,ot,wt,Tt;const Bt=C.isCompressedTexture?C.mipmaps[Se]:C.image;if(te!==null)be=te.max.x-te.min.x,Ie=te.max.y-te.min.y,ze=te.isBox3?te.max.z-te.min.z:1,nt=te.min.x,it=te.min.y,qe=te.isBox3?te.min.z:0;else{const hn=Math.pow(2,-G);be=Math.floor(Bt.width*hn),Ie=Math.floor(Bt.height*hn),C.isDataArrayTexture?ze=Bt.depth:C.isData3DTexture?ze=Math.floor(Bt.depth*hn):ze=1,nt=0,it=0,qe=0}ne!==null?(ot=ne.x,wt=ne.y,Tt=ne.z):(ot=0,wt=0,Tt=0);const yt=st.convert(j.format),Ye=st.convert(j.type);let Xt;j.isData3DTexture?(P.setTexture3D(j,0),Xt=H.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(P.setTexture2DArray(j,0),Xt=H.TEXTURE_2D_ARRAY):(P.setTexture2D(j,0),Xt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,j.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,j.unpackAlignment);const _t=H.getParameter(H.UNPACK_ROW_LENGTH),un=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ni=H.getParameter(H.UNPACK_SKIP_PIXELS),En=H.getParameter(H.UNPACK_SKIP_ROWS),br=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Bt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Bt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,qe);const Dt=C.isDataArrayTexture||C.isData3DTexture,wn=j.isDataArrayTexture||j.isData3DTexture;if(C.isDepthTexture){const hn=je.get(C),Kt=je.get(j),pn=je.get(hn.__renderTarget),Rr=je.get(Kt.__renderTarget);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let mt=0;mt<ze;mt++)Dt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(C).__webglTexture,G,qe+mt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,je.get(j).__webglTexture,Se,Tt+mt)),H.blitFramebuffer(nt,it,be,Ie,ot,wt,be,Ie,H.DEPTH_BUFFER_BIT,H.NEAREST);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(G!==0||C.isRenderTargetTexture||je.has(C)){const hn=je.get(C),Kt=je.get(j);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,eo),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,to);for(let pn=0;pn<ze;pn++)Dt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,hn.__webglTexture,G,qe+pn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,hn.__webglTexture,G),wn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Kt.__webglTexture,Se,Tt+pn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Kt.__webglTexture,Se),G!==0?H.blitFramebuffer(nt,it,be,Ie,ot,wt,be,Ie,H.COLOR_BUFFER_BIT,H.NEAREST):wn?H.copyTexSubImage3D(Xt,Se,ot,wt,Tt+pn,nt,it,be,Ie):H.copyTexSubImage2D(Xt,Se,ot,wt,nt,it,be,Ie);Ke.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else wn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Xt,Se,ot,wt,Tt,be,Ie,ze,yt,Ye,Bt.data):j.isCompressedArrayTexture?H.compressedTexSubImage3D(Xt,Se,ot,wt,Tt,be,Ie,ze,yt,Bt.data):H.texSubImage3D(Xt,Se,ot,wt,Tt,be,Ie,ze,yt,Ye,Bt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Se,ot,wt,be,Ie,yt,Ye,Bt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Se,ot,wt,Bt.width,Bt.height,yt,Bt.data):H.texSubImage2D(H.TEXTURE_2D,Se,ot,wt,be,Ie,yt,Ye,Bt);H.pixelStorei(H.UNPACK_ROW_LENGTH,_t),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,un),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ni),H.pixelStorei(H.UNPACK_SKIP_ROWS,En),H.pixelStorei(H.UNPACK_SKIP_IMAGES,br),Se===0&&j.generateMipmaps&&H.generateMipmap(Xt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(C,j,te=null,ne=null,G=0){return C.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,ne=arguments[1]||null,C=arguments[2],j=arguments[3],G=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,j,te,ne,G)},this.initRenderTarget=function(C){je.get(C).__webglFramebuffer===void 0&&P.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?P.setTextureCube(C,0):C.isData3DTexture?P.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?P.setTexture2DArray(C,0):P.setTexture2D(C,0),Ke.unbindTexture()},this.resetState=function(){k=0,U=0,z=null,Ke.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function o1({device:s,selectedPartId:e,onSelectPart:t}){const r=kt.useRef(null);return kt.useEffect(()=>{const o=r.current;if(!o)return;const l=o,c=new Z_;c.background=new Et(getComputedStyle(document.documentElement).getPropertyValue("--canvas-bg").trim()||"#f8fafc");const d=new ti(42,1,.1,100);d.position.set(5.1,3.8,7.4);const h=new a1({canvas:l,antialias:!0});h.setPixelRatio(Math.min(window.devicePixelRatio,2));const m=new Ba;c.add(m),c.add(new _y(16777215,6583435,2.2));const g=new Sy(16777215,2.8);g.position.set(5,6,4),c.add(g);const _=l1(s,m),y=new Ey,x=new et;let E=!1,A=0,S=0,v=0;function I(){const z=l.clientWidth,b=l.clientHeight;h.setSize(z,b,!1),d.aspect=z/b,d.updateProjectionMatrix()}function D(z){var B;const b=l.getBoundingClientRect();x.x=(z.clientX-b.left)/b.width*2-1,x.y=-((z.clientY-b.top)/b.height)*2+1,y.setFromCamera(x,d);const T=(B=y.intersectObjects(_,!1)[0])==null?void 0:B.object;T!=null&&T.userData.partId&&t(T.userData.partId)}function R(z){E=!0,A=z.clientX,D(z)}function F(z){E&&(m.rotation.y+=(z.clientX-A)*.01,A=z.clientX)}function k(){E=!1}l.addEventListener("pointerdown",R),l.addEventListener("pointermove",F),window.addEventListener("pointerup",k),window.addEventListener("resize",I);function U(){S+=1;for(const z of _){const b=z.userData.partId===e,T=z.material;T.emissive.set(b?1357990:0),T.emissiveIntensity=b?.35+Math.sin(S*.08)*.08:0}m.rotation.y+=E?0:.0018,h.render(c,d),v=requestAnimationFrame(U)}return I(),U(),()=>{l.removeEventListener("pointerdown",R),l.removeEventListener("pointermove",F),window.removeEventListener("pointerup",k),window.removeEventListener("resize",I),cancelAnimationFrame(v),m.traverse(z=>{var B;const b=z;(B=b.geometry)==null||B.dispose();const T=b.material;Array.isArray(T)?T.forEach(ie=>ie.dispose()):T==null||T.dispose()}),h.dispose()}},[s,t,e]),K.jsx("canvas",{ref:r,className:"device-canvas","aria-label":"interactive 3D teaching model"})}function ta(s,e={}){return new my({color:s,roughness:e.roughness??.48,metalness:e.metalness??.12,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,emissive:e.emissive??0})}function Mt(s,e,t,r,o=1){const l=new Rn(new Qs(r[0],r[1],r[2]),ta(e,{opacity:o}));return l.position.set(...t),l.userData.partId=s,l}function Cn(s,e,t,r,o,l="y",c=1){const d=new Rn(new Fl(r,r,o,64),ta(e,{opacity:c,metalness:.18}));return d.position.set(...t),l==="x"&&(d.rotation.z=Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Oa(s,e,t,r,o,l=1){const c=new Rn(new lf(r,o,24,96),ta(e,{opacity:l,metalness:.16}));return c.position.set(...t),c.rotation.y=Math.PI/2,c.userData.partId=s,c}function nd(s,e,t,r,o=[1,1,1],l=1){const c=new Rn(new of(r,48,24),ta(e,{opacity:l}));return c.position.set(...t),c.scale.set(...o),c.userData.partId=s,c}function Al(s,e,t,r,o,l="y",c=1){const d=new Rn(new af(r,o,64,1,!0),ta(e,{opacity:c}));return d.position.set(...t),l==="x"&&(d.rotation.z=-Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Si(s,e,t,r=.035,o=1){const l=new xg(t.map(d=>new q(...d))),c=new Rn(new uf(l,64,r,12,!1),ta(e,{opacity:o,roughness:.38}));return c.userData.partId=s,c}function ke(s,e,t){e.push(t),s.add(t)}function l1(s,e){const t=[];s.model==="ecg"?(ke(e,t,Mt("screen",988970,[0,1.05,-.52],[2.25,1.08,.12])),ke(e,t,Mt("screen",14412542,[0,.02,0],[2.85,2.32,.8],.9)),ke(e,t,Mt("amplifier",3718648,[-.72,-.25,-.55],[.62,.32,.16])),ke(e,t,Mt("filter",1357990,[.04,-.25,-.55],[.62,.32,.16])),ke(e,t,Mt("adc",16347926,[.76,-.25,-.55],[.46,.32,.16])),ke(e,t,Si("leads",4674921,[[1.22,-.55,-.18],[1.75,-.95,.18],[2.35,-1.15,.05]],.04)),ke(e,t,Si("leads",4674921,[[1.18,-.46,-.2],[1.7,-.35,.2],[2.25,-.7,.45]],.032)),ke(e,t,Cn("electrodes",15680580,[2.45,-1.18,.05],.22,.08,"z")),ke(e,t,Cn("electrodes",16347926,[2.35,-.7,.45],.18,.07,"z"))):s.model==="ct"?(ke(e,t,Oa("gantry",13358561,[0,.35,0],1.55,.32)),ke(e,t,Oa("detectors",3718648,[0,.35,.04],1.12,.08,.82)),ke(e,t,Cn("tube",16347926,[.08,1.78,.02],.22,.7,"z")),ke(e,t,Al("tube",16096779,[.08,1.15,.02],.72,.72,"y",.26)),ke(e,t,Mt("table",9741240,[0,-.72,0],[4.35,.2,.78])),ke(e,t,nd("table",14870768,[-.15,-.45,0],.45,[2.4,.25,.72],.62)),ke(e,t,Mt("console",1120295,[-2.9,.32,-.62],[.78,.82,.18]))):s.model==="ultrasound"?(ke(e,t,Mt("console",14412542,[0,-.18,0],[2.05,1.5,.92])),ke(e,t,Mt("screen",988970,[0,1.35,-.08],[2.08,1.08,.14])),ke(e,t,Mt("console",14870768,[0,.15,-.55],[1.55,.28,.08])),ke(e,t,Si("probe",3359061,[[.86,-.42,.15],[1.35,-.65,.5],[1.95,-.22,.38]],.04)),ke(e,t,Cn("probe",1013358,[2.18,-.2,.28],.26,1.1,"y")),ke(e,t,Mt("crystals",16436245,[2.18,-.82,.28],[.72,.12,.35])),ke(e,t,Al("beam",3718648,[2.18,-1.45,.28],.62,1.3,"y",.24))):s.model==="xray"?(ke(e,t,Mt("detector",14870768,[1.78,0,0],[.22,2.65,2.05])),ke(e,t,Mt("grid",9741240,[1.5,0,0],[.08,2.35,1.78],.76)),ke(e,t,Cn("cathode",3718648,[-2.1,.92,0],.25,.44,"z")),ke(e,t,Cn("anode",16347926,[-1.42,.92,0],.34,.22,"z")),ke(e,t,Cn("collimator",3359061,[-.8,.35,0],.34,.82,"x")),ke(e,t,Al("collimator",16436245,[.25,.18,0],1,2,"x",.18))):s.model==="mri"?(ke(e,t,Oa("bore",13095678,[0,.35,0],1.68,.36)),ke(e,t,Oa("gradients",3718648,[0,.35,-.03],1.28,.08,.86)),ke(e,t,Oa("rfcoil",8141549,[0,.35,.04],.92,.095,.9)),ke(e,t,Cn("bore",14739455,[0,.35,0],.88,1.65,"z",.28)),ke(e,t,Mt("table",9741240,[0,-.78,0],[4.2,.22,.8])),ke(e,t,nd("table",14870768,[-.15,-.52,0],.45,[2.6,.28,.72],.62))):s.model==="ventilator"?(ke(e,t,Mt("screen",988970,[-.25,1.12,-.48],[1.55,.72,.12])),ke(e,t,Mt("blower",14412542,[-.25,-.1,0],[2.1,1.65,.9],.92)),ke(e,t,Cn("blower",3718648,[-.9,-.2,-.55],.32,.18,"z")),ke(e,t,Mt("sensors",16347926,[.72,-.2,-.55],[.58,.28,.16])),ke(e,t,Si("tubing",1357990,[[.88,-.25,-.2],[1.55,-.4,.45],[2.05,-.9,.28],[2.55,-.82,.04]],.06,.78)),ke(e,t,nd("tubing",14870768,[2.7,-.82,.02],.28,[1.25,.55,.75],.55))):s.model==="defib"?(ke(e,t,Mt("screen",988970,[-.42,.84,-.52],[1.28,.62,.12])),ke(e,t,Mt("charger",14870768,[0,0,0],[2.25,1.75,.85],.94)),ke(e,t,Mt("capacitor",16347926,[.68,-.15,-.55],[.52,.72,.18])),ke(e,t,Cn("capacitor",16096779,[.05,-.26,-.55],.22,.46,"z")),ke(e,t,Si("pads",4674921,[[.72,-.55,-.25],[1.38,-.92,.24],[2.08,-1.1,.04]],.042)),ke(e,t,Si("pads",4674921,[[.45,-.54,-.28],[1.18,-.62,.52],[1.9,-.42,.6]],.042)),ke(e,t,Mt("pads",15680580,[2.18,-1.12,.04],[.55,.18,.42])),ke(e,t,Mt("pads",3718648,[2,-.42,.6],[.48,.16,.36]))):s.model==="dialysis"?(ke(e,t,Mt("screen",988970,[-.42,1.2,-.5],[1.32,.68,.12])),ke(e,t,Mt("sensors",14870768,[0,.05,0],[2.2,2.15,.82],.92)),ke(e,t,Cn("pump",1013358,[-.72,.05,-.56],.42,.2,"z")),ke(e,t,Cn("dialyzer",3718648,[.85,-.1,-.55],.2,1.1,"y",.85)),ke(e,t,Si("pump",15680580,[[-1.15,-.1,-.5],[-.72,-.52,-.58],[.85,-.72,-.55],[1.35,-.25,-.5]],.045)),ke(e,t,Si("dialyzer",1357990,[[.85,.5,-.55],[1.28,.72,-.25],[1.52,.3,.35]],.04)),ke(e,t,Mt("sensors",16347926,[-.35,-.82,-.55],[.52,.22,.16]))):s.model==="endoscope"?(ke(e,t,Cn("handle",14412542,[-1.12,-.12,0],.34,1.35,"y",.95)),ke(e,t,Mt("processor",988970,[-1.12,.78,-.28],[.82,.38,.12])),ke(e,t,Si("sensor",3359061,[[-.85,-.42,.12],[-.12,-.72,.34],[.8,-.6,.18],[1.7,-.28,.05]],.065)),ke(e,t,Cn("sensor",3718648,[1.88,-.22,.04],.16,.16,"x")),ke(e,t,Al("light",16436245,[2.26,-.22,.04],.52,.78,"x",.22)),ke(e,t,Mt("light",16347926,[-.95,-.72,-.26],[.42,.22,.16])),ke(e,t,Mt("processor",14870768,[-2.1,.1,-.36],[.95,.68,.18]))):(ke(e,t,Mt("screen",1120295,[0,.95,-.5],[1.35,.58,.12])),ke(e,t,Mt("cassette",14412542,[-.2,-.05,-.52],[1.25,.85,.16])),ke(e,t,Si("cassette",3718648,[[-1.1,-.58,-.52],[-.38,-.25,-.62],[.5,-.42,-.55]],.035)),ke(e,t,Cn("motor",1013358,[.72,-.82,0],.32,.5,"z")),ke(e,t,Mt("pressure",16347926,[-.9,-.76,-.35],[.45,.28,.18])),ke(e,t,Mt("screen",14870768,[0,0,0],[2,2.45,.75],.92)));const r=Mt("__base",13358561,[0,-1.95,0],[4.8,.08,2.4]);return r.userData.partId=void 0,e.add(r),t}function Ut(s,e){return s[e]}const id=[{id:"ecg",name:{en:"ECG Monitor",de:"EKG-Monitor"},category:{en:"Bioelectric Signals",de:"Bioelektrische Signale"},short:{en:"Records heart electrical activity through electrodes, amplification, filtering, and display.",de:"Misst elektrische Herzaktivitaet mit Elektroden, Verstaerkung, Filterung und Anzeige."},model:"ecg",overview:{en:"An ECG monitor measures very small voltage differences on the skin. The interesting engineering part is the signal chain: electrode contact, protection, differential amplification, filtering, analog-to-digital conversion, and display.",de:"Ein EKG-Monitor misst sehr kleine Spannungsunterschiede auf der Haut. Technisch spannend ist die Signalkette: Elektrodenkontakt, Schutzschaltung, Differenzverstaerkung, Filterung, Analog-Digital-Wandlung und Anzeige."},workflow:[{en:"Electrodes convert ionic body currents into measurable electronic potentials.",de:"Elektroden wandeln ionische Koerperstroeme in messbare elektrische Potentiale um."},{en:"A protection stage limits dangerous currents and protects the amplifier input.",de:"Eine Schutzstufe begrenzt gefaehrliche Stroeme und schuetzt den Verstaerkereingang."},{en:"An instrumentation amplifier boosts the differential signal while rejecting common-mode noise.",de:"Ein Instrumentenverstaerker verstaerkt das Differenzsignal und unterdrueckt Gleichtaktstoerungen."},{en:"Filters reduce baseline drift, muscle noise, and mains interference before peak detection.",de:"Filter reduzieren Basisliniendrift, Muskelrauschen und Netzstoerungen vor der Peak-Erkennung."}],deepDive:[{title:{en:"Body-to-electrode interface",de:"Koerper-Elektroden-Uebergang"},body:{en:"The heart creates ionic currents in tissue, but the monitor measures electronic voltage at the skin. The gel and metal electrode form a half-cell interface with impedance, offset voltage, capacitance, motion artifacts, and thermal noise. That is why preparation, contact area, and shielding matter before any software filtering can help.",de:"Das Herz erzeugt ionische Stroeme im Gewebe, der Monitor misst aber eine elektronische Spannung an der Haut. Gel und Metallelektrode bilden eine Halbzellen-Grenzflaeche mit Impedanz, Offsetspannung, Kapazitaet, Bewegungsartefakten und thermischem Rauschen. Deshalb sind Vorbereitung, Kontaktflaeche und Schirmung wichtig, bevor Softwarefilter helfen koennen."}},{title:{en:"Analog front end",de:"Analoge Eingangsstufe"},body:{en:"A protection network limits patient current and amplifier input stress. The instrumentation amplifier then amplifies only the difference between electrodes while rejecting common-mode mains pickup. Important electrotechnics ideas are input impedance, CMRR, driven-right-leg feedback, saturation recovery, isolation, and leakage-current safety.",de:"Eine Schutzschaltung begrenzt Patientstrom und Eingangsstress am Verstaerker. Der Instrumentenverstaerker verstaerkt danach nur die Differenz zwischen Elektroden und unterdrueckt Gleichtaktstoerungen vom Netz. Wichtig sind Eingangsimpedanz, CMRR, Driven-Right-Leg-Rueckkopplung, Saettigungsrueckkehr, Isolation und Ableitstromsicherheit."}},{title:{en:"Filtering and reading",de:"Filterung und Auswertung"},body:{en:"Typical ECG processing combines a high-pass filter for baseline wander, a low-pass filter for muscle noise, and sometimes a 50/60 Hz notch for mains interference. The ADC must sample fast enough to keep QRS shape. Software then finds R peaks, estimates heart rate, and must avoid changing clinically meaningful waveform timing.",de:"Typische EKG-Verarbeitung kombiniert Hochpass gegen Basisliniendrift, Tiefpass gegen Muskelrauschen und manchmal einen 50/60-Hz-Kerbfilter gegen Netzstoerung. Der ADC muss schnell genug abtasten, damit die QRS-Form erhalten bleibt. Software findet danach R-Zacken, schaetzt die Herzfrequenz und darf medizinisch relevante Zeitformen nicht verfaelschen."}}],parts:[{id:"electrodes",name:{en:"Electrodes",de:"Elektroden"},function:{en:"Pick up tiny bioelectric potentials from the skin.",de:"Nehmen sehr kleine bioelektrische Potentiale von der Haut auf."},details:{en:"Bad electrode contact increases impedance and creates noise or baseline drift.",de:"Schlechter Elektrodenkontakt erhoeht die Impedanz und erzeugt Rauschen oder Basisliniendrift."},electrotechnics:{en:"Think of the electrode-skin interface as a noisy high-impedance source with contact capacitance.",de:"Die Elektroden-Haut-Stelle kann man als rauschende hochohmige Quelle mit Kontaktkapazitaet betrachten."}},{id:"leads",name:{en:"Lead Cable",de:"Ableitungskabel"},function:{en:"Transfers the low-level signal to the monitor.",de:"Uebertraegt das schwache Signal zum Monitor."},details:{en:"Cable motion can introduce artifacts, so shielding and strain relief matter.",de:"Kabelbewegung kann Artefakte erzeugen, deshalb sind Schirmung und Zugentlastung wichtig."},electrotechnics:{en:"Twisted/shielded leads reduce electromagnetic pickup from mains and nearby devices.",de:"Verdrillte oder geschirmte Leitungen reduzieren elektromagnetische Einkopplung von Netz und Geraeten."}},{id:"amplifier",name:{en:"Instrumentation Amplifier",de:"Instrumentenverstaerker"},function:{en:"Amplifies the voltage difference between electrodes.",de:"Verstaerkt die Spannungsdifferenz zwischen Elektroden."},details:{en:"High CMRR is needed because common-mode noise is often larger than the ECG itself.",de:"Hohe Gleichtaktunterdrueckung ist wichtig, weil Stoerungen oft groesser sind als das EKG-Signal."},electrotechnics:{en:"Key concepts: differential gain, input impedance, CMRR, saturation, and patient isolation.",de:"Wichtige Begriffe: Differenzverstaerkung, Eingangsimpedanz, CMRR, Saettigung und Patientenisolation."}},{id:"filter",name:{en:"Filter Stage",de:"Filterstufe"},function:{en:"Reduces drift and noise without destroying useful waveform shape.",de:"Reduziert Drift und Rauschen, ohne die Nutzform der Kurve zu zerstoeren."},details:{en:"Filters must be chosen carefully because over-filtering can change medically relevant shapes.",de:"Filter muessen vorsichtig gewaehlt werden, weil zu starke Filter wichtige Kurvenformen veraendern koennen."},electrotechnics:{en:"This connects directly to RC filters, cutoff frequency, phase shift, and notch filtering.",de:"Das passt direkt zu RC-Filtern, Grenzfrequenz, Phasenverschiebung und Kerbfiltern."}},{id:"adc",name:{en:"ADC",de:"ADC"},function:{en:"Converts the analog ECG into digital samples.",de:"Wandelt das analoge EKG in digitale Abtastwerte um."},details:{en:"Sampling rate and resolution decide how much signal detail is preserved.",de:"Abtastrate und Aufloesung bestimmen, wie viele Signaldetails erhalten bleiben."},electrotechnics:{en:"Links to sampling theorem, quantization, aliasing, reference voltage, and ADC resolution.",de:"Verbindung zu Abtasttheorem, Quantisierung, Aliasing, Referenzspannung und ADC-Aufloesung."}},{id:"screen",name:{en:"Display",de:"Anzeige"},function:{en:"Shows waveform, heart-rate estimate, and educational warnings.",de:"Zeigt Kurve, Herzfrequenzschaetzung und Lernhinweise an."},details:{en:"The display is the interface, not the measurement source.",de:"Die Anzeige ist die Schnittstelle, nicht die Messquelle."},electrotechnics:{en:"Connects measurement electronics to software, UI design, and alarm logic.",de:"Verbindet Messelektronik mit Software, Bedienoberflaeche und Alarmlogik."}}],demo:{title:{en:"Noisy ECG filtering",de:"EKG-Rauschfilterung"},beforeLabel:{en:"Raw noisy ECG",de:"Rohes verrauschtes EKG"},afterLabel:{en:"Filtered ECG",de:"Gefiltertes EKG"},explanation:{en:"Filtering can make R peaks easier to find. The teaching point is the tradeoff: less noise, but possible waveform distortion if the filter is too aggressive.",de:"Filterung kann R-Zacken leichter erkennbar machen. Der Lernpunkt ist der Kompromiss: weniger Rauschen, aber moegliche Signalverzerrung bei zu starker Filterung."},filters:[{en:"Baseline correction",de:"Basislinienkorrektur"},{en:"Notch filter",de:"Kerbfilter"},{en:"R-peak detection",de:"R-Zacken-Erkennung"}],clipSteps:[{en:"Electrode senses voltage",de:"Elektrode misst Spannung"},{en:"Amplifier boosts signal",de:"Verstaerker hebt Signal an"},{en:"Filter removes noise",de:"Filter entfernt Stoerungen"},{en:"Screen shows ECG",de:"Anzeige zeigt EKG"}]}},{id:"ct",name:{en:"CT Scanner",de:"CT-Scanner"},category:{en:"Tomographic Imaging",de:"Tomographische Bildgebung"},short:{en:"Rotating X-ray source and detector ring reconstruct slice images.",de:"Rotierende Roentgenquelle und Detektorring rekonstruieren Schnittbilder."},model:"ct",overview:{en:"A CT scanner collects many X-ray projections from different angles. Reconstruction software calculates slice images from those projections.",de:"Ein CT sammelt viele Roentgenprojektionen aus verschiedenen Winkeln. Rekonstruktionssoftware berechnet daraus Schnittbilder."},workflow:[{en:"The table positions the scanned object inside the gantry.",de:"Der Tisch positioniert das Objekt in der Gantry."},{en:"The tube and detector array rotate around the object.",de:"Roentgenroehre und Detektorarray rotieren um das Objekt."},{en:"Detector electronics convert radiation intensity into digital projection data.",de:"Detektorelektronik wandelt Strahlungsintensitaet in digitale Projektionsdaten um."},{en:"Reconstruction and windowing turn the data into readable slices.",de:"Rekonstruktion und Fensterung machen daraus lesbare Schnittbilder."}],deepDive:[{title:{en:"High-voltage generation",de:"Hochspannungserzeugung"},body:{en:"The tube needs tens to more than one hundred kilovolts. Power electronics rectify, switch, transform, and regulate that voltage while controlling tube current. kVp changes photon energy and penetration; mA and exposure time change photon count, noise, dose, and heat load.",de:"Die Roehre braucht mehrere zehn bis ueber hundert Kilovolt. Leistungselektronik richtet gleich, schaltet, transformiert und regelt diese Spannung und steuert den Roehrenstrom. kVp veraendert Photonenenergie und Durchdringung; mA und Belichtungszeit veraendern Photonenzahl, Rauschen, Dosis und Waermelast."}},{title:{en:"Projection signal chain",de:"Projektions-Signalkette"},body:{en:"Each detector element converts X-ray intensity into charge or current, often through scintillator light and photodiodes. The small signals are integrated, amplified, multiplexed, digitized, dark-corrected, gain-corrected, and logged against angle so reconstruction software can use consistent projection data.",de:"Jedes Detektorelement wandelt Roentgenintensitaet in Ladung oder Strom, oft ueber Szintillatorlicht und Photodioden. Die kleinen Signale werden integriert, verstaerkt, multiplexed, digitalisiert, dunkelstromkorrigiert, gain-korrigiert und dem Winkel zugeordnet, damit die Rekonstruktion konsistente Projektionsdaten bekommt."}},{title:{en:"Reconstruction and filtering",de:"Rekonstruktion und Filter"},body:{en:"The scanner measures attenuation from many angles. Filtered backprojection or iterative reconstruction estimates voxel values. Then kernels, denoising, metal artifact reduction, and window/level mapping make bone, soft tissue, or lung structures readable without pretending the raw detector data is already an image.",de:"Der Scanner misst Abschwaechung aus vielen Winkeln. Gefilterte Rueckprojektion oder iterative Rekonstruktion schaetzt Voxelwerte. Danach machen Faltungskerne, Rauschminderung, Metallartefaktreduktion und Fenster/Lage-Abbildung Knochen, Weichteil oder Lunge lesbar, ohne dass Rohdaten schon ein fertiges Bild waeren."}}],parts:[{id:"gantry",name:{en:"Gantry",de:"Gantry"},function:{en:"Holds the rotating imaging system.",de:"Traegt das rotierende Bildgebungssystem."},details:{en:"The large ring includes mechanics, tube, detector, cooling, and power paths.",de:"Der Ring enthaelt Mechanik, Roehre, Detektor, Kuehlung und Leistungswege."},electrotechnics:{en:"Slip rings transfer power and data to rotating electronics.",de:"Schleifringe uebertragen Leistung und Daten auf rotierende Elektronik."}},{id:"tube",name:{en:"X-ray Tube",de:"Roentgenroehre"},function:{en:"Produces X-rays using high voltage.",de:"Erzeugt Roentgenstrahlung mit Hochspannung."},details:{en:"Tube voltage affects penetration; current affects photon quantity and noise.",de:"Roehrenspannung beeinflusst Durchdringung; Strom beeinflusst Photonenmenge und Rauschen."},electrotechnics:{en:"Links to high-voltage generation, power electronics, heat, and insulation.",de:"Bezug zu Hochspannungserzeugung, Leistungselektronik, Waerme und Isolation."}},{id:"detectors",name:{en:"Detector Array",de:"Detektorarray"},function:{en:"Measures transmitted radiation.",de:"Misst die durchgelassene Strahlung."},details:{en:"Scintillators and photodiodes convert radiation into electrical signals.",de:"Szintillatoren und Photodioden wandeln Strahlung in elektrische Signale um."},electrotechnics:{en:"Photodiode current, amplification, ADCs, and noise are central concepts.",de:"Photodiodenstrom, Verstaerkung, ADCs und Rauschen sind zentrale Konzepte."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Moves precisely through the scan plane.",de:"Bewegt sich praezise durch die Scanebene."},details:{en:"Motion accuracy affects slice position and scan coverage.",de:"Bewegungsgenauigkeit beeinflusst Schichtposition und Scanbereich."},electrotechnics:{en:"Uses motor control, encoders, limit switches, and safety interlocks.",de:"Nutzt Motorregelung, Encoder, Endschalter und Sicherheitsverriegelungen."}},{id:"console",name:{en:"Operator Console",de:"Bedienkonsole"},function:{en:"Controls protocol and image review.",de:"Steuert Protokoll und Bildanzeige."},details:{en:"Operators choose acquisition settings and view reconstructed slices.",de:"Bedienende waehlen Aufnahmeparameter und betrachten rekonstruierte Schichten."},electrotechnics:{en:"Software coordinates timing, exposure control, and data transfer.",de:"Software koordiniert Timing, Belichtungssteuerung und Datenuebertragung."}}],demo:{title:{en:"CT reconstruction and windowing",de:"CT-Rekonstruktion und Fensterung"},beforeLabel:{en:"Low contrast slice",de:"Kontrastarmes Schnittbild"},afterLabel:{en:"Windowed slice",de:"Gefenstertes Schnittbild"},explanation:{en:"Windowing maps a useful intensity range into visible grayscale, making selected structures easier to see.",de:"Fensterung bildet einen nuetzlichen Intensitaetsbereich auf sichtbare Graustufen ab."},filters:[{en:"Reconstruction",de:"Rekonstruktion"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Window/level",de:"Fenster/Lage"}],clipSteps:[{en:"Tube rotates",de:"Roehre rotiert"},{en:"Detector measures",de:"Detektor misst"},{en:"Computer reconstructs",de:"Computer rekonstruiert"},{en:"Image is windowed",de:"Bild wird gefenstert"}]}},{id:"ultrasound",name:{en:"Ultrasound System",de:"Ultraschallsystem"},category:{en:"Acoustic Imaging",de:"Akustische Bildgebung"},short:{en:"Sends sound pulses and listens for echoes to build live images.",de:"Sendet Schallimpulse und erzeugt aus Echos Live-Bilder."},model:"ultrasound",overview:{en:"Ultrasound uses piezoelectric elements to send and receive high-frequency sound. Echo timing gives depth, and echo strength gives brightness.",de:"Ultraschall nutzt piezoelektrische Elemente zum Senden und Empfangen von Hochfrequenzschall. Echozeit ergibt Tiefe, Echostaerke ergibt Helligkeit."},workflow:[{en:"A voltage pulse excites piezoelectric crystals.",de:"Ein Spannungspuls regt piezoelektrische Kristalle an."},{en:"Sound travels into tissue and reflects at boundaries.",de:"Schall laeuft ins Gewebe und reflektiert an Grenzflaechen."},{en:"Returned echoes are amplified and time-measured.",de:"Rueckkehrende Echos werden verstaerkt und zeitlich gemessen."},{en:"Beamforming and filtering create the image.",de:"Beamforming und Filterung erzeugen das Bild."}],deepDive:[{title:{en:"Piezoelectric conversion",de:"Piezoelektrische Wandlung"},body:{en:"A pulser applies a short high-voltage pulse to piezo elements. Their crystal structure changes thickness and launches an acoustic pulse. Returning pressure waves deform the same elements and create small voltages, so the probe rapidly switches between transmit protection and low-noise receive electronics.",de:"Ein Pulser legt einen kurzen Hochspannungspuls an Piezoelemente. Ihre Kristallstruktur aendert die Dicke und sendet einen akustischen Puls aus. Zurueckkehrende Druckwellen verformen dieselben Elemente und erzeugen kleine Spannungen, daher schaltet die Sonde schnell zwischen Sendeschutz und rauscharmem Empfang um."}},{title:{en:"Depth and beamforming",de:"Tiefe und Beamforming"},body:{en:"Echo delay gives depth because sound speed in tissue is approximately known. Array probes steer and focus beams by delaying channels. On receive, the system aligns channel delays before summing, which increases signals from the focus and suppresses off-axis echoes.",de:"Die Echo-Laufzeit ergibt Tiefe, weil die Schallgeschwindigkeit im Gewebe ungefaehr bekannt ist. Array-Sonden lenken und fokussieren Strahlen durch Kanalverzoegerungen. Beim Empfang richtet das System die Kanalverzoegerungen vor der Summe aus, wodurch Signale aus dem Fokus staerker und seitliche Echos schwaecher werden."}},{title:{en:"Image cleanup",de:"Bildaufbereitung"},body:{en:"The raw echo data passes through time-gain compensation, bandpass filtering, envelope detection, log compression, speckle reduction, edge-preserving smoothing, and scan conversion. These steps turn echo amplitude into a readable B-mode image while preserving small structures.",de:"Die Roh-Echodaten laufen durch tiefenabhaengige Verstaerkung, Bandpassfilter, Huellkurvendetektion, Log-Kompression, Speckle-Reduktion, kantenerhaltende Glaettung und Scan-Konvertierung. So wird Echoamplitude zu einem lesbaren B-Mode-Bild, ohne kleine Strukturen zu stark zu verlieren."}}],parts:[{id:"probe",name:{en:"Probe Housing",de:"Sondengehaeuse"},function:{en:"Holds the transducer array and is handled by the user.",de:"Enthaelt das Wandlerarray und wird von der Person gefuehrt."},details:{en:"Probe shape controls imaging access and field of view.",de:"Sondenform beeinflusst Zugang und Sichtfeld."},electrotechnics:{en:"Cable shielding and impedance matching matter at high frequencies.",de:"Kabelschirmung und Impedanzanpassung sind bei hohen Frequenzen wichtig."}},{id:"crystals",name:{en:"Piezo Elements",de:"Piezoelemente"},function:{en:"Convert voltage into sound and returning sound into voltage.",de:"Wandeln Spannung in Schall und Echo-Schall in Spannung um."},details:{en:"The same element can transmit and receive.",de:"Dasselbe Element kann senden und empfangen."},electrotechnics:{en:"A piezo element behaves like an electromechanical resonator with capacitance.",de:"Ein Piezoelement verhaelt sich wie ein elektromechanischer Resonator mit Kapazitaet."}},{id:"beam",name:{en:"Ultrasound Beam",de:"Ultraschallstrahl"},function:{en:"Carries acoustic energy into the tissue.",de:"Transportiert akustische Energie ins Gewebe."},details:{en:"Focusing changes resolution and penetration.",de:"Fokussierung veraendert Aufloesung und Eindringtiefe."},electrotechnics:{en:"Beam steering uses phase delays between array elements.",de:"Strahllenkung nutzt Phasenverzoegerungen zwischen Array-Elementen."}},{id:"console",name:{en:"Console Electronics",de:"Konsolenelektronik"},function:{en:"Controls transmit pulses, receive gain, and processing.",de:"Steuert Sendepulse, Empfangsverstaerkung und Verarbeitung."},details:{en:"Gain, depth, focus, and dynamic range change the displayed image.",de:"Gain, Tiefe, Fokus und Dynamikbereich veraendern das Bild."},electrotechnics:{en:"Needs pulser circuits, low-noise amplifiers, ADCs, and digital beamforming.",de:"Braucht Pulser-Schaltungen, rauscharme Verstaerker, ADCs und digitales Beamforming."}},{id:"screen",name:{en:"Image Display",de:"Bildanzeige"},function:{en:"Shows B-mode, M-mode, or Doppler information.",de:"Zeigt B-Mode, M-Mode oder Dopplerinformationen."},details:{en:"The image is a processed map of echoes, not a photo.",de:"Das Bild ist eine verarbeitete Echokarte, kein Foto."},electrotechnics:{en:"Display pipeline includes frame memory, image mapping, and UI controls.",de:"Die Anzeige nutzt Bildspeicher, Bildabbildung und UI-Steuerung."}}],demo:{title:{en:"Speckle reduction",de:"Speckle-Reduktion"},beforeLabel:{en:"Speckled image",de:"Speckle-Bild"},afterLabel:{en:"Smoothed image",de:"Geglaettetes Bild"},explanation:{en:"Filtering can reduce speckle and improve readability, but too much smoothing hides small structures.",de:"Filterung kann Speckle reduzieren, aber zu starke Glaettung verdeckt kleine Strukturen."},filters:[{en:"Gain correction",de:"Gain-Korrektur"},{en:"Speckle smoothing",de:"Speckle-Glaettung"},{en:"Edge preserving",de:"Kantenerhalt"}],clipSteps:[{en:"Pulse sent",de:"Puls gesendet"},{en:"Echo returns",de:"Echo kommt zurueck"},{en:"Signal amplified",de:"Signal verstaerkt"},{en:"Image formed",de:"Bild entsteht"}]}},{id:"xray",name:{en:"X-ray System",de:"Roentgensystem"},category:{en:"Projection Imaging",de:"Projektionsbildgebung"},short:{en:"Projects X-rays through an object onto a digital detector.",de:"Projiziert Roentgenstrahlung durch ein Objekt auf einen digitalen Detektor."},model:"xray",overview:{en:"X-ray imaging creates a 2D projection. Dense material absorbs more radiation and changes detector intensity.",de:"Roentgenbildgebung erzeugt eine 2D-Projektion. Dichtes Material absorbiert mehr Strahlung und veraendert die Detektorintensitaet."},workflow:[{en:"High voltage accelerates electrons in the tube.",de:"Hochspannung beschleunigt Elektronen in der Roehre."},{en:"The anode converts electron energy into X-rays and heat.",de:"Die Anode wandelt Elektronenenergie in Roentgenstrahlung und Waerme um."},{en:"The collimator shapes the beam.",de:"Der Kollimator formt den Strahl."},{en:"The detector converts radiation into pixel data.",de:"Der Detektor wandelt Strahlung in Pixeldaten um."}],deepDive:[{title:{en:"Tube physics",de:"Roehrenphysik"},body:{en:"The cathode filament heats until electrons leave the metal. A high electric field accelerates them toward the anode. When electrons decelerate in the target, bremsstrahlung and characteristic X-rays are produced, but most energy becomes heat, so power timing and cooling are central design limits.",de:"Das Kathodenfilament heizt, bis Elektronen das Metall verlassen. Ein starkes elektrisches Feld beschleunigt sie zur Anode. Beim Abbremsen im Target entstehen Bremsstrahlung und charakteristische Roentgenstrahlung, aber der groesste Teil wird Waerme. Deshalb begrenzen Leistungstiming und Kuehlung das Design."}},{title:{en:"Detector readout",de:"Detektorauslesung"},body:{en:"Indirect flat panels convert X-rays to light in a scintillator and then to charge in photodiodes. Direct panels convert X-rays straight into charge. Pixel switches read rows into amplifiers and ADCs; offset correction, bad-pixel maps, gain calibration, and lag correction make the image stable.",de:"Indirekte Flachdetektoren wandeln Roentgenstrahlen im Szintillator in Licht und danach in Photodiodenladung. Direkte Detektoren wandeln direkt in Ladung. Pixelschalter lesen Zeilen in Verstaerker und ADCs; Offsetkorrektur, Bad-Pixel-Karten, Gain-Kalibrierung und Lag-Korrektur stabilisieren das Bild."}},{title:{en:"Contrast and noise",de:"Kontrast und Rauschen"},body:{en:"Collimation reduces unnecessary field size and scatter. Anti-scatter grids improve contrast but absorb useful photons too. Processing often applies flat-field correction, contrast stretching, noise-aware smoothing, and sharpening, always balancing visibility against dose and artifacts.",de:"Kollimation reduziert unnoetige Feldgroesse und Streustrahlung. Streustrahlenraster verbessern Kontrast, schlucken aber auch Nutzphotonen. Die Verarbeitung nutzt oft Flat-Field-Korrektur, Kontraststreckung, rauschbewusste Glaettung und Schaerfung, immer im Kompromiss zwischen Sichtbarkeit, Dosis und Artefakten."}}],parts:[{id:"cathode",name:{en:"Cathode",de:"Kathode"},function:{en:"Emits electrons by heating a filament.",de:"Emittiert Elektronen durch Erhitzen eines Filaments."},details:{en:"Tube current depends strongly on electron emission.",de:"Der Roehrenstrom haengt stark von der Elektronenemission ab."},electrotechnics:{en:"Links to thermionic emission, filament current, and high-voltage safety.",de:"Bezug zu Gluemission, Heizstrom und Hochspannungssicherheit."}},{id:"anode",name:{en:"Anode",de:"Anode"},function:{en:"Target hit by electrons to generate X-rays.",de:"Ziel, auf das Elektronen treffen und Roentgenstrahlung erzeugen."},details:{en:"Most energy becomes heat, so cooling is important.",de:"Der groesste Teil wird Waerme, daher ist Kuehlung wichtig."},electrotechnics:{en:"Power, heat load, and insulation are major engineering issues.",de:"Leistung, Waermelast und Isolation sind wichtige technische Themen."}},{id:"collimator",name:{en:"Collimator",de:"Kollimator"},function:{en:"Limits the beam area.",de:"Begrenzt die Strahlflaeche."},details:{en:"Good collimation reduces scatter and unnecessary exposure.",de:"Gute Kollimation reduziert Streustrahlung und unnoetige Exposition."},electrotechnics:{en:"Motorized shutters use position sensing and interlocks.",de:"Motorisierte Blenden nutzen Positionssensoren und Verriegelungen."}},{id:"detector",name:{en:"Detector Panel",de:"Detektorplatte"},function:{en:"Captures the X-ray projection.",de:"Erfasst die Roentgenprojektion."},details:{en:"Digital detectors use scintillators or direct conversion layers.",de:"Digitale Detektoren nutzen Szintillatoren oder direkte Wandlerschichten."},electrotechnics:{en:"Pixel electronics, charge readout, ADCs, and calibration are key topics.",de:"Pixelelektronik, Ladungsauslese, ADCs und Kalibrierung sind zentrale Themen."}},{id:"grid",name:{en:"Anti-scatter Grid",de:"Streustrahlenraster"},function:{en:"Reduces scattered radiation before the detector.",de:"Reduziert Streustrahlung vor dem Detektor."},details:{en:"Improves contrast but can require higher exposure.",de:"Verbessert Kontrast, kann aber hoehere Exposition benoetigen."},electrotechnics:{en:"Shows the tradeoff between signal strength, noise, and contrast.",de:"Zeigt den Kompromiss zwischen Signalstaerke, Rauschen und Kontrast."}}],demo:{title:{en:"Contrast enhancement",de:"Kontrastverstaerkung"},beforeLabel:{en:"Flat contrast",de:"Flacher Kontrast"},afterLabel:{en:"Enhanced contrast",de:"Verbesserter Kontrast"},explanation:{en:"Contrast stretching spreads useful gray values across the display range.",de:"Kontraststreckung verteilt nuetzliche Grauwerte ueber den Anzeigebereich."},filters:[{en:"Contrast stretch",de:"Kontraststreckung"},{en:"Sharpening",de:"Schaerfung"},{en:"Noise-aware smoothing",de:"Rauschbewusste Glaettung"}],clipSteps:[{en:"Tube emits X-rays",de:"Roehre sendet Strahlung"},{en:"Body attenuates beam",de:"Objekt schwaecht Strahl ab"},{en:"Detector captures pixels",de:"Detektor erfasst Pixel"},{en:"Contrast is enhanced",de:"Kontrast wird verbessert"}]}},{id:"mri",name:{en:"MRI Scanner",de:"MRT-Scanner"},category:{en:"Magnetic Resonance",de:"Magnetresonanz"},short:{en:"Uses magnets, gradients, and RF coils to form tissue-contrast images.",de:"Nutzt Magnet, Gradienten und HF-Spulen fuer kontrastreiche Bilder."},model:"mri",overview:{en:"MRI uses a strong magnetic field, RF pulses, and gradient fields to encode signals from hydrogen nuclei.",de:"MRT nutzt ein starkes Magnetfeld, HF-Pulse und Gradientenfelder, um Signale von Wasserstoffkernen zu codieren."},workflow:[{en:"Main magnet aligns spins.",de:"Hauptmagnet richtet Spins aus."},{en:"RF coil excites and receives signals.",de:"HF-Spule regt an und empfaengt Signale."},{en:"Gradient coils encode position.",de:"Gradientenspulen codieren Position."},{en:"Computer reconstructs contrast images.",de:"Computer rekonstruiert Kontrastbilder."}],deepDive:[{title:{en:"Main magnetic field",de:"Hauptmagnetfeld"},body:{en:"When the patient enters the bore, hydrogen nuclei in water and fat see a strong static B0 field. Their magnetic moments do not all point perfectly with the field, but a small net magnetization builds along B0. The Larmor frequency is proportional to field strength, so the scanner knows what RF frequency can tip that magnetization into the transverse plane.",de:"Wenn die Person in die Roehre faehrt, sehen Wasserstoffkerne in Wasser und Fett ein starkes statisches B0-Feld. Die magnetischen Momente zeigen nicht alle perfekt in Feldrichtung, aber eine kleine Nettomagnetisierung baut sich entlang B0 auf. Die Larmorfrequenz ist proportional zur Feldstaerke, daher weiss der Scanner, welche HF-Frequenz die Magnetisierung kippen kann."}},{title:{en:"RF pulse and received signal",de:"HF-Puls und Empfangssignal"},body:{en:"The RF coil sends a short magnetic B1 pulse at the Larmor frequency. This deposits energy into the spin system and tips the net magnetization. After the pulse stops, the precessing magnetization induces a tiny voltage in the receive coil by Faraday induction. That analog voltage is amplified, filtered, digitized, and stored as k-space samples.",de:"Die HF-Spule sendet einen kurzen magnetischen B1-Puls bei der Larmorfrequenz. Dadurch wird Energie in das Spinsystem eingebracht und die Nettomagnetisierung gekippt. Nach dem Puls induziert die praezessierende Magnetisierung durch Faraday-Induktion eine kleine Spannung in der Empfangsspule. Diese analoge Spannung wird verstaerkt, gefiltert, digitalisiert und als k-Raum-Daten gespeichert."}},{title:{en:"Gradients and image formation",de:"Gradienten und Bildentstehung"},body:{en:"Gradient coils add controlled magnetic-field slopes on x, y, and z. A slice-select gradient makes only one slice resonate with the RF pulse, phase encoding gives rows different phase shifts, and frequency encoding makes position change the received frequency. Reconstruction uses a Fourier transform, then image filters, coil combination, intensity correction, and noise reduction improve readability.",de:"Gradientenspulen addieren kontrollierte Magnetfeldsteigungen in x, y und z. Ein Schichtselektionsgradient laesst nur eine Schicht mit dem HF-Puls resonieren, Phasencodierung gibt Zeilen verschiedene Phasenlagen, und Frequenzcodierung macht die Position zur Empfangsfrequenz. Die Rekonstruktion nutzt eine Fourier-Transformation; danach verbessern Spulenkombination, Intensitaetskorrektur und Rauschminderung die Lesbarkeit."}},{title:{en:"Why it is loud and safety-critical",de:"Warum es laut und sicherheitskritisch ist"},body:{en:"Gradient coils carry high current and switch quickly inside the main field. Lorentz forces make the coil structure vibrate, which creates the knocking sound. Electrical design must manage inductance, voltage drive, cooling, eddy currents, RF heating, implant safety, quench behavior, and emergency stops.",de:"Gradientenspulen fuehren hohe Stroeme und schalten schnell im Hauptfeld. Lorentzkraefte versetzen die Spulenstruktur in Schwingung, wodurch das Klopfgeraeusch entsteht. Die Elektrotechnik muss Induktivitaet, Treiberspannung, Kuehlung, Wirbelstroeme, HF-Erwaermung, Implantatsicherheit, Quench-Verhalten und Not-Aus beherrschen."}}],parts:[{id:"bore",name:{en:"Magnet Bore",de:"Magnetoeffnung"},function:{en:"Contains the strong main magnetic field.",de:"Enthaelt das starke Hauptmagnetfeld."},details:{en:"Homogeneity affects image quality.",de:"Homogenitaet beeinflusst die Bildqualitaet."},electrotechnics:{en:"Superconducting magnets, cryogenics, and shielding are core ideas.",de:"Supraleitende Magnete, Kryotechnik und Abschirmung sind Kernideen."}},{id:"rfcoil",name:{en:"RF Coil",de:"HF-Spule"},function:{en:"Transmits and receives radio-frequency signals.",de:"Sendet und empfaengt Hochfrequenzsignale."},details:{en:"Coil position affects sensitivity.",de:"Spulenposition beeinflusst Empfindlichkeit."},electrotechnics:{en:"Resonance, impedance matching, and low-noise reception are important.",de:"Resonanz, Impedanzanpassung und rauscharmer Empfang sind wichtig."}},{id:"gradients",name:{en:"Gradient Coils",de:"Gradientenspulen"},function:{en:"Encode spatial position.",de:"Codieren raeumliche Position."},details:{en:"Rapid switching causes acoustic noise and heating.",de:"Schnelles Schalten erzeugt Geraeusche und Waerme."},electrotechnics:{en:"High-current drivers, inductance, and switching transients matter.",de:"Hochstromtreiber, Induktivitaet und Schalttransienten sind wichtig."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Positions the scanned object.",de:"Positioniert das Untersuchungsobjekt."},details:{en:"Accurate positioning improves coverage.",de:"Genaue Positionierung verbessert die Abdeckung."},electrotechnics:{en:"Motor control and safety interlocks protect motion.",de:"Motorsteuerung und Sicherheitsverriegelungen schuetzen die Bewegung."}}],demo:{title:{en:"Tissue contrast selection",de:"Gewebekontrast-Auswahl"},beforeLabel:{en:"Low contrast",de:"Niedriger Kontrast"},afterLabel:{en:"T2-like contrast",de:"T2-aehnlicher Kontrast"},explanation:{en:"Different sequences emphasize different tissue properties.",de:"Verschiedene Sequenzen betonen verschiedene Gewebeeigenschaften."},filters:[{en:"Intensity mapping",de:"Intensitaetsabbildung"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Contrast preset",de:"Kontrastpreset"}],clipSteps:[{en:"Magnet aligns spins",de:"Magnet richtet Spins aus"},{en:"RF pulse excites",de:"HF-Puls regt an"},{en:"Signal decays",de:"Signal klingt ab"},{en:"Image reconstructed",de:"Bild rekonstruiert"}]}},{id:"pump",name:{en:"Infusion Pump",de:"Infusionspumpe"},category:{en:"Therapy Device",de:"Therapiegeraet"},short:{en:"Controls fluid delivery with motor drive, sensors, alarms, and software.",de:"Steuert Fluessigkeitsabgabe mit Motor, Sensoren, Alarmen und Software."},model:"pump",overview:{en:"An infusion pump is a control system. It compares target delivery with sensor feedback and reacts to pressure, battery, door, and line problems.",de:"Eine Infusionspumpe ist ein Regelsystem. Sie vergleicht Zielabgabe mit Sensorfeedback und reagiert auf Druck, Akku, Tuer und Leitungsprobleme."},workflow:[{en:"User sets rate and volume.",de:"Nutzer stellt Rate und Volumen ein."},{en:"Motor moves the pump mechanism.",de:"Motor bewegt den Pumpmechanismus."},{en:"Pressure and door sensors check safety.",de:"Druck- und Tuersensoren pruefen Sicherheit."},{en:"Controller triggers alarms when limits are exceeded.",de:"Controller loest Alarme bei Grenzwertueberschreitung aus."}],deepDive:[{title:{en:"Motor and flow control",de:"Motor- und Flussregelung"},body:{en:"The pump is a closed-loop embedded system. A stepper or DC motor driver moves a peristaltic mechanism or cassette. Firmware converts the prescribed ml/h into motor steps, monitors current and position, and compensates for mechanical tolerance, battery voltage, and line resistance.",de:"Die Pumpe ist ein geschlossenes Embedded-Regelsystem. Ein Schritt- oder DC-Motortreiber bewegt Peristaltik oder Kassette. Firmware wandelt ml/h in Motorschritte um, ueberwacht Strom und Position und kompensiert mechanische Toleranz, Akkuspannung und Leitungswiderstand."}},{title:{en:"Pressure sensing",de:"Druckmessung"},body:{en:"Occlusion detection often uses a strain gauge or piezoresistive bridge. The bridge signal is tiny and temperature-sensitive, so it needs excitation stability, instrumentation amplification, ADC conversion, calibration, filtering, and threshold logic before an alarm is trustworthy.",de:"Okklusionserkennung nutzt oft Dehnungsmessstreifen oder piezoresistive Bruecken. Das Brueckensignal ist klein und temperaturabhaengig, daher braucht es stabile Speisung, Instrumentenverstaerkung, ADC-Wandlung, Kalibrierung, Filterung und Schwellwertlogik, bevor ein Alarm verlaesslich ist."}},{title:{en:"Safety logic",de:"Sicherheitslogik"},body:{en:"The controller cross-checks door state, air-in-line sensors, pressure trend, battery state, motor current, and user settings. Good design separates normal control from alarm decisions and fails into a safe state when sensor readings disagree.",de:"Der Controller prueft Tuerzustand, Luft-in-Leitung-Sensoren, Drucktrend, Akkuzustand, Motorstrom und Nutzereinstellungen gegeneinander. Gutes Design trennt normale Regelung von Alarmentscheidungen und geht in einen sicheren Zustand, wenn Sensordaten widerspruechlich sind."}}],parts:[{id:"screen",name:{en:"Display/UI",de:"Anzeige/UI"},function:{en:"Shows rate, volume, battery, and alarms.",de:"Zeigt Rate, Volumen, Akku und Alarme."},details:{en:"Good UI reduces setup mistakes.",de:"Gute UI reduziert Einstellfehler."},electrotechnics:{en:"Links embedded systems to human-machine interface design.",de:"Verbindet Embedded Systems mit Mensch-Maschine-Schnittstellen."}},{id:"cassette",name:{en:"Cassette Path",de:"Kassettenpfad"},function:{en:"Guides the fluid tube through the pump.",de:"Fuehrt den Schlauch durch die Pumpe."},details:{en:"Mechanical fit affects flow accuracy.",de:"Mechanischer Sitz beeinflusst Dosiergenauigkeit."},electrotechnics:{en:"Door switches and optical sensors can confirm correct loading.",de:"Tuerschalter und optische Sensoren koennen korrektes Einlegen bestaetigen."}},{id:"motor",name:{en:"Drive Motor",de:"Antriebsmotor"},function:{en:"Creates controlled pumping motion.",de:"Erzeugt kontrollierte Pumpbewegung."},details:{en:"Stepper or DC motor control decides flow stability.",de:"Schritt- oder DC-Motorsteuerung bestimmt die Flussstabilitaet."},electrotechnics:{en:"PWM, motor drivers, feedback, and current sensing are useful here.",de:"PWM, Motortreiber, Feedback und Strommessung sind hier nuetzlich."}},{id:"pressure",name:{en:"Pressure Sensor",de:"Drucksensor"},function:{en:"Detects occlusion or blocked flow.",de:"Erkennt Okklusion oder blockierten Fluss."},details:{en:"Rising pressure can indicate a blocked line.",de:"Steigender Druck kann eine blockierte Leitung anzeigen."},electrotechnics:{en:"Often uses bridge sensors, ADCs, calibration, and thresholds.",de:"Oft mit Brueckensensoren, ADCs, Kalibrierung und Schwellwerten."}}],demo:{title:{en:"Flow-rate monitoring",de:"Flussraten-Ueberwachung"},beforeLabel:{en:"Unstable flow",de:"Instabiler Fluss"},afterLabel:{en:"Controlled flow",de:"Kontrollierter Fluss"},explanation:{en:"Control systems compare target and measured values, then correct motor action or trigger alarms.",de:"Regelsysteme vergleichen Soll- und Messwerte, korrigieren den Motor oder loesen Alarme aus."},filters:[{en:"Moving average",de:"Gleitender Mittelwert"},{en:"Threshold alarm",de:"Schwellwertalarm"},{en:"Trend check",de:"Trendpruefung"}],clipSteps:[{en:"Rate selected",de:"Rate gewaehlt"},{en:"Motor turns",de:"Motor dreht"},{en:"Pressure checked",de:"Druck geprueft"},{en:"Alarm if blocked",de:"Alarm bei Blockade"}]}},{id:"ventilator",name:{en:"Ventilator",de:"Beatmungsgeraet"},category:{en:"Respiratory Therapy",de:"Atemtherapie"},short:{en:"Controls pressure, flow, oxygen mix, and alarms during assisted breathing.",de:"Regelt Druck, Fluss, Sauerstoffmischung und Alarme bei assistierter Atmung."},model:"ventilator",overview:{en:"A ventilator is a sensor-rich control system. It drives gas flow, measures airway pressure and volume, synchronizes with patient effort, and uses alarms to avoid unsafe pressure, disconnection, or blocked tubing.",de:"Ein Beatmungsgeraet ist ein sensorreiches Regelsystem. Es treibt Gasfluss an, misst Atemwegsdruck und Volumen, synchronisiert sich mit Patientenbemuehung und nutzt Alarme gegen unsicheren Druck, Diskonnektion oder blockierte Schlaeuche."},workflow:[{en:"A blower or valves create controlled inspiratory flow.",de:"Geblaese oder Ventile erzeugen kontrollierten Inspirationsfluss."},{en:"Pressure and flow sensors measure the breathing circuit.",de:"Druck- und Flusssensoren messen den Atemkreis."},{en:"Firmware compares measured pressure/volume with the selected mode.",de:"Firmware vergleicht Druck/Volumen mit dem gewaehlten Modus."},{en:"Filters, alarms, and valves keep delivered gas safer and readable.",de:"Filter, Alarme und Ventile halten das abgegebene Gas sicherer und messbar."}],deepDive:[{title:{en:"Pressure and flow sensing",de:"Druck- und Flussmessung"},body:{en:"Airway pressure is often measured with piezoresistive pressure sensors, while flow may be measured from a pressure drop across a known restriction or by hot-wire methods. The electronics need bridge excitation, instrumentation amplification, ADC sampling, offset correction, leak compensation, and digital filtering.",de:"Atemwegsdruck wird oft mit piezoresistiven Drucksensoren gemessen; Fluss kann aus dem Druckabfall ueber einer bekannten Drossel oder thermisch gemessen werden. Die Elektronik braucht Brueckenspeisung, Instrumentenverstaerkung, ADC-Abtastung, Offsetkorrektur, Leckkompensation und digitale Filterung."}},{title:{en:"Control loop",de:"Regelkreis"},body:{en:"The controller drives valves or a blower so pressure, volume, or flow follows the selected ventilation mode. PID-like control, trigger detection, rise-time shaping, and safety limits are important because the patient and tubing form a changing pneumatic load.",de:"Der Controller steuert Ventile oder Geblaese, damit Druck, Volumen oder Fluss dem gewaehlten Beatmungsmodus folgen. PID-aehnliche Regelung, Triggererkennung, Anstiegszeitformung und Sicherheitsgrenzen sind wichtig, weil Patient und Schlauchsystem eine veraenderliche pneumatische Last bilden."}},{title:{en:"Signal cleanup and alarms",de:"Signalaufbereitung und Alarme"},body:{en:"Breathing signals are filtered to reduce sensor noise while preserving fast pressure rises and patient-trigger events. Alarm logic checks high pressure, low pressure, apnea, low volume, oxygen concentration, power, and sensor plausibility.",de:"Atemsignale werden gefiltert, um Sensorrauschen zu reduzieren und schnelle Druckanstiege sowie Patiententrigger zu erhalten. Alarmsoftware prueft Hochdruck, Niederdruck, Apnoe, niedriges Volumen, Sauerstoffkonzentration, Versorgung und Sensorplausibilitaet."}}],parts:[{id:"screen",name:{en:"Control Screen",de:"Bedienanzeige"},function:{en:"Shows mode, pressure, volume, flow, oxygen, and alarms.",de:"Zeigt Modus, Druck, Volumen, Fluss, Sauerstoff und Alarme."},details:{en:"Waveforms help clinicians see leaks, obstruction, and synchrony.",de:"Kurven helfen, Lecks, Obstruktion und Synchronie zu erkennen."},electrotechnics:{en:"Embedded UI, alarm state machines, and sampled waveform rendering meet here.",de:"Embedded-UI, Alarmzustandsautomaten und abgetastete Kurvendarstellung treffen hier zusammen."}},{id:"blower",name:{en:"Blower/Valve Block",de:"Geblaese/Ventilblock"},function:{en:"Creates and meters gas flow.",de:"Erzeugt und dosiert Gasfluss."},details:{en:"Fast valve response affects pressure control and comfort.",de:"Schnelle Ventilantwort beeinflusst Druckregelung und Komfort."},electrotechnics:{en:"Uses motor drivers, solenoids, PWM, current sensing, and protection circuits.",de:"Nutzt Motortreiber, Magnetventile, PWM, Strommessung und Schutzschaltungen."}},{id:"sensors",name:{en:"Pressure/Flow Sensors",de:"Druck-/Flusssensoren"},function:{en:"Measure delivered breathing mechanics.",de:"Messen die abgegebene Atemmechanik."},details:{en:"Sensor drift or condensation can corrupt control.",de:"Sensordrift oder Kondensation kann die Regelung stoeren."},electrotechnics:{en:"Bridge sensors, ADCs, calibration, low-pass filtering, and plausibility checks are central.",de:"Brueckensensoren, ADCs, Kalibrierung, Tiefpassfilter und Plausibilitaetspruefung sind zentral."}},{id:"tubing",name:{en:"Breathing Circuit",de:"Atemkreis"},function:{en:"Carries gas to and from the patient interface.",de:"Fuehrt Gas zur und von der Patientenschnittstelle."},details:{en:"Compliance, leaks, and resistance change measured pressure and volume.",de:"Compliance, Lecks und Widerstand veraendern gemessenen Druck und Volumen."},electrotechnics:{en:"Control software must interpret sensor signals through this pneumatic load.",de:"Regelsoftware muss Sensorsignale durch diese pneumatische Last interpretieren."}}],demo:{title:{en:"Pressure waveform stabilization",de:"Druckkurven-Stabilisierung"},beforeLabel:{en:"Noisy pressure/flow",de:"Verrauschter Druck/Fluss"},afterLabel:{en:"Controlled breath cycle",de:"Geregelter Atemzyklus"},explanation:{en:"Filtering and control make pressure and flow readable, but alarms must still react quickly to dangerous changes.",de:"Filterung und Regelung machen Druck und Fluss lesbar, Alarme muessen aber weiter schnell auf gefaehrliche Aenderungen reagieren."},filters:[{en:"Low-pass filter",de:"Tiefpassfilter"},{en:"Leak compensation",de:"Leckkompensation"},{en:"Alarm thresholds",de:"Alarmschwellen"}],clipSteps:[{en:"Mode selected",de:"Modus gewaehlt"},{en:"Blower drives flow",de:"Geblaese treibt Fluss"},{en:"Sensors measure",de:"Sensoren messen"},{en:"Controller adapts",de:"Controller passt an"}]}},{id:"defib",name:{en:"Defibrillator",de:"Defibrillator"},category:{en:"Emergency Therapy",de:"Notfalltherapie"},short:{en:"Charges a high-energy capacitor, analyzes ECG, and delivers a controlled shock path.",de:"Laedt einen Hochenergie-Kondensator, analysiert EKG und gibt einen kontrollierten Schockpfad ab."},model:"defib",overview:{en:"A defibrillator combines ECG acquisition with high-voltage energy delivery. Its design must separate sensitive measurement electronics from the shock circuit while keeping timing, isolation, and user safety reliable.",de:"Ein Defibrillator kombiniert EKG-Erfassung mit Hochspannungs-Energieabgabe. Das Design muss empfindliche Messelektronik vom Schockkreis trennen und Timing, Isolation und Anwendersicherheit verlaesslich halten."},workflow:[{en:"Pads sense ECG and provide a shock path.",de:"Pads messen EKG und bilden den Schockpfad."},{en:"An isolated front end filters the ECG for rhythm analysis.",de:"Eine isolierte Eingangsstufe filtert das EKG fuer Rhythmusanalyse."},{en:"A charger stores energy in a capacitor bank.",de:"Ein Ladegeraet speichert Energie in einer Kondensatorbank."},{en:"Switching electronics deliver a shaped biphasic waveform.",de:"Schaltelektronik liefert eine geformte biphasische Kurve."}],deepDive:[{title:{en:"Energy storage",de:"Energiespeicherung"},body:{en:"The charger raises battery voltage to a much higher capacitor voltage. Stored energy follows E = 1/2 C V^2, so voltage measurement, bleeder resistors, insulation, discharge switches, and interlocks are major safety topics.",de:"Das Ladegeraet hebt die Akkuspannung auf eine viel hoehere Kondensatorspannung. Gespeicherte Energie folgt E = 1/2 C V^2, daher sind Spannungsmessung, Entladewiderstaende, Isolation, Entladeschalter und Verriegelungen wichtige Sicherheitsthemen."}},{title:{en:"ECG analysis front end",de:"EKG-Analyse-Eingang"},body:{en:"The ECG path needs high input impedance, patient isolation, defibrillation protection, CMRR, baseline recovery, and filters. Rhythm algorithms depend on clean enough QRS timing while avoiding false confidence from motion, poor pad contact, or shock recovery artifacts.",de:"Der EKG-Pfad braucht hohe Eingangsimpedanz, Patientenisolation, Defibrillationsschutz, CMRR, Baseline-Rueckkehr und Filter. Rhythmusalgorithmen brauchen ausreichend sauberes QRS-Timing und muessen Bewegungen, schlechten Padkontakt und Artefakte nach Schock vermeiden."}},{title:{en:"Shock waveform",de:"Schockkurve"},body:{en:"Modern devices often shape a biphasic pulse through controlled switching. The delivered current depends on patient impedance, so the device measures or estimates impedance and supervises energy delivery, timing, and abort conditions.",de:"Moderne Geraete formen oft einen biphasischen Puls durch kontrolliertes Schalten. Der abgegebene Strom haengt von Patientenimpedanz ab, daher misst oder schaetzt das Geraet die Impedanz und ueberwacht Energieabgabe, Timing und Abbruchbedingungen."}}],parts:[{id:"screen",name:{en:"ECG/Status Display",de:"EKG-/Statusanzeige"},function:{en:"Shows rhythm, charge state, prompts, and alarms.",de:"Zeigt Rhythmus, Ladezustand, Hinweise und Alarme."},details:{en:"Emergency UI must be readable under stress.",de:"Notfall-UI muss unter Stress lesbar sein."},electrotechnics:{en:"Display logic is tied to battery, charger, ECG, and safety states.",de:"Anzeigelogik ist mit Akku, Ladegeraet, EKG und Sicherheitszustaenden verbunden."}},{id:"capacitor",name:{en:"Capacitor Bank",de:"Kondensatorbank"},function:{en:"Stores shock energy.",de:"Speichert Schockenergie."},details:{en:"Voltage accuracy and insulation are critical.",de:"Spannungsgenauigkeit und Isolation sind kritisch."},electrotechnics:{en:"Capacitance, high-voltage charging, leakage, bleeders, and switching devices matter.",de:"Kapazitaet, Hochspannungsladung, Leckstrom, Entladewiderstaende und Schalter sind wichtig."}},{id:"pads",name:{en:"Pads/Paddles",de:"Pads/Paddles"},function:{en:"Couple ECG and therapy current to the body.",de:"Koppeln EKG und Therapiestrom an den Koerper."},details:{en:"Contact impedance affects analysis and delivered current.",de:"Kontaktimpedanz beeinflusst Analyse und abgegebenen Strom."},electrotechnics:{en:"Electrode impedance, patient isolation, and discharge path design meet here.",de:"Elektrodenimpedanz, Patientenisolation und Entladepfad treffen hier zusammen."}},{id:"charger",name:{en:"HV Charger",de:"HV-Ladegeraet"},function:{en:"Raises battery voltage to therapy voltage.",de:"Hebt Akkuspannung auf Therapiespannung."},details:{en:"Must charge quickly but safely.",de:"Muss schnell und sicher laden."},electrotechnics:{en:"Flyback converters, voltage feedback, current limits, and insulation are key.",de:"Flyback-Wandler, Spannungsfeedback, Stromgrenzen und Isolation sind zentral."}}],demo:{title:{en:"ECG decision and shock path",de:"EKG-Entscheidung und Schockpfad"},beforeLabel:{en:"Noisy rhythm",de:"Verrauschter Rhythmus"},afterLabel:{en:"Detected QRS/shock ready",de:"Erkanntes QRS/schockbereit"},explanation:{en:"The same pads can support sensing and therapy, but measurement protection and high-voltage switching must be carefully separated.",de:"Dieselben Pads koennen Messung und Therapie unterstuetzen, aber Messschutz und Hochspannungsschaltung muessen sauber getrennt sein."},filters:[{en:"ECG bandpass",de:"EKG-Bandpass"},{en:"Artifact rejection",de:"Artefaktunterdrueckung"},{en:"Impedance check",de:"Impedanzpruefung"}],clipSteps:[{en:"Pads attached",de:"Pads befestigt"},{en:"ECG analyzed",de:"EKG analysiert"},{en:"Capacitor charges",de:"Kondensator laedt"},{en:"Pulse delivered",de:"Puls abgegeben"}]}},{id:"dialysis",name:{en:"Hemodialysis Machine",de:"Haemodialysegeraet"},category:{en:"Extracorporeal Therapy",de:"Extrakorporale Therapie"},short:{en:"Controls blood flow, dialysate chemistry, pressure, conductivity, and safety alarms.",de:"Regelt Blutfluss, Dialysatchemie, Druck, Leitfaehigkeit und Sicherheitsalarme."},model:"dialysis",overview:{en:"A dialysis machine is a fluidic, electrical, and safety-control system. It pumps blood through a dialyzer while controlling dialysate concentration, temperature, pressures, ultrafiltration, and air/blood leak alarms.",de:"Ein Dialysegeraet ist ein fluidisches, elektrisches und sicherheitskritisches Regelsystem. Es pumpt Blut durch einen Dialysator und regelt Dialysatkonzentration, Temperatur, Druck, Ultrafiltration sowie Luft- und Blutleckalarme."},workflow:[{en:"Blood pump moves blood through the extracorporeal circuit.",de:"Die Blutpumpe bewegt Blut durch den extrakorporalen Kreis."},{en:"Dialysate flows on the other side of a semipermeable membrane.",de:"Dialysat fliesst auf der anderen Seite einer semipermeablen Membran."},{en:"Sensors monitor pressure, conductivity, temperature, and air.",de:"Sensoren ueberwachen Druck, Leitfaehigkeit, Temperatur und Luft."},{en:"Control logic stops flow or clamps lines during unsafe states.",de:"Regellogik stoppt Fluss oder klemmt Leitungen bei unsicheren Zustaenden."}],deepDive:[{title:{en:"Pumps and pressure",de:"Pumpen und Druck"},body:{en:"Roller pumps create flow while arterial and venous pressure sensors monitor access problems, clotting, kinks, or disconnection. The sensor chain needs amplification, ADC conversion, calibration, trend filtering, and alarm thresholds.",de:"Rollenpumpen erzeugen Fluss, waehrend arterielle und venoese Drucksensoren Zugangsprobleme, Gerinnung, Knicke oder Diskonnektion ueberwachen. Die Sensorkette braucht Verstaerkung, ADC-Wandlung, Kalibrierung, Trendfilterung und Alarmschwellen."}},{title:{en:"Conductivity and temperature",de:"Leitfaehigkeit und Temperatur"},body:{en:"Dialysate conductivity estimates ionic concentration, so electrodes or conductivity cells are measured with AC excitation to reduce polarization. Temperature sensors and heaters are controlled tightly because chemistry and patient comfort depend on stable dialysate.",de:"Dialysatleitfaehigkeit schaetzt Ionenkonzentration, daher werden Elektroden oder Leitfaehigkeitszellen mit AC-Anregung gemessen, um Polarisation zu reduzieren. Temperatursensoren und Heizer werden eng geregelt, weil Chemie und Komfort stabiles Dialysat brauchen."}},{title:{en:"Membrane exchange",de:"Membranaustausch"},body:{en:"The dialyzer membrane lets small solutes and water move while keeping cells and larger proteins in the blood path. Electronics do not measure every molecule directly; they control pressures, flow, conductivity, temperature, and time so the physical exchange stays within target bounds.",de:"Die Dialysatormembran laesst kleine geloeste Stoffe und Wasser passieren und haelt Zellen sowie groessere Proteine im Blutpfad. Die Elektronik misst nicht jedes Molekuel direkt; sie regelt Druck, Fluss, Leitfaehigkeit, Temperatur und Zeit, damit der physikalische Austausch im Zielbereich bleibt."}}],parts:[{id:"screen",name:{en:"Therapy Screen",de:"Therapieanzeige"},function:{en:"Shows flow, pressure, conductivity, time, and alarms.",de:"Zeigt Fluss, Druck, Leitfaehigkeit, Zeit und Alarme."},details:{en:"Therapy setup and alarm response depend on readable values.",de:"Therapieeinstellung und Alarmreaktion haengen von lesbaren Werten ab."},electrotechnics:{en:"Embedded monitoring integrates sensors, state machines, and UI.",de:"Embedded-Monitoring verbindet Sensoren, Zustandsautomaten und UI."}},{id:"pump",name:{en:"Blood Pump",de:"Blutpumpe"},function:{en:"Moves blood through tubing.",de:"Bewegt Blut durch Schlaeuche."},details:{en:"Roller speed determines flow estimate.",de:"Rollendrehzahl bestimmt die Flussschaetzung."},electrotechnics:{en:"Motor control, encoders, current sensing, and door interlocks are used.",de:"Motorregelung, Encoder, Strommessung und Tuerverriegelungen werden genutzt."}},{id:"dialyzer",name:{en:"Dialyzer Cartridge",de:"Dialysator"},function:{en:"Exchanges solutes and water across a membrane.",de:"Tauscht geloeste Stoffe und Wasser ueber eine Membran aus."},details:{en:"Flow direction and pressure gradient affect exchange.",de:"Flussrichtung und Druckgradient beeinflussen den Austausch."},electrotechnics:{en:"Controlled by pump timing, pressure sensors, and ultrafiltration feedback.",de:"Gesteuert ueber Pumpentiming, Drucksensoren und Ultrafiltrationsfeedback."}},{id:"sensors",name:{en:"Safety Sensors",de:"Sicherheitssensoren"},function:{en:"Watch pressure, air, blood leak, temperature, and conductivity.",de:"Ueberwachen Druck, Luft, Blutleck, Temperatur und Leitfaehigkeit."},details:{en:"Sensor disagreement must stop therapy safely.",de:"Sensorwiderspruch muss die Therapie sicher stoppen."},electrotechnics:{en:"ADC channels, excitation circuits, optical sensing, and plausibility logic are central.",de:"ADC-Kanaele, Anregeschaltungen, optische Sensorik und Plausibilitaetslogik sind zentral."}}],demo:{title:{en:"Pressure and conductivity monitoring",de:"Druck- und Leitfaehigkeitsueberwachung"},beforeLabel:{en:"Unstable sensor trend",de:"Instabiler Sensortrend"},afterLabel:{en:"Stable therapy window",de:"Stabiles Therapiefenster"},explanation:{en:"Dialysis safety depends on trends and thresholds across multiple sensors, not one single measurement.",de:"Dialysesicherheit haengt von Trends und Schwellwerten mehrerer Sensoren ab, nicht von einer Einzelmessung."},filters:[{en:"Trend filter",de:"Trendfilter"},{en:"Conductivity check",de:"Leitfaehigkeitspruefung"},{en:"Pressure alarm",de:"Druckalarm"}],clipSteps:[{en:"Blood pumped",de:"Blut gepumpt"},{en:"Dialysate flows",de:"Dialysat fliesst"},{en:"Sensors compare",de:"Sensoren vergleichen"},{en:"Clamp if unsafe",de:"Klemme bei Gefahr"}]}},{id:"endoscope",name:{en:"Video Endoscope",de:"Videoendoskop"},category:{en:"Optical Imaging",de:"Optische Bildgebung"},short:{en:"Uses illumination, miniature imaging, controls, and processing to view internal anatomy.",de:"Nutzt Beleuchtung, Miniaturbildgebung, Steuerung und Verarbeitung fuer innere Anatomie."},model:"endoscope",overview:{en:"A video endoscope is an optical-electronic imaging chain. Light is guided to tissue, reflected light is captured by a tiny sensor, and the processor improves color, contrast, noise, and sharpness in real time.",de:"Ein Videoendoskop ist eine optisch-elektronische Bildkette. Licht wird zum Gewebe gefuehrt, reflektiertes Licht von einem kleinen Sensor aufgenommen, und der Prozessor verbessert Farbe, Kontrast, Rauschen und Schaerfe in Echtzeit."},workflow:[{en:"LED or xenon light is guided to the distal tip.",de:"LED- oder Xenonlicht wird zur distalen Spitze gefuehrt."},{en:"Optics focus reflected light onto an image sensor.",de:"Optik fokussiert reflektiertes Licht auf einen Bildsensor."},{en:"Sensor pixels convert photons to charge and digital video.",de:"Sensorpixel wandeln Photonen in Ladung und digitales Video."},{en:"Image processing corrects color, noise, contrast, and edges.",de:"Bildverarbeitung korrigiert Farbe, Rauschen, Kontrast und Kanten."}],deepDive:[{title:{en:"Illumination path",de:"Beleuchtungspfad"},body:{en:"The light source must deliver enough illumination without overheating tissue. Drivers regulate LED current, temperature sensors protect the source, and optics or fiber bundles guide light to the tip. Automatic exposure adjusts brightness when tissue distance changes.",de:"Die Lichtquelle muss genug Beleuchtung liefern, ohne Gewebe zu ueberhitzen. Treiber regeln LED-Strom, Temperatursensoren schuetzen die Quelle, und Optik oder Faserbuendel fuehren Licht zur Spitze. Automatische Belichtung passt Helligkeit an, wenn sich der Gewebeabstand aendert."}},{title:{en:"Image sensor readout",de:"Bildsensorauslesung"},body:{en:"CMOS pixels integrate photocharge, then row/column circuits read the values through amplifiers and ADCs. Timing, rolling shutter, dark current, gain, white balance, and cable signal integrity strongly affect the final picture.",de:"CMOS-Pixel integrieren Photoladung, danach lesen Zeilen-/Spaltenschaltungen die Werte ueber Verstaerker und ADCs aus. Timing, Rolling Shutter, Dunkelstrom, Gain, Weissabgleich und Kabelsignalintegritaet beeinflussen das Endbild stark."}},{title:{en:"Processing pipeline",de:"Verarbeitungskette"},body:{en:"The processor applies demosaicing, denoising, color correction, contrast enhancement, edge sharpening, fog reduction, and sometimes narrow-band imaging. Each filter improves readability but can also create artifacts, so real-time tuning matters.",de:"Der Prozessor nutzt Demosaicing, Rauschminderung, Farbkorrektur, Kontrastverstaerkung, Kantenschaerfung, Nebelreduktion und manchmal Narrow-Band-Imaging. Jeder Filter verbessert Lesbarkeit, kann aber Artefakte erzeugen, deshalb ist Echtzeitabstimmung wichtig."}}],parts:[{id:"handle",name:{en:"Control Handle",de:"Bediengriff"},function:{en:"Holds controls for bending, image capture, and irrigation.",de:"Traegt Bedienelemente fuer Abwinklung, Bildaufnahme und Spuelung."},details:{en:"Ergonomics matter because the operator controls fine movement.",de:"Ergonomie ist wichtig, weil feine Bewegung gesteuert wird."},electrotechnics:{en:"Buttons, encoders, sealed switches, and cable routing connect to embedded control.",de:"Tasten, Encoder, dichte Schalter und Kabelfuehrung verbinden sich mit Embedded-Steuerung."}},{id:"light",name:{en:"Light Source",de:"Lichtquelle"},function:{en:"Illuminates tissue through fibers or LEDs.",de:"Beleuchtet Gewebe ueber Fasern oder LEDs."},details:{en:"Brightness must be controlled to avoid glare and heat.",de:"Helligkeit muss gegen Blendung und Waerme geregelt werden."},electrotechnics:{en:"LED drivers, current control, temperature sensing, and exposure feedback are used.",de:"LED-Treiber, Stromregelung, Temperaturmessung und Belichtungsfeedback werden genutzt."}},{id:"sensor",name:{en:"Distal Image Sensor",de:"Distaler Bildsensor"},function:{en:"Converts reflected light into video data.",de:"Wandelt reflektiertes Licht in Videodaten."},details:{en:"Tiny optics and sensor noise limit image quality.",de:"Miniaturoptik und Sensorrauschen begrenzen Bildqualitaet."},electrotechnics:{en:"CMOS readout, ADCs, clocking, cable integrity, and shielding matter.",de:"CMOS-Auslesung, ADCs, Taktung, Kabelintegritaet und Schirmung sind wichtig."}},{id:"processor",name:{en:"Video Processor",de:"Videoprozessor"},function:{en:"Cleans and maps the live image.",de:"Bereinigt und mappt das Livebild."},details:{en:"Real-time processing must keep latency low.",de:"Echtzeitverarbeitung muss die Latenz niedrig halten."},electrotechnics:{en:"Digital filters, frame buffers, color pipelines, and display interfaces meet here.",de:"Digitale Filter, Framebuffer, Farbketten und Displayinterfaces treffen hier zusammen."}}],demo:{title:{en:"Live image enhancement",de:"Livebildverbesserung"},beforeLabel:{en:"Low-light noisy image",de:"Rauschiges Schwachlichtbild"},afterLabel:{en:"Corrected endoscopic view",de:"Korrigierte Endoskopieansicht"},explanation:{en:"Endoscopy depends on optics and real-time video processing: gain helps brightness, but denoising and color correction keep the image believable.",de:"Endoskopie haengt von Optik und Echtzeitvideo ab: Gain hilft Helligkeit, aber Rauschminderung und Farbkorrektur halten das Bild glaubwuerdig."},filters:[{en:"Auto exposure",de:"Auto-Belichtung"},{en:"Denoising",de:"Rauschminderung"},{en:"Color correction",de:"Farbkorrektur"}],clipSteps:[{en:"Light emitted",de:"Licht ausgesendet"},{en:"Tissue reflects",de:"Gewebe reflektiert"},{en:"Sensor reads",de:"Sensor liest"},{en:"Processor enhances",de:"Prozessor verbessert"}]}}];function u1({device:s,demo:e,lang:t}){return K.jsxs("section",{className:"process-demo",children:[K.jsx("div",{className:"section-title",children:K.jsxs("div",{children:[K.jsx("p",{className:"label",children:t==="en"?"Animated teaching clip":"Animierter Lernclip"}),K.jsx("h2",{children:Ut(e.title,t)})]})}),K.jsxs("div",{className:`clip-strip ${s.model}`,children:[e.clipSteps.map((r,o)=>K.jsxs("div",{className:"clip-step",children:[K.jsx("span",{children:o+1}),K.jsx("strong",{children:Ut(r,t)})]},Ut(r,"en"))),K.jsx("div",{className:"moving-pulse"})]}),K.jsxs("div",{className:`before-after ${s.model}`,children:[K.jsxs("div",{children:[K.jsx("span",{children:Ut(e.beforeLabel,t)}),K.jsx("div",{className:"image-sim before"})]}),K.jsxs("div",{children:[K.jsx("span",{children:Ut(e.afterLabel,t)}),K.jsx("div",{className:"image-sim after"})]})]}),K.jsx("p",{children:Ut(e.explanation,t)}),K.jsx("div",{className:"filter-row",children:e.filters.map(r=>K.jsx("span",{children:Ut(r,t)},Ut(r,"en")))})]})}var c1=u0();const d1=jd(c1),Rg="http://localhost:8000",df=[];async function Pg(s){const e=await fetch(`${Rg}${s}`);if(!e.ok)throw new Error(`Request failed: ${e.status}`);return e.json()}async function f1(s,e=8){try{return await Pg(`/api/ecg/generate?bpm=${s}&seconds=${e}`)}catch{const t=m1(s,e);return df.unshift({id:`local-${Date.now()}`,name:"Generated ECG",heart_rate:t.heart_rate,duration:t.duration,filter_used:!1}),t}}async function h1(s){try{const e=await fetch(`${Rg}/api/ecg/analyze`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`Analysis failed: ${e.status}`);return e.json()}catch{const e=g1(s);return df.unshift({id:`upload-${Date.now()}`,name:e.name||s.name,heart_rate:e.heart_rate,duration:e.duration,filter_used:!!e.filter_used}),e}}function p1(){return Pg("/api/ecg/history").catch(()=>df)}function m1(s,e){const r=e*250,o=60/s,l=[],c=[],d=[];for(let h=0;h<r;h+=1){const m=h/250;let g=.04*Math.sin(2*Math.PI*.35*m)+.02*Math.sin(2*Math.PI*8*m);for(let _=.7;_<e;_+=o)g+=1.15*Math.exp(-((m-_)**2)/9e-4),g-=.18*Math.exp(-((m-(_-.045))**2)/35e-5),g-=.22*Math.exp(-((m-(_+.05))**2)/45e-5),g+=.12*Math.exp(-((m-(_-.18))**2)/.004),g+=.28*Math.exp(-((m-(_+.26))**2)/.01);c.push(Number(m.toFixed(3))),d.push(Number(g.toFixed(4)))}for(let h=.7;h<e;h+=o)l.push(Math.round(h*250));return{sample_rate:250,duration:e,heart_rate:s,time:c,voltage:d,r_peaks:l,notes:"Browser fallback ECG. Educational demo only."}}function g1(s){const e=s.apply_filter?v1(s.voltage):s.voltage,t=_1(e,s.sample_rate),r=Number((s.time[s.time.length-1]-s.time[0]).toFixed(3));let o=0;if(t.length>1){const l=t.slice(1).map((d,h)=>s.time[d]-s.time[t[h]]),c=l.reduce((d,h)=>d+h,0)/l.length;o=c>0?Math.round(60/c):0}return{name:s.name,sample_rate:s.sample_rate,duration:r,heart_rate:o,time:s.time,voltage:e,raw_voltage:s.voltage,r_peaks:t,filter_used:s.apply_filter,notes:"Browser fallback ECG analysis. Educational demo only."}}function v1(s){return s.map((e,t)=>{const r=s.slice(Math.max(0,t-3),Math.min(s.length,t+4));return Number((r.reduce((o,l)=>o+l,0)/r.length).toFixed(4))})}function _1(s,e){const t=s.reduce((h,m)=>h+m,0)/s.length,r=s.reduce((h,m)=>h+(m-t)**2,0)/s.length,o=t+.65*Math.sqrt(r),l=Math.max(1,Math.round(e*.28)),c=[];let d=-l;for(let h=1;h<s.length-1;h+=1)s[h]>s[h-1]&&s[h]>s[h+1]&&s[h]>o&&h-d>=l&&(c.push(h),d=h);return c}function y1(){const[s,e]=kt.useState(74),[t,r]=kt.useState(250),[o,l]=kt.useState(!0),[c,d]=kt.useState(null),[h,m]=kt.useState([]),[g,_]=kt.useState(!1),[y,x]=kt.useState(""),E=kt.useRef(null);async function A(F=s){_(!0),x("");try{const k=await f1(F);d(k),S()}catch{x("Could not load ECG data. Check that the backend is running.")}finally{_(!1)}}kt.useEffect(()=>{A(74),S()},[]);async function S(){try{m(await p1())}catch{m([])}}function v(F){const k=F.split(/\r?\n/).map(b=>b.trim()).filter(Boolean),U=[],z=[];for(const b of k){const T=b.split(/[;,]/).map(B=>Number(B.trim()));T.length>=2&&Number.isFinite(T[0])&&Number.isFinite(T[1])&&(U.push(T[0]),z.push(T[1]))}return{time:U,voltage:z}}async function I(F){if(F){_(!0),x("");try{const k=await F.text(),U=v(k);if(U.voltage.length<20)throw new Error("Need at least 20 numeric rows with time and voltage columns.");const z=await h1({name:F.name.replace(/\.[^.]+$/,""),sample_rate:t,apply_filter:o,time:U.time,voltage:U.voltage});d(z),S()}catch(k){x(k instanceof Error?k.message:"Could not analyze CSV file.")}finally{_(!1)}}}function D(){window.print()}const R=kt.useMemo(()=>c?{x:c.r_peaks.map(F=>c.time[F]),y:c.r_peaks.map(F=>c.voltage[F])}:{x:[],y:[]},[c]);return kt.useEffect(()=>{!c||!E.current||d1.react(E.current,[{x:c.time,y:c.voltage,type:"scatter",mode:"lines",line:{color:"#0f766e",width:2},name:"ECG"},{x:R.x,y:R.y,type:"scatter",mode:"markers",marker:{color:"#e11d48",size:8},name:"R peaks"}],{autosize:!0,height:360,margin:{l:42,r:20,t:16,b:40},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"#f8fafc",xaxis:{title:"Time (s)",gridcolor:"#e2e8f0"},yaxis:{title:"Voltage (mV)",gridcolor:"#e2e8f0"},legend:{orientation:"h"}},{responsive:!0,displaylogo:!1})},[c,R.x,R.y]),K.jsxs("section",{className:"wide-panel",children:[K.jsxs("div",{className:"section-title",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"ECG Analysis Lab"}),K.jsx("h2",{children:"Generated ECG monitor"})]}),K.jsx(w0,{size:26,"aria-hidden":"true"})]}),K.jsxs("div",{className:"ecg-controls",children:[K.jsxs("label",{children:["Target BPM",K.jsx("input",{type:"range",min:"45",max:"150",value:s,onChange:F=>e(Number(F.target.value))})]}),K.jsxs("label",{children:["CSV sample rate",K.jsx("input",{type:"number",min:"50",max:"1000",value:t,onChange:F=>r(Number(F.target.value))})]}),K.jsxs("label",{className:"check-row",children:[K.jsx("input",{type:"checkbox",checked:o,onChange:F=>l(F.target.checked)}),"Smooth uploaded CSV"]}),K.jsxs("strong",{children:[s," bpm"]}),K.jsxs("button",{onClick:()=>A(),disabled:g,children:[K.jsx(k0,{size:17}),"Generate"]}),K.jsxs("label",{className:"upload-button",children:[K.jsx(N0,{size:17}),"Upload CSV",K.jsx("input",{type:"file",accept:".csv,.txt",onChange:F=>{var k;return I(((k=F.target.files)==null?void 0:k[0])||null)}})]}),K.jsxs("button",{onClick:D,disabled:!c,children:[K.jsx(b0,{size:17}),"Report"]})]}),y&&K.jsx("p",{className:"error",children:y}),c&&K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"ecg-stat-row",children:[K.jsxs("div",{children:[K.jsx("span",{children:"Calculated heart rate"}),K.jsxs("strong",{children:[c.heart_rate," bpm"]})]}),K.jsxs("div",{children:[K.jsx("span",{children:"Sample rate"}),K.jsxs("strong",{children:[c.sample_rate," Hz"]})]}),K.jsxs("div",{children:[K.jsx("span",{children:"R peaks found"}),K.jsx("strong",{children:c.r_peaks.length})]}),K.jsxs("div",{children:[K.jsx("span",{children:"Filter"}),K.jsx("strong",{children:c.filter_used?"On":"Off"})]})]}),K.jsx("div",{ref:E,className:"plot"}),K.jsxs("div",{className:"report-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"ECG Report Generator"}),K.jsx("h3",{children:c.name||"Generated ECG Demo"})]}),K.jsxs("p",{children:["Heart rate: ",K.jsxs("strong",{children:[c.heart_rate," bpm"]}),". Duration: ",K.jsxs("strong",{children:[c.duration,"s"]}),". R peaks: ",K.jsx("strong",{children:c.r_peaks.length}),". This report is for biomedical education only."]})]})]}),K.jsxs("div",{className:"history-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:"Analysis history"}),K.jsx("h3",{children:"Latest ECG runs"})]}),h.length===0?K.jsx("span",{children:"No saved runs yet."}):h.slice(0,5).map(F=>K.jsxs("article",{children:[K.jsx("strong",{children:F.name}),K.jsxs("span",{children:[F.heart_rate||"n/a"," bpm - ",F.duration,"s - filter ",F.filter_used?"on":"off"]})]},F.id))]})]})}function x1({lang:s}){const[e,t]=kt.useState(window.location.hash||"#/"),r=e.startsWith("#/device/")?e.replace("#/device/",""):"",o=kt.useMemo(()=>id.find(h=>h.id===r),[r]),[l,c]=kt.useState(""),d=(o==null?void 0:o.parts.find(h=>h.id===l))||(o==null?void 0:o.parts[0]);return kt.useEffect(()=>{function h(){t(window.location.hash||"#/")}return window.addEventListener("hashchange",h),()=>window.removeEventListener("hashchange",h)},[]),kt.useEffect(()=>{o&&!o.parts.some(h=>h.id===l)&&c(o.parts[0].id)},[o,l]),o?K.jsxs(K.Fragment,{children:[K.jsxs("a",{className:"back-link",href:"#/",children:[K.jsx(T0,{size:18}),s==="en"?"Device library":"Geraetebibliothek"]}),K.jsx("section",{className:"device-page-hero",children:K.jsxs("div",{children:[K.jsx("p",{className:"label",children:Ut(o.category,s)}),K.jsx("h1",{children:Ut(o.name,s)}),K.jsx("p",{children:Ut(o.overview,s)})]})}),K.jsxs("section",{className:"device-workspace device-page",children:[K.jsxs("div",{className:"model-panel",children:[K.jsxs("div",{className:"section-title",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:s==="en"?"Interactive 3D model":"Interaktives 3D-Modell"}),K.jsx("h2",{children:Ut(o.name,s)})]}),K.jsx(Wp,{size:24})]}),K.jsx(o1,{device:o,selectedPartId:(d==null?void 0:d.id)||"",onSelectPart:c}),K.jsx("p",{className:"canvas-hint",children:s==="en"?"Drag to rotate. Click a part or choose it from the list.":"Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen."})]}),d&&K.jsxs("aside",{className:"lesson-panel",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:s==="en"?"Selected part":"Ausgewaehltes Teil"}),K.jsx("h2",{children:Ut(d.name,s)}),K.jsx("p",{children:Ut(d.function,s)}),K.jsx("small",{children:Ut(d.details,s)})]}),K.jsxs("div",{className:"electro-box",children:[K.jsx(Gp,{size:22}),K.jsxs("div",{children:[K.jsx("strong",{children:s==="en"?"Electrotechnics link":"Bezug zur Elektrotechnik"}),K.jsx("span",{children:Ut(d.electrotechnics,s)})]})]}),K.jsx("div",{className:"part-buttons",children:o.parts.map(h=>K.jsx("button",{className:h.id===d.id?"active":"",onClick:()=>c(h.id),children:Ut(h.name,s)},h.id))})]})]}),K.jsxs("section",{className:"learning-grid",children:[K.jsxs("article",{className:"lesson-card",children:[K.jsx(A0,{size:24}),K.jsx("h2",{children:s==="en"?"How it works":"Wie es funktioniert"}),K.jsx("p",{children:Ut(o.overview,s)})]}),K.jsxs("article",{className:"lesson-card",children:[K.jsx(P0,{size:24}),K.jsx("h2",{children:s==="en"?"Process path":"Ablauf"}),K.jsx("ol",{children:o.workflow.map(h=>K.jsx("li",{children:Ut(h,s)},Ut(h,"en")))})]}),K.jsxs("article",{className:"lesson-card",children:[K.jsx(D0,{size:24}),K.jsx("h2",{children:s==="en"?"What to understand":"Was man verstehen soll"}),K.jsx("p",{children:s==="en"?"Connect the medical function with the underlying electrical system: sensors, power, amplifiers, ADCs, filters, motors, control loops, and safety logic.":"Verbinde die medizinische Funktion mit dem elektrischen System dahinter: Sensoren, Leistung, Verstaerker, ADCs, Filter, Motoren, Regelkreise und Sicherheitslogik."})]})]}),K.jsx(u1,{device:o,demo:o.demo,lang:s}),o.deepDive&&K.jsxs("section",{className:"deep-dive",children:[K.jsxs("div",{className:"section-title",children:[K.jsxs("div",{children:[K.jsx("p",{className:"label",children:s==="en"?"Engineering deep dive":"Technischer Deep Dive"}),K.jsx("h2",{children:s==="en"?"Signal, field, and processing path":"Signal-, Feld- und Verarbeitungspfad"})]}),K.jsx(Gp,{size:24})]}),K.jsx("div",{className:"deep-dive-grid",children:o.deepDive.map(h=>K.jsxs("article",{children:[K.jsx("h3",{children:Ut(h.title,s)}),K.jsx("p",{children:Ut(h.body,s)})]},Ut(h.title,"en")))})]}),o.id==="ecg"&&K.jsx(y1,{})]}):K.jsxs(K.Fragment,{children:[K.jsxs("section",{className:"explorer-hero",children:[K.jsxs("div",{className:"hero-copy",children:[K.jsx("p",{className:"label",children:s==="en"?"Interactive biomedical engineering education":"Interaktive Medizintechnik-Lernplattform"}),K.jsx("h1",{children:"MedTech Device Explorer"}),K.jsx("p",{children:s==="en"?"Choose a medical device and learn it as an engineering system: 3D parts, electrotechnics, signal processing, image processing, safety, and operation.":"Waehle ein medizinisches Geraet und lerne es als technisches System: 3D-Bauteile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung."})]}),K.jsxs("div",{className:"hero-stats",children:[K.jsxs("span",{children:[K.jsx(C0,{size:18})," ",id.length," ",s==="en"?"devices":"Geraete"]}),K.jsxs("span",{children:[K.jsx(Wp,{size:18})," ",s==="en"?"clickable 3D parts":"anklickbare 3D-Teile"]}),K.jsxs("span",{children:[K.jsx(U0,{size:18})," ",s==="en"?"engineering-first explanations":"Erklaerungen mit Elektrotechnik"]})]})]}),K.jsx("section",{className:"device-library page-library",children:id.map(h=>K.jsxs("a",{className:"library-card",href:`#/device/${h.id}`,children:[K.jsx("span",{children:Ut(h.category,s)}),K.jsx("strong",{children:Ut(h.name,s)}),K.jsx("small",{children:Ut(h.short,s)})]},h.id))})]})}function S1(){const[s,e]=kt.useState(()=>localStorage.getItem("lang")||"en"),[t,r]=kt.useState(()=>localStorage.getItem("theme")==="dark");return kt.useEffect(()=>{document.documentElement.dataset.theme=t?"dark":"light",localStorage.setItem("theme",t?"dark":"light")},[t]),kt.useEffect(()=>{localStorage.setItem("lang",s)},[s]),K.jsxs("main",{className:"app-shell",children:[K.jsxs("header",{className:"site-header",children:[K.jsxs("a",{href:"#/",className:"brand",children:[K.jsx("span",{children:"MedTech"}),K.jsx("strong",{children:"Device Explorer"})]}),K.jsxs("div",{className:"top-actions",children:[K.jsxs("button",{onClick:()=>e(s==="en"?"de":"en"),title:"Change language",children:[K.jsx(R0,{size:18}),s==="en"?"DE":"EN"]}),K.jsxs("button",{onClick:()=>r(!t),title:"Toggle dark mode",children:[t?K.jsx(I0,{size:18}):K.jsx(L0,{size:18}),t?"Light":"Dark"]})]})]}),K.jsx(x1,{lang:s})]})}x0.createRoot(document.getElementById("root")).render(K.jsx(h0.StrictMode,{children:K.jsx(S1,{})}));
