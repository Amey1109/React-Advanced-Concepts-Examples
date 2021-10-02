import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducer from "./Reducer";
import UserDetails from "./UserDetails";
import { GET } from "../Axios/axiosUtils"


export default function Store() {
  const [todos,setTodos] = useState([])
  const state = {
    userDetails: [
      { name: "Amey" },
      { name: "Saurabh" },
      { name: "Sandesh" },
      { name: "Bhushan" },
    ],
    todoList: todos
  };
  const store = createStore(Reducer,state);
  const getInitialData =  () =>{
    const response =  GET("/todos")
    response?.then((res)=>{
      setTodos(res?.data)
    }).catch((e)=>{
      console.log(e)
    })
  }
  useEffect(()=>{
    getInitialData()
  },[])

  return (
    <Provider store={store}>
      <UserDetails />
    </Provider>
  );
}
