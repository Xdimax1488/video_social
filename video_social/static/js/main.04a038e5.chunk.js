(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(a,e,c){},35:function(a,e,c){},36:function(a,e,c){},61:function(a,e,c){},62:function(a,e,c){},63:function(a,e,c){},64:function(a,e,c){"use strict";c.r(e);var t=c(1),s=c.n(t),A=c(29),n=c.n(A),i=(c(35),c(36),c(11)),r=c(2),l=c(8),j=c(9),d=c.n(j),Q=(c(17),c(0));var o=function(){var a=Object(t.useState)([]),e=Object(l.a)(a,2),c=e[0],s=e[1],A=Object(t.useState)(null),n=Object(l.a)(A,2),r=n[0],j=n[1];return Object(t.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(a){s(a.data)}))}),[]),Object(Q.jsx)("div",{className:"category__inner",children:c.map((function(a){return Object(Q.jsx)(i.b,{className:r===a.id?"btn_category activ":"btn_category",to:{pathname:"/category/".concat(a.id,"/"),fromDashboard:!1},onClick:function(){return j(a.id)},children:a.name})}))})};c(61);var m=function(){return Object(Q.jsxs)("div",{className:"header",children:[Object(Q.jsx)("div",{className:"conteiner",children:Object(Q.jsxs)("div",{className:"header__inner",children:[Object(Q.jsx)("div",{className:"logo",children:Object(Q.jsxs)("a",{href:"/",children:["My",Object(Q.jsx)("span",{children:"Tube"})]})}),Object(Q.jsx)("div",{className:"serch_form",children:Object(Q.jsxs)("form",{action:"",children:[Object(Q.jsx)("input",{type:"text",placeholder:"serch"}),Object(Q.jsx)("button",{children:"9"})]})}),Object(Q.jsx)("div",{className:"header__nav",children:Object(Q.jsxs)("ul",{children:[Object(Q.jsxs)("li",{children:[Object(Q.jsx)("span",{children:"dima"}),Object(Q.jsx)("a",{href:"{% url 'account_logout' %}",class:"nav__link",children:"\u0412\u044b\u0445\u043e\u0434"}),Object(Q.jsx)("a",{className:"nav__link",href:"{% url 'account_login' %}",children:"\u0412\u0445\u043e\u0434"}),Object(Q.jsx)("a",{className:"nav__link",href:"{% url 'account_signup' %}",children:"\u0420\u0435\u0433\u0435\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(Q.jsx)("li",{className:"nav__link-img",children:Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)("img",{src:"",alt:""})})})]})})]})}),Object(Q.jsx)("div",{className:"conteiner__category",children:Object(Q.jsx)(o,{})})]})};c(62);var x=function(){var a=Object(t.useState)([]),e=Object(l.a)(a,2),c=e[0],s=e[1];return Object(t.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/videos"}).then((function(a){s(a.data)}))}),[]),Object(Q.jsx)("div",{className:"content",children:Object(Q.jsx)("div",{className:"conteiner__category",children:Object(Q.jsx)("div",{className:"videos",children:c.map((function(a){return Object(Q.jsx)("div",{className:"video__col",children:Object(Q.jsx)("a",{href:"",children:Object(Q.jsxs)("div",{className:"video",children:[Object(Q.jsx)("img",{className:"video__img",src:a.preview,alt:""}),Object(Q.jsxs)("div",{className:"video__content",children:[Object(Q.jsx)("div",{className:"video__user",children:Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(Q.jsxs)("div",{className:"video__tittle",children:[a.name,Object(Q.jsx)("div",{className:"user__name",children:"user__name"}),Object(Q.jsx)("div",{className:"video__date",children:a.published})]})]})]})})})}))})})})};c(63);var h=function(a){var e=a.match,c=Object(t.useState)([]),s=Object(l.a)(c,2),A=(s[0],s[1]),n=Object(t.useState)([]),i=Object(l.a)(n,2),r=i[0],j=i[1],o=e.params.id;return Object(t.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(o,"/")}).then((function(a){A(a.data),j(a.data.videos)}))}),[o]),Object(Q.jsx)("div",{className:"content",children:Object(Q.jsx)("div",{className:"conteiner__category",children:Object(Q.jsx)("div",{className:"videos",children:r.map((function(a){return Object(Q.jsx)("div",{className:"video__col",children:Object(Q.jsx)("a",{href:"",children:Object(Q.jsxs)("div",{className:"video",children:[Object(Q.jsx)("img",{className:"video__img",src:a.preview,alt:""}),Object(Q.jsxs)("div",{className:"video__content",children:[Object(Q.jsx)("div",{className:"video__user",children:Object(Q.jsx)("a",{href:"#",children:Object(Q.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(Q.jsxs)("div",{className:"video__tittle",children:[a.name,Object(Q.jsx)("div",{className:"user__name",children:"user__name"}),Object(Q.jsx)("div",{className:"video__date",children:a.published})]})]})]})})})}))})})})};var g=function(a){var e=a.match,c=Object(t.useState)([]),s=Object(l.a)(c,2),A=s[0],n=s[1],i=e.params.id;return Object(t.useEffect)((function(){d()({method:"GET",url:"http://127.0.0.1:8000/api/videos/".concat(i,"/")}).then((function(a){n(a.data)}))}),[i]),Object(Q.jsx)("div",{className:"recipdetail",children:Object(Q.jsxs)("div",{className:"abut__inner",children:[Object(Q.jsx)("div",{className:"abut__tittle",children:A.name}),Object(Q.jsx)("div",{className:"abut__image",children:Object(Q.jsx)("img",{src:"#",alt:"abut__image"})}),Object(Q.jsx)("div",{className:"abut__description"})]})})};var N=function(){return Object(Q.jsx)("div",{className:"App",children:Object(Q.jsxs)(i.a,{children:[Object(Q.jsx)(m,{}),Object(Q.jsxs)(r.c,{children:[Object(Q.jsx)(r.a,{path:"/",exact:!0,component:x}),Object(Q.jsx)(r.a,{path:"/category/:id",exact:!0,component:h}),Object(Q.jsx)(r.a,{path:"/videos/:id",exact:!0,component:g})]})]})})},E=function(a){a&&a instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(e){var c=e.getCLS,t=e.getFID,s=e.getFCP,A=e.getLCP,n=e.getTTFB;c(a),t(a),s(a),A(a),n(a)}))};n.a.render(Object(Q.jsx)(s.a.StrictMode,{children:Object(Q.jsx)(N,{})}),document.getElementById("root")),E()}},[[64,1,2]]]);
//# sourceMappingURL=main.04a038e5.chunk.js.map