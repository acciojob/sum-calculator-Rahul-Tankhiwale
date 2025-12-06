import React, { useState, useEffect } from "react";
import "regenerator-runtime/runtime";


export default function SumCalculator() {
  const [numbers, setNumbers] = useState([]);        // store all entered numbers
  const [sum, setSum] = useState(0);                // store calculated sum
  const [inputValue, setInputValue] = useState(""); // current input value

  // Handle input change
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // When user hits Enter -> add number to list
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const num = parseInt(inputValue);

      if (!isNaN(num)) {
        setNumbers((prev) => [...prev, num]);
      }

      setInputValue("");
    }
  };

  // Recalculate sum asynchronously whenever numbers array changes
  useEffect(() => {
    let isCancelled = false;

    const calculateSum = async () => {
      // simulate asynchronous non-blocking operation
      await new Promise((resolve) => setTimeout(resolve, 0));

      if (!isCancelled) {
        const total = numbers.reduce((acc, curr) => acc + curr, 0);
        setSum(total);
      }
    };

    calculateSum();

    return () => {
      isCancelled = true; // cleanup to avoid memory leaks
    };
  }, [numbers]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Sum Calculator</h2>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter number & press Enter"
        style={{ padding: "10px", width: "200px" }}
      />

      <h3>Numbers: {numbers.join(", ")}</h3>

      <h2>Total Sum: {sum}</h2>
    </div>
  );
}
