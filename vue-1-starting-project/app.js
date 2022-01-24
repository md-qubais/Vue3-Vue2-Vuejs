// const buttonEl=document.querySelector("button");
// const inputEl=document.getElementById("goal");
// const listEl=document.querySelector("ul");

// buttonEl.addEventListener("click",()=>{
//     const task=inputEl.value;
//     const list=document.createElement("li")
//     list.textContent=task;
//     listEl.append(list);
//     inputEl.value=""
// })

//this below is the version for the vue.js 2
new Vue({
  el: "#app",
  data() {
    //this below are the states of the vue.js
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
  },
});
