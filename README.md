# Custom ChatBot

This is a simple, full-stack AI chatbot application built to understand how modern AI-powered apps are structured and implemented end to end.

The goal of this project was not just to make a chatbot work, but to build it cleanly with good separation of concerns, clear APIs, and a usable UI.

## What this project does

- Takes user messages from a chat UI
- Sends them to a backend API
- Uses OpenAI to generate responses
- Maintains conversation context across turns
- Displays responses in a clean, chat-style interface

## Tech stack

### Backend
- Node.js
- Express
- TypeScript
- OpenAI API

### Frontend
- React
- Tailwind CSS
- shadcn/ui
- react-hook-form

## Key features

- `/api/chat` endpoint for handling prompts and responses
- Input validation and error handling
- Conversation ID to maintain chat context
- Modular backend structure (routes, controllers, services, repositories)
- Clean chat UI with sender-based message styling
- Markdown support for bot responses
- Typing indicator for better user experience
- Auto-scrolling to keep new messages in view
- Prevents empty or whitespace-only messages

## Project structure

The code is organized to keep responsibilities clear and maintainable:
- Backend logic is split into routes, controllers, services, and repositories
- Frontend is broken into reusable components like:
  - Chatbot
  - ChatInput
  - ChatMessages
  - TypingIndicator

## Why I built this

I built this project to:
- Understand how AI APIs are used in real applications
- Practice clean backend architecture
- Improve frontend UX for chat-based interfaces
- Build something practical instead of a demo-only project

## Next improvements

- Add authentication
- Store conversations in a database
- Improve error states and loading feedback
- Add system prompts and configuration controls

---

Built as a hands-on learning project to better understand AI-powered application design.

