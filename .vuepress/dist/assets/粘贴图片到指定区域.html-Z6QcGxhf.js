import{_ as e,o as n,c as i,d as s}from"./app-Ni1_oyYA.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        // 监听paste事件
        const el = document.querySelector(&#39;body&#39;);
        document.addEventListener(&#39;paste&#39;, function (e) {
            const dataTransferItemList = e.clipboardData.items;
            // 过滤非图片类型
            const items = [].slice.call(dataTransferItemList).filter(function (item) {
                return item.type.indexOf(&#39;image&#39;) !== -1;
            });
            if (items.length === 0) {
                return;
            }
            const dataTransferItem = items[0];
            const blob = dataTransferItem.getAsFile();
            // 获取base64
            const fileReader = new FileReader();
            fileReader.addEventListener(&#39;load&#39;, function (e) {
                console.log(e);
                let base64 = e.target.result;
                let img = document.createElement(&#39;img&#39;);
                img.src = event.target.result;
                el.appendChild(img)
            });
            fileReader.readAsDataURL(blob);
            // 如果觉得base64太长，也可以生成本地临时链接
            let url = URL.createObjectURL(blob);
            // 上传图片至后台
            // upload(blob);
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[d];function t(r,c){return n(),i("div",null,a)}const m=e(l,[["render",t],["__file","粘贴图片到指定区域.html.vue"]]);export{m as default};
