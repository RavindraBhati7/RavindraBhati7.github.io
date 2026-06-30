"use client";
import { motion } from 'framer-motion';
import Avatar from './Avatar';

export default function Hero() {
  return (
    <section className="pt-20 pb-12">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase text-sm text-slate-400">Senior iOS Developer</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mt-3">Ravindra Bhati</h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            Senior iOS Software Engineer with 8+ years designing and delivering enterprise-scale
            mobile applications. Expert in Swift, SwiftUI, UIKit, MVVM, and clean architecture.
          </p>

          <div className="flex gap-3 mt-6">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="mailto:bhati.ravindra919@gmail.com" className="btn-ghost">Contact</a>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="stat-card">8+ years<span className="block text-sm text-slate-400">experience</span></div>
            <div className="stat-card">1M+<span className="block text-sm text-slate-400">users</span></div>
            <div className="stat-card">99.9%<span className="block text-sm text-slate-400">uptime</span></div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <motion.div initial={{ scale: 0.96 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
            <Avatar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
