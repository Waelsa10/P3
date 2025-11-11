(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98457,(e,t,a)=>{"use strict";var r=e.r(78509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(e.r(21506)),o=e.r(91398);a.default=(0,l.default)((0,o.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat")},90091,(e,t,a)=>{"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;a.validate=function(e){if(!e||e.length>254||!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64||t[1].split(".").some(function(e){return e.length>63}))}},5151,e=>{"use strict";var t=e.i(91398),a=e.i(91788),r=e.i(67323),l=e.i(38770),o=e.i(60814),i=e.i(22351),s=e.i(55548),n=e.i(73831),d=e.i(98457),c=e.i(9790),u=e.i(96490),p=e.i(12057),f=e.i(72141),h=e.i(3828);e.i(81516);var m=e.i(59385),g=e.i(67849),b=e.i(38457),x=e.i(5252),v=e.i(83921);let y=function({id:e,users:o,latestMessage:i}){let s=(0,h.useRouter)(),[n]=(0,r.useAuthState)(l.auth),[d,c]=(0,a.useState)(i||null),[u,p]=(0,a.useState)(0),{darkMode:f}=(0,a.useContext)(v.DarkModeContext)||{darkMode:!1},y=((e,t)=>{if(!e||!Array.isArray(e)||!t?.email)return console.log("getRecipientEmail: Missing data",{users:e,hasUser:!!t}),null;let a=t.email.toLowerCase(),r=e.map(e=>e?.toLowerCase()).filter(Boolean);if(console.log("getRecipientEmail: Processing",{normalizedUsers:r,normalizedUserEmail:a}),2===r.length&&r.every(e=>e===a))return console.log("getRecipientEmail: Self-chat detected"),t.email;let l=e.filter(e=>e&&e.toLowerCase()!==a);return console.log("getRecipientEmail: Found recipients",l),l.length>0?l[0]:t.email})(o,n),D=o?.length===2&&o.every(e=>e?.toLowerCase()===n?.email?.toLowerCase()),B=y?(0,m.query)((0,m.collection)(l.db,"users"),(0,m.where)("email","==",y)):null,[E]=(0,g.useCollection)(B),O=E?.docs?.[0]?.data();(0,a.useEffect)(()=>{if(!e||!n||!y)return void console.log("Missing required data for Chat:",{id:e,user:!!n,recipientEmail:y});let t=(0,m.collection)(l.db,"chats",e,"messages"),a=(0,m.query)(t,(0,m.orderBy)("timestamp","desc"),(0,m.limit)(1)),r=(0,m.onSnapshot)(a,e=>{if(e.empty)c(null);else{let t=e.docs[0].data();c({id:e.docs[0].id,...t,timestamp:t.timestamp?.toMillis()})}},e=>{console.error("Error listening to messages:",e)}),o=()=>{};if(!D&&y){let e=(0,m.query)(t,(0,m.where)("user","==",y),(0,m.where)("status","in",[x.MESSAGE_STATUS.SENT,x.MESSAGE_STATUS.DELIVERED]));o=(0,m.onSnapshot)(e,e=>{p(e.docs.length)},e=>{console.error("Error listening to unread count:",e),p(0)})}return()=>{D&&(n.displayName||n.email),r(),o()}},[e,n,y,D]);let T=(e,t=35)=>e?e.length<=t?e:e.substring(0,t)+"...":"",z=d?.user===n?.email,N=u>0&&!z;return y?(0,t.jsxs)(k,{onClick:()=>{s.push(`/chat/${e}`)},darkMode:f,children:[O?(0,t.jsx)(w,{src:O?.photoURL}):(0,t.jsx)(w,{children:y?.[0]?.toUpperCase()}),(0,t.jsxs)(j,{children:[(0,t.jsxs)(C,{children:[(0,t.jsx)(S,{darkMode:f,children:D?`${y} (You)`:y}),d&&(0,t.jsx)($,{darkMode:f,children:(e=>{if(!e)return"";let t=new Date(e),a=new Date,r=new Date(a);if(r.setDate(r.getDate()-1),t.toDateString()===a.toDateString())return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(t.toDateString()===r.toDateString())return"Yesterday";let l=new Date(a);return(l.setDate(l.getDate()-7),t>l)?t.toLocaleDateString([],{weekday:"short"}):t.toLocaleDateString([],{month:"short",day:"numeric"})})(d.timestamp)})]}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(R,{isOwnMessage:z,children:[z&&d&&(0,t.jsx)(A,{children:(0,t.jsx)(b.default,{status:d.status||x.MESSAGE_STATUS.SENT,darkMode:f})}),(0,t.jsx)(P,{hasUnread:N,darkMode:f,children:d?d.voiceURL?"🎤 Voice message":d.fileURL?d.fileType?.startsWith("image/")?"📷 Photo":d.fileType?.startsWith("video/")?"🎥 Video":d.fileType?.startsWith("audio/")?"🎵 Audio":`📎 ${T(d.fileName||"File",25)}`:T(d.message):"No messages yet"})]}),N&&(0,t.jsx)(L,{darkMode:f,children:u})]})]})]}):null},k=o.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${e=>e.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,w=(0,o.default)(f.Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`,j=o.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`,C=o.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,S=o.default.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.darkMode?"#e0e0e0":"#000"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,$=o.default.span`
  font-size: 12px;
  color: ${e=>e.darkMode?"#8696a0":"#667781"};
  margin-left: 8px;
  flex-shrink: 0;
`,M=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,R=o.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,A=o.default.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,P=o.default.span`
  font-size: 14px;
  color: ${e=>e.hasUnread?e.darkMode?"#e0e0e0":"#000":e.darkMode?"#8696a0":"#667781"};
  font-weight: ${e=>e.hasUnread?"600":"400"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,L=o.default.div`
  background-color: ${e=>e.darkMode?"#00a884":"#25d366"};
  color: white;
  border-radius: 50%;
  min-width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  padding: 0 6px;
  flex-shrink: 0;
`;var D=e.i(90091),B=e.i(33670),E=e.i(1004),O=e.i(82161),T=e.i(56918),z=e.i(85758),N=e.i(77052);e.i(50461);var F=e.i(60997),I=e.i(75907),U=e.i(56206),_=e.i(961);let V=a.createContext(void 0);function G(){return a.useContext(V)}var W=e.i(75032),q=e.i(46739),Z=e.i(37887),H=e.i(47539),X=e.i(2977);let Y=["ownerState"],K=["variants"],J=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Q(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function ee(e,t){return t&&e&&"object"==typeof e&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}let et=(0,H.default)();function ea({defaultTheme:e,theme:t,themeId:a}){return 0===Object.keys(t).length?e:t[a]||t}function er(e,t,a){let{ownerState:r}=t,l=(0,F.default)(t,Y),o="function"==typeof e?e((0,I.default)({ownerState:r},l)):e;if(Array.isArray(o))return o.flatMap(e=>er(e,(0,I.default)({ownerState:r},l),a));if(o&&"object"==typeof o&&Array.isArray(o.variants)){let{variants:e=[]}=o,t=(0,F.default)(o,K);return e.forEach(e=>{let o=!0;if("function"==typeof e.props?o=e.props((0,I.default)({ownerState:r},l,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&l[t]!==e.props[t]&&(o=!1)}),o){Array.isArray(t)||(t=[t]);let o="function"==typeof e.style?e.style((0,I.default)({ownerState:r},l,r)):e.style;t.push(a?ee((0,Z.internal_serializeStyles)(o),a):o)}}),t}return a?ee((0,Z.internal_serializeStyles)(o),a):o}let el=function(e={}){let{themeId:t,defaultTheme:a=et,rootShouldForwardProp:r=Q,slotShouldForwardProp:l=Q}=e,o=e=>(0,X.default)((0,I.default)({},e,{theme:ea((0,I.default)({},e,{defaultTheme:a,themeId:t}))}));return o.__mui_systemSx=!0,(e,i={})=>{var s;let n;(0,Z.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:d,slot:c,skipVariantsResolver:u,skipSx:p,overridesResolver:f=!(s=!c?c:c.charAt(0).toLowerCase()+c.slice(1))?null:(e,t)=>t[s]}=i,h=(0,F.default)(i,J),m=d&&d.startsWith("Mui")||c?"components":"custom",g=void 0!==u?u:c&&"Root"!==c&&"root"!==c||!1,b=p||!1,x=Q;"Root"===c||"root"===c?x=r:c?x=l:"string"==typeof e&&e.charCodeAt(0)>96&&(x=void 0);let v=(0,Z.default)(e,(0,I.default)({shouldForwardProp:x,label:n},h)),y=e=>"function"==typeof e&&e.__emotion_real!==e||(0,W.isPlainObject)(e)?r=>{let l=ea({theme:r.theme,defaultTheme:a,themeId:t});return er(e,(0,I.default)({},r,{theme:l}),l.modularCssLayers?m:void 0)}:e,k=(r,...l)=>{let i=y(r),s=l?l.map(y):[];d&&f&&s.push(e=>{let r=ea((0,I.default)({},e,{defaultTheme:a,themeId:t}));if(!r.components||!r.components[d]||!r.components[d].styleOverrides)return null;let l=r.components[d].styleOverrides,o={};return Object.entries(l).forEach(([t,a])=>{o[t]=er(a,(0,I.default)({},e,{theme:r}),r.modularCssLayers?"theme":void 0)}),f(e,o)}),d&&!g&&s.push(e=>{var r;let l=ea((0,I.default)({},e,{defaultTheme:a,themeId:t}));return er({variants:null==l||null==(r=l.components)||null==(r=r[d])?void 0:r.variants},(0,I.default)({},e,{theme:l}),l.modularCssLayers?"theme":void 0)}),b||s.push(o);let n=s.length-l.length;if(Array.isArray(r)&&n>0){let e=Array(n).fill("");(i=[...r,...e]).raw=[...r.raw,...e]}let c=v(i,...s);return e.muiName&&(c.muiName=e.muiName),c};return v.withConfig&&(k.withConfig=v.withConfig),k}}();var eo=e.i(92107),ei=e.i(77137),es=e.i(16162),en=e.i(23551),ed=e.i(53259);let ec=["component","direction","spacing","divider","children","className","useFlexGap"],eu=(0,H.default)(),ep=el("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function ef(e){return function({props:e,name:t,defaultTheme:a,themeId:r}){let l=(0,ei.default)(a);return r&&(l=l[r]||l),function(e){let{theme:t,name:a,props:r}=e;return t&&t.components&&t.components[a]&&t.components[a].defaultProps?(0,eo.default)(t.components[a].defaultProps,r):r}({theme:l,name:t,props:e})}({props:e,name:"MuiStack",defaultTheme:eu})}let eh=({ownerState:e,theme:t})=>{let a=(0,I.default)({display:"flex",flexDirection:"column"},(0,en.handleBreakpoints)({theme:t},(0,en.resolveBreakpointValues)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let r=(0,ed.createUnarySpacing)(t),l=Object.keys(t.breakpoints.values).reduce((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t),{}),o=(0,en.resolveBreakpointValues)({values:e.direction,base:l}),i=(0,en.resolveBreakpointValues)({values:e.spacing,base:l});"object"==typeof o&&Object.keys(o).forEach((e,t,a)=>{if(!o[e]){let r=t>0?o[a[t-1]]:"column";o[e]=r}}),a=(0,W.default)(a,(0,en.handleBreakpoints)({theme:t},i,(t,a)=>e.useFlexGap?{gap:(0,ed.getValue)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[a?o[a]:e.direction]}`]:(0,ed.getValue)(r,t)}}))}return(0,en.mergeBreakpointsInOrder)(t.breakpoints,a)};var em=e.i(96851),eg=e.i(95724);let eb=function(e={}){let{createStyledComponent:r=ep,useThemeProps:l=ef,componentName:o="MuiStack"}=e,i=r(eh);return a.forwardRef(function(e,r){let s,n=l(e),d=(0,es.extendSxProp)(n),{component:c="div",direction:u="column",spacing:p=0,divider:f,children:h,className:m,useFlexGap:g=!1}=d,b=(0,F.default)(d,ec),x=(0,_.default)({root:["root"]},e=>(0,q.default)(o,e),{});return(0,t.jsx)(i,(0,I.default)({as:c,ownerState:{direction:u,spacing:p,useFlexGap:g},ref:r,className:(0,U.default)(x.root,m)},b,{children:f?(s=a.Children.toArray(h).filter(Boolean)).reduce((e,t,r)=>(e.push(t),r<s.length-1&&e.push(a.cloneElement(f,{key:`separator-${r}`})),e),[]):h}))})}({createStyledComponent:(0,em.default)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,eg.useDefaultProps)({props:e,name:"MuiStack"})});var ex=e.i(15871),ev=e.i(64107),ey=e.i(13149);function ek(e){return(0,q.default)("MuiFormControlLabel",e)}let ew=(0,ey.default)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),ej=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],eC=(0,em.default)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{[`& .${ew.label}`]:t.label},t.root,t[`labelPlacement${(0,ev.default)(a.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,I.default)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${ew.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${ew.label}`]:{[`&.${ew.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),eS=(0,em.default)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${ew.error}`]:{color:(e.vars||e).palette.error.main}})),e$=a.forwardRef(function(e,r){var l,o;let i=(0,eg.useDefaultProps)({props:e,name:"MuiFormControlLabel"}),{className:s,componentsProps:n={},control:d,disabled:c,disableTypography:u,label:p,labelPlacement:f="end",required:h,slotProps:m={}}=i,g=(0,F.default)(i,ej),b=G(),x=null!=(l=null!=c?c:d.props.disabled)?l:null==b?void 0:b.disabled,v=null!=h?h:d.props.required,y={disabled:x,required:v};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===d.props[e]&&void 0!==i[e]&&(y[e]=i[e])});let k=function({props:e,states:t,muiFormControl:a}){return t.reduce((t,r)=>(t[r]=e[r],a&&void 0===e[r]&&(t[r]=a[r]),t),{})}({props:i,muiFormControl:b,states:["error"]}),w=(0,I.default)({},i,{disabled:x,labelPlacement:f,required:v,error:k.error}),j=(e=>{let{classes:t,disabled:a,labelPlacement:r,error:l,required:o}=e,i={root:["root",a&&"disabled",`labelPlacement${(0,ev.default)(r)}`,l&&"error",o&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",l&&"error"]};return(0,_.default)(i,ek,t)})(w),C=null!=(o=m.typography)?o:n.typography,S=p;return null==S||S.type===ex.default||u||(S=(0,t.jsx)(ex.default,(0,I.default)({component:"span"},C,{className:(0,U.default)(j.label,null==C?void 0:C.className),children:S}))),(0,t.jsxs)(eC,(0,I.default)({className:(0,U.default)(j.root,s),ownerState:w,ref:r},g,{children:[a.cloneElement(d,y),v?(0,t.jsxs)(eb,{display:"block",children:[S,(0,t.jsxs)(eS,{ownerState:w,"aria-hidden":!0,className:j.asterisk,children:[" ","*"]})]}):S]}))});var eM=e.i(77366),eR=e.i(96994),eA=e.i(24382),eP=e.i(41661);function eL(e){return(0,q.default)("PrivateSwitchBase",e)}(0,ey.default)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);let eD=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],eB=(0,em.default)(eP.default,{name:"MuiSwitchBase"})(({ownerState:e})=>(0,I.default)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),eE=(0,em.default)("input",{name:"MuiSwitchBase",shouldForwardProp:eR.rootShouldForwardProp})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),eO=a.forwardRef(function(e,a){let{autoFocus:r,checked:l,checkedIcon:o,className:i,defaultChecked:s,disabled:n,disableFocusRipple:d=!1,edge:c=!1,icon:u,id:p,inputProps:f,inputRef:h,name:m,onBlur:g,onChange:b,onFocus:x,readOnly:v,required:y=!1,tabIndex:k,type:w,value:j}=e,C=(0,F.default)(e,eD),[S,$]=(0,eA.default)({controlled:l,default:!!s,name:"SwitchBase",state:"checked"}),M=G(),R=n;M&&void 0===R&&(R=M.disabled);let A="checkbox"===w||"radio"===w,P=(0,I.default)({},e,{checked:S,disabled:R,disableFocusRipple:d,edge:c}),L=(e=>{let{classes:t,checked:a,disabled:r,edge:l}=e,o={root:["root",a&&"checked",r&&"disabled",l&&`edge${(0,ev.default)(l)}`],input:["input"]};return(0,_.default)(o,eL,t)})(P);return(0,t.jsxs)(eB,(0,I.default)({component:"span",className:(0,U.default)(L.root,i),centerRipple:!0,focusRipple:!d,disabled:R,tabIndex:null,role:void 0,onFocus:e=>{x&&x(e),M&&M.onFocus&&M.onFocus(e)},onBlur:e=>{g&&g(e),M&&M.onBlur&&M.onBlur(e)},ownerState:P,ref:a},C,{children:[(0,t.jsx)(eE,(0,I.default)({autoFocus:r,checked:l,defaultChecked:s,className:L.input,disabled:R,id:A?p:void 0,name:m,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;$(t),b&&b(e,t)},readOnly:v,ref:h,required:y,ownerState:P,tabIndex:k,type:w},"checkbox"===w&&void 0===j?{}:{value:j},f)),S?o:u]}))});var eT=e.i(80445);function ez(e){return(0,q.default)("MuiSwitch",e)}let eN=(0,ey.default)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),eF=["className","color","edge","size","sx"],eI=(0,eT.styled)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,ev.default)(a.edge)}`],t[`size${(0,ev.default)(a.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${eN.thumb}`]:{width:16,height:16},[`& .${eN.switchBase}`]:{padding:4,[`&.${eN.checked}`]:{transform:"translateX(16px)"}}}}]}),eU=(0,eT.styled)(eO,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.switchBase,{[`& .${eN.input}`]:t.input},"default"!==a.color&&t[`color${(0,ev.default)(a.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${eN.checked}`]:{transform:"translateX(20px)"},[`&.${eN.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${eN.checked} + .${eN.track}`]:{opacity:.5},[`&.${eN.disabled} + .${eN.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${eN.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,eM.alpha)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([t])=>({props:{color:t},style:{[`&.${eN.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,eM.alpha)(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${eN.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${"light"===e.palette.mode?(0,eM.lighten)(e.palette[t].main,.62):(0,eM.darken)(e.palette[t].main,.55)}`}},[`&.${eN.checked} + .${eN.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),e_=(0,eT.styled)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),eV=(0,eT.styled)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),eG=a.forwardRef(function(e,a){let r=(0,eg.useDefaultProps)({props:e,name:"MuiSwitch"}),{className:l,color:o="primary",edge:i=!1,size:s="medium",sx:n}=r,d=(0,F.default)(r,eF),c=(0,I.default)({},r,{color:o,edge:i,size:s}),u=(e=>{let{classes:t,edge:a,size:r,color:l,checked:o,disabled:i}=e,s={root:["root",a&&`edge${(0,ev.default)(a)}`,`size${(0,ev.default)(r)}`],switchBase:["switchBase",`color${(0,ev.default)(l)}`,o&&"checked",i&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},n=(0,_.default)(s,ez,t);return(0,I.default)({},t,n)})(c),p=(0,t.jsx)(eV,{className:u.thumb,ownerState:c});return(0,t.jsxs)(eI,{className:(0,U.default)(u.root,l),sx:n,ownerState:c,children:[(0,t.jsx)(eU,(0,I.default)({type:"checkbox",icon:p,checkedIcon:p,ref:a,ownerState:c},d,{classes:(0,I.default)({},u,{root:u.switchBase})})),(0,t.jsx)(e_,{className:u.track,ownerState:c})]})});var eW=e.i(88866),eq=e.i(69213),eZ=e.i(16989),eH=e.i(52753),eX=e.i(75136),eY=e.i(60452);function eK(e){return(0,q.default)("MuiListItem",e)}let eJ=(0,ey.default)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),eQ=(0,ey.default)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function e0(e){return(0,q.default)("MuiListItemSecondaryAction",e)}(0,ey.default)("MuiListItemSecondaryAction",["root","disableGutters"]);let e1=["className"],e2=(0,em.default)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,I.default)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),e5=a.forwardRef(function(e,r){let l=(0,eg.useDefaultProps)({props:e,name:"MuiListItemSecondaryAction"}),{className:o}=l,i=(0,F.default)(l,e1),s=a.useContext(eY.default),n=(0,I.default)({},l,{disableGutters:s.disableGutters}),d=(e=>{let{disableGutters:t,classes:a}=e;return(0,_.default)({root:["root",t&&"disableGutters"]},e0,a)})(n);return(0,t.jsx)(e2,(0,I.default)({className:(0,U.default)(d.root,o),ownerState:n,ref:r},i))});e5.muiName="ListItemSecondaryAction";let e6=["className"],e9=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],e8=(0,em.default)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})(({theme:e,ownerState:t})=>(0,I.default)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,I.default)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${eQ.root}`]:{paddingRight:48}},{[`&.${eJ.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${eJ.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${eJ.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${eJ.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${eJ.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),e3=(0,em.default)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),e4=a.forwardRef(function(e,r){let l=(0,eg.useDefaultProps)({props:e,name:"MuiListItem"}),{alignItems:o="center",autoFocus:i=!1,button:s=!1,children:n,className:d,component:c,components:u={},componentsProps:p={},ContainerComponent:f="li",ContainerProps:{className:h}={},dense:m=!1,disabled:g=!1,disableGutters:b=!1,disablePadding:x=!1,divider:v=!1,focusVisibleClassName:y,secondaryAction:k,selected:w=!1,slotProps:j={},slots:C={}}=l,S=(0,F.default)(l.ContainerProps,e6),$=(0,F.default)(l,e9),M=a.useContext(eY.default),R=a.useMemo(()=>({dense:m||M.dense||!1,alignItems:o,disableGutters:b}),[o,M.dense,m,b]),A=a.useRef(null);(0,eH.default)(()=>{i&&A.current&&A.current.focus()},[i]);let P=a.Children.toArray(n),L=P.length&&(0,eZ.default)(P[P.length-1],["ListItemSecondaryAction"]),D=(0,I.default)({},l,{alignItems:o,autoFocus:i,button:s,dense:R.dense,disabled:g,disableGutters:b,disablePadding:x,divider:v,hasSecondaryAction:L,selected:w}),B=(e=>{let{alignItems:t,button:a,classes:r,dense:l,disabled:o,disableGutters:i,disablePadding:s,divider:n,hasSecondaryAction:d,selected:c}=e;return(0,_.default)({root:["root",l&&"dense",!i&&"gutters",!s&&"padding",n&&"divider",o&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",c&&"selected"],container:["container"]},eK,r)})(D),E=(0,eX.default)(A,r),O=C.root||u.Root||e8,T=j.root||p.root||{},z=(0,I.default)({className:(0,U.default)(B.root,T.className,d),disabled:g},$),N=c||"li";return(s&&(z.component=c||"div",z.focusVisibleClassName=(0,U.default)(eJ.focusVisible,y),N=eP.default),L)?(N=z.component||c?N:"div","li"===f&&("li"===N?N="div":"li"===z.component&&(z.component="div")),(0,t.jsx)(eY.default.Provider,{value:R,children:(0,t.jsxs)(e3,(0,I.default)({as:f,className:(0,U.default)(B.container,h),ref:E,ownerState:D},S,{children:[(0,t.jsx)(O,(0,I.default)({},T,!(0,eq.default)(O)&&{as:N,ownerState:(0,I.default)({},D,T.ownerState)},z,{children:P})),P.pop()]}))})):(0,t.jsx)(eY.default.Provider,{value:R,children:(0,t.jsxs)(O,(0,I.default)({},T,{as:N,ref:E},!(0,eq.default)(O)&&{ownerState:(0,I.default)({},D,T.ownerState)},z,{children:[P,k&&(0,t.jsx)(e5,{children:k})]}))})});var e7=e.i(40303);let te=o.default.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
  
  @media (min-width: 1025px) {
    display: none;
  }
