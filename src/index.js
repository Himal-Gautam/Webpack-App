import generateJoke from "./generateJoke"; // Importing the 'generateJoke' function from a file
import "./styles/main.scss"; // Importing a SCSS file for styling
import laughing from "./assets/laughing.svg"; // Importing an SVG image file

const laughImg = document.getElementById("laughImg"); // Getting an element with the ID "laughImg"
laughImg.src = laughing; // Setting the 'src' attribute of the element to the imported SVG image

const jokeBtn = document.getElementById("jokeBtn"); // Getting an element with the ID "jokeBtn"
jokeBtn.addEventListener("click", generateJoke); // Adding a click event listener to the button, calling the 'generateJoke' function

generateJoke(); // Calling the 'generateJoke' function immediately
