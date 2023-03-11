import { app } from './firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { users } from '../common/fetchUser';

const userEl = document.querySelector('.user-tab-pc');
const userMobEl = document.querySelector('.user-mob');

const signInBtn = document.querySelector('.sign-in-btn');
const signInBtnMob = document.querySelector('.sign-in-btn-mob');
const signOutBtn = document.querySelector('.log-out-btn');
const signOutBtnMob = document.querySelector('.log-out-btn-mob');
const auth = getAuth(app);

onAuthStateChanged(auth, user => {
  if (user) {
    // const uid = user.uid;

    users.setEmail(user.email);
    users.setId(user.uid);

    userEl.textContent = users.getEmail();
    userMobEl.textContent = users.getEmail();
    signInBtn.disabled = 'true';
    signInBtnMob.disabled = 'true';
    signOutBtn.removeAttribute('disabled');
    signOutBtnMob.removeAttribute('disabled');

    // ...
  } else {
    // User is signed out
    // ...
  }
});
// console.log(users);
