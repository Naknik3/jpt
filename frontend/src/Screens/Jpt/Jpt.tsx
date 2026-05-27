import "./Jpt.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, clearMessages } from "../../store/chatSlice";
import { RootState } from "../../store/store";
import { MessageModel } from "../../Models/MessageModel";
import { responseService } from "../../Services/ResponseService";

export function Jpt() {
    const dispatch = useDispatch();
    const messages = useSelector((state: RootState) => state.chat.messages);
    const conversationId = useSelector((state: RootState) => state.chat.conversationId);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    async function sendMessage() {
        if (!input.trim() || loading) return;

        const userMsg: MessageModel = {
            role: "user",
            content: input,
            created_at: new Date().toISOString(),
        };

        dispatch(addMessage(userMsg));
        setInput("");
        setLoading(true);

        try {
            const response = await responseService.chat(conversationId, input);
            const assistantMsg: MessageModel = {
                role: "assistant",
                content: response,
                created_at: new Date().toISOString(),
            };
            dispatch(addMessage(assistantMsg));
        } finally {
            setLoading(false);
        }
    }

    function handleKeyDown(e: React.KeyboardEvent) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <div className="jpt-screen">
            <div className="chat-toolbar">
                <button className="new-chat-btn" onClick={() => { dispatch(clearMessages()); setInput(""); }} disabled={messages.length === 0}>
                    ✏ New chat
                </button>
            </div>
            <div className="messages">
                {messages.map((msg, i) => (
                    <div key={i} className={`message message--${msg.role}`}>
                        <p>{msg.content}</p>
                    </div>
                ))}
                {loading && <div className="message message--assistant message--loading"><p /></div>}
                <div ref={bottomRef} />
            </div>
            <div className="input-area">
                <textarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask your personal trainer..."
                    rows={1}
                    maxLength={5000}
                />
                <button onClick={sendMessage} disabled={loading || !input.trim()}>
                    Send
                </button>
            </div>
        </div>
    );
}
