import { Button } from "@/components/ui/button";
import { useNavigate } from "@tanstack/react-router";
import { BookOpen, Flame, Sparkles } from "lucide-react";
import { useAllMantras, useAllPoojas } from "../hooks/useQueries";

export function HomePage() {
  const navigate = useNavigate();
  const { data: mantras } = useAllMantras();
  const { data: poojas } = useAllPoojas();

  const mantraCount = mantras?.length ?? 0;
  const poojaCount = poojas?.length ?? 0;

  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div className="relative overflow-hidden">
        <img
          src="/assets/generated/app-banner.dim_1200x400.png"
          alt="Hindu Mantra & Pooja Catalogue"
          className="w-full object-cover"
          style={{ maxHeight: "200px" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="font-devanagari text-3xl text-gold drop-shadow-lg">ॐ</p>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-4 pt-5 pb-4">
        <div className="text-center mb-6">
          <h2 className="font-heading text-2xl font-bold text-deep-red mb-1">
            Namaste 🙏
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Your sacred companion for mantras and poojas.
            <br />
            Find peace, wisdom, and divine guidance.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-saffron/10 border border-saffron/20 rounded-xl p-3 text-center">
            <p className="font-heading text-2xl font-bold text-saffron">
              {mantraCount}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Sacred Mantras
            </p>
          </div>
          <div className="bg-deep-red/10 border border-deep-red/20 rounded-xl p-3 text-center">
            <p className="font-heading text-2xl font-bold text-deep-red">
              {poojaCount}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Pooja Rituals
            </p>
          </div>
        </div>

        {/* Quick Access Buttons */}
        <div className="space-y-3 mb-6">
          <button
            type="button"
            onClick={() => navigate({ to: "/mantras" })}
            className="w-full flex items-center gap-4 p-4 rounded-xl saffron-gradient text-white shadow-devotional transition-all duration-200 active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <BookOpen size={20} />
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-base leading-tight">
                Mantra Catalogue
              </p>
              <p className="text-xs text-white/80 mt-0.5">
                Sacred chants & their meanings
              </p>
            </div>
            <Sparkles size={16} className="ml-auto text-white/60" />
          </button>

          <button
            type="button"
            onClick={() => navigate({ to: "/poojas" })}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-deep-red text-white shadow-devotional transition-all duration-200 active:scale-[0.98]"
          >
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <Flame size={20} />
            </div>
            <div className="text-left">
              <p className="font-heading font-semibold text-base leading-tight">
                Pooja Catalogue
              </p>
              <p className="text-xs text-white/80 mt-0.5">
                Rituals, samagri & step-by-step guides
              </p>
            </div>
            <Sparkles size={16} className="ml-auto text-white/60" />
          </button>
        </div>

        {/* Divider with Om */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-border" />
          <span className="font-devanagari text-gold text-lg">ॐ</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Daily Inspiration */}
        <div className="bg-gold/10 border border-gold/30 rounded-xl p-4">
          <p className="text-xs font-semibold text-gold uppercase tracking-widest mb-2">
            Daily Wisdom
          </p>
          <p className="font-devanagari text-sm text-foreground leading-relaxed italic">
            "सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।"
          </p>
          <p className="text-xs text-muted-foreground mt-1.5">
            May all beings be happy. May all beings be free from illness.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-4 py-6 text-center border-t border-border mt-2">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Hindu Mantra & Pooja Catalogue
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with <span className="text-deep-red">♥</span> using{" "}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname || "hindu-mantra-pooja")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-saffron hover:underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}
