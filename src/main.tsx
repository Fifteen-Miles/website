import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { initAnalytics } from './lib/analytics'
import "./styles/fonts.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// init analytics after hydration
if (typeof window !== 'undefined') {
  try { initAnalytics() } catch (e) { console.warn('analytics init failed', e) }
}