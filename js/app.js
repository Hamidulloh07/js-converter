let elForm = document.querySelector("form");
let elInputFirst = document.querySelector(".input-1")
let elInputSecond = document.querySelector(".input-2");

elInputFirst.oninput = () => {
  let elOutput = ((elInputFirst.value) * 1.8) + 32;
  let elOutput2 = ((elInputFirst.value) + 273.15);
  elInputSecond.value = (elOutput.toFixed(2));
  elInputThird.value = (elOutput2.toFixed(2));

}

elInputSecond.oninput = () => {
  let elOutput = (((elInputSecond.value) - 32) / 1.8);
  let elOutput2 = (((elInputSecond.value) - 32) / 1.8) + 273.15;
  elInputFirst.value = (elOutput.toFixed(2));
  elInputThird.value = (elOutput2.toFixed(2));
};


