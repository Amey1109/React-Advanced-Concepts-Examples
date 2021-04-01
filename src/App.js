import logo from "./logo.svg";
import "./App.css";
import ButtonCounter from "./components/HOC/ButtonCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ContextProvider from "./components/Context/ContextProvider";
import ContextUser from "./components/Context/ContextUser";
import Parent from "./components/PassingDataFromChildToParent/Parent";
import Store from "./components/Redux/Store";

function App() {
  return (
    <div className="App">
      {/* <ButtonCounter />
      <HoverCounter />

      <ContextProvider>
        <ContextUser />
      </ContextProvider>

      <Parent /> */}

      <Store/>

      
    </div>
  );
}

export default App;
