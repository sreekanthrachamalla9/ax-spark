// src/app/globals/models/user.model.ts
export interface User {
  id: number;
  username: string;
  email: string;
  token?: string; // optional if login returns JWT
}
