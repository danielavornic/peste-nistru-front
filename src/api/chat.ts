import { axios } from "@/lib";

export const chat = {
  getChatListByUserId: async (userId: number) => {
    const { data } = await axios.get(`/chatRooms/${userId}`);
    return data;
  },
  getChatHistoryByChatRoomId: async (chatRoomId: number, lang: string) => {
    const { data } = await axios.get(`/api/messages/${chatRoomId}/${lang}`);
    return data;
  },
};
