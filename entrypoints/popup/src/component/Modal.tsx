import React, { useState } from "react";

interface ModalProps {
  closeModal: () => void;
  generateResponse: (input: string) => void;
  insertResponse: () => void;
  response: string;
}

const Modal: React.FC<ModalProps> = ({
  closeModal,
  generateResponse,
  insertResponse,
  response,
}) => {
  const [inputText, setInputText] = useState<string>("");

  const handleGenerate = () => {
    if (inputText.trim()) {
      generateResponse(inputText);
    } else {
      alert("Please enter a command");
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white p-4 rounded-md shadow-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold mb-2">Generate AI Response</h1>
        <textarea
          className="w-full p-2 border"
          placeholder="Enter your command"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
          onClick={handleGenerate}
        >
          Generate
        </button>
        {response && (
          <>
            <p className="mt-4">{response}</p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={insertResponse}
            >
              Insert Response
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
