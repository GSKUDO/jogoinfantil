
// funções de mudança de tela 

//tela de inicio
function start() {
    document.getElementById('titlepage').style.display = 'none';
    document.getElementById('loginpage').style.display = 'flex';
    music.setAttribute("src", " //musica de fundo ")
    music.volume = 1;
    music.play();
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


