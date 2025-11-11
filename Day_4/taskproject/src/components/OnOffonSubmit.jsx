import { useState } from "react";

export default function OnOffonSubmit() {
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValue(inputValue.toUpperCase());
  };

  const getBox = () => {
    if (submittedValue === "ON") {
      return <div className="bg-green-500 text-white p-4 rounded-xl text-center">ON</div>;
    }
    if (submittedValue === "OFF") {
      return <div className="bg-red-500 text-white p-4 rounded-xl text-center">OFF</div>;
    }
    return <div className="bg-yellow-400 text-black p-4 rounded-xl text-center">Normal</div>;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="text"
          placeholder="Type ON or OFF"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="border p-2 rounded-lg"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Submit
        </button>
      </form>

      {getBox()}
    </div>
  );
}
