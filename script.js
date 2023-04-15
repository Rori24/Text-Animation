// Get the container
const containerEl = document.querySelector(".container");

// Array with different carreers
const careers = ["Software Developer", "Web Developer", "Front-End Developer"];

// Variable to hold the index
let careerIndex = 0;

// Variable to store the character of the element
let characterIndex = 0;

updateText();

// Function that will update the text on the screen
function updateText(){
    characterIndex++;
    // Manipulating the 'container'
    containerEl.innerHTML = `
    <h1>I am a ${careers[careerIndex].slice(0,characterIndex)}</h1>
    `;
    // To get the next career
    if (characterIndex === careers[careerIndex].length){
        // changing the careers
        careerIndex++;
        // Reset the character index
        characterIndex = 0;
    }
    // Reset the career index so it repeats
    if (careerIndex === careers.length){
        careerIndex = 0;
    }
    // Calling the function more than once
    setTimeout(updateText, 400);
};