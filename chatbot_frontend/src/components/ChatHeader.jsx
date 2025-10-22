import React from 'react';

// PUBLIC_INTERFACE
export default function ChatHeader() {
  /**
   * Chat header with title and brief subtitle.
   * Accessibility: header landmark and semantic heading tags.
   */
  return (
    <header className="chat-header" role="banner">
      <div className="header-inner container">
        <div className="logo-badge" aria-hidden="true">MI</div>
        <div className="header-title-wrap">
          <h1 id="app-title" className="header-title">MedInsure Chatbot</h1>
          <p className="header-subtitle">
            Answers about coverage, claims, and eligibility. Not medical or legal advice.
          </p>
        </div>
      </div>
    </header>
  );
}
