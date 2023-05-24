import { addClass, block, destroy, destroyBtnAlso, infiniteScroll, removeClass, useDebounceHook } from '../helpers/helpers'
import { isDesktop, isMobile, isTablet } from '../../functions/check-viewport'

export default function showMoreAuthors() {
  const container = document.querySelector('.authors__content');


  if (container) {
    const btn = container.querySelector('button');
    const blockGrid = container.querySelector('.blockC-also');
    const items = blockGrid.querySelectorAll('.itemC-also');



    destroyBtnAlso(18, btn, items.length)


      const showMore = container.querySelector('.show-more');
      const showMoreSpun = container.querySelector('.show-more-span');
      const loading = container.querySelector('.loading');
      const itemsLength = container.querySelectorAll('.itemC-also').length;
      let itemsCount = 18;
      const startCount = 18;

      if (itemsLength) {
        showMore.addEventListener('click', el => {
          seeAlso()
        });
      }

      if (isDesktop() || isTablet()) {
        document.addEventListener('scroll', el => {
          if (showMore.classList.contains('show-more-active')) {
            infiniteScroll(showMore, seeAlso)
          }
        })
      }

      if (isMobile()) {
        document.addEventListener('scroll', el => {
          infiniteScroll(showMore, seeAlso)
        })
      }

      function seeAlso() {
        addClass(showMore, 'show-more-active')
        destroy(showMoreSpun)
        addClass(loading, 'donat')

        setTimeout(() => {
          itemsCount += 6;
          const array = Array.from(blockGrid.children);
          const visItems = array.slice(startCount, itemsCount);

          visItems.forEach(el => {
            el.classList.add('is-visible');
            setTimeout(() => {
              el.classList.add('is-active');
            }, 100);
          });
          removeClass(loading, 'donat');
          block(showMoreSpun);

          if (visItems.length === itemsLength - startCount) {
            destroy(showMore)
          }
        }, 200);
      }
  }
}


