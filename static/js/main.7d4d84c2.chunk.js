(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{10:function(e,t,c){e.exports={buttonWrapper:"Difficulty_buttonWrapper__3VcUd",button:"Difficulty_button__qRM3e",restartButton:"Difficulty_restartButton__fAOsM"}},19:function(e,t,c){},23:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c(0),n=c.n(r),i=c(4),o=c.n(i),s=(c(19),c(2)),u=c(3),d=c(11),l=c(7),j=c.n(l),b=c(5),m=c.n(b),f=function(e){var t=e.revealCard,c=e.setGrid,n=e.grid,i=e.difficulty;Object(r.useEffect)((function(){o()}),[i]);var o=function(){for(var e=[],t=0;t<i;t++)e=[].concat(Object(s.a)(e),[{odd:t%2===0&&!0,index:t,image:"",opened:!1,revealed:!1}]);var a=[].concat(Object(s.a)(e.filter((function(e){return!e.odd})).map((function(e,t){return e.image="https://robohash.org/".concat(t,"?size=100x100"),e.index=t,e}))),Object(s.a)(e.filter((function(e){return e.odd})).map((function(e,t){return e.image="https://robohash.org/".concat(t,"?size=100x100"),e.index=t,e})))).sort((function(){return Math.random()-.5}));c(a)};return Object(a.jsx)("div",{className:m.a.container,children:n.map((function(e,c){var r=e.opened,n=e.image;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:16===i?m.a.easy:36===i?m.a.medium:m.a.hard,onClick:function(){return t(c)},children:Object(a.jsx)("div",{className:m.a.inside,children:Object(a.jsx)("img",{className:m.a.image,src:"".concat(r?n:"https://sourcemaking.com/files/v2/content/home-tb1.png"),alt:"robot"})})})})}))})},O=["easy","medium","hard"],p=c(10),g=c.n(p),h=function(e){var t=e.setIsGameActive,c=e.difficulty,r=e.setDicciculty;return Object(a.jsx)("div",{className:g.a.buttonWrapper,children:0===c?O.map((function(e,t){return Object(a.jsx)("button",{className:g.a.button,onClick:function(){var e;0===(e=t)?r(16):1===e?r(36):2===e&&r(100)},children:e},t.toString())})):Object(a.jsx)("button",{className:g.a.restartButton,onClick:function(){r(0),t(!1)},children:"Restart Game"})})},S=c(9),_=c.n(S),v=function(e){var t=e.isGameActive,c=(e.difficulty,e.setTime),n=e.time,i=Object(r.useState)(0),o=Object(u.a)(i,2),s=o[0],d=o[1],l=Object(r.useState)(0),j=Object(u.a)(l,2),b=j[0],m=j[1];return Object(r.useEffect)((function(){t?s<60?s<60&&setTimeout((function(){return d(s+1)}),1e3):(d(0),m(b+1)):(d(0),m(0)),c("".concat("0".concat(b).slice(-2),":").concat("0".concat(s).slice(-2)))}),[t,s]),Object(a.jsx)("h3",{className:_.a.timer,children:n})},x=function(e){var t=e.difficulty,c=e.captureScore,n=Object(r.useRef)(!0);Object(r.useEffect)((function(){n.current?n.current=!1:i()}),[c]);var i=function(){(localStorage.getItem("captureScore")<localStorage.getItem("bestScore")||null===localStorage.getItem("bestScore"))&&(16===t?localStorage.setItem("bestScore",localStorage.getItem("captureScore")):36===t?localStorage.setItem("bestScoreMedium",localStorage.getItem("captureScore")):100===t&&localStorage.setItem("bestScoreHard",localStorage.getItem("captureScore")))};return Object(a.jsxs)("div",{className:_.a.timeWrapper,children:[Object(a.jsxs)("div",{children:["Latest Score: ",localStorage.getItem("captureScore")]}),Object(a.jsx)("div",{children:"Best Scores"}),Object(a.jsxs)("div",{children:["Easy: ",localStorage.getItem("bestScore")]}),Object(a.jsxs)("div",{children:["Medium: ",localStorage.getItem("bestScoreMedium")]}),Object(a.jsxs)("div",{children:["Hard: ",localStorage.getItem("bestScoreHard")]})]})};c(20);d.a.configure();var y=function(){var e=Object(r.useState)(0),t=Object(u.a)(e,2),c=t[0],n=t[1],i=Object(r.useState)([]),o=Object(u.a)(i,2),l=o[0],b=o[1],m=Object(r.useState)([]),O=Object(u.a)(m,2),p=O[0],g=O[1],S=Object(r.useState)([]),_=Object(u.a)(S,2),y=_[0],I=_[1],G=Object(r.useState)(),C=Object(u.a)(G,2),N=C[0],D=C[1],W=Object(r.useState)(!1),w=Object(u.a)(W,2),A=w[0],M=w[1],T=Object(r.useState)(),E=Object(u.a)(T,2),k=E[0],B=E[1];Object(r.useEffect)((function(){!A&&F()}),[A]);var F=function(){I([]),b([]),g([]),n(0)};return Object(a.jsxs)("div",{className:j.a.container,children:[Object(a.jsx)("h1",{className:j.a.heading,children:"Memory Game"}),Object(a.jsx)("div",{className:j.a.timeContainer,children:Object(a.jsxs)("div",{className:j.a.timeWrapper,children:[Object(a.jsx)(v,{time:N,setTime:D,isGameActive:A,difficulty:c}),Object(a.jsx)(x,{difficulty:c,captureScore:k})]})}),Object(a.jsx)(h,{setIsGameActive:M,difficulty:c,setDicciculty:n}),c>0&&Object(a.jsx)(f,{revealCard:function(e){M(!0);var t=Object(s.a)(y),c=Object(s.a)(p),a=Object(s.a)(l);a[e].opened=!0,b(a),a[e].revealed||(t.length>0?(t=[],c=[],I(Object(s.a)(t)),g(Object(s.a)(c)),t=[].concat(Object(s.a)(y),[l[e].index]),c=[].concat(Object(s.a)(p),[e])):(t=[].concat(Object(s.a)(y),[l[e].index]),c=[].concat(Object(s.a)(p),[e]),I(Object(s.a)(t)),g(Object(s.a)(c))),e!==p[0]||l[e].revealed?t[0]===t[1]?(a[p[0]].revealed=!0,a[e].revealed=!0,b(Object(s.a)(a)),setTimeout((function(){l.filter((function(e){return!0===e.opened})).length===l.length?(Object(d.a)("Congratulations You won!"),localStorage.setItem("captureScore",N),B(N),M(!1)):Object(d.a)("Pair was found!")}),500)):2===t.length&&setTimeout((function(){a[p[0]].opened=!1,a[e].opened=!1,b(Object(s.a)(a))}),1e3):a[e].opened=!1)},grid:l,setGrid:b,difficulty:c})]})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,26)).then((function(t){var c=t.getCLS,a=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),r(e),n(e),i(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),I()},5:function(e,t,c){e.exports={container:"DrawGrid_container__3SJF-",inside:"DrawGrid_inside__2EEqz",easy:"DrawGrid_easy__3MtmC",medium:"DrawGrid_medium__2HrIR",hard:"DrawGrid_hard__rxi2A",image:"DrawGrid_image__2mmrV"}},7:function(e,t,c){e.exports={timeContainer:"App_timeContainer__3mg1W",timeWrapper:"App_timeWrapper__2cLn_",heading:"App_heading__2UL9e"}},9:function(e,t,c){e.exports={timeWrapper:"Times_timeWrapper__5Ka4b",timer:"Times_timer__2e0Wm"}}},[[23,1,2]]]);
//# sourceMappingURL=main.7d4d84c2.chunk.js.map