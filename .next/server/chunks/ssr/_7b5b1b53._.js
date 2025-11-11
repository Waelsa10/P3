module.exports=[69286,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H6l-2 2V4h16z"}),"ChatBubbleOutline")},13715,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(19059),f=a.i(46283),g=a.i(27669),h=a.i(41910),i=a.i(98452),j=a.i(15484),k=a.i(71197),l=a.i(69286),m=b([i,j]);function n(){let a=(0,h.useRouter)(),[b,c]=(0,g.useState)(!1),[f,m]=(0,g.useState)(!1),{darkMode:n}=(0,g.useContext)(k.DarkModeContext)||{darkMode:!1};(0,g.useEffect)(()=>{let a=()=>{let a=window.innerWidth<=1024;m(a)};return a(),window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),(0,g.useEffect)(()=>{f&&a.query.id&&c(!1)},[a.query.id,f]);let v=a.query.id;return(0,d.jsxs)(o,{darkMode:n,children:[(0,d.jsxs)(e.default,{children:[(0,d.jsx)("title",{children:v?"Chat":"Your Chats"}),(0,d.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"})]}),(0,d.jsxs)(p,{children:[(0,d.jsx)(i.default,{isMobile:f,sidebarOpen:b,setSidebarOpen:c}),v?(0,d.jsx)(j.default,{isMobile:f,onToggleSidebar:()=>c(!0)}):!f&&(0,d.jsx)(q,{darkMode:n,children:(0,d.jsxs)(r,{children:[(0,d.jsx)(l.default,{style:{fontSize:100,opacity:.3,marginBottom:20}}),(0,d.jsx)(s,{darkMode:n,children:"Welcome to Chat App"}),(0,d.jsx)(t,{darkMode:n,children:"Select a chat from the sidebar to start messaging"}),(0,d.jsx)(u,{darkMode:n,children:"or create a new chat to connect with someone"})]})})]})]})}[i,j]=m.then?(await m)():m;let o=f.default.div`
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  min-height: 100vh;
  overflow: hidden;
`,p=f.default.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`,q=f.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${a=>a.darkMode?"#121212":"#f0f2f5"};
  border-left: 1px solid ${a=>a.darkMode?"#333":"#e0e0e0"};

  @media (max-width: 1024px) {
    display: none;
  }
`,r=f.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 500px;
`,s=f.default.h1`
  font-size: 28px;
  font-weight: 400;
  color: ${a=>a.darkMode?"#e0e0e0":"#333"};
  margin: 0 0 20px 0;
`,t=f.default.p`
  font-size: 16px;
  color: ${a=>a.darkMode?"#888":"#666"};
  margin: 0 0 10px 0;
  line-height: 1.5;
`,u=f.default.p`
  font-size: 14px;
  color: ${a=>a.darkMode?"#666":"#999"};
  margin: 0;
  font-style: italic;
`;a.s(["default",()=>n]),c()}catch(a){c(a)}},!1),20647,a=>a.a(async(b,c)=>{try{var d=a.i(79168),e=a.i(27068),f=a.i(32759),g=a.i(39141),h=a.i(27342),i=a.i(13715),j=a.i(9193),k=b([h,i]);[h,i]=k.then?(await k)():k;let l=(0,f.hoist)(i,"default"),m=(0,f.hoist)(i,"getStaticProps"),n=(0,f.hoist)(i,"getStaticPaths"),o=(0,f.hoist)(i,"getServerSideProps"),p=(0,f.hoist)(i,"config"),q=(0,f.hoist)(i,"reportWebVitals"),r=(0,f.hoist)(i,"unstable_getStaticProps"),s=(0,f.hoist)(i,"unstable_getStaticPaths"),t=(0,f.hoist)(i,"unstable_getStaticParams"),u=(0,f.hoist)(i,"unstable_getServerProps"),v=(0,f.hoist)(i,"unstable_getServerSideProps"),w=new d.PagesRouteModule({definition:{kind:e.RouteKind.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},distDir:".next",relativeProjectDir:"",components:{App:h.default,Document:g.default},userland:i}),x=(0,j.getHandler)({srcPage:"/index",config:p,userland:i,routeModule:w,getStaticPaths:n,getStaticProps:m,getServerSideProps:o});a.s(["config",0,p,"default",0,l,"getServerSideProps",0,o,"getStaticPaths",0,n,"getStaticProps",0,m,"handler",0,x,"reportWebVitals",0,q,"routeModule",0,w,"unstable_getServerProps",0,u,"unstable_getServerSideProps",0,v,"unstable_getStaticParams",0,t,"unstable_getStaticPaths",0,s,"unstable_getStaticProps",0,r]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=_7b5b1b53._.js.map