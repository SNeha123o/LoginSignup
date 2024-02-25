import React from 'react'
import logo from './Logo.png'
import { useState } from 'react'
import google from './google.png'
import microsoft from './microsoft.png'
import { Link} from 'react-router-dom';


function LoginIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showResetModal, setShowResetModal] = useState(false);
    const [newPassword, setNewPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', email, password);

        if (rememberMe) {
          localStorage.setItem('rememberedEmail', email);
          localStorage.setItem('rememberedPassword', password);
        } else {
          localStorage.removeItem('rememberedEmail');
          localStorage.removeItem('rememberedPassword');
        }
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
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, newPassword })
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

      React.useEffect(() => {
        const rememberedEmail = localStorage.getItem('rememberedEmail');
        const rememberedPassword = localStorage.getItem('rememberedPassword');
        if (rememberedEmail && rememberedPassword) {
          setEmail(rememberedEmail);
          setPassword(rememberedPassword);
          setRememberMe(true);
        }
      }, []);

      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email)
      }

  return (
       <>
   <div className='flex h-[630px] bg-green-950 m-8'>
    <div className='text-left mx-8 w-2/5'>
        <img className='border rounded-full h-28 ml-12 my-12' src={logo} />
        <h1 className='text-yellow-300 text-4xl my-8 font-medium'>Welcome Back</h1>
        <h1 className='text-yellow-300 text-4xl my-5 font-medium'>SIGN IN TO AI CHEF MASTER</h1>
        <p className='text-white text-3xl'>Where Taste Meets Technology: Experience AI Chef Master</p>
    </div>
    <div className=' bg-yellow-100 w-full border rounded-l-3xl'>
        <h1 className='text-4xl font-medium ml-40 mt-32'>Login Account</h1>
        <form onSubmit={handleSubmit} className="my-5 flex flex-col justify-start gap-y-7 ml-32">
        <div className="md:w-3/4 text-sm  flex md:gap-x-24">
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black  focus:outline-none w-3/4 placeholder-black rounded-lg"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Email Address'
            />
        </div>
        <div className="md:w-3/4 text-sm  flex md:gap-x-24">
            <input 
                type="text" 
                className="p-3 bg-yellow-100 border border-black  focus:outline-none w-3/4 placeholder-black rounded-lg"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password'
            />
        </div>
        <div className='flex'>
        <label >
                <input
                  type="checkbox"
                  style={{ transform: "scale(1.5)", marginRight: "5px" }}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              {/* <p className='ml-64 text-green-950 font-medium underline'>Forget Password</p> */}
              <Link to='/forget'>
              <button type="button" className='ml-64 text-green-950 font-medium underline' onClick={handleForgetPassword}>Forget Password</button>
              </Link>
              </div>

              <button type='submit' className='bg-green-950 py-2 item-center ml-8  my-5 w-1/2 text-white text-2xl rounded-lg '>Login</button>
        </form>
        {/* {showResetModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowResetModal(false)}>&times;</span>
            <form onSubmit={handleResetPassword}>
              <div className="form-group ml-32">
                <label>Email Address</label>
                <input
                  type="text"
                  className="p-3 bg-yellow-100 border border-black  focus:outline-none w-1/3 placeholder-black rounded-lg ml-5"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group py-6 ml-32">
                <label>New Password</label>
                <input
                  type="text"
                  className="p-3 bg-yellow-100 border border-black  focus:outline-none w-1/3 placeholder-black rounded-lg ml-5"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
                <button type="submit" className='ml-8 text-green-950 underline'>Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      )} */}
        
    <p className='text-2xl font-bold ml-64 my-5 '>Or <Link className='ml-2 text-xl font-medium text-green-950' to="/">Create New Account</Link></p>
        <div className='ml-36 flex'>
        <div className='border p-2 rounded-lg border-black flex w-52'>
            <img className='mr-2' src={google}/>
            <button className=' font-medium '>Signup With Google</button>
        </div>
        <div className='ml-12 border p-2  rounded-lg border-black flex'>
            <img className='mr-2' src={microsoft} />
            <button className=' font-medium '>Signup With Microsoft</button>
        </div>
    </div>
    </div>
    
   </div>
   </>
  )
}

export default LoginIn
