import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { app } from './firebaseApi';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { spinner } from '../common/libraries';

const auth = getAuth(app);
const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(e) {
  e.preventDefault();
  spinner.spin(document.body);
  const { name, email, password } = e.target.elements;
  creatAccount(name.value, email.value, password.value);
}

async function creatAccount(name, email, password) {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const params = { displayName: name };
    await updateProfile(auth.currentUser, params);
    spinner.stop();

    window.location.href = './index.html';
  } catch (error) {
    const errorMessage = error.message;
    spinner.stop();
    Report.failure(errorMessage);

    // ..
  }

  // .then(userCredential => {
  //   const userData = userCredential.user;
  //   regForm.reset();
  // })
}
