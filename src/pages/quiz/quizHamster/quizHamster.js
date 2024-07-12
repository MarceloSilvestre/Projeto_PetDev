import React from "react";
import QuestionsQuizItems from "../../../componentes/questionsQuiz/QuestionsQuiz";


export const QuizHamster = () => {
  const correctAnswersHamster = [
    "2-3 anos",
    "Russo, Sírio e Chinês",
    "Noturnos",
    "Pouching",
    "Certo",
    "Bochechas expansíveis"
  ];

  return (
    <div>
  <QuestionsQuizItems
    imageUrl="\images\ricky-kharawala-adK3Vu70DEQ-unsplash-removebg-preview 1.png"
    text1="QUIZHAMSTER: VOCÊ CONHECE BEM OS HAMSTERS?"
    text2="Hamster"
    questions={[
      {
        questionText: "Q1 - Qual é a expectativa de vida média de um hamster em cativeiro?",
        name: "q1",
        options: [
          { value: "1-2 anos", label: "1-2 anos" },
          { value: "2-3 anos", label: "2-3 anos" },
          { value: "3-4 anos", label: "3-4 anos" },
          { value: "4-5 anos", label: "4-5 anos" },
        ],
      },
      {
        questionText: "Q2 - Quais são os diferentes tipos de hamsters que são comumente mantidos como animais de estimação?",
        name: "q2",
        options: [
          { value: "Russo, Sírio e Chinês", label: "Russo, Sírio e Chinês" },
          { value: "Siríaco, Anão e Europeu", label: "Siríaco, Anão e Europeu" },
          { value: "Teddy, Roborovski e Chinês", label: "Teddy, Roborovski e Chinês" },
          { value: "Albino, Panda e Anão", label: "Albino, Panda e Anão" },
        ],
      },
      {
        questionText: "Q3 - Os hamsters são animais noturnos ou diurnos?",
        name: "q3",
        options: [
          { value: "Noturnos", label: "Noturnos" },
          { value: "Diurnos", label: "Diurnos" },
        ],
      },
      {
        questionText: "Q4 - Qual é o nome do comportamento em que os hamsters armazenam comida em suas bochechas?",
        name: "q4",
        options: [
          { value: "Sono", label: "Sono" },
          { value: "Passeio", label: "Passeio" },
          { value: "Nado", label: "Nado" },
          { value: "Pouching", label: "Pouching" },
        ],
      },
      {
        questionText: "Q5 - Hamsters aprendem seu próprio nome?",
        name: "q5",
        options: [
          { value: "Certo", label: "Certo" },
          { value: "Errado", label: "Errado" },
        ],
      },
      {
        questionText: "Q6 - Quais são algumas características físicas únicas dos hamsters que os ajudam a se adaptar a diferentes ambientes?",
        name: "q6",
        options: [
          { value: "Guelras", label: "Guelras" },
          { value: "Barbatanas", label: "Barbatanas" },
          { value: "Bochechas expansíveis", label: "Bochechas expansíveis" },
          { value: "Pernas longas", label: "Pernas longas" },
        ],
      },
    ]}
    correctAnswers={correctAnswersHamster}
  />
    </div>
  );
}

export default QuizHamster;