export interface IShowDB {
  id: string;
  band: string;
  starts_at: string;
}

class Show {
  constructor(
    private id: string,
    private band: string,
    private startsAt: string
  ) {}

  public getId = () => {
    return this.id;
  };

  public getBand = () => {
    return this.band;
  };

  public getStarts = () => {
    return this.startsAt;
  };
}
export default Show;

export interface inputCreateDTO {
  band: string;
  startsAt: string;
  token: string;
}
