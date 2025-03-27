import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBiqaFh7oDwgmPdj10q37YlwajRZxOefv8',
  authDomain: 'news-d8f1f.firebaseapp.com',
  databaseURL:
    'https://news-d8f1f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'news-d8f1f',
  storageBucket: 'news-d8f1f.firebasestorage.app',
  messagingSenderId: '958128078409',
  appId: '1:958128078409:web:71529894f3a4a12ddd8998',
};

export const app = initializeApp(firebaseConfig);
