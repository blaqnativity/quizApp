import Question from "./components/Question";

const App = () => {
  return (
    <div className="max-w-5xl mx-auto flex justify-center items-start flex-col gap-6 mt-40 bg-blue-50/90 h-[70vh] p-4 rounded border border-gray-700/10">
      <p className="self-center tracking-widest font-mono">
        How well do you know me?
      </p>
      <Question />
    </div>
  );
};

export default App;
