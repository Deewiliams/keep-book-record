import React from "react";

const Books = (props) => {
  return (
    <div className='flex flex-row justify-evenly h-16 md:h-10 lg:h-10 p-2'>
      <h1> Book Title:{props.name}</h1>
      <h1> Date: {props.date}</h1>
      <h1> Time: {props.time}</h1>
    </div>
  );
};

export default Books;
