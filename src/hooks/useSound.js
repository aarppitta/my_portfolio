import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'portfolio:sound-enabled';

let audioCtx = null;
function getCtx() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return null;
    audioCtx = new Ctx();
  }
  if (audioCtx.state === 'suspended') audioCtx.resume();
  return audioCtx;
}

export function playClick() {
  const ctx = getCtx();
  if (!ctx) return;
  const now = ctx.currentTime;

  // Soft pop: low warm sine with a quick downward sweep, gentle low-pass body
  const osc = ctx.createOscillator();
  const body = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(260, now);
  osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

  body.type = 'sine';
  body.frequency.setValueAtTime(130, now);
  body.frequency.exponentialRampToValueAtTime(70, now + 0.18);

  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(900, now);
  filter.Q.value = 0.7;

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.12, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

  osc.connect(filter);
  body.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  body.start(now);
  osc.stop(now + 0.25);
  body.stop(now + 0.25);
}

export function useSoundEnabled() {
  const [enabled, setEnabled] = useState(() => {
    if (typeof window === 'undefined') return true;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === null ? true : stored === '1';
  });

  const toggle = useCallback(() => {
    setEnabled((prev) => {
      const next = !prev;
      window.localStorage.setItem(STORAGE_KEY, next ? '1' : '0');
      if (next) playClick();
      return next;
    });
  }, []);

  return [enabled, toggle];
}

export function useGlobalClickSound(enabled) {
  useEffect(() => {
    if (!enabled) return;
    let lastPlayed = 0;
    const onClick = (e) => {
      if (e.target?.closest?.('[data-no-sound="true"]')) return;
      const now = performance.now();
      if (now - lastPlayed < 60) return;
      lastPlayed = now;
      playClick();
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [enabled]);
}
