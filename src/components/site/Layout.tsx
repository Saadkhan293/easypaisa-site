import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { EllOChat } from "./EllOChat";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <EllOChat />
    </div>
  );
}
