const app=Vue.createApp({
    data:function(){
        return {
            name:"mohammed qubaisuddin",
            age:22,
            image:"https://media-exp1.licdn.com/dms/image/C4D03AQGxAhqnW0e3UA/profile-displayphoto-shrink_400_400/0/1619906565796?e=1646265600&v=beta&t=SwVK0G44XFpwm2DFCOj8WvcA7fdGmYd1Y9dZ-eUxvnc",
        }
    },
    methods:{
        ageAfter5Years:function(){
            return this.age+5;
        },
        getFavNumber:function(){
            return Math.random();
        },
        getImage:function(){
            return this.image;
        }
    }
})
app.mount("#assignment")
