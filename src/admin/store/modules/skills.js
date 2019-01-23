const skills = {
  namespaced: true,
  state: {
    skills: []
  },
  mutations: {
    fillUpSkills: (state, skills) => (state.skills = skills),
    addNewSkill: (state, newSkill) => state.skills.push(newSkill),
    removeSkill: (state, skillToRemoveId) =>
      (state.skills = state.skills.filter(
        skill => skill.id !== skillToRemoveId
      )),
    // editSkill: (state, skillToEditId) => 
    // ()
  },

  actions: {
    fetch({ commit }) {
      this.$axios.get("/skills/68").then(response => {
        commit("fillUpSkills", response.data);
      });
    },
    add({ commit }, payload) {
      return this.$axios.post("/skills", payload).then(
        response => {
          commit("addNewSkill", response.data);
          return response;
        }
      ).catch(error => {
        throw error
      });
    },
    remove({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit('removeSkill', skillId)
      });
    },
    // edit({ commit }, skillId) {

    // }
  }
};

export default skills;
