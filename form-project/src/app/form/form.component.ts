import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  taskName: string = '';
  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    this.addTaskEvent.emit(this.taskName);
    this.taskName = ''; // Clear the input field after adding the task
  }
}
