const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const authMenu = document.querySelector('.auth-menu');
const authCrossBtn = document.querySelector('.auth-cross-btn');

signInBtn.addEventListener('click', onSignInBtnClick);
signInBtnMob.addEventListener('click', onSignInBtnClick);
authCrossBtn.addEventListener('click', onCrossBtnClick);

function onSignInBtnClick() {
  authMenu.classList.remove('is-hidden');
  document.body.classList.add('modal-is-open');
}

function onCrossBtnClick() {
  authMenu.classList.add('is-hidden');
  document.body.classList.remove('modal-is-open');
}
