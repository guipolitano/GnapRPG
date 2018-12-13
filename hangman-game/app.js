/*
 * PT-BR - Este jogo é o primeiro trabalho feito por Guilherme Politano de Sant'Anna como meio de
 * aprendizado e estudo de Javascript, CSS e HTML.
 *
 * EN-BR - This game is the first work done by Guilherme Politano de Sant'Anna as a means of
 * Learning and studying Javascript, CSS and HTML.
 */

var words = ['adulto', "conselhos", "arranjo", "tentativa", "agosto", "outono", "fronteira", "brisa",
  "tijolo", "calma", "canal", "escolheu", "garras", "treinador", "constantemente", "profundamente",
  "agarrado", "alegremente", "imagem", "independente", "instante", "janeiro", "manufatura", "derretido",
  "moinho", "macaco", "misterioso", "nozes", "oficial"
];
var wrongLetters, mistakes, input, correctBoolean, wrongBoolean, draw, answer, english = false;

init();
// ----------------------------------------------------------------------------
/*
 * PT-BR - Troca do Idioma
 * EN-US - Language Change
 */
// ----------------------------------------------------------------------------
document.querySelector('.btn-en').addEventListener('click', function() {
  document.querySelector('.btn-en').style.fontWeight = "bold";
  document.querySelector('.btn-pt').style.fontWeight = "normal";
  words = ['able', 'about', 'account', 'band', 'base', 'basin', 'basket',
    'branch', 'brass', 'bread', 'breath', 'come', 'comfort', 'committee', 'common',
    'company', 'desire', 'destruction', 'detail', 'development', 'different',
    'digestion', 'experience', 'expert', 'eye', 'face', 'fact', 'fall', 'fruit',
    'full', 'future', 'garden', 'general', 'get', 'girl'
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
  words = ['adulto', "conselhos", "arranjo", "tentativa", "agosto", "outono", "fronteira", "brisa",
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
// ----------------------------------------------------------------------------
/*
 * PT-BR - Pega a letra inserida e inicia a função de verifiar o acerto
 * EN-US - Get the insert letter and execute the function to verify the correctness
 */
// ----------------------------------------------------------------------------
document.querySelector('.btn-submit').addEventListener('click', function() {
  input = document.getElementById('letter').value.toLowerCase();
  document.getElementById('letter').value = "";
  checkCorrect(input)
});

// ----------------------------------------------------------------------------
/*
 * PT-BR - Função de verificar os acertos
 * EN-US - Function to verify the correctness
 */
// ----------------------------------------------------------------------------

function checkCorrect(input) {
  for (var i = 0; i < words[draw].length; i++) {
    if (words[draw].charAt(i) === input) {
      answer[i] = input;
      document.querySelector('.letters').textContent = answer.join(' ');
      correctBoolean = true;
      wrongBoolean = false;
    } else {
      wrongBoolean = true;
    }
  }

  if (correctBoolean === false && wrongBoolean === true) {
    wrongBoolean = true;
    wrongLetters[mistakes] = input;
    mistakes++;
    document.querySelector('.hangman').src = 'hang-' + mistakes + '.png';
  }

  if (mistakes > 0) {
    for (var i = 0; i < wrongLetters.length; i++) {
      document.querySelector('#wrongs').style.display = 'block';
      document.querySelector('#wrongs').textContent = wrongLetters.join(' ');
    }
  }

  if (mistakes === 6) {
    document.querySelector('.lose').style.display = 'block';

    if (english) {
      document.querySelector('#word').textContent = 'The word was: ' + words[draw];
    } else {
      document.querySelector('#word').textContent = 'A palavra era: ' + words[draw];
    }
    document.querySelector('.btn-submit').disabled = true;
  } else if (words[draw] === answer.join("")) {
    document.querySelector('.winner').style.display = 'block';
    document.querySelector('.btn-submit').disabled = true;
  }
  correctBoolean = false;
};

// ----------------------------------------------------------------------------
/*
 * PT-BR - Botão de novo jogo
 * EN-US - New Game button
 */
// ----------------------------------------------------------------------------
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  wrongLetters = ['', '', '', '', '', ''];
  mistakes = 0;
  correctBoolean = false, wrongBoolean = false;
  document.querySelector('.hangman').src = 'hang-' + mistakes + '.png';
  document.querySelector('.letters').textContent = ' ';
  document.querySelector('#wrongs').textContent = ' ';
  document.querySelector('.winner').style.display = 'none';
  document.querySelector('.btn-submit').disabled = false;
  document.querySelector('.lose').style.display = 'none';
  document.querySelector('#word').textContent = ' ';

  draw = Math.floor(Math.random() * words.length);
  answer = [];

  answer.length = words[draw].length;

  for (var i = 0; i < answer.length; i++) {
    answer[i] = '_';
    document.querySelector('.letters').textContent += ' ' + answer[i];
  }
}
