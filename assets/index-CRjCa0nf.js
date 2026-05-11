import{g as ah,r as N0}from"./charts-CKiOGpj1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Cu={exports:{}},Ia={},Ru={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zp;function U0(){if(Zp)return ft;Zp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function S(U,se,Ne){this.props=U,this.context=se,this.refs=w,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=S.prototype;function I(U,se,Ne){this.props=U,this.context=se,this.refs=w,this.updater=Ne||x}var P=I.prototype=new y;P.constructor=I,E(P,S.prototype),P.isPureReactComponent=!0;var C=Array.isArray,F=Object.prototype.hasOwnProperty,k={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function H(U,se,Ne){var ee,ue={},Ee=null,ye=null;if(se!=null)for(ee in se.ref!==void 0&&(ye=se.ref),se.key!==void 0&&(Ee=""+se.key),se)F.call(se,ee)&&!N.hasOwnProperty(ee)&&(ue[ee]=se[ee]);var Te=arguments.length-2;if(Te===1)ue.children=Ne;else if(1<Te){for(var Ue=Array(Te),et=0;et<Te;et++)Ue[et]=arguments[et+2];ue.children=Ue}if(U&&U.defaultProps)for(ee in Te=U.defaultProps,Te)ue[ee]===void 0&&(ue[ee]=Te[ee]);return{$$typeof:s,type:U,key:Ee,ref:ye,props:ue,_owner:k.current}}function R(U,se){return{$$typeof:s,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function A(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return se[Ne]})}var J=/\/+/g;function Y(U,se){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):se.toString(36)}function re(U,se,Ne,ee,ue){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,ue=ue(ye),U=ee===""?"."+Y(ye,0):ee,C(ue)?(Ne="",U!=null&&(Ne=U.replace(J,"$&/")+"/"),re(ue,se,Ne,"",function(et){return et})):ue!=null&&(A(ue)&&(ue=R(ue,Ne+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(J,"$&/")+"/")+U)),se.push(ue)),1;if(ye=0,ee=ee===""?".":ee+":",C(U))for(var Te=0;Te<U.length;Te++){Ee=U[Te];var Ue=ee+Y(Ee,Te);ye+=re(Ee,se,Ne,Ue,ue)}else if(Ue=g(U),typeof Ue=="function")for(U=Ue.call(U),Te=0;!(Ee=U.next()).done;)Ee=Ee.value,Ue=ee+Y(Ee,Te++),ye+=re(Ee,se,Ne,Ue,ue);else if(Ee==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ye}function fe(U,se,Ne){if(U==null)return U;var ee=[],ue=0;return re(U,ee,"","",function(Ee){return se.call(Ne,Ee,ue++)}),ee}function ae(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var me={current:null},V={transition:null},ce={ReactCurrentDispatcher:me,ReactCurrentBatchConfig:V,ReactCurrentOwner:k};function le(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:fe,forEach:function(U,se,Ne){fe(U,function(){se.apply(this,arguments)},Ne)},count:function(U){var se=0;return fe(U,function(){se++}),se},toArray:function(U){return fe(U,function(se){return se})||[]},only:function(U){if(!A(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=I,ft.StrictMode=r,ft.Suspense=f,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,ft.act=le,ft.cloneElement=function(U,se,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var ee=E({},U.props),ue=U.key,Ee=U.ref,ye=U._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,ye=k.current),se.key!==void 0&&(ue=""+se.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(Ue in se)F.call(se,Ue)&&!N.hasOwnProperty(Ue)&&(ee[Ue]=se[Ue]===void 0&&Te!==void 0?Te[Ue]:se[Ue])}var Ue=arguments.length-2;if(Ue===1)ee.children=Ne;else if(1<Ue){Te=Array(Ue);for(var et=0;et<Ue;et++)Te[et]=arguments[et+2];ee.children=Te}return{$$typeof:s,type:U.type,key:ue,ref:Ee,props:ee,_owner:ye}},ft.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},ft.createElement=H,ft.createFactory=function(U){var se=H.bind(null,U);return se.type=U,se},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=A,ft.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ae}},ft.memo=function(U,se){return{$$typeof:p,type:U,compare:se===void 0?null:se}},ft.startTransition=function(U){var se=V.transition;V.transition={};try{U()}finally{V.transition=se}},ft.unstable_act=le,ft.useCallback=function(U,se){return me.current.useCallback(U,se)},ft.useContext=function(U){return me.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return me.current.useDeferredValue(U)},ft.useEffect=function(U,se){return me.current.useEffect(U,se)},ft.useId=function(){return me.current.useId()},ft.useImperativeHandle=function(U,se,Ne){return me.current.useImperativeHandle(U,se,Ne)},ft.useInsertionEffect=function(U,se){return me.current.useInsertionEffect(U,se)},ft.useLayoutEffect=function(U,se){return me.current.useLayoutEffect(U,se)},ft.useMemo=function(U,se){return me.current.useMemo(U,se)},ft.useReducer=function(U,se,Ne){return me.current.useReducer(U,se,Ne)},ft.useRef=function(U){return me.current.useRef(U)},ft.useState=function(U){return me.current.useState(U)},ft.useSyncExternalStore=function(U,se,Ne){return me.current.useSyncExternalStore(U,se,Ne)},ft.useTransition=function(){return me.current.useTransition()},ft.version="18.3.1",ft}var Jp;function oh(){return Jp||(Jp=1,Ru.exports=U0()),Ru.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function F0(){if(Qp)return Ia;Qp=1;var s=oh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var v,_={},g=null,x=null;p!==void 0&&(g=""+p),f.key!==void 0&&(g=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!l.hasOwnProperty(v)&&(_[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)_[v]===void 0&&(_[v]=f[v]);return{$$typeof:e,type:d,key:g,ref:x,props:_,_owner:o.current}}return Ia.Fragment=t,Ia.jsx=u,Ia.jsxs=u,Ia}var em;function z0(){return em||(em=1,Cu.exports=F0()),Cu.exports}var j=z0(),Rt=oh();const O0=ah(Rt);var sl={},Pu={exports:{}},Fn={},Du={exports:{}},Lu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function B0(){return tm||(tm=1,(function(s){function e(V,ce){var le=V.length;V.push(ce);e:for(;0<le;){var U=le-1>>>1,se=V[U];if(0<o(se,ce))V[U]=ce,V[le]=se,le=U;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],le=V.pop();if(le!==ce){V[0]=le;e:for(var U=0,se=V.length,Ne=se>>>1;U<Ne;){var ee=2*(U+1)-1,ue=V[ee],Ee=ee+1,ye=V[Ee];if(0>o(ue,le))Ee<se&&0>o(ye,ue)?(V[U]=ye,V[Ee]=le,U=Ee):(V[U]=ue,V[ee]=le,U=ee);else if(Ee<se&&0>o(ye,le))V[U]=ye,V[Ee]=le,U=Ee;else break e}}return ce}function o(V,ce){var le=V.sortIndex-ce.sortIndex;return le!==0?le:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],v=1,_=null,g=3,x=!1,E=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(V){for(var ce=t(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=V)r(p),ce.sortIndex=ce.expirationTime,e(f,ce);else break;ce=t(p)}}function C(V){if(w=!1,P(V),!E)if(t(f)!==null)E=!0,ae(F);else{var ce=t(p);ce!==null&&me(C,ce.startTime-V)}}function F(V,ce){E=!1,w&&(w=!1,y(H),H=-1),x=!0;var le=g;try{for(P(ce),_=t(f);_!==null&&(!(_.expirationTime>ce)||V&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,g=_.priorityLevel;var se=U(_.expirationTime<=ce);ce=s.unstable_now(),typeof se=="function"?_.callback=se:_===t(f)&&r(f),P(ce)}else r(f);_=t(f)}if(_!==null)var Ne=!0;else{var ee=t(p);ee!==null&&me(C,ee.startTime-ce),Ne=!1}return Ne}finally{_=null,g=le,x=!1}}var k=!1,N=null,H=-1,R=5,A=-1;function z(){return!(s.unstable_now()-A<R)}function J(){if(N!==null){var V=s.unstable_now();A=V;var ce=!0;try{ce=N(!0,V)}finally{ce?Y():(k=!1,N=null)}}else k=!1}var Y;if(typeof I=="function")Y=function(){I(J)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,fe=re.port2;re.port1.onmessage=J,Y=function(){fe.postMessage(null)}}else Y=function(){S(J,0)};function ae(V){N=V,k||(k=!0,Y())}function me(V,ce){H=S(function(){V(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){E||x||(E=!0,ae(F))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(V){switch(g){case 1:case 2:case 3:var ce=3;break;default:ce=g}var le=g;g=ce;try{return V()}finally{g=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var le=g;g=V;try{return ce()}finally{g=le}},s.unstable_scheduleCallback=function(V,ce,le){var U=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?U+le:U):le=U,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=le+se,V={id:v++,callback:ce,priorityLevel:V,startTime:le,expirationTime:se,sortIndex:-1},le>U?(V.sortIndex=le,e(p,V),t(f)===null&&V===t(p)&&(w?(y(H),H=-1):w=!0,me(C,le-U))):(V.sortIndex=se,e(f,V),E||x||(E=!0,ae(F))),V},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(V){var ce=g;return function(){var le=g;g=ce;try{return V.apply(this,arguments)}finally{g=le}}}})(Lu)),Lu}var nm;function G0(){return nm||(nm=1,Du.exports=B0()),Du.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function H0(){if(im)return Fn;im=1;var s=oh(),e=G0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return f.call(_,n)?!0:f.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function x(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||x(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,h,m,M){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=M}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,I);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,c)&&(a=null),c||h===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var C=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),z=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),fe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),me=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var le=Object.assign,U;function se(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ne=!1;function ee(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(te){var c=te}Reflect.construct(n,[],i)}else{try{i.call()}catch(te){c=te}n.call(i.prototype)}else{try{throw Error()}catch(te){c=te}n()}}catch(te){if(te&&c&&typeof te.stack=="string"){for(var h=te.stack.split(`
`),m=c.stack.split(`
`),M=h.length-1,L=m.length-1;1<=M&&0<=L&&h[M]!==m[L];)L--;for(;1<=M&&0<=L;M--,L--)if(h[M]!==m[L]){if(M!==1||L!==1)do if(M--,L--,0>L||h[M]!==m[L]){var O=`
`+h[M].replace(" at new "," at ");return n.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",n.displayName)),O}while(1<=M&&0<=L);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function ue(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case k:return"Portal";case R:return"Profiler";case H:return"StrictMode";case Y:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case fe:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===H?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(M){c=""+M,m.call(this,M)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(M){c=""+M},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Dt(n){n._valueTracker||(n._valueTracker=et(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function G(n,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function En(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Te(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function dt(n,i){pt(n,i);var a=Te(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Pt(n,i,a){(i!=="number"||Ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var je=Array.isArray;function D(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Te(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(je(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Te(a)}}function pe(n,i){var a=Te(i.value),c=Te(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function $e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=$e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ge=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ht(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var be=null,oe=null,he=null;function De(n){if(n=ya(n)){if(typeof be!="function")throw Error(t(280));var i=n.stateNode;i&&(i=xo(i),be(n.stateNode,n.type,i))}}function Pe(n){oe?he?he.push(n):he=[n]:oe=n}function at(){if(oe){var n=oe,i=he;if(he=oe=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ot(n,i){return n(i)}function Qt(){}var St=!1;function Dn(n,i,a){if(St)return n(i,a);St=!0;try{return Ot(n,i,a)}finally{St=!1,(oe!==null||he!==null)&&(Qt(),at())}}function wn(n,i){var a=n.stateNode;if(a===null)return null;var c=xo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var is=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){is=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{is=!1}function Ai(n,i,a,c,h,m,M,L,O){var te=Array.prototype.slice.call(arguments,3);try{i.apply(a,te)}catch(_e){this.onError(_e)}}var bi=!1,Ar=null,br=!1,Yi=null,Ja={onError:function(n){bi=!0,Ar=n}};function rs(n,i,a,c,h,m,M,L,O){bi=!1,Ar=null,Ai.apply(Ja,arguments)}function Qa(n,i,a,c,h,m,M,L,O){if(rs.apply(this,arguments),bi){if(bi){var te=Ar;bi=!1,Ar=null}else throw Error(t(198));br||(br=!0,Yi=te)}}function gi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function eo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function to(n){if(gi(n)!==n)throw Error(t(188))}function Zl(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return to(h),n;if(m===c)return to(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var M=!1,L=h.child;L;){if(L===a){M=!0,a=h,c=m;break}if(L===c){M=!0,c=h,a=m;break}L=L.sibling}if(!M){for(L=m.child;L;){if(L===a){M=!0,a=m,c=h;break}if(L===c){M=!0,c=m,a=h;break}L=L.sibling}if(!M)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function no(n){return n=Zl(n),n!==null?io(n):null}function io(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=io(n);if(i!==null)return i;n=n.sibling}return null}var b=e.unstable_scheduleCallback,K=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,W=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,qe=null,ot=null;function wt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var Tt=Math.clz32?Math.clz32:Ye,Vt=Math.log,xt=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Vt(n)/xt|0)|0}var qt=64,yt=4194304;function dn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ri(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,M=a&268435455;if(M!==0){var L=M&~h;L!==0?c=dn(L):(m&=M,m!==0&&(c=dn(m)))}else M=a&~h,M!==0?c=dn(M):m!==0&&(c=dn(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-Tt(i),h=1<<a,c|=n[a],i&=~h;return c}function Tn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Cr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var M=31-Tt(m),L=1<<M,O=h[M];O===-1?((L&a)===0||(L&c)!==0)&&(h[M]=Tn(L,i)):O<=i&&(n.expiredLanes|=L),m&=~L}}function Lt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=qt;return qt<<=1,(qt&4194240)===0&&(qt=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Yt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Tt(i),n[i]=a}function mn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-Tt(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function Rr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-Tt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var mt=0;function Ch(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Rh,Jl,Ph,Dh,Lh,Ql=!1,ro=[],$i=null,Zi=null,Ji=null,ia=new Map,ra=new Map,Qi=[],iv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ia.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ra.delete(i.pointerId)}}function sa(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=ya(i),i!==null&&Jl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function rv(n,i,a,c,h){switch(i){case"focusin":return $i=sa($i,n,i,a,c,h),!0;case"dragenter":return Zi=sa(Zi,n,i,a,c,h),!0;case"mouseover":return Ji=sa(Ji,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return ia.set(m,sa(ia.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,ra.set(m,sa(ra.get(m)||null,n,i,a,c,h)),!0}return!1}function Ih(n){var i=Pr(n.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=eo(a),i!==null){n.blockedOn=i,Lh(n.priority,function(){Ph(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function so(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=tc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ct=c,a.target.dispatchEvent(c),Ct=null}else return i=ya(a),i!==null&&Jl(i),n.blockedOn=a,!1;i.shift()}return!0}function Nh(n,i,a){so(n)&&a.delete(i)}function sv(){Ql=!1,$i!==null&&so($i)&&($i=null),Zi!==null&&so(Zi)&&(Zi=null),Ji!==null&&so(Ji)&&(Ji=null),ia.forEach(Nh),ra.forEach(Nh)}function aa(n,i){n.blockedOn===i&&(n.blockedOn=null,Ql||(Ql=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,sv)))}function oa(n){function i(h){return aa(h,n)}if(0<ro.length){aa(ro[0],n);for(var a=1;a<ro.length;a++){var c=ro[a];c.blockedOn===n&&(c.blockedOn=null)}}for($i!==null&&aa($i,n),Zi!==null&&aa(Zi,n),Ji!==null&&aa(Ji,n),ia.forEach(i),ra.forEach(i),a=0;a<Qi.length;a++)c=Qi[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Qi.length&&(a=Qi[0],a.blockedOn===null);)Ih(a),a.blockedOn===null&&Qi.shift()}var ss=C.ReactCurrentBatchConfig,ao=!0;function av(n,i,a,c){var h=mt,m=ss.transition;ss.transition=null;try{mt=1,ec(n,i,a,c)}finally{mt=h,ss.transition=m}}function ov(n,i,a,c){var h=mt,m=ss.transition;ss.transition=null;try{mt=4,ec(n,i,a,c)}finally{mt=h,ss.transition=m}}function ec(n,i,a,c){if(ao){var h=tc(n,i,a,c);if(h===null)_c(n,i,c,oo,a),kh(n,c);else if(rv(h,n,i,a,c))c.stopPropagation();else if(kh(n,c),i&4&&-1<iv.indexOf(n)){for(;h!==null;){var m=ya(h);if(m!==null&&Rh(m),m=tc(n,i,a,c),m===null&&_c(n,i,c,oo,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else _c(n,i,c,null,a)}}var oo=null;function tc(n,i,a,c){if(oo=null,n=q(c),n=Pr(n),n!==null)if(i=gi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=eo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return oo=n,null}function Uh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Ce:return 1;case Ie:return 4;case ze:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var er=null,nc=null,lo=null;function Fh(){if(lo)return lo;var n,i=nc,a=i.length,c,h="value"in er?er.value:er.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var M=a-n;for(c=1;c<=M&&i[a-c]===h[m-c];c++);return lo=h.slice(n,1<c?1-c:void 0)}function co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function uo(){return!0}function zh(){return!1}function Hn(n){function i(a,c,h,m,M){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=M,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?uo:zh,this.isPropagationStopped=zh,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ic=Hn(as),la=le({},as,{view:0,detail:0}),lv=Hn(la),rc,sc,ca,ho=le({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ca&&(ca&&n.type==="mousemove"?(rc=n.screenX-ca.screenX,sc=n.screenY-ca.screenY):sc=rc=0,ca=n),rc)},movementY:function(n){return"movementY"in n?n.movementY:sc}}),Oh=Hn(ho),cv=le({},ho,{dataTransfer:0}),uv=Hn(cv),dv=le({},la,{relatedTarget:0}),ac=Hn(dv),hv=le({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Hn(hv),pv=le({},as,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),mv=Hn(pv),gv=le({},as,{data:0}),Bh=Hn(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=yv[n])?!!i[n]:!1}function oc(){return xv}var Sv=le({},la,{key:function(n){if(n.key){var i=vv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?_v[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oc,charCode:function(n){return n.type==="keypress"?co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Mv=Hn(Sv),Ev=le({},ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gh=Hn(Ev),wv=le({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oc}),Tv=Hn(wv),Av=le({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),bv=Hn(Av),Cv=le({},ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=Hn(Cv),Pv=[9,13,27,32],lc=d&&"CompositionEvent"in window,ua=null;d&&"documentMode"in document&&(ua=document.documentMode);var Dv=d&&"TextEvent"in window&&!ua,Hh=d&&(!lc||ua&&8<ua&&11>=ua),Vh=" ",Wh=!1;function Xh(n,i){switch(n){case"keyup":return Pv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Lv(n,i){switch(n){case"compositionend":return jh(i);case"keypress":return i.which!==32?null:(Wh=!0,Vh);case"textInput":return n=i.data,n===Vh&&Wh?null:n;default:return null}}function kv(n,i){if(os)return n==="compositionend"||!lc&&Xh(n,i)?(n=Fh(),lo=nc=er=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Hh&&i.locale!=="ko"?null:i.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Iv[n.type]:i==="textarea"}function Kh(n,i,a,c){Pe(c),i=vo(i,"onChange"),0<i.length&&(a=new ic("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var da=null,ha=null;function Nv(n){ff(n,0)}function fo(n){var i=hs(n);if(vt(i))return n}function Uv(n,i){if(n==="change")return i}var Yh=!1;if(d){var cc;if(d){var uc="oninput"in document;if(!uc){var $h=document.createElement("div");$h.setAttribute("oninput","return;"),uc=typeof $h.oninput=="function"}cc=uc}else cc=!1;Yh=cc&&(!document.documentMode||9<document.documentMode)}function Zh(){da&&(da.detachEvent("onpropertychange",Jh),ha=da=null)}function Jh(n){if(n.propertyName==="value"&&fo(ha)){var i=[];Kh(i,ha,n,q(n)),Dn(Nv,i)}}function Fv(n,i,a){n==="focusin"?(Zh(),da=i,ha=a,da.attachEvent("onpropertychange",Jh)):n==="focusout"&&Zh()}function zv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fo(ha)}function Ov(n,i){if(n==="click")return fo(i)}function Bv(n,i){if(n==="input"||n==="change")return fo(i)}function Gv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:Gv;function fa(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!si(n[h],i[h]))return!1}return!0}function Qh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ef(n,i){var a=Qh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qh(a)}}function tf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?tf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function nf(){for(var n=window,i=Ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ut(n.document)}return i}function dc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Hv(n){var i=nf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&tf(a.ownerDocument.documentElement,a)){if(c!==null&&dc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=ef(a,m);var M=ef(a,c);h&&M&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==M.node||n.focusOffset!==M.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(M.node,M.offset)):(i.setEnd(M.node,M.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vv=d&&"documentMode"in document&&11>=document.documentMode,ls=null,hc=null,pa=null,fc=!1;function rf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;fc||ls==null||ls!==Ut(c)||(c=ls,"selectionStart"in c&&dc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),pa&&fa(pa,c)||(pa=c,c=vo(hc,"onSelect"),0<c.length&&(i=new ic("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ls)))}function po(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var cs={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},pc={},sf={};d&&(sf=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function mo(n){if(pc[n])return pc[n];if(!cs[n])return n;var i=cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in sf)return pc[n]=i[a];return n}var af=mo("animationend"),of=mo("animationiteration"),lf=mo("animationstart"),cf=mo("transitionend"),uf=new Map,df="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){uf.set(n,i),l(i,[n])}for(var mc=0;mc<df.length;mc++){var gc=df[mc],Wv=gc.toLowerCase(),Xv=gc[0].toUpperCase()+gc.slice(1);tr(Wv,"on"+Xv)}tr(af,"onAnimationEnd"),tr(of,"onAnimationIteration"),tr(lf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(cf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ma));function hf(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Qa(c,i,void 0,n),n.currentTarget=null}function ff(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var M=c.length-1;0<=M;M--){var L=c[M],O=L.instance,te=L.currentTarget;if(L=L.listener,O!==m&&h.isPropagationStopped())break e;hf(h,L,te),m=O}else for(M=0;M<c.length;M++){if(L=c[M],O=L.instance,te=L.currentTarget,L=L.listener,O!==m&&h.isPropagationStopped())break e;hf(h,L,te),m=O}}}if(br)throw n=Yi,br=!1,Yi=null,n}function Bt(n,i){var a=i[wc];a===void 0&&(a=i[wc]=new Set);var c=n+"__bubble";a.has(c)||(pf(i,n,2,!1),a.add(c))}function vc(n,i,a){var c=0;i&&(c|=4),pf(a,n,c,i)}var go="_reactListening"+Math.random().toString(36).slice(2);function ga(n){if(!n[go]){n[go]=!0,r.forEach(function(a){a!=="selectionchange"&&(jv.has(a)||vc(a,!1,n),vc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[go]||(i[go]=!0,vc("selectionchange",!1,i))}}function pf(n,i,a,c){switch(Uh(i)){case 1:var h=av;break;case 4:h=ov;break;default:h=ec}a=h.bind(null,i,a,n),h=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function _c(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var M=c.tag;if(M===3||M===4){var L=c.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(M===4)for(M=c.return;M!==null;){var O=M.tag;if((O===3||O===4)&&(O=M.stateNode.containerInfo,O===h||O.nodeType===8&&O.parentNode===h))return;M=M.return}for(;L!==null;){if(M=Pr(L),M===null)return;if(O=M.tag,O===5||O===6){c=m=M;continue e}L=L.parentNode}}c=c.return}Dn(function(){var te=m,_e=q(a),xe=[];e:{var ge=uf.get(n);if(ge!==void 0){var Le=ic,He=n;switch(n){case"keypress":if(co(a)===0)break e;case"keydown":case"keyup":Le=Mv;break;case"focusin":He="focus",Le=ac;break;case"focusout":He="blur",Le=ac;break;case"beforeblur":case"afterblur":Le=ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Oh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Tv;break;case af:case of:case lf:Le=fv;break;case cf:Le=bv;break;case"scroll":Le=lv;break;case"wheel":Le=Rv;break;case"copy":case"cut":case"paste":Le=mv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Gh}var Ve=(i&4)!==0,$t=!Ve&&n==="scroll",$=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var X=te,Z;X!==null;){Z=X;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,$!==null&&(we=wn(X,$),we!=null&&Ve.push(va(X,we,Z)))),$t)break;X=X.return}0<Ve.length&&(ge=new Le(ge,He,null,a,_e),xe.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&a!==Ct&&(He=a.relatedTarget||a.fromElement)&&(Pr(He)||He[Ci]))break e;if((Le||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(He=a.relatedTarget||a.toElement,Le=te,He=He?Pr(He):null,He!==null&&($t=gi(He),He!==$t||He.tag!==5&&He.tag!==6)&&(He=null)):(Le=null,He=te),Le!==He)){if(Ve=Oh,we="onMouseLeave",$="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=Gh,we="onPointerLeave",$="onPointerEnter",X="pointer"),$t=Le==null?ge:hs(Le),Z=He==null?ge:hs(He),ge=new Ve(we,X+"leave",Le,a,_e),ge.target=$t,ge.relatedTarget=Z,we=null,Pr(_e)===te&&(Ve=new Ve($,X+"enter",He,a,_e),Ve.target=Z,Ve.relatedTarget=$t,we=Ve),$t=we,Le&&He)t:{for(Ve=Le,$=He,X=0,Z=Ve;Z;Z=us(Z))X++;for(Z=0,we=$;we;we=us(we))Z++;for(;0<X-Z;)Ve=us(Ve),X--;for(;0<Z-X;)$=us($),Z--;for(;X--;){if(Ve===$||$!==null&&Ve===$.alternate)break t;Ve=us(Ve),$=us($)}Ve=null}else Ve=null;Le!==null&&mf(xe,ge,Le,Ve,!1),He!==null&&$t!==null&&mf(xe,$t,He,Ve,!0)}}e:{if(ge=te?hs(te):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var Xe=Uv;else if(qh(ge))if(Yh)Xe=Bv;else{Xe=zv;var Ze=Fv}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Ov);if(Xe&&(Xe=Xe(n,te))){Kh(xe,Xe,a,_e);break e}Ze&&Ze(n,ge,te),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Pt(ge,"number",ge.value)}switch(Ze=te?hs(te):window,n){case"focusin":(qh(Ze)||Ze.contentEditable==="true")&&(ls=Ze,hc=te,pa=null);break;case"focusout":pa=hc=ls=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,rf(xe,a,_e);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":rf(xe,a,_e)}var Je;if(lc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else os?Xh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Hh&&a.locale!=="ko"&&(os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&os&&(Je=Fh()):(er=_e,nc="value"in er?er.value:er.textContent,os=!0)),Ze=vo(te,rt),0<Ze.length&&(rt=new Bh(rt,n,null,a,_e),xe.push({event:rt,listeners:Ze}),Je?rt.data=Je:(Je=jh(a),Je!==null&&(rt.data=Je)))),(Je=Dv?Lv(n,a):kv(n,a))&&(te=vo(te,"onBeforeInput"),0<te.length&&(_e=new Bh("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:te}),_e.data=Je))}ff(xe,i)})}function va(n,i,a){return{instance:n,listener:i,currentTarget:a}}function vo(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=wn(n,a),m!=null&&c.unshift(va(n,m,h)),m=wn(n,i),m!=null&&c.push(va(n,m,h))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mf(n,i,a,c,h){for(var m=i._reactName,M=[];a!==null&&a!==c;){var L=a,O=L.alternate,te=L.stateNode;if(O!==null&&O===c)break;L.tag===5&&te!==null&&(L=te,h?(O=wn(a,m),O!=null&&M.unshift(va(a,O,L))):h||(O=wn(a,m),O!=null&&M.push(va(a,O,L)))),a=a.return}M.length!==0&&n.push({event:i,listeners:M})}var qv=/\r\n?/g,Kv=/\u0000|\uFFFD/g;function gf(n){return(typeof n=="string"?n:""+n).replace(qv,`
`).replace(Kv,"")}function _o(n,i,a){if(i=gf(i),gf(n)!==i&&a)throw Error(t(425))}function yo(){}var yc=null,xc=null;function Sc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Mc=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(n){return vf.resolve(null).then(n).catch(Zv)}:Mc;function Zv(n){setTimeout(function(){throw n})}function Ec(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),oa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);oa(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function _f(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),vi="__reactFiber$"+ds,_a="__reactProps$"+ds,Ci="__reactContainer$"+ds,wc="__reactEvents$"+ds,Jv="__reactListeners$"+ds,Qv="__reactHandles$"+ds;function Pr(n){var i=n[vi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ci]||a[vi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=_f(n);n!==null;){if(a=n[vi])return a;n=_f(n)}return i}n=a,a=n.parentNode}return null}function ya(n){return n=n[vi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function xo(n){return n[_a]||null}var Tc=[],fs=-1;function ir(n){return{current:n}}function Gt(n){0>fs||(n.current=Tc[fs],Tc[fs]=null,fs--)}function Ft(n,i){fs++,Tc[fs]=n.current,n.current=i}var rr={},gn=ir(rr),Ln=ir(!1),Dr=rr;function ps(n,i){var a=n.type.contextTypes;if(!a)return rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function kn(n){return n=n.childContextTypes,n!=null}function So(){Gt(Ln),Gt(gn)}function yf(n,i,a){if(gn.current!==rr)throw Error(t(168));Ft(gn,i),Ft(Ln,a)}function xf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ye(n)||"Unknown",h));return le({},a,c)}function Mo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Dr=gn.current,Ft(gn,n),Ft(Ln,Ln.current),!0}function Sf(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=xf(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,Gt(Ln),Gt(gn),Ft(gn,n)):Gt(Ln),Ft(Ln,a)}var Ri=null,Eo=!1,Ac=!1;function Mf(n){Ri===null?Ri=[n]:Ri.push(n)}function e0(n){Eo=!0,Mf(n)}function sr(){if(!Ac&&Ri!==null){Ac=!0;var n=0,i=mt;try{var a=Ri;for(mt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ri=null,Eo=!1}catch(h){throw Ri!==null&&(Ri=Ri.slice(n+1)),b(Ce,sr),h}finally{mt=i,Ac=!1}}return null}var ms=[],gs=0,wo=null,To=0,$n=[],Zn=0,Lr=null,Pi=1,Di="";function kr(n,i){ms[gs++]=To,ms[gs++]=wo,wo=n,To=i}function Ef(n,i,a){$n[Zn++]=Pi,$n[Zn++]=Di,$n[Zn++]=Lr,Lr=n;var c=Pi;n=Di;var h=32-Tt(c)-1;c&=~(1<<h),a+=1;var m=32-Tt(i)+h;if(30<m){var M=h-h%5;m=(c&(1<<M)-1).toString(32),c>>=M,h-=M,Pi=1<<32-Tt(i)+h|a<<h|c,Di=m+n}else Pi=1<<m|a<<h|c,Di=n}function bc(n){n.return!==null&&(kr(n,1),Ef(n,1,0))}function Cc(n){for(;n===wo;)wo=ms[--gs],ms[gs]=null,To=ms[--gs],ms[gs]=null;for(;n===Lr;)Lr=$n[--Zn],$n[Zn]=null,Di=$n[--Zn],$n[Zn]=null,Pi=$n[--Zn],$n[Zn]=null}var Vn=null,Wn=null,Wt=!1,ai=null;function wf(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Tf(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Lr!==null?{id:Pi,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Wn=null,!0):!1;default:return!1}}function Rc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pc(n){if(Wt){var i=Wn;if(i){var a=i;if(!Tf(n,i)){if(Rc(n))throw Error(t(418));i=nr(a.nextSibling);var c=Vn;i&&Tf(n,i)?wf(c,a):(n.flags=n.flags&-4097|2,Wt=!1,Vn=n)}}else{if(Rc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Wt=!1,Vn=n}}}function Af(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Ao(n){if(n!==Vn)return!1;if(!Wt)return Af(n),Wt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Sc(n.type,n.memoizedProps)),i&&(i=Wn)){if(Rc(n))throw bf(),Error(t(418));for(;i;)wf(n,i),i=nr(i.nextSibling)}if(Af(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Vn?nr(n.stateNode.nextSibling):null;return!0}function bf(){for(var n=Wn;n;)n=nr(n.nextSibling)}function vs(){Wn=Vn=null,Wt=!1}function Dc(n){ai===null?ai=[n]:ai.push(n)}var t0=C.ReactCurrentBatchConfig;function xa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(M){var L=h.refs;M===null?delete L[m]:L[m]=M},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function bo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Cf(n){var i=n._init;return i(n._payload)}function Rf(n){function i($,X){if(n){var Z=$.deletions;Z===null?($.deletions=[X],$.flags|=16):Z.push(X)}}function a($,X){if(!n)return null;for(;X!==null;)i($,X),X=X.sibling;return null}function c($,X){for($=new Map;X!==null;)X.key!==null?$.set(X.key,X):$.set(X.index,X),X=X.sibling;return $}function h($,X){return $=fr($,X),$.index=0,$.sibling=null,$}function m($,X,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<X?($.flags|=2,X):Z):($.flags|=2,X)):($.flags|=1048576,X)}function M($){return n&&$.alternate===null&&($.flags|=2),$}function L($,X,Z,we){return X===null||X.tag!==6?(X=Mu(Z,$.mode,we),X.return=$,X):(X=h(X,Z),X.return=$,X)}function O($,X,Z,we){var Xe=Z.type;return Xe===N?_e($,X,Z.props.children,we,Z.key):X!==null&&(X.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Cf(Xe)===X.type)?(we=h(X,Z.props),we.ref=xa($,X,Z),we.return=$,we):(we=Zo(Z.type,Z.key,Z.props,null,$.mode,we),we.ref=xa($,X,Z),we.return=$,we)}function te($,X,Z,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==Z.containerInfo||X.stateNode.implementation!==Z.implementation?(X=Eu(Z,$.mode,we),X.return=$,X):(X=h(X,Z.children||[]),X.return=$,X)}function _e($,X,Z,we,Xe){return X===null||X.tag!==7?(X=Gr(Z,$.mode,we,Xe),X.return=$,X):(X=h(X,Z),X.return=$,X)}function xe($,X,Z){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Mu(""+X,$.mode,Z),X.return=$,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case F:return Z=Zo(X.type,X.key,X.props,null,$.mode,Z),Z.ref=xa($,null,X),Z.return=$,Z;case k:return X=Eu(X,$.mode,Z),X.return=$,X;case ae:var we=X._init;return xe($,we(X._payload),Z)}if(je(X)||ce(X))return X=Gr(X,$.mode,Z,null),X.return=$,X;bo($,X)}return null}function ge($,X,Z,we){var Xe=X!==null?X.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Xe!==null?null:L($,X,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:return Z.key===Xe?O($,X,Z,we):null;case k:return Z.key===Xe?te($,X,Z,we):null;case ae:return Xe=Z._init,ge($,X,Xe(Z._payload),we)}if(je(Z)||ce(Z))return Xe!==null?null:_e($,X,Z,we,null);bo($,Z)}return null}function Le($,X,Z,we,Xe){if(typeof we=="string"&&we!==""||typeof we=="number")return $=$.get(Z)||null,L(X,$,""+we,Xe);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case F:return $=$.get(we.key===null?Z:we.key)||null,O(X,$,we,Xe);case k:return $=$.get(we.key===null?Z:we.key)||null,te(X,$,we,Xe);case ae:var Ze=we._init;return Le($,X,Z,Ze(we._payload),Xe)}if(je(we)||ce(we))return $=$.get(Z)||null,_e(X,$,we,Xe,null);bo(X,we)}return null}function He($,X,Z,we){for(var Xe=null,Ze=null,Je=X,rt=X=0,on=null;Je!==null&&rt<Z.length;rt++){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var At=ge($,Je,Z[rt],we);if(At===null){Je===null&&(Je=on);break}n&&Je&&At.alternate===null&&i($,Je),X=m(At,X,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At,Je=on}if(rt===Z.length)return a($,Je),Wt&&kr($,rt),Xe;if(Je===null){for(;rt<Z.length;rt++)Je=xe($,Z[rt],we),Je!==null&&(X=m(Je,X,rt),Ze===null?Xe=Je:Ze.sibling=Je,Ze=Je);return Wt&&kr($,rt),Xe}for(Je=c($,Je);rt<Z.length;rt++)on=Le(Je,$,rt,Z[rt],we),on!==null&&(n&&on.alternate!==null&&Je.delete(on.key===null?rt:on.key),X=m(on,X,rt),Ze===null?Xe=on:Ze.sibling=on,Ze=on);return n&&Je.forEach(function(pr){return i($,pr)}),Wt&&kr($,rt),Xe}function Ve($,X,Z,we){var Xe=ce(Z);if(typeof Xe!="function")throw Error(t(150));if(Z=Xe.call(Z),Z==null)throw Error(t(151));for(var Ze=Xe=null,Je=X,rt=X=0,on=null,At=Z.next();Je!==null&&!At.done;rt++,At=Z.next()){Je.index>rt?(on=Je,Je=null):on=Je.sibling;var pr=ge($,Je,At.value,we);if(pr===null){Je===null&&(Je=on);break}n&&Je&&pr.alternate===null&&i($,Je),X=m(pr,X,rt),Ze===null?Xe=pr:Ze.sibling=pr,Ze=pr,Je=on}if(At.done)return a($,Je),Wt&&kr($,rt),Xe;if(Je===null){for(;!At.done;rt++,At=Z.next())At=xe($,At.value,we),At!==null&&(X=m(At,X,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return Wt&&kr($,rt),Xe}for(Je=c($,Je);!At.done;rt++,At=Z.next())At=Le(Je,$,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&Je.delete(At.key===null?rt:At.key),X=m(At,X,rt),Ze===null?Xe=At:Ze.sibling=At,Ze=At);return n&&Je.forEach(function(I0){return i($,I0)}),Wt&&kr($,rt),Xe}function $t($,X,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===N&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:e:{for(var Xe=Z.key,Ze=X;Ze!==null;){if(Ze.key===Xe){if(Xe=Z.type,Xe===N){if(Ze.tag===7){a($,Ze.sibling),X=h(Ze,Z.props.children),X.return=$,$=X;break e}}else if(Ze.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&Cf(Xe)===Ze.type){a($,Ze.sibling),X=h(Ze,Z.props),X.ref=xa($,Ze,Z),X.return=$,$=X;break e}a($,Ze);break}else i($,Ze);Ze=Ze.sibling}Z.type===N?(X=Gr(Z.props.children,$.mode,we,Z.key),X.return=$,$=X):(we=Zo(Z.type,Z.key,Z.props,null,$.mode,we),we.ref=xa($,X,Z),we.return=$,$=we)}return M($);case k:e:{for(Ze=Z.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===Z.containerInfo&&X.stateNode.implementation===Z.implementation){a($,X.sibling),X=h(X,Z.children||[]),X.return=$,$=X;break e}else{a($,X);break}else i($,X);X=X.sibling}X=Eu(Z,$.mode,we),X.return=$,$=X}return M($);case ae:return Ze=Z._init,$t($,X,Ze(Z._payload),we)}if(je(Z))return He($,X,Z,we);if(ce(Z))return Ve($,X,Z,we);bo($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,X!==null&&X.tag===6?(a($,X.sibling),X=h(X,Z),X.return=$,$=X):(a($,X),X=Mu(Z,$.mode,we),X.return=$,$=X),M($)):a($,X)}return $t}var _s=Rf(!0),Pf=Rf(!1),Co=ir(null),Ro=null,ys=null,Lc=null;function kc(){Lc=ys=Ro=null}function Ic(n){var i=Co.current;Gt(Co),n._currentValue=i}function Nc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function xs(n,i){Ro=n,Lc=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Jn(n){var i=n._currentValue;if(Lc!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(Ro===null)throw Error(t(308));ys=n,Ro.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Ir=null;function Uc(n){Ir===null?Ir=[n]:Ir.push(n)}function Df(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Uc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Li(n,c)}function Li(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ar=!1;function Fc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lf(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ki(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,Li(n,a)}return h=c.interleaved,h===null?(i.next=i,Uc(c)):(i.next=h.next,h.next=i),c.interleaved=i,Li(n,a)}function Po(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rr(n,a)}}function kf(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var M={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=M:m=m.next=M,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Do(n,i,a,c){var h=n.updateQueue;ar=!1;var m=h.firstBaseUpdate,M=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var O=L,te=O.next;O.next=null,M===null?m=te:M.next=te,M=O;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==M&&(L===null?_e.firstBaseUpdate=te:L.next=te,_e.lastBaseUpdate=O))}if(m!==null){var xe=h.baseState;M=0,_e=te=O=null,L=m;do{var ge=L.lane,Le=L.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=n,Ve=L;switch(ge=i,Le=a,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Le,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Le,xe,ge):He,ge==null)break e;xe=le({},xe,ge);break e;case 2:ar=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[L]:ge.push(L))}else Le={eventTime:Le,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(te=_e=Le,O=xe):_e=_e.next=Le,M|=ge;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(_e===null&&(O=xe),h.baseState=O,h.firstBaseUpdate=te,h.lastBaseUpdate=_e,i=h.shared.interleaved,i!==null){h=i;do M|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Fr|=M,n.lanes=M,n.memoizedState=xe}}function If(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var Sa={},_i=ir(Sa),Ma=ir(Sa),Ea=ir(Sa);function Nr(n){if(n===Sa)throw Error(t(174));return n}function zc(n,i){switch(Ft(Ea,i),Ft(Ma,n),Ft(_i,Sa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Gt(_i),Ft(_i,i)}function Ss(){Gt(_i),Gt(Ma),Gt(Ea)}function Nf(n){Nr(Ea.current);var i=Nr(_i.current),a=We(i,n.type);i!==a&&(Ft(Ma,n),Ft(_i,a))}function Oc(n){Ma.current===n&&(Gt(_i),Gt(Ma))}var Xt=ir(0);function Lo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Bc=[];function Gc(){for(var n=0;n<Bc.length;n++)Bc[n]._workInProgressVersionPrimary=null;Bc.length=0}var ko=C.ReactCurrentDispatcher,Hc=C.ReactCurrentBatchConfig,Ur=0,jt=null,en=null,sn=null,Io=!1,wa=!1,Ta=0,n0=0;function vn(){throw Error(t(321))}function Vc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function Wc(n,i,a,c,h,m){if(Ur=m,jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ko.current=n===null||n.memoizedState===null?a0:o0,n=a(c,h),wa){m=0;do{if(wa=!1,Ta=0,25<=m)throw Error(t(301));m+=1,sn=en=null,i.updateQueue=null,ko.current=l0,n=a(c,h)}while(wa)}if(ko.current=Fo,i=en!==null&&en.next!==null,Ur=0,sn=en=jt=null,Io=!1,i)throw Error(t(300));return n}function Xc(){var n=Ta!==0;return Ta=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?jt.memoizedState=sn=n:sn=sn.next=n,sn}function Qn(){if(en===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=sn===null?jt.memoizedState:sn.next;if(i!==null)sn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},sn===null?jt.memoizedState=sn=n:sn=sn.next=n}return sn}function Aa(n,i){return typeof i=="function"?i(n):i}function jc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=en,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var M=h.next;h.next=m.next,m.next=M}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var L=M=null,O=null,te=m;do{var _e=te.lane;if((Ur&_e)===_e)O!==null&&(O=O.next={lane:0,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null}),c=te.hasEagerState?te.eagerState:n(c,te.action);else{var xe={lane:_e,action:te.action,hasEagerState:te.hasEagerState,eagerState:te.eagerState,next:null};O===null?(L=O=xe,M=c):O=O.next=xe,jt.lanes|=_e,Fr|=_e}te=te.next}while(te!==null&&te!==m);O===null?M=c:O.next=L,si(c,i.memoizedState)||(In=!0),i.memoizedState=c,i.baseState=M,i.baseQueue=O,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,jt.lanes|=m,Fr|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function qc(n){var i=Qn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var M=h=h.next;do m=n(m,M.action),M=M.next;while(M!==h);si(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Uf(){}function Ff(n,i){var a=jt,c=Qn(),h=i(),m=!si(c.memoizedState,h);if(m&&(c.memoizedState=h,In=!0),c=c.queue,Kc(Bf.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,ba(9,Of.bind(null,a,c,h,i),void 0,null),an===null)throw Error(t(349));(Ur&30)!==0||zf(a,i,h)}return h}function zf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Of(n,i,a,c){i.value=a,i.getSnapshot=c,Gf(i)&&Hf(n)}function Bf(n,i,a){return a(function(){Gf(i)&&Hf(n)})}function Gf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function Hf(n){var i=Li(n,1);i!==null&&ui(i,n,1,-1)}function Vf(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:n},i.queue=n,n=n.dispatch=s0.bind(null,jt,n),[i.memoizedState,n]}function ba(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=jt.updateQueue,i===null?(i={lastEffect:null,stores:null},jt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function Wf(){return Qn().memoizedState}function No(n,i,a,c){var h=yi();jt.flags|=n,h.memoizedState=ba(1|i,a,void 0,c===void 0?null:c)}function Uo(n,i,a,c){var h=Qn();c=c===void 0?null:c;var m=void 0;if(en!==null){var M=en.memoizedState;if(m=M.destroy,c!==null&&Vc(c,M.deps)){h.memoizedState=ba(i,a,m,c);return}}jt.flags|=n,h.memoizedState=ba(1|i,a,m,c)}function Xf(n,i){return No(8390656,8,n,i)}function Kc(n,i){return Uo(2048,8,n,i)}function jf(n,i){return Uo(4,2,n,i)}function qf(n,i){return Uo(4,4,n,i)}function Kf(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Yf(n,i,a){return a=a!=null?a.concat([n]):null,Uo(4,4,Kf.bind(null,i,n),a)}function Yc(){}function $f(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function Zf(n,i){var a=Qn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Vc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function Jf(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=a):(si(a,i)||(a=An(),jt.lanes|=a,Fr|=a,n.baseState=!0),i)}function i0(n,i){var a=mt;mt=a!==0&&4>a?a:4,n(!0);var c=Hc.transition;Hc.transition={};try{n(!1),i()}finally{mt=a,Hc.transition=c}}function Qf(){return Qn().memoizedState}function r0(n,i,a){var c=dr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ep(n))tp(i,a);else if(a=Df(n,i,a,c),a!==null){var h=Cn();ui(a,n,c,h),np(a,i,c)}}function s0(n,i,a){var c=dr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ep(n))tp(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var M=i.lastRenderedState,L=m(M,a);if(h.hasEagerState=!0,h.eagerState=L,si(L,M)){var O=i.interleaved;O===null?(h.next=h,Uc(i)):(h.next=O.next,O.next=h),i.interleaved=h;return}}catch{}finally{}a=Df(n,i,h,c),a!==null&&(h=Cn(),ui(a,n,c,h),np(a,i,c))}}function ep(n){var i=n.alternate;return n===jt||i!==null&&i===jt}function tp(n,i){wa=Io=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function np(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Rr(n,a)}}var Fo={readContext:Jn,useCallback:vn,useContext:vn,useEffect:vn,useImperativeHandle:vn,useInsertionEffect:vn,useLayoutEffect:vn,useMemo:vn,useReducer:vn,useRef:vn,useState:vn,useDebugValue:vn,useDeferredValue:vn,useTransition:vn,useMutableSource:vn,useSyncExternalStore:vn,useId:vn,unstable_isNewReconciler:!1},a0={readContext:Jn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Jn,useEffect:Xf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,No(4194308,4,Kf.bind(null,i,n),a)},useLayoutEffect:function(n,i){return No(4194308,4,n,i)},useInsertionEffect:function(n,i){return No(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=r0.bind(null,jt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Vf,useDebugValue:Yc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Vf(!1),i=n[0];return n=i0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=jt,h=yi();if(Wt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),an===null)throw Error(t(349));(Ur&30)!==0||zf(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Xf(Bf.bind(null,c,m,n),[n]),c.flags|=2048,ba(9,Of.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=yi(),i=an.identifierPrefix;if(Wt){var a=Di,c=Pi;a=(c&~(1<<32-Tt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ta++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=n0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},o0={readContext:Jn,useCallback:$f,useContext:Jn,useEffect:Kc,useImperativeHandle:Yf,useInsertionEffect:jf,useLayoutEffect:qf,useMemo:Zf,useReducer:jc,useRef:Wf,useState:function(){return jc(Aa)},useDebugValue:Yc,useDeferredValue:function(n){var i=Qn();return Jf(i,en.memoizedState,n)},useTransition:function(){var n=jc(Aa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Uf,useSyncExternalStore:Ff,useId:Qf,unstable_isNewReconciler:!1},l0={readContext:Jn,useCallback:$f,useContext:Jn,useEffect:Kc,useImperativeHandle:Yf,useInsertionEffect:jf,useLayoutEffect:qf,useMemo:Zf,useReducer:qc,useRef:Wf,useState:function(){return qc(Aa)},useDebugValue:Yc,useDeferredValue:function(n){var i=Qn();return en===null?i.memoizedState=n:Jf(i,en.memoizedState,n)},useTransition:function(){var n=qc(Aa)[0],i=Qn().memoizedState;return[n,i]},useMutableSource:Uf,useSyncExternalStore:Ff,useId:Qf,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=le({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function $c(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:le({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var zo={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Cn(),h=dr(n),m=ki(c,h);m.payload=i,a!=null&&(m.callback=a),i=or(n,m,h),i!==null&&(ui(i,n,h,c),Po(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Cn(),h=dr(n),m=ki(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=or(n,m,h),i!==null&&(ui(i,n,h,c),Po(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),c=dr(n),h=ki(a,c);h.tag=2,i!=null&&(h.callback=i),i=or(n,h,c),i!==null&&(ui(i,n,c,a),Po(i,n,c))}};function ip(n,i,a,c,h,m,M){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,M):i.prototype&&i.prototype.isPureReactComponent?!fa(a,c)||!fa(h,m):!0}function rp(n,i,a){var c=!1,h=rr,m=i.contextType;return typeof m=="object"&&m!==null?m=Jn(m):(h=kn(i)?Dr:gn.current,c=i.contextTypes,m=(c=c!=null)?ps(n,h):rr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=zo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function sp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&zo.enqueueReplaceState(i,i.state,null)}function Zc(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Fc(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Jn(m):(m=kn(i)?Dr:gn.current,h.context=ps(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&($c(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&zo.enqueueReplaceState(h,h.state,null),Do(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,i){try{var a="",c=i;do a+=ue(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function Jc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Qc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var c0=typeof WeakMap=="function"?WeakMap:Map;function ap(n,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Xo||(Xo=!0,pu=c),Qc(n,i)},a}function op(n,i,a){a=ki(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){Qc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){Qc(n,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var M=i.stack;this.componentDidCatch(i.value,{componentStack:M!==null?M:""})}),a}function lp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new c0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=E0.bind(null,n,i,a),i.then(n,n))}function cp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function up(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var u0=C.ReactCurrentOwner,In=!1;function bn(n,i,a,c){i.child=n===null?Pf(i,null,a,c):_s(i,n.child,a,c)}function dp(n,i,a,c,h){a=a.render;var m=i.ref;return xs(i,h),c=Wc(n,i,a,c,m,h),a=Xc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(Wt&&a&&bc(i),i.flags|=1,bn(n,i,c,h),i.child)}function hp(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!Su(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,fp(n,i,m,c,h)):(n=Zo(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var M=m.memoizedProps;if(a=a.compare,a=a!==null?a:fa,a(M,c)&&n.ref===i.ref)return Ii(n,i,h)}return i.flags|=1,n=fr(m,c),n.ref=i.ref,n.return=i,i.child=n}function fp(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(fa(m,c)&&n.ref===i.ref)if(In=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Ii(n,i,h)}return eu(n,i,a,c,h)}function pp(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ft(ws,Xn),Xn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ft(ws,Xn),Xn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Ft(ws,Xn),Xn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Ft(ws,Xn),Xn|=c;return bn(n,i,h,a),i.child}function mp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function eu(n,i,a,c,h){var m=kn(a)?Dr:gn.current;return m=ps(i,m),xs(i,h),a=Wc(n,i,a,c,m,h),c=Xc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(Wt&&c&&bc(i),i.flags|=1,bn(n,i,a,h),i.child)}function gp(n,i,a,c,h){if(kn(a)){var m=!0;Mo(i)}else m=!1;if(xs(i,h),i.stateNode===null)Bo(n,i),rp(i,a,c),Zc(i,a,c,h),c=!0;else if(n===null){var M=i.stateNode,L=i.memoizedProps;M.props=L;var O=M.context,te=a.contextType;typeof te=="object"&&te!==null?te=Jn(te):(te=kn(a)?Dr:gn.current,te=ps(i,te));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof M.getSnapshotBeforeUpdate=="function";xe||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==c||O!==te)&&sp(i,M,c,te),ar=!1;var ge=i.memoizedState;M.state=ge,Do(i,c,M,h),O=i.memoizedState,L!==c||ge!==O||Ln.current||ar?(typeof _e=="function"&&($c(i,a,_e,c),O=i.memoizedState),(L=ar||ip(i,a,L,c,ge,O,te))?(xe||typeof M.UNSAFE_componentWillMount!="function"&&typeof M.componentWillMount!="function"||(typeof M.componentWillMount=="function"&&M.componentWillMount(),typeof M.UNSAFE_componentWillMount=="function"&&M.UNSAFE_componentWillMount()),typeof M.componentDidMount=="function"&&(i.flags|=4194308)):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=O),M.props=c,M.state=O,M.context=te,c=L):(typeof M.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{M=i.stateNode,Lf(n,i),L=i.memoizedProps,te=i.type===i.elementType?L:oi(i.type,L),M.props=te,xe=i.pendingProps,ge=M.context,O=a.contextType,typeof O=="object"&&O!==null?O=Jn(O):(O=kn(a)?Dr:gn.current,O=ps(i,O));var Le=a.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof M.getSnapshotBeforeUpdate=="function")||typeof M.UNSAFE_componentWillReceiveProps!="function"&&typeof M.componentWillReceiveProps!="function"||(L!==xe||ge!==O)&&sp(i,M,c,O),ar=!1,ge=i.memoizedState,M.state=ge,Do(i,c,M,h);var He=i.memoizedState;L!==xe||ge!==He||Ln.current||ar?(typeof Le=="function"&&($c(i,a,Le,c),He=i.memoizedState),(te=ar||ip(i,a,te,c,ge,He,O)||!1)?(_e||typeof M.UNSAFE_componentWillUpdate!="function"&&typeof M.componentWillUpdate!="function"||(typeof M.componentWillUpdate=="function"&&M.componentWillUpdate(c,He,O),typeof M.UNSAFE_componentWillUpdate=="function"&&M.UNSAFE_componentWillUpdate(c,He,O)),typeof M.componentDidUpdate=="function"&&(i.flags|=4),typeof M.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),M.props=c,M.state=He,M.context=O,c=te):(typeof M.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof M.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return tu(n,i,a,c,m,h)}function tu(n,i,a,c,h,m){mp(n,i);var M=(i.flags&128)!==0;if(!c&&!M)return h&&Sf(i,a,!1),Ii(n,i,m);c=i.stateNode,u0.current=i;var L=M&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&M?(i.child=_s(i,n.child,null,m),i.child=_s(i,null,L,m)):bn(n,i,L,m),i.memoizedState=c.state,h&&Sf(i,a,!0),i.child}function vp(n){var i=n.stateNode;i.pendingContext?yf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&yf(n,i.context,!1),zc(n,i.containerInfo)}function _p(n,i,a,c,h){return vs(),Dc(h),i.flags|=256,bn(n,i,a,c),i.child}var nu={dehydrated:null,treeContext:null,retryLane:0};function iu(n){return{baseLanes:n,cachePool:null,transitions:null}}function yp(n,i,a){var c=i.pendingProps,h=Xt.current,m=!1,M=(i.flags&128)!==0,L;if((L=M)||(L=n!==null&&n.memoizedState===null?!1:(h&2)!==0),L?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Ft(Xt,h&1),n===null)return Pc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(M=c.children,n=c.fallback,m?(c=i.mode,m=i.child,M={mode:"hidden",children:M},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=M):m=Jo(M,c,0,null),n=Gr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=iu(a),i.memoizedState=nu,n):ru(i,M));if(h=n.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return d0(n,i,M,c,L,h,a);if(m){m=c.fallback,M=i.mode,h=n.child,L=h.sibling;var O={mode:"hidden",children:c.children};return(M&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=O,i.deletions=null):(c=fr(h,O),c.subtreeFlags=h.subtreeFlags&14680064),L!==null?m=fr(L,m):(m=Gr(m,M,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,M=n.child.memoizedState,M=M===null?iu(a):{baseLanes:M.baseLanes|a,cachePool:null,transitions:M.transitions},m.memoizedState=M,m.childLanes=n.childLanes&~a,i.memoizedState=nu,c}return m=n.child,n=m.sibling,c=fr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function ru(n,i){return i=Jo({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Oo(n,i,a,c){return c!==null&&Dc(c),_s(i,n.child,null,a),n=ru(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function d0(n,i,a,c,h,m,M){if(a)return i.flags&256?(i.flags&=-257,c=Jc(Error(t(422))),Oo(n,i,M,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=Jo({mode:"visible",children:c.children},h,0,null),m=Gr(m,h,M,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&_s(i,n.child,null,M),i.child.memoizedState=iu(M),i.memoizedState=nu,m);if((i.mode&1)===0)return Oo(n,i,M,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var L=c.dgst;return c=L,m=Error(t(419)),c=Jc(m,c,void 0),Oo(n,i,M,c)}if(L=(M&n.childLanes)!==0,In||L){if(c=an,c!==null){switch(M&-M){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|M))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Li(n,h),ui(c,n,h,-1))}return xu(),c=Jc(Error(t(421))),Oo(n,i,M,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=w0.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Wn=nr(h.nextSibling),Vn=i,Wt=!0,ai=null,n!==null&&($n[Zn++]=Pi,$n[Zn++]=Di,$n[Zn++]=Lr,Pi=n.id,Di=n.overflow,Lr=i),i=ru(i,c.children),i.flags|=4096,i)}function xp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Nc(n.return,i,a)}function su(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function Sp(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(bn(n,i,c.children,a),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&xp(n,a,i);else if(n.tag===19)xp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ft(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Lo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),su(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Lo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}su(i,!0,a,null,m);break;case"together":su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Bo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Fr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function h0(n,i,a){switch(i.tag){case 3:vp(i),vs();break;case 5:Nf(i);break;case 1:kn(i.type)&&Mo(i);break;case 4:zc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;Ft(Co,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ft(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?yp(n,i,a):(Ft(Xt,Xt.current&1),n=Ii(n,i,a),n!==null?n.sibling:null);Ft(Xt,Xt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Sp(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Ft(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,pp(n,i,a)}return Ii(n,i,a)}var Mp,au,Ep,wp;Mp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},au=function(){},Ep=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Nr(_i.current);var m=null;switch(a){case"input":h=G(n,h),c=G(n,c),m=[];break;case"select":h=le({},h,{value:void 0}),c=le({},c,{value:void 0}),m=[];break;case"textarea":h=T(n,h),c=T(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=yo)}ht(a,c);var M;a=null;for(te in h)if(!c.hasOwnProperty(te)&&h.hasOwnProperty(te)&&h[te]!=null)if(te==="style"){var L=h[te];for(M in L)L.hasOwnProperty(M)&&(a||(a={}),a[M]="")}else te!=="dangerouslySetInnerHTML"&&te!=="children"&&te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&te!=="autoFocus"&&(o.hasOwnProperty(te)?m||(m=[]):(m=m||[]).push(te,null));for(te in c){var O=c[te];if(L=h!=null?h[te]:void 0,c.hasOwnProperty(te)&&O!==L&&(O!=null||L!=null))if(te==="style")if(L){for(M in L)!L.hasOwnProperty(M)||O&&O.hasOwnProperty(M)||(a||(a={}),a[M]="");for(M in O)O.hasOwnProperty(M)&&L[M]!==O[M]&&(a||(a={}),a[M]=O[M])}else a||(m||(m=[]),m.push(te,a)),a=O;else te==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,L=L?L.__html:void 0,O!=null&&L!==O&&(m=m||[]).push(te,O)):te==="children"?typeof O!="string"&&typeof O!="number"||(m=m||[]).push(te,""+O):te!=="suppressContentEditableWarning"&&te!=="suppressHydrationWarning"&&(o.hasOwnProperty(te)?(O!=null&&te==="onScroll"&&Bt("scroll",n),m||L===O||(m=[])):(m=m||[]).push(te,O))}a&&(m=m||[]).push("style",a);var te=m;(i.updateQueue=te)&&(i.flags|=4)}},wp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Ca(n,i){if(!Wt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function f0(n,i,a){var c=i.pendingProps;switch(Cc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return kn(i.type)&&So(),_n(i),null;case 3:return c=i.stateNode,Ss(),Gt(Ln),Gt(gn),Gc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ao(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(vu(ai),ai=null))),au(n,i),_n(i),null;case 5:Oc(i);var h=Nr(Ea.current);if(a=i.type,n!==null&&i.stateNode!=null)Ep(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Nr(_i.current),Ao(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[vi]=i,c[_a]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(h=0;h<ma.length;h++)Bt(ma[h],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":En(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":Q(c,m),Bt("invalid",c)}ht(a,m),h=null;for(var M in m)if(m.hasOwnProperty(M)){var L=m[M];M==="children"?typeof L=="string"?c.textContent!==L&&(m.suppressHydrationWarning!==!0&&_o(c.textContent,L,n),h=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&_o(c.textContent,L,n),h=["children",""+L]):o.hasOwnProperty(M)&&L!=null&&M==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Dt(c),Ke(c,m,!0);break;case"textarea":Dt(c),ve(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=yo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{M=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=M.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=M.createElement(a,{is:c.is}):(n=M.createElement(a),a==="select"&&(M=n,c.multiple?M.multiple=!0:c.size&&(M.size=c.size))):n=M.createElementNS(n,a),n[vi]=i,n[_a]=c,Mp(n,i,!1,!1),i.stateNode=n;e:{switch(M=st(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),h=c;break;case"iframe":case"object":case"embed":Bt("load",n),h=c;break;case"video":case"audio":for(h=0;h<ma.length;h++)Bt(ma[h],n);h=c;break;case"source":Bt("error",n),h=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),h=c;break;case"details":Bt("toggle",n),h=c;break;case"input":En(n,c),h=G(n,c),Bt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=le({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":Q(n,c),h=T(n,c),Bt("invalid",n);break;default:h=c}ht(a,h),L=h;for(m in L)if(L.hasOwnProperty(m)){var O=L[m];m==="style"?tt(n,O):m==="dangerouslySetInnerHTML"?(O=O?O.__html:void 0,O!=null&&Fe(n,O)):m==="children"?typeof O=="string"?(a!=="textarea"||O!=="")&&ut(n,O):typeof O=="number"&&ut(n,""+O):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?O!=null&&m==="onScroll"&&Bt("scroll",n):O!=null&&P(n,m,O,M))}switch(a){case"input":Dt(n),Ke(n,c,!1);break;case"textarea":Dt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?D(n,!!c.multiple,m,!1):c.defaultValue!=null&&D(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=yo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)wp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(Ea.current),Nr(_i.current),Ao(i)){if(c=i.stateNode,a=i.memoizedProps,c[vi]=i,(m=c.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:_o(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_o(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[vi]=i,i.stateNode=c}return _n(i),null;case 13:if(Gt(Xt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Wt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bf(),vs(),i.flags|=98560,m=!1;else if(m=Ao(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[vi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ai!==null&&(vu(ai),ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?tn===0&&(tn=3):xu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return Ss(),au(n,i),n===null&&ga(i.stateNode.containerInfo),_n(i),null;case 10:return Ic(i.type._context),_n(i),null;case 17:return kn(i.type)&&So(),_n(i),null;case 19:if(Gt(Xt),m=i.memoizedState,m===null)return _n(i),null;if(c=(i.flags&128)!==0,M=m.rendering,M===null)if(c)Ca(m,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(M=Lo(n),M!==null){for(i.flags|=128,Ca(m,!1),c=M.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,M=m.alternate,M===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=M.childLanes,m.lanes=M.lanes,m.child=M.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=M.memoizedProps,m.memoizedState=M.memoizedState,m.updateQueue=M.updateQueue,m.type=M.type,n=M.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Ft(Xt,Xt.current&1|2),i.child}n=n.sibling}m.tail!==null&&W()>Ts&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304)}else{if(!c)if(n=Lo(M),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ca(m,!0),m.tail===null&&m.tailMode==="hidden"&&!M.alternate&&!Wt)return _n(i),null}else 2*W()-m.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,c=!0,Ca(m,!1),i.lanes=4194304);m.isBackwards?(M.sibling=i.child,i.child=M):(a=m.last,a!==null?a.sibling=M:i.child=M,m.last=M)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=W(),i.sibling=null,a=Xt.current,Ft(Xt,c?a&1|2:a&1),i):(_n(i),null);case 22:case 23:return yu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Xn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function p0(n,i){switch(Cc(i),i.tag){case 1:return kn(i.type)&&So(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Gt(Ln),Gt(gn),Gc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Oc(i),null;case 13:if(Gt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Xt),null;case 4:return Ss(),null;case 10:return Ic(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Go=!1,yn=!1,m0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Kt(n,i,c)}else a.current=null}function ou(n,i,a){try{a()}catch(c){Kt(n,i,c)}}var Tp=!1;function g0(n,i){if(yc=ao,n=nf(),dc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var M=0,L=-1,O=-1,te=0,_e=0,xe=n,ge=null;t:for(;;){for(var Le;xe!==a||h!==0&&xe.nodeType!==3||(L=M+h),xe!==m||c!==0&&xe.nodeType!==3||(O=M+c),xe.nodeType===3&&(M+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)ge=xe,xe=Le;for(;;){if(xe===n)break t;if(ge===a&&++te===h&&(L=M),ge===m&&++_e===c&&(O=M),(Le=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Le}a=L===-1||O===-1?null:{start:L,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(xc={focusedElem:n,selectionRange:a},ao=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,$t=He.memoizedState,$=i.stateNode,X=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:oi(i.type,Ve),$t);$.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Kt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=Tp,Tp=!1,He}function Ra(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&ou(i,a,m)}h=h.next}while(h!==c)}}function Ho(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function lu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Ap(n){var i=n.alternate;i!==null&&(n.alternate=null,Ap(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[vi],delete i[_a],delete i[wc],delete i[Jv],delete i[Qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function Cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function cu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=yo));else if(c!==4&&(n=n.child,n!==null))for(cu(n,i,a),n=n.sibling;n!==null;)cu(n,i,a),n=n.sibling}function uu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(uu(n,i,a),n=n.sibling;n!==null;)uu(n,i,a),n=n.sibling}var hn=null,li=!1;function lr(n,i,a){for(a=a.child;a!==null;)Rp(n,i,a),a=a.sibling}function Rp(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:yn||Es(a,i);case 6:var c=hn,h=li;hn=null,lr(n,i,a),hn=c,li=h,hn!==null&&(li?(n=hn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):hn.removeChild(a.stateNode));break;case 18:hn!==null&&(li?(n=hn,a=a.stateNode,n.nodeType===8?Ec(n.parentNode,a):n.nodeType===1&&Ec(n,a),oa(n)):Ec(hn,a.stateNode));break;case 4:c=hn,h=li,hn=a.stateNode.containerInfo,li=!0,lr(n,i,a),hn=c,li=h;break;case 0:case 11:case 14:case 15:if(!yn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,M=m.destroy;m=m.tag,M!==void 0&&((m&2)!==0||(m&4)!==0)&&ou(a,i,M),h=h.next}while(h!==c)}lr(n,i,a);break;case 1:if(!yn&&(Es(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(L){Kt(a,i,L)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(yn=(c=yn)||a.memoizedState!==null,lr(n,i,a),yn=c):lr(n,i,a);break;default:lr(n,i,a)}}function Pp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new m0),i.forEach(function(c){var h=T0.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,M=i,L=M;e:for(;L!==null;){switch(L.tag){case 5:hn=L.stateNode,li=!1;break e;case 3:hn=L.stateNode.containerInfo,li=!0;break e;case 4:hn=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(hn===null)throw Error(t(160));Rp(m,M,h),hn=null,li=!1;var O=h.alternate;O!==null&&(O.return=null),h.return=null}catch(te){Kt(h,i,te)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dp(i,n),i=i.sibling}function Dp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),xi(n),c&4){try{Ra(3,n,n.return),Ho(3,n)}catch(Ve){Kt(n,n.return,Ve)}try{Ra(5,n,n.return)}catch(Ve){Kt(n,n.return,Ve)}}break;case 1:ci(i,n),xi(n),c&512&&a!==null&&Es(a,a.return);break;case 5:if(ci(i,n),xi(n),c&512&&a!==null&&Es(a,a.return),n.flags&32){var h=n.stateNode;try{ut(h,"")}catch(Ve){Kt(n,n.return,Ve)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,M=a!==null?a.memoizedProps:m,L=n.type,O=n.updateQueue;if(n.updateQueue=null,O!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&pt(h,m),st(L,M);var te=st(L,m);for(M=0;M<O.length;M+=2){var _e=O[M],xe=O[M+1];_e==="style"?tt(h,xe):_e==="dangerouslySetInnerHTML"?Fe(h,xe):_e==="children"?ut(h,xe):P(h,_e,xe,te)}switch(L){case"input":dt(h,m);break;case"textarea":pe(h,m);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Le=m.value;Le!=null?D(h,!!m.multiple,Le,!1):ge!==!!m.multiple&&(m.defaultValue!=null?D(h,!!m.multiple,m.defaultValue,!0):D(h,!!m.multiple,m.multiple?[]:"",!1))}h[_a]=m}catch(Ve){Kt(n,n.return,Ve)}}break;case 6:if(ci(i,n),xi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ve){Kt(n,n.return,Ve)}}break;case 3:if(ci(i,n),xi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{oa(i.containerInfo)}catch(Ve){Kt(n,n.return,Ve)}break;case 4:ci(i,n),xi(n);break;case 13:ci(i,n),xi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(fu=W())),c&4&&Pp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(yn=(te=yn)||_e,ci(i,n),yn=te):ci(i,n),xi(n),c&8192){if(te=n.memoizedState!==null,(n.stateNode.isHidden=te)&&!_e&&(n.mode&1)!==0)for(Oe=n,_e=n.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(ge=Oe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:Ra(4,ge,ge.return);break;case 1:Es(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Kt(c,a,Ve)}}break;case 5:Es(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Ip(xe);continue}}Le!==null?(Le.return=ge,Oe=Le):Ip(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{h=xe.stateNode,te?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=xe.stateNode,O=xe.memoizedProps.style,M=O!=null&&O.hasOwnProperty("display")?O.display:null,L.style.display=$e("display",M))}catch(Ve){Kt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=te?"":xe.memoizedProps}catch(Ve){Kt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ci(i,n),xi(n),c&4&&Pp(n);break;case 21:break;default:ci(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(ut(h,""),c.flags&=-33);var m=Cp(n);uu(n,m,h);break;case 3:case 4:var M=c.stateNode.containerInfo,L=Cp(n);cu(n,L,M);break;default:throw Error(t(161))}}catch(O){Kt(n,n.return,O)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function v0(n,i,a){Oe=n,Lp(n)}function Lp(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var h=Oe,m=h.child;if(h.tag===22&&c){var M=h.memoizedState!==null||Go;if(!M){var L=h.alternate,O=L!==null&&L.memoizedState!==null||yn;L=Go;var te=yn;if(Go=M,(yn=O)&&!te)for(Oe=h;Oe!==null;)M=Oe,O=M.child,M.tag===22&&M.memoizedState!==null?Np(h):O!==null?(O.return=M,Oe=O):Np(h);for(;m!==null;)Oe=m,Lp(m),m=m.sibling;Oe=h,Go=L,yn=te}kp(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Oe=m):kp(n)}}function kp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ho(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&If(i,m,c);break;case 3:var M=i.updateQueue;if(M!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}If(i,M,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var O=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":O.autoFocus&&a.focus();break;case"img":O.src&&(a.src=O.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var te=i.alternate;if(te!==null){var _e=te.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&oa(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&lu(i)}catch(ge){Kt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Ip(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Np(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ho(4,i)}catch(O){Kt(i,a,O)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(O){Kt(i,h,O)}}var m=i.return;try{lu(i)}catch(O){Kt(i,m,O)}break;case 5:var M=i.return;try{lu(i)}catch(O){Kt(i,M,O)}}}catch(O){Kt(i,i.return,O)}if(i===n){Oe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Oe=L;break}Oe=i.return}}var _0=Math.ceil,Vo=C.ReactCurrentDispatcher,du=C.ReactCurrentOwner,ei=C.ReactCurrentBatchConfig,Mt=0,an=null,Zt=null,fn=0,Xn=0,ws=ir(0),tn=0,Pa=null,Fr=0,Wo=0,hu=0,Da=null,Nn=null,fu=0,Ts=1/0,Ni=null,Xo=!1,pu=null,cr=null,jo=!1,ur=null,qo=0,La=0,mu=null,Ko=-1,Yo=0;function Cn(){return(Mt&6)!==0?W():Ko!==-1?Ko:Ko=W()}function dr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:t0.transition!==null?(Yo===0&&(Yo=An()),Yo):(n=mt,n!==0||(n=window.event,n=n===void 0?16:Uh(n.type)),n)}function ui(n,i,a,c){if(50<La)throw La=0,mu=null,Error(t(185));Yt(n,a,c),((Mt&2)===0||n!==an)&&(n===an&&((Mt&2)===0&&(Wo|=a),tn===4&&hr(n,fn)),Un(n,c),a===1&&Mt===0&&(i.mode&1)===0&&(Ts=W()+500,Eo&&sr()))}function Un(n,i){var a=n.callbackNode;Cr(n,i);var c=ri(n,n===an?fn:0);if(c===0)a!==null&&K(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&K(a),i===1)n.tag===0?e0(Fp.bind(null,n)):Mf(Fp.bind(null,n)),$v(function(){(Mt&6)===0&&sr()}),a=null;else{switch(Ch(c)){case 1:a=Ce;break;case 4:a=Ie;break;case 16:a=ze;break;case 536870912:a=it;break;default:a=ze}a=Xp(a,Up.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Up(n,i){if(Ko=-1,Yo=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(As()&&n.callbackNode!==a)return null;var c=ri(n,n===an?fn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=$o(n,c);else{i=c;var h=Mt;Mt|=2;var m=Op();(an!==n||fn!==i)&&(Ni=null,Ts=W()+500,Or(n,i));do try{S0();break}catch(L){zp(n,L)}while(!0);kc(),Vo.current=m,Mt=h,Zt!==null?i=0:(an=null,fn=0,i=tn)}if(i!==0){if(i===2&&(h=Lt(n),h!==0&&(c=h,i=gu(n,h))),i===1)throw a=Pa,Or(n,0),hr(n,c),Un(n,W()),a;if(i===6)hr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!y0(h)&&(i=$o(n,c),i===2&&(m=Lt(n),m!==0&&(c=m,i=gu(n,m))),i===1))throw a=Pa,Or(n,0),hr(n,c),Un(n,W()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Nn,Ni);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=fu+500-W(),10<i)){if(ri(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Cn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Mc(Br.bind(null,n,Nn,Ni),i);break}Br(n,Nn,Ni);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var M=31-Tt(c);m=1<<M,M=i[M],M>h&&(h=M),c&=~m}if(c=h,c=W()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*_0(c/1960))-c,10<c){n.timeoutHandle=Mc(Br.bind(null,n,Nn,Ni),c);break}Br(n,Nn,Ni);break;case 5:Br(n,Nn,Ni);break;default:throw Error(t(329))}}}return Un(n,W()),n.callbackNode===a?Up.bind(null,n):null}function gu(n,i){var a=Da;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=$o(n,i),n!==2&&(i=Nn,Nn=a,i!==null&&vu(i)),n}function vu(n){Nn===null?Nn=n:Nn.push.apply(Nn,n)}function y0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~hu,i&=~Wo,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Tt(i),c=1<<a;n[a]=-1,i&=~c}}function Fp(n){if((Mt&6)!==0)throw Error(t(327));As();var i=ri(n,0);if((i&1)===0)return Un(n,W()),null;var a=$o(n,i);if(n.tag!==0&&a===2){var c=Lt(n);c!==0&&(i=c,a=gu(n,c))}if(a===1)throw a=Pa,Or(n,0),hr(n,i),Un(n,W()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Nn,Ni),Un(n,W()),null}function _u(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(Ts=W()+500,Eo&&sr())}}function zr(n){ur!==null&&ur.tag===0&&(Mt&6)===0&&As();var i=Mt;Mt|=1;var a=ei.transition,c=mt;try{if(ei.transition=null,mt=1,n)return n()}finally{mt=c,ei.transition=a,Mt=i,(Mt&6)===0&&sr()}}function yu(){Xn=ws.current,Gt(ws)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Yv(a)),Zt!==null)for(a=Zt.return;a!==null;){var c=a;switch(Cc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&So();break;case 3:Ss(),Gt(Ln),Gt(gn),Gc();break;case 5:Oc(c);break;case 4:Ss();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:Ic(c.type._context);break;case 22:case 23:yu()}a=a.return}if(an=n,Zt=n=fr(n.current,null),fn=Xn=i,tn=0,Pa=null,hu=Wo=Fr=0,Nn=Da=null,Ir!==null){for(i=0;i<Ir.length;i++)if(a=Ir[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var M=m.next;m.next=h,c.next=M}a.pending=c}Ir=null}return n}function zp(n,i){do{var a=Zt;try{if(kc(),ko.current=Fo,Io){for(var c=jt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Io=!1}if(Ur=0,sn=en=jt=null,wa=!1,Ta=0,du.current=null,a===null||a.return===null){tn=1,Pa=i,Zt=null;break}e:{var m=n,M=a.return,L=a,O=i;if(i=fn,L.flags|=32768,O!==null&&typeof O=="object"&&typeof O.then=="function"){var te=O,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=cp(M);if(Le!==null){Le.flags&=-257,up(Le,M,L,m,i),Le.mode&1&&lp(m,te,i),i=Le,O=te;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(O),i.updateQueue=Ve}else He.add(O);break e}else{if((i&1)===0){lp(m,te,i),xu();break e}O=Error(t(426))}}else if(Wt&&L.mode&1){var $t=cp(M);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),up($t,M,L,m,i),Dc(Ms(O,L));break e}}m=O=Ms(O,L),tn!==4&&(tn=2),Da===null?Da=[m]:Da.push(m),m=M;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=ap(m,O,i);kf(m,$);break e;case 1:L=O;var X=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(cr===null||!cr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=op(m,L,i);kf(m,we);break e}}m=m.return}while(m!==null)}Gp(a)}catch(Xe){i=Xe,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Op(){var n=Vo.current;return Vo.current=Fo,n===null?Fo:n}function xu(){(tn===0||tn===3||tn===2)&&(tn=4),an===null||(Fr&268435455)===0&&(Wo&268435455)===0||hr(an,fn)}function $o(n,i){var a=Mt;Mt|=2;var c=Op();(an!==n||fn!==i)&&(Ni=null,Or(n,i));do try{x0();break}catch(h){zp(n,h)}while(!0);if(kc(),Mt=a,Vo.current=c,Zt!==null)throw Error(t(261));return an=null,fn=0,tn}function x0(){for(;Zt!==null;)Bp(Zt)}function S0(){for(;Zt!==null&&!ne();)Bp(Zt)}function Bp(n){var i=Wp(n.alternate,n,Xn);n.memoizedProps=n.pendingProps,i===null?Gp(n):Zt=i,du.current=null}function Gp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=f0(a,i,Xn),a!==null){Zt=a;return}}else{if(a=p0(a,i),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);tn===0&&(tn=5)}function Br(n,i,a){var c=mt,h=ei.transition;try{ei.transition=null,mt=1,M0(n,i,a,c)}finally{ei.transition=h,mt=c}return null}function M0(n,i,a,c){do As();while(ur!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mn(n,m),n===an&&(Zt=an=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||jo||(jo=!0,Xp(ze,function(){return As(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var M=mt;mt=1;var L=Mt;Mt|=4,du.current=null,g0(n,a),Dp(a,n),Hv(xc),ao=!!yc,xc=yc=null,n.current=a,v0(a),ie(),Mt=L,mt=M,ei.transition=m}else n.current=a;if(jo&&(jo=!1,ur=n,qo=h),m=n.pendingLanes,m===0&&(cr=null),wt(a.stateNode),Un(n,W()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Xo)throw Xo=!1,n=pu,pu=null,n;return(qo&1)!==0&&n.tag!==0&&As(),m=n.pendingLanes,(m&1)!==0?n===mu?La++:(La=0,mu=n):La=0,sr(),null}function As(){if(ur!==null){var n=Ch(qo),i=ei.transition,a=mt;try{if(ei.transition=null,mt=16>n?16:n,ur===null)var c=!1;else{if(n=ur,ur=null,qo=0,(Mt&6)!==0)throw Error(t(331));var h=Mt;for(Mt|=4,Oe=n.current;Oe!==null;){var m=Oe,M=m.child;if((Oe.flags&16)!==0){var L=m.deletions;if(L!==null){for(var O=0;O<L.length;O++){var te=L[O];for(Oe=te;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:Ra(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var ge=_e.sibling,Le=_e.return;if(Ap(_e),_e===te){Oe=null;break}if(ge!==null){ge.return=Le,Oe=ge;break}Oe=Le}}}var He=m.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var $t=Ve.sibling;Ve.sibling=null,Ve=$t}while(Ve!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&M!==null)M.return=m,Oe=M;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ra(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Oe=$;break e}Oe=m.return}}var X=n.current;for(Oe=X;Oe!==null;){M=Oe;var Z=M.child;if((M.subtreeFlags&2064)!==0&&Z!==null)Z.return=M,Oe=Z;else e:for(M=X;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Ho(9,L)}}catch(Xe){Kt(L,L.return,Xe)}if(L===M){Oe=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,Oe=we;break e}Oe=L.return}}if(Mt=h,sr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}c=!0}return c}finally{mt=a,ei.transition=i}}return!1}function Hp(n,i,a){i=Ms(a,i),i=ap(n,i,1),n=or(n,i,1),i=Cn(),n!==null&&(Yt(n,1,i),Un(n,i))}function Kt(n,i,a){if(n.tag===3)Hp(n,n,a);else for(;i!==null;){if(i.tag===3){Hp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){n=Ms(a,n),n=op(i,n,1),i=or(i,n,1),n=Cn(),i!==null&&(Yt(i,1,n),Un(i,n));break}}i=i.return}}function E0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,an===n&&(fn&a)===a&&(tn===4||tn===3&&(fn&130023424)===fn&&500>W()-fu?Or(n,0):hu|=a),Un(n,i)}function Vp(n,i){i===0&&((n.mode&1)===0?i=1:(i=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var a=Cn();n=Li(n,i),n!==null&&(Yt(n,i,a),Un(n,a))}function w0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Vp(n,a)}function T0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Vp(n,a)}var Wp;Wp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)In=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return In=!1,h0(n,i,a);In=(n.flags&131072)!==0}else In=!1,Wt&&(i.flags&1048576)!==0&&Ef(i,To,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Bo(n,i),n=i.pendingProps;var h=ps(i,gn.current);xs(i,a),h=Wc(null,i,c,n,h,a);var m=Xc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,kn(c)?(m=!0,Mo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Fc(i),h.updater=zo,i.stateNode=h,h._reactInternals=i,Zc(i,c,n,a),i=tu(null,i,c,!0,m,a)):(i.tag=0,Wt&&m&&bc(i),bn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Bo(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=b0(c),n=oi(c,n),h){case 0:i=eu(null,i,c,n,a);break e;case 1:i=gp(null,i,c,n,a);break e;case 11:i=dp(null,i,c,n,a);break e;case 14:i=hp(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),eu(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),gp(n,i,c,h,a);case 3:e:{if(vp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Lf(n,i),Do(i,c,null,a);var M=i.memoizedState;if(c=M.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:M.cache,pendingSuspenseBoundaries:M.pendingSuspenseBoundaries,transitions:M.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Ms(Error(t(423)),i),i=_p(n,i,c,a,h);break e}else if(c!==h){h=Ms(Error(t(424)),i),i=_p(n,i,c,a,h);break e}else for(Wn=nr(i.stateNode.containerInfo.firstChild),Vn=i,Wt=!0,ai=null,a=Pf(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),c===h){i=Ii(n,i,a);break e}bn(n,i,c,a)}i=i.child}return i;case 5:return Nf(i),n===null&&Pc(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,M=h.children,Sc(c,h)?M=null:m!==null&&Sc(c,m)&&(i.flags|=32),mp(n,i),bn(n,i,M,a),i.child;case 6:return n===null&&Pc(i),null;case 13:return yp(n,i,a);case 4:return zc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=_s(i,null,c,a):bn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),dp(n,i,c,h,a);case 7:return bn(n,i,i.pendingProps,a),i.child;case 8:return bn(n,i,i.pendingProps.children,a),i.child;case 12:return bn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,M=h.value,Ft(Co,c._currentValue),c._currentValue=M,m!==null)if(si(m.value,M)){if(m.children===h.children&&!Ln.current){i=Ii(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var L=m.dependencies;if(L!==null){M=m.child;for(var O=L.firstContext;O!==null;){if(O.context===c){if(m.tag===1){O=ki(-1,a&-a),O.tag=2;var te=m.updateQueue;if(te!==null){te=te.shared;var _e=te.pending;_e===null?O.next=O:(O.next=_e.next,_e.next=O),te.pending=O}}m.lanes|=a,O=m.alternate,O!==null&&(O.lanes|=a),Nc(m.return,a,i),L.lanes|=a;break}O=O.next}}else if(m.tag===10)M=m.type===i.type?null:m.child;else if(m.tag===18){if(M=m.return,M===null)throw Error(t(341));M.lanes|=a,L=M.alternate,L!==null&&(L.lanes|=a),Nc(M,a,i),M=m.sibling}else M=m.child;if(M!==null)M.return=m;else for(M=m;M!==null;){if(M===i){M=null;break}if(m=M.sibling,m!==null){m.return=M.return,M=m;break}M=M.return}m=M}bn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,xs(i,a),h=Jn(h),c=c(h),i.flags|=1,bn(n,i,c,a),i.child;case 14:return c=i.type,h=oi(c,i.pendingProps),h=oi(c.type,h),hp(n,i,c,h,a);case 15:return fp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Bo(n,i),i.tag=1,kn(c)?(n=!0,Mo(i)):n=!1,xs(i,a),rp(i,c,h),Zc(i,c,h,a),tu(null,i,c,!0,n,a);case 19:return Sp(n,i,a);case 22:return pp(n,i,a)}throw Error(t(156,i.tag))};function Xp(n,i){return b(n,i)}function A0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new A0(n,i,a,c)}function Su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function b0(n){if(typeof n=="function")return Su(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===fe)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function Zo(n,i,a,c,h,m){var M=2;if(c=n,typeof n=="function")Su(n)&&(M=1);else if(typeof n=="string")M=5;else e:switch(n){case N:return Gr(a.children,h,m,i);case H:M=8,h|=8;break;case R:return n=ti(12,a,i,h|2),n.elementType=R,n.lanes=m,n;case Y:return n=ti(13,a,i,h),n.elementType=Y,n.lanes=m,n;case re:return n=ti(19,a,i,h),n.elementType=re,n.lanes=m,n;case me:return Jo(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:M=10;break e;case z:M=9;break e;case J:M=11;break e;case fe:M=14;break e;case ae:M=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(M,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function Gr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function Jo(n,i,a,c){return n=ti(22,n,c,i),n.elementType=me,n.lanes=a,n.stateNode={isHidden:!1},n}function Mu(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Eu(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function C0(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function wu(n,i,a,c,h,m,M,L,O){return n=new C0(n,i,a,L,O),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fc(m),n}function R0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function jp(n){if(!n)return rr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(kn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(kn(a))return xf(n,a,i)}return i}function qp(n,i,a,c,h,m,M,L,O){return n=wu(a,c,!0,n,h,m,M,L,O),n.context=jp(null),a=n.current,c=Cn(),h=dr(a),m=ki(c,h),m.callback=i??null,or(a,m,h),n.current.lanes=h,Yt(n,h,c),Un(n,c),n}function Qo(n,i,a,c){var h=i.current,m=Cn(),M=dr(h);return a=jp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(m,M),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=or(h,i,M),n!==null&&(ui(n,h,M,m),Po(n,h,M)),M}function el(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Kp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Tu(n,i){Kp(n,i),(n=n.alternate)&&Kp(n,i)}function P0(){return null}var Yp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Au(n){this._internalRoot=n}tl.prototype.render=Au.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qo(n,i,null,null)},tl.prototype.unmount=Au.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;zr(function(){Qo(null,n,null,null)}),i[Ci]=null}};function tl(n){this._internalRoot=n}tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Dh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Qi.length&&i!==0&&i<Qi[a].priority;a++);Qi.splice(a,0,n),a===0&&Ih(n)}};function bu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function nl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function $p(){}function D0(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var te=el(M);m.call(te)}}var M=qp(i,c,n,0,null,!1,!1,"",$p);return n._reactRootContainer=M,n[Ci]=M.current,ga(n.nodeType===8?n.parentNode:n),zr(),M}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var L=c;c=function(){var te=el(O);L.call(te)}}var O=wu(n,0,!1,null,null,!1,!1,"",$p);return n._reactRootContainer=O,n[Ci]=O.current,ga(n.nodeType===8?n.parentNode:n),zr(function(){Qo(i,O,a,c)}),O}function il(n,i,a,c,h){var m=a._reactRootContainer;if(m){var M=m;if(typeof h=="function"){var L=h;h=function(){var O=el(M);L.call(O)}}Qo(i,M,n,h)}else M=D0(a,i,n,h,c);return el(M)}Rh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=dn(i.pendingLanes);a!==0&&(Rr(i,a|1),Un(i,W()),(Mt&6)===0&&(Ts=W()+500,sr()))}break;case 13:zr(function(){var c=Li(n,1);if(c!==null){var h=Cn();ui(c,n,1,h)}}),Tu(n,1)}},Jl=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var a=Cn();ui(i,n,134217728,a)}Tu(n,134217728)}},Ph=function(n){if(n.tag===13){var i=dr(n),a=Li(n,i);if(a!==null){var c=Cn();ui(a,n,i,c)}Tu(n,i)}},Dh=function(){return mt},Lh=function(n,i){var a=mt;try{return mt=n,i()}finally{mt=a}},be=function(n,i,a){switch(i){case"input":if(dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=xo(c);if(!h)throw Error(t(90));vt(c),dt(c,h)}}}break;case"textarea":pe(n,a);break;case"select":i=a.value,i!=null&&D(n,!!a.multiple,i,!1)}},Ot=_u,Qt=zr;var L0={usingClientEntryPoint:!1,Events:[ya,hs,xo,Pe,at,_u]},ka={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k0={bundleType:ka.bundleType,version:ka.version,rendererPackageName:ka.rendererPackageName,rendererConfig:ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=no(n),n===null?null:n.stateNode},findFiberByHostInstance:ka.findFiberByHostInstance||P0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rl.isDisabled&&rl.supportsFiber)try{qe=rl.inject(k0),ot=rl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bu(i))throw Error(t(200));return R0(n,i,null,a)},Fn.createRoot=function(n,i){if(!bu(n))throw Error(t(299));var a=!1,c="",h=Yp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=wu(n,1,!1,null,null,a,!1,c,h),n[Ci]=i.current,ga(n.nodeType===8?n.parentNode:n),new Au(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=no(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return zr(n)},Fn.hydrate=function(n,i,a){if(!nl(i))throw Error(t(200));return il(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!bu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",M=Yp;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(M=a.onRecoverableError)),i=qp(i,null,n,1,a??null,h,!1,m,M),n[Ci]=i.current,ga(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new tl(i)},Fn.render=function(n,i,a){if(!nl(i))throw Error(t(200));return il(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!nl(n))throw Error(t(40));return n._reactRootContainer?(zr(function(){il(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},Fn.unstable_batchedUpdates=_u,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!nl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return il(n,i,a,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var rm;function V0(){if(rm)return Pu.exports;rm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Pu.exports=H0(),Pu.exports}var sm;function W0(){if(sm)return sl;sm=1;var s=V0();return sl.createRoot=s.createRoot,sl.hydrateRoot=s.hydrateRoot,sl}var X0=W0();const j0=ah(X0);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=Rt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>Rt.createElement("svg",{ref:f,...K0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:mg("lucide",o),...d},[...u.map(([p,v])=>Rt.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=(s,e)=>{const t=Rt.forwardRef(({className:r,...o},l)=>Rt.createElement(Y0,{ref:l,iconNode:e,className:mg(`lucide-${q0(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=un("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=un("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=un("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=un("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=un("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=un("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=un("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=un("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=un("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=un("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=un("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=un("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=un("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=un("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=un("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=un("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=un("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=un("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lh="171",u_=0,cm=1,d_=2,gg=1,vg=2,Gi=3,wr=0,On=1,Hi=2,Mr=0,Vs=1,um=2,dm=3,hm=4,h_=5,$r=100,f_=101,p_=102,m_=103,g_=104,v_=200,__=201,y_=202,x_=203,_d=204,yd=205,S_=206,M_=207,E_=208,w_=209,T_=210,A_=211,b_=212,C_=213,R_=214,xd=0,Sd=1,Md=2,js=3,Ed=4,wd=5,Td=6,Ad=7,_g=0,P_=1,D_=2,Er=0,L_=1,k_=2,I_=3,yg=4,N_=5,U_=6,F_=7,xg=300,qs=301,Ks=302,bd=303,Cd=304,jl=306,Rd=1e3,Jr=1001,Pd=1002,mi=1003,z_=1004,al=1005,Ei=1006,Iu=1007,Qr=1008,ji=1009,Sg=1010,Mg=1011,qa=1012,ch=1013,es=1014,Vi=1015,Ka=1016,uh=1017,dh=1018,Ys=1020,Eg=35902,wg=1021,Tg=1022,pi=1023,Ag=1024,bg=1025,Ws=1026,$s=1027,Cg=1028,hh=1029,Rg=1030,fh=1031,ph=1033,Il=33776,Nl=33777,Ul=33778,Fl=33779,Dd=35840,Ld=35841,kd=35842,Id=35843,Nd=36196,Ud=37492,Fd=37496,zd=37808,Od=37809,Bd=37810,Gd=37811,Hd=37812,Vd=37813,Wd=37814,Xd=37815,jd=37816,qd=37817,Kd=37818,Yd=37819,$d=37820,Zd=37821,zl=36492,Jd=36494,Qd=36495,Pg=36283,eh=36284,th=36285,nh=36286,O_=3200,B_=3201,Dg=0,G_=1,Sr="",Kn="srgb",Zs="srgb-linear",Gl="linear",It="srgb",bs=7680,fm=519,H_=512,V_=513,W_=514,Lg=515,X_=516,j_=517,q_=518,K_=519,pm=35044,mm="300 es",Wi=2e3,Hl=2001;class Qs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ol=Math.PI/180,ih=180/Math.PI;function Ya(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[r&255]+xn[r>>8&255]+xn[r>>16&255]+xn[r>>24&255]).toLowerCase()}function gt(s,e,t){return Math.max(e,Math.min(t,s))}function Y_(s,e){return(s%e+e)%e}function Nu(s,e,t){return(1-t)*s+t*e}function Na(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Qe{constructor(e=0,t=0){Qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,d,f,p){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=f,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],v=r[4],_=r[7],g=r[2],x=r[5],E=r[8],w=o[0],S=o[3],y=o[6],I=o[1],P=o[4],C=o[7],F=o[2],k=o[5],N=o[8];return l[0]=u*w+d*I+f*F,l[3]=u*S+d*P+f*k,l[6]=u*y+d*C+f*N,l[1]=p*w+v*I+_*F,l[4]=p*S+v*P+_*k,l[7]=p*y+v*C+_*N,l[2]=g*w+x*I+E*F,l[5]=g*S+x*P+E*k,l[8]=g*y+x*C+E*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-r*l*v+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8],_=v*u-d*p,g=d*f-v*l,x=p*l-u*f,E=t*_+r*g+o*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*p-v*r)*w,e[2]=(d*r-o*u)*w,e[3]=g*w,e[4]=(v*t-o*f)*w,e[5]=(o*l-d*t)*w,e[6]=x*w,e[7]=(r*f-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Uu.makeScale(e,t)),this}rotate(e){return this.premultiply(Uu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Uu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Uu=new lt;function kg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Vl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $_(){const s=Vl("canvas");return s.style.display="block",s}const gm={};function Gs(s){s in gm||(gm[s]=!0,console.warn(s))}function Z_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function J_(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Q_(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vm=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_m=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ey(){const s={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=Xi(o.r),o.g=Xi(o.g),o.b=Xi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=Xs(o.r),o.g=Xs(o.g),o.b=Xs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?Gl:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Zs]:{primaries:e,whitePoint:r,transfer:Gl,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:It,toXYZ:vm,fromXYZ:_m,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const bt=ey();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Xs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class ty{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=Vl("canvas")),Cs.width=e.width,Cs.height=e.height;const r=Cs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ny=0;class Ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ny++}),this.uuid=Ya(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Fu(o[u].image)):l.push(Fu(o[u]))}else l=Fu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Fu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ty.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iy=0;class Bn extends Qs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Jr,o=Jr,l=Ei,u=Qr,d=pi,f=ji,p=Bn.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ya(),this.name="",this.source=new Ig(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rd:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case Pd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rd:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case Pd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=xg;Bn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,r=0,o=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],v=f[4],_=f[8],g=f[1],x=f[5],E=f[9],w=f[2],S=f[6],y=f[10];if(Math.abs(v-g)<.01&&Math.abs(_-w)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+w)<.1&&Math.abs(E+S)<.1&&Math.abs(p+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,C=(x+1)/2,F=(y+1)/2,k=(v+g)/4,N=(_+w)/4,H=(E+S)/4;return P>C&&P>F?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=k/r,l=N/r):C>F?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=k/o,l=H/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=N/l,o=H/l),this.set(r,o,l,t),this}let I=Math.sqrt((S-E)*(S-E)+(_-w)*(_-w)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(S-E)/I,this.y=(_-w)/I,this.z=(g-v)/I,this.w=Math.acos((p+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ry extends Qs{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ig(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends ry{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ng extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sy extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $a{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];const g=l[u+0],x=l[u+1],E=l[u+2],w=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d===1){e[t+0]=g,e[t+1]=x,e[t+2]=E,e[t+3]=w;return}if(_!==w||f!==g||p!==x||v!==E){let S=1-d;const y=f*g+p*x+v*E+_*w,I=y>=0?1:-1,P=1-y*y;if(P>Number.EPSILON){const F=Math.sqrt(P),k=Math.atan2(F,y*I);S=Math.sin(S*k)/F,d=Math.sin(d*k)/F}const C=d*I;if(f=f*S+g*C,p=p*S+x*C,v=v*S+E*C,_=_*S+w*C,S===1-d){const F=1/Math.sqrt(f*f+p*p+v*v+_*_);f*=F,p*=F,v*=F,_*=F}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],v=r[o+3],_=l[u],g=l[u+1],x=l[u+2],E=l[u+3];return e[t]=d*E+v*_+f*x-p*g,e[t+1]=f*E+v*g+p*_-d*x,e[t+2]=p*E+v*x+d*g-f*_,e[t+3]=v*E-d*_-f*g-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),v=d(o/2),_=d(l/2),g=f(r/2),x=f(o/2),E=f(l/2);switch(u){case"XYZ":this._x=g*v*_+p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_-g*x*E;break;case"YXZ":this._x=g*v*_+p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_+g*x*E;break;case"ZXY":this._x=g*v*_-p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_-g*x*E;break;case"ZYX":this._x=g*v*_-p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_+g*x*E;break;case"YZX":this._x=g*v*_+p*x*E,this._y=p*x*_+g*v*E,this._z=p*v*E-g*x*_,this._w=p*v*_-g*x*E;break;case"XZY":this._x=g*v*_-p*x*E,this._y=p*x*_-g*v*E,this._z=p*v*E+g*x*_,this._w=p*v*_+g*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],v=t[6],_=t[10],g=r+d+_;if(g>0){const x=.5/Math.sqrt(g+1);this._w=.25/x,this._x=(v-f)*x,this._y=(l-p)*x,this._z=(u-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(l-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-o)/x,this._x=(l+p)/x,this._y=(f+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,v=t._w;return this._x=r*v+u*d+o*p-l*f,this._y=o*v+u*f+l*d-r*p,this._z=l*v+u*p+r*f-o*d,this._w=u*v-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),v=Math.atan2(p,d),_=Math.sin((1-t)*v)/p,g=Math.sin(t*v)/p;return this._w=u*_+this._w*g,this._x=r*_+this._x*g,this._y=o*_+this._y*g,this._z=l*_+this._z*g,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,r=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),v=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+f*p+u*_-d*v,this.y=r+f*v+d*p-l*_,this.z=o+f*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new B,ym=new $a;class Za{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ll.subVectors(this.max,Ua),Rs.subVectors(e.a,Ua),Ps.subVectors(e.b,Ua),Ds.subVectors(e.c,Ua),mr.subVectors(Ps,Rs),gr.subVectors(Ds,Ps),Hr.subVectors(Rs,Ds);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!Ou(t,Rs,Ps,Ds,ll)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,Rs,Ps,Ds,ll))?!1:(cl.crossVectors(mr,gr),t=[cl.x,cl.y,cl.z],Ou(t,Rs,Ps,Ds,ll))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new B,new B,new B,new B,new B,new B,new B,new B],di=new B,ol=new Za,Rs=new B,Ps=new B,Ds=new B,mr=new B,gr=new B,Hr=new B,Ua=new B,ll=new B,cl=new B,Vr=new B;function Ou(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Vr.fromArray(s,l);const d=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),f=e.dot(Vr),p=t.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>d)return!1}return!0}const ay=new Za,Fa=new B,Bu=new B;class ql{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ay.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Fa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Bu)),this.expandByPoint(Fa.copy(e.center).sub(Bu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new B,Gu=new B,ul=new B,vr=new B,Hu=new B,dl=new B,Vu=new B;class mh{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Fi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,t),Fi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Gu.copy(e).add(t).multiplyScalar(.5),ul.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Gu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ul),d=vr.dot(this.direction),f=-vr.dot(ul),p=vr.lengthSq(),v=Math.abs(1-u*u);let _,g,x,E;if(v>0)if(_=u*f-d,g=u*d-f,E=l*v,_>=0)if(g>=-E)if(g<=E){const w=1/v;_*=w,g*=w,x=_*(_+u*g+2*d)+g*(u*_+g+2*f)+p}else g=l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*f)+p;else g=-l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*f)+p;else g<=-E?(_=Math.max(0,-(-u*l+d)),g=_>0?-l:Math.min(Math.max(-l,-f),l),x=-_*_+g*(g+2*f)+p):g<=E?(_=0,g=Math.min(Math.max(-l,-f),l),x=g*(g+2*f)+p):(_=Math.max(0,-(u*l+d)),g=_>0?l:Math.min(Math.max(-l,-f),l),x=-_*_+g*(g+2*f)+p);else g=u>0?-l:l,_=Math.max(0,-(u*g+d)),x=-_*_+g*(g+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Gu).addScaledVector(ul,g),x}intersectSphere(e,t){Fi.subVectors(e.center,this.origin);const r=Fi.dot(this.direction),o=Fi.dot(Fi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-g.z)*_,f=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,f=(e.min.z-g.z)*_),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,t,r,o,l){Hu.subVectors(t,e),dl.subVectors(r,e),Vu.crossVectors(Hu,dl);let u=this.direction.dot(Vu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const f=d*this.direction.dot(dl.crossVectors(vr,dl));if(f<0)return null;const p=d*this.direction.dot(Hu.cross(vr));if(p<0||f+p>u)return null;const v=-d*vr.dot(Vu);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zt{constructor(e,t,r,o,l,u,d,f,p,v,_,g,x,E,w,S){zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,v,_,g,x,E,w,S)}set(e,t,r,o,l,u,d,f,p,v,_,g,x,E,w,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=d,y[13]=f,y[2]=p,y[6]=v,y[10]=_,y[14]=g,y[3]=x,y[7]=E,y[11]=w,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/Ls.setFromMatrixColumn(e,0).length(),l=1/Ls.setFromMatrixColumn(e,1).length(),u=1/Ls.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,x=u*_,E=d*v,w=d*_;t[0]=f*v,t[4]=-f*_,t[8]=p,t[1]=x+E*p,t[5]=g-w*p,t[9]=-d*f,t[2]=w-g*p,t[6]=E+x*p,t[10]=u*f}else if(e.order==="YXZ"){const g=f*v,x=f*_,E=p*v,w=p*_;t[0]=g+w*d,t[4]=E*d-x,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-d,t[2]=x*d-E,t[6]=w+g*d,t[10]=u*f}else if(e.order==="ZXY"){const g=f*v,x=f*_,E=p*v,w=p*_;t[0]=g-w*d,t[4]=-u*_,t[8]=E+x*d,t[1]=x+E*d,t[5]=u*v,t[9]=w-g*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const g=u*v,x=u*_,E=d*v,w=d*_;t[0]=f*v,t[4]=E*p-x,t[8]=g*p+w,t[1]=f*_,t[5]=w*p+g,t[9]=x*p-E,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const g=u*f,x=u*p,E=d*f,w=d*p;t[0]=f*v,t[4]=w-g*_,t[8]=E*_+x,t[1]=_,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=x*_+E,t[10]=g-w*_}else if(e.order==="XZY"){const g=u*f,x=u*p,E=d*f,w=d*p;t[0]=f*v,t[4]=-_,t[8]=p*v,t[1]=g*_+w,t[5]=u*v,t[9]=x*_-E,t[2]=E*_-x,t[6]=d*v,t[10]=w*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oy,e,ly)}lookAt(e,t,r){const o=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),_r.crossVectors(r,jn),_r.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),_r.crossVectors(r,jn)),_r.normalize(),hl.crossVectors(jn,_r),o[0]=_r.x,o[4]=hl.x,o[8]=jn.x,o[1]=_r.y,o[5]=hl.y,o[9]=jn.y,o[2]=_r.z,o[6]=hl.z,o[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],v=r[1],_=r[5],g=r[9],x=r[13],E=r[2],w=r[6],S=r[10],y=r[14],I=r[3],P=r[7],C=r[11],F=r[15],k=o[0],N=o[4],H=o[8],R=o[12],A=o[1],z=o[5],J=o[9],Y=o[13],re=o[2],fe=o[6],ae=o[10],me=o[14],V=o[3],ce=o[7],le=o[11],U=o[15];return l[0]=u*k+d*A+f*re+p*V,l[4]=u*N+d*z+f*fe+p*ce,l[8]=u*H+d*J+f*ae+p*le,l[12]=u*R+d*Y+f*me+p*U,l[1]=v*k+_*A+g*re+x*V,l[5]=v*N+_*z+g*fe+x*ce,l[9]=v*H+_*J+g*ae+x*le,l[13]=v*R+_*Y+g*me+x*U,l[2]=E*k+w*A+S*re+y*V,l[6]=E*N+w*z+S*fe+y*ce,l[10]=E*H+w*J+S*ae+y*le,l[14]=E*R+w*Y+S*me+y*U,l[3]=I*k+P*A+C*re+F*V,l[7]=I*N+P*z+C*fe+F*ce,l[11]=I*H+P*J+C*ae+F*le,l[15]=I*R+P*Y+C*me+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],v=e[2],_=e[6],g=e[10],x=e[14],E=e[3],w=e[7],S=e[11],y=e[15];return E*(+l*f*_-o*p*_-l*d*g+r*p*g+o*d*x-r*f*x)+w*(+t*f*x-t*p*g+l*u*g-o*u*x+o*p*v-l*f*v)+S*(+t*p*_-t*d*x-l*u*_+r*u*x+l*d*v-r*p*v)+y*(-o*d*v-t*f*_+t*d*g+o*u*_-r*u*g+r*f*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8],_=e[9],g=e[10],x=e[11],E=e[12],w=e[13],S=e[14],y=e[15],I=_*S*p-w*g*p+w*f*x-d*S*x-_*f*y+d*g*y,P=E*g*p-v*S*p-E*f*x+u*S*x+v*f*y-u*g*y,C=v*w*p-E*_*p+E*d*x-u*w*x-v*d*y+u*_*y,F=E*_*f-v*w*f-E*d*g+u*w*g+v*d*S-u*_*S,k=t*I+r*P+o*C+l*F;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/k;return e[0]=I*N,e[1]=(w*g*l-_*S*l-w*o*x+r*S*x+_*o*y-r*g*y)*N,e[2]=(d*S*l-w*f*l+w*o*p-r*S*p-d*o*y+r*f*y)*N,e[3]=(_*f*l-d*g*l-_*o*p+r*g*p+d*o*x-r*f*x)*N,e[4]=P*N,e[5]=(v*S*l-E*g*l+E*o*x-t*S*x-v*o*y+t*g*y)*N,e[6]=(E*f*l-u*S*l-E*o*p+t*S*p+u*o*y-t*f*y)*N,e[7]=(u*g*l-v*f*l+v*o*p-t*g*p-u*o*x+t*f*x)*N,e[8]=C*N,e[9]=(E*_*l-v*w*l-E*r*x+t*w*x+v*r*y-t*_*y)*N,e[10]=(u*w*l-E*d*l+E*r*p-t*w*p-u*r*y+t*d*y)*N,e[11]=(v*d*l-u*_*l-v*r*p+t*_*p+u*r*x-t*d*x)*N,e[12]=F*N,e[13]=(v*w*o-E*_*o+E*r*g-t*w*g-v*r*S+t*_*S)*N,e[14]=(E*d*o-u*w*o-E*r*f+t*w*f+u*r*S-t*d*S)*N,e[15]=(u*_*o-v*d*o+v*r*f-t*_*f-u*r*g+t*d*g)*N,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,v*d+r,v*f-o*u,0,p*f-o*d,v*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,v=u+u,_=d+d,g=l*p,x=l*v,E=l*_,w=u*v,S=u*_,y=d*_,I=f*p,P=f*v,C=f*_,F=r.x,k=r.y,N=r.z;return o[0]=(1-(w+y))*F,o[1]=(x+C)*F,o[2]=(E-P)*F,o[3]=0,o[4]=(x-C)*k,o[5]=(1-(g+y))*k,o[6]=(S+I)*k,o[7]=0,o[8]=(E+P)*N,o[9]=(S-I)*N,o[10]=(1-(g+w))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=Ls.set(o[0],o[1],o[2]).length();const u=Ls.set(o[4],o[5],o[6]).length(),d=Ls.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const p=1/l,v=1/u,_=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Wi){const f=this.elements,p=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),g=(r+o)/(r-o);let x,E;if(d===Wi)x=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(d===Hl)x=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=v,f[9]=g,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=E,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi){const f=this.elements,p=1/(t-e),v=1/(r-o),_=1/(u-l),g=(t+e)*p,x=(r+o)*v;let E,w;if(d===Wi)E=(u+l)*_,w=-2*_;else if(d===Hl)E=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-g,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-E,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ls=new B,hi=new zt,oy=new B(0,0,0),ly=new B(1,1,1),_r=new B,hl=new B,jn=new B,xm=new zt,Sm=new $a;class Ti{constructor(e=0,t=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],v=o[9],_=o[2],g=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(gt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-gt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(gt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return xm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sm.setFromEuler(this),this.setFromQuaternion(Sm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class gh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cy=0;const Mm=new B,ks=new $a,zi=new zt,fl=new B,za=new B,uy=new B,dy=new $a,Em=new B(1,0,0),wm=new B(0,1,0),Tm=new B(0,0,1),Am={type:"added"},hy={type:"removed"},Is={type:"childadded",child:null},Wu={type:"childremoved",child:null};class cn extends Qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=Ya(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new B,t=new Ti,r=new $a,o=new B(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new zt},normalMatrix:{value:new lt}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.multiply(ks),this}rotateOnWorldAxis(e,t){return ks.setFromAxisAngle(e,t),this.quaternion.premultiply(ks),this}rotateX(e){return this.rotateOnAxis(Em,e)}rotateY(e){return this.rotateOnAxis(wm,e)}rotateZ(e){return this.rotateOnAxis(Tm,e)}translateOnAxis(e,t){return Mm.copy(e).applyQuaternion(this.quaternion),this.position.add(Mm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Em,e)}translateY(e){return this.translateOnAxis(wm,e)}translateZ(e){return this.translateOnAxis(Tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fl.copy(e):fl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(za,fl,this.up):zi.lookAt(fl,za,this.up),this.quaternion.setFromRotationMatrix(zi),o&&(zi.extractRotation(o.matrixWorld),ks.setFromRotationMatrix(zi),this.quaternion.premultiply(ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hy),Wu.child=e,this.dispatchEvent(Wu),Wu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,uy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),x=u(e.animations),E=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(d){const f=[];for(const p in d){const v=d[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}cn.DEFAULT_UP=new B(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new B,Oi=new B,Xu=new B,Bi=new B,Ns=new B,Us=new B,bm=new B,ju=new B,qu=new B,Ku=new B,Yu=new Nt,$u=new Nt,Zu=new Nt;class ii{constructor(e=new B,t=new B,r=new B){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){fi.subVectors(o,t),Oi.subVectors(r,t),Xu.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(Oi),f=fi.dot(Xu),p=Oi.dot(Oi),v=Oi.dot(Xu),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const g=1/_,x=(p*f-d*v)*g,E=(u*v-d*f)*g;return l.set(1-x-E,E,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,Bi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Bi.x),f.addScaledVector(u,Bi.y),f.addScaledVector(d,Bi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return Yu.setScalar(0),$u.setScalar(0),Zu.setScalar(0),Yu.fromBufferAttribute(e,t),$u.fromBufferAttribute(e,r),Zu.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Yu,l.x),u.addScaledVector($u,l.y),u.addScaledVector(Zu,l.z),u}static isFrontFacing(e,t,r,o){return fi.subVectors(r,t),Oi.subVectors(e,t),fi.cross(Oi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ii.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Ns.subVectors(o,r),Us.subVectors(l,r),ju.subVectors(e,r);const f=Ns.dot(ju),p=Us.dot(ju);if(f<=0&&p<=0)return t.copy(r);qu.subVectors(e,o);const v=Ns.dot(qu),_=Us.dot(qu);if(v>=0&&_<=v)return t.copy(o);const g=f*_-v*p;if(g<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(r).addScaledVector(Ns,u);Ku.subVectors(e,l);const x=Ns.dot(Ku),E=Us.dot(Ku);if(E>=0&&x<=E)return t.copy(l);const w=x*p-f*E;if(w<=0&&p>=0&&E<=0)return d=p/(p-E),t.copy(r).addScaledVector(Us,d);const S=v*E-x*_;if(S<=0&&_-v>=0&&x-E>=0)return bm.subVectors(l,o),d=(_-v)/(_-v+(x-E)),t.copy(o).addScaledVector(bm,d);const y=1/(S+w+g);return u=w*y,d=g*y,t.copy(r).addScaledVector(Ns,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},pl={h:0,s:0,l:0};function Ju(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class _t{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=bt.workingColorSpace){return this.r=e,this.g=t,this.b=r,bt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=bt.workingColorSpace){if(e=Y_(e,1),t=gt(t,0,1),r=gt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Ju(u,l,e+1/3),this.g=Ju(u,l,e),this.b=Ju(u,l,e-1/3)}return bt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=Ug[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Xs(e.r),this.g=Xs(e.g),this.b=Xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return bt.fromWorkingColorSpace(Sn.copy(this),e),Math.round(gt(Sn.r*255,0,255))*65536+Math.round(gt(Sn.g*255,0,255))*256+Math.round(gt(Sn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const v=(d+u)/2;if(d===u)f=0,p=0;else{const _=u-d;switch(p=v<=.5?_/(u+d):_/(2-u-d),u){case r:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-r)/_+2;break;case l:f=(r-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Kn){bt.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(pl);const r=Nu(yr.h,pl.h,t),o=Nu(yr.s,pl.s,t),l=Nu(yr.l,pl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new _t;_t.NAMES=Ug;let fy=0;class ea extends Qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Ya(),this.name="",this.type="Material",this.blending=Vs,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_d,this.blendDst=yd,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Vs&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==_d&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Fg extends ea{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new B,ml=new Qe;class wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=pm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ml.fromBufferAttribute(this,t),ml.applyMatrix3(e),this.setXY(t,ml.x,ml.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Na(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),o=zn(o,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class zg extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Og extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ht extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let py=0;const ni=new zt,Qu=new cn,Fs=new B,qn=new Za,Oa=new Za,ln=new B;class Gn extends Qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Ya(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kg(e)?Og:zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return Qu.lookAt(e),Qu.updateMatrix(),this.applyMatrix4(Qu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ht(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Oa.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(qn.min,Oa.min),qn.expandByPoint(ln),ln.addVectors(qn.max,Oa.max),qn.expandByPoint(ln)):(qn.expandByPoint(Oa.min),qn.expandByPoint(Oa.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)ln.fromBufferAttribute(d,p),f&&(Fs.fromBufferAttribute(e,p),ln.add(Fs)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let H=0;H<r.count;H++)d[H]=new B,f[H]=new B;const p=new B,v=new B,_=new B,g=new Qe,x=new Qe,E=new Qe,w=new B,S=new B;function y(H,R,A){p.fromBufferAttribute(r,H),v.fromBufferAttribute(r,R),_.fromBufferAttribute(r,A),g.fromBufferAttribute(l,H),x.fromBufferAttribute(l,R),E.fromBufferAttribute(l,A),v.sub(p),_.sub(p),x.sub(g),E.sub(g);const z=1/(x.x*E.y-E.x*x.y);isFinite(z)&&(w.copy(v).multiplyScalar(E.y).addScaledVector(_,-x.y).multiplyScalar(z),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(z),d[H].add(w),d[R].add(w),d[A].add(w),f[H].add(S),f[R].add(S),f[A].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let H=0,R=I.length;H<R;++H){const A=I[H],z=A.start,J=A.count;for(let Y=z,re=z+J;Y<re;Y+=3)y(e.getX(Y+0),e.getX(Y+1),e.getX(Y+2))}const P=new B,C=new B,F=new B,k=new B;function N(H){F.fromBufferAttribute(o,H),k.copy(F);const R=d[H];P.copy(R),P.sub(F.multiplyScalar(F.dot(R))).normalize(),C.crossVectors(k,R);const z=C.dot(f[H])<0?-1:1;u.setXYZW(H,P.x,P.y,P.z,z)}for(let H=0,R=I.length;H<R;++H){const A=I[H],z=A.start,J=A.count;for(let Y=z,re=z+J;Y<re;Y+=3)N(e.getX(Y+0)),N(e.getX(Y+1)),N(e.getX(Y+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,x=r.count;g<x;g++)r.setXYZ(g,0,0,0);const o=new B,l=new B,u=new B,d=new B,f=new B,p=new B,v=new B,_=new B;if(e)for(let g=0,x=e.count;g<x;g+=3){const E=e.getX(g+0),w=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(r,E),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),d.add(v),f.add(v),p.add(v),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let g=0,x=t.count;g<x;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,f){const p=d.array,v=d.itemSize,_=d.normalized,g=new p.constructor(f.length*v);let x=0,E=0;for(let w=0,S=f.length;w<S;w++){d.isInterleavedBufferAttribute?x=f[w]*d.data.stride+d.offset:x=f[w]*v;for(let y=0;y<v;y++)g[E++]=p[x++]}return new wi(g,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let v=0,_=p.length;v<_;v++){const g=p[v],x=e(g,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let _=0,g=p.length;_<g;_++){const x=p[_];v.push(x.toJSON(e.data))}v.length>0&&(o[f]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let g=0,x=_.length;g<x;g++)v.push(_[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Cm=new zt,Wr=new mh,gl=new ql,Rm=new B,vl=new B,_l=new B,yl=new B,ed=new B,xl=new B,Pm=new B,Sl=new B;class Mn extends cn{constructor(e=new Gn,t=new Fg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){xl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const v=d[f],_=l[f];v!==0&&(ed.fromBufferAttribute(_,e),u?xl.addScaledVector(ed,v):xl.addScaledVector(ed.sub(t),v))}t.add(xl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gl.copy(r.boundingSphere),gl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(gl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(gl,Rm)===null||Wr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Cm.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(Cm),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(u))for(let E=0,w=g.length;E<w;E++){const S=g[E],y=u[S.materialIndex],I=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,F=P;C<F;C+=3){const k=d.getX(C),N=d.getX(C+1),H=d.getX(C+2);o=Ml(this,y,e,r,p,v,_,k,N,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let S=E,y=w;S<y;S+=3){const I=d.getX(S),P=d.getX(S+1),C=d.getX(S+2);o=Ml(this,u,e,r,p,v,_,I,P,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let E=0,w=g.length;E<w;E++){const S=g[E],y=u[S.materialIndex],I=Math.max(S.start,x.start),P=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let C=I,F=P;C<F;C+=3){const k=C,N=C+1,H=C+2;o=Ml(this,y,e,r,p,v,_,k,N,H),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const E=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let S=E,y=w;S<y;S+=3){const I=S,P=S+1,C=S+2;o=Ml(this,u,e,r,p,v,_,I,P,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function my(s,e,t,r,o,l,u,d){let f;if(e.side===On?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===wr,d),f===null)return null;Sl.copy(d),Sl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Sl);return p<t.near||p>t.far?null:{distance:p,point:Sl.clone(),object:s}}function Ml(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,vl),s.getVertexPosition(f,_l),s.getVertexPosition(p,yl);const v=my(s,e,t,r,vl,_l,yl,Pm);if(v){const _=new B;ii.getBarycoord(Pm,vl,_l,yl,_),o&&(v.uv=ii.getInterpolatedAttribute(o,d,f,p,_,new Qe)),l&&(v.uv1=ii.getInterpolatedAttribute(l,d,f,p,_,new Qe)),u&&(v.normal=ii.getInterpolatedAttribute(u,d,f,p,_,new B),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:f,c:p,normal:new B,materialIndex:0};ii.getNormal(vl,_l,yl,g.normal),v.face=g,v.barycoord=_}return v}class ta extends Gn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],v=[],_=[];let g=0,x=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(_,2));function E(w,S,y,I,P,C,F,k,N,H,R){const A=C/N,z=F/H,J=C/2,Y=F/2,re=k/2,fe=N+1,ae=H+1;let me=0,V=0;const ce=new B;for(let le=0;le<ae;le++){const U=le*z-Y;for(let se=0;se<fe;se++){const Ne=se*A-J;ce[w]=Ne*I,ce[S]=U*P,ce[y]=re,p.push(ce.x,ce.y,ce.z),ce[w]=0,ce[S]=0,ce[y]=k>0?1:-1,v.push(ce.x,ce.y,ce.z),_.push(se/N),_.push(1-le/H),me+=1}}for(let le=0;le<H;le++)for(let U=0;U<N;U++){const se=g+U+fe*le,Ne=g+U+fe*(le+1),ee=g+(U+1)+fe*(le+1),ue=g+(U+1)+fe*le;f.push(se,Ne,ue),f.push(Ne,ee,ue),V+=6}d.addGroup(x,V,R),x+=V,g+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const r=Js(s[t]);for(const o in r)e[o]=r[o]}return e}function gy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const vy={clone:Js,merge:Pn};var _y=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends ea{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_y,this.fragmentShader=yy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Gg extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new B,Dm=new Qe,Lm=new Qe;class Yn extends Gg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ih*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ih*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,Dm,Lm),t.subVectors(Lm,Dm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ol*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zs=-90,Os=1;class xy extends cn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(zs,Os,e,t);o.layers=this.layers,this.add(o);const l=new Yn(zs,Os,e,t);l.layers=this.layers,this.add(l);const u=new Yn(zs,Os,e,t);u.layers=this.layers,this.add(u);const d=new Yn(zs,Os,e,t);d.layers=this.layers,this.add(d);const f=new Yn(zs,Os,e,t);f.layers=this.layers,this.add(f);const p=new Yn(zs,Os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Hl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(_,g,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Hg extends Bn{constructor(e,t,r,o,l,u,d,f,p,v){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,r,o,l,u,d,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sy extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ta(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Mr});l.uniforms.tEquirect.value=t;const u=new Mn(o,l),d=t.minFilter;return t.minFilter===Qr&&(t.minFilter=Ei),new xy(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class vh{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new _t(e),this.near=t,this.far=r}clone(){return new vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class My extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const td=new B,Ey=new B,wy=new lt;class Kr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=td.subVectors(r,t).cross(Ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(td),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||wy.getNormalMatrix(e),o=this.coplanarPoint(td).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new ql,El=new B;class _h{constructor(e=new Kr,t=new Kr,r=new Kr,o=new Kr,l=new Kr,u=new Kr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],v=o[5],_=o[6],g=o[7],x=o[8],E=o[9],w=o[10],S=o[11],y=o[12],I=o[13],P=o[14],C=o[15];if(r[0].setComponents(f-l,g-p,S-x,C-y).normalize(),r[1].setComponents(f+l,g+p,S+x,C+y).normalize(),r[2].setComponents(f+u,g+v,S+E,C+I).normalize(),r[3].setComponents(f-u,g-v,S-E,C-I).normalize(),r[4].setComponents(f-d,g-_,S-w,C-P).normalize(),t===Wi)r[5].setComponents(f+d,g+_,S+w,C+P).normalize();else if(t===Hl)r[5].setComponents(d,_,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(El.x=o.normal.x>0?e.max.x:e.min.x,El.y=o.normal.y>0?e.max.y:e.min.y,El.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vg extends ea{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new B,Xl=new B,km=new zt,Ba=new mh,wl=new ql,nd=new B,Im=new B;class Ty extends cn{constructor(e=new Gn,t=new Vg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)Wl.fromBufferAttribute(t,o-1),Xl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(o),wl.radius+=l,e.ray.intersectsSphere(wl)===!1)return;km.copy(o).invert(),Ba.copy(e.ray).applyMatrix4(km);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const x=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let w=x,S=E-1;w<S;w+=p){const y=v.getX(w),I=v.getX(w+1),P=Tl(this,e,Ba,f,y,I);P&&t.push(P)}if(this.isLineLoop){const w=v.getX(E-1),S=v.getX(x),y=Tl(this,e,Ba,f,w,S);y&&t.push(y)}}else{const x=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let w=x,S=E-1;w<S;w+=p){const y=Tl(this,e,Ba,f,w,w+1);y&&t.push(y)}if(this.isLineLoop){const w=Tl(this,e,Ba,f,E-1,x);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Tl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(Wl.fromBufferAttribute(u,o),Xl.fromBufferAttribute(u,l),t.distanceSqToSegment(Wl,Xl,nd,Im)>r)return;nd.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(nd);if(!(f<e.near||f>e.far))return{distance:f,point:Im.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Nm=new B,Um=new B;class Ay extends Ty{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Nm.fromBufferAttribute(t,o),Um.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Nm.distanceTo(Um);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Va extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Wg extends Bn{constructor(e,t,r,o,l,u,d,f,p,v=Ws){if(v!==Ws&&v!==$s)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ws&&(r=es),r===void 0&&v===$s&&(r=Ys),super(null,o,l,u,d,f,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const v=r[o],g=r[o+1]-v,x=(u-v)/g;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Qe:new B);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new B,o=[],l=[],u=[],d=new B,f=new zt;for(let x=0;x<=e;x++){const E=x/e;o[x]=this.getTangentAt(E,new B)}l[0]=new B,u[0]=new B;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),g<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(gt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(f.makeRotationAxis(d,E))}u[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(gt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(x=-x);for(let E=1;E<=e;E++)l[E].applyMatrix4(f.makeRotationAxis(o[E],x*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xg extends qi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Qe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),g=f-this.aX,x=p-this.aY;f=g*v-x*_+this.aX,p=g*_+x*v+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class by extends Xg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function yh(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,v,_){let g=(u-l)/p-(d-l)/(p+v)+(d-u)/v,x=(d-u)/v-(f-u)/(v+_)+(f-d)/_;g*=v,x*=v,o(u,d,g,x)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Al=new B,id=new yh,rd=new yh,sd=new yh;class jg extends qi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new B){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,v;this.closed||d>0?p=o[(d-1)%l]:(Al.subVectors(o[0],o[1]).add(o[0]),p=Al);const _=o[d%l],g=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(Al.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Al),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(g),x),S=Math.pow(g.distanceToSquared(v),x);w<1e-4&&(w=1),E<1e-4&&(E=w),S<1e-4&&(S=w),id.initNonuniformCatmullRom(p.x,_.x,g.x,v.x,E,w,S),rd.initNonuniformCatmullRom(p.y,_.y,g.y,v.y,E,w,S),sd.initNonuniformCatmullRom(p.z,_.z,g.z,v.z,E,w,S)}else this.curveType==="catmullrom"&&(id.initCatmullRom(p.x,_.x,g.x,v.x,this.tension),rd.initCatmullRom(p.y,_.y,g.y,v.y,this.tension),sd.initCatmullRom(p.z,_.z,g.z,v.z,this.tension));return r.set(id.calc(f),rd.calc(f),sd.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new B().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function Cy(s,e){const t=1-s;return t*t*e}function Ry(s,e){return 2*(1-s)*s*e}function Py(s,e){return s*s*e}function Xa(s,e,t,r){return Cy(s,e)+Ry(s,t)+Py(s,r)}function Dy(s,e){const t=1-s;return t*t*t*e}function Ly(s,e){const t=1-s;return 3*t*t*s*e}function ky(s,e){return 3*(1-s)*s*s*e}function Iy(s,e){return s*s*s*e}function ja(s,e,t,r,o){return Dy(s,e)+Ly(s,t)+ky(s,r)+Iy(s,o)}class Ny extends qi{constructor(e=new Qe,t=new Qe,r=new Qe,o=new Qe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Qe){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(ja(e,o.x,l.x,u.x,d.x),ja(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Uy extends qi{constructor(e=new B,t=new B,r=new B,o=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new B){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(ja(e,o.x,l.x,u.x,d.x),ja(e,o.y,l.y,u.y,d.y),ja(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Fy extends qi{constructor(e=new Qe,t=new Qe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Qe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Qe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class zy extends qi{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Oy extends qi{constructor(e=new Qe,t=new Qe,r=new Qe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Qe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Xa(e,o.x,l.x,u.x),Xa(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends qi{constructor(e=new B,t=new B,r=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new B){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Xa(e,o.x,l.x,u.x),Xa(e,o.y,l.y,u.y),Xa(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class By extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Qe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(Fm(d,f.x,p.x,v.x,_.x),Fm(d,f.y,p.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Qe().fromArray(o))}return this}}var Gy=Object.freeze({__proto__:null,ArcCurve:by,CatmullRomCurve3:jg,CubicBezierCurve:Ny,CubicBezierCurve3:Uy,EllipseCurve:Xg,LineCurve:Fy,LineCurve3:zy,QuadraticBezierCurve:Oy,QuadraticBezierCurve3:qg,SplineCurve:By});class xh extends Gn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],f=[],p=new B,v=new Qe;u.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let _=0,g=3;_<=t;_++,g+=3){const x=r+_/t*o;p.x=e*Math.cos(x),p.y=e*Math.sin(x),u.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(u[g]/e+1)/2,v.y=(u[g+1]/e+1)/2,f.push(v.x,v.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Kl extends Gn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],g=[],x=[];let E=0;const w=[],S=r/2;let y=0;I(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(x,2));function I(){const C=new B,F=new B;let k=0;const N=(t-e)/r;for(let H=0;H<=l;H++){const R=[],A=H/l,z=A*(t-e)+e;for(let J=0;J<=o;J++){const Y=J/o,re=Y*f+d,fe=Math.sin(re),ae=Math.cos(re);F.x=z*fe,F.y=-A*r+S,F.z=z*ae,_.push(F.x,F.y,F.z),C.set(fe,N,ae).normalize(),g.push(C.x,C.y,C.z),x.push(Y,1-A),R.push(E++)}w.push(R)}for(let H=0;H<o;H++)for(let R=0;R<l;R++){const A=w[R][H],z=w[R+1][H],J=w[R+1][H+1],Y=w[R][H+1];(e>0||R!==0)&&(v.push(A,z,Y),k+=3),(t>0||R!==l-1)&&(v.push(z,J,Y),k+=3)}p.addGroup(y,k,0),y+=k}function P(C){const F=E,k=new Qe,N=new B;let H=0;const R=C===!0?e:t,A=C===!0?1:-1;for(let J=1;J<=o;J++)_.push(0,S*A,0),g.push(0,A,0),x.push(.5,.5),E++;const z=E;for(let J=0;J<=o;J++){const re=J/o*f+d,fe=Math.cos(re),ae=Math.sin(re);N.x=R*ae,N.y=S*A,N.z=R*fe,_.push(N.x,N.y,N.z),g.push(0,A,0),k.x=fe*.5+.5,k.y=ae*.5*A+.5,x.push(k.x,k.y),E++}for(let J=0;J<o;J++){const Y=F+J,re=z+J;C===!0?v.push(re,re+1,Y):v.push(re+1,re,Y),H+=3}p.addGroup(y,H,C===!0?1:2),y+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kl(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sh extends Kl{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Sh(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const bl=new B,Cl=new B,ad=new B,Rl=new ii;class Hy extends Gn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Ol*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),g={},x=[];for(let E=0;E<f;E+=3){u?(p[0]=u.getX(E),p[1]=u.getX(E+1),p[2]=u.getX(E+2)):(p[0]=E,p[1]=E+1,p[2]=E+2);const{a:w,b:S,c:y}=Rl;if(w.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),y.fromBufferAttribute(d,p[2]),Rl.getNormal(ad),_[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(y.x*o)},${Math.round(y.y*o)},${Math.round(y.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let I=0;I<3;I++){const P=(I+1)%3,C=_[I],F=_[P],k=Rl[v[I]],N=Rl[v[P]],H=`${C}_${F}`,R=`${F}_${C}`;R in g&&g[R]?(ad.dot(g[R].normal)<=l&&(x.push(k.x,k.y,k.z),x.push(N.x,N.y,N.z)),g[R]=null):H in g||(g[H]={index0:p[I],index1:p[P],normal:ad.clone()})}}for(const E in g)if(g[E]){const{index0:w,index1:S}=g[E];bl.fromBufferAttribute(d,w),Cl.fromBufferAttribute(d,S),x.push(bl.x,bl.y,bl.z),x.push(Cl.x,Cl.y,Cl.z)}this.setAttribute("position",new Ht(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Yl extends Gn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,v=f+1,_=e/d,g=t/f,x=[],E=[],w=[],S=[];for(let y=0;y<v;y++){const I=y*g-u;for(let P=0;P<p;P++){const C=P*_-l;E.push(C,-I,0),w.push(0,0,1),S.push(P/d),S.push(1-y/f)}}for(let y=0;y<f;y++)for(let I=0;I<d;I++){const P=I+p*y,C=I+p*(y+1),F=I+1+p*(y+1),k=I+1+p*y;x.push(P,C,k),x.push(C,F,k)}this.setIndex(x),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mh extends Gn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const v=[],_=new B,g=new B,x=[],E=[],w=[],S=[];for(let y=0;y<=r;y++){const I=[],P=y/r;let C=0;y===0&&u===0?C=.5/t:y===r&&f===Math.PI&&(C=-.5/t);for(let F=0;F<=t;F++){const k=F/t;_.x=-e*Math.cos(o+k*l)*Math.sin(u+P*d),_.y=e*Math.cos(u+P*d),_.z=e*Math.sin(o+k*l)*Math.sin(u+P*d),E.push(_.x,_.y,_.z),g.copy(_).normalize(),w.push(g.x,g.y,g.z),S.push(k+C,1-P),I.push(p++)}v.push(I)}for(let y=0;y<r;y++)for(let I=0;I<t;I++){const P=v[y][I+1],C=v[y][I],F=v[y+1][I],k=v[y+1][I+1];(y!==0||u>0)&&x.push(P,C,k),(y!==r-1||f<Math.PI)&&x.push(C,F,k)}this.setIndex(x),this.setAttribute("position",new Ht(E,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eh extends Gn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[],v=new B,_=new B,g=new B;for(let x=0;x<=r;x++)for(let E=0;E<=o;E++){const w=E/o*l,S=x/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(w),_.y=(e+t*Math.cos(S))*Math.sin(w),_.z=t*Math.sin(S),d.push(_.x,_.y,_.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),g.subVectors(_,v).normalize(),f.push(g.x,g.y,g.z),p.push(E/o),p.push(x/r)}for(let x=1;x<=r;x++)for(let E=1;E<=o;E++){const w=(o+1)*x+E-1,S=(o+1)*(x-1)+E-1,y=(o+1)*(x-1)+E,I=(o+1)*x+E;u.push(w,S,I),u.push(S,y,I)}this.setIndex(u),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wh extends Gn{constructor(e=new qg(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new B,f=new B,p=new Qe;let v=new B;const _=[],g=[],x=[],E=[];w(),this.setIndex(E),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(g,3)),this.setAttribute("uv",new Ht(x,2));function w(){for(let P=0;P<t;P++)S(P);S(l===!1?t:0),I(),y()}function S(P){v=e.getPointAt(P/t,v);const C=u.normals[P],F=u.binormals[P];for(let k=0;k<=o;k++){const N=k/o*Math.PI*2,H=Math.sin(N),R=-Math.cos(N);f.x=R*C.x+H*F.x,f.y=R*C.y+H*F.y,f.z=R*C.z+H*F.z,f.normalize(),g.push(f.x,f.y,f.z),d.x=v.x+r*f.x,d.y=v.y+r*f.y,d.z=v.z+r*f.z,_.push(d.x,d.y,d.z)}}function y(){for(let P=1;P<=t;P++)for(let C=1;C<=o;C++){const F=(o+1)*(P-1)+(C-1),k=(o+1)*P+(C-1),N=(o+1)*P+C,H=(o+1)*(P-1)+C;E.push(F,k,H),E.push(k,N,H)}}function I(){for(let P=0;P<=t;P++)for(let C=0;C<=o;C++)p.x=P/t,p.y=C/o,x.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new wh(new Gy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Vy extends ea{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _t(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _t(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wy extends ea{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Xy extends ea{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Th extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new _t(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jy extends Th{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new _t(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const od=new zt,zm=new B,Om=new B;class Kg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _h,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(zm),Om.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Om),t.updateMatrixWorld(),od.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(od),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(od)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Bm=new zt,Ga=new B,ld=new B;class qy extends Kg{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Qe(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Ga.setFromMatrixPosition(e.matrixWorld),r.position.copy(Ga),ld.copy(r.position),ld.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(ld),r.updateMatrixWorld(),o.makeTranslation(-Ga.x,-Ga.y,-Ga.z),Bm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bm)}}class Ky extends Th{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new qy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yg extends Gg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Yy extends Kg{constructor(){super(new Yg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Th{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Yy}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $y extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const Hm=new zt;class Zy{constructor(e,t,r=0,o=1/0){this.ray=new mh(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new gh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hm),this}intersectObject(e,t=!0,r=[]){return rh(e,this,r,t),r.sort(Vm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)rh(e[o],this,r,t);return r.sort(Vm),r}}function Vm(s,e){return s.distance-e.distance}function rh(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)rh(l[u],e,t,!0)}}function Wm(s,e,t,r){const o=Jy(r);switch(t){case wg:return s*e;case Ag:return s*e;case bg:return s*e*2;case Cg:return s*e/o.components*o.byteLength;case hh:return s*e/o.components*o.byteLength;case Rg:return s*e*2/o.components*o.byteLength;case fh:return s*e*2/o.components*o.byteLength;case Tg:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case ph:return s*e*4/o.components*o.byteLength;case Il:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ul:case Fl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Id:return Math.max(s,16)*Math.max(e,8)/4;case Dd:case kd:return Math.max(s,8)*Math.max(e,8)/2;case Nd:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Fd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Bd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Hd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Vd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case $d:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zl:case Jd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pg:case eh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case th:case nh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jy(s){switch(s){case ji:case Sg:return{byteLength:1,components:1};case qa:case Mg:case Ka:return{byteLength:2,components:1};case uh:case dh:return{byteLength:2,components:4};case es:case ch:case Vi:return{byteLength:4,components:1};case Eg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $g(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Qy(s){const e=new WeakMap;function t(d,f){const p=d.array,v=d.usage,_=p.byteLength,g=s.createBuffer();s.bindBuffer(f,g),s.bufferData(f,p,v),d.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const v=f.array,_=f.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((x,E)=>x.start-E.start);let g=0;for(let x=1;x<_.length;x++){const E=_[g],w=_[x];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++g,_[g]=w)}_.length=g+1;for(let x=0,E=_.length;x<E;x++){const w=_[x];s.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var ex=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tx=`#ifdef USE_ALPHAHASH
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
#endif`,nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ix=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ax=`#ifdef USE_AOMAP
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
#endif`,ox=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lx=`#ifdef USE_BATCHING
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
#endif`,cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ux=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fx=`#ifdef USE_IRIDESCENCE
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
#endif`,px=`#ifdef USE_BUMPMAP
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
#endif`,mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ex=`#define PI 3.141592653589793
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
} // validated`,wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ax=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Px="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ix=`#ifdef USE_ENVMAP
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
#endif`,Nx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ux=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ox=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gx=`#ifdef USE_GRADIENTMAP
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
}`,Hx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xx=`uniform bool receiveShadow;
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
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,qx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Zx=`PhysicalMaterial material;
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
#endif`,Jx=`struct PhysicalMaterial {
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
}`,Qx=`
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
#endif`,eS=`#if defined( RE_IndirectDiffuse )
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
#endif`,tS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cS=`#if defined( USE_POINTS_UV )
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
#endif`,uS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
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
#endif`,gS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,MS=`#ifdef USE_NORMALMAP
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
#endif`,ES=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zS=`float getShadowMask() {
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
}`,OS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,BS=`#ifdef USE_SKINNING
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
#endif`,GS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
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
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
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
#endif`,KS=`#ifdef USE_TRANSMISSION
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
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eM=`uniform sampler2D t2D;
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
}`,tM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`#include <common>
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
}`,aM=`#if DEPTH_PACKING == 3200
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
}`,oM=`#define DISTANCE
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
}`,lM=`#define DISTANCE
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
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
}`,hM=`uniform vec3 diffuse;
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
}`,fM=`#include <common>
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
}`,pM=`uniform vec3 diffuse;
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
}`,mM=`#define LAMBERT
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
}`,gM=`#define LAMBERT
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
}`,vM=`#define MATCAP
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
}`,_M=`#define MATCAP
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
}`,yM=`#define NORMAL
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
}`,xM=`#define NORMAL
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
}`,SM=`#define PHONG
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
}`,MM=`#define PHONG
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
}`,EM=`#define STANDARD
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
}`,wM=`#define STANDARD
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
}`,TM=`#define TOON
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
}`,AM=`#define TOON
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
}`,bM=`uniform float size;
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,PM=`uniform vec3 color;
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
}`,DM=`uniform float rotation;
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
}`,LM=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:ex,alphahash_pars_fragment:tx,alphamap_fragment:nx,alphamap_pars_fragment:ix,alphatest_fragment:rx,alphatest_pars_fragment:sx,aomap_fragment:ax,aomap_pars_fragment:ox,batching_pars_vertex:lx,batching_vertex:cx,begin_vertex:ux,beginnormal_vertex:dx,bsdfs:hx,iridescence_fragment:fx,bumpmap_pars_fragment:px,clipping_planes_fragment:mx,clipping_planes_pars_fragment:gx,clipping_planes_pars_vertex:vx,clipping_planes_vertex:_x,color_fragment:yx,color_pars_fragment:xx,color_pars_vertex:Sx,color_vertex:Mx,common:Ex,cube_uv_reflection_fragment:wx,defaultnormal_vertex:Tx,displacementmap_pars_vertex:Ax,displacementmap_vertex:bx,emissivemap_fragment:Cx,emissivemap_pars_fragment:Rx,colorspace_fragment:Px,colorspace_pars_fragment:Dx,envmap_fragment:Lx,envmap_common_pars_fragment:kx,envmap_pars_fragment:Ix,envmap_pars_vertex:Nx,envmap_physical_pars_fragment:jx,envmap_vertex:Ux,fog_vertex:Fx,fog_pars_vertex:zx,fog_fragment:Ox,fog_pars_fragment:Bx,gradientmap_pars_fragment:Gx,lightmap_pars_fragment:Hx,lights_lambert_fragment:Vx,lights_lambert_pars_fragment:Wx,lights_pars_begin:Xx,lights_toon_fragment:qx,lights_toon_pars_fragment:Kx,lights_phong_fragment:Yx,lights_phong_pars_fragment:$x,lights_physical_fragment:Zx,lights_physical_pars_fragment:Jx,lights_fragment_begin:Qx,lights_fragment_maps:eS,lights_fragment_end:tS,logdepthbuf_fragment:nS,logdepthbuf_pars_fragment:iS,logdepthbuf_pars_vertex:rS,logdepthbuf_vertex:sS,map_fragment:aS,map_pars_fragment:oS,map_particle_fragment:lS,map_particle_pars_fragment:cS,metalnessmap_fragment:uS,metalnessmap_pars_fragment:dS,morphinstance_vertex:hS,morphcolor_vertex:fS,morphnormal_vertex:pS,morphtarget_pars_vertex:mS,morphtarget_vertex:gS,normal_fragment_begin:vS,normal_fragment_maps:_S,normal_pars_fragment:yS,normal_pars_vertex:xS,normal_vertex:SS,normalmap_pars_fragment:MS,clearcoat_normal_fragment_begin:ES,clearcoat_normal_fragment_maps:wS,clearcoat_pars_fragment:TS,iridescence_pars_fragment:AS,opaque_fragment:bS,packing:CS,premultiplied_alpha_fragment:RS,project_vertex:PS,dithering_fragment:DS,dithering_pars_fragment:LS,roughnessmap_fragment:kS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:NS,shadowmap_pars_vertex:US,shadowmap_vertex:FS,shadowmask_pars_fragment:zS,skinbase_vertex:OS,skinning_pars_vertex:BS,skinning_vertex:GS,skinnormal_vertex:HS,specularmap_fragment:VS,specularmap_pars_fragment:WS,tonemapping_fragment:XS,tonemapping_pars_fragment:jS,transmission_fragment:qS,transmission_pars_fragment:KS,uv_pars_fragment:YS,uv_pars_vertex:$S,uv_vertex:ZS,worldpos_vertex:JS,background_vert:QS,background_frag:eM,backgroundCube_vert:tM,backgroundCube_frag:nM,cube_vert:iM,cube_frag:rM,depth_vert:sM,depth_frag:aM,distanceRGBA_vert:oM,distanceRGBA_frag:lM,equirect_vert:cM,equirect_frag:uM,linedashed_vert:dM,linedashed_frag:hM,meshbasic_vert:fM,meshbasic_frag:pM,meshlambert_vert:mM,meshlambert_frag:gM,meshmatcap_vert:vM,meshmatcap_frag:_M,meshnormal_vert:yM,meshnormal_frag:xM,meshphong_vert:SM,meshphong_frag:MM,meshphysical_vert:EM,meshphysical_frag:wM,meshtoon_vert:TM,meshtoon_frag:AM,points_vert:bM,points_frag:CM,shadow_vert:RM,shadow_frag:PM,sprite_vert:DM,sprite_frag:LM},Re={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Mi={basic:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Pn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Pn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Pn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new _t(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Pn([Re.points,Re.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Pn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Pn([Re.common,Re.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Pn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Pn([Re.sprite,Re.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Pn([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Pn([Re.lights,Re.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Mi.physical={uniforms:Pn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Pl={r:0,b:0,g:0},jr=new Ti,kM=new zt;function IM(s,e,t,r,o,l,u){const d=new _t(0);let f=l===!0?0:1,p,v,_=null,g=0,x=null;function E(P){let C=P.isScene===!0?P.background:null;return C&&C.isTexture&&(C=(P.backgroundBlurriness>0?t:e).get(C)),C}function w(P){let C=!1;const F=E(P);F===null?y(d,f):F&&F.isColor&&(y(F,1),C=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,u):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,C){const F=E(C);F&&(F.isCubeTexture||F.mapping===jl)?(v===void 0&&(v=new Mn(new ta(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:Js(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(k,N,H){this.matrixWorld.copyPosition(H.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),jr.copy(C.backgroundRotation),jr.x*=-1,jr.y*=-1,jr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(kM.makeRotationFromEuler(jr)),v.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,(_!==F||g!==F.version||x!==s.toneMapping)&&(v.material.needsUpdate=!0,_=F,g=F.version,x=s.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Mn(new Yl(2,2),new Tr({name:"BackgroundMaterial",uniforms:Js(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.toneMapped=bt.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||g!==F.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=F,g=F.version,x=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function y(P,C){P.getRGB(Pl,Bg(s)),r.buffers.color.setClear(Pl.r,Pl.g,Pl.b,C,u)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(P,C=1){d.set(P),f=C,y(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,y(d,f)},render:w,addToRenderList:S,dispose:I}}function NM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function d(A,z,J,Y,re){let fe=!1;const ae=_(Y,J,z);l!==ae&&(l=ae,p(l.object)),fe=x(A,Y,J,re),fe&&E(A,Y,J,re),re!==null&&e.update(re,s.ELEMENT_ARRAY_BUFFER),(fe||u)&&(u=!1,C(A,z,J,Y),re!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function f(){return s.createVertexArray()}function p(A){return s.bindVertexArray(A)}function v(A){return s.deleteVertexArray(A)}function _(A,z,J){const Y=J.wireframe===!0;let re=r[A.id];re===void 0&&(re={},r[A.id]=re);let fe=re[z.id];fe===void 0&&(fe={},re[z.id]=fe);let ae=fe[Y];return ae===void 0&&(ae=g(f()),fe[Y]=ae),ae}function g(A){const z=[],J=[],Y=[];for(let re=0;re<t;re++)z[re]=0,J[re]=0,Y[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:J,attributeDivisors:Y,object:A,attributes:{},index:null}}function x(A,z,J,Y){const re=l.attributes,fe=z.attributes;let ae=0;const me=J.getAttributes();for(const V in me)if(me[V].location>=0){const le=re[V];let U=fe[V];if(U===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(U=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(U=A.instanceColor)),le===void 0||le.attribute!==U||U&&le.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==Y}function E(A,z,J,Y){const re={},fe=z.attributes;let ae=0;const me=J.getAttributes();for(const V in me)if(me[V].location>=0){let le=fe[V];le===void 0&&(V==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),V==="instanceColor"&&A.instanceColor&&(le=A.instanceColor));const U={};U.attribute=le,le&&le.data&&(U.data=le.data),re[V]=U,ae++}l.attributes=re,l.attributesNum=ae,l.index=Y}function w(){const A=l.newAttributes;for(let z=0,J=A.length;z<J;z++)A[z]=0}function S(A){y(A,0)}function y(A,z){const J=l.newAttributes,Y=l.enabledAttributes,re=l.attributeDivisors;J[A]=1,Y[A]===0&&(s.enableVertexAttribArray(A),Y[A]=1),re[A]!==z&&(s.vertexAttribDivisor(A,z),re[A]=z)}function I(){const A=l.newAttributes,z=l.enabledAttributes;for(let J=0,Y=z.length;J<Y;J++)z[J]!==A[J]&&(s.disableVertexAttribArray(J),z[J]=0)}function P(A,z,J,Y,re,fe,ae){ae===!0?s.vertexAttribIPointer(A,z,J,re,fe):s.vertexAttribPointer(A,z,J,Y,re,fe)}function C(A,z,J,Y){w();const re=Y.attributes,fe=J.getAttributes(),ae=z.defaultAttributeValues;for(const me in fe){const V=fe[me];if(V.location>=0){let ce=re[me];if(ce===void 0&&(me==="instanceMatrix"&&A.instanceMatrix&&(ce=A.instanceMatrix),me==="instanceColor"&&A.instanceColor&&(ce=A.instanceColor)),ce!==void 0){const le=ce.normalized,U=ce.itemSize,se=e.get(ce);if(se===void 0)continue;const Ne=se.buffer,ee=se.type,ue=se.bytesPerElement,Ee=ee===s.INT||ee===s.UNSIGNED_INT||ce.gpuType===ch;if(ce.isInterleavedBufferAttribute){const ye=ce.data,Te=ye.stride,Ue=ce.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<V.locationSize;et++)y(V.location+et,ye.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<V.locationSize;et++)S(V.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let et=0;et<V.locationSize;et++)P(V.location+et,U/V.locationSize,ee,le,Te*ue,(Ue+U/V.locationSize*et)*ue,Ee)}else{if(ce.isInstancedBufferAttribute){for(let ye=0;ye<V.locationSize;ye++)y(V.location+ye,ce.meshPerAttribute);A.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ye=0;ye<V.locationSize;ye++)S(V.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ye=0;ye<V.locationSize;ye++)P(V.location+ye,U/V.locationSize,ee,le,U*ue,U/V.locationSize*ye*ue,Ee)}}else if(ae!==void 0){const le=ae[me];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(V.location,le);break;case 3:s.vertexAttrib3fv(V.location,le);break;case 4:s.vertexAttrib4fv(V.location,le);break;default:s.vertexAttrib1fv(V.location,le)}}}}I()}function F(){H();for(const A in r){const z=r[A];for(const J in z){const Y=z[J];for(const re in Y)v(Y[re].object),delete Y[re];delete z[J]}delete r[A]}}function k(A){if(r[A.id]===void 0)return;const z=r[A.id];for(const J in z){const Y=z[J];for(const re in Y)v(Y[re].object),delete Y[re];delete z[J]}delete r[A.id]}function N(A){for(const z in r){const J=r[z];if(J[A.id]===void 0)continue;const Y=J[A.id];for(const re in Y)v(Y[re].object),delete Y[re];delete J[A.id]}}function H(){R(),u=!0,l!==o&&(l=o,p(l.object))}function R(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:H,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:k,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function UM(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),t.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let x=0;for(let E=0;E<_;E++)x+=v[E];t.update(x,r,1)}function f(p,v,_,g){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<p.length;E++)u(p[E],v[E],g[E]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,_);let E=0;for(let w=0;w<_;w++)E+=v[w]*g[w];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function FM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(N){return!(N!==pi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(N){const H=N===Ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ji&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!H)}function f(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,g=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),C=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=E>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:g,maxTextures:x,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:C,vertexTextures:F,maxSamples:k}}function zM(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Kr,d=new lt,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const x=_.length!==0||g||r!==0||o;return o=g,r=_.length,x},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,x){const E=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,y=s.get(_);if(!o||E===null||E.length===0||l&&!S)l?v(null):p();else{const I=l?0:r,P=I*4;let C=y.clippingState||null;f.value=C,C=v(E,g,P,x);for(let F=0;F!==P;++F)C[F]=t[F];y.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,x,E){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=f.value,E!==!0||S===null){const y=x+w*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<y)&&(S=new Float32Array(y));for(let P=0,C=x;P!==w;++P,C+=4)u.copy(_[P]).applyMatrix4(I,d),u.normal.toArray(S,C),S[C+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function OM(s){let e=new WeakMap;function t(u,d){return d===bd?u.mapping=qs:d===Cd&&(u.mapping=Ks),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===bd||d===Cd)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Sy(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Hs=4,Xm=[.125,.215,.35,.446,.526,.582],Zr=20,cd=new Yg,jm=new _t;let ud=null,dd=0,hd=0,fd=!1;const Yr=(1+Math.sqrt(5))/2,Bs=1/Yr,qm=[new B(-Yr,Bs,0),new B(Yr,Bs,0),new B(-Bs,0,Yr),new B(Bs,0,Yr),new B(0,Yr,-Bs),new B(0,Yr,Bs),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class Km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,dd,hd),this._renderer.xr.enabled=fd,e.scissorTest=!1,Dl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),dd=this._renderer.getActiveCubeFace(),hd=this._renderer.getActiveMipmapLevel(),fd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Ka,format:pi,colorSpace:Zs,depthBuffer:!1},o=Ym(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=BM(l)),this._blurMaterial=GM(l,e,t)}return o}_compileMaterial(e){const t=new Mn(this._lodPlanes[0],e);this._renderer.compile(t,cd)}_sceneToCubeUV(e,t,r,o){const d=new Yn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,g=v.toneMapping;v.getClearColor(jm),v.toneMapping=Er,v.autoClear=!1;const x=new Fg({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),E=new Mn(new ta,x);let w=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,w=!0):(x.color.copy(jm),w=!0);for(let y=0;y<6;y++){const I=y%3;I===0?(d.up.set(0,f[y],0),d.lookAt(p[y],0,0)):I===1?(d.up.set(0,0,f[y]),d.lookAt(0,p[y],0)):(d.up.set(0,f[y],0),d.lookAt(0,0,p[y]));const P=this._cubeSize;Dl(o,I*P,y>2?P:0,P,P),v.setRenderTarget(o),w&&v.render(E,d),v.render(e,d)}E.geometry.dispose(),E.material.dispose(),v.toneMapping=g,v.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===qs||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Mn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Dl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,cd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=qm[(o-l-1)%qm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new Mn(this._lodPlanes[o],p),g=p.uniforms,x=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Zr-1),w=l/E,S=isFinite(l)?1+Math.floor(v*w):Zr;S>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const y=[];let I=0;for(let N=0;N<Zr;++N){const H=N/w,R=Math.exp(-H*H/2);y.push(R),N===0?I+=R:N<S&&(I+=2*R)}for(let N=0;N<y.length;N++)y[N]=y[N]/I;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=u==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:P}=this;g.dTheta.value=E,g.mipInt.value=P-r;const C=this._sizeLods[o],F=3*C*(o>P-Hs?o-P+Hs:0),k=4*(this._cubeSize-C);Dl(t,F,k,3*C,2*C),f.setRenderTarget(t),f.render(_,cd)}}function BM(s){const e=[],t=[],r=[];let o=s;const l=s-Hs+1+Xm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-Hs?f=Xm[u-s+Hs-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),v=-p,_=1+p,g=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,E=6,w=3,S=2,y=1,I=new Float32Array(w*E*x),P=new Float32Array(S*E*x),C=new Float32Array(y*E*x);for(let k=0;k<x;k++){const N=k%3*2/3-1,H=k>2?0:-1,R=[N,H,0,N+2/3,H,0,N+2/3,H+1,0,N,H,0,N+2/3,H+1,0,N,H+1,0];I.set(R,w*E*k),P.set(g,S*E*k);const A=[k,k,k,k,k,k];C.set(A,y*E*k)}const F=new Gn;F.setAttribute("position",new wi(I,w)),F.setAttribute("uv",new wi(P,S)),F.setAttribute("faceIndex",new wi(C,y)),e.push(F),o>Hs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Ym(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=jl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function GM(s,e,t){const r=new Float32Array(Zr),o=new B(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function $m(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Zm(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function HM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===bd||f===Cd,v=f===qs||f===Ks;if(p||v){let _=e.get(d);const g=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return t===null&&(t=new Km(s)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return p&&x&&x.height>0||v&&x&&o(x)?(t===null&&(t=new Km(s)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let f=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function VM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Gs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function WM(s,e,t,r){const o={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete o[g.id];const x=l.get(g);x&&(e.remove(x),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function d(_,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function f(_){const g=_.attributes;for(const x in g)e.update(g[x],s.ARRAY_BUFFER)}function p(_){const g=[],x=_.index,E=_.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let P=0,C=I.length;P<C;P+=3){const F=I[P+0],k=I[P+1],N=I[P+2];g.push(F,k,k,N,N,F)}}else if(E!==void 0){const I=E.array;w=E.version;for(let P=0,C=I.length/3-1;P<C;P+=3){const F=P+0,k=P+1,N=P+2;g.push(F,k,k,N,N,F)}}else return;const S=new(kg(g)?Og:zg)(g,1);S.version=w;const y=l.get(_);y&&e.remove(y),l.set(_,S)}function v(_){const g=l.get(_);if(g){const x=_.index;x!==null&&g.version<x.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:v}}function XM(s,e,t){let r;function o(g){r=g}let l,u;function d(g){l=g.type,u=g.bytesPerElement}function f(g,x){s.drawElements(r,x,l,g*u),t.update(x,r,1)}function p(g,x,E){E!==0&&(s.drawElementsInstanced(r,x,l,g*u,E),t.update(x,r,E))}function v(g,x,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,g,0,E);let S=0;for(let y=0;y<E;y++)S+=x[y];t.update(S,r,1)}function _(g,x,E,w){if(E===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)p(g[y]/u,x[y],w[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,g,0,w,0,E);let y=0;for(let I=0;I<E;I++)y+=x[I]*w[I];t.update(y,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function jM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function qM(s,e,t){const r=new WeakMap,o=new Nt;function l(u,d,f){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let R=function(){N.dispose(),r.delete(d),d.removeEventListener("dispose",R)};g!==void 0&&g.texture.dispose();const x=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],y=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let P=0;x===!0&&(P=1),E===!0&&(P=2),w===!0&&(P=3);let C=d.attributes.position.count*P,F=1;C>e.maxTextureSize&&(F=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const k=new Float32Array(C*F*4*_),N=new Ng(k,C,F,_);N.type=Vi,N.needsUpdate=!0;const H=P*4;for(let A=0;A<_;A++){const z=S[A],J=y[A],Y=I[A],re=C*F*4*A;for(let fe=0;fe<z.count;fe++){const ae=fe*H;x===!0&&(o.fromBufferAttribute(z,fe),k[re+ae+0]=o.x,k[re+ae+1]=o.y,k[re+ae+2]=o.z,k[re+ae+3]=0),E===!0&&(o.fromBufferAttribute(J,fe),k[re+ae+4]=o.x,k[re+ae+5]=o.y,k[re+ae+6]=o.z,k[re+ae+7]=0),w===!0&&(o.fromBufferAttribute(Y,fe),k[re+ae+8]=o.x,k[re+ae+9]=o.y,k[re+ae+10]=o.z,k[re+ae+11]=Y.itemSize===4?o.w:1)}}g={count:_,texture:N,size:new Qe(C,F)},r.set(d,g),d.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let x=0;for(let w=0;w<p.length;w++)x+=p[w];const E=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",E),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function KM(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,v=f.geometry,_=e.get(f,v);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const g=f.skeleton;o.get(g)!==p&&(g.update(),o.set(g,p))}return _}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const Zg=new Bn,Jm=new Wg(1,1),Jg=new Ng,Qg=new sy,ev=new Hg,Qm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function na(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=Qm[o];if(l===void 0&&(l=new Float32Array(o),Qm[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function $l(s,e){let t=eg[e];t===void 0&&(t=new Int32Array(e),eg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function YM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function $M(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function ZM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function JM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function QM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ig.set(r),s.uniformMatrix2fv(this.addr,!1,ig),rn(t,r)}}function eE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;ng.set(r),s.uniformMatrix3fv(this.addr,!1,ng),rn(t,r)}}function tE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;tg.set(r),s.uniformMatrix4fv(this.addr,!1,tg),rn(t,r)}}function nE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function iE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function rE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function sE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function aE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function lE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function uE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Jm.compareFunction=Lg,l=Jm):l=Zg,t.setTexture2D(e||l,o)}function dE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Qg,o)}function hE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||ev,o)}function fE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||Jg,o)}function pE(s){switch(s){case 5126:return YM;case 35664:return $M;case 35665:return ZM;case 35666:return JM;case 35674:return QM;case 35675:return eE;case 35676:return tE;case 5124:case 35670:return nE;case 35667:case 35671:return iE;case 35668:case 35672:return rE;case 35669:case 35673:return sE;case 5125:return aE;case 36294:return oE;case 36295:return lE;case 36296:return cE;case 35678:case 36198:case 36298:case 36306:case 35682:return uE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return hE;case 36289:case 36303:case 36311:case 36292:return fE}}function mE(s,e){s.uniform1fv(this.addr,e)}function gE(s,e){const t=na(e,this.size,2);s.uniform2fv(this.addr,t)}function vE(s,e){const t=na(e,this.size,3);s.uniform3fv(this.addr,t)}function _E(s,e){const t=na(e,this.size,4);s.uniform4fv(this.addr,t)}function yE(s,e){const t=na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function xE(s,e){const t=na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function SE(s,e){const t=na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ME(s,e){s.uniform1iv(this.addr,e)}function EE(s,e){s.uniform2iv(this.addr,e)}function wE(s,e){s.uniform3iv(this.addr,e)}function TE(s,e){s.uniform4iv(this.addr,e)}function AE(s,e){s.uniform1uiv(this.addr,e)}function bE(s,e){s.uniform2uiv(this.addr,e)}function CE(s,e){s.uniform3uiv(this.addr,e)}function RE(s,e){s.uniform4uiv(this.addr,e)}function PE(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Zg,l[u])}function DE(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Qg,l[u])}function LE(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||ev,l[u])}function kE(s,e,t){const r=this.cache,o=e.length,l=$l(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Jg,l[u])}function IE(s){switch(s){case 5126:return mE;case 35664:return gE;case 35665:return vE;case 35666:return _E;case 35674:return yE;case 35675:return xE;case 35676:return SE;case 5124:case 35670:return ME;case 35667:case 35671:return EE;case 35668:case 35672:return wE;case 35669:case 35673:return TE;case 5125:return AE;case 36294:return bE;case 36295:return CE;case 36296:return RE;case 35678:case 36198:case 36298:case 36306:case 35682:return PE;case 35679:case 36299:case 36307:return DE;case 35680:case 36300:case 36308:case 36293:return LE;case 36289:case 36303:case 36311:case 36292:return kE}}class NE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=pE(t.type)}}class UE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=IE(t.type)}}class FE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function rg(s,e){s.seq.push(e),s.map[e.id]=e}function zE(s,e,t){const r=s.name,o=r.length;for(pd.lastIndex=0;;){const l=pd.exec(r),u=pd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){rg(t,p===void 0?new NE(d,s,e):new UE(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new FE(d),rg(t,_)),t=_}}}class Bl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);zE(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function sg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const OE=37297;let BE=0;function GE(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const ag=new lt;function HE(s){bt._getMatrix(ag,bt.workingColorSpace,s);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(s)){case Gl:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function og(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+GE(s.getShaderSource(e),u)}else return o}function VE(s,e){const t=HE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function WE(s,e){let t;switch(e){case L_:t="Linear";break;case k_:t="Reinhard";break;case I_:t="Cineon";break;case yg:t="ACESFilmic";break;case U_:t="AgX";break;case F_:t="Neutral";break;case N_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ll=new B;function XE(){bt.getLuminanceCoefficients(Ll);const s=Ll.x.toFixed(4),e=Ll.y.toFixed(4),t=Ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function qE(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function KE(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Wa(s){return s!==""}function lg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YE=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(s){return s.replace(YE,ZE)}const $E=new Map;function ZE(s,e){let t=ct[e];if(t===void 0){const r=$E.get(e);if(r!==void 0)t=ct[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}const JE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(s){return s.replace(JE,QE)}function QE(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function dg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function e1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===vg?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function t1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case Ks:e="ENVMAP_TYPE_CUBE";break;case jl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function n1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ks:e="ENVMAP_MODE_REFRACTION";break}return e}function i1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _g:e="ENVMAP_BLENDING_MULTIPLY";break;case P_:e="ENVMAP_BLENDING_MIX";break;case D_:e="ENVMAP_BLENDING_ADD";break}return e}function r1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function s1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=e1(t),p=t1(t),v=n1(t),_=i1(t),g=r1(t),x=jE(t),E=qE(l),w=o.createProgram();let S,y,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wa).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Wa).join(`
`),y.length>0&&(y+=`
`)):(S=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),y=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ct.tonemapping_pars_fragment:"",t.toneMapping!==Er?WE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,VE("linearToOutputTexel",t.outputColorSpace),XE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),u=sh(u),u=lg(u,t),u=cg(u,t),d=sh(d),d=lg(d,t),d=cg(d,t),u=ug(u),d=ug(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const P=I+S+u,C=I+y+d,F=sg(o,o.VERTEX_SHADER,P),k=sg(o,o.FRAGMENT_SHADER,C);o.attachShader(w,F),o.attachShader(w,k),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function N(z){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(w).trim(),Y=o.getShaderInfoLog(F).trim(),re=o.getShaderInfoLog(k).trim();let fe=!0,ae=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(fe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,F,k);else{const me=og(o,F,"vertex"),V=og(o,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+J+`
`+me+`
`+V)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Y===""||re==="")&&(ae=!1);ae&&(z.diagnostics={runnable:fe,programLog:J,vertexShader:{log:Y,prefix:S},fragmentShader:{log:re,prefix:y}})}o.deleteShader(F),o.deleteShader(k),H=new Bl(o,w),R=KE(o,w)}let H;this.getUniforms=function(){return H===void 0&&N(this),H};let R;this.getAttributes=function(){return R===void 0&&N(this),R};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,OE)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=k,this}let a1=0;class o1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new l1(e),t.set(e,r)),r}}class l1{constructor(e){this.id=a1++,this.code=e,this.usedTimes=0}}function c1(s,e,t,r,o,l,u){const d=new gh,f=new o1,p=new Set,v=[],_=o.logarithmicDepthBuffer,g=o.vertexTextures;let x=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(R){return p.add(R),R===0?"uv":`uv${R}`}function S(R,A,z,J,Y){const re=J.fog,fe=Y.geometry,ae=R.isMeshStandardMaterial?J.environment:null,me=(R.isMeshStandardMaterial?t:e).get(R.envMap||ae),V=me&&me.mapping===jl?me.image.height:null,ce=E[R.type];R.precision!==null&&(x=o.getMaxPrecision(R.precision),x!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",x,"instead."));const le=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=le!==void 0?le.length:0;let se=0;fe.morphAttributes.position!==void 0&&(se=1),fe.morphAttributes.normal!==void 0&&(se=2),fe.morphAttributes.color!==void 0&&(se=3);let Ne,ee,ue,Ee;if(ce){const St=Mi[ce];Ne=St.vertexShader,ee=St.fragmentShader}else Ne=R.vertexShader,ee=R.fragmentShader,f.update(R),ue=f.getVertexShaderID(R),Ee=f.getFragmentShaderID(R);const ye=s.getRenderTarget(),Te=s.state.buffers.depth.getReversed(),Ue=Y.isInstancedMesh===!0,et=Y.isBatchedMesh===!0,Dt=!!R.map,vt=!!R.matcap,Ut=!!me,G=!!R.aoMap,En=!!R.lightMap,pt=!!R.bumpMap,dt=!!R.normalMap,Ke=!!R.displacementMap,Pt=!!R.emissiveMap,je=!!R.metalnessMap,D=!!R.roughnessMap,T=R.anisotropy>0,Q=R.clearcoat>0,pe=R.dispersion>0,ve=R.iridescence>0,de=R.sheen>0,We=R.transmission>0,Ae=T&&!!R.anisotropyMap,Fe=Q&&!!R.clearcoatMap,ut=Q&&!!R.clearcoatNormalMap,Me=Q&&!!R.clearcoatRoughnessMap,Be=ve&&!!R.iridescenceMap,$e=ve&&!!R.iridescenceThicknessMap,tt=de&&!!R.sheenColorMap,Ge=de&&!!R.sheenRoughnessMap,ht=!!R.specularMap,st=!!R.specularColorMap,Ct=!!R.specularIntensityMap,q=We&&!!R.transmissionMap,be=We&&!!R.thicknessMap,oe=!!R.gradientMap,he=!!R.alphaMap,De=R.alphaTest>0,Pe=!!R.alphaHash,at=!!R.extensions;let Ot=Er;R.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const Qt={shaderID:ce,shaderType:R.type,shaderName:R.name,vertexShader:Ne,fragmentShader:ee,defines:R.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:x,batching:et,batchingColor:et&&Y._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&Y.instanceColor!==null,instancingMorph:Ue&&Y.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Zs,alphaToCoverage:!!R.alphaToCoverage,map:Dt,matcap:vt,envMap:Ut,envMapMode:Ut&&me.mapping,envMapCubeUVHeight:V,aoMap:G,lightMap:En,bumpMap:pt,normalMap:dt,displacementMap:g&&Ke,emissiveMap:Pt,normalMapObjectSpace:dt&&R.normalMapType===G_,normalMapTangentSpace:dt&&R.normalMapType===Dg,metalnessMap:je,roughnessMap:D,anisotropy:T,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:Fe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Ge,specularMap:ht,specularColorMap:st,specularIntensityMap:Ct,transmission:We,transmissionMap:q,thicknessMap:be,gradientMap:oe,opaque:R.transparent===!1&&R.blending===Vs&&R.alphaToCoverage===!1,alphaMap:he,alphaTest:De,alphaHash:Pe,combine:R.combine,mapUv:Dt&&w(R.map.channel),aoMapUv:G&&w(R.aoMap.channel),lightMapUv:En&&w(R.lightMap.channel),bumpMapUv:pt&&w(R.bumpMap.channel),normalMapUv:dt&&w(R.normalMap.channel),displacementMapUv:Ke&&w(R.displacementMap.channel),emissiveMapUv:Pt&&w(R.emissiveMap.channel),metalnessMapUv:je&&w(R.metalnessMap.channel),roughnessMapUv:D&&w(R.roughnessMap.channel),anisotropyMapUv:Ae&&w(R.anisotropyMap.channel),clearcoatMapUv:Fe&&w(R.clearcoatMap.channel),clearcoatNormalMapUv:ut&&w(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&w(R.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(R.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(R.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(R.sheenRoughnessMap.channel),specularMapUv:ht&&w(R.specularMap.channel),specularColorMapUv:st&&w(R.specularColorMap.channel),specularIntensityMapUv:Ct&&w(R.specularIntensityMap.channel),transmissionMapUv:q&&w(R.transmissionMap.channel),thicknessMapUv:be&&w(R.thicknessMap.channel),alphaMapUv:he&&w(R.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(dt||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!fe.attributes.uv&&(Dt||he),fog:!!re,useFog:R.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Te,skinning:Y.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:R.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&R.map.isVideoTexture===!0&&bt.getTransfer(R.map.colorSpace)===It,decodeVideoTextureEmissive:Pt&&R.emissiveMap.isVideoTexture===!0&&bt.getTransfer(R.emissiveMap.colorSpace)===It,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Hi,flipSided:R.side===On,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:at&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&R.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Qt.vertexUv1s=p.has(1),Qt.vertexUv2s=p.has(2),Qt.vertexUv3s=p.has(3),p.clear(),Qt}function y(R){const A=[];if(R.shaderID?A.push(R.shaderID):(A.push(R.customVertexShaderID),A.push(R.customFragmentShaderID)),R.defines!==void 0)for(const z in R.defines)A.push(z),A.push(R.defines[z]);return R.isRawShaderMaterial===!1&&(I(A,R),P(A,R),A.push(s.outputColorSpace)),A.push(R.customProgramCacheKey),A.join()}function I(R,A){R.push(A.precision),R.push(A.outputColorSpace),R.push(A.envMapMode),R.push(A.envMapCubeUVHeight),R.push(A.mapUv),R.push(A.alphaMapUv),R.push(A.lightMapUv),R.push(A.aoMapUv),R.push(A.bumpMapUv),R.push(A.normalMapUv),R.push(A.displacementMapUv),R.push(A.emissiveMapUv),R.push(A.metalnessMapUv),R.push(A.roughnessMapUv),R.push(A.anisotropyMapUv),R.push(A.clearcoatMapUv),R.push(A.clearcoatNormalMapUv),R.push(A.clearcoatRoughnessMapUv),R.push(A.iridescenceMapUv),R.push(A.iridescenceThicknessMapUv),R.push(A.sheenColorMapUv),R.push(A.sheenRoughnessMapUv),R.push(A.specularMapUv),R.push(A.specularColorMapUv),R.push(A.specularIntensityMapUv),R.push(A.transmissionMapUv),R.push(A.thicknessMapUv),R.push(A.combine),R.push(A.fogExp2),R.push(A.sizeAttenuation),R.push(A.morphTargetsCount),R.push(A.morphAttributeCount),R.push(A.numDirLights),R.push(A.numPointLights),R.push(A.numSpotLights),R.push(A.numSpotLightMaps),R.push(A.numHemiLights),R.push(A.numRectAreaLights),R.push(A.numDirLightShadows),R.push(A.numPointLightShadows),R.push(A.numSpotLightShadows),R.push(A.numSpotLightShadowsWithMaps),R.push(A.numLightProbes),R.push(A.shadowMapType),R.push(A.toneMapping),R.push(A.numClippingPlanes),R.push(A.numClipIntersection),R.push(A.depthPacking)}function P(R,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reverseDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),R.push(d.mask)}function C(R){const A=E[R.type];let z;if(A){const J=Mi[A];z=vy.clone(J.uniforms)}else z=R.uniforms;return z}function F(R,A){let z;for(let J=0,Y=v.length;J<Y;J++){const re=v[J];if(re.cacheKey===A){z=re,++z.usedTimes;break}}return z===void 0&&(z=new s1(s,A,R,l),v.push(z)),z}function k(R){if(--R.usedTimes===0){const A=v.indexOf(R);v[A]=v[v.length-1],v.pop(),R.destroy()}}function N(R){f.remove(R)}function H(){f.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:F,releaseProgram:k,releaseShaderCache:N,programs:v,dispose:H}}function u1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function d1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,g,x,E,w,S){let y=s[e];return y===void 0?(y={id:_.id,object:_,geometry:g,material:x,groupOrder:E,renderOrder:_.renderOrder,z:w,group:S},s[e]=y):(y.id=_.id,y.object=_,y.geometry=g,y.material=x,y.groupOrder=E,y.renderOrder=_.renderOrder,y.z=w,y.group=S),e++,y}function d(_,g,x,E,w,S){const y=u(_,g,x,E,w,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function f(_,g,x,E,w,S){const y=u(_,g,x,E,w,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function p(_,g){t.length>1&&t.sort(_||d1),r.length>1&&r.sort(g||hg),o.length>1&&o.sort(g||hg)}function v(){for(let _=e,g=s.length;_<g;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:v,sort:p}}function h1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new fg,s.set(r,[u])):o>=l.length?(u=new fg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function f1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new _t};break;case"SpotLight":t={position:new B,direction:new B,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function p1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let m1=0;function g1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function v1(s){const e=new f1,t=p1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new B);const o=new B,l=new zt,u=new zt;function d(p){let v=0,_=0,g=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let x=0,E=0,w=0,S=0,y=0,I=0,P=0,C=0,F=0,k=0,N=0;p.sort(g1);for(let R=0,A=p.length;R<A;R++){const z=p[R],J=z.color,Y=z.intensity,re=z.distance,fe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)v+=J.r*Y,_+=J.g*Y,g+=J.b*Y;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],Y);N++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const me=z.shadow,V=t.get(z);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,r.directionalShadow[x]=V,r.directionalShadowMap[x]=fe,r.directionalShadowMatrix[x]=z.shadow.matrix,I++}r.directional[x]=ae,x++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(J).multiplyScalar(Y),ae.distance=re,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[w]=ae;const me=z.shadow;if(z.map&&(r.spotLightMap[F]=z.map,F++,me.updateMatrices(z),z.castShadow&&k++),r.spotLightMatrix[w]=me.matrix,z.castShadow){const V=t.get(z);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,r.spotShadow[w]=V,r.spotShadowMap[w]=fe,C++}w++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(J).multiplyScalar(Y),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const me=z.shadow,V=t.get(z);V.shadowIntensity=me.intensity,V.shadowBias=me.bias,V.shadowNormalBias=me.normalBias,V.shadowRadius=me.radius,V.shadowMapSize=me.mapSize,V.shadowCameraNear=me.camera.near,V.shadowCameraFar=me.camera.far,r.pointShadow[E]=V,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=z.shadow.matrix,P++}r.point[E]=ae,E++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(Y),ae.groundColor.copy(z.groundColor).multiplyScalar(Y),r.hemi[y]=ae,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const H=r.hash;(H.directionalLength!==x||H.pointLength!==E||H.spotLength!==w||H.rectAreaLength!==S||H.hemiLength!==y||H.numDirectionalShadows!==I||H.numPointShadows!==P||H.numSpotShadows!==C||H.numSpotMaps!==F||H.numLightProbes!==N)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=S,r.point.length=E,r.hemi.length=y,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=C+F-k,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=N,H.directionalLength=x,H.pointLength=E,H.spotLength=w,H.rectAreaLength=S,H.hemiLength=y,H.numDirectionalShadows=I,H.numPointShadows=P,H.numSpotShadows=C,H.numSpotMaps=F,H.numLightProbes=N,r.version=m1++)}function f(p,v){let _=0,g=0,x=0,E=0,w=0;const S=v.matrixWorldInverse;for(let y=0,I=p.length;y<I;y++){const P=p[y];if(P.isDirectionalLight){const C=r.directional[_];C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),_++}else if(P.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(P.width*.5,0,0),C.halfHeight.set(0,P.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),E++}else if(P.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(P.matrixWorld),C.position.applyMatrix4(S),g++}else if(P.isHemisphereLight){const C=r.hemi[w];C.direction.setFromMatrixPosition(P.matrixWorld),C.direction.transformDirection(S),w++}}}return{setup:d,setupView:f,state:r}}function pg(s){const e=new v1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function f(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function _1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new pg(s),e.set(o,[d])):l>=u.length?(d=new pg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const y1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
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
}`;function S1(s,e,t){let r=new _h;const o=new Qe,l=new Qe,u=new Nt,d=new Wy({depthPacking:B_}),f=new Xy,p={},v=t.maxTextureSize,_={[wr]:On,[On]:wr,[Hi]:Hi},g=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:y1,fragmentShader:x1}),x=g.clone();x.defines.HORIZONTAL_PASS=1;const E=new Gn;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Mn(E,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let y=this.type;this.render=function(k,N,H){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const R=s.getRenderTarget(),A=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Mr),J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Y=y!==Gi&&this.type===Gi,re=y===Gi&&this.type!==Gi;for(let fe=0,ae=k.length;fe<ae;fe++){const me=k[fe],V=me.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;o.copy(V.mapSize);const ce=V.getFrameExtents();if(o.multiply(ce),l.copy(V.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/ce.x),o.x=l.x*ce.x,V.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/ce.y),o.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||Y===!0||re===!0){const U=this.type!==Gi?{minFilter:mi,magFilter:mi}:{};V.map!==null&&V.map.dispose(),V.map=new ts(o.x,o.y,U),V.map.texture.name=me.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const le=V.getViewportCount();for(let U=0;U<le;U++){const se=V.getViewport(U);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),J.viewport(u),V.updateMatrices(me,U),r=V.getFrustum(),C(N,H,V.camera,me,this.type)}V.isPointLightShadow!==!0&&this.type===Gi&&I(V,H),V.needsUpdate=!1}y=this.type,S.needsUpdate=!1,s.setRenderTarget(R,A,z)};function I(k,N){const H=e.update(w);g.defines.VSM_SAMPLES!==k.blurSamples&&(g.defines.VSM_SAMPLES=k.blurSamples,x.defines.VSM_SAMPLES=k.blurSamples,g.needsUpdate=!0,x.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new ts(o.x,o.y)),g.uniforms.shadow_pass.value=k.map.texture,g.uniforms.resolution.value=k.mapSize,g.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(N,null,H,g,w,null),x.uniforms.shadow_pass.value=k.mapPass.texture,x.uniforms.resolution.value=k.mapSize,x.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(N,null,H,x,w,null)}function P(k,N,H,R){let A=null;const z=H.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)A=z;else if(A=H.isPointLight===!0?f:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const J=A.uuid,Y=N.uuid;let re=p[J];re===void 0&&(re={},p[J]=re);let fe=re[Y];fe===void 0&&(fe=A.clone(),re[Y]=fe,N.addEventListener("dispose",F)),A=fe}if(A.visible=N.visible,A.wireframe=N.wireframe,R===Gi?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:_[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,H.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=s.properties.get(A);J.light=H}return A}function C(k,N,H,R,A){if(k.visible===!1)return;if(k.layers.test(N.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&A===Gi)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,k.matrixWorld);const Y=e.update(k),re=k.material;if(Array.isArray(re)){const fe=Y.groups;for(let ae=0,me=fe.length;ae<me;ae++){const V=fe[ae],ce=re[V.materialIndex];if(ce&&ce.visible){const le=P(k,ce,R,A);k.onBeforeShadow(s,k,N,H,Y,le,V),s.renderBufferDirect(H,null,Y,le,k,V),k.onAfterShadow(s,k,N,H,Y,le,V)}}}else if(re.visible){const fe=P(k,re,R,A);k.onBeforeShadow(s,k,N,H,Y,fe,null),s.renderBufferDirect(H,null,Y,fe,k,null),k.onAfterShadow(s,k,N,H,Y,fe,null)}}const J=k.children;for(let Y=0,re=J.length;Y<re;Y++)C(J[Y],N,H,R,A)}function F(k){k.target.removeEventListener("dispose",F);for(const H in p){const R=p[H],A=k.target.uuid;A in R&&(R[A].dispose(),delete R[A])}}}const M1={[xd]:Sd,[Md]:Td,[Ed]:Ad,[js]:wd,[Sd]:xd,[Td]:Md,[Ad]:Ed,[wd]:js};function E1(s,e){function t(){let q=!1;const be=new Nt;let oe=null;const he=new Nt(0,0,0,0);return{setMask:function(De){oe!==De&&!q&&(s.colorMask(De,De,De,De),oe=De)},setLocked:function(De){q=De},setClear:function(De,Pe,at,Ot,Qt){Qt===!0&&(De*=Ot,Pe*=Ot,at*=Ot),be.set(De,Pe,at,Ot),he.equals(be)===!1&&(s.clearColor(De,Pe,at,Ot),he.copy(be))},reset:function(){q=!1,oe=null,he.set(-1,0,0,0)}}}function r(){let q=!1,be=!1,oe=null,he=null,De=null;return{setReversed:function(Pe){if(be!==Pe){const at=e.get("EXT_clip_control");be?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ot=De;De=null,this.setClear(Ot)}be=Pe},getReversed:function(){return be},setTest:function(Pe){Pe?ye(s.DEPTH_TEST):Te(s.DEPTH_TEST)},setMask:function(Pe){oe!==Pe&&!q&&(s.depthMask(Pe),oe=Pe)},setFunc:function(Pe){if(be&&(Pe=M1[Pe]),he!==Pe){switch(Pe){case xd:s.depthFunc(s.NEVER);break;case Sd:s.depthFunc(s.ALWAYS);break;case Md:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Ed:s.depthFunc(s.EQUAL);break;case wd:s.depthFunc(s.GEQUAL);break;case Td:s.depthFunc(s.GREATER);break;case Ad:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}he=Pe}},setLocked:function(Pe){q=Pe},setClear:function(Pe){De!==Pe&&(be&&(Pe=1-Pe),s.clearDepth(Pe),De=Pe)},reset:function(){q=!1,oe=null,he=null,De=null,be=!1}}}function o(){let q=!1,be=null,oe=null,he=null,De=null,Pe=null,at=null,Ot=null,Qt=null;return{setTest:function(St){q||(St?ye(s.STENCIL_TEST):Te(s.STENCIL_TEST))},setMask:function(St){be!==St&&!q&&(s.stencilMask(St),be=St)},setFunc:function(St,Dn,wn){(oe!==St||he!==Dn||De!==wn)&&(s.stencilFunc(St,Dn,wn),oe=St,he=Dn,De=wn)},setOp:function(St,Dn,wn){(Pe!==St||at!==Dn||Ot!==wn)&&(s.stencilOp(St,Dn,wn),Pe=St,at=Dn,Ot=wn)},setLocked:function(St){q=St},setClear:function(St){Qt!==St&&(s.clearStencil(St),Qt=St)},reset:function(){q=!1,be=null,oe=null,he=null,De=null,Pe=null,at=null,Ot=null,Qt=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,p=new WeakMap;let v={},_={},g=new WeakMap,x=[],E=null,w=!1,S=null,y=null,I=null,P=null,C=null,F=null,k=null,N=new _t(0,0,0),H=0,R=!1,A=null,z=null,J=null,Y=null,re=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,me=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(me=parseFloat(/^WebGL (\d)/.exec(V)[1]),ae=me>=1):V.indexOf("OpenGL ES")!==-1&&(me=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),ae=me>=2);let ce=null,le={};const U=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Nt().fromArray(U),ee=new Nt().fromArray(se);function ue(q,be,oe,he){const De=new Uint8Array(4),Pe=s.createTexture();s.bindTexture(q,Pe),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<oe;at++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(be,0,s.RGBA,1,1,he,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(be+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Pe}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(s.DEPTH_TEST),u.setFunc(js),pt(!1),dt(cm),ye(s.CULL_FACE),G(Mr);function ye(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function Te(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ue(q,be){return _[q]!==be?(s.bindFramebuffer(q,be),_[q]=be,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=be),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=be),!0):!1}function et(q,be){let oe=x,he=!1;if(q){oe=g.get(be),oe===void 0&&(oe=[],g.set(be,oe));const De=q.textures;if(oe.length!==De.length||oe[0]!==s.COLOR_ATTACHMENT0){for(let Pe=0,at=De.length;Pe<at;Pe++)oe[Pe]=s.COLOR_ATTACHMENT0+Pe;oe.length=De.length,he=!0}}else oe[0]!==s.BACK&&(oe[0]=s.BACK,he=!0);he&&s.drawBuffers(oe)}function Dt(q){return E!==q?(s.useProgram(q),E=q,!0):!1}const vt={[$r]:s.FUNC_ADD,[f_]:s.FUNC_SUBTRACT,[p_]:s.FUNC_REVERSE_SUBTRACT};vt[m_]=s.MIN,vt[g_]=s.MAX;const Ut={[v_]:s.ZERO,[__]:s.ONE,[y_]:s.SRC_COLOR,[_d]:s.SRC_ALPHA,[T_]:s.SRC_ALPHA_SATURATE,[E_]:s.DST_COLOR,[S_]:s.DST_ALPHA,[x_]:s.ONE_MINUS_SRC_COLOR,[yd]:s.ONE_MINUS_SRC_ALPHA,[w_]:s.ONE_MINUS_DST_COLOR,[M_]:s.ONE_MINUS_DST_ALPHA,[A_]:s.CONSTANT_COLOR,[b_]:s.ONE_MINUS_CONSTANT_COLOR,[C_]:s.CONSTANT_ALPHA,[R_]:s.ONE_MINUS_CONSTANT_ALPHA};function G(q,be,oe,he,De,Pe,at,Ot,Qt,St){if(q===Mr){w===!0&&(Te(s.BLEND),w=!1);return}if(w===!1&&(ye(s.BLEND),w=!0),q!==h_){if(q!==S||St!==R){if((y!==$r||C!==$r)&&(s.blendEquation(s.FUNC_ADD),y=$r,C=$r),St)switch(q){case Vs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFunc(s.ONE,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Vs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case um:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case dm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case hm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,P=null,F=null,k=null,N.set(0,0,0),H=0,S=q,R=St}return}De=De||be,Pe=Pe||oe,at=at||he,(be!==y||De!==C)&&(s.blendEquationSeparate(vt[be],vt[De]),y=be,C=De),(oe!==I||he!==P||Pe!==F||at!==k)&&(s.blendFuncSeparate(Ut[oe],Ut[he],Ut[Pe],Ut[at]),I=oe,P=he,F=Pe,k=at),(Ot.equals(N)===!1||Qt!==H)&&(s.blendColor(Ot.r,Ot.g,Ot.b,Qt),N.copy(Ot),H=Qt),S=q,R=!1}function En(q,be){q.side===Hi?Te(s.CULL_FACE):ye(s.CULL_FACE);let oe=q.side===On;be&&(oe=!oe),pt(oe),q.blending===Vs&&q.transparent===!1?G(Mr):G(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const he=q.stencilWrite;d.setTest(he),he&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Pt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Te(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(q){A!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),A=q)}function dt(q){q!==u_?(ye(s.CULL_FACE),q!==z&&(q===cm?s.cullFace(s.BACK):q===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Te(s.CULL_FACE),z=q}function Ke(q){q!==J&&(ae&&s.lineWidth(q),J=q)}function Pt(q,be,oe){q?(ye(s.POLYGON_OFFSET_FILL),(Y!==be||re!==oe)&&(s.polygonOffset(be,oe),Y=be,re=oe)):Te(s.POLYGON_OFFSET_FILL)}function je(q){q?ye(s.SCISSOR_TEST):Te(s.SCISSOR_TEST)}function D(q){q===void 0&&(q=s.TEXTURE0+fe-1),ce!==q&&(s.activeTexture(q),ce=q)}function T(q,be,oe){oe===void 0&&(ce===null?oe=s.TEXTURE0+fe-1:oe=ce);let he=le[oe];he===void 0&&(he={type:void 0,texture:void 0},le[oe]=he),(he.type!==q||he.texture!==be)&&(ce!==oe&&(s.activeTexture(oe),ce=oe),s.bindTexture(q,be||Ee[q]),he.type=q,he.texture=be)}function Q(){const q=le[ce];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(q){Ne.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ne.copy(q))}function Ge(q){ee.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),ee.copy(q))}function ht(q,be){let oe=p.get(be);oe===void 0&&(oe=new WeakMap,p.set(be,oe));let he=oe.get(q);he===void 0&&(he=s.getUniformBlockIndex(be,q.name),oe.set(q,he))}function st(q,be){const he=p.get(be).get(q);f.get(be)!==he&&(s.uniformBlockBinding(be,he,q.__bindingPointIndex),f.set(be,he))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ce=null,le={},_={},g=new WeakMap,x=[],E=null,w=!1,S=null,y=null,I=null,P=null,C=null,F=null,k=null,N=new _t(0,0,0),H=0,R=!1,A=null,z=null,J=null,Y=null,re=null,Ne.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:Te,bindFramebuffer:Ue,drawBuffers:et,useProgram:Dt,setBlending:G,setMaterial:En,setFlipSided:pt,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:Pt,setScissorTest:je,activeTexture:D,bindTexture:T,unbindTexture:Q,compressedTexImage2D:pe,compressedTexImage3D:ve,texImage2D:Be,texImage3D:$e,updateUBOMapping:ht,uniformBlockBinding:st,texStorage2D:ut,texStorage3D:Me,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:Fe,scissor:tt,viewport:Ge,reset:Ct}}function w1(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qe,v=new WeakMap;let _;const g=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,T){return x?new OffscreenCanvas(D,T):Vl("canvas")}function w(D,T,Q){let pe=1;const ve=je(D);if((ve.width>Q||ve.height>Q)&&(pe=Q/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const de=Math.floor(pe*ve.width),We=Math.floor(pe*ve.height);_===void 0&&(_=E(de,We));const Ae=T?E(de,We):_;return Ae.width=de,Ae.height=We,Ae.getContext("2d").drawImage(D,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+We+")."),Ae}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function I(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(D,T,Q,pe,ve=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let de=T;if(T===s.RED&&(Q===s.FLOAT&&(de=s.R32F),Q===s.HALF_FLOAT&&(de=s.R16F),Q===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.R8UI),Q===s.UNSIGNED_SHORT&&(de=s.R16UI),Q===s.UNSIGNED_INT&&(de=s.R32UI),Q===s.BYTE&&(de=s.R8I),Q===s.SHORT&&(de=s.R16I),Q===s.INT&&(de=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(de=s.RG32F),Q===s.HALF_FLOAT&&(de=s.RG16F),Q===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RG8UI),Q===s.UNSIGNED_SHORT&&(de=s.RG16UI),Q===s.UNSIGNED_INT&&(de=s.RG32UI),Q===s.BYTE&&(de=s.RG8I),Q===s.SHORT&&(de=s.RG16I),Q===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Q===s.UNSIGNED_INT&&(de=s.RGB32UI),Q===s.BYTE&&(de=s.RGB8I),Q===s.SHORT&&(de=s.RGB16I),Q===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Q===s.UNSIGNED_INT&&(de=s.RGBA32UI),Q===s.BYTE&&(de=s.RGBA8I),Q===s.SHORT&&(de=s.RGBA16I),Q===s.INT&&(de=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const We=ve?Gl:bt.getTransfer(pe);Q===s.FLOAT&&(de=s.RGBA32F),Q===s.HALF_FLOAT&&(de=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(de=We===It?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function C(D,T){let Q;return D?T===null||T===es||T===Ys?Q=s.DEPTH24_STENCIL8:T===Vi?Q=s.DEPTH32F_STENCIL8:T===qa&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===Ys?Q=s.DEPTH_COMPONENT24:T===Vi?Q=s.DEPTH_COMPONENT32F:T===qa&&(Q=s.DEPTH_COMPONENT16),Q}function F(D,T){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==mi&&D.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function k(D){const T=D.target;T.removeEventListener("dispose",k),H(T),T.isVideoTexture&&v.delete(T)}function N(D){const T=D.target;T.removeEventListener("dispose",N),A(T)}function H(D){const T=r.get(D);if(T.__webglInit===void 0)return;const Q=D.source,pe=g.get(Q);if(pe){const ve=pe[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&R(D),Object.keys(pe).length===0&&g.delete(Q)}r.remove(D)}function R(D){const T=r.get(D);s.deleteTexture(T.__webglTexture);const Q=D.source,pe=g.get(Q);delete pe[T.__cacheKey],u.memory.textures--}function A(D){const T=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(T.__webglFramebuffer[pe]))for(let ve=0;ve<T.__webglFramebuffer[pe].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[pe][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[pe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[pe])}else{if(Array.isArray(T.__webglFramebuffer))for(let pe=0;pe<T.__webglFramebuffer.length;pe++)s.deleteFramebuffer(T.__webglFramebuffer[pe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pe=0;pe<T.__webglColorRenderbuffer.length;pe++)T.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[pe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=D.textures;for(let pe=0,ve=Q.length;pe<ve;pe++){const de=r.get(Q[pe]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Q[pe])}r.remove(D)}let z=0;function J(){z=0}function Y(){const D=z;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),z+=1,D}function re(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function fe(D,T){const Q=r.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(Q,D,T);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function ae(D,T){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){ee(Q,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function me(D,T){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){ee(Q,D,T);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function V(D,T){const Q=r.get(D);if(D.version>0&&Q.__version!==D.version){ue(Q,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const ce={[Rd]:s.REPEAT,[Jr]:s.CLAMP_TO_EDGE,[Pd]:s.MIRRORED_REPEAT},le={[mi]:s.NEAREST,[z_]:s.NEAREST_MIPMAP_NEAREST,[al]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Iu]:s.LINEAR_MIPMAP_NEAREST,[Qr]:s.LINEAR_MIPMAP_LINEAR},U={[H_]:s.NEVER,[K_]:s.ALWAYS,[V_]:s.LESS,[Lg]:s.LEQUAL,[W_]:s.EQUAL,[q_]:s.GEQUAL,[X_]:s.GREATER,[j_]:s.NOTEQUAL};function se(D,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Iu||T.magFilter===al||T.magFilter===Qr||T.minFilter===Ei||T.minFilter===Iu||T.minFilter===al||T.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,ce[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,le[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,le[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==al&&T.minFilter!==Qr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(D,T){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",k));const pe=T.source;let ve=g.get(pe);ve===void 0&&(ve={},g.set(pe,ve));const de=re(T);if(de!==D.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[de].usedTimes++;const We=ve[D.__cacheKey];We!==void 0&&(ve[D.__cacheKey].usedTimes--,We.usedTimes===0&&R(T)),D.__cacheKey=de,D.__webglTexture=ve[de].texture}return Q}function ee(D,T,Q){let pe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pe=s.TEXTURE_3D);const ve=Ne(D,T),de=T.source;t.bindTexture(pe,D.__webglTexture,s.TEXTURE0+Q);const We=r.get(de);if(de.version!==We.__version||ve===!0){t.activeTexture(s.TEXTURE0+Q);const Ae=bt.getPrimaries(bt.workingColorSpace),Fe=T.colorSpace===Sr?null:bt.getPrimaries(T.colorSpace),ut=T.colorSpace===Sr||Ae===Fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Me=w(T.image,!1,o.maxTextureSize);Me=Pt(T,Me);const Be=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let tt=P(T.internalFormat,Be,$e,T.colorSpace,T.isVideoTexture);se(pe,T);let Ge;const ht=T.mipmaps,st=T.isVideoTexture!==!0,Ct=We.__version===void 0||ve===!0,q=de.dataReady,be=F(T,Me);if(T.isDepthTexture)tt=C(T.format===$s,T.type),Ct&&(st?t.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,null));else if(T.isDataTexture)if(ht.length>0){st&&Ct&&t.texStorage2D(s.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let oe=0,he=ht.length;oe<he;oe++)Ge=ht[oe],st?q&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,Be,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,oe,tt,Ge.width,Ge.height,0,Be,$e,Ge.data);T.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(s.TEXTURE_2D,be,tt,Me.width,Me.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,$e,Me.data)):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,tt,ht[0].width,ht[0].height,Me.depth);for(let oe=0,he=ht.length;oe<he;oe++)if(Ge=ht[oe],T.format!==pi)if(Be!==null)if(st){if(q)if(T.layerUpdates.size>0){const De=Wm(Ge.width,Ge.height,T.format,T.type);for(const Pe of T.layerUpdates){const at=Ge.data.subarray(Pe*De/Ge.data.BYTES_PER_ELEMENT,(Pe+1)*De/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,Pe,Ge.width,Ge.height,1,Be,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Ge.width,Ge.height,Me.depth,Be,Ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,oe,tt,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,oe,0,0,0,Ge.width,Ge.height,Me.depth,Be,$e,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,oe,tt,Ge.width,Ge.height,Me.depth,0,Be,$e,Ge.data)}else{st&&Ct&&t.texStorage2D(s.TEXTURE_2D,be,tt,ht[0].width,ht[0].height);for(let oe=0,he=ht.length;oe<he;oe++)Ge=ht[oe],T.format!==pi?Be!==null?st?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,Be,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,oe,tt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?q&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Ge.width,Ge.height,Be,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,oe,tt,Ge.width,Ge.height,0,Be,$e,Ge.data)}else if(T.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,tt,Me.width,Me.height,Me.depth),q)if(T.layerUpdates.size>0){const oe=Wm(Me.width,Me.height,T.format,T.type);for(const he of T.layerUpdates){const De=Me.data.subarray(he*oe/Me.data.BYTES_PER_ELEMENT,(he+1)*oe/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,he,Me.width,Me.height,1,Be,$e,De)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(T.isData3DTexture)st?(Ct&&t.texStorage3D(s.TEXTURE_3D,be,tt,Me.width,Me.height,Me.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(T.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(s.TEXTURE_2D,be,tt,Me.width,Me.height);else{let oe=Me.width,he=Me.height;for(let De=0;De<be;De++)t.texImage2D(s.TEXTURE_2D,De,tt,oe,he,0,Be,$e,null),oe>>=1,he>>=1}}else if(ht.length>0){if(st&&Ct){const oe=je(ht[0]);t.texStorage2D(s.TEXTURE_2D,be,tt,oe.width,oe.height)}for(let oe=0,he=ht.length;oe<he;oe++)Ge=ht[oe],st?q&&t.texSubImage2D(s.TEXTURE_2D,oe,0,0,Be,$e,Ge):t.texImage2D(s.TEXTURE_2D,oe,tt,Be,$e,Ge);T.generateMipmaps=!1}else if(st){if(Ct){const oe=je(Me);t.texStorage2D(s.TEXTURE_2D,be,tt,oe.width,oe.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,$e,Me)}else t.texImage2D(s.TEXTURE_2D,0,tt,Be,$e,Me);S(T)&&y(pe),We.__version=de.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ue(D,T,Q){if(T.image.length!==6)return;const pe=Ne(D,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Q);const de=r.get(ve);if(ve.version!==de.__version||pe===!0){t.activeTexture(s.TEXTURE0+Q);const We=bt.getPrimaries(bt.workingColorSpace),Ae=T.colorSpace===Sr?null:bt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Sr||We===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ut=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let he=0;he<6;he++)!ut&&!Me?Be[he]=w(T.image[he],!0,o.maxCubemapSize):Be[he]=Me?T.image[he].image:T.image[he],Be[he]=Pt(T,Be[he]);const $e=Be[0],tt=l.convert(T.format,T.colorSpace),Ge=l.convert(T.type),ht=P(T.internalFormat,tt,Ge,T.colorSpace),st=T.isVideoTexture!==!0,Ct=de.__version===void 0||pe===!0,q=ve.dataReady;let be=F(T,$e);se(s.TEXTURE_CUBE_MAP,T);let oe;if(ut){st&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,$e.width,$e.height);for(let he=0;he<6;he++){oe=Be[he].mipmaps;for(let De=0;De<oe.length;De++){const Pe=oe[De];T.format!==pi?tt!==null?st?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,tt,Pe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,ht,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,0,0,Pe.width,Pe.height,tt,Ge,Pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De,ht,Pe.width,Pe.height,0,tt,Ge,Pe.data)}}}else{if(oe=T.mipmaps,st&&Ct){oe.length>0&&be++;const he=je(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Me){st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Be[he].width,Be[he].height,tt,Ge,Be[he].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Be[he].width,Be[he].height,0,tt,Ge,Be[he].data);for(let De=0;De<oe.length;De++){const at=oe[De].image[he].image;st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,at.width,at.height,tt,Ge,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,ht,at.width,at.height,0,tt,Ge,at.data)}}else{st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,tt,Ge,Be[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,tt,Ge,Be[he]);for(let De=0;De<oe.length;De++){const Pe=oe[De];st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,0,0,tt,Ge,Pe.image[he]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+he,De+1,ht,tt,Ge,Pe.image[he])}}}S(T)&&y(s.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function Ee(D,T,Q,pe,ve,de){const We=l.convert(Q.format,Q.colorSpace),Ae=l.convert(Q.type),Fe=P(Q.internalFormat,We,Ae,Q.colorSpace),ut=r.get(T),Me=r.get(Q);if(Me.__renderTarget=T,!ut.__hasExternalTextures){const Be=Math.max(1,T.width>>de),$e=Math.max(1,T.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Fe,Be,$e,T.depth,0,We,Ae,null):t.texImage2D(ve,de,Fe,Be,$e,0,We,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,0,pt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,pe,ve,Me.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(D,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const pe=T.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,de=C(T.stencilBuffer,ve),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=pt(T);dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,D)}else{const pe=T.textures;for(let ve=0;ve<pe.length;ve++){const de=pe[ve],We=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),Fe=P(de.internalFormat,We,Ae,de.colorSpace),ut=pt(T);Q&&dt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Fe,T.width,T.height):dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Fe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(T.depthTexture);pe.__renderTarget=T,(!pe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),fe(T.depthTexture,0);const ve=pe.__webglTexture,de=pt(T);if(T.depthTexture.format===Ws)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===$s)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(D){const T=r.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pe){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=pe}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");Te(T.__webglFramebuffer,D)}else if(Q){T.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[pe]),T.__webglDepthbuffer[pe]===void 0)T.__webglDepthbuffer[pe]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[pe];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,pe,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(D,T,Q){const pe=r.get(D);T!==void 0&&Ee(pe.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ue(D)}function Dt(D){const T=D.texture,Q=r.get(D),pe=r.get(T);D.addEventListener("dispose",N);const ve=D.textures,de=D.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=s.createTexture()),pe.__version=T.version,u.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)Q.__webglFramebuffer[Ae][Fe]=s.createFramebuffer()}else Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=r.get(ve[Ae]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(D.samples>0&&dt(D)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const Fe=ve[Ae];Q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const ut=l.convert(Fe.format,Fe.colorSpace),Me=l.convert(Fe.type),Be=P(Fe.internalFormat,ut,Me,Fe.colorSpace,D.isXRRenderTarget===!0),$e=pt(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,pe.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Ee(Q.__webglFramebuffer[Ae][Fe],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Fe);else Ee(Q.__webglFramebuffer[Ae],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,Fe=ve.length;Ae<Fe;Ae++){const ut=ve[Ae],Me=r.get(ut);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,ut),Ee(Q.__webglFramebuffer,D,ut,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(ut)&&y(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ae=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),se(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Ee(Q.__webglFramebuffer[Fe],D,T,s.COLOR_ATTACHMENT0,Ae,Fe);else Ee(Q.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,Ae,0);S(T)&&y(Ae),t.unbindTexture()}D.depthBuffer&&Ue(D)}function vt(D){const T=D.textures;for(let Q=0,pe=T.length;Q<pe;Q++){const ve=T[Q];if(S(ve)){const de=I(D),We=r.get(ve).__webglTexture;t.bindTexture(de,We),y(de),t.unbindTexture()}}}const Ut=[],G=[];function En(D){if(D.samples>0){if(dt(D)===!1){const T=D.textures,Q=D.width,pe=D.height;let ve=s.COLOR_BUFFER_BIT;const de=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(D),Ae=T.length>1;if(Ae)for(let Fe=0;Fe<T.length;Fe++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(T[Fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,Q,pe,0,0,Q,pe,ve,s.NEAREST),f===!0&&(Ut.length=0,G.length=0,Ut.push(s.COLOR_ATTACHMENT0+Fe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ut.push(de),G.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,G)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Fe=0;Fe<T.length;Fe++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.RENDERBUFFER,We.__webglColorRenderbuffer[Fe]);const ut=r.get(T[Fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Fe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&f){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function pt(D){return Math.min(o.maxSamples,D.samples)}function dt(D){const T=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(D){const T=u.render.frame;v.get(D)!==T&&(v.set(D,T),D.update())}function Pt(D,T){const Q=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==Zs&&Q!==Sr&&(bt.getTransfer(Q)===It?(pe!==pi||ve!==ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function je(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Y,this.resetTextureUnits=J,this.setTexture2D=fe,this.setTexture2DArray=ae,this.setTexture3D=me,this.setTextureCube=V,this.rebindTextures=et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=vt,this.updateMultisampleRenderTarget=En,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=dt}function T1(s,e){function t(r,o=Sr){let l;const u=bt.getTransfer(o);if(r===ji)return s.UNSIGNED_BYTE;if(r===uh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===dh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Eg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Sg)return s.BYTE;if(r===Mg)return s.SHORT;if(r===qa)return s.UNSIGNED_SHORT;if(r===ch)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ka)return s.HALF_FLOAT;if(r===wg)return s.ALPHA;if(r===Tg)return s.RGB;if(r===pi)return s.RGBA;if(r===Ag)return s.LUMINANCE;if(r===bg)return s.LUMINANCE_ALPHA;if(r===Ws)return s.DEPTH_COMPONENT;if(r===$s)return s.DEPTH_STENCIL;if(r===Cg)return s.RED;if(r===hh)return s.RED_INTEGER;if(r===Rg)return s.RG;if(r===fh)return s.RG_INTEGER;if(r===ph)return s.RGBA_INTEGER;if(r===Il||r===Nl||r===Ul||r===Fl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Il)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Il)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ul)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Fl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Dd||r===Ld||r===kd||r===Id)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Dd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ld)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Nd||r===Ud||r===Fd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Nd||r===Ud)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Fd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===zd||r===Od||r===Bd||r===Gd||r===Hd||r===Vd||r===Wd||r===Xd||r===jd||r===qd||r===Kd||r===Yd||r===$d||r===Zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Bd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Gd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Hd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Yd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$d)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zl||r===Jd||r===Qd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===zl)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pg||r===eh||r===th||r===nh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===zl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===eh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===th)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===nh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ys?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const A1={type:"move"};class md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),y=this._getHandJoint(p,w);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],g=v.position.distanceTo(_.position),x=.02,E=.005;p.inputState.pinching&&g>x+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=x-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(A1)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Va;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,C1=`
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

}`;class R1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:b1,fragmentShader:C1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mn(new Yl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P1 extends Qs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,v=null,_=null,g=null,x=null,E=null;const w=new R1,S=t.getContextAttributes();let y=null,I=null;const P=[],C=[],F=new Qe;let k=null;const N=new Yn;N.viewport=new Nt;const H=new Yn;H.viewport=new Nt;const R=[N,H],A=new $y;let z=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ue=P[ee];return ue===void 0&&(ue=new md,P[ee]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ee){let ue=P[ee];return ue===void 0&&(ue=new md,P[ee]=ue),ue.getGripSpace()},this.getHand=function(ee){let ue=P[ee];return ue===void 0&&(ue=new md,P[ee]=ue),ue.getHandSpace()};function Y(ee){const ue=C.indexOf(ee.inputSource);if(ue===-1)return;const Ee=P[ue];Ee!==void 0&&(Ee.update(ee.inputSource,ee.frame,p||u),Ee.dispatchEvent({type:ee.type,data:ee.inputSource}))}function re(){o.removeEventListener("select",Y),o.removeEventListener("selectstart",Y),o.removeEventListener("selectend",Y),o.removeEventListener("squeeze",Y),o.removeEventListener("squeezestart",Y),o.removeEventListener("squeezeend",Y),o.removeEventListener("end",re),o.removeEventListener("inputsourceschange",fe);for(let ee=0;ee<P.length;ee++){const ue=C[ee];ue!==null&&(C[ee]=null,P[ee].disconnect(ue))}z=null,J=null,w.reset(),e.setRenderTarget(y),x=null,g=null,_=null,o=null,I=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(k),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return g!==null?g:x},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(ee){if(o=ee,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",Y),o.addEventListener("selectstart",Y),o.addEventListener("selectend",Y),o.addEventListener("squeeze",Y),o.addEventListener("squeezestart",Y),o.addEventListener("squeezeend",Y),o.addEventListener("end",re),o.addEventListener("inputsourceschange",fe),S.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new ts(x.framebufferWidth,x.framebufferHeight,{format:pi,type:ji,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Ee=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?$s:Ws,Ee=S.stencil?Ys:es);const Te={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};_=new XRWebGLBinding(o,t),g=_.createProjectionLayer(Te),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),I=new ts(g.textureWidth,g.textureHeight,{format:pi,type:ji,depthTexture:new Wg(g.textureWidth,g.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function fe(ee){for(let ue=0;ue<ee.removed.length;ue++){const Ee=ee.removed[ue],ye=C.indexOf(Ee);ye>=0&&(C[ye]=null,P[ye].disconnect(Ee))}for(let ue=0;ue<ee.added.length;ue++){const Ee=ee.added[ue];let ye=C.indexOf(Ee);if(ye===-1){for(let Ue=0;Ue<P.length;Ue++)if(Ue>=C.length){C.push(Ee),ye=Ue;break}else if(C[Ue]===null){C[Ue]=Ee,ye=Ue;break}if(ye===-1)break}const Te=P[ye];Te&&Te.connect(Ee)}}const ae=new B,me=new B;function V(ee,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),me.setFromMatrixPosition(Ee.matrixWorld);const ye=ae.distanceTo(me),Te=ue.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,et=Te[14]/(Te[10]-1),Dt=Te[14]/(Te[10]+1),vt=(Te[9]+1)/Te[5],Ut=(Te[9]-1)/Te[5],G=(Te[8]-1)/Te[0],En=(Ue[8]+1)/Ue[0],pt=et*G,dt=et*En,Ke=ye/(-G+En),Pt=Ke*-G;if(ue.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Pt),ee.translateZ(Ke),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Te[10]===-1)ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const je=et+Ke,D=Dt+Ke,T=pt-Pt,Q=dt+(ye-Pt),pe=vt*Dt/D*je,ve=Ut*Dt/D*je;ee.projectionMatrix.makePerspective(T,Q,pe,ve,je,D),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ce(ee,ue){ue===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ue.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(o===null)return;let ue=ee.near,Ee=ee.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),A.near=H.near=N.near=ue,A.far=H.far=N.far=Ee,(z!==A.near||J!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),z=A.near,J=A.far),N.layers.mask=ee.layers.mask|2,H.layers.mask=ee.layers.mask|4,A.layers.mask=N.layers.mask|H.layers.mask;const ye=ee.parent,Te=A.cameras;ce(A,ye);for(let Ue=0;Ue<Te.length;Ue++)ce(Te[Ue],ye);Te.length===2?V(A,N,H):A.projectionMatrix.copy(N.projectionMatrix),le(ee,A,ye)};function le(ee,ue,Ee){Ee===null?ee.matrix.copy(ue.matrixWorld):(ee.matrix.copy(Ee.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(ue.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(ue.projectionMatrix),ee.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ih*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(g===null&&x===null))return f},this.setFoveation=function(ee){f=ee,g!==null&&(g.fixedFoveation=ee),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ee)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(A)};let U=null;function se(ee,ue){if(v=ue.getViewerPose(p||u),E=ue,v!==null){const Ee=v.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ye=!1;Ee.length!==A.cameras.length&&(A.cameras.length=0,ye=!0);for(let Ue=0;Ue<Ee.length;Ue++){const et=Ee[Ue];let Dt=null;if(x!==null)Dt=x.getViewport(et);else{const Ut=_.getViewSubImage(g,et);Dt=Ut.viewport,Ue===0&&(e.setRenderTargetTextures(I,Ut.colorTexture,g.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(I))}let vt=R[Ue];vt===void 0&&(vt=new Yn,vt.layers.enable(Ue),vt.viewport=new Nt,R[Ue]=vt),vt.matrix.fromArray(et.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(et.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ue===0&&(A.matrix.copy(vt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ye===!0&&A.cameras.push(vt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ue=_.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const ye=C[Ee],Te=P[Ee];ye!==null&&Te!==void 0&&Te.update(ye,ue,p||u)}U&&U(ee,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const Ne=new $g;Ne.setAnimationLoop(se),this.setAnimationLoop=function(ee){U=ee},this.dispose=function(){}}}const qr=new Ti,D1=new zt;function L1(s,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Bg(s)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,I,P,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),_(S,y)):y.isMeshPhongMaterial?(l(S,y),v(S,y)):y.isMeshStandardMaterial?(l(S,y),g(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),E(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),w(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&d(S,y)):y.isPointsMaterial?f(S,y,I,P):y.isSpriteMaterial?p(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===On&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===On&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const I=e.get(y),P=I.envMap,C=I.envMapRotation;P&&(S.envMap.value=P,qr.copy(C),qr.x*=-1,qr.y*=-1,qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(D1.makeRotationFromEuler(qr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function d(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function f(S,y,I,P){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*I,S.scale.value=P*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function v(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function _(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,I){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===On&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function w(S,y){const I=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function k1(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,P){const C=P.program;r.uniformBlockBinding(I,C)}function p(I,P){let C=o[I.id];C===void 0&&(E(I),C=v(I),o[I.id]=C,I.addEventListener("dispose",S));const F=P.program;r.updateUBOMapping(I,F);const k=e.render.frame;l[I.id]!==k&&(g(I),l[I.id]=k)}function v(I){const P=_();I.__bindingPointIndex=P;const C=s.createBuffer(),F=I.__size,k=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,F,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,C),C}function _(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(I){const P=o[I.id],C=I.uniforms,F=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let k=0,N=C.length;k<N;k++){const H=Array.isArray(C[k])?C[k]:[C[k]];for(let R=0,A=H.length;R<A;R++){const z=H[R];if(x(z,k,R,F)===!0){const J=z.__offset,Y=Array.isArray(z.value)?z.value:[z.value];let re=0;for(let fe=0;fe<Y.length;fe++){const ae=Y[fe],me=w(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,J+re,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,re),re+=me.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(I,P,C,F){const k=I.value,N=P+"_"+C;if(F[N]===void 0)return typeof k=="number"||typeof k=="boolean"?F[N]=k:F[N]=k.clone(),!0;{const H=F[N];if(typeof k=="number"||typeof k=="boolean"){if(H!==k)return F[N]=k,!0}else if(H.equals(k)===!1)return H.copy(k),!0}return!1}function E(I){const P=I.uniforms;let C=0;const F=16;for(let N=0,H=P.length;N<H;N++){const R=Array.isArray(P[N])?P[N]:[P[N]];for(let A=0,z=R.length;A<z;A++){const J=R[A],Y=Array.isArray(J.value)?J.value:[J.value];for(let re=0,fe=Y.length;re<fe;re++){const ae=Y[re],me=w(ae),V=C%F,ce=V%me.boundary,le=V+ce;C+=ce,le!==0&&F-le<me.storage&&(C+=F-le),J.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=C,C+=me.storage}}}const k=C%F;return k>0&&(C+=F-k),I.__size=C,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function S(I){const P=I.target;P.removeEventListener("dispose",S);const C=u.indexOf(P.__bindingPointIndex);u.splice(C,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function y(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:f,update:p,dispose:y}}class I1{constructor(e={}){const{canvas:t=$_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:g=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const E=new Uint32Array(4),w=new Int32Array(4);let S=null,y=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Er,this.toneMappingExposure=1;const C=this;let F=!1,k=0,N=0,H=null,R=-1,A=null;const z=new Nt,J=new Nt;let Y=null;const re=new _t(0);let fe=0,ae=t.width,me=t.height,V=1,ce=null,le=null;const U=new Nt(0,0,ae,me),se=new Nt(0,0,ae,me);let Ne=!1;const ee=new _h;let ue=!1,Ee=!1;const ye=new zt,Te=new zt,Ue=new B,et=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ut(){return H===null?V:1}let G=r;function En(b,K){return t.getContext(b,K)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lh}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),G===null){const K="webgl2";if(G=En(K,b),G===null)throw En(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pt,dt,Ke,Pt,je,D,T,Q,pe,ve,de,We,Ae,Fe,ut,Me,Be,$e,tt,Ge,ht,st,Ct,q;function be(){pt=new VM(G),pt.init(),st=new T1(G,pt),dt=new FM(G,pt,e,st),Ke=new E1(G,pt),dt.reverseDepthBuffer&&g&&Ke.buffers.depth.setReversed(!0),Pt=new jM(G),je=new u1,D=new w1(G,pt,Ke,je,dt,st,Pt),T=new OM(C),Q=new HM(C),pe=new Qy(G),Ct=new NM(G,pe),ve=new WM(G,pe,Pt,Ct),de=new KM(G,ve,pe,Pt),tt=new qM(G,dt,D),Me=new zM(je),We=new c1(C,T,Q,pt,dt,Ct,Me),Ae=new L1(C,je),Fe=new h1,ut=new _1(pt),$e=new IM(C,T,Q,Ke,de,x,f),Be=new S1(C,de,dt),q=new k1(G,Pt,dt,Ke),Ge=new UM(G,pt,Pt),ht=new XM(G,pt,Pt),Pt.programs=We.programs,C.capabilities=dt,C.extensions=pt,C.properties=je,C.renderLists=Fe,C.shadowMap=Be,C.state=Ke,C.info=Pt}be();const oe=new P1(C,G);this.xr=oe,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=pt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(ae,me,!1))},this.getSize=function(b){return b.set(ae,me)},this.setSize=function(b,K,ne=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,me=K,t.width=Math.floor(b*V),t.height=Math.floor(K*V),ne===!0&&(t.style.width=b+"px",t.style.height=K+"px"),this.setViewport(0,0,b,K)},this.getDrawingBufferSize=function(b){return b.set(ae*V,me*V).floor()},this.setDrawingBufferSize=function(b,K,ne){ae=b,me=K,V=ne,t.width=Math.floor(b*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,b,K)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,K,ne,ie){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,K,ne,ie),Ke.viewport(z.copy(U).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,K,ne,ie){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,K,ne,ie),Ke.scissor(J.copy(se).multiplyScalar(V).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){Ke.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){ce=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(b=!0,K=!0,ne=!0){let ie=0;if(b){let W=!1;if(H!==null){const Se=H.texture.format;W=Se===ph||Se===fh||Se===hh}if(W){const Se=H.texture.type,Ce=Se===ji||Se===es||Se===qa||Se===Ys||Se===uh||Se===dh,Ie=$e.getClearColor(),ze=$e.getClearAlpha(),nt=Ie.r,it=Ie.g,qe=Ie.b;Ce?(E[0]=nt,E[1]=it,E[2]=qe,E[3]=ze,G.clearBufferuiv(G.COLOR,0,E)):(w[0]=nt,w[1]=it,w[2]=qe,w[3]=ze,G.clearBufferiv(G.COLOR,0,w))}else ie|=G.COLOR_BUFFER_BIT}K&&(ie|=G.DEPTH_BUFFER_BIT),ne&&(ie|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),$e.dispose(),Fe.dispose(),ut.dispose(),je.dispose(),T.dispose(),Q.dispose(),de.dispose(),Ct.dispose(),q.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",is),oe.removeEventListener("sessionend",Ki),Ai.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const b=Pt.autoReset,K=Be.enabled,ne=Be.autoUpdate,ie=Be.needsUpdate,W=Be.type;be(),Pt.autoReset=b,Be.enabled=K,Be.autoUpdate=ne,Be.needsUpdate=ie,Be.type=W}function Pe(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function at(b){const K=b.target;K.removeEventListener("dispose",at),Ot(K)}function Ot(b){Qt(b),je.remove(b)}function Qt(b){const K=je.get(b).programs;K!==void 0&&(K.forEach(function(ne){We.releaseProgram(ne)}),b.isShaderMaterial&&We.releaseShaderCache(b))}this.renderBufferDirect=function(b,K,ne,ie,W,Se){K===null&&(K=Dt);const Ce=W.isMesh&&W.matrixWorld.determinant()<0,Ie=eo(b,K,ne,ie,W);Ke.setMaterial(ie,Ce);let ze=ne.index,nt=1;if(ie.wireframe===!0){if(ze=ve.getWireframeAttribute(ne),ze===void 0)return;nt=2}const it=ne.drawRange,qe=ne.attributes.position;let ot=it.start*nt,wt=(it.start+it.count)*nt;Se!==null&&(ot=Math.max(ot,Se.start*nt),wt=Math.min(wt,(Se.start+Se.count)*nt)),ze!==null?(ot=Math.max(ot,0),wt=Math.min(wt,ze.count)):qe!=null&&(ot=Math.max(ot,0),wt=Math.min(wt,qe.count));const Tt=wt-ot;if(Tt<0||Tt===1/0)return;Ct.setup(W,ie,Ie,ne,ze);let Vt,xt=Ge;if(ze!==null&&(Vt=pe.get(ze),xt=ht,xt.setIndex(Vt)),W.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*Ut()),xt.setMode(G.LINES)):xt.setMode(G.TRIANGLES);else if(W.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*Ut()),W.isLineSegments?xt.setMode(G.LINES):W.isLineLoop?xt.setMode(G.LINE_LOOP):xt.setMode(G.LINE_STRIP)}else W.isPoints?xt.setMode(G.POINTS):W.isSprite&&xt.setMode(G.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ye=W._multiDrawStarts,qt=W._multiDrawCounts,yt=W._multiDrawCount,dn=ze?pe.get(ze).bytesPerElement:1,ri=je.get(ie).currentProgram.getUniforms();for(let Tn=0;Tn<yt;Tn++)ri.setValue(G,"_gl_DrawID",Tn),xt.render(Ye[Tn]/dn,qt[Tn])}else if(W.isInstancedMesh)xt.renderInstances(ot,Tt,W.count);else if(ne.isInstancedBufferGeometry){const Ye=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,qt=Math.min(ne.instanceCount,Ye);xt.renderInstances(ot,Tt,qt)}else xt.render(ot,Tt)};function St(b,K,ne){b.transparent===!0&&b.side===Hi&&b.forceSinglePass===!1?(b.side=On,b.needsUpdate=!0,rs(b,K,ne),b.side=wr,b.needsUpdate=!0,rs(b,K,ne),b.side=Hi):rs(b,K,ne)}this.compile=function(b,K,ne=null){ne===null&&(ne=b),y=ut.get(ne),y.init(K),P.push(y),ne.traverseVisible(function(W){W.isLight&&W.layers.test(K.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==ne&&b.traverseVisible(function(W){W.isLight&&W.layers.test(K.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const ie=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ie=Se[Ce];St(Ie,ne,W),ie.add(Ie)}else St(Se,ne,W),ie.add(Se)}),P.pop(),y=null,ie},this.compileAsync=function(b,K,ne=null){const ie=this.compile(b,K,ne);return new Promise(W=>{function Se(){if(ie.forEach(function(Ce){je.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){W(b);return}setTimeout(Se,10)}pt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Dn=null;function wn(b){Dn&&Dn(b)}function is(){Ai.stop()}function Ki(){Ai.start()}const Ai=new $g;Ai.setAnimationLoop(wn),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(b){Dn=b,oe.setAnimationLoop(b),b===null?Ai.stop():Ai.start()},oe.addEventListener("sessionstart",is),oe.addEventListener("sessionend",Ki),this.render=function(b,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(K),K=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,K,H),y=ut.get(b,P.length),y.init(K),P.push(y),Te.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ee.setFromProjectionMatrix(Te),Ee=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,Ee),S=Fe.get(b,I.length),S.init(),I.push(S),oe.enabled===!0&&oe.isPresenting===!0){const Se=C.xr.getDepthSensingMesh();Se!==null&&bi(Se,K,-1/0,C.sortObjects)}bi(b,K,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ce,le),vt=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,vt&&$e.addToRenderList(S,b),this.info.render.frame++,ue===!0&&Me.beginShadows();const ne=y.state.shadowsArray;Be.render(ne,b,K),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,W=S.transmissive;if(y.setupLights(),K.isArrayCamera){const Se=K.cameras;if(W.length>0)for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];br(ie,W,b,ze)}vt&&$e.render(b);for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const ze=Se[Ce];Ar(S,b,ze,ze.viewport)}}else W.length>0&&br(ie,W,b,K),vt&&$e.render(b),Ar(S,b,K);H!==null&&(D.updateMultisampleRenderTarget(H),D.updateRenderTargetMipmap(H)),b.isScene===!0&&b.onAfterRender(C,b,K),Ct.resetDefaultState(),R=-1,A=null,P.pop(),P.length>0?(y=P[P.length-1],ue===!0&&Me.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function bi(b,K,ne,ie){if(b.visible===!1)return;if(b.layers.test(K.layers)){if(b.isGroup)ne=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(K);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ee.intersectsSprite(b)){ie&&et.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);const Ce=de.update(b),Ie=b.material;Ie.visible&&S.push(b,Ce,Ie,ne,et.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ee.intersectsObject(b))){const Ce=de.update(b),Ie=b.material;if(ie&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),et.copy(b.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),et.copy(Ce.boundingSphere.center)),et.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(Ie)){const ze=Ce.groups;for(let nt=0,it=ze.length;nt<it;nt++){const qe=ze[nt],ot=Ie[qe.materialIndex];ot&&ot.visible&&S.push(b,Ce,ot,ne,et.z,qe)}}else Ie.visible&&S.push(b,Ce,Ie,ne,et.z,null)}}const Se=b.children;for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++)bi(Se[Ce],K,ne,ie)}function Ar(b,K,ne,ie){const W=b.opaque,Se=b.transmissive,Ce=b.transparent;y.setupLightsView(ne),ue===!0&&Me.setGlobalState(C.clippingPlanes,ne),ie&&Ke.viewport(z.copy(ie)),W.length>0&&Yi(W,K,ne),Se.length>0&&Yi(Se,K,ne),Ce.length>0&&Yi(Ce,K,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function br(b,K,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[ie.id]===void 0&&(y.state.transmissionRenderTarget[ie.id]=new ts(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Ka:ji,minFilter:Qr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||z;Se.setSize(Ce.z,Ce.w);const Ie=C.getRenderTarget();C.setRenderTarget(Se),C.getClearColor(re),fe=C.getClearAlpha(),fe<1&&C.setClearColor(16777215,.5),C.clear(),vt&&$e.render(ne);const ze=C.toneMapping;C.toneMapping=Er;const nt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),y.setupLightsView(ie),ue===!0&&Me.setGlobalState(C.clippingPlanes,ie),Yi(b,ne,ie),D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se),pt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let qe=0,ot=K.length;qe<ot;qe++){const wt=K[qe],Tt=wt.object,Vt=wt.geometry,xt=wt.material,Ye=wt.group;if(xt.side===Hi&&Tt.layers.test(ie.layers)){const qt=xt.side;xt.side=On,xt.needsUpdate=!0,Ja(Tt,ne,ie,Vt,xt,Ye),xt.side=qt,xt.needsUpdate=!0,it=!0}}it===!0&&(D.updateMultisampleRenderTarget(Se),D.updateRenderTargetMipmap(Se))}C.setRenderTarget(Ie),C.setClearColor(re,fe),nt!==void 0&&(ie.viewport=nt),C.toneMapping=ze}function Yi(b,K,ne){const ie=K.isScene===!0?K.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const Ce=b[W],Ie=Ce.object,ze=Ce.geometry,nt=ie===null?Ce.material:ie,it=Ce.group;Ie.layers.test(ne.layers)&&Ja(Ie,K,ne,ze,nt,it)}}function Ja(b,K,ne,ie,W,Se){b.onBeforeRender(C,K,ne,ie,W,Se),b.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(C,K,ne,ie,b,Se),W.transparent===!0&&W.side===Hi&&W.forceSinglePass===!1?(W.side=On,W.needsUpdate=!0,C.renderBufferDirect(ne,K,ie,W,b,Se),W.side=wr,W.needsUpdate=!0,C.renderBufferDirect(ne,K,ie,W,b,Se),W.side=Hi):C.renderBufferDirect(ne,K,ie,W,b,Se),b.onAfterRender(C,K,ne,ie,W,Se)}function rs(b,K,ne){K.isScene!==!0&&(K=Dt);const ie=je.get(b),W=y.state.lights,Se=y.state.shadowsArray,Ce=W.state.version,Ie=We.getParameters(b,W.state,Se,K,ne),ze=We.getProgramCacheKey(Ie);let nt=ie.programs;ie.environment=b.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(b.isMeshStandardMaterial?Q:T).get(b.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&b.envMap===null?K.environmentRotation:b.envMapRotation,nt===void 0&&(b.addEventListener("dispose",at),nt=new Map,ie.programs=nt);let it=nt.get(ze);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===Ce)return gi(b,Ie),it}else Ie.uniforms=We.getUniforms(b),b.onBeforeCompile(Ie,C),it=We.acquireProgram(Ie,ze),nt.set(ze,it),ie.uniforms=Ie.uniforms;const qe=ie.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(qe.clippingPlanes=Me.uniform),gi(b,Ie),ie.needsLights=Zl(b),ie.lightsStateVersion=Ce,ie.needsLights&&(qe.ambientLightColor.value=W.state.ambient,qe.lightProbe.value=W.state.probe,qe.directionalLights.value=W.state.directional,qe.directionalLightShadows.value=W.state.directionalShadow,qe.spotLights.value=W.state.spot,qe.spotLightShadows.value=W.state.spotShadow,qe.rectAreaLights.value=W.state.rectArea,qe.ltc_1.value=W.state.rectAreaLTC1,qe.ltc_2.value=W.state.rectAreaLTC2,qe.pointLights.value=W.state.point,qe.pointLightShadows.value=W.state.pointShadow,qe.hemisphereLights.value=W.state.hemi,qe.directionalShadowMap.value=W.state.directionalShadowMap,qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,qe.spotShadowMap.value=W.state.spotShadowMap,qe.spotLightMatrix.value=W.state.spotLightMatrix,qe.spotLightMap.value=W.state.spotLightMap,qe.pointShadowMap.value=W.state.pointShadowMap,qe.pointShadowMatrix.value=W.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function Qa(b){if(b.uniformsList===null){const K=b.currentProgram.getUniforms();b.uniformsList=Bl.seqWithValue(K.seq,b.uniforms)}return b.uniformsList}function gi(b,K){const ne=je.get(b);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.batchingColor=K.batchingColor,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.instancingMorph=K.instancingMorph,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function eo(b,K,ne,ie,W){K.isScene!==!0&&(K=Dt),D.resetTextureUnits();const Se=K.fog,Ce=ie.isMeshStandardMaterial?K.environment:null,Ie=H===null?C.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Zs,ze=(ie.isMeshStandardMaterial?Q:T).get(ie.envMap||Ce),nt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!ne.morphAttributes.position,ot=!!ne.morphAttributes.normal,wt=!!ne.morphAttributes.color;let Tt=Er;ie.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Tt=C.toneMapping);const Vt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=Vt!==void 0?Vt.length:0,Ye=je.get(ie),qt=y.state.lights;if(ue===!0&&(Ee===!0||b!==A)){const Yt=b===A&&ie.id===R;Me.setState(ie,b,Yt)}let yt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==qt.state.version||Ye.outputColorSpace!==Ie||W.isBatchedMesh&&Ye.batching===!1||!W.isBatchedMesh&&Ye.batching===!0||W.isBatchedMesh&&Ye.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ye.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ye.instancing===!1||!W.isInstancedMesh&&Ye.instancing===!0||W.isSkinnedMesh&&Ye.skinning===!1||!W.isSkinnedMesh&&Ye.skinning===!0||W.isInstancedMesh&&Ye.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ye.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ye.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ye.instancingMorph===!1&&W.morphTexture!==null||Ye.envMap!==ze||ie.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==it||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==wt||Ye.toneMapping!==Tt||Ye.morphTargetsCount!==xt)&&(yt=!0):(yt=!0,Ye.__version=ie.version);let dn=Ye.currentProgram;yt===!0&&(dn=rs(ie,K,W));let ri=!1,Tn=!1,Cr=!1;const Lt=dn.getUniforms(),An=Ye.uniforms;if(Ke.useProgram(dn.program)&&(ri=!0,Tn=!0,Cr=!0),ie.id!==R&&(R=ie.id,Tn=!0),ri||A!==b){Ke.buffers.depth.getReversed()?(ye.copy(b.projectionMatrix),J_(ye),Q_(ye),Lt.setValue(G,"projectionMatrix",ye)):Lt.setValue(G,"projectionMatrix",b.projectionMatrix),Lt.setValue(G,"viewMatrix",b.matrixWorldInverse);const mn=Lt.map.cameraPosition;mn!==void 0&&mn.setValue(G,Ue.setFromMatrixPosition(b.matrixWorld)),dt.logarithmicDepthBuffer&&Lt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),A!==b&&(A=b,Tn=!0,Cr=!0)}if(W.isSkinnedMesh){Lt.setOptional(G,W,"bindMatrix"),Lt.setOptional(G,W,"bindMatrixInverse");const Yt=W.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Lt.setValue(G,"boneTexture",Yt.boneTexture,D))}W.isBatchedMesh&&(Lt.setOptional(G,W,"batchingTexture"),Lt.setValue(G,"batchingTexture",W._matricesTexture,D),Lt.setOptional(G,W,"batchingIdTexture"),Lt.setValue(G,"batchingIdTexture",W._indirectTexture,D),Lt.setOptional(G,W,"batchingColorTexture"),W._colorsTexture!==null&&Lt.setValue(G,"batchingColorTexture",W._colorsTexture,D));const pn=ne.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&tt.update(W,ne,dn),(Tn||Ye.receiveShadow!==W.receiveShadow)&&(Ye.receiveShadow=W.receiveShadow,Lt.setValue(G,"receiveShadow",W.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(An.envMap.value=ze,An.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&K.environment!==null&&(An.envMapIntensity.value=K.environmentIntensity),Tn&&(Lt.setValue(G,"toneMappingExposure",C.toneMappingExposure),Ye.needsLights&&to(An,Cr),Se&&ie.fog===!0&&Ae.refreshFogUniforms(An,Se),Ae.refreshMaterialUniforms(An,ie,V,me,y.state.transmissionRenderTarget[b.id]),Bl.upload(G,Qa(Ye),An,D)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Bl.upload(G,Qa(Ye),An,D),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(G,"center",W.center),Lt.setValue(G,"modelViewMatrix",W.modelViewMatrix),Lt.setValue(G,"normalMatrix",W.normalMatrix),Lt.setValue(G,"modelMatrix",W.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Yt=ie.uniformsGroups;for(let mn=0,Rr=Yt.length;mn<Rr;mn++){const mt=Yt[mn];q.update(mt,dn),q.bind(mt,dn)}}return dn}function to(b,K){b.ambientLightColor.needsUpdate=K,b.lightProbe.needsUpdate=K,b.directionalLights.needsUpdate=K,b.directionalLightShadows.needsUpdate=K,b.pointLights.needsUpdate=K,b.pointLightShadows.needsUpdate=K,b.spotLights.needsUpdate=K,b.spotLightShadows.needsUpdate=K,b.rectAreaLights.needsUpdate=K,b.hemisphereLights.needsUpdate=K}function Zl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(b,K,ne){je.get(b.texture).__webglTexture=K,je.get(b.depthTexture).__webglTexture=ne;const ie=je.get(b);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,K){const ne=je.get(b);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(b,K=0,ne=0){H=b,k=K,N=ne;let ie=!0,W=null,Se=!1,Ce=!1;if(b){const ze=je.get(b);if(ze.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(G.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)D.setupRenderTarget(b);else if(ze.__hasExternalTextures)D.rebindTextures(b,je.get(b.texture).__webglTexture,je.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const qe=b.depthTexture;if(ze.__boundDepthTexture!==qe){if(qe!==null&&je.has(qe)&&(b.width!==qe.image.width||b.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(b)}}const nt=b.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const it=je.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[K])?W=it[K][ne]:W=it[K],Se=!0):b.samples>0&&D.useMultisampledRTT(b)===!1?W=je.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?W=it[ne]:W=it,z.copy(b.viewport),J.copy(b.scissor),Y=b.scissorTest}else z.copy(U).multiplyScalar(V).floor(),J.copy(se).multiplyScalar(V).floor(),Y=Ne;if(Ke.bindFramebuffer(G.FRAMEBUFFER,W)&&ie&&Ke.drawBuffers(b,W),Ke.viewport(z),Ke.scissor(J),Ke.setScissorTest(Y),Se){const ze=je.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+K,ze.__webglTexture,ne)}else if(Ce){const ze=je.get(b.texture),nt=K||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,nt)}R=-1},this.readRenderTargetPixels=function(b,K,ne,ie,W,Se,Ce){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Ke.bindFramebuffer(G.FRAMEBUFFER,Ie);try{const ze=b.texture,nt=ze.format,it=ze.type;if(!dt.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=b.width-ie&&ne>=0&&ne<=b.height-W&&G.readPixels(K,ne,ie,W,st.convert(nt),st.convert(it),Se)}finally{const ze=H!==null?je.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(b,K,ne,ie,W,Se,Ce){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const ze=b.texture,nt=ze.format,it=ze.type;if(!dt.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=b.width-ie&&ne>=0&&ne<=b.height-W){Ke.bindFramebuffer(G.FRAMEBUFFER,Ie);const qe=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,qe),G.bufferData(G.PIXEL_PACK_BUFFER,Se.byteLength,G.STREAM_READ),G.readPixels(K,ne,ie,W,st.convert(nt),st.convert(it),0);const ot=H!==null?je.get(H).__webglFramebuffer:null;Ke.bindFramebuffer(G.FRAMEBUFFER,ot);const wt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Z_(G,wt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,qe),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Se),G.deleteBuffer(qe),G.deleteSync(wt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,K=null,ne=0){b.isTexture!==!0&&(Gs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1]);const ie=Math.pow(2,-ne),W=Math.floor(b.image.width*ie),Se=Math.floor(b.image.height*ie),Ce=K!==null?K.x:0,Ie=K!==null?K.y:0;D.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,ne,0,0,Ce,Ie,W,Se),Ke.unbindTexture()};const no=G.createFramebuffer(),io=G.createFramebuffer();this.copyTextureToTexture=function(b,K,ne=null,ie=null,W=0,Se=null){b.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,b=arguments[1],K=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(W!==0?(Gs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=W,W=0):Se=0);let Ce,Ie,ze,nt,it,qe,ot,wt,Tt;const Vt=b.isCompressedTexture?b.mipmaps[Se]:b.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,it=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const pn=Math.pow(2,-W);Ce=Math.floor(Vt.width*pn),Ie=Math.floor(Vt.height*pn),b.isDataArrayTexture?ze=Vt.depth:b.isData3DTexture?ze=Math.floor(Vt.depth*pn):ze=1,nt=0,it=0,qe=0}ie!==null?(ot=ie.x,wt=ie.y,Tt=ie.z):(ot=0,wt=0,Tt=0);const xt=st.convert(K.format),Ye=st.convert(K.type);let qt;K.isData3DTexture?(D.setTexture3D(K,0),qt=G.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(D.setTexture2DArray(K,0),qt=G.TEXTURE_2D_ARRAY):(D.setTexture2D(K,0),qt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,K.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,K.unpackAlignment);const yt=G.getParameter(G.UNPACK_ROW_LENGTH),dn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),ri=G.getParameter(G.UNPACK_SKIP_PIXELS),Tn=G.getParameter(G.UNPACK_SKIP_ROWS),Cr=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Vt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Vt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,nt),G.pixelStorei(G.UNPACK_SKIP_ROWS,it),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qe);const Lt=b.isDataArrayTexture||b.isData3DTexture,An=K.isDataArrayTexture||K.isData3DTexture;if(b.isDepthTexture){const pn=je.get(b),Yt=je.get(K),mn=je.get(pn.__renderTarget),Rr=je.get(Yt.__renderTarget);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,Rr.__webglFramebuffer);for(let mt=0;mt<ze;mt++)Lt&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(b).__webglTexture,W,qe+mt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,je.get(K).__webglTexture,Se,Tt+mt)),G.blitFramebuffer(nt,it,Ce,Ie,ot,wt,Ce,Ie,G.DEPTH_BUFFER_BIT,G.NEAREST);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||je.has(b)){const pn=je.get(b),Yt=je.get(K);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,no),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,io);for(let mn=0;mn<ze;mn++)Lt?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,W,qe+mn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,W),An?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Yt.__webglTexture,Se,Tt+mn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Yt.__webglTexture,Se),W!==0?G.blitFramebuffer(nt,it,Ce,Ie,ot,wt,Ce,Ie,G.COLOR_BUFFER_BIT,G.NEAREST):An?G.copyTexSubImage3D(qt,Se,ot,wt,Tt+mn,nt,it,Ce,Ie):G.copyTexSubImage2D(qt,Se,ot,wt,nt,it,Ce,Ie);Ke.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else An?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(qt,Se,ot,wt,Tt,Ce,Ie,ze,xt,Ye,Vt.data):K.isCompressedArrayTexture?G.compressedTexSubImage3D(qt,Se,ot,wt,Tt,Ce,Ie,ze,xt,Vt.data):G.texSubImage3D(qt,Se,ot,wt,Tt,Ce,Ie,ze,xt,Ye,Vt):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Se,ot,wt,Ce,Ie,xt,Ye,Vt.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Se,ot,wt,Vt.width,Vt.height,xt,Vt.data):G.texSubImage2D(G.TEXTURE_2D,Se,ot,wt,Ce,Ie,xt,Ye,Vt);G.pixelStorei(G.UNPACK_ROW_LENGTH,yt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,dn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ri),G.pixelStorei(G.UNPACK_SKIP_ROWS,Tn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Cr),Se===0&&K.generateMipmaps&&G.generateMipmap(qt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(b,K,ne=null,ie=null,W=0){return b.isTexture!==!0&&(Gs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,b=arguments[2],K=arguments[3],W=arguments[4]||0),Gs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,K,ne,ie,W)},this.initRenderTarget=function(b){je.get(b).__webglFramebuffer===void 0&&D.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?D.setTextureCube(b,0):b.isData3DTexture?D.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?D.setTexture2DArray(b,0):D.setTexture2D(b,0),Ke.unbindTexture()},this.resetState=function(){k=0,N=0,H=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}function N1({device:s,selectedPartId:e,onSelectPart:t}){const r=Rt.useRef(null);return Rt.useEffect(()=>{const o=r.current;if(!o)return;const l=o,u=new My,d=getComputedStyle(document.documentElement).getPropertyValue("--canvas-bg").trim()||"#f8fafc";u.background=new _t(d),u.fog=new vh(new _t(d),9,16);const f=new Yn(42,1,.1,100);f.position.set(5.4,3.9,7.2);const p=new I1({canvas:l,antialias:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.outputColorSpace=Kn,p.toneMapping=yg,p.toneMappingExposure=1.08,p.shadowMap.enabled=!0,p.shadowMap.type=vg;const v=new Va;u.add(v),u.add(new jy(16777215,6583435,2.4));const _=new Gm(16777215,2.8);_.position.set(5,6,4),_.castShadow=!0,_.shadow.mapSize.set(1024,1024),u.add(_);const g=new Gm(10090212,1.2);g.position.set(-4,3,-5),u.add(g);const x=new Ky(3718648,.9,12);x.position.set(0,2.8,3.5),u.add(x);const E=U1(s,v),w=new Zy,S=new Qe;let y=!1,I=0,P=0,C=0;function F(){const z=l.clientWidth,J=l.clientHeight;p.setSize(z,J,!1),f.aspect=z/J,f.updateProjectionMatrix()}function k(z){var re;const J=l.getBoundingClientRect();S.x=(z.clientX-J.left)/J.width*2-1,S.y=-((z.clientY-J.top)/J.height)*2+1,w.setFromCamera(S,f);const Y=(re=w.intersectObjects(E,!1)[0])==null?void 0:re.object;Y!=null&&Y.userData.partId&&t(Y.userData.partId)}function N(z){y=!0,I=z.clientX,k(z)}function H(z){y&&(v.rotation.y+=(z.clientX-I)*.01,I=z.clientX)}function R(){y=!1}l.addEventListener("pointerdown",N),l.addEventListener("pointermove",H),window.addEventListener("pointerup",R),window.addEventListener("resize",F);function A(){P+=1;for(const z of E){const J=z.userData.partId===e,Y=z.material;Y.emissive.set(J?1357990:0),Y.emissiveIntensity=J?.35+Math.sin(P*.08)*.08:0}v.rotation.y+=y?0:.0018,p.render(u,f),C=requestAnimationFrame(A)}return F(),A(),()=>{l.removeEventListener("pointerdown",N),l.removeEventListener("pointermove",H),window.removeEventListener("pointerup",R),window.removeEventListener("resize",F),cancelAnimationFrame(C),v.traverse(z=>{var re;const J=z;(re=J.geometry)==null||re.dispose();const Y=J.material;Array.isArray(Y)?Y.forEach(fe=>fe.dispose()):Y==null||Y.dispose()}),p.dispose()}},[s,t,e]),j.jsx("canvas",{ref:r,className:"device-canvas","aria-label":"interactive 3D teaching model"})}function ns(s,e={}){return new Vy({color:s,roughness:e.roughness??.48,metalness:e.metalness??.12,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,emissive:e.emissive??0})}function Et(s,e,t,r,o=1){const l=new Mn(new ta(r[0],r[1],r[2]),ns(e,{opacity:o}));return l.position.set(...t),l.userData.partId=s,l}function Rn(s,e,t,r,o,l="y",u=1){const d=new Mn(new Kl(r,r,o,64),ns(e,{opacity:u,metalness:.18}));return d.position.set(...t),l==="x"&&(d.rotation.z=Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Ha(s,e,t,r,o,l=1){const u=new Mn(new Eh(r,o,24,96),ns(e,{opacity:l,metalness:.16}));return u.position.set(...t),u.rotation.y=Math.PI/2,u.userData.partId=s,u}function gd(s,e,t,r,o=[1,1,1],l=1){const u=new Mn(new Mh(r,48,24),ns(e,{opacity:l}));return u.position.set(...t),u.scale.set(...o),u.userData.partId=s,u}function kl(s,e,t,r,o,l="y",u=1){const d=new Mn(new Sh(r,o,64,1,!0),ns(e,{opacity:u}));return d.position.set(...t),l==="x"&&(d.rotation.z=-Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Si(s,e,t,r=.035,o=1){const l=new jg(t.map(d=>new B(...d))),u=new Mn(new wh(l,64,r,12,!1),ns(e,{opacity:o,roughness:.38}));return u.userData.partId=s,u}function ke(s,e,t){t.castShadow=!0,t.receiveShadow=!0;const r=new Ay(new Hy(t.geometry,28),new Vg({color:988970,transparent:!0,opacity:.18}));t.add(r),e.push(t),s.add(t)}function U1(s,e){const t=[];s.model==="ecg"?(ke(e,t,Et("screen",988970,[0,1.05,-.52],[2.25,1.08,.12])),ke(e,t,Et("screen",14412542,[0,.02,0],[2.85,2.32,.8],.9)),ke(e,t,Et("amplifier",3718648,[-.72,-.25,-.55],[.62,.32,.16])),ke(e,t,Et("filter",1357990,[.04,-.25,-.55],[.62,.32,.16])),ke(e,t,Et("adc",16347926,[.76,-.25,-.55],[.46,.32,.16])),ke(e,t,Si("leads",4674921,[[1.22,-.55,-.18],[1.75,-.95,.18],[2.35,-1.15,.05]],.04)),ke(e,t,Si("leads",4674921,[[1.18,-.46,-.2],[1.7,-.35,.2],[2.25,-.7,.45]],.032)),ke(e,t,Rn("electrodes",15680580,[2.45,-1.18,.05],.22,.08,"z")),ke(e,t,Rn("electrodes",16347926,[2.35,-.7,.45],.18,.07,"z"))):s.model==="ct"?(ke(e,t,Ha("gantry",13358561,[0,.35,0],1.55,.32)),ke(e,t,Ha("detectors",3718648,[0,.35,.04],1.12,.08,.82)),ke(e,t,Rn("tube",16347926,[.08,1.78,.02],.22,.7,"z")),ke(e,t,kl("tube",16096779,[.08,1.15,.02],.72,.72,"y",.26)),ke(e,t,Et("table",9741240,[0,-.72,0],[4.35,.2,.78])),ke(e,t,gd("table",14870768,[-.15,-.45,0],.45,[2.4,.25,.72],.62)),ke(e,t,Et("console",1120295,[-2.9,.32,-.62],[.78,.82,.18]))):s.model==="ultrasound"?(ke(e,t,Et("console",14412542,[0,-.18,0],[2.05,1.5,.92])),ke(e,t,Et("screen",988970,[0,1.35,-.08],[2.08,1.08,.14])),ke(e,t,Et("console",14870768,[0,.15,-.55],[1.55,.28,.08])),ke(e,t,Si("probe",3359061,[[.86,-.42,.15],[1.35,-.65,.5],[1.95,-.22,.38]],.04)),ke(e,t,Rn("probe",1013358,[2.18,-.2,.28],.26,1.1,"y")),ke(e,t,Et("crystals",16436245,[2.18,-.82,.28],[.72,.12,.35])),ke(e,t,kl("beam",3718648,[2.18,-1.45,.28],.62,1.3,"y",.24))):s.model==="xray"?(ke(e,t,Et("detector",14870768,[1.78,0,0],[.22,2.65,2.05])),ke(e,t,Et("grid",9741240,[1.5,0,0],[.08,2.35,1.78],.76)),ke(e,t,Rn("cathode",3718648,[-2.1,.92,0],.25,.44,"z")),ke(e,t,Rn("anode",16347926,[-1.42,.92,0],.34,.22,"z")),ke(e,t,Rn("collimator",3359061,[-.8,.35,0],.34,.82,"x")),ke(e,t,kl("collimator",16436245,[.25,.18,0],1,2,"x",.18))):s.model==="mri"?(ke(e,t,Ha("bore",13095678,[0,.35,0],1.68,.36)),ke(e,t,Ha("gradients",3718648,[0,.35,-.03],1.28,.08,.86)),ke(e,t,Ha("rfcoil",8141549,[0,.35,.04],.92,.095,.9)),ke(e,t,Rn("bore",14739455,[0,.35,0],.88,1.65,"z",.28)),ke(e,t,Et("table",9741240,[0,-.78,0],[4.2,.22,.8])),ke(e,t,gd("table",14870768,[-.15,-.52,0],.45,[2.6,.28,.72],.62))):s.model==="ventilator"?(ke(e,t,Et("screen",988970,[-.25,1.12,-.48],[1.55,.72,.12])),ke(e,t,Et("blower",14412542,[-.25,-.1,0],[2.1,1.65,.9],.92)),ke(e,t,Rn("blower",3718648,[-.9,-.2,-.55],.32,.18,"z")),ke(e,t,Et("sensors",16347926,[.72,-.2,-.55],[.58,.28,.16])),ke(e,t,Si("tubing",1357990,[[.88,-.25,-.2],[1.55,-.4,.45],[2.05,-.9,.28],[2.55,-.82,.04]],.06,.78)),ke(e,t,gd("tubing",14870768,[2.7,-.82,.02],.28,[1.25,.55,.75],.55))):s.model==="defib"?(ke(e,t,Et("screen",988970,[-.42,.84,-.52],[1.28,.62,.12])),ke(e,t,Et("charger",14870768,[0,0,0],[2.25,1.75,.85],.94)),ke(e,t,Et("capacitor",16347926,[.68,-.15,-.55],[.52,.72,.18])),ke(e,t,Rn("capacitor",16096779,[.05,-.26,-.55],.22,.46,"z")),ke(e,t,Si("pads",4674921,[[.72,-.55,-.25],[1.38,-.92,.24],[2.08,-1.1,.04]],.042)),ke(e,t,Si("pads",4674921,[[.45,-.54,-.28],[1.18,-.62,.52],[1.9,-.42,.6]],.042)),ke(e,t,Et("pads",15680580,[2.18,-1.12,.04],[.55,.18,.42])),ke(e,t,Et("pads",3718648,[2,-.42,.6],[.48,.16,.36]))):s.model==="dialysis"?(ke(e,t,Et("screen",988970,[-.42,1.2,-.5],[1.32,.68,.12])),ke(e,t,Et("sensors",14870768,[0,.05,0],[2.2,2.15,.82],.92)),ke(e,t,Rn("pump",1013358,[-.72,.05,-.56],.42,.2,"z")),ke(e,t,Rn("dialyzer",3718648,[.85,-.1,-.55],.2,1.1,"y",.85)),ke(e,t,Si("pump",15680580,[[-1.15,-.1,-.5],[-.72,-.52,-.58],[.85,-.72,-.55],[1.35,-.25,-.5]],.045)),ke(e,t,Si("dialyzer",1357990,[[.85,.5,-.55],[1.28,.72,-.25],[1.52,.3,.35]],.04)),ke(e,t,Et("sensors",16347926,[-.35,-.82,-.55],[.52,.22,.16]))):s.model==="endoscope"?(ke(e,t,Rn("handle",14412542,[-1.12,-.12,0],.34,1.35,"y",.95)),ke(e,t,Et("processor",988970,[-1.12,.78,-.28],[.82,.38,.12])),ke(e,t,Si("sensor",3359061,[[-.85,-.42,.12],[-.12,-.72,.34],[.8,-.6,.18],[1.7,-.28,.05]],.065)),ke(e,t,Rn("sensor",3718648,[1.88,-.22,.04],.16,.16,"x")),ke(e,t,kl("light",16436245,[2.26,-.22,.04],.52,.78,"x",.22)),ke(e,t,Et("light",16347926,[-.95,-.72,-.26],[.42,.22,.16])),ke(e,t,Et("processor",14870768,[-2.1,.1,-.36],[.95,.68,.18]))):(ke(e,t,Et("screen",1120295,[0,.95,-.5],[1.35,.58,.12])),ke(e,t,Et("cassette",14412542,[-.2,-.05,-.52],[1.25,.85,.16])),ke(e,t,Si("cassette",3718648,[[-1.1,-.58,-.52],[-.38,-.25,-.62],[.5,-.42,-.55]],.035)),ke(e,t,Rn("motor",1013358,[.72,-.82,0],.32,.5,"z")),ke(e,t,Et("pressure",16347926,[-.9,-.76,-.35],[.45,.28,.18])),ke(e,t,Et("screen",14870768,[0,0,0],[2,2.45,.75],.92)));const r=new Mn(new xh(3.05,96),ns(14870768,{roughness:.76,opacity:.72}));r.position.set(0,-2.02,0),r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r);const o=Et("__base",13358561,[0,-1.95,0],[4.8,.08,2.4]);return o.receiveShadow=!0,o.userData.partId=void 0,e.add(o),t}function kt(s,e){return s[e]}const vd=[{id:"ecg",name:{en:"ECG Monitor",de:"EKG-Monitor"},category:{en:"Bioelectric Signals",de:"Bioelektrische Signale"},short:{en:"Records heart electrical activity through electrodes, amplification, filtering, and display.",de:"Misst elektrische Herzaktivitaet mit Elektroden, Verstaerkung, Filterung und Anzeige."},model:"ecg",overview:{en:"An ECG monitor measures very small voltage differences on the skin. The interesting engineering part is the signal chain: electrode contact, protection, differential amplification, filtering, analog-to-digital conversion, and display.",de:"Ein EKG-Monitor misst sehr kleine Spannungsunterschiede auf der Haut. Technisch spannend ist die Signalkette: Elektrodenkontakt, Schutzschaltung, Differenzverstaerkung, Filterung, Analog-Digital-Wandlung und Anzeige."},workflow:[{en:"Electrodes convert ionic body currents into measurable electronic potentials.",de:"Elektroden wandeln ionische Koerperstroeme in messbare elektrische Potentiale um."},{en:"A protection stage limits dangerous currents and protects the amplifier input.",de:"Eine Schutzstufe begrenzt gefaehrliche Stroeme und schuetzt den Verstaerkereingang."},{en:"An instrumentation amplifier boosts the differential signal while rejecting common-mode noise.",de:"Ein Instrumentenverstaerker verstaerkt das Differenzsignal und unterdrueckt Gleichtaktstoerungen."},{en:"Filters reduce baseline drift, muscle noise, and mains interference before peak detection.",de:"Filter reduzieren Basisliniendrift, Muskelrauschen und Netzstoerungen vor der Peak-Erkennung."}],deepDive:[{title:{en:"Body-to-electrode interface",de:"Koerper-Elektroden-Uebergang"},body:{en:"The heart creates ionic currents in tissue, but the monitor measures electronic voltage at the skin. The gel and metal electrode form a half-cell interface with impedance, offset voltage, capacitance, motion artifacts, and thermal noise. That is why preparation, contact area, and shielding matter before any software filtering can help.",de:"Das Herz erzeugt ionische Stroeme im Gewebe, der Monitor misst aber eine elektronische Spannung an der Haut. Gel und Metallelektrode bilden eine Halbzellen-Grenzflaeche mit Impedanz, Offsetspannung, Kapazitaet, Bewegungsartefakten und thermischem Rauschen. Deshalb sind Vorbereitung, Kontaktflaeche und Schirmung wichtig, bevor Softwarefilter helfen koennen."}},{title:{en:"Analog front end",de:"Analoge Eingangsstufe"},body:{en:"A protection network limits patient current and amplifier input stress. The instrumentation amplifier then amplifies only the difference between electrodes while rejecting common-mode mains pickup. Important electrotechnics ideas are input impedance, CMRR, driven-right-leg feedback, saturation recovery, isolation, and leakage-current safety.",de:"Eine Schutzschaltung begrenzt Patientstrom und Eingangsstress am Verstaerker. Der Instrumentenverstaerker verstaerkt danach nur die Differenz zwischen Elektroden und unterdrueckt Gleichtaktstoerungen vom Netz. Wichtig sind Eingangsimpedanz, CMRR, Driven-Right-Leg-Rueckkopplung, Saettigungsrueckkehr, Isolation und Ableitstromsicherheit."}},{title:{en:"Filtering and reading",de:"Filterung und Auswertung"},body:{en:"Typical ECG processing combines a high-pass filter for baseline wander, a low-pass filter for muscle noise, and sometimes a 50/60 Hz notch for mains interference. The ADC must sample fast enough to keep QRS shape. Software then finds R peaks, estimates heart rate, and must avoid changing clinically meaningful waveform timing.",de:"Typische EKG-Verarbeitung kombiniert Hochpass gegen Basisliniendrift, Tiefpass gegen Muskelrauschen und manchmal einen 50/60-Hz-Kerbfilter gegen Netzstoerung. Der ADC muss schnell genug abtasten, damit die QRS-Form erhalten bleibt. Software findet danach R-Zacken, schaetzt die Herzfrequenz und darf medizinisch relevante Zeitformen nicht verfaelschen."}}],parts:[{id:"electrodes",name:{en:"Electrodes",de:"Elektroden"},function:{en:"Pick up tiny bioelectric potentials from the skin.",de:"Nehmen sehr kleine bioelektrische Potentiale von der Haut auf."},details:{en:"Bad electrode contact increases impedance and creates noise or baseline drift.",de:"Schlechter Elektrodenkontakt erhoeht die Impedanz und erzeugt Rauschen oder Basisliniendrift."},electrotechnics:{en:"Think of the electrode-skin interface as a noisy high-impedance source with contact capacitance.",de:"Die Elektroden-Haut-Stelle kann man als rauschende hochohmige Quelle mit Kontaktkapazitaet betrachten."}},{id:"leads",name:{en:"Lead Cable",de:"Ableitungskabel"},function:{en:"Transfers the low-level signal to the monitor.",de:"Uebertraegt das schwache Signal zum Monitor."},details:{en:"Cable motion can introduce artifacts, so shielding and strain relief matter.",de:"Kabelbewegung kann Artefakte erzeugen, deshalb sind Schirmung und Zugentlastung wichtig."},electrotechnics:{en:"Twisted/shielded leads reduce electromagnetic pickup from mains and nearby devices.",de:"Verdrillte oder geschirmte Leitungen reduzieren elektromagnetische Einkopplung von Netz und Geraeten."}},{id:"amplifier",name:{en:"Instrumentation Amplifier",de:"Instrumentenverstaerker"},function:{en:"Amplifies the voltage difference between electrodes.",de:"Verstaerkt die Spannungsdifferenz zwischen Elektroden."},details:{en:"High CMRR is needed because common-mode noise is often larger than the ECG itself.",de:"Hohe Gleichtaktunterdrueckung ist wichtig, weil Stoerungen oft groesser sind als das EKG-Signal."},electrotechnics:{en:"Key concepts: differential gain, input impedance, CMRR, saturation, and patient isolation.",de:"Wichtige Begriffe: Differenzverstaerkung, Eingangsimpedanz, CMRR, Saettigung und Patientenisolation."}},{id:"filter",name:{en:"Filter Stage",de:"Filterstufe"},function:{en:"Reduces drift and noise without destroying useful waveform shape.",de:"Reduziert Drift und Rauschen, ohne die Nutzform der Kurve zu zerstoeren."},details:{en:"Filters must be chosen carefully because over-filtering can change medically relevant shapes.",de:"Filter muessen vorsichtig gewaehlt werden, weil zu starke Filter wichtige Kurvenformen veraendern koennen."},electrotechnics:{en:"This connects directly to RC filters, cutoff frequency, phase shift, and notch filtering.",de:"Das passt direkt zu RC-Filtern, Grenzfrequenz, Phasenverschiebung und Kerbfiltern."}},{id:"adc",name:{en:"ADC",de:"ADC"},function:{en:"Converts the analog ECG into digital samples.",de:"Wandelt das analoge EKG in digitale Abtastwerte um."},details:{en:"Sampling rate and resolution decide how much signal detail is preserved.",de:"Abtastrate und Aufloesung bestimmen, wie viele Signaldetails erhalten bleiben."},electrotechnics:{en:"Links to sampling theorem, quantization, aliasing, reference voltage, and ADC resolution.",de:"Verbindung zu Abtasttheorem, Quantisierung, Aliasing, Referenzspannung und ADC-Aufloesung."}},{id:"screen",name:{en:"Display",de:"Anzeige"},function:{en:"Shows waveform, heart-rate estimate, and educational warnings.",de:"Zeigt Kurve, Herzfrequenzschaetzung und Lernhinweise an."},details:{en:"The display is the interface, not the measurement source.",de:"Die Anzeige ist die Schnittstelle, nicht die Messquelle."},electrotechnics:{en:"Connects measurement electronics to software, UI design, and alarm logic.",de:"Verbindet Messelektronik mit Software, Bedienoberflaeche und Alarmlogik."}}],demo:{title:{en:"Noisy ECG filtering",de:"EKG-Rauschfilterung"},beforeLabel:{en:"Raw noisy ECG",de:"Rohes verrauschtes EKG"},afterLabel:{en:"Filtered ECG",de:"Gefiltertes EKG"},explanation:{en:"Filtering can make R peaks easier to find. The teaching point is the tradeoff: less noise, but possible waveform distortion if the filter is too aggressive.",de:"Filterung kann R-Zacken leichter erkennbar machen. Der Lernpunkt ist der Kompromiss: weniger Rauschen, aber moegliche Signalverzerrung bei zu starker Filterung."},filters:[{en:"Baseline correction",de:"Basislinienkorrektur"},{en:"Notch filter",de:"Kerbfilter"},{en:"R-peak detection",de:"R-Zacken-Erkennung"}],clipSteps:[{en:"Electrode senses voltage",de:"Elektrode misst Spannung"},{en:"Amplifier boosts signal",de:"Verstaerker hebt Signal an"},{en:"Filter removes noise",de:"Filter entfernt Stoerungen"},{en:"Screen shows ECG",de:"Anzeige zeigt EKG"}]}},{id:"ct",name:{en:"CT Scanner",de:"CT-Scanner"},category:{en:"Tomographic Imaging",de:"Tomographische Bildgebung"},short:{en:"Rotating X-ray source and detector ring reconstruct slice images.",de:"Rotierende Roentgenquelle und Detektorring rekonstruieren Schnittbilder."},model:"ct",overview:{en:"A CT scanner collects many X-ray projections from different angles. Reconstruction software calculates slice images from those projections.",de:"Ein CT sammelt viele Roentgenprojektionen aus verschiedenen Winkeln. Rekonstruktionssoftware berechnet daraus Schnittbilder."},workflow:[{en:"The table positions the scanned object inside the gantry.",de:"Der Tisch positioniert das Objekt in der Gantry."},{en:"The tube and detector array rotate around the object.",de:"Roentgenroehre und Detektorarray rotieren um das Objekt."},{en:"Detector electronics convert radiation intensity into digital projection data.",de:"Detektorelektronik wandelt Strahlungsintensitaet in digitale Projektionsdaten um."},{en:"Reconstruction and windowing turn the data into readable slices.",de:"Rekonstruktion und Fensterung machen daraus lesbare Schnittbilder."}],deepDive:[{title:{en:"High-voltage generation",de:"Hochspannungserzeugung"},body:{en:"The tube needs tens to more than one hundred kilovolts. Power electronics rectify, switch, transform, and regulate that voltage while controlling tube current. kVp changes photon energy and penetration; mA and exposure time change photon count, noise, dose, and heat load.",de:"Die Roehre braucht mehrere zehn bis ueber hundert Kilovolt. Leistungselektronik richtet gleich, schaltet, transformiert und regelt diese Spannung und steuert den Roehrenstrom. kVp veraendert Photonenenergie und Durchdringung; mA und Belichtungszeit veraendern Photonenzahl, Rauschen, Dosis und Waermelast."}},{title:{en:"Projection signal chain",de:"Projektions-Signalkette"},body:{en:"Each detector element converts X-ray intensity into charge or current, often through scintillator light and photodiodes. The small signals are integrated, amplified, multiplexed, digitized, dark-corrected, gain-corrected, and logged against angle so reconstruction software can use consistent projection data.",de:"Jedes Detektorelement wandelt Roentgenintensitaet in Ladung oder Strom, oft ueber Szintillatorlicht und Photodioden. Die kleinen Signale werden integriert, verstaerkt, multiplexed, digitalisiert, dunkelstromkorrigiert, gain-korrigiert und dem Winkel zugeordnet, damit die Rekonstruktion konsistente Projektionsdaten bekommt."}},{title:{en:"Reconstruction and filtering",de:"Rekonstruktion und Filter"},body:{en:"The scanner measures attenuation from many angles. Filtered backprojection or iterative reconstruction estimates voxel values. Then kernels, denoising, metal artifact reduction, and window/level mapping make bone, soft tissue, or lung structures readable without pretending the raw detector data is already an image.",de:"Der Scanner misst Abschwaechung aus vielen Winkeln. Gefilterte Rueckprojektion oder iterative Rekonstruktion schaetzt Voxelwerte. Danach machen Faltungskerne, Rauschminderung, Metallartefaktreduktion und Fenster/Lage-Abbildung Knochen, Weichteil oder Lunge lesbar, ohne dass Rohdaten schon ein fertiges Bild waeren."}}],parts:[{id:"gantry",name:{en:"Gantry",de:"Gantry"},function:{en:"Holds the rotating imaging system.",de:"Traegt das rotierende Bildgebungssystem."},details:{en:"The large ring includes mechanics, tube, detector, cooling, and power paths.",de:"Der Ring enthaelt Mechanik, Roehre, Detektor, Kuehlung und Leistungswege."},electrotechnics:{en:"Slip rings transfer power and data to rotating electronics.",de:"Schleifringe uebertragen Leistung und Daten auf rotierende Elektronik."}},{id:"tube",name:{en:"X-ray Tube",de:"Roentgenroehre"},function:{en:"Produces X-rays using high voltage.",de:"Erzeugt Roentgenstrahlung mit Hochspannung."},details:{en:"Tube voltage affects penetration; current affects photon quantity and noise.",de:"Roehrenspannung beeinflusst Durchdringung; Strom beeinflusst Photonenmenge und Rauschen."},electrotechnics:{en:"Links to high-voltage generation, power electronics, heat, and insulation.",de:"Bezug zu Hochspannungserzeugung, Leistungselektronik, Waerme und Isolation."}},{id:"detectors",name:{en:"Detector Array",de:"Detektorarray"},function:{en:"Measures transmitted radiation.",de:"Misst die durchgelassene Strahlung."},details:{en:"Scintillators and photodiodes convert radiation into electrical signals.",de:"Szintillatoren und Photodioden wandeln Strahlung in elektrische Signale um."},electrotechnics:{en:"Photodiode current, amplification, ADCs, and noise are central concepts.",de:"Photodiodenstrom, Verstaerkung, ADCs und Rauschen sind zentrale Konzepte."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Moves precisely through the scan plane.",de:"Bewegt sich praezise durch die Scanebene."},details:{en:"Motion accuracy affects slice position and scan coverage.",de:"Bewegungsgenauigkeit beeinflusst Schichtposition und Scanbereich."},electrotechnics:{en:"Uses motor control, encoders, limit switches, and safety interlocks.",de:"Nutzt Motorregelung, Encoder, Endschalter und Sicherheitsverriegelungen."}},{id:"console",name:{en:"Operator Console",de:"Bedienkonsole"},function:{en:"Controls protocol and image review.",de:"Steuert Protokoll und Bildanzeige."},details:{en:"Operators choose acquisition settings and view reconstructed slices.",de:"Bedienende waehlen Aufnahmeparameter und betrachten rekonstruierte Schichten."},electrotechnics:{en:"Software coordinates timing, exposure control, and data transfer.",de:"Software koordiniert Timing, Belichtungssteuerung und Datenuebertragung."}}],demo:{title:{en:"CT reconstruction and windowing",de:"CT-Rekonstruktion und Fensterung"},beforeLabel:{en:"Low contrast slice",de:"Kontrastarmes Schnittbild"},afterLabel:{en:"Windowed slice",de:"Gefenstertes Schnittbild"},explanation:{en:"Windowing maps a useful intensity range into visible grayscale, making selected structures easier to see.",de:"Fensterung bildet einen nuetzlichen Intensitaetsbereich auf sichtbare Graustufen ab."},filters:[{en:"Reconstruction",de:"Rekonstruktion"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Window/level",de:"Fenster/Lage"}],clipSteps:[{en:"Tube rotates",de:"Roehre rotiert"},{en:"Detector measures",de:"Detektor misst"},{en:"Computer reconstructs",de:"Computer rekonstruiert"},{en:"Image is windowed",de:"Bild wird gefenstert"}]}},{id:"ultrasound",name:{en:"Ultrasound System",de:"Ultraschallsystem"},category:{en:"Acoustic Imaging",de:"Akustische Bildgebung"},short:{en:"Sends sound pulses and listens for echoes to build live images.",de:"Sendet Schallimpulse und erzeugt aus Echos Live-Bilder."},model:"ultrasound",overview:{en:"Ultrasound uses piezoelectric elements to send and receive high-frequency sound. Echo timing gives depth, and echo strength gives brightness.",de:"Ultraschall nutzt piezoelektrische Elemente zum Senden und Empfangen von Hochfrequenzschall. Echozeit ergibt Tiefe, Echostaerke ergibt Helligkeit."},workflow:[{en:"A voltage pulse excites piezoelectric crystals.",de:"Ein Spannungspuls regt piezoelektrische Kristalle an."},{en:"Sound travels into tissue and reflects at boundaries.",de:"Schall laeuft ins Gewebe und reflektiert an Grenzflaechen."},{en:"Returned echoes are amplified and time-measured.",de:"Rueckkehrende Echos werden verstaerkt und zeitlich gemessen."},{en:"Beamforming and filtering create the image.",de:"Beamforming und Filterung erzeugen das Bild."}],deepDive:[{title:{en:"Piezoelectric conversion",de:"Piezoelektrische Wandlung"},body:{en:"A pulser applies a short high-voltage pulse to piezo elements. Their crystal structure changes thickness and launches an acoustic pulse. Returning pressure waves deform the same elements and create small voltages, so the probe rapidly switches between transmit protection and low-noise receive electronics.",de:"Ein Pulser legt einen kurzen Hochspannungspuls an Piezoelemente. Ihre Kristallstruktur aendert die Dicke und sendet einen akustischen Puls aus. Zurueckkehrende Druckwellen verformen dieselben Elemente und erzeugen kleine Spannungen, daher schaltet die Sonde schnell zwischen Sendeschutz und rauscharmem Empfang um."}},{title:{en:"Depth and beamforming",de:"Tiefe und Beamforming"},body:{en:"Echo delay gives depth because sound speed in tissue is approximately known. Array probes steer and focus beams by delaying channels. On receive, the system aligns channel delays before summing, which increases signals from the focus and suppresses off-axis echoes.",de:"Die Echo-Laufzeit ergibt Tiefe, weil die Schallgeschwindigkeit im Gewebe ungefaehr bekannt ist. Array-Sonden lenken und fokussieren Strahlen durch Kanalverzoegerungen. Beim Empfang richtet das System die Kanalverzoegerungen vor der Summe aus, wodurch Signale aus dem Fokus staerker und seitliche Echos schwaecher werden."}},{title:{en:"Image cleanup",de:"Bildaufbereitung"},body:{en:"The raw echo data passes through time-gain compensation, bandpass filtering, envelope detection, log compression, speckle reduction, edge-preserving smoothing, and scan conversion. These steps turn echo amplitude into a readable B-mode image while preserving small structures.",de:"Die Roh-Echodaten laufen durch tiefenabhaengige Verstaerkung, Bandpassfilter, Huellkurvendetektion, Log-Kompression, Speckle-Reduktion, kantenerhaltende Glaettung und Scan-Konvertierung. So wird Echoamplitude zu einem lesbaren B-Mode-Bild, ohne kleine Strukturen zu stark zu verlieren."}}],parts:[{id:"probe",name:{en:"Probe Housing",de:"Sondengehaeuse"},function:{en:"Holds the transducer array and is handled by the user.",de:"Enthaelt das Wandlerarray und wird von der Person gefuehrt."},details:{en:"Probe shape controls imaging access and field of view.",de:"Sondenform beeinflusst Zugang und Sichtfeld."},electrotechnics:{en:"Cable shielding and impedance matching matter at high frequencies.",de:"Kabelschirmung und Impedanzanpassung sind bei hohen Frequenzen wichtig."}},{id:"crystals",name:{en:"Piezo Elements",de:"Piezoelemente"},function:{en:"Convert voltage into sound and returning sound into voltage.",de:"Wandeln Spannung in Schall und Echo-Schall in Spannung um."},details:{en:"The same element can transmit and receive.",de:"Dasselbe Element kann senden und empfangen."},electrotechnics:{en:"A piezo element behaves like an electromechanical resonator with capacitance.",de:"Ein Piezoelement verhaelt sich wie ein elektromechanischer Resonator mit Kapazitaet."}},{id:"beam",name:{en:"Ultrasound Beam",de:"Ultraschallstrahl"},function:{en:"Carries acoustic energy into the tissue.",de:"Transportiert akustische Energie ins Gewebe."},details:{en:"Focusing changes resolution and penetration.",de:"Fokussierung veraendert Aufloesung und Eindringtiefe."},electrotechnics:{en:"Beam steering uses phase delays between array elements.",de:"Strahllenkung nutzt Phasenverzoegerungen zwischen Array-Elementen."}},{id:"console",name:{en:"Console Electronics",de:"Konsolenelektronik"},function:{en:"Controls transmit pulses, receive gain, and processing.",de:"Steuert Sendepulse, Empfangsverstaerkung und Verarbeitung."},details:{en:"Gain, depth, focus, and dynamic range change the displayed image.",de:"Gain, Tiefe, Fokus und Dynamikbereich veraendern das Bild."},electrotechnics:{en:"Needs pulser circuits, low-noise amplifiers, ADCs, and digital beamforming.",de:"Braucht Pulser-Schaltungen, rauscharme Verstaerker, ADCs und digitales Beamforming."}},{id:"screen",name:{en:"Image Display",de:"Bildanzeige"},function:{en:"Shows B-mode, M-mode, or Doppler information.",de:"Zeigt B-Mode, M-Mode oder Dopplerinformationen."},details:{en:"The image is a processed map of echoes, not a photo.",de:"Das Bild ist eine verarbeitete Echokarte, kein Foto."},electrotechnics:{en:"Display pipeline includes frame memory, image mapping, and UI controls.",de:"Die Anzeige nutzt Bildspeicher, Bildabbildung und UI-Steuerung."}}],demo:{title:{en:"Speckle reduction",de:"Speckle-Reduktion"},beforeLabel:{en:"Speckled image",de:"Speckle-Bild"},afterLabel:{en:"Smoothed image",de:"Geglaettetes Bild"},explanation:{en:"Filtering can reduce speckle and improve readability, but too much smoothing hides small structures.",de:"Filterung kann Speckle reduzieren, aber zu starke Glaettung verdeckt kleine Strukturen."},filters:[{en:"Gain correction",de:"Gain-Korrektur"},{en:"Speckle smoothing",de:"Speckle-Glaettung"},{en:"Edge preserving",de:"Kantenerhalt"}],clipSteps:[{en:"Pulse sent",de:"Puls gesendet"},{en:"Echo returns",de:"Echo kommt zurueck"},{en:"Signal amplified",de:"Signal verstaerkt"},{en:"Image formed",de:"Bild entsteht"}]}},{id:"xray",name:{en:"X-ray System",de:"Roentgensystem"},category:{en:"Projection Imaging",de:"Projektionsbildgebung"},short:{en:"Projects X-rays through an object onto a digital detector.",de:"Projiziert Roentgenstrahlung durch ein Objekt auf einen digitalen Detektor."},model:"xray",overview:{en:"X-ray imaging creates a 2D projection. Dense material absorbs more radiation and changes detector intensity.",de:"Roentgenbildgebung erzeugt eine 2D-Projektion. Dichtes Material absorbiert mehr Strahlung und veraendert die Detektorintensitaet."},workflow:[{en:"High voltage accelerates electrons in the tube.",de:"Hochspannung beschleunigt Elektronen in der Roehre."},{en:"The anode converts electron energy into X-rays and heat.",de:"Die Anode wandelt Elektronenenergie in Roentgenstrahlung und Waerme um."},{en:"The collimator shapes the beam.",de:"Der Kollimator formt den Strahl."},{en:"The detector converts radiation into pixel data.",de:"Der Detektor wandelt Strahlung in Pixeldaten um."}],deepDive:[{title:{en:"Tube physics",de:"Roehrenphysik"},body:{en:"The cathode filament heats until electrons leave the metal. A high electric field accelerates them toward the anode. When electrons decelerate in the target, bremsstrahlung and characteristic X-rays are produced, but most energy becomes heat, so power timing and cooling are central design limits.",de:"Das Kathodenfilament heizt, bis Elektronen das Metall verlassen. Ein starkes elektrisches Feld beschleunigt sie zur Anode. Beim Abbremsen im Target entstehen Bremsstrahlung und charakteristische Roentgenstrahlung, aber der groesste Teil wird Waerme. Deshalb begrenzen Leistungstiming und Kuehlung das Design."}},{title:{en:"Detector readout",de:"Detektorauslesung"},body:{en:"Indirect flat panels convert X-rays to light in a scintillator and then to charge in photodiodes. Direct panels convert X-rays straight into charge. Pixel switches read rows into amplifiers and ADCs; offset correction, bad-pixel maps, gain calibration, and lag correction make the image stable.",de:"Indirekte Flachdetektoren wandeln Roentgenstrahlen im Szintillator in Licht und danach in Photodiodenladung. Direkte Detektoren wandeln direkt in Ladung. Pixelschalter lesen Zeilen in Verstaerker und ADCs; Offsetkorrektur, Bad-Pixel-Karten, Gain-Kalibrierung und Lag-Korrektur stabilisieren das Bild."}},{title:{en:"Contrast and noise",de:"Kontrast und Rauschen"},body:{en:"Collimation reduces unnecessary field size and scatter. Anti-scatter grids improve contrast but absorb useful photons too. Processing often applies flat-field correction, contrast stretching, noise-aware smoothing, and sharpening, always balancing visibility against dose and artifacts.",de:"Kollimation reduziert unnoetige Feldgroesse und Streustrahlung. Streustrahlenraster verbessern Kontrast, schlucken aber auch Nutzphotonen. Die Verarbeitung nutzt oft Flat-Field-Korrektur, Kontraststreckung, rauschbewusste Glaettung und Schaerfung, immer im Kompromiss zwischen Sichtbarkeit, Dosis und Artefakten."}}],parts:[{id:"cathode",name:{en:"Cathode",de:"Kathode"},function:{en:"Emits electrons by heating a filament.",de:"Emittiert Elektronen durch Erhitzen eines Filaments."},details:{en:"Tube current depends strongly on electron emission.",de:"Der Roehrenstrom haengt stark von der Elektronenemission ab."},electrotechnics:{en:"Links to thermionic emission, filament current, and high-voltage safety.",de:"Bezug zu Gluemission, Heizstrom und Hochspannungssicherheit."}},{id:"anode",name:{en:"Anode",de:"Anode"},function:{en:"Target hit by electrons to generate X-rays.",de:"Ziel, auf das Elektronen treffen und Roentgenstrahlung erzeugen."},details:{en:"Most energy becomes heat, so cooling is important.",de:"Der groesste Teil wird Waerme, daher ist Kuehlung wichtig."},electrotechnics:{en:"Power, heat load, and insulation are major engineering issues.",de:"Leistung, Waermelast und Isolation sind wichtige technische Themen."}},{id:"collimator",name:{en:"Collimator",de:"Kollimator"},function:{en:"Limits the beam area.",de:"Begrenzt die Strahlflaeche."},details:{en:"Good collimation reduces scatter and unnecessary exposure.",de:"Gute Kollimation reduziert Streustrahlung und unnoetige Exposition."},electrotechnics:{en:"Motorized shutters use position sensing and interlocks.",de:"Motorisierte Blenden nutzen Positionssensoren und Verriegelungen."}},{id:"detector",name:{en:"Detector Panel",de:"Detektorplatte"},function:{en:"Captures the X-ray projection.",de:"Erfasst die Roentgenprojektion."},details:{en:"Digital detectors use scintillators or direct conversion layers.",de:"Digitale Detektoren nutzen Szintillatoren oder direkte Wandlerschichten."},electrotechnics:{en:"Pixel electronics, charge readout, ADCs, and calibration are key topics.",de:"Pixelelektronik, Ladungsauslese, ADCs und Kalibrierung sind zentrale Themen."}},{id:"grid",name:{en:"Anti-scatter Grid",de:"Streustrahlenraster"},function:{en:"Reduces scattered radiation before the detector.",de:"Reduziert Streustrahlung vor dem Detektor."},details:{en:"Improves contrast but can require higher exposure.",de:"Verbessert Kontrast, kann aber hoehere Exposition benoetigen."},electrotechnics:{en:"Shows the tradeoff between signal strength, noise, and contrast.",de:"Zeigt den Kompromiss zwischen Signalstaerke, Rauschen und Kontrast."}}],demo:{title:{en:"Contrast enhancement",de:"Kontrastverstaerkung"},beforeLabel:{en:"Flat contrast",de:"Flacher Kontrast"},afterLabel:{en:"Enhanced contrast",de:"Verbesserter Kontrast"},explanation:{en:"Contrast stretching spreads useful gray values across the display range.",de:"Kontraststreckung verteilt nuetzliche Grauwerte ueber den Anzeigebereich."},filters:[{en:"Contrast stretch",de:"Kontraststreckung"},{en:"Sharpening",de:"Schaerfung"},{en:"Noise-aware smoothing",de:"Rauschbewusste Glaettung"}],clipSteps:[{en:"Tube emits X-rays",de:"Roehre sendet Strahlung"},{en:"Body attenuates beam",de:"Objekt schwaecht Strahl ab"},{en:"Detector captures pixels",de:"Detektor erfasst Pixel"},{en:"Contrast is enhanced",de:"Kontrast wird verbessert"}]}},{id:"mri",name:{en:"MRI Scanner",de:"MRT-Scanner"},category:{en:"Magnetic Resonance",de:"Magnetresonanz"},short:{en:"Uses magnets, gradients, and RF coils to form tissue-contrast images.",de:"Nutzt Magnet, Gradienten und HF-Spulen fuer kontrastreiche Bilder."},model:"mri",overview:{en:"MRI uses a strong magnetic field, RF pulses, and gradient fields to encode signals from hydrogen nuclei.",de:"MRT nutzt ein starkes Magnetfeld, HF-Pulse und Gradientenfelder, um Signale von Wasserstoffkernen zu codieren."},workflow:[{en:"Main magnet aligns spins.",de:"Hauptmagnet richtet Spins aus."},{en:"RF coil excites and receives signals.",de:"HF-Spule regt an und empfaengt Signale."},{en:"Gradient coils encode position.",de:"Gradientenspulen codieren Position."},{en:"Computer reconstructs contrast images.",de:"Computer rekonstruiert Kontrastbilder."}],deepDive:[{title:{en:"Main magnetic field",de:"Hauptmagnetfeld"},body:{en:"When the patient enters the bore, hydrogen nuclei in water and fat see a strong static B0 field. Their magnetic moments do not all point perfectly with the field, but a small net magnetization builds along B0. The Larmor frequency is proportional to field strength, so the scanner knows what RF frequency can tip that magnetization into the transverse plane.",de:"Wenn die Person in die Roehre faehrt, sehen Wasserstoffkerne in Wasser und Fett ein starkes statisches B0-Feld. Die magnetischen Momente zeigen nicht alle perfekt in Feldrichtung, aber eine kleine Nettomagnetisierung baut sich entlang B0 auf. Die Larmorfrequenz ist proportional zur Feldstaerke, daher weiss der Scanner, welche HF-Frequenz die Magnetisierung kippen kann."}},{title:{en:"RF pulse and received signal",de:"HF-Puls und Empfangssignal"},body:{en:"The RF coil sends a short magnetic B1 pulse at the Larmor frequency. This deposits energy into the spin system and tips the net magnetization. After the pulse stops, the precessing magnetization induces a tiny voltage in the receive coil by Faraday induction. That analog voltage is amplified, filtered, digitized, and stored as k-space samples.",de:"Die HF-Spule sendet einen kurzen magnetischen B1-Puls bei der Larmorfrequenz. Dadurch wird Energie in das Spinsystem eingebracht und die Nettomagnetisierung gekippt. Nach dem Puls induziert die praezessierende Magnetisierung durch Faraday-Induktion eine kleine Spannung in der Empfangsspule. Diese analoge Spannung wird verstaerkt, gefiltert, digitalisiert und als k-Raum-Daten gespeichert."}},{title:{en:"Gradients and image formation",de:"Gradienten und Bildentstehung"},body:{en:"Gradient coils add controlled magnetic-field slopes on x, y, and z. A slice-select gradient makes only one slice resonate with the RF pulse, phase encoding gives rows different phase shifts, and frequency encoding makes position change the received frequency. Reconstruction uses a Fourier transform, then image filters, coil combination, intensity correction, and noise reduction improve readability.",de:"Gradientenspulen addieren kontrollierte Magnetfeldsteigungen in x, y und z. Ein Schichtselektionsgradient laesst nur eine Schicht mit dem HF-Puls resonieren, Phasencodierung gibt Zeilen verschiedene Phasenlagen, und Frequenzcodierung macht die Position zur Empfangsfrequenz. Die Rekonstruktion nutzt eine Fourier-Transformation; danach verbessern Spulenkombination, Intensitaetskorrektur und Rauschminderung die Lesbarkeit."}},{title:{en:"Why it is loud and safety-critical",de:"Warum es laut und sicherheitskritisch ist"},body:{en:"Gradient coils carry high current and switch quickly inside the main field. Lorentz forces make the coil structure vibrate, which creates the knocking sound. Electrical design must manage inductance, voltage drive, cooling, eddy currents, RF heating, implant safety, quench behavior, and emergency stops.",de:"Gradientenspulen fuehren hohe Stroeme und schalten schnell im Hauptfeld. Lorentzkraefte versetzen die Spulenstruktur in Schwingung, wodurch das Klopfgeraeusch entsteht. Die Elektrotechnik muss Induktivitaet, Treiberspannung, Kuehlung, Wirbelstroeme, HF-Erwaermung, Implantatsicherheit, Quench-Verhalten und Not-Aus beherrschen."}}],parts:[{id:"bore",name:{en:"Magnet Bore",de:"Magnetoeffnung"},function:{en:"Contains the strong main magnetic field.",de:"Enthaelt das starke Hauptmagnetfeld."},details:{en:"Homogeneity affects image quality.",de:"Homogenitaet beeinflusst die Bildqualitaet."},electrotechnics:{en:"Superconducting magnets, cryogenics, and shielding are core ideas.",de:"Supraleitende Magnete, Kryotechnik und Abschirmung sind Kernideen."}},{id:"rfcoil",name:{en:"RF Coil",de:"HF-Spule"},function:{en:"Transmits and receives radio-frequency signals.",de:"Sendet und empfaengt Hochfrequenzsignale."},details:{en:"Coil position affects sensitivity.",de:"Spulenposition beeinflusst Empfindlichkeit."},electrotechnics:{en:"Resonance, impedance matching, and low-noise reception are important.",de:"Resonanz, Impedanzanpassung und rauscharmer Empfang sind wichtig."}},{id:"gradients",name:{en:"Gradient Coils",de:"Gradientenspulen"},function:{en:"Encode spatial position.",de:"Codieren raeumliche Position."},details:{en:"Rapid switching causes acoustic noise and heating.",de:"Schnelles Schalten erzeugt Geraeusche und Waerme."},electrotechnics:{en:"High-current drivers, inductance, and switching transients matter.",de:"Hochstromtreiber, Induktivitaet und Schalttransienten sind wichtig."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Positions the scanned object.",de:"Positioniert das Untersuchungsobjekt."},details:{en:"Accurate positioning improves coverage.",de:"Genaue Positionierung verbessert die Abdeckung."},electrotechnics:{en:"Motor control and safety interlocks protect motion.",de:"Motorsteuerung und Sicherheitsverriegelungen schuetzen die Bewegung."}}],demo:{title:{en:"Tissue contrast selection",de:"Gewebekontrast-Auswahl"},beforeLabel:{en:"Low contrast",de:"Niedriger Kontrast"},afterLabel:{en:"T2-like contrast",de:"T2-aehnlicher Kontrast"},explanation:{en:"Different sequences emphasize different tissue properties.",de:"Verschiedene Sequenzen betonen verschiedene Gewebeeigenschaften."},filters:[{en:"Intensity mapping",de:"Intensitaetsabbildung"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Contrast preset",de:"Kontrastpreset"}],clipSteps:[{en:"Magnet aligns spins",de:"Magnet richtet Spins aus"},{en:"RF pulse excites",de:"HF-Puls regt an"},{en:"Signal decays",de:"Signal klingt ab"},{en:"Image reconstructed",de:"Bild rekonstruiert"}]}},{id:"pump",name:{en:"Infusion Pump",de:"Infusionspumpe"},category:{en:"Therapy Device",de:"Therapiegeraet"},short:{en:"Controls fluid delivery with motor drive, sensors, alarms, and software.",de:"Steuert Fluessigkeitsabgabe mit Motor, Sensoren, Alarmen und Software."},model:"pump",overview:{en:"An infusion pump is a control system. It compares target delivery with sensor feedback and reacts to pressure, battery, door, and line problems.",de:"Eine Infusionspumpe ist ein Regelsystem. Sie vergleicht Zielabgabe mit Sensorfeedback und reagiert auf Druck, Akku, Tuer und Leitungsprobleme."},workflow:[{en:"User sets rate and volume.",de:"Nutzer stellt Rate und Volumen ein."},{en:"Motor moves the pump mechanism.",de:"Motor bewegt den Pumpmechanismus."},{en:"Pressure and door sensors check safety.",de:"Druck- und Tuersensoren pruefen Sicherheit."},{en:"Controller triggers alarms when limits are exceeded.",de:"Controller loest Alarme bei Grenzwertueberschreitung aus."}],deepDive:[{title:{en:"Motor and flow control",de:"Motor- und Flussregelung"},body:{en:"The pump is a closed-loop embedded system. A stepper or DC motor driver moves a peristaltic mechanism or cassette. Firmware converts the prescribed ml/h into motor steps, monitors current and position, and compensates for mechanical tolerance, battery voltage, and line resistance.",de:"Die Pumpe ist ein geschlossenes Embedded-Regelsystem. Ein Schritt- oder DC-Motortreiber bewegt Peristaltik oder Kassette. Firmware wandelt ml/h in Motorschritte um, ueberwacht Strom und Position und kompensiert mechanische Toleranz, Akkuspannung und Leitungswiderstand."}},{title:{en:"Pressure sensing",de:"Druckmessung"},body:{en:"Occlusion detection often uses a strain gauge or piezoresistive bridge. The bridge signal is tiny and temperature-sensitive, so it needs excitation stability, instrumentation amplification, ADC conversion, calibration, filtering, and threshold logic before an alarm is trustworthy.",de:"Okklusionserkennung nutzt oft Dehnungsmessstreifen oder piezoresistive Bruecken. Das Brueckensignal ist klein und temperaturabhaengig, daher braucht es stabile Speisung, Instrumentenverstaerkung, ADC-Wandlung, Kalibrierung, Filterung und Schwellwertlogik, bevor ein Alarm verlaesslich ist."}},{title:{en:"Safety logic",de:"Sicherheitslogik"},body:{en:"The controller cross-checks door state, air-in-line sensors, pressure trend, battery state, motor current, and user settings. Good design separates normal control from alarm decisions and fails into a safe state when sensor readings disagree.",de:"Der Controller prueft Tuerzustand, Luft-in-Leitung-Sensoren, Drucktrend, Akkuzustand, Motorstrom und Nutzereinstellungen gegeneinander. Gutes Design trennt normale Regelung von Alarmentscheidungen und geht in einen sicheren Zustand, wenn Sensordaten widerspruechlich sind."}}],parts:[{id:"screen",name:{en:"Display/UI",de:"Anzeige/UI"},function:{en:"Shows rate, volume, battery, and alarms.",de:"Zeigt Rate, Volumen, Akku und Alarme."},details:{en:"Good UI reduces setup mistakes.",de:"Gute UI reduziert Einstellfehler."},electrotechnics:{en:"Links embedded systems to human-machine interface design.",de:"Verbindet Embedded Systems mit Mensch-Maschine-Schnittstellen."}},{id:"cassette",name:{en:"Cassette Path",de:"Kassettenpfad"},function:{en:"Guides the fluid tube through the pump.",de:"Fuehrt den Schlauch durch die Pumpe."},details:{en:"Mechanical fit affects flow accuracy.",de:"Mechanischer Sitz beeinflusst Dosiergenauigkeit."},electrotechnics:{en:"Door switches and optical sensors can confirm correct loading.",de:"Tuerschalter und optische Sensoren koennen korrektes Einlegen bestaetigen."}},{id:"motor",name:{en:"Drive Motor",de:"Antriebsmotor"},function:{en:"Creates controlled pumping motion.",de:"Erzeugt kontrollierte Pumpbewegung."},details:{en:"Stepper or DC motor control decides flow stability.",de:"Schritt- oder DC-Motorsteuerung bestimmt die Flussstabilitaet."},electrotechnics:{en:"PWM, motor drivers, feedback, and current sensing are useful here.",de:"PWM, Motortreiber, Feedback und Strommessung sind hier nuetzlich."}},{id:"pressure",name:{en:"Pressure Sensor",de:"Drucksensor"},function:{en:"Detects occlusion or blocked flow.",de:"Erkennt Okklusion oder blockierten Fluss."},details:{en:"Rising pressure can indicate a blocked line.",de:"Steigender Druck kann eine blockierte Leitung anzeigen."},electrotechnics:{en:"Often uses bridge sensors, ADCs, calibration, and thresholds.",de:"Oft mit Brueckensensoren, ADCs, Kalibrierung und Schwellwerten."}}],demo:{title:{en:"Flow-rate monitoring",de:"Flussraten-Ueberwachung"},beforeLabel:{en:"Unstable flow",de:"Instabiler Fluss"},afterLabel:{en:"Controlled flow",de:"Kontrollierter Fluss"},explanation:{en:"Control systems compare target and measured values, then correct motor action or trigger alarms.",de:"Regelsysteme vergleichen Soll- und Messwerte, korrigieren den Motor oder loesen Alarme aus."},filters:[{en:"Moving average",de:"Gleitender Mittelwert"},{en:"Threshold alarm",de:"Schwellwertalarm"},{en:"Trend check",de:"Trendpruefung"}],clipSteps:[{en:"Rate selected",de:"Rate gewaehlt"},{en:"Motor turns",de:"Motor dreht"},{en:"Pressure checked",de:"Druck geprueft"},{en:"Alarm if blocked",de:"Alarm bei Blockade"}]}},{id:"ventilator",name:{en:"Ventilator",de:"Beatmungsgeraet"},category:{en:"Respiratory Therapy",de:"Atemtherapie"},short:{en:"Controls pressure, flow, oxygen mix, and alarms during assisted breathing.",de:"Regelt Druck, Fluss, Sauerstoffmischung und Alarme bei assistierter Atmung."},model:"ventilator",overview:{en:"A ventilator is a sensor-rich control system. It drives gas flow, measures airway pressure and volume, synchronizes with patient effort, and uses alarms to avoid unsafe pressure, disconnection, or blocked tubing.",de:"Ein Beatmungsgeraet ist ein sensorreiches Regelsystem. Es treibt Gasfluss an, misst Atemwegsdruck und Volumen, synchronisiert sich mit Patientenbemuehung und nutzt Alarme gegen unsicheren Druck, Diskonnektion oder blockierte Schlaeuche."},workflow:[{en:"A blower or valves create controlled inspiratory flow.",de:"Geblaese oder Ventile erzeugen kontrollierten Inspirationsfluss."},{en:"Pressure and flow sensors measure the breathing circuit.",de:"Druck- und Flusssensoren messen den Atemkreis."},{en:"Firmware compares measured pressure/volume with the selected mode.",de:"Firmware vergleicht Druck/Volumen mit dem gewaehlten Modus."},{en:"Filters, alarms, and valves keep delivered gas safer and readable.",de:"Filter, Alarme und Ventile halten das abgegebene Gas sicherer und messbar."}],deepDive:[{title:{en:"Pressure and flow sensing",de:"Druck- und Flussmessung"},body:{en:"Airway pressure is often measured with piezoresistive pressure sensors, while flow may be measured from a pressure drop across a known restriction or by hot-wire methods. The electronics need bridge excitation, instrumentation amplification, ADC sampling, offset correction, leak compensation, and digital filtering.",de:"Atemwegsdruck wird oft mit piezoresistiven Drucksensoren gemessen; Fluss kann aus dem Druckabfall ueber einer bekannten Drossel oder thermisch gemessen werden. Die Elektronik braucht Brueckenspeisung, Instrumentenverstaerkung, ADC-Abtastung, Offsetkorrektur, Leckkompensation und digitale Filterung."}},{title:{en:"Control loop",de:"Regelkreis"},body:{en:"The controller drives valves or a blower so pressure, volume, or flow follows the selected ventilation mode. PID-like control, trigger detection, rise-time shaping, and safety limits are important because the patient and tubing form a changing pneumatic load.",de:"Der Controller steuert Ventile oder Geblaese, damit Druck, Volumen oder Fluss dem gewaehlten Beatmungsmodus folgen. PID-aehnliche Regelung, Triggererkennung, Anstiegszeitformung und Sicherheitsgrenzen sind wichtig, weil Patient und Schlauchsystem eine veraenderliche pneumatische Last bilden."}},{title:{en:"Signal cleanup and alarms",de:"Signalaufbereitung und Alarme"},body:{en:"Breathing signals are filtered to reduce sensor noise while preserving fast pressure rises and patient-trigger events. Alarm logic checks high pressure, low pressure, apnea, low volume, oxygen concentration, power, and sensor plausibility.",de:"Atemsignale werden gefiltert, um Sensorrauschen zu reduzieren und schnelle Druckanstiege sowie Patiententrigger zu erhalten. Alarmsoftware prueft Hochdruck, Niederdruck, Apnoe, niedriges Volumen, Sauerstoffkonzentration, Versorgung und Sensorplausibilitaet."}}],parts:[{id:"screen",name:{en:"Control Screen",de:"Bedienanzeige"},function:{en:"Shows mode, pressure, volume, flow, oxygen, and alarms.",de:"Zeigt Modus, Druck, Volumen, Fluss, Sauerstoff und Alarme."},details:{en:"Waveforms help clinicians see leaks, obstruction, and synchrony.",de:"Kurven helfen, Lecks, Obstruktion und Synchronie zu erkennen."},electrotechnics:{en:"Embedded UI, alarm state machines, and sampled waveform rendering meet here.",de:"Embedded-UI, Alarmzustandsautomaten und abgetastete Kurvendarstellung treffen hier zusammen."}},{id:"blower",name:{en:"Blower/Valve Block",de:"Geblaese/Ventilblock"},function:{en:"Creates and meters gas flow.",de:"Erzeugt und dosiert Gasfluss."},details:{en:"Fast valve response affects pressure control and comfort.",de:"Schnelle Ventilantwort beeinflusst Druckregelung und Komfort."},electrotechnics:{en:"Uses motor drivers, solenoids, PWM, current sensing, and protection circuits.",de:"Nutzt Motortreiber, Magnetventile, PWM, Strommessung und Schutzschaltungen."}},{id:"sensors",name:{en:"Pressure/Flow Sensors",de:"Druck-/Flusssensoren"},function:{en:"Measure delivered breathing mechanics.",de:"Messen die abgegebene Atemmechanik."},details:{en:"Sensor drift or condensation can corrupt control.",de:"Sensordrift oder Kondensation kann die Regelung stoeren."},electrotechnics:{en:"Bridge sensors, ADCs, calibration, low-pass filtering, and plausibility checks are central.",de:"Brueckensensoren, ADCs, Kalibrierung, Tiefpassfilter und Plausibilitaetspruefung sind zentral."}},{id:"tubing",name:{en:"Breathing Circuit",de:"Atemkreis"},function:{en:"Carries gas to and from the patient interface.",de:"Fuehrt Gas zur und von der Patientenschnittstelle."},details:{en:"Compliance, leaks, and resistance change measured pressure and volume.",de:"Compliance, Lecks und Widerstand veraendern gemessenen Druck und Volumen."},electrotechnics:{en:"Control software must interpret sensor signals through this pneumatic load.",de:"Regelsoftware muss Sensorsignale durch diese pneumatische Last interpretieren."}}],demo:{title:{en:"Pressure waveform stabilization",de:"Druckkurven-Stabilisierung"},beforeLabel:{en:"Noisy pressure/flow",de:"Verrauschter Druck/Fluss"},afterLabel:{en:"Controlled breath cycle",de:"Geregelter Atemzyklus"},explanation:{en:"Filtering and control make pressure and flow readable, but alarms must still react quickly to dangerous changes.",de:"Filterung und Regelung machen Druck und Fluss lesbar, Alarme muessen aber weiter schnell auf gefaehrliche Aenderungen reagieren."},filters:[{en:"Low-pass filter",de:"Tiefpassfilter"},{en:"Leak compensation",de:"Leckkompensation"},{en:"Alarm thresholds",de:"Alarmschwellen"}],clipSteps:[{en:"Mode selected",de:"Modus gewaehlt"},{en:"Blower drives flow",de:"Geblaese treibt Fluss"},{en:"Sensors measure",de:"Sensoren messen"},{en:"Controller adapts",de:"Controller passt an"}]}},{id:"defib",name:{en:"Defibrillator",de:"Defibrillator"},category:{en:"Emergency Therapy",de:"Notfalltherapie"},short:{en:"Charges a high-energy capacitor, analyzes ECG, and delivers a controlled shock path.",de:"Laedt einen Hochenergie-Kondensator, analysiert EKG und gibt einen kontrollierten Schockpfad ab."},model:"defib",overview:{en:"A defibrillator combines ECG acquisition with high-voltage energy delivery. Its design must separate sensitive measurement electronics from the shock circuit while keeping timing, isolation, and user safety reliable.",de:"Ein Defibrillator kombiniert EKG-Erfassung mit Hochspannungs-Energieabgabe. Das Design muss empfindliche Messelektronik vom Schockkreis trennen und Timing, Isolation und Anwendersicherheit verlaesslich halten."},workflow:[{en:"Pads sense ECG and provide a shock path.",de:"Pads messen EKG und bilden den Schockpfad."},{en:"An isolated front end filters the ECG for rhythm analysis.",de:"Eine isolierte Eingangsstufe filtert das EKG fuer Rhythmusanalyse."},{en:"A charger stores energy in a capacitor bank.",de:"Ein Ladegeraet speichert Energie in einer Kondensatorbank."},{en:"Switching electronics deliver a shaped biphasic waveform.",de:"Schaltelektronik liefert eine geformte biphasische Kurve."}],deepDive:[{title:{en:"Energy storage",de:"Energiespeicherung"},body:{en:"The charger raises battery voltage to a much higher capacitor voltage. Stored energy follows E = 1/2 C V^2, so voltage measurement, bleeder resistors, insulation, discharge switches, and interlocks are major safety topics.",de:"Das Ladegeraet hebt die Akkuspannung auf eine viel hoehere Kondensatorspannung. Gespeicherte Energie folgt E = 1/2 C V^2, daher sind Spannungsmessung, Entladewiderstaende, Isolation, Entladeschalter und Verriegelungen wichtige Sicherheitsthemen."}},{title:{en:"ECG analysis front end",de:"EKG-Analyse-Eingang"},body:{en:"The ECG path needs high input impedance, patient isolation, defibrillation protection, CMRR, baseline recovery, and filters. Rhythm algorithms depend on clean enough QRS timing while avoiding false confidence from motion, poor pad contact, or shock recovery artifacts.",de:"Der EKG-Pfad braucht hohe Eingangsimpedanz, Patientenisolation, Defibrillationsschutz, CMRR, Baseline-Rueckkehr und Filter. Rhythmusalgorithmen brauchen ausreichend sauberes QRS-Timing und muessen Bewegungen, schlechten Padkontakt und Artefakte nach Schock vermeiden."}},{title:{en:"Shock waveform",de:"Schockkurve"},body:{en:"Modern devices often shape a biphasic pulse through controlled switching. The delivered current depends on patient impedance, so the device measures or estimates impedance and supervises energy delivery, timing, and abort conditions.",de:"Moderne Geraete formen oft einen biphasischen Puls durch kontrolliertes Schalten. Der abgegebene Strom haengt von Patientenimpedanz ab, daher misst oder schaetzt das Geraet die Impedanz und ueberwacht Energieabgabe, Timing und Abbruchbedingungen."}}],parts:[{id:"screen",name:{en:"ECG/Status Display",de:"EKG-/Statusanzeige"},function:{en:"Shows rhythm, charge state, prompts, and alarms.",de:"Zeigt Rhythmus, Ladezustand, Hinweise und Alarme."},details:{en:"Emergency UI must be readable under stress.",de:"Notfall-UI muss unter Stress lesbar sein."},electrotechnics:{en:"Display logic is tied to battery, charger, ECG, and safety states.",de:"Anzeigelogik ist mit Akku, Ladegeraet, EKG und Sicherheitszustaenden verbunden."}},{id:"capacitor",name:{en:"Capacitor Bank",de:"Kondensatorbank"},function:{en:"Stores shock energy.",de:"Speichert Schockenergie."},details:{en:"Voltage accuracy and insulation are critical.",de:"Spannungsgenauigkeit und Isolation sind kritisch."},electrotechnics:{en:"Capacitance, high-voltage charging, leakage, bleeders, and switching devices matter.",de:"Kapazitaet, Hochspannungsladung, Leckstrom, Entladewiderstaende und Schalter sind wichtig."}},{id:"pads",name:{en:"Pads/Paddles",de:"Pads/Paddles"},function:{en:"Couple ECG and therapy current to the body.",de:"Koppeln EKG und Therapiestrom an den Koerper."},details:{en:"Contact impedance affects analysis and delivered current.",de:"Kontaktimpedanz beeinflusst Analyse und abgegebenen Strom."},electrotechnics:{en:"Electrode impedance, patient isolation, and discharge path design meet here.",de:"Elektrodenimpedanz, Patientenisolation und Entladepfad treffen hier zusammen."}},{id:"charger",name:{en:"HV Charger",de:"HV-Ladegeraet"},function:{en:"Raises battery voltage to therapy voltage.",de:"Hebt Akkuspannung auf Therapiespannung."},details:{en:"Must charge quickly but safely.",de:"Muss schnell und sicher laden."},electrotechnics:{en:"Flyback converters, voltage feedback, current limits, and insulation are key.",de:"Flyback-Wandler, Spannungsfeedback, Stromgrenzen und Isolation sind zentral."}}],demo:{title:{en:"ECG decision and shock path",de:"EKG-Entscheidung und Schockpfad"},beforeLabel:{en:"Noisy rhythm",de:"Verrauschter Rhythmus"},afterLabel:{en:"Detected QRS/shock ready",de:"Erkanntes QRS/schockbereit"},explanation:{en:"The same pads can support sensing and therapy, but measurement protection and high-voltage switching must be carefully separated.",de:"Dieselben Pads koennen Messung und Therapie unterstuetzen, aber Messschutz und Hochspannungsschaltung muessen sauber getrennt sein."},filters:[{en:"ECG bandpass",de:"EKG-Bandpass"},{en:"Artifact rejection",de:"Artefaktunterdrueckung"},{en:"Impedance check",de:"Impedanzpruefung"}],clipSteps:[{en:"Pads attached",de:"Pads befestigt"},{en:"ECG analyzed",de:"EKG analysiert"},{en:"Capacitor charges",de:"Kondensator laedt"},{en:"Pulse delivered",de:"Puls abgegeben"}]}},{id:"dialysis",name:{en:"Hemodialysis Machine",de:"Haemodialysegeraet"},category:{en:"Extracorporeal Therapy",de:"Extrakorporale Therapie"},short:{en:"Controls blood flow, dialysate chemistry, pressure, conductivity, and safety alarms.",de:"Regelt Blutfluss, Dialysatchemie, Druck, Leitfaehigkeit und Sicherheitsalarme."},model:"dialysis",overview:{en:"A dialysis machine is a fluidic, electrical, and safety-control system. It pumps blood through a dialyzer while controlling dialysate concentration, temperature, pressures, ultrafiltration, and air/blood leak alarms.",de:"Ein Dialysegeraet ist ein fluidisches, elektrisches und sicherheitskritisches Regelsystem. Es pumpt Blut durch einen Dialysator und regelt Dialysatkonzentration, Temperatur, Druck, Ultrafiltration sowie Luft- und Blutleckalarme."},workflow:[{en:"Blood pump moves blood through the extracorporeal circuit.",de:"Die Blutpumpe bewegt Blut durch den extrakorporalen Kreis."},{en:"Dialysate flows on the other side of a semipermeable membrane.",de:"Dialysat fliesst auf der anderen Seite einer semipermeablen Membran."},{en:"Sensors monitor pressure, conductivity, temperature, and air.",de:"Sensoren ueberwachen Druck, Leitfaehigkeit, Temperatur und Luft."},{en:"Control logic stops flow or clamps lines during unsafe states.",de:"Regellogik stoppt Fluss oder klemmt Leitungen bei unsicheren Zustaenden."}],deepDive:[{title:{en:"Pumps and pressure",de:"Pumpen und Druck"},body:{en:"Roller pumps create flow while arterial and venous pressure sensors monitor access problems, clotting, kinks, or disconnection. The sensor chain needs amplification, ADC conversion, calibration, trend filtering, and alarm thresholds.",de:"Rollenpumpen erzeugen Fluss, waehrend arterielle und venoese Drucksensoren Zugangsprobleme, Gerinnung, Knicke oder Diskonnektion ueberwachen. Die Sensorkette braucht Verstaerkung, ADC-Wandlung, Kalibrierung, Trendfilterung und Alarmschwellen."}},{title:{en:"Conductivity and temperature",de:"Leitfaehigkeit und Temperatur"},body:{en:"Dialysate conductivity estimates ionic concentration, so electrodes or conductivity cells are measured with AC excitation to reduce polarization. Temperature sensors and heaters are controlled tightly because chemistry and patient comfort depend on stable dialysate.",de:"Dialysatleitfaehigkeit schaetzt Ionenkonzentration, daher werden Elektroden oder Leitfaehigkeitszellen mit AC-Anregung gemessen, um Polarisation zu reduzieren. Temperatursensoren und Heizer werden eng geregelt, weil Chemie und Komfort stabiles Dialysat brauchen."}},{title:{en:"Membrane exchange",de:"Membranaustausch"},body:{en:"The dialyzer membrane lets small solutes and water move while keeping cells and larger proteins in the blood path. Electronics do not measure every molecule directly; they control pressures, flow, conductivity, temperature, and time so the physical exchange stays within target bounds.",de:"Die Dialysatormembran laesst kleine geloeste Stoffe und Wasser passieren und haelt Zellen sowie groessere Proteine im Blutpfad. Die Elektronik misst nicht jedes Molekuel direkt; sie regelt Druck, Fluss, Leitfaehigkeit, Temperatur und Zeit, damit der physikalische Austausch im Zielbereich bleibt."}}],parts:[{id:"screen",name:{en:"Therapy Screen",de:"Therapieanzeige"},function:{en:"Shows flow, pressure, conductivity, time, and alarms.",de:"Zeigt Fluss, Druck, Leitfaehigkeit, Zeit und Alarme."},details:{en:"Therapy setup and alarm response depend on readable values.",de:"Therapieeinstellung und Alarmreaktion haengen von lesbaren Werten ab."},electrotechnics:{en:"Embedded monitoring integrates sensors, state machines, and UI.",de:"Embedded-Monitoring verbindet Sensoren, Zustandsautomaten und UI."}},{id:"pump",name:{en:"Blood Pump",de:"Blutpumpe"},function:{en:"Moves blood through tubing.",de:"Bewegt Blut durch Schlaeuche."},details:{en:"Roller speed determines flow estimate.",de:"Rollendrehzahl bestimmt die Flussschaetzung."},electrotechnics:{en:"Motor control, encoders, current sensing, and door interlocks are used.",de:"Motorregelung, Encoder, Strommessung und Tuerverriegelungen werden genutzt."}},{id:"dialyzer",name:{en:"Dialyzer Cartridge",de:"Dialysator"},function:{en:"Exchanges solutes and water across a membrane.",de:"Tauscht geloeste Stoffe und Wasser ueber eine Membran aus."},details:{en:"Flow direction and pressure gradient affect exchange.",de:"Flussrichtung und Druckgradient beeinflussen den Austausch."},electrotechnics:{en:"Controlled by pump timing, pressure sensors, and ultrafiltration feedback.",de:"Gesteuert ueber Pumpentiming, Drucksensoren und Ultrafiltrationsfeedback."}},{id:"sensors",name:{en:"Safety Sensors",de:"Sicherheitssensoren"},function:{en:"Watch pressure, air, blood leak, temperature, and conductivity.",de:"Ueberwachen Druck, Luft, Blutleck, Temperatur und Leitfaehigkeit."},details:{en:"Sensor disagreement must stop therapy safely.",de:"Sensorwiderspruch muss die Therapie sicher stoppen."},electrotechnics:{en:"ADC channels, excitation circuits, optical sensing, and plausibility logic are central.",de:"ADC-Kanaele, Anregeschaltungen, optische Sensorik und Plausibilitaetslogik sind zentral."}}],demo:{title:{en:"Pressure and conductivity monitoring",de:"Druck- und Leitfaehigkeitsueberwachung"},beforeLabel:{en:"Unstable sensor trend",de:"Instabiler Sensortrend"},afterLabel:{en:"Stable therapy window",de:"Stabiles Therapiefenster"},explanation:{en:"Dialysis safety depends on trends and thresholds across multiple sensors, not one single measurement.",de:"Dialysesicherheit haengt von Trends und Schwellwerten mehrerer Sensoren ab, nicht von einer Einzelmessung."},filters:[{en:"Trend filter",de:"Trendfilter"},{en:"Conductivity check",de:"Leitfaehigkeitspruefung"},{en:"Pressure alarm",de:"Druckalarm"}],clipSteps:[{en:"Blood pumped",de:"Blut gepumpt"},{en:"Dialysate flows",de:"Dialysat fliesst"},{en:"Sensors compare",de:"Sensoren vergleichen"},{en:"Clamp if unsafe",de:"Klemme bei Gefahr"}]}},{id:"endoscope",name:{en:"Video Endoscope",de:"Videoendoskop"},category:{en:"Optical Imaging",de:"Optische Bildgebung"},short:{en:"Uses illumination, miniature imaging, controls, and processing to view internal anatomy.",de:"Nutzt Beleuchtung, Miniaturbildgebung, Steuerung und Verarbeitung fuer innere Anatomie."},model:"endoscope",overview:{en:"A video endoscope is an optical-electronic imaging chain. Light is guided to tissue, reflected light is captured by a tiny sensor, and the processor improves color, contrast, noise, and sharpness in real time.",de:"Ein Videoendoskop ist eine optisch-elektronische Bildkette. Licht wird zum Gewebe gefuehrt, reflektiertes Licht von einem kleinen Sensor aufgenommen, und der Prozessor verbessert Farbe, Kontrast, Rauschen und Schaerfe in Echtzeit."},workflow:[{en:"LED or xenon light is guided to the distal tip.",de:"LED- oder Xenonlicht wird zur distalen Spitze gefuehrt."},{en:"Optics focus reflected light onto an image sensor.",de:"Optik fokussiert reflektiertes Licht auf einen Bildsensor."},{en:"Sensor pixels convert photons to charge and digital video.",de:"Sensorpixel wandeln Photonen in Ladung und digitales Video."},{en:"Image processing corrects color, noise, contrast, and edges.",de:"Bildverarbeitung korrigiert Farbe, Rauschen, Kontrast und Kanten."}],deepDive:[{title:{en:"Illumination path",de:"Beleuchtungspfad"},body:{en:"The light source must deliver enough illumination without overheating tissue. Drivers regulate LED current, temperature sensors protect the source, and optics or fiber bundles guide light to the tip. Automatic exposure adjusts brightness when tissue distance changes.",de:"Die Lichtquelle muss genug Beleuchtung liefern, ohne Gewebe zu ueberhitzen. Treiber regeln LED-Strom, Temperatursensoren schuetzen die Quelle, und Optik oder Faserbuendel fuehren Licht zur Spitze. Automatische Belichtung passt Helligkeit an, wenn sich der Gewebeabstand aendert."}},{title:{en:"Image sensor readout",de:"Bildsensorauslesung"},body:{en:"CMOS pixels integrate photocharge, then row/column circuits read the values through amplifiers and ADCs. Timing, rolling shutter, dark current, gain, white balance, and cable signal integrity strongly affect the final picture.",de:"CMOS-Pixel integrieren Photoladung, danach lesen Zeilen-/Spaltenschaltungen die Werte ueber Verstaerker und ADCs aus. Timing, Rolling Shutter, Dunkelstrom, Gain, Weissabgleich und Kabelsignalintegritaet beeinflussen das Endbild stark."}},{title:{en:"Processing pipeline",de:"Verarbeitungskette"},body:{en:"The processor applies demosaicing, denoising, color correction, contrast enhancement, edge sharpening, fog reduction, and sometimes narrow-band imaging. Each filter improves readability but can also create artifacts, so real-time tuning matters.",de:"Der Prozessor nutzt Demosaicing, Rauschminderung, Farbkorrektur, Kontrastverstaerkung, Kantenschaerfung, Nebelreduktion und manchmal Narrow-Band-Imaging. Jeder Filter verbessert Lesbarkeit, kann aber Artefakte erzeugen, deshalb ist Echtzeitabstimmung wichtig."}}],parts:[{id:"handle",name:{en:"Control Handle",de:"Bediengriff"},function:{en:"Holds controls for bending, image capture, and irrigation.",de:"Traegt Bedienelemente fuer Abwinklung, Bildaufnahme und Spuelung."},details:{en:"Ergonomics matter because the operator controls fine movement.",de:"Ergonomie ist wichtig, weil feine Bewegung gesteuert wird."},electrotechnics:{en:"Buttons, encoders, sealed switches, and cable routing connect to embedded control.",de:"Tasten, Encoder, dichte Schalter und Kabelfuehrung verbinden sich mit Embedded-Steuerung."}},{id:"light",name:{en:"Light Source",de:"Lichtquelle"},function:{en:"Illuminates tissue through fibers or LEDs.",de:"Beleuchtet Gewebe ueber Fasern oder LEDs."},details:{en:"Brightness must be controlled to avoid glare and heat.",de:"Helligkeit muss gegen Blendung und Waerme geregelt werden."},electrotechnics:{en:"LED drivers, current control, temperature sensing, and exposure feedback are used.",de:"LED-Treiber, Stromregelung, Temperaturmessung und Belichtungsfeedback werden genutzt."}},{id:"sensor",name:{en:"Distal Image Sensor",de:"Distaler Bildsensor"},function:{en:"Converts reflected light into video data.",de:"Wandelt reflektiertes Licht in Videodaten."},details:{en:"Tiny optics and sensor noise limit image quality.",de:"Miniaturoptik und Sensorrauschen begrenzen Bildqualitaet."},electrotechnics:{en:"CMOS readout, ADCs, clocking, cable integrity, and shielding matter.",de:"CMOS-Auslesung, ADCs, Taktung, Kabelintegritaet und Schirmung sind wichtig."}},{id:"processor",name:{en:"Video Processor",de:"Videoprozessor"},function:{en:"Cleans and maps the live image.",de:"Bereinigt und mappt das Livebild."},details:{en:"Real-time processing must keep latency low.",de:"Echtzeitverarbeitung muss die Latenz niedrig halten."},electrotechnics:{en:"Digital filters, frame buffers, color pipelines, and display interfaces meet here.",de:"Digitale Filter, Framebuffer, Farbketten und Displayinterfaces treffen hier zusammen."}}],demo:{title:{en:"Live image enhancement",de:"Livebildverbesserung"},beforeLabel:{en:"Low-light noisy image",de:"Rauschiges Schwachlichtbild"},afterLabel:{en:"Corrected endoscopic view",de:"Korrigierte Endoskopieansicht"},explanation:{en:"Endoscopy depends on optics and real-time video processing: gain helps brightness, but denoising and color correction keep the image believable.",de:"Endoskopie haengt von Optik und Echtzeitvideo ab: Gain hilft Helligkeit, aber Rauschminderung und Farbkorrektur halten das Bild glaubwuerdig."},filters:[{en:"Auto exposure",de:"Auto-Belichtung"},{en:"Denoising",de:"Rauschminderung"},{en:"Color correction",de:"Farbkorrektur"}],clipSteps:[{en:"Light emitted",de:"Licht ausgesendet"},{en:"Tissue reflects",de:"Gewebe reflektiert"},{en:"Sensor reads",de:"Sensor liest"},{en:"Processor enhances",de:"Prozessor verbessert"}]}}];var F1=N0();const z1=ah(F1),tv="http://localhost:8000",bh=[];async function nv(s){const e=await fetch(`${tv}${s}`);if(!e.ok)throw new Error(`Request failed: ${e.status}`);return e.json()}async function O1(s,e=8){try{return await nv(`/api/ecg/generate?bpm=${s}&seconds=${e}`)}catch{const t=H1(s,e);return bh.unshift({id:`local-${Date.now()}`,name:"Generated ECG",heart_rate:t.heart_rate,duration:t.duration,filter_used:!1}),t}}async function B1(s){try{const e=await fetch(`${tv}/api/ecg/analyze`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`Analysis failed: ${e.status}`);return e.json()}catch{const e=V1(s);return bh.unshift({id:`upload-${Date.now()}`,name:e.name||s.name,heart_rate:e.heart_rate,duration:e.duration,filter_used:!!e.filter_used}),e}}function G1(){return nv("/api/ecg/history").catch(()=>bh)}function H1(s,e){const r=e*250,o=60/s,l=[],u=[],d=[];for(let f=0;f<r;f+=1){const p=f/250;let v=.04*Math.sin(2*Math.PI*.35*p)+.02*Math.sin(2*Math.PI*8*p);for(let _=.7;_<e;_+=o)v+=1.15*Math.exp(-((p-_)**2)/9e-4),v-=.18*Math.exp(-((p-(_-.045))**2)/35e-5),v-=.22*Math.exp(-((p-(_+.05))**2)/45e-5),v+=.12*Math.exp(-((p-(_-.18))**2)/.004),v+=.28*Math.exp(-((p-(_+.26))**2)/.01);u.push(Number(p.toFixed(3))),d.push(Number(v.toFixed(4)))}for(let f=.7;f<e;f+=o)l.push(Math.round(f*250));return{sample_rate:250,duration:e,heart_rate:s,time:u,voltage:d,r_peaks:l,notes:"Browser fallback ECG. Educational demo only."}}function V1(s){const e=s.apply_filter?W1(s.voltage):s.voltage,t=X1(e,s.sample_rate),r=Number((s.time[s.time.length-1]-s.time[0]).toFixed(3));let o=0;if(t.length>1){const l=t.slice(1).map((d,f)=>s.time[d]-s.time[t[f]]),u=l.reduce((d,f)=>d+f,0)/l.length;o=u>0?Math.round(60/u):0}return{name:s.name,sample_rate:s.sample_rate,duration:r,heart_rate:o,time:s.time,voltage:e,raw_voltage:s.voltage,r_peaks:t,filter_used:s.apply_filter,notes:"Browser fallback ECG analysis. Educational demo only."}}function W1(s){return s.map((e,t)=>{const r=s.slice(Math.max(0,t-3),Math.min(s.length,t+4));return Number((r.reduce((o,l)=>o+l,0)/r.length).toFixed(4))})}function X1(s,e){const t=s.reduce((f,p)=>f+p,0)/s.length,r=s.reduce((f,p)=>f+(p-t)**2,0)/s.length,o=t+.65*Math.sqrt(r),l=Math.max(1,Math.round(e*.28)),u=[];let d=-l;for(let f=1;f<s.length-1;f+=1)s[f]>s[f-1]&&s[f]>s[f+1]&&s[f]>o&&f-d>=l&&(u.push(f),d=f);return u}function j1(){const[s,e]=Rt.useState(74),[t,r]=Rt.useState(250),[o,l]=Rt.useState(!0),[u,d]=Rt.useState(null),[f,p]=Rt.useState([]),[v,_]=Rt.useState(!1),[g,x]=Rt.useState(""),E=Rt.useRef(null);async function w(F=s){_(!0),x("");try{const k=await O1(F);d(k),S()}catch{x("Could not load ECG data. Check that the backend is running.")}finally{_(!1)}}Rt.useEffect(()=>{w(74),S()},[]);async function S(){try{p(await G1())}catch{p([])}}function y(F){const k=F.split(/\r?\n/).map(R=>R.trim()).filter(Boolean),N=[],H=[];for(const R of k){const A=R.split(/[;,]/).map(z=>Number(z.trim()));A.length>=2&&Number.isFinite(A[0])&&Number.isFinite(A[1])&&(N.push(A[0]),H.push(A[1]))}return{time:N,voltage:H}}async function I(F){if(F){_(!0),x("");try{const k=await F.text(),N=y(k);if(N.voltage.length<20)throw new Error("Need at least 20 numeric rows with time and voltage columns.");const H=await B1({name:F.name.replace(/\.[^.]+$/,""),sample_rate:t,apply_filter:o,time:N.time,voltage:N.voltage});d(H),S()}catch(k){x(k instanceof Error?k.message:"Could not analyze CSV file.")}finally{_(!1)}}}function P(){window.print()}const C=Rt.useMemo(()=>u?{x:u.r_peaks.map(F=>u.time[F]),y:u.r_peaks.map(F=>u.voltage[F])}:{x:[],y:[]},[u]);return Rt.useEffect(()=>{!u||!E.current||z1.react(E.current,[{x:u.time,y:u.voltage,type:"scatter",mode:"lines",line:{color:"#0f766e",width:2},name:"ECG"},{x:C.x,y:C.y,type:"scatter",mode:"markers",marker:{color:"#e11d48",size:8},name:"R peaks"}],{autosize:!0,height:360,margin:{l:42,r:20,t:16,b:40},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"#f8fafc",xaxis:{title:"Time (s)",gridcolor:"#e2e8f0"},yaxis:{title:"Voltage (mV)",gridcolor:"#e2e8f0"},legend:{orientation:"h"}},{responsive:!0,displaylogo:!1})},[u,C.x,C.y]),j.jsxs("section",{className:"wide-panel",children:[j.jsxs("div",{className:"section-title",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:"ECG Analysis Lab"}),j.jsx("h2",{children:"Generated ECG monitor"})]}),j.jsx($0,{size:26,"aria-hidden":"true"})]}),j.jsxs("div",{className:"ecg-controls",children:[j.jsxs("label",{children:["Target BPM",j.jsx("input",{type:"range",min:"45",max:"150",value:s,onChange:F=>e(Number(F.target.value))})]}),j.jsxs("label",{children:["CSV sample rate",j.jsx("input",{type:"number",min:"50",max:"1000",value:t,onChange:F=>r(Number(F.target.value))})]}),j.jsxs("label",{className:"check-row",children:[j.jsx("input",{type:"checkbox",checked:o,onChange:F=>l(F.target.checked)}),"Smooth uploaded CSV"]}),j.jsxs("strong",{children:[s," bpm"]}),j.jsxs("button",{onClick:()=>w(),disabled:v,children:[j.jsx(a_,{size:17}),"Generate"]}),j.jsxs("label",{className:"upload-button",children:[j.jsx(l_,{size:17}),"Upload CSV",j.jsx("input",{type:"file",accept:".csv,.txt",onChange:F=>{var k;return I(((k=F.target.files)==null?void 0:k[0])||null)}})]}),j.jsxs("button",{onClick:P,disabled:!u,children:[j.jsx(t_,{size:17}),"Report"]})]}),g&&j.jsx("p",{className:"error",children:g}),u&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"ecg-stat-row",children:[j.jsxs("div",{children:[j.jsx("span",{children:"Calculated heart rate"}),j.jsxs("strong",{children:[u.heart_rate," bpm"]})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Sample rate"}),j.jsxs("strong",{children:[u.sample_rate," Hz"]})]}),j.jsxs("div",{children:[j.jsx("span",{children:"R peaks found"}),j.jsx("strong",{children:u.r_peaks.length})]}),j.jsxs("div",{children:[j.jsx("span",{children:"Filter"}),j.jsx("strong",{children:u.filter_used?"On":"Off"})]})]}),j.jsx("div",{ref:E,className:"plot"}),j.jsxs("div",{className:"report-panel",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:"ECG Report Generator"}),j.jsx("h3",{children:u.name||"Generated ECG Demo"})]}),j.jsxs("p",{children:["Heart rate: ",j.jsxs("strong",{children:[u.heart_rate," bpm"]}),". Duration: ",j.jsxs("strong",{children:[u.duration,"s"]}),". R peaks: ",j.jsx("strong",{children:u.r_peaks.length}),". This report is for biomedical education only."]})]})]}),j.jsxs("div",{className:"history-panel",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:"Analysis history"}),j.jsx("h3",{children:"Latest ECG runs"})]}),f.length===0?j.jsx("span",{children:"No saved runs yet."}):f.slice(0,5).map(F=>j.jsxs("article",{children:[j.jsx("strong",{children:F.name}),j.jsxs("span",{children:[F.heart_rate||"n/a"," bpm - ",F.duration,"s - filter ",F.filter_used?"on":"off"]})]},F.id))]})]})}function q1({lang:s}){const[e,t]=Rt.useState(window.location.hash||"#/"),r=e.startsWith("#/device/")?e.replace("#/device/",""):"",o=Rt.useMemo(()=>vd.find(g=>g.id===r),[r]),[l,u]=Rt.useState(""),[d,f]=Rt.useState("model"),p=(o==null?void 0:o.parts.find(g=>g.id===l))||(o==null?void 0:o.parts[0]);if(Rt.useEffect(()=>{function g(){t(window.location.hash||"#/")}return window.addEventListener("hashchange",g),()=>window.removeEventListener("hashchange",g)},[]),Rt.useEffect(()=>{o&&!o.parts.some(g=>g.id===l)&&u(o.parts[0].id)},[o,l]),Rt.useEffect(()=>{f("model")},[o==null?void 0:o.id]),!o)return j.jsxs(j.Fragment,{children:[j.jsxs("section",{className:"explorer-hero",children:[j.jsxs("div",{className:"hero-copy",children:[j.jsx("p",{className:"label",children:s==="en"?"Interactive biomedical engineering education":"Interaktive Medizintechnik-Lernplattform"}),j.jsx("h1",{children:"MedTech Device Explorer"}),j.jsx("p",{children:s==="en"?"Choose a medical device and learn it as an engineering system: 3D parts, electrotechnics, signal processing, image processing, safety, and operation.":"Waehle ein medizinisches Geraet und lerne es als technisches System: 3D-Bauteile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung."})]}),j.jsxs("div",{className:"hero-stats",children:[j.jsxs("span",{children:[j.jsx(Q0,{size:18})," ",vd.length," ",s==="en"?"devices":"Geraete"]}),j.jsxs("span",{children:[j.jsx(ku,{size:18})," ",s==="en"?"clickable 3D parts":"anklickbare 3D-Teile"]}),j.jsxs("span",{children:[j.jsx(c_,{size:18})," ",s==="en"?"engineering-first explanations":"Erklaerungen mit Elektrotechnik"]})]})]}),j.jsx("section",{className:"device-library page-library",children:vd.map(g=>j.jsxs("a",{className:"library-card",href:`#/device/${g.id}`,children:[j.jsx("span",{children:kt(g.category,s)}),j.jsx("strong",{children:kt(g.name,s)}),j.jsx("small",{children:kt(g.short,s)})]},g.id))})]});const v=[{id:"model",icon:j.jsx(ku,{size:18}),label:s==="en"?"3D model + explanation":"3D-Modell + Erklaerung",short:s==="en"?"parts":"Teile"},{id:"use",icon:j.jsx(am,{size:18}),label:s==="en"?"Short use video":"Kurzes Bedienvideo",short:s==="en"?"use":"Bedienung"},{id:"results",icon:j.jsx(lm,{size:18}),label:s==="en"?"Results before / after":"Ergebnis vorher / nachher",short:s==="en"?"results":"Ergebnis"},{id:"electro",icon:j.jsx(om,{size:18}),label:"Elektrotechnik GET 1/2",short:"GET"}],_=K1(o.model,s);return j.jsxs(j.Fragment,{children:[j.jsxs("a",{className:"back-link",href:"#/",children:[j.jsx(Z0,{size:18}),s==="en"?"Device library":"Geraetebibliothek"]}),j.jsx("section",{className:"device-page-hero",children:j.jsxs("div",{children:[j.jsx("p",{className:"label",children:kt(o.category,s)}),j.jsx("h1",{children:kt(o.name,s)}),j.jsx("p",{children:kt(o.overview,s)})]})}),j.jsxs("section",{className:"study-shell",children:[j.jsx("div",{className:"study-tabs",role:"tablist","aria-label":s==="en"?"Device study sections":"Geraete-Lernbereiche",children:v.map(g=>j.jsxs("button",{type:"button",role:"tab","aria-selected":d===g.id,className:d===g.id?"active":"",onClick:()=>f(g.id),title:g.label,children:[g.icon,j.jsx("span",{children:g.label}),j.jsx("small",{children:g.short})]},g.id))}),d==="model"&&j.jsxs(j.Fragment,{children:[j.jsxs("section",{className:"device-workspace device-page",children:[j.jsxs("div",{className:"model-panel pro-model-panel",children:[j.jsxs("div",{className:"section-title",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:s==="en"?"Interactive professional teaching model":"Interaktives professionelles Lernmodell"}),j.jsx("h2",{children:kt(o.name,s)})]}),j.jsx(ku,{size:24})]}),j.jsx(N1,{device:o,selectedPartId:(p==null?void 0:p.id)||"",onSelectPart:u}),j.jsx("p",{className:"canvas-hint",children:s==="en"?"Drag to rotate. Click a part or choose it from the list. The models are custom procedural 3D assets, so they stay free to use and deploy.":"Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen. Die Modelle sind eigene prozedurale 3D-Assets und bleiben kostenlos nutzbar."})]}),p&&j.jsxs("aside",{className:"lesson-panel",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:s==="en"?"Selected part":"Ausgewaehltes Teil"}),j.jsx("h2",{children:kt(p.name,s)}),j.jsx("p",{children:kt(p.function,s)}),j.jsx("small",{children:kt(p.details,s)})]}),j.jsxs("div",{className:"electro-box",children:[j.jsx(e_,{size:22}),j.jsxs("div",{children:[j.jsx("strong",{children:s==="en"?"Electrotechnics link":"Bezug zur Elektrotechnik"}),j.jsx("span",{children:kt(p.electrotechnics,s)})]})]}),j.jsx("div",{className:"part-buttons",children:o.parts.map(g=>j.jsx("button",{className:g.id===p.id?"active":"",onClick:()=>u(g.id),children:kt(g.name,s)},g.id))})]})]}),j.jsxs("section",{className:"learning-grid",children:[j.jsxs("article",{className:"lesson-card",children:[j.jsx(J0,{size:24}),j.jsx("h2",{children:s==="en"?"System idea":"Systemidee"}),j.jsx("p",{children:kt(o.overview,s)})]}),j.jsxs("article",{className:"lesson-card",children:[j.jsx(i_,{size:24}),j.jsx("h2",{children:s==="en"?"Signal / energy path":"Signal- / Energiepfad"}),j.jsx("ol",{children:o.workflow.map(g=>j.jsx("li",{children:kt(g,s)},kt(g,"en")))})]}),j.jsxs("article",{className:"lesson-card",children:[j.jsx(r_,{size:24}),j.jsx("h2",{children:s==="en"?"What to understand":"Was man verstehen soll"}),j.jsx("p",{children:s==="en"?"Read each device as an electrical system first: source, impedance, energy conversion, conditioning, sampling, control, isolation, and safety.":"Lies jedes Geraet zuerst als elektrisches System: Quelle, Impedanz, Energiewandlung, Aufbereitung, Abtastung, Regelung, Isolation und Sicherheit."})]})]})]}),d==="use"&&j.jsxs("section",{className:"study-panel",children:[j.jsxs("div",{className:"section-title",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:s==="en"?"Short use video":"Kurzes Bedienvideo"}),j.jsx("h2",{children:kt(o.demo.title,s)})]}),j.jsx(am,{size:24})]}),j.jsxs("div",{className:`clip-strip ${o.model}`,children:[o.demo.clipSteps.map((g,x)=>j.jsxs("div",{className:"clip-step",children:[j.jsx("span",{children:x+1}),j.jsx("strong",{children:kt(g,s)})]},kt(g,"en"))),j.jsx("div",{className:"moving-pulse"})]}),j.jsx("div",{className:"usage-grid",children:o.workflow.map((g,x)=>j.jsxs("article",{children:[j.jsx("span",{children:String(x+1).padStart(2,"0")}),j.jsx("p",{children:kt(g,s)})]},kt(g,"en")))})]}),d==="results"&&j.jsxs("section",{className:"study-panel",children:[j.jsxs("div",{className:"section-title",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:s==="en"?"Result understanding":"Ergebnis verstehen"}),j.jsx("h2",{children:s==="en"?"Before and after processing":"Vor und nach der Verarbeitung"})]}),j.jsx(lm,{size:24})]}),j.jsxs("div",{className:`before-after ${o.model}`,children:[j.jsxs("div",{children:[j.jsx("span",{children:kt(o.demo.beforeLabel,s)}),j.jsx("div",{className:"image-sim before"})]}),j.jsxs("div",{children:[j.jsx("span",{children:kt(o.demo.afterLabel,s)}),j.jsx("div",{className:"image-sim after"})]})]}),j.jsx("p",{className:"result-explanation",children:kt(o.demo.explanation,s)}),j.jsx("div",{className:"filter-row",children:o.demo.filters.map(g=>j.jsx("span",{children:kt(g,s)},kt(g,"en")))})]}),d==="electro"&&j.jsxs("section",{className:"study-panel electro-study",children:[j.jsxs("div",{className:"section-title",children:[j.jsxs("div",{children:[j.jsx("p",{className:"label",children:s==="en"?"GET 1/2 study connection":"GET 1/2 Studienbezug"}),j.jsx("h2",{children:s==="en"?"Elektrotechnik behind this device":"Elektrotechnik hinter diesem Geraet"})]}),j.jsx(om,{size:24})]}),j.jsx("p",{className:"study-intro",children:s==="en"?"This section avoids textbook quotations and maps the device to the fundamentals normally trained in GET 1/2: circuit laws, fields, energy, time constants, frequency response, measurement loading, sampling, motors, power electronics, and safety.":"Dieser Bereich zitiert kein Lehrbuch, sondern ordnet das Geraet den typischen GET-1/2-Grundlagen zu: Kirchhoff, Felder, Energie, Zeitkonstanten, Frequenzgang, Messbelastung, Abtastung, Motoren, Leistungselektronik und Sicherheit."}),j.jsx("div",{className:"electro-concept-grid",children:_.map(g=>j.jsxs("article",{children:[j.jsx("h3",{children:g.title}),j.jsx("strong",{children:g.relation}),j.jsx("p",{children:g.detail})]},g.title))}),o.deepDive&&j.jsx("div",{className:"deep-dive-grid electro-dive",children:o.deepDive.map(g=>j.jsxs("article",{children:[j.jsx("h3",{children:kt(g.title,s)}),j.jsx("p",{children:kt(g.body,s)})]},kt(g.title,"en")))})]})]}),o.id==="ecg"&&j.jsx(j1,{})]})}function K1(s,e){const t=e==="en"?[{title:"Kirchhoff, impedance, and loading",relation:"Every sensor is connected to a circuit, so the measurement changes if the input impedance is wrong.",detail:"Model the source with an internal resistance or impedance, then ask what the amplifier, cable capacitance, protection resistors, and filters do to the measured voltage. This is GET 1 material in a medical setting: voltage division, node equations, equivalent circuits, and the difference between an ideal voltage and a real source."},{title:"Frequency response and time constants",relation:"The useful signal is selected by RC/RL behavior, not by magic software.",detail:"A capacitor blocks DC after the transient, an inductor resists current change, and RC filters create cutoff frequencies, phase shift, rise time, settling, and delay. In devices, the wrong cutoff can hide slow physiology, smear fast events, or pass mains interference."},{title:"Safety, isolation, and energy",relation:"Patient-connected devices are electrical systems with strict limits on current and stored energy.",detail:"Think in terms of leakage current paths, isolation barriers, fuses, protective earth, creepage distance, transformer isolation, capacitor discharge, and worst-case fault loops. GET energy formulas such as 1/2 C U^2 and 1/2 L I^2 become safety questions, not just exercises."}]:[{title:"Kirchhoff, Impedanz und Messbelastung",relation:"Jeder Sensor haengt an einer Schaltung; die Messung veraendert sich, wenn die Eingangsimpedanz falsch ist.",detail:"Modelliere die Quelle mit Innenwiderstand oder Impedanz und frage dann, was Verstaerker, Kabelkapazitaet, Schutzwiderstaende und Filter mit der gemessenen Spannung machen. Das ist GET 1 im MedTech-Kontext: Spannungsteiler, Knotengleichungen, Ersatzschaltungen und der Unterschied zwischen idealer Spannung und realer Quelle."},{title:"Frequenzgang und Zeitkonstanten",relation:"Das Nutzsignal wird durch RC/RL-Verhalten ausgewaehlt, nicht durch Magie in Software.",detail:"Ein Kondensator sperrt Gleichanteile nach dem Einschwingen, eine Induktivitaet widersetzt sich Stroemaenderungen, und RC-Filter erzeugen Grenzfrequenz, Phasenverschiebung, Anstiegszeit, Einschwingen und Verzoegerung. Im Geraet kann eine falsche Grenzfrequenz langsame Physiologie verstecken, schnelle Ereignisse verschmieren oder Netzstoerung durchlassen."},{title:"Sicherheit, Isolation und Energie",relation:"Patientennahe Geraete sind elektrische Systeme mit engen Grenzen fuer Strom und gespeicherte Energie.",detail:"Denke an Ableitstrompfade, Isolationsbarrieren, Sicherungen, Schutzleiter, Kriechstrecken, Trafo-Isolation, Kondensatorentladung und Fehlerstromschleifen. GET-Energieformeln wie 1/2 C U^2 und 1/2 L I^2 werden hier Sicherheitsfragen, nicht nur Rechenaufgaben."}],r=e==="en"?{ecg:[{title:"Differential measurement and CMRR",relation:"The ECG is a tiny differential voltage riding on much larger common-mode interference.",detail:"Use superposition thinking: the amplifier should amplify the electrode difference while rejecting the voltage that both electrodes share. Input bias current, electrode impedance mismatch, cable capacitance, and driven-right-leg feedback decide whether 50 Hz noise dominates the trace."},{title:"ADC resolution and aliasing",relation:"Sampling turns an analog waveform into numbers, but the ADC can only preserve what the analog front end prepares.",detail:"Resolution sets the smallest voltage step; sampling rate sets the highest reconstructable frequency. Before the ADC, anti-alias filtering must remove components that would fold into the ECG band. This links directly to quantization, reference voltage, Nyquist frequency, and SNR."}],ct:[{title:"High voltage, rectification, and regulation",relation:"The X-ray tube is a controlled high-voltage load.",detail:"The generator converts mains or DC bus energy into regulated kV and tube current using rectifiers, switching stages, transformers, insulation, feedback, and heat limits. kVp is voltage and penetration; mA is charge flow and photon statistics."},{title:"Detector current and noise",relation:"The detector is a measurement chain for very small photo-generated signals.",detail:"Photodiode current, integration capacitors, dark current, shot noise, amplifier noise, multiplexing, and ADC timing determine whether attenuation data are stable enough for reconstruction. This is measurement electronics plus statistics."}],ultrasound:[{title:"Piezoelectric source and receiver",relation:"The probe converts electrical field energy into acoustic energy and back.",detail:"A voltage pulse strains the crystal; returning pressure produces charge. Capacitance, resonance, damping, matching layers, transmit/receive switching, and low-noise amplification decide bandwidth and image quality."},{title:"Time of flight and beamforming",relation:"Depth is calculated from delay; direction is shaped by phase timing.",detail:"The system delays channels so echoes from one direction add constructively. GET concepts appear as phase, propagation speed, superposition, impedance matching, and frequency-dependent attenuation."}],mri:[{title:"Magnetic fields and inductors",relation:"MRI is built around field strength, coil current, and stored magnetic energy.",detail:"The main magnet, gradient coils, and RF coils are electromagnetic systems. Inductance resists fast current changes, so gradient drivers need high voltage, controlled current ramps, cooling, and protection against stored energy."},{title:"RF resonance and signal pickup",relation:"The RF coil is a tuned circuit that excites and receives weak radio-frequency signals.",detail:"Capacitance and inductance set resonance. Matching, Q factor, shielding, preamplifier noise, and induced voltage are the GET bridge between circuit theory and the measured MR signal."}],xray:[{title:"Tube physics as a circuit load",relation:"Voltage accelerates electrons; current controls how many electrons hit the anode.",detail:"The filament, cathode, anode, high-voltage insulation, rectification, and exposure control form a power circuit. Heat, duty cycle, and stored capacitance are central engineering limits."},{title:"Detector and contrast chain",relation:"The image begins as charge or current before it becomes a picture.",detail:"Scintillators, photodiodes, charge integration, gain calibration, ADCs, and spatial filtering turn X-ray intensity into pixels. Noise and dynamic range explain why exposure and processing matter."}]}:{ecg:[{title:"Differenzmessung und CMRR",relation:"Das EKG ist eine sehr kleine Differenzspannung auf einer viel groesseren Gleichtaktstoerung.",detail:"Nutze Superposition: Der Verstaerker soll die Differenz der Elektroden verstaerken und die gemeinsame Spannung beider Elektroden unterdruecken. Biasstrom, Elektrodenimpedanz, Kabelkapazitaet und Driven-Right-Leg-Rueckkopplung entscheiden, ob 50-Hz-Stoerung die Kurve dominiert."},{title:"ADC-Aufloesung und Aliasing",relation:"Abtastung macht aus einer analogen Kurve Zahlen, aber der ADC erhaelt nur, was die Analogstufe vorbereitet.",detail:"Aufloesung bestimmt den kleinsten Spannungsschritt; Abtastrate bestimmt die hoechste rekonstruierbare Frequenz. Vor dem ADC muss ein Anti-Alias-Filter Anteile entfernen, die in das EKG-Band zurueckgefaltet wuerden. Das verbindet Quantisierung, Referenzspannung, Nyquist-Frequenz und SNR."}],ct:[{title:"Hochspannung, Gleichrichtung und Regelung",relation:"Die Roentgenroehre ist eine geregelte Hochspannungslast.",detail:"Der Generator wandelt Netz- oder Zwischenkreisenergie ueber Gleichrichter, Schaltstufen, Transformatoren, Isolation, Rueckkopplung und Waermegrenzen in geregelte kV und Roehrenstrom. kVp bedeutet Spannung und Durchdringung; mA bedeutet Ladungsfluss und Photonenstatistik."},{title:"Detektorstrom und Rauschen",relation:"Der Detektor ist eine Messkette fuer sehr kleine photoerzeugte Signale.",detail:"Photodiodenstrom, Integrationskondensatoren, Dunkelstrom, Schrotrauschen, Verstaerkerrauschen, Multiplexing und ADC-Timing bestimmen, ob Abschwaechungsdaten stabil genug fuer Rekonstruktion sind. Das ist Messelektronik plus Statistik."}],ultrasound:[{title:"Piezoquelle und Empfaenger",relation:"Die Sonde wandelt elektrische Feldenergie in akustische Energie und zurueck.",detail:"Ein Spannungspuls verformt den Kristall; zurueckkehrender Druck erzeugt Ladung. Kapazitaet, Resonanz, Daempfung, Anpassschichten, Sende-/Empfangsumschaltung und rauscharme Verstaerkung bestimmen Bandbreite und Bildqualitaet."},{title:"Laufzeit und Beamforming",relation:"Tiefe entsteht aus Verzoegerung; Richtung entsteht aus Phasen-Timing.",detail:"Das System verzoegert Kanaele so, dass Echos aus einer Richtung konstruktiv addiert werden. GET-Begriffe erscheinen als Phase, Ausbreitungsgeschwindigkeit, Superposition, Impedanzanpassung und frequenzabhaengige Daempfung."}],mri:[{title:"Magnetfelder und Induktivitaeten",relation:"MRT basiert auf Feldstaerke, Spulenstrom und gespeicherter magnetischer Energie.",detail:"Hauptmagnet, Gradientenspulen und HF-Spulen sind elektromagnetische Systeme. Induktivitaet widersetzt sich schneller Stroemaenderung; deshalb brauchen Gradiententreiber hohe Spannung, geregelte Stromrampen, Kuehlung und Schutz gegen gespeicherte Energie."},{title:"HF-Resonanz und Signalaufnahme",relation:"Die HF-Spule ist ein abgestimmter Kreis, der schwache Hochfrequenzsignale anregt und empfaengt.",detail:"Kapazitaet und Induktivitaet setzen die Resonanz. Anpassung, Guete, Schirmung, Vorverstaerkerrauschen und induzierte Spannung verbinden Schaltungstheorie mit dem gemessenen MR-Signal."}],xray:[{title:"Roentgenroehre als Schaltungslast",relation:"Spannung beschleunigt Elektronen; Strom bestimmt, wie viele Elektronen die Anode treffen.",detail:"Filament, Kathode, Anode, Hochspannungsisolation, Gleichrichtung und Belichtungssteuerung bilden eine Leistungsschaltung. Waerme, Einschaltdauer und gespeicherte Kapazitaet sind zentrale Grenzen."},{title:"Detektor- und Kontrastkette",relation:"Das Bild beginnt als Ladung oder Strom, bevor es ein Bild wird.",detail:"Szintillatoren, Photodioden, Ladungsintegration, Gain-Kalibrierung, ADCs und raeumliche Filter machen aus Roentgenintensitaet Pixel. Rauschen und Dynamikbereich erklaeren, warum Belichtung und Verarbeitung wichtig sind."}]},o=e==="en"?[{title:"Sensors, actuators, and control loops",relation:"Therapy devices often combine measurement with action.",detail:"A sensor measures pressure, flow, position, current, or voltage; a controller compares it to a target; a motor, valve, pump, or switch changes the physical system. That is feedback: stability, delay, gain, saturation, and fault detection."},{title:"Motors and power stages",relation:"Motion and pumping come from electromagnetic energy conversion.",detail:"Motor torque, back EMF, PWM, bridge circuits, current sensing, inductive flyback, and thermal limits turn GET field and circuit ideas into practical device mechanics."}]:[{title:"Sensoren, Aktoren und Regelkreise",relation:"Therapiegeraete kombinieren oft Messung mit Handlung.",detail:"Ein Sensor misst Druck, Flow, Position, Strom oder Spannung; ein Regler vergleicht mit einem Sollwert; Motor, Ventil, Pumpe oder Schalter veraendert das physikalische System. Das ist Rueckkopplung: Stabilitaet, Verzoegerung, Verstaerkung, Saettigung und Fehlererkennung."},{title:"Motoren und Leistungsstufen",relation:"Bewegung und Pumpen entstehen aus elektromagnetischer Energiewandlung.",detail:"Motordrehmoment, Gegen-EMK, PWM, Brueckenschaltungen, Strommessung, induktiver Freilauf und thermische Grenzen machen aus GET-Feld- und Schaltungswissen praktische Geraetemechanik."}];return[...r[s]||o,...t]}function Y1(){const[s,e]=Rt.useState(()=>localStorage.getItem("lang")||"en"),[t,r]=Rt.useState(()=>localStorage.getItem("theme")==="dark");return Rt.useEffect(()=>{document.documentElement.dataset.theme=t?"dark":"light",localStorage.setItem("theme",t?"dark":"light")},[t]),Rt.useEffect(()=>{localStorage.setItem("lang",s)},[s]),j.jsxs("main",{className:"app-shell",children:[j.jsxs("header",{className:"site-header",children:[j.jsxs("a",{href:"#/",className:"brand",children:[j.jsx("span",{children:"MedTech"}),j.jsx("strong",{children:"Device Explorer"})]}),j.jsxs("div",{className:"top-actions",children:[j.jsxs("button",{onClick:()=>e(s==="en"?"de":"en"),title:"Change language",children:[j.jsx(n_,{size:18}),s==="en"?"DE":"EN"]}),j.jsxs("button",{onClick:()=>r(!t),title:"Toggle dark mode",children:[t?j.jsx(o_,{size:18}):j.jsx(s_,{size:18}),t?"Light":"Dark"]})]})]}),j.jsx(q1,{lang:s})]})}j0.createRoot(document.getElementById("root")).render(j.jsx(O0.StrictMode,{children:j.jsx(Y1,{})}));
