import { ChatLayout } from "@/components";
import { Flex, VStack, Heading } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { PuffLoader } from "react-spinners";

const NewChat = () => {
  const t = useTranslations("chat");
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("/chat/1");
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ChatLayout title={t("searching") + "..."}>
      <Flex
        w="100%"
        h="100%"
        p={8}
        rounded="md"
        alignItems="center"
        justifyContent="center"
        backgroundColor="#fbfdfe"
      >
        <VStack spacing={4} alignItems="center" maxW="600px" mt={-10}>
          <PuffLoader color="#3182ce" size={90} />
          <Heading as="h1" size="xl" mt={8} textAlign="center">
            {t("lookingForPeople")}...
          </Heading>
        </VStack>
      </Flex>
    </ChatLayout>
  );
};

export default NewChat;
