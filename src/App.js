import logo from "./logo.svg";
import "./App.css";
import ButtonCounter from "./components/HOC/ButtonCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ContextProvider from "./components/Context/ContextProvider";
import ContextUser from "./components/Context/ContextUser";
import Parent from "./components/PassingDataFromChildToParent/Parent";

function App() {
  return (
    <div className="App">
      <ButtonCounter />
      <HoverCounter />

      <ContextProvider>
        <ContextUser />
      </ContextProvider>

      <Parent />
    </div>
  );
}

export default App;
