<template>
  <div class="header">
    <span class="cart">
      <span>購物車內:</span>
      <span class="lessons"> {{ lessons }} </span>
      <span>套課程，共</span>
      <span class="price">{{ price }}元</span>
    </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      lessons: 'lessonsInCart',
      price: 'priceInCart'
    }),
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
  letter-spacing: 4px;
}

.lessons, .price {
  color: #ffc;
}
</style>
