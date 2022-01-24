const app=Vue.createApp({
    data(){
        return {
            tasks:[],
            task:"",
            showTask:true,
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.task)
            this.task="";
        },
        toggleTask(){
            this.showTask=!this.showTask
        }
    }
})
app.mount("#assignment")