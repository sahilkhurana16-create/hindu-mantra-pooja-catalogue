import {
  Music,
  Pause,
  Play,
  Square,
  User,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useCallback } from "react";
import {
  type TrackName,
  useAmbientAudioContext,
} from "../contexts/AmbientAudioContext";
import { TRACK_NAMES } from "../hooks/useAmbientAudio";
import { useTTS } from "../hooks/useTTS";

interface AudioPlayerProps {
  text: string;
}

export function AudioPlayer({ text }: AudioPlayerProps) {
  const tts = useTTS();
  const ambient = useAmbientAudioContext();

  const handlePlay = useCallback(() => {
    if (tts.isPaused) {
      tts.resume();
    } else {
      tts.play(text);
    }
    if (!ambient.isPlaying) {
      ambient.start();
    }
  }, [tts, text, ambient]);

  const handlePause = useCallback(() => {
    tts.pause();
  }, [tts]);

  const handleStop = useCallback(() => {
    tts.stop();
    ambient.stop();
  }, [tts, ambient]);

  const handleNextTrack = useCallback(() => {
    const currentIndex = TRACK_NAMES.indexOf(ambient.currentTrack);
    const nextTrack: TrackName =
      TRACK_NAMES[(currentIndex + 1) % TRACK_NAMES.length];
    ambient.selectTrack(nextTrack);
  }, [ambient]);

  const isActive = tts.isPlaying || tts.isPaused;

  return (
    <section className="mb-5" data-ocid="audio.panel" aria-label="Audio Player">
      {/* Section label */}
      <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3 flex items-center gap-2">
        <Music size={12} className="text-gold" />
        Audio Recitation
      </h3>

      <div
        className={`rounded-xl border p-4 transition-all duration-300 ${
          isActive
            ? "bg-deep-red/10 border-gold/50 shadow-gold-sm"
            : "bg-card border-gold/20"
        }`}
        style={
          isActive
            ? {
                background: "oklch(0.97 0.018 85)",
                borderColor: "oklch(0.72 0.12 75 / 0.5)",
              }
            : {}
        }
      >
        {/* Playback Controls Row */}
        <div className="flex items-center gap-3 mb-3">
          {/* Play / Pause */}
          {!tts.isPlaying ? (
            <button
              type="button"
              data-ocid="audio.primary_button"
              onClick={handlePlay}
              className="btn-ornate flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all active:scale-95"
              aria-label={
                tts.isPaused ? "Resume recitation" : "Play recitation"
              }
            >
              <Play size={15} className="flex-shrink-0" />
              <span>{tts.isPaused ? "Resume" : "Play"}</span>
            </button>
          ) : (
            <button
              type="button"
              data-ocid="audio.secondary_button"
              onClick={handlePause}
              className="btn-ornate flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all active:scale-95"
              aria-label="Pause recitation"
            >
              <Pause size={15} className="flex-shrink-0" />
              <span>Pause</span>
            </button>
          )}

          {/* Stop */}
          <button
            type="button"
            data-ocid="audio.cancel_button"
            onClick={handleStop}
            disabled={!isActive && !ambient.isPlaying}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium border border-gold/30 text-muted-foreground hover:text-foreground hover:border-gold/50 transition-all disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            aria-label="Stop and reset audio"
          >
            <Square size={13} className="flex-shrink-0" />
            <span className="hidden sm:inline">Stop</span>
          </button>

          {/* Spacer */}
          <div className="flex-1" />

          {/* Voice Gender Toggle */}
          <button
            type="button"
            data-ocid="audio.toggle"
            onClick={tts.toggleGender}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium border border-saffron/30 text-saffron hover:border-saffron/60 hover:bg-saffron/5 transition-all"
            aria-label={`Switch to ${tts.voiceGender === "female" ? "male" : "female"} voice`}
            title={`Voice: ${tts.voiceGender === "female" ? "Female" : "Male"} — click to switch`}
          >
            <User size={12} />
            <span className="capitalize">{tts.voiceGender}</span>
          </button>
        </div>

        {/* Playing indicator */}
        {tts.isPlaying && (
          <div
            className="flex items-center gap-2 mb-3"
            data-ocid="audio.loading_state"
          >
            <div className="flex gap-0.5 items-end h-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-gold"
                  style={{
                    height: `${8 + (i % 3) * 4}px`,
                    animation: "tts-wave 0.8s ease-in-out infinite",
                    animationDelay: `${i * 0.12}s`,
                  }}
                />
              ))}
            </div>
            <span className="text-xs text-gold font-medium">Reciting…</span>
          </div>
        )}

        {tts.isPaused && (
          <div className="flex items-center gap-2 mb-3">
            <Pause size={12} className="text-saffron" />
            <span className="text-xs text-saffron font-medium">Paused</span>
          </div>
        )}

        {/* Ambient Track Row */}
        <div className="flex items-center gap-2 pt-2.5 border-t border-gold/15">
          <Music size={12} className="text-muted-foreground flex-shrink-0" />
          <span className="text-xs text-muted-foreground flex-shrink-0">
            Backing:
          </span>

          <button
            type="button"
            data-ocid="audio.select"
            onClick={handleNextTrack}
            className="flex-1 text-left rounded-md px-2.5 py-1.5 text-xs font-medium border border-gold/25 bg-gold/5 text-foreground hover:border-gold/45 hover:bg-gold/10 transition-all truncate"
            aria-label={`Current backing track: ${ambient.currentTrack}. Click to switch to next track.`}
            title="Click to cycle through backing tracks"
          >
            {ambient.currentTrack}
          </button>

          {/* Mute/Unmute */}
          <button
            type="button"
            data-ocid="audio.switch"
            onClick={ambient.toggleMute}
            className={`rounded-md p-1.5 border transition-all ${
              ambient.isMuted
                ? "border-muted-foreground/30 text-muted-foreground"
                : "border-saffron/40 text-saffron hover:bg-saffron/5"
            }`}
            aria-label={
              ambient.isMuted ? "Unmute ambient audio" : "Mute ambient audio"
            }
            title={ambient.isMuted ? "Unmute" : "Mute ambient track"}
          >
            {ambient.isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes tts-wave {
          0%, 100% { transform: scaleY(0.6); opacity: 0.7; }
          50% { transform: scaleY(1.2); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
