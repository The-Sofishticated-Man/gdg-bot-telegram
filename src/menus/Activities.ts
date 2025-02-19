import { Menu } from "@grammyjs/menu";

const activitiesMenu = new Menu("activitiesMenu")
  .text("Upcoming Events 📣")
  .text("Community Projects 🔨")
  .row()
  .text("Past Events 📚")
  .text("Activity Calendar 📆")
  .row()
  .back("Back 👈");
export default activitiesMenu;
