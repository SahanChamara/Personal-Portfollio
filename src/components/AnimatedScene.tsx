import { motion } from "framer-motion";

const snippets = ["docker build", "aws ecs deploy", "git push", "cloudwatch logs", "nginx proxy"];

export default function AnimatedScene() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      <div className="absolute inset-0 noise-overlay opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_8%,rgba(var(--primary-rgb),0.22),transparent_34%),radial-gradient(circle_at_82%_38%,rgba(var(--accent-rgb),0.14),transparent_30%),linear-gradient(to_bottom,transparent,hsl(var(--background))_82%)]" />

      <motion.div
        className="absolute left-[5%] top-[18%] hidden w-80 rounded-lg border border-border/70 bg-card/60 p-4 font-mono text-xs text-muted-foreground backdrop-blur-md dark:border-white/10 dark:bg-black/20 lg:block"
        animate={{ y: [0, -12, 0], opacity: [0.65, 0.95, 0.65] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {snippets.map((snippet) => (
          <div key={snippet} className="flex items-center gap-3 border-b border-border/60 py-2 last:border-0 dark:border-white/5">
            <span className="h-1.5 w-1.5 bg-accent" />
            <span>{snippet}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-[14%] right-[7%] hidden w-72 rounded-lg border border-primary/20 bg-card/40 p-4 backdrop-blur-md md:block"
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mb-4 flex items-center justify-between font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span>Deploy Health</span>
          <span className="text-green-400">Live</span>
        </div>
        <div className="space-y-3">
          {[82, 68, 91].map((value, index) => (
            <div key={value} className="h-2 overflow-hidden bg-secondary">
              <motion.div
                className={index === 1 ? "h-full bg-accent" : "h-full bg-primary"}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 1.6, delay: index * 0.25, repeat: Infinity, repeatType: "reverse", repeatDelay: 4 }}
              />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
