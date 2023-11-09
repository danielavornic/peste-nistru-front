import { PropsWithChildren } from "react";
import { ChatHeader, ChatSidebar, Layout } from "@/components";
import { Container, HStack } from "@chakra-ui/react";
import ChatFooter from "./ChatFooter";

interface ChatLayoutProps {
  title: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  headerDescription?: string;
}

export const ChatLayout = ({
  title,
  hasHeader = false,
  hasFooter = false,
  headerDescription,
  children,
}: PropsWithChildren<ChatLayoutProps>) => {
  return (
    <Layout title={title} full hasFooter={false}>
      <HStack spacing={0} w="100%" h="100%" alignItems="flex-start" bg="#fbfdfe">
        <ChatSidebar />
        <Container
          w="100%"
          maxW="100%"
          h="92vh"
          p={0}
          backgroundColor="#fbfdfe"
          overflowY="auto"
          display={hasHeader ? "flex" : "block"}
          flexDirection="column"
          justifyContent="space-between"
        >
          {children}
        </Container>
      </HStack>
    </Layout>
  );
};
