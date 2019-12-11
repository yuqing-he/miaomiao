<template>
    <header id="header">
        <slot></slot> <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    name : 'Header',
    props : {
        title : {
            type : String,
            default : '喵喵电影'
        }
    }
}
</script>

<style scoped>
#header{width:100%; height:44px; color: #fff; background: #e54847; border-bottom: 1px solid #e54847; position: relative;}
#header h1{ font-size: 16px; text-align: center; line-height: 44px; font-weight: normal; }
#header i{ position: absolute; left: 5px; top: 50%; margin-top: -13px; font-size: 24px;}
</style>
