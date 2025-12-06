import React, { useState, useEffect } from "react";

export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const num = parseInt(inputValue);
      if (!isNaN(num)) setNumbers((prev) => [...prev, num]);
      setInputValue("");
    }
  };

  // Synchronous sum calculation
  useEffect(() => {
    const total = numbers.reduce((acc, curr) => acc + curr, 0);
    setSum(total);
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter number & press Enter"
      />
      <p id="numbers">Numbers: {numbers.join(", ")}</p>
      <p id="sum">Sum: {sum}</p>
    </div>
  );
}
