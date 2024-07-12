import React, { useState, useEffect } from "react";
import styles from "./QuestionsQuiz.module.css";
import Resolucao from "../../pages/quiz/resolucao/resolucao";

const RadioButton = ({ name, value, label, onChange }) => {
  return (
    <>
      <input
        className={styles.radioInput}
        type="radio"
        name={name}
        value={value}
        onChange={onChange}
      />
      <label>{label}</label>
      <br />
    </>
  );
};

const PerguntasQuiz = ({ imageUrl, imageStyle, text1, text2, questions, correctAnswers }) => {
  const [hovered, setHovered] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setCorrectAnswersCount(0);
  }, []);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleAnswerSelection = (questionIndex, selectedValue) => {
    const newSelectedAnswers = { ...selectedAnswers, [questionIndex]: selectedValue };
    setSelectedAnswers(newSelectedAnswers);
    checkAnswers(newSelectedAnswers);
  };

  const checkAnswers = (answers) => {
    let correctCount = 0;

    for (let i = 0; i < correctAnswers.length; i++) {
      if (answers[i] === correctAnswers[i]) {
        correctCount++;
      }
    }

    setCorrectAnswersCount(correctCount);
  };

  const handleConfirm = () => {
    const allQuestionsAnswered = questions.every((_, index) => selectedAnswers[index] !== undefined);

    if (!allQuestionsAnswered) {
      alert("Falta questões a serem respondidas!");
      return;
    }

    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false); 
  };

  return (
    <div className={styles.pagQuiz}>
      <div className={styles.titleQuiz}>
        <h1>{text1}</h1>
        <img
          src={imageUrl}
          alt={`Imagem quiz ${text2}`}
          style={imageStyle}
          className={hovered ? styles.hovered : ""}
        />
      </div>
      <div className={styles.spaceQuestionsQuiz}>
        <div className={styles.questionsQuiz}>
          {questions &&
            questions.map((question, index) => (
              <div key={index}>
                <p>{question.questionText}</p>
                {question.options &&
                  question.options.map((option, optionIndex) => (
                    <RadioButton
                      key={optionIndex}
                      name={`question_${index}`}
                      value={option.value}
                      label={option.label}
                      onChange={(e) => handleAnswerSelection(index, e.target.value)}
                    />
                  ))}
              </div>
            ))}
        </div>
        <button
          className={`${styles.button} ${hovered ? styles.hovered : ""}`}
          onClick={handleConfirm}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          CONFIRMAR
        </button>
      </div>
      <Resolucao
        isOpen={modalIsOpen}
        onClose={closeModal}
        correctAnswersCount={correctAnswersCount}
      />
    </div>
  );
};

export default PerguntasQuiz;
