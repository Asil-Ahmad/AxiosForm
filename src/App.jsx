import React from "react";
import Form from "./components/Form";
import { Routes, Route } from "react-router-dom";
import UsersList from "./components/UsersList";
import UpdateUser from "./components/UpdateUser";
import CustomHooks from "./customHook/CustomHooks";
import Ref from "./useRef/Ref";
import UseReducer2 from "./reducer/UseReducer2";

const App = () => {
  return (
    <div className='bg-gradient-to-r min-h-screen from-zinc-700 to-zinc-600'>
      <Routes>
        {/* <Route path='/' element={<UsersList />} /> */}
        {/* <Route path='/' element={<CustomHooks />} /> */}
        <Route path='/' element={<UseReducer2 />} />
        {/* <Route path='/' element={<Ref />} /> */}
        <Route path='/' element={<UsersList />} />
        <Route path='/register' element={<Form />} />
        <Route path='/updateuser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
};

export default App;
