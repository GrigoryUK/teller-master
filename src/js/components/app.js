import choiceJS from "./main/showMoreChoice";
import header from "./main/header";
import Modal from "./main/modal";
import accordionJs from "./main/accordion";
import burgerJs from "./main/burger";
import searchMoreJs from "./main/showMoreSearch";
import showMore from "./main/showMore";
import checkEmailJS from "./main/validationCheckEmail";
import subsJs from "./main/validationSubs";
import slidersJs from "./main/sliders";

document.addEventListener("DOMContentLoaded", (event) => {
  Modal();
  header();
  choiceJS();
  showMore()
  searchMoreJs()
  accordionJs()
  burgerJs()
  checkEmailJS()
  subsJs()
  slidersJs()
});

