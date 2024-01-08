import{_ as t,o as n,c as a,b as i,a as e}from"./app-tgHnmF2J.js";const o={},s=e("div",{id:"app"},"qdleader",-1),r=e("pre",null,[e("code",null,`    #app::after {
        content: "qdleader";
        position: absolute;
        inset: 0;
        background-image: linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(234, 179, 8));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        clip-path: ellipse(100px 100px at 0 50%);
        animation: qd 3s ease-in infinite;
    }

    @keyframes qd {
        50% {
            clip-path: ellipse(100px 100px at 100% 50%);
        }

        to {
            clip-path: ellipse(100px 100px at 0% 50%);
        }
    }
`)],-1),l=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code")]),e("div",{class:"line-numbers","aria-hidden":"true"})],-1);function c(p,d){return n(),a("div",null,[s,i(" ```css #app { font-weight: bold; width: max-content; color: gray; position: relative; text-transform: uppercase; font-size: 100px; } "),r,l])}const x=t(o,[["render",c],["__file","文字聚光灯效果.html.vue"]]);export{x as default};
