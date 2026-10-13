
'use client';

import React, { useState, useEffect } from 'react';

interface Props {
  sender: string;
  text: string;
  timestamp?: string;
  suggestions?: string[];
  onSuggestionClick?: (suggestion: string) => void;
}

type TextPart =
  | { type: 'text'; value: string }
  | { type: 'bold'; value: string }
  | { type: 'link'; label: string; url: string };

function parseMessage(text: string): TextPart[] {
  const parts: TextPart[] = [];

  // Fix escaped ampersands in URLs: \& becomes &
  const cleanedText = text.replace(/\\&/g, '&');

  // Supports Markdown links, bold text, and plain URLs
  const pattern =
    /\[([^\]]+)\]\(\s*(https?:\/\/[^)\s]+)\s*\)|\*\*([^*]+)\*\*|(https?:\/\/[^\s<>"\]]+)/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(cleanedText)) !== null) {
    if (match.index > lastIndex) {
      parts.push({
        type: 'text',
        value: cleanedText.slice(lastIndex, match.index),
      });
    }

    if (match[1] && match[2]) {
      // Markdown link: [Google Maps](https://...)
      const url = match[2].replace(/[.,!?;:]+$/, '');

      parts.push({
        type: 'link',
        label: match[1],
        url,
      });

      // Preserve punctuation after the URL, if any.
      const punctuation = match[2].slice(url.length);

      if (punctuation) {
        parts.push({
          type: 'text',
          value: punctuation,
        });
      }
    } else if (match[3]) {
      // Bold text: **Office Address**
      parts.push({
        type: 'bold',
        value: match[3],
      });
    } else if (match[4]) {
      // Plain URL: https://...
      const url = match[4].replace(/[.,!?;:]+$/, '');

      parts.push({
        type: 'link',
        label: url,
        url,
      });

      // Preserve punctuation removed from the URL.
      const punctuation = match[4].slice(url.length);

      if (punctuation) {
        parts.push({
          type: 'text',
          value: punctuation,
        });
      }
    }

    lastIndex = pattern.lastIndex;
  }

  if (lastIndex < cleanedText.length) {
    parts.push({
      type: 'text',
      value: cleanedText.slice(lastIndex),
    });
  }

  return parts;
}

function renderMessage(text: string) {
  const parts = parseMessage(text);

  return parts.map((part, index) => {
    if (part.type === 'bold') {
      return <strong key={index}>{part.value}</strong>;
    }

    if (part.type === 'link') {
      // Only allow HTTP and HTTPS links.
      if (
        !part.url.startsWith('https://') &&
        !part.url.startsWith('http://')
      ) {
        return (
          <React.Fragment key={index}>
            {part.label}
          </React.Fragment>
        );
      }

      return (
        <a
          key={index}
          href={part.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: '#0891b2',
            textDecoration: 'underline',
            overflowWrap: 'anywhere',
            cursor: 'pointer',
          }}
        >
          {part.label}
        </a>
      );
    }

    return (
      <React.Fragment key={index}>
        {part.value}
      </React.Fragment>
    );
  });
}

export default function ChatMessage({
  sender,
  text,
  timestamp,
  suggestions,
  onSuggestionClick,
}: Props) {
  const isBot = sender === 'bot';
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    setFormattedTime(
      timestamp ||
        new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
    );
  }, [timestamp]);

  return (
    <div className={`chat-message-row ${isBot ? 'bot' : 'user'}`}>
      {isBot && (
        <div className="message-avatar">
          <img
            src="/images/scs logo.png"
            alt="SCS"
            className="message-avatar-img"
          />
        </div>
      )}

      <div className="message-content-wrapper">
        <div className="message-text" style={{ whiteSpace: 'pre-line' }}>
          {renderMessage(text)}
        </div>

        {suggestions && suggestions.length > 0 && (
          <div className="suggestion-chips-container">
            {suggestions.map((item, index) => (
              <button
                key={`${item}-${index}`}
                type="button"
                className="suggestion-chip"
                onClick={() => onSuggestionClick?.(item)}
              >
                {item}
              </button>
            ))}
          </div>
        )}

        {formattedTime && (
          <span className="message-timestamp">
            {formattedTime}
          </span>
        )}
      </div>
    </div>
  );
}