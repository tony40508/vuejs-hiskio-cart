<template>
  <div>
    <div
      v-for="lesson in lessons"
      :key="lesson.id"
    >
      <span>{{ lesson.title }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      lessons () {
        return this.$store.state.lessons;
      }
    },
    mounted () {
      this.$store.dispatch('fetchLessons');
    }
  }
</script>
