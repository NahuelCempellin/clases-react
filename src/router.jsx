import { createBrowserRouter } from "react-router-dom";
import Landing from "./components/landing/Landing";
import Layout from "./layout/Layout";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Landing />,
      },
      {
        path: "/about/:id",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
