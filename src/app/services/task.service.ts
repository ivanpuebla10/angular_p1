import { Injectable } from '@angular/core';
// import { TASKS } from '../mock-tasks'
import {Task} from '../Task'
//of's import deleted cause I'm not using it 
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders } from '@angular/common/http'

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }
//this way is using observables:
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl)
    // const tasks = of(TASKS)
    // return tasks;
  }
//this is the other way:
// getTasks(): Task[] {
//   return TASKS;
// }

deleteTask(task: Task): Observable<Task> {
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.delete<Task>(url);
}

updateTaskReminder(task: Task): Observable<Task> {
  const url = `${this.apiUrl}/${task.id}`;
  return this.http.put<Task>(url, task, httpOptions)
}
}
