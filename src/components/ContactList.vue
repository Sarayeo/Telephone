<template >

  <form action="">
  <input type="text" v-model="formContact.nom" placeholder="Nom..">

        <span class="error" v-if="formContact.nom.length < 3 && error" > la saisie n'est pas correct, recommencez </span>

        <input type="text" v-model="formContact.num" placeholder="Numéro...">

        <span class="error" v-if="formContact.num.length < 3 && error" > Veuillez remplir ce champ </span>

        <button class="submit" type="submit" > Ajouter ce contact  </button>
  </form>
    

</template>
<script>
export default{


  name : 'FormContact',

  data () {
    return{
      error: false,
      formContact: {
        nom: '',
        num: '',
      },
    }
  },
  methods : {
    ajoutContact(){
      if(this.formContact.nom === "" && this.formContact.num === ""){
        this.error = true

      }
    }
  }

}


</script>

<style >


</style>