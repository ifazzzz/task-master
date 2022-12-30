import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Root from "../Layout/Root";
import AddTask from "../pages/AddTask/AddTask";
import CompletedTask from "../pages/CompletedTask/CompletedTask";
import EditTask from "../pages/MyTask/EditTask";

import MyTask from "../pages/MyTask/MyTask";
import TaskDetails from "../pages/MyTask/TaskDetails";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<AddTask></AddTask> 
            },
            {
                path: '/addTask',
                element: <AddTask></AddTask>
            },
            {
                path: '/myTask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedTask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/editTask',
                element: <EditTask></EditTask>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/myTask/:id',
                element: <TaskDetails></TaskDetails>,
                loader: ({params})=> fetch(`https://task-master-server-ifazzzz.vercel.app/myTask/${params.id}`)
            }
        ],
    }
])