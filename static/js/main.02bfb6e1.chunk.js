(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a(34)},24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(17),m=a.n(r),c=(a(24),a(2)),o=a(6),u=a(9),i=a.n(u)()(function(e){var t=(0,e.useLazy)(function(){return fetch("https://dummy.restapiexample.com/api/v1/employees").then(function(e){return e.json()})});return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"id"),l.a.createElement("td",null,"employee_name"),l.a.createElement("td",null,"employee_salary"),l.a.createElement("td",null,"employee_age"),l.a.createElement("td",null,"profile_image"))),l.a.createElement("tbody",null,t.map(function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,l.a.createElement(o.b,{to:"/employee/".concat(e.id)},e.id)),l.a.createElement("td",null,e.employee_name),l.a.createElement("td",null,e.employee_salary),l.a.createElement("td",null,e.employee_age),l.a.createElement("td",null,e.profile_image))})))}),p=Object(u.createUseLazy)(),E=p.useLazy,d=p.purge,y=Object(c.f)(function(e){var t=e.match.params.id,a=E(function(){return fetch("https://dummy.restapiexample.com/api/v1/employee/".concat(t)).then(function(e){return e.json()})},[t]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("td",null,"id"),l.a.createElement("td",null,"employee_name"),l.a.createElement("td",null,"employee_salary"),l.a.createElement("td",null,"employee_age"),l.a.createElement("td",null,"profile_image"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,a.id),l.a.createElement("td",null,a.employee_name),l.a.createElement("td",null,a.employee_salary),l.a.createElement("td",null,a.employee_age),l.a.createElement("td",null,a.profile_image)))),l.a.createElement("input",{type:"button",onClick:d,name:"purge",value:"purge"}))}),s=function(){return l.a.createElement("div",null,"Home")},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(o.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(o.b,{to:"/employees"},"Employees"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));m.a.render(l.a.createElement(function(){return l.a.createElement(o.a,{basename:"/".concat("/react-with-lazy-example")},l.a.createElement(f,null),l.a.createElement(c.c,null,l.a.createElement(l.a.Suspense,{fallback:l.a.createElement("div",null,"...loading")},l.a.createElement(c.a,{path:"/",component:s}),l.a.createElement(c.a,{path:"/employees",component:i,exact:!0}),l.a.createElement(c.a,{path:"/employee/:id",component:y,exact:!0}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.02bfb6e1.chunk.js.map