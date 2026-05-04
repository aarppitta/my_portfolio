import { GraduationCap, MapPin, Star } from 'lucide-react';
import { education } from '../data/skills';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container-page">
        <SectionHeader
          kicker="05 / Education"
          title={
            <>
              Trained in <span className="text-accent-500">London</span>, grounded in India.
            </>
          }
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.08}>
              <div
                className={`card card-hover h-full relative overflow-hidden ${
                  e.highlight ? 'border-accent-500/40 bg-gradient-to-br from-ink-800/80 to-accent-500/[0.04]' : ''
                }`}
              >
                {e.highlight && (
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent-500/15 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent-400">
                    <Star size={10} fill="currentColor" /> UK
                  </span>
                )}
                <GraduationCap size={22} className={e.highlight ? 'text-accent-500' : 'text-bone-300'} />
                <h3 className="mt-5 font-display text-lg text-bone-50 leading-snug">{e.degree}</h3>
                <p className="mt-2 text-sm text-bone-200">{e.school}</p>
                <p className="mt-1 inline-flex items-center gap-1 text-xs text-bone-400">
                  <MapPin size={11} /> {e.location}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
