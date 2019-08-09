(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},109:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){},139:function(e,t){},177:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},183:function(e,t,a){},184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),s=a.n(r),o=(a(86),a(13)),i=a.n(o),l=a(17),u=a(4),m=a(7),d=a(9),h=a(8),p=a(10),g=a(14),f=a(2),E=a(24),v=a.n(E),b=function e(){var t=this;Object(u.a)(this,e),this.signup=function(e,a,n,c,r){return t.service.post("/signup",{email:e,password:a,confirmPassword:n,firstName:c,familyName:r}).then(function(e){return localStorage.setItem("jwt",e.data.token),e.data}).catch(function(e){console.log(e)})},this.loggedin=function(){return t.service.get("/profile").then(function(e){return e.data.user}).catch(function(e){return!1})},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then(function(e){return localStorage.setItem("jwt",e.data.token),e.data})},this.logout=function(){localStorage.removeItem("jwt")},this.checkRoute=function(e){return t.service.get("/".concat(e)).then(function(e){return e.data}).catch(function(e){return console.log(e),!1})},this.postRoute=function(e,a){return t.service.post("/".concat(e),a).then(function(e){return localStorage.setItem("jwt",e.data.token),e.data}).catch(function(e){console.log(e)})};var a=localStorage.getItem("jwt"),n=v.a.create({baseURL:"https://cobalt-chat.herokuapp.com/api",timeout:5e3,headers:{Authorization:"Bearer ".concat(a)}});this.service=n},N=(a(104),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).logoutUser=function(){a.service.logout(),a.setState({user:null})},a.state={user:null},a.service=new b,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.user?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/imgs/logo.png",alt:""}),c.a.createElement("h1",{className:"cobalt"},"Cobalt")),c.a.createElement("div",{className:"links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",{className:"nav-button-gradient"},c.a.createElement("button",null,c.a.createElement(f.c,{className:"link",exact:!0,to:"/chat/contacts"},"Home")))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-button-gradient"},c.a.createElement("button",{onClick:this.logoutUser},"Log Out"))))))):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/imgs/logo.png",alt:""}),c.a.createElement("h1",{className:"cobalt"},"Cobalt")),c.a.createElement("div",{className:"links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",{className:"nav-button-gradient"},c.a.createElement("button",null,c.a.createElement(f.c,{className:"link",exact:!0,to:"/login"},"Log In")))),c.a.createElement("li",null,c.a.createElement("div",{className:"nav-button-gradient"},c.a.createElement("button",null,c.a.createElement(f.c,{className:"link",exact:!0,to:"/signup"},"Sign Up"))))))))}}]),t}(n.Component));a(109);function y(){return c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"body-graphic"},c.a.createElement("img",{src:"/imgs/graphic.png",alt:""})),c.a.createElement("div",{className:"body-tag-line"},c.a.createElement("h1",null,"Connect and chat with friends using Cobalt")))}a(110);function C(){return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-wrapper"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h1",null,"ABOUT COBALT"),c.a.createElement("hr",null)),c.a.createElement("div",{className:"article-content"},c.a.createElement("div",{className:"article-section"},c.a.createElement("h3",null,"Keep in touch with friends"),c.a.createElement("p",null,"Start chatting today, using Cobalt's easy to use interface! Add frieds to your contacts and start chatting. Want to add more friends to your conversation? Create a group chat and invite all your buds, share whimsical GIFs and emojis to liven the conversation.")))))}a(111);function w(){return c.a.createElement("div",{className:"action-section"},c.a.createElement("div",{className:"action-wrapper"},c.a.createElement("div",{className:"action-text"},c.a.createElement("h1",null,"Sign up today and start collaborating")),c.a.createElement(f.c,{className:"get-started",exact:!0,to:"/signup"},"Get Started")))}a(112);function k(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("small",null,"\xa9 Copyright 2019, Eduardo Gonzalez & Pablo Vazquez")))}function j(e){return c.a.createElement("div",{className:"home-container"},c.a.createElement(N,{user:e.user}),c.a.createElement(y,null),c.a.createElement(w,null),c.a.createElement(C,null),c.a.createElement(k,null))}var O=a(15),S=a(18),x=a(75),G=a.n(x),M=a(76),P=a(43),_=a(188),I=a(79),T=a.n(I);a(176),a(177);function R(e){return c.a.createElement("div",{className:"giphy-container"},c.a.createElement("div",{className:"giff-search"},c.a.createElement("input",{type:"text",name:"giff-search",placeholder:"Search...",onChange:e.search})),c.a.createElement("div",{className:"giffs-container"},e.gifs))}a(178);var U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).addMessage=function(e){a.setState({messages:[].concat(Object(O.a)(a.state.messages),[e])})},a.sendMessage=function(e){e.preventDefault(),a.state.socket.emit("chat message",{creator:a.state.user._id,content:a.state.message}),a.saveMessage(a.state.message),a.setState({message:""}),e.target.value=""},a.saveMessage=function(e){try{a.service.postRoute("chat/messages/".concat(a.props.match.params.id),{message:e}).then(function(e){a.fetchChatHistory()})}catch(t){console.log(t)}},a.renderMessages=function(){return a.state.messages&&0===a.state.messages.length?null:c.a.createElement("div",null,a.state.messages.map(function(e,t){return"Image"===e.type?c.a.createElement("div",{key:t},c.a.createElement("h3",null,"Author: ",e.creator.firstName),c.a.createElement("p",null,c.a.createElement("span",null,"Message:"),c.a.createElement("img",{src:e.content,alt:"gif"}))):c.a.createElement("div",{key:t},c.a.createElement("h3",null,"Author: ",e.creator.firstName),c.a.createElement("p",null,c.a.createElement("span",null,"Message:"),e.content))}))},a.fetchChatHistory=function(){try{a.service.checkRoute("chat/history/".concat(a.props.match.params.id)).then(function(e){a.setState({messages:e.messages})})}catch(e){}},a.inputOnChange=function(e){"Enter"===e.key&&a.sendMessage(e),a.setState(Object(S.a)({},e.target.name,e.target.value))},a.displayInput=function(){return a.state.giphy?c.a.createElement(R,{gifs:a.state.gifs,search:function(e){a.getSearchedGiphy(e)}}):c.a.createElement("div",{className:"text-inputs"},c.a.createElement(M.a,{className:"text-input__textarea",name:"message",value:a.state.message,loadingComponent:function(){return c.a.createElement("span",null,"Loading")},onKeyPress:a.inputOnChange,onChange:a.inputOnChange,placeholder:"Compose your message and hit ENTER to send",trigger:{":":{dataProvider:function(e){return P.b.search(e).map(function(e){return{colons:e.colons,native:e.native}})},component:function(e){var t=e.entity,a=t.native,n=t.colons;return c.a.createElement("div",null,"".concat(n," ").concat(a))},output:function(e){return"".concat(e.native)}}}}),c.a.createElement("div",{className:"chatarea__input"},c.a.createElement("button",{type:"button",className:"toggle-emoji",onClick:a.toggleEmojiPicker},c.a.createElement(_.a,null)),c.a.createElement("button",{onClick:a.sendMessage,className:"btn btn-primary form-control"},"Send"),c.a.createElement("button",{onClick:function(e){a.toggleGif(e)},className:"btn btn-primary form-control"},"Giphy")))},a.toggleGif=function(e){e.preventDefault(),a.setState({giphy:!a.state.giphy})},a.sendGifMessage=function(e){a.state.socket.emit("chat message",{creator:a.state.user._id,content:a.state.message,type:"Image",createAt:new Date});try{a.service.postRoute("chat/messages/".concat(a.props.match.params.id),{message:e.target.src,type:"Image"}).then(function(e){a.fetchChatHistory()}),a.setState({giphy:!1})}catch(t){console.log(t)}},a.createGiffs=function(e){return e.map(function(e,t){return c.a.createElement("div",{className:"giff-container",key:t},c.a.createElement("img",{src:e.images.fixed_width.url,alt:"",onClick:a.sendGifMessage}))})},a.toggleEmojiPicker=function(){a.setState({showEmojiPicker:!a.state.showEmojiPicker})},a.addEmoji=function(e){a.setState({message:"".concat(a.state.message).concat(e.native),showEmojiPicker:!1})},a.state={user:a.props.user,showEmojiPicker:!1,message:"",messages:[],fetchingHistory:!0,socket:G()("http://cobalt-chat.herokuapp.com",{query:{_id:a.props.match.params.id,user:a.props.user._id}}),giphy:!1,gifs:[],room:a.props.match.params.id},a.service=new b,a.state.socket.on("chat message",function(e){a.addMessage(e)}),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchChatHistory(),this.getTrendingGiphy()}},{key:"getTrendingGiphy",value:function(){var e=this;v.a.get("https://api.giphy.com/v1/gifs/trending?&api_key=m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT&limit=10").then(function(t){return e.setState({gifs:e.createGiffs(t.data.data)})}).catch(function(e){console.log(e)})}},{key:"getSearchedGiphy",value:function(e){var t=this,a=e.target.value;""!==a?v.a.get("https://api.giphy.com/v1/gifs/search?q="+a+"&api_key=m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT&limit=10").then(function(e){return t.setState({gifs:t.createGiffs(e.data.data)})}).catch(function(e){console.log(e)}):this.getTrendingGiphy()}},{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title"},c.a.createElement("h2",null,"New Conversation")),c.a.createElement(T.a,{mode:"bottom",className:"messages"},this.renderMessages()),this.state.showEmojiPicker?c.a.createElement(P.a,{set:"emojione",onSelect:this.addEmoji}):null),c.a.createElement("div",{className:"card-footer"},c.a.createElement("form",{className:"chatarea",onSubmit:function(e){e.preventDefault()}},this.displayInput())))}}]),t}(n.Component),A=a(189),L=a(190),D=a(191);a(179);function q(e){return c.a.createElement("div",{className:"contact-container"},c.a.createElement("p",{className:"contact-icon"},e.firstName[0].toUpperCase()),c.a.createElement("p",{className:"contact-name",onClick:e.addChat},e.firstName),c.a.createElement("div",{className:"status ".concat(1==e.online?"online":"offline")}))}a(180);var W=function(e){return c.a.createElement("div",{className:"contacts-wrapper"},c.a.createElement("h3",null,"Contacts"),e.contacts.length>0?e.contacts.map(function(t,a){return c.a.createElement(q,{key:a,to:"/chat/room/".concat(t._id),addChat:function(){e.addChat(t._id)},online:t.online,firstName:t.firstName})}):c.a.createElement("h5",{className:"no-contacts"},"You have no contacts"))},F=(a(181),function(e){return c.a.createElement("div",{className:"chatrooms-wrapper"},c.a.createElement("h3",null,"Chat Rooms"),e.displayContacts?null:e.roomsList?e.roomsList.map(function(e,t){return c.a.createElement("div",{className:"list-container"},c.a.createElement(f.c,{className:"list-item",key:t,to:"/chat/room/".concat(e._id)},e.name," - ",e.updatedAt))}):c.a.createElement("div",null,"No rooms Available"))}),H=(a(182),function(e){return c.a.createElement("div",{className:"sidebar-container"},c.a.createElement("div",{className:"sidebar-wrapper"},c.a.createElement("div",{className:"sidebar-control-icons"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(f.c,{to:"/chat/contacts"},c.a.createElement(A.a,{className:"chat-icons"}))),c.a.createElement("li",null,c.a.createElement(f.c,{to:"/chat/rooms"},c.a.createElement(L.a,{className:"chat-icons"}))),c.a.createElement("li",null,c.a.createElement(f.c,{to:"/chat/contactslist"},c.a.createElement(D.a,{className:"chat-icons"}))))),c.a.createElement("div",{className:"sidebar-pages"},c.a.createElement("div",{className:"sidebar-pages-container"},c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/chat/contacts",component:function(){return c.a.createElement(W,Object.assign({},e,{contacts:e.user.contacts,addChat:e.checkRoom}))}}),c.a.createElement(g.b,{exact:!0,path:"/chat/rooms",component:function(){return c.a.createElement(F,Object.assign({},e,{roomsList:e.user.chat,contacts:e.contacts,addToGroup:e.addToGroup,groupContacts:e.groupContacts,displayContacts:e.displayContacts,toogleContacts:e.toogleContacts,createGroup:e.createGroup}))}}),c.a.createElement(g.b,{exact:!0,path:"/chat/contactslist",component:function(){return c.a.createElement(W,Object.assign({},e,{contacts:e.fullContacts,addChat:e.addToContacts}))}}))))))}),z=(a(183),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).componentDidMount=function(){a.getfullContactList()},a.getfullContactList=function(){a.service.checkRoute("user").then(function(e){a.setState({fullContacts:e})}).then(function(){console.log(a.state)})},a.addToContacts=function(e){a.service.postRoute("user/".concat(e)),a.setState({contacts:[].concat(Object(O.a)(a.state.contacts),[e])})},a.toogleContacts=function(){a.setState({displayContacts:!a.state.displayContacts})},a.addToGroup=function(e){var t=a.state.fullContacts.filter(function(t,n){return a.state.groupContacts.includes(t._id)||e===t._id});a.setState({groupContacts:Object(O.a)(new Set([].concat(Object(O.a)(a.state.groupContacts),[e]))),groupContactsInfo:t})},a.createGroup=function(){a.service.postRoute("/chat",{users:Object(O.a)(new Set([].concat(Object(O.a)(a.state.groupContacts),[a.state.user._id]))),name:"Some name",description:"Some description",type:"private"}),a.setState({groupContacts:[]})},a.checkRoom=function(){var e=Object(l.a)(i.a.mark(function e(t){var n,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==(n=a.state.user.chat.filter(function(e){return e.users.includes(t)})).length){e.next=5;break}a.props.history.push("/chat/room/".concat(n[0]._id)),e.next=9;break;case 5:return e.next=7,a.service.postRoute("chat",{users:[t,a.state.user._id],name:"Private Chat",description:" ",type:"private"});case 7:c=e.sent,a.props.history.push("/chat/room/".concat(c.chat._id));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={user:a.props.user,chatGroups:[],contacts:[],fullContacts:[],groupContacts:[],groupContactsInfo:[],displayContacts:!1},a.service=new b,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"chatgroups-container"},c.a.createElement(H,{user:this.state.user,contacts:this.state.contacts,fullContacts:this.state.fullContacts,addToContacts:this.addToContacts,checkRoom:this.checkRoom,addToRoom:this.addToRoom,toogleContacts:this.toogleContacts,createGroup:this.createGroup}),c.a.createElement(g.b,{exact:!0,path:"/chat/room/:id",render:function(t){return c.a.createElement(U,Object.assign({},t,{user:e.props.user}))}}))}}]),t}(n.Component)),B=(a(184),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.service.login(a.state.email,a.state.password).then(function(e){a.setState({email:"",password:""}),a.props.getUser(e.user),a.props.history.push("/chat")}).catch(function(e){a.setState({error:e.response.data.message})})},a.componentWillMount=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.service.loggedin();case 2:if(!e.sent){e.next=4;break}a.props.history.replace("/");case 4:case"end":return e.stop()}},e)})),a.renderError=function(){return a.state.error?c.a.createElement("div",{className:"login-errorMessage"},a.state.error):c.a.createElement("div",{className:"login-errorMessage-area"})},a.state={email:"",password:"",error:null},a.service=new b,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"login-container"},c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("div",null,c.a.createElement("h2",null,"Log In")),this.renderError(),c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){e.handleChange(t)}}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){e.handleChange(t)}}),c.a.createElement("div",{className:"signup-button"},c.a.createElement("div",{className:"button-gradient"},c.a.createElement("button",null,"Log In"))),c.a.createElement("div",{className:"login-login-link"},c.a.createElement("p",null,"Don't have an account?",c.a.createElement(f.b,{className:"login-login-link-link",to:"/signup"},"Signup"))))))}}]),t}(n.Component)),J=(a(185),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.state.password===a.state.confirmPassword?a.service.signup(a.state.email,a.state.password,a.state.confirmPassword,a.state.firstName,a.state.familyName).then(function(e){a.setState({email:"",password:""}),a.props.getUser(e),a.props.history.push("/chat")}).catch(function(e){console.log(e.response.data)}):a.setState({error:"Passwords do not match"})},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(S.a)({},n,c))},a.renderError=function(){return a.state.error?c.a.createElement("div",{className:"signup-errorMessage"},a.state.error):c.a.createElement("div",{className:"signup-errorMessage-area"})},a.state={email:"",password:"",confirmPassword:"",firstName:"",familyName:"",error:null},a.service=new b,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"signup-container"},c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("div",{className:"form-wrapper"},c.a.createElement("div",null,c.a.createElement("h2",null,"Create Account")),this.renderError(),c.a.createElement("label",null,"Name:"),c.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){e.handleChange(t)},required:!0,placeholder:"Enter your name"}),c.a.createElement("label",null,"Last Name:"),c.a.createElement("input",{type:"text",name:"familyName",value:this.state.familyName,onChange:function(t){e.handleChange(t)},required:!0,placeholder:"Enter your last name"}),c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){e.handleChange(t)},required:!0,placeholder:"Enter your email"}),c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){e.handleChange(t)},required:!0,placeholder:"Enter a new password"}),c.a.createElement("label",null,"Confirm Password:"),c.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:function(t){e.handleChange(t)},required:!0,placeholder:"Confirm your new password"}),c.a.createElement("div",{className:"signup-button"},c.a.createElement("div",{className:"button-gradient"},c.a.createElement("button",null,"Create"))),c.a.createElement("div",{className:"signup-login-link"},c.a.createElement("p",null,"Already have account?",c.a.createElement(f.b,{className:"signup-login-link-link",to:"/login"},"Login"))))))}}]),t}(n.Component)),K=(a(186),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).fetchUser=Object(l.a)(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==a.state.user){e.next=2;break}return e.abrupt("return",a.service.loggedin().then(function(e){a.setState({user:e})}).catch(function(e){a.setState({user:!1})}));case 2:case"end":return e.stop()}},e)})),a.getUser=function(e){a.setState({user:e})},a.state={user:null},a.service=new b,a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser()}},{key:"createGiffs",value:function(e){return e.map(function(e,t){return c.a.createElement("div",{className:"giff-container",key:t},c.a.createElement("img",{src:e.images.fixed_width.url,alt:""}))})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/",render:function(t){return c.a.createElement(j,Object.assign({},t,{user:e.state.user}))}}),c.a.createElement(g.b,{path:"/chat",render:function(t){return e.fetchUser().then(function(){}),e.state.user?c.a.createElement(z,Object.assign({},t,{user:e.state.user})):c.a.createElement(g.a,{push:!0,to:{pathname:"/login"}})}}),c.a.createElement(g.b,{exact:!0,path:"/login",render:function(t){return c.a.createElement(B,Object.assign({},t,{getUser:e.getUser}))}}),c.a.createElement(g.b,{exact:!0,path:"/signup",render:function(t){return c.a.createElement(J,Object.assign({},t,{getUser:e.getUser}))}}),c.a.createElement(g.b,{exact:!0,path:"/dashboard",render:function(e){return c.a.createElement(z,e)}})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(f.a,null,c.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},81:function(e,t,a){e.exports=a(187)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.52fee413.chunk.js.map