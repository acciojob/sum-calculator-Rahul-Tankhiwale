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

  useEffect(() => {
    // Async sum calculation without async/await
    let isCancelled = false;
    setTimeout(() => {
      if (!isCancelled) setSum(numbers.reduce((acc, curr) => acc + curr, 0));
    }, 0);
    return () => (isCancelled = true);
  }, [numbers]);

  return (
    <div>
      <h1>Sum Calculator</h1> {/* Must be h1 for test */}
      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter number & press Enter"
      />
      <p id="numbers">Numbers: {numbers.join(", ")}</p> {/* use p tag */}
      <p id="sum">Total Sum: {sum}</p> {/* use p tag */}
    </div>
  );
}
