<template>
  <div class="Journal">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
    <JournalPad msg="Journal d'appels"/>
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
