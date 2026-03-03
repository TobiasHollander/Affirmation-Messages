const affirmations = ["Just because it’s taking time doesn't mean it’s not happening.",
                        "Your life unfolds in proportion to your courage.",
                        "If you don’t like something, just take away its only power. Your attention.",
                        "If I keep showing up, then life will reward me.",
                        "When you visualize, then you materialize. If you’ve been there in the mind, you’ll go there in the body.",
                        "Clarity usually comes after you take the step. Waiting to feel ready is often what keeps you stuck.",
                        "To live your greatest life, you must first become a leader within yourself. Take charge of your life, begin attracting and manifesting all that you desire in life.",
                        "You’re allowed to change your mind. Growth isn’t betrayal, it’s information.",
                        "Life is only as magical and beautiful as the lens you see it through so, please remember, nothing will improve until your mind gives it a chance to.",
                        "The entire point of life is to take chances on dreams that seem crazy to most, but feel like destiny to you."]

const button = document.getElementById('updateButton');
const message = document.getElementById('message');
let lastMessage = null; // tracks previous message in randomAffirmation function

// Randomize Affirmation Message function
const randomAffirmation = () => {
    let newMessage;
    
    // randomly selecting an affirmation from the affirmations array while preventing repeats in a row
    do {
        newMessage = affirmations[Math.floor(Math.random() * affirmations.length)];
    } while (newMessage === lastMessage);

    lastMessage = newMessage; // updating lastMessage to prevent any repeats
    return newMessage;
};

// Button Click Event Handler
button.addEventListener('click', () => {
    let newMessage = randomAffirmation();
    message.textContent = `"${newMessage}"`;
});