import { useState } from "react";
import { questions } from "../questionsData";
import Options from "./Options";

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    // update score if correct
    if (selectedOption === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    // move to next or finish
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsQuizFinished(false);
  };

  if (isQuizFinished) {
    return (
      <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      
        <p className="text-lg">Your Score: {score} / {questions.length}</p>

        <button className="bg-blue-500 cursor-pointer py-2 px-5 rounded-md text-white mt-4" onClick={handleReset}>Reset</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <span className="text-lg tracking-widest font-mono text-gray-400">
        Question {currentQuestion + 1} of {questions.length}
      </span>

      <h2 className="text-lg font-medium">
        {questions[currentQuestion].question}
      </h2>

      <ul className="flex flex-col gap-3 items-start w-full">
        {questions[currentQuestion].options.map((option, index) => (
          <Options
            key={index}
            option={option}
            selectedOption={selectedOption}
            onSelect={handleOptionSelect}
          />
        ))}
      </ul>

      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrev}
          disabled={currentQuestion === 0}
          className="cursor-pointer py-2 px-5 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition disabled:opacity-50"
        >
          Prev
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="cursor-pointer py-2 px-5 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition disabled:opacity-50"
        >
          {currentQuestion + 1 === questions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
