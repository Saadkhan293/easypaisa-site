import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { CardsCarousel } from "@/components/site/CardsCarousel";
import { StackedCards } from "@/components/site/StackedCards";
import { CoffeeDiscounts } from "@/components/site/CoffeeDiscounts";
import { ManageMoney } from "@/components/site/ManageMoney";
import { SavingsShowcase } from "@/components/site/SavingsShowcase";
import { PayShowcase } from "@/components/site/PayShowcase";
import { ScrollVideoReveal } from "@/components/site/ScrollVideoReveal";
import { Reveal, Stagger, StaggerItem, FloatY, Parallax, motion } from "@/components/site/motion";
import hero from "@/assets/hero-couch.png";
import podium from "@/assets/podium.webp";
import heroCouch from "@/assets/hero-couch.png";
import heroRetailer from "@/assets/hero-retailer.png";
import heroProtagonist from "@/assets/hero-protagonist.png";
import heroCouchLady from "@/assets/hero-couch-lady.png";
import moneybag from "@/assets/moneybag.png";
import mockup from "@/assets/mobile-mockup.png";
import heroVideo from "@/assets/videos/IMG_7145.webm";
import { ArrowRight, ShieldCheck, Sparkles, Zap, Globe2, PiggyBank, CreditCard, Play, Pause } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "easypaisa — Pakistan's everyday digital wallet" },
      { name: "description", content: "Send, save, pay and shop with easypaisa. Built for how Pakistan really lives." },
      { property: "og:title", content: "easypaisa — Pakistan's everyday digital wallet" },
      { property: "og:description", content: "Send, save, pay and shop with easypaisa." },
    ],
  }),
  component: Home,
});

const HERO_SLIDES = [heroProtagonist, heroCouchLady, heroRetailer, heroCouch];


