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
import HeroApp from "./components/ErrorBoundary/HeroApp";
import Ref from "./components/Refs/Ref";
import UseRef from "./components/Hooks/useRef/UseRef";
import ParentComponent from "./components/PureComponent/ParentComponent";
import CounterEntry from "./components/ReduxThunk/CounterEntry";
import UsersContext from "./components/Hooks/useContext/UsersContext";

function App() {
  return (
    <div className="App">
      {/* <ButtonCounter />
      <HoverCounter /> */}

      {/* <ContextProvider>
        <ContextUser />
      </ContextProvider> */}

      {/* <Parent /> */}

      <Store/>

      {/* <Users/> */}
      {/* <UsingAxios/> */}

      {/* <InputForm /> */}

      {/* <HeroApp/> */}

      {/* <Ref /> */}

      {/* <UseRef/> */}

      {/* <ParentComponent/> */}

      {/* <CounterEntry/> */}

      {/* <UsersContext /> */}

      
    </div>
  );
}

export default App;
