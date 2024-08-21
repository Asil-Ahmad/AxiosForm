import React from "react";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import UpdateUser from "./components/UpdateUser";

const App = () => {
  return (
    <div className='bg-gradient-to-r from-zinc-700 to-zinc-600'>
      <Routes>
        <Route path='/' element={<UsersList />} />
        <Route path='/register' element={<Form />} />
        <Route path='/updateuser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
