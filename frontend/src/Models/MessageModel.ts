// Shape of a single chat message — used throughout the app
export class MessageModel {
   public role?: "user" | "assistant"; // who sent it
   public content?: string;            // the message text
   public created_at?: string;         // ISO timestamp
}
