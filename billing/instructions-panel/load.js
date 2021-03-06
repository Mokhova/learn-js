'use strict';

window.load = (function() {
  var DATA_URL = null;

  return function (DATA_URL, onLoad) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', DATA_URL);
    xhr.send();
  }
})();
