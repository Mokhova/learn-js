'use strict';

window.synchronizeFields = (function () {
  return function (element1, element2, array1, array2, cb) {
    element1.addEventListener('change', function () {
      var indexOfValue = array1.indexOf(element1.value);
      cb(element2, array2[indexOfValue]);
    });
  };
})();
