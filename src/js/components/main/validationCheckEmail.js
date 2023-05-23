
export default function checkEmailJS() {
  const InputInfo = document.querySelectorAll('.info__input');
  const BtnEmailInfo = document.querySelector('.btn__word');
  const InputSubsInfo = document.querySelector('.info__input-email');
  const TextSubsInfo = document.querySelectorAll('.info__subtitle');
  const PopupSubsModal = document.querySelector('.info__popup-block');
  const MfooterInput = document.querySelector('.Mfooter__input');
  const MfooterBtn = document.querySelector('.btn__Mfooter');
  const MfooterPopup = document.querySelector('.Mfooter__cont-popup');
  const MfooterSubsCont = document.querySelector('.Mfooter__cont-sub');
  const ERROR_COLOR = '#FE5566';
  const SUCCESS_COLOR = '#007613';
  const EMAIL_REGEXPINFO = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  function isEmailValid(value) {
    return EMAIL_REGEXPINFO.test(value);
  }

  // function onInput() {
  //   if (isEmailValid(InputSubsInfo.value)) {
  //     InputSubsInfo.style.borderColor = '#007613';
  //   } else {
  //     InputSubsInfo.style.borderColor = '#FE5566';
  //   }
  // }

  function onInput(item) {
    if (isEmailValid(item.value)) {
      item.style.borderColor = SUCCESS_COLOR;
    } else {
      item.style.borderColor = ERROR_COLOR;
    }
  }

  // function onInputfooter() {
  //   if (isEmailValid(MfooterInput.value)) {
  //     MfooterInput.style.borderColor = '#007613';
  //   } else {
  //     MfooterInput.style.borderColor = '#FE5566';
  //   }
  // }

  function checkValue() {
    if (InputSubsInfo.value === "") {
      InputSubsInfo.style.borderColor = ERROR_COLOR;
    }
  }

  function checkValueFooter(el) {
    if (el.value === "") {
      el.style.borderColor = ERROR_COLOR;
    }
  }

  function hidden(el) {
    el.style.opacity = '0';
    el.style.visibility = 'hidden';
  }

  function destroyAll(elems) {
    for (var i = 0; i < elems.length; i++) elems[i].style.display = 'none';
  }

  function opacity(el) {
    el.style.opacity = '1';
    el.style.visibility = 'visible';
  }

  function destroy(item) {
    item.style.display = 'none';
  }

  if (document.body.contains(BtnEmailInfo)) {
    InputSubsInfo.addEventListener('input', el => {
      onInput(InputSubsInfo)
    });

    BtnEmailInfo.onclick = function () {
      checkValue();
      onInput(InputSubsInfo);

      if (isEmailValid(InputSubsInfo.value)) {
        destroyAll(InputInfo);
        destroyAll(TextSubsInfo);
        BtnEmailInfo.style.display = 'none';
        destroyAll(PopupSubsModal);
      }
    };
  }

  if (document.body.contains(MfooterBtn)) {
    MfooterInput.addEventListener('input', el => {
      onInput(MfooterInput)
    });

    MfooterBtn.onclick = function () {
      checkValueFooter(MfooterInput);
      onInput(MfooterInput);

      if (isEmailValid(MfooterInput.value)) {
        destroy(MfooterBtn);
        destroy(MfooterInput);
        opacity(MfooterPopup);
        MfooterSubsCont.style.alignItems = 'center';
      }
    };
  }
}
