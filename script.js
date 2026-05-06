// Contagem de Caracteres em Tempo Real
document.getElementById('texto').oninput = function() { 
    document.getElementById('contagem').innerText = this.value.length; 
};

// Lógica de Scroll da Barra de Progresso
window.onscroll = () => { 
    const winScroll = document.documentElement.scrollTop; 
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; 
    const scrolled = (winScroll / height) * 100; 
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
        progressBar.style.width = scrolled + "%"; 
    }
};

// Lógica das Abas
function aba(n) { 
    document.getElementById('aba1').style.display = n===1 ? 'block' : 'none'; 
    document.getElementById('aba2').style.display = n===2 ? 'block' : 'none'; 
}

// Carregamento de Perfil
function carregarPerfil() {
    document.getElementById('nome-usuario').innerText = "Hique Dev";
    document.getElementById('bio').innerText = "Aprendendo Git e GitHub na prática! 🚀";
}
carregarPerfil();

// Saudação e Ações
function dizerOi() { 
    const n = document.getElementById('nome').value; 
    if(n) { 
        alert('Oi ' + n); 
        document.getElementById('nome-usuario').innerText = n; 
    }
}

function mudarCor() {
    document.body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
}

// Lógica do Contador
let count = 0;
const display = document.getElementById('valor-contador');

document.getElementById('btn-incrementar').onclick = () => { 
    count++; 
    display.innerText = count; 
};

document.getElementById('btn-zerar').onclick = () => { 
    count = 0; 
    display.innerText = count; 
};

// Alternar Tema (Modo Escuro)
document.getElementById('toggle-theme').onclick = () => {
    document.body.classList.toggle('dark-mode');
};

// Lógica das Frases
const frases = [
    "O melhor commit é o de hoje!",
    "Seu código está ficando incrível.",
    "Persistência é o segredo do dev.",
    "Um bug hoje, um aprendizado amanhã."
];

document.getElementById('btn-nova-frase').onclick = function() {
    const random = Math.floor(Math.random() * frases.length);
    document.getElementById('texto-frase').innerText = frases[random];
};
