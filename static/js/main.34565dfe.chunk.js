(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/acen.bc81fcb9.jpeg"},function(e,a,t){e.exports=t.p+"static/media/bombscare.0f8267f9.jpg"},function(e,a,t){e.exports=t.p+"static/media/dubwar.a7016ae5.jpg"},function(e,a,t){e.exports=t.p+"static/media/edge.0139c802.jpg"},function(e,a,t){e.exports=t.p+"static/media/liquid.4ffc7869.jpg"},function(e,a,t){e.exports=t.p+"static/media/mule.4aac016e.jpg"},function(e,a,t){e.exports=t.p+"static/media/narramind.714320f6.jpg"},function(e,a,t){e.exports=t.p+"static/media/prodigy.08069991.jpg"},function(e,a,t){e.exports=t.p+"static/media/shutup.f317be7a.jpg"},function(e,a,t){e.exports=t.p+"static/media/sl2.81ea9f72.jpg"},function(e,a,t){e.exports=t.p+"static/media/sonz.5d91cf51.jpg"},function(e,a,t){e.exports=t.p+"static/media/urbanshakedown.26c21667.jpg"},,,,,,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),r=t(14),i=t.n(r),o=(t(24),t(15)),l=t(16),s=t(18),m=t(17);var u=function(){return n.a.createElement("nav",{className:"navbar navbar-dark bg-dark"},n.a.createElement("div",{className:"mx-auto order-0"},n.a.createElement("a",{className:"navbar-brand mx-auto",href:"/"},"Breakbeat Hardcore Memory")))};var d=function(e){return n.a.createElement("div",null,n.a.createElement("h2",null,"Play the game"),n.a.createElement("div",{className:"row"},e.imageArr.map((function(a,t){return n.a.createElement("div",{className:"col-6 col-md-4 mb-2"},n.a.createElement("button",{className:"btn btn-default",onClick:function(){return e.countScore(a.name,t)},key:a.name},n.a.createElement("img",{alt:"record label",className:"rounded img-fluid",src:a.src})))}))))};var f=function(e){return n.a.createElement("div",null,n.a.createElement("h2",null,"Please play again"),n.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.initialState()}},"PlayAgain"))},p=t(1),g=t.n(p),k=t(2),v=t.n(k),h=t(3),b=t.n(h),S=t(4),E=t.n(S),A=t(5),j=t.n(A),y=t(6),x=t.n(y),w=t(7),N=t.n(w),M=t(8),B=t.n(M),P=t(9),D=t.n(P),J=t(10),O=t.n(J),W=t(11),q=t.n(W),z=t(12),C=t.n(z),L=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),i=0;i<c;i++)r[i]=arguments[i];return(e=a.call.apply(a,[this].concat(r))).state={active:!0,score:0,imageArr:[{name:"Acen",src:g.a,clicked:!1},{name:"Bombscare",src:v.a,clicked:!1},{name:"Dub War",src:b.a,clicked:!1},{name:"DJ Edge",src:E.a,clicked:!1},{name:"Liquid",src:j.a,clicked:!1},{name:"Mule",src:x.a,clicked:!1},{name:"Narramind",src:N.a,clicked:!1},{name:"Prodigy",src:B.a,clicked:!1},{name:"Shutup",src:D.a,clicked:!1},{name:"Sl2",src:O.a,clicked:!1},{name:"Sonz",src:q.a,clicked:!1},{name:"Urban Shakedown",src:C.a,clicked:!1}]},e.shuffle=function(e){for(var a,t,c=e.length;0!==c;)t=Math.floor(Math.random()*c),a=e[c-=1],e[c]=e[t],e[t]=a;return e},e.areYouActive=function(){return!0===e.state.active?n.a.createElement(d,{countScore:e.countScore,imageArr:e.state.imageArr,handleActive:e.handleActive}):n.a.createElement(f,{initialState:e.initialState})},e.handleActive=function(){!0===e.state.active?e.setState({active:!1}):e.setState({active:!0})},e.countScore=function(a,t){if(console.log(a),e.state.imageArr[t].name===a&&!1===e.state.imageArr[t].clicked){var c=e.state.score+1;console.log(c);var n=e.state.imageArr;n[t].clicked=!0,console.log(n[t]),e.setState({score:c}),e.setState({imageArr:n}),e.setState({imageArr:e.shuffle(e.state.imageArr)})}else e.setState({active:!1})},e.initialState=function(){var a=e.shuffle([{name:"Acen",src:g.a,clicked:!1},{name:"Bombscare",src:v.a,clicked:!1},{name:"Dub War",src:b.a,clicked:!1},{name:"DJ Edge",src:E.a,clicked:!1},{name:"Liquid",src:j.a,clicked:!1},{name:"Mule",src:x.a,clicked:!1},{name:"Narramind",src:N.a,clicked:!1},{name:"Prodigy",src:B.a,clicked:!1},{name:"Shutup",src:D.a,clicked:!1},{name:"Sl2",src:O.a,clicked:!1},{name:"Sonz",src:q.a,clicked:!1},{name:"Urban Shakedown",src:C.a,clicked:!1}]);e.setState({active:!0,score:0,imageArr:a})},e}return Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(u,null),n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"Score: ",this.state.score),this.areYouActive()))}}]),t}(n.a.Component);t(25);var U=function(){return n.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.34565dfe.chunk.js.map