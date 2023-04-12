import React from "react";
import { useState } from "react";

export default function Exercises(): JSX.Element {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  function Add() {
    setResult(Number(num1) + Number(num2));
  }

  function Subtract() {
    setResult(num1 - num2);
  }

  function Multiply() {
    setResult(num1 * num2);
  }

  function Divide() {
    setResult(num1 / num2);
  }
  return (
    <div className="text-white text-2xl bg-black flex flex-col justify-center items-center gap-3">
      <div data-testid="result" className="text-7xl">
        {result}
      </div>

      <input
        className="text-white text-center rounded-md border-white border-2 bg-black"
        type="number"
        data-testid="num1"
        value={num1}
        onChange={(e: any) => {
          setNum1(e.target.value);
        }}
      />
      <input
        className="text-white text-center rounded-md border-white border-2 bg-black"
        type="number"
        data-testid="num2"
        value={num2}
        onChange={(e: any) => {
          setNum2(e.target.value);
        }}
      />
      <div className="flex flex-col w-full justify-center items-center gap-2 py-3">
        <button
          onClick={Add}
          className="bg-gray-500 hover:bg-gray-800 text-white py-1 px-4 rounded w-1/3"
          data-testid="add"
        >
          Add
        </button>
        <button
          onClick={Subtract}
          className="bg-gray-500 hover:bg-gray-800 text-white py-1 px-4 rounded w-1/3"
          data-testid="subtract"
        >
          Subtract
        </button>
        <button
          onClick={Multiply}
          className="bg-gray-500 hover:bg-gray-800 text-white py-1 px-4 rounded w-1/3"
          data-testid="multiply"
        >
          Multiply
        </button>
        <button
          onClick={Divide}
          className="bg-gray-500 hover:bg-gray-800 text-white py-1 px-4 rounded w-1/3"
          data-testid="divide"
        >
          Divide
        </button>
      </div>
    </div>
  );
}
