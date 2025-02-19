import { Menu } from "@grammyjs/menu";

import activitiesMenu from "./Activities.js";

const mainMenu = new Menu("mainMenu")
  .submenu("Activities 🏋️‍♂️","activitiesMenu")
  .text("Social 👥")
  .text("Suggest 💡")
  .row()
  .text("About ℹ️")
  .text("Discord 📱")
  .text ("Collaborators 👥")
  .row()
  .text("Join the Team 💼");

mainMenu.register(activitiesMenu);
export default mainMenu;