/*! For license information please see main.d7d1f7d3.chunk.js.LICENSE.txt */
(this.webpackJsonptodo_firebase=this.webpackJsonptodo_firebase||[]).push([[0],{52:function(e,t,a){e.exports=a(76)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(13),r=a.n(c),l=(a(57),a(26)),i=(a(58),a(59),a(104)),d=a(105),s=a(99),u=a(100),m=a(101),p=a(102),f=a(107),b=a(46),E=a.n(b),v=a(96),h=a(33),g=a.n(h),j=g.a.initializeApp({apiKey:"AIzaSyCWcGH4UY5BGJGxjgonrmnMzxJJygsP_3k",authDomain:"reactcrud-58176.firebaseapp.com",databaseURL:"https://reactcrud-58176-default-rtdb.firebaseio.com",projectId:"reactcrud-58176",storageBucket:"reactcrud-58176.appspot.com",messagingSenderId:"207498026599",appId:"1:207498026599:web:038e2d3265817a67553ec2",measurementId:"G-1J4HWFC2F0"}).firestore(),k=Object(v.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var w=function(e){var t=Object(n.useState)(!1),a=Object(l.a)(t,2),c=a[0],r=a[1],b=Object(n.useState)(),v=Object(l.a)(b,2),h=v[0],g=v[1],w=k();return o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,{open:c,onClose:function(e){return r(!1)}},o.a.createElement("div",{className:w.paper},o.a.createElement("h1",null,"fix it!"),o.a.createElement(d.a,{placeholder:e.todo.todo,value:h,onChange:function(e){return g(e.target.value)}}),o.a.createElement(s.a,{onClick:function(t){return j.collection("todos").doc(e.todo.id).set({todo:h},{merge:!0}),void r(!1)}},"update"))),o.a.createElement(u.a,{className:"todolist-entry"},o.a.createElement(m.a,{className:"todo-inputbox"},o.a.createElement(p.a,null),o.a.createElement(f.a,{primary:e.todo.todo})),o.a.createElement(s.a,{className:"update-button",onClick:function(e){return r(!0)}},"\uc218\uc815"),o.a.createElement("div",{className:"delete-button"},o.a.createElement(E.a,{onClick:function(t){return j.collection("todos").doc(e.todo.id).delete()}}))))},O=a(103),C=a(106);var N=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(""),i=Object(l.a)(r,2),u=i[0],m=i[1];return Object(n.useEffect)((function(){j.collection("todos").orderBy("timestamp","desc").onSnapshot((function(e){c(e.docs.map((function(e){return{id:e.id,todo:e.data().todo}})))}))}),[]),o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"appContainer"},o.a.createElement("div",{className:"appTitle"},o.a.createElement("h1",null,"Lama TODO?")),o.a.createElement("form",{className:"appInput"},o.a.createElement(O.a,null,o.a.createElement(C.a,null,"\uc785\ub825\ud558\uc2dc\uc624..!"),o.a.createElement(d.a,{value:u,onChange:function(e){m(e.target.value)}})),o.a.createElement("div",{className:"add-button"},o.a.createElement(s.a,{disabled:!u,type:"submit",onClick:function(e){e.preventDefault(),j.collection("todos").add({todo:u,timestamp:g.a.firestore.FieldValue.serverTimestamp()}),m("")},variant:"contained",color:"primary"},"add"))),o.a.createElement("div",{className:"todoList"},o.a.createElement("ul",null,a.map((function(e){return o.a.createElement(w,{todo:e})}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.d7d1f7d3.chunk.js.map