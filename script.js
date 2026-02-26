// Toggle Menu
function toggleMenu() {
    const m = document.getElementById("side-menu");
    m.style.width = m.style.width === "300px" ? "0" : "300px";
}

// Lógica de Iniciar Prova
function iniciarProva() {
    const inputs = document.querySelectorAll('.input-group input');
    if ([...inputs].some(i => !i.value)) return alert("Preencha todos os dados!");

    document.getElementById('tela-login').style.display = 'none';
    document.getElementById('tela-prova').style.display = 'block';
    
    gerarQuestoes();
    iniciarTimer();
}

// Gerador de 20 campos de perguntas
function gerarQuestoes() {
    const container = document.getElementById('questoes-container');
    for (let i = 1; i <= 20; i++) {
        container.innerHTML += `
            <div class="job-card-dark" style="margin-bottom:20px; color: white;">
                <p><strong>QUESTÃO ${i}:</strong> Digite aqui sua pergunta...</p>
                <br>
                <label><input type="radio" name="q${i}" value="A"> A) Opção de resposta aqui</label><br>
                <label><input type="radio" name="q${i}" value="B"> B) Opção de resposta aqui</label><br>
                <label><input type="radio" name="q${i}" value="C"> C) Opção de resposta aqui</label>
            </div>
        `;
    }
}

let tempo = 4 * 60 * 60;
function iniciarTimer() {
    setInterval(() => {
        tempo--;
        let h = Math.floor(tempo / 3600);
        let m = Math.floor((tempo % 3600) / 60);
        let s = tempo % 60;
        document.getElementById('cronometro').innerText = `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
    }, 1000);
}

function finalizarProva() {
    document.getElementById('tela-prova').style.display = 'none';
    document.getElementById('tela-final').style.display = 'block';
}