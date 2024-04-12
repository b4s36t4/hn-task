/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../src/query/client";

const UIWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

const customRender = (ui: React.ReactNode, options?: RenderOptions) => {
  return render(ui, { wrapper: UIWithProviders, ...options });
};

export * from "@testing-library/react";

// override render method
export { customRender as render };
