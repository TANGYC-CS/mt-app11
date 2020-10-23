<template>
  <div class="choose-wrap" @click="showWrapper" v-document-click="documentClick">
    <div class="choose">
      <span>{{valueName}}</span>
      <i class="el-icon-caret-bottom"></i>
      <div :class="{'mt-content':true,'active':wrapperShow}">
        <h2>{{title}}</h2>
        <div class="wrapper">
          <div class="col">
            <span @click="changeValue(item)" class="mt-item" v-for="(item,index) in list" :key="index">{{item}}</span>
            <!-- <span class="mt-item">甘肃</span>
            <span class="mt-item">江苏</span> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["list", "title", "valueName", "wrapperShow"],
  methods: {
    showWrapper(e) {
      e.stopPropagation();
      this.$emit("wrapper_change", true);
    },
    documentClick() {
      // this.wrapperShow = false;
      this.$emit("wrapper_change", false);
    },
    changeValue(item) {
      this.$emit("change_item", item);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/select.scss";
</style>
