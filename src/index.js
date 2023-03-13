import cipher from './cipher.js';

const encodeButton = document.getElementById("encodeButton");
const encodeText = document.getElementById("encodeText");
const decodeButton = document.getElementById("decodeButton");
const decodeText = document.getElementById("decodeText");


encodeButton.addEventListener("click",cipher.encode(encodeText));
decodeButton.addEventListener("click",cipher.decode(decodeText));


console.log(cipher);
