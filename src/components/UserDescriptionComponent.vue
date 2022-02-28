<script lang="ts">
import type { User } from "@/models/User";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "UserDescriptionComponent",
  props: {
    user: { type: Object as PropType<User> },
  },
});
</script>

<template v-if="user">
  <div class="user-description">
    <img
      class="w-100 bg-dark p-3 rounded"
      src="/assets/img/avatar-4-svgrepo-com.svg"
      alt="Profile image"
    />
    <div
      class="bg-dark text-white rounded mt-3 py-1 d-flex flex-column justify-content-center"
    >
      <p class="m-0 p-2 px-4 text-end">{{ user?.name || "..." }}</p>
    </div>
    <div
      class="bg-dark text-white rounded mt-3 py-1 d-flex flex-column justify-content-center"
    >
      <p class="m-0 p-2 px-4 text-end">{{ user?.email || "..." }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-description {
  @media (max-width: 660px) {
    width: 100%;
  }
}
</style>
