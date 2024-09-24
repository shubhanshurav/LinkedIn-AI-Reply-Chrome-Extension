import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Modal = ({ closeModal, generateResponse, insertResponse, response, }) => {
    const [inputText, setInputText] = useState("");
    const handleGenerate = () => {
        if (inputText.trim()) {
            generateResponse(inputText);
        }
        else {
            alert("Please enter a command");
        }
    };
    return (_jsx("div", { id: "modal-backdrop", className: "fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center", onClick: closeModal, children: _jsxs("div", { className: "bg-white p-4 rounded-md shadow-md", onClick: (e) => e.stopPropagation(), children: [_jsx("h1", { className: "text-xl font-bold mb-2", children: "Generate AI Response" }), _jsx("textarea", { className: "w-full p-2 border", placeholder: "Enter your command", value: inputText, onChange: (e) => setInputText(e.target.value) }), _jsx("button", { className: "bg-blue-500 text-white px-4 py-2 rounded mt-2", onClick: handleGenerate, children: "Generate" }), response && (_jsxs(_Fragment, { children: [_jsx("p", { className: "mt-4", children: response }), _jsx("button", { className: "bg-green-500 text-white px-4 py-2 rounded mt-2", onClick: insertResponse, children: "Insert Response" })] }))] }) }));
};
export default Modal;
