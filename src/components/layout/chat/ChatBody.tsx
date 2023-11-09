import { Message } from "@/components";
import { useAuth } from "@/hooks";
import { Message as MessageInterface } from "@/types";
import { VStack, Text, Flex } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const ChatBody = ({
  messages,
  isLoading,
}: {
  messages: MessageInterface[];
  isLoading: boolean;
}) => {
  const t = useTranslations("chat");
  const { user } = useAuth();

  useEffect(() => {
    const chatBody = document.getElementById("chat-body");
    if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
  }, [messages]);

  return (
    <VStack
      spacing={4}
      alignItems="flex-start"
      overflowY="auto"
      maxH="calc(100vh - 200px)"
      px={8}
      my={-4}
      className="hidden-scrollbar"
      id="chat-body"
      h="full"
      background={messages?.length > 0 ? "url(/images/chat-bg.png)" : "transparent"}
      backgroundSize="300px"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      {isLoading ? (
        <Flex w="100%" justifyContent="center" alignItems="center">
          <PuffLoader color="#3182ce" size={90} />
        </Flex>
      ) : !messages || messages?.length === 0 ? (
        <Text color="gray.500" textAlign="center" mx="auto">
          {/* {t("noMessages")} {t("startTyping")} */}
          <></>
        </Text>
      ) : (
        <>
          {messages.map((message, idx) => (
            <Message
              key={idx}
              messageText={message.messageText}
              senderId={message.senderId}
              timestamp={message.timestamp}
            />
          ))}
        </>
      )}
    </VStack>
  );
};

export default ChatBody;
