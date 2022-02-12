<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      email: "",
      name: "",
    };
  },
  methods: {
    signUp() {
      let url = import.meta.env.VITE_API_URL;
      if (typeof url !== "string") {
        alert("Error: not exist API_URL");
        return;
      }
    },
  },
  mounted() {
    let authToken = this.$store.state.authToken;
    if (!authToken) {
      return;
    }

    let url = import.meta.env.VITE_API_URL;
    if (typeof url !== "string") {
      alert("Error: not exist API_URL");
      return;
    }

    axios
      .get(url + "/users/self", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let user = response.data;
        if (typeof user !== "object") {
          console.log(user);
          return;
        }
        this.email = user.email;
        this.name = user.name;
      });
  },
});
</script>

<template>
  <main>
    <h2>Hi Guest!</h2>
    <h3>
      {{
        $store.state.isAuth
          ? "What are u gonna do?"
          : "For using our cookies actions u needed log in"
      }}
    </h3>
    User:
    <div>
      <h4>{{ name }}</h4>
      <h4>{{ email }}</h4>
    </div>
  </main>
</template>
