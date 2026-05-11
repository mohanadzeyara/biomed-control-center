import{g as dh,r as j0}from"./charts-CKiOGpj1.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Iu={exports:{}},za={},Nu={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function X0(){if(im)return pt;im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,w={};function S(U,se,Ne){this.props=U,this.context=se,this.refs=w,this.updater=Ne||x}S.prototype.isReactComponent={},S.prototype.setState=function(U,se){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,se,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function g(){}g.prototype=S.prototype;function I(U,se,Ne){this.props=U,this.context=se,this.refs=w,this.updater=Ne||x}var P=I.prototype=new g;P.constructor=I,M(P,S.prototype),P.isPureReactComponent=!0;var R=Array.isArray,F=Object.prototype.hasOwnProperty,N={current:null},z={key:!0,ref:!0,__self:!0,__source:!0};function W(U,se,Ne){var J,ue={},Ee=null,ye=null;if(se!=null)for(J in se.ref!==void 0&&(ye=se.ref),se.key!==void 0&&(Ee=""+se.key),se)F.call(se,J)&&!z.hasOwnProperty(J)&&(ue[J]=se[J]);var be=arguments.length-2;if(be===1)ue.children=Ne;else if(1<be){for(var Ue=Array(be),et=0;et<be;et++)Ue[et]=arguments[et+2];ue.children=Ue}if(U&&U.defaultProps)for(J in be=U.defaultProps,be)ue[J]===void 0&&(ue[J]=be[J]);return{$$typeof:s,type:U,key:Ee,ref:ye,props:ue,_owner:N.current}}function C(U,se){return{$$typeof:s,type:U.type,key:se,ref:U.ref,props:U.props,_owner:U._owner}}function b(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function G(U){var se={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ne){return se[Ne]})}var re=/\/+/g;function $(U,se){return typeof U=="object"&&U!==null&&U.key!=null?G(""+U.key):se.toString(36)}function oe(U,se,Ne,J,ue){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var ye=!1;if(U===null)ye=!0;else switch(Ee){case"string":case"number":ye=!0;break;case"object":switch(U.$$typeof){case s:case e:ye=!0}}if(ye)return ye=U,ue=ue(ye),U=J===""?"."+$(ye,0):J,R(ue)?(Ne="",U!=null&&(Ne=U.replace(re,"$&/")+"/"),oe(ue,se,Ne,"",function(et){return et})):ue!=null&&(b(ue)&&(ue=C(ue,Ne+(!ue.key||ye&&ye.key===ue.key?"":(""+ue.key).replace(re,"$&/")+"/")+U)),se.push(ue)),1;if(ye=0,J=J===""?".":J+":",R(U))for(var be=0;be<U.length;be++){Ee=U[be];var Ue=J+$(Ee,be);ye+=oe(Ee,se,Ne,Ue,ue)}else if(Ue=y(U),typeof Ue=="function")for(U=Ue.call(U),be=0;!(Ee=U.next()).done;)Ee=Ee.value,Ue=J+$(Ee,be++),ye+=oe(Ee,se,Ne,Ue,ue);else if(Ee==="object")throw se=String(U),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return ye}function he(U,se,Ne){if(U==null)return U;var J=[],ue=0;return oe(U,J,"","",function(Ee){return se.call(Ne,Ee,ue++)}),J}function ae(U){if(U._status===-1){var se=U._result;se=se(),se.then(function(Ne){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ne)},function(Ne){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ne)}),U._status===-1&&(U._status=0,U._result=se)}if(U._status===1)return U._result.default;throw U._result}var pe={current:null},O={transition:null},le={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:O,ReactCurrentOwner:N};function te(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:he,forEach:function(U,se,Ne){he(U,function(){se.apply(this,arguments)},Ne)},count:function(U){var se=0;return he(U,function(){se++}),se},toArray:function(U){return he(U,function(se){return se})||[]},only:function(U){if(!b(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=S,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=I,pt.StrictMode=r,pt.Suspense=f,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,pt.act=te,pt.cloneElement=function(U,se,Ne){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=M({},U.props),ue=U.key,Ee=U.ref,ye=U._owner;if(se!=null){if(se.ref!==void 0&&(Ee=se.ref,ye=N.current),se.key!==void 0&&(ue=""+se.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(Ue in se)F.call(se,Ue)&&!z.hasOwnProperty(Ue)&&(J[Ue]=se[Ue]===void 0&&be!==void 0?be[Ue]:se[Ue])}var Ue=arguments.length-2;if(Ue===1)J.children=Ne;else if(1<Ue){be=Array(Ue);for(var et=0;et<Ue;et++)be[et]=arguments[et+2];J.children=be}return{$$typeof:s,type:U.type,key:ue,ref:Ee,props:J,_owner:ye}},pt.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=W,pt.createFactory=function(U){var se=W.bind(null,U);return se.type=U,se},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:d,render:U}},pt.isValidElement=b,pt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ae}},pt.memo=function(U,se){return{$$typeof:p,type:U,compare:se===void 0?null:se}},pt.startTransition=function(U){var se=O.transition;O.transition={};try{U()}finally{O.transition=se}},pt.unstable_act=te,pt.useCallback=function(U,se){return pe.current.useCallback(U,se)},pt.useContext=function(U){return pe.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return pe.current.useDeferredValue(U)},pt.useEffect=function(U,se){return pe.current.useEffect(U,se)},pt.useId=function(){return pe.current.useId()},pt.useImperativeHandle=function(U,se,Ne){return pe.current.useImperativeHandle(U,se,Ne)},pt.useInsertionEffect=function(U,se){return pe.current.useInsertionEffect(U,se)},pt.useLayoutEffect=function(U,se){return pe.current.useLayoutEffect(U,se)},pt.useMemo=function(U,se){return pe.current.useMemo(U,se)},pt.useReducer=function(U,se,Ne){return pe.current.useReducer(U,se,Ne)},pt.useRef=function(U){return pe.current.useRef(U)},pt.useState=function(U){return pe.current.useState(U)},pt.useSyncExternalStore=function(U,se,Ne){return pe.current.useSyncExternalStore(U,se,Ne)},pt.useTransition=function(){return pe.current.useTransition()},pt.version="18.3.1",pt}var rm;function hh(){return rm||(rm=1,Nu.exports=X0()),Nu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function q0(){if(sm)return za;sm=1;var s=hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,f,p){var v,_={},y=null,x=null;p!==void 0&&(y=""+p),f.key!==void 0&&(y=""+f.key),f.ref!==void 0&&(x=f.ref);for(v in f)r.call(f,v)&&!l.hasOwnProperty(v)&&(_[v]=f[v]);if(d&&d.defaultProps)for(v in f=d.defaultProps,f)_[v]===void 0&&(_[v]=f[v]);return{$$typeof:e,type:d,key:y,ref:x,props:_,_owner:o.current}}return za.Fragment=t,za.jsx=u,za.jsxs=u,za}var am;function K0(){return am||(am=1,Iu.exports=q0()),Iu.exports}var D=K0(),Mt=hh();const Y0=dh(Mt);var cl={},Uu={exports:{}},Fn={},zu={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function $0(){return om||(om=1,(function(s){function e(O,le){var te=O.length;O.push(le);e:for(;0<te;){var U=te-1>>>1,se=O[U];if(0<o(se,le))O[U]=le,O[te]=se,te=U;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var le=O[0],te=O.pop();if(te!==le){O[0]=te;e:for(var U=0,se=O.length,Ne=se>>>1;U<Ne;){var J=2*(U+1)-1,ue=O[J],Ee=J+1,ye=O[Ee];if(0>o(ue,te))Ee<se&&0>o(ye,ue)?(O[U]=ye,O[Ee]=te,U=Ee):(O[U]=ue,O[J]=te,U=J);else if(Ee<se&&0>o(ye,te))O[U]=ye,O[Ee]=te,U=Ee;else break e}}return le}function o(O,le){var te=O.sortIndex-le.sortIndex;return te!==0?te:O.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var f=[],p=[],v=1,_=null,y=3,x=!1,M=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(O){for(var le=t(p);le!==null;){if(le.callback===null)r(p);else if(le.startTime<=O)r(p),le.sortIndex=le.expirationTime,e(f,le);else break;le=t(p)}}function R(O){if(w=!1,P(O),!M)if(t(f)!==null)M=!0,ae(F);else{var le=t(p);le!==null&&pe(R,le.startTime-O)}}function F(O,le){M=!1,w&&(w=!1,g(W),W=-1),x=!0;var te=y;try{for(P(le),_=t(f);_!==null&&(!(_.expirationTime>le)||O&&!G());){var U=_.callback;if(typeof U=="function"){_.callback=null,y=_.priorityLevel;var se=U(_.expirationTime<=le);le=s.unstable_now(),typeof se=="function"?_.callback=se:_===t(f)&&r(f),P(le)}else r(f);_=t(f)}if(_!==null)var Ne=!0;else{var J=t(p);J!==null&&pe(R,J.startTime-le),Ne=!1}return Ne}finally{_=null,y=te,x=!1}}var N=!1,z=null,W=-1,C=5,b=-1;function G(){return!(s.unstable_now()-b<C)}function re(){if(z!==null){var O=s.unstable_now();b=O;var le=!0;try{le=z(!0,O)}finally{le?$():(N=!1,z=null)}}else N=!1}var $;if(typeof I=="function")$=function(){I(re)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,he=oe.port2;oe.port1.onmessage=re,$=function(){he.postMessage(null)}}else $=function(){S(re,0)};function ae(O){z=O,N||(N=!0,$())}function pe(O,le){W=S(function(){O(s.unstable_now())},le)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){M||x||(M=!0,ae(F))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_getFirstCallbackNode=function(){return t(f)},s.unstable_next=function(O){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var te=y;y=le;try{return O()}finally{y=te}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,le){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var te=y;y=O;try{return le()}finally{y=te}},s.unstable_scheduleCallback=function(O,le,te){var U=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?U+te:U):te=U,O){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=te+se,O={id:v++,callback:le,priorityLevel:O,startTime:te,expirationTime:se,sortIndex:-1},te>U?(O.sortIndex=te,e(p,O),t(f)===null&&O===t(p)&&(w?(g(W),W=-1):w=!0,pe(R,te-U))):(O.sortIndex=se,e(f,O),M||x||(M=!0,ae(F))),O},s.unstable_shouldYield=G,s.unstable_wrapCallback=function(O){var le=y;return function(){var te=y;y=le;try{return O.apply(this,arguments)}finally{y=te}}}})(Fu)),Fu}var lm;function Z0(){return lm||(lm=1,zu.exports=$0()),zu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Q0(){if(cm)return Fn;cm=1;var s=hh(),e=Z0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function y(n){return f.call(_,n)?!0:f.call(v,n)?!1:p.test(n)?_[n]=!0:(v[n]=!0,!1)}function x(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,c){if(i===null||typeof i>"u"||x(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,h,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(g,I);S[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(g,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(g,I);S[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function P(n,i,a,c){var h=S.hasOwnProperty(i)?S[i]:null;(h!==null?h.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,h,c)&&(a=null),c||h===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):h.mustUseProperty?n[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,c=h.attributeNamespace,a===null?n.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),N=Symbol.for("react.portal"),z=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),G=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),pe=Symbol.for("react.offscreen"),O=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,U;function se(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ne=!1;function J(n,i){if(!n||Ne)return"";Ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var h=ee.stack.split(`
`),m=c.stack.split(`
`),E=h.length-1,L=m.length-1;1<=E&&0<=L&&h[E]!==m[L];)L--;for(;1<=E&&0<=L;E--,L--)if(h[E]!==m[L]){if(E!==1||L!==1)do if(E--,L--,0>L||h[E]!==m[L]){var B=`
`+h[E].replace(" at new "," at ");return n.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",n.displayName)),B}while(1<=E&&0<=L);break}}}finally{Ne=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?se(n):""}function ue(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case z:return"Fragment";case N:return"Portal";case C:return"Profiler";case W:return"StrictMode";case $:return"Suspense";case oe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case b:return(n._context.displayName||"Context")+".Provider";case re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case he:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function ye(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===W?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function et(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Dt(n){n._valueTracker||(n._valueTracker=et(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function V(n,i){var a=i.checked;return te({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function wn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function gt(n,i){i=i.checked,i!=null&&P(n,"checked",i,!1)}function ht(n,i){gt(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Pt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Pt(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Pt(n,i,a){(i!=="number"||Ut(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Xe=Array.isArray;function k(n,i,a,c){if(n=n.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<n.length;a++)h=i.hasOwnProperty("$"+n[a].value),n[a].selected!==h&&(n[a].selected=h),h&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,h=0;h<n.length;h++){if(n[h].value===a){n[h].selected=!0,c&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Xe(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function me(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function We(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,ze=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,h){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function dt(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Be.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function $e(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function tt(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,h=$e(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,h):n[a]=h}}var Ge=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ft(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ct=null;function q(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ce=null,fe=null;function ke(n){if(n=Ma(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=wo(i),Re(n.stateNode,n.type,i))}}function De(n){ce?fe?fe.push(n):fe=[n]:ce=n}function at(){if(ce){var n=ce,i=fe;if(fe=ce=null,ke(n),i)for(n=0;n<i.length;n++)ke(i[n])}}function Ot(n,i){return n(i)}function en(){}var Et=!1;function kn(n,i,a){if(Et)return n(i,a);Et=!0;try{return Ot(n,i,a)}finally{Et=!1,(ce!==null||fe!==null)&&(en(),at())}}function Tn(n,i){var a=n.stateNode;if(a===null)return null;var c=wo(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var is=!1;if(d)try{var Ki={};Object.defineProperty(Ki,"passive",{get:function(){is=!0}}),window.addEventListener("test",Ki,Ki),window.removeEventListener("test",Ki,Ki)}catch{is=!1}function bi(n,i,a,c,h,m,E,L,B){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(_e){this.onError(_e)}}var Ai=!1,br=null,Ar=!1,Yi=null,no={onError:function(n){Ai=!0,br=n}};function rs(n,i,a,c,h,m,E,L,B){Ai=!1,br=null,bi.apply(no,arguments)}function io(n,i,a,c,h,m,E,L,B){if(rs.apply(this,arguments),Ai){if(Ai){var ee=br;Ai=!1,br=null}else throw Error(t(198));Ar||(Ar=!0,Yi=ee)}}function gi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ro(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function so(n){if(gi(n)!==n)throw Error(t(188))}function ic(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(c=h.return,c!==null){a=c;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return so(h),n;if(m===c)return so(h),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=h,c=m;else{for(var E=!1,L=h.child;L;){if(L===a){E=!0,a=h,c=m;break}if(L===c){E=!0,c=h,a=m;break}L=L.sibling}if(!E){for(L=m.child;L;){if(L===a){E=!0,a=m,c=h;break}if(L===c){E=!0,c=m,a=h;break}L=L.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function ao(n){return n=ic(n),n!==null?oo(n):null}function oo(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=oo(n);if(i!==null)return i;n=n.sibling}return null}var A=e.unstable_scheduleCallback,K=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,j=e.unstable_now,Se=e.unstable_getCurrentPriorityLevel,Ce=e.unstable_ImmediatePriority,Ie=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,qe=null,ot=null;function Tt(n){if(ot&&typeof ot.onCommitFiberRoot=="function")try{ot.onCommitFiberRoot(qe,n,void 0,(n.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:Ye,Wt=Math.log,St=Math.LN2;function Ye(n){return n>>>=0,n===0?32:31-(Wt(n)/St|0)|0}var Kt=64,xt=4194304;function hn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ri(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,h=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var L=E&~h;L!==0?c=hn(L):(m&=E,m!==0&&(c=hn(m)))}else E=a&~h,E!==0?c=hn(E):m!==0&&(c=hn(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&h)===0&&(h=c&-c,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-bt(i),h=1<<a,c|=n[a],i&=~h;return c}function bn(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,h=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-bt(m),L=1<<E,B=h[E];B===-1?((L&a)===0||(L&c)!==0)&&(h[E]=bn(L,i)):B<=i&&(n.expiredLanes|=L),m&=~L}}function kt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function An(){var n=Kt;return Kt<<=1,(Kt&4194240)===0&&(Kt=64),n}function mn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $t(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-bt(i),n[i]=a}function gn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var h=31-bt(a),m=1<<h;i[h]=0,c[h]=-1,n[h]=-1,a&=~m}}function Cr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-bt(a),h=1<<c;h&i|n[c]&i&&(n[c]|=i),a&=~h}}var vt=0;function Ih(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Nh,rc,Uh,zh,Fh,sc=!1,lo=[],$i=null,Zi=null,Qi=null,aa=new Map,oa=new Map,Ji=[],fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(n,i){switch(n){case"focusin":case"focusout":$i=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":aa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oa.delete(i.pointerId)}}function la(n,i,a,c,h,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ma(i),i!==null&&rc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function pv(n,i,a,c,h){switch(i){case"focusin":return $i=la($i,n,i,a,c,h),!0;case"dragenter":return Zi=la(Zi,n,i,a,c,h),!0;case"mouseover":return Qi=la(Qi,n,i,a,c,h),!0;case"pointerover":var m=h.pointerId;return aa.set(m,la(aa.get(m)||null,n,i,a,c,h)),!0;case"gotpointercapture":return m=h.pointerId,oa.set(m,la(oa.get(m)||null,n,i,a,c,h)),!0}return!1}function Bh(n){var i=Pr(n.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=ro(a),i!==null){n.blockedOn=i,Fh(n.priority,function(){Uh(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function co(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=oc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Ct=c,a.target.dispatchEvent(c),Ct=null}else return i=Ma(a),i!==null&&rc(i),n.blockedOn=a,!1;i.shift()}return!0}function Gh(n,i,a){co(n)&&a.delete(i)}function mv(){sc=!1,$i!==null&&co($i)&&($i=null),Zi!==null&&co(Zi)&&(Zi=null),Qi!==null&&co(Qi)&&(Qi=null),aa.forEach(Gh),oa.forEach(Gh)}function ca(n,i){n.blockedOn===i&&(n.blockedOn=null,sc||(sc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,mv)))}function ua(n){function i(h){return ca(h,n)}if(0<lo.length){ca(lo[0],n);for(var a=1;a<lo.length;a++){var c=lo[a];c.blockedOn===n&&(c.blockedOn=null)}}for($i!==null&&ca($i,n),Zi!==null&&ca(Zi,n),Qi!==null&&ca(Qi,n),aa.forEach(i),oa.forEach(i),a=0;a<Ji.length;a++)c=Ji[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ji.length&&(a=Ji[0],a.blockedOn===null);)Bh(a),a.blockedOn===null&&Ji.shift()}var ss=R.ReactCurrentBatchConfig,uo=!0;function gv(n,i,a,c){var h=vt,m=ss.transition;ss.transition=null;try{vt=1,ac(n,i,a,c)}finally{vt=h,ss.transition=m}}function vv(n,i,a,c){var h=vt,m=ss.transition;ss.transition=null;try{vt=4,ac(n,i,a,c)}finally{vt=h,ss.transition=m}}function ac(n,i,a,c){if(uo){var h=oc(n,i,a,c);if(h===null)wc(n,i,c,ho,a),Oh(n,c);else if(pv(h,n,i,a,c))c.stopPropagation();else if(Oh(n,c),i&4&&-1<fv.indexOf(n)){for(;h!==null;){var m=Ma(h);if(m!==null&&Nh(m),m=oc(n,i,a,c),m===null&&wc(n,i,c,ho,a),m===h)break;h=m}h!==null&&c.stopPropagation()}else wc(n,i,c,null,a)}}var ho=null;function oc(n,i,a,c){if(ho=null,n=q(c),n=Pr(n),n!==null)if(i=gi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ro(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ho=n,null}function Hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Se()){case Ce:return 1;case Ie:return 4;case Fe:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var er=null,lc=null,fo=null;function Vh(){if(fo)return fo;var n,i=lc,a=i.length,c,h="value"in er?er.value:er.textContent,m=h.length;for(n=0;n<a&&i[n]===h[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===h[m-c];c++);return fo=h.slice(n,1<c?1-c:void 0)}function po(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function mo(){return!0}function Wh(){return!1}function Hn(n){function i(a,c,h,m,E){this._reactName=a,this._targetInst=h,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var L in n)n.hasOwnProperty(L)&&(a=n[L],this[L]=a?a(m):m[L]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?mo:Wh,this.isPropagationStopped=Wh,this}return te(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=mo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=mo)},persist:function(){},isPersistent:mo}),i}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Hn(as),da=te({},as,{view:0,detail:0}),_v=Hn(da),uc,dc,ha,go=te({},da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ha&&(ha&&n.type==="mousemove"?(uc=n.screenX-ha.screenX,dc=n.screenY-ha.screenY):dc=uc=0,ha=n),uc)},movementY:function(n){return"movementY"in n?n.movementY:dc}}),jh=Hn(go),yv=te({},go,{dataTransfer:0}),xv=Hn(yv),Sv=te({},da,{relatedTarget:0}),hc=Hn(Sv),Mv=te({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=Hn(Mv),wv=te({},as,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tv=Hn(wv),bv=te({},as,{data:0}),Xh=Hn(bv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Cv[n])?!!i[n]:!1}function fc(){return Pv}var Dv=te({},da,{key:function(n){if(n.key){var i=Av[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=po(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fc,charCode:function(n){return n.type==="keypress"?po(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?po(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=Hn(Dv),Lv=te({},go,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=Hn(Lv),Iv=te({},da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fc}),Nv=Hn(Iv),Uv=te({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),zv=Hn(Uv),Fv=te({},go,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Ov=Hn(Fv),Bv=[9,13,27,32],pc=d&&"CompositionEvent"in window,fa=null;d&&"documentMode"in document&&(fa=document.documentMode);var Gv=d&&"TextEvent"in window&&!fa,Kh=d&&(!pc||fa&&8<fa&&11>=fa),Yh=" ",$h=!1;function Zh(n,i){switch(n){case"keyup":return Bv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function Hv(n,i){switch(n){case"compositionend":return Qh(i);case"keypress":return i.which!==32?null:($h=!0,Yh);case"textInput":return n=i.data,n===Yh&&$h?null:n;default:return null}}function Vv(n,i){if(os)return n==="compositionend"||!pc&&Zh(n,i)?(n=Vh(),fo=lc=er=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Kh&&i.locale!=="ko"?null:i.data;default:return null}}var Wv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Wv[n.type]:i==="textarea"}function ef(n,i,a,c){De(c),i=So(i,"onChange"),0<i.length&&(a=new cc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var pa=null,ma=null;function jv(n){yf(n,0)}function vo(n){var i=hs(n);if(_t(i))return n}function Xv(n,i){if(n==="change")return i}var tf=!1;if(d){var mc;if(d){var gc="oninput"in document;if(!gc){var nf=document.createElement("div");nf.setAttribute("oninput","return;"),gc=typeof nf.oninput=="function"}mc=gc}else mc=!1;tf=mc&&(!document.documentMode||9<document.documentMode)}function rf(){pa&&(pa.detachEvent("onpropertychange",sf),ma=pa=null)}function sf(n){if(n.propertyName==="value"&&vo(ma)){var i=[];ef(i,ma,n,q(n)),kn(jv,i)}}function qv(n,i,a){n==="focusin"?(rf(),pa=i,ma=a,pa.attachEvent("onpropertychange",sf)):n==="focusout"&&rf()}function Kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return vo(ma)}function Yv(n,i){if(n==="click")return vo(i)}function $v(n,i){if(n==="input"||n==="change")return vo(i)}function Zv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:Zv;function ga(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var h=a[c];if(!f.call(i,h)||!si(n[h],i[h]))return!1}return!0}function af(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function of(n,i){var a=af(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=af(a)}}function lf(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?lf(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function cf(){for(var n=window,i=Ut();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ut(n.document)}return i}function vc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Qv(n){var i=cf(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&lf(a.ownerDocument.documentElement,a)){if(c!==null&&vc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=a.textContent.length,m=Math.min(c.start,h);c=c.end===void 0?m:Math.min(c.end,h),!n.extend&&m>c&&(h=c,c=m,m=h),h=of(a,m);var E=of(a,c);h&&E&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Jv=d&&"documentMode"in document&&11>=document.documentMode,ls=null,_c=null,va=null,yc=!1;function uf(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yc||ls==null||ls!==Ut(c)||(c=ls,"selectionStart"in c&&vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),va&&ga(va,c)||(va=c,c=So(_c,"onSelect"),0<c.length&&(i=new cc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ls)))}function _o(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var cs={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},xc={},df={};d&&(df=document.createElement("div").style,"AnimationEvent"in window||(delete cs.animationend.animation,delete cs.animationiteration.animation,delete cs.animationstart.animation),"TransitionEvent"in window||delete cs.transitionend.transition);function yo(n){if(xc[n])return xc[n];if(!cs[n])return n;var i=cs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in df)return xc[n]=i[a];return n}var hf=yo("animationend"),ff=yo("animationiteration"),pf=yo("animationstart"),mf=yo("transitionend"),gf=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(n,i){gf.set(n,i),l(i,[n])}for(var Sc=0;Sc<vf.length;Sc++){var Mc=vf[Sc],e0=Mc.toLowerCase(),t0=Mc[0].toUpperCase()+Mc.slice(1);tr(e0,"on"+t0)}tr(hf,"onAnimationEnd"),tr(ff,"onAnimationIteration"),tr(pf,"onAnimationStart"),tr("dblclick","onDoubleClick"),tr("focusin","onFocus"),tr("focusout","onBlur"),tr(mf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function _f(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,io(c,i,void 0,n),n.currentTarget=null}function yf(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],h=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var L=c[E],B=L.instance,ee=L.currentTarget;if(L=L.listener,B!==m&&h.isPropagationStopped())break e;_f(h,L,ee),m=B}else for(E=0;E<c.length;E++){if(L=c[E],B=L.instance,ee=L.currentTarget,L=L.listener,B!==m&&h.isPropagationStopped())break e;_f(h,L,ee),m=B}}}if(Ar)throw n=Yi,Ar=!1,Yi=null,n}function Bt(n,i){var a=i[Pc];a===void 0&&(a=i[Pc]=new Set);var c=n+"__bubble";a.has(c)||(xf(i,n,2,!1),a.add(c))}function Ec(n,i,a){var c=0;i&&(c|=4),xf(a,n,c,i)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ya(n){if(!n[xo]){n[xo]=!0,r.forEach(function(a){a!=="selectionchange"&&(n0.has(a)||Ec(a,!1,n),Ec(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[xo]||(i[xo]=!0,Ec("selectionchange",!1,i))}}function xf(n,i,a,c){switch(Hh(i)){case 1:var h=gv;break;case 4:h=vv;break;default:h=ac}a=h.bind(null,i,a,n),h=void 0,!is||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),c?h!==void 0?n.addEventListener(i,a,{capture:!0,passive:h}):n.addEventListener(i,a,!0):h!==void 0?n.addEventListener(i,a,{passive:h}):n.addEventListener(i,a,!1)}function wc(n,i,a,c,h){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var L=c.stateNode.containerInfo;if(L===h||L.nodeType===8&&L.parentNode===h)break;if(E===4)for(E=c.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===h||B.nodeType===8&&B.parentNode===h))return;E=E.return}for(;L!==null;){if(E=Pr(L),E===null)return;if(B=E.tag,B===5||B===6){c=m=E;continue e}L=L.parentNode}}c=c.return}kn(function(){var ee=m,_e=q(a),xe=[];e:{var ge=gf.get(n);if(ge!==void 0){var Le=cc,He=n;switch(n){case"keypress":if(po(a)===0)break e;case"keydown":case"keyup":Le=kv;break;case"focusin":He="focus",Le=hc;break;case"focusout":He="blur",Le=hc;break;case"beforeblur":case"afterblur":Le=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=xv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Nv;break;case hf:case ff:case pf:Le=Ev;break;case mf:Le=zv;break;case"scroll":Le=_v;break;case"wheel":Le=Ov;break;case"copy":case"cut":case"paste":Le=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=qh}var Ve=(i&4)!==0,Zt=!Ve&&n==="scroll",Y=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var X=ee,Z;X!==null;){Z=X;var we=Z.stateNode;if(Z.tag===5&&we!==null&&(Z=we,Y!==null&&(we=Tn(X,Y),we!=null&&Ve.push(xa(X,we,Z)))),Zt)break;X=X.return}0<Ve.length&&(ge=new Le(ge,He,null,a,_e),xe.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&a!==Ct&&(He=a.relatedTarget||a.fromElement)&&(Pr(He)||He[Ri]))break e;if((Le||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(He=a.relatedTarget||a.toElement,Le=ee,He=He?Pr(He):null,He!==null&&(Zt=gi(He),He!==Zt||He.tag!==5&&He.tag!==6)&&(He=null)):(Le=null,He=ee),Le!==He)){if(Ve=jh,we="onMouseLeave",Y="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=qh,we="onPointerLeave",Y="onPointerEnter",X="pointer"),Zt=Le==null?ge:hs(Le),Z=He==null?ge:hs(He),ge=new Ve(we,X+"leave",Le,a,_e),ge.target=Zt,ge.relatedTarget=Z,we=null,Pr(_e)===ee&&(Ve=new Ve(Y,X+"enter",He,a,_e),Ve.target=Z,Ve.relatedTarget=Zt,we=Ve),Zt=we,Le&&He)t:{for(Ve=Le,Y=He,X=0,Z=Ve;Z;Z=us(Z))X++;for(Z=0,we=Y;we;we=us(we))Z++;for(;0<X-Z;)Ve=us(Ve),X--;for(;0<Z-X;)Y=us(Y),Z--;for(;X--;){if(Ve===Y||Y!==null&&Ve===Y.alternate)break t;Ve=us(Ve),Y=us(Y)}Ve=null}else Ve=null;Le!==null&&Sf(xe,ge,Le,Ve,!1),He!==null&&Zt!==null&&Sf(xe,Zt,He,Ve,!0)}}e:{if(ge=ee?hs(ee):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var je=Xv;else if(Jh(ge))if(tf)je=$v;else{je=Kv;var Ze=qv}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=Yv);if(je&&(je=je(n,ee))){ef(xe,je,a,_e);break e}Ze&&Ze(n,ge,ee),n==="focusout"&&(Ze=ge._wrapperState)&&Ze.controlled&&ge.type==="number"&&Pt(ge,"number",ge.value)}switch(Ze=ee?hs(ee):window,n){case"focusin":(Jh(Ze)||Ze.contentEditable==="true")&&(ls=Ze,_c=ee,va=null);break;case"focusout":va=_c=ls=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,uf(xe,a,_e);break;case"selectionchange":if(Jv)break;case"keydown":case"keyup":uf(xe,a,_e)}var Qe;if(pc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else os?Zh(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Kh&&a.locale!=="ko"&&(os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&os&&(Qe=Vh()):(er=_e,lc="value"in er?er.value:er.textContent,os=!0)),Ze=So(ee,rt),0<Ze.length&&(rt=new Xh(rt,n,null,a,_e),xe.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=Qh(a),Qe!==null&&(rt.data=Qe)))),(Qe=Gv?Hv(n,a):Vv(n,a))&&(ee=So(ee,"onBeforeInput"),0<ee.length&&(_e=new Xh("onBeforeInput","beforeinput",null,a,_e),xe.push({event:_e,listeners:ee}),_e.data=Qe))}yf(xe,i)})}function xa(n,i,a){return{instance:n,listener:i,currentTarget:a}}function So(n,i){for(var a=i+"Capture",c=[];n!==null;){var h=n,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Tn(n,a),m!=null&&c.unshift(xa(n,m,h)),m=Tn(n,i),m!=null&&c.push(xa(n,m,h))),n=n.return}return c}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sf(n,i,a,c,h){for(var m=i._reactName,E=[];a!==null&&a!==c;){var L=a,B=L.alternate,ee=L.stateNode;if(B!==null&&B===c)break;L.tag===5&&ee!==null&&(L=ee,h?(B=Tn(a,m),B!=null&&E.unshift(xa(a,B,L))):h||(B=Tn(a,m),B!=null&&E.push(xa(a,B,L)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var i0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function Mf(n){return(typeof n=="string"?n:""+n).replace(i0,`
`).replace(r0,"")}function Mo(n,i,a){if(i=Mf(i),Mf(n)!==i&&a)throw Error(t(425))}function Eo(){}var Tc=null,bc=null;function Ac(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Rc=typeof setTimeout=="function"?setTimeout:void 0,s0=typeof clearTimeout=="function"?clearTimeout:void 0,Ef=typeof Promise=="function"?Promise:void 0,a0=typeof queueMicrotask=="function"?queueMicrotask:typeof Ef<"u"?function(n){return Ef.resolve(null).then(n).catch(o0)}:Rc;function o0(n){setTimeout(function(){throw n})}function Cc(n,i){var a=i,c=0;do{var h=a.nextSibling;if(n.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(c===0){n.removeChild(h),ua(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=h}while(a);ua(i)}function nr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function wf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var ds=Math.random().toString(36).slice(2),vi="__reactFiber$"+ds,Sa="__reactProps$"+ds,Ri="__reactContainer$"+ds,Pc="__reactEvents$"+ds,l0="__reactListeners$"+ds,c0="__reactHandles$"+ds;function Pr(n){var i=n[vi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Ri]||a[vi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=wf(n);n!==null;){if(a=n[vi])return a;n=wf(n)}return i}n=a,a=n.parentNode}return null}function Ma(n){return n=n[vi]||n[Ri],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function hs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function wo(n){return n[Sa]||null}var Dc=[],fs=-1;function ir(n){return{current:n}}function Gt(n){0>fs||(n.current=Dc[fs],Dc[fs]=null,fs--)}function zt(n,i){fs++,Dc[fs]=n.current,n.current=i}var rr={},vn=ir(rr),Ln=ir(!1),Dr=rr;function ps(n,i){var a=n.type.contextTypes;if(!a)return rr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function In(n){return n=n.childContextTypes,n!=null}function To(){Gt(Ln),Gt(vn)}function Tf(n,i,a){if(vn.current!==rr)throw Error(t(168));zt(vn,i),zt(Ln,a)}function bf(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var h in c)if(!(h in i))throw Error(t(108,ye(n)||"Unknown",h));return te({},a,c)}function bo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||rr,Dr=vn.current,zt(vn,n),zt(Ln,Ln.current),!0}function Af(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=bf(n,i,Dr),c.__reactInternalMemoizedMergedChildContext=n,Gt(Ln),Gt(vn),zt(vn,n)):Gt(Ln),zt(Ln,a)}var Ci=null,Ao=!1,kc=!1;function Rf(n){Ci===null?Ci=[n]:Ci.push(n)}function u0(n){Ao=!0,Rf(n)}function sr(){if(!kc&&Ci!==null){kc=!0;var n=0,i=vt;try{var a=Ci;for(vt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ci=null,Ao=!1}catch(h){throw Ci!==null&&(Ci=Ci.slice(n+1)),A(Ce,sr),h}finally{vt=i,kc=!1}}return null}var ms=[],gs=0,Ro=null,Co=0,$n=[],Zn=0,kr=null,Pi=1,Di="";function Lr(n,i){ms[gs++]=Co,ms[gs++]=Ro,Ro=n,Co=i}function Cf(n,i,a){$n[Zn++]=Pi,$n[Zn++]=Di,$n[Zn++]=kr,kr=n;var c=Pi;n=Di;var h=32-bt(c)-1;c&=~(1<<h),a+=1;var m=32-bt(i)+h;if(30<m){var E=h-h%5;m=(c&(1<<E)-1).toString(32),c>>=E,h-=E,Pi=1<<32-bt(i)+h|a<<h|c,Di=m+n}else Pi=1<<m|a<<h|c,Di=n}function Lc(n){n.return!==null&&(Lr(n,1),Cf(n,1,0))}function Ic(n){for(;n===Ro;)Ro=ms[--gs],ms[gs]=null,Co=ms[--gs],ms[gs]=null;for(;n===kr;)kr=$n[--Zn],$n[Zn]=null,Di=$n[--Zn],$n[Zn]=null,Pi=$n[--Zn],$n[Zn]=null}var Vn=null,Wn=null,jt=!1,ai=null;function Pf(n,i){var a=ti(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Df(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=nr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Wn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=kr!==null?{id:Pi,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ti(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Vn=n,Wn=null,!0):!1;default:return!1}}function Nc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Uc(n){if(jt){var i=Wn;if(i){var a=i;if(!Df(n,i)){if(Nc(n))throw Error(t(418));i=nr(a.nextSibling);var c=Vn;i&&Df(n,i)?Pf(c,a):(n.flags=n.flags&-4097|2,jt=!1,Vn=n)}}else{if(Nc(n))throw Error(t(418));n.flags=n.flags&-4097|2,jt=!1,Vn=n}}}function kf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Po(n){if(n!==Vn)return!1;if(!jt)return kf(n),jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ac(n.type,n.memoizedProps)),i&&(i=Wn)){if(Nc(n))throw Lf(),Error(t(418));for(;i;)Pf(n,i),i=nr(i.nextSibling)}if(kf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Wn=nr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Wn=null}}else Wn=Vn?nr(n.stateNode.nextSibling):null;return!0}function Lf(){for(var n=Wn;n;)n=nr(n.nextSibling)}function vs(){Wn=Vn=null,jt=!1}function zc(n){ai===null?ai=[n]:ai.push(n)}var d0=R.ReactCurrentBatchConfig;function Ea(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var h=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var L=h.refs;E===null?delete L[m]:L[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Do(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function If(n){var i=n._init;return i(n._payload)}function Nf(n){function i(Y,X){if(n){var Z=Y.deletions;Z===null?(Y.deletions=[X],Y.flags|=16):Z.push(X)}}function a(Y,X){if(!n)return null;for(;X!==null;)i(Y,X),X=X.sibling;return null}function c(Y,X){for(Y=new Map;X!==null;)X.key!==null?Y.set(X.key,X):Y.set(X.index,X),X=X.sibling;return Y}function h(Y,X){return Y=fr(Y,X),Y.index=0,Y.sibling=null,Y}function m(Y,X,Z){return Y.index=Z,n?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<X?(Y.flags|=2,X):Z):(Y.flags|=2,X)):(Y.flags|=1048576,X)}function E(Y){return n&&Y.alternate===null&&(Y.flags|=2),Y}function L(Y,X,Z,we){return X===null||X.tag!==6?(X=Ru(Z,Y.mode,we),X.return=Y,X):(X=h(X,Z),X.return=Y,X)}function B(Y,X,Z,we){var je=Z.type;return je===z?_e(Y,X,Z.props.children,we,Z.key):X!==null&&(X.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&If(je)===X.type)?(we=h(X,Z.props),we.ref=Ea(Y,X,Z),we.return=Y,we):(we=tl(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=Ea(Y,X,Z),we.return=Y,we)}function ee(Y,X,Z,we){return X===null||X.tag!==4||X.stateNode.containerInfo!==Z.containerInfo||X.stateNode.implementation!==Z.implementation?(X=Cu(Z,Y.mode,we),X.return=Y,X):(X=h(X,Z.children||[]),X.return=Y,X)}function _e(Y,X,Z,we,je){return X===null||X.tag!==7?(X=Gr(Z,Y.mode,we,je),X.return=Y,X):(X=h(X,Z),X.return=Y,X)}function xe(Y,X,Z){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Ru(""+X,Y.mode,Z),X.return=Y,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case F:return Z=tl(X.type,X.key,X.props,null,Y.mode,Z),Z.ref=Ea(Y,null,X),Z.return=Y,Z;case N:return X=Cu(X,Y.mode,Z),X.return=Y,X;case ae:var we=X._init;return xe(Y,we(X._payload),Z)}if(Xe(X)||le(X))return X=Gr(X,Y.mode,Z,null),X.return=Y,X;Do(Y,X)}return null}function ge(Y,X,Z,we){var je=X!==null?X.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return je!==null?null:L(Y,X,""+Z,we);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:return Z.key===je?B(Y,X,Z,we):null;case N:return Z.key===je?ee(Y,X,Z,we):null;case ae:return je=Z._init,ge(Y,X,je(Z._payload),we)}if(Xe(Z)||le(Z))return je!==null?null:_e(Y,X,Z,we,null);Do(Y,Z)}return null}function Le(Y,X,Z,we,je){if(typeof we=="string"&&we!==""||typeof we=="number")return Y=Y.get(Z)||null,L(X,Y,""+we,je);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case F:return Y=Y.get(we.key===null?Z:we.key)||null,B(X,Y,we,je);case N:return Y=Y.get(we.key===null?Z:we.key)||null,ee(X,Y,we,je);case ae:var Ze=we._init;return Le(Y,X,Z,Ze(we._payload),je)}if(Xe(we)||le(we))return Y=Y.get(Z)||null,_e(X,Y,we,je,null);Do(X,we)}return null}function He(Y,X,Z,we){for(var je=null,Ze=null,Qe=X,rt=X=0,ln=null;Qe!==null&&rt<Z.length;rt++){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var At=ge(Y,Qe,Z[rt],we);if(At===null){Qe===null&&(Qe=ln);break}n&&Qe&&At.alternate===null&&i(Y,Qe),X=m(At,X,rt),Ze===null?je=At:Ze.sibling=At,Ze=At,Qe=ln}if(rt===Z.length)return a(Y,Qe),jt&&Lr(Y,rt),je;if(Qe===null){for(;rt<Z.length;rt++)Qe=xe(Y,Z[rt],we),Qe!==null&&(X=m(Qe,X,rt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return jt&&Lr(Y,rt),je}for(Qe=c(Y,Qe);rt<Z.length;rt++)ln=Le(Qe,Y,rt,Z[rt],we),ln!==null&&(n&&ln.alternate!==null&&Qe.delete(ln.key===null?rt:ln.key),X=m(ln,X,rt),Ze===null?je=ln:Ze.sibling=ln,Ze=ln);return n&&Qe.forEach(function(pr){return i(Y,pr)}),jt&&Lr(Y,rt),je}function Ve(Y,X,Z,we){var je=le(Z);if(typeof je!="function")throw Error(t(150));if(Z=je.call(Z),Z==null)throw Error(t(151));for(var Ze=je=null,Qe=X,rt=X=0,ln=null,At=Z.next();Qe!==null&&!At.done;rt++,At=Z.next()){Qe.index>rt?(ln=Qe,Qe=null):ln=Qe.sibling;var pr=ge(Y,Qe,At.value,we);if(pr===null){Qe===null&&(Qe=ln);break}n&&Qe&&pr.alternate===null&&i(Y,Qe),X=m(pr,X,rt),Ze===null?je=pr:Ze.sibling=pr,Ze=pr,Qe=ln}if(At.done)return a(Y,Qe),jt&&Lr(Y,rt),je;if(Qe===null){for(;!At.done;rt++,At=Z.next())At=xe(Y,At.value,we),At!==null&&(X=m(At,X,rt),Ze===null?je=At:Ze.sibling=At,Ze=At);return jt&&Lr(Y,rt),je}for(Qe=c(Y,Qe);!At.done;rt++,At=Z.next())At=Le(Qe,Y,rt,At.value,we),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?rt:At.key),X=m(At,X,rt),Ze===null?je=At:Ze.sibling=At,Ze=At);return n&&Qe.forEach(function(W0){return i(Y,W0)}),jt&&Lr(Y,rt),je}function Zt(Y,X,Z,we){if(typeof Z=="object"&&Z!==null&&Z.type===z&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case F:e:{for(var je=Z.key,Ze=X;Ze!==null;){if(Ze.key===je){if(je=Z.type,je===z){if(Ze.tag===7){a(Y,Ze.sibling),X=h(Ze,Z.props.children),X.return=Y,Y=X;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ae&&If(je)===Ze.type){a(Y,Ze.sibling),X=h(Ze,Z.props),X.ref=Ea(Y,Ze,Z),X.return=Y,Y=X;break e}a(Y,Ze);break}else i(Y,Ze);Ze=Ze.sibling}Z.type===z?(X=Gr(Z.props.children,Y.mode,we,Z.key),X.return=Y,Y=X):(we=tl(Z.type,Z.key,Z.props,null,Y.mode,we),we.ref=Ea(Y,X,Z),we.return=Y,Y=we)}return E(Y);case N:e:{for(Ze=Z.key;X!==null;){if(X.key===Ze)if(X.tag===4&&X.stateNode.containerInfo===Z.containerInfo&&X.stateNode.implementation===Z.implementation){a(Y,X.sibling),X=h(X,Z.children||[]),X.return=Y,Y=X;break e}else{a(Y,X);break}else i(Y,X);X=X.sibling}X=Cu(Z,Y.mode,we),X.return=Y,Y=X}return E(Y);case ae:return Ze=Z._init,Zt(Y,X,Ze(Z._payload),we)}if(Xe(Z))return He(Y,X,Z,we);if(le(Z))return Ve(Y,X,Z,we);Do(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,X!==null&&X.tag===6?(a(Y,X.sibling),X=h(X,Z),X.return=Y,Y=X):(a(Y,X),X=Ru(Z,Y.mode,we),X.return=Y,Y=X),E(Y)):a(Y,X)}return Zt}var _s=Nf(!0),Uf=Nf(!1),ko=ir(null),Lo=null,ys=null,Fc=null;function Oc(){Fc=ys=Lo=null}function Bc(n){var i=ko.current;Gt(ko),n._currentValue=i}function Gc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function xs(n,i){Lo=n,Fc=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function Qn(n){var i=n._currentValue;if(Fc!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(Lo===null)throw Error(t(308));ys=n,Lo.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Ir=null;function Hc(n){Ir===null?Ir=[n]:Ir.push(n)}function zf(n,i,a,c){var h=i.interleaved;return h===null?(a.next=a,Hc(i)):(a.next=h.next,h.next=a),i.interleaved=a,ki(n,c)}function ki(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var ar=!1;function Vc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ff(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Li(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function or(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(wt&2)!==0){var h=c.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),c.pending=i,ki(n,a)}return h=c.interleaved,h===null?(i.next=i,Hc(c)):(i.next=h.next,h.next=i),c.interleaved=i,ki(n,a)}function Io(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cr(n,a)}}function Of(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:c.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function No(n,i,a,c){var h=n.updateQueue;ar=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,L=h.shared.pending;if(L!==null){h.shared.pending=null;var B=L,ee=B.next;B.next=null,E===null?m=ee:E.next=ee,E=B;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,L=_e.lastBaseUpdate,L!==E&&(L===null?_e.firstBaseUpdate=ee:L.next=ee,_e.lastBaseUpdate=B))}if(m!==null){var xe=h.baseState;E=0,_e=ee=B=null,L=m;do{var ge=L.lane,Le=L.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:L.tag,payload:L.payload,callback:L.callback,next:null});e:{var He=n,Ve=L;switch(ge=i,Le=a,Ve.tag){case 1:if(He=Ve.payload,typeof He=="function"){xe=He.call(Le,xe,ge);break e}xe=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ve.payload,ge=typeof He=="function"?He.call(Le,xe,ge):He,ge==null)break e;xe=te({},xe,ge);break e;case 2:ar=!0}}L.callback!==null&&L.lane!==0&&(n.flags|=64,ge=h.effects,ge===null?h.effects=[L]:ge.push(L))}else Le={eventTime:Le,lane:ge,tag:L.tag,payload:L.payload,callback:L.callback,next:null},_e===null?(ee=_e=Le,B=xe):_e=_e.next=Le,E|=ge;if(L=L.next,L===null){if(L=h.shared.pending,L===null)break;ge=L,L=ge.next,ge.next=null,h.lastBaseUpdate=ge,h.shared.pending=null}}while(!0);if(_e===null&&(B=xe),h.baseState=B,h.firstBaseUpdate=ee,h.lastBaseUpdate=_e,i=h.shared.interleaved,i!==null){h=i;do E|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);zr|=E,n.lanes=E,n.memoizedState=xe}}function Bf(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],h=c.callback;if(h!==null){if(c.callback=null,c=a,typeof h!="function")throw Error(t(191,h));h.call(c)}}}var wa={},_i=ir(wa),Ta=ir(wa),ba=ir(wa);function Nr(n){if(n===wa)throw Error(t(174));return n}function Wc(n,i){switch(zt(ba,i),zt(Ta,n),zt(_i,wa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:We(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=We(i,n)}Gt(_i),zt(_i,i)}function Ss(){Gt(_i),Gt(Ta),Gt(ba)}function Gf(n){Nr(ba.current);var i=Nr(_i.current),a=We(i,n.type);i!==a&&(zt(Ta,n),zt(_i,a))}function jc(n){Ta.current===n&&(Gt(_i),Gt(Ta))}var Xt=ir(0);function Uo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xc=[];function qc(){for(var n=0;n<Xc.length;n++)Xc[n]._workInProgressVersionPrimary=null;Xc.length=0}var zo=R.ReactCurrentDispatcher,Kc=R.ReactCurrentBatchConfig,Ur=0,qt=null,tn=null,an=null,Fo=!1,Aa=!1,Ra=0,h0=0;function _n(){throw Error(t(321))}function Yc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function $c(n,i,a,c,h,m){if(Ur=m,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=n===null||n.memoizedState===null?g0:v0,n=a(c,h),Aa){m=0;do{if(Aa=!1,Ra=0,25<=m)throw Error(t(301));m+=1,an=tn=null,i.updateQueue=null,zo.current=_0,n=a(c,h)}while(Aa)}if(zo.current=Go,i=tn!==null&&tn.next!==null,Ur=0,an=tn=qt=null,Fo=!1,i)throw Error(t(300));return n}function Zc(){var n=Ra!==0;return Ra=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return an===null?qt.memoizedState=an=n:an=an.next=n,an}function Jn(){if(tn===null){var n=qt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var i=an===null?qt.memoizedState:an.next;if(i!==null)an=i,tn=n;else{if(n===null)throw Error(t(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},an===null?qt.memoizedState=an=n:an=an.next=n}return an}function Ca(n,i){return typeof i=="function"?i(n):i}function Qc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=tn,h=c.baseQueue,m=a.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}c.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,c=c.baseState;var L=E=null,B=null,ee=m;do{var _e=ee.lane;if((Ur&_e)===_e)B!==null&&(B=B.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var xe={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};B===null?(L=B=xe,E=c):B=B.next=xe,qt.lanes|=_e,zr|=_e}ee=ee.next}while(ee!==null&&ee!==m);B===null?E=c:B.next=L,si(c,i.memoizedState)||(Nn=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=B,a.lastRenderedState=c}if(n=a.interleaved,n!==null){h=n;do m=h.lane,qt.lanes|=m,zr|=m,h=h.next;while(h!==n)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Jc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do m=n(m,E.action),E=E.next;while(E!==h);si(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function Hf(){}function Vf(n,i){var a=qt,c=Jn(),h=i(),m=!si(c.memoizedState,h);if(m&&(c.memoizedState=h,Nn=!0),c=c.queue,eu(Xf.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||an!==null&&an.memoizedState.tag&1){if(a.flags|=2048,Pa(9,jf.bind(null,a,c,h,i),void 0,null),on===null)throw Error(t(349));(Ur&30)!==0||Wf(a,i,h)}return h}function Wf(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function jf(n,i,a,c){i.value=a,i.getSnapshot=c,qf(i)&&Kf(n)}function Xf(n,i,a){return a(function(){qf(i)&&Kf(n)})}function qf(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function Kf(n){var i=ki(n,1);i!==null&&ui(i,n,1,-1)}function Yf(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ca,lastRenderedState:n},i.queue=n,n=n.dispatch=m0.bind(null,qt,n),[i.memoizedState,n]}function Pa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function $f(){return Jn().memoizedState}function Oo(n,i,a,c){var h=yi();qt.flags|=n,h.memoizedState=Pa(1|i,a,void 0,c===void 0?null:c)}function Bo(n,i,a,c){var h=Jn();c=c===void 0?null:c;var m=void 0;if(tn!==null){var E=tn.memoizedState;if(m=E.destroy,c!==null&&Yc(c,E.deps)){h.memoizedState=Pa(i,a,m,c);return}}qt.flags|=n,h.memoizedState=Pa(1|i,a,m,c)}function Zf(n,i){return Oo(8390656,8,n,i)}function eu(n,i){return Bo(2048,8,n,i)}function Qf(n,i){return Bo(4,2,n,i)}function Jf(n,i){return Bo(4,4,n,i)}function ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function tp(n,i,a){return a=a!=null?a.concat([n]):null,Bo(4,4,ep.bind(null,i,n),a)}function tu(){}function np(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function ip(n,i){var a=Jn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Yc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function rp(n,i,a){return(Ur&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(si(a,i)||(a=An(),qt.lanes|=a,zr|=a,n.baseState=!0),i)}function f0(n,i){var a=vt;vt=a!==0&&4>a?a:4,n(!0);var c=Kc.transition;Kc.transition={};try{n(!1),i()}finally{vt=a,Kc.transition=c}}function sp(){return Jn().memoizedState}function p0(n,i,a){var c=dr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},ap(n))op(i,a);else if(a=zf(n,i,a,c),a!==null){var h=Cn();ui(a,n,c,h),lp(a,i,c)}}function m0(n,i,a){var c=dr(n),h={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(ap(n))op(i,h);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,L=m(E,a);if(h.hasEagerState=!0,h.eagerState=L,si(L,E)){var B=i.interleaved;B===null?(h.next=h,Hc(i)):(h.next=B.next,B.next=h),i.interleaved=h;return}}catch{}finally{}a=zf(n,i,h,c),a!==null&&(h=Cn(),ui(a,n,c,h),lp(a,i,c))}}function ap(n){var i=n.alternate;return n===qt||i!==null&&i===qt}function op(n,i){Aa=Fo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function lp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Cr(n,a)}}var Go={readContext:Qn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},g0={readContext:Qn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Qn,useEffect:Zf,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Oo(4194308,4,ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Oo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Oo(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=p0.bind(null,qt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Yf,useDebugValue:tu,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Yf(!1),i=n[0];return n=f0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=qt,h=yi();if(jt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));(Ur&30)!==0||Wf(c,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Zf(Xf.bind(null,c,m,n),[n]),c.flags|=2048,Pa(9,jf.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=yi(),i=on.identifierPrefix;if(jt){var a=Di,c=Pi;a=(c&~(1<<32-bt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ra++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=h0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},v0={readContext:Qn,useCallback:np,useContext:Qn,useEffect:eu,useImperativeHandle:tp,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:ip,useReducer:Qc,useRef:$f,useState:function(){return Qc(Ca)},useDebugValue:tu,useDeferredValue:function(n){var i=Jn();return rp(i,tn.memoizedState,n)},useTransition:function(){var n=Qc(Ca)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:sp,unstable_isNewReconciler:!1},_0={readContext:Qn,useCallback:np,useContext:Qn,useEffect:eu,useImperativeHandle:tp,useInsertionEffect:Qf,useLayoutEffect:Jf,useMemo:ip,useReducer:Jc,useRef:$f,useState:function(){return Jc(Ca)},useDebugValue:tu,useDeferredValue:function(n){var i=Jn();return tn===null?i.memoizedState=n:rp(i,tn.memoizedState,n)},useTransition:function(){var n=Jc(Ca)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Hf,useSyncExternalStore:Vf,useId:sp,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=te({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function nu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:te({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ho={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Cn(),h=dr(n),m=Li(c,h);m.payload=i,a!=null&&(m.callback=a),i=or(n,m,h),i!==null&&(ui(i,n,h,c),Io(i,n,h))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Cn(),h=dr(n),m=Li(c,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=or(n,m,h),i!==null&&(ui(i,n,h,c),Io(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Cn(),c=dr(n),h=Li(a,c);h.tag=2,i!=null&&(h.callback=i),i=or(n,h,c),i!==null&&(ui(i,n,c,a),Io(i,n,c))}};function cp(n,i,a,c,h,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!ga(a,c)||!ga(h,m):!0}function up(n,i,a){var c=!1,h=rr,m=i.contextType;return typeof m=="object"&&m!==null?m=Qn(m):(h=In(i)?Dr:vn.current,c=i.contextTypes,m=(c=c!=null)?ps(n,h):rr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ho,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=m),i}function dp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ho.enqueueReplaceState(i,i.state,null)}function iu(n,i,a,c){var h=n.stateNode;h.props=a,h.state=n.memoizedState,h.refs={},Vc(n);var m=i.contextType;typeof m=="object"&&m!==null?h.context=Qn(m):(m=In(i)?Dr:vn.current,h.context=ps(n,m)),h.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(nu(n,i,m,a),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Ho.enqueueReplaceState(h,h.state,null),No(n,a,h,c),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function Ms(n,i){try{var a="",c=i;do a+=ue(c),c=c.return;while(c);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:h,digest:null}}function ru(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function su(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var y0=typeof WeakMap=="function"?WeakMap:Map;function hp(n,i,a){a=Li(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){Yo||(Yo=!0,xu=c),su(n,i)},a}function fp(n,i,a){a=Li(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=i.value;a.payload=function(){return c(h)},a.callback=function(){su(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){su(n,i),typeof c!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function pp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new y0;var h=new Set;c.set(i,h)}else h=c.get(i),h===void 0&&(h=new Set,c.set(i,h));h.has(a)||(h.add(a),n=L0.bind(null,n,i,a),i.then(n,n))}function mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function gp(n,i,a,c,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Li(-1,1),i.tag=2,or(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var x0=R.ReactCurrentOwner,Nn=!1;function Rn(n,i,a,c){i.child=n===null?Uf(i,null,a,c):_s(i,n.child,a,c)}function vp(n,i,a,c,h){a=a.render;var m=i.ref;return xs(i,h),c=$c(n,i,a,c,m,h),a=Zc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(jt&&a&&Lc(i),i.flags|=1,Rn(n,i,c,h),i.child)}function _p(n,i,a,c,h){if(n===null){var m=a.type;return typeof m=="function"&&!Au(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,yp(n,i,m,c,h)):(n=tl(a.type,null,c,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&h)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:ga,a(E,c)&&n.ref===i.ref)return Ii(n,i,h)}return i.flags|=1,n=fr(m,c),n.ref=i.ref,n.return=i,i.child=n}function yp(n,i,a,c,h){if(n!==null){var m=n.memoizedProps;if(ga(m,c)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=c=m,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Ii(n,i,h)}return au(n,i,a,c,h)}function xp(n,i,a){var c=i.pendingProps,h=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},zt(ws,jn),jn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,zt(ws,jn),jn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,zt(ws,jn),jn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,zt(ws,jn),jn|=c;return Rn(n,i,h,a),i.child}function Sp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function au(n,i,a,c,h){var m=In(a)?Dr:vn.current;return m=ps(i,m),xs(i,h),a=$c(n,i,a,c,m,h),c=Zc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,Ii(n,i,h)):(jt&&c&&Lc(i),i.flags|=1,Rn(n,i,a,h),i.child)}function Mp(n,i,a,c,h){if(In(a)){var m=!0;bo(i)}else m=!1;if(xs(i,h),i.stateNode===null)Wo(n,i),up(i,a,c),iu(i,a,c,h),c=!0;else if(n===null){var E=i.stateNode,L=i.memoizedProps;E.props=L;var B=E.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Qn(ee):(ee=In(a)?Dr:vn.current,ee=ps(i,ee));var _e=a.getDerivedStateFromProps,xe=typeof _e=="function"||typeof E.getSnapshotBeforeUpdate=="function";xe||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==c||B!==ee)&&dp(i,E,c,ee),ar=!1;var ge=i.memoizedState;E.state=ge,No(i,c,E,h),B=i.memoizedState,L!==c||ge!==B||Ln.current||ar?(typeof _e=="function"&&(nu(i,a,_e,c),B=i.memoizedState),(L=ar||cp(i,a,L,c,ge,B,ee))?(xe||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=B),E.props=c,E.state=B,E.context=ee,c=L):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,Ff(n,i),L=i.memoizedProps,ee=i.type===i.elementType?L:oi(i.type,L),E.props=ee,xe=i.pendingProps,ge=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=Qn(B):(B=In(a)?Dr:vn.current,B=ps(i,B));var Le=a.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(L!==xe||ge!==B)&&dp(i,E,c,B),ar=!1,ge=i.memoizedState,E.state=ge,No(i,c,E,h);var He=i.memoizedState;L!==xe||ge!==He||Ln.current||ar?(typeof Le=="function"&&(nu(i,a,Le,c),He=i.memoizedState),(ee=ar||cp(i,a,ee,c,ge,He,B)||!1)?(_e||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,He,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,He,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=He),E.props=c,E.state=He,E.context=B,c=ee):(typeof E.componentDidUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||L===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return ou(n,i,a,c,m,h)}function ou(n,i,a,c,h,m){Sp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return h&&Af(i,a,!1),Ii(n,i,m);c=i.stateNode,x0.current=i;var L=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=_s(i,n.child,null,m),i.child=_s(i,null,L,m)):Rn(n,i,L,m),i.memoizedState=c.state,h&&Af(i,a,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?Tf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Tf(n,i.context,!1),Wc(n,i.containerInfo)}function wp(n,i,a,c,h){return vs(),zc(h),i.flags|=256,Rn(n,i,a,c),i.child}var lu={dehydrated:null,treeContext:null,retryLane:0};function cu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tp(n,i,a){var c=i.pendingProps,h=Xt.current,m=!1,E=(i.flags&128)!==0,L;if((L=E)||(L=n!==null&&n.memoizedState===null?!1:(h&2)!==0),L?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),zt(Xt,h&1),n===null)return Uc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=nl(E,c,0,null),n=Gr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=cu(a),i.memoizedState=lu,n):uu(i,E));if(h=n.memoizedState,h!==null&&(L=h.dehydrated,L!==null))return S0(n,i,E,c,L,h,a);if(m){m=c.fallback,E=i.mode,h=n.child,L=h.sibling;var B={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==h?(c=i.child,c.childLanes=0,c.pendingProps=B,i.deletions=null):(c=fr(h,B),c.subtreeFlags=h.subtreeFlags&14680064),L!==null?m=fr(L,m):(m=Gr(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?cu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=lu,c}return m=n.child,n=m.sibling,c=fr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function uu(n,i){return i=nl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Vo(n,i,a,c){return c!==null&&zc(c),_s(i,n.child,null,a),n=uu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function S0(n,i,a,c,h,m,E){if(a)return i.flags&256?(i.flags&=-257,c=ru(Error(t(422))),Vo(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,h=i.mode,c=nl({mode:"visible",children:c.children},h,0,null),m=Gr(m,h,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&_s(i,n.child,null,E),i.child.memoizedState=cu(E),i.memoizedState=lu,m);if((i.mode&1)===0)return Vo(n,i,E,null);if(h.data==="$!"){if(c=h.nextSibling&&h.nextSibling.dataset,c)var L=c.dgst;return c=L,m=Error(t(419)),c=ru(m,c,void 0),Vo(n,i,E,c)}if(L=(E&n.childLanes)!==0,Nn||L){if(c=on,c!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(c.suspendedLanes|E))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,ki(n,h),ui(c,n,h,-1))}return bu(),c=ru(Error(t(421))),Vo(n,i,E,c)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=I0.bind(null,n),h._reactRetry=i,null):(n=m.treeContext,Wn=nr(h.nextSibling),Vn=i,jt=!0,ai=null,n!==null&&($n[Zn++]=Pi,$n[Zn++]=Di,$n[Zn++]=kr,Pi=n.id,Di=n.overflow,kr=i),i=uu(i,c.children),i.flags|=4096,i)}function bp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Gc(n.return,i,a)}function du(n,i,a,c,h){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=h)}function Ap(n,i,a){var c=i.pendingProps,h=c.revealOrder,m=c.tail;if(Rn(n,i,c.children,a),c=Xt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&bp(n,a,i);else if(n.tag===19)bp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(zt(Xt,c),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)n=a.alternate,n!==null&&Uo(n)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),du(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&Uo(n)===null){i.child=h;break}n=h.sibling,h.sibling=a,a=h,h=n}du(i,!0,a,null,m);break;case"together":du(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Wo(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),zr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function M0(n,i,a){switch(i.tag){case 3:Ep(i),vs();break;case 5:Gf(i);break;case 1:In(i.type)&&bo(i);break;case 4:Wc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,h=i.memoizedProps.value;zt(ko,c._currentValue),c._currentValue=h;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(zt(Xt,Xt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Tp(n,i,a):(zt(Xt,Xt.current&1),n=Ii(n,i,a),n!==null?n.sibling:null);zt(Xt,Xt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Ap(n,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),zt(Xt,Xt.current),c)break;return null;case 22:case 23:return i.lanes=0,xp(n,i,a)}return Ii(n,i,a)}var Rp,hu,Cp,Pp;Rp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},hu=function(){},Cp=function(n,i,a,c){var h=n.memoizedProps;if(h!==c){n=i.stateNode,Nr(_i.current);var m=null;switch(a){case"input":h=V(n,h),c=V(n,c),m=[];break;case"select":h=te({},h,{value:void 0}),c=te({},c,{value:void 0}),m=[];break;case"textarea":h=T(n,h),c=T(n,c),m=[];break;default:typeof h.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Eo)}ft(a,c);var E;a=null;for(ee in h)if(!c.hasOwnProperty(ee)&&h.hasOwnProperty(ee)&&h[ee]!=null)if(ee==="style"){var L=h[ee];for(E in L)L.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in c){var B=c[ee];if(L=h!=null?h[ee]:void 0,c.hasOwnProperty(ee)&&B!==L&&(B!=null||L!=null))if(ee==="style")if(L){for(E in L)!L.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&L[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(m||(m=[]),m.push(ee,a)),a=B;else ee==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,L=L?L.__html:void 0,B!=null&&L!==B&&(m=m||[]).push(ee,B)):ee==="children"?typeof B!="string"&&typeof B!="number"||(m=m||[]).push(ee,""+B):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(B!=null&&ee==="onScroll"&&Bt("scroll",n),m||L===B||(m=[])):(m=m||[]).push(ee,B))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Pp=function(n,i,a,c){a!==c&&(i.flags|=4)};function Da(n,i){if(!jt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function yn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags&14680064,c|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)a|=h.lanes|h.childLanes,c|=h.subtreeFlags,c|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function E0(n,i,a){var c=i.pendingProps;switch(Ic(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yn(i),null;case 1:return In(i.type)&&To(),yn(i),null;case 3:return c=i.stateNode,Ss(),Gt(Ln),Gt(vn),qc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Po(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Eu(ai),ai=null))),hu(n,i),yn(i),null;case 5:jc(i);var h=Nr(ba.current);if(a=i.type,n!==null&&i.stateNode!=null)Cp(n,i,a,c,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return yn(i),null}if(n=Nr(_i.current),Po(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[vi]=i,c[Sa]=m,n=(i.mode&1)!==0,a){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(h=0;h<_a.length;h++)Bt(_a[h],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":wn(c,m),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Bt("invalid",c);break;case"textarea":Q(c,m),Bt("invalid",c)}ft(a,m),h=null;for(var E in m)if(m.hasOwnProperty(E)){var L=m[E];E==="children"?typeof L=="string"?c.textContent!==L&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,L,n),h=["children",L]):typeof L=="number"&&c.textContent!==""+L&&(m.suppressHydrationWarning!==!0&&Mo(c.textContent,L,n),h=["children",""+L]):o.hasOwnProperty(E)&&L!=null&&E==="onScroll"&&Bt("scroll",c)}switch(a){case"input":Dt(c),Ke(c,m,!0);break;case"textarea":Dt(c),ve(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Eo)}c=h,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[vi]=i,n[Sa]=c,Rp(n,i,!1,!1),i.stateNode=n;e:{switch(E=st(a,c),a){case"dialog":Bt("cancel",n),Bt("close",n),h=c;break;case"iframe":case"object":case"embed":Bt("load",n),h=c;break;case"video":case"audio":for(h=0;h<_a.length;h++)Bt(_a[h],n);h=c;break;case"source":Bt("error",n),h=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),h=c;break;case"details":Bt("toggle",n),h=c;break;case"input":wn(n,c),h=V(n,c),Bt("invalid",n);break;case"option":h=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},h=te({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":Q(n,c),h=T(n,c),Bt("invalid",n);break;default:h=c}ft(a,h),L=h;for(m in L)if(L.hasOwnProperty(m)){var B=L[m];m==="style"?tt(n,B):m==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&ze(n,B)):m==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&dt(n,B):typeof B=="number"&&dt(n,""+B):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?B!=null&&m==="onScroll"&&Bt("scroll",n):B!=null&&P(n,m,B,E))}switch(a){case"input":Dt(n),Ke(n,c,!1);break;case"textarea":Dt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?k(n,!!c.multiple,m,!1):c.defaultValue!=null&&k(n,!!c.multiple,c.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Eo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return yn(i),null;case 6:if(n&&i.stateNode!=null)Pp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=Nr(ba.current),Nr(_i.current),Po(i)){if(c=i.stateNode,a=i.memoizedProps,c[vi]=i,(m=c.nodeValue!==a)&&(n=Vn,n!==null))switch(n.tag){case 3:Mo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Mo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[vi]=i,i.stateNode=c}return yn(i),null;case 13:if(Gt(Xt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(jt&&Wn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Lf(),vs(),i.flags|=98560,m=!1;else if(m=Po(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[vi]=i}else vs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;yn(i),m=!1}else ai!==null&&(Eu(ai),ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Xt.current&1)!==0?nn===0&&(nn=3):bu())),i.updateQueue!==null&&(i.flags|=4),yn(i),null);case 4:return Ss(),hu(n,i),n===null&&ya(i.stateNode.containerInfo),yn(i),null;case 10:return Bc(i.type._context),yn(i),null;case 17:return In(i.type)&&To(),yn(i),null;case 19:if(Gt(Xt),m=i.memoizedState,m===null)return yn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)Da(m,!1);else{if(nn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Uo(n),E!==null){for(i.flags|=128,Da(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return zt(Xt,Xt.current&1|2),i.child}n=n.sibling}m.tail!==null&&j()>Ts&&(i.flags|=128,c=!0,Da(m,!1),i.lanes=4194304)}else{if(!c)if(n=Uo(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Da(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!jt)return yn(i),null}else 2*j()-m.renderingStartTime>Ts&&a!==1073741824&&(i.flags|=128,c=!0,Da(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=j(),i.sibling=null,a=Xt.current,zt(Xt,c?a&1|2:a&1),i):(yn(i),null);case 22:case 23:return Tu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(jn&1073741824)!==0&&(yn(i),i.subtreeFlags&6&&(i.flags|=8192)):yn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function w0(n,i){switch(Ic(i),i.tag){case 1:return In(i.type)&&To(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ss(),Gt(Ln),Gt(vn),qc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return jc(i),null;case 13:if(Gt(Xt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));vs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Gt(Xt),null;case 4:return Ss(),null;case 10:return Bc(i.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var jo=!1,xn=!1,T0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Es(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Yt(n,i,c)}else a.current=null}function fu(n,i,a){try{a()}catch(c){Yt(n,i,c)}}var Dp=!1;function b0(n,i){if(Tc=uo,n=cf(),vc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var h=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,L=-1,B=-1,ee=0,_e=0,xe=n,ge=null;t:for(;;){for(var Le;xe!==a||h!==0&&xe.nodeType!==3||(L=E+h),xe!==m||c!==0&&xe.nodeType!==3||(B=E+c),xe.nodeType===3&&(E+=xe.nodeValue.length),(Le=xe.firstChild)!==null;)ge=xe,xe=Le;for(;;){if(xe===n)break t;if(ge===a&&++ee===h&&(L=E),ge===m&&++_e===c&&(B=E),(Le=xe.nextSibling)!==null)break;xe=ge,ge=xe.parentNode}xe=Le}a=L===-1||B===-1?null:{start:L,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(bc={focusedElem:n,selectionRange:a},uo=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ve=He.memoizedProps,Zt=He.memoizedState,Y=i.stateNode,X=Y.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:oi(i.type,Ve),Zt);Y.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){Yt(i,i.return,we)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return He=Dp,Dp=!1,He}function ka(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var h=c=c.next;do{if((h.tag&n)===n){var m=h.destroy;h.destroy=void 0,m!==void 0&&fu(i,a,m)}h=h.next}while(h!==c)}}function Xo(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[vi],delete i[Sa],delete i[Pc],delete i[l0],delete i[c0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lp(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function mu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Eo));else if(c!==4&&(n=n.child,n!==null))for(mu(n,i,a),n=n.sibling;n!==null;)mu(n,i,a),n=n.sibling}function gu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(gu(n,i,a),n=n.sibling;n!==null;)gu(n,i,a),n=n.sibling}var fn=null,li=!1;function lr(n,i,a){for(a=a.child;a!==null;)Np(n,i,a),a=a.sibling}function Np(n,i,a){if(ot&&typeof ot.onCommitFiberUnmount=="function")try{ot.onCommitFiberUnmount(qe,a)}catch{}switch(a.tag){case 5:xn||Es(a,i);case 6:var c=fn,h=li;fn=null,lr(n,i,a),fn=c,li=h,fn!==null&&(li?(n=fn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):fn.removeChild(a.stateNode));break;case 18:fn!==null&&(li?(n=fn,a=a.stateNode,n.nodeType===8?Cc(n.parentNode,a):n.nodeType===1&&Cc(n,a),ua(n)):Cc(fn,a.stateNode));break;case 4:c=fn,h=li,fn=a.stateNode.containerInfo,li=!0,lr(n,i,a),fn=c,li=h;break;case 0:case 11:case 14:case 15:if(!xn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){h=c=c.next;do{var m=h,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&fu(a,i,E),h=h.next}while(h!==c)}lr(n,i,a);break;case 1:if(!xn&&(Es(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(L){Yt(a,i,L)}lr(n,i,a);break;case 21:lr(n,i,a);break;case 22:a.mode&1?(xn=(c=xn)||a.memoizedState!==null,lr(n,i,a),xn=c):lr(n,i,a);break;default:lr(n,i,a)}}function Up(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new T0),i.forEach(function(c){var h=N0.bind(null,n,c);a.has(c)||(a.add(c),c.then(h,h))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var h=a[c];try{var m=n,E=i,L=E;e:for(;L!==null;){switch(L.tag){case 5:fn=L.stateNode,li=!1;break e;case 3:fn=L.stateNode.containerInfo,li=!0;break e;case 4:fn=L.stateNode.containerInfo,li=!0;break e}L=L.return}if(fn===null)throw Error(t(160));Np(m,E,h),fn=null,li=!1;var B=h.alternate;B!==null&&(B.return=null),h.return=null}catch(ee){Yt(h,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)zp(i,n),i=i.sibling}function zp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),xi(n),c&4){try{ka(3,n,n.return),Xo(3,n)}catch(Ve){Yt(n,n.return,Ve)}try{ka(5,n,n.return)}catch(Ve){Yt(n,n.return,Ve)}}break;case 1:ci(i,n),xi(n),c&512&&a!==null&&Es(a,a.return);break;case 5:if(ci(i,n),xi(n),c&512&&a!==null&&Es(a,a.return),n.flags&32){var h=n.stateNode;try{dt(h,"")}catch(Ve){Yt(n,n.return,Ve)}}if(c&4&&(h=n.stateNode,h!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,L=n.type,B=n.updateQueue;if(n.updateQueue=null,B!==null)try{L==="input"&&m.type==="radio"&&m.name!=null&&gt(h,m),st(L,E);var ee=st(L,m);for(E=0;E<B.length;E+=2){var _e=B[E],xe=B[E+1];_e==="style"?tt(h,xe):_e==="dangerouslySetInnerHTML"?ze(h,xe):_e==="children"?dt(h,xe):P(h,_e,xe,ee)}switch(L){case"input":ht(h,m);break;case"textarea":me(h,m);break;case"select":var ge=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var Le=m.value;Le!=null?k(h,!!m.multiple,Le,!1):ge!==!!m.multiple&&(m.defaultValue!=null?k(h,!!m.multiple,m.defaultValue,!0):k(h,!!m.multiple,m.multiple?[]:"",!1))}h[Sa]=m}catch(Ve){Yt(n,n.return,Ve)}}break;case 6:if(ci(i,n),xi(n),c&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,m=n.memoizedProps;try{h.nodeValue=m}catch(Ve){Yt(n,n.return,Ve)}}break;case 3:if(ci(i,n),xi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{ua(i.containerInfo)}catch(Ve){Yt(n,n.return,Ve)}break;case 4:ci(i,n),xi(n);break;case 13:ci(i,n),xi(n),h=n.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(yu=j())),c&4&&Up(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(ee=xn)||_e,ci(i,n),xn=ee):ci(i,n),xi(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!_e&&(n.mode&1)!==0)for(Oe=n,_e=n.child;_e!==null;){for(xe=Oe=_e;Oe!==null;){switch(ge=Oe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:ka(4,ge,ge.return);break;case 1:Es(ge,ge.return);var He=ge.stateNode;if(typeof He.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ve){Yt(c,a,Ve)}}break;case 5:Es(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Bp(xe);continue}}Le!==null?(Le.return=ge,Oe=Le):Bp(xe)}_e=_e.sibling}e:for(_e=null,xe=n;;){if(xe.tag===5){if(_e===null){_e=xe;try{h=xe.stateNode,ee?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(L=xe.stateNode,B=xe.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,L.style.display=$e("display",E))}catch(Ve){Yt(n,n.return,Ve)}}}else if(xe.tag===6){if(_e===null)try{xe.stateNode.nodeValue=ee?"":xe.memoizedProps}catch(Ve){Yt(n,n.return,Ve)}}else if((xe.tag!==22&&xe.tag!==23||xe.memoizedState===null||xe===n)&&xe.child!==null){xe.child.return=xe,xe=xe.child;continue}if(xe===n)break e;for(;xe.sibling===null;){if(xe.return===null||xe.return===n)break e;_e===xe&&(_e=null),xe=xe.return}_e===xe&&(_e=null),xe.sibling.return=xe.return,xe=xe.sibling}}break;case 19:ci(i,n),xi(n),c&4&&Up(n);break;case 21:break;default:ci(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Lp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var h=c.stateNode;c.flags&32&&(dt(h,""),c.flags&=-33);var m=Ip(n);gu(n,m,h);break;case 3:case 4:var E=c.stateNode.containerInfo,L=Ip(n);mu(n,L,E);break;default:throw Error(t(161))}}catch(B){Yt(n,n.return,B)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function A0(n,i,a){Oe=n,Fp(n)}function Fp(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var h=Oe,m=h.child;if(h.tag===22&&c){var E=h.memoizedState!==null||jo;if(!E){var L=h.alternate,B=L!==null&&L.memoizedState!==null||xn;L=jo;var ee=xn;if(jo=E,(xn=B)&&!ee)for(Oe=h;Oe!==null;)E=Oe,B=E.child,E.tag===22&&E.memoizedState!==null?Gp(h):B!==null?(B.return=E,Oe=B):Gp(h);for(;m!==null;)Oe=m,Fp(m),m=m.sibling;Oe=h,jo=L,xn=ee}Op(n)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Oe=m):Op(n)}}function Op(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:xn||Xo(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(a===null)c.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);c.componentDidUpdate(h,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Bf(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Bf(i,E,a)}break;case 5:var L=i.stateNode;if(a===null&&i.flags&4){a=L;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var xe=_e.dehydrated;xe!==null&&ua(xe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&pu(i)}catch(ge){Yt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Bp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Gp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Xo(4,i)}catch(B){Yt(i,a,B)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var h=i.return;try{c.componentDidMount()}catch(B){Yt(i,h,B)}}var m=i.return;try{pu(i)}catch(B){Yt(i,m,B)}break;case 5:var E=i.return;try{pu(i)}catch(B){Yt(i,E,B)}}}catch(B){Yt(i,i.return,B)}if(i===n){Oe=null;break}var L=i.sibling;if(L!==null){L.return=i.return,Oe=L;break}Oe=i.return}}var R0=Math.ceil,qo=R.ReactCurrentDispatcher,vu=R.ReactCurrentOwner,ei=R.ReactCurrentBatchConfig,wt=0,on=null,Qt=null,pn=0,jn=0,ws=ir(0),nn=0,La=null,zr=0,Ko=0,_u=0,Ia=null,Un=null,yu=0,Ts=1/0,Ni=null,Yo=!1,xu=null,cr=null,$o=!1,ur=null,Zo=0,Na=0,Su=null,Qo=-1,Jo=0;function Cn(){return(wt&6)!==0?j():Qo!==-1?Qo:Qo=j()}function dr(n){return(n.mode&1)===0?1:(wt&2)!==0&&pn!==0?pn&-pn:d0.transition!==null?(Jo===0&&(Jo=An()),Jo):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Hh(n.type)),n)}function ui(n,i,a,c){if(50<Na)throw Na=0,Su=null,Error(t(185));$t(n,a,c),((wt&2)===0||n!==on)&&(n===on&&((wt&2)===0&&(Ko|=a),nn===4&&hr(n,pn)),zn(n,c),a===1&&wt===0&&(i.mode&1)===0&&(Ts=j()+500,Ao&&sr()))}function zn(n,i){var a=n.callbackNode;Rr(n,i);var c=ri(n,n===on?pn:0);if(c===0)a!==null&&K(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&K(a),i===1)n.tag===0?u0(Vp.bind(null,n)):Rf(Vp.bind(null,n)),a0(function(){(wt&6)===0&&sr()}),a=null;else{switch(Ih(c)){case 1:a=Ce;break;case 4:a=Ie;break;case 16:a=Fe;break;case 536870912:a=it;break;default:a=Fe}a=Zp(a,Hp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hp(n,i){if(Qo=-1,Jo=0,(wt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(bs()&&n.callbackNode!==a)return null;var c=ri(n,n===on?pn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=el(n,c);else{i=c;var h=wt;wt|=2;var m=jp();(on!==n||pn!==i)&&(Ni=null,Ts=j()+500,Or(n,i));do try{D0();break}catch(L){Wp(n,L)}while(!0);Oc(),qo.current=m,wt=h,Qt!==null?i=0:(on=null,pn=0,i=nn)}if(i!==0){if(i===2&&(h=kt(n),h!==0&&(c=h,i=Mu(n,h))),i===1)throw a=La,Or(n,0),hr(n,c),zn(n,j()),a;if(i===6)hr(n,c);else{if(h=n.current.alternate,(c&30)===0&&!C0(h)&&(i=el(n,c),i===2&&(m=kt(n),m!==0&&(c=m,i=Mu(n,m))),i===1))throw a=La,Or(n,0),hr(n,c),zn(n,j()),a;switch(n.finishedWork=h,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Br(n,Un,Ni);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=yu+500-j(),10<i)){if(ri(n,0)!==0)break;if(h=n.suspendedLanes,(h&c)!==c){Cn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=Rc(Br.bind(null,n,Un,Ni),i);break}Br(n,Un,Ni);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,h=-1;0<c;){var E=31-bt(c);m=1<<E,E=i[E],E>h&&(h=E),c&=~m}if(c=h,c=j()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*R0(c/1960))-c,10<c){n.timeoutHandle=Rc(Br.bind(null,n,Un,Ni),c);break}Br(n,Un,Ni);break;case 5:Br(n,Un,Ni);break;default:throw Error(t(329))}}}return zn(n,j()),n.callbackNode===a?Hp.bind(null,n):null}function Mu(n,i){var a=Ia;return n.current.memoizedState.isDehydrated&&(Or(n,i).flags|=256),n=el(n,i),n!==2&&(i=Un,Un=a,i!==null&&Eu(i)),n}function Eu(n){Un===null?Un=n:Un.push.apply(Un,n)}function C0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var h=a[c],m=h.getSnapshot;h=h.value;try{if(!si(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~_u,i&=~Ko,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-bt(i),c=1<<a;n[a]=-1,i&=~c}}function Vp(n){if((wt&6)!==0)throw Error(t(327));bs();var i=ri(n,0);if((i&1)===0)return zn(n,j()),null;var a=el(n,i);if(n.tag!==0&&a===2){var c=kt(n);c!==0&&(i=c,a=Mu(n,c))}if(a===1)throw a=La,Or(n,0),hr(n,i),zn(n,j()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Br(n,Un,Ni),zn(n,j()),null}function wu(n,i){var a=wt;wt|=1;try{return n(i)}finally{wt=a,wt===0&&(Ts=j()+500,Ao&&sr())}}function Fr(n){ur!==null&&ur.tag===0&&(wt&6)===0&&bs();var i=wt;wt|=1;var a=ei.transition,c=vt;try{if(ei.transition=null,vt=1,n)return n()}finally{vt=c,ei.transition=a,wt=i,(wt&6)===0&&sr()}}function Tu(){jn=ws.current,Gt(ws)}function Or(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,s0(a)),Qt!==null)for(a=Qt.return;a!==null;){var c=a;switch(Ic(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&To();break;case 3:Ss(),Gt(Ln),Gt(vn),qc();break;case 5:jc(c);break;case 4:Ss();break;case 13:Gt(Xt);break;case 19:Gt(Xt);break;case 10:Bc(c.type._context);break;case 22:case 23:Tu()}a=a.return}if(on=n,Qt=n=fr(n.current,null),pn=jn=i,nn=0,La=null,_u=Ko=zr=0,Un=Ia=null,Ir!==null){for(i=0;i<Ir.length;i++)if(a=Ir[i],c=a.interleaved,c!==null){a.interleaved=null;var h=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=h,c.next=E}a.pending=c}Ir=null}return n}function Wp(n,i){do{var a=Qt;try{if(Oc(),zo.current=Go,Fo){for(var c=qt.memoizedState;c!==null;){var h=c.queue;h!==null&&(h.pending=null),c=c.next}Fo=!1}if(Ur=0,an=tn=qt=null,Aa=!1,Ra=0,vu.current=null,a===null||a.return===null){nn=1,La=i,Qt=null;break}e:{var m=n,E=a.return,L=a,B=i;if(i=pn,L.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ee=B,_e=L,xe=_e.tag;if((_e.mode&1)===0&&(xe===0||xe===11||xe===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=mp(E);if(Le!==null){Le.flags&=-257,gp(Le,E,L,m,i),Le.mode&1&&pp(m,ee,i),i=Le,B=ee;var He=i.updateQueue;if(He===null){var Ve=new Set;Ve.add(B),i.updateQueue=Ve}else He.add(B);break e}else{if((i&1)===0){pp(m,ee,i),bu();break e}B=Error(t(426))}}else if(jt&&L.mode&1){var Zt=mp(E);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),gp(Zt,E,L,m,i),zc(Ms(B,L));break e}}m=B=Ms(B,L),nn!==4&&(nn=2),Ia===null?Ia=[m]:Ia.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var Y=hp(m,B,i);Of(m,Y);break e;case 1:L=B;var X=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(cr===null||!cr.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var we=fp(m,L,i);Of(m,we);break e}}m=m.return}while(m!==null)}qp(a)}catch(je){i=je,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function jp(){var n=qo.current;return qo.current=Go,n===null?Go:n}function bu(){(nn===0||nn===3||nn===2)&&(nn=4),on===null||(zr&268435455)===0&&(Ko&268435455)===0||hr(on,pn)}function el(n,i){var a=wt;wt|=2;var c=jp();(on!==n||pn!==i)&&(Ni=null,Or(n,i));do try{P0();break}catch(h){Wp(n,h)}while(!0);if(Oc(),wt=a,qo.current=c,Qt!==null)throw Error(t(261));return on=null,pn=0,nn}function P0(){for(;Qt!==null;)Xp(Qt)}function D0(){for(;Qt!==null&&!ne();)Xp(Qt)}function Xp(n){var i=$p(n.alternate,n,jn);n.memoizedProps=n.pendingProps,i===null?qp(n):Qt=i,vu.current=null}function qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=E0(a,i,jn),a!==null){Qt=a;return}}else{if(a=w0(a,i),a!==null){a.flags&=32767,Qt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{nn=6,Qt=null;return}}if(i=i.sibling,i!==null){Qt=i;return}Qt=i=n}while(i!==null);nn===0&&(nn=5)}function Br(n,i,a){var c=vt,h=ei.transition;try{ei.transition=null,vt=1,k0(n,i,a,c)}finally{ei.transition=h,vt=c}return null}function k0(n,i,a,c){do bs();while(ur!==null);if((wt&6)!==0)throw Error(t(327));a=n.finishedWork;var h=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(gn(n,m),n===on&&(Qt=on=null,pn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||$o||($o=!0,Zp(Fe,function(){return bs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ei.transition,ei.transition=null;var E=vt;vt=1;var L=wt;wt|=4,vu.current=null,b0(n,a),zp(a,n),Qv(bc),uo=!!Tc,bc=Tc=null,n.current=a,A0(a),ie(),wt=L,vt=E,ei.transition=m}else n.current=a;if($o&&($o=!1,ur=n,Zo=h),m=n.pendingLanes,m===0&&(cr=null),Tt(a.stateNode),zn(n,j()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)h=i[a],c(h.value,{componentStack:h.stack,digest:h.digest});if(Yo)throw Yo=!1,n=xu,xu=null,n;return(Zo&1)!==0&&n.tag!==0&&bs(),m=n.pendingLanes,(m&1)!==0?n===Su?Na++:(Na=0,Su=n):Na=0,sr(),null}function bs(){if(ur!==null){var n=Ih(Zo),i=ei.transition,a=vt;try{if(ei.transition=null,vt=16>n?16:n,ur===null)var c=!1;else{if(n=ur,ur=null,Zo=0,(wt&6)!==0)throw Error(t(331));var h=wt;for(wt|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var L=m.deletions;if(L!==null){for(var B=0;B<L.length;B++){var ee=L[B];for(Oe=ee;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:ka(8,_e,m)}var xe=_e.child;if(xe!==null)xe.return=_e,Oe=xe;else for(;Oe!==null;){_e=Oe;var ge=_e.sibling,Le=_e.return;if(kp(_e),_e===ee){Oe=null;break}if(ge!==null){ge.return=Le,Oe=ge;break}Oe=Le}}}var He=m.alternate;if(He!==null){var Ve=He.child;if(Ve!==null){He.child=null;do{var Zt=Ve.sibling;Ve.sibling=null,Ve=Zt}while(Ve!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:ka(9,m,m.return)}var Y=m.sibling;if(Y!==null){Y.return=m.return,Oe=Y;break e}Oe=m.return}}var X=n.current;for(Oe=X;Oe!==null;){E=Oe;var Z=E.child;if((E.subtreeFlags&2064)!==0&&Z!==null)Z.return=E,Oe=Z;else e:for(E=X;Oe!==null;){if(L=Oe,(L.flags&2048)!==0)try{switch(L.tag){case 0:case 11:case 15:Xo(9,L)}}catch(je){Yt(L,L.return,je)}if(L===E){Oe=null;break e}var we=L.sibling;if(we!==null){we.return=L.return,Oe=we;break e}Oe=L.return}}if(wt=h,sr(),ot&&typeof ot.onPostCommitFiberRoot=="function")try{ot.onPostCommitFiberRoot(qe,n)}catch{}c=!0}return c}finally{vt=a,ei.transition=i}}return!1}function Kp(n,i,a){i=Ms(a,i),i=hp(n,i,1),n=or(n,i,1),i=Cn(),n!==null&&($t(n,1,i),zn(n,i))}function Yt(n,i,a){if(n.tag===3)Kp(n,n,a);else for(;i!==null;){if(i.tag===3){Kp(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(cr===null||!cr.has(c))){n=Ms(a,n),n=fp(i,n,1),i=or(i,n,1),n=Cn(),i!==null&&($t(i,1,n),zn(i,n));break}}i=i.return}}function L0(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Cn(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(pn&a)===a&&(nn===4||nn===3&&(pn&130023424)===pn&&500>j()-yu?Or(n,0):_u|=a),zn(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=xt,xt<<=1,(xt&130023424)===0&&(xt=4194304)));var a=Cn();n=ki(n,i),n!==null&&($t(n,i,a),zn(n,a))}function I0(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),Yp(n,a)}function N0(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,h=n.memoizedState;h!==null&&(a=h.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Yp(n,a)}var $p;$p=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,M0(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,jt&&(i.flags&1048576)!==0&&Cf(i,Co,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Wo(n,i),n=i.pendingProps;var h=ps(i,vn.current);xs(i,a),h=$c(null,i,c,n,h,a);var m=Zc();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,In(c)?(m=!0,bo(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Vc(i),h.updater=Ho,i.stateNode=h,h._reactInternals=i,iu(i,c,n,a),i=ou(null,i,c,!0,m,a)):(i.tag=0,jt&&m&&Lc(i),Rn(null,i,h,a),i=i.child),i;case 16:c=i.elementType;e:{switch(Wo(n,i),n=i.pendingProps,h=c._init,c=h(c._payload),i.type=c,h=i.tag=z0(c),n=oi(c,n),h){case 0:i=au(null,i,c,n,a);break e;case 1:i=Mp(null,i,c,n,a);break e;case 11:i=vp(null,i,c,n,a);break e;case 14:i=_p(null,i,c,oi(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),au(n,i,c,h,a);case 1:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Mp(n,i,c,h,a);case 3:e:{if(Ep(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,h=m.element,Ff(n,i),No(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Ms(Error(t(423)),i),i=wp(n,i,c,a,h);break e}else if(c!==h){h=Ms(Error(t(424)),i),i=wp(n,i,c,a,h);break e}else for(Wn=nr(i.stateNode.containerInfo.firstChild),Vn=i,jt=!0,ai=null,a=Uf(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vs(),c===h){i=Ii(n,i,a);break e}Rn(n,i,c,a)}i=i.child}return i;case 5:return Gf(i),n===null&&Uc(i),c=i.type,h=i.pendingProps,m=n!==null?n.memoizedProps:null,E=h.children,Ac(c,h)?E=null:m!==null&&Ac(c,m)&&(i.flags|=32),Sp(n,i),Rn(n,i,E,a),i.child;case 6:return n===null&&Uc(i),null;case 13:return Tp(n,i,a);case 4:return Wc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=_s(i,null,c,a):Rn(n,i,c,a),i.child;case 11:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),vp(n,i,c,h,a);case 7:return Rn(n,i,i.pendingProps,a),i.child;case 8:return Rn(n,i,i.pendingProps.children,a),i.child;case 12:return Rn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,h=i.pendingProps,m=i.memoizedProps,E=h.value,zt(ko,c._currentValue),c._currentValue=E,m!==null)if(si(m.value,E)){if(m.children===h.children&&!Ln.current){i=Ii(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var L=m.dependencies;if(L!==null){E=m.child;for(var B=L.firstContext;B!==null;){if(B.context===c){if(m.tag===1){B=Li(-1,a&-a),B.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?B.next=B:(B.next=_e.next,_e.next=B),ee.pending=B}}m.lanes|=a,B=m.alternate,B!==null&&(B.lanes|=a),Gc(m.return,a,i),L.lanes|=a;break}B=B.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,L=E.alternate,L!==null&&(L.lanes|=a),Gc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}Rn(n,i,h.children,a),i=i.child}return i;case 9:return h=i.type,c=i.pendingProps.children,xs(i,a),h=Qn(h),c=c(h),i.flags|=1,Rn(n,i,c,a),i.child;case 14:return c=i.type,h=oi(c,i.pendingProps),h=oi(c.type,h),_p(n,i,c,h,a);case 15:return yp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,h=i.pendingProps,h=i.elementType===c?h:oi(c,h),Wo(n,i),i.tag=1,In(c)?(n=!0,bo(i)):n=!1,xs(i,a),up(i,c,h),iu(i,c,h,a),ou(null,i,c,!0,n,a);case 19:return Ap(n,i,a);case 22:return xp(n,i,a)}throw Error(t(156,i.tag))};function Zp(n,i){return A(n,i)}function U0(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(n,i,a,c){return new U0(n,i,a,c)}function Au(n){return n=n.prototype,!(!n||!n.isReactComponent)}function z0(n){if(typeof n=="function")return Au(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===he)return 14}return 2}function fr(n,i){var a=n.alternate;return a===null?(a=ti(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function tl(n,i,a,c,h,m){var E=2;if(c=n,typeof n=="function")Au(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case z:return Gr(a.children,h,m,i);case W:E=8,h|=8;break;case C:return n=ti(12,a,i,h|2),n.elementType=C,n.lanes=m,n;case $:return n=ti(13,a,i,h),n.elementType=$,n.lanes=m,n;case oe:return n=ti(19,a,i,h),n.elementType=oe,n.lanes=m,n;case pe:return nl(a,h,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case b:E=10;break e;case G:E=9;break e;case re:E=11;break e;case he:E=14;break e;case ae:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ti(E,a,i,h),i.elementType=n,i.type=c,i.lanes=m,i}function Gr(n,i,a,c){return n=ti(7,n,c,i),n.lanes=a,n}function nl(n,i,a,c){return n=ti(22,n,c,i),n.elementType=pe,n.lanes=a,n.stateNode={isHidden:!1},n}function Ru(n,i,a){return n=ti(6,n,null,i),n.lanes=a,n}function Cu(n,i,a){return i=ti(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function F0(n,i,a,c,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=c,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function Pu(n,i,a,c,h,m,E,L,B){return n=new F0(n,i,a,L,B),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ti(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vc(m),n}function O0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function Qp(n){if(!n)return rr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(In(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(In(a))return bf(n,a,i)}return i}function Jp(n,i,a,c,h,m,E,L,B){return n=Pu(a,c,!0,n,h,m,E,L,B),n.context=Qp(null),a=n.current,c=Cn(),h=dr(a),m=Li(c,h),m.callback=i??null,or(a,m,h),n.current.lanes=h,$t(n,h,c),zn(n,c),n}function il(n,i,a,c){var h=i.current,m=Cn(),E=dr(h);return a=Qp(a),i.context===null?i.context=a:i.pendingContext=a,i=Li(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=or(h,i,E),n!==null&&(ui(n,h,E,m),Io(n,h,E)),E}function rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Du(n,i){em(n,i),(n=n.alternate)&&em(n,i)}function B0(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ku(n){this._internalRoot=n}sl.prototype.render=ku.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));il(n,i,null,null)},sl.prototype.unmount=ku.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){il(null,n,null,null)}),i[Ri]=null}};function sl(n){this._internalRoot=n}sl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zh();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Ji.length&&i!==0&&i<Ji[a].priority;a++);Ji.splice(a,0,n),a===0&&Bh(n)}};function Lu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function al(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nm(){}function G0(n,i,a,c,h){if(h){if(typeof c=="function"){var m=c;c=function(){var ee=rl(E);m.call(ee)}}var E=Jp(i,c,n,0,null,!1,!1,"",nm);return n._reactRootContainer=E,n[Ri]=E.current,ya(n.nodeType===8?n.parentNode:n),Fr(),E}for(;h=n.lastChild;)n.removeChild(h);if(typeof c=="function"){var L=c;c=function(){var ee=rl(B);L.call(ee)}}var B=Pu(n,0,!1,null,null,!1,!1,"",nm);return n._reactRootContainer=B,n[Ri]=B.current,ya(n.nodeType===8?n.parentNode:n),Fr(function(){il(i,B,a,c)}),B}function ol(n,i,a,c,h){var m=a._reactRootContainer;if(m){var E=m;if(typeof h=="function"){var L=h;h=function(){var B=rl(E);L.call(B)}}il(i,E,n,h)}else E=G0(a,i,n,h,c);return rl(E)}Nh=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=hn(i.pendingLanes);a!==0&&(Cr(i,a|1),zn(i,j()),(wt&6)===0&&(Ts=j()+500,sr()))}break;case 13:Fr(function(){var c=ki(n,1);if(c!==null){var h=Cn();ui(c,n,1,h)}}),Du(n,1)}},rc=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var a=Cn();ui(i,n,134217728,a)}Du(n,134217728)}},Uh=function(n){if(n.tag===13){var i=dr(n),a=ki(n,i);if(a!==null){var c=Cn();ui(a,n,i,c)}Du(n,i)}},zh=function(){return vt},Fh=function(n,i){var a=vt;try{return vt=n,i()}finally{vt=a}},Re=function(n,i,a){switch(i){case"input":if(ht(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var h=wo(c);if(!h)throw Error(t(90));_t(c),ht(c,h)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&k(n,!!a.multiple,i,!1)}},Ot=wu,en=Fr;var H0={usingClientEntryPoint:!1,Events:[Ma,hs,wo,De,at,wu]},Ua={findFiberByHostInstance:Pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V0={bundleType:Ua.bundleType,version:Ua.version,rendererPackageName:Ua.rendererPackageName,rendererConfig:Ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ao(n),n===null?null:n.stateNode},findFiberByHostInstance:Ua.findFiberByHostInstance||B0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ll=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ll.isDisabled&&ll.supportsFiber)try{qe=ll.inject(V0),ot=ll}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H0,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lu(i))throw Error(t(200));return O0(n,i,null,a)},Fn.createRoot=function(n,i){if(!Lu(n))throw Error(t(299));var a=!1,c="",h=tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=Pu(n,1,!1,null,null,a,!1,c,h),n[Ri]=i.current,ya(n.nodeType===8?n.parentNode:n),new ku(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ao(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Fr(n)},Fn.hydrate=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!Lu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,h=!1,m="",E=tm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Jp(i,null,n,1,a??null,h,!1,m,E),n[Ri]=i.current,ya(n),c)for(n=0;n<c.length;n++)a=c[n],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new sl(i)},Fn.render=function(n,i,a){if(!al(i))throw Error(t(200));return ol(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!al(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){ol(null,null,n,!1,function(){n._reactRootContainer=null,n[Ri]=null})}),!0):!1},Fn.unstable_batchedUpdates=wu,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!al(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ol(n,i,a,!1,c)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var um;function J0(){if(um)return Uu.exports;um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Uu.exports=Q0(),Uu.exports}var dm;function e_(){if(dm)return cl;dm=1;var s=J0();return cl.createRoot=s.createRoot,cl.hydrateRoot=s.hydrateRoot,cl}var t_=e_();const n_=dh(t_);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Eg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var r_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=Mt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...d},f)=>Mt.createElement("svg",{ref:f,...r_,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Eg("lucide",o),...d},[...u.map(([p,v])=>Mt.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=(s,e)=>{const t=Mt.forwardRef(({className:r,...o},l)=>Mt.createElement(s_,{ref:l,iconNode:e,className:Eg(`lucide-${i_(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=Vt("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=Vt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=Vt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=Vt("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tg=Vt("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=Vt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=Vt("Film",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=Vt("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=Vt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=Vt("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=Vt("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=Vt("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Vt("MonitorDot",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=Vt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=Vt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=Vt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=Vt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=Vt("Rotate3d",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=Vt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=Vt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=Vt("Stethoscope",[["path",{d:"M11 2v2",key:"1539x4"}],["path",{d:"M5 2v2",key:"1yf1q8"}],["path",{d:"M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",key:"rb5t3r"}],["path",{d:"M8 15a6 6 0 0 0 12 0v-3",key:"x18d4x"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=Vt("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=Vt("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=Vt("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=Vt("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fh="171",x_=0,mm=1,S_=2,bg=1,Ag=2,Gi=3,wr=0,On=1,Hi=2,Mr=0,Ws=1,gm=2,vm=3,_m=4,M_=5,$r=100,E_=101,w_=102,T_=103,b_=104,A_=200,R_=201,C_=202,P_=203,wd=204,Td=205,D_=206,k_=207,L_=208,I_=209,N_=210,U_=211,z_=212,F_=213,O_=214,bd=0,Ad=1,Rd=2,Ks=3,Cd=4,Pd=5,Dd=6,kd=7,Rg=0,B_=1,G_=2,Er=0,H_=1,V_=2,W_=3,Cg=4,j_=5,X_=6,q_=7,Pg=300,Ys=301,$s=302,Ld=303,Id=304,Ql=306,Nd=1e3,Qr=1001,Ud=1002,mi=1003,K_=1004,ul=1005,Ei=1006,Bu=1007,Jr=1008,Xi=1009,Dg=1010,kg=1011,Za=1012,ph=1013,es=1014,Vi=1015,Ja=1016,mh=1017,gh=1018,Zs=1020,Lg=35902,Ig=1021,Ng=1022,pi=1023,Ug=1024,zg=1025,js=1026,Qs=1027,Fg=1028,vh=1029,Og=1030,_h=1031,yh=1033,Fl=33776,Ol=33777,Bl=33778,Gl=33779,zd=35840,Fd=35841,Od=35842,Bd=35843,Gd=36196,Hd=37492,Vd=37496,Wd=37808,jd=37809,Xd=37810,qd=37811,Kd=37812,Yd=37813,$d=37814,Zd=37815,Qd=37816,Jd=37817,eh=37818,th=37819,nh=37820,ih=37821,Hl=36492,rh=36494,sh=36495,Bg=36283,ah=36284,oh=36285,lh=36286,Y_=3200,$_=3201,Gg=0,Z_=1,Sr="",Kn="srgb",Js="srgb-linear",ql="linear",It="srgb",As=7680,ym=519,Q_=512,J_=513,ey=514,Hg=515,ty=516,ny=517,iy=518,ry=519,xm=35044,Sm="300 es",Wi=2e3,Kl=2001;class ta{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Mm=1234567;const Xs=Math.PI/180,Qa=180/Math.PI;function na(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function xh(s,e){return(s%e+e)%e}function sy(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function ay(s,e,t){return s!==e?(t-s)/(e-s):0}function qa(s,e,t){return(1-t)*s+t*e}function oy(s,e,t,r){return qa(s,e,1-Math.exp(-t*r))}function ly(s,e=1){return e-Math.abs(xh(s,e*2)-e)}function cy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function uy(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dy(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hy(s,e){return s+Math.random()*(e-s)}function fy(s){return s*(.5-Math.random())}function py(s){s!==void 0&&(Mm=s);let e=Mm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function my(s){return s*Xs}function gy(s){return s*Qa}function vy(s){return(s&s-1)===0&&s!==0}function _y(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function yy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function xy(s,e,t,r,o){const l=Math.cos,u=Math.sin,d=l(t/2),f=u(t/2),p=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),y=u((e-r)/2),x=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":s.set(d*v,f*_,f*y,d*p);break;case"YZY":s.set(f*y,d*v,f*_,d*p);break;case"ZXZ":s.set(f*_,f*y,d*v,d*p);break;case"XZX":s.set(d*v,f*M,f*x,d*p);break;case"YXY":s.set(f*x,d*v,f*M,d*p);break;case"ZYZ":s.set(f*M,f*x,d*v,d*p);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Gs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Em={DEG2RAD:Xs,RAD2DEG:Qa,generateUUID:na,clamp:mt,euclideanModulo:xh,mapLinear:sy,inverseLerp:ay,lerp:qa,damp:oy,pingpong:ly,smoothstep:cy,smootherstep:uy,randInt:dy,randFloat:hy,randFloatSpread:fy,seededRandom:py,degToRad:my,radToDeg:gy,isPowerOfTwo:vy,ceilPowerOfTwo:_y,floorPowerOfTwo:yy,setQuaternionFromProperEuler:xy,normalize:Pn,denormalize:Gs};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ct{constructor(e,t,r,o,l,u,d,f,p){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p)}set(e,t,r,o,l,u,d,f,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=f,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[3],f=r[6],p=r[1],v=r[4],_=r[7],y=r[2],x=r[5],M=r[8],w=o[0],S=o[3],g=o[6],I=o[1],P=o[4],R=o[7],F=o[2],N=o[5],z=o[8];return l[0]=u*w+d*I+f*F,l[3]=u*S+d*P+f*N,l[6]=u*g+d*R+f*z,l[1]=p*w+v*I+_*F,l[4]=p*S+v*P+_*N,l[7]=p*g+v*R+_*z,l[2]=y*w+x*I+M*F,l[5]=y*S+x*P+M*N,l[8]=y*g+x*R+M*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-r*l*v+r*d*f+o*l*p-o*u*f}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8],_=v*u-d*p,y=d*f-v*l,x=p*l-u*f,M=t*_+r*y+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/M;return e[0]=_*w,e[1]=(o*p-v*r)*w,e[2]=(d*r-o*u)*w,e[3]=y*w,e[4]=(v*t-o*f)*w,e[5]=(o*l-d*t)*w,e[6]=x*w,e[7]=(r*f-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,d){const f=Math.cos(l),p=Math.sin(l);return this.set(r*f,r*p,-r*(f*u+p*d)+u+e,-o*p,o*f,-o*(-p*u+f*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new ct;function Vg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Yl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Sy(){const s=Yl("canvas");return s.style.display="block",s}const wm={};function Hs(s){s in wm||(wm[s]=!0,console.warn(s))}function My(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Ey(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function wy(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Tm=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bm=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){const s={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(o.r=ji(o.r),o.g=ji(o.g),o.b=ji(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(o.r=qs(o.r),o.g=qs(o.g),o.b=qs(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Sr?ql:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Js]:{primaries:e,whitePoint:r,transfer:ql,toXYZ:Tm,fromXYZ:bm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kn},outputColorSpaceConfig:{drawingBufferColorSpace:Kn}},[Kn]:{primaries:e,whitePoint:r,transfer:It,toXYZ:Tm,fromXYZ:bm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kn}}}),s}const Rt=Ty();function ji(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Rs;class by{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Rs===void 0&&(Rs=Yl("canvas")),Rs.width=e.width,Rs.height=e.height;const r=Rs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Rs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Yl("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=ji(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ji(t[r]/255)*255):t[r]=ji(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ay=0;class Wg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Hu(o[u].image)):l.push(Hu(o[u]))}else l=Hu(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Hu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?by.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ry=0;class Bn extends ta{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Qr,o=Qr,l=Ei,u=Jr,d=pi,f=Xi,p=Bn.DEFAULT_ANISOTROPY,v=Sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=na(),this.name="",this.source=new Wg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case Ud:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case Ud:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Pg;Bn.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,r=0,o=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const f=e.elements,p=f[0],v=f[4],_=f[8],y=f[1],x=f[5],M=f[9],w=f[2],S=f[6],g=f[10];if(Math.abs(v-y)<.01&&Math.abs(_-w)<.01&&Math.abs(M-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(_+w)<.1&&Math.abs(M+S)<.1&&Math.abs(p+x+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(p+1)/2,R=(x+1)/2,F=(g+1)/2,N=(v+y)/4,z=(_+w)/4,W=(M+S)/4;return P>R&&P>F?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=N/r,l=z/r):R>F?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=N/o,l=W/o):F<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(F),r=z/l,o=W/l),this.set(r,o,l,t),this}let I=Math.sqrt((S-M)*(S-M)+(_-w)*(_-w)+(y-v)*(y-v));return Math.abs(I)<.001&&(I=1),this.x=(S-M)/I,this.y=(_-w)/I,this.z=(y-v)/I,this.w=Math.acos((p+x+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cy extends ta{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Wg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends Cy{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class jg extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Py extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,d){let f=r[o+0],p=r[o+1],v=r[o+2],_=r[o+3];const y=l[u+0],x=l[u+1],M=l[u+2],w=l[u+3];if(d===0){e[t+0]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=x,e[t+2]=M,e[t+3]=w;return}if(_!==w||f!==y||p!==x||v!==M){let S=1-d;const g=f*y+p*x+v*M+_*w,I=g>=0?1:-1,P=1-g*g;if(P>Number.EPSILON){const F=Math.sqrt(P),N=Math.atan2(F,g*I);S=Math.sin(S*N)/F,d=Math.sin(d*N)/F}const R=d*I;if(f=f*S+y*R,p=p*S+x*R,v=v*S+M*R,_=_*S+w*R,S===1-d){const F=1/Math.sqrt(f*f+p*p+v*v+_*_);f*=F,p*=F,v*=F,_*=F}}e[t]=f,e[t+1]=p,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const d=r[o],f=r[o+1],p=r[o+2],v=r[o+3],_=l[u],y=l[u+1],x=l[u+2],M=l[u+3];return e[t]=d*M+v*_+f*x-p*y,e[t+1]=f*M+v*y+p*_-d*x,e[t+2]=p*M+v*x+d*y-f*_,e[t+3]=v*M-d*_-f*y-p*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,f=Math.sin,p=d(r/2),v=d(o/2),_=d(l/2),y=f(r/2),x=f(o/2),M=f(l/2);switch(u){case"XYZ":this._x=y*v*_+p*x*M,this._y=p*x*_-y*v*M,this._z=p*v*M+y*x*_,this._w=p*v*_-y*x*M;break;case"YXZ":this._x=y*v*_+p*x*M,this._y=p*x*_-y*v*M,this._z=p*v*M-y*x*_,this._w=p*v*_+y*x*M;break;case"ZXY":this._x=y*v*_-p*x*M,this._y=p*x*_+y*v*M,this._z=p*v*M+y*x*_,this._w=p*v*_-y*x*M;break;case"ZYX":this._x=y*v*_-p*x*M,this._y=p*x*_+y*v*M,this._z=p*v*M-y*x*_,this._w=p*v*_+y*x*M;break;case"YZX":this._x=y*v*_+p*x*M,this._y=p*x*_+y*v*M,this._z=p*v*M-y*x*_,this._w=p*v*_-y*x*M;break;case"XZY":this._x=y*v*_-p*x*M,this._y=p*x*_-y*v*M,this._z=p*v*M+y*x*_,this._w=p*v*_+y*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],d=t[5],f=t[9],p=t[2],v=t[6],_=t[10],y=r+d+_;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-f)*x,this._y=(l-p)*x,this._z=(u-o)*x}else if(r>d&&r>_){const x=2*Math.sqrt(1+r-d-_);this._w=(v-f)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+p)/x}else if(d>_){const x=2*Math.sqrt(1+d-r-_);this._w=(l-p)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(f+v)/x}else{const x=2*Math.sqrt(1+_-r-d);this._w=(u-o)/x,this._x=(l+p)/x,this._y=(f+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,d=t._x,f=t._y,p=t._z,v=t._w;return this._x=r*v+u*d+o*p-l*f,this._y=o*v+u*f+l*d-r*p,this._z=l*v+u*p+r*f-o*d,this._w=u*v-r*d-o*f-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const f=1-d*d;if(f<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const p=Math.sqrt(f),v=Math.atan2(p,d),_=Math.sin((1-t)*v)/p,y=Math.sin(t*v)/p;return this._w=u*_+this._w*y,this._x=r*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,r=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Am.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Am.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,d=e.z,f=e.w,p=2*(u*o-d*r),v=2*(d*t-l*o),_=2*(l*r-u*t);return this.x=t+f*p+u*_-d*v,this.y=r+f*v+d*p-l*_,this.z=o+f*_+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,d=t.y,f=t.z;return this.x=o*f-l*d,this.y=l*u-r*f,this.z=r*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vu.copy(this).projectOnVector(e),this.sub(Vu)}reflect(e){return this.sub(Vu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vu=new H,Am=new eo;class to{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,di):di.fromBufferAttribute(l,u),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),dl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),dl.copy(r.boundingBox)),dl.applyMatrix4(e.matrixWorld),this.union(dl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),hl.subVectors(this.max,Fa),Cs.subVectors(e.a,Fa),Ps.subVectors(e.b,Fa),Ds.subVectors(e.c,Fa),mr.subVectors(Ps,Cs),gr.subVectors(Ds,Ps),Hr.subVectors(Cs,Ds);let t=[0,-mr.z,mr.y,0,-gr.z,gr.y,0,-Hr.z,Hr.y,mr.z,0,-mr.x,gr.z,0,-gr.x,Hr.z,0,-Hr.x,-mr.y,mr.x,0,-gr.y,gr.x,0,-Hr.y,Hr.x,0];return!Wu(t,Cs,Ps,Ds,hl)||(t=[1,0,0,0,1,0,0,0,1],!Wu(t,Cs,Ps,Ds,hl))?!1:(fl.crossVectors(mr,gr),t=[fl.x,fl.y,fl.z],Wu(t,Cs,Ps,Ds,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ui=[new H,new H,new H,new H,new H,new H,new H,new H],di=new H,dl=new to,Cs=new H,Ps=new H,Ds=new H,mr=new H,gr=new H,Hr=new H,Fa=new H,hl=new H,fl=new H,Vr=new H;function Wu(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Vr.fromArray(s,l);const d=o.x*Math.abs(Vr.x)+o.y*Math.abs(Vr.y)+o.z*Math.abs(Vr.z),f=e.dot(Vr),p=t.dot(Vr),v=r.dot(Vr);if(Math.max(-Math.max(f,p,v),Math.min(f,p,v))>d)return!1}return!0}const Dy=new to,Oa=new H,ju=new H;class Jl{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Dy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(ju)),this.expandByPoint(Oa.copy(e.center).sub(ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new H,Xu=new H,pl=new H,vr=new H,qu=new H,ml=new H,Ku=new H;class Sh{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Xu.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Xu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(pl),d=vr.dot(this.direction),f=-vr.dot(pl),p=vr.lengthSq(),v=Math.abs(1-u*u);let _,y,x,M;if(v>0)if(_=u*f-d,y=u*d-f,M=l*v,_>=0)if(y>=-M)if(y<=M){const w=1/v;_*=w,y*=w,x=_*(_+u*y+2*d)+y*(u*_+y+2*f)+p}else y=l,_=Math.max(0,-(u*y+d)),x=-_*_+y*(y+2*f)+p;else y=-l,_=Math.max(0,-(u*y+d)),x=-_*_+y*(y+2*f)+p;else y<=-M?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-f),l),x=-_*_+y*(y+2*f)+p):y<=M?(_=0,y=Math.min(Math.max(-l,-f),l),x=y*(y+2*f)+p):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-f),l),x=-_*_+y*(y+2*f)+p);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),x=-_*_+y*(y+2*f)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Xu).addScaledVector(pl,y),x}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),o=zi.dot(zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=r-u,f=r+u;return f<0?null:d<0?this.at(f,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,d,f;const p=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),v>=0?(l=(e.min.y-y.y)*v,u=(e.max.y-y.y)*v):(l=(e.max.y-y.y)*v,u=(e.min.y-y.y)*v),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-y.z)*_,f=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,f=(e.min.z-y.z)*_),r>f||d>o)||((d>r||r!==r)&&(r=d),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,o,l){qu.subVectors(t,e),ml.subVectors(r,e),Ku.crossVectors(qu,ml);let u=this.direction.dot(Ku),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;vr.subVectors(this.origin,e);const f=d*this.direction.dot(ml.crossVectors(vr,ml));if(f<0)return null;const p=d*this.direction.dot(qu.cross(vr));if(p<0||f+p>u)return null;const v=-d*vr.dot(Ku);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,r,o,l,u,d,f,p,v,_,y,x,M,w,S){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,d,f,p,v,_,y,x,M,w,S)}set(e,t,r,o,l,u,d,f,p,v,_,y,x,M,w,S){const g=this.elements;return g[0]=e,g[4]=t,g[8]=r,g[12]=o,g[1]=l,g[5]=u,g[9]=d,g[13]=f,g[2]=p,g[6]=v,g[10]=_,g[14]=y,g[3]=x,g[7]=M,g[11]=w,g[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/ks.setFromMatrixColumn(e,0).length(),l=1/ks.setFromMatrixColumn(e,1).length(),u=1/ks.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),f=Math.cos(o),p=Math.sin(o),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*v,x=u*_,M=d*v,w=d*_;t[0]=f*v,t[4]=-f*_,t[8]=p,t[1]=x+M*p,t[5]=y-w*p,t[9]=-d*f,t[2]=w-y*p,t[6]=M+x*p,t[10]=u*f}else if(e.order==="YXZ"){const y=f*v,x=f*_,M=p*v,w=p*_;t[0]=y+w*d,t[4]=M*d-x,t[8]=u*p,t[1]=u*_,t[5]=u*v,t[9]=-d,t[2]=x*d-M,t[6]=w+y*d,t[10]=u*f}else if(e.order==="ZXY"){const y=f*v,x=f*_,M=p*v,w=p*_;t[0]=y-w*d,t[4]=-u*_,t[8]=M+x*d,t[1]=x+M*d,t[5]=u*v,t[9]=w-y*d,t[2]=-u*p,t[6]=d,t[10]=u*f}else if(e.order==="ZYX"){const y=u*v,x=u*_,M=d*v,w=d*_;t[0]=f*v,t[4]=M*p-x,t[8]=y*p+w,t[1]=f*_,t[5]=w*p+y,t[9]=x*p-M,t[2]=-p,t[6]=d*f,t[10]=u*f}else if(e.order==="YZX"){const y=u*f,x=u*p,M=d*f,w=d*p;t[0]=f*v,t[4]=w-y*_,t[8]=M*_+x,t[1]=_,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=x*_+M,t[10]=y-w*_}else if(e.order==="XZY"){const y=u*f,x=u*p,M=d*f,w=d*p;t[0]=f*v,t[4]=-_,t[8]=p*v,t[1]=y*_+w,t[5]=u*v,t[9]=x*_-M,t[2]=M*_-x,t[6]=d*v,t[10]=w*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ky,e,Ly)}lookAt(e,t,r){const o=this.elements;return Xn.subVectors(e,t),Xn.lengthSq()===0&&(Xn.z=1),Xn.normalize(),_r.crossVectors(r,Xn),_r.lengthSq()===0&&(Math.abs(r.z)===1?Xn.x+=1e-4:Xn.z+=1e-4,Xn.normalize(),_r.crossVectors(r,Xn)),_r.normalize(),gl.crossVectors(Xn,_r),o[0]=_r.x,o[4]=gl.x,o[8]=Xn.x,o[1]=_r.y,o[5]=gl.y,o[9]=Xn.y,o[2]=_r.z,o[6]=gl.z,o[10]=Xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],d=r[4],f=r[8],p=r[12],v=r[1],_=r[5],y=r[9],x=r[13],M=r[2],w=r[6],S=r[10],g=r[14],I=r[3],P=r[7],R=r[11],F=r[15],N=o[0],z=o[4],W=o[8],C=o[12],b=o[1],G=o[5],re=o[9],$=o[13],oe=o[2],he=o[6],ae=o[10],pe=o[14],O=o[3],le=o[7],te=o[11],U=o[15];return l[0]=u*N+d*b+f*oe+p*O,l[4]=u*z+d*G+f*he+p*le,l[8]=u*W+d*re+f*ae+p*te,l[12]=u*C+d*$+f*pe+p*U,l[1]=v*N+_*b+y*oe+x*O,l[5]=v*z+_*G+y*he+x*le,l[9]=v*W+_*re+y*ae+x*te,l[13]=v*C+_*$+y*pe+x*U,l[2]=M*N+w*b+S*oe+g*O,l[6]=M*z+w*G+S*he+g*le,l[10]=M*W+w*re+S*ae+g*te,l[14]=M*C+w*$+S*pe+g*U,l[3]=I*N+P*b+R*oe+F*O,l[7]=I*z+P*G+R*he+F*le,l[11]=I*W+P*re+R*ae+F*te,l[15]=I*C+P*$+R*pe+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],d=e[5],f=e[9],p=e[13],v=e[2],_=e[6],y=e[10],x=e[14],M=e[3],w=e[7],S=e[11],g=e[15];return M*(+l*f*_-o*p*_-l*d*y+r*p*y+o*d*x-r*f*x)+w*(+t*f*x-t*p*y+l*u*y-o*u*x+o*p*v-l*f*v)+S*(+t*p*_-t*d*x-l*u*_+r*u*x+l*d*v-r*p*v)+g*(-o*d*v-t*f*_+t*d*y+o*u*_-r*u*y+r*f*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],d=e[5],f=e[6],p=e[7],v=e[8],_=e[9],y=e[10],x=e[11],M=e[12],w=e[13],S=e[14],g=e[15],I=_*S*p-w*y*p+w*f*x-d*S*x-_*f*g+d*y*g,P=M*y*p-v*S*p-M*f*x+u*S*x+v*f*g-u*y*g,R=v*w*p-M*_*p+M*d*x-u*w*x-v*d*g+u*_*g,F=M*_*f-v*w*f-M*d*y+u*w*y+v*d*S-u*_*S,N=t*I+r*P+o*R+l*F;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/N;return e[0]=I*z,e[1]=(w*y*l-_*S*l-w*o*x+r*S*x+_*o*g-r*y*g)*z,e[2]=(d*S*l-w*f*l+w*o*p-r*S*p-d*o*g+r*f*g)*z,e[3]=(_*f*l-d*y*l-_*o*p+r*y*p+d*o*x-r*f*x)*z,e[4]=P*z,e[5]=(v*S*l-M*y*l+M*o*x-t*S*x-v*o*g+t*y*g)*z,e[6]=(M*f*l-u*S*l-M*o*p+t*S*p+u*o*g-t*f*g)*z,e[7]=(u*y*l-v*f*l+v*o*p-t*y*p-u*o*x+t*f*x)*z,e[8]=R*z,e[9]=(M*_*l-v*w*l-M*r*x+t*w*x+v*r*g-t*_*g)*z,e[10]=(u*w*l-M*d*l+M*r*p-t*w*p-u*r*g+t*d*g)*z,e[11]=(v*d*l-u*_*l-v*r*p+t*_*p+u*r*x-t*d*x)*z,e[12]=F*z,e[13]=(v*w*o-M*_*o+M*r*y-t*w*y-v*r*S+t*_*S)*z,e[14]=(M*d*o-u*w*o-M*r*f+t*w*f+u*r*S-t*d*S)*z,e[15]=(u*_*o-v*d*o+v*r*f-t*_*f-u*r*y+t*d*y)*z,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,d=e.y,f=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-o*f,p*f+o*d,0,p*d+o*f,v*d+r,v*f-o*u,0,p*f-o*d,v*f+o*u,l*f*f+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,d=t._z,f=t._w,p=l+l,v=u+u,_=d+d,y=l*p,x=l*v,M=l*_,w=u*v,S=u*_,g=d*_,I=f*p,P=f*v,R=f*_,F=r.x,N=r.y,z=r.z;return o[0]=(1-(w+g))*F,o[1]=(x+R)*F,o[2]=(M-P)*F,o[3]=0,o[4]=(x-R)*N,o[5]=(1-(y+g))*N,o[6]=(S+I)*N,o[7]=0,o[8]=(M+P)*z,o[9]=(S-I)*z,o[10]=(1-(y+w))*z,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=ks.set(o[0],o[1],o[2]).length();const u=ks.set(o[4],o[5],o[6]).length(),d=ks.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],hi.copy(this);const p=1/l,v=1/u,_=1/d;return hi.elements[0]*=p,hi.elements[1]*=p,hi.elements[2]*=p,hi.elements[4]*=v,hi.elements[5]*=v,hi.elements[6]*=v,hi.elements[8]*=_,hi.elements[9]*=_,hi.elements[10]*=_,t.setFromRotationMatrix(hi),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,o,l,u,d=Wi){const f=this.elements,p=2*l/(t-e),v=2*l/(r-o),_=(t+e)/(t-e),y=(r+o)/(r-o);let x,M;if(d===Wi)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===Kl)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return f[0]=p,f[4]=0,f[8]=_,f[12]=0,f[1]=0,f[5]=v,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=M,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,r,o,l,u,d=Wi){const f=this.elements,p=1/(t-e),v=1/(r-o),_=1/(u-l),y=(t+e)*p,x=(r+o)*v;let M,w;if(d===Wi)M=(u+l)*_,w=-2*_;else if(d===Kl)M=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return f[0]=2*p,f[4]=0,f[8]=0,f[12]=-y,f[1]=0,f[5]=2*v,f[9]=0,f[13]=-x,f[2]=0,f[6]=0,f[10]=w,f[14]=-M,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const ks=new H,hi=new Ft,ky=new H(0,0,0),Ly=new H(1,1,1),_r=new H,gl=new H,Xn=new H,Rm=new Ft,Cm=new eo;class Ti{constructor(e=0,t=0,r=0,o=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],f=o[1],p=o[5],v=o[9],_=o[2],y=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(f,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,x),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Rm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cm.setFromEuler(this),this.setFromQuaternion(Cm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Iy=0;const Pm=new H,Ls=new eo,Fi=new Ft,vl=new H,Ba=new H,Ny=new H,Uy=new eo,Dm=new H(1,0,0),km=new H(0,1,0),Lm=new H(0,0,1),Im={type:"added"},zy={type:"removed"},Is={type:"childadded",child:null},Yu={type:"childremoved",child:null};class dn extends ta{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new H,t=new Ti,r=new eo,o=new H(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Ft},normalMatrix:{value:new ct}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(km,e)}rotateZ(e){return this.rotateOnAxis(Lm,e)}translateOnAxis(e,t){return Pm.copy(e).applyQuaternion(this.quaternion),this.position.add(Pm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(km,e)}translateZ(e){return this.translateOnAxis(Lm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?vl.copy(e):vl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fi.lookAt(Ba,vl,this.up):Fi.lookAt(vl,Ba,this.up),this.quaternion.setFromRotationMatrix(Fi),o&&(Fi.extractRotation(o.matrixWorld),Ls.setFromRotationMatrix(Fi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Im),Is.child=e,this.dispatchEvent(Is),Is.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zy),Yu.child=e,this.dispatchEvent(Yu),Yu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Im),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,f){return d[f.uuid]===void 0&&(d[f.uuid]=f.toJSON(e)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const f=d.shapes;if(Array.isArray(f))for(let p=0,v=f.length;p<v;p++){const _=f[p];l(e.shapes,_)}else l(e.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let f=0,p=this.material.length;f<p;f++)d.push(l(e.materials,this.material[f]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const f=this.animations[d];o.animations.push(l(e.animations,f))}}if(t){const d=u(e.geometries),f=u(e.materials),p=u(e.textures),v=u(e.images),_=u(e.shapes),y=u(e.skeletons),x=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),f.length>0&&(r.materials=f),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),y.length>0&&(r.skeletons=y),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(d){const f=[];for(const p in d){const v=d[p];delete v.metadata,f.push(v)}return f}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}dn.DEFAULT_UP=new H(0,1,0);dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fi=new H,Oi=new H,$u=new H,Bi=new H,Ns=new H,Us=new H,Nm=new H,Zu=new H,Qu=new H,Ju=new H,ed=new Nt,td=new Nt,nd=new Nt;class ii{constructor(e=new H,t=new H,r=new H){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),fi.subVectors(e,t),o.cross(fi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){fi.subVectors(o,t),Oi.subVectors(r,t),$u.subVectors(e,t);const u=fi.dot(fi),d=fi.dot(Oi),f=fi.dot($u),p=Oi.dot(Oi),v=Oi.dot($u),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,x=(p*f-d*v)*y,M=(u*v-d*f)*y;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,o,l,u,d,f){return this.getBarycoord(e,t,r,o,Bi)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Bi.x),f.addScaledVector(u,Bi.y),f.addScaledVector(d,Bi.z),f)}static getInterpolatedAttribute(e,t,r,o,l,u){return ed.setScalar(0),td.setScalar(0),nd.setScalar(0),ed.fromBufferAttribute(e,t),td.fromBufferAttribute(e,r),nd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(ed,l.x),u.addScaledVector(td,l.y),u.addScaledVector(nd,l.z),u}static isFrontFacing(e,t,r,o){return fi.subVectors(r,t),Oi.subVectors(e,t),fi.cross(Oi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ii.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return ii.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,d;Ns.subVectors(o,r),Us.subVectors(l,r),Zu.subVectors(e,r);const f=Ns.dot(Zu),p=Us.dot(Zu);if(f<=0&&p<=0)return t.copy(r);Qu.subVectors(e,o);const v=Ns.dot(Qu),_=Us.dot(Qu);if(v>=0&&_<=v)return t.copy(o);const y=f*_-v*p;if(y<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(r).addScaledVector(Ns,u);Ju.subVectors(e,l);const x=Ns.dot(Ju),M=Us.dot(Ju);if(M>=0&&x<=M)return t.copy(l);const w=x*p-f*M;if(w<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(Us,d);const S=v*M-x*_;if(S<=0&&_-v>=0&&x-M>=0)return Nm.subVectors(l,o),d=(_-v)/(_-v+(x-M)),t.copy(o).addScaledVector(Nm,d);const g=1/(S+w+y);return u=w*g,d=y*g,t.copy(r).addScaledVector(Ns,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function id(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Rt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Rt.workingColorSpace){if(e=xh(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=id(u,l,e+1/3),this.g=id(u,l,e),this.b=id(u,l,e-1/3)}return Rt.toWorkingColorSpace(this,o),this}setStyle(e,t=Kn){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kn){const r=Xg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kn){return Rt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(mt(Mn.r*255,0,255))*65536+Math.round(mt(Mn.g*255,0,255))*256+Math.round(mt(Mn.b*255,0,255))}getHexString(e=Kn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(Mn.copy(this),t);const r=Mn.r,o=Mn.g,l=Mn.b,u=Math.max(r,o,l),d=Math.min(r,o,l);let f,p;const v=(d+u)/2;if(d===u)f=0,p=0;else{const _=u-d;switch(p=v<=.5?_/(u+d):_/(2-u-d),u){case r:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-r)/_+2;break;case l:f=(r-o)/_+4;break}f/=6}return e.h=f,e.s=p,e.l=v,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Kn){Rt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,o=Mn.b;return e!==Kn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+t,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(yr),e.getHSL(_l);const r=qa(yr.h,_l.h,t),o=qa(yr.s,_l.s,t),l=qa(yr.l,_l.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new yt;yt.NAMES=Xg;let Fy=0;class ia extends ta{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=na(),this.name="",this.type="Material",this.blending=Ws,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Td,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ym,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=As,this.stencilZFail=As,this.stencilZPass=As,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==wd&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==$r&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ym&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==As&&(r.stencilFail=this.stencilFail),this.stencilZFail!==As&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==As&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const d in l){const f=l[d];delete f.metadata,u.push(f)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qg extends ia{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Rg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new H,yl=new Je;class wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=xm,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Gs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Pn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),r=Pn(r,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xm&&(e.usage=this.usage),e}}class Kg extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Yg extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Ht extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Oy=0;const ni=new Ft,rd=new dn,zs=new H,qn=new to,Ga=new to,cn=new H;class Gn extends ta{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vg(e)?Yg:Kg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ct().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,r){return ni.makeTranslation(e,t,r),this.applyMatrix4(ni),this}scale(e,t,r){return ni.makeScale(e,t,r),this.applyMatrix4(ni),this}lookAt(e){return rd.lookAt(e),rd.updateMatrix(),this.applyMatrix4(rd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ht(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new to);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];qn.setFromBufferAttribute(l),this.morphTargetsRelative?(cn.addVectors(this.boundingBox.min,qn.min),this.boundingBox.expandByPoint(cn),cn.addVectors(this.boundingBox.max,qn.max),this.boundingBox.expandByPoint(cn)):(this.boundingBox.expandByPoint(qn.min),this.boundingBox.expandByPoint(qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const r=this.boundingSphere.center;if(qn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ga.setFromBufferAttribute(d),this.morphTargetsRelative?(cn.addVectors(qn.min,Ga.min),qn.expandByPoint(cn),cn.addVectors(qn.max,Ga.max),qn.expandByPoint(cn)):(qn.expandByPoint(Ga.min),qn.expandByPoint(Ga.max))}qn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)cn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(cn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],f=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)cn.fromBufferAttribute(d,p),f&&(zs.fromBufferAttribute(e,p),cn.add(zs)),o=Math.max(o,r.distanceToSquared(cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],f=[];for(let W=0;W<r.count;W++)d[W]=new H,f[W]=new H;const p=new H,v=new H,_=new H,y=new Je,x=new Je,M=new Je,w=new H,S=new H;function g(W,C,b){p.fromBufferAttribute(r,W),v.fromBufferAttribute(r,C),_.fromBufferAttribute(r,b),y.fromBufferAttribute(l,W),x.fromBufferAttribute(l,C),M.fromBufferAttribute(l,b),v.sub(p),_.sub(p),x.sub(y),M.sub(y);const G=1/(x.x*M.y-M.x*x.y);isFinite(G)&&(w.copy(v).multiplyScalar(M.y).addScaledVector(_,-x.y).multiplyScalar(G),S.copy(_).multiplyScalar(x.x).addScaledVector(v,-M.x).multiplyScalar(G),d[W].add(w),d[C].add(w),d[b].add(w),f[W].add(S),f[C].add(S),f[b].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let W=0,C=I.length;W<C;++W){const b=I[W],G=b.start,re=b.count;for(let $=G,oe=G+re;$<oe;$+=3)g(e.getX($+0),e.getX($+1),e.getX($+2))}const P=new H,R=new H,F=new H,N=new H;function z(W){F.fromBufferAttribute(o,W),N.copy(F);const C=d[W];P.copy(C),P.sub(F.multiplyScalar(F.dot(C))).normalize(),R.crossVectors(N,C);const G=R.dot(f[W])<0?-1:1;u.setXYZW(W,P.x,P.y,P.z,G)}for(let W=0,C=I.length;W<C;++W){const b=I[W],G=b.start,re=b.count;for(let $=G,oe=G+re;$<oe;$+=3)z(e.getX($+0)),z(e.getX($+1)),z(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let y=0,x=r.count;y<x;y++)r.setXYZ(y,0,0,0);const o=new H,l=new H,u=new H,d=new H,f=new H,p=new H,v=new H,_=new H;if(e)for(let y=0,x=e.count;y<x;y+=3){const M=e.getX(y+0),w=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,S),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),d.fromBufferAttribute(r,M),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,S),d.add(v),f.add(v),p.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,x=t.count;y<x;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),v.subVectors(u,l),_.subVectors(o,l),v.cross(_),r.setXYZ(y+0,v.x,v.y,v.z),r.setXYZ(y+1,v.x,v.y,v.z),r.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)cn.fromBufferAttribute(e,t),cn.normalize(),e.setXYZ(t,cn.x,cn.y,cn.z)}toNonIndexed(){function e(d,f){const p=d.array,v=d.itemSize,_=d.normalized,y=new p.constructor(f.length*v);let x=0,M=0;for(let w=0,S=f.length;w<S;w++){d.isInterleavedBufferAttribute?x=f[w]*d.data.stride+d.offset:x=f[w]*v;for(let g=0;g<v;g++)y[M++]=p[x++]}return new wi(y,v,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Gn,r=this.index.array,o=this.attributes;for(const d in o){const f=o[d],p=e(f,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const f=[],p=l[d];for(let v=0,_=p.length;v<_;v++){const y=p[v],x=e(y,r);f.push(x)}t.morphAttributes[d]=f}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,f=u.length;d<f;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const p in f)f[p]!==void 0&&(e[p]=f[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const f in r){const p=r[f];e.data.attributes[f]=p.toJSON(e.data)}const o={};let l=!1;for(const f in this.morphAttributes){const p=this.morphAttributes[f],v=[];for(let _=0,y=p.length;_<y;_++){const x=p[_];v.push(x.toJSON(e.data))}v.length>0&&(o[f]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],_=l[p];for(let y=0,x=_.length;y<x;y++)v.push(_[y].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const f=e.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Um=new Ft,Wr=new Sh,xl=new Jl,zm=new H,Sl=new H,Ml=new H,El=new H,sd=new H,wl=new H,Fm=new H,Tl=new H;class En extends dn{constructor(e=new Gn,t=new qg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){wl.set(0,0,0);for(let f=0,p=l.length;f<p;f++){const v=d[f],_=l[f];v!==0&&(sd.fromBufferAttribute(_,e),u?wl.addScaledVector(sd,v):wl.addScaledVector(sd.sub(t),v))}t.add(wl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),xl.copy(r.boundingSphere),xl.applyMatrix4(l),Wr.copy(e.ray).recast(e.near),!(xl.containsPoint(Wr.origin)===!1&&(Wr.intersectSphere(xl,zm)===null||Wr.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Um.copy(l).invert(),Wr.copy(e.ray).applyMatrix4(Um),!(r.boundingBox!==null&&Wr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Wr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,d=l.index,f=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,y=l.groups,x=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,w=y.length;M<w;M++){const S=y[M],g=u[S.materialIndex],I=Math.max(S.start,x.start),P=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let R=I,F=P;R<F;R+=3){const N=d.getX(R),z=d.getX(R+1),W=d.getX(R+2);o=bl(this,g,e,r,p,v,_,N,z,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(d.count,x.start+x.count);for(let S=M,g=w;S<g;S+=3){const I=d.getX(S),P=d.getX(S+1),R=d.getX(S+2);o=bl(this,u,e,r,p,v,_,I,P,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(f!==void 0)if(Array.isArray(u))for(let M=0,w=y.length;M<w;M++){const S=y[M],g=u[S.materialIndex],I=Math.max(S.start,x.start),P=Math.min(f.count,Math.min(S.start+S.count,x.start+x.count));for(let R=I,F=P;R<F;R+=3){const N=R,z=R+1,W=R+2;o=bl(this,g,e,r,p,v,_,N,z,W),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),w=Math.min(f.count,x.start+x.count);for(let S=M,g=w;S<g;S+=3){const I=S,P=S+1,R=S+2;o=bl(this,u,e,r,p,v,_,I,P,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function By(s,e,t,r,o,l,u,d){let f;if(e.side===On?f=r.intersectTriangle(u,l,o,!0,d):f=r.intersectTriangle(o,l,u,e.side===wr,d),f===null)return null;Tl.copy(d),Tl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Tl);return p<t.near||p>t.far?null:{distance:p,point:Tl.clone(),object:s}}function bl(s,e,t,r,o,l,u,d,f,p){s.getVertexPosition(d,Sl),s.getVertexPosition(f,Ml),s.getVertexPosition(p,El);const v=By(s,e,t,r,Sl,Ml,El,Fm);if(v){const _=new H;ii.getBarycoord(Fm,Sl,Ml,El,_),o&&(v.uv=ii.getInterpolatedAttribute(o,d,f,p,_,new Je)),l&&(v.uv1=ii.getInterpolatedAttribute(l,d,f,p,_,new Je)),u&&(v.normal=ii.getInterpolatedAttribute(u,d,f,p,_,new H),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:f,c:p,normal:new H,materialIndex:0};ii.getNormal(Sl,Ml,El,y.normal),v.face=y,v.barycoord=_}return v}class ra extends Gn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const f=[],p=[],v=[],_=[];let y=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new Ht(p,3)),this.setAttribute("normal",new Ht(v,3)),this.setAttribute("uv",new Ht(_,2));function M(w,S,g,I,P,R,F,N,z,W,C){const b=R/z,G=F/W,re=R/2,$=F/2,oe=N/2,he=z+1,ae=W+1;let pe=0,O=0;const le=new H;for(let te=0;te<ae;te++){const U=te*G-$;for(let se=0;se<he;se++){const Ne=se*b-re;le[w]=Ne*I,le[S]=U*P,le[g]=oe,p.push(le.x,le.y,le.z),le[w]=0,le[S]=0,le[g]=N>0?1:-1,v.push(le.x,le.y,le.z),_.push(se/z),_.push(1-te/W),pe+=1}}for(let te=0;te<W;te++)for(let U=0;U<z;U++){const se=y+U+he*te,Ne=y+U+he*(te+1),J=y+(U+1)+he*(te+1),ue=y+(U+1)+he*te;f.push(se,Ne,ue),f.push(Ne,J,ue),O+=6}d.addGroup(x,O,C),x+=O,y+=pe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ea(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Dn(s){const e={};for(let t=0;t<s.length;t++){const r=ea(s[t]);for(const o in r)e[o]=r[o]}return e}function Gy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Hy={clone:ea,merge:Dn};var Vy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends ia{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ea(e.uniforms),this.uniformsGroups=Gy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Zg extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xr=new H,Om=new Je,Bm=new Je;class Yn extends Zg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){xr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(xr.x,xr.y).multiplyScalar(-e/xr.z),xr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(xr.x,xr.y).multiplyScalar(-e/xr.z)}getViewSize(e,t){return this.getViewBounds(e,Om,Bm),t.subVectors(Bm,Om)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xs*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const f=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/f,t-=u.offsetY*r/p,o*=u.width/f,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fs=-90,Os=1;class jy extends dn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(Fs,Os,e,t);o.layers=this.layers,this.add(o);const l=new Yn(Fs,Os,e,t);l.layers=this.layers,this.add(l);const u=new Yn(Fs,Os,e,t);u.layers=this.layers,this.add(u);const d=new Yn(Fs,Os,e,t);d.layers=this.layers,this.add(d);const f=new Yn(Fs,Os,e,t);f.layers=this.layers,this.add(f);const p=new Yn(Fs,Os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,d,f]=t;for(const p of t)this.remove(p);if(e===Wi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(e===Kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,f,p,v]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,d),e.setRenderTarget(r,3,o),e.render(t,f),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,v),e.setRenderTarget(_,y,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Qg extends Bn{constructor(e,t,r,o,l,u,d,f,p,v){e=e!==void 0?e:[],t=t!==void 0?t:Ys,super(e,t,r,o,l,u,d,f,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xy extends ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Qg(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ra(5,5,5),l=new Tr({name:"CubemapFromEquirect",uniforms:ea(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Mr});l.uniforms.tEquirect.value=t;const u=new En(o,l),d=t.minFilter;return t.minFilter===Jr&&(t.minFilter=Ei),new jy(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Eh{constructor(e,t=1,r=1e3){this.isFog=!0,this.name="",this.color=new yt(e),this.near=t,this.far=r}clone(){return new Eh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class qy extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ad=new H,Ky=new H,Yy=new ct;class Kr{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ad.subVectors(r,t).cross(Ky.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ad),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Yy.getNormalMatrix(e),o=this.coplanarPoint(ad).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jr=new Jl,Al=new H;class wh{constructor(e=new Kr,t=new Kr,r=new Kr,o=new Kr,l=new Kr,u=new Kr){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Wi){const r=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],f=o[3],p=o[4],v=o[5],_=o[6],y=o[7],x=o[8],M=o[9],w=o[10],S=o[11],g=o[12],I=o[13],P=o[14],R=o[15];if(r[0].setComponents(f-l,y-p,S-x,R-g).normalize(),r[1].setComponents(f+l,y+p,S+x,R+g).normalize(),r[2].setComponents(f+u,y+v,S+M,R+I).normalize(),r[3].setComponents(f-u,y-v,S-M,R-I).normalize(),r[4].setComponents(f-d,y-_,S-w,R-P).normalize(),t===Wi)r[5].setComponents(f+d,y+_,S+w,R+P).normalize();else if(t===Kl)r[5].setComponents(d,_,w,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),jr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),jr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(jr)}intersectsSprite(e){return jr.center.set(0,0,0),jr.radius=.7071067811865476,jr.applyMatrix4(e.matrixWorld),this.intersectsSphere(jr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Al.x=o.normal.x>0?e.max.x:e.min.x,Al.y=o.normal.y>0?e.max.y:e.min.y,Al.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Al)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jg extends ia{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const $l=new H,Zl=new H,Gm=new Ft,Ha=new Sh,Rl=new Jl,od=new H,Hm=new H;class $y extends dn{constructor(e=new Gn,t=new Jg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)$l.fromBufferAttribute(t,o-1),Zl.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=$l.distanceTo(Zl);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(o),Rl.radius+=l,e.ray.intersectsSphere(Rl)===!1)return;Gm.copy(o).invert(),Ha.copy(e.ray).applyMatrix4(Gm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),f=d*d,p=this.isLineSegments?2:1,v=r.index,y=r.attributes.position;if(v!==null){const x=Math.max(0,u.start),M=Math.min(v.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=p){const g=v.getX(w),I=v.getX(w+1),P=Cl(this,e,Ha,f,g,I);P&&t.push(P)}if(this.isLineLoop){const w=v.getX(M-1),S=v.getX(x),g=Cl(this,e,Ha,f,w,S);g&&t.push(g)}}else{const x=Math.max(0,u.start),M=Math.min(y.count,u.start+u.count);for(let w=x,S=M-1;w<S;w+=p){const g=Cl(this,e,Ha,f,w,w+1);g&&t.push(g)}if(this.isLineLoop){const w=Cl(this,e,Ha,f,M-1,x);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function Cl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if($l.fromBufferAttribute(u,o),Zl.fromBufferAttribute(u,l),t.distanceSqToSegment($l,Zl,od,Hm)>r)return;od.applyMatrix4(s.matrixWorld);const f=e.ray.origin.distanceTo(od);if(!(f<e.near||f>e.far))return{distance:f,point:Hm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Vm=new H,Wm=new H;class Zy extends $y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Vm.fromBufferAttribute(t,o),Wm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Vm.distanceTo(Wm);e.setAttribute("lineDistance",new Ht(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ja extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class ev extends Bn{constructor(e,t,r,o,l,u,d,f,p,v=js){if(v!==js&&v!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===js&&(r=es),r===void 0&&v===Qs&&(r=Zs),super(null,o,l,u,d,f,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=f!==void 0?f:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let d=0,f=l-1,p;for(;d<=f;)if(o=Math.floor(d+(f-d)/2),p=r[o]-u,p<0)d=o+1;else if(p>0)f=o-1;else{f=o;break}if(o=f,r[o]===u)return o/(l-1);const v=r[o],y=r[o+1]-v,x=(u-v)/y;return(o+x)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),d=this.getPoint(l),f=t||(u.isVector2?new Je:new H);return f.copy(d).sub(u).normalize(),f}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new H,o=[],l=[],u=[],d=new H,f=new Ft;for(let x=0;x<=e;x++){const M=x/e;o[x]=this.getTangentAt(M,new H)}l[0]=new H,u[0]=new H;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),_=Math.abs(o[0].y),y=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),y<=p&&r.set(0,0,1),d.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],d),u[0].crossVectors(o[0],l[0]);for(let x=1;x<=e;x++){if(l[x]=l[x-1].clone(),u[x]=u[x-1].clone(),d.crossVectors(o[x-1],o[x]),d.length()>Number.EPSILON){d.normalize();const M=Math.acos(mt(o[x-1].dot(o[x]),-1,1));l[x].applyMatrix4(f.makeRotationAxis(d,M))}u[x].crossVectors(o[x],l[x])}if(t===!0){let x=Math.acos(mt(l[0].dot(l[e]),-1,1));x/=e,o[0].dot(d.crossVectors(l[0],l[e]))>0&&(x=-x);for(let M=1;M<=e;M++)l[M].applyMatrix4(f.makeRotationAxis(o[M],x*M)),u[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class tv extends qi{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,d=!1,f=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=d,this.aRotation=f}getPoint(e,t=new Je){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const d=this.aStartAngle+e*l;let f=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),_=Math.sin(this.aRotation),y=f-this.aX,x=p-this.aY;f=y*v-x*_+this.aX,p=y*_+x*v+this.aY}return r.set(f,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Qy extends tv{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Th(){let s=0,e=0,t=0,r=0;function o(l,u,d,f){s=l,e=d,t=-3*l+3*u-2*d-f,r=2*l-2*u+d+f}return{initCatmullRom:function(l,u,d,f,p){o(u,d,p*(d-l),p*(f-u))},initNonuniformCatmullRom:function(l,u,d,f,p,v,_){let y=(u-l)/p-(d-l)/(p+v)+(d-u)/v,x=(d-u)/v-(f-u)/(v+_)+(f-d)/_;y*=v,x*=v,o(u,d,y,x)},calc:function(l){const u=l*l,d=u*l;return s+e*l+t*u+r*d}}}const Pl=new H,ld=new Th,cd=new Th,ud=new Th;class nv extends qi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new H){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let d=Math.floor(u),f=u-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/l)+1)*l:f===0&&d===l-1&&(d=l-2,f=1);let p,v;this.closed||d>0?p=o[(d-1)%l]:(Pl.subVectors(o[0],o[1]).add(o[0]),p=Pl);const _=o[d%l],y=o[(d+1)%l];if(this.closed||d+2<l?v=o[(d+2)%l]:(Pl.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Pl),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(_),x),w=Math.pow(_.distanceToSquared(y),x),S=Math.pow(y.distanceToSquared(v),x);w<1e-4&&(w=1),M<1e-4&&(M=w),S<1e-4&&(S=w),ld.initNonuniformCatmullRom(p.x,_.x,y.x,v.x,M,w,S),cd.initNonuniformCatmullRom(p.y,_.y,y.y,v.y,M,w,S),ud.initNonuniformCatmullRom(p.z,_.z,y.z,v.z,M,w,S)}else this.curveType==="catmullrom"&&(ld.initCatmullRom(p.x,_.x,y.x,v.x,this.tension),cd.initCatmullRom(p.y,_.y,y.y,v.y,this.tension),ud.initCatmullRom(p.z,_.z,y.z,v.z,this.tension));return r.set(ld.calc(f),cd.calc(f),ud.calc(f)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new H().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function jm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,d=s*s,f=s*d;return(2*t-2*r+l+u)*f+(-3*t+3*r-2*l-u)*d+l*s+t}function Jy(s,e){const t=1-s;return t*t*e}function ex(s,e){return 2*(1-s)*s*e}function tx(s,e){return s*s*e}function Ka(s,e,t,r){return Jy(s,e)+ex(s,t)+tx(s,r)}function nx(s,e){const t=1-s;return t*t*t*e}function ix(s,e){const t=1-s;return 3*t*t*s*e}function rx(s,e){return 3*(1-s)*s*s*e}function sx(s,e){return s*s*s*e}function Ya(s,e,t,r,o){return nx(s,e)+ix(s,t)+rx(s,r)+sx(s,o)}class ax extends qi{constructor(e=new Je,t=new Je,r=new Je,o=new Je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Je){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Ya(e,o.x,l.x,u.x,d.x),Ya(e,o.y,l.y,u.y,d.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ox extends qi{constructor(e=new H,t=new H,r=new H,o=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new H){const r=t,o=this.v0,l=this.v1,u=this.v2,d=this.v3;return r.set(Ya(e,o.x,l.x,u.x,d.x),Ya(e,o.y,l.y,u.y,d.y),Ya(e,o.z,l.z,u.z,d.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lx extends qi{constructor(e=new Je,t=new Je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Je){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cx extends qi{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ux extends qi{constructor(e=new Je,t=new Je,r=new Je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Je){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Ka(e,o.x,l.x,u.x),Ka(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class iv extends qi{constructor(e=new H,t=new H,r=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new H){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(Ka(e,o.x,l.x,u.x),Ka(e,o.y,l.y,u.y),Ka(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class dx extends qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Je){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),d=l-u,f=o[u===0?u:u-1],p=o[u],v=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(jm(d,f.x,p.x,v.x,_.x),jm(d,f.y,p.y,v.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Je().fromArray(o))}return this}}var hx=Object.freeze({__proto__:null,ArcCurve:Qy,CatmullRomCurve3:nv,CubicBezierCurve:ax,CubicBezierCurve3:ox,EllipseCurve:tv,LineCurve:lx,LineCurve3:cx,QuadraticBezierCurve:ux,QuadraticBezierCurve3:iv,SplineCurve:dx});class bh extends Gn{constructor(e=1,t=32,r=0,o=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:r,thetaLength:o},t=Math.max(3,t);const l=[],u=[],d=[],f=[],p=new H,v=new Je;u.push(0,0,0),d.push(0,0,1),f.push(.5,.5);for(let _=0,y=3;_<=t;_++,y+=3){const x=r+_/t*o;p.x=e*Math.cos(x),p.y=e*Math.sin(x),u.push(p.x,p.y,p.z),d.push(0,0,1),v.x=(u[y]/e+1)/2,v.y=(u[y+1]/e+1)/2,f.push(v.x,v.y)}for(let _=1;_<=t;_++)l.push(_,_+1,0);this.setIndex(l),this.setAttribute("position",new Ht(u,3)),this.setAttribute("normal",new Ht(d,3)),this.setAttribute("uv",new Ht(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ec extends Gn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,d=0,f=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:d,thetaLength:f};const p=this;o=Math.floor(o),l=Math.floor(l);const v=[],_=[],y=[],x=[];let M=0;const w=[],S=r/2;let g=0;I(),u===!1&&(e>0&&P(!0),t>0&&P(!1)),this.setIndex(v),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(x,2));function I(){const R=new H,F=new H;let N=0;const z=(t-e)/r;for(let W=0;W<=l;W++){const C=[],b=W/l,G=b*(t-e)+e;for(let re=0;re<=o;re++){const $=re/o,oe=$*f+d,he=Math.sin(oe),ae=Math.cos(oe);F.x=G*he,F.y=-b*r+S,F.z=G*ae,_.push(F.x,F.y,F.z),R.set(he,z,ae).normalize(),y.push(R.x,R.y,R.z),x.push($,1-b),C.push(M++)}w.push(C)}for(let W=0;W<o;W++)for(let C=0;C<l;C++){const b=w[C][W],G=w[C+1][W],re=w[C+1][W+1],$=w[C][W+1];(e>0||C!==0)&&(v.push(b,G,$),N+=3),(t>0||C!==l-1)&&(v.push(G,re,$),N+=3)}p.addGroup(g,N,0),g+=N}function P(R){const F=M,N=new Je,z=new H;let W=0;const C=R===!0?e:t,b=R===!0?1:-1;for(let re=1;re<=o;re++)_.push(0,S*b,0),y.push(0,b,0),x.push(.5,.5),M++;const G=M;for(let re=0;re<=o;re++){const oe=re/o*f+d,he=Math.cos(oe),ae=Math.sin(oe);z.x=C*ae,z.y=S*b,z.z=C*he,_.push(z.x,z.y,z.z),y.push(0,b,0),N.x=he*.5+.5,N.y=ae*.5*b+.5,x.push(N.x,N.y),M++}for(let re=0;re<o;re++){const $=F+re,oe=G+re;R===!0?v.push(oe,oe+1,$):v.push(oe+1,oe,$),W+=3}p.addGroup(g,W,R===!0?1:2),g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ec(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ah extends ec{constructor(e=1,t=1,r=32,o=1,l=!1,u=0,d=Math.PI*2){super(0,e,t,r,o,l,u,d),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d}}static fromJSON(e){return new Ah(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}const Dl=new H,kl=new H,dd=new H,Ll=new ii;class fx extends Gn{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const o=Math.pow(10,4),l=Math.cos(Xs*t),u=e.getIndex(),d=e.getAttribute("position"),f=u?u.count:d.count,p=[0,0,0],v=["a","b","c"],_=new Array(3),y={},x=[];for(let M=0;M<f;M+=3){u?(p[0]=u.getX(M),p[1]=u.getX(M+1),p[2]=u.getX(M+2)):(p[0]=M,p[1]=M+1,p[2]=M+2);const{a:w,b:S,c:g}=Ll;if(w.fromBufferAttribute(d,p[0]),S.fromBufferAttribute(d,p[1]),g.fromBufferAttribute(d,p[2]),Ll.getNormal(dd),_[0]=`${Math.round(w.x*o)},${Math.round(w.y*o)},${Math.round(w.z*o)}`,_[1]=`${Math.round(S.x*o)},${Math.round(S.y*o)},${Math.round(S.z*o)}`,_[2]=`${Math.round(g.x*o)},${Math.round(g.y*o)},${Math.round(g.z*o)}`,!(_[0]===_[1]||_[1]===_[2]||_[2]===_[0]))for(let I=0;I<3;I++){const P=(I+1)%3,R=_[I],F=_[P],N=Ll[v[I]],z=Ll[v[P]],W=`${R}_${F}`,C=`${F}_${R}`;C in y&&y[C]?(dd.dot(y[C].normal)<=l&&(x.push(N.x,N.y,N.z),x.push(z.x,z.y,z.z)),y[C]=null):W in y||(y[W]={index0:p[I],index1:p[P],normal:dd.clone()})}}for(const M in y)if(y[M]){const{index0:w,index1:S}=y[M];Dl.fromBufferAttribute(d,w),kl.fromBufferAttribute(d,S),x.push(Dl.x,Dl.y,Dl.z),x.push(kl.x,kl.y,kl.z)}this.setAttribute("position",new Ht(x,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class tc extends Gn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(r),f=Math.floor(o),p=d+1,v=f+1,_=e/d,y=t/f,x=[],M=[],w=[],S=[];for(let g=0;g<v;g++){const I=g*y-u;for(let P=0;P<p;P++){const R=P*_-l;M.push(R,-I,0),w.push(0,0,1),S.push(P/d),S.push(1-g/f)}}for(let g=0;g<f;g++)for(let I=0;I<d;I++){const P=I+p*g,R=I+p*(g+1),F=I+1+p*(g+1),N=I+1+p*g;x.push(P,R,N),x.push(R,F,N)}this.setIndex(x),this.setAttribute("position",new Ht(M,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends Gn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const f=Math.min(u+d,Math.PI);let p=0;const v=[],_=new H,y=new H,x=[],M=[],w=[],S=[];for(let g=0;g<=r;g++){const I=[],P=g/r;let R=0;g===0&&u===0?R=.5/t:g===r&&f===Math.PI&&(R=-.5/t);for(let F=0;F<=t;F++){const N=F/t;_.x=-e*Math.cos(o+N*l)*Math.sin(u+P*d),_.y=e*Math.cos(u+P*d),_.z=e*Math.sin(o+N*l)*Math.sin(u+P*d),M.push(_.x,_.y,_.z),y.copy(_).normalize(),w.push(y.x,y.y,y.z),S.push(N+R,1-P),I.push(p++)}v.push(I)}for(let g=0;g<r;g++)for(let I=0;I<t;I++){const P=v[g][I+1],R=v[g][I],F=v[g+1][I],N=v[g+1][I+1];(g!==0||u>0)&&x.push(P,R,N),(g!==r-1||f<Math.PI)&&x.push(R,F,N)}this.setIndex(x),this.setAttribute("position",new Ht(M,3)),this.setAttribute("normal",new Ht(w,3)),this.setAttribute("uv",new Ht(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ch extends Gn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l},r=Math.floor(r),o=Math.floor(o);const u=[],d=[],f=[],p=[],v=new H,_=new H,y=new H;for(let x=0;x<=r;x++)for(let M=0;M<=o;M++){const w=M/o*l,S=x/r*Math.PI*2;_.x=(e+t*Math.cos(S))*Math.cos(w),_.y=(e+t*Math.cos(S))*Math.sin(w),_.z=t*Math.sin(S),d.push(_.x,_.y,_.z),v.x=e*Math.cos(w),v.y=e*Math.sin(w),y.subVectors(_,v).normalize(),f.push(y.x,y.y,y.z),p.push(M/o),p.push(x/r)}for(let x=1;x<=r;x++)for(let M=1;M<=o;M++){const w=(o+1)*x+M-1,S=(o+1)*(x-1)+M-1,g=(o+1)*(x-1)+M,I=(o+1)*x+M;u.push(w,S,I),u.push(S,g,I)}this.setIndex(u),this.setAttribute("position",new Ht(d,3)),this.setAttribute("normal",new Ht(f,3)),this.setAttribute("uv",new Ht(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ch(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ph extends Gn{constructor(e=new iv(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const d=new H,f=new H,p=new Je;let v=new H;const _=[],y=[],x=[],M=[];w(),this.setIndex(M),this.setAttribute("position",new Ht(_,3)),this.setAttribute("normal",new Ht(y,3)),this.setAttribute("uv",new Ht(x,2));function w(){for(let P=0;P<t;P++)S(P);S(l===!1?t:0),I(),g()}function S(P){v=e.getPointAt(P/t,v);const R=u.normals[P],F=u.binormals[P];for(let N=0;N<=o;N++){const z=N/o*Math.PI*2,W=Math.sin(z),C=-Math.cos(z);f.x=C*R.x+W*F.x,f.y=C*R.y+W*F.y,f.z=C*R.z+W*F.z,f.normalize(),y.push(f.x,f.y,f.z),d.x=v.x+r*f.x,d.y=v.y+r*f.y,d.z=v.z+r*f.z,_.push(d.x,d.y,d.z)}}function g(){for(let P=1;P<=t;P++)for(let R=1;R<=o;R++){const F=(o+1)*(P-1)+(R-1),N=(o+1)*P+(R-1),z=(o+1)*P+R,W=(o+1)*(P-1)+R;M.push(F,N,W),M.push(N,z,W)}}function I(){for(let P=0;P<=t;P++)for(let R=0;R<=o;R++)p.x=P/t,p.y=R/o,x.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ph(new hx[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class px extends ia{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gg,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class mx extends ia{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Y_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gx extends ia{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Dh extends dn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class vx extends Dh{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const hd=new Ft,Xm=new H,qm=new H;class rv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Xm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Xm),qm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(qm),t.updateMatrixWorld(),hd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Km=new Ft,Va=new H,fd=new H;class _x extends rv{constructor(){super(new Yn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,o=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Va.setFromMatrixPosition(e.matrixWorld),r.position.copy(Va),fd.copy(r.position),fd.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(fd),r.updateMatrixWorld(),o.makeTranslation(-Va.x,-Va.y,-Va.z),Km.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Km)}}class yx extends Dh{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new _x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sv extends Zg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=o+t,f=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,f=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,f,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xx extends rv{constructor(){super(new sv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends Dh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dn.DEFAULT_UP),this.updateMatrix(),this.target=new dn,this.shadow=new xx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sx extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const $m=new Ft;class Mx{constructor(e,t,r=0,o=1/0){this.ray=new Sh(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new Mh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return $m.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($m),this}intersectObject(e,t=!0,r=[]){return ch(e,this,r,t),r.sort(Zm),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)ch(e[o],this,r,t);return r.sort(Zm),r}}function Zm(s,e){return s.distance-e.distance}function ch(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,d=l.length;u<d;u++)ch(l[u],e,t,!0)}}function Qm(s,e,t,r){const o=Ex(r);switch(t){case Ig:return s*e;case Ug:return s*e;case zg:return s*e*2;case Fg:return s*e/o.components*o.byteLength;case vh:return s*e/o.components*o.byteLength;case Og:return s*e*2/o.components*o.byteLength;case _h:return s*e*2/o.components*o.byteLength;case Ng:return s*e*3/o.components*o.byteLength;case pi:return s*e*4/o.components*o.byteLength;case yh:return s*e*4/o.components*o.byteLength;case Fl:case Ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Bl:case Gl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Fd:case Bd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Od:return Math.max(s,8)*Math.max(e,8)/2;case Gd:case Hd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case $d:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Zd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ih:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Hl:case rh:case sh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Bg:case ah:return Math.ceil(s/4)*Math.ceil(e/4)*8;case oh:case lh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ex(s){switch(s){case Xi:case Dg:return{byteLength:1,components:1};case Za:case kg:case Ja:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case es:case ph:case Vi:return{byteLength:4,components:1};case Lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fh);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function wx(s){const e=new WeakMap;function t(d,f){const p=d.array,v=d.usage,_=p.byteLength,y=s.createBuffer();s.bindBuffer(f,y),s.bufferData(f,p,v),d.onUploadCallback();let x;if(p instanceof Float32Array)x=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?x=s.HALF_FLOAT:x=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=s.SHORT;else if(p instanceof Uint32Array)x=s.UNSIGNED_INT;else if(p instanceof Int32Array)x=s.INT;else if(p instanceof Int8Array)x=s.BYTE;else if(p instanceof Uint8Array)x=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,f,p){const v=f.array,_=f.updateRanges;if(s.bindBuffer(p,d),_.length===0)s.bufferSubData(p,0,v);else{_.sort((x,M)=>x.start-M.start);let y=0;for(let x=1;x<_.length;x++){const M=_[y],w=_[x];w.start<=M.start+M.count+1?M.count=Math.max(M.count,w.start+w.count-M.start):(++y,_[y]=w)}_.length=y+1;for(let x=0,M=_.length;x<M;x++){const w=_[x];s.bufferSubData(p,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);f&&(s.deleteBuffer(f.buffer),e.delete(d))}function u(d,f){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,f));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,f),p.version=d.version}}return{get:o,remove:l,update:u}}var Tx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bx=`#ifdef USE_ALPHAHASH
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
#endif`,Ax=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Px=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dx=`#ifdef USE_AOMAP
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
#endif`,kx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lx=`#ifdef USE_BATCHING
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
#endif`,Ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Nx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,qx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
#endif`,Zx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hS=`#ifdef USE_GRADIENTMAP
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
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
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
#endif`,vS=`#ifdef USE_ENVMAP
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
#endif`,_S=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
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
#endif`,ES=`struct PhysicalMaterial {
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
}`,wS=`
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
#endif`,TS=`#if defined( RE_IndirectDiffuse )
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
#endif`,bS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,LS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IS=`#if defined( USE_POINTS_UV )
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
#endif`,NS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,US=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
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
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,VS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qS=`#ifdef USE_NORMALMAP
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
#endif`,KS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cM=`float getShadowMask() {
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
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dM=`#ifdef USE_SKINNING
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
#endif`,hM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fM=`#ifdef USE_SKINNING
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
#endif`,pM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_M=`#ifdef USE_TRANSMISSION
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
#endif`,yM=`#ifdef USE_TRANSMISSION
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
#endif`,xM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TM=`uniform sampler2D t2D;
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
}`,bM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`#include <common>
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
}`,DM=`#if DEPTH_PACKING == 3200
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
}`,kM=`#define DISTANCE
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
}`,LM=`#define DISTANCE
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
}`,IM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`uniform float scale;
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
}`,zM=`uniform vec3 diffuse;
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
}`,FM=`#include <common>
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
}`,OM=`uniform vec3 diffuse;
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
}`,BM=`#define LAMBERT
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
}`,GM=`#define LAMBERT
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
}`,HM=`#define MATCAP
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
}`,VM=`#define MATCAP
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
}`,WM=`#define NORMAL
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
}`,jM=`#define NORMAL
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
}`,XM=`#define PHONG
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
}`,qM=`#define PHONG
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
}`,KM=`#define STANDARD
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
}`,YM=`#define STANDARD
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
}`,$M=`#define TOON
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
}`,ZM=`#define TOON
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
}`,QM=`uniform float size;
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
}`,JM=`uniform vec3 diffuse;
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
}`,eE=`#include <common>
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
}`,tE=`uniform vec3 color;
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
}`,nE=`uniform float rotation;
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
}`,iE=`uniform vec3 diffuse;
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
}`,ut={alphahash_fragment:Tx,alphahash_pars_fragment:bx,alphamap_fragment:Ax,alphamap_pars_fragment:Rx,alphatest_fragment:Cx,alphatest_pars_fragment:Px,aomap_fragment:Dx,aomap_pars_fragment:kx,batching_pars_vertex:Lx,batching_vertex:Ix,begin_vertex:Nx,beginnormal_vertex:Ux,bsdfs:zx,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:Gx,clipping_planes_pars_vertex:Hx,clipping_planes_vertex:Vx,color_fragment:Wx,color_pars_fragment:jx,color_pars_vertex:Xx,color_vertex:qx,common:Kx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Zx,displacementmap_vertex:Qx,emissivemap_fragment:Jx,emissivemap_pars_fragment:eS,colorspace_fragment:tS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:rS,envmap_pars_fragment:sS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:vS,envmap_vertex:oS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:uS,fog_pars_fragment:dS,gradientmap_pars_fragment:hS,lightmap_pars_fragment:fS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:_S,lights_toon_pars_fragment:yS,lights_phong_fragment:xS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:ES,lights_fragment_begin:wS,lights_fragment_maps:TS,lights_fragment_end:bS,logdepthbuf_fragment:AS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:CS,logdepthbuf_vertex:PS,map_fragment:DS,map_pars_fragment:kS,map_particle_fragment:LS,map_particle_pars_fragment:IS,metalnessmap_fragment:NS,metalnessmap_pars_fragment:US,morphinstance_vertex:zS,morphcolor_vertex:FS,morphnormal_vertex:OS,morphtarget_pars_vertex:BS,morphtarget_vertex:GS,normal_fragment_begin:HS,normal_fragment_maps:VS,normal_pars_fragment:WS,normal_pars_vertex:jS,normal_vertex:XS,normalmap_pars_fragment:qS,clearcoat_normal_fragment_begin:KS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:ZS,opaque_fragment:QS,packing:JS,premultiplied_alpha_fragment:eM,project_vertex:tM,dithering_fragment:nM,dithering_pars_fragment:iM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:sM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:oM,shadowmap_vertex:lM,shadowmask_pars_fragment:cM,skinbase_vertex:uM,skinning_pars_vertex:dM,skinning_vertex:hM,skinnormal_vertex:fM,specularmap_fragment:pM,specularmap_pars_fragment:mM,tonemapping_fragment:gM,tonemapping_pars_fragment:vM,transmission_fragment:_M,transmission_pars_fragment:yM,uv_pars_fragment:xM,uv_pars_vertex:SM,uv_vertex:MM,worldpos_vertex:EM,background_vert:wM,background_frag:TM,backgroundCube_vert:bM,backgroundCube_frag:AM,cube_vert:RM,cube_frag:CM,depth_vert:PM,depth_frag:DM,distanceRGBA_vert:kM,distanceRGBA_frag:LM,equirect_vert:IM,equirect_frag:NM,linedashed_vert:UM,linedashed_frag:zM,meshbasic_vert:FM,meshbasic_frag:OM,meshlambert_vert:BM,meshlambert_frag:GM,meshmatcap_vert:HM,meshmatcap_frag:VM,meshnormal_vert:WM,meshnormal_frag:jM,meshphong_vert:XM,meshphong_frag:qM,meshphysical_vert:KM,meshphysical_frag:YM,meshtoon_vert:$M,meshtoon_frag:ZM,points_vert:QM,points_frag:JM,shadow_vert:eE,shadow_frag:tE,sprite_vert:nE,sprite_frag:iE},Pe={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Mi={basic:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:Dn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:Dn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:Dn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new yt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:Dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:Dn([Pe.points,Pe.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:Dn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:Dn([Pe.common,Pe.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:Dn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:Dn([Pe.sprite,Pe.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:Dn([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:Dn([Pe.lights,Pe.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Mi.physical={uniforms:Dn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Il={r:0,b:0,g:0},Xr=new Ti,rE=new Ft;function sE(s,e,t,r,o,l,u){const d=new yt(0);let f=l===!0?0:1,p,v,_=null,y=0,x=null;function M(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?t:e).get(R)),R}function w(P){let R=!1;const F=M(P);F===null?g(d,f):F&&F.isColor&&(g(F,1),R=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,u):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(P,R){const F=M(R);F&&(F.isCubeTexture||F.mapping===Ql)?(v===void 0&&(v=new En(new ra(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:ea(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,z,W){this.matrixWorld.copyPosition(W.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(v)),Xr.copy(R.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(rE.makeRotationFromEuler(Xr)),v.material.toneMapped=Rt.getTransfer(F.colorSpace)!==It,(_!==F||y!==F.version||x!==s.toneMapping)&&(v.material.needsUpdate=!0,_=F,y=F.version,x=s.toneMapping),v.layers.enableAll(),P.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new En(new tc(2,2),new Tr({name:"BackgroundMaterial",uniforms:ea(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=Rt.getTransfer(F.colorSpace)!==It,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(_!==F||y!==F.version||x!==s.toneMapping)&&(p.material.needsUpdate=!0,_=F,y=F.version,x=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function g(P,R){P.getRGB(Il,$g(s)),r.buffers.color.setClear(Il.r,Il.g,Il.b,R,u)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return d},setClearColor:function(P,R=1){d.set(P),f=R,g(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,g(d,f)},render:w,addToRenderList:S,dispose:I}}function aE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=y(null);let l=o,u=!1;function d(b,G,re,$,oe){let he=!1;const ae=_($,re,G);l!==ae&&(l=ae,p(l.object)),he=x(b,$,re,oe),he&&M(b,$,re,oe),oe!==null&&e.update(oe,s.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,R(b,G,re,$),oe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(oe).buffer))}function f(){return s.createVertexArray()}function p(b){return s.bindVertexArray(b)}function v(b){return s.deleteVertexArray(b)}function _(b,G,re){const $=re.wireframe===!0;let oe=r[b.id];oe===void 0&&(oe={},r[b.id]=oe);let he=oe[G.id];he===void 0&&(he={},oe[G.id]=he);let ae=he[$];return ae===void 0&&(ae=y(f()),he[$]=ae),ae}function y(b){const G=[],re=[],$=[];for(let oe=0;oe<t;oe++)G[oe]=0,re[oe]=0,$[oe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:re,attributeDivisors:$,object:b,attributes:{},index:null}}function x(b,G,re,$){const oe=l.attributes,he=G.attributes;let ae=0;const pe=re.getAttributes();for(const O in pe)if(pe[O].location>=0){const te=oe[O];let U=he[O];if(U===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(U=b.instanceColor)),te===void 0||te.attribute!==U||U&&te.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==$}function M(b,G,re,$){const oe={},he=G.attributes;let ae=0;const pe=re.getAttributes();for(const O in pe)if(pe[O].location>=0){let te=he[O];te===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(te=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(te=b.instanceColor));const U={};U.attribute=te,te&&te.data&&(U.data=te.data),oe[O]=U,ae++}l.attributes=oe,l.attributesNum=ae,l.index=$}function w(){const b=l.newAttributes;for(let G=0,re=b.length;G<re;G++)b[G]=0}function S(b){g(b,0)}function g(b,G){const re=l.newAttributes,$=l.enabledAttributes,oe=l.attributeDivisors;re[b]=1,$[b]===0&&(s.enableVertexAttribArray(b),$[b]=1),oe[b]!==G&&(s.vertexAttribDivisor(b,G),oe[b]=G)}function I(){const b=l.newAttributes,G=l.enabledAttributes;for(let re=0,$=G.length;re<$;re++)G[re]!==b[re]&&(s.disableVertexAttribArray(re),G[re]=0)}function P(b,G,re,$,oe,he,ae){ae===!0?s.vertexAttribIPointer(b,G,re,oe,he):s.vertexAttribPointer(b,G,re,$,oe,he)}function R(b,G,re,$){w();const oe=$.attributes,he=re.getAttributes(),ae=G.defaultAttributeValues;for(const pe in he){const O=he[pe];if(O.location>=0){let le=oe[pe];if(le===void 0&&(pe==="instanceMatrix"&&b.instanceMatrix&&(le=b.instanceMatrix),pe==="instanceColor"&&b.instanceColor&&(le=b.instanceColor)),le!==void 0){const te=le.normalized,U=le.itemSize,se=e.get(le);if(se===void 0)continue;const Ne=se.buffer,J=se.type,ue=se.bytesPerElement,Ee=J===s.INT||J===s.UNSIGNED_INT||le.gpuType===ph;if(le.isInterleavedBufferAttribute){const ye=le.data,be=ye.stride,Ue=le.offset;if(ye.isInstancedInterleavedBuffer){for(let et=0;et<O.locationSize;et++)g(O.location+et,ye.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let et=0;et<O.locationSize;et++)S(O.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let et=0;et<O.locationSize;et++)P(O.location+et,U/O.locationSize,J,te,be*ue,(Ue+U/O.locationSize*et)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let ye=0;ye<O.locationSize;ye++)g(O.location+ye,le.meshPerAttribute);b.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ye=0;ye<O.locationSize;ye++)S(O.location+ye);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ye=0;ye<O.locationSize;ye++)P(O.location+ye,U/O.locationSize,J,te,U*ue,U/O.locationSize*ye*ue,Ee)}}else if(ae!==void 0){const te=ae[pe];if(te!==void 0)switch(te.length){case 2:s.vertexAttrib2fv(O.location,te);break;case 3:s.vertexAttrib3fv(O.location,te);break;case 4:s.vertexAttrib4fv(O.location,te);break;default:s.vertexAttrib1fv(O.location,te)}}}}I()}function F(){W();for(const b in r){const G=r[b];for(const re in G){const $=G[re];for(const oe in $)v($[oe].object),delete $[oe];delete G[re]}delete r[b]}}function N(b){if(r[b.id]===void 0)return;const G=r[b.id];for(const re in G){const $=G[re];for(const oe in $)v($[oe].object),delete $[oe];delete G[re]}delete r[b.id]}function z(b){for(const G in r){const re=r[G];if(re[b.id]===void 0)continue;const $=re[b.id];for(const oe in $)v($[oe].object),delete $[oe];delete re[b.id]}}function W(){C(),u=!0,l!==o&&(l=o,p(l.object))}function C(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:W,resetDefaultState:C,dispose:F,releaseStatesOfGeometry:N,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:S,disableUnusedAttributes:I}}function oE(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function u(p,v,_){_!==0&&(s.drawArraysInstanced(r,p,v,_),t.update(v,r,_))}function d(p,v,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,_);let x=0;for(let M=0;M<_;M++)x+=v[M];t.update(x,r,1)}function f(p,v,_,y){if(_===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<p.length;M++)u(p[M],v[M],y[M]);else{x.multiDrawArraysInstancedWEBGL(r,p,0,v,0,y,0,_);let M=0;for(let w=0;w<_;w++)M+=v[w]*y[w];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function lE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(z){return!(z!==pi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const W=z===Ja&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Xi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Vi&&!W)}function f(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=f(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=M>0,N=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:x,maxVertexTextures:M,maxTextureSize:w,maxCubemapSize:S,maxAttributes:g,maxVertexUniforms:I,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:F,maxSamples:N}}function cE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Kr,d=new ct,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const x=_.length!==0||y||r!==0||o;return o=y,r=_.length,x},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=v(_,y,0)},this.setState=function(_,y,x){const M=_.clippingPlanes,w=_.clipIntersection,S=_.clipShadows,g=s.get(_);if(!o||M===null||M.length===0||l&&!S)l?v(null):p();else{const I=l?0:r,P=I*4;let R=g.clippingState||null;f.value=R,R=v(M,y,P,x);for(let F=0;F!==P;++F)R[F]=t[F];g.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=I}};function p(){f.value!==t&&(f.value=t,f.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,y,x,M){const w=_!==null?_.length:0;let S=null;if(w!==0){if(S=f.value,M!==!0||S===null){const g=x+w*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<g)&&(S=new Float32Array(g));for(let P=0,R=x;P!==w;++P,R+=4)u.copy(_[P]).applyMatrix4(I,d),u.normal.toArray(S,R),S[R+3]=u.constant}f.value=S,f.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,S}}function uE(s){let e=new WeakMap;function t(u,d){return d===Ld?u.mapping=Ys:d===Id&&(u.mapping=$s),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ld||d===Id)if(e.has(u)){const f=e.get(u).texture;return t(f,u.mapping)}else{const f=u.image;if(f&&f.height>0){const p=new Xy(f.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Vs=4,Jm=[.125,.215,.35,.446,.526,.582],Zr=20,pd=new sv,eg=new yt;let md=null,gd=0,vd=0,_d=!1;const Yr=(1+Math.sqrt(5))/2,Bs=1/Yr,tg=[new H(-Yr,Bs,0),new H(Yr,Bs,0),new H(-Bs,0,Yr),new H(Bs,0,Yr),new H(0,Yr,-Bs),new H(0,Yr,Bs),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(md,gd,vd),this._renderer.xr.enabled=_d,e.scissorTest=!1,Nl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),vd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:Ja,format:pi,colorSpace:Js,depthBuffer:!1},o=ig(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dE(l)),this._blurMaterial=hE(l,e,t)}return o}_compileMaterial(e){const t=new En(this._lodPlanes[0],e);this._renderer.compile(t,pd)}_sceneToCubeUV(e,t,r,o){const d=new Yn(90,1,t,r),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,y=v.toneMapping;v.getClearColor(eg),v.toneMapping=Er,v.autoClear=!1;const x=new qg({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1}),M=new En(new ra,x);let w=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,w=!0):(x.color.copy(eg),w=!0);for(let g=0;g<6;g++){const I=g%3;I===0?(d.up.set(0,f[g],0),d.lookAt(p[g],0,0)):I===1?(d.up.set(0,0,f[g]),d.lookAt(0,p[g],0)):(d.up.set(0,f[g],0),d.lookAt(0,0,p[g]));const P=this._cubeSize;Nl(o,I*P,g>2?P:0,P,P),v.setRenderTarget(o),w&&v.render(M,d),v.render(e,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=y,v.autoClear=_,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ys||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new En(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const f=this._cubeSize;Nl(t,0,0,3*f,2*f),r.setRenderTarget(t),r.render(u,pd)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=tg[(o-l-1)%tg.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,d){const f=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,_=new En(this._lodPlanes[o],p),y=p.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*Zr-1),w=l/M,S=isFinite(l)?1+Math.floor(v*w):Zr;S>Zr&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Zr}`);const g=[];let I=0;for(let z=0;z<Zr;++z){const W=z/w,C=Math.exp(-W*W/2);g.push(C),z===0?I+=C:z<S&&(I+=2*C)}for(let z=0;z<g.length;z++)g[z]=g[z]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=g,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=M,y.mipInt.value=P-r;const R=this._sizeLods[o],F=3*R*(o>P-Vs?o-P+Vs:0),N=4*(this._cubeSize-R);Nl(t,F,N,3*R,2*R),f.setRenderTarget(t),f.render(_,pd)}}function dE(s){const e=[],t=[],r=[];let o=s;const l=s-Vs+1+Jm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let f=1/d;u>s-Vs?f=Jm[u-s+Vs-1]:u===0&&(f=0),r.push(f);const p=1/(d-2),v=-p,_=1+p,y=[v,v,_,v,_,_,v,v,_,_,v,_],x=6,M=6,w=3,S=2,g=1,I=new Float32Array(w*M*x),P=new Float32Array(S*M*x),R=new Float32Array(g*M*x);for(let N=0;N<x;N++){const z=N%3*2/3-1,W=N>2?0:-1,C=[z,W,0,z+2/3,W,0,z+2/3,W+1,0,z,W,0,z+2/3,W+1,0,z,W+1,0];I.set(C,w*M*N),P.set(y,S*M*N);const b=[N,N,N,N,N,N];R.set(b,g*M*N)}const F=new Gn;F.setAttribute("position",new wi(I,w)),F.setAttribute("uv",new wi(P,S)),F.setAttribute("faceIndex",new wi(R,g)),e.push(F),o>Vs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ig(s,e,t){const r=new ts(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Nl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function hE(s,e,t){const r=new Float32Array(Zr),o=new H(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function rg(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function sg(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function fE(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const f=d.mapping,p=f===Ld||f===Id,v=f===Ys||f===$s;if(p||v){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new ng(s)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const x=d.image;return p&&x&&x.height>0||v&&x&&o(x)?(t===null&&(t=new ng(s)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let f=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&f++;return f===p}function l(d){const f=d.target;f.removeEventListener("dispose",l);const p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function pE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Hs("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function mE(s,e,t,r){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const M in y.attributes)e.remove(y.attributes[M]);y.removeEventListener("dispose",u),delete o[y.id];const x=l.get(y);x&&(e.remove(x),l.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function f(_){const y=_.attributes;for(const x in y)e.update(y[x],s.ARRAY_BUFFER)}function p(_){const y=[],x=_.index,M=_.attributes.position;let w=0;if(x!==null){const I=x.array;w=x.version;for(let P=0,R=I.length;P<R;P+=3){const F=I[P+0],N=I[P+1],z=I[P+2];y.push(F,N,N,z,z,F)}}else if(M!==void 0){const I=M.array;w=M.version;for(let P=0,R=I.length/3-1;P<R;P+=3){const F=P+0,N=P+1,z=P+2;y.push(F,N,N,z,z,F)}}else return;const S=new(Vg(y)?Yg:Kg)(y,1);S.version=w;const g=l.get(_);g&&e.remove(g),l.set(_,S)}function v(_){const y=l.get(_);if(y){const x=_.index;x!==null&&y.version<x.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:f,getWireframeAttribute:v}}function gE(s,e,t){let r;function o(y){r=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function f(y,x){s.drawElements(r,x,l,y*u),t.update(x,r,1)}function p(y,x,M){M!==0&&(s.drawElementsInstanced(r,x,l,y*u,M),t.update(x,r,M))}function v(y,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,y,0,M);let S=0;for(let g=0;g<M;g++)S+=x[g];t.update(S,r,1)}function _(y,x,M,w){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let g=0;g<y.length;g++)p(y[g]/u,x[g],w[g]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,y,0,w,0,M);let g=0;for(let I=0;I<M;I++)g+=x[I]*w[I];t.update(g,r,1)}}this.setMode=o,this.setIndex=d,this.render=f,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=_}function vE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function _E(s,e,t){const r=new WeakMap,o=new Nt;function l(u,d,f){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let y=r.get(d);if(y===void 0||y.count!==_){let C=function(){z.dispose(),r.delete(d),d.removeEventListener("dispose",C)};y!==void 0&&y.texture.dispose();const x=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],g=d.morphAttributes.normal||[],I=d.morphAttributes.color||[];let P=0;x===!0&&(P=1),M===!0&&(P=2),w===!0&&(P=3);let R=d.attributes.position.count*P,F=1;R>e.maxTextureSize&&(F=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const N=new Float32Array(R*F*4*_),z=new jg(N,R,F,_);z.type=Vi,z.needsUpdate=!0;const W=P*4;for(let b=0;b<_;b++){const G=S[b],re=g[b],$=I[b],oe=R*F*4*b;for(let he=0;he<G.count;he++){const ae=he*W;x===!0&&(o.fromBufferAttribute(G,he),N[oe+ae+0]=o.x,N[oe+ae+1]=o.y,N[oe+ae+2]=o.z,N[oe+ae+3]=0),M===!0&&(o.fromBufferAttribute(re,he),N[oe+ae+4]=o.x,N[oe+ae+5]=o.y,N[oe+ae+6]=o.z,N[oe+ae+7]=0),w===!0&&(o.fromBufferAttribute($,he),N[oe+ae+8]=o.x,N[oe+ae+9]=o.y,N[oe+ae+10]=o.z,N[oe+ae+11]=$.itemSize===4?o.w:1)}}y={count:_,texture:z,size:new Je(R,F)},r.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let x=0;for(let w=0;w<p.length;w++)x+=p[w];const M=d.morphTargetsRelative?1:1-x;f.getUniforms().setValue(s,"morphTargetBaseInfluence",M),f.getUniforms().setValue(s,"morphTargetInfluences",p)}f.getUniforms().setValue(s,"morphTargetsTexture",y.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:l}}function yE(s,e,t,r){let o=new WeakMap;function l(f){const p=r.render.frame,v=f.geometry,_=e.get(f,v);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",d)===!1&&f.addEventListener("dispose",d),o.get(f)!==p&&(t.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function u(){o=new WeakMap}function d(f){const p=f.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const ov=new Bn,ag=new ev(1,1),lv=new jg,cv=new Py,uv=new Qg,og=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),dg=new Float32Array(4);function sa(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=og[o];if(l===void 0&&(l=new Float32Array(o),og[o]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function rn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function sn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nc(s,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function xE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2fv(this.addr,e),sn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;s.uniform3fv(this.addr,e),sn(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4fv(this.addr,e),sn(t,e)}}function wE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;dg.set(r),s.uniformMatrix2fv(this.addr,!1,dg),sn(t,r)}}function TE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;ug.set(r),s.uniformMatrix3fv(this.addr,!1,ug),sn(t,r)}}function bE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(rn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,r))return;cg.set(r),s.uniformMatrix4fv(this.addr,!1,cg),sn(t,r)}}function AE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function RE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2iv(this.addr,e),sn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3iv(this.addr,e),sn(t,e)}}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4iv(this.addr,e),sn(t,e)}}function DE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;s.uniform2uiv(this.addr,e),sn(t,e)}}function LE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;s.uniform3uiv(this.addr,e),sn(t,e)}}function IE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;s.uniform4uiv(this.addr,e),sn(t,e)}}function NE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(ag.compareFunction=Hg,l=ag):l=ov,t.setTexture2D(e||l,o)}function UE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||cv,o)}function zE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||uv,o)}function FE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||lv,o)}function OE(s){switch(s){case 5126:return xE;case 35664:return SE;case 35665:return ME;case 35666:return EE;case 35674:return wE;case 35675:return TE;case 35676:return bE;case 5124:case 35670:return AE;case 35667:case 35671:return RE;case 35668:case 35672:return CE;case 35669:case 35673:return PE;case 5125:return DE;case 36294:return kE;case 36295:return LE;case 36296:return IE;case 35678:case 36198:case 36298:case 36306:case 35682:return NE;case 35679:case 36299:case 36307:return UE;case 35680:case 36300:case 36308:case 36293:return zE;case 36289:case 36303:case 36311:case 36292:return FE}}function BE(s,e){s.uniform1fv(this.addr,e)}function GE(s,e){const t=sa(e,this.size,2);s.uniform2fv(this.addr,t)}function HE(s,e){const t=sa(e,this.size,3);s.uniform3fv(this.addr,t)}function VE(s,e){const t=sa(e,this.size,4);s.uniform4fv(this.addr,t)}function WE(s,e){const t=sa(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function jE(s,e){const t=sa(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function XE(s,e){const t=sa(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function qE(s,e){s.uniform1iv(this.addr,e)}function KE(s,e){s.uniform2iv(this.addr,e)}function YE(s,e){s.uniform3iv(this.addr,e)}function $E(s,e){s.uniform4iv(this.addr,e)}function ZE(s,e){s.uniform1uiv(this.addr,e)}function QE(s,e){s.uniform2uiv(this.addr,e)}function JE(s,e){s.uniform3uiv(this.addr,e)}function e1(s,e){s.uniform4uiv(this.addr,e)}function t1(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||ov,l[u])}function n1(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||cv,l[u])}function i1(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||uv,l[u])}function r1(s,e,t){const r=this.cache,o=e.length,l=nc(t,o);rn(r,l)||(s.uniform1iv(this.addr,l),sn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||lv,l[u])}function s1(s){switch(s){case 5126:return BE;case 35664:return GE;case 35665:return HE;case 35666:return VE;case 35674:return WE;case 35675:return jE;case 35676:return XE;case 5124:case 35670:return qE;case 35667:case 35671:return KE;case 35668:case 35672:return YE;case 35669:case 35673:return $E;case 5125:return ZE;case 36294:return QE;case 36295:return JE;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}class a1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=OE(t.type)}}class o1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function hg(s,e){s.seq.push(e),s.map[e.id]=e}function c1(s,e,t){const r=s.name,o=r.length;for(yd.lastIndex=0;;){const l=yd.exec(r),u=yd.lastIndex;let d=l[1];const f=l[2]==="]",p=l[3];if(f&&(d=d|0),p===void 0||p==="["&&u+2===o){hg(t,p===void 0?new a1(d,s,e):new o1(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new l1(d),hg(t,_)),t=_}}}class Vl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);c1(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],f=r[d.id];f.needsUpdate!==!1&&d.setValue(e,f.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function fg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const u1=37297;let d1=0;function h1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const pg=new ct;function f1(s){Rt._getMatrix(pg,Rt.workingColorSpace,s);const e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(s)){case ql:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+h1(s.getShaderSource(e),u)}else return o}function p1(s,e){const t=f1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function m1(s,e){let t;switch(e){case H_:t="Linear";break;case V_:t="Reinhard";break;case W_:t="Cineon";break;case Cg:t="ACESFilmic";break;case X_:t="AgX";break;case q_:t="Neutral";break;case j_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ul=new H;function g1(){Rt.getLuminanceCoefficients(Ul);const s=Ul.x.toFixed(4),e=Ul.y.toFixed(4),t=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function _1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function y1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function Xa(s){return s!==""}function gg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x1=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(s){return s.replace(x1,M1)}const S1=new Map;function M1(s,e){let t=ut[e];if(t===void 0){const r=S1.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}const E1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _g(s){return s.replace(E1,w1)}function w1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function yg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function T1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===bg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ag?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case Ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function R1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Rg:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case G_:e="ENVMAP_BLENDING_ADD";break}return e}function C1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function P1(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const f=T1(t),p=b1(t),v=A1(t),_=R1(t),y=C1(t),x=v1(t),M=_1(l),w=o.createProgram();let S,g,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),S.length>0&&(S+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Xa).join(`
`),g.length>0&&(g+=`
`)):(S=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),g=[yg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+f:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ut.tonemapping_pars_fragment:"",t.toneMapping!==Er?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),g1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),u=uh(u),u=gg(u,t),u=vg(u,t),d=uh(d),d=gg(d,t),d=vg(d,t),u=_g(u),d=_g(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,g=["#define varying in",t.glslVersion===Sm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const P=I+S+u,R=I+g+d,F=fg(o,o.VERTEX_SHADER,P),N=fg(o,o.FRAGMENT_SHADER,R);o.attachShader(w,F),o.attachShader(w,N),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function z(G){if(s.debug.checkShaderErrors){const re=o.getProgramInfoLog(w).trim(),$=o.getShaderInfoLog(F).trim(),oe=o.getShaderInfoLog(N).trim();let he=!0,ae=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(he=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,F,N);else{const pe=mg(o,F,"vertex"),O=mg(o,N,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+re+`
`+pe+`
`+O)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):($===""||oe==="")&&(ae=!1);ae&&(G.diagnostics={runnable:he,programLog:re,vertexShader:{log:$,prefix:S},fragmentShader:{log:oe,prefix:g}})}o.deleteShader(F),o.deleteShader(N),W=new Vl(o,w),C=y1(o,w)}let W;this.getUniforms=function(){return W===void 0&&z(this),W};let C;this.getAttributes=function(){return C===void 0&&z(this),C};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=o.getProgramParameter(w,u1)),b},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=d1++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=F,this.fragmentShader=N,this}let D1=0;class k1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new L1(e),t.set(e,r)),r}}class L1{constructor(e){this.id=D1++,this.code=e,this.usedTimes=0}}function I1(s,e,t,r,o,l,u){const d=new Mh,f=new k1,p=new Set,v=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(C){return p.add(C),C===0?"uv":`uv${C}`}function S(C,b,G,re,$){const oe=re.fog,he=$.geometry,ae=C.isMeshStandardMaterial?re.environment:null,pe=(C.isMeshStandardMaterial?t:e).get(C.envMap||ae),O=pe&&pe.mapping===Ql?pe.image.height:null,le=M[C.type];C.precision!==null&&(x=o.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const te=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,U=te!==void 0?te.length:0;let se=0;he.morphAttributes.position!==void 0&&(se=1),he.morphAttributes.normal!==void 0&&(se=2),he.morphAttributes.color!==void 0&&(se=3);let Ne,J,ue,Ee;if(le){const Et=Mi[le];Ne=Et.vertexShader,J=Et.fragmentShader}else Ne=C.vertexShader,J=C.fragmentShader,f.update(C),ue=f.getVertexShaderID(C),Ee=f.getFragmentShaderID(C);const ye=s.getRenderTarget(),be=s.state.buffers.depth.getReversed(),Ue=$.isInstancedMesh===!0,et=$.isBatchedMesh===!0,Dt=!!C.map,_t=!!C.matcap,Ut=!!pe,V=!!C.aoMap,wn=!!C.lightMap,gt=!!C.bumpMap,ht=!!C.normalMap,Ke=!!C.displacementMap,Pt=!!C.emissiveMap,Xe=!!C.metalnessMap,k=!!C.roughnessMap,T=C.anisotropy>0,Q=C.clearcoat>0,me=C.dispersion>0,ve=C.iridescence>0,de=C.sheen>0,We=C.transmission>0,Ae=T&&!!C.anisotropyMap,ze=Q&&!!C.clearcoatMap,dt=Q&&!!C.clearcoatNormalMap,Me=Q&&!!C.clearcoatRoughnessMap,Be=ve&&!!C.iridescenceMap,$e=ve&&!!C.iridescenceThicknessMap,tt=de&&!!C.sheenColorMap,Ge=de&&!!C.sheenRoughnessMap,ft=!!C.specularMap,st=!!C.specularColorMap,Ct=!!C.specularIntensityMap,q=We&&!!C.transmissionMap,Re=We&&!!C.thicknessMap,ce=!!C.gradientMap,fe=!!C.alphaMap,ke=C.alphaTest>0,De=!!C.alphaHash,at=!!C.extensions;let Ot=Er;C.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const en={shaderID:le,shaderType:C.type,shaderName:C.name,vertexShader:Ne,fragmentShader:J,defines:C.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:et,batchingColor:et&&$._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,instancingMorph:Ue&&$.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ye===null?s.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Js,alphaToCoverage:!!C.alphaToCoverage,map:Dt,matcap:_t,envMap:Ut,envMapMode:Ut&&pe.mapping,envMapCubeUVHeight:O,aoMap:V,lightMap:wn,bumpMap:gt,normalMap:ht,displacementMap:y&&Ke,emissiveMap:Pt,normalMapObjectSpace:ht&&C.normalMapType===Z_,normalMapTangentSpace:ht&&C.normalMapType===Gg,metalnessMap:Xe,roughnessMap:k,anisotropy:T,anisotropyMap:Ae,clearcoat:Q,clearcoatMap:ze,clearcoatNormalMap:dt,clearcoatRoughnessMap:Me,dispersion:me,iridescence:ve,iridescenceMap:Be,iridescenceThicknessMap:$e,sheen:de,sheenColorMap:tt,sheenRoughnessMap:Ge,specularMap:ft,specularColorMap:st,specularIntensityMap:Ct,transmission:We,transmissionMap:q,thicknessMap:Re,gradientMap:ce,opaque:C.transparent===!1&&C.blending===Ws&&C.alphaToCoverage===!1,alphaMap:fe,alphaTest:ke,alphaHash:De,combine:C.combine,mapUv:Dt&&w(C.map.channel),aoMapUv:V&&w(C.aoMap.channel),lightMapUv:wn&&w(C.lightMap.channel),bumpMapUv:gt&&w(C.bumpMap.channel),normalMapUv:ht&&w(C.normalMap.channel),displacementMapUv:Ke&&w(C.displacementMap.channel),emissiveMapUv:Pt&&w(C.emissiveMap.channel),metalnessMapUv:Xe&&w(C.metalnessMap.channel),roughnessMapUv:k&&w(C.roughnessMap.channel),anisotropyMapUv:Ae&&w(C.anisotropyMap.channel),clearcoatMapUv:ze&&w(C.clearcoatMap.channel),clearcoatNormalMapUv:dt&&w(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&w(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&w(C.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&w(C.iridescenceThicknessMap.channel),sheenColorMapUv:tt&&w(C.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&w(C.sheenRoughnessMap.channel),specularMapUv:ft&&w(C.specularMap.channel),specularColorMapUv:st&&w(C.specularColorMap.channel),specularIntensityMapUv:Ct&&w(C.specularIntensityMap.channel),transmissionMapUv:q&&w(C.transmissionMap.channel),thicknessMapUv:Re&&w(C.thicknessMap.channel),alphaMapUv:fe&&w(C.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ht||T),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!he.attributes.uv&&(Dt||fe),fog:!!oe,useFog:C.fog===!0,fogExp2:!!oe&&oe.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:be,skinning:$.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:se,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:Dt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===It,decodeVideoTextureEmissive:Pt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===It,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===On,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:at&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&C.extensions.multiDraw===!0||et)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return en.vertexUv1s=p.has(1),en.vertexUv2s=p.has(2),en.vertexUv3s=p.has(3),p.clear(),en}function g(C){const b=[];if(C.shaderID?b.push(C.shaderID):(b.push(C.customVertexShaderID),b.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)b.push(G),b.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(I(b,C),P(b,C),b.push(s.outputColorSpace)),b.push(C.customProgramCacheKey),b.join()}function I(C,b){C.push(b.precision),C.push(b.outputColorSpace),C.push(b.envMapMode),C.push(b.envMapCubeUVHeight),C.push(b.mapUv),C.push(b.alphaMapUv),C.push(b.lightMapUv),C.push(b.aoMapUv),C.push(b.bumpMapUv),C.push(b.normalMapUv),C.push(b.displacementMapUv),C.push(b.emissiveMapUv),C.push(b.metalnessMapUv),C.push(b.roughnessMapUv),C.push(b.anisotropyMapUv),C.push(b.clearcoatMapUv),C.push(b.clearcoatNormalMapUv),C.push(b.clearcoatRoughnessMapUv),C.push(b.iridescenceMapUv),C.push(b.iridescenceThicknessMapUv),C.push(b.sheenColorMapUv),C.push(b.sheenRoughnessMapUv),C.push(b.specularMapUv),C.push(b.specularColorMapUv),C.push(b.specularIntensityMapUv),C.push(b.transmissionMapUv),C.push(b.thicknessMapUv),C.push(b.combine),C.push(b.fogExp2),C.push(b.sizeAttenuation),C.push(b.morphTargetsCount),C.push(b.morphAttributeCount),C.push(b.numDirLights),C.push(b.numPointLights),C.push(b.numSpotLights),C.push(b.numSpotLightMaps),C.push(b.numHemiLights),C.push(b.numRectAreaLights),C.push(b.numDirLightShadows),C.push(b.numPointLightShadows),C.push(b.numSpotLightShadows),C.push(b.numSpotLightShadowsWithMaps),C.push(b.numLightProbes),C.push(b.shadowMapType),C.push(b.toneMapping),C.push(b.numClippingPlanes),C.push(b.numClipIntersection),C.push(b.depthPacking)}function P(C,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),C.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),C.push(d.mask)}function R(C){const b=M[C.type];let G;if(b){const re=Mi[b];G=Hy.clone(re.uniforms)}else G=C.uniforms;return G}function F(C,b){let G;for(let re=0,$=v.length;re<$;re++){const oe=v[re];if(oe.cacheKey===b){G=oe,++G.usedTimes;break}}return G===void 0&&(G=new P1(s,b,C,l),v.push(G)),G}function N(C){if(--C.usedTimes===0){const b=v.indexOf(C);v[b]=v[v.length-1],v.pop(),C.destroy()}}function z(C){f.remove(C)}function W(){f.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:R,acquireProgram:F,releaseProgram:N,releaseShaderCache:z,programs:v,dispose:W}}function N1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function o(u,d,f){s.get(u)[d]=f}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function U1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function xg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Sg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,y,x,M,w,S){let g=s[e];return g===void 0?(g={id:_.id,object:_,geometry:y,material:x,groupOrder:M,renderOrder:_.renderOrder,z:w,group:S},s[e]=g):(g.id=_.id,g.object=_,g.geometry=y,g.material=x,g.groupOrder=M,g.renderOrder=_.renderOrder,g.z=w,g.group=S),e++,g}function d(_,y,x,M,w,S){const g=u(_,y,x,M,w,S);x.transmission>0?r.push(g):x.transparent===!0?o.push(g):t.push(g)}function f(_,y,x,M,w,S){const g=u(_,y,x,M,w,S);x.transmission>0?r.unshift(g):x.transparent===!0?o.unshift(g):t.unshift(g)}function p(_,y){t.length>1&&t.sort(_||U1),r.length>1&&r.sort(y||xg),o.length>1&&o.sort(y||xg)}function v(){for(let _=e,y=s.length;_<y;_++){const x=s[_];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:f,finish:v,sort:p}}function z1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Sg,s.set(r,[u])):o>=l.length?(u=new Sg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new yt};break;case"SpotLight":t={position:new H,direction:new H,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new H,halfWidth:new H,halfHeight:new H};break}return s[e.id]=t,t}}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let B1=0;function G1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function H1(s){const e=new F1,t=O1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new H);const o=new H,l=new Ft,u=new Ft;function d(p){let v=0,_=0,y=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let x=0,M=0,w=0,S=0,g=0,I=0,P=0,R=0,F=0,N=0,z=0;p.sort(G1);for(let C=0,b=p.length;C<b;C++){const G=p[C],re=G.color,$=G.intensity,oe=G.distance,he=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=re.r*$,_+=re.g*$,y+=re.b*$;else if(G.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(G.sh.coefficients[ae],$);z++}else if(G.isDirectionalLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const pe=G.shadow,O=t.get(G);O.shadowIntensity=pe.intensity,O.shadowBias=pe.bias,O.shadowNormalBias=pe.normalBias,O.shadowRadius=pe.radius,O.shadowMapSize=pe.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=G.shadow.matrix,I++}r.directional[x]=ae,x++}else if(G.isSpotLight){const ae=e.get(G);ae.position.setFromMatrixPosition(G.matrixWorld),ae.color.copy(re).multiplyScalar($),ae.distance=oe,ae.coneCos=Math.cos(G.angle),ae.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),ae.decay=G.decay,r.spot[w]=ae;const pe=G.shadow;if(G.map&&(r.spotLightMap[F]=G.map,F++,pe.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[w]=pe.matrix,G.castShadow){const O=t.get(G);O.shadowIntensity=pe.intensity,O.shadowBias=pe.bias,O.shadowNormalBias=pe.normalBias,O.shadowRadius=pe.radius,O.shadowMapSize=pe.mapSize,r.spotShadow[w]=O,r.spotShadowMap[w]=he,R++}w++}else if(G.isRectAreaLight){const ae=e.get(G);ae.color.copy(re).multiplyScalar($),ae.halfWidth.set(G.width*.5,0,0),ae.halfHeight.set(0,G.height*.5,0),r.rectArea[S]=ae,S++}else if(G.isPointLight){const ae=e.get(G);if(ae.color.copy(G.color).multiplyScalar(G.intensity),ae.distance=G.distance,ae.decay=G.decay,G.castShadow){const pe=G.shadow,O=t.get(G);O.shadowIntensity=pe.intensity,O.shadowBias=pe.bias,O.shadowNormalBias=pe.normalBias,O.shadowRadius=pe.radius,O.shadowMapSize=pe.mapSize,O.shadowCameraNear=pe.camera.near,O.shadowCameraFar=pe.camera.far,r.pointShadow[M]=O,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=G.shadow.matrix,P++}r.point[M]=ae,M++}else if(G.isHemisphereLight){const ae=e.get(G);ae.skyColor.copy(G.color).multiplyScalar($),ae.groundColor.copy(G.groundColor).multiplyScalar($),r.hemi[g]=ae,g++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=y;const W=r.hash;(W.directionalLength!==x||W.pointLength!==M||W.spotLength!==w||W.rectAreaLength!==S||W.hemiLength!==g||W.numDirectionalShadows!==I||W.numPointShadows!==P||W.numSpotShadows!==R||W.numSpotMaps!==F||W.numLightProbes!==z)&&(r.directional.length=x,r.spot.length=w,r.rectArea.length=S,r.point.length=M,r.hemi.length=g,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+F-N,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=z,W.directionalLength=x,W.pointLength=M,W.spotLength=w,W.rectAreaLength=S,W.hemiLength=g,W.numDirectionalShadows=I,W.numPointShadows=P,W.numSpotShadows=R,W.numSpotMaps=F,W.numLightProbes=z,r.version=B1++)}function f(p,v){let _=0,y=0,x=0,M=0,w=0;const S=v.matrixWorldInverse;for(let g=0,I=p.length;g<I;g++){const P=p[g];if(P.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(P.isSpotLight){const R=r.spot[x];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),x++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(P.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(P.isPointLight){const R=r.point[y];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(S),y++}else if(P.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(S),w++}}}return{setup:d,setupView:f,state:r}}function Mg(s){const e=new H1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function f(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:f,pushLight:l,pushShadow:u}}function V1(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Mg(s),e.set(o,[d])):l>=u.length?(d=new Mg(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const W1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j1=`uniform sampler2D shadow_pass;
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
}`;function X1(s,e,t){let r=new wh;const o=new Je,l=new Je,u=new Nt,d=new mx({depthPacking:$_}),f=new gx,p={},v=t.maxTextureSize,_={[wr]:On,[On]:wr,[Hi]:Hi},y=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:W1,fragmentShader:j1}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const M=new Gn;M.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new En(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bg;let g=this.type;this.render=function(N,z,W){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const C=s.getRenderTarget(),b=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Mr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const $=g!==Gi&&this.type===Gi,oe=g===Gi&&this.type!==Gi;for(let he=0,ae=N.length;he<ae;he++){const pe=N[he],O=pe.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",pe,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const le=O.getFrameExtents();if(o.multiply(le),l.copy(O.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/le.x),o.x=l.x*le.x,O.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/le.y),o.y=l.y*le.y,O.mapSize.y=l.y)),O.map===null||$===!0||oe===!0){const U=this.type!==Gi?{minFilter:mi,magFilter:mi}:{};O.map!==null&&O.map.dispose(),O.map=new ts(o.x,o.y,U),O.map.texture.name=pe.name+".shadowMap",O.camera.updateProjectionMatrix()}s.setRenderTarget(O.map),s.clear();const te=O.getViewportCount();for(let U=0;U<te;U++){const se=O.getViewport(U);u.set(l.x*se.x,l.y*se.y,l.x*se.z,l.y*se.w),re.viewport(u),O.updateMatrices(pe,U),r=O.getFrustum(),R(z,W,O.camera,pe,this.type)}O.isPointLightShadow!==!0&&this.type===Gi&&I(O,W),O.needsUpdate=!1}g=this.type,S.needsUpdate=!1,s.setRenderTarget(C,b,G)};function I(N,z){const W=e.update(w);y.defines.VSM_SAMPLES!==N.blurSamples&&(y.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ts(o.x,o.y)),y.uniforms.shadow_pass.value=N.map.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(z,null,W,y,w,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(z,null,W,x,w,null)}function P(N,z,W,C){let b=null;const G=W.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(G!==void 0)b=G;else if(b=W.isPointLight===!0?f:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const re=b.uuid,$=z.uuid;let oe=p[re];oe===void 0&&(oe={},p[re]=oe);let he=oe[$];he===void 0&&(he=b.clone(),oe[$]=he,z.addEventListener("dispose",F)),b=he}if(b.visible=z.visible,b.wireframe=z.wireframe,C===Gi?b.side=z.shadowSide!==null?z.shadowSide:z.side:b.side=z.shadowSide!==null?z.shadowSide:_[z.side],b.alphaMap=z.alphaMap,b.alphaTest=z.alphaTest,b.map=z.map,b.clipShadows=z.clipShadows,b.clippingPlanes=z.clippingPlanes,b.clipIntersection=z.clipIntersection,b.displacementMap=z.displacementMap,b.displacementScale=z.displacementScale,b.displacementBias=z.displacementBias,b.wireframeLinewidth=z.wireframeLinewidth,b.linewidth=z.linewidth,W.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const re=s.properties.get(b);re.light=W}return b}function R(N,z,W,C,b){if(N.visible===!1)return;if(N.layers.test(z.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&b===Gi)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,N.matrixWorld);const $=e.update(N),oe=N.material;if(Array.isArray(oe)){const he=$.groups;for(let ae=0,pe=he.length;ae<pe;ae++){const O=he[ae],le=oe[O.materialIndex];if(le&&le.visible){const te=P(N,le,C,b);N.onBeforeShadow(s,N,z,W,$,te,O),s.renderBufferDirect(W,null,$,te,N,O),N.onAfterShadow(s,N,z,W,$,te,O)}}}else if(oe.visible){const he=P(N,oe,C,b);N.onBeforeShadow(s,N,z,W,$,he,null),s.renderBufferDirect(W,null,$,he,N,null),N.onAfterShadow(s,N,z,W,$,he,null)}}const re=N.children;for(let $=0,oe=re.length;$<oe;$++)R(re[$],z,W,C,b)}function F(N){N.target.removeEventListener("dispose",F);for(const W in p){const C=p[W],b=N.target.uuid;b in C&&(C[b].dispose(),delete C[b])}}}const q1={[bd]:Ad,[Rd]:Dd,[Cd]:kd,[Ks]:Pd,[Ad]:bd,[Dd]:Rd,[kd]:Cd,[Pd]:Ks};function K1(s,e){function t(){let q=!1;const Re=new Nt;let ce=null;const fe=new Nt(0,0,0,0);return{setMask:function(ke){ce!==ke&&!q&&(s.colorMask(ke,ke,ke,ke),ce=ke)},setLocked:function(ke){q=ke},setClear:function(ke,De,at,Ot,en){en===!0&&(ke*=Ot,De*=Ot,at*=Ot),Re.set(ke,De,at,Ot),fe.equals(Re)===!1&&(s.clearColor(ke,De,at,Ot),fe.copy(Re))},reset:function(){q=!1,ce=null,fe.set(-1,0,0,0)}}}function r(){let q=!1,Re=!1,ce=null,fe=null,ke=null;return{setReversed:function(De){if(Re!==De){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ot=ke;ke=null,this.setClear(Ot)}Re=De},getReversed:function(){return Re},setTest:function(De){De?ye(s.DEPTH_TEST):be(s.DEPTH_TEST)},setMask:function(De){ce!==De&&!q&&(s.depthMask(De),ce=De)},setFunc:function(De){if(Re&&(De=q1[De]),fe!==De){switch(De){case bd:s.depthFunc(s.NEVER);break;case Ad:s.depthFunc(s.ALWAYS);break;case Rd:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case Cd:s.depthFunc(s.EQUAL);break;case Pd:s.depthFunc(s.GEQUAL);break;case Dd:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=De}},setLocked:function(De){q=De},setClear:function(De){ke!==De&&(Re&&(De=1-De),s.clearDepth(De),ke=De)},reset:function(){q=!1,ce=null,fe=null,ke=null,Re=!1}}}function o(){let q=!1,Re=null,ce=null,fe=null,ke=null,De=null,at=null,Ot=null,en=null;return{setTest:function(Et){q||(Et?ye(s.STENCIL_TEST):be(s.STENCIL_TEST))},setMask:function(Et){Re!==Et&&!q&&(s.stencilMask(Et),Re=Et)},setFunc:function(Et,kn,Tn){(ce!==Et||fe!==kn||ke!==Tn)&&(s.stencilFunc(Et,kn,Tn),ce=Et,fe=kn,ke=Tn)},setOp:function(Et,kn,Tn){(De!==Et||at!==kn||Ot!==Tn)&&(s.stencilOp(Et,kn,Tn),De=Et,at=kn,Ot=Tn)},setLocked:function(Et){q=Et},setClear:function(Et){en!==Et&&(s.clearStencil(Et),en=Et)},reset:function(){q=!1,Re=null,ce=null,fe=null,ke=null,De=null,at=null,Ot=null,en=null}}}const l=new t,u=new r,d=new o,f=new WeakMap,p=new WeakMap;let v={},_={},y=new WeakMap,x=[],M=null,w=!1,S=null,g=null,I=null,P=null,R=null,F=null,N=null,z=new yt(0,0,0),W=0,C=!1,b=null,G=null,re=null,$=null,oe=null;const he=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,pe=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(O)[1]),ae=pe>=1):O.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),ae=pe>=2);let le=null,te={};const U=s.getParameter(s.SCISSOR_BOX),se=s.getParameter(s.VIEWPORT),Ne=new Nt().fromArray(U),J=new Nt().fromArray(se);function ue(q,Re,ce,fe){const ke=new Uint8Array(4),De=s.createTexture();s.bindTexture(q,De),s.texParameteri(q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ce;at++)q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,fe,0,s.RGBA,s.UNSIGNED_BYTE,ke):s.texImage2D(Re+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ke);return De}const Ee={};Ee[s.TEXTURE_2D]=ue(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ue(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ue(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ue(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ye(s.DEPTH_TEST),u.setFunc(Ks),gt(!1),ht(mm),ye(s.CULL_FACE),V(Mr);function ye(q){v[q]!==!0&&(s.enable(q),v[q]=!0)}function be(q){v[q]!==!1&&(s.disable(q),v[q]=!1)}function Ue(q,Re){return _[q]!==Re?(s.bindFramebuffer(q,Re),_[q]=Re,q===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),q===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function et(q,Re){let ce=x,fe=!1;if(q){ce=y.get(Re),ce===void 0&&(ce=[],y.set(Re,ce));const ke=q.textures;if(ce.length!==ke.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let De=0,at=ke.length;De<at;De++)ce[De]=s.COLOR_ATTACHMENT0+De;ce.length=ke.length,fe=!0}}else ce[0]!==s.BACK&&(ce[0]=s.BACK,fe=!0);fe&&s.drawBuffers(ce)}function Dt(q){return M!==q?(s.useProgram(q),M=q,!0):!1}const _t={[$r]:s.FUNC_ADD,[E_]:s.FUNC_SUBTRACT,[w_]:s.FUNC_REVERSE_SUBTRACT};_t[T_]=s.MIN,_t[b_]=s.MAX;const Ut={[A_]:s.ZERO,[R_]:s.ONE,[C_]:s.SRC_COLOR,[wd]:s.SRC_ALPHA,[N_]:s.SRC_ALPHA_SATURATE,[L_]:s.DST_COLOR,[D_]:s.DST_ALPHA,[P_]:s.ONE_MINUS_SRC_COLOR,[Td]:s.ONE_MINUS_SRC_ALPHA,[I_]:s.ONE_MINUS_DST_COLOR,[k_]:s.ONE_MINUS_DST_ALPHA,[U_]:s.CONSTANT_COLOR,[z_]:s.ONE_MINUS_CONSTANT_COLOR,[F_]:s.CONSTANT_ALPHA,[O_]:s.ONE_MINUS_CONSTANT_ALPHA};function V(q,Re,ce,fe,ke,De,at,Ot,en,Et){if(q===Mr){w===!0&&(be(s.BLEND),w=!1);return}if(w===!1&&(ye(s.BLEND),w=!0),q!==M_){if(q!==S||Et!==C){if((g!==$r||R!==$r)&&(s.blendEquation(s.FUNC_ADD),g=$r,R=$r),Et)switch(q){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.ONE,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _m:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gm:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _m:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}I=null,P=null,F=null,N=null,z.set(0,0,0),W=0,S=q,C=Et}return}ke=ke||Re,De=De||ce,at=at||fe,(Re!==g||ke!==R)&&(s.blendEquationSeparate(_t[Re],_t[ke]),g=Re,R=ke),(ce!==I||fe!==P||De!==F||at!==N)&&(s.blendFuncSeparate(Ut[ce],Ut[fe],Ut[De],Ut[at]),I=ce,P=fe,F=De,N=at),(Ot.equals(z)===!1||en!==W)&&(s.blendColor(Ot.r,Ot.g,Ot.b,en),z.copy(Ot),W=en),S=q,C=!1}function wn(q,Re){q.side===Hi?be(s.CULL_FACE):ye(s.CULL_FACE);let ce=q.side===On;Re&&(ce=!ce),gt(ce),q.blending===Ws&&q.transparent===!1?V(Mr):V(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),u.setFunc(q.depthFunc),u.setTest(q.depthTest),u.setMask(q.depthWrite),l.setMask(q.colorWrite);const fe=q.stencilWrite;d.setTest(fe),fe&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Pt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):be(s.SAMPLE_ALPHA_TO_COVERAGE)}function gt(q){b!==q&&(q?s.frontFace(s.CW):s.frontFace(s.CCW),b=q)}function ht(q){q!==x_?(ye(s.CULL_FACE),q!==G&&(q===mm?s.cullFace(s.BACK):q===S_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):be(s.CULL_FACE),G=q}function Ke(q){q!==re&&(ae&&s.lineWidth(q),re=q)}function Pt(q,Re,ce){q?(ye(s.POLYGON_OFFSET_FILL),($!==Re||oe!==ce)&&(s.polygonOffset(Re,ce),$=Re,oe=ce)):be(s.POLYGON_OFFSET_FILL)}function Xe(q){q?ye(s.SCISSOR_TEST):be(s.SCISSOR_TEST)}function k(q){q===void 0&&(q=s.TEXTURE0+he-1),le!==q&&(s.activeTexture(q),le=q)}function T(q,Re,ce){ce===void 0&&(le===null?ce=s.TEXTURE0+he-1:ce=le);let fe=te[ce];fe===void 0&&(fe={type:void 0,texture:void 0},te[ce]=fe),(fe.type!==q||fe.texture!==Re)&&(le!==ce&&(s.activeTexture(ce),le=ce),s.bindTexture(q,Re||Ee[q]),fe.type=q,fe.texture=Re)}function Q(){const q=te[le];q!==void 0&&q.type!==void 0&&(s.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{s.compressedTexImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function de(){try{s.texSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function We(){try{s.texSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function dt(){try{s.texStorage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Me(){try{s.texStorage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{s.texImage2D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $e(){try{s.texImage3D.apply(s,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function tt(q){Ne.equals(q)===!1&&(s.scissor(q.x,q.y,q.z,q.w),Ne.copy(q))}function Ge(q){J.equals(q)===!1&&(s.viewport(q.x,q.y,q.z,q.w),J.copy(q))}function ft(q,Re){let ce=p.get(Re);ce===void 0&&(ce=new WeakMap,p.set(Re,ce));let fe=ce.get(q);fe===void 0&&(fe=s.getUniformBlockIndex(Re,q.name),ce.set(q,fe))}function st(q,Re){const fe=p.get(Re).get(q);f.get(Re)!==fe&&(s.uniformBlockBinding(Re,fe,q.__bindingPointIndex),f.set(Re,fe))}function Ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},le=null,te={},_={},y=new WeakMap,x=[],M=null,w=!1,S=null,g=null,I=null,P=null,R=null,F=null,N=null,z=new yt(0,0,0),W=0,C=!1,b=null,G=null,re=null,$=null,oe=null,Ne.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ye,disable:be,bindFramebuffer:Ue,drawBuffers:et,useProgram:Dt,setBlending:V,setMaterial:wn,setFlipSided:gt,setCullFace:ht,setLineWidth:Ke,setPolygonOffset:Pt,setScissorTest:Xe,activeTexture:k,bindTexture:T,unbindTexture:Q,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:Be,texImage3D:$e,updateUBOMapping:ft,uniformBlockBinding:st,texStorage2D:dt,texStorage3D:Me,texSubImage2D:de,texSubImage3D:We,compressedTexSubImage2D:Ae,compressedTexSubImage3D:ze,scissor:tt,viewport:Ge,reset:Ct}}function Y1(s,e,t,r,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Je,v=new WeakMap;let _;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(k,T){return x?new OffscreenCanvas(k,T):Yl("canvas")}function w(k,T,Q){let me=1;const ve=Xe(k);if((ve.width>Q||ve.height>Q)&&(me=Q/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const de=Math.floor(me*ve.width),We=Math.floor(me*ve.height);_===void 0&&(_=M(de,We));const Ae=T?M(de,We):_;return Ae.width=de,Ae.height=We,Ae.getContext("2d").drawImage(k,0,0,de,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+We+")."),Ae}else return"data"in k&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),k;return k}function S(k){return k.generateMipmaps}function g(k){s.generateMipmap(k)}function I(k){return k.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?s.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(k,T,Q,me,ve=!1){if(k!==null){if(s[k]!==void 0)return s[k];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let de=T;if(T===s.RED&&(Q===s.FLOAT&&(de=s.R32F),Q===s.HALF_FLOAT&&(de=s.R16F),Q===s.UNSIGNED_BYTE&&(de=s.R8)),T===s.RED_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.R8UI),Q===s.UNSIGNED_SHORT&&(de=s.R16UI),Q===s.UNSIGNED_INT&&(de=s.R32UI),Q===s.BYTE&&(de=s.R8I),Q===s.SHORT&&(de=s.R16I),Q===s.INT&&(de=s.R32I)),T===s.RG&&(Q===s.FLOAT&&(de=s.RG32F),Q===s.HALF_FLOAT&&(de=s.RG16F),Q===s.UNSIGNED_BYTE&&(de=s.RG8)),T===s.RG_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RG8UI),Q===s.UNSIGNED_SHORT&&(de=s.RG16UI),Q===s.UNSIGNED_INT&&(de=s.RG32UI),Q===s.BYTE&&(de=s.RG8I),Q===s.SHORT&&(de=s.RG16I),Q===s.INT&&(de=s.RG32I)),T===s.RGB_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGB8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGB16UI),Q===s.UNSIGNED_INT&&(de=s.RGB32UI),Q===s.BYTE&&(de=s.RGB8I),Q===s.SHORT&&(de=s.RGB16I),Q===s.INT&&(de=s.RGB32I)),T===s.RGBA_INTEGER&&(Q===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),Q===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),Q===s.UNSIGNED_INT&&(de=s.RGBA32UI),Q===s.BYTE&&(de=s.RGBA8I),Q===s.SHORT&&(de=s.RGBA16I),Q===s.INT&&(de=s.RGBA32I)),T===s.RGB&&Q===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),T===s.RGBA){const We=ve?ql:Rt.getTransfer(me);Q===s.FLOAT&&(de=s.RGBA32F),Q===s.HALF_FLOAT&&(de=s.RGBA16F),Q===s.UNSIGNED_BYTE&&(de=We===It?s.SRGB8_ALPHA8:s.RGBA8),Q===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),Q===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(k,T){let Q;return k?T===null||T===es||T===Zs?Q=s.DEPTH24_STENCIL8:T===Vi?Q=s.DEPTH32F_STENCIL8:T===Za&&(Q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===Zs?Q=s.DEPTH_COMPONENT24:T===Vi?Q=s.DEPTH_COMPONENT32F:T===Za&&(Q=s.DEPTH_COMPONENT16),Q}function F(k,T){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==mi&&k.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?T.mipmaps.length:1}function N(k){const T=k.target;T.removeEventListener("dispose",N),W(T),T.isVideoTexture&&v.delete(T)}function z(k){const T=k.target;T.removeEventListener("dispose",z),b(T)}function W(k){const T=r.get(k);if(T.__webglInit===void 0)return;const Q=k.source,me=y.get(Q);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&C(k),Object.keys(me).length===0&&y.delete(Q)}r.remove(k)}function C(k){const T=r.get(k);s.deleteTexture(T.__webglTexture);const Q=k.source,me=y.get(Q);delete me[T.__cacheKey],u.memory.textures--}function b(k){const T=r.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),r.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)s.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Q=k.textures;for(let me=0,ve=Q.length;me<ve;me++){const de=r.get(Q[me]);de.__webglTexture&&(s.deleteTexture(de.__webglTexture),u.memory.textures--),r.remove(Q[me])}r.remove(k)}let G=0;function re(){G=0}function $(){const k=G;return k>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+o.maxTextures),G+=1,k}function oe(k){const T=[];return T.push(k.wrapS),T.push(k.wrapT),T.push(k.wrapR||0),T.push(k.magFilter),T.push(k.minFilter),T.push(k.anisotropy),T.push(k.internalFormat),T.push(k.format),T.push(k.type),T.push(k.generateMipmaps),T.push(k.premultiplyAlpha),T.push(k.flipY),T.push(k.unpackAlignment),T.push(k.colorSpace),T.join()}function he(k,T){const Q=r.get(k);if(k.isVideoTexture&&Ke(k),k.isRenderTargetTexture===!1&&k.version>0&&Q.__version!==k.version){const me=k.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Q,k,T);return}}t.bindTexture(s.TEXTURE_2D,Q.__webglTexture,s.TEXTURE0+T)}function ae(k,T){const Q=r.get(k);if(k.version>0&&Q.__version!==k.version){J(Q,k,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Q.__webglTexture,s.TEXTURE0+T)}function pe(k,T){const Q=r.get(k);if(k.version>0&&Q.__version!==k.version){J(Q,k,T);return}t.bindTexture(s.TEXTURE_3D,Q.__webglTexture,s.TEXTURE0+T)}function O(k,T){const Q=r.get(k);if(k.version>0&&Q.__version!==k.version){ue(Q,k,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture,s.TEXTURE0+T)}const le={[Nd]:s.REPEAT,[Qr]:s.CLAMP_TO_EDGE,[Ud]:s.MIRRORED_REPEAT},te={[mi]:s.NEAREST,[K_]:s.NEAREST_MIPMAP_NEAREST,[ul]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Bu]:s.LINEAR_MIPMAP_NEAREST,[Jr]:s.LINEAR_MIPMAP_LINEAR},U={[Q_]:s.NEVER,[ry]:s.ALWAYS,[J_]:s.LESS,[Hg]:s.LEQUAL,[ey]:s.EQUAL,[iy]:s.GEQUAL,[ty]:s.GREATER,[ny]:s.NOTEQUAL};function se(k,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Bu||T.magFilter===ul||T.magFilter===Jr||T.minFilter===Ei||T.minFilter===Bu||T.minFilter===ul||T.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(k,s.TEXTURE_WRAP_S,le[T.wrapS]),s.texParameteri(k,s.TEXTURE_WRAP_T,le[T.wrapT]),(k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY)&&s.texParameteri(k,s.TEXTURE_WRAP_R,le[T.wrapR]),s.texParameteri(k,s.TEXTURE_MAG_FILTER,te[T.magFilter]),s.texParameteri(k,s.TEXTURE_MIN_FILTER,te[T.minFilter]),T.compareFunction&&(s.texParameteri(k,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(k,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===mi||T.minFilter!==ul&&T.minFilter!==Jr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(k,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Ne(k,T){let Q=!1;k.__webglInit===void 0&&(k.__webglInit=!0,T.addEventListener("dispose",N));const me=T.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const de=oe(T);if(de!==k.__cacheKey){ve[de]===void 0&&(ve[de]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),ve[de].usedTimes++;const We=ve[k.__cacheKey];We!==void 0&&(ve[k.__cacheKey].usedTimes--,We.usedTimes===0&&C(T)),k.__cacheKey=de,k.__webglTexture=ve[de].texture}return Q}function J(k,T,Q){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const ve=Ne(k,T),de=T.source;t.bindTexture(me,k.__webglTexture,s.TEXTURE0+Q);const We=r.get(de);if(de.version!==We.__version||ve===!0){t.activeTexture(s.TEXTURE0+Q);const Ae=Rt.getPrimaries(Rt.workingColorSpace),ze=T.colorSpace===Sr?null:Rt.getPrimaries(T.colorSpace),dt=T.colorSpace===Sr||Ae===ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);let Me=w(T.image,!1,o.maxTextureSize);Me=Pt(T,Me);const Be=l.convert(T.format,T.colorSpace),$e=l.convert(T.type);let tt=P(T.internalFormat,Be,$e,T.colorSpace,T.isVideoTexture);se(me,T);let Ge;const ft=T.mipmaps,st=T.isVideoTexture!==!0,Ct=We.__version===void 0||ve===!0,q=de.dataReady,Re=F(T,Me);if(T.isDepthTexture)tt=R(T.format===Qs,T.type),Ct&&(st?t.texStorage2D(s.TEXTURE_2D,1,tt,Me.width,Me.height):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,null));else if(T.isDataTexture)if(ft.length>0){st&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let ce=0,fe=ft.length;ce<fe;ce++)Ge=ft[ce],st?q&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Be,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Be,$e,Ge.data);T.generateMipmaps=!1}else st?(Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,Me.width,Me.height),q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Me.width,Me.height,Be,$e,Me.data)):t.texImage2D(s.TEXTURE_2D,0,tt,Me.width,Me.height,0,Be,$e,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,ft[0].width,ft[0].height,Me.depth);for(let ce=0,fe=ft.length;ce<fe;ce++)if(Ge=ft[ce],T.format!==pi)if(Be!==null)if(st){if(q)if(T.layerUpdates.size>0){const ke=Qm(Ge.width,Ge.height,T.format,T.type);for(const De of T.layerUpdates){const at=Ge.data.subarray(De*ke/Ge.data.BYTES_PER_ELEMENT,(De+1)*ke/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,De,Ge.width,Ge.height,1,Be,at)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Me.depth,Be,Ge.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ce,tt,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ce,0,0,0,Ge.width,Ge.height,Me.depth,Be,$e,Ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ce,tt,Ge.width,Ge.height,Me.depth,0,Be,$e,Ge.data)}else{st&&Ct&&t.texStorage2D(s.TEXTURE_2D,Re,tt,ft[0].width,ft[0].height);for(let ce=0,fe=ft.length;ce<fe;ce++)Ge=ft[ce],T.format!==pi?Be!==null?st?q&&t.compressedTexSubImage2D(s.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Be,Ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?q&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Ge.width,Ge.height,Be,$e,Ge.data):t.texImage2D(s.TEXTURE_2D,ce,tt,Ge.width,Ge.height,0,Be,$e,Ge.data)}else if(T.isDataArrayTexture)if(st){if(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,tt,Me.width,Me.height,Me.depth),q)if(T.layerUpdates.size>0){const ce=Qm(Me.width,Me.height,T.format,T.type);for(const fe of T.layerUpdates){const ke=Me.data.subarray(fe*ce/Me.data.BYTES_PER_ELEMENT,(fe+1)*ce/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Be,$e,ke)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(T.isData3DTexture)st?(Ct&&t.texStorage3D(s.TEXTURE_3D,Re,tt,Me.width,Me.height,Me.depth),q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Be,$e,Me.data)):t.texImage3D(s.TEXTURE_3D,0,tt,Me.width,Me.height,Me.depth,0,Be,$e,Me.data);else if(T.isFramebufferTexture){if(Ct)if(st)t.texStorage2D(s.TEXTURE_2D,Re,tt,Me.width,Me.height);else{let ce=Me.width,fe=Me.height;for(let ke=0;ke<Re;ke++)t.texImage2D(s.TEXTURE_2D,ke,tt,ce,fe,0,Be,$e,null),ce>>=1,fe>>=1}}else if(ft.length>0){if(st&&Ct){const ce=Xe(ft[0]);t.texStorage2D(s.TEXTURE_2D,Re,tt,ce.width,ce.height)}for(let ce=0,fe=ft.length;ce<fe;ce++)Ge=ft[ce],st?q&&t.texSubImage2D(s.TEXTURE_2D,ce,0,0,Be,$e,Ge):t.texImage2D(s.TEXTURE_2D,ce,tt,Be,$e,Ge);T.generateMipmaps=!1}else if(st){if(Ct){const ce=Xe(Me);t.texStorage2D(s.TEXTURE_2D,Re,tt,ce.width,ce.height)}q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Be,$e,Me)}else t.texImage2D(s.TEXTURE_2D,0,tt,Be,$e,Me);S(T)&&g(me),We.__version=de.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function ue(k,T,Q){if(T.image.length!==6)return;const me=Ne(k,T),ve=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+Q);const de=r.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(s.TEXTURE0+Q);const We=Rt.getPrimaries(Rt.workingColorSpace),Ae=T.colorSpace===Sr?null:Rt.getPrimaries(T.colorSpace),ze=T.colorSpace===Sr||We===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const dt=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Be=[];for(let fe=0;fe<6;fe++)!dt&&!Me?Be[fe]=w(T.image[fe],!0,o.maxCubemapSize):Be[fe]=Me?T.image[fe].image:T.image[fe],Be[fe]=Pt(T,Be[fe]);const $e=Be[0],tt=l.convert(T.format,T.colorSpace),Ge=l.convert(T.type),ft=P(T.internalFormat,tt,Ge,T.colorSpace),st=T.isVideoTexture!==!0,Ct=de.__version===void 0||me===!0,q=ve.dataReady;let Re=F(T,$e);se(s.TEXTURE_CUBE_MAP,T);let ce;if(dt){st&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,$e.width,$e.height);for(let fe=0;fe<6;fe++){ce=Be[fe].mipmaps;for(let ke=0;ke<ce.length;ke++){const De=ce[ke];T.format!==pi?tt!==null?st?q&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,De.width,De.height,tt,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,ft,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,De.width,De.height,tt,Ge,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,ft,De.width,De.height,0,tt,Ge,De.data)}}}else{if(ce=T.mipmaps,st&&Ct){ce.length>0&&Re++;const fe=Xe(Be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ft,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be[fe].width,Be[fe].height,tt,Ge,Be[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,Be[fe].width,Be[fe].height,0,tt,Ge,Be[fe].data);for(let ke=0;ke<ce.length;ke++){const at=ce[ke].image[fe].image;st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,at.width,at.height,tt,Ge,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,ft,at.width,at.height,0,tt,Ge,at.data)}}else{st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,tt,Ge,Be[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ft,tt,Ge,Be[fe]);for(let ke=0;ke<ce.length;ke++){const De=ce[ke];st?q&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,tt,Ge,De.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,ft,tt,Ge,De.image[fe])}}}S(T)&&g(s.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}k.__version=T.version}function Ee(k,T,Q,me,ve,de){const We=l.convert(Q.format,Q.colorSpace),Ae=l.convert(Q.type),ze=P(Q.internalFormat,We,Ae,Q.colorSpace),dt=r.get(T),Me=r.get(Q);if(Me.__renderTarget=T,!dt.__hasExternalTextures){const Be=Math.max(1,T.width>>de),$e=Math.max(1,T.height>>de);ve===s.TEXTURE_3D||ve===s.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,ze,Be,$e,T.depth,0,We,Ae,null):t.texImage2D(ve,de,ze,Be,$e,0,We,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,k),ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ve,Me.__webglTexture,0,gt(T)):(ve===s.TEXTURE_2D||ve>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ve,Me.__webglTexture,de),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ye(k,T,Q){if(s.bindRenderbuffer(s.RENDERBUFFER,k),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(T.stencilBuffer,ve),We=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=gt(T);ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ae,de,T.width,T.height):Q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,de,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,de,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,We,s.RENDERBUFFER,k)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],We=l.convert(de.format,de.colorSpace),Ae=l.convert(de.type),ze=P(de.internalFormat,We,Ae,de.colorSpace),dt=gt(T);Q&&ht(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,ze,T.width,T.height):ht(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,ze,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ze,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(k,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,k),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),he(T.depthTexture,0);const ve=me.__webglTexture,de=gt(T);if(T.depthTexture.format===js)ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ve,0);else if(T.depthTexture.format===Qs)ht(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(k){const T=r.get(k),Q=k.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==k.depthTexture){const me=k.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(k.depthTexture&&!T.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");be(T.__webglFramebuffer,k)}else if(Q){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),ye(T.__webglDepthbuffer[me],k,!1);else{const ve=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,ve,s.RENDERBUFFER,de)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),ye(T.__webglDepthbuffer,k,!1);else{const me=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ve)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function et(k,T,Q){const me=r.get(k);T!==void 0&&Ee(me.__webglFramebuffer,k,k.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Q!==void 0&&Ue(k)}function Dt(k){const T=k.texture,Q=r.get(k),me=r.get(T);k.addEventListener("dispose",z);const ve=k.textures,de=k.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),de){Q.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer[Ae]=[];for(let ze=0;ze<T.mipmaps.length;ze++)Q.__webglFramebuffer[Ae][ze]=s.createFramebuffer()}else Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Ae=0;Ae<T.mipmaps.length;Ae++)Q.__webglFramebuffer[Ae]=s.createFramebuffer()}else Q.__webglFramebuffer=s.createFramebuffer();if(We)for(let Ae=0,ze=ve.length;Ae<ze;Ae++){const dt=r.get(ve[Ae]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),u.memory.textures++)}if(k.samples>0&&ht(k)===!1){Q.__webglMultisampledFramebuffer=s.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ve.length;Ae++){const ze=ve[Ae];Q.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae]);const dt=l.convert(ze.format,ze.colorSpace),Me=l.convert(ze.type),Be=P(ze.internalFormat,dt,Me,ze.colorSpace,k.isXRRenderTarget===!0),$e=gt(k);s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,Be,k.width,k.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,Q.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),k.depthBuffer&&(Q.__webglDepthRenderbuffer=s.createRenderbuffer(),ye(Q.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(de){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),se(s.TEXTURE_CUBE_MAP,T);for(let Ae=0;Ae<6;Ae++)if(T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)Ee(Q.__webglFramebuffer[Ae][ze],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,ze);else Ee(Q.__webglFramebuffer[Ae],k,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);S(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Ae=0,ze=ve.length;Ae<ze;Ae++){const dt=ve[Ae],Me=r.get(dt);t.bindTexture(s.TEXTURE_2D,Me.__webglTexture),se(s.TEXTURE_2D,dt),Ee(Q.__webglFramebuffer,k,dt,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),S(dt)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ae=k.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,me.__webglTexture),se(Ae,T),T.mipmaps&&T.mipmaps.length>0)for(let ze=0;ze<T.mipmaps.length;ze++)Ee(Q.__webglFramebuffer[ze],k,T,s.COLOR_ATTACHMENT0,Ae,ze);else Ee(Q.__webglFramebuffer,k,T,s.COLOR_ATTACHMENT0,Ae,0);S(T)&&g(Ae),t.unbindTexture()}k.depthBuffer&&Ue(k)}function _t(k){const T=k.textures;for(let Q=0,me=T.length;Q<me;Q++){const ve=T[Q];if(S(ve)){const de=I(k),We=r.get(ve).__webglTexture;t.bindTexture(de,We),g(de),t.unbindTexture()}}}const Ut=[],V=[];function wn(k){if(k.samples>0){if(ht(k)===!1){const T=k.textures,Q=k.width,me=k.height;let ve=s.COLOR_BUFFER_BIT;const de=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,We=r.get(k),Ae=T.length>1;if(Ae)for(let ze=0;ze<T.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let ze=0;ze<T.length;ze++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(ve|=s.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(ve|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const dt=r.get(T[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,dt,0)}s.blitFramebuffer(0,0,Q,me,0,0,Q,me,ve,s.NEAREST),f===!0&&(Ut.length=0,V.length=0,Ut.push(s.COLOR_ATTACHMENT0+ze),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ut.push(de),V.push(de),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let ze=0;ze<T.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,We.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,We.__webglColorRenderbuffer[ze]);const dt=r.get(T[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,We.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,dt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&f){const T=k.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function gt(k){return Math.min(o.maxSamples,k.samples)}function ht(k){const T=r.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(k){const T=u.render.frame;v.get(k)!==T&&(v.set(k,T),k.update())}function Pt(k,T){const Q=k.colorSpace,me=k.format,ve=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||Q!==Js&&Q!==Sr&&(Rt.getTransfer(Q)===It?(me!==pi||ve!==Xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),T}function Xe(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(p.width=k.naturalWidth||k.width,p.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(p.width=k.displayWidth,p.height=k.displayHeight):(p.width=k.width,p.height=k.height),p}this.allocateTextureUnit=$,this.resetTextureUnits=re,this.setTexture2D=he,this.setTexture2DArray=ae,this.setTexture3D=pe,this.setTextureCube=O,this.rebindTextures=et,this.setupRenderTarget=Dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=wn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ht}function $1(s,e){function t(r,o=Sr){let l;const u=Rt.getTransfer(o);if(r===Xi)return s.UNSIGNED_BYTE;if(r===mh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===gh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Lg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Dg)return s.BYTE;if(r===kg)return s.SHORT;if(r===Za)return s.UNSIGNED_SHORT;if(r===ph)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===Ja)return s.HALF_FLOAT;if(r===Ig)return s.ALPHA;if(r===Ng)return s.RGB;if(r===pi)return s.RGBA;if(r===Ug)return s.LUMINANCE;if(r===zg)return s.LUMINANCE_ALPHA;if(r===js)return s.DEPTH_COMPONENT;if(r===Qs)return s.DEPTH_STENCIL;if(r===Fg)return s.RED;if(r===vh)return s.RED_INTEGER;if(r===Og)return s.RG;if(r===_h)return s.RG_INTEGER;if(r===yh)return s.RGBA_INTEGER;if(r===Fl||r===Ol||r===Bl||r===Gl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Fl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Fl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ol)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Fd||r===Od||r===Bd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Od)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gd||r===Hd||r===Vd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Gd||r===Hd)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Vd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===jd||r===Xd||r===qd||r===Kd||r===Yd||r===$d||r===Zd||r===Qd||r===Jd||r===eh||r===th||r===nh||r===ih)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Wd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Xd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Yd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===$d)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===eh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===th)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nh)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ih)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Hl||r===rh||r===sh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Hl)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===sh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Bg||r===ah||r===oh||r===lh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Hl)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===oh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===lh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Zs?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const Z1={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ja,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ja,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ja,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const d=this._targetRay,f=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const S=t.getJointPose(w,r),g=this._getHandJoint(p,w);S!==null&&(g.matrix.fromArray(S.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=S.radius),g.visible=S!==null}const v=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=v.position.distanceTo(_.position),x=.02,M=.005;p.inputState.pinching&&y>x+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=x-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else f!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ja;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Q1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J1=`
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

}`;class ew{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Bn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Tr({vertexShader:Q1,fragmentShader:J1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new tc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tw extends ta{constructor(e,t){super();const r=this;let o=null,l=1,u=null,d="local-floor",f=1,p=null,v=null,_=null,y=null,x=null,M=null;const w=new ew,S=t.getContextAttributes();let g=null,I=null;const P=[],R=[],F=new Je;let N=null;const z=new Yn;z.viewport=new Nt;const W=new Yn;W.viewport=new Nt;const C=[z,W],b=new Sx;let G=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ue=P[J];return ue===void 0&&(ue=new xd,P[J]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(J){let ue=P[J];return ue===void 0&&(ue=new xd,P[J]=ue),ue.getGripSpace()},this.getHand=function(J){let ue=P[J];return ue===void 0&&(ue=new xd,P[J]=ue),ue.getHandSpace()};function $(J){const ue=R.indexOf(J.inputSource);if(ue===-1)return;const Ee=P[ue];Ee!==void 0&&(Ee.update(J.inputSource,J.frame,p||u),Ee.dispatchEvent({type:J.type,data:J.inputSource}))}function oe(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",he);for(let J=0;J<P.length;J++){const ue=R[J];ue!==null&&(R[J]=null,P[J].disconnect(ue))}G=null,re=null,w.reset(),e.setRenderTarget(g),x=null,y=null,_=null,o=null,I=null,Ne.stop(),r.isPresenting=!1,e.setPixelRatio(N),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return _},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(J){if(o=J,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(F),o.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),I=new ts(x.framebufferWidth,x.framebufferHeight,{format:pi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Ee=null,ye=null;S.depth&&(ye=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?Qs:js,Ee=S.stencil?Zs:es);const be={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(be),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new ts(y.textureWidth,y.textureHeight,{format:pi,type:Xi,depthTexture:new ev(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(f),p=null,u=await o.requestReferenceSpace(d),Ne.setContext(o),Ne.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function he(J){for(let ue=0;ue<J.removed.length;ue++){const Ee=J.removed[ue],ye=R.indexOf(Ee);ye>=0&&(R[ye]=null,P[ye].disconnect(Ee))}for(let ue=0;ue<J.added.length;ue++){const Ee=J.added[ue];let ye=R.indexOf(Ee);if(ye===-1){for(let Ue=0;Ue<P.length;Ue++)if(Ue>=R.length){R.push(Ee),ye=Ue;break}else if(R[Ue]===null){R[Ue]=Ee,ye=Ue;break}if(ye===-1)break}const be=P[ye];be&&be.connect(Ee)}}const ae=new H,pe=new H;function O(J,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),pe.setFromMatrixPosition(Ee.matrixWorld);const ye=ae.distanceTo(pe),be=ue.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,et=be[14]/(be[10]-1),Dt=be[14]/(be[10]+1),_t=(be[9]+1)/be[5],Ut=(be[9]-1)/be[5],V=(be[8]-1)/be[0],wn=(Ue[8]+1)/Ue[0],gt=et*V,ht=et*wn,Ke=ye/(-V+wn),Pt=Ke*-V;if(ue.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Pt),J.translateZ(Ke),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),be[10]===-1)J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Xe=et+Ke,k=Dt+Ke,T=gt-Pt,Q=ht+(ye-Pt),me=_t*Dt/k*Xe,ve=Ut*Dt/k*Xe;J.projectionMatrix.makePerspective(T,Q,me,ve,Xe,k),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,ue){ue===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ue.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(o===null)return;let ue=J.near,Ee=J.far;w.texture!==null&&(w.depthNear>0&&(ue=w.depthNear),w.depthFar>0&&(Ee=w.depthFar)),b.near=W.near=z.near=ue,b.far=W.far=z.far=Ee,(G!==b.near||re!==b.far)&&(o.updateRenderState({depthNear:b.near,depthFar:b.far}),G=b.near,re=b.far),z.layers.mask=J.layers.mask|2,W.layers.mask=J.layers.mask|4,b.layers.mask=z.layers.mask|W.layers.mask;const ye=J.parent,be=b.cameras;le(b,ye);for(let Ue=0;Ue<be.length;Ue++)le(be[Ue],ye);be.length===2?O(b,z,W):b.projectionMatrix.copy(z.projectionMatrix),te(J,b,ye)};function te(J,ue,Ee){Ee===null?J.matrix.copy(ue.matrixWorld):(J.matrix.copy(Ee.matrixWorld),J.matrix.invert(),J.matrix.multiply(ue.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ue.projectionMatrix),J.projectionMatrixInverse.copy(ue.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Qa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(y===null&&x===null))return f},this.setFoveation=function(J){f=J,y!==null&&(y.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(b)};let U=null;function se(J,ue){if(v=ue.getViewerPose(p||u),M=ue,v!==null){const Ee=v.views;x!==null&&(e.setRenderTargetFramebuffer(I,x.framebuffer),e.setRenderTarget(I));let ye=!1;Ee.length!==b.cameras.length&&(b.cameras.length=0,ye=!0);for(let Ue=0;Ue<Ee.length;Ue++){const et=Ee[Ue];let Dt=null;if(x!==null)Dt=x.getViewport(et);else{const Ut=_.getViewSubImage(y,et);Dt=Ut.viewport,Ue===0&&(e.setRenderTargetTextures(I,Ut.colorTexture,y.ignoreDepthValues?void 0:Ut.depthStencilTexture),e.setRenderTarget(I))}let _t=C[Ue];_t===void 0&&(_t=new Yn,_t.layers.enable(Ue),_t.viewport=new Nt,C[Ue]=_t),_t.matrix.fromArray(et.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(et.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),Ue===0&&(b.matrix.copy(_t.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ye===!0&&b.cameras.push(_t)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ue=_.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&w.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<P.length;Ee++){const ye=R[Ee],be=P[Ee];ye!==null&&be!==void 0&&be.update(ye,ue,p||u)}U&&U(J,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),M=null}const Ne=new av;Ne.setAnimationLoop(se),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const qr=new Ti,nw=new Ft;function iw(s,e){function t(S,g){S.matrixAutoUpdate===!0&&S.updateMatrix(),g.value.copy(S.matrix)}function r(S,g){g.color.getRGB(S.fogColor.value,$g(s)),g.isFog?(S.fogNear.value=g.near,S.fogFar.value=g.far):g.isFogExp2&&(S.fogDensity.value=g.density)}function o(S,g,I,P,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?l(S,g):g.isMeshToonMaterial?(l(S,g),_(S,g)):g.isMeshPhongMaterial?(l(S,g),v(S,g)):g.isMeshStandardMaterial?(l(S,g),y(S,g),g.isMeshPhysicalMaterial&&x(S,g,R)):g.isMeshMatcapMaterial?(l(S,g),M(S,g)):g.isMeshDepthMaterial?l(S,g):g.isMeshDistanceMaterial?(l(S,g),w(S,g)):g.isMeshNormalMaterial?l(S,g):g.isLineBasicMaterial?(u(S,g),g.isLineDashedMaterial&&d(S,g)):g.isPointsMaterial?f(S,g,I,P):g.isSpriteMaterial?p(S,g):g.isShadowMaterial?(S.color.value.copy(g.color),S.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function l(S,g){S.opacity.value=g.opacity,g.color&&S.diffuse.value.copy(g.color),g.emissive&&S.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.bumpMap&&(S.bumpMap.value=g.bumpMap,t(g.bumpMap,S.bumpMapTransform),S.bumpScale.value=g.bumpScale,g.side===On&&(S.bumpScale.value*=-1)),g.normalMap&&(S.normalMap.value=g.normalMap,t(g.normalMap,S.normalMapTransform),S.normalScale.value.copy(g.normalScale),g.side===On&&S.normalScale.value.negate()),g.displacementMap&&(S.displacementMap.value=g.displacementMap,t(g.displacementMap,S.displacementMapTransform),S.displacementScale.value=g.displacementScale,S.displacementBias.value=g.displacementBias),g.emissiveMap&&(S.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,S.emissiveMapTransform)),g.specularMap&&(S.specularMap.value=g.specularMap,t(g.specularMap,S.specularMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest);const I=e.get(g),P=I.envMap,R=I.envMapRotation;P&&(S.envMap.value=P,qr.copy(R),qr.x*=-1,qr.y*=-1,qr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),S.envMapRotation.value.setFromMatrix4(nw.makeRotationFromEuler(qr)),S.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=g.reflectivity,S.ior.value=g.ior,S.refractionRatio.value=g.refractionRatio),g.lightMap&&(S.lightMap.value=g.lightMap,S.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,S.lightMapTransform)),g.aoMap&&(S.aoMap.value=g.aoMap,S.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,S.aoMapTransform))}function u(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform))}function d(S,g){S.dashSize.value=g.dashSize,S.totalSize.value=g.dashSize+g.gapSize,S.scale.value=g.scale}function f(S,g,I,P){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.size.value=g.size*I,S.scale.value=P*.5,g.map&&(S.map.value=g.map,t(g.map,S.uvTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function p(S,g){S.diffuse.value.copy(g.color),S.opacity.value=g.opacity,S.rotation.value=g.rotation,g.map&&(S.map.value=g.map,t(g.map,S.mapTransform)),g.alphaMap&&(S.alphaMap.value=g.alphaMap,t(g.alphaMap,S.alphaMapTransform)),g.alphaTest>0&&(S.alphaTest.value=g.alphaTest)}function v(S,g){S.specular.value.copy(g.specular),S.shininess.value=Math.max(g.shininess,1e-4)}function _(S,g){g.gradientMap&&(S.gradientMap.value=g.gradientMap)}function y(S,g){S.metalness.value=g.metalness,g.metalnessMap&&(S.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,S.metalnessMapTransform)),S.roughness.value=g.roughness,g.roughnessMap&&(S.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,S.roughnessMapTransform)),g.envMap&&(S.envMapIntensity.value=g.envMapIntensity)}function x(S,g,I){S.ior.value=g.ior,g.sheen>0&&(S.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),S.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(S.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,S.sheenColorMapTransform)),g.sheenRoughnessMap&&(S.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,S.sheenRoughnessMapTransform))),g.clearcoat>0&&(S.clearcoat.value=g.clearcoat,S.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(S.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,S.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(S.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===On&&S.clearcoatNormalScale.value.negate())),g.dispersion>0&&(S.dispersion.value=g.dispersion),g.iridescence>0&&(S.iridescence.value=g.iridescence,S.iridescenceIOR.value=g.iridescenceIOR,S.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(S.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,S.iridescenceMapTransform)),g.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),g.transmission>0&&(S.transmission.value=g.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),g.transmissionMap&&(S.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,S.transmissionMapTransform)),S.thickness.value=g.thickness,g.thicknessMap&&(S.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=g.attenuationDistance,S.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(S.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(S.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=g.specularIntensity,S.specularColor.value.copy(g.specularColor),g.specularColorMap&&(S.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,S.specularColorMapTransform)),g.specularIntensityMap&&(S.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,g){g.matcap&&(S.matcap.value=g.matcap)}function w(S,g){const I=e.get(g).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function rw(s,e,t,r){let o={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(I,P){const R=P.program;r.uniformBlockBinding(I,R)}function p(I,P){let R=o[I.id];R===void 0&&(M(I),R=v(I),o[I.id]=R,I.addEventListener("dispose",S));const F=P.program;r.updateUBOMapping(I,F);const N=e.render.frame;l[I.id]!==N&&(y(I),l[I.id]=N)}function v(I){const P=_();I.__bindingPointIndex=P;const R=s.createBuffer(),F=I.__size,N=I.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,F,N),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function _(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const P=o[I.id],R=I.uniforms,F=I.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let N=0,z=R.length;N<z;N++){const W=Array.isArray(R[N])?R[N]:[R[N]];for(let C=0,b=W.length;C<b;C++){const G=W[C];if(x(G,N,C,F)===!0){const re=G.__offset,$=Array.isArray(G.value)?G.value:[G.value];let oe=0;for(let he=0;he<$.length;he++){const ae=$[he],pe=w(ae);typeof ae=="number"||typeof ae=="boolean"?(G.__data[0]=ae,s.bufferSubData(s.UNIFORM_BUFFER,re+oe,G.__data)):ae.isMatrix3?(G.__data[0]=ae.elements[0],G.__data[1]=ae.elements[1],G.__data[2]=ae.elements[2],G.__data[3]=0,G.__data[4]=ae.elements[3],G.__data[5]=ae.elements[4],G.__data[6]=ae.elements[5],G.__data[7]=0,G.__data[8]=ae.elements[6],G.__data[9]=ae.elements[7],G.__data[10]=ae.elements[8],G.__data[11]=0):(ae.toArray(G.__data,oe),oe+=pe.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function x(I,P,R,F){const N=I.value,z=P+"_"+R;if(F[z]===void 0)return typeof N=="number"||typeof N=="boolean"?F[z]=N:F[z]=N.clone(),!0;{const W=F[z];if(typeof N=="number"||typeof N=="boolean"){if(W!==N)return F[z]=N,!0}else if(W.equals(N)===!1)return W.copy(N),!0}return!1}function M(I){const P=I.uniforms;let R=0;const F=16;for(let z=0,W=P.length;z<W;z++){const C=Array.isArray(P[z])?P[z]:[P[z]];for(let b=0,G=C.length;b<G;b++){const re=C[b],$=Array.isArray(re.value)?re.value:[re.value];for(let oe=0,he=$.length;oe<he;oe++){const ae=$[oe],pe=w(ae),O=R%F,le=O%pe.boundary,te=O+le;R+=le,te!==0&&F-te<pe.storage&&(R+=F-te),re.__data=new Float32Array(pe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=R,R+=pe.storage}}}const N=R%F;return N>0&&(R+=F-N),I.__size=R,I.__cache={},this}function w(I){const P={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(P.boundary=4,P.storage=4):I.isVector2?(P.boundary=8,P.storage=8):I.isVector3||I.isColor?(P.boundary=16,P.storage=12):I.isVector4?(P.boundary=16,P.storage=16):I.isMatrix3?(P.boundary=48,P.storage=48):I.isMatrix4?(P.boundary=64,P.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),P}function S(I){const P=I.target;P.removeEventListener("dispose",S);const R=u.indexOf(P.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function g(){for(const I in o)s.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:f,update:p,dispose:g}}class sw{constructor(e={}){const{canvas:t=Sy(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),w=new Int32Array(4);let S=null,g=null;const I=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kn,this.toneMapping=Er,this.toneMappingExposure=1;const R=this;let F=!1,N=0,z=0,W=null,C=-1,b=null;const G=new Nt,re=new Nt;let $=null;const oe=new yt(0);let he=0,ae=t.width,pe=t.height,O=1,le=null,te=null;const U=new Nt(0,0,ae,pe),se=new Nt(0,0,ae,pe);let Ne=!1;const J=new wh;let ue=!1,Ee=!1;const ye=new Ft,be=new Ft,Ue=new H,et=new Nt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function Ut(){return W===null?O:1}let V=r;function wn(A,K){return t.getContext(A,K)}try{const A={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:f,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fh}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",De,!1),V===null){const K="webgl2";if(V=wn(K,A),V===null)throw wn(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ht,Ke,Pt,Xe,k,T,Q,me,ve,de,We,Ae,ze,dt,Me,Be,$e,tt,Ge,ft,st,Ct,q;function Re(){gt=new pE(V),gt.init(),st=new $1(V,gt),ht=new lE(V,gt,e,st),Ke=new K1(V,gt),ht.reverseDepthBuffer&&y&&Ke.buffers.depth.setReversed(!0),Pt=new vE(V),Xe=new N1,k=new Y1(V,gt,Ke,Xe,ht,st,Pt),T=new uE(R),Q=new fE(R),me=new wx(V),Ct=new aE(V,me),ve=new mE(V,me,Pt,Ct),de=new yE(V,ve,me,Pt),tt=new _E(V,ht,k),Me=new cE(Xe),We=new I1(R,T,Q,gt,ht,Ct,Me),Ae=new iw(R,Xe),ze=new z1,dt=new V1(gt),$e=new sE(R,T,Q,Ke,de,x,f),Be=new X1(R,de,ht),q=new rw(V,Pt,ht,Ke),Ge=new oE(V,gt,Pt),ft=new gE(V,gt,Pt),Pt.programs=We.programs,R.capabilities=ht,R.extensions=gt,R.properties=Xe,R.renderLists=ze,R.shadowMap=Be,R.state=Ke,R.info=Pt}Re();const ce=new tw(R,V);this.xr=ce,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(A){A!==void 0&&(O=A,this.setSize(ae,pe,!1))},this.getSize=function(A){return A.set(ae,pe)},this.setSize=function(A,K,ne=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=A,pe=K,t.width=Math.floor(A*O),t.height=Math.floor(K*O),ne===!0&&(t.style.width=A+"px",t.style.height=K+"px"),this.setViewport(0,0,A,K)},this.getDrawingBufferSize=function(A){return A.set(ae*O,pe*O).floor()},this.setDrawingBufferSize=function(A,K,ne){ae=A,pe=K,O=ne,t.width=Math.floor(A*ne),t.height=Math.floor(K*ne),this.setViewport(0,0,A,K)},this.getCurrentViewport=function(A){return A.copy(G)},this.getViewport=function(A){return A.copy(U)},this.setViewport=function(A,K,ne,ie){A.isVector4?U.set(A.x,A.y,A.z,A.w):U.set(A,K,ne,ie),Ke.viewport(G.copy(U).multiplyScalar(O).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,K,ne,ie){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,K,ne,ie),Ke.scissor(re.copy(se).multiplyScalar(O).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(A){Ke.setScissorTest(Ne=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){te=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,K=!0,ne=!0){let ie=0;if(A){let j=!1;if(W!==null){const Se=W.texture.format;j=Se===yh||Se===_h||Se===vh}if(j){const Se=W.texture.type,Ce=Se===Xi||Se===es||Se===Za||Se===Zs||Se===mh||Se===gh,Ie=$e.getClearColor(),Fe=$e.getClearAlpha(),nt=Ie.r,it=Ie.g,qe=Ie.b;Ce?(M[0]=nt,M[1]=it,M[2]=qe,M[3]=Fe,V.clearBufferuiv(V.COLOR,0,M)):(w[0]=nt,w[1]=it,w[2]=qe,w[3]=Fe,V.clearBufferiv(V.COLOR,0,w))}else ie|=V.COLOR_BUFFER_BIT}K&&(ie|=V.DEPTH_BUFFER_BIT),ne&&(ie|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",De,!1),$e.dispose(),ze.dispose(),dt.dispose(),Xe.dispose(),T.dispose(),Q.dispose(),de.dispose(),Ct.dispose(),q.dispose(),We.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",is),ce.removeEventListener("sessionend",Ki),bi.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=Pt.autoReset,K=Be.enabled,ne=Be.autoUpdate,ie=Be.needsUpdate,j=Be.type;Re(),Pt.autoReset=A,Be.enabled=K,Be.autoUpdate=ne,Be.needsUpdate=ie,Be.type=j}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){const K=A.target;K.removeEventListener("dispose",at),Ot(K)}function Ot(A){en(A),Xe.remove(A)}function en(A){const K=Xe.get(A).programs;K!==void 0&&(K.forEach(function(ne){We.releaseProgram(ne)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,K,ne,ie,j,Se){K===null&&(K=Dt);const Ce=j.isMesh&&j.matrixWorld.determinant()<0,Ie=ro(A,K,ne,ie,j);Ke.setMaterial(ie,Ce);let Fe=ne.index,nt=1;if(ie.wireframe===!0){if(Fe=ve.getWireframeAttribute(ne),Fe===void 0)return;nt=2}const it=ne.drawRange,qe=ne.attributes.position;let ot=it.start*nt,Tt=(it.start+it.count)*nt;Se!==null&&(ot=Math.max(ot,Se.start*nt),Tt=Math.min(Tt,(Se.start+Se.count)*nt)),Fe!==null?(ot=Math.max(ot,0),Tt=Math.min(Tt,Fe.count)):qe!=null&&(ot=Math.max(ot,0),Tt=Math.min(Tt,qe.count));const bt=Tt-ot;if(bt<0||bt===1/0)return;Ct.setup(j,ie,Ie,ne,Fe);let Wt,St=Ge;if(Fe!==null&&(Wt=me.get(Fe),St=ft,St.setIndex(Wt)),j.isMesh)ie.wireframe===!0?(Ke.setLineWidth(ie.wireframeLinewidth*Ut()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(j.isLine){let Ye=ie.linewidth;Ye===void 0&&(Ye=1),Ke.setLineWidth(Ye*Ut()),j.isLineSegments?St.setMode(V.LINES):j.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else j.isPoints?St.setMode(V.POINTS):j.isSprite&&St.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)St.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ye=j._multiDrawStarts,Kt=j._multiDrawCounts,xt=j._multiDrawCount,hn=Fe?me.get(Fe).bytesPerElement:1,ri=Xe.get(ie).currentProgram.getUniforms();for(let bn=0;bn<xt;bn++)ri.setValue(V,"_gl_DrawID",bn),St.render(Ye[bn]/hn,Kt[bn])}else if(j.isInstancedMesh)St.renderInstances(ot,bt,j.count);else if(ne.isInstancedBufferGeometry){const Ye=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,Kt=Math.min(ne.instanceCount,Ye);St.renderInstances(ot,bt,Kt)}else St.render(ot,bt)};function Et(A,K,ne){A.transparent===!0&&A.side===Hi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,rs(A,K,ne),A.side=wr,A.needsUpdate=!0,rs(A,K,ne),A.side=Hi):rs(A,K,ne)}this.compile=function(A,K,ne=null){ne===null&&(ne=A),g=dt.get(ne),g.init(K),P.push(g),ne.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),A!==ne&&A.traverseVisible(function(j){j.isLight&&j.layers.test(K.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const ie=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Se=j.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const Ie=Se[Ce];Et(Ie,ne,j),ie.add(Ie)}else Et(Se,ne,j),ie.add(Se)}),P.pop(),g=null,ie},this.compileAsync=function(A,K,ne=null){const ie=this.compile(A,K,ne);return new Promise(j=>{function Se(){if(ie.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&ie.delete(Ce)}),ie.size===0){j(A);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let kn=null;function Tn(A){kn&&kn(A)}function is(){bi.stop()}function Ki(){bi.start()}const bi=new av;bi.setAnimationLoop(Tn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(A){kn=A,ce.setAnimationLoop(A),A===null?bi.stop():bi.start()},ce.addEventListener("sessionstart",is),ce.addEventListener("sessionend",Ki),this.render=function(A,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(K),K=ce.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,K,W),g=dt.get(A,P.length),g.init(K),P.push(g),be.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),J.setFromProjectionMatrix(be),Ee=this.localClippingEnabled,ue=Me.init(this.clippingPlanes,Ee),S=ze.get(A,I.length),S.init(),I.push(S),ce.enabled===!0&&ce.isPresenting===!0){const Se=R.xr.getDepthSensingMesh();Se!==null&&Ai(Se,K,-1/0,R.sortObjects)}Ai(A,K,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(le,te),_t=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,_t&&$e.addToRenderList(S,A),this.info.render.frame++,ue===!0&&Me.beginShadows();const ne=g.state.shadowsArray;Be.render(ne,A,K),ue===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=S.opaque,j=S.transmissive;if(g.setupLights(),K.isArrayCamera){const Se=K.cameras;if(j.length>0)for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const Fe=Se[Ce];Ar(ie,j,A,Fe)}_t&&$e.render(A);for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++){const Fe=Se[Ce];br(S,A,Fe,Fe.viewport)}}else j.length>0&&Ar(ie,j,A,K),_t&&$e.render(A),br(S,A,K);W!==null&&(k.updateMultisampleRenderTarget(W),k.updateRenderTargetMipmap(W)),A.isScene===!0&&A.onAfterRender(R,A,K),Ct.resetDefaultState(),C=-1,b=null,P.pop(),P.length>0?(g=P[P.length-1],ue===!0&&Me.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ai(A,K,ne,ie){if(A.visible===!1)return;if(A.layers.test(K.layers)){if(A.isGroup)ne=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(K);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){ie&&et.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);const Ce=de.update(A),Ie=A.material;Ie.visible&&S.push(A,Ce,Ie,ne,et.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const Ce=de.update(A),Ie=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),et.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),et.copy(Ce.boundingSphere.center)),et.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Ie)){const Fe=Ce.groups;for(let nt=0,it=Fe.length;nt<it;nt++){const qe=Fe[nt],ot=Ie[qe.materialIndex];ot&&ot.visible&&S.push(A,Ce,ot,ne,et.z,qe)}}else Ie.visible&&S.push(A,Ce,Ie,ne,et.z,null)}}const Se=A.children;for(let Ce=0,Ie=Se.length;Ce<Ie;Ce++)Ai(Se[Ce],K,ne,ie)}function br(A,K,ne,ie){const j=A.opaque,Se=A.transmissive,Ce=A.transparent;g.setupLightsView(ne),ue===!0&&Me.setGlobalState(R.clippingPlanes,ne),ie&&Ke.viewport(G.copy(ie)),j.length>0&&Yi(j,K,ne),Se.length>0&&Yi(Se,K,ne),Ce.length>0&&Yi(Ce,K,ne),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ar(A,K,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ie.id]===void 0&&(g.state.transmissionRenderTarget[ie.id]=new ts(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Ja:Xi,minFilter:Jr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace}));const Se=g.state.transmissionRenderTarget[ie.id],Ce=ie.viewport||G;Se.setSize(Ce.z,Ce.w);const Ie=R.getRenderTarget();R.setRenderTarget(Se),R.getClearColor(oe),he=R.getClearAlpha(),he<1&&R.setClearColor(16777215,.5),R.clear(),_t&&$e.render(ne);const Fe=R.toneMapping;R.toneMapping=Er;const nt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),g.setupLightsView(ie),ue===!0&&Me.setGlobalState(R.clippingPlanes,ie),Yi(A,ne,ie),k.updateMultisampleRenderTarget(Se),k.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let qe=0,ot=K.length;qe<ot;qe++){const Tt=K[qe],bt=Tt.object,Wt=Tt.geometry,St=Tt.material,Ye=Tt.group;if(St.side===Hi&&bt.layers.test(ie.layers)){const Kt=St.side;St.side=On,St.needsUpdate=!0,no(bt,ne,ie,Wt,St,Ye),St.side=Kt,St.needsUpdate=!0,it=!0}}it===!0&&(k.updateMultisampleRenderTarget(Se),k.updateRenderTargetMipmap(Se))}R.setRenderTarget(Ie),R.setClearColor(oe,he),nt!==void 0&&(ie.viewport=nt),R.toneMapping=Fe}function Yi(A,K,ne){const ie=K.isScene===!0?K.overrideMaterial:null;for(let j=0,Se=A.length;j<Se;j++){const Ce=A[j],Ie=Ce.object,Fe=Ce.geometry,nt=ie===null?Ce.material:ie,it=Ce.group;Ie.layers.test(ne.layers)&&no(Ie,K,ne,Fe,nt,it)}}function no(A,K,ne,ie,j,Se){A.onBeforeRender(R,K,ne,ie,j,Se),A.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,K,ne,ie,A,Se),j.transparent===!0&&j.side===Hi&&j.forceSinglePass===!1?(j.side=On,j.needsUpdate=!0,R.renderBufferDirect(ne,K,ie,j,A,Se),j.side=wr,j.needsUpdate=!0,R.renderBufferDirect(ne,K,ie,j,A,Se),j.side=Hi):R.renderBufferDirect(ne,K,ie,j,A,Se),A.onAfterRender(R,K,ne,ie,j,Se)}function rs(A,K,ne){K.isScene!==!0&&(K=Dt);const ie=Xe.get(A),j=g.state.lights,Se=g.state.shadowsArray,Ce=j.state.version,Ie=We.getParameters(A,j.state,Se,K,ne),Fe=We.getProgramCacheKey(Ie);let nt=ie.programs;ie.environment=A.isMeshStandardMaterial?K.environment:null,ie.fog=K.fog,ie.envMap=(A.isMeshStandardMaterial?Q:T).get(A.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&A.envMap===null?K.environmentRotation:A.envMapRotation,nt===void 0&&(A.addEventListener("dispose",at),nt=new Map,ie.programs=nt);let it=nt.get(Fe);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===Ce)return gi(A,Ie),it}else Ie.uniforms=We.getUniforms(A),A.onBeforeCompile(Ie,R),it=We.acquireProgram(Ie,Fe),nt.set(Fe,it),ie.uniforms=Ie.uniforms;const qe=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=Me.uniform),gi(A,Ie),ie.needsLights=ic(A),ie.lightsStateVersion=Ce,ie.needsLights&&(qe.ambientLightColor.value=j.state.ambient,qe.lightProbe.value=j.state.probe,qe.directionalLights.value=j.state.directional,qe.directionalLightShadows.value=j.state.directionalShadow,qe.spotLights.value=j.state.spot,qe.spotLightShadows.value=j.state.spotShadow,qe.rectAreaLights.value=j.state.rectArea,qe.ltc_1.value=j.state.rectAreaLTC1,qe.ltc_2.value=j.state.rectAreaLTC2,qe.pointLights.value=j.state.point,qe.pointLightShadows.value=j.state.pointShadow,qe.hemisphereLights.value=j.state.hemi,qe.directionalShadowMap.value=j.state.directionalShadowMap,qe.directionalShadowMatrix.value=j.state.directionalShadowMatrix,qe.spotShadowMap.value=j.state.spotShadowMap,qe.spotLightMatrix.value=j.state.spotLightMatrix,qe.spotLightMap.value=j.state.spotLightMap,qe.pointShadowMap.value=j.state.pointShadowMap,qe.pointShadowMatrix.value=j.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function io(A){if(A.uniformsList===null){const K=A.currentProgram.getUniforms();A.uniformsList=Vl.seqWithValue(K.seq,A.uniforms)}return A.uniformsList}function gi(A,K){const ne=Xe.get(A);ne.outputColorSpace=K.outputColorSpace,ne.batching=K.batching,ne.batchingColor=K.batchingColor,ne.instancing=K.instancing,ne.instancingColor=K.instancingColor,ne.instancingMorph=K.instancingMorph,ne.skinning=K.skinning,ne.morphTargets=K.morphTargets,ne.morphNormals=K.morphNormals,ne.morphColors=K.morphColors,ne.morphTargetsCount=K.morphTargetsCount,ne.numClippingPlanes=K.numClippingPlanes,ne.numIntersection=K.numClipIntersection,ne.vertexAlphas=K.vertexAlphas,ne.vertexTangents=K.vertexTangents,ne.toneMapping=K.toneMapping}function ro(A,K,ne,ie,j){K.isScene!==!0&&(K=Dt),k.resetTextureUnits();const Se=K.fog,Ce=ie.isMeshStandardMaterial?K.environment:null,Ie=W===null?R.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Js,Fe=(ie.isMeshStandardMaterial?Q:T).get(ie.envMap||Ce),nt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),qe=!!ne.morphAttributes.position,ot=!!ne.morphAttributes.normal,Tt=!!ne.morphAttributes.color;let bt=Er;ie.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(bt=R.toneMapping);const Wt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,St=Wt!==void 0?Wt.length:0,Ye=Xe.get(ie),Kt=g.state.lights;if(ue===!0&&(Ee===!0||A!==b)){const $t=A===b&&ie.id===C;Me.setState(ie,A,$t)}let xt=!1;ie.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Kt.state.version||Ye.outputColorSpace!==Ie||j.isBatchedMesh&&Ye.batching===!1||!j.isBatchedMesh&&Ye.batching===!0||j.isBatchedMesh&&Ye.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ye.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ye.instancing===!1||!j.isInstancedMesh&&Ye.instancing===!0||j.isSkinnedMesh&&Ye.skinning===!1||!j.isSkinnedMesh&&Ye.skinning===!0||j.isInstancedMesh&&Ye.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ye.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ye.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ye.instancingMorph===!1&&j.morphTexture!==null||Ye.envMap!==Fe||ie.fog===!0&&Ye.fog!==Se||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Me.numPlanes||Ye.numIntersection!==Me.numIntersection)||Ye.vertexAlphas!==nt||Ye.vertexTangents!==it||Ye.morphTargets!==qe||Ye.morphNormals!==ot||Ye.morphColors!==Tt||Ye.toneMapping!==bt||Ye.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Ye.__version=ie.version);let hn=Ye.currentProgram;xt===!0&&(hn=rs(ie,K,j));let ri=!1,bn=!1,Rr=!1;const kt=hn.getUniforms(),An=Ye.uniforms;if(Ke.useProgram(hn.program)&&(ri=!0,bn=!0,Rr=!0),ie.id!==C&&(C=ie.id,bn=!0),ri||b!==A){Ke.buffers.depth.getReversed()?(ye.copy(A.projectionMatrix),Ey(ye),wy(ye),kt.setValue(V,"projectionMatrix",ye)):kt.setValue(V,"projectionMatrix",A.projectionMatrix),kt.setValue(V,"viewMatrix",A.matrixWorldInverse);const gn=kt.map.cameraPosition;gn!==void 0&&gn.setValue(V,Ue.setFromMatrixPosition(A.matrixWorld)),ht.logarithmicDepthBuffer&&kt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&kt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,bn=!0,Rr=!0)}if(j.isSkinnedMesh){kt.setOptional(V,j,"bindMatrix"),kt.setOptional(V,j,"bindMatrixInverse");const $t=j.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),kt.setValue(V,"boneTexture",$t.boneTexture,k))}j.isBatchedMesh&&(kt.setOptional(V,j,"batchingTexture"),kt.setValue(V,"batchingTexture",j._matricesTexture,k),kt.setOptional(V,j,"batchingIdTexture"),kt.setValue(V,"batchingIdTexture",j._indirectTexture,k),kt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&kt.setValue(V,"batchingColorTexture",j._colorsTexture,k));const mn=ne.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&tt.update(j,ne,hn),(bn||Ye.receiveShadow!==j.receiveShadow)&&(Ye.receiveShadow=j.receiveShadow,kt.setValue(V,"receiveShadow",j.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(An.envMap.value=Fe,An.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&K.environment!==null&&(An.envMapIntensity.value=K.environmentIntensity),bn&&(kt.setValue(V,"toneMappingExposure",R.toneMappingExposure),Ye.needsLights&&so(An,Rr),Se&&ie.fog===!0&&Ae.refreshFogUniforms(An,Se),Ae.refreshMaterialUniforms(An,ie,O,pe,g.state.transmissionRenderTarget[A.id]),Vl.upload(V,io(Ye),An,k)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Vl.upload(V,io(Ye),An,k),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&kt.setValue(V,"center",j.center),kt.setValue(V,"modelViewMatrix",j.modelViewMatrix),kt.setValue(V,"normalMatrix",j.normalMatrix),kt.setValue(V,"modelMatrix",j.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const $t=ie.uniformsGroups;for(let gn=0,Cr=$t.length;gn<Cr;gn++){const vt=$t[gn];q.update(vt,hn),q.bind(vt,hn)}}return hn}function so(A,K){A.ambientLightColor.needsUpdate=K,A.lightProbe.needsUpdate=K,A.directionalLights.needsUpdate=K,A.directionalLightShadows.needsUpdate=K,A.pointLights.needsUpdate=K,A.pointLightShadows.needsUpdate=K,A.spotLights.needsUpdate=K,A.spotLightShadows.needsUpdate=K,A.rectAreaLights.needsUpdate=K,A.hemisphereLights.needsUpdate=K}function ic(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,K,ne){Xe.get(A.texture).__webglTexture=K,Xe.get(A.depthTexture).__webglTexture=ne;const ie=Xe.get(A);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,K){const ne=Xe.get(A);ne.__webglFramebuffer=K,ne.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(A,K=0,ne=0){W=A,N=K,z=ne;let ie=!0,j=null,Se=!1,Ce=!1;if(A){const Fe=Xe.get(A);if(Fe.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(V.FRAMEBUFFER,null),ie=!1;else if(Fe.__webglFramebuffer===void 0)k.setupRenderTarget(A);else if(Fe.__hasExternalTextures)k.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const qe=A.depthTexture;if(Fe.__boundDepthTexture!==qe){if(qe!==null&&Xe.has(qe)&&(A.width!==qe.image.width||A.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(A)}}const nt=A.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);const it=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(it[K])?j=it[K][ne]:j=it[K],Se=!0):A.samples>0&&k.useMultisampledRTT(A)===!1?j=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[ne]:j=it,G.copy(A.viewport),re.copy(A.scissor),$=A.scissorTest}else G.copy(U).multiplyScalar(O).floor(),re.copy(se).multiplyScalar(O).floor(),$=Ne;if(Ke.bindFramebuffer(V.FRAMEBUFFER,j)&&ie&&Ke.drawBuffers(A,j),Ke.viewport(G),Ke.scissor(re),Ke.setScissorTest($),Se){const Fe=Xe.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+K,Fe.__webglTexture,ne)}else if(Ce){const Fe=Xe.get(A.texture),nt=K||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.__webglTexture,ne||0,nt)}C=-1},this.readRenderTargetPixels=function(A,K,ne,ie,j,Se,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Ke.bindFramebuffer(V.FRAMEBUFFER,Ie);try{const Fe=A.texture,nt=Fe.format,it=Fe.type;if(!ht.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=A.width-ie&&ne>=0&&ne<=A.height-j&&V.readPixels(K,ne,ie,j,st.convert(nt),st.convert(it),Se)}finally{const Fe=W!==null?Xe.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(A,K,ne,ie,j,Se,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const Fe=A.texture,nt=Fe.format,it=Fe.type;if(!ht.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=A.width-ie&&ne>=0&&ne<=A.height-j){Ke.bindFramebuffer(V.FRAMEBUFFER,Ie);const qe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.bufferData(V.PIXEL_PACK_BUFFER,Se.byteLength,V.STREAM_READ),V.readPixels(K,ne,ie,j,st.convert(nt),st.convert(it),0);const ot=W!==null?Xe.get(W).__webglFramebuffer:null;Ke.bindFramebuffer(V.FRAMEBUFFER,ot);const Tt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await My(V,Tt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,qe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Se),V.deleteBuffer(qe),V.deleteSync(Tt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,K=null,ne=0){A.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1]);const ie=Math.pow(2,-ne),j=Math.floor(A.image.width*ie),Se=Math.floor(A.image.height*ie),Ce=K!==null?K.x:0,Ie=K!==null?K.y:0;k.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ne,0,0,Ce,Ie,j,Se),Ke.unbindTexture()};const ao=V.createFramebuffer(),oo=V.createFramebuffer();this.copyTextureToTexture=function(A,K,ne=null,ie=null,j=0,Se=null){A.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,A=arguments[1],K=arguments[2],Se=arguments[3]||0,ne=null),Se===null&&(j!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Se=j,j=0):Se=0);let Ce,Ie,Fe,nt,it,qe,ot,Tt,bt;const Wt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(ne!==null)Ce=ne.max.x-ne.min.x,Ie=ne.max.y-ne.min.y,Fe=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,it=ne.min.y,qe=ne.isBox3?ne.min.z:0;else{const mn=Math.pow(2,-j);Ce=Math.floor(Wt.width*mn),Ie=Math.floor(Wt.height*mn),A.isDataArrayTexture?Fe=Wt.depth:A.isData3DTexture?Fe=Math.floor(Wt.depth*mn):Fe=1,nt=0,it=0,qe=0}ie!==null?(ot=ie.x,Tt=ie.y,bt=ie.z):(ot=0,Tt=0,bt=0);const St=st.convert(K.format),Ye=st.convert(K.type);let Kt;K.isData3DTexture?(k.setTexture3D(K,0),Kt=V.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(k.setTexture2DArray(K,0),Kt=V.TEXTURE_2D_ARRAY):(k.setTexture2D(K,0),Kt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,K.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,K.unpackAlignment);const xt=V.getParameter(V.UNPACK_ROW_LENGTH),hn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ri=V.getParameter(V.UNPACK_SKIP_PIXELS),bn=V.getParameter(V.UNPACK_SKIP_ROWS),Rr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Wt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Wt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,nt),V.pixelStorei(V.UNPACK_SKIP_ROWS,it),V.pixelStorei(V.UNPACK_SKIP_IMAGES,qe);const kt=A.isDataArrayTexture||A.isData3DTexture,An=K.isDataArrayTexture||K.isData3DTexture;if(A.isDepthTexture){const mn=Xe.get(A),$t=Xe.get(K),gn=Xe.get(mn.__renderTarget),Cr=Xe.get($t.__renderTarget);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,gn.__webglFramebuffer),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,Cr.__webglFramebuffer);for(let vt=0;vt<Fe;vt++)kt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,j,qe+vt),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Xe.get(K).__webglTexture,Se,bt+vt)),V.blitFramebuffer(nt,it,Ce,Ie,ot,Tt,Ce,Ie,V.DEPTH_BUFFER_BIT,V.NEAREST);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Xe.has(A)){const mn=Xe.get(A),$t=Xe.get(K);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,ao),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,oo);for(let gn=0;gn<Fe;gn++)kt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,mn.__webglTexture,j,qe+gn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mn.__webglTexture,j),An?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,$t.__webglTexture,Se,bt+gn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,$t.__webglTexture,Se),j!==0?V.blitFramebuffer(nt,it,Ce,Ie,ot,Tt,Ce,Ie,V.COLOR_BUFFER_BIT,V.NEAREST):An?V.copyTexSubImage3D(Kt,Se,ot,Tt,bt+gn,nt,it,Ce,Ie):V.copyTexSubImage2D(Kt,Se,ot,Tt,nt,it,Ce,Ie);Ke.bindFramebuffer(V.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Kt,Se,ot,Tt,bt,Ce,Ie,Fe,St,Ye,Wt.data):K.isCompressedArrayTexture?V.compressedTexSubImage3D(Kt,Se,ot,Tt,bt,Ce,Ie,Fe,St,Wt.data):V.texSubImage3D(Kt,Se,ot,Tt,bt,Ce,Ie,Fe,St,Ye,Wt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Se,ot,Tt,Ce,Ie,St,Ye,Wt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Se,ot,Tt,Wt.width,Wt.height,St,Wt.data):V.texSubImage2D(V.TEXTURE_2D,Se,ot,Tt,Ce,Ie,St,Ye,Wt);V.pixelStorei(V.UNPACK_ROW_LENGTH,xt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,hn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ri),V.pixelStorei(V.UNPACK_SKIP_ROWS,bn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Rr),Se===0&&K.generateMipmaps&&V.generateMipmap(Kt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,K,ne=null,ie=null,j=0){return A.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,A=arguments[2],K=arguments[3],j=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,K,ne,ie,j)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&k.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?k.setTextureCube(A,0):A.isData3DTexture?k.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?k.setTexture2DArray(A,0):k.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){N=0,z=0,W=null,Ke.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}function aw({device:s,selectedPartId:e,onSelectPart:t}){const r=Mt.useRef(null),[o,l]=Mt.useState(!1);return Mt.useEffect(()=>{l(!1);const u=r.current;if(!u)return;const d=u,f=new qy,p=getComputedStyle(document.documentElement).getPropertyValue("--canvas-bg").trim()||"#f8fafc";f.background=new yt(p),f.fog=new Eh(new yt(p),9,16);const v=new Yn(42,1,.1,100),_=new H(0,2.35,7.2);v.position.copy(_),v.lookAt(0,0,0);const y=new sw({canvas:d,antialias:!0});y.setPixelRatio(Math.min(window.devicePixelRatio,2)),y.outputColorSpace=Kn,y.toneMapping=Cg,y.toneMappingExposure=1.08,y.shadowMap.enabled=!0,y.shadowMap.type=Ag;const x=new ja;x.scale.setScalar(1.18),f.add(x),f.add(new vx(16777215,6583435,2.4));const M=new Ym(16777215,2.8);M.position.set(5,6,4),M.castShadow=!0,M.shadow.mapSize.set(1024,1024),f.add(M);const w=new Ym(10090212,1.2);w.position.set(-4,3,-5),f.add(w);const S=new yx(3718648,.9,12);S.position.set(0,2.8,3.5),f.add(S);const g=ow(s,x),I=new Mx,P=new Je;let R=!1,F=0,N=0,z=0,W=0,C=!1;function b(){const O=d.clientWidth,le=d.clientHeight;y.setSize(O,le,!1),v.aspect=O/le,v.updateProjectionMatrix()}function G(O){var U;const le=d.getBoundingClientRect();P.x=(O.clientX-le.left)/le.width*2-1,P.y=-((O.clientY-le.top)/le.height)*2+1,I.setFromCamera(P,v);const te=(U=I.intersectObjects(g,!1)[0])==null?void 0:U.object;te!=null&&te.userData.partId&&t(te.userData.partId)}function re(O){R=!0,F=O.clientX,N=O.clientY,G(O)}function $(O){R&&(x.rotation.y+=(O.clientX-F)*.01,x.rotation.x+=(O.clientY-N)*.006,x.rotation.x=Em.clamp(x.rotation.x,-.55,.55),F=O.clientX,N=O.clientY)}function oe(){R=!1}function he(O){O.preventDefault(),v.position.z=Em.clamp(v.position.z+O.deltaY*.006,4.4,10.2)}function ae(){x.rotation.set(0,0,0),v.position.copy(_)}d.addEventListener("pointerdown",re),d.addEventListener("pointermove",$),d.addEventListener("wheel",he,{passive:!1}),d.addEventListener("dblclick",ae),window.addEventListener("pointerup",oe),window.addEventListener("resize",b);function pe(){z+=1;for(const O of g){const le=O.userData.partId===e,te=O.material;te.emissive.set(le?1357990:0),te.emissiveIntensity=le?.35+Math.sin(z*.08)*.08:0}x.rotation.y+=R?0:.0018,v.lookAt(0,0,0),y.render(f,v),C||(C=!0,l(!0)),W=requestAnimationFrame(pe)}return b(),pe(),()=>{d.removeEventListener("pointerdown",re),d.removeEventListener("pointermove",$),d.removeEventListener("wheel",he),d.removeEventListener("dblclick",ae),window.removeEventListener("pointerup",oe),window.removeEventListener("resize",b),cancelAnimationFrame(W),x.traverse(O=>{var U;const le=O;(U=le.geometry)==null||U.dispose();const te=le.material;Array.isArray(te)?te.forEach(se=>se.dispose()):te==null||te.dispose()}),y.dispose()}},[s,t,e]),D.jsxs("div",{className:"model-stage",children:[!o&&D.jsx("div",{className:"model-loading",children:"Loading teaching model..."}),D.jsx("canvas",{ref:r,className:"device-canvas","aria-label":"interactive 3D teaching model"}),D.jsxs("div",{className:"model-tools","aria-hidden":"true",children:[D.jsx("span",{children:"Drag rotate"}),D.jsx("span",{children:"Wheel zoom"}),D.jsx("span",{children:"Double-click reset"})]})]})}function ns(s,e={}){return new px({color:s,roughness:e.roughness??.48,metalness:e.metalness??.12,transparent:e.opacity!==void 0&&e.opacity<1,opacity:e.opacity??1,emissive:e.emissive??0})}function lt(s,e,t,r,o=1){const l=new En(new ra(r[0],r[1],r[2]),ns(e,{opacity:o}));return l.position.set(...t),l.userData.partId=s,l}function un(s,e,t,r,o,l="y",u=1){const d=new En(new ec(r,r,o,64),ns(e,{opacity:u,metalness:.18}));return d.position.set(...t),l==="x"&&(d.rotation.z=Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Wa(s,e,t,r,o,l=1){const u=new En(new Ch(r,o,24,96),ns(e,{opacity:l,metalness:.16}));return u.position.set(...t),u.rotation.y=Math.PI/2,u.userData.partId=s,u}function Sd(s,e,t,r,o=[1,1,1],l=1){const u=new En(new Rh(r,48,24),ns(e,{opacity:l}));return u.position.set(...t),u.scale.set(...o),u.userData.partId=s,u}function zl(s,e,t,r,o,l="y",u=1){const d=new En(new Ah(r,o,64,1,!0),ns(e,{opacity:u}));return d.position.set(...t),l==="x"&&(d.rotation.z=-Math.PI/2),l==="z"&&(d.rotation.x=Math.PI/2),d.userData.partId=s,d}function Si(s,e,t,r=.035,o=1){const l=new nv(t.map(d=>new H(...d))),u=new En(new Ph(l,64,r,12,!1),ns(e,{opacity:o,roughness:.38}));return u.userData.partId=s,u}function Te(s,e,t){t.castShadow=!0,t.receiveShadow=!0;const r=new Zy(new fx(t.geometry,28),new Jg({color:988970,transparent:!0,opacity:.18}));t.add(r),e.push(t),s.add(t)}function ow(s,e){const t=[];s.model==="ecg"?(Te(e,t,lt("screen",988970,[0,1.05,-.52],[2.25,1.08,.12])),Te(e,t,lt("screen",14412542,[0,.02,0],[2.85,2.32,.8],.9)),Te(e,t,lt("power",6583435,[-1.07,-.74,-.55],[.52,.22,.16])),Te(e,t,lt("protection",15680580,[-1.02,-.25,-.55],[.42,.28,.16])),Te(e,t,lt("isolation",11032055,[-.56,-.25,-.55],[.1,.52,.18],.82)),Te(e,t,lt("amplifier",3718648,[-.2,-.25,-.55],[.48,.32,.16])),Te(e,t,lt("cmrr",2278750,[.26,-.25,-.55],[.34,.28,.16])),Te(e,t,lt("highpass",1357990,[.66,-.47,-.55],[.34,.2,.16])),Te(e,t,lt("lowpass",1013358,[.66,-.25,-.55],[.34,.2,.16])),Te(e,t,lt("notch",561586,[.66,-.03,-.55],[.34,.2,.16])),Te(e,t,lt("adc",16347926,[1.08,-.25,-.55],[.34,.32,.16])),Te(e,t,lt("processor",16096779,[1.08,-.74,-.55],[.46,.22,.16])),Te(e,t,lt("alarm",14753096,[1.05,.65,-.55],[.34,.18,.16])),Te(e,t,un("drl",9133302,[-1.22,-1.02,.34],.14,.1,"z")),Te(e,t,Si("leads",4674921,[[1.22,-.55,-.18],[1.75,-.95,.18],[2.35,-1.15,.05]],.04)),Te(e,t,Si("leads",4674921,[[1.18,-.46,-.2],[1.7,-.35,.2],[2.25,-.7,.45]],.032)),Te(e,t,un("electrodes",15680580,[2.45,-1.18,.05],.22,.08,"z")),Te(e,t,un("electrodes",16347926,[2.35,-.7,.45],.18,.07,"z")),Te(e,t,un("skinInterface",16557477,[2.45,-1.26,.05],.28,.035,"z",.56)),Te(e,t,un("skinInterface",16628340,[2.35,-.78,.45],.23,.035,"z",.56))):s.model==="ct"?(Te(e,t,Wa("gantry",13358561,[0,.35,0],1.55,.32)),Te(e,t,Wa("detectors",3718648,[0,.35,.04],1.12,.08,.82)),Te(e,t,un("tube",16347926,[.08,1.78,.02],.22,.7,"z")),Te(e,t,zl("tube",16096779,[.08,1.15,.02],.72,.72,"y",.26)),Te(e,t,lt("table",9741240,[0,-.72,0],[4.35,.2,.78])),Te(e,t,Sd("table",14870768,[-.15,-.45,0],.45,[2.4,.25,.72],.62)),Te(e,t,lt("console",1120295,[-2.9,.32,-.62],[.78,.82,.18]))):s.model==="ultrasound"?(Te(e,t,lt("console",14412542,[0,-.18,0],[2.05,1.5,.92])),Te(e,t,lt("screen",988970,[0,1.35,-.08],[2.08,1.08,.14])),Te(e,t,lt("console",14870768,[0,.15,-.55],[1.55,.28,.08])),Te(e,t,Si("probe",3359061,[[.86,-.42,.15],[1.35,-.65,.5],[1.95,-.22,.38]],.04)),Te(e,t,un("probe",1013358,[2.18,-.2,.28],.26,1.1,"y")),Te(e,t,lt("crystals",16436245,[2.18,-.82,.28],[.72,.12,.35])),Te(e,t,zl("beam",3718648,[2.18,-1.45,.28],.62,1.3,"y",.24))):s.model==="xray"?(Te(e,t,lt("detector",14870768,[1.78,0,0],[.22,2.65,2.05])),Te(e,t,lt("grid",9741240,[1.5,0,0],[.08,2.35,1.78],.76)),Te(e,t,un("cathode",3718648,[-2.1,.92,0],.25,.44,"z")),Te(e,t,un("anode",16347926,[-1.42,.92,0],.34,.22,"z")),Te(e,t,un("collimator",3359061,[-.8,.35,0],.34,.82,"x")),Te(e,t,zl("collimator",16436245,[.25,.18,0],1,2,"x",.18))):s.model==="mri"?(Te(e,t,Wa("bore",13095678,[0,.35,0],1.68,.36)),Te(e,t,Wa("gradients",3718648,[0,.35,-.03],1.28,.08,.86)),Te(e,t,Wa("rfcoil",8141549,[0,.35,.04],.92,.095,.9)),Te(e,t,un("bore",14739455,[0,.35,0],.88,1.65,"z",.28)),Te(e,t,lt("table",9741240,[0,-.78,0],[4.2,.22,.8])),Te(e,t,Sd("table",14870768,[-.15,-.52,0],.45,[2.6,.28,.72],.62))):s.model==="ventilator"?(Te(e,t,lt("screen",988970,[-.25,1.12,-.48],[1.55,.72,.12])),Te(e,t,lt("blower",14412542,[-.25,-.1,0],[2.1,1.65,.9],.92)),Te(e,t,un("blower",3718648,[-.9,-.2,-.55],.32,.18,"z")),Te(e,t,lt("sensors",16347926,[.72,-.2,-.55],[.58,.28,.16])),Te(e,t,Si("tubing",1357990,[[.88,-.25,-.2],[1.55,-.4,.45],[2.05,-.9,.28],[2.55,-.82,.04]],.06,.78)),Te(e,t,Sd("tubing",14870768,[2.7,-.82,.02],.28,[1.25,.55,.75],.55))):s.model==="defib"?(Te(e,t,lt("screen",988970,[-.42,.84,-.52],[1.28,.62,.12])),Te(e,t,lt("charger",14870768,[0,0,0],[2.25,1.75,.85],.94)),Te(e,t,lt("capacitor",16347926,[.68,-.15,-.55],[.52,.72,.18])),Te(e,t,un("capacitor",16096779,[.05,-.26,-.55],.22,.46,"z")),Te(e,t,Si("pads",4674921,[[.72,-.55,-.25],[1.38,-.92,.24],[2.08,-1.1,.04]],.042)),Te(e,t,Si("pads",4674921,[[.45,-.54,-.28],[1.18,-.62,.52],[1.9,-.42,.6]],.042)),Te(e,t,lt("pads",15680580,[2.18,-1.12,.04],[.55,.18,.42])),Te(e,t,lt("pads",3718648,[2,-.42,.6],[.48,.16,.36]))):s.model==="dialysis"?(Te(e,t,lt("screen",988970,[-.42,1.2,-.5],[1.32,.68,.12])),Te(e,t,lt("sensors",14870768,[0,.05,0],[2.2,2.15,.82],.92)),Te(e,t,un("pump",1013358,[-.72,.05,-.56],.42,.2,"z")),Te(e,t,un("dialyzer",3718648,[.85,-.1,-.55],.2,1.1,"y",.85)),Te(e,t,Si("pump",15680580,[[-1.15,-.1,-.5],[-.72,-.52,-.58],[.85,-.72,-.55],[1.35,-.25,-.5]],.045)),Te(e,t,Si("dialyzer",1357990,[[.85,.5,-.55],[1.28,.72,-.25],[1.52,.3,.35]],.04)),Te(e,t,lt("sensors",16347926,[-.35,-.82,-.55],[.52,.22,.16]))):s.model==="endoscope"?(Te(e,t,un("handle",14412542,[-1.12,-.12,0],.34,1.35,"y",.95)),Te(e,t,lt("processor",988970,[-1.12,.78,-.28],[.82,.38,.12])),Te(e,t,Si("sensor",3359061,[[-.85,-.42,.12],[-.12,-.72,.34],[.8,-.6,.18],[1.7,-.28,.05]],.065)),Te(e,t,un("sensor",3718648,[1.88,-.22,.04],.16,.16,"x")),Te(e,t,zl("light",16436245,[2.26,-.22,.04],.52,.78,"x",.22)),Te(e,t,lt("light",16347926,[-.95,-.72,-.26],[.42,.22,.16])),Te(e,t,lt("processor",14870768,[-2.1,.1,-.36],[.95,.68,.18]))):(Te(e,t,lt("screen",1120295,[0,.95,-.5],[1.35,.58,.12])),Te(e,t,lt("cassette",14412542,[-.2,-.05,-.52],[1.25,.85,.16])),Te(e,t,Si("cassette",3718648,[[-1.1,-.58,-.52],[-.38,-.25,-.62],[.5,-.42,-.55]],.035)),Te(e,t,un("motor",1013358,[.72,-.82,0],.32,.5,"z")),Te(e,t,lt("pressure",16347926,[-.9,-.76,-.35],[.45,.28,.18])),Te(e,t,lt("screen",14870768,[0,0,0],[2,2.45,.75],.92)));const r=new En(new bh(3.05,96),ns(14870768,{roughness:.76,opacity:.72}));r.position.set(0,-2.02,0),r.rotation.x=-Math.PI/2,r.receiveShadow=!0,e.add(r);const o=lt("__base",13358561,[0,-1.95,0],[4.8,.08,2.4]);return o.receiveShadow=!0,o.userData.partId=void 0,e.add(o),t}function Lt(s,e){return s[e]}const Md=[{id:"ecg",name:{en:"ECG Monitor",de:"EKG-Monitor"},category:{en:"Bioelectric Signals",de:"Bioelektrische Signale"},short:{en:"Records heart electrical activity through electrodes, amplification, filtering, and display.",de:"Misst elektrische Herzaktivitaet mit Elektroden, Verstaerkung, Filterung und Anzeige."},model:"ecg",overview:{en:"An ECG monitor records small voltage differences generated by the electrical activity of the heart. These signals are measured on the skin through electrodes and are usually in the millivolt range, so the device needs high-input-impedance sensing, patient protection, differential amplification, filtering, analog-to-digital conversion, and clear visualization. Important engineering problems are electrode contact quality, common-mode noise, 50 Hz mains interference, baseline drift, motion artifacts, ADC resolution, and safe isolation.",de:"Ein EKG-Monitor misst kleine Spannungsunterschiede, die durch die elektrische Aktivitaet des Herzens entstehen. Diese Signale werden ueber Elektroden auf der Haut gemessen und liegen meist im Millivoltbereich, deshalb braucht das Geraet hochohmige Messung, Patientenschutz, Differenzverstaerkung, Filterung, Analog-Digital-Wandlung und klare Visualisierung. Wichtige technische Probleme sind Elektrodenkontakt, Gleichtaktstoerungen, 50-Hz-Netzstoerung, Basisliniendrift, Bewegungsartefakte, ADC-Aufloesung und sichere Isolation."},workflow:[{en:"The heart produces ionic currents; the electrode-skin interface converts them into electronic potentials.",de:"Das Herz erzeugt ionische Stroeme; die Elektroden-Haut-Grenzflaeche wandelt sie in elektronische Potentiale um."},{en:"Lead cables, shielding, and driven-right-leg feedback reduce common-mode pickup before amplification.",de:"Ableitungskabel, Schirmung und Driven-Right-Leg-Rueckkopplung reduzieren Gleichtakteinkopplung vor der Verstaerkung."},{en:"Input protection and isolation limit patient current and protect the analog front end during faults.",de:"Eingangsschutz und Isolation begrenzen Patientstrom und schuetzen die Analogstufe bei Fehlern."},{en:"The instrumentation amplifier boosts only the differential ECG while rejecting shared 50 Hz interference.",de:"Der Instrumentenverstaerker hebt nur das differentielle EKG an und unterdrueckt gemeinsame 50-Hz-Stoerung."},{en:"High-pass, low-pass, and notch filters reduce baseline drift, muscle noise, and mains interference.",de:"Hochpass, Tiefpass und Kerbfilter reduzieren Basisliniendrift, Muskelrauschen und Netzstoerung."},{en:"The ADC samples the conditioned signal; software estimates heart rate and marks R peaks.",de:"Der ADC tastet das aufbereitete Signal ab; Software schaetzt Herzfrequenz und markiert R-Zacken."}],deepDive:[{title:{en:"Body-to-electrode interface",de:"Koerper-Elektroden-Uebergang"},body:{en:"The heart creates ionic currents in tissue, but the monitor measures electronic voltage at the skin. The gel and metal electrode form a half-cell interface with impedance, offset voltage, capacitance, motion artifacts, and thermal noise. That is why preparation, contact area, and shielding matter before any software filtering can help.",de:"Das Herz erzeugt ionische Stroeme im Gewebe, der Monitor misst aber eine elektronische Spannung an der Haut. Gel und Metallelektrode bilden eine Halbzellen-Grenzflaeche mit Impedanz, Offsetspannung, Kapazitaet, Bewegungsartefakten und thermischem Rauschen. Deshalb sind Vorbereitung, Kontaktflaeche und Schirmung wichtig, bevor Softwarefilter helfen koennen."}},{title:{en:"Analog front end",de:"Analoge Eingangsstufe"},body:{en:"A protection network limits patient current and amplifier input stress. The instrumentation amplifier then amplifies only the difference between electrodes while rejecting common-mode mains pickup. Important electrotechnics ideas are input impedance, CMRR, driven-right-leg feedback, saturation recovery, isolation, and leakage-current safety.",de:"Eine Schutzschaltung begrenzt Patientstrom und Eingangsstress am Verstaerker. Der Instrumentenverstaerker verstaerkt danach nur die Differenz zwischen Elektroden und unterdrueckt Gleichtaktstoerungen vom Netz. Wichtig sind Eingangsimpedanz, CMRR, Driven-Right-Leg-Rueckkopplung, Saettigungsrueckkehr, Isolation und Ableitstromsicherheit."}},{title:{en:"Filtering and reading",de:"Filterung und Auswertung"},body:{en:"Typical ECG processing combines a high-pass filter for baseline wander, a low-pass filter for muscle noise, and sometimes a 50/60 Hz notch for mains interference. The ADC must sample fast enough to keep QRS shape. Software then finds R peaks, estimates heart rate, and must avoid changing clinically meaningful waveform timing.",de:"Typische EKG-Verarbeitung kombiniert Hochpass gegen Basisliniendrift, Tiefpass gegen Muskelrauschen und manchmal einen 50/60-Hz-Kerbfilter gegen Netzstoerung. Der ADC muss schnell genug abtasten, damit die QRS-Form erhalten bleibt. Software findet danach R-Zacken, schaetzt die Herzfrequenz und darf medizinisch relevante Zeitformen nicht verfaelschen."}}],parts:[{id:"electrodes",name:{en:"Electrodes",de:"Elektroden"},function:{en:"Pick up tiny bioelectric potentials from the skin.",de:"Nehmen sehr kleine bioelektrische Potentiale von der Haut auf."},details:{en:"The useful ECG is small, so electrode placement, gel quality, contact pressure, and skin preparation strongly affect signal quality.",de:"Das Nutz-EKG ist klein, deshalb beeinflussen Elektrodenposition, Gelqualitaet, Anpressdruck und Hautvorbereitung die Signalqualitaet stark."},electrotechnics:{en:"Related concept: potential difference, source impedance, contact resistance, and measurement loading.",de:"GET-Bezug: Potentialdifferenz, Quellenimpedanz, Kontaktwiderstand und Messbelastung."}},{id:"skinInterface",name:{en:"Electrode-skin interface",de:"Elektroden-Haut-Uebergang"},function:{en:"Converts ionic currents in tissue into electronic current in the measuring circuit.",de:"Wandelt ionische Stroeme im Gewebe in elektronischen Strom in der Messschaltung um."},details:{en:"This interface behaves like a noisy impedance with capacitance and half-cell offset voltage; motion changes it during measurement.",de:"Diese Grenzflaeche verhaelt sich wie eine rauschende Impedanz mit Kapazitaet und Halbzellen-Offsetspannung; Bewegung veraendert sie waehrend der Messung."},electrotechnics:{en:"Related concept: RC equivalent circuit, capacitance, thermal noise, offset voltage, and transient response.",de:"GET-Bezug: RC-Ersatzschaltung, Kapazitaet, thermisches Rauschen, Offsetspannung und Einschwingverhalten."}},{id:"leads",name:{en:"Lead Cable",de:"Ableitungskabel"},function:{en:"Transfers the low-level signal to the monitor.",de:"Uebertraegt das schwache Signal zum Monitor."},details:{en:"Cable motion, loop area, and poor shielding can introduce artifacts that look like physiological changes.",de:"Kabelbewegung, Schleifenflaeche und schlechte Schirmung koennen Artefakte erzeugen, die wie physiologische Aenderungen aussehen."},electrotechnics:{en:"Related concept: capacitive/inductive coupling, shielding, twisted leads, and common-mode pickup.",de:"GET-Bezug: kapazitive/induktive Einkopplung, Schirmung, verdrillte Leitungen und Gleichtaktstoerung."}},{id:"drl",name:{en:"Driven right leg circuit",de:"Driven-Right-Leg-Schaltung"},function:{en:"Feeds an inverted common-mode signal back to the patient reference electrode.",de:"Fuehrt ein invertiertes Gleichtaktsignal zur Referenzelektrode zurueck."},details:{en:"It lowers common-mode voltage and helps the amplifier stay inside its input range, but it must be current-limited for safety.",de:"Sie senkt die Gleichtaktspannung und hilft dem Verstaerker im Eingangsbereich zu bleiben, muss aber strombegrenzt sein."},electrotechnics:{en:"Related concept: negative feedback, common-mode voltage, loop stability, and current limiting.",de:"GET-Bezug: negative Rueckkopplung, Gleichtaktspannung, Schleifenstabilitaet und Strombegrenzung."}},{id:"protection",name:{en:"Input protection",de:"Eingangsschutz"},function:{en:"Limits fault currents and clamps overvoltage before sensitive amplifier inputs.",de:"Begrenzt Fehlerstroeme und klemmt Ueberspannungen vor empfindlichen Verstaerkereingaengen."},details:{en:"Protection resistors, diodes, and filters must protect electronics without adding too much noise or signal distortion.",de:"Schutzwiderstaende, Dioden und Filter muessen Elektronik schuetzen, ohne zu viel Rauschen oder Signalverzerrung einzufuegen."},electrotechnics:{en:"Related concept: Ohm law, current limiting, diode clipping, leakage current, and fault analysis.",de:"GET-Bezug: Ohmsches Gesetz, Strombegrenzung, Diodenbegrenzung, Ableitstrom und Fehlerfallanalyse."}},{id:"isolation",name:{en:"Isolation barrier",de:"Isolationsbarriere"},function:{en:"Separates patient-connected circuitry from power and communication circuits.",de:"Trennt patientennahe Schaltungen von Energieversorgung und Kommunikationsschaltungen."},details:{en:"Isolation reduces dangerous leakage paths and is essential when a patient is connected by conductive electrodes.",de:"Isolation reduziert gefaehrliche Ableitpfade und ist wesentlich, wenn ein Patient leitend ueber Elektroden verbunden ist."},electrotechnics:{en:"Related concept: galvanic isolation, capacitance across barriers, leakage current, creepage, and clearance.",de:"GET-Bezug: galvanische Trennung, Barrierekapazitaet, Ableitstrom, Kriechstrecke und Luftstrecke."}},{id:"amplifier",name:{en:"Instrumentation Amplifier",de:"Instrumentenverstaerker"},function:{en:"Amplifies the voltage difference between electrodes.",de:"Verstaerkt die Spannungsdifferenz zwischen Elektroden."},details:{en:"The ECG may be around 1 mV while common-mode interference can be much larger, so high input impedance and high CMRR are critical.",de:"Das EKG kann etwa 1 mV gross sein, waehrend Gleichtaktstoerungen viel groesser sein koennen; hohe Eingangsimpedanz und hoher CMRR sind entscheidend."},electrotechnics:{en:"Related concept: differential voltage, gain, input impedance, CMRR, saturation, and op-amp limitations.",de:"GET-Bezug: Differenzspannung, Verstaerkung, Eingangsimpedanz, CMRR, Saettigung und OPV-Grenzen."}},{id:"cmrr",name:{en:"Common-mode rejection",de:"Gleichtaktunterdrueckung"},function:{en:"Suppresses voltage that appears similarly on both measurement inputs.",de:"Unterdrueckt Spannung, die an beiden Messeingaengen aehnlich anliegt."},details:{en:"Imbalanced electrode impedances convert common-mode interference into differential error, so perfect rejection is impossible in practice.",de:"Unsymmetrische Elektrodenimpedanzen wandeln Gleichtaktstoerung in Differenzfehler um, daher ist perfekte Unterdrueckung praktisch unmoeglich."},electrotechnics:{en:"Related concept: superposition, differential/common-mode signals, bridge imbalance, and decibel ratios.",de:"GET-Bezug: Superposition, Differenz-/Gleichtaktsignale, Brueckenunsymmetrie und Dezibelverhaeltnisse."}},{id:"highpass",name:{en:"High-pass filter",de:"Hochpassfilter"},function:{en:"Reduces slow baseline drift from breathing, motion, or electrode polarization.",de:"Reduziert langsame Basisliniendrift durch Atmung, Bewegung oder Elektrodenpolarisation."},details:{en:"A cutoff chosen too high can distort ST segments and slow physiological information.",de:"Eine zu hohe Grenzfrequenz kann ST-Strecken und langsame physiologische Informationen verfaelschen."},electrotechnics:{en:"Related concept: RC time constant, cutoff frequency, phase shift, and transient settling.",de:"GET-Bezug: RC-Zeitkonstante, Grenzfrequenz, Phasenverschiebung und Einschwingen."}},{id:"lowpass",name:{en:"Low-pass filter",de:"Tiefpassfilter"},function:{en:"Reduces high-frequency muscle noise and electromagnetic interference.",de:"Reduziert hochfrequentes Muskelrauschen und elektromagnetische Stoerung."},details:{en:"A cutoff chosen too low can round QRS peaks and reduce timing accuracy.",de:"Eine zu niedrige Grenzfrequenz kann QRS-Zacken abrunden und die Zeitgenauigkeit verschlechtern."},electrotechnics:{en:"Related concept: frequency response, bandwidth, amplitude attenuation, and phase delay.",de:"GET-Bezug: Frequenzgang, Bandbreite, Amplitudendaempfung und Phasenverzoegerung."}},{id:"notch",name:{en:"50 Hz notch filter",de:"50-Hz-Kerbfilter"},function:{en:"Suppresses power-line interference around the mains frequency.",de:"Unterdrueckt Netzstoerung um die Netzfrequenz."},details:{en:"A notch helps readability but can ring or remove nearby useful spectral content if designed badly.",de:"Ein Kerbfilter verbessert Lesbarkeit, kann aber schwingen oder nahe Nutzanteile entfernen, wenn er schlecht ausgelegt ist."},electrotechnics:{en:"Related concept: resonant filter, quality factor, transfer function, and selective attenuation.",de:"GET-Bezug: Resonanzfilter, Guete, Uebertragungsfunktion und selektive Daempfung."}},{id:"adc",name:{en:"ADC",de:"ADC"},function:{en:"Converts the analog ECG into digital samples.",de:"Wandelt das analoge EKG in digitale Abtastwerte um."},details:{en:"The ADC must preserve QRS timing and amplitude while avoiding aliasing and quantization loss.",de:"Der ADC muss QRS-Zeitpunkt und Amplitude erhalten und gleichzeitig Aliasing und Quantisierungsverlust vermeiden."},electrotechnics:{en:"Related concept: sampling theorem, quantization, reference voltage, ADC resolution, and SNR.",de:"GET-Bezug: Abtasttheorem, Quantisierung, Referenzspannung, ADC-Aufloesung und SNR."}},{id:"processor",name:{en:"Signal processor",de:"Signalprozessor"},function:{en:"Detects R peaks, estimates heart rate, and prepares alarms or reports.",de:"Erkennt R-Zacken, schaetzt Herzfrequenz und bereitet Alarme oder Berichte vor."},details:{en:"Software must distinguish real arrhythmia from artifacts caused by movement, poor contact, or saturation.",de:"Software muss echte Arrhythmie von Artefakten durch Bewegung, schlechten Kontakt oder Saettigung unterscheiden."},electrotechnics:{en:"Related concept: digital filtering, thresholds, derivative methods, timing windows, and false positives.",de:"GET-/Signalbezug: digitale Filter, Schwellwerte, Ableitungsmethoden, Zeitfenster und Fehlalarme."}},{id:"screen",name:{en:"Display",de:"Anzeige"},function:{en:"Shows waveform, heart-rate estimate, and educational warnings.",de:"Zeigt Kurve, Herzfrequenzschaetzung und Lernhinweise an."},details:{en:"The display is the interface, not the measurement source.",de:"Die Anzeige ist die Schnittstelle, nicht die Messquelle."},electrotechnics:{en:"Connects measurement electronics to software, UI design, and alarm logic.",de:"Verbindet Messelektronik mit Software, Bedienoberflaeche und Alarmlogik."}},{id:"alarm",name:{en:"Alarm system",de:"Alarmsystem"},function:{en:"Warns when heart rate, signal quality, lead contact, or device status becomes unsafe.",de:"Warnt, wenn Herzfrequenz, Signalqualitaet, Elektrodenkontakt oder Geraetestatus unsicher werden."},details:{en:"Alarm logic needs thresholds, delays, priority levels, and artifact rejection so it does not alarm constantly.",de:"Alarmlogik braucht Schwellwerte, Verzoegerungen, Prioritaeten und Artefaktunterdrueckung, damit sie nicht dauernd alarmiert."},electrotechnics:{en:"Related concept: comparators, hysteresis, state machines, reliability, and fail-safe behavior.",de:"GET-/Systembezug: Komparatoren, Hysterese, Zustandsautomaten, Zuverlaessigkeit und Fail-Safe-Verhalten."}},{id:"power",name:{en:"Power supply",de:"Stromversorgung"},function:{en:"Provides stable isolated supply rails for analog, digital, and display electronics.",de:"Liefert stabile isolierte Versorgungsschienen fuer Analog-, Digital- und Anzeigeelektronik."},details:{en:"Ripple, grounding, battery state, and isolation affect both patient safety and signal noise.",de:"Ripple, Massefuehrung, Batteriezustand und Isolation beeinflussen Patientensicherheit und Signalrauschen."},electrotechnics:{en:"Related concept: rectification, regulation, ripple, grounding, isolation converters, and energy storage.",de:"GET-Bezug: Gleichrichtung, Regelung, Ripple, Massekonzept, isolierte Wandler und Energiespeicher."}}],demo:{title:{en:"Noisy ECG filtering",de:"EKG-Rauschfilterung"},beforeLabel:{en:"Raw noisy ECG",de:"Rohes verrauschtes EKG"},afterLabel:{en:"Filtered ECG",de:"Gefiltertes EKG"},explanation:{en:"The raw ECG contains baseline drift, muscle noise, and 50 Hz mains interference. Processing makes R peaks easier to detect, but every filter is a tradeoff: too much filtering can distort clinically meaningful waveform timing and amplitude.",de:"Das rohe EKG enthaelt Basisliniendrift, Muskelrauschen und 50-Hz-Netzstoerung. Verarbeitung macht R-Zacken leichter erkennbar, aber jeder Filter ist ein Kompromiss: zu starke Filterung kann klinisch relevante Zeitform und Amplitude verfaelschen."},filters:[{en:"Baseline correction",de:"Basislinienkorrektur"},{en:"Bandpass smoothing",de:"Bandpass-Glaettung"},{en:"Notch filter",de:"Kerbfilter"},{en:"R-peak detection",de:"R-Zacken-Erkennung"}],clipSteps:[{en:"Skin potential appears",de:"Hautpotential entsteht"},{en:"Electrode interface converts it",de:"Elektrodenuebergang wandelt es"},{en:"Protection and isolation limit current",de:"Schutz und Isolation begrenzen Strom"},{en:"Amplifier rejects common-mode noise",de:"Verstaerker unterdrueckt Gleichtakt"},{en:"Filters clean drift and 50 Hz noise",de:"Filter reinigen Drift und 50 Hz"},{en:"ADC and software detect R peaks",de:"ADC und Software erkennen R-Zacken"}]}},{id:"ct",name:{en:"CT Scanner",de:"CT-Scanner"},category:{en:"Tomographic Imaging",de:"Tomographische Bildgebung"},short:{en:"Rotating X-ray source and detector ring reconstruct slice images.",de:"Rotierende Roentgenquelle und Detektorring rekonstruieren Schnittbilder."},model:"ct",overview:{en:"A CT scanner collects many X-ray projections from different angles. Reconstruction software calculates slice images from those projections.",de:"Ein CT sammelt viele Roentgenprojektionen aus verschiedenen Winkeln. Rekonstruktionssoftware berechnet daraus Schnittbilder."},workflow:[{en:"The table positions the scanned object inside the gantry.",de:"Der Tisch positioniert das Objekt in der Gantry."},{en:"The tube and detector array rotate around the object.",de:"Roentgenroehre und Detektorarray rotieren um das Objekt."},{en:"Detector electronics convert radiation intensity into digital projection data.",de:"Detektorelektronik wandelt Strahlungsintensitaet in digitale Projektionsdaten um."},{en:"Reconstruction and windowing turn the data into readable slices.",de:"Rekonstruktion und Fensterung machen daraus lesbare Schnittbilder."}],deepDive:[{title:{en:"High-voltage generation",de:"Hochspannungserzeugung"},body:{en:"The tube needs tens to more than one hundred kilovolts. Power electronics rectify, switch, transform, and regulate that voltage while controlling tube current. kVp changes photon energy and penetration; mA and exposure time change photon count, noise, dose, and heat load.",de:"Die Roehre braucht mehrere zehn bis ueber hundert Kilovolt. Leistungselektronik richtet gleich, schaltet, transformiert und regelt diese Spannung und steuert den Roehrenstrom. kVp veraendert Photonenenergie und Durchdringung; mA und Belichtungszeit veraendern Photonenzahl, Rauschen, Dosis und Waermelast."}},{title:{en:"Projection signal chain",de:"Projektions-Signalkette"},body:{en:"Each detector element converts X-ray intensity into charge or current, often through scintillator light and photodiodes. The small signals are integrated, amplified, multiplexed, digitized, dark-corrected, gain-corrected, and logged against angle so reconstruction software can use consistent projection data.",de:"Jedes Detektorelement wandelt Roentgenintensitaet in Ladung oder Strom, oft ueber Szintillatorlicht und Photodioden. Die kleinen Signale werden integriert, verstaerkt, multiplexed, digitalisiert, dunkelstromkorrigiert, gain-korrigiert und dem Winkel zugeordnet, damit die Rekonstruktion konsistente Projektionsdaten bekommt."}},{title:{en:"Reconstruction and filtering",de:"Rekonstruktion und Filter"},body:{en:"The scanner measures attenuation from many angles. Filtered backprojection or iterative reconstruction estimates voxel values. Then kernels, denoising, metal artifact reduction, and window/level mapping make bone, soft tissue, or lung structures readable without pretending the raw detector data is already an image.",de:"Der Scanner misst Abschwaechung aus vielen Winkeln. Gefilterte Rueckprojektion oder iterative Rekonstruktion schaetzt Voxelwerte. Danach machen Faltungskerne, Rauschminderung, Metallartefaktreduktion und Fenster/Lage-Abbildung Knochen, Weichteil oder Lunge lesbar, ohne dass Rohdaten schon ein fertiges Bild waeren."}}],parts:[{id:"gantry",name:{en:"Gantry",de:"Gantry"},function:{en:"Holds the rotating imaging system.",de:"Traegt das rotierende Bildgebungssystem."},details:{en:"The large ring includes mechanics, tube, detector, cooling, and power paths.",de:"Der Ring enthaelt Mechanik, Roehre, Detektor, Kuehlung und Leistungswege."},electrotechnics:{en:"Slip rings transfer power and data to rotating electronics.",de:"Schleifringe uebertragen Leistung und Daten auf rotierende Elektronik."}},{id:"tube",name:{en:"X-ray Tube",de:"Roentgenroehre"},function:{en:"Produces X-rays using high voltage.",de:"Erzeugt Roentgenstrahlung mit Hochspannung."},details:{en:"Tube voltage affects penetration; current affects photon quantity and noise.",de:"Roehrenspannung beeinflusst Durchdringung; Strom beeinflusst Photonenmenge und Rauschen."},electrotechnics:{en:"Links to high-voltage generation, power electronics, heat, and insulation.",de:"Bezug zu Hochspannungserzeugung, Leistungselektronik, Waerme und Isolation."}},{id:"detectors",name:{en:"Detector Array",de:"Detektorarray"},function:{en:"Measures transmitted radiation.",de:"Misst die durchgelassene Strahlung."},details:{en:"Scintillators and photodiodes convert radiation into electrical signals.",de:"Szintillatoren und Photodioden wandeln Strahlung in elektrische Signale um."},electrotechnics:{en:"Photodiode current, amplification, ADCs, and noise are central concepts.",de:"Photodiodenstrom, Verstaerkung, ADCs und Rauschen sind zentrale Konzepte."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Moves precisely through the scan plane.",de:"Bewegt sich praezise durch die Scanebene."},details:{en:"Motion accuracy affects slice position and scan coverage.",de:"Bewegungsgenauigkeit beeinflusst Schichtposition und Scanbereich."},electrotechnics:{en:"Uses motor control, encoders, limit switches, and safety interlocks.",de:"Nutzt Motorregelung, Encoder, Endschalter und Sicherheitsverriegelungen."}},{id:"console",name:{en:"Operator Console",de:"Bedienkonsole"},function:{en:"Controls protocol and image review.",de:"Steuert Protokoll und Bildanzeige."},details:{en:"Operators choose acquisition settings and view reconstructed slices.",de:"Bedienende waehlen Aufnahmeparameter und betrachten rekonstruierte Schichten."},electrotechnics:{en:"Software coordinates timing, exposure control, and data transfer.",de:"Software koordiniert Timing, Belichtungssteuerung und Datenuebertragung."}}],demo:{title:{en:"CT reconstruction and windowing",de:"CT-Rekonstruktion und Fensterung"},beforeLabel:{en:"Low contrast slice",de:"Kontrastarmes Schnittbild"},afterLabel:{en:"Windowed slice",de:"Gefenstertes Schnittbild"},explanation:{en:"Windowing maps a useful intensity range into visible grayscale, making selected structures easier to see.",de:"Fensterung bildet einen nuetzlichen Intensitaetsbereich auf sichtbare Graustufen ab."},filters:[{en:"Reconstruction",de:"Rekonstruktion"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Window/level",de:"Fenster/Lage"}],clipSteps:[{en:"Tube rotates",de:"Roehre rotiert"},{en:"Detector measures",de:"Detektor misst"},{en:"Computer reconstructs",de:"Computer rekonstruiert"},{en:"Image is windowed",de:"Bild wird gefenstert"}]}},{id:"ultrasound",name:{en:"Ultrasound System",de:"Ultraschallsystem"},category:{en:"Acoustic Imaging",de:"Akustische Bildgebung"},short:{en:"Sends sound pulses and listens for echoes to build live images.",de:"Sendet Schallimpulse und erzeugt aus Echos Live-Bilder."},model:"ultrasound",overview:{en:"Ultrasound uses piezoelectric elements to send and receive high-frequency sound. Echo timing gives depth, and echo strength gives brightness.",de:"Ultraschall nutzt piezoelektrische Elemente zum Senden und Empfangen von Hochfrequenzschall. Echozeit ergibt Tiefe, Echostaerke ergibt Helligkeit."},workflow:[{en:"A voltage pulse excites piezoelectric crystals.",de:"Ein Spannungspuls regt piezoelektrische Kristalle an."},{en:"Sound travels into tissue and reflects at boundaries.",de:"Schall laeuft ins Gewebe und reflektiert an Grenzflaechen."},{en:"Returned echoes are amplified and time-measured.",de:"Rueckkehrende Echos werden verstaerkt und zeitlich gemessen."},{en:"Beamforming and filtering create the image.",de:"Beamforming und Filterung erzeugen das Bild."}],deepDive:[{title:{en:"Piezoelectric conversion",de:"Piezoelektrische Wandlung"},body:{en:"A pulser applies a short high-voltage pulse to piezo elements. Their crystal structure changes thickness and launches an acoustic pulse. Returning pressure waves deform the same elements and create small voltages, so the probe rapidly switches between transmit protection and low-noise receive electronics.",de:"Ein Pulser legt einen kurzen Hochspannungspuls an Piezoelemente. Ihre Kristallstruktur aendert die Dicke und sendet einen akustischen Puls aus. Zurueckkehrende Druckwellen verformen dieselben Elemente und erzeugen kleine Spannungen, daher schaltet die Sonde schnell zwischen Sendeschutz und rauscharmem Empfang um."}},{title:{en:"Depth and beamforming",de:"Tiefe und Beamforming"},body:{en:"Echo delay gives depth because sound speed in tissue is approximately known. Array probes steer and focus beams by delaying channels. On receive, the system aligns channel delays before summing, which increases signals from the focus and suppresses off-axis echoes.",de:"Die Echo-Laufzeit ergibt Tiefe, weil die Schallgeschwindigkeit im Gewebe ungefaehr bekannt ist. Array-Sonden lenken und fokussieren Strahlen durch Kanalverzoegerungen. Beim Empfang richtet das System die Kanalverzoegerungen vor der Summe aus, wodurch Signale aus dem Fokus staerker und seitliche Echos schwaecher werden."}},{title:{en:"Image cleanup",de:"Bildaufbereitung"},body:{en:"The raw echo data passes through time-gain compensation, bandpass filtering, envelope detection, log compression, speckle reduction, edge-preserving smoothing, and scan conversion. These steps turn echo amplitude into a readable B-mode image while preserving small structures.",de:"Die Roh-Echodaten laufen durch tiefenabhaengige Verstaerkung, Bandpassfilter, Huellkurvendetektion, Log-Kompression, Speckle-Reduktion, kantenerhaltende Glaettung und Scan-Konvertierung. So wird Echoamplitude zu einem lesbaren B-Mode-Bild, ohne kleine Strukturen zu stark zu verlieren."}}],parts:[{id:"probe",name:{en:"Probe Housing",de:"Sondengehaeuse"},function:{en:"Holds the transducer array and is handled by the user.",de:"Enthaelt das Wandlerarray und wird von der Person gefuehrt."},details:{en:"Probe shape controls imaging access and field of view.",de:"Sondenform beeinflusst Zugang und Sichtfeld."},electrotechnics:{en:"Cable shielding and impedance matching matter at high frequencies.",de:"Kabelschirmung und Impedanzanpassung sind bei hohen Frequenzen wichtig."}},{id:"crystals",name:{en:"Piezo Elements",de:"Piezoelemente"},function:{en:"Convert voltage into sound and returning sound into voltage.",de:"Wandeln Spannung in Schall und Echo-Schall in Spannung um."},details:{en:"The same element can transmit and receive.",de:"Dasselbe Element kann senden und empfangen."},electrotechnics:{en:"A piezo element behaves like an electromechanical resonator with capacitance.",de:"Ein Piezoelement verhaelt sich wie ein elektromechanischer Resonator mit Kapazitaet."}},{id:"beam",name:{en:"Ultrasound Beam",de:"Ultraschallstrahl"},function:{en:"Carries acoustic energy into the tissue.",de:"Transportiert akustische Energie ins Gewebe."},details:{en:"Focusing changes resolution and penetration.",de:"Fokussierung veraendert Aufloesung und Eindringtiefe."},electrotechnics:{en:"Beam steering uses phase delays between array elements.",de:"Strahllenkung nutzt Phasenverzoegerungen zwischen Array-Elementen."}},{id:"console",name:{en:"Console Electronics",de:"Konsolenelektronik"},function:{en:"Controls transmit pulses, receive gain, and processing.",de:"Steuert Sendepulse, Empfangsverstaerkung und Verarbeitung."},details:{en:"Gain, depth, focus, and dynamic range change the displayed image.",de:"Gain, Tiefe, Fokus und Dynamikbereich veraendern das Bild."},electrotechnics:{en:"Needs pulser circuits, low-noise amplifiers, ADCs, and digital beamforming.",de:"Braucht Pulser-Schaltungen, rauscharme Verstaerker, ADCs und digitales Beamforming."}},{id:"screen",name:{en:"Image Display",de:"Bildanzeige"},function:{en:"Shows B-mode, M-mode, or Doppler information.",de:"Zeigt B-Mode, M-Mode oder Dopplerinformationen."},details:{en:"The image is a processed map of echoes, not a photo.",de:"Das Bild ist eine verarbeitete Echokarte, kein Foto."},electrotechnics:{en:"Display pipeline includes frame memory, image mapping, and UI controls.",de:"Die Anzeige nutzt Bildspeicher, Bildabbildung und UI-Steuerung."}}],demo:{title:{en:"Speckle reduction",de:"Speckle-Reduktion"},beforeLabel:{en:"Speckled image",de:"Speckle-Bild"},afterLabel:{en:"Smoothed image",de:"Geglaettetes Bild"},explanation:{en:"Filtering can reduce speckle and improve readability, but too much smoothing hides small structures.",de:"Filterung kann Speckle reduzieren, aber zu starke Glaettung verdeckt kleine Strukturen."},filters:[{en:"Gain correction",de:"Gain-Korrektur"},{en:"Speckle smoothing",de:"Speckle-Glaettung"},{en:"Edge preserving",de:"Kantenerhalt"}],clipSteps:[{en:"Pulse sent",de:"Puls gesendet"},{en:"Echo returns",de:"Echo kommt zurueck"},{en:"Signal amplified",de:"Signal verstaerkt"},{en:"Image formed",de:"Bild entsteht"}]}},{id:"xray",name:{en:"X-ray System",de:"Roentgensystem"},category:{en:"Projection Imaging",de:"Projektionsbildgebung"},short:{en:"Projects X-rays through an object onto a digital detector.",de:"Projiziert Roentgenstrahlung durch ein Objekt auf einen digitalen Detektor."},model:"xray",overview:{en:"X-ray imaging creates a 2D projection. Dense material absorbs more radiation and changes detector intensity.",de:"Roentgenbildgebung erzeugt eine 2D-Projektion. Dichtes Material absorbiert mehr Strahlung und veraendert die Detektorintensitaet."},workflow:[{en:"High voltage accelerates electrons in the tube.",de:"Hochspannung beschleunigt Elektronen in der Roehre."},{en:"The anode converts electron energy into X-rays and heat.",de:"Die Anode wandelt Elektronenenergie in Roentgenstrahlung und Waerme um."},{en:"The collimator shapes the beam.",de:"Der Kollimator formt den Strahl."},{en:"The detector converts radiation into pixel data.",de:"Der Detektor wandelt Strahlung in Pixeldaten um."}],deepDive:[{title:{en:"Tube physics",de:"Roehrenphysik"},body:{en:"The cathode filament heats until electrons leave the metal. A high electric field accelerates them toward the anode. When electrons decelerate in the target, bremsstrahlung and characteristic X-rays are produced, but most energy becomes heat, so power timing and cooling are central design limits.",de:"Das Kathodenfilament heizt, bis Elektronen das Metall verlassen. Ein starkes elektrisches Feld beschleunigt sie zur Anode. Beim Abbremsen im Target entstehen Bremsstrahlung und charakteristische Roentgenstrahlung, aber der groesste Teil wird Waerme. Deshalb begrenzen Leistungstiming und Kuehlung das Design."}},{title:{en:"Detector readout",de:"Detektorauslesung"},body:{en:"Indirect flat panels convert X-rays to light in a scintillator and then to charge in photodiodes. Direct panels convert X-rays straight into charge. Pixel switches read rows into amplifiers and ADCs; offset correction, bad-pixel maps, gain calibration, and lag correction make the image stable.",de:"Indirekte Flachdetektoren wandeln Roentgenstrahlen im Szintillator in Licht und danach in Photodiodenladung. Direkte Detektoren wandeln direkt in Ladung. Pixelschalter lesen Zeilen in Verstaerker und ADCs; Offsetkorrektur, Bad-Pixel-Karten, Gain-Kalibrierung und Lag-Korrektur stabilisieren das Bild."}},{title:{en:"Contrast and noise",de:"Kontrast und Rauschen"},body:{en:"Collimation reduces unnecessary field size and scatter. Anti-scatter grids improve contrast but absorb useful photons too. Processing often applies flat-field correction, contrast stretching, noise-aware smoothing, and sharpening, always balancing visibility against dose and artifacts.",de:"Kollimation reduziert unnoetige Feldgroesse und Streustrahlung. Streustrahlenraster verbessern Kontrast, schlucken aber auch Nutzphotonen. Die Verarbeitung nutzt oft Flat-Field-Korrektur, Kontraststreckung, rauschbewusste Glaettung und Schaerfung, immer im Kompromiss zwischen Sichtbarkeit, Dosis und Artefakten."}}],parts:[{id:"cathode",name:{en:"Cathode",de:"Kathode"},function:{en:"Emits electrons by heating a filament.",de:"Emittiert Elektronen durch Erhitzen eines Filaments."},details:{en:"Tube current depends strongly on electron emission.",de:"Der Roehrenstrom haengt stark von der Elektronenemission ab."},electrotechnics:{en:"Links to thermionic emission, filament current, and high-voltage safety.",de:"Bezug zu Gluemission, Heizstrom und Hochspannungssicherheit."}},{id:"anode",name:{en:"Anode",de:"Anode"},function:{en:"Target hit by electrons to generate X-rays.",de:"Ziel, auf das Elektronen treffen und Roentgenstrahlung erzeugen."},details:{en:"Most energy becomes heat, so cooling is important.",de:"Der groesste Teil wird Waerme, daher ist Kuehlung wichtig."},electrotechnics:{en:"Power, heat load, and insulation are major engineering issues.",de:"Leistung, Waermelast und Isolation sind wichtige technische Themen."}},{id:"collimator",name:{en:"Collimator",de:"Kollimator"},function:{en:"Limits the beam area.",de:"Begrenzt die Strahlflaeche."},details:{en:"Good collimation reduces scatter and unnecessary exposure.",de:"Gute Kollimation reduziert Streustrahlung und unnoetige Exposition."},electrotechnics:{en:"Motorized shutters use position sensing and interlocks.",de:"Motorisierte Blenden nutzen Positionssensoren und Verriegelungen."}},{id:"detector",name:{en:"Detector Panel",de:"Detektorplatte"},function:{en:"Captures the X-ray projection.",de:"Erfasst die Roentgenprojektion."},details:{en:"Digital detectors use scintillators or direct conversion layers.",de:"Digitale Detektoren nutzen Szintillatoren oder direkte Wandlerschichten."},electrotechnics:{en:"Pixel electronics, charge readout, ADCs, and calibration are key topics.",de:"Pixelelektronik, Ladungsauslese, ADCs und Kalibrierung sind zentrale Themen."}},{id:"grid",name:{en:"Anti-scatter Grid",de:"Streustrahlenraster"},function:{en:"Reduces scattered radiation before the detector.",de:"Reduziert Streustrahlung vor dem Detektor."},details:{en:"Improves contrast but can require higher exposure.",de:"Verbessert Kontrast, kann aber hoehere Exposition benoetigen."},electrotechnics:{en:"Shows the tradeoff between signal strength, noise, and contrast.",de:"Zeigt den Kompromiss zwischen Signalstaerke, Rauschen und Kontrast."}}],demo:{title:{en:"Contrast enhancement",de:"Kontrastverstaerkung"},beforeLabel:{en:"Flat contrast",de:"Flacher Kontrast"},afterLabel:{en:"Enhanced contrast",de:"Verbesserter Kontrast"},explanation:{en:"Contrast stretching spreads useful gray values across the display range.",de:"Kontraststreckung verteilt nuetzliche Grauwerte ueber den Anzeigebereich."},filters:[{en:"Contrast stretch",de:"Kontraststreckung"},{en:"Sharpening",de:"Schaerfung"},{en:"Noise-aware smoothing",de:"Rauschbewusste Glaettung"}],clipSteps:[{en:"Tube emits X-rays",de:"Roehre sendet Strahlung"},{en:"Body attenuates beam",de:"Objekt schwaecht Strahl ab"},{en:"Detector captures pixels",de:"Detektor erfasst Pixel"},{en:"Contrast is enhanced",de:"Kontrast wird verbessert"}]}},{id:"mri",name:{en:"MRI Scanner",de:"MRT-Scanner"},category:{en:"Magnetic Resonance",de:"Magnetresonanz"},short:{en:"Uses magnets, gradients, and RF coils to form tissue-contrast images.",de:"Nutzt Magnet, Gradienten und HF-Spulen fuer kontrastreiche Bilder."},model:"mri",overview:{en:"MRI uses a strong magnetic field, RF pulses, and gradient fields to encode signals from hydrogen nuclei.",de:"MRT nutzt ein starkes Magnetfeld, HF-Pulse und Gradientenfelder, um Signale von Wasserstoffkernen zu codieren."},workflow:[{en:"Main magnet aligns spins.",de:"Hauptmagnet richtet Spins aus."},{en:"RF coil excites and receives signals.",de:"HF-Spule regt an und empfaengt Signale."},{en:"Gradient coils encode position.",de:"Gradientenspulen codieren Position."},{en:"Computer reconstructs contrast images.",de:"Computer rekonstruiert Kontrastbilder."}],deepDive:[{title:{en:"Main magnetic field",de:"Hauptmagnetfeld"},body:{en:"When the patient enters the bore, hydrogen nuclei in water and fat see a strong static B0 field. Their magnetic moments do not all point perfectly with the field, but a small net magnetization builds along B0. The Larmor frequency is proportional to field strength, so the scanner knows what RF frequency can tip that magnetization into the transverse plane.",de:"Wenn die Person in die Roehre faehrt, sehen Wasserstoffkerne in Wasser und Fett ein starkes statisches B0-Feld. Die magnetischen Momente zeigen nicht alle perfekt in Feldrichtung, aber eine kleine Nettomagnetisierung baut sich entlang B0 auf. Die Larmorfrequenz ist proportional zur Feldstaerke, daher weiss der Scanner, welche HF-Frequenz die Magnetisierung kippen kann."}},{title:{en:"RF pulse and received signal",de:"HF-Puls und Empfangssignal"},body:{en:"The RF coil sends a short magnetic B1 pulse at the Larmor frequency. This deposits energy into the spin system and tips the net magnetization. After the pulse stops, the precessing magnetization induces a tiny voltage in the receive coil by Faraday induction. That analog voltage is amplified, filtered, digitized, and stored as k-space samples.",de:"Die HF-Spule sendet einen kurzen magnetischen B1-Puls bei der Larmorfrequenz. Dadurch wird Energie in das Spinsystem eingebracht und die Nettomagnetisierung gekippt. Nach dem Puls induziert die praezessierende Magnetisierung durch Faraday-Induktion eine kleine Spannung in der Empfangsspule. Diese analoge Spannung wird verstaerkt, gefiltert, digitalisiert und als k-Raum-Daten gespeichert."}},{title:{en:"Gradients and image formation",de:"Gradienten und Bildentstehung"},body:{en:"Gradient coils add controlled magnetic-field slopes on x, y, and z. A slice-select gradient makes only one slice resonate with the RF pulse, phase encoding gives rows different phase shifts, and frequency encoding makes position change the received frequency. Reconstruction uses a Fourier transform, then image filters, coil combination, intensity correction, and noise reduction improve readability.",de:"Gradientenspulen addieren kontrollierte Magnetfeldsteigungen in x, y und z. Ein Schichtselektionsgradient laesst nur eine Schicht mit dem HF-Puls resonieren, Phasencodierung gibt Zeilen verschiedene Phasenlagen, und Frequenzcodierung macht die Position zur Empfangsfrequenz. Die Rekonstruktion nutzt eine Fourier-Transformation; danach verbessern Spulenkombination, Intensitaetskorrektur und Rauschminderung die Lesbarkeit."}},{title:{en:"Why it is loud and safety-critical",de:"Warum es laut und sicherheitskritisch ist"},body:{en:"Gradient coils carry high current and switch quickly inside the main field. Lorentz forces make the coil structure vibrate, which creates the knocking sound. Electrical design must manage inductance, voltage drive, cooling, eddy currents, RF heating, implant safety, quench behavior, and emergency stops.",de:"Gradientenspulen fuehren hohe Stroeme und schalten schnell im Hauptfeld. Lorentzkraefte versetzen die Spulenstruktur in Schwingung, wodurch das Klopfgeraeusch entsteht. Die Elektrotechnik muss Induktivitaet, Treiberspannung, Kuehlung, Wirbelstroeme, HF-Erwaermung, Implantatsicherheit, Quench-Verhalten und Not-Aus beherrschen."}}],parts:[{id:"bore",name:{en:"Magnet Bore",de:"Magnetoeffnung"},function:{en:"Contains the strong main magnetic field.",de:"Enthaelt das starke Hauptmagnetfeld."},details:{en:"Homogeneity affects image quality.",de:"Homogenitaet beeinflusst die Bildqualitaet."},electrotechnics:{en:"Superconducting magnets, cryogenics, and shielding are core ideas.",de:"Supraleitende Magnete, Kryotechnik und Abschirmung sind Kernideen."}},{id:"rfcoil",name:{en:"RF Coil",de:"HF-Spule"},function:{en:"Transmits and receives radio-frequency signals.",de:"Sendet und empfaengt Hochfrequenzsignale."},details:{en:"Coil position affects sensitivity.",de:"Spulenposition beeinflusst Empfindlichkeit."},electrotechnics:{en:"Resonance, impedance matching, and low-noise reception are important.",de:"Resonanz, Impedanzanpassung und rauscharmer Empfang sind wichtig."}},{id:"gradients",name:{en:"Gradient Coils",de:"Gradientenspulen"},function:{en:"Encode spatial position.",de:"Codieren raeumliche Position."},details:{en:"Rapid switching causes acoustic noise and heating.",de:"Schnelles Schalten erzeugt Geraeusche und Waerme."},electrotechnics:{en:"High-current drivers, inductance, and switching transients matter.",de:"Hochstromtreiber, Induktivitaet und Schalttransienten sind wichtig."}},{id:"table",name:{en:"Patient Table",de:"Patiententisch"},function:{en:"Positions the scanned object.",de:"Positioniert das Untersuchungsobjekt."},details:{en:"Accurate positioning improves coverage.",de:"Genaue Positionierung verbessert die Abdeckung."},electrotechnics:{en:"Motor control and safety interlocks protect motion.",de:"Motorsteuerung und Sicherheitsverriegelungen schuetzen die Bewegung."}}],demo:{title:{en:"Tissue contrast selection",de:"Gewebekontrast-Auswahl"},beforeLabel:{en:"Low contrast",de:"Niedriger Kontrast"},afterLabel:{en:"T2-like contrast",de:"T2-aehnlicher Kontrast"},explanation:{en:"Different sequences emphasize different tissue properties.",de:"Verschiedene Sequenzen betonen verschiedene Gewebeeigenschaften."},filters:[{en:"Intensity mapping",de:"Intensitaetsabbildung"},{en:"Noise reduction",de:"Rauschminderung"},{en:"Contrast preset",de:"Kontrastpreset"}],clipSteps:[{en:"Magnet aligns spins",de:"Magnet richtet Spins aus"},{en:"RF pulse excites",de:"HF-Puls regt an"},{en:"Signal decays",de:"Signal klingt ab"},{en:"Image reconstructed",de:"Bild rekonstruiert"}]}},{id:"pump",name:{en:"Infusion Pump",de:"Infusionspumpe"},category:{en:"Therapy Device",de:"Therapiegeraet"},short:{en:"Controls fluid delivery with motor drive, sensors, alarms, and software.",de:"Steuert Fluessigkeitsabgabe mit Motor, Sensoren, Alarmen und Software."},model:"pump",overview:{en:"An infusion pump is a control system. It compares target delivery with sensor feedback and reacts to pressure, battery, door, and line problems.",de:"Eine Infusionspumpe ist ein Regelsystem. Sie vergleicht Zielabgabe mit Sensorfeedback und reagiert auf Druck, Akku, Tuer und Leitungsprobleme."},workflow:[{en:"User sets rate and volume.",de:"Nutzer stellt Rate und Volumen ein."},{en:"Motor moves the pump mechanism.",de:"Motor bewegt den Pumpmechanismus."},{en:"Pressure and door sensors check safety.",de:"Druck- und Tuersensoren pruefen Sicherheit."},{en:"Controller triggers alarms when limits are exceeded.",de:"Controller loest Alarme bei Grenzwertueberschreitung aus."}],deepDive:[{title:{en:"Motor and flow control",de:"Motor- und Flussregelung"},body:{en:"The pump is a closed-loop embedded system. A stepper or DC motor driver moves a peristaltic mechanism or cassette. Firmware converts the prescribed ml/h into motor steps, monitors current and position, and compensates for mechanical tolerance, battery voltage, and line resistance.",de:"Die Pumpe ist ein geschlossenes Embedded-Regelsystem. Ein Schritt- oder DC-Motortreiber bewegt Peristaltik oder Kassette. Firmware wandelt ml/h in Motorschritte um, ueberwacht Strom und Position und kompensiert mechanische Toleranz, Akkuspannung und Leitungswiderstand."}},{title:{en:"Pressure sensing",de:"Druckmessung"},body:{en:"Occlusion detection often uses a strain gauge or piezoresistive bridge. The bridge signal is tiny and temperature-sensitive, so it needs excitation stability, instrumentation amplification, ADC conversion, calibration, filtering, and threshold logic before an alarm is trustworthy.",de:"Okklusionserkennung nutzt oft Dehnungsmessstreifen oder piezoresistive Bruecken. Das Brueckensignal ist klein und temperaturabhaengig, daher braucht es stabile Speisung, Instrumentenverstaerkung, ADC-Wandlung, Kalibrierung, Filterung und Schwellwertlogik, bevor ein Alarm verlaesslich ist."}},{title:{en:"Safety logic",de:"Sicherheitslogik"},body:{en:"The controller cross-checks door state, air-in-line sensors, pressure trend, battery state, motor current, and user settings. Good design separates normal control from alarm decisions and fails into a safe state when sensor readings disagree.",de:"Der Controller prueft Tuerzustand, Luft-in-Leitung-Sensoren, Drucktrend, Akkuzustand, Motorstrom und Nutzereinstellungen gegeneinander. Gutes Design trennt normale Regelung von Alarmentscheidungen und geht in einen sicheren Zustand, wenn Sensordaten widerspruechlich sind."}}],parts:[{id:"screen",name:{en:"Display/UI",de:"Anzeige/UI"},function:{en:"Shows rate, volume, battery, and alarms.",de:"Zeigt Rate, Volumen, Akku und Alarme."},details:{en:"Good UI reduces setup mistakes.",de:"Gute UI reduziert Einstellfehler."},electrotechnics:{en:"Links embedded systems to human-machine interface design.",de:"Verbindet Embedded Systems mit Mensch-Maschine-Schnittstellen."}},{id:"cassette",name:{en:"Cassette Path",de:"Kassettenpfad"},function:{en:"Guides the fluid tube through the pump.",de:"Fuehrt den Schlauch durch die Pumpe."},details:{en:"Mechanical fit affects flow accuracy.",de:"Mechanischer Sitz beeinflusst Dosiergenauigkeit."},electrotechnics:{en:"Door switches and optical sensors can confirm correct loading.",de:"Tuerschalter und optische Sensoren koennen korrektes Einlegen bestaetigen."}},{id:"motor",name:{en:"Drive Motor",de:"Antriebsmotor"},function:{en:"Creates controlled pumping motion.",de:"Erzeugt kontrollierte Pumpbewegung."},details:{en:"Stepper or DC motor control decides flow stability.",de:"Schritt- oder DC-Motorsteuerung bestimmt die Flussstabilitaet."},electrotechnics:{en:"PWM, motor drivers, feedback, and current sensing are useful here.",de:"PWM, Motortreiber, Feedback und Strommessung sind hier nuetzlich."}},{id:"pressure",name:{en:"Pressure Sensor",de:"Drucksensor"},function:{en:"Detects occlusion or blocked flow.",de:"Erkennt Okklusion oder blockierten Fluss."},details:{en:"Rising pressure can indicate a blocked line.",de:"Steigender Druck kann eine blockierte Leitung anzeigen."},electrotechnics:{en:"Often uses bridge sensors, ADCs, calibration, and thresholds.",de:"Oft mit Brueckensensoren, ADCs, Kalibrierung und Schwellwerten."}}],demo:{title:{en:"Flow-rate monitoring",de:"Flussraten-Ueberwachung"},beforeLabel:{en:"Unstable flow",de:"Instabiler Fluss"},afterLabel:{en:"Controlled flow",de:"Kontrollierter Fluss"},explanation:{en:"Control systems compare target and measured values, then correct motor action or trigger alarms.",de:"Regelsysteme vergleichen Soll- und Messwerte, korrigieren den Motor oder loesen Alarme aus."},filters:[{en:"Moving average",de:"Gleitender Mittelwert"},{en:"Threshold alarm",de:"Schwellwertalarm"},{en:"Trend check",de:"Trendpruefung"}],clipSteps:[{en:"Rate selected",de:"Rate gewaehlt"},{en:"Motor turns",de:"Motor dreht"},{en:"Pressure checked",de:"Druck geprueft"},{en:"Alarm if blocked",de:"Alarm bei Blockade"}]}},{id:"ventilator",name:{en:"Ventilator",de:"Beatmungsgeraet"},category:{en:"Respiratory Therapy",de:"Atemtherapie"},short:{en:"Controls pressure, flow, oxygen mix, and alarms during assisted breathing.",de:"Regelt Druck, Fluss, Sauerstoffmischung und Alarme bei assistierter Atmung."},model:"ventilator",overview:{en:"A ventilator is a sensor-rich control system. It drives gas flow, measures airway pressure and volume, synchronizes with patient effort, and uses alarms to avoid unsafe pressure, disconnection, or blocked tubing.",de:"Ein Beatmungsgeraet ist ein sensorreiches Regelsystem. Es treibt Gasfluss an, misst Atemwegsdruck und Volumen, synchronisiert sich mit Patientenbemuehung und nutzt Alarme gegen unsicheren Druck, Diskonnektion oder blockierte Schlaeuche."},workflow:[{en:"A blower or valves create controlled inspiratory flow.",de:"Geblaese oder Ventile erzeugen kontrollierten Inspirationsfluss."},{en:"Pressure and flow sensors measure the breathing circuit.",de:"Druck- und Flusssensoren messen den Atemkreis."},{en:"Firmware compares measured pressure/volume with the selected mode.",de:"Firmware vergleicht Druck/Volumen mit dem gewaehlten Modus."},{en:"Filters, alarms, and valves keep delivered gas safer and readable.",de:"Filter, Alarme und Ventile halten das abgegebene Gas sicherer und messbar."}],deepDive:[{title:{en:"Pressure and flow sensing",de:"Druck- und Flussmessung"},body:{en:"Airway pressure is often measured with piezoresistive pressure sensors, while flow may be measured from a pressure drop across a known restriction or by hot-wire methods. The electronics need bridge excitation, instrumentation amplification, ADC sampling, offset correction, leak compensation, and digital filtering.",de:"Atemwegsdruck wird oft mit piezoresistiven Drucksensoren gemessen; Fluss kann aus dem Druckabfall ueber einer bekannten Drossel oder thermisch gemessen werden. Die Elektronik braucht Brueckenspeisung, Instrumentenverstaerkung, ADC-Abtastung, Offsetkorrektur, Leckkompensation und digitale Filterung."}},{title:{en:"Control loop",de:"Regelkreis"},body:{en:"The controller drives valves or a blower so pressure, volume, or flow follows the selected ventilation mode. PID-like control, trigger detection, rise-time shaping, and safety limits are important because the patient and tubing form a changing pneumatic load.",de:"Der Controller steuert Ventile oder Geblaese, damit Druck, Volumen oder Fluss dem gewaehlten Beatmungsmodus folgen. PID-aehnliche Regelung, Triggererkennung, Anstiegszeitformung und Sicherheitsgrenzen sind wichtig, weil Patient und Schlauchsystem eine veraenderliche pneumatische Last bilden."}},{title:{en:"Signal cleanup and alarms",de:"Signalaufbereitung und Alarme"},body:{en:"Breathing signals are filtered to reduce sensor noise while preserving fast pressure rises and patient-trigger events. Alarm logic checks high pressure, low pressure, apnea, low volume, oxygen concentration, power, and sensor plausibility.",de:"Atemsignale werden gefiltert, um Sensorrauschen zu reduzieren und schnelle Druckanstiege sowie Patiententrigger zu erhalten. Alarmsoftware prueft Hochdruck, Niederdruck, Apnoe, niedriges Volumen, Sauerstoffkonzentration, Versorgung und Sensorplausibilitaet."}}],parts:[{id:"screen",name:{en:"Control Screen",de:"Bedienanzeige"},function:{en:"Shows mode, pressure, volume, flow, oxygen, and alarms.",de:"Zeigt Modus, Druck, Volumen, Fluss, Sauerstoff und Alarme."},details:{en:"Waveforms help clinicians see leaks, obstruction, and synchrony.",de:"Kurven helfen, Lecks, Obstruktion und Synchronie zu erkennen."},electrotechnics:{en:"Embedded UI, alarm state machines, and sampled waveform rendering meet here.",de:"Embedded-UI, Alarmzustandsautomaten und abgetastete Kurvendarstellung treffen hier zusammen."}},{id:"blower",name:{en:"Blower/Valve Block",de:"Geblaese/Ventilblock"},function:{en:"Creates and meters gas flow.",de:"Erzeugt und dosiert Gasfluss."},details:{en:"Fast valve response affects pressure control and comfort.",de:"Schnelle Ventilantwort beeinflusst Druckregelung und Komfort."},electrotechnics:{en:"Uses motor drivers, solenoids, PWM, current sensing, and protection circuits.",de:"Nutzt Motortreiber, Magnetventile, PWM, Strommessung und Schutzschaltungen."}},{id:"sensors",name:{en:"Pressure/Flow Sensors",de:"Druck-/Flusssensoren"},function:{en:"Measure delivered breathing mechanics.",de:"Messen die abgegebene Atemmechanik."},details:{en:"Sensor drift or condensation can corrupt control.",de:"Sensordrift oder Kondensation kann die Regelung stoeren."},electrotechnics:{en:"Bridge sensors, ADCs, calibration, low-pass filtering, and plausibility checks are central.",de:"Brueckensensoren, ADCs, Kalibrierung, Tiefpassfilter und Plausibilitaetspruefung sind zentral."}},{id:"tubing",name:{en:"Breathing Circuit",de:"Atemkreis"},function:{en:"Carries gas to and from the patient interface.",de:"Fuehrt Gas zur und von der Patientenschnittstelle."},details:{en:"Compliance, leaks, and resistance change measured pressure and volume.",de:"Compliance, Lecks und Widerstand veraendern gemessenen Druck und Volumen."},electrotechnics:{en:"Control software must interpret sensor signals through this pneumatic load.",de:"Regelsoftware muss Sensorsignale durch diese pneumatische Last interpretieren."}}],demo:{title:{en:"Pressure waveform stabilization",de:"Druckkurven-Stabilisierung"},beforeLabel:{en:"Noisy pressure/flow",de:"Verrauschter Druck/Fluss"},afterLabel:{en:"Controlled breath cycle",de:"Geregelter Atemzyklus"},explanation:{en:"Filtering and control make pressure and flow readable, but alarms must still react quickly to dangerous changes.",de:"Filterung und Regelung machen Druck und Fluss lesbar, Alarme muessen aber weiter schnell auf gefaehrliche Aenderungen reagieren."},filters:[{en:"Low-pass filter",de:"Tiefpassfilter"},{en:"Leak compensation",de:"Leckkompensation"},{en:"Alarm thresholds",de:"Alarmschwellen"}],clipSteps:[{en:"Mode selected",de:"Modus gewaehlt"},{en:"Blower drives flow",de:"Geblaese treibt Fluss"},{en:"Sensors measure",de:"Sensoren messen"},{en:"Controller adapts",de:"Controller passt an"}]}},{id:"defib",name:{en:"Defibrillator",de:"Defibrillator"},category:{en:"Emergency Therapy",de:"Notfalltherapie"},short:{en:"Charges a high-energy capacitor, analyzes ECG, and delivers a controlled shock path.",de:"Laedt einen Hochenergie-Kondensator, analysiert EKG und gibt einen kontrollierten Schockpfad ab."},model:"defib",overview:{en:"A defibrillator combines ECG acquisition with high-voltage energy delivery. Its design must separate sensitive measurement electronics from the shock circuit while keeping timing, isolation, and user safety reliable.",de:"Ein Defibrillator kombiniert EKG-Erfassung mit Hochspannungs-Energieabgabe. Das Design muss empfindliche Messelektronik vom Schockkreis trennen und Timing, Isolation und Anwendersicherheit verlaesslich halten."},workflow:[{en:"Pads sense ECG and provide a shock path.",de:"Pads messen EKG und bilden den Schockpfad."},{en:"An isolated front end filters the ECG for rhythm analysis.",de:"Eine isolierte Eingangsstufe filtert das EKG fuer Rhythmusanalyse."},{en:"A charger stores energy in a capacitor bank.",de:"Ein Ladegeraet speichert Energie in einer Kondensatorbank."},{en:"Switching electronics deliver a shaped biphasic waveform.",de:"Schaltelektronik liefert eine geformte biphasische Kurve."}],deepDive:[{title:{en:"Energy storage",de:"Energiespeicherung"},body:{en:"The charger raises battery voltage to a much higher capacitor voltage. Stored energy follows E = 1/2 C V^2, so voltage measurement, bleeder resistors, insulation, discharge switches, and interlocks are major safety topics.",de:"Das Ladegeraet hebt die Akkuspannung auf eine viel hoehere Kondensatorspannung. Gespeicherte Energie folgt E = 1/2 C V^2, daher sind Spannungsmessung, Entladewiderstaende, Isolation, Entladeschalter und Verriegelungen wichtige Sicherheitsthemen."}},{title:{en:"ECG analysis front end",de:"EKG-Analyse-Eingang"},body:{en:"The ECG path needs high input impedance, patient isolation, defibrillation protection, CMRR, baseline recovery, and filters. Rhythm algorithms depend on clean enough QRS timing while avoiding false confidence from motion, poor pad contact, or shock recovery artifacts.",de:"Der EKG-Pfad braucht hohe Eingangsimpedanz, Patientenisolation, Defibrillationsschutz, CMRR, Baseline-Rueckkehr und Filter. Rhythmusalgorithmen brauchen ausreichend sauberes QRS-Timing und muessen Bewegungen, schlechten Padkontakt und Artefakte nach Schock vermeiden."}},{title:{en:"Shock waveform",de:"Schockkurve"},body:{en:"Modern devices often shape a biphasic pulse through controlled switching. The delivered current depends on patient impedance, so the device measures or estimates impedance and supervises energy delivery, timing, and abort conditions.",de:"Moderne Geraete formen oft einen biphasischen Puls durch kontrolliertes Schalten. Der abgegebene Strom haengt von Patientenimpedanz ab, daher misst oder schaetzt das Geraet die Impedanz und ueberwacht Energieabgabe, Timing und Abbruchbedingungen."}}],parts:[{id:"screen",name:{en:"ECG/Status Display",de:"EKG-/Statusanzeige"},function:{en:"Shows rhythm, charge state, prompts, and alarms.",de:"Zeigt Rhythmus, Ladezustand, Hinweise und Alarme."},details:{en:"Emergency UI must be readable under stress.",de:"Notfall-UI muss unter Stress lesbar sein."},electrotechnics:{en:"Display logic is tied to battery, charger, ECG, and safety states.",de:"Anzeigelogik ist mit Akku, Ladegeraet, EKG und Sicherheitszustaenden verbunden."}},{id:"capacitor",name:{en:"Capacitor Bank",de:"Kondensatorbank"},function:{en:"Stores shock energy.",de:"Speichert Schockenergie."},details:{en:"Voltage accuracy and insulation are critical.",de:"Spannungsgenauigkeit und Isolation sind kritisch."},electrotechnics:{en:"Capacitance, high-voltage charging, leakage, bleeders, and switching devices matter.",de:"Kapazitaet, Hochspannungsladung, Leckstrom, Entladewiderstaende und Schalter sind wichtig."}},{id:"pads",name:{en:"Pads/Paddles",de:"Pads/Paddles"},function:{en:"Couple ECG and therapy current to the body.",de:"Koppeln EKG und Therapiestrom an den Koerper."},details:{en:"Contact impedance affects analysis and delivered current.",de:"Kontaktimpedanz beeinflusst Analyse und abgegebenen Strom."},electrotechnics:{en:"Electrode impedance, patient isolation, and discharge path design meet here.",de:"Elektrodenimpedanz, Patientenisolation und Entladepfad treffen hier zusammen."}},{id:"charger",name:{en:"HV Charger",de:"HV-Ladegeraet"},function:{en:"Raises battery voltage to therapy voltage.",de:"Hebt Akkuspannung auf Therapiespannung."},details:{en:"Must charge quickly but safely.",de:"Muss schnell und sicher laden."},electrotechnics:{en:"Flyback converters, voltage feedback, current limits, and insulation are key.",de:"Flyback-Wandler, Spannungsfeedback, Stromgrenzen und Isolation sind zentral."}}],demo:{title:{en:"ECG decision and shock path",de:"EKG-Entscheidung und Schockpfad"},beforeLabel:{en:"Noisy rhythm",de:"Verrauschter Rhythmus"},afterLabel:{en:"Detected QRS/shock ready",de:"Erkanntes QRS/schockbereit"},explanation:{en:"The same pads can support sensing and therapy, but measurement protection and high-voltage switching must be carefully separated.",de:"Dieselben Pads koennen Messung und Therapie unterstuetzen, aber Messschutz und Hochspannungsschaltung muessen sauber getrennt sein."},filters:[{en:"ECG bandpass",de:"EKG-Bandpass"},{en:"Artifact rejection",de:"Artefaktunterdrueckung"},{en:"Impedance check",de:"Impedanzpruefung"}],clipSteps:[{en:"Pads attached",de:"Pads befestigt"},{en:"ECG analyzed",de:"EKG analysiert"},{en:"Capacitor charges",de:"Kondensator laedt"},{en:"Pulse delivered",de:"Puls abgegeben"}]}},{id:"dialysis",name:{en:"Hemodialysis Machine",de:"Haemodialysegeraet"},category:{en:"Extracorporeal Therapy",de:"Extrakorporale Therapie"},short:{en:"Controls blood flow, dialysate chemistry, pressure, conductivity, and safety alarms.",de:"Regelt Blutfluss, Dialysatchemie, Druck, Leitfaehigkeit und Sicherheitsalarme."},model:"dialysis",overview:{en:"A dialysis machine is a fluidic, electrical, and safety-control system. It pumps blood through a dialyzer while controlling dialysate concentration, temperature, pressures, ultrafiltration, and air/blood leak alarms.",de:"Ein Dialysegeraet ist ein fluidisches, elektrisches und sicherheitskritisches Regelsystem. Es pumpt Blut durch einen Dialysator und regelt Dialysatkonzentration, Temperatur, Druck, Ultrafiltration sowie Luft- und Blutleckalarme."},workflow:[{en:"Blood pump moves blood through the extracorporeal circuit.",de:"Die Blutpumpe bewegt Blut durch den extrakorporalen Kreis."},{en:"Dialysate flows on the other side of a semipermeable membrane.",de:"Dialysat fliesst auf der anderen Seite einer semipermeablen Membran."},{en:"Sensors monitor pressure, conductivity, temperature, and air.",de:"Sensoren ueberwachen Druck, Leitfaehigkeit, Temperatur und Luft."},{en:"Control logic stops flow or clamps lines during unsafe states.",de:"Regellogik stoppt Fluss oder klemmt Leitungen bei unsicheren Zustaenden."}],deepDive:[{title:{en:"Pumps and pressure",de:"Pumpen und Druck"},body:{en:"Roller pumps create flow while arterial and venous pressure sensors monitor access problems, clotting, kinks, or disconnection. The sensor chain needs amplification, ADC conversion, calibration, trend filtering, and alarm thresholds.",de:"Rollenpumpen erzeugen Fluss, waehrend arterielle und venoese Drucksensoren Zugangsprobleme, Gerinnung, Knicke oder Diskonnektion ueberwachen. Die Sensorkette braucht Verstaerkung, ADC-Wandlung, Kalibrierung, Trendfilterung und Alarmschwellen."}},{title:{en:"Conductivity and temperature",de:"Leitfaehigkeit und Temperatur"},body:{en:"Dialysate conductivity estimates ionic concentration, so electrodes or conductivity cells are measured with AC excitation to reduce polarization. Temperature sensors and heaters are controlled tightly because chemistry and patient comfort depend on stable dialysate.",de:"Dialysatleitfaehigkeit schaetzt Ionenkonzentration, daher werden Elektroden oder Leitfaehigkeitszellen mit AC-Anregung gemessen, um Polarisation zu reduzieren. Temperatursensoren und Heizer werden eng geregelt, weil Chemie und Komfort stabiles Dialysat brauchen."}},{title:{en:"Membrane exchange",de:"Membranaustausch"},body:{en:"The dialyzer membrane lets small solutes and water move while keeping cells and larger proteins in the blood path. Electronics do not measure every molecule directly; they control pressures, flow, conductivity, temperature, and time so the physical exchange stays within target bounds.",de:"Die Dialysatormembran laesst kleine geloeste Stoffe und Wasser passieren und haelt Zellen sowie groessere Proteine im Blutpfad. Die Elektronik misst nicht jedes Molekuel direkt; sie regelt Druck, Fluss, Leitfaehigkeit, Temperatur und Zeit, damit der physikalische Austausch im Zielbereich bleibt."}}],parts:[{id:"screen",name:{en:"Therapy Screen",de:"Therapieanzeige"},function:{en:"Shows flow, pressure, conductivity, time, and alarms.",de:"Zeigt Fluss, Druck, Leitfaehigkeit, Zeit und Alarme."},details:{en:"Therapy setup and alarm response depend on readable values.",de:"Therapieeinstellung und Alarmreaktion haengen von lesbaren Werten ab."},electrotechnics:{en:"Embedded monitoring integrates sensors, state machines, and UI.",de:"Embedded-Monitoring verbindet Sensoren, Zustandsautomaten und UI."}},{id:"pump",name:{en:"Blood Pump",de:"Blutpumpe"},function:{en:"Moves blood through tubing.",de:"Bewegt Blut durch Schlaeuche."},details:{en:"Roller speed determines flow estimate.",de:"Rollendrehzahl bestimmt die Flussschaetzung."},electrotechnics:{en:"Motor control, encoders, current sensing, and door interlocks are used.",de:"Motorregelung, Encoder, Strommessung und Tuerverriegelungen werden genutzt."}},{id:"dialyzer",name:{en:"Dialyzer Cartridge",de:"Dialysator"},function:{en:"Exchanges solutes and water across a membrane.",de:"Tauscht geloeste Stoffe und Wasser ueber eine Membran aus."},details:{en:"Flow direction and pressure gradient affect exchange.",de:"Flussrichtung und Druckgradient beeinflussen den Austausch."},electrotechnics:{en:"Controlled by pump timing, pressure sensors, and ultrafiltration feedback.",de:"Gesteuert ueber Pumpentiming, Drucksensoren und Ultrafiltrationsfeedback."}},{id:"sensors",name:{en:"Safety Sensors",de:"Sicherheitssensoren"},function:{en:"Watch pressure, air, blood leak, temperature, and conductivity.",de:"Ueberwachen Druck, Luft, Blutleck, Temperatur und Leitfaehigkeit."},details:{en:"Sensor disagreement must stop therapy safely.",de:"Sensorwiderspruch muss die Therapie sicher stoppen."},electrotechnics:{en:"ADC channels, excitation circuits, optical sensing, and plausibility logic are central.",de:"ADC-Kanaele, Anregeschaltungen, optische Sensorik und Plausibilitaetslogik sind zentral."}}],demo:{title:{en:"Pressure and conductivity monitoring",de:"Druck- und Leitfaehigkeitsueberwachung"},beforeLabel:{en:"Unstable sensor trend",de:"Instabiler Sensortrend"},afterLabel:{en:"Stable therapy window",de:"Stabiles Therapiefenster"},explanation:{en:"Dialysis safety depends on trends and thresholds across multiple sensors, not one single measurement.",de:"Dialysesicherheit haengt von Trends und Schwellwerten mehrerer Sensoren ab, nicht von einer Einzelmessung."},filters:[{en:"Trend filter",de:"Trendfilter"},{en:"Conductivity check",de:"Leitfaehigkeitspruefung"},{en:"Pressure alarm",de:"Druckalarm"}],clipSteps:[{en:"Blood pumped",de:"Blut gepumpt"},{en:"Dialysate flows",de:"Dialysat fliesst"},{en:"Sensors compare",de:"Sensoren vergleichen"},{en:"Clamp if unsafe",de:"Klemme bei Gefahr"}]}},{id:"endoscope",name:{en:"Video Endoscope",de:"Videoendoskop"},category:{en:"Optical Imaging",de:"Optische Bildgebung"},short:{en:"Uses illumination, miniature imaging, controls, and processing to view internal anatomy.",de:"Nutzt Beleuchtung, Miniaturbildgebung, Steuerung und Verarbeitung fuer innere Anatomie."},model:"endoscope",overview:{en:"A video endoscope is an optical-electronic imaging chain. Light is guided to tissue, reflected light is captured by a tiny sensor, and the processor improves color, contrast, noise, and sharpness in real time.",de:"Ein Videoendoskop ist eine optisch-elektronische Bildkette. Licht wird zum Gewebe gefuehrt, reflektiertes Licht von einem kleinen Sensor aufgenommen, und der Prozessor verbessert Farbe, Kontrast, Rauschen und Schaerfe in Echtzeit."},workflow:[{en:"LED or xenon light is guided to the distal tip.",de:"LED- oder Xenonlicht wird zur distalen Spitze gefuehrt."},{en:"Optics focus reflected light onto an image sensor.",de:"Optik fokussiert reflektiertes Licht auf einen Bildsensor."},{en:"Sensor pixels convert photons to charge and digital video.",de:"Sensorpixel wandeln Photonen in Ladung und digitales Video."},{en:"Image processing corrects color, noise, contrast, and edges.",de:"Bildverarbeitung korrigiert Farbe, Rauschen, Kontrast und Kanten."}],deepDive:[{title:{en:"Illumination path",de:"Beleuchtungspfad"},body:{en:"The light source must deliver enough illumination without overheating tissue. Drivers regulate LED current, temperature sensors protect the source, and optics or fiber bundles guide light to the tip. Automatic exposure adjusts brightness when tissue distance changes.",de:"Die Lichtquelle muss genug Beleuchtung liefern, ohne Gewebe zu ueberhitzen. Treiber regeln LED-Strom, Temperatursensoren schuetzen die Quelle, und Optik oder Faserbuendel fuehren Licht zur Spitze. Automatische Belichtung passt Helligkeit an, wenn sich der Gewebeabstand aendert."}},{title:{en:"Image sensor readout",de:"Bildsensorauslesung"},body:{en:"CMOS pixels integrate photocharge, then row/column circuits read the values through amplifiers and ADCs. Timing, rolling shutter, dark current, gain, white balance, and cable signal integrity strongly affect the final picture.",de:"CMOS-Pixel integrieren Photoladung, danach lesen Zeilen-/Spaltenschaltungen die Werte ueber Verstaerker und ADCs aus. Timing, Rolling Shutter, Dunkelstrom, Gain, Weissabgleich und Kabelsignalintegritaet beeinflussen das Endbild stark."}},{title:{en:"Processing pipeline",de:"Verarbeitungskette"},body:{en:"The processor applies demosaicing, denoising, color correction, contrast enhancement, edge sharpening, fog reduction, and sometimes narrow-band imaging. Each filter improves readability but can also create artifacts, so real-time tuning matters.",de:"Der Prozessor nutzt Demosaicing, Rauschminderung, Farbkorrektur, Kontrastverstaerkung, Kantenschaerfung, Nebelreduktion und manchmal Narrow-Band-Imaging. Jeder Filter verbessert Lesbarkeit, kann aber Artefakte erzeugen, deshalb ist Echtzeitabstimmung wichtig."}}],parts:[{id:"handle",name:{en:"Control Handle",de:"Bediengriff"},function:{en:"Holds controls for bending, image capture, and irrigation.",de:"Traegt Bedienelemente fuer Abwinklung, Bildaufnahme und Spuelung."},details:{en:"Ergonomics matter because the operator controls fine movement.",de:"Ergonomie ist wichtig, weil feine Bewegung gesteuert wird."},electrotechnics:{en:"Buttons, encoders, sealed switches, and cable routing connect to embedded control.",de:"Tasten, Encoder, dichte Schalter und Kabelfuehrung verbinden sich mit Embedded-Steuerung."}},{id:"light",name:{en:"Light Source",de:"Lichtquelle"},function:{en:"Illuminates tissue through fibers or LEDs.",de:"Beleuchtet Gewebe ueber Fasern oder LEDs."},details:{en:"Brightness must be controlled to avoid glare and heat.",de:"Helligkeit muss gegen Blendung und Waerme geregelt werden."},electrotechnics:{en:"LED drivers, current control, temperature sensing, and exposure feedback are used.",de:"LED-Treiber, Stromregelung, Temperaturmessung und Belichtungsfeedback werden genutzt."}},{id:"sensor",name:{en:"Distal Image Sensor",de:"Distaler Bildsensor"},function:{en:"Converts reflected light into video data.",de:"Wandelt reflektiertes Licht in Videodaten."},details:{en:"Tiny optics and sensor noise limit image quality.",de:"Miniaturoptik und Sensorrauschen begrenzen Bildqualitaet."},electrotechnics:{en:"CMOS readout, ADCs, clocking, cable integrity, and shielding matter.",de:"CMOS-Auslesung, ADCs, Taktung, Kabelintegritaet und Schirmung sind wichtig."}},{id:"processor",name:{en:"Video Processor",de:"Videoprozessor"},function:{en:"Cleans and maps the live image.",de:"Bereinigt und mappt das Livebild."},details:{en:"Real-time processing must keep latency low.",de:"Echtzeitverarbeitung muss die Latenz niedrig halten."},electrotechnics:{en:"Digital filters, frame buffers, color pipelines, and display interfaces meet here.",de:"Digitale Filter, Framebuffer, Farbketten und Displayinterfaces treffen hier zusammen."}}],demo:{title:{en:"Live image enhancement",de:"Livebildverbesserung"},beforeLabel:{en:"Low-light noisy image",de:"Rauschiges Schwachlichtbild"},afterLabel:{en:"Corrected endoscopic view",de:"Korrigierte Endoskopieansicht"},explanation:{en:"Endoscopy depends on optics and real-time video processing: gain helps brightness, but denoising and color correction keep the image believable.",de:"Endoskopie haengt von Optik und Echtzeitvideo ab: Gain hilft Helligkeit, aber Rauschminderung und Farbkorrektur halten das Bild glaubwuerdig."},filters:[{en:"Auto exposure",de:"Auto-Belichtung"},{en:"Denoising",de:"Rauschminderung"},{en:"Color correction",de:"Farbkorrektur"}],clipSteps:[{en:"Light emitted",de:"Licht ausgesendet"},{en:"Tissue reflects",de:"Gewebe reflektiert"},{en:"Sensor reads",de:"Sensor liest"},{en:"Processor enhances",de:"Prozessor verbessert"}]}}];var lw=j0();const cw=dh(lw),dv="http://localhost:8000",Lh=[];async function hv(s){const e=await fetch(`${dv}${s}`);if(!e.ok)throw new Error(`Request failed: ${e.status}`);return e.json()}async function uw(s,e=8){try{return await hv(`/api/ecg/generate?bpm=${s}&seconds=${e}`)}catch{const t=fw(s,e);return Lh.unshift({id:`local-${Date.now()}`,name:"Generated ECG",heart_rate:t.heart_rate,duration:t.duration,filter_used:!1}),t}}async function dw(s){try{const e=await fetch(`${dv}/api/ecg/analyze`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)});if(!e.ok)throw new Error(`Analysis failed: ${e.status}`);return e.json()}catch{const e=pw(s);return Lh.unshift({id:`upload-${Date.now()}`,name:e.name||s.name,heart_rate:e.heart_rate,duration:e.duration,filter_used:!!e.filter_used}),e}}function hw(){return hv("/api/ecg/history").catch(()=>Lh)}function fw(s,e){const r=e*250,o=60/s,l=[],u=[],d=[];for(let f=0;f<r;f+=1){const p=f/250;let v=.04*Math.sin(2*Math.PI*.35*p)+.02*Math.sin(2*Math.PI*8*p);for(let _=.7;_<e;_+=o)v+=1.15*Math.exp(-((p-_)**2)/9e-4),v-=.18*Math.exp(-((p-(_-.045))**2)/35e-5),v-=.22*Math.exp(-((p-(_+.05))**2)/45e-5),v+=.12*Math.exp(-((p-(_-.18))**2)/.004),v+=.28*Math.exp(-((p-(_+.26))**2)/.01);u.push(Number(p.toFixed(3))),d.push(Number(v.toFixed(4)))}for(let f=.7;f<e;f+=o)l.push(Math.round(f*250));return{sample_rate:250,duration:e,heart_rate:s,time:u,voltage:d,r_peaks:l,notes:"Browser fallback ECG. Educational demo only."}}function pw(s){const e=s.apply_filter?mw(s.voltage):s.voltage,t=gw(e,s.sample_rate),r=Number((s.time[s.time.length-1]-s.time[0]).toFixed(3));let o=0;if(t.length>1){const l=t.slice(1).map((d,f)=>s.time[d]-s.time[t[f]]),u=l.reduce((d,f)=>d+f,0)/l.length;o=u>0?Math.round(60/u):0}return{name:s.name,sample_rate:s.sample_rate,duration:r,heart_rate:o,time:s.time,voltage:e,raw_voltage:s.voltage,r_peaks:t,filter_used:s.apply_filter,notes:"Browser fallback ECG analysis. Educational demo only."}}function mw(s){return s.map((e,t)=>{const r=s.slice(Math.max(0,t-3),Math.min(s.length,t+4));return Number((r.reduce((o,l)=>o+l,0)/r.length).toFixed(4))})}function gw(s,e){const t=s.reduce((f,p)=>f+p,0)/s.length,r=s.reduce((f,p)=>f+(p-t)**2,0)/s.length,o=t+.65*Math.sqrt(r),l=Math.max(1,Math.round(e*.28)),u=[];let d=-l;for(let f=1;f<s.length-1;f+=1)s[f]>s[f-1]&&s[f]>s[f+1]&&s[f]>o&&f-d>=l&&(u.push(f),d=f);return u}function vw(){const[s,e]=Mt.useState(74),[t,r]=Mt.useState(250),[o,l]=Mt.useState(!0),[u,d]=Mt.useState(null),[f,p]=Mt.useState([]),[v,_]=Mt.useState(!1),[y,x]=Mt.useState(""),M=Mt.useRef(null);async function w(F=s){_(!0),x("");try{const N=await uw(F);d(N),S()}catch{x("Could not load ECG data. Check that the backend is running.")}finally{_(!1)}}Mt.useEffect(()=>{w(74),S()},[]);async function S(){try{p(await hw())}catch{p([])}}function g(F){const N=F.split(/\r?\n/).map(C=>C.trim()).filter(Boolean),z=[],W=[];for(const C of N){const b=C.split(/[;,]/).map(G=>Number(G.trim()));b.length>=2&&Number.isFinite(b[0])&&Number.isFinite(b[1])&&(z.push(b[0]),W.push(b[1]))}return{time:z,voltage:W}}async function I(F){if(F){_(!0),x("");try{const N=await F.text(),z=g(N);if(z.voltage.length<20)throw new Error("Need at least 20 numeric rows with time and voltage columns.");const W=await dw({name:F.name.replace(/\.[^.]+$/,""),sample_rate:t,apply_filter:o,time:z.time,voltage:z.voltage});d(W),S()}catch(N){x(N instanceof Error?N.message:"Could not analyze CSV file.")}finally{_(!1)}}}function P(){window.print()}const R=Mt.useMemo(()=>u?{x:u.r_peaks.map(F=>u.time[F]),y:u.r_peaks.map(F=>u.voltage[F])}:{x:[],y:[]},[u]);return Mt.useEffect(()=>{!u||!M.current||cw.react(M.current,[{x:u.time,y:u.voltage,type:"scatter",mode:"lines",line:{color:"#0f766e",width:2},name:"ECG"},{x:R.x,y:R.y,type:"scatter",mode:"markers",marker:{color:"#e11d48",size:8},name:"R peaks"}],{autosize:!0,height:360,margin:{l:42,r:20,t:16,b:40},paper_bgcolor:"rgba(0,0,0,0)",plot_bgcolor:"#f8fafc",xaxis:{title:"Time (s)",gridcolor:"#e2e8f0"},yaxis:{title:"Voltage (mV)",gridcolor:"#e2e8f0"},legend:{orientation:"h"}},{responsive:!0,displaylogo:!1})},[u,R.x,R.y]),D.jsxs("section",{className:"wide-panel",children:[D.jsxs("div",{className:"section-title",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:"ECG Analysis Lab"}),D.jsx("h2",{children:"Generated ECG monitor"})]}),D.jsx($a,{size:26,"aria-hidden":"true"})]}),D.jsxs("div",{className:"ecg-controls",children:[D.jsxs("label",{children:["Target BPM",D.jsx("input",{type:"range",min:"45",max:"150",value:s,onChange:F=>e(Number(F.target.value))})]}),D.jsxs("label",{children:["CSV sample rate",D.jsx("input",{type:"number",min:"50",max:"1000",value:t,onChange:F=>r(Number(F.target.value))})]}),D.jsxs("label",{className:"check-row",children:[D.jsx("input",{type:"checkbox",checked:o,onChange:F=>l(F.target.checked)}),"Smooth uploaded CSV"]}),D.jsxs("strong",{children:[s," bpm"]}),D.jsxs("button",{onClick:()=>w(),disabled:v,children:[D.jsx(p_,{size:17}),"Generate"]}),D.jsxs("label",{className:"upload-button",children:[D.jsx(y_,{size:17}),"Upload CSV",D.jsx("input",{type:"file",accept:".csv,.txt",onChange:F=>{var N;return I(((N=F.target.files)==null?void 0:N[0])||null)}})]}),D.jsxs("button",{onClick:P,disabled:!u,children:[D.jsx(Ed,{size:17}),"Report"]})]}),y&&D.jsx("p",{className:"error",children:y}),u&&D.jsxs(D.Fragment,{children:[D.jsxs("div",{className:"ecg-stat-row",children:[D.jsxs("div",{children:[D.jsx("span",{children:"Calculated heart rate"}),D.jsxs("strong",{children:[u.heart_rate," bpm"]})]}),D.jsxs("div",{children:[D.jsx("span",{children:"Sample rate"}),D.jsxs("strong",{children:[u.sample_rate," Hz"]})]}),D.jsxs("div",{children:[D.jsx("span",{children:"R peaks found"}),D.jsx("strong",{children:u.r_peaks.length})]}),D.jsxs("div",{children:[D.jsx("span",{children:"Filter"}),D.jsx("strong",{children:u.filter_used?"On":"Off"})]})]}),D.jsx("div",{ref:M,className:"plot"}),D.jsxs("div",{className:"report-panel",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:"ECG Report Generator"}),D.jsx("h3",{children:u.name||"Generated ECG Demo"})]}),D.jsxs("p",{children:["Heart rate: ",D.jsxs("strong",{children:[u.heart_rate," bpm"]}),". Duration: ",D.jsxs("strong",{children:[u.duration,"s"]}),". R peaks: ",D.jsx("strong",{children:u.r_peaks.length}),". This report is for biomedical education only."]})]})]}),D.jsxs("div",{className:"history-panel",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:"Analysis history"}),D.jsx("h3",{children:"Latest ECG runs"})]}),f.length===0?D.jsx("span",{children:"No saved runs yet."}):f.slice(0,5).map(F=>D.jsxs("article",{children:[D.jsx("strong",{children:F.name}),D.jsxs("span",{children:[F.heart_rate||"n/a"," bpm - ",F.duration,"s - filter ",F.filter_used?"on":"off"]})]},F.id))]})]})}function _w({lang:s}){const[e,t]=Mt.useState(window.location.hash||"#/"),r=e.startsWith("#/device/")?e.replace("#/device/",""):"",o=Mt.useMemo(()=>Md.find(g=>g.id===r),[r]),[l,u]=Mt.useState(""),[d,f]=Mt.useState("model"),[p,v]=Mt.useState(0),[_,y]=Mt.useState(!0),x=(o==null?void 0:o.parts.find(g=>g.id===l))||(o==null?void 0:o.parts[0]);if(Mt.useEffect(()=>{function g(){t(window.location.hash||"#/")}return window.addEventListener("hashchange",g),()=>window.removeEventListener("hashchange",g)},[]),Mt.useEffect(()=>{o&&!o.parts.some(g=>g.id===l)&&u(o.parts[0].id)},[o,l]),Mt.useEffect(()=>{f("model"),v(0),y(!0)},[o==null?void 0:o.id]),Mt.useEffect(()=>{if(!o||d!=="use"||!_)return;const g=window.setInterval(()=>{v(I=>(I+1)%o.demo.clipSteps.length)},1800);return()=>window.clearInterval(g)},[d,o,_]),!o)return D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"explorer-hero",children:[D.jsxs("div",{className:"hero-copy",children:[D.jsx("p",{className:"label",children:s==="en"?"Interactive biomedical engineering education":"Interaktive Medizintechnik-Lernplattform"}),D.jsx("h1",{children:"MedTech Device Explorer"}),D.jsx("p",{children:s==="en"?"Choose a medical device and learn it as an engineering system: 3D parts, electrotechnics, signal processing, image processing, safety, and operation.":"Waehle ein medizinisches Geraet und lerne es als technisches System: 3D-Bauteile, Elektrotechnik, Signalverarbeitung, Bildverarbeitung, Sicherheit und Bedienung."})]}),D.jsxs("div",{className:"hero-stats",children:[D.jsxs("span",{children:[D.jsx(wg,{size:18})," ",Md.length," ",s==="en"?"devices":"Geraete"]}),D.jsxs("span",{children:[D.jsx(Ou,{size:18})," ",s==="en"?"clickable 3D parts":"anklickbare 3D-Teile"]}),D.jsxs("span",{children:[D.jsx(Xl,{size:18})," ",s==="en"?"engineering-first explanations":"Erklaerungen mit Elektrotechnik"]})]})]}),D.jsxs("section",{className:"homepage-demo",children:[D.jsxs("div",{className:"demo-copy",children:[D.jsx("p",{className:"label",children:s==="en"?"Project demo":"Projekt-Demo"}),D.jsx("h2",{children:s==="en"?"How to use the platform":"So benutzt man die Plattform"}),D.jsx("p",{children:s==="en"?"Pick a device card, open its device profile, inspect the model, follow the short process clip, compare simulated before/after data, and connect the device to GET 1/2 electrotechnics.":"Waehle eine Geraetekarte, oeffne das Geraeteprofil, pruefe das Modell, folge dem kurzen Prozessclip, vergleiche simulierte Vorher/Nachher-Daten und verbinde das Geraet mit GET 1/2 Elektrotechnik."})]}),D.jsxs("div",{className:"video-storyboard","aria-label":s==="en"?"Animated project explainer":"Animierte Projekt-Erklaerung",children:[(s==="en"?["Choose device","Inspect parts","Read signals","Connect GET theory"]:["Geraet waehlen","Teile pruefen","Signale lesen","GET-Bezug herstellen"]).map((g,I)=>D.jsxs("div",{className:"story-frame",children:[D.jsx("span",{children:I+1}),D.jsx("strong",{children:g})]},g)),D.jsx(fm,{className:"story-play",size:34})]})]}),D.jsx("section",{className:"device-library page-library",children:Md.map((g,I)=>{const P=xw(g.model,s);return D.jsxs("a",{className:"library-card",href:`#/device/${g.id}`,children:[D.jsxs("div",{className:"card-topline",children:[D.jsx("span",{children:Lt(g.category,s)}),D.jsx("em",{children:I%3===1?s==="en"?"Study":"Studium":s==="en"?"Active":"Aktiv"})]}),D.jsx("strong",{children:Lt(g.name,s)}),D.jsx("small",{children:Lt(g.short,s)}),D.jsxs("div",{className:"card-preview",children:[D.jsx(P.icon,{size:18}),D.jsx("b",{children:P.value}),D.jsx("span",{children:P.label})]}),D.jsx("span",{className:"explore-cta",children:s==="en"?"Explore device":"Geraet erkunden"})]},g.id)})})]});const M=[{id:"model",icon:D.jsx(Ou,{size:18}),label:s==="en"?"3D model + explanation":"3D-Modell + Erklaerung",short:s==="en"?"parts":"Teile"},{id:"use",icon:D.jsx(l_,{size:18}),label:s==="en"?"How it works":"Wie es funktioniert",short:s==="en"?"process":"Ablauf"},{id:"results",icon:D.jsx(jl,{size:18}),label:s==="en"?"Results before / after":"Ergebnis vorher / nachher",short:s==="en"?"results":"Ergebnis"},{id:"electro",icon:D.jsx(hm,{size:18}),label:"Elektrotechnik GET 1/2",short:"GET"}],w=Mw(o.model,s),S=Sw(o.model,s);return D.jsxs(D.Fragment,{children:[D.jsxs("a",{className:"back-link",href:"#/",children:[D.jsx(a_,{size:18}),s==="en"?"Device library":"Geraetebibliothek"]}),D.jsx("section",{className:"device-page-hero",children:D.jsxs("div",{children:[D.jsx("p",{className:"label",children:Lt(o.category,s)}),D.jsx("h1",{children:Lt(o.name,s)}),D.jsx("p",{children:Lt(o.overview,s)})]})}),o.id==="ecg"&&D.jsx(yw,{lang:s}),D.jsxs("section",{className:"study-shell",children:[D.jsx("div",{className:"study-tabs",role:"tablist","aria-label":s==="en"?"Device study sections":"Geraete-Lernbereiche",children:M.map(g=>D.jsxs("button",{type:"button",role:"tab","aria-selected":d===g.id,className:d===g.id?"active":"",onClick:()=>f(g.id),title:g.label,children:[g.icon,D.jsx("span",{children:g.label}),D.jsx("small",{children:g.short})]},g.id))}),d==="model"&&D.jsxs(D.Fragment,{children:[D.jsxs("section",{className:"device-workspace device-page",children:[D.jsxs("div",{className:"model-panel pro-model-panel",children:[D.jsxs("div",{className:"section-title",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:s==="en"?"Interactive professional teaching model":"Interaktives professionelles Lernmodell"}),D.jsx("h2",{children:Lt(o.name,s)})]}),D.jsx(Ou,{size:24})]}),D.jsx(aw,{device:o,selectedPartId:(x==null?void 0:x.id)||"",onSelectPart:u}),D.jsx("p",{className:"canvas-hint",children:s==="en"?"Drag to rotate. Click a part or choose it from the list. The models are custom procedural 3D assets, so they stay free to use and deploy.":"Ziehen zum Drehen. Teil anklicken oder aus der Liste waehlen. Die Modelle sind eigene prozedurale 3D-Assets und bleiben kostenlos nutzbar."})]}),x&&D.jsxs("aside",{className:"lesson-panel",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:s==="en"?"Selected part":"Ausgewaehltes Teil"}),D.jsx("h2",{children:Lt(x.name,s)}),D.jsx("p",{children:Lt(x.function,s)}),D.jsx("small",{children:Lt(x.details,s)})]}),D.jsxs("div",{className:"electro-box",children:[D.jsx(Tg,{size:22}),D.jsxs("div",{children:[D.jsx("strong",{children:s==="en"?"Electrotechnics link":"Bezug zur Elektrotechnik"}),D.jsx("span",{children:Lt(x.electrotechnics,s)})]})]}),D.jsx("div",{className:"part-buttons",children:o.parts.map(g=>D.jsx("button",{className:g.id===x.id?"active":"",onClick:()=>u(g.id),children:Lt(g.name,s)},g.id))})]})]}),D.jsxs("section",{className:"learning-grid",children:[D.jsxs("article",{className:"lesson-card",children:[D.jsx(o_,{size:24}),D.jsx("h2",{children:s==="en"?"System idea":"Systemidee"}),D.jsx("p",{children:Lt(o.overview,s)})]}),D.jsxs("article",{className:"lesson-card",children:[D.jsx(u_,{size:24}),D.jsx("h2",{children:s==="en"?"Signal / energy path":"Signal- / Energiepfad"}),D.jsx("ol",{children:o.workflow.map(g=>D.jsx("li",{children:Lt(g,s)},Lt(g,"en")))})]}),D.jsxs("article",{className:"lesson-card",children:[D.jsx(d_,{size:24}),D.jsx("h2",{children:s==="en"?"What to understand":"Was man verstehen soll"}),D.jsx("p",{children:s==="en"?"Read each device as an electrical system first: source, impedance, energy conversion, conditioning, sampling, control, isolation, and safety.":"Lies jedes Geraet zuerst als elektrisches System: Quelle, Impedanz, Energiewandlung, Aufbereitung, Abtastung, Regelung, Isolation und Sicherheit."})]})]})]}),d==="use"&&D.jsxs("section",{className:"study-panel",children:[D.jsxs("div",{className:"section-title",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:s==="en"?"Animated process walkthrough":"Animierter Prozessablauf"}),D.jsx("h2",{children:Lt(o.demo.title,s)})]}),D.jsxs("div",{className:"process-controls",children:[D.jsxs("button",{type:"button",onClick:()=>y(!_),children:[_?D.jsx(f_,{size:16}):D.jsx(fm,{size:16}),_?"Pause":s==="en"?"Play":"Start"]}),D.jsxs("button",{type:"button",onClick:()=>v(0),children:[D.jsx(m_,{size:16}),s==="en"?"Restart":"Neu starten"]})]})]}),D.jsxs("div",{className:`clip-strip ${o.model}`,children:[o.demo.clipSteps.map((g,I)=>D.jsxs("div",{className:`clip-step ${I===p?"active":""}`,children:[D.jsx("span",{children:I+1}),D.jsx("strong",{children:Lt(g,s)})]},Lt(g,"en"))),D.jsx("div",{className:"moving-pulse",style:{left:`${8+p*(84/Math.max(o.demo.clipSteps.length-1,1))}%`}})]}),D.jsx("div",{className:"process-progress",children:D.jsx("span",{style:{width:`${(p+1)/o.demo.clipSteps.length*100}%`}})}),D.jsx("div",{className:"usage-grid",children:o.workflow.map((g,I)=>D.jsxs("article",{children:[D.jsx("span",{children:String(I+1).padStart(2,"0")}),D.jsx("p",{children:Lt(g,s)})]},Lt(g,"en")))})]}),d==="results"&&D.jsxs("section",{className:"study-panel",children:[D.jsxs("div",{className:"section-title",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:s==="en"?"Result understanding":"Ergebnis verstehen"}),D.jsx("h2",{children:s==="en"?"Before and after processing":"Vor und nach der Verarbeitung"})]}),D.jsx(jl,{size:24})]}),D.jsxs("div",{className:`before-after ${o.model}`,children:[D.jsxs("div",{children:[D.jsx("span",{children:Lt(o.demo.beforeLabel,s)}),D.jsx("div",{className:"image-sim before"})]}),D.jsxs("div",{children:[D.jsx("span",{children:Lt(o.demo.afterLabel,s)}),D.jsx("div",{className:"image-sim after"})]})]}),D.jsx("p",{className:"result-explanation",children:Lt(o.demo.explanation,s)}),D.jsxs("div",{className:"processing-explanation",children:[D.jsxs("article",{children:[D.jsx("h3",{children:"Problem"}),D.jsx("p",{children:S.problem})]}),D.jsxs("article",{children:[D.jsx("h3",{children:s==="en"?"Processing steps":"Verarbeitungsschritte"}),D.jsx("ol",{children:S.steps.map(g=>D.jsx("li",{children:g},g))})]}),D.jsxs("article",{children:[D.jsx("h3",{children:s==="en"?"Result and tradeoff":"Ergebnis und Kompromiss"}),D.jsx("p",{children:S.tradeoff})]})]}),D.jsx("div",{className:"filter-row",children:o.demo.filters.map(g=>D.jsx("span",{children:Lt(g,s)},Lt(g,"en")))})]}),d==="electro"&&D.jsxs("section",{className:"study-panel electro-study",children:[D.jsxs("div",{className:"section-title",children:[D.jsxs("div",{children:[D.jsx("p",{className:"label",children:s==="en"?"GET 1/2 study connection":"GET 1/2 Studienbezug"}),D.jsx("h2",{children:s==="en"?"Elektrotechnik behind this device":"Elektrotechnik hinter diesem Geraet"})]}),D.jsx(hm,{size:24})]}),D.jsx("p",{className:"study-intro",children:s==="en"?"This section avoids textbook quotations and maps the device to the fundamentals normally trained in GET 1/2: circuit laws, fields, energy, time constants, frequency response, measurement loading, sampling, motors, power electronics, and safety.":"Dieser Bereich zitiert kein Lehrbuch, sondern ordnet das Geraet den typischen GET-1/2-Grundlagen zu: Kirchhoff, Felder, Energie, Zeitkonstanten, Frequenzgang, Messbelastung, Abtastung, Motoren, Leistungselektronik und Sicherheit."}),D.jsx("div",{className:"electro-concept-grid",children:w.map(g=>D.jsxs("article",{children:[D.jsx("h3",{children:g.title}),D.jsx("strong",{children:g.relation}),D.jsx("p",{children:g.detail})]},g.title))}),o.deepDive&&D.jsx("div",{className:"deep-dive-grid electro-dive",children:o.deepDive.map(g=>D.jsxs("article",{children:[D.jsx("h3",{children:Lt(g.title,s)}),D.jsx("p",{children:Lt(g.body,s)})]},Lt(g.title,"en")))})]})]}),o.id==="ecg"&&D.jsx(vw,{})]})}function yw({lang:s}){const e=s==="en"?[["Measured signal","0.5-4 mV skin potential"],["Useful bandwidth","0.05-150 Hz ECG band"],["Sampling idea","ADC after anti-alias filtering"],["Noise focus","50 Hz mains, muscle noise, drift"]]:[["Messsignal","0.5-4 mV Hautpotential"],["Nutzband","0.05-150 Hz EKG-Band"],["Abtastidee","ADC nach Anti-Alias-Filter"],["Stoerfokus","50 Hz Netz, Muskelrauschen, Drift"]],t=s==="en"?[{icon:D.jsx($a,{size:18}),label:"Analyze ECG signal"},{icon:D.jsx(Ed,{size:18}),label:"Generate report"},{icon:D.jsx(Wl,{size:18}),label:"View sensor data"},{icon:D.jsx(pm,{size:18}),label:"Maintenance log"}]:[{icon:D.jsx($a,{size:18}),label:"EKG-Signal analysieren"},{icon:D.jsx(Ed,{size:18}),label:"Bericht erzeugen"},{icon:D.jsx(Wl,{size:18}),label:"Sensordaten ansehen"},{icon:D.jsx(pm,{size:18}),label:"Wartungslog"}];return D.jsxs("section",{className:"flagship-profile",children:[D.jsxs("div",{className:"flagship-visual",children:[D.jsxs("div",{className:"ecg-product",children:[D.jsxs("div",{className:"ecg-screen",children:[D.jsx("span",{children:"HR 72"}),D.jsx("div",{className:"ecg-wave"})]}),D.jsxs("div",{className:"ecg-controls-visual",children:[D.jsx("i",{}),D.jsx("i",{}),D.jsx("i",{})]}),D.jsxs("div",{className:"ecg-leads-visual",children:[D.jsx("b",{}),D.jsx("b",{}),D.jsx("b",{})]})]}),D.jsxs("div",{className:"device-status-overlay",children:[D.jsx("strong",{children:s==="en"?"Device status":"Geraetestatus"}),D.jsxs("span",{children:[D.jsx(g_,{size:16})," ",s==="en"?"Active simulation":"Aktive Simulation"]}),D.jsxs("span",{children:[D.jsx(Xl,{size:16})," ",s==="en"?"Signal quality stable":"Signalqualitaet stabil"]})]})]}),D.jsxs("div",{className:"flagship-copy",children:[D.jsx("p",{className:"label",children:s==="en"?"Flagship device profile":"Flagship-Geraeteprofil"}),D.jsx("h2",{children:s==="en"?"ECG monitor as a complete engineering system":"EKG-Monitor als komplettes technisches System"}),D.jsx("p",{children:s==="en"?"This page is the polished template for the rest of the project: product-style visual, clickable components, simulated ECG signal, device status, technical specs, study explanation, and report actions.":"Diese Seite ist die polierte Vorlage fuer den Rest des Projekts: Produktvisual, anklickbare Komponenten, simuliertes EKG-Signal, Geraetestatus, technische Daten, Studienerklaerung und Bericht-Aktionen."}),D.jsx("div",{className:"spec-grid",children:e.map(([r,o])=>D.jsxs("article",{children:[D.jsx("span",{children:r}),D.jsx("strong",{children:o})]},r))}),D.jsx("div",{className:"action-row",children:t.map(r=>D.jsxs("button",{type:"button",children:[r.icon,r.label]},r.label))})]})]})}function xw(s,e){return{ecg:{icon:$a,value:"72 bpm",label:e==="en"?"heart-rate demo":"Herzfrequenz-Demo"},ct:{icon:jl,value:"128 slices",label:e==="en"?"image stack":"Bildstapel"},ultrasound:{icon:v_,value:"5 MHz",label:e==="en"?"probe frequency":"Sondenfrequenz"},xray:{icon:Xl,value:"70 kVp",label:e==="en"?"exposure demo":"Belichtungsdemo"},mri:{icon:Tg,value:"RF coil",label:e==="en"?"resonance focus":"Resonanzfokus"},pump:{icon:Wl,value:"24 ml/h",label:e==="en"?"flow simulation":"Flow-Simulation"},ventilator:{icon:Wl,value:"PEEP 5",label:e==="en"?"pressure control":"Druckregelung"},defib:{icon:Xl,value:"150 J",label:e==="en"?"energy storage":"Energiespeicher"},dialysis:{icon:$a,value:"250 ml/min",label:e==="en"?"blood-flow demo":"Blutfluss-Demo"},endoscope:{icon:jl,value:"HD sensor",label:e==="en"?"optical chain":"Optikkette"}}[s]||{icon:wg,value:"GET",label:e==="en"?"study link":"Studienbezug"}}function Sw(s,e){const t=e==="en"?{problem:"The raw ECG contains baseline drift from movement and breathing, high-frequency muscle noise, and 50 Hz mains interference. If these artifacts stay in the signal, R-peak detection and heart-rate estimation become unreliable.",steps:["Baseline correction removes slow movement of the whole waveform.","Bandpass filtering keeps the ECG band while reducing very slow drift and high-frequency noise.","A 50 Hz notch filter reduces power-line interference from the electrical environment.","R-peak detection identifies the dominant heartbeat peaks and estimates heart rate."],tradeoff:"The filtered ECG is easier to read and analyze, but overly aggressive cutoff frequencies can change QRS shape, ST segments, timing, and amplitude. The engineering goal is not a pretty curve; it is a reliable signal that still preserves medically meaningful information."}:{problem:"Das rohe EKG enthaelt Basisliniendrift durch Bewegung und Atmung, hochfrequentes Muskelrauschen und 50-Hz-Netzstoerung. Bleiben diese Artefakte im Signal, werden R-Zacken-Erkennung und Herzfrequenzschaetzung unzuverlaessig.",steps:["Basislinienkorrektur entfernt langsame Verschiebungen der gesamten Kurve.","Bandpassfilterung behaelt das EKG-Band und reduziert sehr langsame Drift sowie hochfrequentes Rauschen.","Ein 50-Hz-Kerbfilter reduziert Netzstoerung aus der elektrischen Umgebung.","R-Zacken-Erkennung identifiziert die dominanten Herzschlagspitzen und schaetzt die Herzfrequenz."],tradeoff:"Das gefilterte EKG ist leichter lesbar und analysierbar, aber zu aggressive Grenzfrequenzen koennen QRS-Form, ST-Strecken, Timing und Amplitude veraendern. Das Ziel ist keine schoene Kurve, sondern ein verlaessliches Signal, das medizinisch sinnvolle Information erhaelt."},r=e==="en"?{problem:"The original measurement has limited contrast, noise, blur, or artifacts, so relevant structures can be difficult to distinguish.",steps:["Contrast mapping expands the useful intensity range.","Noise-aware smoothing reduces random variation while trying to preserve edges.","Sharpening or reconstruction kernels increase boundary visibility.","Windowing maps the data range to the display range for the chosen anatomy or material."],tradeoff:"Image enhancement improves readability, but too much sharpening can create false edges and too much smoothing can remove small details. The result must support interpretation without inventing information."}:{problem:"Die urspruengliche Messung hat begrenzten Kontrast, Rauschen, Unschaerfe oder Artefakte, sodass relevante Strukturen schwer unterscheidbar sind.",steps:["Kontrastabbildung erweitert den nutzbaren Intensitaetsbereich.","Rauschbewusste Glaettung reduziert zufaellige Schwankungen und versucht Kanten zu erhalten.","Schaerfung oder Rekonstruktionskerne erhoehen die Sichtbarkeit von Grenzen.","Fensterung bildet den Datenbereich auf den Anzeigebereich fuer die gewaehlte Anatomie oder das Material ab."],tradeoff:"Bildverbesserung erhoeht die Lesbarkeit, aber zu viel Schaerfung kann falsche Kanten erzeugen und zu viel Glaettung kleine Details entfernen. Das Ergebnis muss Interpretation unterstuetzen, ohne Information zu erfinden."};return s==="ecg"?t:["ct","xray","mri","ultrasound","endoscope"].includes(s)?r:e==="en"?{problem:"Raw device data often contains sensor noise, drift, calibration error, and transient behavior from motors, pumps, valves, or patient movement.",steps:["Calibration maps sensor voltage to a physical value.","Trend filtering separates meaningful change from random noise.","Threshold logic identifies unsafe values and possible sensor faults.","Control software updates the actuator or alarm state."],tradeoff:"Filtering and control make the device more stable, but too much delay can hide dangerous events. The design balance is stability, responsiveness, and safety."}:{problem:"Rohe Geraetedaten enthalten oft Sensorrauschen, Drift, Kalibrierfehler und Einschwingverhalten von Motoren, Pumpen, Ventilen oder Patientenbewegung.",steps:["Kalibrierung bildet Sensorspannung auf eine physikalische Groesse ab.","Trendfilterung trennt sinnvolle Aenderung von zufaelligem Rauschen.","Schwellwertlogik erkennt unsichere Werte und moegliche Sensorfehler.","Steuersoftware aktualisiert Aktor- oder Alarmzustand."],tradeoff:"Filterung und Regelung machen das Geraet stabiler, aber zu viel Verzoegerung kann gefaehrliche Ereignisse verdecken. Die Auslegung balanciert Stabilitaet, Reaktionsgeschwindigkeit und Sicherheit."}}function Mw(s,e){const t=e==="en"?[{title:"Kirchhoff, impedance, and loading",relation:"Every sensor is connected to a circuit, so the measurement changes if the input impedance is wrong.",detail:"Model the source with an internal resistance or impedance, then ask what the amplifier, cable capacitance, protection resistors, and filters do to the measured voltage. This is GET 1 material in a medical setting: voltage division, node equations, equivalent circuits, and the difference between an ideal voltage and a real source."},{title:"Frequency response and time constants",relation:"The useful signal is selected by RC/RL behavior, not by magic software.",detail:"A capacitor blocks DC after the transient, an inductor resists current change, and RC filters create cutoff frequencies, phase shift, rise time, settling, and delay. In devices, the wrong cutoff can hide slow physiology, smear fast events, or pass mains interference."},{title:"Safety, isolation, and energy",relation:"Patient-connected devices are electrical systems with strict limits on current and stored energy.",detail:"Think in terms of leakage current paths, isolation barriers, fuses, protective earth, creepage distance, transformer isolation, capacitor discharge, and worst-case fault loops. GET energy formulas such as 1/2 C U^2 and 1/2 L I^2 become safety questions, not just exercises."}]:[{title:"Kirchhoff, Impedanz und Messbelastung",relation:"Jeder Sensor haengt an einer Schaltung; die Messung veraendert sich, wenn die Eingangsimpedanz falsch ist.",detail:"Modelliere die Quelle mit Innenwiderstand oder Impedanz und frage dann, was Verstaerker, Kabelkapazitaet, Schutzwiderstaende und Filter mit der gemessenen Spannung machen. Das ist GET 1 im MedTech-Kontext: Spannungsteiler, Knotengleichungen, Ersatzschaltungen und der Unterschied zwischen idealer Spannung und realer Quelle."},{title:"Frequenzgang und Zeitkonstanten",relation:"Das Nutzsignal wird durch RC/RL-Verhalten ausgewaehlt, nicht durch Magie in Software.",detail:"Ein Kondensator sperrt Gleichanteile nach dem Einschwingen, eine Induktivitaet widersetzt sich Stroemaenderungen, und RC-Filter erzeugen Grenzfrequenz, Phasenverschiebung, Anstiegszeit, Einschwingen und Verzoegerung. Im Geraet kann eine falsche Grenzfrequenz langsame Physiologie verstecken, schnelle Ereignisse verschmieren oder Netzstoerung durchlassen."},{title:"Sicherheit, Isolation und Energie",relation:"Patientennahe Geraete sind elektrische Systeme mit engen Grenzen fuer Strom und gespeicherte Energie.",detail:"Denke an Ableitstrompfade, Isolationsbarrieren, Sicherungen, Schutzleiter, Kriechstrecken, Trafo-Isolation, Kondensatorentladung und Fehlerstromschleifen. GET-Energieformeln wie 1/2 C U^2 und 1/2 L I^2 werden hier Sicherheitsfragen, nicht nur Rechenaufgaben."}],r=e==="en"?{ecg:[{title:"Differential measurement and CMRR",relation:"The ECG is a tiny differential voltage riding on much larger common-mode interference.",detail:"Use superposition thinking: the amplifier should amplify the electrode difference while rejecting the voltage that both electrodes share. Input bias current, electrode impedance mismatch, cable capacitance, and driven-right-leg feedback decide whether 50 Hz noise dominates the trace."},{title:"ADC resolution and aliasing",relation:"Sampling turns an analog waveform into numbers, but the ADC can only preserve what the analog front end prepares.",detail:"Resolution sets the smallest voltage step; sampling rate sets the highest reconstructable frequency. Before the ADC, anti-alias filtering must remove components that would fold into the ECG band. This links directly to quantization, reference voltage, Nyquist frequency, and SNR."}],ct:[{title:"High voltage, rectification, and regulation",relation:"The X-ray tube is a controlled high-voltage load.",detail:"The generator converts mains or DC bus energy into regulated kV and tube current using rectifiers, switching stages, transformers, insulation, feedback, and heat limits. kVp is voltage and penetration; mA is charge flow and photon statistics."},{title:"Detector current and noise",relation:"The detector is a measurement chain for very small photo-generated signals.",detail:"Photodiode current, integration capacitors, dark current, shot noise, amplifier noise, multiplexing, and ADC timing determine whether attenuation data are stable enough for reconstruction. This is measurement electronics plus statistics."}],ultrasound:[{title:"Piezoelectric source and receiver",relation:"The probe converts electrical field energy into acoustic energy and back.",detail:"A voltage pulse strains the crystal; returning pressure produces charge. Capacitance, resonance, damping, matching layers, transmit/receive switching, and low-noise amplification decide bandwidth and image quality."},{title:"Time of flight and beamforming",relation:"Depth is calculated from delay; direction is shaped by phase timing.",detail:"The system delays channels so echoes from one direction add constructively. GET concepts appear as phase, propagation speed, superposition, impedance matching, and frequency-dependent attenuation."}],mri:[{title:"Magnetic fields and inductors",relation:"MRI is built around field strength, coil current, and stored magnetic energy.",detail:"The main magnet, gradient coils, and RF coils are electromagnetic systems. Inductance resists fast current changes, so gradient drivers need high voltage, controlled current ramps, cooling, and protection against stored energy."},{title:"RF resonance and signal pickup",relation:"The RF coil is a tuned circuit that excites and receives weak radio-frequency signals.",detail:"Capacitance and inductance set resonance. Matching, Q factor, shielding, preamplifier noise, and induced voltage are the GET bridge between circuit theory and the measured MR signal."}],xray:[{title:"Tube physics as a circuit load",relation:"Voltage accelerates electrons; current controls how many electrons hit the anode.",detail:"The filament, cathode, anode, high-voltage insulation, rectification, and exposure control form a power circuit. Heat, duty cycle, and stored capacitance are central engineering limits."},{title:"Detector and contrast chain",relation:"The image begins as charge or current before it becomes a picture.",detail:"Scintillators, photodiodes, charge integration, gain calibration, ADCs, and spatial filtering turn X-ray intensity into pixels. Noise and dynamic range explain why exposure and processing matter."}]}:{ecg:[{title:"Differenzmessung und CMRR",relation:"Das EKG ist eine sehr kleine Differenzspannung auf einer viel groesseren Gleichtaktstoerung.",detail:"Nutze Superposition: Der Verstaerker soll die Differenz der Elektroden verstaerken und die gemeinsame Spannung beider Elektroden unterdruecken. Biasstrom, Elektrodenimpedanz, Kabelkapazitaet und Driven-Right-Leg-Rueckkopplung entscheiden, ob 50-Hz-Stoerung die Kurve dominiert."},{title:"ADC-Aufloesung und Aliasing",relation:"Abtastung macht aus einer analogen Kurve Zahlen, aber der ADC erhaelt nur, was die Analogstufe vorbereitet.",detail:"Aufloesung bestimmt den kleinsten Spannungsschritt; Abtastrate bestimmt die hoechste rekonstruierbare Frequenz. Vor dem ADC muss ein Anti-Alias-Filter Anteile entfernen, die in das EKG-Band zurueckgefaltet wuerden. Das verbindet Quantisierung, Referenzspannung, Nyquist-Frequenz und SNR."}],ct:[{title:"Hochspannung, Gleichrichtung und Regelung",relation:"Die Roentgenroehre ist eine geregelte Hochspannungslast.",detail:"Der Generator wandelt Netz- oder Zwischenkreisenergie ueber Gleichrichter, Schaltstufen, Transformatoren, Isolation, Rueckkopplung und Waermegrenzen in geregelte kV und Roehrenstrom. kVp bedeutet Spannung und Durchdringung; mA bedeutet Ladungsfluss und Photonenstatistik."},{title:"Detektorstrom und Rauschen",relation:"Der Detektor ist eine Messkette fuer sehr kleine photoerzeugte Signale.",detail:"Photodiodenstrom, Integrationskondensatoren, Dunkelstrom, Schrotrauschen, Verstaerkerrauschen, Multiplexing und ADC-Timing bestimmen, ob Abschwaechungsdaten stabil genug fuer Rekonstruktion sind. Das ist Messelektronik plus Statistik."}],ultrasound:[{title:"Piezoquelle und Empfaenger",relation:"Die Sonde wandelt elektrische Feldenergie in akustische Energie und zurueck.",detail:"Ein Spannungspuls verformt den Kristall; zurueckkehrender Druck erzeugt Ladung. Kapazitaet, Resonanz, Daempfung, Anpassschichten, Sende-/Empfangsumschaltung und rauscharme Verstaerkung bestimmen Bandbreite und Bildqualitaet."},{title:"Laufzeit und Beamforming",relation:"Tiefe entsteht aus Verzoegerung; Richtung entsteht aus Phasen-Timing.",detail:"Das System verzoegert Kanaele so, dass Echos aus einer Richtung konstruktiv addiert werden. GET-Begriffe erscheinen als Phase, Ausbreitungsgeschwindigkeit, Superposition, Impedanzanpassung und frequenzabhaengige Daempfung."}],mri:[{title:"Magnetfelder und Induktivitaeten",relation:"MRT basiert auf Feldstaerke, Spulenstrom und gespeicherter magnetischer Energie.",detail:"Hauptmagnet, Gradientenspulen und HF-Spulen sind elektromagnetische Systeme. Induktivitaet widersetzt sich schneller Stroemaenderung; deshalb brauchen Gradiententreiber hohe Spannung, geregelte Stromrampen, Kuehlung und Schutz gegen gespeicherte Energie."},{title:"HF-Resonanz und Signalaufnahme",relation:"Die HF-Spule ist ein abgestimmter Kreis, der schwache Hochfrequenzsignale anregt und empfaengt.",detail:"Kapazitaet und Induktivitaet setzen die Resonanz. Anpassung, Guete, Schirmung, Vorverstaerkerrauschen und induzierte Spannung verbinden Schaltungstheorie mit dem gemessenen MR-Signal."}],xray:[{title:"Roentgenroehre als Schaltungslast",relation:"Spannung beschleunigt Elektronen; Strom bestimmt, wie viele Elektronen die Anode treffen.",detail:"Filament, Kathode, Anode, Hochspannungsisolation, Gleichrichtung und Belichtungssteuerung bilden eine Leistungsschaltung. Waerme, Einschaltdauer und gespeicherte Kapazitaet sind zentrale Grenzen."},{title:"Detektor- und Kontrastkette",relation:"Das Bild beginnt als Ladung oder Strom, bevor es ein Bild wird.",detail:"Szintillatoren, Photodioden, Ladungsintegration, Gain-Kalibrierung, ADCs und raeumliche Filter machen aus Roentgenintensitaet Pixel. Rauschen und Dynamikbereich erklaeren, warum Belichtung und Verarbeitung wichtig sind."}]},o=e==="en"?[{title:"Sensors, actuators, and control loops",relation:"Therapy devices often combine measurement with action.",detail:"A sensor measures pressure, flow, position, current, or voltage; a controller compares it to a target; a motor, valve, pump, or switch changes the physical system. That is feedback: stability, delay, gain, saturation, and fault detection."},{title:"Motors and power stages",relation:"Motion and pumping come from electromagnetic energy conversion.",detail:"Motor torque, back EMF, PWM, bridge circuits, current sensing, inductive flyback, and thermal limits turn GET field and circuit ideas into practical device mechanics."}]:[{title:"Sensoren, Aktoren und Regelkreise",relation:"Therapiegeraete kombinieren oft Messung mit Handlung.",detail:"Ein Sensor misst Druck, Flow, Position, Strom oder Spannung; ein Regler vergleicht mit einem Sollwert; Motor, Ventil, Pumpe oder Schalter veraendert das physikalische System. Das ist Rueckkopplung: Stabilitaet, Verzoegerung, Verstaerkung, Saettigung und Fehlererkennung."},{title:"Motoren und Leistungsstufen",relation:"Bewegung und Pumpen entstehen aus elektromagnetischer Energiewandlung.",detail:"Motordrehmoment, Gegen-EMK, PWM, Brueckenschaltungen, Strommessung, induktiver Freilauf und thermische Grenzen machen aus GET-Feld- und Schaltungswissen praktische Geraetemechanik."}];return[...r[s]||o,...t]}function Ew(){const[s,e]=Mt.useState(()=>localStorage.getItem("lang")||"en"),[t,r]=Mt.useState(()=>localStorage.getItem("theme")==="dark");return Mt.useEffect(()=>{document.documentElement.dataset.theme=t?"dark":"light",localStorage.setItem("theme",t?"dark":"light")},[t]),Mt.useEffect(()=>{localStorage.setItem("lang",s)},[s]),D.jsxs("main",{className:"app-shell",children:[D.jsxs("header",{className:"site-header",children:[D.jsxs("a",{href:"#/",className:"brand",children:[D.jsx("span",{children:"MedTech"}),D.jsx("strong",{children:"Device Explorer"})]}),D.jsxs("div",{className:"top-actions",children:[D.jsxs("button",{onClick:()=>e(s==="en"?"de":"en"),title:"Change language",children:[D.jsx(c_,{size:18}),s==="en"?"DE":"EN"]}),D.jsxs("button",{onClick:()=>r(!t),title:"Toggle dark mode",children:[t?D.jsx(__,{size:18}):D.jsx(h_,{size:18}),t?"Light":"Dark"]})]})]}),D.jsx(_w,{lang:s})]})}n_.createRoot(document.getElementById("root")).render(D.jsx(Y0.StrictMode,{children:D.jsx(Ew,{})}));
