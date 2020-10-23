<template>
  <div class="page-changeCity">
    <el-row>
      <province />
    </el-row>
    <el-row>
      <hot title="热门城市 :" :cityList="hotCityList"/>
    </el-row>
    <el-row>
      <hot title="最近访问 :" :cityList="rencentList" />
    </el-row>
    <el-row>
      <category />
    </el-row>
  </div>
</template>
<script>
import Province from "@/components/changeCity/province.vue";
import Hot from "@/components/changeCity/hot.vue";
import Category from "@/components/changeCity/category.vue";
export default {
  data() {
    return {
      hotCityList: ["长沙", "株洲", "湘潭", "宁乡", "益阳"],
      rencentList: ["长沙", "益阳", "郴州"]
    };
  },
  components: {
    Province,
    Hot,
    Category
  }
};
</script>
