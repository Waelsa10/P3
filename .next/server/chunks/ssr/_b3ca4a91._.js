module.exports=[56642,(a,b,c)=>{"use strict";b.exports=a.r(1951).vendored.contexts.Loadable},26113,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},noSSR:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(4550),g=a.r(8171);a.r(27669);let h=f._(a.r(56642));function i(a){return{default:a?.default||a}}function j(a,b){delete b.webpack,delete b.modules;let c=b.loading;return()=>(0,g.jsx)(c,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function k(a,b){let c=h.default,d={loading:({error:a,isLoading:b,pastDelay:c})=>null};a instanceof Promise?d.loader=()=>a:"function"==typeof a?d.loader=a:"object"==typeof a&&(d={...d,...a});let e=(d={...d,...b}).loader;return(d.loadableGenerated&&(d={...d,...d.loadableGenerated},delete d.loadableGenerated),"boolean"!=typeof d.ssr||d.ssr)?c({...d,loader:()=>null!=e?e().then(i):Promise.resolve(i(()=>null))}):(delete d.webpack,delete d.modules,j(c,d))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},84326,(a,b,c)=>{b.exports=a.r(26113)},59507,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(27390),g=a.i(46283),h=a.i(84326),i=a.i(19059),j=a.i(41910),k=a.i(39196),l=a.i(71197),m=b([f,k]);[f,k]=m.then?(await m)():m;let n=(0,h.default)(()=>a.A(86833),{loadableGenerated:{modules:[33535]},ssr:!1}),o=(0,h.default)(()=>a.A(52719),{loadableGenerated:{modules:[60359]},ssr:!1}),p=g.default.div`
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  min-height: 100vh;
  overflow: hidden;
`,q=g.default.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`,r=g.default.div`
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
`,s=g.default.div`
  flex: 1;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${a=>a.darkMode?"#121212":"#f0f2f5"};

  @media (max-width: 1024px) {
    width: 100%;
  }
`,t=g.default.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background: ${a=>a.darkMode?"#2a2a2a":"white"};
  color: ${a=>a.darkMode?"#e0e0e0":"#000"};
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);

  > h3 {
    margin: 0 0 10px 0;
    color: ${a=>a.darkMode?"#ff6b6b":"#d32f2f"};
  }

  > p {
    margin: 10px 0;
    color: ${a=>a.darkMode?"#ccc":"#666"};
  }

  > button {
    margin-top: 10px;
    padding: 10px 20px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: background 0.2s;

    &:hover {
      background: #20ba5a;
    }

    &:active {
      transform: scale(0.98);
    }
  }
`,u=g.default.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background-color: ${a=>a.darkMode?"#3a3a00":"#fff3cd"};
  color: ${a=>a.darkMode?"#ffeb3b":"#856404"};
  border: 1px solid ${a=>a.darkMode?"#5a5a00":"#ffeeba"};
  border-radius: 8px;
  font-size: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,v=g.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${a=>a.darkMode?"#1e1e1e":"#f0f2f5"};

  > p {
    margin-top: 20px;
    color: ${a=>a.darkMode?"#888":"#666"};
    font-size: 16px;
  }
`,w=g.default.div`
  width: 50px;
  height: 50px;
  border: 4px solid ${a=>a.darkMode?"#333":"#e0e0e0"};
  border-top: 4px solid #25D366;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;a.s(["default",0,function(){let[a,b]=(0,e.useState)(!0),[c,g]=(0,e.useState)(null),[h,m]=(0,e.useState)(null),[x,y]=(0,e.useState)(!0),[z,A]=(0,e.useState)(!1),[B,C]=(0,e.useState)(!1),D=(0,j.useRouter)(),E=D.query.id,{darkMode:F}=(0,e.useContext)(l.DarkModeContext)||{darkMode:!1};return((0,e.useEffect)(()=>{let a=()=>{let a=window.innerWidth<=1024;C(a)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),(0,e.useEffect)(()=>{B&&E&&A(!1)},[E,B]),(0,e.useEffect)(()=>{let a=()=>b(!0),c=()=>b(!1);return window.addEventListener("online",a),window.addEventListener("offline",c),b(navigator.onLine),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",c)}},[]),(0,e.useEffect)(()=>{if(!E||!a)return;let b=!0;return(async()=>{try{g(null);let a=(0,k.doc)(f.db,"chats",E),c=await (0,k.getDoc)(a);if(!c.exists())throw Error("Chat not found");b&&m({id:c.id,...c.data()})}catch(a){console.error("Error fetching chat:",a),b&&(g(a.message),"not-found"===a.code&&D.replace("/"))}finally{b&&y(!1)}})(),()=>{b=!1}},[E,D,a]),a)?c?(0,d.jsxs)(p,{darkMode:F,children:[(0,d.jsx)(i.default,{children:(0,d.jsx)("title",{children:"Error - Chat"})}),(0,d.jsxs)(t,{darkMode:F,children:[(0,d.jsx)("h3",{children:"Error loading chat"}),(0,d.jsx)("p",{children:c}),(0,d.jsx)("button",{onClick:()=>D.push("/"),children:"Return to Home"})]})]}):x?(0,d.jsxs)(p,{darkMode:F,children:[(0,d.jsx)(i.default,{children:(0,d.jsx)("title",{children:"Loading..."})}),(0,d.jsxs)(v,{darkMode:F,children:[(0,d.jsx)(w,{darkMode:F}),(0,d.jsx)("p",{children:"Loading chat..."})]})]}):(0,d.jsxs)(p,{darkMode:F,children:[(0,d.jsxs)(i.default,{children:[(0,d.jsx)("title",{children:"Chat"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"})]}),(0,d.jsxs)(q,{children:[B&&z&&(0,d.jsx)(r,{onClick:()=>A(!1)}),(0,d.jsx)(n,{isMobile:B,sidebarOpen:z,setSidebarOpen:A}),(0,d.jsx)(s,{darkMode:F,children:(0,d.jsx)(o,{chat:h,messages:null,isMobile:B,onToggleSidebar:()=>A(!0)})})]})]}):(0,d.jsxs)(p,{darkMode:F,children:[(0,d.jsx)(i.default,{children:(0,d.jsx)("title",{children:"Offline - Chat"})}),(0,d.jsx)(u,{darkMode:F,children:"You are currently offline. Please check your internet connection."})]})}]),c()}catch(a){c(a)}},!1),20212,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(39141),h=a.i(27342),i=a.i(59507),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/chat/[id]",pathname:"/chat/[id]",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/chat/[id]",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1),86833,a=>{a.v(b=>Promise.all(["server/chunks/ssr/components_Sidebar_1c1ecd3b.js","server/chunks/ssr/[root-of-the-server]__47e439f5._.js","server/chunks/ssr/[root-of-the-server]__f9a7575b._.js"].map(b=>a.l(b))).then(()=>b(60620)))},52719,a=>{a.v(b=>Promise.all(["server/chunks/ssr/components_ChatScreen_index_jsx_dd0353a2._.js","server/chunks/ssr/[root-of-the-server]__f092fd12._.js","server/chunks/ssr/[root-of-the-server]__f81d4172._.js"].map(b=>a.l(b))).then(()=>b(47976)))}];

//# sourceMappingURL=_b3ca4a91._.js.map