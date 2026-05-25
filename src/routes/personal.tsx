import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import mockup from "@/assets/mobile-mockup.png";

export const Route = createFileRoute("/personal")({
  head: () => ({
    meta: [
      { title: "Personal — easypaisa" },
      { name: "description", content: "An easypaisa account built for your everyday life." },
    ],
  }),
  component: Personal,
});

function Personal() {
  return (
    <Layout>
      <section style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink">Your personal wallet.</h1>
            <p className="mt-6 text-lg text-ink/75 max-w-md">
              Send, spend, save and grow — all from one beautifully simple app, designed for
              everyday Pakistan.
            </p>
            <a href="#" className="mt-8 inline-flex rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold">Open my account</a>
          </div>
          <img src={mockup} alt="" className="max-h-[520px] mx-auto" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          ["Free Raast transfers","Send instantly to any bank or wallet."],
          ["Savings pots","Set goals and automate your saving."],
          ["Virtual cards","Shop online safely with disposable cards."],
          ["Bill payments","Every utility, every operator, one tap."],
          ["Mobile top-ups","Recharge any number in seconds."],
          ["Cashback rewards","Earn back on what you already buy."],
        ].map(([t,d]) => (
          <div key={t} className="rounded-3xl border border-border p-8 bg-card">
            <h3 className="text-2xl font-semibold">{t}</h3>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
