(self.webpackChunkstrapi_pen=self.webpackChunkstrapi_pen||[]).push([[1874],{4191:(W,Z,s)=>{var n=s(87864),m=s(86386),y=s(45353),P=s(29884),O=s(74565),B=s(52689),x=s(48126),S=s(82388),z=s(82261);function _(ne,re,We){re.length?re=n(re,function(se){return z(se)?function(ie){return m(ie,se.length===1?se[0]:se)}:se}):re=[S];var pe=-1;re=n(re,B(y));var ce=P(ne,function(se,ie,oe){var Re=n(re,function(Ee){return Ee(se)});return{criteria:Re,index:++pe,value:se}});return O(ce,function(se,ie){return x(se,ie,We)})}W.exports=_},7233:(W,Z,s)=>{var n=s(97449);function m(y,P,O,B){return n(y,function(x,S,z){P(B,x,O(x),z)}),B}W.exports=m},14311:(W,Z,s)=>{var n=s(32628),m=s(50633),y=s(91522),P=s(34827),O=s(49605),B="[object Map]",x="[object Set]";function S(z){if(z==null)return 0;if(y(z))return P(z)?O(z):z.length;var _=m(z);return _==B||_==x?z.size:n(z).length}W.exports=S},22171:(W,Z,s)=>{var n=s(41225),m=s(52689),y=s(54765),P=y&&y.isRegExp,O=P?m(P):n;W.exports=O},29884:(W,Z,s)=>{var n=s(97449),m=s(91522);function y(P,O){var B=-1,x=m(P)?Array(P.length):[];return n(P,function(S,z,_){x[++B]=O(S,z,_)}),x}W.exports=y},33999:(W,Z,s)=>{var n=s(32193),m=n("length");W.exports=m},34827:(W,Z,s)=>{var n=s(81204),m=s(82261),y=s(51646),P="[object String]";function O(B){return typeof B=="string"||!m(B)&&y(B)&&n(B)==P}W.exports=O},35336:(W,Z,s)=>{var n=s(8928),m=s(88974),y=s(20598),P=s(57505),O=s(22171),B=s(49605),x=s(30660),S=s(88765),z=s(85306),_=30,ne="...",re=/\w*$/;function We(pe,ce){var se=_,ie=ne;if(P(ce)){var oe="separator"in ce?ce.separator:oe;se="length"in ce?S(ce.length):se,ie="omission"in ce?n(ce.omission):ie}pe=z(pe);var Re=pe.length;if(y(pe)){var Ee=x(pe);Re=Ee.length}if(se>=Re)return pe;var be=se-B(ie);if(be<1)return ie;var je=Ee?m(Ee,0,be).join(""):pe.slice(0,be);if(oe===void 0)return je+ie;if(Ee&&(be+=je.length-be),O(oe)){if(pe.slice(be).search(oe)){var gt,ae=je;for(oe.global||(oe=RegExp(oe.source,z(re.exec(oe))+"g")),oe.lastIndex=0;gt=oe.exec(ae);)var ot=gt.index;je=je.slice(0,ot===void 0?be:ot)}}else if(pe.indexOf(n(oe),be)!=be){var ht=je.lastIndexOf(oe);ht>-1&&(je=je.slice(0,ht))}return je+ie}W.exports=We},41225:(W,Z,s)=>{var n=s(81204),m=s(51646),y="[object RegExp]";function P(O){return m(O)&&n(O)==y}W.exports=P},41874:(W,Z,s)=>{"use strict";s.r(Z),s.d(Z,{A:()=>ct,C:()=>Wt,a:()=>_e,g:()=>c,i:()=>Ad,u:()=>Ue});var n=s(92132),m=s(21272),y=s(44370),P=s(43274),O=s(27026),B=s(80846),x=s(43242),S=s(57842),z=s(76106),_=s(57564),ne=s(68065),re=s(93744),We=s(53900),pe=s(15926),ce=s(44622),se=s(24122),ie=s(83724),oe=s(45024),Re=s(89787),Ee=s(35089),be=s(12050),je=s(81926),gt=s(72171),ae=s(69564),ot=s(6479),ht=s(91894),Ia=s(41516),Ra=s(96586),Ea=s(17122),ka=s(18670),sn=s(19106),Da=s(42035),Oa=s(71262),Ba=s(37373),Pa=s(168),wa=s(50642),Wa=s(32161),za=s(53432),N=s(8769),Ua=s(14718),K=s(54894),on=s(71389),Le=s(17703),k=s(63891);const ke=(e,t,a)=>{if(!t)return;if(typeof t=="object")return(Array.isArray(t)?t:[t?.desktop,t?.tablet,t?.mobile]).reduce((i,d,u)=>{if(d)switch(u){case 0:return`${i}${e}: ${a.spaces[d]};`;case 1:return`${i}${a.mediaQueries.tablet}{${e}: ${a.spaces[d]};}`;case 2:return`${i}${a.mediaQueries.mobile}{${e}: ${a.spaces[d]};}`;default:return i}return i},"");const o=a.spaces[t]??t;return`${e}: ${o};`};function Va(e,t){return typeof e=="string"?!1:t in e}function Wd(e){return e&&typeof e=="object"&&!Array.isArray(e)}function le(e,t,a){return t&&Va(e,t)?e[t]:a}const Ga={color:!0,cursor:!0,height:!0,width:!0},Q=k.default.div.withConfig({shouldForwardProp:(e,t)=>!Ga[e]&&t(e)})`
  // Font
  font-size: ${({fontSize:e,theme:t})=>le(t.fontSizes,e,e)};

  // Colors
  background: ${({theme:e,background:t})=>le(e.colors,t,t)};
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};

  // Spaces
  ${({theme:e,padding:t})=>ke("padding",t,e)}
  ${({theme:e,paddingTop:t})=>ke("padding-top",t,e)}
  ${({theme:e,paddingRight:t})=>ke("padding-right",t,e)}
  ${({theme:e,paddingBottom:t})=>ke("padding-bottom",t,e)}
  ${({theme:e,paddingLeft:t})=>ke("padding-left",t,e)}
  ${({theme:e,marginLeft:t})=>ke("margin-left",t,e)}
  ${({theme:e,marginRight:t})=>ke("margin-right",t,e)}
  ${({theme:e,marginTop:t})=>ke("margin-top",t,e)}
  ${({theme:e,marginBottom:t})=>ke("margin-bottom",t,e)}

  // Responsive hiding
  ${({theme:e,hiddenS:t})=>t?`${e.mediaQueries.tablet} { display: none; }`:void 0}
  ${({theme:e,hiddenXS:t})=>t?`${e.mediaQueries.mobile} { display: none; }`:void 0}
  

  // Borders
  border-radius: ${({theme:e,hasRadius:t,borderRadius:a})=>t?e.borderRadius:a};
  border-style: ${({borderStyle:e})=>e};
  border-width: ${({borderWidth:e})=>e};
  border-color: ${({borderColor:e,theme:t})=>le(t.colors,e,void 0)};
  border: ${({theme:e,borderColor:t,borderStyle:a,borderWidth:o})=>{if(t&&!a&&typeof o>"u")return`1px solid ${e.colors[t]}`}};

  // Shadows
  box-shadow: ${({theme:e,shadow:t})=>le(e.shadows,t,void 0)};

  // Handlers
  pointer-events: ${({pointerEvents:e})=>e};
  &:hover {
    ${({_hover:e,theme:t})=>e?e(t):void 0}
  }

  // Display
  display: ${({display:e})=>e};

  // Position
  position: ${({position:e})=>e};
  left: ${({left:e,theme:t})=>le(t.spaces,e,e)};
  right: ${({right:e,theme:t})=>le(t.spaces,e,e)};
  top: ${({top:e,theme:t})=>le(t.spaces,e,e)};
  bottom: ${({bottom:e,theme:t})=>le(t.spaces,e,e)};
  z-index: ${({zIndex:e})=>e};
  overflow: ${({overflow:e})=>e};

  // Size
  width: ${({width:e,theme:t})=>le(t.spaces,e,e)};
  max-width: ${({maxWidth:e,theme:t})=>le(t.spaces,e,e)};
  min-width: ${({minWidth:e,theme:t})=>le(t.spaces,e,e)};
  height: ${({height:e,theme:t})=>le(t.spaces,e,e)};
  max-height: ${({maxHeight:e,theme:t})=>le(t.spaces,e,e)};
  min-height: ${({minHeight:e,theme:t})=>le(t.spaces,e,e)};

  // Animation
  transition: ${({transition:e})=>e};
  transform: ${({transform:e})=>e};
  animation: ${({animation:e})=>e};

  //Flexbox children props
  flex-shrink: ${({shrink:e})=>e};
  flex-grow: ${({grow:e})=>e};
  flex-basis: ${({basis:e})=>e};
  flex: ${({flex:e})=>e};

  // Text
  text-align: ${({textAlign:e})=>e};
  text-transform: ${({textTransform:e})=>e};
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};

  // Cursor
  cursor: ${({cursor:e})=>e};
`,Ha=(0,k.default)(Q)`
  display: grid;
  grid-template-columns: repeat(${({gridCols:e})=>e}, 1fr);
  ${({theme:e,gap:t})=>ke("gap",t,e)}
`,Ya=e=>{const{gap:t="0",gridCols:a=12,...o}=e;return(0,n.jsx)(Ha,{gap:t,gridCols:a,...o})},Za=`${232/16}rem`,Ka=(0,k.default)(Ya)`
  width: ${Za};
  background: ${({theme:e})=>e.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:e})=>e.colors.neutral200};
  z-index: 1;
`,Qa=({ariaLabel:e,...t})=>(0,n.jsx)(Ka,{"aria-label":e,as:"nav",...t});var yt=s(67067);const Xa={DOWN:"ArrowDown",UP:"ArrowUp",RIGHT:"ArrowRight",LEFT:"ArrowLeft",ESCAPE:"Escape",ENTER:"Enter",SPACE:" ",TAB:"Tab",END:"End",HOME:"Home",DELETE:"Delete",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",BACKSPACE:"Backspace",CLEAR:"Clear"},Ja=m["useId".toString()]||(()=>{});let qa=0;const et=e=>{const[t,a]=(0,m.useState)(Ja());return(0,m.useLayoutEffect)(()=>{e||a(o=>o??String(qa++))},[e]),e?.toString()??(t||"")},_a=e=>{const t=(0,m.useRef)();return(0,m.useEffect)(()=>{t.current=e}),t.current},es=(0,k.default)(Q)`
  height: 1px;
  border: none;
  /* If contained in a Flex parent we want to prevent the Divider to shink */
  flex-shrink: 0;
  ${({unsetMargin:e})=>e?"margin: 0;":""}
`,ts=({unsetMargin:e=!0,...t})=>(0,n.jsx)(es,{...t,background:"neutral150",as:"hr",unsetMargin:e}),ns=e=>(0,n.jsx)("form",{...e,role:"search"});var as=s(98889);function ss(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rn(...e){return t=>e.forEach(a=>ss(a,t))}function zd(...e){return React.useCallback(rn(...e),e)}const Ud=e=>({theme:t,size:a})=>t.sizes[e][a],ln=(e="&")=>({theme:t,hasError:a=!1})=>(0,k.css)`
    outline: none;
    box-shadow: 0;
    transition-property: border-color, box-shadow, fill;
    transition-duration: 0.2s;

    ${e}:focus-within {
      border: 1px solid ${a?t.colors.danger600:t.colors.primary600};
      box-shadow: ${a?t.colors.danger600:t.colors.primary600} 0px 0px 0px 2px;
    }
  `,dn=({theme:e})=>(0,k.css)`
  position: relative;
  outline: none;

  &:after {
    transition-property: all;
    transition-duration: 0.2s;
    border-radius: 8px;
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    border: 2px solid transparent;
  }

  &:focus-visible {
    outline: none;
    &:after {
      border-radius: 8px;
      content: '';
      position: absolute;
      top: -5px;
      bottom: -5px;
      left: -5px;
      right: -5px;
      border: 2px solid ${e.colors.primary600};
    }
  }
`,cn=(0,m.createContext)({id:"",required:!1}),un=()=>(0,m.useContext)(cn),os={direction:!0},ue=(0,k.default)(Q).withConfig({shouldForwardProp:(e,t)=>!os[e]&&t(e)})`
  align-items: ${({alignItems:e="center"})=>e};
  display: ${({display:e="flex",inline:t})=>t?"inline-flex":e};
  flex-direction: ${({direction:e="row"})=>e};
  flex-shrink: ${({shrink:e})=>e};
  flex-wrap: ${({wrap:e})=>e};
  ${({gap:e,theme:t})=>ke("gap",e,t)};
  justify-content: ${({justifyContent:e})=>e};
`,mn={S:6.5,M:10.5},rs=(0,m.forwardRef)(({endAction:e,startAction:t,disabled:a=!1,onChange:o,size:r="M",...l},i)=>{const{id:d,error:u,hint:p,name:g,required:f}=un();let j;u?j=`${d}-error`:p&&(j=`${d}-hint`);const A=Boolean(u),v=M=>{!a&&o&&o(M)};return(0,n.jsxs)($t,{justifyContent:"space-between",hasError:A,disabled:a,children:[t?(0,n.jsx)(Q,{paddingLeft:3,paddingRight:2,children:t}):null,(0,n.jsx)(is,{id:d,name:g,ref:i,"aria-describedby":j,"aria-invalid":A,"aria-disabled":a,disabled:a,"data-disabled":a?"":void 0,hasLeftAction:Boolean(t),hasRightAction:Boolean(e),onChange:v,"aria-required":f,$size:r,...l}),e?(0,n.jsx)(Q,{paddingLeft:2,paddingRight:3,children:e}):null]})}),is=k.default.input`
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius};
  padding-bottom: ${({$size:e})=>`${mn[e]/16}rem`};
  padding-left: ${({theme:e,hasLeftAction:t})=>t?0:e.spaces[4]};
  padding-right: ${({theme:e,hasRightAction:t})=>t?0:e.spaces[4]};
  padding-top: ${({$size:e})=>`${mn[e]/16}rem`};
  cursor: ${e=>e["aria-disabled"]?"not-allowed":void 0};

  color: ${({theme:e})=>e.colors.neutral800};
  font-weight: 400;
  font-size: ${e=>e.theme.fontSizes[2]};
  display: block;
  width: 100%;
  background: inherit;

  ::placeholder {
    color: ${({theme:e})=>e.colors.neutral500};
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
`,$t=(0,k.default)(ue)`
  border: 1px solid ${({theme:e,hasError:t})=>t?e.colors.danger600:e.colors.neutral200};
  border-radius: ${({theme:e})=>e.borderRadius};
  background: ${({theme:e})=>e.colors.neutral0};
  ${ln()}

  ${({theme:e,disabled:t})=>t?(0,k.css)`
          color: ${e.colors.neutral600};
          background: ${e.colors.neutral150};
        `:void 0}
`,bt=k.default.div`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`,ls=(0,k.default)(ue)`
  font-size: 1.6rem;
  padding: 0;
`,ds=(0,m.forwardRef)(({label:e,children:t,...a},o)=>(0,n.jsxs)(ls,{justifyContent:"unset",background:"transparent",borderStyle:"none",type:"button",...a,as:"button",ref:o,children:[(0,n.jsx)(bt,{as:"span",children:e}),(0,m.cloneElement)(t,{"aria-hidden":!0,focusable:!1})]})),cs=(0,m.forwardRef)(({children:e,name:t,error:a,hint:o,id:r,required:l=!1,...i},d)=>{const u=et(r),p=(0,m.useMemo)(()=>({name:t,id:u,error:a,hint:o,required:l}),[a,u,o,t,l]);return(0,n.jsx)(Q,{ref:d,...i,children:(0,n.jsx)(cn.Provider,{value:p,children:e})})}),us="[@strapi/design-system]:",ms=e=>{const t=e;let a=!1;if(typeof t!="function")throw new TypeError(`${us} once requires a function parameter`);return(...o)=>{a||(t(...o),a=!0)}},pn="alpha",fn="beta",gn="delta",hn="epsilon",St="omega",yn="pi",bn="sigma",Vd=[pn,fn,gn,hn,St,yn,bn],ps=({ellipsis:e=!1})=>e&&`
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,fs=({variant:e=St,theme:t})=>{switch(e){case pn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[5]};
        line-height: ${t.lineHeights[2]};
      `;case fn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[4]};
        line-height: ${t.lineHeights[1]};
      `;case gn:return`
        font-weight: ${t.fontWeights.semiBold};
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[2]};
      `;case hn:return`
        font-size: ${t.fontSizes[3]};
        line-height: ${t.lineHeights[6]};
      `;case St:return`
        font-size: ${t.fontSizes[2]};
        line-height: ${t.lineHeights[4]};
      `;case yn:return`
        font-size: ${t.fontSizes[1]};
        line-height: ${t.lineHeights[3]};
      `;case bn:return`
        font-weight: ${t.fontWeights.bold};
        font-size: ${t.fontSizes[0]};
        line-height: ${t.lineHeights[5]};
        text-transform: uppercase;
      `;default:return`
        font-size: ${t.fontSizes[2]};
      `}},gs={fontSize:!0,fontWeight:!0},q=k.default.span.withConfig({shouldForwardProp:(e,t)=>!gs[e]&&t(e)})`
  ${fs}
  ${ps}

  // These properties need to come after {variantStyle}, because they might
  // overwrite a variant attribute
  font-weight: ${({theme:e,fontWeight:t})=>le(e.fontWeights,t,void 0)};
  font-size: ${({theme:e,fontSize:t})=>le(e.fontSizes,t,void 0)};
  line-height: ${({theme:e,lineHeight:t})=>le(e.lineHeights,t,t)};
  color: ${({theme:e,textColor:t})=>e.colors[t||"neutral800"]};
  text-align: ${({textAlign:e})=>e};
  text-decoration: ${({textDecoration:e})=>e};
  text-transform: ${({textTransform:e})=>e};
`,hs=ms(console.warn),ys=(0,m.forwardRef)(({children:e,action:t,required:a,...o},r)=>{const{id:l,required:i}=un(),d=i||a;return a!==void 0&&hs('Deprecation warning: Usage of "required" prop in FieldLabel component is deprecated. This is discouraged and will be removed in the next major release. Please use the Field component to share the required prop.'),(0,n.jsxs)(bs,{ref:r,variant:"pi",textColor:"neutral800",htmlFor:l,fontWeight:"bold",as:"label",...o,children:[e,d&&(0,n.jsx)(xs,{textColor:"danger600",children:"*"}),t&&(0,n.jsx)(vs,{marginLeft:1,children:t})]})}),bs=(0,k.default)(q)`
  display: flex;
  align-items: center;
`,xs=(0,k.default)(q)`
  line-height: 0;
`,vs=(0,k.default)(ue)`
  line-height: 0;

  svg path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Cs=(0,k.default)(as.A)`
  font-size: 0.5rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral400};
  }
`,xn=(0,k.default)(yt.A)`
  font-size: 0.8rem;
  path {
    fill: ${({theme:e})=>e.colors.neutral800};
  }
`,As=k.default.div`
  border-radius: ${({theme:e})=>e.borderRadius};
  box-shadow: ${({theme:e})=>e.shadows.filterShadow};

  &:focus-within {
    ${xn} {
      path {
        fill: ${({theme:e})=>e.colors.primary600};
      }
    }
  }

  ${$t} {
    border: 1px solid transparent;
  }

  ${ln($t)}
`,Ts=(0,m.forwardRef)(({name:e,size:t="M",children:a,value:o="",onClear:r,clearLabel:l,...i},d)=>{const u=(0,m.useRef)(null),p=o.length>0,g=j=>{r(j),u.current.focus()},f=rn(d,u);return(0,n.jsx)(As,{children:(0,n.jsxs)(cs,{name:e,children:[(0,n.jsx)(bt,{children:(0,n.jsx)(ys,{children:a})}),(0,n.jsx)(rs,{ref:f,value:o,startAction:(0,n.jsx)(xn,{"aria-hidden":!0}),size:t,endAction:p?(0,n.jsx)(ds,{label:l,onClick:g,children:(0,n.jsx)(Cs,{})}):void 0,...i})]})})}),js=e=>{const[t,a]=(0,m.useState)(!1),o=(0,m.useRef)(null),r=()=>{typeof o.current=="number"&&(clearTimeout(o.current),o.current=null)};return(0,m.useEffect)(()=>()=>{r()},[]),{visible:t,onFocus:()=>{a(!0)},onBlur:()=>{a(!1)},onMouseEnter:()=>{o.current=setTimeout(()=>{a(!0)},e)},onMouseLeave:()=>{r(),a(!1)}}},He=8,Ms=(e,t)=>{const a=(e.width-t.width)/2,o=t.left-a,r=t.top+t.height+He+window.pageYOffset;return{left:o,top:r}},$s=(e,t)=>{const a=(e.height-t.height)/2,o=t.left+t.width+He,r=t.top-a+window.pageYOffset;return{left:o,top:r}},Ss=(e,t)=>{const a=(e.height-t.height)/2,o=t.left-e.width-He,r=t.top-a+window.pageYOffset;return{left:o,top:r}},Ns=(e,t)=>{const a=(e.width-t.width)/2;let o=t.left-a,r=t.top-e.height-He+window.pageYOffset;const l=window.innerWidth-t.right;return t.left+e.width-l>window.innerWidth?(o=t.left-e.width-He,r=t.top+window.scrollY-t.height/2):o<0?(o=t.width+t.left+He,r=t.top+window.scrollY-e.height/2+He):r<0&&o>0&&(r=t.top+t.height+He),{left:o,top:r}},Ls=(e,t,a)=>{const o=e.getBoundingClientRect(),r=t.getBoundingClientRect();return a==="bottom"?Ms(o,r):a==="right"?$s(o,r):a==="left"?Ss(o,r):Ns(o,r)},Fs=(e,t)=>{const a=(0,m.useRef)(null),o=(0,m.useRef)(null);return(0,m.useLayoutEffect)(()=>{if(e){const r=a.current,l=o.current;if(r&&l){const i=Ls(r,l,t);r.style.left=`${i.left}px`,r.style.top=`${i.top}px`}}},[t,e]),{tooltipWrapperRef:a,toggleSourceRef:o}};var Is=s(26509);const vn=m.forwardRef(({container:e=globalThis?.document?.body,...t},a)=>e?(0,Is.createPortal)((0,n.jsx)(Q,{ref:a,...t}),e):null);vn.displayName="Portal";const Rs=(0,k.default)(Q)`
  /* z-index exist because of its position inside Modals */
  z-index: 4;
  display: ${({visible:e})=>e?"revert":"none"};
`,Es=({children:e,label:t,description:a,delay:o=500,position:r="top",id:l,...i})=>{const d=et(l),u=et(),{visible:p,...g}=js(o),{tooltipWrapperRef:f,toggleSourceRef:j}=Fs(p,r),A=m.cloneElement(e,{tabIndex:0,"aria-labelledby":t?d:void 0,"aria-describedby":a?d:void 0,...g});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(vn,{children:(0,n.jsxs)(Rs,{id:d,background:"neutral900",hasRadius:!0,padding:2,role:"tooltip",ref:f,visible:p,position:"absolute",...i,children:[p&&(0,n.jsx)(bt,{id:u,children:a}),(0,n.jsx)(q,{as:"p",variant:"pi",fontWeight:"bold",textColor:"neutral0",children:t||a})]})}),(0,n.jsx)("span",{ref:j,children:A})]})},ks=(0,k.default)(ue)`
  > svg {
    height: ${({theme:e})=>e.spaces[3]};
    width: ${({theme:e})=>e.spaces[3]};

    > g,
    path {
      fill: ${({theme:e})=>e.colors.neutral0};
    }
  }

  &[aria-disabled='true'] {
    pointer-events: none;
  }

  ${dn}
`,Nt=m.forwardRef(({disabled:e,children:t,background:a="neutral0",...o},r)=>(0,n.jsx)(ks,{ref:r,"aria-disabled":e,as:"button",type:"button",disabled:e,padding:2,hasRadius:!0,background:a,borderColor:"neutral200",cursor:"pointer",...o,children:t}));Nt.displayName="BaseButton";const Ds="tertiary",rt="secondary",Os=["S","M","L"],Bs=[Ds,rt],Ps=m.forwardRef(({label:e,background:t,borderWidth:a,noBorder:o=!1,children:r,icon:l,disabled:i=!1,onClick:d,size:u=Os[0],"aria-label":p,variant:g=Bs[0],...f},j)=>{const A=M=>{!i&&d&&d(M)},v=(0,n.jsxs)(Cn,{"aria-disabled":i,background:i?"neutral150":t,borderWidth:o?0:a,justifyContent:"center",...f,ref:j,size:u,onClick:A,variant:g,children:[(0,n.jsx)(bt,{as:"span",children:e??p}),m.cloneElement(l||r,{"aria-hidden":!0,focusable:!1})]});return e?(0,n.jsx)(Es,{label:e,children:v}):v}),Cn=(0,k.default)(Nt)`
  background-color: ${({theme:e,variant:t})=>{if(t===rt)return e.colors.primary100}};
  border-color: ${({theme:e,variant:t})=>t===rt?e.colors.primary200:e.colors.neutral200};
  height: ${({theme:e,size:t})=>e.sizes.button[t]};
  width: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    g,
    path {
      fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary500:e.colors.neutral500};
    }
  }

  :hover,
  :focus {
    svg {
      g,
      path {
        fill: ${({theme:e,variant:t})=>t===rt?e.colors.primary600:e.colors.neutral600};
      }
    }
  }

  &[aria-disabled='true'] {
    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral600};
      }
    }
  }
