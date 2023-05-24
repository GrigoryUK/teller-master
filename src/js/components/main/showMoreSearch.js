
export default function showMoreSearch() {
  const showMoreMSearch = document.querySelector('.btn__Msearch-also');



  if (showMoreMSearch) {
    const showMoreSpunMore = document.querySelector('.show-more-span');
    const productsLengthMSearch = document.querySelectorAll('.Msearch__item').length;
    const loadingMore = document.querySelector('.loading');
    let items = 9;
    showMoreMSearch.addEventListener('click', el => {
      showMoreSpunMore.style.display = 'none';
      loadingMore.classList.add('donat');
      setTimeout(() => {
        items += 3;
        const array = Array.from(document.querySelector('.Msearch__content').children);
        const visItems = array.slice(0, items);
        visItems.forEach(el => {
          el.classList.add('is-visible');
          let isVisible = document.querySelectorAll('is-visible');
          setTimeout(isVisible => {
            el.classList.add('is-active');
          }, 100);
        });
        loadingMore.classList.remove('donat');
        showMoreSpunMore.style.display = 'block';

        if (visItems.length === productsLengthMSearch) {
          showMoreMSearch.style.display = 'none';
          showMoreMSearch.removeEventListener('click', el);
        }
      }, 200);
    });
  }
}
