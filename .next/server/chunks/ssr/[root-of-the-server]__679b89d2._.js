module.exports=[3263,a=>{"use strict";var b=a.i(27669),c=a.i(59747);a.s(["useEmojiPicker",0,()=>{let[a,d]=(0,b.useState)(null),[e,f]=(0,b.useState)("recent"),[g,h]=(0,b.useState)([]),[i,j]=(0,b.useState)("");return(0,b.useEffect)(()=>{let a=localStorage.getItem("recentEmojis");a&&h(JSON.parse(a))},[]),{emojiAnchorEl:a,selectedEmojiCategory:e,setSelectedEmojiCategory:f,emojiSearchTerm:i,setEmojiSearchTerm:j,recentEmojis:g,handleEmojiPickerOpen:a=>{d(a.currentTarget)},handleEmojiPickerClose:()=>{d(null),j("")},saveRecentEmoji:a=>{let b=[a,...g.filter(b=>b!==a)].slice(0,30);h(b),localStorage.setItem("recentEmojis",JSON.stringify(b))},getFilteredEmojis:()=>"recent"===e?g:c.EMOJIS[e]||[],openEmojiPicker:!!a}}])},5428,a=>{"use strict";let b="dlmdxpf0j",c="chat_uploads",d=`https://api.cloudinary.com/v1_1/${b}/auto/upload`,e=async(a,e=null)=>new Promise((f,g)=>{if(!a)return void g(Error("No file provided"));console.log("🔄 Starting Cloudinary upload..."),console.log("📦 File size:",a.size,"bytes"),console.log("📦 File type:",a.type),console.log("☁️ Cloud name:",b),console.log("🔑 Upload preset:",c);let h=new FormData;h.append("file",a),h.append("upload_preset",c),h.append("folder","chat-app");let i=new XMLHttpRequest;e&&i.upload.addEventListener("progress",a=>{if(a.lengthComputable){let b=a.loaded/a.total*100;console.log(`📤 Upload progress: ${Math.round(b)}%`),e(b)}}),i.addEventListener("load",()=>{if(200===i.status)try{let a=JSON.parse(i.responseText);console.log("✅ Upload successful!"),console.log("🔗 URL:",a.secure_url),f(a.secure_url)}catch(a){console.error("❌ Failed to parse response:",a),g(Error("Failed to parse Cloudinary response"))}else{console.error("❌ Upload failed with status:",i.status),console.error("📄 Response:",i.responseText);let a=`Upload failed (${i.status})`;try{let b=JSON.parse(i.responseText);a=b.error?.message||a}catch(a){}g(Error(a))}}),i.addEventListener("error",()=>{console.error("❌ Network error during upload"),g(Error("Network error during upload"))}),i.addEventListener("abort",()=>{console.log("⚠️ Upload cancelled"),g(Error("Upload cancelled"))}),console.log("🚀 Sending request to:",d),i.open("POST",d),i.send(h)});a.s(["uploadToCloudinary",0,e])},54779,a=>a.a(async(b,c)=>{try{var d=a.i(27390),e=a.i(39196),f=b([d,e]);[d,e]=f.then?(await f)():f;let g=async(a,b)=>{try{if(a===b)return!1;let c=(0,e.collection)(d.db,"users"),f=(0,e.query)(c,(0,e.where)("email","==",b)),g=await (0,e.getDocs)(f);if(!g.empty&&(g.docs[0].data().blockedUsers||[]).includes(a))return!0;return!1}catch(a){return console.error("Error checking if blocked:",a),!1}};a.s(["buildReplyData",0,a=>{if(!a)return null;let b={messageId:a.id,user:a.user,message:a.message};return a.fileURL&&(b.fileURL=a.fileURL,b.fileName=a.fileName,b.fileType=a.fileType),a.voiceURL&&(b.voiceURL=a.voiceURL,b.duration=a.duration),b},"checkIfBlocked",0,g,"formatFileSize",0,a=>{if(0===a)return"0 Bytes";let b=Math.floor(Math.log(a)/Math.log(1024));return Math.round(a/Math.pow(1024,b)*100)/100+" "+["Bytes","KB","MB","GB"][b]},"formatTime",0,a=>{if(!a||a<0)return"0:00";let b=Math.floor(a/60),c=Math.floor(a%60);return`${b}:${c.toString().padStart(2,"0")}`}]),c()}catch(a){c(a)}},!1),9515,a=>a.a(async(b,c)=>{try{var d=a.i(27669),e=a.i(39196),f=a.i(27390),g=a.i(5428),h=a.i(54779),i=a.i(59747),j=b([e,f,h]);[e,f,h]=j.then?(await j)():j,a.s(["useFileUpload",0,(a,b,c)=>{let[j,k]=(0,d.useState)(null),[l,m]=(0,d.useState)(null),[n,o]=(0,d.useState)(!1),[p,q]=(0,d.useState)(0),[r,s]=(0,d.useState)(!1),t=async(d,l,n,p,r,t,u=!1)=>{if(j&&a&&b&&c){s(!0),n(null);try{if(!u&&await (0,h.checkIfBlocked)(b.email,c)){n("You cannot send messages to this user. You have been blocked."),s(!1);return}let v=await (0,g.uploadToCloudinary)(j,a=>{q(a)}),w=(0,e.doc)(f.db,"users",b.uid);await (0,e.setDoc)(w,{lastSeen:(0,e.serverTimestamp)()},{merge:!0});let x={timestamp:(0,e.serverTimestamp)(),message:d||"",user:b.email,photoURL:b.photoURL,fileURL:v,fileName:j.name,fileType:j.type,fileSize:j.size,status:i.MESSAGE_STATUS.SENT},y=(0,h.buildReplyData)(l);y&&(x.replyTo=y),await (0,e.addDoc)((0,e.collection)(f.db,"chats",a,"messages"),x),p(""),k(null),m(null),o(!1),q(0),r(null),t()}catch(a){console.error("Error sending file:",a),n(`Failed to send file: ${a.message}`)}finally{s(!1)}}};return{selectedFile:j,filePreview:l,showFileConfirmation:n,uploadProgress:p,isUploading:r,handleFileSelect:a=>{let b=a.target.files[0];if(b){if(k(b),b.type.startsWith("image/")){let a=new FileReader;a.onloadend=()=>{m(a.result)},a.readAsDataURL(b)}else m(null);o(!0)}},cancelFileSelection:()=>{k(null),m(null),o(!1),q(0)},sendFileMessage:t}}]),c()}catch(a){c(a)}},!1),35796,a=>a.a(async(b,c)=>{try{var d=a.i(27669),e=a.i(39196),f=a.i(27390),g=a.i(5428),h=a.i(54779),i=a.i(59747),j=b([e,f,h]);[e,f,h]=j.then?(await j)():j,a.s(["useVoiceRecording",0,(a,b,c)=>{let[j,k]=(0,d.useState)(!1),[l,m]=(0,d.useState)(0),[n,o]=(0,d.useState)(null),[p,q]=(0,d.useState)(0),[r,s]=(0,d.useState)(!1),t=(0,d.useRef)(null),u=(0,d.useRef)([]);(0,d.useEffect)(()=>{let a;return j?a=setInterval(()=>{m(a=>a+1)},1e3):m(0),()=>clearInterval(a)},[j]);let v=async a=>{try{let b=await navigator.mediaDevices.getUserMedia({audio:!0}),c="audio/webm";!MediaRecorder.isTypeSupported(c)&&(c="audio/webm;codecs=opus",MediaRecorder.isTypeSupported(c)||(c="audio/ogg;codecs=opus",!MediaRecorder.isTypeSupported(c)&&(c="audio/mp4",MediaRecorder.isTypeSupported(c)||(c="")))),console.log("Using MIME type:",c||"default");let d=c?{mimeType:c}:{},e=new MediaRecorder(b,d);t.current=e,u.current=[],e.ondataavailable=a=>{console.log("Data available:",a.data.size,"bytes"),a.data.size>0&&u.current.push(a.data)},e.onstop=()=>{console.log("Recording stopped, chunks:",u.current.length);let d=new Blob(u.current,{type:c||"audio/webm"});console.log("Blob size:",d.size),d.size>0?o(d):(console.error("No audio data captured"),a("Recording failed: No audio data captured. Please try again.")),b.getTracks().forEach(a=>a.stop())},e.onerror=b=>{console.error("MediaRecorder error:",b.error),a(`Recording error: ${b.error.name}`)},e.start(100),k(!0)}catch(b){console.error("Error starting recording:",b),a("Failed to access microphone. Please check permissions.")}},w=async(d,j,k,m,p=!1)=>{if(n&&a&&b&&c){s(!0),j(null);try{if(!p&&await (0,h.checkIfBlocked)(b.email,c)){j("You cannot send messages to this user. You have been blocked."),s(!1);return}let r=await (0,g.uploadToCloudinary)(n,a=>{q(a)}),t=(0,e.doc)(f.db,"users",b.uid);await (0,e.setDoc)(t,{lastSeen:(0,e.serverTimestamp)()},{merge:!0});let u={timestamp:(0,e.serverTimestamp)(),message:"",user:b.email,photoURL:b.photoURL,voiceURL:r,voiceDuration:l,status:i.MESSAGE_STATUS.SENT},v=(0,h.buildReplyData)(d);v&&(u.replyTo=v),await (0,e.addDoc)((0,e.collection)(f.db,"chats",a,"messages"),u),o(null),q(0),k(null),m()}catch(a){console.error("Error sending voice message:",a),j(`Failed to send voice message: ${a.message}`)}finally{s(!1)}}};return{isRecording:j,recordingTime:l,audioBlob:n,uploadProgress:p,isUploading:r,startRecording:v,stopRecording:()=>{t.current&&j&&(t.current.stop(),k(!1))},cancelRecording:()=>{t.current&&j&&(t.current.stop(),k(!1)),o(null),m(0)},sendVoiceMessage:w}}]),c()}catch(a){c(a)}},!1),79126,a=>a.a(async(b,c)=>{try{var d=a.i(15821),e=a.i(39196),f=a.i(27390),g=a.i(27669),h=b([e,f]);[e,f]=h.then?(await h)():h,a.s(["useRecipientData",0,(a,b)=>{if(!a||!b||!b.users||0===b.users.length)return console.log("⏳ useRecipientData: Waiting for chat data...",{hasUser:!!a,hasChat:!!b,hasUsers:!!b?.users,usersLength:b?.users?.length}),{recipientEmail:null,recipient:null,recipientSnapshot:null,isSelfChat:!1,isLoading:!0};let c=(0,g.useMemo)(()=>{let c=[...new Set(b.users.filter(Boolean))];console.log("🔍 useRecipientData: Processing chat",{originalUsers:b.users,cleanUsers:c,currentUser:a.email});let d=a.email.toLowerCase(),e=c.map(a=>a?.toLowerCase()).filter(Boolean),f=1===e.length&&e[0]===d||2===e.length&&e.every(a=>a===d);if(console.log("🔍 useRecipientData: Self-chat check",{normalizedUsers:e,normalizedUserEmail:d,isSelfChat:f}),f)return console.log("💬 useRecipientData: Self-chat detected - recipient is yourself"),{recipientEmail:a.email,isSelfChat:!0};let g=c.find(a=>a&&a.toLowerCase()!==d);return g?(console.log("✅ useRecipientData: Found recipient",{recipient:g,currentUser:a.email,isSelfChat:!1}),{recipientEmail:g,isSelfChat:!1}):(console.error("❌ useRecipientData: Could not find recipient in chat.users",{cleanUsers:c,currentUser:a.email}),{recipientEmail:null,isSelfChat:!1})},[b.users,a.email]),h=c.recipientEmail?(0,e.query)((0,e.collection)(f.db,"users"),(0,e.where)("email","==",c.recipientEmail)):null,[i]=(0,d.useCollection)(h),j=i?.docs?.[0]?.data();return{recipientEmail:c.recipientEmail,recipient:j||{email:c.recipientEmail,photoURL:c.isSelfChat?a.photoURL:null},recipientSnapshot:i,isSelfChat:c.isSelfChat,isLoading:!1}}]),c()}catch(a){c(a)}},!1),67680,a=>a.a(async(b,c)=>{try{var d=a.i(27669),e=a.i(39196),f=a.i(15821),g=a.i(27390),h=b([e,g]);[e,g]=h.then?(await h)():h,a.s(["useMessages",0,a=>{let b=(0,d.useMemo)(()=>a?(0,e.collection)(g.db,"chats",a,"messages"):null,[a]),c=(0,d.useMemo)(()=>b?(0,e.query)(b,(0,e.orderBy)("timestamp","asc")):null,[b]),[h]=(0,f.useCollection)(c||null);return{messagesSnapshot:h}}]),c()}catch(a){c(a)}},!1),91942,a=>a.a(async(b,c)=>{try{var d=a.i(39196),e=a.i(27390),f=a.i(59747),g=b([d,e]);[d,e]=g.then?(await g)():g;let h=async(a,b,c)=>{try{if(!a)return console.error(`❌ verifyChatParticipants: chatId is missing`),!1;let f=(0,d.doc)(e.db,"chats",a),g=await (0,d.getDoc)(f);if(!g.exists())return console.error(`❌ [Chat: ${a}] Chat does not exist`),!1;let h=g.data(),i=h.users||h.participants||[];if(console.log(`🔍 [Chat: ${a}] Verifying participants:`,{chatUsers:i,checkingUser1:b,checkingUser2:c,chatDataFields:Object.keys(h)}),!Array.isArray(i))return console.error(`❌ [Chat: ${a}] 'users' field is not an array:`,typeof i,i),!1;if(0===i.length)return console.error(`❌ [Chat: ${a}] No users in chat`),!1;let j=i.includes(b),k=!c||i.includes(c);if(!j)return console.error(`❌ [Chat: ${a}] User1 (${b}) NOT in chat. Chat users: [${i.join(", ")}]`),!1;if(!k)return console.error(`❌ [Chat: ${a}] User2 (${c}) NOT in chat. Chat users: [${i.join(", ")}]`),!1;return console.log(`✅ [Chat: ${a}] Participants verified: Both ${b} and ${c} are in chat`),!0}catch(b){return console.error(`❌ [Chat: ${a}] Error verifying chat participants:`,b),!1}},i=async a=>{try{if(!a)return console.log(`❓ isRecipientOnline: No recipientEmail provided`),!1;let b=(0,d.collection)(e.db,"users"),c=(0,d.query)(b,(0,d.where)("email","==",a)),f=await (0,d.getDocs)(c);if(f.empty)return console.log(`❓ Recipient ${a} not found in users`),!1;let g=f.docs[0].data(),h=g.lastSeen?.toDate?.()||new Date(g.lastSeen),i=(new Date-h)/1e3,j=i<30;return j?console.log(`🟢 Recipient ${a} IS online (last seen ${Math.round(i)}s ago)`):console.log(`🔴 Recipient ${a} OFFLINE (last seen ${Math.round(i)}s ago)`),j}catch(a){return console.error("❌ Error checking recipient online status:",a),!1}},j=async(a,b,c)=>{try{if(!a||!c)return void console.error(`❌ markYourMessagesAsDelivered: Missing required params`,{chatId:a,currentUserEmail:c,recipientEmail:b});if(console.log(`🔍 [Chat: ${a}] Attempting to mark YOUR messages as DELIVERED`),console.log(`   Current User: ${c}, Recipient: ${b}`),!await h(a,c,b))return void console.error(`❌ [Chat: ${a}] Chat validation failed - ABORTING message status update`);if(!await i(b)&&b)return void console.log(`⏳ [Chat: ${a}] NOT marking YOUR messages as DELIVERED - recipient is offline`);let g=(0,d.collection)(e.db,"chats",a,"messages"),j=(0,d.query)(g,(0,d.where)("user","==",c),(0,d.where)("status","==",f.MESSAGE_STATUS.SENT)),k=await (0,d.getDocs)(j);if(k.empty)return void console.log(`✓ [Chat: ${a}] No SENT messages from you to mark as DELIVERED`);console.log(`📋 [Chat: ${a}] Found ${k.docs.length} messages to update`);let l=(0,d.writeBatch)(e.db),m=0;if(k.docs.forEach(b=>{if(!((a,b)=>{let c=a.ref.path,d=c.split("/");if(d.length>=4&&"chats"===d[0]&&"messages"===d[2]){let c=d[1];return c===b||(console.error(`❌ Message ${a.id} belongs to chat ${c}, not ${b}`),!1)}return console.error(`❌ Invalid message path: ${c}`),!1})(b,a))return void console.error(`⚠️ [Chat: ${a}] Skipping message ${b.id} - path mismatch`);let c=b.data();console.log(`  📝 [Chat: ${a}] Updating message ${b.id} from ${c.user}`),l.update(b.ref,{status:f.MESSAGE_STATUS.DELIVERED,deliveredAt:(0,d.serverTimestamp)()}),m++}),0===m)return void console.log(`⚠️ [Chat: ${a}] No valid messages to update after verification`);await l.commit(),console.log(`✅ [Chat: ${a}] Marked ${m} of YOUR messages as DELIVERED`)}catch(b){console.error(`❌ [Chat: ${a}] Error marking YOUR messages as delivered:`,b)}};a.s(["markYourMessagesAsDelivered",0,j]),c()}catch(a){c(a)}},!1),83771,a=>a.a(async(b,c)=>{try{var d=a.i(27669),e=a.i(45542),f=a.i(27390),g=a.i(39196),h=a.i(91942),i=b([f,g,h]);[f,g,h]=i.then?(await i)():i,a.s(["useMessageStatus",0,(a,b,c,i=!1)=>{let[j]=(0,e.useAuthState)(f.auth);(0,d.useRef)(null);let k=!!(a&&j&&b&&c);(0,d.useEffect)(()=>{if(!k)return void console.log(`⏳ [Chat: ${a}] Waiting for data before setting up online listener...`);if(i)return void console.log(`⏭️ [Chat: ${a}] Skipping YOUR DELIVERED update - self-chat`);if(c===b)return void console.warn(`⚠️ [Chat: ${a}] Skipping online listener - userEmail matches recipientEmail`);console.log(`👁️ [Chat: ${a}] Listening for ${b} to come online...`),console.log(`   Your messages from: ${c}`);let d=(0,g.collection)(f.db,"users"),e=(0,g.query)(d,(0,g.where)("email","==",b)),j=(0,g.onSnapshot)(e,async d=>{if(a!=a)return void console.log(`⚠️ [OLD Chat: ${a}] Ignoring stale listener callback - current chat is ${a}`);if(d.empty)return void console.log(`❓ [Chat: ${a}] Recipient ${b} not found in users collection`);let e=d.docs[0].data(),f=e.lastSeen?.toDate?.()||new Date(e.lastSeen),g=(new Date-f)/1e3;g<30?(console.log(`🟢 [Chat: ${a}] RECIPIENT CAME ONLINE! (${Math.round(g)}s ago)`),console.log(`   Updating YOUR messages from ${c} to DELIVERED`),await (0,h.markYourMessagesAsDelivered)(a,b,c)):console.log(`🔴 [Chat: ${a}] Recipient offline (${Math.round(g)}s ago)`)},b=>{console.error(`❌ [Chat: ${a}] Error listening to recipient status:`,b)});return()=>{console.log(`🔌 [Chat: ${a}] Stopping recipient status listener for ${b}`),j()}},[a,b,c,i,k])}]),c()}catch(a){c(a)}},!1),879,a=>{"use strict";var b=a.i(60054);a.s(["IconButton",()=>b.default])},3064,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6z"}),"AttachFile")},16937,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu")},92402,(a,b,c)=>{b.exports=a.x("timeago-react",()=>require("timeago-react"))},55854,a=>{"use strict";var b=a.i(8171);a.i(27669);var c=a.i(46283),d=a.i(44184),e=a.i(879),f=a.i(3064),g=a.i(29091),h=a.i(16937),i=a.i(92402);let j=c.default.div`
  position: sticky;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
  justify-content: space-between;
`,k=c.default.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 0;
`,l=(0,c.default)(d.Avatar)`
  margin: 5px;
  margin-right: 15px;
  flex-shrink: 0;
`,m=c.default.div`
  margin-left: 15px;
  flex: 1;
  min-width: 0;

  > h3 {
    margin: 0;
    margin-bottom: 3px;
    color: ${a=>a.darkMode?"#e0e0e0":"#000"};
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    font-size: 13px;
    color: ${a=>a.darkMode?"#888":"gray"};
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media (max-width: 480px) {
    margin-left: 10px;

    > h3 {
      font-size: 15px;
    }

    > p {
      font-size: 12px;
    }
  }
`,n=c.default.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;a.s(["default",0,function({recipient:a,recipientEmail:c,recipientSnapshot:d,isSelfChat:o,onAttachFile:p,onMoreClick:q,darkMode:r,isMobile:s,onToggleSidebar:t}){return(0,b.jsxs)(j,{darkMode:r,children:[(0,b.jsxs)(k,{children:[s&&(0,b.jsx)(e.IconButton,{onClick:t,style:{marginRight:"10px"},children:(0,b.jsx)(h.default,{})}),a?(0,b.jsx)(l,{src:d?.docs?.[0]?.data()?.photoURL}):(0,b.jsx)(l,{children:c?.[0]?.toUpperCase()}),(0,b.jsxs)(m,{darkMode:r,children:[(0,b.jsx)("h3",{children:o?`${c} (You)`:c}),(0,b.jsx)("p",{children:o?"Message yourself":a?.lastSeen?.toDate?(0,b.jsxs)(b.Fragment,{children:["Last active: ",(0,b.jsx)(i.default,{datetime:a.lastSeen.toDate()})]}):"Loading..."})]})]}),(0,b.jsxs)(n,{children:[(0,b.jsx)(e.IconButton,{onClick:p,children:(0,b.jsx)(f.default,{})}),(0,b.jsx)(e.IconButton,{onClick:q,children:(0,b.jsx)(g.default,{})})]})]})}])},60607,(a,b,c)=>{b.exports=a.x("moment",()=>require("moment"))},97942,a=>{"use strict";var b=a.i(98597);a.s(["Menu",()=>b.default])},17701,a=>{"use strict";var b=a.i(58400);a.s(["MenuItem",()=>b.default])},22111,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(49927),h=a.i(13368),i=a.i(67309),j=a.i(38262),k=a.i(8171);let l=["className"],m=(0,g.default)("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,"flex-start"===c.alignItems&&b.alignItemsFlexStart]}})(({theme:a,ownerState:b})=>(0,c.default)({minWidth:56,color:(a.vars||a).palette.action.active,flexShrink:0,display:"inline-flex"},"flex-start"===b.alignItems&&{marginTop:8})),n=d.forwardRef(function(a,g){let n=(0,h.useDefaultProps)({props:a,name:"MuiListItemIcon"}),{className:o}=n,p=(0,b.default)(n,l),q=d.useContext(j.default),r=(0,c.default)({},n,{alignItems:q.alignItems}),s=(a=>{let{alignItems:b,classes:c}=a;return(0,f.default)({root:["root","flex-start"===b&&"alignItemsFlexStart"]},i.getListItemIconUtilityClass,c)})(r);return(0,k.jsx)(m,(0,c.default)({className:(0,e.default)(s.root,o),ownerState:r,ref:g},p))});a.s(["ListItemIcon",0,n],22111)},2828,a=>{"use strict";var b=a.i(32074);a.s(["ListItemText",()=>b.default])},29866,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M5 20h14v-2H5zM19 9h-4V3H9v6H5l7 7z"}),"Download")},9344,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm7 7V3.5L18.5 9z"}),"InsertDriveFile")},89461,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"}),"Image")},54406,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M4 6H2v14c0 1.1.9 2 2 2h14v-2H4zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-8 12.5v-9l6 4.5z"}),"VideoLibrary")},19069,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M12 3v9.28c-.47-.17-.97-.28-1.5-.28C8.01 12 6 14.01 6 16.5S8.01 21 10.5 21c2.31 0 4.2-1.75 4.45-4H15V6h4V3z"}),"Audiotrack")},10102,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete")},15116,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11"}),"Reply")},30681,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(45542),f=a.i(27390),g=a.i(46283),h=a.i(60607),i=a.i(879),j=a.i(97942),k=a.i(17701),l=a.i(22111),m=a.i(2828),n=a.i(29866),o=a.i(9344),p=a.i(89461),q=a.i(54406),r=a.i(19069),s=a.i(29091),t=a.i(10102),u=a.i(15116),v=a.i(27669),w=a.i(71197),x=a.i(67655),y=a.i(59747),z=b([f]);[f]=z.then?(await z)():z;let A=g.default.div`
  margin: 5px 0;
  
  &:hover {
    ${a=>`
      ${F} {
        opacity: 1;
      }
    `}
  }
`,B=g.default.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
  width: fit-content;
  max-width: 65%;
  padding: 10px 15px;
  padding-top: 15px;
  border-radius: 8px;
  margin: 10px;
  min-width: 60px;
  padding-bottom: 8px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`,C=(0,g.default)(B)`
  margin-left: auto;
  background-color: ${a=>a.darkMode?"#056162":"#dcf8c6"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  border-radius: 8px 8px 0 8px;
`,D=(0,g.default)(B)`
  background-color: ${a=>a.darkMode?"#1f2c33":"whitesmoke"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  text-align: left;
  border-radius: 8px 8px 8px 0;
  margin-left: 10px;
  margin-right: auto;
`,E=g.default.div`
  flex: 1;
  min-width: 0;
`,F=g.default.div`
  opacity: 0;
  transition: opacity 0.2s;
  display: flex;
  align-items: flex-start;
`,G=(0,g.default)(i.IconButton)`
  opacity: 0.6 !important;
  padding: 4px !important;
  color: ${a=>a.darkMode?"#e0e0e0":"#666"} !important;
  
  &:hover {
    opacity: 1 !important;
    background-color: ${a=>a.darkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"} !important;
  }
`,H=g.default.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 4px;
  padding-top: 2px;
`,I=g.default.div`
  display: flex;
  margin-bottom: 8px;
  padding: 8px;
  background-color: ${a=>a.darkMode?"rgba(0,0,0,0.2)":"rgba(0,0,0,0.05)"};
  border-radius: 6px;
`,J=g.default.div`
  width: 4px;
  background-color: ${a=>a.isSender?"#00a884":"#1976d2"};
  border-radius: 2px;
  margin-right: 8px;
  flex-shrink: 0;
`,K=g.default.div`
  flex: 1;
  overflow: hidden;
`,L=g.default.div`
  font-size: 12px;
  font-weight: 600;
  color: ${a=>a.darkMode?"#64b5f6":"#1976d2"};
  margin-bottom: 2px;
`,M=g.default.div`
  font-size: 13px;
  color: ${a=>a.darkMode?"#aaa":"#666"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,N=g.default.p`
  margin: 0;
  margin-bottom: 5px;
  font-size: 14px;
  line-height: 1.4;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  white-space: pre-wrap;
`,O=g.default.span`
  color: ${a=>a.darkMode?"#8696a0":"gray"};
  font-size: 11px;
  margin-left: 8px;
`,P=g.default.div`
  margin-bottom: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Q=g.default.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${a=>a.darkMode?"#1a1a1a":"#f5f5f5"};
`,R=g.default.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"#e0e0e0"};
`,S=g.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"#f0f0f0"};
  
  p {
    margin-top: 10px;
    color: ${a=>a.darkMode?"#888":"#666"};
    font-size: 14px;
  }
`,T=g.default.img`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, opacity 0.2s;

  &:hover {
    opacity: 0.95;
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.98);
  }
`,U=g.default.div`
  padding: 8px;
  font-size: 12px;
  color: ${a=>a.darkMode?"#8696a0":"#666"};
  background-color: ${a=>a.darkMode?"rgba(0,0,0,0.3)":"rgba(255,255,255,0.9)"};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,V=g.default.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
`,W=g.default.video`
  width: 100%;
  max-width: 100%;
  max-height: 400px;
  border-radius: 8px;
  background-color: #000;
`,X=g.default.div`
  display: flex;
  align-items: center;
  padding: 6px 8px;
  font-size: 12px;
  color: ${a=>a.darkMode?"#8696a0":"#666"};
  background-color: ${a=>a.darkMode?"#2a3942":"#f0f0f0"};
  border-radius: 6px;
  margin-top: 6px;
`,Y=g.default.div`
  padding: 12px;
  background-color: ${a=>a.darkMode?"#2a3942":"#f0f0f0"};
  border-radius: 8px;
  min-width: 280px;
`,Z=g.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
`,$=g.default.div`
  flex: 1;
  overflow: hidden;
`,_=g.default.div`
  font-size: 14px;
  font-weight: 500;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,aa=g.default.div`
  font-size: 12px;
  color: ${a=>a.darkMode?"#8696a0":"gray"};
  margin-top: 2px;
`,ab=g.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background-color: ${a=>a.darkMode?"#2a3942":"#f0f0f0"};
  border-radius: 8px;
  min-width: 220px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${a=>a.darkMode?"#3a4952":"#e8e8e8"};
  }
`,ac=g.default.div`
  flex: 1;
  overflow: hidden;
`,ad=g.default.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ae=g.default.p`
  margin: 0;
  font-size: 12px;
  color: ${a=>a.darkMode?"#8696a0":"gray"};
  margin-top: 4px;
`,af=(0,g.default)(i.IconButton)`
  display: flex !important;
  align-items: center !important;
  padding: 8px 14px !important;
  background-color: ${a=>a.darkMode?"#2a3942":"#e3f2fd"} !important;
  color: ${a=>a.darkMode?"#64b5f6":"#1976d2"} !important;
  border-radius: 6px !important;
  font-size: 12px !important;
  align-self: flex-start !important;
  transition: all 0.2s !important;

  &:hover {
    background-color: ${a=>a.darkMode?"#3a4952":"#bbdefb"} !important;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`,ag=g.default.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  padding: 12px;
  background-color: ${a=>a.darkMode?"#2a3942":"#f0f0f0"};
  border-radius: 8px;
  min-width: 280px;
`,ah=g.default.span`
  font-size: 13px;
  font-weight: 500;
  color: ${a=>a.darkMode?"#64b5f6":"#1976d2"};
  display: flex;
  align-items: center;
  gap: 6px;
`,ai=g.default.audio`
  width: 100%;
  height: 40px;
  outline: none;
  border-radius: 6px;
  
  &::-webkit-media-controls-panel {
    background-color: ${a=>a.darkMode?"#1f2c33":"white"};
    border-radius: 6px;
  }

  &::-webkit-media-controls-play-button,
  &::-webkit-media-controls-mute-button {
    filter: ${a=>a.darkMode?"invert(1)":"none"};
  }
`,aj=g.default.span`
  font-size: 11px;
  color: ${a=>a.darkMode?"#8696a0":"gray"};
  text-align: right;
`;a.s(["default",0,function({user:a,message:b,messageId:c,onDelete:g,onReply:i}){var z,B,ak;let[al]=(0,e.useAuthState)(f.auth),[am,an]=(0,v.useState)(!1),[ao,ap]=(0,v.useState)(!1),[aq,ar]=(0,v.useState)(null),{darkMode:as}=(0,v.useContext)(w.DarkModeContext)||{darkMode:!1},at=a===al?.email?C:D,au=a===al?.email,av=()=>{ar(null)},aw=async(a,b)=>{try{let c=a;a.includes("cloudinary.com")&&(c=a.replace("/upload/","/upload/fl_attachment/"));let d=await fetch(c),e=await d.blob(),f=window.URL.createObjectURL(e),g=document.createElement("a");g.href=f,g.download=b||"download",document.body.appendChild(g),g.click(),document.body.removeChild(g),setTimeout(()=>window.URL.revokeObjectURL(f),100)}catch(b){console.error("Download failed:",b),window.open(a,"_blank")}},ax=a=>{if(!a||0===a)return"Unknown size";let b=Math.floor(Math.log(a)/Math.log(1024));return Math.round(a/Math.pow(1024,b)*100)/100+" "+["Bytes","KB","MB","GB"][b]},ay=(z=b.fileType)?z.includes("pdf")?{icon:o.default,color:"#d32f2f"}:z.includes("word")||z.includes("document")?{icon:o.default,color:"#2196f3"}:z.includes("sheet")||z.includes("excel")?{icon:o.default,color:"#4caf50"}:z.includes("zip")||z.includes("rar")?{icon:o.default,color:"#ff9800"}:{icon:o.default,color:as?"#64b5f6":"#1976d2"}:{icon:o.default,color:as?"#64b5f6":"#1976d2"},az=ay.icon,aA=(()=>{if(!b.timestamp)return!1;let a=(0,h.default)(b.timestamp);return 1>(0,h.default)().diff(a,"hours")})();return(0,d.jsx)(A,{children:(0,d.jsxs)(at,{darkMode:as,isSender:au,children:[(0,d.jsxs)(E,{children:[b.replyTo&&(0,d.jsxs)(I,{darkMode:as,children:[(0,d.jsx)(J,{isSender:au}),(0,d.jsxs)(K,{children:[(0,d.jsx)(L,{darkMode:as,children:b.replyTo.user===al?.email?"You":b.replyTo.user}),(0,d.jsx)(M,{darkMode:as,children:b.replyTo.message||b.replyTo.fileName||"🎤 Voice message"})]})]}),b.fileURL&&(0,d.jsxs)(P,{children:[b.fileType?.startsWith("image/")?(0,d.jsxs)(Q,{children:[!am&&!ao&&(0,d.jsx)(R,{darkMode:as,children:(0,d.jsx)(p.default,{style:{fontSize:48,color:as?"#555":"#ccc"}})}),ao?(0,d.jsxs)(S,{darkMode:as,children:[(0,d.jsx)(p.default,{style:{fontSize:48,color:as?"#666":"#999"}}),(0,d.jsx)("p",{children:"Failed to load image"})]}):(0,d.jsx)(T,{src:(B=b.fileURL)&&B.includes("cloudinary.com")?B.replace("/upload/","/upload/w_600,h_600,c_limit,f_auto,q_auto/"):B,alt:b.fileName||"Image",onClick:()=>window.open(b.fileURL,"_blank"),onLoad:()=>an(!0),onError:()=>ap(!0),loading:"lazy",style:{display:am?"block":"none"}}),b.fileName&&(0,d.jsx)(U,{darkMode:as,children:b.fileName})]}):b.fileType?.startsWith("video/")?(0,d.jsxs)(V,{children:[(0,d.jsxs)(W,{controls:!0,preload:"metadata",poster:(ak=b.fileURL)&&ak.includes("cloudinary.com")?ak.replace("/upload/","/upload/w_600,h_400,c_fill,f_jpg,q_auto/").replace(/\.[^.]+$/,".jpg"):null,children:[(0,d.jsx)("source",{src:b.fileURL,type:b.fileType}),"Your browser does not support the video tag."]}),b.fileName&&(0,d.jsxs)(X,{darkMode:as,children:[(0,d.jsx)(q.default,{style:{fontSize:16,marginRight:4}}),b.fileName]})]}):b.fileType?.startsWith("audio/")&&!b.voiceURL?(0,d.jsxs)(Y,{darkMode:as,children:[(0,d.jsxs)(Z,{children:[(0,d.jsx)(r.default,{style:{fontSize:32,color:as?"#64b5f6":"#1976d2"}}),(0,d.jsxs)($,{children:[(0,d.jsx)(_,{darkMode:as,children:b.fileName||"Audio File"}),(0,d.jsx)(aa,{darkMode:as,children:ax(b.fileSize)})]})]}),(0,d.jsx)(ai,{controls:!0,src:b.fileURL,darkMode:as,children:"Your browser does not support the audio element."})]}):(0,d.jsxs)(ab,{darkMode:as,children:[(0,d.jsx)(az,{style:{fontSize:40,color:ay.color}}),(0,d.jsxs)(ac,{children:[(0,d.jsx)(ad,{darkMode:as,children:b.fileName||"File"}),(0,d.jsx)(ae,{darkMode:as,children:ax(b.fileSize)})]})]}),(0,d.jsxs)(af,{onClick:()=>aw(b.fileURL,b.fileName),size:"small",darkMode:as,children:[(0,d.jsx)(n.default,{fontSize:"small"}),(0,d.jsx)("span",{style:{marginLeft:5,fontSize:12},children:"Download"})]})]}),b.voiceURL&&(0,d.jsxs)(ag,{darkMode:as,children:[(0,d.jsx)(ah,{darkMode:as,children:"🎤 Voice Message"}),(0,d.jsx)(ai,{controls:!0,src:b.voiceURL,darkMode:as,children:"Your browser does not support the audio element."}),b.voiceDuration&&(0,d.jsxs)(aj,{darkMode:as,children:["Duration: ",(a=>{if(!a)return"0:00";let b=Math.floor(a/60);return`${b}:${(a%60).toString().padStart(2,"0")}`})(b.voiceDuration)]})]}),b.message&&b.message.trim()&&(0,d.jsx)(N,{darkMode:as,children:b.message}),(0,d.jsxs)(H,{children:[(0,d.jsx)(O,{darkMode:as,children:b.timestamp?(0,h.default)(b.timestamp).format("LT"):"..."}),au&&(0,d.jsx)(x.default,{status:b.status||y.MESSAGE_STATUS.SENT,darkMode:as})]})]}),(0,d.jsx)(F,{children:(0,d.jsx)(G,{onClick:a=>{a.stopPropagation(),ar(a.currentTarget)},size:"small",darkMode:as,isSender:au,children:(0,d.jsx)(s.default,{fontSize:"small"})})}),(0,d.jsxs)(j.Menu,{anchorEl:aq,open:!!aq,onClose:av,PaperProps:{style:{backgroundColor:as?"#2a2a2a":"white",color:as?"#e0e0e0":"black"}},children:[(0,d.jsxs)(k.MenuItem,{onClick:()=>{av(),i&&i({id:c,user:a,message:b.message,timestamp:b.timestamp,fileURL:b.fileURL,fileName:b.fileName,fileType:b.fileType,voiceURL:b.voiceURL,voiceDuration:b.voiceDuration})},children:[(0,d.jsx)(l.ListItemIcon,{children:(0,d.jsx)(u.default,{fontSize:"small",style:{color:as?"#64b5f6":"#1976d2"}})}),(0,d.jsx)(m.ListItemText,{style:{color:as?"#e0e0e0":"black"},children:"Reply"})]}),aA&&au&&(0,d.jsxs)(k.MenuItem,{onClick:()=>{av(),g&&c&&g(c)},children:[(0,d.jsx)(l.ListItemIcon,{children:(0,d.jsx)(t.default,{fontSize:"small",style:{color:"#d32f2f"}})}),(0,d.jsx)(m.ListItemText,{style:{color:as?"#e0e0e0":"black"},children:"Delete"})]})]})]})})}]),c()}catch(a){c(a)}},!1),58375,a=>{"use strict";let b;var c=a.i(46283),d=a.i(86375),e=a.i(62897),f=a.i(27669),g=a.i(95558),h=a.i(56874),i=a.i(9110),j=a.i(64776),k=a.i(49927),l=a.i(13368),m=a.i(83448),n=a.i(25355);function o(){if(b)return b;let a=document.createElement("div"),c=document.createElement("div");return c.style.width="10px",c.style.height="1px",a.appendChild(c),a.dir="rtl",a.style.fontSize="14px",a.style.width="4px",a.style.height="1px",a.style.position="absolute",a.style.top="-1000px",a.style.overflow="scroll",document.body.appendChild(a),b="reverse",a.scrollLeft>0?b="default":(a.scrollLeft=1,0===a.scrollLeft&&(b="negative")),document.body.removeChild(a),b}function p(a){return(1+Math.sin(Math.PI*a-Math.PI/2))/2}var q=a.i(12718),q=q,r=a.i(9228),r=r,s=a.i(8171);let t=["onChange"],u={width:99,height:99,position:"absolute",top:-9999,overflow:"scroll"};var v=a.i(23502);let w=(0,v.default)((0,s.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft"),x=(0,v.default)((0,s.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight");var y=a.i(66490),z=a.i(65639),A=a.i(30913);function B(a){return(0,A.default)("MuiTabScrollButton",a)}let C=(0,z.default)("MuiTabScrollButton",["root","vertical","horizontal","disabled"]),D=["className","slots","slotProps","direction","orientation","disabled"],E=(0,k.default)(y.default,{name:"MuiTabScrollButton",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,c.orientation&&b[c.orientation]]}})(({ownerState:a})=>(0,e.default)({width:40,flexShrink:0,opacity:.8,[`&.${C.disabled}`]:{opacity:0}},"vertical"===a.orientation&&{width:"100%",height:40,"& svg":{transform:`rotate(${a.isRtl?-90:90}deg)`}})),F=f.forwardRef(function(a,b){var c,f;let k=(0,l.useDefaultProps)({props:a,name:"MuiTabScrollButton"}),{className:m,slots:n={},slotProps:o={},direction:p}=k,q=(0,d.default)(k,D),r=(0,i.useRtl)(),t=(0,e.default)({isRtl:r},k),u=(a=>{let{classes:b,orientation:c,disabled:d}=a;return(0,h.default)({root:["root",c,d&&"disabled"]},B,b)})(t),v=null!=(c=n.StartScrollButtonIcon)?c:w,y=null!=(f=n.EndScrollButtonIcon)?f:x,z=(0,j.default)({elementType:v,externalSlotProps:o.startScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:t}),A=(0,j.default)({elementType:y,externalSlotProps:o.endScrollButtonIcon,additionalProps:{fontSize:"small"},ownerState:t});return(0,s.jsx)(E,(0,e.default)({component:"div",className:(0,g.default)(u.root,m),ref:b,role:null,ownerState:t,tabIndex:null},q,{children:"left"===p?(0,s.jsx)(v,(0,e.default)({},z)):(0,s.jsx)(y,(0,e.default)({},A))}))});var G=a.i(79023);function H(a){return(0,A.default)("MuiTabs",a)}let I=(0,z.default)("MuiTabs",["root","vertical","flexContainer","flexContainerVertical","centered","scroller","fixed","scrollableX","scrollableY","hideScrollbar","scrollButtons","scrollButtonsHideMobile","indicator"]);var J=a.i(74556),K=q;let L=["aria-label","aria-labelledby","action","centered","children","className","component","allowScrollButtonsMobile","indicatorColor","onChange","orientation","ScrollButtonComponent","scrollButtons","selectionFollowsFocus","slots","slotProps","TabIndicatorProps","TabScrollButtonProps","textColor","value","variant","visibleScrollbar"],M=(a,b)=>a===b?a.firstChild:b&&b.nextElementSibling?b.nextElementSibling:a.firstChild,N=(a,b)=>a===b?a.lastChild:b&&b.previousElementSibling?b.previousElementSibling:a.lastChild,O=(a,b,c)=>{let d=!1,e=c(a,b);for(;e;){if(e===a.firstChild){if(d)return;d=!0}let b=e.disabled||"true"===e.getAttribute("aria-disabled");if(e.hasAttribute("tabindex")&&!b)return void e.focus();e=c(a,e)}},P=(0,k.default)("div",{name:"MuiTabs",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[{[`& .${I.scrollButtons}`]:b.scrollButtons},{[`& .${I.scrollButtons}`]:c.scrollButtonsHideMobile&&b.scrollButtonsHideMobile},b.root,c.vertical&&b.vertical]}})(({ownerState:a,theme:b})=>(0,e.default)({overflow:"hidden",minHeight:48,WebkitOverflowScrolling:"touch",display:"flex"},a.vertical&&{flexDirection:"column"},a.scrollButtonsHideMobile&&{[`& .${I.scrollButtons}`]:{[b.breakpoints.down("sm")]:{display:"none"}}})),Q=(0,k.default)("div",{name:"MuiTabs",slot:"Scroller",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.scroller,c.fixed&&b.fixed,c.hideScrollbar&&b.hideScrollbar,c.scrollableX&&b.scrollableX,c.scrollableY&&b.scrollableY]}})(({ownerState:a})=>(0,e.default)({position:"relative",display:"inline-block",flex:"1 1 auto",whiteSpace:"nowrap"},a.fixed&&{overflowX:"hidden",width:"100%"},a.hideScrollbar&&{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},a.scrollableX&&{overflowX:"auto",overflowY:"hidden"},a.scrollableY&&{overflowY:"auto",overflowX:"hidden"})),R=(0,k.default)("div",{name:"MuiTabs",slot:"FlexContainer",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.flexContainer,c.vertical&&b.flexContainerVertical,c.centered&&b.centered]}})(({ownerState:a})=>(0,e.default)({display:"flex"},a.vertical&&{flexDirection:"column"},a.centered&&{justifyContent:"center"})),S=(0,k.default)("span",{name:"MuiTabs",slot:"Indicator",overridesResolver:(a,b)=>b.indicator})(({ownerState:a,theme:b})=>(0,e.default)({position:"absolute",height:2,bottom:0,width:"100%",transition:b.transitions.create()},"primary"===a.indicatorColor&&{backgroundColor:(b.vars||b).palette.primary.main},"secondary"===a.indicatorColor&&{backgroundColor:(b.vars||b).palette.secondary.main},a.vertical&&{height:"100%",width:2,right:0})),T=(0,k.default)(function(a){let{onChange:b}=a,c=(0,d.default)(a,t),g=f.useRef(),h=f.useRef(null),i=()=>{g.current=h.current.offsetHeight-h.current.clientHeight};return(0,r.default)(()=>{let a=(0,n.default)(()=>{let a=g.current;i(),a!==g.current&&b(g.current)}),c=(0,q.default)(h.current);return c.addEventListener("resize",a),()=>{a.clear(),c.removeEventListener("resize",a)}},[b]),f.useEffect(()=>{i(),b(g.current)},[b]),(0,s.jsx)("div",(0,e.default)({style:u},c,{ref:h}))})({overflowX:"auto",overflowY:"hidden",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}),U={},V=f.forwardRef(function(a,b){let c,k,q=(0,l.useDefaultProps)({props:a,name:"MuiTabs"}),r=(0,m.default)(),t=(0,i.useRtl)(),{"aria-label":u,"aria-labelledby":v,action:w,centered:x=!1,children:y,className:z,component:A="div",allowScrollButtonsMobile:B=!1,indicatorColor:C="primary",onChange:D,orientation:E="horizontal",ScrollButtonComponent:I=F,scrollButtons:V="auto",selectionFollowsFocus:W,slots:X={},slotProps:Y={},TabIndicatorProps:Z={},TabScrollButtonProps:$={},textColor:_="primary",value:aa,variant:ab="standard",visibleScrollbar:ac=!1}=q,ad=(0,d.default)(q,L),ae="scrollable"===ab,af="vertical"===E,ag=af?"scrollTop":"scrollLeft",ah=af?"top":"left",ai=af?"bottom":"right",aj=af?"clientHeight":"clientWidth",ak=af?"height":"width",al=(0,e.default)({},q,{component:A,allowScrollButtonsMobile:B,indicatorColor:C,orientation:E,vertical:af,scrollButtons:V,textColor:_,variant:ab,visibleScrollbar:ac,fixed:!ae,hideScrollbar:ae&&!ac,scrollableX:ae&&!af,scrollableY:ae&&af,centered:x&&!ae,scrollButtonsHideMobile:!B}),am=(a=>{let{vertical:b,fixed:c,hideScrollbar:d,scrollableX:e,scrollableY:f,centered:g,scrollButtonsHideMobile:i,classes:j}=a;return(0,h.default)({root:["root",b&&"vertical"],scroller:["scroller",c&&"fixed",d&&"hideScrollbar",e&&"scrollableX",f&&"scrollableY"],flexContainer:["flexContainer",b&&"flexContainerVertical",g&&"centered"],indicator:["indicator"],scrollButtons:["scrollButtons",i&&"scrollButtonsHideMobile"],scrollableX:[e&&"scrollableX"],hideScrollbar:[d&&"hideScrollbar"]},H,j)})(al),an=(0,j.default)({elementType:X.StartScrollButtonIcon,externalSlotProps:Y.startScrollButtonIcon,ownerState:al}),ao=(0,j.default)({elementType:X.EndScrollButtonIcon,externalSlotProps:Y.endScrollButtonIcon,ownerState:al}),[ap,aq]=f.useState(!1),[ar,as]=f.useState(U),[at,au]=f.useState(!1),[av,aw]=f.useState(!1),[ax,ay]=f.useState(!1),[az,aA]=f.useState({overflow:"hidden",scrollbarWidth:0}),aB=new Map,aC=f.useRef(null),aD=f.useRef(null),aE=()=>{let a,b,c=aC.current;if(c){let b=c.getBoundingClientRect();a={clientWidth:c.clientWidth,scrollLeft:c.scrollLeft,scrollTop:c.scrollTop,scrollLeftNormalized:function(a,b){let c=a.scrollLeft;if("rtl"!==b)return c;switch(o()){case"negative":return a.scrollWidth-a.clientWidth+c;case"reverse":return a.scrollWidth-a.clientWidth-c;default:return c}}(c,t?"rtl":"ltr"),scrollWidth:c.scrollWidth,top:b.top,bottom:b.bottom,left:b.left,right:b.right}}if(c&&!1!==aa){let a=aD.current.children;if(a.length>0){let c=a[aB.get(aa)];b=c?c.getBoundingClientRect():null}}return{tabsMeta:a,tabMeta:b}},aF=(0,G.default)(()=>{let a,{tabsMeta:b,tabMeta:c}=aE(),d=0;if(af)a="top",c&&b&&(d=c.top-b.top+b.scrollTop);else if(a=t?"right":"left",c&&b){let e=t?b.scrollLeftNormalized+b.clientWidth-b.scrollWidth:b.scrollLeft;d=(t?-1:1)*(c[a]-b[a]+e)}let e={[a]:d,[ak]:c?c[ak]:0};if(isNaN(ar[a])||isNaN(ar[ak]))as(e);else{let b=Math.abs(ar[a]-e[a]),c=Math.abs(ar[ak]-e[ak]);(b>=1||c>=1)&&as(e)}}),aG=(a,{animation:b=!0}={})=>{b?function(a,b,c,d={},e=()=>{}){let{ease:f=p,duration:g=300}=d,h=null,i=b[a],j=!1,k=d=>{if(j)return void e(Error("Animation cancelled"));null===h&&(h=d);let l=Math.min(1,(d-h)/g);(b[a]=f(l)*(c-i)+i,l>=1)?requestAnimationFrame(()=>{e(null)}):requestAnimationFrame(k)};i===c?e(Error("Element already at target position")):requestAnimationFrame(k)}(ag,aC.current,a,{duration:r.transitions.duration.standard}):aC.current[ag]=a},aH=a=>{let b=aC.current[ag];af?b+=a:(b+=a*(t?-1:1),b*=t&&"reverse"===o()?-1:1),aG(b)},aI=()=>{let a=aC.current[aj],b=0,c=Array.from(aD.current.children);for(let d=0;d<c.length;d+=1){let e=c[d];if(b+e[aj]>a){0===d&&(b=a);break}b+=e[aj]}return b},aJ=f.useCallback(a=>{aA({overflow:null,scrollbarWidth:a})},[]),aK=(0,G.default)(a=>{let{tabsMeta:b,tabMeta:c}=aE();c&&b&&(c[ah]<b[ah]?aG(b[ag]+(c[ah]-b[ah]),{animation:a}):c[ai]>b[ai]&&aG(b[ag]+(c[ai]-b[ai]),{animation:a}))}),aL=(0,G.default)(()=>{ae&&!1!==V&&ay(!ax)});f.useEffect(()=>{let a,b,c=(0,n.default)(()=>{aC.current&&aF()}),d=(0,K.default)(aC.current);return d.addEventListener("resize",c),"undefined"!=typeof ResizeObserver&&(a=new ResizeObserver(c),Array.from(aD.current.children).forEach(b=>{a.observe(b)})),"undefined"!=typeof MutationObserver&&(b=new MutationObserver(b=>{b.forEach(b=>{b.removedNodes.forEach(b=>{var c;null==(c=a)||c.unobserve(b)}),b.addedNodes.forEach(b=>{var c;null==(c=a)||c.observe(b)})}),c(),aL()})).observe(aD.current,{childList:!0}),()=>{var e,f;c.clear(),d.removeEventListener("resize",c),null==(e=b)||e.disconnect(),null==(f=a)||f.disconnect()}},[aF,aL]),f.useEffect(()=>{let a=Array.from(aD.current.children),b=a.length;if("undefined"!=typeof IntersectionObserver&&b>0&&ae&&!1!==V){let c=a[0],d=a[b-1],e={root:aC.current,threshold:.99},f=new IntersectionObserver(a=>{au(!a[0].isIntersecting)},e);f.observe(c);let g=new IntersectionObserver(a=>{aw(!a[0].isIntersecting)},e);return g.observe(d),()=>{f.disconnect(),g.disconnect()}}},[ae,V,ax,null==y?void 0:y.length]),f.useEffect(()=>{aq(!0)},[]),f.useEffect(()=>{aF()}),f.useEffect(()=>{aK(U!==ar)},[aK,ar]),f.useImperativeHandle(w,()=>({updateIndicator:aF,updateScrollButtons:aL}),[aF,aL]);let aM=(0,s.jsx)(S,(0,e.default)({},Z,{className:(0,g.default)(am.indicator,Z.className),ownerState:al,style:(0,e.default)({},ar,Z.style)})),aN=0,aO=f.Children.map(y,a=>{if(!f.isValidElement(a))return null;let b=void 0===a.props.value?aN:a.props.value;aB.set(b,aN);let c=b===aa;return aN+=1,f.cloneElement(a,(0,e.default)({fullWidth:"fullWidth"===ab,indicator:c&&!ap&&aM,selected:c,selectionFollowsFocus:W,onChange:D,textColor:_,value:b},1!==aN||!1!==aa||a.props.tabIndex?{}:{tabIndex:0}))}),aP=((c={}).scrollbarSizeListener=ae?(0,s.jsx)(T,{onChange:aJ,className:(0,g.default)(am.scrollableX,am.hideScrollbar)}):null,c.scrollButtonStart=(k=ae&&("auto"===V&&(at||av)||!0===V))?(0,s.jsx)(I,(0,e.default)({slots:{StartScrollButtonIcon:X.StartScrollButtonIcon},slotProps:{startScrollButtonIcon:an},orientation:E,direction:t?"right":"left",onClick:()=>{aH(-1*aI())},disabled:!at},$,{className:(0,g.default)(am.scrollButtons,$.className)})):null,c.scrollButtonEnd=k?(0,s.jsx)(I,(0,e.default)({slots:{EndScrollButtonIcon:X.EndScrollButtonIcon},slotProps:{endScrollButtonIcon:ao},orientation:E,direction:t?"left":"right",onClick:()=>{aH(aI())},disabled:!av},$,{className:(0,g.default)(am.scrollButtons,$.className)})):null,c);return(0,s.jsxs)(P,(0,e.default)({className:(0,g.default)(am.root,z),ownerState:al,ref:b,as:A},ad,{children:[aP.scrollButtonStart,aP.scrollbarSizeListener,(0,s.jsxs)(Q,{className:am.scroller,ownerState:al,style:{overflow:az.overflow,[af?`margin${t?"Left":"Right"}`:"marginBottom"]:ac?void 0:-az.scrollbarWidth},ref:aC,children:[(0,s.jsx)(R,{"aria-label":u,"aria-labelledby":v,"aria-orientation":"vertical"===E?"vertical":null,className:am.flexContainer,ownerState:al,onKeyDown:a=>{let b=aD.current,c=(0,J.default)(b).activeElement;if("tab"!==c.getAttribute("role"))return;let d="horizontal"===E?"ArrowLeft":"ArrowUp",e="horizontal"===E?"ArrowRight":"ArrowDown";switch("horizontal"===E&&t&&(d="ArrowRight",e="ArrowLeft"),a.key){case d:a.preventDefault(),O(b,c,N);break;case e:a.preventDefault(),O(b,c,M);break;case"Home":a.preventDefault(),O(b,null,M);break;case"End":a.preventDefault(),O(b,null,N)}},ref:aD,role:"tablist",children:aO}),ap&&aM]}),aP.scrollButtonEnd]}))}),W=c.default.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
`;c.default.div`
  position: sticky;
  background-color: ${a=>a.darkMode?"#2a2a2a":"white"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  z-index: 100;
  top: 0;
  display: flex;
  padding: 11px;
  height: 80px;
  align-items: center;
  border-bottom: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
  flex-shrink: 0;
`,c.default.div`
  margin-left: 15px;
  flex: 1;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};

  > h3 {
    margin-bottom: 3px;
    color: ${a=>a.darkMode?"#e0e0e0":"black"};
  }
  > p {
    font-size: 14px;
    color: ${a=>a.darkMode?"#aaa":"gray"};
  }
