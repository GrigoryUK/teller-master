import GraphModal from "graph-modal";

export default function Modal() {
  const modal = new GraphModal();
  const modalBtnSearch = document.querySelector('.btn__seacrhM');
  const modalInputSearch = document.querySelector('.seacrhM__input');

  modalBtnSearch.addEventListener('click', el => {
      setTimeout(() => {
        modalInputSearch.focus()
      }, 400)
  })
}
