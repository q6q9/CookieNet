<script lang="ts">
import type { User } from "@/models/User";
import { defineComponent } from "vue";
import type { PropType } from "vue";
import type { Message } from "@/models/Message";
import MessageComponent from "@/components/MessageComponent.vue";

export default defineComponent({
  name: "UserChatComponent",
  components: { MessageComponent },
  props: {
    withUsersIds: { type: Object as PropType<number[]>, required: true },
  },
  data: function () {
    return {
      messages: [] as Message[],
    };
  },
  mounted() {
    let mess: Message = {
      author_name: "andrew",
      body: "Привет юзер!",
    };

    let mess1: Message = {
      author_name: "user",
      body: "Привет Андрей!",
    };
    this.messages = [mess, mess1];
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

    <div
      class="messages"
      v-for="message of messages"
      :key="message.author_name"
    >
      <MessageComponent
        :message="message"
        class="mx-2 my-3 p-3 bg-light rounded"
      />
    </div>

    <div class="panel mt-5 form-group d-flex justify-content-around">
      <label class="bg-dark text-white p-2">Message:</label>
      <input type="text" class="form-control" />
      <button class="btn btn-primary">Send</button>
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
