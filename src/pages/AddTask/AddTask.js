import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthProvider } from '../../Contexts/AuthContext';

const AddTask = () => {

    const {user} = useContext(AuthProvider)

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const image = form.image.value;
        const data = {title, description, image, email: user.email, status: "incomplete"}
        console.log(data);
        form.reset();

        fetch('https://task-master-server-ifazzzz.vercel.app/addTask',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res=> res.json())
        .then(data => {
            if(data.acknowledged === true) {
                toast.success("Task Added")
            }
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="container mx-auto my-24">
            <div className="bg-gray-50 p-8 mx-auto w-1/2 rounded-md">
                <h1 className="text-3xl font-bold text-center">
                    Add Task
                </h1>
                
                <form onSubmit={handleSubmit}>
                <div className="my-6">
                    <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                    <input name="title" type="text" id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                <div className="mb-6">
                    <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                    <input name="description" type="text" id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                </div>
                
                <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Image</label>
                <div className="flex items-center justify-center w-full">
                    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" name="image" type="file" className="hidden" />
                    </label>
                </div> 
                <button type="submit" className="mt-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>
        </div>
    );
};

export default AddTask;