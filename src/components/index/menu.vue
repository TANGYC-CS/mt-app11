<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="menuLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,index) in menuList" :key="index" @mouseenter="menuEnter(item)"> 
        <i :class="item.type"></i>
        {{item.title}}
        <span class="arrow"></span>
      </dd>
    </dl>
    <div class="detail" @mouseenter="detailEnter" @mouseleave="detailLeave" v-if="curDetail">
      <template v-for="(value,index) in curDetail">
        <h4 :key="index">{{value.title}}</h4>
        <span v-for="(v,i) in value.children" :key="v + '_' +i">{{v}}</span>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      curDetail: null,
      menuList: [
        {
          title: "美食",
          type: "food",
          children: [
            {
              title: "美食",
              children: [
                "代金券",
                "甜点",
                "饮品",
                "火锅",
                "自助餐",
                "小吃",
                "日韩料理",
                "西餐",
                "聚餐宴请",
                "烧烤烤肉"
              ]
            }
          ]
        },
        {
          title: "外卖",
          type: "takeout",
          children: [
            {
              title: "外卖",
              children: ["美团外卖"]
            }
          ]
        },
        {
          title: "酒店",
          type: "hotel",
          children: [
            {
              title: "酒店星级",
              children: ["经济型舒适", "三星高档", "四星豪华", "五星"]
            }
          ]
        },
        {
          title: "民宿",
          type: "homestay",
          children: [
            {
              title: "热门城市",
              children: [
                "上海",
                "成都",
                "北京",
                "重庆",
                "南京",
                "杭州",
                "广州",
                "西安",
                "武汉",
                "厦门",
                "长沙",
                "青岛",
                "深圳",
                "天津苏州"
              ]
            },
            {
              title: "热门房源",
              children: ["复式Loft", "别墅", "四星豪华", "五星"]
            }
          ]
        }
      ]
    };
  },
  methods: {
    menuEnter(item) {
      // console.log(item);
      this.curDetail = item.children;
    },
    menuLeave() {
      this.timer = setTimeout(() => {
        this.curDetail = null;
      }, 50);
    },
    detailEnter() {
      clearTimeout(this.timer);
    },
    detailLeave() {
      this.curDetail = null;
    }
  }
};
</script>
