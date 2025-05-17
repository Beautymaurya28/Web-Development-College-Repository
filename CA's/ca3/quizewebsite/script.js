const questions = [
    // HTML Questions
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"],
      answer: 0
    },
    {
      question: "Which HTML tag is used to create a hyperlink?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      answer: 1
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      options: ["<break>", "<lb>", "<br>", "<hr>"],
      answer: 2
    },
    {
      question: "Which attribute specifies an alternate text for an image?",
      options: ["src", "alt", "title", "href"],
      answer: 1
    },
    {
      question: "What is the correct HTML for making a checkbox?",
      options: ["<input type='checkbox'>", "<checkbox>", "<input type='check'>", "<input type='box'>"],
      answer: 0
    },
    {
      question: "Which tag is used to define a table in HTML?",
      options: ["<table>", "<tab>", "<tbl>", "<tr>"],
      answer: 0
    },
    {
      question: "What does <ul> represent in HTML?",
      options: ["Unordered List", "Upper List", "Unique List", "Universal List"],
      answer: 0
    },
    {
      question: "Which HTML attribute is used to define inline styles?",
      options: ["class", "font", "style", "styles"],
      answer: 2
    },
    {
      question: "Which tag is used to define a footer in HTML?",
      options: ["<footer>", "<foot>", "<ftr>", "<bottom>"],
      answer: 0
    },
    {
      question: "Which HTML tag is used to define an internal style sheet?",
      options: ["<css>", "<style>", "<script>", "<link>"],
      answer: 1
    },
    
    // CSS Questions
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"],
      answer: 3
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "background-color", "bgcolor", "bg-color"],
      answer: 1
    },
    {
      question: "Which CSS property controls the text size?",
      options: ["font-size", "text-style", "text-size", "font-style"],
      answer: 0
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      options: ["text-transform: capitalize", "text-style: capitalize", "transform: capitalize", "text-capitalize: true"],
      answer: 0
    },
    {
      question: "Which property is used to make the text bold?",
      options: ["font-weight: bold", "text-bold: true", "font-bold: true", "text-weight: bold"],
      answer: 0
    },
    {
      question: "What is the correct syntax for setting a margin?",
      options: ["margin: 10px", "margin-size: 10px", "margin: 10px 5px", "margin-width: 10px"],
      answer: 0
    },
    {
      question: "Which CSS property is used to change the text color?",
      options: ["color", "text-color", "font-color", "foreground-color"],
      answer: 0
    },
    {
      question: "How do you select an element with the ID 'header'?",
      options: ["#header", ".header", "header", "id=header"],
      answer: 0
    },
    {
      question: "How do you select elements with class name 'menu'?",
      options: [".menu", "#menu", "menu", "class='menu'"],
      answer: 0
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "font-type"],
      answer: 0
    },
  
    // JavaScript Questions
    {
      question: "What is JavaScript primarily used for?",
      options: ["Styling webpages", "Adding interactivity to webpages", "Markup of webpages", "Storing data"],
      answer: 1
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["var myVar", "v myVar", "variable myVar", "const myVar"],
      answer: 0
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Microsoft", "Mozilla", "Netscape", "Google"],
      answer: 2
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "<!-- -->", "/* */", "#"],
      answer: 0
    },
    {
      question: "What is the correct syntax for a function in JavaScript?",
      options: ["function myFunction()", "def myFunction()", "func myFunction()", "function = myFunction()"],
      answer: 0
    },
    {
      question: "Which keyword is used to define a constant in JavaScript?",
      options: ["let", "var", "const", "static"],
      answer: 2
    },
    {
      question: "Which method is used to parse a string to an integer in JavaScript?",
      options: ["parseInt()", "toInt()", "parse()", "convert()"],
      answer: 0
    },
    {
      question: "What does 'DOM' stand for?",
      options: ["Document Object Model", "Data Object Model", "Display Object Management", "Digital Ordinance Model"],
      answer: 0
    },
    {
      question: "How do you add a comment in JavaScript?",
      options: ["// this is a comment", "# this is a comment", "<!-- this is a comment -->", "' this is a comment"],
      answer: 0
    },
    {
      question: "What is the correct way to write a JavaScript array?",
      options: ["var colors = ['red', 'green', 'blue']", "var colors = 'red', 'green', 'blue'", "var colors = (1:'red', 2:'green', 3:'blue')", "var colors = '1=red', '2=green', '3=blue'"],
      answer: 0
    }
  ];
  
  // Variables for quiz state
  let currentQuestion = 0;
  let score = 0;
  let timer;
  let timeLeft = 30;
  
  const startButton = document.getElementById("start");
  const restartButton = document.getElementById("restart");
  const submitButton = document.getElementById("submit");
  const quizContainer = document.getElementById("quiz");
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const timerElement = document.getElementById("timer");
  const scoreElement = document.getElementById("score");
  
  // Shuffle and select a random set of 10 questions
  const shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  
  function startQuiz() {
    score = 0;
    currentQuestion = 0;
    timeLeft = 30;
    scoreElement.innerText = `Score: ${score}`;
    startButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
    quizContainer.style.display = "block";
    loadQuestion();
    startTimer();
  }
  
  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
      if (timeLeft <= 0) {
        endQuiz();
      } else {
        timeLeft--;
        timerElement.innerText = `Time Left: ${timeLeft}s`;
      }
    }, 1000);
  }
  
  function loadQuestion() {
    resetOptions();
    const question = shuffledQuestions[currentQuestion];
    questionElement.innerText = question.question;
    
    question.options.forEach((option, index) => {
      const optionElement = document.createElement("label");
      optionElement.innerHTML = `
        <input type="radio" name="option" value="${index}"> ${option}
      `;
      optionsContainer.appendChild(optionElement);
    });
  }
  
  function resetOptions() {
    optionsContainer.innerHTML = "";
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    
    if (selectedOption) {
      const selectedAnswer = parseInt(selectedOption.value);
      const correctAnswer = shuffledQuestions[currentQuestion].answer;
      
      if (selectedAnswer === correctAnswer) {
        score++;
        scoreElement.innerText = `Score: ${score}`;
        selectedOption.parentElement.classList.add("correct");
      } else {
        selectedOption.parentElement.classList.add("incorrect");
        optionsContainer.children[correctAnswer].classList.add("correct");
      }
      
      currentQuestion++;
      if (currentQuestion < shuffledQuestions.length) {
        setTimeout(loadQuestion, 1000);
     } else {
        setTimeout(endQuiz, 1000);
      }
    }
  }
  
  function endQuiz() {
    clearInterval(timer);
    quizContainer.style.display = "none";
    startButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
    alert(`Quiz Over! Your final score is: ${score}`);
  }
  
  // Event listeners for buttons
  startButton.addEventListener("click", startQuiz);
  restartButton.addEventListener("click", startQuiz);
  submitButton.addEventListener("click", checkAnswer);