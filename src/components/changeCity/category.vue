<template>
  <div class="category">
    <dl class="m-categroy">
      <dt>按拼音首字母选择：</dt>
      <dd v-for="(character,index) in characterList" :key="index">
        <a :href="'#city-' + character">{{character}}</a>
      </dd>
    </dl>
  </div>
</template>
<script>
export default {
  data() {
    return {
      characterList: "ABCDEFGHJKLMNPQRSTWXYZ".split("")
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/changecity/categroy.scss";
</style>
