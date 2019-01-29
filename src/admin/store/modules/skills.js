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
    //  editSkill: (state, skillToEditId) => 
    //  (state.skills = state.skills.map(skill => {
    //     return skill.id === skillToEditId.id ? skillToEditId : skill;
    //   })
    //  )
    // (state.skills = state.skills.filter(
    //   skill => skill.id !== skillToRemoveId
    // ))
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
    //  edit({ commit }, skills) {
    //   const formData = new FormData();

    //   Object.keys(skills).forEach(key => {
    //     const value = skills[key];
    //     formData.append(key, value);
    //   });

    //   this.$axios.post(`/skills/${skills.id}`, formData).then(response => {
    //     commit("editSkill", response.data.skills);
    //   });
    //  }
    // edit() {
    //   this.$axios.post(`/skills/${this.skill.id}`, {
    //     params:{
    //       title: this.skill.title,
    //       percents: this.skill.percents,
    //       category: this.skill.category
    //     }
    //   });
    //  }
  }
};

export default skills;
