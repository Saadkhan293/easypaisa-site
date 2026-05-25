import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — easypaisa" },
      { name: "description", content: "The story behind Pakistan's everyday digital wallet." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-semibold">We're rewriting how Pakistan moves money.</h1>
        <p className="mt-8 text-xl text-muted-foreground">
          easypaisa started with a simple idea — that everyone deserves financial tools that just
          work. Today, more than 40 million people use easypaisa to pay, save and grow.
        </p>
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          {[["40M+","Active users"],["100M+","Daily transactions"],["2009","Founded"]].map(([n,l]) => (
            <div key={l}>
              <div className="font-display text-5xl text-mint-deep">{n}</div>
              <div className="mt-2 text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
        <div className="mt-16 prose max-w-none text-foreground">
          <h2 className="text-3xl font-semibold">Our mission</h2>
          <p className="text-muted-foreground text-lg">
            To make financial services accessible, simple and delightful for every Pakistani —
            from Karachi to Khyber.
          </p>
        </div>
      </section>
    </Layout>
  );
}
