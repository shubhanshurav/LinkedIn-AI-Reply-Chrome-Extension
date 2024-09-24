import React, { useState } from "react";
import Modal from "./src/component/Modal";
import "./src/styles/tailwind.css"; 


const App = () => {
  const [response, setResponse] = useState(""); 
  const [isModalOpen, setModalOpen] = useState(false); 

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to generate a dummy response
  const generateResponse = () => {
    setResponse(
      "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask."
    );
  };

  // Function to insert the response (you can modify it to insert the response somewhere else if needed)
  const insertResponse = () => {
    console.log("Inserting response:", response);
  };

  return (
    <div className="App">
      <button className="open-modal-btn" onClick={() => setModalOpen(true)}>
        Open Modal
      </button>
      {isModalOpen && (
        <Modal
          closeModal={closeModal}
          generateResponse={generateResponse}
          insertResponse={insertResponse}
          response={response}
        />
      )}
    </div>
  );
};

export default App;
