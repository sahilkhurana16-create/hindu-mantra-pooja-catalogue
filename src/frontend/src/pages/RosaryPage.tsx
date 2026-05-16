import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Circle, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

const TOTAL_BEADS = 108;

function MalaVisualization({ beadCount }: { beadCount: number }) {
  const svgSize = 300;
  const cx = svgSize / 2;
  const cy = svgSize / 2;
  const radius = 118;
  const beadRadius = 7;
  const meruRadius = 11;

  const beads = Array.from({ length: TOTAL_BEADS }, (_, i) => {
    // Start from top (-90 deg) and go clockwise
    const angle = (i / TOTAL_BEADS) * 2 * Math.PI - Math.PI / 2;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    const isCounted = i < beadCount;
    const isCurrent = i === beadCount - 1 && beadCount > 0;
    const isMeru = i === 0; // Meru bead at top

    return { x, y, isCounted, isCurrent, isMeru };
  });

  return (
    <svg
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      className="w-full max-w-[300px] mx-auto drop-shadow-lg"
      role="img"
      aria-label="Mala bead visualization"
    >
      <title>Mala bead visualization</title>
      {/* String / cord */}
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill="none"
        stroke="oklch(0.65 0.08 55)"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.5"
      />

      {/* Beads */}
      {beads.map((bead, i) => {
        const r = bead.isMeru ? meruRadius : beadRadius;
        let fill: string;
        let stroke: string;
        let strokeWidth: number;

        if (bead.isMeru) {
          fill = "oklch(0.72 0.14 55)"; // gold for meru
          stroke = "oklch(0.55 0.12 55)";
          strokeWidth = 1.5;
        } else if (bead.isCurrent) {
          fill = "oklch(0.65 0.18 35)"; // saffron-deep for current
          stroke = "oklch(0.45 0.15 35)";
          strokeWidth = 2;
        } else if (bead.isCounted) {
          fill = "oklch(0.72 0.14 55)"; // gold for counted
          stroke = "oklch(0.55 0.12 55)";
          strokeWidth = 1;
        } else {
          fill = "oklch(0.88 0.04 80)"; // parchment for uncounted
          stroke = "oklch(0.72 0.08 55)";
          strokeWidth = 1;
        }

        return (
          // biome-ignore lint/suspicious/noArrayIndexKey: bead positions are stable by index
          <g key={i}>
            <circle
              cx={bead.x}
              cy={bead.y}
              r={r}
              fill={fill}
              stroke={stroke}
              strokeWidth={strokeWidth}
              style={{
                transition: "fill 0.3s ease, r 0.2s ease",
                filter: bead.isCurrent
                  ? "drop-shadow(0 0 4px oklch(0.65 0.18 35))"
                  : undefined,
              }}
            />
            {bead.isMeru && (
              <circle
                cx={bead.x}
                cy={bead.y}
                r={r * 0.45}
                fill="oklch(0.55 0.12 55)"
                opacity="0.6"
              />
            )}
          </g>
        );
      })}

      {/* Center Om symbol */}
      <text
        x={cx}
        y={cy + 10}
        textAnchor="middle"
        fontSize="36"
        fill="oklch(0.55 0.12 55)"
        opacity="0.35"
        fontFamily="serif"
      >
        ॐ
      </text>
    </svg>
  );
}

