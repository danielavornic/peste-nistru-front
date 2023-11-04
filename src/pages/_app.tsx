import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import { AuthProvider } from "@/context";

const theme = extendTheme({
  colors: {
    white: "#FFFFFF",
    black: "#1A1A1A",
    brand: {
      100: "rgb(14, 176, 133, 0.1)",
      400: "#0b8e6b",
      500: "#0EB085",
      600: "#0b8e6b",
    },
    accent: {
      200: "#fcdfcf",
      500: "#F7A072",
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}
