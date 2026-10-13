'use client';

import React, { useState } from 'react';
import { ArrowUp, Mic, MicOff } from 'lucide-react';

interface Props {
  onSend: (text: string) => void;
  disabled?: boolean;
}

interface SpeechRecognitionResult {
  transcript: string;
}

interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent {
  results: SpeechRecognitionResultList[];
}

interface SpeechRecognitionInstance {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

interface SpeechWindow extends Window {
  SpeechRecognition?: new () => SpeechRecognitionInstance;
  webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
}

export default function ChatInput({ onSend, disabled = false }: Props) {
  const [text, setText] = useState('');
  const [isListening, setIsListening] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() && !disabled) {
      onSend(text);
      setText('');
    }
  };

  const handleMicrophone = () => {
    const speechWindow = window as SpeechWindow;
    const SpeechRecognitionAPI =
      speechWindow.SpeechRecognition ||
      speechWindow.webkitSpeechRecognition;

    if (!SpeechRecognitionAPI) {
      alert('Speech recognition is not supported in this browser. Please use Google Chrome.');
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognitionAPI();

    recognition.lang = 'en-US';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript || '')
        .join(' ');

      setText((previous) =>
        previous.trim()
          ? `${previous.trim()} ${transcript}`
          : transcript
      );
    };

    recognition.onerror = () => {
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    try {
      setIsListening(true);
      recognition.start();
    } catch (error) {
      console.error('Microphone error:', error);
      setIsListening(false);
    }
  };

  const isTyped = text.trim().length > 0;

  return (
    <div className="chat-input-wrapper">
      <form className="chat-input-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="chat-input-field"
          placeholder="Message SCS Assistant"
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={disabled}
        />

        <button
          type="button"
          className="send-submit-btn"
          onClick={handleMicrophone}
          disabled={disabled}
          title={isListening ? 'Listening...' : 'Speak in English'}
          aria-label={isListening ? 'Stop listening' : 'Start microphone'}
        >
          {isListening ? (
            <MicOff size={18} color="#ef4444" />
          ) : (
            <Mic size={18} color="#6b7280" />
          )}
        </button>

        <button
          type="submit"
          className="send-submit-btn"
          disabled={!isTyped || disabled}
          title="Send message"
        >
          <ArrowUp
            size={18}
            strokeWidth={2.5}
            color={isTyped && !disabled ? '#ffffff' : '#6b7280'}
          />
        </button>
      </form>

      <p className="input-disclaimer-text">
        AI can make mistakes. Fees aur admissions office se confirm karein.
      </p>
    </div>
  );
}