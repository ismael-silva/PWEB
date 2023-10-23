function transformarTexto() {
    const textoInput = document.getElementById("textoInput").value;
    const maiusculasCheckbox = document.getElementById("maiusculasCheckbox");
    const minusculasCheckbox = document.getElementById("minusculasCheckbox");
    const textoTransformado = document.getElementById("textoTransformado");
  
    let texto = textoInput;
  
    if (maiusculasCheckbox.checked) {
      texto = texto.toUpperCase();
    }
  
    if (minusculasCheckbox.checked) {
      texto = texto.toLowerCase();
    }
  
    textoTransformado.textContent = texto;
  }
  