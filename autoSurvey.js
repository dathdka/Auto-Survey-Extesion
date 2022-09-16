//custom check
const autoComplete = () => {
  var choice = prompt("     L: low\n     M: Medium\n     H: High");
  var min, max;
  switch (choice) {
    case ("L", "l"):
      min = 1;
      max = 3;
      break;
    case ("M", "m"):
      min = 3;
      max = 5;
      break;
    case ("H", "h"):
      min = 4;
      max = 6;
      break;
    default:
      min = 1;
      max = 6;
      break;
  }
  for (let i = 1; i <= 2000; i++) {
    query = stringBuilder(i, min, max);
    target = document.getElementById(query);
    if (target) target.click();
    else if ((target = document.getElementById(stringBuilder(i, min, max - 1))))
      target.click();
  }
};

const stringBuilder = (number, min, max) => {
  const answer = Math.floor(Math.random() * (max - min) + min);
  return `cauhoi${number}dapan${answer}`;
};

window.addEventListener("load", waitForLoad, false);
function waitForLoad(evt) {
  var jsInitChecktimer = setInterval(checkForJS_Finish, 111);

  function checkForJS_Finish() {
    if (
      document.querySelector("#cauhoi1192dapan1") ||
      document.querySelector("#cauhoi788dapan1")
    ) {
      clearInterval(jsInitChecktimer);
      autoComplete();
    }
  }
}
