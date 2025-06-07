import { useState, useEffect } from "react";
import { questions } from "../questionsData";
import Options from "./Options";
import Result from "./Result";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const Question = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const shuffled = questions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === shuffledQuestions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < shuffledQuestions.length) {
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
    const reshuffled = questions.map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(reshuffled);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setIsQuizFinished(false);
  };

  if (!shuffledQuestions.length) return <div>Loading...</div>;

  if (isQuizFinished) {
    return (
      <Result
        score={score}
        totalQuestions={shuffledQuestions.length}
        onReset={handleReset}
      />
    );
  }

  return (
    <div className="flex flex-col gap-5 w-full">
      <span className="text-lg tracking-widest font-mono text-gray-400">
        Question {currentQuestion + 1} of {shuffledQuestions.length}
      </span>

      <h2 className="text-lg font-medium">
        {shuffledQuestions[currentQuestion].question}
      </h2>

      <ul className="flex flex-col gap-3 items-start w-full">
        {shuffledQuestions[currentQuestion].options.map((option, index) => (
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
          {currentQuestion + 1 === shuffledQuestions.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Question;
