"use strict";
document.addEventListener("focusin", function (event) {
    const target = event.target; // Cast event.target to HTMLElement
    // Check if the focused element is a textarea or input (like LinkedIn comment box)
    if (target && (target.tagName === "TEXTAREA" || target.tagName === "INPUT")) {
        // Prevent duplicate AI icon creation
        if (document.getElementById("ai-icon"))
            return;
        // Create the AI icon inside the input box
        const aiIcon = document.createElement("div");
        aiIcon.id = "ai-icon";
        aiIcon.style.position = "absolute";
        aiIcon.style.right = "10px";
        aiIcon.style.bottom = "10px";
        aiIcon.innerText = "AI";
        aiIcon.style.cursor = "pointer";
        aiIcon.style.padding = "5px";
        aiIcon.style.backgroundColor = "#f0f0f0";
        aiIcon.style.borderRadius = "4px";
        aiIcon.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)";
        // Ensure the icon is appended to the parent of the input/textarea
        if (target.parentElement) {
            target.parentElement.appendChild(aiIcon); // TypeScript now knows parentElement exists
        }
        // Add click event listener to the AI icon
        aiIcon.addEventListener("click", () => {
            // Open Modal for AI response generation
            const modal = document.createElement("div");
            modal.id = "ai-modal";
            modal.style.position = "fixed";
            modal.style.top = "50%";
            modal.style.left = "50%";
            modal.style.transform = "translate(-50%, -50%)";
            modal.style.width = "400px";
            modal.style.height = "300px";
            modal.style.backgroundColor = "white";
            modal.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.1)";
            modal.style.padding = "20px";
            modal.style.display = "flex";
            modal.style.flexDirection = "column";
            modal.style.justifyContent = "space-between";
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.placeholder = "Type your command...";
            inputField.style.padding = "10px";
            inputField.style.border = "1px solid #ddd";
            modal.appendChild(inputField);
            const generateButton = document.createElement("button");
            generateButton.innerText = "Generate";
            generateButton.style.padding = "10px";
            generateButton.style.backgroundColor = "#4CAF50";
            generateButton.style.color = "white";
            generateButton.style.border = "none";
            modal.appendChild(generateButton);
            // Append modal to the document
            document.body.appendChild(modal);
            // Close modal if clicking outside
            window.onclick = function (event) {
                if (event.target === modal) {
                    modal.remove();
                }
            };
            // Handle Generate Button Click
            generateButton.addEventListener("click", () => {
                // Example of generating a reply and inserting into comment box
                const generatedReply = "This is an AI-generated reply based on your input.";
                inputField.value = generatedReply;
                // Remove modal after generation
                setTimeout(() => modal.remove(), 1000);
            });
        });
    }
});
// Remove the AI icon when focus is lost
document.addEventListener("focusout", function (event) {
    const target = event.target; // Cast event.target to HTMLElement
    if (target && (target.tagName === "TEXTAREA" || target.tagName === "INPUT")) {
        const aiIcon = document.getElementById("ai-icon");
        if (aiIcon) {
            aiIcon.remove();
        }
    }
});
