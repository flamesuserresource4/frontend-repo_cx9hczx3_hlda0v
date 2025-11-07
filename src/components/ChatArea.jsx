import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Send, Smile, Phone, Video, Bot } from 'lucide-react';

const Message = ({ from, text, isAI }) => (
  <div className={`flex ${from === 'me' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[75%] px-4 py-2 rounded-2xl mb-2 text-sm shadow-lg ${
        from === 'me'
          ? 'bg-white text-indigo-900 rounded-br-none'
          : isAI
          ? 'bg-gradient-to-r from-[#6C63FF] to-[#2D9CDB] text-white rounded-bl-none'
          : 'bg-white/80 text-indigo-900 rounded-bl-none'
      }`}
    >
      {text}
    </div>
  </div>
);

const ChatArea = ({ mode, open, onBack }) => {
  const isAI = mode === 'ai';
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    isAI
      ? { from: 'ai', text: 'Hello! I am Nova AI. How can I assist you today?' }
      : { from: 'them', text: 'Hey! Long time no see 👋' },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const myMsg = { from: 'me', text: input };
    setMessages((m) => [...m, myMsg]);
    setInput('');
    if (isAI) {
      // playful typing delay
      setTimeout(() => {
        setMessages((m) => [
          ...m,
          { from: 'ai', text: '✨ Nova is thinking...'} ,
        ]);
        setTimeout(() => {
          setMessages((m) => m.slice(0, -1).concat({ from: 'ai', text: 'Here is a helpful answer tailored just for you.' }));
        }, 900);
      }, 400);
    }
  };

  return (
    <div
      className={`flex-1 rounded-2xl overflow-hidden backdrop-blur-xl transition-all duration-500 ${
        isAI ? 'bg-white/10' : 'bg-white/60'
      } ${open ? 'translate-x-0' : 'translate-x-full sm:translate-x-0'} sm:transition-none`}
      style={{ boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
    >
      <div className={`flex items-center justify-between px-4 py-3 ${isAI ? 'text-white' : 'text-indigo-900'}`}>
        <div className="flex items-center gap-2">
          <button onClick={onBack} className="sm:hidden p-2 rounded-lg bg-white/20">
            <ArrowLeft size={18} />
          </button>
          <div className="font-semibold">{isAI ? 'Nova AI' : 'Chat Room'}</div>
        </div>
        <div className="flex items-center gap-2">
          {!isAI && (
            <>
              <button className="p-2 rounded-lg bg-white text-indigo-600 shadow-md"><Phone size={18} /></button>
              <button className="p-2 rounded-lg bg-white text-indigo-600 shadow-md"><Video size={18} /></button>
            </>
          )}
          {isAI && (
            <div className="flex items-center gap-2 text-white/90">
              <Bot size={18} />
              <span className="text-sm">Online</span>
            </div>
          )}
        </div>
      </div>

      <div ref={scrollRef} className={`h-[calc(100%-7rem)] overflow-y-auto px-4 py-2 ${isAI ? 'text-white' : 'text-indigo-900'}`}>
        {messages.map((m, idx) => (
          <Message key={idx} from={m.from === 'ai' ? 'them' : m.from} text={m.text} isAI={isAI && m.from !== 'me'} />
        ))}
      </div>

      <div className="p-3 border-t border-white/20">
        <div className={`flex items-center gap-2 px-3 py-2 rounded-2xl ${isAI ? 'bg-white/10' : 'bg-white'} backdrop-blur-md` }>
          <button className={`${isAI ? 'text-white/80' : 'text-indigo-500'} p-2`}>
            <Smile size={18} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            className={`w-full bg-transparent outline-none text-sm ${isAI ? 'placeholder-white/60' : 'placeholder-indigo-400'}`}
            placeholder={isAI ? 'Ask Nova anything…' : 'Type a message'}
          />
          <button onClick={send} className="px-3 py-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#2D9CDB] text-white shadow-lg hover:shadow-xl transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatArea;
