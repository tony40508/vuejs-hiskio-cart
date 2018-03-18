import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/latest?type=all&level=all&sort=latest&profession_id=1'

const store = new Vuex.Store({
  state: {
    lessons: [],
    cart: []
  },
  getters: {
    lessonsInCart: state => (
      state.cart.lenght
    ),
    priceInCart: state => (
      state.cart.reduce((acc, lesson) => {
        return acc + lesson.price;
      }, 0)
    ),
    isLessonInCart: state => lesson => (
      state.cart.findIndex(({ id }) => (
        id === lesson.id
      )) !== -1
    )
    // 回傳一個傳入 lesson 的函式，cart 裡每個 lesson 解構成 id
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    addToCart(state, lesson) {
      state.cart = state.cart.concat(lesson);
      // state.cart = [...state.cart, lesson];
      // state.cart.push(lesson);
    }
  },
  actions: {
    // 從 context 解構 commit
    fetchLessons({ commit }) {
      fetch(LESSONS_URL)
        .then(res => res.json())
        .then(res => {
          commit('setLessons', res.courses);
          // 非同步操作要經過 mutations 才能修改 state
        })
    }
  }
});

export default store;
