import{_ as n,o as e,c as i,d}from"./app-tSvYcIf0.js";const s={},a=d(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>
  /**
   * 检测当前的小程序
   * 是否是最新版本，是否需要下载、更新
   */
  checkUpdateVersion() {
    //判断微信版本是否 兼容小程序更新机制API的使用
    if (Taro.canIUse(&quot;getUpdateManager&quot;)) {
      //创建 UpdateManager 实例
      const updateManager = Taro.getUpdateManager();
      //检测版本更新
      updateManager.onCheckForUpdate(function (res) {
        console.log(&quot;新版本&quot;, res);
        // 请求完新版本信息的回调
        if (res.hasUpdate) {
          //监听小程序有版本更新事件
          updateManager.onUpdateReady(function () {
            //TODO 新的版本已经下载好，调用 applyUpdate 应用新版本并重启 （ 此处进行了自动更新操作）
            updateManager.applyUpdate();
          });
          updateManager.onUpdateFailed(function () {
            // 新版本下载失败
            Taro.showModal({
              title: &quot;已经有新版本喽~&quot;,
              content: &quot;请您删除当前小程序，到微信 “发现-小程序” 页，重新搜索打开哦~&quot;,
            });
          });
        }
      });
    } else {
      //TODO 此时微信版本太低（一般而言版本都是支持的）
      Taro.showModal({
        title: &quot;溫馨提示&quot;,
        content: &quot;当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。&quot;,
      });
    }
  }
  onLaunch() {
    console.log(&#39;onLaunch&#39;);
    this.checkUpdateVersion()
  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),l=[a];function v(c,r){return e(),i("div",null,l)}const u=n(s,[["render",v],["__file","taro中判断不同版本的小程序，及强制小程序更新.html.vue"]]);export{u as default};
