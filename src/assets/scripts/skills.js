import Vue from 'vue';
import axios from 'axios';

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
    mounted() {
        //this.skills = require('../../data/skills.json');
        //let skillsObj = [];
        axios
            .get('https://webdev-api.loftschool.com/skills/68')
            .then(response =>(this.skills = response.data));
        //let skillsComp =[];
        console.log(this.skills);

    },    
    template: "#skills-list"
    
});