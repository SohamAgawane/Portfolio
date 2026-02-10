import { useRef, useEffect, useState } from "react";

export default function DebuggerFooter({
  bufferMessage,
  isPlaying,
  setIsPlaying,
}) {
  const [status] = useState("200 OK");
  const [progress, setProgress] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTimeUpdate = () => {
      if (!audio.duration) return;
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);

    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
    };
  }, [setIsPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
        // setIsPlaying(true) handled by "play" event
      } else {
        audio.pause();
        // setIsPlaying(false) handled by "pause" event
      }
    } catch (e) {
      console.error("Playback failed:", e);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      <div className="font-mono text-[9px] bg-[var(--surface)] border border-[var(--border)] px-3 py-2 flex items-center gap-3 shadow-sm">

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[var(--lime)] pulse-lime" />
          <span className="text-[var(--text-secondary)]">
            STATUS: <span className="text-[var(--text)]">{status}</span>
          </span>
        </div>

        <div className="w-px h-3 bg-[var(--border)]" />

        {/* PLAY / PAUSE */}
        <button
          onClick={togglePlay}
          className="
            w-6 h-6
            flex items-center justify-center
            text-[14px]
            text-[var(--text)]
            transition active:scale-95
          "
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        {/* PROGRESS LINE */}
        <div className="relative w-14 h-[2px] bg-[var(--border)] overflow-hidden">
          <div
            className="absolute left-0 top-0 h-full bg-black dark:bg-white transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {bufferMessage && (
        <div className="font-mono text-[9px] bg-[var(--lime)] text-black px-3 py-2 rounded-md">
          &gt; {bufferMessage}
        </div>
      )}

      {/* AUDIO */}
      <audio ref={audioRef} src="/audio.mp3" preload="metadata" />
    </div>
  );
}