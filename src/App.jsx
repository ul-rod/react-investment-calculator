import { useState } from 'react';

import Header from './components/Header.jsx';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
import Error from './components/Error.jsx';

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      // Adding the "+" symbol in front of the "newValue"
      // variable will force the conversion of a string
      // value to a number value.
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {inputIsValid && <Results input={userInput} />}
      {!inputIsValid && <Error />}
    </>
  );
}

export default App;
