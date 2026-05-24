import { useRef } from 'react';
import { Cloud } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { SectionHeader } from './SectionHeader';
import { Reveal, StaggerGroup, StaggerItem } from './Reveal';

const iconSlug = {
  'React.js': 'react',
  'Angular': 'angular',
  'TypeScript': 'typescript',
  'JavaScript (ES6+)': 'javascript',
  'HTML5': 'html5',
  'CSS3': 'css',
  'Node.js': 'nodedotjs',
  'Express.js': 'express',
  'Python': 'python',
  'Django': 'django',
  'MongoDB': 'mongodb',
  'MySQL': 'mysql',
  'PostgreSQL': 'postgresql',
  'JWT': 'jsonwebtokens',
  'Socket.IO': 'socketdotio',
  'Docker': 'docker',
  'Vercel': 'vercel',
  'Git': 'git',
  'GitHub': 'github',
  'Postman': 'postman',
  'Figma': 'figma',
};

function TechIcon({ name }) {
  if (name === 'AWS (EC2)') {
    return <Cloud size={16} strokeWidth={2} className="shrink-0 text-accent-400" />;
  }
  const slug = iconSlug[name];
  if (!slug) {
    return <span className="h-4 w-4 rounded-sm border border-accent-500/50 bg-accent-500/20" />;
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/818CF8`}
      alt=""
      aria-hidden="true"
      loading="lazy"
      className="h-4 w-4 shrink-0"
    />
  );
}

function TechPill({ name }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const px = x / r.width;
    const py = y / r.height;
    const rx = (0.5 - py) * 14;
    const ry = (px - 0.5) * 20;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--mx', `${x}px`);
    el.style.setProperty('--my', `${y}px`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  return (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tech-pill-3d"
    >
      <span className="tech-pill-3d-inner">
        <span className="tech-pill-3d-sheen" aria-hidden="true" />
        <span className="tech-pill-3d-glow" aria-hidden="true" />
        <span className="tech-pill-icon">
          <TechIcon name={name} />
        </span>
        <span className="tech-pill-3d-label">{name}</span>
      </span>
    </span>
  );
}

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
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <TechPill key={item} name={item} />
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
