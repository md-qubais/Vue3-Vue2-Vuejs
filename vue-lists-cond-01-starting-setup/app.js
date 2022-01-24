const app = Vue.createApp({
  data() {
    return {
      enteredValue:"",
      goals: [],
    };
  },
  methods:{
    addGoal(){
      // console.log("adding the goal")
      this.goals.push(this.enteredValue);
      this.enteredValue="";
    },
    removeGoal:function(idx){
      // console.log("removing the index",idx)
      this.goals.splice(idx,1);
    }
  }
});

app.mount("#user-goals");
