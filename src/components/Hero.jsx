import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { useTypewriter } from '../hooks/useTypewriter';
import HeroArt from './HeroArt';

export default function Hero() {
  const typed = useTypewriter(profile.typewriterRoles);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-24">
      {/* Faint grid + noise overlays */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint bg-[size:48px_48px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.5] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="container-page relative z-10 grid min-h-[calc(100vh-6rem)] grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12 pb-20">
        {/* LEFT — Text */}
        <div className="lg:col-span-7">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pill-accent group hover:border-accent-500"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent-500 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-accent-500" />
            </span>
            Available for international roles
            <ArrowRight size={12} className="transition group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="h-display mt-6 text-[clamp(2.8rem,7vw,5.4rem)] leading-[0.98]"
          >
            Arpita <br className="hidden sm:block" />
            <span className="relative inline-block">
              Chaudhari
              <span className="absolute -right-3 top-3 h-2 w-2 rounded-full bg-accent-500" />
            </span>
            <span className="text-bone-400">.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-5 font-mono text-base sm:text-lg text-bone-200 min-h-[1.5em]"
          >
            <span className="text-accent-400">&gt;</span> {typed}
            <span className="typewriter-caret" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-8 max-w-xl text-base sm:text-lg leading-relaxed text-bone-300"
          >
            I design and build scalable systems, 
            from secure JWT-based REST APIs and real-time Socket.IO applications to industrial OPC-UA data pipelines, 
            ensuring both robust backend performance and intuitive frontend experiences.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a href="#projects" className="btn-primary">
              View my work <ArrowRight size={16} />
            </a>
            <a href={profile.resumeUrl} className="btn-ghost" download>
              <Download size={16} /> Download résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-10 flex items-center gap-5 text-bone-300"
          >
            <a href={profile.github} aria-label="GitHub" className="transition hover:text-accent-400" target="_blank" rel="noreferrer">
              <Github size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition hover:text-accent-400" target="_blank" rel="noreferrer">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="transition hover:text-accent-400">
              <Mail size={20} />
            </a>
            <span className="ml-2 font-mono text-xs uppercase tracking-[0.2em] text-bone-400">
              {profile.location}
            </span>
          </motion.div>
        </div>

        {/* RIGHT — Art */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden h-[520px] w-full lg:col-span-5 lg:block"
        >
          <HeroArt />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone-400 animate-pulse-soft">
        scroll
      </div>
    </section>
  );
}
