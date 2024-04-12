import { Suspense, lazy } from "react";
import "./App.css";
import {
  Routes,
  Route,
  Outlet,
  Navigate,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Header } from "@/molecules/Header";
import { Loader } from "./components/Loader";
import axios from "axios";

const Home = lazy(() => import("./pages/home"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));

const routes = createRoutesFromElements(
  <Route
    path="/"
    element={
      <>
        <div className="h-20 shadow-lg w-100 dark:bg-gray-700">
          <Header />
        </div>
        <main className="overflow-scroll h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </>
    }
  >
    <Route index element={<Navigate to={"home"} />} />
    <Route
      path="home/*"
      key={"home-1"}
      id="home"
      loader={async () => {
        console.log("hi?", import.meta.env, "env");
        return (await axios.get(`${import.meta.env.VITE_APP_HN_API}/search`))
          .data;
        // return json({ abc: "1" });
      }}
      element={
        <Routes>
          <Route
            path="/"
            key={"home"}
            element={
              <Suspense fallback={<Loader />}>
                <Home />
                <Outlet />
              </Suspense>
            }
          >
            <Route
              path="item/:id"
              element={
                <Suspense fallback={<Loader />}>
                  <ItemDetails />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      }
    />
  </Route>
);

const routers = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
