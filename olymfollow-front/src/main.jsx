import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Landing } from "./components/Landing/Landing.jsx";
import { Error } from "./components/ErrorPage/Error.jsx";
import { QuadroMedalhas } from "./components/Medalhas/QuadroMedalhas.jsx";
import { ListaPaises } from "./components/Paises/ListaPaises.jsx";
import { ListaEsportes } from "./components/Esportes/Esportes.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {Settings} from "./components/Settings/Settings.jsx";
import {UserInfo} from "./components/UserInfo/UserInfo.jsx";
import {DangerZone} from "./components/DangeZone/DangeZone.jsx";

const isAuthenticated = () => sessionStorage.getItem("token") !== null;
const ProtectedRoute = ({ children }) => (isAuthenticated() ? children : null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/login",
    element: (
        <Login />
    ),
    errorElement: <Error />,
  },
  {
    path: "/settings",
    element: (
        <Settings />
    ),
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: (
        <Register/>
    ),
    errorElement: <Error />,
  },
  {
    path: "/medalhas",
    element: (
      <ProtectedRoute>
        <QuadroMedalhas />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/paises",
    element: (
      <ProtectedRoute>
        <ListaPaises />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  },
  {
    path: "/esportes",
    element: (
      <ProtectedRoute>
        <ListaEsportes />
      </ProtectedRoute>
    ),
    errorElement: <Error />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
