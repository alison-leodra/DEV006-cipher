import cipher from './cipher.js';

const encodeButton = document.getElementById("encodeButton");
const decodeButton = document.getElementById("decodeButton");


function encodeInputToText(){
    const encodeText = document.getElementById("encodeText").value;
    const offsetNumber1 = document.getElementById("offsetNumber1").value;
    cipher.encode(encodeText,offsetNumber1);
}

function decodeInputToText(){
    const decodeText = document.getElementById("decodeText").value;
    const offsetNumber2 = document.getElementById("offsetNumber2").value;
    cipher.decode(decodeText,offsetNumber2);
}



encodeButton.addEventListener("click",encodeInputToText);
decodeButton.addEventListener("click",decodeInputToText);


console.log(cipher);