`,c.default.div``;let X=c.default.div`
  padding: 30px;
  background-color: ${a=>a.darkMode?"#0d1117":"#e5ded8"};
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;c.default.form`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"white"};
  gap: 10px;
  flex-shrink: 0;
  border-top: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
`,c.default.input`
  flex: 1;
  flex-shrink: 1;
  outline: 0;
  border: none;
  border-radius: 10px;
  background-color: ${a=>a.darkMode?"#1e1e1e":"whitesmoke"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  padding: 15px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 16px;

  ::placeholder {
    color: ${a=>a.darkMode?"#888":"#999"};
  }
`;let Y=c.default.div`
  margin-bottom: 50px;
`,Z=c.default.div`
  text-align: center;
  padding: 20px;
  color: ${a=>a.darkMode?"#f8d7da":"#721c24"};
  background-color: ${a=>a.darkMode?"#5a1f1f":"#f8d7da"};
  border: 1px solid ${a=>a.darkMode?"#721c24":"#f5c6cb"};
  border-radius: 4px;
  margin: 20px;
`,$=c.default.div`
  text-align: center;
  padding: 20px;
  color: ${a=>a.darkMode?"#ffeeba":"#856404"};
  background-color: ${a=>a.darkMode?"#664d03":"#fff3cd"};
  border: 1px solid ${a=>a.darkMode?"#856404":"#ffeeba"};
  border-radius: 4px;
  margin: 20px;
`,_=c.default.div`
  color: ${a=>a.darkMode?"#f8d7da":"#721c24"};
  background-color: ${a=>a.darkMode?"#5a1f1f":"#f8d7da"};
  border: 1px solid ${a=>a.darkMode?"#721c24":"#f5c6cb"};
  padding: 10px;
  margin: 10px;
  border-radius: 4px;
  text-align: center;
`;c.default.button`
  background-color: ${a=>a.darkMode?"#d32f2f":"#f44336"} !important;
  color: white !important;
  padding: 10px 20px !important;
  border: none !important;
  border-radius: 8px !important;
  cursor: pointer !important;
  font-weight: 600 !important;
  display: block !important;
  width: auto !important;
  height: auto !important;
  visibility: visible !important;
  opacity: ${a=>a.disabled?"0.5":"1"} !important;
  
  &:hover {
    background-color: ${a=>a.darkMode?"#b71c1c":"#d32f2f"} !important;
  }

  &:disabled {
    cursor: not-allowed !important;
  }
`;let aa=c.default.div`
  text-align: center;
  margin-bottom: 20px;
`,ab=c.default.div`
  margin-bottom: 20px;
  padding: 10px;
  background-color: ${a=>a.darkMode?"#1e1e1e":"#f5f5f5"};
  border-radius: 8px;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};

  p {
    margin: 5px 0;
  }
`,ac=c.default.input`
  width: 100%;
  outline: 0;
  border: 1px solid ${a=>a.darkMode?"#444":"#ddd"};
  border-radius: 8px;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  padding: 12px;
  font-size: 16px;
  margin-bottom: 10px;

  ::placeholder {
    color: ${a=>a.darkMode?"#888":"#999"};
  }
`,ad=c.default.div`
  text-align: center;
  margin-top: 20px;

  p {
    margin-top: 10px;
    font-weight: bold;
  }
`,ae=c.default.div`
  text-align: center;
  padding: 20px;
`,af=c.default.div`
  color: ${a=>a.darkMode?"#e0e0e0":"black"};

  h2 {
    margin-bottom: 15px;
    color: ${a=>a.darkMode?"#e0e0e0":"black"};
  }

  p {
    margin: 10px 0;
    font-size: 16px;
    color: ${a=>a.darkMode?"#aaa":"gray"};
  }
`;c.default.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px;
  background-color: ${a=>a.darkMode?"#1e1e1e":"#ffebee"};
  border-radius: 10px;
  color: ${a=>a.darkMode?"#e0e0e0":"#c62828"};
  font-weight: 500;
