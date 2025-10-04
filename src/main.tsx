import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StoreContextProvider>
    <Router>
      <App />
    </Router>
  </StoreContextProvider>
);
