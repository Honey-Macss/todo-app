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
      <main className={` min-h-[100vh] flex justify-center md:px-[4rem] md2:px-[2.5rem] md3:px-[1.8rem] sm2:px-[1rem] sm3:px-0 bg-[#fafafa] dark:bg-[#181824] bg-[url("./Components/Images/bg-desktop-light.jpg")] sm:bg-[url("./Components/Images/bg-mobile-light.jpg")] dark:bg-[url("./Components/Images/bg-desktop-dark.jpg")] sm:dark:bg-[url("./Components/Images/bg-mobile-dark.jpg")] bg-no-repeat bg-[length:100%_18rem] sm:bg-[length:100%_14rem]`}>
        <div className=' w-[35rem] lg:w-[30rem] md:w-[100%] mt-[3.5rem] sm:mt-[3rem] '>
          <Heading sun={sun} moon={moon} darkMode={darkMode} toggler={toggleDarkMode} />
          <AddingTasks />
          
        </div>
      </main>
    </div>
  );
}

export default App;
