<script lang="ts">
import type { User } from "@/models/User";
import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  name: "UserProfileComponent",
  props: {
    user: { type: Object as PropType<User> },
  },
});
</script>

<template>
  <div class="main d-flex">
    <div class="w-25 h-25">
      <div class="d-flex justify-content-end">
        <img
          class="w-100 bg-dark p-3 rounded"
          src="/assets/img/avatar-4-svgrepo-com.svg"
          alt="Profile image"
        />
      </div>
      <div
        class="bg-dark text-white rounded mt-3 py-1 d-flex flex-column justify-content-center"
      >
        <p class="m-0 p-2 pe-4 text-end">{{ user.name }}</p>
      </div>
      <div
        class="bg-dark text-white rounded mt-3 py-1 d-flex flex-column justify-content-center"
      >
        <p class="m-0 p-2 pe-4 text-end">{{ user.email }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main * {
  //margin: 10px;
}

.border-img {
  width: 25vh;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 90%;
  }
}
</style>
