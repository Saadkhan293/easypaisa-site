import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal, Stagger, StaggerItem, FloatY } from "@/components/site/motion";
import heroProtagonist from "@/assets/hero-protagonist.png";
import mobileMockup from "@/assets/mobile-mockup.png";
import merchantMobile from "@/assets/bussiness/ep-merchant-mobile.png";
import retailerImg from "@/assets/bussiness/ep-retailer-img-e1770796755112.png";
import qrImage from "@/assets/bussiness/QR.png";
import taajirAccount from "@/assets/bussiness/Taajir-Account.png";
import shajarAccount from "@/assets/bussiness/Shajar-Account.png";
import superChecker from "@/assets/bussiness/Super-Checker.png";
import superSaver from "@/assets/bussiness/Super-Saver-Account.png";
import khasBachat from "@/assets/bussiness/Khas-Bachat.png";
import womenLoan from "@/assets/bussiness/Karobari-Qarza-for-Women.png";
import karobarLoan from "@/assets/bussiness/Karobar-Loan.png";
import microLoan from "@/assets/bussiness/Microenterprise-Loan.png";
import dairyLoan from "@/assets/bussiness/Dairy-Loan_.png";
import sarmayaQarza from "@/assets/bussiness/easypaisa-Sarmaya-Qarza.png";
import { CheckCircle2, BarChart3, QrCode, DollarSign, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business — easypaisa" },
      {
        name: "description",
        content:
          "Smart and secure tools to scale your business across Pakistan with digital-first solutions.",
      },
      { property: "og:title", content: "Business — easypaisa" },
      { property: "og:description", content: "Har business ka easy partner" },
    ],
  }),
  component: Business,
});

