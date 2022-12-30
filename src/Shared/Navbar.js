import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../Contexts/AuthContext';

const Navbar = () => {

    const {user, logOut} = useContext(AuthProvider)

    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link href="https://flowbite.com" className="flex items-center">
                        <img src="https://cdn-icons-png.flaticon.com/512/7792/7792148.png" className="h-8 mr-3 sm:h-9" alt="Flowbite Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Task-master</span>
                    </Link>
                    <div className="flex items-center">
                        {
                            user?.uid? 
                            <button onClick={logOut} className="text-md font-medium text-blue-600 dark:text-blue-500 hover:underline">Logout</button>
                            :
                            <Link to="/login" className="text-md font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                            
                        }
                    </div>
                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div className="flex items-center">
                        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            
                            <li>
                                <Link to='/addTask' className="text-gray-900 dark:text-white hover:underline">Add-Task</Link>
                            </li>
                            <li>
                                <Link to='myTask' className="text-gray-900 dark:text-white hover:underline">My-Tasks</Link>
                            </li>
                            <li>
                                <Link to='completedTask' className="text-gray-900 dark:text-white hover:underline">Completed-Task</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;