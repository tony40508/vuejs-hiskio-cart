import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/latest?type=all&level=all&sort=latest&profession_id=1'

const store = new Vuex.Store({
  state: {
    lessons: [],

  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
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
