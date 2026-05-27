from contextlib import asynccontextmanager
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from src.controllers.ai_controller import router as chat_router
from src.utils.dal import mongo_dal


@asynccontextmanager
async def lifespan(app: FastAPI):
    await mongo_dal.connect()
    yield
    await mongo_dal.close()


app = FastAPI(lifespan=lifespan)

# cors middleware for allowing frontend to access backend api
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# header security for security hardening
@app.middleware("http")
async def security_headers(request: Request, call_next):
    response = await call_next(request)
    response.headers["X-Content-Type-Options"] = "nosniff"
    response.headers["X-Frame-Options"] = "DENY"
    response.headers["Referrer-Policy"] = "no-referrer"
    return response


@app.exception_handler(Exception)
async def unhandled_exception_handler(request: Request, exc: Exception):
    return JSONResponse(status_code=500, content={"detail": "Internal server error"})


app.include_router(chat_router)


@app.get("/health")
def root():
    return {"status": "ok"}
