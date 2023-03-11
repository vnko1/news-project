import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyAGhSMKP3vqfl8yduNbTzGe0aFAL5yk6sA',
  authDomain: 'news-my-project.firebaseapp.com',
  projectId: 'news-my-project',
  storageBucket: 'news-my-project.appspot.com',
  messagingSenderId: '525076045856',
  appId: '1:525076045856:web:0de49aeeb3a25ec5511c45',
};

export const app = initializeApp(firebaseConfig);
