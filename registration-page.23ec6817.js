var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},s={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in s){var o=s[e];delete s[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){s[e]=t},e.parcelRequired7c6=o);var a=o("eyjy7"),c=o("i37YJ"),i=o("krqL4"),n=o("7B1mV");const l=(0,a.getAuth)(i.app),r=document.querySelector(".reg-form");r.addEventListener("submit",(function(e){e.preventDefault();const{name:t,email:s,password:o,repeatedPassword:i}=e.target.elements,d=o.value.trim(),m=i.value.trim();if(d!==m)return o.value="",i.value="",void c.Report.failure("You entered different passwords!");if(d.length<7||!/^\D.*$/.test(d)||!/^[^-() /]*$/.test(d)||!/^.*[a-zA-Z]+.*$/.test(d))return o.value="",i.value="",void c.Report.failure("Your password must be at least 7 characters long, and should contain letters!");n.spinner.spin(document.body),async function(e,t,s){try{await(0,a.createUserWithEmailAndPassword)(l,t,s);const o={displayName:e};await(0,a.updateProfile)(l.currentUser,o),r.reset(),n.spinner.stop(),window.location.href="./index.html"}catch(e){const t=e.message;n.spinner.stop(),c.Report.failure(t)}}(t.value.trim(),s.value.trim(),d)}));const d={checkbox:document.getElementById("theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun"),iconMoon:document.querySelector(".icon-moon"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon")},m=localStorage.getItem("theme");m&&document.body.classList.add(m+"-theme-site");"true"===localStorage.getItem("theme-checkbox-state")&&(d.checkbox.checked=!0,document.body.classList.add("dark-theme-site"),d.lightLabel.classList.add("light-theme-site"),d.darkLabel.classList.add("dark-theme-site"),d.iconSun.classList.add("dark-theme-site"),d.iconMoon.classList.add("dark-theme-site"),d.searchInput.classList.add("dark-theme-site"),d.queryBtn.classList.add("dark-theme-site"),d.mobileMenu.classList.add("dark-theme-site")),d.checkbox.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),d.lightLabel.classList.toggle("light-theme-site"),d.darkLabel.classList.toggle("dark-theme-site"),d.iconSun.classList.toggle("dark-theme-site"),d.iconMoon.classList.toggle("dark-theme-site"),d.searchInput.classList.toggle("dark-theme-site"),d.queryBtn.classList.toggle("dark-theme-site"),d.mobileMenu.classList.toggle("dark-theme-site"),function(){const e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme",e);const t=d.checkbox.checked;localStorage.setItem("theme-checkbox-state",t)}()}));const u={checkboxMobile:document.getElementById("mobile-theme"),mobileMenu:document.querySelector(".menu-container"),lightLabel:document.querySelector(".light-label"),darkLabel:document.querySelector(".dark-label"),iconSun:document.querySelector(".icon-sun-mob"),iconMoon:document.querySelector(".icon-moon-mob"),searchInput:document.querySelector(".search-input"),queryBtn:document.querySelector(".query-btn-icon"),menuIcon:document.querySelector(".menu-toggle__icons"),menuCross:document.querySelector(".menu-toggle__icons-cross")},h=localStorage.getItem("theme-mobile");h&&document.body.classList.add(h+"-theme-site");"true"===localStorage.getItem("theme-checkbox-state-mobile")&&(u.checkboxMobile.checked=!0,document.body.classList.add("dark-theme-site"),u.lightLabel.classList.add("light-theme-site"),u.darkLabel.classList.add("dark-theme-site"),u.iconSun.classList.add("dark-theme-site"),u.iconMoon.classList.add("dark-theme-site"),u.searchInput.classList.add("dark-theme-site"),u.queryBtn.classList.add("dark-theme-site"),u.mobileMenu.classList.add("dark-theme-site"),u.menuIcon.classList.add("dark-theme-site"),u.menuCross.classList.add("dark-theme-site")),u.checkboxMobile.addEventListener("change",(function(){document.body.classList.toggle("dark-theme-site"),u.lightLabel.classList.toggle("light-theme-site"),u.darkLabel.classList.toggle("dark-theme-site"),u.iconSun.classList.toggle("dark-theme-site"),u.iconMoon.classList.toggle("dark-theme-site"),u.searchInput.classList.toggle("dark-theme-site"),u.queryBtn.classList.toggle("dark-theme-site"),u.mobileMenu.classList.toggle("dark-theme-site"),u.menuIcon.classList.toggle("dark-theme-site"),u.menuCross.classList.toggle("dark-theme-site"),function(){const e=document.body.classList.contains("dark-theme-site")?"dark":"light";localStorage.setItem("theme-mobile",e);const t=u.checkboxMobile.checked;localStorage.setItem("theme-checkbox-state-mobile",t)}()}));
//# sourceMappingURL=registration-page.23ec6817.js.map
