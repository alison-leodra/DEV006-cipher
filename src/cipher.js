const cipher = {

  encode: (offset, mensaje) => {
    const toEncode = mensaje;
    const offsetNumber1 = offset;
    const charsNum = toEncode.length;
    let encodeFinal = "";

    for (let i = 0; i < charsNum; i++) {

      const ascciNum = toEncode.charCodeAt(i);

      if (parseInt(ascciNum) !== 32) {

        const newChar = String.fromCharCode((((parseInt(ascciNum) + parseInt(offsetNumber1)) - 65) % 26) + 65);
        encodeFinal = encodeFinal + newChar;
      }

      else if (parseInt(ascciNum) === 32) {
        encodeFinal = encodeFinal + " ";
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

    for (let i = 0; i < charsNum; i++) {

      const ascciNum = toDecode.charCodeAt(i);

      if (parseInt(ascciNum) !== 32) {

        const newChar = String.fromCharCode((((parseInt(ascciNum) - 90) - parseInt(offsetNumber2)) % 26) + 90);
        decodeFinal = decodeFinal + newChar;
      }

      else if (parseInt(ascciNum) === 32) {
        decodeFinal = decodeFinal + " ";

      }
    }

    console.log(decodeFinal)
    return decodeFinal;
  }

}
export default cipher;
