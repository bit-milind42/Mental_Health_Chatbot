// // Select elements
// const chatBox = document.getElementById('chat-box');
// const userInput = document.getElementById('user-input');
// const sendBtn = document.getElementById('send-btn');
// const typingIndicator = document.getElementById('typing-indicator');

// // Show welcome message on page load
// document.addEventListener('DOMContentLoaded', function() {
//     showWelcomeMessage();
// });

// // Function to show a welcome message
// function showWelcomeMessage() {
//     const welcomeMessage = "Hello! I'm your chatbot. How can I assist you today?";
//     addMessage(welcomeMessage, 'ai-message');
// }

// // Function to show typing indicator
// function showTypingIndicator() {
//     typingIndicator.style.display = 'block';
// }

// // Function to hide typing indicator
// function hideTypingIndicator() {
//     typingIndicator.style.display = 'none';
// }

// // Function to disable chat input
// function disableChatInput() {
//     userInput.disabled = true;
//     sendBtn.disabled = true;
//     userInput.style.backgroundColor = '#f0f0f0';
//     userInput.style.cursor = 'not-allowed';
//     sendBtn.style.cursor = 'not-allowed';
//     userInput.placeholder = 'Chat session ended';
// }

// // Event listener for the "Send" button
// sendBtn.addEventListener('click', async function() {
//     await sendMessage();
// });

// // Send message on pressing Enter key
// userInput.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         sendMessage(); // Trigger the send message function
//     }
// });

// // Function to send message
// async function sendMessage() {
//     const userMessage = userInput.value.trim();
//     if (userMessage) {
//         addMessage(userMessage, 'user-message'); // Display user message
//         userInput.value = ''; // Clear input
//         showTypingIndicator(); // Show typing indicator

//         try {
//             const response = await fetch('/api/chat/', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ message: userMessage })
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json(); // Get JSON response
//             hideTypingIndicator(); // Hide typing indicator
//             addMessage(data.response, 'ai-message'); // Display AI response

//             // Reset the inactivity timer after a valid message is sent
//             resetInactivityTimer();
//         } catch (error) {
//             hideTypingIndicator(); // Hide typing indicator
//             addMessage("Sorry, I couldn't get a response. Please try again.", 'ai-message');
//         }
//     }
// }

// // Function to add messages to the chat
// function addMessage(message, type) {
//     const messageElement = document.createElement('div');
//     messageElement.className = type;
//     messageElement.textContent = message;
//     chatBox.appendChild(messageElement);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
// }

// // Variable to hold the inactivity timeout
// let inactivityTimeout;

// // Function to reset the inactivity timer
// function resetInactivityTimer() {
//     clearTimeout(inactivityTimeout);
//     inactivityTimeout = setTimeout(showInactivityMessage, 60000); // 1 minute timeout
// }

// // Function to show the inactivity message
// function showInactivityMessage() {
//     addMessage("Do you want to continue the conversation?", 'ai-message');

//     // Create buttons for options
//     const optionsContainer = document.createElement('div');
//     optionsContainer.className = 'options-container';

//     const yesButton = document.createElement('button');
//     yesButton.textContent = 'Yes';
//     yesButton.className = 'conversation-option';
//     yesButton.onclick = () => {
//         const confirmationElement = document.createElement('div');
//         confirmationElement.className = 'ai-message';
//         confirmationElement.textContent = "Great! How can I assist you further?";
//         chatBox.appendChild(confirmationElement);
//         chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
//         resetInactivityTimer(); // Reset timer after user responds
//     };

//     const noButton = document.createElement('button');
//     noButton.textContent = 'No';
//     noButton.className = 'conversation-option';
//     noButton.onclick = showEndConversationOptions;

//     optionsContainer.appendChild(yesButton);
//     optionsContainer.appendChild(noButton);

//     // Add the options to the chat box
//     chatBox.appendChild(optionsContainer);
//     chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
// }

// // Event listener for user input to reset the timer
// userInput.addEventListener('input', resetInactivityTimer);
// sendBtn.addEventListener('click', resetInactivityTimer); // Reset timer when sending a message

// // Initialize the inactivity timer on page load
// resetInactivityTimer();

// // Function to show end conversation options
// function showEndConversationOptions() {
//     // Disable the chat input first
//     disableChatInput();

//     const messageElement = document.createElement('div');
//     messageElement.className = 'ai-message';
//     messageElement.textContent = "Thank you for chatting! Feel free to connect again!";
//     chatBox.appendChild(messageElement);

//     const resourcesContainer = document.createElement('div');
//     resourcesContainer.className = 'resources-container';

//     const articlesButton = document.createElement('button');
//     articlesButton.textContent = 'Check out our articles';
//     articlesButton.className = 'resource-option';

//     const resourcesButton = document.createElement('button');
//     resourcesButton.textContent = 'Check out resources';
//     resourcesButton.className = 'resource-option';

//     resourcesContainer.appendChild(articlesButton);
//     resourcesContainer.appendChild(resourcesButton);