`,tt=o.default.div`
  flex: 0.45;
  border-right: 1px solid ${e=>e.darkMode?"#333":"whitesmoke"};
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${e=>e.darkMode?"#1e1e1e":"white"};
  color: ${e=>e.darkMode?"#e0e0e0":"black"};

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Mobile and Tablet Responsive */
  @media (max-width: 1024px) {
    ${e=>e.sidebarOpen?`
      /* When sidebar is open on mobile - take full width */
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      z-index: 999;
      max-width: 100%;
      width: 100%;
      transform: translateX(0);
    `:`
      /* When sidebar is closed - hide off screen */
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      max-width: 85%;
      width: 85%;
      transform: translateX(-100%);
    `}
    transition: transform 0.3s ease-in-out;
    box-shadow: ${e=>e.sidebarOpen?"2px 0 10px rgba(0,0,0,0.3)":"none"};
  }
`,ta=(0,o.default)(i.default)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`,tr=(0,o.default)(s.default)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`,tl=o.default.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${e=>e.darkMode?"#2a2a2a":"white"};
`,to=o.default.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${e=>e.darkMode?"#2a2a2a":"white"};
  color: ${e=>e.darkMode?"#e0e0e0":"black"};
  
  ::placeholder {
    color: ${e=>e.darkMode?"#888":"#999"};
  }
