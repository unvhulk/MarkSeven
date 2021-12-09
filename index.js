var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function errorHandler(error) {
  console.log(`error occured: ${error}`);
}

function getTranslationURL(text) {
  return `${serverURL}?text=${text}`;
}

function clickEventHandler() {
  var inputText = txtInput.value;

  fetch(getTranslationURL(inputText))
    .then((resp) => resp.json())
    .then((translated) => {
      console.log(translated);
      let txtTranslated = translated.contents.translated;
      txtOutput.innerText = txtTranslated;
    })
    .catch(errorHandler);
}

btnTranslate.addEventListener("click", clickEventHandler);
