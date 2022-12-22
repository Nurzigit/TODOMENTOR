import "./App.css";
import { Main } from "./components/Main";
import { useEffect, useState } from "react";
import data from "./data.json";

function App() {
  // саздаем состаяния для темы 
  const [theme, setTheme] = useState("light");

  // Перезаписывем все данные на другую переменую что б было лего работать
  const MY_TASKS = 
     JSON.parse(localStorage.getItem("myTasks"))
     || [...data];
  const [todos, setTodos] = useState(MY_TASKS);

  // Колл бак функция для управления темами
  const toggleTheme = () => {
    setTheme(theme === 'light'? 'dark': 'light')
  }
// Саздаем useEffect для сохраениения всех данных в браузере
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("myTasks", JSON.stringify(todos));
  }, [theme, todos]);

  return (
    <main className={`${theme}-mode`}>
      <div className="App">
        <Main todos={todos} setTodos={setTodos} MY_TASKS={MY_TASKS} toggleTheme={toggleTheme} theme={theme}/>
      </div>
    </main>
  );
}

export default App;
