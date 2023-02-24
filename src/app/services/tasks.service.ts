import { Injectable } from '@angular/core';
import { Task } from 'src/app/Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasksService {

  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) { }
  
  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
}
