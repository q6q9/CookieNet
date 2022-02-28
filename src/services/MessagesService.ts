import axios from "axios";
import type { Message } from "@/models/Message";

export default class MessagesService {
  async send(to: number, body: string) {
    try {
      const response = await axios.post("/messages", {
        to: to,
        body: body,
      });
      return response.status === 201;
    } catch (err) {
      console.log(err);
    }
    return null;
  }

  async load(id: number): Promise<Message[] | null> {
    try {
      const response = await axios.get<Message[]>("/messages/" + id);
      return response.data;
    } catch (err) {
      console.log(err);
    }
    return null;
  }
}
