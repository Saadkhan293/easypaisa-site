import { motion } from "framer-motion";
import { Reveal } from "./motion";
import coffee1 from "@/assets/coffee-1.jpg";
import coffee2 from "@/assets/coffee-2.jpg";
import coffee3 from "@/assets/coffee-3.jpg";
import coffee4 from "@/assets/coffee-4.jpg";

type Brand = {
  name: string;
  initial: string;
  discount: string;
  bg: string;
  text: string;
  logoBg?: string;
  image: string;
};

const LEFT_BRANDS: Brand[] = [
  { name: "Tim Hortons",    initial: "T",  discount: "15% OFF",      bg: "bg-[#f3e4dd]", text: "text-[#7a1f1f]", logoBg: "bg-[#7a1f1f] text-white", image: coffee1 },
  { name: "Starbucks",      initial: "S",  discount: "20% OFF",      bg: "bg-[#dfeee4]", text: "text-[#0b6b3a]", logoBg: "bg-[#0b6b3a] text-white", image: coffee2 },
  { name: "Espresso Lab",   initial: "E",  discount: "10% OFF",      bg: "bg-[#f5ede0]", text: "text-[#5b4632]", logoBg: "bg-[#5b4632] text-white", image: coffee4 },
  { name: "Mocca",          initial: "M",  discount: "Buy 1 Get 1",  bg: "bg-[#ece9e4]", text: "text-[#1a1a1a]", logoBg: "bg-[#1a1a1a] text-white", image: coffee3 },
];

const RIGHT_BRANDS: Brand[] = [
  { name: "Gloria Jean's",  initial: "G",  discount: "BOGO",         bg: "bg-[#e8dfd6]", text: "text-[#2a1810]", logoBg: "bg-[#2a1810] text-white", image: coffee2 },
  { name: "Coffee Planet",  initial: "CP", discount: "25% OFF",      bg: "bg-[#fbe4d5]", text: "text-[#b85a2f]", logoBg: "bg-[#d97548] text-white", image: coffee3 },
  { name: "Chai Khana",     initial: "C",  discount: "12% OFF",      bg: "bg-[#efe2d2]", text: "text-[#6b3e1a]", logoBg: "bg-[#8b5a2b] text-white", image: coffee4 },
  { name: "Butlers",        initial: "B",  discount: "30% OFF",      bg: "bg-[#f1e7d6]", text: "text-[#7a5a2b]", logoBg: "bg-[#7a5a2b] text-white", image: coffee1 },
];

function BrandCard({ b }: { b: Brand }) {
  return (
    <div className={`relative w-full aspect-[4/5] rounded-3xl ${b.bg} overflow-hidden p-5 flex flex-col justify-between shrink-0`}>
      {/* Header: logo + name */}
      <div className="flex items-center gap-2.5 relative z-10">
        <div className={`size-8 rounded-full ${b.logoBg ?? "bg-ink text-white"} flex items-center justify-center font-bold text-[13px]`}>
          {b.initial}
        </div>
        <span className={`font-semibold text-base ${b.text}`}>{b.name}</span>
      </div>

      {/* Product image */}
      <img
        src={b.image}
        alt={b.name}
        loading="lazy"
        width={512}
        height={640}
        className="absolute inset-x-0 bottom-0 w-full h-[72%] object-cover object-center mix-blend-multiply"
      />

      {/* Footer: discount pill */}
      <div className="relative z-10">
        <span className="inline-flex items-center rounded-full bg-white/95 backdrop-blur text-ink px-3 py-1.5 text-[13px] font-bold uppercase tracking-wider shadow-sm">
          {b.discount}
        </span>
      </div>
    </div>
  );
}

function ScrollingColumn({ brands, direction = "up", duration = 28 }: { brands: Brand[]; direction?: "up" | "down"; duration?: number }) {
  // Duplicate the list for a seamless loop
  const loop = [...brands, ...brands];
  const from = direction === "up" ? "0%" : "-50%";
  const to = direction === "up" ? "-50%" : "0%";

  return (
    <div className="relative h-[560px] md:h-[640px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_12%,#000_88%,transparent)]">
      <motion.div
        className="flex flex-col gap-5"
        initial={{ y: from }}
        animate={{ y: to }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((b, i) => (
          <BrandCard key={`${b.name}-${i}`} b={b} />
        ))}
      </motion.div>
    </div>
  );
}

export function CoffeeDiscounts() {
  return (
    <section className="bg-white rounded-t-[3rem]">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-base font-semibold uppercase tracking-widest text-mint-deep">Cafés you love</span>
            <h2 className="mt-3 text-[38px] md:text-[50px] font-semibold leading-[1.05]">
              Brands you love. <em className="not-italic text-mint-deep">Discounts you'll crave.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center">
          {/* Left scrolling column */}
          <ScrollingColumn brands={LEFT_BRANDS} direction="up" duration={30} />

          {/* Center: animated counter + CTA */}
          <Reveal>
            <div className="text-center px-2 py-10">
              <div className="flex items-start justify-center leading-none">
                <span className="text-[120px] md:text-[160px] font-bold tracking-tight text-ink">7</span>
                <span className="text-4xl md:text-5xl font-bold text-ink mt-3 md:mt-4">%</span>
              </div>
              <div className="text-3xl md:text-4xl font-semibold text-ink -mt-2 md:-mt-4">back</div>
              <p className="mt-5 text-base text-muted-foreground max-w-xs mx-auto">
                Get hundreds of offers from your favourite coffee shops, every day.
              </p>
              <a
                href="#download"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink text-ink px-7 py-3 text-sm font-semibold hover:bg-ink hover:text-white transition"
              >
                Browse Offers
              </a>
              <p className="mt-4 text-xs text-muted-foreground">
                Check offers for details. <span className="underline">Terms and exclusions apply.</span>
              </p>
            </div>
          </Reveal>

          {/* Right scrolling column (opposite direction) */}
          <ScrollingColumn brands={RIGHT_BRANDS} direction="down" duration={34} />
        </div>
      </div>
    </section>
  );
}
