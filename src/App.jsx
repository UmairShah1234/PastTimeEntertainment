  import "./App.css";
  import { Route, Routes, createBrowserRouter } from "react-router-dom";
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
  import Racing from "./pages/explore/Racing";
  import Retrogaming from "./pages/explore/Retrogaming";
import Maps from "./components/Maps";

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
        // links for products on the homepage
        {
          path: "/vrcricket",
          element: <Vrcricket />,
    },
    {
          path: "/arSports",
          element: <Arsports />,
    },
    {
          path: "/F1simulator",
          element: <F1simulator />,
    },
    {
      path: "/Gamingpc",
      element: <Gamingpc />,
},

        {
          path: "/contact-us",
          element: <Contact />,
        },
        {
          path: "/explore",
          element: <Explore />,
         },
        {
              path: "/explore/vrcricket",
              element: <Vrcricket />,
        },
        {
              path: "/explore/arSports",
              element: <Arsports />,
        },
        {
              path: "/explore/F1simulator",
              element: <F1simulator />,
        },
        {
              path: "/explore/Flightsimulator",
              element: <Flightsimulator />,
        },
        {
              path: "/explore/Vrboxing",
              element: <Vrboxing />,
        },
        {
              path: "/explore/Walktheplank",
              element: <Walktheplank />,
        },
        {
              path: "/explore/Vrrollercoaster",
              element: <Vrrollercoaster />,
        },
        {
              path: "/explore/Gamingpc",
              element: <Gamingpc />,
        },
        {
              path: "/explore/Arcadegaming",
              element: <Arcadegaming />,
        },
        {
              path: "/explore/Vrgolf",
              element: <Vrgolf />,
        },
        {
              path: "/explore/ArRacing",
              element: <Racing />,
        },
        {
              path: "/explore/Retrogaming",
              element: <Retrogaming />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/what-we-do",
          element: <About />,
        },
        {
          path: "/conflict-management",
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
