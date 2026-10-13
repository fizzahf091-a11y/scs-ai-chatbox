import React from 'react';
import { PanelLeft } from 'lucide-react';

interface Props {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function ChatHeader({ isSidebarOpen, onToggleSidebar }: Props) {
  return (
    <header className="chat-header">
      <div className="chat-header-left">
        {!isSidebarOpen && (
          <button className="sidebar-toggle-icon" onClick={onToggleSidebar}>
            <PanelLeft size={18} />
          </button>
        )}
        
        {/* SCS Logo Image */}
        <div className="header-brand-container">
          <div className="header-logo-wrapper">
          <img 
              src="/images/scs logo.png" 
              alt="SCS Logo" 
              className="header-logo-img" 
            />
            <span className="online-dot"></span>
          </div>
          
          <div className="header-title-wrapper">
            <h1 className="header-title">SCS AI Assistant</h1>
            <p className="header-subtitle">Training & Development Center</p>
          </div>
        </div>
      </div>

      {/* Online Status Badge */}
      <div className="online-badge">
        <span className="badge-dot"></span>
        <span>Online</span>
      </div>
    </header>
  );
}