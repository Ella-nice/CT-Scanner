const questionText = document.getElementById("questionText");
const readingText = document.getElementById("readingText");
const optionsBox = document.getElementById("optionsBox");
const tutorBox = document.getElementById("tutorBox");
const tutorMessage = document.getElementById("tutorMessage");
const nextBtn = document.getElementById("nextBtn");
const scoreVal = document.getElementById("scoreVal");

let currentQuestion = null;
let streak = 0;

function getRandomQuestion() {
    let totalWeight = 0;
    for (let rule in rulesWeight) {
        totalWeight += rulesWeight[rule];
    }

    let randomNum = Math.random() * totalWeight;
    let selectedRule = Object.keys(rulesWeight)[0];

    for (let rule in rulesWeight) {
        randomNum -= rulesWeight[rule];
        if (randomNum <= 0) {
            selectedRule = rule;
            break;
        }
    }

    const ruleQuestions = questionsData.filter(q => q.ruleId === selectedRule);
    const randomIndex = Math.floor(Math.random() * ruleQuestions.length);
    return ruleQuestions[randomIndex];
}

function renderQuestion() {
    tutorBox.classList.add("hidden");
    optionsBox.innerHTML = "";
    
    currentQuestion = getRandomQuestion();
    questionText.innerText = currentQuestion.text;

    // Проверяем, есть ли у вопроса длинный текст
    if (currentQuestion.reading) {
        readingText.innerText = currentQuestion.reading;
        readingText.classList.remove("hidden");
    } else {
        readingText.classList.add("hidden");
    }

    currentQuestion.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, btn);
        optionsBox.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const isCorrect = (selectedIndex === currentQuestion.correctIndex);
    
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(b => b.disabled = true);

    if (isCorrect) {
        btnElement.classList.add("correct");
        streak++;
        scoreVal.innerText = streak;
        
        if (rulesWeight[currentQuestion.ruleId] > 1) {
            rulesWeight[currentQuestion.ruleId] -= 1;
        }

        // Безопасный переход к следующему вопросу
        setTimeout(() => {
            renderQuestion();
        }, 1000);

    } else {
        btnElement.classList.add("wrong");
        allButtons[currentQuestion.correctIndex].classList.add("correct");
        
        streak = 0;
        scoreVal.innerText = streak;

        rulesWeight[currentQuestion.ruleId] += 3;

        tutorMessage.innerText = currentQuestion.tutor;
        tutorBox.classList.remove("hidden");
    }
}

nextBtn.onclick = () => {
    renderQuestion();
};

// Запускаем игру
renderQuestion();