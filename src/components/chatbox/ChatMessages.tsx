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

export default function ChatMessages({ messages, onSuggestionClick }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom when a new message arrives
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  if (messages.length === 0) {
    return <WelcomeScreen onCardClick={onSuggestionClick} />;
  }

  return (
    <div className="chat-messages-container" style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
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