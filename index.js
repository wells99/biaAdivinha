let respostas = []
let palpite = document.getElementById("palpite");
let numeroBia = 10
let parabens = document.getElementById('parabens');
var form = document.getElementById('formulario');
var campo = document.getElementById('palpite');
var seusPalpites = document.getElementById('seusPalpites');
let textContainer = document.querySelector('.textContainer');


form.addEventListener('submit', function(e) {
   
    if (numeroBia == campo.value) {
        textContainer.innerHTML = `<h2>Parabéns o número é:<a>${numeroBia}</a></h2>`;
    } else {
        respostas.push(campo.value);
        campo.value='';
        parabens.textContent='';
        seusPalpites.innerText = `-${respostas} - `;
        
        if (respostas.length == 2) {
            palpite.style.display = "none";
            parabens.value='';
            formulario.innerHTML = `<h2>Você não acertou, o número era: <a>${numeroBia}</a></h2>`;
            formulario.innerHTML = `<button type="button" onclick="reiniciar()">Tentar novamente</button>`;
            
        } else {
            campo.value='';
            parabens.value='';
            seusPalpites.innerText = `-${respostas} - `;
            
        }
        e.preventDefault();
        alert(`Você errou, faltam ${Number(2) - Number(respostas.length)} tentativas`);
    }
    // impede o envio do form
e.preventDefault();
});

function reiniciar() {
    
    location.reload();
}