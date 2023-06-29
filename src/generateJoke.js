import axios from "axios"; // Importing the Axios library

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json", // Specify the Accept header for JSON response
    },
  };

  axios
    .get("https://icanhazdadjoke.com", config) // Making an HTTP GET request to the API with the provided configuration
    .then((res) => {
      document.getElementById("joke").innerHTML = res.data.joke; // Updating the content of the element with the ID "joke" with the retrieved joke
    });
}

export default generateJoke; // Exporting the 'generateJoke' function
