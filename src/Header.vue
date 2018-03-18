<template>
  <div class="header">
    <span class="cart">
      <span> 購物車內： </span>
      <span class="lessons"> {{ lessons }} </span>
      <span> 套課程，共 </span>
      <span class="price"> {{ price }} </span>
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    lessons () {
      return 0;
    },
    price () {
      return 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  padding: 6px 8px;
  box-sizing: border-box;
  background-color: #41b883;
  font-size: .9em;
  text-align: center;
  color: white;
  z-index: 3;
}

.lessons, .price {
  color: #ffc
}
</style>
