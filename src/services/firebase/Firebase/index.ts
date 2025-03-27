import { FirebaseApp, initializeApp, getApps, getApp } from "firebase/app";

const apiKey = process.env.NEXT_PUBLIC_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_APP_ID;

abstract class FireBaseApi {
  private firebaseConfig = {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
  };
  protected app: FirebaseApp;

  constructor() {
    this.app =
      getApps().length > 0 ? getApp() : initializeApp(this.firebaseConfig);
  }
}

export default FireBaseApi;
