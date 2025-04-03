(self.webpackChunkstrapi_pen=self.webpackChunkstrapi_pen||[]).push([[6791],{12509:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(21272),x=n(63891),f=n(76445),c=n(69909),a=(u=>u&&u.__esModule?u:{default:u})(x),w={size:!0,spacing:!0},p=a.default(c.Flex).withConfig({shouldForwardProp:(u,k)=>!w[u]&&k(u)})`
  & > * {
    margin-top: 0;
    margin-bottom: 0;
  }

  & > * + * {
    margin-top: ${({theme:u,spacing:k})=>f.extractStyleFromTheme(u.spaces,k,void 0)};
  }
`,S=a.default(c.Flex).withConfig({shouldForwardProp:(u,k)=>!w[u]&&k(u)})`
  & > * {
    margin-left: 0;
    margin-right: 0;
  }

  & > * + * {
    margin-left: ${({theme:u,spacing:k})=>f.extractStyleFromTheme(u.spaces,k,void 0)};
  }
`,R=I.forwardRef(({horizontal:u=!1,spacing:k,size:l,...m},N)=>(l&&console.warn('Deprecation warning: Usage of "size" prop in Stack component is deprecated. This is discouraged and will be removed in the next major release. Please use "spacing" instead'),u?b.jsx(S,{ref:N,spacing:k||l,...m}):b.jsx(p,{direction:"column",alignItems:"stretch",ref:N,spacing:k||l,...m})));R.displayName="Stack",h.Stack=R},14053:($,h)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const n="[@strapi/design-system]:",b=I=>{const x=I;let f=!1;if(typeof x!="function")throw new TypeError(`${n} once requires a function parameter`);return(...c)=>{f||(x(...c),f=!0)}};h.PREFIX=n,h.once=b},25737:($,h,n)=>{$=n.nmd($);/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(b,I){$.exports=I(n(21272))})(self,b=>(()=>{var I={703:(s,a,w)=>{"use strict";var p=w(414);function S(){}function R(){}R.resetWarningCache=S,s.exports=function(){function u(m,N,tt,et,V,it){if(it!==p){var J=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw J.name="Invariant Violation",J}}function k(){return u}u.isRequired=u;var l={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:k,element:u,elementType:u,instanceOf:k,node:u,objectOf:k,oneOf:k,oneOfType:k,shape:k,exact:k,checkPropTypes:R,resetWarningCache:S};return l.PropTypes=l,l}},697:(s,a,w)=>{s.exports=w(703)()},414:s=>{"use strict";s.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},787:s=>{"use strict";s.exports=b}},x={};function f(s){var a=x[s];if(a!==void 0)return a.exports;var w=x[s]={exports:{}};return I[s](w,w.exports,f),w.exports}f.n=s=>{var a=s&&s.__esModule?()=>s.default:()=>s;return f.d(a,{a}),a},f.d=(s,a)=>{for(var w in a)f.o(a,w)&&!f.o(s,w)&&Object.defineProperty(s,w,{enumerable:!0,get:a[w]})},f.o=(s,a)=>Object.prototype.hasOwnProperty.call(s,a),f.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var c={};return(()=>{"use strict";f.r(c),f.d(c,{CKEditor:()=>St,CKEditorContext:()=>pe});var s=f(787),a=f.n(s),w=f(697),p=f.n(w);const S=function(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")},R=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var u=typeof self=="object"&&self&&self.Object===Object&&self;const k=R||u||Function("return this")(),l=function(){return k.Date.now()};var m=/\s/;const N=function(t){for(var e=t.length;e--&&m.test(t.charAt(e)););return e};var tt=/^\s+/;const et=function(t){return t&&t.slice(0,N(t)+1).replace(tt,"")},V=k.Symbol;var it=Object.prototype,J=it.hasOwnProperty,g=it.toString,v=V?V.toStringTag:void 0;const j=function(t){var e=J.call(t,v),o=t[v];try{t[v]=void 0;var r=!0}catch{}var d=g.call(t);return r&&(e?t[v]=o:delete t[v]),d};var A=Object.prototype.toString;const D=function(t){return A.call(t)};var W="[object Null]",M="[object Undefined]",ot=V?V.toStringTag:void 0;const Z=function(t){return t==null?t===void 0?M:W:ot&&ot in Object(t)?j(t):D(t)},rt=function(t){return t!=null&&typeof t=="object"};var yt="[object Symbol]";const $t=function(t){return typeof t=="symbol"||rt(t)&&Z(t)==yt};var gt=NaN,Ut=/^[-+]0x[0-9a-f]+$/i,Nt=/^0b[01]+$/i,Bt=/^0o[0-7]+$/i,Ht=parseInt;const bt=function(t){if(typeof t=="number")return t;if($t(t))return gt;if(S(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=S(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=et(t);var o=Nt.test(t);return o||Bt.test(t)?Ht(t.slice(2),o?2:8):Ut.test(t)?gt:+t};var xt="Expected a function",T=Math.max,C=Math.min;const i=function(t,e,o){var r,d,_,O,P,G,H=0,Jt=!1,Pt=!1,ft=!0;if(typeof t!="function")throw new TypeError(xt);function zt(st){var vt=r,Tt=d;return r=d=void 0,H=st,O=t.apply(Tt,vt)}function Zt(st){var vt=st-G;return G===void 0||vt>=e||vt<0||Pt&&st-H>=_}function Ft(){var st=l();if(Zt(st))return ht(st);P=setTimeout(Ft,function(vt){var Tt=e-(vt-G);return Pt?C(Tt,_-(vt-H)):Tt}(st))}function ht(st){return P=void 0,ft&&r?zt(st):(r=d=void 0,O)}function pt(){var st=l(),vt=Zt(st);if(r=arguments,d=this,G=st,vt){if(P===void 0)return function(Tt){return H=Tt,P=setTimeout(Ft,e),Jt?zt(Tt):O}(G);if(Pt)return clearTimeout(P),P=setTimeout(Ft,e),zt(G)}return P===void 0&&(P=setTimeout(Ft,e)),O}return e=bt(e)||0,S(o)&&(Jt=!!o.leading,_=(Pt="maxWait"in o)?T(bt(o.maxWait)||0,e):_,ft="trailing"in o?!!o.trailing:ft),pt.cancel=function(){P!==void 0&&clearTimeout(P),H=0,r=G=d=P=void 0},pt.flush=function(){return P===void 0?O:ht(l())},pt};var E="Expected a function";const F=function(t,e,o){var r=!0,d=!0;if(typeof t!="function")throw new TypeError(E);return S(o)&&(r="leading"in o?!!o.leading:r,d="trailing"in o?!!o.trailing:d),i(t,e,{leading:r,maxWait:e,trailing:d})},y=function(){this.__data__=[],this.size=0},K=function(t,e){return t===e||t!=t&&e!=e},L=function(t,e){for(var o=t.length;o--;)if(K(t[o][0],e))return o;return-1};var at=Array.prototype.splice;const dt=function(t){var e=this.__data__,o=L(e,t);return!(o<0)&&(o==e.length-1?e.pop():at.call(e,o,1),--this.size,!0)},B=function(t){var e=this.__data__,o=L(e,t);return o<0?void 0:e[o][1]},ut=function(t){return L(this.__data__,t)>-1},nt=function(t,e){var o=this.__data__,r=L(o,t);return r<0?(++this.size,o.push([t,e])):o[r][1]=e,this};function Q(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Q.prototype.clear=y,Q.prototype.delete=dt,Q.prototype.get=B,Q.prototype.has=ut,Q.prototype.set=nt;const Y=Q,jt=function(){this.__data__=new Y,this.size=0},wt=function(t){var e=this.__data__,o=e.delete(t);return this.size=e.size,o},Ct=function(t){return this.__data__.get(t)},lt=function(t){return this.__data__.has(t)};var mt="[object AsyncFunction]",It="[object Function]",X="[object GeneratorFunction]",ct="[object Proxy]";const kt=function(t){if(!S(t))return!1;var e=Z(t);return e==It||e==X||e==mt||e==ct},Rt=k["__core-js_shared__"];var At=function(){var t=/[^.]+$/.exec(Rt&&Rt.keys&&Rt.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();const ao=function(t){return!!At&&At in t};var lo=Function.prototype.toString;const _t=function(t){if(t!=null){try{return lo.call(t)}catch{}try{return t+""}catch{}}return""};var uo=/^\[object .+?Constructor\]$/,ho=Function.prototype,fo=Object.prototype,po=ho.toString,go=fo.hasOwnProperty,bo=RegExp("^"+po.call(go).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const mo=function(t){return!(!S(t)||ao(t))&&(kt(t)?bo:uo).test(_t(t))},ko=function(t,e){return t?.[e]},Et=function(t,e){var o=ko(t,e);return mo(o)?o:void 0},Gt=Et(k,"Map"),Vt=Et(Object,"create"),vo=function(){this.__data__=Vt?Vt(null):{},this.size=0},yo=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e};var xo="__lodash_hash_undefined__",wo=Object.prototype.hasOwnProperty;const jo=function(t){var e=this.__data__;if(Vt){var o=e[t];return o===xo?void 0:o}return wo.call(e,t)?e[t]:void 0};var Co=Object.prototype.hasOwnProperty;const _o=function(t){var e=this.__data__;return Vt?e[t]!==void 0:Co.call(e,t)};var Eo="__lodash_hash_undefined__";const Oo=function(t,e){var o=this.__data__;return this.size+=this.has(t)?0:1,o[t]=Vt&&e===void 0?Eo:e,this};function Mt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Mt.prototype.clear=vo,Mt.prototype.delete=yo,Mt.prototype.get=jo,Mt.prototype.has=_o,Mt.prototype.set=Oo;const be=Mt,So=function(){this.size=0,this.__data__={hash:new be,map:new(Gt||Y),string:new be}},Po=function(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null},Xt=function(t,e){var o=t.__data__;return Po(e)?o[typeof e=="string"?"string":"hash"]:o.map},Fo=function(t){var e=Xt(this,t).delete(t);return this.size-=e?1:0,e},To=function(t){return Xt(this,t).get(t)},Io=function(t){return Xt(this,t).has(t)},Ro=function(t,e){var o=Xt(this,t),r=o.size;return o.set(t,e),this.size+=o.size==r?0:1,this};function Dt(t){var e=-1,o=t==null?0:t.length;for(this.clear();++e<o;){var r=t[e];this.set(r[0],r[1])}}Dt.prototype.clear=So,Dt.prototype.delete=Fo,Dt.prototype.get=To,Dt.prototype.has=Io,Dt.prototype.set=Ro;const Ao=Dt;var Mo=200;const Do=function(t,e){var o=this.__data__;if(o instanceof Y){var r=o.__data__;if(!Gt||r.length<Mo-1)return r.push([t,e]),this.size=++o.size,this;o=this.__data__=new Ao(r)}return o.set(t,e),this.size=o.size,this};function Lt(t){var e=this.__data__=new Y(t);this.size=e.size}Lt.prototype.clear=jt,Lt.prototype.delete=wt,Lt.prototype.get=Ct,Lt.prototype.has=lt,Lt.prototype.set=Do;const Lo=Lt,Wo=function(t,e){for(var o=-1,r=t==null?0:t.length;++o<r&&e(t[o],o,t)!==!1;);return t},me=function(){try{var t=Et(Object,"defineProperty");return t({},"",{}),t}catch{}}(),ke=function(t,e,o){e=="__proto__"&&me?me(t,e,{configurable:!0,enumerable:!0,value:o,writable:!0}):t[e]=o};var zo=Object.prototype.hasOwnProperty;const ve=function(t,e,o){var r=t[e];zo.call(t,e)&&K(r,o)&&(o!==void 0||e in t)||ke(t,e,o)},Yt=function(t,e,o,r){var d=!o;o||(o={});for(var _=-1,O=e.length;++_<O;){var P=e[_],G=r?r(o[P],t[P],P,o,t):void 0;G===void 0&&(G=t[P]),d?ke(o,P,G):ve(o,P,G)}return o},$o=function(t,e){for(var o=-1,r=Array(t);++o<t;)r[o]=e(o);return r};var Uo="[object Arguments]";const ye=function(t){return rt(t)&&Z(t)==Uo};var xe=Object.prototype,No=xe.hasOwnProperty,Bo=xe.propertyIsEnumerable;const Ho=ye(function(){return arguments}())?ye:function(t){return rt(t)&&No.call(t,"callee")&&!Bo.call(t,"callee")},qt=Array.isArray,Go=function(){return!1};var we=h&&!h.nodeType&&h,je=we&&!0&&$&&!$.nodeType&&$,Ce=je&&je.exports===we?k.Buffer:void 0;const _e=(Ce?Ce.isBuffer:void 0)||Go;var Vo=9007199254740991,Ko=/^(?:0|[1-9]\d*)$/;const Qo=function(t,e){var o=typeof t;return!!(e=e??Vo)&&(o=="number"||o!="symbol"&&Ko.test(t))&&t>-1&&t%1==0&&t<e};var Zo=9007199254740991;const Ee=function(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=Zo};var U={};U["[object Float32Array]"]=U["[object Float64Array]"]=U["[object Int8Array]"]=U["[object Int16Array]"]=U["[object Int32Array]"]=U["[object Uint8Array]"]=U["[object Uint8ClampedArray]"]=U["[object Uint16Array]"]=U["[object Uint32Array]"]=!0,U["[object Arguments]"]=U["[object Array]"]=U["[object ArrayBuffer]"]=U["[object Boolean]"]=U["[object DataView]"]=U["[object Date]"]=U["[object Error]"]=U["[object Function]"]=U["[object Map]"]=U["[object Number]"]=U["[object Object]"]=U["[object RegExp]"]=U["[object Set]"]=U["[object String]"]=U["[object WeakMap]"]=!1;const Xo=function(t){return rt(t)&&Ee(t.length)&&!!U[Z(t)]},te=function(t){return function(e){return t(e)}};var Oe=h&&!h.nodeType&&h,Kt=Oe&&!0&&$&&!$.nodeType&&$,ee=Kt&&Kt.exports===Oe&&R.process;const Wt=function(){try{var t=Kt&&Kt.require&&Kt.require("util").types;return t||ee&&ee.binding&&ee.binding("util")}catch{}}();var Se=Wt&&Wt.isTypedArray;const Yo=Se?te(Se):Xo;var Jo=Object.prototype.hasOwnProperty;const Pe=function(t,e){var o=qt(t),r=!o&&Ho(t),d=!o&&!r&&_e(t),_=!o&&!r&&!d&&Yo(t),O=o||r||d||_,P=O?$o(t.length,String):[],G=P.length;for(var H in t)!e&&!Jo.call(t,H)||O&&(H=="length"||d&&(H=="offset"||H=="parent")||_&&(H=="buffer"||H=="byteLength"||H=="byteOffset")||Qo(H,G))||P.push(H);return P};var qo=Object.prototype;const oe=function(t){var e=t&&t.constructor;return t===(typeof e=="function"&&e.prototype||qo)},Fe=function(t,e){return function(o){return t(e(o))}},tr=Fe(Object.keys,Object);var er=Object.prototype.hasOwnProperty;const or=function(t){if(!oe(t))return tr(t);var e=[];for(var o in Object(t))er.call(t,o)&&o!="constructor"&&e.push(o);return e},Te=function(t){return t!=null&&Ee(t.length)&&!kt(t)},re=function(t){return Te(t)?Pe(t):or(t)},rr=function(t,e){return t&&Yt(e,re(e),t)},nr=function(t){var e=[];if(t!=null)for(var o in Object(t))e.push(o);return e};var ir=Object.prototype.hasOwnProperty;const cr=function(t){if(!S(t))return nr(t);var e=oe(t),o=[];for(var r in t)(r!="constructor"||!e&&ir.call(t,r))&&o.push(r);return o},ne=function(t){return Te(t)?Pe(t,!0):cr(t)},sr=function(t,e){return t&&Yt(e,ne(e),t)};var Ie=h&&!h.nodeType&&h,Re=Ie&&!0&&$&&!$.nodeType&&$,Ae=Re&&Re.exports===Ie?k.Buffer:void 0,Me=Ae?Ae.allocUnsafe:void 0;const ar=function(t,e){if(e)return t.slice();var o=t.length,r=Me?Me(o):new t.constructor(o);return t.copy(r),r},lr=function(t,e){var o=-1,r=t.length;for(e||(e=Array(r));++o<r;)e[o]=t[o];return e},dr=function(t,e){for(var o=-1,r=t==null?0:t.length,d=0,_=[];++o<r;){var O=t[o];e(O,o,t)&&(_[d++]=O)}return _},De=function(){return[]};var ur=Object.prototype.propertyIsEnumerable,Le=Object.getOwnPropertySymbols;const ie=Le?function(t){return t==null?[]:(t=Object(t),dr(Le(t),function(e){return ur.call(t,e)}))}:De,hr=function(t,e){return Yt(t,ie(t),e)},We=function(t,e){for(var o=-1,r=e.length,d=t.length;++o<r;)t[d+o]=e[o];return t},ce=Fe(Object.getPrototypeOf,Object),ze=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)We(e,ie(t)),t=ce(t);return e}:De,fr=function(t,e){return Yt(t,ze(t),e)},$e=function(t,e,o){var r=e(t);return qt(t)?r:We(r,o(t))},pr=function(t){return $e(t,re,ie)},gr=function(t){return $e(t,ne,ze)},se=Et(k,"DataView"),ae=Et(k,"Promise"),le=Et(k,"Set"),de=Et(k,"WeakMap");var Ue="[object Map]",Ne="[object Promise]",Be="[object Set]",He="[object WeakMap]",Ge="[object DataView]",br=_t(se),mr=_t(Gt),kr=_t(ae),vr=_t(le),yr=_t(de),Ot=Z;(se&&Ot(new se(new ArrayBuffer(1)))!=Ge||Gt&&Ot(new Gt)!=Ue||ae&&Ot(ae.resolve())!=Ne||le&&Ot(new le)!=Be||de&&Ot(new de)!=He)&&(Ot=function(t){var e=Z(t),o=e=="[object Object]"?t.constructor:void 0,r=o?_t(o):"";if(r)switch(r){case br:return Ge;case mr:return Ue;case kr:return Ne;case vr:return Be;case yr:return He}return e});const ue=Ot;var xr=Object.prototype.hasOwnProperty;const wr=function(t){var e=t.length,o=new t.constructor(e);return e&&typeof t[0]=="string"&&xr.call(t,"index")&&(o.index=t.index,o.input=t.input),o},Ve=k.Uint8Array,he=function(t){var e=new t.constructor(t.byteLength);return new Ve(e).set(new Ve(t)),e},jr=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.byteLength)};var Cr=/\w*$/;const _r=function(t){var e=new t.constructor(t.source,Cr.exec(t));return e.lastIndex=t.lastIndex,e};var Ke=V?V.prototype:void 0,Qe=Ke?Ke.valueOf:void 0;const Er=function(t){return Qe?Object(Qe.call(t)):{}},Or=function(t,e){var o=e?he(t.buffer):t.buffer;return new t.constructor(o,t.byteOffset,t.length)};var Sr="[object Boolean]",Pr="[object Date]",Fr="[object Map]",Tr="[object Number]",Ir="[object RegExp]",Rr="[object Set]",Ar="[object String]",Mr="[object Symbol]",Dr="[object ArrayBuffer]",Lr="[object DataView]",Wr="[object Float32Array]",zr="[object Float64Array]",$r="[object Int8Array]",Ur="[object Int16Array]",Nr="[object Int32Array]",Br="[object Uint8Array]",Hr="[object Uint8ClampedArray]",Gr="[object Uint16Array]",Vr="[object Uint32Array]";const Kr=function(t,e,o){var r=t.constructor;switch(e){case Dr:return he(t);case Sr:case Pr:return new r(+t);case Lr:return jr(t,o);case Wr:case zr:case $r:case Ur:case Nr:case Br:case Hr:case Gr:case Vr:return Or(t,o);case Fr:return new r;case Tr:case Ar:return new r(t);case Ir:return _r(t);case Rr:return new r;case Mr:return Er(t)}};var Ze=Object.create;const Qr=function(){function t(){}return function(e){if(!S(e))return{};if(Ze)return Ze(e);t.prototype=e;var o=new t;return t.prototype=void 0,o}}(),Zr=function(t){return typeof t.constructor!="function"||oe(t)?{}:Qr(ce(t))};var Xr="[object Map]";const Yr=function(t){return rt(t)&&ue(t)==Xr};var Xe=Wt&&Wt.isMap;const Jr=Xe?te(Xe):Yr;var qr="[object Set]";const tn=function(t){return rt(t)&&ue(t)==qr};var Ye=Wt&&Wt.isSet;const en=Ye?te(Ye):tn;var on=1,rn=2,nn=4,Je="[object Arguments]",qe="[object Function]",cn="[object GeneratorFunction]",to="[object Object]",z={};z[Je]=z["[object Array]"]=z["[object ArrayBuffer]"]=z["[object DataView]"]=z["[object Boolean]"]=z["[object Date]"]=z["[object Float32Array]"]=z["[object Float64Array]"]=z["[object Int8Array]"]=z["[object Int16Array]"]=z["[object Int32Array]"]=z["[object Map]"]=z["[object Number]"]=z[to]=z["[object RegExp]"]=z["[object Set]"]=z["[object String]"]=z["[object Symbol]"]=z["[object Uint8Array]"]=z["[object Uint8ClampedArray]"]=z["[object Uint16Array]"]=z["[object Uint32Array]"]=!0,z["[object Error]"]=z[qe]=z["[object WeakMap]"]=!1;const sn=function t(e,o,r,d,_,O){var P,G=o&on,H=o&rn,Jt=o&nn;if(r&&(P=_?r(e,d,_,O):r(e)),P!==void 0)return P;if(!S(e))return e;var Pt=qt(e);if(Pt){if(P=wr(e),!G)return lr(e,P)}else{var ft=ue(e),zt=ft==qe||ft==cn;if(_e(e))return ar(e,G);if(ft==to||ft==Je||zt&&!_){if(P=H||zt?{}:Zr(e),!G)return H?fr(e,sr(P,e)):hr(e,rr(P,e))}else{if(!z[ft])return _?e:{};P=Kr(e,ft,G)}}O||(O=new Lo);var Zt=O.get(e);if(Zt)return Zt;O.set(e,P),en(e)?e.forEach(function(ht){P.add(t(ht,o,r,ht,e,O))}):Jr(e)&&e.forEach(function(ht,pt){P.set(pt,t(ht,o,r,pt,e,O))});var Ft=Pt?void 0:(Jt?H?gr:pr:H?ne:re)(e);return Wo(Ft||e,function(ht,pt){Ft&&(ht=e[pt=ht]),ve(P,pt,t(ht,o,r,pt,e,O))}),P};var an=1,ln=4;const dn=function(t,e){return sn(t,an|ln,e=typeof e=="function"?e:void 0)};var un="[object Object]",hn=Function.prototype,fn=Object.prototype,eo=hn.toString,pn=fn.hasOwnProperty,gn=eo.call(Object);const bn=function(t){if(!rt(t)||Z(t)!=un)return!1;var e=ce(t);if(e===null)return!0;var o=pn.call(e,"constructor")&&e.constructor;return typeof o=="function"&&o instanceof o&&eo.call(o)==gn},mn=function(t){return rt(t)&&t.nodeType===1&&!bn(t)};function fe(t,e=new Set){const o=[t],r=new Set;let d=0;for(;o.length>d;){const _=o[d++];if(!(r.has(_)||kn(_)||e.has(_)))if(r.add(_),_[Symbol.iterator])try{for(const O of _)o.push(O)}catch{}else for(const O in _)O!=="defaultValue"&&o.push(_[O])}return r}function kn(t){const e=Object.prototype.toString.call(t),o=typeof t;return o==="number"||o==="boolean"||o==="string"||o==="symbol"||o==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||t==null||t._watchdogExcluded===!0||t instanceof EventTarget||t instanceof Event}function oo(t,e,o=new Set){if(t===e&&typeof(r=t)=="object"&&r!==null)return!0;var r;const d=fe(t,o),_=fe(e,o);for(const O of d)if(_.has(O))return!0;return!1}class ro{constructor(e){if(this.crashes=[],this.state="initializing",this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._now=Date.now,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=o=>{const r=o.error||o.reason;r instanceof Error&&this._handleError(r,o)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,o){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(o)}off(e,o){this._listeners[e]=this._listeners[e].filter(r=>r!==o)}_fire(e,...o){const r=this._listeners[e]||[];for(const d of r)d.apply(this,[null,...o])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,o){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:o.filename,lineno:o.lineno,colno:o.colno,date:this._now()});const r=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:r}),r?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}class no extends ro{constructor(e,o={}){super(o),this._editor=null,this._throttledSave=F(this._save.bind(this),typeof o.saveInterval=="number"?o.saveInterval:5e3),this._creator=(r,d)=>e.create(r,d),this._destructor=r=>r.destroy()}get editor(){return this._editor}get _item(){return this._editor}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{if(typeof this._elementOrData=="string")return this.create(this._data,this._config,this._config.context);{const e=Object.assign({},this._config,{initialData:this._data});return this.create(this._elementOrData,e,e.context)}}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,o=this._config,r){return Promise.resolve().then(()=>(super._startErrorHandling(),this._elementOrData=e,this._config=this._cloneEditorConfiguration(o)||{},this._config.context=r,this._creator(e,this._config))).then(d=>{this._editor=d,d.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=d.model.document.version,this._data=this._getData(),this.state="ready",this._fire("stateChange")})}destroy(){return Promise.resolve().then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.flush();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._lastDocumentVersion=e}catch(o){console.error(o,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e={};for(const o of this._editor.model.document.getRootNames())e[o]=this._editor.data.get({rootName:o});return e}_isErrorComingFromThisItem(e){return oo(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return dn(e,(o,r)=>mn(o)||r==="context"?o:void 0)}}const q=new Array(256).fill("").map((t,e)=>("0"+e.toString(16)).slice(-2)),Qt=Symbol("MainQueueId");class io extends ro{constructor(e,o={}){super(o),this._watchdogs=new Map,this._watchdogConfig=o,this._context=null,this._contextProps=new Set,this._actionQueues=new vn,this._creator=r=>e.create(r),this._destructor=r=>r.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}get context(){return this._context}create(e={}){return this._actionQueues.enqueue(Qt,()=>(this._contextConfig=e,this._create()))}getItem(e){return this._getWatchdog(e)._item}getItemState(e){return this._getWatchdog(e).state}add(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let d;if(this._watchdogs.has(r.id))throw new Error(`Item with the given id is already added: '${r.id}'.`);if(r.type==="editor")return d=new no(this._watchdogConfig),d.setCreator(r.creator),d._setExcludedProperties(this._contextProps),r.destructor&&d.setDestructor(r.destructor),this._watchdogs.set(r.id,d),d.on("error",(_,{error:O,causesRestart:P})=>{this._fire("itemError",{itemId:r.id,error:O}),P&&this._actionQueues.enqueue(r.id,()=>new Promise(G=>{d.on("restart",function H(){d.off("restart",H),this._fire("itemRestart",{itemId:r.id}),G()}.bind(this))}))}),d.create(r.sourceElementOrData,r.config,this._context);throw new Error(`Not supported item type: '${r.type}'.`)})))}remove(e){const o=co(e);return Promise.all(o.map(r=>this._actionQueues.enqueue(r,()=>{const d=this._getWatchdog(r);return this._watchdogs.delete(r),d.destroy()})))}destroy(){return this._actionQueues.enqueue(Qt,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Qt,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(e=>{console.error("An error happened during destroying the context or items.",e)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(e=>(this._context=e,this._contextProps=fe(this._context),Promise.all(Array.from(this._watchdogs.values()).map(o=>(o._setExcludedProperties(this._contextProps),o.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const e=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(o=>o.destroy())).then(()=>this._destructor(e))})}_getWatchdog(e){const o=this._watchdogs.get(e);if(!o)throw new Error(`Item with the given id was not registered: ${e}.`);return o}_isErrorComingFromThisItem(e){for(const o of this._watchdogs.values())if(o._isErrorComingFromThisItem(e))return!1;return oo(this._context,e.context)}}class vn{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._actions=new WeakMap,this._lastActionId=0,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,o){const r=e===Qt;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const d=(r?Promise.all(this._queues.values()):Promise.all([this._queues.get(Qt),this._queues.get(e)])).then(o),_=d.catch(()=>{});return this._queues.set(e,_),d.finally(()=>{this._activeActions--,this._queues.get(e)===_&&this._activeActions===0&&this._onEmptyCallbacks.forEach(O=>O())})}}function co(t){return Array.isArray(t)?t:[t]}const so=a().createContext("contextWatchdog");class pe extends a().Component{constructor(e,o){super(e,o),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}async shouldComponentUpdate(e){return e.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(e.config)),e.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(e.config),!0):this.props.children!==e.children}render(){return a().createElement(so.Provider,{value:this.contextWatchdog},this.props.children)}async componentWillUnmount(){await this._destroyContext()}async _initializeContextWatchdog(e){this.contextWatchdog=new io(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(o,r)=>{this.props.onError(r.error,{phase:"runtime",willContextRestart:r.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(e).catch(o=>{this.props.onError(o,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}pe.defaultProps={isLayoutReady:!0,onError:(t,e)=>console.error(t,e)},pe.propTypes={id:p().string,isLayoutReady:p().bool,context:p().func,watchdogConfig:p().object,config:p().object,onReady:p().func,onError:p().func};const ge="Lock from React integration (@ckeditor/ckeditor5-react)";class St extends a().Component{constructor(e){super(e),this.editorDestructionInProgress=null,this.domContainer=a().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:o}=window;if(o){const[r]=o.split(".").map(Number);r<34&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 34 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(e){return!!this.editor&&(e.id!==this.props.id||(this._shouldUpdateEditor(e)&&this.editor.setData(e.data),"disabled"in e&&(e.disabled?this.editor.enableReadOnlyMode(ge):this.editor.disableReadOnlyMode(ge)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return a().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.watchdog||(this.context instanceof io?this.watchdog=new yn(this.context):this.watchdog=new St._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((e,o)=>this._createEditor(e,o)),this.watchdog.on("error",(e,{error:o,causesRestart:r})=>{this.props.onError(o,{phase:"runtime",willEditorRestart:r})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(e=>this.props.onError(e,{phase:"initialization",willEditorRestart:!1})))}_createEditor(e,o){return this.props.editor.create(e,o).then(r=>{"disabled"in this.props&&this.props.disabled&&r.enableReadOnlyMode(ge);const d=r.model.document,_=r.editing.view.document;return d.on("change:data",O=>{this.props.onChange&&this.props.onChange(O,r)}),_.on("focus",O=>{this.props.onFocus&&this.props.onFocus(O,r)}),_.on("blur",O=>{this.props.onBlur&&this.props.onBlur(O,r)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(r)}),r})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(e=>{setTimeout(()=>{this.watchdog?this.watchdog.destroy().then(()=>{this.watchdog=null,e()}):e()})})}_shouldUpdateEditor(e){return this.props.data!==e.data&&this.editor.getData()!==e.data}_getConfig(){return this.props.data&&this.props.config.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` properties. The config property is over the data value and the first one will be used when specified both."),{...this.props.config,initialData:this.props.config.initialData||this.props.data||""}}}class yn{constructor(e){this._contextWatchdog=e,this._id=function(){const o=4294967296*Math.random()>>>0,r=4294967296*Math.random()>>>0,d=4294967296*Math.random()>>>0,_=4294967296*Math.random()>>>0;return"e"+q[o>>0&255]+q[o>>8&255]+q[o>>16&255]+q[o>>24&255]+q[r>>0&255]+q[r>>8&255]+q[r>>16&255]+q[r>>24&255]+q[d>>0&255]+q[d>>8&255]+q[d>>16&255]+q[d>>24&255]+q[_>>0&255]+q[_>>8&255]+q[_>>16&255]+q[_>>24&255]}()}setCreator(e){this._creator=e}create(e,o){return this._contextWatchdog.add({sourceElementOrData:e,config:o,creator:this._creator,id:this._id,type:"editor"})}on(e,o){this._contextWatchdog.on("itemError",(r,{itemId:d,causesRestart:_,error:O})=>{d===this._id&&o(null,{error:O,causesRestart:_})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}St.contextType=so,St.propTypes={editor:p().func.isRequired,data:p().string,config:p().object,watchdogConfig:p().object,onChange:p().func,onReady:p().func,onFocus:p().func,onBlur:p().func,onError:p().func,disabled:p().bool,onInit:(t,e)=>{if(t[e])return new Error('The "onInit" property is not supported anymore by the CKEditor component. Use the "onReady" property instead.')}},St.defaultProps={config:{},onError:(t,e)=>console.error(t,e)},St._EditorWatchdog=no})(),c})())},39859:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(21272),x=n(63891),f=n(69909),c=n(19717),w=(S=>S&&S.__esModule?S:{default:S})(x).default(f.Flex)`
  font-size: 1.6rem;
  padding: 0;
`,p=I.forwardRef(({label:S,children:R,...u},k)=>b.jsxs(w,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...u,as:"button",ref:k,children:[b.jsx(c.VisuallyHidden,{as:"span",children:S}),I.cloneElement(R,{"aria-hidden":!0,focusable:!1})]}));h.FieldAction=p},64059:($,h,n)=>{/*!
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var b={655:(c,s,a)=>{"use strict";a.d(s,{Z:()=>S});var w=a(609),p=a.n(w)()(function(R){return R[1]});p.push([c.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}",""]);const S=p},609:c=>{"use strict";c.exports=function(s){var a=[];return a.toString=function(){return this.map(function(w){var p=s(w);return w[2]?"@media ".concat(w[2]," {").concat(p,"}"):p}).join("")},a.i=function(w,p,S){typeof w=="string"&&(w=[[null,w,""]]);var R={};if(S)for(var u=0;u<this.length;u++){var k=this[u][0];k!=null&&(R[k]=!0)}for(var l=0;l<w.length;l++){var m=[].concat(w[l]);S&&R[m[0]]||(p&&(m[2]?m[2]="".concat(p," and ").concat(m[2]):m[2]=p),a.push(m))}},a}},62:(c,s,a)=>{"use strict";var w,p=function(){return w===void 0&&(w=Boolean(window&&document&&document.all&&!window.atob)),w},S=function(){var g={};return function(v){if(g[v]===void 0){var j=document.querySelector(v);if(window.HTMLIFrameElement&&j instanceof window.HTMLIFrameElement)try{j=j.contentDocument.head}catch{j=null}g[v]=j}return g[v]}}(),R=[];function u(g){for(var v=-1,j=0;j<R.length;j++)if(R[j].identifier===g){v=j;break}return v}function k(g,v){for(var j={},A=[],D=0;D<g.length;D++){var W=g[D],M=v.base?W[0]+v.base:W[0],ot=j[M]||0,Z="".concat(M," ").concat(ot);j[M]=ot+1;var rt=u(Z),yt={css:W[1],media:W[2],sourceMap:W[3]};rt!==-1?(R[rt].references++,R[rt].updater(yt)):R.push({identifier:Z,updater:J(yt,v),references:1}),A.push(Z)}return A}function l(g){var v=document.createElement("style"),j=g.attributes||{};if(j.nonce===void 0){var A=a.nc;A&&(j.nonce=A)}if(Object.keys(j).forEach(function(W){v.setAttribute(W,j[W])}),typeof g.insert=="function")g.insert(v);else{var D=S(g.insert||"head");if(!D)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");D.appendChild(v)}return v}var m,N=(m=[],function(g,v){return m[g]=v,m.filter(Boolean).join(`
`)});function tt(g,v,j,A){var D=j?"":A.media?"@media ".concat(A.media," {").concat(A.css,"}"):A.css;if(g.styleSheet)g.styleSheet.cssText=N(v,D);else{var W=document.createTextNode(D),M=g.childNodes;M[v]&&g.removeChild(M[v]),M.length?g.insertBefore(W,M[v]):g.appendChild(W)}}function et(g,v,j){var A=j.css,D=j.media,W=j.sourceMap;if(D?g.setAttribute("media",D):g.removeAttribute("media"),W&&typeof btoa<"u"&&(A+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(W))))," */")),g.styleSheet)g.styleSheet.cssText=A;else{for(;g.firstChild;)g.removeChild(g.firstChild);g.appendChild(document.createTextNode(A))}}var V=null,it=0;function J(g,v){var j,A,D;if(v.singleton){var W=it++;j=V||(V=l(v)),A=tt.bind(null,j,W,!1),D=tt.bind(null,j,W,!0)}else j=l(v),A=et.bind(null,j,v),D=function(){(function(M){if(M.parentNode===null)return!1;M.parentNode.removeChild(M)})(j)};return A(g),function(M){if(M){if(M.css===g.css&&M.media===g.media&&M.sourceMap===g.sourceMap)return;A(g=M)}else D()}}c.exports=function(g,v){(v=v||{}).singleton||typeof v.singleton=="boolean"||(v.singleton=p());var j=k(g=g||[],v);return function(A){if(A=A||[],Object.prototype.toString.call(A)==="[object Array]"){for(var D=0;D<j.length;D++){var W=u(j[D]);R[W].references--}for(var M=k(A,v),ot=0;ot<j.length;ot++){var Z=u(j[ot]);R[Z].references===0&&(R[Z].updater(),R.splice(Z,1))}j=M}}}},704:(c,s,a)=>{c.exports=a(79)("./src/core.js")},492:(c,s,a)=>{c.exports=a(79)("./src/engine.js")},273:(c,s,a)=>{c.exports=a(79)("./src/ui.js")},209:(c,s,a)=>{c.exports=a(79)("./src/utils.js")},79:c=>{"use strict";c.exports=CKEditor5.dll}},I={};function x(c){var s=I[c];if(s!==void 0)return s.exports;var a=I[c]={id:c,exports:{}};return b[c](a,a.exports,x),a.exports}x.n=c=>{var s=c&&c.__esModule?()=>c.default:()=>c;return x.d(s,{a:s}),s},x.d=(c,s)=>{for(var a in s)x.o(s,a)&&!x.o(c,a)&&Object.defineProperty(c,a,{enumerable:!0,get:s[a]})},x.o=(c,s)=>Object.prototype.hasOwnProperty.call(c,s),x.r=c=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})},x.nc=void 0;var f={};(()=>{"use strict";x.r(f),x.d(f,{ClassicEditor:()=>bt});var c=x(273),s=x(492),a=x(209);class w extends c.EditorUI{constructor(C,i){super(C),this.view=i,this._toolbarConfig=(0,c.normalizeToolbarConfig)(C.config.get("toolbar")),this._elementReplacer=new a.ElementReplacer}get element(){return this.view.element}init(C){const i=this.editor,E=this.view,F=i.editing.view,y=E.editable,K=F.document.getRoot();y.name=K.rootName,E.render();const L=y.element;this.setEditableElement(y.name,L),E.editable.bind("isFocused").to(this.focusTracker),F.attachDomRoot(L),C&&this._elementReplacer.replace(C,this.element),this._initPlaceholder(),this._initToolbar(),this.fire("ready")}destroy(){super.destroy();const C=this.view,i=this.editor.editing.view;this._elementReplacer.restore(),i.detachDomRoot(C.editable.name),C.destroy()}_initToolbar(){const C=this.view;C.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),C.stickyPanel.limiterElement=C.element,C.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:i})=>i||0),C.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(C.toolbar)}_initPlaceholder(){const C=this.editor,i=C.editing.view,E=i.document.getRoot(),F=C.sourceElement,y=C.config.get("placeholder")||F&&F.tagName.toLowerCase()==="textarea"&&F.getAttribute("placeholder");y&&(0,s.enablePlaceholder)({view:i,element:E,text:y,isDirectHost:!1,keepOnFocus:!0})}}var p=x(62),S=x.n(p),R=x(655),u={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};S()(R.Z,u),R.Z.locals;class k extends c.BoxedEditorUIView{constructor(C,i,E={}){super(C),this.stickyPanel=new c.StickyPanelView(C),this.toolbar=new c.ToolbarView(C,{shouldGroupWhenFull:E.shouldToolbarGroupWhenFull}),this.editable=new c.InlineEditableUIView(C,i)}render(){super.render(),this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}var l=x(704);const m=function(T){return T!=null&&typeof T=="object"},N=typeof n.g=="object"&&n.g&&n.g.Object===Object&&n.g;var tt=typeof self=="object"&&self&&self.Object===Object&&self;const et=(N||tt||Function("return this")()).Symbol;var V=Object.prototype,it=V.hasOwnProperty,J=V.toString,g=et?et.toStringTag:void 0;const v=function(T){var C=it.call(T,g),i=T[g];try{T[g]=void 0;var E=!0}catch{}var F=J.call(T);return E&&(C?T[g]=i:delete T[g]),F};var j=Object.prototype.toString;const A=function(T){return j.call(T)};var D="[object Null]",W="[object Undefined]",M=et?et.toStringTag:void 0;const ot=function(T){return T==null?T===void 0?W:D:M&&M in Object(T)?v(T):A(T)},Z=function(T,C){return function(i){return T(C(i))}}(Object.getPrototypeOf,Object);var rt="[object Object]",yt=Function.prototype,$t=Object.prototype,gt=yt.toString,Ut=$t.hasOwnProperty,Nt=gt.call(Object);const Bt=function(T){if(!m(T)||ot(T)!=rt)return!1;var C=Z(T);if(C===null)return!0;var i=Ut.call(C,"constructor")&&C.constructor;return typeof i=="function"&&i instanceof i&&gt.call(i)==Nt},Ht=function(T){return m(T)&&T.nodeType===1&&!Bt(T)};class bt extends(0,l.DataApiMixin)((0,l.ElementApiMixin)(l.Editor)){constructor(C,i={}){if(!xt(C)&&i.initialData!==void 0)throw new a.CKEditorError("editor-create-initial-data",null);super(i),this.config.get("initialData")===void 0&&this.config.set("initialData",function(y){return xt(y)?(0,a.getDataFromElement)(y):y}(C)),xt(C)&&(this.sourceElement=C),this.model.document.createRoot();const E=!this.config.get("toolbar.shouldNotGroupWhenFull"),F=new k(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:E});this.ui=new w(this,F),(0,l.attachToForm)(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(C,i={}){return new Promise(E=>{const F=new this(C,i);E(F.initPlugins().then(()=>F.ui.init(xt(C)?C:null)).then(()=>F.data.init(F.config.get("initialData"))).then(()=>F.fire("ready")).then(()=>F))})}}function xt(T){return Ht(T)}})(),(window.CKEditor5=window.CKEditor5||{}).editorClassic=f})()},67296:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(69106),x=n(48941),f=()=>{const{id:c,hint:s,error:a}=I.useField();return!s||a?null:b.jsx(x.Typography,{variant:"pi",as:"p",id:`${c}-hint`,textColor:"neutral600",children:s})};h.FieldHint=f},69106:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(21272),I=b.createContext({id:"",required:!1}),x=()=>b.useContext(I);h.FieldContext=I,h.useField=x},70505:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(12509);h.Stack=b.Stack},76987:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(21272),x=n(63891),f=n(69106),c=n(14053),s=n(48941),a=n(69909),p=(m=>m&&m.__esModule?m:{default:m})(x),S=c.once(console.warn),R=I.forwardRef(({children:m,action:N,required:tt,...et},V)=>{const{id:it,required:J}=f.useField(),g=J||tt;return tt!==void 0&&S('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),b.jsxs(u,{ref:V,variant:"pi",textColor:"neutral800",htmlFor:it,fontWeight:"bold",as:"label",...et,children:[m,g&&b.jsx(k,{textColor:"danger600",children:"*"}),N&&b.jsx(l,{marginLeft:1,children:N})]})}),u=p.default(s.Typography)`
  display: flex;
  align-items: center;
`,k=p.default(s.Typography)`
  line-height: 0;
`,l=p.default(a.Flex)`
  line-height: 0;

  svg path {
    fill: ${({theme:m})=>m.colors.neutral500};
  }
`;h.FieldLabel=R},79521:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(91753),I=n(76987),x=n(80421),f=n(67296),c=n(83215),s=n(69106),a=n(39859);h.Field=b.Field,h.FieldLabel=I.FieldLabel,h.FieldInput=x.FieldInput,h.InputWrapper=x.InputWrapper,h.FieldHint=f.FieldHint,h.FieldError=c.FieldError,h.FieldContext=s.FieldContext,h.useField=s.useField,h.FieldAction=a.FieldAction},80421:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(21272),x=n(63891),f=n(69106),c=n(93788),s=n(73725),a=n(69909),p=(l=>l&&l.__esModule?l:{default:l})(x),S={S:6.5,M:10.5},R=I.forwardRef(({endAction:l,startAction:m,disabled:N=!1,onChange:tt,size:et="M",...V},it)=>{const{id:J,error:g,hint:v,name:j,required:A}=f.useField();let D;g?D=`${J}-error`:v&&(D=`${J}-hint`);const W=Boolean(g),M=ot=>{!N&&tt&&tt(ot)};return b.jsxs(k,{justifyContent:"space-between",hasError:W,disabled:N,children:[m?b.jsx(s.Box,{paddingLeft:3,paddingRight:2,children:m}):null,b.jsx(u,{id:J,name:j,ref:it,"aria-describedby":D,"aria-invalid":W,"aria-disabled":N,disabled:N,"data-disabled":N?"":void 0,hasLeftAction:Boolean(m),hasRightAction:Boolean(l),onChange:M,"aria-required":A,$size:et,...V}),l?b.jsx(s.Box,{paddingLeft:2,paddingRight:3,children:l}):null]})}),u=p.default.input`
  border: none;
  border-radius: ${({theme:l})=>l.borderRadius};
  padding-bottom: ${({$size:l})=>`${S[l]/16}rem`};
  padding-left: ${({theme:l,hasLeftAction:m})=>m?0:l.spaces[4]};
  padding-right: ${({theme:l,hasRightAction:m})=>m?0:l.spaces[4]};
  padding-top: ${({$size:l})=>`${S[l]/16}rem`};
  cursor: ${l=>l["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:l})=>l.colors.neutral800};
  font-weight: 400;
  font-size: ${l=>l.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:l})=>l.colors.neutral500};
    opacity: 1;
  }

  &[aria-disabled='true'] {
    color: inherit;
  }

  //focus managed by InputWrapper
  &:focus {
    outline: none;
    box-shadow: none;
  }
