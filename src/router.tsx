import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./shared/components/Layout";
import Home from "./features/home";
import Experience from "./features/experience";
import Skills from "./features/skills";
import About from "./features/about";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/experience", element: <Experience /> },
        { path: "/skills", element: <Skills /> },
        { path: "/about", element: <About /> },
      ],
    },
  ],
  { basename: "/cv" }
);
