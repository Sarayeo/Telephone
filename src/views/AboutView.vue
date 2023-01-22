<template>

    <div class="keyboard">
      
    <div><input type="number" v-model="value" readonly/></div>
      <button v-for="key in keys" :key="key" @click="press(key)">{{ key }}</button>
      <button  @click="clear">&larr;</button>
      <button  @click="clear('all')">sup</button>
      <ul>
            {{ contacts }}
      </ul>

    </div>

  <!-- <div class="about">
    <h2>Clavier</h2>
    <h2> {{ compteur }} 🍪</h2>
    
    <button value="5" @click="increment('1')"> 1</button>
    <button value="5" @click="increment('2')"> 2</button>
    <button value="5" @click="increment('3')"> 3</button>
    <button id="quatre" @click="increment('4')"> 4</button>
    <button id="cinq" @click="increment('5')"> 5</button>
    <button id="six" @click="increment('6')"> 6</button>
    <button id="sept" @click="increment('7')"> 7</button>
    <button id="huit" @click="increment('8')"> 8</button>
    <button id="neuf" @click="increment('9')"> 9</button> 
    <button id="zero" @click="increment('0')"> 0</button>
  </div> -->
</template>
<script>


/*  var value = document.getElementById("un").innerHTML;
console.log(value);  */ 
export default {

name : 'KeyboardContact',

data() {
  return {
    value: '',

    keys: [...Array(10).keys()],

    contacts:[

    this.$store.state.contact

    ]
    
  };
},
methods: {
      
      press(key) {
        this.value = `${this.value}${key}`;
        

      },
  
  
      clear(type){
        if (type === 'all') this.value = '';
        else this.value = this.value.substring(0, this.value.length - 1);
      },

      
    },
    
  };
</script>
<style scoped>

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

</style>