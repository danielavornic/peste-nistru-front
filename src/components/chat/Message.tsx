import { useAuth } from "@/hooks";
import { Tooltip, Box, Flex, Text } from "@chakra-ui/react";

interface MessageProps {
  messageText: string;
  senderId: number;
  timestamp: string;
}

function formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const hour = date.getHours().toString().padStart(2, "0");
  const minute = date.getMinutes().toString().padStart(2, "0");
  const formattedDate = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${hour}:${minute}, ${formattedDate}`;
}

export const Message = ({ messageText, senderId, timestamp }: MessageProps) => {
  const { user } = useAuth();
  const isMine = Number(senderId) === Number(user?.id);

  return (
    <Flex w="100%" justifyContent={isMine ? "flex-end" : "flex-start"} mb={4}>
      <Tooltip
        label={formatTimestamp(timestamp)}
        placement={isMine ? "left" : "right"}
        bg="gray.500"
      >
        <Box
          p={4}
          bg={isMine ? "brand.500" : "gray.100"}
          color={isMine ? "white" : "gray.800"}
          rounded="md"
          maxW="60%"
        >
          <Text fontSize="md">{messageText}</Text>
        </Box>
      </Tooltip>
    </Flex>
  );
};
