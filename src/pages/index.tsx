import { Layout } from "@/components";
import {
  Flex,
  VStack,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
  Box,
  SimpleGrid,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { ReactElement } from "react";
import { FcAssistant, FcCollaboration, FcDonate, FcManager, FcAbout } from "react-icons/fc";

export default function Home() {
  const t = useTranslations();

  return (
    <Layout full hasFooter>
      <Flex w={"full"} h="300px" bg="brand.500">
        <VStack w={"full"} justify={"center"} px={8}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Text color={"white"} fontSize="xl">
              {t("home.platformDescription")}
            </Text>
            <Heading color={"white"} fontSize="6xl">
              {t("home.changeCommunityFuture")} <br />{" "}
              <span className="font-serif" style={{ fontWeight: 400 }}>
                {t("home.changeCommunityFuture2")}
              </span>
            </Heading>
          </Stack>
        </VStack>
      </Flex>

      <Container maxW="8xl" py={14}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading fontSize="4xl" mb={6}>
              {t("home.aboutUs")}
            </Heading>
            <Text fontSize="lg">{t("home.aboutUsDescription")}</Text>
          </Box>
          <Box>
            <Heading fontSize="4xl" mb={6}>
              {t("home.howItWorks")}
            </Heading>
            <Text fontSize="lg">{t("home.howItWorksDescription")}</Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="8xl" p={4} mb={16}>
        <Flex flexWrap="wrap" gridGap={7} justify="center">
          <Card
            heading={"Heading"}
            icon={<Icon as={FcAssistant} w={12} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcCollaboration} w={12} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcDonate} w={12} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          <Card
            heading={"Heading"}
            icon={<Icon as={FcManager} w={12} h={10} />}
            description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
            href={"#"}
          />
          {/* <Card
              heading={"Heading"}
              icon={<Icon as={FcAbout} w={12} h={10} />}
              description={"Lorem ipsum dolor sit amet catetur, adipisicing elit."}
              href={"#"}
            /> */}
        </Flex>
      </Container>
    </Layout>
  );
}

interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  const t = useTranslations();
  return (
    <Box
      maxW={{ base: "full", md: "330px" }}
      w={"full"}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={"start"} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.700"}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={"md"}>
            {description}
          </Text>
        </Box>
        <Button variant={"link"} colorScheme={"brand"} size={"sm"}>
          {t("common.learnMore")}
        </Button>
      </Stack>
    </Box>
  );
};
