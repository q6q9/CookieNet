<script lang="ts">
import type { User } from "@/models/User";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Message } from "@/models/Message";
import MessageComponent from "@/components/MessageComponent.vue";
import MessagesService from "@/services/MessagesService";
import UsersService from "@/services/UsersService";

export default defineComponent({
  name: "UserChatComponent",
  components: { MessageComponent },
  props: {
    withUsersIds: { type: Object as PropType<number[]>, required: true },
  },
  data: function () {
    return {
      messages: [] as Message[] | null,
      body: String(),
      toUser: {} as User,
    };
  },
  methods: {
    async sendMessage(): Promise<void> {
      const messagesService = new MessagesService();
      const to = parseInt(this.$route.params.id.toString());
      await messagesService.send(to, this.body.toString());
    },
  },
  mounted() {
    this.$auth.execAfterFirstUserLoad(async () => {
      const to = parseInt(this.$route.params.id.toString());

      setInterval(() => {
        const messagesService = new MessagesService();
        messagesService.load(to).then((messages) => (this.messages = messages));  
      }, 500);

      const userService = new UsersService();
      userService.load(to).then((user) => (this.toUser = user));
    });
  },
});
</script>

<template>
  <div
    class="chat rounded bg-secondary bg-gradient text-dark d-flex flex-column"
  >
    <div class="chat__header w-100 pt-3 text-center bg-dark text-white shadow">
      <p>Chat of {{ 1 + withUsersIds.length }} members</p>
    </div>
    <div class="h-100">
      <div class="messages" v-for="message of messages" :key="message.id">
        <MessageComponent
          :message="message"
          :to="toUser"
          class="mx-2 my-3 p-3 bg-light rounded"
        />
      </div>
      <p class="p-3 text-white" v-if="!messages?.length">Сообщений нет</p>
    </div>
    <div
      class="panel form-group d-flex justify-content-around"
      style="flex: 1 1 auto"
    >
      <label class="bg-dark text-white p-2">Message:</label>
      <input v-model="body" type="text" class="form-control" />
      <button @click="sendMessage" class="btn btn-primary">Send</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  width: 72%;

  @media (max-width: 660px) {
    width: 100%;
  }

  .panel {
  }
}
</style>
