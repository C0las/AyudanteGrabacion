(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[12],{327:function(e,t,s){"use strict";s.r(t);var n=s(89),c=s(0),a=s(40),r=s(182),l=s(289),i=s(284),o=s(2);t.default=function(){var e=Object(c.useState)("Lunes"),t=Object(n.a)(e,2),s=t[0],d=t[1],j=Object(a.c)((function(e){return e.allAssistants.assistants})),x=Object(a.c)((function(e){return e.allAssistants.loading}));console.log(j.map((function(e){return e.name})));var u=new Date,b=Object(r.a)(u,"dd MMM, yyyy",{locale:l.a});return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"hidden lg:flex lg:flex-col bg-white border-l-2 border-gray-200 gap-3 p-4",children:[Object(o.jsxs)("div",{className:"flex items-center justify-between",children:[Object(o.jsx)("span",{className:"text-lg text-gray-800 font-medium",children:"Ayudantes"}),Object(o.jsxs)("div",{class:"relative",children:[Object(o.jsxs)("select",{onClick:function(e){var t=e.target.value;d(t)},class:"block appearance-none w-auto bg-gray-200 border border-gray-200 text-gray-700 py-2 px-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-state",children:[Object(o.jsx)("option",{children:"Lunes"}),Object(o.jsx)("option",{children:"Martes"}),Object(o.jsx)("option",{children:"Miercoles"}),Object(o.jsx)("option",{children:"Jueves"}),Object(o.jsx)("option",{children:"Viernes"})]}),Object(o.jsx)("div",{class:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",children:Object(o.jsx)("svg",{class:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:Object(o.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})})})]})]}),Object(o.jsxs)("span",{className:"text-xs font-medium",children:["Hoy, ",b]}),Object(o.jsx)("div",{className:"flex flex-col gap-3 overflow-auto",children:j.map((function(e){return function(e,t){var n=e.rut.replace(/(\d{2})(\d{3})(\d{3})/,"$1.$2.$3"),c=e.fono.replace(/(\d{1})/,"+56 $1 ");return Object(o.jsx)(o.Fragment,{children:x?"Cargando...":Object(o.jsxs)(i.a.div,{initial:{opacity:0},animate:{opacity:[0,1]},transition:{duration:.5,delay:t/5},className:"flex items-center justify-center border-2 border-gray-200 shadow-md w-52 rounded-lg gap-4 p-3",children:[Object(o.jsx)("div",{className:"flex items-center justify-center rounded-full w-12 h-12 bg-primary",children:Object(o.jsx)("span",{className:"text-lg font-bold text-white",children:function(e){return e.name.replace(/[a-z]/g,"").substr(-3,2)+e.lastName.replace(/[a-z]/g,"").substr(-3,2)}(e)})}),Object(o.jsxs)("div",{className:"flex flex-col gap-1",children:[Object(o.jsx)("span",{className:"text-sm font-semibold mb-1",children:e.name}),Object(o.jsx)("span",{className:"text-xs font-normal",children:n}),Object(o.jsx)("span",{className:"text-xs font-normal",children:c}),e.daysAvailable.filter((function(e){return e.day.includes(s)})).map((function(e,t){return Object(o.jsxs)("div",{className:"flex flex-row w-full items-center gap-1 text-xs",children:[Object(o.jsx)("spam",{className:"flex items-center justify-center bg-blue-500 text-white rounded-sm h-4 w-12",children:e.hour[0]}),Object(o.jsx)("spam",{className:"".concat(void 0===e.hour[0]?"hidden":""," flex items-center justify-center bg-yellow-600 text-white rounded-sm h-4 w-10"),children:e.hour[1]})]})}))]})]})})}(e)}))})]})})}}}]);
//# sourceMappingURL=12.708c7bde.chunk.js.map