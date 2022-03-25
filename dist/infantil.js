// variaveis globais da titlepage
let username;
          
//tela de inicio
function start() {
    document.getElementById('titlepage').style.display = 'none';
    document.getElementById('gamepage').style.display = 'flex';
    username = document.getElementById("username").value;
   
    //mostra o cabeçalho do gamepage
    document.getElementById("headwelcome").innerHTML = "Welcome " + username;
  
}

// classe para montar as palavras
class Words{
    constructor(word, level, original, array, img, sound) {
      this.word = word //palavra
      this.level = level //nível da palavra
      this.array = [...array] //array da palavra embaralhada
      this.original = [... original] // array da palavra original
      this.img = img //imagem da palavra
      this.sound = sound //som da palavra
      this.size = 0 // tamanho da palavra 
      this.mixed() // metodo que embaralha as letras
      this.lenght() // metodo que determina o tamanho da palavra
    }

    mixed(){
      this.array = this.array.sort( function() { return Math.random() - .5 } );
    }

    lenght() {
        /*	
              Types: 
            level 1 - 3 letras
            level 2 - 4 letras
            level 3 - 5 letras
          */
        switch (this.level) {
          case 1:
            this.size = 3;
            break;
    
          case 2:
            this.size = 4;
            break;
    
          case 3:
            this.size =5;
            break;
    
        }
    }
}

// classe de palavras 
// level 1

let bed = new Words("bed", 1, ["b", "e", "d"], ["b", "e", "d"], "assets/images/level1/bed.webp", "assets/sounds/level1/bed.mp3");
let bus = new Words("bus", 1, ["b", "u", "s"], ["b", "u", "s"], "assets/images/level1/bus.webp", "assets/sounds/level1/bus.mp3");
let car = new Words("car", 1, ["c", "a", "r"], ["c", "a", "r"], "assets/images/level1/car.webp", "assets/sounds/level1/car.mp3");
let cat = new Words("cat", 1, ["c", "a", "t"], ["c", "a", "t"], "assets/images/level1/cat.webp", "assets/sounds/level1/cat.mp3");
let cow = new Words("cow", 1, ["c", "o", "w"], ["c", "o", "w"], "assets/images/level1/cow.webp", "assets/sounds/level1/cow.mp3");
let dog = new Words("dog", 1, ["d", "o", "g"], ["d", "o", "g"], "assets/images/level1/dog.webp", "assets/sounds/level1/dog.mp3");
let hen = new Words("hen", 1, ["h", "e", "n"], ["h", "e", "n"], "assets/images/level1/hen.webp", "assets/sounds/level1/hen.mp3");
let sun = new Words("sun", 1, ["s", "u", "n"], ["s", "u", "n"], "assets/images/level1/sun.webp", "assets/sounds/level1/sun.mp3");

//level 2
let baby = new Words("baby", 2, ["b", "a", "b", "y"], ["b", "a", "b", "y"], "assets/images/level2/baby.webp", "assets/sounds/level2/baby.mp3");
let bear = new Words("bear", 2, ["b", "e", "a", "r"], ["b", "e", "a", "r"], "assets/images/level2/bear.webp", "assets/sounds/level2/bear.mp3");
let coat = new Words("coat", 2, ["c", "o", "a", "t"], ["c", "o", "a", "t"], "assets/images/level2/coat.webp", "assets/sounds/level2/coat.mp3");
let duck = new Words("duck", 2, ["d", "u", "c", "k"], ["d", "u", "c", "k"], "assets/images/level2/duck.webp", "assets/sounds/level2/duck.mp3");
let fish = new Words("fish", 2, ["f", "i", "s", "h"], ["f", "i", "s", "h"], "assets/images/level2/fish.webp", "assets/sounds/level2/fish.mp3");
let frog = new Words("frog", 2, ["f", "r", "o", "g"], ["f", "r", "o", "g"], "assets/images/level2/frog.webp", "assets/sounds/level2/frog.mp3");
let lion = new Words("lion", 2, ["l", "i", "o", "n"], ["l", "i", "o", "n"], "assets/images/level2/lion.webp", "assets/sounds/level2/lion.mp3");
let meat = new Words("meat", 2, ["m", "e", "a", "t"], ["m", "e", "a", "t"], "assets/images/level2/meat.webp", "assets/sounds/level2/meat.mp3");

