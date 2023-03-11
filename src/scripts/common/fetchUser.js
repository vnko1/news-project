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
}

export const users = new User();
