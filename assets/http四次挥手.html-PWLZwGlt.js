import{_ as e,o as _,c as s,a as t,b as o}from"./app-tSvYcIf0.js";const n={},c=t("h2",{id:"http-四次挥手",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http-四次挥手","aria-hidden":"true"},"#"),o(" http 四次挥手")],-1),a=t("p",null,"建立一个连接需要三次握手，而终止一个连接要经过四次挥手,这由TCP的半关闭（half-close）造成的。所谓的半关闭，其实就是TCP提供了连接的一端在结束它的发送后还能接收来自另一端数据的能力。",-1),l=t("p",null,"TCP 的连接的拆除需要发送四个包，因此称为四次挥手(Four-way handshake)，客户端或服务器均可主动发起挥手动作。 刚开始双方都处于 ESTABLISHED 状态，假如是客户端先发起关闭请求。四次挥手的过程如下：",-1),h=t("p",null,"第一次挥手：客户端发出连接释放报文段（FIN=1，序号seq=u），并停止再发送数据，主动关闭TCP连接，进入FIN_WAIT1（终止等待1）状态，等待服务端的确认。",-1),d=t("p",null,"第二次挥手：服务端收到连接释放报文段后即发出确认报文段（ACK=1，确认号ack=u+1，序号seq=v），服务端进入CLOSE_WAIT（关闭等待）状态，此时的TCP处于半关闭状态，客户端到服务端的连接释放。客户端收到服务端的确认后，进入FIN_WAIT2（终止等待2）状态，等待服务端发出的连接释放报文段。",-1),r=t("p",null,"第三次挥手：服务端没有要向客户端发出的数据，服务端发出连接释放报文段（FIN=1，ACK=1，序号seq=w，确认号ack=u+1），服务端进入LAST_ACK（最后确认）状态，等待客户端的确认。",-1),i=t("p",null,"第四次挥手：客户端收到服务端的连接释放报文段后，对此发出确认报文段（ACK=1，seq=u+1，ack=w+1），客户端进入TIME_WAIT（时间等待）状态。此时TCP未释放掉，需要经过时间等待计时器设置的时间2MSL后，客户端才进入CLOSED状态。",-1),u=t("p",null,"收到一个FIN只意味着在这一方向上没有数据流动。客户端执行主动关闭并进入TIME_WAIT是正常的，服务端通常执行被动关闭，不会进入TIME_WAIT状态。",-1),T=[c,a,l,h,d,r,i,u];function p(I,A){return _(),s("div",null,T)}const f=e(n,[["render",p],["__file","http四次挥手.html.vue"]]);export{f as default};
