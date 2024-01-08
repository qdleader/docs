import{_ as i,o as e,c as n,d as s}from"./app-1IAv0yAY.js";const d={},l=s(`<p>react + ts 中添加条形码批量生成</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import JsBarcode from &#39;jsbarcode&#39;;



       // 导出条形码

     exportDefaultBarList = (dev_id: number = 1) =&gt; {
         deviceDevnoList({dev_id:dev_id})
         .then((res) =&gt; {
           console.log(&quot;要导出码库列表&quot;, res);
           let list = res.data;
           this.setState({
             qrList:res.data
           })

           setTimeout(() =&gt; {
             this.downloadBarPicture()
           },50)


           console.log(&quot;list&quot;, list);

         })
         .catch((err) =&gt; {
           console.log(err);
         });
     }
downloadBarPicture() {
      let barcode = document.getElementById(&#39;barcodeBox&#39;)
       for(let i = 0; i &lt; this.state.qrList.length;i ++) {
          let li = document.createElement(&#39;svg&#39;)
           li.id = i + &#39;&#39;
          barcode?.appendChild(li)
       }

       setTimeout(() =&gt; {
           let svgList =  barcode?.getElementsByTagName(&#39;svg&#39;)
           for(let i = 0;i &lt; this.state.qrList.length; i++) {
              if(svgList) {
                  let content = svgList[i]
                   JsBarcode(content,this.state.qrList[i].device_id+&#39;&#39;)
              }
           }
       },500)
}    



&lt;Button type=&#39;primary&#39; onClick={() =&gt; {
                            this.exportDefaultBarList(admin.dev_id)
                        }}&gt;导出条形码&lt;/Button&gt;

                        &lt;div id=&quot;barcodeBox&quot;&gt;
                                       {
                                               this.state.qrList.map((v:any) =&gt; (

                                                       &lt;svg key={v.id}&gt;111&lt;/svg&gt;

                                               ))
                                           }

                                       &lt;/div&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),v=[l];function t(a,r){return e(),n("div",null,v)}const u=i(d,[["render",t],["__file","react_ts批量生成条形码.html.vue"]]);export{u as default};
