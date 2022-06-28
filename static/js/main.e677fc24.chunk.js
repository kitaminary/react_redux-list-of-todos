(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(10),r=n.n(c),s=n(6),a=n(18),u=n(11),o=n(5),i=n(13),l=n(17),d="LOADING_TODOS",j="SHOW_USER",b="DELETE_TODO",h=function(e){return{type:j,payload:e}},p={todos:[],user:null},f=Object(i.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(o.a)(Object(o.a)({},e),{},{todos:[].concat(Object(u.a)(e.todos),Object(u.a)(t.payload))});case j:return Object(o.a)(Object(o.a)({},e),{},{user:t.payload});case b:return Object(o.a)(Object(o.a)({},e),{},{todos:Object(u.a)(e.todos).filter((function(e){return e.id!==t.payload}))});default:return e}}),Object(l.composeWithDevTools)()),O=f,m=(n(26),n(7)),x=n(4),v=n(3),y=n.n(v),w=n(0),N=n(15),_=n.n(N),k="https://mate.academy/students-api",g=function(){var e=Object(m.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/todos"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(m.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/users/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(m.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/todos/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=(n(28),function(e){return e.user}),D=n(1),I=function(){var e=Object(s.c)(C),t=Object(s.b)();return Object(D.jsx)("div",{className:"box is-two-thirds column m-4",children:Object(D.jsx)("div",{className:"user__block box is-half m-auto",children:Object(D.jsx)("div",{className:"user",children:null===e?Object(D.jsx)("p",{children:"No user selected"}):Object(D.jsx)(D.Fragment,{children:e&&Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)("h2",{className:"user__title",children:Object(D.jsx)("span",{children:"Selected user: ".concat(null===e||void 0===e?void 0:e.id)})}),Object(D.jsx)("h3",{className:"user__username",children:e.username}),Object(D.jsx)("h2",{className:"user__name","data-cy":"userName",children:e.name}),Object(D.jsx)("p",{className:"user__email",children:e.email}),Object(D.jsx)("p",{className:"user__phone",children:e.phone}),Object(D.jsx)("button",{className:"user__clear button is-info is-rounded",type:"button",onClick:function(){return t(h(null))},children:"Clear"})]})})})})})},T=function(){var e,t=Object(w.useState)(""),n=Object(x.a)(t,2),c=n[0],r=n[1],a=Object(w.useState)(""),u=Object(x.a)(a,2),o=u[0],i=u[1],l=Object(s.b)(),j=Object(s.c)(function(e){return function(t){return t.todos.filter((function(t){return t.title.toLowerCase().includes(e)}))}}(c)),p=Object(s.c)(C),f=function(){var e=Object(m.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,l({type:d,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(m.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:n=e.sent,l(h(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(m.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return e.next=4,l({type:b,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(w.useEffect)((function(){f()}),[]),Object(D.jsxs)("div",{className:"content columns",children:[Object(D.jsxs)("div",{className:"column is-three-fifths m-4",children:[Object(D.jsx)("h1",{className:"m-4",children:"Redux list of todos"}),Object(D.jsx)("input",{type:"text",className:"column input is-three-thirds m-4",placeholder:"Search by title",value:c,onChange:function(e){return r(e.target.value)}}),Object(D.jsxs)("select",{name:"user",id:"user",className:"select",value:o,onChange:function(e){return i(e.target.value)},children:[Object(D.jsx)("option",{value:"",children:"Show all"}),Object(D.jsx)("option",{value:"active",children:"Show active"}),Object(D.jsx)("option",{value:"completed",children:"Show completed"})]}),Object(D.jsx)("ul",{children:(e=j,"active"===o?e.filter((function(e){return!1===e.completed})):"completed"===o?e.filter((function(e){return!0===e.completed})):e).map((function(e){return Object(D.jsxs)("li",{className:_()("box","column","is-flex","is-three-thirds","is-justify-content-space-between","has-background-success-light",{"has-background-danger-light":!e.completed}),children:[Object(D.jsx)("input",{type:"checkbox",readOnly:!0,checked:e.completed}),Object(D.jsx)("p",{children:e.title}),Object(D.jsxs)("div",{className:"button_box",children:[Object(D.jsx)("button",{type:"button",className:"button is-danger",onClick:function(){return v(e.id)},children:"delete"}),Object(D.jsx)("button",{type:"button",className:_()("button",{"is-info":(null===p||void 0===p?void 0:p.id)===e.userId}),onClick:function(){return O(e.userId)},children:"User - ".concat(e.userId)})]})]},e.id)}))})]}),Object(D.jsx)(I,{})]})},L=function(){return Object(D.jsx)("div",{children:Object(D.jsx)(T,{})})},F=function(){return Object(D.jsx)(s.a,{store:O,children:Object(D.jsx)(a.a,{children:Object(D.jsx)(L,{})})})};r.a.render(Object(D.jsx)(F,{}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.e677fc24.chunk.js.map