function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <Layout>
      {/* HERO */}
      <HeroSection />

      {/* TRUST TICKER */}
      <section className="border-y border-border bg-card relative overflow-hidden">
        {/* Gradient fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-card to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-card to-transparent" />

        <motion.div
          className="flex w-max gap-12 py-3"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        >
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 shrink-0">
              {/* State Bank */}
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-mint flex items-center justify-center">
                  <ShieldCheck className="size-4 text-mint-deep" />
                </div>
                <span className="text-ink font-semibold tracking-tight uppercase text-sm">State Bank Regulated</span>
              </div>

              {/* Partners */}
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-medium text-[12px] tracking-[0.2em] uppercase">Partners</span>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 bg-card border border-border rounded text-[12px] font-bold text-ink/70">VISA</div>
                  <div className="px-3 py-1.5 bg-card border border-border rounded text-[12px] font-bold text-ink/70">MASTERCARD</div>
                  <div className="px-3 py-1.5 bg-mint-deep rounded text-[12px] font-bold text-primary-foreground">RAAST</div>
                </div>
              </div>

              {/* 24/7 */}
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-mint flex items-center justify-center">
                  <Zap className="size-4 text-mint-deep" />
                </div>
                <span className="text-ink font-semibold tracking-tight uppercase text-sm">24/7 Dedicated Support</span>
              </div>

              {/* 40M+ users */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="size-8 rounded-full border-2 border-card bg-mint-deep/30" />
                  <div className="size-8 rounded-full border-2 border-card bg-mint-deep/50" />
                  <div className="size-8 rounded-full border-2 border-card bg-mint flex items-center justify-center text-[12px] font-bold text-mint-deep">+</div>
                </div>
                <span className="text-ink font-semibold tracking-tight uppercase text-sm">40M+ Active Users</span>
              </div>

              {/* Biometric */}
              <div className="flex items-center gap-3">
                <div className="size-8 rounded-full bg-mint flex items-center justify-center">
                  <Sparkles className="size-4 text-mint-deep" />
                </div>
                <span className="text-ink font-semibold tracking-tight uppercase text-sm">Biometric Protected</span>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* THREE PILLARS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-[38px] md:text-[50px] font-semibold">An account that actually fits your life.</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Whether you're sending money home, paying utility bills, or saving up — easypaisa keeps
              it effortless.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Instant transfers", body: "Send to any bank or wallet in Pakistan in seconds via Raast." },
            { icon: PiggyBank, title: "Smart savings", body: "Goals, auto-rules and competitive returns on every rupee." },
            { icon: ShieldCheck, title: "Always protected", body: "Biometric login, freeze-on-tap card, real-time alerts." },
          ].map((f) => (
            <StaggerItem key={f.title}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-3xl bg-white p-8 border border-border h-full shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="inline-flex"
                >
                  <f.icon className="size-8 text-mint-deep" />
                </motion.div>
                <h3 className="mt-6 text-[26px] font-semibold">{f.title}</h3>
                <p className="mt-3 text-lg text-muted-foreground">{f.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SAVINGS — animated dashboard showcase */}
      <SavingsShowcase />

      {/* PAY — animated QR scanner showcase */}
      <PayShowcase />

      {/* STACKED CARDS — feature stack */}
      <StackedCards />

      {/* COFFEE DISCOUNTS */}
      <CoffeeDiscounts />

      {/* PODIUM */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-widest text-mint-deep">Bazaar</span>
            <h2 className="mt-3 text-[38px] md:text-[50px] font-semibold text-ink">A marketplace inside your wallet.</h2>
            <p className="mt-4 text-xl text-ink/75 max-w-md">
              Travel, gaming, shopping, investments — discover rewards and curated offers tailored
              to how you spend.
            </p>
            <motion.a
              href="#download"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
            >
              Browse Bazaar <ArrowRight className="size-4" />
            </motion.a>
          </Reveal>
          <div className="flex justify-center">
            <FloatY range={10}>
              <motion.img
                src={podium}
                alt="Bazaar podium"
                className="w-full max-w-xl"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </FloatY>
          </div>
        </div>
      </section>

      {/* MANAGE MONEY — live graphics cards */}
      <ManageMoney />

      {/* CARDS CAROUSEL */}
      <CardsCarousel />

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-[38px] md:text-[50px] font-semibold max-w-2xl">Loved by 40 million Pakistanis.</h2>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { q: "Switched my whole salary here. Bills, savings, shopping — all sorted.", n: "Ayesha K.", c: "Lahore" },
            { q: "Raast transfers are instant and free. I haven't visited a bank in months.", n: "Bilal R.", c: "Karachi" },
            { q: "The savings goals genuinely helped me put away for Umrah.", n: "Sana M.", c: "Islamabad" },
          ].map((t) => (
            <StaggerItem key={t.n}>
              <motion.figure
                whileHover={{ y: -6, scale: 1.01 }}
                className="rounded-3xl bg-card border border-border p-8 h-full"
              >
                <blockquote className="font-display text-[22px] leading-snug">"{t.q}"</blockquote>
                <figcaption className="mt-6 text-base text-muted-foreground">
                  <strong className="text-ink">{t.n}</strong> · {t.c}
                </figcaption>
              </motion.figure>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* SCROLL VIDEO REVEAL */}
      <ScrollVideoReveal />
    </Layout>
  );
}

function HeroSection() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % HERO_SLIDES.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
      {/* Decorative blob */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 size-96 rounded-full bg-white/40 blur-3xl z-0"
        animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Desktop: image as right-side background carousel */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-y-0 right-0 w-[48%] xl:w-[58%] overflow-hidden">
          <motion.img
            key={index}
            src={HERO_SLIDES[index]}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-contain object-bottom-right select-none"
            style={{
              filter: "saturate(0.9) contrast(0.95)",
              mixBlendMode: "multiply",
            }}
            initial={{ x: "110%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {/* Text-legibility fade only on the far left */}
        <div
          aria-hidden
          className="absolute inset-y-0 left-0 w-[40%]"
          style={{
            background:
              "linear-gradient(90deg, #CDE8D7 0%, #CDE8D7 62%, rgba(205,232,215,0) 100%)",
          }}
        />
      </div>


      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-12 md:pt-24 md:pb-32 md:min-h-[720px] flex flex-col md:flex-row md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-deep bg-white/70 backdrop-blur rounded-full px-3 py-1"
          >
            <Sparkles className="size-3.5" /> Pakistan's #1 wallet
          </motion.span>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[0.95] text-ink">
            {"Banking made ".split("").map((c, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.025, duration: 0.5 }}
                className="inline-block whitespace-pre"
              >
                {c}
              </motion.span>
            ))}
            <motion.em
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="not-italic text-mint-deep inline-block"
            >
              easy
            </motion.em>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              .
            </motion.span>
          </h1>
          <Reveal delay={0.4}>
            <p className="mt-6 text-base md:text-lg text-ink/80 max-w-md">
              The wallet that moves at the speed of your day. Pay bills, send money instantly,
              and grow your savings — all from one app.
            </p>
          </Reveal>
          <Reveal delay={0.55}>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 md:px-7 md:py-3.5 font-semibold shadow-lg shadow-mint-deep/20"
              >
                Open an account
                <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
                  <ArrowRight className="size-4" />
                </motion.span>
              </motion.a>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/features"
                  className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur text-ink px-6 py-3 md:px-7 md:py-3.5 font-semibold hover:bg-white transition"
                >
                  Explore features
                </Link>
              </motion.div>
            </div>
          </Reveal>
          <Reveal delay={0.7}>
            <div className="mt-8 md:mt-10 flex items-center gap-6 text-xs text-ink/70">
              <div><strong className="text-ink text-lg font-display">PKR 100M+</strong><br/>transacted daily</div>
              <div className="h-10 w-px bg-ink/15" />
              <div><strong className="text-ink text-lg font-display">40M+</strong><br/>active users</div>
            </div>
          </Reveal>

          {/* Slide indicators */}
          <div className="mt-8 md:mt-10 flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: index === i ? 32 : 10,
                  backgroundColor: index === i ? "#0a3d2e" : "rgba(10,61,46,0.25)",
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Mobile: image carousel below text */}
        <div className="md:hidden relative mt-8 -mx-6 h-[340px] overflow-hidden">
          {HERO_SLIDES.map((src, i) => {
            const offset = i - index;
            return (
              <motion.img
                key={i}
                src={src}
                alt=""
                aria-hidden
                className="absolute bottom-0 h-full w-auto max-w-none object-contain object-bottom pointer-events-none select-none"
                style={{
                  filter: "saturate(0.85) contrast(0.95)",
                  mixBlendMode: "multiply",
                  left: "50%",
                }}
                initial={false}
                animate={{ x: `calc(-50% + ${offset * 110}vw)` }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
