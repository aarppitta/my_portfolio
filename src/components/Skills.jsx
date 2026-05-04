import { skillGroups } from '../data/skills';
import { SectionHeader } from './SectionHeader';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-page">
        <SectionHeader
          kicker="04 / Toolkit"
          title={
            <>
              The <span className="text-accent-500">stack</span> I reach for.
            </>
          }
          lead="Backend-first, frontend-fluent. Comfortable across the full pipeline — from database schema to React component to AWS deploy."
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <StaggerItem key={group.label}>
              <div className="card card-hover h-full">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg text-bone-50">{group.label}</h3>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone-400">
                    {String(group.items.length).padStart(2, '0')}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-ink-600 bg-ink-700/40 px-3 py-1.5 text-xs font-medium text-bone-100 transition hover:border-accent-500/50 hover:text-accent-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
