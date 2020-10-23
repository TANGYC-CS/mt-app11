<template>
  <div class="page-index">
    <el-row>
      <el-col :span="5">
        <my-menu />
      </el-col>
      <el-col :span="19">
        <my-life />
      </el-col>
    </el-row>
     <el-row>
      <my-container :nav="maoYanMovie"/>
    </el-row>
    <el-row>
      <my-container :nav="iStyle"/>
    </el-row>
   
  </div>
</template>
<script>
import myMenu from "@/components/index/menu.vue";
import myLife from "@/components/index/life.vue";
import myContainer from "@/components/index/container.vue";
export default {
  data() {
    return {
      iStyle: {
        class: "minsu",
        title: "推荐名宿",
        list: [
          {
            text: "武汉",
            tab: "wuhan"
          },
          {
            text: "南昌",
            tab: "nanchang"
          },
          {
            text: "桂林",
            tab: "guilin"
          },
          {
            text: "宜昌",
            tab: "yichang"
          },
          {
            text: "清远",
            tab: "qingyuan"
          },
          {
            text: "张家界",
            tab: "zhangjiajie"
          },
          {
            text: "恩施土家族苗族自治州",
            tab: "enshi"
          },
          {
            text: "株洲",
            tab: "zhuzhou"
          },
          {
            text: "衡阳",
            tab: "hengyang"
          },
          {
            text: "湘西土家族苗族自治州",
            tab: "xiangxi"
          }
        ]
      },
      maoYanMovie: {
        class: "maoYanMovie",
        title: "猫眼电影",
        list: [
          {
            text: "正在上映",
            tab: "isMoving"
          },
          {
            text: "即将上映",
            tab: "readyMoving"
          }
        ]
      }
    };
  },
  components: {
    myMenu,
    myLife,
    myContainer
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/index.scss";
</style>

