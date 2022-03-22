
// funções de mudança de tela 
let username;
//tela de inicio
function start() {
    document.getElementById('titlepage').style.display = 'none';
    document.getElementById('loginpage').style.display = 'flex';
    music.setAttribute("src", " //musica de fundo ")
    music.volume = 1;
    music.play();
    username = document.getElementById("username").value;
    console.log(username)
}

//inicia o jogo após login
function startgame() {
    document.getElementById('loginpage').style.display = 'none';
    document.getElementById('gamepage').style.display = 'flex';
    music.setAttribute("src", " //outra mussica de fundo ")
    music.volume = 1;
    music.play();
}

// vai para a tela de registrar novo usuario
function goregister(){
    document.getElementById('loginpage').style.display = 'none';
    document.getElementById('registerpage').style.display = 'flex';
}

// vai pra tela de esqueci minha senha
function goforget(){
    document.getElementById('loginpage').style.display = 'none';
    document.getElementById('forgetpasswordpage').style.display = 'flex';
}

// volta para a tela de login
function backlogin(){
    document.getElementById('loginpage').style.display = 'flex';
    document.getElementById('registerpage').style.display = 'none';
    document.getElementById('forgetpasswordpage').style.display = 'none';
}


//-------------------------------------------------

// Dá pra fazer de imediato:

// quando clica na imagem, diz a palavra 
// quando drag a letra, diz o nome da letra 
// colocar tema de fundo (poderia ser dinamico e mudar a cada login a musica e o fundo)


// fazer o banco de palavras, sons e letras (usar classes??)
// muda de nivel, aumenta a quantidade de letras das palavras 
// nivel 1, palavras de 3 letras 
// nivel 2, palavras de 4 letras
// nivel 3, palavras de 5 letras 
// nivel 4, palavras de 6 letras 

//quando acertar, fazer animação com som de vitoria

// incluir drag and drop 

//----------------------------------------------

//num segundo momento:
// incluir controle de acesso (usuarios)
// incluir banco de dados (usuarios)
// incluir ranking (requer banco de dados e controle de acesso)

//senha pode ser clicar na imagem certa e nao escrever
// password (mostra 10 imagens e a criança seleciona qual eh a certa pro login dela) 
// exemplo: username Maria
// password: imagem de gatinho
// ai a propria criança pode fazer o login e esse tipo de coisa não precisa de uma segurança robusta 
// o login eh apenas para separar o progresso por criança 


