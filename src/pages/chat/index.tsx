import { ChatLayout } from "@/components";
import { Box, Button, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { PiWechatLogoLight } from "react-icons/pi";

const Chat = () => {
  const t = useTranslations("chat");

  return (
    <ChatLayout title={t("title")}>
      <Flex
        w="100%"
        h="100%"
        bg="white"
        p={8}
        rounded="md"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={4} alignItems="center">
          {/* <PiWechatLogoLight /> */}
          <Icon as={PiWechatLogoLight} w={28} h={28} color="brand.500" mb={8} mt={-10} />
          <Heading as="h1" size="xl">
            {t("startChat")}
          </Heading>
          <Text fontSize="lg" textAlign="center" color="gray.700" mb={4}>
            {t("startChatDescription")}
          </Text>
          <Link href="/chat/new">
            <Button colorScheme="brand" size="lg" ml={4}>
              {t("start")}
            </Button>
          </Link>
        </VStack>
      </Flex>
    </ChatLayout>
  );
};

export default Chat;
