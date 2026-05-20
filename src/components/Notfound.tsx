import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const REDIRECT_MS = 3000;

export default function Notfound() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const timer = window.setTimeout(() => {
      navigate("/", { replace: true });
    }, REDIRECT_MS);

    return () => window.clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(80% 60% at 12% 10%, oklch(0.97 0.05 160) 0%, transparent 60%), radial-gradient(65% 55% at 88% 18%, oklch(0.98 0.04 210) 0%, transparent 55%), linear-gradient(180deg, oklch(0.99 0.01 200) 0%, oklch(0.96 0.02 200) 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(0deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto grid min-h-screen max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/70 px-4 py-1.5 text-xs font-mono uppercase tracking-[0.35em] text-muted-foreground backdrop-blur">
            Signal lost
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </div>
          <div className="space-y-3">
            <h1 className="font-serif text-6xl leading-[0.9] tracking-tight md:text-7xl">
              404
            </h1>
            <p className="max-w-lg text-base text-muted-foreground md:text-lg">
              The route you requested drifted out of the flight path. We are
              guiding you back to home right now.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-2 font-medium text-primary transition hover:bg-primary/20"
            >
              Return immediately
            </Link>
            <span className="text-muted-foreground">
              Redirecting in a moment
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="rounded-2xl border border-border/70 bg-background/80 p-6 shadow-lg backdrop-blur"
        >
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="font-mono">Current vector</span>
            <span className="font-mono">reroute</span>
          </div>
          <div className="mt-4 rounded-xl border border-dashed border-border/80 bg-muted/40 p-4">
            <p className="text-xs font-mono text-muted-foreground">Path</p>
            <p className="mt-1 truncate text-sm font-semibold">
              {location.pathname}
            </p>
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono uppercase text-muted-foreground">
              <span>Re-entry</span>
              <span>/</span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: REDIRECT_MS / 1000, ease: "linear" }}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              If you are not redirected, use the button to return home.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
