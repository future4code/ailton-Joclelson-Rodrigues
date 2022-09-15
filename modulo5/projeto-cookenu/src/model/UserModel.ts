export interface typeGetProfile {
  id: string;
  name: string;
  email: string;
}

class UserModel {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {}

  public getID() {
    return this.id;
  }
  public getName() {
    return this.name;
  }
  public getEmail() {
    return this.email;
  }
  public getPassword() {
    return this.password;
  }

  static typeUserModel(user: any): UserModel {
    return new UserModel(user.id, user.name, user.email, user.password);
  }
}
export default UserModel;
