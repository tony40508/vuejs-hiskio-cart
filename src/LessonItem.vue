<template>
  <div class="lesson">
    <div class="cover" :style="coverStyle"/>
    <span class="title">{{ lesson.title }}</span>
    <span class="price">{{ lesson.price }}</span>
    <span class="teachers">{{ teachers }}</span>
    <div class="buy">加入購物車</div>
  </div>
</template>

<script>
export default {
  props: ['lesson'],
  computed: {
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
  }
};
</script>

<style lang="scss">
  .lesson {
    display: inline-block;
    width: 200px;
    min-height: 230px;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: 1px 1px 15px #999;
    margin: 50px;
    vertical-align: top;
    transition: all .3s;
    cursor: pointer;
  }

  .lesson:hover {
    transform: translate(-5px, -5px);
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
    transition: background-color .3s;
  }

  .buy:hover {
    background-color: #cee;
  }

  .buy.bought {
    background-color: #ddd;
  }
</style>
