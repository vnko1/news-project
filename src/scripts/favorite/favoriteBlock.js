import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { spinner } from '../common/libraries';
import { app } from '../firebase/firebaseApi';
import { users } from '../common/fetchUser';
import {
  addClassesForCoincidencesMarkupAndStoragePages,
  showModal,
  hideModal,
  createDataList,
} from '../common/commonFunctions';

const auth = getAuth(app);
const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', onClickRemoveBtn);

onAuthStateChanged(auth, checkIsLogin);

function checkIsLogin(user) {
  if (user) {
    users.updateProfile(
      user.displayName,
      user.email,
      user.uid,
      user.accessToken
    );
    onLoadFavoriteNews();
  } else {
    const mess = 'Log in to your account to view your selected news!';
    showModal(mess);
  }
}

async function onLoadFavoriteNews() {
  spinner.spin(document.body);
  try {
    const favourite = await users.getAllData('favourites');

    if (!favourite) {
      spinner.stop();
      const mess = "Sorry! You haven't added anything to your favorites yet";
      showModal(mess);
      return;
    } else {
      const dataList = createDataList(favourite);
      renderFavouriteCardFromStorage(dataList);
      hideModal();
      addClassesForCoincidencesMarkupAndStoragePages();
    }
  } catch (error) {
    console.log(error);
    spinner.stop();
  }
  spinner.stop();
}

function renderFavouriteCardFromStorage(dataList) {
  const markUp = dataList.reduce((acc, el) => {
    el.title;
    acc += `<div class="news-card" news-id="${el.id}">
      <div class="news-card__img">
        <p class="news-card__theme">${el.category}</p>
        <img
          class="news-card__item"
          src="${el.img}"
          alt="${el.alt ? el.alt : 'photo'}"
          loading="lazy"
          width="395"
        />
        <div class="news-card__favorite">
        <button id ='${
          el.id
        }' class="mybtn label-favorite">Add to favorite</button>
        </div>
      </div>
      <h2 class="news-card__info-title">${el.title}</h2>
      <p class="news-card__info-text">${el.descr}</p>
      <div class="news-card__additional">
        <p class="news-card__date">${el.dateArticle}</p>
        <a class="news-card__more" href="${el.link}" id="${
      el.id
    }" target="_blank" rel="noreferrer noopener"}>Read more</a>
      </div>
    </div>`;
    return acc;
  }, ``);
  gallery.insertAdjacentHTML('beforeend', markUp);
}

function onClickRemoveBtn(e) {
  if (e.target.tagName === 'BUTTON') {
    if (
      !e.target.parentNode.parentNode.parentNode.classList.contains(
        'found-news-card'
      )
    ) {
      setTimeout(() => {
        e.target.parentNode.parentNode.parentNode.remove();
      }, 1000);

      if (!gallery.children.length) {
        showModal("Sorry! You haven't added anything to your favorites yet");
      }
    }
  }
}
