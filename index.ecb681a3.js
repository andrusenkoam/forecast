!function(){var t=document.querySelector(".js-search"),n=document.querySelector(".js-list");t.addEventListener("submit",(function(t){t.preventDefault();var e=t.currentTarget.elements,c=e.query,a=e.days;(function(t,n){var e="a9b2b5b585064de1aab74606242609";return fetch("".concat("https://api.weatherapi.com/v1","/forecast.json?key=").concat(e,"&q=").concat(t,"&days=").concat(n,"&lang=uk")).then((function(t){if(!t.ok)throw new Error(t.statusText);return t.json()}))})(c.value,a.value).then((function(t){return n.innerHTML=t.forecast.forecastday.map((function(t){var n=t.date,e=t.day,c=e.avgtemp_c,a=e.condition,o=a.icon,r=a.text;return'<li class="item">\n        <img src="'.concat(o,'" alt="').concat(r,'" />\n        <p class="text">').concat(r,"</p>\n        <h2>").concat(n,"</h2>\n        <h3>").concat(c," C&ordm;</h3>\n      </li>")})).join("")})).catch((function(t){return console.log(t)}))}))}();
//# sourceMappingURL=index.ecb681a3.js.map
