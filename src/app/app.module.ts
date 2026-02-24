import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { HeaderComponent } from './header/header';
import { User } from './user/user';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
  declarations: [
    App, 
    HeaderComponent, 
    User
  ],
  bootstrap: [App],
  imports: [
    BrowserModule, 
    FormsModule, 
    SharedModule, 
    TasksModule
  ],
})
export class AppModule {}
