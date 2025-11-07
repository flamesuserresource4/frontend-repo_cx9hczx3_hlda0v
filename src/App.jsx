import React, { useState } from 'react';
import Hero from './components/Hero';
import Taskbar from './components/Taskbar';
import Sidebar from './components/Sidebar';
import ChatArea from './components/ChatArea';
import AuthFlow from './components/AuthFlow';

function App() {
  const [authed, setAuthed] = useState(false);
  const [mode, setMode] = useState('chat'); // 'chat' | 'ai'
  const [chatOpenMobile, setChatOpenMobile] = useState(false);

  const isAI = mode === 'ai';

  return (
    <div className={`min-h-screen w-full transition-colors duration-700 ${
      isAI
        ? 'bg-gradient-to-br from-[#6C63FF] via-[#5B6FFF] to-[#2D9CDB]'
        : 'bg-gradient-to-br from-[#EDE9FE] via-[#F0F7FF] to-[#E6F4FF]'
    }`}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-10">
        <Hero />

        {!authed ? (
          <div className="mt-8">
            <AuthFlow onDone={() => setAuthed(true)} />
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-4">
            <div className="flex gap-4">
              <Taskbar mode={mode} onModeChange={(m) => { setMode(m); setChatOpenMobile(false); }} onOpenProfile={() => {}} />
              <Sidebar
                mode={mode}
                onOpenChat={() => setChatOpenMobile(true)}
                onOpenAI={() => { setMode('ai'); setChatOpenMobile(true); }}
              />
            </div>
            <ChatArea
              mode={mode}
              open={chatOpenMobile}
              onBack={() => setChatOpenMobile(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
