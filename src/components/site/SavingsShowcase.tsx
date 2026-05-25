import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { ArrowUpRight, Target, Sparkles, TrendingUp, Plane, Home, GraduationCap } from "lucide-react";
import { Reveal } from "./motion";

/* Animated counter that triggers on view */
function Counter({ to, prefix = "", suffix = "", duration = 2 }: { to: number; prefix?: string; suffix?: string; duration?: number }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);
  React.useEffect(() => {
    if (inView) {
      const controls = animate(mv, to, { duration, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, duration, mv]);
  return <motion.span ref={ref}>{rounded}</motion.span>;
}

/* Animated growth chart */
function GrowthChart() {
  const ref = React.useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <svg ref={ref} viewBox="0 0 400 180" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <linearGradient id="savingsFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#CDE8D7" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#CDE8D7" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="savingsStroke" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#9ed6b4" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
      </defs>

      {/* grid */}
      {[40, 80, 120, 160].map((y) => (
        <line key={y} x1="0" x2="400" y1={y} y2={y} stroke="#ffffff" strokeOpacity="0.06" strokeDasharray="2 4" />
      ))}

      {/* area fill */}
      <motion.path
        d="M0,150 C40,140 70,135 100,120 C140,100 170,110 200,85 C240,55 270,70 300,50 C340,28 370,30 400,15 L400,180 L0,180 Z"
        fill="url(#savingsFill)"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.6 }}
      />

      {/* line */}
      <motion.path
        d="M0,150 C40,140 70,135 100,120 C140,100 170,110 200,85 C240,55 270,70 300,50 C340,28 370,30 400,15"
        fill="none"
        stroke="url(#savingsStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={inView ? { pathLength: 1 } : {}}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* end pulse dot */}
      <motion.circle
        cx="400" cy="15" r="5" fill="#fff"
        initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.6 }}
      />
      <motion.circle
        cx="400" cy="15" r="5" fill="none" stroke="#CDE8D7" strokeWidth="2"
        animate={{ r: [5, 16], opacity: [0.8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
      />
    </svg>
  );
}

/* Progress ring for a goal */
function GoalRing({ percent }: { percent: number }) {
  const ref = React.useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const C = 2 * Math.PI * 28;
  return (
    <svg ref={ref} viewBox="0 0 72 72" className="size-14 -rotate-90">
      <circle cx="36" cy="36" r="28" stroke="rgba(255,255,255,0.12)" strokeWidth="6" fill="none" />
      <motion.circle
        cx="36" cy="36" r="28" stroke="#CDE8D7" strokeWidth="6" fill="none" strokeLinecap="round"
        strokeDasharray={C}
        initial={{ strokeDashoffset: C }}
        animate={inView ? { strokeDashoffset: C - (C * percent) / 100 } : {}}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
      />
    </svg>
  );
}

type Goal = { icon: React.ComponentType<{ className?: string }>; label: string; pct: number; amount: string };
const GOALS: Goal[] = [
  { icon: Plane, label: "Umrah trip", pct: 78, amount: "Rs 156k / 200k" },
  { icon: Home, label: "New home", pct: 42, amount: "Rs 420k / 1M" },
  { icon: GraduationCap, label: "Tuition", pct: 91, amount: "Rs 91k / 100k" },
];

export function SavingsShowcase() {
  return (
    <section className="relative overflow-hidden bg-white rounded-t-[3rem]">
      {/* ambient blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-32 -left-24 size-[28rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(205,232,215,0.6), transparent 70%)" }}
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-32 -right-20 size-[32rem] rounded-full blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(127,197,154,0.45), transparent 70%)" }}
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl mb-12">
            <span className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-mint-deep">
              <Sparkles className="size-4" /> Savings
            </span>
            <h2 className="mt-3 text-[38px] md:text-[62px] font-semibold leading-[1.02] text-ink">
              Watch your money <em className="not-italic text-mint-deep">grow itself.</em>
            </h2>
            <p className="mt-5 text-xl text-muted-foreground max-w-lg">
              Set a goal, automate the boring part, and earn up to 14% p.a. while you sleep.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* HERO CARD — balance + chart */}
          <Reveal className="lg:col-span-8">
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative h-full overflow-hidden rounded-[32px] p-8 md:p-10 text-white shadow-[0_30px_80px_-30px_rgba(15,42,31,0.5)]"
              style={{ background: "linear-gradient(160deg,#0a1f17 0%,#13362a 50%,#1d4a36 100%)" }}
            >
              {/* noise / sparkle accents */}
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute size-1 rounded-full bg-[#CDE8D7]"
                  style={{ left: `${15 + i * 14}%`, top: `${20 + (i % 3) * 18}%` }}
                  animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.6, 1] }}
                  transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}

              <div className="relative flex items-start justify-between gap-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#CDE8D7]/70">Total savings</div>
                  <div className="mt-2 text-5xl md:text-7xl font-bold tracking-tight">
                    <Counter prefix="Rs " to={847250} />
                  </div>
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#CDE8D7]/15 px-3 py-1.5 text-sm font-semibold text-[#CDE8D7]">
                    <TrendingUp className="size-4" /> +<Counter to={14} suffix="% p.a." />
                  </div>
                </div>
                <motion.div
                  whileHover={{ rotate: -45, scale: 1.05 }}
                  className="grid size-12 place-items-center rounded-full border border-white/30 shrink-0"
                >
                  <ArrowUpRight className="size-5" />
                </motion.div>
              </div>

              {/* chart */}
              <div className="relative mt-8 h-44 md:h-56">
                <GrowthChart />
              </div>

              {/* mini stats */}
              <div className="relative mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "This month", v: "+Rs 24k" },
                  { k: "Round-ups", v: "Rs 1,840" },
                  { k: "Goals on track", v: "3 / 3" },
                ].map((s, i) => (
                  <motion.div
                    key={s.k}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.12, duration: 0.6 }}
                    className="rounded-2xl bg-white/[0.06] backdrop-blur px-4 py-3 border border-white/10"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-white/55">{s.k}</div>
                    <div className="mt-1 text-base font-bold">{s.v}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* GOALS COLUMN */}
          <div className="lg:col-span-4 grid gap-6">
            <Reveal delay={0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-[28px] p-7 bg-white border border-border h-full"
              >
                <div className="flex items-center gap-2 text-mint-deep text-sm font-semibold">
                  <Target className="size-4" /> Active goals
                </div>
                <ul className="mt-5 space-y-5">
                  {GOALS.map((g, i) => (
                    <motion.li
                      key={g.label}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
                      className="flex items-center gap-4"
                    >
                      <div className="relative shrink-0">
                        <GoalRing percent={g.pct} />
                        <div className="absolute inset-0 grid place-items-center">
                          <g.icon className="size-5 text-ink" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-semibold text-ink truncate">{g.label}</span>
                          <span className="text-sm font-bold text-mint-deep">{g.pct}%</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{g.amount}</div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative overflow-hidden rounded-[28px] p-7 text-ink"
                style={{ background: "linear-gradient(135deg,#CDE8D7,#9ed6b4)" }}
              >
                <motion.div
                  className="absolute -right-10 -top-10 size-40 rounded-full bg-white/30 blur-2xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="relative">
                  <div className="text-xs uppercase tracking-widest font-semibold">Round-ups today</div>
                  <div className="mt-2 text-4xl font-bold">
                    <Counter prefix="Rs " to={186} />
                  </div>
                  <p className="mt-2 text-sm text-ink/70">Spare change from 12 purchases auto-saved.</p>
                  <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold underline underline-offset-4">
                    Start a goal <ArrowUpRight className="size-4" />
                  </button>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
