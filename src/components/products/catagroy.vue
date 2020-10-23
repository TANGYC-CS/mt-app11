<template>
  <div class="m-categroy">
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in dataList" :key="item.type">
        <my-select :name='item.title' :list='item.subList'/>
      </dd>
    </dl>
    <dl class="classic">
      <dt>分类</dt>
      <dt>全部</dt>
      <dd v-for="(item) in arearList" :key="item.title">
        <my-select :name='item.title' :list='item.subList'/>
      </dd>
    </dl>
  </div>
</template>
<script>
import mySelect from "@/components/products/select.vue";
export default {
  components: {
    mySelect
  },
  data() {
    return {
      dataList: [
        {
          title: "美食",
          type: "food",
          subList: [
            {
              name: "日本菜",
              id: "Japan"
            }
          ]
        },
        {
          title: "酒店住宿",
          type: "hotal",
          subList: [
            {
              name: "温泉酒店",
              id: "hot_spring"
            }
          ]
        }
      ],
      arearList: [
        {
          title: "推荐商圈",
          subList: [
            {
              name: "望京",
              id: 120000
            },
            {
              name: "昌平",
              id: 12222
            }
          ]
        }
      ]
    };
  }
};
</script>
