<template>
  <div class="m-istyle">
    <dl @mouseover="over" :class="nav.class">
      <dt>{{nav.title}}</dt>
      <dd 
      v-for="(item,index) in nav.list" 
      :key="index" 
      :class="{active:find == item.tab}" 
      :data-type= 'item.tab'>{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.iamge" class="image">
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.sub_title}}</div>
            <div class="price-info">
              <span class="current-price-wrapper">
                <span class="price-symbol numfont">¥</span>
                <span class="current-price numfont">{{item.pirce_info.current_price}}</span>
              </span>
               <span class="sold bottom-right-info"></span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      find: "wuhan",
      list: [
        {
          iamge:
            "https://img.meituan.net/phoenix/d9e77e1daa9713e4f046825d66e05791345977.jpg@740w_416h_1e_1c",
          title: "旋木·武大旁 近华师 地铁站 东湖湖景房·千色百家",
          sub_title: "整套1居室·可住2人 | 广埠屯",
          pirce_info: {
            current_price: 208,
            old_price: 134
          }
        },
        {
          iamge:
            "https://img.meituan.net/phoenix/183be40b2e09ddc22733e74b10e390e71037074.jpg@740w_416h_1e_1c",
          title:
            "忆梦·軒】北欧波西米亚风巨幕投影房/近地铁/江汉路步行街/汉口江滩/吉庆美食街/户部巷/黄鹤楼",
          sub_title: "整套1居室·可住2人 | 钟家村",
          pirce_info: {
            current_price: 188,
            old_price: 134
          }
        },
        {
          iamge:
            "https://img.meituan.net/phoenix/5153f27d6a2f7cf3c5da69366a4e54f83473965.jpg@740w_416h_1e_1c",
          title: "6号线双地铁钟家村地铁A口闽东国际3B栋",
          sub_title: "整套1居室·可住2人 | 江汉路步行街",
          pirce_info: {
            current_price: 99,
            old_price: 134
          }
        }
      ]
    };
  },
  props: {
    nav: Object
  },
  methods: {
    over(e) {
      let dom = e.target;
      let domName = dom.tagName.toLowerCase();
      if (domName != "dd") {
        return false;
      }
      // console.log(e.target);
      // console.log(dom.getAttribute("data-type"));
      this.find = e.target.getAttribute("data-type");
      //发送ajax请求
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/index/artistic.scss";
</style>