import { useCallback, useEffect, useRef, useState } from "react";

export type TrackName =
  | "Tanpura Drone"
  | "Harmonium"
  | "Flute"
  | "Temple Bells"
  | "River & Nature";

export const TRACK_NAMES: TrackName[] = [
  "Tanpura Drone",
  "Harmonium",
  "Flute",
  "Temple Bells",
  "River & Nature",
];

export interface AmbientAudioState {
  currentTrack: TrackName;
  isMuted: boolean;
  isPlaying: boolean;
}

export interface AmbientAudioControls {
  start: () => void;
  stop: () => void;
  selectTrack: (track: TrackName) => void;
  toggleMute: () => void;
}

type StopFn = () => void;

function createAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  try {
    return new (window.AudioContext || (window as any).webkitAudioContext)();
  } catch {
    return null;
  }
}

// Tanpura Drone: sustained low drone with harmonic overtones
function playTanpuraDrone(ctx: AudioContext, masterGain: GainNode): StopFn {
  const nodes: AudioNode[] = [];
  const freqs = [130.81, 261.63, 392.0, 523.25]; // C2, C3, G3, C4
  const gains = [0.18, 0.12, 0.08, 0.06];

  freqs.forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(gains[i], ctx.currentTime);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start();
    nodes.push(osc, gain);
  });

  // Add subtle vibrato
  const lfo = ctx.createOscillator();
  const lfoGain = ctx.createGain();
  lfo.frequency.setValueAtTime(0.5, ctx.currentTime);
  lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
  lfo.connect(lfoGain);
  lfo.start();
  nodes.push(lfo, lfoGain);

  return () => {
    // biome-ignore lint/complexity/noForEach: audio node cleanup
    nodes.forEach((n) => {
      try {
        (n as OscillatorNode).stop?.();
      } catch {}
      try {
        n.disconnect();
      } catch {}
    });
  };
}

// Harmonium: rhythmic chord pulses
function playHarmonium(ctx: AudioContext, masterGain: GainNode): StopFn {
  let stopped = false;
  const activeNodes: AudioNode[] = [];

  const chordFreqs = [
    [261.63, 329.63, 392.0], // C major
    [293.66, 369.99, 440.0], // D minor
    [261.63, 329.63, 392.0], // C major
    [246.94, 311.13, 392.0], // B minor
  ];

  let chordIndex = 0;

  const playChord = () => {
    if (stopped) return;
    const freqs = chordFreqs[chordIndex % chordFreqs.length];
    chordIndex++;

    // biome-ignore lint/complexity/noForEach: audio node setup
    freqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      // Apply filter for harmonium-like tone
      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(800, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.05);
      gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.8);
      gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(masterGain);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 1.6);
      activeNodes.push(osc, gain, filter);
    });

    if (!stopped) {
      setTimeout(playChord, 2000);
    }
  };

  playChord();

  return () => {
    stopped = true;
    // biome-ignore lint/complexity/noForEach: audio node cleanup
    activeNodes.forEach((n) => {
      try {
        (n as OscillatorNode).stop?.();
      } catch {}
      try {
        n.disconnect();
      } catch {}
    });
  };
}

// Flute: filtered sine wave with vibrato
function playFlute(ctx: AudioContext, masterGain: GainNode): StopFn {
  let stopped = false;
  const activeNodes: AudioNode[] = [];

  const notes = [
    523.25, 587.33, 659.25, 698.46, 783.99, 659.25, 587.33, 523.25,
  ];
  let noteIndex = 0;

  const playNote = () => {
    if (stopped) return;
    const freq = notes[noteIndex % notes.length];
    noteIndex++;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    // Vibrato
    lfo.frequency.setValueAtTime(5, ctx.currentTime);
    lfoGain.gain.setValueAtTime(4, ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(freq, ctx.currentTime);
    filter.Q.setValueAtTime(2, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.1);
    gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.6);
    gain.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(masterGain);
    lfo.start(ctx.currentTime);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 1.3);
    lfo.stop(ctx.currentTime + 1.3);

    activeNodes.push(osc, gain, filter, lfo, lfoGain);

    if (!stopped) {
      setTimeout(playNote, 1400);
    }
  };

  playNote();

  return () => {
    stopped = true;
    // biome-ignore lint/complexity/noForEach: audio node cleanup
    activeNodes.forEach((n) => {
      try {
        (n as OscillatorNode).stop?.();
      } catch {}
      try {
        n.disconnect();
      } catch {}
    });
  };
}

