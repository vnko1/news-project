import axios from 'axios';

const BASE_URL =
  'https://news-my-project-default-rtdb.europe-west1.firebasedatabase.app/users';

class User {
  constructor() {
    this.name = '';
    this.email = '';
    this.id = '';
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  setToken(newToken) {
    this.token = newToken;
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  getId() {
    return this.id;
  }

  setId(newId) {
    this.id = newId;
  }
  updateProfile(newName, newEmail, newId, newToken) {
    this.name = newName;
    this.email = newEmail;
    this.id = newId;
    this.token = newToken;
  }

  resetUser() {
    this.name = '';
    this.email = '';
    this.id = '';
    this.token = null;
  }

  async getAllData(typeOfData) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}.json?auth=${this.getToken()}`
    );

    return data;
  }

  async getData(typeOfData, id) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`
    );

    return data;
  }

  async setData(typeOfData, id, data) {
    await axios.put(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`,
      data
    );
  }

  async deleteData(typeOfData, id) {
    await axios.delete(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json?auth=${this.getToken()}`
    );
  }
}

export const users = new User();
