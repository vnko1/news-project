import { getStorageList } from './commonFunctions';

// import { Report } from 'notiflix/build/notiflix-report-aio';
import { users } from '../common/fetchUser';

const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', onClick); // повесить слушателя на галерею

async function onClick(event) {
  //--------------------Favourites--------------------------------

  if (event.target.tagName === 'BUTTON') {
    //label
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

    const newObj = {
      id: arrayChildren.attributes[1].nodeValue,
      img: arrayChildren.children[0].children[1].src,
      alt: arrayChildren.children[0].children[1].alt,
      title: arrayChildren.children[1].textContent,
      descr: arrayChildren.children[2].textContent,
      dateArticle: arrayChildren.children[3].children[0].textContent,
      link: arrayChildren.children[3].children[1].href,
      category: arrayChildren.children[0].children[0].textContent,
    };

    // const favouriteLinks = getStorageList('favourites');
    const favouriteLinks = await users.getData('favourites');

    let myResult = null;
    if (favouriteLinks) {
      myResult = favouriteLinks.some(object => object.id === newObj.id);
    }

    refreshFavouritesStorage(myResult, favouriteLinks, newObj);
  }

  //--------------------Read more--------------------------------

  if (event.target.textContent === 'Read more') {
    // event.preventDefault();
    event.target.classList.add('js-read-more-storage');

    const arrayChildren = event.target.parentNode.parentNode;

    const newObj = {
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

    const readMoreList = await users.getData('readMore');
    let myResult = null;
    if (readMoreList) {
      myResult = readMoreList.some(object => object.id === newObj.id);
    }

    refreshLinkStorage(myResult, readMoreList, newObj);
  }
}

//================================================

function refreshLinkStorage(myResult, list, newObj) {
  if (!myResult) {
    if (!list) list = [];
    list.push(newObj);
    users.setData('readMore', list);
    // localStorage.setItem('read more', JSON.stringify(list));
  } else {
    const linkIndex = list.findIndex(object => object.id === newObj.id);

    list.splice(linkIndex, 1);
    list.push(newObj);

    //   localStorage.setItem('read more', JSON.stringify(list));
    users.setData('readMore', list);
  }
}

function refreshFavouritesStorage(myResult, list, newObj) {
  console.log(myResult);
  if (!myResult) {
    if (!list) list = [];
    // console.log(list);
    list.push(newObj);

    //   localStorage.setItem('favourites', JSON.stringify(list));
    users.setData('favourites', list);
  } else {
    const linkIndex = list.findIndex(object => object.id === newObj.id);

    list.splice(linkIndex, 1);
    list.push(newObj);

    //   localStorage.setItem('favourites', JSON.stringify(list));
    users.setData('favourites', list);
  }
}

function addEmptyArrtoStorage(valueOfKeyStorage) {
  localStorage.setItem(valueOfKeyStorage, JSON.stringify([]));
}

function getDateForCreateObjToStorage() {
  const date = new Date();

  return date.getTime();
}
