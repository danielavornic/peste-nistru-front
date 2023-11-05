import { Message } from "@/components";
import { useAuth } from "@/hooks";
import { Message as MessageInterface } from "@/types";
import { VStack, Text } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React from "react";

const ChatBody = ({ messages }: { messages: MessageInterface[] }) => {
  const t = useTranslations("chat");
  const { user } = useAuth();

  return (
    <VStack
      spacing={4}
      alignItems="flex-start"
      overflowY="auto"
      maxH="calc(100vh - 200px)"
      px={8}
      my={-4}
      className="hidden-scrollbar"
    >
      {messages.length === 0 ? (
        <Text color="gray.500" textAlign="center" mx="auto">
          {t("noMessages")} {t("startTyping")}
        </Text>
      ) : (
        <>
          {messages.map((message) => (
            <Message
              key={message.id}
              isMine={user?.id === message.senderId}
              messageText={message.messageText}
              sender={message.senderName}
              time={message.timestamp}
            />
          ))}
        </>
      )}
    </VStack>
  );
};

export default ChatBody;
