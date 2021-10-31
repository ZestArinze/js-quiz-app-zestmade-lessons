function loadQuiz() {
  const quizContainer = document.querySelector('#quiz-container');
  const questions = getQuestions();
  questions.forEach((question, index) => {
    quizContainer.append(questionElement(question, index));
  });
}

function questionElement(questionItem, questionIndex) {
  const div = document.createElement('div');
  div.classList.add('p-3', 'm-3', 'card');

  const h3 = document.createElement('h3');
  h3.innerText = questionItem.question;

  div.append(h3);

  questionItem.options.forEach((option, optionIndex) => {
    const optionItem = optionElement(option, questionIndex);
    const answerTextLabel = optionItem.querySelector('label');

    answerTextLabel.addEventListener('click', () => {
      if (optionIndex === questionItem.answerIndex) {
        div.classList.remove('bg-danger');
        div.classList.add('bg-success', 'text-light');
      } else {
        div.classList.remove('bg-success');
        div.classList.add('bg-danger', 'text-light');
      }
    });

    div.append(optionItem);
  });

  return div;
}

function optionElement(option, questionIndex) {
  const div = document.createElement('div');
  div.insertAdjacentHTML(
    'afterbegin',
    `<label>
      <input type='radio' name='question_${questionIndex}' />
      ${option}
    </label>
  `
  );

  return div;
}

function getQuestions() {
  return [
    {
      question: 'Which is the fastest land animal?',
      options: ['Cheetah', 'Jaguar', 'Lion', 'Pronghorn'],
      answerIndex: 0,
    },
    {
      question: 'How many countries are in Africa?',
      options: [53, 54, 55, 56],
      answerIndex: 1,
    },
    {
      question: 'In which continent is Toronto?',
      options: ['Asia', 'North America', 'Africa'],
      answerIndex: 1,
    },
    {
      question: 'How many continents are in the world?',
      options: [4, 5, 6, 7],
      answerIndex: 3,
    },
    {
      question: 'Who is the president of Croatia?',
      options: ['Kolinda Grabar-Kitarović', 'Zoran Milanović'],
      answerIndex: 1,
    },
  ];
}
