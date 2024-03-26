import React, { useState } from 'react'

function Login() {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send formData to backend
        console.log('Form submitted with data:', formData);
        // You can add your backend API call here
    };


  return (
    <div className='lg:h-screen flex justify-center items-center bg-[#0F0D0D]'>
          <div className='w-[35vw] flex flex-col justify-center items-center bg-black rounded-lg h-[90vh]'>
              <h1 className='text-white text-center font-bold text-xl'>Login</h1>
               <div className='flex mt-10 flex-col justify-center items-center gap-5'>
                    <button className='w-[25vw] py-2 font-semibold bg-[#191919] border rounded-lg text-[#FFFFFFE6] text-sm'><span><img src="	https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg" className='inline-block mr-8' alt="" /></span>Continue With Google</button>
                    <button className='w-[25vw] py-2 bg-[#191919] text-[#FFFFFFE6] font-semibold border rounded-lg text-sm'><span><img src="	https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg" className='inline-block mr-5' alt="" /></span>Continue With Facebook</button>
                    <button className='w-[25vw] py-2 rounded-lg bg-[#191919] border text-[#FFFFFFE6] font-semibold text-sm'>Continue With Phone Number</button>
               </div>
               <div className="flex items-center mt-16 w-full justify-center bg-black">
            <form onSubmit={handleSubmit} className="bg-black flex flex-col justify-center items-center shadow-md rounded py-10 w-[35vw] mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none outline-none  rounded w-[27vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-[#191919] focus:shadow-outline"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none bg-[#191919] outline-none rounded py-2 px-3 text-gray-700 mb-3 w-[27vw] leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span
                            className="absolute right-0 top-0 mr-4 mt-2 cursor-pointer"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </span>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold w-[27vw] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
          </div>
    </div>
  )
}

export default Login