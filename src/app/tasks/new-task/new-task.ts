import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';


@Component({
  standalone: true,
  selector: 'app-new-task',
  templateUrl: './new-task.html',
  imports: [FormsModule],
  styleUrl: './new-task.css'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate
    });
  }
}
