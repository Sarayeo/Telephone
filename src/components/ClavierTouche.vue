
<style scoped>
section{
  width: 15%;
  margin: 0 auto;
  height: auto;
  background-color: rgba(87, 136, 166, 0.89);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
button {
  background-color: #967ef3;
  border: none;
  border-radius: 5px;
  padding: 10px;
  color: white;
  font-weight: bold;
  margin: 2%;
  width: 20%;
  height: 20%;
}
img{
  width: 20px;
  height: auto;
}
</style>-->
<template>
  <section>
    <div class="keyboard">
      <h1>Appel</h1>
      <input type="number" v-model="value" readonly/>
      <div></div>
      <button v-for="key in keys" :key="key" @click="press(key)">{{ key }}</button>
      <button  @click="clear">&larr;</button>
      <button  id="call" @click="call()"><img src="@/assets/pngegg.png" alt="🍪"> </button>

      <div class="keyboard-working-part" >
        <div class="keyboard" v-for="contact in filtre" :key="contact" :contact="contact" @click="showcontact(contact)">

        </div>

      </div>
      <div class="number">
        <p>{{ propose('') }}</p>
      </div>
    </div>
  </section>

</template>

<script>
// @ is an alias to /src

export default {
  name : 'KeyboardContact',
  data() {
    return {
      value: '',
      keys: [1,2,3,4,5,6,7,8,9,0,]
    };
  },
  methods: {
    call(){
      if(this.$store.state.inputValue.length > 0){
        this.$store.commit('addHistory',{
          time: Date.now(),
          number: this.$store.state.inputValue
        })
        this.$store.state.inputValue = ""
      }
    },
    press(key) {
      this.value = `${this.value}${key}`;

    },
    clear(type){
      if (type === 'all') this.value = '';
      else this.value = this.value.substring(0, this.value.length - 1);
    },

    propose(suit){
      let string = ""
      for(let i = 0; i < this.$store.state.inputValue.length; i++){
        if(i>0 && i%2 === 0){
          string += suit
        }
        string += this.$store.state.inputValue[i]
      }
      return string
    },
    showcontact(contact){
      this.$store.state.inputValue = contact.number
    }
  },
  computed: {
    filtre(){
      return this.$store.state.contactList.filter((element)=>{
        return element.number.includes(this.$store.state.inputValue)
      })
    }
  },
}
</script>

