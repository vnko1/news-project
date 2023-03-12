import { app } from './firebaseApi';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// import { Report } from 'notiflix/build/notiflix-report-aio';
import { users } from '../common/fetchUser';

const userEl = document.querySelector('.user-name-header');
const userMobEl = document.querySelector('.user-name-mobile');
const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');
const auth = getAuth(app);

onAuthStateChanged(auth, checkLogin);
// console.log(users);

async function checkLogin(user) {
  if (user) {
    users.updateProfile(user.displayName, user.email, user.uid);

    onIsLogIn();
  } else {
    onIsLogOut();
  }
}

async function onIsLogIn() {
  userEl.textContent = users.getName();
  userMobEl.textContent = users.getName();
  signInBtn.disabled = 'true';
  signInBtnMob.disabled = 'true';
  signOutBtn.removeAttribute('disabled');
  signOutBtnMob.removeAttribute('disabled');
}

function onIsLogOut() {
  userEl.textContent = 'user';
  userMobEl.textContent = 'user';
  signOutBtn.disabled = 'true';
  signOutBtnMob.disabled = 'true';
}
