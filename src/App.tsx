import { lazy } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { Header } from "@/molecules/Header";

const Home = lazy(() => import("./pages/home"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-20 shadow-lg w-100 dark:bg-gray-700">
              <Header />
              <Outlet />
            </div>
          }
        >
          <Route index element={<Navigate to={"home"} />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
