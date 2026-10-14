
'use client';

import React from 'react';
import {
  BookOpen,
  ClipboardCheck,
  Wallet,
  Compass,
} from 'lucide-react';
import '@/styles/welcome-screen.css';

interface Props {
  onCardClick: (title: string) => void;
}

const cards = [
  {
    id: 'courses',
    title: 'Courses',
    desc: 'Explore our training programs',
  },
  {
    id: 'admissions',
    title: 'Admissions',
    desc: 'How to apply and enroll',
  },
  {
    id: 'fees',
    title: 'Fees',
    desc: 'Pricing and payment options',
  },
  {
    id: 'paths',
    title: 'Learning paths',
    desc: 'Where to start, step by step',
  },
];

export default function WelcomeScreen({ onCardClick }: Props) {
  const renderIcon = (id: string) => {
    switch (id) {
      case 'courses':
        return <BookOpen size={20} />;
      case 'admissions':
        return <ClipboardCheck size={20} />;
      case 'fees':
        return <Wallet size={20} />;
      case 'paths':
        return <Compass size={20} />;
      default:
        return null;
    }
  };

  return (
    <div className="welcome-container">
      <div className="animated-logo-box">
        <img
          src="/images/scs logo.png"
          alt="SCS Logo"
          className="welcome-logo-img"
        />
      </div>

      <h1 className="welcome-heading">How can we help you?</h1>

      <p className="welcome-subtext">
        Ask about courses, admissions, fees, or learning paths.
      </p>

      <div className="suggestion-grid">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            className="suggestion-card-animated"
            onClick={() => onCardClick(card.title)}
            aria-label={`${card.title}: ${card.desc}`}
          >
            <div className="card-icon-box-animated">
              {renderIcon(card.id)}
            </div>

            <div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-desc">{card.desc}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
