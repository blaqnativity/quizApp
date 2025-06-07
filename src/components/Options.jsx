const Options = ({ option, selectedOption, onSelect }) => {
  const isSelected = selectedOption === option;

  return (
    <li
      onClick={() => onSelect(option)}
      className={`cursor-pointer px-5 py-3 rounded-lg font-bold w-full list-none transition duration-300
        ${isSelected ? "bg-blue-500 text-white" : "bg-blue-300 text-black/70 hover:bg-blue-400 hover:text-black/80"}
      `}
    >
      {option}
    </li>
  );
};

export default Options;
