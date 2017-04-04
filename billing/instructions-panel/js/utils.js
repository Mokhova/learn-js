'use strict';

window.utils = (function() {

  // вставка в DOM перед каким-то элементом
   function insertBefore(newElem, referenceElem) {
    return referenceElem.parentNode.insertBefore(newElem, referenceElem.nextSibling);
  }

  // поиск всех вхождений, возвращает последнюю найденную позицию
  function getLastEntry(str, substr) {
    var position = -1;
    var lastPositon;

    while ( (position = str.indexOf(substr, position + 1)) !== -1) {
      lastPositon = position;
    }
    return lastPositon;
  }

  return {
    'insertBefore': insertBefore,
    'getLastEntry': getLastEntry
  }

})();
