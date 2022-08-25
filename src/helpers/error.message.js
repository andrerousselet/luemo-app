const USER_NOT_FOUND = 'auth/user-not-found';
const WRONG_PASSWORD = 'auth/wrong-password';
const INVALID_EMAIL = 'auth/invalid-email';
const USER_EXISTS = 'auth/email-already-in-use';

const generateErrorMessage = ({ message, setErrors }) => {
  const errMessage = message.split('(')[1].slice(0, -2);
  switch (true) {
    case errMessage === USER_NOT_FOUND:
      setErrors('Invalid user or password!');
      break;
    case errMessage === WRONG_PASSWORD:
      setErrors('Invalid user or password!');
      break;
    case errMessage === INVALID_EMAIL:
      setErrors('Invalid user or password!');
      break;
    case errMessage === USER_EXISTS:
      setErrors('This email is already registered.');
      break;
    default:
      setErrors('Internal server error!');
  }
  setTimeout(() => {
    setErrors('');
  }, 4000);
};

export default generateErrorMessage;
