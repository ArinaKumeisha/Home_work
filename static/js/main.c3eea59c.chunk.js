(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={button:"Affairs_button__3FeGx",affair:"Affairs_affair__WMNLv",item:"Affairs_item__1FGvz",allBut:"Affairs_allBut__nbGrU",highBut:"Affairs_highBut__1lOqi",high:"Affairs_high__3j5XX",middleBut:"Affairs_middleBut__2yVRu",middle:"Affairs_middle__2TXYG",low:"Affairs_low__1tZZE",lowBut:"Affairs_lowBut__19e80"}},,,,function(e,t,n){e.exports={link:"Header_link__3LaRJ",active:"Header_active__2onVu",block:"Header_block__1IZPq",header:"Header_header__3OZ9K"}},function(e,t,n){e.exports={message:"Message_message__VJ11_",avatar:"Message_avatar__2FHoy",content:"Message_content__1Rs2p",corner:"Message_corner__ChshX",name:"Message_name__mieh9",text:"Message_text__2xk5t",time:"Message_time__1yUdV"}},,,,,function(e,t,n){e.exports={greeting:"Greeting_greeting__3L4yn",input:"Greeting_input__3Cu7o",focus:"Greeting_focus__1YMI8",errorInput:"Greeting_errorInput__15vYj",button:"Greeting_button__1mYJN"}},,function(e,t,n){e.exports={input:"SuperInputText_input__2oRjk",superInput:"SuperInputText_superInput__3P01-",errorInput:"SuperInputText_errorInput__2VW-y",error:"SuperInputText_error__1SJfd"}},,,function(e,t,n){e.exports={blue:"HW4_blue__3V1DR",column:"HW4_column__2Qzzi",testSpanError:"HW4_testSpanError__1uJnO"}},function(e,t,n){},,,,,function(e,t,n){e.exports={App:"App_App__3wNy_"}},function(e,t,n){e.exports={button:"SuperButton_button__3ViaS",blink:"SuperButton_blink__2Sts5",default:"SuperButton_default__3IDz1",red:"SuperButton_red__3Jk8I"}},function(e,t,n){e.exports={span:"SuperEditableSpan_span__33DTv"}},,,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(27),s=n.n(c),i=(n(37),n(28)),o=n.n(i),l=n(13),j=n(11),u=n.n(j),d=n(12),b=n.n(d),h=n(0);var O=function(e){return Object(h.jsxs)("div",{className:b.a.message,children:[Object(h.jsx)("img",{src:e.avatar,alt:"avatar",className:b.a.avatar}),Object(h.jsx)("div",{className:b.a.corner}),Object(h.jsxs)("div",{className:b.a.content,children:[Object(h.jsx)("div",{className:b.a.name,children:e.name}),Object(h.jsx)("div",{className:b.a.text,children:e.message}),Object(h.jsx)("div",{className:b.a.time,children:e.time})]})]})},x="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Arina Kumeisha",m="hello my friend!",_="22:00";var p=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 1",Object(h.jsx)(O,{avatar:x,name:f,message:m,time:_}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},v=n(4),g=n(7),N=n.n(g);var k=function(e){var t=N.a.item+" "+N.a[e.affair.priority];return Object(h.jsxs)("div",{className:N.a.affair,children:[Object(h.jsx)("div",{className:N.a.item,children:e.affair.name}),Object(h.jsx)("div",{className:t,children:e.affair.priority}),Object(h.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair.id)},className:N.a.item+" "+N.a.button,children:"X"})]})};var C=function(e){var t=e.affairs.map((function(t){return Object(h.jsx)(k,{affair:t,deleteAffairCallback:e.deleteAffairsCallback},t.id)}));return Object(h.jsxs)("div",{children:[t,Object(h.jsxs)("div",{className:N.a.doing,children:[Object(h.jsx)("button",{onClick:function(){return e.setFilter("all")},className:N.a.allBut,children:"All"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("high")},className:N.a.highBut,children:"High"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("middle")},className:N.a.middleBut,children:"Middle"}),Object(h.jsx)("button",{onClick:function(){return e.setFilter("low")},className:N.a.lowBut,children:"Low"})]})]})};var y=function(){var e=Object(r.useState)([{id:1,name:"work",priority:"high"},{id:2,name:"anime",priority:"low"},{id:3,name:"games",priority:"low"},{id:5,name:"html & css",priority:"middle"}]),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(n,i);return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 2",Object(h.jsx)(C,{affairs:l,setFilter:o,deleteAffairsCallback:function(e){return a(function(e,t){return e.filter((function(e){return e.id!==t}))}(n,e))},filter:i}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},S=n(32),w=n(17),A=n.n(w),B=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=e.onEnter,i=e.setError,o=a?A.a.errorInput:A.a.input,l=a?Object(h.jsx)("div",{style:{color:"red"},children:"Name is required!!!"}):null;return Object(h.jsxs)("div",{className:A.a.greeting,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{value:t,onChange:n,className:o,onKeyDown:s,onKeyPress:s,onClick:function(){return i(!1)}}),l]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:r,className:A.a.button,disabled:!t,children:"add"}),Object(h.jsx)("span",{children:c})]})]})},I=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(v.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(!1),l=Object(v.a)(o,2),j=l[0],u=l[1],d=function(){s.trim()?(n(s.trim()),alert("hello ".concat(s)),i("")):(u(!0),i(""))},b=t.length;return Object(h.jsx)(B,{name:s,setNameCallback:function(e){u(!1),i(e.currentTarget.value)},addUser:d,error:j,totalUsers:b,onEnter:function(e){"Enter"===e.key&&d()},setError:u})},E=n(46);var T=function(){var e=Object(r.useState)([]),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 3",Object(h.jsx)(I,{users:n,addUserCallback:function(e){var t={_id:Object(E.a)(),name:e};a([].concat(Object(S.a)(n),[t]))}}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},F=n(9),J=n(10),P=n(19),M=n.n(P),G=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],H=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(J.a)(e,G),l="".concat(M.a.error," ").concat(i||""),j="&{s.input} ".concat(c?M.a.errorInput:M.a.superInput," ").concat(s);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",Object(F.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:j},o)),c&&Object(h.jsx)("span",{className:l,children:c})]})},W=n(22),U=n.n(W),D=n(29),K=n.n(D),V=["red","className"],X=function(e){e.red;var t=e.className,n=Object(J.a)(e,V),r="".concat(K.a.button," &{red ? s.red : s.default} ").concat(t);return Object(h.jsx)("button",Object(F.a)({className:r},n))},R=n(23),Y=n.n(R),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(J.a)(e,Z),s="".concat(Y.a.checkbox," ").concat(r||"");return Object(h.jsxs)("label",{children:[Object(h.jsx)("input",Object(F.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(h.jsx)("span",{className:Y.a.spanClassName,children:a})]})};var z=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(v.a)(i,2),l=o[0],j=o[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 4",Object(h.jsxs)("div",{className:U.a.column,children:[Object(h.jsx)(H,{value:n,onChangeText:a,onEnter:s,error:c}),Object(h.jsx)(H,{className:U.a.blue}),Object(h.jsx)(X,{children:"default"}),Object(h.jsx)(X,{red:!0,onClick:s,children:"delete "}),Object(h.jsx)(X,{disabled:!0,children:"disabled"}),Object(h.jsx)(q,{checked:l,onChangeChecked:j,children:"some text "}),Object(h.jsx)(q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})},L=n(30),Q=n.n(L),$=["autoFocus","onBlur","onEnter","spanProps"],ee=["children","onDoubleClick","className"],te=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,a=e.spanProps,c=Object(J.a)(e,$),s=Object(r.useState)(!1),i=Object(v.a)(s,2),o=i[0],l=i[1],j=a||{},u=j.children,d=j.onDoubleClick,b=j.className,O=Object(J.a)(j,ee),x="".concat(Q.a.span," ").concat(b||"");return Object(h.jsx)(h.Fragment,{children:o?Object(h.jsx)(H,Object(F.a)({autoFocus:!0,onBlur:function(e){l(!1),t&&t(e)},onEnter:function(){l(!1),n&&n()}},c)):Object(h.jsxs)("span",Object(F.a)(Object(F.a)({onDoubleClick:function(e){l(!0),d&&d(e)},className:x},O),{},{children:["\u270e ",u||c.value]}))})};function ne(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function re(e,t){var n=t,r=localStorage.getItem(e);return null!==r&&(n=JSON.parse(r)),n}ne("test",{x:"A",y:1});re("test",{x:"",y:0});var ae=function(){var e=Object(r.useState)(""),t=Object(v.a)(e,2),n=t[0],a=t[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)("hr",{}),"homeworks 6",Object(h.jsx)("div",{children:Object(h.jsx)(te,{value:n,onChangeText:a,spanProps:{children:n?void 0:"enter text..."}})}),Object(h.jsx)(X,{onClick:function(){ne("editable-span-value",n)},children:"save"}),Object(h.jsx)(X,{onClick:function(){a(re("editable-span-value",""))},children:"restore"}),Object(h.jsx)("hr",{}),Object(h.jsx)("hr",{})]})};var ce=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(y,{}),Object(h.jsx)(T,{}),Object(h.jsx)(z,{}),Object(h.jsx)(ae,{})]})};var se=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:"404"}),Object(h.jsx)("div",{children:"Page not found!"}),Object(h.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},ie=n(2);var oe=function(){return Object(h.jsx)("div",{children:"Junior!"})};var le=function(){return Object(h.jsx)("div",{children:"JuniorPlus!"})},je="/pre-junior",ue="/junior+",de="/junior";var be=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(ie.d,{children:[Object(h.jsx)(ie.b,{path:"/",exact:!0,render:function(){return Object(h.jsx)(ie.a,{to:je})}}),Object(h.jsx)(ie.b,{path:je,render:function(){return Object(h.jsx)(ce,{})}}),Object(h.jsx)(ie.b,{path:ue,render:function(){return Object(h.jsx)(le,{})}}),Object(h.jsx)(ie.b,{path:de,render:function(){return Object(h.jsx)(oe,{})}}),Object(h.jsx)(ie.b,{render:function(){return Object(h.jsx)(se,{})}})]})})};var he=function(){return Object(h.jsxs)("div",{className:u.a.header,children:[Object(h.jsx)(l.b,{to:je,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(h.jsx)(l.b,{to:ue,className:u.a.link,activeClassName:u.a.active,children:"junior+"}),Object(h.jsx)(l.b,{to:de,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(h.jsx)("div",{className:u.a.block})]})};var Oe=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(he,{}),Object(h.jsx)(be,{})]})})};var xe=function(){return Object(h.jsx)("div",{className:o.a.App,children:Object(h.jsx)(Oe,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(xe,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.c3eea59c.chunk.js.map