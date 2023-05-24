import { addClass, onInput } from '../helpers/helpers'

export default function validationAuthorForm() {

  const form = document.querySelector('.author-modal');

  if (form) {
    const btn = form.querySelector('button[type = "submit"]');
    const input = form.querySelector('input[type = "email"]');
    const resultSuccess = form.querySelector('.modalC__success');

    input.addEventListener('input', el => {
      onInput(input);
    })

    btn.addEventListener('click', el => {
      el.preventDefault();
      const check = onInput(input);

      if (check === true) {
        addClass(resultSuccess, 'active');
      }
    })

  }


}
