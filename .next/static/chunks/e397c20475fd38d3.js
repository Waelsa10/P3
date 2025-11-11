(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,98457,(e,t,a)=>{"use strict";var r=e.r(78509);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=r(e.r(21506)),i=e.r(91398);a.default=(0,l.default)((0,i.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat")},90091,(e,t,a)=>{"use strict";var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;a.validate=function(e){if(!e||e.length>254||!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64||t[1].split(".").some(function(e){return e.length>63}))}},5151,e=>{"use strict";var t=e.i(91398),a=e.i(91788),r=e.i(67323),l=e.i(38770),i=e.i(60814),o=e.i(22351),s=e.i(55548),n=e.i(73831),d=e.i(98457),c=e.i(9790),u=e.i(96490),p=e.i(12057),h=e.i(72141),f=e.i(3828);e.i(81516);var m=e.i(59385),g=e.i(67849),b=e.i(38457),x=e.i(5252),v=e.i(83921);let y=function({id:e,users:i,latestMessage:o}){let s=(0,f.useRouter)(),[n]=(0,r.useAuthState)(l.auth),[d,c]=(0,a.useState)(o||null),[u,p]=(0,a.useState)(0),{darkMode:h}=(0,a.useContext)(v.DarkModeContext)||{darkMode:!1},y=(0,a.useMemo)(()=>{if(!i||!Array.isArray(i))return console.error(`❌ [Chat ${e}] Invalid users data:`,i),[];let t=[...new Set(i.filter(Boolean))];return i.length!==t.length&&console.warn(`⚠️ [Chat ${e}] Detected duplicate/invalid users in array:`,{original:i,cleaned:t}),t.length>0?t:i},[i,e]),B=((e,t)=>{if(!e||!Array.isArray(e)||0===e.length||!t?.email)return console.log("❌ getRecipientEmail: Missing or invalid data",{users:e,hasUser:!!t,usersLength:e?.length}),null;let a=t.email.toLowerCase(),r=e.map(e=>e?.toLowerCase()).filter(Boolean);console.log("🔍 getRecipientEmail: Processing",{originalUsers:e,normalizedUsers:r,normalizedUserEmail:a,usersLength:r.length});let l=1===r.length&&r[0]===a||2===r.length&&r[0]===r[1]&&r[0]===a;if(console.log("🔍 getRecipientEmail: Self-chat check",{user0:r[0],user1:r[1],currentUser:a,usersLength:r.length,isSelfChat:l}),l)return console.log("💬 getRecipientEmail: Self-chat CONFIRMED"),t.email;let i=e.filter(e=>e&&e.toLowerCase()!==a);return(console.log("👥 getRecipientEmail: Found recipients",i),0===i.length)?(console.error("❌ getRecipientEmail: No recipient found - possible data issue"),null):i[0]})(y,n),D=(0,a.useMemo)(()=>{if(!y||0===y.length||!n?.email)return!1;let t=n.email.toLowerCase(),a=y.map(e=>e?.toLowerCase()).filter(Boolean).every(e=>e===t);return console.log(`🔍 [Chat ${e}] Self-chat check:`,{cleanUsers:y,currentUser:n.email,allUsersAreSelf:a,recipientEmail:B}),a},[y,n?.email,e,B]),E=B&&!D?(0,m.query)((0,m.collection)(l.db,"users"),(0,m.where)("email","==",B)):null,[N]=(0,g.useCollection)(E),O=N?.docs?.[0]?.data();(0,a.useEffect)(()=>{if(!e||!n)return void console.log(`⏳ [Chat ${e}] Missing required data:`,{id:e,hasUser:!!n});let t=(0,m.collection)(l.db,"chats",e,"messages"),a=(0,m.query)(t,(0,m.orderBy)("timestamp","desc"),(0,m.limit)(1)),r=(0,m.onSnapshot)(a,e=>{if(e.empty)c(null);else{let t=e.docs[0].data();c({id:e.docs[0].id,...t,timestamp:t.timestamp?.toMillis()})}},t=>{console.error(`❌ [Chat ${e}] Error listening to messages:`,t)}),i=()=>{};if(!D&&B&&B!==n.email){let a=(0,m.query)(t,(0,m.where)("user","==",B),(0,m.where)("status","in",[x.MESSAGE_STATUS.SENT,x.MESSAGE_STATUS.DELIVERED]));i=(0,m.onSnapshot)(a,e=>{p(e.docs.length)},t=>{console.error(`❌ [Chat ${e}] Error listening to unread count:`,t),p(0)})}return()=>{r(),i()}},[e,n,B,D]);let I=(e,t=35)=>e?e.length<=t?e:e.substring(0,t)+"...":"",T=d?.user===n?.email,z=u>0&&!T;if(!n)return null;let U=D?`${n.displayName||n.email} (You)`:B||"Unknown User",F=D?n.photoURL:O?.photoURL,_=D?(n.displayName?.[0]||n.email?.[0])?.toUpperCase():B?.[0]?.toUpperCase();return(0,t.jsxs)(k,{onClick:()=>{s.push(`/chat/${e}`)},darkMode:h,children:[F?(0,t.jsx)(w,{src:F}):(0,t.jsx)(w,{children:_||"?"}),(0,t.jsxs)(C,{children:[(0,t.jsxs)(j,{children:[(0,t.jsx)(S,{darkMode:h,children:U}),d&&(0,t.jsx)($,{darkMode:h,children:(e=>{if(!e)return"";let t=new Date(e),a=new Date,r=new Date(a);if(r.setDate(r.getDate()-1),t.toDateString()===a.toDateString())return t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(t.toDateString()===r.toDateString())return"Yesterday";let l=new Date(a);return(l.setDate(l.getDate()-7),t>l)?t.toLocaleDateString([],{weekday:"short"}):t.toLocaleDateString([],{month:"short",day:"numeric"})})(d.timestamp)})]}),(0,t.jsxs)(M,{children:[(0,t.jsxs)(R,{isOwnMessage:T,children:[T&&d&&(0,t.jsx)(A,{children:(0,t.jsx)(b.default,{status:d.status||x.MESSAGE_STATUS.SENT,darkMode:h})}),(0,t.jsx)(P,{hasUnread:z,darkMode:h,children:d?d.voiceURL?"🎤 Voice message":d.fileURL?d.fileType?.startsWith("image/")?"📷 Photo":d.fileType?.startsWith("video/")?"🎥 Video":d.fileType?.startsWith("audio/")?"🎵 Audio":`📎 ${I(d.fileName||"File",25)}`:I(d.message):"No messages yet"})]}),z&&(0,t.jsx)(L,{darkMode:h,children:u})]})]})]})},k=i.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${e=>e.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,w=(0,i.default)(h.Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`,C=i.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`,j=i.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,S=i.default.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${e=>e.darkMode?"#e0e0e0":"#000"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,$=i.default.span`
  font-size: 12px;
  color: ${e=>e.darkMode?"#8696a0":"#667781"};
  margin-left: 8px;
  flex-shrink: 0;
`,M=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,R=i.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,A=i.default.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,P=i.default.span`
  font-size: 14px;
  color: ${e=>e.hasUnread?e.darkMode?"#e0e0e0":"#000":e.darkMode?"#8696a0":"#667781"};
  font-weight: ${e=>e.hasUnread?"600":"400"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,L=i.default.div`
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
`;var B=e.i(90091),D=e.i(33670),E=e.i(1004),N=e.i(82161),O=e.i(56918),I=e.i(85758),T=e.i(77052);e.i(50461);var z=e.i(60997),U=e.i(75907),F=e.i(56206),_=e.i(961);let V=a.createContext(void 0);function G(){return a.useContext(V)}var W=e.i(75032),q=e.i(46739),Z=e.i(37887),H=e.i(47539),X=e.i(2977);let Y=["ownerState"],K=["variants"],J=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Q(e){return"ownerState"!==e&&"theme"!==e&&"sx"!==e&&"as"!==e}function ee(e,t){return t&&e&&"object"==typeof e&&e.styles&&!e.styles.startsWith("@layer")&&(e.styles=`@layer ${t}{${String(e.styles)}}`),e}let et=(0,H.default)();function ea({defaultTheme:e,theme:t,themeId:a}){return 0===Object.keys(t).length?e:t[a]||t}function er(e,t,a){let{ownerState:r}=t,l=(0,z.default)(t,Y),i="function"==typeof e?e((0,U.default)({ownerState:r},l)):e;if(Array.isArray(i))return i.flatMap(e=>er(e,(0,U.default)({ownerState:r},l),a));if(i&&"object"==typeof i&&Array.isArray(i.variants)){let{variants:e=[]}=i,t=(0,z.default)(i,K);return e.forEach(e=>{let i=!0;if("function"==typeof e.props?i=e.props((0,U.default)({ownerState:r},l,r)):Object.keys(e.props).forEach(t=>{(null==r?void 0:r[t])!==e.props[t]&&l[t]!==e.props[t]&&(i=!1)}),i){Array.isArray(t)||(t=[t]);let i="function"==typeof e.style?e.style((0,U.default)({ownerState:r},l,r)):e.style;t.push(a?ee((0,Z.internal_serializeStyles)(i),a):i)}}),t}return a?ee((0,Z.internal_serializeStyles)(i),a):i}let el=function(e={}){let{themeId:t,defaultTheme:a=et,rootShouldForwardProp:r=Q,slotShouldForwardProp:l=Q}=e,i=e=>(0,X.default)((0,U.default)({},e,{theme:ea((0,U.default)({},e,{defaultTheme:a,themeId:t}))}));return i.__mui_systemSx=!0,(e,o={})=>{var s;let n;(0,Z.internal_processStyles)(e,e=>e.filter(e=>!(null!=e&&e.__mui_systemSx)));let{name:d,slot:c,skipVariantsResolver:u,skipSx:p,overridesResolver:h=!(s=!c?c:c.charAt(0).toLowerCase()+c.slice(1))?null:(e,t)=>t[s]}=o,f=(0,z.default)(o,J),m=d&&d.startsWith("Mui")||c?"components":"custom",g=void 0!==u?u:c&&"Root"!==c&&"root"!==c||!1,b=p||!1,x=Q;"Root"===c||"root"===c?x=r:c?x=l:"string"==typeof e&&e.charCodeAt(0)>96&&(x=void 0);let v=(0,Z.default)(e,(0,U.default)({shouldForwardProp:x,label:n},f)),y=e=>"function"==typeof e&&e.__emotion_real!==e||(0,W.isPlainObject)(e)?r=>{let l=ea({theme:r.theme,defaultTheme:a,themeId:t});return er(e,(0,U.default)({},r,{theme:l}),l.modularCssLayers?m:void 0)}:e,k=(r,...l)=>{let o=y(r),s=l?l.map(y):[];d&&h&&s.push(e=>{let r=ea((0,U.default)({},e,{defaultTheme:a,themeId:t}));if(!r.components||!r.components[d]||!r.components[d].styleOverrides)return null;let l=r.components[d].styleOverrides,i={};return Object.entries(l).forEach(([t,a])=>{i[t]=er(a,(0,U.default)({},e,{theme:r}),r.modularCssLayers?"theme":void 0)}),h(e,i)}),d&&!g&&s.push(e=>{var r;let l=ea((0,U.default)({},e,{defaultTheme:a,themeId:t}));return er({variants:null==l||null==(r=l.components)||null==(r=r[d])?void 0:r.variants},(0,U.default)({},e,{theme:l}),l.modularCssLayers?"theme":void 0)}),b||s.push(i);let n=s.length-l.length;if(Array.isArray(r)&&n>0){let e=Array(n).fill("");(o=[...r,...e]).raw=[...r.raw,...e]}let c=v(o,...s);return e.muiName&&(c.muiName=e.muiName),c};return v.withConfig&&(k.withConfig=v.withConfig),k}}();var ei=e.i(92107),eo=e.i(77137),es=e.i(16162),en=e.i(23551),ed=e.i(53259);let ec=["component","direction","spacing","divider","children","className","useFlexGap"],eu=(0,H.default)(),ep=el("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function eh(e){return function({props:e,name:t,defaultTheme:a,themeId:r}){let l=(0,eo.default)(a);return r&&(l=l[r]||l),function(e){let{theme:t,name:a,props:r}=e;return t&&t.components&&t.components[a]&&t.components[a].defaultProps?(0,ei.default)(t.components[a].defaultProps,r):r}({theme:l,name:t,props:e})}({props:e,name:"MuiStack",defaultTheme:eu})}let ef=({ownerState:e,theme:t})=>{let a=(0,U.default)({display:"flex",flexDirection:"column"},(0,en.handleBreakpoints)({theme:t},(0,en.resolveBreakpointValues)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let r=(0,ed.createUnarySpacing)(t),l=Object.keys(t.breakpoints.values).reduce((t,a)=>(("object"==typeof e.spacing&&null!=e.spacing[a]||"object"==typeof e.direction&&null!=e.direction[a])&&(t[a]=!0),t),{}),i=(0,en.resolveBreakpointValues)({values:e.direction,base:l}),o=(0,en.resolveBreakpointValues)({values:e.spacing,base:l});"object"==typeof i&&Object.keys(i).forEach((e,t,a)=>{if(!i[e]){let r=t>0?i[a[t-1]]:"column";i[e]=r}}),a=(0,W.default)(a,(0,en.handleBreakpoints)({theme:t},o,(t,a)=>e.useFlexGap?{gap:(0,ed.getValue)(r,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[a?i[a]:e.direction]}`]:(0,ed.getValue)(r,t)}}))}return(0,en.mergeBreakpointsInOrder)(t.breakpoints,a)};var em=e.i(96851),eg=e.i(95724);let eb=function(e={}){let{createStyledComponent:r=ep,useThemeProps:l=eh,componentName:i="MuiStack"}=e,o=r(ef);return a.forwardRef(function(e,r){let s,n=l(e),d=(0,es.extendSxProp)(n),{component:c="div",direction:u="column",spacing:p=0,divider:h,children:f,className:m,useFlexGap:g=!1}=d,b=(0,z.default)(d,ec),x=(0,_.default)({root:["root"]},e=>(0,q.default)(i,e),{});return(0,t.jsx)(o,(0,U.default)({as:c,ownerState:{direction:u,spacing:p,useFlexGap:g},ref:r,className:(0,F.default)(x.root,m)},b,{children:h?(s=a.Children.toArray(f).filter(Boolean)).reduce((e,t,r)=>(e.push(t),r<s.length-1&&e.push(a.cloneElement(h,{key:`separator-${r}`})),e),[]):f}))})}({createStyledComponent:(0,em.default)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,eg.useDefaultProps)({props:e,name:"MuiStack"})});var ex=e.i(15871),ev=e.i(64107),ey=e.i(13149);function ek(e){return(0,q.default)("MuiFormControlLabel",e)}let ew=(0,ey.default)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),eC=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],ej=(0,em.default)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[{[`& .${ew.label}`]:t.label},t.root,t[`labelPlacement${(0,ev.default)(a.labelPlacement)}`]]}})(({theme:e,ownerState:t})=>(0,U.default)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${ew.disabled}`]:{cursor:"default"}},"start"===t.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===t.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===t.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${ew.label}`]:{[`&.${ew.disabled}`]:{color:(e.vars||e).palette.text.disabled}}})),eS=(0,em.default)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(e,t)=>t.asterisk})(({theme:e})=>({[`&.${ew.error}`]:{color:(e.vars||e).palette.error.main}})),e$=a.forwardRef(function(e,r){var l,i;let o=(0,eg.useDefaultProps)({props:e,name:"MuiFormControlLabel"}),{className:s,componentsProps:n={},control:d,disabled:c,disableTypography:u,label:p,labelPlacement:h="end",required:f,slotProps:m={}}=o,g=(0,z.default)(o,eC),b=G(),x=null!=(l=null!=c?c:d.props.disabled)?l:null==b?void 0:b.disabled,v=null!=f?f:d.props.required,y={disabled:x,required:v};["checked","name","onChange","value","inputRef"].forEach(e=>{void 0===d.props[e]&&void 0!==o[e]&&(y[e]=o[e])});let k=function({props:e,states:t,muiFormControl:a}){return t.reduce((t,r)=>(t[r]=e[r],a&&void 0===e[r]&&(t[r]=a[r]),t),{})}({props:o,muiFormControl:b,states:["error"]}),w=(0,U.default)({},o,{disabled:x,labelPlacement:h,required:v,error:k.error}),C=(e=>{let{classes:t,disabled:a,labelPlacement:r,error:l,required:i}=e,o={root:["root",a&&"disabled",`labelPlacement${(0,ev.default)(r)}`,l&&"error",i&&"required"],label:["label",a&&"disabled"],asterisk:["asterisk",l&&"error"]};return(0,_.default)(o,ek,t)})(w),j=null!=(i=m.typography)?i:n.typography,S=p;return null==S||S.type===ex.default||u||(S=(0,t.jsx)(ex.default,(0,U.default)({component:"span"},j,{className:(0,F.default)(C.label,null==j?void 0:j.className),children:S}))),(0,t.jsxs)(ej,(0,U.default)({className:(0,F.default)(C.root,s),ownerState:w,ref:r},g,{children:[a.cloneElement(d,y),v?(0,t.jsxs)(eb,{display:"block",children:[S,(0,t.jsxs)(eS,{ownerState:w,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):S]}))});var eM=e.i(77366),eR=e.i(96994),eA=e.i(24382),eP=e.i(41661);function eL(e){return(0,q.default)("PrivateSwitchBase",e)}(0,ey.default)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);let eB=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],eD=(0,em.default)(eP.default,{name:"MuiSwitchBase"})(({ownerState:e})=>(0,U.default)({padding:9,borderRadius:"50%"},"start"===e.edge&&{marginLeft:"small"===e.size?-3:-12},"end"===e.edge&&{marginRight:"small"===e.size?-3:-12})),eE=(0,em.default)("input",{name:"MuiSwitchBase",shouldForwardProp:eR.rootShouldForwardProp})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),eN=a.forwardRef(function(e,a){let{autoFocus:r,checked:l,checkedIcon:i,className:o,defaultChecked:s,disabled:n,disableFocusRipple:d=!1,edge:c=!1,icon:u,id:p,inputProps:h,inputRef:f,name:m,onBlur:g,onChange:b,onFocus:x,readOnly:v,required:y=!1,tabIndex:k,type:w,value:C}=e,j=(0,z.default)(e,eB),[S,$]=(0,eA.default)({controlled:l,default:!!s,name:"SwitchBase",state:"checked"}),M=G(),R=n;M&&void 0===R&&(R=M.disabled);let A="checkbox"===w||"radio"===w,P=(0,U.default)({},e,{checked:S,disabled:R,disableFocusRipple:d,edge:c}),L=(e=>{let{classes:t,checked:a,disabled:r,edge:l}=e,i={root:["root",a&&"checked",r&&"disabled",l&&`edge${(0,ev.default)(l)}`],input:["input"]};return(0,_.default)(i,eL,t)})(P);return(0,t.jsxs)(eD,(0,U.default)({component:"span",className:(0,F.default)(L.root,o),centerRipple:!0,focusRipple:!d,disabled:R,tabIndex:null,role:void 0,onFocus:e=>{x&&x(e),M&&M.onFocus&&M.onFocus(e)},onBlur:e=>{g&&g(e),M&&M.onBlur&&M.onBlur(e)},ownerState:P,ref:a},j,{children:[(0,t.jsx)(eE,(0,U.default)({autoFocus:r,checked:l,defaultChecked:s,className:L.input,disabled:R,id:A?p:void 0,name:m,onChange:e=>{if(e.nativeEvent.defaultPrevented)return;let t=e.target.checked;$(t),b&&b(e,t)},readOnly:v,ref:f,required:y,ownerState:P,tabIndex:k,type:w},"checkbox"===w&&void 0===C?{}:{value:C},h)),S?i:u]}))});var eO=e.i(80445);function eI(e){return(0,q.default)("MuiSwitch",e)}let eT=(0,ey.default)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ez=["className","color","edge","size","sx"],eU=(0,eO.styled)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.edge&&t[`edge${(0,ev.default)(a.edge)}`],t[`size${(0,ev.default)(a.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${eT.thumb}`]:{width:16,height:16},[`& .${eT.switchBase}`]:{padding:4,[`&.${eT.checked}`]:{transform:"translateX(16px)"}}}}]}),eF=(0,eO.styled)(eN,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.switchBase,{[`& .${eT.input}`]:t.input},"default"!==a.color&&t[`color${(0,ev.default)(a.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${"light"===e.palette.mode?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${eT.checked}`]:{transform:"translateX(20px)"},[`&.${eT.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${"light"===e.palette.mode?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${eT.checked} + .${eT.track}`]:{opacity:.5},[`&.${eT.disabled} + .${eT.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${"light"===e.palette.mode?.12:.2}`},[`& .${eT.input}`]:{left:"-100%",width:"300%"}}),({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,eM.alpha)(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(([,e])=>e.main&&e.light).map(([t])=>({props:{color:t},style:{[`&.${eT.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,eM.alpha)(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${eT.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${"light"===e.palette.mode?(0,eM.lighten)(e.palette[t].main,.62):(0,eM.darken)(e.palette[t].main,.55)}`}},[`&.${eT.checked} + .${eT.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]})),e_=(0,eO.styled)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${"light"===e.palette.mode?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${"light"===e.palette.mode?.38:.3}`})),eV=(0,eO.styled)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),eG=a.forwardRef(function(e,a){let r=(0,eg.useDefaultProps)({props:e,name:"MuiSwitch"}),{className:l,color:i="primary",edge:o=!1,size:s="medium",sx:n}=r,d=(0,z.default)(r,ez),c=(0,U.default)({},r,{color:i,edge:o,size:s}),u=(e=>{let{classes:t,edge:a,size:r,color:l,checked:i,disabled:o}=e,s={root:["root",a&&`edge${(0,ev.default)(a)}`,`size${(0,ev.default)(r)}`],switchBase:["switchBase",`color${(0,ev.default)(l)}`,i&&"checked",o&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},n=(0,_.default)(s,eI,t);return(0,U.default)({},t,n)})(c),p=(0,t.jsx)(eV,{className:u.thumb,ownerState:c});return(0,t.jsxs)(eU,{className:(0,F.default)(u.root,l),sx:n,ownerState:c,children:[(0,t.jsx)(eF,(0,U.default)({type:"checkbox",icon:p,checkedIcon:p,ref:a,ownerState:c},d,{classes:(0,U.default)({},u,{root:u.switchBase})})),(0,t.jsx)(e_,{className:u.track,ownerState:c})]})});var eW=e.i(88866),eq=e.i(69213),eZ=e.i(16989),eH=e.i(52753),eX=e.i(75136),eY=e.i(60452);function eK(e){return(0,q.default)("MuiListItem",e)}let eJ=(0,ey.default)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),eQ=(0,ey.default)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function e0(e){return(0,q.default)("MuiListItemSecondaryAction",e)}(0,ey.default)("MuiListItemSecondaryAction",["root","disableGutters"]);let e1=["className"],e2=(0,em.default)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.disableGutters&&t.disableGutters]}})(({ownerState:e})=>(0,U.default)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),e5=a.forwardRef(function(e,r){let l=(0,eg.useDefaultProps)({props:e,name:"MuiListItemSecondaryAction"}),{className:i}=l,o=(0,z.default)(l,e1),s=a.useContext(eY.default),n=(0,U.default)({},l,{disableGutters:s.disableGutters}),d=(e=>{let{disableGutters:t,classes:a}=e;return(0,_.default)({root:["root",t&&"disableGutters"]},e0,a)})(n);return(0,t.jsx)(e2,(0,U.default)({className:(0,F.default)(d.root,i),ownerState:n,ref:r},o))});e5.muiName="ListItemSecondaryAction";let e6=["className"],e9=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],e8=(0,em.default)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:a}=e;return[t.root,a.dense&&t.dense,"flex-start"===a.alignItems&&t.alignItemsFlexStart,a.divider&&t.divider,!a.disableGutters&&t.gutters,!a.disablePadding&&t.padding,a.button&&t.button,a.hasSecondaryAction&&t.secondaryAction]}})(({theme:e,ownerState:t})=>(0,U.default)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&(0,U.default)({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${eQ.root}`]:{paddingRight:48}},{[`&.${eJ.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${eJ.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${eJ.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${eJ.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},"flex-start"===t.alignItems&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${eJ.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,eM.alpha)(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),e3=(0,em.default)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),e4=a.forwardRef(function(e,r){let l=(0,eg.useDefaultProps)({props:e,name:"MuiListItem"}),{alignItems:i="center",autoFocus:o=!1,button:s=!1,children:n,className:d,component:c,components:u={},componentsProps:p={},ContainerComponent:h="li",ContainerProps:{className:f}={},dense:m=!1,disabled:g=!1,disableGutters:b=!1,disablePadding:x=!1,divider:v=!1,focusVisibleClassName:y,secondaryAction:k,selected:w=!1,slotProps:C={},slots:j={}}=l,S=(0,z.default)(l.ContainerProps,e6),$=(0,z.default)(l,e9),M=a.useContext(eY.default),R=a.useMemo(()=>({dense:m||M.dense||!1,alignItems:i,disableGutters:b}),[i,M.dense,m,b]),A=a.useRef(null);(0,eH.default)(()=>{o&&A.current&&A.current.focus()},[o]);let P=a.Children.toArray(n),L=P.length&&(0,eZ.default)(P[P.length-1],["ListItemSecondaryAction"]),B=(0,U.default)({},l,{alignItems:i,autoFocus:o,button:s,dense:R.dense,disabled:g,disableGutters:b,disablePadding:x,divider:v,hasSecondaryAction:L,selected:w}),D=(e=>{let{alignItems:t,button:a,classes:r,dense:l,disabled:i,disableGutters:o,disablePadding:s,divider:n,hasSecondaryAction:d,selected:c}=e;return(0,_.default)({root:["root",l&&"dense",!o&&"gutters",!s&&"padding",n&&"divider",i&&"disabled",a&&"button","flex-start"===t&&"alignItemsFlexStart",d&&"secondaryAction",c&&"selected"],container:["container"]},eK,r)})(B),E=(0,eX.default)(A,r),N=j.root||u.Root||e8,O=C.root||p.root||{},I=(0,U.default)({className:(0,F.default)(D.root,O.className,d),disabled:g},$),T=c||"li";return(s&&(I.component=c||"div",I.focusVisibleClassName=(0,F.default)(eJ.focusVisible,y),T=eP.default),L)?(T=I.component||c?T:"div","li"===h&&("li"===T?T="div":"li"===I.component&&(I.component="div")),(0,t.jsx)(eY.default.Provider,{value:R,children:(0,t.jsxs)(e3,(0,U.default)({as:h,className:(0,F.default)(D.container,f),ref:E,ownerState:B},S,{children:[(0,t.jsx)(N,(0,U.default)({},O,!(0,eq.default)(N)&&{as:T,ownerState:(0,U.default)({},B,O.ownerState)},I,{children:P})),P.pop()]}))})):(0,t.jsx)(eY.default.Provider,{value:R,children:(0,t.jsxs)(N,(0,U.default)({},O,{as:T,ref:E},!(0,eq.default)(N)&&{ownerState:(0,U.default)({},B,O.ownerState)},I,{children:[P,k&&(0,t.jsx)(e5,{children:k})]}))})});var e7=e.i(40303);let te=i.default.div`
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
`,tt=i.default.div`
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
`,ta=(0,i.default)(o.default)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`,tr=(0,i.default)(s.default)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`,tl=i.default.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${e=>e.darkMode?"#2a2a2a":"white"};
`,ti=i.default.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${e=>e.darkMode?"#2a2a2a":"white"};
  color: ${e=>e.darkMode?"#e0e0e0":"black"};
  
  ::placeholder {
    color: ${e=>e.darkMode?"#888":"#999"};
  }
`,to=i.default.div`
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
`,ts=i.default.div`
  display: flex;
  align-items: center;
`,tn=i.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${e=>e.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,td=(0,i.default)(n.default)`
  visibility: hidden;
  
  ${tn}:hover & {
    visibility: visible;
  }
`,tc=i.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${e=>e.darkMode?"#888":"#666"};
`;e.s(["default",0,function({isMobile:e,sidebarOpen:i,setSidebarOpen:o}){let[h]=(0,r.useAuthState)(l.auth),[f,b]=(0,a.useState)(null),[x,k]=(0,a.useState)(null),[w,C]=(0,a.useState)(null),[j,S]=(0,a.useState)(null),[$,M]=(0,a.useState)(""),[R,A]=(0,a.useState)(!1),[P,L]=(0,a.useState)(!1),[z,U]=(0,a.useState)(!1),[F,_]=(0,a.useState)([]),{darkMode:V,toggleDarkMode:G}=(0,a.useContext)(v.DarkModeContext)||{darkMode:!1,toggleDarkMode:()=>{}},W=h?(0,m.query)((0,m.collection)(l.db,"chats"),(0,m.where)("users","array-contains",h.email)):null,[q,Z,H]=(0,g.useCollection)(W),X=h?(0,m.doc)(l.db,"users",h.uid):null,[Y]=(0,g.useCollection)(X?(0,m.query)((0,m.collection)(l.db,"users"),(0,m.where)("__name__","==",h.uid)):null),K=Y?.docs?.[0]?.data(),J=K?.blockedUsers||[];(0,a.useEffect)(()=>{q&&h?(async()=>{_((await Promise.all(q.docs.filter(e=>!(e.data().deletedBy||[]).includes(h.email)).map(async e=>{try{let t=e.data();if(!t.users||!Array.isArray(t.users))return console.error(`❌ Invalid users array for chat ${e.id}:`,t.users),null;let a=[...new Set(t.users.filter(Boolean))];t.users.length!==a.length&&console.warn(`⚠️ [Chat ${e.id}] Cleaned users array:`,{original:t.users,cleaned:a});let r=(0,m.collection)(l.db,"chats",e.id,"messages"),i=(0,m.query)(r,(0,m.orderBy)("timestamp","desc"),(0,m.limit)(1)),o=await (0,m.getDocs)(i),s=o.empty?null:{...o.docs[0].data(),timestamp:o.docs[0].data().timestamp?.toMillis()||0};return{id:e.id,data:{...t,users:a},latestMessage:s,latestTimestamp:s?.timestamp||0}}catch(t){return console.error("Error loading message for chat:",e.id,t),{id:e.id,data:e.data(),latestMessage:null,latestTimestamp:0}}}))).filter(Boolean).sort((e,t)=>t.latestTimestamp-e.latestTimestamp))})():_([])},[q,h]);let Q=async()=>{if(!h)return void console.error("No user logged in");let e=prompt("Please enter an email address for the user you wish to chat with");if(e){if(!B.validate(e))return void alert("Please enter a valid email address");if(q&&(e===h.email?!!q.docs.find(e=>{let t=e.data().users;return 2===t.length&&t[0]===h.email&&t[1]===h.email}):!!q.docs.find(t=>{let a=t.data().users;return a.includes(e)&&a.includes(h.email)})))return void alert("Chat already exists with this user");try{await (0,m.addDoc)((0,m.collection)(l.db,"chats"),{users:[h.email,e],deletedBy:[],createdAt:new Date})}catch(e){console.error("Error creating chat:",e),alert(`Failed to create chat: ${e.message}`)}}},ee=()=>{b(null),C(null),S(null)},et=()=>{k(null)},ea=()=>{A(!1)},er=()=>{L(!1)},el=()=>{U(!1)},ei=async()=>{if(w&&h)try{let e=(0,m.doc)(l.db,"chats",w);await (0,m.updateDoc)(e,{deletedBy:(0,m.arrayUnion)(h.email)}),ee(),alert("Chat deleted")}catch(e){console.error("Error deleting chat:",e),alert("Failed to delete chat")}},eo=async()=>{if(!j||!h)return;let e=j.find(e=>e!==h.email);if(!e||e===h.email)return void alert("You cannot block yourself");try{let t=(0,m.doc)(l.db,"users",h.uid);await (0,m.setDoc)(t,{email:h.email,blockedUsers:(0,m.arrayUnion)(e)},{merge:!0}),ee(),alert(`${e} has been blocked. They can no longer send you messages.`)}catch(e){console.error("Error blocking user:",e),alert("Failed to block user")}},es=async e=>{if(h)try{let t=(0,m.doc)(l.db,"users",h.uid);await (0,m.updateDoc)(t,{blockedUsers:(0,m.arrayRemove)(e)}),alert(`${e} has been unblocked`)}catch(e){console.error("Error unblocking user:",e),alert("Failed to unblock user")}};if(!h)return(0,t.jsx)(tt,{darkMode:V,children:"Loading..."});let en=F.filter(e=>{if(!$.trim())return!0;let t=(e.data.users||[]).find(e=>e!==h.email);return t?t?.toLowerCase().includes($.toLowerCase()):h.email?.toLowerCase().includes($.toLowerCase())});return(0,t.jsxs)(t.Fragment,{children:[e&&i&&(0,t.jsx)(te,{onClick:()=>o(!1)}),(0,t.jsxs)(tt,{darkMode:V,isMobile:e,sidebarOpen:i,children:[(0,t.jsxs)(to,{darkMode:V,children:[(0,t.jsx)(ta,{onClick:()=>l.auth.signOut(),src:h.photoURL}),(0,t.jsxs)(ts,{children:[(0,t.jsx)(n.default,{children:(0,t.jsx)(d.default,{})}),(0,t.jsx)(n.default,{onClick:e=>{k(e.currentTarget)},children:(0,t.jsx)(c.default,{})}),e&&(0,t.jsx)(n.default,{onClick:()=>o(!1),children:(0,t.jsx)(p.default,{})})]})]}),(0,t.jsxs)(tl,{darkMode:V,children:[(0,t.jsx)(u.default,{}),(0,t.jsx)(ti,{darkMode:V,placeholder:"Search in chats",type:"text",value:$,onChange:e=>M(e.target.value)})]}),(0,t.jsx)(tr,{onClick:Q,disabled:Z,children:"Start a new chat"}),Z?(0,t.jsx)(tc,{darkMode:V,children:(0,t.jsx)(ex.default,{children:"Loading chats..."})}):en.map(e=>(console.log(`🔍 Rendering chat ${e.id}:`,{chatId:e.id,users:e.data.users}),(0,t.jsxs)(tn,{darkMode:V,children:[(0,t.jsx)(y,{id:e.id,users:e.data.users,latestMessage:e.latestMessage}),(0,t.jsx)(td,{onClick:t=>{var a,r;return a=e.id,r=e.data.users,void(b(t.currentTarget),C(a),S(r))},children:(0,t.jsx)(c.default,{fontSize:"small"})})]},e.id))),(0,t.jsxs)(D.default,{anchorEl:x,open:!!x,onClose:et,PaperProps:{style:{backgroundColor:V?"#2a2a2a":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(E.default,{onClick:()=>{A(!0),et()},children:"Settings"}),(0,t.jsx)(E.default,{onClick:()=>{U(!0),et()},children:"Blocked Users"}),(0,t.jsx)(E.default,{onClick:()=>{L(!0),et()},children:"About"})]}),(0,t.jsxs)(D.default,{anchorEl:f,open:!!f,onClose:ee,PaperProps:{style:{backgroundColor:V?"#2a2a2a":"white",color:V?"#e0e0e0":"black"}},children:[j&&j.find(e=>e!==h.email)&&(0,t.jsx)(t.Fragment,{children:(()=>{if(!j||!h)return!1;let e=j.find(e=>e!==h.email);return!!e&&J.includes(e)})()?(0,t.jsx)(E.default,{onClick:()=>{es(j.find(e=>e!==h.email)),ee()},children:"Unblock User"}):(0,t.jsx)(E.default,{onClick:eo,children:"Block User"})}),(0,t.jsx)(E.default,{onClick:ei,children:"Delete Chat"})]}),(0,t.jsxs)(N.default,{open:R,onClose:ea,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(O.default,{children:"Settings"}),(0,t.jsx)(I.default,{children:(0,t.jsx)(e$,{control:(0,t.jsx)(eG,{checked:V,onChange:G,color:"primary"}),label:"Dark Mode"})}),(0,t.jsx)(T.default,{children:(0,t.jsx)(s.default,{onClick:ea,children:"Close"})})]}),(0,t.jsxs)(N.default,{open:z,onClose:el,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(O.default,{children:"Blocked Users"}),(0,t.jsx)(I.default,{children:0===J.length?(0,t.jsx)(ex.default,{variant:"body2",color:"textSecondary",children:"No blocked users"}):(0,t.jsx)(eW.default,{children:J.map(e=>(0,t.jsxs)(e4,{children:[(0,t.jsx)(e7.default,{primary:e,primaryTypographyProps:{style:{color:V?"#e0e0e0":"black"}}}),(0,t.jsx)(e5,{children:(0,t.jsx)(s.default,{variant:"outlined",size:"small",onClick:()=>es(e),children:"Unblock"})})]},e))})}),(0,t.jsx)(T.default,{children:(0,t.jsx)(s.default,{onClick:el,children:"Close"})})]}),(0,t.jsxs)(N.default,{open:P,onClose:er,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:V?"#1e1e1e":"white",color:V?"#e0e0e0":"black"}},children:[(0,t.jsx)(O.default,{children:"About"}),(0,t.jsxs)(I.default,{children:[(0,t.jsx)(ex.default,{variant:"h6",gutterBottom:!0,children:"Chat Application"}),(0,t.jsx)(ex.default,{variant:"body1",paragraph:!0,children:"Version: 1.0.0"}),(0,t.jsx)(ex.default,{variant:"body2",paragraph:!0,children:"A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."}),(0,t.jsx)(ex.default,{variant:"body2",paragraph:!0,children:(0,t.jsx)("strong",{children:"Features:"})}),(0,t.jsx)(ex.default,{variant:"body2",component:"div",children:(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:"Real-time messaging"}),(0,t.jsx)("li",{children:"User authentication"}),(0,t.jsx)("li",{children:"Search chats"}),(0,t.jsx)("li",{children:"Block/Unblock users"}),(0,t.jsx)("li",{children:"Delete conversations"}),(0,t.jsx)("li",{children:"Dark mode support"}),(0,t.jsx)("li",{children:"Chat with yourself (like WhatsApp)"}),(0,t.jsx)("li",{children:"Sorted by latest message"}),(0,t.jsx)("li",{children:"File sharing support"}),(0,t.jsx)("li",{children:"Voice messages"})]})}),(0,t.jsx)(ex.default,{variant:"body2",color:"textSecondary",style:{marginTop:20},children:"© 2024 Chat App. All rights reserved."})]}),(0,t.jsx)(T.default,{children:(0,t.jsx)(s.default,{onClick:er,children:"Close"})})]})]})]})}],5151)}]);