//     // Add spacing between buttons and message
//     const spacingDiv = document.createElement('div');
//     spacingDiv.style.margin = '10px 0'; // Add margin for spacing

//     // Append everything to the chat box
//     chatBox.appendChild(resourcesContainer);
//     chatBox.appendChild(spacingDiv);

//     // Clear any existing inactivity timers
//     clearTimeout(inactivityTimeout);

//     // Scroll to bottom of chat box
//     chatBox.scrollTop = chatBox.scrollHeight;
// }







// Select elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const typingIndicator = document.getElementById('typing-indicator');

// Show welcome message on page load
document.addEventListener('DOMContentLoaded', function() {
    showWelcomeMessage();
});

// Function to show a welcome message
function showWelcomeMessage() {
    const welcomeMessage = "Hello! I'm your chatbot. How can I assist you today?";
    addMessage(welcomeMessage, 'ai-message');
}

// Function to show typing indicator
function showTypingIndicator() {
    typingIndicator.style.display = 'block';
}

// Function to hide typing indicator
function hideTypingIndicator() {
    typingIndicator.style.display = 'none';
}

// Function to disable chat input
function disableChatInput() {
    userInput.disabled = true;
    sendBtn.disabled = true;
    userInput.style.backgroundColor = '#f0f0f0';
    userInput.style.cursor = 'not-allowed';
    sendBtn.style.cursor = 'not-allowed';
    userInput.placeholder = 'Chat session ended';
}

// Event listener for the "Send" button
sendBtn.addEventListener('click', async function() {
    await sendMessage();
});

// Send message on pressing Enter key
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage(); // Trigger the send message function
    }
});

// Function to send message
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, 'user-message'); // Display user message
        userInput.value = ''; // Clear input
        showTypingIndicator(); // Show typing indicator

        try {
            const response = await fetch('/api/chat/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message: userMessage })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Get JSON response
            hideTypingIndicator(); // Hide typing indicator
            addMessage(data.response, 'ai-message'); // Display AI response

            // Reset the inactivity timer after a valid message is sent
            resetInactivityTimer();
        } catch (error) {
            hideTypingIndicator(); // Hide typing indicator
            addMessage("Sorry, I couldn't get a response. Please try again.", 'ai-message');
        }
    }
}

// Function to add messages to the chat
function addMessage(message, type) {
    const messageElement = document.createElement('div');
    messageElement.className = type;
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Variable to hold the inactivity timeout
let inactivityTimeout;

// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(showInactivityMessage, 6000); // 1 minute timeout
}

// Function to show the inactivity message
function showInactivityMessage() {
    addMessage("Do you want to continue the conversation?", 'ai-message');

    // Create buttons for options
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';

    const yesButton = document.createElement('button');
    yesButton.textContent = 'Yes';
    yesButton.className = 'conversation-option';
    yesButton.onclick = () => {
        const confirmationElement = document.createElement('div');
        confirmationElement.className = 'ai-message';
        confirmationElement.textContent = "Great! How can I assist you further?";
        chatBox.appendChild(confirmationElement);
        chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
        resetInactivityTimer(); // Reset timer after user responds
    };

    const noButton = document.createElement('button');
    noButton.textContent = 'No';
    noButton.className = 'conversation-option';
    noButton.onclick = showEndConversationOptions;

    optionsContainer.appendChild(yesButton);
    optionsContainer.appendChild(noButton);

    // Add the options to the chat box
    chatBox.appendChild(optionsContainer);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Event listener for user input to reset the timer
userInput.addEventListener('input', resetInactivityTimer);
sendBtn.addEventListener('click', resetInactivityTimer); // Reset timer when sending a message

// Initialize the inactivity timer on page load
resetInactivityTimer();

// Function to show end conversation options
function showEndConversationOptions() {
    // Disable the chat input first
    disableChatInput();

    const messageElement = document.createElement('div');
    messageElement.className = 'ai-message';
    messageElement.textContent = "Thank you for chatting! Feel free to connect again!";
    chatBox.appendChild(messageElement);

    const resourcesContainer = document.createElement('div');
    resourcesContainer.className = 'resources-container';

    const articlesButton = document.createElement('button');
    articlesButton.textContent = 'Check out our articles';
    articlesButton.className = 'resource-option';

    const resourcesButton = document.createElement('button');
    resourcesButton.textContent = 'Check out resources';
    resourcesButton.className = 'resource-option';

    resourcesContainer.appendChild(articlesButton);
    resourcesContainer.appendChild(resourcesButton);

    // Add spacing between buttons and message
    const spacingDiv = document.createElement('div');
    spacingDiv.style.margin = '10px 0'; // Add margin for spacing

    // Append everything to the chat box
    chatBox.appendChild(resourcesContainer);
    chatBox.appendChild(spacingDiv);

    // Clear any existing inactivity timers
    clearTimeout(inactivityTimeout);

    // Scroll to bottom of chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}