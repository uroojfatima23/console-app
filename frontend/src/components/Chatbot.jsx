'use client';
import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input,
          conversation_history: messages
        })
      });
      
      const data = await response.json();
      setMessages(data.conversation_history);
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      }]);
    }
    
    setLoading(false);
  };

  return (
    <>
      <style jsx>{`
        .chatbot-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
        }
        
        .chat-button {
          background: #8B6F47;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .chat-button:hover {
          background: #7A5E3A;
          transform: scale(1.05);
        }
        
        .chat-window {
          background: #FAF6F1;
          width: 380px;
          height: 500px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .chat-header {
          background: linear-gradient(to right, #8B6F47, #A0826B);
          color: white;
          padding: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .close-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          font-size: 18px;
        }
        
        .close-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .empty-state {
          text-align: center;
          color: #9B8B7A;
          margin-top: 40px;
          font-size: 14px;
        }
        
        .message {
          max-width: 75%;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.5;
        }
        
        .message-user {
          background: linear-gradient(to right, #8B6F47, #A0826B);
          color: white;
          align-self: flex-end;
          margin-left: auto;
        }
        
        .message-assistant {
          background: white;
          color: #4A3F35;
          border: 1px solid #E5DDD1;
          align-self: flex-start;
        }
        
        .loading-dots {
          display: flex;
          gap: 4px;
          padding: 10px 14px;
          background: white;
          border: 1px solid #E5DDD1;
          border-radius: 12px;
          align-self: flex-start;
        }
        
        .dot {
          width: 8px;
          height: 8px;
          background: #8B6F47;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out;
        }
        
        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        
        .input-container {
          padding: 16px;
          background: white;
          border-top: 1px solid #E5DDD1;
          display: flex;
          gap: 8px;
        }
        
        .message-input {
          flex: 1;
          padding: 10px 14px;
          border: 1px solid #E5DDD1;
          border-radius: 12px;
          background: #FAF6F1;
          color: #4A3F35;
          font-size: 14px;
          outline: none;
        }
        
        .message-input::placeholder {
          color: #9B8B7A;
        }
        
        .send-button {
          background: linear-gradient(to right, #8B6F47, #A0826B);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 12px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        
        .send-button:hover:not(:disabled) {
          background: linear-gradient(to right, #7A5E3A, #8F7159);
        }
        
        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>

      <div className="chatbot-container">
        {!isOpen && (
          <button className="chat-button" onClick={() => setIsOpen(true)}>
            <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}

        {isOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Planner Assistant</h3>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.9 }}>Here to help you organize</p>
              </div>
              <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
            </div>

            <div className="messages-container">
              {messages.length === 0 && (
                <div className="empty-state">
                  <p>Start a conversation</p>
                  <p style={{ fontSize: '12px', marginTop: '4px' }}>Ask me anything about your tasks!</p>
                </div>
              )}
              
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={msg.role === 'user' ? 'message message-user' : 'message message-assistant'}
                >
                  {msg.content}
                </div>
              ))}
              
              {loading && (
                <div className="loading-dots">
                  <div className="dot"></div>
                  <div className="dot"></div>
                  <div className="dot"></div>
                </div>
              )}
            </div>

            <div className="input-container">
              <input
                className="message-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !loading && sendMessage()}
                placeholder="Type your message..."
                disabled={loading}
              />
              <button
                className="send-button"
                onClick={sendMessage}
                disabled={loading || !input.trim()}
              >
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}