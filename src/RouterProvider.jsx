import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
 
 
import Authentication from "./components/childrens/Authentication";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        children:[
            {
                path:"/register",
                element:<Authentication></Authentication>
            },
            {
                path:"/login",
                element:<Authentication></Authentication>
            }
        ]
    }
])