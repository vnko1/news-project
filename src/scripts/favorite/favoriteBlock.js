import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { spinner } from '../common/libraries';
import { app } from '../firebase/firebaseApi';
import { users } from '../common/fetchUser';
import { addClassesForCoincidencesMarkupAndStoragePages } from '../common/commonFunctions';
// import { renderEmptyPage } from '../common/emptyPage';

const auth = getAuth(app);
const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', onClickRemoveBtn);

onAuthStateChanged(auth, checkIsLogin);

function checkIsLogin(user) {
  if (user) {
    users.updateProfile(user.displayName, user.email, user.uid);
    onLoadFavoriteNews();
  } else {
    const mess = 'Login to your account to see your favorite news!';
    renderEmptyPage(gallery, mess);
    gallery.innerHTML = '<p>Hello</p>';
  }
}

async function onLoadFavoriteNews() {
  spinner.spin(document.body);
  try {
    const favourite = await users.getAllData('favourites');

    if (!favourite) {
      spinner.stop();
      const mess = "Sorry! You haven't added anything to your favorites yet";
      renderEmptyPage(gallery, mess);
      return;
    } else {
      const dataList = createDataList(favourite);
      renderFavouriteCardFromStorage(dataList);
      addClassesForCoincidencesMarkupAndStoragePages();
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
    e.target.parentNode.parentNode.parentNode.remove();
  }
}

// function renderEmptyPage(el, message) {
//   console.log(el);
//   const markUp = `<div class="not-found-page">
//     <h2 class="empty-page__title">${message}</h2>
//     <picture>
//         <source srcset="
//             ${emptyPc1x} 1x,
//             ${emptyPc2x} 2x
//             " media="(min-width: 1170px)">
//         <source srcset="
//             ${emptyTab1x} 1x,
//             ${emptyTab2x} 2x
//             " media="(min-width: 768px)">
//         <source srcset="
//             ${emptyMob1x} 1x,
//            ${emptyMob2x} 2x
//             " media="(max-width: 767px)">
//         <img src="/src/images/img/empty-news-mob-1x.png" alt="News not find" width="248">
//     </picture>
// </div>`;
//   gallery.innerHtml = markUp;
// }
