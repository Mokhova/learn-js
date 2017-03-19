'use strict';

window.fillInstructions = (function() {
  var panel = document.querySelector('.instructions');
  var panelText = panel.querySelector('.instructions-text');
  var DATA_URL = 'data.json';
  var instructions = [];
  var currentInstructionIndex;

  function getArtboardNumber() {
    var targetImg = document.querySelector('main > img');
    var targetImgNumber = 0;
    targetImgNumber = targetImg.src.substring(4,6);
    console.log(targetImgNumber);

    if (targetImgNumber.substring(0,1) === 0) return instructionsDataIndex = targetImgNumber.substring(1,2);
    return instructionsDataIndex = targetImgNumber;
  }

  // Заполняем массив с инструкциями данными из json
  window.load(DATA_URL, function(data) {
    instructions = data;
    currentInstruction = getArtboardNumber();
    panelText.innerHTML = data[currentInstruction].text;
  });
})();