`,ti=o.default.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${e=>e.darkMode?"#1e1e1e":"white"};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid ${e=>e.darkMode?"#333":"whitesmoke"};
`,ts=o.default.div`
  display: flex;
  align-items: center;
`,tn=o.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${e=>e.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,td=(0,o.default)(n.default)`
  visibility: hidden;
  
  ${tn}:hover & {
    visibility: visible;
  }
`,tc=o.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${e=>e.darkMode?"#888":"#666"};
`;e.s(["default",0,function({isMobile:e,sidebarOpen:o,setSidebarOpen:i}){let[f]=(0,r.useAuthState)(l.auth),[h,b]=(0,a.useState)(null),[x,k]=(0,a.useState)(null),[w,j]=(0,a.useState)(null),[C,S]=(0,a.useState)(null),[$,M]=(0,a.useState)(""),[R,A]=(0,a.useState)(!1),[P,L]=(0,a.useState)(!1),[F,I]=(0,a.useState)(!1),[U,_]=(0,a.useState)([]),{darkMode:V,toggleDarkMode:G}=(0,a.useContext)(v.DarkModeContext)||{darkMode:!1,toggleDarkMode:()=>{}},W=f?(0,m.query)((0,m.collection)(l.db,"chats"),(0,m.where)("users","array-contains",f.email)):null,[q,Z,H]=(0,g.useCollection)(W),X=f?(0,m.doc)(l.db,"users",f.uid):null,[Y]=(0,g.useCollection)(X?(0,m.query)((0,m.collection)(l.db,"users"),(0,m.where)("__name__","==",f.uid)):null),K=Y?.docs?.[0]?.data(),J=K?.blockedUsers||[];(0,a.useEffect)(()=>{q&&f?(async()=>{_((await Promise.all(q.docs.filter(e=>!(e.data().deletedBy||[]).includes(f.email)).map(async e=>{try{let t=(0,m.collection)(l.db,"chats",e.id,"messages"),a=(0,m.query)(t,(0,m.orderBy)("timestamp","desc"),(0,m.limit)(1)),r=await (0,m.getDocs)(a),o=r.empty?null:{...r.docs[0].data(),timestamp:r.docs[0].data().timestamp?.toMillis()||0};return{id:e.id,data:e.data(),latestMessage:o,latestTimestamp:o?.timestamp||0}}catch(t){return console.error("Error loading message for chat:",e.id,t),{id:e.id,data:e.data(),latestMessage:null,latestTimestamp:0}}}))).sort((e,t)=>t.latestTimestamp-e.latestTimestamp))})():_([])},[q,f]),(0,a.useEffect)(()=>{H&&console.error("Collection error:",H)},[H]);let Q=async()=>{if(!f)return void console.error("No user logged in");let e=prompt("Please enter an email address for the user you wish to chat with");if(e){if(!D.validate(e))return void alert("Please enter a valid email address");if(q&&(e===f.email?!!q.docs.find(e=>{let t=e.data().users;return 2===t.length&&t[0]===f.email&&t[1]===f.email}):!!q.docs.find(t=>{let a=t.data().users;return a.includes(e)&&a.includes(f.email)})))return void alert("Chat already exists with this user");try{await (0,m.addDoc)((0,m.collection)(l.db,"chats"),{users:[f.email,e],deletedBy:[],createdAt:new Date})}catch(e){console.error("Error creating chat:",e),alert(`Failed to create chat: ${e.message}`)}}},ee=()=>{b(null),j(null),S(null)},et=()=>{k(null)},ea=()=>{A(!1)},er=()=>{L(!1)},el=()=>{I(!1)},eo=async()=>{if(w&&f)try{let e=(0,m.doc)(l.db,"chats",w);await (0,m.updateDoc)(e,{deletedBy:(0,m.arrayUnion)(f.email)}),ee(),alert("Chat deleted")}catch(e){console.error("Error deleting chat:",e),alert("Failed to delete chat")}},ei=async()=>{if(!C||!f)return;let e=C.find(e=>e!==f.email);if(!e||e===f.email)return void alert("You cannot block yourself");try{let t=(0,m.doc)(l.db,"users",f.uid);await (0,m.setDoc)(t,{email:f.email,blockedUsers:(0,m.arrayUnion)(e)},{merge:!0}),ee(),alert(`${e} has been blocked. They can no longer send you messages.`)}catch(e){console.error("Error blocking user:",e),alert("Failed to block user")}},es=async e=>{if(f)try{let t=(0,m.doc)(l.db,"users",f.uid);await (0,m.updateDoc)(t,{blockedUsers:(0,m.arrayRemove)(e)}),alert(`${e} has been unblocked`)}catch(e){console.error("Error unblocking user:",e),alert("Failed to unblock user")}};if(!f)return(0,t.jsx)(tt,{darkMode:V,children:"Loading..."});let en=U.filter(e=>{if(!$.trim())return!0;let t=(e.data.users||[]).find(e=>e!==f.email);return t?t?.toLowerCase().includes($.toLowerCase()):f.email?.toLowerCase().includes($.toLowerCase())});return(0,t.jsxs)(t.Fragment,{children:[e&&o&&(0,t.jsx)(te,{onClick:()=>i(!1)}),(0,t.jsxs)(tt,{darkMode:V,isMobile:e,sidebarOpen:o,children:[(0,t.jsxs)(ti,{darkMode:V,children:[(0,t.jsx)(ta,{onClick:()=>l.auth.signOut(),src:f.photoURL}),(0,t.jsxs)(ts,{children:[(0,t.jsx)(n.default,{children:(0,t.jsx)(d.default,{})}),(0,t.jsx)(n.default,{onClick:e=>{k(e.currentTarget)},children:(0,t.jsx)(c.default,{})}),e&&(0,t.jsx)(n.default,{onClick:()=>i(!1),children:(0,t.jsx)(p.default,{})})]})]}),(0,t.jsxs)(tl,{darkMode:V,children:[(0,t.jsx)(u.default,{}),(0,t.jsx)(to,{darkMode:V,placeholder:"Search in chats",type:"text",value:$,onChange:e=>M(e.target.value)})]}),(0,t.jsx)(tr,{onClick:Q,disabled:Z,children:"Start a new chat"}),Z?(0,t.jsx)(tc,{darkMode:V,children:(0,t.jsx)(ex.default,{children:"Loading chats..."})}):en.map(e=>(0,t.jsxs)(tn,{darkMode:V,children:[(0,t.jsx)(y,{id:e.id,users:e.data.users,latestMessage:e.latestMessage}),(0,t.jsx)(td,{onClick:t=>{var a,r;return a=e.id,r=e.data.users,void(b(t.currentTarget),j(a),S(r))},children:(0,t.jsx)(c.default,{fontSize:"small"})})]},e.id)),(0,t.jsxs)(B.default,{anchorEl:x,open:!!x,onClose:et,PaperProps:{style:{backgroundColor:V?"#2a2a2a":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(E.default,{onClick:()=>{A(!0),et()},children:"Settings"}),(0,t.jsx)(E.default,{onClick:()=>{I(!0),et()},children:"Blocked Users"}),(0,t.jsx)(E.default,{onClick:()=>{L(!0),et()},children:"About"})]}),(0,t.jsxs)(B.default,{anchorEl:h,open:!!h,onClose:ee,PaperProps:{style:{backgroundColor:V?"#2a2a2a":"white",color:V?"#e0e0e0":"black"}},children:[C&&C.find(e=>e!==f.email)&&(0,t.jsx)(t.Fragment,{children:(()=>{if(!C||!f)return!1;let e=C.find(e=>e!==f.email);return!!e&&J.includes(e)})()?(0,t.jsx)(E.default,{onClick:()=>{es(C.find(e=>e!==f.email)),ee()},children:"Unblock User"}):(0,t.jsx)(E.default,{onClick:ei,children:"Block User"})}),(0,t.jsx)(E.default,{onClick:eo,children:"Delete Chat"})]}),(0,t.jsxs)(O.default,{open:R,onClose:ea,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(T.default,{children:"Settings"}),(0,t.jsx)(z.default,{children:(0,t.jsx)(e$,{control:(0,t.jsx)(eG,{checked:V,onChange:G,color:"primary"}),label:"Dark Mode"})}),(0,t.jsx)(N.default,{children:(0,t.jsx)(s.default,{onClick:ea,children:"Close"})})]}),(0,t.jsxs)(O.default,{open:F,onClose:el,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(T.default,{children:"Blocked Users"}),(0,t.jsx)(z.default,{children:0===J.length?(0,t.jsx)(ex.default,{variant:"body2",color:"textSecondary",children:"No blocked users"}):(0,t.jsx)(eW.default,{children:J.map(e=>(0,t.jsxs)(e4,{children:[(0,t.jsx)(e7.default,{primary:e,primaryTypographyProps:{style:{color:V?"#e0e0e0":"black"}}}),(0,t.jsx)(e5,{children:(0,t.jsx)(s.default,{variant:"outlined",size:"small",onClick:()=>es(e),children:"Unblock"})})]},e))})}),(0,t.jsx)(N.default,{children:(0,t.jsx)(s.default,{onClick:el,children:"Close"})})]}),(0,t.jsxs)(O.default,{open:P,onClose:er,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(T.default,{children:"About"}),(0,t.jsxs)(z.default,{children:[(0,t.jsx)(ex.default,{variant:"h6",gutterBottom:!0,children:"Chat Application"}),(0,t.jsx)(ex.default,{variant:"body1",paragraph:!0,children:"Version: 1.0.0"}),(0,t.jsx)(ex.default,{variant:"body2",paragraph:!0,children:"A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."}),(0,t.jsx)(ex.default,{variant:"body2",paragraph:!0,children:(0,t.jsx)("strong",{children:"Features:"})}),(0,t.jsx)(ex.default,{variant:"body2",component:"div",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Real-time messaging"}),(0,t.jsx)("li",{children:"User authentication"}),(0,t.jsx)("li",{children:"Search chats"}),(0,t.jsx)("li",{children:"Block/Unblock users"}),(0,t.jsx)("li",{children:"Delete conversations"}),(0,t.jsx)("li",{children:"Dark mode support"}),(0,t.jsx)("li",{children:"Chat with yourself (like WhatsApp)"}),(0,t.jsx)("li",{children:"Sorted by latest message"}),(0,t.jsx)("li",{children:"File sharing support"}),(0,t.jsx)("li",{children:"Voice messages"})]})}),(0,t.jsx)(ex.default,{variant:"body2",color:"textSecondary",style:{marginTop:20},children:"© 2024 Chat App. All rights reserved."})]}),(0,t.jsx)(N.default,{children:(0,t.jsx)(s.default,{onClick:er,children:"Close"})})]})]})]})}],5151)}]);