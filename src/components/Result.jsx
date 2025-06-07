import { useEffect, useState } from "react";
import { questions } from "../questionsData";

const Result = ({ score, totalQuestions, onReset }) => {
  const [showAnswer, setShowAnswer] = useState(true);
  const [randomIndex, setRandomIndex] = useState(null);

  useEffect(() => {
    const randomQIndex = Math.floor(Math.random() * questions.length);
    setRandomIndex(randomQIndex);

    const timer = setTimeout(() => {
      setShowAnswer(false);
    }, 2000); // 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const randomQuestion = questions[randomIndex];

  return (
    <div className="text-center mx-auto min-h-[70vh] flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-lg mb-4">
        Your Score: <span className="font-bold">{score}</span> /{" "}
        {totalQuestions}
      </p>

      {showAnswer && randomQuestion ? (
        <div className="text-left max-w-xl mx-auto mb-6">
          <h3 className="font-semibold mb-2">One Random Correct Answer:</h3>
          <p className="mb-1">
            <strong>Q:</strong> {randomQuestion.question}
          </p>
          <p className="text-green-600">
            <strong>✔ Answer:</strong> {randomQuestion.answer}
          </p>
        </div>
      ) : (
        <p className="italic text-gray-600 mb-6">Ready to try again?</p>
      )}

      <button
        onClick={onReset}
        className="bg-blue-500 cursor-pointer py-2 px-5 rounded-md text-white hover:bg-blue-600 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Result;
