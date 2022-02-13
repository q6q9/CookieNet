<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import type { User } from "@/models/User";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      user: {} as User,
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
    let authToken: string = this.$store.state.authToken;
    if (!authToken) {
      return;
    }

    let url = import.meta.env.VITE_API_URL;
    if (typeof url !== "string") {
      alert("Error: not exist API_URL");
      return;
    }

    axios
      .get<User>(url + "/users/self", {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        this.user = response.data;
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
      <h4>{{ user.email }}</h4>
      <h4>{{ user.name }}</h4>
    </div>
  </main>
</template>
