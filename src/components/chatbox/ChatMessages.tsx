
'use client';

import React, { useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import WelcomeScreen from './WelcomeScreen';

interface Message {
  id: string;
  sender: string;
  text: string;
  suggestions?: string[];
}

interface Props {
  messages: Message[];
  onSuggestionClick: (text: string) => void;
}

export default function ChatMessages({
  messages,
  onSuggestionClick,
}: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll when a new message arrives
  useEffect(() => {
    if (messages.length > 0) {
      messagesEndRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
    }
  }, [messages]);

  // Preserve the welcome screen on initial load and New Chat
  if (messages.length === 0) {
    return <WelcomeScreen onCardClick={onSuggestionClick} />;
  }

  return (
    <div className="chat-messages-container">
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          sender={msg.sender}
          text={msg.text}
          suggestions={msg.suggestions}
          onSuggestionClick={onSuggestionClick}
        />
      ))}

      <div ref={messagesEndRef} />
    </div>
  );
}
