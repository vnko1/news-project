import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAB8IZLduhLK6QGnUKNkvsQ2CjFr6IK7gQ',
  authDomain: 'news-db-8a691.firebaseapp.com',
  databaseURL:
    'https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'news-db-8a691',
  storageBucket: 'news-db-8a691.appspot.com',
  messagingSenderId: '117160417602',
  appId: '1:117160417602:web:f0d4d4a22ac534181210db',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const logInBtn = document.querySelector('.signin');

const logOutBtn = document.querySelector('.signout');

const auth = getAuth(app);

logInBtn.addEventListener('click', onHandleSignInClick);
logOutBtn.addEventListener('click', onHandleSignOutClick);

onAuthStateChanged(auth, user => {
  console.log(user);
  if (user) {
    const uid = user.uid;

    // fetch(
    //   `https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify({
    //       username: user.displayName,
    //       email: user.email,
    //       id: uid,
    //       userData: [{ id: 2 }],
    //       data: { id: 1 },
    //     }),
    //   }
    // );

    fetch(
      `https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`
    )
      .then(r => {
        // console.log(r);
        return r.json();
      })
      .then(data => {
        console.log(data);
        console.log(data[Object.keys(data)]);
      });
  } else {
    console.log('Sign in please!');
    console.log(user);
    // User is signed out
    // ...
  }
});

function onHandleSignInClick() {
  signInWithRedirect(auth, provider);
}

function onHandleSignOutClick() {
  signOut(auth)
    .then(() => {
      console.log('Sign-out successful.');
    })
    .catch(error => {
      // An error happened.
    });
}

// fetch(
//   `https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}.json`,
//   {
//     method: 'POST',
//     body: JSON.stringify({
//       username: user.displayName,
//       email: user.email,
//       id: uid,
//     }),
//   }
// );

// fetch(
//   `https://news-db-8a691-default-rtdb.europe-west1.firebasedatabase.app/users/${uid}/${
//     Object.keys(data)[0]
//   }.json`,
//   {
//     method: 'PATCH',
//     body: JSON.stringify({ data: { age: 25, id: 1 } }),
//   }
// )
//   .then(r => r.json())
//   .then(console.log);
