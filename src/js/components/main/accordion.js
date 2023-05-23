

export default function accordionJs() {
  const accordions = document.querySelectorAll('.accordion');
  if (accordions) {
    accordions.forEach(el => {
      el.addEventListener('click', e => {
        const self = e.currentTarget;
        const control = self.querySelector('.accordion__control');
        const content = self.querySelector('.accordion__content');
        const last = self.querySelector('.accordion__control-last');
        self.classList.toggle('open'); // если открыт аккордеон

        if (self.classList.contains('open')) {
          control.setAttribute('aria-expanded', true);
          content.setAttribute('aria-hidden', false);
          content.style.maxHeight = content.scrollHeight + 'px';

          if (control.classList.contains('accordion__control-last')) {
            last.classList.remove('last');
          }
        } else {
          control.setAttribute('aria-expanded', false);
          content.setAttribute('aria-hidden', true);
          content.style.maxHeight = null;

          if (control.classList.contains('accordion__control-last')) {
            last.classList.add('last');
          }
        }
      });
    });
  }

}
