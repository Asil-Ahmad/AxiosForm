import React, { useEffect, useState, useRef } from "react";
import useOnlineStatus from "./OnlineStatus";

const CustomHooks = () => {
  const isOnline = useOnlineStatus();
  const [count, setCount] = useState(0);

  const btn = useRef();

  console.log("This is from useRef", btn);

  const handleClick = () => {
    // console.log("Progress Saved");
    //document.title = "Saved!";
  };

  const originalTitle = document.title;
  console.log(originalTitle);

  const handleCount = () => {
    setCount(() => count + 1);
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     handleCount();
  //   }, 1000);
  // });

  useEffect(() => {
    if (isOnline) {
      document.title = `${originalTitle} ${count}`;
      // document.title = "Form" + " " + `${count !== 0 ? count : ""}`;
      // count !== 0 ? alert(`You clicked ${count} times!`) : null;
    } else {
      document.title = "Your Offline";
    }
  }, [handleCount]);
  return (
    <div className='container flex flex-col gap-10 dark:text-white '>
      <h1 className='text-4xl '>Custom Hooks:</h1>
      <h1 className=''>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      <button
        onClick={handleClick}
        disabled={!isOnline}
        className={` h-10 w-20 rounded-md overflow-hidden  ${
          isOnline
            ? "bg-green-500 transition-all duration-150"
            : "text-[10px] animate-pulse px-1 bg-gray-400 "
        }`}
      >
        {isOnline ? "Save" : "Reconnecting..."}
      </button>
      <div className='w-full flex justify-center'>
        <button
          ref={btn}
          className='w-1/3 bg-orange-500 rounded-md'
          onClick={handleCount}
        >
          Click here
        </button>
      </div>
    </div>
  );
};

export default CustomHooks;
