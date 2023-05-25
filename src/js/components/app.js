import showMoreChoice from "./main/showMoreChoice";
import header from "./main/header";
import Modal from "./main/modal";
import accordionJs from "./main/accordion";
import burgerJs from "./main/burger";
import showMoreSearch from "./main/showMoreSearch";
import showMoreHome from "./main/showMoreHome";
import checkEmailJS from "./main/validationCheckEmail";
import subsJs from "./main/validationSubs";
import slidersJs from "./main/sliders";
import validationAuthorForm from './main/validationAuthorForm'
import showMore from './helpers/showMore'
import randomPage from './main/randomPage'

document.addEventListener("DOMContentLoaded", (event) => {
  Modal();
  header();
  showMoreChoice();
  showMoreHome()
  showMoreSearch()
  accordionJs()
  burgerJs()
  checkEmailJS()
  subsJs()
  slidersJs()
  validationAuthorForm()
  randomPage()
  showMore('.material__cont-blocks', 9, 9, 3)
  showMore('.authors__content', 18, 18, 6)
});