export function RosaryPage() {
  const [beadCount, setBeadCount] = useState(0);
  const [roundCount, setRoundCount] = useState(0);
  const [completionFlash, setCompletionFlash] = useState(false);
  const tapButtonRef = useRef<HTMLButtonElement>(null);

  const handleTap = useCallback(() => {
    setBeadCount((prev) => {
      const next = prev + 1;
      if (next >= TOTAL_BEADS) {
        setRoundCount((r) => r + 1);
        setCompletionFlash(true);
        return 0;
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (completionFlash) {
      const timer = setTimeout(() => setCompletionFlash(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [completionFlash]);

  // Keyboard / volume-button support
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      // Increment on ArrowUp, ArrowRight, or media/volume keys that may fire these
      if (
        e.key === "ArrowUp" ||
        e.key === "ArrowRight" ||
        e.key === "MediaTrackNext" ||
        e.key === "VolumeUp" ||
        e.key === "AudioVolumeUp"
      ) {
        e.preventDefault();
        handleTap();
      }
      // ArrowDown / ArrowLeft / VolumeDown — no-op (swallow to avoid scroll)
      if (
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "VolumeDown" ||
        e.key === "AudioVolumeDown"
      ) {
        e.preventDefault();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleTap]);

  const handleReset = () => {
    setBeadCount(0);
    setRoundCount(0);
    setCompletionFlash(false);
  };

  const progressPercent = (beadCount / TOTAL_BEADS) * 100;

  return (
    <div className="min-h-screen bg-parchment pb-24">
      {/* Page Header */}
      <div className="bg-gradient-to-b from-deep-red/90 to-deep-red/70 px-4 pt-6 pb-8 text-center">
        <h1 className="font-heading text-3xl font-bold text-parchment tracking-wide drop-shadow">
          Digital Rosary
        </h1>
        <p className="font-devanagari text-parchment/80 text-lg mt-1">
          जप माला
        </p>
        <p className="text-parchment/60 text-sm mt-1 font-body">
          108 beads · Japa Mala
        </p>
      </div>

      <div className="max-w-sm mx-auto px-4 -mt-4">
        {/* Stats Card */}
        <div
          className={`rounded-2xl bg-card border border-gold/30 shadow-gold p-4 mb-5 transition-all duration-300 ${
            completionFlash ? "ring-2 ring-gold scale-[1.02]" : ""
          }`}
        >
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p className="text-muted-foreground text-xs font-body uppercase tracking-widest mb-0.5">
                Bead
              </p>
              <p
                className={`font-heading text-4xl font-bold transition-all duration-300 ${
                  completionFlash ? "text-gold" : "text-deep-red"
                }`}
              >
                {beadCount}
              </p>
              <p className="text-muted-foreground text-xs font-body">
                / {TOTAL_BEADS}
              </p>
            </div>

            <div className="w-px h-12 bg-gold/30" />

            <div className="text-center">
              <p className="text-muted-foreground text-xs font-body uppercase tracking-widest mb-0.5">
                Rounds
              </p>
              <p
                className={`font-heading text-4xl font-bold transition-all duration-300 ${
                  completionFlash ? "text-gold scale-110" : "text-saffron"
                }`}
              >
                {roundCount}
              </p>
              <p className="text-muted-foreground text-xs font-body">mala</p>
            </div>

            <div className="w-px h-12 bg-gold/30" />

            <div className="text-center">
              <p className="text-muted-foreground text-xs font-body uppercase tracking-widest mb-0.5">
                Total
              </p>
              <p className="font-heading text-4xl font-bold text-foreground">
                {roundCount * TOTAL_BEADS + beadCount}
              </p>
              <p className="text-muted-foreground text-xs font-body">japa</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-3 h-1.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-saffron to-gold transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Completion Banner */}
        {completionFlash && (
          <div className="mb-4 rounded-xl bg-gold/20 border border-gold/50 px-4 py-3 text-center animate-pulse">
            <p className="font-heading text-deep-red font-semibold text-lg">
              🙏 Mala Complete!
            </p>
            <p className="text-muted-foreground text-sm font-body">
              Round {roundCount} finished · ॐ नमः शिवाय
            </p>
          </div>
        )}

        {/* Mala Visualization */}
        <div className="mb-5">
          <MalaVisualization beadCount={beadCount} />
        </div>

        {/* Tap Button */}
        <button
          type="button"
          ref={tapButtonRef}
          onClick={handleTap}
          className="w-full h-20 rounded-2xl bg-gradient-to-br from-saffron to-deep-red text-parchment font-heading text-2xl font-bold shadow-lg active:scale-95 transition-all duration-150 select-none touch-manipulation border-2 border-gold/40 hover:from-saffron/90 hover:to-deep-red/90 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          aria-label={`Count bead ${beadCount + 1} of ${TOTAL_BEADS}`}
        >
          <span className="block text-3xl mb-0.5">ॐ</span>
          <span className="block text-sm font-body font-normal tracking-widest opacity-90">
            TAP TO COUNT
          </span>
        </button>

        <p className="text-center text-muted-foreground text-xs font-body mt-2 mb-5">
          Tap the button for each mantra recitation
        </p>

        {/* Legend */}
        <div className="flex items-center justify-center gap-5 mb-5 text-xs font-body text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-parchment border border-gold/60" />
            Uncounted
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3 h-3 rounded-full bg-gold" />
            Counted
          </div>
          <div className="flex items-center gap-1.5">
            <span className="inline-block w-3.5 h-3.5 rounded-full bg-saffron shadow-sm" />
            Current
          </div>
        </div>

        {/* Reset Button */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full border-deep-red/30 text-deep-red hover:bg-deep-red/5 font-body"
            >
              <RotateCcw size={16} className="mr-2" />
              Reset Mala
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent className="bg-card border-gold/30">
            <AlertDialogHeader>
              <AlertDialogTitle className="font-heading text-deep-red">
                Reset Japa Counter?
              </AlertDialogTitle>
              <AlertDialogDescription className="font-body text-muted-foreground">
                This will reset both the bead count and round counter back to
                zero. Your current progress ({roundCount} rounds + {beadCount}{" "}
                beads) will be lost.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel className="font-body">
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleReset}
                className="bg-deep-red hover:bg-deep-red/90 text-parchment font-body"
              >
                Yes, Reset
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Devotional tips */}
        <div className="mt-6 space-y-2">
          <div className="rounded-xl bg-gold/10 border border-gold/25 px-4 py-3">
            <p className="text-center text-xs font-body text-muted-foreground leading-relaxed">
              <span className="text-gold font-semibold">Tip:</span> Hold your
              phone comfortably and tap once per mantra recitation. The meru
              bead (top) marks the start of each round.
            </p>
          </div>
          <div className="rounded-xl bg-saffron/10 border border-saffron/20 px-4 py-3">
            <p className="text-center text-xs font-body text-muted-foreground leading-relaxed">
              <span className="text-saffron font-semibold">Tip:</span> On some
              devices, you can use the volume buttons or arrow keys to count
              beads hands-free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
