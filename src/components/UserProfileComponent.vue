<script lang="ts">
import type { User } from "@/models/User";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import UserDescriptionComponent from "@/components/UserDescriptionComponent.vue";
import UserChatComponent from "@/components/UserChatComponent.vue";

export default defineComponent({
  name: "UserProfileComponent",
  components: { UserDescriptionComponent, UserChatComponent },

  props: {
    user: { type: Object as PropType<User> },
  },
});
</script>

<template v-if="user">
  <div class="main d-flex flex-wrap justify-content-center">
    <UserDescriptionComponent :user="user" class="m-3" />

    <UserChatComponent :with-users-ids="[user?.id || 0]" class="m-3" />
  </div>
</template>

<style scoped lang="scss">
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
