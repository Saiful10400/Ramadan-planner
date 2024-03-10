import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
 
 
import Authentication from "./components/childrens/Authentication";
import Home from "./components/childrens/Home/Home";
import LeaderBoard from "./components/childrens/leaderboard/LeaderBoard";
import ExclusiveTask from "./components/childrens/Home/subcomponent/ExclusiveTask";
import RegularTask from "./components/childrens/Home/subcomponent/RegularTask";

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
            },
            {
                path:"/",
                element:<Home></Home>,
                children:[
                    {
                        path:"/",
                        element:<ExclusiveTask></ExclusiveTask>
                    },
                    {
                        path:"/regular_task",
                        element:<RegularTask></RegularTask>
                    }
                ]
            },
            {
                path:"/leader_board",
                element:<LeaderBoard></LeaderBoard>
            }
        ]
    }
])