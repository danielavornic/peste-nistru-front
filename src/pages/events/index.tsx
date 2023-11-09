import { Layout, ProductCategoriesBanner } from "@/components";
import {
  Button,
  Card,
  CardBody,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  VStack,
  Text,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaThList } from "react-icons/fa";
import { useTranslations } from "next-intl";

const Events = () => {
  const t = useTranslations();
  const [listingView, setListingView] = useState<"list" | "grid">("list");

  return (
    <Layout full hasFooter>
      <Flex w={"full"} h="250px" bg="brand.500" mb={16}>
        <VStack w={"full"} justify={"center"} px={8}>
          <Stack w="full" maxW={"8xl"} align={"flex-start"} justifyContent="start" spacing={6}>
            <Text color={"white"} fontSize="xl">
              Dialoguri peste Nistru
            </Text>
            <Heading color={"white"} fontSize="6xl">
              {t("events.title")} <br />{" "}
            </Heading>
          </Stack>
        </VStack>
      </Flex>
      <Container
        as="section"
        mb={20}
        maxW="8xl"
        h="full"
        alignItems="start"
        justifyContent="space-between"
      >
        <VStack spacing={8} w="100%" alignItems="start">
          <ProductCategoriesBanner />
          <Card shadow="sm " w="full" border="1px solid" borderColor="gray.100">
            <CardBody py={4}>
              <HStack spacing={4} justifyContent="space-between" alignItems="center">
                <Heading size="md" textAlign="left">
                  50 evenimente găsite
                </Heading>

                <HStack spacing={2}>
                  <Button
                    w={10}
                    h={10}
                    variant={listingView === "list" ? "solid" : "outline"}
                    colorScheme="gray"
                    onClick={() => setListingView("list")}
                  >
                    <Icon as={FaThList} />
                  </Button>
                  <Button
                    w={10}
                    h={10}
                    variant={listingView === "grid" ? "solid" : "outline"}
                    colorScheme="gray"
                    onClick={() => setListingView("grid")}
                  >
                    <Icon as={TfiLayoutGrid2Alt} />
                  </Button>
                </HStack>
              </HStack>
            </CardBody>
          </Card>

          {/* {listingView === "grid" ? (
            <ProductsGrid products={products} cols={3} />
          ) : (
            <ProductsList products={products} />
          )} */}
        </VStack>
      </Container>
    </Layout>
  );
};

export default Events;
