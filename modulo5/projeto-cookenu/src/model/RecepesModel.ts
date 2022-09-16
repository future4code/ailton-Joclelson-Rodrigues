export interface typeRecepes {
  id: string;
  title: string;
  description: string;
  creationDate: Date;
}

class RecepesModel {
  constructor(
    private id: string,
    private title: string,
    private preparationMode: string,
    private creationDate: string,
    private userId: string
  ) {}

  static typeRecepesModel(recepe: any): RecepesModel {
    return new RecepesModel(
      recepe.id,
      recepe.title,
      recepe.preparationMode,
      recepe.creationDate,
      recepe.userId
    );
  }
  public getId() {
    return this.id;
  }
  public getTitle() {
    return this.title;
  }
  public getPreparation() {
    return this.preparationMode;
  }
  public getDate() {
    return this.creationDate;
  }
  public getUserId() {
    return this.userId;
  }
}
export default RecepesModel;
