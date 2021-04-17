import React, { useState } from "react";
import PropTypes from "prop-types";

function Hello(props) {
  const [greeting, setGreeting] = useState("Hello Function Component!");

  return (
    <div>
      <h1>Hello {props.name}!</h1>
      <h4>{greeting}</h4>
      <button onClick={() => setGreeting("me cambiaron")}>Click me</button>
    </div>
  );
}

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: "Jose",
};

export default Hello;
