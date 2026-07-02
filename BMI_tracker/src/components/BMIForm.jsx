import { useState } from "react";
import BMIResult from "./BMIResult";

function BMIForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

 function handleSubmit(e) {
  e.preventDefault();

  const h = height / 100;
  const bmiValue = Number((weight / (h * h)).toFixed(2));

  setBmi(bmiValue);

  if (bmiValue < 18.5) setCategory("Underweight");
  else if (bmiValue < 24.9) setCategory("Normal");
  else setCategory("Overweight");
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-80">

        <h1 className="text-xl font-bold text-center mb-4">
          BMI Tracker
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border p-2 rounded"
          />

          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border p-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Get BMI
          </button>
        </form>

       <BMIResult bmi={bmi} category={category} />

      </div>
    </div>
  );
}

export default BMIForm;