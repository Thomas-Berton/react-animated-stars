module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=r(1),i=(n=o)&&n.__esModule?n:{default:n};var u=function(e){var t=e;return/[0-9A-Fa-f]{6}/g.test(t)&&t.includes("#")};t.default=function(e){var t=e.starCount||150,r=e.rotationSpeed||.01,n=e.innerRadius||100,o=e.minSize||.5,a=e.maxSize||1.8,l=e.opacity||.9,c=e.bgColor&&u(e.bgColor)?e.bgColor:"#000000",s=e.starColor&&u(e.starColor)?e.starColor:"#ffffff",f=i.default.createRef(),d=i.default.createRef();i.default.useEffect((function(){console.log("React.useEffect");var e=function(){d.current&&(d.current.innerHTML="",p())};window.addEventListener("resize",e),e()}));var p=function(){for(var e={x:f.current.getBoundingClientRect().width/2,y:f.current.getBoundingClientRect().height/2},i=[],u=Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2)),l=0;l<t;++l){var c=document.createElementNS("http://www.w3.org/2000/svg","circle");c.setAttribute("class","star"),c.setAttribute("fill",s),c.setAttribute("stroke","none"),c.setAttribute("cx",e.x),c.setAttribute("cy",e.y),c.setAttribute("r",Math.random()*(a-o)+o),c.speed=parseFloat(c.getAttribute("r"))*r,c.angle=360*Math.random(),c.radius=Math.random()*(u-n)+n,i.push(c),d.current.appendChild(c)}!function e(t,r){t.forEach((function(e){e.angle+=e.speed*Math.PI/180,e.setAttribute("cx",r.x+e.radius*Math.cos(e.angle)),e.setAttribute("cy",r.y+e.radius*Math.sin(e.angle))})),requestAnimationFrame((function(){return e(t,r)}))}(i,e)};return i.default.createElement("div",{style:{backgroundColor:c,height:"100vh",position:"relative",width:"100%"}},i.default.createElement("svg",{style:{opacity:l,position:"absolute",pointerEvents:"none",width:"100%",height:"100%"},id:"galaxy",ref:f},i.default.createElement("g",{id:"stars",style:{width:"100%",height:"100%"},ref:d})),i.default.createElement("div",{style:{zIndex:10}},e.children))}},function(e,t){e.exports=require("react")}]);