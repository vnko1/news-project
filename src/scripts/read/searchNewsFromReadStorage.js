import { spinner } from '../common/libraries';
import {
  showModal,
  hideModal,
  addClassesForCoincidencesMarkupAndStoragePages,
  createDataList,
} from '../common/commonFunctions';
import { users } from '../common/fetchUser';

const formEl = document.getElementById('search-form');
const galleryEl = document.querySelector('.gallery-container');

formEl.addEventListener('submit', onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();
  hideModal();
  spinner.spin(document.body);
  const searchValue = e.target.elements.searchQuery.value;

  const data = await users.getAllData('readMore');
  if (!data) {
    showModal('Nothing was found matching your search!');
    spinner.stop();
    return;
  }

  const dataList = createDataList(data);
  const newArrObj = dataList.filter(
    obj =>
      obj.descr.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
      obj.category.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
      obj.title.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  if (newArrObj.length > 0) {
    render(newArrObj);
    addClassesForCoincidencesMarkupAndStoragePages();
  } else {
    showModal();
  }
  formEl.reset();
  spinner.stop();
}

function render(arr) {
  const markUp = arr.reduce((acc, el) => {
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
      <p class="news-card__info-text">${el.descr.limit(120)}</p>
      <div class="news-card__additional">
        <p class="news-card__date">${el.dateArticle}</p>
        <a class="news-card__more" href="${el.link}" id="${
      el.id
    }" target="_blank" rel="noreferrer noopener"}>Read more</a>
      </div>
    </div>`;
    return acc;
  }, ``);

  galleryEl.innerHTML = markUp;
  galleryEl.classList.add('read-search');
}
