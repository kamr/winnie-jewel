const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://win-jewel.herokuapp.com'
  : 'http://localhost:8080';

export default SERVER_URL;
