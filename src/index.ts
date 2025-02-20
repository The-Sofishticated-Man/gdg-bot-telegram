import dotenv from "dotenv";

import { Bot } from "grammy";
import mainMenu from "./menus/mainMenu.js";

dotenv.config();

const token = process.env.BOT_TOKEN;
const bot = new Bot(token!);


bot.use(mainMenu);


bot.command("start", async (ctx) => {
  await ctx.reply("Hello " + ctx.from!.first_name, { reply_markup: mainMenu });
});

bot.start().then(() => console.log(new Date(), ": Bot started"));
