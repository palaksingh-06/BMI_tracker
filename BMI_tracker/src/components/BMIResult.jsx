function BMIResult({ bmi, category }) {
  if (bmi === null || bmi === "") return null;

  return (
    <div className="mt-4 text-center">
      <p className="text-lg font-semibold">BMI: {bmi}</p>
      <p className="text-sm text-gray-600">{category}</p>
    </div>
  );
}

export default BMIResult;