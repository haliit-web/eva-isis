const questions = [
    {
        question: "Qual é o time que meu papai torce?",
        options: ["XV de piracicaba", "São Paulo", "Ferroviaria", "Portuguesa"],
        answer: "São Paulo"
    },
    {
        question: "Qual é a comida que a mamãe mais gosta?",
        options: ["Almondegas", "Lasanha", "Parmegiana", "Risoto"],
        answer: "Almondegas"
    },
    {
        question: "Qual é o salgado preferido do papai",
        options: ["Coxinha", "Empada", "Hamburgão", "Kibe"],
        answer: "Hamburgão"
    },
    {
        question: "Qual é a idade do papai e da mamae",
        options: ["30-31", "29-30", "29-32", "30-32"],
        answer: "29-32"
    },
    {
        question: "Quem é o cantor preferido da mamae",
        options: ["Alcione", "Tim Maia", "Armandinho", "Roberto Carlos"],
        answer: "Armandinho"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let userName = localStorage.getItem('userName'); // Armazena o nome do usuário

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option) => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById('result');
    const resultMessage = document.getElementById('resultMessage');
    const prizeButton = document.getElementById('prizeButton');

    resultElement.style.display = 'block';
    resultMessage.innerText = `Você acertou ${score} de ${questions.length} perguntas.`;

    // Verifica se o usuário é um dos escolhidos
    const chosenNames = ["Junior", "Bruna", "Fernando", "Rafaela"]; // Nomes escolhidos
    if (chosenNames.includes(userName)) {
        prizeButton.style.display = 'inline-block'; // Exibe o botão de recolher prêmio
    } else {
        prizeButton.style.display = 'none'; // Oculta o botão de recolher prêmio
    }
}

// Iniciar o jogo quando a página carregar
window.onload = startGame;