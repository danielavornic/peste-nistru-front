import { Avatar, AvatarBadge, HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { IconButton, Text } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const chats = [
  {
    id: 1,
    name: "Daniela Vornic",
    lastMessage: "Salut, cum te cheamă?",
  },
  {
    id: 2,
    name: "Ion Creangă",
    lastMessage: "Salut, cum te cheamă?",
  },
  {
    id: 3,
    name: "Mihai Eminescu",
    lastMessage: "Salut, cum te cheamă?",
  },
  {
    id: 4,
    name: "Alexandru cel Bun",
    lastMessage: "Salut, cum te cheamă?",
  },
  {
    id: 5,
    name: "Stefan cel Mare",
    lastMessage: "Salut, cum te cheamă?",
  },
];

export const ChatSidebar = () => {
  const t = useTranslations("chat");
  const router = useRouter();
  const { id } = router.query;

  return (
    <VStack w="35%" h="100%" py={10} pl={12} pr={8} alignItems="flex-start" bg="white">
      <HStack w="100%" justifyContent="space-between">
        <Heading as="h2" size="lg">
          {t("myChats")}
        </Heading>
      </HStack>

      <VStack w="100%" spacing={4} alignItems="flex-start" mt={6} minH="75vh">
        {chats.length === 0 ? (
          <Text color="gray.500">{t("noChats")}</Text>
        ) : (
          <>
            {chats.map((chat) => {
              const isActive = id === String(chat.id);

              return (
                <Link key={chat.id} href={`/chat/${chat.id}`} passHref style={{ width: "100%" }}>
                  <HStack
                    w="100%"
                    bg={isActive ? "white" : "#fbfdfe"}
                    border="1px solid"
                    borderColor={isActive ? "brand.500" : "transparent"}
                    shadow={"sm"}
                    p={4}
                    borderRadius={8}
                    spacing={4}
                  >
                    <Avatar size="sm" name={chat.name} bg="gray.500" color="white">
                      <AvatarBadge boxSize="1em" bg="green.500" />
                    </Avatar>
                    <VStack spacing={1} alignItems="flex-start">
                      <Text size="md" fontWeight="bold">
                        {chat.name}
                      </Text>
                      <Text size="sm" color="gray.500">
                        {chat.lastMessage}
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              );
            })}
          </>
        )}
      </VStack>
    </VStack>
  );
};
