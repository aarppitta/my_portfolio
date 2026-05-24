import { Volume2, VolumeX } from 'lucide-react';
import { useSoundEnabled, useGlobalClickSound } from '../hooks/useSound';

export default function SoundToggle() {
  const [enabled, toggle] = useSoundEnabled();
  useGlobalClickSound(enabled);

  return (
    <button
      type="button"
      onClick={toggle}
      data-no-sound="true"
      aria-label={enabled ? 'Mute UI sounds' : 'Enable UI sounds'}
      title={enabled ? 'Sound on — click to mute' : 'Sound off — click to enable'}
      className="fixed bottom-6 right-6 z-40 grid h-11 w-11 place-items-center rounded-full border border-ink-600 bg-ink-800/80 text-bone-200 backdrop-blur transition hover:border-accent-500/60 hover:text-accent-400"
    >
      {enabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
    </button>
  );
}
