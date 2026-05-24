import { ArrowUpRight, Github, Sparkles } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';

function FeaturedCard({ p }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/60 p-8 transition hover:border-accent-500/50 hover:shadow-glow">
      <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl opacity-60 transition group-hover:opacity-100" />
      <div className="relative">
        <div className="flex items-center justify-between">
          <span className="pill-accent">
            <Sparkles size={11} /> {p.tag}
          </span>
          <div className="flex gap-2">
            {p.github && (
              <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"
                 className="grid h-9 w-9 place-items-center rounded-full border border-ink-600 text-bone-200 transition hover:border-accent-500/60 hover:text-accent-400">
                <Github size={15} />
              </a>
            )}
            {p.demo && (
              <a href={p.demo} target="_blank" rel="noreferrer" aria-label="Live demo"
                 className="grid h-9 w-9 place-items-center rounded-full border border-ink-600 text-bone-200 transition hover:border-accent-500/60 hover:text-accent-400">
                <ArrowUpRight size={15} />
              </a>
            )}
          </div>
        </div>

        <h3 className="mt-6 font-display text-2xl sm:text-3xl text-bone-50 leading-tight">
          {p.name}
        </h3>
        <p className="mt-3 text-sm sm:text-base leading-relaxed text-bone-300 max-w-prose">
          {p.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="tag">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CompactCard({ p }) {
  return (
    <div className="card card-hover h-full flex flex-col">
      <div className="flex items-center justify-between">
        <span className="pill">{p.tag}</span>
        {p.github && (
          <a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub repository"
             className="text-bone-300 transition hover:text-accent-400">
            <Github size={15} />
          </a>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl text-bone-50">{p.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-bone-300 flex-1">{p.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {p.stack.map((s) => (
          <span key={s} className="tag">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container-page">
        <SectionHeader
          kicker="03 / Selected Work"
          title={
            <>
              Projects, <span className="text-accent-500">shipped.</span>
            </>
          }
          lead="A mix of production systems, full-stack apps, and hardware-integrated backends. Each one solves a real problem."
        />

        <StaggerGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <StaggerItem key={p.name}>
              <FeaturedCard p={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>

        <Reveal delay={0.1}>
          <div className="mt-20 mb-8 flex items-center gap-4">
            <span className="eyebrow">More</span>
            <span className="h-px flex-1 bg-ink-700" />
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {rest.map((p) => (
            <StaggerItem key={p.name}>
              <CompactCard p={p} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
