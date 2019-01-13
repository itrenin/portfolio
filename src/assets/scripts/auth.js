console.log("auth module loaded");
import Vue from 'vue';

const authBtn = {
    props:{
        activeSide: String
    },
    template: "#auth-btn",
    methods:{
        
        
    }
}
const sideA  = {
    template: "#side-a"
}
const sideB  = {
    template: "#side-b"
}
new Vue({
    el: "#auth-component",
    components: {
        authBtn, sideA, sideB
    },
    data(){
        return{
            activeSide: "sideB"
        };
    },
    methods:{
        handleChange(){
            this.activeSide = this.activeSide === "sideA" ? "sideB" : "sideA";
        }
    },
    template: "#auth-root"
})