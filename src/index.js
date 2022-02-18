import "./styles.css";

import { Todo, TodoList } from "./classes";
import { crearTodoHTML } from "./js/componentes";

// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHTML(todo));

console.log('todos', todoList.todos)

// const tarea = new Todo("Aprender JS !!!");

// todoList.nuevoTodo(tarea);

// console.log(todoList);
// crearTodoHTML(tarea);


// localStorage.setItem('mi-key', 'sldfghsldgh'); // se agrega el nombre primero y luego el valor de lo q se almacenara
//solo admite strings


// setTimeout(() => {
//   localStorage.removeItem('mi-key')
// }, 2000);

// sessionStorage.setItem('otra-key','12345666'); // es exactamente que el localstorage solo que localstorage vive mas tiempo
