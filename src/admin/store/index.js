import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from "./modules/skills";
import works from "./modules/works";
import user from "./modules/user";
import blog from "./modules/blog";

export default new Vuex.Store({
  modules: { skills, works, user, blog }
});
