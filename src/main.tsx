// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ThemeProvider } from "./components/theme-provider";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme" >
    <App />
    </ThemeProvider>
  </BrowserRouter>
);
