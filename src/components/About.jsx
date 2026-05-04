import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-page grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <SectionHeader
            kicker="01 / About"
            title={
              <>
                A Software System Engineer who <br />
                ships <span className="text-accent-500">production</span> systems.
              </>
            }
          />
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-bone-300">
              {profile.about}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {['Production-grade', 'Performance-minded', 'Pragmatic', 'Clean architecture'].map((t) => (
                <span key={t} className="pill">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <StaggerGroup className="grid grid-cols-2 gap-4">
            {profile.stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="card card-hover h-full">
                  <div className="font-display text-4xl sm:text-5xl text-bone-50 leading-none">
                    {s.value}
                  </div>
                  <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-300">
                    {s.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal delay={0.3}>
            <div className="mt-4 card card-hover">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Open to</span>
                <span className="h-1 w-1 rounded-full bg-accent-500" />
              </div>
              <p className="mt-3 font-mono text-sm text-bone-100">{profile.rolesAvailableFor}</p>
              <p className="mt-1 text-xs text-bone-400">Remote · Contract · Relocation</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
