import "./App.css";
import ButtonCounter from "./components/HOC/ButtonCounter";
import HoverCounter from "./components/HOC/HoverCounter";
import ContextProvider from "./components/Context/ContextProvider";
import ContextUser from "./components/Context/ContextUser";
import Parent from "./components/PassingDataFromChildToParent/Parent";
import Store from "./components/Redux/Store";
import Users from "./components/Hooks/UseReducer/Users";
import UsingAxios from "./components/Axios/UsingAxios";
import InputForm from "./components/Hooks/CustomHook/InputForm";
import User from "./components/Hooks/UseState/User";
import HeroApp from "./components/ErrorBoundary/HeroApp";

function App() {
  return (
    <div className="App">
      {/* <ButtonCounter />
      <HoverCounter />

      <ContextProvider>
        <ContextUser />
      </ContextProvider>

      <Parent />

      <Store/>

      <Users/>
      <UsingAxios/>

      <InputForm /> */}

      

      {/* <HeroApp/> */}
    </div>
  );
}

export default App;
