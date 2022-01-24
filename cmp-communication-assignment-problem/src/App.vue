<template>
  <div>
      <!-- active user component -->
      <active-user @nameAndAge="addNameAndAge"></active-user>
      <!-- user data component -->
      <ul v-if="userData.length>0">
          <li v-for="user in userData" :key="user.age">
              <user-data-comp :name="user.name" :age="user.age"></user-data-comp>
          </li>
      </ul>
  </div>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue'
import UserDataComp from './components/UserDataComp.vue';
export default{
  components: { ActiveUser, UserDataComp },
    data(){
        return{
            userData:[],
        }
    },
    methods:{
        addNameAndAge(name,age){
            this.userData.push({name,age});
        }
    }
}
</script>


