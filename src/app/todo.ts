export class Todo {

  constructor(
    public task: string,
    public status: boolean,
    public dueDate?: Date
  ) {}

}
