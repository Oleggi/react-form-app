import * as axios from "axios";

const instance = axios.create({
  baseURL: 'https://reqres.in/api/',
  headers: {
    'Access-Control-Allow-Origin': 'http://localhost:3000/',
    'Access-Control-Allow-Credentials': true,
    withCredentials: true,
  },
});

export const authAPI = {
  login(email, password) {
    return instance.post("login", {email, password}).then(response => {
    return response;
    });
  }
};

export const usersAPI = {
    getUsers(currentPage) {
      return instance
        .get(`users?page=${currentPage}`)
        .then((response) => {
          return response.data;
        });
    },
  };