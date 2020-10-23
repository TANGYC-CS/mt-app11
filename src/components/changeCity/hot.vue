<template>
  <div class="m-hcity">
    <dl>
      <dt>{{title}}</dt>
      <dd v-for="(city,index) in cityList" :key="index">{{city}}</dd>
    </dl>
  </div>
</template>
<script>
export default {
  props: ["cityList", "title"]
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/hot.scss";
</style>
