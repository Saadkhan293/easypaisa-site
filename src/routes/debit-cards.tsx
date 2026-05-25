import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroRetailer from "@/assets/hero-retailer.png";
import appScreen from "@/assets/app-screen.jpeg";
import mockup from "@/assets/mobile-mockup.png";
import visaCard from "@/assets/Visa.png";
import unionCard from "@/assets/UNION.png";
import paypakCard from "@/assets/paypak.png";

export const Route = createFileRoute("/debit-cards")({
  head: () => ({
    meta: [
      { title: "Debit Cards — easypaisa" },
      {
        name: "description",
        content:
          "Debit cards built around how you spend, travel, and pay every day with easypaisa.",
      },
    ],
  }),
  component: DebitCardsPage,
});

const cardOptions = [
  {
    name: "Visa",
    tagline: "Global reach, local ease",
    badge: "Worldwide",
    image: visaCard,
  },
  {
    name: "UnionPay",
    tagline: "Travel easy, pay kaheen bhi",
    badge: "Travel",
    image: unionCard,
  },
  {
    name: "PayPak",
    tagline: "Local payments, zero stress",
    badge: "Pakistan",
    image: paypakCard,
  },
];

const faqs = [
  {
    question: "What makes an easypaisa debit card different?",
    answer:
      "It is designed to work with your easypaisa wallet first, so ordering, tracking, freezing, and spending controls all stay inside the app.",
  },
  {
    question: "Can I use it online and in stores?",
    answer:
      "Yes. You can pay online, tap in stores, and withdraw cash from supported ATMs, depending on the card network you choose.",
  },
  {
    question: "How do I manage the card after ordering it?",
    answer:
      "You can track delivery, change limits, freeze the card, and monitor every transaction directly from the easypaisa app.",
  },
  {
    question: "Is there an annual fee?",
    answer:
      "The landing page system positions debit cards as low-friction everyday products, so pricing and fee details should stay transparent and easy to understand inside the application flow.",
  },
];

function DebitCardsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-mint">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-16 size-80 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute right-0 bottom-0 size-96 rounded-full bg-mint-deep/15 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.2em] text-mint-deep">
              <Sparkles className="size-4" /> Debit cards
            </span>
            <h1 className="mt-6 max-w-xl text-[50px] font-semibold leading-[0.95] text-ink md:text-[74px]">
              Pocket-sized power for everyday spending.
            </h1>
            <p className="mt-6 max-w-xl text-xl text-ink/75">
              Pick a debit card that matches how you shop, travel, withdraw cash, and stay in
              control. Physical or digital, the ease stays real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#choose-card"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-semibold text-primary-foreground"
              >
                Apply now <ArrowRight className="size-4" />
              </a>
              <a
                href="#faqs"
                className="inline-flex items-center rounded-full bg-white/80 px-7 py-3.5 font-semibold text-ink transition hover:bg-white"
              >
                Explore FAQs
              </a>
            </div>
          </div>

          <div className="relative flex min-h-105 items-center justify-center lg:min-h-130">
            <img
              src={heroRetailer}
              alt="easypaisa customer holding a phone"
              className="relative z-10 max-h-115 w-auto object-contain drop-shadow-[0_30px_80px_rgba(15,42,31,0.18)] lg:max-h-140"
            />

            <div className="absolute left-[4%] top-[8%] z-20 -rotate-10 rounded-4xl bg-primary px-6 py-5 text-primary-foreground shadow-2xl sm:left-[8%]">
              <div className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
                easypaisa
              </div>
              <div className="mt-10 text-lg font-semibold">Debit Card</div>
              <div className="mt-12 text-xs tracking-[0.35em] text-primary-foreground/70">
                •••• 2026
              </div>
            </div>

            <div className="absolute bottom-[10%] right-[2%] z-20 rotate-12 rounded-4xl bg-white px-6 py-5 text-ink shadow-2xl sm:right-[10%]">
              <div className="text-xs uppercase tracking-[0.25em] text-mint-deep">easypaisa</div>
              <div className="mt-10 text-lg font-semibold">Travel Ready</div>
              <div className="mt-12 text-xs tracking-[0.35em] text-ink/60">UnionPay</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-6 rounded-[2.5rem] bg-white p-8 shadow-[0_20px_60px_-20px_rgba(15,42,31,0.12)] md:p-12 lg:grid-cols-2 lg:p-14">
          <div className="order-2 flex justify-center lg:order-1">
            <div className="relative w-full max-w-[320px] overflow-hidden rounded-4xl bg-primary p-3 shadow-2xl">
              <img
                src={appScreen}
                alt="easypaisa app screen"
                className="h-auto w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-mint-deep">
              In the app
            </span>
            <h2 className="mt-3 text-[38px] font-semibold leading-tight text-ink md:text-[50px]">
              Go physical or virtual, the ease stays real.
            </h2>
            <div className="mt-8 space-y-4">
              {[
                "Order your card without leaving the app.",
                "Track delivery and activate it when it arrives.",
                "Freeze, unfreeze, and manage limits anytime.",
                "Pay online, in stores, and withdraw cash with confidence.",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-mint-deep" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="choose-card" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-mint-deep">
            Choose your partner
          </span>
          <h2 className="mt-3 text-[38px] font-semibold text-ink md:text-[50px]">
            Pick the card that fits your spend style.
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Local payments, global reach, or travel-first convenience. The product stays simple,
            the use cases get sharper.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cardOptions.map((card) => (
            <div
              key={card.name}
              className="group rounded-3xl border border-border bg-white p-8 shadow-[0_16px_50px_-22px_rgba(15,42,31,0.18)] transition-transform hover:-translate-y-2"
            >
              <div className="flex aspect-[1.6/1] items-center justify-center p-5">
                <img
                  src={card.image}
                  alt={`${card.name} debit card`}
                  className="w-full max-w-65 rotate-[-18deg] object-contain drop-shadow-[0_20px_35px_rgba(15,42,31,0.22)] transition-transform duration-300 group-hover:rotate-[-22deg] group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-center justify-between gap-3">
                <h3 className="text-[26px] font-semibold text-ink">{card.name}</h3>
                <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-mint-deep">
                  {card.badge}
                </span>
              </div>
              <p className="mt-2 text-lg text-muted-foreground">{card.tagline}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-mint-deep">
              Total control
            </span>
            <h2 className="mt-3 text-[38px] font-semibold text-ink md:text-[50px]">
              Spend with confidence, manage everything from your phone.
            </h2>
            <p className="mt-4 max-w-xl text-xl text-muted-foreground">
              From first tap to fraud protection, your card experience should feel calm, clear,
              and immediate.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ["Real-time alerts", "Know where every rupee goes the moment it moves."],
                ["Safer online shopping", "Use virtual-first flows and app-managed controls."],
                ["Cash access", "Withdraw when needed through a large ATM network."],
                ["Freeze on demand", "Lock the card instantly if something feels off."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl bg-white p-6 shadow-[0_16px_40px_-24px_rgba(15,42,31,0.18)]">
                  <div className="inline-flex rounded-full bg-mint px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mint-deep">
                    Feature
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-base text-muted-foreground">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={mockup}
              alt="easypaisa mobile app mockup"
              className="max-h-160 w-auto drop-shadow-[0_24px_60px_rgba(15,42,31,0.18)]"
            />
          </div>
        </div>
      </section>

      <section id="faqs" className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[2.5rem] bg-secondary p-8 md:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-mint-deep">
                <ShieldCheck className="size-4" /> FAQs
              </span>
              <h2 className="mt-3 text-[38px] font-semibold text-ink md:text-[50px]">
                Got questions? We’ve got clear answers.
              </h2>
              <p className="mt-4 text-xl text-muted-foreground">
                Keep this section practical, direct, and reassuring. Debit cards are an everyday
                product, so the explanation should feel simple.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,42,31,0.18)] md:p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`item-${index}`}>
                    <AccordionTrigger className="py-5 text-left text-lg font-semibold text-ink hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}