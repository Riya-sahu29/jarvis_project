# 🤖 Jarvis - AI Voice Assistant with Face Recognition

An AI-powered desktop voice assistant built using Python that integrates
Face Recognition, Voice Processing, Database Management, and Hugging Face NLP models.

This project focuses on building a secure, intelligent, and modular assistant
that combines computer vision, speech processing, and AI APIs.

---

## 🚀 Features

- 🎤 Voice Command Recognition
- 👁 Face Recognition for User Authentication
- 🧠 AI Responses using Hugging Face API
- 📞 Store and Retrieve Contact Numbers
- 🗂 Store Command History using SQLite
- 🌐 Open Websites and Perform Basic Tasks
- 📰 Fetch News (Optional if implemented)
- 🔊 Text-to-Speech Responses

---

## 🛠 Technologies Used

- Python
- OpenCV (Face Recognition)
- face_recognition Library
- SpeechRecognition
- pyttsx3 (Text to Speech)
- SQLite3 (Database)
- Requests (API calls)
- Hugging Face Inference API

---

## 🧠 How It Works

1. The system starts with **face recognition authentication**.
2. If the face matches, the assistant activates.
3. The assistant listens to voice commands.
4. Commands are processed and:
   - Stored in SQLite database (history)
   - Contacts are stored and retrieved
   - AI responses are generated using Hugging Face API
5. Assistant replies using text-to-speech.

---

## 🗄 Database Structure

SQLite database is used to store:

### 1️⃣ Command History Table
- id
- command
- timestamp

### 2️⃣ Contacts Table
- id
- name
- phone_number

---

## 🔐 Face Recognition

- Uses OpenCV + face_recognition library
- Authenticates user before enabling assistant
- Improves security and personalization

---

## 🤗 Hugging Face Integration

The project uses Hugging Face Inference API to generate AI-powered responses.

Example:

```python
API_URL = "https://api-inference.huggingface.co/models/<model-name>"
⚙️ Installation

```bash
git clone https://github.com/Riya-sahu29/jarvis_project.git
cd jarvis_project
pip install -r requirements.txt
