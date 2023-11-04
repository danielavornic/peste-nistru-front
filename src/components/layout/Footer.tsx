import { Box, Container, Grid, Stack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("common");
  console.log("t", t("aboutProject"));

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
              {t("aboutProject")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("events")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("resourcesAndStudies")}
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              {t("participation")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("initiativeRegistration")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("forum")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("volunteering")}
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              {t("documentation")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("articles")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("reports")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("analysis")}
            </Text>
          </Stack>
          <Stack align={"flex-start"}>
            <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
              {t("contact")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("team")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("support")}
            </Text>
            <Text as="a" href="#" _hover={{ textDecoration: "underline" }}>
              {t("feedback")}
            </Text>
          </Stack>
        </Grid>
        <Stack pt={6} alignItems={"center"} borderTop={"1px solid"} borderColor="gray.200">
          <img src="/logo.png" width="100" alt="logo" />
          <Text pt={3}>
            © {new Date().getFullYear()} Dialoguri Peste Nistru. {t("rightsReserved")}
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
