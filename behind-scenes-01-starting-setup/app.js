const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message=this.$refs.userText.value;//omit value and leftover will give us the 
      //reference to the DOM
      // console.log(this.message.value)
      //$something is default builtin Vuejs varaible and .something that we wanted to need
    },
  },
});

app.mount('#app');

//the template controlled by the vuejs will be not be shown in the browser
//ie will not be mounted or will not be rendered on the screen
setTimeout(()=>{
  app.unmount();
},3000)


//what is template the vue controlled part is known as the template
//here below template is being rendered in the vuejs controlled part
const app2=Vue.createApp({
  template:`
  <p> my favoriate meal is : {{bestMeal}}  </p>
  `,
  data(){
    return{
      bestMeal:"pizza",
    }
  }
})

app2.mount("#app2")
