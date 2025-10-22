# MedInsure Chatbot (Frontend)

A simple web-based chatbot for answering medical insurance questions with a modern Ocean Professional theme. This is a purely frontend React app with an in-browser rule-based responder. No backend is required.

## Features
- Single-page React UI with:
  - Header titled "MedInsure Chatbot"
  - Central chat window with message bubbles and timestamps
  - Input bar with placeholder and accessible controls
- Rule-based responses for common medical insurance topics (coverage, copays, deductibles, network, claims, prior auth, eligibility, preventive care)
- Typing indicator (three-dot animation) with a short delay
- Session persistence via `sessionStorage`
- Responsive layout for mobile and desktop
- Accessibility: semantic landmarks, aria labels, and color contrast

## Theme: Ocean Professional
- Primary: `#3b82f6`
- Secondary: `#64748b`
- Success: `#06b6d4`
- Error: `#EF4444`
- Background: `#f9fafb`
- Surface: `#ffffff`
- Text: `#111827`
- Design: modern, rounded corners, subtle shadows, gradient accents, smooth transitions

## Getting Started
In the container directory:

- Install: `npm install`
- Run: `npm start` (serves at http://localhost:3000)
- Build: `npm run build`

No environment variables are required.

## Notes
- All logic runs in the browser; there are no network calls.
- This app provides general information only. It is not medical or legal advice.
