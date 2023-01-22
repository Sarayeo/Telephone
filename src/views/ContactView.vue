<template>
    <div class="about">
      <nav>
        <button><router-link to="/adding">+</router-link></button>
      </nav>

      <h1> Liste des Contacts </h1>
      <ContactList/>
    </div>
  </template>
<script>

import {defineComponent} from "vue";
import ContactList from "@/components/AddContact.vue";

export default defineComponent({
  name: "AddView",
  components: {
    ContactList
  },
})


</script>
<style scoped>
about{
  border: #2c3e50 10px solid ;

}
 button{
   width: 40px;
   height: auto;
   padding: 10px;
   border-radius: 60%;
   background-color: #967ef3;
   margin-left: 300px;
   margin-top: -100px;
 }

 nav a {
   font-weight: bold;
   color: #2c3e50;
 }

</style>