// classe para montar as palavras
class Words{
    constructor(word, level, array, img, sound) {
      this.word = word //palavra
      this.level = level //nível da palavra
      this.array = array
      this.img = img //imagem da palavra
      this.sound = sound //som da palavra
      this.size = 0 // tamanho da palavra 
      this.lenght()
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

let bed = new Words("bed", 1, ["b", "e", "d"], "assets/images/level1/bed.webp", "assets/sounds/level1/bed.mp4");
let bus = new Words("bus", 1, ["b", "u", "s"], "assets/images/level1/bus.webp", "assets/sounds/level1/bus.mp4");
let car = new Words("car", 1, ["c", "a", "r"], "assets/images/level1/car.webp", "assets/sounds/level1/car.mp4");
let cat = new Words("cat", 1, ["c", "a", "t"], "assets/images/level1/cat.webp", "assets/sounds/level1/cat.mp4");
let cow = new Words("cow", 1, ["c", "o", "w"], "assets/images/level1/cow.webp", "assets/sounds/level1/cow.mp4");
let dog = new Words("dog", 1, ["d", "o", "g"], "assets/images/level1/dog.webp", "assets/sounds/level1/dog.mp4");
let hen = new Words("hen", 1, ["h", "e", "n"], "assets/images/level1/hen.webp", "assets/sounds/level1/hen.mp4");
let sun = new Words("sun", 1, ["s", "u", "n"], "assets/images/level1/sun.webp", "assets/sounds/level1/sun.mp4");

//level 2
let baby = new Words("baby", 2, ["b", "a", "b", "y"], "assets/images/level2/baby.webp", "assets/sounds/level2/baby.mp4");
let bear = new Words("bear", 2, ["b", "e", "a", "r"], "assets/images/level2/bear.webp", "assets/sounds/level2/bear.mp4");
let coat = new Words("coat", 2, ["c", "o", "a", "t"], "assets/images/level2/coat.webp", "assets/sounds/level2/coat.mp4");
let duck = new Words("duck", 2, ["d", "u", "c", "k"], "assets/images/level2/duck.webp", "assets/sounds/level2/duck.mp4");
let fish = new Words("fish", 2, ["f", "i", "s", "h"], "assets/images/level2/fish.webp", "assets/sounds/level2/fish.mp4");
let frog = new Words("frog", 2, [f, r, o, g], "assets/images/level2/frog.webp", "assets/sounds/level2/frog.mp4");
let lion = new Words("lion", 2, [l, i, o, n], "assets/images/level2/lion.webp", "assets/sounds/level2/lion.mp4");
let meat = new Words("meat", 2, [m, e, a, t], "assets/images/level2/meat.webp", "assets/sounds/level2/meat.mp4");

//level 3
let brain = new Words("brain", 3, [b, r, a, i, n], "assets/images/level3/brain.webp", "assets/sounds/level3/brain.mp4");
let bread = new Words("bread", 3, [b, r, e, a, d], "assets/images/level3/bread.webp", "assets/sounds/level3/bread.mp4");
let candy = new Words("candy", 3, [c, a, n, d, y], "assets/images/level3/candy.webp", "assets/sounds/level3/candy.mp4");
let grape = new Words("grape", 3, [g, r, a, p, e], "assets/images/level3/grape.webp", "assets/sounds/level3/grape.mp4");
let honey = new Words("honey", 3, [h, o, n, e, y], "assets/images/level3/honey.webp", "assets/sounds/level3/honey.mp4");
let horse = new Words("horse", 3, [h, o, r, s, e], "assets/images/level3/horse.webp", "assets/sounds/level3/horse.mp4");
let shark = new Words("shark", 3, [s, h, a, r, k], "assets/images/level3/shark.webp", "assets/sounds/level3/shark.mp4");
let sheep = new Words("sheep", 3, [s, h, e, e, p], "assets/images/level3/sheep.webp", "assets/sounds/level3/sheep.mp4");
let snake = new Words("snake", 3, [s, n, a, k, e], "assets/images/level3/snake.webp", "assets/sounds/level3/snake.mp4");
let store = new Words("store", 3, [s, t, o, r, e], "assets/images/level3/store.webp", "assets/sounds/level3/store.mp4");
let watch = new Words("watch", 3, [w, a, t, c, h], "assets/images/level3/watch.webp", "assets/sounds/level3/watch.mp4");
let whale = new Words("whale", 3, [w, h, a, l, e], "assets/images/level3/whale.webp", "assets/sounds/level3/whale.mp4");
let zebra = new Words("zebra", 3, [z, e, b, r, a], "assets/images/level3/zebra.webp", "assets/sounds/level3/zebra.mp4");



var correctCards = 0;
$( init );

function init() {

  // Hide the success message
  $('#successMessage').hide();
  $('#successMessage').css( {
    left: '580px',
    top: '250px',
    width: 0,
    height: 0
  } );

  // Reset the game
  correctCards = 0;
  $('#cardPile').html( '' );
  $('#cardSlots').html( '' );

  // Create the pile of shuffled cards
  var letters = bed.array;
  var letters2 = letters.sort( function() { return Math.random() - .5 } );
 
  for ( var i=0; i<3; i++ ) {
    $('<div>' + letters[i] + '</div>').data( 'letter', letters[i] ).attr( 'id', 'card'+ (i+1) ).appendTo( '#cardPile' ).draggable( {
      containment: '#content',
      stack: '#cardPile div',
      cursor: 'move',
      revert: true
    } );
  }

  // Create the card slots
 
  for ( var i=0; i<=3; i++ ) {
    $('<div>' + letters2[i] + '</div>').data( 'letter', letters2[i] ).appendTo( '#cardSlots' ).droppable( {
      accept: '#cardPile div',
      hoverClass: 'hovered',
      drop: handleCardDrop
    } );
  }

}

function handleCardDrop( event, ui ) {
  var slotletter = $(this).data( 'letter' );
  var cardletter = ui.draggable.data( 'letter' );

  // If the card was dropped to the correct slot,
  // change the card colour, position it directly
  // on top of the slot, and prevent it being dragged
  // again

  if ( slotletter == cardletter ) {
    ui.draggable.addClass( 'correct' );
    ui.draggable.draggable( 'disable' );
    $(this).droppable( 'disable' );
    ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
    ui.draggable.draggable( 'option', 'revert', false );
    correctCards++;
  } 
  
  // If all the cards have been placed correctly then display a message
  // and reset the cards for another go

  if ( correctCards == bed.size ) {
    $('#successMessage').show();
    $('#successMessage').animate( {
      left: '380px',
      top: '200px',
      width: '400px',
      height: '150px',
      opacity: 1
    } );
  }

}