import{_ as e,o as t,c as o,a as n}from"./app-pokGQ7aS.js";const s={},c=n("pre",null,[n("code",null,`\`\`\`
function getUtcTimestamp() {
    const now = new Date();
    const utcTimestamp = Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
    );
    return \`\${parseInt(utcTimestamp / 1000, 10)}\`;
}
\`\`\`
`)],-1),_=[c];function a(r,l){return t(),o("div",null,_)}const u=e(s,[["render",a],["__file","前端获取UTC时间戳.html.vue"]]);export{u as default};
