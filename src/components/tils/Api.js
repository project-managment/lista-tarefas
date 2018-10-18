import axios from 'axios';

export default axios.create({
  baseURL: `http://lista-tarefas-api.herokuapp.com/`
});
