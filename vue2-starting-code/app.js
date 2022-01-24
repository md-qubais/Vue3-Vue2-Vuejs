const app = Vue.createApp({
  data: () => {
    //return always an object
    //which is used to manipulate the states
    return {
      //we can consider the key value pair whatever we need
      //courseGoal: "Senior Sotware Engineer",
      //data and interpolation
      htmlValue: " <h4>this is an html value header h4 </h4> ",
      courseGoalA: "Finish the course and Learn vuejs",
      courseGoalB: "Master vuejs and build amazing web application",
      courseGoal: [
        "Senior Software Engineer",
        "DevOps Engineer",
        "Cloud Engineer",
      ],
      vueLink: "https://vuejs.org/",
    };
  },
  //methods is kind of object with number of methods
  //which can be call if something happens like to change data values or to
  //update them or to manipulate them or just to return something
  //which itself contains functions as an object (key/value pair)
  methods: {
    outputGoal() {
      console.log(this.courseGoal);
      for (let i in this.courseGoal) {
        console.log(this.courseGoal[i]);
      }
      console.log(this.courseGoalA);
      console.log(this.courseGoalB);
      const value = Math.random();
      if (value < 0.5) {
        return this.courseGoalA; //we cant just write the courseGoalA because
        //its not the variable or value present inside the function
        //but its the property of an object
        //so if we are using the property of an object we must use and access it by its reference
        //but here we are using the courseGoalA in the current object
        //so for accessing the properties of current object we must use this keyword
        //that data that returns that object and everything that we are writing inside the
        //object createApp({}) is available and vuejs just makes it available interally
        //globally so by this keyword we can access the current object properties
        //and everything is present in the global of current object that we are working here
        //as it is an object so we must use this keyword and dont use arrow functions here
      } else {
        return this.courseGoalB;
      }
    },
    checkTrueOrFalse(val) {
      console.log(typeof val);
      console.log("by this way we can access the functions");
      console.log(this.outputGoal()); //by this way we can access the current object
      //property that is a function
      if (val) {
        return "true because it contains value not undefined";
      } else {
        return "false because it doesnt contains any value just undefined";
      }
    },
    getHtmlValue() {
      console.log("here we are printing the html value", this.htmlValue);
      return this.htmlValue;
    },
  },
});
app.mount("#user-goal");

