import { axios } from "@/lib";

export const interests = {
  getList: async () => {
    const res = await axios.get("/api/interests/get");
    return res.data;
  },
};
