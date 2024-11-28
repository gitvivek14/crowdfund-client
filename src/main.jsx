import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { StateContextProvider } from "./context/index.jsx";
import { Toaster } from "@/components/ui/toaster"
import './fonts/Futura/Futura-Bold.ttf';
import {ClerkProvider} from "@clerk/clerk-react"

// const chainID = 11155111;
const VITE_CLERK_PUBLISHABLE_KEY="pk_test_c3VpdGFibGUtcGFycm90LTk3LmNsZXJrLmFjY291bnRzLmRldiQ"

if (typeof global === "undefined") {
  var global = window;
}
createRoot(document.getElementById("root")).render(
  <Router>
  <ClerkProvider publishableKey={VITE_CLERK_PUBLISHABLE_KEY}>
    
      <StateContextProvider>
        <App />
        <Toaster/>
      </StateContextProvider>
      </ClerkProvider>
    </Router>
);
