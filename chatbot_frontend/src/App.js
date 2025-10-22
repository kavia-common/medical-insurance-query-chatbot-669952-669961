import React, { useEffect, useMemo, useRef, useState } from 'react';
import './styles.css';
import ChatHeader from './components/ChatHeader';
import MessageBubble from './components/MessageBubble';
import ChatInput from './components/ChatInput';
import { getInsuranceResponse } from './utils/insuranceKnowledgeBase';

// PUBLIC_INTERFACE
function App() {
  /**
   * Main MedInsure Chatbot App.
   * State: messages, inputValue, loading (typing indicator).
   * Persistence: sessionStorage preserves conversation across refreshes.
   */
  const [messages, setMessages] = useState(() => {
    const saved = sessionStorage.getItem('medinsure-chat');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    // initial welcome message
    return [
      {
        id: 'welcome',
        role: 'bot',
        text:
          'Hi! I’m MedInsure, your assistant for medical insurance questions. I can help with coverage, copays, deductibles, networks, claims, prior authorization, eligibility, and preventive care.\n\nI provide general information only and this is not medical or legal advice.',
        time: new Date().toLocaleTimeString()
      }
    ];
  });
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  // Persist to session storage
  useEffect(() => {
    sessionStorage.setItem('medinsure-chat', JSON.stringify(messages));
  }, [messages]);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = useMemo(() => {
    // PUBLIC_INTERFACE
    return () => {
      const content = inputValue.trim();
      if (!content || loading) return;

      const userMsg = {
        id: `u-${Date.now()}`,
        role: 'user',
        text: content,
        time: new Date().toLocaleTimeString()
      };
      setMessages((prev) => [...prev, userMsg]);
      setInputValue('');
      setLoading(true);

      // simulate typing delay
      setTimeout(() => {
        const replyText = getInsuranceResponse(content);
        const botMsg = {
          id: `b-${Date.now()}`,
          role: 'bot',
          text: replyText,
          time: new Date().toLocaleTimeString()
        };
        setMessages((prev) => [...prev, botMsg]);
        setLoading(false);
      }, 700);
    };
  }, [inputValue, loading]);

  return (
    <div className="app-shell">
      <ChatHeader />
      <main className="container" role="main" aria-labelledby="app-title">
        <section className="chat-surface" aria-label="Chat conversation">
          <div className="chat-window" role="log" aria-live="polite">
            {messages.map((m) => (
              <MessageBubble key={m.id} role={m.role} text={m.text} time={m.time} />
            ))}
            {loading && (
              <MessageBubble
                role="bot"
                typing
                text=""
                time={new Date().toLocaleTimeString()}
              />
            )}
            <div ref={endRef} />
          </div>
          <ChatInput
            value={inputValue}
            onChange={setInputValue}
            onSend={sendMessage}
            disabled={loading}
          />
        </section>
      </main>
      <footer className="footer-note" role="contentinfo">
        For general guidance only. Check your plan documents for specific benefits and costs.
      </footer>
    </div>
  );
}

export default App;
