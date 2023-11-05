import { ChatLayout } from "@/components";
import ChatBody from "@/components/layout/chat/ChatBody";
import { Message } from "@/types";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React from "react";

const messages: Message[] = [
  {
    id: "1",
    senderId: 1,
    senderName: "John",
    messageText: "Hello, how are you?",
    timestamp: "2023-11-04T14:30:00",
  },
  {
    id: "2",
    senderId: 2,
    senderName: "Alice",
    messageText: "I'm good, thanks! How about you?",
    timestamp: "2023-11-04T14:35:00",
  },
  {
    id: "3",
    senderId: 1,
    senderName: "John",
    messageText: "I'm doing well too. What have you been up to?",
    timestamp: "2023-11-04T14:40:00",
  },
  {
    id: "4",
    senderId: 456,
    senderName: "Alice",
    messageText: "Just working on some projects. How about you?",
    timestamp: "2023-11-04T14:45:00",
  },
  {
    id: "5",
    senderId: 123,
    senderName: "John",
    messageText: "Same here. Let's catch up later!",
    timestamp: "2023-11-04T14:50:00",
  },
  {
    id: "6",
    senderId: 123,
    senderName: "John",
    messageText: "Same here. Let's catch up later!",
    timestamp: "2023-11-04T14:50:00",
  },
  {
    id: "7",
    senderId: 123,
    senderName: "John",
    messageText: "Same here. Let's catch up later!",
    timestamp: "2023-11-04T14:50:00",
  },
  {
    id: "8",
    senderId: 123,
    senderName: "John",
    messageText: "Same here. Let's catch up later!",
    timestamp: "2023-11-04T14:50:00",
  },
];

const ChatRoom = () => {
  const t = useTranslations("chat");
  const router = useRouter();
  const { id } = router.query;

  return (
    <ChatLayout title="Daniela Vornic" hasHeader hasFooter headerDescription="Regiune: Chisinau">
      <ChatBody messages={messages} />
    </ChatLayout>
  );
};

export default ChatRoom;
