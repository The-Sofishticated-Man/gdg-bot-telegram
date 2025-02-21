import { Menu } from "@grammyjs/menu";

import dotenv from "dotenv";

import activitiesMenu from "./activitiesMenu.js";
import discordMenu from "./discordMenu.js";
import collaboratorsMenu from "./collaboratorsMenu.js";
import aboutMenu from "./aboutMenu.js";

dotenv.config();
const formURL = process.env.FORM_URL;
if (!formURL) throw new Error("FORM_URL is not defined");

const mainMenu = new Menu("mainMenu")
  .submenu("Activities 🏋️‍♂️", "activitiesMenu")
  .text("Social 👫")
  .text("Suggest 💡")
  .row()
  .submenu("About ℹ️", "aboutMenu")
  .submenu("Discord 📱", "discordMenu")
  .submenu("Collaborators 👥", "collaboratorsMenu")
  .row()
  .url("Join the Team 💼", formURL);

mainMenu.register(activitiesMenu);
mainMenu.register(discordMenu);
mainMenu.register(collaboratorsMenu);
mainMenu.register(aboutMenu);

export default mainMenu;
