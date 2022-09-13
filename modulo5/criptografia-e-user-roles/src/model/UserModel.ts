class UserModel {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private role: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }

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
}
export default UserModel;
