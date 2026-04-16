import { Outlet, ScrollRestoration } from "react-router-dom";
import Navigation from "./Navigation";
import { PageTransition } from "./PageTransition";

export const Layout = () => (
  <>
    <ScrollRestoration />
    <Navigation />
    <PageTransition>
      <Outlet />
    </PageTransition>
  </>
);
