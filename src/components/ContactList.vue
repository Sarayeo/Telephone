<template >
  <div>
    <div class="add-contact">
      <form>
        <input type="text" name="name" placeholder="Nom.." v-model="name">
        <input type="text" name="number" placeholder="Numéro..." v-model="number">
        <button @click="addContact()">Ajouter</button>
      </form>
    </div>
  </div>
</template>

<script>

export default{
  name: 'FormContact',
  data() {
    return {
      name: "",
      number: ""
    }
  },
  methods: {
    htmlEncode(sas)
    {
      let les = document.createElement("div");
      les.innerText = les.textContent = sas;
      sas = les.innerHTML;
      return sas;
    },
    addContact(){
      if(this.name !== "" && this.number !== ""){
        if(!this.$store.state.contactList.find(contact => {
          return contact.name === this.name
        })){
          this.$store.commit('insertContact',
              {
                name: this.htmlEncode(this.name.replaceAll(' ','-')),
                number: this.number
              }
          )
          this.$router.push("/contact")
        }
      }
    }
  }

}

</script>

<style >
form {
  background-color: lavender;
  width: 20vw;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  border-radius: 10px;
}

input {
  padding: 10px;
  border-radius: 10px;
  border: none;
}

button {
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: lightblue;
  color: darkslateblue;
  font-weight: bold;
}


</style>