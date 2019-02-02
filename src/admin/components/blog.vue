<template lang="pug">
.blog_wrapper
    .blog__header 
    .blog_content
        .blog__left Страница "Блог"
            .blog__input
                input(type="text" placeholder="Название")
            .blog__input
                input(type="text" placeholder="Дата")
            .blog__input.edit-area
                textarea(type="text" cols="55" rows="10") 
            .blog__input
                button(type="button" @click="editmode ? editWork(work) : addNewWork(work)") {{editmode ? 'Изменить' : "Добавить"}} 
        .blog__right Последние записи
            table.table
                tr
                    td Название
                    td Дата
                    td Содержание

</template>
<script>
export default{
    props:{
        blog:{
            type: Object,
            default: () =>{}
        },
        editmode: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped lang="scss">
.table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  td {
    border: 1px solid black;
  }
}
.blog_content{
    display: flex;

}
.blog__left{
    width: 50%;

}
.blog__right{
    width: 50%;
}
.blog__input{
    margin-bottom: 15px;
}
</style>