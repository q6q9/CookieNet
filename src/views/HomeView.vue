<script setup lang="ts">
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
  <main>
    <h2>Hi {{ $store.getters.getUser.name }}!</h2>
    <h3>{{ $store.state.isAuth ? "What are u gonna do?" : "For using our cookies actions u needed log in" }}</h3>

  </main>
</template>
