import "./App.css";
import Core from "./components/Core";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    document.body.classList.forEach((classs) => {
      document.body.classList.remove(classs);
    });

    document.body.classList.toggle(theme);
  }, [theme]);
  return (
    <main className={`${theme}-mode`}>
      <div className="App">
        <Core onChangeTheme={setTheme} />
        <footer className="attribution">
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </footer>
      </div>
    </main>
  );
}

export default App;
