export type TodoParam = {
  id: string;
  description: string;
  registeredDate: string;
  updatedDate?: string;
  relatedTodoId?: string;
}

export default class Todo {
  public id: string = '';
  public description: string = '';
  public registeredDate: string = '';
  public updatedDate?: string = '';
  public relatedTodoId?: string = '';
  constructor (param?: TodoParam) {
    param && Object.assign<Todo, TodoParam>(this, param);
  }
}