`,c.default.div`
  width: 12px;
  height: 12px;
  background-color: #f44336;
  border-radius: 50%;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.3;
    }
  }
`;let ag=c.default.div`
  padding: 20px;
  text-align: center;
  color: ${a=>a.darkMode?"#e0e0e0":"black"};

  p {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`,ah=c.default.div`
  width: 350px;
  max-height: 450px;
  display: flex;
  flex-direction: column;
  background-color: ${a=>a.darkMode?"#2a2a2a":"white"};
`,ai=c.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-bottom: 1px solid ${a=>a.darkMode?"#444":"#e0e0e0"};

  h3 {
    margin: 0;
    font-size: 18px;
    color: ${a=>a.darkMode?"#e0e0e0":"black"};
  }
`,aj=c.default.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  gap: 8px;
  border-bottom: 1px solid ${a=>a.darkMode?"#444":"#e0e0e0"};
`,ak=c.default.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: ${a=>a.darkMode?"#1e1e1e":"#f5f5f5"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;

  ::placeholder {
    color: ${a=>a.darkMode?"#888":"#999"};
  }
`,al=(0,c.default)(V)`
  border-bottom: 1px solid ${a=>a.darkMode?"#444":"#e0e0e0"};
  min-height: 48px;

  .MuiTabs-flexContainer {
    justify-content: space-around;
  }
`,am=c.default.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 4px;
  padding: 12px;
  overflow-y: auto;
  max-height: 280px;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${a=>a.darkMode?"#1e1e1e":"#f1f1f1"};
  }

  &::-webkit-scrollbar-thumb {
    background: ${a=>a.darkMode?"#555":"#888"};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${a=>a.darkMode?"#666":"#555"};
  }
