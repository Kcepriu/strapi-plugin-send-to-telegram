import { Strapi } from "@strapi/strapi";

export default ({ strapi }: { strapi: Strapi }) => ({
  async find(query) {
    return await strapi.entityService.findMany(
      "plugin::plugin-telegram-bot.telegram",
      query
    );
  },

  async delete(id) {
    return await strapi.entityService.delete(
      "plugin::plugin-telegram-bot.telegram",
      id
    );
  },

  async create(data) {
    return await strapi.entityService.create(
      "plugin::plugin-telegram-bot.telegram",
      {
        data,
      }
    );
  },

  async update(id, data) {
    const result = await strapi.entityService.update(
      "plugin::plugin-telegram-bot.telegram",
      id,
      { data }
    );
    return result;
  },
});
