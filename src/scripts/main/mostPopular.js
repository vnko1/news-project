import { app } from '../firebase/firebaseApi';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { fetchNews } from '../common/fetchNews';
import { users } from '../common/fetchUser';
import { spinner } from '../common/libraries';
import {
  renderNewsCards,
  savePopularData,
  addClassesForCoincidencesMarkupAndStorage,
} from '../common/commonFunctions';
import { paginationByQuery } from './pagination';

const auth = getAuth(app);

onLoad();

async function onLoad() {
  spinner.spin(document.body);
  try {
    const response = await fetchNews.fetchNewsByPopular();
    fetchNews.setHits(response.data.num_results);
    savePopularData(response.data.results);
    renderNewsCards();
    paginationByQuery();
    fetchNews.setNodeChild(document.querySelectorAll('.news-card'));
    fetchNews.setIsUrlRequest(true);
    onAuthStateChanged(auth, checkLogin);
  } catch (error) {
    console.log(error);
    spinner.stop();
  }
  spinner.stop();
}
async function checkLogin(user) {
  if (user) {
    users.updateProfile(user.displayName, user.email, user.uid);

    addClassesForCoincidencesMarkupAndStorage();
  } else {
  }
}