`,an=c.default.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${a=>a.darkMode?"#3a3a3a":"#f0f0f0"};
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.1);
  }
`,ao=c.default.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 40px 20px;
  color: ${a=>a.darkMode?"#888":"#999"};
  font-size: 14px;
`,ap=c.default.div`
  display: flex;
  padding: 12px 16px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"#f5f5f5"};
  border-top: 1px solid ${a=>a.darkMode?"#333":"#e0e0e0"};
  gap: 12px;
  align-items: center;
`,aq=c.default.div`
  width: 4px;
  height: 50px;
  background-color: #00a884;
  border-radius: 2px;
  flex-shrink: 0;
`,ar=c.default.div`
  flex: 1;
  overflow: hidden;
`,as=c.default.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
  
  span {
    font-size: 13px;
    font-weight: 600;
    color: #00a884;
  }
`,at=c.default.div`
  font-size: 14px;
  color: ${a=>a.darkMode?"#aaa":"#666"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;a.s(["Container",0,W,"EmojiButton",0,an,"EmojiCategoryTabs",0,al,"EmojiGrid",0,am,"EmojiPickerContainer",0,ah,"EmojiPickerHeader",0,ai,"EmojiSearchContainer",0,aj,"EmojiSearchInput",0,ak,"EndOfMessage",0,Y,"ErrorAlert",0,_,"ErrorMessage",0,$,"FileInfo",0,ab,"FileInput",0,ac,"FilePreview",0,aa,"MessageContainer",0,X,"NoEmojisMessage",0,ao,"OfflineMessage",0,Z,"ProfileContainer",0,ae,"ProfileInfo",0,af,"ReplyBarIndicator",0,aq,"ReplyPreviewBar",0,ap,"ReplyPreviewContent",0,ar,"ReplyPreviewHeader",0,as,"ReplyPreviewText",0,at,"UploadProgress",0,ad,"VoicePreview",0,ag],58375)},87979,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(30681),g=a.i(58375),h=b([f]);[f]=h.then?(await h)():h;let i=(0,e.forwardRef)(({messagesSnapshot:a,messages:b,sendingError:c,onDelete:e,onReply:h,darkMode:i},j)=>(0,d.jsxs)(g.MessageContainer,{darkMode:i,children:[a?a.docs.map(a=>(0,d.jsx)(f.default,{messageId:a.id,user:a.data().user,message:{...a.data(),timestamp:a.data().timestamp?.toMillis()},onDelete:e,onReply:h},a.id)):b?JSON.parse(b).map(a=>(0,d.jsx)(f.default,{messageId:a.id,user:a.user,message:a,onDelete:e,onReply:h},a.id)):null,c&&(0,d.jsx)(g.ErrorAlert,{darkMode:i,children:c}),(0,d.jsx)(g.EndOfMessage,{ref:j})]}));i.displayName="MessageList",a.s(["default",0,i]),c()}catch(a){c(a)}},!1),99461,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5m-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11m3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5"}),"InsertEmoticon")},30576,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3m5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72z"}),"Mic")},78048,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send")},696,(a,b,c)=>{"use strict";var d=a.r(14629);Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var e=d(a.r(28545)),f=a.r(8171);c.default=(0,e.default)((0,f.jsx)("path",{d:"M6 6h12v12H6z"}),"Stop")},80762,a=>{"use strict";var b=a.i(8171);a.i(27669);var c=a.i(46283),d=a.i(879),e=a.i(99461),f=a.i(30576),g=a.i(78048),h=a.i(696);let i=c.default.div`
  display: flex;
  align-items: center;
  padding: 10px;
  position: sticky;
  bottom: 0;
  background-color: ${a=>a.darkMode?"#1e1e1e":"white"};
  border-top: 1px solid ${a=>a.darkMode?"#333":"whitesmoke"};
  z-index: 100;

  @media (max-width: 768px) {
    padding: 8px;
  }
