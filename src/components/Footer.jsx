import { Mail, Linkedin, Github } from 'lucide-react';
import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/70 py-12 mt-10">
      <div className="container-page space-y-8">
        {/* Main footer content */}
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <p className="font-mono text-xs text-bone-400">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="font-mono text-xs text-bone-400">
            Built with React · Tailwind · Framer Motion
          </p>
        </div>

        {/* Contact section */}
        <div className="border-t border-ink-700/50 pt-8">
          <p className="text-center text-xs uppercase tracking-widest text-bone-400 mb-4">
            Let's connect
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-xs text-bone-300 transition hover:text-accent-400"
            >
              <Mail size={16} />
              <span className="font-mono">{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-bone-300 transition hover:text-accent-400"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-bone-300 transition hover:text-accent-400"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
