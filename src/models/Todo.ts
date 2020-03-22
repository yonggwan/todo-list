export type TodoParam = {
  id: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  relatedTodoId?: string;
  done: boolean;
}

export default class Todo {
  public id: string = '';
  public description: string = '';
  public createdAt: string = '';
  public updatedAt?: string = '';
  public relatedTodoId?: string = '';
  public done: boolean = false;
  constructor (param?: TodoParam) {
    param && Object.assign<Todo, TodoParam>(this, param);
  }
  public getFormattedDate (date: string) {
    const dateObj = new Date(date);
    return `${dateObj.getFullYear()}년 ${dateObj.getMonth() + 1}월 ${dateObj.getDate()}일 ${dateObj.getHours()}:${dateObj.getMinutes()}`;
  }
}
