import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Example } from "../lib/main"; // Simula la importación de un paquete

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Example title="This is a template" />
  </StrictMode>
);
