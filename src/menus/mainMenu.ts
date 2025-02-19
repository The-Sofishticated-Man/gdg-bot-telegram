import { Menu } from "@grammyjs/menu";

import activitiesMenu from "./activitiesMenu.js";
import discordMenu from "./discordMenu.js";
import collaboratorsMenu from "./collaboratorsMenu.js";

const mainMenu = new Menu("mainMenu")
  .submenu("Activities 🏋️‍♂️", "activitiesMenu")
  .text("Social 👥")
  .text("Suggest 💡")
  .row()
  .text("About ℹ️")
  .submenu("Discord 📱", "discordMenu")
  .submenu("Collaborators 👥", "collaboratorsMenu")
  .row()
  .text("Join the Team 💼");

mainMenu.register(activitiesMenu);
mainMenu.register(discordMenu);
mainMenu.register(collaboratorsMenu);

export default mainMenu;
