import { app } from './firebase';
import { app } from './firebase';
import { getAuth, signOut } from 'firebase/auth';
// import { users } from '../common/fetchUser';

const auth = getAuth(app);
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');
const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const userEl = document.querySelector('.user-tab-pc');
const userMobEl = document.querySelector('.user-mob');

signOutBtn.addEventListener('click', onSignOutBtnCLick);

signOutBtnMob.addEventListener('click', onSignOutBtnCLick);

function onSignOutBtnCLick() {
  signOut(auth)
    .then(() => {
      userEl.textContent = '';
      userMobEl.textContent = '';
      signInBtn.removeAttribute('disabled');
      signInBtnMob.removeAttribute('disabled');
      signOutBtn.disabled = 'true';
      signOutBtnMob.disabled = 'true';
    })
    .catch(error => {
      console.log(error);
    });
}
