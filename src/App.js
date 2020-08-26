import React, { useReducer } from "react";
import "./styles.css";

const UserContext = React.createContext();
const UserProvider = UserContext.Provider;

export default function App() {
  // {nameL 'jim', age: 28}
  const [user, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "increaseAge":
          return { ...state, age: state.age + 1 };
        case "changeName":
          return { ...state, name: action.payload };
        default:
          return "Undefined Action";
      }
    },
    { name: "" }
  );

  return (
    <UserProvider value={{ user, dispatch }}>
      <div className="App">
        <h1>Hello {user.name}</h1>
        <h1>Age: {user.age}</h1>
        <button type="button" onClick={() => dispatch({ type: "increaseAge" })}>
          Increase Age
        </button>
        <button
          type="button"
          onClick={() =>
            dispatch({ type: "changeName", payload: "Ron Weasley" })
          }
        >
          Change Name
        </button>
      </div>
    </UserProvider>
  );
}
