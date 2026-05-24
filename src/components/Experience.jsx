import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container-page">
        <SectionHeader
          kicker="02 / Experience"
          title={
            <>
              Built across <span className="text-accent-500">three</span> countries.
            </>
          }
          lead="From London-based MEAN stack work to Indian manufacturing-floor OPC-UA systems — a track record of shipping production software in different domains."
        />

        <div className="relative mt-20 pl-6 sm:pl-12">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px overflow-hidden bg-gradient-to-b from-accent-500/60 via-ink-600 to-transparent">
            {/* Traveling pulse */}
            <motion.span
              aria-hidden="true"
              className="absolute left-1/2 h-24 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-accent-400 to-transparent"
              style={{ filter: 'blur(0.5px)', boxShadow: '0 0 8px rgba(129,140,248,0.9)' }}
              initial={{ top: '-20%' }}
              animate={{ top: '110%' }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.8 }}
            />
          </div>

          <ol className="space-y-12">
            {experience.map((job, i) => (
              <li key={job.company + job.period} className="relative">
                <Reveal delay={i * 0.05}>
                  <span className="absolute -left-[27px] sm:-left-[51px] top-2 grid h-6 w-6 place-items-center rounded-full border border-accent-500/40 bg-ink-900">
                    <span className="h-2 w-2 rounded-full bg-accent-500" />
                  </span>

                  <div className="card card-hover">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h3 className="font-display text-2xl text-bone-50">{job.company}</h3>
                        <p className="mt-1 text-sm text-accent-400 font-medium">{job.role}</p>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="font-mono text-xs uppercase tracking-[0.18em] text-bone-300">
                          {job.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-bone-400">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>
                    </div>

                    <ul className="mt-5 space-y-2.5">
                      {job.bullets.map((b) => (
                        <li key={b} className="flex gap-3 text-sm leading-relaxed text-bone-200">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {job.stack.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
