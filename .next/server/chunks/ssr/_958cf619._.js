module.exports=[3086,a=>{"use strict";var b=a.i(8171);a.i(27669);var c=a.i(46283);let d=c.keyframes`
  0%, 80%, 100% { 
    transform: scale(0.8);
    opacity: 0.5;
  }
  40% { 
    transform: scale(1.2);
    opacity: 1;
  }
`,e=c.default.div`
  background-color: #f8f9fa;
`,f=c.default.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.08));
`,g=c.default.div``,h=c.default.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  animation: ${d} 1.4s infinite ease-in-out;
  animation-delay: ${a=>a.delay};
`;a.s(["default",0,function(){return(0,b.jsx)(e,{className:"d-flex justify-content-center align-items-center min-vh-100",children:(0,b.jsxs)("div",{className:"text-center",children:[(0,b.jsx)("div",{className:"mb-4",children:(0,b.jsx)(f,{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"Logo",className:"img-fluid"})}),(0,b.jsxs)(g,{className:"d-flex justify-content-center gap-2 mb-3",children:[(0,b.jsx)(h,{className:"bg-primary",delay:"0s"}),(0,b.jsx)(h,{className:"bg-primary",delay:"0.15s"}),(0,b.jsx)(h,{className:"bg-primary",delay:"0.3s"})]}),(0,b.jsx)("p",{className:"text-secondary fw-normal",children:"Connecting..."})]})})}])},75974,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"default",{enumerable:!0,get:function(){return f}});let d=a.r(27669),e=()=>{};function f(a){let{headManager:b,reduceComponentsToState:c}=a;function f(){if(b&&b.mountedInstances){let a=d.Children.toArray(Array.from(b.mountedInstances).filter(Boolean));b.updateHead(c(a))}}return b?.mountedInstances?.add(a.children),f(),e(()=>(b?.mountedInstances?.add(a.children),()=>{b?.mountedInstances?.delete(a.children)})),e(()=>(b&&(b._pendingUpdate=f),()=>{b&&(b._pendingUpdate=f)})),null}},11276,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return p},defaultHead:function(){return l}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(4550),g=a.r(50852),h=a.r(8171),i=g._(a.r(27669)),j=f._(a.r(75974)),k=a.r(40175);function l(){return[(0,h.jsx)("meta",{charSet:"utf-8"},"charset"),(0,h.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===i.default.Fragment?a.concat(i.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}a.r(42939);let n=["name","httpEquiv","charSet","itemProp"];function o(a){let b,c,d,e;return a.reduce(m,[]).reverse().concat(l().reverse()).filter((b=new Set,c=new Set,d=new Set,e={},a=>{let f=!0,g=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){g=!0;let c=a.key.slice(a.key.indexOf("$")+1);b.has(c)?f=!1:b.add(c)}switch(a.type){case"title":case"base":c.has(a.type)?f=!1:c.add(a.type);break;case"meta":for(let b=0,c=n.length;b<c;b++){let c=n[b];if(a.props.hasOwnProperty(c))if("charSet"===c)d.has(c)?f=!1:d.add(c);else{let b=a.props[c],d=e[c]||new Set;("name"!==c||!g)&&d.has(b)?f=!1:(d.add(b),e[c]=d)}}}return f})).reverse().map((a,b)=>{let c=a.key||b;return i.default.cloneElement(a,{key:c})})}let p=function({children:a}){let b=(0,i.useContext)(k.HeadManagerContext);return(0,h.jsx)(j.default,{reduceComponentsToState:o,headManager:b,children:a})};("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},19059,(a,b,c)=>{b.exports=a.r(11276)},67696,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(27390),g=a.i(90640),h=a.i(46283),i=a.i(48938),j=a.i(19059),k=a.i(41910),l=a.i(71197),m=b([f,g]);[f,g]=m.then?(await m)():m;let n=h.default.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: ${a=>a.darkMode?"#0d1117":"whitesmoke"};
  transition: background-color 0.3s ease;
`,o=h.default.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  border-radius: 5px;
  box-shadow: ${a=>a.darkMode?"0px 4px 14px -3px rgba(0, 0, 0, 0.9)":"0px 4px 14px -3px rgba(0, 0, 0, 0.75)"};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
`,p=h.default.img`
  height: 200px;
  width: 200px;
  margin-bottom: 50px;
  filter: ${a=>a.darkMode?"brightness(0.9)":"none"};
`,q=(0,h.default)(i.default)`
  && {
    color: ${a=>a.darkMode?"#90caf9":"#1976d2"};
    border-color: ${a=>a.darkMode?"#90caf9":"#1976d2"};
    
    &:hover {
      background-color: ${a=>a.darkMode?"rgba(144, 202, 249, 0.08)":"rgba(25, 118, 210, 0.04)"};
      border-color: ${a=>a.darkMode?"#64b5f6":"#1565c0"};
    }

    &:disabled {
      color: ${a=>a.darkMode?"#666":"#bdbdbd"};
      border-color: ${a=>a.darkMode?"#666":"#bdbdbd"};
    }
  }
`,r=h.default.p`
  color: ${a=>a.darkMode?"#ff6b6b":"#d32f2f"};
  margin-top: 10px;
  font-size: 14px;
`;a.s(["default",0,function(){let a=(0,k.useRouter)(),[b,c]=(0,e.useState)(!1),[h,i]=(0,e.useState)(""),{darkMode:m}=(0,e.useContext)(l.DarkModeContext)||{darkMode:!1},s=async()=>{try{c(!0),i("");let b=await (0,g.signInWithPopup)(f.auth,f.provider);console.log("Sign in successful:",b.user),a.push("/")}catch(a){console.error("Sign in error:",a),"auth/popup-blocked"===a.code?i("Popup was blocked. Please allow popups for this site."):"auth/popup-closed-by-user"===a.code?i("Sign in was cancelled."):i(a.message)}finally{c(!1)}};return(0,d.jsxs)(n,{darkMode:m,children:[(0,d.jsx)(j.default,{children:(0,d.jsx)("title",{children:"Login"})}),(0,d.jsxs)(o,{darkMode:m,children:[(0,d.jsx)(p,{src:"https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",alt:"WhatsApp Logo"}),(0,d.jsx)(q,{variant:"outlined",onClick:s,disabled:b,darkMode:m,children:b?"Signing in...":"Sign in with Google"}),h&&(0,d.jsx)(r,{darkMode:m,children:h})]})]})}]),c()}catch(a){c(a)}},!1),56354,a=>a.a(async(b,c)=>{try{var d=a.i(27669),e=a.i(39196),f=a.i(27390),g=a.i(45542),h=b([e,f]);[e,f]=h.then?(await h)():h,a.s(["useOnlineStatus",0,()=>{let[a,b,c]=(0,g.useAuthState)(f.auth);return(0,d.useEffect)(()=>{if(b||!a)return;let c=(0,e.doc)(f.db,"users",a.uid),d=async()=>{try{await (0,e.setDoc)(c,{isOnline:!0,lastSeen:(0,e.serverTimestamp)()},{merge:!0})}catch(a){console.error("Error setting online status:",a)}},g=async()=>{try{await (0,e.setDoc)(c,{isOnline:!1,lastSeen:(0,e.serverTimestamp)()},{merge:!0})}catch(a){console.error("Error setting offline status:",a)}};d();let h=()=>{g()},i=()=>{document.hidden?g():d()};return window.addEventListener("beforeunload",h),document.addEventListener("visibilitychange",i),()=>{g(),window.removeEventListener("beforeunload",h),document.removeEventListener("visibilitychange",i)}},[a,b]),{user:a,loading:b,error:c}}]),c()}catch(a){c(a)}},!1),27342,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(45542),g=a.i(27390),h=a.i(39196),i=a.i(3086),j=a.i(67696),k=a.i(71197),l=a.i(56354),m=b([g,h,j,l]);[g,h,j,l]=m.then?(await m)():m,a.s(["default",0,function({Component:a,pageProps:b}){let[c,m]=(0,f.useAuthState)(g.auth);return((0,l.useOnlineStatus)(),(0,e.useEffect)(()=>{if(c){let a=(0,h.doc)(g.db,"users",c.uid);(0,h.setDoc)(a,{email:c.email,lastSeen:(0,h.serverTimestamp)(),photoURL:c.photoURL},{merge:!0})}},[c]),m)?(0,d.jsx)(i.default,{}):c?(0,d.jsx)(k.DarkModeProvider,{children:(0,d.jsx)(a,{...b})}):(0,d.jsx)(j.default,{})}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=_958cf619._.js.map