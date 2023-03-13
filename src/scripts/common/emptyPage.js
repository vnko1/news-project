import emptyMob1x from '/src/images/img/empty-news-mob-1x.png';
import emptyMob2x from '/src/images/img/empty-news-mob-2x.png';
import emptyPc1x from '/src/images/img/empty-news-pc-1x.png';
import emptyPc2x from '/src/images/img/empty-news-pc-2x.png';
import emptyTab1x from '/src/images/img/empty-news-tab-1x.png';
import emptyTab2x from '/src/images/img/empty-news-tab-2x.png';

export function renderEmptyPage(el, message) {
  console.log(el);
  const markUp = `<div class="not-found-page">
    <h2 class="empty-page__title">${message}</h2>
    <picture>
        <source srcset="
            ${emptyPc1x} 1x,
            ${emptyPc2x} 2x
            " media="(min-width: 1170px)">
        <source srcset="
            ${emptyTab1x} 1x,
            ${emptyTab2x} 2x
            " media="(min-width: 768px)">
        <source srcset="
            ${emptyMob1x} 1x,
           ${emptyMob2x} 2x
            " media="(max-width: 767px)">
        <img src="/src/images/img/empty-news-mob-1x.png" alt="News not find" width="248">
    </picture>
</div>`;
  el.innerHtml = markUp;
}
