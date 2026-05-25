import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Reveal, motion } from "@/components/site/motion";

type CardVariant = {
  key: string;
  label: string;
  tier: string;
  title: string;
  desc: string;
  cta: string;
  textColor: string;
  accent: string;
  bgColor: string;
  tierTextColor: string;
};

const CARDS: CardVariant[] = [
  {
    key: "joint",
    label: "easypaisa",
    tier: "Joint",
    title: "Manage money together, effortlessly.",
    desc: "Open a shared wallet with family or friends and track every rupee in one place.",
    cta: "Tell me more",
    textColor: "#CDE8D7",
    accent: "#CDE8D7",
    bgColor: "#5CB85C",
    tierTextColor: "#ffffff99",
  },
  {
    key: "personal",
    label: "easypaisa",
    tier: "Personal",
    title: "Spend, organise and save with the habit-building wallet.",
    desc: "Smart spaces, instant Raast transfers, and savings goals that actually stick.",
    cta: "Tell me more",
    textColor: "#CDE8D7",
    accent: "#CDE8D7",
    bgColor: "#0a0a0a",
    tierTextColor: "#ffffff99",
  },
  {
    key: "business",
    label: "easypaisa",
    tier: "Business",
    title: "The merchant wallet built for Pakistan.",
    desc: "Accept QR payments, manage payouts and get real-time insights for your shop.",
    cta: "Tell me more",
    textColor: "#0a0a0a",
    accent: "#0a0a0a",
    bgColor: "#ffffff",
    tierTextColor: "#00000099",
  },
];

export function CardsCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  // Start on middle (Personal)
  const handleApi = (a: CarouselApi) => {
    if (!a) return;
    setApi(a);
    setCurrent(a.selectedScrollSnap());
    a.on("select", () => setCurrent(a.selectedScrollSnap()));
  };

  const active = CARDS[current] ?? CARDS[1];

  return (
    <section className="bg-cream py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="font-display text-[38px] md:text-[62px] font-semibold text-center text-ink max-w-3xl mx-auto leading-tight">
            There's a wallet with your name on it.
          </h2>
        </Reveal>

        <div className="mt-16">
          <Carousel
            opts={{ align: "center", loop: true, startIndex: 1, dragFree: false }}
            setApi={handleApi}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-4">
              {CARDS.map((c, i) => (
                <CarouselItem
                  key={c.key}
                  className="pl-3 md:pl-4 basis-full md:basis-3/5 lg:basis-1/2"
                >
                  <motion.div
                    animate={{
                      scale: current === i ? 1 : 0.9,
                      opacity: current === i ? 1 : 0.55,
                    }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative aspect-[1.85/1] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-2xl cursor-grab active:cursor-grabbing"
                    style={{ backgroundColor: c.bgColor }}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className="font-display font-bold tracking-tight text-2xl md:text-4xl lowercase"
                        style={{ color: c.accent }}
                      >
                        {c.label}
                      </span>
                      <span className="text-xs md:text-sm" style={{ color: c.tierTextColor }}>{c.tier}</span>
                    </div>

                    {/* Chip */}
                    <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 w-10 h-8 md:w-12 md:h-9 rounded-md bg-gradient-to-br from-yellow-200 to-yellow-500 opacity-90" />

                    <div className="flex items-end justify-between">
                      <div className="text-[10px] md:text-xs tracking-widest font-mono" style={{ color: c.tierTextColor }}>
                        •••• •••• •••• 2026
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="size-7 md:size-9 rounded-full bg-[#EB001B]" />
                        <div className="size-7 md:size-9 rounded-full bg-[#F79E1B] -ml-2.5 mix-blend-screen" />
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-3 lg:-left-6 size-10 lg:size-12 bg-white border-none shadow-lg hover:bg-white" />
            <CarouselNext className="hidden md:flex -right-3 lg:-right-6 size-10 lg:size-12 bg-white border-none shadow-lg hover:bg-white" />
          </Carousel>
        </div>

        <motion.div
          key={active.key}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 text-center max-w-xl mx-auto"
        >
          <p className="font-semibold text-ink text-xl">{active.tier}</p>
          <p className="mt-3 text-muted-foreground text-lg md:text-xl">{active.desc}</p>
          <button
            className="mt-6 inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-ink transition-transform hover:scale-105"
            style={{ backgroundColor: "#CDE8D7" }}
          >
            {active.cta}
          </button>

          <div className="mt-8 flex items-center justify-center gap-2">
            {CARDS.map((c, i) => (
              <button
                key={c.key}
                onClick={() => api?.scrollTo(i)}
                aria-label={`Go to ${c.tier}`}
                className="h-2 rounded-full transition-all"
                style={{
                  width: current === i ? 28 : 8,
                  backgroundColor: current === i ? "#0a0a0a" : "#0a0a0a40",
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
