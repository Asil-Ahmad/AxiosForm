import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [users, setUsers] = useState({ username: "", email: "", password: "" });
  const { username, email, password } = users; //destructure
  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";

  const handleSubmit = async (e) => {
    if (username && email && password !== "") {
      e.preventDefault();
      await axios
        .post(`${url}/users`, {
          users,
        })
        .then(function (response) {
          console.log(response);
          console.log("Response Data:-", response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      setUsers({ username: "", email: "", password: "" }); //this will empty the input field
    } else {
      alert("Enter All Details!!");
    }
  };

  const onInputChange = (e) => {
    //we are destructuring e.target.value and e.target.name below....
    const { name, value } = e.target;

    setUsers((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className='container text-center content-center w-[25%] text-white min-h-screen max-sm:w-[100%]'>
      <h1 className='text-center text-2xl font-semibold font-sans underline p-1 tracking-wide'>
        Axios
      </h1>
      <form
        className='flex flex-col items-start justify-center p-4 gap-2.5 h-full w-full bg-gray-300 rounded-md
       bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10'
      >
        <label htmlFor='username' className='tracking-wider'>
          Name
        </label>
        <input
          type='text'
          name='username'
          id='username'
          required
          value={username}
          onChange={onInputChange}
          className='border-[2px] outline-none pl-2 rounded-lg text-black w-full'
        />
        <label htmlFor='email' className='tracking-wider'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          required
          value={email}
          onChange={onInputChange}
          className='border-[2px] outline-none pl-2 rounded-lg  text-black w-full'
        />
        <label htmlFor='password' className='tracking-wider'>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          required
          value={password}
          onChange={onInputChange}
          className='border-[2px] pl-2 outline-none rounded-lg  text-black w-full'
        />
        <input
          type='submit'
          id='submit'
          value='Submit'
          onClick={handleSubmit}
          className='text-center w-full bg-blue-500 disabled:bg-blue-500/50
           hover:bg-blue-600 cursor-pointer text-white uppercase p-1 mt-5 rounded-lg'
        />
      </form>
    </div>
  );
};

export default Form;
