import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { app } from '../firebase/firebaseApi';
import { users } from '../common/fetchUser';

const auth = getAuth(app);
const gallery = document.querySelector('.gallery-container');

onAuthStateChanged(auth, checkIsLogin);

function checkIsLogin(user) {
  if (user) {
    users.updateProfile(user.displayName, user.email, user.uid);
    gallery.removeEventListener('click', onLogOutClick);
    gallery.addEventListener('click', onLogInClick); // повесить слушателя на галерею
  } else {
    gallery.removeEventListener('click', onLogInClick);
    gallery.addEventListener('click', onLogOutClick); // повесить слушателя на галерею
  }
}

async function onLogInClick(event) {
  //--------------------Favourites--------------------------------

  if (event.target.tagName === 'BUTTON') {
    event.target.parentNode.children[0].classList.toggle(
      'js-favourite-storage'
    );

    if (event.target.parentNode.children[0].textContent === 'Add to favorite') {
      event.target.parentNode.children[0].textContent = 'Remove from favorite';
    } else if (
      event.target.parentNode.children[0].textContent === 'Remove from favorite'
    ) {
      event.target.parentNode.children[0].textContent = 'Add to favorite';
    }

    const arrayChildren = event.target.parentNode.parentNode.parentNode;

    const newData = {
      id: arrayChildren.attributes[1].nodeValue,
      img: arrayChildren.children[0].children[1].src,
      alt: arrayChildren.children[0].children[1].alt,
      title: arrayChildren.children[1].textContent,
      descr: arrayChildren.children[2].textContent,
      dateArticle: arrayChildren.children[3].children[0].textContent,
      link: arrayChildren.children[3].children[1].href,
      category: arrayChildren.children[0].children[0].textContent,
    };

    const favouriteLinks = await users.getAllData('favourites');
    let myResult = null;

    if (!favouriteLinks) myResult = favouriteLinks;
    else myResult = favouriteLinks[newData.id];

    refreshFavouritesStorage(myResult, newData);
  }

  //--------------------Read more--------------------------------

  if (event.target.textContent === 'Read more') {
    event.target.classList.add('js-read-more-storage');

    const arrayChildren = event.target.parentNode.parentNode;

    const newData = {
      date: getDateForCreateObjToStorage(),
      id: arrayChildren.attributes[1].nodeValue,
      img: arrayChildren.children[0].children[1].src,
      alt: arrayChildren.children[0].children[1].alt,
      title: arrayChildren.children[1].textContent,
      descr: arrayChildren.children[2].textContent,
      dateArticle: arrayChildren.children[3].children[0].textContent,
      link: arrayChildren.children[3].children[1].href,
      category: arrayChildren.children[0].children[0].textContent,
    };

    const readMoreList = await users.getAllData('readMore');
    let myResult = null;
    if (!readMoreList) myResult = readMoreList;
    else myResult = readMoreList[newData.id];

    refreshLinkStorage(myResult, newData);
  }
}

function onLogOutClick(event) {
  if (event.target.tagName === 'BUTTON') {
    Report.info('Log in to add to favorites');
  }
  if (event.target.textContent === 'Read more') {
    Report.info('Log in to add to read');
  }
}

function refreshLinkStorage(myResult, newData) {
  if (!myResult) users.setData('readMore', newData.id, newData);
  else users.deleteData('readMore', newData.id);
}

function refreshFavouritesStorage(myResult, newData) {
  if (!myResult) users.setData('favourites', newData.id, newData);
  else users.deleteData('favourites', newData.id);
}

function getDateForCreateObjToStorage() {
  const date = new Date();

  return date.getTime();
}