`,k=p.default(a.Flex)`
  border: 1px solid ${({theme:l,hasError:m})=>m?l.colors.danger600:l.colors.neutral200};
  border-radius: ${({theme:l})=>l.borderRadius};
  background: ${({theme:l})=>l.colors.neutral0};
  ${c.inputFocusStyle()}

  ${({theme:l,disabled:m})=>m?x.css`
          color: ${l.colors.neutral600};
          background: ${l.colors.neutral150};
        `:void 0}
`;h.FieldInput=R,h.InputWrapper=k},83215:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(69106),x=n(48941),f=()=>{const{id:c,error:s}=I.useField();return!s||typeof s!="string"?null:b.jsx(x.Typography,{variant:"pi",as:"p",id:`${c}-error`,textColor:"danger600","data-strapi-field-error":!0,children:s})};h.FieldError=f},91753:($,h,n)=>{"use strict";Object.defineProperty(h,Symbol.toStringTag,{value:"Module"});const b=n(92132),I=n(21272),x=n(69106),f=n(41999),c=n(73725),s=I.forwardRef(({children:a,name:w,error:p,hint:S,id:R,required:u=!1,...k},l)=>{const m=f.useId(R),N=I.useMemo(()=>({name:w,id:m,error:p,hint:S,required:u}),[p,m,S,w,u]);return b.jsx(c.Box,{ref:l,...k,children:b.jsx(x.FieldContext.Provider,{value:N,children:a})})});h.Field=s},96791:($,h,n)=>{"use strict";n.r(h),n.d(h,{default:()=>C});var b=n(92132),I=n(21272),x=n(33544),f=n.n(x),c=n(63891),s=n(25737),a=n(62228),w=n(44370),p=n(8769),S=n(51187),R=n.n(S),u=n(34252),k=n(28539),l=n.n(k);const m=async(i,E)=>{if(!E)return;const{plugins:F=[]}=i,y=[...F.map(B=>B.pluginName)],K=[{name:"DocumentList",module:"ckeditor5-list"},{name:"TextPartLanguage",module:"ckeditor5-language"},{name:"Alignment",module:"ckeditor5-alignment"},{name:"Autosave",module:"ckeditor5-autosave"},{name:"BlockQuote",module:"ckeditor5-block-quote"},{name:"CodeBlock",module:"ckeditor5-code-block"},{name:"Heading",module:"ckeditor5-heading"},{name:"HtmlEmbed",module:"ckeditor5-html-embed"},{name:"GeneralHtmlSupport",module:"ckeditor5-html-support"},{name:"HorizontalLine",module:"ckeditor5-horizontal-line"},{name:"MediaEmbed",module:"ckeditor5-media-embed"},{name:"Image",module:"ckeditor5-image"},{name:"Indent",module:"ckeditor5-indent"},{name:"Link",module:"ckeditor5-link"},{name:"RemoveFormat",module:"ckeditor5-remove-format"},{name:"Table",module:"ckeditor5-table"},{name:"WordCount",module:"ckeditor5-word-count"},{name:"FindAndReplace",module:"ckeditor5-find-and-replace"},{name:"SpecialCharacters",module:"ckeditor5-special-characters"},{name:"PageBreak",module:"ckeditor5-page-break"},{name:"SourceEditing",module:"ckeditor5-source-editing"},{name:"Highlight",module:"ckeditor5-highlight"},{name:"Style",module:"ckeditor5-style"}],L=["Bold","Code","Italic","Strikethrough","Subscript","Superscript","Underline"],at=["FontBackgroundColor","FontColor","FontFamily","FontSize"],dt=["List","DocumentList"];await Promise.all(K.filter(({name:B})=>y.includes(B)).map(async({module:B})=>await n(58380)(`./${B}/build/translations/${E}.js`).catch(()=>null))),y.some(B=>L.includes(B))&&await n(89320)(`./${E}.js`).catch(()=>null),y.some(B=>dt.includes(B))&&await n(43053)(`./${E}.js`).catch(()=>null),y.some(B=>at.includes(B))&&await n(53917)(`./${E}.js`).catch(()=>null)},N=async i=>{const E=new URLSearchParams(window.location.search),y=Object.fromEntries(E.entries())["plugins[i18n][locale]"],K=p.j2.getUserInfo().preferedLanguage,{ui:L=K||"en",content:at,textPartLanguage:dt,ignorei18n:B}=i.language||{};if(y){const ut=y.split("-")[0];i.language={ui:typeof i.language=="string"?i.language:L,content:B?at:ut,textPartLanguage:dt},await m(i,i.language.ui),await m(i,i.language.content)}else typeof i.language=="object"?(await m(i,i.language.ui),await m(i,i.language.content)):typeof i.language=="string"?await m(i,i.language):(i.language=K,await m(i,K))},tt=i=>{const{configs:E,configsOverwrite:F}=globalThis.CKEditorConfig||{};let y;return F?y=E:(y=u.A,E&&Object.keys(E).map(L=>{u.A.hasOwnProperty(L)?(y[L].fields={...u.A[L].field,...E[L].field},y[L].styles=E[L].styles||u.A[L].styles,y[L].editorConfig={...u.A[L].editorConfig,...E[L].editorConfig}):y[L]=E[L]})),R()(y[i])},et=(i,{responsiveDimensions:E},F)=>{const y=i.editorConfig?.plugins?[...i.editorConfig.plugins.map(K=>K.pluginName)]:[];y.includes("StrapiMediaLib")&&(i.editorConfig.strapiMediaLib={toggle:F}),y.includes("StrapiUploadAdapter")&&(i.editorConfig.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+p.j2.getToken()},backendUrl:strapi.backendURL,responsive:E}),y.includes("WordCount")&&(i.editorConfig.WordCountPlugin=!0)},V=i=>(0,p.l1)(`/${l()}/config/${i}`,{method:"GET"}),it=async(i,E)=>{const F=tt(i),y=await V("upload");return et(F,y,E),await N(F.editorConfig),{currentConfig:F,uploadPluginConfig:y}},J=(0,c.css)`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
  }

  
  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }


    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: .8em;
      margin-bottom: .4em
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: .2em;
      margin-bottom: var(--ck-spacing-large)
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea{
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;
    
    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 0.7rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir=rtl]{
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div{
      justify-content: flex-start;
      & > .ck-word-count {
          & > div:first-child{
            order: 2;
          }
          & > div:last-child{
            order: 1;
          }
      }
    }
  }
