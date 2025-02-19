import { Menu } from "@grammyjs/menu";

const discordMenu = new Menu("discordMenu")
  .text("What is Discord? ❓")
  .text("Join the Server 🚀")
  .row()
  .text("Server Rules 📜")
  .text("Navigating the Server 🧭")
  .row()
  .text("Level System 🎮")
  .text("Events 📅")
  .row()
  .back("Back 👈");
export default discordMenu;
