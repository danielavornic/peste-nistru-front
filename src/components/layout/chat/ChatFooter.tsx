import { useAuth } from "@/hooks";
import { HStack, IconButton, Input } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";

const ChatFooter = () => {
  const { user } = useAuth();
  const { query } = useRouter();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify({ message, senderId: user?.id, chatRoomId: query.id }));

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
