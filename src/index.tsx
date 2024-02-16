import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { Routes } from "./routes";
import { SpecModule } from "./moduls";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <SpecModule.Container>
          <Routes />
          <Toaster />
        </SpecModule.Container>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
