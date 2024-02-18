
let cadastroData = JSON.parse(localStorage.getItem('cadastroData')) || {};


function salvarCadastroLocalStorage() {
  localStorage.setItem('cadastroData', JSON.stringify(cadastroData));
}

//cadastro
let tentativasLogin = 0;

function mostrarLogin() {
  document.getElementById('cadastro').style.display = 'none';
  document.getElementById('login').style.display = 'block';
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nome = document.getElementById('nome').value;
  const dataNascimento = new Date(document.getElementById('dataNascimento').value);
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;
  const confirmarSenha = document.getElementById('confirmarSenha').value;

  if (senha !== confirmarSenha) {
    alert('As senhas não são iguais. Tente novamente.');
    return;
  }

  // Verifica se o usuário tem pelo menos 18 anos
  const hoje = new Date();
  const idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = hoje.getMonth() + 1; // +1 porque os meses são indexados a partir de 0
  const diaAtual = hoje.getDate();
  const mesNascimento = dataNascimento.getMonth() + 1;
  const diaNascimento = dataNascimento.getDate();

  if (idade < 18 || (idade === 18 && (mesNascimento > mesAtual || (mesNascimento === mesAtual && diaNascimento > diaAtual)))) {
    alert('Você é menor de 18 anos. Não é permitido prosseguir.');
    return;
  }

  // Cadastro bem-sucedido
  cadastroData = {
    nome,
    email,
    senha
  };
  document.getElementById('cadastro').style.display = 'none';
  document.getElementById('login').style.display = 'block';

  salvarCadastroLocalStorage();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const emailLogin = document.getElementById('emailLogin').value;
  const senhaLogin = document.getElementById('senhaLogin').value;

  if (emailLogin !== cadastroData.email || senhaLogin !== cadastroData.senha) {
    tentativasLogin++;
    if (tentativasLogin >= 3) {
      alert('Você excedeu o número de tentativas de login. O jogo será fechado.');
        window.close();
    } else {
      alert('Email ou senha incorretos. Tente novamente.');
    }
    return;
  }

  document.getElementById('login').style.display = 'none';
  document.getElementById('criacaopersonagem').style.display = 'block';
  document.getElementById("classe").value;
});

//distribuir pontos pra classe
function distribuirPontosClasse() {
    var classe = document.getElementById("classe").value;
    var vida = document.getElementById("vida").value;
    var mana = document.getElementById("mana").value;
    var velocidadeAtaque = document.getElementById("velocidadeAtaque").value;

    var infoClasse = document.getElementById("infoClasse");
    infoClasse.innerHTML = "<h4>Informações da Classe Escolhida:</h4>" +
                           "<p>" + classe + "</p>" +
                           "<p>Vida: " + vida + "</p>" +
                           "<p>Mana: " + mana + "</p>" +
                           "<p>Velocidade de Ataque: " + velocidadeAtaque + "</p>";
}

function distribuirPontosMontaria(){
    var montaria = document.getElementById("montaria").value;
    var velocidade = document.getElementById("velocidade").value;
    var tempoDescanso = document.getElementById("tempoDescanso").value;

    var infoMontaria = document.getElementById("infoMontaria");
    infoMontaria.innerHTML = "<h4>Informações da Montaria Escolhida:</h4>" +
                              "<p>" + montaria + "</p>" +
                              "<p>Velocidade: " + velocidade + " m/s</p>" +
                              "<p>Tempo para Descanso: " + tempoDescanso + " minutos</p>";
}

//mostrar informacao do personagem
function mostrarInformacoesPersonagem()  {
    var classe = document.getElementById("classe").value;
    var montaria = document.getElementById("montaria").value;
    var corPersonagem = document.getElementById("corPersonagem").value;
    var corCabelo = document.getElementById("corCabelo").value;
    var ferramentaBatalha = document.getElementById("FerramentaBatalha").value;

    var infoPersonagem = document.getElementById("infoPersonagem");
    infoPersonagem.innerHTML = "<h4>Informações do Personagem:</h4>" +
                               "<p>Classe: " + classe + "</p>" +
                               "<p>Montaria: " + montaria + "</p>" +
                               "<p style= 'display: flex'>Cor do Personagem: <span style= 'background-color:" + corPersonagem + "; width: 50px; height: 20px; display:block'></span></p>" +
                               "<p style= 'display: flex'>Cor do Cabelo: <span style='background-color:" + corCabelo + "; width: 50px; height: 20px; display:block'></span></p>" +
                               "<p>Ferramenta de Batalha: " + ferramentaBatalha + "</p>" + 
                               "<h3>Atributos da classe e montaria:</h3>"                                                      
    // Informações específicas de cada classe
    if (classe === "Paladino") {
        infoPersonagem.innerHTML += "<p>Paladino - Vida: 85, Mana: 35, Velocidade de Ataque: 1.25</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (classe === "Atirador") {
        infoPersonagem.innerHTML += "<p>Atirador - Vida: 70, Velocidade: 1.5, Precisão: 85%</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (classe === "Guerreiro") {
        infoPersonagem.innerHTML += "<p>Guerreiro - Vida: 90, Resistência: 80, Força: 95</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (classe === "Bárbaro") {
        infoPersonagem.innerHTML += "<p>Bárbaro - Vida: 100, Fúria: 50, Brutalidade: 90</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (classe === "Arqueiro") {
        infoPersonagem.innerHTML += "<p>Arqueiro - Vida: 75, Precisão: 95%, Velocidade de Ataque: 1.75</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    }

    // Informações específicas de cada montaria
    if (montaria === "Panda") {
        infoPersonagem.innerHTML += "<p>Panda - Velocidade: 3m/s, Tempo para descanso: 5 minutos</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (montaria === "Cavalo") {
        infoPersonagem.innerHTML += "<p>Cavalo - Velocidade: 4m/s, Tempo para descanso: 7 minutos</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (montaria === "Dragão") {
        infoPersonagem.innerHTML += "<p>Dragão - Velocidade: 8m/s, Tempo para descanso: 10 minutos</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (montaria === "Pantera") {
        infoPersonagem.innerHTML += "<p>Pantera - Velocidade: 6m/s, Tempo para descanso: 8 minutos</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    } else if (montaria === "Lobo") {
        infoPersonagem.innerHTML += "<p>Lobo - Velocidade: 5m/s, Tempo para descanso: 6 minutos</p>" + "<img src='https://cdn.pixabay.com/photo/2023/08/27/22/24/paladin-8217999_1280.png' class='img-result'></img>";
    }
    
    document.getElementById('iniciarJogo').style.display = 'block';
}




function iniciarJogo() {
    // Lógica para iniciar o jogo...
    alert("O jogo está iniciando!");
}