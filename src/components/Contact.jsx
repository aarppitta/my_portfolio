import { useState } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Send } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export default function Contact() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const formspreeAvailable = profile.formspreeId && profile.formspreeId !== 'YOUR_FORM_ID';

  async function onSubmit(e) {
    e.preventDefault();
    if (!formspreeAvailable) {
      setStatus('error');
      return;
    }
    setStatus('sending');
    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch(`https://formspree.io/f/${profile.formspreeId}`, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        e.currentTarget.reset();
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-ink-800/60 p-8 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-accent-500/15 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

            <div className="relative grid gap-12 lg:grid-cols-2">
              <div>
                <SectionHeader
                  kicker="06 / Contact"
                  title={
                    <>
                      Let's <span className="text-accent-500">work</span> together.
                    </>
                  }
                />
                <p className="mt-6 max-w-md text-base leading-relaxed text-bone-300">
                  I'm open to full-time remote roles, contract work, and relocation opportunities across the UK,
                  EU, UAE, Canada, and Australia. I reply within 24 hours.
                </p>

                <div className="mt-10 space-y-3">
                  <a href={`mailto:${profile.email}`} className="group flex items-center gap-3 text-bone-200 hover:text-accent-400">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ink-600 group-hover:border-accent-500/60">
                      <Mail size={16} />
                    </span>
                    <span className="font-mono text-sm">{profile.email}</span>
                  </a>
                  <a href={profile.github} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-bone-200 hover:text-accent-400">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ink-600 group-hover:border-accent-500/60">
                      <Github size={16} />
                    </span>
                    <span className="font-mono text-sm">github</span>
                  </a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-bone-200 hover:text-accent-400">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-ink-600 group-hover:border-accent-500/60">
                      <Linkedin size={16} />
                    </span>
                    <span className="font-mono text-sm">linkedin</span>
                  </a>
                </div>
              </div>

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                <div>
                  <label htmlFor="name" className="eyebrow block mb-2">Name</label>
                  <input id="name" name="name" required
                    className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent-500/60 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="eyebrow block mb-2">Email</label>
                  <input id="email" name="email" type="email" required
                    className="w-full rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent-500/60 focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow block mb-2">Message</label>
                  <textarea id="message" name="message" required rows={5}
                    className="w-full resize-none rounded-lg border border-ink-600 bg-ink-900/60 px-4 py-3 text-sm text-bone-50 placeholder:text-bone-400 focus:border-accent-500/60 focus:outline-none" />
                </div>

                <button type="submit" disabled={status === 'sending'} className="btn-primary mt-2 disabled:opacity-50">
                  {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : (
                    <>Send message <Send size={15} /></>
                  )}
                </button>

                {status === 'sent' && (
                  <p className="text-xs text-accent-400">Thanks — I'll get back to you within 24 hours.</p>
                )}
                {status === 'error' && (
                  <p className="text-xs text-bone-400">
                    {formspreeAvailable
                      ? 'Something went wrong. Email me directly: '
                      : 'Form is not configured yet — email me directly: '}
                    <a className="link-underline text-accent-400" href={`mailto:${profile.email}`}>{profile.email}</a>
                  </p>
                )}

                <p className="mt-2 text-[11px] text-bone-400 inline-flex items-center gap-1">
                  Or reach out directly <ArrowRight size={11} />
                  <a className="link-underline text-bone-200" href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
