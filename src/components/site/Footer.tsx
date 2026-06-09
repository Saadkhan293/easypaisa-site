import logo from "@/assets/logo-transparent.png";
import { Link } from "@tanstack/react-router";

export function Footer() {
  const cols = [
    { title: "Accounts", items: ["Personal", "Joint", "Business", "Teen"] },
    { title: "Features", items: ["Send money", "Save", "Spend abroad", "Bills"] },
    { title: "Company", items: [{ label: "About", to: "/" }, { label: "Careers", to: "/careers" }, { label: "Press", to: "/" }, { label: "Contact", to: "/" }] },
    { title: "Help", items: [{ label: "Support", to: "/" }, { label: "Security", to: "/" }, { label: "FAQs", to: "/" }, { label: "Status", to: "/" }] },
  ];
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="py-16">
        <div className="mb-12 text-center">
          <img src={logo} alt="easypaisa" className="h-16 w-full object-contain brightness-0 invert mb-4" />
          <p className="text-base text-primary-foreground/70 leading-relaxed mx-auto max-w-2xl px-6">
            Pakistan's everyday digital wallet — built for how you actually live.
          </p>
        </div>
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap justify-around gap-x-12 gap-y-8">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-lg mb-4">{c.title}</h4>
                <ul className="space-y-2 text-base text-primary-foreground/70">
                  {c.items.map((i) => (
                    <li key={typeof i === 'string' ? i : i.label}>
                      {typeof i === 'string' ? (
                        <Link to="/" className="hover:text-primary-foreground">{i}</Link>
                      ) : (
                        <Link to={i.to} className="hover:text-primary-foreground">{i.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-primary-foreground/60 flex flex-wrap gap-4 justify-between">
          <p>© {new Date().getFullYear()} easypaisa. All rights reserved.</p>
          <p>State Bank of Pakistan regulated · Your money, protected.</p>
        </div>
      </div>
    </footer>
  );
}
