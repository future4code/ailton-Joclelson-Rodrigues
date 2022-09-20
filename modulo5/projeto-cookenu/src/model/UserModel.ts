export interface typeGetProfile {
  id: string;
  name: string;
  email: string;
}

export enum USER_ROLES {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}

class UserModel {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string,
    private role: USER_ROLES
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

  public getRole() {
    return this.role;
  }

  static typeUserModel(user: any): UserModel {
    return new UserModel(
      user.id,
      user.name,
      user.email,
      user.password,
      user.role
    );
  }
}
export default UserModel;
