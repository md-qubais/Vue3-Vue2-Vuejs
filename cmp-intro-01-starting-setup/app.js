const app = Vue.createApp({
  data() {
    return {
      details: false,
      friends: [
        {
          name: "mohammed qubaisuddin",
          phone: "7777777777",
          email: "shareefhussain733@gmail.com",
        },
        {
          name: "mohammed imaduddin",
          phone: "7777777777",
          email: "shareefhussain720@gmail.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
});

app.component("friends-component", {
  template: `
  <li>
    <h2>{{friend.name}}</h2>
          <button @click="toggleDetails"> {{details?'show':'hide'}} Details</button>
          <ul v-if="details">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
          </li>
    `,
  data() {
    return {
      details: false,
      friend: {
        name: "mohammed qubaisuddin",
        phone: "7777777777",
        email: "shareefhussain733@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.details = !this.details;
    },
  },
});

app.mount("#app");
