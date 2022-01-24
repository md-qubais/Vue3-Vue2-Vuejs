const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname:"",
      lastname:""
    };
  },
  // here below are the computed properties
  //the naming convention should be same as the data variables or state
  //because we are not calling this computed properties we are just passing it by referece
  //it checks the dependencies in below fullname the dependencies are just this.name
  //if will check if it is changed or not if it is changed then it will again executed the function
  //fullname or else it wont
  computed:{
    // fullname(){
    //   if(this.name===""){
    //     return ""
    //   }
    //   return this.name+" uddin";
    // }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.fullname=this.name=this.lastname="";
    },
    outputFullName(){
      if(this.name===""){
        return ""
      }
      return this.name+" "+"uddin";
    }
  },
  // here below are watchers
  //in watchers we must take the data variable from it whatever woould it be
  //can be taken from there and if something changes the same name function will be
  //execute same as useEffect in reactjs
  //but we must not return anything from it
  //and the watchers are applied to varibles or data variables
  //and the computed values are applied to the functions
  //see below
  watch:{
    //here value means that we are getting the current latest changed value in that parameter
    //we can access name(oldValue,newValue)
    name(value){
      //and whenever the name is changed we can just write some of the logic here
      if(value===""){
        this.fullname=this.lastname;
      }
      else{
        this.fullname=value+" "+this.lastname
      }
    },
    lastname(value){
      if(value===""){
        this.fullname=this.name;
      }else{
        this.fullname=this.name+" "+value
      }
    }
  }
});

app.mount('#events');
