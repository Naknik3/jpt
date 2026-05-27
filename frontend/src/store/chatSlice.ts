import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageModel } from "../Models/MessageModel";

interface ChatState {
    conversationId: string;
    messages: MessageModel[];
}

const initialState: ChatState = {
    conversationId: crypto.randomUUID(),
    messages: [],
};

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        addMessage(state, action: PayloadAction<MessageModel>) {
            state.messages.push(action.payload);
        },
        clearMessages(state) {
            state.messages = [];
            state.conversationId = crypto.randomUUID();
        },
    },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
