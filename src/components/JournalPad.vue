<template>
 <div v-if="$store.state.historyCalls.length > 0" class="hello">
    <section v-for="history in $store.state.historyCalls" :key="history.time">
      <div>
        <p>{{getnumber(history.number)}}</p>
        <p>{{getTime(history.time)}}</p>
      </div>

    </section>
  </div>
  <p v-else>votre journal d'appel est vide</p>
</template>

<script>
export default {

  name: "JournalPad",

  methods: {

    getTime(now){
      let date = new Date(now)
      return date.toDateString()+", "+date.getHours()+'h'+date.getMinutes()
    },
    getnumber(number){
      let contact = this.$store.state.contactList.find(contact => {
        return contact.number === number
      })
      return contact?contact.name:number
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;

}
.hello{
  background-color: bisque;
  width: fit-content;

}
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: darkslateblue;
  width: 60%;
  margin: 0 auto;
  padding: 25px;
  border-radius: 10px;
  color: white;
}

a {
  color: #42b983;
}
</style>
