import { HStack, Heading, IconButton, Text, VStack } from "@chakra-ui/react";
import { AiOutlineEllipsis } from "react-icons/ai";

interface ChatHeaderProps {
  title: string;
  description?: string;
}

export const ChatHeader = ({ title, description }: ChatHeaderProps) => {
  return (
    <HStack
      shadow="sm"
      p={4}
      my={10}
      mx={8}
      borderRadius={8}
      spacing={4}
      bg="white"
      justifyContent="space-between"
    >
      <HStack spacing={6}>
        <VStack spacing={1} alignItems="flex-start">
          <Heading size="md" as="h1" fontWeight="bold">
            {title}
          </Heading>
          <Text size="sm" color="gray.500">
            {description}
          </Text>
        </VStack>
      </HStack>

      <IconButton aria-label="Options" icon={<AiOutlineEllipsis />} rounded="full" />
    </HStack>
  );
};
