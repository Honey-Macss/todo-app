import './App.css';
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

  
  
  return (
    <div className={` ${darkMode ? "dark" : ""}`}>
      <main className={` min-h-[100vh] flex justify-center bg-[#fafafa] dark:bg-[#181824] bg-[url("./Components/Images/bg-desktop-light.jpg")] dark:bg-[url("./Components/Images/bg-desktop-dark.jpg")] bg-no-repeat bg-[length:100%_18rem]`}>
        <div className=' w-[35rem] mt-[3.5rem] '>
          <Heading sun={sun} moon={moon} darkMode={darkMode} toggler={toggleDarkMode} />
          <AddingTasks />
          
        </div>
      </main>
    </div>
  );
}

export default App;
