class User {
  constructor() {
    this.email = '';
    this.id = '';
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
}

export const users = new User();
