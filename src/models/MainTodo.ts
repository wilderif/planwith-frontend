import { PersonalGroupTodo, PersonalTodo } from "@/types";

export class MainTodo {
  id: string;
  title: string;
  done: boolean;
  date: string;
  startTime: string | null;
  createdAt: string;
  categoryId: string;
  color: string | undefined;

  constructor(data: PersonalTodo | PersonalGroupTodo) {
    this.id = "personalTodoId" in data ? data.personalTodoId : data.groupTodoId;
    this.title = data.title;
    this.done = data.done;
    this.date = data.date;
    this.startTime = data.startTime || null;
    this.createdAt = data.createdAt;
    this.categoryId = data.categoryId;
    this.color = undefined;
  }
}
