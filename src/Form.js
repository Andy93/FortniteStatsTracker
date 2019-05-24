import React from 'react';

import './App.css';

const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        placeholder="Enter Epic Gamertag here..."
        ref={props.inputRef}
        onChange={props.handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
