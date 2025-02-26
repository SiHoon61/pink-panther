import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/view/pages/Home";
import { Process } from "@/view/pages/Process";
import { About } from "@/view/pages/About";
import { MainPanel } from "@/view/layouts/MainPanel";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPanel />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export { AppRouter };
