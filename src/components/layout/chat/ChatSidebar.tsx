import { Avatar, AvatarBadge, HStack, Heading, Icon, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { chat } from "@/api";
import { useAuth } from "@/hooks";

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
  const { user } = useAuth();

  const { data, isSuccess } = useQuery({
    queryKey: ["chats"],
    queryFn: () => chat.getChatListByUserId(Number(user?.id) || 1),
  });

  return (
    <VStack
      width={["50%", "50%", "60%", "35%"]}
      h="100%"
      py={10}
      pl={12}
      pr={8}
      alignItems="flex-start"
      bg="white"
    >
      <HStack w="100%" justifyContent="space-between">
        <Heading as="h2" size="lg">
          {t("myChats")}
        </Heading>
      </HStack>

      <VStack w="100%" spacing={4} alignItems="flex-start" mt={6} minH="75vh">
        {}
        {isSuccess && data.length === 0 ? (
          <Text color="gray.500">{t("noChats")}</Text>
        ) : isSuccess ? (
          <>
            {data.slice(0, 1).map((chat: any) => {
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
                    <Avatar size="sm" name={chat.roomName} bg="gray.500" color="white">
                      <AvatarBadge boxSize="1em" bg="green.500" />
                    </Avatar>
                    <VStack spacing={1} alignItems="flex-start">
                      <Text size="md" fontWeight="bold">
                        {chat.roomName === "ghenntoggy" && user?.id === 2
                          ? "Daniela Vornic"
                          : chat.roomName}
                      </Text>
                      <Text size="sm" color="gray.500">
                        {user?.id === 1 ? "Bender" : "Chisinau"}
                      </Text>
                    </VStack>
                  </HStack>
                </Link>
              );
            })}
          </>
        ) : null}
      </VStack>
    </VStack>
  );
};
