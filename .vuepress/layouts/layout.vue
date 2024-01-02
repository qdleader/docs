<template>
  <ParentLayout>
    <template #page-content-bottom>
      <div>
        <!-- <div class="money">打赏</div> -->
        <!-- <div>评论</div> -->
      </div>
    </template>
    <template #page-bottom>
      <div class="footer">
        <a href="https://github.com/qdleader/qdleader">qdleader</a>
      </div>
    </template>
  </ParentLayout>
</template>
<script>
import ParentLayout from "@vuepress/theme-default/layouts/Layout.vue";
export default {
  components: {
    ParentLayout,
  },
};
</script>
<style>
.footer {
  width: 100%;
  text-align: center;
}
</style>
