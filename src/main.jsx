import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import { StateContextProvider } from "./context/index.jsx";
import { Toaster } from "@/components/ui/toaster"
import './fonts/Futura/Futura-Bold.ttf';
import {ClerkProvider} from "@clerk/clerk-react"

// const chainID = 11155111;
const PUBLISHABLE_KEY = "pk_test_cGxlYXNpbmctY29yZ2ktOTAuY2xlcmsuYWNjb3VudHMuZGV2JA"
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

if (typeof global === "undefined") {
  var global = window;
}


createRoot(document.getElementById("root")).render(
  <Router>
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}
  >
      <StateContextProvider>
        <App />
        <Toaster/>
      </StateContextProvider>
      </ClerkProvider>
    </Router>
);
