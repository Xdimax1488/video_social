(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{17:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},55:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t.n(c),n=t(29),i=t.n(n),r=(t(35),t(36),t(10)),A=t(2),l=t(4),d=t(8),j=t.n(d),o=(t(55),t(0));var m=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)([]),i=Object(l.a)(n,2);return i[0],i[1],Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/author/"}).then((function(e){s(e.data)}))}),[]),Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("div",{className:"conteiner",children:Object(o.jsxs)("div",{className:"header__inner",children:[Object(o.jsx)("div",{className:"logo",children:Object(o.jsxs)("a",{href:"/",children:["My",Object(o.jsx)("span",{children:"Tube"})]})}),Object(o.jsx)("div",{className:"serch_form",children:Object(o.jsxs)("form",{action:"",children:[Object(o.jsx)("input",{type:"text",placeholder:"serch"}),Object(o.jsx)("button",{children:"9"})]})}),Object(o.jsx)("div",{className:"header__nav",children:t.map((function(e){return Object(o.jsx)(o.Fragment,{children:"true"===e.user&&Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{children:e.first_name}),Object(o.jsx)("a",{href:"{% url 'account_logout' %}",class:"nav__link",children:"\u0412\u044b\u0445\u043e\u0434"}),Object(o.jsx)("a",{className:"nav__link",href:"{% url 'account_login' %}",children:"\u0412\u0445\u043e\u0434"}),Object(o.jsx)("a",{className:"nav__link",href:"{% url 'account_signup' %}",children:"\u0420\u0435\u0433\u0435\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(o.jsx)("li",{className:"nav__link-img",children:Object(o.jsx)(r.b,{to:{pathname:"/author/".concat(e.id),fromDashboard:!1},children:Object(o.jsx)("img",{src:e.avatar,alt:""})})})]})})}))})]})})})};t(17);var h=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(null),i=Object(l.a)(n,2),A=i[0],d=i[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){s(e.data)}))}),[]),Object(o.jsxs)("div",{className:"category__inner",children:[Object(o.jsx)(r.b,{className:null===A?"btn_category activ":"btn_category",to:{pathname:"/",fromDashboard:!1},onClick:function(){return d(null)},children:"all"}),t.map((function(e){return Object(o.jsx)(r.b,{className:A===e.id?"btn_category activ":"btn_category",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},onClick:function(){return d(e.id)},children:e.name})}))]})};t(62);var x=function(){var e=Object(c.useState)([]),a=Object(l.a)(e,2),t=a[0],s=a[1];return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/videos"}).then((function(e){s(e.data),console.log(t)}))}),[]),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"conteiner__category",children:[Object(o.jsx)(h,{}),Object(o.jsx)("div",{className:"videos",children:t.map((function(e){return Object(o.jsx)("div",{className:"video__col",children:Object(o.jsxs)("div",{className:"video",children:[Object(o.jsx)(r.b,{to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(o.jsx)("img",{className:"video__img",src:e.preview,alt:""})}),Object(o.jsxs)("div",{className:"video__content",children:[Object(o.jsx)("div",{className:"video__user",children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(o.jsxs)("div",{className:"video__tittle",children:[e.name,Object(o.jsx)("div",{className:"user__name",children:e.author}),Object(o.jsx)("div",{className:"video__date",children:e.published})]})]})]})})}))})]})})};t(63);var b=function(e){var a=e.match,t=Object(c.useState)([]),s=Object(l.a)(t,2),n=(s[0],s[1]),i=Object(c.useState)([]),A=Object(l.a)(i,2),d=A[0],m=A[1],x=a.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(x,"/")}).then((function(e){n(e.data),m(e.data.videos)}))}),[x]),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"conteiner__category",children:[Object(o.jsx)(h,{}),Object(o.jsx)("div",{className:"videos",children:d.map((function(e){return Object(o.jsx)("div",{className:"video__col",children:Object(o.jsxs)("div",{className:"video",children:[Object(o.jsx)(r.b,{to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(o.jsx)("img",{className:"video__img",src:e.preview,alt:""})}),Object(o.jsxs)("div",{className:"video__content",children:[Object(o.jsx)("div",{className:"video__user",children:Object(o.jsx)("a",{href:"#",children:Object(o.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(o.jsxs)("div",{className:"video__tittle",children:[e.name,Object(o.jsx)("div",{className:"user__name",children:e.author}),Object(o.jsx)("div",{className:"video__date",children:e.published})]})]})]})})}))})]})})};t(64);var N=function(e){var a=e.match,t=Object(c.useState)([]),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(c.useState)([]),A=Object(l.a)(r,2),d=A[0],m=A[1],h=a.params.id;Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/videos/".concat(h,"/")}).then((function(e){i(e.data),m(e.data.comments)}))}),[h]);var x=d.length;return Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"conteiner__category",children:[Object(o.jsx)("div",{className:"video",children:Object(o.jsx)("video",{width:"1200",height:"800",controls:"controls",poster:n.preview,children:Object(o.jsx)("source",{src:n.video,type:"video/mp4"})})}),Object(o.jsxs)("div",{className:"video__detail-content",children:[Object(o.jsx)("div",{className:"video__detail-tittle",children:n.name}),Object(o.jsx)("div",{className:"video__detail-date",children:n.published}),Object(o.jsxs)("div",{className:"video__detail-user",children:[Object(o.jsx)("img",{className:"user__avatar",src:"https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg",alt:""}),Object(o.jsx)("div",{className:"user__detail-name",children:n.author})]}),Object(o.jsx)("div",{className:"video__detail-description",children:n.description}),Object(o.jsxs)("div",{className:"video__comments",children:[Object(o.jsxs)("h1",{className:"tittle",children:[x," \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 : "]}),d.map((function(e){return Object(o.jsxs)("div",{className:"commets__details",children:[Object(o.jsxs)("div",{className:"comments__header",children:[Object(o.jsx)("div",{className:"comments__user",children:e.name}),Object(o.jsx)("div",{className:"comments__date",children:e.created})]}),Object(o.jsx)("div",{className:"comments__body",children:e.body})]})}))]})]})]})})};t(65);var p=function(e){var a=e.match,t=Object(c.useState)([]),s=Object(l.a)(t,2),n=s[0],i=s[1],r=Object(c.useState)([]),A=Object(l.a)(r,2),d=(A[0],A[1]),m=a.params.id;return Object(c.useEffect)((function(){j()({method:"GET",url:"http://127.0.0.1:8000/api/author/".concat(m,"/")}).then((function(e){i(e.data),d(e.data.comments)}))}),[m]),Object(o.jsx)("div",{className:"author__content",children:Object(o.jsxs)("div",{className:"conteiner__category",children:[Object(o.jsxs)("div",{className:"author__header",children:[Object(o.jsx)("div",{className:"author__avatar",children:Object(o.jsx)("img",{className:"avatar__img",src:n.avatar,alt:"avatar"})}),Object(o.jsx)("div",{className:"author__name",children:n.user})]}),Object(o.jsxs)("div",{className:"author__info",children:[Object(o.jsxs)("div",{className:"first__name",children:["\u0438\u043c\u044f : ",n.first_name]}),Object(o.jsxs)("div",{className:"second__name",children:["\u0444\u0430\u043c\u0438\u043b\u0438\u044f : ",n.second_name]}),Object(o.jsxs)("div",{className:"email",children:["email \u043f\u043e\u043b\u044c\u0437\u044b\u0432\u0430\u0442\u0435\u043b\u044f : ",n.email]})]}),Object(o.jsx)("div",{className:"author__video"})]})})};var Q=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(m,{}),Object(o.jsxs)(A.c,{children:[Object(o.jsx)(A.a,{path:"/",exact:!0,component:x}),Object(o.jsx)(A.a,{path:"/category/:id",exact:!0,component:b}),Object(o.jsx)(A.a,{path:"/videos/:id",exact:!0,component:N}),Object(o.jsx)(A.a,{path:"/author/:id",exact:!0,component:p})]})]})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,67)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),c(e),s(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(Q,{})}),document.getElementById("root")),g()}},[[66,1,2]]]);
//# sourceMappingURL=main.6e12bf85.chunk.js.map