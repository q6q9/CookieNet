import type { User } from "@/models/User";

export interface SelfUser extends User {
  token: string;
  createdHash: string;
}
