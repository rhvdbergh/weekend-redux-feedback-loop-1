import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Header from '../Header/Header.jsx';

function Understanding() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(``);

  const handleBack = () => {
    history.push(`/feeling`);
  };

  const handleNext = (event) => {
    event.preventDefault();

    dispatch({
      type: `ADD_UNDERSTANDING`,
      payload: understanding,
    });

    history.push(`/support`);
  };

  return (
    <>
      <Header />

      <h1>How well are you understanding the content?</h1>
      <form onSubmit={handleNext}>
        <p>Please enter a value from 1-5</p>
        <input
          type="number"
          min="1"
          max="5"
          value={understanding}
          onChange={(event) => setUnderstanding(event.target.value)}
          required
        />
        <div>
          <button onClick={handleBack}>Back</button>
          <button type="submit">Next</button>
        </div>
      </form>
    </>
  );
}
export default Understanding;
