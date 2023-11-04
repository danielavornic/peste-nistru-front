import { PropsWithChildren } from "react";
import Head from "next/head";
import { Footer, Header } from ".";
import { Container, VStack } from "@chakra-ui/react";

interface LayoutProps {
  title?: string;
  description?: string;
}

const DEFAULT_TITLE = "Dialoguri Peste Nistru";
const DEFAULT_DESCRIPTION =
  "Dialoguri Peste Nistru este un proiect care își propune să unească voci din ambele maluri ale Nistrului într-un dialog constructiv, pentru a găsi soluții comune la problemele cu care se confruntă societatea din Republica Moldova.";

export const Layout = ({ title, description, children }: PropsWithChildren<LayoutProps>) => {
  return (
    <>
      <Head>
        <title>{title ? `${title} | Dialoguri Peste Nistru` : DEFAULT_TITLE}</title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VStack
        minH="100vh"
        position="relative"
        overflowX="hidden"
        width="100%"
        spacing={0}
        align="stretch"
        justifyContent="space-between"
        bg="whiteAlpha.900"
      >
        <Header />
        <Container
          maxW={["container.sm", "container.md", "container.lg", "8xl"]}
          h="full"
          flex="1"
          py={20}
          as="main"
        >
          {children}
        </Container>
        <Footer />
      </VStack>
    </>
  );
};
