import { Product } from "@/types";
import { Card, Stack, Text, HStack, Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import { FaUser } from "react-icons/fa";

const DESCRIPTION_LENGTH = 150;

export const ProductListItem = ({ product }: { product: Product }) => {
  const { name, description, seller, img } = product;

  return (
    <Link style={{ width: "100%" }} href={`/product/${product.id}`} rel="noopener noreferrer">
      <Card
        shadow="sm"
        p={4}
        w="full"
        _hover={{ transform: "translateY(-4px)" }}
        transition="all 0.2s"
      >
        <HStack spacing={10} w="90%">
          <Image
            src={img}
            alt={name}
            h="100%"
            maxH="100%"
            objectFit="cover"
            w="auto"
            maxW="180px"
          />{" "}
          <Stack spacing={2} w="full">
            <Text fontSize="2xl" fontFamily="poppins" fontWeight={600}>
              {name}
            </Text>
            <HStack align="center" mb={4} spacing={4}>
              <HStack spacing={2} align="center">
                <Box as={FaUser} fontSize="sm" color="brand.500" />
                <Text fontSize="sm">{seller.username}</Text>
              </HStack>
              {/* <HStack spacing={2}>
                <Box as={FaMapMarkerAlt} fontSize="sm" color="brand.500" />
                <Text fontSize="sm">{city.name}</Text>
              </HStack> */}
            </HStack>
            <Text fontSize="md">
              {description.length > DESCRIPTION_LENGTH
                ? description.slice(0, DESCRIPTION_LENGTH) + "..."
                : description}
            </Text>
          </Stack>
        </HStack>
      </Card>
    </Link>
  );
};
