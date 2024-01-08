import{_ as i,o as n,c as e,d}from"./app-tSvYcIf0.js";const l={},s=d(`<h2 id="vue3-ts添加公共富文本组件" tabindex="-1"><a class="header-anchor" href="#vue3-ts添加公共富文本组件" aria-hidden="true">#</a> vue3+ts添加公共富文本组件</h2><h2 id="下载" tabindex="-1"><a class="header-anchor" href="#下载" aria-hidden="true">#</a> 下载</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>npm install wangeditor --save-dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="新建一个editor-vue-的组件" tabindex="-1"><a class="header-anchor" href="#新建一个editor-vue-的组件" aria-hidden="true">#</a> 新建一个editor.vue 的组件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style scoped&gt;
.part_right {
    width: 100%;
    background: #f2f2f2;
    min-height: 100vh;
}
.list {
    width:96%;
    margin: 0 auto;

    /* background: gray; */
    padding-top: 50px;
}
.list ul li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 50px;
    background: #d5d5d5;
}
.list ul li&gt;div{
    flex: 1;
    line-height: 50px;
}
.list ol li{
    list-style-type: none;
    display: flex;
    border-bottom: 1px solid #e6e5e5;
    min-height: 30px;
}
.list ol li&gt;div{
    flex: 1;
    line-height: 30px;
}
.flright {
    float: right;
    margin-right: 2%;
}
&lt;/style&gt;
&lt;template&gt;
&lt;div&gt;   
        &lt;div className=&quot;shop&quot;&gt;
            &lt;div className=&quot;text-area&quot; &gt;
                &lt;div ref=&quot;editorElemMenu&quot;
                    style=&quot;backgroundColor: &#39;#f1f1f1&#39;; border:&#39;1px solid #ccc&#39;&quot;
                    className=&quot;editorElem-menu&quot;&gt;
                &lt;/div&gt;
                &lt;div style=&quot;height: 300;border: &#39;1px solid #ccc&#39;,borderTop: &#39;none&#39;&quot; ref=&quot;editorElemBody&quot; className=&quot;editorElem-body&quot;&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
&lt;/div&gt;


&lt;/template&gt;

&lt;script lang=&quot;ts&quot;&gt;

import { onMounted ,reactive,toRefs,defineComponent,ref} from &#39;vue&#39;
import E from &#39;wangeditor&#39;

interface DataProps {
    editor: any;
    editorContent: string
    getContent:(ref?: any) =&gt; void
}



export default defineComponent({
    name:&#39;Editor&#39;,
     components: {
    },
    props: {
        options: Object,
        value: String,
    },
    setup(props, { emit }) {
    const editorElemMenu = ref();
    const editorElemBody = ref();
    const data: DataProps = reactive({
            editorContent: &#39;&#39;,
            editor:{},
            getContent:() =&gt; {
                console.log(&quot;111&quot;,props)
                data.editor.txt.html(props.value)
            }
        })
        onMounted(() =&gt; {
            let _this = this;
            const elemMenu = editorElemMenu.value;
            const elemBody = editorElemBody.value;
             data.editor = new E(elemMenu, elemBody)
              // 使用 onchange 函数监听内容的变化，并实时更新到 state 中
                    data.editor.config.onchange = (html: any) =&gt; {
                        console.log(data.editor.txt.html())
                         data.editorContent = data.editor.txt.html()
                             // 向外部返回一个处理过的值
                         emit(&#39;onEditor&#39;, data.editor.txt.html())
                        emit(&#39;update:value&#39;, data.editor.txt.html())
                    }
                    data.editor.config.customUploadImg = function (files: any, insert: any ) {
                          // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法
                          // let file;
                          // if (files &amp;&amp; files.length) {
                          //     file = files[0];
                          // } else {
                          //     return
                          // }
                          // 图片上传
                          console.log(&quot;files1&quot;,files)

                          const formData = new FormData();
                          formData.append(&#39;file&#39;, files[0]);
                          console.log(&quot;files&quot;,files,insert)
                          // formData.append(&#39;Banners&#39;,{id:editorinfo.id,naviChildId:editorinfo.naviChildId})
                      }

                    data.editor.config.menus = [
                        &#39;head&#39;,  // 标题
                        &#39;bold&#39;,  // 粗体
                        &#39;fontSize&#39;,  // 字号
                        &#39;fontName&#39;,  // 字体
                        &#39;italic&#39;,  // 斜体
                        &#39;underline&#39;,  // 下划线
                        &#39;strikeThrough&#39;,  // 删除线
                        &#39;foreColor&#39;,  // 文字颜色
                        &#39;backColor&#39;,  // 背景颜色
                        &#39;link&#39;,  // 插入链接
                        &#39;list&#39;,  // 列表
                        &#39;justify&#39;,  // 对齐方式
                        &#39;quote&#39;,  // 引用
                        &#39;emoticon&#39;,  // 表情
                        &#39;image&#39;,  // 插入图片
                        &#39;table&#39;,  // 表格
                        &#39;video&#39;,  // 插入视频
                        &#39;code&#39;,  // 插入代码
                        &#39;undo&#39;,  // 撤销
                        &#39;redo&#39;  // 重复
                    ]
                    data.editor.config.uploadImgShowBase64 = true
                    data.editor.create()

                    // data.getContent()
        })
        const refData = toRefs(data);
        return {
            ...refData,
            editorElemMenu,
            editorElemBody
        }
    }
})
&lt;/script&gt;




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="调用的组件" tabindex="-1"><a class="header-anchor" href="#调用的组件" aria-hidden="true">#</a> 调用的组件</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;style scoped&gt;


&lt;/style&gt;


&lt;template&gt;
    &lt;div class=&quot;part_right&quot;&gt;   
        &lt;Editor ref=&quot;Editor&quot; :value=&quot;content&quot; @onEditor=&quot;onEditor&quot;/&gt;
    &lt;/div&gt;
&lt;/template&gt;
&lt;script lang=&quot;ts&quot;&gt;

import { onMounted ,reactive,toRefs,defineComponent,ref} from &#39;vue&#39;
import Editor from &#39;@/components/tool/editor.vue&#39;

interface DataProps {
    content: string;
    showBack:(ref?: any) =&gt; void
}



export default defineComponent({
    name:&#39;about&#39;,
     components: {
         Editor
    },
    setup() {
        const Editor = ref();
        const data: DataProps = reactive({
            content:&#39;1&#39;,
            //获取富文本中的内容
            onEditor:(value: string) =&gt; {
                    console.log(&quot;父组件&quot;,value)
            },
            // 富文本回显
            showBack:() =&gt; {
                data.content = &#39;回显内容公众号qdleader&#39;
                console.log(&quot; data.content&quot;, data.content)
                setTimeout(() =&gt;{
                    Editor.value.getContent()
                })

            }
        })

        onMounted(() =&gt; {
            data.showBack()
        })
        const refData = toRefs(data);
        return {
            ...refData,
            Editor
        }
    }
})
&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就完成可以在vue3加ts中使用 富文本啦</p><p>拓展。。</p><p>有的同学需要自定义上传图片的接口</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data.editor.config.customUploadImg = function (files: any, insert: any ) {
        // files 是 input 中选中的文件列表insert 是获取图片 url 后，插入到编辑器的方法
        // let file;
        // if (files &amp;&amp; files.length) {
        //     file = files[0];
        // } else {
        //     return
        // }
        // 图片上传
        console.log(&quot;files1&quot;,files)

        const formData = new FormData();
        formData.append(&#39;file&#39;, files[0]);
        console.log(&quot;files&quot;,files,insert)
        // formData.append(&#39;Banners&#39;,{id:editorinfo.id,naviChildId:editorinfo.naviChildId})

        // 把请求你们服务器地址获得的图片链接，替换到下面src里面即可
      data.editor.txt.append(&quot;&lt;img src=&#39;https://rmxgh-1305579889.cos.ap-beijing.myqcloud.com/img/64bec1a86509170772c19fc5f88d84e1.jpg&#39; /&gt;&quot;)

    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v=[s];function a(t,r){return n(),e("div",null,v)}const c=i(l,[["render",a],["__file","vue3_ts添加公共富文本组件.html.vue"]]);export{c as default};
