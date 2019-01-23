<template lang="pug">
    .inner
        h2 {{title}}
</template>
<script>
export default {
    props: {
        title:{
            type: String,
            default: "Тут ничего нет. вот.",

        }
    },
    data(){
        return{
            
        }
    },
    mounted(){
        console.log(this.title)
    }
}
</script>

