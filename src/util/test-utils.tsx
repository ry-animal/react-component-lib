import { render, RenderOptions } from "@testing-library/react";
import "jest-styled-components";
import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LIGHT_THEME } from "../theme";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={LIGHT_THEME}>{children}</ThemeProvider>
    </BrowserRouter>
  );
}

const customRender = (
  ui: JSX.Element,
  options?:
    | RenderOptions<
        typeof import("@testing-library/dom/types/queries"),
        HTMLElement
      >
    | undefined
) => render(ui, { wrapper: Providers, ...options });

// Duplicated instead of import "../../__mocks__/matchMediaMock"; because jest has trouble resolving imports
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Re-export everything
export * from "@testing-library/react";
// Override render method
export { customRender as render };
