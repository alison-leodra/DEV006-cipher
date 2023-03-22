import cipher from './cipher.js';

const goEncode = document.getElementById("goEncode");
const goDecode = document.getElementById("goDecode");

const encodeButton = document.getElementById("encodeButton");
const decodeButton = document.getElementById("decodeButton");

const backStartEncode = document.getElementById("backStartEncode");
const backStartDecode = document.getElementById("backStartDecode");

function pageEncode() {
  document.getElementById("initialPage").style.display = "none";
  document.getElementById("encodeSection").style.display = "grid";
}

function pageDecode() {
  document.getElementById("initialPage").style.display = "none";
  document.getElementById("decodeSection").style.display = "grid";
}

function encodeInputToText() {
  const encodeText = document.getElementById("encodeText").value;
  const offsetNumber1 = parseInt(document.getElementById("offsetNumber1").value);
  document.getElementById("mensajeCifrado1").innerHTML = cipher.encode(offsetNumber1, encodeText);

}

function decodeInputToText() {
  const decodeText = document.getElementById("decodeText").value;
  const offsetNumber2 = parseInt(document.getElementById("offsetNumber2").value);
  document.getElementById("mensajeCifrado2").innerHTML = cipher.decode(offsetNumber2, decodeText);
}

function backInitialPage() {
  document.getElementById("initialPage").style.display = "grid";
  document.getElementById("decodeSection").style.display = "none";
  document.getElementById("encodeSection").style.display = "none";
  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("inputs")[i].value = "";
  }
  for (let i = 0; i < 2; i++) {
    document.getElementsByClassName("text")[i].innerHTML = "";
  }
}

goEncode.addEventListener("click", pageEncode);
goDecode.addEventListener("click", pageDecode);

encodeButton.addEventListener("click", encodeInputToText);
decodeButton.addEventListener("click", decodeInputToText);

backStartEncode.addEventListener("click", backInitialPage);
backStartDecode.addEventListener("click", backInitialPage)


console.log(cipher);

