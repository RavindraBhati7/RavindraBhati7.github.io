"use client";
import Image from 'next/image';

export default function Avatar() {
  return (
    <div className="relative w-72 h-72 rounded-full bg-gradient-to-br from-slate-800 to-slate-700 p-1 glass">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-emerald-400/10 to-amber-400/10 blur-[20px] -z-10"></div>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center shadow-xl">
        <span className="text-5xl font-serif text-amber-50">RB</span>
      </div>
    </div>
  );
}
