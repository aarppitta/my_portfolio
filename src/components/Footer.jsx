import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-ink-700/70 py-10 mt-10">
      <div className="container-page flex flex-col items-center justify-between gap-4 text-xs text-bone-400 sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono">
          Built with React · Tailwind · Framer Motion · Open to opportunities
        </p>
      </div>
    </footer>
  );
}