//level 3
let brain = new Words("brain", 3, ["b", "r", "a", "i", "n"], ["b", "r", "a", "i", "n"], "assets/images/level3/brain.webp", "assets/sounds/level3/brain.mp3");
let candy = new Words("candy", 3, ["c", "a", "n", "d", "y"], ["c", "a", "n", "d", "y"], "assets/images/level3/candy.webp", "assets/sounds/level3/candy.mp3");
let grape = new Words("grape", 3, ["g", "r", "a", "p", "e"], ["g", "r", "a", "p", "e"], "assets/images/level3/grape.webp", "assets/sounds/level3/grape.mp3");
let honey = new Words("honey", 3, ["h", "o", "n", "e", "y"], ["h", "o", "n", "e", "y"], "assets/images/level3/honey.webp", "assets/sounds/level3/honey.mp3");
let horse = new Words("horse", 3, ["h", "o", "r", "s", "e"], ["h", "o", "r", "s", "e"], "assets/images/level3/horse.webp", "assets/sounds/level3/horse.mp3");
let shark = new Words("shark", 3, ["s", "h", "a", "r", "k"], ["s", "h", "a", "r", "k"], "assets/images/level3/shark.webp", "assets/sounds/level3/shark.mp3");
let store = new Words("store", 3, ["s", "t", "o", "r", "e"], ["s", "t", "o", "r", "e"], "assets/images/level3/store.webp", "assets/sounds/level3/store.mp3");
let whale = new Words("whale", 3, ["w", "h", "a", "l", "e"], ["w", "h", "a", "l", "e"], "assets/images/level3/whale.webp", "assets/sounds/level3/whale.mp3");


// arrays de palavras do level
var level1 = [bed, bus, car, cat, cow, dog, hen, sun];
var level2 = [baby, bear, coat, duck, fish, frog, lion, meat];
var level3 = [brain, candy, grape, honey, horse, shark, store, whale];
var levelup = [level1, level2, level3];

// variaveis globais do gamepage
var correctLetters;
var wordsize = 3;
var indicelevel = 0;
var indicelevelup = 0;
var headlevelnumber = 1;
var levelnow = levelup[indicelevelup];

$( init );

function play() {
  var audio = new Audio(levelnow[indicelevel].sound);
  audio.play();
}

// inicio do jogo 
function init() {
  // esconde as mensagens de sucesso
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  $('#levelupMessage').hide();
  $('#levelupMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );
 
  // Reseta o jogo
  correctLetters  = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );
  document.getElementById("headlevel").innerHTML = "Level " + headlevelnumber;

  // monta o jogo na tela 
  var letters = levelnow[indicelevel].array;
  var letters2 = levelnow[indicelevel].original;
  var img = document.querySelector("#imgword");
  img.setAttribute('src', levelnow[indicelevel].img);

  // distribui as letras embarlhadas
  for ( var i=0; i<wordsize; i++ ) {
    $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'card'+ (i+1) ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // marca os espaços que vao ser ocupados pelas letras 
  for ( var i=0; i<wordsize; i++ ) {
    $('<div>' + letters2[i] + '</div>').data( 'letter', letters2[i] ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }
}

// funcao de drag and drop
function handleCardDrop( event, ui ) {
  var slotletter = $(this).data( 'letter' );
  var cardletter = ui.draggable.data( 'letter' );

  // quando a letra está no lugar certo, a cor muda 
  if ( slotletter == cardletter ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctLetters++;
  } 
  
  // verifica se passou de palavra, nivel ou acabou o jogo
  if ( correctLetters == levelnow[indicelevel].size ) {       
    indicelevel++;
    // se acertou todas as letras,passa para a proxima palavra 
    // onde que da pra acertar quantas palavras tem cada nivel, o maximo eh 8
    if (indicelevel === 8){
      wordsize++;
      indicelevel = 0;
      headlevelnumber++;
      document.getElementById("headlevel").innerHTML = "Level " + headlevelnumber;
      indicelevelup++;
      //se terminou as palavras de um nivel, passa para o proximo 
      $('#levelupMessage').show();
      $('#levelupMessage').animate( {
        left: '480px',
        top: '200px',
        width: '400px',
        height: '150px',
        opacity: 1
      } );
        // se terminou os niveis, acaba o jogo 
        if (indicelevelup === 3){
          document.getElementById('gamepage').style.display = 'none';
          document.getElementById('hallOfFame').style.display = 'flex';

          //chama a função que faz o fetch com o servidor 
          saveData(username);
        }
      levelnow = levelup[indicelevelup];
    }
    // mensagem de sucesso, terminou a palavra 
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '480px',
      top: '200px',
      width: '400px',
      height: '150px',
      opacity: 1
    } );
  }
}


// função que faz o fetch para mandar o username para o banco de dados 
// retorna o nome de todos os jogadores do banco de dados para o hall da fama 
function saveData(_username){
  fetch(`http://localhost:3000/player`, { 
    method:"POST",
    body: JSON.stringify({ username: _username }),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(result => {
      return result.json()
    })
    .then(result => {
      let list = document.getElementById("nameWinners");
      result.forEach((item) => {
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
      });
      return result;
    })
}