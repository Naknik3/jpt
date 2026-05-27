import axios from "axios";
import { MessageModel } from "../Models/MessageModel";
import { appConfig } from "../utils/AppConfig";

// Handles all HTTP requests to the backend API
class ResponseService {

    // Sends the user's message and returns the AI's reply
    async chat(conversation_id: string, message: string): Promise<string> {
        const res = await axios.post(`${appConfig.baseUrl}/chat`, { conversation_id, message });
        return res.data.response;
    }

    // Fetches the full message history for a given conversation
    async getConversation(conversation_id: string): Promise<MessageModel[]> {
        const res = await axios.get(`${appConfig.baseUrl}/conversations/${conversation_id}`);
        return res.data.messages;
    }

}

export const responseService = new ResponseService();
