function getRandomValue(min,max){
    return Math.floor(Math.random()* (max - min ) + min)
}

const app=Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logMessages:[],
        }
    },
    watch:{
        playerHealth(value){
            if(value<=0 && this.monsterHealth<=0){
                this.winner="draw";
            }else if(value<=0){
                this.winner="monster"
            }
        },
        monsterHealth(value){
            if(value<=0 && this.playerHealth<=0){
                this.winner="draw"
            }else if(value<=0){
                winner="player"
            }
        }
    },
    computed:{
        monsterBarStyles(){
            if(this.monsterHealth<=0){
                return {
                    width:"0%"
                }
            }
            return{
                width:this.monsterHealth + "%"
            }
        },
        playerBarStyles(){
            if(this.playerHealth<=0){
                return {
                    width:"0%"
                }
            }
            return{
                width:this.playerHealth+"%"
            }
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods:{
        attackMonster(){
            //this below gvies us the random value in the range 5 to 12
            // const attackValue=Math.floor(Math.random()* (12 -5 ) + 5);
            this.currentRound++;
            const attackValue=getRandomValue(5,12);
            this.monsterHealth=this.monsterHealth - attackValue
            this.logMessages.unshift({
                actionBy:"player",
                actionType:"attack to monster",
                value:attackValue
            })
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue= getRandomValue(8,15);
            this.playerHealth=this.playerHealth - attackValue
            this.logMessages.unshift({
                actionBy:"monster",
                actionType:"attack to player",
                value:attackValue
            })
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue=getRandomValue(10,25)
            this.monsterHealth-=attackValue;
            this.logMessages.unshift({
                actionBy:"player",
                actionType:"SpecialAttack to monster",
                value:attackValue
            })
            this.attackPlayer();
        },
        healPlayer(){
            this.currentRound++;
            const healValue=getRandomValue(8,20);
            if(this.playerHealth + healValue > 100){
                this.playerHealth=100;
            }else{
                this.playerHealth+=healValue
            }
            this.attackPlayer();
        },
        startAgain(){
            this.playerHealth=100
            this.monsterHealth=100
            this.winner=null;
            this.currentRound=0
        },
        surrender(){
            this.winner="monster"
        }
    }
})
app.mount("#game")