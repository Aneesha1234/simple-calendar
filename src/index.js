import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const handleAdder = () => {
    return setCount(count + step);
  };
  const handleSubstractor = () => {
    return setCount(count - step);
  };
  const handleStep = (sign) => {
    if (sign === "+") setStep(step + 1);
    else setStep(step - 1);
  };

  const date = new Date("june 21 2027");
  console.log(date.getDate());
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div className="step">
        {" "}
        <button onClick={()=>handleStep("-")}>-</button>Step:{step}
        <button onClick={()=>handleStep("+")}>+</button>
      </div>
      <div className="count">
        <button onClick={handleSubstractor}> -</button>
        Count:{count}
        <button onClick={handleAdder}> +</button>{" "}
      </div>
      <div>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? ` ${count}days from today is  `
            : `${count} days ago was `}{" "}
        </span>
        <span>{date.toDateString()} </span>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
