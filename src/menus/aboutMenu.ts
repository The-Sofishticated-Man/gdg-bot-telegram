import { Menu } from "@grammyjs/menu";
import teamMenu from "./teamMenu.js";

const aboutMenu = new Menu("aboutMenu")
  .text("What is GDG? ❓")
  .text("Goals 🎯")
  .row()
  .text("Why GDG Ghardaia? 🤔")
  .text("Types of Activities 📚")
  .row()
  .submenu("Team", "teamMenu")
  .text("Achievements 🏆")
  .row()
  .back("Back 👈");

aboutMenu.register(teamMenu);
export default aboutMenu;
