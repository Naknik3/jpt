from pydantic import BaseModel, Field
from typing import Literal
from datetime import datetime

#one file for all models, to avoid circular imports and keep things simple


# 1. Request model (what user sends)
class ChatRequest(BaseModel):
    conversation_id: str = Field(min_length=1)
    message: str = Field(min_length=1, max_length=5000)


# 2. Mongo message model (what you store)
class Message(BaseModel):
    conversation_id: str = Field(min_length=1)
    role: Literal["user", "assistant"]
    content: str = Field(min_length=1)
    created_at: datetime
