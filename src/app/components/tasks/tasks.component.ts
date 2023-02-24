import { Component } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) { }
  
  ngOnInit() {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
