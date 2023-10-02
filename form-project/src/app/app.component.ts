import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-project';
  addTask(task: string) {
    // This method is called when a task is added in the form.
    // You can implement any additional logic here if needed.
  }
}
