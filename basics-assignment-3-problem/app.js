const app=Vue.createApp({
    data(){
        return{
            number:0,
            result:"",
        }
    },
    watch:{
        number(value){
            if(value>37){
                if(this.result!="Too much!"){
                    this.result="Too much!";
                }
            }else{
                if(this.result!="Not there yet"){
                    this.result="Not there yet";
                }
            }
        },
        result(){
            setTimeout(()=>{
                this.number=0;
            },5000)
        }
    },
    methods:{
        Add5(){
            this.number+=5;
        },
        Add1(){
            this.number+=1;
        },
    }
})
app.mount("#assignment")