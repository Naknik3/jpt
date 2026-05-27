from motor.motor_asyncio import AsyncIOMotorClient
from src.utils.app_config import config


class MongoDAL:
    def __init__(self):
        self.client = AsyncIOMotorClient(config.database_url)
        self.db = self.client.get_default_database()
        print(f"Using database: {self.db.name}")

    async def connect(self):
        try:
            await self.client.admin.command("ping")
            print("Connected to MongoDB")
        except Exception as e:
            print(f"MongoDB connection failed: {e}")
            raise

    async def close(self):
        self.client.close()
        print("MongoDB connection closed")


mongo_dal = MongoDAL()
