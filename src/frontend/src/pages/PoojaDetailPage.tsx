import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useNavigate, useParams } from "@tanstack/react-router";
import { ArrowLeft, CheckSquare, Clock, Flame, Square } from "lucide-react";
import { useState } from "react";
import { AudioPlayer } from "../components/AudioPlayer";
import { usePooja } from "../hooks/useQueries";

export function PoojaDetailPage() {
  const { id } = useParams({ from: "/poojas/$id" });
  const navigate = useNavigate();
  const { data: pooja, isLoading, isError } = usePooja(BigInt(id));
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const checkedCount = checkedItems.size;
  const totalItems = pooja?.requiredItems.length ?? 0;

  return (
    <div className="flex flex-col min-h-full">
      {/* Back Button */}
      <div className="px-4 pt-4 pb-2">
        <button
          type="button"
          onClick={() => navigate({ to: "/poojas" })}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Back to Poojas</span>
        </button>
      </div>

      {isLoading && (
        <div className="px-4 space-y-4 pt-2">
          <Skeleton className="h-7 w-3/4" />
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-32 w-full rounded-xl" />
          <Skeleton className="h-40 w-full rounded-xl" />
        </div>
      )}

      {isError && (
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
          <p className="font-devanagari text-5xl text-gold/40 mb-4">ॐ</p>
          <p className="text-sm text-muted-foreground text-center">
            Unable to load this pooja.
          </p>
          <button
            type="button"
            onClick={() => navigate({ to: "/poojas" })}
            className="mt-4 text-sm text-deep-red hover:underline"
          >
            Return to catalogue
          </button>
        </div>
      )}

      {pooja && (
        <div className="px-4 pb-6 animate-fade-in">
          {/* Header */}
          <div className="mb-5">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-deep-red flex items-center justify-center flex-shrink-0 mt-0.5">
                <Flame size={18} className="text-white" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-foreground leading-tight">
                  {pooja.name}
                </h2>
                <p className="text-sm text-saffron font-medium mt-0.5">
                  {pooja.deity}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3 items-center">
              <Badge
                variant="outline"
                className="text-xs border-deep-red/40 text-deep-red bg-deep-red/5"
              >
                {pooja.occasion}
              </Badge>
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock size={12} />
                {Number(pooja.duration)} minutes
              </span>
            </div>
          </div>

          <Separator className="mb-5 bg-gold/20" />

          {/* Significance */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Significance
            </h3>
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4">
              <p className="text-sm text-foreground leading-relaxed">
                {pooja.significance}
              </p>
            </div>
          </section>

          {/* Audio Player */}
          <AudioPlayer
            text={`${pooja.significance} ${pooja.procedure.join(". ")}`}
          />

          {/* Required Items Checklist */}
          <section className="mb-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xs font-semibold text-gold uppercase tracking-widest">
                Samagri (Required Items)
              </h3>
              <span className="text-xs text-muted-foreground">
                {checkedCount}/{totalItems}
              </span>
            </div>

            {/* Progress bar */}
            {totalItems > 0 && (
              <div className="w-full h-1.5 bg-border rounded-full mb-3 overflow-hidden">
                <div
                  className="h-full bg-saffron rounded-full transition-all duration-300"
                  style={{ width: `${(checkedCount / totalItems) * 100}%` }}
                />
              </div>
            )}

            <div className="bg-card border border-gold/20 rounded-xl overflow-hidden">
              {pooja.requiredItems.map((item, index) => (
                <button
                  // biome-ignore lint/suspicious/noArrayIndexKey: list items are static
                  key={index}
                  type="button"
                  onClick={() => toggleItem(index)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    index < pooja.requiredItems.length - 1
                      ? "border-b border-border"
                      : ""
                  } ${checkedItems.has(index) ? "bg-saffron/5" : "hover:bg-muted/50"}`}
                >
                  {checkedItems.has(index) ? (
                    <CheckSquare
                      size={18}
                      className="text-saffron flex-shrink-0"
                    />
                  ) : (
                    <Square
                      size={18}
                      className="text-muted-foreground flex-shrink-0"
                    />
                  )}
                  <span
                    className={`text-sm transition-colors ${
                      checkedItems.has(index)
                        ? "text-muted-foreground line-through"
                        : "text-foreground"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              ))}
            </div>
          </section>

          {/* Step-by-Step Procedure */}
          <section className="mb-5">
            <h3 className="text-xs font-semibold text-gold uppercase tracking-widest mb-3">
              Procedure
            </h3>
            <div className="space-y-3">
              {pooja.procedure.map((step, index) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: list items are static
                  key={index}
                  className="flex gap-3 bg-card border border-gold/15 rounded-xl p-4"
                >
                  <div className="w-7 h-7 rounded-full bg-deep-red/10 border border-deep-red/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-deep-red">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed flex-1">
                    {step}
                  </p>
                </div>
              ))}
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
