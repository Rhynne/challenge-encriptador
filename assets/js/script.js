function encrypt() {
  let input = document.getElementById('input').value;
  let sideBackground = document.getElementById('side-background');
  let result = document.getElementById('result');
  let buttonCopy = document.getElementById('button-copy');
  let sideTop = document.getElementById('side-top');
  let sideMiddle = document.getElementById('side-middle');

  if (input) {
    input = input.replace(/e/g, 'enter');
    input = input.replace(/i/g, 'imes');
    input = input.replace(/a/g, 'ai');
    input = input.replace(/o/g, 'ober');
    input = input.replace(/u/g, 'ufat');

    sideBackground.classList.remove('side-background-initial');
    sideBackground.classList.add('side-background-result');
    buttonCopy.classList.remove('nodisplay');
    sideTop.classList.remove('nodisplay');
    sideMiddle.classList.add('nodisplay');

    result.innerHTML = input;
  }
}

function decrypt() {
  let input = document.getElementById('input').value;

  if (input) {
    input = input.replace(/enter/g, 'e');
    input = input.replace(/imes/g, 'i');
    input = input.replace(/ai/g, 'a');
    input = input.replace(/ober/g, 'o');
    input = input.replace(/ufat/g, 'u');

    result.innerHTML = input;
  }
}

function copy() {
  let result = document.getElementById('result');
  let range = document.createRange();

  range.selectNode(result);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
}
