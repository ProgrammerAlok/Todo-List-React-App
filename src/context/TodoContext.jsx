import { createContext, useReducer, useState } from "react";
import todoReducer from "../reducers/todoReducer";

const TodoContext = createContext(null);

const TodoProvider = ({ children }) => {

    // const [list, setList] = useState([
    //     { id: 1, todoData: "todo 1", finished: false },
    //     { id: 2, todoData: "todo 2", finished: true },
    //     { id: 3, todoData: "todo 3", finished: false },
    //     { id: 4, todoData: "todo 4", finished: true },
    // ]);

  const [list, dispatch] = useReducer(todoReducer, [])

  return (
    <TodoContext.Provider 
        value={{list, dispatch}}
    >
        {children}
    </TodoContext.Provider>
    );
};

export { TodoContext, TodoProvider };
