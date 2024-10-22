import { Bot } from "grammy";
import { MenuTemplate, MenuMiddleware } from "grammy-inline-menu";
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new Bot(token!);
bot.on("message", (ctx) =>
  ctx.reply("hello world, your message is " + ctx.message.text)
);
bot.start();
