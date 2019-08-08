(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{125:function(e,t){},130:function(e,t,a){},131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(27),s=a.n(r),i=(a(72),a(13)),o=a.n(i),l=a(17),u=a(4),m=a(7),h=a(9),p=a(8),d=a(10),g=a(15),f=a(14),E=a.n(f),v=a(2),b=function e(){var t=this;Object(u.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{email:e,password:a}).then(function(e){return e.data})},this.loggedin=function(){return t.service.get("/profile").then(function(e){return e.data.user}).catch(function(e){return!1})},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then(function(e){return localStorage.setItem("jwt",e.data.token),e.data})},this.logout=function(){localStorage.removeItem("jwt")},this.checkRoute=function(e){return t.service.get("/".concat(e)).then(function(e){return e.data}).catch(function(e){return console.log(e),!1})},this.postRoute=function(e,a){return t.service.post("/".concat(e),a).then(function(e){return localStorage.setItem("jwt",e.data.token),e.data})};var a=localStorage.getItem("jwt"),n=E.a.create({baseURL:"https://cobalt-chat.herokuapp.com/api",timeout:5e3,headers:{Authorization:"Bearer ".concat(a)}});this.service=n},y=(a(90),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).logoutUser=function(){a.service.logout(),a.setState({user:null})},a.state={user:null},a.service=new b,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.props.user?c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/imgs/logo.png",alt:""}),c.a.createElement("h1",{className:"cobalt"},"Cobalt")),c.a.createElement("div",{className:"links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.c,{className:"link",exact:!0,to:"/chat"},"Chatrooms")),c.a.createElement("li",null,c.a.createElement("button",{onClick:this.logoutUser},"Logout")))))):c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"wrapper"},c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"/imgs/logo.png",alt:""}),c.a.createElement("h1",{className:"cobalt"},"Cobalt")),c.a.createElement("div",{className:"links"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.c,{className:"link",exact:!0,to:"/login"},"Log In")),c.a.createElement("li",null,c.a.createElement(v.c,{className:"link",exact:!0,to:"/signup"},"Sign Up"))))))}}]),t}(n.Component));a(95);function k(){return c.a.createElement("div",{className:"body-container"},c.a.createElement("div",{className:"body-graphic"},c.a.createElement("img",{src:"/imgs/graphic-1.png",alt:""})),c.a.createElement("div",{className:"body-tag-line"},c.a.createElement("h1",null,"Connect, chat, collaborate, share files, empower your team with ",c.a.createElement("span",null,"Cobalt")),c.a.createElement("hr",null)))}a(96);function N(){return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-wrapper"},c.a.createElement("div",{className:"section-header"},c.a.createElement("h1",null,"ABOUT COBALT"),c.a.createElement("hr",null)),c.a.createElement("div",{className:"article-content"},c.a.createElement("div",{className:"article-section"},c.a.createElement("h3",null,"Chat, Collaborate, Share files"),c.a.createElement("p",null,"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptates, corrupti nemo amet aut quisquam obcaecati perferendis laborum voluptatum voluptas eligendi quasi aspernatur doloribus veritatis, praesentium dicta placeat quidem labore?")))))}a(97);function w(){return c.a.createElement("div",{className:"action-section"},c.a.createElement("div",{className:"action-wrapper"},c.a.createElement("div",{className:"action-text"},c.a.createElement("h1",null,"Sign up today and start collaborating")),c.a.createElement(v.c,{className:"get-started",exact:!0,to:"/singup"},"Get Started")))}a(98);function C(){return c.a.createElement("div",{className:"footer-container"},c.a.createElement("div",{className:"footer-wrapper"},c.a.createElement("small",null,"\xa9 Copyright 2019, Eduardo Gonzalez & Pablo Vazquez")))}function j(e){return c.a.createElement("div",{className:"home-container"},c.a.createElement(y,{user:e.user}),c.a.createElement(k,null),c.a.createElement(w,null),c.a.createElement(N,null),c.a.createElement(C,null))}var O=a(28),S=a(18),x=a(63),_=a.n(x),G=a(64),A=a(37),P=a(136);a(129),a(130);function U(e){return c.a.createElement("div",{className:"giphy-container"},c.a.createElement("div",{className:"giffs-container"},e.gifs),c.a.createElement("div",{className:"giff-search"},c.a.createElement("input",{type:"text",name:"giff-search",placeholder:"Search...",onChange:e.search})))}a(131);var T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).addMessage=function(e){a.setState({messages:[].concat(Object(O.a)(a.state.messages),[e])})},a.sendMessage=function(e){e.preventDefault(),a.state.socket.emit("chat message",{creator:a.state.user._id,content:a.state.message}),a.saveMessage(a.state.message),a.setState({message:""}),e.target.value=""},a.saveMessage=function(e){try{a.service.postRoute("chat/messages/".concat(a.props.match.params.id),{message:e}).then(function(e){a.fetchChatHistory()})}catch(t){console.log(t)}},a.renderMessages=function(){return a.state.messages&&0===a.state.messages.length?null:c.a.createElement("div",null,a.state.messages.map(function(e,t){return"Image"===e.type?c.a.createElement("div",{key:t},c.a.createElement("h3",null,"Author: ",e.creator.firstName),c.a.createElement("p",null,c.a.createElement("span",null,"Message:"),c.a.createElement("img",{src:e.content,alt:"gif"}))):c.a.createElement("div",{key:t},c.a.createElement("h3",null,"Author: ",e.creator.firstName),c.a.createElement("p",null,c.a.createElement("span",null,"Message:"),e.content))}))},a.fetchChatHistory=function(){try{a.service.checkRoute("chat/history/".concat(a.props.match.params.id)).then(function(e){a.setState({messages:e.messages})})}catch(e){}},a.inputOnChange=function(e){"Enter"===e.key&&a.sendMessage(e),a.setState(Object(S.a)({},e.target.name,e.target.value))},a.displayInput=function(){return a.state.giphy?c.a.createElement(U,{gifs:a.state.gifs,search:function(e){a.getSearchedGiphy(e)}}):c.a.createElement("div",null,c.a.createElement("button",{type:"button",className:"toggle-emoji",onClick:a.toggleEmojiPicker},c.a.createElement(P.a,null)),c.a.createElement(G.a,{className:"message-input my-textarea",name:"message",value:a.state.message,loadingComponent:function(){return c.a.createElement("span",null,"Loading")},onKeyPress:a.inputOnChange,onChange:a.inputOnChange,placeholder:"Compose your message and hit ENTER to send",trigger:{":":{dataProvider:function(e){return A.b.search(e).map(function(e){return{colons:e.colons,native:e.native}})},component:function(e){var t=e.entity,a=t.native,n=t.colons;return c.a.createElement("div",null,"".concat(n," ").concat(a))},output:function(e){return"".concat(e.native)}}}}),c.a.createElement("div",{className:"chatarea__input"},c.a.createElement("button",{onClick:a.sendMessage,className:"btn btn-primary form-control"},"Send"),c.a.createElement("button",{onClick:function(e){a.toggleGif(e)},className:"btn btn-primary form-control"},"Giphy")))},a.toggleGif=function(e){e.preventDefault(),a.setState({giphy:!a.state.giphy})},a.sendGifMessage=function(e){a.state.socket.emit("chat message",{creator:a.state.user._id,content:a.state.message,type:"Image",createAt:new Date});try{a.service.postRoute("chat/messages/".concat(a.props.match.params.id),{message:e.target.src,type:"Image"}).then(function(e){a.fetchChatHistory()}),a.setState({giphy:!1})}catch(t){console.log(t)}},a.createGiffs=function(e){return e.map(function(e,t){return c.a.createElement("div",{className:"giff-container",key:t},c.a.createElement("img",{src:e.images.fixed_width.url,alt:"",onClick:a.sendGifMessage}))})},a.toggleEmojiPicker=function(){a.setState({showEmojiPicker:!a.state.showEmojiPicker})},a.addEmoji=function(e){a.setState({message:"".concat(a.state.message).concat(e.native),showEmojiPicker:!1})},a.state={user:a.props.user,showEmojiPicker:!1,message:"",messages:[],socket:_()("http://192.168.125.9:3000",{query:{_id:a.props.match.params.id}}),giphy:!1,gifs:[],room:a.props.match.params.id},a.service=new b,a.state.socket.on("chat message",function(e){a.addMessage(e)}),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchChatHistory(),this.getTrendingGiphy()}},{key:"getTrendingGiphy",value:function(){var e=this;console.log("env variabless",Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_API_URL:"https://cobalt-chat.herokuapp.com/api",REACT_APP_GIPHY_API:"m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT"})),E.a.get("https://api.giphy.com/v1/gifs/trending?&api_key=m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT&limit=5").then(function(t){return e.setState({gifs:e.createGiffs(t.data.data)})}).catch(function(e){console.log(e)})}},{key:"getSearchedGiphy",value:function(e){var t=this,a=e.target.value;""!==a?E.a.get("https://api.giphy.com/v1/gifs/search?q="+a+"&api_key=m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT&limit=5").then(function(e){return t.setState({gifs:t.createGiffs(e.data.data)})}).catch(function(e){console.log(e)}):this.getTrendingGiphy()}},{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title"},"Global Chat ",this.props.match.params.id),c.a.createElement("hr",null),c.a.createElement("div",{className:"messages"},this.renderMessages()),this.state.showEmojiPicker?c.a.createElement(A.a,{set:"emojione",onSelect:this.addEmoji}):null),c.a.createElement("div",{className:"card-footer"},c.a.createElement("form",{className:"chatarea",onSubmit:function(e){e.preventDefault()}},this.displayInput())))}}]),t}(n.Component),I=function(){return c.a.createElement("div",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(v.c,{exact:!0,to:"/chat/contacts"},"Contacts")),c.a.createElement("li",null,c.a.createElement(v.c,{exact:!0,to:"/chat/rooms"},"Chats")),c.a.createElement("li",null,c.a.createElement(v.c,{exact:!0,to:"/chat/contactslist"},"Add Contact"))))},L=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Contacts"),e.contacts.map(function(t,a){return c.a.createElement("p",{key:a,to:"/chat/room/".concat(t._id),onClick:function(){e.addChat(t._id)}},t.firstName," ",t.familyName)}))},M=function(e){return c.a.createElement("div",null,c.a.createElement("h3",null,"Chat Rooms"),e.roomsList?e.roomsList.map(function(e,t){return c.a.createElement(v.c,{key:t,to:"/chat/room/".concat(e._id)},e.name," - ",e.updatedAt)}):c.a.createElement("div",null,"No rooms Available"))},R=(a(132),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).componentDidMount=function(){a.getfullContactList()},a.getfullContactList=function(){a.service.checkRoute("user").then(function(e){a.setState({fullContacts:e})})},a.addToContacts=function(e){a.service.postRoute("user/".concat(e)),a.setState({contacts:[].concat(Object(O.a)(a.state.contacts),[e])})},a.checkRoom=function(){var e=Object(l.a)(o.a.mark(function e(t){var n,c;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(1!==(n=a.state.user.chat.filter(function(e){return e.users.includes(t)})).length){e.next=5;break}a.props.history.push("/chat/room/".concat(n[0]._id)),e.next=9;break;case 5:return e.next=7,a.service.postRoute("chat",{users:[t,a.state.user._id],name:" ",description:" ",type:"private"});case 7:c=e.sent,a.props.history.push("/chat/room/".concat(c.chat._id));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.state={user:a.props.user,chatGroups:[],contacts:[],fullContacts:[],error:[],currentGroup:""},a.service=new b,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"chatgroups__container"},c.a.createElement("div",{className:"chatgroups__sidebar"},c.a.createElement(I,{user:this.state.user}),c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/chat/contacts",render:function(t){return c.a.createElement(L,Object.assign({},t,{contacts:e.state.user.contacts,addChat:e.checkRoom}))}}),c.a.createElement(g.b,{exact:!0,path:"/chat/rooms",render:function(t){return c.a.createElement(M,Object.assign({},t,{roomsList:e.state.user.chat}))}}),c.a.createElement(g.b,{exact:!0,path:"/chat/contactslist",render:function(t){return c.a.createElement(L,Object.assign({},t,{contacts:e.state.fullContacts,addChat:e.addToContacts}))}}))),c.a.createElement("div",{className:"chatgroups__messagearea"},c.a.createElement(g.b,{exact:!0,path:"/chat/room/:id",render:function(t){return c.a.createElement(T,Object.assign({},t,{user:e.props.user}))}})))}}]),t}(n.Component)),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.service.login(a.state.email,a.state.password).then(function(e){a.setState({email:"",password:""}),a.props.getUser(e.user),a.props.history.push("/chat")}).catch(function(e){console.log(e)})},a.componentWillMount=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.service.loggedin();case 2:if(!e.sent){e.next=4;break}a.props.history.replace("/");case 4:case"end":return e.stop()}},e)})),a.state={email:"",password:""},a.service=new b,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){e.preventDefault();var t=e.target,a=t.name,n=t.value;this.setState(Object(S.a)({},a,n))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"login-container"},c.a.createElement("div",{className:"login-wrapper"},c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){e.handleChange(t)}}),c.a.createElement("label",null,"Password"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){e.handleChange(t)}}),c.a.createElement("button",null,"Log In")),c.a.createElement("p",null,"Don't have account?",c.a.createElement(v.b,{to:"/signup"}," Signup"))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault(),a.state.password===a.state.confirmPassword?a.service.signup(a.state.username,a.state.password).then(function(e){a.setState({email:"",password:""}),a.props.getUser(e)}).catch(function(e){console.log(e)}):console.log("passwords do not match")},a.handleChange=function(e){var t=e.target,n=t.name,c=t.value;a.setState(Object(S.a)({},n,c))},a.state={email:"",password:"",confirmPassword:"",firstName:"",familyName:""},a.service=new b,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.handleFormSubmit},c.a.createElement("label",null,"Name:"),c.a.createElement("input",{type:"text",name:"firstName",value:this.state.firstName,onChange:function(t){e.handleChange(t)},required:!0}),c.a.createElement("label",null,"Last Name:"),c.a.createElement("input",{type:"text",name:"familyName",value:this.state.familyName,onChange:function(t){e.handleChange(t)},required:!0}),c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:function(t){e.handleChange(t)},required:!0}),c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",value:this.state.password,onChange:function(t){e.handleChange(t)},required:!0}),c.a.createElement("label",null,"Confirm Password:"),c.a.createElement("input",{type:"password",name:"confirmPassword",value:this.state.confirmPassword,onChange:function(t){e.handleChange(t)},required:!0}),c.a.createElement("button",null,"Sing up"),c.a.createElement("p",null,"Already have account?",c.a.createElement(v.b,{to:"/"}," Login"))))}}]),t}(n.Component);a(133);var W=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).fetchUser=Object(l.a)(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==a.state.user){e.next=2;break}return e.abrupt("return",a.service.loggedin().then(function(e){a.setState({user:e})}).catch(function(e){a.setState({user:!1})}));case 2:case"end":return e.stop()}},e)})),a.getUser=function(e){a.setState({user:e})},a.state={user:null,ready:!1,key:"m5ItKE4FT6iJhDAdWAYtNAhVOkG40WUT",giffs:[]},a.service=new b,a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getTrendingGiphy(),this.fetchUser()}},{key:"getSearchedGiphy",value:function(e){var t=this,a=e.target.value;""!==a?E.a.get("https://api.giphy.com/v1/gifs/search?q="+a+"&api_key="+this.state.key+"&limit=10").then(function(e){return t.setState({giffs:t.createGiffs(e.data.data)})}).catch(function(e){console.log(e)}):this.getTrendingGiphy()}},{key:"getTrendingGiphy",value:function(){var e=this;E.a.get("https://api.giphy.com/v1/gifs/trending?&api_key="+this.state.key+"&limit=10").then(function(t){return e.setState({giffs:e.createGiffs(t.data.data)})}).catch(function(e){console.log(e)})}},{key:"createGiffs",value:function(e){return e.map(function(e,t){return c.a.createElement("div",{className:"giff-container",key:t},c.a.createElement("img",{src:e.images.fixed_width.url,alt:""}))})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(g.d,null,c.a.createElement(g.b,{exact:!0,path:"/",render:function(t){return c.a.createElement(j,Object.assign({},t,{user:e.state.user}))}}),c.a.createElement(g.b,{path:"/chat",render:function(t){return e.fetchUser().then(function(){}),e.state.user?c.a.createElement(R,Object.assign({},t,{user:e.state.user})):c.a.createElement(g.a,{push:!0,to:{pathname:"/login"}})}}),c.a.createElement(g.b,{exact:!0,path:"/login",render:function(t){return c.a.createElement(D,Object.assign({},t,{getUser:e.getUser}))}}),c.a.createElement(g.b,{exact:!0,path:"/signup",render:function(t){return c.a.createElement(q,Object.assign({},t,{getUser:e.getUser}))}}),c.a.createElement(g.b,{exact:!0,path:"/dashboard",render:function(e){return c.a.createElement(R,e)}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(v.a,null,c.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},67:function(e,t,a){e.exports=a(134)},72:function(e,t,a){},90:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[67,1,2]]]);
//# sourceMappingURL=main.2d86c153.chunk.js.map