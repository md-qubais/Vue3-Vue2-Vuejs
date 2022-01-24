<template>
<li>
    <header>Friends</header>
    <h2>
        {{friend.name}}
    </h2>
    <button @click="toggleDetails"> {{details ? 'show details':"hide details"}} </button>
    <ul v-if="details">
        <li><strong>Phone:</strong> {{friend.phone}}  </li>
        <li><strong>email:</strong> {{friend.email}} </li>
    </ul>
</li>
</template>

<script>
export default{
    data(){
        return{
            details:false,
            friend:{
                name:"mohammed qubaisuddin",
                phone:"7780615162",
                email:"shareefhussain733@gmail.com"
            }
        }
    },
    methods:{
        toggleDetails(){
            this.details=!this.details
        }
    }
}
</script>

