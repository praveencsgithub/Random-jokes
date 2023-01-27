// Import React (Mandatory Step).
import React from "react";
// Import ReactDOM (Mandatory Step).
import ReactDOM from "react-dom";
  
// Import The Button Component from Button.js 
import Button from "./components/Button";
import { useState } from "react";
  
const rootElement = document.getElementById("root");
  
// Create a functional component
const App = () => {
    // Declare a state variable
    const [Joke, setJoke] = useState("");
  
    const fetchApi = () => {
        // Fetching data from the API
            fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
            .then((res) => res.json())
            .then((data) => setJoke(data.joke));
      };
  
    return (
        // Return the Button Component with a conditional statement
        <div className="box">
          <h2>Don't Laugh Challenge</h2>
          <p>{Joke}</p>
           <Button callApi={fetchApi} /> 
    
         </div>
      );
}
  
// Rendering the App Component.
ReactDOM.render(
    <App />,
  rootElement
);
export default App