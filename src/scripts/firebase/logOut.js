import { app } from './firebaseApi';
import { getAuth, signOut } from 'firebase/auth';
import { users } from '../common/fetchUser';
import { Report } from 'notiflix/build/notiflix-report-aio';

const auth = getAuth(app);
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');
const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const userEl = document.querySelector('.user-name-header');
const userMobEl = document.querySelector('.user-name-mobile');

signOutBtn.addEventListener('click', onSignOutBtnCLick);

signOutBtnMob.addEventListener('click', onSignOutBtnCLick);

async function onSignOutBtnCLick() {
  try {
    await signOut(auth);
    userEl.textContent = 'user';
    userMobEl.textContent = 'user';
    signInBtn.removeAttribute('disabled');
    signInBtnMob.removeAttribute('disabled');
    signOutBtn.disabled = 'true';
    signOutBtnMob.disabled = 'true';
    users.resetUser();
  } catch (error) {
    Report.failure(error);
  }
}
