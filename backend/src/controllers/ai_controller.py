from fastapi import APIRouter, HTTPException
from openai import OpenAIError
from pymongo.errors import PyMongoError
from uuid import uuid4

from src.models.models import ChatRequest
from src.services.ai_service import ai_service

router = APIRouter()

@router.post("/chat")
async def chat(request: ChatRequest):
    try:
        response = await ai_service.get_chat_response(
            conversation_id=request.conversation_id,
            message=request.message
        )
        return {"response": response}
    except OpenAIError as e:
        raise HTTPException(status_code=502, detail=f"AI service error: {str(e)}")
    except PyMongoError as e:
        raise HTTPException(status_code=503, detail=f"Database error: {str(e)}")


@router.get("/conversations/{conversation_id}")
async def get_messages(conversation_id: str):
    try:
        messages = await ai_service.get_conversation(conversation_id)
        return {"messages": messages}
    except PyMongoError as e:
        raise HTTPException(status_code=503, detail=f"Database error: {str(e)}")


@router.post("/conversations/new")
def new_conversation():
    return {"conversation_id": str(uuid4())}