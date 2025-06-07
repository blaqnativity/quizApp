import { useEffect, useState } from "react";
import { questions } from "../questionsData";

const Result = ({ score, totalQuestions, onReset }) => {
  const [showAnswers, setShowAnswers] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnswers(false);
    }, 2000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="text-center mx-auto">
      <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
      <p className="text-lg mb-4">
        Your Score: <span className="font-bold">{score}</span> /{" "}
        {totalQuestions}
      </p>

      {showAnswers ? (
        <div className="text-left max-w-xl mx-auto mb-6">
          <h3 className="font-semibold mb-2">Correct Answers:</h3>
          <ul className="space-y-2">
            {questions.map((q, index) => (
              <li key={index}>
                <strong>Q{index + 1}:</strong> {q.question}
                <br />
                <span className="text-green-600">✔ {q.answer}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="italic text-gray-600 mb-4">Ready to try again?</p>
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
