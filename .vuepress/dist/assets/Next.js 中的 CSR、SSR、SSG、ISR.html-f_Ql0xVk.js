import{_ as n,o as s,c as a,d as e}from"./app-C59QzqDT.js";const t={},p=e(`<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>js
Next<span class="token punctuation">.</span>js 给自己的介绍是“The React Framework”，没接触过的同学可能会有疑问？React 已经是一个框架了，为什么还要有 Next<span class="token punctuation">.</span>js 呢？其实 Next<span class="token punctuation">.</span>js 是为了互补 React 的不足，Next<span class="token punctuation">.</span>js 提供了 <span class="token constant">CSR</span>、<span class="token constant">SSR</span>、<span class="token constant">SSG</span>、<span class="token constant">ISR</span>、 Streaming 这么多渲染方式，


## <span class="token constant">CSR</span>（Client Side Rendering）
<span class="token constant">CSR</span> 也就是客户端渲染，需要使用 JavaScript，调用接口（<span class="token constant">API</span>）来获取数据，这种方式前后端完全分离。
比如现在有一个博客接口<span class="token operator">/</span>api<span class="token operator">/</span>articles，返回 <span class="token constant">JSON</span> 数据如下

js
<span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;使用 Next.js 和掘金API 打造个性博客&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;使用 Strapi 和 Next.js 开发简易微博&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token string-property property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;使用 Notion 数据库进行 Next.js 应用全栈开发&quot;</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>

通常 React 项目会使用 create<span class="token operator">-</span>react<span class="token operator">-</span>app 来创建项目，我们会在useEffect 中请求数据。
tsx
<span class="token comment">// import { useState, useEffect } from &quot;react&quot;;</span>
<span class="token comment">// </span>
<span class="token comment">// function BlogList() {</span>
<span class="token comment">//   const [data, setData] = useState(null);</span>
<span class="token comment">//   const [isLoading, setLoading] = useState(false);</span>
<span class="token comment">// </span>
<span class="token comment">//   const reload = () =&gt; {</span>
<span class="token comment">//     setLoading(true);</span>
<span class="token comment">//     fetch(&quot;/api/articles&quot;).then((res) =&gt; res.json()).then((data) =&gt; {</span>
<span class="token comment">//         setData(data);</span>
<span class="token comment">//         setLoading(false);</span>
<span class="token comment">//       });</span>
<span class="token comment">//   };</span>
<span class="token comment">// </span>
<span class="token comment">//   useEffect(() =&gt; {</span>
<span class="token comment">//     reload();</span>
<span class="token comment">//   }, []);</span>
<span class="token comment">// </span>
<span class="token comment">//   if (!data &amp;&amp; isLoading) return &lt;p&gt;Loading...&lt;/p&gt;;</span>
<span class="token comment">//   if (!data) return &lt;p&gt;No data&lt;/p&gt;;</span>
<span class="token comment">// </span>
<span class="token comment">//   return (</span>
<span class="token comment">//     &lt;div&gt;</span>
<span class="token comment">//       &lt;div&gt;</span>
<span class="token comment">//         &lt;button disabled={isLoading} loading={isLoading} onClick={reload}&gt;刷新&lt;/button&gt;</span>
<span class="token comment">//       &lt;/div&gt;</span>
<span class="token comment">//       {data.map((item) =&gt; (</span>
<span class="token comment">//         &lt;div key={item.id}&gt;</span>
<span class="token comment">//           &lt;a href={\`/blog/\${item.id}\`}&gt;{item.title}&lt;/a&gt;</span>
<span class="token comment">//         &lt;/div&gt;</span>
<span class="token comment">//       ))}</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

上面的代码中，页面上还有一个刷新按钮，当数据新增时，接口接口会多返回一条数据，点击刷新按钮，页面上已经存在的 <span class="token constant">DOM</span> 节点是不更新的，<span class="token constant">DOM</span> 中只会插入新增的数据，这样我们就会感觉页面渲染很快。
这得益于 React 中引入了虚拟 dom，也就是将真实元素节点抽象成 JavaScript 对象，称之为 VNode，更新 <span class="token constant">DOM</span> 前会先通过 <span class="token constant">VDOM</span> 对比，得到要真实更新的 <span class="token constant">DOM</span>，因此可以有效减少直接操作 dom 次数，从而提高程序性能。



Next<span class="token punctuation">.</span>js 团队发布了另一个关于数据请求的 hooks 叫 swr，名字来自于 stale<span class="token operator">-</span><span class="token keyword">while</span><span class="token operator">-</span>revalidate，意思是过期就会重新验证，它有缓存，聚焦时重新验证，间隔轮询等功能。
与上面代码功能相同，我们可以改成下面代码：
jsx
<span class="token keyword">import</span> useSWR <span class="token keyword">from</span> <span class="token string">&quot;swr&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">fetcher</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">BlogList</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> error <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSWR</span><span class="token punctuation">(</span><span class="token string">&quot;/api/articles&quot;</span><span class="token punctuation">,</span> fetcher<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">refreshInterval</span><span class="token operator">:</span> <span class="token number">3000</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Failed to load<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>data<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>
        <span class="token operator">&lt;</span>div key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token punctuation">{</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/blog/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>item<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">}</span><span class="token operator">&gt;</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>title<span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>a<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
      <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



#### <span class="token constant">CSR</span> 存在的问题
基于 create<span class="token operator">-</span>react<span class="token operator">-</span>app 创建的应用，在 <span class="token constant">HTML</span> 首次挂载的的时候仅有几个 <span class="token constant">DOM</span> 节点，类似如下
html
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> content<span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>link rel<span class="token operator">=</span><span class="token string">&quot;stylesheet&quot;</span> media<span class="token operator">=</span><span class="token string">&quot;screen&quot;</span> href<span class="token operator">=</span><span class="token string">&quot;/assets/css/index-fe9dd8655d2ba.css&quot;</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;root&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;/assets/js/main-d0bbfde89eb2a.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">&gt;</span> <span class="token operator">--</span><span class="token operator">&gt;</span>



这就会引起 <span class="token number">2</span> 个问题

<span class="token operator">&gt;</span> <span class="token number">1.</span> 首次渲染，白屏时间过长；
<span class="token operator">&gt;</span> <span class="token number">2.</span> 由于所有 <span class="token constant">JS</span> 都打包在一个文件中，在这个 <span class="token constant">JS</span> 加载完成之前，在页面上是看不到任何东西，这就会让用户感受到‘白屏’
对于搜索引擎来说，只能在页面中发现一个 <span class="token constant">DOM</span> 节点，不利于 <span class="token constant">SEO</span>；因为搜索引擎是不支持执行 JavaScript 代码的。


## <span class="token constant">SSR</span>（Server Side Rendering）

<span class="token constant">SSR</span> 也就是服务端渲染，有些同学可能会问“难道要回到 <span class="token constant">PHP</span> 或者 <span class="token constant">JSP</span> 时代吗？”，没错 <span class="token constant">PHP</span> 和 <span class="token constant">JSP</span> 是服务端渲染，但 Next<span class="token punctuation">.</span>js 的 <span class="token constant">SSR</span> 不同于纯服务端渲染，也拥有着如 <span class="token constant">SPA</span> 一样快速渲染的能力。传统的服务端渲染只有 <span class="token constant">HTML</span> 字符串，缺少交互，比如有一个ClickCounter 组件
jsx
<span class="token comment">// shared/components/ClickCounter.jsx</span>
<span class="token keyword">import</span> React<span class="token punctuation">,</span><span class="token punctuation">{</span> useState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">ClickCounter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>count<span class="token punctuation">,</span> setCount<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
      <span class="token operator">&lt;</span>button onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">setCount</span><span class="token punctuation">(</span>count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">}</span> <span class="token operator">&gt;</span> <span class="token punctuation">{</span>count<span class="token punctuation">}</span> Clicks <span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>


经过服务端渲染只能得到最简单的的 <span class="token constant">HTML</span>。

jsx
<span class="token comment">// server/index.js</span>
<span class="token comment">// import ReactDOMServer from &quot;react-dom/server&quot;;</span>
<span class="token comment">// import express from &quot;express&quot;;</span>

<span class="token comment">// require(&quot;node-jsx&quot;).install();</span>

<span class="token comment">// const app = express();</span>

<span class="token comment">// app.get(&quot;/&quot;, (req, res) =&gt; {</span>
<span class="token comment">//     const reactHtml = ReactDOMServer.renderToString(&lt;ClickCounter /&gt;）</span>
<span class="token comment">//     const htmlTemplate = \`&lt;!DOCTYPE html&gt;</span>
<span class="token comment">//     &lt;html&gt;</span>
<span class="token comment">//         &lt;head&gt;</span>
<span class="token comment">//             &lt;title&gt;Universal React server bundle&lt;/title&gt;</span>
<span class="token comment">//         &lt;/head&gt;</span>
<span class="token comment">//         &lt;body&gt;</span>
<span class="token comment">//             &lt;div id=&quot;root&quot;&gt;\${reactHtml}&lt;/div&gt;</span>
<span class="token comment">//             &lt;script src=&quot;public/client.bundle.js&quot;&gt;&lt;/script&gt;</span>
<span class="token comment">//         &lt;/body&gt;</span>
<span class="token comment">//     &lt;/html&gt;\`</span>
<span class="token comment">//     res.send(htmlTemplate)</span>
<span class="token comment">// });</span>


打印出的 button 点击无效，传统的服务端渲染到此就结束了。而 react 服务端渲染，需要客户端根据服务端生成的页面，继续二次渲染、事件绑定等

js
<span class="token comment">// client/index.jsx</span>
<span class="token comment">// import React from &#39;react&#39;;</span>
<span class="token comment">// import { hydrate } from &#39;react-dom&#39;;</span>

<span class="token comment">// hydrate(&lt;ClickCounter /&gt;, document.getElementById(&#39;root&#39;));</span>




服务器端使用renderToString直接渲染出的页面信息为静态 html。
客户端根据渲染出的静态 html 进行hydrate，做一些绑定事件等操作。
因此，若要使用 react 来实现服务端渲染，一般需要 <span class="token number">3</span> 个目录，工程配置比较繁琐。
server： 包含 express 的后端工程
client： 包含 react 的前端工程
shared： 包含前后端公用的组件代码。


而在 Nextjs 中，只需要在 Pages 目录下，如下这么写，Next<span class="token punctuation">.</span>js 便会自动打包出前后端的代码，拥有 hydrate 的能力
jsx
<span class="token comment">// import Link from &quot;next/link&quot;;</span>

<span class="token comment">// export default function Page({ data }: PageProps) {</span>
<span class="token comment">//   return (</span>
<span class="token comment">//     &lt;div&gt;</span>
<span class="token comment">//       {data.map((item) =&gt; (</span>
<span class="token comment">//         &lt;div key={item.id}&gt;</span>
<span class="token comment">//           &lt;Link href={\`/blog/\${item.id}\`}&gt;&lt;a&gt;{item.title}&lt;/a&gt;&lt;/Link&gt;</span>
<span class="token comment">//         &lt;/div&gt;</span>
<span class="token comment">//       ))}</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

<span class="token comment">// export const getServerSideProps: GetServerSideProps = async () =&gt; {</span>
<span class="token comment">//   const res = await fetch(&#39;https://localhost:3000/api/articles&#39;).then((res)=&gt;res.json());</span>

<span class="token comment">//   return {</span>
<span class="token comment">//     props: { data: res },</span>
<span class="token comment">//   };</span>
<span class="token comment">// };</span>

<span class="token literal-property property">我们需要清楚的是</span><span class="token operator">:</span>

getServerSideProps 只在服务端执行
Page 组件是在前后端公共执行

所以，在 Page 函数中要注意一些全局对象的使用，比如window对象（Node<span class="token punctuation">.</span>js 中是不存在的，所以会报错）


jsx
<span class="token comment">// ❎ 错误代码</span>
<span class="token comment">// export default function Page({ data }: PageProps) {</span>
<span class="token comment">//   return (</span>
<span class="token comment">//     &lt;div &gt;</span>
<span class="token comment">//     11</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

我们应该将 window 操作放入 useEffect 中，或者 click 回调函数中，因为这些函数在服务端渲染的时候是自动忽略的。
<span class="token constant">SSR</span> 解决了白屏问题和 <span class="token constant">SEO</span> 问题，但是也不是完美的。

#### <span class="token constant">SSR</span> 存在的问题

<span class="token operator">&gt;</span> <span class="token number">1.</span> 当请求量增大时，每次重新渲染增加了服务器的开销。
<span class="token operator">&gt;</span> <span class="token number">2.</span> 需要等页面中所有接口请求完成才可以返回 html，虽不是白屏，但完成hydrate之前，页面也是不可操作。




## <span class="token constant">SSG</span>（Static Site Generation）

<span class="token constant">SSG</span> 也就是静态站点生成，为了减缓服务器压力，我们可以在构建时生成静态页面，备注：Next<span class="token punctuation">.</span>js 生成的静态页面与普通的静态页面是不一样的，也是拥有 <span class="token constant">SPA</span> 的能力，切换页面用户不会感受到整个页面在刷新
比如文章列表页，要生成静态页面，在 Next<span class="token punctuation">.</span>js 中代码如下：
jsx
<span class="token comment">// import Link from &quot;next/link&quot;;</span>

<span class="token comment">// export default function Page({ data }: PageProps) {</span>
<span class="token comment">//   return (</span>
<span class="token comment">//     &lt;div&gt;</span>
<span class="token comment">//       {data.map((item) =&gt; (</span>
<span class="token comment">//         &lt;div key={item.id}&gt;</span>
<span class="token comment">//           &lt;Link href={\`/blog/\${item.id}\`}&gt;&lt;a&gt;{item.title}&lt;/a&gt;&lt;/Link&gt;</span>
<span class="token comment">//         &lt;/div&gt;</span>
<span class="token comment">//       ))}</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

<span class="token comment">// export const getStaticProps: GetStaticProps = async () =&gt; {</span>
<span class="token comment">//   const res = await fetch(&#39;https://localhost:3000/api/articles&#39;).then((res)=&gt;res.json());</span>

<span class="token comment">//   return {</span>
<span class="token comment">//     props: { data: res },</span>
<span class="token comment">//   };</span>
<span class="token comment">// };</span>

使用getStaticProps 可以获得静态网页的数据，传递给 Page 函数，便可以生成静态页面。博客列表 <span class="token constant">URL</span> 是固定的，那么不是固定 <span class="token constant">URL</span> 的页面，要生成静态页面怎么办呢？比如博客详情页。
jsx
<span class="token comment">// pages/blog/[id].tsx</span>


<span class="token comment">// export async function getStaticPaths() {</span>
<span class="token comment">//   const articles = await fetch(&#39;https://localhost:3000/api/articles&#39;).then((res)=&gt;res.json());</span>
<span class="token comment">//   return {</span>
<span class="token comment">//     paths: articles.map((p) =&gt; ({</span>
<span class="token comment">//       params: {</span>
<span class="token comment">//         id: p.id.toString(),</span>
<span class="token comment">//       },</span>
<span class="token comment">//     })),</span>
<span class="token comment">//     fallback: false,</span>
<span class="token comment">//   }</span>
<span class="token comment">// }</span>

<span class="token comment">// export const getStaticProps: GetStaticProps = async ({params}) =&gt; {</span>
<span class="token comment">//   const res = await fetch(\`https://localhost:3000/api/articles/\${params.id}\`).then((res)=&gt;res.json());</span>

<span class="token comment">//   return {</span>
<span class="token comment">//     props: { data: res },</span>
<span class="token comment">//   };</span>
<span class="token comment">// };</span>

<span class="token comment">// export default function Page({ data }: PageProps) {</span>
<span class="token comment">//   return (</span>
<span class="token comment">//     &lt;div&gt;</span>
<span class="token comment">//       &lt;h1&gt;{data.tltle}&lt;/h1&gt;</span>
<span class="token comment">//       &lt;div&gt;{data.content}&lt;/div&gt;</span>
<span class="token comment">//     &lt;/div&gt;</span>
<span class="token comment">//   );</span>
<span class="token comment">// }</span>

我们可以使用 getStaticPaths 获得所有文章的路径，返回的paths 参数会传递给getStaticProps，在 getStaticProps中，通过 params 获得文章 id， Next<span class="token punctuation">.</span>js 会在构建时，将paths 遍历生成所有静态页面。
<span class="token constant">SSG</span> 的优点就是快，部署不需要服务器，任何静态服务空间都可以部署，而缺点也是因为静态，不能动态渲染，每添加一篇博客，就需要重新构建。



## <span class="token constant">ISR</span>（Incremental Static Regeneration）

于是有了一另一种方案 <span class="token constant">ISR</span>，增量静态生成，在访问时生成静态页面，在 Next<span class="token punctuation">.</span>js 中，它比 <span class="token constant">SSG</span> 方案只需要加了一个参数revalidate
jsx

<span class="token comment">// export const getStaticProps: GetStaticProps = async () =&gt; {</span>
<span class="token comment">//   const res = await fetch(&#39;https://localhost:3000/api/articles&#39;).then((res)=&gt;res.json());</span>

<span class="token comment">//   return {</span>
<span class="token comment">//     props: { data: res },</span>
<span class="token comment">//     revalidate: 20,</span>
<span class="token comment">//   };</span>
<span class="token comment">// };</span>

上面代码表示，当访问页面时，发现 20s 没有更新页面就会重新生成新的页面，但当前访问的还是已经生成的静态页面，也就是：是否重新生成页面，需要根据上一次的生成时间来判断，并且数据会延迟 <span class="token number">1</span> 次。
我们可以在页面上显示生成时间

tsx
<span class="token comment">// function Time() {</span>
<span class="token comment">//   const [time, setTime] = useState(new Date().toLocaleTimeString());</span>
<span class="token comment">//   useEffect(() =&gt; {</span>
<span class="token comment">//     const t = setInterval(() =&gt; {</span>
<span class="token comment">//       const time = new Date().toLocaleTimeString();</span>
<span class="token comment">//       setTime(time);</span>
<span class="token comment">//     }, 1000);</span>
<span class="token comment">//     return () =&gt; {</span>
<span class="token comment">//       clearInterval(t);</span>
<span class="token comment">//     };</span>
<span class="token comment">//   }, []);</span>
<span class="token comment">// </span>
<span class="token comment">//   return &lt;h1&gt;当前时间：{time}&lt;/h1&gt;;</span>
<span class="token comment">// }</span>


<span class="token comment">// export default function Page({ data, time }) {</span>
<span class="token comment">//  return (</span>
<span class="token comment">//    &lt;div&gt;</span>
<span class="token comment">//      &lt;h1&gt;</span>
<span class="token comment">//        页面生成时间：&lt;span&gt;{time}&lt;/span&gt;</span>
<span class="token comment">//      &lt;/h1&gt;</span>
<span class="token comment">//      &lt;Time /&gt;</span>
<span class="token comment">//      {data.map((item) =&gt; (</span>
<span class="token comment">//        &lt;div key={item.id}&gt;</span>
<span class="token comment">//          &lt;Link href={\`/blog/\${item.id}\`}&gt;{item.title}&lt;/Link&gt;</span>
<span class="token comment">//        &lt;/div&gt;</span>
<span class="token comment">//      ))}</span>
<span class="token comment">//    &lt;/div&gt;</span>
<span class="token comment">//  );</span>
<span class="token comment">//}</span>
<span class="token comment">//</span>
<span class="token comment">//export const getStaticProps = async ({ params }) =&gt; {</span>
<span class="token comment">//  const res = await getList();</span>
<span class="token comment">//</span>
<span class="token comment">//  const time = new Date().toLocaleTimeString();</span>
<span class="token comment">//</span>
<span class="token comment">//  return {</span>
<span class="token comment">//    props: { data: res, time },</span>
<span class="token comment">//    revalidate: 20,</span>
<span class="token comment">//  };</span>
<span class="token comment">//}; </span>



js

<span class="token comment">// 上面代码中我们定义了一个 Time 组件，Time 在客户端渲染，每秒自动刷新。</span>
<span class="token comment">//  本地使用运行yarn build 和 yarn start 来模拟生成环境，测试增量生成。</span>


##### 列表页面可以增量生成，那么详情页呢？

若我们访问不存在的 id，比如 http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>blog<span class="token operator">/</span><span class="token number">4</span>，页面会显示 <span class="token number">404</span>。
getStaticPaths 方法中还有一个参数 fallback 用于控制未生成静态页面的渲染方式。

jsx
<span class="token comment">// pages/blog/[id].js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;next/router&#39;</span>

<span class="token keyword">function</span> <span class="token function">Post</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> post <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token comment">// 如果页面还没静态生成，则先显示下面的loading</span>
  <span class="token comment">// 直到 \`getStaticProps()\`运行完成</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>router<span class="token punctuation">.</span>isFallback<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>Loading<span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// Render ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 在构建时运行，获取全部文章路径</span>
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStaticPaths</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> articles <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;https://localhost:3000/api/articles&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">paths</span><span class="token operator">:</span> articles<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">p</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> p<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

fallback 有 <span class="token number">3</span> 个值

<span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token string">&#39;blocking&#39;</span> 未生成的页面使用服务端渲染<span class="token punctuation">;</span>
<span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">false</span> 未生成的页面访问 <span class="token number">404</span>
<span class="token literal-property property">fallback</span><span class="token operator">:</span> <span class="token boolean">true</span> 当访问的静态页面不存在时，会显示 loading，直到静态页面生成返回新的页面。

我们将 fallback 设置为 <span class="token boolean">true</span>，重新访问页面。

revalidate会额外导致服务器性能开销，20s 生成一次页面是没必要的，比如一些博客网站和新闻网站，文章详情变更没那么频繁。

#### On<span class="token operator">-</span>demand Revalidation（按需增量生成）
自从 next v12<span class="token punctuation">.</span><span class="token number">2.0</span> 开始支持按需增量生成，我们可以在 page 目录下新建一个 pages<span class="token operator">/</span>api<span class="token operator">/</span>revalidate<span class="token punctuation">.</span>js接口，用于触发增量生成。
jsx
<span class="token comment">// pages/api/revalidate.js</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">handler</span><span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 设置一个秘钥用于检查，访问合法性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>secret <span class="token operator">!==</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">MY_SECRET_TOKEN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">401</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;Invalid token&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// path 为要触发的实际路径</span>
    <span class="token comment">// e.g. for &quot;/blog/[id]&quot; this should be &quot;/blog/5&quot;</span>
    <span class="token keyword">await</span> res<span class="token punctuation">.</span><span class="token function">revalidate</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>query<span class="token punctuation">.</span>path<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">revalidated</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">status</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Error revalidating&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

比如我们在数据库中增加了 <span class="token number">2</span> 条数据，此时访问 https<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">3000</span><span class="token operator">/</span>api<span class="token operator">/</span>revalidate<span class="token operator">?</span>secret<span class="token operator">=</span><span class="token operator">&lt;</span>token<span class="token operator">&gt;</span><span class="token operator">&amp;</span>path<span class="token operator">=</span><span class="token operator">/</span>blog<span class="token operator">/</span><span class="token number">5</span>，便可以触发，生成新的静态页面了。




## Server component
Server component 是 React18 提供的能力， 与上面的 <span class="token constant">SSR</span> 不同，相当于是流式 <span class="token constant">SSR</span>。
传统 <span class="token constant">SSR</span> 执行步骤

在服务器上，获取整个应用的数据。
在服务器上，将整个应用程序数据渲染为 <span class="token constant">HTML</span> 并发送响应。
在浏览器上，加载整个应用程序的 JavaScript 代码。
在客户端，将 JavaScript 逻辑连接到服务端返回的 <span class="token constant">HTML</span>（这就是“水合”）。

而以上每个步骤必须完成，才可以开始下一个步骤。

比如一个传统的博客页面采用 <span class="token constant">SSR</span> 的方式使用 getServerSideProps 的方式渲染，那么就需要等 <span class="token number">3</span> 个接口全部返回才可以看到页面。
jsx
<span class="token keyword">export</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getServerSideProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> list <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBlogList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> detail <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getBlogDetail</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> comments <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getComments</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span> list<span class="token punctuation">,</span>detail<span class="token punctuation">,</span>comments <span class="token punctuation">}</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

如果评论接口返回较慢，那么整个程序就是待响应状态。
我们可以在 Next<span class="token punctuation">.</span>js <span class="token number">13</span> 中开启 app 目录来，使用 Suspense开启流渲染的能力，将 Comments 组件使用 Suspense 包裹。
jsx
<span class="token keyword">import</span> <span class="token punctuation">{</span> SkeletonCard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/ui/SkeletonCard&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Suspense <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Comments <span class="token keyword">from</span> <span class="token string">&#39;./Comments&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Posts</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>BlogList <span class="token operator">/</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
     <span class="token operator">&lt;</span>BlogDetail <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span>Suspense
        fallback<span class="token operator">=</span><span class="token punctuation">{</span>
          <span class="token operator">&lt;</span>div className<span class="token operator">=</span><span class="token string">&quot;w-full h-40 &quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>SkeletonCard isLoading<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">&gt;</span>
          <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token punctuation">}</span>
      <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Comments <span class="token operator">/</span><span class="token operator">&gt;</span>
      <span class="token operator">&lt;</span><span class="token operator">/</span>Suspense<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

组件数据请求使用 use <span class="token constant">API</span>，就可以实现流渲染了。
jsx

<span class="token keyword">import</span> <span class="token punctuation">{</span> use <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fetchComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Promise<span class="token operator">&lt;</span>string<span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.example.com/api/comments&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>res<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Comments</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token function">use</span><span class="token punctuation">(</span><span class="token function">fetchComment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>
    <span class="token operator">&lt;</span>section<span class="token operator">&gt;</span>
      <span class="token punctuation">{</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token operator">&lt;</span>Item key<span class="token operator">=</span><span class="token punctuation">{</span>item<span class="token punctuation">.</span>id<span class="token punctuation">}</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>section<span class="token operator">&gt;</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>



如果评论部分接口还在请求中，那么页面左侧注水完成，也是可以交互可以点击的。
因此，Server component 解决了 <span class="token constant">SSR</span> 中的 <span class="token number">3</span> 个问题

<span class="token operator">&gt;</span> <span class="token number">1.</span> 不必在服务器上返回所有数据才开始返回 html，相反我们可以先返回一个 <span class="token constant">HTML</span> 结构，相当于骨架屏。
<span class="token operator">&gt;</span> <span class="token number">2.</span> 不必等待所有 JavaScript 加载完毕才能开始补水。相反，我们可以利用代码拆分与服务器渲染结合使用，React 将在相关代码加载时对其进行水合。
<span class="token operator">&gt;</span> <span class="token number">3.</span> 不必等待所有组件水合完成，页面才可以交互。




## 总结


<span class="token operator">&gt;</span> <span class="token constant">CSR</span> <span class="token operator">-</span> 客户端渲染。也就是我们常说的 <span class="token constant">SPA</span>（single page application），使用 useEffect 获取接口数据，优点是前端后端完全分离，静态部署，缺点是 JavaScript 过大，会造成“白屏”，网页初始 <span class="token constant">DOM</span> 为空，不利于 <span class="token constant">SEO</span>，适合开发一些后端管理系统。


<span class="token operator">&gt;</span> <span class="token constant">SSR</span> <span class="token operator">-</span> 服务器端渲染。优点是解决 <span class="token constant">SEO</span> 和白屏问题，缺点是每次渲染都会请求服务器，会给服务器造成压力。


<span class="token operator">&gt;</span> <span class="token constant">SSG</span> <span class="token operator">-</span> 静态站点生成。在构建时获取数据，生成静态页面，只需要静态部署，适合开发一些数据不易变更的网站，比如开发文档。


<span class="token operator">&gt;</span> <span class="token constant">ISR</span> – 增量静态再生。它是 <span class="token constant">SSG</span> 和 <span class="token constant">SSR</span> 的组合，主要是靠静态服务，但在数据过期时，可以再次从 <span class="token constant">API</span> 获取数据，并且生成静态页面，最适合常见的资讯类、新闻类网站。


<span class="token operator">&gt;</span> Server component<span class="token operator">-</span> 也是 <span class="token constant">SSR</span> 的一种， 但互补了 <span class="token constant">SSR</span> 的不足，让网页拥有流式渲染的能力。
 
 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","Next.js 中的 CSR、SSR、SSG、ISR.html.vue"]]);export{u as default};
