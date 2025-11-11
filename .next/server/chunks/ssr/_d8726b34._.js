module.exports=[56642,(a,b,c)=>{"use strict";b.exports=a.r(1951).vendored.contexts.Loadable},26113,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0});var d={default:function(){return k},noSSR:function(){return j}};for(var e in d)Object.defineProperty(c,e,{enumerable:!0,get:d[e]});let f=a.r(4550),g=a.r(8171);a.r(27669);let h=f._(a.r(56642));function i(a){return{default:a?.default||a}}function j(a,b){delete b.webpack,delete b.modules;let c=b.loading;return()=>(0,g.jsx)(c,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function k(a,b){let c=h.default,d={loading:({error:a,isLoading:b,pastDelay:c})=>null};a instanceof Promise?d.loader=()=>a:"function"==typeof a?d.loader=a:"object"==typeof a&&(d={...d,...a});let e=(d={...d,...b}).loader;return(d.loadableGenerated&&(d={...d,...d.loadableGenerated},delete d.loadableGenerated),"boolean"!=typeof d.ssr||d.ssr)?c({...d,loader:()=>null!=e?e().then(i):Promise.resolve(i(()=>null))}):(delete d.webpack,delete d.modules,j(c,d))}("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},84326,(a,b,c)=>{b.exports=a.r(26113)},59507,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(27390),g=a.i(46283),h=a.i(84326),i=a.i(19059),j=a.i(41910),k=a.i(39196),l=b([f,k]);[f,k]=l.then?(await l)():l;let m=(0,h.default)(()=>a.A(86833),{loadableGenerated:{modules:[33535]},ssr:!1}),n=(0,h.default)(()=>a.A(52719),{loadableGenerated:{modules:[60359]},ssr:!1}),o=g.default.div`
  display: flex;
  box-shadow: 1px 1px 4px -1px rgba(0, 0, 0, 0.75);
`,p=g.default.div`
  flex: 1;
  overflow: scroll;
  height: 100vh;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`,q=g.default.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12);

  > button {
    margin-top: 10px;
    padding: 8px 16px;
    background: #25D366;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`,r=g.default.div`
  text-align: center;
  padding: 20px;
  margin: 20px;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 4px;
`;a.s(["default",0,function(){let[a,b]=(0,e.useState)(!0),[c,g]=(0,e.useState)(null),h=(0,j.useRouter)(),l=h.query.id,[s,t]=(0,e.useState)(null),[u,v]=(0,e.useState)(!0);return((0,e.useEffect)(()=>{let a=()=>b(!0),c=()=>b(!1);return window.addEventListener("online",a),window.addEventListener("offline",c),b(navigator.onLine),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",c)}},[]),(0,e.useEffect)(()=>{if(!l||!a)return;let b=!0;return(async()=>{try{g(null);let a=(0,k.doc)(f.db,"chats",l),c=await (0,k.getDoc)(a);if(!c.exists())throw Error("Chat not found");b&&t({id:c.id,...c.data()})}catch(a){console.error("Error fetching chat:",a),b&&(g(a.message),"not-found"===a.code&&h.replace("/"))}finally{b&&v(!1)}})(),()=>{b=!1}},[l,h,a]),a)?c?(0,d.jsx)(o,{children:(0,d.jsxs)(q,{children:[(0,d.jsx)("h3",{children:"Error loading chat"}),(0,d.jsx)("p",{children:c}),(0,d.jsx)("button",{onClick:()=>h.push("/"),children:"Return to Home"})]})}):u?(0,d.jsx)("div",{children:"Loading..."}):(0,d.jsxs)(o,{children:[(0,d.jsx)(i.default,{children:(0,d.jsx)("title",{children:"Chat"})}),(0,d.jsx)(m,{}),(0,d.jsx)(p,{children:(0,d.jsx)(n,{chat:s,messages:null})})]}):(0,d.jsx)(o,{children:(0,d.jsx)(r,{children:"You are currently offline. Please check your internet connection."})})}]),c()}catch(a){c(a)}},!1),20212,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(39141),h=a.i(27342),i=a.i(59507),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/chat/[id]",pathname:"/chat/[id]",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/chat/[id]",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1),86833,a=>{a.v(b=>Promise.all(["server/chunks/ssr/components_Sidebar_1c1ecd3b.js","server/chunks/ssr/[root-of-the-server]__8729c9af._.js","server/chunks/ssr/[root-of-the-server]__803fb967._.js"].map(b=>a.l(b))).then(()=>b(60620)))},52719,a=>{a.v(b=>Promise.all(["server/chunks/ssr/[root-of-the-server]__491c5180._.js","server/chunks/ssr/[root-of-the-server]__283f0bfd._.js"].map(b=>a.l(b))).then(()=>b(47976)))}];

//# sourceMappingURL=_d8726b34._.js.map