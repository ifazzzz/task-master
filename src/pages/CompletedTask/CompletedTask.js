import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/AuthContext';

const CompletedTask = () => {
  
    const {user} = useContext(AuthProvider)

    const {data : completedTasks = [], refetch} = useQuery({
        queryKey : ['completedTasks'],
        queryFn : async ()=> {
            try{
               const res = await fetch(` https://task-master-server-ifazzzz.vercel.app/completedTask?email=${user?.email}`);
               const data = await res.json();
               console.log(data);
               return data;
            }
            catch(err) {
              console.log(err);
            }
        }
    })

    const deleteTask = (id) => {
          fetch(` https://task-master-server-ifazzzz.vercel.app/tasks/${id}`,{
            method : 'DELETE',
            headers:  { 'Content-Type': 'application/json'},
          })
          .then(res=> res.json())
          .then(data => {
            if(data.deletedCount > 0 ){
                console.log(data);
                toast.success("task deleted")
                refetch()
            }
          })
    }

    return (
        <div className="container mx-auto my-40 px-60">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {
                completedTasks.map(task =>
                    <div>
                    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                        
                        <Link to=''>
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                        </Link>
                        
                        <div className="mb-6">
                            <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write a comment</label>
                            <input type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <button onClick={()=>deleteTask(task._id)} className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Delete Task
                            <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <Link to="/myTask">
                    <div className="my-6 flex items-center pl-4 rounded-lg border border-gray-200 dark:border-gray-700">
                        <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="bordered-checkbox-1" className="py-4 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Not Completed</label>
                    </div>
                    </Link>
                    </div>
                    )
            }
        </div>
    </div>
    );
};

export default CompletedTask;