!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return r[e]=i,t.call(i.exports,i,i.exports),i.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i),i.register("4tFZ4",(function(t,r){var n=i("bpxeT"),a=i("2TvXO"),d=i("dIGoD");function o(){return(o=e(n)(e(a).mark((function t(r){var n,i,o,u,f,h;return e(a).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("BUTTON"!==r.target.tagName){e.next=11;break}return r.target.parentNode.children[0].classList.toggle("js-favourite-storage"),"Add to favorite"===r.target.parentNode.children[0].textContent?r.target.parentNode.children[0].textContent="Remove from favorite":"Remove from favorite"===r.target.parentNode.children[0].textContent&&(r.target.parentNode.children[0].textContent="Add to favorite"),n=r.target.parentNode.parentNode.parentNode,i={id:n.attributes[1].nodeValue,img:n.children[0].children[1].src,alt:n.children[0].children[1].alt,title:n.children[1].textContent,descr:n.children[2].textContent,dateArticle:n.children[3].children[0].textContent,link:n.children[3].children[1].href,category:n.children[0].children[0].textContent},e.next=7,d.users.getAllData("favourites");case 7:o=e.sent,null,c(o?o[i.id]:o,i);case 11:if("Read more"!==r.target.textContent){e.next=21;break}return r.target.classList.add("js-read-more-storage"),u=r.target.parentNode.parentNode,f={date:s(),id:u.attributes[1].nodeValue,img:u.children[0].children[1].src,alt:u.children[0].children[1].alt,title:u.children[1].textContent,descr:u.children[2].textContent,dateArticle:u.children[3].children[0].textContent,link:u.children[3].children[1].href,category:u.children[0].children[0].textContent},e.next=17,d.users.getAllData("readMore");case 17:h=e.sent,null,l(h?h[f.id]:h,f);case 21:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function l(e,t){e||d.users.setData("readMore",t.id,t)}function c(e,t){e?d.users.deleteData("favourites",t.id):d.users.setData("favourites",t.id,t)}function s(){return(new Date).getTime()}document.querySelector(".gallery-container").addEventListener("click",(function(e){return o.apply(this,arguments)}))}))}();
//# sourceMappingURL=favorite.01f8e3bd.js.map