(this.webpackJsonpmessanger=this.webpackJsonpmessanger||[]).push([[0],{42:function(e,a,t){e.exports=t(66)},47:function(e,a,t){},48:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(13),o=t.n(c),r=(t(47),t(28)),m=t(88),l=t(86),i=t(87),u=t(83),p=t(84),g=(t(48),Object(n.forwardRef)((function(e,a){var t=e.username,n=e.messages,c=t===n.username;return console.log(n.userName),s.a.createElement("div",{ref:a,className:"message ".concat(c&&"message_User")},s.a.createElement(i.a,{className:c?"message_UserCard":"message_guestcard"},s.a.createElement(u.a,null,s.a.createElement(p.a,{color:"white",variant:"h5",component:"h2"},!c&&"".concat(n.username||"Unknown",": "),"  ",n.message))))}))),d=t(27),f=t.n(d),b=f.a.initializeApp({apiKey:"AIzaSyC79pbnlrSCazD4S1NOZ5YIxiiKw50etxw",authDomain:"facebook-messanger-clone-9d7c5.firebaseapp.com",databaseURL:"https://facebook-messanger-clone-9d7c5.firebaseio.com",projectId:"facebook-messanger-clone-9d7c5",storageBucket:"facebook-messanger-clone-9d7c5.appspot.com",messagingSenderId:"353129871915",appId:"1:353129871915:web:5828bcb955453f18e9886e",measurementId:"G-VFG4XSP266"}).firestore(),E=t(39),h=t(38),v=t.n(h),w=t(85);t(63);var k=function(){var e=Object(n.useState)(""),a=Object(r.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)([]),i=Object(r.a)(o,2),u=i[0],p=i[1],d=Object(n.useState)(""),h=Object(r.a)(d,2),k=h[0],N=h[1];return Object(n.useEffect)((function(){b.collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){p(e.docs.map((function(e){return{id:e.id,message:e.data()}})))}))}),[]),Object(n.useEffect)((function(){N(prompt("Please! Enter Your Name... "))}),[]),s.a.createElement("div",{className:"App"},s.a.createElement("img",{className:"image_logo",src:"https://www.flaticon.com/svg/static/icons/svg/1384/1384893.svg"}),s.a.createElement("h1",null,"FaceBook-Messanger"),s.a.createElement("h3",null,"Welcome ",k),s.a.createElement("form",{className:"app_form"},s.a.createElement(m.a,{className:"app_formcontrol"},s.a.createElement(l.a,{placeholder:"Enter Message...",className:"app_input",value:t,onChange:function(e){return c(e.target.value)}}),s.a.createElement(w.a,{className:"app__iconbutton",disabled:!t,variant:"contained",color:"primary",type:"submit",onClick:function(e){e.preventDefault(),b.collection("messages").add({message:t,username:k,timestamp:f.a.firestore.FieldValue.serverTimestamp()}),c("")}},s.a.createElement(v.a,null)))),s.a.createElement(E.a,null,u.map((function(e){var a=e.id,t=e.message;return s.a.createElement(g,{key:a,username:k,messages:t})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.0a4ca394.chunk.js.map