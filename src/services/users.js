import axios from 'axios';
const baseUrl = 'http://localhost:3001/api/users';

const create = userObject => {
  const request = axios.post(baseUrl, userObject);
  return request.then(response => response.data);
};

export default { create };
