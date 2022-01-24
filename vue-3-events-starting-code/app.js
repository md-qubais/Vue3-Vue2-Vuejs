const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name:"",
      confirmedName:"",
    };
  },
  methods:{
    add(num){
      this.counter=this.counter+num;
    },
    reduce(num){
      this.counter=this.counter-num;
    },
    setName(event,name){
      console.log(name);
      this.name=event.target.value
    },
    submitForm(event){
      console.log(event)  
      alert("submitting!")
    },
    confirmInput(event){
      console.log(event)//what the event is fired
      console.log(event.target)//where the actual event is fired
      this.confirmedName=this.name;
    }
  }
});

app.mount('#events');
