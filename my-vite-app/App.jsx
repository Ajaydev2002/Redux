import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import Main from "../my-vite-app/src/components/Main";
import store from "../my-vite-app/src/redux/store";
import AddDetails from "../my-vite-app/src/components/AddDetails";
import Form from "../my-vite-app/src/components/UseReducer";
import TaskApp from "../my-vite-app/src/components/TodoList";

const Applayout = () => {
  return (
    <Provider store={store}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        <AddDetails/>
        <Main/>
        <Form/>
        <TaskApp/>
      </div>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
