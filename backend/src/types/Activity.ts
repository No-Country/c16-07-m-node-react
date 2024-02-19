export default class Activity {
  readonly id: number;
  createdAt: Date;
  description: string;
  name: string;
  updatedAt: Date;

  constructor(
    id: number,
    createdAt: Date,
    description: string,
    name: string,
    updatedAt: Date
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.description = description;
    this.name = name;
    this.updatedAt = updatedAt;
  }
}
