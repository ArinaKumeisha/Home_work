(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={message:"Message_message__VJ11_",avatar:"Message_avatar__2FHoy",content:"Message_content__1Rs2p",corner:"Message_corner__ChshX",name:"Message_name__mieh9",text:"Message_text__2xk5t",time:"Message_time__1yUdV"}},17:function(e,t,n){e.exports={greeting:"Greeting_greeting__3L4yn",input:"Greeting_input__3Cu7o",focus:"Greeting_focus__1YMI8",errorInput:"Greeting_errorInput__15vYj",button:"Greeting_button__1mYJN"}},19:function(e,t,n){e.exports={input:"SuperInputText_input__2oRjk",superInput:"SuperInputText_superInput__3P01-",errorInput:"SuperInputText_errorInput__2VW-y",error:"SuperInputText_error__1SJfd"}},22:function(e,t,n){e.exports={blue:"HW4_blue__3V1DR",column:"HW4_column__2Qzzi",testSpanError:"HW4_testSpanError__1uJnO"}},23:function(e,t,n){},28:function(e,t,n){e.exports={App:"App_App__3wNy_"}},29:function(e,t,n){e.exports={button:"SuperButton_button__3ViaS",blink:"SuperButton_blink__2Sts5",default:"SuperButton_default__3IDz1",red:"SuperButton_red__3Jk8I"}},36:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),s=n.n(c),i=(n(36),n(28)),o=n.n(i),l=n(11),j=n(9),u=n.n(j),d=n(10),b=n.n(d),h=n(0);var f=function(e){return Object(h.jsxs)("div",{className:b.a.message,children:[Object(h.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),Object(h.jsx)("div",{className:b.a.corner}),Object(h.jsxs)("div",{className:b.a.content,children:[Object(h.jsx)("div",{className:b.a.name,children:e.name}),Object(h.jsx)("div",{className:b.a.text,children:e.message}),Object(h.jsx)("div",{className:b.a.time,children:e.time})]})]})},O="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Arina Kumeisha",m="hello my friend!",x="22:00";var p=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(f,{avatar:O,name:_,message:m,time:x}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},v=n(8),g=n(6),N=n.n(g);var k=function(e){var t=N.a.item+" "+N.a[e.affair.priority];return Object(h.jsxs)("div",{className:N.a.affair,children:[Object(h.jsx)("div",{className:N.a.item,children:e.affair.name}),Object(h.jsx)("div",{className:t,children:e.affair.priority}),Object(h.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair.id)},className:N.a.item+" "+N.a.button,children:"X"})]})};var C=function(e){var t=e.affairs.map((function(t){return Object(h.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairsCallback},t.id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsxs)("div",{className:N.a.doing,children:[Object(h.jsx)("button",{onClick:function(){return e.setFilter("all")},className:N.a.allBut,children:"All"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("high")},className:N.a.highBut,children:"High"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("middle")},className:N.a.middleBut,children:"Middle"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("low")},className:N.a.lowBut,children:"Low"})]})]})};var y=function(){var e=Object(r.useState)([{id:1,name:"work",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:5,name:"html & css",priority:"middle"}]),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(C,{affairs:l,setFilter:o,deleteAffairsCallback:function(e){return a(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},w=n(31),S=n(17),A=n.n(S),B=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter,i=a?A.a.errorInput:A.a.input,o=a?Object(h.jsx)("div",{style:{color:"red"},children:"Name is required!!!"}):null;return Object(h.jsxs)("div",{className:A.a.greeting,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{value:t,onChange:n,className:i,onKeyDown:s,onBlur:n,onKeyPress:s}),o]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:r,className:A.a.button,disabled:!t,children:"add"}),Object(h.jsx)("span",{children:c})]})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(!1),l=Object(v.a)(o,2),j=l[0],u=l[1],d=function(){n(s),alert("hello ".concat(s)),i("")},b=t.length;return Object(h.jsx)(B,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?i(t):(u(!0),i(""))},addUser:d,error:j,totalUsers:b,onEnter:function(e){"Enter"===e.key&&(d(),i(""))}})},T=n(45);var E=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};a([].concat(Object(w.a)(n),[t]))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},J=n(13),M=n(14),F=n(19),G=n.n(F),H=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],W=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(M.a)(e,H),l="".concat(G.a.error," ").concat(i||""),j="&{s.input} ".concat(c?G.a.errorInput:G.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},P=n(22),U=n.n(P),K=n(29),V=n.n(K),X=["red","className"],R=function(e){e.red;var t=e.className,n=Object(M.a)(e,X),r="".concat(V.a.button," &{red ? s.red : s.default} ").concat(t);return Object(h.jsx)("button",Object(J.a)({className:r},n))},Y=n(23),Z=n.n(Y),q=["type","onChange","onChangeChecked","className","spanClassName","children"],z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(M.a)(e,q),s="".concat(Z.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:Z.a.spanClassName,children:a})]})};var L=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:U.a.column,children:[Object(h.jsx)(W,{value:n,onChangeText:a,onEnter:s,error:c}),Object(h.jsx)(W,{className:U.a.blue}),Object(h.jsx)(R,{children:"default"}),Object(h.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(R,{disabled:!0,children:"disabled"}),Object(h.jsx)(z,{checked:l,onChangeChecked:j,children:"some text "}),Object(h.jsx)(z,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var D=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(y,{}),Object(h.jsx)(E,{}),Object(h.jsx)(L,{})]})},Q=n(2);var $=function(){return Object(h.jsx)("div",{children:"Junior!"})};var ee=function(){return Object(h.jsx)("div",{children:"JuniorPlus!"})},te="/pre-junior",ne="/junior+",re="/junior";var ae=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(Q.d,{children:[Object(h.jsx)(Q.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(Q.a,{to:te})}}),Object(h.jsx)(Q.b,{path:te,render:function(){return Object(h.jsx)(D,{})}}),Object(h.jsx)(Q.b,{path:ne,render:function(){return Object(h.jsx)(ee,{})}}),Object(h.jsx)(Q.b,{path:re,render:function(){return Object(h.jsx)($,{})}})]})})};var ce=function(){return Object(h.jsxs)("div",{className:u.a.header,children:[Object(h.jsx)(l.b,{to:te,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(h.jsx)(l.b,{to:ne,className:u.a.link,activeClassName:u.a.active,children:"junior+"}),Object(h.jsx)(l.b,{to:re,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(h.jsx)("div",{className:u.a.block})]})};var se=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(ce,{}),Object(h.jsx)(ae,{})]})})};var ie=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsx)(se,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(ie,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={button:"Affairs_button__3FeGx",affair:"Affairs_affair__WMNLv",item:"Affairs_item__1FGvz",allBut:"Affairs_allBut__nbGrU",highBut:"Affairs_highBut__1lOqi",high:"Affairs_high__3j5XX",middleBut:"Affairs_middleBut__2yVRu",middle:"Affairs_middle__2TXYG",low:"Affairs_low__1tZZE",lowBut:"Affairs_lowBut__19e80"}},9:function(e,t,n){e.exports={link:"Header_link__3LaRJ",active:"Header_active__2onVu",block:"Header_block__1IZPq",header:"Header_header__3OZ9K"}}},[[43,1,2]]]);
//# sourceMappingURL=main.a61284ad.chunk.js.map