import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task?: Task;
  @Output() onDeleteTask = new EventEmitter();
  @Output() onToggleTask = new EventEmitter();

  faTimes = faTimes;

  onDelete(task?: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task?: Task) {
    this.onToggleTask.emit(task);
  }
}
