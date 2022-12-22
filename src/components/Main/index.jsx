// Импорт библиотек
import React, { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';

// импорт компонентов
import { Head } from '../Header';
import { TodosList } from "../TodoList";
import data from '../../data.json'

// передаем все значение с помощью props то есть деструктризируем
export const Main = ({ todos, setTodos, MY_TASKS, theme, toggleTheme }) => {
  const [todosCount, setTodosCount] = useState(
    todos.filter((todo) => !todo.completed && todo).length
  );
// Эффект для вычисления кол-во выполненых и не выполненых, и всех задании
  useEffect(() => {
    setTodosCount(todos.filter((todo) => !todo.completed && todo).length);
  }, [todos]);

  // Функция для добавления новых данных
  const makeTodo = (val) => {

    const newObj = { id: uuid(), text: val, completed: false };    
    setTodos([newObj, ...todos]);
  };

  // Функция для удаления данных 
  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };
// Функция для показа всех данных
  const showAll = () => {
    setTodos(data);
  };
 
// Функция для показа всех выполненых данных
  const showCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        // Фильтр данных если completed true то возвращаем все данные с этим же значением 
        return todo.completed === true;
      })
    );
  };
// Функция для показа активных данных 
  const showActive = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === false;
      })
    );
  };
// Функция для вычеркивания текста 
  const toggleDone = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
// Функция для очистки только выполненых данных
  const clearCompleted = () => {
    setTodos(
      todos.filter((todo) => {
        return todo.completed === false;
      })
    );
  };
  return (
    <div className="core">
      <Head onMake={makeTodo} theme={theme} toggleTheme={toggleTheme} />
      <TodosList
      // Передаем все функ как props 
        onPass={todos}
        onDelete={deleteTodo}
        onClear={clearCompleted}
        onAll={showAll}
        onCompleted={showCompleted}
        onActive={showActive}
        onToggleDone={toggleDone}
        onChangeCount={todosCount}
      />
    </div>
  );
};

