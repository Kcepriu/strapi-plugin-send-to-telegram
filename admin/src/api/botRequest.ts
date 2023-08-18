import { request } from "@strapi/helper-plugin";
import type { IChat, IInformationAboutMe } from "../../../types/bot.types";

const botRequest = {
  getMe: async (): Promise<IInformationAboutMe> => {
    return await request("/telegram-bot/me", {
      method: "GET",
    });
  },

  geChats: async (): Promise<IChat[]> => {
    return await request("/telegram-bot/find", {
      method: "GET",
    });
  },

  deleteChat: async (chat: IChat): Promise<IChat> => {
    const result = await request(`/telegram-bot/delete/${chat.id}`, {
      method: "DELETE",
    });

    return result;
  },

  updateChat: async (id: number, chat: IChat): Promise<IChat> => {
    const result = await request(`/telegram-bot/update/${id}`, {
      method: "PUT",
      body: chat,
    });

    return result;
  },
};

export default botRequest;
