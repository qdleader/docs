import{_ as e,o as t,c as l,a as _,b as n}from"./app-ZRLx3Eaw.js";const s={},o=_("h1",{id:"四次挥手释放连接时-等待2msl的意义",tabindex:"-1"},[_("a",{class:"header-anchor",href:"#四次挥手释放连接时-等待2msl的意义","aria-hidden":"true"},"#"),n(" 四次挥手释放连接时，等待2MSL的意义?")],-1),c=_("p",null,"MSL是Maximum Segment Lifetime的英文缩写，可译为“最长报文段寿命”，它是任何报文在网络上存在的最长时间，超过这个时间报文将被丢弃。",-1),a=_("ol",null,[_("li",null,[_("p",null,"为了保证客户端发送的最后一个ACK报文段能够到达服务器。因为这个ACK有可能丢失，从而导致处在LAST-ACK状态的服务器收不到对FIN-ACK的确认报文。服务器会超时重传这个FIN-ACK，接着客户端再重传一次确认，重新启动时间等待计时器。最后客户端和服务器都能正常的关闭。假设客户端不等待2MSL，而是在发送完ACK之后直接释放关闭，一但这个ACK丢失的话，服务器就无法正常的进入关闭连接状态。")]),_("li",null,[_("p",null,"防止“已失效的连接请求报文段”出现在本连接中。 客户端在发送完最后一个ACK报文段后，再经过2MSL，就可以使本连接持续的时间内所产生的所有报文段都从网络中消失，使下一个新的连接中不会出现这种旧的连接请求报文段。")])],-1),i=_("p",null,"延伸",-1),r=_("p",null,"这种2MSL等待的另一个结果是这个TCP连接在2MSL等待期间，定义这个连接的插口（客户的IP地址和端口号，服务器的IP地址和端口号）不能再被使用。这个连接只能在2MSL结束后才能再被使用。",-1),d=[o,c,a,i,r];function u(h,m){return t(),l("div",null,d)}const S=e(s,[["render",u],["__file","四次挥手释放连接时，等待2MSL的意义_.html.vue"]]);export{S as default};
