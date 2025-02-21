import { Menu } from "@grammyjs/menu";

const pastEventsMenu = new Menu("pastEventsMenu")
  .text("2024")
  .text("2023")
  .text("2022")
  .row()
  .text("2021")
  .text("2020")
  .text("2019")
  .row()
  .text("2018")
  .text("2017")
  .row()
  .back("Back 👈");
export default pastEventsMenu;
