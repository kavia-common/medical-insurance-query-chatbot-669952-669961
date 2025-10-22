import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MessageBubble renders a single chat message with styles for bot/user.
 */
export default function MessageBubble({ role = 'bot', text, time, typing = false }) {
  const isUser = role === 'user';

  return (
    <div className={`message-row ${isUser ? 'user' : 'bot'}`}>
      <div
        className={`message-bubble ${isUser ? 'user' : 'bot'}`}
        role="group"
        aria-label={`${isUser ? 'User' : 'Assistant'} message`}
      >
        <div className="msg-text">
          {typing ? (
            <span className="typing" aria-live="polite" aria-label="Assistant is typing">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
            </span>
          ) : (
            text
          )}
        </div>
        <div className="msg-meta" aria-hidden="true">
          <span>{isUser ? 'You' : 'MedInsure'}</span>
          <span>•</span>
          <time>{time}</time>
        </div>
      </div>
    </div>
  );
}
