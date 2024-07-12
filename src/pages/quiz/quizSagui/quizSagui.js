import React from "react";
import QuestionsQuizItems from "../../../componentes/questionsQuiz/QuestionsQuiz";

export const QuizSagui = () => {
  const correctAnswersSagui = [
    "Callithrix",
    "América do Sul",
    "Onívora",
    "Tamanho muito pequeno",
    "Por meio de vocalizações",
    "Certo"
  ];

  const imageStyle = {
    marginLeft: '5px', 
    width: '285px'
  };

  return (
    <div>
  <QuestionsQuizItems
    imageUrl="\images\TitleSagui.png"
    imageStyle={imageStyle}
    text1="SAGUIS: UM QUIZ SOBRE OS PEQUENOS PRIMATAS"
    text2="Saguis"
    questions={[
      {
        questionText: "Q1 - Qual é o nome científico dos saguis?",
        name: "q1",
        options: [
          { value: "Sapajus", label: "Sapajus" },
          { value: "Saguinus", label: "Saguinus" },
          { value: "Callithrix", label: "Callithrix" },
          { value: "Alouatta", label: "Alouatta" },
        ],
      },
      {
        questionText: "Q2 - Em que região do mundo os saguis são encontrados principalmente?",
        name: "q2",
        options: [
          { value: "África", label: "África" },
          { value: "Ásia", label: "Ásia" },
          { value: "América do Sul", label: "América do Sul" },
          { value: "Austrália", label: "Austrália" },
        ],
      },
      {
        questionText: "Q3 - Qual é a dieta principal dos saguis na natureza?",
        name: "q3",
        options: [
          { value: "Carnívora", label: "Carnívora" },
          { value: "Herbívora", label: "Herbívora" },
          { value: "Onívora", label: "Onívora" },
          { value: "Frugívora", label: "Frugívora" },
        ],
      },
      {
        questionText: "Q4 - Qual é uma característica distintiva dos saguis em comparação com outros macacos?",
        name: "q4",
        options: [
          { value: "Ausência de cauda", label: "Ausência de cauda" },
          { value: "Olhos grandes", label: "Olhos grandes" },
          { value: "Grito estridente", label: "Grito estridente" },
          { value: "Tamanho muito pequeno", label: "Tamanho muito pequeno" },
        ],
      },
      {
        questionText: "Q5 - Como os saguis se comunicam entre si?",
        name: "q5",
        options: [
          { value: "Pelo balanço da cauda", label: "Pelo balanço da cauda" },
          { value: "Por meio de vocalizações", label: "Por meio de vocalizações" },
          { value: "Usando sinais de mão", label: "Usando sinais de mão" },
          { value: "Através de danças", label: "Através de danças" },
        ],
      },
      {
        questionText: "Q6 - Quem lidera os grupos familiares é o sagui fêmea. Certo ou errado?",
        name: "q6",
        options: [
          { value: "Certo", label: "Certo" },
          { value: "Errado", label: "Errado" },
        ],
      },
    ]}
    correctAnswers={correctAnswersSagui}
  />
    </div>
  );
}
export default QuizSagui;