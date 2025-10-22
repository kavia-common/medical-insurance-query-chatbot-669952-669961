import React, { useCallback } from 'react';

/**
 * PUBLIC_INTERFACE
 * ChatInput renders the input field and send button.
 */
export default function ChatInput({ value, onChange, onSend, disabled }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (!disabled && value.trim()) onSend();
      }
    },
    [onSend, disabled, value]
  );

  return (
    <div className="chat-input-bar" role="form" aria-label="Chat input">
      <input
        className="input-field"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Ask about coverage, claims, or eligibility..."
        aria-label="Message input"
        autoComplete="off"
        disabled={disabled}
      />
      <button
        type="button"
        className="send-btn"
        onClick={onSend}
        aria-label="Send message"
        disabled={disabled || !value.trim()}
      >
        Send ➤
      </button>
    </div>
  );
}
