import { Component } from '@angular/core';
import { Todo } from '../todo';
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {

  todos = [];
  todo = new Todo(
    '人参を買う',
    false,
    new Date(2019, 11, 31)
  );

  constructor() { }

  // @param {String} event 'yyyy-mm-dd'
  dueDateChanged(event) {
    const dateArr = event.split('-');
    const year = dateArr[0];
    const month = Number(dateArr[1]) - 1;
    const date = dateArr[2];
    this.todo.dueDate = new Date(year, month, date);
  }

  onSubmit() {
    this.todos.unshift({id: this.randomId(), ...this.todo});
    // { hoge: 1, hage: 2, fuga: 3}
    // hoge: 1, hage: 2, fuga: 3
  }

  deleteTodo(todo) {
    this.todos = this.todos.filter( e => e.id !== todo.id);
  }

  randomId() {
    return Math.random().toString(32).substring(2);
  }

}
