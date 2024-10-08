import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import AppQueryProvider from "./providers/query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <HelmetProvider>
    <BrowserRouter>
      <Suspense>
        <AppQueryProvider>
          <App />
          {/* <Toaster />*/}
        </AppQueryProvider>
      </Suspense>
    </BrowserRouter>
  </HelmetProvider>
);
