import { Menu } from "@grammyjs/menu";
import pastEventsMenu from "./pastEventsMenu.js";

const activitiesMenu = new Menu("activitiesMenu")
  .text("Upcoming Events! 📣")
  .text("Community Projects 🔨")
  .row()
  .submenu("Past Events 📚", "pastEventsMenu")
  .text("Activity Calendar 📆")
  .row()
  .back("Back 👈");

activitiesMenu.register(pastEventsMenu);
export default activitiesMenu;
