(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],[,,,,function(e,t,c){e.exports={container:"DrawGrid_container__3SJF-",inside:"DrawGrid_inside__2EEqz",easy:"DrawGrid_easy__3MtmC",medium:"DrawGrid_medium__2HrIR",hard:"DrawGrid_hard__rxi2A"}},,,,function(e,t,c){e.exports={buttonWrapper:"Difficulty_buttonWrapper__3VcUd",button:"Difficulty_button__qRM3e"}},,function(e,t,c){e.exports={header:"App_header__2L3DO"}},function(e,t,c){},,,,,,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),i=c.n(a),r=c(9),o=c.n(r),s=(c(17),c(2)),u=c(3),d=c(10),j=c.n(d),b=c(4),f=c.n(b),O=function(e){var t=e.revealCard,c=e.setGrid,i=e.grid,r=e.difficulty;Object(a.useEffect)((function(){o()}),[r]);var o=function(){for(var e=[],t=0;t<r;t++)e=[].concat(Object(s.a)(e),[{odd:t%2===0&&!0,index:t,image:"",opened:!1,revealed:!1}]);var n=[].concat(Object(s.a)(e.filter((function(e){return!e.odd})).map((function(e,t){return e.image="https://robohash.org/".concat(t,"?size=100x100"),e.index=t,e}))),Object(s.a)(e.filter((function(e){return e.odd})).map((function(e,t){return e.image="https://robohash.org/".concat(t,"?size=100x100"),e.index=t,e})))).sort((function(){return Math.random()-.5}));c(n)};return Object(n.jsx)("div",{className:f.a.container,children:i.map((function(e,c){var a=e.opened,i=e.image;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("div",{className:16===r?f.a.easy:36===r?f.a.medium:f.a.hard,onClick:function(){return t(c)},children:Object(n.jsx)("div",{className:f.a.inside,children:Object(n.jsx)("img",{src:"".concat(a?i:"https://sourcemaking.com/files/v2/content/home-tb1.png"),alt:"robot"})})})})}))})},l=["easy","medium","hard"],m=c(8),p=c.n(m),h=function(e){var t=e.setIsGameActive,c=e.difficulty,a=e.setDicciculty;return Object(n.jsx)("div",{className:p.a.buttonWrapper,children:0===c?l.map((function(e,t){return Object(n.jsx)("button",{className:p.a.button,onClick:function(){var e;0===(e=t)?a(16):1===e?a(36):2===e&&a(100)},children:e},t.toString())})):Object(n.jsx)("button",{onClick:function(){a(0),t(!1)},children:"Restart Game"})})},v=function(e){var t=e.isGameActive,c=(e.difficulty,e.setTime),i=e.time,r=Object(a.useState)(0),o=Object(u.a)(r,2),s=o[0],d=o[1],j=Object(a.useState)(0),b=Object(u.a)(j,2),f=b[0],O=b[1];return Object(a.useEffect)((function(){t?s<60?s<60&&setTimeout((function(){return d(s+1)}),1e3):(d(0),O(f+1)):(d(0),O(0)),c("".concat("0".concat(f).slice(-2),":").concat("0".concat(s).slice(-2)))}),[t,s]),Object(n.jsx)("h3",{children:i})},x=c(11),g=c.n(x),_=function(e){var t=e.captureScore,c=Object(a.useState)("00:00"),i=Object(u.a)(c,2),r=i[0],o=i[1];Object(a.useEffect)((function(){s()}),[t]);var s=function(){Date.parse("01/01/2011 10:".concat(t))<Date.parse("01/01/2011 10:".concat(r))&&o("".concat(t))};return Object(n.jsxs)("div",{className:g.a.timeWrapper,children:[Object(n.jsxs)("div",{children:["LastTime: ",t]}),Object(n.jsxs)("div",{children:["BestTime: ",r]})]})},S=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)([]),o=Object(u.a)(r,2),d=o[0],b=o[1],f=Object(a.useState)([]),l=Object(u.a)(f,2),m=l[0],p=l[1],x=Object(a.useState)([]),g=Object(u.a)(x,2),S=g[0],y=g[1],D=Object(a.useState)(),G=Object(u.a)(D,2),C=G[0],w=G[1],T=Object(a.useState)(!1),E=Object(u.a)(T,2),N=E[0],k=E[1],A=Object(a.useState)(),F=Object(u.a)(A,2),I=F[0],L=F[1];Object(a.useEffect)((function(){!N&&M()}),[N]);var M=function(){y([]),b([]),p([]),i(0)};return Object(n.jsxs)("div",{className:j.a.container,children:[Object(n.jsx)(v,{time:C,setTime:w,isGameActive:N,difficulty:c}),Object(n.jsx)(_,{captureScore:I}),Object(n.jsx)(h,{setIsGameActive:k,difficulty:c,setDicciculty:i}),Object(n.jsx)(O,{revealCard:function(e){k(!0);var t=Object(s.a)(S),c=Object(s.a)(m),n=Object(s.a)(d);n[e].opened=!0,b(n),n[e].revealed||(t.length>0?(t=[],c=[],y(Object(s.a)(t)),p(Object(s.a)(c)),t=[].concat(Object(s.a)(S),[d[e].index]),c=[].concat(Object(s.a)(m),[e])):(t=[].concat(Object(s.a)(S),[d[e].index]),c=[].concat(Object(s.a)(m),[e]),y(Object(s.a)(t)),p(Object(s.a)(c))),e!==m[0]||d[e].revealed?t[0]===t[1]?(n[m[0]].revealed=!0,n[e].revealed=!0,b(Object(s.a)(n)),setTimeout((function(){d.filter((function(e){return!0===e.opened})).length===d.length?(alert("Congratulations You won!"),L(C),k(!1)):alert("Pair was found!")}),500)):2===t.length&&setTimeout((function(){n[m[0]].opened=!1,n[e].opened=!1,b(Object(s.a)(n))}),1e3):n[e].opened=!1)},grid:d,setGrid:b,difficulty:c})]})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("root")),y()}],[[18,1,2]]]);
//# sourceMappingURL=main.29437e66.chunk.js.map