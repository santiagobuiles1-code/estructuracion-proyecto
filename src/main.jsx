import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header";
import { Aside } from "./components/aside";
import { Footer } from "./components/Footer";
import { Index } from "./pages/Index.";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Aside />
    <Header />
    <Index />
    <Footer />
  </StrictMode>,
);
