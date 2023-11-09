import { useAuth } from "@/hooks";
import { HStack, IconButton, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsFillSendFill } from "react-icons/bs";

const ChatFooter = ({ sendMessage, message, setMessage }: any) => {
  const { user } = useAuth();
  const { query, locale } = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    sendMessage({
      roomId: Number(query.id),
      senderId: Number(user?.id),
      message,
      language: locale === "en" ? "en-GB" : locale,
    });

    setMessage("");
  };

  return (
    <HStack
      shadow="sm"
      as="form"
      px={4}
      my={10}
      mx={8}
      borderRadius={8}
      spacing={4}
      bg="white"
      justifyContent="space-between"
      justifySelf={"flex-end"}
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        border="none"
        outline="none"
        _focus={{ border: "none", outline: "none" }}
        _active={{ border: "none", outline: "none" }}
        variant="unstyled"
        height="100%"
        px={2}
        py={4}
      />

      <IconButton
        my={4}
        aria-label="Options"
        colorScheme="brand"
        icon={<BsFillSendFill />}
        borderRadius={8}
        type="submit"
      />
    </HStack>
  );
};

export default ChatFooter;
