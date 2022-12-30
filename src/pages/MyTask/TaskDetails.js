import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {

    const task = useLoaderData()

    return (
        <div className="container mx-auto my-24">            
            <div class="mx-auto block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{task.title}</h5>
                <p class="font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
            </div>
        </div>
    );
};

export default TaskDetails;