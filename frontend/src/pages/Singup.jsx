import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Singup() {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
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

const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data:', formData);

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const res = await axios.post('http://localhost:2000/api/user/', formData, config);
        console.log('Response:', res.data);
    } catch (error) {
        console.error('Error:', error.response.data);
    }
};



  return (
    
    <div className='lg:h-screen flex justify-center co items-center bg-[#0F0D0D]'>
    <div className='lg:w-[35vw] w-full flex flex-col justify-center items-center bg-black rounded-lg h-screen lg:h-[95vh]'>
        <h1 className='text-white text-center font-bold mb-10 lg:mb-0 mt-3 text-2xl lg:text-xl'>Sing Up To Start Chating</h1>
         <div className="flex items-center w-full justify-center bg-black">
      <form onSubmit={handleSubmit} className="bg-black flex flex-col justify-center items-center shadow-md rounded py-8 w-[35vw] mb-4">
          <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                  Username
              </label>
              <input
                  className="shadow appearance-none outline-none rounded w-[80vw] lg:w-[25vw] py-2 px-3 text-white leading-tight border focus:outline-none bg-[#121212] focus:shadow-outline"
                  id="username"
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
              />
          </div>
          <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                  Email Address
              </label>
              <input
                  className="shadow appearance-none outline-none rounded w-[80vw] lg:w-[25vw] py-2 px-3 text-white leading-tight border focus:outline-none bg-[#121212] focus:shadow-outline"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={handleChange}
              />
          </div>
          <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                  Password
              </label>
              <div className="relative">
                  <input
                      className="shadow appearance-none bg-[#121212] outline-none rounded py-2 px-3 text-white mb-3 w-[80vw] lg:w-[25vw] border leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                  <span
                      className="absolute text-white right-0 top-0 mr-4 mt-3 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                  >
                      {showPassword ? <svg role="img" height="17" fill='white' width="17" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M6.703 7.382A6.073 6.073 0 0 0 6.113 10c0 3.292 2.614 6 5.887 6 3.273 0 5.886-2.708 5.886-6 0-.936-.211-1.825-.589-2.618.573.341 1.115.744 1.634 1.204.674.596 1.77 1.793 2.683 3.414-.913 1.62-2.01 2.818-2.683 3.414C17.037 17.093 14.833 18 12 18s-5.037-.907-6.931-2.586c-.674-.596-1.77-1.793-2.683-3.414.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204zM12 4C8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453C5.996 18.908 8.672 20 12 20c3.329 0 6.004-1.091 8.258-3.089.896-.794 2.3-2.353 3.38-4.453l.237-.458-.236-.458c-1.082-2.1-2.485-3.659-3.381-4.453C18.004 5.09 15.328 4 12 4zm0 2c2.125 0 3.886 1.77 3.886 4S14.125 14 12 14s-3.886-1.77-3.886-4S9.875 6 12 6z"></path></svg> : <svg role="img" fill='white' height="17" width="17" aria-hidden="true" viewBox="0 0 24 24" data-encore-id="icon" class="Svg-sc-ytk21e-0 uPxdw"><path d="M22.207 2.824a1 1 0 1 0-1.414-1.414L17.15 5.053C15.621 4.363 13.92 4 12 4 8.671 4 5.996 5.091 3.742 7.089c-.896.794-2.3 2.353-3.381 4.453L.125 12l.236.458c1.082 2.1 2.485 3.659 3.381 4.453.278.246.562.479.853.697L1.793 20.41a1 1 0 1 0 1.414 1.414l3.126-3.126.003.002 1.503-1.503-.004-.001 1.73-1.73.004.001 1.567-1.567h-.004l4.68-4.681.001.004 1.595-1.595-.002-.003.11-.109.002.002 1.444-1.444-.003-.002 3.248-3.248zM14.884 7.32l-5.57 5.57A4.035 4.035 0 0 1 8.113 10c0-2.23 1.761-4 3.886-4 1.137 0 2.17.506 2.884 1.319zM7.9 14.304l-1.873 1.873a11.319 11.319 0 0 1-.957-.763C4.396 14.818 3.3 13.621 2.387 12c.913-1.62 2.01-2.818 2.683-3.414.519-.46 1.061-.863 1.634-1.204A6.073 6.073 0 0 0 6.113 10c0 1.681.682 3.21 1.786 4.304zm11.568-5.2 1.415-1.415a16.503 16.503 0 0 1 2.756 3.853l.236.458-.236.458c-1.082 2.1-2.485 3.659-3.381 4.453C18.004 18.908 15.328 20 12 20a13.22 13.22 0 0 1-3.08-.348l1.726-1.726c.435.05.886.074 1.354.074 2.833 0 5.037-.907 6.931-2.586.674-.596 1.77-1.793 2.683-3.414a14.515 14.515 0 0 0-2.146-2.896z"></path><path d="M17.843 10.729c-.328 2.755-2.494 4.956-5.24 5.24l5.24-5.24z"></path></svg>}
                  </span>
              </div>
          </div>
          <div className="flex items-center justify-between">
              <button
                  className="bg-[#1ED760] text-black font-bold w-[80vw] lg:w-[25vw] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
              >
                  Sing Up
              </button>
          </div>
      </form>
  </div>
  <div className='lg:w-[25vw] w-[80vw] border opacity-15'>
               
          </div>
  <div className='flex mt-10 flex-col justify-center items-center gap-3'>
              <button className=' w-[80vw] lg:w-[25vw] py-2 font-semibold bg-[#121212] border rounded-lg text-[#FFFFFFE6] text-sm'><span><img src="	https://accounts.scdn.co/sso/images/new-google-icon.72fd940a229bc94cf9484a3320b3dccb.svg" className='inline-block mr-8' alt="" /></span>Sign Up With Google</button>
              <button className=' w-[80vw] lg:w-[25vw] py-2 bg-[#121212] text-[#FFFFFFE6] font-semibold border rounded-lg text-sm'><span><img src="	https://accounts.scdn.co/sso/images/new-facebook-icon.eae8e1b6256f7ccf01cf81913254e70b.svg" className='inline-block mr-5' alt="" /></span>Sign Up With Facebook</button>
         </div>
         <div className='lg:w-[25vw] w-[80vw] mt-14 lg:mt-10 border opacity-15'>
               
          </div>
          <div className='lg:mt-7 mt-10'>
               <h1 className='text-white font-semibold'>Already have an account? <Link to="/"><span className='text-[#1ED760] underline'>Log In Here</span></Link> </h1>
          </div>
    </div>
</div>
  )
}

export default Singup