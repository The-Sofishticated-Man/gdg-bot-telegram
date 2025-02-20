import { Menu } from "@grammyjs/menu";

import activitiesMenu from "./activitiesMenu.js";
import discordMenu from "./discordMenu.js";
import collaboratorsMenu from "./collaboratorsMenu.js";
import aboutMenu from "./aboutMenu.js";

const mainMenu = new Menu("mainMenu")
  .submenu("Activities 🏋️‍♂️", "activitiesMenu")
  .text("Social 👫")
  .text("Suggest 💡")
  .row()
  .submenu("About ℹ️", "aboutMenu")
  .submenu("Discord 📱", "discordMenu")
  .submenu("Collaborators 👥", "collaboratorsMenu")
  .row()
  .text("Join the Team 💼");

mainMenu.register(activitiesMenu);
mainMenu.register(discordMenu);
mainMenu.register(collaboratorsMenu);
mainMenu.register(aboutMenu);

export default mainMenu;
