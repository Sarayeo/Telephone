<template>
  <div class="Journal">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <JournalPad />
  </div>
</template>

<script>
// @ is an alias to /src
import JournalPad from '@/components/JournalPad.vue'

export default {
  name: 'HomeView',
  components: {
    JournalPad
  }
}
</script>
