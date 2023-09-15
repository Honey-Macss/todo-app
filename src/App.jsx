import './App.css';
import { useState } from 'react';
import sun from "./Components/Images/icon-sun.svg"
import moon from "./Components/Images/icon-moon.svg"
import Heading from './Components/Views/Heading';
import AddingTasks from './Components/Views/AddingTasks';
import useLocalStorage from './Components/hooks/useLocalStorage';

function App() {
  // In order for the dark class to work properly, we need to configure Tailwind to enable dark mode. We do this in the tailwind.config.js file
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  };

  const [value, setValue] = useState("");
  
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <main className={` min-h-[100vh] bg-white dark:bg-black bg-[url("./Components/Images/bg-desktop-light.jpg")] dark:bg-[url("./Components/Images/bg-desktop-dark.jpg")] bg-no-repeat bg-[length:100%_20rem]`}>
        <div className=' w-[40rem] '>
          <Heading sun={sun} moon={moon} darkMode={darkMode} toggler={toggleDarkMode} />
          <AddingTasks value={value} setValue={setValue} changeHandler={(e) => setValue(e.target.value)} />
          
        </div>
      </main>
    </div>
  );
}

export default App;
