import * as React from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { CreditCard, Globe2, Zap, ShieldCheck, Check, QrCode } from "lucide-react";
import { Reveal } from "./motion";
import appScreen from "@/assets/app-screen.jpeg";

/* Counter */
function Counter({ to, prefix = "" }: { to: number; prefix?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const txt = useTransform(mv, (v) => `${prefix}${Math.round(v).toLocaleString()}`);
  React.useEffect(() => {
    if (inView) return animate(mv, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] }).stop;
  }, [inView, to, mv]);
  return <motion.span ref={ref}>{txt}</motion.span>;
}

/* Realistic QR code — proper finder patterns, timing, alignment + brand mark */
function QR() {
  const SIZE = 25;
  const matrix = React.useMemo(() => {
    const m: number[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
    const reserved: boolean[][] = Array.from({ length: SIZE }, () => Array(SIZE).fill(false));

    // Finder pattern: 7x7 with inner 5x5 white and inner 3x3 black
    const drawFinder = (r: number, c: number) => {
      for (let i = -1; i <= 7; i++) {
        for (let j = -1; j <= 7; j++) {
          const rr = r + i, cc = c + j;
          if (rr < 0 || cc < 0 || rr >= SIZE || cc >= SIZE) continue;
          reserved[rr][cc] = true;
          if (i === -1 || i === 7 || j === -1 || j === 7) { m[rr][cc] = 0; continue; }
          const onEdge = i === 0 || i === 6 || j === 0 || j === 6;
          const inner = i >= 2 && i <= 4 && j >= 2 && j <= 4;
          m[rr][cc] = onEdge || inner ? 1 : 0;
        }
      }
    };
    drawFinder(0, 0);
    drawFinder(0, SIZE - 7);
    drawFinder(SIZE - 7, 0);

    // Alignment pattern: 5x5 near bottom-right
    const ar = SIZE - 9, ac = SIZE - 9;
    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        const rr = ar + i, cc = ac + j;
        reserved[rr][cc] = true;
        const edge = Math.abs(i) === 2 || Math.abs(j) === 2;
        const center = i === 0 && j === 0;
        m[rr][cc] = edge || center ? 1 : 0;
      }
    }

    // Timing patterns
    for (let i = 8; i < SIZE - 8; i++) {
      m[6][i] = i % 2 === 0 ? 1 : 0;
      m[i][6] = i % 2 === 0 ? 1 : 0;
      reserved[6][i] = true;
      reserved[i][6] = true;
    }

    // Data modules — deterministic pseudo-random
    let seed = 1337;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let r = 0; r < SIZE; r++) {
      for (let c = 0; c < SIZE; c++) {
        if (!reserved[r][c]) m[r][c] = rnd() > 0.5 ? 1 : 0;
      }
    }
    return m;
  }, []);

  return (
    <div className="relative bg-white rounded-xl p-3">
      <div
        className="grid gap-0"
        style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
      >
        {matrix.flatMap((row, r) =>
          row.map((v, c) => (
            <div
              key={`${r}-${c}`}
              className="aspect-square"
              style={{ background: v ? "#0f2a1f" : "#ffffff" }}
            />
          )),
        )}
      </div>

      {/* Brand mark in center (covers data — real branded QRs do this with error correction) */}
      <div className="absolute inset-0 grid place-items-center pointer-events-none">
        <div className="size-10 rounded-xl bg-white grid place-items-center shadow-[0_0_0_3px_white]">
          <div className="size-8 rounded-lg bg-mint-deep grid place-items-center text-white font-extrabold text-xl leading-none">
            e
          </div>
        </div>
      </div>
    </div>
  );
}

