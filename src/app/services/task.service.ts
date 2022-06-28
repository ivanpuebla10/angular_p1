import { Injectable } from '@angular/core';
import { TASKS } from '../mock-tasks'
import {Task} from '../Task'
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
//this way is using observables:
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS)
    return tasks;
  }
//this is the other way:
// getTasks(): Task[] {
//   return TASKS;
// }
}
