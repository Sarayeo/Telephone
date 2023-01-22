<template>
    <div class="about">
      <h2>Contact</h2>
      <h1> Liste des Contacts </h1>

      <FormContact/>
      
    </div>
   
   
  </template>
<script>

import {defineComponent} from "vue";
import FormContact from "@/components/ContactList.vue";

export default defineComponent({
  components: {FormContact}
})


</script>