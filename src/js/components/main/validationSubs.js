
export default function subsJs() {
  const BtnEmail = document.querySelector('.btn__mail');
  const PopBlock = document.querySelector('.popup__block');
  const InputSubs = document.querySelector('.subs__input');
  const TextSubs = document.querySelector('.subs__text');
  const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const ERROR_COLOR = '#FE5566';
  const SUCCESS_COLOR = '#007613';
  function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
  }

  if (document.body.contains(BtnEmail)) {
    function onInput() {
      if (isEmailValid(InputSubs.value)) {
        InputSubs.style.borderColor = SUCCESS_COLOR;
      } else {
        InputSubs.style.borderColor = ERROR_COLOR;
      }
    }

    InputSubs.addEventListener('input', onInput);

    BtnEmail.onclick = function () {
      if (isEmailValid(InputSubs.value)) {
        BtnEmail.style.display = 'none';
        TextSubs.style.display = 'none';
        InputSubs.style.display = 'none';
        PopBlock.classList.add('active');

      }

      if (InputSubs.value === "") {
        InputSubs.style.borderColor = ERROR_COLOR;
      }
    };
  }
}
