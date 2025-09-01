import { createBrowserRouter } from "react-router";
import App from "./App";
import Usuario from "./pages/Usuario/page";

export const router = createBrowserRouter([
  { path: "/", Component: App },
  {path: "/usuario", Component: Usuario}
]);