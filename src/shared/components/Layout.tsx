import { Outlet, ScrollRestoration } from "react-router-dom";
import type { ReactNode } from "react";
import Navigation from "./Navigation";
import { PageTransition } from "./PageTransition";
import { Footer } from "./Footer";

interface LayoutProps {
  /**
   * Rendered instead of the route outlet. Used by the router's errorElement,
   * which sits outside the outlet but should still keep the nav and footer.
   */
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => (
  <>
    <ScrollRestoration />
    <a href="#main" className="skip-link">
      Skip to content
    </a>
    <Navigation />
    <main id="main" tabIndex={-1} className="px-gutter">
      <PageTransition>{children ?? <Outlet />}</PageTransition>
    </main>
    <Footer />
  </>
);
