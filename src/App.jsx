import "./App.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";
import Events from "./pages/Events";
import About from "./pages/About";
import Training from "./pages/Training";
import Vrcricket from "./pages/explore/Vrcricket";
import Arsports from "./pages/explore/Arsports";
import F1simulator from "./pages/explore/F1simulator";
import Flightsimulator from "./pages/explore/Flightsimulator";
import Vrboxing from "./pages/explore/Vrboxing";
import Walktheplank from "./pages/explore/Walktheplank";
import Vrrollercoaster from "./pages/explore/Vrrollercoaster";
import Gamingpc from "./pages/explore/Gamingpc";
import Arcadegaming from "./pages/explore/Arcadegaming";
import Vrgolf from "./pages/explore/Vrgolf";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
      {
        path: "explore",
        element: <Vrgolf />,
        children: [
          {
            path: "vrcricket",
            element: <Vrcricket />,
          },
        ],
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "what-we-do",
        element: <About />,
      },
      {
        path: "conflict-management",
        element: <Training />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <></>
    </RouterProvider>
  );
}

export default App;
