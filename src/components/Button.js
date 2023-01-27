import React from "react";
  
    // Create a functional component
    const Button = (props) => {
        return <button onClick={props.callApi}>
         Get new Joke 😄
         </button>;
    }
  
// Export Button Component
export default Button;