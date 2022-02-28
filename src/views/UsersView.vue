<script lang="ts">
import { defineComponent } from "vue";
import type { User } from "@/models/User";
import axios from "axios";

export default defineComponent({
  name: "UsersView",
  data() {
    return {
      users: [] as User[],
    };
  },
  methods: {
    async loadUsers() {
      axios
        .get<User[]>("/users")
        .then((response) => {
          this.users = response.data;
        })
        .catch(() => {
          alert("Unknown error");
        });
    },
  },
  mounted() {
    this.loadUsers();
  },
});
</script>
<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Created_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, i) in users" :key="user.name">
          <th scope="row">
            <RouterLink
              :to="{ path: '/' + user.id }"
              class="text-decoration-none text-dark"
              >{{ i + 1 }}
            </RouterLink>
          </th>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.created_at }}</td>
        </tr>
      </tbody>
    </table>
    <h3 v-if="!users.length">No users :(</h3>
  </div>
</template>
