<script lang="ts">
import { defineComponent } from "vue";
import UserProfileComponent from "@/components/UserProfileComponent.vue";
import type { User } from "@/models/User";

export default defineComponent({
  name: "SelfView",
  props: ["setterOfTitle"],
  components: { UserProfileComponent },
  data: function () {
    return {
      user: {} as User,
    };
  },
  mounted: function () {
    this.$auth.execAfterFirstUserLoad(() => {
      this.setterOfTitle(this.$auth.user("name"));
      this.user = this.$auth.user();
    });
  },
});
</script>
<template>
  <div>
    <user-profile-component :user="user" />
  </div>
</template>
<style scoped></style>
