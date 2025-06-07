
const Result = ({ score, totalQuestions, onReset }) => {
    return (
      <div className="text-center mx-auto">
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
        <p className="text-lg">
          Your Score: <span className="font-bold">{score}</span> / {totalQuestions}
        </p>
        <button
          onClick={onReset}
          className="bg-blue-500 cursor-pointer py-2 px-5 rounded-md text-white mt-4 hover:bg-blue-600 transition"
        >
          Reset
        </button>
      </div>
    );
  };
  
  export default Result;
  