import React from "react";
import ReactDOM from "react-dom/client";
import { Web3Modal } from "@web3modal/react";
import { ConfigOptions } from "@web3modal/core";

import App from "./App";
import "./index.css";

const config: ConfigOptions = {
  projectId: "7e1f6fbac36705a5c94e68e2a19da660",
  theme: "light",
  accentColor: "blue",
  ethereum: {
    appName: "sub3",
    autoConnect: true,
  },
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Web3Modal config={config} />
  </React.StrictMode>
);
