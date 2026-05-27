import axios from "axios";
import { MessageModel } from "../Models/MessageModel";
import { appConfig } from "../utils/AppConfig";

class ResponseService {

    async chat(conversation_id: string, message: string): Promise<string> {
        const res = await axios.post(`${appConfig.baseUrl}/chat`, { conversation_id, message });
        return res.data.response;
    }

    async getConversation(conversation_id: string): Promise<MessageModel[]> {
        const res = await axios.get(`${appConfig.baseUrl}/conversations/${conversation_id}`);
        return res.data.messages;
    }

}

export const responseService = new ResponseService();
