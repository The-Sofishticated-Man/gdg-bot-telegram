const { Telegraf, Markup, Context } = require("telegraf");
const dotenv = require("dotenv");
const { keyboard, inlineKeyboard } = require("telegraf/markup");
dotenv.config();
const token = process.env.BOT_TOKEN;
const bot = new Telegraf(token);
bot.launch(() => {
  console.log("GDG Bot started!");
});
bot.start((ctx) => {
  ctx.reply("welcome to GDG, what can we help you with today?", {
    reply_markup: {
      inline_keyboard: [
        [
          { text: "Activities 🎬", callback_data: "activities" },
          { text: "Social Media 👤", callback_data: "socials" },
        ],
        [
          { text: "Suggest Improvements 📝", callback_data: "suggest" },
          { text: "Discord 💻", callback_data: "discord" },
        ],
        [
          { text: "About 🔍", callback_data: "about" },
          { text: "Collaborators 🤝", callback_data: "collabs" },
        ],
        [{ text: "Join the Team 🙌", callback_data: "join" }],
      ],
    },
  });
});
