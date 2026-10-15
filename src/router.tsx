import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import Home from "./features/home";
import Experience from "./features/experience";
import Skills from "./features/skills";
import About from "./features/about";
import Work from "./features/work";
import NotFound from "./features/not-found";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      // Keeps the nav and footer around a render error; unknown paths hit the "*" route.
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
        { path: "/work", element: <Work /> },
        { path: "*", element: <NotFound /> },
      ],
    },
  ],
  { basename: "/cv" },
);
