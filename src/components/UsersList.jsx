import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UsersList = () => {
  const url = "https://66b358917fba54a5b7ec8d2f.mockapi.io";
  const [users, setUsers] = useState([]);
 

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${url}/users`);
      setUsers(response.data);
    } catch (error) {
      alert("An error occured!");
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`${url}/users/${id}`);
      location.reload();
    } catch (error) {
      alert("An error occured!");
    }
  };



  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className='container min-h-screen flex items-center justify-center '>
      <div className='relative overflow-x-auto'>
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                User ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Registered Users
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'></th>
              <th scope='col' className='px-6 py-3'></th>
            </tr>
          </thead>
          <tbody>
            {users
              ? users.map((item, index) => (
                  <tr
                    key={index}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                  >
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                    >
                      {item.id}
                    </th>
                    <td className='px-6 py-4'>{item.users.username}</td>
                    <td className='px-6 py-4'>{item.users.email}</td>
                    <Link
                      to={`/updateuser/${item.id}`}
                      onClick={() => updateUser(item.id)}
                      className='text-white'
                    >
                      <td className='px-6 py-4 bg-green-600 hover:bg-green-700 hover:animate-pulse'>
                        Update
                      </td>
                    </Link>
                    <td className='px-6 py-4 bg-red-500 hover:bg-red-600 hover:animate-pulse'>
                      <button
                        onClick={() => deleteUser(item.id)}
                        className='text-white'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              : "No user found"}
          </tbody>
        </table>
        <Link
          className='py-2 mt-5 flex justify-center bg-black text-white font-medium'
          to='/register'
        >
          Register New User
        </Link>
      </div>
    </div>
  );
};

export default UsersList;
