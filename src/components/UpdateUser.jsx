import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const { id } = useParams(); //to get id from the url
  const navigate = useNavigate();

  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";

  const [selectedUser, setSelectedUser] = useState({
    username: "",
    email: "",
  });
  const { username, email } = selectedUser;
  console.log(username);

  const fetchUserID = async () => {
    try {
      const response = await axios.get(`${url}/users/${id}`);
      setSelectedUser(response.data.users);
      console.log(selectedUser);
    } catch (error) {
      // alert("An error occured");
    }
  };

  useEffect(() => {
    fetchUserID();
  }, [id]);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({
      ...selectedUser,
      [name]: value,
    });
    console.log(e.target.value);

    // setFormData({ [name]: value });
  };

  const onSubmit = async () => {
    try {
      await axios.put(`${url}/users/${id}`, { users: selectedUser }); //why we doing this here?
      navigate("/");
    } catch (error) {}
  };

  //we doing this becoz our data of users is like this
  // {
  //   "id": "2",
  //   "users": {
  //     "username": "Asil",
  //     "email": "a@a.com",
  //     "password": "m"
  //   }

  return (
    <div className='container min-h-screen flex items-center flex-col justify-center '>
      <h1>This is the current user ID: {id}</h1>
      <form
        className='flex w-1/2 flex-col items-start justify-center p-4 dark:text-white gap-2.5 h-full dark:bg-gray-700 rounded-md
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

        <input
          type='button'
          id='submit'
          value='Submit'
          onClick={onSubmit}
          className='text-center w-full bg-blue-500 disabled:bg-blue-500/50
           hover:bg-blue-600 cursor-pointer text-white uppercase p-1 mt-5 rounded-lg'
        />
      </form>
    </div>
  );
};

export default UpdateUser;
