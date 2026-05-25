import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal } from "./motion";

/* ---------- Live animated graphics for each card ---------- */

// 1) Elegant phone with animated balance, chart line, and aurora glow
function PhoneGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* aurora glow */}
      <motion.div
        className="absolute size-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #CDE8D7 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* concentric rings */}
      {[0, 1].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-[#CDE8D7]/25"
          style={{ width: 220, height: 220 }}
          animate={{ scale: [0.7, 1.4], opacity: [0.6, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: i * 2, ease: "easeOut" }}
        />
      ))}

      <motion.div
        className="relative h-[82%] w-[46%] rounded-[28px] border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
        style={{ background: "linear-gradient(160deg,#0a1f17,#13362a)" }}
        animate={{ y: [0, -10, 0], rotate: [-1.5, 1.5, -1.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* notch */}
        <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-white/15" />

        {/* screen content */}
        <div className="absolute inset-x-3 top-7 bottom-3 rounded-[20px] bg-gradient-to-b from-white/[0.06] to-transparent p-3 flex flex-col">
          <div className="text-[9px] uppercase tracking-[0.2em] text-[#CDE8D7]/70">Balance</div>
          <div className="text-[15px] font-bold text-white leading-tight">
            Rs <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >24,860</motion.span>
          </div>

          {/* mini chart */}
          <svg viewBox="0 0 100 40" className="mt-2 w-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#CDE8D7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#CDE8D7" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,30 L15,22 L30,26 L45,14 L60,18 L75,8 L100,12 L100,40 L0,40 Z"
              fill="url(#chartFill)"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.path
              d="M0,30 L15,22 L30,26 L45,14 L60,18 L75,8 L100,12"
              fill="none"
              stroke="#CDE8D7"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
            <motion.circle
              r="2"
              fill="#fff"
              animate={{ cx: [0, 15, 30, 45, 60, 75, 100], cy: [30, 22, 26, 14, 18, 8, 12] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
            />
          </svg>

          {/* tx rows */}
          <div className="mt-auto space-y-1.5">
            {[
              { label: "Sent", v: "−250" },
              { label: "Cashback", v: "+45" },
            ].map((r, i) => (
              <motion.div
                key={r.label}
                className="flex items-center justify-between rounded-md bg-white/[0.06] px-2 py-1"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.4, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
              >
                <span className="text-[9px] text-white/70">{r.label}</span>
                <span className="text-[10px] font-bold text-[#CDE8D7]">{r.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* floating notification */}
      <motion.div
        className="absolute right-[12%] top-[18%] rounded-lg bg-white/95 px-2 py-1 text-[10px] font-semibold text-[#0f2a1f] shadow-xl"
        animate={{ y: [0, -6, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        +Rs 1,200
      </motion.div>
    </div>
  );
}



// 2) Jars filling up with coins (Sort your salary)
function JarsGraphic() {
  const jars = [
    { color: "#CDE8D7", delay: 0 },
    { color: "#9ed6b4", delay: 0.4 },
    { color: "#7fc59a", delay: 0.8 },
  ];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-3 pb-10">
      {jars.map((j, idx) => (
        <div key={idx} className="relative h-32 w-16 overflow-hidden rounded-b-2xl rounded-t-md border-2 border-[#CDE8D7]/60 bg-white/5">
          {/* lid */}
          <div className="absolute -top-1 left-1/2 h-2 w-12 -translate-x-1/2 rounded-sm bg-[#CDE8D7]/80" />
          <motion.div
            className="absolute bottom-0 left-0 right-0"
            style={{ background: j.color }}
            initial={{ height: "10%" }}
            animate={{ height: ["10%", "85%", "10%"] }}
            transition={{ duration: 5, repeat: Infinity, delay: j.delay, ease: "easeInOut" }}
          />
          {/* coin dropping */}
          <motion.span
            className="absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-yellow-300"
            animate={{ y: [-30, 90], opacity: [1, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, delay: j.delay, ease: "easeIn" }}
          />
        </div>
      ))}
    </div>
  );
}

// 3) Elegant pots — concentric petals + nested orbits with a glowing core
function OrbitGraphic() {
  const petals = [
    { color: "#CDE8D7", size: 18, r: 78, count: 3, duration: 22 },
    { color: "#9ed6b4", size: 14, r: 56, count: 5, duration: 16, reverse: true },
    { color: "#f4c95d", size: 10, r: 34, count: 4, duration: 10 },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* aurora wash */}
      <motion.div
        className="absolute size-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(205,232,215,0.35), transparent 70%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* dashed guide rings */}
      {[120, 92, 64].map((d, i) => (
        <motion.div
          key={d}
          className="absolute rounded-full border border-dashed border-[#CDE8D7]/25"
          style={{ width: d * 2, height: d * 2 }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 30 + i * 10, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* orbiting petals */}
      {petals.map((p, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{ width: p.r * 2, height: p.r * 2 }}
          animate={{ rotate: p.reverse ? -360 : 360 }}
          transition={{ duration: p.duration, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: p.count }).map((_, i) => {
            const angle = (i / p.count) * Math.PI * 2;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: p.size,
                  height: p.size,
                  left: `calc(50% + ${Math.cos(angle) * p.r}px - ${p.size / 2}px)`,
                  top: `calc(50% + ${Math.sin(angle) * p.r}px - ${p.size / 2}px)`,
                  background: p.color,
                  boxShadow: `0 0 12px ${p.color}80`,
                }}
                animate={{ scale: [1, 1.25, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
              />
            );
          })}
        </motion.div>
      ))}

      {/* glowing core */}
      <motion.div
        className="relative size-14 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 30%, #ffffff, #CDE8D7 50%, #7fc59a)",
          boxShadow: "0 0 40px rgba(205,232,215,0.7), inset 0 0 12px rgba(255,255,255,0.4)",
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}


// 4) Card tap / cashback rings
function CashbackGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border-2 border-[#CDE8D7]"
          style={{ width: 60, height: 60 }}
          animate={{ scale: [1, 3.5], opacity: [0.8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8, ease: "easeOut" }}
        />
      ))}
      <motion.div
        className="relative h-24 w-36 rounded-xl shadow-2xl"
        style={{ background: "linear-gradient(135deg,#0f2a1f,#1d4a36)" }}
        animate={{ y: [0, -6, 0], rotate: [-4, 4, -4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-3 top-3 h-4 w-6 rounded-sm bg-yellow-300/90" />
        <div className="absolute bottom-3 right-3 text-[12px] font-bold tracking-widest text-[#CDE8D7]">
          easypaisa
        </div>
      </motion.div>
    </div>
  );
}

type Card = {
  title: string;
  body: string;
  Graphic: React.ComponentType;
  bg: string;
};

const cards: Card[] = [
  {
    title: "Payday, the easypaisa way",
    body: "Get your salary one day early and unlock instant cash boosts.",
    Graphic: PhoneGraphic,
    bg: "linear-gradient(160deg,#1d4a36,#0f2a1f)",
  },
  {
    title: "Sort your salary",
    body: "Auto-split every payday into Bills, Savings and Spending pots.",
    Graphic: JarsGraphic,
    bg: "linear-gradient(160deg,#0a1f17,#13362a)",
  },
  {
    title: "Separate your money",
    body: "Create up to 20 pots to keep every rupee organised.",
    Graphic: OrbitGraphic,
    bg: "linear-gradient(160deg,#13362a,#1d4a36)",
  },
  {
    title: "Earn while you spend",
    body: "Tap to pay and unlock cashback at Pakistan's top brands.",
    Graphic: CashbackGraphic,
    bg: "linear-gradient(160deg,#0f2a1f,#0a1f17)",
  },
];

export function ManageMoney() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mb-10 flex items-start gap-3">
            <h2 className="max-w-2xl text-[38px] md:text-[50px] font-extrabold tracking-tight text-[#0f2a1f]">
              Manage your money today
            </h2>
            <Sparkles className="size-7 text-mint-deep mt-2" />
          </div>
          <p className="max-w-xl text-xl text-neutral-600 mb-12">
            Instant notifications, smart insights and Pots to separate your money — all inside one easypaisa wallet.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[3/4.2] overflow-hidden rounded-3xl p-6 text-white shadow-xl"
              style={{ background: c.bg }}
            >
              {/* live graphic */}
              <div className="absolute inset-0 top-0 h-3/5">
                <c.Graphic />
              </div>

              {/* arrow */}
              <motion.div
                className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/40"
                whileHover={{ rotate: -45, backgroundColor: "#CDE8D7", color: "#0f2a1f" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="size-5" />
              </motion.div>

              {/* text */}
              <div className="absolute inset-x-6 bottom-6">
                <h3 className="text-[26px] font-extrabold leading-tight">{c.title}</h3>
                <p className="mt-2 text-base text-white/75">{c.body}</p>
              </div>

              {/* gradient overlay for legibility */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
