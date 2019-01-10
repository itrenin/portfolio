import Vue from 'vue';

const skill = {
    template: "#skill",
    props: {
        skillPercentage: Number,
        skillTitle: String
    },

    methods: {
        drawCirclePercentage() {
            const circle = this.$refs['circle'];
            const dashOffset = parseInt(getComputedStyle(circle).getPropertyValue(
                "stroke-dashoffset"
                ));
            const percent = (dashOffset / 100) * (100 - this.skillPercentage);
            circle.style.strokeDashoffset = percent;

        }
    },

    mounted(){
        this.drawCirclePercentage();
    } 
}
const skillsRow = {
    template: "#skills-item",
    props:{
        skillsGroupObj: Object
    },
    components: {
        skill
    }
}

new Vue({
    el: "#skills-component",
    components: {
        skillsRow
    },
    data () {
        return {
            skills:{
            }
        }
    },
    created() {
        this.skills = require('../../data/skills.json');
    },    
    template: "#skills-list"
    
});