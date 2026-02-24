import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Task } from './task/task';
import { Tasks } from './tasks';
import { NewTask } from './new-task/new-task';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [SharedModule, CommonModule, FormsModule],
    exports: [Tasks],
    declarations: [Task, Tasks, NewTask],
    providers: [],
})
export class TasksModule { }
