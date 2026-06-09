import { Link } from "@tanstack/react-router";
import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  User,
  FileText,
  Wallet,
  CreditCard,
  Send,
  Shield,
  LayoutGrid,
  Banknote,
  Building2,
  Store,
  ShoppingBag,
  ChevronDown,
  Menu,
} from "lucide-react";
import logo from "@/assets/logo-transparent.png";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

type Item = {
  to: string;
  label: string;
  desc: string;
  icon: ComponentType<{ className?: string }>;
};

const personalItems: Item[] = [
  { to: "/personal", label: "My Account", desc: "Balance, history & profile", icon: User },
  {
    to: "/personal",
    label: "Zakat Declaration Form",
    desc: "File your annual Zakat",
    icon: FileText,
  },
  { to: "/personal", label: "Wealth Management", desc: "Grow your savings", icon: Wallet },
  { to: "/debit-cards", label: "Debit Cards", desc: "Virtual & physical cards", icon: CreditCard },
  { to: "/personal", label: "Payments", desc: "Send, receive & pay bills", icon: Send },
  { to: "/insurance", label: "Insurance", desc: "Health, life & travel", icon: Shield },
  { to: "/personal", label: "Mini Apps", desc: "Discover in-app services", icon: LayoutGrid },
  { to: "/personal", label: "Loans", desc: "Instant micro-loans", icon: Banknote },
];

const businessItems: Item[] = [
  {
    to: "/business",
    label: "Business Home",
    desc: "Your business dashboard",
    icon: Building2,
  },
  { to: "/business", label: "Merchants", desc: "Accept payments anywhere", icon: Store },
  { to: "/business", label: "Retailers", desc: "Point of sale tools", icon: ShoppingBag },
];

function MegaMenu({
  items,
  columns = 2,
}: Readonly<{ items: Item[]; columns?: 1 | 2 }>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.98 }}
      transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
      className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
    >
      <div className="relative">
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-primary/30 via-emerald-400/20 to-cyan-400/30 blur-xl opacity-70" />
        <div
          className="relative rounded-2xl border border-border/60 bg-background/95 p-3 shadow-2xl backdrop-blur-xl"
          style={{ width: columns === 2 ? 520 : 300 }}
        >
          <div className="grid gap-1" style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}>
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.025, duration: 0.2 }}
                >
                  <Link
                    to={item.to}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-all duration-200 hover:bg-gradient-to-br hover:from-primary/10 hover:to-emerald-500/5"
                  >
                    <div className="relative shrink-0">
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-emerald-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-emerald-500/15 text-primary transition-all duration-300 group-hover:from-primary group-hover:to-emerald-500 group-hover:text-primary-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
                        {item.label}
                      </div>
                      <div className="mt-0.5 truncate text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function DropdownTrigger({
  label,
  items,
  columns,
}: Readonly<{
  label: string;
  items: Item[];
  columns?: 1 | 2;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>{open && <MegaMenu items={items} columns={columns} />}</AnimatePresence>
    </div>
  );
}

function MobileSection({
  label,
  items,
  onNavigate,
}: Readonly<{
  label: string;
  items: Item[];
  onNavigate: () => void;
}>) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b border-border/60 pb-3">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between py-3 text-base font-semibold"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-1 pt-1">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={onNavigate}
                    className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-primary/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 to-emerald-500/15 text-primary">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-medium">{item.label}</div>
                      <div className="truncate text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const close = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2">
          <img src={logo} alt="easypaisa" className="h-10 w-auto sm:h-12" />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          <DropdownTrigger label="Personal" items={personalItems} columns={2} />
          <DropdownTrigger label="Business" items={businessItems} columns={1} />
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link to="/careers" className="hidden text-sm font-medium hover:underline sm:inline">
            Careers
          </Link>
          <Link to="/about" className="hidden text-sm font-medium hover:underline sm:inline">
            Help
          </Link>
          <a
            href="#download"
            className="hidden items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:inline-flex"
          >
            Get the app
          </a>
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border/60 transition hover:bg-muted md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[88%] flex-col gap-0 p-0 sm:max-w-sm">
              <div className="flex h-16 items-center border-b border-border px-4">
                <img src={logo} alt="easypaisa" className="h-9 w-auto" />
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-3">
                <MobileSection label="Personal" items={personalItems} onNavigate={close} />
                <MobileSection label="Business" items={businessItems} onNavigate={close} />
                <Link
                  to="/careers"
                  onClick={close}
                  className="block border-b border-border/60 py-4 text-base font-semibold"
                >
                  Careers
                </Link>
                <Link
                  to="/about"
                  onClick={close}
                  className="block border-b border-border/60 py-4 text-base font-semibold"
                >
                  Help
                </Link>
              </div>
              <div className="border-t border-border p-4">
                <a
                  href="#download"
                  onClick={close}
                  className="flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
                >
                  Get the app
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
