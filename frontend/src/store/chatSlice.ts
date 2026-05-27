import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MessageModel } from "../Models/MessageModel";

interface ChatState {
    conversationId: string; // unique ID sent to the backend to group messages
    messages: MessageModel[];
}

const initialState: ChatState = {
    conversationId: crypto.randomUUID(), // generate a new ID on page load
    messages: [],
};

// chatSlice manages all state related to the active conversation
const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {
        // adds a new message (user or assistant) to the list
        addMessage(state, action: PayloadAction<MessageModel>) {
            state.messages.push(action.payload);
        },
        // clears the chat and generates a fresh conversation ID
        clearMessages(state) {
            state.messages = [];
            state.conversationId = crypto.randomUUID();
        },
    },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
