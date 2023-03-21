const cipher = {

  encode: (offset, mensaje) => {
    const toEncode = mensaje;
    const offsetNumber1 = offset;
    const charsNum = toEncode.length;
    let encodeFinal = "";

    if (Number.isNaN(offsetNumber1) || offsetNumber1 <= 0 || (Number.isInteger(offsetNumber1) === "False")) {
      throw new TypeError("Argumento INPUT OFFSET invalido");
    }
    else if (mensaje === "") {
      throw new TypeError("Argumento INPUT TEXTO invalido ");
    }
    else {
      for (let i = 0; i < charsNum; i++) {
        const ascciNum = toEncode.charCodeAt(i);
        if (parseInt(ascciNum) !== 32) {

          const newChar = String.fromCharCode((((parseInt(ascciNum) + offsetNumber1) - 33) % 94) + 33);
          encodeFinal = encodeFinal + newChar;
        }
        else if (parseInt(ascciNum) === 32) {
          encodeFinal = encodeFinal + " ";
        }
      }
    }
    console.log(encodeFinal)
    return encodeFinal;
  },

  decode: (offset, mensaje) => {
    const toDecode = mensaje;
    const offsetNumber2 = offset;
    const charsNum = toDecode.length;
    let decodeFinal = "";

    if (Number.isNaN(offsetNumber2) || offsetNumber2 <= 0 || (Number.isInteger(offsetNumber2) === "False")) {
      throw new TypeError("El offset no es un Numero");
    }
    else if (mensaje === "") {
      throw new TypeError("EL mensaje a cifrar no es un texto");
    }
    else {
      for (let i = 0; i < charsNum; i++) {
        const ascciNum = toDecode.charCodeAt(i);
        if (parseInt(ascciNum) !== 32) {
          const newChar = String.fromCharCode((((parseInt(ascciNum) - 126) - offsetNumber2) % 94) + 126);
          decodeFinal = decodeFinal + newChar;
        }
        else if (parseInt(ascciNum) === 32) {
          decodeFinal = decodeFinal + " ";
        }
      }
      return decodeFinal;
    }
  }
}
export default cipher;
