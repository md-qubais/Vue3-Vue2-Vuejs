import { createApp } from 'vue';
import App from "./App"
import FriendComponent from "./components/FriendComponent"


const app=createApp(App)

app.component("friend-component",FriendComponent)//we are unlocking the component

app.mount("#app")