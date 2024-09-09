import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider,extendTheme } from "@chakra-ui/react";
import App from "./App.jsx";
import "./index.css";

export const theme=extendTheme({
  fonts:{
    body:"'Josefin Sans',sans-serif"
  }
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </StrictMode>
);
