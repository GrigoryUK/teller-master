

export const ERROR_COLOR = '#FE5566';
export const SUCCESS_COLOR = '#007613';
export const EMAIL_REGEX = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
export function checkFinal(...args) {
  function isTrue(element) {
    return element === true;
  }
  return args.every(isTrue);
}

export const addClass = (item, cls) => {
  item.classList.add(cls);
}

export const removeClass = (item, cls) => {
  item.classList.remove(cls);
}

export function isEmailValid(value) {
  return EMAIL_REGEX.test(value);
}

export function onInput(item) {
  if (isEmailValid(item.value)) {
    item.style.borderColor = SUCCESS_COLOR;
    return true
  } else {
    item.style.borderColor = ERROR_COLOR;
    return false
  }
}

export function hidden(item) {
  item.style.opacity = '0';
  item.style.visibility = 'hidden';
}

export function visible(item) {
  item.style.opacity = '1';
  item.style.visibility = 'visible';
}

export function destroy(item) {
  item.style.display = 'none';
}

export function block(item) {
  item.style.display = 'block';
}

export function destroyBtnAlso(min_count, btn, productLength) {
  if (btn) {
    if (productLength <= min_count) {
      destroy(btn)
    }
  }
}

export  function alsoConstFun(container, count_grid = 18, count_min_grid = 18, count_grid_plus = 6, button_also = '.show-more', button_span = '.show-more-span', block_grid = '.blockC-also', item_grid = '.itemC-also', donat = '.loading', clsVisible = 'is-visible', clsActive = 'is-active', donat_active = 'donat') {

  if (container) {
    const net = container.querySelector(block_grid);

    const item = net.querySelectorAll(item_grid);
    const itemLength = net.querySelectorAll(item_grid).length;
    console.log(itemLength)
    const btn = container.querySelector(button_also);
    const btnSpan = btn.querySelector(button_span);
    const btnLoading = btn.querySelector(donat)
    let count = count_grid;

    destroy(btnSpan)
    addClass(btnLoading, donat_active)

    setTimeout(() => {
      count += count_grid_plus;
      const array = Array.from(net.children);
      const visItems = array.slice(0, count);

      visItems.forEach(el => {
        addClass(el, clsVisible);
        let isVisible = document.querySelectorAll('.is-visible');
        setTimeout(() => {
          addClass(el, clsActive);
        }, 40);
      });
      removeClass(btnLoading, donat_active)
      block(btnSpan)


      if (visItems.length === itemLength) {
        destroy(button_also)
      }
    }, 200);


  }
}


export const useDebounceHook = (function () {
  const timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

export function infiniteScroll(triggerElement, callback) {
  if (callback) {
    const options = {
      rootMargin: '50px',
      threshold: 1,
    };

    let observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        useDebounceHook(function(){
          callback();
        }, 100, "some unique string");
      }
    }, options);

    observer.observe(triggerElement);
  }

  return () => {
    if (observer && triggerElement) {
      observer.unobserve(triggerElement);
    }
  };
}
