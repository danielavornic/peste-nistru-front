import { useEffect, useState } from "react";
import { Button, Stack, VStack, Text } from "@chakra-ui/react";

import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useTranslations } from "next-intl";

const getImgSrc = (category: any) => `/images/categories/${category.name.toLowerCase()}.png`;

const data = [
  { id: 0, name: "Peace Talks" },
  { id: 1, name: "Virtual Events" },
  { id: 2, name: "Cultural Exchange" },
  { id: 3, name: "Community Building" },
  { id: 4, name: "Educational Workshops" },
  { id: 5, name: "Youth Engagement" },
  { id: 6, name: "Environmental Initiatives" },
  { id: 7, name: "Health and Wellness" },
  { id: 8, name: "Social Impact" },
];

export const ProductCategoriesBanner = () => {
  const [selectedCategory, setSelectedCategory] = useState<any | null>(data[0]);
  const [image, setImage] = useState<string | null>(null);
  const t = useTranslations();

  // const { data, isSuccess } = useQuery({
  //   queryKey: ["categories-banner"],
  //   queryFn: () => categories.getList(),
  // });

  useEffect(() => {
    if (selectedCategory) {
      setImage(getImgSrc(selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <Stack
      flexDir={["column", "column", "row"]}
      spacing={4}
      padding={4}
      w="full"
      shadow="sm"
      borderColor="gray.100"
      borderRadius={8}
      borderWidth={1}
      bg="white"
    >
      <VStack
        flex={1}
        spacing={2}
        align="flex-start"
        maxH={450}
        overflowY="auto"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {data.map((category: any) => (
          <Button
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            cursor="pointer"
            bg={selectedCategory === category ? "brand.100" : "white"}
            padding={4}
            borderRadius="md"
            border={1}
            borderColor="gray.100"
            width="full"
            justifyContent="flex-start"
          >
            {category.name}
          </Button>
        ))}
      </VStack>
      <VStack
        flex={1}
        spacing={8}
        align="flex-start"
        flexBasis="50%"
        height={450}
        bg={image ? `url(/images/categories/peace-talks.jpg)` : "gray.200"}
        backgroundSize="cover"
        backgroundPosition="center"
        width="full"
        py={10}
        px={16}
      >
        <VStack align="flex-start" color="white" spacing={0}>
          <Text fontSize="4xl">Latest trending</Text>
          <Text fontSize="4xl" fontWeight={800}>
            {selectedCategory?.name}
          </Text>
        </VStack>
        <Link href={`/search?category=${selectedCategory?.id}`}>
          <Button variant="solid" bg="white" color="gray.900" minW={40}>
            {t("common.learnMore")}
          </Button>
        </Link>
      </VStack>
    </Stack>
  );
};
