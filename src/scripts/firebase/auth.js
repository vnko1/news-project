import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';
// import { user } from '../common/fetchUser';

const auth = getAuth(app);
const regForm = document.querySelector('.reg-form');

regForm.addEventListener('submit', onHandleSubmit);

function onHandleSubmit(e) {
  e.preventDefault();

  const { email, password } = e.target.elements;
  creatAccount(email.value, password.value);
}

function creatAccount(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in

      const userData = userCredential.user;
      regForm.reset();
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      // ..
    });
}