// Temple Bells: periodic sine bursts with decay
function playTempleBells(ctx: AudioContext, masterGain: GainNode): StopFn {
  let stopped = false;
  const activeNodes: AudioNode[] = [];

  const bellFreqs = [880, 1108.73, 1318.51, 1760];

  const playBell = () => {
    if (stopped) return;
    const freq = bellFreqs[Math.floor(Math.random() * bellFreqs.length)];

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);

    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 2.6);

    activeNodes.push(osc, gain);

    const nextDelay = 2000 + Math.random() * 3000;
    if (!stopped) {
      setTimeout(playBell, nextDelay);
    }
  };

  playBell();

  return () => {
    stopped = true;
    // biome-ignore lint/complexity/noForEach: audio node cleanup
    activeNodes.forEach((n) => {
      try {
        (n as OscillatorNode).stop?.();
      } catch {}
      try {
        n.disconnect();
      } catch {}
    });
  };
}

// River & Nature: band-limited noise with low-pass filter
function playRiverNature(ctx: AudioContext, masterGain: GainNode): StopFn {
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  // Generate pink-ish noise
  // biome-ignore lint/style/useSingleVarDeclarator: pink noise coefficients grouped intentionally
  let b0 = 0,
    b1 = 0,
    b2 = 0,
    b3 = 0,
    b4 = 0,
    b5 = 0,
    b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.969 * b2 + white * 0.153852;
    b3 = 0.8665 * b3 + white * 0.3104856;
    b4 = 0.55 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.016898;
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
    b6 = white * 0.115926;
  }

  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(600, ctx.currentTime);
  filter.Q.setValueAtTime(0.5, ctx.currentTime);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.3, ctx.currentTime);

  source.connect(filter);
  filter.connect(gain);
  gain.connect(masterGain);
  source.start();

  return () => {
    try {
      source.stop();
    } catch {}
    try {
      source.disconnect();
    } catch {}
    try {
      filter.disconnect();
    } catch {}
    try {
      gain.disconnect();
    } catch {}
  };
}

export function useAmbientAudio(): AmbientAudioState & AmbientAudioControls {
  const [currentTrack, setCurrentTrack] = useState<TrackName>("Tanpura Drone");
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const ctxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  const stopCurrentRef = useRef<StopFn | null>(null);

  const ensureContext = useCallback(() => {
    if (!ctxRef.current) {
      ctxRef.current = createAudioContext();
    }
    if (ctxRef.current && !masterGainRef.current) {
      masterGainRef.current = ctxRef.current.createGain();
      masterGainRef.current.gain.setValueAtTime(
        0.7,
        ctxRef.current.currentTime,
      );
      masterGainRef.current.connect(ctxRef.current.destination);
    }
    return ctxRef.current;
  }, []);

  const stopTrack = useCallback(() => {
    if (stopCurrentRef.current) {
      stopCurrentRef.current();
      stopCurrentRef.current = null;
    }
  }, []);

  const startTrack = useCallback(
    (track: TrackName) => {
      const ctx = ensureContext();
      if (!ctx || !masterGainRef.current) return;

      // Resume context if suspended (browser autoplay policy)
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      stopTrack();

      let stopFn: StopFn;
      switch (track) {
        case "Tanpura Drone":
          stopFn = playTanpuraDrone(ctx, masterGainRef.current);
          break;
        case "Harmonium":
          stopFn = playHarmonium(ctx, masterGainRef.current);
          break;
        case "Flute":
          stopFn = playFlute(ctx, masterGainRef.current);
          break;
        case "Temple Bells":
          stopFn = playTempleBells(ctx, masterGainRef.current);
          break;
        case "River & Nature":
          stopFn = playRiverNature(ctx, masterGainRef.current);
          break;
        default:
          stopFn = playTanpuraDrone(ctx, masterGainRef.current);
      }

      stopCurrentRef.current = stopFn;
    },
    [ensureContext, stopTrack],
  );

  const start = useCallback(() => {
    setIsPlaying(true);
    startTrack(currentTrack);
    if (masterGainRef.current && ctxRef.current) {
      masterGainRef.current.gain.setValueAtTime(
        isMuted ? 0 : 0.7,
        ctxRef.current.currentTime,
      );
    }
  }, [currentTrack, isMuted, startTrack]);

  const stop = useCallback(() => {
    stopTrack();
    setIsPlaying(false);
  }, [stopTrack]);

  const selectTrack = useCallback(
    (track: TrackName) => {
      setCurrentTrack(track);
      if (isPlaying) {
        startTrack(track);
      }
    },
    [isPlaying, startTrack],
  );

  const toggleMute = useCallback(() => {
    setIsMuted((prev) => {
      const newMuted = !prev;
      if (masterGainRef.current && ctxRef.current) {
        masterGainRef.current.gain.setValueAtTime(
          newMuted ? 0 : 0.7,
          ctxRef.current.currentTime,
        );
      }
      return newMuted;
    });
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopTrack();
      if (ctxRef.current) {
        try {
          ctxRef.current.close();
        } catch {}
        ctxRef.current = null;
      }
    };
  }, [stopTrack]);

  return {
    currentTrack,
    isMuted,
    isPlaying,
    start,
    stop,
    selectTrack,
    toggleMute,
  };
}
