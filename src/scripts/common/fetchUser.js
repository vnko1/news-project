import axios from 'axios';

const BASE_URL =
  'https://news-my-project-default-rtdb.europe-west1.firebasedatabase.app/users';

class User {
  constructor() {
    this.name = '';
    this.email = '';
    this.id = '';
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
  updateProfile(newName, newEmail, newId) {
    this.name = newName;
    this.email = newEmail;
    this.id = newId;
  }
  resetUser() {
    this.name = '';
    this.email = '';
    this.id = '';
  }

  async getAllData(typeOfData) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}.json`
    );

    return data;
  }

  async getData(typeOfData, id) {
    const { data } = await axios.get(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json`
    );

    return data;
  }

  async setData(typeOfData, id, data) {
    await axios.put(
      `${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json`,
      data
    );
  }

  async deleteData(typeOfData, id) {
    await axios.delete(`${BASE_URL}/${this.getId()}/${typeOfData}/${id}.json`);
  }
}

export const users = new User();
