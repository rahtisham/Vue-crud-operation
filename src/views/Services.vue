<template>
      <div class="container" style="border: 1px solid;">
    <div class="row">
      <div class="col-sm-4"><img alt="Vue logo" src="../assets/logo.png"><One /></div>
      <div class="col-sm-4"><Two /></div>
      <div class="col-sm-4"><Three /></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import One from '@/components/Todos.vue'
import Two from '@/components/Service/ServiceTwo.vue'
import Three from '@/components/Service/ServiceThree.vue'

export default {
  name: 'Home',
  components: {
    One,Two,Three
  }
}
</script>