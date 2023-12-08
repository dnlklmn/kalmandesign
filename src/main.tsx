import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./theme/global.css";
import "./theme/index.css";

declare global {
  namespace React.JSX {
    interface IntrinsicElements {
      "my-custom-element": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        // Define any additional props expected by <my-custom-element> here
        someCustomProp?: string;
        anotherCustomProp?: number;
      };
    }
  }
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
