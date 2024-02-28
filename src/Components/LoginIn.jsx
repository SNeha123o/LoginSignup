import React from 'react';
import logo from './Logo.png';
import { useState } from 'react';
import google from './google.png';
import microsoft from './microsoft.png';
import { Link } from 'react-router-dom';

function LoginIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    React.useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        if (rememberedEmail && rememberedPassword) {
            setEmail(rememberedEmail);
            setPassword(rememberedPassword);
            setRememberMe(true);
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    const handleForgetPassword = () => {
        setShowResetModal(true);
    };

    const handleResetPassword = async () => {
        try {
            // Send a request to your backend to reset the password
            const response = await fetch('/api/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, newPassword }),
            });

            if (response.ok) {
                // Password reset successful, close the modal
                setShowResetModal(false);
                alert('Password reset successfully!');
            } else {
                // Handle password reset failure
                const errorMessage = await response.text();
                alert(`Password reset failed: ${errorMessage}`);
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            alert('An error occurred while resetting password');
        }
    };

    return (
        <>
            <div className="flex flex-col md:flex-row bg-emerald-800 m-8 h-[680px]">
                <div className="text-left mx-8 w-full md:w-2/5">
                    <img className=" rounded-full h-52 ml-12 my-5" src={logo} alt="Logo" />
                    <h1 className="text-yellow-300 text-4xl my-8 font-medium">Welcome Back</h1>
                    <h1 className="text-yellow-300 text-4xl my-5 font-medium">SIGN IN TO AI CHEF MASTER</h1>
                    <p className="text-white text-3xl">Where Taste Meets Technology: Experience AI Chef Master</p>
                </div>
                <div className="bg-yellow-100 w-full border rounded-l-3xl">
                    <h1 className="text-4xl font-medium ml-8 md:ml-40 mt-32">Login Account</h1>
                    <form onSubmit={handleSubmit} className="my-5 flex flex-col justify-start gap-y-7 ml-8 md:ml-32">
                        <div className="md:w-3/4 text-sm flex md:gap-x-24">
                            <input
                                type="text"
                                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full placeholder-black rounded-lg"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email Address"
                            />
                        </div>
                        <div className="md:w-3/4 text-sm flex md:gap-x-24">
                            <input
                                type="password"
                                className="p-3 bg-yellow-100 border border-black focus:outline-none w-full placeholder-black rounded-lg"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                            />
                        </div>
                        <div className="flex items-center md:ml-24">
                            <input
                                type="checkbox"
                                style={{ transform: 'scale(1.5)', marginRight: '5px' }}
                                onChange={(e) => setRememberMe(e.target.checked)}
                            />
                            <span className="text-sm text-gray-700">Remember me</span>
                            <button
                                type="button"
                                className="ml-2 text-sm text-emerald-800 underline"
                                onClick={handleForgetPassword}
                            >
                                Forget Password
                            </button>
                        </div>
                        <button
                            type="submit"
                            className="bg-emerald-800 py-2 ml-8 md:ml-0 my-5 w-full md:w-3/4 text-white text-2xl rounded-lg hover:scale-110"
                        >
                            Login
                        </button>
                    </form>

                    <p className="text-2xl font-bold ml-8 md:ml-64 my-5">
                        Or{' '}
                        <Link className="ml-2 text-xl font-medium text-emerald-800" to="/">
                            Create New Account
                        </Link>
                    </p>
                    <div className='ml-8 md:ml-40 flex flex-col md:flex-row'>
          <div className='border p-2 rounded-lg border-black flex w-full md:w-52 hover:scale-110'>
            <img className='mr-2' src={google} alt="Google" />
            <button className='font-medium '>Signup With Google</button>
          </div>
          <div className='mt-4 md:mt-0 md:ml-8 border p-2 rounded-lg border-black flex w-full md:w-64 hover:scale-110'>
            <img className='mr-2' src={microsoft} alt="Microsoft" />
            <button className='font-medium '>Signup With Microsoft</button>
          </div>
        </div>
                </div>
            </div>
        </>
    );
}

export default LoginIn;
