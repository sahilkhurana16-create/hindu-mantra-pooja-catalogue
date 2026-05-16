import { useNavigate, useRouter } from "@tanstack/react-router";
import { BookOpen, Circle, Flower2, Home } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/mantras", label: "Mantras", icon: BookOpen },
  { path: "/poojas", label: "Poojas", icon: Flower2 },
  { path: "/rosary", label: "Mala", icon: Circle },
];

export default function BottomNav() {
  const router = useRouter();
  const navigate = useNavigate();
  const currentPath = router.state.location.pathname;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-maroon-gradient border-t border-gold/30 shadow-maroon">
      {/* Top gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      <div className="flex items-stretch">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive =
            currentPath === item.path ||
            (item.path !== "/" && currentPath.startsWith(item.path));

          return (
            <button
              type="button"
              key={item.path}
              onClick={() => navigate({ to: item.path })}
              className={`
                flex-1 flex flex-col items-center justify-center py-2.5 px-1 gap-0.5
                transition-all duration-200 relative
                ${isActive ? "text-gold" : "text-gold/50 hover:text-gold/80"}
              `}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-gold rounded-full" />
              )}

              {/* Vertical separator */}
              {index > 0 && (
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gold/15" />
              )}

              <div
                className={`
                relative p-1.5 rounded-full transition-all duration-200
                ${isActive ? "bg-gold/15 shadow-gold-sm" : ""}
              `}
              >
                <Icon
                  size={isActive ? 22 : 20}
                  strokeWidth={isActive ? 2 : 1.5}
                />
              </div>

              <span
                className={`
                text-xs font-body tracking-wide transition-all duration-200
                ${isActive ? "font-semibold" : "font-normal"}
              `}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Safe area padding for iOS */}
      <div className="h-safe-area-inset-bottom bg-transparent" />
    </nav>
  );
}