function Business() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-mint py-20 md:py-32">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-white/40 blur-3xl" />
          <div className="absolute right-[15%] top-[40%] h-80 w-80 rounded-full bg-mint-deep/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="mb-4 inline-block text-[13px] font-bold uppercase tracking-widest text-ink/70">
                  Business Banking
                </span>
                <h1 className="mb-6 font-display text-[48px] font-bold leading-[1.1] tracking-tight text-ink md:text-[64px]">
                  Har business ka <span className="text-mint-deep">easy partner</span>
                </h1>
                <p className="mb-8 max-w-xl text-lg text-ink/70 md:text-xl">
                  Smart and secure tools to scale your business across Pakistan with digital-first
                  solutions.
                </p>
                <button className="inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-xl">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </Reveal>

            <FloatY>
              <div className="relative flex justify-center">
                <img
                  src={heroProtagonist}
                  alt="Business Banking"
                  className="w-full max-w-xl object-cover"
                />
              </div>
            </FloatY>
          </div>
        </div>
      </section>

      {/* CORPORATE ACCOUNT CARD */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-card shadow-xl">
            <div className="grid items-center gap-12 p-8 md:grid-cols-2 md:gap-16 md:p-12 lg:p-16">
              <Reveal>
                <div>
                  <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                    Corporate
                  </span>
                  <h2 className="mb-6 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                    Corporate Account
                  </h2>
                  <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                    Open and manage your business finances with enterprise-grade features and
                    unparalleled security.
                  </p>
                  <button className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105">
                    Apply Now
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </div>
              </Reveal>

              <FloatY delay={0.2}>
                <div className="relative flex justify-center">
                  <img
                    src={mobileMockup}
                    alt="Corporate Account"
                    className="max-w-[300px] rounded-3xl object-contain"
                  />
                </div>
              </FloatY>
            </div>
          </div>
        </div>
      </section>

      {/* E-BANKING PORTAL */}
      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <FloatY>
              <div className="relative order-2 flex justify-center md:order-1">
                <img
                  src={qrImage}
                  alt="e-banking portal"
                  className="w-full max-w-sm rounded-3xl object-cover shadow-2xl"
                />
              </div>
            </FloatY>

            <Reveal>
              <div className="order-1 md:order-2">
                <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                  Real-time Controls
                </span>
                <h2 className="mb-6 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                  e-banking portal
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Access real-time transactions and controls online. Monitor your cash flow and
                  manage team permissions from a single dashboard.
                </p>
                <button className="inline-flex items-center gap-2 font-semibold text-mint-deep transition-all hover:gap-3">
                  Explore more
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MERCHANT SERVICES */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-card p-8 shadow-xl md:p-12 lg:p-16">
            <Reveal>
              <div className="mb-12 text-center">
                <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                  Merchant Services
                </span>
                <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                  easypaisa merchant
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Shop choti ya bari, payments easy.
                </p>
              </div>
            </Reveal>

            <FloatY>
              <div className="flex justify-center">
                <img
                  src={merchantMobile}
                  alt="Merchant App"
                  className="w-full max-w-xl object-cover"
                />
              </div>
            </FloatY>
          </div>
        </div>
      </section>

      {/* RETAILER SECTION */}
      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <FloatY>
              <div className="relative flex justify-center">
                <img
                  src={retailerImg}
                  alt="Retailer"
                  className="w-full max-w-xl object-cover"
                />
              </div>
            </FloatY>

            <Reveal>
              <div>
                <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                  Retailer Network
                </span>
                <h2 className="mb-6 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                  easypaisa retailer
                </h2>
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  Easy services se barhao business. Grow your existing shop by offering digital
                  banking services to your community.
                </p>
                <ul className="mb-8 space-y-4">
                  {retailerBenefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 font-medium text-ink">
                      <div className="h-2 w-2 rounded-full bg-mint-deep" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center gap-2 rounded-full bg-mint-deep px-8 py-4 font-semibold text-primary-foreground transition-all hover:scale-105">
                  Become a Retailer
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MICROFINANCE DEPOSIT SERVICES */}
      <section className="bg-cream py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2.5rem] bg-card p-8 shadow-xl md:p-12 lg:p-16">
            <Reveal>
              <div className="mb-16 text-center">
                <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                  Savings
                </span>
                <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                  microfinance deposit services
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                  Accounts that grow with you, whether you're a saver or a business owner.
                </p>
              </div>
            </Reveal>

            <Stagger className="mb-8 grid gap-8 md:grid-cols-3">
              {depositAccounts.slice(0, 3).map((account) => (
                <StaggerItem key={account.name}>
                  <div className="h-full rounded-2xl border border-border bg-background p-8 text-center transition-all hover:shadow-lg">
                    <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center">
                      <img src={account.image} alt={account.name} className="h-full w-full object-contain" />
                    </div>
                    <h4 className="mb-2 text-xl font-bold text-ink">{account.name}</h4>
                    <p className="text-sm text-muted-foreground">{account.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Stagger className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
              {depositAccounts.slice(3).map((account) => (
                <StaggerItem key={account.name}>
                  <div className="h-full rounded-2xl border border-border bg-background p-8 text-center transition-all hover:shadow-lg">
                    <h4 className="mb-2 text-xl font-bold text-ink">{account.name}</h4>
                    <p className="text-sm text-muted-foreground">{account.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* MICROFINANCE LOAN SERVICES */}
      <section className="bg-background py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <div className="mb-16 text-center">
              <span className="mb-4 block text-[13px] font-bold uppercase tracking-widest text-muted-foreground">
                Financing
              </span>
              <h2 className="mb-4 font-display text-[38px] font-bold leading-tight tracking-tight text-ink md:text-[50px]">
                microfinance loan services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Smart loans for every business goal.
              </p>
            </div>
          </Reveal>

          <Stagger className="mb-12 grid gap-8 md:grid-cols-3">
            {loanServices.slice(0, 3).map((loan) => (
              <StaggerItem key={loan.name}>
                <div className="group overflow-hidden rounded-3xl border border-border bg-card transition-all hover:border-mint-deep hover:shadow-lg">
                  <div className="flex h-32 w-full items-center justify-center bg-muted p-6">
                    <img
                      src={loan.image}
                      alt={loan.name}
                      className="h-full w-full object-contain transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="mb-3 text-xl font-bold text-ink">{loan.name}</h4>
                    <p className="mb-6 text-sm text-muted-foreground">{loan.description}</p>
                    <button className="inline-flex items-center gap-2 text-sm font-bold text-mint-deep">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Stagger className="grid gap-8 md:grid-cols-2">
            {loanServices.slice(3).map((loan) => (
              <StaggerItem key={loan.name}>
                <div className="flex items-center gap-8 rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-lg">
                  <div className="flex h-32 w-32 shrink-0 items-center justify-center">
                    <img src={loan.image} alt={loan.name} className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold text-ink">{loan.name}</h4>
                    <p className="text-sm text-muted-foreground">{loan.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </Layout>
  );
}

const merchantFeatures = [
  {
    icon: CheckCircle2,
    title: "Instant Registration",
    description: "Get started in minutes without paperwork.",
  },
  {
    icon: BarChart3,
    title: "Dedicated Dashboard",
    description: "Complete overview of your business.",
  },
  {
    icon: QrCode,
    title: "QR Payments",
    description: "Receive payments via QR instantly.",
  },
  {
    icon: DollarSign,
    title: "Rs. 500k Limit",
    description: "High monthly transaction limits.",
  },
];

const retailerBenefits = ["Track Commission", "Real-time Balance View", "Dedicated e-agent App"];

const depositAccounts = [
  {
    name: "Tajir Current Account",
    description: "Flexible current account for traders and entrepreneurs.",
    image: taajirAccount,
  },
  {
    name: "Shajar Account",
    description: "Grow your savings steadily with profit every month.",
    image: shajarAccount,
  },
  {
    name: "Super Checker",
    description: "Instant access and control for regular transactions.",
    image: superChecker,
  },
  {
    name: "Super Saver Account",
    description: "Earn higher returns while keeping your money accessible.",
    image: superSaver,
  },
  {
    name: "Khas Bachat",
    description: "Exclusive savings for planned goals and long-term security.",
    image: khasBachat,
  },
];

const loanServices = [
  {
    name: "Karobari Qarza for Women",
    description: "Tailored financing for women-led businesses looking to expand.",
    image: womenLoan,
  },
  {
    name: "Karobar Loan",
    description: "Flexible funding to start, sustain or scale your small business.",
    image: karobarLoan,
  },
  {
    name: "Microenterprise Loan",
    description: "Fuel your growing enterprise with reliable and fast funding.",
    image: microLoan,
  },
  {
    name: "Dairy Loan",
    description: "Invest in better yields and expand your dairy operations.",
    image: dairyLoan,
  },
  {
    name: "easypaisa Sarmaya Qarza",
    description: "Meet your immediate needs with quick turnaround time.",
    image: sarmayaQarza,
  },
];
