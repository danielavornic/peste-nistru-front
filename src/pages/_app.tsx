import "@/styles/globals.css";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "@/context";

import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";

import ro from "@/dictionaries/ro.json";
import ru from "@/dictionaries/ru.json";
import en from "@/dictionaries/en.json";

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

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();
  const messages = locale === "en" ? en : locale === "ru" ? ru : ro;

  return (
    <NextIntlClientProvider messages={messages}>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </ChakraProvider>
    </NextIntlClientProvider>
  );
}

export default MyApp;
