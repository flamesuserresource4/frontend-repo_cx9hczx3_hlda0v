import React from 'react';
import { Plus, Filter, SlidersHorizontal, Search, Bot } from 'lucide-react';

const Header = ({ title, children, isAI }) => (
  <div
    className={`flex items-center justify-between p-3 rounded-t-2xl ${
      isAI ? 'bg-white/10 text-white' : 'bg-white/70 text-indigo-900'
    } backdrop-blur-md`}
  >
    <h2 className="font-semibold tracking-wide">{title}</h2>
    <div className="flex items-center gap-2">{children}</div>
  </div>
);

const Sidebar = ({ mode, onOpenChat, onOpenAI }) => {
  const isAI = mode === 'ai';

  return (
    <div
      className={`flex flex-col w-80 max-w-[22rem] rounded-2xl overflow-hidden transition-colors ${
        isAI ? 'bg-white/10 text-white' : 'bg-white/60 text-indigo-900'
      } backdrop-blur-xl shadow-xl`}
      style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
    >
      {isAI ? (
        <Header title="Nova AI" isAI>
          <button className="px-3 py-1.5 rounded-xl bg-white text-sky-600 text-sm hover:shadow-lg transition-shadow">
            New Chat
          </button>
          <button className="px-3 py-1.5 rounded-xl bg-white/20 text-white text-sm hover:bg-white/30 transition-colors">
            Nova AI Settings
          </button>
        </Header>
      ) : (
        <Header title="Chats">
          <button className="px-3 py-1.5 rounded-xl bg-white text-indigo-600 text-sm hover:shadow-lg transition-shadow">
            Add Contact
          </button>
          <button className="px-3 py-1.5 rounded-xl bg-white text-indigo-600 text-sm hover:shadow-lg transition-shadow">
            Chat Settings
          </button>
          <button className="px-3 py-1.5 rounded-xl bg-white text-indigo-600 text-sm hover:shadow-lg transition-shadow">
            Chat Filter
          </button>
        </Header>
      )}

      <div className="p-3 border-b border-white/20">
        <div className={`flex items-center gap-2 px-3 py-2 rounded-xl ${isAI ? 'bg-white/10' : 'bg-white'} backdrop-blur-md` }>
          <Search size={16} className={isAI ? 'text-white/70' : 'text-indigo-400'} />
          <input
            className={`w-full bg-transparent outline-none text-sm ${isAI ? 'placeholder-white/60' : 'placeholder-indigo-400'}`}
            placeholder={isAI ? 'Search AI chats...' : 'Search chats...'}
          />
        </div>
        {!isAI && (
          <button onClick={onOpenAI} className="mt-3 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#2D9CDB] text-white shadow-lg hover:shadow-xl transition-all">
            <Bot size={16} /> Chat with Nova AI
          </button>
        )}
      </div>

      <div className="flex-1 overflow-auto p-2 space-y-1">
        {isAI
          ? [1,2,3,4,5].map((n) => (
              <button key={n} onClick={onOpenAI} className="w-full text-left p-3 rounded-xl hover:bg-white/10 transition-colors">
                <div className="font-medium">AI Chat {n}</div>
                <div className="text-xs opacity-70">Rename • Delete</div>
              </button>
            ))
          : [
              { name: 'Ava Martinez', preview: 'Hey! You free later?' },
              { name: 'Liam Chen', preview: 'Got the files, thanks.' },
              { name: 'Noah Johnson', preview: 'Let’s call in 10?' },
              { name: 'Mia Patel', preview: 'Absolutely loving this!' },
            ].map((c, idx) => (
              <button key={idx} onClick={onOpenChat} className="w-full text-left p-3 rounded-xl hover:bg-white transition-colors bg-white/70">
                <div className="font-medium text-indigo-900">{c.name}</div>
                <div className="text-xs text-indigo-500">{c.preview}</div>
                <div className="mt-1 text-[11px] text-indigo-400">Block • Unblock • Delete</div>
              </button>
            ))}
      </div>
    </div>
  );
};

export default Sidebar;
