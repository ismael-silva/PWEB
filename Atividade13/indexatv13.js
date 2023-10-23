function abrirJanela() {
    document.getElementById('janela').style.backgroundImage = "url('img/janelaAberta.jpg')";
    document.querySelector('h1').innerText = "Janela Aberta";
  }
  
  function fecharJanela() {
    document.getElementById('janela').style.backgroundImage = "url('img/janelaFechada.jpg')";
    document.querySelector('h1').innerText = "Janela Fechada";
  }
  
  function quebrarJanela() {
    document.getElementById('janela').style.backgroundImage = "url('img/janelaQuebrada.jpg')";
    document.querySelector('h1').innerText = "Janela Quebrada";
  }
  