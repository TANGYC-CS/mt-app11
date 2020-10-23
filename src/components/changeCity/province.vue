<template>
  <div>
    <span class="name">按省份选择:</span>
    <my-select :list='provinceList' 
               title="省份" 
               :valueName="province" 
               :wrapperShow="provinceActive" 
               @wrapper_change="provinceChange" 
               @change_item="changeProvince"/>
    <my-select :list='cityList' 
               title="城市" 
               :valueName="city" 
               :wrapperShow="cityActive" 
               @wrapper_change="cityChange" 
               @change_item="changeCity"/>
    <span>直接搜索:</span>
    <el-select
      v-model="searchWord"
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MySelect from "./select.vue";
export default {
  components: {
    MySelect
  },
  data() {
    return {
      provinceList: [
        "山东",
        "甘肃",
        "江苏",
        "北京",
        "云南",
        "海南",
        "浙江",
        "上海",
        "天津",
        "陕西",
        "新疆",
        "贵州"
      ],
      province: "省份",
      cityList: [
        "长沙",
        "株洲",
        "湘潭",
        "衡阳",
        "邵阳",
        "岳阳",
        "常德",
        "张家界",
        "益阳",
        "郴州",
        "永州",
        "怀化"
      ],
      city: "城市",
      provinceActive: false,
      cityActive: false,
      searchList: [
        "长沙",
        "株洲",
        "湘潭",
        "怀化",
        "郴州",
        "宁乡",
        "益阳",
        "岳阳"
      ],
      searchWord: "",
      loading: false
    };
  },
  methods: {
    provinceChange(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    cityChange(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
    remoteMethod(val) {
      //请求后端接口
    },
    changeProvince(item) {
      this.province = item;
      this.provinceActive = false;
    },
    changeCity(item) {
      this.city = item;
      this.cityActive = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/iselect.scss";
</style>