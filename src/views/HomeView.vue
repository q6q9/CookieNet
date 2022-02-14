<script lang="ts">
import { defineComponent } from "vue";
import AuthService from "@/services/AuthService";

export default defineComponent({
  name: "HomeView",
  data() {
    return {
      user: AuthService.user(),
    };
  },
  methods: {},
  watch: {
    "$store.state.user": function () {
      this.user = AuthService.user();
    },
  },
});
</script>

<template>
  <main>
    <h2>
      Hi <span class="text-danger">{{ $store.state.user.name }}</span
      >!
    </h2>
    <h3>
      {{
        $store.state.user
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
