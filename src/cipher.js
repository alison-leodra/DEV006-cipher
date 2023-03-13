const cipher = {
  
 encode: (param1,param2)=> {
    const toEncode = param1;
    const offsetNumber1 = param2;
    console.debug(`esta funcionando : ${toEncode}, ${offsetNumber1}` )
 },

 decode: (param1,param2)=>{
    let toDecode =param1;
    const offsetNumber2 = param2;
    let charsNum = toDecode.length;
    alert(toDecode.charCodeAt(0))
  } 
 }

export default cipher;
