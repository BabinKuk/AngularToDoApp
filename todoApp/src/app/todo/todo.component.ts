import { Component, OnInit } from '@angular/core';
import { TodoListProvider } from '../todolistprovider';
import { TodoListComponent} from '../todo-list/todo-list.component';

@Component({
  moduleId: module.id,
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoListProvider: TodoListProvider[];
  todoName: string;

  todoDetails: TodoListProvider;

  constructor() {
    this.todoListProvider = [
      new TodoListProvider('Task 1', Date.now() ),
      new TodoListProvider('Task 2', Date.now() ),
      new TodoListProvider('Task 3', Date.now() ),
      new TodoListProvider('Task 4', Date.now() ),
      new TodoListProvider('Task 5', Date.now() ),
    ];
  }

  ngOnInit() {
  }

  todoSelected(todo: TodoListProvider): void {
    this.todoName = todo.name;
    this.todoDetails = todo;
    console.log('todoDetails', this.todoDetails);
  }

}
