const cipher = {
  
 encode: (param1,param2)=> {
    const toEncode = param1;
    const offsetNumber1 = param2;
    let charsNum = toEncode.length;
    let encodeFinal="";

    for (let i=0 ; i < charsNum ; i++)
    {

    let ascciNum = toEncode.charCodeAt(i);
    let newNum = (parseInt(ascciNum) + parseInt(offsetNumber1))

    if (parseInt(ascciNum)!= 32 ){

      if (newNum > 90){
      let newChar = String.fromCharCode(((newNum-65)%26)+65);
      encodeFinal = encodeFinal + newChar;
      }
      else{
      let newChar = String.fromCharCode(newNum);
      encodeFinal = encodeFinal + newChar;
      }
    }
    else{
      encodeFinal = encodeFinal + " ";
    }
   }
   console.log(encodeFinal)
   alert(encodeFinal);
 },

 decode: (param1,param2)=>{
    let toDecode =param1;
    const offsetNumber2 = param2;
    let charsNum = toDecode.length;
    alert(toDecode.charCodeAt(0))
  } 
 }

export default cipher;
