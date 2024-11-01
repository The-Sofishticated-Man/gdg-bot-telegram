import { Bot, InlineKeyboard } from "grammy";
import { MenuTemplate, MenuMiddleware } from "grammy-inline-menu";
const dotenv = require("dotenv");
dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new Bot(token!);
const keyboard = new InlineKeyboard()
  .text("Activities", "activities")
  .text("Join the Team", "join")
  .text("Social Media", "social")
  .row()
  .text("Suggest Improvements", "suggest")
  .text("About", "about")
  .text("Discord Server", "discrod")
  .row()
  .text("Collaborators", "collaborators");
bot.command("start", (ctx) => {
  ctx.reply("Welcome to the bot", {
    reply_markup: keyboard,
  });
});
bot.on("message", (ctx) =>
  ctx.reply("hello world, your message is " + ctx.message.text)
);
bot.start();
