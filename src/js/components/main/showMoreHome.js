
export default function showMoreHome() {
  const showMore = document.querySelector('.show-more');
  const showMoreSpun = document.querySelector('.show-more-span');
  const loading = document.querySelector('.loading');
  const productsLength = document.querySelectorAll('.also__show').length;
  let items = 3;

  if (productsLength) {
    showMore.addEventListener('click', el => {
      showMoreSpun.style.display = 'none';
      loading.classList.add('donat');
      setTimeout(() => {
        items += 3;
        const array = Array.from(document.querySelector('.also__cont-grid').children);
        const visItems = array.slice(0, items);
        visItems.forEach(el => {
          el.classList.add('is-visible');
          let isVisible = document.querySelectorAll('is-visible');
          setTimeout(isVisible => {
            el.classList.add('is-active');
          }, 40);
        });
        loading.classList.remove('donat');
        showMoreSpun.style.display = 'block';

        if (visItems.length === productsLength) {
          showMore.style.display = 'none';
          showMore.removeEventListener('click', el);
        }
      }, 200);
    });
  }
}
