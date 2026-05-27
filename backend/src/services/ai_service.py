from openai import AsyncOpenAI
from datetime import datetime, timezone
from src.utils.app_config import config
from src.utils.dal import mongo_dal


class AIService:
    def __init__(self):
        self.client = AsyncOpenAI(api_key=config.openai_key)

    async def get_chat_response(self, conversation_id: str, message: str):
        db = mongo_dal.db

        # 1. Save user message
        await db.messages.insert_one({
            "conversation_id": conversation_id,
            "role": "user",
            "content": message,
            "created_at": datetime.now(timezone.utc).replace(microsecond=0)
        })

        # 2. Load previous messages (memory)
        history_cursor = db.messages.find(
            {"conversation_id": conversation_id}
        ).sort("created_at", 1)

        history = await history_cursor.to_list(length=100)

        # 3. Format for OpenAI
        messages = [
            {
                "role": item["role"],
                "content": item["content"]
            }
            for item in history
        ]

        # 4. Call OpenAI
        response = await self.client.chat.completions.create(
            model="gpt-4o-mini",
            messages=messages
        )

        ai_message = response.choices[0].message.content

        # 5. save response
        await db.messages.insert_one({
            "conversation_id": conversation_id,
            "role": "assistant",
            "content": ai_message,
            "created_at": datetime.now(timezone.utc).replace(microsecond=0)
        })

        return ai_message

    async def get_conversation(self, conversation_id: str):
        db = mongo_dal.db
        cursor = db.messages.find(
            {"conversation_id": conversation_id},
            {"_id": 0}).sort("created_at")
        return await cursor.to_list(length=100)


ai_service = AIService()
