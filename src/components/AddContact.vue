
<template>
  <div class="contact-list">
    <ContactCard v-for="contact in $store.state.contactList" :key="contact.name" :contact="contact"/>
  </div>
</template>

<script>
import ContactCard from "@/components/ContactingCard.vue";
export default {
  name: "ContactList",
  components: {
    ContactCard
  },
}
</script>

<style scoped>

</style>


