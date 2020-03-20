export type TodoParam = {
  id: string;
  description: string;
  registeredDate: string;
  updatedDate?: string;
  relatedTodoId?: string;
  done: boolean;
}

export default class Todo {
  public id: string = '';
  public description: string = '';
  public registeredDate: string = '';
  public updatedDate?: string = '';
  public relatedTodoId?: string = '';
  public done: boolean = false;
  constructor (param?: TodoParam) {
    param && Object.assign<Todo, TodoParam>(this, param);
  }
  public getFormattedDate (date: string) {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}년 ${dateObj.getMonth()}월 ${dateObj.getDay()}일 ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  }
}
