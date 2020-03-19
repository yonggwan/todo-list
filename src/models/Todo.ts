export type TodoParam = {
  id: number;
  description: string;
  registeredDate: string;
  updatedDate?: string;
  relatedTodoId?: number;
}

export default class Todo {
  private age: number = 100;
  public id: number = 0;
  public description: string = '';
  public registeredDate: string = '';
  public updatedDate: string = '';
  public relatedTodoId: number = 0;
  constructor (param?: TodoParam) {
    param && Object.assign<Todo, TodoParam>(this, param);
  }
}
