(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[8],{305:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n(26),a=n.n(r),s=n(42),l=n(15),c=n(105),o=n(104),i=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s,i;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r({type:l.a.LOADING_REQUEST,payload:{loading:!0}}),n.next=3,c.a(e);case 3:!0===(s=n.sent).success?(i={current:s.result.user,loading:!1,isLoggedIn:!0},o.a.set("auth",i),r({type:l.a.LOGIN_SUCCESS,payload:s.result.user}),t.push("/")):r({type:l.a.FAILED_REQUEST,payload:s});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},u=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.b(),n({type:l.a.LOGOUT_SUCCESS}),e.push("/login");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},306:function(e,t,n){"use strict";n(0);var r=n(285),a=n(2);t.a=function(){var e={start:{y:"0%"},end:{y:"100%"}},t={duration:.4,yoyo:1/0,ease:"easeInOut"};return Object(a.jsxs)(r.a.div,{className:"absolute flex flex-row left-0 pl-10 pb-2 items-center justify-center gap-1",variants:{start:{transition:{staggerChildren:.2}},end:{transition:{staggerChildren:.2}}},initial:"start",animate:"end",children:[Object(a.jsx)(r.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t}),Object(a.jsx)(r.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t}),Object(a.jsx)(r.a.div,{className:"w-2 h-2 bg-white rounded-full",variants:e,transition:t})]})}},355:function(e,t,n){"use strict";n.r(t);var r=n(91),a=n(12),s=n(61),l=n(0),c=n(37),o=n(305),i=n(34),u=n(103),d=n.p+"static/media/6.27b95fc4.png",b=n(306),f=n(30),x=n(2);t.default=function(){var e=Object(f.g)(),t=Object(l.useState)({username:"",email:"",password:""}),n=Object(s.a)(t,2),g=n[0],p=n[1],m=Object(i.b)(),j=Object(i.c)(u.b).loading,h=function(e){p(Object(a.a)(Object(a.a)({},g),{},Object(r.a)({},e.target.name,e.target.value)))};return Object(x.jsxs)("div",{className:"lg:flex flex-row h-screen bg-gradient-to-r from-green-400 to-blue-500 p-10",children:[Object(x.jsx)("div",{className:"lg:flex bg-gradient-to-r from-blue-500 to-blue-800 lg:w-3/5 rounded-l-lg hidden z-0"}),Object(x.jsxs)("div",{className:"flex flex-col justify-between bg-white w-full lg:w-3/5 h-full rounded-lg xl:rounded-r-lg p-10 lg:p-20 z-10",children:[Object(x.jsx)("img",{src:d,alt:"",className:"h-20 w-20"}),Object(x.jsx)("h1",{className:"text-xl font-bold text-center text-gray-700",children:"\xa1Bienvenido de nuevo!"}),Object(x.jsx)("div",{className:"flex flex-col gap-5",children:Object(x.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m(Object(o.a)(g,e))},className:"flex flex-col  w-full gap-5",children:[Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Nombre de Usuario"}),Object(x.jsx)("input",{name:"username",type:"text",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Ingresa tu usuario",onChange:h})]}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Correo Electr\xf3nico"}),Object(x.jsx)("input",{name:"email",type:"email",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Ingresa tu correo",onChange:h})]}),Object(x.jsxs)("div",{className:"flex flex-col",children:[Object(x.jsx)("label",{className:"text-xs font-medium text-gray-600",children:"Contrase\xf1a"}),Object(x.jsx)("input",{name:"password",type:"password",required:!0,className:"appearance-none rounded-none relative block w-full py-2 pl-2 border-b-2 border-gray-300 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Ingresa tu contrase\xf1a",onChange:h})]}),Object(x.jsx)("div",{className:"flex flex-row justify-between items-center gap-10 lg:gap-28",children:Object(x.jsxs)("button",{type:"submit",className:"group relative w-full h-10 flex flex-row items-center justify-center border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[j?Object(x.jsx)(b.a,{}):Object(x.jsx)("span",{className:"absolute left-0 inset-y-0 flex items-center pl-3",children:Object(x.jsx)(c.h,{className:"h-5 w-5 text-blue-600 group-hover:text-blue-400","aria-hidden":"true"})}),"Iniciar Sesi\xf3n"]})})]})}),Object(x.jsx)("h1",{className:"font-light text-xs text-gray-400",children:"version 1.027820211036"})]})]})}}}]);
//# sourceMappingURL=8.a0761bd5.chunk.js.map