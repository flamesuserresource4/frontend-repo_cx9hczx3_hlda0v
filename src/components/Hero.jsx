import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <div className="relative h-64 sm:h-80 md:h-[28rem] w-full rounded-2xl overflow-hidden">
      <Spline
        scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#6C63FF]/40 via-transparent to-[#2D9CDB]/40" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-[1px]" />
      <div className="absolute inset-0 flex items-center justify-center text-center p-6">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-lg">
            ChatNova
          </h1>
          <p className="mt-3 md:mt-4 text-white/90 text-sm sm:text-base md:text-lg">
            A futuristic, minimal chat experience with a built-in AI companion. Glide between human chats and Nova AI in a single flow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
