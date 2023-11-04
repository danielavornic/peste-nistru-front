import { Box, Container, Grid, Stack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box borderTop="1px solid" borderColor="gray.200">
      <Container as={Stack} maxW={"8xl"} py={10}>
        <Grid
          columnGap={5}
          pb={6}
          templateColumns={{ sm: "repeat(2, 1fr)", md: "3fr 2.5fr 2.2fr 1fr" }}
        >
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Dialoguri Peste Nistru
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Despre Proiect
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Evenimente
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Resurse și Studii
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Participare
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Înscriere inițiative
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Forum
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Voluntariat
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Documentare
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Articole
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Rapoarte
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Analize
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              Contact
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Echipa
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Suport
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              Feedback
            </Text>
          </Stack>
        </Grid>
        <Stack pt={6} alignItems={"center"} borderTop={"1px solid"} borderColor="gray.200">
          <img src="/logo.png" width="100" alt="logo" />
          <Text pt={3}>
            © {new Date().getFullYear()} Dialoguri Peste Nistru. Toate drepturile rezervate.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
