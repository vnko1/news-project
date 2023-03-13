import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { spinner } from '../common/libraries';
import { app } from '../firebase/firebaseApi';
import { users } from '../common/fetchUser';

const auth = getAuth(app);
const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', onClickRemoveBtn);

onAuthStateChanged(auth, checkIsLogin);

function checkIsLogin(user) {
  if (user) {
    users.updateProfile(user.displayName, user.email, user.uid);
    onLoadFavoriteNews();
  } else {
  }
}

async function onLoadFavoriteNews() {
  // функція загрузки зі сториджа та перевірки парсінгу
  spinner.spin(document.body);
  try {
    const favourite = await users.getAllData('favourites');

    // const keyFavorite = localStorage.getItem('favourites');
    // const parsedFavorite = JSON.parse(keyFavorite);
    if (!favourite) {
      spinner.stop();
      Report.info('You have no favorite news yet!');
      return;
    } else {
      const dataList = createDataList(favourite);
      renderFavouriteCardFromStorage(dataList);
      // addClassesForCoincidencesMarkupAndStoragePages();
    }
  } catch (error) {
    console.log(error);
    spinner.stop();
  }
  spinner.stop();
}

function createDataList(data) {
  const dataList = [];
  const keys = Object.keys(data);
  for (const key of keys) {
    dataList.push(data[key]);
  }
  return dataList;
}

function renderFavouriteCardFromStorage(dataList) {
  const markUp = dataList.reduce((acc, el) => {
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
      <h2 class="news-card__info-title">${el.title.limit(50, {
        ending: '',
      })}</h2>
      <p class="news-card__info-text">${el.descr.limit(180)}</p>
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
    e.target.parentNode.parentNode.parentNode.remove();
  }
}