/* Phone with scanning beam */
function PhoneScanner() {
  return (
    <div className="relative flex items-center justify-center">
      {/* aurora */}
      <motion.div
        className="absolute size-[420px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(205,232,215,0.7), transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* concentric rings */}
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-mint-deep/30"
          style={{ width: 280, height: 280 }}
          animate={{ scale: [0.7, 1.8], opacity: [0.6, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, delay: i * 1.1, ease: "easeOut" }}
        />
      ))}

      {/* PHONE */}
      <motion.div
        className="relative w-[280px] h-[560px] rounded-[44px] border-[10px] border-ink shadow-[0_40px_80px_-20px_rgba(15,42,31,0.5)]"
        style={{ background: "linear-gradient(160deg,#0a1f17,#13362a)" }}
        initial={{ opacity: 0, y: 40, rotate: -6 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        animate={{ y: [0, -10, 0] }}
        // @ts-expect-error framer merges
        transitionEnd={{}}
      >
        {/* notch */}
        <div className="absolute left-1/2 top-2 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/15" />

        {/* screen — live app background with QR scan overlay */}
        <div className="absolute inset-2 rounded-[34px] overflow-hidden">
          {/* App screenshot background */}
          <img
            src={appScreen}
            alt="easypaisa app"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Dim overlay to make scanner pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-ink/60 to-ink/85" />

          {/* Foreground scan UI */}
          <div className="relative h-full w-full p-5 flex flex-col">
            <div className="text-[12px] uppercase tracking-[0.25em] text-[#CDE8D7]">Scan to pay</div>
            <div className="mt-1 text-white text-xl font-bold flex items-center gap-1.5 drop-shadow">
              <QrCode className="size-4 text-[#CDE8D7]" /> Raast QR
            </div>

            {/* QR scan card */}
            <div className="relative mt-4 rounded-2xl overflow-hidden p-2 bg-white/10 backdrop-blur-md border border-white/15 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden">
                <QR />
                {/* corner brackets */}
                {[
                  "top-1 left-1 border-t-2 border-l-2 rounded-tl-md",
                  "top-1 right-1 border-t-2 border-r-2 rounded-tr-md",
                  "bottom-1 left-1 border-b-2 border-l-2 rounded-bl-md",
                  "bottom-1 right-1 border-b-2 border-r-2 rounded-br-md",
                ].map((c) => (
                  <span key={c} className={`absolute ${c} size-5 border-[#CDE8D7]`} />
                ))}
                {/* scanning beam */}
                <motion.div
                  className="absolute inset-x-0 h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, transparent, #CDE8D7, transparent)", boxShadow: "0 0 24px #CDE8D7, 0 0 48px #CDE8D7" }}
                  animate={{ top: ["4%", "96%", "4%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
                {/* soft glow tracking the beam */}
                <motion.div
                  className="absolute inset-x-0 h-16 pointer-events-none"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(205,232,215,0.25), transparent)" }}
                  animate={{ top: ["-10%", "85%", "-10%"] }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* success toast */}
            <motion.div
              className="mt-4 rounded-xl bg-white/10 backdrop-blur-md border border-[#CDE8D7]/30 px-3 py-2.5 flex items-center gap-2.5 shadow-xl"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, -4] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.3, 0.85, 1] }}
            >
              <motion.div
                className="size-7 rounded-full bg-[#CDE8D7] grid place-items-center text-ink shrink-0"
                animate={{ scale: [0.6, 1.1, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2.9 }}
              >
                <Check className="size-4" strokeWidth={3} />
              </motion.div>
              <div className="min-w-0">
                <div className="text-[12px] text-white/70">Payment sent</div>
                <div className="text-base font-bold text-white truncate">Rs <Counter to={1280} /> · Cafe Mocca</div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating chips around the phone */}
      <motion.div
        className="absolute -left-2 top-12 rounded-full bg-white shadow-xl px-3 py-2 flex items-center gap-2 text-sm font-semibold text-ink"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Zap className="size-3.5 text-mint-deep" /> Instant
      </motion.div>
      <motion.div
        className="absolute -right-4 top-32 rounded-full bg-ink text-white shadow-xl px-3 py-2 text-sm font-semibold"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        +Rs 45 cashback
      </motion.div>
      <motion.div
        className="absolute -right-6 bottom-24 rounded-2xl bg-white shadow-xl px-3 py-2 flex items-center gap-2 text-sm font-semibold text-ink"
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck className="size-3.5 text-mint-deep" /> Refund guaranteed
      </motion.div>
    </div>
  );
}

const FEATURES = [
  { i: CreditCard, t: "Pay bills", d: "Electricity, gas, internet — all merchants" },
  { i: Globe2, t: "Mobile top-up", d: "Every network, instant" },
  { i: Zap, t: "Raast QR", d: "Free, instant transfers" },
  { i: ShieldCheck, t: "Refund guarantee", d: "Wrong payment? We've got you" },
];

export function PayShowcase() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center order-2 lg:order-1">
          <PhoneScanner />
        </div>

        <Reveal className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-base font-semibold uppercase tracking-widest text-mint-deep">
            <QrCode className="size-4" /> Pay everywhere
          </span>
          <h2 className="mt-3 text-[38px] md:text-[62px] font-semibold leading-[1.02] text-ink">
            Tap, scan, <em className="not-italic text-mint-deep">done.</em>
          </h2>
          <p className="mt-5 text-xl text-muted-foreground max-w-md">
            Scan any QR — Raast, Visa, Mastercard or merchant — and pay in a single tap. Bills,
            top-ups, shopping, all in one place.
          </p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {FEATURES.map(({ i: Icon, t, d }, idx) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 h-full"
              >
                <motion.div
                  className="absolute -right-6 -top-6 size-20 rounded-full bg-mint-deep/10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
                <div className="relative">
                  <div className="grid size-10 place-items-center rounded-xl bg-mint-deep/10 text-mint-deep group-hover:bg-mint-deep group-hover:text-white transition-colors">
                    <Icon className="size-5" />
                  </div>
                  <h4 className="mt-4 font-semibold text-ink">{t}</h4>
                  <p className="text-base text-muted-foreground mt-1">{d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
