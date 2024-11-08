import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context/index.jsx";
import { Toaster } from "@/components/ui/toaster"
import './fonts/Futura/Futura-Bold.ttf';

// const chainID = 11155111;

if (typeof global === "undefined") {
  var global = window;
}
createRoot(document.getElementById("root")).render(
    <Router>
      <StateContextProvider>
        <App />
        <Toaster/>
      </StateContextProvider>
    </Router>
);
