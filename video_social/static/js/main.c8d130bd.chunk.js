(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{23:function(e,c,n){},24:function(e,c,n){},43:function(e,c,n){},45:function(e,c,n){},46:function(e,c,n){"use strict";n.r(c);var t=n(2),s=n.n(t),r=n(15),a=n.n(r),i=(n(23),n(24),n(17)),j=n(16),l=n.n(j),d=(n(43),n(0));var h=function(){var e=Object(t.useState)([]),c=Object(i.a)(e,2),n=c[0],s=c[1];return Object(t.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){s(e.data)}))}),[]),Object(d.jsx)(d.Fragment,{children:n.map((function(e){return Object(d.jsx)("a",{href:"#",className:"btn_category",children:e.name})}))})};n(45);var o=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"conteiner",children:Object(d.jsxs)("div",{className:"header__inner",children:[Object(d.jsx)("div",{className:"logo",children:Object(d.jsxs)("a",{href:"/",children:["My",Object(d.jsx)("span",{children:"Tube"})]})}),Object(d.jsx)("div",{className:"serch_form",children:Object(d.jsxs)("form",{action:"",children:[Object(d.jsx)("input",{type:"text",placeholder:"serch"}),Object(d.jsx)("button",{children:"9"})]})}),Object(d.jsx)("div",{className:"header__nav",children:Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{children:"dima"}),Object(d.jsx)("a",{href:"{% url 'account_logout' %}",class:"nav__link",children:"\u0412\u044b\u0445\u043e\u0434"}),Object(d.jsx)("a",{className:"nav__link",href:"{% url 'account_login' %}",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("a",{className:"nav__link",href:"{% url 'account_signup' %}",children:"\u0420\u0435\u0433\u0435\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(d.jsx)("li",{className:"nav__link-img",children:Object(d.jsx)("a",{href:"#",children:Object(d.jsx)("img",{src:"",alt:""})})})]})})]})}),Object(d.jsx)("div",{className:"conteiner__category",children:Object(d.jsx)("div",{className:"category__inner",children:Object(d.jsx)(h,{})})})]})};var b=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("div",{children:Object(d.jsx)(o,{})})})},u=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(c){var n=c.getCLS,t=c.getFID,s=c.getFCP,r=c.getLCP,a=c.getTTFB;n(e),t(e),s(e),r(e),a(e)}))};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(b,{})}),document.getElementById("root")),u()}},[[46,1,2]]]);
//# sourceMappingURL=main.c8d130bd.chunk.js.map