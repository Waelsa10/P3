module.exports=[68799,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z"}),"Chat")},95120,a=>{"use strict";a.s(["default",0,(a,b)=>{if(!a||!Array.isArray(a)||!b?.email)return console.log("getRecipientEmail: Missing data",{users:a,hasUser:!!b}),null;let c=b.email.toLowerCase(),d=a.map(a=>a?.toLowerCase()).filter(Boolean);if(console.log("getRecipientEmail: Processing",{normalizedUsers:d,normalizedUserEmail:c}),2===d.length&&d.every(a=>a===c))return console.log("getRecipientEmail: Self-chat detected"),b.email;let e=a.filter(a=>a&&a.toLowerCase()!==c);return console.log("getRecipientEmail: Found recipients",e),e.length>0?e[0]:b.email}])},88062,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(46283),g=a.i(44184),h=a.i(45542),i=a.i(27390),j=a.i(95120),k=a.i(41910),l=a.i(39196),m=a.i(15821),n=a.i(67655),o=a.i(59747),p=a.i(71197),q=b([i,l]);[i,l]=q.then?(await q)():q;let r=f.default.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-word;
  transition: background-color 0.2s;

  :hover {
    background-color: ${a=>a.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,s=(0,f.default)(g.Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`,t=f.default.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
`,u=f.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`,v=f.default.p`
  margin: 0;
  font-weight: 600;
  font-size: 15px;
  color: ${a=>a.darkMode?"#e0e0e0":"#000"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`,w=f.default.span`
  font-size: 12px;
  color: ${a=>a.darkMode?"#8696a0":"#667781"};
  margin-left: 8px;
  flex-shrink: 0;
`,x=f.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`,y=f.default.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1;
  min-width: 0;
`,z=f.default.span`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,A=f.default.span`
  font-size: 14px;
  color: ${a=>a.hasUnread?a.darkMode?"#e0e0e0":"#000":a.darkMode?"#8696a0":"#667781"};
  font-weight: ${a=>a.hasUnread?"600":"400"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`,B=f.default.div`
  background-color: ${a=>a.darkMode?"#00a884":"#25d366"};
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
`;a.s(["default",0,function({id:a,users:b,latestMessage:c}){let f=(0,k.useRouter)(),[g]=(0,h.useAuthState)(i.auth),[q,C]=(0,e.useState)(c||null),[D,E]=(0,e.useState)(0),{darkMode:F}=(0,e.useContext)(p.DarkModeContext)||{darkMode:!1},G=(0,j.default)(b,g),H=b?.length===2&&b.every(a=>a?.toLowerCase()===g?.email?.toLowerCase()),I=G?(0,l.query)((0,l.collection)(i.db,"users"),(0,l.where)("email","==",G)):null,[J]=(0,m.useCollection)(I),K=J?.docs?.[0]?.data();(0,e.useEffect)(()=>{if(!a||!g||!G)return void console.log("Missing required data for Chat:",{id:a,user:!!g,recipientEmail:G});let b=(0,l.collection)(i.db,"chats",a,"messages"),c=(0,l.query)(b,(0,l.orderBy)("timestamp","desc"),(0,l.limit)(1)),d=(0,l.onSnapshot)(c,a=>{if(a.empty)C(null);else{let b=a.docs[0].data();C({id:a.docs[0].id,...b,timestamp:b.timestamp?.toMillis()})}},a=>{console.error("Error listening to messages:",a)}),e=()=>{};if(!H&&G){let a=(0,l.query)(b,(0,l.where)("user","==",G),(0,l.where)("status","in",[o.MESSAGE_STATUS.SENT,o.MESSAGE_STATUS.DELIVERED]));e=(0,l.onSnapshot)(a,a=>{E(a.docs.length)},a=>{console.error("Error listening to unread count:",a),E(0)})}return()=>{H&&(g.displayName||g.email),d(),e()}},[a,g,G,H]);let L=(a,b=35)=>a?a.length<=b?a:a.substring(0,b)+"...":"",M=q?.user===g?.email,N=D>0&&!M;return G?(0,d.jsxs)(r,{onClick:()=>{f.push(`/chat/${a}`)},darkMode:F,children:[K?(0,d.jsx)(s,{src:K?.photoURL}):(0,d.jsx)(s,{children:G?.[0]?.toUpperCase()}),(0,d.jsxs)(t,{children:[(0,d.jsxs)(u,{children:[(0,d.jsx)(v,{darkMode:F,children:H?`${G} (You)`:G}),q&&(0,d.jsx)(w,{darkMode:F,children:(a=>{if(!a)return"";let b=new Date(a),c=new Date,d=new Date(c);if(d.setDate(d.getDate()-1),b.toDateString()===c.toDateString())return b.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});if(b.toDateString()===d.toDateString())return"Yesterday";let e=new Date(c);return(e.setDate(e.getDate()-7),b>e)?b.toLocaleDateString([],{weekday:"short"}):b.toLocaleDateString([],{month:"short",day:"numeric"})})(q.timestamp)})]}),(0,d.jsxs)(x,{children:[(0,d.jsxs)(y,{isOwnMessage:M,children:[M&&q&&(0,d.jsx)(z,{children:(0,d.jsx)(n.default,{status:q.status||o.MESSAGE_STATUS.SENT,darkMode:F})}),(0,d.jsx)(A,{hasUnread:N,darkMode:F,children:q?q.voiceURL?"🎤 Voice message":q.fileURL?q.fileType?.startsWith("image/")?"📷 Photo":q.fileType?.startsWith("video/")?"🎥 Video":q.fileType?.startsWith("audio/")?"🎵 Audio":`📎 ${L(q.fileName||"File",25)}`:L(q.message):"No messages yet"})]}),N&&(0,d.jsx)(B,{darkMode:F,children:D})]})]})]}):null}]),c()}catch(a){c(a)}},!1),89925,(a,b,c)=>{b.exports=a.x("email-validator",()=>require("email-validator"))},28257,a=>{"use strict";var b=a.i(27669);let c=b.createContext(void 0);function d(){return b.useContext(c)}a.s(["default",()=>d],28257)},2275,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(28257),g=g,h=a.i(98228),i=a.i(30913),j=a.i(71335),k=a.i(6566),l=a.i(75353);let m=["ownerState"],n=["variants"],o=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function p(a){return"ownerState"!==a&&"theme"!==a&&"sx"!==a&&"as"!==a}function q(a,b){return b&&a&&"object"==typeof a&&a.styles&&!a.styles.startsWith("@layer")&&(a.styles=`@layer ${b}{${String(a.styles)}}`),a}let r=(0,k.default)();function s({defaultTheme:a,theme:b,themeId:c}){return 0===Object.keys(b).length?a:b[c]||b}function t(a,d,e){let{ownerState:f}=d,g=(0,b.default)(d,m),h="function"==typeof a?a((0,c.default)({ownerState:f},g)):a;if(Array.isArray(h))return h.flatMap(a=>t(a,(0,c.default)({ownerState:f},g),e));if(h&&"object"==typeof h&&Array.isArray(h.variants)){let{variants:a=[]}=h,d=(0,b.default)(h,n);return a.forEach(a=>{let b=!0;if("function"==typeof a.props?b=a.props((0,c.default)({ownerState:f},g,f)):Object.keys(a.props).forEach(c=>{(null==f?void 0:f[c])!==a.props[c]&&g[c]!==a.props[c]&&(b=!1)}),b){Array.isArray(d)||(d=[d]);let b="function"==typeof a.style?a.style((0,c.default)({ownerState:f},g,f)):a.style;d.push(e?q((0,j.internal_serializeStyles)(b),e):b)}}),d}return e?q((0,j.internal_serializeStyles)(h),e):h}let u=function(a={}){let{themeId:d,defaultTheme:e=r,rootShouldForwardProp:f=p,slotShouldForwardProp:g=p}=a,i=a=>(0,l.default)((0,c.default)({},a,{theme:s((0,c.default)({},a,{defaultTheme:e,themeId:d}))}));return i.__mui_systemSx=!0,(a,k={})=>{var l;let m;(0,j.internal_processStyles)(a,a=>a.filter(a=>!(null!=a&&a.__mui_systemSx)));let{name:n,slot:q,skipVariantsResolver:r,skipSx:u,overridesResolver:v=!(l=!q?q:q.charAt(0).toLowerCase()+q.slice(1))?null:(a,b)=>b[l]}=k,w=(0,b.default)(k,o),x=n&&n.startsWith("Mui")||q?"components":"custom",y=void 0!==r?r:q&&"Root"!==q&&"root"!==q||!1,z=u||!1,A=p;"Root"===q||"root"===q?A=f:q?A=g:"string"==typeof a&&a.charCodeAt(0)>96&&(A=void 0);let B=(0,j.default)(a,(0,c.default)({shouldForwardProp:A,label:m},w)),C=a=>"function"==typeof a&&a.__emotion_real!==a||(0,h.isPlainObject)(a)?b=>{let f=s({theme:b.theme,defaultTheme:e,themeId:d});return t(a,(0,c.default)({},b,{theme:f}),f.modularCssLayers?x:void 0)}:a,D=(b,...f)=>{let g=C(b),h=f?f.map(C):[];n&&v&&h.push(a=>{let b=s((0,c.default)({},a,{defaultTheme:e,themeId:d}));if(!b.components||!b.components[n]||!b.components[n].styleOverrides)return null;let f=b.components[n].styleOverrides,g={};return Object.entries(f).forEach(([d,e])=>{g[d]=t(e,(0,c.default)({},a,{theme:b}),b.modularCssLayers?"theme":void 0)}),v(a,g)}),n&&!y&&h.push(a=>{var b;let f=s((0,c.default)({},a,{defaultTheme:e,themeId:d}));return t({variants:null==f||null==(b=f.components)||null==(b=b[n])?void 0:b.variants},(0,c.default)({},a,{theme:f}),f.modularCssLayers?"theme":void 0)}),z||h.push(i);let j=h.length-f.length;if(Array.isArray(b)&&j>0){let a=Array(j).fill("");(g=[...b,...a]).raw=[...b.raw,...a]}let k=B(g,...h);return a.muiName&&(k.muiName=a.muiName),k};return B.withConfig&&(D.withConfig=B.withConfig),D}}();var v=a.i(63699),w=a.i(98938),x=a.i(31325),y=a.i(67117),z=a.i(64359),A=a.i(8171);let B=["component","direction","spacing","divider","children","className","useFlexGap"],C=(0,k.default)(),D=u("div",{name:"MuiStack",slot:"Root",overridesResolver:(a,b)=>b.root});function E(a){return function({props:a,name:b,defaultTheme:c,themeId:d}){let e=(0,w.default)(c);return d&&(e=e[d]||e),function(a){let{theme:b,name:c,props:d}=a;return b&&b.components&&b.components[c]&&b.components[c].defaultProps?(0,v.default)(b.components[c].defaultProps,d):d}({theme:e,name:b,props:a})}({props:a,name:"MuiStack",defaultTheme:C})}let F=({ownerState:a,theme:b})=>{let d=(0,c.default)({display:"flex",flexDirection:"column"},(0,y.handleBreakpoints)({theme:b},(0,y.resolveBreakpointValues)({values:a.direction,breakpoints:b.breakpoints.values}),a=>({flexDirection:a})));if(a.spacing){let c=(0,z.createUnarySpacing)(b),e=Object.keys(b.breakpoints.values).reduce((b,c)=>(("object"==typeof a.spacing&&null!=a.spacing[c]||"object"==typeof a.direction&&null!=a.direction[c])&&(b[c]=!0),b),{}),f=(0,y.resolveBreakpointValues)({values:a.direction,base:e}),g=(0,y.resolveBreakpointValues)({values:a.spacing,base:e});"object"==typeof f&&Object.keys(f).forEach((a,b,c)=>{if(!f[a]){let d=b>0?f[c[b-1]]:"column";f[a]=d}}),d=(0,h.default)(d,(0,y.handleBreakpoints)({theme:b},g,(b,d)=>a.useFlexGap?{gap:(0,z.getValue)(c,b)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[d?f[d]:a.direction]}`]:(0,z.getValue)(c,b)}}))}return(0,y.mergeBreakpointsInOrder)(b.breakpoints,d)};var G=a.i(49927),H=a.i(13368);let I=function(a={}){let{createStyledComponent:g=D,useThemeProps:h=E,componentName:j="MuiStack"}=a,k=g(F);return d.forwardRef(function(a,g){let l,m=h(a),n=(0,x.extendSxProp)(m),{component:o="div",direction:p="column",spacing:q=0,divider:r,children:s,className:t,useFlexGap:u=!1}=n,v=(0,b.default)(n,B),w=(0,f.default)({root:["root"]},a=>(0,i.default)(j,a),{});return(0,A.jsx)(k,(0,c.default)({as:o,ownerState:{direction:p,spacing:q,useFlexGap:u},ref:g,className:(0,e.default)(w.root,t)},v,{children:r?(l=d.Children.toArray(s).filter(Boolean)).reduce((a,b,c)=>(a.push(b),c<l.length-1&&a.push(d.cloneElement(r,{key:`separator-${c}`})),a),[]):s}))})}({createStyledComponent:(0,G.default)("div",{name:"MuiStack",slot:"Root",overridesResolver:(a,b)=>b.root}),useThemeProps:a=>(0,H.useDefaultProps)({props:a,name:"MuiStack"})});var J=a.i(48097),K=a.i(38238);function L(a){return(0,i.default)("MuiFormControlLabel",a)}let M=(0,a.i(65639).default)("MuiFormControlLabel",["root","labelPlacementStart","labelPlacementTop","labelPlacementBottom","disabled","label","error","required","asterisk"]),N=["checked","className","componentsProps","control","disabled","disableTypography","inputRef","label","labelPlacement","name","onChange","required","slotProps","value"],O=(0,G.default)("label",{name:"MuiFormControlLabel",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[{[`& .${M.label}`]:b.label},b.root,b[`labelPlacement${(0,K.default)(c.labelPlacement)}`]]}})(({theme:a,ownerState:b})=>(0,c.default)({display:"inline-flex",alignItems:"center",cursor:"pointer",verticalAlign:"middle",WebkitTapHighlightColor:"transparent",marginLeft:-11,marginRight:16,[`&.${M.disabled}`]:{cursor:"default"}},"start"===b.labelPlacement&&{flexDirection:"row-reverse",marginLeft:16,marginRight:-11},"top"===b.labelPlacement&&{flexDirection:"column-reverse",marginLeft:16},"bottom"===b.labelPlacement&&{flexDirection:"column",marginLeft:16},{[`& .${M.label}`]:{[`&.${M.disabled}`]:{color:(a.vars||a).palette.text.disabled}}})),P=(0,G.default)("span",{name:"MuiFormControlLabel",slot:"Asterisk",overridesResolver:(a,b)=>b.asterisk})(({theme:a})=>({[`&.${M.error}`]:{color:(a.vars||a).palette.error.main}})),Q=d.forwardRef(function(a,h){var i,j;let k=(0,H.useDefaultProps)({props:a,name:"MuiFormControlLabel"}),{className:l,componentsProps:m={},control:n,disabled:o,disableTypography:p,label:q,labelPlacement:r="end",required:s,slotProps:t={}}=k,u=(0,b.default)(k,N),v=(0,g.default)(),w=null!=(i=null!=o?o:n.props.disabled)?i:null==v?void 0:v.disabled,x=null!=s?s:n.props.required,y={disabled:w,required:x};["checked","name","onChange","value","inputRef"].forEach(a=>{void 0===n.props[a]&&void 0!==k[a]&&(y[a]=k[a])});let z=function({props:a,states:b,muiFormControl:c}){return b.reduce((b,d)=>(b[d]=a[d],c&&void 0===a[d]&&(b[d]=c[d]),b),{})}({props:k,muiFormControl:v,states:["error"]}),B=(0,c.default)({},k,{disabled:w,labelPlacement:r,required:x,error:z.error}),C=(a=>{let{classes:b,disabled:c,labelPlacement:d,error:e,required:g}=a,h={root:["root",c&&"disabled",`labelPlacement${(0,K.default)(d)}`,e&&"error",g&&"required"],label:["label",c&&"disabled"],asterisk:["asterisk",e&&"error"]};return(0,f.default)(h,L,b)})(B),D=null!=(j=t.typography)?j:m.typography,E=q;return null==E||E.type===J.default||p||(E=(0,A.jsx)(J.default,(0,c.default)({component:"span"},D,{className:(0,e.default)(C.label,null==D?void 0:D.className),children:E}))),(0,A.jsxs)(O,(0,c.default)({className:(0,e.default)(C.root,l),ownerState:B,ref:h},u,{children:[d.cloneElement(n,y),x?(0,A.jsxs)(I,{display:"block",children:[E,(0,A.jsxs)(P,{ownerState:B,"aria-hidden":!0,className:C.asterisk,children:[" ","*"]})]}):E]}))});a.s(["default",0,Q],2275)},89599,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(34156),h=a.i(38238),i=a.i(49927),j=a.i(16750),k=a.i(91899),l=a.i(28257),m=a.i(66490),n=a.i(65639),o=a.i(30913);function p(a){return(0,o.default)("PrivateSwitchBase",a)}(0,n.default)("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);var q=a.i(8171);let r=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],s=(0,i.default)(m.default,{name:"MuiSwitchBase"})(({ownerState:a})=>(0,c.default)({padding:9,borderRadius:"50%"},"start"===a.edge&&{marginLeft:"small"===a.size?-3:-12},"end"===a.edge&&{marginRight:"small"===a.size?-3:-12})),t=(0,i.default)("input",{name:"MuiSwitchBase",shouldForwardProp:j.rootShouldForwardProp})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),u=d.forwardRef(function(a,d){let{autoFocus:g,checked:i,checkedIcon:j,className:m,defaultChecked:n,disabled:o,disableFocusRipple:u=!1,edge:v=!1,icon:w,id:x,inputProps:y,inputRef:z,name:A,onBlur:B,onChange:C,onFocus:D,readOnly:E,required:F=!1,tabIndex:G,type:H,value:I}=a,J=(0,b.default)(a,r),[K,L]=(0,k.default)({controlled:i,default:!!n,name:"SwitchBase",state:"checked"}),M=(0,l.default)(),N=o;M&&void 0===N&&(N=M.disabled);let O="checkbox"===H||"radio"===H,P=(0,c.default)({},a,{checked:K,disabled:N,disableFocusRipple:u,edge:v}),Q=(a=>{let{classes:b,checked:c,disabled:d,edge:e}=a,g={root:["root",c&&"checked",d&&"disabled",e&&`edge${(0,h.default)(e)}`],input:["input"]};return(0,f.default)(g,p,b)})(P);return(0,q.jsxs)(s,(0,c.default)({component:"span",className:(0,e.default)(Q.root,m),centerRipple:!0,focusRipple:!u,disabled:N,tabIndex:null,role:void 0,onFocus:a=>{D&&D(a),M&&M.onFocus&&M.onFocus(a)},onBlur:a=>{B&&B(a),M&&M.onBlur&&M.onBlur(a)},ownerState:P,ref:d},J,{children:[(0,q.jsx)(t,(0,c.default)({autoFocus:g,checked:i,defaultChecked:n,className:Q.input,disabled:N,id:O?x:void 0,name:A,onChange:a=>{if(a.nativeEvent.defaultPrevented)return;let b=a.target.checked;L(b),C&&C(a,b)},readOnly:E,ref:z,required:F,ownerState:P,tabIndex:G,type:H},"checkbox"===H&&void 0===I?{}:{value:I},y)),K?j:w]}))});var v=a.i(58267),w=a.i(13368);function x(a){return(0,o.default)("MuiSwitch",a)}let y=(0,n.default)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),z=["className","color","edge","size","sx"],A=(0,v.styled)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,c.edge&&b[`edge${(0,h.default)(c.edge)}`],b[`size${(0,h.default)(c.size)}`]]}})({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${y.thumb}`]:{width:16,height:16},[`& .${y.switchBase}`]:{padding:4,[`&.${y.checked}`]:{transform:"translateX(16px)"}}}}]}),B=(0,v.styled)(u,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.switchBase,{[`& .${y.input}`]:b.input},"default"!==c.color&&b[`color${(0,h.default)(c.color)}`]]}})(({theme:a})=>({position:"absolute",top:0,left:0,zIndex:1,color:a.vars?a.vars.palette.Switch.defaultColor:`${"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300]}`,transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest}),[`&.${y.checked}`]:{transform:"translateX(20px)"},[`&.${y.disabled}`]:{color:a.vars?a.vars.palette.Switch.defaultDisabledColor:`${"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}`},[`&.${y.checked} + .${y.track}`]:{opacity:.5},[`&.${y.disabled} + .${y.track}`]:{opacity:a.vars?a.vars.opacity.switchTrackDisabled:`${"light"===a.palette.mode?.12:.2}`},[`& .${y.input}`]:{left:"-100%",width:"300%"}}),({theme:a})=>({"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.activeChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,g.alpha)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(a.palette).filter(([,a])=>a.main&&a.light).map(([b])=>({props:{color:b},style:{[`&.${y.checked}`]:{color:(a.vars||a).palette[b].main,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[b].mainChannel} / ${a.vars.palette.action.hoverOpacity})`:(0,g.alpha)(a.palette[b].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${y.disabled}`]:{color:a.vars?a.vars.palette.Switch[`${b}DisabledColor`]:`${"light"===a.palette.mode?(0,g.lighten)(a.palette[b].main,.62):(0,g.darken)(a.palette[b].main,.55)}`}},[`&.${y.checked} + .${y.track}`]:{backgroundColor:(a.vars||a).palette[b].main}}}))]})),C=(0,v.styled)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(a,b)=>b.track})(({theme:a})=>({height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:a.transitions.create(["opacity","background-color"],{duration:a.transitions.duration.shortest}),backgroundColor:a.vars?a.vars.palette.common.onBackground:`${"light"===a.palette.mode?a.palette.common.black:a.palette.common.white}`,opacity:a.vars?a.vars.opacity.switchTrack:`${"light"===a.palette.mode?.38:.3}`})),D=(0,v.styled)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(a,b)=>b.thumb})(({theme:a})=>({boxShadow:(a.vars||a).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),E=d.forwardRef(function(a,d){let g=(0,w.useDefaultProps)({props:a,name:"MuiSwitch"}),{className:i,color:j="primary",edge:k=!1,size:l="medium",sx:m}=g,n=(0,b.default)(g,z),o=(0,c.default)({},g,{color:j,edge:k,size:l}),p=(a=>{let{classes:b,edge:d,size:e,color:g,checked:i,disabled:j}=a,k={root:["root",d&&`edge${(0,h.default)(d)}`,`size${(0,h.default)(e)}`],switchBase:["switchBase",`color${(0,h.default)(g)}`,i&&"checked",j&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},l=(0,f.default)(k,x,b);return(0,c.default)({},b,l)})(o),r=(0,q.jsx)(D,{className:p.thumb,ownerState:o});return(0,q.jsxs)(A,{className:(0,e.default)(p.root,i),sx:m,ownerState:o,children:[(0,q.jsx)(B,(0,c.default)({type:"checkbox",icon:r,checkedIcon:r,ref:d,ownerState:o},n,{classes:(0,c.default)({},p,{root:p.switchBase})})),(0,q.jsx)(C,{className:p.track,ownerState:o})]})});a.s(["default",0,E],89599)},59304,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(49927),h=a.i(13368),i=a.i(38262),j=a.i(65639),k=a.i(30913);function l(a){return(0,k.default)("MuiListItemSecondaryAction",a)}(0,j.default)("MuiListItemSecondaryAction",["root","disableGutters"]);var m=a.i(8171);let n=["className"],o=(0,g.default)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,c.disableGutters&&b.disableGutters]}})(({ownerState:a})=>(0,c.default)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},a.disableGutters&&{right:0})),p=d.forwardRef(function(a,g){let j=(0,h.useDefaultProps)({props:a,name:"MuiListItemSecondaryAction"}),{className:k}=j,p=(0,b.default)(j,n),q=d.useContext(i.default),r=(0,c.default)({},j,{disableGutters:q.disableGutters}),s=(a=>{let{disableGutters:b,classes:c}=a;return(0,f.default)({root:["root",b&&"disableGutters"]},l,c)})(r);return(0,m.jsx)(o,(0,c.default)({className:(0,e.default)(s.root,k),ownerState:r,ref:g},p))});p.muiName="ListItemSecondaryAction",a.s(["default",0,p],59304)},24944,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(34156),h=a.i(79277),i=a.i(49927),j=a.i(13368),k=a.i(66490),l=a.i(73676),m=a.i(9228),n=a.i(52803),o=a.i(38262),p=a.i(65639),q=a.i(30913);function r(a){return(0,q.default)("MuiListItem",a)}let s=(0,p.default)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),t=(0,p.default)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);var u=a.i(59304),v=a.i(8171);let w=["className"],x=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],y=(0,i.default)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,c.dense&&b.dense,"flex-start"===c.alignItems&&b.alignItemsFlexStart,c.divider&&b.divider,!c.disableGutters&&b.gutters,!c.disablePadding&&b.padding,c.button&&b.button,c.hasSecondaryAction&&b.secondaryAction]}})(({theme:a,ownerState:b})=>(0,c.default)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!b.disablePadding&&(0,c.default)({paddingTop:8,paddingBottom:8},b.dense&&{paddingTop:4,paddingBottom:4},!b.disableGutters&&{paddingLeft:16,paddingRight:16},!!b.secondaryAction&&{paddingRight:48}),!!b.secondaryAction&&{[`& > .${t.root}`]:{paddingRight:48}},{[`&.${s.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${s.selected}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:(0,g.alpha)(a.palette.primary.main,a.palette.action.selectedOpacity),[`&.${s.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:(0,g.alpha)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)}},[`&.${s.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},"flex-start"===b.alignItems&&{alignItems:"flex-start"},b.divider&&{borderBottom:`1px solid ${(a.vars||a).palette.divider}`,backgroundClip:"padding-box"},b.button&&{transition:a.transitions.create("background-color",{duration:a.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.selected}:hover`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:(0,g.alpha)(a.palette.primary.main,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:a.vars?`rgba(${a.vars.palette.primary.mainChannel} / ${a.vars.palette.action.selectedOpacity})`:(0,g.alpha)(a.palette.primary.main,a.palette.action.selectedOpacity)}}},b.hasSecondaryAction&&{paddingRight:48})),z=(0,i.default)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(a,b)=>b.container})({position:"relative"}),A=d.forwardRef(function(a,g){let i=(0,j.useDefaultProps)({props:a,name:"MuiListItem"}),{alignItems:p="center",autoFocus:q=!1,button:t=!1,children:A,className:B,component:C,components:D={},componentsProps:E={},ContainerComponent:F="li",ContainerProps:{className:G}={},dense:H=!1,disabled:I=!1,disableGutters:J=!1,disablePadding:K=!1,divider:L=!1,focusVisibleClassName:M,secondaryAction:N,selected:O=!1,slotProps:P={},slots:Q={}}=i,R=(0,b.default)(i.ContainerProps,w),S=(0,b.default)(i,x),T=d.useContext(o.default),U=d.useMemo(()=>({dense:H||T.dense||!1,alignItems:p,disableGutters:J}),[p,T.dense,H,J]),V=d.useRef(null);(0,m.default)(()=>{q&&V.current&&V.current.focus()},[q]);let W=d.Children.toArray(A),X=W.length&&(0,l.default)(W[W.length-1],["ListItemSecondaryAction"]),Y=(0,c.default)({},i,{alignItems:p,autoFocus:q,button:t,dense:U.dense,disabled:I,disableGutters:J,disablePadding:K,divider:L,hasSecondaryAction:X,selected:O}),Z=(a=>{let{alignItems:b,button:c,classes:d,dense:e,disabled:g,disableGutters:h,disablePadding:i,divider:j,hasSecondaryAction:k,selected:l}=a;return(0,f.default)({root:["root",e&&"dense",!h&&"gutters",!i&&"padding",j&&"divider",g&&"disabled",c&&"button","flex-start"===b&&"alignItemsFlexStart",k&&"secondaryAction",l&&"selected"],container:["container"]},r,d)})(Y),$=(0,n.default)(V,g),_=Q.root||D.Root||y,aa=P.root||E.root||{},ab=(0,c.default)({className:(0,e.default)(Z.root,aa.className,B),disabled:I},S),ac=C||"li";return(t&&(ab.component=C||"div",ab.focusVisibleClassName=(0,e.default)(s.focusVisible,M),ac=k.default),X)?(ac=ab.component||C?ac:"div","li"===F&&("li"===ac?ac="div":"li"===ab.component&&(ab.component="div")),(0,v.jsx)(o.default.Provider,{value:U,children:(0,v.jsxs)(z,(0,c.default)({as:F,className:(0,e.default)(Z.container,G),ref:$,ownerState:Y},R,{children:[(0,v.jsx)(_,(0,c.default)({},aa,!(0,h.default)(_)&&{as:ac,ownerState:(0,c.default)({},Y,aa.ownerState)},ab,{children:W})),W.pop()]}))})):(0,v.jsx)(o.default.Provider,{value:U,children:(0,v.jsxs)(_,(0,c.default)({},aa,{as:ac,ref:$},!(0,h.default)(_)&&{ownerState:(0,c.default)({},Y,aa.ownerState)},ab,{children:[W,N&&(0,v.jsx)(u.default,{children:N})]}))})});a.s(["default",0,A],24944)},98452,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(45542),g=a.i(27390),h=a.i(46283),i=a.i(43871),j=a.i(48938),k=a.i(60054),l=a.i(68799),m=a.i(29091),n=a.i(9150),o=a.i(18953),p=a.i(88062),q=a.i(15821),r=a.i(89925),s=a.i(39196),t=a.i(98597),u=a.i(58400),v=a.i(71523),w=a.i(82352),x=a.i(80348),y=a.i(10939),z=a.i(2275),A=a.i(89599),B=a.i(48097),C=a.i(18299),D=a.i(24944),E=a.i(32074),F=a.i(59304),G=a.i(71197),H=b([g,p,s]);[g,p,s]=H.then?(await H)():H;let I=h.default.div`
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
`,J=h.default.div`
  flex: 0.45;
  border-right: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;

  /* Mobile and Tablet Responsive */
  @media (max-width: 1024px) {
    ${a=>a.sidebarOpen?`
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
    box-shadow: ${a=>a.sidebarOpen?"2px 0 10px rgba(0,0,0,0.3)":"none"};
  }
`,K=(0,h.default)(i.default)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`,L=(0,h.default)(j.default)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`,M=h.default.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
  padding: 20px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"white"};
`,N=h.default.input`
  outline-width: 0;
  border: none;
  flex: 1;
  background-color: ${a=>a.darkMode?"#2a2a2a":"white"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  
  ::placeholder {
    color: ${a=>a.darkMode?"#888":"#999"};
  }
`,O=h.default.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
`,P=h.default.div`
  display: flex;
  align-items: center;
`,Q=h.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  
  &:hover {
    background-color: ${a=>a.darkMode?"#2a2a2a":"#f5f5f5"};
  }
`,R=(0,h.default)(k.default)`
  visibility: hidden;
  
  ${Q}:hover & {
    visibility: visible;
  }
`,S=h.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: ${a=>a.darkMode?"#888":"#666"};
`;a.s(["default",0,function({isMobile:a,sidebarOpen:b,setSidebarOpen:c}){let[h]=(0,f.useAuthState)(g.auth),[i,H]=(0,e.useState)(null),[T,U]=(0,e.useState)(null),[V,W]=(0,e.useState)(null),[X,Y]=(0,e.useState)(null),[Z,$]=(0,e.useState)(""),[_,aa]=(0,e.useState)(!1),[ab,ac]=(0,e.useState)(!1),[ad,ae]=(0,e.useState)(!1),[af,ag]=(0,e.useState)([]),{darkMode:ah,toggleDarkMode:ai}=(0,e.useContext)(G.DarkModeContext)||{darkMode:!1,toggleDarkMode:()=>{}},aj=h?(0,s.query)((0,s.collection)(g.db,"chats"),(0,s.where)("users","array-contains",h.email)):null,[ak,al,am]=(0,q.useCollection)(aj),an=h?(0,s.doc)(g.db,"users",h.uid):null,[ao]=(0,q.useCollection)(an?(0,s.query)((0,s.collection)(g.db,"users"),(0,s.where)("__name__","==",h.uid)):null),ap=ao?.docs?.[0]?.data(),aq=ap?.blockedUsers||[];(0,e.useEffect)(()=>{ak&&h?(async()=>{let a=(await Promise.all(ak.docs.filter(a=>!(a.data().deletedBy||[]).includes(h.email)).map(async a=>{try{let b=(0,s.collection)(g.db,"chats",a.id,"messages"),c=(0,s.query)(b,(0,s.orderBy)("timestamp","desc"),(0,s.limit)(1)),d=await (0,s.getDocs)(c),e=d.empty?null:{...d.docs[0].data(),timestamp:d.docs[0].data().timestamp?.toMillis()||0};return{id:a.id,data:a.data(),latestMessage:e,latestTimestamp:e?.timestamp||0}}catch(b){return console.error("Error loading message for chat:",a.id,b),{id:a.id,data:a.data(),latestMessage:null,latestTimestamp:0}}}))).sort((a,b)=>b.latestTimestamp-a.latestTimestamp);ag(a)})():ag([])},[ak,h]),(0,e.useEffect)(()=>{am&&console.error("Collection error:",am)},[am]);let ar=async()=>{if(!h)return void console.error("No user logged in");let a=prompt("Please enter an email address for the user you wish to chat with");if(a){if(!r.validate(a))return void alert("Please enter a valid email address");if(ak&&(a===h.email?!!ak.docs.find(a=>{let b=a.data().users;return 2===b.length&&b[0]===h.email&&b[1]===h.email}):!!ak.docs.find(b=>{let c=b.data().users;return c.includes(a)&&c.includes(h.email)})))return void alert("Chat already exists with this user");try{await (0,s.addDoc)((0,s.collection)(g.db,"chats"),{users:[h.email,a],deletedBy:[],createdAt:new Date})}catch(a){console.error("Error creating chat:",a),alert(`Failed to create chat: ${a.message}`)}}},as=()=>{H(null),W(null),Y(null)},at=()=>{U(null)},au=()=>{aa(!1)},av=()=>{ac(!1)},aw=()=>{ae(!1)},ax=async()=>{if(V&&h)try{let a=(0,s.doc)(g.db,"chats",V);await (0,s.updateDoc)(a,{deletedBy:(0,s.arrayUnion)(h.email)}),as(),alert("Chat deleted")}catch(a){console.error("Error deleting chat:",a),alert("Failed to delete chat")}},ay=async()=>{if(!X||!h)return;let a=X.find(a=>a!==h.email);if(!a||a===h.email)return void alert("You cannot block yourself");try{let b=(0,s.doc)(g.db,"users",h.uid);await (0,s.setDoc)(b,{email:h.email,blockedUsers:(0,s.arrayUnion)(a)},{merge:!0}),as(),alert(`${a} has been blocked. They can no longer send you messages.`)}catch(a){console.error("Error blocking user:",a),alert("Failed to block user")}},az=async a=>{if(h)try{let b=(0,s.doc)(g.db,"users",h.uid);await (0,s.updateDoc)(b,{blockedUsers:(0,s.arrayRemove)(a)}),alert(`${a} has been unblocked`)}catch(a){console.error("Error unblocking user:",a),alert("Failed to unblock user")}};if(!h)return(0,d.jsx)(J,{darkMode:ah,children:"Loading..."});let aA=af.filter(a=>{if(!Z.trim())return!0;let b=(a.data.users||[]).find(a=>a!==h.email);return b?b?.toLowerCase().includes(Z.toLowerCase()):h.email?.toLowerCase().includes(Z.toLowerCase())});return(0,d.jsxs)(d.Fragment,{children:[a&&b&&(0,d.jsx)(I,{onClick:()=>c(!1)}),(0,d.jsxs)(J,{darkMode:ah,isMobile:a,sidebarOpen:b,children:[(0,d.jsxs)(O,{darkMode:ah,children:[(0,d.jsx)(K,{onClick:()=>g.auth.signOut(),src:h.photoURL}),(0,d.jsxs)(P,{children:[(0,d.jsx)(k.default,{children:(0,d.jsx)(l.default,{})}),(0,d.jsx)(k.default,{onClick:a=>{U(a.currentTarget)},children:(0,d.jsx)(m.default,{})}),a&&(0,d.jsx)(k.default,{onClick:()=>c(!1),children:(0,d.jsx)(o.default,{})})]})]}),(0,d.jsxs)(M,{darkMode:ah,children:[(0,d.jsx)(n.default,{}),(0,d.jsx)(N,{darkMode:ah,placeholder:"Search in chats",type:"text",value:Z,onChange:a=>$(a.target.value)})]}),(0,d.jsx)(L,{onClick:ar,disabled:al,children:"Start a new chat"}),al?(0,d.jsx)(S,{darkMode:ah,children:(0,d.jsx)(B.default,{children:"Loading chats..."})}):aA.map(a=>(0,d.jsxs)(Q,{darkMode:ah,children:[(0,d.jsx)(p.default,{id:a.id,users:a.data.users,latestMessage:a.latestMessage}),(0,d.jsx)(R,{onClick:b=>{var c,d;return c=a.id,d=a.data.users,void(H(b.currentTarget),W(c),Y(d))},children:(0,d.jsx)(m.default,{fontSize:"small"})})]},a.id)),(0,d.jsxs)(t.default,{anchorEl:T,open:!!T,onClose:at,PaperProps:{style:{backgroundColor:ah?"#2a2a2a":"white",color:ah?"#e0e0e0":"black"}},children:[(0,d.jsx)(u.default,{onClick:()=>{aa(!0),at()},children:"Settings"}),(0,d.jsx)(u.default,{onClick:()=>{ae(!0),at()},children:"Blocked Users"}),(0,d.jsx)(u.default,{onClick:()=>{ac(!0),at()},children:"About"})]}),(0,d.jsxs)(t.default,{anchorEl:i,open:!!i,onClose:as,PaperProps:{style:{backgroundColor:ah?"#2a2a2a":"white",color:ah?"#e0e0e0":"black"}},children:[X&&X.find(a=>a!==h.email)&&(0,d.jsx)(d.Fragment,{children:(()=>{if(!X||!h)return!1;let a=X.find(a=>a!==h.email);return!!a&&aq.includes(a)})()?(0,d.jsx)(u.default,{onClick:()=>{let a=X.find(a=>a!==h.email);az(a),as()},children:"Unblock User"}):(0,d.jsx)(u.default,{onClick:ay,children:"Block User"})}),(0,d.jsx)(u.default,{onClick:ax,children:"Delete Chat"})]}),(0,d.jsxs)(v.default,{open:_,onClose:au,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:ah?"#1e1e1e":"white",color:ah?"#e0e0e0":"black"}},children:[(0,d.jsx)(w.default,{children:"Settings"}),(0,d.jsx)(x.default,{children:(0,d.jsx)(z.default,{control:(0,d.jsx)(A.default,{checked:ah,onChange:ai,color:"primary"}),label:"Dark Mode"})}),(0,d.jsx)(y.default,{children:(0,d.jsx)(j.default,{onClick:au,children:"Close"})})]}),(0,d.jsxs)(v.default,{open:ad,onClose:aw,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:ah?"#1e1e1e":"white",color:ah?"#e0e0e0":"black"}},children:[(0,d.jsx)(w.default,{children:"Blocked Users"}),(0,d.jsx)(x.default,{children:0===aq.length?(0,d.jsx)(B.default,{variant:"body2",color:"textSecondary",children:"No blocked users"}):(0,d.jsx)(C.default,{children:aq.map(a=>(0,d.jsxs)(D.default,{children:[(0,d.jsx)(E.default,{primary:a,primaryTypographyProps:{style:{color:ah?"#e0e0e0":"black"}}}),(0,d.jsx)(F.default,{children:(0,d.jsx)(j.default,{variant:"outlined",size:"small",onClick:()=>az(a),children:"Unblock"})})]},a))})}),(0,d.jsx)(y.default,{children:(0,d.jsx)(j.default,{onClick:aw,children:"Close"})})]}),(0,d.jsxs)(v.default,{open:ab,onClose:av,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:ah?"#1e1e1e":"white",color:ah?"#e0e0e0":"black"}},children:[(0,d.jsx)(w.default,{children:"About"}),(0,d.jsxs)(x.default,{children:[(0,d.jsx)(B.default,{variant:"h6",gutterBottom:!0,children:"Chat Application"}),(0,d.jsx)(B.default,{variant:"body1",paragraph:!0,children:"Version: 1.0.0"}),(0,d.jsx)(B.default,{variant:"body2",paragraph:!0,children:"A real-time messaging application built with React and Firebase. Connect with friends and family through instant messaging."}),(0,d.jsx)(B.default,{variant:"body2",paragraph:!0,children:(0,d.jsx)("strong",{children:"Features:"})}),(0,d.jsx)(B.default,{variant:"body2",component:"div",children:(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:"Real-time messaging"}),(0,d.jsx)("li",{children:"User authentication"}),(0,d.jsx)("li",{children:"Search chats"}),(0,d.jsx)("li",{children:"Block/Unblock users"}),(0,d.jsx)("li",{children:"Delete conversations"}),(0,d.jsx)("li",{children:"Dark mode support"}),(0,d.jsx)("li",{children:"Chat with yourself (like WhatsApp)"}),(0,d.jsx)("li",{children:"Sorted by latest message"}),(0,d.jsx)("li",{children:"File sharing support"}),(0,d.jsx)("li",{children:"Voice messages"})]})}),(0,d.jsx)(B.default,{variant:"body2",color:"textSecondary",style:{marginTop:20},children:"© 2024 Chat App. All rights reserved."})]}),(0,d.jsx)(y.default,{children:(0,d.jsx)(j.default,{onClick:av,children:"Close"})})]})]})]})}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__f9a7575b._.js.map