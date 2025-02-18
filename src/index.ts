import { Bot } from "grammy";
import { Menu } from "@grammyjs/menu";
import dotenv from "dotenv";
dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new Bot(token!);

const mainMenu = new Menu("mainMenu")
  .text("Activities 🏋️‍♂️")
  .text("Social 👥")
  .text("Suggest 💡")
  .row()
  .text("About ℹ️")
  .text("Discord 📱")
  .text("Collaborators 👥")
  .row()
  .text("Join the Team 💼");


bot.use(mainMenu);

bot.command("start",async(ctx)=>{
  await ctx.reply("Hello "+ctx.from!.first_name,{reply_markup:mainMenu});
})

bot.start();
