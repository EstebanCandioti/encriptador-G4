const textoInicial = document.querySelector("[data-textoInicial]");
const textoFinal = document.querySelector("[data-textoFinal]");
//la letra e es convertida en enter
//la letra i es convertida en imes
//la letra a es contertida en ai
//la letra o es convertida en ober
//la letra u es convertida en ufat


function btnEncriptar(){
    const textoEncriptado = encriptar(textoInicial.value)
    textoFinal.value= textoEncriptado
    textoInicial.value="";
    const areaEncriptada = document.querySelector(".salida")
    areaEncriptada.style.backgroundImage="none"
    const consejo=document.querySelector(".salida__consejo")
    consejo.style.display="none"
    const texto=document.querySelector(".salida__texto")
    texto.style.display="none"
}

function btnDesencriptar(){
  const textoDesencriptado = desencriptar(textoInicial.value)
  textoFinal.value=textoDesencriptado;
  textoInicial.value="";
}

function copiar(){
  const textoACopiar = document.querySelector("[data-textoFinal]")
  if(textoACopiar.value!=""){
    textoACopiar.select();
    textoACopiar.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textoACopiar.value)
    alert("se ha copiado el texto")
  }else{
    alert("no se ha podido copiar el texto")
  }

}

function encriptar(stringEncriptado) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "inter"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptado.includes(matrizCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
}

function desencriptar(stringEncriptado) {
    let matrizCodigo = [
      ["e", "enter"],
      ["i", "inter"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    stringEncriptado = stringEncriptado.toLowerCase();
    for (let i = 0; i < matrizCodigo.length; i++) {
      if (stringEncriptado.includes(matrizCodigo[i][1])) {
        stringEncriptado = stringEncriptado.replaceAll(
          matrizCodigo[i][1],
          matrizCodigo[i][0]
        );
      }
    }
    return stringEncriptado;
  }