import { Menu } from "@grammyjs/menu";

const collaboratorsMenu = new Menu("collaboratorsMenu")
  .text("University of Ghardaia 🏫")
  .text("ODEJ Ghardaia 🏃‍♂️" )
  .row()
  .text("CAST Ghardaia 🌐")
  .text("Black Circle Club 🕊️")
  .row()
  .text("[BECOME A COLLABORATOR]")
  .row()
  .back("Back 👈");
export default collaboratorsMenu;
