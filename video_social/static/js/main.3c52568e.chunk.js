(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,a,c){},36:function(e,a,c){},37:function(e,a,c){},56:function(e,a,c){},63:function(e,a,c){},64:function(e,a,c){},65:function(e,a,c){},66:function(e,a,c){},67:function(e,a,c){"use strict";c.r(a);var t=c(1),s=c.n(t),i=c(30),n=c.n(i),r=(c(36),c(37),c(5)),l=c(2),d=c(4),j=c(9),o=c.n(j),m=(c(56),c(0));var A=function(){var e=Object(t.useState)([]),a=Object(d.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)([]),n=Object(d.a)(i,2);return n[0],n[1],Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/author/"}).then((function(e){s(e.data)}))}),[]),console.log(c),Object(m.jsx)("div",{className:"header",children:Object(m.jsx)("div",{className:"conteiner",children:Object(m.jsxs)("div",{className:"header__inner",children:[Object(m.jsx)("div",{className:"logo",children:Object(m.jsxs)("a",{href:"/",children:["My",Object(m.jsx)("span",{children:"Tube"})]})}),Object(m.jsx)("div",{className:"header__nav",children:c.map((function(e){return Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("div",{children:Object(m.jsx)(r.b,{className:"add__video",to:{pathname:"/create/",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e"})})}),Object(m.jsxs)("li",{children:[Object(m.jsx)("span",{children:e.first_name}),Object(m.jsx)("a",{href:"{% url 'account_logout' %}",class:"nav__link",children:"\u0412\u044b\u0445\u043e\u0434"}),Object(m.jsx)("a",{className:"nav__link",href:"{% url 'account_login' %}",children:"\u0412\u0445\u043e\u0434"}),Object(m.jsx)("a",{className:"nav__link",href:"{% url 'account_signup' %}",children:"\u0420\u0435\u0433\u0435\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]}),Object(m.jsx)("li",{className:"nav__link-img",children:Object(m.jsx)(r.b,{to:{pathname:"/author/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("img",{src:e.avatar,alt:""})})})]})}))})]})})})},h=c(12);c(18);var b=function(){var e=Object(t.useState)([]),a=Object(d.a)(e,2),c=a[0],s=a[1],i=Object(t.useState)(null),n=Object(d.a)(i,2),l=n[0],j=n[1];return Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){s(e.data)}))}),[]),Object(m.jsxs)("div",{className:"category__inner",children:[Object(m.jsx)(r.b,{className:null===l?"btn_category activ":"btn_category",to:{pathname:"/",fromDashboard:!1},onClick:function(){return j(null)},children:"all"}),c.map((function(e){return Object(m.jsx)(r.b,{className:l===e.id?"btn_category activ":"btn_category",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},onClick:function(){return j(e.id)},children:e.name})}))]})};c(63);var x=function(){var e=Object(t.useState)([]),a=Object(d.a)(e,2),c=a[0],s=a[1];Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/videos"}).then((function(e){s(e.data),console.log(c)}))}),[]);var i=Object(t.useState)(""),n=Object(d.a)(i,2),l=n[0],j=n[1],A=c.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"conteiner__category",children:[Object(m.jsx)(b,{}),Object(m.jsx)("div",{className:"form",children:Object(m.jsx)("form",{className:"serch__form",children:Object(m.jsx)("input",{type:"text",placeholder:"\u043f\u043e\u0438\u0441\u043a",className:"serch__input",onChange:function(e){return j(e.target.value)}})})}),Object(m.jsx)("div",{className:"videos",children:A.map((function(e){return Object(m.jsx)("div",{className:"video__col",children:Object(m.jsxs)("div",{className:"video",children:[Object(m.jsx)(r.b,{to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("img",{className:"video__img",src:e.preview,alt:""})}),Object(m.jsxs)("div",{className:"video__content",children:[Object(m.jsx)("div",{className:"video__user",children:Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(m.jsxs)("div",{className:"video__tittle",children:[e.name,Object(m.jsx)("div",{className:"user__name",children:e.author}),Object(m.jsx)("div",{className:"video__date",children:Object(h.a)(e.published,"mmmm dS,yyyy")})]})]})]})})}))})]})})};c(64);var p=function(e){var a=e.match,c=Object(t.useState)([]),s=Object(d.a)(c,2),i=(s[0],s[1]),n=Object(t.useState)([]),l=Object(d.a)(n,2),j=l[0],A=l[1],h=a.params.id;return Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(h,"/")}).then((function(e){i(e.data),A(e.data.videos)}))}),[h]),Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"conteiner__category",children:[Object(m.jsx)(b,{}),Object(m.jsx)("div",{className:"videos",children:j.map((function(e){return Object(m.jsx)("div",{className:"video__col",children:Object(m.jsxs)("div",{className:"video",children:[Object(m.jsx)(r.b,{to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("img",{className:"video__img",src:e.preview,alt:""})}),Object(m.jsxs)("div",{className:"video__content",children:[Object(m.jsx)("div",{className:"video__user",children:Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("img",{src:"data:image/jpeg;base64,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",alt:""})})}),Object(m.jsxs)("div",{className:"video__tittle",children:[e.name,Object(m.jsx)("div",{className:"user__name",children:e.author}),Object(m.jsx)("div",{className:"video__date",children:e.published})]})]})]})})}))})]})})};c(65);var N=function(e){var a=e.match,c=Object(t.useState)([]),s=Object(d.a)(c,2),i=s[0],n=s[1],r=Object(t.useState)([]),l=Object(d.a)(r,2),j=l[0],A=l[1],b=a.params.id;Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/videos/".concat(b,"/")}).then((function(e){n(e.data),A(e.data.comments)}))}),[b]);var x=j.length;return Object(m.jsx)("div",{className:"content",children:Object(m.jsxs)("div",{className:"conteiner__category",children:[Object(m.jsx)("div",{className:"video",children:Object(m.jsx)("video",{width:"1200",height:"800",controls:"controls",poster:i.preview,children:Object(m.jsx)("source",{src:i.video,type:"video/mp4"})})}),Object(m.jsxs)("div",{className:"video__detail-content",children:[Object(m.jsx)("div",{className:"video__detail-tittle",children:i.name}),Object(m.jsx)("div",{className:"video__detail-date",children:Object(h.a)(i.published,"mmmm dS,yyyy")}),Object(m.jsxs)("div",{className:"video__detail-user",children:[Object(m.jsx)("img",{className:"user__avatar",src:"https://pbs.twimg.com/profile_images/758084549821730820/_HYHtD8F_400x400.jpg",alt:""}),Object(m.jsx)("div",{className:"user__detail-name",children:i.author})]}),Object(m.jsx)("div",{className:"video__detail-description",children:i.description}),Object(m.jsxs)("div",{className:"video__comments",children:[Object(m.jsxs)("h1",{className:"tittle",children:[x," \u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0435\u0432 : "]}),j.map((function(e){return Object(m.jsxs)("div",{className:"commets__details",children:[Object(m.jsxs)("div",{className:"comments__header",children:[Object(m.jsx)("div",{className:"comments__user",children:e.name}),Object(m.jsx)("div",{className:"comments__date",children:e.created})]}),Object(m.jsx)("div",{className:"comments__body",children:e.body})]})}))]})]})]})})};c(66);var O=function(e){var a=e.match,c=Object(t.useState)([]),s=Object(d.a)(c,2),i=s[0],n=s[1],l=Object(t.useState)([]),j=Object(d.a)(l,2),A=j[0],b=j[1],x=a.params.id;return Object(t.useEffect)((function(){o()({method:"GET",url:"http://127.0.0.1:8000/api/author/".concat(x,"/")}).then((function(e){n(e.data),b(e.data.video)}))}),[x]),Object(m.jsx)("div",{className:"author__content",children:Object(m.jsxs)("div",{className:"conteiner__category",children:[Object(m.jsxs)("div",{className:"author__header",children:[Object(m.jsx)("div",{className:"author__avatar",children:Object(m.jsx)("img",{className:"avatar__img",src:i.avatar,alt:"avatar"})}),Object(m.jsx)("div",{className:"author__name",children:i.user})]}),Object(m.jsxs)("div",{className:"author__info",children:[Object(m.jsxs)("div",{className:"first__name",children:["\u0438\u043c\u044f : ",i.first_name]}),Object(m.jsxs)("div",{className:"second__name",children:["\u0444\u0430\u043c\u0438\u043b\u0438\u044f : ",i.second_name]}),Object(m.jsxs)("div",{className:"email",children:["email \u043f\u043e\u043b\u044c\u0437\u044b\u0432\u0430\u0442\u0435\u043b\u044f : ",i.email]})]}),Object(m.jsx)("div",{className:"add",children:Object(m.jsx)(r.b,{className:"add__video",to:{pathname:"/create/",fromDashboard:!1},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0438\u0434\u0435\u043e"})}),Object(m.jsxs)("ul",{className:"video__nav",children:[Object(m.jsx)("li",{children:"\u0432\u0438\u0434\u0435\u043e"}),Object(m.jsx)("li",{children:"\u0434\u0430\u0442\u0430"}),Object(m.jsx)("li",{children:"\u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f"}),Object(m.jsx)("li",{children:"\u043a\u043e\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438"})]}),Object(m.jsx)("div",{className:"author__video",children:A.map((function(e){return Object(m.jsxs)("div",{className:"author__video--content",children:[Object(m.jsx)(r.b,{className:"author__video--link",to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("div",{className:"preview",children:Object(m.jsx)("img",{src:e.preview,alt:"preview"})})}),Object(m.jsxs)("div",{className:"author__video--description",children:[Object(m.jsxs)("div",{className:"author__video--hover",children:[Object(m.jsx)("div",{className:"name",children:e.name}),Object(m.jsx)("div",{className:"description",children:e.description})]}),Object(m.jsxs)("div",{className:"hover__up",children:[Object(m.jsx)(r.b,{className:"author__video--hoverlink",to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("img",{className:"img__edit",src:"https://www.pikpng.com/pngl/m/70-704176_edit-free-edit-icon-transparent-background-clipart.png",alt:""})}),Object(m.jsx)(r.b,{className:"author__video--hoverlink",to:{pathname:"/videos/".concat(e.id),fromDashboard:!1},children:Object(m.jsx)("img",{className:"img__delete",src:"https://mpng.subpng.com/20180711/wru/kisspng-computer-icons-clip-art-delete-image-icon-5b45dc96b07912.1758854315313051107228.jpg",alt:""})})]})]}),Object(m.jsx)("div",{className:"published",children:Object(h.a)(e.published,"mmmm dS,yyyy")}),Object(m.jsx)("div",{className:"category",children:e.category}),Object(m.jsx)("div",{className:"comment",children:e.comments.length})]})}))})]})})};var v=function(){return Object(m.jsx)("div",{className:"content",children:Object(m.jsx)("div",{className:"conteiner__category",children:Object(m.jsxs)("form",{className:"create__form",children:[Object(m.jsxs)("ul",{children:[Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{for:"name",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435:"}),Object(m.jsx)("input",{type:"text",id:"name",name:"name"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{for:"description",children:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435:"}),Object(m.jsx)("input",{type:"text",id:"description",name:"description"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{for:"video",children:"\u0412\u0438\u0434\u0435\u043e:"}),Object(m.jsx)("input",{type:"file",id:"video",name:"video"})]}),Object(m.jsxs)("li",{children:[Object(m.jsx)("label",{for:"preview",children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430 \u043d\u0430 \u043f\u0440\u0435\u0432\u044e:"}),Object(m.jsx)("input",{type:"file",id:"preview",name:"preview"})]})]}),Object(m.jsx)("button",{type:"primery",htmlType:"submit",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})})})};var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(r.a,{children:[Object(m.jsx)(A,{}),Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{path:"/",exact:!0,component:x}),Object(m.jsx)(l.a,{path:"/create/",exact:!0,component:v}),Object(m.jsx)(l.a,{path:"/category/:id",exact:!0,component:p}),Object(m.jsx)(l.a,{path:"/videos/:id",exact:!0,component:N}),Object(m.jsx)(l.a,{path:"/author/:id",exact:!0,component:O})]})]})})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,68)).then((function(a){var c=a.getCLS,t=a.getFID,s=a.getFCP,i=a.getLCP,n=a.getTTFB;c(e),t(e),s(e),i(e),n(e)}))};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),u()}},[[67,1,2]]]);
//# sourceMappingURL=main.3c52568e.chunk.js.map