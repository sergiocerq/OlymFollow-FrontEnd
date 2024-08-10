import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const isAuthenticated = () => localStorage.getItem("token") !== null;
const ProtectedRoute = ({ children }) => (isAuthenticated() ? children : null);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/landing",
  //   element: (
  //     <ProtectedRoute>
  //       <Landing/>
  //     </ProtectedRoute>
  //   ),
  //   errorElement: <ErrorPage />,
  // }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
