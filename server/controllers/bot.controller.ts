import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async sendMessageToAdmins(ctx) {
    try {
      ctx.body = await strapi
        .plugin("telegram-bot")
        .telegramBot.sendMessageToAdmins(ctx.request.body.message);
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },

  async isPolling(ctx) {
    try {
      ctx.body = await strapi.plugin("telegram-bot").telegramBot.isPolling();
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },

  async getUpdates(ctx) {
    try {
      ctx.body = await strapi.plugin("telegram-bot").telegramBot.getUpdates();
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },

  async getMe(ctx) {
    try {
      ctx.body = await strapi.plugin("telegram-bot").telegramBot.getMe();
    } catch (err) {
      ctx.throw(500, err.message);
    }
  },
});
