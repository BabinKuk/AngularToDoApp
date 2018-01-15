import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListProvider } from '../todolistprovider';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  todoList: TodoListProvider[];

  @Output()
  onTodoSelected: EventEmitter<TodoListProvider>;

  currentTodo: TodoListProvider;

  constructor() {
    this.onTodoSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  selectedTodo(todo: TodoListProvider): void {
    console.log('selected todo', todo.name);
    this.currentTodo = todo;
    this.onTodoSelected.emit(todo);
  }

  isSelected(todo: TodoListProvider): boolean {
    // console.log('isSelected', todo.name);
    if (!this.currentTodo) {
      console.log('not currentTodo', false);
      return false;
    }
    //console.log('return', this.currentTodo.name ===  todo.name);
    return this.currentTodo.name ===  todo.name ? true : false;
  }

}
