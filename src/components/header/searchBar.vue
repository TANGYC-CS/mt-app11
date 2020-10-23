<template> 
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <router-link to="/">
          <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
        </router-link>
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input v-model="searchWord" placeholder="write by 汤小灿，仅供学习参考" @focus="focus" @blur="blur" @input="inputText"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
              <dd v-for="(item,index) in hotPlaceList" :key="index" >
                <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearch">
            <dd v-for="(item,index) in isSearchList" :key="index" @click="clickDd(item)" >
                <!-- <router-link :to="{name:'goods',params:{name:item}}">{{item}}</router-link> -->
                 <router-link :to="{name: 'goods', params: {name: item}}">{{item}}</router-link>
            </dd>
          </dl>
        </div>
          <p class="suggest">
            <router-link v-for="(suggest,index) in suggestList" :key="index" to="/">{{suggest}}</router-link>
          </p>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import fetchJsonp from "@/ajax.js";
import api from "@/api/index.js";
export default {
  data() {
    return {
      searchWord: "",
      isHotPlace: false,
      isSearch: false,
      hotPlaceList: ["火锅", "四川火锅", "火锅底料", "麻辣火锅"],
      isSearchList: [],
      suggestList: [
        "北京故宫博物院",
        "北京欢乐谷",
        "尚隐·泉都市生活馆",
        "故宫珍宝馆"
      ]
    };
  },
  created() {
    api.searchSuggestList().then(res => {
      this.suggestList = res.data.data;
    });
  },
  methods: {
    focus() {
      this.isHotPlace = true;
      if (this.searchWord) {
        this.isSearch = true;
      }
    },
    blur() {
      setTimeout(() => {
        this.isHotPlace = false;
        this.isSearch = false;
      }, 200);
    },
    inputText() {
      this.isSearch = true;
      this.isHotPlace = false;
      if (!this.searchWord) {
        this.isSearch = false;
      }
      fetchJsonp(
        `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${
          this.searchWord
        }`
      );
      //为了符合百度查询api而建立的一个对象
      window.baidu = {};
      //script载入完之后会调用这个函数，sug就是suggest的内容
      var self = this;
      window.baidu.sug = function(sug) {
        self.isSearchList = sug.s;
      };
    },
    clickDd(item) {
      this.searchWord = item;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/public/header/index.scss";
@import "@/assets/css/public/header/search.scss";
</style>