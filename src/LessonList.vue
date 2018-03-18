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
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['lessons'])
  },
  methods: {
    ...mapActions(['fetchLessons'])
  },
  mounted () {
    this.fetchLessons();
  }
};
</script>
