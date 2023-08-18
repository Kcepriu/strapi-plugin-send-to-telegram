"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        ctx.body = strapi
            .plugin("plugin-telegram-bot")
            .service("myService")
            .getWelcomeMessage();
    },
});
