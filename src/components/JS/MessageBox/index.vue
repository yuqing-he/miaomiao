<template>
    <div class="messageBox">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div>
            <div v-if="cancel" @touchstart="handleCancel">{{ cancel }}</div>
            <div v-if="ok" @touchstart="handleOk">{{ ok }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'MessageBox'
}
</script>

<style scoped>
    .messageBox{ width:260px; height:140px;font-size: 14px; border:1px #ddd solid; border-radius: 8px; background:white; box-shadow: 2px 2px 3px #bbb; position: absolute; left: 40%; top: 50%; margin:-60px 0 0 -100px;}
    .messageBox h2{ text-align: center; line-height: 40px; font-size: 16px;}
    .messageBox p{ text-align: center; line-height:50px;}
    .messageBox > div{ display: flex;line-height:40px; position: absolute; bottom: 0; width:100%; border-top:1px #ddd solid;}
    .messageBox > div div{ flex:1; text-align: center;color: #666; border-right:1px #ddd solid;}
    .messageBox > div div:last-child{ border:none;color: #e54847;}
</style>
