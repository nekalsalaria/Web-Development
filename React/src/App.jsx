import { createContext, useContext } from "react";


const ThemeContext = createContext("dark");

function App() {
  return (
    <ThemeContext.Provider value="light">
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return <ThemedButton />;
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  return <button>Current Theme: {theme}</button>;
}
export default App;