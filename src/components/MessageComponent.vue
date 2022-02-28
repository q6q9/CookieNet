<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { User } from "@/models/User";
import type { Message } from "@/models/Message";

export default defineComponent({
  name: "MessageComponent",
  props: {
    message: {
      type: Object as PropType<Message>,
      required: true,
    },
    to: {
      type: Object as PropType<User>,
      required: true,
    },
  },
});
</script>

<template>
  <div class="d-flex justify-content-between">
    <h3>{{ message.is_own ? "You" : to.name }}</h3>
    <h4>{{ message.body }}</h4>
  </div>
</template>

<style scoped></style>
