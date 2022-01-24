const app=Vue.createApp({
    data(){
        return {
            name:"",
            enterName:"",
        }
    },
    methods:{
        showAlert:function(){
            alert("the alert dialogue box")
        },
        setName(event){
            this.name=event.target.value
        },
        setEnterName(event){
            this.enterName=event.target.value
        }
    }
})
app.mount("#assignment")