(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[14],{354:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var c,a,l,s=n(89),r=n(18),o=n(0),i=n.n(o),d=n(45),u=n(28),b=n(144),j=n(114),x=n(169),m=n(76),f=n(48);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(a||(a={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(l||(l={}));var O=((c={})[l.ToggleDisclosure]=function(e){var t;return Object(r.b)({},e,{disclosureState:Object(d.a)(e.disclosureState,(t={},t[a.Open]=a.Closed,t[a.Closed]=a.Open,t))})},c[l.CloseDisclosure]=function(e){return e.disclosureState===a.Closed?e:Object(r.b)({},e,{disclosureState:a.Closed})},c[l.LinkPanel]=function(e){return!0===e.linkedPanel?e:Object(r.b)({},e,{linkedPanel:!0})},c[l.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:Object(r.b)({},e,{linkedPanel:!1})},c[l.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:Object(r.b)({},e,{buttonId:t.buttonId})},c[l.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:Object(r.b)({},e,{panelId:t.panelId})},c),p=Object(o.createContext)(null);function h(e){var t=Object(o.useContext)(p);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+S.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,h),n}return t}p.displayName="DisclosureContext";var v=Object(o.createContext)(null);function g(e){var t=Object(o.useContext)(v);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+S.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,g),n}return t}v.displayName="DisclosureAPIContext";var y=Object(o.createContext)(null);function N(e,t){return Object(d.a)(t.type,O,e,t)}y.displayName="DisclosurePanelContext";var w=o.Fragment;function S(e){var t,n=e.defaultOpen,c=void 0!==n&&n,s=Object(r.c)(e,["defaultOpen"]),b="headlessui-disclosure-button-"+Object(m.a)(),j="headlessui-disclosure-panel-"+Object(m.a)(),x=Object(o.useReducer)(N,{disclosureState:c?a.Open:a.Closed,linkedPanel:!1,buttonId:b,panelId:j}),O=x[0].disclosureState,h=x[1];Object(o.useEffect)((function(){return h({type:l.SetButtonId,buttonId:b})}),[b,h]),Object(o.useEffect)((function(){return h({type:l.SetPanelId,panelId:j})}),[j,h]);var g=Object(o.useCallback)((function(e){h({type:l.CloseDisclosure});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(b):document.getElementById(b);null==t||t.focus()}),[h,b]),y=Object(o.useMemo)((function(){return{close:g}}),[g]),S=Object(o.useMemo)((function(){return{open:O===a.Open,close:g}}),[O,g]);return i.a.createElement(p.Provider,{value:x},i.a.createElement(v.Provider,{value:y},i.a.createElement(f.a,{value:Object(d.a)(O,(t={},t[a.Open]=f.b.Open,t[a.Closed]=f.b.Closed,t))},Object(u.d)({props:s,slot:S,defaultTag:w,name:"Disclosure"}))))}var D=Object(u.c)((function e(t,n){var c=h([S.name,e.name].join(".")),s=c[0],i=c[1],d=Object(b.a)(n),m=Object(o.useContext)(y),f=null!==m&&m===s.panelId,O=Object(o.useCallback)((function(e){var t;if(f){if(s.disclosureState===a.Closed)return;switch(e.key){case j.a.Space:case j.a.Enter:e.preventDefault(),e.stopPropagation(),i({type:l.ToggleDisclosure}),null==(t=document.getElementById(s.buttonId))||t.focus()}}else switch(e.key){case j.a.Space:case j.a.Enter:e.preventDefault(),e.stopPropagation(),i({type:l.ToggleDisclosure})}}),[i,f,s.disclosureState]),p=Object(o.useCallback)((function(e){switch(e.key){case j.a.Space:e.preventDefault()}}),[]),v=Object(o.useCallback)((function(e){var n;Object(x.a)(e.currentTarget)||(t.disabled||(f?(i({type:l.ToggleDisclosure}),null==(n=document.getElementById(s.buttonId))||n.focus()):i({type:l.ToggleDisclosure})))}),[i,t.disabled,s.buttonId,f]),g=Object(o.useMemo)((function(){return{open:s.disclosureState===a.Open}}),[s]),N=t,w=f?{type:"button",onKeyDown:O,onClick:v}:{ref:d,id:s.buttonId,type:"button","aria-expanded":t.disabled?void 0:s.disclosureState===a.Open,"aria-controls":s.linkedPanel?s.panelId:void 0,onKeyDown:O,onKeyUp:p,onClick:v};return Object(u.d)({props:Object(r.b)({},N,w),slot:g,defaultTag:"button",name:"Disclosure.Button"})})),k=u.a.RenderStrategy|u.a.Static,C=Object(u.c)((function e(t,n){var c=h([S.name,e.name].join(".")),s=c[0],d=c[1],j=g([S.name,e.name].join(".")).close,x=Object(b.a)(n,(function(){s.linkedPanel||d({type:l.LinkPanel})})),m=Object(f.c)(),O=null!==m?m===f.b.Open:s.disclosureState===a.Open;Object(o.useEffect)((function(){return function(){return d({type:l.UnlinkPanel})}}),[d]),Object(o.useEffect)((function(){var e;s.disclosureState!==a.Closed||null!=(e=t.unmount)&&!e||d({type:l.UnlinkPanel})}),[s.disclosureState,t.unmount,d]);var p=Object(o.useMemo)((function(){return{open:s.disclosureState===a.Open,close:j}}),[s,j]),v={ref:x,id:s.panelId},N=t;return i.a.createElement(y.Provider,{value:s.panelId},Object(u.d)({props:Object(r.b)({},N,v),slot:p,defaultTag:"div",features:k,visible:O,name:"Disclosure.Panel"}))}));S.Button=D,S.Panel=C;var I=n(36),P=n(182),E=n(289),T=n(40),M=n(35),A=n.n(M),H=n(60),B=n(78),R=n(16),L=function(){var e=Object(H.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:R.a.LOADING_REPORTS,payload:{loading:!0}}),e.prev=1,e.next=4,B.a.get("report").then((function(e){return e.data}));case 4:n=e.sent,t({type:R.a.FETCH_REPORTS,payload:n.reverse()}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),U=n(150),F=n(140),K=n(2);function _(){var e=Object(T.b)(),t=Object(o.useState)(0),n=Object(s.a)(t,2),c=n[0],a=n[1],l=Object(T.c)((function(e){var t;return null===(t=e.allReports)||void 0===t?void 0:t.reports})),r=Object(T.c)((function(e){var t;return null===(t=e.allScheduler)||void 0===t?void 0:t.scheduler})),i=l.slice(c,c+10),d=l.length;return Object(o.useEffect)((function(){e(L),e(U.a)}),[e]),Object(K.jsxs)("div",{className:"flex flex-col p-10 gap-5 h-screen w-full ",children:[Object(K.jsxs)("div",{className:"flex flex-row items-baseline w-full pl-5 pr-5 gap-3",children:[Object(K.jsx)("h1",{className:"text-2xl text-gray-700 font-semibold",children:"REPORTES"}),Object(K.jsxs)("h1",{className:"align-text-bottom text-sm text-gray-400 font-normal",children:[c+i.length," / ",d," Total"]}),0===c?Object(K.jsx)("button",{disabled:"true",className:"text-xs text-white bg-blue-600 rounded-md p-1 opacity-50",onClick:function(){return a(c-10)},children:"Atras"}):Object(K.jsx)("button",{className:"text-xs text-white bg-blue-600 rounded-md p-1",onClick:function(){return a(c-10)},children:"Atras"}),c+i.length===d?Object(K.jsx)("button",{disabled:!0,className:"text-xs text-white bg-blue-600 rounded-md p-1 opacity-50",onClick:function(){return a(c+10)},children:"Siguiente"}):Object(K.jsx)("button",{className:"text-xs text-white bg-blue-600 rounded-md p-1",onClick:function(){return a(c+10)},children:"Siguiente"})]}),Object(K.jsxs)("div",{className:"grid grid-cols-5 justify-items-center w-full pl-5 pr-5 text-xs font-medium  text-gray-600 opacity-50",children:[Object(K.jsx)("h2",{children:"NOMBRE AYUDANTE"}),Object(K.jsx)("h2",{children:"MOTIVO"}),Object(K.jsx)("h2",{children:"CLASE"}),Object(K.jsx)("h2",{children:"FECHA"}),Object(K.jsx)("span",{className:"h-4 w-4"})]}),Object(K.jsx)("div",{className:"flex flex-col gap-3 w-full overflow-auto",children:i.map((function(e){var t,n,c,a,l,s,o=Object(P.a)(new Date(e.createdAt),"dd/MM/yyyy HH:mm"),i=Object(P.a)(new Date(e.createdAt),"dd MMM, yyyy",{locale:E.a}),d=Object(P.a)(new Date(e.createdAt),"HH:mm"),u=e.observacion||"Sin Observaciones",b=r.filter((function(t){return t._id.includes(e.clase)})).map((function(e){return{title:e.title,startDate:Object(P.a)(new Date(e.startDate),"HH:mm"),endDate:Object(P.a)(new Date(e.endDate),"HH:mm"),teacher:e.teacher,school:e.school,departament:e.departament}})),j=null===(t=b[0])||void 0===t?void 0:t.title,x=null===(n=b[0])||void 0===n?void 0:n.startDate,m=null===(c=b[0])||void 0===c?void 0:c.endDate,f=null===(a=b[0])||void 0===a?void 0:a.teacher,O=null===(l=b[0])||void 0===l?void 0:l.school,p=null===(s=b[0])||void 0===s?void 0:s.departament;return Object(K.jsx)("div",{className:"w-full bg-white rounded-2xl shadow-md border border-gray-300 hover:bg-gray-100 transition duration-500 ease-in-out",children:Object(K.jsx)(S,{children:function(t){var n=t.open;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(S.Button,{className:"grid grid-cols-5 justify-items-center text-gray-600 w-full p-5 text-xs font-medium",children:[Object(K.jsx)("h2",{children:e.name}),Object(K.jsx)("h2",{children:e.motivo}),Object(K.jsxs)("h2",{children:[j," ",x," - ",m]}),Object(K.jsx)("h2",{children:o}),i===Object(P.a)(new Date,"dd MMM, yyyy",{locale:E.a})&&Object(K.jsx)("h2",{className:"absolute text-white right-0 mr-24 bg-yellow-500 rounded-md p-1",children:"Nuevo"}),Object(K.jsx)(I.b,{className:"".concat(n?"transform rotate-180":""," w-5 h-5 text-blue-700")})]}),Object(K.jsx)(S.Panel,{className:" text-gray-500 pl-5 pr-5",children:Object(K.jsxs)("div",{className:"flex flex-row justify-between items-start border-t border-gray-200 p-5",children:[Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Detalle de la clase:"}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row text-xs font-medium text-gray-500",children:[x," - ",m]}),Object(K.jsx)("h2",{className:"text-sm font-medium text-gray-700",children:O}),Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-500",children:p})]}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)(F.a,{className:"h-3 w-3 text-gray-500"}),Object(K.jsx)("h1",{className:"text-xs font-medium text-gray-500",children:j})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)(F.e,{className:"h-3 w-3 text-gray-500"}),Object(K.jsx)("h1",{className:"text-xs font-medium text-gray-500",children:f})]})]})]}),Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Detalle del reporte:"}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Dia:"}),Object(K.jsx)("h2",{className:"text-xs font-medium",children:i})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Hora:"}),Object(K.jsx)("h2",{className:"text-xs font-medium",children:d})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Ayudante:"}),Object(K.jsx)("h2",{className:"text-xs font-medium ",children:e.name})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2 mt-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-700",children:"Alumnos Presenciales:"}),Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-700",children:e.addstudents})]})]})]}),Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Observaciones:"}),Object(K.jsx)("div",{className:"flex flex-col mt-2",children:Object(K.jsx)("p",{className:"font-medium text-xs",children:u})})]})]})})]})}})})}))})]})}}}]);
//# sourceMappingURL=14.cdb431dc.chunk.js.map