`,j=c.default.form`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media (max-width: 768px) {
    gap: 4px;
  }
`,k=(0,c.default)(d.IconButton)`
  && {
    color: ${a=>a.darkMode?"#b0b0b0":"#919191"};
    padding: 8px;
    
    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${a=>a.darkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
    }
  }
`,l=c.default.input`
  flex: 1;
  outline: 0;
  border: none;
  border-radius: 25px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"whitesmoke"};
  color: ${a=>a.darkMode?"#e0e0e0":"black"};
  padding: 12px 20px;
  font-size: 15px;
  min-width: 0; /* Allow input to shrink below content size */

  &::placeholder {
    color: ${a=>a.darkMode?"#888":"#999"};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`,m=c.default.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,n=(0,c.default)(d.IconButton)`
  && {
    color: ${a=>a.darkMode?"#25D366":"#128C7E"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${a=>a.darkMode?"rgba(37, 211, 102, 0.1)":"rgba(18, 140, 126, 0.1)"};
    }
  }
`,o=(0,c.default)(d.IconButton)`
  && {
    color: ${a=>a.darkMode?"#b0b0b0":"#919191"};
    padding: 8px;

    @media (max-width: 768px) {
      padding: 6px;
    }

    &:hover {
      background-color: ${a=>a.darkMode?"rgba(255,255,255,0.1)":"rgba(0,0,0,0.05)"};
    }
  }
`,p=c.default.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: ${a=>a.darkMode?"#2a2a2a":"#f0f0f0"};
  border-radius: 25px;
  padding: 8px 12px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    gap: 8px;
    padding: 6px 10px;
  }
`,q=c.default.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 768px) {
    gap: 6px;
  }
