var palavras = ['adulto', "conselhos", "arranjo", "tentativa", "agosto", "outono", "fronteira", "brisa",
  "tijolo", "calma", "canal", "escolheu", "garras", "treinador", "constantemente", "profundamente",
  "agarrado", "alegremente", "imagem", "independente", "instante", "janeiro", "manufatura", "derretido",
  "moinho", "macaco", "misterioso", "nozes", "oficial"
];
var erros, erro, digitado, acertou, errou, sorteio, resposta, english = false;

init();
/*
 * PT-BR - Troca do Idioma
 * EN-US - Language Change
 */
document.querySelector('.btn-en').addEventListener('click', function() {
  document.querySelector('.btn-en').style.fontWeight = "bold";
  document.querySelector('.btn-pt').style.fontWeight = "normal";
  palavras = ['able', 'about', 'account', 'band', 'base', 'basin', 'basket', 'branch', 'brass', 'bread', 'breath',
    'come', 'comfort', 'committee', 'common', 'company', 'desire', 'destruction', 'detail', 'development', 'different',
    'digestion', 'experience', 'expert', 'eye', 'face', 'fact', 'fall', 'fruit', 'full', 'future', 'garden', 'general',
    'get', 'girl'
  ];
  document.getElementById('bank-text').textContent = 'Wrong Letters:';
  document.querySelector('.btn-submit').textContent = 'SEND';
  document.getElementById('letter-text').textContent = 'LETTER:';
  document.getElementById('new-text').textContent = 'NEW GAME';
  document.querySelector('.winner').textContent = 'YOU WIN!';
  document.getElementById('lose-text').textContent = 'YOU LOSE!';
  english = true;
  init();
});
document.querySelector('.btn-pt').addEventListener('click', function() {
  document.querySelector('.btn-pt').style.fontWeight = "bold";
  document.querySelector('.btn-en').style.fontWeight = "normal";
  palavras = ['adulto', "conselhos", "arranjo", "tentativa", "agosto", "outono", "fronteira", "brisa",
    "tijolo", "calma", "canal", "escolheu", "garras", "treinador", "constantemente", "profundamente",
    "agarrado", "alegremente", "imagem", "independente", "instante", "janeiro", "manufatura", "derretido",
    "moinho", "macaco", "misterioso", "nozes", "oficial"
  ];
  document.getElementById('bank-text').textContent = 'Letras Erradas:';
  document.querySelector('.btn-submit').textContent = 'ENVIAR';
  document.getElementById('letter-text').textContent = 'LETRA:';
  document.getElementById('new-text').textContent = 'NOVO JOGO';
  document.querySelector('.winner').textContent = 'VOCÊ VENCEU!';
  document.getElementById('lose-text').textContent = 'VOCÊ PERDEU!';
  english = false;
  init();
});
document.querySelector('.btn-submit').addEventListener('click', function() {
  digitado = document.getElementById('letra').value.toLowerCase();
  document.getElementById('letra').value = "";
  verificarAcerto(digitado)
});

function verificarAcerto(digitado) {
  for (var i = 0; i < palavras[sorteio].length; i++) {
    if (palavras[sorteio].charAt(i) === digitado) {
      resposta[i] = digitado;
      document.querySelector('.letras').textContent = resposta.join(' ');
      acertou = true;
      errou = false;
    } else {
      errou = true;
    }
  }

  if (acertou === false && errou === true) {
    errou = true;
    erros[erro] = digitado;
    erro++;
    document.querySelector('.hangman').src = 'hang-' + erro + '.png';
  }

  if (erro > 0) {
    for (var i = 0; i < erros.length; i++) {
      document.querySelector('#erradas').style.display = 'block';
      document.querySelector('#erradas').textContent = erros.join(' ');
    }
  }

  if (erro === 6) {
    document.querySelector('.lose').style.display = 'block';

    if (english) {
      document.querySelector('#word').textContent = 'The word was: ' + palavras[sorteio];
    } else {
      document.querySelector('#word').textContent = 'A palavra era: ' + palavras[sorteio];
    }
    document.querySelector('.btn-submit').disabled = true;
  } else if (palavras[sorteio] === resposta.join("")) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.btn-submit').disabled = true;
  }
  acertou = false;
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  erros = ['', '', '', '', '', ''];
  erro = 0;
  acertou = false, errou = false;
  document.querySelector('.hangman').src = 'hang-' + erro + '.png';
  document.querySelector('.letras').textContent = ' ';
  document.querySelector('#erradas').textContent = ' ';
  document.querySelector('.winner').style.display = 'none';
  document.querySelector('.btn-submit').disabled = false;
  document.querySelector('.lose').style.display = 'none';
  document.querySelector('#word').textContent = ' ';

  sorteio = Math.floor(Math.random() * palavras.length);
  resposta = [];

  resposta.length = palavras[sorteio].length;

  for (var i = 0; i < resposta.length; i++) {
    resposta[i] = '_';
    document.querySelector('.letras').textContent += ' ' + resposta[i];
  }
}
