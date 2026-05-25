import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import moneybag from "@/assets/moneybag.png";

export const Route = createFileRoute("/business")({
  head: () => ({
    meta: [
      { title: "Business — easypaisa" },
      { name: "description", content: "Accept payments and grow your business with easypaisa." },
    ],
  }),
  component: Business,
});

function Business() {
  return (
    <Layout>
      <section style={{ backgroundColor: "#CDE8D7" }}>
        <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-semibold text-ink">Built for business.</h1>
            <p className="mt-6 text-lg text-ink/75 max-w-md">
              From street stalls to startups — collect payments, manage cash flow and pay your team,
              all from one place.
            </p>
            <a href="#" className="mt-8 inline-flex rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold">Open a business account</a>
          </div>
          <img src={moneybag} alt="" className="max-h-[460px] mx-auto" />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24 grid md:grid-cols-3 gap-6">
        {[
          ["Merchant QR","Get paid by any Raast / Visa / Mastercard QR."],
          ["Payouts","Bulk salary and supplier payments in seconds."],
          ["Insights","Real-time dashboards of every rupee in and out."],
        ].map(([t,d]) => (
          <div key={t} className="rounded-3xl bg-secondary p-8">
            <h3 className="text-2xl font-semibold">{t}</h3>
            <p className="mt-3 text-muted-foreground">{d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
}
