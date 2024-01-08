import{_ as i,o as e,c as n,d as s}from"./app-pokGQ7aS.js";const l={},d=s(`<p>1.循环回调</p><p>现在是是这种情况，有两个接口，有一个接口需要用到另一个接口返回数组中的一个属性作为参数。</p><p>有同学说，那你直接用第一个接口返回的数组遍历调用第二个接口不就好啦。。，但是您呢个保证返回的顺序吗。</p><p>显然是无法保证的。。</p><p>那咋办。</p><p>来喽来喽-。-</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        moduleRecommend({
            uid: uidPub
        }).then(res =&gt; {
            console.log(&quot;17、金刚区模块列表和首页显示模块列表&quot;, res);
            if (res.ret == 0) {
                let asyncF = function(item, index) {
                    return new Promise(function(resolve, reject) {
                        courseList({
                            course_type: &quot;&quot;, //1音频 2视频
                            module_id: item.module_id, //用户获取各模块课程列表
                            uid: uidPub,
                            page: 1,
                            pageSize: _this.pageSize
                        })
                        .then(res1 =&gt; {
                            console.log(
                                &quot;17、金刚区模块列表和首页显示模块列表数组内容&quot;,
                                res1
                            );
                            item.children = res1.data.data;
                            resolve();
                            // console.log(newArr1)
                        })
                        .finally(() =&gt; {

                                console.log(index);
                                if (index == res.data.index_list.length - 1) {
                                    console.log(
                                        &quot;res.data.index_list&quot;,
                                        res.data.index_list
                                    );
                                    _this.homelist = res.data.index_list;
  
                                    console.log(22222,_this.homelist)
                                }

                        });
                    });
                };
                let f = async function() {
                    for (let i = 0; i &lt; res.data.index_list.length; i++) {
                        await asyncF(res.data.index_list[i], i);
                    }
                };
                f();
            }
        });
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),v=[d];function a(r,c){return e(),n("div",null,v)}const t=i(l,[["render",a],["__file","循环回调.html.vue"]]);export{t as default};
