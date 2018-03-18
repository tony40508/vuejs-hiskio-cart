<template>
  <div class="lesson">
    <div class="cover" :style="coverStyle"/>
    <span class="title"> {{ lesson.title }} </span>
    <span class="price"> {{ lesson.price }} </span>
    <span class="teachers"> {{ teachers }} </span>
    <div
      :class="btnClass"
      @click="addToCart(lesson)"
    >
     {{ btnLabel }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  props: ['lesson'],
  computed: {
    ...mapGetters(['isLessonInCart']),
    inCart () {
      return this.isLessonInCart(this.lesson)
    },
    btnClass () {
      return {
        buy: true,
        bought: this.inCart
      }
    },
    btnLabel () {
      return (
        this.inCart
        ? '已加入購物車'
        : '加入購物車'
      )
    },
    teachers () {
      return this.lesson.teachers
        .map(teacher => teacher.username)
        .join(', ');
    },
    coverStyle () {
      return {
        backgroundImage: `url('${this.lesson.cover}')`
      }
    }
  },
  methods: {
    ...mapMutations(['addToCart'])
  }
};
</script>

<style lang="scss" scoped>
  .lesson {
    display: inline-block;
    max-width: 200px;
    min-width: 200px;
    min-height: 230px;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 1px 1px 15px #999;
    margin: 50px;
    vertical-align: top;
    cursor: pointer;
  }

  .lesson:hover {
      transform: translate(-5px, -5px);
      transition: transform .3s;
  }

  .cover {
    width: 100%;
    height: 120px;
    background: center center;
    background-size: cover;
  }

  span {
    display: block;
    padding: 6px;
  }

  .title {
    font-size: .9em;
    min-height: 50px;
    color: #333;
    text-align: left;
  }

  .price {
    font-size: .8em;
    float: left;
    color: #178fac;
  }

  .price:before {
    content: '$';
  }

  .teachers {
    font-size: .7em;
    float: right;
    line-height: 1.7em;
    color: #178fac;
  }

  .buy {
    clear: both;
    text-align: center;
    padding: 6px;
    font-size: .7em;
    background-color: #eee;
    transition: background-color .3s;
  }

  .buy:hover {
    background-color: #cee;
  }

  .buy.bought {
    background-color: #1ab885;
    color: white;
  }
</style>
