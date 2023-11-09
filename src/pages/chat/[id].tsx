import { chat } from "@/api";
import { ChatHeader, ChatLayout } from "@/components";
import ChatBody from "@/components/layout/chat/ChatBody";
import ChatFooter from "@/components/layout/chat/ChatFooter";
import { Message } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import SockJS from "sockjs-client";
import Stomp from "stompjs";

const ChatRoom = () => {
  const t = useTranslations("chat");
  const router = useRouter();
  const { id } = router.query;
  const locale = router.locale as string;

  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  const [stompClient, setStompClient] = useState<any>(null);

  const {
    data: serverMessages,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ["chats-history", id, stompClient],
    queryFn: () => chat.getChatHistoryByChatRoomId(Number(id), locale == "en" ? "en-GB" : locale),
  });

  useEffect(() => {
    setMessages(serverMessages);
  }, [serverMessages]);

  useEffect(() => {
    const socket = new SockJS(process.env.NEXT_PUBLIC_SOCKET_BASE_URL as string);
    const client = Stomp.over(socket);

    client.connect({}, () => {
      client.subscribe(`/topic/${id}`, (message: any) => {
        const receivedMessage = JSON.parse(message.body);
        const mess = {
          senderId: receivedMessage.senderId,
          senderName: receivedMessage.sender,
          messageText: receivedMessage.messageText,
          timestamp: receivedMessage.timestamp,
        };
        setMessages((prev) => [...(prev || []), mess]);
      });
    });

    setStompClient(client);

    return () => {
      if (stompClient) stompClient.disconnect();
    };
  }, [id, router.locale]);

  const sendMessages = (message: Message) => {
    stompClient.send(`/app/sendMessage/${id}`, {}, JSON.stringify(message));
  };

  return (
    <ChatLayout title="Daniela Vornic" hasHeader hasFooter headerDescription="Regiune: Chisinau">
      <ChatHeader title="Daniela Vornic" description={"Regiune: Chisinau"} />
      <ChatBody messages={messages} isLoading={isLoading} />
      <ChatFooter sendMessage={sendMessages} message={message} setMessage={setMessage} />
    </ChatLayout>
  );
};

export default ChatRoom;
