<script lang="ts">
import { defineComponent } from "vue";
import UserProfileComponent from "@/components/UserProfileComponent.vue";
import type { User } from "@/models/User";
import UsersService from "@/services/UsersService";
export default defineComponent({
  name: "UserProfileView",
  props: ["setterOfTitle"],
  components: { UserProfileComponent },
  data: function () {
    return {
      user: {} as User,
    };
  },
  methods: {
    setUser(user: User): void {
      this.user = user;
      this.setterOfTitle(user.name);
    },

    init() {
      this.$auth.execAfterFirstUserLoad(async () => {
        const id = parseInt(this.$route.params.id.toString());
        if (id == this.$auth.user("id")) {
          this.setUser(this.$auth.user());
        } else {
          const userService = new UsersService();
          try {
            const user = await userService.load(id);
            this.setUser(user);
          } catch (err) {
            alert("Неверный ID юзера");
            this.$router.push("/");
            return;
          }
        }
      });
    },
  },
  mounted: function () {
    this.init();
  },
  watch: {
    "$route.params.id": function () {
      if (this.$route.params.id) this.init();
    },
  },
});
</script>
<template>
  <div>
    <user-profile-component :user="user" />
  </div>
</template>
<style scoped></style>
