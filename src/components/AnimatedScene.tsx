import { motion } from "framer-motion";

const floatingAnimation = {
  y: [0, -20, 0, 18, 0],
  x: [0, 10, -6, 4, 0],
  rotate: [0, 8, -4, 6, 0],
};

export default function AnimatedScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,hsl(var(--primary)/0.25),transparent_40%),radial-gradient(circle_at_85%_80%,hsl(var(--accent)/0.2),transparent_38%),radial-gradient(circle_at_50%_55%,hsl(var(--foreground)/0.06),transparent_45%)]" />

      <motion.div
        className="absolute left-[8%] top-[12%] h-40 w-40 rounded-[2rem] border border-primary/20 bg-background/30 backdrop-blur-xl"
        animate={floatingAnimation}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />

      <motion.div
        className="absolute right-[6%] top-[22%] h-56 w-56 rounded-full border border-accent/30 bg-accent/10 backdrop-blur-xl"
        animate={{ y: [0, -24, 8, 0], x: [0, -10, 8, 0], scale: [1, 1.05, 0.97, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[8%] left-[22%] h-72 w-72 rounded-full border border-primary/20 bg-primary/10 blur-sm"
        animate={{ y: [0, -15, 10, 0], x: [0, 12, -7, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute bottom-[20%] right-[20%] h-44 w-44 rotate-12 rounded-3xl border border-border/60 bg-card/50 shadow-2xl"
        animate={{ rotate: [12, -2, 10, 12], y: [0, -18, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] [background-size:52px_52px]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,hsl(var(--background)/0.2),hsl(var(--background))_72%)]" />
    </div>
  );
}
