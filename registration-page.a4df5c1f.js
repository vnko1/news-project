!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in s)return s[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return s[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o),o("9QlH3");var r=o("bpxeT"),i=o("2TvXO"),n=o("gQOBw"),c=o("fivgP"),l=o("9IEE9"),d=o("l4tBk"),u=(0,n.getAuth)(l.app),m=document.querySelector(".reg-form");function h(){return(h=e(r)(e(i).mark((function t(s,a,o){var r,l;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.createUserWithEmailAndPassword)(u,a,o);case 3:return r={displayName:s},e.next=6,(0,n.updateProfile)(u.currentUser,r);case 6:m.reset(),d.spinner.stop(),window.location.href="./index.html",e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),l=e.t0.message,d.spinner.stop(),c.Report.failure(l);case 16:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}m.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements,s=t.name,a=t.email,o=t.password,r=t.repeatedPassword,i=o.value.trim(),n=r.value.trim();if(i!==n)return o.value="",r.value="",void c.Report.failure("You entered different passwords!");if(i.length<7||!/^\D.*$/.test(i)||!/^[^-() /]*$/.test(i)||!/^.*[a-zA-Z]+.*$/.test(i))return o.value="",r.value="",void c.Report.failure("Your password must be at least 7 characters long, and should contain letters!");d.spinner.spin(document.body),function(e,t,s){h.apply(this,arguments)}(s.value.trim(),a.value.trim(),i)}));var g={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},b=localStorage.getItem("theme");b&&document.body.classList.add(b+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state")&&(g.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),g.lightLabel.classList.add("light-theme-site"),g.darkLabel.classList.add("dark-theme-site"),g.iconSun.classList.add("dark-theme-site"),g.iconMoon.classList.add("dark-theme-site"),g.searchInput.classList.add("dark-theme-site"),g.queryBtn.classList.add("dark-theme-site"),g.mobileMenu.classList.add("dark-theme-site")),g.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),g.lightLabel.classList.toggle("light-theme-site"),g.darkLabel.classList.toggle("dark-theme-site"),g.iconSun.classList.toggle("dark-theme-site"),g.iconMoon.classList.toggle("dark-theme-site"),g.searchInput.classList.toggle("dark-theme-site"),g.queryBtn.classList.toggle("dark-theme-site"),g.mobileMenu.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);var t=g.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));var k={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},L=localStorage.getItem("theme-mobile");L&&document.body.classList.add(L+"-theme-site"),"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(k.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),k.lightLabel.classList.add("light-theme-site"),k.darkLabel.classList.add("dark-theme-site"),k.iconSun.classList.add("dark-theme-site"),k.iconMoon.classList.add("dark-theme-site"),k.searchInput.classList.add("dark-theme-site"),k.queryBtn.classList.add("dark-theme-site"),k.mobileMenu.classList.add("dark-theme-site"),k.menuIcon.classList.add("dark-theme-site"),k.menuCross.classList.add("dark-theme-site")),k.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),k.lightLabel.classList.toggle("light-theme-site"),k.darkLabel.classList.toggle("dark-theme-site"),k.iconSun.classList.toggle("dark-theme-site"),k.iconMoon.classList.toggle("dark-theme-site"),k.searchInput.classList.toggle("dark-theme-site"),k.queryBtn.classList.toggle("dark-theme-site"),k.mobileMenu.classList.toggle("dark-theme-site"),k.menuIcon.classList.toggle("dark-theme-site"),k.menuCross.classList.toggle("dark-theme-site"),function(){var e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);var t=k.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}))}();
//# sourceMappingURL=registration-page.a4df5c1f.js.map
