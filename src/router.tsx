import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import Home from "./features/home";
import Experience from "./features/experience";
import Skills from "./features/skills";
import About from "./features/about";
import NotFound from "./features/not-found";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      // Keeps the nav and footer around a 404 instead of replacing the page.
      errorElement: (
        <Layout>
          <NotFound />
        </Layout>
      ),
      children: [
        { path: "/", element: <Home /> },
        { path: "/experience", element: <Experience /> },
        { path: "/skills", element: <Skills /> },
        { path: "/about", element: <About /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/cv" },
);
