from fastapi import FastAPI
import os
from typing import List
from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


origins = [
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello():
    return "Hello from my Deta Micro"


@app.post("/uploadfile")
async def create_upload_file(file: UploadFile):
    return {"filename": file.filename}