`,r=c.default.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #f44336;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`,s=c.default.span`
  color: ${a=>a.darkMode?"#e0e0e0":"#333"};
  font-size: 14px;
  font-weight: 500;
  min-width: 40px;

  @media (max-width: 768px) {
    font-size: 13px;
    min-width: 35px;
  }
`,t=(0,c.default)(d.IconButton)`
  && {
    color: #f44336;
    padding: 6px;

    @media (max-width: 768px) {
      padding: 4px;
    }

    &:hover {
      background-color: rgba(244, 67, 54, 0.1);
    }
  }
`;a.s(["default",0,function({input:a,setInput:c,inputRef:d,isRecording:u,recordingTime:v,onSubmit:w,onEmojiClick:x,onStartRecording:y,onStopRecording:z,darkMode:A}){let B;return(0,b.jsx)(i,{darkMode:A,children:(0,b.jsxs)(j,{onSubmit:w,children:[(0,b.jsx)(k,{onClick:x,darkMode:A,children:(0,b.jsx)(e.default,{})}),(0,b.jsx)(l,{ref:d,value:a,onChange:a=>c(a.target.value),placeholder:"Type a message",disabled:u,darkMode:A}),u?(0,b.jsxs)(p,{darkMode:A,children:[(0,b.jsxs)(q,{children:[(0,b.jsx)(r,{}),(0,b.jsx)(s,{children:(B=Math.floor(v/60),`${B}:${(v%60).toString().padStart(2,"0")}`)})]}),(0,b.jsx)(t,{onClick:z,darkMode:A,children:(0,b.jsx)(h.default,{})})]}):(0,b.jsx)(m,{children:a.trim()?(0,b.jsx)(n,{type:"submit",darkMode:A,children:(0,b.jsx)(g.default,{})}):(0,b.jsx)(o,{onClick:y,darkMode:A,children:(0,b.jsx)(f.default,{})})})]})})}])},53838,a=>{"use strict";var b=a.i(8171),c=a.i(27669),d=a.i(83752),d=d,e=a.i(879),f=a.i(86375),g=a.i(62897),h=a.i(95558),i=a.i(56874),j=a.i(66490),k=a.i(38238),l=a.i(13368),m=a.i(49927),n=a.i(65639),o=a.i(30913);function p(a){return(0,o.default)("MuiTab",a)}let q=(0,n.default)("MuiTab",["root","labelIcon","textColorInherit","textColorPrimary","textColorSecondary","selected","disabled","fullWidth","wrapped","iconWrapper"]),r=["className","disabled","disableFocusRipple","fullWidth","icon","iconPosition","indicator","label","onChange","onClick","onFocus","selected","selectionFollowsFocus","textColor","value","wrapped"],s=(0,m.default)(j.default,{name:"MuiTab",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,c.label&&c.icon&&b.labelIcon,b[`textColor${(0,k.default)(c.textColor)}`],c.fullWidth&&b.fullWidth,c.wrapped&&b.wrapped,{[`& .${q.iconWrapper}`]:b.iconWrapper}]}})(({theme:a,ownerState:b})=>(0,g.default)({},a.typography.button,{maxWidth:360,minWidth:90,position:"relative",minHeight:48,flexShrink:0,padding:"12px 16px",overflow:"hidden",whiteSpace:"normal",textAlign:"center"},b.label&&{flexDirection:"top"===b.iconPosition||"bottom"===b.iconPosition?"column":"row"},{lineHeight:1.25},b.icon&&b.label&&{minHeight:72,paddingTop:9,paddingBottom:9,[`& > .${q.iconWrapper}`]:(0,g.default)({},"top"===b.iconPosition&&{marginBottom:6},"bottom"===b.iconPosition&&{marginTop:6},"start"===b.iconPosition&&{marginRight:a.spacing(1)},"end"===b.iconPosition&&{marginLeft:a.spacing(1)})},"inherit"===b.textColor&&{color:"inherit",opacity:.6,[`&.${q.selected}`]:{opacity:1},[`&.${q.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},"primary"===b.textColor&&{color:(a.vars||a).palette.text.secondary,[`&.${q.selected}`]:{color:(a.vars||a).palette.primary.main},[`&.${q.disabled}`]:{color:(a.vars||a).palette.text.disabled}},"secondary"===b.textColor&&{color:(a.vars||a).palette.text.secondary,[`&.${q.selected}`]:{color:(a.vars||a).palette.secondary.main},[`&.${q.disabled}`]:{color:(a.vars||a).palette.text.disabled}},b.fullWidth&&{flexShrink:1,flexGrow:1,flexBasis:0,maxWidth:"none"},b.wrapped&&{fontSize:a.typography.pxToRem(12)})),t=c.forwardRef(function(a,d){let e=(0,l.useDefaultProps)({props:a,name:"MuiTab"}),{className:j,disabled:m=!1,disableFocusRipple:n=!1,fullWidth:o,icon:q,iconPosition:t="top",indicator:u,label:v,onChange:w,onClick:x,onFocus:y,selected:z,selectionFollowsFocus:A,textColor:B="inherit",value:C,wrapped:D=!1}=e,E=(0,f.default)(e,r),F=(0,g.default)({},e,{disabled:m,disableFocusRipple:n,selected:z,icon:!!q,iconPosition:t,label:!!v,fullWidth:o,textColor:B,wrapped:D}),G=(a=>{let{classes:b,textColor:c,fullWidth:d,wrapped:e,icon:f,label:g,selected:h,disabled:j}=a,l={root:["root",f&&g&&"labelIcon",`textColor${(0,k.default)(c)}`,d&&"fullWidth",e&&"wrapped",h&&"selected",j&&"disabled"],iconWrapper:["iconWrapper"]};return(0,i.default)(l,p,b)})(F),H=q&&v&&c.isValidElement(q)?c.cloneElement(q,{className:(0,h.default)(G.iconWrapper,q.props.className)}):q;return(0,b.jsxs)(s,(0,g.default)({focusRipple:!n,className:(0,h.default)(G.root,j),ref:d,role:"tab","aria-selected":z,disabled:m,onClick:a=>{!z&&w&&w(a,C),x&&x(a)},onFocus:a=>{A&&!z&&w&&w(a,C),y&&y(a)},ownerState:F,tabIndex:z?0:-1},E,{children:["top"===t||"start"===t?(0,b.jsxs)(c.Fragment,{children:[H,v]}):(0,b.jsxs)(c.Fragment,{children:[v,H]}),u]}))});var u=a.i(18953),v=a.i(9150),w=a.i(59747),x=a.i(58375);a.s(["default",0,({open:a,anchorEl:c,onClose:f,selectedCategory:g,onCategoryChange:h,searchTerm:i,onSearchChange:j,emojis:k,onEmojiSelect:l,darkMode:m})=>(0,b.jsx)(d.default,{open:a,anchorEl:c,onClose:f,anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"bottom",horizontal:"left"},PaperProps:{style:{backgroundColor:m?"#2a2a2a":"white",color:m?"#e0e0e0":"black",borderRadius:"12px",boxShadow:"0 4px 20px rgba(0,0,0,0.3)"}},children:(0,b.jsxs)(x.EmojiPickerContainer,{darkMode:m,children:[(0,b.jsxs)(x.EmojiPickerHeader,{darkMode:m,children:[(0,b.jsx)("h3",{children:"Emojis"}),(0,b.jsx)(e.IconButton,{onClick:f,size:"small",children:(0,b.jsx)(u.default,{style:{color:m?"#e0e0e0":"inherit"}})})]}),(0,b.jsxs)(x.EmojiSearchContainer,{darkMode:m,children:[(0,b.jsx)(v.default,{style:{color:m?"#888":"#666"}}),(0,b.jsx)(x.EmojiSearchInput,{darkMode:m,placeholder:"Search emoji...",value:i,onChange:a=>j(a.target.value)})]}),(0,b.jsx)(x.EmojiCategoryTabs,{value:g,onChange:(a,b)=>h(b),variant:"scrollable",scrollButtons:"auto",darkMode:m,TabIndicatorProps:{style:{backgroundColor:m?"#d32f2f":"#f44336"}},children:Object.entries(w.EMOJI_CATEGORIES).map(([a,{name:c,icon:d}])=>(0,b.jsx)(t,{value:a,label:d,title:c,style:{color:m?"#e0e0e0":"black",minWidth:50}},a))}),(0,b.jsx)(x.EmojiGrid,{darkMode:m,children:k.length>0?k.map((a,c)=>(0,b.jsx)(x.EmojiButton,{onClick:()=>l(a),darkMode:m,children:a},`${a}-${c}`)):(0,b.jsx)(x.NoEmojisMessage,{darkMode:m,children:"recent"===g?"No recent emojis. Start using emojis!":"No emojis found"})})]})})],53838)},99411,a=>{"use strict";var b=a.i(71523);a.s(["Dialog",()=>b.default])},27930,a=>{"use strict";var b=a.i(82352);a.s(["DialogTitle",()=>b.default])},53171,a=>{"use strict";var b=a.i(80348);a.s(["DialogContent",()=>b.default])},30590,a=>{"use strict";var b=a.i(10939);a.s(["DialogActions",()=>b.default])},14356,a=>{"use strict";var b=a.i(48938);a.s(["Button",()=>b.default])},97863,a=>{"use strict";var b=a.i(86375),c=a.i(62897),d=a.i(27669),e=a.i(95558),f=a.i(56874),g=a.i(71287),h=a.i(38238),i=a.i(13368),j=a.i(49927),k=a.i(65639),l=a.i(30913);function m(a){return(0,l.default)("MuiCircularProgress",a)}(0,k.default)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var n=a.i(8171);let o=["className","color","disableShrink","size","style","thickness","value","variant"],p=a=>a,q,r,s,t,u=(0,g.keyframes)(q||(q=p`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),v=(0,g.keyframes)(r||(r=p`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),w=(0,j.default)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.root,b[c.variant],b[`color${(0,h.default)(c.color)}`]]}})(({ownerState:a,theme:b})=>(0,c.default)({display:"inline-block"},"determinate"===a.variant&&{transition:b.transitions.create("transform")},"inherit"!==a.color&&{color:(b.vars||b).palette[a.color].main}),({ownerState:a})=>"indeterminate"===a.variant&&(0,g.css)(s||(s=p`
      animation: ${0} 1.4s linear infinite;
    `),u)),x=(0,j.default)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(a,b)=>b.svg})({display:"block"}),y=(0,j.default)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(a,b)=>{let{ownerState:c}=a;return[b.circle,b[`circle${(0,h.default)(c.variant)}`],c.disableShrink&&b.circleDisableShrink]}})(({ownerState:a,theme:b})=>(0,c.default)({stroke:"currentColor"},"determinate"===a.variant&&{transition:b.transitions.create("stroke-dashoffset")},"indeterminate"===a.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:a})=>"indeterminate"===a.variant&&!a.disableShrink&&(0,g.css)(t||(t=p`
      animation: ${0} 1.4s ease-in-out infinite;
    `),v)),z=d.forwardRef(function(a,d){let g=(0,i.useDefaultProps)({props:a,name:"MuiCircularProgress"}),{className:j,color:k="primary",disableShrink:l=!1,size:p=40,style:q,thickness:r=3.6,value:s=0,variant:t="indeterminate"}=g,u=(0,b.default)(g,o),v=(0,c.default)({},g,{color:k,disableShrink:l,size:p,thickness:r,value:s,variant:t}),z=(a=>{let{classes:b,variant:c,color:d,disableShrink:e}=a,g={root:["root",c,`color${(0,h.default)(d)}`],svg:["svg"],circle:["circle",`circle${(0,h.default)(c)}`,e&&"circleDisableShrink"]};return(0,f.default)(g,m,b)})(v),A={},B={},C={};if("determinate"===t){let a=2*Math.PI*((44-r)/2);A.strokeDasharray=a.toFixed(3),C["aria-valuenow"]=Math.round(s),A.strokeDashoffset=`${((100-s)/100*a).toFixed(3)}px`,B.transform="rotate(-90deg)"}return(0,n.jsx)(w,(0,c.default)({className:(0,e.default)(z.root,j),style:(0,c.default)({width:p,height:p},B,q),ownerState:v,ref:d,role:"progressbar"},C,u,{children:(0,n.jsx)(x,{className:z.svg,ownerState:v,viewBox:"22 22 44 44",children:(0,n.jsx)(y,{className:z.circle,style:A,ownerState:v,cx:44,cy:44,r:(44-r)/2,fill:"none",strokeWidth:r})})}))});a.s(["CircularProgress",0,z],97863)},14709,a=>a.a(async(b,c)=>{try{var d=a.i(8171);a.i(27669);var e=a.i(99411),f=a.i(27930),g=a.i(53171),h=a.i(30590),i=a.i(14356),j=a.i(879),k=a.i(97863),l=a.i(18953),m=a.i(78048),n=a.i(58375),o=a.i(54779),p=b([o]);[o]=p.then?(await p)():p,a.s(["default",0,({open:a,onClose:b,file:c,filePreview:p,input:q,onInputChange:r,uploadProgress:s,isUploading:t,onSend:u,darkMode:v})=>(0,d.jsxs)(e.Dialog,{open:a,onClose:b,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:v?"#2a2a2a":"white",color:v?"#e0e0e0":"black"}},children:[(0,d.jsxs)(f.DialogTitle,{style:{color:v?"#e0e0e0":"black"},children:["Send File",(0,d.jsx)(j.IconButton,{onClick:b,style:{position:"absolute",right:8,top:8,color:v?"#e0e0e0":"inherit"},children:(0,d.jsx)(l.default,{})})]}),(0,d.jsxs)(g.DialogContent,{children:[p&&(0,d.jsx)(n.FilePreview,{children:(0,d.jsx)("img",{src:p,alt:"Preview",style:{maxWidth:"100%",maxHeight:"300px"}})}),(0,d.jsxs)(n.FileInfo,{darkMode:v,children:[(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:"File:"})," ",c?.name]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:"Size:"})," ",(0,o.formatFileSize)(c?.size)," MB"]}),(0,d.jsxs)("p",{children:[(0,d.jsx)("strong",{children:"Type:"})," ",c?.type||"Unknown"]})]}),(0,d.jsx)(n.FileInput,{darkMode:v,value:q,onChange:a=>r(a.target.value),placeholder:"Add a message (optional)",type:"text"}),t&&(0,d.jsxs)(n.UploadProgress,{children:[(0,d.jsx)(k.CircularProgress,{variant:"determinate",value:s}),(0,d.jsxs)("p",{children:[Math.round(s),"%"]})]})]}),(0,d.jsxs)(h.DialogActions,{children:[(0,d.jsx)(i.Button,{onClick:b,style:{color:v?"#e0e0e0":"inherit"},children:"Cancel"}),(0,d.jsx)(i.Button,{onClick:u,variant:"contained",disabled:t,style:{backgroundColor:v?"#d32f2f":"#f44336",color:"white"},startIcon:(0,d.jsx)(m.default,{}),children:t?"Sending...":"Send"})]})]})]),c()}catch(a){c(a)}},!1),39896,a=>a.a(async(b,c)=>{try{var d=a.i(8171);a.i(27669);var e=a.i(99411),f=a.i(27930),g=a.i(53171),h=a.i(30590),i=a.i(14356),j=a.i(97863),k=a.i(78048),l=a.i(58375),m=a.i(54779),n=b([m]);[m]=n.then?(await n)():n,a.s(["default",0,({open:a,audioBlob:b,recordingTime:c,uploadProgress:n,isUploading:o,onCancel:p,onSend:q,onError:r,darkMode:s})=>(0,d.jsxs)(e.Dialog,{open:a,onClose:p,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:s?"#2a2a2a":"white",color:s?"#e0e0e0":"black"}},children:[(0,d.jsx)(f.DialogTitle,{style:{color:s?"#e0e0e0":"black"},children:"Voice Message Recorded"}),(0,d.jsxs)(g.DialogContent,{children:[(0,d.jsxs)(l.VoicePreview,{darkMode:s,children:[(0,d.jsxs)("p",{children:["Duration: ",(0,m.formatTime)(c)]}),b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{style:{fontSize:"12px",color:s?"#888":"#666"},children:["Size: ",(b.size/1024).toFixed(2)," KB"]}),(0,d.jsxs)("p",{style:{fontSize:"12px",color:s?"#888":"#666"},children:["Type: ",b.type]}),(0,d.jsx)("audio",{controls:!0,src:URL.createObjectURL(b),style:{width:"100%",marginTop:10},onError:a=>{console.error("Audio playback error:",a),r("Failed to play audio. The recording might be corrupted.")}})]})]}),o&&(0,d.jsxs)(l.UploadProgress,{children:[(0,d.jsx)(j.CircularProgress,{variant:"determinate",value:n}),(0,d.jsxs)("p",{children:[Math.round(n),"%"]})]})]}),(0,d.jsxs)(h.DialogActions,{children:[(0,d.jsx)(i.Button,{onClick:p,disabled:o,style:{color:s?"#e0e0e0":"inherit"},children:"Cancel"}),(0,d.jsx)(i.Button,{onClick:q,variant:"contained",disabled:o||!b||0===b.size,style:{backgroundColor:s?"#d32f2f":"#f44336",color:"white"},startIcon:(0,d.jsx)(k.default,{}),children:o?"Sending...":"Send"})]})]})]),c()}catch(a){c(a)}},!1),76534,a=>{"use strict";var b=a.i(8171);a.i(27669);var c=a.i(99411),d=a.i(27930),e=a.i(53171),f=a.i(30590),g=a.i(14356),h=a.i(879),i=a.i(44184),j=a.i(18953),k=a.i(92402),l=a.i(58375);a.s(["default",0,({open:a,onClose:m,recipient:n,recipientEmail:o,darkMode:p})=>(0,b.jsxs)(c.Dialog,{open:a,onClose:m,maxWidth:"sm",fullWidth:!0,PaperProps:{style:{backgroundColor:p?"#2a2a2a":"white",color:p?"#e0e0e0":"black"}},children:[(0,b.jsxs)(d.DialogTitle,{style:{color:p?"#e0e0e0":"black"},children:["User Profile",(0,b.jsx)(h.IconButton,{onClick:m,style:{position:"absolute",right:8,top:8,color:p?"#e0e0e0":"inherit"},children:(0,b.jsx)(j.default,{})})]}),(0,b.jsx)(e.DialogContent,{children:(0,b.jsxs)(l.ProfileContainer,{children:[(0,b.jsx)(i.Avatar,{src:n?.photoURL,style:{width:100,height:100,margin:"0 auto 20px"},children:o?.[0]?.toUpperCase()}),(0,b.jsxs)(l.ProfileInfo,{darkMode:p,children:[(0,b.jsx)("h2",{children:o}),(0,b.jsxs)("p",{children:[(0,b.jsx)("strong",{children:"Last Seen:"})," ",n?.lastSeen?.toDate?(0,b.jsx)(k.default,{datetime:n.lastSeen.toDate()}):"Not available"]}),n?.displayName&&(0,b.jsxs)("p",{children:[(0,b.jsx)("strong",{children:"Name:"})," ",n.displayName]})]})]})}),(0,b.jsx)(f.DialogActions,{children:(0,b.jsx)(g.Button,{onClick:m,style:{color:p?"#e0e0e0":"inherit"},children:"Close"})})]})])},19844,a=>{"use strict";var b=a.i(8171);a.i(27669);var c=a.i(879),d=a.i(18953),e=a.i(58375);a.s(["default",0,({replyingTo:a,userEmail:f,onCancel:g,darkMode:h})=>a?(0,b.jsxs)(e.ReplyPreviewBar,{darkMode:h,children:[(0,b.jsx)(e.ReplyBarIndicator,{}),(0,b.jsxs)(e.ReplyPreviewContent,{children:[(0,b.jsxs)(e.ReplyPreviewHeader,{children:[(0,b.jsxs)("span",{children:["Replying to ",a.user===f?"yourself":a.user]}),(0,b.jsx)(c.IconButton,{onClick:g,size:"small",children:(0,b.jsx)(d.default,{fontSize:"small",style:{color:h?"#e0e0e0":"inherit"}})})]}),(0,b.jsx)(e.ReplyPreviewText,{darkMode:h,children:a.message||a.fileName||"🎤 Voice message"})]})]}):null])},15484,a=>a.a(async(b,c)=>{try{var d=a.i(8171),e=a.i(27669),f=a.i(41910),g=a.i(45542),h=a.i(27390),i=a.i(39196),j=a.i(71197),k=a.i(3263),l=a.i(9515),m=a.i(35796),n=a.i(79126),o=a.i(67680),p=a.i(83771),q=a.i(55854),r=a.i(87979),s=a.i(80762),t=a.i(53838),u=a.i(14709),v=a.i(39896),w=a.i(76534),x=a.i(19844),y=a.i(58375),z=a.i(54779),A=a.i(59747),B=b([h,i,l,m,n,o,p,r,u,v,z]);[h,i,l,m,n,o,p,r,u,v,z]=B.then?(await B)():B,a.s(["default",0,function({chat:a,messages:b,isMobile:c=!1,onToggleSidebar:B=()=>{}}){let[C]=(0,g.useAuthState)(h.auth),D=(0,f.useRouter)(),E=(0,e.useRef)(null),F=(0,e.useRef)(null),G=(0,e.useRef)(null),[H,I]=(0,e.useState)(""),[J,K]=(0,e.useState)(!0),[L,M]=(0,e.useState)(null),[N,O]=(0,e.useState)(null),[P,Q]=(0,e.useState)(!1),[R,S]=(0,e.useState)(null),{darkMode:T}=(0,e.useContext)(j.DarkModeContext)||{darkMode:!1},U=D?.query?.id||null,{recipientEmail:V,recipient:W,recipientSnapshot:X,isSelfChat:Y,isLoading:Z}=(0,n.useRecipientData)(C,a),{messagesSnapshot:$}=(0,o.useMessages)(U);(0,p.useMessageStatus)(U,Z?null:V,C?.email,Y);let _=(0,k.useEmojiPicker)(),aa=(0,l.useFileUpload)(U,C,V),ab=(0,m.useVoiceRecording)(U,C,V);(0,e.useEffect)(()=>{let a=()=>{K(!0),(0,i.enableNetwork)(h.db)},b=()=>{K(!1),(0,i.disableNetwork)(h.db)};return window.addEventListener("online",a),window.addEventListener("offline",b),()=>{window.removeEventListener("online",a),window.removeEventListener("offline",b)}},[]);let ac=()=>{E?.current&&E.current.scrollIntoView({behavior:"smooth",block:"start"})};(0,e.useEffect)(()=>{ac()},[$]);let ad=async a=>{if(U&&a)try{console.log(`🗑️ [Chat: ${U}] Deleting message ${a}`),await (0,i.deleteDoc)((0,i.doc)(h.db,"chats",U,"messages",a)),console.log(`✅ [Chat: ${U}] Message deleted successfully`)}catch(a){console.error(`❌ [Chat: ${U}] Error deleting message:`,a),O("Failed to delete message. Please try again.")}},ae=async a=>{if(a.preventDefault(),O(null),!H?.trim()||!U||!C||!V)return void console.warn("⚠️ Cannot send message - missing required data",{hasInput:!!H?.trim(),chatId:U,hasUser:!!C,recipientEmail:V});try{if(console.log(`📤 [Chat: ${U}] Preparing to send message to ${V}`),!Y&&await (0,z.checkIfBlocked)(C.email,V)){O("You cannot send messages to this user. You have been blocked."),console.log(`🚫 [Chat: ${U}] Message blocked - user is blocked`);return}let a=(0,i.doc)(h.db,"users",C.uid);await (0,i.setDoc)(a,{lastSeen:(0,i.serverTimestamp)(),email:C.email},{merge:!0});let b={timestamp:(0,i.serverTimestamp)(),message:H,user:C.email,photoURL:C.photoURL,status:A.MESSAGE_STATUS.SENT},c=(0,z.buildReplyData)(R);c&&(b.replyTo=c),console.log(`📤 [Chat: ${U}] Sending message with status: ${A.MESSAGE_STATUS.SENT}`),await (0,i.addDoc)((0,i.collection)(h.db,"chats",U,"messages"),b),console.log(`✅ [Chat: ${U}] Message sent successfully`),I(""),S(null),ac()}catch(a){console.error(`❌ [Chat: ${U}] Error sending message:`,a),O("Failed to send message. Please try again.")}};return((0,e.useEffect)(()=>{U&&C?.email&&V&&console.log(`🔍 [Chat: ${U}] Chat initialized:`,{currentUser:C.email,recipient:V,isSelfChat:Y})},[U,C?.email,V,Y]),J)?L?(0,d.jsx)(y.Container,{darkMode:T,children:(0,d.jsx)(y.ErrorMessage,{darkMode:T,children:L})}):(0,d.jsxs)(y.Container,{darkMode:T,children:[(0,d.jsx)(q.default,{recipient:W,recipientEmail:V,recipientSnapshot:X,isSelfChat:Y,onAttachFile:()=>F.current?.click(),onMoreClick:()=>Q(!0),darkMode:T,isMobile:c,onToggleSidebar:B}),(0,d.jsx)("input",{ref:F,type:"file",hidden:!0,onChange:aa.handleFileSelect,accept:"*/*"}),(0,d.jsx)(r.default,{ref:E,messagesSnapshot:$,messages:b,sendingError:N,onDelete:ad,onReply:a=>{S(a),G.current?.focus()},darkMode:T}),(0,d.jsx)(t.default,{open:_.openEmojiPicker,anchorEl:_.emojiAnchorEl,onClose:_.handleEmojiPickerClose,selectedCategory:_.selectedEmojiCategory,onCategoryChange:_.setSelectedEmojiCategory,searchTerm:_.emojiSearchTerm,onSearchChange:_.setEmojiSearchTerm,emojis:_.getFilteredEmojis(),onEmojiSelect:a=>{let b=G.current?.selectionStart||H.length,c=H.slice(0,b),d=H.slice(b);I(c+a+d),_.saveRecentEmoji(a),setTimeout(()=>{if(G.current){G.current.focus();let c=b+a.length;G.current.setSelectionRange(c,c)}},0)},darkMode:T}),(0,d.jsx)(u.default,{open:aa.showFileConfirmation,onClose:aa.cancelFileSelection,file:aa.selectedFile,filePreview:aa.filePreview,input:H,onInputChange:I,uploadProgress:aa.uploadProgress,isUploading:aa.isUploading,onSend:()=>aa.sendFileMessage(H,R,O,I,S,ac,Y),darkMode:T}),(0,d.jsx)(v.default,{open:null!==ab.audioBlob,audioBlob:ab.audioBlob,recordingTime:ab.recordingTime,uploadProgress:ab.uploadProgress,isUploading:ab.isUploading,onCancel:ab.cancelRecording,onSend:()=>ab.sendVoiceMessage(R,O,S,ac,Y),onError:O,darkMode:T}),(0,d.jsx)(w.default,{open:P,onClose:()=>Q(!1),recipient:W,recipientEmail:V,isSelfChat:Y,darkMode:T}),(0,d.jsx)(x.default,{replyingTo:R,userEmail:C?.email,onCancel:()=>{S(null)},darkMode:T}),(0,d.jsx)(s.default,{input:H,setInput:I,inputRef:G,isRecording:ab.isRecording,recordingTime:ab.recordingTime,onSubmit:ae,onEmojiClick:_.handleEmojiPickerOpen,onStartRecording:()=>ab.startRecording(O),onStopRecording:ab.stopRecording,darkMode:T})]}):(0,d.jsx)(y.Container,{darkMode:T,children:(0,d.jsx)(y.OfflineMessage,{darkMode:T,children:"You are currently offline. Please check your internet connection."})})}]),c()}catch(a){c(a)}},!1)];

//# sourceMappingURL=%5Broot-of-the-server%5D__679b89d2._.js.map