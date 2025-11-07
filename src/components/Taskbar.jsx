import React from 'react';
import { MessageSquare, Bot, Settings, User } from 'lucide-react';

const Taskbar = ({ mode, onModeChange, onOpenProfile }) => {
  const isAI = mode === 'ai';

  return (
    <aside
      className={`hidden sm:flex flex-col items-center justify-between py-4 px-2 w-16 shrink-0 rounded-2xl transition-all duration-300 ${
        isAI ? 'bg-white/10 backdrop-blur-lg shadow-xl' : 'bg-white/60 backdrop-blur-md shadow-lg'
      }`}
      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    >
      <div className="flex flex-col gap-3">
        <button
          onClick={() => onModeChange('chat')}
          className={`p-3 rounded-xl transition-all ${
            !isAI ? 'bg-white text-indigo-600 shadow-md' : 'bg-white/20 text-white hover:bg-white/30'
          }`}
          title="Chat Mode"
        >
          <MessageSquare size={20} />
        </button>
        <button
          onClick={() => onModeChange('ai')}
          className={`p-3 rounded-xl transition-all ${
            isAI ? 'bg-white text-sky-600 shadow-md' : 'bg-white/20 text-indigo-600 hover:bg-white'
          }`}
          title="AI Mode"
        >
          <Bot size={20} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          className={`${isAI ? 'text-white/80' : 'text-indigo-600'} p-2 rounded-lg hover:scale-105 transition-transform`}
          title="Settings"
        >
          <Settings size={18} />
        </button>
        <button
          onClick={onOpenProfile}
          className={`overflow-hidden rounded-xl border ${
            isAI ? 'border-white/30' : 'border-indigo-200'
          }`}
          title="Profile"
        >
          <img
            src="https://i.pravatar.cc/100?img=68"
            alt="profile"
            className="h-10 w-10 object-cover"
          />
        </button>
      </div>
    </aside>
  );
};

export default Taskbar;
