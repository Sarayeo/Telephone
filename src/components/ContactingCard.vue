<template>

  <section>
    <div>
      <h3>{{ contact.name.replaceAll('-', ' ') }}</h3>
      <p>{{ contact.number }}</p>
      <button class="call" :id="contact.name.replaceAll(/'/g,'')" @click="Call(contact.number)">
        <i class="eL_phone"> keyboard new entry</i>
      </button>
    </div>

  </section>
</template>

<script>
export default {
  name: "ContactCard",
  props: [
    'contact'
  ],
  methods: {

    Call(number){
      this.$store.state.inputValue = number
      this.$router.push("/")
    }
  },
}
</script>

<style scoped>
div{
  width: 200px;
  margin: 0 auto;
  margin-top: 10px;
  height: 200px;
  background-color: rgba(161, 156, 238, 0.93);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>