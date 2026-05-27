import os
from dotenv import load_dotenv

load_dotenv()


class AppConfig:
    def __init__(self):
        self.database_url = self.get_env_variable("DATABASE_URL")
        self.openai_key = self.get_env_variable("OPENAI_KEY")

        print("AppConfig initialized:", self.database_url)

    def get_env_variable(self, key: str) -> str:
        value = os.getenv(key)

        if value is None:
            raise ValueError(f"Missing environment variable: {key}")

        return value


config = AppConfig()