<template lang="pug">
  tr(v-if="editmode === false")
    td {{skill.title}}
    //- td {{skill.percents}}%
    td
      input(type="text" v-model.Number = "skill.percents" size = "1")
      span %
    td
      button(type="button" @click="editSkill(skill.percents)") Править
    td
      button(type="button" @click="removeSkill(skill.id)") Удалить

  tr(v-else)
    td 
      input(type="text" placeholder="name" v-model="newSkill.title")
    td 
      input(type="text" placeholder="%" v-model="newSkill.percents" size = "1")
    td
      button(type="button" @click="addNewSkill(newSkill)") Добавить
   

</template>

<script>
import { mapActions } from "vuex";
import axios from "axios";
export default {
  props: {
    skill: {
      type: Object,
      default: () => {}
    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions({
      addSkillAction: "skills/add",
      removeSkill: "skills/remove",
      //editSkill: "skills/edit"
    }),
    addNewSkill(newSkill) {
      this.addSkillAction(newSkill).then(() => {
        this.newSkill.title = ""
        this.newSkill.percents = ""
      })
    },
    
    editSkill(){
      // console.log(this.skill);
      // console.log(this.skill.percents);
      // let editedSkill = {
      //   title: "",
      //   percents: 0,
      //   category: 0
      // }
      // editedSkill.title = this.skill.title;
      // editedSkill.percents = this.skill.percents;
      // editedSkill.category = this.skill.category;
      // console.log(editedSkill);
      axios.post(`/skills/${this.skill.id}`, {
          title: this.skill.title,
          percents: parseInt(this.skill.percents),
          category: this.skill.category
        
      });


    }
  }
};
</script>

