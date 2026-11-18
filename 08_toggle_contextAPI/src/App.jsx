import { useEffect, useState } from "react";
import "./App.css";
import { ThemeProvider } from "./contexts/theme";
import ThemeButton from "./components/ThemeButton";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");
  };

  // actual change in theme

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ lightTheme, darkTheme, themeMode }}>
      <div className="flex flex-col flex-wrap min-h-screen items-center justify-center">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          {/* Theme Component*/}
          <ThemeButton />
        </div>
        <div className="w-full max-w-sm mx-auto">
          {/* Card Component */}
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
