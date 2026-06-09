import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal, Stagger, StaggerItem, FloatY, motion } from "@/components/site/motion";
import healthPlansImg from "@/assets/insurance/girl.png";
import lifePlansImg from "@/assets/insurance/Fahad.png";
import doctorConsultImg from "@/assets/insurance/picture.png";
import pocketPlansImg from "@/assets/insurance/pocket-size-plans-1.png";
import carBikePlansImg from "@/assets/insurance/cars-bike-plans.png";
import travelPlansImg from "@/assets/insurance/general-plans.png";
import { ArrowRight, ShieldCheck, Heart, Stethoscope, Key, Car, Plane, Sparkles } from "lucide-react";

export const Route = createFileRoute("/insurance")({
  head: () => ({
    meta: [
      { title: "Insurance — easypaisa" },
      {
        name: "description",
        content:
          "Plans to keep your life, future, and belongings secure when things do not go as planned.",
      },
      { property: "og:title", content: "Insurance — easypaisa" },
      { property: "og:description", content: "Comprehensive protection for what matters most" },
    ],
  }),
  component: Insurance,
});

function Insurance() {
  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 size-96 rounded-full bg-white/40 blur-3xl z-0"
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mint-deep bg-white/70 backdrop-blur rounded-full px-3 py-1"
              >
                <Sparkles className="size-3.5" /> Protection You Can Trust
              </motion.span>
              <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[0.95] text-ink">
                insurance marketplace
              </h1>
              <p className="mt-6 text-base md:text-lg text-ink/80 max-w-2xl mx-auto">
                Plans to keep your life, future, and belongings secure when things do not go as
                planned, with 40 plus plans across health, life, travel, and more.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE US - CARDS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-[38px] md:text-[50px] font-semibold">Protection that moves with you.</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Whether it's health emergencies, travel plans, or everyday risks — easypaisa insurance keeps you covered.
            </p>
          </div>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, title: "Instant claims", body: "File and track claims directly from the app with real-time updates." },
            { icon: Heart, title: "40+ plans", body: "Health, life, travel, vehicle — find the perfect coverage for every need." },
            { icon: Sparkles, title: "Trusted partners", body: "Backed by EFU, IGI, and leading insurers across Pakistan." },
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

      {/* HEALTH PLANS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <Heart className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Health Plans
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-md">
                All round health plans covering cancer care, hospital stays, maternity needs, and
                income support.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                Explore Health Plans
                <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>

          <FloatY>
            <div className="flex justify-center">
              <motion.img
                src={healthPlansImg}
                alt="Health Plans"
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>
        </div>
      </section>

      {/* LIFE PLANS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <FloatY range={10}>
            <div className="flex justify-center order-2 lg:order-1">
              <motion.img
                src={lifePlansImg}
                alt="Life Insurance"
                className="w-full max-w-[250px]"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>

          <Reveal>
            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <ShieldCheck className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Life
              </h2>
              <p className="mt-4 text-xl text-ink/75 max-w-md">
                Protection that supports you through life cover, hospital care, education
                continuation, and everyday expenses.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                Secure Your Future <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DOCTOR CONSULTATIONS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <Stethoscope className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Doctor Consultations
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-md">
                From checkups to maternity, stay covered with digital access to professionals.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                Book Now
                <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>

          <FloatY>
            <div className="flex justify-center">
              <motion.img
                src={doctorConsultImg}
                alt="Doctor Consultations"
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>
        </div>
      </section>

      {/* POCKET SIZE PLANS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <FloatY range={10}>
            <div className="flex justify-center order-2 lg:order-1">
              <motion.img
                src={pocketPlansImg}
                alt="Pocket Size Plans"
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>

          <Reveal>
            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <Key className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Pocket Size Plans
              </h2>
              <p className="mt-4 text-xl text-ink/75 max-w-md">
                Small plans that protect big headaches like lost keys, cards, passports, and
                more.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                View Mini Plans <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAR & BIKE PLANS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <Reveal>
            <div>
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <Car className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Car &amp; Bike Plans
              </h2>
              <p className="mt-4 text-xl text-muted-foreground max-w-md">
                Stay covered on every ride with vehicle protection and roadside assistance.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                Protect Your Ride
                <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>

          <FloatY>
            <div className="flex justify-center">
              <motion.img
                src={carBikePlansImg}
                alt="Car & Bike Insurance"
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>
        </div>
      </section>

      {/* HOW IT WORKS - STEPS CARDS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-[38px] md:text-[50px] font-semibold text-ink">Get insured in 3 simple steps.</h2>
              <p className="mt-4 text-xl text-ink/75">
                No paperwork, no delays — just instant coverage when you need it most.
              </p>
            </div>
          </Reveal>
          <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              { 
                step: "01", 
                title: "Browse & Compare", 
                body: "Explore 40+ insurance plans from trusted providers in one place." 
              },
              { 
                step: "02", 
                title: "Choose Your Plan", 
                body: "Select coverage that fits your needs and budget with transparent pricing." 
              },
              { 
                step: "03", 
                title: "Get Instant Coverage", 
                body: "Complete purchase in-app and receive your policy documents immediately." 
              },
            ].map((s) => (
              <StaggerItem key={s.step}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="rounded-3xl bg-white p-8 border border-border h-full shadow-lg"
                >
                  <div className="inline-flex items-center justify-center size-12 rounded-full bg-mint text-mint-deep font-bold text-xl">
                    {s.step}
                  </div>
                  <h3 className="mt-6 text-[26px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{s.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* TRAVEL PLANS */}
      <section className="relative overflow-hidden" style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <FloatY range={10}>
            <div className="flex justify-center order-2 lg:order-1">
              <motion.img
                src={travelPlansImg}
                alt="Travel Insurance"
                className="w-full max-w-md"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </FloatY>

          <Reveal>
            <div className="order-1 lg:order-2">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex"
              >
                <Plane className="size-12 text-mint-deep" />
              </motion.div>
              <h2 className="mt-6 text-[38px] md:text-[50px] font-semibold text-ink">
                Travel Plans
              </h2>
              <p className="mt-4 text-xl text-ink/75 max-w-md">
                Travel plans covering international trips and domestic travel with pay as you go
                flexibility.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold"
              >
                Get Quote <ArrowRight className="size-4" />
              </motion.button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-[38px] md:text-[50px] font-semibold max-w-2xl">Trusted by millions of Pakistanis.</h2>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { q: "Got my car insurance in under 5 minutes. The claim process was seamless.", n: "Ahmed S.", c: "Karachi" },
            { q: "Health coverage for my entire family. The app makes everything so easy.", n: "Fatima K.", c: "Lahore" },
            { q: "Travel insurance saved me during my Dubai trip when my luggage got lost.", n: "Bilal M.", c: "Islamabad" },
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

      {/* DISCLAIMERS */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <h2 className="text-[38px] md:text-[50px] font-semibold max-w-2xl">Important Information</h2>
        </Reveal>
        <Stagger className="mt-14 grid md:grid-cols-2 gap-6">
          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl bg-card border border-border p-8 h-full"
            >
              <h3 className="text-[26px] font-semibold text-ink">Disclaimer</h3>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  easypaisa acts solely as an insurance reseller and facilitator. The insurance
                  product is underwritten, managed, and serviced by authorized partners.
                </p>
                <p className="font-semibold text-ink">
                  Webdoc / EFU / oladoc / IGI / Healthwire (epharmacy)
                </p>
                <p>
                  All policy terms, coverage, claims, and obligations are the responsibility of
                  the underwriters.
                </p>
              </div>
            </motion.div>
          </StaggerItem>

          <StaggerItem>
            <motion.div
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-3xl bg-card border border-border p-8 h-full"
            >
              <h3 className="text-[26px] font-semibold text-ink">Claims &amp; Complaints</h3>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>
                  easypaisa provides a platform for seamless insurance discovery. For claims,
                  please contact the provider directly via the in-app support portal.
                </p>
                <p className="font-semibold text-ink">Contact: help@easypaisa.com.pk</p>
                <p>
                  easypaisa does not provide insurance advice or assume any insurance risk
                  directly.
                </p>
              </div>
            </motion.div>
          </StaggerItem>
        </Stagger>
      </section>
    </Layout>
  );
}
