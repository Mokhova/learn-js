'use strict';

window.fillInstructions = (function() {
  var panelText = document.querySelector('.instructions-text');
  var DATA_URL = 'https://api.myjson.com/bins/a5p83';
  var instructions = [];
  var currentInstruction;
  var textDataIndex = 0;
  var imageSrc = document.querySelector('img').src;
  var imageNumber;

  function getImgNumber(someSrting) {
    if (+someSrting.substring(0, 1) === 0) {
      imageNumber = +someSrting.substring(1, 2);
    } else {
      imageNumber = +someSrting.substring(0, 1);
    }
    return imageNumber;
    // return 0;
  }

  // Заполняем массив с инструкциями данными из json
  window.load(DATA_URL, function (data) {
      instructions = data;

      var image = document.querySelector('img').src;
      var imageNumber;

      for (var i = 0; i < instructions.length; i++) {
        if (textDataIndex === 0) {
          if (imageSrc.indexOf(instructions[i].artboard) >= 0) {
            textDataIndex = getImgNumber(instructions[i].artboard);
          }
        }
      }
      panelText.innerHTML = instructions[textDataIndex-1].text;
  });
})();
