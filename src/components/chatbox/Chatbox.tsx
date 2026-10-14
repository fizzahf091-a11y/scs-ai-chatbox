
'use client';

import React, { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Plus, PanelLeftClose } from 'lucide-react';

interface ChatHistoryItem {
  id: string;
  title: string;
  group: 'Today' | 'Previous 7 days';
}

interface Message {
  id: string;
  sender: string;
  text: string;
  suggestions?: string[];
}

const WELCOME_MESSAGE: Message = {
  id: 'scs-welcome',
  sender: 'bot',
  text: "Assalam-o-Alaikum! 👋 Welcome to SCS Training & Development Center. I'm your AI assistant. How can I help you today?",
  suggestions: ['Courses', 'Admissions', 'Fees'],
};

export default function Chatbox() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeChatId, setActiveChatId] = useState('');

  // Admin mode (currently disabled)
  const [isAdmin] = useState(false);

  // History state
  const [adminHistory, setAdminHistory] = useState<ChatHistoryItem[]>([]);
  const [studentHistory, setStudentHistory] = useState<ChatHistoryItem[]>([]);

  // Show the welcome message when the chatbot opens
  const [messages, setMessages] = useState<Message[]>([
    WELCOME_MESSAGE,
  ]);

  // Prevent duplicate requests
  const [isSending, setIsSending] = useState(false);

  // Start a new chat and show the welcome message again
  const handleNewChat = () => {
    if (isSending) return;

    setMessages([WELCOME_MESSAGE]);
    setActiveChatId('');
  };

  // Send message to the backend and receive the AI response
  const handleSendMessage = async (text: string) => {
    const cleanText = text.trim();

    if (!cleanText || isSending) return;

    setIsSending(true);

    const newMsgId = Date.now().toString();

    const userMsg: Message = {
      id: newMsgId,
      sender: 'user',
      text: cleanText,
    };

    // Remove the welcome message once the user starts chatting
    setMessages((prev) => [
      ...prev.filter((message) => message.id !== WELCOME_MESSAGE.id),
      userMsg,
    ]);

    const newHistoryItem: ChatHistoryItem = {
      id: newMsgId,
      title:
        cleanText.length > 35
          ? `${cleanText.slice(0, 35)}...`
          : cleanText,
      group: 'Today',
    };

    setAdminHistory((prev) => [newHistoryItem, ...prev]);
    setStudentHistory((prev) => [newHistoryItem, ...prev]);
    setActiveChatId(newMsgId);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: cleanText,
        }),
      });

      const data = await res.json();

      if (
        !res.ok ||
        !data.success ||
        typeof data.answer !== 'string'
      ) {
        throw new Error(
          data.error || `Chat API failed with status ${res.status}`
        );
      }

      const botMsg: Message = {
        id: `${Date.now()}-bot`,
        sender: 'bot',
        text: data.answer,
        suggestions: Array.isArray(data.suggestions)
          ? data.suggestions
          : ['Courses', 'Admissions', 'Fees'],
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error in /api/chat:', error);

      const fallbackMsg: Message = {
        id: `${Date.now()}-error`,
        sender: 'bot',
        text:
          'Sorry, I could not process your request right now. Please try again or contact SCS on WhatsApp: +92 309 5982583.',
        suggestions: ['Courses', 'Admissions', 'Fees'],
      };

      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsSending(false);
    }
  };

  // Select the history visible for the current mode
  const visibleHistory = isAdmin ? adminHistory : studentHistory;

  const todayItems = visibleHistory.filter(
    (item) => item.group === 'Today'
  );

  const previousItems = visibleHistory.filter(
    (item) => item.group === 'Previous 7 days'
  );

  return (
    <div className="chatbox-container">
      {/* Sidebar */}
      <aside
        className={`chat-sidebar ${!isSidebarOpen ? 'closed' : ''}`}
        style={{
          animation: 'logoGradientShift 10s infinite ease-in-out',
          color: '#ffffff',
          width: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '16px 12px',
          flexShrink: 0,
          height: '100vh',
          boxSizing: 'border-box',
          zIndex: 20,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}
        >
          {/* Sidebar Header */}
          <div
            className="sidebar-header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '4px 6px',
              marginBottom: '16px',
              background: 'transparent',
            }}
          >
            <div
              className="sidebar-brand"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <img
                src="/images/scs logo.png"
                alt="SCS Logo"
                style={{
                  width: '28px',
                  height: '28px',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  backgroundColor: '#ffffff',
                  padding: '2px',
                }}
              />

              <span
                className="brand-title"
                style={{
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                }}
              >
                SCS Assistant
              </span>
            </div>

            <button
              type="button"
              className="sidebar-toggle-close"
              aria-label="Close sidebar"
              onClick={() => setIsSidebarOpen(false)}
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: 'none',
                cursor: 'pointer',
                color: '#ffffff',
                padding: '6px',
                borderRadius: '6px',
              }}
            >
              <PanelLeftClose size={18} />
            </button>
          </div>

          {/* New Chat */}
          <button
            type="button"
            className="new-chat-btn"
            onClick={handleNewChat}
            disabled={isSending}
            style={{
              width: '100%',
              padding: '10px 16px',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              cursor: isSending ? 'not-allowed' : 'pointer',
              marginBottom: '20px',
              opacity: isSending ? 0.6 : 1,
            }}
          >
            <Plus size={16} />
            <span>New chat</span>
          </button>

          {/* Chat History */}
          <div
            className="history-section"
            style={{
              flex: 1,
              overflowY: 'auto',
            }}
          >
            {todayItems.length > 0 && (
              <>
                <div
                  className="history-group-title"
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.75)',
                    padding: '8px 12px 4px 12px',
                    textTransform: 'uppercase',
                  }}
                >
                  Today
                </div>

                {todayItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveChatId(item.id)}
                    className={`history-item-btn ${
                      activeChatId === item.id ? 'active' : ''
                    }`}
                    title={item.title}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 12px',
                      fontSize: '13.5px',
                      borderRadius: '10px',
                      border: 'none',
                      background:
                        activeChatId === item.id
                          ? 'rgba(255, 255, 255, 0.3)'
                          : 'transparent',
                      color: '#ffffff',
                      marginBottom: '4px',
                      cursor: 'pointer',
                      fontWeight:
                        activeChatId === item.id ? 700 : 400,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </>
            )}

            {previousItems.length > 0 && (
              <>
                <div
                  className="history-group-title"
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'rgba(255, 255, 255, 0.75)',
                    padding: '8px 12px 4px 12px',
                    textTransform: 'uppercase',
                    marginTop: '12px',
                  }}
                >
                  Previous 7 days
                </div>

                {previousItems.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setActiveChatId(item.id)}
                    className={`history-item-btn ${
                      activeChatId === item.id ? 'active' : ''
                    }`}
                    title={item.title}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '10px 12px',
                      fontSize: '13.5px',
                      borderRadius: '10px',
                      border: 'none',
                      background:
                        activeChatId === item.id
                          ? 'rgba(255, 255, 255, 0.3)'
                          : 'transparent',
                      color: '#ffffff',
                      marginBottom: '4px',
                      cursor: 'pointer',
                      fontWeight:
                        activeChatId === item.id ? 700 : 400,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item.title}
                  </button>
                ))}
              </>
            )}
          </div>
        </div>

        {/* Sidebar Footer */}
        <div
          className="sidebar-footer"
          style={{
            marginTop: 'auto',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255, 255, 255, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
            background: 'transparent',
          }}
        >
          <img
            src="/images/scs logo.png"
            alt="SCS Profile"
            style={{
              width: '28px',
              height: '28px',
              objectFit: 'contain',
              borderRadius: '4px',
              backgroundColor: '#ffffff',
              padding: '2px',
              flexShrink: 0,
            }}
          />

          <div
            className="footer-info"
            style={{ overflow: 'hidden' }}
          >
            <span
              className="footer-title"
              style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#ffffff',
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              SCS Training & Dev
            </span>

            <span
              className="footer-subtitle"
              style={{
                fontSize: '10.5px',
                color: 'rgba(255, 255, 255, 0.8)',
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              Courses, admissions, fees
            </span>
          </div>
        </div>
      </aside>

      {/* Main Chat Container */}
      <main className="chatbox-main">
        <ChatHeader
          isSidebarOpen={isSidebarOpen}
          onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <ChatMessages
          messages={messages}
          onSuggestionClick={handleSendMessage}
        />

        <ChatInput
          onSend={handleSendMessage}
          disabled={isSending}
        />
      </main>
    </div>
  );
}