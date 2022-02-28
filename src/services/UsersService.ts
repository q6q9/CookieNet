import type { User } from "@/models/User";
import axios from "axios";

export default class UsersService {
  async load(id: number): Promise<User | null> {
    try {
      const response = await axios.get<User>("/users/" + id);
      return response.data;
    } catch (err) {
      console.log(err);
    }
    return null;
  }
}
