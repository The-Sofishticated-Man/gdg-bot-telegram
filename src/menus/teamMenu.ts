import { Menu } from "@grammyjs/menu";

const teamMenu = new Menu("teamMenu")
  .text("Organizers 👥")
  .row()
  .text("Mentors 🤓")
  .row()
  .text("Team Members 👫")
  .row()
  .back("Back 👈");
export default teamMenu;
