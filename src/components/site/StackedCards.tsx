import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CreditCard, PiggyBank, Zap, Sparkles } from "lucide-react";
import mockup from "@/assets/mobile-mockup.png";
import moneybag from "@/assets/moneybag.png";
import podium from "@/assets/podium.webp";
import hero from "@/assets/hero-couch.png";

type CardData = {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  image: string;
  bg: string;
  textColor: string;
  imageBg: string;
  icon: typeof Zap;
};

const CARDS: CardData[] = [
  {
    eyebrow: "Raast transfers",
    title: "Send money in a tap, instantly and free.",
    body: "Pay any bank or wallet in Pakistan in seconds. No charges, no waiting, no excuses.",
    cta: "Learn about Raast",
    image: mockup,
    bg: "#CDE8D7",
    textColor: "#0A2A1F",
    imageBg: "#0A2A1F",
    icon: Zap,
  },
  {
    eyebrow: "easypaisa credit card",
    title: "Spend smarter with the easypaisa card.",
    body: "Tap-to-pay, freeze-on-tap, and zero hidden fees. The only card you'll need in your wallet.",
    cta: "Apply for a card",
    image: hero,
    bg: "#0A2A1F",
    textColor: "#FFFFFF",
    imageBg: "#3DDC84",
    icon: CreditCard,
  },
  {
    eyebrow: "Smart savings",
    title: "Grow every rupee, automatically.",
    body: "Up to 14% p.a. on savings pots. Round-up spare change. Set goals, hit them faster.",
    cta: "Start a savings goal",
    image: moneybag,
    bg: "#F2E9DA",
    textColor: "#2A1F0A",
    imageBg: "#E8B84A",
    icon: PiggyBank,
  },
  {
    eyebrow: "easypaisa Bazaar",
    title: "A marketplace inside your wallet.",
    body: "Travel, gaming, shopping, investments — discover rewards tailored to how you spend.",
    cta: "Explore Bazaar",
    image: podium,
    bg: "#1E3A8A",
    textColor: "#FFFFFF",
    imageBg: "#CDE8D7",
    icon: Sparkles,
  },
];

function StackCard({ card, index, total, progress }: {
  card: CardData;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  // Each card occupies 1/total of the scroll. When the next card arrives, this one scales/shifts down.
  const start = index / total;
  const end = (index + 1) / total;

  const scale = useTransform(progress, [start, end], [1, 0.92]);
  const y = useTransform(progress, [start, end], [0, -40]);
  const opacity = useTransform(
    progress,
    [start, (start + end) / 2, end],
    [1, 1, index === total - 1 ? 1 : 0.6]
  );
  const Icon = card.icon;

  return (
    <motion.div
      style={{
        position: "sticky",
        top: `${80 + index * 44}px`,
        scale,
        y,
        opacity,
        backgroundColor: card.bg,
        color: card.textColor,
        zIndex: index + 1,
        marginBottom: index === total - 1 ? 0 : 28,
      }}
      className="rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,42,31,0.35)] border border-black/5"
    >
      <div className="grid md:grid-cols-2 min-h-[460px]">
        {/* Text */}
        <div className="p-10 md:p-14 flex flex-col justify-between gap-10">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest opacity-70">
              <Icon className="size-4" />
              {card.eyebrow}
            </div>
            <h3 className="mt-6 text-[32px] md:text-[50px] font-semibold leading-[1.05] max-w-md">
              {card.title}
            </h3>
            <p className="mt-5 text-lg md:text-xl opacity-75 max-w-md leading-relaxed">
              {card.body}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="self-start inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold border-2 border-current bg-transparent"
          >
            {card.cta}
            <ArrowRight className="size-4" />
          </motion.button>
        </div>

        {/* Image */}
        <div
          className="relative overflow-hidden flex items-center justify-center p-8"
          style={{ backgroundColor: card.imageBg }}
        >
          <motion.img
            src={card.image}
            alt=""
            className="max-h-[380px] w-auto object-contain drop-shadow-2xl"
            initial={{ scale: 1 }}
            whileInView={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
}

export function StackedCards() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-mint-deep">
            Everything easypaisa
          </span>
          <h2 className="mt-3 text-4xl md:text-6xl font-semibold leading-[1.02]">
            One app. Endless ways to <em className="not-italic text-mint-deep">move money</em>.
          </h2>
        </div>
      </div>

      {/* Sticky stack container — must be tall enough for each card to scroll */}
      <div ref={ref} className="relative mx-auto max-w-7xl px-6 pb-8" style={{ height: `${(CARDS.length - 1) * 70 + 90}vh` }}>
        <div>
          {CARDS.map((card, i) => (
            <StackCard
              key={card.title}
              card={card}
              index={i}
              total={CARDS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
