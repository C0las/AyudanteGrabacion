(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[10],{317:function(e,t,n){"use strict";n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return d}));var a=n(167),c=n(309),s=n(105),l=function(e){return e.assistant},r=Object(s.a)((function(e){return e.allAssistants.assistants}),(function(e){return e.allAssistants.currentFilter}),(function(e,t){var n=e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return""===t?e:n})),i=Object(s.a)((function(e){return e.allScheduler.scheduler}),(function(e){return e.auth.current}),(function(e,t){return e.filter((function(e){return e.assistant.includes(t.assistant)}))})),o=function(e){return Object(s.a)((function(e){return e.allAssistants.currentDay}),(function(t){return e.filter((function(e){return Object(a.a)(new Date(e.startDate),"EEEE",{locale:c.a}).replace(/^\w/,(function(e){return e.toUpperCase()})).includes(t)}))}))},u=Object(s.a)([l],(function(e){return e.assistant})),d=Object(s.a)([l],(function(e){var t;return null===(t=e.assistant.daysAvailable)||void 0===t?void 0:t.length}))},374:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return _}));var a,c,s,l=n(74),r=n(18),i=n(0),o=n.n(i),u=n(45),d=n(29),b=n(166),j=n(126),x=n(190),f=n(78),m=n(48);!function(e){e[e.Open=0]="Open",e[e.Closed=1]="Closed"}(c||(c={})),function(e){e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel"}(s||(s={}));var O=((a={})[s.ToggleDisclosure]=function(e){var t;return Object(r.b)({},e,{disclosureState:Object(u.a)(e.disclosureState,(t={},t[c.Open]=c.Closed,t[c.Closed]=c.Open,t))})},a[s.CloseDisclosure]=function(e){return e.disclosureState===c.Closed?e:Object(r.b)({},e,{disclosureState:c.Closed})},a[s.LinkPanel]=function(e){return!0===e.linkedPanel?e:Object(r.b)({},e,{linkedPanel:!0})},a[s.UnlinkPanel]=function(e){return!1===e.linkedPanel?e:Object(r.b)({},e,{linkedPanel:!1})},a[s.SetButtonId]=function(e,t){return e.buttonId===t.buttonId?e:Object(r.b)({},e,{buttonId:t.buttonId})},a[s.SetPanelId]=function(e,t){return e.panelId===t.panelId?e:Object(r.b)({},e,{panelId:t.panelId})},a),p=Object(i.createContext)(null);function h(e){var t=Object(i.useContext)(p);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+D.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,h),n}return t}p.displayName="DisclosureContext";var v=Object(i.createContext)(null);function g(e){var t=Object(i.useContext)(v);if(null===t){var n=new Error("<"+e+" /> is missing a parent <"+D.name+" /> component.");throw Error.captureStackTrace&&Error.captureStackTrace(n,g),n}return t}v.displayName="DisclosureAPIContext";var y=Object(i.createContext)(null);function N(e,t){return Object(u.a)(t.type,O,e,t)}y.displayName="DisclosurePanelContext";var w=i.Fragment;function D(e){var t,n=e.defaultOpen,a=void 0!==n&&n,l=Object(r.c)(e,["defaultOpen"]),b="headlessui-disclosure-button-"+Object(f.a)(),j="headlessui-disclosure-panel-"+Object(f.a)(),x=Object(i.useReducer)(N,{disclosureState:a?c.Open:c.Closed,linkedPanel:!1,buttonId:b,panelId:j}),O=x[0].disclosureState,h=x[1];Object(i.useEffect)((function(){return h({type:s.SetButtonId,buttonId:b})}),[b,h]),Object(i.useEffect)((function(){return h({type:s.SetPanelId,panelId:j})}),[j,h]);var g=Object(i.useCallback)((function(e){h({type:s.CloseDisclosure});var t=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:document.getElementById(b):document.getElementById(b);null==t||t.focus()}),[h,b]),y=Object(i.useMemo)((function(){return{close:g}}),[g]),D=Object(i.useMemo)((function(){return{open:O===c.Open,close:g}}),[O,g]);return o.a.createElement(p.Provider,{value:x},o.a.createElement(v.Provider,{value:y},o.a.createElement(m.a,{value:Object(u.a)(O,(t={},t[c.Open]=m.b.Open,t[c.Closed]=m.b.Closed,t))},Object(d.d)({props:l,slot:D,defaultTag:w,name:"Disclosure"}))))}var S=Object(d.c)((function e(t,n){var a=h([D.name,e.name].join(".")),l=a[0],o=a[1],u=Object(b.a)(n),f=Object(i.useContext)(y),m=null!==f&&f===l.panelId,O=Object(i.useCallback)((function(e){var t;if(m){if(l.disclosureState===c.Closed)return;switch(e.key){case j.a.Space:case j.a.Enter:e.preventDefault(),e.stopPropagation(),o({type:s.ToggleDisclosure}),null==(t=document.getElementById(l.buttonId))||t.focus()}}else switch(e.key){case j.a.Space:case j.a.Enter:e.preventDefault(),e.stopPropagation(),o({type:s.ToggleDisclosure})}}),[o,m,l.disclosureState]),p=Object(i.useCallback)((function(e){switch(e.key){case j.a.Space:e.preventDefault()}}),[]),v=Object(i.useCallback)((function(e){var n;Object(x.a)(e.currentTarget)||(t.disabled||(m?(o({type:s.ToggleDisclosure}),null==(n=document.getElementById(l.buttonId))||n.focus()):o({type:s.ToggleDisclosure})))}),[o,t.disabled,l.buttonId,m]),g=Object(i.useMemo)((function(){return{open:l.disclosureState===c.Open}}),[l]),N=t,w=m?{type:"button",onKeyDown:O,onClick:v}:{ref:u,id:l.buttonId,type:"button","aria-expanded":t.disabled?void 0:l.disclosureState===c.Open,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:O,onKeyUp:p,onClick:v};return Object(d.d)({props:Object(r.b)({},N,w),slot:g,defaultTag:"button",name:"Disclosure.Button"})})),C=d.a.RenderStrategy|d.a.Static,k=Object(d.c)((function e(t,n){var a=h([D.name,e.name].join(".")),l=a[0],u=a[1],j=g([D.name,e.name].join(".")).close,x=Object(b.a)(n,(function(){l.linkedPanel||u({type:s.LinkPanel})})),f=Object(m.c)(),O=null!==f?f===m.b.Open:l.disclosureState===c.Open;Object(i.useEffect)((function(){return function(){return u({type:s.UnlinkPanel})}}),[u]),Object(i.useEffect)((function(){var e;l.disclosureState!==c.Closed||null!=(e=t.unmount)&&!e||u({type:s.UnlinkPanel})}),[l.disclosureState,t.unmount,u]);var p=Object(i.useMemo)((function(){return{open:l.disclosureState===c.Open,close:j}}),[l,j]),v={ref:x,id:l.panelId},N=t;return o.a.createElement(y.Provider,{value:l.panelId},Object(d.d)({props:Object(r.b)({},N,v),slot:p,defaultTag:"div",features:C,visible:O,name:"Disclosure.Panel"}))}));D.Button=S,D.Panel=k;var E=n(50),I=n(167),P=n(309),T=n(41),A=n(37),M=n.n(A),H=n(63),B=n(80),L=n(16),R=function(){var e=Object(H.a)(M.a.mark((function e(t){var n;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L.a.LOADING_REPORTS,payload:{loading:!0}}),e.prev=1,e.next=4,B.a.get("report").then((function(e){return e.data}));case 4:n=e.sent,t({type:L.a.FETCH_REPORTS,payload:n.reverse()}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),U=(n(317),n(159)),F=n(162),K=n(2);function _(){var e=Object(T.b)(),t=Object(i.useState)(0),n=Object(l.a)(t,2),a=n[0],c=n[1],s=Object(T.c)((function(e){var t;return null===(t=e.allReports)||void 0===t?void 0:t.reports})),r=Object(T.c)((function(e){var t;return null===(t=e.allScheduler)||void 0===t?void 0:t.scheduler})),o=s.slice(a,a+10),u=s.length;return Object(i.useEffect)((function(){e(R),e(U.a)}),[e]),Object(K.jsxs)("div",{className:"flex flex-col p-10 gap-5 h-screen w-full bg-white ",children:[Object(K.jsxs)("div",{className:"flex flex-row items-baseline w-full pl-5 pr-5 gap-3",children:[Object(K.jsx)("h1",{className:"text-2xl text-gray-700 font-semibold",children:"REPORTES"}),Object(K.jsxs)("h1",{className:"align-text-bottom text-sm text-gray-400 font-normal",children:[a+o.length," / ",u," Total"]}),0===a?Object(K.jsx)("button",{disabled:"true",className:"text-xs text-white bg-blue-600 rounded-md p-1 opacity-50",onClick:function(){return c(a-10)},children:"Atras"}):Object(K.jsx)("button",{className:"text-xs text-white bg-blue-600 rounded-md p-1",onClick:function(){return c(a-10)},children:"Atras"}),a+o.length===u?Object(K.jsx)("button",{disabled:!0,className:"text-xs text-white bg-blue-600 rounded-md p-1 opacity-50",onClick:function(){return c(a+10)},children:"Siguiente"}):Object(K.jsx)("button",{className:"text-xs text-white bg-blue-600 rounded-md p-1",onClick:function(){return c(a+10)},children:"Siguiente"})]}),Object(K.jsxs)("div",{className:"grid grid-cols-5 justify-items-center w-full pl-5 pr-5 text-xs font-medium  text-gray-600 opacity-50",children:[Object(K.jsx)("h2",{children:"NOMBRE AYUDANTE"}),Object(K.jsx)("h2",{children:"MOTIVO"}),Object(K.jsx)("h2",{children:"CLASE"}),Object(K.jsx)("h2",{children:"FECHA"}),Object(K.jsx)("span",{className:"h-4 w-4"})]}),Object(K.jsx)("div",{className:"flex flex-col gap-3 w-full overflow-auto",children:o.map((function(e){var t,n,a,c,s,l,i=Object(I.a)(new Date(e.createdAt),"dd/MM/yyyy HH:mm"),o=Object(I.a)(new Date(e.createdAt),"dd MMM, yyyy",{locale:P.a}),u=Object(I.a)(new Date(e.createdAt),"HH:mm"),d=e.observacion||"Sin Observaciones",b=r.filter((function(t){return t._id.includes(e.clase)})).map((function(e){return{title:e.title,startDate:Object(I.a)(new Date(e.startDate),"HH:mm"),endDate:Object(I.a)(new Date(e.endDate),"HH:mm"),teacher:e.teacher,school:e.school,departament:e.departament}})),j=null===(t=b[0])||void 0===t?void 0:t.title,x=null===(n=b[0])||void 0===n?void 0:n.startDate,f=null===(a=b[0])||void 0===a?void 0:a.endDate,m=null===(c=b[0])||void 0===c?void 0:c.teacher,O=null===(s=b[0])||void 0===s?void 0:s.school,p=null===(l=b[0])||void 0===l?void 0:l.departament;return Object(K.jsx)("div",{className:"w-full bg-white rounded-2xl shadow-md border border-gray-300 hover:bg-gray-100 transition duration-500 ease-in-out",children:Object(K.jsx)(D,{children:function(t){var n=t.open;return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(D.Button,{className:"grid grid-cols-5 justify-items-center text-gray-600 w-full p-5 text-xs font-medium",children:[Object(K.jsx)("h2",{children:e.name}),Object(K.jsx)("h2",{children:e.motivo}),Object(K.jsxs)("h2",{children:[j," ",x," - ",f]}),Object(K.jsx)("h2",{children:i}),o===Object(I.a)(new Date,"dd MMM, yyyy",{locale:P.a})&&Object(K.jsx)("h2",{className:"absolute text-white right-0 mr-24 bg-yellow-500 rounded-md p-1",children:"Nuevo"}),Object(K.jsx)(E.b,{className:"".concat(n?"transform rotate-180":""," w-5 h-5 text-blue-700")})]}),Object(K.jsx)(D.Panel,{className:" text-gray-500 pl-5 pr-5",children:Object(K.jsxs)("div",{className:"flex flex-row justify-between items-start border-t border-gray-200 p-5",children:[Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Detalle de la clase:"}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row text-xs font-medium text-gray-500",children:[x," - ",f]}),Object(K.jsx)("h2",{className:"text-sm font-medium text-gray-700",children:O}),Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-500",children:p})]}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)(F.a,{className:"h-3 w-3 text-gray-500"}),Object(K.jsx)("h1",{className:"text-xs font-medium text-gray-500",children:j})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)(F.e,{className:"h-3 w-3 text-gray-500"}),Object(K.jsx)("h1",{className:"text-xs font-medium text-gray-500",children:m})]})]})]}),Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Detalle del reporte:"}),Object(K.jsxs)("div",{className:"flex flex-col mt-2",children:[Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Dia:"}),Object(K.jsx)("h2",{className:"text-xs font-medium",children:o})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Hora:"}),Object(K.jsx)("h2",{className:"text-xs font-medium",children:u})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium",children:"Ayudante:"}),Object(K.jsx)("h2",{className:"text-xs font-medium ",children:e.name})]}),Object(K.jsxs)("div",{className:"flex flex-row items-center gap-2 mt-2",children:[Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-700",children:"Alumnos Presenciales:"}),Object(K.jsx)("h2",{className:"text-xs font-medium text-gray-700",children:e.addstudents})]})]})]}),Object(K.jsxs)("div",{className:"flex flex-col",children:[Object(K.jsx)("h1",{className:"font-semibold text-base text-gray-800",children:"Observaciones:"}),Object(K.jsx)("div",{className:"flex flex-col mt-2",children:Object(K.jsx)("p",{className:"font-medium text-xs",children:d})})]})]})})]})}})})}))})]})}}}]);
//# sourceMappingURL=10.30dc6db1.chunk.js.map