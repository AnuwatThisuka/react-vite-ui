import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "./components/common/tailwindIndicator.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster />
    <TailwindIndicator />
  </React.StrictMode>
);
