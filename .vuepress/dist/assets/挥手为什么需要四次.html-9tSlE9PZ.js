import{_,o as t,c as a,a as e,b as c}from"./app-xrgnhFxe.js";const o={},s=e("h2",{id:"挥手为什么需要四次",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#挥手为什么需要四次","aria-hidden":"true"},"#"),c(" 挥手为什么需要四次？")],-1),n=e("p",null,"因为当服务端收到客户端的SYN连接请求报文后，可以直接发送SYN+ACK报文。其中ACK报文是用来应答的，SYN报文是用来同步的。但是关闭连接时，当服务端收到FIN报文时，很可能并不会立即关闭SOCKET，所以只能先回复一个ACK报文，告诉客户端，“你发的FIN报文我收到了”。只有等到我服务端所有的报文都发送完了，我才能发送FIN报文，因此不能一起发送。故需要四次挥手。",-1),r=[s,n];function d(i,l){return t(),a("div",null,r)}const f=_(o,[["render",d],["__file","挥手为什么需要四次.html.vue"]]);export{f as default};
