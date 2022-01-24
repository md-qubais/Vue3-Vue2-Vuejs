<template>
  <div>
    <form @submit.prevent="submitForm">
        <label for="">Enter your name:</label>
      <input type="text" v-model="name" />
      <label for="">Enter your age:</label>
      <input type="text" v-model="age" />
      <button type="sumit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      age: "",
    };
  },
  emits: ["nameAndAge"], 
//   emits:{
//       nameAndAge(name,age){
//           if(name===undefined || age===undefined){
//               return false;
//           }
//           return true;
//       }
//   } this is known as the emits validators
  methods:{
      submitForm(){
          this.$emit("nameAndAge",this.name,this.age);
      }
  }
};
</script>