<template>
  <div class="page-product">
    <el-row class="m-crumbs">
      <crumbs />
    </el-row>
    <el-row>
      <el-col :span="19">
        <el-row>
          <catagroy />
        </el-row>
        <el-row>
          <list />
        </el-row>
      </el-col>
      <el-col :span="5"></el-col>
    </el-row>
    <el-row></el-row>
  </div>
</template>
<script>
import crumbs from "@/components/products/crumbs.vue";
import catagroy from "@/components/products/catagroy.vue";
import list from "@/components/products/list.vue";
export default {
  components: {
    crumbs,
    catagroy,
    list
  }
};
</script>
<style lang="scss">
@import "@/assets/css/products/index.scss";
</style>

