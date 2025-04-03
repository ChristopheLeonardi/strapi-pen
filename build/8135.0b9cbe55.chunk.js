(self.webpackChunkstrapi_pen=self.webpackChunkstrapi_pen||[]).push([[8135],{714:(N,k,c)=>{"use strict";c.d(k,{m:()=>y});var s=c(92132),j=c(44370),m=c(57842);const y=({children:v,isCurrent:O=!1,...$})=>(0,s.jsx)(j.a,{paddingLeft:2,paddingRight:2,paddingTop:1,paddingBottom:1,children:(0,s.jsx)(m.o,{variant:"pi",textColor:"neutral800",fontWeight:O?"bold":"normal","aria-current":O,...$,children:v})});y.displayName="Crumb"},7233:(N,k,c)=>{var s=c(97449);function j(m,y,v,O){return s(m,function($,S,I){y(O,$,v($),I)}),O}N.exports=j},32372:(N,k,c)=>{"use strict";c.d(k,{B:()=>I});var s=c(92132),j=c(21272),m=c(63891),y=c(44370),v=c(57842);const O=()=>(0,s.jsx)(y.a,{"aria-hidden":!0,paddingLeft:1,paddingRight:1,children:(0,s.jsx)(v.o,{variant:"pi",textColor:"neutral500",children:"/"})});O.displayName="Divider";var $=c(43242);const S=(0,m.default)($.s)`
  // CrumbLinks do have padding-x, because they need to have a
  // interaction effect, which mis-aligns the breadcrumbs on the left.
  // This normalizes the behavior by moving the first item to left by
  // the same amount it has inner padding
  :first-child {
    margin-left: ${({theme:J})=>`calc(-1*${J.spaces[2]})`};
  }
`,I=({label:J,children:Q,...pe})=>{const q=j.Children.toArray(Q);return(0,s.jsx)(y.a,{"aria-label":J,...pe,children:(0,s.jsx)(S,{as:"ol",children:j.Children.map(q,(he,ge)=>{const re=q.length>1&&ge+1<q.length;return(0,s.jsxs)($.s,{inline:!0,as:"li",children:[he,re&&(0,s.jsx)(O,{})]})})})})};I.displayName="Breadcrumbs"},78135:(N,k,c)=>{"use strict";c.d(k,{P:()=>Rs});var s=c(92132),j=c(21272),m=c(43242),y=c(44370),v=c(72182),O=c(57842),$=c(69564),S=c(50642),I=c(6479),J=c(53900),Q=c(32161),pe=c(80846),q=c(47098),he=c(96294),ge=c(80725),re=c(12050),we=c(57564),Ge=c(68065),Je=c(15926),Oe=c(44622),ee=c(83724),Ee=c(8769),be=c(88761),me=c(51187),M=c(2600),ae=c(412),se=c(77965),F=c(48940),K=c(54894),w=c(408),Xe=c(95267),Ye=c(59080),fe=c(94710),Ae=c(35223),L=c(63891),ze=c(28556),Ze=c(28816),Qe=c(99787),qe=c(7448),es=c(32372),ss=c(714),ts=c(39404);const[ns,os]=(0,Xe.q)("PermissionsDataManager"),z=()=>os("usePermissionsDataManager"),Me=e=>Array.isArray(e)?e.reduce((t,o)=>(Array.isArray(o)?t.push(...Me(o)):t.push(o),t),[]):[],X=e=>(0,w.F)(e)?Me(Object.values(e).map(t=>(0,w.F)(t)?X(t):t)):[],ve=(e,t,o)=>e.find(n=>n.action===t&&n.subject===o),is=e=>{const t=Pe(e.plugins),o=Pe(e.settings),n=Te(e.collectionTypes),r=Te(e.singleTypes);return[...t,...o,...n,...r]},Pe=e=>Object.values(e).reduce((t,o)=>{const n=Object.values(o).reduce((r,a)=>{const d=Object.entries(a).reduce((i,[l,{conditions:u,properties:{enabled:p}}])=>(p&&i.push({action:l,subject:null,conditions:Ce(u),properties:{}}),i),[]);return[...r,...d]},[]);return[...t,...n]},[]),Te=e=>Object.entries(e).reduce((o,n)=>{const[r,a]=n,d=Object.entries(a).reduce((i,l)=>{const[u,p]=l;if(!X(p).some(f=>f))return i;if(!p?.properties?.enabled){const f=Object.entries(p.properties).reduce((x,_)=>{const[h,C]=_;return x.properties[h]=De(C),x},{action:u,subject:r,conditions:Ce(p.conditions),properties:{}});return[...i,f]}return p.properties.enabled&&i.push({action:u,subject:r,properties:{},conditions:Ce(p.conditions)}),i},[]);return[...o,...d]},[]),De=(e,t="")=>Object.entries(e).reduce((o,n)=>{const[r,a]=n;return(0,w.F)(a)?[...o,...De(a,`${t}${r}.`)]:(a&&!(0,w.F)(a)&&o.push(`${t}${r}`),o)},[]),Ce=e=>Object.entries(e).filter(([,t])=>t).map(([t])=>t),Se=(e,t=[])=>e.reduce((o,n)=>(o[n.id]=t.indexOf(n.id)!==-1,o),{}),$e=(e,t,o=[])=>e.reduce((n,{categoryId:r,childrenForm:a})=>{const d=a.reduce((i,l)=>(i[l.subCategoryId]=l.actions.reduce((u,p)=>{const g=ve(o,p.action,null);return u[p.action]={properties:{enabled:g!==void 0},conditions:Se(t,g?.conditions??[])},u},{}),i),{});return n[r]=d,n},{}),rs=(e,t,o)=>{const n=({children:r=[]},a,d="")=>r.reduce((i,l)=>{if(l.children)return{...i,[l.value]:n(l,a,`${d}${l.value}.`)};const u=a.indexOf(`${d}${l.value}`)!==-1;return i[l.value]=u,i},{});return e.reduce((r,a)=>{const d=t.properties.find(({value:i})=>i===a);if(d){const i=o?.properties[d.value]??[],l=n(d,i);r.properties[a]=l}return r},{properties:{}})},Le=({subjects:e,actions:t=[]},o,n=[])=>t.reduce((r,a)=>{const d=a.subjects.reduce((l,u)=>{const p=e.find(({uid:g})=>g===u)||null;return p&&(l[u]=p),l},{});if(se(d))return r;const i=Object.keys(d).reduce((l,u)=>{const{actionId:p,applyToProperties:g}=a,_=d[u].properties.map(({value:P})=>P).every(P=>(g||[]).indexOf(P)===-1),h=ve(n,p,u),C=Se(o,h?.conditions??[]);if(l[u]||(l[u]={}),se(g)||_)return l[u][p]={properties:{enabled:h!==void 0},conditions:C},l;const E=rs(g,d[u],h);return l[u][p]={...E,conditions:C},l},{});return Ye(r,i)},{}),Be=(e,t)=>Object.entries(fe(e,t)).map(([o,n])=>({category:o,categoryId:o.split(" ").join("-"),childrenForm:Object.entries(fe(n,"subCategory")).map(([r,a])=>({subCategoryName:r,subCategoryId:r.split(" ").join("-"),actions:a}))})),le=e=>Object.keys(e).reduce((t,o)=>{const n=e[o];if((0,w.F)(n)&&!ae(n,"conditions"))return{...t,[o]:le(n)};if((0,w.F)(n)&&ae(n,"conditions")&&!X(Ae(n,"conditions")).some(a=>a)){const a=Object.keys(n.conditions).reduce((d,i)=>(d[i]=!1,d),{});return{...t,[o]:{...n,conditions:a}}}return t[o]=n,t},{}),te=(e,t,o=!1)=>Object.keys(e).reduce((n,r)=>{const a=e[r];return r==="conditions"&&!o?(n[r]=a,n):(0,w.F)(a)?{...n,[r]:te(a,t,r==="fields")}:(n[r]=t,n)},{}),H=`${120/16}rem`,xe=`${200/16}rem`,de=`${53/16}rem`,_e=e=>e?Object.entries(e).reduce((t,[o,n])=>(o!=="conditions"&&(t[o]=n),t),{}):null,Y=e=>{const t=_e(e),o=X(t);if(!o.length)return{hasAllActionsSelected:!1,hasSomeActionsSelected:!1};const n=o.every(a=>a),r=o.some(a=>a)&&!n;return{hasAllActionsSelected:n,hasSomeActionsSelected:r}},ce=e=>e.charAt(0).toUpperCase()+e.slice(1),Re=(0,L.default)(m.s)`
  padding-right: ${({theme:e})=>e.spaces[2]};
  overflow: hidden;
  flex: 1;
  ${({isCollapsable:e})=>e&&"cursor: pointer;"}
`,je=L.default.div`
  width: ${H};
`,Ie=()=>(0,s.jsx)(y.a,{color:"danger700",paddingLeft:1,children:"*"}),We=({checkboxName:e="",children:t,isActive:o=!1,isCollapsable:n=!1,isFormDisabled:r=!1,label:a,onChange:d,onClick:i,someChecked:l=!1,value:u})=>{const{formatMessage:p}=(0,K.A)();return(0,s.jsxs)(m.s,{alignItems:"center",paddingLeft:6,width:xe,shrink:0,children:[(0,s.jsx)(y.a,{paddingRight:2,children:(0,s.jsx)(v.J,{name:e,"aria-label":p({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:a}),disabled:r,onValueChange:g=>d({target:{name:e,value:g}}),indeterminate:l,value:u})}),(0,s.jsxs)(Re,{title:a,alignItems:"center",isCollapsable:n,...n&&{onClick:i,"aria-expanded":o,onKeyDown:({key:g})=>(g==="Enter"||g===" ")&&i(),tabIndex:0,role:"button"},children:[(0,s.jsx)(O.o,{fontWeight:o?"bold":void 0,textColor:o?"primary600":"neutral800",ellipsis:!0,children:ce(a)}),t]})]})},as=({availableActions:e=[],childrenForm:t=[],isFormDisabled:o,label:n,pathToData:r,propertyName:a})=>{const d=(0,j.useMemo)(()=>e.map(i=>{const l=Array.isArray(i.applyToProperties)&&i.applyToProperties.indexOf(a)!==-1&&i.isDisplayed;return{label:i.label,actionId:i.actionId,isActionRelatedToCurrentProperty:l}}),[e,a]);return(0,s.jsxs)(m.s,{display:"inline-flex",direction:"column",minWidth:0,children:[(0,s.jsx)(fs,{label:n,headers:d}),(0,s.jsx)(y.a,{children:t.map(({children:i,label:l,value:u,required:p},g)=>(0,s.jsx)(ls,{childrenForm:i,label:l,isFormDisabled:o,name:u,required:p,propertyActions:d,pathToData:r,propertyName:a,isOdd:g%2===0},u))})]})},ls=({childrenForm:e=[],label:t,isFormDisabled:o=!1,name:n,required:r=!1,pathToData:a,propertyActions:d,propertyName:i,isOdd:l=!1})=>{const{formatMessage:u}=(0,K.A)(),[p,g]=j.useState(null),{modifiedData:f,onChangeCollectionTypeLeftActionRowCheckbox:x,onChangeParentCheckbox:_,onChangeSimpleCheckbox:h}=z(),C=p===n,E=(0,j.useMemo)(()=>Array.isArray(e)?e:[],[e]),P=E.length>0,B=j.useCallback(()=>{P&&g(T=>T===n?null:n)},[P,n]),b=({target:{value:T}})=>{x(a,i,n,T)},{hasAllActionsSelected:A,hasSomeActionsSelected:D}=(0,j.useMemo)(()=>ds(d,f,a,i,n),[d,f,a,i,n]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(cs,{alignItems:"center",isCollapsable:P,isActive:C,background:l?"neutral100":"neutral0",children:(0,s.jsxs)(m.s,{children:[(0,s.jsxs)(We,{onChange:b,onClick:B,isCollapsable:P,isFormDisabled:o,label:t,someChecked:D,value:A,isActive:C,children:[r&&(0,s.jsx)(Ie,{}),(0,s.jsx)(ne,{$isActive:C})]}),(0,s.jsx)(m.s,{children:d.map(({label:T,isActionRelatedToCurrentProperty:W,actionId:U})=>{if(!W)return(0,s.jsx)(je,{},T);const R=[...a.split(".."),U,"properties",i,n];if(!P){const V=M(f,R,!1);return(0,s.jsx)(m.s,{width:H,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:R.join(".."),"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),onValueChange:Ks=>{h({target:{name:R.join(".."),value:Ks}})},value:V})},U)}const Z=M(f,R,{}),{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Z);return(0,s.jsx)(m.s,{width:H,position:"relative",justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:o,name:R.join(".."),onValueChange:V=>{_({target:{name:R.join(".."),value:V}})},"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${n} ${T}`}),value:G,indeterminate:ie})},T)})})]})}),C&&(0,s.jsx)(ke,{childrenForm:E,isFormDisabled:o,parentName:n,pathToDataFromActionRow:a,propertyName:i,propertyActions:d,recursiveLevel:0})]})},ds=(e,t,o,n,r)=>{const d=e.reduce((i,l)=>(l.isActionRelatedToCurrentProperty&&i.push(l.actionId),i),[]).reduce((i,l)=>{const u=M(t,[...o.split(".."),l,"properties",n,r],!1);return i[l]=u,i},{});return Y(d)},cs=(0,L.default)(m.s)`
  height: ${de};
  flex: 1;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,ne=(0,L.default)(ze.A)`
  display: none;
  width: ${10/16}rem;
  transform: rotate(${({$isActive:e})=>e?"180":"0"}deg);
  margin-left: ${({theme:e})=>e.spaces[2]};
`,ke=({childrenForm:e=[],isFormDisabled:t,recursiveLevel:o,pathToDataFromActionRow:n,propertyActions:r,parentName:a,propertyName:d})=>{const{formatMessage:i}=(0,K.A)(),{modifiedData:l,onChangeParentCheckbox:u,onChangeSimpleCheckbox:p}=z(),[g,f]=j.useState(null),x=h=>{f(C=>C===h?null:h)},_=(0,j.useMemo)(()=>g?e.find(({value:h})=>h===g):null,[g,e]);return(0,s.jsxs)(y.a,{paddingLeft:"2rem",children:[(0,s.jsx)(hs,{}),e.map(({label:h,value:C,required:E,children:P},B)=>{const b=B+1<e.length,A=Array.isArray(P),D=g===C;return(0,s.jsxs)(us,{isVisible:b,children:[(0,s.jsxs)(m.s,{height:de,children:[(0,s.jsx)(gs,{children:(0,s.jsx)(ms,{width:"20",height:"23",viewBox:"0 0 20 23",fill:"none",xmlns:"http://www.w3.org/2000/svg",color:"primary200",children:(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.02477 14.7513C8.65865 17.0594 11.6046 18.6059 17.5596 18.8856C18.6836 18.9384 19.5976 19.8435 19.5976 20.9688V20.9688C19.5976 22.0941 18.6841 23.0125 17.5599 22.9643C10.9409 22.6805 6.454 20.9387 3.75496 17.1258C0.937988 13.1464 0.486328 7.39309 0.486328 0.593262H4.50974C4.50974 7.54693 5.06394 11.9813 7.02477 14.7513Z",fill:"#D9D8FF"})})}),(0,s.jsxs)(m.s,{style:{flex:1},children:[(0,s.jsx)(ps,{level:o,isActive:D,isCollapsable:A,children:(0,s.jsxs)(Re,{alignItems:"center",isCollapsable:A,...A&&{onClick:()=>x(C),"aria-expanded":D,onKeyDown:({key:T})=>(T==="Enter"||T===" ")&&x(C),tabIndex:0,role:"button"},title:h,children:[(0,s.jsx)(O.o,{ellipsis:!0,children:ce(h)}),E&&(0,s.jsx)(Ie,{}),(0,s.jsx)(ne,{$isActive:D})]})}),(0,s.jsx)(m.s,{style:{flex:1},children:r.map(({actionId:T,label:W,isActionRelatedToCurrentProperty:U})=>{if(!U)return(0,s.jsx)(je,{},T);const R=[...n.split(".."),T,"properties",d,...a.split(".."),C],Z=M(l,R,!1);if(!P)return(0,s.jsx)(m.s,{position:"relative",width:H,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${W}`}),onValueChange:V=>{p({target:{name:R.join(".."),value:V}})},value:Z})},W);const{hasAllActionsSelected:G,hasSomeActionsSelected:ie}=Y(Z);return(0,s.jsx)(m.s,{position:"relative",width:H,justifyContent:"center",alignItems:"center",children:(0,s.jsx)(v.J,{disabled:t,name:R.join(".."),"aria-label":i({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${a} ${h} ${W}`}),onValueChange:V=>{u({target:{name:R.join(".."),value:V}})},value:G,indeterminate:ie},W)},W)})})]})]}),_&&D&&(0,s.jsx)(y.a,{paddingBottom:2,children:(0,s.jsx)(ke,{isFormDisabled:t,parentName:`${a}..${C}`,pathToDataFromActionRow:n,propertyActions:r,propertyName:d,recursiveLevel:o+1,childrenForm:_.children})})]},C)})]})},us=(0,L.default)(y.a)`
  border-left: ${({isVisible:e,theme:t})=>e?`4px solid ${t.colors.primary200}`:"4px solid transparent"};
`,ps=(0,L.default)(m.s)`
  padding-left: ${({theme:e})=>e.spaces[4]};
  width: ${({level:e})=>145-e*36}px;

  ${({isCollapsable:e,theme:t})=>e&&`
      ${ne} {
        display: block;
        color: ${t.colors.neutral100};
      }
      &:hover {
        ${oe(t)}
      }
  `}
  ${({isActive:e,theme:t})=>e&&oe(t)};
`,hs=L.default.div`
  padding-top: ${({theme:e})=>e.spaces[2]};
  margin-top: ${({theme:e})=>e.spaces[2]};
  width: ${4/16}rem;
  background-color: ${({theme:e})=>e.colors.primary200};
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
`,gs=(0,L.default)(y.a)`
  transform: translate(-4px, -12px);

  &:before {
    content: '';
    width: ${4/16}rem;
    height: ${12/16}rem;
    background: ${({theme:e})=>e.colors.primary200};
    display: block;
  }
`,ms=L.default.svg`
  position: relative;
  flex-shrink: 0;
  transform: translate(-0.5px, -1px);

  * {
    fill: ${({theme:e,color:t})=>e.colors[t]};
  }
`,fs=({headers:e=[],label:t})=>{const{formatMessage:o}=(0,K.A)();return(0,s.jsxs)(m.s,{children:[(0,s.jsx)(m.s,{width:xe,height:de,shrink:0,alignItems:"center",paddingLeft:6,children:(0,s.jsx)(O.o,{variant:"sigma",textColor:"neutral500",children:o({id:"Settings.roles.form.permission.property-label",defaultMessage:"{label} permissions"},{label:t})})}),e.map(n=>n.isActionRelatedToCurrentProperty?(0,s.jsx)(m.s,{width:H,shrink:0,justifyContent:"center",children:(0,s.jsx)(O.o,{variant:"sigma",textColor:"neutral500",children:o({id:`Settings.roles.form.permissions.${n.label.toLowerCase()}`,defaultMessage:n.label})})},n.label):(0,s.jsx)(m.s,{width:H,shrink:0},n.label))]})},oe=e=>(0,L.css)`
  ${O.o} {
    color: ${e.colors.primary600};
    font-weight: ${e.fontWeights.bold};
  }
  ${ne} {
    display: block;

    path {
      fill: ${e.colors.primary600};
    }
  }
`,Cs=({onClick:e,className:t,hasConditions:o=!1,variant:n="tertiary"})=>{const{formatMessage:r}=(0,K.A)();return(0,s.jsx)(xs,{hasConditions:o,className:t,children:(0,s.jsx)($.$,{variant:n,startIcon:(0,s.jsx)(Ze.A,{}),onClick:e,children:r({id:"global.settings",defaultMessage:"Settings"})})})},xs=(0,L.default)(y.a)`
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: -3px;
      left: -10px;
      width: 6px;
      height: 6px;
      border-radius: ${20/16}rem;;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,ue=(0,L.default)(Cs)``,Ke=({actions:e=[],headerBreadCrumbs:t=[],isFormDisabled:o,onClosed:n,onToggle:r})=>{const{formatMessage:a}=(0,K.A)(),{availableConditions:d,modifiedData:i,onChangeConditions:l}=z(),u=j.useMemo(()=>Object.entries(fe(d,"category")),[d]),p=e.filter(({isDisplayed:h,hasSomeActionsSelected:C,hasAllActionsSelected:E})=>h&&Boolean(C||E)),[g,f]=j.useState(_s(p,i,u)),x=(h,C)=>{f((0,be.Ay)(E=>{E[h]||(E[h]={}),E[h].default||(E[h].default={}),E[h].default=C}))},_=()=>{const h=Object.entries(g).reduce((C,E)=>{const[P,B]=E,b=Object.values(B).reduce((A,D)=>({...A,...D}),{});return C[P]=b,C},{});l(h),r()};return(0,s.jsxs)(S.k,{labelledBy:"condition-modal-breadcrumbs",onClose:n,children:[(0,s.jsx)(I.r,{children:(0,s.jsx)(es.B,{id:"condition-modal-breadcrumbs",label:t.join(", "),children:t.map((h,C,E)=>(0,s.jsx)(ss.m,{isCurrent:C===E.length-1,children:ts(a({id:h,defaultMessage:h}))},h))})}),(0,s.jsxs)(J.c,{children:[p.length===0&&(0,s.jsx)(O.o,{children:a({id:"Settings.permissions.conditions.no-actions",defaultMessage:"You first need to select actions (create, read, update, ...) before defining conditions on them."})}),(0,s.jsx)("ul",{children:p.map(({actionId:h,label:C,pathToConditionsObject:E},P)=>{const B=E.join("..");return(0,s.jsx)(js,{arrayOfOptionsGroupedByCategory:u,label:C,isFormDisabled:o,isGrey:P%2===0,name:B,onChange:x,value:M(g,B,{})},h)})})]}),(0,s.jsx)(Q.j,{startActions:(0,s.jsx)($.$,{variant:"tertiary",onClick:r,children:a({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,s.jsx)($.$,{onClick:_,children:a({id:"Settings.permissions.conditions.apply",defaultMessage:"Apply"})})})]})},_s=(e,t,o)=>e.reduce((n,r)=>{const a=M(t,[...r.pathToConditionsObject,"conditions"],{}),d=o.reduce((i,l)=>{const[u,p]=l,g=p.reduce((f,x)=>(f[x.id]=M(a,x.id,!1),f),{});return i[u]=g,i},{});return n[r.pathToConditionsObject.join("..")]=d,n},{}),js=({arrayOfOptionsGroupedByCategory:e,isFormDisabled:t=!1,isGrey:o=!1,label:n,name:r,onChange:a,value:d})=>{const{formatMessage:i}=(0,K.A)(),l=u=>{a&&a(r,Es(e,u))};return(0,s.jsxs)(m.s,{as:"li",background:o?"neutral100":"neutral0",paddingBottom:3,paddingTop:3,children:[(0,s.jsxs)(m.s,{paddingLeft:6,style:{width:180},children:[(0,s.jsxs)(O.o,{variant:"sigma",textColor:"neutral600",children:[i({id:"Settings.permissions.conditions.can",defaultMessage:"Can"}),"\xA0"]}),(0,s.jsx)(O.o,{variant:"sigma",title:n,textColor:"primary600",ellipsis:!0,children:i({id:`Settings.roles.form.permissions.${n.toLowerCase()}`,defaultMessage:n})}),(0,s.jsxs)(O.o,{variant:"sigma",textColor:"neutral600",children:["\xA0",i({id:"Settings.permissions.conditions.when",defaultMessage:"When"})]})]}),(0,s.jsx)(y.a,{style:{maxWidth:430,width:"100%"},children:(0,s.jsx)(pe.B,{id:r,customizeContent:(u=[])=>`${u.length} currently selected`,onChange:l,value:ys(d),options:Os(e),disabled:t})})]})},ys=e=>Object.values(e).map(t=>Object.entries(t).filter(([,o])=>o).map(([o])=>o)).flat(),Os=e=>e.reduce((t,[o,n])=>(t.push({label:ce(o),children:n.map(r=>({label:r.displayName,value:r.id}))}),t),[]),Es=(e,t)=>e.map(([,o])=>o).flat().reduce((o,n)=>({[n.id]:t.includes(n.id),...o}),{}),bs=({actions:e=[],isFormDisabled:t,pathToData:o,subjects:n=[]})=>{const[r,a]=j.useState(null),d=i=>()=>{a(r===i?null:i)};return(0,s.jsx)(s.Fragment,{children:n.map(({uid:i,label:l,properties:u},p)=>{const g=r===i,f=e.map(x=>({...x,isDisplayed:Array.isArray(x.subjects)&&x.subjects.indexOf(i)!==-1}));return(0,s.jsxs)(m.s,{direction:"column",display:"inline-flex",minWidth:"100%",borderColor:"primary600",borderWidth:g?1:0,children:[(0,s.jsx)(As,{availableActions:f,isActive:g,isGrey:p%2===0,isFormDisabled:t,label:l,onClickToggle:d(i),pathToData:[o,i].join("..")}),g&&u.map(({label:x,value:_,children:h})=>(0,s.jsx)(as,{availableActions:f,childrenForm:h,isFormDisabled:t,label:x,pathToData:[o,i].join(".."),propertyName:_},_))]},i)})})},As=({availableActions:e=[],isActive:t=!1,isGrey:o=!1,isFormDisabled:n=!1,label:r,onClickToggle:a,pathToData:d})=>{const[i,l]=j.useState(!1),{formatMessage:u}=(0,K.A)(),{modifiedData:p,onChangeParentCheckbox:g,onChangeSimpleCheckbox:f}=z(),x=()=>{l(A=>!A)},_=()=>{l(!1)},h=M(p,d.split(".."),{}),C=j.useMemo(()=>Object.keys(h).reduce((A,D)=>(A[D]=Ae(h[D],"conditions"),A),{}),[h]),{hasAllActionsSelected:E,hasSomeActionsSelected:P}=Y(C),B=j.useMemo(()=>Ms(e,p,d),[e,p,d]),b=B.some(A=>A.hasConditions);return(0,s.jsxs)(vs,{isActive:t,children:[(0,s.jsxs)(Ue,{height:de,flex:1,alignItems:"center",background:o?"neutral100":"neutral0",children:[(0,s.jsx)(We,{isCollapsable:!0,isFormDisabled:n,label:r,checkboxName:d,onChange:g,onClick:a,someChecked:P,value:E,isActive:t,children:(0,s.jsx)(Ve,{paddingLeft:2,children:t?(0,s.jsx)(Qe.A,{}):(0,s.jsx)(qe.A,{})})}),(0,s.jsx)(m.s,{style:{flex:1},children:B.map(({actionId:A,hasSomeActionsSelected:D,isDisplayed:T,...W})=>{if(!T)return(0,s.jsx)(je,{},A);const{hasConditions:U,hasAllActionsSelected:R,isParentCheckbox:Z,checkboxName:G,label:ie}=W;return Z?(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(y.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,name:G,"aria-label":u({id:"Settings.permissions.select-by-permission",defaultMessage:"Select {label} permission"},{label:`${ie} ${r}`}),onValueChange:V=>{g({target:{name:G,value:V}})},indeterminate:D,value:R})]},A):(0,s.jsxs)(Ne,{justifyContent:"center",alignItems:"center",children:[U&&(0,s.jsx)(y.a,{as:"span",position:"absolute",top:"-6px",left:"37px",width:"6px",height:"6px",borderRadius:"20px",background:"primary600"}),(0,s.jsx)(v.J,{disabled:n,indeterminate:U,name:G,onValueChange:V=>{f({target:{name:G,value:V}})},value:R})]},A)})}),i&&(0,s.jsx)(Ke,{headerBreadCrumbs:[r,"Settings.permissions.conditions.conditions"],actions:B,isFormDisabled:n,onClosed:_,onToggle:x})]}),(0,s.jsx)(y.a,{transform:"translateY(10px)",right:"9px",position:"absolute",children:(0,s.jsx)(ue,{onClick:x,hasConditions:b})})]})},Ms=(e,t,o)=>e.map(({actionId:n,isDisplayed:r,applyToProperties:a,label:d})=>{if(!r)return{actionId:n,hasSomeActionsSelected:!1,isDisplayed:r};const i=[...o.split(".."),n],l=se(a)?[...i,"properties","enabled"]:i,u=M(t,[...i,"conditions"],null),p={actionId:n,checkboxName:l.join(".."),hasConditions:X(u).some(_=>_),isDisplayed:r,label:d,pathToConditionsObject:i};if(se(a)){const _=M(t,l,!1);return{...p,hasAllActionsSelected:_,hasSomeActionsSelected:_,isParentCheckbox:!1}}const g=M(t,l,null),{hasAllActionsSelected:f,hasSomeActionsSelected:x}=Y(g);return{...p,hasAllActionsSelected:f,hasSomeActionsSelected:x,isParentCheckbox:!0}}),ye=(e,t)=>`
  ${Ue} {
    background-color: ${e.colors.primary100};
    color: ${e.colors.primary600};
    border-radius: ${t?"2px 2px 0 0":"2px"};
  }
  ${Ve} {
    display: flex;
  }
  ${ue} {
    display: block;
  }
  &:hover {
    ${oe(e)}
  }

  &:focus-within {
    ${()=>ye(e,t)}
  }
`,Ue=(0,L.default)(m.s)`
  border: 1px solid transparent;
`,vs=L.default.div`
  display: inline-flex;
  min-width: 100%;

  ${ue} {
    display: none;
  }
  ${({isActive:e,theme:t})=>e&&ye(t,e)}
  &:hover {
    ${({theme:e,isActive:t})=>ye(e,t)}
  }
`,Ne=(0,L.default)(m.s)`
  width: ${H};
  position: relative;
`,Ve=(0,L.default)(y.a)`
  display: none;
  svg {
    width: 11px;
  }
  * {
    fill: ${({theme:e})=>e.colors.primary600};
  }
`,Ps=({actions:e=[],isFormDisabled:t,kind:o})=>{const{formatMessage:n}=(0,K.A)(),{modifiedData:r,onChangeCollectionTypeGlobalActionCheckbox:a}=z(),d=e.filter(({subjects:l})=>l&&l.length),i=j.useMemo(()=>{const l=d.map(({actionId:f})=>f),u=r[o],p=l.reduce((f,x)=>(Object.keys(u).forEach(_=>{const h=M(u,[_,x]),C={[_]:_e(h)};f[x]?f[x]={...f[x],...C}:f[x]=C}),f),{});return Object.keys(p).reduce((f,x)=>(f[x]=Y(p[x]),f),{})},[r,d,o]);return(0,s.jsx)(y.a,{paddingBottom:4,paddingTop:6,style:{paddingLeft:xe},children:(0,s.jsx)(m.s,{gap:0,children:d.map(({label:l,actionId:u})=>(0,s.jsxs)(m.s,{shrink:0,width:H,direction:"column",alignItems:"center",justifyContent:"center",gap:3,children:[(0,s.jsx)(O.o,{variant:"sigma",textColor:"neutral500",children:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),(0,s.jsx)(v.J,{disabled:t,onValueChange:p=>{a(o,u,p)},name:u,"aria-label":n({id:"Settings.permissions.select-all-by-permission",defaultMessage:"Select all {label} permissions"},{label:n({id:`Settings.roles.form.permissions.${l.toLowerCase()}`,defaultMessage:l})}),value:M(i,[u,"hasAllActionsSelected"],!1),indeterminate:M(i,[u,"hasSomeActionsSelected"],!1)})]},u))})})},Fe=({isFormDisabled:e,kind:t,layout:{actions:o,subjects:n}})=>{const r=[...n].sort((a,d)=>a.label.localeCompare(d.label));return(0,s.jsxs)(Ts,{background:"neutral0",children:[(0,s.jsx)(Ps,{actions:o,kind:t,isFormDisabled:e}),(0,s.jsx)(bs,{actions:o,isFormDisabled:e,pathToData:t,subjects:r})]})},Ts=(0,L.default)(y.a)`
  overflow-x: auto;
`,He=({layout:e,...t})=>{const[o,n]=j.useState(null),r=a=>{n(a===o?null:a)};return(0,s.jsx)(y.a,{padding:6,background:"neutral0",children:e.map(({category:a,categoryId:d,childrenForm:i},l)=>(0,s.jsx)(Ds,{childrenForm:i,isOpen:o===a,isWhite:l%2===1,name:a,onOpenCategory:r,pathToData:[t.kind,d],...t},a))})},Ds=({childrenForm:e,kind:t,name:o,isOpen:n=!1,isFormDisabled:r=!1,isWhite:a,onOpenCategory:d,pathToData:i})=>{const{formatMessage:l}=(0,K.A)(),u=()=>{d(o)},p=o.split("::").pop()??"";return(0,s.jsxs)(q.n,{expanded:n,onToggle:u,id:`accordion-${o}`,variant:a?"primary":"secondary",children:[(0,s.jsx)(he.P,{title:ce(p),description:`${l({id:"Settings.permissions.category",defaultMessage:p},{category:p})} ${t==="plugins"?"plugin":t}`}),(0,s.jsx)(ge.u,{children:(0,s.jsx)(y.a,{padding:6,children:e.map(({actions:g,subCategoryName:f,subCategoryId:x})=>(0,s.jsx)(Ss,{actions:g,categoryName:p,isFormDisabled:r,subCategoryName:f,pathToData:[...i,x]},f))})})]})},Ss=({actions:e=[],categoryName:t,isFormDisabled:o,subCategoryName:n,pathToData:r})=>{const[a,d]=j.useState(!1),{modifiedData:i,onChangeParentCheckbox:l,onChangeSimpleCheckbox:u}=z(),{formatMessage:p}=(0,K.A)(),g=M(i,r,{}),f=j.useMemo(()=>Object.keys(g).reduce((b,A)=>(b[A]=_e(g[A]),b),{}),[g]),{hasAllActionsSelected:x,hasSomeActionsSelected:_}=Y(f),h=()=>{d(b=>!b)},C=()=>{d(!1)},E=j.useMemo(()=>e.map(b=>{const A=[...r,b.action,"properties","enabled"],D=M(i,A,!1),T=M(i,[...r,b.action,"conditions"],{}),W=X(T).some(U=>U);return{...b,isDisplayed:D,checkboxName:A.join(".."),hasSomeActionsSelected:D,value:D,hasConditions:W,label:b.displayName,actionId:b.action,pathToConditionsObject:[...r,b.action]}}),[e,i,r]),P=M(i,[...r],{}),B=X(Object.entries(P).reduce((b,A)=>{const[D,{conditions:T}]=A;return b[D]=T,b},{})).some(b=>b);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(y.a,{children:[(0,s.jsxs)(m.s,{justifyContent:"space-between",alignItems:"center",children:[(0,s.jsx)(y.a,{paddingRight:4,children:(0,s.jsx)(O.o,{variant:"sigma",textColor:"neutral600",children:n})}),(0,s.jsx)($s,{flex:1}),(0,s.jsx)(y.a,{paddingLeft:4,children:(0,s.jsx)(re.S,{name:r.join(".."),disabled:o,onValueChange:b=>{l({target:{name:r.join(".."),value:b}})},indeterminate:_,value:x,children:p({id:"app.utils.select-all",defaultMessage:"Select all"})})})]}),(0,s.jsxs)(m.s,{paddingTop:6,paddingBottom:6,children:[(0,s.jsx)(we.x,{gap:2,style:{flex:1},children:E.map(({checkboxName:b,value:A,action:D,displayName:T,hasConditions:W})=>(0,s.jsx)(Ge.E,{col:3,children:(0,s.jsx)(Ls,{disabled:o,hasConditions:W,children:(0,s.jsx)(re.S,{name:b,disabled:o,onValueChange:U=>{u({target:{name:b,value:U}})},value:A,children:T})})},D))}),(0,s.jsx)(ue,{hasConditions:B,onClick:h})]})]}),a&&(0,s.jsx)(Ke,{headerBreadCrumbs:[t,n],actions:E,isFormDisabled:o,onClosed:C,onToggle:h})]})},$s=(0,L.default)(y.a)`
  align-self: center;
  border-top: 1px solid ${({theme:e})=>e.colors.neutral150};
`,Ls=L.default.div`
  position: relative;
  word-break: keep-all;
  ${({hasConditions:e,disabled:t,theme:o})=>e&&`
    &:before {
      content: '';
      position: absolute;
      top: ${-4/16}rem;
      left: ${-8/16}rem;
      width: ${6/16}rem;
      height: ${6/16}rem;
      border-radius: ${20/16}rem;
      background: ${t?o.colors.neutral100:o.colors.primary600};
    }
  `}
`,Bs=[{labelId:"app.components.LeftMenuLinkContainer.collectionTypes",defaultMessage:"Collection Types",id:"collectionTypes"},{labelId:"app.components.LeftMenuLinkContainer.singleTypes",id:"singleTypes",defaultMessage:"Single Types"},{labelId:"app.components.LeftMenuLinkContainer.plugins",defaultMessage:"Plugins",id:"plugins"},{labelId:"app.components.LeftMenuLinkContainer.settings",defaultMessage:"Settings",id:"settings"}],Rs=j.forwardRef(({layout:e,isFormDisabled:t,permissions:o=[]},n)=>{const[{initialData:r,layouts:a,modifiedData:d},i]=j.useReducer(Ws,Is,()=>ks(e,o)),{formatMessage:l}=(0,K.A)();j.useImperativeHandle(n,()=>({getPermissions(){const _=(0,Ee.iv)(r.collectionTypes,d.collectionTypes),h=(0,Ee.iv)(r.singleTypes,d.singleTypes),C={..._,...h};let E;return se(C)?E=!1:E=Object.values(C).some((P={})=>Object.values(P).some(B=>ae(B,"conditions"))),{permissionsToSend:is(d),didUpdateConditions:E}},resetForm(){i({type:"RESET_FORM"})},setFormAfterSubmit(){i({type:"SET_FORM_AFTER_SUBMIT"})}}));const u=(_,h,C,E)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX",pathToCollectionType:_,propertyName:h,rowName:C,value:E})},p=(_,h,C)=>{i({type:"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX",collectionTypeKind:_,actionId:h,value:C})},g=_=>{i({type:"ON_CHANGE_CONDITIONS",conditions:_})},f=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_SIMPLE_CHECKBOX",keys:_,value:h})},[]),x=j.useCallback(({target:{name:_,value:h}})=>{i({type:"ON_CHANGE_TOGGLE_PARENT_CHECKBOX",keys:_,value:h})},[]);return(0,s.jsx)(ns,{availableConditions:e.conditions,modifiedData:d,onChangeConditions:g,onChangeSimpleCheckbox:f,onChangeParentCheckbox:x,onChangeCollectionTypeLeftActionRowCheckbox:u,onChangeCollectionTypeGlobalActionCheckbox:p,children:(0,s.jsxs)(Je.f,{id:"tabs",label:l({id:"Settings.permissions.users.tabs.label",defaultMessage:"Tabs Permissions"}),children:[(0,s.jsx)(Oe.t,{children:Bs.map(_=>(0,s.jsx)(Oe.o,{children:l({id:_.labelId,defaultMessage:_.defaultMessage})},_.id))}),(0,s.jsxs)(ee.T,{style:{position:"relative"},children:[(0,s.jsx)(ee.K,{children:(0,s.jsx)(Fe,{layout:a.collectionTypes,kind:"collectionTypes",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(Fe,{layout:a.singleTypes,kind:"singleTypes",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(He,{layout:a.plugins,kind:"plugins",isFormDisabled:t})}),(0,s.jsx)(ee.K,{children:(0,s.jsx)(He,{layout:a.settings,kind:"settings",isFormDisabled:t})})]})]})})}),Is={initialData:{},modifiedData:{},layouts:{}},Ws=(e,t)=>(0,be.Ay)(e,o=>{switch(t.type){case"ON_CHANGE_COLLECTION_TYPE_GLOBAL_ACTION_CHECKBOX":{const{collectionTypeKind:n,actionId:r,value:a}=t,d=["modifiedData",n];Object.keys(M(e,d)).forEach(i=>{const l=M(e,[...d,i,r],void 0);if(l){let u=te(l,a);if(!a&&u.conditions){const p=te(u.conditions,!1);u={...u,conditions:p}}F(o,[...d,i,r],u)}});break}case"ON_CHANGE_COLLECTION_TYPE_ROW_LEFT_CHECKBOX":{const{pathToCollectionType:n,propertyName:r,rowName:a,value:d}=t;let i=me(e.modifiedData);const l=n.split(".."),u=M(i,l,{});Object.keys(u).forEach(p=>{if(ae(u[p],`properties.${r}`)){const g=M(u,[p,"properties",r,a]),f=[...l,p,"properties",r,a];if(!(0,w.F)(g))F(i,f,d);else{const x=te(g,d);F(i,f,x)}}}),d||(i=le(i)),F(o,"modifiedData",i);break}case"ON_CHANGE_CONDITIONS":{Object.entries(t.conditions).forEach(n=>{const[r,a]=n;F(o,["modifiedData",...r.split(".."),"conditions"],a)});break}case"ON_CHANGE_SIMPLE_CHECKBOX":{let n=me(e.modifiedData);F(n,[...t.keys.split("..")],t.value),t.value||(n=le(n)),F(o,"modifiedData",n);break}case"ON_CHANGE_TOGGLE_PARENT_CHECKBOX":{const{keys:n,value:r}=t,a=[...n.split("..")];let d=me(e.modifiedData);const i=M(d,a,{}),l=te(i,r);F(d,a,l),r||(d=le(d)),F(o,["modifiedData"],d);break}case"RESET_FORM":{o.modifiedData=e.initialData;break}case"SET_FORM_AFTER_SUBMIT":{o.initialData=e.modifiedData;break}default:return o}}),ks=(e,t)=>{const{conditions:o,sections:{collectionTypes:n,singleTypes:r,plugins:a,settings:d}}=e,i={collectionTypes:n,singleTypes:r,plugins:Be(a,"plugin"),settings:Be(d,"category")},l={collectionTypes:Le(n,o,t),singleTypes:Le(r,o,t),plugins:$e(i.plugins,o,t),settings:$e(i.settings,o,t)};return{initialData:l,modifiedData:l,layouts:i}}},80846:(N,k,c)=>{"use strict";c.d(k,{B:()=>y});var s=c(92132),j=c(63891),m=c(5391);const y=({options:O,...$})=>(0,s.jsx)(m.KF,{...$,children:O.map(S=>"children"in S?(0,s.jsx)(m.np,{label:S.label,values:S.children.map(I=>I.value.toString()),children:S.children.map(I=>(0,s.jsx)(v,{value:I.value,children:I.label},I.value))},S.label):(0,s.jsx)(m.fe,{value:S.value,children:S.label},S.value))}),v=(0,j.default)(m.fe)`
  padding-left: ${({theme:O})=>O.spaces[7]};
`},88532:(N,k,c)=>{var s=c(94445),j=c(7233),m=c(45353),y=c(82261);function v(O,$){return function(S,I){var J=y(S)?s:j,Q=$?$():{};return J(S,O,m(I,2),Q)}}N.exports=v},94445:N=>{function k(c,s,j,m){for(var y=-1,v=c==null?0:c.length;++y<v;){var O=c[y];s(m,O,j(O),c)}return m}N.exports=k},94710:(N,k,c)=>{var s=c(95292),j=c(88532),m=Object.prototype,y=m.hasOwnProperty,v=j(function(O,$,S){y.call(O,S)?O[S].push($):s(O,S,[$])});N.exports=v}}]);
