'use strict';

window.fillInstructions = (function() {
  var panelText = document.querySelector('.instructions-text');
  var DATA_URL = 'https://api.myjson.com/bins/a5p83';
  var instructions = [];
  var currentInstruction;
  var textDataIndex = 0;
  var imageSrc = document.querySelector('img').src;
  var panel;
  var main = document.querySelector('main');


  function cleanImgURL(imgSrc) {
    var prefixIndex = window.utils.getLastEntry(imgSrc, '/'); // где кончается адрес
    var postfixIndex = window.utils.getLastEntry(imgSrc, '.'); // где начинается расширение
    return imgSrc.substring(prefixIndex + 1, postfixIndex);
  }
  cleanImgURL(imageSrc);

  // Заполняем массив с инструкциями данными из json
  window.load(DATA_URL, function (data) {
    instructions = data;

    for (var i = 0; i < instructions.length; i++) {
      if(instructions[i].artboard === cleanImgURL(imageSrc)) {
        var instructionsPanel = window.createInstructionsPanel(instructions[i].text);
        window.utils.insertBefore(instructionsPanel, main);
        return;
      }
    }
  });
})();
