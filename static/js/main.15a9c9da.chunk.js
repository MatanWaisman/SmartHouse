(this.webpackJsonpsmarthouse=this.webpackJsonpsmarthouse||[]).push([[0],{19:function(e,t,a){e.exports=a(31)},24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=(a(24),a(9)),m=a(4),u=a(6),i=a(7);a(25);function s(){return o.a.createElement("div",{className:"Header"},o.a.createElement("h1",null,"Smart House"))}function E(e){var t=e.listRoom.map((function(e,t){return o.a.createElement(u.b,{to:"/room/"+e.name,style:{backgroundColor:e.color},className:"addroombutton"},e.name,o.a.createElement("br",null))}));return o.a.createElement("div",null,o.a.createElement("div",null,t),o.a.createElement("br",null),o.a.createElement(u.b,{to:"/addroom"},o.a.createElement("button",{className:"addroombutton",onClick:e.indexX},"+")))}function d(e){var t=Object(n.useState)("Bedroom"),a=Object(m.a)(t,2),r=a[0],l=a[1],c=Object(n.useState)(""),i=Object(m.a)(c,2),s=i[0],E=i[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),p=b[0],v=b[1];return o.a.createElement("div",{className:"addroom"},o.a.createElement("select",{value:r,onChange:function(e){l(e.target.value)},className:"addroombutton"},o.a.createElement("option",{value:"Bedroom"},"Bedroom"),o.a.createElement("option",{value:"Bathroom"},"Bathroom"),o.a.createElement("option",{value:"Kitchen"},"Kitchen")),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"text",placeholder:"Room name",onChange:function(e){v(e.target.value)},className:"addroombutton"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"color",onChange:function(e){E(e.target.value)},className:"addroombutton"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(u.b,{to:"/"},o.a.createElement("button",{onClick:function(){return e.add(p,s,r)},className:"addroombutton"},"Create Room")),o.a.createElement("br",null))}function b(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],l=a[1],u=Object(n.useState)("AC"),i=Object(m.a)(u,2),s=i[0],E=i[1],d=Object(n.useState)([]),b=Object(m.a)(d,2),p=b[0],v=b[1],h=e.listRoom.map((function(e){return e.name})),f=e.listRoom.map((function(e){return e.type})),g=p.map((function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("button",{style:{backgroundColor:e.color},onClick:function(){return j(t)}},e.name),o.a.createElement("br",null))})),j=function(e){if("red"===p[e].color){var t=Object(c.a)(p);t[e].color="green",v(t)}else{var a=Object(c.a)(p);a[e].color="red",v(a)}},O=function(){var e,t;e=s,t="red",p.length<5?v([].concat(Object(c.a)(p),[{name:e,color:t}])):alert("Error"),l(!1)};return o.a.createElement("div",null,!0===r?o.a.createElement("div",null,o.a.createElement("div",null,"Room name: ",h),o.a.createElement("br",null),o.a.createElement("div",null,"Room type: ",f," "),o.a.createElement("br",null),o.a.createElement("select",{value:s,onChange:function(e){return E(e.target.value)},className:"addroombutton"},o.a.createElement("option",{value:"AC"},"AC"),o.a.createElement("option",{value:"Light"},"Light"),o.a.createElement("option",{value:"Setro System"},"Setro System"),o.a.createElement("option",{value:"Boiler"},"Boiler")),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){return O()}},"Select Product")):o.a.createElement("div",null,o.a.createElement("div",null,"Room name: ",h),o.a.createElement("br",null),o.a.createElement("div",null,"Room type: ",f," "),o.a.createElement("br",null),g,o.a.createElement("button",{onClick:function(){return l(!0)}},"Add New Product")),o.a.createElement("br",null))}function p(){return o.a.createElement("div",{className:"house-icon"},o.a.createElement(u.b,{to:"/"},o.a.createElement("span",{style:{padding:"0",position:"absolute",top:"65px",left:"1030px",width:"40px",height:"33px",background:"none",color:"#008081",border:"none",fontSize:"30px",outline:"none"}},"\ud83c\udfe0")))}var v=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),v=Object(m.a)(l,2),h=v[0],f=v[1],g=function(e,t,n){e.length>5||0===e.length?alert("Error"):(r([].concat(Object(c.a)(a),[{name:e,color:t,type:n}])),f([{name:e,color:t,type:n}]))};return o.a.createElement("div",{className:"App"},o.a.createElement(s,null),o.a.createElement(u.a,null,o.a.createElement(p,null),o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:"/",component:function(){return o.a.createElement(E,{listRoom:a})}}),o.a.createElement(i.a,{exact:!0,path:"/addroom",component:function(){return o.a.createElement(d,{add:g})}}),o.a.createElement(i.a,{exact:!0,path:"/room/:name",component:function(){return o.a.createElement(b,{listRoom:h})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.15a9c9da.chunk.js.map