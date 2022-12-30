import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthProvider } from '../Contexts/AuthContext';

const Register = () => {

    const navigate = useNavigate()

    const{createUser} = useContext(AuthProvider);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(result => {
         const user = result.user;
         console.log(user);
         if(user){
            toast.success("signup successful")
            navigate('/')
         }
        })
        .catch(err => {
         console.log(err);
        })
 
     }

    return (
        <div className="container mx-auto my-24">
            <div className="w-2/3 mx-auto p-8 space-y-3 rounded-xl bg-gray-50 text-gray-800">
                <h1 className="text-2xl font-bold text-center">Sign up</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="username" className="block text-gray-600">Email Address</label>
                        <input type="email" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block text-gray-600">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-800 focus:border-blue-600" />
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-sm text-gray-50 bg-blue-600">Sign up</button>
                </form>
               
            </div>
        </div>
    );
};

export default Register;