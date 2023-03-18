import { users } from '../common/fetchUser';

const gallery = document.querySelector('.gallery-container');

gallery.addEventListener('click', onClick); // повесить слушателя на галерею

async function onClick(event) {
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
    try {
      const favouriteLinks = await users.getAllData('favourites');
      let myResult = null;

      if (!favouriteLinks) myResult = favouriteLinks;
      else myResult = favouriteLinks[newData.id];

      refreshFavouritesStorage(myResult, newData);
    } catch (error) {
      console.log(error);
    }
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
    try {
      const readMoreList = await users.getAllData('readMore');
      let myResult = null;
      if (!readMoreList) myResult = readMoreList;
      else myResult = readMoreList[newData.id];

      refreshLinkStorage(myResult, newData);
    } catch (error) {
      console.log(error);
    }
  }
}

function refreshLinkStorage(myResult, newData) {
  if (!myResult) users.setData('readMore', newData.id, newData);
  else return;
}

function refreshFavouritesStorage(myResult, newData) {
  if (!myResult) users.setData('favourites', newData.id, newData);
  else users.deleteData('favourites', newData.id);
}

function getDateForCreateObjToStorage() {
  const date = new Date();

  return date.getTime();
}
