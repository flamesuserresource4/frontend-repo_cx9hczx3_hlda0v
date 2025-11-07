import React, { useState } from 'react';

const GlassInput = ({ label, type = 'text', value, onChange, placeholder }) => (
  <div className="space-y-1">
    <label className="text-sm text-white/90">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none backdrop-blur-md border border-white/20 focus:border-white/40 transition-all"
    />
  </div>
);

const AuthFlow = ({ onDone }) => {
  const [page, setPage] = useState('register');

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    fullName: '',
    bio: '',
  });

  const [avatar, setAvatar] = useState('https://i.pravatar.cc/160?img=64');

  const goLogin = () => setPage('login');
  const goRegister = () => setPage('register');
  const goProfile = () => setPage('profile');

  const saveAndContinue = () => onDone?.();

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6C63FF]/40 to-[#2D9CDB]/40 blur-2xl" />
      <div className="relative p-6 sm:p-8 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 text-white shadow-2xl">
        {page === 'register' && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Create your account</h2>
            <GlassInput label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
            <GlassInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@example.com" />
            <GlassInput label="Password" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} placeholder="••••••••" />
            <button onClick={goLogin} className="w-full px-4 py-2 rounded-xl bg-white text-indigo-600 font-medium shadow-lg hover:shadow-xl transition">Register</button>
            <p className="text-sm text-white/80 text-center">Already have an account? <button onClick={goLogin} className="underline underline-offset-4">Login here</button></p>
          </div>
        )}

        {page === 'login' && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <GlassInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@example.com" />
            <GlassInput label="Password" type="password" value={form.password} onChange={(v) => setForm({ ...form, password: v })} placeholder="••••••••" />
            <button onClick={goProfile} className="w-full px-4 py-2 rounded-xl bg-white text-indigo-600 font-medium shadow-lg hover:shadow-xl transition">Login</button>
            <p className="text-sm text-white/80 text-center">Don’t have an account? <button onClick={goRegister} className="underline underline-offset-4">Register here</button></p>
          </div>
        )}

        {page === 'profile' && (
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">Profile setup</h2>
            <div className="flex items-center gap-4">
              <img src={avatar} alt="avatar" className="h-16 w-16 rounded-xl object-cover border border-white/30" />
              <div className="flex-1">
                <GlassInput label="Full Name" value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} placeholder="Your full name" />
              </div>
            </div>
            <div>
              <label className="text-sm text-white/90">Short bio</label>
              <textarea
                rows={3}
                value={form.bio}
                onChange={(e) => setForm({ ...form, bio: e.target.value })}
                placeholder="Tell us a little about yourself"
                className="mt-1 w-full px-4 py-2 rounded-xl bg-white/10 text-white placeholder-white/60 outline-none backdrop-blur-md border border-white/20 focus:border-white/40 transition-all"
              />
            </div>
            <button onClick={saveAndContinue} className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-[#6C63FF] to-[#2D9CDB] text-white font-medium shadow-lg hover:shadow-xl transition">Save & Continue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthFlow;
