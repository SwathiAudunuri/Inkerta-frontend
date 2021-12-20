import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './services/todo.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule
  ],
  exports:[
    
  ],
  providers:[
    TodoService
  ]
})
export class CoreModule { }
