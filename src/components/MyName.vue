<template>
    <h1>New name component <a @click="onAClick">Ok</a></h1>
</template>

<script>
export default {
    methods:{
        onAClick(){
            alert("hello");
        }
    }
}
</script>

<style scoped lang="scss">
h1{
    color: red;
    a{
        color: pink;
    }
}
</style>