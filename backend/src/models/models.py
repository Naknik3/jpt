from pydantic import BaseModel
from datetime import datetime

#one file for all models, to avoid circular imports and keep things simple


# 1. Request model (what user sends)
class ChatRequest(BaseModel):
    conversation_id: str
    message: str


# 2. Mongo message model (what you store)
class Message(BaseModel):
    conversation_id: str
    role: str  # "user" or "assistant"
    content: str
    created_at: datetime
