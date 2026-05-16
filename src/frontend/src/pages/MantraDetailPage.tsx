import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { AudioPlayer } from "../components/AudioPlayer";
import { useMantra } from "../hooks/useQueries";

export function MantraDetailPage() {
  const { id } = useParams({ from: "/mantras/$id" });
  const navigate = useNavigate();
  const { data: mantra, isLoading, isError } = useMantra(BigInt(id));

  return (
    <div className="flex flex-col min-h-full">
      {/* Back Button */}
      <div className="px-4 pt-4 pb-2">
        <button
          type="button"
          onClick={() => navigate({ to: "/mantras" })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Mantras</span>
        </button>
      </div>

      {isLoading && (
        <div className="px-4 space-y-4 pt-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-24 w-full rounded-xl" />
          <Skeleton className="h-16 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </div>
      )}

      {isError && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <p className="font-devanagari text-5xl text-gold/40 mb-4">ॐ</p>
          <p className="text-sm text-muted-foreground text-center">
            Unable to load this mantra.
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/mantras" })}
            className="mt-4 text-sm text-saffron hover:underline"
          >
            Return to catalogue
          </button>
        </div>
      )}

      {mantra && (
        <div className="px-4 pb-6 animate-fade-in">
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-full saffron-gradient flex items-center justify-center flex-shrink-0 mt-0.5">
                <BookOpen size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground leading-tight">
                  {mantra.name}
                </h2>
                <p className="text-sm text-saffron font-medium mt-0.5">
                  {mantra.deity}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              <Badge
                variant="outline"
                className="text-xs border-gold/40 text-gold bg-gold/5"
              >
                {mantra.language}
              </Badge>
              {mantra.categories.map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="text-xs border-saffron/30 text-saffron/80 bg-saffron/5"
                >
                  {cat}
                </Badge>
              ))}
            </div>
          </div>

          <Separator className="mb-5 bg-gold/20" />

          {/* Mantra Text */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Mantra
            </h3>
            <div className="bg-deep-red/5 border border-deep-red/15 rounded-xl p-4">
              <p className="font-devanagari text-lg text-foreground leading-loose text-center">
                {mantra.mantraText}
              </p>
            </div>
          </section>

          {/* Transliteration */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Transliteration
            </h3>
            <div className="bg-saffron/5 border border-saffron/15 rounded-xl p-4">
              <p className="text-sm text-foreground leading-relaxed italic">
                {mantra.transliteration}
              </p>
            </div>
          </section>

          {/* Audio Player */}
          <AudioPlayer
            text={`${mantra.mantraText} ${mantra.transliteration}`}
          />

          {/* Meaning */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Meaning
            </h3>
            <div className="bg-card border border-gold/20 rounded-xl p-4">
              <p className="text-sm text-foreground leading-relaxed">
                {mantra.meaning}
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Benefits
            </h3>
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
              <p className="text-sm text-foreground leading-relaxed">
                {mantra.benefits}
              </p>
            </div>
          </section>

          {/* Decorative footer */}
          <div className="flex items-center gap-3 mt-6">
            <div className="flex-1 h-px bg-border" />
            <span className="font-devanagari text-gold/50 text-xl">ॐ</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </div>
      )}
    </div>
  );
}
