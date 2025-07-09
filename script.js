const flashcards = [
  {
    question: "O que é JavaScript?",
    answer: "JavaScript é uma linguagem de programação usada para criar interatividade em páginas web."
  },
  {
    question: "O que são funções de callback?",
    answer: "São funções passadas como argumentos para outras funções, executadas após um evento."
  },
  {
    question: "O que é o this?",
    answer: "É uma referência ao contexto de execução da função ou objeto atual."
  },
  {
    question: "O que é hoisting?",
    answer: "É o comportamento que move declarações para o topo do escopo antes da execução."
  },
  {
    question: "Quais são os tipos primitivos?",
    answer: "String, Number, Boolean, Null, Undefined, BigInt e Symbol."
  }
];

let currentIndex = 0;
let showingAnswer = false;

const cards = document.getElementById("pack");
const stats = document.getElementById("stats");
const button = document.getElementById("next-button");

function showCard(index) {
  cards.innerHTML = "";
  
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = flashcards[index].question;

  showingAnswer = false;

  card.addEventListener("click", () => {
    if (!showingAnswer) {
      card.textContent = flashcards[index].answer;
      card.style.backgroundColor = "#e7ddff";
      showingAnswer = true;
    }
  });

  cards.appendChild(card);
  updateStats();
}

function updateStats() {
  stats.textContent = `Card ${currentIndex + 1} de ${flashcards.length}`;
}

button.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= flashcards.length) {
    currentIndex = 0; 
  }
  showCard(currentIndex);
});

showCard(currentIndex); 



