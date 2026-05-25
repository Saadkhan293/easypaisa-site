import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import podium from "@/assets/podium.webp";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — easypaisa" },
      { name: "description", content: "Every feature built into the easypaisa app." },
    ],
  }),
  component: Features,
});

function Features() {
  return (
    <Layout>
      <section style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink">Everything in one app.</h1>
            <p className="mt-6 text-lg text-ink/75 max-w-md">
              Payments, savings, shopping, travel and gaming — discover everything easypaisa can do.
            </p>
          </div>
          <img src={podium} alt="" className="w-full max-w-xl mx-auto" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-2 gap-6">
        {[
          ["Travel","Book flights and hotels with member-only rates."],
          ["Gaming","Top up PUBG, Free Fire and more, instantly."],
          ["Investments","Grow your wealth with curated funds."],
          ["Insurance","Health and life cover starting at PKR 50/mo."],
        ].map(([t,d]) => (
          <div key={t} className="rounded-3xl border border-border p-10 bg-card">
            <h3 className="text-3xl font-semibold">{t}</h3>
            <p className="mt-4 text-muted-foreground text-lg">{d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