`,g=(0,c.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #F0F0FF !important;

    .ck .ck-color-picker-save {
      & > svg {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(209, 89%, 33%);
  }
`,v=(0,c.css)`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;

    .ck .ck-color-picker > svg {
      color: #ffffff !important;
    }
    .ck .ck-color-picker-save {
      & > svg {
        stroke: #ffffff !important;
      }
      & > svg > #primary,
      #primary-2 {
        stroke: #7b79ff !important;
      }
    }
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    /* -- Overrides generic colors. ------------------------------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. ---------------------------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. -------------------------------------- */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. ----------------------------------- */

    --ck-color-split-button-hover-background: var(--ck-color-button-default-hover-background);
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. ----------------------------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------------------------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ------------------------------------------ */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(--ck-color-base-active-focus);
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. --------------------------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. --------------------------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. --------------------------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. --------------------- */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package. -------------------- */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. ---------------------- */

    --ck-color-link-default: hsl(216, 100%, 75%);
  }

`,j=(0,c.css)`

/* --- expanding --- */

.ck.ck-editor__main .ck-blurred {
    max-height: 200px;
  }
.ck.ck-editor__main .ck-focused {
  	max-height: 700px;
  }

/* --- color-grid --- */

.ck.ck-color-ui-dropdown {
	--ck-color-grid-tile-size: 22px !important;
}
.ck.ck-color-grid__tile{
	width:auto;
}
.ck.ck-color-ui-dropdown .ck-color-grid {
	grid-gap: 2px;
}
.ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
	border-radius: 2px;
}
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:hover:not(.ck-disabled),
.ck.ck-color-ui-dropdown .ck.ck-color-grid .ck-color-grid__tile:focus:not(.ck-disabled) {
	z-index: 1;
	transform: scale(1.1);
	border-radius: 2px;
}

/* --- color-picker --- */

.ck[dir=rtl] .ck-color-input{
  margin: 0 8px 8px 0 !important;
  padding: 3px 5px 0 0 !important;
}

.ck .ck-color-input{
  margin: 0 0 8px 8px ;
  padding: 3px 0 0 6px;
  border-radius:2px ;
  font-size:.77rem !important;
  width: 58px !important;
}
.ck .ck-color-picker{
  margin: 0 3px 8px 3px;
  border-radius:2px !important;
  width: 27px !important;
}
.ck .ck-color-picker-save{
  margin: 0 0 8px 0;
  border-radius:2px !important;
  width:27px !important;
}


/* ---- Style feature config ------------------------------------------------------ */

:root {
	--ck-georgia-serif-font-stack: Georgia,Times,Times New Roman,serif;
}

.ck-content h1.document-title {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 50px;
	font-weight: bold;
	border: 0;
}

.ck-content h2.document-subtitle {
	font-family: var(--ck-georgia-serif-font-stack);
	font-size: 20px;
	font-weight: bold;
	color: #d1d1d1;
	letter-spacing: 10px;
}

.ck-content p.callout {
	--border-color: #e91e1e;
	padding: 1.2em 2em;
	border: 1px solid var(--border-color);
	border-left: 10px solid var(--border-color);
	background: #fff9fb;
	border-radius: 5px;
	margin: 1.5em 2em;
	box-shadow: 5px 5px 0 #ffe6ef;
}

.ck-content blockquote.side-quote {
	font-family: var(--ck-georgia-serif-font-stack);
	font-style: normal;
	float: right;
	width: 35%;
	position: relative;
	border: 0;
	overflow: visible;
	z-index: 1;
	margin-left: 1em;
}

.ck-content blockquote.side-quote::before {
	content: "“";
	position: absolute;
	top: -37px;
	left: -10px;
	display: block;
	font-size: 200px;
	color: #e7e7e7;
	z-index: -1;
	line-height: 1;
}

.ck-content blockquote.side-quote p {
	font-size: 2em;
	line-height: 1;
}

.ck-content blockquote.side-quote p:last-child:not(:first-child) {
	font-size: 1.3em;
	text-align: right;
	color: #555;
}

.ck-content span.needs-clarification {
	outline: 1px dashed #c8a24b;
	background: #ffe19c;
	border-radius: 2px;
	position: relative;
}

.ck-content span.needs-clarification::after {
	content: "?";
	display: inline-block;
	color: #fff;
	background: #3b3b3b;
	font-size: 12px;
	vertical-align: super;
	width: 12px;
	height: 12px;
	line-height: 12px;
	border-radius: 10px;
	text-align: center;
	position: absolute;
	right: -6px;
	top: -6px;
	font-weight: bold;
	letter-spacing: initial;
}

.ck-content span.wide-spacing {
	letter-spacing: 0.3em;
}

.ck-content span.small-caps {
	font-variant: small-caps;
}

.ck-content span.spoiler {
	background: #000;
	color: #000;
}

.ck-content span.spoiler:hover {
	background: #000;
	color: #fff;
}

.ck-content pre.stylish-code {
	border-color: transparent;
	margin-left: 2em;
	margin-right: 2em;
	border-radius: 10px;
}

.ck-content pre.stylish-code::before {
	content: "";
	display: block;
	height: 13px;
	background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
	margin-bottom: 8px;
	background-repeat: no-repeat;
}

.ck-content pre.stylish-code-dark,
.ck-content pre.stylish-code-bright {
	padding: 1em;
}

.ck-content pre.stylish-code-dark {
	background: #272822;
	box-shadow: 5px 5px 0 #0000001f;
	color: white;
}

.ck-content pre.stylish-code-dark code {
	color: white;
}

.ck-content pre.stylish-code-bright {
	background: #dddfe0;
	color: #000;
	box-shadow: 5px 5px 0 #b3b3b3;
}

.ck-content pre.stylish-code-bright code {
	color: #222;
}

`,D={common:J,light:g,dark:v,additional:j},W=()=>{const i=localStorage.getItem("STRAPI_THEME")||"light",{theme:E,themeOverwrite:F}=globalThis.CKEditorConfig||{},y=F?E:{...D,...E};return(0,c.createGlobalStyle)`
       ${y.common}
       ${y[i]}
       ${y.additional}
   `},M=({isOpen:i,onChange:E,onToggle:F,editor:y,uploadConfig:{responsiveDimensions:K}})=>{const{components:L}=(0,p.tF)(),at=L["media-library"],dt=ut=>{let nt="";ut.map(({name:jt,url:wt,alt:Ct,formats:lt,mime:mt})=>{if(mt.includes("image"))if(lt&&K){let It="",X=Object.keys(lt).sort((ct,kt)=>lt[ct].width-lt[kt].width);X.map(ct=>It+=(0,p.vX)(lt[ct].url)+` ${lt[ct].width}w,`),nt+=`<img src="${wt}" alt="${Ct}" width="${lt[X[X.length-1]].width}px" srcset="${It}" />`}else nt+=`<img src="${wt}" alt="${Ct}" />`;else mt.includes("application/pdf")?nt+=`<a href="${(0,p.vX)(wt)}" download="${jt}">${jt||"Download PDF"}</a>`:mt.includes("video")&&(nt+=`<video controls><source src="${(0,p.vX)(wt)}" type="${mt}"></video>`)});const Q=y.data.processor.toView(nt),Y=y.data.toModel(Q);y.model.insertContent(Y),F()},B=ut=>{const nt=ut.map(Q=>({name:Q.name,alt:Q.alternativeText||Q.name,url:(0,p.vX)(Q.url),mime:Q.mime,formats:Q.formats}));dt(nt)};return i?(0,b.jsx)(at,{onClose:F,onSelectAssets:B}):null};M.defaultProps={isOpen:!1,onChange:()=>{},onToggle:()=>{}},M.propTypes={isOpen:f().bool,onChange:f().func,onToggle:f().func};const ot=M;var Z=n(78885),rt=n(64059);const yt=W(),$t=(0,c.default)("div")`${({editorStyles:i})=>i}`,gt=({onChange:i,name:E,value:F,disabled:y,preset:K,maxLength:L})=>{const[at,dt]=(0,I.useState)(!1),[B,ut]=(0,I.useState)(!1),[nt,Q]=(0,I.useState)(null),[Y,jt]=(0,I.useState)(null),[wt,Ct]=(0,I.useState)(!1),lt=(0,I.useRef)(null),mt=()=>ut(X=>!X),It=X=>X>L?Ct(!0):Ct(!1);return(0,I.useEffect)(()=>{(async()=>{const{currentConfig:X,uploadPluginConfig:ct}=await it(K,mt);jt(X),Q(ct)})()},[]),(0,b.jsxs)(b.Fragment,{children:[Y&&(0,b.jsx)(yt,{}),(0,b.jsxs)($t,{editorStyles:Y?.styles,children:[!Y&&(0,b.jsx)(Nt,{hasRadius:!0,background:"neutral100",children:(0,b.jsx)(a.a,{children:"Loading..."})}),Y&&(0,b.jsx)(s.CKEditor,{editor:window.CKEditor5.editorClassic.ClassicEditor,config:Y?.editorConfig,disabled:y,data:F,onReady:X=>{if(Y.editorConfig.WordCountPlugin){const ct=X.plugins.get("WordCount");ct.on("update",(Rt,At)=>It(At.characters)),lt.current?.appendChild(ct.wordCountContainer)}X.plugins.has("ImageUploadEditing")&&X.plugins.get("ImageUploadEditing").on("uploadComplete",(ct,{data:kt,imageElement:Rt})=>X.model.change(At=>At.setAttribute("alt",kt.alt,Rt))),dt(X)},onChange:(X,ct)=>{const kt=ct.getData();i({target:{name:E,value:kt}})}}),Y&&Y.editorConfig.WordCountPlugin&&(0,b.jsx)(Ut,{color:wt?"danger500":"neutral400",ref:lt,children:!at&&(0,b.jsx)(a.a,{small:!0,children:"Loading..."})}),nt&&(0,b.jsx)(ot,{isOpen:B,onToggle:mt,editor:at,uploadConfig:nt})]})]})};gt.defaultProps={value:"",disabled:!1},gt.propTypes={onChange:f().func.isRequired,name:f().string.isRequired,value:f().string,disabled:f().bool};const Ut=(0,c.default)(w.a)`
  display:flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  `,Nt=(0,c.default)(w.a)`
  display:flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  `,Bt=gt;var Ht=n(54894),bt=n(79521),xt=n(70505);const T=({name:i,attribute:E,onChange:F,value:y,intlLabel:K,labelAction:L,disabled:at,error:dt,description:B,required:ut})=>{const{formatMessage:nt}=(0,Ht.A)(),{preset:Q,maxLengthCharacters:Y,...jt}=E.options;return(0,b.jsx)(bt.Field,{name:i,id:i,error:dt,hint:B&&nt(B),children:(0,b.jsxs)(xt.Stack,{spacing:1,children:[(0,b.jsx)(bt.FieldLabel,{action:L,required:ut,children:nt(K)}),(0,b.jsx)(Bt,{disabled:at,name:i,onChange:F,value:y,preset:Q,maxLength:Y}),(0,b.jsx)(bt.FieldHint,{}),(0,b.jsx)(bt.FieldError,{})]})})};T.defaultProps={description:null,disabled:!1,error:null,labelAction:null,required:!1,value:""},T.propTypes={intlLabel:f().object.isRequired,onChange:f().func.isRequired,attribute:f().object.isRequired,name:f().string.isRequired,description:f().object,disabled:f().bool,error:f().string,labelAction:f().object,required:f().bool,value:f().string};const C=T}}]);
