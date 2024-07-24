
import React, { useReducer } from 'react';


const initialState = {
  email: '',
  password: ''
};

// Action types
const ACTIONS = {
  UPDATE_EMAIL: 'email',
  UPDATE_PASSWORD: 'password',
  RESET: 'reset'
};

// Reducer function
function formReducer(state, action) {
  switch (action.type) {
    case ACTIONS.UPDATE_EMAIL:
      return { ...state, email: action.payload };
    case ACTIONS.UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    case ACTIONS.RESET:
      return initialState;
    default:
      throw new Error('Invalid action type');
  }
}

const FormComponent = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleEmailChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_EMAIL, payload: e.target.value });
  };

  const handlePasswordChange = (e) => {
    dispatch({ type: ACTIONS.UPDATE_PASSWORD, payload: e.target.value });
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.RESET });
  };

  return (
    <div>
      <form>
        <div>
          <label>Email: </label>
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" value={state.password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {state.email || state.password ? (
        <div>
          <div>User Email: {state.email}</div>
          <div>User Password: {state.password}</div>
        </div>
      ) : (
        <div>No details found</div>
      )}
    </div>
  );
};

export default FormComponent;
