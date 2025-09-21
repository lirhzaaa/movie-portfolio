import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePages from "./pages/home";
import Footer from "./components/Elements/Footer";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePages />
    <Footer />
  </StrictMode>
);