`,Gd=(0,k.default)(ue)`
  & span:first-child button {
    border-left: 1px solid ${({theme:e})=>e.colors.neutral200};
    border-radius: ${({theme:e})=>`${e.borderRadius} 0 0 ${e.borderRadius}`};
  }

  & span:last-child button {
    border-radius: ${({theme:e})=>`0 ${e.borderRadius} ${e.borderRadius} 0`};
  }

  & ${Cn} {
    border-radius: 0;
    border-left: none;

    svg {
      path {
        fill: ${({theme:e})=>e.colors.neutral700};
      }
    }

    &:hover {
      background-color: ${({theme:e})=>e.colors.neutral100};

      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral800};
        }
      }
    }

    &:active {
      background-color: ${({theme:e})=>e.colors.neutral150};
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral900};
        }
      }
    }

    &[aria-disabled='true'] {
      svg {
        path {
          fill: ${({theme:e})=>e.colors.neutral600};
        }
      }
    }
  }
`,An=(0,k.default)(ts)`
  width: ${24/16}rem;
  background-color: ${({theme:e})=>e.colors.neutral200};
`,ws=({as:e="h2",label:t,searchLabel:a="",searchable:o=!1,onChange:r=()=>{},value:l="",onClear:i=()=>{},onSubmit:d=()=>{},id:u})=>{const[p,g]=(0,m.useState)(!1),f=_a(p),j=et(u),A=(0,m.useRef)(void 0),v=(0,m.useRef)(void 0);(0,m.useEffect)(()=>{p&&A.current&&A.current.focus(),f&&!p&&v.current&&v.current.focus()},[p,f]);const M=()=>{g(F=>!F)},U=F=>{i(F),A.current.focus()},$=F=>{F.relatedTarget?.id!==j&&g(!1)},L=F=>{F.key===Xa.ESCAPE&&g(!1)};return p?(0,n.jsxs)(Q,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,n.jsx)(ns,{children:(0,n.jsx)(Ts,{name:"searchbar",value:l,onChange:r,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:L,ref:A,onBlur:$,onClear:U,onSubmit:d,clearLabel:"Clear",size:"S",children:a})}),(0,n.jsx)(Q,{paddingLeft:2,paddingTop:4,children:(0,n.jsx)(An,{})})]}):(0,n.jsxs)(Q,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,n.jsxs)(ue,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,n.jsx)(q,{variant:"beta",as:e,children:t}),o&&(0,n.jsx)(Ps,{ref:v,onClick:M,label:a,icon:(0,n.jsx)(yt.A,{})})]}),(0,n.jsx)(Q,{paddingTop:4,children:(0,n.jsx)(An,{})})]})},Ws=({children:e,spacing:t=2,horizontal:a=!1,...o})=>(0,n.jsx)(Q,{paddingTop:2,paddingBottom:4,children:(0,n.jsx)(ue,{as:"ol",gap:t,direction:a?"row":"column",alignItems:a?"center":"stretch",...o,children:m.Children.map(e,(r,l)=>(0,n.jsx)("li",{children:r},l))})});var Lt=s(28556);const Tn=(0,k.default)(ue)`
  border: none;
  padding: 0;
  background: transparent;
`,zs=k.default.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Us=({collapsable:e=!1,label:t,onClick:a=()=>{},ariaExpanded:o,ariaControls:r})=>e?(0,n.jsxs)(Tn,{as:"button",onClick:a,"aria-expanded":o,"aria-controls":r,textAlign:"left",children:[(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})}),e&&(0,n.jsx)(zs,{rotated:o,children:(0,n.jsx)(Lt.A,{"aria-hidden":!0})})]}):(0,n.jsx)(Tn,{children:(0,n.jsx)(Q,{paddingRight:1,children:(0,n.jsx)(q,{variant:"sigma",textColor:"neutral600",children:t})})}),Vs=(0,k.default)(ue)`
  border-radius: ${({theme:e,size:t})=>t==="S"?"2px":e.borderRadius};
  height: ${({size:e,theme:t})=>t.sizes.badge[e]};
`,Gs=({active:e=!1,size:t="M",textColor:a="neutral600",backgroundColor:o="neutral150",children:r,minWidth:l=5,...i})=>{const d=t==="S"?1:2;return(0,n.jsx)(Vs,{inline:!0,alignItem:"center",justifyContent:"center",minWidth:l,paddingLeft:d,paddingRight:d,background:e?"primary200":o,size:t,...i,children:(0,n.jsx)(q,{variant:"sigma",textColor:e?"primary600":a,children:r})})},Hs=(0,k.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral500};
    }
  }
`,Ys=({collapsable:e=!1,label:t,badgeLabel:a,children:o,id:r})=>{const[l,i]=(0,m.useState)(!0),d=et(r),u=()=>{i(p=>!p)};return(0,n.jsxs)(ue,{direction:"column",alignItems:"stretch",gap:1,children:[(0,n.jsx)(Hs,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsxs)(Q,{position:"relative",paddingRight:a?6:0,children:[(0,n.jsx)(Us,{onClick:u,ariaExpanded:l,ariaControls:d,collapsable:e,label:t}),a&&(0,n.jsx)(Gs,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:a})]})}),(!e||l)&&(0,n.jsx)("ol",{id:d,children:m.Children.map(o,(p,g)=>(0,n.jsx)("li",{children:p},g))})]})},Zs=(0,k.default)(Q)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:e})=>e.colors.neutral700};
    }
  }
`,Ks=k.default.button`
  border: none;
  padding: 0;
  background: transparent;
  display: flex;
  align-items: center;
`,Qs=k.default.div`
  display: flex;
  align-items: center;
  width: ${12/16}rem;
  transform: rotateX(${({rotated:e})=>e?"0deg":"180deg"});
`,Xs=({label:e,children:t,id:a})=>{const[o,r]=(0,m.useState)(!0),l=et(a),i=()=>{r(d=>!d)};return(0,n.jsxs)(Q,{children:[(0,n.jsx)(Zs,{paddingLeft:7,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,n.jsx)(ue,{justifyContent:"space-between",children:(0,n.jsxs)(Ks,{onClick:i,"aria-expanded":o,"aria-controls":l,children:[(0,n.jsx)(Qs,{rotated:o,children:(0,n.jsx)(Lt.A,{"aria-hidden":!0})}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",fontWeight:"semiBold",textColor:"neutral800",children:e})})]})})}),o&&(0,n.jsx)("ul",{id:l,children:m.Children.map(t,(d,u)=>(0,n.jsx)("li",{children:d},u))})]})};var Js=s(47576);const Ft=m.forwardRef(({href:e,rel:t="noreferrer noopener",target:a="_self",disabled:o=!1,isExternal:r=!1,...l},i)=>(0,n.jsx)(Q,{as:"a",ref:i,target:r?"_blank":a,rel:r?t:void 0,href:o?"#":e,"aria-disabled":o,cursor:"pointer",...l}));Ft.displayName="BaseLink";const qs=(0,k.default)(Q)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:e})=>e.colors.neutral800};
  svg > * {
    fill: ${({theme:e})=>e.colors.neutral600};
  }

  &.active {
    ${({theme:e})=>`
      background-color: ${e.colors.primary100};
      border-right: 2px solid ${e.colors.primary600};
      svg > * {
        fill: ${e.colors.primary700};
      }
      ${q} {
        color: ${e.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,jn=(0,k.default)(Js.A)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:e,$active:t})=>t?e.colors.primary600:e.colors.neutral600};
  }
`,_s=k.default.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,Mn=m.forwardRef(({children:e,icon:t=null,withBullet:a=!1,as:o=Ft,isSubSectionChild:r=!1,...l},i)=>(0,n.jsxs)(qs,{as:o,icon:t,background:"neutral100",paddingLeft:r?9:7,paddingBottom:2,paddingTop:2,ref:i,...l,children:[(0,n.jsxs)(ue,{children:[t?(0,n.jsx)(_s,{children:t}):(0,n.jsx)(jn,{}),(0,n.jsx)(Q,{paddingLeft:2,children:(0,n.jsx)(q,{as:"span",children:e})})]}),a&&(0,n.jsx)(Q,{as:ue,paddingRight:4,children:(0,n.jsx)(jn,{$active:!0})})]}));var eo=s(44010);const to=(0,k.default)(Ft)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  gap: ${({theme:e})=>e.spaces[2]};
  pointer-events: ${({disabled:e})=>e?"none":void 0};

  svg {
    font-size: ${10/16}rem;

    path {
      fill: ${({disabled:e,theme:t})=>e?t.colors.neutral600:t.colors.primary600};
    }
  }

  &:hover {
    color: ${({theme:e})=>e.colors.primary500};
  }

  &:active {
    color: ${({theme:e})=>e.colors.primary700};
  }

  ${dn};
`,xt=m.forwardRef(({children:e,href:t,disabled:a=!1,startIcon:o,endIcon:r,isExternal:l=!0,...i},d)=>(0,n.jsxs)(to,{ref:d,href:t,disabled:a,isExternal:l,...i,children:[o,(0,n.jsx)(q,{textColor:a?"neutral600":"primary600",children:e}),r,t&&!r&&l&&(0,n.jsx)(eo.A,{})]}));xt.displayName="Link";const $n=()=>(0,n.jsx)(Q,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral500",children:"/"})});$n.displayName="Divider";const no=(0,k.default)(ue)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:e})=>`calc(-1*${e.spaces[2]})`};
  }
