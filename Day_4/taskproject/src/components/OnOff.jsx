import { useState } from "react";

export default function OnOff() {
  const [value, setValue] = useState("");

  const getBox = () => {
    if (value.toUpperCase() === "ON") {
      return <div className="bg-green-500 text-white p-4 rounded-xl text-center">ON</div>;
    } 
    if (value.toUpperCase() === "OFF") {
      return <div className="bg-red-500 text-white p-4 rounded-xl text-center">OFF</div>;
    }
    return <div className="bg-yellow-400 text-black p-4 rounded-xl text-center">Normal</div>;
  };

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <input
        type="text"
        placeholder="Type ON or OFF"
        onChange={(e) => setValue(e.target.value)}
        className="border p-2 rounded-lg"
      />

      {getBox()}
    </div>
  );
}
