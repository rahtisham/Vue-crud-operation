<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Test msg="Welcome to Your Vue.js App"/>
    <HelloMyName />
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/HelloWorld.vue'
import HelloMyName from '@/components/MyName.vue'

export default {
  name: 'Home',
  components: {
    Test,HelloMyName
  }
}
</script>
