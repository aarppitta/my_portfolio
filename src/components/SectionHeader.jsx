import { Reveal } from './Reveal';

export function SectionHeader({ kicker, title, lead, align = 'left' }) {
  const alignCls = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-4 ${alignCls}`}>
      <Reveal>
        <span className="eyebrow">{kicker}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="h-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-bone-300 text-base sm:text-lg leading-relaxed">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
