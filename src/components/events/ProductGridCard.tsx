import Link from "next/link";
import { Card, Image, CardBody, Text } from "@chakra-ui/react";

import { Product } from "@/types";

export const ProductGridCard = ({ product }: { product: Product }) => {
  const { id, name, img } = product;

  return (
    <Link href={`/product/${id}`} style={{ height: "100%" }}>
      <Card
        shadow="sm"
        py={3}
        h="full"
        _hover={{ transform: "translateY(-4px)", color: "brand.500" }}
        transition="all 0.2s"
      >
        <CardBody bg="white">
          <Image src={img} alt={name} borderRadius="lg" bg="gray.50" height="280px" objectFit='contain' />
          <Text fontSize="xl" fontFamily="poppins" fontWeight={600} mt={6} height="60px">
            {name}
          </Text>
        </CardBody>
      </Card>
    </Link>
  );
};
