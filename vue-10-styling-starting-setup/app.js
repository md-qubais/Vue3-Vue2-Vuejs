const app=Vue.createApp({
    data(){
        return {
            boxASelected:false,
            boxBSelected:false,
            boxCSelected:false,
        }
    },
    methods:{
        boxSelected(box){
            console.log("clicked")
            if(box==='A'){
                this.boxASelected=!this.boxASelected;
            }else if(box==='B'){
                this.boxBSelected=!this.boxBSelected;
            }else{
                this.boxCSelected=!this.boxCSelected;
            }
        }
    }
})
app.mount("#styling")