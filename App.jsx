import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./src/components/Main";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import AddDetails from "./src/components/AddDetails";
import Form from "./src/components/UseReducer";
import TaskApp from "./src/components/TodoList";

const Applayout = () => {
  return (
    <Provider store={store}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <AddDetails/>
        <Main />
        <Form/>
        <TaskApp/>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
