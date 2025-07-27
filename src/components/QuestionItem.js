// src/components/QuestionItem.js
import React from "react";

function QuestionItem({ question, onDeleteQuestion, onUpdateQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  // Handle PATCH request to update the correct answer
  function handleCorrectAnswerChange(event) {
    const updatedIndex = parseInt(event.target.value);

    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex: updatedIndex }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        onUpdateQuestion(updatedQuestion); // Update state in App
      });
  }

  // Handle DELETE request to remove question
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteQuestion(id); // Update state in App
    });
  }

  // Generate options for correct answer dropdown
  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleCorrectAnswerChange}>
          {options}
        </select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