`,Sn=({label:e,children:t,...a})=>{const o=m.Children.toArray(t);return(0,n.jsx)(Q,{"aria-label":e,...a,children:(0,n.jsx)(no,{as:"ol",children:m.Children.map(o,(r,l)=>{const i=o.length>1&&l+1<o.length;return(0,n.jsxs)(ue,{inline:!0,as:"li",children:[r,i&&(0,n.jsx)($n,{})]})})})})};Sn.displayName="Breadcrumbs";const Nn=({children:e,isCurrent:t=!1,...a})=>(0,n.jsx)(Q,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,n.jsx)(q,{variant:"pi",textColor:"neutral800",fontWeight:t?"bold":"normal","aria-current":t,...a,children:e})});Nn.displayName="Crumb";var Pe=s(96234),ao=s(4702),so=s(16034);const It="success-light",Rt="danger-light",vt="default",it="tertiary",lt="secondary",Ln="danger",Fn="success",Et="ghost",kt=[It,Rt],oo=[vt,it,lt,Ln,Fn,Et,...kt],ro=["S","M","L"],Me=e=>e===It||e===Rt?`${e.substring(0,e.lastIndexOf("-"))}`:e===it?"neutral":e===vt||e===lt||oo.every(t=>t!==e)?"primary":`${e}`,In=({theme:e})=>`
    border: 1px solid ${e.colors.neutral200};
    background: ${e.colors.neutral150};
    ${q} {
      color: ${e.colors.neutral600};
    }
    svg {
      > g, path {
        fill: ${e.colors.neutral600};
      }
    }
  `,io=({theme:e,variant:t})=>[...kt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
    `:t===it?`
      background-color: ${e.colors.neutral100};
    `:t===Et?`
      background-color: ${e.colors.neutral100};
    `:t===vt?`
      border: 1px solid ${e.colors.buttonPrimary500};
      background: ${e.colors.buttonPrimary500};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}500`]};
    background: ${e.colors[`${Me(t)}500`]};
  `,lo=({theme:e,variant:t})=>[...kt,lt].includes(t)?`
      background-color: ${e.colors.neutral0};
      border: 1px solid ${e.colors[`${Me(t)}600`]};
      ${q} {
        color: ${e.colors[`${Me(t)}600`]};
      }
      svg {
        > g, path {
          fill: ${e.colors[`${Me(t)}600`]};
        }
      }
    `:t===it?`
      background-color: ${e.colors.neutral150};
    `:`
    border: 1px solid ${e.colors[`${Me(t)}600`]};
    background: ${e.colors[`${Me(t)}600`]};
  `,co=({theme:e,variant:t})=>{switch(t){case Rt:case It:case lt:return`
          border: 1px solid ${e.colors[`${Me(t)}200`]};
          background: ${e.colors[`${Me(t)}100`]};
          ${q} {
            color: ${e.colors[`${Me(t)}700`]};
          }
          svg {
            > g, path {
              fill: ${e.colors[`${Me(t)}700`]};
            }
          }
        `;case it:return`
          border: 1px solid ${e.colors.neutral200};
          background: ${e.colors.neutral0};
          ${q} {
            color: ${e.colors.neutral800};
          }
          svg {
            > g, path {
              fill: ${e.colors.neutral800};
            }
          }
        `;case Et:return`
        border: 1px solid transparent;
        background: transparent;

        ${q} {
          color: ${e.colors.neutral800};
        }

        svg {
          > g, path {
            fill: ${e.colors.neutral500};
          }
        }
      `;case Fn:case Ln:return`
          border: 1px solid ${e.colors[`${Me(t)}600`]};
          background: ${e.colors[`${Me(t)}600`]};
          ${q} {
            color: ${e.colors.neutral0};
          }
        `;default:return`
          svg {
            > g, path {
              fill: ${e.colors.buttonNeutral0};
            }
          }
        `}},uo=(0,k.keyframes)`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,mo=(0,k.default)(so.A)`
  animation: ${uo} 2s infinite linear;
  will-change: transform;
`,po=(0,k.default)(Nt)`
  height: ${({theme:e,size:t})=>e.sizes.button[t]};

  svg {
    height: ${12/16}rem;
    width: auto;
  }

  &[aria-disabled='true'] {
    ${In}

    &:active {
      ${In}
    }
  }

  &:hover {
    ${io}
  }

  &:active {
    ${lo}
  }

  ${co}
`,Rn=m.forwardRef(({variant:e=vt,startIcon:t,endIcon:a,disabled:o=!1,children:r,onClick:l,size:i=ro[0],loading:d=!1,fullWidth:u=!1,...p},g)=>{const f=o||d,j=A=>{!f&&l&&l(A)};return(0,n.jsxs)(po,{ref:g,"aria-disabled":f,disabled:f,size:i,variant:e,onClick:j,fullWidth:u,alignItems:"center",background:"buttonPrimary600",borderColor:"buttonPrimary600",gap:2,inline:u,justifyContent:u?"center":void 0,paddingLeft:4,paddingRight:4,width:u?"100%":void 0,...p,children:[(t||d)&&(0,n.jsx)(Q,{"aria-hidden":!0,children:d?(0,n.jsx)(mo,{}):t}),(0,n.jsx)(q,{variant:i==="S"?"pi":void 0,fontWeight:"bold",textColor:"buttonNeutral0",children:r}),a&&(0,n.jsx)(ue,{"aria-hidden":!0,children:a})]})});Rn.displayName="Button";const fo=Pe.bL,go=(0,m.forwardRef)(({size:e,endIcon:t=(0,n.jsx)(Lt.A,{width:`${6/16}rem`,height:`${4/16}rem`,"aria-hidden":!0}),...a},o)=>(0,n.jsx)(Pe.l9,{asChild:!0,children:(0,n.jsx)(Rn,{ref:o,type:"button",variant:"ghost",endIcon:t,paddingTop:e==="S"?1:2,paddingBottom:e==="S"?1:2,paddingLeft:e==="S"?3:4,paddingRight:e==="S"?3:4,...a})})),ho=(0,m.forwardRef)(({children:e,intersectionId:t,popoverPlacement:a="bottom-start",...o},r)=>{const[l,i]=a.split("-");return(0,n.jsx)(Pe.ZL,{children:(0,n.jsx)(Pe.UC,{align:i,side:l,loop:!0,asChild:!0,children:(0,n.jsxs)(En,{ref:r,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",position:"relative",overflow:"auto",...o,children:[e,(0,n.jsx)(Q,{id:t,width:"100%",height:"1px"})]})})})}),En=(0,k.default)(ue)`
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
`,yo=({onSelect:e,disabled:t=!1,...a})=>(0,n.jsx)(Pe.q7,{asChild:!0,onSelect:e,disabled:t,children:a.isLink||a.isExternal?(0,n.jsx)(bo,{color:"neutral800",...a,isExternal:a.isExternal??!1,children:(0,n.jsx)(q,{children:a.children})}):(0,n.jsx)(Dn,{cursor:"pointer",color:"neutral800",background:"transparent",borderStyle:"none",...a,children:(0,n.jsx)(q,{children:a.children})})}),kn=({theme:e})=>(0,k.css)`
  text-align: left;
  width: 100%;
  border-radius: ${e.borderRadius};
  padding: ${e.spaces[2]} ${e.spaces[4]};

  ${q} {
    color: inherit;
  }

  &[aria-disabled] {
    cursor: not-allowed;

    ${q} {
      color: ${e.colors.neutral500};
    }
  }

  &[data-highlighted] {
    background-color: ${e.colors.primary100};
  }

  &:focus-visible {
    outline: none;

    &:after {
      content: none;
    }
  }
`,Dn=(0,k.default)(ue)`
  ${kn}
`,bo=(0,k.default)(xt)`
  /* We include this here again because typically when people use OptionLink they provide an as prop which cancels the Box props */
  color: ${({theme:e,color:t})=>le(e.colors,t,void 0)};
  text-decoration: none;

  &:hover {
    color: unset;
  }

  svg > path,
  &:focus-visible svg > path {
    fill: currentColor;
  }

  ${kn}
`,Hd=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Pe.JU,{asChild:!0,children:(0,n.jsx)(xo,{ref:t,variant:"sigma",textColor:"neutral600",...e})})),xo=(0,k.default)(q)`
  padding: ${({theme:e})=>e.spaces[2]} ${({theme:e})=>e.spaces[4]};
`,Yd=Pe.Pb,Zd=(0,m.forwardRef)(({disabled:e=!1,...t},a)=>(0,n.jsx)(Pe.ZP,{asChild:!0,disabled:e,children:(0,n.jsxs)(vo,{ref:a,color:"neutral800",as:"button",type:"button",background:"transparent",borderStyle:"none",gap:5,...t,children:[(0,n.jsx)(q,{children:t.children}),(0,n.jsx)(Co,{height:12,width:12})]})})),vo=(0,k.default)(Dn)`
  &[data-state='open'] {
    background-color: ${({theme:e})=>e.colors.primary100};
  }
`,Co=(0,k.default)(ao.A)`
  path {
    fill: ${({theme:e})=>e.colors.neutral500};
  }
`,Kd=(0,m.forwardRef)((e,t)=>(0,n.jsx)(Pe.ZL,{children:(0,n.jsx)(Pe.G5,{sideOffset:8,asChild:!0,children:(0,n.jsx)(En,{ref:t,direction:"column",borderStyle:"solid",borderWidth:"1px",borderColor:"neutral150",hasRadius:!0,background:"neutral0",shadow:"filterShadow",maxHeight:"15rem",padding:1,alignItems:"flex-start",overflow:"auto",...e})})})),Ao=fo,To=go,jo=ho,Mo=yo,Qd=null,Xd=null,Jd=null,qd=null;var $o=s(75516),So=s(66159),No=s(28763),Lo=s(52230),On=s(95065),Fo=s(59148),Io=s(83461),Ro=s(94744),Eo=s(59004),ko=s(13318),Do=s(18904),Oo=s(95289),Bo=s(38697),Po=s(15691),wo=s(83609),Wo=s(40339),zo=s(44030),Uo=s(40463),Vo=s(59385),Go=s(24685),Ho=s(13333),Yo=s(69999),Zo=s(77938),Ko=s(66804),Qo=s(28816),Xo=s(88938),Jo=s(10034),qo=s(73568),_o=s(58241),er=s(90808),tr=s(24304),nr=s(91325),ar=s(44169),sr=s(47213),or=s(2664),rr=s(97219),ir=s(34610),lr=s(56349),dr=s(69840),cr=s(14027),ur=s(2570),mr=s(21291),pr=s(4043),fr=s(8046),gr=s(29468),hr=s(58037),yr=s(90817),br=s(80141),xr=s(94013),vr=s(61983),Cr=s(32598),Ar=s(36005),Tr=s(88706),jr=s(51303),Mr=s(99136),$r=s(97937),Sr=s(4219),Nr=s(79265),Lr=s(29325),Fr=s(70983),Ir=s(61271),Rr=s(19404),Er=s(98266),kr=s(50350),Dr=s(36625),Or=s(41564),Br=s(423),Pr=s(95350),wr=s(43400),Bn=s(27060),Pn=s(83551),wn=s(25394),Wr=s(32782),zr=s(50660),Ur=s(6299),Vr=s(79195),Gr=s(15196),Hr=s(94624),Wn=s(19143),zn=s(72734),Un=s(37218),Yr=s(46905),Zr=s(54063),Kr=s(87863),Qr=s(31708),Xr=s(12233),Jr=s(73283),qr=s(26140),_r=s(26190),ei=s(7187),ti=s(47449),Ye=s(31127),ni=s(41670),ai=s(40547),si=s(55087),oi=s(71597),ri=s(25942),ii=s(68110),li=s(84395),di=s(99074),ci=s(47658),ui=s(22019),mi=s(58314),pi=s(83620),fi=s(31317),gi=s(3669),hi=s(86173),yi=s(47605),bi=s(35127),xi=s(71222),vi=s(17304),Ci=s(59267),Ai=s(88719),Ti=s(61857),ji=s(33950),Mi=s(17971),$i=s(70552),Si=s(41686),Ni=s(60261),Li=s(7138),Fi=s(32310),Ii=s(7954),Ri=s(69816),Ei=s(82083),ki=s(50336),dt=s(80868),Di=s(68861),Oi=s(45673),Vn=s(8019),Bi=s(86040),Ct=s(43023),Pi=s(67152),wi=s(48313),Gn=s(35800),Dt=s(26085),Hn=s(3177),Wi=s(31900),zi=s(39915),Ui=s(86920),Vi=s(73019),Yn=s(65414),Gi=s(78519),Hi=s(76706),Yi=s(28312),Zi=s(39423),ze=s(39404),C=s(42245),Ot=s(56336),D=s(2600),Ki=s(94710),Zn=s(48940),Qi=s(14311),qe=s(82437),Xi=s(412),Kn=s(89102),Ji=s(5409),At=s(21835),Qn=s(35336),qi=s(71547),T=s(12083),_i=s(17024),H=s(58692),Bt=s(71210),Xn=s(70653),el=s(5790),Jn=s(35223),tl=s(45635);const c=e=>`${C.p}.${e}`,qn=(0,m.createContext)(),Ue=()=>(0,m.useContext)(qn),_n=m.createContext(),_e=()=>(0,m.useContext)(_n),nl=()=>{const{components:e,componentsGroupedByCategory:t,contentTypes:a,isInDevelopmentMode:o,sortedContentTypesList:r,modifiedData:l,initialData:i}=Ue(),d=(0,N.hN)(),{trackUsage:u}=(0,N.z1)(),[p,g]=(0,m.useState)(""),{onOpenModalCreateSchema:f,onOpenModalEditCategory:j}=_e(),{locale:A}=(0,K.A)(),{startsWith:v}=(0,N.U2)(A,{sensitivity:"base"}),M=(0,N.QM)(A,{sensitivity:"base"}),U=!Object.keys(a).some(V=>a[V].isTemporary===!0)&&!Object.keys(e).some(V=>e[V].isTemporary===!0)&&Ot(l,i),$=()=>{U?(u("willCreateContentType"),f({modalType:"contentType",kind:"collectionType",actionType:"create",forTarget:"contentType"})):w()},L=()=>{U?(u("willCreateSingleType"),f({modalType:"contentType",kind:"singleType",actionType:"create",forTarget:"contentType"})):w()},F=()=>{U?(u("willCreateComponent"),f({modalType:"component",kind:null,actionType:"create",forTarget:"component"})):w()},w=()=>{d({type:"info",message:{id:c("notification.info.creating.notSaved"),defaultMessage:"Please save your work before creating a new collection type or component"}})},ee=Object.entries(t).map(([V,Te])=>({name:V,title:V,isEditable:o,onClickEdit(te,Se){te.stopPropagation(),U?j(Se.name):w()},links:Te.map(te=>({name:te.uid,to:`/plugins/${C.p}/component-categories/${V}/${te.uid}`,title:te.schema.displayName})).sort((te,Se)=>M.compare(te.title,Se.title))})).sort((V,Te)=>M.compare(V.title,Te.title)),he=r.filter(V=>V.visible);return{menu:[{name:"models",title:{id:`${c("menu.section.models.name")}`,defaultMessage:"Collection Types"},customLink:o&&{id:`${c("button.model.create")}`,defaultMessage:"Create new collection type",onClick:$},links:he.filter(V=>V.kind==="collectionType")},{name:"singleTypes",title:{id:`${c("menu.section.single-types.name")}`,defaultMessage:"Single Types"},customLink:o&&{id:`${c("button.single-types.create")}`,defaultMessage:"Create new single type",onClick:L},links:he.filter(V=>V.kind==="singleType")},{name:"components",title:{id:`${c("menu.section.components.name")}`,defaultMessage:"Components"},customLink:o&&{id:`${c("button.component.create")}`,defaultMessage:"Create a new component",onClick:F},links:ee}].map(V=>V.links.some(te=>Array.isArray(te.links))?{...V,links:V.links.map(te=>{const Se=te.links.filter(xe=>v(xe.title,p));return Se.length===0?null:{...te,links:Se.sort((xe,de)=>M.compare(xe.title,de.title))}}).filter(Boolean)}:{...V,links:V.links.filter(te=>v(te.title,p)).sort((te,Se)=>M.compare(te.title,Se.title))}),searchValue:p,onSearchChange:g}},al=()=>{const{menu:e,searchValue:t,onSearchChange:a}=nl(),{formatMessage:o}=(0,K.A)();return(0,n.jsxs)(Qa,{ariaLabel:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),children:[(0,n.jsx)(ws,{searchable:!0,value:t,onClear:()=>a(""),onChange:r=>a(r.target.value),label:o({id:`${c("plugin.name")}`,defaultMessage:"Content-Types Builder"}),searchLabel:o({id:"global.search",defaultMessage:"Search"})}),(0,n.jsx)(Ws,{children:e.map(r=>(0,n.jsxs)(m.Fragment,{children:[(0,n.jsx)(Ys,{label:o({id:r.title.id,defaultMessage:r.title.defaultMessage}),collapsable:!0,badgeLabel:r.links.length.toString(),children:r.links.map(l=>l.links?(0,n.jsx)(Xs,{label:ze(l.title),children:l.links.map(i=>(0,n.jsx)(Mn,{as:on.k2,to:i.to,active:i.active,isSubSectionChild:!0,children:ze(o({id:i.name,defaultMessage:i.title}))},i.name))},l.name):(0,n.jsx)(Mn,{as:on.k2,to:l.to,active:l.active,children:ze(o({id:l.name,defaultMessage:l.title}))},l.name))}),r.customLink&&(0,n.jsx)(y.a,{paddingLeft:7,children:(0,n.jsx)(P.Q,{onClick:r.customLink.onClick,startIcon:(0,n.jsx)(O.I,{as:Ye.A,width:(0,N.a8)(8),height:(0,N.a8)(8)}),marginTop:2,children:o({id:r.customLink.id,defaultMessage:r.customLink.defaultMessage})})})]},r.name))})]})},ea=e=>e.kind==="collectionType"&&(e.restrictRelationsTo===null||Array.isArray(e.restrictRelationsTo)&&e.restrictRelationsTo.length>0),Pt=(e,t)=>e.find(({name:a})=>a===t),sl=[{label:"All",children:[{label:"images (JPEG, PNG, GIF, SVG, TIFF, ICO, DVU)",value:"images"},{label:"videos (MPEG, MP4, Quicktime, WMV, AVI, FLV)",value:"videos"},{label:"audios (MP3, WAV, OGG)",value:"audios"},{label:"files (CSV, ZIP, PDF, Excel, JSON, ...)",value:"files"}]}],ol=({intlLabel:e,name:t,onChange:a,value:o=null})=>{const{formatMessage:r}=(0,K.A)(),l=o===null||o?.length===0?r({id:"global.none",defaultMessage:"None"}):[...o].sort().map(d=>ze(d)).join(", "),i=e.id?r({id:e.id,defaultMessage:e.defaultMessage}):t;return(0,n.jsx)(B.B,{id:"select1",label:i,customizeContent:()=>l,onChange:d=>{d.length>0?a({target:{name:t,value:d,type:"allowed-types-select"}}):a({target:{name:t,value:null,type:"allowed-types-select"}})},options:sl,value:o||[]})},ta={biginteger:dt.A,blocks:Di.A,boolean:Oi.A,collectionType:Vn.A,component:Bi.A,contentType:Vn.A,date:Ct.A,datetime:Ct.A,decimal:dt.A,dynamiczone:Pi.A,email:wi.A,enum:Gn.A,enumeration:Gn.A,file:Dt.A,files:Dt.A,float:dt.A,integer:dt.A,json:Hn.A,JSON:Hn.A,media:Dt.A,number:dt.A,password:Wi.A,relation:zi.A,richtext:Ui.A,singleType:Vi.A,string:Yn.A,text:Yn.A,time:Ct.A,timestamp:Ct.A,uid:Gi.A},rl=(0,k.default)(y.a)`
  svg {
    height: 100%;
    width: 100%;
  }
`,ct=({type:e,customField:t=null,...a})=>{const o=(0,N.AC)();let r=ta[e];if(t){const i=o.get(t)?.icon;i&&(r=i)}return ta[e]?(0,n.jsx)(rl,{height:(0,N.a8)(24),width:(0,N.a8)(32),shrink:0,...a,"aria-hidden":!0,children:(0,n.jsx)(y.a,{as:r})}):null},na=(0,k.default)(y.a)`
  width: 100%;
  height: 100%;
  border: 1px solid ${({theme:e})=>e.colors.neutral200};
  text-align: left;
  &:hover {
    background: ${({theme:e})=>e.colors.primary100};
    border: 1px solid ${({theme:e})=>e.colors.primary200};
  }
`,il=[],ll=()=>(0,n.jsx)(x.s,{grow:1,justifyContent:"flex-end",children:(0,n.jsxs)(x.s,{gap:1,hasRadius:!0,background:"alternative100",padding:`${2/16}rem ${4/16}rem`,children:[(0,n.jsx)(O.I,{width:`${10/16}rem`,height:`${10/16}rem`,as:Hi.A,color:"alternative600"}),(0,n.jsx)(S.o,{textColor:"alternative600",variant:"sigma",children:"New"})]})}),dl=({type:e="text"})=>{const{formatMessage:t}=(0,K.A)(),{onClickSelectField:a}=_e(),o=()=>{a({attributeType:e,step:e==="component"?"1":null})};return(0,n.jsx)(na,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:o,children:(0,n.jsxs)(x.s,{children:[(0,n.jsx)(ct,{type:e}),(0,n.jsxs)(y.a,{paddingLeft:4,width:"100%",children:[(0,n.jsxs)(x.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:t({id:c(`attribute.${e}`),defaultMessage:e})}),il.includes(e)&&(0,n.jsx)(ll,{})]}),(0,n.jsx)(x.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:t({id:c(`attribute.${e}.description`),defaultMessage:"A type for modeling data"})})})]})]})})},cl=({attributes:e})=>(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsx)(x.s,{direction:"column",alignItems:"stretch",gap:8,children:e.map((t,a)=>(0,n.jsx)(_.x,{gap:3,children:t.map(o=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(dl,{type:o})},o))},a))})}),ul=({customFieldUid:e,customField:t})=>{const{type:a,intlLabel:o,intlDescription:r}=t,{formatMessage:l}=(0,K.A)(),{onClickSelectCustomField:i}=_e(),d=()=>{i({attributeType:a,customFieldUid:e})};return(0,n.jsx)(na,{padding:4,as:"button",hasRadius:!0,type:"button",onClick:d,children:(0,n.jsxs)(x.s,{children:[(0,n.jsx)(ct,{type:a,customField:e}),(0,n.jsxs)(y.a,{paddingLeft:4,children:[(0,n.jsx)(x.s,{children:(0,n.jsx)(S.o,{fontWeight:"bold",children:l(o)})}),(0,n.jsx)(x.s,{children:(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(r)})})]})]})})},ml=(0,k.default)(y.a)`
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(234, 234, 239, 0) 0%, ${e.colors.neutral150} 100%)`};
  opacity: 0.33;
`,pl=()=>(0,n.jsx)(x.s,{wrap:"wrap",gap:4,children:[...Array(4)].map((e,t)=>(0,n.jsx)(ml,{height:"138px",width:"375px",hasRadius:!0},`empty-card-${t}`))}),fl=()=>{const{formatMessage:e}=(0,K.A)();return(0,n.jsxs)(y.a,{position:"relative",children:[(0,n.jsx)(pl,{}),(0,n.jsx)(y.a,{position:"absolute",top:6,width:"100%",children:(0,n.jsxs)(x.s,{alignItems:"center",justifyContent:"center",direction:"column",children:[(0,n.jsx)(O.I,{as:Yi.A,color:"",width:"160px",height:"88px"}),(0,n.jsx)(y.a,{paddingTop:6,paddingBottom:4,children:(0,n.jsxs)(y.a,{textAlign:"center",children:[(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.heading"),defaultMessage:"Nothing in here yet."})}),(0,n.jsx)(y.a,{paddingTop:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"p",textColor:"neutral600",children:e({id:c("modalForm.empty.sub-heading"),defaultMessage:"Find what you are looking for through a wide range of extensions."})})})]})}),(0,n.jsx)(re.z,{to:`/marketplace?${Ji.stringify({categories:["Custom fields"]})}`,variant:"secondary",startIcon:(0,n.jsx)(Ye.A,{}),children:e({id:c("modalForm.empty.button"),defaultMessage:"Add custom fields"})})]})})]})},gl=()=>{const{formatMessage:e}=(0,K.A)(),t=(0,N.AC)(),a=Object.entries(t.getAll());if(!a.length)return(0,n.jsx)(fl,{});const o=a.sort((r,l)=>r[1].name>l[1].name?1:-1);return(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:3,children:[(0,n.jsx)(_.x,{gap:3,children:o.map(([r,l])=>(0,n.jsx)(ne.E,{col:6,children:(0,n.jsx)(ul,{customFieldUid:r,customField:l},r)},r))}),(0,n.jsx)(xt,{href:"https://docs.strapi.io/developer-docs/latest/development/custom-fields.html",isExternal:!0,children:e({id:c("modalForm.tabs.custom.howToLink"),defaultMessage:"How to add custom fields"})})]})})},hl=({attributes:e,forTarget:t,kind:a})=>{const{formatMessage:o}=(0,K.A)(),r=c("modalForm.tabs.default"),l=c("modalForm.tabs.custom"),i=t.includes("component")?"component":a,d=c(`modalForm.sub-header.chooseAttribute.${i}`);return(0,n.jsx)(We.c,{padding:7,children:(0,n.jsxs)(pe.f,{label:o({id:c("modalForm.tabs.label"),defaultMessage:"Default and Custom types tabs"}),id:"attribute-type-tabs",variant:"simple",children:[(0,n.jsxs)(x.s,{justifyContent:"space-between",children:[(0,n.jsx)(S.o,{variant:"beta",as:"h2",children:o({id:d,defaultMessage:"Select a field"})}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{children:o({id:r,defaultMessage:"Default"})}),(0,n.jsx)(ce.o,{children:o({id:l,defaultMessage:"Custom"})})]})]}),(0,n.jsx)(y.a,{paddingBottom:6,children:(0,n.jsx)(se.c,{})}),(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(cl,{attributes:e})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(gl,{})})]})]})})},yl=({intlLabel:e,name:t,options:a,onChange:o,value:r=null})=>{const{formatMessage:l}=(0,K.A)(),i=e.id?l({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):t,d=u=>{let p="";u==="true"&&(p=!0),u==="false"&&(p=!1),o({target:{name:t,value:p,type:"select-default-boolean"}})};return(0,n.jsx)(oe.l,{label:i,id:t,name:t,onChange:d,value:(r===null?"":r).toString(),children:a.map(({metadatas:{intlLabel:u,disabled:p,hidden:g},key:f,value:j})=>(0,n.jsx)(Re.c,{value:j,disabled:p,hidden:g,children:u.defaultMessage},f))})},bl=(0,k.default)(x.s)`
  position: relative;
  align-items: stretch;

  label {
    border-radius: 4px;
    max-width: 50%;
    cursor: pointer;
    user-select: none;
    flex: 1;
    ${(0,Ee.id)()}
  }

  input {
    position: absolute;
    opacity: 0;
  }

  .option {
    height: 100%;
    border-radius: 4px;
    border: 1px solid ${({theme:e})=>e.colors.neutral200};
    will-change: transform, opacity;
    background: ${({theme:e})=>e.colors.neutral0};

    .checkmark {
      position: relative;
      display: block;
      will-change: transform;
      background: ${({theme:e})=>e.colors.neutral0};
      width: ${({theme:e})=>e.spaces[5]};
      height: ${({theme:e})=>e.spaces[5]};
      border: solid 1px ${({theme:e})=>e.colors.neutral300};
      border-radius: 50%;

      &:before,
      &:after {
        content: '';
        display: block;
        border-radius: 50%;
        width: ${({theme:e})=>e.spaces[3]};
        height: ${({theme:e})=>e.spaces[3]};
        position: absolute;
        top: 3px;
        left: 3px;
      }

      &:after {
        transform: scale(0);
        transition: inherit;
        will-change: transform;
      }
    }
  }

  .container input:checked ~ div {
    background: ${({theme:e})=>e.colors.primary100};
    ${S.o} {
      color: ${({theme:e})=>e.colors.primary600};
    }
    border: 1px solid ${({theme:e})=>e.colors.primary200};
    .checkmark {
      border: solid 1px ${({theme:e})=>e.colors.primary600};
      &::after {
        background: ${({theme:e})=>e.colors.primary600};
        transform: scale(1);
      }
    }
  }
`,wt=({intlLabel:e,name:t,onChange:a,radios:o=[],value:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",htmlFor:t,as:"label",children:l(e)}),(0,n.jsx)(bl,{gap:4,alignItems:"stretch",children:o.map(i=>(0,n.jsxs)("label",{htmlFor:i.value.toString(),className:"container",children:[(0,n.jsx)("input",{id:i.value.toString(),name:t,className:"option-input",checked:i.value===r,value:i.value,onChange:a,type:"radio"},i.value),(0,n.jsx)(y.a,{className:"option",padding:4,children:(0,n.jsxs)(x.s,{children:[(0,n.jsx)(y.a,{paddingRight:4,children:(0,n.jsx)("span",{className:"checkmark"})}),(0,n.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(S.o,{fontWeight:"bold",children:l(i.title)}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:l(i.description)})]})]})})]},i.value))})]})},xl=({onChange:e,name:t,intlLabel:a,...o})=>{const r=l=>{const i=l.target.value!=="false";e({target:{name:t,value:i,type:"boolean-radio-group"}})};return(0,n.jsx)(wt,{...o,name:t,onChange:r,intlLabel:a})},vl=({error:e,intlLabel:t,modifiedData:a,name:o,onChange:r,value:l=null})=>{const{formatMessage:i}=(0,K.A)(),[d,u]=(0,m.useState)(!!l||l===0),p=t.id?i({id:t.id,defaultMessage:t.defaultMessage},{...t.values}):o,g=a.type==="biginteger"?"text":"number",f=!a.type,j=e?i({id:e,defaultMessage:e}):"";return(0,n.jsxs)(x.s,{direction:"column",alignItems:"stretch",gap:2,children:[(0,n.jsx)(be.S,{id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A?g==="text"?"0":0:null}}),u(U=>!U)},value:d,children:p}),d&&(0,n.jsx)(y.a,{paddingLeft:6,style:{maxWidth:"200px"},children:g==="text"?(0,n.jsx)(je.k,{label:"","aria-label":p,disabled:f,error:j,id:o,name:o,onChange:r,value:l===null?"":l}):(0,n.jsx)(gt.Q,{"aria-label":p,disabled:f,error:j,id:o,name:o,onValueChange:A=>{r({target:{name:o,value:A,type:g}})},value:l||0})})]})},Cl=({onChange:e,...t})=>{const a=(0,N.hN)(),o=r=>{a({type:"info",message:{id:c("contentType.kind.change.warning"),defaultMessage:"You just changed the kind of a content type: API will be reset (routes, controllers, and services will be overwritten)."}}),e(r)};return(0,n.jsx)(wt,{...t,onChange:o})},Al=({description:e,disabled:t=!1,intlLabel:a,isCreating:o,name:r,onChange:l,value:i=!1})=>{const{formatMessage:d}=(0,K.A)(),[u,p]=(0,m.useState)(!1),g=a.id?d({id:a.id,defaultMessage:a.defaultMessage},{...a.values}):r,f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=()=>p(M=>!M),A=()=>{l({target:{name:r,value:!1}}),j()},v=({target:{checked:M}})=>{if(!M&&!o){j();return}l({target:{name:r,value:M}})};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(be.S,{checked:i,disabled:t,hint:f,name:r,onChange:v,children:g}),(0,n.jsx)(N.TM,{isOpen:u,onToggleDialog:j,onConfirm:A,bodyText:{id:c("popUpWarning.draft-publish.message"),defaultMessage:"If you disable the draft & publish, your drafts will be deleted."},leftButtonText:{id:"components.popUpWarning.button.cancel",defaultMessage:"No, cancel"},rightButtonText:{id:c("popUpWarning.draft-publish.button.confirm"),defaultMessage:"Yes, disable"}})]})},Tl=({categoryName:e,deleteCategory:t,deleteComponent:a,deleteContentType:o,isAttributeModal:r,isCustomFieldModal:l,isComponentAttribute:i,isComponentToDzModal:d,isContentTypeModal:u,isCreatingComponent:p,isCreatingComponentAttribute:g,isCreatingComponentInDz:f,isCreatingComponentWhileAddingAField:j,isCreatingContentType:A,isCreatingDz:v,isComponentModal:M,isDzAttribute:U,isEditingAttribute:$,isEditingCategory:L,isInFirstComponentStep:F,onSubmitAddComponentAttribute:w,onSubmitAddComponentToDz:ee,onSubmitCreateContentType:he,onSubmitCreateComponent:$e,onSubmitCreateDz:V,onSubmitEditAttribute:Te,onSubmitEditCategory:te,onSubmitEditComponent:Se,onSubmitEditContentType:xe,onSubmitEditCustomFieldAttribute:de,onSubmitEditDz:Ve,onClickFinish:ye})=>{const{formatMessage:J}=(0,K.A)();return d?f?(0,n.jsx)(ae.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),ee(I,!0)},startIcon:(0,n.jsx)(Ye.A,{}),children:J({id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"})}):(0,n.jsx)(ae.$,{variant:"default",type:"submit",onClick:I=>{I.preventDefault(),ee(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&U&&!v?(0,n.jsx)(ae.$,{variant:"default",type:"submit",onClick:I=>{I.preventDefault(),ye(),Ve(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})}):r&&U&&v?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(ae.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),V(I,!0)},startIcon:(0,n.jsx)(Ye.A,{}),children:J({id:c("form.button.add-components-to-dynamiczone"),defaultMessage:"Add components to the zone"})})}):r&&i?F?(0,n.jsx)(ae.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),w(I,!0)},children:J(g?{id:c("form.button.configure-component"),defaultMessage:"Configure the component"}:{id:c("form.button.select-component"),defaultMessage:"Configure the component"})}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{variant:"secondary",type:"submit",onClick:I=>{I.preventDefault(),w(I,!0)},startIcon:(0,n.jsx)(Ye.A,{}),children:J(j?{id:c("form.button.add-first-field-to-created-component"),defaultMessage:"Add first field to the component"}:{id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ae.$,{variant:"default",type:"button",onClick:I=>{I.preventDefault(),ye(),w(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):r&&!i&&!U?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{type:$?"button":"submit",variant:"secondary",onClick:I=>{I.preventDefault(),Te(I,!0)},startIcon:(0,n.jsx)(Ye.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ae.$,{type:$?"submit":"button",variant:"default",onClick:I=>{I.preventDefault(),ye(),Te(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):u?(0,n.jsxs)(n.Fragment,{children:[!A&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),o()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ae.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),xe(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),A&&(0,n.jsx)(ae.$,{type:"submit",variant:"secondary",onClick:I=>{I.preventDefault(),he(I,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):M?(0,n.jsxs)(n.Fragment,{children:[!p&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),a()},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ae.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),Se(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}),p&&(0,n.jsx)(ae.$,{type:"submit",variant:"secondary",onClick:I=>{I.preventDefault(),$e(I,!0)},children:J({id:"global.continue",defaultMessage:"Continue"})})]}):L?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{type:"button",variant:"danger",onClick:I=>{I.preventDefault(),e&&t(e)},children:J({id:"global.delete",defaultMessage:"Delete"})}),(0,n.jsx)(ae.$,{type:"submit",variant:"default",onClick:I=>{I.preventDefault(),te(I)},children:J({id:"global.finish",defaultMessage:"finish"})})]}):l?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(ae.$,{type:$?"button":"submit",variant:"secondary",onClick:I=>{I.preventDefault(),de(I,!0)},startIcon:(0,n.jsx)(Ye.A,{}),children:J({id:c("form.button.add-field"),defaultMessage:"Add another field"})}),(0,n.jsx)(ae.$,{type:$?"submit":"button",variant:"default",onClick:I=>{I.preventDefault(),ye(),de(I,!1)},children:J({id:"global.finish",defaultMessage:"Finish"})})]}):null},jl=({actionType:e=null,attributeName:t,attributeType:a,categoryName:o,contentTypeKind:r,dynamicZoneTarget:l,forTarget:i,modalType:d=null,targetUid:u,customFieldUid:p=null,showBackLink:g=!1})=>{const{formatMessage:f}=(0,K.A)(),{modifiedData:j}=Ue(),{onOpenModalAddField:A}=_e();let v="component",M=[];const U=j?.[i]?.[u]||j?.[i]||null,$=U?.schema.displayName;if(d==="contentType"&&(v=r),["component","editCategory"].includes(d||"")&&(v="component"),["component","contentType"].includes(d||"")){let F=c(`modalForm.component.header-${e}`);return d==="contentType"&&(F=c(`modalForm.${r}.header-create`)),e==="edit"&&(F=c("modalForm.header-edit")),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(x.s,{children:[(0,n.jsx)(y.a,{children:(0,n.jsx)(ct,{type:v})}),(0,n.jsx)(y.a,{paddingLeft:3,children:(0,n.jsx)(S.o,{fontWeight:"bold",textColor:"neutral800",as:"h2",id:"title",children:f({id:F},{name:$})})})]})})}return M=[{label:$,info:{category:U?.category||null,name:U?.schema.displayName}}],d==="chooseAttribute"&&(v=["component","components"].includes(i)?"component":U.schema.kind),d==="addComponentToDynamicZone"&&(v="dynamiczone",M.push({label:l})),(d==="attribute"||d==="customField")&&(v=a,M.push({label:t})),d==="editCategory"&&(M=[{label:f({id:c("modalForm.header.categories"),defaultMessage:"Categories"})},{label:o}]),(0,n.jsx)(ot.r,{children:(0,n.jsxs)(x.s,{gap:3,children:[g&&(0,n.jsx)(xt,{"aria-label":f({id:c("modalForm.header.back"),defaultMessage:"Back"}),startIcon:(0,n.jsx)(On.A,{}),onClick:()=>A({forTarget:i,targetUid:u}),href:"#back",isExternal:!1}),(0,n.jsx)(ct,{type:v,customField:p}),(0,n.jsx)(Sn,{label:M.map(({label:F})=>F).join(","),children:M.map(({label:F,info:w},ee,he)=>{if(F=ze(F),!F)return null;const $e=`${F}.${ee}`;return w?.category&&(F=`${F} (${ze(w.category)} - ${ze(w.name)})`),(0,n.jsx)(Nn,{isCurrent:ee===he.length-1,children:F},$e)})})]})})},Ml=({modalType:e,forTarget:t,kind:a,actionType:o,step:r})=>{switch(e){case"chooseAttribute":return c(`modalForm.sub-header.chooseAttribute.${t?.includes("component")?"component":a||"collectionType"}`);case"attribute":return c(`modalForm.sub-header.attribute.${o}${r!=="null"&&r!==null&&o!=="edit"?".step":""}`);case"customField":return c(`modalForm.sub-header.attribute.${o}`);case"addComponentToDynamicZone":return c("modalForm.sub-header.addComponentToDynamicZone");default:return c("configurations")}},$l=({actionType:e,modalType:t,forTarget:a,kind:o,step:r,attributeType:l,attributeName:i,customField:d})=>{const{formatMessage:u}=(0,K.A)(),p=t==="customField"?d?.intlLabel:{id:c(`attribute.${l}`)};return(0,n.jsxs)(x.s,{direction:"column",alignItems:"flex-start",paddingBottom:2,gap:1,children:[(0,n.jsx)(S.o,{as:"h2",variant:"beta",children:u({id:Ml({actionType:e,forTarget:a,kind:o,step:r,modalType:t}),defaultMessage:"Add new field"},{type:p?ze(u(p)):"",name:ze(i),step:r})}),(0,n.jsx)(S.o,{variant:"pi",textColor:"neutral600",children:u({id:c(`attribute.${l}.description`),defaultMessage:"A type for modeling data"})})]})},Wt={alien:$o.A,apps:So.A,archive:No.A,arrowDown:Lo.A,arrowLeft:On.A,arrowRight:Fo.A,arrowUp:Io.A,attachment:Ro.A,bell:Eo.A,bold:ko.A,book:Do.A,briefcase:Oo.A,brush:Bo.A,bulletList:Po.A,calendar:wo.A,car:Wo.A,cast:zo.A,chartBubble:Uo.A,chartCircle:Vo.A,chartPie:Go.A,check:Ho.A,clock:Yo.A,cloud:Zo.A,code:Ko.A,cog:Qo.A,collapse:Xo.A,command:Jo.A,connector:qo.A,crop:_o.A,crown:er.A,cube:tr.A,cup:nr.A,cursor:ar.A,dashboard:sr.A,database:or.A,discuss:rr.A,doctor:ir.A,earth:lr.A,emotionHappy:dr.A,emotionUnhappy:cr.A,envelop:ur.A,exit:mr.A,expand:pr.A,eye:fr.A,feather:gr.A,file:hr.A,fileError:yr.A,filePdf:br.A,filter:xr.A,folder:vr.A,gate:Cr.A,gift:Ar.A,globe:Tr.A,grid:jr.A,handHeart:Mr.A,hashtag:$r.A,headphone:Sr.A,heart:Nr.A,house:Lr.A,information:Fr.A,italic:Ir.A,key:Rr.A,landscape:Er.A,layer:kr.A,layout:Dr.A,lightbulb:Or.A,link:Br.A,lock:Pr.A,magic:wr.A,manyToMany:Bn.A,manyToOne:Pn.A,manyWays:wn.A,medium:Wr.A,message:zr.A,microphone:Ur.A,monitor:Vr.A,moon:Gr.A,music:Hr.A,oneToMany:Wn.A,oneToOne:zn.A,oneWay:Un.A,paint:Yr.A,paintBrush:Zr.A,paperPlane:Kr.A,pencil:Qr.A,phone:Xr.A,picture:Jr.A,pin:qr.A,pinMap:_r.A,plane:ei.A,play:ti.A,plus:Ye.A,priceTag:ni.A,puzzle:ai.A,question:si.A,quote:oi.A,repeat:ri.A,restaurant:ii.A,rocket:li.A,rotate:di.A,scissors:ci.A,search:yt.A,seed:ui.A,server:mi.A,shield:pi.A,shirt:fi.A,shoppingCart:gi.A,slideshow:hi.A,stack:yi.A,star:bi.A,store:xi.A,strikeThrough:vi.A,sun:Ci.A,television:Ai.A,thumbDown:Ti.A,thumbUp:ji.A,train:Mi.A,twitter:$i.A,typhoon:Si.A,underline:Ni.A,user:Li.A,volumeMute:Fi.A,volumeUp:Ii.A,walk:Ri.A,wheelchair:Ei.A,write:ki.A},Sl=(0,k.default)(x.s)`
  label {
    ${(0,Ee.id)()}
    border-radius: ${({theme:e})=>e.borderRadius};
    border: 1px solid ${({theme:e})=>e.colors.neutral100};
  }
`,Nl=({iconKey:e,name:t,onChange:a,isSelected:o,ariaLabel:r})=>(0,n.jsx)(ht.D,{name:t,required:!1,children:(0,n.jsxs)(Ia.d,{htmlFor:e,id:`${e}-label`,children:[(0,n.jsxs)(Ra.s,{children:[(0,n.jsx)(Ea.T,{type:"radio",id:e,name:t,checked:o,onChange:a,value:e,"aria-checked":o,"aria-labelledby":`${e}-label`}),r]}),(0,n.jsx)(x.s,{padding:2,cursor:"pointer",hasRadius:!0,background:o?"primary200":void 0,children:(0,n.jsx)(O.I,{as:Wt[e],color:o?"primary600":"neutral300"})})]})}),Ll=({intlLabel:e,name:t,onChange:a,value:o=""})=>{const{formatMessage:r}=(0,K.A)(),[l,i]=(0,m.useState)(!1),[d,u]=(0,m.useState)(""),p=Object.keys(Wt),[g,f]=(0,m.useState)(p),j=(0,m.useRef)(null),A=(0,m.useRef)(null),v=()=>{i(!l)},M=({target:{value:L}})=>{u(L),f(()=>p.filter(F=>F.toLowerCase().includes(L.toLowerCase())))},U=()=>{v(),u(""),f(p)},$=()=>{a({target:{name:t,value:""}})};return(0,m.useEffect)(()=>{l&&A.current?.focus()},[l]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.s,{justifyContent:"space-between",paddingBottom:2,children:[(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",as:"label",children:r(e)}),(0,n.jsxs)(x.s,{gap:1,children:[l?(0,n.jsx)(ka.S,{ref:A,name:"searchbar",size:"S",placeholder:r({id:c("ComponentIconPicker.search.placeholder"),defaultMessage:"Search for an icon"}),onBlur:()=>{d||v()},onChange:M,value:d,onClear:U,clearLabel:r({id:c("IconPicker.search.clear.label"),defaultMessage:"Clear the icon search"}),children:r({id:c("IconPicker.search.placeholder.label"),defaultMessage:"Search for an icon"})}):(0,n.jsx)(sn.K,{ref:j,onClick:v,"aria-label":r({id:c("IconPicker.search.button.label"),defaultMessage:"Search icon button"}),icon:(0,n.jsx)(yt.A,{}),noBorder:!0}),o&&(0,n.jsx)(Da.m,{description:r({id:c("IconPicker.remove.tooltip"),defaultMessage:"Remove the selected icon"}),children:(0,n.jsx)(sn.K,{onClick:$,"aria-label":r({id:c("IconPicker.remove.button"),defaultMessage:"Remove the selected icon button"}),icon:(0,n.jsx)(Zi.A,{}),noBorder:!0})})]})]}),(0,n.jsx)(Sl,{position:"relative",padding:1,background:"neutral100",hasRadius:!0,wrap:"wrap",gap:2,maxHeight:"126px",overflow:"auto",textAlign:"center",children:g.length>0?g.map(L=>(0,n.jsx)(Nl,{iconKey:L,name:t,onChange:a,isSelected:L===o,ariaLabel:r({id:c("IconPicker.icon.label"),defaultMessage:"Select {icon} icon"},{icon:L})},L)):(0,n.jsx)(y.a,{padding:4,grow:2,children:(0,n.jsx)(S.o,{variant:"delta",textColor:"neutral600",textAlign:"center",children:r({id:c("IconPicker.emptyState.label"),defaultMessage:"No icon found"})})})})]})},Fl=({description:e,error:t,intlLabel:a,modifiedData:o,name:r,onChange:l,value:i})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{if(p){const A=(0,C.n)(p);try{const v=At(A,2);u.current({target:{name:r,value:v}})}catch{u.current({target:{name:r,value:A}})}}else u.current({target:{name:r,value:""}})},[p,r]);const g=t?d({id:t,defaultMessage:t}):"",f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=d(a);return(0,n.jsx)(je.k,{error:g,label:j,id:r,hint:f,name:r,onChange:l,value:i||""})},Il=({oneThatIsCreatingARelationWithAnother:e,target:t})=>{const{contentTypes:a,sortedContentTypesList:o}=Ue(),r=(0,qe.wA)(),l=o.filter(ea),{plugin:i=null,schema:{displayName:d}={displayName:"error"}}=a?.[t]??{},u=({uid:p,plugin:g,title:f,restrictRelationsTo:j})=>()=>{const A=g?`${g}_${f}`:f;r({type:C.O,target:{value:p,oneThatIsCreatingARelationWithAnother:e,selectedContentTypeFriendlyName:A,targetContentTypeAllowedRelations:j}})};return(0,n.jsxs)(Ao,{children:[(0,n.jsx)(Rl,{children:`${d} ${i?`(from: ${i})`:""}`}),(0,n.jsx)(jo,{zIndex:5,children:l.map(({uid:p,title:g,restrictRelationsTo:f,plugin:j})=>(0,n.jsxs)(Mo,{onSelect:u({uid:p,plugin:j,title:g,restrictRelationsTo:f}),children:[g,"\xA0",j&&(0,n.jsxs)(n.Fragment,{children:["(from: ",j,")"]})]},p))})]})},Rl=(0,k.default)(To)`
  svg {
    width: ${6/16}rem;
    height: ${4/16}rem;
  }
`,aa=({disabled:e=!1,error:t,header:a,isMain:o=!1,name:r,onChange:l,oneThatIsCreatingARelationWithAnother:i="",target:d="",value:u=""})=>(0,n.jsxs)(y.a,{background:"neutral100",hasRadius:!0,borderColor:"neutral200",children:[(0,n.jsx)(x.s,{paddingTop:o?4:1,paddingBottom:o?3:1,justifyContent:"center",children:o?(0,n.jsx)(S.o,{variant:"pi",fontWeight:"bold",textColor:"neutral800",children:a}):(0,n.jsx)(Il,{target:d,oneThatIsCreatingARelationWithAnother:i})}),(0,n.jsx)(se.c,{background:"neutral200"}),(0,n.jsx)(y.a,{padding:4,children:(0,n.jsx)(N.ah,{disabled:e,error:t?.id||null,intlLabel:{id:c("form.attribute.item.defineRelation.fieldName"),defaultMessage:"Field name"},name:r,onChange:l,type:"text",value:u})})]}),El=(0,k.default)(y.a)`
  position: relative;
  width: 100%;
  &::before {
    content: '';
    position: absolute;
    top: calc(50% - 0px);
    height: 2px;
    width: 100%;
    background-color: ${({theme:e})=>e.colors.primary600};
    z-index: 0;
  }
`,kl=(0,k.default)(y.a)`
  background: ${({theme:e,isSelected:t})=>e.colors[t?"primary100":"neutral0"]};
  border: 1px solid
    ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral200"]};
  border-radius: ${({theme:e})=>e.borderRadius};
  z-index: 1;
  svg {
    width: 1.5rem;
    height: 100%;
    path {
      fill: ${({theme:e,isSelected:t})=>e.colors[t?"primary700":"neutral500"]};
    }
  }
  &:disabled {
    cursor: not-allowed;
  }
`,Dl=(0,k.default)(x.s)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,Ol={oneWay:Un.A,oneToOne:zn.A,oneToMany:Wn.A,manyToOne:Pn.A,manyToMany:Bn.A,manyWay:wn.A},Bl=({naturePickerType:e,oneThatIsCreatingARelationWithAnother:t,relationType:a,target:o})=>{const r=(0,qe.wA)(),{formatMessage:l}=(0,K.A)(),{contentTypes:i,modifiedData:d}=Ue(),u=["oneWay","oneToOne","oneToMany","manyToOne","manyToMany","manyWay"],p=["oneWay","manyWay"],f=(e==="contentType"?D(d,[e,"schema","kind"],""):e)==="collectionType"?u:p,j=a==="manyToOne",A=D(i,[o,"schema","displayName"],"unknown"),v=j?A:t,M=j?t:A,U=At(v,a==="manyToMany"?2:1),$=D(i,[o,"schema","restrictRelationsTo"],null),L=At(M,["manyToMany","oneToMany","manyToOne","manyWay"].includes(a)?2:1);return a?(0,n.jsxs)(x.s,{style:{flex:1},children:[(0,n.jsx)(El,{children:(0,n.jsx)(x.s,{paddingLeft:9,paddingRight:9,paddingTop:1,justifyContent:"center",children:(0,n.jsx)(z.r,{tagName:"button",children:(0,n.jsx)(x.s,{gap:3,children:f.map(F=>{const w=Ol[F],ee=$===null||$.includes(F);return(0,n.jsx)(kl,{as:"button",isSelected:a===F,disabled:!ee,onClick:()=>{ee&&r({type:C.a,target:{oneThatIsCreatingARelationWithAnother:t,targetContentType:o,value:F}})},padding:2,type:"button",children:(0,n.jsx)(w,{},F)},F)})})})})}),(0,n.jsxs)(Dl,{justifyContent:"center",children:[(0,n.jsxs)(S.o,{children:[Qn(U,{length:24}),"\xA0"]}),(0,n.jsxs)(S.o,{textColor:"primary600",children:[l({id:c(`relation.${a}`)}),"\xA0"]}),(0,n.jsx)(S.o,{children:Qn(L,{length:24})})]})]}):null},Pl=({formErrors:e,mainBoxHeader:t,modifiedData:a,naturePickerType:o,onChange:r})=>{const l=(0,C.g)(a.relation,a.targetAttribute);return(0,n.jsxs)(x.s,{style:{position:"relative"},children:[(0,n.jsx)(aa,{isMain:!0,header:t,error:e?.name||null,name:"name",onChange:r,value:a?.name||""}),(0,n.jsx)(Bl,{naturePickerType:o,oneThatIsCreatingARelationWithAnother:t,relationType:l,target:a.target}),(0,n.jsx)(aa,{disabled:["oneWay","manyWay"].includes(l),error:e?.targetAttribute||null,name:"targetAttribute",onChange:r,oneThatIsCreatingARelationWithAnother:t,target:a.target,value:a?.targetAttribute||""})]})},wl=({error:e=null,intlLabel:t,name:a,onChange:o,value:r=void 0})=>{const{formatMessage:l}=(0,K.A)(),{allComponentsCategories:i}=Ue(),[d,u]=(0,m.useState)(i),p=e?l({id:e,defaultMessage:e}):"",g=l(t),f=A=>{o({target:{name:a,value:A,type:"select-category"}})},j=A=>{u(v=>[...v,A]),f(A)};return(0,n.jsx)(Oa.nP,{error:p,id:a,label:g,name:a,onChange:f,onCreateOption:j,value:r,children:d.map(A=>(0,n.jsx)(Ba.j,{value:A,children:A},A))})},Wl=({error:e=null,intlLabel:t,isAddingAComponentToAnotherComponent:a,isCreating:o,isCreatingComponentWhileAddingAField:r,componentToCreate:l,name:i,onChange:d,targetUid:u,forTarget:p,value:g})=>{const{formatMessage:f}=(0,K.A)(),j=e?f({id:e,defaultMessage:e}):"",A=f(t),{componentsGroupedByCategory:v,componentsThatHaveOtherComponentInTheirAttributes:M}=Ue(),U=["component","components"].includes(p);let $=Object.entries(v).reduce((L,F)=>{const[w,ee]=F,he=ee.map($e=>({uid:$e.uid,label:$e.schema.displayName,categoryName:w}));return[...L,...he]},[]);return a&&($=$.filter(L=>!M.includes(L.uid))),U&&($=$.filter(L=>L.uid!==u)),r&&($=[{uid:g,label:l?.displayName,categoryName:l?.category}]),(0,n.jsx)(oe.l,{disabled:r||!o,error:j,label:A,id:i,name:i,onChange:L=>{d({target:{name:i,value:L,type:"select-category"}})},value:g||"",children:$.map(L=>(0,n.jsx)(Re.c,{value:L.uid,children:`${L.categoryName} - ${L.label}`},L.uid))})},zl=({dynamicZoneTarget:e,intlLabel:t,name:a,onChange:o,value:r})=>{const{formatMessage:l}=(0,K.A)(),{componentsGroupedByCategory:i,modifiedData:d}=Ue(),p=Pt(d.contentType.schema.attributes,e)?.components||[],g=Object.keys(i).reduce((A,v)=>{const M=i[v].filter(({uid:U})=>!p.includes(U));return M.length>0&&(A[v]=M),A},{}),f=Object.entries(g).reduce((A,v)=>{const[M,U]=v,$={label:M,children:U.map(({uid:L,schema:{displayName:F}})=>({label:F,value:L}))};return A.push($),A},[]),j=l({id:c("components.SelectComponents.displayed-value"),defaultMessage:"{number, plural, =0 {# components} one {# component} other {# components}} selected"},{number:r?.length??0});return(0,n.jsx)(B.B,{id:"select1",label:l(t),customizeContent:()=>j,name:a,onChange:A=>{o({target:{name:a,value:A,type:"select-components"}})},options:f,value:r||[]})},Ul=({intlLabel:e,error:t=void 0,modifiedData:a,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",g=f=>{r({target:{name:o,value:f,type:"select"}}),i&&a.default!==void 0&&a.default!==null&&r({target:{name:"default",value:null}})};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:f,disabled:j,hidden:A},key:v,value:M})=>(0,n.jsx)(Re.c,{value:M,disabled:j,hidden:A,children:d({id:f.id,defaultMessage:f.defaultMessage},f.values)},v))})},sa=({intlLabel:e,error:t=void 0,modifiedData:a,name:o,onChange:r,options:l,value:i=""})=>{const{formatMessage:d}=(0,K.A)(),u=d(e),p=t?d({id:t,defaultMessage:t}):"",g=f=>{r({target:{name:o,value:f,type:"select"}}),i&&(f==="biginteger"&&i!=="biginteger"&&(a.default!==void 0&&a.default!==null&&r({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&r({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&r({target:{name:"min",value:null}})),typeof f=="string"&&["decimal","float","integer"].includes(f)&&i==="biginteger"&&(a.default!==void 0&&a.default!==null&&r({target:{name:"default",value:null}}),a.max!==void 0&&a.max!==null&&r({target:{name:"max",value:null}}),a.min!==void 0&&a.min!==null&&r({target:{name:"min",value:null}})))};return(0,n.jsx)(oe.l,{error:p,label:u,id:o,name:o,onChange:g,value:i||"",children:l.map(({metadatas:{intlLabel:f,disabled:j,hidden:A},key:v,value:M})=>(0,n.jsx)(Re.c,{value:M,disabled:j,hidden:A,children:d(f)},v))})};sa.defaultProps={error:void 0,value:""};const Vl=({description:e=null,error:t=null,intlLabel:a,modifiedData:o,name:r,onChange:l,value:i=null})=>{const{formatMessage:d}=(0,K.A)(),u=(0,m.useRef)(l),p=o?.displayName||"";(0,m.useEffect)(()=>{p?u.current({target:{name:r,value:(0,C.n)(p)}}):u.current({target:{name:r,value:""}})},[p,r]);const g=t?d({id:t,defaultMessage:t}):"",f=e?d({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=d(a);return(0,n.jsx)(je.k,{error:g,label:j,id:r,hint:f,name:r,onChange:l,value:i||""})},oa=({form:e,formErrors:t,genericInputProps:a,modifiedData:o,onChange:r})=>{const{formatMessage:l}=(0,K.A)();return(0,n.jsx)(n.Fragment,{children:e.map((i,d)=>i.items.length===0?null:(0,n.jsxs)(y.a,{children:[i.sectionTitle&&(0,n.jsx)(y.a,{paddingBottom:4,children:(0,n.jsx)(S.o,{variant:"delta",as:"h3",children:l(i.sectionTitle)})}),(0,n.jsx)(_.x,{gap:4,children:i.items.map((u,p)=>{const g=`${d}.${p}`,f=D(o,u.name,void 0),j=Object.keys(t).find(v=>v===u.name),A=j?t[j].id:D(t,[...u.name.split(".").filter(v=>v!=="componentToCreate"),"id"],null);return u.type==="pushRight"?(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)("div",{})},u.name||g):(0,n.jsx)(ne.E,{col:u.size||6,children:(0,n.jsx)(N.ah,{...u,...a,error:A,onChange:r,value:f})},u.name||g)})})]},d))})},Gl=({description:e=null,disabled:t=!1,error:a="",intlLabel:o,labelAction:r,name:l,onChange:i,placeholder:d=null,value:u=""})=>{const{formatMessage:p}=(0,K.A)(),g=a?p({id:a,defaultMessage:a}):"",f=e?p({id:e.id,defaultMessage:e.defaultMessage},{...e.values}):"",j=p(o),A=d?p({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",v=Array.isArray(u)?u.join(`
`):"",M=U=>{const $=U.target.value.split(`
`);i({target:{name:l,value:$}})};return(0,n.jsx)(Pa.T,{disabled:t,error:g,label:j,labelAction:r,id:l,hint:f,name:l,onChange:M,placeholder:A,value:v,children:v})},we={name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.attribute.form.base.name.description"),defaultMessage:"No space is allowed for the name of the attribute"}},Hl={sections:[{sectionTitle:null,items:[we]}]},tt={base(e=""){return[{sectionTitle:null,items:[{name:`${e}displayName`,type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display Name"}},{name:`${e}category`,type:"select-category",intlLabel:{id:c("modalForm.components.create-component.category.label"),defaultMessage:"Select a category or enter a name to create a new one"}}]},{sectionTitle:null,items:[{name:`${e}icon`,type:"icon-picker",size:12,intlLabel:{id:c("modalForm.components.icon.label"),defaultMessage:"Icon"}}]}]},advanced(){return[]}},R={default:{name:"default",type:"text",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"}},max:{name:"max",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximum"),defaultMessage:"Maximum value"}},maxLength:{name:"maxLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.maximumLength"),defaultMessage:"Maximum length"}},min:{name:"min",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimum"),defaultMessage:"Minimum value"}},minLength:{name:"minLength",type:"checkbox-with-number-field",intlLabel:{id:c("form.attribute.item.minimumLength"),defaultMessage:"Minimum length"}},private:{name:"private",type:"checkbox",intlLabel:{id:c("form.attribute.item.privateField"),defaultMessage:"Private field"},description:{id:c("form.attribute.item.privateField.description"),defaultMessage:"This field will not show up in the API response"}},regex:{intlLabel:{id:c("form.attribute.item.text.regex"),defaultMessage:"RegExp pattern"},name:"regex",type:"text",description:{id:c("form.attribute.item.text.regex.description"),defaultMessage:"The text of the regular expression"}},required:{name:"required",type:"checkbox",intlLabel:{id:c("form.attribute.item.requiredField"),defaultMessage:"Required field"},description:{id:c("form.attribute.item.requiredField.description"),defaultMessage:"You won't be able to create an entry if this field is empty"}},unique:{name:"unique",type:"checkbox",intlLabel:{id:c("form.attribute.item.uniqueField"),defaultMessage:"Unique field"},description:{id:c("form.attribute.item.uniqueField.description"),defaultMessage:"You won't be able to create an entry if there is an existing entry with identical content"}}},Yl={blocks(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},boolean(){return{sections:[{sectionTitle:null,items:[{autoFocus:!0,type:"select-default-boolean",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},name:"default",options:[{value:"true",key:"true",metadatas:{intlLabel:{id:"true",defaultMessage:"true"}}},{value:"",key:"null",metadatas:{intlLabel:{id:"null",defaultMessage:"null"}}},{value:"false",key:"false",metadatas:{intlLabel:{id:"false",defaultMessage:"false"}}}]}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},component({repeatable:e},t){return t==="1"?{sections:tt.advanced()}:e?{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private,R.max,R.min]}]}:{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},date({type:e}){return{sections:[{sectionTitle:null,items:[{...R.default,type:e||"date",value:null,withDefaultValue:!1,disabled:!e,autoFocus:!1}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.private]}]}},dynamiczone(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.max,R.min]}]}},email(){return{sections:[{sectionTitle:null,items:[{...R.default,type:"email"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},enumeration(e){return{sections:[{sectionTitle:null,items:[{name:"default",type:"select",intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{},options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"}}},...(e.enum||[]).filter((t,a)=>e.enum.indexOf(t)===a&&t).map(t=>({key:t,value:t,metadatas:{intlLabel:{id:`${t}.no-override`,defaultMessage:t}}}))]},{intlLabel:{id:c("form.attribute.item.enumeration.graphql"),defaultMessage:"Name override for GraphQL"},name:"enumName",type:"text",validations:{},description:{id:c("form.attribute.item.enumeration.graphql.description"),defaultMessage:"Allows you to override the default generated name for GraphQL"}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},json(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},media(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:c("form.attribute.media.allowed-types"),defaultMessage:"Select allowed types of media"},name:"allowedTypes",type:"allowed-types-select",size:7,value:"",validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.private]}]}},number(e){const t=e.type==="decimal"||e.type==="float"?"any":1;return{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"default",type:e.type==="biginteger"?"text":"number",step:t,intlLabel:{id:c("form.attribute.settings.default"),defaultMessage:"Default value"},validations:{}}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.max,R.min,R.private]}]}},password(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},relation(){return{sections:[{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.private]}]}},richtext(){return{sections:[{sectionTitle:null,items:[R.default]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}},text(){return{sections:[{sectionTitle:null,items:[R.default,R.regex]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.unique,R.maxLength,R.minLength,R.private]}]}},uid(e){return{sections:[{sectionTitle:null,items:[{...R.default,disabled:Boolean(e.targetField),type:"text"}]},{sectionTitle:{id:"global.settings",defaultMessage:"Settings"},items:[R.required,R.maxLength,R.minLength,R.private]}]}}},zt={intlLabel:{id:"global.type",defaultMessage:"Type"},name:"createComponent",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.create"),defaultMessage:"Create a new component"},description:{id:c("form.attribute.component.option.create.description"),defaultMessage:"A component is shared across types and components, it will be available and accessible everywhere."},value:!0},{title:{id:c("form.attribute.component.option.reuse-existing"),defaultMessage:"Use an existing component"},description:{id:c("form.attribute.component.option.reuse-existing.description"),defaultMessage:"Reuse a component already created to keep your data consistent across content-types."},value:!1}]},ra={advanced:Yl,base:{component(e,t){if(t==="1"){const a=e.createComponent===!0?tt.base("componentToCreate."):[];return{sections:[{sectionTitle:null,items:[zt]},...a]}}return{sections:[{sectionTitle:null,items:[we,{name:"component",type:"select-component",intlLabel:{id:c("modalForm.attributes.select-component"),defaultMessage:"Select a component"},isMultiple:!1}]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"repeatable",type:"boolean-radio-group",size:12,radios:[{title:{id:c("form.attribute.component.option.repeatable"),defaultMessage:"Repeatable component"},description:{id:c("form.attribute.component.option.repeatable.description"),defaultMessage:"Best for multiple instances (array) of ingredients, meta tags, etc.."},value:!0},{title:{id:c("form.attribute.component.option.single"),defaultMessage:"Single component"},description:{id:c("form.attribute.component.option.single.description"),defaultMessage:"Best for grouping fields like full address, main information, etc..."},value:!1}]}]}]}},date(){return{sections:[{sectionTitle:null,items:[we,{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",type:"select-date",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"date",value:"date",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.date"),defaultMessage:"date (ex: 01/01/{currentYear})",values:{currentYear:new Date().getFullYear()}}}},{key:"datetime",value:"datetime",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.datetime"),defaultMessage:"datetime (ex: 01/01/{currentYear} 00:00 AM)",values:{currentYear:new Date().getFullYear()}}}},{key:"time",value:"time",metadatas:{intlLabel:{id:c("form.attribute.item.date.type.time"),defaultMessage:"time (ex: 00:00 AM)"}}}]}]}]}},enumeration(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{name:"enum",type:"textarea-enum",size:6,intlLabel:{id:c("form.attribute.item.enumeration.rules"),defaultMessage:"Values (one line per value)"},placeholder:{id:c("form.attribute.item.enumeration.placeholder"),defaultMessage:`Ex:
morning
noon
evening`},validations:{required:!0}}]}]}},media(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"multiple",size:12,type:"boolean-radio-group",radios:[{title:{id:c("form.attribute.media.option.multiple"),defaultMessage:"Multiple media"},description:{id:c("form.attribute.media.option.multiple.description"),defaultMessage:"Best for sliders, carousels or multiple files download"},value:!0},{title:{id:c("form.attribute.media.option.single"),defaultMessage:"Single media"},description:{id:c("form.attribute.media.option.single.description"),defaultMessage:"Best for avatar, profile picture or cover"},value:!1}]}]}]}},number(){return{sections:[{sectionTitle:null,items:[we,{intlLabel:{id:c("form.attribute.item.number.type"),defaultMessage:"Number format"},name:"type",type:"select-number",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"components.InputSelect.option.placeholder",defaultMessage:"Choose here"},hidden:!0}},{key:"integer",value:"integer",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.integer"),defaultMessage:"integer (ex: 10)"}}},{key:"biginteger",value:"biginteger",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.biginteger"),defaultMessage:"biginteger (ex: 123456789)"}}},{key:"decimal",value:"decimal",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.decimal"),defaultMessage:"decimal (ex: 2.22)"}}},{key:"float",value:"float",metadatas:{intlLabel:{id:c("form.attribute.item.number.type.float"),defaultMessage:"decimal (ex: 3.3333333)"}}}]}]}]}},relation(){return{sections:[{sectionTitle:null,items:[{intlLabel:{id:"FIXME",defaultMessage:"FIXME"},name:"relation",size:12,type:"relation"}]}]}},string(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},text(){return{sections:[{sectionTitle:null,items:[we]},{sectionTitle:null,items:[{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"type",size:12,type:"radio-group",radios:[{title:{id:c("form.attribute.text.option.short-text"),defaultMessage:"Sort text"},description:{id:c("form.attribute.text.option.short-text.description"),defaultMessage:"Best for titles, names, links (URL). It also enables exact search on the field."},value:"string"},{title:{id:c("form.attribute.text.option.long-text"),defaultMessage:"Long text"},description:{id:c("form.attribute.text.option.long-text.description"),defaultMessage:"Best for descriptions, biography. Exact search is disabled."},value:"text"}]}]}]}},uid(e,t,a){const o=a.filter(({type:r})=>["string","text"].includes(r)).map(({name:r})=>({key:r,value:r,metadatas:{intlLabel:{id:`${r}.no-override`,defaultMessage:r}}}));return{sections:[{sectionTitle:null,items:[{...we,placeholder:{id:c("modalForm.attribute.form.base.name.placeholder"),defaultMessage:"e.g. slug, seoUrl, canonicalUrl"}},{intlLabel:{id:c("modalForm.attribute.target-field"),defaultMessage:"Attached field"},name:"targetField",type:"select",options:[{key:"__null_reset_value__",value:"",metadatas:{intlLabel:{id:"global.none",defaultMessage:"None"}}},...o]}]}]}}}},Ut=e=>e?_i(e,{decamelize:!1,lowercase:!1,separator:"_"}):"",ia=/^[A-Za-z][_0-9A-Za-z]*$/,la=e=>({name:"attributeNameAlreadyUsed",message:N.iW.unique,test(t){if(!t)return!1;const a=(0,H.snakeCase)(t);return!e.some(o=>o===t?!1:(0,H.snakeCase)(o)===a)}}),Vt=e=>({name:"forbiddenAttributeName",message:c("error.attributeName.reserved-name"),test(t){if(!t)return!1;const a=(0,H.snakeCase)(t);return!e.some(o=>(0,H.snakeCase)(o)===a)}}),b={default:()=>T.Yj().nullable(),max:()=>T.ai().integer().nullable(),min:()=>T.ai().integer().when("max",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),maxLength:()=>T.ai().integer().positive(c("error.validation.positive")).nullable(),minLength:()=>T.ai().integer().min(0).when("maxLength",(e,t)=>e?t.max(e,c("error.validation.minSupMax")):t).nullable(),name(e,t){return T.Yj().test(la(e)).test(Vt(t)).matches(ia,N.iW.regex).required(N.iW.required)},required:()=>T.zM(),type:()=>T.Yj().required(N.iW.required),unique:()=>T.zM().nullable()},Gt=(e,t)=>({name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength(),regex:T.Yj().test({name:"isValidRegExpPattern",message:c("error.validation.regex"),test(o){return new RegExp(o||"")!==null}}).nullable()}),Ht=()=>({name:"isMinSuperiorThanMax",message:c("error.validation.minSupMax"),test(e){if(!e)return!0;const{max:t}=this.parent;return!t||Number.isNaN(Bt(e))?!0:Bt(t)>=Bt(e)}}),ut={date(e,t){const a={name:b.name(e,t),type:b.type()};return T.Ik(a)},datetime(e,t){const a={name:b.name(e,t),type:b.type()};return T.Ik(a)},time(e,t){const a={name:b.name(e,t),type:b.type()};return T.Ik(a)},default(e,t){const a={name:b.name(e,t),type:b.type()};return T.Ik(a)},biginteger(e,t){const a={name:b.name(e,t),type:b.type(),default:T.Yj().nullable().matches(/^-?\d*$/),unique:b.unique(),required:b.required(),max:T.Yj().nullable().matches(/^-?\d*$/,N.iW.regex),min:T.Yj().nullable().test(Ht()).matches(/^-?\d*$/,N.iW.regex)};return T.Ik(a)},boolean(e,t){const a={name:b.name(e,t),default:T.zM().nullable(),required:b.required(),unique:b.unique()};return T.Ik(a)},component(e,t){const a={name:b.name(e,t),type:b.type(),required:b.required(),max:b.max(),min:b.min(),component:T.Yj().required(N.iW.required)};return T.Ik(a)},decimal(e,t){const a={name:b.name(e,t),type:b.type(),default:T.ai(),required:b.required(),max:T.ai(),min:T.ai().test(Ht())};return T.Ik(a)},dynamiczone(e,t){const a={name:b.name(e,t),type:b.type(),required:b.required(),max:b.max(),min:b.min()};return T.Ik(a)},email(e,t){const a={name:b.name(e,t),type:b.type(),default:T.Yj().email().nullable(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.Ik(a)},enumeration(e,t){const a=/^[_A-Za-z][_0-9A-Za-z]*$/,o={name:T.Yj().test(la(e)).test(Vt(t)).matches(a,N.iW.regex).required(N.iW.required),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),enum:T.YO().of(T.Yj()).min(1,N.iW.min).test({name:"areEnumValuesUnique",message:c("error.validation.enum-duplicate"),test(r){return r?!qi(r.map(Ut).filter((i,d,u)=>u.indexOf(i)!==d)).length:!1}}).test({name:"doesNotHaveEmptyValues",message:c("error.validation.enum-empty-string"),test:r=>r?!r.map(Ut).some(l=>l===""):!1}).test({name:"doesMatchRegex",message:c("error.validation.enum-regex"),test:r=>r?r.map(Ut).every(l=>a.test(l)):!1}),enumName:T.Yj().nullable()};return T.Ik(o)},float(e,t){const a={name:b.name(e,t),type:b.type(),required:b.required(),default:T.ai(),max:T.ai(),min:T.ai().test(Ht())};return T.Ik(a)},integer(e,t){const a={name:b.name(e,t),type:b.type(),default:T.ai().integer(),unique:b.unique(),required:b.required(),max:b.max(),min:b.min()};return T.Ik(a)},json(e,t){const a={name:b.name(e,t),type:b.type(),required:b.required(),unique:b.unique()};return T.Ik(a)},media(e,t){const a={name:b.name(e,t),type:b.type(),multiple:T.zM(),required:b.required(),allowedTypes:T.YO().of(T.Yj().oneOf(["images","videos","files","audios"])).min(1).nullable()};return T.Ik(a)},password(e,t){const a={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.Ik(a)},relation(e,t,a,{initialData:o,modifiedData:r}){const l={name:b.name(e,t),target:T.Yj().required(N.iW.required),relation:T.Yj().required(),type:T.Yj().required(),targetAttribute:T.RZ(()=>{const i=(0,C.g)(r.relation,r.targetAttribute);if(i==="oneWay"||i==="manyWay")return T.Yj().nullable();const d=T.Yj().test(Vt(t)),p=[...a.map(({name:g})=>g),r.name].filter(g=>g!==o.targetAttribute);return d.matches(ia,N.iW.regex).test({name:"forbiddenTargetAttributeName",message:c("error.validation.relation.targetAttribute-taken"),test(g){return g?!p.includes(g):!1}}).required(N.iW.required)})};return T.Ik(l)},richtext(e,t){const a={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.Ik(a)},blocks(e,t){const a={name:b.name(e,t),type:b.type(),default:b.default(),unique:b.unique(),required:b.required(),maxLength:b.maxLength(),minLength:b.minLength()};return T.Ik(a)},string(e,t){const a=Gt(e,t);return T.Ik(a)},text(e,t){const a=Gt(e,t);return T.Ik(a)},uid(e,t){const a=Gt(e,t);return T.Ik(a)}},da=/^[A-Za-z][-_0-9A-Za-z]*$/,Zl=e=>{const t={name:T.Yj().matches(da,N.iW.regex).test({name:"nameNotAllowed",message:N.iW.unique,test(a){return a?!e.includes(a?.toLowerCase()):!1}}).required(N.iW.required)};return T.Ik(t)},Kl={base:{sections:[{sectionTitle:null,items:[{autoFocus:!0,name:"name",type:"text",intlLabel:{id:"global.name",defaultMessage:"Name"},description:{id:c("modalForm.editCategory.base.name.description"),defaultMessage:"No space is allowed for the name of the category"}}]}]}},Ql=(e,t,a,o,r)=>{const l={displayName:T.Yj().test({name:"nameAlreadyUsed",message:N.iW.unique,test(i){if(!i)return!1;const d=(0,C.c)(i,a),u=(0,H.snakeCase)(d),p=(0,H.snakeCase)(r);return e.every(g=>(0,H.snakeCase)(g)!==u)&&o.every(g=>(0,H.snakeCase)(g)!==p)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return t.every(u=>(0,H.snakeCase)(u)!==d)}}).required(N.iW.required),category:T.Yj().matches(da,N.iW.regex).required(N.iW.required),icon:T.Yj()};return T.Ik(l)},ca={name:"displayName",type:"text",intlLabel:{id:c("contentType.displayName.label"),defaultMessage:"Display name"}},Yt={advanced:{default(){return{sections:[{items:[{intlLabel:{id:c("contentType.draftAndPublish.label"),defaultMessage:"Draft & publish"},description:{id:c("contentType.draftAndPublish.description"),defaultMessage:"Allows writing a draft version of an entry, before it is published"},name:"draftAndPublish",type:"toggle-draft-publish",validations:{}}]}]}}},base:{create(){return{sections:[{sectionTitle:null,items:[ca,{description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text-singular"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text-plural"}]}]}},edit(){return{sections:[{sectionTitle:null,items:[ca,{disabled:!0,description:{id:c("contentType.apiId-singular.description"),defaultMessage:"Used to generate the API routes and databases tables/collections"},intlLabel:{id:c("contentType.apiId-singular.label"),defaultMessage:"API ID (Singular)"},name:"singularName",type:"text"},{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{disabled:!0,description:{id:c("contentType.apiId-plural.description"),defaultMessage:"Pluralized API ID"},intlLabel:{id:c("contentType.apiId-plural.label"),defaultMessage:"API ID (Plural)"},name:"pluralName",type:"text"},{intlLabel:{id:"global.type",defaultMessage:"Type"},name:"kind",type:"content-type-radio-group",size:12,radios:[{title:{id:c("form.button.collection-type.name"),defaultMessage:"Collection Type"},description:{id:c("form.button.collection-type.description"),defaultMessage:"Best for multiple instances like articles, products, comments, etc."},value:"collectionType"},{title:{id:c("form.button.single-type.name"),defaultMessage:"Single Type"},description:{id:c("form.button.single-type.description"),defaultMessage:"Best for single instance like about us, homepage, etc."},value:"singleType"}]}]}]}}}},Xl=({usedContentTypeNames:e=[],reservedModels:t=[],singularNames:a=[],pluralNames:o=[],collectionNames:r=[]})=>{const l={displayName:T.Yj().test({name:"nameAlreadyUsed",message:N.iW.unique,test(i){if(!i)return!1;const d=(0,C.b)(i),u=(0,H.snakeCase)(d);return!e.some(p=>(0,H.snakeCase)(p)===u)}}).test({name:"nameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.iW.required),pluralName:T.Yj().test({name:"pluralNameAlreadyUsed",message:N.iW.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameAlreadyUsedAsSingular",message:c("error.contentType.pluralName-equals-singularName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!a.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.pluralName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.singularName)!==(0,H.snakeCase)(i):!1}}).test({name:"pluralNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralNameNotAlreadyUsedInCollectionName",message:c("error.contentType.pluralName-equals-collectionName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!r.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.iW.required),singularName:T.Yj().test({name:"singularNameAlreadyUsed",message:N.iW.unique,test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!a.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"singularNameAlreadyUsedAsPlural",message:c("error.contentType.singularName-equals-pluralName"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!o.some(u=>(0,H.snakeCase)(u)===d)}}).test({name:"pluralAndSingularAreUnique",message:c("error.contentType.singularName-used"),test(i,d){return i?(0,H.snakeCase)(d.parent.pluralName)!==(0,H.snakeCase)(i):!1}}).test({name:"singularNameNotAllowed",message:c("error.contentTypeName.reserved-name"),test(i){if(!i)return!1;const d=(0,H.snakeCase)(i);return!t.some(u=>(0,H.snakeCase)(u)===d)}}).required(N.iW.required),draftAndPublish:T.zM(),kind:T.Yj().oneOf(["singleType","collectionType"]),reviewWorkflows:T.zM()};return T.Ik(l)},Zt={advanced:{default(){return{sections:tt.advanced()}}},base:{createComponent(){return{sections:[{sectionTitle:null,items:[zt]},...tt.base("componentToCreate.")]}},default(){return{sections:[{sectionTitle:null,items:[zt]},{sectionTitle:null,items:[{type:"pushRight",size:6,intlLabel:{id:"",defaultMessage:""},name:"pushRight"},{name:"components",type:"select-components",intlLabel:{id:c("modalForm.attributes.select-components"),defaultMessage:"Select the components"},isMultiple:!0}]}]}}}},ua=(e,t)=>{e.forEach(a=>{if(!("sectionTitle"in a)){t[0].items?.push(a);return}t.push(a)})},Jl=(e,t)=>`components_${(0,H.snakeCase)(t)}_${At((0,H.snakeCase)(e))}`,ma=(e,t)=>e.filter(({name:a})=>a!==t.initialData.name).map(({name:a})=>a),Ze={customField:{schema({schemaAttributes:e,attributeType:t,customFieldValidator:a,reservedNames:o,schemaData:r,ctbFormsAPI:l}){const i=ma(e,r);ut[t];let d;return t==="relation"?d=ut[t](i,o.attributes,[],{initialData:{},modifiedData:{}}):d=ut[t](i,o.attributes),l.makeCustomFieldValidator(d,a,i,o.attributes,r)},form:{base({customField:e}){const t=[{sectionTitle:null,items:[we]}];return e.options?.base&&ua(e.options.base,t),{sections:t}},advanced({customField:e,data:t,step:a,extensions:o,...r}){const l=[{sectionTitle:null,items:[]}],i=o.getAdvancedForm(["attribute",e.type],{data:t,type:e.type,step:a,...r});if(e.options?.advanced&&ua(e.options.advanced,l),i){const d={sectionTitle:{id:c("modalForm.custom-fields.advanced.settings.extended"),defaultMessage:"Extended settings"},items:i};l.push(d)}return{sections:l}}}},attribute:{schema(e,t,a,o,r,l){const i=e?.schema?.attributes??[],d=ma(i,r);try{const u=ut[t](d,a.attributes,o,r);return l.makeValidator(["attribute",t],u,d,a.attributes,o,r)}catch(u){return console.error("Error yup build schema",u),ut.default(d,a.attributes)}},form:{advanced({data:e,type:t,step:a,extensions:o,...r}){try{const l=ra.advanced[t](e,a).sections,i=o.getAdvancedForm(["attribute",t],{data:e,type:t,step:a,...r});return{sections:l.reduce((u,p)=>(p.sectionTitle===null?u.push(p):u.push({...p,items:[...p.items,...i]}),u),[])}}catch(l){return console.error(l),{sections:[]}}},base({data:e,type:t,step:a,attributes:o}){try{return ra.base[t](e,a,o)}catch{return Hl}}}},contentType:{schema(e,t,a,o,r,l){const i=Object.values(l).map(v=>v.schema.singularName),d=Object.values(l).map(v=>v?.schema?.pluralName??""),u=t?e.filter(v=>v!==a):e,p=t?i.filter(v=>{const{schema:M}=l[a];return M.singularName!==v}):i,g=t?d.filter(v=>{const{schema:M}=l[a];return M.pluralName!==v}):d,f=Object.values(l).map(v=>v?.schema?.collectionName??""),j=t?f.filter(v=>{const{schema:M}=l[a],U=M.collectionName;return v!==U}):f,A=Xl({usedContentTypeNames:u,reservedModels:o.models,singularNames:p,pluralNames:g,collectionNames:j});return r.makeValidator(["contentType"],A,u,o.models,p,g)},form:{base({actionType:e}){return e==="create"?Yt.base.create():Yt.base.edit()},advanced({extensions:e}){const t=Yt.advanced.default().sections.map(o=>o.items).flat(),a=e.getAdvancedForm(["contentType"]);return{sections:[{items:[...t,...a]}]}}}},component:{schema(e,t,a,o=!1,r,l,i=null){const d=o?e.filter(f=>f!==i):e,u=Object.values(r).map(f=>f?.schema?.collectionName),p=Jl(l,t),g=o?u.filter(f=>f!==p):u;return Ql(d,a.models,t,g,p)},form:{advanced(){return{sections:tt.advanced()}},base(){return{sections:tt.base()}}}},addComponentToDynamicZone:{form:{advanced(){return Zt.advanced.default()},base({data:e}){return e?.createComponent??!1?Zt.base.createComponent():Zt.base.default()}}},editCategory:{schema(e,t){const a=e.filter(o=>o!==t.name).map(o=>o.toLowerCase());return Zl(a)},form:{advanced:()=>({sections:[]}),base(){return Kl.base}}}},ql=()=>e=>e[`${C.p}_formModal`]||C.i,_l=()=>(0,Xn.Mz)(ql(),e=>e),ed=(e,t)=>{const a=D(e,["contentType","schema","kind"],"");return a==="singleType"||a===t.kind?!0:D(e,["contentType","schema","attributes"],[]).filter(({relation:l,type:i,targetAttribute:d})=>{const u=(0,C.g)(l,d);return i==="relation"&&!["oneWay","manyWay"].includes(u||"")}).length===0},td=(e="",t,a)=>{const o=["text","boolean","blocks","json","number","email","date","password","media","enumeration","relation","richtext"],r=e==="contentType",l=a.includes(t),i=!r&&!l;return r?[[...o.slice(0,-1),"uid",...o.slice(-1)],["component","dynamiczone"]]:i?[o,["component"]]:[o]},pa=e=>e.reduce((t,a)=>{const o=a.items.reduce((r,l)=>(l.name&&r.push(l.name),r),[]);return[...t,...o]},[]),nd=()=>{const{onCloseModal:e,onNavigateToChooseAttributeModal:t,onNavigateToAddCompoToDZModal:a,onNavigateToCreateComponentStep2:o,actionType:r,attributeName:l,attributeType:i,customFieldUid:d,categoryName:u,dynamicZoneTarget:p,forTarget:g,modalType:f,isOpen:j,kind:A,step:v,targetUid:M,showBackLink:U}=_e(),$=(0,N.AC)().get(d),L=(0,m.useRef)(),F=(0,m.useMemo)(_l,[]),w=(0,qe.wA)(),ee=(0,N.hN)(),he=(0,qe.d4)(Y=>F(Y),qe.bN),{push:$e}=(0,Le.W6)(),{trackUsage:V}=(0,N.z1)(),{formatMessage:Te}=(0,K.A)(),{getPlugin:te}=(0,N.vD)(),xe=te(C.p)?.apis.forms,de=xe.components.inputs,{addAttribute:Ve,addCustomFieldAttribute:ye,addCreatedComponentToDynamicZone:J,allComponentsCategories:I,changeDynamicZoneComponents:Kt,contentTypes:nt,components:Ke,createSchema:at,deleteCategory:Qt,deleteData:jt,editCategory:Xt,editCustomFieldAttribute:Jt,submitData:qt,modifiedData:ve,nestedComponents:_t,setModifiedData:en,sortedContentTypesList:tn,updateSchema:Mt,reservedNames:Qe}=Ue(),{componentToCreate:pt,formErrors:Ge,initialData:fe,isCreatingComponentWhileAddingAField:ft,modifiedData:h}=he,E=g==="contentType"||g==="component"?[g]:[g,M];(0,m.useEffect)(()=>{if(j){const Y=tn.filter(ea);f==="editCategory"&&en(),r==="edit"&&f==="attribute"&&g==="contentType"&&V("willEditFieldOfContentType");const Ne=[...E,"schema","attributes"],Be=Pt(D(ve,Ne,[]),p)||null;if(f==="editCategory"&&r==="edit"&&w({type:C.S,modalType:f,actionType:r,data:{name:u}}),f==="contentType"&&r==="create"&&w({type:C.S,modalType:f,actionType:r,data:{draftAndPublish:!0},pluginOptions:{}}),f==="contentType"&&r==="edit"){const{displayName:X,draftAndPublish:ge,kind:Ie,pluginOptions:Ae,pluralName:Bd,reviewWorkflows:Pd,singularName:wd}=D(ve,[...E,"schema"],{displayName:null,pluginOptions:{},singularName:null,pluralName:null});w({type:C.S,actionType:r,modalType:f,data:{displayName:X,draftAndPublish:ge,kind:Ie,pluginOptions:Ae,pluralName:Bd,reviewWorkflows:Pd??!1,singularName:wd}})}if(f==="component"&&r==="edit"){const X=D(ve,E,{});w({type:C.S,actionType:r,modalType:f,data:{displayName:X.schema.displayName,category:X.category,icon:X.schema.icon}})}if(f==="addComponentToDynamicZone"&&r==="edit"){const X={...Be,components:[],name:p,createComponent:!1,componentToCreate:{type:"component"}};w({type:C.d,attributeToEdit:X})}if(i){const ge={...Pt(D(ve,Ne,[]),l),name:l};i==="component"&&r==="edit"&&(ge.repeatable||Zn(ge,"repeatable",!1)),w(f==="customField"?{type:C.e,customField:$,isEditing:r==="edit",modifiedDataToSetForEditing:ge,forTarget:g}:{type:C.f,attributeType:i,nameToSetForRelation:D(Y,["0","title"],"error"),targetUid:D(Y,["0","uid"],"error"),isEditing:r==="edit",modifiedDataToSetForEditing:ge,step:v,forTarget:g})}}else w({type:C.R})},[r,l,i,u,p,g,j,f]);const G=f==="contentType",me=f==="component",Ce=f==="attribute",De=f==="customField",Oe=i==="component"&&Ce,Xe=r==="create",Je=D(h,"createComponent",!1)||ft,st=v==="1",Ta=f==="editCategory",ja=f==="chooseAttribute",nn=(0,C.b)(h.displayName||""),an=D(ve,[...E,"schema","attributes"],null),Td=async()=>{let Y;const Ne=Je&&v==="1"?D(h,"componentToCreate",{}):h;if(G)Y=Ze.contentType.schema(Object.keys(nt),r==="edit",D(ve,[...E,"uid"],null),Qe,xe,nt);else if(me)Y=Ze.component.schema(Object.keys(Ke),h.category||"",Qe,r==="edit",Ke,h.displayName||"",D(ve,[...E,"uid"],null));else if(De)Y=Ze.customField.schema({schemaAttributes:D(ve,[...E,"schema","attributes"],[]),attributeType:$.type,reservedNames:Qe,schemaData:{modifiedData:h,initialData:fe},ctbFormsAPI:xe,customFieldValidator:$.options?.validator});else if(Oe&&Je&&st)Y=Ze.component.schema(Object.keys(Ke),D(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else if(Ce&&!st){const Be=i==="relation"?"relation":h.type;let X=[];if(Be==="relation"){const ge=D(h,["target"],null);X=D(nt,[ge,"schema","attributes"],[]).filter(({name:Ae})=>r!=="edit"?!0:Ae!==fe.targetAttribute)}Y=Ze.attribute.schema(D(ve,E,{}),Be,Qe,X,{modifiedData:h,initialData:fe},xe)}else if(Ta)Y=Ze.editCategory.schema(I,fe);else if(st&&Je)Y=Ze.component.schema(Object.keys(Ke),D(h,"componentToCreate.category",""),Qe,r==="edit",Ke,h.componentToCreate.displayName||"");else return;await Y.validate(Ne,{abortEarly:!1})},Ma=(0,m.useCallback)(({target:{name:Y,value:Ne,type:Be,...X}})=>{const ge=["enumName","max","min","maxLength","minLength","regex","default"];let Ie;ge.includes(Y)&&Ne===""?Ie=null:Ie=Ne;const Ae=Object.assign({},Ge);Y==="max"&&delete Ae.min,Y==="maxLength"&&delete Ae.minLength,delete Ae[Y],w({type:C.h,errors:Ae}),w({type:C.j,keys:Y.split("."),value:Ie,...X})},[w,Ge]),Fe=async(Y,Ne=Xe)=>{Y.preventDefault();try{await Td(),$d(Ne);const Be=g==="components"?M:nn;if(G)if(Xe)at({...h,kind:A},f,nn),$e({pathname:`/plugins/${C.p}/content-types/${nn}`}),t({forTarget:g,targetUid:Be});else{ed(ve,h)?(e(),qt(h)):ee({type:"warning",message:{id:"notification.contentType.relations.conflict"}});return}else if(f==="component")if(Xe){const X=(0,C.c)(h.displayName,h.category),{category:ge,...Ie}=h;at(Ie,"component",X,ge),$e({pathname:`/plugins/${C.p}/component-categories/${ge}/${X}`}),t({forTarget:g,targetUid:X})}else{Mt(h,f,M),e();return}else if(Ta){if(Kn(fe.name)===Kn(h.name)){e();return}Xt(fe.name,h);return}else if(De){const X={attributeToSet:{...h,customField:d},forTarget:g,targetUid:M,initialAttribute:fe};r==="edit"?Jt(X):ye(X),Ne?t({forTarget:g,targetUid:Be}):e();return}else if(Ce&&!Je){if(i==="dynamiczone"){Ve(h,g,M,r==="edit",fe),Xe?(w({type:C.k}),L.current!==void 0&&L.current._handlers.setSelectedTabIndex(0),a({dynamicZoneTarget:h.name})):e();return}if(!Oe){Ve(h,g,M,r==="edit",fe),Ne?t({forTarget:g,targetUid:Be}):e();return}if(st){o(),w({type:C.l,forTarget:g});return}Ve(h,g,M,r==="edit",fe,!0),Ne?t({forTarget:g,targetUid:M}):e()}else if(Ce&&Je){if(st){V("willCreateComponentFromAttributesModal"),w({type:C.m,forTarget:g}),o();return}const{category:X,type:ge,...Ie}=pt,Ae=(0,C.c)(pt.displayName,X);at(Ie,ge,Ae,X,Je),Ve(h,g,M,!1),w({type:C.R}),Ne?t({forTarget:"components",targetUid:Ae}):e();return}else{if(st)if(Je){const{category:X,type:ge,...Ie}=h.componentToCreate,Ae=(0,C.c)(h.componentToCreate.displayName,X);at(Ie,ge,Ae,X,Je),J(p,[Ae]),t({forTarget:"components",targetUid:Ae})}else Kt(p,h.components),e();else console.error("This case is not handled");return}w({type:C.R})}catch(Be){const X=(0,N.ed)(Be);w({type:C.h,errors:X})}},jd=()=>{window.confirm(Te({id:"window.confirm.close-modal.file",defaultMessage:"Are you sure? Your changes will be lost."}))&&(e(),w({type:C.R}))},$a=()=>{Ot(h,fe)?(e(),w({type:C.R})):jd()},Md=Y=>{if(Y==="advanced"){if(G){V("didSelectContentTypeSettings");return}g==="contentType"&&V("didSelectContentTypeFieldSettings")}},$d=Y=>{f==="attribute"&&g==="contentType"&&i!=="dynamiczone"&&Y&&V("willAddMoreFieldToContentType")},Sd=()=>!!(f==="editCategory"||f==="component"||Xi(h,"createComponent")),Nd=td(g,M,_t);if(!j||!f)return null;const Sa=D(Ze,[f,"form"],{advanced:()=>({sections:[]}),base:()=>({sections:[]})}),Ld=g==="components"||g==="component",Na={customInputs:{"allowed-types-select":ol,"boolean-radio-group":xl,"checkbox-with-number-field":vl,"icon-picker":Ll,"content-type-radio-group":Cl,"radio-group":wt,relation:Pl,"select-category":wl,"select-component":Wl,"select-components":zl,"select-default-boolean":yl,"select-number":sa,"select-date":Ul,"toggle-draft-publish":Al,"text-plural":Fl,"text-singular":Vl,"textarea-enum":Gl,...de},componentToCreate:pt,dynamicZoneTarget:p,formErrors:Ge,isAddingAComponentToAnotherComponent:Ld,isCreatingComponentWhileAddingAField:ft,mainBoxHeader:D(ve,[...E,"schema","displayName"],""),modifiedData:h,naturePickerType:g,isCreating:Xe,targetUid:M,forTarget:g},La=Sa.advanced({data:h,type:i,step:v,actionType:r,attributes:an,extensions:xe,forTarget:g,contentTypeSchema:ve.contentType||{},customField:$}).sections,Fa=Sa.base({data:h,type:i,step:v,actionType:r,attributes:an,extensions:xe,forTarget:g,contentTypeSchema:ve.contentType||{},customField:$}).sections,Fd=pa(Fa),Id=pa(La),Rd=Object.keys(Ge).some(Y=>Fd.includes(Y)),Ed=Object.keys(Ge).some(Y=>Id.includes(Y)),kd=D(nt,[M,"schema","kind"]),Dd=()=>r==="edit"&&an.every(({name:Y})=>Y!==h?.name),Od=()=>{Dd()&&V("didEditFieldNameOnContentType")};return(0,n.jsxs)(wa.k,{onClose:$a,labelledBy:"title",children:[(0,n.jsx)(jl,{actionType:r,attributeName:l,categoryName:u,contentTypeKind:A,dynamicZoneTarget:p,modalType:f,forTarget:g,targetUid:M,attributeType:i,customFieldUid:d,showBackLink:U}),ja&&(0,n.jsx)(hl,{attributes:Nd,forTarget:g,kind:kd||"collectionType"}),!ja&&(0,n.jsxs)("form",{onSubmit:Fe,children:[(0,n.jsx)(We.c,{children:(0,n.jsxs)(pe.f,{label:"todo",id:"tabs",variant:"simple",ref:L,onTabChange:Y=>{Y===1&&Md("advanced")},children:[(0,n.jsxs)(x.s,{justifyContent:"space-between",children:[(0,n.jsx)($l,{actionType:r,forTarget:g,kind:A,step:v,modalType:f,attributeType:i,attributeName:l,customField:$}),(0,n.jsxs)(ce.t,{children:[(0,n.jsx)(ce.o,{hasError:Rd,children:Te({id:c("popUpForm.navContainer.base"),defaultMessage:"Basic settings"})}),(0,n.jsx)(ce.o,{hasError:Ed,disabled:Sd(),children:Te({id:c("popUpForm.navContainer.advanced"),defaultMessage:"Advanced settings"})})]})]}),(0,n.jsx)(se.c,{}),(0,n.jsx)(y.a,{paddingTop:6,children:(0,n.jsxs)(ie.T,{children:[(0,n.jsx)(ie.K,{children:(0,n.jsx)(x.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(oa,{form:Fa,formErrors:Ge,genericInputProps:Na,modifiedData:h,onChange:Ma})})}),(0,n.jsx)(ie.K,{children:(0,n.jsx)(x.s,{direction:"column",alignItems:"stretch",gap:6,children:(0,n.jsx)(oa,{form:La,formErrors:Ge,genericInputProps:Na,modifiedData:h,onChange:Ma})})})]})})]})}),(0,n.jsx)(Wa.j,{endActions:(0,n.jsx)(Tl,{deleteCategory:Qt,deleteContentType:jt,deleteComponent:jt,categoryName:fe.name,isAttributeModal:f==="attribute",isCustomFieldModal:f==="customField",isComponentToDzModal:f==="addComponentToDynamicZone",isComponentAttribute:i==="component",isComponentModal:f==="component",isContentTypeModal:f==="contentType",isCreatingComponent:r==="create",isCreatingDz:r==="create",isCreatingComponentAttribute:h.createComponent||!1,isCreatingComponentInDz:h.createComponent||!1,isCreatingComponentWhileAddingAField:ft,isCreatingContentType:r==="create",isEditingAttribute:r==="edit",isDzAttribute:i==="dynamiczone",isEditingCategory:f==="editCategory",isInFirstComponentStep:v==="1",onSubmitAddComponentAttribute:Fe,onSubmitAddComponentToDz:Fe,onSubmitCreateComponent:Fe,onSubmitCreateContentType:Fe,onSubmitCreateDz:Fe,onSubmitEditAttribute:Fe,onSubmitEditCategory:Fe,onSubmitEditComponent:Fe,onSubmitEditContentType:Fe,onSubmitEditCustomFieldAttribute:Fe,onSubmitEditDz:Fe,onClickFinish:Od}),startActions:(0,n.jsx)(ae.$,{variant:"tertiary",onClick:$a,children:Te({id:"app.components.Button.cancel",defaultMessage:"Cancel"})})})]})]})},ad=()=>e=>e[`${C.p}_dataManagerProvider`]||C.o,sd=()=>(0,Xn.Mz)(ad(),e=>e),od=(e,t)=>{const a=Object.keys(e).filter(o=>{const r=D(e,o,{}),l=D(t,o,{}),i=D(r,["isTemporary"],!1),d=!Ot(r,l);return i||d});return(0,C.q)(a)},rd=(e,t)=>{const a=ga(D(e,"schema.attributes",[]),t),o=D(e,"isTemporary",!1)?{tmpUID:e.uid}:{uid:e.uid};return Object.assign({},o,{category:e.category},Jn(e.schema,"attributes"),{attributes:a})},fa=(e,t=!1)=>{const a=D(e,"uid",null),o=ga(D(e,"schema.attributes",[]),a),r=t?{category:D(e,"category","")}:{},l=Object.assign(r,Jn(e.schema,"attributes"),{attributes:o});return delete l.uid,delete l.isTemporary,delete l.visible,delete l.restrictRelationsTo,l},ga=(e,t)=>e.reduce((a,{name:o,...r})=>{const l=r,i=l.target===t,d=l.type==="relation",u=D(l,"targetAttribute",null);if(!i)if(d){const p=Object.assign({},l,{targetAttribute:ha(u)});a[o]=Tt(p)}else a[o]=Tt(l);if(i){const p=l.target,g=Object.assign({},l,{target:p,targetAttribute:ha(u)});a[o]=Tt(g)}if(l.customField){const p={...l,type:"customField"};a[o]=Tt(p)}return a},{}),ha=e=>e==="-"?null:e,Tt=e=>Object.keys(e).reduce((t,a)=>(e[a]!==null&&a!=="plugin"&&(t[a]=e[a]),t),{}),id=(e,t,a)=>od(e,t).map(l=>{const i=D(e,l,{});return rd(i,a)}),ld=e=>tl(Object.keys(e).map(t=>({visible:e[t].schema.visible,name:t,title:e[t].schema.displayName,plugin:e[t].plugin||null,uid:t,to:`/plugins/${C.p}/content-types/${t}`,kind:e[t].schema.kind,restrictRelationsTo:e[t].schema.restrictRelationsTo})).filter(t=>t!==null),t=>el(t.title)),ya=e=>e.reduce((t,a)=>(t[a.uid]=a,t),{}),dd=(e,t,a,o)=>{const r=t.reduce((d,u)=>{const p=D(a,u,{});return d[u]=p,d},{});return{[o?"contentType":"component"]:e,components:r}},ba=e=>Object.keys(e).reduce((t,a)=>{const o=e[a].schema;return t[a]={...e[a],schema:{...o,attributes:cd(o.attributes)}},t},{}),cd=e=>Object.keys(e).reduce((t,a)=>(t.push({...e[a],name:a}),t),[]),ud=e=>{const t=Object.keys(e).reduce((a,o)=>{const r=D(e,[o]),l=r.uid;return md(r)&&a.push(l),a},[]);return(0,C.q)(t)},md=e=>D(e,["schema","attributes"],[]).some(a=>{const{type:o}=a;return o==="component"}),xa=e=>{const t=Object.keys(e).reduce((a,o)=>{const r=e?.[o]?.schema?.attributes??[],l=pd(r);return[...a,...l]},[]);return(0,C.q)(t)},pd=e=>e.reduce((t,a)=>{const{type:o,component:r}=a;return o==="component"&&t.push(r),t},[]),fd=(e,t)=>{const a=Object.keys(e).map(o=>D(e,[o,...t],""));return(0,C.q)(a)},va="did-not-kill-server",gd="server is down";function mt(e,t){return new Promise(a=>{fetch(`${window.strapi.backendURL}/_health`,{method:"HEAD",mode:"no-cors",headers:{"Content-Type":"application/json","Keep-Alive":"false"}}).then(o=>{if(o.status>=400)throw new Error(gd);if(!t)throw new Error(va);a(e)}).catch(o=>{setTimeout(()=>mt(e,o.message!==va).then(a),100)})})}const hd=e=>Object.values(e.attributes).filter(a=>a.type==="dynamiczone").every(a=>Array.isArray(a.components)&&a.components.length>0),yd=({children:e})=>{const t=(0,qe.wA)(),{components:a,contentTypes:o,isLoading:r,isLoadingForDataToBeSet:l,initialData:i,modifiedData:d,reservedNames:u}=(0,qe.d4)(sd()),p=(0,N.hN)(),{lockAppWithAutoreload:g,unlockAppWithAutoreload:f}=(0,N.Ip)(),{setCurrentStep:j}=(0,N.Cx)(),{getPlugin:A}=(0,N.vD)(),v=A(C.p),{autoReload:M}=(0,N.Xe)(),{formatMessage:U}=(0,K.A)(),{trackUsage:$}=(0,N.z1)(),{refetchPermissions:L}=(0,N.r5)(),{pathname:F}=(0,Le.zy)(),{onCloseModal:w}=_e(),ee=(0,Le.W5)(`/plugins/${C.p}/content-types/:uid`),he=(0,Le.W5)(`/plugins/${C.p}/component-categories/:categoryUid/:componentUid`),$e=(0,N.ry)(),{put:V,post:Te,del:te}=$e,Se=(0,m.useRef)();Se.current=U;const xe=M,de=ee!==null,Ve=de?"contentType":"component",ye=de?D(ee,"params.uid",null):D(he,"params.componentUid",null),J=(0,m.useRef)(),I=de?"content-types":"components";J.current=async()=>{try{const[{data:{data:h}},{data:{data:E}},{data:G}]=await Promise.all(["components","content-types","reserved-names"].map(Xe=>$e.get(`/${C.p}/${Xe}`))),me=ya(h),Ce=ba(me),De=ya(E),Oe=ba(De);t({type:C.G,components:Ce,contentTypes:Oe,reservedNames:G})}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}},(0,m.useEffect)(()=>(J.current(),()=>{t({type:C.r})}),[]),(0,m.useEffect)(()=>{!r&&ye&&Mt()},[r,F,ye]),(0,m.useEffect)(()=>{M||p({type:"info",message:{id:c("notification.info.autoreaload-disable")}})},[M,p]);const Kt=(h,E,G,me=!1,Ce,De=!1)=>{const Oe=me?C.x:C.y;t({type:Oe,attributeToSet:h,forTarget:E,targetUid:G,initialAttribute:Ce,shouldAddComponentToData:De})},nt=({attributeToSet:h,forTarget:E,targetUid:G,initialAttribute:me})=>{t({type:C.A,attributeToSet:h,forTarget:E,targetUid:G,initialAttribute:me})},Ke=({attributeToSet:h,forTarget:E,targetUid:G,initialAttribute:me})=>{t({type:C.E,attributeToSet:h,forTarget:E,targetUid:G,initialAttribute:me})},at=(h,E)=>{t({type:C.u,dynamicZoneTarget:h,componentsToAdd:E})},Qt=(h,E,G,me,Ce=!1)=>{const De=E==="contentType"?C.z:C.B;t({type:De,data:h,componentCategory:me,schemaType:E,uid:G,shouldAddComponentToData:Ce})},jt=(h,E)=>{t({type:C.C,dynamicZoneTarget:h,newComponents:E})},Xt=(h,E,G="")=>{const me=h==="components"?C.F:C.H;h==="contentType"&&$("willDeleteFieldOfContentType"),t({type:me,mainDataKey:h,attributeToRemoveName:E,componentUid:G})},Jt=async h=>{try{const E=`/${C.p}/component-categories/${h}`,G=window.confirm(U({id:c("popUpWarning.bodyMessage.category.delete")}));w(),G&&(g?.(),await te(E),await mt(!0),f?.(),await fe())}catch(E){console.error({err:E}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},qt=async()=>{try{const h=`/${C.p}/${I}/${ye}`,E=D(d,[Ve,"isTemporary"],!1),G=window.confirm(U({id:c(`popUpWarning.bodyMessage.${de?"contentType":"component"}.delete`)}));if(w(),G){if(E){t({type:C.D});return}g?.(),await te(h),await mt(!0),await f?.(),await fe()}}catch(h){console.error({err:h}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},ve=async(h,E)=>{try{const G=`/${C.p}/component-categories/${h}`;w(),g?.(),await V(G,E),await mt(!0),await f?.(),await fe()}catch(G){console.error({err:G}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},_t=()=>{const h=Object.assign({},a,d.components);if(!de){const G=D(d,"component",{});Zn(h,D(G,["uid"],""),G)}const E=ud(h);return(0,C.q)(E)},en=()=>{const h=xa(a),E=xa(d.components||{});return(0,C.q)([...E,...h])},tn=(h,E)=>{t({type:C.v,dzName:h,componentToRemoveIndex:E})},Mt=()=>{const E=D(de?o:a,ye??"",{schema:{attributes:[]}}),G=(0,C.s)(E.schema.attributes,a),me=dd(E,G,a,de),Ce=D(E,"isTemporary",!1)&&Qi(D(E,"schema.attributes",[]))===0;t({type:C.t,schemaToSet:me,hasJustCreatedSchema:Ce})},Qe=(0,m.useMemo)(()=>{const h=de?o:a;return ye==="create-content-type"?!1:!Object.keys(h).includes(ye||"")&&!r},[a,o,ye,de,r]),pt=(0,m.useMemo)(()=>{const h=Object.keys(o).filter(E=>D(o,[E,"schema","visible"],!0)).sort();return D(h,"0","create-content-type")},[o]);if(Qe)return(0,n.jsx)(Le.rd,{to:`/plugins/${C.p}/content-types/${pt}`});const Ge=async h=>{try{const E=D(d,[Ve,"isTemporary"],!1),G={components:id(d.components,a,ye)};if(de){const Oe=(v?.apis?.forms).mutateContentTypeSchema({...fa(d.contentType),...h},i.contentType);if(!hd(Oe)){p({type:"warning",message:{id:c("notification.error.dynamiczone-min.validation"),defaultMessage:"At least one component is required in a dynamic zone to be able to save a content type"}});return}G.contentType=Oe,$("willSaveContentType")}else G.component=fa(d.component,!0),$("willSaveComponent");g?.();const me=`/${C.p}/${I}`,Ce=E?me:`${me}/${ye}`;if(E?await Te(Ce,G):await V(Ce,G),await mt(!0),f?.(),E&&(i.contentType?.schema.kind==="collectionType"||i.contentType?.schema.kind==="singleType")&&j("contentTypeBuilder.success"),de){$("didSaveContentType");const De=D(G,["contentType","schema","name"],""),Oe=D(i,["contentType","schema","name"],"");!E&&De!==Oe&&$("didEditNameOfContentType")}else $("didSaveComponent");await J.current(),t({type:C.U}),await fe()}catch(E){de||$("didNotSaveComponent"),console.error({err:E.response}),p({type:"warning",message:{id:"notification.error"}})}finally{f?.()}},fe=async()=>{await L()},ft=(h,E,G)=>{t({type:C.w,data:h,schemaType:E,uid:G})};return(0,n.jsx)(qn.Provider,{value:{addAttribute:Kt,addCustomFieldAttribute:nt,addCreatedComponentToDynamicZone:at,allComponentsCategories:fd(a,["category"]),changeDynamicZoneComponents:jt,components:a,componentsGroupedByCategory:Ki(a,"category"),componentsThatHaveOtherComponentInTheirAttributes:_t(),contentTypes:o,createSchema:Qt,deleteCategory:Jt,deleteData:qt,editCategory:ve,editCustomFieldAttribute:Ke,isInDevelopmentMode:xe,initialData:i,isInContentTypeView:de,modifiedData:d,nestedComponents:en(),removeAttribute:Xt,removeComponentFromDynamicZone:tn,reservedNames:u,setModifiedData:Mt,sortedContentTypesList:ld(o),submitData:Ge,updateSchema:ft},children:l?(0,n.jsx)(N.Bl,{}):(0,n.jsxs)(n.Fragment,{children:[e,xe&&(0,n.jsx)(nd,{})]})})},bd=(0,m.memo)(yd),Ca={actionType:null,attributeName:null,attributeType:null,categoryName:null,dynamicZoneTarget:null,forTarget:null,modalType:null,isOpen:!1,showBackLink:!1,kind:null,step:null,targetUid:null,customFieldUid:null},xd=({children:e})=>{const[t,a]=m.useState(Ca),{trackUsage:o}=(0,N.z1)(),r=({attributeType:$,customFieldUid:L})=>{a(F=>({...F,actionType:"create",modalType:"customField",attributeType:$,customFieldUid:L}))},l=({attributeType:$,step:L})=>{t.forTarget==="contentType"&&o("didSelectContentTypeFieldType",{type:$}),a(F=>({...F,actionType:"create",modalType:"attribute",step:L,attributeType:$,showBackLink:!0}))},i=({dynamicZoneTarget:$,targetUid:L})=>{a(F=>({...F,dynamicZoneTarget:$,targetUid:L,modalType:"addComponentToDynamicZone",forTarget:"contentType",step:"1",actionType:"edit",isOpen:!0}))},d=({forTarget:$,targetUid:L})=>{a(F=>({...F,actionType:"create",forTarget:$,targetUid:L,modalType:"chooseAttribute",isOpen:!0,showBackLink:!1}))},u=$=>{a(L=>({...L,...$,isOpen:!0}))},p=$=>{a(L=>({...L,categoryName:$,actionType:"edit",modalType:"editCategory",isOpen:!0}))},g=({forTarget:$,targetUid:L,attributeName:F,attributeType:w,customFieldUid:ee})=>{a(he=>({...he,modalType:"customField",customFieldUid:ee,actionType:"edit",forTarget:$,targetUid:L,attributeName:F,attributeType:w,isOpen:!0}))},f=({forTarget:$,targetUid:L,attributeName:F,attributeType:w,step:ee})=>{a(he=>({...he,modalType:"attribute",actionType:"edit",forTarget:$,targetUid:L,attributeName:F,attributeType:w,step:ee,isOpen:!0}))},j=({modalType:$,forTarget:L,targetUid:F,kind:w})=>{a(ee=>({...ee,modalType:$,actionType:"edit",forTarget:L,targetUid:F,kind:w,isOpen:!0}))},A=()=>{a(Ca)},v=({forTarget:$,targetUid:L})=>{a(F=>({...F,forTarget:$,targetUid:L,modalType:"chooseAttribute"}))},M=()=>{a($=>({...$,attributeType:"component",modalType:"attribute",step:"2"}))},U=({dynamicZoneTarget:$})=>{a(L=>({...L,dynamicZoneTarget:$,modalType:"addComponentToDynamicZone",actionType:"create",step:"1",attributeType:null,attributeName:null}))};return(0,n.jsx)(_n.Provider,{value:{...t,onClickSelectField:l,onClickSelectCustomField:r,onCloseModal:A,onNavigateToChooseAttributeModal:v,onNavigateToAddCompoToDZModal:U,onOpenModalAddComponentsToDZ:i,onNavigateToCreateComponentStep2:M,onOpenModalAddField:d,onOpenModalCreateSchema:u,onOpenModalEditCategory:p,onOpenModalEditField:f,onOpenModalEditCustomField:g,onOpenModalEditSchema:j,setFormModalNavigationState:a},children:e})},vd=(0,m.lazy)(()=>s.e(8982).then(s.bind(s,38982))),Cd=()=>{const{url:e}=(0,Le.W5)();return(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(N.Bl,{}),children:(0,n.jsx)(Le.dO,{children:(0,n.jsx)(Le.qh,{path:`${e}/:componentUid`,children:(0,n.jsx)(vd,{})})})})},Aa=(0,m.lazy)(()=>s.e(8982).then(s.bind(s,38982))),Ad=Object.freeze(Object.defineProperty({__proto__:null,default:()=>{const{formatMessage:e}=(0,K.A)(),t=e({id:`${C.p}.plugin.name`,defaultMessage:"Content Types Builder"}),{startSection:a}=(0,N.Cx)(),o=(0,m.useRef)(a);return(0,m.useEffect)(()=>{o.current&&o.current("contentTypeBuilder")},[]),(0,n.jsxs)(N.kz,{permissions:C.P.main,children:[(0,n.jsx)(Ua.m,{title:t}),(0,n.jsx)(xd,{children:(0,n.jsx)(bd,{children:(0,n.jsx)(za.P,{sideNav:(0,n.jsx)(al,{}),children:(0,n.jsx)(m.Suspense,{fallback:(0,n.jsx)(N.Bl,{}),children:(0,n.jsxs)(Le.dO,{children:[(0,n.jsx)(Le.qh,{path:`/plugins/${C.p}/content-types/create-content-type`,component:Aa}),(0,n.jsx)(Le.qh,{path:`/plugins/${C.p}/content-types/:uid`,component:Aa}),(0,n.jsx)(Le.qh,{path:`/plugins/${C.p}/component-categories/:categoryUid`,component:Cd})]})})})})})]})}},Symbol.toStringTag,{value:"Module"}))},45635:(W,Z,s)=>{var n=s(87212),m=s(4191),y=s(39226),P=s(3956),O=y(function(B,x){if(B==null)return[];var S=x.length;return S>1&&P(B,x[0],x[1])?x=[]:S>2&&P(x[0],x[1],x[2])&&(x=[x[0]]),m(B,n(x,1),[])});W.exports=O},48126:(W,Z,s)=>{var n=s(64958);function m(y,P,O){for(var B=-1,x=y.criteria,S=P.criteria,z=x.length,_=O.length;++B<z;){var ne=n(x[B],S[B]);if(ne){if(B>=_)return ne;var re=O[B];return ne*(re=="desc"?-1:1)}}return y.index-P.index}W.exports=m},49605:(W,Z,s)=>{var n=s(33999),m=s(20598),y=s(71387);function P(O){return m(O)?y(O):n(O)}W.exports=P},64958:(W,Z,s)=>{var n=s(91662);function m(y,P){if(y!==P){var O=y!==void 0,B=y===null,x=y===y,S=n(y),z=P!==void 0,_=P===null,ne=P===P,re=n(P);if(!_&&!re&&!S&&y>P||S&&z&&ne&&!_&&!re||B&&z&&ne||!O&&ne||!x)return 1;if(!B&&!S&&!re&&y<P||re&&O&&x&&!B&&!S||_&&O&&x||!z&&x||!ne)return-1}return 0}W.exports=m},71387:W=>{var Z="\\ud800-\\udfff",s="\\u0300-\\u036f",n="\\ufe20-\\ufe2f",m="\\u20d0-\\u20ff",y=s+n+m,P="\\ufe0e\\ufe0f",O="["+Z+"]",B="["+y+"]",x="\\ud83c[\\udffb-\\udfff]",S="(?:"+B+"|"+x+")",z="[^"+Z+"]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",ne="[\\ud800-\\udbff][\\udc00-\\udfff]",re="\\u200d",We=S+"?",pe="["+P+"]?",ce="(?:"+re+"(?:"+[z,_,ne].join("|")+")"+pe+We+")*",se=pe+We+ce,ie="(?:"+[z+B+"?",B,_,ne,O].join("|")+")",oe=RegExp(x+"(?="+x+")|"+ie+se,"g");function Re(Ee){for(var be=oe.lastIndex=0;oe.test(Ee);)++be;return be}W.exports=Re},71547:(W,Z,s)=>{var n=s(19913);function m(y){return y&&y.length?n(y):[]}W.exports=m},74565:W=>{function Z(s,n){var m=s.length;for(s.sort(n);m--;)s[m]=s[m].value;return s}W.exports=Z},75821:(W,Z,s)=>{var n=s(91522);function m(y,P){return function(O,B){if(O==null)return O;if(!n(O))return y(O,B);for(var x=O.length,S=P?x:-1,z=Object(O);(P?S--:++S<x)&&B(z[S],S,z)!==!1;);return O}}W.exports=m},80846:(W,Z,s)=>{"use strict";s.d(Z,{B:()=>P});var n=s(92132),m=s(63891),y=s(5391);const P=({options:B,...x})=>(0,n.jsx)(y.KF,{...x,children:B.map(S=>"children"in S?(0,n.jsx)(y.np,{label:S.label,values:S.children.map(z=>z.value.toString()),children:S.children.map(z=>(0,n.jsx)(O,{value:z.value,children:z.label},z.value))},S.label):(0,n.jsx)(y.fe,{value:S.value,children:S.label},S.value))}),O=(0,m.default)(y.fe)`
  padding-left: ${({theme:B})=>B.spaces[7]};
`},88532:(W,Z,s)=>{var n=s(94445),m=s(7233),y=s(45353),P=s(82261);function O(B,x){return function(S,z){var _=P(S)?n:m,ne=x?x():{};return _(S,B,y(z,2),ne)}}W.exports=O},89102:(W,Z,s)=>{var n=s(85306);function m(y){return n(y).toLowerCase()}W.exports=m},94445:W=>{function Z(s,n,m,y){for(var P=-1,O=s==null?0:s.length;++P<O;){var B=s[P];n(y,B,m(B),s)}return y}W.exports=Z},94710:(W,Z,s)=>{var n=s(95292),m=s(88532),y=Object.prototype,P=y.hasOwnProperty,O=m(function(B,x,S){P.call(B,S)?B[S].push(x):n(B,S,[x])});W.exports=O},97449:(W,Z,s)=>{var n=s(85373),m=s(75821),y=m(n);W.exports=y}}]);
