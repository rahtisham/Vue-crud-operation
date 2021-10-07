<template>
    <div class="contactss">
        <One />
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
    One,
  }
}
</script>
