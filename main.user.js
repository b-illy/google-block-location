// ==UserScript==
// @name           google block location text
// @author         b-illy
// @version        1.1
// @match          https://www.google.com/search*
// @run-at         document-start
// @downloadURL    https://b-illy.github.io/google-block-location/main.user.js
// @updateURL      https://b-illy.github.io/google-block-location/main.user.js
// @grant          none
// ==/UserScript==

const headElem = document.getElementsByTagName("head")[0];
const styleElem = document.createElement("style");
styleElem.innerHTML = `
#oFNiHe, .dfB0uf { 
	display: none !important;
}`;
headElem.appendChild(styleElem);
