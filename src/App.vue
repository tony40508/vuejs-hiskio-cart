<template>
  <div>
    <Header/>
    <LessonList/>
  </div>
</template>

<script>
import LessonList from './LessonList.vue';
import Header from './Header.vue';

export default {
  components: {
    LessonList,
    Header
  }
};
</script>

<style lang="scss">
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
