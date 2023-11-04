import { PropsWithChildren } from "react";
import { ChatHeader, ChatSidebar, Layout } from "@/components";
import { Container, HStack } from "@chakra-ui/react";

interface ChatLayoutProps {
  title: string;
  hasHeader?: boolean;
}

export const ChatLayout = ({
  title,
  hasHeader = false,
  children,
}: PropsWithChildren<ChatLayoutProps>) => {
  return (
    <Layout title={title} full>
      <HStack spacing={0} w="100%" h="100%" alignItems="flex-start">
        <ChatSidebar />
        <Container w="100%" maxW="100%" h="92vh" p={0}>
          {hasHeader && <ChatHeader title={title} />}
          {children}
        </Container>
      </HStack>
    </Layout>
  );
};
