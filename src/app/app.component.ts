import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = '';
  tasklist: { id: number; task: string }[] = [];
  addTask() {
    if (this.task === '') {
      return;
    }
    this.tasklist.push({ id: this.tasklist.length + 1, task: this.task });
    console.log(this.tasklist);
    this.task = '';
  }
  removeTask(id: number) {
    this.tasklist = this.tasklist.filter((task) => {
      return task.id !== id;
    });
  }
}
